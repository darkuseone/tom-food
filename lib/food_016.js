/* 016 — еда выпуска «Пюре»: клубень картофеля (глазки, кожура, земля), чуньо (сморщенный тёмный/белый сушёный клубень), цветок картофеля,
   миска пюре (завитки, лунка, тающий кубик масла, пар), кастрюля пюре, толкушка, брусок сливочного масла, кувшин молока. Реквизит Тома — PROPS. */
const PU = { skin: '#c8a060', skinD: '#8a6430', skinL: '#e8c890', flesh: '#f4e6b0', mash: '#fbf2d6', mashD: '#e2cfa0', butter: '#f8d84a', butterD: '#d8a828', chuB: '#5a4a44', chuW: '#e8e0d0', milk: '#fbfbf6' };

function potato(x, y, s, rot = 0, o = {}) {                                 // клубень: неровный овал, глазки, пятнышки, комочки земли; o.half — разрезан
  push(x, y, s, rot); const P = [[-70, 0], [-64, -30], [-30, -48], [20, -46], [62, -28], [74, 4], [58, 34], [10, 46], [-40, 40], [-66, 22]];
  ell(4, 50, 60, 8, { wash: '#000000', washA: 0.15, line: false }); const b = shape(spline(P, true, 8), { wash: PU.skin, washA: 1, w: 2.4, col: '#5a3a14', key: o.key || 16000 }); shadeG(b.path, 50, 40, -40, -40, PU.skinD, 0.45);
  const r = rng(o.key || 16000); for (let i = 0; i < 5; i++) { const ex = -50 + r() * 100, ey = -30 + r() * 56; pencil([[ex - 6, ey], [ex, ey - 3], [ex + 6, ey]], { w: 2, col: '#5a3a14', pass2: false }); } for (let i = 0; i < 8; i++) ell(-50 + r() * 100, -30 + r() * 56, 2, 2, { wash: PU.skinD, washA: 0.8, line: false });
  pencil([[-40, -30], [0, -40]], { w: 4, col: PU.skinL, a: 0.7, pass2: false }); if (o.dirt) for (let i = 0; i < 4; i++) blob([[-60 + i * 30, 30], [-50 + i * 30, 18], [-40 + i * 30, 30]], { wash: '#6a4a2a', washA: 0.8, line: false });
  if (o.half) { const c = ell(0, 0, 58, 36, { wash: PU.flesh, washA: 1, w: 1.6, col: PU.skinD }); shadeG(c.path, 30, 20, -20, -20, PU.mashD, 0.3); }
  pop();
}
function chuno(x, y, s, rot = 0, o = {}) {                                  // чуньо: сморщенный, лёгкий, тёмный (или белый — o.white)
  push(x, y, s, rot); const c = o.white ? [PU.chuW, '#b8b0a0'] : [PU.chuB, '#2a2220']; const P = [[-48, 0], [-40, -26], [-14, -36], [20, -30], [46, -14], [50, 10], [30, 30], [-10, 32], [-38, 22]];
  const b = shape(spline(P, true, 8), { wash: c[0], washA: 1, w: 2, col: '#1a1410', key: o.key || 16010 }); shadeG(b.path, 40, 30, -30, -30, c[1], 0.5); const r = rng(o.key || 16010);
  for (let i = 0; i < 7; i++) { const ex = -36 + r() * 70, ey = -22 + r() * 44; pencil(spline([[ex - 12, ey], [ex - 4, ey - 4], [ex + 4, ey + 2], [ex + 12, ey - 2]], false, 4), { w: 1.6, col: c[1], pass2: false }); } pop();
}
function potFlower(x, y, s, rot = 0) {                                      // цветок картофеля: 5 бело-сиреневых лепестков, жёлтый конус
  push(x, y, s, rot); for (let i = 0; i < 5; i++) { push(0, 0, 1, i / 5 * 6.283); blob([[0, 0], [-14, -20], [0, -36], [14, -20]], { wash: '#ece4f8', washA: 1, w: 1.4, col: '#7a6a9a' }); pop(); } poly([[-7, 4], [7, 4], [0, -14]], { wash: '#f4d020', washA: 1, w: 1.2, col: '#8a7010' }); pop();
}
function mashMound(x, y, w, h, t, o = {}) {                                 // горка пюре: волны-завитки, лунка, кубик масла тает (o.melt 0..1), пар (o.steam)
  push(x, y, 1); const P = [[-w, 0], [-w * 0.8, -h * 0.5], [-w * 0.4, -h * 0.9], [0, -h], [w * 0.4, -h * 0.9], [w * 0.8, -h * 0.5], [w, 0]];
  const m = shape(spline(P, true, 8), { wash: PU.mash, washA: 1, w: 2, col: '#a8946a', key: o.key || 16020 }); shadeG(m.path, w * 0.6, 0, -w * 0.3, -h, PU.mashD, 0.35);
  for (let i = 0; i < 4; i++) pencil(spline([[-w * 0.7 + i * w * 0.35, -h * 0.3], [-w * 0.6 + i * w * 0.35, -h * 0.55], [-w * 0.45 + i * w * 0.35, -h * 0.4]], false, 5), { w: 2, col: '#c8b488', pass2: false });
  pencil([[-w * 0.5, -h * 0.75], [-w * 0.1, -h * 0.92]], { w: 5, col: '#ffffff', a: 0.7, pass2: false }); ell(0, -h * 0.9, w * 0.22, h * 0.1, { wash: PU.mashD, washA: 1, w: 1.4, col: '#a8946a' });
  const mt = o.melt ?? 0.3; if (o.butter !== false) { ell(0, -h * 0.9, w * 0.2 * (0.5 + mt), h * 0.09 * (0.5 + mt), { wash: PU.butter, washA: 0.8, line: false }); push(0, -h * 0.95, 1 - mt * 0.4); const bc = rect(-16, -22, 32, 22, { wash: PU.butter, washA: 1, w: 1.6, col: PU.butterD }); shadeG(bc.path, 16, 0, -16, -22, PU.butterD, 0.3); pencil([[-12, -18], [6, -18]], { w: 3, col: '#fff8c0', pass2: false }); pop();
    for (let i = 0; i < 3; i++) pencil(spline([[-6 + i * 8, -h * 0.85], [-4 + i * 10, -h * 0.65], [-2 + i * 12, -h * 0.5 - i * 6]], false, 4), { w: 4, col: PU.butter, a: 0.7 * mt, pass2: false }); }
  if (o.steam) for (let i = 0; i < 3; i++) { const q = (t * 0.5 + i / 3) % 1; pencil(spline([[-20 + i * 20, -h], [-14 + i * 20 + Math.sin(q * 6 + i) * 14, -h - 40 - q * 60], [-20 + i * 20, -h - 100 - q * 80]], false, 5), { w: 6, col: '#ffffff', a: 0.4 * (1 - q), pass2: false }); }
  pop();
}
function mashBowl(x, y, s, t, o = {}) {                                     // миска пюре: керамика с синей каймой, горка пюре
  push(x, y, s); ell(0, 6, 150, 20, { wash: '#000000', washA: 0.15, line: false }); const b = shape(spline([[-140, -40], [-120, 10], [-60, 30], [60, 30], [120, 10], [140, -40]], true, 6), { wash: o.col || '#f4f0e6', washA: 1, w: 2.4, col: '#3a3a4a', key: (o.key || 16030) });
  shadeG(b.path, 120, 0, -100, -30, '#a8a8b8', 0.35); pencil(spline([[-136, -26], [0, -16], [136, -26]], false, 6), { w: 5, col: '#2a5ab0', pass2: false }); ell(0, -40, 140, 22, { wash: PU.mashD, washA: 1, w: 2, col: '#3a3a4a' });
  mashMound(0, -40, 120, o.h || 70, t, { melt: o.melt, steam: o.steam, key: (o.key || 16030) + 1, butter: o.butter }); pop();
}
function masher(x, y, s, rot = 0) {                                         // толкушка: деревянная ручка, металлическая волнистая решётка
  push(x, y, s, rot); rect(-10, -200, 20, 150, { wash: '#a8743a', washA: 1, w: 2, col: '#3a2008' }); pencil([[0, -50], [0, 0]], { w: 6, col: '#8a8e94', pass2: false });
  const g = rect(-60, 0, 120, 18, { wash: '#b8bcc4', washA: 1, w: 2, col: '#3a3e44' }); metalG(g.path, -20, 6, 80, '#ffffff', '#b8bcc4', '#6a6e74'); for (let i = 0; i < 5; i++) ell(-44 + i * 22, 9, 5, 4, { wash: '#3a3e44', washA: 1, line: false }); pop();
}
function butterBlock(x, y, s, rot = 0, o = {}) {                            // брусок масла на бумаге
  push(x, y, s, rot); shape([[-80, 10], [70, 10], [90, -6], [-60, -6]], { wash: '#f4ecd8', washA: 1, w: 1.4, col: '#8a8070' }); const t = shape([[-60, 0], [60, 0], [80, -20], [80, -60], [-40, -60], [-60, -40]], { wash: PU.butter, washA: 1, w: 2, col: PU.butterD, key: o.key || 16040 });
  shadeG(t.path, 80, -20, -60, -60, PU.butterD, 0.3); pencil([[60, 0], [60, -40], [80, -60]], { w: 2, col: PU.butterD, pass2: false }); pencil([[-40, -52], [40, -52]], { w: 4, col: '#fff8c0', a: 0.8, pass2: false }); if (o.cut) rect(-60, -40, 20, 40, { wash: '#fff0a0', washA: 1, w: 1 }); pop();
}
function milkJug(x, y, s) {                                                 // кувшин молока: глазурь, носик, ручка, молоко внутри
  push(x, y, s); const j = shape(spline([[-50, 0], [-60, -80], [-44, -150], [-56, -170], [40, -170], [50, -150], [60, -80], [50, 0]], true, 6), { wash: '#4a7ab0', washA: 1, w: 2.4, col: '#1a2a4a' }); shadeG(j.path, 50, -80, -50, -80, '#2a4a7a', 0.4);
  ell(-6, -168, 48, 10, { wash: PU.milk, washA: 1, w: 1.4 }); pencil(spline([[56, -140], [96, -120], [90, -60], [56, -40]], false, 5), { w: 10, col: '#4a7ab0' }); pencil([[-36, -130], [-40, -40]], { w: 6, col: '#ffffff', a: 0.4, pass2: false }); pop();
}
Object.assign(PROPS, {
  potatoP() { potato(0, -30, 0.55, 0.3, { key: 16080 }); },
  chunoP() { chuno(0, -30, 0.6, 0.2, { key: 16081 }); },
  masherP() { masher(0, 40, 0.6, -0.2); },
  bowlP() { mashBowl(0, 0, 0.35, 0, { key: 16082, melt: 0.5 }); },
  spoonMP() { push(0, -20, 0.6, 0.3); rect(-6, -10, 12, 120, { wash: '#b8bcc4', washA: 1, w: 1.4 }); ell(0, -30, 26, 34, { wash: '#b8bcc4', washA: 1, w: 1.6 }); blob([[-22, -40], [-10, -64], [12, -66], [24, -40], [0, -24]], { wash: PU.mash, washA: 1, w: 1.4, col: '#a8946a' }); pop(); },
  flowerP() { pencil([[0, 0], [0, -80]], { w: 3, col: '#4a7a2a', pass2: false }); potFlower(0, -90, 0.9); potFlower(20, -70, 0.6, 0.5); },
});
