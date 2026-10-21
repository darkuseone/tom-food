/* 001 — костюмы канала «ТОМ НА ВКУС»: тога с венком (хук), официант 1920-х, шеф-повар; сквозной фартук поверх любого костюма (OF.apron или pose.apron).
   Регистрация через OUTFIT / COST6 / HAT6 из engine/tom.js, фартук — обёрткой costume5 (рисуется после деталей костюма). */
(() => {
  Object.assign(OUTFIT, {
    toga: { top: '#f2ead6', topD: '#a89a7a', topL: '#fffaf0', pants: null, detail: 'toga', hat: 'laurel', boots: 'soft', long: 1 },
    waiter: { top: '#f6f2e8', topD: '#b4ac9a', topL: '#ffffff', pants: '#1c1c22', detail: 'waiter', collar: 'band', tie: 'bow', hat: null, boots: 'oxford', apron: 1 },
    chef: { top: '#f8f5ee', topD: '#b8b0a0', topL: '#ffffff', pants: '#2b2622', detail: 'chef', collar: 'band', hat: 'toque', boots: 'oxford', apron: 1 },
    aviatorA: Object.assign({}, OUTFIT.aviator, { apron: 1 }),
    directorA: Object.assign({}, OUTFIT.director, { apron: 1 }),
    tuxA: Object.assign({}, OUTFIT.victorian, { top: '#1a1a20', topD: '#08080a', topL: '#40404a', pants: '#1a1a20', hat: null, apron: 1 })
  });
  COST6.toga = (OF, b, t, bp, L) => {                                    // драпировка: длинная туника + пурпурная перевязь через плечо
    const sk = skirt6(OF, b, L, -118, -16, 92, 112, 9101);
    for (const f of [-0.5, 0, 0.45]) pencil(spline([[f * 80, -110 + b], [f * 90 + 10, -70 + b], [f * 100, -24 + b]], false, 5), { w: 2, col: OF.topD, a: 0.6, pass2: false });
    const sash = shape(spline([[-70, -244 + b], [-20, -236 + b], [40, -180 + b], [86, -110 + b], [96, -40 + b], [70, -40 + b], [56, -110 + b], [10, -176 + b], [-60, -214 + b]], true, 6), { wash: '#7a1e3a', washA: 1, w: 2.4, col: TM.line, key: 9102 });
    shadeG(sash.path, 100, 0, 0, 0, '#2a0614', 0.45); for (let k = 0; k < 5; k++) pencil([[-40 + k * 26, -224 + k * 26 + b], [-30 + k * 26, -206 + k * 26 + b]], { w: 2, col: '#c0506a', a: 0.6, pass2: false });
    pencil([[60, -108 + b], [96, -42 + b]], { w: 3, col: '#d6a842', a: 0.9, pass2: false }); nb(-56, -226 + b, 7, CU.gold);
  };
  HAT6.laurel = (t, o, fx) => {                                         // лавровый венок (съезжает на ухо, если o.laurelSlip)
    const sl = o.laurelSlip || 0; push(fx * 0.3 + sl * 40, -78 + sl * 20, 1, sl * 0.5);
    for (let i = 0; i < 18; i++) { const a = Math.PI + i / 17 * Math.PI, x = Math.cos(a) * 104, y = Math.sin(a) * 26;
      push(x, y, 1, a + Math.PI / 2 + (i % 2 ? 0.5 : -0.5)); blob([[0, 0], [-9, -14], [0, -30], [9, -14]], { wash: i % 3 ? '#6b8a2e' : '#8aa83e', washA: 1, w: 1.6, col: '#24340a' }); pop(); }
    pencil(ellPts(0, 0, 104, 26, 0, 0.5, 30).slice(0, 16), { w: 3, col: '#c99636', pass2: false }); pop();
  };
  COST6.waiter = (OF, b, t, bp, L) => {                                 // белый жакет официанта 1920-х: лацканы, латунные пуговицы, полотенце на руке
    hatch(bp.path, bp.bb, { gap: 7, a: 0.08, col: OF.topD, ang: 0.9, key: 9110, w: 1.2 });
    for (const sd of [-1, 1]) { const lp = poly([[sd * 28, -250 + b], [sd * 70, -244 + b], [sd * 46, -180 + b], [sd * 8, -150 + b]], { wash: '#ebe4d4', washA: 1, w: 2.2, col: TM.line, key: 9111 + sd }); shadeG(lp.path, 0, -150 + b, 0, -250 + b, OF.topD, 0.3); }
    for (let k = 0; k < 3; k++) for (const sd of [-1, 1]) nb(sd * 22, -146 + k * 22 + b, 4.5);
    pencil([[-50, -132 + b], [-26, -132 + b]], { w: 2, col: OF.topD, a: 0.7, pass2: false });
    const tw = shape(spline([[78, -200 + b], [96, -196 + b], [100, -120 + b], [90, -96 + b], [74, -120 + b]], true, 5), { wash: '#ffffff', washA: 1, w: 2, col: TM.line, key: 9113 });
    for (let k = 0; k < 3; k++) pencil([[80, -180 + k * 22 + b], [98, -178 + k * 22 + b]], { w: 2, col: '#7aa0c8', a: 0.7, pass2: false });
  };
  COST6.chef = (OF, b, t, bp, L) => {                                   // двубортный китель, красный шейный платок
    hatch(bp.path, bp.bb, { gap: 7, a: 0.08, col: OF.topD, ang: 0.9, key: 9120, w: 1.2 });
    pencil([[24, -244 + b], [30, -100 + b]], { w: 2, col: OF.topD, a: 0.7, pass2: false });
    for (let k = 0; k < 3; k++) for (const x of [-30, 14]) { ell(x, -214 + k * 30 + b, 6, 6, { wash: '#f0ece2', washA: 1, w: 1.6, col: TM.line }); pencil([[x - 3, -214 + k * 30 + b], [x + 3, -214 + k * 30 + b]], { w: 1, col: TM.line, a: 0.6, pass2: false }); }
    const sc = shape(spline([[-36, -246 + b], [0, -236 + b], [36, -246 + b], [14, -214 + b], [0, -200 + b], [-14, -214 + b]], true, 5), { wash: '#d9482b', washA: 1, w: 2, col: TM.line, key: 9121 });
    shadeG(sc.path, 30, 0, -30, 0, '#5a1006', 0.4);
  };
  HAT6.toque = (t, o, fx, L) => {                                       // поварской колпак
    const sw = Math.sin(t * 2.2) * 4; push(fx * 0.3, -64, 0.72);
    rect(-86, -60, 172, 60, { wash: '#f8f5ee', washA: 1, w: 2.6, col: TM.line, key: 9130 }); for (let k = 0; k < 6; k++) pencil([[-72 + k * 29, -56], [-70 + k * 29, -6]], { w: 1.4, col: '#b8b0a0', a: 0.6, pass2: false });
    const cap = blob([[-92, -54], [-130 + sw, -120], [-96, -196], [-30, -214], [30, -220 + sw], [100, -190], [130 + sw, -120], [92, -54]], { wash: '#fffdf8', washA: 1, w: 2.8, col: TM.line, key: 9131 });
    shadeG(cap.path, -L.side * 140, 0, L.side * 40, 0, '#a89e8a', 0.5); for (const x of [-50, 0, 46]) pencil([[x, -62], [x + 6, -170]], { w: 1.6, col: '#b8b0a0', a: 0.5, pass2: false }); pop();
  };
  // ---------------------------------------------------------------- сквозной фартук канала (поверх любого костюма)
  const _c5 = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c5(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob, Lx = L || { side: 1, rim: '#ffe3a8' };
    for (const sd of [-1, 1]) pencil([[sd * 24, -196 + b], [sd * 40, -246 + b]], { w: 5, col: '#c9b48a' });
    const ap = shape(spline([[-30, -198 + b], [30, -198 + b], [32, -132 + b], [62, -128 + b], [66, -52 + b], [0, -46 + b], [-66, -52 + b], [-62, -128 + b], [-32, -132 + b]], true, 6), { wash: '#efe2c4', washA: 1, w: 2.4, col: TM.line, key: 9140 });
    shadeG(ap.path, -Lx.side * 80, 0, Lx.side * 40, 0, '#a08a62', 0.45); hatch(ap.path, ap.bb, { gap: 6, a: 0.07, col: '#6a5a3a', ang: 1.3, key: 9141, w: 1.1 });
    ctx.save(); ctx.clip(ap.path); ctx.fillStyle = '#d9482b'; ctx.globalAlpha = 0.95; ctx.fillRect(-90, -70 + b, 180, 10); ctx.fillRect(-90, -56 + b, 180, 4); ctx.restore();
    pencil([[-62, -128 + b], [-84, -112 + b], [-78, -92 + b]], { w: 4, col: '#c9b48a', pass2: false }); pencil([[-62, -128 + b], [-90, -126 + b]], { w: 4, col: '#c9b48a', pass2: false });
    rect(-20, -112 + b, 40, 28, { wash: '#e4d4b0', washA: 1, w: 1.8, col: TM.line, key: 9142 }); dashL([[-18, -108 + b], [18, -108 + b]], '#8a7a5a', 0.6);
    ctx.save(); ctx.globalAlpha = 0.55; ctx.fillStyle = '#7a9a3a'; ctx.beginPath(); ctx.ellipse(34, -84 + b, 8, 5, 0.6, 0, 6.3); ctx.fill(); ctx.beginPath(); ctx.ellipse(42, -76 + b, 3, 2.4, 0, 0, 6.3); ctx.fill(); ctx.restore();   // пятно-трофей №1: ромэн
  };
})();
