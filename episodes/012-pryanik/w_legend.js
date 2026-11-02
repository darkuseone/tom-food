/* 012 — `legend` ★: «По легенде, бывший подмастерье ещё мальчишкой тайком взвесил хозяйские камешки. Так рецепт и спасся!» Воскресное утро в пряничной
   мастерской Гречихиных: солнечные лучи, в окне — церковь с колокольней, колокола качаются, народ идёт к обедне; мастерская пуста. Чулан открыт: сундучок с
   камешками. Том — мальчишка-подмастерье в рубахе и картузе — на цыпочках, ставит камешек на весы против настоящих гирь и записывает в тетрадку.
   Кадр в виньетке «легенды» (сепия по краям, рамка-узор). По словам: «тайком» — Том крадётся, оглядывается; «взвесил» — весы выравниваются; «камешки» — над
   чашей всплывают цифры; «спасся!» — тетрадь светится, страницы-рецепт разлетаются золотом; немая пауза — Том прижимает тетрадь и подмигивает.
   Переход В сцену: колокол раскачивается через кадр и открывает новую сцену. */
(() => {
  EV.lg_leg = LS('s7');
  EV.lg_sneak = wtw('s7', 'тайком');
  EV.lg_weigh = wtw('s7', 'взвесил');
  EV.lg_peb = wtw('s7', 'камешки.');
  EV.lg_save = wtw('s7', 'спасся!');
  EV.lg_gag = LE('s7');
  SHAKES.push([EV.lg_save + 0.05, 0.22, 10]);
  KEYW.push('тайком', 'спасся!');

  function view(t) {                                                    // окно: церковь с колокольней, колокола качаются, народ идёт к обедне
    vgrad(-200, 900, ['#8ab8e0', '#d8e8f0', '#f4ead0']); glow(200, 100, 300, 'rgba(255,240,190,1)', 0.5);
    push(300, 800, 1); rect(-140, -300, 280, 300, { wash: '#f4f0e6', washA: 1, w: 2, col: '#6a6a5a' }); blob([[-80, -300], [-90, -380], [0, -440], [90, -380], [80, -300]], { wash: '#d6a842', washA: 1, w: 2, col: '#5a3a08' }); pencil([[0, -440], [0, -500]], { w: 3, col: '#c8a050', pass2: false }); pencil([[-16, -480], [16, -480]], { w: 3, col: '#c8a050', pass2: false });
      push(220, 0, 1); rect(-60, -520, 120, 520, { wash: '#f4f0e6', washA: 1, w: 2, col: '#6a6a5a' }); rect(-50, -440, 100, 100, { wash: '#3a3a4a', washA: 1, w: 1.6 }); push(0, -440, 1, Math.sin(t * 4) * 0.4); const b = blob([[-30, 0], [-36, 60], [36, 60], [30, 0], [0, -10]], { wash: '#c8a050', washA: 1, w: 1.6, col: '#5a3a08' }); pop(); poly([[-70, -520], [0, -600], [70, -520]], { wash: '#3a6a4a', washA: 1, w: 2 }); pop(); pop();
    for (let i = 0; i < 7; i++) { const x = ((t * 30 + i * 90) % 700) - 100; human(x, 880, 0.35, t, { body: ['#c8221a', '#2a3a6a', '#3a2a1a', '#e8b030'][i % 4], legs: '#2a2a2a', long: i % 2, seed: 12900 + i, face: 'smile' }); }
    if (Math.sin(t * 4) > 0.6) for (let i = 0; i < 3; i++) txt('♪', 560 + i * 30, 300 - i * 30, 30, { col: '#5a3a08', a: 0.7 }); motes(20, [0, 0, 700, 900], '#ffffff', t, 12901, { sp: 6, sz: 3, a: 0.6, wob: 2 });
  }
  function shop(t) {                                                    // мастерская: брёвна, окно, полки с досками и формами, мешки, печь, чулан
    vgrad(-600, 1500, ['#5a3a1a', '#9a6a3a', '#b88a52']);
    for (let y = -500; y < 1300; y += 70) { const lg = rect(-400, y, 2000, 66, { wash: '#8a5a2a', washA: 1, w: 2, col: '#2a1408' }); shadeG(lg.path, 0, y + 66, 0, y, '#4a2a10', 0.35); }
    push(540, 360, 1); const w = rect(-240, -280, 480, 500, { wash: '#cfe6f6', washA: 1, w: 8, col: '#3a2410', key: 12910 }); ctx.save(); ctx.clip(w.path); push(-260, -320, 0.6); view(t); pop(); ctx.restore(); pencil([[0, -280], [0, 220]], { w: 8, col: '#3a2410' }); pencil([[-240, -40], [240, -40]], { w: 8, col: '#3a2410' }); pop();
    rays(540, 300, 1.75, 0.35, 1700, 'rgba(255,240,200,1)', 0.2, 7, t);
    for (const y of [280, 520]) { rect(-380, y, 560, 18, { wash: '#4a2a10', washA: 1, w: 2, col: '#140804' }); for (let i = 0; i < 3; i++) { push(-300 + i * 170, y - 70, 0.36, (i - 1) * 0.05); pryanikBoard(0, 0, 1, t, { key: 12911 + i + y }); pop(); } }
    push(1080, 1300, 1); const cd = rect(-150, -620, 300, 620, { wash: '#2a1408', washA: 1, w: 3, col: '#0a0400' }); const op = sm(clamp((t - EV.lg_sneak + 0.2) / 0.5)); poly([[150, -620], [150 + op * 160, -600], [150 + op * 160, -20], [150, 0]], { wash: '#6a3a14', washA: 1, w: 2.4, col: '#1a0a04' });
      rect(-120, -320, 240, 14, { wash: '#4a2a10', washA: 1, w: 1.6 }); push(0, -330, 1); rect(-70, -60, 140, 60, { wash: '#6a3a14', washA: 1, w: 2.4, col: '#1a0a04' }); pencil([[-70, -60], [70, -60]], { w: 6, col: '#c8a050', pass2: false }); pebbles(0, -64, 7, 12915, 1.0); pop(); glow(0, -360, 120, 'rgba(255,220,140,1)', 0.25 * op); pop();
    for (let i = 0; i < 3; i++) { const sk = shape(spline([[-60, 0], [-70, -110], [-40, -160], [40, -160], [70, -110], [60, 0]], true, 6).map(([a, b]) => [a - 260 + i * 130, b + 1320]), { wash: '#c8b088', washA: 1, w: 2, col: '#3a2a1a' }); txt(['МУКА', 'МЁДЪ', 'САХАРЪ'][i], -260 + i * 130, 1240, 20, { font: 'Osw', col: '#6a3a10' }); }
  }
  function bench(t) {                                                   // верстак: весы (камешек против гирь), тетрадь, перо, чернильница, цифры, золотые страницы
    const tb = rect(-400, 1460, 1900, 800, { wash: '#6a3a18', washA: 1, w: 3, col: '#1a0a04', key: 12920 }); shadeG(tb.path, 0, 1900, 0, 1460, '#2a1408', 0.5); for (let i = 0; i < 6; i++) pencil([[-400, 1490 + i * 70], [1500, 1494 + i * 70]], { w: 2, col: '#3a1a08', a: 0.5, pass2: false });
    const wk = clamp((t - EV.lg_weigh) / 0.6), tilt = t < EV.lg_weigh ? 0.18 : lerp(0.18, 0, sm(wk)) + Math.sin((t - EV.lg_weigh) * 10) * 0.04 * Math.exp(-(t - EV.lg_weigh) * 3);
    balance(330, 1470, 0.8, t, tilt, (px, py) => { if (t > EV.lg_weigh - 0.6) pebbles(px, py - 4, 3, 12921, 1.8); }, (px, py) => { for (let i = 0; i < 3; i++) { const h = 50 - i * 10; push(px - 50 + i * 50, py - 2, 1); const g = shape([[-20, 0], [-17, -h], [17, -h], [20, 0]], { wash: '#5a5a62', washA: 1, w: 1.6, col: '#1a1a1a' }); metalG(g.path, -6, -h / 2, 30, '#a8a8b0', '#5a5a62', '#1a1a1a'); pop(); } });
    if (t > EV.lg_peb - 0.1) { const k = popK(t, EV.lg_peb - 0.1, 0.4); push(330, 1060, k, -0.04); rect(-170, -44, 340, 88, { wash: '#f4ecd8', washA: 1, w: 3, col: '#5a3a1a' }); txt('1 ф. 12 зол.', 0, 14, 44, { font: 'Hand', col: '#3a1a08' }); pop(); }
    push(760, 1500, 1); const nb = poly([[-110, -10], [110, -20], [120, 60], [-100, 70]], { wash: '#f4ecd8', washA: 1, w: 2, col: '#6a5a3a', key: 12922 }); pencil([[0, -16], [8, 66]], { w: 2, col: '#8a7a5a', pass2: false });
      const wr = clamp((t - EV.lg_peb) / 0.8); for (let i = 0; i < 4; i++) if (wr * 4 > i) pencil([[-90, 4 + i * 14], [lerp(-90, -10, clamp(wr * 4 - i)), 4 + i * 14]], { w: 2, col: '#3a3a6a', pass2: false }); for (let i = 0; i < 4; i++) if (wr * 4 > i) pencil([[18, 2 + i * 14], [lerp(18, 100, clamp(wr * 4 - i)), 2 + i * 14]], { w: 2, col: '#3a3a6a', pass2: false });
      if (t > EV.lg_save) { const g = clamp((t - EV.lg_save) / 0.4); glow(0, 20, 220, 'rgba(255,220,120,1)', 0.6 * g); rays(0, 20, -1.57, 3, 500, 'rgba(255,230,150,1)', 0.25 * g, 10, t); } pop();
    push(980, 1490, 1); ell(0, 0, 36, 12, { wash: '#1a1a24', washA: 1, w: 2 }); rect(-26, -50, 52, 50, { wash: '#2a2a3a', washA: 1, w: 2 }); pencil([[0, -50], [50, -160]], { w: 3, col: '#3a2a1a' }); blob([[50, -160], [30, -230], [44, -300], [66, -230]], { wash: '#f4ecd8', washA: 1, w: 1.4, col: '#6a5a3a' }); pop();
    if (t > EV.lg_save) { const r = rng(12923); for (let i = 0; i < 10; i++) { const q = clamp((t - EV.lg_save - i * 0.05) / 1.2); if (q <= 0) continue; const x = 760 + (r() - 0.5) * 800 * q, y = 1450 - q * 700 - r() * 200; push(x, y, 0.7, q * 4 + i); rect(-40, -52, 80, 104, { wash: '#fff4d8', washA: 1, w: 1.6, col: '#c8a050' }); txt(['мёдъ', 'мука', 'патока', 'корица', 'имбирь'][i % 5], 0, 6, 20, { font: 'Hand', col: '#7a3a08' }); pop(); } }
  }
  function vignette(t) {                                                // «легенда»: тёплая сепия по краям и рамка-узор
    scr(() => { const g = ctx.createRadialGradient(540, 960, 500, 540, 960, 1150); g.addColorStop(0, 'rgba(120,70,20,0)'); g.addColorStop(1, 'rgba(120,70,20,0.55)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); });
  }
  WORLD.legend = (t, u, cat) => {
    lay(12, () => { shop(t); haze('#ffe0a0', 0.08); });
    lay(1, () => { cat(); });
    lay(0.95, () => { bench(t); });
    lay(0.6, () => { motes(40, [0, 300, 1080, 1800], '#fff0c0', t, 12930, { sp: 8, sz: 5, a: 0.5, wob: 2 }); push(1180, 1900, 1.5); const sk = shape(spline([[-90, 0], [-100, -150], [-60, -230], [60, -230], [100, -150], [90, 0]], true, 6), { wash: '#c8b088', washA: 1, w: 2.4, col: '#3a2a1a' }); txt('ПРЯНОСТИ', 0, -110, 24, { font: 'Osw', col: '#6a3a10' }); pop(); });
    vignette(t);
  };
  DIR.legend = {
    outfit: 'uchenikA', light: { side: -1, rim: '#ffe0a0' }, grade: ['#ffc070', 0.14],
    act: () => [[S0.legend, 'suspicious'], [EV.lg_sneak, 'sideeye'], [EV.lg_weigh, 'awe'], [EV.lg_peb, 'proud'], [EV.lg_save, 'laugh'], [EV.lg_gag + 0.1, 'wink']],
    pose: (t, u, b) => { const sn = t < EV.lg_weigh - 0.4, k = clamp((t - S0.legend) / (EV.lg_weigh - 0.4 - S0.legend));
      return Object.assign(b, { x: sn ? lerp(980, 640, sm(k)) : 640, y: 1720, s: 1.08, flip: -1, walk: sn ? t * 6 : undefined, look: sn ? [0.8, 0] : t > EV.lg_save ? [0, -0.2] : [-0.6, 0.5], tilt: sn ? Math.sin(t * 6) * 0.04 : 0,
        hand: sn ? [60, -400] : t > EV.lg_gag ? [40, -260] : [240, -260], handF: sn ? [-40, -380] : t > EV.lg_gag ? [-40, -260] : [-120, -240], prop: t > EV.lg_gag ? 'noteP' : (t > EV.lg_weigh - 0.6 && t < EV.lg_weigh ? 'pebbleP' : undefined), tailUp: t > EV.lg_save }); },
    cam: () => [[S0.legend, 600, 900, 0.1], [EV.lg_sneak - 0.3, 800, 1200, 0.18, 'x'], [EV.lg_weigh, 480, 1260, 0.24], [EV.lg_peb, 460, 1220, 0.26], [EV.lg_save, 600, 1240, 0.22], [S1.legend, 620, 1220, 0.3]]
  };
  // ---------------------------------------------------------------- переход: колокол раскачивается через кадр
  TRANS_IN.legend = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), ang = lerp(-1.1, 1.1, e); drawBuf(A, 1, 540, 960);
    const px = 540 + Math.sin(ang) * 1500, py = -300 + Math.cos(ang) * 1500, P = new Path2D(); P.moveTo(0, 0); P.lineTo(px - 600, py); P.lineTo(px - 600, H + 200); P.lineTo(-10, H + 200); P.closePath();
    const P2 = new Path2D(); P2.rect(0, 0, W, H); inPath(e < 1 ? (() => { const Q = new Path2D(); Q.rect(0, 0, Math.max(0, px), H); return Q; })() : P2, () => drawBuf(B, 1, 540, 960));
    scr(() => { pencil([[540, -300], [px, py - 300]], { w: 14, col: '#3a2a1a', pass2: false }); push(px, py - 300, 3, -ang * 0.6); const b = blob([[-80, 0], [-100, 180], [-130, 260], [130, 260], [100, 180], [80, 0], [0, -30]], { wash: '#c8a050', washA: 1, w: 4, col: '#4a2a08' }); metalG(b.path, -30, 100, 180, '#fff0b0', '#c8a050', '#6a4a10'); ell(0, 260, 30, 30, { wash: '#6a4a10', washA: 1, w: 2 }); pop(); });
  } };
})();
