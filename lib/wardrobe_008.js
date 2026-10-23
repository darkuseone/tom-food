/* 008 — костюмы выпуска «Пельмени»: ведущий викторины (пиджак с блёстками + бабочка), удмуртская рубаха с красной вышивкой-ромбами, кочевник
   (халат chapan + меховая шапка), литейщик-«машинист» цеха в сетке для волос. Трофей №8 на фартуке — мучной отпечаток ладошки. */
(() => {
  Object.assign(OUTFIT, {
    hostA: { top: '#5a2aa8', topD: '#2a0a5a', topL: '#8a5ae0', pants: '#1a1a24', detail: 'sequin', collar: 'band', tie: 'bow', hat: null, boots: 'oxford', apron: 1 },
    udmA: { top: '#f6f2e8', topD: '#b0a890', topL: '#ffffff', pants: '#3a3a4a', detail: 'udm', hat: null, boots: 'soft', apron: 1 },
    chapanA: Object.assign({}, OUTFIT.chapan, { top: '#2a6a5a', topD: '#0e3a2a', topL: '#5a9a8a', hat: 'furhood', apron: 1 }),
    fabA: Object.assign({}, OUTFIT.iron, { top: '#f2f2f0', topD: '#a8a8a4', topL: '#ffffff', pants: '#3a5a8a', hat: 'hairnet', gloves: 0, apron: 1 }),
    furA: Object.assign({}, OUTFIT.fur, { apron: 1 }),
    touristA: Object.assign({}, OUTFIT.puffer, { top: '#e8862a', topD: '#8a4a10', topL: '#ffb060', pin: null, apron: 1 }),
  });
  COST6.sequin = (OF, b, t, bp, L) => {                                   // пиджак с блёстками: искры мигают
    ctx.save(); ctx.clip(bp.path); for (let i = 0; i < 40; i++) { const r = rng(9900 + i), x = -80 + r() * 160, y = -250 + r() * 200 + b, on = (Math.floor(t * 8) + i) % 5 === 0; ell(x, y, on ? 4 : 2.4, on ? 4 : 2.4, { wash: on ? '#fff6c0' : '#c8a8f0', washA: 0.9, line: false }); } ctx.restore();
    for (const sd of [-1, 1]) pencil([[sd * 14, -244 + b], [sd * 40, -150 + b]], { w: 6, col: '#1a0a3a', pass2: false });
  };
  COST6.udm = (OF, b, t, bp, L) => {                                      // удмуртская рубаха: полосы красной вышивки ромбами на груди и по подолу
    for (const yy of [-230, -96]) { rect(-70, yy - 10 + b, 140, 20, { wash: '#c8282a', washA: 1, line: false }); for (let i = 0; i < 7; i++) poly([[-60 + i * 20, yy + b], [-50 + i * 20, yy - 8 + b], [-40 + i * 20, yy + b], [-50 + i * 20, yy + 8 + b]], { wash: '#1a1a1a', washA: 1, line: false }); }
    pencil([[0, -244 + b], [0, -190 + b]], { w: 3, col: '#c8282a', pass2: false });
  };
  HAT6.hairnet = (t, o, fx, L) => { push(fx * 0.3, -70, 0.84); const n = blob([[-100, 10], [-96, -50], [0, -84], [96, -50], [100, 10]], { wash: '#f2f2f6', washA: 0.85, w: 2, col: '#8a8a9a', key: 9910 }); ctx.save(); ctx.clip(n.path); for (let i = -6; i < 7; i++) { pencil([[i * 18, -90], [i * 18 + 40, 20]], { w: 1, col: '#a8a8b8', a: 0.6, pass2: false }); pencil([[i * 18, -90], [i * 18 - 40, 20]], { w: 1, col: '#a8a8b8', a: 0.6, pass2: false }); } ctx.restore(); pencil([[-100, 8], [100, 8]], { w: 4, col: '#c8c8d8', pass2: false }); pop(); };
  const _c8e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c8e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    push(-36, -120 + b, 0.5); blob([[-14, 20], [-18, -6], [-26, -24], [-16, -30], [-8, -10], [-8, -34], [2, -36], [4, -12], [10, -32], [20, -28], [14, -4], [22, -14], [28, -6], [16, 20]], { wash: '#fbf8f0', washA: 0.9, line: false }); pop();
  };
})();
