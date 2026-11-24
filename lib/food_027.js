/* 027 — еда выпуска «Кетчуп»: стеклянная бутылка кетчупа (прозрачная/тёмная), помидор, капля-всплеск, фри в кульке, кадушка рыбного рассола,
   коробка «томатных пилюль», грибы/грецкие орехи/устрицы, медный котёл; реквизит Тома (PROPS) и иконки шкалы INGR_C27. */
const KC = { red: '#c8201a', redL: '#f05a3a', redD: '#6a0a08', glass: '#e8f4f0', amber: '#5a3010' };
function ketchupBottle(x, y, s, t, o = {}) {                                // восьмигранная стеклянная бутылка: o.dark — тёмное стекло конкурента, o.fill 0..1, o.label, o.cap
  push(x, y, s, o.rot || 0); const key = o.key || 27000, dark = o.dark, f = o.fill == null ? 0.85 : o.fill;
  const body = [[-60, 0], [-66, -40], [-66, -200], [-30, -250], [-22, -330], [22, -330], [30, -250], [66, -200], [66, -40], [60, 0]];
  const g = shape(body, { wash: dark ? '#3a1a08' : KC.glass, washA: dark ? 1 : 0.45, w: 3, col: dark ? '#1a0a04' : '#4a5a58', key });
  if (!dark && f > 0) { ctx.save(); ctx.clip(g.path); const top = lerp(0, -330, f); rect(-70, top, 140, -top + 4, { wash: KC.red, washA: 1, line: false }); pencil([[-66, top], [66, top]], { w: 4, col: KC.redL, a: 0.7, pass2: false }); ctx.restore(); }
  if (dark) { ctx.save(); ctx.clip(g.path); for (let i = 0; i < 6; i++) ell(-30 + i * 12, -60 - i * 26, 10, 8, { wash: '#0a0402', washA: 0.6, line: false }); ctx.restore(); }
  for (let i = 0; i < 3; i++) pencil([[-48 + i * 48, -20], [-48 + i * 48, -200]], { w: 1.4, col: '#ffffff', a: 0.25, pass2: false });
  pencil([[-50, -190], [-50, -40]], { w: 7, col: '#ffffff', a: dark ? 0.15 : 0.5, pass2: false });
  if (o.label !== false) { const l = ell(0, -120, 50, 40, { wash: '#f8f0dc', washA: 1, w: 2, col: '#3a2a1a' }); txt(o.label || 'KETCHUP', 0, -122, 20, { font: 'Osw', col: dark ? '#3a2a1a' : KC.red }); txt(o.sub || 'TOMATO', 0, -98, 14, { font: 'Osw', col: '#2a2a2a' }); }
  if (o.cap !== false) { rect(-24, -356, 48, 28, { wash: dark ? '#2a2a2a' : '#f8f4ec', washA: 1, w: 2, col: '#3a3a3a' }); for (let i = 0; i < 5; i++) pencil([[-20 + i * 10, -354], [-20 + i * 10, -330]], { w: 1, col: '#8a8a8a', pass2: false }); }
  pop();
}
function tomato(x, y, s, o = {}) {                                          // спелый помидор: глянец, звёздочка-плодоножка
  push(x, y, s, o.rot || 0); const b = blob([[-46, 0], [-44, -36], [-20, -52], [20, -52], [44, -36], [46, 0], [30, 30], [-30, 30]], { wash: o.col || '#d8281e', washA: 1, w: 2.4, col: '#6a0a08', key: o.key || 27010 });
  shadeG(b.path, 40, -40, -30, 30, '#8a0a08', 0.4); ell(-18, -26, 12, 7, { rot: -0.4, wash: '#ffffff', washA: 0.6, line: false });
  for (let i = 0; i < 5; i++) { const a = i / 5 * 6.28; poly([[0, -50], [Math.cos(a) * 20, -50 + Math.sin(a) * 8 - 4], [Math.cos(a + 0.3) * 6, -48]], { wash: '#3a8a2a', washA: 1, w: 1 }); } pencil([[0, -50], [2, -66]], { w: 4, col: '#3a6a1a', pass2: false }); pop();
}
function ketchupBlob(x, y, s, t, o = {}) {                                  // капля/лужица кетчупа с бликом
  push(x, y, s); const b = blob([[-60, 0], [-50, -18], [-10, -24], [30, -20], [62, -6], [50, 10], [0, 14], [-40, 10]], { wash: KC.red, washA: 1, w: 2, col: KC.redD, key: o.key || 27020 }); ell(-14, -12, 18, 5, { wash: '#ffffff', washA: 0.6, line: false }); pop();
}
function fryCone(x, y, s, t, o = {}) {                                      // бумажный кулёк с картошкой фри и шапкой кетчупа
  push(x, y, s); for (let i = 0; i < 9; i++) { const a = -0.4 + i * 0.1; push(-50 + i * 13, -120, 1, a); rect(-7, -70, 14, 90, { wash: '#f4c040', washA: 1, w: 1.6, col: '#8a5a08' }); pop(); }
  const c = poly([[-70, -130], [70, -130], [36, 30], [-36, 30]], { wash: '#f8f4ec', washA: 1, w: 2.4, col: '#6a5a4a', key: o.key || 27030 }); for (let i = 0; i < 5; i++) pencil([[-60 + i * 30, -128], [-30 + i * 15, 28]], { w: 6, col: '#c8201a', a: 0.7, pass2: false });
  if (o.ketchup) { blob([[-50, -170], [-20, -200], [20, -196], [50, -170], [20, -156], [-20, -158]], { wash: KC.red, washA: 1, w: 2, col: KC.redD }); ell(-10, -186, 12, 4, { wash: '#ffffff', washA: 0.6, line: false }); }
  pop();
}
function brineVat(x, y, s, t, o = {}) {                                     // глиняный чан рыбного рассола: бурая жижа, рыбьи хвосты, пузыри, бамбуковая крышка
  push(x, y, s); const key = o.key || 27040; const v = blob([[-150, 0], [-170, -120], [-150, -220], [150, -220], [170, -120], [150, 0]], { wash: '#8a5a3a', washA: 1, w: 3, col: '#2a1408', key }); shadeG(v.path, -170, 0, 170, 0, '#3a1a08', 0.5);
  for (let i = 0; i < 3; i++) pencil(spline([[-160, -60 - i * 50], [0, -50 - i * 50], [160, -60 - i * 50]], false, 5), { w: 2, col: '#5a3418', a: 0.5, pass2: false });
  ell(0, -220, 148, 28, { wash: '#6a3a10', washA: 1, w: 2.4, col: '#2a1408' }); ell(-30, -224, 60, 8, { wash: '#c88a3a', washA: 0.5, line: false });
  for (let i = 0; i < 3; i++) { push(-70 + i * 60, -226, 0.5, 1.2 + i * 0.4); poly([[0, 0], [30, -30], [36, 6]], { wash: '#a8b8c0', washA: 1, w: 1.4 }); pop(); }
  for (let i = 0; i < 4; i++) { const ph = (t * 0.8 + i * 0.25) % 1; ell(-80 + i * 50, -228 - ph * 20, 6 + ph * 5, 4, { wash: '#a86a2a', washA: 0.8 * (1 - ph), w: 1, col: '#3a1a08' }); }
  if (o.label) { rect(-50, -170, 100, 80, { wash: '#e8302a', washA: 1, w: 2, col: '#4a0a08' }); txt(o.label, 0, -118, 44, { font: 'Osw', col: '#f8e8a0' }); }
  pop();
}
function pillBox(x, y, s, t, o = {}) {                                      // жестяная коробка «томатных пилюль»: этикетка, помидор, пилюли рассыпаны (o.open)
  push(x, y, s, o.rot || 0); const b = rect(-90, -60, 180, 60, { wash: '#c8a040', washA: 1, w: 2.4, col: '#4a3008', key: o.key || 27050 }); shadeG(b.path, 0, -60, 0, 0, '#8a6a20', 0.4);
  rect(-80, -54, 160, 48, { wash: '#f4ecd0', washA: 1, w: 1.4 }); txt(o.label || 'TOMATO PILLS', 0, -34, 20, { font: 'Osw', col: '#a8241e' }); txt('cures all!', 0, -14, 16, { font: 'Hand', col: '#3a2a1a' }); tomato(-66, -26, 0.25);
  if (o.open) { push(0, -60, 1, -0.9); rect(-90, -16, 180, 16, { wash: '#c8a040', washA: 1, w: 2 }); pop(); for (let i = 0; i < 10; i++) { const r = rng((o.key || 27050) + i); ell(-120 + r() * 240, 8 + r() * 14, 10, 7, { wash: '#8a3a2a', washA: 1, w: 1.2 }); } }
  pop();
}
function walnut(x, y, s) { push(x, y, s); const b = ell(0, 0, 26, 22, { wash: '#a8784a', washA: 1, w: 2, col: '#4a2a10' }); pencil([[0, -22], [0, 22]], { w: 2, col: '#4a2a10', pass2: false }); for (let i = 0; i < 4; i++) pencil(spline([[-20, -12 + i * 8], [-8, -8 + i * 8], [-2, -14 + i * 8]], false, 3), { w: 1.2, col: '#6a4a24', pass2: false }); pop(); }   // грецкий орех
function oyster(x, y, s, open) { push(x, y, s); blob([[-40, 0], [-30, -24], [10, -30], [40, -14], [36, 8], [0, 14]], { wash: '#8a8a80', washA: 1, w: 2, col: '#3a3a34' }); for (let i = 0; i < 4; i++) pencil(spline([[-30 + i * 16, 8], [-24 + i * 16, -10], [-28 + i * 18, -24]], false, 3), { w: 1.2, col: '#5a5a54', pass2: false }); if (open) { ell(0, -10, 24, 12, { wash: '#f0e8dc', washA: 1, w: 1.4 }); ell(4, -10, 12, 7, { wash: '#d8c8b8', washA: 1, line: false }); } pop(); }   // устрица
function shroom(x, y, s, col) { push(x, y, s); rect(-8, -4, 16, 30, { wash: '#f0e8d8', washA: 1, w: 1.6, col: '#6a5a4a' }); blob([[-32, 0], [-24, -24], [0, -32], [24, -24], [32, 0]], { wash: col || '#8a5a2a', washA: 1, w: 2, col: '#3a2008' }); pop(); }   // гриб
Object.assign(PROPS, {
  bottleP() { ketchupBottle(0, 20, 0.42, 0, { key: 27100 }); },                                   // прозрачная бутылка кетчупа в лапе
  darkBottleP() { ketchupBottle(0, 20, 0.42, 0, { dark: 1, label: 'CATSUP', sub: '???', key: 27102 }); },   // тёмная бутылка конкурента
  fryP() { fryCone(0, 10, 0.45, 0, { ketchup: 1, key: 27104 }); },                                  // кулёк фри с кетчупом
  tomatoP() { tomato(0, -10, 0.7, { key: 27106 }); },                                               // помидор в лапе
  pillP() { pillBox(0, -10, 0.55, 0, { key: 27108 }); },                                            // коробка пилюль
  ladleBrineP() { push(0, -20, 0.7, -0.4); pencil([[0, 0], [0, -170]], { w: 8, col: '#8a6a3a', pass2: false }); blob([[-40, 0], [-36, 34], [0, 46], [36, 34], [40, 0]], { wash: '#8a6a3a', washA: 1, w: 2 }); ell(0, 2, 34, 8, { wash: '#6a3a10', washA: 0.9, line: false }); pop(); },   // черпак рассола
  magP() { push(0, -20, 0.7); pencil([[0, 0], [30, 60]], { w: 8, col: '#5a3a1a', pass2: false }); ell(-10, -26, 36, 36, { wash: '#d8f0f8', washA: 0.4, w: 5, col: '#c8a040' }); pop(); },   // лупа
  pastaP() { push(0, -10, 0.6); ell(0, 0, 70, 20, { wash: '#f8f4ec', washA: 1, w: 2 }); for (let i = 0; i < 6; i++) pencil(spline([[-50 + i * 18, -6], [-40 + i * 18, -20], [-30 + i * 16, -4]], false, 4), { w: 4, col: '#f0d070', pass2: false }); ketchupBlob(0, -14, 0.6, 0, { key: 27110 }); pop(); },   // тарелка макарон с кетчупом
});
const INGR_C27 = {                                                           // иконки шкалы ингредиентов 027 (квадрат ±30)
  vinegar(s, t) { blob([[-12, 24], [-18, -2], [-8, -12], [-8, -26], [8, -26], [8, -12], [18, -2], [12, 24]], { wash: '#e8d8a0', washA: 1, w: 2, col: '#6a5a1a' }); rect(-10, -2, 20, 14, { wash: '#f8f4e8', washA: 1, w: 1 }); },
  sugar(s, t) { for (let i = 0; i < 3; i++) rect(-24 + i * 16, 4 - (i % 2) * 18, 20, 20, { wash: '#fbfbf8', washA: 1, w: 1.6, col: '#8a8a8a' }); },
  coal(s, t) { blob([[0, -26], [16, 0], [12, 18], [0, 24], [-12, 18], [-16, 0]], { wash: '#1a1a1a', washA: 1, w: 2, col: '#000000' }); ell(-4, 4, 4, 6, { wash: '#6a6a6a', washA: 0.6, line: false }); },
  pill(s, t) { for (let i = 0; i < 3; i++) ell(-16 + i * 16, 6 - (i % 2) * 14, 11, 8, { wash: '#8a3a2a', washA: 1, w: 1.6 }); },
  shroom(s, t) { shroom(0, 6, 0.8); },
  walnut(s, t) { walnut(0, 0, 0.9); },
  oyster(s, t) { oyster(0, 6, 0.7, 1); },
  fish(s, t) { fish(0, 4, 0.42, 0, { key: 27120 }); },
};
