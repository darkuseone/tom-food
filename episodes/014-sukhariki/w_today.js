/* 014 — `today`: «Сегодня ржаной сухарь хранится до двух лет. Ржаные или пшеничные?» Домашняя кладовая-кухня: полки с банками домашних сухарей, крупами,
   соленьями, отрывной календарь, песочные часы, корзина хлеба, окно со снегом. Том в худи. По словам: «хранится» — переворачиваются песочные часы;
   «до двух лет» — листки календаря слетают пачкой, табло «2 ГОДА»; «Ржаные или пшеничные?» — две миски (тёмные и светлые сухари) подсвечиваются, Том
   переводит взгляд. Переход В сцену: календарные листки отрываются один за другим. */
(() => {
  EV.td_keep = wtw('t1', 'хранится');
  EV.td_2y = wtw('t1', 'лет.');
  EV.td_q = wtw('t1', 'пшеничные?');
  EV.td_rye = wtw('t1', 'Ржаные');
  KEYW.push('лет.', 'пшеничные?');

  function pantry(t) {                                                  // доски, окно со снегом, полки с банками, календарь
    vgrad(-600, 1500, ['#4a3220', '#7a5434', '#9a7048']); for (let x = -400; x < 1600; x += 80) pencil([[x, -500], [x, 1300]], { w: 3, col: '#5a3a1a', a: 0.5, pass2: false });
    push(860, 320, 1); const w = rect(-150, -200, 300, 330, { wash: '#a8c0d8', washA: 1, w: 8, col: '#3a2410', key: 14900 }); ctx.save(); ctx.clip(w.path); vgrad(-200, 130, ['#8aa8c8', '#e0e8f0']); for (let i = 0; i < 6; i++) spruce(-160 + i * 60, 130, 90, '#2a4a3a', 1); motes(30, [-150, -200, 150, 130], '#ffffff', t, 14901, { sp: 30, sz: 3, a: 0.8, wob: 1 }); ctx.restore(); pencil([[0, -200], [0, 130]], { w: 6, col: '#3a2410' }); pop();
    for (const y of [300, 540, 780]) { rect(-380, y, 760, 18, { wash: '#5a3a1a', washA: 1, w: 2, col: '#1a0a04' }); const r = rng(14902 + y); for (let i = 0; i < 6; i++) { const x = -330 + i * 120, h = 90 + r() * 40; const j = shape(spline([[-36, 0], [-42, -h * 0.5], [-34, -h], [34, -h], [42, -h * 0.5], [36, 0]], true, 6).map(([a, b]) => [a + x, b + y]), { wash: '#d8ecf4', washA: 0.35, w: 2, col: '#5a7a8a' });
      ctx.save(); ctx.clip(j.path); if (i % 2) for (let k = 0; k < 8; k++) cubeRusk(x - 20 + (k % 3) * 20, y - 14 - Math.floor(k / 3) * 22, 0.45, k, { key: 14903 + i + k + y, wheat: (i + y / 10) % 3 === 0 }); else rect(x - 40, y - h * 0.7, 80, h * 0.7, { wash: ['#e8c060', '#c8643a', '#6a8a3a'][i % 3], washA: 0.8, line: false }); ctx.restore(); rect(x - 30, y - h - 12, 60, 16, { wash: '#c8221a', washA: 1, w: 1.2 }); } }
    push(1180, 760, 1); rect(-90, -130, 180, 220, { wash: '#f8f4ea', washA: 1, w: 2.4, col: '#3a3a3a' }); rect(-90, -130, 180, 50, { wash: '#c8221a', washA: 1, w: 2 }); txt('2026', 0, -96, 30, { font: 'Osw', col: '#fff4d0' }); txt(t > EV.td_2y ? '2028' : '2', 0, 30, t > EV.td_2y ? 60 : 90, { font: 'Osw', col: '#2a2a2a' }); pop();
  }
  function kitchen(t) {                                                 // кухня за кладовой: печь-духовка с противнем сушащихся сухарей, бабушка, связки сушек, лука, чеснока, трав
    push(-60, 1300, 1); const ov = rect(-200, -420, 400, 420, { wash: '#e8e4dc', washA: 1, w: 3, col: '#2a2a2a', key: 14940 }); shadeG(ov.path, 200, -200, -200, -200, '#8a8478', 0.3); for (let i = 0; i < 4; i++) { ell(-140 + i * 90, -380, 34, 16, { wash: '#2a2a2a', washA: 1, w: 1.6 }); if (i === 1) for (let k = 0; k < 2; k++) { const q = (t * 0.5 + k / 2) % 1; pencil(spline([[-50, -400], [-50 + Math.sin(q * 6) * 14, -440 - q * 80], [-46, -500 - q * 120]], false, 5), { w: 8, col: '#ffffff', a: 0.3 * (1 - q), pass2: false }); } }
      const d = rect(-170, -320, 340, 260, { wash: '#1a1410', washA: 1, w: 3, col: '#2a2a2a' }); glow(0, -190, 220, 'rgba(255,150,60,1)', 0.7); rect(-150, -220, 300, 14, { wash: '#6a6e74', washA: 1, w: 1.4 }); for (let k = 0; k < 10; k++) rusk(-130 + (k % 5) * 62, -232 - Math.floor(k / 5) * 22, 0.42, 0.1 * k, { rye: k % 2, key: 14941 + k });
      for (let i = 0; i < 3; i++) ell(-120 + i * 120, -30, 14, 14, { wash: '#3a3a3a', washA: 1, w: 1.2 }); pop();
    human(300, 1320, 1.05, t, { body: '#7a5a8a', legs: '#4a3a2a', hair: '#d8d0c0', face: t > EV.td_2y ? 'shock' : 'smile', armL: 'hold', armR: 'hold', look: -0.4, seed: 14945, long: 1, flip: -1 }); kerchief20(300, 1320, 1.05, '#4a7a4a', -1);
      push(300 - 90, 1320 - 240, 1); rect(-70, -8, 140, 14, { wash: '#6a6e74', washA: 1, w: 1.4 }); for (let k = 0; k < 4; k++) rusk(-48 + k * 32, -14, 0.3, 0, { rye: 1, key: 14946 + k }); pop();
    for (const [x, kind] of [[-260, 0], [-160, 1], [1250, 2], [1360, 0]]) { const sw = Math.sin(t * 1.3 + x) * 0.05; push(x, -200, 1, sw); pencil([[0, 0], [0, 420]], { w: 3, col: '#8a6a3a', pass2: false });
      for (let k = 0; k < 7; k++) { const y = 60 + k * 50; if (kind === 0) { ell(0, y, 26, 14, { line: true, w: 9, col: '#d8a860' }); } else if (kind === 1) blob([[-16, y + 20], [-20, y - 6], [0, y - 22], [20, y - 6], [16, y + 20]], { wash: k % 2 ? '#c87a3a' : '#e8d8c0', washA: 1, w: 1.4, col: '#6a3a1a' }); else for (let m = 0; m < 3; m++) pencil([[0, y - 20], [(m - 1) * 18, y + 30]], { w: 3, col: '#6a8a3a', pass2: false }); } pop(); }
  }
  function table(t) {                                                   // стол: две миски сухарей (ржаные / пшеничные), песочные часы, корзина хлеба, табло «2 ГОДА»
    const tb = rect(-400, 1440, 1900, 800, { wash: '#7a4a24', washA: 1, w: 3, col: '#1a0a04', key: 14910 }); shadeG(tb.path, 0, 1900, 0, 1440, '#2a1408', 0.45); for (let i = 0; i < 6; i++) pencil([[-400, 1480 + i * 70], [1500, 1484 + i * 70]], { w: 2, col: '#3a1a08', a: 0.5, pass2: false });
    for (const [i, x] of [[0, 290], [1, 790]].map(([a, b]) => [a, b])) { const on = t > EV.td_rye - 0.1 && (i === 0 ? true : t > EV.td_q - 0.3); if (on) glow(x, 1430, 220, 'rgba(255,230,160,1)', 0.35); push(x, 1480, 1); ell(0, 0, 130, 34, { wash: i ? '#e8dcc0' : '#4a6a8a', washA: 1, w: 2.4, col: '#1a1a1a' }); for (let k = 0; k < 9; k++) rusk(-80 + (k % 3) * 80, -20 - Math.floor(k / 3) * 24, 0.5, k * 0.5, { rye: !i, key: 14911 + k + i * 10, salt: k % 2 }); pop();
      if (on) { push(x, 1330, 0.9); rect(-120, -30, 240, 60, { wash: i ? '#c8a050' : '#5a3014', washA: 1, w: 2.4, col: '#1a0a04' }); txt(i ? 'ПШЕНИЧНЫЕ' : 'РЖАНЫЕ', 0, 12, 34, { font: 'Osw', col: '#fff4d0' }); pop(); } }
    const fl = t > EV.td_keep ? sm(clamp((t - EV.td_keep) / 0.5)) * Math.PI : 0; push(990, 1440, 0.8, fl); poly([[-40, -60], [40, -60], [0, 0]], { wash: '#d8ecf4', washA: 0.5, w: 2, col: '#8a6a3a' }); poly([[-40, 60], [40, 60], [0, 0]], { wash: '#d8ecf4', washA: 0.5, w: 2, col: '#8a6a3a' }); poly([[-24, 50], [24, 50], [0, 20]], { wash: '#e8c070', washA: 1, line: false }); for (const y of [-64, 64]) rect(-50, y - 6, 100, 12, { wash: '#8a5a2a', washA: 1, w: 1.6 }); pop();
    if (t > EV.td_2y - 0.2) { push(730, 960, popK(t, EV.td_2y - 0.2, 0.4)); rect(-170, -60, 340, 120, { wash: '#1a1a20', washA: 1, w: 4, col: '#c8a050' }); txt('2 ГОДА', 0, 24, 70, { font: 'Osw', col: '#ffe070' }); pop(); const r = rng(14920); for (let i = 0; i < 14; i++) { const q = t - EV.td_2y - r() * 0.4; if (q < 0 || q > 1.2) continue; push(1180 + q * (r() - 0.5) * 600, 760 + q * 600 + q * q * 400, 1, q * 6 + i); rect(-40, -30, 80, 60, { wash: '#f8f4ea', washA: 1, w: 1.2, col: '#8a8a8a' }); pop(); } }
  }
  function front(t) { push(-40, 1900, 1.4); const bk = shape([[-140, 0], [-160, -120], [160, -120], [140, 0]], { wash: '#c8904a', washA: 1, w: 2.4, col: '#4a2a08' }); hatch(bk.path, bk.bb, { gap: 10, a: 0.5, col: '#8a5a2a', ang: 0.8 }); for (let i = 0; i < 3; i++) blob([[-110 + i * 80, -120], [-100 + i * 80, -180], [-60 + i * 80, -190], [-30 + i * 80, -120]], { wash: i % 2 ? SK.wheat : SK.rye, washA: 1, w: 2, col: '#3a1a08' }); pop(); motes(24, [100, 400, 1000, 1700], '#fff0d0', t, 14930, { sp: 6, sz: 4, a: 0.45, wob: 2 }); rays(860, 300, 2.0, 0.35, 1500, 'rgba(240,245,255,1)', 0.12, 5, t); }
  WORLD.today = (t, u, cat) => {
    lay(12, () => { pantry(t); haze('#ffe0b0', 0.05); });
    lay(3.2, () => { kitchen(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { table(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.today = {
    outfit: 'hoodie70', light: { side: 1, rim: '#ffe0a0' }, grade: ['#ffc080', 0.05],
    act: () => [[S0.today, 'grin'], [EV.td_keep, 'awe'], [EV.td_2y, 'shock'], [EV.td_rye, 'sideeye'], [EV.td_q, 'suspicious']],
    pose: (t, u, b) => { const q = t > EV.td_q - 0.3; return Object.assign(b, { x: 560, y: 1640, s: 1.02, flip: q ? 1 : -1, look: q ? [0.8, 0.4] : t > EV.td_rye ? [-0.8, 0.4] : [0, -0.2], hand: [180, -300], handF: [-60, -220], prop: 'ruskP', propAng: 0.3, point: t > EV.td_rye ? 1 : undefined }); },
    cam: () => [[S0.today, 560, 900, 0.08], [EV.td_keep - 0.2, 560, 1260, 0.16, 'x'], [EV.td_2y, 560, 1200, 0.14], [EV.td_rye, 560, 1320, 0.2], [S1.today, 560, 1320, 0.22]]
  };
  // ---------------------------------------------------------------- переход: листки календаря отрываются один за другим
  TRANS_IN.today = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const N = 5;
    for (let i = N - 1; i >= 0; i--) { const q = clamp(k * 1.6 - i * 0.15); if (q >= 1) continue; const src = i === 0 ? A : null; ctx.save(); ctx.setTransform(1, 0, 0, 1, q * 400, q * q * 1600); ctx.translate(540, 0); ctx.rotate(q * 0.8); ctx.translate(-540, 0);
      if (src) ctx.drawImage(A, 0, 0); else { ctx.fillStyle = '#f8f4ea'; ctx.fillRect(40, 40, W - 80, H - 80); ctx.fillStyle = '#c8221a'; ctx.fillRect(40, 40, W - 80, 160); ctx.fillStyle = '#2a2a2a'; ctx.font = 'bold 400px Oswald'; ctx.textAlign = 'center'; ctx.fillText(String(i + 1), 540, 1100); } ctx.restore(); }
  } };
})();
