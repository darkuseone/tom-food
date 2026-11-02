/* 012 — костюмы выпуска «Тульский пряник»: купец (синий сюртук-поддёвка до колен, жилет с цепочкой, кушак + картуз `kartuz`), подмастерье (рубаха + картуз),
   парижский франт 1900 (светлый пиджак + канотье `boaterT`). Трофей №12 на фартуке — белые крошки глазури и капля повидла. */
(() => {
  Object.assign(OUTFIT, {
    kupecA: { top: '#2a3a6a', topD: '#101a3a', topL: '#5a6a9a', pants: '#2a2a30', shirt: '#f2efe6', detail: 'kupec', hat: 'kartuz', boots: 'rider', apron: 1, long: 1 },
    uchenikA: Object.assign({}, OUTFIT.rubakha, { hat: 'kartuz', apron: 1 }),
    parisA: { top: '#e8e2d0', topD: '#a89a7a', topL: '#fffaf0', pants: '#6a6a72', shirt: '#ffffff', detail: 'paris', hat: 'boaterT', boots: 'oxford', apron: 1 },
    sovA: Object.assign({}, OUTFIT.soviet, { apron: 1 }),
  });
  COST6.kupec = (OF, b, t, bp, L) => {                                    // поддёвка: жилет с золотой цепочкой, пуговицы, красный кушак
    hatch(bp.path, bp.bb, { gap: 7, a: 0.12, col: OF.topD, ang: 0.8, w: 1.1 });
    const v = poly([[-24, -246 + b], [24, -246 + b], [30, -130 + b], [-30, -130 + b]], { wash: '#5a2a1a', washA: 1, w: 2, col: L }); for (let k = 0; k < 4; k++) nb(0, -226 + k * 24 + b, 3.6, CU.gold);
    pencil(spline([[-20, -170 + b], [0, -156 + b], [22, -172 + b]], false, 5), { w: 2.4, col: '#e8c040', pass2: false });
    rect(-60, -128 + b, 120, 16, { wash: '#b8221a', washA: 1, w: 1.6, col: L }); pencil([[40, -120 + b], [50, -86 + b]], { w: 6, col: '#b8221a', pass2: false });
  };
  COST6.paris = (OF, b, t, bp, L) => {                                    // светлый пиджак, красная бабочка, гвоздика в петлице
    for (const sd of [-1, 1]) poly([[sd * 26, -250 + b], [sd * 66, -244 + b], [sd * 44, -180 + b], [sd * 8, -150 + b]], { wash: '#d8d0bc', washA: 1, w: 2, col: L });
    blob([[-18, -246 + b], [0, -238 + b], [18, -246 + b], [18, -230 + b], [0, -236 + b], [-18, -230 + b]], { wash: '#c8221a', washA: 1, w: 1.4, col: L });
    for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; ell(-40 + Math.cos(a) * 6, -206 + Math.sin(a) * 6 + b, 5, 5, { wash: '#d9283a', washA: 1, w: 0.8 }); }
  };
  HAT6.kartuz = (t, o, fx, L) => {                                        // картуз: тёмная тулья, лаковый козырёк
    push(fx * 0.3, -96, 0.82); const c = blob([[-76, 10], [-80, -40], [-40, -70], [40, -70], [80, -40], [76, 10]], { wash: '#1e2236', washA: 1, w: 2.4, col: TM.line, key: 12190 }); shadeG(c.path, 80, 0, -30, 0, '#080a14', 0.5);
    rect(-78, -6, 156, 16, { wash: '#2a2e44', washA: 1, w: 1.6, col: TM.line }); blob([[-20 + fx * 40, 10], [60 + fx * 60, 14], [70 + fx * 70, 30], [-10 + fx * 40, 26]], { wash: '#0a0a0e', washA: 1, w: 1.6, col: TM.line }); pop();
  };
  HAT6.boaterT = (t, o, fx, L) => {                                       // канотье: соломенная плоская шляпа с чёрной лентой
    push(fx * 0.3, -100, 0.82); ell(0, 6, 120, 22, { wash: '#e8d49a', washA: 1, w: 2.2, col: '#5a4a1a' }); rect(-66, -54, 132, 60, { wash: '#e8d49a', washA: 1, w: 2.2, col: '#5a4a1a' }); ell(0, -54, 66, 12, { wash: '#f0dca8', washA: 1, w: 1.8 }); rect(-66, -20, 132, 18, { wash: '#1a1a1a', washA: 1, line: false });
    for (let i = 0; i < 8; i++) pencil([[-60 + i * 16, -50], [-56 + i * 16, -24]], { w: 1, col: '#b89a5a', a: 0.6, pass2: false }); pop();
  };
  const _c12e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c12e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    for (let i = 0; i < 12; i++) { const r = rng(12180 + i); poly([[20 + r() * 40, -150 + r() * 30 + b], [24 + r() * 40, -146 + r() * 30 + b], [18 + r() * 40, -142 + r() * 30 + b]], { wash: '#ffffff', washA: 0.95, line: false }); }
    blob([[-44, -150 + b], [-34, -156 + b], [-28, -146 + b], [-34, -134 + b], [-42, -138 + b]], { wash: '#a8282a', washA: 0.85, w: 1, col: '#5a0a0a' });
  };
})();
