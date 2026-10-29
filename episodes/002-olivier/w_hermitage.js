/* 002 — `hermitage`: «А родился он в ресторане „Эрмитаж“ — как „майонез из дичи“. Хозяин — Оливье.» 1860-е: золочёный зал, зеркала в рамах,
   газовые люстры, пальмы в кадках; купцы с бородами, дамы в кринолинах, половые в белых рубахах. Том-метрдотель (фрак + фартук) снимает клош —
   «майонез из дичи»: филе рябчика веером, раковые шейки, ломтики языка, в центре соус. «Хозяин — Оливье» — на стене золотая рама с силуэтом без лица и подписью
   Olivier, ценник «ОЛИВЬЕ = ФАМИЛИЯ» (портрета не сохранилось — честный силуэт). Переход В сцену: пар из котла заволакивает кадр. */
(() => {
  EV.he_name = wtw('s6', '«Эрмитаж»');
  EV.he_mayo = wtw('s6', '«майонез');
  EV.he_owner = wtw('s6', 'Хозяин');
  EV.he_ol = wtw('s6', 'Оливье.');
  KEYW.push('«Эрмитаж»', 'Оливье.');

  function hall(t) {                                                    // стены: зелёный шёлк, золотые пилястры, зеркала, лепнина
    vgrad(-600, 1500, ['#1a2a22', '#24402e', '#2e4a34']); for (let i = 0; i < 8; i++) { const x = -260 + i * 240; rect(x, 160, 30, 1000, { wash: '#c8a050', washA: 1, w: 2, col: '#4a2a08' });
      if (i % 2) { const m = rect(x + 50, 300, 160, 560, { wash: '#8aa0a8', washA: 1, w: 5, col: '#c8a050', key: 8000 + i }); shadeG(m.path, x + 50, 300, x + 210, 860, '#e8f4f8', 0.5); for (let k = 0; k < 3; k++) glow(x + 130, 450 + k * 140, 30, 'rgba(255,230,160,1)', 0.5); } }
    rect(-300, 140, 1700, 40, { wash: '#c8a050', washA: 1, w: 2.4, col: '#4a2a08' }); for (let i = 0; i < 34; i++) ell(-280 + i * 52, 196, 16, 14, { wash: '#e8c070', washA: 1, w: 1.4, col: '#6a4a10' });
    push(540, 90, 1); txt('ЭРМИТАЖЪ', 0, 0, 80, { font: 'Osw', col: '#e8c070' }); pop();
  }
  function gasLamp(x, y, t) { push(x, y, 1); pencil([[0, -400], [0, 0]], { w: 5, col: '#c8a050' }); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283, cx = Math.cos(a) * 120, cy = Math.sin(a) * 26; pencil([[0, 0], [cx, cy]], { w: 4, col: '#c8a050' }); ell(cx, cy - 26, 12, 22, { wash: '#fff4c8', washA: 0.9, w: 1.4, col: '#8a6a2a' }); glow(cx, cy - 26, 60 * flick(t, i), 'rgba(255,220,140,1)', 0.5); } glow(0, 0, 360, 'rgba(255,210,130,1)', 0.3); pop(); }
  function guests(t) {                                                  // купцы и дамы за столами
    for (const [x, s, o] of [[-60, 0.9, { body: '#1a1a24', hair: '#5a3a1a', beard: 'long', hat: null, face: 'grin', armR: 'up', prop: 'candle' }], [180, 0.85, { body: '#7a2a4a', hair: '#3a1a0a', long: 1, face: 'smile', armR: 'hold' }],
      [880, 0.9, { body: '#3a2a1a', hair: '#8a8a8a', beard: 'long', face: t > EV.he_mayo ? 'shock' : 'calm', armR: t > EV.he_mayo ? 'point' : 'hold', flip: -1 }], [1120, 0.85, { body: '#2a4a6a', hair: '#c88a3a', long: 1, face: 'smile', armR: 'wave', flip: -1 }]]) {
      if (o.long) { push(x, 1240, s); ell(0, -20, 130, 90, { wash: o.body, washA: 1, w: 2, col: '#1a0a0a' }); pop(); }
      human(x, 1240, s, t, Object.assign({ legs: '#1a1a1a', armL: 'down', look: x > 500 ? -0.6 : 0.6, seed: 120 + x }, o)); }
    for (const x of [60, 1000]) { push(x, 1260, 1); ell(0, 0, 200, 34, { wash: '#f6f4ee', washA: 1, w: 2, col: '#4a4a4a' }); rect(-200, 0, 400, 80, { wash: '#f6f4ee', washA: 1, w: 2, col: '#4a4a4a' }); candle(-80, -20, 0.6, t, x); pop(); }
    human(1260, 1250, 0.95, t, { body: '#f8f6f0', legs: '#f8f6f0', hair: '#3a2a1a', face: 'calm', armL: 'hold', armR: 'down', seed: 131, flip: -1, belt: '#d9482b' });
  }
  function palm(x, y, s, t) { push(x, y, s); poly([[-50, 0], [50, 0], [40, -90], [-40, -90]], { wash: '#a8603a', washA: 1, w: 2.4, col: '#3a1408' }); pencil([[0, -90], [10, -360]], { w: 12, col: '#6a4a2a' });
    for (let i = 0; i < 7; i++) { const a = -Math.PI / 2 + (i - 3) * 0.45 + Math.sin(t + i) * 0.04; pencil(spline([[10, -360], [10 + Math.cos(a) * 120, -360 + Math.sin(a) * 120 - 40], [10 + Math.cos(a) * 230, -360 + Math.sin(a) * 200 + 60]], false, 6), { w: 14, col: i % 2 ? '#3a6a2a' : '#2a5a1e' }); } pop(); }
  function portrait(t) {                                                // золотая рама: силуэт без лица, подпись Olivier
    if (t < EV.he_owner - 0.3) return; const k = popK(t, EV.he_owner - 0.3, 0.45); push(820, 560, k, 0.03);
    const f = rect(-170, -220, 340, 440, { wash: '#c8a050', washA: 1, w: 3, col: '#4a2a08' }); metalG(f.path, -60, -120, 400, '#fff0b0', '#c8a050', '#6a4a10'); rect(-140, -190, 280, 380, { wash: '#2a3a2a', washA: 1, w: 2, col: '#1a1a0a' });
    blob([[-110, 190], [-100, 80], [-40, 40], [40, 40], [100, 80], [110, 190]], { wash: '#141414', washA: 1, line: false }); ell(0, -40, 66, 80, { wash: '#141414', washA: 1, line: false }); txt('?', 0, -40, 90, { font: 'Osw', col: '#e8c070', a: 0.9 });
    rect(-110, 150, 220, 40, { wash: '#e8c070', washA: 1, w: 1.6, col: '#4a2a08' }); txt('Olivier', 0, 172, 32, { font: 'Hand', col: '#3a1a08' }); pop();
    if (t > EV.he_ol) bubbleTag('ОЛИВЬЕ = ФАМИЛИЯ', 760, 900, t, EV.he_ol + 0.1, '#d9482b', 48, -0.04);
  }
  function mayoGame(t) {                                                // «майонез из дичи» на серебре, клош снимается
    push(380, 1520, 1); ell(0, 0, 260, 56, { wash: '#d8dce0', washA: 1, w: 3, col: '#3a3e44', key: 8100 }); ell(0, -4, 220, 44, { wash: '#eef0f2', washA: 1, w: 1.4, col: '#8a8e96' });
    for (let i = 0; i < 9; i++) { const a = i / 9 * 6.283; push(Math.cos(a) * 150, -6 + Math.sin(a) * 30, 0.9, a); blob([[-40, -12], [0, -20], [40, -10], [36, 10], [-36, 12]], { wash: i % 3 === 0 ? '#c8605a' : '#d8a070', washA: 1, w: 1.6, col: '#5a2a1a' }); pop(); }
    for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283 + 0.3; crayTail(Math.cos(a) * 90, -16 + Math.sin(a) * 18, 0.7, a); }
    ell(0, -20, 60, 18, { wash: OL.mayo, washA: 1, w: 1.6, col: '#a89a6a' }); for (let i = 0; i < 6; i++) caper(-30 + i * 12, -24 + (i % 2) * 6, 1.1); for (let i = 0; i < 3; i++) olive(-90 + i * 90, -50, 0.4, i);
    glow(-60, -30, 40, 'rgba(255,255,255,1)', 0.6); pop();
    const up = sm(clamp((t - EV.he_mayo + 0.3) / 0.5)); if (up < 1) { push(380, 1500 - up * 700, 1, up * 0.6); const c = blob([[-230, 0], [-200, -140], [0, -220], [200, -140], [230, 0]], { wash: '#c8ccd0', washA: 1, w: 3, col: '#2a2e34' }); metalG(c.path, -60, -140, 300, '#ffffff', '#c8ccd0', '#4a4e54'); ell(0, -226, 24, 14, { wash: '#c8ccd0', washA: 1, w: 2 }); pop(); }
    if (t > EV.he_mayo) { for (let i = 0; i < 4; i++) { const kk = (t * 0.7 + i / 4) % 1; pencil(spline([[300 + i * 40, 1440 - kk * 260], [320 + i * 40 + Math.sin(t * 3 + i) * 16, 1380 - kk * 260], [300 + i * 40, 1320 - kk * 260]], false, 5), { w: 5, col: '#ffffff', a: 0.5 * (1 - kk), pass2: false }); } bubbleTag('«МАЙОНЕЗ ИЗ ДИЧИ»', 380, 1300, t, EV.he_mayo + 0.2, '#b8733a', 44, 0.03); }
  }
  WORLD.hermitage = (t, u, cat) => {
    lay(16, () => { hall(t); }); lay(8, () => { gasLamp(300, 420, t); gasLamp(900, 400, t); palm(-60, 1200, 1, t); palm(1180, 1200, 1, t); haze('#ffd890', 0.07); });
    lay(3.6, () => { guests(t); haze('#ffd890', 0.04); }); lay(2.2, () => portrait(t));
    lay(1, () => { cat(); });
    lay(0.9, () => { const tb = rect(-300, 1520, 1700, 700, { wash: '#f6f2e8', washA: 1, w: 3, col: '#4a3a2a', key: 8110 }); shadeG(tb.path, 0, 1900, 0, 1520, '#a89878', 0.45); for (let i = 0; i < 12; i++) pencil([[-300 + i * 150, 1530], [-280 + i * 150, 2200]], { w: 2, col: '#d8d0c0', pass2: false }); mayoGame(t); });
  };
  DIR.hermitage = {
    outfit: 'tuxA', light: { side: -1, rim: '#ffe0a0' }, grade: ['#ffc070', 0.12],
    act: () => [[S0.hermitage, 'proud'], [EV.he_name, 'awe'], [EV.he_mayo, 'grin'], [EV.he_owner, 'smug'], [EV.he_ol, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 800, y: 1690, s: 1.12, flip: -1, look: t < EV.he_owner ? [0.6, 0.5] : [0.4, -0.7], hand: [240, -280], handF: [-110, -300] }),
    cam: () => [[S0.hermitage, 540, 700, 0.18], [S0.hermitage + 1.2, 560, 1100, 0.12, 'x'], [EV.he_mayo, 480, 1300, 0.2], [EV.he_owner, 700, 1000, 0.2], [S1.hermitage, 720, 960, 0.26]]
  };
  // ---------------------------------------------------------------- переход: пар из котла заволакивает кадр и рассеивается
  TRANS_IN.hermitage = { a: 0.35, b: 0.5, runA: 1, fx(k, t, A, B) {
    drawBuf(k < 0.5 ? A : B, k < 0.5 ? 1 + 0.06 * k : 1.06 - 0.06 * k, 540, 960); const dens = Math.sin(k * Math.PI);
    scr(() => { for (let i = 0; i < 26; i++) { const r = rng(8190 + i), x = r() * 1300 - 100, y = 2100 - (k * 1.6 + r() * 0.6) * 1800, R = 220 + r() * 260;
      ell(x + Math.sin(t * 2 + i) * 40, y, R, R * 0.7, { wash: '#ffffff', washA: clamp(dens * 1.4) * 0.85, line: false }); } whiteOut(clamp(dens * 1.3 - 0.4), '252,248,240'); });
  } };
})();
