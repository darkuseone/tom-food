/* 009 — `shapes`: «Но единого хачапури нет: имеретинский — круглый, мегрельский — с сыром ещё и сверху.» Пекарня-лавка: витрина с вязью-узором, корзины шоти,
   доска-меню с завитками грузинского письма, продавщица за прилавком, покупатель с авоськой. На «нет:» на прилавок падает табличка «ОДИН?» и тут же перечёркивается;
   на «имеретинский» на доске выезжает круглый с флажком ИМЕРЕТИ; на «мегрельский» — второй круг с флажком МЕГРЕЛИЯ, а на «сверху.» на него шлёпается пласт сыра
   (брызги, Том жмурится). Под тканью в углу — третий, «загадочный» силуэт лодочки (ответ — в следующей сцене). Переход В сцену: дверца печи тоне уезжает вверх, жар и искры. */
(() => {
  EV.sp_no = wtw('s3', 'нет:');
  EV.sp_im = wtw('s3', 'имеретинский');
  EV.sp_meg = wtw('s3', 'мегрельский');
  EV.sp_top = wtw('s3', 'сверху.');
  SHAKES.push([EV.sp_top + 0.25, 0.2, 10]);
  KEYW.push('сверху.');

  function shop(t) { vgrad(-600, 1500, ['#f2e4c8', '#ead6b0', '#dcc298']); for (let i = 0; i < 7; i++) { push(-150 + i * 220, 140, 1); pencil(spline([[-80, 0], [-40, -40], [0, 0], [40, -40], [80, 0]], false, 8), { w: 5, col: '#a8422a', a: 0.7, pass2: false }); ell(0, 20, 10, 10, { wash: '#2a6a8a', washA: 0.8, line: false }); pop(); }
    push(700, 560, 1); rect(-200, -170, 400, 300, { wash: '#2a2a26', washA: 1, w: 10, col: '#8a6a3a', key: 10800 }); txt('ХАЧАПУРИ', 0, -110, 40, { font: 'Hand', col: '#f2f0e6' });
      for (let r = 0; r < 4; r++) { pencil(spline([[-160, -50 + r * 44], [-120, -60 + r * 44], [-80, -46 + r * 44], [-40, -58 + r * 44]], false, 6), { w: 3, col: '#f2f0e6', a: 0.8, pass2: false }); txt((4 + r * 2) + ' л.', 130, -42 + r * 44, 30, { font: 'Hand', col: '#f2c838' }); } pop();
    for (let i = 0; i < 3; i++) { push(-60 + i * 160, 960, 1); ell(0, 0, 80, 34, { wash: '#a8743a', washA: 1, w: 2.4, col: '#4a2a0a' }); for (let q = 0; q < 6; q++) pencil([[-76 + q * 30, -6], [-70 + q * 30, 30]], { w: 2, col: '#6a4a1a', pass2: false }); for (let q = 0; q < 3; q++) { push(-40 + q * 40, -26, 0.5, -0.5 + q * 0.5); shotiBread(0, 0, 1); pop(); } pop(); } }
  function folk(t) { const shout = t > EV.sp_top && t < EV.sp_top + 1.2;
    human(160, 1300, 1.08, t, { body: '#5a2a4a', hair: '#2a1a0a', face: shout ? 'shock' : 'smile', armL: 'hold', armR: t > EV.sp_meg - 0.2 && t < EV.sp_top ? 'up' : 'hold', seed: 1080, long: 1, hat: 'scarf', hatCol: '#e8e0d0', look: 0.6 });
    human(1010, 1320, 1.05, t, { body: '#3a5a7a', hair: '#4a3a2a', face: shout ? 'grin' : 'calm', armL: 'hold', armR: 'down', seed: 1081, flip: -1, look: -0.5, beard: 'short' }); }
  function counter(t) { rect(-300, 1180, 1700, 70, { wash: '#7a4a24', washA: 1, w: 3, col: '#2a1408', key: 10810 }); rect(-300, 1250, 1700, 400, { wash: '#8a5a32', washA: 1, w: 3, col: '#2a1408' }); for (let i = 0; i < 8; i++) rect(-260 + i * 210, 1290, 170, 300, { line: true, w: 2, col: '#5a3418', a: 0.7 });
    if (t > EV.sp_no - 0.1) { const k = popK(t, EV.sp_no, 0.3), x = clamp((t - EV.sp_no - 0.35) / 0.25); push(380, 1060, k, -0.08); rect(-110, -60, 220, 120, { wash: '#f6ecd4', washA: 1, w: 4, col: '#2a1a0a' }); txt('ОДИН?', 0, 18, 60, { font: 'Osw', col: '#2a1a0a' });
      if (x > 0) { pencil([[-120, -70], [-120 + 240 * x, 70]], { w: 12, col: '#d9282b', pass2: false }); if (x >= 1) pencil([[120, -70], [-120, 70]], { w: 12, col: '#d9282b', pass2: false }); } ctx.globalAlpha = 1; pop(); }
    const outK = clamp((t - EV.sp_im + 0.3) / 0.3); for (const [x, ev, lbl, col] of [[220, 'sp_im', 'ИМЕРЕТИ', '#2a6a9a'], [520, 'sp_meg', 'МЕГРЕЛИЯ', '#a8422a']]) { const k = popK(t, EV[ev], 0.4); if (k <= 0) continue;
      push(x, 1150, 1); ell(0, 6, 175, 30, { wash: '#c89a5a', washA: 1, w: 2, col: '#5a3a14' }); pop(); imeruli(x, 1130, 0.86 * k, t, { megruli: x > 400 ? clamp((t - EV.sp_top + 0.2) / 0.35) : 0, steam: true });
      push(x + 130, 1020, k); pencil([[0, 60], [0, -60]], { w: 4, col: '#4a3a2a' }); poly([[0, -60], [110, -40], [0, -20]], { wash: col, washA: 1, w: 2 }); txt(lbl, 50, -32, 18, { font: 'Osw', col: '#ffffff' }); pop(); }
    if (t > EV.sp_top + 0.15 && t < EV.sp_top + 0.9) { const q = clamp((t - EV.sp_top - 0.15) / 0.75); for (let i = 0; i < 10; i++) { const a = -3 + i * 0.32; ell(520 + Math.cos(a) * 220 * q, 1110 + Math.sin(a) * 120 * q + q * q * 80, 9, 7, { wash: KHP.cheese, washA: 1 - q, w: 1, col: KHP.cheeseD }); } }
    push(820, 1150, 1); blob([[-120, 0], [-100, -60], [0, -84], [100, -60], [120, 0]], { wash: '#c84a3a', washA: 1, w: 2.4, col: '#5a1a10', key: 10815 }); for (let i = 0; i < 5; i++) pencil([[-100 + i * 50, -6], [-90 + i * 50, -66 + Math.abs(i - 2) * 6]], { w: 2, col: '#f2d0c0', a: 0.6, pass2: false }); txt('?', 0, -24, 46, { font: 'Osw', col: '#fff4e0' }); pop(); }
  WORLD.shapes = (t, u, cat) => { lay(12, () => shop(t)); lay(3.2, () => folk(t)); lay(1.25, () => counter(t)); lay(1, () => { rect(-300, 1640, 1700, 500, { wash: '#6a4a2a', washA: 1, w: 2, col: '#2a1408', key: 10820 }); cat(); }); };
  DIR.shapes = {
    outfit: 'dacha', light: { side: -1, rim: '#ffe0b0' }, grade: ['#f0b070', 0.05],
    act: () => [[S0.shapes, 'suspicious'], [EV.sp_no, 'sideeye'], [EV.sp_im, 'talk'], [EV.sp_meg, 'proud'], [EV.sp_top + 0.2, 'shock'], [EV.sp_top + 0.9, 'laugh']],
    pose: (t, u, b) => { const flinch = t > EV.sp_top + 0.2 && t < EV.sp_top + 0.9; return Object.assign(b, { x: 700, y: 1820, s: 1.12, flip: true, look: t < EV.sp_meg ? [-0.8, -0.2] : [-0.5, -0.3], squint: flinch, squash: flinch ? 0.06 : 0,
      hand: t > EV.sp_im - 0.1 && t < EV.sp_top ? [200, -360] : [120, -260], handF: flinch ? [-60, -400] : [-90, -230], point: t > EV.sp_im - 0.1 && t < EV.sp_top }); },
    cam: () => [[S0.shapes, 560, 1080, 0.16], [EV.sp_no, 460, 1080, 0.26, 'x'], [EV.sp_im, 360, 1100, 0.3], [EV.sp_meg, 520, 1100, 0.3], [EV.sp_top, 560, 1120, 0.36, 'x'], [S1.shapes, 560, 1120, 0.34]]
  };
  TRANS_IN.shapes = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {             // дверца печи тоне уезжает вверх: жар, искры
    const q = sm(k), up = q * (H + 200); drawBuf(B, 1, 540, 960); scr(() => { glow(540, H - up + 60, 700, 'rgba(255,140,40,1)', 0.7 * (1 - q)); });
    drawBuf(A, 1, 540, 960, 1, null, 0, -up); scr(() => { rect(-20, H - up - 60, W + 40, 80, { wash: '#3a3a3e', washA: 1, w: 4, col: '#0a0a0a' }); rect(440, H - up - 50, 200, 40, { wash: '#6a6a70', washA: 1, w: 2, col: '#0a0a0a' });
      for (let i = 0; i < 24; i++) { const r = rng(10830 + i); ell(r() * W, H - up + r() * 400, 4, 4, { wash: '#ffb040', washA: 1 - q, line: false }); } });
  } };
})();
