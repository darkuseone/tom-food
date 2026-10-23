/* 007 — `name`: «А имя — от "чимчхэ": "погружённые овощи".» ТОМ-МАЛЫШ внутри кувшина с рассолом: сверху светлый круг горлышка, стенки глиняные изнутри,
   мутно-розовая вода, в толще — капустные листья, кубики редьки, дольки чеснока, пузырьки. Том-малыш ныряет вниз, как водолаз, мимо «погружённых овощей»;
   на «чимчхэ» из пузырей складывается слово ЧИМЧХЭ, на «погружённые» оно тонет вместе с листьями и расшифровывается подписью. Переход В сцену: уровень
   рассола поднимается снизу волной и затапливает прошлый кадр. */
(() => {
  EV.nm_ch = wtw('s7', '«чимчхэ»:');
  EV.nm_sub = wtw('s7', '«погружённые');
  KEYW.push('овощи».');

  function jar(t) { vgrad(-600, 2600, ['#f0c8b8', '#c87a6a', '#6a2a24']); ell(540, -60, 360, 160, { wash: '#fff4e8', washA: 0.9, line: false }); glow(540, -40, 500, 'rgba(255,240,220,1)', 0.5);
    for (const sd of [-1, 1]) { const pts = sd < 0 ? [[-300, -200], [180, -100], [60, 600], [40, 1300], [120, 2000], [-300, 2000]] : [[1380, -200], [900, -100], [1020, 600], [1040, 1300], [960, 2000], [1380, 2000]]; shape(spline(pts, true, 6), { wash: KM.onggi, washA: 1, w: 3, col: '#1a0a04' }); }
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; for (let i = 0; i < 4; i++) { const x = 300 + i * 160 + Math.sin(t + i) * 30; ctx.fillStyle = 'rgba(255,230,210,0.07)'; ctx.beginPath(); ctx.moveTo(x - 40, -100); ctx.lineTo(x + 40, -100); ctx.lineTo(x + 120, 1900); ctx.lineTo(x - 80, 1900); ctx.fill(); } ctx.restore();
    for (let i = 0; i < 30; i++) { const r = rng(8400 + i), y = 1900 - ((t * (0.08 + r() * 0.1) + r()) % 1) * 2100, x = 220 + r() * 640; ell(x + Math.sin(t * 2 + i) * 8, y, 6 + r() * 12, 6 + r() * 12, { line: true, w: 2, col: '#ffe0d8', a: 0.6, pass2: false }); } }
  function veg(t) { for (let i = 0; i < 7; i++) { const r = rng(8440 + i), x = 260 + r() * 560, y = 500 + i * 190 + Math.sin(t * 0.8 + i) * 20; push(x, y, 1, Math.sin(t * 0.6 + i) * 0.4 + i); if (i % 3 === 0) kimchiQuarter(0, 0, 0.5, 0, { white: true }); else if (i % 3 === 1) { rect(-24, -24, 48, 48, { wash: KM.mu, washA: 0.9, w: 2, col: '#8a8a7a' }); } else { blob([[-20, 10], [-10, -24], [10, -24], [20, 10], [0, 24]], { wash: '#f8f2e0', washA: 1, w: 1.6, col: '#8a8270' }); } pop(); }
    if (t > EV.nm_ch - 0.1) { const sink = clamp((t - EV.nm_sub) / 1.2); const word = 'ЧИМЧХЭ'; for (let i = 0; i < word.length; i++) { const p = popK(t, EV.nm_ch + i * 0.06, 0.4); const x = 340 + i * 80, y = 760 + sink * 260 + Math.sin(t * 2 + i) * 10; ell(x, y - 6, 40 * p, 44 * p, { line: true, w: 3, col: '#ffffff', a: 0.7 }); txt(word[i], x, y + 14, 64 * p, { font: 'Osw', col: '#fff4e8' }); }
      if (t > EV.nm_sub) { const a = clamp((t - EV.nm_sub - 0.2) / 0.4); txt('= «ПОГРУЖЁННЫЕ ОВОЩИ»', 540, 1150 + sink * 200, 46, { font: 'Hand', col: '#ffffff', a }); } } }
  WORLD.name = (t, u, cat) => { lay(6, () => jar(t)); lay(1.6, () => veg(t)); lay(1, () => cat()); };
  DIR.name = {
    outfit: 'chef', light: { side: 1, rim: '#ffe0d8' }, grade: ['#c86a5a', 0.06],
    act: () => [[S0.name, 'awe'], [EV.nm_ch, 'grin'], [EV.nm_sub, 'proud']],
    pose: (t, u, b) => { const d = clamp((t - S0.name) / (S1.name - S0.name)); return Object.assign(b, { x: 540 + Math.sin(t * 1.4) * 120, y: lerp(900, 1700, d), s: 0.55, rot: Math.PI * 0.9 + Math.sin(t * 2) * 0.15, look: [0, 0.8], hand: [140, -380], handF: [-140, -380], tailUp: true, noHat: false }); },
    afterCat: (t, u, P) => { for (let i = 0; i < 4; i++) { const k = ((t * 1.4) + i / 4) % 1; ell(P.x + Math.sin(i * 3) * 20, P.y + 60 - k * 300, 6 + i * 2, 6 + i * 2, { line: true, w: 2, col: '#ffffff', a: 0.7 * (1 - k), pass2: false }); } },
    cam: () => [[S0.name, 540, 900, 0.1], [EV.nm_ch, 540, 900, 0.12], [EV.nm_sub, 540, 1150, 0.16, 'x'], [S1.name, 540, 1250, 0.18]]
  };
  // ---------------------------------------------------------------- переход: рассол поднимается снизу волной и затапливает прошлый кадр
  TRANS_IN.name = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = sm(k), lvl = lerp(H + 100, -300, q); drawBuf(A, 1, 540, 960); const pts = [[0, H + 200]]; for (let i = 0; i <= 20; i++) pts.push([i * 54, lvl + Math.sin(i * 0.8 + k * 20) * 40]); pts.push([W, H + 200]);
    inPath(pathOf(pts), () => drawBuf(B, 1, 540, 960)); scr(() => { pencil(pts.slice(1, -1), { w: 10, col: '#ffe8e0', a: 0.9, pass2: false }); for (let i = 0; i < 12; i++) { const r = rng(8460 + i); ell(r() * W, lvl - 30 - r() * 100 * (1 - q), 8, 8, { wash: '#ffe8e0', washA: 0.8 * (1 - q), line: false }); } });
  } };
})();
