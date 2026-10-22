/* «ТОМ НА ВКУС» — общие съедобные детали и люди эпохи (кандидат в engine/food.js после 001).
   leaf, crouton, egg, parmShard, parmWedge, lemon, wBottle, anchovy, woodBowl, plateCaesar, caesar3D (настоящий 3D-разворот тарелки),
   hat20 (шляпы 1920–50-х поверх human()), stache (усы), crumbs, steamP. Координаты как у всех деталей: x,y — опорная точка, s — масштаб. */
const FD = { leaf: '#6f9a2e', leafL: '#b6d45a', leafD: '#2f4a10', rib: '#eef2c8', crout: '#d8a04a', croutD: '#8a5a1a', croutL: '#f4d08a', parm: '#f2e2a8', parmD: '#b8a060', egg: '#f6efe0', yolk: '#f2a81e', sauce: '#e9dcae', oil: '#d8b84a', worc: '#3a1a0c', lemon: '#f2d23a' };

function leaf(x, y, s, rot = 0, o = {}) {                               // лист ромэна: волнистый край, светлая жилка, прожилки
  push(x, y, s, rot); const L = o.len || 220, Wd = o.wid || 62, k = o.key || 7000, cr = o.curl || 0;
  const P = []; for (let i = 0; i <= 14; i++) { const u = i / 14, w = Wd * Math.sin(Math.PI * Math.pow(u, 0.8)) * (1 + 0.08 * Math.sin(u * 40)); P.push([w + Math.sin(u * 30) * 3, -u * L]); }
  const Q = P.slice().reverse().map(([a, b], i) => [-a * (1 - cr * 0.4) - Math.sin(i * 1.7) * 3, b]);
  const sh = shape(spline(P.concat(Q), true, 4), { wash: o.col || FD.leaf, washA: o.a ?? 1, w: o.w || 2.2, col: FD.leafD, key: k });
  shadeG(sh.path, Wd, 0, -Wd * 0.2, 0, o.colD || '#3e6a14', 0.45); shadeG(sh.path, 0, -L, 0, -L * 0.4, FD.leafL, 0.55);
  pencil([[0, 6], [2, -L * 0.5], [0, -L * 0.92]], { w: 7 * (o.ribW || 1), col: FD.rib, a: 0.95, pass2: false, gap: false });
  for (let i = 1; i < 7; i++) { const yy = -L * i / 7.5; for (const sd of [-1, 1]) pencil([[0, yy], [sd * Wd * 0.45, yy - 20], [sd * Wd * 0.8, yy - 34]], { w: 1.4, col: FD.leafD, a: 0.35, pass2: false, gap: false }); }
  if (o.shine) glow(-Wd * 0.3, -L * 0.6, Wd * 0.8, 'rgba(255,255,230,1)', 0.25 * o.shine);
  pop();
}
function crouton(x, y, s, rot = 0, o = {}) {                            // гренка: кубик с поджаристыми гранями и порами
  push(x, y, s, rot); const k = o.key || 7100, r = rng(k);
  const top = poly([[-26, -14], [6, -26], [30, -12], [-2, 0]], { wash: FD.croutL, washA: 1, w: 2, col: '#4a2a08', key: k });
  const f1 = poly([[-26, -14], [-2, 0], [-2, 30], [-26, 16]], { wash: FD.crout, washA: 1, w: 2, col: '#4a2a08', key: k + 1 });
  const f2 = poly([[-2, 0], [30, -12], [30, 18], [-2, 30]], { wash: FD.croutD, washA: 1, w: 2, col: '#4a2a08', key: k + 2 });
  for (let i = 0; i < 9; i++) ell(-20 + r() * 46, -14 + r() * 40, 1.6 + r() * 2, 1.4 + r() * 1.6, { wash: '#6a3a0a', washA: 0.6, line: false });
  for (let i = 0; i < 4; i++) ell(-10 + r() * 30, -16 + r() * 10, 2, 1.6, { wash: '#3a7a2a', washA: 0.7, line: false });   // травки
  if (o.shine !== 0) glow(-6, -14, 22, 'rgba(255,240,190,1)', 0.25);
  pop();
}
function egg(x, y, s, rot = 0, o = {}) {
  push(x, y, s, rot); const e = blob(ellPts(0, 0, 40, 52, 0, 0, 16), { wash: FD.egg, washA: 1, w: 2.2, col: '#6a5a3a', key: o.key || 7200 }); shadeG(e.path, 40, 30, -20, -20, '#c8b48a', 0.5); glow(-14, -20, 18, 'rgba(255,255,255,1)', 0.6);
  if (o.cracked) { pencil([[-40, -4], [-24, 6], [-10, -6], [6, 8], [22, -4], [40, 4]], { w: 2.2, col: '#6a5a3a', pass2: false }); ell(0, 6, 22, 14, { wash: FD.yolk, washA: 1, w: 1.6, col: '#a85a08' }); }
  pop();
}
function parmShard(x, y, s, rot = 0, k = 7300) { push(x, y, s, rot); const r = rng(k); const p = poly([[-14, -6], [-4, -12 - r() * 6], [14, -8], [12, 6], [-10, 8]], { wash: FD.parm, washA: 1, w: 1.4, col: '#8a7a3a', key: k }); shadeG(p.path, 14, 0, -10, 0, FD.parmD, 0.35); pop(); }
function parmWedge(x, y, s, rot = 0) {                                  // клин пармезана: корка, зерно
  push(x, y, s, rot); const t = poly([[-90, 0], [90, -20], [80, 40], [-90, 40]], { wash: FD.parm, washA: 1, w: 2.4, col: '#6a5a2a', key: 7310 });
  shadeG(t.path, 90, 0, -40, 0, FD.parmD, 0.4); poly([[80, 40], [90, -20], [104, -14], [96, 46]], { wash: '#c89a42', washA: 1, w: 2.2, col: '#5a3a0a' });
  const r = rng(7311); for (let i = 0; i < 26; i++) ell(-80 + r() * 160, -6 + r() * 40, 1.6, 1.3, { wash: '#fff6d0', washA: 0.8, line: false }); txt('PARMIGIANO', 0, 30, 14, { font: 'Osw', col: '#8a6a2a', a: 0.7 }); pop();
}
function lemon(x, y, s, rot = 0, o = {}) {
  push(x, y, s, rot); if (o.half) { ell(0, 0, 40, 40, { wash: FD.lemon, washA: 1, w: 2.2, col: '#7a6a0a' }); ell(0, 0, 33, 33, { wash: '#fbf0a0', washA: 1, w: 1.2, col: '#c8b84a' }); for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; pencil([[0, 0], [Math.cos(a) * 30, Math.sin(a) * 30]], { w: 1.4, col: '#e8d860', pass2: false }); } }
  else { const l = blob([[-46, 0], [-36, -24], [0, -32], [36, -24], [46, 0], [36, 24], [0, 32], [-36, 24]], { wash: FD.lemon, washA: 1, w: 2.2, col: '#7a6a0a', key: 7400 }); shadeG(l.path, 46, 30, -10, -10, '#b89a1a', 0.45); glow(-14, -12, 16, 'rgba(255,255,230,1)', 0.6); }
  pop();
}
function wBottle(x, y, s, rot = 0, o = {}) {                            // бутылка вустерского соуса: оранжевая этикетка, бумажная обёртка
  push(x, y, s, rot); const b = blob([[-46, 0], [-48, -170], [-40, -220], [-16, -250], [-14, -330], [14, -330], [16, -250], [40, -220], [48, -170], [46, 0]], { wash: '#2a140a', washA: 0.95, w: 2.6, col: '#100804', key: 7500 });
  shadeG(b.path, -40, 0, 30, 0, '#000', 0.4); pencil([[-30, -40], [-32, -200]], { w: 7, col: '#fff2d8', a: 0.35, pass2: false }); glow(-30, -150, 30, 'rgba(255,230,180,1)', 0.25);
  rect(-48, -160, 96, 110, { wash: '#e8862a', washA: 1, w: 2, col: '#3a1a04', key: 7501 }); rect(-40, -150, 80, 90, { wash: '#f6e6c4', washA: 1, w: 1.4, col: '#7a3a0a' });
  txt('WORCESTER', 0, -128, 14, { font: 'Osw', col: '#7a1a0a' }); txt('SHIRE', 0, -110, 14, { font: 'Osw', col: '#7a1a0a' }); txt('SAUCE', 0, -86, 20, { font: 'Osw', col: '#2a1a0a' });
  rect(-17, -350, 34, 26, { wash: '#e8862a', washA: 1, w: 2, col: '#3a1a04' });
  if (o.cap !== false) rect(-15, -372, 30, 24, { wash: '#2a2a2a', washA: 1, w: 2, col: '#000' });
  pop();
}
function anchovy(x, y, s, rot = 0, o = {}) {                            // анчоус: серебристая спинка, глаз (может подмигнуть)
  push(x, y, s, rot); const f = blob([[-70, 0], [-40, -14], [20, -12], [56, -4], [70, -16], [76, 0], [70, 16], [56, 4], [20, 12], [-40, 12]], { wash: '#9aa6ae', washA: 1, w: 2, col: '#2a343a', key: 7600 });
  shadeG(f.path, 0, -14, 0, 14, '#3a4a5a', 0.5); pencil([[-60, -2], [50, -4]], { w: 3, col: '#e0e8ee', a: 0.8, pass2: false }); glow(-20, -6, 30, 'rgba(255,255,255,1)', 0.3);
  if (o.wink) pencil([[-60, -4], [-50, -2]], { w: 2.6, col: '#1a1a1a', pass2: false }); else { ell(-56, -3, 5, 5, { wash: '#f8f8f0', washA: 1, w: 1.2, col: '#1a1a1a' }); ell(-55, -3, 2.4, 2.4, { wash: '#000', washA: 1, line: false }); }
  if (o.smirk) pencil([[-70, 4], [-62, 8]], { w: 2, col: '#1a1a1a', pass2: false });
  pop();
}
function woodBowl(x, y, w, h, o = {}) {                                 // деревянная салатница: обод, кольца древесины (рисовать back/front отдельно)
  const part = o.part || 'all';
  if (part !== 'front') { const ins = ell(x, y, w, h * 0.32, { wash: '#7a4a22', washA: 1, w: 2.6, col: '#2a1408', key: 7700 }); shadeG(ins.path, x, y - h * 0.3, x, y + h * 0.3, '#3a1c08', 0.55); }
  if (part !== 'back') { const fr = shape(spline([[x - w, y], [x - w * 0.92, y + h * 0.5], [x - w * 0.6, y + h * 0.92], [x, y + h], [x + w * 0.6, y + h * 0.92], [x + w * 0.92, y + h * 0.5], [x + w, y], [x, y + h * 0.32]], true, 6), { wash: '#a8683a', washA: 1, w: 3, col: '#2a1408', key: 7701 });
    shadeG(fr.path, x + w, 0, x - w * 0.2, 0, '#4a240a', 0.55); for (let i = 1; i < 6; i++) pencil(spline([[x - w * (0.98 - i * 0.03), y + i * h * 0.1], [x, y + h * 0.32 + i * h * 0.1], [x + w * (0.98 - i * 0.03), y + i * h * 0.1]], false, 6), { w: 1.4, col: '#5a2a0a', a: 0.35, pass2: false });
    pencil(spline([[x - w * 0.8, y + h * 0.3], [x - w * 0.4, y + h * 0.6]], false, 3), { w: 6, col: '#f2c890', a: 0.4, pass2: false }); }
}
function plateCaesar(x, y, s, t, o = {}) {                              // классическая тарелка: целые листья веером, гренки, стружка, соус с бликами
  push(x, y, s); ell(0, 10, 230, 70, { wash: '#000', washA: 0.18, line: false });
  const pl = ell(0, 0, 220, 62, { wash: '#f8f6f0', washA: 1, w: 2.6, col: '#3a3a3a', key: 7800 }); shadeG(pl.path, 0, 60, 0, -30, '#b8b4ac', 0.4); ell(0, -4, 160, 42, { wash: '#efece4', washA: 1, w: 1.4, col: '#9a968c', a: 0.6 });
  for (let i = 0; i < 7; i++) leaf(-120 + i * 40, 20 - Math.abs(i - 3) * 6, 0.62, -0.9 + i * 0.3, { key: 7810 + i, shine: 1 });
  const r = rng(7830); for (let i = 0; i < 9; i++) crouton(-110 + r() * 220, -10 - r() * 60, 0.62, r() * 0.6 - 0.3, { key: 7840 + i });
  for (let i = 0; i < 18; i++) parmShard(-120 + r() * 240, -30 - r() * 90, 0.7, r() * 3, 7860 + i);
  for (let i = 0; i < 7; i++) { const xx = -100 + r() * 200, yy = -40 - r() * 70; blob(ellPts(xx, yy, 14 + r() * 10, 6, r(), 0.2, 8), { wash: FD.sauce, washA: 0.95, w: 1.2, col: '#8a7a4a', a: 0.6 }); glow(xx - 4, yy - 2, 8, 'rgba(255,255,255,1)', 0.7 + 0.3 * Math.sin(t * 4 + i)); }
  if (o.anch) for (let i = 0; i < 2; i++) anchovy(-30 + i * 70, -70 - i * 10, 0.4, 0.3 - i * 0.5);
  pop();
}
/* --- настоящий 3D: тарелка Цезаря как набор 3D-полигонов, вращение вокруг вертикали, проекция и сортировка по глубине (рисуется в стиле канала) */
const C3D = (() => { const r = rng(7900), L = [], C = [], P = [];
  for (let i = 0; i < 9; i++) { const a = i / 9 * 6.283 + r() * 0.3, len = 0.62 + r() * 0.2; L.push({ a, len, tilt: 0.45 + r() * 0.25, w: 0.2 + r() * 0.06 }); }
  for (let i = 0; i < 12; i++) C.push({ x: (r() - 0.5) * 1.1, z: (r() - 0.5) * 1.1, y: 0.22 + r() * 0.12, rot: r() * 6 });
  for (let i = 0; i < 40; i++) P.push({ x: (r() - 0.5) * 1.3, z: (r() - 0.5) * 1.3, y: 0.3 + r() * 0.15, rot: r() * 6 });
  return { L, C, P }; })();
