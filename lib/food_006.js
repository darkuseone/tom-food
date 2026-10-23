/* 006 — еда выпуска «Шаурма»: вертикальный вертел (баранина / курица / «пастор» с ананасом), горизонтальный вертел, шаурма в лаваше (срез, укус),
   дёнер в булке, тако аль пастор, гирос в пите, ананас; реквизит Тома: длинный нож, шаурма, тако, гирос, булка, штангенциркуль. */
const SW = { meat: '#9a5a2a', meatD: '#5a2a10', meatL: '#d08a4a', chick: '#d8a050', chickD: '#8a5a1a', pastor: '#c8402a', pastorD: '#6a1408', lav: '#f2dca8', lavD: '#c8a060', toum: '#fbf6e8', pine: '#f2c838', cab: '#d8e8a0' };
function donerCone(x, y, s, t, o = {}) {                                // вертел стоймя: штырь, конус из пластов, «кручение» полосами, жар сбоку, поддон
  const kind = o.kind || 'lamb', c = kind === 'chicken' ? SW.chick : kind === 'pastor' ? SW.pastor : SW.meat, cd = kind === 'chicken' ? SW.chickD : kind === 'pastor' ? SW.pastorD : SW.meatD;
  push(x, y, s); pencil([[0, 40], [0, -560]], { w: 10, col: '#8a9098' }); ell(0, 40, 110, 20, { wash: '#a8aeb4', washA: 1, w: 2.4, col: '#3a3e44' });
  if (o.heat !== false) { rect(150, -500, 50, 480, { wash: '#3a3a40', washA: 1, w: 2, col: '#1a1a1a' }); for (let i = 0; i < 6; i++) rect(156, -480 + i * 76, 38, 60, { wash: '#ff7a20', washA: 0.85 + 0.15 * Math.sin(t * 6 + i), line: false }); glow(150, -260, 200, 'rgba(255,140,50,1)', 0.35); }
  const pts = [[-70, 0], [-130, -420], [-120, -480], [120, -480], [130, -420], [70, 0]]; const cn = shape(spline(pts, true, 6), { wash: c, washA: 1, w: 3, col: '#2a1408', key: 9640 + (o.key || 0) });
  ctx.save(); ctx.clip(cn.path); const ph = t * 1.6;                     // пласты мяса: неровные слои, поджаристые края, пятна жира едут по кругу
  for (let i = 0; i < 16; i++) { const y0 = -16 - i * 30, r = rng(9641 + i); pencil(spline([[-150, y0 + r() * 8], [-60, y0 - 6 + r() * 10], [40, y0 + r() * 10], [150, y0 - 4]], false, 6), { w: 7, col: cd, a: 0.55, pass2: false }); }
  for (let i = 0; i < 26; i++) { const r = rng(9660 + i), a = r() * 6.283 + ph, xx = Math.sin(a) * 120, yy = -20 - r() * 450; if (Math.cos(a) < 0) continue; blob([[xx - 18, yy], [xx - 6, yy - 10], [xx + 14, yy - 6], [xx + 18, yy + 6], [xx - 4, yy + 10]], { wash: i % 3 ? cd : (kind === 'chicken' ? '#fff0c0' : SW.meatL), washA: 0.8, line: false }); }
  shadeG(cn.path, -150, -240, 60, -240, '#000000', 0.45); shadeG(cn.path, 140, -240, 40, -240, '#ffb060', 0.35); ctx.restore();
  for (let i = 0; i < 5; i++) { const k = (t * 0.8 + i / 5) % 1; ell(60 + i * 10, -460 + k * 440, 3, 5, { wash: '#ffd890', washA: 0.8 * (1 - k), line: false }); }
  if (o.shave) for (let i = 0; i < 5; i++) { const k = ((t * 1.3) + i / 5) % 1; blob([[100, -300 + i * 50 + k * 340], [126, -296 + i * 50 + k * 340], [120, -284 + i * 50 + k * 340], [96, -288 + i * 50 + k * 340]], { wash: SW.meatL, washA: 1 - k * 0.3, w: 1.2, col: cd }); }
  if (o.pine) { push(0, -510, 1); const p = ell(0, 0, 50, 56, { wash: SW.pine, washA: 1, w: 2.4, col: '#6a4a0a' }); for (let i = -2; i <= 2; i++) pencil([[i * 18 - 30, -40], [i * 18 + 30, 40]], { w: 1.4, col: '#a87a10', a: 0.6, pass2: false }); for (let i = 0; i < 5; i++) blob([[0, -50], [-30 + i * 15, -120 - (i % 2) * 20], [-20 + i * 15, -50]], { wash: '#4a8a2a', washA: 1, w: 1.4, col: '#1a3a0a' }); pop(); }
  pop();
}
function hSpit(x, y, s, t, o = {}) {                                    // горизонтальный вертел над углями: мангал, угли, стопка мяса крутится
  push(x, y, s); const m = rect(-260, 20, 520, 90, { wash: '#4a4a50', washA: 1, w: 3, col: '#1a1a1a' }); for (let i = 0; i < 14; i++) { const r = rng(9650 + i); ell(-230 + i * 34, 24 + r() * 8, 18, 10, { wash: i % 3 ? '#ff6a10' : '#ffc040', washA: 0.8 + 0.2 * Math.sin(t * 7 + i), line: false }); } glow(0, 10, 260, 'rgba(255,120,40,1)', 0.5);
  for (const sd of [-1, 1]) pencil([[sd * 280, 110], [sd * 280, -140]], { w: 10, col: '#3a3e44' }); pencil([[-320, -120], [320, -120]], { w: 8, col: '#8a9098' }); push(330, -120, 1, t * 2); pencil([[0, 0], [0, 40]], { w: 6, col: '#5a3a1a' }); pop();
  const sp = []; for (let i = 0; i <= 20; i++) { const a = i / 20 * Math.PI; sp.push([-200 + i * 20, -120 - Math.sin(a) * 4 - 70 - (i % 2) * 10]); } for (let i = 20; i >= 0; i--) sp.push([-200 + i * 20, -120 + 70 + (i % 2) * 8]);
  const st = shape(spline(sp, true, 2), { wash: '#8a3a1a', washA: 1, w: 3, col: '#2a0a04' }); ctx.save(); ctx.clip(st.path); const ph = t * 1.2; for (let i = 0; i < 18; i++) { const r = rng(9655 + i), x0 = -190 + i * 22, yy = -120 + Math.sin(r() * 6.28 + ph) * 60; blob([[x0, yy - 14], [x0 + 18, yy - 10], [x0 + 16, yy + 12], [x0 - 2, yy + 10]], { wash: i % 3 ? '#5a1a08' : '#e8a060', washA: 0.85, line: false }); }
  shadeG(st.path, 0, -190, 0, -40, '#000000', 0.4); shadeG(st.path, 0, -40, 0, -120, '#ff9040', 0.35); ctx.restore();
  for (let q = 0; q < 3; q++) { const k = (t * 0.5 + q / 3) % 1; ell(-100 + q * 100, -220 - k * 200, 30 + k * 40, 20 + k * 20, { wash: '#d8d0c8', washA: 0.35 * (1 - k), line: false }); } pop();
}
function shawarmaRoll(x, y, s, rot = 0, o = {}) {                        // шаурма: лаваш-рулон, срез с мясом, капустой, помидором, соусом; o.bite — откусано
  push(x, y, s, rot); const r = shape(spline([[-60, -160], [-70, 0], [-60, 140], [60, 140], [70, 0], [60, -160]], false, 6), { wash: SW.lav, washA: 1, w: 2.6, col: '#6a4a14', key: 9660 });
  shadeG(r.path, 70, 0, -30, 0, SW.lavD, 0.5); for (let i = 0; i < 6; i++) ell(-30 + (i % 3) * 30, -110 + i * 40, 8, 5, { wash: '#b8803a', washA: 0.6, line: false }); pencil([[-64, -40], [62, 10]], { w: 1.6, col: SW.lavD, a: 0.7, pass2: false });
  rect(-66, 40, 132, 110, { wash: '#e8e0d0', washA: 0.95, w: 1.6, col: '#a8a090' });
  const topY = -160; if (o.bite) { blob([[-60, topY], [-40, topY - 20], [-20, topY + 6], [0, topY - 18], [20, topY + 8], [40, topY - 16], [60, topY]], { wash: SW.meat, washA: 1, w: 2, col: '#3a1a08' }); }
  ell(0, topY, 62, 22, { wash: SW.meat, washA: 1, w: 2.2, col: '#3a1a08' }); for (let i = 0; i < 6; i++) { const r = rng(9670 + i); ell(-40 + r() * 80, topY - 4 + r() * 10, 12, 6, { wash: [SW.meatL, SW.cab, '#e03a2a', SW.toum, '#6aa04a', SW.meatL][i], washA: 1, line: false }); }
  pencil(spline([[-40, topY - 4], [-10, topY + 6], [20, topY - 6], [44, topY + 4]], false, 6), { w: 5, col: SW.toum, pass2: false }); ell(-20, topY - 10, 10, 4, { wash: '#ffffff', washA: 0.8, line: false }); pop();
}
function donerBun(x, y, s, rot = 0) {                                   // дёнер в булке: четвертинка лепёшки-пиде, мясо, салат, лук, соус
  push(x, y, s, rot); const b = shape(spline([[-130, 30], [-120, -60], [0, -90], [120, -60], [130, 30]], false, 6), { wash: '#e8b870', washA: 1, w: 2.6, col: '#6a3a10', key: 9680 }); for (let i = 0; i < 8; i++) ell(-90 + i * 26, -60 + (i % 2) * 10, 3, 2, { wash: '#2a1a0a', washA: 1, line: false });
  for (let i = 0; i < 9; i++) { const r = rng(9685 + i); blob([[-110 + i * 26, 30], [-100 + i * 26, 10 - r() * 20], [-86 + i * 26, 30]], { wash: [SW.meat, '#6aa04a', '#e03a2a', SW.meatL, '#f2f0e0'][i % 5], washA: 1, w: 1.2, col: '#3a2a10' }); }
  pencil(spline([[-100, 24], [-40, 14], [20, 26], [100, 16]], false, 6), { w: 5, col: SW.toum, pass2: false }); const bt = shape(spline([[-130, 30], [-110, 70], [0, 84], [110, 70], [130, 30]], false, 6), { wash: '#d8a860', washA: 1, w: 2.6, col: '#6a3a10' }); pop();
}
function taco(x, y, s, rot = 0, o = {}) {                               // тако аль пастор: тортилья, красное мясо, лук, кинза, кусочки ананаса
  push(x, y, s, rot); const tt = shape(spline([[-110, 0], [-90, -50], [0, -70], [90, -50], [110, 0], [0, 30]], true, 8), { wash: '#f2e0a8', washA: 1, w: 2.4, col: '#7a5a20', key: 9690 }); for (let i = 0; i < 6; i++) ell(-70 + i * 28, -30 + (i % 2) * 14, 6, 4, { wash: '#c8a050', washA: 0.7, line: false });
  for (let i = 0; i < 7; i++) blob([[-80 + i * 24, -40], [-70 + i * 24, -64 - (i % 2) * 8], [-56 + i * 24, -40]], { wash: SW.pastor, washA: 1, w: 1.4, col: SW.pastorD }); for (let i = 0; i < 6; i++) rect(-70 + i * 26, -66 - (i % 3) * 4, 10, 10, { wash: '#f6f2f8', washA: 1, w: 1 });
  if (o.pine !== false) for (let i = 0; i < 3; i++) poly([[-40 + i * 40, -70], [-26 + i * 40, -80], [-14 + i * 40, -66], [-30 + i * 40, -58]], { wash: SW.pine, washA: 1, w: 1.2, col: '#8a6a0a' }); for (let i = 0; i < 5; i++) ell(-60 + i * 30, -74, 5, 3, { wash: '#3a8a2a', washA: 1, line: false }); pop();
}
function gyrosPita(x, y, s, rot = 0) {                                  // гирос: пита кульком, мясо, картошка фри, помидор, дзадзики
  push(x, y, s, rot); poly([[-90, -100], [90, -100], [0, 150]], { wash: '#f6f0e2', washA: 1, w: 2, col: '#8a8a7a' }); const p = shape(spline([[-100, -110], [-80, 20], [0, 120], [80, 20], [100, -110]], false, 6), { wash: '#e8c888', washA: 1, w: 2.4, col: '#7a5a20', key: 9695 });
  for (let i = 0; i < 6; i++) rect(-70 + i * 26, -170 + (i % 2) * 20, 12, 70, { wash: '#f2c848', washA: 1, w: 1.4, col: '#8a6a10' }); for (let i = 0; i < 5; i++) blob([[-80 + i * 34, -100], [-70 + i * 34, -130], [-50 + i * 34, -100]], { wash: SW.meat, washA: 1, w: 1.4, col: SW.meatD }); ell(20, -112, 40, 12, { wash: SW.toum, washA: 1, w: 1.2, col: '#c8c0a8' }); ell(-40, -110, 16, 10, { wash: '#e03a2a', washA: 1, line: false }); pop();
}
function pineapple(x, y, s, rot = 0) { push(x, y, s, rot); const p = ell(0, 0, 60, 80, { wash: SW.pine, washA: 1, w: 2.6, col: '#6a4a0a', key: 9698 }); ctx.save(); ctx.clip(p.path); for (let i = -4; i <= 4; i++) { pencil([[i * 24 - 60, -80], [i * 24 + 60, 80]], { w: 1.6, col: '#a87a10', a: 0.7, pass2: false }); pencil([[i * 24 + 60, -80], [i * 24 - 60, 80]], { w: 1.6, col: '#a87a10', a: 0.7, pass2: false }); } shadeG(p.path, 60, 0, -20, 0, '#8a6a0a', 0.5); ctx.restore();
  for (let i = 0; i < 7; i++) blob([[0, -76], [-50 + i * 16, -170 - (i % 2) * 24], [-36 + i * 16, -76]], { wash: '#3a8a2a', washA: 1, w: 1.6, col: '#14300a' }); pop(); }
