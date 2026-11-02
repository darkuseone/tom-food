/* 014 — еда выпуска «Сухарики»: сухарь-ломтик (ржаной/пшеничный, пористый срез, корочка), галета-хардтак (квадрат с наколами), корабельный сухарь-шестиугольник,
   римский буцеллатум (круглая лепёшка-камень с крестом), долгоносик-жучок, пакетик сухариков (без бренда), кубики-сухарики со специями. Реквизит Тома — PROPS. */
const SK = { rye: '#7a4a24', ryeD: '#4a2410', ryeL: '#a8703a', wheat: '#e0b070', wheatD: '#a8743a', wheatL: '#f4d8a0', tack: '#e8d0a0', tackD: '#b89a68' };

function rusk(x, y, s, rot = 0, o = {}) {                                // сухарь-ломтик: o.rye — ржаной; пористый срез, корка по краю, блик
  push(x, y, s, rot); const c = o.rye ? [SK.rye, SK.ryeD, SK.ryeL] : [SK.wheat, SK.wheatD, SK.wheatL];
  const b = blob([[-70, 30], [-74, -20], [-50, -50], [0, -58], [50, -50], [74, -20], [70, 30], [0, 36]], { wash: c[1], washA: 1, w: 2.4, col: '#2a1408' });
  const f = blob([[-60, 24], [-62, -16], [-44, -40], [0, -46], [44, -40], [62, -16], [60, 24], [0, 28]], { wash: c[0], washA: 1, w: 1.4, col: c[1], key: o.key || 14000 }); shadeG(f.path, 60, 28, -40, -40, c[1], 0.3);
  const r = rng(o.key || 14000); for (let i = 0; i < 26; i++) ell(-50 + r() * 100, -36 + r() * 56, 2 + r() * 3, 1.6 + r() * 2, { wash: c[1], washA: 0.7, line: false }); glow(-24, -22, 18, 'rgba(255,240,210,1)', 0.35);
  if (o.salt) for (let i = 0; i < 12; i++) ell(-50 + r() * 100, -36 + r() * 56, 2, 2, { wash: '#ffffff', washA: 0.9, line: false }); pop();
}
function hardtack(x, y, s, rot = 0, o = {}) {                            // галета: квадрат 3 × 3 дюйма, 16 наколов, подгоревшие края; o.worm — ходы жучков; o.hex — шестиугольник
  push(x, y, s, rot); const P = o.hex ? Array.from({ length: 6 }, (_, i) => [Math.cos(i / 6 * 6.283) * 70, Math.sin(i / 6 * 6.283) * 70]) : [[-64, -64], [64, -64], [64, 64], [-64, 64]];
  ell(4, 70, 66, 10, { wash: '#000000', washA: 0.15, line: false }); const b = poly(P.map(([a, b2]) => [a + 6, b2 + 8]), { wash: SK.tackD, washA: 1, line: false });
  const f = poly(P, { wash: SK.tack, washA: 1, w: 2.4, col: '#5a4a2a', key: o.key || 14010 }); shadeG(f.path, 64, 64, -64, -64, SK.tackD, 0.35); hatch(f.path, f.bb, { gap: 7, a: 0.12, col: SK.tackD, ang: 0.6 });
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) ell(-42 + i * 28, -42 + j * 28, 3.2, 3.2, { wash: '#6a5030', washA: 1, line: false });
  if (o.worm) { const r = rng(14011); for (let i = 0; i < 6; i++) ell(-50 + r() * 100, -50 + r() * 100, 5, 4, { wash: '#2a1a0a', washA: 0.9, line: false }); }
  if (o.text) txt(o.text, 0, 6, 22, { font: 'Hand', col: '#4a2a10' }); pop();
}
function bucellatum(x, y, s, rot = 0, o = {}) {                          // римский буцеллатум: круглая твёрдая лепёшка с крестом-надрезом и печатью
  push(x, y, s, rot); ell(4, 40, 80, 14, { wash: '#000000', washA: 0.15, line: false }); const b = ell(0, 0, 80, 34, { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#2a1408' }); const t = ell(0, -10, 78, 30, { wash: '#c8904a', washA: 1, w: 2, col: '#4a2a10', key: o.key || 14020 }); shadeG(t.path, 70, 20, -50, -30, '#8a5a2a', 0.4);
  pencil([[-60, -10], [60, -10]], { w: 4, col: '#6a3a14', pass2: false }); pencil([[0, -36], [0, 16]], { w: 4, col: '#6a3a14', pass2: false }); ell(30, -20, 12, 6, { line: true, w: 2, col: '#6a3a14' }); glow(-30, -24, 16, 'rgba(255,240,200,1)', 0.4); pop();
}
function weevil(x, y, s, t = 0, o = {}) {                                // долгоносик: жучок с хоботком и лапками (o.wave — машет лапкой)
  push(x, y, s, o.rot || 0); ell(0, 0, 14, 9, { wash: '#4a2a14', washA: 1, w: 1.4, col: '#1a0a04' }); ell(-14, -2, 6, 5, { wash: '#3a1a0a', washA: 1, w: 1.2 }); pencil([[-18, -2], [-30, 4]], { w: 2, col: '#3a1a0a', pass2: false });
  for (let i = 0; i < 3; i++) for (const sd of [-1, 1]) pencil([[-6 + i * 6, sd * 6], [-8 + i * 7, sd * 14 + (o.wave && i === 2 && sd < 0 ? Math.sin(t * 14) * 8 - 8 : 0)]], { w: 1.6, col: '#1a0a04', pass2: false }); ell(-16, -4, 1.6, 1.6, { wash: '#ffffff', washA: 1, line: false }); pop();
}
function cubeRusk(x, y, s, rot = 0, o = {}) {                            // кубик-сухарик: ржаной кубик с корочкой и крапинками приправы (o.spice — цвет)
  push(x, y, s, rot); const d = 10; poly([[-20, -20], [-20 + d, -20 - d], [20 + d, -20 - d], [20, -20]], { wash: SK.ryeL, washA: 1, w: 1.4, col: '#2a1408' }); poly([[20, -20], [20 + d, -20 - d], [20 + d, 20 - d], [20, 20]], { wash: SK.ryeD, washA: 1, w: 1.4, col: '#2a1408' });
  const f = rect(-20, -20, 40, 40, { wash: o.wheat ? SK.wheat : SK.rye, washA: 1, w: 1.4, col: '#2a1408' }); const r = rng(o.key || 14030); for (let i = 0; i < 8; i++) ell(-16 + r() * 32, -16 + r() * 32, 1.8, 1.8, { wash: o.spice || '#e8c060', washA: 0.95, line: false }); pop();
}
function snackBag(x, y, s, t = 0, o = {}) {                              // пакетик сухариков без бренда: фольга, гребешки сверху, окошко с кубиками, вкус крупно
  push(x, y, s, o.rot || 0); const col = o.col || '#c8221a'; const b = shape(spline([[-100, 120], [-110, 0], [-104, -130], [-96, -150], [96, -150], [104, -130], [110, 0], [100, 120]], true, 6), { wash: col, washA: 1, w: 2.6, col: '#1a0a04' }); metalG(b.path, -40, -60, 220, '#ffffff', col, lerpC(col, '#000000', 0.5), 0.6);
  for (let i = 0; i < 10; i++) poly([[-96 + i * 19, -150], [-86 + i * 19, -162], [-77 + i * 19, -150]], { wash: col, washA: 1, w: 1.2, col: '#1a0a04' });
  txt('СУХАРИКИ', 0, -96, 34, { font: 'Osw', col: '#fff4d0' }); ell(0, -10, 64, 44, { wash: '#f4ecd8', washA: 1, w: 2, col: '#1a0a04' }); for (let i = 0; i < 5; i++) cubeRusk(-30 + (i % 3) * 30, -20 + Math.floor(i / 3) * 24, 0.5, i * 0.4, { key: 14040 + i });
  rect(-90, 46, 180, 48, { wash: '#fff4d0', washA: 1, w: 1.6, col: '#1a0a04' }); txt(o.taste || 'ХОЛОДЕЦ С ХРЕНОМ', 0, 78, o.taste && o.taste.length < 10 ? 26 : 17, { font: 'Osw', col: '#7a1a10' }); glow(-50, -100, 30, 'rgba(255,255,255,1)', 0.5); pop();
}
Object.assign(PROPS, {
  ruskP() { rusk(0, -40, 0.6, 0.3, { rye: 1, key: 14080 }); },
  tackP() { hardtack(0, -40, 0.55, 0.2, { key: 14081 }); },
  bucP() { bucellatum(0, -30, 0.55, 0.1, { key: 14082 }); },
  bagP() { snackBag(0, -60, 0.45, 0, { key: 14083 }); },
  cubeP() { cubeRusk(0, -30, 0.9, 0.4, { key: 14084, spice: '#d8582a' }); },
  coffeeP() { push(0, -30, 1); rect(-26, -50, 52, 50, { wash: '#8a8e94', washA: 1, w: 2, col: '#2a2a2a' }); ell(0, -50, 26, 7, { wash: '#3a2010', washA: 1, w: 1.4 }); pencil(spline([[26, -42], [42, -34], [26, -14]], false, 4), { w: 4, col: '#8a8e94', pass2: false }); pop(); },
});
