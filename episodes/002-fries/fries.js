/* 002 — картошка фри: детали еды, флаги, костюмы и реквизит выпуска (кандидат в общий food.js после 002).
   fry, friesPile, fryCone, potato, potatoFish, pan, fryBasket, dollop, steam2, flag2, judgeBench, cheque.
   Костюмы: judge (мантия + брыжи-«рабат» + парик), dutchA, parisian (фригийский колпак), bavarian (тирольская шляпа), doughboy (каска Броди), cookV, farmer, cook50 (бумажная пилотка). */
const FR = { fry: '#f0bd4e', fryL: '#fde49a', fryD: '#b8742a', fryT: '#7a4012', paper: '#f2e6c8', kraft: '#c89a5a', mayo: '#fbf2d2', mayoD: '#d8c890', ket: '#c62a1a', ketL: '#f05a3a', fat: '#efe6d0', oil: '#e2b040', oilD: '#8a5a10', pot: '#b88a52', potD: '#6a4a22', potL: '#e0bc84' };

function fry(x, y, len, rot, o = {}) {                                 // палочка фри: квадратное сечение, румяные концы, блик по ребру
  const w = o.w || 15, k = o.key || 8000; push(x, y, o.s || 1, rot);
  const b = o.bend || 0, P = [[-w / 2, -len / 2], [w / 2, -len / 2 + 2], [w / 2 + b, 0], [w / 2, len / 2], [-w / 2, len / 2 - 2], [-w / 2 + b, 0]];
  const p = shape(P, { wash: o.col || FR.fry, washA: 1, w: o.lw || 1.6, col: '#5a2e08', key: k }); shadeG(p.path, w / 2, 0, -w / 2, 0, FR.fryD, 0.55);
  ctx.save(); ctx.clip(p.path); ctx.globalAlpha = 0.75; ctx.fillStyle = FR.fryT; ctx.fillRect(-w, -len / 2 - 2, w * 2, 7); ctx.fillRect(-w, len / 2 - 6, w * 2, 8); ctx.restore();
  pencil([[-w / 2 + 3, -len / 2 + 8], [-w / 2 + 3 + b, len / 2 - 10]], { w: 2.4, col: FR.fryL, a: 0.85, pass2: false, gap: false });
  if (o.salt) { const r = rng(k + 3); for (let i = 0; i < 4; i++) ell((r() - 0.5) * w * 0.7, (r() - 0.5) * len * 0.8, 1.8, 1.8, { wash: '#ffffff', washA: 0.95, line: false }); }
  pop();
}
function friesPile(x, y, s, n, seed, o = {}) {                         // пучок фри (веером, торчат вверх): o.spread, o.lean
  const r = rng(seed), sp = o.spread || 1;
  for (let i = 0; i < n; i++) { const f = n > 1 ? i / (n - 1) - 0.5 : 0, len = 120 + r() * 90, a = f * 0.9 * sp + (r() - 0.5) * 0.25 + (o.lean || 0);
    fry(x + f * 120 * s * sp + Math.sin(a) * len * 0.4 * s, y - len * 0.42 * s - r() * 20 * s, len, a, { s, key: seed * 10 + i, salt: o.salt, col: i % 3 ? FR.fry : '#f4c862', bend: (r() - 0.5) * 4 }); }
}
function fryCone(x, y, s, t, o = {}) {                                 // бумажный кулёк фри: n фри, майонез сверху, пар; o.kind: 'stripe' | 'kraft' | 'news'
  push(x, y, s, o.rot || 0); const seed = o.seed || 81;
  friesPile(0, -170, 1, o.n || 13, seed, { spread: 1.1, salt: 1 });
  const C = [[-118, -230], [118, -230], [26, 60], [-26, 60]], c = shape(C, { wash: o.kind === 'kraft' ? FR.kraft : FR.paper, washA: 1, w: 2.6, col: '#3a2410', key: seed + 1 });
  shadeG(c.path, 118, 0, -40, 0, o.kind === 'kraft' ? '#6a4420' : '#a89060', 0.55);
  if (!o.kind || o.kind === 'stripe') { ctx.save(); ctx.clip(c.path); for (let i = -6; i < 8; i++) { ctx.fillStyle = 'rgba(217,72,43,0.9)'; ctx.beginPath(); ctx.moveTo(i * 44 - 20, -240); ctx.lineTo(i * 44 + 2, -240); ctx.lineTo(i * 12 + 2, 70); ctx.lineTo(i * 12 - 6, 70); ctx.fill(); } ctx.restore(); }
  if (o.kind === 'news') { ctx.save(); ctx.clip(c.path); for (let i = 0; i < 12; i++) pencil([[-100 + (i % 2) * 20, -210 + i * 22], [90 - i * 6, -210 + i * 22]], { w: 2, col: '#3a3a3a', a: 0.45, pass2: false, gap: false }); txt(o.title || 'GAZETTE', 0, -196, 26, { font: 'Osw', col: '#2a2a2a', a: 0.7 }); ctx.restore(); }
  pencil([[-118, -230], [118, -230]], { w: 4, col: '#3a2410', pass2: false });
  friesPile(0, -200, 0.9, 6, seed + 7, { spread: 0.7 });
  if (o.mayo) dollop(-20, -268, 1.1 * o.mayo, FR.mayo, FR.mayoD, seed + 5);
  if (o.ket) dollop(40, -262, 0.8 * o.ket, FR.ket, '#7a1008', seed + 6);
  if (o.steam !== false) steam2(0, -330, t, 5, 0.45, seed);
  pop();
}
function dollop(x, y, s, col, colD, seed) {                           // шлепок соуса: волна-«розочка», глянцевый блик
  push(x, y, s); const P = [[-60, 10], [-50, -14], [-26, -26], [-6, -46], [8, -30], [34, -30], [56, -8], [60, 12], [0, 22]];
  const p = blob(P, { wash: col, washA: 1, w: 2, col: lerpC(colD, '#000000', 0.3), key: seed }); shadeG(p.path, 40, 20, -10, -20, colD, 0.5);
  pencil(spline([[-34, -8], [-10, -20], [10, -14]], false, 5), { w: 5, col: '#ffffff', a: 0.75, pass2: false, gap: false }); glow(-12, -18, 18, 'rgba(255,255,255,1)', 0.5); pop();
}
function steam2(x, y, t, n = 5, a = 0.5, seed = 1, h = 260) {          // пар: завитки поднимаются и тают
  for (let i = 0; i < n; i++) { const r = rng(seed * 31 + i), ph = (t * 0.55 + r()) % 1, xx = x + (r() - 0.5) * 120, yy = y - ph * h;
    pencil(spline([[xx, yy + 60], [xx + Math.sin(t * 2 + i) * 18, yy + 30], [xx - Math.sin(t * 2 + i) * 14, yy], [xx + 10, yy - 30]], false, 6), { w: 7 - ph * 4, col: '#ffffff', a: a * Math.sin(ph * Math.PI), pass2: false, gap: false }); }
}
function potato(x, y, s, rot = 0, o = {}) {                            // клубень: неровный, глазки, земля
  push(x, y, s, rot); const r = rng(o.key || 8100), P = []; for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283; P.push([Math.cos(a) * (64 + r() * 10), Math.sin(a) * (44 + r() * 8)]); }
  const p = blob(P, { wash: o.col || FR.pot, washA: 1, w: 2.2, col: '#3a2410', key: o.key || 8100 }); shadeG(p.path, 60, 40, -20, -20, FR.potD, 0.55); glow(-22, -18, 26, 'rgba(255,240,200,1)', 0.25);
  for (let i = 0; i < 5; i++) { const ex = (r() - 0.5) * 90, ey = (r() - 0.5) * 56; pencil([[ex - 4, ey], [ex + 4, ey + 1]], { w: 2.4, col: '#4a2a10', a: 0.7, pass2: false }); }
  if (o.face) { for (const ex of [-16, 16]) { ell(ex, -6, 7, 8, { wash: '#fff8ea', washA: 1, w: 1.4, col: '#2a1408' }); ell(ex + 1, -5, 3, 3.4, { wash: '#1a0a04', washA: 1, line: false }); } pencil(spline([[-12, 16], [0, 22], [12, 16]], false, 4), { w: 2.4, col: '#2a1408', pass2: false }); }
  pop();
}
function potatoFish(x, y, s, rot = 0, o = {}) {                        // жареная картошка, вырезанная рыбкой (легенда Мааса)
  push(x, y, s, rot); const p = blob([[-70, 0], [-40, -26], [10, -30], [44, -12], [62, -30], [70, 0], [62, 30], [44, 12], [10, 30], [-40, 26]], { wash: o.raw ? '#f2e2b0' : FR.fry, washA: 1, w: 2.2, col: '#5a2e08', key: o.key || 8120 });
  shadeG(p.path, 0, 30, 0, -20, o.raw ? '#c8b080' : FR.fryD, 0.6); ell(-42, -6, 5, 5, { wash: '#2a1408', washA: 1, line: false });
  for (let k = 0; k < 3; k++) pencil(spline([[-14 + k * 16, -20], [-6 + k * 16, 0], [-14 + k * 16, 20]], false, 4), { w: 2, col: o.raw ? '#b8a070' : FR.fryT, a: 0.6, pass2: false });
  pencil([[-50, -14], [10, -22]], { w: 2.6, col: FR.fryL, a: 0.7, pass2: false }); pop();
}
function pan(x, y, s, t, o = {}) {                                     // сковорода / противень уличного жарщика с кипящим жиром
  push(x, y, s); const R = o.R || 150;
  pencil([[R - 10, -4], [R + 170, -40]], { w: 18, col: '#2a2420' }); pencil([[R + 20, -10], [R + 160, -38]], { w: 4, col: '#6a5a4a', a: 0.6, pass2: false });
  const b = ell(0, 6, R + 8, R * 0.34, { wash: '#2a2420', washA: 1, w: 2.6, col: '#0a0806' }); metalG(b.path, -R * 0.4, -10, R * 1.4, '#6a5a50', '#2a2420', '#0a0806');
  const f = ell(0, -4, R - 10, R * 0.26, { wash: FR.oil, washA: 0.95, w: 1.6, col: FR.oilD, key: 8130 }); shadeG(f.path, 0, -30, 0, 30, '#fff0b0', 0.4);
  ctx.save(); ctx.clip(f.path); const r = rng(hsh(FRAME, 8131)); for (let i = 0; i < 18; i++) { const bx = (r() - 0.5) * R * 1.7, by = (r() - 0.5) * R * 0.4; ell(bx, by, 4 + r() * 6, 3 + r() * 3, { wash: '#fff6d0', washA: 0.7, w: 1, col: FR.oilD, a: 0.6 }); } ctx.restore();
  if (o.items) o.items(); pop();
}
function fryBasket(x, y, s, t, o = {}) {                               // проволочная корзина фритюра с ручкой и фри внутри
  push(x, y, s, o.rot || 0); pencil([[0, -110], [0, -340]], { w: 14, col: '#3a3a3a' }); rect(-12, -380, 24, 70, { wash: '#1a1a1a', washA: 1, w: 2, col: '#000' });
  friesPile(0, -40, 0.85, 12, o.seed || 140, { spread: 1.2, salt: 0 });
  const B = shape([[-150, -110], [150, -110], [134, 30], [-134, 30]], { wash: '#c8ccd0', washA: 0.16, w: 3.4, col: '#4a4e54', key: 8140 });
  ctx.save(); ctx.clip(B.path); for (let i = -12; i < 12; i++) { pencil([[i * 22, -120], [i * 22 + 60, 40]], { w: 1.6, col: '#6a6e74', a: 0.7, pass2: false, gap: false }); pencil([[i * 22, -120], [i * 22 - 60, 40]], { w: 1.6, col: '#6a6e74', a: 0.7, pass2: false, gap: false }); } ctx.restore();
  pencil([[-150, -110], [150, -110]], { w: 7, col: '#8a8e94', pass2: false }); if (o.drip) for (let i = 0; i < 6; i++) { const dx = -110 + i * 44, ph = (t * 1.6 + i * 0.37) % 1; ell(dx, 34 + ph * 120, 4, 7, { wash: FR.oil, washA: 1 - ph, w: 1, col: FR.oilD, a: 1 - ph }); }
  pop();
}
function flag2(x, y, w, h, kind, t, o = {}) {                          // флаг на древке: 'be' (чёрный-жёлтый-красный), 'fr' (синий-белый-красный), 'us' (полосы+звёзды); вертикальные полосы колышутся
  pencil([[x, y + h + (o.pole || 200)], [x, y - 10]], { w: 7, col: '#5a3a1a' }); ell(x, y - 14, 9, 9, { wash: '#d6a842', washA: 1, w: 1.4 });
  const cols = kind === 'be' ? ['#1a1a1a', '#f2c81e', '#d22a2a'] : kind === 'fr' ? ['#1e3a8a', '#f6f2ea', '#d22a2a'] : null, wv = (xx, yy) => [xx, yy + Math.sin(t * 5 + xx * 0.03) * 10 * (xx - x) / w];
  const P = [], N = 12; for (let i = 0; i <= N; i++) P.push(wv(x + w * i / N, y)); for (let i = N; i >= 0; i--) P.push(wv(x + w * i / N, y + h));
  const p = shape(P, { wash: '#ffffff', washA: 0.1, w: 2.2, col: '#2a1a0a', key: o.key || 8150 });
  ctx.save(); ctx.clip(p.path);
  if (cols) cols.forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect(x + w * i / 3 - 2, y - 40, w / 3 + 4, h + 80); });
  else { for (let i = 0; i < 7; i++) { ctx.fillStyle = i % 2 ? '#f6f2ea' : '#c8282a'; ctx.fillRect(x, y - 30 + i * (h + 60) / 7, w + 10, (h + 60) / 7 + 1); } ctx.fillStyle = '#1e3a8a'; ctx.fillRect(x, y - 30, w * 0.45, h * 0.55); }
  const g = ctx.createLinearGradient(x, 0, x + w, 0); for (let i = 0; i <= 6; i++) g.addColorStop(i / 6, `rgba(0,0,0,${0.18 * (0.5 + 0.5 * Math.sin(t * 5 + i * 1.6))})`); ctx.fillStyle = g; ctx.fillRect(x, y - 40, w + 10, h + 80); ctx.restore();
}
function cheque(x, y, s, rot, t, o = {}) {                             // гигантский чек «$10 000 000»
  push(x, y, s, rot); const p = rect(-300, -130, 600, 260, { wash: '#e8f0dc', washA: 1, w: 3, col: '#2a3a1a', key: 8160 }); shadeG(p.path, 0, 130, 0, -130, '#a8b890', 0.4);
  for (let i = 0; i < 10; i++) pencil([[-290, -110 + i * 24], [290, -110 + i * 24]], { w: 1, col: '#b8c8a0', a: 0.5, pass2: false, gap: false });
  txt(o.who || 'PAY TO: VEGETARIANS', -270, -84, 28, { font: 'Osw', col: '#2a3a1a', align: 'left' }); rect(-40, -36, 320, 70, { wash: '#ffffff', washA: 1, w: 2, col: '#2a3a1a' });
  txt('$10 000 000', 120, 2, 54, { font: 'Osw', col: '#2a6a1a' }); pencil(spline([[-250, 90], [-200, 70], [-150, 96], [-100, 74], [-60, 92]], false, 8), { w: 3, col: '#1a2a6a', pass2: false }); pencil([[-270, 104], [-20, 104]], { w: 1.6, col: '#2a3a1a', a: 0.7, pass2: false });
  pop();
}
function gavelHit(x, y, t, t0, r = 1) {                                // удар молотка: кольца + искры-звёздочки
  if (t < t0 || t > t0 + 0.45) return; const k = (t - t0) / 0.45;
  for (let i = 0; i < 3; i++) pencil(ellPts(x, y, (60 + i * 50 + k * 160) * r, (22 + i * 16 + k * 50) * r, 0, 0.05, 40), { w: 6 - i * 1.5, col: '#fff2c8', a: (1 - k) * 0.9, pass2: false, gap: false });
  for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283 + 0.3, d = (40 + k * 180) * r; pencil([[x + Math.cos(a) * d * 0.6, y + Math.sin(a) * d * 0.4], [x + Math.cos(a) * d, y + Math.sin(a) * d * 0.6]], { w: 5, col: '#e8b53a', a: 1 - k, pass2: false }); }
}

