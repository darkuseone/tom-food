/* 018 — костюмы выпуска «Пицца Маргарита»: неаполитанский пиццайоло (белая куртка с закатанными белыми манжетами, пуговицы, накладные карманы, мучные и томатные пятна, красный платок-бандана
   узлом на шее, тёмные брюки, шапка `pizzacap` — низкая мягкая белая шапочка-«пирожок», набок) и придворный лакей Италии 1889 (тёмно-синий фрак с золотым галуном по борту и подолу, красный жилет
   с золотыми пуговицами, белый шейный платок, белые манжеты вместо перчаток, шапка `bicorne` — чёрная двууголка с золотым кантом и кокардой). Перчатки движка (`gloves`) коричневые рабочие — не годятся,
   поэтому «белая перчатка» — это белая `cuff`-трубка руки. Шея у обоих дорисовывается поверх манишки и лямок фартука (`neck18`).
   Трофей №18 на фартуке — капля томатного соуса с листиком базилика. */
(() => {
  Object.assign(OUTFIT, {
    pizzA: { top: '#f4f1ea', topD: '#a8a294', topL: '#ffffff', pants: '#2a2a34', shirt: '#f4f1ea', detail: 'pizzaiolo', hat: 'pizzacap', boots: 'shoe', cuff: '#f6f3ec', apron: 1 },
    liveryA: { top: '#1c2c5e', topD: '#0a1230', topL: '#4a62a8', pants: '#ece8dc', shirt: '#f8f6ee', detail: 'livery', hat: 'bicorne', boots: 'shoe', cuff: '#fbfaf4', apron: 1, long: 1 },
  });
  const GOLD = '#d6a842', GOLDL = '#fff0a0', GOLDD = '#8a6a10';
  const braid = (pts, w) => { const s = spline(pts, false, 5); pencil(s, { w: w || 4, col: GOLD, pass2: false }); pencil(s, { w: Math.max(1, (w || 4) * 0.35), col: GOLDL, a: 0.7, pass2: false }); };   // золотой галун
  COST6.pizzaiolo = (OF, b, t, bp, L) => {                                 // куртка пиццайоло: белая, двубортная, пуговицы, накладные карманы, пятна муки и соуса
    hatch(bp.path, bp.bb, { gap: 7, a: 0.1, col: OF.topD, ang: 0.9, key: 18100, w: 1.2 });
    shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.4);
    for (let k = 0; k < 4; k++) pencil(spline([[-92 + k * 8, -230 + k * 26 + b], [-84 + k * 9, -200 + k * 26 + b], [-90 + k * 8, -176 + k * 26 + b]], false, 5), { w: 1.4, col: OF.topD, a: 0.3, pass2: false });   // складки на локтях и боках
    for (const sd of [-1, 1]) {                                            // борта: воротник-стойка и застёжка с пуговицами в два ряда
      const lp = poly([[sd * 8, -258 + b], [sd * 56, -256 + b], [sd * 62, -190 + b], [sd * 56, -112 + b], [sd * 20, -112 + b], [sd * 14, -190 + b]], { wash: OF.top, washA: 1, w: 2.2, col: L, key: 18102 + sd });
      shadeG(lp.path, sd * 62, 0, sd * 8, 0, OF.topD, 0.3);
      for (let k = 0; k < 4; k++) { ell(sd * 36, -216 + k * 26 + b, 5.6, 5.6, { wash: '#e8e2d2', washA: 1, w: 1.4, col: '#7a7464' }); ell(sd * 36 - 1.4, -217.4 + k * 26 + b, 1.5, 1.5, { wash: '#ffffff', washA: 0.9, line: false }); }   // перламутровые пуговицы
      const pk = rect(sd * 62 - 17, -150 + b, 34, 26, { wash: OF.top, washA: 1, w: 1.6, col: L, key: 18106 + sd }); shadeG(pk.path, sd * 80, 0, sd * 44, 0, OF.topD, 0.3);   // накладной карман
      pencil([[sd * 62 - 17, -144 + b], [sd * 62 + 17, -144 + b]], { w: 1.2, col: OF.topD, a: 0.6, pass2: false }); }
    pencil([[0, -250 + b], [0, -112 + b]], { w: 1.6, col: OF.topD, a: 0.5, pass2: false });
    ctx.save(); ctx.clip(bp.path);                                         // мучные отпечатки ладоней и брызги томата
    for (let i = 0; i < 7; i++) ell(-92 + i * 29 + (i % 2) * 8, -232 + (i * 37) % 120 + b, 12 + (i % 3) * 3, 7 + (i % 2) * 2, { wash: '#d8d2c2', washA: 0.5, line: false });
    for (const [px, py, pr] of [[-76, -172, 3.4], [-66, -166, 2], [78, -204, 3], [86, -196, 1.8], [-48, -128, 2.4]]) ell(px, py + b, pr, pr, { wash: '#c8321a', washA: 0.9, line: false });
    ctx.restore();
    pencil([[-104, -92 + b], [104, -92 + b]], { w: 4, col: OF.topD, a: 0.5, pass2: false });
  };
  COST6.livery = (OF, b, t, bp, L) => {                                    // ливрея: синий фрак с золотым галуном по борту, красный жилет, золотые пуговицы, фалды
    hatch(bp.path, bp.bb, { gap: 6, a: 0.12, col: '#000', ang: 0.9, key: 18120, w: 1.2 });
    const sk = skirt6(OF, b, L, -120, -34, 86, 108, 18121);
    shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, '#000', 0.3);
    const vs = poly([[-34, -252 + b], [34, -252 + b], [44, -112 + b], [0, -98 + b], [-44, -112 + b]], { wash: '#b8221a', washA: 1, w: 2, col: L, key: 18122 });   // красный жилет
    shadeG(vs.path, 44, 0, -30, 0, '#4a0a08', 0.4);
    for (let k = 0; k < 4; k++) pencil([[-30, -222 + k * 28 + b], [30, -222 + k * 28 + b]], { w: 1, col: '#e8584a', a: 0.35, pass2: false });   // шёлковая строчка
    for (const sd of [-1, 1]) {
      const lp = poly([[sd * 14, -258 + b], [sd * 70, -250 + b], [sd * 76, -170 + b], [sd * 68, -104 + b], [sd * 36, -104 + b], [sd * 36, -176 + b], [sd * 30, -214 + b]], { wash: OF.top, washA: 1, w: 2.4, col: L, key: 18124 + sd });   // борт фрака
      shadeG(lp.path, sd * 76, 0, sd * 24, 0, OF.topD, 0.4); hatch(lp.path, lp.bb, { gap: 5, a: 0.1, col: OF.topL, ang: 1.4, key: 18126 + sd, w: 0.9 });
      braid([[sd * 30, -214 + b], [sd * 36, -176 + b], [sd * 36, -106 + b]], 5);                                           // золотой галун по краю борта
      braid([[sd * 14, -256 + b], [sd * 70, -248 + b], [sd * 74, -170 + b], [sd * 68, -106 + b]], 3.6);
      for (let k = 0; k < 3; k++) nb(sd * 54, -206 + k * 30 + b, 4, GOLD);                                                  // пуговицы с гербом
      const fl = poly([[sd * 74, -146 + b], [sd * 98, -142 + b], [sd * 98, -112 + b], [sd * 72, -108 + b]], { wash: OF.top, washA: 1, w: 1.8, col: L, key: 18128 + sd });   // клапан кармана с галуном
      shadeG(fl.path, sd * 98, 0, sd * 72, 0, OF.topD, 0.4); braid([[sd * 76, -142 + b], [sd * 96, -138 + b]], 2.6); }
    for (let k = 0; k < 5; k++) pencil(spline([[-60 + k * 30, -112 + b], [-66 + k * 33, -74 + b], [-70 + k * 35, -38 + b]], false, 5), { w: 1.4, col: OF.topL, a: 0.22, pass2: false });   // складки фалд
    braid([[-70, -118 + b], [70, -118 + b]], 3);
  };
  HAT6.pizzacap = (t, o, fx, L) => {                                       // шапочка пиццайоло: низкий мягкий белый «пирожок», съехал набок, лёгкая мука
    push(fx * 0.3, -90, 0.82);
    const bd = rect(-86, -2, 172, 20, { wash: '#efeae0', washA: 1, w: 2.2, col: TM.line, key: 18140 }); shadeG(bd.path, 86, 0, -86, 0, '#a8a294', 0.4);   // околыш
    for (let k = 0; k < 8; k++) pencil([[-76 + k * 22, 0], [-76 + k * 22, 16]], { w: 1, col: '#b8b0a0', a: 0.4, pass2: false });
    const cr = blob([[-84, 2], [-100, -40], [-80, -96], [-20, -122], [50, -116], [100, -80], [104, -30], [84, 2], [0, 10]], { wash: '#f4f0e4', washA: 1, w: 2.8, col: TM.line, key: 18141 });   // мягкая тулья, свисает к правому уху
    shadeG(cr.path, 126, 0, -80, 0, '#a8a294', 0.5); hatch(cr.path, cr.bb, { gap: 7, a: 0.07, col: '#8a8474', ang: 1.2, key: 18142, w: 1 });
    pencil(spline([[-70, -38], [-30, -62], [40, -64]], false, 5), { w: 5, col: '#ffffff', a: 0.8, pass2: false });
    for (const [x0, y0, x1, y1] of [[-44, -10, -34, -50], [10, -8, 22, -56], [64, -6, 84, -40]]) pencil(spline([[x0, y0], [(x0 + x1) / 2 + 6, (y0 + y1) / 2], [x1, y1]], false, 5), { w: 1.4, col: '#a8a294', a: 0.5, pass2: false });   // складки ткани
    for (const [px, py] of [[-60, -30], [34, -48], [84, -22]]) ell(px, py, 7, 4, { wash: '#e4dfd2', washA: 0.7, line: false });   // мучные пятна
    pop();
  };
  HAT6.bicorne = (t, o, fx, L) => {                                        // двууголка: чёрная, поля загнуты вверх с двух сторон, золотой кант, кокарда
    push(fx * 0.3, -96, 0.82);
    const br = [[-146, -4], [-128, -44], [-70, -62], [0, -52], [70, -62], [128, -44], [146, -4], [90, 22], [0, 32], [-90, 22]];
    const h = blob(br, { wash: '#14141a', washA: 1, w: 2.6, col: TM.line, key: 18150 }); shadeG(h.path, 130, 0, -40, 0, '#000', 0.45);
    const cr = blob([[-70, -22], [-60, -84], [-24, -104], [24, -104], [60, -84], [70, -22], [0, -6]], { wash: '#1e1e26', washA: 1, w: 2.2, col: TM.line, key: 18151 });   // тулья
    shadeG(cr.path, 70, 0, -30, 0, '#000', 0.45); hatch(cr.path, cr.bb, { gap: 4, a: 0.12, col: '#5a5a68', ang: 1.4, key: 18152, w: 0.9 });
    pencil(spline([[-48, -90], [-10, -102], [32, -96]], false, 5), { w: 3, col: '#6a6a7a', a: 0.5, pass2: false });
    const edge = spline(br.concat([br[0]]), false, 6); pencil(edge, { w: 3.6, col: GOLD, pass2: false }); pencil(edge, { w: 1.2, col: GOLDL, a: 0.65, pass2: false });   // золотой кант
    pencil([[-70, -24], [0, -8], [70, -24]], { w: 2.6, col: GOLD, pass2: false });
    for (const sd of [-1, 1]) { nb(sd * 128, -24, 4.4, GOLD); nb(sd * 128, -24, 1.8, GOLDL); }                      // пуговицы-застёжки загнутых полей
    ell(0, 2, 13, 13, { wash: '#b8221a', washA: 1, w: 1.4, col: TM.line }); ell(0, 2, 8, 8, { wash: '#f8f6ee', washA: 1, w: 1 }); ell(0, 2, 3.4, 3.4, { wash: '#2a8a4a', washA: 1, w: 0.8 });   // кокарда (триколор Италии)
    pop();
  };
  const neck18 = (OF, b, L) => {                                           // шея поверх белой манишки: красный платок узлом / белый шейный платок; затем лямки фартука заново
    if (OF.detail === 'pizzaiolo') {
      const sc = poly([[-46, -262 + b], [46, -262 + b], [34, -230 + b], [0, -204 + b], [-34, -230 + b]], { wash: '#c8221a', washA: 1, w: 2, col: L, key: 18101 });   // красный платок-треугольник
      shadeG(sc.path, 46, 0, -46, 0, '#4a0a08', 0.45);
      for (let i = 0; i < 9; i++) ell(-30 + (i % 5) * 15, -252 + Math.floor(i / 5) * 18 + (i % 2) * 6 + b, 2.2, 2.2, { wash: '#f8e6e0', washA: 0.9, line: false });   // белый горошек
      pencil([[-40, -258 + b], [-4, -208 + b]], { w: 1.4, col: '#e8584a', a: 0.6, pass2: false });
      ell(0, -208 + b, 11, 9, { wash: '#a8180f', washA: 1, w: 1.8, col: TM.line, key: 18108 });                        // узел
      for (const sd of [-1, 1]) poly([[sd * 4, -204 + b], [sd * 22, -190 + b], [sd * 14, -170 + b], [sd * 2, -190 + b]], { wash: '#b81e14', washA: 1, w: 1.6, col: TM.line, key: 18109 + sd });   // два хвостика
      pencil([[-4, -212 + b], [4, -204 + b]], { w: 1.2, col: '#4a0a08', a: 0.8, pass2: false });
    } else if (OF.detail === 'livery') {
      const sh = poly([[-48, -262 + b], [48, -262 + b], [30, -216 + b], [0, -204 + b], [-30, -216 + b]], { wash: OF.shirt, washA: 1, w: 2, col: L, key: 18123 }); shadeG(sh.path, 48, 0, -48, 0, '#a8a090', 0.35);
      for (const sd of [-1, 1]) {
        const cl = poly([[sd * 8, -266 + b], [sd * 62, -270 + b], [sd * 58, -238 + b], [sd * 26, -226 + b]], { wash: '#1c2c5e', washA: 1, w: 1.8, col: L, key: 18130 + sd });   // стоячий синий воротник
        braid([[sd * 12, -262 + b], [sd * 58, -266 + b]], 2.6); pencil([[sd * 14, -240 + b], [sd * 50, -244 + b]], { w: 1, col: GOLDD, a: 0.6, pass2: false }); }
      const cv = poly([[-18, -246 + b], [18, -246 + b], [14, -218 + b], [-14, -218 + b]], { wash: '#ffffff', washA: 1, w: 1.6, col: '#8a867a', key: 18132 });   // белый шейный платок
      for (let k = 0; k < 4; k++) pencil([[-12, -240 + k * 7 + b], [12, -238 + k * 7 + b]], { w: 1, col: '#b8b4aa', a: 0.8, pass2: false });
      ell(0, -222 + b, 6, 5, { wash: '#f4f2ea', washA: 1, w: 1.2, col: '#8a867a' });
    } else return;
    for (const sd of [-1, 1]) pencil([[sd * 24, -196 + b], [sd * 40, -246 + b]], { w: 5, col: '#c9b48a' });
  };
  const TROPHY18 = { x: 46, y: -98 };
  const _c18e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c18e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob; neck18(OF, b, L || { side: 1, rim: '#ffe3a8' });
    const x = TROPHY18.x, y = TROPHY18.y + b;                              // пятно-трофей №18: капля томатного соуса + листик базилика
    const dr = blob([[x - 15, y + 6], [x - 13, y - 4], [x - 5, y - 10], [x + 4, y - 12], [x + 14, y - 6], [x + 16, y + 4], [x + 8, y + 11], [x - 6, y + 12]], { wash: '#c8321a', washA: 0.97, w: 1.2, col: '#7a140c' });   // пятно соуса
    shadeG(dr.path, x + 16, 0, x - 15, 0, '#6a0e08', 0.45);
    ell(x - 7, y - 3, 4, 2.4, { wash: '#f06a50', washA: 0.8, line: false }); pencil([[x - 11, y - 6], [x - 3, y - 9]], { w: 1.4, col: '#ffb09a', a: 0.8, pass2: false });   // блик
    for (const [dx, dy, r] of [[18, 10, 2.6], [22, 3, 1.8], [-19, 9, 2]]) ell(x + dx, y + dy, r, r * 1.2, { wash: '#c8321a', washA: 0.95, line: false });   // брызги
    const lf = blob([[x - 2, y - 2], [x + 2, y - 12], [x + 11, y - 20], [x + 20, y - 18], [x + 21, y - 10], [x + 14, y - 2], [x + 5, y + 2]], { wash: '#3f9a3a', washA: 1, w: 1.4, col: '#1c5a1c' });   // лист базилика
    shadeG(lf.path, x + 22, 0, x - 2, 0, '#1c5a1c', 0.4);
    pencil([[x, y - 1], [x + 8, y - 8], [x + 18, y - 16]], { w: 1.2, col: '#bfe49a', a: 0.85, pass2: false });                  // средняя жилка
    for (const [ax, ay, bx, by] of [[x + 5, y - 6, x + 6, y - 14], [x + 10, y - 10, x + 15, y - 8], [x + 12, y - 13, x + 14, y - 18]]) pencil([[ax, ay], [bx, by]], { w: 0.9, col: '#bfe49a', a: 0.55, pass2: false });
  };
})();
/* 018 — худи канала для хука: тёмно-зелёное с надписью «ТОМ», красная кепка «Т», фартук. */
OUTFIT.hoodiePZ = Object.assign({}, OUTFIT.hoodieA, { top: '#2e5a3a', topD: '#14301c', topL: '#4e8a5a', print: 'ТОМ', capTxt: 'Т', capCol: '#c8301e', capTxtCol: '#f6efd8', printCol: '#f4ecd6', accent: '#e8b53a', apron: 1 });
