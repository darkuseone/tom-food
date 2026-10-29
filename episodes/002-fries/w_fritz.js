/* 002 — `fritz`: «А в Бельгию её привёз баварец Кригер — „картошку как в Париже“!» Ярмарка 1844: шатры, карусель, гирлянды флажков, газовые фонари.
   Будка «FRITZ» с вывеской «POMMES DE TERRE FRITES À L'INSTAR DE PARIS»; рядом Кригер-музыкант в тирольской шляпе с валторной. Том в баварской шляпе раздаёт кульки.
   На «баварец» — Кригер дует в валторну (ноты летят); на «Париже» — вывеска вспыхивает, очередь ахает. HUD: карта-салфетка Париж → Бельгия.
   Переход В сцену: кадр Парижа сворачивается в бумажный кулёк (воронка, поворот) и улетает вниз. */
(() => {
  EV.fz_bel = wtw('s4', 'Бельгию');
  EV.fz_bav = wtw('s4', 'баварец');
  EV.fz_paris = wtw('s4', 'Париже');
  KEYW.push('баварец', 'париже»!');
  function sky(t) { vgrad(-600, 1300, ['#2a2a4a', '#6a4a6a', '#e89a6a']); glow(540, 980, 600, 'rgba(255,170,100,1)', 0.35); for (let i = 0; i < 30; i++) { const r = rng(8700 + i); ell(-300 + r() * 1700, -200 + r() * 500, 2, 2, { wash: '#fff8e0', washA: 0.5 + 0.5 * Math.sin(t * 3 + i), line: false }); } }
  function tent(x, base, w, h, c1, c2, k) {                             // полосатый шатёр с флажком
    const P = [[x - w / 2, base], [x - w / 2, base - h * 0.5], [x, base - h], [x + w / 2, base - h * 0.5], [x + w / 2, base]], p = shape(P, { wash: c1, washA: 1, w: 2.4, col: '#2a1a1a', key: 8710 + k });
    ctx.save(); ctx.clip(p.path); for (let i = -4; i < 5; i++) { ctx.fillStyle = c2; ctx.beginPath(); ctx.moveTo(x, base - h); ctx.lineTo(x + i * w / 8, base); ctx.lineTo(x + (i + 0.5) * w / 8, base); ctx.fill(); } ctx.restore(); shadeG(p.path, x + w / 2, 0, x - w / 4, 0, '#2a1020', 0.35);
    pencil([[x, base - h], [x, base - h - 60]], { w: 3, col: '#3a2a1a' }); poly([[x, base - h - 60], [x + 40, base - h - 48], [x, base - h - 36]], { wash: c2, washA: 1, w: 1.4 }); rect(x - 40, base - 120, 80, 120, { wash: '#2a1410', washA: 0.85, w: 1.6 }); glow(x, base - 60, 100, 'rgba(255,190,110,1)', 0.35);
  }
  function carousel(x, base, t) {                                       // карусель: купол, столбы, лошадки вверх-вниз
    push(x, base, 1); const r = t * 0.8; poly([[-220, -300], [0, -420], [220, -300]], { wash: '#c83a3a', washA: 1, w: 2.4, col: '#2a0a0a' }); rect(-230, -306, 460, 40, { wash: '#e8b53a', washA: 1, w: 2, col: '#5a3a08' });
    for (let i = 0; i < 9; i++) glow(-210 + i * 52, -286, 24, 'rgba(255,230,160,1)', 0.8);
    for (let i = 0; i < 6; i++) { const a = r + i / 6 * 6.283, px = Math.sin(a) * 200, front = Math.cos(a) > 0, y = -120 + Math.sin(t * 4 + i) * 20; pencil([[px, -266], [px, 0]], { w: 5, col: '#d6a842', a: front ? 1 : 0.5 });
      push(px, y, front ? 0.9 : 0.6); blob([[-50, 0], [-40, -30], [30, -34], [56, -60], [70, -40], [50, -10], [40, 20], [-40, 20]], { wash: i % 2 ? '#f4ead2' : '#e8b53a', washA: front ? 1 : 0.6, w: 1.8, col: '#2a1a0a' }); pop(); }
    ell(0, 0, 230, 30, { wash: '#7a4a2a', washA: 1, w: 2, col: '#2a1408' }); pop();
  }
  function bunting(t) { for (let row = 0; row < 2; row++) { const y0 = 520 + row * 120, P = []; for (let i = 0; i <= 20; i++) { const x = -400 + i * 100; P.push([x, y0 + Math.sin(i * 0.31) * 40 + Math.sin(t * 2 + i) * 4]); } pencil(P, { w: 2, col: '#2a1a0a', pass2: false });
    P.forEach(([x, y], i) => { if (i % 1 === 0) poly([[x, y], [x + 40, y + 2], [x + 20, y + 50]], { wash: ['#1a1a1a', '#f2c81e', '#d22a2a'][i % 3], washA: 1, w: 1.2, col: '#2a1a0a' }); }); } }
  function lamp(x, t) { pencil([[x, 1500], [x, 900]], { w: 10, col: '#1e1e22' }); const g = poly([[x - 34, 880], [x + 34, 880], [x + 24, 820], [x - 24, 820]], { wash: '#ffe6a0', washA: 1, w: 2.4, col: '#1e1e22' }); glow(x, 850, 200 * flick(t, x), 'rgba(255,210,120,1)', 0.6); poly([[x - 40, 822], [x, 790], [x + 40, 822]], { wash: '#1e1e22', washA: 1, w: 2 }); }
  function booth(t) {                                                   // будка FRITZ: деревянный ларёк, вывеска, корзины картошки, котёл
    push(620, 1460, 1); const fl = t > EV.fz_paris ? 0.6 + 0.4 * Math.sin(t * 20) : 0;
    const bd = rect(-360, -520, 720, 520, { wash: '#8a5a32', washA: 1, w: 3, col: '#2a1408', key: 8720 }); shadeG(bd.path, 360, 0, -360, 0, '#3a1a08', 0.5); for (let i = 0; i < 12; i++) pencil([[-360 + i * 60, -520], [-360 + i * 60, 0]], { w: 1.6, col: '#4a2a10', a: 0.6, pass2: false });
    rect(-300, -440, 600, 240, { wash: '#2a1408', washA: 0.95, w: 2 }); glow(0, -320, 260, 'rgba(255,170,80,1)', 0.5);
    const sg = rect(-340, -680, 680, 140, { wash: '#f4ead2', washA: 1, w: 3, col: '#2a1408', key: 8721 }); shadeG(sg.path, 0, -540, 0, -680, '#c8a878', 0.35); if (fl) glow(0, -610, 420, 'rgba(255,220,140,1)', 0.4 * fl);
    txt('FRITZ', 0, -632, 74, { font: 'Osw', col: '#d9482b' }); txt('POMMES DE TERRE FRITES', 0, -578, 30, { font: 'Osw', col: '#2b2622' }); txt("À L'INSTAR DE PARIS", 0, -548, 26, { font: 'Hand', col: '#2b2622' });
    for (let i = 0; i < 7; i++) poly([[-360 + i * 104, -540], [-256 + i * 104, -540], [-280 + i * 104, -500], [-336 + i * 104, -500]], { wash: i % 2 ? '#f4ead2' : '#d9482b', washA: 1, w: 1.4, col: '#2a1408' });
    const kz = ell(-150, -250, 110, 36, { wash: '#2a2420', washA: 1, w: 2.4, col: '#000' }); ell(-150, -256, 96, 26, { wash: FR.oil, washA: 1, w: 1.4, col: FR.oilD }); steam2(-150, -320, t, 4, 0.5, 72, 200);
    for (let k = 0; k < 2; k++) { const bx = 140 + k * 150; ell(bx, -200, 70, 20, { wash: '#8a6a3a', washA: 1, w: 2, col: '#2a1408' }); for (let q = 0; q < 6; q++) potato(bx - 40 + (q % 3) * 40, -222 - Math.floor(q / 3) * 26, 0.38, q, { key: 8730 + q + k * 9 }); }
    for (let q = 0; q < 3; q++) fryCone(-40 + q * 70, -200, 0.32, t, { kind: 'stripe', seed: 8740 + q, steam: false }); pop();
  }
  function krieger(t) {                                                 // Кригер-музыкант: тирольская шляпа, валторна, ноты
    const blow = t > EV.fz_bav - 0.1; human(170, 1480, 1.05, t, { body: '#3e5a2e', legs: '#5a3a1e', hair: '#8a5a2a', face: blow ? 'smile' : 'calm', armL: 'hold', armR: 'hold', seed: 101, beard: 'short', look: 0.4 });
    push(170, 1480 - 284 * 1.05, 1.05); ell(0, -30, 70, 12, { wash: '#2e4a24', washA: 1, w: 2, col: '#1a120a' }); blob([[-40, -30], [-34, -84], [0, -92], [34, -84], [40, -30]], { wash: '#3e5e30', washA: 1, w: 2, col: '#1a120a' }); pencil([[26, -60], [56, -120]], { w: 3, col: '#f4f0e6', pass2: false }); pop();
    push(230, 1290, 1); const hr = ell(40, 0, 56, 56, { wash: '#d6a842', washA: 0, w: 9, col: '#c99636' }); pencil([[-40, -40], [10, -10]], { w: 7, col: '#c99636' }); const bell = poly([[70, -40], [130, -90], [140, -20]], { wash: '#e8b53a', washA: 1, w: 2.4, col: '#5a3a08' }); metalG(bell.path, 110, -60, 60, '#fff2b0', '#e8b53a', '#8a5a08'); pop();
    if (blow) for (let i = 0; i < 4; i++) { const ph = ((t - EV.fz_bav) * 0.9 + i * 0.25) % 1; const x = 380 + ph * 220, y = 1230 - ph * 300 + Math.sin(ph * 12 + i) * 20; ell(x, y, 12, 9, { wash: '#2a1a0a', washA: 1 - ph, line: false }); pencil([[x + 10, y], [x + 10, y - 40]], { w: 3, col: '#2a1a0a', a: 1 - ph, pass2: false }); }
  }
  function queue(t) { const P = [[920, '#5a2a4a', 'merchant', '#1a1a1a'], [1060, '#2a4a6a', 'cap', '#3a3a3a'], [1190, '#7a5a3a', 'hood', '#e8dcc0']];
    P.forEach(([x, c, h, hc], i) => human(x, 1520, 0.98, t, { body: c, long: i === 2 ? 1 : 0, hat: h, hatCol: hc, hair: '#3a2a1a', face: t > EV.fz_paris + 0.2 ? 'shock' : 'smile', armR: t > EV.fz_paris + 0.2 && i === 0 ? 'up' : 'hold', seed: 110 + i, flip: -1, look: -0.6 })); }
  WORLD.fritz = (t, u, cat) => {
    lay(36, () => { sky(t); });
    lay(14, () => { for (let k = 0; k < 5; k++) tent(-260 + k * 380, 1180, 300, 380 + (k % 2) * 80, ['#e8dcc0', '#d9482b', '#f2c81e'][k % 3], ['#d9482b', '#f4ead2', '#2a4a8a'][k % 3], k); carousel(1050, 1180, t); haze('#e89a6a', 0.08); });
    lay(5, () => { bunting(t); for (const x of [-200, 1300]) lamp(x, t); for (let i = 0; i < 8; i++) { const x = -300 + i * 220; human(x, 1300, 0.7, t, { body: ['#4a3a5a', '#6a2a2a', '#2a4a3a', '#7a6a4a'][i % 4], hat: i % 2 ? 'cap' : null, hatCol: '#2a2a2a', face: 'smile', armR: i % 3 ? 'hold' : 'wave', seed: 120 + i, flip: i % 2 ? 1 : -1 }); } haze('#e89a6a', 0.06); });
    lay(1.3, () => { booth(t); });
    lay(1.05, () => { krieger(t); queue(t); });
    lay(1, () => { cat(); });
  };
  DIR.fritz = {
    outfit: 'bavarian', light: { side: 1, rim: '#ffc070' }, grade: ['#ff8a60', 0.1],
    act: () => [[S0.fritz, 'talk'], [EV.fz_bav, 'grin'], [EV.fz_paris - 0.2, 'wink'], [EV.fz_paris + 0.4, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 600, y: 1640, s: 1.0, look: t < EV.fz_bav ? [0.2, 0] : t < EV.fz_paris ? [-0.8, -0.2] : [0.3, -0.1], hand: [120, -300], prop: 'coneP', handF: t > EV.fz_paris - 0.2 ? [-110, -380] : [-110, -190], point: t > EV.fz_bav && t < EV.fz_paris ? 1 : undefined }),
    cam: () => [[S0.fritz, 560, 980, 0.04], [EV.fz_bel, 560, 1080, 0.12], [EV.fz_bav, 300, 1160, 0.24, 'x'], [EV.fz_paris - 0.2, 600, 1000, 0.18, 'x'], [S1.fritz, 600, 980, 0.22]],
    hud: t => {                                                          // карта-салфетка: Париж → Бельгия, пунктир маршрута
      const k = popK(t, S0.fritz + 0.4, 0.3), dr = clamp((t - S0.fritz - 0.6) / 1.2); if (k <= 0) return; push(870, 300, k, 0.05);
      ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.35)'; ctx.shadowBlur = 12; ctx.shadowOffsetY = 6; ctx.fillStyle = '#fbf6ea'; ctx.beginPath(); for (let i = 0; i <= 24; i++) { const a = i / 24 * 6.283, rr = 150 + Math.sin(i * 7) * 6; ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr * 0.9); } ctx.fill(); ctx.restore();
      for (let i = 0; i < 24; i++) { const a = i / 24 * 6.283; ell(Math.cos(a) * 140, Math.sin(a) * 126, 8, 8, { wash: '#efe2c4', washA: 1, line: false }); }
      blob([[-110, -60], [-40, -100], [60, -90], [110, -40], [90, 60], [10, 110], [-90, 80], [-120, 0]], { wash: '#e8dcc0', washA: 1, w: 1.4, col: '#9a8a6a' }); pencil([[-60, -50], [100, -30]], { w: 1.4, col: '#b8a888', a: 0.7, pass2: false });
      const P0 = [-30, 70], P1 = [30, -60], pts = []; for (let i = 0; i <= 20; i++) { const q = i / 20 * dr; pts.push([lerp(P0[0], P1[0], q) + Math.sin(q * 3) * 20, lerp(P0[1], P1[1], q)]); } if (pts.length > 1) dashL(pts, '#d9482b', 0.95, 4, 2);
      ell(P0[0], P0[1], 12, 10, { wash: '#1e3a8a', washA: 0.9, line: false }); txt('Париж', P0[0] + 10, P0[1] + 30, 30, { font: 'Hand', col: '#2b2622' }); if (dr >= 1) { ell(P1[0], P1[1], 14, 11, { wash: '#d9482b', washA: 0.8, line: false }); txt('Бельгия', P1[0], P1[1] - 26, 32, { font: 'Hand', col: '#2b2622' }); }
      txt('1844', 0, 108, 34, { font: 'Osw', col: '#e8b53a' }); pop(); }
  };
  // ---------------------------------------------------------------- переход: кадр сворачивается в бумажный кулёк и улетает вниз
  TRANS_IN.fritz = { a: 0.3, b: 0.35, runA: 1, fx(k, t, A, B) {
    drawBuf(B, 1.1 - 0.1 * k, 540, 960); const q = sm(k), top = lerp(-200, 900, q), tip = lerp(2200, 1500, q), half = lerp(1300, 60, q), fall = Math.pow(clamp((k - 0.7) / 0.3), 2) * 1200;
    if (k < 0.99) { const P = new Path2D(); P.moveTo(540 - half, top + fall); P.lineTo(540 + half, top + fall); P.lineTo(540, tip + fall); P.closePath();
      ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clip(P); ctx.translate(540, 960 + fall); ctx.rotate(q * 1.2); ctx.scale(1 - q * 0.6, 1 - q * 0.6); ctx.translate(-540, -960); ctx.drawImage(A, 0, 0); ctx.restore();
      scr(() => { pencil([[540 - half, top + fall], [540, tip + fall], [540 + half, top + fall]], { w: 6, col: '#3a2410', pass2: false }); for (let i = 1; i < 6; i++) pencil([[540 - half + i * half / 3, top + fall], [540, tip + fall]], { w: 3, col: '#c8a878', a: 0.6 * q, pass2: false }); }); }
  } };
})();
