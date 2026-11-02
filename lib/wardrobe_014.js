/* 014 — костюмы выпуска «Сухарики»: римский легионер (красная туника, лорика-сегментата, шлем-галея с гребнем `galea`), солдат 1860-х (синий мундир с медными
   пуговицами + кепи `kepi`), рабочий 1903 (поддёвка + картуз — kupecA из 012 подходит). Трофей №14 на фартуке — ржаные крошки. */
(() => {
  Object.assign(OUTFIT, {
    legioA: { top: '#b8281e', topD: '#6a0e0a', topL: '#e05a4a', pants: null, shirt: '#e8dcc0', detail: 'lorica', hat: 'galea', boots: 'sak', apron: 1, long: 0 },
    kepiA: { top: '#2a3a6a', topD: '#101a3a', topL: '#5a6a9a', pants: '#6a8aa8', shirt: '#f2efe6', detail: 'kepicoat', hat: 'kepi', boots: 'rider', apron: 1 },
  });
  COST6.lorica = (OF, b, t, bp, L) => {                                    // лорика-сегментата: полосы металла поперёк груди, наплечники
    ctx.save(); ctx.clip(bp.path); for (let i = 0; i < 6; i++) { const y = -236 + i * 22 + b; const p = rect(-70, y, 140, 20, { wash: '#a8acb4', washA: 1, w: 1.6, col: '#2a2e34' }); metalG(p.path, -20, y + 6, 80, '#ffffff', '#a8acb4', '#4a4e54'); } ctx.restore();
    for (const sd of [-1, 1]) for (let i = 0; i < 3; i++) { const p = blob([[sd * 30, -250 + i * 12 + b], [sd * 74, -244 + i * 12 + b], [sd * 80, -226 + i * 12 + b], [sd * 34, -232 + i * 12 + b]], { wash: '#b8bcc4', washA: 1, w: 1.4, col: '#2a2e34' }); }
    for (let i = 0; i < 6; i++) pencil([[-50 + i * 20, -110 + b], [-50 + i * 20, -60 + b]], { w: 8, col: '#5a3a1a', pass2: false });
  };
  COST6.kepicoat = (OF, b, t, bp, L) => {                                  // мундир 1860-х: ряд медных пуговиц, отложной воротник
    for (let k = 0; k < 6; k++) nb(0, -236 + k * 22 + b, 4.5, CU.gold); for (const sd of [-1, 1]) poly([[sd * 6, -250 + b], [sd * 40, -246 + b], [sd * 30, -228 + b], [sd * 4, -236 + b]], { wash: OF.topD, washA: 1, w: 1.6, col: L });
    pencil([[-60, -120 + b], [60, -120 + b]], { w: 10, col: '#2a2a2a', pass2: false }); rect(-12, -128 + b, 24, 16, { wash: '#c8a050', washA: 1, w: 1.4, col: L });
  };
  HAT6.galea = (t, o, fx, L) => {                                          // шлем-галея: металлическая чаша, нащёчники, красный гребень
    push(fx * 0.3, -100, 0.82); const h = blob([[-90, 20], [-84, -50], [-40, -86], [40, -86], [84, -50], [90, 20], [60, 10], [-60, 10]], { wash: '#a8acb4', washA: 1, w: 2.4, col: TM.line }); metalG(h.path, -30, -50, 120, '#ffffff', '#a8acb4', '#4a4e54');
    rect(-96, 6, 192, 14, { wash: '#c8a050', washA: 1, w: 1.6, col: TM.line }); for (let i = 0; i < 12; i++) pencil([[-60 + i * 11, -84], [-58 + i * 11, -150 - Math.sin(i / 11 * 3.14) * 20]], { w: 6, col: '#c8221a', pass2: false }); pop();
  };
  HAT6.kepi = (t, o, fx, L) => {                                           // кепи: высокая мягкая тулья с наклоном вперёд, козырёк
    push(fx * 0.3, -96, 0.82); const c = poly([[-70, 10], [-60, -70], [50, -90], [70, 10]], { wash: '#2a3a6a', washA: 1, w: 2.4, col: TM.line }); shadeG(c.path, 70, 0, -30, 0, '#101a3a', 0.5); rect(-72, -6, 144, 16, { wash: '#1a2a4a', washA: 1, w: 1.6 }); blob([[-10 + fx * 40, 10], [60 + fx * 60, 12], [70 + fx * 70, 28], [-4 + fx * 40, 26]], { wash: '#0a0a0e', washA: 1, w: 1.4 }); ell(0, -30, 12, 10, { wash: '#c8a050', washA: 1, w: 1 }); pop();
  };
  const _c14e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c14e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    for (let i = 0; i < 10; i++) { const r = rng(14180 + i); poly([[24 + r() * 40, -160 + r() * 40 + b], [30 + r() * 40, -156 + r() * 40 + b], [26 + r() * 40, -150 + r() * 40 + b]], { wash: '#7a4a24', washA: 0.95, line: false }); }
  };
})();
