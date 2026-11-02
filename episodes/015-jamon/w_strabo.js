/* 015 — `strabo`: «Ещё географ Страбон хвалил окорока горцев Пиренеев: доход от них — немалый!» Пиренейская деревня керретанов I в.: снежные пики, сосны,
   каменные дома с соломенными крышами, коптильня с рядами окороков в дыму, горцы в плащах с овчиной, мулы с поклажей уходят по горной тропе к указателю
   ROMA, торговец-римлянин со счётами. Том-Страбон — греческий географ в хитоне и гиматии со свитком. По словам: «Страбон» — свиток разворачивается, на нём
   ΣΤΡΑΒΩΝ и карта Иберии; «окорока» — двери коптильни распахиваются, окорока подсвечены; «Пиренеев» — на пиках проступает подпись PYRENAEI; «доход … немалый!» —
   монеты сыплются в сундук, мулы трогаются. Переход В сцену: свиток раскатывается по кадру, открывая новую сцену. */
(() => {
  EV.sb_name = wtw('s1', 'Страбон');
  EV.sb_hams = wtw('s1', 'окорока');
  EV.sb_pyr = wtw('s1', 'Пиренеев:');
  EV.sb_cash = wtw('s1', 'немалый!');
  KEYW.push('Страбон', 'немалый!');

  function peaks(t) {                                                   // небо, снежные пики, облака, лес
    vgrad(-700, 900, ['#5a8ac8', '#a8cce8', '#f0e8d8']); for (let i = 0; i < 5; i++) { const x = ((i * 380 + t * 14) % 1900) - 400; for (let k = 0; k < 4; k++) ell(x + k * 50, -300 + (i % 2) * 90 - (k % 2) * 16, 70, 26, { wash: '#ffffff', washA: 0.85, line: false }); }
    for (const [x, h, c] of [[-200, 900, '#6a7a9a'], [300, 1100, '#7a8aa8'], [800, 980, '#6a7a9a'], [1300, 860, '#7a8aa8']]) { const m = poly([[x - 420, 700], [x, 700 - h], [x + 420, 700]], { wash: c, washA: 1, w: 1.6, col: '#3a4a6a' }); poly([[x - 130, 700 - h * 0.7], [x, 700 - h], [x + 130, 700 - h * 0.7], [x + 60, 700 - h * 0.62], [x, 700 - h * 0.7], [x - 60, 700 - h * 0.6]], { wash: '#ffffff', washA: 1, w: 1.2, col: '#8a9ab8' }); }
    if (t > EV.sb_pyr) { push(300, -280, popK(t, EV.sb_pyr, 0.4)); txt('PYRENAEI', 0, 0, 60, { font: 'Osw', col: '#fff4d0' }); pop(); }
    for (let i = 0; i < 22; i++) { const x = -350 + i * 90, h = 120 + (i % 3) * 40; spruce(x, 760, h, i % 2 ? '#2a4a3a' : '#1e3a2e', 1); }
  }
  function village(t) {                                                 // каменные дома, коптильня с окороками, тропа с мулами, указатель ROMA
    for (const [x, w] of [[-220, 260], [100, 220], [1000, 240]]) { push(x, 1120, 1); const h = rect(-w / 2, -200, w, 200, { wash: '#a8a090', washA: 1, w: 2, col: '#3a3428' }); const r = rng(15200 + x); for (let i = 0; i < 14; i++) rect(-w / 2 + r() * (w - 40), -190 + r() * 170, 30 + r() * 20, 18, { wash: '#8a8270', washA: 1, w: 1, col: '#4a443a' }); shape([[-w / 2 - 30, -200], [0, -330], [w / 2 + 30, -200]], { wash: '#c8a858', washA: 1, w: 2, col: '#5a4a1a' }); for (let i = 0; i < 8; i++) pencil([[-w / 2 - 20 + i * w / 7, -205], [-w / 2 + 40 + i * w / 9, -300]], { w: 2, col: '#8a7030', a: 0.6, pass2: false }); rect(-24, -90, 48, 90, { wash: '#4a3020', washA: 1, w: 1.6 }); pop(); }
    push(560, 1140, 1); const sh = rect(-200, -300, 400, 300, { wash: '#8a7a64', washA: 1, w: 2.4, col: '#2a2418', key: 15210 }); shape([[-230, -300], [0, -420], [230, -300]], { wash: '#6a5a3a', washA: 1, w: 2, col: '#2a2010' }); const open = clamp((t - EV.sb_hams + 0.1) / 0.4);
      rect(-150, -240, 300, 240, { wash: '#2a1a10', washA: 1, w: 2 }); if (open > 0) { glow(0, -120, 240, 'rgba(255,170,80,1)', 0.6 * open); for (let r = 0; r < 2; r++) for (let i = 0; i < 4; i++) jamonLeg(-110 + i * 72, -160 + r * 110, 0.3, -0.55, { key: 15211 + r * 4 + i }); }
      for (const sd of [-1, 1]) { push(sd * 150, -240, 1); rect(sd < 0 ? 0 : -150 * (1 - open * 0.9), 0, 150 * (1 - open * 0.9), 240, { wash: '#6a4424', washA: 1, w: 2, col: '#2a1408' }); pop(); }
      for (let i = 0; i < 3; i++) { const q = (t * 0.3 + i / 3) % 1; ell(60 + Math.sin(q * 6 + i) * 30, -430 - q * 260, 40 + q * 50, 26 + q * 30, { wash: '#d8d0c8', washA: 0.5 * (1 - q), line: false }); } pop();
    const go = t > EV.sb_cash ? (t - EV.sb_cash) * 60 : 0; for (let i = 0; i < 3; i++) { const x = 860 + i * 150 + go, y = 1220; push(x, y, 0.7); blob([[-80, -60], [-70, -110], [60, -110], [90, -80], [140, -120], [150, -90], [110, -50], [80, 0], [60, 0], [50, -50], [-50, -50], [-60, 0], [-80, 0]], { wash: '#6a5040', washA: 1, w: 2, col: '#1a1008' }); for (const sd of [-1, 1]) jamonLeg(sd * 40, -130, 0.28, sd * 0.4 - 1.5, { key: 15220 + i * 2 + (sd > 0) }); pop(); }
    push(1240, 1180, 1); pencil([[0, 0], [0, -200]], { w: 8, col: '#5a3a1a' }); poly([[-10, -190], [120, -190], [150, -160], [120, -130], [-10, -130]], { wash: '#c8a868', washA: 1, w: 2, col: '#3a2a10' }); txt('ROMA', 60, -148, 28, { font: 'Osw', col: '#3a1a08' }); pop();
  }
  function folk(t) {                                                    // горцы в плащах, торговец-римлянин со счётами и сундуком монет
    human(120, 1320, 1.05, t, { body: '#7a5a3a', legs: '#4a3a2a', hair: '#3a2010', beard: 'short', face: t > EV.sb_cash ? 'grin' : 'smile', armL: 'hold', armR: t > EV.sb_hams ? 'point' : 'hold', look: 0.6, seed: 15230 });
    push(120, 1320 - 250, 1.05); blob([[-70, 0], [-60, -30], [60, -30], [70, 0], [40, 20], [-40, 20]], { wash: '#e8e0d0', washA: 1, w: 1.6, col: '#6a5a4a' }); pop();
    human(1010, 1320, 1.05, t, { body: '#e8e0d0', bodyD: '#b8b0a0', legs: '#c8443a', hair: '#2a2010', face: t > EV.sb_cash ? 'shock' : 'calm', armL: 'hold', armR: 'up', look: -0.5, seed: 15231, flip: -1 });
    push(860, 1440, 1); const c = rect(-90, -80, 180, 80, { wash: '#7a4a24', washA: 1, w: 2.4, col: '#1a0a04' }); shadeG(c.path, 0, -80, 0, 0, '#3a1a08', 0.4); for (const x of [-60, 60]) rect(x - 8, -84, 16, 86, { wash: '#8a8e94', washA: 1, w: 1.2 });
      const n = t > EV.sb_cash ? Math.min(14, Math.floor((t - EV.sb_cash) * 18)) : 0; for (let i = 0; i < 8 + n; i++) ell(-60 + (i * 37) % 120, -86 - Math.floor(i / 4) * 6, 14, 6, { wash: '#e8b030', washA: 1, w: 1, col: '#8a5a10' });
      if (t > EV.sb_cash) for (let i = 0; i < 6; i++) { const q = ((t - EV.sb_cash) * 2 + i / 6) % 1; ell(-30 + i * 12, -400 + q * 300, 12, 12 * Math.abs(Math.cos(t * 9 + i)), { wash: '#ffd040', washA: 1, w: 1, col: '#8a5a10' }); } pop();
  }
  function scroll(t) {                                                  // свиток Страбона на камне: ΣΤΡΑΒΩΝ, карта Иберии
    const k = sm(clamp((t - EV.sb_name + 0.2) / 0.5)); push(430, 1500, 1); rect(-40, 0, 300, 80, { wash: '#8a8270', washA: 1, w: 2, col: '#3a3428' });
    const w = lerp(20, 300, k); rect(-20, -120, w, 120, { wash: '#f0e2c0', washA: 1, w: 2, col: '#6a4a1a' }); ell(-20, -60, 14, 64, { wash: '#c8a868', washA: 1, w: 2 }); ell(-20 + w, -60, 14, 64, { wash: '#c8a868', washA: 1, w: 2 });
      if (k > 0.6) { txt('ΣΤΡΑΒΩΝ', 120, -88, 26, { font: 'Osw', col: '#5a3a1a' }); blob([[40, -60], [90, -70], [150, -66], [190, -40], [170, -14], [100, -10], [50, -24]], { wash: '#e8c890', washA: 1, w: 1.6, col: '#6a4a1a' }); ell(120, -60, 6, 6, { wash: '#c8221a', washA: 1, line: false }); pencil([[60, -30], [220, -30]], { w: 1.4, col: '#6a4a1a', a: 0.5, pass2: false }); } pop();
    if (t > EV.sb_hams + 0.2) bubbleTag('ОКОРОКА', 560, 860, t, EV.sb_hams + 0.2, '#8a2a1a', 44, -0.04);
    if (t > EV.sb_cash + 0.1) bubbleTag('ДОХОД!', 860, 1180, t, EV.sb_cash + 0.1, '#c89a3a', 44, 0.05);
  }
  function front(t) { push(-60, 1950, 1.6); for (let i = 0; i < 7; i++) { const a = -2.6 + i * 0.3; pencil([[0, 0], [Math.cos(a) * 160, Math.sin(a) * 200]], { w: 8, col: '#3a5a2a' }); } pop(); push(1170, 1940, 1.5); blob([[-120, 0], [-100, -70], [0, -100], [100, -70], [120, 0]], { wash: '#8a8270', washA: 1, w: 2, col: '#3a3428' }); pop();
    motes(26, [0, 300, 1100, 1700], '#ffffff', t, 15240, { sp: 8, sz: 4, a: 0.4, wob: 2 }); rays(1000, -200, 2.3, 0.4, 1800, 'rgba(255,248,220,1)', 0.12, 5, t); }
  WORLD.strabo = (t, u, cat) => {
    lay(14, () => { peaks(t); haze('#cfe0f0', 0.1); });
    lay(4, () => { village(t); });
    lay(2.6, () => { folk(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { scroll(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.strabo = {
    outfit: 'geoA', light: { side: 1, rim: '#fff0c8' }, grade: ['#c8d8f0', 0.05],
    act: () => [[S0.strabo, 'proud'], [EV.sb_name, 'smug'], [EV.sb_hams, 'awe'], [EV.sb_pyr, 'talk'], [EV.sb_cash, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1660, s: 1.02, flip: -1, look: t > EV.sb_cash ? [0.6, 0.2] : t > EV.sb_pyr ? [-0.3, -0.8] : t > EV.sb_hams ? [-0.6, -0.4] : [-0.5, 0.5], hand: [200, -300], handF: t > EV.sb_hams && t < EV.sb_cash ? [-160, -380] : [-90, -220], prop: 'scrollP', propAng: 0.2, point: t > EV.sb_hams && t < EV.sb_cash ? 1 : undefined }),
    cam: () => [[S0.strabo, 560, 900, 0.06], [EV.sb_name, 520, 1300, 0.2, 'x'], [EV.sb_hams, 560, 1050, 0.18], [EV.sb_pyr, 540, 700, 0.1], [EV.sb_cash, 760, 1200, 0.2], [S1.strabo, 760, 1220, 0.24]]
  };
  // ---------------------------------------------------------------- переход: свиток раскатывается по кадру
  TRANS_IN.strabo = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const e = sm(k), X = lerp(-80, W + 80, e), P = new Path2D(); P.rect(0, 0, X, H); inPath(P, () => drawBuf(B, 1, 540, 960));
    scr(() => { ctx.save(); const g = ctx.createLinearGradient(X - 70, 0, X + 70, 0); g.addColorStop(0, '#a8844a'); g.addColorStop(0.5, '#f4e2b8'); g.addColorStop(1, '#8a6a3a'); ctx.fillStyle = g; ctx.fillRect(X - 70, 0, 140, H); ctx.strokeStyle = '#5a3a1a'; ctx.lineWidth = 6; ctx.strokeRect(X - 70, -10, 140, H + 20); ctx.restore(); });
  } };
})();
