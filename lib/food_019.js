/* 019 — еда выпуска «Бургер»: бургер в разрезе-сбоку (булка с кунжутом, салат, сыр каплями, котлета с подпалинами, томат, огурчики, соус), гамбургская котлета на тарелке,
   сырой фарш-лепёшка, булка-половинка, бутылки кетчупа и горчицы, пароход-эмигрант, контур карты США с флажками-претендентами. Реквизит Тома — PROPS. */
const BG = { bun: '#d88a34', bunL: '#f6c46a', bunD: '#8a4610', sesame: '#fff4cc', patty: '#5e3018', pattyD: '#2a120a', pattyL: '#9a5430', cheese: '#f6b422', cheeseD: '#c87410',
  lettuce: '#74b844', lettuceD: '#2e6a1a', tomato: '#d8341e', tomatoL: '#ff8a6a', ketchup: '#c81e10', ketchupL: '#ff6a4a', mustard: '#eeb81e', mustardL: '#fff07a', pickle: '#5e8e2a', onion: '#efe0f2', raw: '#c8505a', rawL: '#ec8a90' };

function sesameDome(x, y, w, h, key = 19000, o = {}) {                    // верхняя булка: купол, румяный верх, кунжут, блик
  const cp = [[x - w, y], [x - w * 0.98, y - h * 0.55], [x - w * 0.7, y - h * 0.95], [x, y - h * 1.08], [x + w * 0.7, y - h * 0.95], [x + w * 0.98, y - h * 0.55], [x + w, y], [x, y + h * 0.12]];
  const b = blob(cp, { wash: BG.bun, washA: 1, w: 2.6, col: BG.bunD, key });
  shadeG(b.path, x, y - h, x, y + h * 0.1, '#7a3a0a', 0.35); shadeG(b.path, x - w * 0.6, y - h * 0.9, x + w * 0.4, y, BG.bunL, 0.45);
  hatch(b.path, b.bb, { gap: 8, a: 0.08, col: BG.bunD, ang: 0.6, key: key + 1, w: 1 });
  pencil(spline([[x - w * 0.62, y - h * 0.7], [x - w * 0.2, y - h * 0.98], [x + w * 0.18, y - h * 0.98]], false, 6), { w: Math.max(3, w * 0.05), col: '#fff0c8', a: 0.65, pass2: false });
  const r = rng(key + 2); const n = o.seeds || 26;
  for (let i = 0; i < n; i++) { const a = -2.9 + r() * 2.7, rr = 0.25 + r() * 0.65, sx = x + Math.cos(a) * w * rr * 1.05, sy = y - h * 0.15 + Math.sin(a) * h * rr * 0.95; ell(sx, sy, Math.max(2, w * 0.022), Math.max(1.2, w * 0.012), { wash: BG.sesame, washA: 1, w: 0.8, col: '#a87a3a', rot: r() * 3 }); }
  pencil([[x - w * 0.96, y - 2], [x + w * 0.96, y - 2]], { w: Math.max(2, w * 0.03), col: '#f2d8a0', a: 0.6, pass2: false });
  return b;
}
function bunBase(x, y, w, h, key = 19010) {                               // нижняя булка: плоская подошва, срез светлый
  const b = blob([[x - w, y - h], [x + w, y - h], [x + w * 0.98, y - h * 0.3], [x + w * 0.8, y], [x - w * 0.8, y], [x - w * 0.98, y - h * 0.3]], { wash: BG.bun, washA: 1, w: 2.4, col: BG.bunD, key });
  shadeG(b.path, x, y, x, y - h, '#6a2e08', 0.45); rect(x - w, y - h - 4, w * 2, h * 0.32, { wash: '#f4dca8', washA: 0.9, line: false });
  return b;
}
function pattyRock(x, y, w, h, key = 19020, o = {}) {                     // котлета сбоку: неровный край, подпалины гриля, сок, пар
  const r = rng(key); const pts = []; for (let i = 0; i <= 14; i++) { const k = i / 14; pts.push([x - w + k * w * 2, y - h + (r() - 0.5) * h * 0.22]); } for (let i = 14; i >= 0; i--) { const k = i / 14; pts.push([x - w + k * w * 2, y + (r() - 0.5) * h * 0.18]); }
  const p = blob(pts, { wash: BG.patty, washA: 1, w: 2.6, col: BG.pattyD, key: key + 1 });
  shadeG(p.path, x, y - h, x, y, BG.pattyL, 0.45); hatch(p.path, p.bb, { gap: 6, a: 0.22, col: BG.pattyD, ang: 1.1, key: key + 2, w: 1.2 });
  for (let i = 0; i < Math.max(10, w / 9); i++) { const px = x - w * 0.95 + r() * w * 1.9, py = y - h * 0.85 + r() * h * 0.7; ell(px, py, 2 + r() * w * 0.025, 1.5 + r() * h * 0.06, { wash: i % 3 ? '#3a1a0a' : '#b06a3a', washA: 0.8, line: false }); }
  for (let i = 0; i < 4; i++) pencil([[x - w * 0.7 + i * w * 0.42, y - h * 0.94], [x - w * 0.6 + i * w * 0.42, y - h * 0.94]], { w: Math.max(2, h * 0.1), col: '#1a0804', a: 0.7, pass2: false });
  if (o.juice) for (let i = 0; i < 3; i++) { const dx = x - w * 0.6 + i * w * 0.6; blob([[dx - 6, y], [dx + 6, y], [dx + 3, y + h * 0.35], [dx, y + h * 0.42], [dx - 3, y + h * 0.35]], { wash: '#7a3a14', washA: 0.85, w: 1, col: BG.pattyD }); ell(dx - 1, y + h * 0.18, 1.6, 4, { wash: '#ffd8a0', washA: 0.8, line: false }); }
  return p;
}
function cheeseDrip(x, y, w, t = 0, key = 19030, o = {}) {                // ломтик сыра: квадрат свисает каплями по краю
  const r = rng(key); const pts = [[x - w, y - 6]]; const n = 7; for (let i = 0; i <= n; i++) { const k = i / n, dx = x - w + k * w * 2, ln = (i % 2 ? 18 : 40) * (o.long || 1) * (0.6 + r() * 0.8) + Math.sin(t * 2 + i) * 2; pts.push([dx - w / n * 0.4, y + 6], [dx, y + ln], [dx + w / n * 0.4, y + 6]); } pts.push([x + w, y - 6]);
  const c = shape(pts, { wash: BG.cheese, washA: 1, w: 2, col: BG.cheeseD, key: key + 1 }); shadeG(c.path, x, y + 40, x, y - 6, '#fff090', 0.5);
  pencil([[x - w * 0.8, y - 2], [x + w * 0.2, y - 2]], { w: 3, col: '#fff4b0', a: 0.75, pass2: false }); return c;
}
function lettuceRuffle(x, y, w, key = 19040) {                            // салат: волнистая кромка торчит из-под булки
  const pts = [[x - w * 1.04, y]]; for (let i = 0; i <= 16; i++) { const k = i / 16; pts.push([x - w * 1.04 + k * w * 2.08, y + (i % 2 ? 16 : -2)]); } pts.push([x + w * 1.04, y - 12], [x - w * 1.04, y - 12]);
  const l = shape(pts, { wash: BG.lettuce, washA: 1, w: 1.8, col: BG.lettuceD, key }); shadeG(l.path, x, y + 16, x, y - 12, '#c8f08a', 0.4);
  for (let i = 0; i < 8; i++) pencil([[x - w + i * w / 4, y - 8], [x - w + i * w / 4 + 6, y + 8]], { w: 1.2, col: '#d8f8a0', a: 0.6, pass2: false });
}
function tomatoSlices(x, y, w, key = 19050) {                             // ломтики томата: красные полукружья с семенами
  for (const dx of [-0.5, 0.5]) { const cx = x + dx * w, s = rect(cx - w * 0.48, y - 10, w * 0.96, 20, { wash: BG.tomato, washA: 1, w: 1.6, col: '#7a1408', key: key + (dx > 0) }); shadeG(s.path, cx, y + 10, cx, y - 10, BG.tomatoL, 0.4); for (let i = 0; i < 4; i++) ell(cx - w * 0.3 + i * w * 0.2, y, 3, 2, { wash: '#ffe0a0', washA: 0.9, line: false }); }
}
/* бургер сбоку: (x,y) — низ нижней булки, ширина ≈ 2·150·s. o.bite 0..1 — откушенный правый край, o.steam, o.key, o.tall — выше стопка, o.t */
function burger(x, y, s, t = 0, o = {}) {
  const k = o.key || 19100, w = 150 * s; push(0, 0, 1);
  if (o.shadow !== false) ell(x, y + 4 * s, w * 1.15, 14 * s, { wash: '#000000', washA: 0.22, line: false });
  bunBase(x, y, w * 0.96, 36 * s, k + 1);
  ell(x, y - 40 * s, w * 0.98, 7 * s, { wash: BG.ketchup, washA: 0.9, line: false });
  pattyRock(x, y - 44 * s, w * 1.02, 44 * s, k + 3, { juice: 1 });
  cheeseDrip(x, y - 92 * s, w * 1.02, t, k + 5);
  if (o.tall) { pattyRock(x, y - 100 * s, w * 1.0, 40 * s, k + 7); cheeseDrip(x, y - 144 * s, w * 1.0, t, k + 9, { long: 0.7 }); }
  const yy = y - (o.tall ? 152 : 100) * s;
  tomatoSlices(x, yy - 10 * s, w * 0.92, k + 11);
  for (let i = 0; i < 3; i++) ell(x - w * 0.55 + i * w * 0.5, yy - 22 * s, 18 * s, 6 * s, { wash: BG.pickle, washA: 1, w: 1.2, col: '#2a4a0a' });
  ell(x, yy - 26 * s, w * 0.9, 5 * s, { wash: BG.mustard, washA: 0.9, line: false });
  lettuceRuffle(x, yy - 28 * s, w * 1.02, k + 13);
  const top = sesameDome(x, yy - 38 * s, w, 110 * s, k + 15);
  if (o.bite) { const bx = x + w * 0.95, by = yy - 40 * s, R = 70 * s * o.bite; ctx.save(); ctx.globalCompositeOperation = 'destination-out'; for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.arc(bx - i * 2 * s, by - 120 * s + i * 50 * s, R * (0.8 + (i % 2) * 0.25), 0, 6.3); ctx.fill(); } ctx.restore(); }
  if (o.steam) steamWisps(x, yy - 150 * s, s * 1.2, t, 3, k + 20, 0.32 * o.steam);
  pop();
}
function hamSteak(x, y, s, t = 0, o = {}) {                               // гамбургский стейк на тарелке (вид 3/4): котлета, жареный лук, подливка, без булки
  const k = o.key || 19200;
  const pl = ell(x, y, 180 * s, 60 * s, { wash: o.plate || '#eef0f2', washA: 1, w: 2.4, col: '#5a6068', key: k }); shadeG(pl.path, x, y + 60 * s, x, y - 60 * s, '#9aa4b0', 0.35); ell(x, y, 140 * s, 44 * s, { wash: '#ffffff', washA: 0.5, w: 1, col: '#a8b0b8' });
  ell(x + 20 * s, y + 4 * s, 110 * s, 30 * s, { wash: '#7a3a14', washA: 0.8, line: false });
  const p = blob(ellPts(x, y - 12 * s, 92 * s, 36 * s, 0, 0, 12).map((q, i) => [q[0] + Math.sin(i * 2.3) * 4 * s, q[1] - (q[1] < y - 12 * s ? 14 * s : 0)]), { wash: BG.patty, washA: 1, w: 2.4, col: BG.pattyD, key: k + 1 });
  shadeG(p.path, x, y + 20 * s, x, y - 40 * s, BG.pattyL, 0.45); hatch(p.path, p.bb, { gap: 5, a: 0.2, col: BG.pattyD, ang: 1, key: k + 2, w: 1 });
  for (let i = 0; i < 4; i++) pencil([[x - 60 * s + i * 34 * s, y - 40 * s], [x - 40 * s + i * 34 * s, y - 20 * s]], { w: 5 * s, col: '#1a0804', a: 0.6, pass2: false });
  ell(x - 30 * s, y - 34 * s, 30 * s, 6 * s, { wash: '#ffd8a0', washA: 0.55, line: false });
  for (let i = 0; i < 7; i++) { const a = i * 0.9; pencil(spline([[x + 30 * s + Math.cos(a) * 30 * s, y - 40 * s], [x + 50 * s + Math.cos(a + 1) * 30 * s, y - 50 * s], [x + 70 * s + Math.cos(a) * 20 * s, y - 42 * s]], false, 5), { w: 5 * s, col: '#c8822a', a: 0.9, pass2: false }); }
  if (o.steam) steamWisps(x, y - 60 * s, s, t, 3, k + 5, 0.35);
}
function rawPatty(x, y, s, t = 0, o = {}) {                                // сырая рубленая лепёшка (вид сверху-сбоку): розовые волокна, жир
  const k = o.key || 19220; const p = blob(ellPts(x, y, 80 * s, 30 * s, 0, 0, 12).map((q, i) => [q[0] + Math.sin(i * 1.7) * 3 * s, q[1] + Math.cos(i * 2.1) * 2 * s]), { wash: BG.raw, washA: 1, w: 2, col: '#6a1a1a', key: k });
  shadeG(p.path, x, y + 30 * s, x, y - 30 * s, BG.rawL, 0.5); const r = rng(k + 1);
  for (let i = 0; i < 26; i++) { const px = x - 66 * s + r() * 132 * s, py = y - 22 * s + r() * 44 * s; pencil(spline([[px, py], [px + 6 * s, py - 3 * s], [px + 10 * s, py + 2 * s]], false, 4), { w: 2 * s + 1, col: i % 3 ? '#f2a0a6' : '#f8e8e0', a: 0.8, pass2: false }); }
}
function sauceBottle(x, y, s, rot = 0, kind = 'ketchup', key = 19240) {     // мягкая бутылка-дозатор: красная/жёлтая, носик, этикетка
  const c = kind === 'ketchup' ? BG.ketchup : BG.mustard, cl = kind === 'ketchup' ? BG.ketchupL : BG.mustardL; push(x, y, s, rot);
  const b = blob([[-34, 0], [-38, -120], [-30, -150], [-12, -164], [12, -164], [30, -150], [38, -120], [34, 0]], { wash: c, washA: 1, w: 2.2, col: '#3a1a08', key }); shadeG(b.path, 38, 0, -20, 0, '#000000', 0.3);
  ell(-20, -90, 6, 40, { wash: cl, washA: 0.7, line: false }); rect(-30, -96, 60, 38, { wash: '#fbf4e2', washA: 1, w: 1.2, col: '#5a4a2a' }); txt(kind === 'ketchup' ? 'KETCHUP' : 'MUSTARD', 0, -70, 11, { font: 'Osw', col: c });
  poly([[-10, -164], [10, -164], [4, -200], [-4, -200]], { wash: kind === 'ketchup' ? '#f4f0e8' : '#c81e10', washA: 1, w: 1.4, col: '#3a1a08' }); pop();
}
function steamer(x, y, s, t = 0, o = {}) {                                // пароход 1850-х сбоку: чёрный корпус, красная полоса, две трубы с дымом, колесо, мачты
  const k = o.key || 19300; push(x, y, s);
  const h = shape([[-420, -60], [420, -60], [380, 40], [-360, 40], [-440, -70]], { wash: '#1e2026', washA: 1, w: 2.6, col: '#08080a', key: k }); shadeG(h.path, 0, 40, 0, -60, '#4a4e58', 0.4);
  rect(-420, -60, 840, 14, { wash: '#b8221a', washA: 1, line: false }); for (let i = 0; i < 12; i++) ell(-330 + i * 58, -24, 7, 7, { wash: '#f4d890', washA: 0.9, w: 1, col: '#3a3a3a' });
  txt(o.name || 'HAMBURG', -200, 20, 30, { font: 'Osw', col: '#e8d8b0' });
  const pb = ell(40, -60, 90, 80, { wash: '#3a3a42', washA: 1, w: 2, col: '#0a0a0a' }); for (let i = 0; i < 10; i++) { const a = i / 10 * 3.14 + t * 2; pencil([[40, -60], [40 + Math.cos(a) * 86, -60 - Math.abs(Math.sin(a)) * 76]], { w: 3, col: '#8a1a14', pass2: false }); }
  rect(-260, -130, 420, 70, { wash: '#efe6d0', washA: 1, w: 1.8, col: '#3a3a3a' }); for (let i = 0; i < 8; i++) rect(-240 + i * 50, -116, 30, 24, { wash: '#2a3a5a', washA: 1, w: 1 });
  for (const fx of [-120, 60]) { const f = rect(fx - 26, -320, 52, 190, { wash: '#1e1e22', washA: 1, w: 2, col: '#000' }); rect(fx - 26, -300, 52, 28, { wash: '#b8221a', washA: 1, line: false }); rect(fx - 26, -260, 52, 10, { wash: '#f4f0e8', washA: 1, line: false });
    for (let i = 0; i < 6; i++) { const q = (t * 0.35 + i / 6) % 1; ell(fx - q * 260, -330 - q * 240, 30 + q * 90, 20 + q * 50, { wash: '#4a4a52', washA: 0.5 * (1 - q), line: false }); } }
  for (const mx of [-340, 300]) { pencil([[mx, -60], [mx, -460]], { w: 6, col: '#3a2a1a' }); pencil([[mx - 80, -380], [mx + 80, -380]], { w: 4, col: '#3a2a1a' }); pencil([[mx, -460], [mx - 200, -60]], { w: 1.2, col: '#2a2a2a', a: 0.6, pass2: false }); pencil([[mx, -460], [mx + 160, -60]], { w: 1.2, col: '#2a2a2a', a: 0.6, pass2: false }); }
  push(-340, -470, 1); poly([[0, 0], [60 + Math.sin(t * 6) * 6, 14], [0, 30]], { wash: '#c8221a', washA: 1, w: 1.4, col: '#4a0a08' }); pop();
  pop();
}
const US_OUT = [[-300, -90], [-150, -110], [40, -112], [150, -100], [200, -130], [250, -150], [290, -140], [270, -100], [300, -60], [250, -20], [230, 40], [250, 110], [230, 120], [200, 60], [130, 50], [60, 70], [20, 120], [-30, 90], [-90, 60], [-170, 60], [-240, 20], [-300, -20], [-310, -60]];
function usMap(x, y, s, t = 0, o = {}) {                                  // карта США (условный контур), штаты-пунктир, флажки претендентов (o.pins: [[px,py,col,label,t0]])
  const k = o.key || 19400; push(x, y, s);
  const p = blob(US_OUT, { wash: o.land || '#e8d8a8', washA: 1, w: 3, col: '#5a4a2a', key: k }); shadeG(p.path, -300, 0, 300, 0, '#c8a868', 0.4); hatch(p.path, p.bb, { gap: 9, a: 0.08, col: '#8a6a3a', ang: 0.5, key: k + 1, w: 1 });
  for (let i = 0; i < 6; i++) pencil([[-260 + i * 90, -100], [-250 + i * 92, 60]], { w: 1.4, col: '#8a7a5a', a: 0.4, gap: true, pass2: false });
  for (let i = 0; i < 3; i++) pencil([[-290, -50 + i * 40], [260, -60 + i * 44]], { w: 1.4, col: '#8a7a5a', a: 0.35, gap: true, pass2: false });
  for (const [px, py, col, lab, t0] of (o.pins || [])) { if (t < t0) continue; const q = popK(t, t0, 0.35); push(px, py, q); pencil([[0, 0], [0, -60]], { w: 3, col: '#3a2a1a', pass2: false }); poly([[0, -60], [44, -50], [0, -38]], { wash: col, washA: 1, w: 1.4, col: '#2a1a0a' }); ell(0, 0, 6, 3, { wash: '#2a1a0a', washA: 1, line: false }); if (lab) txt(lab, 4, 26, 22, { font: 'Osw', col: '#2a1a0a' }); pop(); }
  pop();
}
function flagHH(x, y, s, t = 0) {                                          // флажок Гамбурга: красный, белый замок с тремя башнями
  push(x, y, s); pencil([[0, 0], [0, -120]], { w: 4, col: '#4a3a2a', pass2: false }); const f = poly([[0, -120], [90 + Math.sin(t * 5) * 6, -112], [90 + Math.sin(t * 5 + 1) * 6, -64], [0, -70]], { wash: '#c81e14', washA: 1, w: 1.6, col: '#4a0a08' });
  for (const dx of [26, 44, 62]) rect(dx - 6, -104 + (dx === 44 ? -6 : 0), 12, 24, { wash: '#ffffff', washA: 1, line: false }); rect(22, -86, 48, 12, { wash: '#ffffff', washA: 1, line: false }); pop();
}
Object.assign(PROPS, {
  burgerP() { burger(0, 30, 0.42, 0, { key: 19500, shadow: false }); },
  burgerBiteP() { burger(0, 30, 0.42, 0, { key: 19500, shadow: false, bite: 1 }); },
  cleaverP() { push(0, -20, 0.6, -0.3); rect(-12, 0, 24, 120, { wash: '#5a3418', washA: 1, w: 1.6 }); const b = poly([[-14, 0], [-14, -150], [110, -160], [110, -10]], { wash: '#c8ccd2', washA: 1, w: 2, col: '#3a3e44' }); shadeG(b.path, 110, 0, -14, 0, '#6a7078', 0.4); pencil([[-10, -150], [106, -158]], { w: 3, col: '#ffffff', a: 0.7, pass2: false }); ell(90, -130, 8, 8, { wash: '#3a3e44', washA: 1, line: false }); pop(); },
  spatP() { push(0, -10, 0.6, -0.4); rect(-10, 0, 20, 140, { wash: '#2a2a2a', washA: 1, w: 1.4 }); rect(-60, -110, 120, 110, { wash: '#c8ccd2', washA: 1, w: 2, col: '#3a3e44' }); for (let i = 0; i < 4; i++) rect(-44 + i * 26, -96, 12, 60, { wash: '#7a7e88', washA: 1, line: false }); pop(); },
  spatPattyP() { PROPS.spatP(); push(0, -10, 0.6, -0.4); pattyRock(0, -112, 80, 28, 19510); cheeseDrip(0, -140, 80, 0, 19512, { long: 0.6 }); pop(); },
  forkP19() { push(0, -10, 0.55, -0.2); rect(-6, 0, 12, 120, { wash: '#c8ccd2', washA: 1, w: 1.4 }); for (let i = 0; i < 4; i++) rect(-18 + i * 11, -70, 6, 70, { wash: '#d8dce2', washA: 1, w: 1 }); rect(-20, -10, 40, 14, { wash: '#c8ccd2', washA: 1, w: 1 }); pop(); },
  forkPattyP() { PROPS.forkP19(); push(0, -60, 0.55, -0.2); pattyRock(0, -40, 70, 26, 19520); pop(); },
  rawPattyP() { rawPatty(0, -20, 0.6, 0, { key: 19530 }); },
  pinP() { push(0, -20, 0.6); pencil([[0, 40], [0, -80]], { w: 4, col: '#3a2a1a', pass2: false }); poly([[0, -80], [56, -66], [0, -52]], { wash: '#c81e10', washA: 1, w: 1.4, col: '#4a0a08' }); pop(); },
  brushP() { push(0, -20, 0.6, -0.3); rect(-8, 0, 16, 130, { wash: '#8a5a2a', washA: 1, w: 1.4 }); rect(-36, -60, 72, 60, { wash: '#4a3a2a', washA: 1, w: 1.6 }); rect(-36, -14, 72, 14, { wash: '#c8ccd2', washA: 1, w: 1 }); for (let i = 0; i < 8; i++) pencil([[-32 + i * 9, -60], [-32 + i * 9, -96]], { w: 3, col: '#e8dcc0', pass2: false }); pop(); },
  newsRollP() { push(0, -20, 0.55, 0.4); rect(-30, -100, 60, 200, { wash: '#efe8d4', washA: 1, w: 1.6, col: '#4a4a3a' }); for (let i = 0; i < 9; i++) pencil([[-24, -86 + i * 20], [24, -86 + i * 20]], { w: 2, col: '#7a7a6a', a: 0.6, pass2: false }); txt('EXTRA', 0, -60, 16, { font: 'Osw', col: '#8a1a0e' }); pop(); },
  bunHalfP() { push(0, -10, 0.45); sesameDome(0, 0, 120, 90, 19540, { seeds: 14 }); pop(); },
});
