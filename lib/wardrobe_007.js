/* 007 — костюмы выпуска «Кимчи»: торговец Чосона (ханбок: короткий жакет чогори с белым воротничком и лентой-корым + шляпа `gat`), учёный-сонби
   (белое допо с поясом-шнуром + `gat`), кимджан (стёганая жилетка + косынка), пуховик 90-х без надписи. Трофей №7 на фартуке — красное пятнышко кимчи. */
(() => {
  Object.assign(OUTFIT, {
    hanbokA: { top: '#2a6ab8', topD: '#123a6a', topL: '#5a9ae0', pants: '#f2ead6', detail: 'hanbok', hat: 'gat', boots: 'soft', apron: 1 },
    seonbi: { top: '#f2f0e8', topD: '#a8a498', topL: '#ffffff', pants: '#f2f0e8', detail: 'seonbi', hat: 'gat', boots: 'soft', long: 1, apron: 1 },
    kimjangA: { top: '#e86a8a', topD: '#8a2a44', topL: '#ff9ab0', pants: '#3a3a5a', detail: 'quiltvest', hat: 'kerchief', boots: 'soft', apron: 1 },
    pufferK: Object.assign({}, OUTFIT.puffer, { top: '#3a5a8a', topD: '#1a2a4a', topL: '#6a8ab8', pin: null, apron: 1 }),
    astroA: Object.assign({}, OUTFIT.astro, { apron: 1 }),
  });
  COST6.hanbok = (OF, b, t, bp, L) => {                                   // чогори: белый воротничок-тонджон, лента-корым бантом
    pencil([[-40, -246 + b], [0, -196 + b], [40, -246 + b]], { w: 10, col: '#ffffff', pass2: false }); pencil([[-40, -246 + b], [0, -196 + b], [40, -246 + b]], { w: 2, col: TM.line, a: 0.5, pass2: false });
    blob([[0, -196 + b], [-26, -204 + b], [-30, -184 + b], [0, -188 + b]], { wash: '#d9282b', washA: 1, w: 1.6, col: TM.line }); for (const [dx, dy] of [[-10, 60], [14, 70]]) pencil(spline([[0, -190 + b], [dx * 0.5, -150 + b], [dx, -190 + dy + b]], false, 5), { w: 9, col: '#d9282b', pass2: false });
    pencil([[-74, -120 + b], [74, -120 + b]], { w: 3, col: OF.topD, a: 0.6, pass2: false });
  };
  COST6.seonbi = (OF, b, t, bp, L) => {                                   // белое допо: тёмная кайма запаха, пояс-шнур с кистями
    hatch(bp.path, bp.bb, { gap: 9, a: 0.05, col: '#8a8678', ang: 0.9, key: 9700, w: 1.2 }); pencil([[-36, -246 + b], [24, -120 + b]], { w: 5, col: '#3a3a44', pass2: false });
    pencil([[-70, -116 + b], [70, -116 + b]], { w: 5, col: '#a8282a', pass2: false }); for (const dx of [10, 26]) { pencil([[dx, -116 + b], [dx + 4, -60 + b]], { w: 3, col: '#a8282a', pass2: false }); ell(dx + 4, -56 + b, 6, 10, { wash: '#a8282a', washA: 1, line: false }); }
  };
  COST6.quiltvest = (OF, b, t, bp, L) => {                                // стёганая жилетка поверх кофты: ромбы-стёжка
    ctx.save(); ctx.clip(bp.path); for (let i = -6; i < 7; i++) { pencil([[i * 26 - 60, -260 + b], [i * 26 + 60, -40 + b]], { w: 1.4, col: OF.topD, a: 0.4, pass2: false }); pencil([[i * 26 + 60, -260 + b], [i * 26 - 60, -40 + b]], { w: 1.4, col: OF.topD, a: 0.4, pass2: false }); } ctx.restore();
    for (const sd of [-1, 1]) pencil([[sd * 8, -244 + b], [sd * 8, -60 + b]], { w: 4, col: '#fbf6ea', pass2: false });
  };
  HAT6.gat = (t, o, fx, L) => {                                           // кат: широкие прозрачные поля, цилиндрическая тулья, бусы-завязки
    push(fx * 0.3, -70, 0.86); ell(0, 0, 220, 34, { wash: '#1a1a20', washA: 0.7, w: 2.6, col: '#0a0a0e', key: 9710 }); ell(0, -2, 200, 26, { wash: '#4a4a5a', washA: 0.35, line: false }); rect(-50, -110, 100, 110, { wash: '#1a1a20', washA: 0.6, w: 2.4, col: '#0a0a0e' }); ell(0, -110, 50, 10, { wash: '#2a2a32', washA: 0.9, w: 2 });
    pencil([[-40, -40], [40, -40]], { w: 1.2, col: '#5a5a6a', a: 0.6, pass2: false }); for (const sd of [-1, 1]) { for (let i = 0; i < 6; i++) ell(sd * (70 - i * 4), 30 + i * 30, 6, 6, { wash: i % 2 ? '#d6a842' : '#3a2a1a', washA: 1, line: false }); } pop(); };
  const _c7e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c7e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    blob([[30, -170 + b], [44, -176 + b], [54, -164 + b], [46, -152 + b], [32, -156 + b]], { wash: '#c8282a', washA: 0.85, line: false });
  };
})();
