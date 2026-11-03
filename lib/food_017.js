/* 017 — еда выпуска «Сюрстрёмминг»: жестяная банка (o.bulge — вздутие 0..1, o.open — вскрыта, жёлтая этикетка без бренда), салака (серебристая
   балтийская сельдь), бочка с рассолом, волна-запах (зелёные извилины), лепёшка-клэмма (тюннбрёд с картошкой, луком, сметаной, рыбой), пузырь газа,
   прищепка для носа. Реквизит Тома — PROPS. */
const SR = { tin: '#c8ccd2', tinD: '#7a7e86', tinL: '#f4f6f8', label: '#f4c020', labelD: '#c8901a', fish: '#b8c4cc', fishD: '#5a6a7a', fishB: '#3a4a6a', stink: '#8ac83a', brine: '#c8c49a', bread: '#e8cc90', breadD: '#b8904a', cream: '#fbf8ee', onion: '#e8d8f0' };

function stink(x, y, s, t, o = {}) {                                        // волны запаха: зелёные извилины поднимаются и тают
  const n = o.n || 3, a = o.a ?? 1; for (let i = 0; i < n; i++) { const q = ((t * (o.sp || 0.6)) + i / n) % 1, x0 = x + (i - (n - 1) / 2) * 34 * s; pencil(spline([[x0, y], [x0 + Math.sin(q * 6 + i) * 18 * s, y - 50 * s - q * 80 * s], [x0 - 10 * s, y - 110 * s - q * 120 * s], [x0 + 12 * s, y - 160 * s - q * 160 * s]], false, 6), { w: 7 * s, col: o.col || SR.stink, a: a * 0.8 * (1 - q), pass2: false }); }
}
function tinCan(x, y, s, rot = 0, o = {}) {                                 // банка: вздутые крышка и дно (o.bulge), этикетка-рыба, ключ; o.open — откинутая крышка и рассол
  push(x, y, s, rot); const b = o.bulge ?? 0.3, h = 110, w = 140; ell(0, 6, w * 0.55, 10, { wash: '#000000', washA: 0.15, line: false });
  const body = shape([[-w / 2, 0], [-w / 2 - b * 8, -h / 2], [-w / 2, -h], [w / 2, -h], [w / 2 + b * 8, -h / 2], [w / 2, 0]], { wash: SR.tin, washA: 1, w: 2.4, col: '#3a3e44', key: o.key || 17000 }); metalG(body.path, -w * 0.2, -h * 0.4, w * 0.8, SR.tinL, SR.tin, SR.tinD);
  const lb = rect(-w / 2 + 2, -h * 0.78, w - 4, h * 0.56, { wash: SR.label, washA: 1, w: 1.4, col: SR.labelD }); push(0, -h * 0.5, 0.42); fish(0, 0, 1, 0, { key: (o.key || 17000) + 1 }); pop(); txt('SUR', -w * 0.3, -h * 0.28, 16, { font: 'Osw', col: '#2a3a6a' });
  for (const yy of [-h * 0.88, -h * 0.12]) pencil([[-w / 2, yy], [w / 2, yy]], { w: 1.6, col: SR.tinD, pass2: false });
  if (o.open) { ell(0, -h, w / 2, 16, { wash: SR.brine, washA: 1, w: 2, col: '#3a3e44' }); for (let i = 0; i < 3; i++) push(-30 + i * 30, -h - 4, 0.25, 0.3 * i), fish(0, 0, 1, 0, { key: 17010 + i }), pop(); push(w * 0.3, -h - 30, 1, -0.9); ell(0, 0, w / 2, 14, { wash: SR.tin, washA: 1, w: 2, col: '#3a3e44' }); pop(); }
  else { const top = ell(0, -h - b * 18, w / 2, 14 + b * 18, { wash: SR.tin, washA: 1, w: 2.2, col: '#3a3e44' }); metalG(top.path, -20, -h - b * 26, w * 0.5, SR.tinL, SR.tin, SR.tinD); pencil(spline([[-w * 0.3, -h - b * 20], [0, -h - b * 34], [w * 0.3, -h - b * 20]], false, 5), { w: 3, col: '#ffffff', a: 0.7, pass2: false }); ell(w * 0.38, -h - b * 10, 8, 5, { wash: SR.tinD, washA: 1, w: 1 }); }
  pop();
}
function fish(x, y, s, rot = 0, o = {}) {                                   // салака: серебристая, тёмная спинка, жабра, глаз, хвост
  push(x, y, s, rot); const b = shape(spline([[-90, 0], [-60, -24], [0, -30], [60, -18], [86, -2], [60, 16], [0, 22], [-60, 16]], true, 8), { wash: SR.fish, washA: 1, w: 2, col: '#2a3a4a', key: o.key || 17020 }); shadeG(b.path, 0, -30, 0, 20, SR.fishB, 0.55);
  pencil(spline([[-80, -6], [0, -26], [70, -14]], false, 6), { w: 6, col: SR.fishB, a: 0.6, pass2: false }); pencil(spline([[-60, 4], [0, 8], [60, 2]], false, 5), { w: 3, col: '#ffffff', a: 0.7, pass2: false });
  poly([[86, -2], [120, -26], [112, 0], [120, 24]], { wash: SR.fishD, washA: 1, w: 1.6, col: '#2a3a4a' }); pencil(spline([[-50, -16], [-44, 0], [-50, 14]], false, 4), { w: 2, col: '#2a3a4a', pass2: false }); ell(-70, -6, 6, 6, { wash: '#ffffff', washA: 1, w: 1 }); ell(-70, -6, 3, 3, { wash: '#1a1a1a', washA: 1, line: false });
  if (o.dead) { pencil([[-74, -10], [-66, -2]], { w: 2, col: '#1a1a1a', pass2: false }); pencil([[-74, -2], [-66, -10]], { w: 2, col: '#1a1a1a', pass2: false }); } pop();
}
function barrel(x, y, s, t, o = {}) {                                       // бочка с рассолом: обручи, открытый верх, рыба торчит, пузыри
  push(x, y, s); const b = shape(spline([[-100, 0], [-120, -120], [-100, -240], [100, -240], [120, -120], [100, 0]], true, 6), { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#1a0a04', key: o.key || 17030 }); shadeG(b.path, 90, -120, -90, -120, '#3a2010', 0.5);
  for (let i = 0; i < 6; i++) pencil([[-90 + i * 36, -236], [-96 + i * 38, -4]], { w: 2, col: '#5a3414', a: 0.6, pass2: false }); for (const yy of [-40, -200]) pencil([[-108, yy], [108, yy]], { w: 6, col: '#3a3a3a', pass2: false }); ell(0, -240, 100, 18, { wash: SR.brine, washA: 1, w: 2, col: '#1a0a04' });
  for (let i = 0; i < 3; i++) push(-40 + i * 40, -250, 0.4, -1.2 + i * 0.4), fish(0, 0, 1, 0, { key: (o.key || 17030) + i + 1 }), pop(); if (o.bubbles) for (let i = 0; i < 4; i++) { const q = (t * 0.8 + i / 4) % 1; ell(-60 + i * 40, -244 - q * 20, 6 + q * 6, 6 + q * 6, { wash: '#e8e8c0', washA: 0.8 * (1 - q), w: 1, col: '#8a8a5a' }); } pop();
}
function klamma(x, y, s, rot = 0, o = {}) {                                 // «клэмма»: тонкая лепёшка тюннбрёд, свёрнутая с картошкой, луком, сметаной и салакой
  push(x, y, s, rot); const f = shape(spline([[-110, 20], [-100, -30], [-40, -50], [40, -50], [100, -30], [110, 20], [0, 34]], true, 8), { wash: SR.bread, washA: 1, w: 2.2, col: '#6a4a1a', key: o.key || 17040 }); shadeG(f.path, 100, 20, -60, -40, SR.breadD, 0.35);
  for (let i = 0; i < 8; i++) ell(-80 + i * 22, -10 + Math.sin(i) * 14, 3, 3, { wash: '#8a5a2a', washA: 0.7, line: false }); blob([[-80, -40], [-40, -70], [40, -74], [90, -44], [40, -30], [-40, -30]], { wash: SR.cream, washA: 1, w: 1.4, col: '#a8a090' });
  for (let i = 0; i < 4; i++) ell(-50 + i * 30, -58, 12, 9, { wash: '#f0dca0', washA: 1, w: 1.2, col: '#8a7a4a' }); for (let i = 0; i < 5; i++) ell(-60 + i * 30, -66, 10, 4, { wash: SR.onion, washA: 1, w: 1, col: '#8a6aa8' }); push(10, -70, 0.35, -0.2); fish(0, 0, 1, 0, { key: (o.key || 17040) + 1 }); pop();
  for (let i = 0; i < 4; i++) pencil([[-40 + i * 24, -76], [-36 + i * 24, -90]], { w: 3, col: '#4a8a2a', pass2: false }); pop();
}
function gasBubble(x, y, r, t) { const w = Math.sin(t * 4 + x) * 0.06; push(x, y, 1); ell(0, 0, r * (1 + w), r * (1 - w), { wash: '#d8f0b0', washA: 0.35, w: 2, col: '#8ab84a' }); ell(-r * 0.35, -r * 0.35, r * 0.2, r * 0.14, { wash: '#ffffff', washA: 0.7, line: false }); pop(); }
function nosePeg(x, y, s, rot = 0) { push(x, y, s, rot); rect(-30, -8, 60, 16, { wash: '#d8a868', washA: 1, w: 1.6, col: '#6a4a1a' }); ell(-10, 0, 8, 8, { wash: '#8a8e94', washA: 1, w: 1.2 }); pop(); }
Object.assign(PROPS, {
  canP() { tinCan(0, 0, 0.45, 0.1, { bulge: 0.6, key: 17080 }); },
  canOP() { tinCan(0, 0, 0.45, 0.1, { open: 1, key: 17081 }); },
  fishP() { fish(0, -30, 0.5, -0.3, { key: 17082 }); },
  klammaP() { klamma(0, -20, 0.5, -0.2, { key: 17083 }); },
  gavelP() { push(0, -30, 0.7, -0.5); rect(-8, 0, 16, 110, { wash: '#6a3a1a', washA: 1, w: 1.4 }); rect(-40, -24, 80, 40, { wash: '#7a4424', washA: 1, w: 2, col: '#2a1408' }); pop(); },
  letterP() { push(0, -40, 0.6, 0.15); rect(-60, -40, 120, 80, { wash: '#f8f4ea', washA: 1, w: 1.6, col: '#5a5a5a' }); for (let i = 0; i < 4; i++) pencil([[-44, -20 + i * 14], [44, -20 + i * 14]], { w: 2, col: '#8a8a8a', pass2: false }); txt('!', 40, 30, 30, { font: 'Osw', col: '#c8221a' }); pop(); },
});
