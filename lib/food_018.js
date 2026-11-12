/* 018 — еда выпуска «Пицца Маргарита»: пицца-маргарита (бортик в «леопардовых» подпалинах, томат, рваная моцарелла, базилик, масло, пар), кусок с тянущимся
   сыром, пицца сложенная вчетверо (a portafoglio), медная печка разносчика (stufa), дровяная печь-купол с огнём, лопата, письмо «Casa Reale» с печатью,
   газета 1889, лупа, книга 1866 с гравюрой. Реквизит Тома — PROPS. */
const PZ = { dough: '#ecc994', crust: '#d99a50', crustD: '#9a5a22', char: '#2e1a0e', sauce: '#c42c1a', sauceD: '#8a1a0e', sauceL: '#ee6a44', mozz: '#fbf7ec', mozzD: '#e2d6b8', basil: '#2c7a2a', basilD: '#164a18', basilL: '#6ab84e', oil: '#f2c440', flour: '#f7f1e3', copper: '#c8743a', copperL: '#f0b070', brick: '#a8482a', paper: '#f4ecd6' };

function basilLeaf(x, y, s, rot = 0, key = 18000) {                     // лист базилика: глянец, центральная жилка, прожилки
  push(x, y, s, rot); const l = blob([[0, 0], [16, -10], [30, -30], [24, -58], [0, -74], [-24, -58], [-30, -30], [-16, -10]], { wash: PZ.basil, washA: 1, w: 1.8, col: PZ.basilD, key });
  shadeG(l.path, 30, -10, -20, -60, PZ.basilD, 0.45); pencil([[0, -2], [0, -70]], { w: 1.6, col: PZ.basilD, pass2: false }); for (let i = 1; i < 4; i++) for (const sd of [-1, 1]) pencil([[0, -i * 16], [sd * 18, -i * 16 - 12]], { w: 1, col: PZ.basilD, a: 0.7, pass2: false });
  pencil(spline([[-12, -24], [-14, -44], [-6, -60]], false, 4), { w: 3, col: PZ.basilL, a: 0.6, pass2: false }); pop();
}
function steamWisps(x, y, s, t, n = 4, seed = 18010, a = 0.5) {         // пар: волнистые струйки вверх, тают
  for (let i = 0; i < n; i++) { const r = rng(seed + i), ph = (t * 0.5 + r()) % 1, x0 = x + (r() - 0.5) * 200 * s, y0 = y - ph * 260 * s;
    const pts = []; for (let j = 0; j < 6; j++) pts.push([x0 + Math.sin(t * 2 + j * 0.9 + i) * 16 * s, y0 - j * 26 * s]); pencil(spline(pts, false, 4), { w: 5 * s + 2, col: '#ffffff', a: a * (1 - ph) * Math.min(1, ph * 4), pass2: false, gap: false }); }
}
function margherita(x, y, s, t, o = {}) {                               // пицца сверху-сбоку: o.tilt (0.3..1) — сплющенность эллипса, o.steam, o.bite (0..1 — откушенный край справа), o.key
  const ry = o.tilt == null ? 0.42 : o.tilt, k = o.key || 18020, R = 300; push(x, y, s);
  ell(10, 26 * ry + 8, R + 20, (R + 20) * ry, { wash: '#1a0a04', washA: 0.25, line: false });
  if (ry < 0.9) { const e = shape(ellPts(0, 10, R, R * ry, 0, 0, 40).map(p => p).concat(), { wash: PZ.crustD, washA: 1, w: 2.4, col: PZ.char, key: k }); }
  const c = ell(0, 0, R, R * ry, { wash: PZ.crust, washA: 1, w: 2.6, col: PZ.char, key: k + 1 }); shadeG(c.path, 0, -R * ry, 0, R * ry, '#f8d8a0', 0.4);
  const r1 = rng(k + 2); for (let i = 0; i < 26; i++) { const a = r1() * 6.283, rr = R * (0.88 + r1() * 0.1); ell(Math.cos(a) * rr, Math.sin(a) * rr * ry, 6 + r1() * 12, (4 + r1() * 7) * Math.max(ry, 0.5), { wash: PZ.char, washA: 0.8, line: false }); }
  const sc = blob(ellPts(0, 0, R * 0.8, R * 0.8 * ry, 0, 0, 14).map((p, i) => [p[0] * (1 + Math.sin(i * 2.3) * 0.03), p[1]]), { wash: PZ.sauce, washA: 1, w: 1.6, col: PZ.sauceD, key: k + 3 }); shadeG(sc.path, -R, -R * ry, R, R * ry, PZ.sauceL, 0.35);
  hatch(sc.path, sc.bb, { gap: 9, a: 0.12, col: PZ.sauceD, ang: 0.6, key: k + 4 });
  const r2 = rng(k + 5); for (let i = 0; i < 7; i++) { const a = i / 7 * 6.283 + r2() * 0.5, rr = R * (0.18 + r2() * 0.48), mx = Math.cos(a) * rr, my = Math.sin(a) * rr * ry, mr = 44 + r2() * 26;
    const m = blob(ellPts(mx, my, mr, mr * Math.max(ry, 0.4) * 0.9, 0, 0, 9).map((p, j) => [p[0] + Math.sin(j * 3.1 + i) * 8, p[1] + Math.cos(j * 2.7 + i) * 5]), { wash: PZ.mozz, washA: 1, w: 1.4, col: PZ.mozzD, key: k + 10 + i });
    shadeG(m.path, mx, my + mr * ry, mx, my - mr * ry, '#d8b878', 0.35); ell(mx - mr * 0.3, my - mr * ry * 0.3, mr * 0.3, mr * ry * 0.18, { wash: '#ffffff', washA: 0.8, line: false }); }
  for (const [lx, ly, rot] of [[-90, -40, -0.6], [110, 20, 0.9], [10, 120, 2.6], [-150, 90, -2.2], [170, -100, 0.3]]) basilLeaf(lx, ly * ry / 0.42, 0.9, rot, k + 30);
  const r3 = rng(k + 40); for (let i = 0; i < 14; i++) ell(-R * 0.6 + r3() * R * 1.2, (-R * 0.6 + r3() * R * 1.2) * ry, 5 + r3() * 6, 3 + r3() * 3, { wash: PZ.oil, washA: 0.7, line: false });
  for (let i = 0; i < 5; i++) pencil(spline([[-R * 0.5 + i * 40, -R * 0.5 * ry + i * 10], [-R * 0.3 + i * 40, -R * 0.6 * ry + i * 10]], false, 3), { w: 3, col: '#ffffff', a: 0.55, pass2: false });
  if (o.bite) { push(R * 0.82, 0, 1); for (let i = 0; i < 3; i++) ell(0, (i - 1) * 50 * ry, 60 * o.bite, 46 * ry * o.bite, { wash: o.bg || '#2a1a10', washA: 1, line: false }); pop(); }
  if (o.steam) steamWisps(0, -40, 1, t, 5, k + 50, 0.45 * o.steam);
  pop();
}
function cheeseString(x0, y0, x1, y1, sag = 40, w = 8) {                // нить моцареллы между двумя точками, провисает
  const mx = (x0 + x1) / 2, my = (y0 + y1) / 2 + sag; pencil(spline([[x0, y0], [mx, my], [x1, y1]], false, 8), { w, col: PZ.mozzD, pass2: false, gap: false }); pencil(spline([[x0, y0 - 2], [mx, my - 3], [x1, y1 - 2]], false, 8), { w: w * 0.55, col: '#ffffff', pass2: false, gap: false });
}
function pizzaSlice(x, y, s, rot = 0, key = 18060) {                    // треугольный кусок: бортик сверху, томат, моцарелла, базилик, капля масла
  push(x, y, s, rot); const tr = blob([[0, 0], [-70, -190], [-40, -214], [0, -222], [40, -214], [70, -190]], { wash: PZ.sauce, washA: 1, w: 2, col: PZ.sauceD, key });
  const cr = blob([[-74, -186], [-46, -222], [0, -234], [46, -222], [74, -186], [62, -176], [0, -200], [-62, -176]], { wash: PZ.crust, washA: 1, w: 2, col: PZ.char, key: key + 1 }); for (let i = 0; i < 4; i++) ell(-46 + i * 30, -206 - (i % 2) * 8, 7, 4, { wash: PZ.char, washA: 0.8, line: false });
  for (const [mx, my, mr] of [[-20, -150, 28], [24, -110, 22], [-4, -60, 16]]) { ell(mx, my, mr, mr * 0.8, { wash: PZ.mozz, washA: 1, w: 1.2, col: PZ.mozzD }); ell(mx - 6, my - 6, mr * 0.35, mr * 0.2, { wash: '#ffffff', washA: 0.8, line: false }); }
  basilLeaf(18, -150, 0.55, 0.5, key + 2); ell(-30, -96, 7, 4, { wash: PZ.oil, washA: 0.8, line: false }); pop();
}
function foldPizza(x, y, s, rot = 0, key = 18070) {                     // пицца вчетверо «a libretto» в бумаге: веер бортиков, красный край соуса
  push(x, y, s, rot); poly([[-60, 10], [60, 10], [44, -110], [-44, -110]], { wash: '#e8dcc0', washA: 1, w: 1.8, col: '#6a5a3a', key });
  const f = blob([[0, 0], [-78, -150], [-60, -186], [0, -200], [60, -186], [78, -150]], { wash: PZ.crust, washA: 1, w: 2.2, col: PZ.char, key: key + 1 }); shadeG(f.path, 0, -200, 0, 0, '#f8d8a0', 0.3);
  for (let i = 0; i < 3; i++) pencil(spline([[-60 + i * 20, -170 + i * 6], [0, -180 + i * 12], [60 - i * 20, -170 + i * 6]], false, 5), { w: 5, col: i === 1 ? PZ.sauce : PZ.mozzD, pass2: false });
  for (let i = 0; i < 5; i++) ell(-50 + i * 25, -186 + Math.abs(i - 2) * 6, 6, 4, { wash: PZ.char, washA: 0.8, line: false }); pop();
}
function stufa(x, y, s, t, key = 18080) {                               // медная печка разносчика: цилиндр с куполом-крышкой, ручки, жар
  push(x, y, s); const b = rect(-80, -120, 160, 120, { wash: PZ.copper, washA: 1, w: 2.4, col: '#4a2008', key }); shadeG(b.path, 80, 0, -40, 0, '#6a2a08', 0.5); pencil([[-50, -120], [-50, 0]], { w: 6, col: PZ.copperL, a: 0.6, pass2: false });
  for (let i = 0; i < 3; i++) pencil([[-80, -96 + i * 36], [80, -96 + i * 36]], { w: 2, col: '#6a2a08', a: 0.6, pass2: false });
  const d = blob([[-86, -120], [-70, -176], [0, -204], [70, -176], [86, -120]], { wash: PZ.copper, washA: 1, w: 2.4, col: '#4a2008', key: key + 1 }); shadeG(d.path, 80, -120, -40, -200, '#6a2a08', 0.5); pencil(spline([[-50, -150], [0, -190], [40, -170]], false, 5), { w: 5, col: PZ.copperL, a: 0.7, pass2: false });
  ell(0, -210, 14, 10, { wash: '#2a1a0a', washA: 1, w: 1.6 }); for (const sd of [-1, 1]) pencil(spline([[sd * 80, -100], [sd * 110, -90], [sd * 80, -60]], false, 5), { w: 5, col: '#2a1a0a', pass2: false });
  steamWisps(0, -220, 0.5, t, 3, key + 5, 0.4); pop();
}
function woodOven(x, y, s, t, o = {}) {                                 // дровяная печь-купол: мозаика плиток, устье с огнём и дровами; o.tile — цвет плиток, o.fire 0..1, o.txt — надпись
  const f = o.fire == null ? 1 : o.fire, k = o.key || 18090; push(x, y, s);
  const dome = blob([[-330, 0], [-320, -170], [-230, -300], [0, -350], [230, -300], [320, -170], [330, 0]], { wash: o.tile || '#c8a040', washA: 1, w: 3, col: '#2a1a0a', key: k }); shadeG(dome.path, 330, 0, -120, -300, '#3a1a08', 0.55);
  ctx.save(); ctx.clip(dome.path); for (let r = 0; r < 9; r++) for (let i = 0; i < 18; i++) { const yy = -20 - r * 38, xx = -340 + i * 40 + (r % 2) * 20; rect(xx, yy - 34, 36, 34, { wash: (i + r) % 3 ? (o.tile || '#c8a040') : (o.tile2 || '#e8c860'), washA: 0.9, w: 0.8, col: '#3a2a10' }); } ctx.restore();
  pencil(spline([[-330, 0], [-320, -170], [-230, -300], [0, -350], [230, -300], [320, -170], [330, 0]], false, 8), { w: 4, col: '#2a1a0a' });
  rect(-360, 0, 720, 70, { wash: '#8a7a6a', washA: 1, w: 2.4, col: '#2a1a0a' }); for (let i = 0; i < 8; i++) pencil([[-360 + i * 90, 0], [-360 + i * 90, 70]], { w: 1.4, col: '#4a3a2a', a: 0.6, pass2: false });
  if (o.txt) { rect(-170, -300, 340, 60, { wash: '#f4ecd6', washA: 1, w: 2, col: '#2a1a0a' }); txt(o.txt, 0, -258, 40, { font: 'Osw', col: '#8a1a0e' }); }
  const m = blob([[-150, 0], [-140, -110], [-80, -170], [0, -186], [80, -170], [140, -110], [150, 0]], { wash: '#1a0804', washA: 1, w: 3.4, col: '#0a0402', key: k + 1 });
  ctx.save(); ctx.clip(m.path); glow(0, -50, 260, 'rgba(255,130,40,1)', 0.75 * f); for (let i = 0; i < 4; i++) rect(-120 + i * 50, -40 - i * 6, 160, 24, { wash: '#4a2410', washA: 1, w: 1.4, col: '#1a0804', rot: 0.1 });
  ctx.globalCompositeOperation = 'lighter'; for (let i = 0; i < 9; i++) { const fx = -110 + i * 28, h = (70 + Math.sin(t * 9 + i * 2.1) * 30 + (i % 3) * 20) * f; ctx.fillStyle = i % 2 ? '#ffb040' : '#ff6a1a'; ctx.globalAlpha = 0.8; ctx.beginPath(); ctx.moveTo(fx - 18, -30); ctx.quadraticCurveTo(fx + Math.sin(t * 7 + i) * 10, -30 - h, fx + 18, -30); ctx.fill(); ctx.fillStyle = '#fff2b0'; ctx.beginPath(); ctx.moveTo(fx - 7, -30); ctx.quadraticCurveTo(fx, -30 - h * 0.5, fx + 7, -30); ctx.fill(); } ctx.restore();
  pencil([[-140, -120], [-80, -176], [0, -190], [80, -176], [140, -120]], { w: 8, col: o.arch || '#d8c8a8', pass2: false }); pop();
}
function peel(x, y, s, rot = 0, withPizza = 0, t = 0, key = 18100) {   // лопата пиццайоло: длинная ручка, круглое полотно, опционально пицца
  push(x, y, s, rot); pencil([[0, 0], [0, 420]], { w: 16, col: '#8a5a2a' }); pencil([[-4, 0], [-4, 420]], { w: 4, col: '#c89a5a', a: 0.7, pass2: false });
  const p = ell(0, -110, 130, 120, { wash: '#c8ccd0', washA: 1, w: 2.4, col: '#3a3e44', key }); shadeG(p.path, 120, 0, -60, -200, '#6a6e74', 0.4); pencil([[-60, -180], [-20, -200]], { w: 5, col: '#ffffff', a: 0.6, pass2: false });
  if (withPizza) margherita(0, -110, 0.4, t, { tilt: 0.92, steam: withPizza, key: key + 5 }); pop();
}
function royalLetter(x, y, s, rot = 0, o = {}) {                       // письмо «Casa Reale»: герб-корона, рукопись, подпись, сургучная печать; o.hl — подсветка «Brandi», o.fake — штамп
  push(x, y, s, rot); const p = rect(-170, -230, 340, 460, { wash: PZ.paper, washA: 1, w: 2.4, col: '#6a5a3a', key: o.key || 18110 }); shadeG(p.path, 170, 230, -100, -100, '#c8b088', 0.4);
  pencil([[-150, -210], [150, -210], [150, 210], [-150, 210], [-150, -210]], { w: 1.6, col: '#c8a050', a: 0.7, pass2: false });
  push(0, -170, 1); poly([[-30, 0], [-34, -30], [-16, -16], [0, -38], [16, -16], [34, -30], [30, 0]], { wash: '#d8a830', washA: 1, w: 1.6, col: '#6a4a08' }); pop(); txt('CASA REALE', 0, -120, 26, { font: 'Osw', col: '#3a2a1a' });
  const lines = ['Napoli, 11 Giugno 1889', 'Pregiatissimo Sig.', 'Raffaele Esposito', 'le tre qualità di pizze', 'da Lei confezionate…', 'trovate buonissime.'];
  lines.forEach((l, i) => { const brandi = o.hl && i === 2; txt(brandi ? 'Raffaele Esposito Brandi' : l, -140, -76 + i * 36, 22, { font: 'Hand', col: '#2a1a4a', align: 'left' }); if (brandi && o.hl > 0) { rect(-144, -98 + i * 36, 290 * o.hl, 30, { wash: '#f8e040', washA: 0.45, line: false }); } });
  txt('Galli Camillo', 60, 160, 26, { font: 'Hand', col: '#2a1a4a' }); pencil(spline([[10, 172], [60, 166], [130, 176]], false, 5), { w: 1.6, col: '#2a1a4a', pass2: false });
  const sl = ell(-100, 160, 34, 34, { wash: '#a8180e', washA: 1, w: 2, col: '#4a0804' }); shadeG(sl.path, -80, 180, -120, 130, '#ff6a4a', 0.4); txt('R', -100, 170, 30, { font: 'Osw', col: '#5a0804' });
  if (o.fake) { push(0, 20, o.fake, -0.2); rect(-160, -40, 320, 80, { wash: '#c8221a', washA: 0.15, w: 6, col: '#c8221a' }); txt(o.fakeTxt || 'ФАЛЬШИВКА?', 0, 18, 48, { font: 'Osw', col: '#c8221a' }); pop(); }
  pop();
}
function newspaper(x, y, s, rot = 0, title = 'IL PUNGOLO', o = {}) {    // газета 1889: шапка, колонки, гравюра; o.blank — пустая колонка «нет визита»
  push(x, y, s, rot); const p = rect(-200, -270, 400, 540, { wash: '#efe6cc', washA: 1, w: 2, col: '#5a5040', key: o.key || 18120 }); shadeG(p.path, 200, 270, -100, -200, '#c8b890', 0.4);
  txt(title, 0, -212, 46, { font: 'Osw', col: '#1a1a1a' }); pencil([[-180, -196], [180, -196]], { w: 3, col: '#1a1a1a', pass2: false }); txt(o.date || 'Napoli · Giugno 1889', 0, -174, 18, { font: 'Hand', col: '#3a3a3a' });
  for (let c = 0; c < 3; c++) for (let i = 0; i < 16; i++) { if (o.blank && c === 1 && i > 3 && i < 13) continue; const w = 100 - ((i * 7 + c * 3) % 4) * 12; pencil([[-176 + c * 122, -150 + i * 24], [-176 + c * 122 + w, -150 + i * 24]], { w: 3, col: '#6a6458', a: 0.7, pass2: false }); }
  if (o.blank) { rect(-56, -66, 112, 210, { wash: '#f8f2dc', washA: 1, w: 1.4, col: '#a89a7a' }); txt('?', 0, 60, 90, { font: 'Osw', col: '#c8221a', a: o.blank }); }
  rect(-176, 160, 160, 90, { wash: '#c8bca0', washA: 1, w: 1.4, col: '#5a5040' }); for (let i = 0; i < 6; i++) pencil([[-170, 166 + i * 14], [-22, 166 + i * 14]], { w: 1, col: '#6a6458', a: 0.5, pass2: false }); pop();
}
function magnifier(x, y, s, rot = 0, a = 0.25) {                        // лупа: латунный обод, стекло с бликом, деревянная ручка
  push(x, y, s, rot); pencil([[0, 70], [0, 230]], { w: 22, col: '#5a3a1a' }); pencil([[-5, 80], [-5, 220]], { w: 5, col: '#9a6a3a', a: 0.7, pass2: false });
  ell(0, 0, 80, 80, { wash: '#d8ecf4', washA: a, w: 10, col: '#c8a040' }); pencil(spline([[-50, -30], [-30, -56], [0, -64]], false, 4), { w: 6, col: '#ffffff', a: 0.7, pass2: false }); pop();
}
function book1866(x, y, s, t, o = {}) {                                 // раскрытая книга «Usi e costumi di Napoli» 1866: гравюра пиццайоло, строки, закладка
  push(x, y, s); const L = blob([[-420, 0], [-400, -330], [-10, -300], [0, 20]], { wash: '#f2e8cc', washA: 1, w: 2.6, col: '#5a4a2a', key: 18140 }), R = blob([[0, 20], [10, -300], [400, -330], [420, 0]], { wash: '#f4ecd2', washA: 1, w: 2.6, col: '#5a4a2a', key: 18141 });
  shadeG(L.path, 0, 0, -200, 0, '#b8a478', 0.5); shadeG(R.path, 0, 0, 200, 0, '#b8a478', 0.45);
  txt('USI E COSTUMI', -210, -270, 26, { font: 'Osw', col: '#3a2a1a' }); txt('DI NAPOLI · 1866', -210, -238, 22, { font: 'Osw', col: '#6a1a0e' });
  rect(-360, -210, 300, 170, { wash: '#e0d4b0', washA: 1, w: 1.6, col: '#3a2a1a' }); human(-210, -50, 0.45, t, { body: '#f0ece0', legs: '#3a3a3a', hair: '#2a1a0a', face: 'smile', armL: 'hold', armR: 'up', seed: 1866 }); for (let i = 0; i < 9; i++) pencil([[-350 + i * 34, -200], [-360 + i * 34, -46]], { w: 1, col: '#5a4a2a', a: 0.3, pass2: false });
  for (let i = 0; i < 9; i++) pencil([[40, -270 + i * 26], [360 - (i % 3) * 30, -276 + i * 26]], { w: 2.4, col: '#6a5a40', a: 0.6, pass2: false });
  const w = ['pomodoro', 'mozzarella', 'basilico']; w.forEach((s, i) => { const k = o.hl ? clamp(o.hl * 3 - i) : 0; txt(s, 90 + i * 90, -30 + (i % 2) * 34, 26, { font: 'Hand', col: '#2a1a4a', align: 'center' }); if (k > 0) rect(40 + i * 90, -54 + (i % 2) * 34, 100 * k, 30, { wash: ['#e8442a', '#ffffff', '#4aa83a'][i], washA: 0.45, line: false }); });
  pencil([[300, -330], [300, -400]], { w: 16, col: '#a81a1a', pass2: false }); pop();
}
Object.assign(PROPS, {
  sliceP() { pizzaSlice(0, -10, 0.55, -0.3, 18160); },
  foldP() { foldPizza(0, 10, 0.4, -0.5, 18165); },
  magnP() { magnifier(0, -60, 0.5, 0.4); },
  peelP() { push(0, 0, 0.6, -0.2); pencil([[0, 0], [0, 200]], { w: 12, col: '#8a5a2a' }); ell(0, -90, 110, 100, { wash: '#c8ccd0', washA: 1, w: 2, col: '#3a3e44' }); margherita(0, -90, 0.32, 0, { tilt: 0.92, key: 18170 }); pop(); },
  trayP() { push(0, -20, 0.5); ell(0, 0, 240, 50, { wash: '#d8dce0', washA: 1, w: 2.4, col: '#3a3e44' }); margherita(0, -10, 0.7, 0, { tilt: 0.24, key: 18175 }); pop(); },
  stampP() { push(0, -30, 0.6, 0.2); rect(-14, -110, 28, 90, { wash: '#6a3a1a', washA: 1, w: 1.4 }); ell(0, -116, 30, 18, { wash: '#7a4424', washA: 1, w: 1.6 }); rect(-50, -24, 100, 24, { wash: '#c8221a', washA: 1, w: 1.6 }); pop(); },
  letterRP() { royalLetter(0, -40, 0.3, 0.1, { key: 18180 }); },
  pizza12P() { push(0, -10, 0.55); for (let i = 0; i < 6; i++) { ell(0, -i * 16, 120, 30, { wash: i % 2 ? '#e8c890' : '#d8b070', washA: 1, w: 1.6, col: '#6a4a1a' }); } pop(); },
});
