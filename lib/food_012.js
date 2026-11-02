/* 012 — еда выпуска «Тульский пряник»: печатный тульский пряник (плитка с бортиком-орнаментом, надписью и глазурью; o.bite — откушен, видно повидло;
   o.half — разлом с начинкой), резная пряничная доска (зеркальный узор), чашечные весы с камешками-разновесами, горсть камешков, баранки. Реквизит — PROPS. */
const PK = { dough: '#b8743a', doughD: '#7a4218', doughL: '#d89a58', glaze: '#fff6e8', jam: '#a8282a', jamL: '#d8483a', milk: '#e8c890', wood: '#c8a070', woodD: '#7a5428' };

function pryanikTop(x, y, w, h, o = {}) {                                // лицевая грань пряника: бортик-орнамент, рамка из точек, надпись, цветок/герб в центре
  const k = o.key || 12000; const top = rect(x - w / 2, y - h / 2, w, h, { wash: PK.dough, washA: 1, w: 2.4, col: '#3a1a06', key: k });
  shadeG(top.path, x + w / 2, y + h / 2, x - w / 2, y - h / 2, PK.doughD, 0.35);
  rect(x - w / 2 + w * 0.06, y - h / 2 + h * 0.08, w * 0.88, h * 0.84, { line: true, w: 3, col: PK.doughD });
  for (let i = 0; i < 22; i++) { const q = i / 22, px = x - w / 2 + w * 0.1 + q * w * 0.8; ell(px, y - h / 2 + h * 0.14, 3, 3, { wash: PK.doughD, washA: 0.9, line: false }); ell(px, y + h / 2 - h * 0.14, 3, 3, { wash: PK.doughD, washA: 0.9, line: false }); }
  if (o.text !== '') txt(o.text || 'ТУЛА', x, y - h * 0.18, h * 0.18, { font: 'Osw', col: PK.doughD });
  push(x, y + h * 0.1, h / 240); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; blob([[0, 0], [Math.cos(a - 0.35) * 30, Math.sin(a - 0.35) * 30], [Math.cos(a) * 56, Math.sin(a) * 56], [Math.cos(a + 0.35) * 30, Math.sin(a + 0.35) * 30]], { wash: PK.doughL, washA: 1, w: 1.6, col: PK.doughD }); } ell(0, 0, 14, 14, { wash: PK.doughD, washA: 1, w: 1.4 });
  for (const sd of [-1, 1]) { pencil(spline([[sd * 60, 30], [sd * 110, 10], [sd * 140, 40]], false, 5), { w: 3, col: PK.doughD, pass2: false }); blob([[sd * 110, 10], [sd * 130, -10], [sd * 140, 14]], { wash: PK.doughL, washA: 1, w: 1.2, col: PK.doughD }); } pop();
  const g = rect(x - w / 2, y - h / 2, w, h, { wash: PK.glaze, washA: o.glaze === 0 ? 0 : 0.32, line: false }); glow(x - w * 0.25, y - h * 0.25, w * 0.22, 'rgba(255,255,250,1)', 0.45);
  return top;
}
function pryanik(x, y, s, t, o = {}) {                                   // тульский пряник 3/4: верхняя грань с орнаментом + толстый бок; o.bite — откушенный угол с повидлом; o.rot
  push(x, y, s, o.rot || 0); const W = 300, H = 200, D = 40, k = o.key || 12010;
  ell(0, D + 16, W * 0.58, 20, { wash: '#000000', washA: 0.2, line: false });
  const side = poly([[-W / 2, 0], [W / 2, 0], [W / 2, D], [-W / 2, D]], { wash: PK.doughD, washA: 1, w: 2.4, col: '#3a1a06' }); shadeG(side.path, 0, D, 0, 0, '#4a2408', 0.4);
  for (let i = 0; i < 8; i++) pencil([[-W / 2 + 20 + i * 36, 6], [-W / 2 + 30 + i * 36, D - 6]], { w: 1.4, col: '#5a2a0a', a: 0.4, pass2: false });
  push(0, -H / 2 * 0.55, 1); ctx.save(); ctx.scale(1, 0.55); pryanikTop(0, 0, W, H, { key: k + 1, text: o.text }); ctx.restore(); pop();
  if (o.bite) { const b = blob([[W / 2 - 90, -H * 0.55], [W / 2 - 60, -H * 0.4], [W / 2 - 80, -H * 0.2], [W / 2 - 40, -H * 0.05], [W / 2 + 10, 0], [W / 2 + 10, -H * 0.6]], { wash: '#f4ead8', washA: 1, line: false });
    const j = blob([[W / 2 - 80, -H * 0.42], [W / 2 - 62, -H * 0.3], [W / 2 - 70, -H * 0.18], [W / 2 - 40, -H * 0.1], [W / 2 - 34, 8]], { wash: o.milk ? PK.milk : PK.jam, washA: 1, w: 2, col: '#4a0a04' }); glow(W / 2 - 60, -H * 0.25, 16, 'rgba(255,255,255,1)', 0.6);
    for (let i = 0; i < 6; i++) ell(W / 2 - 70 + (i % 3) * 14, -H * 0.4 + i * 10, 3, 2, { wash: '#f8e8c8', washA: 0.9, line: false }); }
  pop();
}
function pryanikHalf(x, y, s, t, o = {}) {                               // разлом пряника: две половинки, внутри повидло (o.milk — сгущёнка), тянется
  push(x, y, s); for (const sd of [-1, 1]) { push(sd * (40 + (o.open || 0) * 60), 0, 1, sd * 0.08 * (o.open || 0));
    const sl = poly([[sd * 0, -60], [sd * 140, -60], [sd * 140, 60], [sd * 0, 60]], { wash: PK.dough, washA: 1, w: 2.4, col: '#3a1a06' }); shadeG(sl.path, sd * 140, 60, 0, -60, PK.doughD, 0.35); rect(sd > 0 ? 0 : -140, -64, 140, 14, { wash: PK.glaze, washA: 0.7, line: false });
    const cut = poly([[0, -60], [sd * 8, -30], [-sd * 4, 0], [sd * 6, 30], [0, 60]], { wash: '#d8a868', washA: 1, w: 1.6, col: '#5a2a0a' }); rect(-12, -20, 24, 40, { wash: o.milk ? PK.milk : PK.jam, washA: 1, w: 1.4, col: '#4a0a04' }); pop(); }
  if (o.open) for (let i = 0; i < 3; i++) pencil(spline([[-40 - o.open * 60, -10 + i * 10], [0, -4 + i * 12 + Math.sin(t * 3 + i) * 4], [40 + o.open * 60, -10 + i * 10]], false, 5), { w: 5 - i, col: o.milk ? PK.milk : PK.jamL, pass2: false });
  pop();
}
function pryanikBoard(x, y, s, t, o = {}) {                              // резная пряничная доска: липа, ручка, зеркальный узор-рельеф (буквы наоборот), трещинки
  push(x, y, s, o.rot || 0); const k = o.key || 12030;
  const b = rect(-200, -140, 400, 280, { wash: PK.wood, washA: 1, w: 3, col: '#3a2408', key: k }); shadeG(b.path, 200, 140, -200, -140, PK.woodD, 0.35); rect(200, -40, 90, 80, { wash: PK.wood, washA: 1, w: 3, col: '#3a2408' }); ell(260, 0, 14, 14, { wash: '#3a2408', washA: 1, line: false });
  for (let i = 0; i < 9; i++) pencil(spline([[-200, -120 + i * 30], [0, -116 + i * 30 + Math.sin(i) * 6], [200, -120 + i * 30]], false, 6), { w: 1.4, col: PK.woodD, a: 0.4, pass2: false });
  const cav = rect(-170, -110, 340, 220, { wash: '#a87a48', washA: 1, w: 2.4, col: '#3a2408' }); shadeG(cav.path, -170, -110, 170, 110, '#5a3a14', 0.45);
  ctx.save(); ctx.scale(-1, 1); txt('ТУЛА', 0, -40, 54, { font: 'Osw', col: '#5a3414' }); ctx.restore();
  for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; blob([[0, 40], [Math.cos(a - 0.35) * 22, 40 + Math.sin(a - 0.35) * 22], [Math.cos(a) * 40, 40 + Math.sin(a) * 40], [Math.cos(a + 0.35) * 22, 40 + Math.sin(a + 0.35) * 22]], { wash: '#8a5a28', washA: 1, w: 1.4, col: '#3a2408' }); }
  for (let i = 0; i < 18; i++) ell(-150 + i * 17.6, -96, 3, 3, { wash: '#5a3414', washA: 1, line: false });
  pop();
}
function pebbles(x, y, n, seed, s = 1) {                                 // горсть камешков и железок-разновесов
  const r = rng(seed); for (let i = 0; i < n; i++) { const px = x + (r() - 0.5) * 70 * s, py = y - r() * 24 * s, sz = (9 + r() * 9) * s;
    if (i % 4 === 3) { rect(px - sz, py - sz * 0.5, sz * 2, sz, { wash: '#5a5a62', washA: 1, w: 1.4, col: '#1a1a1a' }); glow(px - sz * 0.4, py - sz * 0.3, sz * 0.5, 'rgba(255,255,255,1)', 0.3); }
    else { blob([[px - sz, py], [px - sz * 0.6, py - sz * 0.8], [px + sz * 0.4, py - sz * 0.9], [px + sz, py - sz * 0.2], [px + sz * 0.6, py + sz * 0.5], [px - sz * 0.4, py + sz * 0.5]], { wash: ['#9a948a', '#b8b0a0', '#7a7468', '#a89a88'][i % 4], washA: 1, w: 1.4, col: '#2a2a2a' }); glow(px - sz * 0.3, py - sz * 0.4, sz * 0.4, 'rgba(255,255,255,1)', 0.35); } }
}
function balance(x, y, s, t, tilt, left, right) {                        // чашечные весы-коромысло: tilt (+ — правая вниз), left/right — функции рисования груза на чаше (px, py)
  push(x, y, s); rect(-90, 0, 180, 50, { wash: '#6a4a2a', washA: 1, w: 2.4, col: '#2a1408' }); pencil([[0, 0], [0, -320]], { w: 14, col: '#c8a050' }); ell(0, -320, 18, 18, { wash: '#e8c070', washA: 1, w: 2 });
  push(0, -320, 1, tilt); pencil([[-280, 0], [280, 0]], { w: 12, col: '#c8a050' }); poly([[-12, -40], [12, -40], [0, 0]], { wash: '#c8a050', washA: 1, w: 1.6 }); pop();
  for (const sd of [-1, 1]) { const px = sd * 280 * Math.cos(tilt), py = -320 + sd * 280 * Math.sin(tilt); for (const q of [-1, 1]) pencil([[px, py], [px + q * 100, py + 150]], { w: 2, col: '#8a7030', pass2: false });
    const pan = ell(px, py + 160, 120, 24, { wash: '#d8b060', washA: 1, w: 2.4, col: '#5a3a08' }); metalG(pan.path, px - 40, py + 150, 130, '#fff0c0', '#d8b060', '#7a5010'); const f = sd < 0 ? left : right; if (f) f(px, py + 150); }
  pop();
}
function baranki(x, y, s) {                                              // связка баранок на бечёвке
  push(x, y, s); pencil([[0, -40], [0, 160]], { w: 2, col: '#8a7a5a', pass2: false }); for (let i = 0; i < 5; i++) { const yy = -20 + i * 36; ell(i % 2 ? 14 : -14, yy, 34, 22, { line: true, w: 12, col: '#c88a3a' }); ell(i % 2 ? 6 : -22, yy - 8, 8, 4, { wash: '#f0c070', washA: 0.8, line: false }); } pop();
}
Object.assign(PROPS, {
  pryanikP() { pryanik(0, -40, 0.35, 0, { key: 12090 }); },
  pryanikBiteP() { pryanik(0, -40, 0.35, 0, { key: 12091, bite: 1 }); },
  pebbleP() { pebbles(0, -10, 3, 12092, 0.9); },
  chiselP() { push(0, -40, 1, -0.4); pencil([[0, 60], [0, -10]], { w: 12, col: '#8a5a2a' }); poly([[-6, -10], [6, -10], [4, -70], [-4, -70]], { wash: '#b8bcc4', washA: 1, w: 1.6 }); pop(); },
  quillP() { push(0, -40, 1, -0.5); blob([[0, 0], [-20, -60], [-6, -120], [10, -60]], { wash: '#f4ecd8', washA: 1, w: 1.6, col: '#6a5a3a' }); pencil([[0, 0], [4, 40]], { w: 3, col: '#3a2a1a' }); pop(); },
  noteP() { push(0, -60, 1, 0.1); rect(-50, -60, 100, 120, { wash: '#f4ecd8', washA: 1, w: 1.6, col: '#6a5a3a' }); for (let i = 0; i < 5; i++) pencil([[-36, -36 + i * 20], [36, -36 + i * 20]], { w: 1.4, col: '#3a3a6a', a: 0.6, pass2: false }); pop(); },
});
