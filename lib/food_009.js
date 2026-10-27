/* 009 — еда выпуска «Хачапури»: аджарская лодка (бортики, сырное озеро, желток, масло; размешивание, оторванный кончик), имеретинский круг (мегрельский — пласт
   сыра падает сверху), лепёшка на камне, овца, монета-лари; реквизит: бортик с сыром, бортик в желтке, лодочка в лапе. */
const KHP = { crust: '#d89a4a', crustD: '#9a5a1e', crustL: '#f2c27a', crumb: '#f6e2b0', cheese: '#f8e6a0', cheeseD: '#e0b85a', yolk: '#f2a21a', yolkL: '#ffd060', butter: '#fff2a8' };
function adjaruli(x, y, s, t, o = {}) {                                // аджарская лодка: o.mix 0..1 — желток размешан, o.torn — кончик справа оторван, o.melt 0..1 — масло тает, o.steam, o.noYolk
  push(x, y, s, o.rot || 0); const L = 230, Hh = 70, R = o.torn ? L * 0.74 : L;
  ell(0, 40, L * 0.95, 26, { wash: '#000000', washA: 0.18, line: false });
  const c = blob([[-L, 0], [-L * 0.7, -Hh], [-L * 0.2, -Hh * 1.1], [L * 0.2, -Hh * 1.1], [R * 0.86, -Hh * 0.9], [R, o.torn ? -26 : 0], ...(o.torn ? [[R * 0.98, 18]] : []), [R * 0.8, Hh * 0.55], [L * 0.2, Hh * 0.7], [-L * 0.2, Hh * 0.7], [-L * 0.7, Hh * 0.55]],
    { wash: KHP.crust, washA: 1, w: 3, col: '#5a300c', key: 9960 });
  shadeG(c.path, 0, -Hh, 0, Hh, KHP.crustD, 0.4);
  if (o.torn) { blob([[R - 14, -30], [R + 6, -10], [R + 2, 16], [R - 16, 22], [R - 22, -6]], { wash: KHP.crumb, washA: 1, w: 1.6, col: '#a8743a' }); for (let i = 0; i < 6; i++) ell(R - 12 + (i % 3) * 6, -20 + i * 7, 2.4, 2, { wash: '#c89a5a', washA: 1, line: false }); }
  const m = clamp(o.mix || 0);
  blob([[-L * 0.62, -6], [-L * 0.4, -Hh * 0.62], [0, -Hh * 0.72], [L * 0.4, -Hh * 0.62], [Math.min(L * 0.62, R * 0.8), -6], [L * 0.4, Hh * 0.3], [0, Hh * 0.36], [-L * 0.4, Hh * 0.3]],
    { wash: lerpC(KHP.cheese, '#f6c04a', m * 0.8), washA: 1, w: 2, col: KHP.cheeseD, key: 9961 });
  for (let i = 0; i < 10; i++) { const r = rng(9962 + i); ell(-L * 0.5 + r() * L * 0.9, -Hh * 0.5 + r() * Hh * 0.7, 6 + r() * 10, 4 + r() * 5, { wash: '#e0a040', washA: 0.45, line: false }); }
  pencil(spline([[-L * 0.62, -Hh * 0.78], [0, -Hh * 1.0], [L * 0.6, -Hh * 0.78]], false, 8), { w: 5, col: KHP.crustL, a: 0.7, pass2: false });
  for (const sd of o.torn ? [-1] : [-1, 1]) for (let q = 0; q < 3; q++) pencil([[sd * (L * 0.78 + q * 14), -14 + q * 4], [sd * (L * 0.84 + q * 14), 12 - q * 4]], { w: 2, col: KHP.crustD, pass2: false });
  if (!o.noYolk) { if (m < 0.95) { push(-10, -Hh * 0.18, 1); ell(0, 0, 38 * (1 + m * 0.7), 30 * (1 + m * 0.4), { wash: KHP.yolk, washA: 1 - m * 0.5, w: 2, col: '#a85a08' }); ell(-10, -10, 12, 7, { wash: '#fff6d0', washA: 0.8 * (1 - m), line: false }); pop(); }
    if (m > 0) for (let i = 0; i < 6; i++) pencil(spline([[-90 + i * 30, -20 + (i % 2) * 14], [-70 + i * 30, -2 + Math.sin(i + m * 6) * 10], [-50 + i * 30, -18]], false, 5), { w: 7, col: KHP.yolk, a: 0.75 * m, pass2: false }); }
  if (o.butter !== false) { const mt = clamp(o.melt || 0); push(70, -Hh * 0.34, 1); rect(-22, -18 + mt * 12, 44, 36 - mt * 22, { wash: KHP.butter, washA: 1, w: 1.6, col: '#c8a840' }); ell(0, 18, 30 + mt * 20, 8, { wash: '#fff6c0', washA: 0.6 * mt, line: false }); ell(-8, -10 + mt * 12, 8, 4, { wash: '#ffffff', washA: 0.8, line: false }); pop(); }
  if (o.steam !== false) for (let q = 0; q < 4; q++) { const k = (t * 0.5 + q / 4) % 1; ell(-90 + q * 60, -Hh - 30 - k * 200, 24 + k * 30, 16 + k * 20, { wash: '#ffffff', washA: 0.32 * (1 - k), line: false }); }
  pop();
}
function imeruli(x, y, s, t, o = {}) {                                // имеретинский круг (o.megruli 0..1 — пласт сыра падает сверху и запекается), o.cut — нарезан, o.steam
  push(x, y, s); ell(0, 26, 190, 40, { wash: '#000000', washA: 0.18, line: false });
  const c = ell(0, 0, 180, 62, { wash: KHP.crust, washA: 1, w: 3, col: '#5a300c', key: 9970 }); shadeG(c.path, 0, -62, 0, 62, KHP.crustD, 0.35);
  for (let i = 0; i < 14; i++) { const r = rng(9971 + i); ell(-140 + r() * 280, -40 + r() * 70, 8 + r() * 12, 4 + r() * 6, { wash: '#b06a24', washA: 0.45, line: false }); }
  pencil(spline([[-150, -30], [0, -56], [150, -30]], false, 8), { w: 4, col: KHP.crustL, a: 0.6, pass2: false });
  if (o.megruli) { const k = clamp(o.megruli), dy = -(1 - sm(k)) * 420; blob([[-150, -8 + dy], [-110, -46 + dy], [0, -56 + dy], [110, -46 + dy], [150, -8 + dy], [100, 22 + dy], [0, 28 + dy], [-100, 22 + dy]], { wash: KHP.cheese, washA: 1, w: 2, col: KHP.cheeseD, key: 9975 });
    if (k >= 1) { for (let i = 0; i < 9; i++) { const r = rng(9990 + i); ell(-110 + r() * 220, -40 + r() * 50, 10 + r() * 10, 5 + r() * 4, { wash: '#d88a30', washA: 0.6, line: false }); } for (let i = 0; i < 4; i++) pencil([[-120 + i * 80, 16], [-118 + i * 80, 40 + (i % 2) * 14]], { w: 7, col: KHP.cheese, pass2: false }); } }
  if (o.cut) for (const a of [0.5, 1.55, 2.6]) pencil([[Math.cos(a) * 176, Math.sin(a) * 60], [-Math.cos(a) * 176, -Math.sin(a) * 60]], { w: 2, col: '#7a4a14', a: 0.7, pass2: false });
  if (o.steam !== false) for (let q = 0; q < 3; q++) { const k = (t * 0.5 + q / 3) % 1; ell(-60 + q * 60, -70 - k * 180, 22 + k * 26, 14 + k * 18, { wash: '#ffffff', washA: 0.3 * (1 - k), line: false }); }
  pop();
}
function sheep(x, y, s, t, o = {}) {                                   // овца: кудрявое руно, чёрная морда и ноги; o.walk — семенит, o.chew — жуёт, o.flip
  push(x, y, s, 0, o.flip || 1); ell(0, 6, 70, 10, { wash: '#000000', washA: 0.15, line: false });
  for (const lx of [-34, -14, 16, 36]) pencil([[lx, -30], [lx + Math.sin(t * 9 + lx) * (o.walk ? 6 : 0), 0]], { w: 7, col: '#2a2420', pass2: false });
  ell(0, -60, 64, 40, { wash: '#f2ece0', washA: 1, w: 2, col: '#6a6458', key: 9980 }); for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283; ell(Math.cos(a) * 54, -60 + Math.sin(a) * 32, 16, 14, { wash: '#f8f4ea', washA: 1, w: 1.4, col: '#8a8478' }); }
  const hy = -74 + (o.chew ? Math.sin(t * 10) * 2 : 0); ell(62, hy, 20, 26, { wash: '#2a2420', washA: 1, w: 2, col: '#0a0806', rot: 0.4 }); ell(50, hy - 20, 11, 6, { wash: '#2a2420', washA: 1, line: false, rot: -0.5 });
  ell(70, hy - 8, 3.4, 3.4, { wash: '#ffffff', washA: 1, line: false }); ell(54, hy - 30, 15, 10, { wash: '#f8f4ea', washA: 1, line: false }); pop();
}
function lariCoin(x, y, s, rot = 0) {                                  // монета-лари: золотой кружок, ободок, надпись ЛАРИ
  push(x, y, s, rot); ell(0, 0, 40, 40, { wash: '#e8c040', washA: 1, w: 2.4, col: '#8a6a10' }); ell(0, 0, 30, 30, { line: true, w: 1.6, col: '#a8841a' }); ell(-12, -14, 8, 5, { wash: '#fff6c0', washA: 0.8, line: false }); txt('ЛАРИ', 0, 8, 20, { font: 'Osw', col: '#7a5a08' }); pop();
}
function shotiBread(x, y, s, rot = 0) {                                // хлеб шоти: вытянутая лодочка-каноэ из тоне, румяная
  push(x, y, s, rot); blob([[-90, 0], [-60, -18], [60, -18], [90, 0], [60, 14], [-60, 14]], { wash: '#d8a050', washA: 1, w: 2, col: '#6a3a10' }); pencil([[-60, -6], [60, -6]], { w: 3, col: '#f2c880', a: 0.7, pass2: false }); pop();
}
Object.assign(PROPS, {
  crustP() { push(0, -40, 1, -0.3); blob([[-40, -10], [-20, -30], [30, -26], [46, -6], [30, 16], [-30, 14]], { wash: KHP.crust, washA: 1, w: 2.4, col: '#5a300c' }); blob([[-30, -4], [0, -16], [34, -10], [30, 6], [-20, 8]], { wash: KHP.crumb, washA: 1, line: false }); pencil(spline([[30, -6], [50, 10], [44, 40]], false, 5), { w: 5, col: KHP.cheese, pass2: false }); pop(); },
  crustYolkP() { PROPS.crustP(); push(0, -40, 1, -0.3); blob([[8, -22], [42, -18], [48, -2], [18, 6]], { wash: KHP.yolk, washA: 1, line: false }); ell(26, -12, 6, 3, { wash: '#fff6d0', washA: 0.8, line: false }); pop(); },
  boatP() { adjaruli(0, -40, 0.36, 0, { steam: false }); },
});
