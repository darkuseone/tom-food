/* 024 — костюмы выпуска «Чей борщ?»: вышиванка (белая льняная рубаха, нагрудная вставка красно-чёрной вышивки крестиком, вышитые манжеты, красный пояс),
   молдавский крестьянин (белая рубаха с вышивкой по вороту + чёрная овчинная безрукавка-кожушок с цветной аппликацией + шапка `papakha`),
   немецкий купец 1584 (тёмно-зелёный камзол-котта + берет `barett`), Том-малыш-поварёнок (шеф + фартук), худи + фартук (хук), свитер с оленями + фартук.
   Трофей №24 на фартуке — свекольная капля с точкой сметаны. */
(() => {
  Object.assign(OUTFIT, {
    vyshA: { top: '#f6f0e2', topD: '#b8ae98', topL: '#ffffff', pants: '#3a3a5a', shirt: '#f6f0e2', detail: 'vyshyv', boots: 'soft', apron: 1 },
    moldA: { top: '#f6f0e2', topD: '#b8ae98', topL: '#ffffff', pants: '#e8e2d2', shirt: '#f6f0e2', detail: 'kojoc', hat: 'papakha', boots: 'soft', apron: 1 },
    kaufA: { top: '#2a4a3a', topD: '#0a1a12', topL: '#4a7a5a', pants: '#3a2a2a', detail: 'cotte', hat: 'barett', boots: 'soft', apron: 1 },
  });
  if (OUTFIT.homeG) OUTFIT.homeB = Object.assign({}, OUTFIT.homeG, { top: '#c8902a', topD: '#6a4208', topL: '#f0c060', shirt: '#c8902a' });   // горчичный домашний свитер (хук, сегодня)
  if (OUTFIT.hoodie) OUTFIT.hoodB = Object.assign({}, OUTFIT.hoodie, { apron: 1 });
  if (OUTFIT.waiter) OUTFIT.waitB = Object.assign({}, OUTFIT.waiter, { apron: 1 });   // официант-повар 1920-х (tomato)
  if (OUTFIT.chef) OUTFIT.chefB = Object.assign({}, OUTFIT.chef, { apron: 1 });
  if (OUTFIT.sweater) OUTFIT.sweatB = Object.assign({}, OUTFIT.sweater, { apron: 1 });
  if (OUTFIT.rubakha) OUTFIT.linB = Object.assign({}, OUTFIT.rubakha, { apron: 1, top: '#e8dcc0', topD: '#a8987a', topL: '#fff6e0' });
  function xstitch(x0, y0, cols, rows, sz, pat, key) {                    // вышивка крестиком: ромбы/«ёлочки» из крестиков по маске pat(c, r) → 0 нет, 1 красный, 2 чёрный
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { const v = pat(c, r); if (!v) continue; const x = x0 + c * sz, y = y0 + r * sz, col = v === 1 ? '#c8202a' : '#1a1418';
      pencil([[x - sz * 0.4, y - sz * 0.4], [x + sz * 0.4, y + sz * 0.4]], { w: 1.6, col, pass2: false, gap: false }); pencil([[x + sz * 0.4, y - sz * 0.4], [x - sz * 0.4, y + sz * 0.4]], { w: 1.6, col, pass2: false, gap: false }); }
  }
  const diamond = (c, r) => { const d = Math.abs(c - 3) + Math.abs((r % 7) - 3); return d === 3 ? 1 : d === 1 ? 2 : d === 0 ? 1 : 0; };
  COST6.vyshyv = (OF, b, t, bp, L) => {                                    // вышиванка: белый лён, нагрудная вставка с ромбами крестиком, вышитый ворот и манжеты, красный пояс с кистями
    hatch(bp.path, bp.bb, { gap: 8, a: 0.08, col: OF.topD, ang: 1.1, key: 24701, w: 1.1 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.35);
    rect(-26, -250 + b, 52, 116, { wash: '#fbf8ee', washA: 1, w: 1.2, col: '#c8bca0' }); xstitch(-21, -244 + b, 7, 14, 7, diamond, 24702);
    pencil(spline([[-34, -262 + b], [0, -252 + b], [34, -262 + b]], false, 4), { w: 6, col: '#c8202a', pass2: false }); for (let i = 0; i < 7; i++) ell(-24 + i * 8, -258 + b + Math.abs(i - 3) * 1.2, 2, 2, { wash: '#1a1418', washA: 1, line: false });
    rect(-100, -126 + b, 200, 20, { wash: '#c8202a', washA: 1, w: 1.6, col: TM.line }); for (let k = 0; k < 10; k++) pencil([[-90 + k * 20, -122 + b], [-82 + k * 20, -110 + b]], { w: 2, col: '#f4c840', pass2: false });
    for (const dx of [44, 58]) pencil([[dx, -108 + b], [dx + 6, -58 + b]], { w: 5, col: '#c8202a', pass2: false });
  };
  COST6.kojoc = (OF, b, t, bp, L) => {                                     // молдавский кожушок: белая рубаха с вышитым воротом, чёрная безрукавка из овчины с цветной аппликацией, пояс-брыу
    hatch(bp.path, bp.bb, { gap: 8, a: 0.08, col: OF.topD, ang: 1.1, key: 24711, w: 1.1 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.35);
    pencil(spline([[-30, -262 + b], [0, -250 + b], [30, -262 + b]], false, 4), { w: 5, col: '#2a5aa8', pass2: false }); xstitch(-12, -246 + b, 4, 3, 6, (c, r) => (c + r) % 2 ? 1 : 0, 24712);
    for (const sd of [-1, 1]) { const v = shape([[sd * 26, -262 + b], [sd * 100, -236 + b], [sd * 104, -60 + b], [sd * 34, -60 + b], [sd * 22, -160 + b]], { wash: '#2a2220', washA: 1, w: 2.2, col: TM.line, key: 24713 + sd });
      shadeG(v.path, sd * 104, 0, sd * 30, 0, '#000000', 0.4); pencil([[sd * 26, -258 + b], [sd * 22, -160 + b], [sd * 34, -62 + b]], { w: 7, col: '#e8e0d0', pass2: false });
      for (let k = 0; k < 4; k++) { const y = -220 + k * 40 + b; ell(sd * 66, y, 9, 7, { wash: ['#d8343a', '#f4c040', '#3aa86a', '#d8343a'][k], washA: 1, w: 1, col: '#1a1418' }); for (const a of [0, 1.57, 3.14, 4.71]) ell(sd * 66 + Math.cos(a) * 12, y + Math.sin(a) * 10, 3, 3, { wash: '#f4ecd8', washA: 1, line: false }); } }
    rect(-100, -110 + b, 200, 22, { wash: '#8a2a1a', washA: 1, w: 1.6, col: TM.line }); for (let k = 0; k < 8; k++) pencil([[-90 + k * 25, -108 + b], [-80 + k * 25, -92 + b]], { w: 2, col: '#f4c040', pass2: false });
  };
  const TROPHY24 = { x: 32, y: -36 };
  const _c24 = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c24(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const x = TROPHY24.x, y = TROPHY24.y + bob;   // трофей №24: свекольная капля с точкой сметаны
    blob([[x, y - 16], [x - 9, y - 2], [x - 10, y + 8], [x, y + 14], [x + 10, y + 8], [x + 9, y - 2]], { wash: '#a8182a', washA: 0.75, line: false }); ell(x + 2, y + 4, 4, 3, { wash: '#fbf6ea', washA: 1, line: false }); ell(x - 3, y - 2, 2, 3, { wash: '#ff8a9a', washA: 0.8, line: false });
  };
})();
