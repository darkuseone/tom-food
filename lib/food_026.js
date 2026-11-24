/* 026 — еда выпуска «Суши»: нигири, роллы, кадка-хангири, кувшин нарэдзуси, кадка фунадзуси под камнем, тунец, лосось, уксусная бочка,
   тарелка конвейера, норэн, фонарь-тётин; реквизит Тома (PROPS) и иконки шкалы ингредиентов INGR_C26. Общее — food_001.js (crumbs, bubbleTag). */
const SU = { rice: '#fbf8f0', riceD: '#d8d0bc', salmon: '#f4844a', salmonL: '#ffc8a0', tuna: '#c8243a', tunaD: '#7a0a1a', toro: '#f0a0a8', nori: '#1a2a1e', soy: '#5a2a0a', wood: '#c89a5a', woodD: '#6a4a24' };
function riceGrains(x, y, rx, ry, n, seed, a = 0.7) {                       // рисинки-зёрнышки на рисовой поверхности (овальные чёрточки)
  const r = rng(seed); for (let i = 0; i < n; i++) { const px = x + (r() - 0.5) * 2 * rx, py = y + (r() - 0.5) * 2 * ry; ell(px, py, 7 + r() * 3, 4, { rot: r() * 3, wash: SU.rice, washA: 1, w: 1, col: SU.riceD, }); }
}
function nigiri(x, y, s, t, o = {}) {                                       // нигири: рисовый комок + ломоть рыбы (o.kind: salmon|tuna|toro|egg), блик, o.big — эдоский размер
  const k = o.kind || 'salmon', key = o.key || 26000, wb = o.big ? 1.35 : 1;
  push(x, y, s); castShadow(0, 4, 150 * wb, 30, 0, 0.18);
  const rb = blob([[-120 * wb, 0], [-128 * wb, -50], [-90 * wb, -84], [0, -92], [90 * wb, -84], [128 * wb, -50], [120 * wb, 0], [0, 10]], { wash: SU.rice, washA: 1, w: 2.4, col: '#8a8070', key });
  shadeG(rb.path, 0, -90, 0, 10, '#b8b0a0', 0.45); riceGrains(0, -40, 110 * wb, 34, 22, key + 1);
  if (k === 'egg') { const e = rect(-140 * wb, -150, 280 * wb, 70, { wash: '#f8d040', washA: 1, w: 2.4, col: '#7a5a08', key: key + 2 }); shadeG(e.path, 0, -150, 0, -80, '#c89010', 0.4); rect(-12, -150, 24, 160, { wash: SU.nori, washA: 1, w: 1.4 }); pop(); return; }
  const col = k === 'tuna' ? SU.tuna : k === 'toro' ? SU.toro : SU.salmon, colL = k === 'tuna' ? '#e8506a' : k === 'toro' ? '#fcd0d4' : SU.salmonL;
  const f = blob([[-150 * wb, -70], [-140 * wb, -112], [-60 * wb, -132], [60 * wb, -134], [150 * wb, -118], [160 * wb, -84], [90 * wb, -66], [-60 * wb, -62]], { wash: col, washA: 1, w: 2.6, col: k === 'tuna' ? SU.tunaD : '#8a3a10', key: key + 3 });
  shadeG(f.path, 0, -134, 0, -62, k === 'tuna' ? SU.tunaD : '#c8502a', 0.4);
  ctx.save(); ctx.clip(f.path); for (let i = 0; i < 6; i++) pencil(spline([[-150 * wb + i * 52 * wb, -140], [-130 * wb + i * 52 * wb, -100], [-150 * wb + i * 54 * wb, -60]], false, 5), { w: k === 'toro' ? 7 : 5, col: k === 'tuna' ? '#e8607a' : '#fff0e0', a: k === 'tuna' ? 0.35 : 0.8, pass2: false }); ctx.restore();
  pencil(spline([[-90 * wb, -120], [0, -128], [80 * wb, -122]], false, 5), { w: 5, col: '#ffffff', a: 0.55 + 0.25 * Math.sin(t * 3 + key), pass2: false });
  ell(-40 * wb, -116, 14, 5, { wash: '#ffffff', washA: 0.7, line: false }); ell(60 * wb, -114, 8, 3, { wash: colL, washA: 0.9, line: false });
  pop();
}
function maki(x, y, s, o = {}) {                                            // срез ролла: кольцо нори, рис, начинка (лосось, огурец, авокадо)
  push(x, y, s); const n = ell(0, 0, 70, 66, { wash: SU.nori, washA: 1, w: 2.4, col: '#0a140c', key: o.key || 26020 }); ell(0, 0, 60, 56, { wash: SU.rice, washA: 1, w: 1.4, col: SU.riceD }); riceGrains(0, 0, 46, 42, 14, (o.key || 26020) + 1, 1);
  ell(-12, -6, 20, 16, { wash: SU.salmon, washA: 1, w: 1.6, col: '#8a3a10' }); ell(16, 4, 12, 12, { wash: '#7ab84a', washA: 1, w: 1.4, col: '#2a5a1a' }); ell(0, 18, 14, 9, { wash: '#c8d870', washA: 1, w: 1.2, col: '#5a6a1a' }); pop();
}
function hangiri(x, y, s, t, o = {}) {                                      // деревянная кадка для риса: медные обручи, рис горкой, пар, лопатка-сямодзи
  push(x, y, s); const key = o.key || 26030; const b = blob([[-220, -60], [-206, 30], [0, 52], [206, 30], [220, -60]], { wash: '#d8a868', washA: 1, w: 3, col: SU.woodD, key }); shadeG(b.path, -220, 0, 220, 0, '#8a5a2a', 0.45);
  for (let i = 0; i < 9; i++) pencil([[-200 + i * 50, -56], [-190 + i * 48, 36]], { w: 1.4, col: '#9a6a3a', a: 0.5, pass2: false });
  for (const yy of [-30, 14]) pencil(spline([[-214, yy], [0, yy + 22], [214, yy]], false, 6), { w: 7, col: '#b8662a', pass2: false });
  const r = ell(0, -60, 220, 46, { wash: SU.rice, washA: 1, w: 2, col: '#8a8070' }); shadeG(r.path, 0, -106, 0, -14, '#c8c0b0', 0.35); riceGrains(0, -64, 190, 30, 30, key + 1, 1);
  if (o.vin) { const k = clamp(o.vin); for (let i = 0; i < 8; i++) ell(-60 + i * 18, -70 + Math.sin(i) * 8, 16 * k, 8 * k, { wash: '#f0c860', washA: 0.5, line: false }); }
  push(120, -90, 1, -0.5); rect(-10, -100, 20, 110, { wash: '#e8c890', washA: 1, w: 1.6, col: SU.woodD }); ell(0, 10, 30, 22, { wash: '#e8c890', washA: 1, w: 1.6, col: SU.woodD }); pop();
  if (o.steam !== 0) for (let i = 0; i < 4; i++) { const ph = (t * 0.5 + i * 0.25) % 1; pencil(spline([[-100 + i * 60, -100 - ph * 200], [-80 + i * 60 + Math.sin(t * 2 + i) * 20, -160 - ph * 220], [-100 + i * 60, -220 - ph * 240]], false, 6), { w: 10, col: '#ffffff', a: 0.25 * (1 - ph), pass2: false }); }
  pop();
}
function narezushiJar(x, y, s, t, o = {}) {                                 // глиняный кувшин нарэдзуси: слои рис/рыба/соль в разрезе-окне, крышка, верёвка
  push(x, y, s); const key = o.key || 26040; const j = blob([[-90, 0], [-120, -110], [-100, -230], [-60, -270], [60, -270], [100, -230], [120, -110], [90, 0]], { wash: '#a8643a', washA: 1, w: 3, col: '#3a1a08', key }); shadeG(j.path, -120, 0, 120, 0, '#5a2a10', 0.5);
  if (o.cut) { const w = blob([[-70, -40], [-86, -120], [-70, -210], [70, -210], [86, -120], [70, -40]], { wash: '#f4ecd8', washA: 1, w: 2, col: '#3a1a08' }); ctx.save(); ctx.clip(w.path); for (let i = 0; i < 4; i++) { rect(-100, -210 + i * 44, 200, 26, { wash: SU.rice, washA: 1, line: false }); riceGrains(0, -197 + i * 44, 80, 8, 6, key + i, 1); fish(0, -176 + i * 44, 0.55, 0, { key: key + 10 + i }); } ctx.restore(); }
  for (let i = 0; i < 3; i++) pencil(spline([[-110, -150 + i * 40], [0, -140 + i * 40], [110, -150 + i * 40]], false, 5), { w: 2, col: '#6a3a18', a: 0.5, pass2: false });
  if (!o.open) { ell(0, -272, 76, 18, { wash: '#7a4a2a', washA: 1, w: 2.4, col: '#2a1008' }); pencil(spline([[-70, -268], [-40, -250], [40, -250], [70, -268]], false, 5), { w: 4, col: '#c8a060', pass2: false }); }
  else ell(0, -272, 70, 16, { wash: '#2a1408', washA: 1, w: 2 });
  pop();
}
function funaTaru(x, y, s, t, o = {}) {                                     // кадка фунадзуси: доски, плетёные обручи, деревянная крышка, камень-гнёт; o.open — крышка набок + вонючее облако
  push(x, y, s); const key = o.key || 26050; const b = blob([[-140, 0], [-156, -150], [-140, -300], [140, -300], [156, -150], [140, 0]], { wash: '#b88a52', washA: 1, w: 3, col: SU.woodD, key }); shadeG(b.path, -150, 0, 150, 0, '#6a4220', 0.5);
  for (let i = 0; i < 8; i++) pencil([[-130 + i * 37, -296], [-136 + i * 39, -4]], { w: 1.6, col: '#7a5228', a: 0.6, pass2: false });
  for (const yy of [-250, -60]) { pencil(spline([[-150, yy], [0, yy + 18], [150, yy]], false, 6), { w: 12, col: '#8a7040', pass2: false }); for (let k = 0; k < 10; k++) pencil([[-140 + k * 30, yy - 4 + Math.abs(k - 5) * 1.5], [-128 + k * 30, yy + 8 + Math.abs(k - 5) * 1.5]], { w: 2, col: '#4a3a18', pass2: false }); }
  const op = clamp(o.open || 0);
  push(op * 160, -300 - op * 60, 1, op * 0.6); ell(0, 0, 146, 26, { wash: '#a87a42', washA: 1, w: 2.4, col: SU.woodD }); blob([[-60, -10], [-56, -70], [0, -90], [60, -68], [64, -10]], { wash: '#8a8a88', washA: 1, w: 2.4, col: '#3a3a3a', key: key + 1 }); hatch(ellPts(0, -40, 60, 40, 0, 0, 16).length ? pathOf(ellPts(0, -40, 56, 36, 0, 0, 16)) : null, bbOf(ellPts(0, -40, 56, 36, 0, 0, 16)), { gap: 8, a: 0.2, col: '#2a2a2a', ang: 0.6, key: key + 2 }); pop();
  if (op > 0.2) { ell(0, -300, 136, 22, { wash: '#6a5a2a', washA: 1, w: 2 }); for (let i = 0; i < 5; i++) ell(-80 + i * 40, -302, 22, 8, { wash: '#c8a868', washA: 1, w: 1, col: '#6a5a2a' });
    const a = clamp((op - 0.2) * 1.5); for (let i = 0; i < 7; i++) { const ph = (t * 0.6 + i / 7) % 1, cx = -60 + i * 22 + Math.sin(t * 2 + i) * 30, cy = -330 - ph * 420; ell(cx, cy, 40 + ph * 70, 30 + ph * 50, { wash: '#9ac848', washA: 0.35 * a * (1 - ph * 0.6), line: false }); }
    for (let i = 0; i < 4; i++) { const ph = (t * 0.8 + i * 0.25) % 1; pencil(spline([[-40 + i * 26, -320 - ph * 300], [-20 + i * 26 + Math.sin(t * 5 + i) * 20, -380 - ph * 300], [-40 + i * 26, -440 - ph * 300]], false, 6), { w: 4, col: '#4a7a1a', a: 0.6 * a * (1 - ph), pass2: false }); } }
  pop();
}
function tunaFish(x, y, s, rot = 0, o = {}) {                               // синий тунец: тёмно-синяя спина, серебряное брюхо, жёлтые плавнички-гребёнка, o.toro — розовый срез брюшка
  push(x, y, s, rot); const key = o.key || 26060;
  const b = blob([[-300, 0], [-220, -70], [0, -100], [200, -70], [290, -10], [300, 0], [290, 14], [200, 60], [0, 80], [-220, 50]], { wash: '#a8b8c8', washA: 1, w: 3, col: '#1a2438', key });
  const top = blob([[-290, -4], [-220, -70], [0, -100], [200, -70], [290, -10], [180, -30], [0, -40], [-200, -20]], { wash: '#1a2a5a', washA: 1, line: false }); shadeG(b.path, 0, -100, 0, 80, '#4a5a78', 0.35);
  poly([[300, 0], [380, -90], [360, 0], [380, 90]], { wash: '#2a3a6a', washA: 1, w: 2.4, col: '#0a1428' }); poly([[-40, -96], [20, -170], [60, -92]], { wash: '#2a3a6a', washA: 1, w: 2, col: '#0a1428' });
  for (let i = 0; i < 7; i++) { poly([[120 + i * 24, -60 + i * 6], [132 + i * 24, -80 + i * 6], [140 + i * 24, -58 + i * 6]], { wash: '#f4d040', washA: 1, w: 1, col: '#6a5a08' }); poly([[120 + i * 24, 52 - i * 6], [132 + i * 24, 70 - i * 6], [140 + i * 24, 50 - i * 6]], { wash: '#f4d040', washA: 1, w: 1, col: '#6a5a08' }); }
  ell(-240, -10, 18, 18, { wash: '#f8f4e8', washA: 1, w: 2, col: '#1a1a1a' }); ell(-242, -10, 8, 8, { wash: '#0a0a0a', washA: 1, line: false }); pencil(spline([[-190, -50], [-176, 0], [-190, 44]], false, 5), { w: 3, col: '#1a2438', pass2: false });
  poly([[-130, 30], [-60, 70], [-110, 40]], { wash: '#3a4a6a', washA: 1, w: 1.4 });
  if (o.toro) { const c = blob([[-120, 30], [-40, 20], [80, 26], [120, 50], [0, 76], [-110, 56]], { wash: SU.toro, washA: 1, w: 2, col: '#8a2a3a', key: key + 1 }); ctx.save(); ctx.clip(c.path); for (let i = 0; i < 7; i++) pencil(spline([[-120 + i * 36, 20], [-100 + i * 36, 50], [-120 + i * 36, 80]], false, 4), { w: 6, col: '#fff0f0', a: 0.8, pass2: false }); ctx.restore(); }
  pencil(spline([[-200, -40], [0, -60], [200, -40]], false, 6), { w: 4, col: '#8aa8d8', a: 0.5, pass2: false });
  pop();
}
function salmonFish(x, y, s, rot = 0, o = {}) {                             // атлантический лосось: серебро с синей спинкой, чёрные точки, розовый срез (o.fillet)
  push(x, y, s, rot); const key = o.key || 26070;
  const b = blob([[-200, 0], [-150, -50], [0, -64], [150, -40], [210, -6], [210, 6], [150, 36], [0, 54], [-150, 40]], { wash: '#c8d0d8', washA: 1, w: 2.6, col: '#2a3448', key }); blob([[-196, -2], [-150, -50], [0, -64], [150, -40], [208, -6], [100, -20], [0, -24], [-140, -10]], { wash: '#4a6a8a', washA: 1, line: false });
  shadeG(b.path, 0, -64, 0, 54, '#6a7a90', 0.3); poly([[206, 0], [270, -60], [256, 0], [270, 60]], { wash: '#5a6a84', washA: 1, w: 2, col: '#1a2438' }); poly([[-20, -60], [20, -110], [50, -56]], { wash: '#5a6a84', washA: 1, w: 1.8 });
  const r = rng(key); for (let i = 0; i < 16; i++) ell(-120 + r() * 280, -46 + r() * 30, 3, 3, { wash: '#1a1a1a', washA: 1, line: false });
  ell(-160, -8, 12, 12, { wash: '#f8f4e8', washA: 1, w: 1.6, col: '#1a1a1a' }); ell(-161, -8, 6, 6, { wash: '#0a0a0a', washA: 1, line: false }); pencil(spline([[-120, -36], [-110, 0], [-122, 30]], false, 5), { w: 2.4, col: '#2a3448', pass2: false });
  if (o.fillet) { const c = blob([[-100, 0], [0, -14], [130, -4], [150, 20], [0, 40], [-90, 26]], { wash: SU.salmon, washA: 1, w: 2, col: '#8a3a10', key: key + 1 }); ctx.save(); ctx.clip(c.path); for (let i = 0; i < 8; i++) pencil(spline([[-100 + i * 32, -14], [-84 + i * 32, 14], [-100 + i * 32, 40]], false, 4), { w: 4, col: '#fff0e0', a: 0.8, pass2: false }); ctx.restore(); }
  pop();
}
function vinegarCask(x, y, s, t, o = {}) {                                   // бочка красного уксуса (акадзу): тёмные доски, обручи из бамбука, бумажная этикетка 酢, краник с каплей
  push(x, y, s); const key = o.key || 26080; const b = blob([[-130, 0], [-150, -160], [-130, -320], [130, -320], [150, -160], [130, 0]], { wash: o.col || '#8a3a1a', washA: 1, w: 3, col: '#2a0a04', key }); shadeG(b.path, -150, 0, 150, 0, '#3a0a04', 0.5);
  for (let i = 0; i < 7; i++) pencil([[-118 + i * 39, -316], [-124 + i * 41, -4]], { w: 1.6, col: '#4a1408', a: 0.6, pass2: false });
  for (const yy of [-280, -40]) pencil(spline([[-146, yy], [0, yy + 18], [146, yy]], false, 6), { w: 10, col: '#c8a860', pass2: false });
  rect(-56, -230, 112, 150, { wash: '#f4ecd8', washA: 1, w: 2, col: '#6a5a3a' }); txt(o.label || '酢', 0, -128, 80, { font: 'Osw', col: '#1a0a04' }); ell(0, -320, 128, 22, { wash: '#5a1a0a', washA: 1, w: 2 });
  rect(118, -70, 40, 14, { wash: '#c8a860', washA: 1, w: 1.4 }); if (o.drip !== false) { const ph = (t * 1.2) % 1; ell(158, -56 + ph * 60, 5, 7, { wash: '#a8341a', washA: 1 - ph, line: false }); }
  pop();
}
function sushiPlate(x, y, s, t, o = {}) {                                    // тарелка конвейера: цветной ободок (цена), два нигири / ролл
  push(x, y, s); ell(0, 0, 150, 40, { wash: o.rim || '#c8343a', washA: 1, w: 2.4, col: '#2a0a0a', key: o.key || 26090 }); ell(0, -6, 124, 30, { wash: '#f8f4ec', washA: 1, w: 1.4, col: '#a8a098' });
  if (o.roll) { maki(-50, -30, 0.5, { key: (o.key || 26090) + 1 }); maki(50, -30, 0.5, { key: (o.key || 26090) + 2 }); } else { nigiri(-56, -6, 0.38, t, { kind: o.kind || 'salmon', key: (o.key || 26090) + 3 }); nigiri(56, -6, 0.38, t, { kind: o.kind2 || o.kind || 'salmon', key: (o.key || 26090) + 4 }); }
  pop();
}
function noren(x, y, w, h, col, t, label, o = {}) {                          // норэн — разрезная занавесь над входом: 3–4 полотна колышутся, белая надпись
  const n = o.n || 3, pw = w / n; for (let i = 0; i < n; i++) { const sw = Math.sin(t * 1.6 + i * 1.3) * 10 * (o.wind == null ? 1 : o.wind), x0 = x + i * pw;
    const p = poly([[x0 + 3, y], [x0 + pw - 3, y], [x0 + pw - 3 + sw, y + h], [x0 + 3 + sw, y + h]], { wash: col, washA: 1, w: 2, col: '#1a0a0a', key: (o.key || 26100) + i }); shadeG(p.path, x0, y, x0 + pw, y, '#000000', 0.18); }
  rect(x - 10, y - 12, w + 20, 14, { wash: '#6a4a24', washA: 1, w: 1.6 }); if (label) txt(label, x + w / 2, y + h * 0.58, Math.min(h * 0.45, w / (label.length * 0.75)), { font: 'Osw', col: '#fbf4e4' });
}
function chochin(x, y, s, t, o = {}) {                                       // бумажный фонарь-тётин: рёбра, чёрные крышки, иероглиф, светится изнутри
  push(x, y + Math.sin(t * 1.2 + x) * 3, s); pencil([[0, -130], [0, -96]], { w: 2, col: '#1a1a1a', pass2: false });
  const b = blob([[-56, -80], [-64, -20], [-58, 40], [0, 54], [58, 40], [64, -20], [56, -80], [0, -92]], { wash: o.col || '#d8302a', washA: 1, w: 2.4, col: '#3a0a08', key: o.key || 26110 });
  for (let i = 0; i < 6; i++) pencil(spline([[-60, -76 + i * 22], [0, -70 + i * 22], [60, -76 + i * 22]], false, 5), { w: 1.4, col: '#6a1008', a: 0.5, pass2: false });
  rect(-40, -100, 80, 16, { wash: '#1a1a1a', washA: 1, w: 1 }); rect(-40, 44, 80, 16, { wash: '#1a1a1a', washA: 1, w: 1 }); if (o.label) txt(o.label, 0, 2, 54, { font: 'Osw', col: '#1a0a04' });
  if (o.lit !== false) glow(0, -10, 120, o.glowCol || 'rgba(255,150,80,1)', 0.3);
  pop();
}
function soyDish(x, y, s) {                                                  // блюдце с соевым соусом
  push(x, y, s); ell(0, 0, 60, 18, { wash: '#f4f0e8', washA: 1, w: 2, col: '#4a4a5a' }); ell(0, -2, 44, 11, { wash: SU.soy, washA: 1, line: false }); ell(-14, -5, 10, 3, { wash: '#c88a4a', washA: 0.7, line: false }); pop();
}
function chopsticks(x, y, s, rot = 0) {                                      // палочки хаси на подставке
  push(x, y, s, rot); pencil([[-120, -4], [120, -12]], { w: 7, col: '#8a3a1a', pass2: false }); pencil([[-120, 8], [120, 4]], { w: 7, col: '#a84a24', pass2: false }); ell(-80, 10, 16, 8, { wash: '#e8e0d0', washA: 1, w: 1.4 }); pop();
}
Object.assign(PROPS, {
  nigiriP() { nigiri(0, -10, 0.42, 0, { kind: 'salmon', key: 26200 }); },                             // нигири с лососем в лапе
  nigiriBigP() { nigiri(0, -10, 0.5, 0, { kind: 'tuna', big: 1, key: 26202 }); },                     // большое эдоское нигири с тунцом
  ladleP() { push(0, -20, 0.7, -0.4); pencil([[0, 0], [0, -160]], { w: 8, col: '#c89a5a', pass2: false }); blob([[-34, 0], [-30, 30], [0, 40], [30, 30], [34, 0]], { wash: '#c89a5a', washA: 1, w: 2, col: '#5a3a1a' }); ell(0, 2, 30, 8, { wash: '#c8501a', washA: 0.8, line: false }); pop(); },   // черпак с уксусом
  salmonP() { push(0, -10, 0.55); rect(-150, -10, 300, 24, { wash: '#a8b8c8', washA: 1, w: 2, col: '#2a3448' }); salmonFish(0, -40, 0.6, 0, { fillet: 1, key: 26204 }); pop(); },       // поднос с лососем
  rollP() { maki(0, -10, 0.55, { key: 26206 }); },                                                    // ролл в лапе
  riceP() { push(0, -16, 0.55); blob([[-40, 0], [-44, -36], [0, -56], [44, -36], [40, 0]], { wash: SU.rice, washA: 1, w: 2, col: '#8a8070' }); riceGrains(0, -26, 30, 16, 8, 26208, 1); pop(); },   // комок риса
  lidP() { push(0, -10, 0.6, 0.3); ell(0, 0, 140, 26, { wash: '#a87a42', washA: 1, w: 2.4, col: '#6a4a24' }); pencil([[-40, -8], [40, -8]], { w: 8, col: '#6a4a24', pass2: false }); pop(); },          // крышка кадки
  sickleP() { push(0, -10, 0.6, -0.3); pencil([[0, 0], [0, 90]], { w: 9, col: '#8a5a2a', pass2: false }); pencil(spline([[0, 0], [40, -40], [90, -30], [100, 10]], false, 6), { w: 6, col: '#b8c0c8', pass2: false }); pop(); },     // серп
});
const INGR_C26 = {                                                           // иконки шкалы ингредиентов 026 (квадрат ±30)
  fish(s, t) { fish(0, 4, 0.42, 0, { key: 26300 }); },
  rice(s, t) { blob([[-26, 16], [-28, -6], [0, -22], [28, -6], [26, 16]], { wash: SU.rice, washA: 1, w: 2, col: '#8a8070' }); riceGrains(0, 0, 18, 10, 6, 26301, 1); },
  soy(s, t) { blob([[-10, 22], [-16, -4], [-8, -14], [-6, -26], [6, -26], [8, -14], [16, -4], [10, 22]], { wash: SU.soy, washA: 1, w: 2, col: '#1a0a04' }); rect(-7, -30, 14, 6, { wash: '#c8343a', washA: 1, w: 1 }); },
  tuna(s, t) { blob([[-26, 8], [-20, -14], [24, -14], [28, 8], [0, 18]], { wash: SU.toro, washA: 1, w: 2, col: '#8a2a3a' }); for (let i = 0; i < 4; i++) pencil([[-18 + i * 12, -12], [-12 + i * 12, 14]], { w: 2.4, col: '#fff0f0', pass2: false }); },
  salmon(s, t) { blob([[-26, 8], [-20, -14], [24, -14], [28, 8], [0, 18]], { wash: SU.salmon, washA: 1, w: 2, col: '#8a3a10' }); for (let i = 0; i < 4; i++) pencil([[-18 + i * 12, -12], [-12 + i * 12, 14]], { w: 2.4, col: '#fff0e0', pass2: false }); },
  vinegar(s, t) { blob([[-12, 24], [-18, -2], [-8, -12], [-8, -26], [8, -26], [8, -12], [18, -2], [12, 24]], { wash: '#e8b860', washA: 1, w: 2, col: '#6a4a08' }); txt('酢', 0, 14, 22, { font: 'Osw', col: '#3a1a04' }); },
  nigiri(s, t) { nigiri(0, 16, 0.18, t, { kind: 'salmon', key: 26302 }); },
};
function jpHat(x, y, s, kind, col, fl = 1) {                                // головной убор поверх human(): conical — плетёная шляпа, hachi — повязка, mage — пучок-тёнмагэ, kerchief — платок
  push(x, y, s, 0, fl); const hy = -284;
  if (kind === 'conical') { const c = poly([[-96, hy - 18], [0, hy - 92], [96, hy - 18], [0, hy - 8]], { wash: col || '#d8b870', washA: 1, w: 2, col: '#3a2a10' }); shadeG(c.path, -96, 0, 60, 0, '#7a5a20', 0.4); for (let i = 1; i < 4; i++) pencil([[-96 + i * 24, hy - 18 - i * 18], [96 - i * 24, hy - 18 - i * 18]], { w: 1, col: '#8a6a2a', a: 0.5, pass2: false }); }
  if (kind === 'hachi') { pencil(spline([[-42, hy - 14], [0, hy - 22], [42, hy - 14]], false, 5), { w: 9, col: col || '#f4f0e8', pass2: false }); pencil([[40, hy - 14], [58, hy - 30]], { w: 6, col: col || '#f4f0e8', pass2: false }); pencil([[40, hy - 14], [60, hy - 4]], { w: 6, col: col || '#f4f0e8', pass2: false }); }
  if (kind === 'mage') { blob([[-40, hy - 20], [-34, hy - 44], [0, hy - 50], [34, hy - 44], [40, hy - 20], [0, hy - 30]], { wash: '#1a1410', washA: 1, w: 1.6 }); rect(-6, hy - 70, 12, 26, { wash: '#1a1410', washA: 1, w: 1.4 }); pencil([[-8, hy - 58], [8, hy - 58]], { w: 3, col: '#f4f0e8', pass2: false }); }
  if (kind === 'kerchief') blob([[-46, hy + 10], [-44, hy - 30], [0, hy - 54], [44, hy - 30], [46, hy + 10], [30, hy - 20], [-30, hy - 20]], { wash: col || '#2a4a8a', washA: 1, w: 2, col: '#1a1a2a' });
  pop();
}
function obi(x, y, s, col, fl = 1) { push(x, y, s, 0, fl); rect(-62, -150, 124, 26, { wash: col || '#c8a040', washA: 1, w: 1.6, col: '#3a2a10' }); pencil([[-30, -130], [30, -144]], { w: 1.4, col: '#6a4a10', pass2: false }); pop(); }   // пояс-оби поверх human() с long
