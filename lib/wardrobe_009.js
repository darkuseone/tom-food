/* 009 — костюмы выпуска «Хачапури»: экономист (твидовый пиджак с заплатками, бабочка), сванский пастух (овчинная безрукавка + войлочная шапка `svan`),
   чоха с газырями, серебряным поясом и кинжалом + папаха `papakha`, отпускник в Батуми (рубашка с пальмами + панама). Трофей №9 на фартуке — капля желтка. */
(() => {
  Object.assign(OUTFIT, {
    econA: Object.assign({}, OUTFIT.lawyer, { top: '#7a6440', topD: '#3e2e16', topL: '#a8916a', pants: '#4a3e2e', detail: 'tweed', apron: 1 }),
    svanA: { top: '#efe6d2', topD: '#a89878', topL: '#fffaf0', pants: '#4a3a2a', detail: 'fleece', hat: 'svan', boots: 'soft', apron: 1 },
    chokhaA: { top: '#3a1a24', topD: '#16080e', topL: '#6a3a4a', pants: '#1a1418', detail: 'gazyri', hat: 'papakha', boots: 'rider', apron: 1 },
    beachA: { top: '#2aa8b8', topD: '#106470', topL: '#6ad8e0', pants: '#e8dcc0', detail: 'palms', hat: 'panama', boots: 'soft', apron: 1 },
  });
  COST6.tweed = (OF, b, t, bp, L) => {                                    // твид: пиджак юриста + крапинки, заплатки на локтях не видны — бабочка
    COST6.lawyer(OF, b, t, bp, L); ctx.save(); ctx.clip(bp.path); for (let i = 0; i < 60; i++) { const r = rng(9900 + i); ell(-80 + r() * 160, -250 + r() * 200 + b, 1.6, 1.6, { wash: r() > 0.5 ? '#3e2e16' : '#c8b088', washA: 0.6, line: false }); } ctx.restore();
    push(0, -238 + b, 1); poly([[0, 0], [-22, -12], [-22, 12]], { wash: '#a8282a', washA: 1, w: 1.6, col: L }); poly([[0, 0], [22, -12], [22, 12]], { wash: '#a8282a', washA: 1, w: 1.6, col: L }); ell(0, 0, 5, 6, { wash: '#7a1818', washA: 1, line: false }); pop();
  };
  COST6.fleece = (OF, b, t, bp, L) => {                                   // овчинная безрукавка поверх белой рубахи: мех по краю, кожаный пояс
    ctx.save(); ctx.clip(bp.path); for (const sd of [-1, 1]) { shape([[sd * 16, -250 + b], [sd * 96, -250 + b], [sd * 96, -40 + b], [sd * 22, -40 + b]], { wash: '#8a5a2e', washA: 1, w: 2, col: L });
      for (let i = 0; i < 9; i++) ell(sd * 18, -240 + i * 24 + b, 9, 11, { wash: '#f4ecd8', washA: 1, w: 1, col: '#a89878' }); } ctx.restore();
    pencil([[-84, -118 + b], [84, -118 + b]], { w: 6, col: '#4a2a10', pass2: false });
  };
  COST6.gazyri = (OF, b, t, bp, L) => {                                   // чоха: светлая рубаха-ахалухи в вырезе, газыри рядами на груди, серебряный пояс, кинжал
    poly([[-20, -246 + b], [20, -246 + b], [0, -150 + b]], { wash: '#f2ece0', washA: 1, w: 1.6, col: L });
    for (const sd of [-1, 1]) { const x0 = sd > 0 ? 24 : -64; rect(x0, -232 + b, 40, 92, { wash: OF.topD, washA: 1, w: 1.6, col: L }); for (let i = 0; i < 6; i++) { rect(x0 + 4, -228 + i * 15 + b, 32, 10, { wash: '#4a3236', washA: 1, line: false }); ell(x0 + 20, -230 + i * 15 + b, 6, 3.4, { wash: '#e0e0e8', washA: 1, line: false }); } }
    rect(-74, -124 + b, 148, 12, { wash: '#2a2a2a', washA: 1, line: false }); for (let i = 0; i < 6; i++) ell(-60 + i * 24, -118 + b, 5, 5, { wash: '#e0e0e8', washA: 1, line: false });
    push(34, -104 + b, 1, 0.12); rect(-6, 0, 12, 76, { wash: '#c8c8d0', washA: 1, w: 1.4, col: L }); rect(-11, -14, 22, 16, { wash: '#8a6a3a', washA: 1, w: 1.4, col: L }); ell(0, -18, 7, 6, { wash: '#e0e0e8', washA: 1, w: 1, col: L }); pop();
  };
  COST6.palms = (OF, b, t, bp, L) => {                                    // рубашка с пальмами: листья-звёзды и цветки гибискуса, планка с пуговицами
    ctx.save(); ctx.clip(bp.path); for (let i = 0; i < 9; i++) { const r = rng(9940 + i), x = -84 + r() * 168, y = -250 + r() * 200 + b; push(x, y, 1, r() * 6); for (let q = 0; q < 5; q++) ell(Math.cos(q * 1.26) * 12, Math.sin(q * 1.26) * 12, 11, 4, { wash: '#f6f0a0', washA: 0.9, line: false, rot: q * 1.26 }); pop(); }
      for (let i = 0; i < 7; i++) { const r = rng(9950 + i); ell(-80 + r() * 160, -250 + r() * 200 + b, 8, 8, { wash: '#e8486a', washA: 0.95, line: false }); } ctx.restore();
    pencil([[0, -244 + b], [0, -70 + b]], { w: 2, col: OF.topD, pass2: false }); for (let i = 0; i < 5; i++) ell(6, -230 + i * 34 + b, 3, 3, { wash: '#ffffff', washA: 1, line: false });
  };
  HAT6.svan = (t, o, fx, L) => {                                          // сванская шапка: круглая войлочная, тёмная тесьма крестом и по краю
    push(fx * 0.3, -78, 0.84); const c = blob([[-110, 10], [-104, -40], [-60, -74], [0, -82], [60, -74], [104, -40], [110, 10]], { wash: '#b8a888', washA: 1, w: 2.6, col: L, key: 9920 }); shadeG(c.path, 0, -80, 0, 10, '#7a6a4a', 0.4);
    pencil([[-110, 6], [110, 6]], { w: 8, col: '#3a2a1a', pass2: false }); for (const a of [-0.7, 0, 0.7]) pencil([[Math.sin(a) * 104, 2], [Math.sin(a) * 26, -78]], { w: 3, col: '#3a2a1a', pass2: false }); pop();
  };
  HAT6.papakha = (t, o, fx, L) => {                                       // папаха: высокая каракулевая, завитки, тёмный верх
    push(fx * 0.3, -66, 0.84); rect(-100, -170, 200, 176, { wash: '#1a1416', washA: 1, w: 2.6, col: '#000000', key: 9925 }); for (let i = 0; i < 46; i++) { const r = rng(9930 + i); ell(-90 + r() * 180, -160 + r() * 160, 9, 6, { wash: '#3e3438', washA: 0.9, line: false }); }
    ell(0, -170, 100, 18, { wash: '#2a2024', washA: 1, w: 2, col: '#000000' }); pop();
  };
  const _c9e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c9e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    blob([[8, -112 + b], [16, -100 + b], [14, -88 + b], [4, -84 + b], [-4, -92 + b], [0, -104 + b]], { wash: '#f2a21a', washA: 0.9, line: false }); ell(6, -98 + b, 3, 2, { wash: '#fff6d0', washA: 0.8, line: false });
  };
})();
