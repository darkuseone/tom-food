/* 018 — еда выпуска «Мамалыга»: купол мамалыги на доске (o.cut — разрезан ниткой, o.steam, o.slices), чугунок-ceaun (кипит жёлтая каша / серая просяная),
   мешалка-făcăleț, початок кукурузы (зёрна рядами, листья, «шёлк»), брынза, миска сметаны, шкварки, круглая доска, натянутая нитка, мешок зерна с надписью,
   миска просяной каши, кусок мамалыги в руке. Реквизит Тома — PROPS. */
const MM = { y: '#f2c23a', yD: '#c88c18', yL: '#ffe486', crust: '#b8741c', br: '#f6f2e4', brD: '#d8d0b8', sm: '#fbf7ec', smD: '#e4dcc4', shk: '#a8582a', shkD: '#6a3014', iron: '#2a2826', ironL: '#5a5650', wood: '#a8743a', woodD: '#6a4420', woodL: '#d0a060', millet: '#c8b890', milletD: '#9a8a66', corn: '#f4c430', cornD: '#c8901a', husk: '#c8c888', huskD: '#8a8a4a' };

function mmBoard(x, y, w, h, o = {}) {                                     // круглая доска: торец, кольца древесины, трещинки, ручка
  push(x, y, 1); ell(10, h * 0.5, w * 1.02, h * 0.6, { wash: '#000000', washA: 0.18, line: false });
  const e = ell(0, h * 0.18, w, h * 0.5, { wash: MM.woodD, washA: 1, w: 2.2, col: '#3a2410', key: (o.key || 18000) + 1 });
  const b = ell(0, 0, w, h * 0.46, { wash: MM.wood, washA: 1, w: 2.6, col: '#3a2410', key: o.key || 18000 }); shadeG(b.path, w * 0.7, 0, -w * 0.4, 0, MM.woodD, 0.35);
  for (let i = 1; i < 4; i++) ell(w * 0.08, h * 0.02, w * 0.22 * i, h * 0.1 * i, { line: true, w: 1, col: '#7a5028', a: 0.5 });
  const r = rng((o.key || 18000) + 7); for (let i = 0; i < 6; i++) { const a = r() * 6.28, rr = 0.4 + r() * 0.5; pencil([[Math.cos(a) * w * rr, Math.sin(a) * h * 0.4 * rr], [Math.cos(a) * w * (rr + 0.12), Math.sin(a) * h * 0.4 * (rr + 0.12)]], { w: 1.2, col: '#5a3818', a: 0.6, pass2: false }); }
  pencil([[-w * 0.6, -h * 0.25], [-w * 0.1, -h * 0.4]], { w: 4, col: MM.woodL, a: 0.6, pass2: false }); pop();
}
function mamaliga(x, y, w, h, t, o = {}) {                                  // купол мамалыги: жёлтый, зернистый, корочка от чугунка, блик; o.cut 0..1 — нитка разрезала, ломоть отваливается; o.steam
  push(x, y, 1); const k = o.key || 18010, cut = o.cut || 0, P = [[-w, 0], [-w * 0.96, -h * 0.42], [-w * 0.72, -h * 0.84], [-w * 0.3, -h], [w * 0.3, -h], [w * 0.72, -h * 0.84], [w * 0.96, -h * 0.42], [w, 0], [0, h * 0.12]];
  const draw = (sx, kk) => { const m = shape(spline(P.filter(p => p[0] * sx >= -2 || sx === 0), true, 8), { wash: MM.y, washA: 1, w: 2.6, col: '#6a4410', key: kk });
    shadeG(m.path, w * 0.8, 0, -w * 0.3, -h, MM.yD, 0.45); hatch(m.path, m.bb, { gap: 9, a: 0.12, col: MM.crust, ang: 0.6, key: kk + 1, w: 1 });
    const r = rng(kk + 2); for (let i = 0; i < 26; i++) { const px = (r() * 2 - 1) * w * 0.85, py = -r() * h * 0.85; if (sx && px * sx < 0) continue; ell(px, py, 2.4, 1.8, { wash: MM.yD, washA: 0.7, line: false }); }
    pencil(spline([[-w * 0.92, -h * 0.1], [-w * 0.5, h * 0.08], [0, h * 0.11], [w * 0.5, h * 0.08], [w * 0.92, -h * 0.1]], false, 6), { w: 6, col: MM.crust, a: 0.55, pass2: false });   // корочка от дна
    pencil(spline([[-w * 0.6, -h * 0.72], [-w * 0.3, -h * 0.92], [w * 0.05, -h * 0.96]], false, 5), { w: 9, col: MM.yL, a: 0.75, pass2: false }); return m; };
  if (cut <= 0) draw(0, k);
  else { const dx = 26 * sm(cut); push(-dx, 0, 1, -0.03 * cut); draw(-1, k); pop(); push(dx, 0, 1, 0.05 * cut); draw(1, k + 20);
    const sl = rect(-6, -h * 0.98, 12, h * 1.06, { wash: MM.yL, washA: 1, w: 1.2, col: MM.yD }); pop();                // свежий срез — светлая полоска
    for (let i = 0; i < 6; i++) ell(-4 + (i % 2) * 8, -h * 0.15 * i - 10, 3, 2, { wash: MM.yD, washA: 0.8, line: false }); }
  if (o.steam) for (let i = 0; i < 4; i++) { const q = (t * 0.45 + i / 4) % 1; pencil(spline([[-w * 0.45 + i * w * 0.3, -h], [-w * 0.4 + i * w * 0.3 + Math.sin(q * 6 + i) * 18, -h - 60 - q * 90], [-w * 0.45 + i * w * 0.3 + Math.cos(q * 5) * 14, -h - 130 - q * 140]], false, 6), { w: 7, col: '#ffffff', a: 0.4 * (1 - q), pass2: false }); }
  pop();
}
function ceaun(x, y, s, t, o = {}) {                                         // чугунок-ceaun: пузатый, ушки, дужка, блики, внутри кипит каша (o.fill: 'y' — мамалыга, 'm' — просо), o.fire — огонь снизу, o.back/o.front
  push(x, y, s); const k = o.key || 18030;
  if (o.fire) { for (let i = 0; i < 7; i++) { const q = Math.sin(t * 9 + i * 1.7); blob([[-120 + i * 40, 150], [-130 + i * 40 + q * 8, 80 - (i % 3) * 20], [-110 + i * 40, 30 + q * 10 - (i % 2) * 30], [-96 + i * 40, 90], [-90 + i * 40, 150]], { wash: i % 2 ? '#ff8a20' : '#ffd040', washA: 0.85, line: false }); } glow(0, 130, 220, 'rgba(255,150,50,1)', 0.5);
    for (let i = 0; i < 4; i++) { push(-90 + i * 60, 160, 1, (i - 1.5) * 0.3); rect(-70, -12, 140, 24, { wash: '#4a2a14', washA: 1, w: 1.6, col: '#1a0a04' }); pop(); } }
  const body = blob([[-150, -60], [-170, 0], [-150, 90], [-80, 140], [0, 152], [80, 140], [150, 90], [170, 0], [150, -60]], { wash: MM.iron, washA: 1, w: 3, col: '#000000', key: k });
  shadeG(body.path, -120, 0, 140, 0, '#000000', 0.5); hatch(body.path, body.bb, { gap: 8, a: 0.14, col: '#000', ang: 0.8, key: k + 1, w: 1 });
  pencil(spline([[-130, -20], [-146, 40], [-110, 104]], false, 6), { w: 6, col: MM.ironL, a: 0.7, pass2: false }); pencil(spline([[-120, -40], [-130, 0]], false, 4), { w: 3, col: '#a8a49c', a: 0.6, pass2: false });
  for (const sd of [-1, 1]) { ell(sd * 166, -46, 18, 12, { wash: MM.iron, washA: 1, w: 2, col: '#000' }); }
  const rim = ell(0, -62, 156, 30, { wash: '#1a1816', washA: 1, w: 3, col: '#000', key: k + 2 });
  if (o.fill) { const c = o.fill === 'm' ? [MM.millet, MM.milletD] : [MM.y, MM.yD]; const f = ell(0, -58, 140, 22, { wash: c[0], washA: 1, w: 1.4, col: c[1] }); shadeG(f.path, 120, 0, -100, 0, c[1], 0.3);
    for (let i = 0; i < 5; i++) { const q = (t * 1.6 + i * 0.37) % 1, bx = -100 + i * 50 + Math.sin(i * 3) * 10; ell(bx, -58 + Math.sin(i) * 6, 6 + q * 12, (6 + q * 12) * 0.5, { wash: c[0], washA: 1 - q, w: 1.2, col: c[1], a: 1 - q }); }
    if (o.steam !== false) for (let i = 0; i < 3; i++) { const q = (t * 0.5 + i / 3) % 1; pencil(spline([[-60 + i * 60, -70], [-50 + i * 60 + Math.sin(q * 6) * 20, -150 - q * 80], [-60 + i * 60, -240 - q * 120]], false, 6), { w: 8, col: '#ffffff', a: 0.35 * (1 - q), pass2: false }); } }
  if (o.bail !== false) pencil(spline([[-166, -46], [-120, -200], [0, -236], [120, -200], [166, -46]], false, 8), { w: 4, col: '#1a1816', pass2: false });
  pop();
}
function facalet(x, y, s, rot = 0) {                                         // мешалка-făcăleț: толстая гладкая палка, светлое дерево, потёртый кончик
  push(x, y, s, rot); const b = poly([[-10, -200], [10, -200], [16, 120], [-16, 120]], { wash: MM.woodL, washA: 1, w: 2, col: '#5a3818' }); shadeG(b.path, 14, 0, -10, 0, MM.woodD, 0.4);
  ell(0, 120, 16, 8, { wash: MM.y, washA: 1, w: 1.4, col: MM.yD }); pencil([[-4, -180], [-4, 100]], { w: 2, col: '#f0c890', a: 0.6, pass2: false }); pop();
}
function cornCob(x, y, s, rot = 0, o = {}) {                                 // початок: зёрна рядами с бликами, листья обёртки (o.husk 0..1 — раскрыты), «шёлк»-рыльца
  push(x, y, s, rot); const k = o.key || 18050;
  if (o.husk !== 0) for (const sd of [-1, 1]) { const hv = shape(spline([[0, 100], [sd * 50, 70], [sd * (60 + 30 * (o.husk || 1)), -40], [sd * 30, -150], [sd * 10, -40]], true, 6), { wash: MM.husk, washA: 1, w: 1.8, col: '#4a4a1a', key: k + (sd > 0 ? 1 : 2) }); shadeG(hv.path, sd * 60, 0, 0, 0, MM.huskD, 0.4); for (let i = 0; i < 3; i++) pencil(spline([[sd * 8, 90], [sd * (30 + i * 10), -10], [sd * (16 + i * 6), -120]], false, 5), { w: 1, col: MM.huskD, a: 0.7, pass2: false }); }
  const cb = blob([[-34, 80], [-40, 0], [-34, -90], [0, -130], [34, -90], [40, 0], [34, 80], [0, 96]], { wash: o.white ? '#f0e8c8' : MM.corn, washA: 1, w: 2.2, col: '#6a4a10', key: k });
  ctx.save(); ctx.clip(cb.path); for (let row = 0; row < 11; row++) for (let c = -3; c <= 3; c++) { const yy = 80 - row * 20, xx = c * 11 + (row % 2) * 5; ell(xx, yy, 6, 9, { wash: o.white ? '#f8f2dc' : (c * 7 + row) % 5 === 0 ? '#ffd860' : MM.corn, washA: 1, w: 0.9, col: MM.cornD }); ell(xx - 2, yy - 3, 1.8, 2.4, { wash: '#ffffff', washA: 0.7, line: false }); } ctx.restore();
  shadeG(cb.path, 36, 0, -20, 0, MM.cornD, 0.4);
  if (o.silk !== false) for (let i = 0; i < 6; i++) pencil(spline([[-6 + i * 2, -126], [-16 + i * 7, -160], [-24 + i * 10 + Math.sin(i) * 6, -196]], false, 5), { w: 1.4, col: '#a86a30', a: 0.8, pass2: false });
  pop();
}
function brinza(x, y, s, rot = 0, o = {}) {                                  // брынза: белый ломкий брусок, дырочки, крошки
  push(x, y, s, rot); const b = poly([[-50, -30], [40, -36], [56, 20], [-44, 30]], { wash: MM.br, washA: 1, w: 2, col: '#8a8470', key: o.key || 18070 }); shadeG(b.path, 50, 30, -30, -30, MM.brD, 0.4);
  const r = rng(o.key || 18070); for (let i = 0; i < 6; i++) ell(-36 + r() * 76, -24 + r() * 46, 3 + r() * 3, 2 + r() * 2, { wash: MM.brD, washA: 1, w: 0.8, col: '#a8a088' });
  for (let i = 0; i < 4; i++) blob([[60 + i * 14, 26 + (i % 2) * 6], [66 + i * 14, 18], [72 + i * 14, 28]], { wash: MM.br, washA: 1, w: 1, col: '#8a8470' }); pencil([[-40, -26], [20, -32]], { w: 3, col: '#ffffff', a: 0.8, pass2: false }); pop();
}
function smBowl(x, y, s, t, o = {}) {                                        // глиняная миска сметаны: охристая глазурь с полоской, белая шапка, ложка
  push(x, y, s); ell(0, 40, 110, 16, { wash: '#000', washA: 0.15, line: false });
  const bw = blob([[-100, -20], [-86, 30], [-40, 50], [40, 50], [86, 30], [100, -20]], { wash: '#b8642a', washA: 1, w: 2.4, col: '#4a2010', key: o.key || 18080 }); shadeG(bw.path, 90, 0, -60, 0, '#6a3414', 0.4);
  pencil(spline([[-92, 6], [0, 26], [92, 6]], false, 6), { w: 6, col: '#e8c070', a: 0.8, pass2: false }); for (let i = 0; i < 7; i++) ell(-72 + i * 24, 16 + Math.sin(i) * 3, 4, 3, { wash: '#2a5a3a', washA: 1, line: false });
  const top = ell(0, -20, 100, 18, { wash: MM.sm, washA: 1, w: 2, col: '#8a8470' }); blob([[-50, -24], [-20, -46], [10, -40], [30, -26]], { wash: MM.sm, washA: 1, w: 1.6, col: MM.smD }); pencil([[-40, -30], [0, -40]], { w: 4, col: '#ffffff', pass2: false });
  if (o.spoon) { push(40, -40, 1, 0.5); rect(-6, -130, 12, 110, { wash: MM.woodL, washA: 1, w: 1.4, col: '#5a3818' }); pop(); } pop();
}
function shkvarki(x, y, s, rot = 0, o = {}) {                                 // шкварки: румяные кубики сала с хрустящей корочкой и блеском жира
  push(x, y, s, rot); const r = rng(o.key || 18090); for (let i = 0; i < (o.n || 5); i++) { const px = (r() - 0.5) * 80, py = (r() - 0.5) * 30, rr = r() * 0.6; push(px, py, 0.8 + r() * 0.4, rr);
    const c = poly([[-16, -10], [14, -14], [18, 10], [-14, 14]], { wash: i % 2 ? MM.shk : '#c87a3a', washA: 1, w: 1.4, col: MM.shkD }); shadeG(c.path, 16, 10, -10, -10, MM.shkD, 0.45); pencil([[-10, -8], [6, -10]], { w: 2.4, col: '#ffe0a0', a: 0.7, pass2: false }); pop(); } pop();
}
function mmThread(x0, y0, x1, y1, o = {}) {                                  // натянутая нитка: белая с вощёным блеском, узелки на концах
  pencil([[x0, y0 + 2], [x1, y1 + 2]], { w: (o.w || 3) + 3, col: '#4a3418', a: 0.7, pass2: false }); pencil([[x0, y0], [x1, y1]], { w: o.w || 3, col: o.col || '#f8f4e8', pass2: false }); pencil([[x0, y0 - 1], [x1, y1 - 1]], { w: 1, col: '#c8b880', a: 0.6, pass2: false });
  for (const [xx, yy] of [[x0, y0], [x1, y1]]) ell(xx, yy, 5, 5, { wash: '#f8f4e8', washA: 1, w: 1, col: '#8a8470' });
}
function grainSack(x, y, s, o = {}) {                                         // мешок зерна: холщовый, завязан, надпись/печать, высыпаются зёрна (o.spill, o.grain 'w' пшеница | 'c' кукуруза | 'm' просо)
  push(x, y, s, o.rot || 0); const k = o.key || 18100;
  const b = blob([[-70, 0], [-82, -70], [-64, -150], [-30, -170], [30, -170], [64, -150], [82, -70], [70, 0], [0, 10]], { wash: o.col || '#d8c08a', washA: 1, w: 2.4, col: '#5a4420', key: k }); shadeG(b.path, 70, 0, -50, -100, '#8a6a3a', 0.45); hatch(b.path, b.bb, { gap: 6, a: 0.12, col: '#6a4a20', ang: 1.2, key: k + 1, w: 0.9 });
  blob([[-30, -170], [-16, -200], [0, -186], [16, -204], [30, -170]], { wash: o.col || '#d8c08a', washA: 1, w: 2, col: '#5a4420' }); pencil([[-34, -168], [34, -168]], { w: 4, col: '#7a4a1a', pass2: false });
  if (o.label) { txt(o.label, 0, -70, o.lsize || 30, { font: 'Osw', col: o.lcol || '#7a2a14', rot: -0.05 }); }
  if (o.stamp) { ell(0, -110, 26, 26, { line: true, w: 3, col: '#a82a1a', a: 0.8 }); txt(o.stamp, 0, -102, 18, { font: 'Osw', col: '#a82a1a' }); }
  const gc = o.grain === 'c' ? MM.corn : o.grain === 'm' ? '#e8d8a0' : '#d8a850'; for (let i = 0; i < 9; i++) ell(-50 + i * 13, -176 + Math.sin(i) * 4, 5, 3.4, { wash: gc, washA: 1, w: 0.8, col: '#7a5a20' });
  if (o.spill) { const r = rng(k + 3); for (let i = 0; i < 14; i++) ell(60 + r() * 90, -10 + r() * 20, 5, 3.4, { wash: gc, washA: 1, w: 0.8, col: '#7a5a20', rot: r() * 3 }); }
  pop();
}
function milletBowl(x, y, s, t, o = {}) {                                     // глиняная миска серой просяной каши-«пульса», деревянная ложка, пар
  push(x, y, s); const bw = blob([[-90, -16], [-76, 28], [-30, 46], [30, 46], [76, 28], [90, -16]], { wash: '#8a5a3a', washA: 1, w: 2.2, col: '#3a2010', key: o.key || 18120 }); shadeG(bw.path, 80, 0, -60, 0, '#4a2a14', 0.45);
  pencil(spline([[-84, -2], [0, 14], [84, -2]], false, 6), { w: 3, col: '#c88a5a', a: 0.6, pass2: false });
  const top = blob([[-86, -18], [-50, -40], [0, -48], [50, -40], [86, -18], [0, -6]], { wash: MM.millet, washA: 1, w: 1.8, col: MM.milletD }); const r = rng((o.key || 18120) + 1); for (let i = 0; i < 30; i++) ell(-70 + r() * 140, -38 + r() * 26, 2, 2, { wash: r() > 0.5 ? '#e8dcb0' : MM.milletD, washA: 1, line: false });
  if (o.spoon !== false) { push(30, -40, 1, 0.6); rect(-5, -120, 10, 100, { wash: MM.woodL, washA: 1, w: 1.2, col: '#5a3818' }); ell(0, -10, 14, 18, { wash: MM.woodL, washA: 1, w: 1.2, col: '#5a3818' }); pop(); }
  if (o.steam) for (let i = 0; i < 3; i++) { const q = (t * 0.5 + i / 3) % 1; pencil(spline([[-30 + i * 30, -46], [-24 + i * 30 + Math.sin(q * 6) * 12, -90 - q * 50], [-30 + i * 30, -140 - q * 70]], false, 5), { w: 6, col: '#ffffff', a: 0.35 * (1 - q), pass2: false }); }
  pop();
}
function mmPiece(x, y, s, rot = 0, o = {}) {                                  // кусок мамалыги: брусок-ломоть, срез светлее, зернистость; o.bite — откушен, o.cream — макнут в сметану с брынзой
  push(x, y, s, rot); const P = o.bite ? [[-44, -50], [6, -56], [18, -40], [32, -46], [44, -26], [36, -8], [48, 10], [42, 50], [-6, 56], [-46, 46]] : [[-44, -50], [6, -56], [44, -50], [50, 4], [42, 50], [-6, 56], [-46, 46], [-50, 0]];
  const b = poly(P, { wash: MM.y, washA: 1, w: 2.2, col: '#6a4410', key: o.key || 18140 }); shadeG(b.path, 40, 40, -30, -40, MM.yD, 0.45); const r = rng((o.key || 18140) + 1); for (let i = 0; i < 12; i++) ell(-30 + r() * 64, -40 + r() * 80, 2, 1.6, { wash: MM.yD, washA: 0.8, line: false });
  pencil([[-36, -44], [20, -48]], { w: 4, col: MM.yL, a: 0.8, pass2: false }); pencil([[-40, 48], [46, 44]], { w: 5, col: MM.crust, a: 0.6, pass2: false });
  if (o.cream) { blob([[-40, -50], [-20, -60], [6, -56], [30, -50], [10, -42], [-24, -44]], { wash: MM.sm, washA: 1, w: 1.4, col: MM.smD }); pencil(spline([[-10, -48], [-14, -30], [-8, -20]], false, 4), { w: 6, col: MM.sm, pass2: false }); for (let i = 0; i < 3; i++) poly([[-24 + i * 16, -58], [-16 + i * 16, -64], [-12 + i * 16, -54]], { wash: '#ffffff', washA: 1, w: 0.8, col: '#a8a088' }); }
  pop();
}
function scrollTax(x, y, s, rot = 0, o = {}) {                                 // свиток-указ: пергамент, тугра-завиток, восковая печать, строки; o.txt — заголовок
  push(x, y, s, rot); const p = rect(-90, -120, 180, 240, { wash: '#efe0b8', washA: 1, w: 2, col: '#6a5030', key: o.key || 18150 }); shadeG(p.path, 90, 120, -60, -120, '#c8a870', 0.35);
  for (const yy of [-124, 124]) { ell(0, yy, 98, 14, { wash: '#d8c08a', washA: 1, w: 2, col: '#6a5030' }); }
  if (o.txt) txt(o.txt, 0, -70, o.size || 34, { font: 'Osw', col: '#7a2a14' }); else pencil(spline([[-40, -80], [-10, -100], [20, -70], [40, -96], [50, -60]], false, 8), { w: 3, col: '#1a3a7a', pass2: false });
  for (let i = 0; i < 6; i++) pencil([[-66, -36 + i * 20], [66 - (i % 3) * 14, -36 + i * 20]], { w: 1.6, col: '#5a4030', a: 0.6, pass2: false });
  ell(40, 92, 22, 22, { wash: '#a82a1a', washA: 1, w: 1.6, col: '#5a1008' }); pencil([[34, 86], [46, 98]], { w: 2, col: '#e86a4a', pass2: false }); pop();
}
Object.assign(PROPS, {
  mmPieceP() { mmPiece(0, -40, 0.62, 0.15, { key: 18160, cream: 1 }); },
  mmBiteP() { mmPiece(0, -40, 0.62, 0.15, { key: 18161, cream: 1, bite: 1 }); },
  cornP() { cornCob(0, -60, 0.62, 0.35, { key: 18162, husk: 0.7 }); },
  facaletP() { facalet(0, -40, 0.7, 0.15); },
  threadP() { mmThread(-10, -60, 10, 120, { w: 3 }); },
  scrollTaxP() { scrollTax(0, -60, 0.5, 0.1, { key: 18163, txt: 'НАЛОГ' }); },
  spoonMilletP() { push(0, -20, 0.6, 0.3); rect(-6, -10, 12, 120, { wash: MM.woodL, washA: 1, w: 1.4, col: '#5a3818' }); ell(0, -30, 26, 34, { wash: MM.woodL, washA: 1, w: 1.6, col: '#5a3818' }); blob([[-22, -40], [-10, -64], [12, -66], [24, -40], [0, -24]], { wash: MM.millet, washA: 1, w: 1.4, col: MM.milletD }); pop(); },
  forkEmptyP() { push(0, -10, 0.6, 0.2); rect(-5, -10, 10, 120, { wash: '#b8bcc4', washA: 1, w: 1.4 }); for (let i = 0; i < 3; i++) rect(-14 + i * 12, -60, 5, 50, { wash: '#b8bcc4', washA: 1, w: 1 }); pop(); },
  quillP() { push(0, -40, 0.7, 0.4); blob([[0, 60], [-14, 0], [-20, -80], [0, -140], [14, -80], [10, 0]], { wash: '#f4f0e6', washA: 1, w: 1.6, col: '#6a6050' }); pencil([[0, 70], [0, -130]], { w: 2, col: '#8a8070', pass2: false }); pop(); },
  forkMmP() { push(0, -10, 0.6, 0.2); rect(-5, -10, 10, 120, { wash: '#b8bcc4', washA: 1, w: 1.4 }); for (let i = 0; i < 3; i++) rect(-14 + i * 12, -60, 5, 50, { wash: '#b8bcc4', washA: 1, w: 1 }); pop(); mmPiece(0, -90, 0.42, 0.1, { key: 18164 }); },
});
