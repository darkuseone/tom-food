/* 010 — костюмы выпуска «Картофельные чипсы»: британец в пабе (жилет-аргайл поверх рубашки + кепка `flatcap`), барристер (чёрный костюм, белые брыжи-«бэнды»,
   парик `wig`). Трофей №10 на фартуке — рыжие крапинки приправы-паприки. */
(() => {
  Object.assign(OUTFIT, {
    pubA: { top: '#2a5a4a', topD: '#0e2a20', topL: '#5a8a7a', pants: '#3a3a4a', shirt: '#f2f0e6', detail: 'argyle', hat: 'flatcap', boots: 'oxford', apron: 1 },
    barrister: Object.assign({}, OUTFIT.lawyer, { top: '#16161c', topD: '#000000', topL: '#3a3a46', pants: '#16161c', detail: 'bands', hat: 'wig', apron: 1 }),
    labA: Object.assign({}, OUTFIT.labcoat || OUTFIT.lawyer, { apron: 1 }),
  });
  COST6.argyle = (OF, b, t, bp, L) => {                                   // жилет-аргайл: ромбы двух тонов и тонкая клетка, белый воротник рубашки
    ctx.save(); ctx.clip(bp.path); for (let r = 0; r < 6; r++) for (let c = -3; c < 4; c++) { const x = c * 44 + (r % 2) * 22, y = -250 + r * 40 + b; poly([[x, y - 22], [x + 22, y], [x, y + 22], [x - 22, y]], { wash: (r + c) % 2 ? '#c8b060' : '#8a2a2a', washA: 0.85, line: false }); }
      for (let i = -6; i < 7; i++) { pencil([[i * 22 - 120, -260 + b], [i * 22 + 120, -20 + b]], { w: 1, col: '#f2f0e6', a: 0.35, pass2: false }); } ctx.restore();
    poly([[-26, -248 + b], [0, -214 + b], [26, -248 + b], [0, -236 + b]], { wash: '#f2f0e6', washA: 1, w: 1.6, col: L });
  };
  COST6.bands = (OF, b, t, bp, L) => {                                    // барристер: пиджак юриста + белые брыжи-«бэнды» под воротом
    COST6.lawyer(OF, b, t, bp, L); for (const sd of [-1, 1]) rect(sd > 0 ? 1 : -15, -236 + b, 14, 46, { wash: '#ffffff', washA: 1, w: 1.4, col: L });
  };
  HAT6.wig = (t, o, fx, L) => {                                           // парик барристера: белые кудри рядами, хвостики-локоны сзади
    push(fx * 0.3, -92, 0.84); blob([[-112, 30], [-108, -40], [-60, -82], [0, -90], [60, -82], [108, -40], [112, 30]], { wash: '#efeae0', washA: 1, w: 2.4, col: "#8a8478", key: 10095 });
    for (let r = 0; r < 3; r++) for (let i = 0; i < 7 - r; i++) { const x = -90 + r * 14 + i * 30, y = -50 + r * 28; ell(x, y, 15, 11, { wash: '#f8f6f0', washA: 1, w: 1.2, col: '#a8a294' }); }
    for (const sd of [-1, 1]) for (let i = 0; i < 3; i++) ell(sd * 116, 20 + i * 26, 14, 12, { wash: '#f8f6f0', washA: 1, w: 1.2, col: '#a8a294' }); pop();
  };
  const _c10e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c10e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    for (let i = 0; i < 9; i++) { const r = rng(10090 + i); ell(-52 + r() * 34, -196 + r() * 30 + b, 2.6, 2.6, { wash: i % 3 ? '#d8582a' : '#a8341a', washA: 0.9, line: false }); }
  };
})();
