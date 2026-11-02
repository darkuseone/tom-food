/* 012 — `lost`: «Но после революции мастера пропали вместе с рецептами. Пряник вернули лишь в 1954-м.» Заброшенная пряничная зимой: холодная синева,
   разбитое окно со снегом, пыль и паутина, остывшая печь, треснувшие доски в стопке, пустые полки, фартуки мастеров на крючках. Потом — 1954: календарь
   перелистывается, в печи вспыхивает огонь, свет теплеет, пекари в белых халатах выносят противни. Том в поварском кителе.
   По словам: «мастера пропали» — призрачные силуэты мастеров у печи тают; «рецептами» — листы рецептов вылетают в окно с метелью; «вернули» — лист календаря
   «1954» падает, печь вспыхивает, всё теплеет; «1954-м» — противень с пряниками. Переход В сцену: метель-позёмка проносится через кадр. */
(() => {
  EV.ls_gone = wtw('s6', 'мастера');
  EV.ls_rec = wtw('s6', 'вместе');
  EV.ls_back = wtw('s6', 'вернули');
  EV.ls_year = wtw('s6', '1954-м.');
  SHAKES.push([EV.ls_back + 0.1, 0.2, 9]);
  KEYW.push('пропали', '1954-м.');
  const warm = t => sm(clamp((t - EV.ls_back) / 0.6));

  function room(t) {                                                    // кирпичная пекарня, разбитое окно с метелью, полки, фартуки на крючках, календарь
    const w = warm(t); vgrad(-600, 1500, [lerpC('#1a2430', '#4a2a14', w), lerpC('#3a4a5a', '#8a5a2a', w), lerpC('#4a5a6a', '#a87a48', w)]);
    for (let y = -500; y < 1300; y += 50) for (let x = -400; x < 1600; x += 100) rect(x + ((y / 50) % 2) * 50, y, 98, 48, { wash: lerpC('#5a6a78', '#a8543a', w), washA: 0.8, w: 1, col: lerpC('#2a3440', '#4a1a08', w), a: 0.5 });
    push(840, 260, 1); const wn = rect(-160, -200, 320, 360, { wash: '#a8c0d8', washA: 1, w: 8, col: '#3a2a1a', key: 12800 }); ctx.save(); ctx.clip(wn.path); vgrad(-200, 160, w > 0.5 ? ['#8ab8e0', '#e8f0f8'] : ['#4a5a7a', '#a8b8c8']); for (let i = 0; i < 4; i++) sil([[-200 + i * 110, 160], [-190 + i * 110, 20 - (i % 2) * 40], [-120 + i * 110, 10 - (i % 2) * 40], [-110 + i * 110, 160]], '#6a7a8a', 0.7); ctx.restore();
      pencil([[0, -200], [0, 160]], { w: 8, col: '#3a2a1a' }); pencil([[-160, -20], [160, -20]], { w: 8, col: '#3a2a1a' }); if (w < 0.5) { pencil([[-40, -200], [10, -90], [-20, -40], [60, 40]], { w: 3, col: '#e8f0f8', pass2: false }); pencil([[10, -90], [100, -120]], { w: 3, col: '#e8f0f8', pass2: false }); } pop();
    for (const y of [420, 640]) { rect(-380, y, 760, 18, { wash: '#4a3a2a', washA: 1, w: 2, col: '#140a04' }); if (w > 0.5) for (let i = 0; i < 5; i++) { const x = -320 + i * 140; rect(x - 46, y - 70, 92, 70, { wash: '#e8e0d0', washA: 1, w: 1.6, col: '#5a4a3a' }); pryanikTop(x, y - 36, 70, 40, { key: 12801 + i + y, text: '' }); } else for (let i = 0; i < 3; i++) pencil([[-300 + i * 220, y - 2], [-200 + i * 220, y - 4]], { w: 6, col: '#8a9aa8', a: 0.5, pass2: false }); }
    for (let i = 0; i < 4; i++) { const x = 180 + i * 90; pencil([[x, 120], [x, 140]], { w: 4, col: '#3a3a3a', pass2: false }); const ap = shape([[x - 34, 140], [x + 34, 140], [x + 40, 300], [x - 40, 300]], { wash: '#e8e4dc', washA: 1, w: 1.6, col: '#6a6a62' }); }
    push(170, 880, 1); rect(-90, -110, 180, 200, { wash: '#f8f4ea', washA: 1, w: 2.4, col: '#3a3a3a' }); rect(-90, -110, 180, 46, { wash: '#c8221a', washA: 1, w: 2 }); const yr = t < EV.ls_back ? '1917' : '1954'; txt(yr, 0, 30, 70, { font: 'Osw', col: '#2a2a2a' }); txt('ГОД', 0, -78, 26, { font: 'Osw', col: '#fff4d0' });
      if (t > EV.ls_back - 0.1 && t < EV.ls_back + 0.6) { const q = clamp((t - EV.ls_back + 0.1) / 0.7); push(0, -64 + q * 500, 1, q * 2); rect(-90, 0, 180, 150, { wash: '#f8f4ea', washA: 1, w: 2 }); txt('1917', 0, 100, 70, { font: 'Osw', col: '#2a2a2a' }); pop(); } pop();
  }
  function oven(t) {                                                    // печь: остывшая → вспыхивает огонь; призраки мастеров тают
    const w = warm(t); push(560, 1280, 1); const o = rect(-300, -520, 600, 520, { wash: lerpC('#6a7480', '#c8643a', w), washA: 1, w: 3, col: '#1a0a04', key: 12810 }); for (let y = -500; y < 0; y += 40) for (let x = -280; x < 280; x += 80) rect(x + ((y / 40) % 2) * 40, y, 78, 38, { wash: lerpC('#7a8490', '#b8543a', w), washA: 0.7, w: 1, col: '#2a1408', a: 0.5 });
    const m = blob([[-160, -20], [-160, -200], [0, -280], [160, -200], [160, -20]], { wash: '#0a0a0e', washA: 1, w: 3, col: '#1a0a04' });
    if (w > 0) { for (let i = 0; i < 7; i++) { const f = Math.sin(t * 9 + i) * 16; blob([[-120 + i * 40, -20], [-130 + i * 40, -100 - f], [-110 + i * 40, -180 - f * 2], [-100 + i * 40, -100], [-80 + i * 40, -20]], { wash: i % 2 ? '#ff8a2a' : '#ffd04a', washA: 0.9 * w, line: false }); } glow(0, -120, 420, 'rgba(255,140,50,1)', 0.6 * w); }
    else { for (let i = 0; i < 6; i++) ell(-100 + i * 40, -30, 18, 10, { wash: '#5a5a5a', washA: 1, w: 1 }); }
    pop();
    if (t < EV.ls_gone + 1.2) { const a = 1 - clamp((t - EV.ls_gone) / 1.0); for (let i = 0; i < 3; i++) { const x = 300 + i * 260; ctx.save(); ctx.globalAlpha = 0.55 * a; human(x, 1360, 1.1, t, { body: '#e8e4dc', legs: '#d8d4cc', hair: '#c8c4bc', beard: i === 1 ? 'long' : 'short', face: 'calm', armL: 'hold', armR: 'hold', seed: 12811 + i, long: 1 }); ctx.restore(); } }
    if (warm(t) > 0.3) { const k = warm(t); for (let i = 0; i < 2; i++) { const x = i ? 980 : 120; human(x, 1360, 1.12, t, { body: '#f8f6f0', legs: '#3a3a3a', hair: ['#3a2a1a', '#8a5a2a'][i], face: 'grin', armL: 'hold', armR: 'hold', look: i ? -0.6 : 0.6, seed: 12815 + i, flip: i ? -1 : 1 }); hat20(x, 1360, 1.12, 'chef'); push(x + (i ? -60 : 60), 1360 - 250, 1); rect(-90, -10, 180, 20, { wash: '#5a5a62', washA: 1, w: 2 }); for (let j = 0; j < 3; j++) pryanikTop(-56 + j * 56, -22, 50, 26, { key: 12817 + j + i * 3, text: '' }); pop(); } }
  }
  function pages(t) {                                                   // листы рецептов вылетают в окно с метелью
    if (t < EV.ls_rec - 0.2 || t > EV.ls_back + 0.3) return; const r = rng(12820); for (let i = 0; i < 7; i++) { const q = clamp((t - EV.ls_rec + 0.2 - i * 0.12) / 1.4); if (q <= 0) continue; const x = lerp(300 + i * 40, 900, q) + Math.sin(q * 6 + i) * 60, y = lerp(1300 - i * 30, 260, q) + Math.sin(q * 9 + i) * 40;
      push(x, y, 1 - q * 0.5, q * 6 + i); rect(-50, -66, 100, 132, { wash: '#f4ecd8', washA: 1, w: 1.6, col: '#6a5a3a' }); txt('рецептъ', 0, -40, 18, { font: 'Hand', col: '#3a1a08' }); for (let k = 0; k < 4; k++) pencil([[-36, -14 + k * 18], [36, -14 + k * 18]], { w: 1.4, col: '#5a3a1a', a: 0.6, pass2: false }); pop(); }
  }
  function table(t) {                                                   // стол переднего плана: треснувшие доски в пыли → противень с пряниками в 1954
    const w = warm(t); const tb = rect(-400, 1460, 1900, 800, { wash: lerpC('#4a4a50', '#6a3a18', w), washA: 1, w: 3, col: '#140804', key: 12830 }); shadeG(tb.path, 0, 1900, 0, 1460, '#140804', 0.5);
    if (w < 0.5) { for (let i = 0; i < 3; i++) { push(200 + i * 30, 1470 - i * 26, 0.7, 0.1 * i); pryanikBoard(0, 0, 1, t, { key: 12831 + i }); pencil([[-120, -100], [-40, 0], [-80, 100]], { w: 4, col: '#2a1408', pass2: false }); pop(); } for (let i = 0; i < 40; i++) { const r = rng(12835 + i); ell(r() * 1100, 1480 + r() * 200, 30, 6, { wash: '#c8ccd2', washA: 0.25, line: false }); } }
    else { push(380, 1480, 1); const pan = rect(-260, -30, 520, 40, { wash: '#5a5a62', washA: 1, w: 2.4, col: '#1a1a1a' }); metalG(pan.path, -60, -20, 300, '#a8a8b0', '#5a5a62', '#1a1a1a'); for (let i = 0; i < 4; i++) pryanik(-180 + i * 120, -40, 0.32, t, { key: 12840 + i }); for (let i = 0; i < 3; i++) { const q = (t * 0.5 + i / 3) % 1; pencil(spline([[-120 + i * 120, -60], [-120 + i * 120 + Math.sin(q * 6) * 20, -60 - q * 140], [-120 + i * 120, -60 - q * 260]], false, 5), { w: 8, col: '#ffffff', a: 0.3 * (1 - q), pass2: false }); } pop(); }
    if (t > EV.ls_year - 0.1) bubbleTag('1954', 420, 1240, t, EV.ls_year - 0.1, '#c8221a', 64, -0.05);
  }
  function front(t) {                                                   // передний план: сугроб у порога / метель → тёплая пыль муки
    const w = warm(t); if (w < 1) { blob([[-300, 2000], [-200, 1820], [0, 1780], [200, 1840], [300, 2000]], { wash: '#e8f0f8', washA: 1 - w, w: 1.6, col: '#a8b8c8', a: 1 - w }); motes(80, [0, 0, 1080, 1900], '#ffffff', t, 12850, { sp: 120, vx: -260, sz: 4, a: 0.8 * (1 - w), wob: 2, stretch: 2 }); }
    if (w > 0) motes(30, [100, 600, 1000, 1700], '#ffe0a0', t, 12851, { sp: 10, sz: 4, a: 0.5 * w, wob: 2 });
    for (let i = 0; i < 6; i++) pencil([[0, 0], [60 + i * 30, 140 - i * 20]], { w: 1, col: '#c8c0b0', a: 0.4 * (1 - w), pass2: false });
  }
  WORLD.lost = (t, u, cat) => {
    lay(12, () => { room(t); haze(warm(t) > 0.5 ? '#ffd8a0' : '#a8b8c8', 0.1); });
    lay(2.8, () => { oven(t); });
    lay(1, () => { cat(); pages(t); });
    lay(0.95, () => { table(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.lost = {
    outfit: 'chef', light: { side: 1, rim: '#d8e8ff' }, grade: ['#6a8ab8', 0.14],
    act: () => [[S0.lost, 'cold'], [EV.ls_gone, 'scared'], [EV.ls_rec, 'shock'], [EV.ls_back, 'awe'], [EV.ls_year, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 760, y: 1720, s: 1.1, flip: -1, look: t < EV.ls_back ? [0.4, -0.5] : [-0.5, 0.3], chatter: t < EV.ls_back, frost: t < EV.ls_back ? 0.6 : 0, hand: t > EV.ls_year ? [140, -380] : [120, -230], handF: [-90, -200], tailUp: t > EV.ls_year }),
    cam: () => [[S0.lost, 560, 1000, 0.1], [EV.ls_gone, 560, 1160, 0.16, 'x'], [EV.ls_rec, 700, 900, 0.14], [EV.ls_back, 560, 1180, 0.14], [EV.ls_year, 520, 1260, 0.24], [S1.lost, 540, 1260, 0.28]]
  };
  // ---------------------------------------------------------------- переход: метель-позёмка проносится через кадр
  TRANS_IN.lost = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), x = lerp(W + 400, -400, e); drawBuf(B, 1, 540, 960); ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.rect(0, 0, Math.max(0, x), H); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
    scr(() => { const g = ctx.createLinearGradient(x - 400, 0, x + 400, 0); g.addColorStop(0, 'rgba(240,246,255,0)'); g.addColorStop(0.5, 'rgba(240,246,255,0.95)'); g.addColorStop(1, 'rgba(240,246,255,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); motes(160, [x - 500, 0, x + 500, H], '#ffffff', t, 12860, { sp: 40, vx: -800, sz: 5, a: 0.9, wob: 2, stretch: 3 }); });
  } };
})();