Object.assign(PROPS, {
  knifeLongP() { pencil([[0, 20], [0, -40]], { w: 12, col: '#2a2a2a' }); poly([[-8, -40], [8, -40], [12, -260], [-4, -280], [-8, -40]], { wash: '#d8dce0', washA: 1, w: 2, col: '#4a5058' }); pencil([[4, -60], [6, -250]], { w: 2, col: '#ffffff', a: 0.7, pass2: false }); },
  shawarmaP() { shawarmaRoll(0, -60, 0.5, 0); },
  shawarmaBiteP() { shawarmaRoll(0, -60, 0.5, 0, { bite: true }); },
  tacoP() { taco(0, -40, 0.6, -0.3); },
  gyrosP() { gyrosPita(0, -70, 0.5, 0.1); },
  bunP() { donerBun(0, -40, 0.55, -0.2); },
  caliperP() { pencil([[0, 20], [0, -200]], { w: 10, col: '#a8aeb4' }); for (const yy of [-200, -120]) poly([[0, yy], [70, yy], [70, yy + 14], [0, yy + 14]], { wash: '#c8ccd0', washA: 1, w: 2, col: '#3a3e44' }); for (let i = 0; i < 8; i++) pencil([[-6, -40 - i * 18], [6, -40 - i * 18]], { w: 1.4, col: '#2a2a2a', pass2: false }); },
});
