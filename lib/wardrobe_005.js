/* 005 — костюмы выпуска «Борщ»: дачник (льняная рубаха с вышивкой по вороту, подтяжки, соломенная шляпа). Остальное из готового: polovoy (рубаха+фартук, луг),
   botanist (этимология), sailor (корабль), sweater (Сочельник), tuxA (курорт 1930-х), chef. Трофей №5 на фартуке — веточка укропа. */
(() => {
  Object.assign(OUTFIT, {
    dacha: { top: '#efe8d6', topD: '#a89a7a', topL: '#fffaf0', pants: '#5a6a8a', detail: 'dacha', hat: 'straw', boots: 'soft', apron: 1 },
    sailorA: Object.assign({}, OUTFIT.sailor, { apron: 1 }), botanistA: OUTFIT.botanistA || Object.assign({}, OUTFIT.botanist, { apron: 1 }),
  });
  COST6.dacha = (OF, b, t, bp, L) => {                                   // льняная рубаха: вышивка по вороту, подтяжки
    hatch(bp.path, bp.bb, { gap: 7, a: 0.08, col: OF.topD, ang: 0.9, key: 9590, w: 1.2 }); for (let i = 0; i < 9; i++) { const a = Math.PI * 0.15 + i / 8 * Math.PI * 0.7; const x = Math.cos(a) * 40, y = -246 + Math.sin(a) * 30 + b; poly([[x - 5, y], [x, y - 5], [x + 5, y], [x, y + 5]], { wash: i % 2 ? '#d9482b' : '#2a2a2a', washA: 1, line: false }); }
    for (const sd of [-1, 1]) pencil([[sd * 32, -250 + b], [sd * 36, -110 + b]], { w: 8, col: '#5a3a1a', pass2: false });
  };
  HAT6.straw = (t, o, fx, L) => { push(fx * 0.3, -78, 0.86); ell(0, 0, 150, 30, { wash: '#e8cc7a', washA: 1, w: 2.6, col: '#6a4a14', key: 9595 }); const c = blob([[-80, 0], [-76, -80], [0, -100], [76, -80], [80, 0]], { wash: '#e8cc7a', washA: 1, w: 2.6, col: '#6a4a14' });
    ctx.save(); ctx.clip(c.path); for (let i = -6; i < 7; i++) pencil([[i * 16, -110], [i * 16 + 20, 10]], { w: 1.4, col: '#a88430', a: 0.6, pass2: false }); ctx.restore(); rect(-80, -26, 160, 18, { wash: '#d9482b', washA: 1, w: 1.6 }); pop(); };
  const _c5e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c5e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    for (let q = 0; q < 5; q++) pencil([[44, -150 + b], [44 + Math.cos(q * 0.8 - 2) * 12, -150 + Math.sin(q * 0.8 - 2) * 12 + b]], { w: 1.8, col: '#4a8a2a', a: 0.8, pass2: false });
  };
})();
