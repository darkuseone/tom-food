/* 005 — `beet`: ТОМ-МАЛЫШ в кастрюле. «Свёкла сменила сорняк лишь в восемнадцатом–девятнадцатом веках. И борщ покраснел!» Внутри зелёной похлёбки — листья
   борщевика плавают, как плоты; сверху огромная рука опускает свёклу-валун, листья уплывают вверх; на «покраснел» бульон заливается рубиновым от центра — красная волна.
   Том-малыш плывёт на половинке капустного листа. Переход В сцену: капля свекольного сока падает и растекается кругом. */
(() => {
  EV.bt_beet = wtw('s3', 'Свёкла');
  EV.bt_red = wtw('s3', 'покраснел!');
  SHAKES.push([EV.bt_beet + 0.5, 0.25, 12], [EV.bt_red, 0.2, 8]);
  KEYW.push('покраснел!');

  function soup(t) { const red = clamp((t - EV.bt_red + 0.2) / 0.8); vgrad(-600, 2200, [lerpC('#7a9a3a', '#c8283a', red), lerpC('#5a7a2a', '#8a1424', red), lerpC('#3a5a1a', '#4a0a14', red)]);
    if (red > 0 && red < 1) { const R = red * 1600; ctx.save(); ctx.beginPath(); ctx.arc(540, 960, R, 0, 6.3); ctx.clip(); vgrad(-600, 2200, ['#c8283a', '#8a1424', '#4a0a14']); ctx.restore(); pencil(ellPts(540, 960, R, R, 0, 0, 60), { w: 20, col: BR.redL, a: 0.7, pass2: false }); }
    for (let i = 0; i < 24; i++) { const r = rng(5500 + i), y = 1900 - ((t * (0.1 + r() * 0.15) + r()) % 1) * 2300, x = r() * 1200 - 60; pencil(ellPts(x, y, 14 + r() * 26, 14 + r() * 26, 0, 0, 16), { w: 3, col: red > 0.5 ? '#ff8a9a' : '#c8e09a', a: 0.6, pass2: false }); }
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; for (let i = 0; i < 5; i++) { const x = 100 + i * 230; ctx.fillStyle = 'rgba(255,240,200,0.06)'; ctx.beginPath(); ctx.moveTo(x - 30, -300); ctx.lineTo(x + 30, -300); ctx.lineTo(x + 120, 2000); ctx.lineTo(x - 60, 2000); ctx.fill(); } ctx.restore(); }
  function floats(t) { const lift = clamp((t - EV.bt_beet - 0.3) / 1.5); for (let i = 0; i < 5; i++) { const x = 100 + i * 220, y = 500 + (i % 2) * 300 - lift * (800 + i * 100); push(x + Math.sin(t + i) * 30, y, 2.4, Math.sin(t * 0.8 + i) * 0.4); blob([[0, 0], [40, -30], [90, -20], [120, -60], [150, -20], [110, 10], [60, 20]], { wash: '#4a7a2a', washA: 1, w: 2, col: '#14300a' }); pop(); }
    for (let i = 0; i < 3; i++) { push(200 + i * 340, 1700 + Math.sin(t + i) * 20, 1.6, i); cabbage(0, 0, 1, 0); pop(); } }
  function bigBeet(t) { if (t < EV.bt_beet - 0.4) return; const k = clamp((t - EV.bt_beet + 0.4) / 0.8), y = lerp(-700, 820, sm(k)); push(560, y - 520, 3.2, 0.2); blob([[-60, 100], [-50, -40], [-20, -90], [30, -90], [60, -40], [70, 100]], { wash: '#e2b48e', washA: 1, w: 3, col: '#5a3a1a' }); pop(); beet(560, y, 4.0, 0.1, { key: 5510 }); }
  function raft(t, P) { push(P.x, P.y + 20, 2.2, Math.sin(t * 2) * 0.08); blob([[-90, 0], [-70, -20], [70, -24], [96, 0], [60, 16], [-60, 16]], { wash: BR.cab, washA: 1, w: 2.4, col: '#3a5a1a' }); pencil([[-70, -6], [80, -10]], { w: 2, col: '#e8f4c8', pass2: false }); pop(); }
  WORLD.beet = (t, u, cat) => { lay(4, () => soup(t)); lay(2, () => floats(t)); lay(1.3, () => bigBeet(t)); lay(1, () => cat()); };
  DIR.beet = {
    outfit: 'chef', light: { side: -1, rim: '#ffe0d0' }, grade: ['#c8484a', 0.06],
    act: () => [[S0.beet, 'talk'], [EV.bt_beet, 'awe'], [EV.bt_beet + 0.6, 'scared'], [EV.bt_red, 'shock'], [EV.bt_red + 0.4, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 380 + Math.sin(t * 1.2) * 60, y: 1300 + Math.sin(t * 2.4) * 30, s: 0.6, look: t < EV.bt_beet ? [0.5, 0] : [0.4, -0.9], hand: [140, -300], handF: [-140, -280], tailUp: true, apron: 1, rot: Math.sin(t * 2) * 0.08 }),
    afterCat: (t, u, P) => raft(t, P),
    cam: () => [[S0.beet, 540, 1000, 0.0], [EV.bt_beet, 540, 900, 0.06], [EV.bt_red, 480, 1150, 0.22, 'x'], [S1.beet, 480, 1180, 0.28]]
  };
  // ---------------------------------------------------------------- переход: капля свекольного сока падает и растекается
  TRANS_IN.beet = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); if (k < 0.3) { const y = lerp(-100, 960, k / 0.3); scr(() => blob([[540, y - 80], [570, y], [540, y + 30], [510, y]], { wash: BR.red, washA: 1, w: 2, col: '#3a0408' })); }
    else { const R = Math.pow((k - 0.3) / 0.7, 1.2) * 1500; const pts = []; for (let i = 0; i < 36; i++) { const a = i / 36 * 6.283; pts.push([540 + Math.cos(a) * R * (1 + 0.1 * Math.sin(a * 7)), 960 + Math.sin(a) * R * (1 + 0.1 * Math.sin(a * 5))]); }
      inPath(pathOf(spline(pts, true, 4)), () => { drawBuf(B, 1, 540, 960); ctx.fillStyle = `rgba(168,24,42,${0.6 * (1 - k)})`; ctx.fillRect(0, 0, W, H); }); scr(() => pencil(spline(pts, true, 4), { w: 12, col: BR.red, a: 1 - k, pass2: false })); }
  } };
})();
