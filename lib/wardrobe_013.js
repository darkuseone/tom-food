/* 013 — костюмы выпуска «Солянка»: половой трактира в белом (рубаха навыпуск + белые штаны + полотенце, `kartuz` нет — напомаженная причёска), гэдээровская
   официантка-«кельнер» не нужна — Том в куртке-«олимпийке» 70-х (детали `olymp`). Трофей №13 на фартуке — оранжевая капля бульона и колечко маслины. */
(() => {
  Object.assign(OUTFIT, {
    traktirA: Object.assign({}, OUTFIT.rubakha, { top: '#fbf8f0', topD: '#b8b0a0', topL: '#ffffff', pants: '#f4f0e6', stitch: '#2a5ab8', apron: 1 }),
    olympA: { top: '#2a4a8a', topD: '#10224a', topL: '#5a7ab8', pants: '#2a2a34', shirt: '#f2efe6', detail: 'olymp', hat: null, boots: 'oxford', apron: 1 },
    selA: Object.assign({}, OUTFIT.rubakha, { apron: 1 }),
  });
  COST6.olymp = (OF, b, t, bp, L) => {                                    // спортивная куртка 70-х: белые лампасы по рукавам и бокам, молния, воротник-стойка
    for (const sd of [-1, 1]) { pencil([[sd * 50, -230 + b], [sd * 54, -110 + b]], { w: 6, col: '#ffffff', pass2: false }); pencil([[sd * 58, -230 + b], [sd * 60, -110 + b]], { w: 3, col: '#d9282a', pass2: false }); }
    pencil([[0, -244 + b], [0, -110 + b]], { w: 3, col: '#c8ccd2', pass2: false }); for (let k = 0; k < 10; k++) pencil([[-3, -240 + k * 13 + b], [3, -240 + k * 13 + b]], { w: 1.4, col: '#8a8a8a', pass2: false });
    rect(-30, -252 + b, 60, 14, { wash: OF.topD, washA: 1, w: 1.6, col: L });
  };
  const _c13e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c13e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    blob([[30, -170 + b], [40, -180 + b], [50, -168 + b], [44, -156 + b], [32, -158 + b]], { wash: '#d8642a', washA: 0.8, w: 1, col: '#a8401a' }); ell(-34, -150 + b, 7, 6, { line: true, w: 3.4, col: '#2a2228' });
  };
})();
