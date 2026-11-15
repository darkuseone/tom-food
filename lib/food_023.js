/* 023 — еда выпуска «Гречка»: трёхгранное зерно-ядрица (коричневое / зелёное / в тёмной лузге), рассыпчатая каша в чугунке и на тарелке (масло тает, пар),
   растение гречихи (красный стебель, листья-сердечки, бело-розовые соцветия), щавель и ревень (родня), буковый орешек, пачка «ГРЕЧКА ЯДРИЦА», мешок,
   улей, миски «с молоком» и «с котлетой». Реквизит — PROPS. */
const GR = { kern: '#a8642a', kernD: '#5a2e10', kernL: '#e8a868', green: '#b8b878', greenD: '#6a6a3a', hull: '#3a2a20', hullD: '#120a06', iron: '#2c2a2e', ironD: '#0e0c10', ironL: '#6a6670', butter: '#ffd860', butterD: '#c89a20', flower: '#fbf2f2', flowerP: '#f2a8b8', stem: '#b8343a', leaf: '#5a9a3a', leafD: '#2a5a1a', sorrel: '#4a9a3a', rhubarb: '#c8283a', beech: '#8a5a2a', milk: '#f8f6ee' };
function grainB(x, y, s = 1, rot = 0, o = {}) {                           // зерно-ядрица: трёхгранная пирамидка, 3 грани разного тона, ребро-блик; o.green — без обжарки, o.hull — в лузге, o.key
  const k = o.key || 23000, c = o.hull ? GR.hull : o.green ? GR.green : GR.kern, cD = o.hull ? GR.hullD : o.green ? GR.greenD : GR.kernD, cL = o.hull ? '#6a5040' : o.green ? '#e8e8b0' : GR.kernL;
  push(x, y, s, rot);
  const L = poly([[0, -30], [-22, 14], [0, 22]], { wash: lerpC(c, cL, 0.35), washA: 1, w: 1.2, col: cD, key: k });
  const R = poly([[0, -30], [0, 22], [22, 14]], { wash: lerpC(c, cD, 0.3), washA: 1, w: 1.2, col: cD, key: k + 1 });
  poly([[-22, 14], [0, 22], [22, 14], [0, 18]], { wash: cD, washA: 0.8, line: false });
  shadeG(L.path, -22, 14, 0, -30, cL, 0.35); pencil([[0, -28], [0, 20]], { w: 1.6, col: cL, a: 0.7, pass2: false });
  ell(-6, -10, 2.4, 6, { wash: '#ffffff', washA: 0.45, line: false, rot: 0.3 });
  pop();
}
function grainField(x0, y0, x1, y1, n, seed, s = 1, o = {}) {              // россыпь зёрен в перспективе (дальние мельче)
  const r = rng(seed); for (let i = 0; i < n; i++) { const yy = y0 + r() * (y1 - y0), sc = s * (0.45 + (yy - y0) / Math.max(1, y1 - y0) * 0.6); grainB(x0 + r() * (x1 - x0), yy, sc * (0.7 + r() * 0.5), (r() - 0.5) * 2.4, { key: seed + i * 3, green: o.green && r() < o.green, hull: o.hull && r() < o.hull }); }
}
function kashaMound(x, y, w, h, t, o = {}) {                               // горка рассыпчатой каши: зёрна отдельно, блеск масла, масло тает (o.melt), пар (o.steam)
  const k = o.key || 23100, r = rng(k); push(x, y, 1);
  const m = blob([[-w, 0], [-w * 0.8, -h * 0.5], [-w * 0.35, -h], [w * 0.3, -h * 0.96], [w * 0.8, -h * 0.45], [w, 0]], { wash: '#8a4a1e', washA: 1, w: 2, col: '#3a1a08', key: k });
  shadeG(m.path, -w, -h, w, 0, '#d89a5a', 0.4); shadeG(m.path, w, 0, -w * 0.2, -h, '#3a1a08', 0.35);
  const n = Math.round(w * h / 90); for (let i = 0; i < n; i++) { const a = r(), b = r(), xx = (a * 2 - 1) * w * (0.95 - b * 0.4), yy = -b * h * (1 - Math.abs(a * 2 - 1) * 0.6); grainB(xx, yy, 0.32 + r() * 0.12, (r() - 0.5) * 2.6, { key: k + 10 + i }); }
  if (o.melt !== undefined) { const mk = clamp(o.melt); const bt = rect(-w * 0.18, -h - 30 + mk * 18, w * 0.36, 34 - mk * 22, { wash: GR.butter, washA: 1, w: 1.6, col: GR.butterD }); shadeG(bt.path, 0, -h - 30, 0, -h, '#fff4c0', 0.5);
    for (let i = 0; i < 4; i++) { const ln = mk * (30 + i * 16); pencil([[-w * 0.15 + i * w * 0.1, -h + 4], [-w * 0.2 + i * w * 0.14, -h + 4 + ln]], { w: 6, col: '#ffe080', a: 0.7 * mk, pass2: false }); } ell(0, -h + 6, w * 0.3 * mk, 8 * mk, { wash: '#ffe890', washA: 0.5 * mk, line: false }); }
  for (let i = 0; i < 7; i++) ell((r() - 0.5) * w * 1.4, -r() * h * 0.8, 6, 2.4, { wash: '#ffffff', washA: 0.5, line: false, rot: r() });
  pop(); if (o.steam) steamWisps(x, y - h - 20, w / 120, t, 4, k + 50, o.steam);
}
function chugunok(x, y, s, t, o = {}) {                                   // чугунок: пузатый, рёбра, ручки-ушки, каша горкой (o.kasha), пар (o.steam), o.lid — крышка
  const k = o.key || 23200; push(x, y, s);
  const b = blob([[-120, -150], [-150, -90], [-140, -20], [-80, 20], [80, 20], [140, -20], [150, -90], [120, -150]], { wash: GR.iron, washA: 1, w: 3, col: GR.ironD, key: k });
  metalG(b.path, -60, -100, 200, '#8a8690', GR.iron, GR.ironD, 0.75); for (const yy of [-120, -60]) pencil(spline([[-140, yy], [0, yy + 14], [140, yy]], false, 5), { w: 2.4, col: '#4a4850', a: 0.7, pass2: false });
  pencil(spline([[-130, -110], [-120, -30], [-70, 6]], false, 5), { w: 6, col: '#a8a4b0', a: 0.35, pass2: false });
  for (const sd of [-1, 1]) { pencil(spline([[sd * 140, -132], [sd * 176, -128], [sd * 172, -104], [sd * 146, -104]], false, 5), { w: 9, col: GR.ironD, pass2: false }); }
  ell(0, -150, 122, 22, { wash: GR.ironD, washA: 1, w: 2.4, col: '#000000' }); ell(0, -152, 112, 16, { wash: '#4a3020', washA: 1, line: false });
  pop();
  if (o.kasha) kashaMound(x, y - 150 * s, 106 * s, 60 * s * o.kasha, t, { key: k + 20, melt: o.melt, steam: 0 });
  if (o.lid) { push(x, y - 150 * s - 10 * s, s, o.lidRot || 0); const l = ell(0, 0, 120, 20, { wash: GR.iron, washA: 1, w: 2.4, col: GR.ironD }); metalG(l.path, -40, -6, 120, '#8a8690', GR.iron, GR.ironD, 0.7); ell(0, -14, 20, 10, { wash: GR.ironD, washA: 1, w: 1.6 }); pop(); }
  if (o.steam) steamWisps(x, y - 190 * s, s * 1.2, t, 5, k + 60, o.steam);
}
function kashaPlate(x, y, s, t, o = {}) {                                 // хиро: глубокая тарелка с рассыпчатой гречкой, кусок масла тает, зелень, блеск, пар; o.melt 0..1
  const k = o.key || 23300; push(x, y, s);
  ell(0, 18, 210, 50, { wash: '#000000', washA: 0.18, line: false });
  const p = ell(0, 0, 200, 54, { wash: '#f6f2e8', washA: 1, w: 2.4, col: '#6a6a72', key: k }); shadeG(p.path, 200, 0, -200, 0, '#b8b4a8', 0.4);
  ell(0, -4, 170, 42, { wash: 'rgba(0,0,0,0)', washA: 0, w: 4, col: '#2a5aa8' }); for (let i = 0; i < 14; i++) { const a = i / 14 * 6.283; ell(Math.cos(a) * 186, Math.sin(a) * 49, 4, 2, { wash: '#2a5aa8', washA: 0.8, line: false }); }
  ell(0, -6, 150, 34, { wash: '#e8e2d4', washA: 1, w: 1.4, col: '#9a9488' });
  pop();
  kashaMound(x, y - 10 * s, 140 * s, 90 * s, t, { key: k + 10, melt: o.melt, steam: o.steam || 0 });
  push(x, y, s); for (const [dx, dy, r] of [[60, -40, 0.4], [-80, -30, -0.6], [90, -10, 1.2]]) { push(dx, dy, 1, r); pencil([[0, 0], [16, -6]], { w: 3, col: '#3a7a2a', pass2: false }); ell(10, -6, 8, 4, { wash: '#5aaa3a', washA: 1, w: 0.8, col: '#2a5a1a' }); pop(); } pop();
}
function buckPlant(x, y, h, t, o = {}) {                                  // гречиха: красный стебель, листья-сердечки, кисти бело-розовых цветков; o.seed, o.sway
  const k = o.seed || 23400, r = rng(k), sw = Math.sin(t * 1.3 + k) * (o.sway === undefined ? 8 : o.sway) * h / 300;
  const top = [x + sw, y - h]; pencil(spline([[x, y], [x + sw * 0.4, y - h * 0.5], top], false, 6), { w: Math.max(2, h / 60), col: GR.stem, pass2: false });
  for (let i = 0; i < 3; i++) { const yy = y - h * (0.3 + i * 0.2), sd = i % 2 ? 1 : -1, xx = x + sw * (0.3 + i * 0.2); push(xx, yy, h / 260, sd * 0.6); const lf = blob([[0, 0], [sd * 20, -18], [sd * 40, -10], [sd * 46, 6], [sd * 30, 16], [sd * 12, 12]], { wash: i ? GR.leaf : '#6aaa4a', washA: 1, w: 1, col: GR.leafD }); pencil([[0, 0], [sd * 40, 0]], { w: 1, col: '#8ac86a', a: 0.6, pass2: false }); pop(); }
  for (let c = 0; c < 3; c++) { const cx = top[0] + (c - 1) * h * 0.08, cy = top[1] + Math.abs(c - 1) * h * 0.06; for (let i = 0; i < 9; i++) { const a = r() * 6.283, d = r() * h * 0.05; ell(cx + Math.cos(a) * d, cy + Math.sin(a) * d * 0.7, h / 90 + 1, h / 90 + 1, { wash: r() < 0.35 ? GR.flowerP : GR.flower, washA: 1, w: 0.6, col: '#c88a98' }); } }
}
function buckField(y0, y1, n, t, seed, o = {}) {                          // поле цветущей гречихи в перспективе: дальние кусты-пятна, ближние растения
  const r = rng(seed); for (let i = 0; i < n; i++) { const k = i / n, yy = lerp(y0, y1, k * k), h = lerp(30, o.hMax || 220, k * k); const x = -700 + r() * 2500;
    if (h < 70) { ell(x, yy, h * 1.2, h * 0.35, { wash: r() < 0.5 ? '#f4e4e8' : '#f8d4dc', washA: 0.85, line: false }); ell(x, yy + h * 0.25, h * 1.1, h * 0.12, { wash: '#c84a5a', washA: 0.35, line: false }); }
    else buckPlant(x, yy, h, t, { seed: seed + i }); }
}
function sorrelLeaf(x, y, s = 1, rot = 0, o = {}) {                       // лист щавеля: копьевидный, светлая жилка, красноватый черешок
  push(x, y, s, rot); pencil([[0, 0], [0, -40]], { w: 4, col: '#a8443a', pass2: false });
  const l = blob([[0, -40], [-22, -60], [-26, -110], [-10, -170], [0, -190], [10, -170], [26, -110], [22, -60]], { wash: GR.sorrel, washA: 1, w: 1.6, col: '#1a4a14', key: o.key || 23500 });
  shadeG(l.path, 26, 0, -10, 0, '#1a4a14', 0.35); pencil([[0, -40], [0, -186]], { w: 2, col: '#a8d88a', a: 0.8, pass2: false }); for (let i = 0; i < 5; i++) for (const sd of [-1, 1]) pencil([[0, -60 - i * 24], [sd * 16, -80 - i * 24]], { w: 1, col: '#8ac86a', a: 0.6, pass2: false });
  if (o.bite) { ctx.save(); ctx.globalCompositeOperation = 'destination-out'; ell(14, -180, 16, 14, { wash: '#000', washA: 1, line: false }); ell(20, -158, 12, 12, { wash: '#000', washA: 1, line: false }); ctx.restore(); }
  pop();
}
function rhubarb(x, y, s = 1, t = 0, o = {}) {                            // куст ревеня: толстые красные черешки, огромные морщинистые листья
  push(x, y, s); const r = rng(o.key || 23510);
  for (let i = 0; i < 5; i++) { const a = -1.1 + i * 0.55, sw = Math.sin(t * 0.9 + i) * 0.03, ex = Math.sin(a + sw) * 150, ey = -Math.cos(a + sw) * 170;
    pencil(spline([[0, 0], [ex * 0.4, ey * 0.5], [ex, ey]], false, 5), { w: 13, col: GR.rhubarb, pass2: false }); pencil(spline([[3, -4], [ex * 0.4 + 3, ey * 0.5], [ex + 3, ey]], false, 5), { w: 3, col: '#f87888', a: 0.6, pass2: false });
    push(ex, ey, 0.9 + r() * 0.3, a); const lf = blob([[0, 10], [-80, -10], [-100, -70], [-60, -130], [0, -150], [60, -130], [100, -70], [80, -10]], { wash: i % 2 ? '#4a8a2a' : '#5a9a34', washA: 1, w: 2, col: '#1a3a10' }); shadeG(lf.path, 0, -150, 0, 10, '#1a3a10', 0.4);
    for (let q = 0; q < 4; q++) pencil([[0, 6], [(q - 1.5) * 50, -120 + Math.abs(q - 1.5) * 30]], { w: 1.6, col: '#a8c870', a: 0.7, pass2: false }); for (let q = 0; q < 6; q++) pencil(spline([[-70 + q * 26, -30 - (q % 2) * 40], [-60 + q * 26, -50 - (q % 2) * 40], [-50 + q * 26, -34 - (q % 2) * 40]], false, 3), { w: 1.2, col: '#2a5a1a', a: 0.5, pass2: false }); pop(); }
  pop();
}
function beechnut(x, y, s = 1, rot = 0, o = {}) {                        // буковый орешек: трёхгранный, глянцевый, коричневый (похож на зерно гречки)
  push(x, y, s, rot); const a = poly([[0, -40], [-20, 18], [0, 26], [20, 18]], { wash: GR.beech, washA: 1, w: 1.6, col: '#3a1a08', key: o.key || 23520 });
  shadeG(a.path, -20, 0, 20, 0, '#d89a5a', 0.4); pencil([[0, -38], [0, 24]], { w: 1.6, col: '#e8b880', a: 0.6, pass2: false }); ell(-6, -8, 3, 10, { wash: '#ffffff', washA: 0.45, line: false, rot: 0.2 }); pop();
}
function grechkaPack(x, y, s = 1, rot = 0, o = {}) {                      // пачка «ГРЕЧКА ЯДРИЦА»: картон, окошко с зёрнами, зелёная полоса
  push(x, y, s, rot); const b = rect(-60, -170, 120, 170, { wash: o.col || '#f4ead0', washA: 1, w: 2, col: '#4a3a1a', key: o.key || 23530 }); shadeG(b.path, 60, 0, -60, 0, '#a8946a', 0.35);
  rect(-60, -160, 120, 36, { wash: o.band || '#3a7a3a', washA: 1, line: false }); txt('ГРЕЧКА', 0, -134, 24, { font: 'Osw', col: '#ffffff' }); txt('ядрица', 0, -100, 16, { font: 'Hand', col: '#4a3a1a' });
  const wn = ell(0, -52, 36, 28, { wash: '#a8642a', washA: 1, w: 1.4, col: '#4a3a1a' }); const r = rng(o.key || 23530); for (let i = 0; i < 10; i++) ell(-24 + r() * 48, -66 + r() * 28, 4, 3, { wash: r() < 0.5 ? GR.kernL : GR.kernD, washA: 1, line: false });
  rect(-60, -10, 120, 10, { wash: '#c8b88a', washA: 1, line: false }); pop();
}
function grainSack(x, y, s = 1, o = {}) {                                 // мешок с зерном: мешковина, завязка, надпись, зёрна у горловины
  push(x, y, s); const b = blob([[-70, 0], [-80, -80], [-60, -150], [-30, -170], [30, -170], [60, -150], [80, -80], [70, 0]], { wash: o.col || '#c8a878', washA: 1, w: 2.2, col: '#4a3418', key: o.key || 23540 }); shadeG(b.path, 80, 0, -40, 0, '#6a4a20', 0.45); hatch(b.path, b.bb, { gap: 6, a: 0.14, col: '#6a4a20', ang: 0.2, key: (o.key || 23540) + 1, w: 1 });
  pencil([[-34, -160], [34, -160]], { w: 5, col: '#6a4a20', pass2: false }); if (o.label) txt(o.label, 0, -70, o.size || 22, { font: 'Osw', col: '#5a2a10' });
  if (o.open) { ell(0, -170, 44, 12, { wash: GR.kernD, washA: 1, w: 1.4, col: '#3a1a08' }); for (let i = 0; i < 6; i++) grainB(-28 + i * 11, -176 + (i % 2) * 4, 0.3, i, { key: 23545 + i, green: o.green }); }
  pop();
}
function beehive(x, y, s = 1, t = 0, o = {}) {                            // улей-домик: доски, крыша, леток, пчёлы вьются
  push(x, y, s); rect(-70, -20, 140, 20, { wash: '#6a4a2a', washA: 1, w: 1.6, col: '#2a1a08' });
  const b = rect(-60, -150, 120, 130, { wash: o.col || '#e8c060', washA: 1, w: 2, col: '#4a3010', key: o.key || 23550 }); shadeG(b.path, 60, 0, -60, 0, '#8a6020', 0.4); for (let i = 1; i < 4; i++) pencil([[-60, -150 + i * 32], [60, -150 + i * 32]], { w: 1.4, col: '#8a6020', a: 0.6, pass2: false });
  const rf = poly([[-80, -150], [0, -200], [80, -150]], { wash: '#8a3a2a', washA: 1, w: 2, col: '#3a1008' }); shadeG(rf.path, 80, 0, -80, 0, '#3a1008', 0.4); rect(-24, -40, 48, 8, { wash: '#1a0a04', washA: 1, line: false }); pop();
  bees(x, y - 60 * s, 5, t, (o.key || 23550) + 3, 80 * s);
}
function bees(x, y, n, t, seed, R = 80) {                                 // пчёлы вьются вокруг точки: полоски, крылышки
  const r = rng(seed); for (let i = 0; i < n; i++) { const ph = r() * 6.283, sp = 1.5 + r() * 1.5, bx = x + Math.cos(t * sp + ph) * R * (0.5 + r() * 0.5), by = y + Math.sin(t * sp * 1.7 + ph) * R * 0.5;
    push(bx, by, 1, Math.cos(t * sp + ph) > 0 ? 0.2 : -0.2); ell(0, 0, 7, 5, { wash: '#f4c020', washA: 1, w: 1, col: '#2a1a04' }); pencil([[-2, -4], [-2, 4]], { w: 2, col: '#2a1a04', pass2: false }); pencil([[3, -4], [3, 4]], { w: 2, col: '#2a1a04', pass2: false }); ell(-1, -7 + Math.sin(t * 60 + i) * 2, 5, 3, { wash: '#eaf6ff', washA: 0.7, w: 0.6, col: '#8aa8c8' }); pop(); }
}
function milkBowl(x, y, s = 1, t = 0, o = {}) {                           // миска гречки с молоком: белое молоко, зёрна плавают, сахар
  push(x, y, s); const b = blob([[-90, -30], [90, -30], [70, 30], [-70, 30]], { wash: o.col || '#d8e8f4', washA: 1, w: 2, col: '#3a4a5a', key: o.key || 23560 }); shadeG(b.path, 90, 0, -90, 0, '#6a8aa8', 0.4); for (let i = 0; i < 6; i++) ell(-60 + i * 24, 4, 6, 4, { wash: '#2a5aa8', washA: 0.7, line: false });
  ell(0, -30, 90, 18, { wash: GR.milk, washA: 1, w: 1.6, col: '#8a8a8a' }); const r = rng((o.key || 23560) + 1); for (let i = 0; i < 16; i++) grainB(-70 + r() * 140, -34 + r() * 10, 0.22, r() * 6, { key: 23561 + i }); ell(-30, -36, 20, 4, { wash: '#ffffff', washA: 0.8, line: false }); pop();
}
function cutletPlate(x, y, s = 1, t = 0, o = {}) {                       // тарелка: гречка горкой + румяная котлета, подлива
  push(x, y, s); const p = ell(0, 0, 120, 32, { wash: '#f6f2e8', washA: 1, w: 2, col: '#6a6a72', key: o.key || 23570 }); shadeG(p.path, 120, 0, -120, 0, '#b8b4a8', 0.4); pop();
  kashaMound(x - 34 * s, y - 4 * s, 70 * s, 40 * s, t, { key: (o.key || 23570) + 2 });
  push(x + 46 * s, y - 14 * s, s); const c = blob([[-50, 0], [-46, -26], [-10, -36], [36, -30], [52, -6], [40, 10], [-30, 12]], { wash: '#8a4a1a', washA: 1, w: 2, col: '#3a1a04' }); shadeG(c.path, 0, -36, 0, 12, '#3a1a04', 0.45); hatch(c.path, c.bb, { gap: 4, a: 0.25, col: '#5a2a08', ang: 0.8, key: 23575, w: 1 }); ell(-10, -26, 22, 5, { wash: '#ffe0b0', washA: 0.6, line: false }); ell(10, 10, 50, 8, { wash: '#7a3a10', washA: 0.6, line: false }); pop();
}
Object.assign(PROPS, {
  spoonKP() { push(0, 0, 1, 0.25); pencil([[0, 30], [0, -90]], { w: 10, col: '#c8343a', pass2: false }); for (let i = 0; i < 4; i++) pencil([[-4, 20 - i * 28], [4, 8 - i * 28]], { w: 3, col: '#f8d040', pass2: false }); const b = ell(0, -130, 30, 50, { wash: '#e8b860', washA: 1, w: 2.2, col: '#5a2a08' }); ell(0, -130, 34, 54, { wash: 'rgba(0,0,0,0)', washA: 0, w: 4, col: '#c8343a' }); kashaMound(0, -108, 34, 50, 0, { key: 23600 }); pop(); },   // расписная деревянная ложка с горкой каши
  spoonEmptyP() { push(0, 0, 1, 0.25); pencil([[0, 30], [0, -90]], { w: 10, col: '#c8343a', pass2: false }); ell(0, -130, 30, 50, { wash: '#e8b860', washA: 1, w: 2.2, col: '#5a2a08' }); ell(0, -130, 34, 54, { wash: 'rgba(0,0,0,0)', washA: 0, w: 4, col: '#c8343a' }); ell(0, -132, 20, 36, { wash: '#b8843a', washA: 1, line: false }); grainB(4, -110, 0.3, 0.4, { key: 23605 }); pop(); },   // ложка пустая (после укуса)
  stalkP() { buckPlant(0, 20, 170, 0, { seed: 23610, sway: 0 }); },                       // стебель гречихи в лапе
  sackP() { grainSack(0, 60, 0.55, { key: 23620, label: 'ΓΡΕΚ', open: 1 }); },            // мешок с зерном в лапе
  beechP() { beechnut(0, -50, 1.2, 0.2, { key: 23630 }); },                               // буковый орешек в лапе
  grainP() { grainB(0, -50, 1.6, -0.2, { key: 23640 }); },                                // зерно гречки в лапе
  sorrelP() { sorrelLeaf(0, 0, 0.8, 0.2, { key: 23650 }); },                              // лист щавеля в лапе
  sorrelBiteP() { sorrelLeaf(0, 0, 0.8, 0.2, { key: 23650, bite: 1 }); },                 // лист щавеля надкушенный
  packP() { grechkaPack(0, 40, 0.7, 0.1, { key: 23660 }); },                              // пачка гречки в лапе
  iceAxeP() { push(0, 0, 1, -0.4); pencil([[0, 30], [0, -120]], { w: 8, col: '#8a5a2a', pass2: false }); const b = ell(0, -140, 22, 28, { wash: '#c8ccd4', washA: 1, w: 2, col: '#3a4048' }); metalG(b.path, -6, -146, 28, '#ffffff', '#c8ccd4', '#5a6068', 0.8); pop(); },   // ложка-ледоруб альпиниста
  flagGP() { pencil([[0, 20], [0, -140]], { w: 4, col: '#6a4a2a', pass2: false }); const f = poly([[0, -140], [70, -122], [0, -104]], { wash: '#c8343a', washA: 1, w: 1.6, col: '#5a0a10' }); txt('ВЕРШИНА', 30, -116, 9, { font: 'Osw', col: '#ffffff' }); },   // флажок на вершине зерна
  magnGP() { magnifier(0, -60, 0.7, 0.3, 0.25); },                                        // лупа ботаника
  ladleP() { push(0, 0, 1, 0.1); pencil([[0, 30], [0, -150]], { w: 7, col: '#4a3a2a', pass2: false }); pencil([[0, -150], [-30, -190], [-60, -170]], { w: 10, col: '#4a3a2a', pass2: false }); pop(); },   // ухват (рукоять с рогом)
});
