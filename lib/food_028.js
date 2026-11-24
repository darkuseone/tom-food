/* 028 — еда выпуска «Круассан»: слоёный круассан (слои, блик, разлом), плотный кипферль с сахарной пудрой, турецкий флаг-полумесяц, чашка кофе,
   брусок масла, скалка, багет; реквизит Тома (PROPS) и иконки шкалы INGR_C28. */
const CR = { crust: '#c8782a', crustL: '#f0b058', crustD: '#7a3a10', crumb: '#fbe8c0', butter: '#f8e070' };
function croissant(x, y, s, t, o = {}) {                                     // слоёный круассан: 5–7 сегментов-слоёв, глянец, крошки; o.cut — разлом с сотами внутри, o.choc
  push(x, y, s, o.rot || 0); const key = o.key || 28000, n = 7;
  for (let i = 0; i < n; i++) { const u = (i - (n - 1) / 2) / ((n - 1) / 2), cx = u * 150, cy = -Math.abs(u) * 40 + Math.abs(u) ** 2 * 40, w = 46 - Math.abs(u) * 18, h = 70 - Math.abs(u) * 34;
    const sg = blob([[cx - w, cy], [cx - w * 0.8, cy - h], [cx, cy - h - 12], [cx + w * 0.8, cy - h], [cx + w, cy], [cx, cy + 18]], { wash: i % 2 ? CR.crust : '#d8883a', washA: 1, w: 2.4, col: CR.crustD, key: key + i });
    shadeG(sg.path, cx, cy - h, cx, cy + 10, '#8a4a10', 0.35); pencil(spline([[cx - w * 0.6, cy - h * 0.7], [cx, cy - h - 4], [cx + w * 0.6, cy - h * 0.7]], false, 4), { w: 4, col: CR.crustL, a: 0.8, pass2: false }); }
  for (let i = 0; i < 6; i++) ell(-100 + i * 40, -60 + Math.sin(i) * 10, 8, 3, { wash: '#ffffff', washA: 0.4, line: false });
  if (o.cut) { const c = ell(160, -20, 40, 50, { wash: CR.crumb, washA: 1, w: 2, col: CR.crustD }); for (let i = 0; i < 9; i++) ell(150 + (i % 3) * 12, -44 + Math.floor(i / 3) * 18, 5, 7, { wash: '#e8c890', washA: 1, w: 1, col: '#c8a060' }); }
  if (o.choc) for (let i = 0; i < 5; i++) pencil([[-110 + i * 50, -70], [-90 + i * 50, -30]], { w: 6, col: '#4a2a14', pass2: false });
  pop();
}
function kipferl(x, y, s, t, o = {}) {                                       // кипферль XIII в.: плотный гладкий рогалик-полумесяц, сахарная пудра
  push(x, y, s, o.rot || 0); const p = spline([[-130, 10], [-90, -50], [0, -76], [90, -50], [130, 10]], false, 20);
  pencil(p, { w: 60, col: '#a8642a', pass2: false }); pencil(p, { w: 48, col: '#d8a060', pass2: false }); pencil(p.map(([a, b]) => [a, b - 10]), { w: 12, col: '#f0c890', a: 0.7, pass2: false });
  const r = rng(o.key || 28020); for (let i = 0; i < 26; i++) { const q = p[Math.floor(r() * p.length)]; ell(q[0] + (r() - 0.5) * 30, q[1] - 10 - r() * 14, 3, 3, { wash: '#ffffff', washA: 0.9, line: false }); }
  pop();
}
function ottomanFlag(x, y, s, t, o = {}) {                                   // красный флаг с белым полумесяцем и звездой, колышется
  push(x, y, s); pencil([[0, 0], [0, -460]], { w: 8, col: '#5a3a1a', pass2: false }); const w = 260, h = 170, pts = [];
  for (let i = 0; i <= 10; i++) pts.push([i * w / 10, -460 + Math.sin(t * 4 + i * 0.6) * 10 * i / 10]); const fl = pts.concat(pts.slice().reverse().map(([a, b]) => [a, b + h]));
  shape(fl, { wash: '#c8201a', washA: 1, w: 2, col: '#4a0a08', key: o.key || 28030 }); const cx = w * 0.42, cy = -460 + h / 2 + Math.sin(t * 4 + 2.5) * 5;
  ell(cx, cy, 48, 48, { wash: '#f8f4ec', washA: 1, line: false }); ell(cx + 16, cy, 40, 40, { wash: '#c8201a', washA: 1, line: false });
  const st = []; for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283 - 1.57, r = i % 2 ? 9 : 22; st.push([cx + 62 + Math.cos(a) * r, cy + Math.sin(a) * r]); } poly(st, { wash: '#f8f4ec', washA: 1, line: false }); pop();
}
function coffeeCup(x, y, s, t) {                                             // чашка кофе на блюдце с паром
  push(x, y, s); ell(0, 0, 80, 18, { wash: '#f8f4ec', washA: 1, w: 2 }); blob([[-50, -10], [-46, -80], [46, -80], [50, -10]], { wash: '#f8f4ec', washA: 1, w: 2.4, col: '#6a6a6a' }); ell(0, -80, 46, 12, { wash: '#5a3014', washA: 1, w: 1.6 }); pencil(spline([[48, -60], [76, -50], [50, -30]], false, 4), { w: 6, col: '#f8f4ec', pass2: false });
  for (let i = 0; i < 3; i++) { const ph = (t * 0.6 + i / 3) % 1; pencil(spline([[-10 + i * 10, -90 - ph * 60], [10 + i * 10, -120 - ph * 80], [-10 + i * 10, -150 - ph * 100]], false, 5), { w: 5, col: '#ffffff', a: 0.4 * (1 - ph), pass2: false }); } pop();
}
function butterBlock(x, y, s) { push(x, y, s); const b = rect(-80, -40, 160, 40, { wash: CR.butter, washA: 1, w: 2, col: '#a88a20' }); shadeG(b.path, 0, -40, 0, 0, '#d8b030', 0.3); rect(-80, -50, 160, 10, { wash: '#fff0a0', washA: 1, w: 1 }); pop(); }   // брусок масла
function baguette(x, y, s, rot = 0) { push(x, y, s, rot); const b = blob([[-200, 0], [-190, -36], [190, -36], [200, 0], [180, 20], [-180, 20]], { wash: '#d8943a', washA: 1, w: 2.4, col: '#7a3a10' }); for (let i = 0; i < 5; i++) pencil([[-150 + i * 70, -30], [-110 + i * 70, 0]], { w: 5, col: '#f0c070', pass2: false }); pop(); }   // багет
Object.assign(PROPS, {
  croissantP() { croissant(0, 0, 0.32, 0, { key: 28100 }); },                                // круассан в лапе
  kipferlP() { kipferl(0, 0, 0.36, 0, { key: 28102 }); },                                      // кипферль в лапе
  pinP() { push(0, -10, 0.7, 0.3); rect(-150, -14, 300, 28, { wash: '#d8a868', washA: 1, w: 2, col: '#6a4a24' }); ell(-160, 0, 16, 16, { wash: '#a87a4a', washA: 1, w: 2 }); ell(160, 0, 16, 16, { wash: '#a87a4a', washA: 1, w: 2 }); pop(); },   // скалка
  stampP() { push(0, -10, 0.7); rect(-30, -90, 60, 70, { wash: '#6a3a1a', washA: 1, w: 2 }); rect(-50, -20, 100, 24, { wash: '#2a2a2a', washA: 1, w: 2 }); pop(); },   // штамп
  bookP28() { push(0, -30, 0.55, 0.1); rect(-90, -60, 180, 120, { wash: '#6a2a1a', washA: 1, w: 2 }); rect(-82, -52, 164, 104, { wash: '#f4ecd6', washA: 1, w: 1 }); pencil([[0, -52], [0, 52]], { w: 2, col: '#8a7a5a', pass2: false }); pop(); },   // книга
  coffeeP() { coffeeCup(0, 0, 0.45, 0); },                                                    // чашка кофе
});
const INGR_C28 = {                                                           // иконки шкалы 028 (квадрат ±30)
  flour(s, t) { blob([[-22, 22], [-26, -10], [-12, -26], [12, -26], [26, -10], [22, 22]], { wash: '#f4ecd8', washA: 1, w: 2, col: '#8a7a5a' }); txt('МУКА', 0, 8, 12, { font: 'Osw', col: '#6a5a3a' }); },
  sugar(s, t) { for (let i = 0; i < 3; i++) rect(-24 + i * 16, 4 - (i % 2) * 18, 20, 20, { wash: '#fbfbf8', washA: 1, w: 1.6, col: '#8a8a8a' }); },
  kipferl(s, t) { kipferl(0, 24, 0.2, t, { key: 28110 }); },
  butter(s, t) { butterBlock(0, 14, 0.32); },
  layers(s, t) { for (let i = 0; i < 5; i++) rect(-26, -20 + i * 9, 52, 7, { wash: i % 2 ? CR.butter : '#e8b060', washA: 1, w: 1, col: '#8a5a20' }); },
  croissant(s, t) { croissant(0, 18, 0.17, t, { key: 28112 }); },
  yeast(s, t) { blob([[-20, 16], [-24, -6], [-8, -20], [10, -20], [24, -6], [20, 16]], { wash: '#d8c8a0', washA: 1, w: 2, col: '#6a5a3a' }); for (let i = 0; i < 4; i++) ell(-10 + i * 7, -2 + (i % 2) * 8, 3, 3, { wash: '#a89a70', washA: 1, line: false }); },
};
