/* 014 — `biscuit`: «Кстати, „бисквит“ — от латинского „bis coctus“: дважды испечённый. По сути — сухарь!» Монастырская пекарня: каменные своды, большая печь,
   полки с караваями, мешки муки, окно-витраж, монах-писарь за пюпитром выводит на пергаменте «BIS COCTUS», монах-пекарь с лопатой. Том — средневековый повар
   с фартуком. По словам: «бисквит» — на подставке появляется пышный бисквитный торт со сливками; «bis coctus» — пергамент разворачивается, «BIS» = ×2;
   «дважды испечённый» — лопата задвигает хлеб в печь дважды, табличка ×2; «сухарь!» — рядом с тортом шлёпается сухарь, знак «=», Том в недоумении.
   Переход В сцену: облако муки заволакивает кадр и рассеивается. */
(() => {
  EV.bs_word = wtw('s2', '«бисквит»');
  EV.bs_lat = wtw('s2', 'латинского');
  EV.bs_twice = wtw('s2', 'дважды');
  EV.bs_rusk = wtw('s2', 'сухарь!');
  SHAKES.push([EV.bs_rusk + 0.05, 0.18, 8]);
  KEYW.push('дважды', 'сухарь!');

  function vault(t) {                                                   // каменные своды, витраж с лучами, полки с караваями
    vgrad(-600, 1500, ['#2a2220', '#4a3c32', '#6a5440']);
    for (let y = -500; y < 1300; y += 70) for (let x = -400; x < 1600; x += 140) rect(x + ((y / 70) % 2) * 70, y, 138, 68, { wash: '#6a5a48', washA: 0.9, w: 1.2, col: '#2a2018', a: 0.6 });
    for (const x of [-100, 540, 1180]) pencil(spline([[x - 330, 200], [x - 220, -250], [x, -360], [x + 220, -250], [x + 330, 200]], false, 10), { w: 26, col: '#5a4a38' });
    push(540, 260, 1); const w = shape([[-110, 260], [-110, -60], [-70, -170], [0, -210], [70, -170], [110, -60], [110, 260]], { wash: '#3a5aa8', washA: 1, w: 6, col: '#2a2018', key: 14300 }); ctx.save(); ctx.clip(w.path); for (let i = 0; i < 6; i++) for (let j = 0; j < 9; j++) rect(-110 + i * 38, -210 + j * 52, 38, 52, { wash: ['#c8221a', '#2a5ab8', '#e8c040', '#3a8a3a'][(i + j) % 4], washA: 0.85, w: 2, col: '#1a1a1a' }); ctx.restore(); pop();
    rays(540, 260, 1.9, 0.35, 1700, 'rgba(255,230,180,1)', 0.18, 6, t);
    for (const y of [460, 700]) { rect(800, y, 500, 18, { wash: '#5a3a1a', washA: 1, w: 2, col: '#1a0a04' }); for (let i = 0; i < 5; i++) { const x = 840 + i * 92; blob([[x - 40, y], [x - 34, y - 46], [x, y - 60], [x + 34, y - 46], [x + 40, y]], { wash: '#a86a2a', washA: 1, w: 1.6, col: '#3a1a08' }); pencil([[x - 20, y - 40], [x + 20, y - 30]], { w: 2, col: '#e8b070', pass2: false }); } }
  }
  function oven(t) {                                                    // каменная печь, монах-пекарь с лопатой: хлеб задвигают дважды
    push(80, 1320, 1); const o = blob([[-260, 0], [-250, -280], [-160, -420], [160, -420], [250, -280], [260, 0]], { wash: '#8a7a68', washA: 1, w: 3, col: '#2a2018' }); for (let y = -400; y < 0; y += 50) for (let x = -240; x < 240; x += 80) rect(x + ((y / 50) % 2) * 40, y, 78, 48, { wash: '#9a8a76', washA: 0.7, w: 1, col: '#4a3a2a', a: 0.5 });
    const m = blob([[-100, 0], [-100, -120], [0, -170], [100, -120], [100, 0]], { wash: '#1a0a04', washA: 1, w: 2.4 }); for (let i = 0; i < 5; i++) { const f = Math.sin(t * 9 + i) * 10; blob([[-70 + i * 32, 0], [-78 + i * 32, -50 - f], [-60 + i * 32, -100 - f], [-52 + i * 32, 0]], { wash: i % 2 ? '#ff8a2a' : '#ffd04a', washA: 0.9, line: false }); } glow(0, -70, 220, 'rgba(255,140,50,1)', 0.5); pop();
    const tw = t > EV.bs_twice - 0.2, ph = tw ? ((t - EV.bs_twice + 0.2) % 0.7) / 0.7 : 0, px = lerp(420, 220, Math.sin(ph * Math.PI));
    human(px + 120, 1340, 1.1, t, { body: '#5a4a3a', legs: '#3a3028', hair: '#c8a080', face: 'calm', armL: 'hold', armR: 'hold', look: -0.7, seed: 14301, flip: -1, long: 1 }); push(px + 120, 1340 - 300 * 1.1, 1.1); blob([[-46, 0], [-50, -20], [0, -40], [50, -20], [46, 0]], { wash: '#5a4a3a', washA: 1, w: 1.6 }); pop();
    push(px, 1110, 1); pencil([[0, 0], [260, 30]], { w: 8, col: '#8a6a3a' }); ell(-20, 0, 50, 14, { wash: '#a8844a', washA: 1, w: 2 }); blob([[-50, -10], [-40, -36], [0, -44], [40, -36], [50, -10]], { wash: '#c8904a', washA: 1, w: 1.6, col: '#3a1a08' }); pop();
    if (tw) { push(240, 840, popK(t, EV.bs_twice - 0.2, 0.4)); ell(0, 0, 80, 80, { wash: '#e8c040', washA: 1, w: 4, col: '#5a3a08' }); txt('×2', 0, 26, 76, { font: 'Osw', col: '#7a1a10' }); pop(); }
  }
  function scribe(t) {                                                  // монах-писарь за пюпитром, пергамент BIS COCTUS
    human(1000, 1320, 1.08, t, { body: '#3a2a20', legs: '#2a2018', hair: '#8a6a4a', face: t > EV.bs_lat ? 'smile' : 'calm', armL: 'hold', armR: 'hold', look: -0.5, seed: 14302, flip: -1, long: 1 }); push(1000, 1320 - 300 * 1.08, 1.08); blob([[-46, 0], [-50, -20], [0, -40], [50, -20], [46, 0]], { wash: '#3a2a20', washA: 1, w: 1.6 }); pop();
    push(860, 1250, 1); pencil([[0, 0], [0, -200]], { w: 14, col: '#4a2a14' }); const op = sm(clamp((t - EV.bs_lat + 0.2) / 0.5)); poly([[-140, -200], [140, -220], [150, lerp(-220, -420, op)], [-130, lerp(-200, -400, op)]], { wash: '#f4ecd0', washA: 1, w: 2, col: '#6a5232' });
      if (op > 0.6) { txt('BIS', -10, -340, 54, { font: 'Hand', col: '#a8221a' }); txt('COCTUS', -6, -280, 44, { font: 'Hand', col: '#3a1a08' }); } candle(160, -220, 0.7, t, 14303); pop();
  }
  function table(t) {                                                   // стол: бисквитный торт (на «бисквит») vs сухарь (на «сухарь») со знаком «=»
    const tb = rect(-400, 1440, 1900, 800, { wash: '#6a4a2a', washA: 1, w: 3, col: '#1a0a04', key: 14310 }); shadeG(tb.path, 0, 1900, 0, 1440, '#2a1408', 0.45); for (let i = 0; i < 6; i++) pencil([[-400, 1480 + i * 70], [1500, 1484 + i * 70]], { w: 2, col: '#3a1a08', a: 0.5, pass2: false });
    if (t > EV.bs_word - 0.2) { const k = popK(t, EV.bs_word - 0.2, 0.45); push(300, 1480, k); ell(0, 0, 150, 30, { wash: '#f8f6f0', washA: 1, w: 2, col: '#5a5a62' }); pencil([[0, 0], [0, 40]], { w: 10, col: '#c8ccd2' });
      const c = shape([[-120, -10], [-120, -150], [120, -150], [120, -10]], { wash: '#f4d890', washA: 1, w: 2.4, col: '#8a6a2a' }); shadeG(c.path, 120, 0, -60, 0, '#d8b860', 0.35); for (let i = 0; i < 3; i++) pencil([[-120, -50 - i * 40], [120, -50 - i * 40]], { w: 6, col: '#fff8ec', pass2: false }); ell(0, -150, 120, 24, { wash: '#fff8ec', washA: 1, w: 2 }); for (let i = 0; i < 7; i++) ell(-90 + i * 30, -164, 12, 10, { wash: '#d9282a', washA: 1, w: 1 }); glow(-60, -120, 30, 'rgba(255,255,255,1)', 0.5); txt('бисквит', 0, 70, 34, { font: 'Hand', col: '#3a1a08' }); pop(); }
    if (t > EV.bs_rusk - 0.25) { const q = clamp((t - EV.bs_rusk + 0.25) / 0.3); rusk(760, lerp(900, 1440, q * q), 1.3, 0.2, { key: 14311 }); if (q >= 1) { txt('=', 540, 1440, 120, { font: 'Osw', col: '#d9282a' }); txt('сухарь', 760, 1560, 34, { font: 'Hand', col: '#3a1a08' }); } }
  }
  function front(t) {                                                   // передний план: мешок муки и деревянная квашня, мука в лучах
    push(-60, 1920, 1.5); const sk = shape(spline([[-110, 0], [-120, -150], [-90, -220], [90, -220], [120, -150], [110, 0]], true, 6), { wash: '#e8dcc0', washA: 1, w: 2.4, col: '#5a4a2a' }); txt('FARINA', 0, -110, 30, { font: 'Osw', col: '#6a3a10' }); ell(0, -220, 80, 18, { wash: '#ffffff', washA: 1, w: 1.6 }); pop();
    push(1180, 1920, 1.5); const kv = shape([[-120, 0], [-140, -110], [140, -110], [120, 0]], { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#2a1408' }); ell(0, -110, 140, 22, { wash: '#f4e6c8', washA: 1, w: 2 }); pop();
    motes(50, [0, 400, 1080, 1800], '#ffffff', t, 14320, { sp: 10, sz: 4, a: 0.5, wob: 2 });
  }
  WORLD.biscuit = (t, u, cat) => {
    lay(12, () => { vault(t); haze('#d8c0a0', 0.07); });
    lay(2.6, () => { oven(t); scribe(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { table(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.biscuit = {
    outfit: 'medcook', light: { side: 1, rim: '#ffe0a0' }, grade: ['#ffc080', 0.08],
    act: () => [[S0.biscuit, 'talk'], [EV.bs_word, 'grin'], [EV.bs_lat, 'proud'], [EV.bs_twice, 'awe'], [EV.bs_rusk, 'shock'], [EV.bs_rusk + 0.5, 'sideeye']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1600, s: 1.05, flip: t > EV.bs_rusk ? 1 : -1, look: t > EV.bs_rusk ? [0.4, 0.6] : t > EV.bs_lat ? [0.6, -0.4] : [-0.5, 0.4], hand: [180, -300], handF: t > EV.bs_rusk ? [-140, -400] : [-80, -220], point: t > EV.bs_lat && t < EV.bs_rusk ? 1 : undefined }),
    cam: () => [[S0.biscuit, 560, 900, 0.08], [EV.bs_word - 0.2, 400, 1260, 0.22, 'x'], [EV.bs_lat, 760, 1040, 0.2], [EV.bs_twice, 360, 1160, 0.2], [EV.bs_rusk, 560, 1300, 0.2], [S1.biscuit, 560, 1300, 0.24]]
  };
  // ---------------------------------------------------------------- переход: облако муки заволакивает кадр и рассеивается
  TRANS_IN.biscuit = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const dense = Math.sin(clamp(k) * Math.PI); drawBuf(k < 0.5 ? A : B, 1, 540, 960);
    scr(() => { const r = rng(14330); for (let i = 0; i < 30; i++) { const x = r() * W, y = r() * H, R = (200 + r() * 300) * (0.4 + dense); ctx.save(); ctx.globalAlpha = 0.5 * dense; ctx.fillStyle = '#fbf8f0'; ctx.beginPath(); ctx.arc(x + Math.sin(k * 6 + i) * 60, y - k * 200, R, 0, 6.283); ctx.fill(); ctx.restore(); } ctx.fillStyle = 'rgba(251,248,240,' + (0.85 * dense) + ')'; ctx.fillRect(0, 0, W, H); });
  } };
})();
