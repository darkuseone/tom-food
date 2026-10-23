/* 007 — `fridge`: «1995-й: изобретают отдельный холодильник — только для кимчи.» Кухня квартиры 1995 года: обои в цветочек, пузатый телевизор с датой,
   рисоварка, календарь, обычный высокий холодильник с магнитами. На «отдельный» из-за кадра въезжает ларь-холодильник с бантом НОВИНКА; на «только для кимчи»
   крышка поднимается — облако холода, ровные ряды контейнеров с кимчи, а обычный холодильник обиженно хлопает дверцей. Том в пуховике 90-х.
   Переход В сцену: перемотка VHS — полосы трекинга, сдвиг цветов, экранная надпись REW и счётчик лет назад. */
(() => {
  EV.fr_sep = wtw('s2', 'отдельный');
  EV.fr_only = wtw('s2', 'только');
  SHAKES.push([EV.fr_sep + 0.5, 0.18, 8]);
  KEYW.push('кимчи.');

  function kitchen(t) { vgrad(-600, 1500, ['#e8d8b0', '#f0e2c0', '#e8d4a8']); for (let y = 0; y < 12; y++) for (let x = 0; x < 10; x++) { const xx = -260 + x * 160 + (y % 2) * 80, yy = -200 + y * 130; for (let p = 0; p < 4; p++) { const a = p * 1.57; ell(xx + Math.cos(a) * 12, yy + Math.sin(a) * 12, 9, 6, { wash: '#d88a8a', washA: 0.5, line: false, rot: a }); } ell(xx, yy, 5, 5, { wash: '#e8c040', washA: 0.6, line: false }); }
    rect(-300, 1000, 1700, 500, { wash: '#c8b890', washA: 1, w: 2, col: '#6a5a3a' }); for (let i = 0; i < 9; i++) rect(-300 + i * 200, 1010, 190, 200, { wash: '#d8c8a0', washA: 1, w: 2, col: '#6a5a3a' });
    // телевизор
    push(250, 760, 1); rect(-150, -120, 300, 240, { wash: '#4a4a50', washA: 1, w: 3, col: '#1a1a1a' }); const sc = rect(-120, -95, 200, 180, { wash: '#3a6a8a', washA: 1, w: 2, col: '#1a1a1a' }); ctx.save(); ctx.clip(sc.path); for (let i = 0; i < 20; i++) pencil([[-120, -95 + i * 10], [80, -95 + i * 10]], { w: 1, col: '#000000', a: 0.25, pass2: false }); txt('1995', -20, 10, 60, { font: 'Osw', col: '#fff4c0' }); ctx.restore(); for (let i = 0; i < 3; i++) ell(115, -60 + i * 40, 10, 10, { wash: '#8a8a90', washA: 1, w: 1.4 }); pop();
    // рисоварка, календарь
    push(560, 990, 1); const rc = shape(spline([[-80, 0], [-90, -80], [-60, -120], [60, -120], [90, -80], [80, 0]], true, 6), { wash: '#f2f2f0', washA: 1, w: 2.4, col: '#5a5a5a' }); rect(-30, -60, 60, 24, { wash: '#e8402a', washA: 1, w: 1.4 }); for (let q = 0; q < 3; q++) { const k = (t * 0.6 + q / 3) % 1; ell(10, -130 - k * 120, 14 + k * 20, 10 + k * 14, { wash: '#ffffff', washA: 0.4 * (1 - k), line: false }); } pop();
    push(560, 500, 1); rect(-80, -100, 160, 200, { wash: '#fbfbf6', washA: 1, w: 2, col: '#5a5a5a' }); rect(-80, -100, 160, 40, { wash: '#2a6ab8', washA: 1, w: 1.6 }); txt('12', 0, 40, 70, { font: 'Osw', col: '#2a2a2a' }); pop();
    // обычный холодильник
    const slam = t > EV.fr_only + 0.3 && t < EV.fr_only + 0.6; push(920, 1210, 1); rect(-130, -620, 260, 620, { wash: '#e8eef2', washA: 1, w: 3, col: '#5a6a7a' }); pencil([[-130, -400], [130, -400]], { w: 3, col: '#5a6a7a', pass2: false }); pencil([[100, -560], [100, -460]], { w: 8, col: '#8a9aa8' });
      for (let i = 0; i < 4; i++) ell(-60 + (i % 2) * 70, -300 + Math.floor(i / 2) * 90, 20, 20, { wash: ['#e8402a', '#f2c838', '#3aa84a', '#2a6ab8'][i], washA: 1, w: 1.4 }); if (t > EV.fr_only + 0.3) { push(-20, -680, 1); bubbleTag('ХМ!', 0, 0, t, EV.fr_only + 0.3, '#5a6a7a', 30, 0.1); pop(); } pop(); }
  function chest(t) { const k = sm(clamp((t - EV.fr_sep + 0.2) / 0.6)), x = lerp(1500, 520, k), open = sm(clamp((t - EV.fr_only) / 0.5)); push(x, 1440, 1);
    const body = rect(-260, -280, 520, 280, { wash: '#f6f4ee', washA: 1, w: 3, col: '#5a6a7a', key: 7900 }); rect(-260, -60, 520, 20, { wash: '#c8282a', washA: 1, line: false }); txt('ТОЛЬКО ДЛЯ КИМЧИ', 0, -150, 34, { font: 'Osw', col: '#2a4a8a' }); for (let i = 0; i < 5; i++) ell(-200 + i * 30, -100, 6, 6, { wash: '#3ae06a', washA: 1, line: false });
    if (open > 0.05) { rect(-264, -300 - 250 * open, 528, 20 + 250 * open, { wash: '#dfe8f0', washA: 1, w: 3, col: '#5a6a7a' }); for (let i = 0; i < 4; i++) pencil([[-240, -290 - i * 60 * open], [240, -290 - i * 60 * open]], { w: 1.6, col: '#a8c0d8', a: 0.6, pass2: false }); rect(-240, -300, 480, 30, { wash: '#a8c8e0', washA: 1, w: 2 }); for (let i = 0; i < 6; i++) { const cx = -180 + (i % 3) * 180, cy = -310 - (i > 2 ? 0 : 0); rect(cx - 70, cy - 40, 140, 50, { wash: '#e8f0f8', washA: 0.9, w: 2, col: '#5a7a9a' }); push(cx, cy - 20, 0.35); kimchiQuarter(0, 0, 1, 0); pop(); }
      for (let q = 0; q < 8; q++) { const kk = (t * 0.7 + q / 8) % 1; ell(-200 + q * 56, -330 - kk * 200, 40 + kk * 40, 24 + kk * 20, { wash: '#e8f8ff', washA: 0.5 * (1 - kk) * open, line: false }); } }
    if (open <= 0.05) rect(-264, -320, 528, 40, { wash: '#f6f4ee', washA: 1, w: 3, col: '#5a6a7a' });
    if (k > 0.6 && t < EV.fr_only + 0.2) { push(0, -330, 1); for (const sd of [-1, 1]) blob([[0, 0], [sd * 70, -40], [sd * 80, 20]], { wash: '#d9282b', washA: 1, w: 2 }); ell(0, 0, 18, 18, { wash: '#a8182a', washA: 1, w: 2 }); pop(); bubbleTag('НОВИНКА', 0, -420, t, EV.fr_sep + 0.4, '#d9282b', 32, -0.05); } pop(); }
  WORLD.fridge = (t, u, cat) => { lay(9, () => kitchen(t)); lay(1.2, () => chest(t)); lay(1, () => { rect(-300, 1460, 1700, 600, { wash: '#b8a07a', washA: 1, w: 2, col: '#5a4a2a', key: 7910 }); for (let i = 0; i < 10; i++) for (let j = 0; j < 5; j++) if ((i + j) % 2) rect(-300 + i * 180, 1470 + j * 120, 180, 120, { wash: '#a88a64', washA: 0.6, line: false }); cat(); }); };
  DIR.fridge = {
    outfit: 'pufferK', light: { side: -1, rim: '#fff0d0' }, grade: ['#e8b060', 0.06],
    act: () => [[S0.fridge, 'talk'], [EV.fr_sep, 'awe'], [EV.fr_only, 'proud'], [EV.fr_only + 0.5, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 880, y: 1800, s: 1.1, flip: true, look: t < EV.fr_sep ? [-0.8, -0.6] : [-0.6, 0.3], hand: t > EV.fr_only ? [200, -300] : [140, -320], handF: [-90, -230], point: t > EV.fr_sep ? 1 : 0 }),
    cam: () => [[S0.fridge, 400, 900, 0.12], [EV.fr_sep, 600, 1200, 0.14, 'x'], [EV.fr_only, 560, 1200, 0.2, 'x'], [S1.fridge, 560, 1200, 0.22]]
  };
  // ---------------------------------------------------------------- переход: перемотка VHS — полосы трекинга, сдвиг цветов, REW и счётчик лет назад
  TRANS_IN.fridge = { a: 0.2, b: 0.45, runA: 1, fx(k, t, A, B) {
    const src = k < 0.55 ? A : B, amp = Math.sin(k * Math.PI); scr(() => { const N = 24, hh = H / N; for (let i = 0; i < N; i++) { const dx = Math.sin(i * 1.7 + k * 40) * 120 * amp + (rng(hsh(FRAME, i))() - 0.5) * 60 * amp; ctx.drawImage(src, 0, i * hh, W, hh, dx, i * hh, W, hh); }
      ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.25 * amp; ctx.drawImage(src, 14 * amp, 0); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
      for (let i = 0; i < 3; i++) { const y = ((k * 3 + i / 3) % 1) * H; ctx.fillStyle = `rgba(255,255,255,${0.5 * amp})`; ctx.fillRect(0, y, W, 30 + i * 10); }
      txt('<< REW', 260, 1380, 70, { font: 'Osw', col: '#ffffff', a: amp }); txt(String(Math.round(lerp(2008, 1995, k))), 820, 1380, 70, { font: 'Osw', col: '#ffffff', a: amp }); });
  } };
})();
