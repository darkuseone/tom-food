/* 015 — `law`: «С 2014-го — закон: четыре цвета бирок. „Пата негра“ — только с чёрной!» Сушильня-бодега в Хабуго: кирпичные арки, бесконечные ряды
   окороков под потолком, деревянные стеллажи, окошко-продух с горным светом, мастер-инспектор в белом халате простукивает окорок костяной иглой, весы, ящики.
   Том-инспектор в твидовом пиджаке с фартуком и папкой. По словам: «закон» — на стол шлёпается указ с гербовой печатью BOE и штампом; «четыре цвета
   бирок» — четыре бирки выскакивают в ряд (чёрная, красная, зелёная, белая) с подписями; «Пата негра» — крупно копыто окорока, табличка «ЧЁРНОЕ КОПЫТО»;
   «только с чёрной!» — три бирки гаснут, чёрная сияет, ✓. Переход В сцену: бирка-пломба защёлкивается на кадре и тянет его вниз, открывая новую сцену. */
(() => {
  EV.lw_law = wtw('s5', 'закон:');
  EV.lw_tags = wtw('s5', 'четыре');
  EV.lw_pata = wtw('s5', '«Пата');
  EV.lw_only = wtw('s5', 'только');
  KEYW.push('закон:', 'чёрной!');
  const TAGS = [['black', 'БЕЛЛОТА 100%'], ['red', 'БЕЛЛОТА'], ['green', 'СЕБО ДЕ КАМПО'], ['white', 'СЕБО']];

  function bodega(t) {                                                  // кирпичные арки, ряды окороков, продух со светом
    vgrad(-600, 1500, ['#2a1a12', '#4a2e1e', '#6a4428']); for (let y = -500; y < 1300; y += 50) for (let x = -400 + ((y / 50) % 2) * 50; x < 1600; x += 100) rect(x, y, 96, 46, { wash: '#8a4a2a', washA: 0.5, w: 1, col: '#3a1a0a' });
    for (let i = 0; i < 3; i++) { const x = -60 + i * 600; pencil(spline([[x - 300, 1300], [x - 300, 300], [x, -40], [x + 300, 300], [x + 300, 1300]], false, 10), { w: 40, col: '#5a2e18' }); }
    push(540, 260, 1); const w = rect(-70, -90, 140, 180, { wash: '#f4e8c8', washA: 1, w: 6, col: '#2a1408' }); for (let i = 0; i < 4; i++) pencil([[-70 + i * 46, -90], [-70 + i * 46, 90]], { w: 5, col: '#2a1408', pass2: false }); pop(); rays(540, 260, 1.6, 0.35, 1400, 'rgba(255,240,200,1)', 0.18, 4, t);
    for (let r = 0; r < 3; r++) { const y = -60 + r * 260, sc = 0.32 + r * 0.06; rect(-400, y - 20, 2000, 12, { wash: '#3a2410', washA: 1, w: 1.4 }); for (let i = 0; i < 16; i++) { const x = -380 + i * (110 + r * 20), sw = Math.sin(t * 1.2 + i + r) * 0.03; if (x > 1500) break; push(x, y, 1, sw); pencil([[0, -10], [0, 40]], { w: 2, col: '#c8a868', pass2: false }); jamonLeg(-30 * sc / 0.4, 230 * sc / 0.4, sc, -0.55, { key: 15600 + r * 20 + i, tag: TAGS[(i + r) % 4][0] }); pop(); } }
  }
  function staff(t) {                                                   // мастер в халате с иглой, стеллаж с окороками, весы
    human(140, 1310, 1.05, t, { body: '#f4f4ee', bodyD: '#b8b8b0', legs: '#3a3a4a', hair: '#9a9a9a', face: t > EV.lw_only ? 'grin' : 'calm', armL: 'hold', armR: 'up', look: 0.4, seed: 15610 }); stache(140, 1310, 1.05);
    push(140 + 70, 1310 - 330, 1); pencil([[0, 0], [30, -60]], { w: 4, col: '#e8dcc0', pass2: false }); pop();
    push(1040, 1320, 1); for (let i = 0; i < 3; i++) rect(-160, -100 - i * 110, 320, 12, { wash: '#6a4424', washA: 1, w: 1.6 }); for (const sd of [-1, 1]) rect(sd * 160 - 6, -360, 12, 360, { wash: '#5a3414', washA: 1, w: 1.4 }); for (let i = 0; i < 3; i++) for (let k = 0; k < 2; k++) jamonLeg(-60 + k * 120, -140 - i * 110, 0.22, -0.2, { key: 15611 + i * 2 + k }); pop();
  }
  function desk(t) {                                                    // стол: указ BOE с печатью, бирки в ряд, копыто крупно, папки, лампа
    const tb = rect(-400, 1440, 1900, 800, { wash: '#6a4428', washA: 1, w: 3, col: '#1a0a04', key: 15620 }); shadeG(tb.path, 0, 1900, 0, 1440, '#2a1408', 0.45); for (let i = 0; i < 6; i++) pencil([[-400, 1480 + i * 70], [1500, 1484 + i * 70]], { w: 2, col: '#3a1a08', a: 0.5, pass2: false });
    if (t > EV.lw_law - 0.2) { const k = popK(t, EV.lw_law - 0.2, 0.35); push(1000, 1460, k, -0.06); rect(-130, -170, 260, 170, { wash: '#f8f4ea', washA: 1, w: 2, col: '#5a5a5a' }); txt('BOE', -70, -138, 26, { font: 'Osw', col: '#1a1a1a' }); txt('R.D. 4/2014', 30, -138, 18, { font: 'Osw', col: '#3a3a3a' }); for (let i = 0; i < 5; i++) pencil([[-110, -110 + i * 18], [110, -110 + i * 18]], { w: 2, col: '#8a8a8a', a: 0.6, pass2: false });
      ell(70, -36, 34, 34, { wash: '#c8221a', washA: 0.85, w: 2, col: '#6a0a0a' }); txt('✓', 70, -24, 30, { col: '#ffffff' }); pop(); }
    if (t > EV.lw_tags - 0.1) TAGS.forEach(([c, lbl], i) => { const t0 = EV.lw_tags - 0.1 + i * 0.15; if (t < t0) return; const dim = t > EV.lw_only && i > 0; push(110 + i * 125, 1250, popK(t, t0, 0.35)); sealTag(0, 0, 1, c, '', (i - 1.5) * 0.06); if (dim) { ctx.save(); ctx.globalAlpha = 0.6; rect(-50, -40, 100, 130, { wash: '#1a1a1a', washA: 0.55, line: false }); ctx.restore(); pencil([[-40, -30], [40, 80]], { w: 6, col: '#c8221a', pass2: false }); } pop();
      push(110 + i * 125, 1420, 1); rect(-60, -22, 120, 34, { wash: '#f4ecd8', washA: 1, w: 1.4, col: '#5a3a1a' }); txt(lbl, 0, 2, lbl.length > 10 ? 13 : 16, { font: 'Osw', col: '#3a1a08' }); pop(); });
    if (t > EV.lw_only) { glow(110, 1290, 140, 'rgba(255,230,140,1)', 0.6); push(110, 1110, popK(t, EV.lw_only, 0.35)); txt('✓', 0, 0, 80, { font: 'Osw', col: '#3aa83a' }); pop(); }
    if (t > EV.lw_pata - 0.1) { push(840, 900, popK(t, EV.lw_pata - 0.1, 0.4)); ell(0, 0, 150, 150, { wash: '#f4ecd8', washA: 1, w: 4, col: '#c8a050' }); ctx.save(); ctx.beginPath(); ctx.arc(0, 0, 146, 0, 6.283); ctx.clip(); vgrad(-150, 150, ['#e8d8b0', '#c8a878']); jamonLeg(4, 400, 1.4, -0.55, { key: 15630, tag: 'black' }); ctx.restore(); pop();
      push(840, 1090, popK(t, EV.lw_pata, 0.4)); rect(-160, -30, 320, 60, { wash: '#1a1a1a', washA: 1, w: 3, col: '#c8a050' }); txt('ЧЁРНОЕ КОПЫТО', 0, 12, 32, { font: 'Osw', col: '#ffe070' }); pop(); }
    push(1180, 1440, 1); pencil([[0, 0], [0, -200], [-80, -260]], { w: 6, col: '#2a2a2a' }); poly([[-130, -250], [-40, -300], [-20, -240]], { wash: '#2a4a3a', washA: 1, w: 2 }); glow(-80, -230, 140, 'rgba(255,230,160,1)', 0.4); pop();
  }
  function front(t) { push(-40, 1960, 1.6); for (let i = 0; i < 3; i++) rect(-90 + i * 14, -60 - i * 26, 180, 24, { wash: ['#c8a050', '#5a7a9a', '#a8443a'][i], washA: 1, w: 1.6, col: '#2a1a08' }); pop(); push(1180, 1980, 1.5, -0.2); hamKnife(-140, -40, 0.9, 0); pop();
    motes(30, [100, 200, 1000, 1700], '#fff0c8', t, 15640, { sp: 6, sz: 4, a: 0.5, wob: 2 }); }
  WORLD.law = (t, u, cat) => {
    lay(14, () => { bodega(t); haze('#6a4428', 0.12); });
    lay(2.8, () => { staff(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { desk(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.law = {
    outfit: 'econA', light: { side: 1, rim: '#fff0c8' }, grade: ['#d8a070', 0.08],
    act: () => [[S0.law, 'talk'], [EV.lw_law, 'proud'], [EV.lw_tags, 'smug'], [EV.lw_pata, 'awe'], [EV.lw_only, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 720, y: 1700, s: 1.0, flip: -1, look: t > EV.lw_only ? [0.2, 0] : t > EV.lw_pata ? [0.7, -0.6] : t > EV.lw_tags ? [-0.3, 0.6] : [-0.6, 0.5], hand: [200, -300], handF: t > EV.lw_tags && t < EV.lw_pata ? [-160, -380] : [-90, -220], prop: 'jamonP', propAng: -0.2, point: t > EV.lw_tags && t < EV.lw_pata ? 1 : undefined }),
    cam: () => [[S0.law, 560, 900, 0.06], [EV.lw_law, 800, 1300, 0.2, 'x'], [EV.lw_tags, 400, 1300, 0.2], [EV.lw_pata, 760, 1100, 0.2], [EV.lw_only, 560, 1260, 0.22], [S1.law, 560, 1260, 0.26]]
  };
  // ---------------------------------------------------------------- переход: бирка-хомут защёлкивается и утягивает кадр вниз
  TRANS_IN.law = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k); drawBuf(B, 1, 540, 960); const dy = e < 0.3 ? 0 : sm((e - 0.3) / 0.7) * H * 1.05; ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, dy); ctx.drawImage(A, 0, 0); ctx.restore();
    scr(() => { push(540, dy + lerp(-300, 60, clamp(e / 0.3)), 2.4); sealTag(0, 0, 1, 'black', 'JAMÓN'); pop(); });
  } };
})();
