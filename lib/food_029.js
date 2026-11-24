/* 029 — еда выпуска «Тирамису»: форма тирамису в разрезе (слои печенья, крема, какао), стаканчик-порция, печенье савоярди, баночка маскарпоне,
   гейзерная кофеварка мока, бутылка алкермеса, миска желтков с венчиком, ситечко с какао; реквизит Тома и иконки шкалы INGR_C29. */
const TI = { cream: '#f8efd8', creamD: '#d8c8a0', cocoa: '#5a3418', cocoaL: '#8a5a30', sav: '#e8c070', savD: '#a8782a', coffee: '#4a2810' };
function savoiardi(x, y, s, rot = 0, o = {}) {                               // печенье савоярди: продолговатое, сахарная корочка, o.wet — пропитано кофе
  push(x, y, s, rot); const b = blob([[-90, 0], [-86, -22], [-60, -30], [60, -30], [86, -22], [90, 0], [60, 10], [-60, 10]], { wash: o.wet ? '#a8682a' : TI.sav, washA: 1, w: 2, col: TI.savD, key: o.key || 29000 });
  for (let i = 0; i < 12; i++) ell(-70 + i * 13, -18 + (i % 2) * 6, 3, 2, { wash: '#ffffff', washA: o.wet ? 0.3 : 0.9, line: false }); pop();
}
function tiramisuDish(x, y, s, t, o = {}) {                                  // стеклянная форма тирамису в разрезе: печенье в кофе, крем, печенье, крем, какао; o.scoop — выемка ложкой
  push(x, y, s); const key = o.key || 29010, w = 260, h = 200;
  const g = rect(-w, -h, 2 * w, h, { wash: '#e8f4f8', washA: 0.3, w: 3, col: '#7a8a90', key }); ctx.save(); ctx.clip(g.path);
  const L = [[0, 40, '#8a5a2a'], [40, 50, TI.cream], [90, 40, '#8a5a2a'], [130, 50, TI.cream], [180, 20, TI.cocoa]];
  for (const [y0, hh, c] of L) { rect(-w, -y0 - hh, 2 * w, hh, { wash: c, washA: 1, line: false }); if (c === '#8a5a2a') for (let i = 0; i < 8; i++) savoiardi(-w + 40 + i * 64, -y0 - hh / 2 + 4, 0.34, 1.57, { wet: 1, key: key + i + y0 }); }
  const r = rng(key + 9); for (let i = 0; i < 60; i++) ell(-w + r() * 2 * w, -h + 4 + r() * 14, 3, 3, { wash: TI.cocoaL, washA: 1, line: false }); ctx.restore();
  if (o.scoop) blob([[-60, -h], [-40, -h + 70], [40, -h + 80], [70, -h]], { wash: TI.cream, washA: 1, w: 2, col: TI.creamD });
  pencil([[-w + 20, -h + 20], [-w + 60, -20]], { w: 6, col: '#ffffff', a: 0.4, pass2: false }); pop();
}
function tiraCup(x, y, s, t, o = {}) {                                       // стаканчик-порция тирамису с ложкой, какао сверху
  push(x, y, s); const g = blob([[-60, 0], [-70, -150], [70, -150], [60, 0]], { wash: '#e8f4f8', washA: 0.3, w: 2.4, col: '#7a8a90', key: o.key || 29030 }); ctx.save(); ctx.clip(g.path);
  for (const [y0, c] of [[0, '#8a5a2a'], [30, TI.cream], [70, '#8a5a2a'], [96, TI.cream], [140, TI.cocoa]]) rect(-80, -y0 - 40, 160, 40, { wash: c, washA: 1, line: false }); ctx.restore();
  if (o.spoon !== false) { pencil([[30, -150], [80, -260]], { w: 6, col: '#c8ccd4', pass2: false }); ell(26, -146, 14, 8, { wash: '#c8ccd4', washA: 1, w: 1.4 }); } pop();
}
function mascarponeTub(x, y, s) { push(x, y, s); blob([[-60, 0], [-66, -80], [66, -80], [60, 0]], { wash: '#f8f8f4', washA: 1, w: 2, col: '#8a8a8a' }); rect(-56, -60, 112, 36, { wash: '#2a6a9a', washA: 1, w: 1.4 }); txt('MASCARPONE', 0, -36, 14, { font: 'Osw', col: '#ffffff' }); blob([[-50, -80], [-30, -110], [10, -116], [40, -100], [56, -80]], { wash: TI.cream, washA: 1, w: 1.6, col: TI.creamD }); pop(); }   // баночка маскарпоне с шапкой крема
function mokaPot(x, y, s, t) { push(x, y, s); poly([[-40, 0], [-50, -70], [50, -70], [40, 0]], { wash: '#a8acb4', washA: 1, w: 2, col: '#3a3a40' }); poly([[-36, -70], [-30, -80], [30, -80], [36, -70]], { wash: '#8a8e96', washA: 1, w: 2 }); poly([[-30, -80], [-40, -150], [40, -150], [30, -80]], { wash: '#a8acb4', washA: 1, w: 2, col: '#3a3a40' }); ell(0, -156, 30, 10, { wash: '#2a2a2a', washA: 1, w: 1.4 }); pencil(spline([[40, -140], [70, -130], [60, -90]], false, 4), { w: 8, col: '#2a2a2a', pass2: false }); poly([[-40, -140], [-62, -150], [-40, -128]], { wash: '#a8acb4', washA: 1, w: 1.4 }); for (let i = 0; i < 2; i++) { const ph = (t * 0.6 + i * 0.5) % 1; ell(-50, -160 - ph * 80, 10 + ph * 10, 8, { wash: '#ffffff', washA: 0.35 * (1 - ph), line: false }); } pop(); }   // гейзерная кофеварка
function alchermes(x, y, s) { push(x, y, s); blob([[-30, 0], [-34, -110], [-14, -140], [-12, -190], [12, -190], [14, -140], [34, -110], [30, 0]], { wash: '#c8102a', washA: 0.95, w: 2, col: '#4a0010' }); rect(-24, -90, 48, 50, { wash: '#f4ecd0', washA: 1, w: 1 }); txt('ALCHERMES', 0, -62, 9, { font: 'Osw', col: '#a8102a' }); rect(-12, -206, 24, 16, { wash: '#2a2a2a', washA: 1, w: 1 }); pop(); }   // ликёр алкермес
function yolkBowl(x, y, s, t, o = {}) { push(x, y, s); blob([[-90, -40], [-80, 10], [0, 26], [80, 10], [90, -40]], { wash: '#f4f0e8', washA: 1, w: 2.4, col: '#6a6a6a' }); ell(0, -40, 90, 16, { wash: o.cream ? TI.cream : '#f8c830', washA: 1, w: 1.4, col: '#a8802a' }); if (!o.cream) for (let i = 0; i < 4; i++) ell(-40 + i * 26, -42, 14, 8, { wash: '#f0a010', washA: 1, line: false }); if (o.whisk) { push(20, -60, 1, 0.5 + Math.sin(t * 16) * 0.3); pencil([[0, 0], [0, -120]], { w: 6, col: '#8a8e96', pass2: false }); for (let i = 0; i < 4; i++) pencil(spline([[0, 0], [-20 + i * 13, 40], [0, 70]], false, 4), { w: 2, col: '#a8acb4', pass2: false }); pop(); } pop(); }   // миска желтков с сахаром, венчик
Object.assign(PROPS, {
  spoonTiraP() { push(0, -10, 0.7, -0.3); pencil([[0, 0], [0, -120]], { w: 6, col: '#c8ccd4', pass2: false }); ell(0, 10, 18, 26, { wash: TI.cream, washA: 1, w: 1.6, col: '#a8acb4' }); ell(0, 0, 14, 8, { wash: TI.cocoa, washA: 1, line: false }); pop(); },   // ложка тирамису
  cupTiraP() { tiraCup(0, 20, 0.5, 0, { key: 29100 }); },                                          // стаканчик тирамису
  whiskP() { push(0, -10, 0.7, 0.3); pencil([[0, 0], [0, -120]], { w: 6, col: '#8a8e96', pass2: false }); for (let i = 0; i < 4; i++) pencil(spline([[0, 0], [-20 + i * 13, 40], [0, 70]], false, 4), { w: 2, col: '#a8acb4', pass2: false }); pop(); },   // венчик
  savP() { savoiardi(0, -10, 0.55, -0.3, { key: 29102 }); },                                        // печенье савоярди
  mokaP() { mokaPot(0, 20, 0.6, 0); },                                                              // кофеварка
  mascP() { mascarponeTub(0, 20, 0.6); },                                                           // маскарпоне
  menuP() { push(0, -30, 0.6, 0.1); rect(-80, -110, 160, 220, { wash: '#f8f0dc', washA: 1, w: 2, col: '#6a4a2a' }); txt('MENU', 0, -70, 30, { font: 'Osw', col: '#8a2a1a' }); txt('Tiramesù', 0, 10, 26, { font: 'Hand', col: '#2a1a0a' }); pop(); },   // меню
});
const INGR_C29 = {                                                           // иконки шкалы 029 (квадрат ±30)
  yolk(s, t) { ell(0, 4, 26, 20, { wash: '#f8f4ec', washA: 1, w: 2, col: '#8a8a8a' }); ell(0, 4, 14, 12, { wash: '#f8b020', washA: 1, w: 1.4, col: '#a8701a' }); },
  sugar(s, t) { for (let i = 0; i < 3; i++) rect(-24 + i * 16, 4 - (i % 2) * 18, 20, 20, { wash: '#fbfbf8', washA: 1, w: 1.6, col: '#8a8a8a' }); },
  butter(s, t) { rect(-26, -12, 52, 26, { wash: '#f8e070', washA: 1, w: 2, col: '#a88a20' }); },
  masc(s, t) { mascarponeTub(0, 26, 0.4); },
  liqueur(s, t) { alchermes(0, 28, 0.28); },
  coffee(s, t) { mokaPot(0, 26, 0.34, t); },
  sav(s, t) { savoiardi(0, 4, 0.3, -0.3, { key: 29110 }); },
  cocoa(s, t) { blob([[-24, 14], [-20, -6], [0, -16], [20, -6], [24, 14]], { wash: TI.cocoa, washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 6; i++) ell(-14 + i * 6, -20 - (i % 2) * 6, 2, 2, { wash: TI.cocoaL, washA: 1, line: false }); },
};
