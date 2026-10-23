/* 006 — `hook`: «Тако, гирос и шаурма — одно и то же блюдо! Откусим историю!» Ночной уличный фудкорт: мокрый асфальт, гирлянды лампочек, три ларька — мексиканский
   (тако), греческий (гирос), шаурмичная; неон загорается по словам. На «одно и то же» из трёх ларьков вылетают три вертела и сливаются в один огромный вертел
   за спиной Тома (вспышка). Том-шаурмист с длинным ножом; на «Откусим» — кусает шаурму, брызги соуса. */
(() => {
  EV.hk_taco = wtw('h1', 'Тако,');
  EV.hk_gyros = wtw('h1', 'гирос');
  EV.hk_sh = wtw('h1', 'шаурма');
  EV.hk_one = wtw('h1', 'одно');
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_one + 0.4, 0.25, 12], [EV.hk_bite, 0.2, 8]);
  KEYW.push('одно');

  const STALL = [['ТАКО', '#2a9a6a', '#f2c838', 'hk_taco'], ['ГИРОС', '#2a6ab8', '#ffffff', 'hk_gyros'], ['ШАУРМА', '#d9482b', '#fff2a0', 'hk_sh']];
  function street(t) { vgrad(-600, 1300, ['#0a0a24', '#1a1440', '#3a2050']); for (let i = 0; i < 6; i++) { const x = -200 + i * 260, h = 500 + (i % 3) * 140; rect(x, 900 - h, 220, h, { wash: '#14142a', washA: 1, w: 2, col: '#06060e' }); windows(x + 20, 940 - h, 180, h - 120, 3, 5, 6000 + i, 0.4, '#ffd890', '#2a2a44', 0.8); }
    for (let r = 0; r < 2; r++) { const pts = []; for (let i = 0; i <= 12; i++) pts.push([-200 + i * 130, 560 + r * 90 + Math.sin(i * 0.9) * 10 + (i % 2) * 24]); pencil(pts, { w: 2, col: '#3a3a3a', pass2: false }); for (let i = 0; i < 12; i++) { const [x, y] = pts[i]; ell(x, y + 14, 8, 10, { wash: ['#ffd060', '#ff7a5a', '#8ae0ff'][(i + r) % 3], washA: 1, line: false }); glow(x, y + 14, 40, 'rgba(255,220,140,1)', 0.35); } } }
  function stalls(t) { for (let i = 0; i < 3; i++) { const [name, c, tc, ev] = STALL[i], x = 60 + i * 340, on = t > EV[ev] - 0.05, fl = on ? 1 : 0.25;
      const st = rect(x, 860, 300, 340, { wash: '#2a2a34', washA: 1, w: 3, col: '#0a0a10', key: 6300 + i }); rect(x - 10, 840, 320, 40, { wash: c, washA: 1, w: 2, col: '#0a0a10' }); rect(x + 20, 960, 260, 140, { wash: '#ffe8b0', washA: 0.25 + 0.5 * fl, w: 2, col: '#0a0a10' });
      rect(x + 20, 720, 260, 110, { wash: '#14141c', washA: 1, w: 4, col: c }); txt(name, x + 150, 780, 54, { font: 'Osw', col: on ? tc : '#5a5a6a' }); if (on) { glow(x + 150, 775, 180, `rgba(${i === 0 ? '80,220,150' : i === 1 ? '90,150,255' : '255,110,80'},1)`, 0.5); bubbleTag(['МЕКСИКА', 'ГРЕЦИЯ', 'ЛЕВАНТ'][i], x + 150, 690, t, EV[ev], c, 26, (i - 1) * 0.06); }
      const fly = clamp((t - EV.hk_one) / 0.5); if (fly < 1) { const tx = lerp(x + 150, 540, sm(fly)), ty = lerp(1080, 900, sm(fly)); donerCone(tx, ty, 0.32 * (1 + fly), t, { kind: i === 0 ? 'pastor' : i === 1 ? 'lamb' : 'chicken', pine: i === 0, heat: false, key: i }); }
      human(x + 150, 1200, 0.62, t, { body: c, hair: '#2a1a0a', face: t > EV.hk_one ? 'shock' : 'smile', armL: 'hold', armR: on ? 'wave' : 'hold', seed: 600 + i, look: 0.2 }); } }
  function bigSpit(t) { const k = clamp((t - EV.hk_one - 0.4) / 0.4); if (k <= 0) return; if (k < 1) glow(540, 900, 500 * k, 'rgba(255,240,200,1)', 0.9 * (1 - k)); donerCone(540, 1380, 0.95 * popK(t, EV.hk_one + 0.4, 0.5), t, { kind: 'lamb', shave: true }); bubbleTag('ОДИН ПРЕДОК', 540, 760, t, EV.hk_one + 0.6, '#d9482b', 40, -0.05); }
  function counter(t) { rect(-300, 1420, 1700, 600, { wash: '#2a2a30', washA: 1, w: 3, col: '#0a0a10', key: 6320 }); for (let i = 0; i < 8; i++) pencil([[-300 + i * 230, 1440], [-200 + i * 230, 1900]], { w: 30, col: '#ff7a5a', a: 0.06, pass2: false });
    if (t > EV.hk_bite && t < EV.hk_bite + 1) { const k = t - EV.hk_bite; for (let i = 0; i < 14; i++) { const r = rng(6330 + i), a = r() * 6.28, v = 300 + r() * 400; ell(640 + Math.cos(a) * v * k, 1100 + Math.sin(a) * v * k + 700 * k * k, 9, 7, { wash: i % 3 ? SW.toum : '#e03a2a', washA: 1 - k, line: false }); } } }
  WORLD.hook = (t, u, cat) => { lay(14, () => street(t)); lay(2.6, () => stalls(t)); lay(1.4, () => bigSpit(t)); lay(1, () => { counter(t); cat(); }); };
  DIR.hook = {
    outfit: 'shaurma', light: { side: -1, rim: '#ff9a7a' }, grade: ['#6a3aa8', 0.06],
    act: () => [[0, 'talk'], [EV.hk_taco, 'awe'], [EV.hk_one, 'shock'], [EV.h2, 'smug'], [EV.hk_bite - 0.1, 'grin'], [EV.hk_bite + 0.2, 'laugh']],
    pose: (t, u, b) => { const bite = t > EV.hk_bite - 0.3; return Object.assign(b, { x: 780, y: 1780, s: 1.18, flip: true, look: t < EV.hk_one ? [-0.8, -0.6] : t < EV.h2 ? [-0.5, -0.9] : [0, 0.3],
      hand: bite ? [60, -360] : t > EV.h2 ? [160, -260] : [150, -330], handF: [-90, -230], prop: t < EV.h2 ? 'knifeLongP' : bite && t > EV.hk_bite ? 'shawarmaBiteP' : 'shawarmaP', tailUp: t > EV.hk_bite }); },
    cam: () => [[0, 380, 820, 0.18], [EV.hk_gyros, 540, 820, 0.18], [EV.hk_sh, 720, 820, 0.18], [EV.hk_one, 560, 1000, 0.06, 'x'], [EV.h2, 640, 1180, 0.26], [EV.hk_bite, 680, 1150, 0.32], [S1.hook, 680, 1130, 0.36]]
  };
})();
