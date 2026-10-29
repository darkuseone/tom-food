/* 002 — съедобные детали оливье (кандидат в engine/food.js): кубики, хрустальная салатница, докторская, горошек, банка «Провансаль»,
   огурчик, оливка, каперсы, раковая шейка, рябчик/курица, морковь; костюмы выпуска; реквизит Тома (spoon, pickleP, oliveP, ladle, book). */
const OL = { pot: '#f2dea0', potD: '#b89a52', egg: '#faf6ea', yolk: '#f2c440', saus: '#e9a4a0', sausD: '#a85a5a', pea: '#7cae36', peaD: '#3a5a10', carrot: '#ec8a3a', carrotD: '#9a4a10',
  pick: '#6e8e2e', pickD: '#2e4a0e', mayo: '#fcf4dc', olive: '#5e6e1e', oliveD: '#26300a', cray: '#e0502e', crayD: '#7a1a08', grouse: '#c07a3a', grouseD: '#5a2a0a', crystal: '#d8e8f0' };

function cube(x, y, s, col, colD, rot = 0, key = 0) {                    // кубик нарезки: верх светлее, бок темнее
  push(x, y, s, rot); const t = poly([[-12, -6], [0, -12], [12, -6], [0, 0]], { wash: lerpC(col, '#ffffff', 0.3), washA: 1, w: 1.2, col: colD, a: 0.7, key });
  poly([[-12, -6], [0, 0], [0, 14], [-12, 8]], { wash: col, washA: 1, w: 1.2, col: colD, a: 0.7 }); poly([[0, 0], [12, -6], [12, 8], [0, 14]], { wash: lerpC(col, colD, 0.35), washA: 1, w: 1.2, col: colD, a: 0.7 }); pop();
}
function pea(x, y, s = 1) { ell(x, y, 8 * s, 8 * s, { wash: OL.pea, washA: 1, w: 1.1, col: OL.peaD, a: 0.7 }); ctx.save(); ctx.globalAlpha = 0.7; ctx.fillStyle = '#d8f0a0'; ctx.beginPath(); ctx.arc(x - 3 * s, y - 3 * s, 2.4 * s, 0, 6.3); ctx.fill(); ctx.restore(); }
function mayoBlob(x, y, s, k = 0) { blob([[x - 22 * s, y], [x - 14 * s, y - 12 * s], [x, y - 16 * s], [x + 18 * s, y - 10 * s], [x + 22 * s, y + 2 * s], [x, y + 6 * s]], { wash: OL.mayo, washA: 1, w: 1.2, col: '#b8a87a', a: 0.6, key: 8000 + k }); glow(x - 6 * s, y - 8 * s, 8 * s, 'rgba(255,255,255,1)', 0.7); }
/* салат-горка: kind 'soviet' (картошка, колбаса, горошек, морковь, яйцо, огурец) | 'old' (рябчик, раки, каперсы, оливки, огурец, картофель) */
function oliHeap(x, y, R, t, kind = 'soviet', seed = 8100) {
  const r = rng(seed), pal = kind === 'old' ? [[OL.grouse, OL.grouseD], [OL.pot, OL.potD], [OL.pick, OL.pickD], [OL.cray, OL.crayD], [OL.egg, '#b8b0a0']] : [[OL.pot, OL.potD], [OL.saus, OL.sausD], [OL.carrot, OL.carrotD], [OL.egg, '#b8b0a0'], [OL.pick, OL.pickD], [OL.pot, OL.potD]];
  blob([[x - R, y], [x - R * 0.8, y - R * 0.34], [x - R * 0.3, y - R * 0.62], [x + R * 0.3, y - R * 0.62], [x + R * 0.8, y - R * 0.34], [x + R, y]], { wash: OL.mayo, washA: 1, w: 2, col: '#8a7a4a', key: seed + 1 });
  const n = Math.round(R * 0.55); for (let i = 0; i < n; i++) { const a = r(), b = r(), xx = x + (a - 0.5) * 1.8 * R * (1 - b * 0.55), yy = y - b * R * 0.58 - 4; const c = pal[Math.floor(r() * pal.length)];
    if (kind !== 'old' && r() < 0.28) pea(xx, yy, R / 220); else cube(xx, yy, R / 220 * (0.9 + r() * 0.3), c[0], c[1], (r() - 0.5) * 0.8, seed + 10 + i); }
  if (kind === 'old') { for (let i = 0; i < 4; i++) olive(x + (r() - 0.5) * R * 1.3, y - R * (0.3 + r() * 0.3), R / 260, r() * 3); for (let i = 0; i < 3; i++) crayTail(x + (r() - 0.5) * R * 1.2, y - R * (0.2 + r() * 0.35), R / 300, r() * 3); }
  for (let i = 0; i < 6; i++) mayoBlob(x + (r() - 0.5) * R * 1.3, y - R * (0.15 + r() * 0.4), R / 260, i);
  for (let i = 0; i < 4; i++) { const xx = x + (r() - 0.5) * R, yy = y - R * (0.4 + r() * 0.2); for (let k = 0; k < 5; k++) pencil([[xx, yy], [xx + Math.cos(k * 1.2) * 14 * R / 220, yy + Math.sin(k * 1.2) * 10 * R / 220]], { w: 2, col: '#3a6a1a', a: 0.9, pass2: false }); }
  glow(x - R * 0.3, y - R * 0.5, R * 0.3, 'rgba(255,250,230,1)', 0.35 + 0.1 * Math.sin(t * 3));
}
function crystalBowl(x, y, R, t, o = {}) {                              // хрустальная салатница на ножке: грани, блики (back → горка → front)
  push(x, y, 1); const kind = o.kind || 'soviet';
  ell(0, R * 0.62, R * 0.55, R * 0.1, { wash: '#000', washA: 0.2, line: false });
  rect(-R * 0.16, R * 0.32, R * 0.32, R * 0.26, { wash: OL.crystal, washA: 0.8, w: 2, col: '#5a6a7a' }); ell(0, R * 0.58, R * 0.42, R * 0.08, { wash: OL.crystal, washA: 0.9, w: 2, col: '#5a6a7a' });
  ell(0, 0, R, R * 0.22, { wash: '#b8c8d4', washA: 0.9, w: 2.2, col: '#4a5a6a' });
  if (o.empty) { ell(0, 0, R * 0.9, R * 0.18, { wash: '#efe6c8', washA: 1, w: 1.4, col: '#a89a6a' }); }
  else oliHeap(0, 0, R * 0.92, t, kind, o.seed || 8100);
  const f = shape([[-R, 0], [-R * 0.86, R * 0.22], [-R * 0.5, R * 0.36], [0, R * 0.4], [R * 0.5, R * 0.36], [R * 0.86, R * 0.22], [R, 0], [R * 0.6, R * 0.12], [0, R * 0.16], [-R * 0.6, R * 0.12]], { wash: OL.crystal, washA: 0.75, w: 2.4, col: '#4a5a6a', key: 8150 });
  for (let i = -5; i <= 5; i++) { const xx = i * R * 0.17; poly([[xx - R * 0.07, R * 0.13], [xx, R * 0.36 - Math.abs(i) * R * 0.018], [xx + R * 0.07, R * 0.13]], { wash: i % 2 ? '#eef6fa' : '#a8bccc', washA: 0.7, w: 1.2, col: '#6a7a8a', a: 0.6 }); }
  glow(-R * 0.5, R * 0.12, R * 0.12, 'rgba(255,255,255,1)', 0.8 + 0.2 * Math.sin(t * 4)); glow(R * 0.3, R * 0.25, R * 0.06, 'rgba(255,255,255,1)', 0.9);
  pop();
}
function doctorska(x, y, s, rot = 0, cut = 1) {                          // батон докторской: оболочка, срез с жиринками, этикетка
  push(x, y, s, rot); const b = shape(tubeP([[-150, 0], [0, -6], [150, 0]], 50, 50), { wash: '#d8847e', washA: 1, w: 2.4, col: '#5a1a1a', key: 8200 }); shadeG(b.path, 0, -60, 0, 50, '#7a2a2a', 0.35);
  for (let i = 0; i < 6; i++) pencil([[-120 + i * 48, -48], [-128 + i * 48, 48]], { w: 1.6, col: '#f4e0c0', a: 0.6, pass2: false });
  rect(-60, -24, 120, 46, { wash: '#f2ecd6', washA: 1, w: 1.8, col: '#5a1a1a' }); txt('ДОКТОРСКАЯ', 0, 0, 18, { font: 'Osw', col: '#a8241e' });
  if (cut) { ell(150, 0, 18, 50, { wash: OL.saus, washA: 1, w: 2, col: '#5a1a1a' }); const r = rng(8210); for (let i = 0; i < 6; i++) ell(146 + (r() - 0.5) * 16, (r() - 0.5) * 70, 2.4, 2.4, { wash: '#fff6ea', washA: 1, line: false }); }
  pencil([[-150, 0], [-176, -14], [-182, 6]], { w: 3, col: '#c8a060', pass2: false }); pop();
}
function peaCan(x, y, s, open = 0) {                                    // банка «Зелёный горошек»
  push(x, y, s); const c = rect(-60, -150, 120, 150, { wash: '#c8ccd0', washA: 1, w: 2.4, col: '#3a3e44', key: 8220 }); shadeG(c.path, 60, 0, -30, 0, '#5a5e66', 0.45);
  rect(-60, -124, 120, 98, { wash: '#2e7a3a', washA: 1, w: 1.8, col: '#1a3a1a' }); for (let i = 0; i < 5; i++) pea(-36 + i * 18, -50, 1); txt('ЗЕЛЁНЫЙ', 0, -104, 20, { font: 'Osw', col: '#f6e7a0' }); txt('ГОРОШЕК', 0, -80, 20, { font: 'Osw', col: '#f6e7a0' });
  ell(0, -150, 60, 12, { wash: open ? '#9aa0a8' : '#d8dce0', washA: 1, w: 2, col: '#3a3e44' }); if (open) { ell(0, -150, 52, 9, { wash: '#4a7a1a', washA: 1, w: 1 }); for (let i = 0; i < 6; i++) pea(-30 + i * 12, -151, 0.8); } pop();
}
function mayoJar(x, y, s, t, o = {}) {                                  // стеклянная банка «Провансаль» 1970-х: жестяная крышка, бумажная этикетка
  push(x, y, s); const lid = o.lid ?? 0, j = shape(spline([[-62, 0], [-70, -40], [-70, -150], [-56, -176], [56, -176], [70, -150], [70, -40], [62, 0]], true, 6), { wash: OL.mayo, washA: 1, w: 2.6, col: '#5a5040', key: 8230 });
  shadeG(j.path, 70, 0, -10, 0, '#c8b890', 0.4); glow(-40, -110, 26, 'rgba(255,255,255,1)', 0.8);
  rect(-70, -132, 140, 86, { wash: '#f2ead0', washA: 1, w: 1.8, col: '#5a4a2a' }); rect(-70, -132, 140, 18, { wash: '#d9482b', washA: 1, w: 1.2, col: '#5a1a08' }); rect(-70, -64, 140, 18, { wash: '#d9482b', washA: 1, w: 1.2, col: '#5a1a08' });
  txt('МАЙОНЕЗ', 0, -100, 17, { font: 'Osw', col: '#6b7a2e' }); txt('ПРОВАНСАЛЬ', 0, -80, 21, { font: 'Osw', col: '#a8241e' });
  push(0, -184 - lid * 220, 1, lid * 2.4); ell(0, 0, 60, 13, { wash: '#c8b070', washA: 1, w: 2.2, col: '#4a3a1a' }); rect(-60, -10, 120, 14, { wash: '#b89a4a', washA: 1, w: 2, col: '#4a3a1a' }); for (let i = 0; i < 12; i++) pencil([[-56 + i * 10, -8], [-56 + i * 10, 2]], { w: 1.2, col: '#6a5a2a', a: 0.6, pass2: false }); pop();
  pop();
}
function pickle(x, y, s, rot = 0, o = {}) {                              // солёный огурчик: пупырышки, блик рассола
  push(x, y, s, rot); const p = blob([[-60, 0], [-50, -20], [0, -26], [50, -20], [62, 0], [50, 20], [0, 26], [-50, 20]], { wash: OL.pick, washA: 1, w: 2.2, col: OL.pickD, key: o.key || 8240 }); shadeG(p.path, 0, 30, 0, -20, '#1e3a06', 0.4);
  const r = rng(8241); for (let i = 0; i < 12; i++) ell(-50 + r() * 100, (r() - 0.5) * 36, 2.6, 2.6, { wash: '#3e5a14', washA: 1, line: false }); glow(-10, -12, 20, 'rgba(240,255,200,1)', 0.6);
  if (o.bite) { ell(58, 0, 14, 24, { wash: '#d8e8a0', washA: 1, w: 2, col: OL.pickD }); for (let i = 0; i < 4; i++) ell(56, -10 + i * 7, 2, 3, { wash: '#a8b860', washA: 1, line: false }); } pop();
}
function olive(x, y, s, rot = 0, o = {}) {                              // зелёная оливка (с красной начинкой — o.stuffed)
  push(x, y, s, rot); const b = ell(0, 0, 30, 22, { wash: o.black ? '#2a2a24' : OL.olive, washA: 1, w: 2, col: OL.oliveD, key: o.key || 8250 }); shadeG(b.path, 30, 20, -10, -10, '#1a2004', 0.4);
  if (o.stuffed) ell(26, 0, 7, 9, { wash: '#d9482b', washA: 1, w: 1.2, col: '#5a1008' }); glow(-10, -8, 9, 'rgba(255,255,230,1)', 0.85); pop();
}
function caper(x, y, s) { ell(x, y, 7 * s, 7 * s, { wash: '#7a8a3a', washA: 1, w: 1, col: '#2a3a0a', a: 0.7 }); pencil([[x - 3 * s, y - 2 * s], [x + 2 * s, y + 3 * s]], { w: 1, col: '#3a4a10', a: 0.6, pass2: false }); }
function crayTail(x, y, s, rot = 0) {                                    // раковая шейка: сегменты, загиб
  push(x, y, s, rot); for (let i = 0; i < 5; i++) { const a = i * 0.32; ell(Math.cos(a) * 22 * i * 0.6, Math.sin(a) * 18 * i * 0.6, 20 - i * 2, 15 - i * 1.6, { wash: i % 2 ? OL.cray : '#f0705a', washA: 1, w: 1.4, col: OL.crayD }); }
  poly([[40, 44], [56, 58], [34, 62]], { wash: OL.cray, washA: 1, w: 1.2, col: OL.crayD }); pop();
}
function crayfish(x, y, s, rot = 0, t = 0) {                            // целый варёный рак: клешни, усы, хвост
  push(x, y, s, rot); for (const sd of [-1, 1]) { pencil([[sd * 20, -60], [sd * 50, -120], [sd * 70, -150]], { w: 9, col: OL.crayD }); const c = blob([[sd * 60, -150], [sd * 40, -200], [sd * 70, -230], [sd * 100, -196], [sd * 90, -150]], { wash: OL.cray, washA: 1, w: 2, col: OL.crayD }); pencil([[sd * 70, -230], [sd * 72, -190]], { w: 2, col: OL.crayD, pass2: false });
    for (let k = 0; k < 3; k++) pencil([[sd * 26, -20 + k * 20], [sd * 70, -10 + k * 24]], { w: 3, col: OL.crayD, pass2: false }); pencil(spline([[sd * 10, -90], [sd * 40, -200 + Math.sin(t * 2) * 10], [sd * 130, -300]], false, 6), { w: 1.6, col: OL.crayD, pass2: false }); }
  const b = blob([[-28, -90], [0, -100], [28, -90], [30, -20], [0, -10], [-30, -20]], { wash: OL.cray, washA: 1, w: 2.2, col: OL.crayD, key: 8260 }); shadeG(b.path, 30, 0, -20, 0, '#7a1a08', 0.4);
  for (let i = 0; i < 5; i++) ell(0, i * 26, 26 - i * 3, 16, { wash: i % 2 ? OL.cray : '#f06a4a', washA: 1, w: 1.6, col: OL.crayD });
  poly([[-30, 130], [0, 120], [30, 130], [0, 170]], { wash: OL.cray, washA: 1, w: 1.6, col: OL.crayD }); for (const sd of [-1, 1]) ell(sd * 12, -94, 5, 5, { wash: '#1a0a04', washA: 1, w: 1 }); glow(-10, -60, 20, 'rgba(255,240,220,1)', 0.6); pop();
}
function roastBird(x, y, s, t, o = {}) {                                // жареный рябчик (o.chicken — курица крупнее и светлее)
  const c = o.chicken ? '#e0a050' : OL.grouse, cD = o.chicken ? '#8a4a10' : OL.grouseD; push(x, y, s);
  const b = blob([[-90, 0], [-100, -50], [-60, -100], [10, -110], [80, -80], [100, -30], [80, 10]], { wash: c, washA: 1, w: 2.4, col: cD, key: 8270 }); shadeG(b.path, 0, -110, 0, 10, '#fff0c0', 0.3); shadeG(b.path, 0, 20, 0, -60, cD, 0.4);
  for (const sd of [-1, 1]) { const l = blob([[sd * 50, -20], [sd * 110, -50], [sd * 130, -20], [sd * 100, 10]], { wash: c, washA: 1, w: 2, col: cD }); pencil([[sd * 125, -32], [sd * 150, -50]], { w: 6, col: '#f4ead0' }); ell(sd * 152, -52, 7, 7, { wash: '#f4ead0', washA: 1, w: 1.2 }); }
  for (let i = 0; i < 5; i++) pencil([[-50 + i * 24, -96], [-40 + i * 24, -70]], { w: 2, col: cD, a: 0.6, pass2: false }); glow(-20, -80, 30, 'rgba(255,250,220,1)', 0.5 + 0.2 * Math.sin(t * 4));
  if (o.steam) for (let i = 0; i < 3; i++) { const k = ((t * 0.6 + i / 3) % 1); pencil(spline([[-30 + i * 30, -120 - k * 120], [-20 + i * 30 + Math.sin(t * 3 + i) * 14, -150 - k * 120], [-30 + i * 30, -190 - k * 120]], false, 5), { w: 4, col: '#ffffff', a: 0.5 * (1 - k), pass2: false }); }
  pop();
}
function carrot(x, y, s, rot = 0) { push(x, y, s, rot); poly([[-14, -70], [14, -70], [4, 70], [-4, 70]], { wash: OL.carrot, washA: 1, w: 2, col: OL.carrotD }); for (let i = 0; i < 5; i++) pencil([[-10, -50 + i * 24], [2, -46 + i * 24]], { w: 1.4, col: OL.carrotD, a: 0.6, pass2: false }); for (let k = -1; k <= 1; k++) pencil([[0, -70], [k * 18, -110]], { w: 4, col: '#4a7a1a' }); pop(); }
function oliveBranch(x, y, s, rot = 0) { push(x, y, s, rot); pencil(spline([[0, 0], [60, -30], [140, -40]], false, 5), { w: 4, col: '#5a4a2a' }); for (let i = 0; i < 6; i++) { push(20 + i * 22, -14 - i * 5, 1, (i % 2 ? -0.7 : 0.7)); blob([[0, 0], [10, -6], [34, 0], [10, 6]], { wash: '#8a9a6a', washA: 1, w: 1.2, col: '#3a4a2a' }); pop(); } olive(70, -10, 0.5); olive(110, -12, 0.5); pop(); }

