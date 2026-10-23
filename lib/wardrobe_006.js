/* 006 — костюмы выпуска «Шаурма»: шаурмист (чёрная футболка с томатным кантом, бандана, перчатки), османский повар XVII в. (халат-chapan красный + тюрбан),
   повар Бурсы XIX в. (жилет с тесьмой + феска `fez`). Трофей №6 на фартуке — капля чесночного соуса. */
(() => {
  Object.assign(OUTFIT, {
    shaurma: { top: '#26262a', topD: '#0e0e10', topL: '#4a4a52', pants: '#3a3e4a', detail: 'shaurma', hat: 'bandana', boots: 'oxford', apron: 1 },
    ottomanA: Object.assign({}, OUTFIT.chapan, { top: '#a8282a', topD: '#5a0e10', topL: '#d65a4a', cuff: '#e8cf8a', stripes: '#e8cf8a', apron: 1 }),
    hoodie70: Object.assign({}, OUTFIT.hoodie, { top: '#8a5a2a', topD: '#4a2a10', topL: '#b8844a', pants: '#2a3a6a', capTxt: 'B', print: 'BERLIN', apron: 1 }),
    bursaA: { top: '#f2ead6', topD: '#a89a7a', topL: '#fffaf0', pants: '#3a2a4a', detail: 'bursa', hat: 'fez', boots: 'soft', apron: 1 },
  });
  COST6.shaurma = (OF, b, t, bp, L) => {                                 // футболка: короткий рукав, томатный кант, бейдж
    hatch(bp.path, bp.bb, { gap: 8, a: 0.06, col: '#000000', ang: 0.9, key: 9600, w: 1.2 }); pencil([[-46, -244 + b], [0, -214 + b], [46, -244 + b]], { w: 6, col: '#d9482b', pass2: false });
    rect(18, -214 + b, 44, 20, { wash: '#e8b53a', washA: 1, w: 1.4, col: TM.line }); txt('TOM', 40, -204 + b, 14, { font: 'Osw', col: '#2b2622' });
  };
  COST6.bursa = (OF, b, t, bp, L) => {                                   // рубаха + тёмный жилет с золотой тесьмой, кушак
    for (const sd of [-1, 1]) { const v = poly([[sd * 14, -244 + b], [sd * 74, -236 + b], [sd * 70, -70 + b], [sd * 16, -70 + b]], { wash: '#2a2a5a', washA: 1, w: 2, col: TM.line, key: 9610 + sd }); pencil([[sd * 16, -240 + b], [sd * 18, -72 + b]], { w: 4, col: '#d6a842', pass2: false }); for (let k = 0; k < 4; k++) ell(sd * 44, -210 + k * 36 + b, 8, 5, { wash: '#d6a842', washA: 1, line: false }); }
    rect(-72, -96 + b, 144, 26, { wash: '#a8282a', washA: 1, w: 1.6, col: TM.line });
  };
  HAT6.bandana = (t, o, fx, L) => { push(fx * 0.3, -70, 0.84); const p = blob([[-110, 10], [-100, -50], [0, -80], [100, -50], [110, 10]], { wash: '#24242a', washA: 1, w: 2.4, col: TM.line, key: 9620 }); pencil(spline([[-104, -6], [0, -24], [104, -6]], false, 6), { w: 8, col: '#d9482b', pass2: false }); blob([[100, 0], [150, 30], [130, 50], [104, 20]], { wash: '#34343a', washA: 1, w: 2, col: TM.line }); pop(); };
  HAT6.fez = (t, o, fx, L) => { push(fx * 0.3, -86, 0.8); const p = poly([[-70, 10], [-56, -110], [56, -110], [70, 10]], { wash: '#b8182a', washA: 1, w: 2.6, col: TM.line, key: 9625 }); shadeG(p.path, -L.side * 70, 0, L.side * 40, 0, '#5a0a14', 0.5); ell(0, -110, 56, 10, { wash: '#8a0a1a', washA: 1, w: 2, col: TM.line });
    pencil(spline([[0, -112], [20, -100], [36, -60], [44, -20]], false, 6), { w: 3, col: '#1a1a1a', pass2: false }); for (let i = 0; i < 5; i++) pencil([[44, -20], [38 + i * 4, 10]], { w: 2, col: '#1a1a1a', pass2: false }); pop(); };
  const _c6e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c6e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    blob([[-50, -160 + b], [-40, -172 + b], [-30, -160 + b], [-34, -146 + b], [-46, -146 + b]], { wash: '#fbf6e8', washA: 1, w: 1.2, col: '#c8b890' });
  };
})();
