/* 015 — еда выпуска «Хамон»: окорок-хамон (кожа, чёрное копыто, срез с мраморными прожилками, бирка), хамонера-подставка, тонкий ломтик-лепесток,
   жёлудь, иберийская чёрная свинья (худая, длинное рыло, висячие уши), бирка-пломба 2014 (4 цвета), бутылка оливкового масла, ветка оливы, нож-хамонеро.
   Реквизит Тома — PROPS. */
const JM = { meat: '#b8343a', meatD: '#6e1420', meatL: '#e8646a', fat: '#fbf0e2', fatD: '#e2c8ac', skin: '#b8703a', skinD: '#6a3414', skinL: '#e0a060', hoof: '#1c1616', acorn: '#9a6630', acornD: '#5a3a14', cap: '#7a6a44', pig: '#3e3438', pigD: '#1e181c', pigL: '#6a5a60',
  tag: { black: '#1a1a1a', red: '#c8221a', green: '#2a8a3a', white: '#f4f4f0' } };

function marble(path, bb, key, a = 0.8) {                                   // мраморные белые прожилки по красному срезу
  ctx.save(); ctx.clip(path); const r = rng(key); for (let i = 0; i < 9; i++) { const x = bb[0] + r() * (bb[2] - bb[0]), y = bb[1] + r() * (bb[3] - bb[1]), L = 20 + r() * 50, an = r() * 3;
    pencil(spline([[x, y], [x + Math.cos(an) * L * 0.5 + r() * 10, y + Math.sin(an) * L * 0.5], [x + Math.cos(an) * L, y + Math.sin(an) * L + r() * 8]], false, 5), { w: 2 + r() * 3, col: JM.fat, a, pass2: false }); } ctx.restore();
}
function jamonLeg(x, y, s, rot = 0, o = {}) {                              // окорок: широкий низ, узкое колено, чёрное копыто вверху справа; o.cut — срез (0..1); o.tag — цвет бирки; o.rope
  push(x, y, s, rot); const P = [[-160, 130], [-200, 40], [-170, -50], [-70, -130], [40, -180], [106, -232], [142, -222], [136, -168], [96, -90], [50, 20], [-20, 120], [-90, 160]];
  ell(-40, 170, 150, 18, { wash: '#000000', washA: 0.15, line: false });
  const L = shape(spline(P, true, 8), { wash: JM.skin, washA: 1, w: 3, col: '#4a2a0a', key: o.key || 15000 }); shadeG(L.path, 120, -200, -160, 120, JM.skinD, 0.45); hatch(L.path, L.bb, { gap: 9, a: 0.12, col: JM.skinD, ang: 0.9 });
  pencil(spline([[-120, -30], [-40, -100], [60, -160]], false, 6), { w: 10, col: JM.skinL, a: 0.6, pass2: false });
  shape([[108, -228], [150, -262], [176, -250], [160, -214], [138, -218]], { wash: JM.hoof, washA: 1, w: 2, col: '#000' }); pencil([[150, -258], [158, -222]], { w: 1.6, col: '#5a5a5a', pass2: false }); pencil([[114, -232], [100, -220]], { w: 3, col: '#5a3a1a', pass2: false });
  if (o.cut) { const k = o.cut; const C = blob([[-150, 60], [-120, -10 - 30 * k], [-50, -40 - 30 * k], [10, 0], [-10, 80], [-90, 120]], { wash: JM.meat, washA: 1, w: 2, col: JM.meatD, key: (o.key || 15000) + 1 }); shadeG(C.path, -30, -40, -130, 110, JM.meatD, 0.35);
    marble(C.path, C.bb, (o.key || 15000) + 2); pencil(spline([[-150, 60], [-120, -10 - 30 * k], [-50, -40 - 30 * k], [10, 0]], false, 6), { w: 10, col: JM.fat, pass2: false }); pencil([[-110, 0], [-70, -20]], { w: 4, col: '#ffffff', a: 0.6, pass2: false }); }
  if (o.rope) pencil(spline([[120, -200], [100, -260], [130, -300]], false, 5), { w: 3, col: '#c8a868', pass2: false });
  if (o.tag) { pencil([[100, -196], [76, -150]], { w: 2, col: '#5a5a5a', pass2: false }); push(70, -140, 1, 0.3); rect(-16, -10, 32, 46, { wash: JM.tag[o.tag] || o.tag, washA: 1, w: 1.6, col: '#1a1a1a' }); ell(0, -2, 4, 4, { wash: '#888888', washA: 1, line: false }); pop(); }
  pop();
}
function jamonero(x, y, s, t, o = {}) {                                     // подставка-хамонера: доска, стойка с зажимом, окорок копытом вверх
  push(x, y, s); const b = rect(-240, -30, 480, 50, { wash: '#a8743a', washA: 1, w: 2.4, col: '#3a2008', key: 15010 }); shadeG(b.path, 0, -30, 0, 20, '#5a3410', 0.4); for (let i = 0; i < 4; i++) pencil([[-230, -18 + i * 10], [230, -16 + i * 10]], { w: 1.2, col: '#6a4418', a: 0.5, pass2: false });
  rect(150, -260, 30, 240, { wash: '#8a8e94', washA: 1, w: 2, col: '#2a2a2a' }); rect(130, -280, 70, 30, { wash: '#6a6e74', washA: 1, w: 2 }); ell(200, -265, 14, 14, { wash: '#3a3a3a', washA: 1, w: 1.4 });
  jamonLeg(-20, -120, 1, -0.15, { cut: o.cut ?? 0.6, tag: o.tag, key: o.key || 15011 }); if (o.slices) for (let i = 0; i < o.slices; i++) slice(-200 + i * 40, 10, 0.5, 0.2 * i, { key: 15020 + i }); pop();
}
function slice(x, y, s, rot = 0, o = {}) {                                  // тонкий ломтик хамона: волнистый, полупрозрачный, белая кайма жира, прожилки, блик
  push(x, y, s, rot); const P = [[-90, 10], [-80, -26], [-40, -40], [10, -34], [60, -42], [92, -12], [80, 22], [30, 30], [-30, 34]];
  const f = shape(spline(P, true, 8), { wash: JM.meatL, washA: 0.95, w: 1.6, col: JM.meatD, key: o.key || 15030 }); shadeG(f.path, 40, -30, -60, 30, JM.meat, 0.5); marble(f.path, f.bb, (o.key || 15030) + 1, 0.9);
  pencil(spline([[-90, 10], [-80, -26], [-40, -40], [10, -34]], false, 6), { w: 7, col: JM.fat, pass2: false }); pencil([[-20, -20], [30, -24]], { w: 3, col: '#ffffff', a: 0.7, pass2: false }); pop();
}
function acorn(x, y, s, rot = 0, o = {}) {                                  // жёлудь: глянцевый орех + шапочка с чешуйками
  push(x, y, s, rot); const n = shape(spline([[-22, -6], [-24, 20], [-10, 44], [0, 50], [10, 44], [24, 20], [22, -6]], true, 6), { wash: JM.acorn, washA: 1, w: 2, col: JM.acornD, key: o.key || 15040 }); shadeG(n.path, 14, 40, -10, 0, JM.acornD, 0.4);
  pencil([[-10, 4], [-12, 26]], { w: 4, col: '#e8c08a', a: 0.7, pass2: false }); const c = blob([[-28, -2], [-26, -20], [0, -28], [26, -20], [28, -2], [0, 4]], { wash: JM.cap, washA: 1, w: 2, col: '#3a2a10' }); hatch(c.path, c.bb, { gap: 6, a: 0.5, col: '#3a2a10', ang: 0.8 }); hatch(c.path, c.bb, { gap: 6, a: 0.5, col: '#3a2a10', ang: -0.8 });
  pencil([[0, -28], [4, -42]], { w: 4, col: '#5a4a2a', pass2: false }); pop();
}
function ibPig(x, y, s, t, o = {}) {                                        // иберийская свинья: чёрно-сизая, поджарая, длинное рыло, висячие уши, тонкие ноги; o.walk, o.eat (0..1), o.flip
  push(x, y, s, 0, o.flip || 1); const wk = o.walk ?? 0, e = o.eat || 0;
  for (const [lx, ph] of [[-80, 0], [-50, 3.14], [70, 3.14], [100, 0]]) { const sw = Math.sin(wk + ph) * 14; pencil([[lx, -60], [lx + sw, 0]], { w: 16, col: lx < 0 ? JM.pigD : JM.pig }); ell(lx + sw, 2, 10, 6, { wash: '#0a0a0a', washA: 1, line: false }); }
  const B = shape(spline([[-130, -80], [-120, -130], [-40, -150], [60, -150], [120, -130], [140, -90], [110, -56], [0, -50], [-100, -56]], true, 8), { wash: JM.pig, washA: 1, w: 2.6, col: '#0a0808', key: o.key || 15050 });
  shadeG(B.path, 0, -150, 0, -50, JM.pigD, 0.5); hatch(B.path, B.bb, { gap: 8, a: 0.15, col: '#000000', ang: 1.2 }); pencil(spline([[-110, -130], [-20, -148], [80, -144]], false, 6), { w: 5, col: JM.pigL, a: 0.6, pass2: false });
  pencil(spline([[-130, -100], [-160, -110], [-150, -80]], false, 5), { w: 3, col: JM.pigD, pass2: false });
  push(140, -110 + e * 60, 1, e * 0.7); const H = shape([[-20, -40], [40, -40], [100, -14], [110, 10], [80, 20], [10, 24], [-20, 20]], { wash: JM.pig, washA: 1, w: 2.4, col: '#0a0808' }); shadeG(H.path, 60, -30, 30, 20, JM.pigD, 0.4);
    ell(104, -2, 10, 14, { wash: '#6a4a50', washA: 1, w: 1.6, col: '#1a0a0a' }); for (const d of [-4, 4]) ell(104, -2 + d, 2, 3, { wash: '#1a0a0a', washA: 1, line: false });
    shape([[0, -40], [30, -60], [44, -20]], { wash: JM.pigD, washA: 1, w: 2, col: '#000' }); ell(40, -18, 5, 5, { wash: '#1a1a1a', washA: 1, w: 1 }); ell(41, -19, 1.6, 1.6, { wash: '#ffffff', washA: 1, line: false });
    if (o.chew && e > 0.5) acorn(108, 18, 0.5, 0.4, { key: 15051 }); pop();
  pop();
}
function sealTag(x, y, s, col, label, rot = 0) {                            // бирка-пломба 2014: пластиковая полоса-хомут + табличка цвета категории
  push(x, y, s, rot); pencil(spline([[0, -110], [-14, -70], [0, -40]], false, 5), { w: 5, col: JM.tag[col] || col, pass2: false }); const r = rect(-46, -40, 92, 130, { wash: JM.tag[col] || col, washA: 1, w: 2.4, col: '#1a1a1a' });
  shadeG(r.path, 40, -40, -40, 90, '#000000', 0.25); ell(0, -24, 8, 8, { wash: '#ffffff', washA: 0.8, w: 1 }); if (label) txt(label, 0, 30, 18, { font: 'Osw', col: col === 'white' ? '#1a1a1a' : '#ffffff' }); pencil([[-36, -30], [-36, 80]], { w: 3, col: '#ffffff', a: 0.3, pass2: false }); pop();
}
function oilBottle(x, y, s, o = {}) {                                       // бутылка оливкового масла: зелёно-золотое стекло, этикетка с веткой
  push(x, y, s); const g = shape(spline([[-40, 0], [-44, -120], [-30, -170], [-14, -200], [-14, -250], [14, -250], [14, -200], [30, -170], [44, -120], [40, 0]], true, 6), { wash: '#a8a02a', washA: 0.85, w: 2.4, col: '#3a3a10', key: o.key || 15060 });
  shadeG(g.path, -30, -120, 40, -60, '#4a4a10', 0.4); pencil([[-28, -150], [-30, -20]], { w: 6, col: '#fff8c0', a: 0.6, pass2: false }); rect(-16, -270, 32, 22, { wash: '#2a2a2a', washA: 1, w: 1.4 });
  rect(-36, -110, 72, 70, { wash: '#f4ecd8', washA: 1, w: 1.6, col: '#3a3a1a' }); oliveBranch(0, -76, 0.3, 0.3); pop();
}
function oliveBranch(x, y, s, rot = 0) {                                    // ветка оливы: узкие серебристые листья, зелёные и чёрные плоды
  push(x, y, s, rot); pencil(spline([[-120, 20], [-40, 0], [60, -10], [130, -30]], false, 6), { w: 5, col: '#5a4a2a', pass2: false });
  for (let i = 0; i < 9; i++) { const px = -100 + i * 26, py = 14 - i * 4, sd = i % 2 ? 1 : -1; push(px, py, 1, sd * 0.7 - 0.3); blob([[0, 0], [16, -6 * sd], [44, -4 * sd], [16, 4 * sd]], { wash: i % 3 ? '#7a9a6a' : '#a8b898', washA: 1, w: 1.2, col: '#3a4a2a' }); pop(); }
  for (const [px, py, c] of [[-30, 20, '#6a8a2a'], [20, 14, '#2a2228'], [80, 0, '#6a8a2a']]) ell(px, py, 12, 16, { wash: c, washA: 1, w: 1.4, col: '#1a1a10' }); pop();
}
function hamKnife(x, y, s, rot = 0) {                                       // нож-хамонеро: длинное узкое гибкое лезвие, чёрная рукоять
  push(x, y, s, rot); const b = shape([[0, -6], [230, -4], [250, 0], [230, 4], [0, 6]], { wash: '#d8dce2', washA: 1, w: 1.6, col: '#3a3e44' }); metalG(b.path, 120, -2, 140, '#ffffff', '#c8ccd2', '#7a7e84');
  rect(-90, -10, 90, 20, { wash: '#1a1a1a', washA: 1, w: 1.6 }); for (const px of [-70, -40, -14]) ell(px, 0, 3, 3, { wash: '#c8ccd2', washA: 1, line: false }); pop();
}
Object.assign(PROPS, {
  jamonP() { jamonLeg(0, -60, 0.4, -0.5, { cut: 0.6, key: 15080 }); },
  sliceP() { slice(0, -30, 0.45, 0.2, { key: 15081 }); },
  acornP() { acorn(0, -30, 0.9, 0.3, { key: 15082 }); },
  knifeP() { hamKnife(-20, -20, 0.6, -0.4); },
  scrollP() { push(0, -40, 0.6, 0.2); rect(-60, -40, 120, 80, { wash: '#f0e2c0', washA: 1, w: 2, col: '#6a4a1a' }); for (const sd of [-1, 1]) ell(sd * 62, 0, 12, 44, { wash: '#c8a868', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) pencil([[-44, -24 + i * 14], [40, -24 + i * 14]], { w: 2, col: '#5a3a1a', a: 0.6, pass2: false }); pop(); },
  oilP() { oilBottle(0, 0, 0.4, { key: 15083 }); },
});
