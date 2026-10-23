/* 004 — костюмы выпуска «Холодец»: средневековый повар (котта + капюшон-шаперон), с фартуком. Остальное из готового: lawyer (адвокат), knyaz (боярин),
   dutch (эпоха Петра), waiter (лакей), tulup (север), hostess (кухня 80-х). Трофей №4 на фартуке — янтарная капля холодца. */
(() => {
  Object.assign(OUTFIT, {
    medcook: { top: '#7a5a3a', topD: '#3a2a14', topL: '#a8845a', pants: '#4a3a2a', detail: 'cotte', hat: 'chaperon', boots: 'soft', apron: 1 },
    knyazA: Object.assign({}, OUTFIT.knyaz, { apron: 1 }), dutchA: Object.assign({}, OUTFIT.dutch, { apron: 1 }), tulupA: Object.assign({}, OUTFIT.tulup, { apron: 1 }),
  });
  COST6.cotte = (OF, b, t, bp, L) => {                                   // котта: грубая шерсть, верёвочный пояс, разрезы на рукавах, нож на поясе
    hatch(bp.path, bp.bb, { gap: 6, a: 0.14, col: OF.topD, ang: 0.6, key: 9480, w: 1.3 }); skirt6(OF, b, L, -118, -60, 92, 100, 9481, OF.top);
    pencil([[-70, -120 + b], [70, -124 + b]], { w: 6, col: '#c8a868', pass2: false }); pencil([[40, -124 + b], [46, -90 + b]], { w: 4, col: '#c8a868', pass2: false });
    push(-56, -116 + b, 1, 0.3); rect(-5, 0, 10, 40, { wash: '#6a4424', washA: 1, w: 1.4 }); poly([[-5, 40], [5, 40], [0, 70]], { wash: '#c8ccd0', washA: 1, w: 1.4 }); pop();
  };
  HAT6.chaperon = (t, o, fx, L) => { push(fx * 0.3, -70, 0.86); const h = blob([[-120, 40], [-120, -40], [-60, -110], [40, -120], [110, -70], [120, 20], [90, -20], [-90, -20]], { wash: '#a8241e', washA: 1, w: 2.6, col: TM.line, key: 9485 });
    shadeG(h.path, -L.side * 120, 0, L.side * 60, 0, '#4a0a06', 0.45); const sw = Math.sin(t * 2) * 10; pencil(spline([[60, -110], [140 + sw, -140], [180 + sw, -80], [200 + sw, -20]], false, 6), { w: 18, col: '#a8241e', pass2: false }); pop(); };
  const _c5d = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c5d(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    ctx.save(); ctx.globalAlpha = 0.55; ctx.fillStyle = '#d8b46a'; ctx.beginPath(); ctx.ellipse(-12, -72 + b, 9, 6, -0.2, 0, 6.3); ctx.fill(); ctx.globalAlpha = 0.8; ctx.fillStyle = '#fff4c8'; ctx.beginPath(); ctx.ellipse(-15, -74 + b, 3, 2, 0, 0, 6.3); ctx.fill(); ctx.restore();
  };
})();
