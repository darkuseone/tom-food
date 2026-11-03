/* 016 — `name`: «Французы зовут её „земляным яблоком“. А „пюре“ по-французски — „протёртое“.» Французский рынок XVIII в. на площади: фахверковые дома,
   полосатые навесы, лотки с яблоками, капустой, сырами, бочки, весы, торговка в чепце, покупатель с корзиной, голуби на брусчатке; на лотке Тома — корзины
   картошки и табличка POMMES DE TERRE. Том-торговец в рубахе с фартуком. По словам: «земляным» — из-под брусчатки «прорастает» картофельный куст с клубнями-
   корнями, рядом на ветке яблоко: схема ЯБЛОКО НА ДЕРЕВЕ / ЯБЛОКО В ЗЕМЛЕ; «яблоком» — табличка POMME DE TERRE = ЗЕМЛЯНОЕ ЯБЛОКО; «пюре» — Том протирает
   картошку через сито-тамис, снизу выползает гладкое пюре; «протёртое» — ценник PURÉE = ПРОТЁРТОЕ. Переход В сцену: картофелечистка снимает с кадра
   спиральную стружку-кожуру. */
(() => {
  EV.nm_earth = wtw('s2', '«земляным');
  EV.nm_apple = wtw('s2', 'яблоком».');
  EV.nm_pure = wtw('s2', '«пюре»');
  EV.nm_rub = wtw('s2', '«протёртое».');
  KEYW.push('яблоком».', '«протёртое».');

  function square(t) {                                                  // небо, фахверковые дома, навесы, голуби
    vgrad(-600, 900, ['#7ab0e0', '#d8e8f4']); for (const [x, w, c] of [[-300, 300, '#f0e0c0'], [20, 260, '#e8d0a8'], [300, 280, '#f4e8d0'], [600, 300, '#e8d8b8'], [920, 280, '#f0dcc0'], [1220, 300, '#e8d0a8']]) { push(x, 900, 1); rect(0, -600, w, 600, { wash: c, washA: 1, w: 2, col: '#5a3a1a' });
      for (let i = 0; i < 4; i++) pencil([[0, -600 + i * 150], [w, -600 + i * 150]], { w: 8, col: '#5a3a1a', pass2: false }); for (let i = 0; i < 4; i++) pencil([[i * w / 3, -600], [i * w / 3, 0]], { w: 8, col: '#5a3a1a', pass2: false }); pencil([[0, -450], [w / 3, -300]], { w: 6, col: '#5a3a1a', pass2: false }); pencil([[w, -450], [w * 2 / 3, -300]], { w: 6, col: '#5a3a1a', pass2: false });
      for (let i = 0; i < 2; i++) rect(30 + i * (w - 100), -560, 60, 80, { wash: '#4a6a8a', washA: 1, w: 1.4 }); shape([[-20, -600], [w / 2, -760], [w + 20, -600]], { wash: '#8a3a2a', washA: 1, w: 2, col: '#3a1408' }); pop(); }
    for (let i = 0; i < 5; i++) { const x = -260 + i * 360; push(x, 880, 1); shape([[-160, 0], [160, 0], [140, 70], [-140, 70]], { wash: '#f4f0e6', washA: 1, w: 1.6, col: '#5a4a3a' }); for (let k = 0; k < 8; k++) if (k % 2) rect(-160 + k * 40, 0, 40, 70, { wash: ['#c8221a', '#2a5ab0', '#2a8a3a'][i % 3], washA: 0.9, line: false }); pop(); }
  }
  function market(t) {                                                  // лотки: яблоки, капуста, сыры, торговка, покупатель, весы, голуби
    for (const [x, kind] of [[-120, 0], [1180, 1]]) { push(x, 1200, 1); rect(-150, -40, 300, 40, { wash: '#8a5a2a', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 9; i++) { const px = -120 + (i % 5) * 60 + (i > 4 ? 30 : 0), py = -54 - (i > 4 ? 30 : 0); if (kind) { ell(px, py, 34, 22, { wash: '#f4d870', washA: 1, w: 1.6, col: '#8a6a10' }); } else { ell(px, py, 24, 22, { wash: i % 3 ? '#d8282a' : '#8ac83a', washA: 1, w: 1.6, col: '#5a1a0a' }); pencil([[px, py - 20], [px + 4, py - 30]], { w: 2, col: '#4a2a0a', pass2: false }); } } pop(); }
    human(240, 1300, 1.0, t, { body: '#8a3a4a', legs: '#3a2a3a', hair: '#8a5a2a', face: t > EV.nm_apple ? 'grin' : 'smile', armL: 'hold', armR: t > EV.nm_earth ? 'point' : 'hold', look: 0.5, seed: 16300, long: 1 }); kerchief20(240, 1300, 1.0, '#f4f0e6');
    human(960, 1300, 1.0, t, { body: '#4a5a3a', legs: '#5a4a3a', hair: '#3a2010', face: t > EV.nm_rub ? 'shock' : 'calm', armL: 'hold', armR: 'hold', look: -0.5, seed: 16301, flip: -1 }); hat20(960, 1300, 1.0, 'fedora', '#3a2a1a', -1); push(960 - 80, 1300 - 120, 1); blob([[-40, 0], [-46, -50], [46, -50], [40, 0]], { wash: '#c8a868', washA: 1, w: 1.6, col: '#5a3a1a' }); pop();
    for (let i = 0; i < 4; i++) { const x = 400 + i * 120 + Math.sin(t * 2 + i) * 10, hop = Math.abs(Math.sin(t * 6 + i)) * 6; push(x, 1330 - hop, 0.8, 0, i % 2 ? 1 : -1); ell(0, -20, 26, 16, { wash: '#8a8a9a', washA: 1, w: 1.4, col: '#3a3a4a' }); ell(20, -36, 10, 10, { wash: '#7a7a8a', washA: 1, w: 1.2 }); poly([[28, -36], [38, -34], [28, -32]], { wash: '#e8a030', washA: 1, line: false }); pop(); }
  }
  function stall(t) {                                                   // лоток Тома: корзины картошки, табличка, схема «яблоко на дереве / в земле», сито, пюре
    const tb = rect(-400, 1440, 1900, 800, { wash: '#8a5a2a', washA: 1, w: 3, col: '#2a1408', key: 16310 }); shadeG(tb.path, 0, 1900, 0, 1440, '#3a1a08', 0.45); for (let i = 0; i < 6; i++) pencil([[-400, 1480 + i * 70], [1500, 1484 + i * 70]], { w: 2, col: '#4a2410', a: 0.5, pass2: false });
    for (const x of [140, 980]) { push(x, 1500, 1); const b = blob([[-110, 0], [-120, -90], [120, -90], [110, 0]], { wash: '#c8a058', washA: 1, w: 2, col: '#5a3a10' }); hatch(b.path, b.bb, { gap: 10, a: 0.5, col: '#8a6020', ang: 0.8 }); hatch(b.path, b.bb, { gap: 10, a: 0.5, col: '#8a6020', ang: -0.8 }); for (let i = 0; i < 6; i++) potato(-70 + (i % 3) * 70, -96 - Math.floor(i / 3) * 30, 0.5, i, { key: 16311 + i + x, dirt: 1 }); pop(); }
    push(560, 1210, 1, -0.03); rect(-170, -40, 340, 70, { wash: '#f4ecd8', washA: 1, w: 3, col: '#5a3a1a' }); txt('POMMES DE TERRE', 0, 8, 30, { font: 'Osw', col: '#3a1a08' }); pop();
    if (t > EV.nm_earth - 0.1) { const k = popK(t, EV.nm_earth - 0.1, 0.45); push(560, 940, k); rect(-260, -170, 520, 300, { wash: '#f8f2e0', washA: 1, w: 3, col: '#5a3a1a' }); pencil([[-250, 30], [250, 30]], { w: 4, col: '#6a4a2a', pass2: false }); rect(-250, 30, 500, 90, { wash: '#a8845a', washA: 0.6, line: false });
      pencil(spline([[-130, 30], [-130, -60], [-110, -120]], false, 5), { w: 10, col: '#6a4a2a' }); for (let i = 0; i < 5; i++) blob([[-200 + i * 30, -110], [-180 + i * 30, -160], [-150 + i * 30, -140], [-170 + i * 30, -100]], { wash: '#4a8a3a', washA: 1, w: 1.2 }); ell(-90, -90, 22, 20, { wash: '#d8282a', washA: 1, w: 1.6 });
      for (let i = 0; i < 4; i++) blob([[110 + i * 18, 30], [96 + i * 22, -20], [120 + i * 18, -40], [130 + i * 16, 30]], { wash: '#4a8a3a', washA: 1, w: 1.2 }); potFlower(140, -50, 0.7); for (let i = 0; i < 3; i++) { pencil([[140, 30], [90 + i * 50, 70]], { w: 2, col: '#8a6a3a', pass2: false }); potato(90 + i * 50, 80, 0.32, i, { key: 16320 + i }); } txt('🍎', -90, -138, 1, { a: 0 }); pop(); }
    if (t > EV.nm_apple) { push(560, 1230, popK(t, EV.nm_apple, 0.4)); rect(-280, -44, 560, 88, { wash: '#1a1a20', washA: 1, w: 4, col: '#c8a050' }); txt('ЗЕМЛЯНОЕ ЯБЛОКО', 0, 16, 46, { font: 'Osw', col: '#ffe070' }); pop(); }
    if (t > EV.nm_pure - 0.2) { const rub = Math.sin(t * 10) * 30, k = clamp((t - EV.nm_pure + 0.2) / 1.0); push(760, 1440, 1); ell(0, 40, 120, 20, { wash: '#f4f0e6', washA: 1, w: 2, col: '#4a4a52' }); mashMound(0, 30, 90 * k + 10, 40 * k + 6, t, { butter: false, key: 16330 });
      const s = ell(0, -100, 110, 26, { wash: '#b8bcc4', washA: 0.9, w: 3, col: '#3a3e44' }); hatch(s.path, s.bb, { gap: 6, a: 0.7, col: '#5a5e64', ang: 0.8 }); hatch(s.path, s.bb, { gap: 6, a: 0.7, col: '#5a5e64', ang: -0.8 }); potato(rub * 0.3, -120, 0.45, 0.3, { key: 16331, half: 1 });
      for (let i = 0; i < 6; i++) pencil([[-60 + i * 24, -80], [-60 + i * 24, -80 + 40 * k]], { w: 6, col: PU.mash, pass2: false }); pop(); }
    if (t > EV.nm_rub) bubbleTag('PURÉE = ПРОТЁРТОЕ', 600, 1180, t, EV.nm_rub, '#2a5ab0', 40, -0.04);
  }
  function front(t) { push(-40, 1960, 1.6); ell(0, -20, 90, 30, { wash: '#c8a058', washA: 1, w: 2, col: '#5a3a10' }); for (let i = 0; i < 4; i++) ell(-50 + i * 34, -40, 22, 20, { wash: '#d8282a', washA: 1, w: 1.4 }); pop(); push(1180, 1990, 1.6); for (let i = 0; i < 3; i++) potato(-60 + i * 60, -30, 0.7, i, { key: 16340 + i, dirt: 1 }); pop();
    motes(20, [0, 300, 1100, 1700], '#fffbe0', t, 16345, { sp: 8, sz: 4, a: 0.4, wob: 2 }); rays(900, -200, 2.2, 0.4, 1800, 'rgba(255,248,220,1)', 0.12, 5, t); }
  WORLD.name = (t, u, cat) => {
    lay(14, () => { square(t); haze('#e8e0d0', 0.08); });
    lay(2.8, () => { market(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { stall(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.name = {
    outfit: 'selA', light: { side: 1, rim: '#fff0c8' }, grade: ['#f0d8a0', 0.05],
    act: () => [[S0.name, 'talk'], [EV.nm_earth, 'smug'], [EV.nm_apple, 'grin'], [EV.nm_pure, 'proud'], [EV.nm_rub, 'wink']],
    pose: (t, u, b) => { const rub = t > EV.nm_pure - 0.2; return Object.assign(b, { x: 520, y: 1700, s: 1.0, flip: 1, look: rub ? [0.7, 0.6] : t > EV.nm_earth ? [0.1, -0.8] : [0.4, 0.2], hand: rub ? [240 + Math.sin(t * 10) * 26, -270] : [180, -300], handF: t > EV.nm_earth && !rub ? [-140, -420] : [-90, -220], prop: rub ? undefined : 'potatoP', propAng: 0.2, point: t > EV.nm_earth && !rub ? 1 : undefined }); },
    cam: () => [[S0.name, 560, 900, 0.06], [EV.nm_earth, 560, 1150, 0.12, 'x'], [EV.nm_apple, 560, 1120, 0.12], [EV.nm_pure, 680, 1320, 0.22], [S1.name, 680, 1320, 0.26]]
  };
  // ---------------------------------------------------------------- переход: картофелечистка снимает с кадра спиральную кожуру
  TRANS_IN.name = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const e = sm(k), N = 6, P = new Path2D(); for (let i = 0; i < N; i++) { const p = clamp(e * 1.5 - i * 0.08); const y = i * H / N; P.rect(W * p, y, W * (1 - p), H / N + 1); } inPath(P, () => drawBuf(A, 1, 540, 960));
    scr(() => { for (let i = 0; i < N; i++) { const p = clamp(e * 1.5 - i * 0.08); if (p <= 0 || p >= 1) continue; const x = W * p, y = i * H / N; ctx.save(); ctx.fillStyle = '#c8a060'; ctx.beginPath(); ctx.ellipse(x - 30, y + H / N / 2, 40, H / N / 2, -0.3, 0, 6.283); ctx.fill(); ctx.strokeStyle = '#5a3a14'; ctx.lineWidth = 3; ctx.stroke(); ctx.fillStyle = '#b8bcc4'; ctx.fillRect(x - 6, y + 20, 14, H / N - 40); ctx.restore(); } });
  } };
})();
