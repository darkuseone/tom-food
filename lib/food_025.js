/* 025 — еда выпуска «Цеппелины»: цеппелин (вытянутая заострённая картофельная клёцка, сероватая, с фактурой тёртого картофеля), разрезанный цеппелин
   с мясной начинкой и паром, шкварки, сметана, дирижабль графа Цеппелина, тёрка, марля с отжатым картофелем, банка с крахмалом. Реквизит — PROPS. */
const CP = { dough: '#d8cfb4', doughD: '#a89c78', doughL: '#f2ead2', meat: '#9a4a3a', meatD: '#5a2418', smet: '#fbf7ee', smetD: '#d8ccb4', spirg: '#c8783a', spirgD: '#6a3008', fat: '#f0c860', zep: '#b8b8b0', zepD: '#6a6a62' };
function cepelinas(x, y, s, t, o = {}) {                                  // цеппелин: o.cut (0..1 — разрез с начинкой), o.smet, o.spirg, o.steam, o.rot, o.key
  const k = o.key || 25000; push(x, y, s, o.rot || 0);
  ell(6, 26, 168, 22, { wash: '#1a0a04', washA: 0.2, line: false });
  const pts = []; for (let i = 0; i <= 24; i++) { const a = i / 24 * 6.283, c = Math.cos(a), sn = Math.sin(a); pts.push([c * 170 * (0.92 + 0.08 * Math.abs(c)), sn * 62 * (1 - 0.5 * Math.pow(Math.abs(c), 6))]); }
  const b = blob(pts, { wash: CP.dough, washA: 1, w: 2.6, col: '#5a4a2a', key: k }); shadeG(b.path, 0, -62, 0, 62, CP.doughL, 0.5); shadeG(b.path, 0, 62, 0, -10, CP.doughD, 0.5);
  const r = rng(k + 1); for (let i = 0; i < 40; i++) { const px = -150 + r() * 300, py = -40 + r() * 80; if (Math.abs(px) > 150 - Math.abs(py)) continue; pencil([[px, py], [px + 6 + r() * 6, py + (r() - 0.5) * 3]], { w: 1.4, col: CP.doughD, a: 0.5, pass2: false }); }
  pencil(spline([[-120, -34], [-20, -50], [90, -40]], false, 6), { w: 6, col: '#ffffff', a: 0.45, pass2: false });
  if (o.cut) { const c = o.cut; const m = blob([[-90 * c, 0], [-60 * c, -30], [0, -38 * c], [60 * c, -30], [90 * c, 0], [60 * c, 28], [0, 34 * c], [-60 * c, 28]], { wash: CP.meat, washA: 1, w: 2, col: CP.meatD, key: k + 2 }); shadeG(m.path, 0, -30, 0, 30, '#c8786a', 0.4); const r2 = rng(k + 3); for (let i = 0; i < 14; i++) ell((r2() - 0.5) * 140 * c, (r2() - 0.5) * 44 * c, 5, 4, { wash: i % 3 ? '#7a3428' : '#e8c0a0', washA: 1, line: false }); for (let i = 0; i < 4; i++) ell(-50 * c + i * 34 * c, -6, 6, 3, { wash: '#4a8a2a', washA: 0.8, line: false }); }
  if (o.smet) { const sm_ = blob([[-80, -48], [-50, -70], [-10, -66], [30, -78], [70, -60], [86, -42], [40, -36], [-40, -38]], { wash: CP.smet, washA: 1, w: 1.8, col: CP.smetD, key: k + 4 }); shadeG(sm_.path, 0, -80, 0, -36, '#ffffff', 0.4); for (let i = 0; i < 3; i++) blob([[-30 + i * 40, -40], [-24 + i * 40, -10 - i * 6], [-18 + i * 40, -40]], { wash: CP.smet, washA: 1, w: 1.2, col: CP.smetD }); }
  if (o.spirg) { const r3 = rng(k + 5); for (let i = 0; i < 12; i++) { const px = -70 + r3() * 140, py = -80 + r3() * 24; push(px, py, 1, r3() * 3); rect(-8, -6, 16, 12, { wash: i % 2 ? CP.spirg : '#a8582a', washA: 1, w: 1.2, col: CP.spirgD }); pop(); } for (let i = 0; i < 6; i++) ell(-60 + i * 24, -50 + (i % 2) * 8, 6, 3, { wash: CP.fat, washA: 0.8, line: false }); }
  if (o.steam) steamWisps(0, -60, 0.9, t, 3, k + 6, 0.4 * o.steam);
  pop();
}
function zeppelinShip(x, y, s, t, o = {}) {                               // дирижабль: сигара с рёбрами, гондола, рули, винты; o.potato — превращается в клёцку
  const k = o.key || 25020, p = o.potato || 0; push(x, y, s);
  const col = p > 0 ? lerpC(CP.zep, CP.dough, p) : CP.zep;
  const pts = []; for (let i = 0; i <= 28; i++) { const a = i / 28 * 6.283, c = Math.cos(a); pts.push([c * 300, Math.sin(a) * 80 * (1 - 0.45 * Math.pow(Math.abs(c), 5))]); }
  const b = blob(pts, { wash: col, washA: 1, w: 3, col: '#3a3a34', key: k }); shadeG(b.path, 0, -80, 0, 80, '#ffffff', 0.35); shadeG(b.path, 0, 80, 0, 0, '#4a4a44', 0.4);
  if (p < 0.6) for (let i = -5; i <= 5; i++) pencil([[i * 50, -78 * (1 - Math.pow(Math.abs(i / 6), 4))], [i * 50, 78 * (1 - Math.pow(Math.abs(i / 6), 4))]], { w: 1.6, col: '#6a6a62', a: 0.6 * (1 - p), pass2: false });
  if (p < 0.6) { for (const sd of [-1, 1]) poly([[-260, sd * 20], [-330, sd * 70], [-300, sd * 10]], { wash: col, washA: 1, w: 2, col: '#3a3a34' }); rect(-60, 76, 120, 34, { wash: '#6a5a4a', washA: 1, w: 2, col: '#2a1a0a' }); for (let i = 0; i < 4; i++) rect(-50 + i * 28, 84, 18, 14, { wash: '#ffd890', washA: 1, w: 1 }); const a = t * 30; push(-80, 96, 1); pencil([[Math.cos(a) * 20, Math.sin(a) * 6], [-Math.cos(a) * 20, -Math.sin(a) * 6]], { w: 4, col: '#2a2a2a', pass2: false }); pop(); }
  if (p > 0) { const r = rng(k + 1); for (let i = 0; i < 30 * p; i++) { const px = -260 + r() * 520, py = -50 + r() * 100; pencil([[px, py], [px + 8, py]], { w: 1.4, col: CP.doughD, a: 0.6 * p, pass2: false }); } }
  if (o.txt && p < 0.5) txt(o.txt, 40, 10, 40, { font: 'Osw', col: '#3a3a34' });
  pop();
}
function grater(x, y, s, rot = 0) { push(x, y, s, rot); const g = rect(-60, -150, 120, 300, { wash: '#c8ccd2', washA: 1, w: 2.4, col: '#3a3e44' }); shadeG(g.path, 60, 0, -60, 0, '#6a6e74', 0.4); for (let j = 0; j < 12; j++) for (let i = 0; i < 5; i++) ell(-40 + i * 20, -130 + j * 22, 5, 3, { wash: '#2a2e34', washA: 0.8, line: false }); rect(-30, -190, 60, 40, { wash: '#7a4a24', washA: 1, w: 2 }); pop(); }
function starchJar(x, y, s, level = 0.4) { push(x, y, s); const j = blob([[-50, 0], [-54, -140], [-40, -160], [40, -160], [54, -140], [50, 0]], { wash: '#e8eef2', washA: 0.4, w: 2.4, col: '#5a6a7a' }); rect(-48, -10 - 130 * level, 96, 130 * level, { wash: '#c8a878', washA: 0.6, line: false }); rect(-48, -24, 96, 18, { wash: '#fbf8f0', washA: 1, line: false }); pencil([[-36, -150], [-30, -40]], { w: 4, col: '#ffffff', a: 0.6, pass2: false }); pop(); }
function spirgai(x, y, s, n = 10, seed = 25040) { const r = rng(seed); for (let i = 0; i < n; i++) { push(x + (r() - 0.5) * 120 * s, y + (r() - 0.5) * 30 * s, s, r() * 3); rect(-9, -7, 18, 14, { wash: i % 2 ? CP.spirg : '#a8582a', washA: 1, w: 1.2, col: CP.spirgD }); pop(); } }
Object.assign(PROPS, {
  cepP() { cepelinas(0, -20, 0.35, 0, { smet: 1, key: 25060 }); },
  forkCepP() { push(0, -10, 0.6, -0.4); pencil([[0, 0], [0, 140]], { w: 6, col: '#c8ccd2' }); for (let i = -1; i <= 1; i++) pencil([[i * 8, 0], [i * 8, -40]], { w: 3, col: '#c8ccd2' }); pop(); cepelinas(0, -60, 0.18, 0, { cut: 1, key: 25062 }); },
  graterP() { grater(0, -40, 0.4, 0.3); },
  potatoP() { push(0, -20, 0.8); blob([[-26, 4], [-18, -16], [6, -20], [24, -8], [24, 12], [4, 20], [-18, 18]], { wash: '#c89a5a', washA: 1, w: 2, col: '#4a2a10' }); pop(); },
  bookP() { push(0, -30, 0.5, 0.1); rect(-70, -50, 140, 100, { wash: '#7a2a1a', washA: 1, w: 2 }); rect(-62, -44, 124, 88, { wash: '#f4ecd6', washA: 1, w: 1 }); pop(); },
  trayCepP() { push(0, -10, 0.5); rect(-120, -10, 240, 20, { wash: '#a8acb0', washA: 1, w: 2 }); cepelinas(-40, -30, 0.3, 0, { smet: 1, key: 25064 }); cepelinas(50, -30, 0.3, 0, { smet: 1, key: 25066 }); pop(); },
});
const INGR_C = {                                                         // иконки шкалы ингредиентов для 025 (квадрат ±30)
  grated(s, t) { blob([[-24, 18], [-26, -8], [0, -20], [26, -8], [24, 18]], { wash: '#e8dcb8', washA: 1, w: 2, col: '#6a5a3a' }); for (let i = 0; i < 6; i++) pencil([[-18 + i * 7, -8], [-12 + i * 7, 12]], { w: 1.4, col: '#a89c78', pass2: false }); },
  starch(s, t) { starchJar(0, 26, 0.32, 0.5); },
  curd(s, t) { blob([[-24, 16], [-26, -4], [-10, -18], [12, -18], [26, -4], [24, 16]], { wash: '#fbf8f0', washA: 1, w: 2, col: '#8a8070' }); for (let i = 0; i < 6; i++) ell(-14 + (i % 3) * 14, -4 + Math.floor(i / 3) * 12, 4, 3, { wash: '#e8e0d0', washA: 1, line: false }); },
  mushroom(s, t) { rect(-7, -2, 14, 26, { wash: '#f0e8d8', washA: 1, w: 1.6, col: '#6a5a4a' }); blob([[-26, 2], [-18, -18], [0, -24], [18, -18], [26, 2]], { wash: '#8a5a2a', washA: 1, w: 2, col: '#3a2008' }); },
  spirg(s, t) { spirgai(0, 4, 1, 5, 25070); },
  cep(s, t) { cepelinas(0, 6, 0.16, t, { key: 25072 }); },
};