function caesar3D(x, y, R, ang, t, o = {}) {
  const tiltX = o.tilt ?? 0.62, ca = Math.cos(ang), sa = Math.sin(ang), ct = Math.cos(tiltX), st = Math.sin(tiltX);
  const pr = (X, Y, Z) => { const x1 = X * ca - Z * sa, z1 = X * sa + Z * ca; const y2 = Y * ct - z1 * st, z2 = Y * st + z1 * ct; const f = 3.2 / (3.2 + z2); return [x + x1 * R * f, y - y2 * R * f, z2]; };
  const items = [];
  // тарелка: обод и дно как кольца точек
  const rim = [], rim2 = []; for (let i = 0; i <= 48; i++) { const a = i / 48 * 6.283; rim.push(pr(Math.cos(a) * 1.15, 0.06, Math.sin(a) * 1.15)); rim2.push(pr(Math.cos(a) * 0.8, 0, Math.sin(a) * 0.8)); }
  ell(x, y + R * 0.28, R * 1.2, R * 0.42, { wash: '#000', washA: 0.2, line: false });
  const pl = shape(rim.map(p => [p[0], p[1]]), { wash: '#f8f6f0', washA: 1, w: 2.6, col: '#3a3a3a', key: 7950 }); shadeG(pl.path, x, y + R * 0.4, x, y - R * 0.3, '#a8a49c', 0.45);
  shape(rim2.map(p => [p[0], p[1]]), { wash: '#efece4', washA: 1, w: 1.4, col: '#9a968c', a: 0.6 });
  glow(rim[30][0], rim[30][1], R * 0.12, 'rgba(255,255,255,1)', 0.7);
  for (const l of C3D.L) { const pts = []; for (let i = 0; i <= 10; i++) { const u = i / 10, w = l.w * Math.sin(Math.PI * Math.pow(u, 0.8)); for (const sd of [1]) pts.push([u, w]); }
    const poly3 = []; const ax = Math.cos(l.a), az = Math.sin(l.a), nx = -az, nz = ax;
    for (let i = 0; i <= 10; i++) { const u = i / 10, w = l.w * Math.sin(Math.PI * Math.pow(u, 0.8)) * (1 + 0.1 * Math.sin(u * 30 + t)); poly3.push([ax * u * l.len + nx * w, 0.1 + u * l.tilt * 0.6 - u * u * 0.25, az * u * l.len + nz * w]); }
    for (let i = 10; i >= 0; i--) { const u = i / 10, w = l.w * Math.sin(Math.PI * Math.pow(u, 0.8)); poly3.push([ax * u * l.len - nx * w, 0.1 + u * l.tilt * 0.6 - u * u * 0.25, az * u * l.len - nz * w]); }
    const P2 = poly3.map(p => pr(...p)); const zc = P2.reduce((s, p) => s + p[2], 0) / P2.length;
    const facing = (ax * ca - az * sa);
    items.push({ z: zc, draw: () => { const sh = shape(P2.map(p => [p[0], p[1]]), { wash: facing > 0 ? '#7aa834' : '#5e8a24', washA: 1, w: 2, col: FD.leafD });
      shadeG(sh.path, P2[10][0], P2[10][1], P2[0][0], P2[0][1], FD.leafL, 0.5); const m0 = pr(0, 0.1, 0), m1 = pr(ax * l.len * 0.9, 0.1 + 0.9 * l.tilt * 0.6 - 0.2, az * l.len * 0.9);
      pencil([[m0[0], m0[1]], [m1[0], m1[1]]], { w: 5, col: FD.rib, a: 0.9, pass2: false, gap: false }); } }); }
  for (const c of C3D.C) { const p = pr(c.x, c.y, c.z); items.push({ z: p[2] - 0.05, draw: () => crouton(p[0], p[1], R / 340 * (3.2 / (3.2 + p[2])), c.rot + ang, { key: 7960 }) }); }
  for (const c of C3D.P) { const p = pr(c.x, c.y, c.z); items.push({ z: p[2] - 0.1, draw: () => parmShard(p[0], p[1], R / 300, c.rot + ang * 2, 7970) }); }
  items.sort((a, b) => b.z - a.z).forEach(q => q.draw());
  const r = rng(7990); for (let i = 0; i < 10; i++) { const p = pr((r() - 0.5) * 1.0, 0.35, (r() - 0.5) * 1.0); blob(ellPts(p[0], p[1], R * 0.05, R * 0.02, r(), 0.2, 8), { wash: FD.sauce, washA: 0.95, w: 1.2, col: '#8a7a4a', a: 0.5 }); glow(p[0] - 3, p[1] - 2, R * 0.03, 'rgba(255,255,255,1)', 0.6 + 0.4 * Math.sin(t * 5 + i)); }
}
function hat20(x, y, s, kind, col = '#3a3028', flip = 1) {             // шляпы поверх human(): x,y — ноги персонажа, s — его масштаб
  const hy = y + (-238 - 46) * s; push(x, hy, s, 0, flip);
  if (kind === 'fedora') { ell(0, -30, 70, 14, { wash: col, washA: 1, w: 2, col: '#1a120a' }); blob([[-40, -30], [-38, -76], [-10, -84], [0, -74], [10, -84], [38, -76], [40, -30]], { wash: col, washA: 1, w: 2, col: '#1a120a' }); rect(-40, -44, 80, 12, { wash: '#1a1a1a', washA: 1, w: 1.4 }); }
  if (kind === 'boater') { ell(0, -30, 72, 14, { wash: '#e8d49a', washA: 1, w: 2, col: '#5a4a1a' }); rect(-40, -62, 80, 32, { wash: '#e8d49a', washA: 1, w: 2, col: '#5a4a1a' }); rect(-40, -46, 80, 12, { wash: '#a8241e', washA: 1, w: 1.4 }); }
  if (kind === 'cloche') blob([[-50, -14], [-46, -60], [0, -86], [46, -60], [50, -14], [30, -30], [-30, -30]], { wash: col, washA: 1, w: 2, col: '#1a120a' });
  if (kind === 'chef') { rect(-40, -50, 80, 24, { wash: '#ffffff', washA: 1, w: 2, col: '#3a3a3a' }); blob([[-44, -50], [-60, -100], [-20, -130], [20, -134], [60, -100], [44, -50]], { wash: '#ffffff', washA: 1, w: 2, col: '#3a3a3a' }); }
  if (kind === 'pilot') { blob([[-46, 0], [-44, -54], [0, -76], [44, -54], [46, 0], [34, -20], [-34, -20]], { wash: '#6a4426', washA: 1, w: 2, col: '#1a0a04' }); for (const sd of [-1, 1]) { ell(sd * 20, -40, 16, 12, { wash: '#9ac8d8', washA: 1, w: 2.4, col: '#3a2a1a' }); } pencil([[-36, -40], [36, -40]], { w: 3, col: '#3a2a1a', pass2: false }); }
  if (kind === 'beret') blob([[-46, -40], [-40, -70], [0, -80], [44, -70], [52, -46], [0, -46]], { wash: col, washA: 1, w: 2, col: '#1a120a' });
  if (kind === 'tophat') { ell(0, -30, 56, 10, { wash: '#121214', washA: 1, w: 2 }); rect(-34, -110, 68, 80, { wash: '#121214', washA: 1, w: 2 }); }
  pop();
}
function stache(x, y, s, flip = 1) { const hy = y + (-238 - 46) * s; push(x, hy + 14 * s, s, 0, flip); blob([[0, 0], [-14, -4], [-30, 4], [-34, 12], [-18, 8], [0, 6], [18, 8], [34, 12], [30, 4], [14, -4]], { wash: '#1a120a', washA: 1, w: 1.2, col: '#000' }); pop(); }
function crumbs(x, y, t, t0, n = 14, seed = 7, col = FD.crout) {         // крошки разлетаются после t0
  if (t < t0 || t > t0 + 1.2) return; const k = t - t0; for (let i = 0; i < n; i++) { const r = rng(seed * 100 + i), a = r() * 6.283, v = 300 + r() * 600;
    const xx = x + Math.cos(a) * v * k, yy = y + Math.sin(a) * v * k + 900 * k * k; poly([[xx - 6, yy - 4], [xx + 5, yy - 6], [xx + 7, yy + 4], [xx - 5, yy + 6]], { wash: i % 3 ? col : FD.croutL, washA: 1 - k / 1.2, w: 1.2, col: '#4a2a08', a: 1 - k / 1.2 }); }
}
function bubbleTag(s, x, y, t, t0, col = '#d9482b', size = 48, rot = -0.04) {   // всплывающий «ценник» в мире
  if (t < t0) return; const k = popK(t, t0, 0.3); push(x, y, k, rot); ctx.save(); ctx.font = `600 ${size}px Osw`; const w = ctx.measureText(s).width + 40; ctx.restore();
  ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.35)'; ctx.shadowBlur = 10; ctx.shadowOffsetY = 5; ctx.fillStyle = col; ctx.beginPath(); ctx.roundRect(-w / 2, -size * 0.7, w, size * 1.4, 10); ctx.fill(); ctx.restore();
  txt(s, 0, 2, size, { font: 'Osw', col: '#fff8ec' }); pop();
}
/* --- реквизит Тома (PROPS из tom.js): pose.prop = 'fork' | 'croutonP' | 'leafP' | 'tray' | 'megaphone' | 'lollipop' */
Object.assign(PROPS, {
  fork() { pencil([[0, 10], [0, -120]], { w: 8, col: '#c8ccd0' }); pencil([[0, 10], [0, -120]], { w: 3, col: '#ffffff', a: 0.6, pass2: false }); rect(-16, -150, 32, 30, { wash: '#c8ccd0', washA: 1, w: 2, col: '#4a5058' }); for (const x of [-14, -5, 5, 14]) pencil([[x, -150], [x, -196]], { w: 4, col: '#c8ccd0' }); },
  croutonP() { crouton(0, -40, 1.1, 0.2, { key: 7180 }); },
  leafP() { leaf(0, 0, 0.75, 0.15, { key: 7190, shine: 1 }); },
  tray() { push(30, -40, 1); ell(0, 0, 110, 22, { wash: '#c8ccd0', washA: 1, w: 2.4, col: '#3a3e44' }); for (const x of [-60, 0, 56]) { pencil([[x, -6], [x, -40]], { w: 3, col: '#e8f0f4', a: 0.9, pass2: false }); poly([[x - 26, -100], [x + 26, -100], [x, -44]], { wash: x ? '#e8b53a' : '#d9482b', washA: 0.85, w: 2, col: '#3a3e44' }); ell(x + 10, -104, 6, 6, { wash: '#7a2a3a', washA: 1, w: 1 }); } pop(); },
  megaphone() { push(0, -30, 1, -1.2); poly([[-10, -20], [10, -20], [60, -150], [-60, -150]], { wash: '#e8e4dc', washA: 1, w: 2.6, col: '#2a2a2a' }); ell(0, -150, 60, 14, { wash: '#2a2a2a', washA: 1, w: 2 }); pop(); },
});
Object.assign(PROPS, { magnifier() { pencil([[0, 10], [0, -90]], { w: 14, col: '#5a3418' }); ell(0, -160, 70, 70, { wash: '#cfe6f6', washA: 0.25, w: 10, col: '#c99636' }); pencil(ellPts(0, -160, 56, 56, 0, 0, 30).slice(18, 26), { w: 6, col: '#ffffff', a: 0.7, pass2: false }); } });