/* ---- костюмы выпуска (обёртка фартука — в engine/costumes.js) */
Object.assign(OUTFIT, {
  hoodieO: Object.assign({}, OUTFIT.hoodieA, { top: '#3a6a3a', topD: '#1a3a1a', topL: '#5a8e54', print: 'ТОМ', capTxt: 'Т', capCol: '#d9482b', capTxtCol: '#f6efd8', printCol: '#f4ecd6', accent: '#e8b53a', apron: 1 }),
  sovietA: Object.assign({}, OUTFIT.soviet, { apron: 1 }),
  chefO: Object.assign({}, OUTFIT.chef),
  clerkA: Object.assign({}, OUTFIT.victorian, { top: '#4a3a2a', topD: '#241a10', topL: '#7a6448', hat: null, apron: 1 })
});
Object.assign(PROPS, {
  spoon() { pencil([[0, 10], [0, -110]], { w: 7, col: '#c8ccd0' }); pencil([[0, 10], [0, -110]], { w: 2.4, col: '#ffffff', a: 0.6, pass2: false }); ell(0, -150, 22, 38, { wash: '#d8dce0', washA: 1, w: 2.2, col: '#4a5058' }); glow(-6, -160, 10, 'rgba(255,255,255,1)', 0.8); },
  pickleP() { pickle(0, -40, 0.7, -1.3, { key: 8280 }); },
  pickleB() { pickle(0, -40, 0.7, -1.3, { key: 8281, bite: 1 }); },
  oliveP() { olive(0, -40, 1.2, 0.2, { key: 8282, stuffed: 1 }); },
  ladle() { pencil([[0, 20], [10, -140]], { w: 8, col: '#b8733a' }); ell(14, -170, 40, 30, { wash: '#c8ccd0', washA: 1, w: 2.2, col: '#3a3e44' }); },
  book() { push(0, -60, 1, -0.1); rect(-70, -50, 140, 100, { wash: '#7a3a2a', washA: 1, w: 2.4, col: '#2a0e08' }); rect(-62, -44, 124, 88, { wash: '#efe2c4', washA: 1, w: 1.4, col: '#5a4a2a' }); for (let i = 0; i < 5; i++) pencil([[-50, -28 + i * 16], [50, -28 + i * 16]], { w: 1.2, col: '#7a6a4a', a: 0.6, pass2: false }); pop(); }
});
