/* 020 — еда выпуска «Карбонара»: спагетти-гнездо в яичном соусе (блики, тёртый пекорино, чёрный перец, хрустящие кубики гуанчале, пар), сливочная версия 80-х,
   кусок гуанчале (свиная щека с перцем), полоса бекона, головка пекорино, пакет сливок, банка яичного порошка 1944, журнал 1954, путеводитель Чикаго 1952, вилка с накруткой. */
const CB = { pasta: '#f2d47e', pastaD: '#b8862a', pastaL: '#fff4c8', sauce: '#f4c64a', sauceD: '#c8901e', guan: '#e8b8a0', guanM: '#b8483a', guanF: '#f6e8dc', bacon: '#c8503a', pep: '#2a1a10', cheese: '#f6eed2', cream: '#fbf4e2' };
function pastaStrand(pts, w = 7, a = 1, key = 20000) {                    // одна макаронина: тело + тень + блик
  const s = spline(pts, false, 6);
  pencil(s, { w: w + 2.4, col: CB.pastaD, a: a, pass2: false, key });
  pencil(s, { w: w, col: CB.pasta, a: a, pass2: false, key: key + 1 });
  pencil(s.map(([x, y]) => [x - w * 0.18, y - w * 0.22]), { w: Math.max(1, w * 0.28), col: CB.pastaL, a: 0.75 * a, pass2: false, key: key + 2 });
}
function guanCube(x, y, s = 1, rot = 0, key = 20010) {                    // кубик гуанчале: розовое мясо, белый жир, румяные края
  push(x, y, s, rot);
  const c = blob([[-14, -10], [12, -13], [15, 9], [-12, 12]], { wash: '#e8b890', washA: 1, w: 1.4, col: '#6a2a10', key });
  ctx.save(); ctx.clip(c.path); rect(-16, 0, 34, 6, { wash: '#b85a40', washA: 0.6, line: false }); ctx.restore();
  shadeG(c.path, 15, 9, -14, -10, '#8a3a10', 0.6); ell(-5, -7, 4, 2, { wash: '#fff4e0', washA: 0.8, line: false }); pop();
}
function pepperDust(x, y, rx, ry, n = 40, seed = 20020) {                // крапинки чёрного перца
  const r = rng(seed); for (let i = 0; i < n; i++) { const a = r() * 6.283, d = Math.sqrt(r()); ell(x + Math.cos(a) * rx * d, y + Math.sin(a) * ry * d, 1.6 + r() * 1.8, 1.4 + r() * 1.4, { wash: CB.pep, washA: 0.9, line: false }); }
}
function carbNest(x, y, s, t, o = {}) {                                  // гнездо спагетти в соусе (вид 3/4): o.cream — бледный густой соус 80-х, o.steam, o.bite 0..1, o.key
  const k = o.key || 20030, r = rng(k); push(x, y, s);
  const sc = o.cream ? CB.cream : CB.sauce, scD = o.cream ? '#d8c8a0' : CB.sauceD;
  const base = blob([[-160, 10], [-140, -40], [-60, -76], [60, -78], [140, -44], [162, 8], [110, 40], [0, 50], [-110, 40]], { wash: scD, washA: 1, w: 2.2, col: '#8a5a10', key: k });
  shadeG(base.path, 0, -78, 0, 50, '#6a3a08', 0.5);
  for (let i = 0; i < 42; i++) {                                         // спирали гнезда
    const a0 = r() * 6.283, rr = 30 + r() * 120, sq = 0.42, pts = [];
    for (let j = 0; j < 6; j++) { const a = a0 + j * 0.55; pts.push([Math.cos(a) * rr * (1 - j * 0.05), -24 + Math.sin(a) * rr * sq - (1 - rr / 150) * 40]); }
    pastaStrand(pts, 9, 1, k + 10 + i * 3);
  }
  if (o.bite) { ctx.save(); ctx.globalCompositeOperation = 'destination-out'; ell(120, -60, 60 * o.bite, 40 * o.bite, { wash: '#000', washA: 1, line: false }); ctx.restore(); }
  for (let i = 0; i < 7; i++) { const bx = -110 + r() * 220, by = -60 + r() * 60; blob([[bx, by], [bx + 26, by - 6], [bx + 18, by + 12]], { wash: sc, washA: 0.55, line: false }); }   // соус между нитями
  if (!o.cream) for (let i = 0; i < 9; i++) guanCube(-120 + r() * 240, -70 + r() * 80, 0.6 + r() * 0.3, r() * 2, k + 200 + i);
  else for (let i = 0; i < 5; i++) { push(-100 + r() * 200, -60 + r() * 60, 1, r()); rect(-16, -6, 32, 12, { wash: '#e8a0a0', washA: 1, w: 1.2, col: '#8a4a4a' }); pop(); }   // ветчина-кубики
  for (let i = 0; i < 30; i++) ell(-130 + r() * 260, -80 + r() * 90, 2 + r() * 2.4, 1.6 + r() * 1.4, { wash: CB.cheese, washA: 0.95, line: false });   // тёртый пекорино
  pepperDust(0, -40, 130, 50, o.cream ? 10 : 60, k + 300);
  for (let i = 0; i < 6; i++) ell(-110 + i * 44, -70 + (i % 2) * 30, 9, 3, { wash: '#ffffff', washA: 0.7, line: false });   // блики соуса
  pop();
  if (o.steam) steamWisps(x, y - 80 * s, s * 1.1, t, 4, k + 400, 0.45);
}
function carbPlate(x, y, s, t, o = {}) {                                 // тарелка карбонары: белая глубокая тарелка с синим кантом, гнездо, пар
  push(x, y, s); const p = ell(0, 0, 230, 70, { wash: '#f8f6f0', washA: 1, w: 2.4, col: '#6a6a78', key: (o.key || 20030) + 500 });
  shadeG(p.path, 0, 70, 0, -70, '#c8c8d8', 0.4); ell(0, -2, 214, 62, { wash: '#2a4a8a', washA: 0.25, w: 1.4, col: '#2a4a8a' }); ell(0, 4, 160, 40, { wash: '#e8e6e0', washA: 1, line: false });
  ell(-150, -30, 30, 6, { wash: '#ffffff', washA: 0.8, line: false }); pop();
  carbNest(x, y - 18 * s, s * 0.95, t, o);
}
function guanciale(x, y, s = 1, rot = 0, key = 20600) {                  // кусок гуанчале: треугольная щека, слои мяса и жира, корка с перцем, срез
  push(x, y, s, rot);
  const g = blob([[-120, 30], [-110, -40], [-20, -70], [110, -50], [130, 20], [60, 50], [-60, 50]], { wash: CB.guanF, washA: 1, w: 2.4, col: '#6a3a1a', key });
  ctx.save(); ctx.clip(g.path); for (let i = 0; i < 4; i++) pencil(spline([[-130, -30 + i * 22], [-40, -40 + i * 24], [60, -30 + i * 20], [140, -40 + i * 22]], false, 6), { w: 8 - i, col: CB.guanM, a: 0.75, pass2: false }); ctx.restore();
  shadeG(g.path, 130, 50, -110, -60, '#8a4a1e', 0.45); const crust = pencil(spline([[-110, -40], [-20, -70], [110, -50]], false, 6), { w: 10, col: '#a8642a', a: 0.8, pass2: false });
  pepperDust(0, -50, 100, 14, 30, key + 1); ell(-40, -20, 18, 5, { wash: '#ffffff', washA: 0.6, line: false }); pop();
}
function baconStrip(x, y, s = 1, rot = 0, key = 20610) {                 // волнистая полоса бекона
  push(x, y, s, rot); const pts = []; for (let i = 0; i <= 8; i++) pts.push([-120 + i * 30, Math.sin(i * 1.3) * 10]);
  const top = pts.map(([a, b]) => [a, b - 18]), bot = pts.map(([a, b]) => [a, b + 18]).reverse();
  const p = shape(top.concat(bot), { wash: CB.bacon, washA: 1, w: 2, col: '#5a1a0a', key }); shadeG(p.path, 0, 18, 0, -18, '#7a1a0a', 0.4);
  pencil(spline(pts.map(([a, b]) => [a, b - 4]), false, 6), { w: 7, col: '#f4dccc', a: 0.9, pass2: false }); pencil(spline(pts.map(([a, b]) => [a, b + 9]), false, 6), { w: 4, col: '#f4dccc', a: 0.7, pass2: false }); pop();
}
function pecorino(x, y, s = 1, key = 20620) {                             // головка пекорино с вырезанным клином, корка с плетёным узором
  push(x, y, s); const side = rect(-110, -40, 220, 80, { wash: '#d8b878', washA: 1, w: 2.2, col: '#5a4018', key }); shadeG(side.path, 110, 0, -110, 0, '#8a6a2a', 0.4);
  for (let i = 0; i < 11; i++) for (let j = 0; j < 3; j++) ell(-100 + i * 20, -24 + j * 22, 6, 4, { wash: '#a8884a', washA: 0.6, line: false });
  const tp = ell(0, -40, 110, 34, { wash: CB.cheese, washA: 1, w: 2, col: '#5a4018' }); poly([[0, -40], [100, -54], [70, -14]], { wash: '#f8f2dc', washA: 1, w: 1.6, col: '#8a6a2a' });
  txt('PECORINO', 0, 10, 22, { font: 'Osw', col: '#5a3a10' }); pop();
}
function creamCarton(x, y, s = 1, rot = 0, key = 20630) {                 // пакет сливок 80-х «PANNA» — тетрапак с коровкой
  push(x, y, s, rot); const b = rect(-50, -120, 100, 120, { wash: '#f4f2ea', washA: 1, w: 2, col: '#4a4a5a', key }); shadeG(b.path, 50, 0, -50, 0, '#a8a8b8', 0.35);
  poly([[-50, -120], [0, -150], [50, -120]], { wash: '#e4e2da', washA: 1, w: 2, col: '#4a4a5a' }); rect(-50, -96, 100, 30, { wash: '#2a6ac8', washA: 1, line: false });
  txt('PANNA', 0, -74, 24, { font: 'Osw', col: '#ffffff' }); ell(0, -36, 22, 16, { wash: '#ffffff', washA: 1, w: 1.4, col: '#2a2a2a' }); ell(-8, -38, 6, 5, { wash: '#2a2a2a', washA: 1, line: false }); txt('200 ml', 0, -8, 14, { font: 'Osw', col: '#2a6ac8' }); pop();
}
function eggPowderCan(x, y, s = 1, key = 20640) {                         // банка яичного порошка 1944 (хаки, трафарет)
  push(x, y, s); const c = rect(-60, -150, 120, 150, { wash: '#7a7a4a', washA: 1, w: 2.2, col: '#2a2a14', key }); metalG(c.path, -20, -80, 120, '#a8a878', '#7a7a4a', '#3a3a20');
  ell(0, -150, 60, 12, { wash: '#8a8a5a', washA: 1, w: 2, col: '#2a2a14' }); for (const yy of [-130, -20]) pencil([[-60, yy], [60, yy]], { w: 2, col: '#3a3a20', a: 0.6, pass2: false });
  txt('DRIED', 0, -100, 26, { font: 'Osw', col: '#f4ecc8' }); txt('EGG', 0, -66, 34, { font: 'Osw', col: '#f4ecc8' }); txt('U.S. 1944', 0, -36, 15, { font: 'Osw', col: '#f4ecc8' }); pop();
}
function rationCrate(x, y, s = 1, label = 'RATIONS', key = 20650) {      // деревянный ящик пайков с трафаретом
  push(x, y, s); const b = rect(-110, -90, 220, 90, { wash: '#a8844a', washA: 1, w: 2.2, col: '#3a2a10', key }); shadeG(b.path, 110, 0, -110, -90, '#5a3a14', 0.4);
  for (let i = 1; i < 3; i++) pencil([[-110, -90 + i * 30], [110, -90 + i * 30]], { w: 1.6, col: '#5a3a14', a: 0.6, pass2: false });
  for (const xx of [-104, 96]) rect(xx, -90, 8, 90, { wash: '#7a5a2a', washA: 1, line: false }); txt(label, 0, -38, 24, { font: 'Osw', col: '#2a2a14', a: 0.85 }); pop();
}
function mag1954(x, y, s = 1, rot = 0, o = {}) {                          // журнал 1954: обложка с тарелкой, или разворот с рецептом (o.open)
  push(x, y, s, rot);
  if (!o.open) { const c = rect(-110, -150, 220, 300, { wash: '#f4eede', washA: 1, w: 2, col: '#4a3a2a' }); shadeG(c.path, 110, 150, -110, -150, '#b8a888', 0.3);
    rect(-110, -150, 220, 60, { wash: '#c8321a', washA: 1, line: false }); txt('LA CUCINA', 0, -124, 24, { font: 'Osw', col: '#ffffff' }); txt('ITALIANA', 0, -100, 20, { font: 'Osw', col: '#ffffff' });
    ell(0, 10, 70, 24, { wash: '#ffffff', washA: 1, w: 1.4 }); carbNest(0, 4, 0.36, 0, { key: 20660 }); txt('AGOSTO 1954', 0, 110, 18, { font: 'Osw', col: '#4a3a2a' }); }
  else { const pL = rect(-220, -150, 220, 300, { wash: '#f8f2e2', washA: 1, w: 2, col: '#4a3a2a' }), pR = rect(0, -150, 220, 300, { wash: '#f8f2e2', washA: 1, w: 2, col: '#4a3a2a' });
    shadeG(pL.path, 0, 0, -220, 0, '#c8b898', 0.35); txt('Spaghetti', -110, -110, 24, { font: 'Hand', col: '#2a1a0a' }); txt('alla carbonara', -110, -82, 24, { font: 'Hand', col: '#c8321a' });
    [['400 g spaghetti', 0], ['150 g pancetta', 0], ['100 g groviera', 1], ['1 spicchio d\'aglio', 1], ['2 uova', 0]].forEach(([s1, hl], i) => { if (hl && o.hl) rect(-200, -60 + i * 30 - 16, 180, 22, { wash: '#ffe060', washA: 0.7, line: false }); txt(s1, -110, -54 + i * 30, 17, { font: 'Hand', col: '#3a2a1a' }); });
    for (let i = 0; i < 7; i++) rect(20, -130 + i * 34, 180, 8, { wash: '#6a5a4a', washA: 0.35, line: false }); ell(110, 110, 70, 26, { wash: '#ffffff', washA: 1, w: 1.2 }); carbNest(110, 104, 0.34, 0, { key: 20661 }); }
  pop();
}
function guide1952(x, y, s = 1, rot = 0) {                                // путеводитель по ресторанам Чикаго 1952
  push(x, y, s, rot); const c = rect(-100, -140, 200, 280, { wash: '#1a2a4a', washA: 1, w: 2, col: '#0a0a1a' }); shadeG(c.path, 100, 0, -100, 0, '#000', 0.35);
  txt('VITTLES', 0, -90, 34, { font: 'Osw', col: '#ffd040' }); txt('& VICE', 0, -52, 30, { font: 'Osw', col: '#ff6a4a' });
  for (let i = 0; i < 5; i++) { const xx = -70 + i * 35; rect(xx - 12, 0 - i * 8, 24, 60 + i * 8, { wash: '#2a3a6a', washA: 1, w: 1, col: '#0a0a1a' }); windows(xx - 10, 6 - i * 8, 20, 50, 2, 4, 20670 + i, 0.6, '#ffd890', '#1a2a4a', 0.9); }
  txt('CHICAGO · 1952', 0, 112, 18, { font: 'Osw', col: '#f4efe0' }); pop();
}
function forkTwirl(x, y, s = 1, rot = 0, t = 0, key = 20680) {            // вилка с накрученными спагетти, капля соуса
  push(x, y, s, rot); rect(-6, 0, 12, 140, { wash: '#c8ccd2', washA: 1, w: 1.4, col: '#4a4e58' }); for (let i = 0; i < 4; i++) rect(-18 + i * 11, -60, 6, 60, { wash: '#d8dce2', washA: 1, w: 1 });
  for (let i = 0; i < 6; i++) pastaStrand([[-34, -40 + i * 9], [0, -50 + i * 9], [34, -40 + i * 9]], 6, 1, key + i * 3);
  guanCube(-10, -46, 0.7, 0.3, key + 40); ell(16, -22, 7, 4, { wash: CB.sauce, washA: 0.9, line: false }); pepperDust(0, -30, 26, 20, 8, key + 41); pop();
}
Object.assign(PROPS, {
  forkCarbP() { forkTwirl(0, 0, 0.62, -0.2, 0, 20700); },
  plateCarbP() { carbPlate(0, 10, 0.5, 0, { key: 20710 }); },
  guanP() { guanciale(0, 0, 0.5, -0.2, 20720); },
  baconP() { baconStrip(0, 0, 0.6, -0.3, 20730); },
  creamP() { push(0, 0, 1, 0, -1); creamCarton(0, 40, 0.8, -0.5, 20740); pop(); },
  mag54P() { push(0, 0, 1, 0, -1); mag1954(0, -30, 0.42, 0.1); pop(); },
  guideP() { push(0, 0, 1, 0, -1); guide1952(0, -40, 0.5, 0.12); pop(); },
  newsP20() { push(0, 0, 1, 0, -1); newspaper(0, -40, 0.5, 0.1, 'LA STAMPA'); pop(); },
  eggCanP() { push(0, 0, 1, 0, -1); eggPowderCan(0, 40, 0.6, 20750); pop(); },
  ladleP() { push(0, 0, 0.6, -0.4); rect(-7, -10, 14, 170, { wash: '#8a8e96', washA: 1, w: 1.4 }); const b = ell(0, 170, 44, 30, { wash: '#a8acb4', washA: 1, w: 2, col: '#3a3e44' }); metalG(b.path, -10, 160, 50, '#ffffff', '#a8acb4', '#3a3e44'); pop(); },
  coalP() { push(0, 0, 0.6); for (let i = 0; i < 4; i++) blob([[-20 + i * 12, 0], [-14 + i * 12, -18], [i * 12, -20], [6 + i * 12, -4]], { wash: '#1a1a1e', washA: 1, w: 1.2, col: '#000' }); glow(0, -10, 24, 'rgba(255,120,40,1)', 0.3); pop(); },
});
