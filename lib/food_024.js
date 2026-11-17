/* 024 — еда выпуска «Чей борщ?»: хиро-тарелка красного борща крупно сверху-3/4 (сметанная спираль раскручивается — o.swirl, жир-«золотинки», укроп, соломка свёклы/капусты/моркови, пар),
   кадка закваски (зелёная/рубиновая/золотая), кувшин молдавского борша из отрубей, польский барщ в чашке с ушками, литовский розовый холодник, молдавская зама,
   репа с мордочкой (уволена), кубик картошки, банка томата 1920-х, дневник купца. Общее — food_005.js (borschBowl, hogweed, cabbage, tomato, uszko, pampushka, clayPot). */
const B24 = { red: '#b0142a', redD: '#5a0614', redM: '#8a0e22', redL: '#e8485a', fat: '#f6b84a', smet: '#fbf6ea', smetD: '#d8ccb4', dill: '#3a8a2a', beet: '#7a0a2a', cab: '#e8f0c8', car: '#f08a2a', pink: '#f28ab8', pinkL: '#fcd0e2', gold: '#e8b850', bran: '#b88a4a' };
function borschHero(x, y, s, t, o = {}) {                             // хиро-тарелка борща сверху-3/4: орнамент по краю, рубиновый бульон с глубиной, жир-золотинки, сметанная спираль (o.swirl 0..1), укроп, пар
  const sw = o.swirl || 0, k = o.key || 24000; push(x, y, s);
  ell(0, 40, 360, 120, { wash: '#000000', washA: 0.22, line: false });
  const pl = ell(0, 0, 350, 160, { wash: '#f8f4ec', washA: 1, w: 3, col: '#3a3028', key: k }); shadeG(pl.path, 200, 140, -120, -60, '#b8ae9e', 0.45);
  ell(0, 0, 316, 140, { line: true, w: 2, col: '#c8bca8', a: 0.8 });
  for (let i = 0; i < 28; i++) { const a = i / 28 * 6.283, cx = Math.cos(a) * 332, cy = Math.sin(a) * 150; push(cx, cy, 1, a + 1.57); poly([[-9, 0], [0, -7], [9, 0], [0, 7]], { wash: i % 2 ? '#c8202a' : '#1a1418', washA: 1, line: false }); pop(); }   // орнамент-ромбики по краю
  const soup = ell(0, 6, 290, 124, { wash: o.col || B24.red, washA: 1, w: 2.6, col: '#3a0408', key: k + 1 });
  ctx.save(); ctx.clip(soup.path); shadeG(soup.path, -200, -120, 160, 130, B24.redD, 0.75); shadeG(soup.path, 220, 130, -40, -30, '#2a0006', 0.5);
  const r = rng(k + 2);
  for (let i = 0; i < 40; i++) { const px = (r() - 0.5) * 520, py = (r() - 0.5) * 210, ro = r() * 3; push(px, py, 1, ro);
    if (i % 4 === 0) pencil([[-22, 0], [22, 2]], { w: 6, col: B24.cab, a: 0.85, pass2: false }); else if (i % 4 === 1) rect(-14, -3, 28, 7, { wash: B24.beet, washA: 0.95, line: false }); else if (i % 4 === 2) rect(-10, -3, 20, 6, { wash: B24.car, washA: 0.8, line: false }); else rect(-9, -8, 16, 16, { wash: '#f2e2b8', washA: 0.75, line: false }); pop(); }
  for (let i = 0; i < 22; i++) { const px = (r() - 0.5) * 500, py = (r() - 0.5) * 200, rr = 6 + r() * 16, wob = Math.sin(t * 1.5 + i) * 2;   // жир-золотинки с бликом
    ell(px + wob, py, rr, rr * 0.55, { wash: B24.fat, washA: 0.55, w: 1, col: '#c87a1a' }); ell(px + wob - rr * 0.3, py - rr * 0.18, rr * 0.3, rr * 0.14, { wash: '#fffbe0', washA: 0.85, line: false }); }
  ctx.restore();
  const sx = o.smX || 30, sy = o.smY || -10;                           // сметана: облачко → спираль раскручивается по бульону
  if (sw > 0) { const turns = 2.6, n = 60; const pts = []; for (let i = 0; i <= n; i++) { const q = i / n, a = q * turns * 6.283 + t * 2 * sw, rad = 8 + q * (40 + sw * 230); pts.push([sx + Math.cos(a) * rad, sy + Math.sin(a) * rad * 0.44]); }
    pencil(pts, { w: 16 - sw * 6, col: B24.smet, a: 0.95, pass2: false, gap: false }); pencil(pts.map(([a, b]) => [a, b - 3]), { w: 4, col: '#ffffff', a: 0.8, pass2: false, gap: false }); }
  const sk = 1 - sw * 0.7; push(sx, sy, sk); const sm = blob([[-70, 10], [-60, -30], [-20, -54], [30, -50], [70, -26], [74, 12], [30, 34], [-36, 32]], { wash: B24.smet, washA: 1, w: 2, col: B24.smetD, key: k + 3 }); shadeG(sm.path, 60, 30, -20, -20, '#e0d4bc', 0.5);
  pencil(spline([[-36, -6], [-10, -30], [24, -24], [30, -4], [6, 6]], false, 6), { w: 3, col: '#d8ccb4', pass2: false }); ell(-22, -30, 18, 7, { wash: '#ffffff', washA: 0.95, line: false }); pop();
  for (let i = 0; i < 7; i++) { const px = -120 + (i * 61 % 260), py = -50 + (i * 37 % 100); push(px, py, 1, i * 0.9); pencil([[-26, 0], [26, 0]], { w: 2.4, col: B24.dill, pass2: false }); for (let q = -3; q <= 3; q++) for (const sd of [-1, 1]) pencil([[q * 7, 0], [q * 7 + 6, sd * 12]], { w: 1.6, col: '#5aaa3a', pass2: false }); pop(); }
  ell(-180, -60, 70, 12, { wash: '#ffffff', washA: 0.35, line: false, rot: -0.15 }); ell(-160, -72, 24, 5, { wash: '#ffffff', washA: 0.6, line: false, rot: -0.15 });   // блик окна на бульоне
  if (o.steam !== false) for (let q = 0; q < 6; q++) { const kk = (t * 0.4 + q / 6) % 1; pencil(spline([[-180 + q * 70, -60 - kk * 160], [-170 + q * 70 + Math.sin(kk * 6 + q) * 30, -150 - kk * 200], [-190 + q * 70, -240 - kk * 220]], false, 6), { w: 12, col: '#ffffff', a: 0.32 * Math.sin(kk * Math.PI), pass2: false }); }
  pop();
}
function kvasTub(x, y, s, t, o = {}) {                                // кадка закваски: клёпки, обручи, тряпица, мутная жидкость o.col, пузыри брожения, o.leaves — стебли борщевика торчат
  const k = o.key || 24020; push(x, y, s); ell(0, 6, 120, 20, { wash: '#000000', washA: 0.2, line: false });
  const b = shape([[-100, 0], [-112, -170], [112, -170], [100, 0]], { wash: '#9a6a3a', washA: 1, w: 3, col: '#2a1408', key: k }); shadeG(b.path, 112, 0, -40, 0, '#4a2a10', 0.5);
  for (let i = -4; i <= 4; i++) pencil([[i * 24, -168], [i * 22, -4]], { w: 1.6, col: '#4a2a10', a: 0.6, pass2: false });
  for (const yy of [-30, -140]) pencil([[-106, yy], [106, yy]], { w: 9, col: '#5a4a3a', pass2: false });
  ell(0, -170, 112, 24, { wash: o.col || '#7a9a3a', washA: 1, w: 2.4, col: '#2a1408' }); ell(-30, -176, 40, 6, { wash: '#ffffff', washA: 0.3, line: false });
  for (let i = 0; i < 6; i++) { const ph = (t * 0.8 + i / 6) % 1; ell(-70 + i * 28, -172 - ph * 10, 5 * (1 - ph) + 2, 4 * (1 - ph) + 2, { line: true, w: 1.6, col: '#ffffff', a: 0.8 * (1 - ph) }); }
  if (o.leaves) for (let i = 0; i < 4; i++) { push(-50 + i * 34, -176, 1, -0.4 + i * 0.25); pencil([[0, 0], [0, -90]], { w: 5, col: '#5a7a2a', pass2: false }); blob([[0, -90], [-26, -110], [-10, -130], [14, -112]], { wash: '#5a8a2a', washA: 1, w: 1.4, col: '#1a3a0a' }); pop(); }
  if (o.cloth) { blob([[-118, -168], [-80, -186], [0, -180], [70, -190], [120, -170], [124, -140], [-120, -144]], { wash: '#f0e6d0', washA: 0.95, w: 2, col: '#6a5a4a' }); pencil([[-120, -150], [124, -150]], { w: 3, col: '#c8243a', pass2: false }); }
  pop();
}
function branJug(x, y, s, t, o = {}) {                               // глиняный кувшин молдавского борша: мутно-золотая закваска, отруби плавают, любисток, тряпица с бечёвкой
  const k = o.key || 24030; push(x, y, s);
  const j = shape(spline([[-50, -230], [-60, -200], [-100, -110], [-100, -30], [-60, 10], [60, 10], [100, -30], [100, -110], [60, -200], [50, -230]], false, 8), { wash: '#c8743a', washA: 1, w: 3, col: '#3a1408', key: k }); shadeG(j.path, 100, 0, -40, 0, '#6a3414', 0.5);
  for (let i = 0; i < 3; i++) pencil(spline([[-96, -120 + i * 26], [0, -110 + i * 26], [96, -120 + i * 26]], false, 6), { w: 3, col: '#f4d8a8', a: 0.6, pass2: false });
  pencil(spline([[60, -190], [130, -170], [124, -80], [90, -60]], false, 6), { w: 12, col: '#a8582a', pass2: false });
  ell(0, -232, 52, 12, { wash: B24.gold, washA: 1, w: 2, col: '#5a3a08' }); for (let i = 0; i < 7; i++) ell(-34 + i * 11, -232 + (i % 2) * 4, 4, 2, { wash: B24.bran, washA: 1, line: false });
  if (o.cloth !== false) { blob([[-58, -236], [-30, -252], [30, -250], [60, -236], [56, -214], [-56, -214]], { wash: '#f4ecd8', washA: 0.9, w: 1.6, col: '#6a5a4a' }); pencil([[-58, -222], [58, -222]], { w: 3, col: '#8a5a2a', pass2: false }); }
  if (o.label) { rect(-50, -130, 100, 46, { wash: '#f4ecd8', washA: 1, w: 1.6, col: '#3a2410' }); txt(o.label, 0, -100, 26, { font: 'Hand', col: '#3a2410' }); }
  pop();
}
function barszczCup(x, y, s, t, o = {}) {                            // польский барщ: прозрачный рубиновый бульон в бульоннице с ручками, на блюдце — ушки, пар
  const k = o.key || 24040; push(x, y, s); ell(0, 36, 170, 34, { wash: '#f8f4ec', washA: 1, w: 2.4, col: '#4a4038', key: k }); ell(0, 36, 140, 24, { line: true, w: 1.4, col: '#c8b8a0' });
  for (const sd of [-1, 1]) pencil(spline([[sd * 92, -30], [sd * 130, -24], [sd * 124, 6], [sd * 88, 4]], false, 5), { w: 9, col: '#f2ece0', pass2: false });
  const c = shape(spline([[-96, -40], [-90, 10], [-50, 34], [50, 34], [90, 10], [96, -40]], false, 8), { wash: '#f6f2ea', washA: 1, w: 2.6, col: '#4a4038', key: k + 1 }); shadeG(c.path, 96, 0, -30, 0, '#b8ae9e', 0.45);
  pencil(spline([[-92, -20], [0, 0], [92, -20]], false, 6), { w: 5, col: '#2a5aa8', a: 0.6, pass2: false });
  const b = ell(0, -40, 96, 22, { wash: '#c0102a', washA: 0.85, w: 2.2, col: '#4a0410' }); shadeG(b.path, -60, -40, 60, -30, '#ff6a7a', 0.45); ell(-40, -46, 26, 5, { wash: '#ffffff', washA: 0.6, line: false });
  for (let i = 0; i < 4; i++) { const a = -0.8 + i * 0.5; uszko(Math.cos(a) * 120 + 20, 36 + Math.sin(a) * 6, 0.9, a); }
  if (o.steam !== false) for (let q = 0; q < 3; q++) { const kk = (t * 0.5 + q / 3) % 1; pencil(spline([[-30 + q * 30, -60 - kk * 80], [-20 + q * 30 + Math.sin(kk * 6 + q) * 14, -110 - kk * 100]], false, 4), { w: 6, col: '#ffffff', a: 0.4 * Math.sin(kk * 3.14), pass2: false }); }
  pop();
}
function pinkSoup(x, y, s, t, o = {}) {                              // литовский холодник: ярко-розовая гладь, огурец, укроп, половинки яйца; рядом горячая картошка
  const k = o.key || 24050; push(x, y, s); ell(0, 30, 190, 40, { wash: '#000000', washA: 0.18, line: false });
  const bw = shape(spline([[-170, 0], [-150, 70], [0, 96], [150, 70], [170, 0]], false, 8), { wash: '#e8f0f4', washA: 1, w: 2.6, col: '#3a4a5a', key: k }); shadeG(bw.path, 170, 0, -40, 0, '#a8b8c8', 0.45);
  const so = ell(0, 0, 170, 40, { wash: B24.pink, washA: 1, w: 2.4, col: '#8a2a5a', key: k + 1 }); shadeG(so.path, -120, -30, 140, 30, '#ffd8ea', 0.4);
  const r = rng(k + 2); for (let i = 0; i < 18; i++) { const px = (r() - 0.5) * 290, py = (r() - 0.5) * 56; if (i % 3 === 0) { ell(px, py, 9, 5, { wash: '#7ab84a', washA: 0.9, w: 1, col: '#2a5a1a' }); ell(px, py, 5, 3, { wash: '#e8f4c8', washA: 0.9, line: false }); } else for (let q = 0; q < 3; q++) pencil([[px, py], [px + Math.cos(q * 2 + i) * 9, py + Math.sin(q * 2 + i) * 5]], { w: 1.6, col: B24.dill, pass2: false }); }
  for (const dx of [-40, 50]) { ell(dx, -6, 30, 18, { wash: '#fbf8f0', washA: 1, w: 1.6, col: '#8a8070' }); ell(dx, -6, 14, 10, { wash: '#f4c030', washA: 1, w: 1, col: '#a87a10' }); }
  ell(-70, -14, 30, 5, { wash: '#ffffff', washA: 0.4, line: false });
  pop();
}
function zeama(x, y, s, t, o = {}) {                                 // молдавская зама: глиняная миска, золотой куриный бульон, домашняя лапша, любисток, пар
  const k = o.key || 24060; push(x, y, s); ell(0, 30, 180, 36, { wash: '#000000', washA: 0.18, line: false });
  const bw = shape(spline([[-160, 0], [-140, 66], [0, 92], [140, 66], [160, 0]], false, 8), { wash: '#b8683a', washA: 1, w: 2.6, col: '#3a1408', key: k }); shadeG(bw.path, 160, 0, -40, 0, '#6a3414', 0.5); pencil(spline([[-150, 30], [0, 58], [150, 30]], false, 6), { w: 5, col: '#f4d8a8', a: 0.7, pass2: false });
  const so = ell(0, 0, 160, 36, { wash: B24.gold, washA: 1, w: 2.2, col: '#6a4a08', key: k + 1 }); shadeG(so.path, 120, 30, -40, -20, '#c88a20', 0.45);
  for (let i = 0; i < 12; i++) pencil(spline([[-120 + i * 20, -10 + (i % 3) * 8], [-110 + i * 20, -2 + (i % 2) * 6], [-96 + i * 20, -12 + (i % 3) * 6]], false, 4), { w: 4, col: '#fff0c0', pass2: false });
  for (let i = 0; i < 5; i++) { push(-70 + i * 36, -14 + (i % 2) * 10, 1, i); blob([[0, 0], [-10, -10], [0, -18], [10, -10]], { wash: '#4a8a2a', washA: 1, w: 1, col: '#1a3a0a' }); pop(); }
  for (let i = 0; i < 8; i++) ell(-100 + i * 28, 6 - (i % 2) * 12, 7, 4, { wash: '#fff4c0', washA: 0.6, line: false });
  if (o.steam !== false) for (let q = 0; q < 3; q++) { const kk = (t * 0.5 + q / 3) % 1; pencil(spline([[-40 + q * 40, -30 - kk * 90], [-30 + q * 40 + Math.sin(kk * 6 + q) * 16, -80 - kk * 110]], false, 4), { w: 7, col: '#ffffff', a: 0.4 * Math.sin(kk * 3.14), pass2: false }); }
  pop();
}
function turnipFace(x, y, s, rot = 0, o = {}) {                     // репа с мордочкой: бело-сиреневая, ботва; o.sad — грустная, o.sign — табличка «УВОЛЕНА»
  push(x, y, s, rot); for (const a of [-0.4, 0, 0.4]) { push(0, -50, 1, a); pencil([[0, 0], [0, -70]], { w: 5, col: '#4a7a2a', pass2: false }); blob([[0, -70], [-24, -96], [-6, -120], [16, -96]], { wash: '#5a9a3a', washA: 1, w: 1.4, col: '#1a3a0a' }); pop(); }
  const b = blob([[0, 70], [-50, 20], [-56, -20], [-30, -54], [30, -54], [56, -20], [50, 20]], { wash: '#f6f0e4', washA: 1, w: 2.4, col: '#3a2a3a', key: o.key || 24070 }); shadeG(b.path, 0, -56, 0, 0, '#9a4ac8', 0.85); shadeG(b.path, 50, 30, -20, 0, '#b8a8a0', 0.4);
  pencil([[0, 70], [4, 96]], { w: 2, col: '#8a7a6a', pass2: false });
  for (const sd of [-1, 1]) { ell(sd * 18, 4, 6, o.sad ? 4 : 7, { wash: '#1a1418', washA: 1, line: false }); if (o.sad) pencil([[sd * 26, -10], [sd * 10, -6]], { w: 2.4, col: '#1a1418', pass2: false }); }
  pencil(o.sad ? spline([[-14, 30], [0, 22], [14, 30]], false, 4) : spline([[-14, 24], [0, 32], [14, 24]], false, 4), { w: 2.4, col: '#1a1418', pass2: false });
  if (o.tear) ell(24, 18 + (o.tear * 30) % 30, 4, 6, { wash: '#8ac8f4', washA: 0.9, line: false });
  if (o.sign) { pencil([[50, 20], [110, -40]], { w: 3, col: '#6a4a2a', pass2: false }); push(130, -60, 1, 0.12); rect(-70, -26, 140, 52, { wash: '#f4ecd8', washA: 1, w: 2, col: '#2a1a0a' }); txt('УВОЛЕНА', 0, 10, 28, { font: 'Osw', col: '#c8202a' }); pop(); }
  pop();
}
function potatoCube(x, y, s, rot = 0, o = {}) {                     // кубик картошки 3/4: светлый срез, крахмальный блеск, краешек кожуры; o.wet — в бульоне (розоватый)
  push(x, y, s, rot); const top = poly([[-40, -20], [0, -40], [40, -20], [0, 0]], { wash: o.wet ? '#f4d0b8' : '#fbefcf', washA: 1, w: 2, col: '#6a4a20', key: o.key || 24080 });
  const l = poly([[-40, -20], [0, 0], [0, 44], [-40, 24]], { wash: o.wet ? '#e8b49a' : '#efd9a8', washA: 1, w: 2, col: '#6a4a20' }); const rr = poly([[0, 0], [40, -20], [40, 24], [0, 44]], { wash: o.wet ? '#c8907a' : '#d8bc84', washA: 1, w: 2, col: '#6a4a20' });
  pencil([[38, -18], [38, 22]], { w: 4, col: '#a8743a', pass2: false }); ell(-6, -24, 12, 4, { wash: '#ffffff', washA: 0.6, line: false }); pop();
}
function tomatoTin(x, y, s, t, o = {}) {                             // банка томата 1920-х: жесть, бумажная этикетка с помидором, надпись o.label
  push(x, y, s); const c = rect(-50, -130, 100, 130, { wash: '#c8ccd0', washA: 1, w: 2.4, col: '#2a2e34', key: o.key || 24090 }); metalG(c.path, -20, -60, 90, '#ffffff', '#b8bcc4', '#5a5e68', 0.6);
  rect(-50, -110, 100, 86, { wash: o.paper || '#f4e0b0', washA: 1, w: 1.6, col: '#3a2a1a' }); tomato(0, -76, 0.55, 0); txt(o.label || 'ТОМАТ', 0, -34, 20, { font: 'Osw', col: '#c8202a' });
  ell(0, -130, 50, 9, { wash: '#d8dce0', washA: 1, w: 1.6, col: '#2a2e34' }); for (const yy of [-120, -8]) pencil([[-50, yy], [50, yy]], { w: 2, col: '#8a8e96', pass2: false }); pop();
}
function diary(x, y, s, t, o = {}) {                                 // дневник купца: раскрытая тетрадь, готический почерк-волны, чернильница, перо
  push(x, y, s, o.rot || 0); const L = blob([[-150, 0], [-140, -100], [0, -90], [0, 10]], { wash: '#f2e6c8', washA: 1, w: 2, col: '#4a3418', key: o.key || 24095 }); const R = blob([[0, 10], [0, -90], [140, -100], [150, 0]], { wash: '#f6ead0', washA: 1, w: 2, col: '#4a3418' });
  shadeG(L.path, 0, 0, -60, 0, '#a8885a', 0.4); for (let i = 0; i < 6; i++) for (const sd of [-1, 1]) { const n = o.write !== undefined && sd > 0 ? clamp(o.write * 6 - i) : 1; if (n > 0) pencil(spline([[sd * 20, -76 + i * 13], [sd * (20 + 50 * n), -74 + i * 13], [sd * (20 + 110 * n), -77 + i * 13]], false, 5), { w: 1.8, col: '#2a1a3a', a: 0.75, pass2: false }); }
  txt('1584', -80, -80, 20, { font: 'Hand', col: '#6a2a1a' }); pop();
}
Object.assign(PROPS, {
  quillP() { pencil(spline([[0, 10], [6, -60], [20, -130]], false, 5), { w: 3, col: '#f4ecd8' }); blob([[6, -60], [-14, -100], [4, -150], [26, -126], [22, -80]], { wash: '#f8f4ec', washA: 1, w: 1.4, col: '#8a7a6a' }); },
  diaryP() { push(0, -40, 0.5, -0.2); diary(0, 0, 1, 0, { write: 1 }); pop(); },
  beetHalfP() { push(0, -50, 1); const b = ell(0, 0, 40, 40, { wash: '#7a0a2a', washA: 1, w: 2, col: '#3a0414' }); for (let i = 1; i < 4; i++) ell(0, 0, 40 - i * 9, 40 - i * 9, { line: true, w: 2, col: '#e8487a', a: 0.6 }); pop(); },
  bowlBorschP() { push(0, -30, 0.32); borschBowl(0, 0, 1, 0, { steam: false }); pop(); },
  branJugP() { push(0, 10, 0.42); branJug(0, 0, 1, 0, { cloth: false }); pop(); },
  pinkBowlP() { push(0, -24, 0.34); pinkSoup(0, 0, 1, 0); pop(); },
  tinP() { push(0, 20, 0.6); tomatoTin(0, 0, 1, 0); pop(); },
});
function khata(x, y, s, t, o = {}) {                                  // хата-мазанка: белёные стены, соломенная крыша-четырёхскатка, окошки с наличниками, завалинка, дымок; o.lit — окна светятся, o.sun — цвет солнечной стороны
  const k = o.key || 24300; push(x, y, s);
  const w = rect(-150, -150, 300, 150, { wash: '#f4eee0', washA: 1, w: 2.4, col: '#4a3a2a', key: k }); shadeG(w.path, 150, 0, -40, 0, '#a89a8a', 0.45); if (o.sun) shadeG(w.path, -150, 0, 40, 0, o.sun, 0.35);
  rect(-160, -14, 320, 14, { wash: '#8a6a4a', washA: 1, w: 1.6, col: '#3a2410' });
  const rf = poly([[-200, -140], [-90, -270], [90, -270], [200, -140]], { wash: '#c8a058', washA: 1, w: 2.6, col: '#4a3010', key: k + 1 }); shadeG(rf.path, 200, -140, -60, -260, '#6a4a18', 0.5);
  for (let i = 0; i < 16; i++) pencil([[-190 + i * 25, -142], [-86 + i * 12, -266]], { w: 1.4, col: '#8a6a28', a: 0.55, pass2: false }); pencil([[-200, -140], [200, -140]], { w: 5, col: '#7a5a20', pass2: false });
  for (const dx of [-80, 60]) { rect(dx - 26, -110, 52, 50, { wash: o.lit ? '#ffd890' : '#3a4a5a', washA: 1, w: 2, col: '#2a1a0a' }); pencil([[dx, -110], [dx, -60]], { w: 2, col: '#2a1a0a', pass2: false }); pencil([[dx - 26, -85], [dx + 26, -85]], { w: 2, col: '#2a1a0a', pass2: false }); rect(dx - 32, -118, 64, 8, { wash: '#2a5aa8', washA: 1, line: false }); rect(dx - 32, -58, 64, 6, { wash: '#2a5aa8', washA: 1, line: false }); if (o.lit) glow(dx, -85, 50, 'rgba(255,200,120,1)', 0.25); }
  rect(-10, -120, 44, 106, { wash: '#6a4a2a', washA: 1, w: 2, col: '#2a1408' });
  rect(70, -320, 30, 70, { wash: '#e8e0d0', washA: 1, w: 1.6, col: '#4a3a2a' }); if (o.smoke !== false) for (let q = 0; q < 4; q++) { const ph = (t * 0.3 + q / 4 + x * 0.001) % 1; ell(85 + Math.sin(ph * 5 + q) * 20, -330 - ph * 200, 14 + ph * 34, 10 + ph * 22, { wash: '#e8e4dc', washA: 0.5 * (1 - ph), line: false }); }
  pop();
}
function tripodPot(x, y, s, t, o = {}) {                              // котелок на треноге над костром во дворе: огонь, пар (o.steam), o.col — цвет варева
  push(x, y, s); for (const sd of [-1, 1]) pencil([[sd * 70, 0], [0, -170]], { w: 6, col: '#3a2a1a', pass2: false }); pencil([[0, -170], [0, -120]], { w: 2, col: '#2a2a2a', pass2: false });
  for (let i = 0; i < 4; i++) { const f = flick(t, i + x); blob([[-30 + i * 16, 0], [-24 + i * 16, -28 * f], [-16 + i * 16, -40 * f], [-8 + i * 16, -20 * f], [-2 + i * 16, 0]], { wash: i % 2 ? '#ffb030' : '#ff6a20', washA: 0.95, line: false }); }
  const p = shape(spline([[-46, -120], [-50, -70], [-30, -46], [30, -46], [50, -70], [46, -120]], false, 6), { wash: '#2a2420', washA: 1, w: 2, col: '#0a0806' }); ell(0, -120, 46, 10, { wash: o.col || '#a8142a', washA: 1, w: 1.6, col: '#1a0a0a' });
  glow(0, -10, 70, 'rgba(255,150,60,1)', 0.25); if (o.steam !== false) for (let q = 0; q < 3; q++) { const ph = (t * 0.5 + q / 3) % 1; ell(Math.sin(ph * 6 + q) * 16, -140 - ph * 120, 12 + ph * 24, 10 + ph * 16, { wash: '#ffffff', washA: 0.45 * (1 - ph), line: false }); }
  pop();
}
