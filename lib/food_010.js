/* 010 — еда выпуска «Картофельные чипсы»: чипс (волнистый, с пузырьками, o.seasoned — приправа), чипс-«седло» (гиперболический параболоид), туба чипсов без бренда
   (крышка, окошко-этикетка), пачка (современная или вощёная 1920-х), картофелина; реквизит: чипс, туба, утюг, солонка-приправа, молоток судьи. */
const CHP = { gold: '#f2c24a', goldD: '#c88a1e', goldL: '#fde08a', edge: '#a8641a', green: '#5aa83a', red: '#d9482b', wax: '#f2ead0', waxD: '#c8b88a' };
function chip(x, y, s, rot = 0, o = {}) {                              // чипс: волнистый край, румяные пятна, блик; o.seed — форма, o.seasoned — цвет крапинок (true — зелёный лук), o.col
  push(x, y, s, rot); const sd = o.seed || 1, pts = []; for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283, r = rng(sd * 31 + i), rr = 60 * (0.85 + r() * 0.25); pts.push([Math.cos(a) * rr * 1.1, Math.sin(a) * rr * 0.8]); }
  const c = blob(pts, { wash: o.col || CHP.gold, washA: 1, w: 2.2, col: CHP.edge, key: 10050 + (sd % 20) }); shadeG(c.path, -60, -40, 60, 40, CHP.goldD, 0.35);
  for (let i = 0; i < 5; i++) { const r = rng(sd * 7 + i); ell(-40 + r() * 80, -30 + r() * 60, 5 + r() * 6, 3 + r() * 4, { wash: CHP.goldD, washA: 0.5, line: false }); }
  pencil(spline([[-40, -20], [0, -34], [40, -20]], false, 6), { w: 4, col: CHP.goldL, a: 0.8, pass2: false });
  if (o.seasoned) for (let i = 0; i < 12; i++) { const r = rng(sd * 13 + i); ell(-50 + r() * 100, -35 + r() * 70, 2.6, 2.6, { wash: o.seasoned === true ? CHP.green : o.seasoned, washA: 0.9, line: false }); }
  pop();
}
function saddleChip(x, y, s, rot = 0) {                                // чипс-«седло»: овал с выгнутыми краями, две кромки-изгиба
  push(x, y, s, rot); blob([[-70, 0], [-50, -30], [0, -22], [50, -30], [70, 0], [50, 30], [0, 22], [-50, 30]], { wash: '#f6d07a', washA: 1, w: 2, col: '#b8862a', key: 10055 });
  pencil(spline([[-66, 0], [-30, -10], [0, -4], [30, -10], [66, 0]], false, 6), { w: 2, col: '#c8962a', a: 0.7, pass2: false }); pencil(spline([[-50, -26], [0, -18], [50, -26]], false, 6), { w: 3, col: '#fde8a8', a: 0.8, pass2: false });
  for (let i = 0; i < 6; i++) ell(-40 + i * 16, 6 + (i % 2) * 6, 2.4, 2, { wash: '#d8a040', washA: 0.7, line: false }); pop();
}
function chipTube(x, y, s, t, o = {}) {                                // туба чипсов (без бренда): цилиндр, крышка, окошко-этикетка с «седлом»; o.col, o.label, o.open, o.rot
  push(x, y, s, o.rot || 0); const c = o.col || '#c8282a'; const r = rect(-60, -300, 120, 300, { wash: c, washA: 1, w: 3, col: '#3a0a0a', key: 10060 }); shadeG(r.path, -60, 0, 60, 0, '#3a0a0a', 0.45); pencil([[-36, -290], [-36, -10]], { w: 7, col: '#ffffff', a: 0.3, pass2: false });
  ell(0, 0, 60, 14, { wash: '#8a8a90', washA: 1, w: 2, col: '#3a3a3a' }); ell(0, -300, 60, 14, { wash: o.open ? '#f6d07a' : '#e8e8ea', washA: 1, w: 2.4, col: '#3a3a3a' }); if (!o.open) ell(0, -308, 62, 15, { wash: '#d8d8de', washA: 1, w: 2, col: '#3a3a3a' });
  rect(-54, -210, 108, 100, { wash: '#fff4d8', washA: 1, w: 1.6, col: '#3a0a0a' }); txt(o.label || 'ЧИПСЫ', 0, -184, (o.label || 'ЧИПСЫ').length > 6 ? 18 : 24, { font: 'Osw', col: c }); saddleChip(0, -138, 0.5); pop();
}
function chipBag(x, y, s, t, o = {}) {                                 // пачка: o.wax — вощёная 1920-х (полупрозрачная, чипсы видны), иначе современная: o.col, o.label, o.sub, o.seasoned
  push(x, y, s, o.rot || 0); const col = o.col || '#2a8a3a';
  if (o.wax) { for (let i = 0; i < 5; i++) chip(-50 + (i % 3) * 46, -60 + i * 40, 0.42, i, { seed: i + 3 }); blob([[-90, -170], [90, -170], [100, -80], [96, 60], [90, 170], [-90, 170], [-96, 60], [-100, -80]], { wash: CHP.wax, washA: 0.55, line: false });
    blob([[-90, -170], [90, -170], [100, -80], [96, 60], [90, 170], [-90, 170], [-96, 60], [-100, -80]], { line: true, w: 3, col: CHP.waxD, key: 10070 }); for (let i = 0; i < 3; i++) pencil([[-90, -160 + i * 8], [90, -160 + i * 8]], { w: 2, col: CHP.waxD, pass2: false }); if (o.label) txt(o.label, 0, 120, 26, { font: 'Hand', col: '#6a4a1a' }); pop(); return; }
  blob([[-90, -170], [90, -170], [100, -80], [96, 60], [90, 170], [-90, 170], [-96, 60], [-100, -80]], { wash: col, washA: 1, w: 3, col: '#1a1a1a', key: 10071 });
  for (const yy of [-170, 170]) for (let i = 0; i < 10; i++) pencil([[-90 + i * 20, yy - 8], [-84 + i * 20, yy + 8]], { w: 1.6, col: '#1a1a1a', a: 0.5, pass2: false });
  ell(0, 40, 70, 50, { wash: '#fff8e8', washA: 1, w: 2, col: '#1a1a1a' }); chip(0, 44, 0.55, 0.2, { seasoned: o.seasoned }); txt(o.label || 'ЧИПСЫ', 0, -96, o.size || 40, { font: 'Osw', col: '#fff8e8' }); if (o.sub) txt(o.sub, 0, -52, 22, { font: 'Osw', col: '#fff8e8' });
  pencil([[-70, -140], [-60, 140]], { w: 8, col: '#ffffff', a: 0.25, pass2: false }); pop();
}
function potato(x, y, s, rot = 0) {                                    // картофелина: бурая, с глазками
  push(x, y, s, rot); const p = blob([[-60, 0], [-50, -34], [0, -42], [56, -30], [66, 4], [40, 34], [-20, 36], [-56, 22]], { wash: '#c8945a', washA: 1, w: 2.4, col: '#5a3a1a', key: 10080 }); shadeG(p.path, -60, -40, 60, 40, '#8a5a2a', 0.4);
  for (const [ex, ey] of [[-20, -10], [24, 6], [6, -24]]) ell(ex, ey, 3, 2, { wash: '#5a3a1a', washA: 1, line: false }); pop();
}
Object.assign(PROPS, {
  chipP() { chip(0, -40, 0.5, 0.3, { seed: 5 }); },
  tubeP() { chipTube(0, 40, 0.5, 0); },
  ironP() { push(0, -30, 1); blob([[-60, 20], [-40, -20], [50, -20], [70, 20]], { wash: '#3a3a40', washA: 1, w: 2.4, col: '#0a0a0a' }); rect(-64, 18, 136, 12, { wash: '#a8a8b0', washA: 1, w: 2 }); pencil(spline([[-30, -20], [-20, -60], [40, -60], [40, -20]], false, 6), { w: 10, col: '#5a3a1a' }); pop(); },
  shakerP() { push(0, -60, 1); rect(-30, -60, 60, 110, { wash: '#f2f0e6', washA: 1, w: 2.4, col: '#3a3a3a' }); ell(0, -60, 30, 10, { wash: '#a8a8b0', washA: 1, w: 2 }); for (let i = 0; i < 5; i++) ell(-16 + i * 8, -62, 2, 2, { wash: '#3a3a3a', washA: 1, line: false }); rect(-30, -20, 60, 40, { wash: '#5aa83a', washA: 1, line: false }); pop(); },
  gavelP() { push(0, -60, 1, -0.4); pencil([[0, 40], [0, -60]], { w: 8, col: '#6a3a1a' }); rect(-40, -90, 80, 34, { wash: '#7a4a24', washA: 1, w: 2.4, col: '#2a1408' }); pop(); },
});
