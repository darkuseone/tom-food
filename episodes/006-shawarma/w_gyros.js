/* 006 — `gyros`: «Греки перевели "поворот" на свой язык — так появился гирос.» Греческая таверна у моря: белые домики с синими ставнями и куполом, бугенвиллея,
   море с лодкой, столики с клетчатыми скатертями, музыкант с бузуки. На «перевели» над морем разворачивается карточка-словарь «ПОВОРОТ = GYROS»; на «гирос»
   Том-официант подаёт гирос в пите, посетители хлопают, тарелка бьётся «на счастье». Переход В сцену: кадр разбивается, как тарелка, на осколки. */
(() => {
  EV.gy_tr = wtw('s4', 'перевели');
  EV.gy_lang = wtw('s4', 'язык');
  EV.gy_g = wtw('s4', 'гирос.');
  SHAKES.push([EV.gy_g + 0.3, 0.18, 8]);
  KEYW.push('гирос.');

  function sea(t) { vgrad(-600, 900, ['#3a8ad8', '#8ac8f0', '#e0f4fa']); rect(-300, 760, 1700, 300, { wash: '#1a6ab8', washA: 1, line: false }); for (let i = 0; i < 16; i++) { const x = ((i * 113 + t * 18) % 1700) - 300; pencil([[x, 800 + (i % 4) * 50], [x + 50, 794 + (i % 4) * 50]], { w: 3, col: '#e0f4fa', a: 0.7, pass2: false }); }
    push(260, 860 + Math.sin(t * 1.5) * 6, 0.8); poly([[-90, 0], [90, 0], [60, 40], [-60, 40]], { wash: '#f2f2f2', washA: 1, w: 2, col: '#1a3a6a' }); rect(-90, 0, 180, 10, { wash: '#2a6ab8', washA: 1, line: false }); pop();
    for (let i = 0; i < 4; i++) { const x = 560 + i * 170, h = 180 + (i % 2) * 70; rect(x, 820 - h, 160, h, { wash: '#fbfbf6', washA: 1, w: 2.4, col: '#6a7a8a' }); rect(x + 50, 860 - h, 50, 60, { wash: '#2a6ab8', washA: 1, w: 2, col: '#1a2a4a' }); } ell(900, 560, 70, 60, { wash: '#2a6ab8', washA: 1, w: 2, col: '#1a2a4a' });
    if (t > EV.gy_tr - 0.1) { const k = sm(clamp((t - EV.gy_tr + 0.1) / 0.4)); push(740, 620, k * 0.85, -0.04); rect(-260, -90, 520, 180, { wash: '#fbf6ea', washA: 1, w: 4, col: '#2a6ab8' }); txt('«ПОВОРОТ»', 0, -30, 46, { font: 'Hand', col: '#2a2a2a' }); pencil([[-60, 10], [60, 10]], { w: 3, col: '#2a6ab8', pass2: false }); if (t > EV.gy_lang) txt('= GYROS', 0, 66, 54, { font: 'Osw', col: '#2a6ab8', a: clamp((t - EV.gy_lang) / 0.3) }); pop(); } }
  function taverna(t) { for (let i = 0; i < 8; i++) { const r = rng(6700 + i); ell(-200 + i * 70, 880 + r() * 200, 50, 40, { wash: '#d82a8a', washA: 0.9, line: false }); ell(-200 + i * 70 + 20, 860 + r() * 200, 20, 16, { wash: '#f06ab8', washA: 1, line: false }); } pencil([[-60, 860], [-60, 1300]], { w: 14, col: '#6a4a2a' });
    for (let i = 0; i < 2; i++) { const x = 160 + i * 380; rect(x - 120, 1220, 240, 20, { wash: '#f2f2f2', washA: 1, w: 2, col: '#2a3a4a' }); ctx.save(); const tb = rect(x - 120, 1240, 240, 60, { wash: '#f2f2f2', washA: 1, w: 2, col: '#2a3a4a' }); ctx.clip(tb.path); for (let q = 0; q < 6; q++) rect(x - 120 + q * 40, 1240, 20, 60, { wash: '#2a6ab8', washA: 0.8, line: false }); ctx.restore();
      human(x - 70, 1300, 0.72, t, { body: i ? '#e8a040' : '#f2f2f2', hair: i ? '#2a1a0a' : '#c8c8c8', face: t > EV.gy_g ? 'grin' : 'smile', armL: t > EV.gy_g ? 'up' : 'hold', armR: t > EV.gy_g ? 'up' : 'hold', seed: 640 + i * 2, beard: !i, look: 0.4 });
      human(x + 70, 1300, 0.7, t, { body: i ? '#2a6ab8' : '#c82a4a', hair: '#5a3a1a', face: t > EV.gy_g ? 'grin' : 'smile', armL: 'hold', armR: t > EV.gy_g ? 'wave' : 'hold', seed: 641 + i * 2, look: -0.4, long: 1 }); }
    if (t > EV.gy_g + 0.2 && t < EV.gy_g + 1.4) { const k = t - EV.gy_g - 0.2; for (let i = 0; i < 9; i++) { const r = rng(6720 + i), a = -r() * 3.14; poly([[0, 0], [24, -6], [14, 18]].map(([a1, b1]) => [360 + Math.cos(a) * 400 * k + a1, 1240 + Math.sin(a) * 300 * k + 900 * k * k + b1]), { wash: '#fbfbf6', washA: 1, w: 1.6, col: '#2a6ab8' }); } } }
  WORLD.gyros = (t, u, cat) => { lay(14, () => sea(t)); lay(2.2, () => taverna(t)); lay(1, () => { rect(-300, 1460, 1700, 600, { wash: '#e8e0d0', washA: 1, w: 2, col: '#8a7a6a', key: 6730 }); for (let i = 0; i < 9; i++) pencil([[-300 + i * 200, 1460], [-400 + i * 260, 2000]], { w: 2, col: '#b8a890', a: 0.5, pass2: false }); cat(); }); };
  DIR.gyros = {
    outfit: 'waiter', light: { side: -1, rim: '#ffffff' }, grade: ['#2a8ad8', 0.05],
    act: () => [[S0.gyros, 'talk'], [EV.gy_tr, 'smug'], [EV.gy_g, 'proud'], [EV.gy_g + 0.4, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 820, y: 1800, s: 1.1, flip: true, apron: 1, look: t < EV.gy_g ? [-0.4, -0.8] : [-0.3, 0.2], hand: t < EV.gy_g ? [140, -330] : [90, -380], handF: [-90, -230], prop: t > EV.gy_lang ? 'gyrosP' : null, point: t < EV.gy_lang ? 1 : 0, tailUp: t > EV.gy_g }),
    cam: () => [[S0.gyros, 560, 900, 0.1], [EV.gy_tr, 560, 760, 0.14, 'x'], [EV.gy_g, 640, 1250, 0.2, 'x'], [S1.gyros, 660, 1260, 0.24]]
  };
  // ---------------------------------------------------------------- переход: кадр бьётся, как тарелка, осколки разлетаются
  TRANS_IN.gyros = { a: 0.12, b: 0.45, runA: 1, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const q = clamp((k - 0.15) / 0.85); scr(() => { const cx = 540, cy = 1000, N = 9;
      for (let i = 0; i < N; i++) { const a0 = i / N * 6.283, a1 = (i + 1) / N * 6.283, R = 2400, mid = (a0 + a1) / 2, d = q * q * 1800, dy = q * q * 1400;
        ctx.save(); ctx.translate(Math.cos(mid) * d, Math.sin(mid) * d + dy); ctx.translate(cx, cy); ctx.rotate(q * (i % 2 ? 0.6 : -0.6)); ctx.translate(-cx, -cy);
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(a0) * R, cy + Math.sin(a0) * R); ctx.lineTo(cx + Math.cos(a1) * R, cy + Math.sin(a1) * R); ctx.closePath(); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
        if (k < 0.3) pencil([[cx, cy], [cx + Math.cos(a0) * 1400, cy + Math.sin(a0) * 1400]], { w: 4, col: '#ffffff', a: 1 - k * 3, pass2: false }); } });
  } };
})();
