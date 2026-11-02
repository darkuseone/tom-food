/* 013 — `soup`: «Но в 1830-х её разлили по тарелкам — и вышел густой суп!» Господская кухня 1830-х: медная утварь стеной, большая плита с котлом, окно с
   заснеженным городом, раскрытая поваренная книга с датой 1834, кухарки и поварёнок. Повар в колпаке выливает в котёл ведро бульона — селянка превращается
   в суп. Том в сюртуке и фартуке разливает половником по ряду тарелок. По словам: «1830-х» — книга с датой; «разлили» — бульон из ведра льётся в котёл;
   «тарелкам» — тарелки на столе наполняются одна за другой; «суп!» — облако пара, ценник «СУП!». Переход В сцену: волна оранжевого бульона заливает кадр снизу. */
(() => {
  EV.sp_year = wtw('s3', '1830-х');
  EV.sp_pour = wtw('s3', 'разлили');
  EV.sp_plates = wtw('s3', 'тарелкам');
  EV.sp_soup = wtw('s3', 'суп!');
  SHAKES.push([EV.sp_soup + 0.05, 0.18, 8]);
  KEYW.push('тарелкам', 'суп!');

  function kitchen(t) {                                                 // кирпичные своды, медь стеной, окно со снежным городом, полки с горшками
    vgrad(-600, 1500, ['#3a2214', '#6a3e22', '#8a5a34']);
    for (let y = -500; y < 1300; y += 50) for (let x = -400; x < 1600; x += 100) rect(x + ((y / 50) % 2) * 50, y, 98, 48, { wash: '#a85a3a', washA: 0.85, w: 1, col: '#3a1408', a: 0.5 });
    for (const x of [-100, 540, 1180]) pencil(spline([[x - 360, 100], [x - 240, -300], [x, -380], [x + 240, -300], [x + 360, 100]], false, 10), { w: 30, col: '#7a3a22' });
    push(540, 300, 1); const w = rect(-150, -200, 300, 320, { wash: '#a8c0d8', washA: 1, w: 8, col: '#3a1a08', key: 13400 }); ctx.save(); ctx.clip(w.path); vgrad(-200, 120, ['#8aa8c8', '#d8e4f0']); for (let i = 0; i < 5; i++) { const x = -160 + i * 80; rect(x, -40 - (i % 2) * 40, 70, 200, { wash: '#c8c0b8', washA: 1, w: 1.2 }); windows(x + 8, -30 - (i % 2) * 40, 54, 120, 2, 3, 13401 + i, 0.6, '#ffd890', '#6a7a8a', 0.9); } poly([[60, -40], [100, -160], [140, -40]], { wash: '#d6a842', washA: 1, w: 1.4 }); motes(24, [-150, -200, 150, 120], '#ffffff', t, 13402, { sp: 30, sz: 3, a: 0.8, wob: 1 }); ctx.restore(); pencil([[0, -200], [0, 120]], { w: 6, col: '#3a1a08' }); pop();
    for (let i = 0; i < 9; i++) { const x = -330 + i * 100, y = 140 + (i % 2) * 40, R = 40 + (i % 3) * 10; pencil([[x, 80], [x, y - R]], { w: 2, col: '#3a2a1a', pass2: false }); const p = ell(x, y, R, R, { wash: '#c8743a', washA: 1, w: 2, col: '#3a1a08' }); metalG(p.path, x - 12, y - 12, R + 8, '#ffc890', '#c8743a', '#5a2a0a'); pencil([[x + R, y], [x + R + 50, y - 10]], { w: 6, col: '#8a4a1a', pass2: false }); }
    for (let i = 0; i < 6; i++) { const x = 760 + i * 80; rect(x - 30, 520, 60, 80, { wash: ['#c88a3a', '#3a5a8a', '#e8dcc0'][i % 3], washA: 1, w: 1.6, col: '#2a1408' }); } rect(720, 600, 520, 16, { wash: '#4a2a10', washA: 1, w: 2 });
  }
  function hearth(t) {                                                  // плита с котлом, повар с ведром бульона, кухарки
    push(240, 1280, 1); const s = rect(-260, -280, 520, 280, { wash: '#2a2a2e', washA: 1, w: 2.4, col: '#0a0a0a', key: 13410 }); metalG(s.path, -80, -200, 300, '#5a5a62', '#2a2a2e', '#0a0a0a'); for (let i = 0; i < 2; i++) { rect(-200 + i * 260, -180, 140, 100, { wash: '#1a1a1e', washA: 1, w: 2 }); glow(-130 + i * 260, -130, 70, 'rgba(255,120,40,1)', 0.55); }
    const kt = shape([[-140, -280], [-150, -460], [150, -460], [140, -280]], { wash: '#c8743a', washA: 1, w: 2.6, col: '#3a1a08' }); metalG(kt.path, -40, -380, 180, '#ffc890', '#c8743a', '#5a2a0a'); ell(0, -460, 150, 24, { wash: '#4a2a14', washA: 1, w: 2 });
    const fill = sm(clamp((t - EV.sp_pour) / 1.0)); ell(0, -456, 138, 18, { wash: lerpC('#c8b070', SL.broth, fill), washA: 1, line: false }); for (let i = 0; i < 4; i++) { const q = (t * 0.45 + i / 4) % 1; pencil(spline([[-60 + i * 40, -470], [-70 + i * 40 + Math.sin(q * 6 + i) * 24, -470 - q * 200], [-60 + i * 40, -470 - q * 380]], false, 5), { w: 12, col: '#ffffff', a: 0.3 * (1 - q) * (0.5 + fill), pass2: false }); } pop();
    const pr = t > EV.sp_pour - 0.3 && t < EV.sp_plates + 0.5; human(560, 1290, 1.15, t, { body: '#f8f6f0', legs: '#2a2a2a', hair: '#3a2a1a', beard: 'short', face: pr ? 'grin' : 'calm', armL: pr ? 'up' : 'hold', armR: pr ? 'up' : 'hold', look: -0.7, seed: 13411, flip: -1 }); hat20(560, 1290, 1.15, 'chef');
    if (pr) { push(420, 860, 1, -0.9); const b = shape([[-60, 0], [-50, -110], [50, -110], [60, 0]], { wash: '#8a8e94', washA: 1, w: 2.4, col: '#2a2a2a' }); pop(); pencil(spline([[380, 820], [330, 840], [270, 900], [240, 980]], false, 6), { w: 24, col: SL.broth, a: 0.9, pass2: false }); glow(260, 960, 60, 'rgba(255,180,80,1)', 0.4); }
    human(-120, 1280, 1.05, t, { body: '#3a5a8a', legs: '#2a2a3a', hair: '#8a4a2a', face: t > EV.sp_soup ? 'grin' : 'smile', armL: 'hold', armR: 'hold', look: 0.6, seed: 13412, long: 1 }); kerchief20(-120, 1280, 1.05, '#f4ecd8');
  }
  function table(t) {                                                   // стол с рядом тарелок: наполняются по слову; раскрытая книга 1834
    const tb = rect(-400, 1440, 1900, 800, { wash: '#7a4a24', washA: 1, w: 3, col: '#1a0a04', key: 13420 }); shadeG(tb.path, 0, 1900, 0, 1440, '#3a1a08', 0.45); for (let i = 0; i < 8; i++) pencil([[-400, 1470 + i * 60], [1500, 1474 + i * 60]], { w: 2, col: '#4a2a10', a: 0.5, pass2: false });
    for (let i = 0; i < 4; i++) { const x = 120 + i * 200, f = clamp((t - EV.sp_plates - i * 0.22) / 0.3); push(x, 1500, 1); ell(0, 0, 90, 28, { wash: '#f8f6f0', washA: 1, w: 2, col: '#4a4a52' }); pencil(ellPts(0, 0, 84, 24, 0, 1, 30).slice(2, 13), { w: 3, col: '#2a5ab8', a: 0.6, pass2: false }); ell(0, 0, 60, 16, { wash: '#efece4', washA: 1, line: false });
      if (f > 0) { ell(0, 0, 58 * f, 15 * f, { wash: SL.broth, washA: 1, w: 1, col: SL.brothD }); for (let k = 0; k < 4; k++) ell(-30 + k * 20, -2 + (k % 2) * 6, 4 * f, 2 * f, { wash: SL.oil, washA: 0.8, line: false }); if (f > 0.9) for (let k = 0; k < 2; k++) { const q = (t * 0.5 + k / 2 + i * 0.3) % 1; pencil(spline([[-10 + k * 20, -10], [-14 + k * 20 + Math.sin(q * 6) * 10, -10 - q * 70], [-10 + k * 20, -10 - q * 130]], false, 5), { w: 6, col: '#ffffff', a: 0.3 * (1 - q), pass2: false }); } } pop(); }
    const op = sm(clamp((t - EV.sp_year + 0.3) / 0.5)); push(760, 1700, 1, -0.06); poly([[-150, 0], [0, 6], [0, lerp(6, -150, op)], [-140, lerp(0, -140, op)]], { wash: '#efe2c0', washA: 1, w: 2, col: '#6a5232' }); poly([[0, 6], [150, 0], [140, lerp(0, -140, op)], [0, lerp(6, -150, op)]], { wash: '#f2e6c8', washA: 1, w: 2, col: '#6a5232' });
      if (op > 0.6) { txt('Г. Степанов', -72, -110, 24, { font: 'Hand', col: '#3a1a08' }); txt('1834', -72, -76, 34, { font: 'Hand', col: '#a8221a' }); txt('селянка —', 72, -110, 22, { font: 'Hand', col: '#3a1a08' }); txt('въ бульонѣ', 72, -82, 22, { font: 'Hand', col: '#3a1a08' }); } pop();
    if (t > EV.sp_soup) bubbleTag('СУП!', 520, 1260, t, EV.sp_soup, '#d8642a', 64, -0.05);
  }
  function front(t) {                                                   // передний план: медный ковш на крюке, мешок муки, пар
    push(-80, 1900, 1.5); const sk = shape(spline([[-100, 0], [-110, -140], [-80, -210], [80, -210], [110, -140], [100, 0]], true, 6), { wash: '#e8dcc0', washA: 1, w: 2.4, col: '#5a4a2a' }); txt('МУКА', 0, -100, 34, { font: 'Osw', col: '#7a3a1a' }); pop();
    push(1180, 300, 1.4); pencil([[0, -500], [0, 0]], { w: 4, col: '#3a3a3a', pass2: false }); const l = ell(0, 60, 70, 60, { wash: '#c8743a', washA: 1, w: 2.4, col: '#3a1a08' }); metalG(l.path, -20, 40, 80, '#ffc890', '#c8743a', '#5a2a0a'); pop();
    if (t > EV.sp_soup) { const k = clamp((t - EV.sp_soup) / 0.8); glow(520, 1300, 600 * k, 'rgba(255,255,255,1)', 0.3 * (1 - k)); }
    motes(30, [0, 500, 1080, 1700], '#fff0d8', t, 13430, { sp: 10, sz: 5, a: 0.4, wob: 2 });
  }
  WORLD.soup = (t, u, cat) => {
    lay(12, () => { kitchen(t); haze('#ffd8a0', 0.06); });
    lay(2.6, () => { hearth(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { table(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.soup = {
    outfit: 'victorianA', light: { side: 1, rim: '#ffd890' }, grade: ['#ffb070', 0.08],
    act: () => [[S0.soup, 'proud'], [EV.sp_pour, 'awe'], [EV.sp_plates, 'grin'], [EV.sp_soup, 'laugh']],
    pose: (t, u, b) => { const pl = t > EV.sp_plates - 0.2, k = clamp((t - EV.sp_plates) / 1.0); return Object.assign(b, { x: pl ? lerp(300, 820, k) : 760, y: 1640, s: 1.05, flip: -1, walk: pl && k < 1 ? t * 7 : undefined, look: [-0.6, 0.5],
      hand: [240, -280 + Math.sin(t * 8) * 20], handF: [-60, -200], prop: 'ladleP', propAng: pl ? 1.2 : 0.4, noHat: true }); },
    cam: () => [[S0.soup, 560, 900, 0.1], [EV.sp_year - 0.1, 720, 1440, 0.26, 'x'], [EV.sp_pour, 420, 1100, 0.14], [EV.sp_plates, 480, 1300, 0.2], [EV.sp_soup, 560, 1260, 0.24], [S1.soup, 580, 1260, 0.28]]
  };
  // ---------------------------------------------------------------- переход: волна оранжевого бульона заливает кадр снизу
  TRANS_IN.soup = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), lvl = lerp(H + 200, -400, e); drawBuf(A, 1, 540, 960);
    const P = new Path2D(); P.moveTo(0, H + 400); for (let x = 0; x <= W; x += 40) P.lineTo(x, lvl + Math.sin(x / 90 + t * 8) * 40); P.lineTo(W, H + 400); P.closePath();
    const lvl2 = lvl + 160, P2 = new Path2D(); P2.moveTo(0, H + 400); for (let x = 0; x <= W; x += 40) P2.lineTo(x, lvl2 + Math.sin(x / 90 + t * 8 + 1) * 40); P2.lineTo(W, H + 400); P2.closePath();
    scr(() => { ctx.save(); ctx.fillStyle = SL.broth; ctx.fill(P); ctx.restore(); }); inPath(P2, () => drawBuf(B, 1, 540, 960));
    scr(() => { const r = rng(13440); for (let i = 0; i < 20; i++) ell(r() * W, lvl + 40 + r() * 100, 10 + r() * 14, 5, { wash: SL.oil, washA: 0.8, line: false }); });
  } };
})();
