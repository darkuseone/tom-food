/* 015 — костюмы выпуска «Хамон»: хамонеро-кортадор в тапас-баре (белый двубортный китель с двумя рядами чёрных пуговиц + бабочка), Страбон (кремовый хитон + терракотовый
   гиматий через плечо, без шапки), андалусский поркверо (овчинная жилетка, красный платок, шляпа `campo` — сомбреро кордобес). Трофей №15 на фартуке — ломтик хамона и жёлудь. */
(() => {
  Object.assign(OUTFIT, {
    cortA: { top: '#f8f5ee', topD: '#b8b0a0', topL: '#ffffff', pants: '#1a1a20', detail: 'cortador', collar: 'band', tie: 'bow', hat: null, boots: 'oxford', apron: 1 },
    geoA: { top: '#efe3c4', topD: '#a8946a', topL: '#fff8e0', pants: null, detail: 'geo', hat: null, boots: 'soft', apron: 1, long: 1 },
    porqA: { top: '#f2efe6', topD: '#b0a690', topL: '#ffffff', pants: '#2a2622', shirt: '#f2efe6', detail: 'porquero', hat: 'campo', boots: 'rider', apron: 1 },
  });
  COST6.cortador = (OF, b, t, bp, L) => {                                  // двубортный китель: два ряда чёрных пуговиц, внахлёст борт, нагрудный карман
    hatch(bp.path, bp.bb, { gap: 7, a: 0.08, col: OF.topD, ang: 0.9, key: 15120, w: 1.2 });
    pencil([[16, -244 + b], [22, -100 + b]], { w: 2, col: OF.topD, a: 0.8, pass2: false }); pencil([[-18, -240 + b], [-24, -100 + b]], { w: 1.4, col: OF.topD, a: 0.5, pass2: false });
    for (let k = 0; k < 4; k++) for (const x of [-30, 26]) { ell(x, -214 + k * 28 + b, 6, 6, { wash: '#1a1a1e', washA: 1, w: 1.4, col: TM.line }); ell(x - 1.5, -216 + k * 28 + b, 1.8, 1.8, { wash: '#8a8a94', washA: 0.8, line: false }); }
    rect(-62, -188 + b, 26, 20, { wash: '#f2eee4', washA: 1, w: 1.4, col: L }); pencil([[-58, -184 + b], [-40, -184 + b]], { w: 1.4, col: '#b8221a', a: 0.8, pass2: false });
    pencil([[-60, -112 + b], [60, -112 + b]], { w: 2, col: OF.topD, a: 0.6, pass2: false });
  };
  COST6.geo = (OF, b, t, bp, L) => {                                       // хитон до колен + терракотовый гиматий через левое плечо, ремешок цвета сандалии
    const sk = skirt6(OF, b, L, -118, -16, 92, 112, 15130);
    for (const f of [-0.5, 0, 0.45]) pencil(spline([[f * 80, -110 + b], [f * 90 + 10, -70 + b], [f * 100, -24 + b]], false, 5), { w: 2, col: OF.topD, a: 0.6, pass2: false });
    rect(-62, -128 + b, 124, 14, { wash: '#b89a64', washA: 1, w: 1.6, col: L }); nb(0, -121 + b, 4, CU.gold);
    const hm = shape(spline([[-84, -246 + b], [-26, -240 + b], [24, -196 + b], [70, -150 + b], [92, -96 + b], [84, -34 + b], [30, -44 + b], [-4, -100 + b], [-46, -170 + b], [-86, -200 + b]], true, 6), { wash: '#b8502e', washA: 1, w: 2.4, col: TM.line, key: 15131 });
    shadeG(hm.path, 100, 0, 0, 0, '#4a1408', 0.45);
    for (let k = 0; k < 5; k++) pencil(spline([[-60 + k * 22, -226 + k * 18 + b], [-46 + k * 24, -196 + k * 22 + b], [-30 + k * 28, -170 + k * 26 + b]], false, 4), { w: 1.8, col: '#6a2410', a: 0.55, pass2: false });
    pencil([[84, -96 + b], [86, -36 + b]], { w: 3, col: '#e0b050', a: 0.9, pass2: false });
  };
  COST6.porquero = (OF, b, t, bp, L) => {                                  // белая рубаха, овчинная жилетка с меховой оторочкой, красный платок на шее
    hatch(bp.path, bp.bb, { gap: 7, a: 0.08, col: OF.topD, ang: 0.9, key: 15140, w: 1.2 });
    for (const sd of [-1, 1]) { const v = poly([[sd * 14, -246 + b], [sd * 62, -244 + b], [sd * 66, -118 + b], [sd * 22, -116 + b]], { wash: '#8a5a2e', washA: 1, w: 2.2, col: L, key: 15141 + sd }); shadeG(v.path, sd * 70, 0, 0, 0, '#3a2210', 0.45);
      for (let i = 0; i < 9; i++) pencil([[sd * (20 + (i % 3) * 14), -230 + i * 12 + b], [sd * (26 + (i % 3) * 14), -222 + i * 12 + b]], { w: 2, col: '#5a3a1a', a: 0.55, pass2: false });
      for (let i = 0; i < 8; i++) ell(sd * (14 + (i % 2) * 2), -240 + i * 16 + b, 6, 8, { wash: '#f4ecd8', washA: 0.95, w: 0.8, col: '#b8a888' }); }
    for (let k = 0; k < 3; k++) nb(0, -196 + k * 28 + b, 3.6, CU.gold);
    const kc = shape(spline([[-40, -250 + b], [0, -240 + b], [40, -250 + b], [18, -214 + b], [0, -196 + b], [-18, -214 + b]], true, 5), { wash: '#c8221a', washA: 1, w: 2, col: TM.line, key: 15143 });
    shadeG(kc.path, 30, 0, -30, 0, '#5a0a06', 0.4); for (let i = 0; i < 5; i++) ell(-20 + i * 10, -230 + (i % 2) * 8 + b, 1.6, 1.6, { wash: '#ffffff', washA: 0.8, line: false });
    pencil([[-60, -118 + b], [60, -118 + b]], { w: 8, col: '#2a1a0e', pass2: false }); rect(-9, -124 + b, 18, 12, { wash: '#c8a050', washA: 1, w: 1.2, col: L });
  };
  HAT6.campo = (t, o, fx, L) => {                                          // шляпа кордобес: плоская низкая тулья, прямые широкие поля, тонкая лента
    push(fx * 0.3, -96, 0.82);
    ell(0, 6, 136, 15, { wash: '#2a1e16', washA: 1, w: 2.4, col: TM.line, key: 15150 });
    const c = rect(-64, -48, 128, 56, { wash: '#33261c', washA: 1, w: 2.4, col: TM.line, key: 15151 }); shadeG(c.path, 64, 0, -30, 0, '#0e0806', 0.5);
    ell(0, -48, 64, 11, { wash: '#4a3828', washA: 1, w: 1.8, col: TM.line }); rect(-64, -6, 128, 10, { wash: '#8a1a14', washA: 1, w: 1.2, col: TM.line });
    for (let i = 0; i < 9; i++) pencil([[-120 + i * 28, 10], [-112 + i * 28, 18]], { w: 1.2, col: '#0e0806', a: 0.5, pass2: false }); pop();
  };
  const _c15e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c15e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    blob([[26, -112 + b], [46, -124 + b], [66, -112 + b], [62, -94 + b], [38, -90 + b]], { wash: '#e8828a', washA: 0.95, w: 1.4, col: '#8a3038' }); ell(62, -104 + b, 5, 7, { wash: '#fbeede', washA: 0.95, w: 0.8, col: '#8a3038' });
    for (let i = 0; i < 3; i++) pencil(spline([[32 + i * 8, -114 + b], [38 + i * 7, -106 + b], [34 + i * 7, -98 + b]], false, 4), { w: 1.6, col: '#fbeede', a: 0.9, pass2: false });
    ell(-46, -92 + b, 6, 8, { wash: '#a8742a', washA: 1, w: 1.2, col: '#4a2c0a' }); ell(-46, -100 + b, 7.5, 4.5, { wash: '#6a4416', washA: 1, w: 1.2, col: '#2a1806' }); pencil([[-46, -105 + b], [-45, -110 + b]], { w: 1.6, col: '#2a1806', pass2: false });
  };
})();
