/* 014 — `navy`: «На английском флоте полагался фунт сухарей в день. Перед едой из них вытряхивали жучков.» Орудийная палуба фрегата: низкие балки, пушки
   с канатами, качающиеся гамаки и фонари, иллюминаторы-порты с волнами, бочка BISCUIT, матросы в полосатых рубахах за подвесным столом. Том-матрос
   с фартуком. По словам: «фунт» — на весы шлёпается горка сухарей, гиря «1 lb»; «в день» — мелом на балке «I» палочки дней; «вытряхивали» — Том стучит
   сухарём о стол; «жучков» — долгоносики сыплются и разбегаются; немая пауза — один жучок машет Тому лапкой, Том щурится.
   Переход В сцену: кадр прокалывается дырочками, как галета, сквозь них проступает новая сцена. */
(() => {
  EV.nv_lb = wtw('s3', 'фунт');
  EV.nv_day = wtw('s3', 'в день.');
  EV.nv_tap = wtw('s3', 'вытряхивали');
  EV.nv_bugs = wtw('s3', 'жучков.');
  EV.nv_gag = LE('s3');
  SHAKES.push([EV.nv_tap + 0.1, 0.12, 5], [EV.nv_tap + 0.35, 0.12, 5]);
  KEYW.push('фунт', 'жучков.');
  const roll = t => Math.sin(t * 1.2) * 0.03;

  function deck(t) {                                                    // палуба: балки, борт с портами и волнами, фонари, гамаки
    vgrad(-600, 1500, ['#2a1a10', '#4a2e18', '#6a4424']);
    for (let i = 0; i < 9; i++) { const y = -500 + i * 180; rect(-400, y, 2000, 40, { wash: '#3a2410', washA: 1, w: 2, col: '#140a04' }); } for (let i = 0; i < 30; i++) pencil([[-400 + i * 70, -500], [-400 + i * 70, 1200]], { w: 2, col: '#2a1608', a: 0.5, pass2: false });
    for (const x of [140, 560, 980]) { push(x, 560, 1); const p = rect(-110, -90, 220, 180, { wash: '#5a8ab8', washA: 1, w: 8, col: '#2a1408', key: 14400 + x }); ctx.save(); ctx.clip(p.path); vgrad(-90, 90, ['#8ab8e0', '#2a5a8a']); for (let i = 0; i < 4; i++) pencil(Array.from({ length: 12 }, (_, j) => [-110 + j * 22, -10 + i * 24 + Math.sin(t * 2 + j * 0.8 + i) * 8]), { w: 3, col: '#cfe4f4', a: 0.7, pass2: false }); ctx.restore(); pop(); rays(x, 560, 1.6, 0.25, 900, 'rgba(220,235,255,1)', 0.1, 3, t); }
    for (const [x, y] of [[300, 120], [800, 140]]) { const sw = Math.sin(t * 1.4 + x) * 0.15; push(x, y, 1, sw); pencil([[0, -120], [0, 0]], { w: 3, col: '#2a2a2a', pass2: false }); rect(-26, 0, 52, 70, { wash: '#ffd890', washA: 0.9, w: 3, col: '#2a2a2a' }); glow(0, 36, 160, 'rgba(255,200,110,1)', 0.5); pop(); }
    for (let i = 0; i < 3; i++) { const x = -200 + i * 600, sw = Math.sin(t * 1.2 + i) * 20; pencil(spline([[x - 160, 300], [x + sw, 420], [x + 160, 300]], false, 8), { w: 30, col: '#d8ccb0' }); pencil(spline([[x - 160, 300], [x + sw, 420], [x + 160, 300]], false, 8), { w: 2, col: '#8a7a5a', pass2: false }); }
  }
  function guns(t) {                                                    // пушки на лафетах с канатами, ядра, бочки BISCUIT
    for (const x of [-120, 1240]) { push(x, 1260, 1); rect(-120, -60, 240, 60, { wash: '#6a3a14', washA: 1, w: 2.4, col: '#1a0a04' }); for (const sd of [-1, 1]) ell(sd * 80, 0, 36, 36, { wash: '#4a2a10', washA: 1, w: 2 }); const c = shape([[-120, -130], [140, -110], [140, -80], [-120, -60]], { wash: '#2a2a2e', washA: 1, w: 2.4, col: '#0a0a0a' }); metalG(c.path, 0, -110, 160, '#6a6a72', '#2a2a2e', '#0a0a0a'); pencil(spline([[-120, -90], [-200, -40], [-160, 40]], false, 5), { w: 6, col: '#c8b088', pass2: false }); pop(); }
    for (let i = 0; i < 5; i++) ell(200 + i * 40, 1250 - (i % 2) * 30, 18, 18, { wash: '#1a1a1e', washA: 1, w: 1.4 });
    push(1000, 1260, 1); const b = shape(spline([[-80, 0], [-96, -110], [-80, -220], [80, -220], [96, -110], [80, 0]], true, 6), { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#1a0a04' }); for (const y of [-40, -180]) pencil([[-90, y], [90, y]], { w: 6, col: '#3a3a3a', pass2: false }); txt('BISCUIT', 0, -100, 26, { font: 'Osw', col: '#f4e6c8' }); pop();
  }
  function crew(t) {                                                    // матросы за подвесным столом: полосатые рубахи, косички, кружки
    const ev = t > EV.nv_bugs; for (const [x, sd] of [[260, 1], [820, -1]]) { human(x, 1320, 1.05, t, { body: '#f4f0e6', legs: '#3a5a8a', hair: '#3a2a1a', face: ev ? 'shock' : 'grin', armL: 'hold', armR: ev ? 'up' : 'hold', look: -sd * 0.5, seed: 14410 + sd, flip: -sd }); push(x, 1320, 1.05); ctx.save(); for (let i = 0; i < 6; i++) pencil([[-50, -220 + i * 20], [50, -220 + i * 20]], { w: 5, col: '#2a3a6a', a: 0.6, pass2: false }); ctx.restore(); pop(); }
  }
  function table(t) {                                                   // подвесной стол: весы с сухарями и гирей 1 lb, кружки, сухари, жучки
    const tb = rect(-400, 1440, 1900, 800, { wash: '#7a4a24', washA: 1, w: 3, col: '#1a0a04', key: 14420 }); shadeG(tb.path, 0, 1900, 0, 1440, '#2a1408', 0.45); for (let i = 0; i < 6; i++) pencil([[-400, 1480 + i * 70], [1500, 1484 + i * 70]], { w: 2, col: '#3a1a08', a: 0.5, pass2: false });
    const lb = t > EV.nv_lb - 0.2; balance(220, 1460, 0.75, t, lb ? lerp(0.2, 0, sm(clamp((t - EV.nv_lb) / 0.5))) : 0.2, (px, py) => { if (lb) for (let i = 0; i < 4; i++) hardtack(px - 40 + (i % 2) * 60, py - 10 - Math.floor(i / 2) * 24, 0.4, 0.2 * i, { hex: 1, key: 14421 + i }); }, (px, py) => { push(px, py, 1); const g = shape([[-30, 0], [-24, -50], [24, -50], [30, 0]], { wash: '#5a5a62', washA: 1, w: 2 }); txt('1 lb', 0, -20, 18, { font: 'Osw', col: '#f4e6c8' }); pop(); });
    if (t > EV.nv_day) { const n = Math.min(7, Math.floor((t - EV.nv_day) * 6) + 1); for (let i = 0; i < n; i++) pencil([[600 + i * 22, 1160], [604 + i * 22, 1230]], { w: 5, col: '#ffffff', a: 0.9, pass2: false }); txt('ДНИ', 680, 1130, 26, { font: 'Hand', col: '#ffffff' }); }
    for (const x of [500, 920]) { push(x, 1500, 1); rect(-30, -70, 60, 70, { wash: '#8a8e94', washA: 1, w: 2, col: '#2a2a2a' }); pencil(spline([[30, -60], [50, -50], [30, -20]], false, 4), { w: 5, col: '#8a8e94', pass2: false }); pop(); }
    if (t > EV.nv_bugs - 0.1) { const r = rng(14425); for (let i = 0; i < 9; i++) { const q = t - EV.nv_bugs + 0.1; const a = r() * 3.14 + 3.14, d = 40 + q * (120 + r() * 200); weevil(640 + Math.cos(a) * d * 1.4, 1480 + Math.sin(a) * d * 0.25 + Math.max(0, 0.3 - q) * -300 * (1 - q), 1.4, t, { rot: a, wave: i === 0 && t > EV.nv_gag }); } }
    if (t > EV.nv_gag) { push(640 + 30, 1420, 1); txt('привет!', 0, -40, 26, { font: 'Hand', col: '#f4e6c8' }); pop(); }
  }
  function front(t) { const sw = Math.sin(t * 1.2) * 30; pencil(spline([[-200, -100], [100 + sw, 160], [400, -100]], false, 8), { w: 50, col: '#c8b088' }); pencil(spline([[700, -100], [1000 + sw, 160], [1300, -100]], false, 8), { w: 50, col: '#c8b088' }); push(1160, 1900, 1.5); for (let i = 0; i < 6; i++) ell(0, -i * 30, 90 - i * 6, 26, { line: true, w: 12, col: '#b8a070' }); pop(); motes(30, [0, 300, 1080, 1700], '#ffe0a0', t, 14430, { sp: 6, sz: 4, a: 0.45, wob: 2 }); }
  WORLD.navy = (t, u, cat) => {
    ctx.save(); ctx.translate(540, 960); ctx.rotate(roll(t)); ctx.translate(-540, -960);
    lay(10, () => { deck(t); haze('#d8a060', 0.06); });
    lay(3.6, () => { guns(t); });
    lay(2.6, () => { crew(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { table(t); });
    lay(0.6, () => { front(t); });
    ctx.restore();
  };
  DIR.navy = {
    outfit: 'sailorA', light: { side: -1, rim: '#ffd890' }, grade: ['#ffa850', 0.1],
    act: () => [[S0.navy, 'proud'], [EV.nv_lb, 'awe'], [EV.nv_tap, 'annoyed'], [EV.nv_bugs, 'shock'], [EV.nv_gag, 'suspicious']],
    pose: (t, u, b) => { const tap = t > EV.nv_tap && t < EV.nv_bugs + 0.3; return Object.assign(b, { x: 640, y: 1600, s: 1.05, flip: -1, look: t > EV.nv_bugs ? [0, 0.7] : [-0.4, 0.4], squint: t > EV.nv_gag,
      hand: tap ? [40, -200 + Math.abs(Math.sin((t - EV.nv_tap) * 18)) * -90] : [160, -280], handF: [-90, -220], prop: 'tackP', propAng: 0.2 }); },
    cam: () => [[S0.navy, 560, 900, 0.08], [EV.nv_lb - 0.2, 300, 1240, 0.22, 'x'], [EV.nv_day, 560, 1180, 0.14], [EV.nv_tap, 600, 1220, 0.24], [EV.nv_gag, 640, 1260, 0.32], [S1.navy, 640, 1260, 0.34]]
  };
  // ---------------------------------------------------------------- переход: кадр прокалывается дырочками, как галета
  TRANS_IN.navy = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const e = sm(k), R = e * e * 200 + 2, P = new Path2D(); for (let i = 0; i < 6; i++) for (let j = 0; j < 10; j++) { const x = 90 + i * 180, y = 96 + j * 192; P.moveTo(x + R, y); P.arc(x, y, R, 0, 6.283); }
    inPath(P, () => drawBuf(B, 1, 540, 960)); scr(() => { if (e < 0.6) { const r = rng(14440); for (let i = 0; i < 6; i++) for (let j = 0; j < 10; j++) { ctx.strokeStyle = 'rgba(90,70,40,0.8)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(90 + i * 180, 96 + j * 192, R + 2, 0, 6.283); ctx.stroke(); } } });
  } };
})();