/* ---------------------------------------------------------------- костюмы 002 */
(() => {
  Object.assign(OUTFIT, {
    judge: { top: '#1c1a22', topD: '#060508', topL: '#4a4656', pants: null, detail: 'judge', hat: 'wig', boots: 'oxford', long: 1, apron: 1 },
    dutchA: Object.assign({}, OUTFIT.dutch, { apron: 1 }),
    parisian: Object.assign({}, OUTFIT.victorian, { top: '#3a4e8a', topD: '#18244a', topL: '#6a82c0', pants: '#e8dcc4', shirt: '#f2ece0', tie: null, hat: 'phrygian', apron: 1 }),
    bavarian: Object.assign({}, OUTFIT.victorian, { top: '#3e5a2e', topD: '#1a2a12', topL: '#6a8a4a', pants: '#5a3a1e', shirt: '#f2ece0', tie: 'bow', hat: 'tyrol', apron: 1 }),
    doughboy: Object.assign({}, OUTFIT.director, { top: '#6a6a3e', topD: '#33331a', topL: '#9a9a62', pants: '#6a6a3e', hat: 'brodie', apron: 1 }),
    cookV: Object.assign({}, OUTFIT.victorian, { top: '#5a2e2a', topD: '#2a1210', topL: '#8a5a50', pants: '#2a2a2e', shirt: '#f0ece2', tie: null, hat: 'mobcap', apron: 1 }),
    farmer: Object.assign({}, OUTFIT.iron || OUTFIT.metro, { top: '#3a5a8a', topD: '#1a2a4a', topL: '#6a8ab8', pants: '#3a5a8a', hat: 'panama', apron: 1 }),
    cook50: Object.assign({}, OUTFIT.waiter, { pants: '#2a2a32', hat: 'paperhat', tie: 'bow', apron: 1 })
  });
  COST6.judge = (OF, b, t, bp, L) => {                                  // судейская мантия до пола, широкие рукава-раструбы, белый «рабат» (брыжи) у горла
    const sk = skirt6(OF, b, L, -118, -10, 92, 120, 9201);
    for (const P of [bp, sk]) hatch(P.path, P.bb, { gap: 6, a: 0.16, col: OF.topL, ang: 1.2, key: 9202, w: 1.1 });
    for (const f of [-0.55, -0.15, 0.25, 0.6]) pencil(spline([[f * 70, -200 + b], [f * 84, -110 + b], [f * 110, -16 + b]], false, 5), { w: 2, col: OF.topL, a: 0.45, pass2: false });
    for (const sd of [-1, 1]) { const tb = poly([[sd * 2, -246 + b], [sd * 22, -246 + b], [sd * 26, -186 + b], [sd * 4, -190 + b]], { wash: '#fbf8f0', washA: 1, w: 2, col: TM.line, key: 9203 + sd }); shadeG(tb.path, 0, -186 + b, 0, -246 + b, '#b8b0a0', 0.3); }
    for (let k = 0; k < 4; k++) nb(0, -170 + k * 26 + b, 4, '#d9482b');
  };
  const curls = (cx, cy, n, dy, r) => { for (let i = 0; i < n; i++) { const c = ell(cx, cy + i * dy, r, r * 0.8, { wash: '#f2eee4', washA: 1, w: 2, col: '#6a645a' }); shadeG(c.path, 0, cy + i * dy + r, 0, cy + i * dy - r, '#b8b2a4', 0.5); pencil(spline([[cx - r * 0.5, cy + i * dy], [cx, cy + i * dy - r * 0.4], [cx + r * 0.5, cy + i * dy]], false, 4), { w: 1.6, col: '#8a847a', a: 0.7, pass2: false }); } };
  HAT6.wig = (t, o, fx, L) => {                                         // судейский пудреный парик: шапочка + букли по бокам и сзади
    for (const sd of [-1, 1]) curls(sd * 118 + fx * 0.2, -86, 4, 38, 30);
    const cap = blob([[-120, -60], [-112, -130], [-60, -176], [0, -186], [60, -176], [112, -130], [120, -60], [80, -96], [0, -110], [-80, -96]], { wash: '#f4f0e6', washA: 1, w: 2.6, col: '#6a645a', key: 9210 });
    shadeG(cap.path, -L.side * 120, 0, L.side * 40, 0, '#b8b2a4', 0.5); for (let i = 0; i < 6; i++) pencil(spline([[-90 + i * 36, -112], [-84 + i * 36, -150], [-70 + i * 36, -170]], false, 4), { w: 1.6, col: '#a8a294', a: 0.6, pass2: false });
    rimL([[-120, -60], [-112, -130], [-60, -176], [0, -186], [60, -176], [112, -130], [120, -60]], L.side, L.rim, 0.6, 3);
  };
  HAT6.phrygian = (t, o, fx, L) => {                                    // красный фригийский колпак, макушка свисает вперёд
    const sw = Math.sin(t * 2.4) * 6;
    const c = blob([[-108, -68], [-100, -140], [-50, -196], [20, -214], [80, -200 + sw], [118, -160 + sw], [104, -130 + sw], [70, -150], [96, -110], [108, -68], [0, -58]], { wash: '#b8241e', washA: 1, w: 2.6, col: TM.line, key: 9220 });
    shadeG(c.path, -L.side * 110, 0, L.side * 40, 0, '#4a0806', 0.5); hatch(c.path, c.bb, { gap: 6, a: 0.12, col: '#2a0402', ang: 1.1, key: 9221, w: 1.1 });
    pencil(spline([[-106, -76], [0, -66], [106, -76]], false, 6), { w: 8, col: '#8a1410', pass2: false });
    const ck = ell(-60, -96, 18, 18, { wash: '#1e3a8a', washA: 1, w: 1.8, col: TM.line }); ell(-60, -96, 11, 11, { wash: '#f6f2ea', washA: 1, w: 1, col: TM.line }); ell(-60, -96, 5, 5, { wash: '#d22a2a', washA: 1, line: false });
  };
  HAT6.tyrol = (t, o, fx, L) => {                                       // баварская фетровая шляпа: узкие поля, шнур, перо
    const br = ell(0, -72, 122, 20, { wash: '#2e4a24', washA: 1, w: 2.6, col: TM.line, key: 9230 }); shadeG(br.path, 0, -52, 0, -92, '#0e1a0a', 0.5);
    const cr = blob([[-74, -76], [-64, -150], [-20, -168], [0, -156], [20, -168], [64, -150], [74, -76]], { wash: '#3e5e30', washA: 1, w: 2.6, col: TM.line, key: 9231 }); shadeG(cr.path, -L.side * 80, 0, L.side * 40, 0, '#14240e', 0.5);
    pencil(spline([[-72, -94], [0, -86], [72, -94]], false, 6), { w: 7, col: '#c8a040', pass2: false });
    const sw = Math.sin(t * 3) * 0.08; push(56, -96, 1, 0.5 + sw); const fe = blob([[0, 0], [-8, -40], [-2, -100], [8, -40]], { wash: '#f4f0e6', washA: 1, w: 1.6, col: '#5a5448' }); for (let k = 0; k < 6; k++) pencil([[0, -10 - k * 14], [-10, -18 - k * 14]], { w: 1.4, col: '#8a8478', pass2: false }); pop();
  };
  HAT6.brodie = (t, o, fx, L) => {                                      // каска Броди 1917: плоская «тарелка» с широкими полями
    const br = ell(0, -96, 168, 34, { wash: '#5a5a32', washA: 1, w: 3, col: TM.line, key: 9240 }); shadeG(br.path, 0, -62, 0, -130, '#1a1a0a', 0.55);
    const d = blob([[-104, -100], [-92, -150], [-40, -176], [40, -176], [92, -150], [104, -100]], { wash: '#6a6a3e', washA: 1, w: 3, col: TM.line, key: 9241 }); metalG(d.path, -L.side * 40, -160, 140, '#9a9a6a', '#6a6a3e', '#2a2a14');
    hatch(d.path, d.bb, { gap: 5, a: 0.12, col: '#000', ang: 0.6, key: 9242 }); pencil([[-110, -70], [-90, 40]], { w: 3, col: '#4a3a1a', a: 0.8, pass2: false }); pencil([[110, -70], [90, 40]], { w: 3, col: '#4a3a1a', a: 0.8, pass2: false });
  };
  HAT6.mobcap = (t, o, fx, L) => {                                      // викторианский чепец кухарки: оборка, лента
    const c = blob([[-120, -50], [-118, -120], [-70, -170], [0, -182], [70, -170], [118, -120], [120, -50], [60, -84], [0, -92], [-60, -84]], { wash: '#fbf8f0', washA: 1, w: 2.4, col: '#5a5448', key: 9250 });
    shadeG(c.path, -L.side * 120, 0, L.side * 40, 0, '#b8b0a0', 0.45); for (let i = 0; i < 14; i++) { const a = Math.PI + 0.2 + i / 13 * (Math.PI - 0.4); ell(Math.cos(a) * 124, -66 + Math.sin(a) * 30 + 30, 12, 9, { wash: '#ffffff', washA: 1, w: 1.4, col: '#7a7468' }); }
    pencil(spline([[-100, -96], [0, -90], [100, -96]], false, 6), { w: 6, col: '#d9482b', pass2: false });
  };
  HAT6.paperhat = (t, o, fx, L) => {                                    // бумажная пилотка повара забегаловки 1950-х
    const c = poly([[-104, -70], [-84, -150], [84, -150], [104, -70]], { wash: '#fbfaf4', washA: 1, w: 2.4, col: TM.line, key: 9260 }); shadeG(c.path, -L.side * 100, 0, L.side * 40, 0, '#b8b4a8', 0.45);
    pencil([[-100, -86], [100, -86]], { w: 10, col: '#d9482b', pass2: false }); pencil([[0, -150], [-8, -86]], { w: 1.6, col: '#a8a498', a: 0.7, pass2: false });
  };
  // пятно-трофей №2 на фартуке: капля кетчупа и майонеза (поверх фартука из 001)
  const _c5 = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c5(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    ctx.save(); ctx.globalAlpha = 0.85; ctx.fillStyle = '#c62a1a'; ctx.beginPath(); ctx.ellipse(-38, -150 + b, 7, 9, -0.4, 0, 6.3); ctx.fill(); ctx.beginPath(); ctx.arc(-30, -138 + b, 2.6, 0, 6.3); ctx.fill();
    ctx.fillStyle = '#fbf2d2'; ctx.globalAlpha = 0.9; ctx.beginPath(); ctx.ellipse(-46, -136 + b, 6, 4, 0.3, 0, 6.3); ctx.fill(); ctx.restore();
  };
  Object.assign(PROPS, {
    fryP() { fry(0, -90, 210, 0.15, { key: 7310, salt: 1, w: 22 }); },
    coneP(t) { fryCone(0, 40, 0.55, t, { mayo: 1, seed: 7320 }); },
    potatoP() { potato(0, -40, 0.8, 0.3, { key: 7330 }); },
    fishP() { potatoFish(0, -50, 0.9, -0.4, { key: 7340 }); },
    basketP(t) { fryBasket(0, 300, 0.5, t, { seed: 7350, drip: 1 }); }
  });
})();
