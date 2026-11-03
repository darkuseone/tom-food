/* 017 — костюмы выпуска «Сюрстрёмминг»: балтийский рыбак (яркая жёлтая клеёнчатая куртка с тёмными пуговицами и поднятым воротом поверх тёмно-синего вязаного свитера, резиновые сапоги,
   шапка `souwester` — жёлтая зюйдвестка с широким задним и коротким передним полем) и немецкий судья 1980-х (чёрная мантия с широкой бархатной оторочкой борта и рукавов, белая рубашка
   с белым жабо-галстуком, шапка `barett` — мягкий плоский чёрный бархатный берет). Воротник/шея у обоих дорисовываются поверх манишки и лямок фартука (`neck17`).
   Трофей №17 на фартуке — вздутая консервная банка с зелёной вонючей волной. */
(() => {
  Object.assign(OUTFIT, {
    fiskA: { top: '#f2c21a', topD: '#a87808', topL: '#ffe46a', pants: '#1f2a44', shirt: '#1f2d52', detail: 'oilskin', hat: 'souwester', boots: 'rubber', cuff: '#26396a', apron: 1 },
    judgeA: { top: '#383842', topD: '#0e0e14', topL: '#6a6a7a', pants: null, shirt: '#f4f0e6', detail: 'robe', hat: 'barett', boots: 'shoe', cuff: '#08080b', apron: 1, long: 1 },
  });
  const gloss = (path, x0, y0, x1, y1, col, a) => { ctx.save(); ctx.clip(path); pencil([[x0, y0], [x1, y1]], { w: 5, col, a, pass2: false }); ctx.restore(); };
  COST6.oilskin = (OF, b, t, bp, L) => {                                   // клеёнчатая куртка: двубортные пуговицы, боковые клапаны, поднятый ворот, свитер в вырезе
    hatch(bp.path, bp.bb, { gap: 7, a: 0.1, col: OF.topD, ang: 0.9, key: 17100, w: 1.2 });
    shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.35);
    for (let k = 0; k < 4; k++) gloss(bp.path, -86 + k * 14, -236 + k * 34 + b, -62 + k * 14, -150 + k * 34 + b, OF.topL, 0.5);   // мокрые блики клеёнки
    for (let k = 0; k < 3; k++) gloss(bp.path, 52 + k * 14, -226 + k * 30 + b, 70 + k * 14, -160 + k * 30 + b, OF.topL, 0.4);
    for (const sd of [-1, 1]) {                                            // борта куртки и поднятые углы воротника
      poly([[sd * 36, -252 + b], [sd * 40, -214 + b], [sd * 14, -180 + b], [sd * 24, -112 + b], [sd * 56, -112 + b], [sd * 62, -240 + b]], { wash: OF.top, washA: 1, w: 2.2, col: L, key: 17102 + sd });
      for (let k = 0; k < 4; k++) { ell(sd * 46, -204 + k * 24 + b, 6.4, 6.4, { wash: '#2a2420', washA: 1, w: 1.4, col: TM.line }); ell(sd * 46 - 1.8, -206 + k * 24 + b, 1.8, 1.8, { wash: '#8a8076', washA: 0.8, line: false }); }
      const fl = poly([[sd * 66, -142 + b], [sd * 96, -138 + b], [sd * 98, -108 + b], [sd * 68, -104 + b]], { wash: OF.top, washA: 1, w: 2, col: L, key: 17106 + sd }); shadeG(fl.path, sd * 98, 0, sd * 66, 0, OF.topD, 0.4);   // клапан кармана
      pencil([[sd * 68, -134 + b], [sd * 96, -130 + b]], { w: 1.4, col: OF.topD, a: 0.8, pass2: false }); nb(sd * 82, -122 + b, 3.4, '#6a6258'); }
    pencil([[-104, -90 + b], [104, -90 + b]], { w: 4, col: OF.topD, a: 0.7, pass2: false });
    pencil([[-96, -98 + b], [96, -98 + b]], { w: 1.4, col: OF.topL, a: 0.5, pass2: false });                          // подгиб подола
  };
  COST6.robe = (OF, b, t, bp, L) => {                                      // мантия: чёрный подол с складками, белая рубашка, жабо, широкая бархатная оторочка борта
    hatch(bp.path, bp.bb, { gap: 7, a: 0.12, col: '#000', ang: 0.9, key: 17120, w: 1.2 });
    const sk = skirt6(OF, b, L, -120, -26, 92, 112, 17121);
    shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, '#000', 0.3);
    for (let k = 0; k < 5; k++) pencil(spline([[-50 + k * 25, -116 + b], [-58 + k * 29, -74 + b], [-62 + k * 31, -34 + b]], false, 5), { w: 1.4, col: OF.topL, a: 0.22, pass2: false });   // атласные блики складок
    for (const sd of [-1, 1]) {
      const vt = poly([[sd * 22, -258 + b], [sd * 74, -250 + b], [sd * 80, -170 + b], [sd * 74, -112 + b], [sd * 42, -112 + b], [sd * 40, -178 + b], [sd * 16, -210 + b]], { wash: '#050508', washA: 1, w: 2.4, col: TM.line, key: 17123 + sd });   // бархатная оторочка борта
      shadeG(vt.path, sd * 80, 0, sd * 24, 0, '#3a3a4a', 0.5); hatch(vt.path, vt.bb, { gap: 4, a: 0.14, col: '#4a4a5a', ang: 1.45, key: 17125 + sd, w: 0.9 });
      pencil([[sd * 60, -246 + b], [sd * 66, -176 + b], [sd * 62, -122 + b]], { w: 5, col: '#8a8a9c', a: 0.45, pass2: false }); pencil([[sd * 42, -176 + b], [sd * 40, -114 + b]], { w: 1.6, col: '#9a9aac', a: 0.7, pass2: false }); }
    pencil([[-70, -118 + b], [70, -118 + b]], { w: 3, col: '#000', a: 0.5, pass2: false });
  };
  HATBACK.souwester = () => {                                              // широкое заднее поле зюйдвестки: низко спускается на шею и плечи
    const bw = blob([[-112, -20], [-138, 30], [-146, 100], [-112, 138], [0, 148], [112, 138], [146, 100], [138, 30], [112, -20], [0, -6]], { wash: '#d4a410', washA: 1, w: 3, col: TM.line, key: 17140 });
    shadeG(bw.path, 0, 150, 0, 20, '#6a4204', 0.75); hatch(bw.path, bw.bb, { gap: 6, a: 0.1, col: '#6a4604', ang: 1.1, key: 17141, w: 1 });
    pencil(spline([[-136, 112], [-70, 138], [0, 144], [70, 138], [136, 112]], false, 6), { w: 2.4, col: '#fff0a0', a: 0.5, pass2: false });
  };
  HAT6.souwester = (t, o, fx, L) => {                                      // зюйдвестка: клеёнчатый купол со швами, короткий передний козырёк, завязки у ушей
    push(fx * 0.3, -96, 0.82);
    for (const sd of [-1, 1]) pencil(spline([[sd * 100, 18], [sd * 108, 54], [sd * 100, 92]], false, 5), { w: 2.6, col: '#3a2a14', pass2: false });
    const cr = blob([[-98, 14], [-98, -36], [-64, -82], [0, -100], [64, -82], [98, -36], [98, 14], [0, 8]], { wash: '#f2c21a', washA: 1, w: 2.8, col: TM.line, key: 17150 });
    shadeG(cr.path, 98, 0, -30, 0, '#7a5206', 0.5); hatch(cr.path, cr.bb, { gap: 6, a: 0.08, col: '#7a5206', ang: 1.2, key: 17151, w: 1 });
    for (const x of [-52, -18, 18, 52]) pencil(spline([[x * 0.5, -98 + Math.abs(x) * 0.12], [x * 1.1, -50], [x * 1.4, 8]], false, 5), { w: 1.6, col: '#a87808', a: 0.7, pass2: false });   // швы клиньев
    pencil(spline([[-60, -76], [-20, -92], [34, -90]], false, 5), { w: 5, col: '#fff2a0', a: 0.55, pass2: false });
    const fb = blob([[-106, 8], [-80, 30], [-30, 40], [30, 40], [80, 30], [106, 8], [0, 0]], { wash: '#e8b814', washA: 1, w: 2.6, col: TM.line, key: 17152 });   // короткий передний козырёк
    shadeG(fb.path, 0, 44, 0, 4, '#7a5206', 0.5); pencil(spline([[-96, 14], [-50, 34], [0, 38], [50, 34], [96, 14]], false, 5), { w: 1.4, col: '#fff0a0', a: 0.5, pass2: false });
    for (const sd of [-1, 1]) ell(sd * 100, 20, 4.5, 4.5, { wash: '#2a2420', washA: 1, w: 1.2, col: TM.line });
    pop();
  };
  HAT6.barett = (t, o, fx, L) => {                                         // судейский берет: мягкий плоский чёрный бархат, шире околыша, наклонён к одному уху
    push(fx * 0.3, -96, 0.82);
    const bd = rect(-84, -6, 168, 22, { wash: '#0c0c10', washA: 1, w: 2.2, col: TM.line, key: 17160 }); shadeG(bd.path, 84, 0, -84, 0, '#000', 0.5);   // околыш
    const cr = blob([[-96, 2], [-124, -28], [-110, -62], [-60, -80], [0, -84], [64, -78], [120, -60], [132, -30], [96, 2], [0, 12]], { wash: '#16161c', washA: 1, w: 2.8, col: TM.line, key: 17161 });   // плоская мягкая тулья, нависающая к правому уху
    shadeG(cr.path, 130, 0, -90, 0, '#000', 0.55); hatch(cr.path, cr.bb, { gap: 4, a: 0.16, col: '#4a4a5a', ang: 1.4, key: 17162, w: 0.9 });
    pencil(spline([[-80, -60], [-30, -74], [40, -72]], false, 5), { w: 5, col: '#6a6a7c', a: 0.4, pass2: false });
    for (let k = 0; k < 4; k++) pencil([[-60 + k * 38, -4], [-46 + k * 38, -66]], { w: 1.2, col: '#000', a: 0.35, pass2: false });   // складки бархата
    pencil([[-84, 14], [84, 14]], { w: 1.6, col: '#3a3a46', a: 0.8, pass2: false });
    pop();
  };
  const neck17 = (OF, b, L) => {                                           // шея поверх белой манишки: свитер + поднятый ворот / белая рубашка + жабо; затем лямки фартука заново
    if (OF.detail === 'oilskin') {
      const sw = poly([[-46, -262 + b], [46, -262 + b], [38, -220 + b], [0, -200 + b], [-38, -220 + b]], { wash: OF.shirt, washA: 1, w: 2, col: L, key: 17101 });
      shadeG(sw.path, 46, 0, -46, 0, '#0a1230', 0.4);
      ctx.save(); ctx.clip(sw.path); for (let i = 0; i < 12; i++) pencil([[-44 + i * 8, -262 + b], [-44 + i * 8 + (i - 6) * 0.7, -198 + b]], { w: 1.6, col: '#0a1228', a: 0.55, pass2: false }); for (let k = 0; k < 5; k++) pencil([[-46, -254 + k * 12 + b], [46, -254 + k * 12 + b]], { w: 1, col: '#4a6aa8', a: 0.3, pass2: false }); ctx.restore();
      const nr = blob([[-56, -262 + b], [-34, -278 + b], [34, -278 + b], [56, -262 + b], [40, -240 + b], [0, -232 + b], [-40, -240 + b]], { wash: '#26396a', washA: 1, w: 2, col: TM.line, key: 17108 });   // ворот свитера
      ctx.save(); ctx.clip(nr.path); for (let i = 0; i < 11; i++) pencil([[-52 + i * 10.5, -282 + b], [-52 + i * 10.5, -230 + b]], { w: 1.4, col: '#0a1228', a: 0.55, pass2: false }); ctx.restore();
      for (const sd of [-1, 1]) {                                          // поднятые углы воротника куртки
        const cl = poly([[sd * 30, -264 + b], [sd * 74, -276 + b], [sd * 88, -232 + b], [sd * 44, -210 + b]], { wash: OF.topL, washA: 1, w: 2.4, col: L, key: 17104 + sd }); shadeG(cl.path, sd * 88, 0, sd * 26, 0, OF.topD, 0.5);
        pencil([[sd * 36, -260 + b], [sd * 76, -270 + b]], { w: 2.4, col: '#fff8c0', a: 0.7, pass2: false }); pencil([[sd * 46, -214 + b], [sd * 86, -232 + b]], { w: 1.6, col: OF.topD, a: 0.7, pass2: false }); }
    } else if (OF.detail === 'robe') {
      const sh = poly([[-48, -262 + b], [48, -262 + b], [30, -214 + b], [0, -204 + b], [-30, -214 + b]], { wash: OF.shirt, washA: 1, w: 2, col: L, key: 17122 }); shadeG(sh.path, 48, 0, -48, 0, '#a8a090', 0.35);
      for (const sd of [-1, 1]) { poly([[sd * 8, -264 + b], [sd * 58, -268 + b], [sd * 52, -236 + b], [sd * 22, -224 + b]], { wash: '#f8f6ee', washA: 1, w: 1.8, col: '#8a867a', key: 17127 + sd });   // воротничок
        pencil([[sd * 14, -252 + b], [sd * 48, -254 + b]], { w: 1, col: '#c8c4ba', a: 0.7, pass2: false });
        const jb = poly([[sd * 2, -236 + b], [sd * 22, -230 + b], [sd * 20, -208 + b], [sd * 4, -204 + b]], { wash: '#ffffff', washA: 1, w: 1.6, col: '#8a867a', key: 17129 + sd });   // жабо-галстук (два белых язычка)
        for (let k = 0; k < 3; k++) pencil([[sd * 6, -230 + k * 7 + b], [sd * 18, -228 + k * 7 + b]], { w: 1, col: '#b8b4aa', a: 0.8, pass2: false }); }
    } else return;
    for (const sd of [-1, 1]) pencil([[sd * 24, -196 + b], [sd * 40, -246 + b]], { w: 5, col: '#c9b48a' });
  };
  const TROPHY17 = { x: -6, y: -88 };
  const _c17e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c17e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob; neck17(OF, b, L || { side: 1, rim: '#ffe3a8' });
    const x = TROPHY17.x, y = TROPHY17.y + b;                             // пятно-трофей №17: вздутая банка сюрстрёмминга + зелёная вонючая волна
    ell(x, y + 13, 11.5, 3.6, { wash: '#9aa0a8', washA: 1, w: 1.2, col: '#4a4e56' });                                  // выпуклое донышко
    const bd = blob([[x - 11, y - 9], [x - 14.5, y - 2], [x - 14.5, y + 7], [x - 11, y + 12], [x, y + 14], [x + 11, y + 12], [x + 14.5, y + 7], [x + 14.5, y - 2], [x + 11, y - 9], [x, y - 11]], { wash: '#c9ced4', washA: 1, w: 1.5, col: '#4a4e56' });
    shadeG(bd.path, x + 15, 0, x - 15, 0, '#6a7078', 0.55);
    ctx.save(); ctx.clip(bd.path); ctx.fillStyle = '#d9482b'; ctx.globalAlpha = 0.95; ctx.fillRect(x - 16, y - 3, 32, 9); ctx.fillStyle = '#f6efe0'; ctx.fillRect(x - 16, y - 0.5, 32, 3.6); ctx.restore();   // бумажная этикетка
    ell(x - 2, y + 1.6, 3.4, 1.6, { wash: '#2a5aa8', washA: 0.9, line: false });
    ell(x, y - 11, 11.5, 4.6, { wash: '#e4e8ec', washA: 1, w: 1.3, col: '#4a4e56' }); pencil([[x - 7, y - 11], [x + 6, y - 11.6]], { w: 1.2, col: '#8a9098', a: 0.8, pass2: false });   // выпуклая крышка
    pencil([[x - 9, y - 7], [x - 10, y + 10]], { w: 1.8, col: '#ffffff', a: 0.8, pass2: false });
    for (let i = 0; i < 3; i++) {                                           // зелёные волны запаха
      const wx = x - 7 + i * 7, w = [[wx, y - 18], [wx + 5, y - 25], [wx - 4, y - 32], [wx + 4, y - 39], [wx - 2, y - 46]];
      pencil(spline(w, false, 5), { w: 2.6, col: i === 1 ? '#5a9a1a' : '#7cc02a', a: 0.9, pass2: false }); }
  };
})();
