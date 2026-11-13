/* 020 — костюмы выпуска «Карбонара»: римский официант траттории (кремовая рубаха с закатанными рукавами, бордовый жилет, красно-белый клетчатый платок на шее),
   чикагский гость 1952 (коричневый двубортный пиджак, галстук в полоску, платочек в кармане, шляпа `fedora`), угольщик-карбонаро (холщовая рубаха в саже,
   кожаный пояс, широкополая войлочная шляпа `felt`), армейский повар 1944 (хаки-рубаха с карманами и закатанными рукавами, пилотка `garrison`).
   Трофей №20 на фартуке — капля желтка с крапинками чёрного перца. */
(() => {
  Object.assign(OUTFIT, {
    trattA: { top: '#f2ead6', topD: '#a89a7a', topL: '#ffffff', pants: '#2a2622', shirt: '#f2ead6', detail: 'tratt', boots: 'oxford', apron: 1 },
    fedA: { top: '#6a4a30', topD: '#2e1e10', topL: '#9a7650', pants: '#4a3626', shirt: '#efe6d2', detail: 'fed', hat: 'fedora', boots: 'oxford', apron: 1 },
    carbA: { top: '#8a7a62', topD: '#3a3226', topL: '#b0a284', pants: '#3a3228', shirt: '#8a7a62', detail: 'carbo', hat: 'felt', boots: 'oxford', apron: 1 },
    armyA: { top: '#8a8456', topD: '#4a4628', topL: '#b0aa78', pants: '#6a6440', shirt: '#8a8456', detail: 'army', hat: 'garrison', boots: 'oxford', apron: 1 },
  });
  COST6.tratt = (OF, b, t, bp, L) => {                                    // рубаха + бордовый жилет + клетчатый платок
    hatch(bp.path, bp.bb, { gap: 7, a: 0.08, col: OF.topD, ang: 0.9, key: 20100, w: 1.2 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.35);
    for (const sd of [-1, 1]) { const v = poly([[sd * 14, -258 + b], [sd * 70, -248 + b], [sd * 72, -110 + b], [sd * 10, -100 + b], [sd * 8, -200 + b]], { wash: '#7a1e22', washA: 1, w: 2, col: TM.line, key: 20101 + sd });
      shadeG(v.path, sd * 72, 0, sd * 8, 0, '#3a0608', 0.45); hatch(v.path, v.bb, { gap: 5, a: 0.12, col: '#3a0608', ang: 0.5, key: 20103 + sd, w: 1 });
      for (let k = 0; k < 3; k++) ell(sd * 16, -196 + k * 30 + b, 3.6, 3.6, { wash: '#d6a842', washA: 1, w: 0.8, col: '#6a4a08' }); }
    const sc = poly([[-34, -262 + b], [34, -262 + b], [16, -226 + b], [0, -214 + b], [-16, -226 + b]], { wash: '#c8241e', washA: 1, w: 1.6, col: TM.line, key: 20105 });
    ctx.save(); ctx.clip(sc.path); for (let i = -4; i < 5; i++) { pencil([[i * 9, -264 + b], [i * 9, -210 + b]], { w: 3, col: '#ffffff', a: 0.75, pass2: false }); pencil([[-36, -252 + i * 6 + 24 + b], [36, -252 + i * 6 + 24 + b]], { w: 3, col: '#ffffff', a: 0.5, pass2: false }); } ctx.restore();
    poly([[-6, -220 + b], [6, -220 + b], [14, -190 + b], [-12, -192 + b]], { wash: '#c8241e', washA: 1, w: 1.2, col: TM.line });
  };
  COST6.fed = (OF, b, t, bp, L) => {                                      // двубортный пиджак 50-х, галстук в полоску, платочек
    hatch(bp.path, bp.bb, { gap: 6, a: 0.12, col: OF.topD, ang: 1.2, key: 20110, w: 1.2 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.45);
    const tie = poly([[-8, -256 + b], [8, -256 + b], [14, -150 + b], [0, -132 + b], [-14, -150 + b]], { wash: '#2a4a8a', washA: 1, w: 1.6, col: TM.line, key: 20111 });
    ctx.save(); ctx.clip(tie.path); for (let i = 0; i < 8; i++) pencil([[-20, -250 + i * 16 + b], [20, -238 + i * 16 + b]], { w: 3, col: '#e8c040', a: 0.8, pass2: false }); ctx.restore();
    for (const sd of [-1, 1]) { const lp = poly([[sd * 14, -260 + b], [sd * 64, -254 + b], [sd * 70, -180 + b], [sd * 30, -120 + b], [sd * 18, -200 + b]], { wash: OF.top, washA: 1, w: 2.2, col: TM.line, key: 20112 + sd }); shadeG(lp.path, sd * 70, 0, sd * 14, 0, OF.topD, 0.4); }
    for (let k = 0; k < 2; k++) for (const sd of [-1, 1]) ell(sd * 26, -150 + k * 26 + b, 4.4, 4.4, { wash: '#2a1a0a', washA: 1, w: 1, col: '#000' });
    poly([[56, -200 + b], [80, -200 + b], [76, -186 + b], [60, -186 + b]], { wash: '#f4f0e8', washA: 1, w: 1.2, col: TM.line }); pencil([[56, -186 + b], [84, -186 + b]], { w: 2, col: OF.topD, pass2: false });
  };
  COST6.carbo = (OF, b, t, bp, L) => {                                    // холщовая рубаха угольщика: сажа, заплата, кожаный пояс
    hatch(bp.path, bp.bb, { gap: 5, a: 0.18, col: OF.topD, ang: 1.1, key: 20120, w: 1.2 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.45);
    ctx.save(); ctx.clip(bp.path); const r = rng(20121); for (let i = 0; i < 12; i++) ell(-90 + r() * 180, -250 + r() * 140 + b, 8 + r() * 14, 5 + r() * 8, { wash: '#1a1a1a', washA: 0.35, line: false }); ctx.restore();
    pencil([[-20, -258 + b], [0, -220 + b], [20, -258 + b]], { w: 2.4, col: TM.line, pass2: false }); for (let k = 0; k < 3; k++) pencil([[-6, -248 + k * 10 + b], [6, -244 + k * 10 + b]], { w: 1.4, col: '#5a4a2a', pass2: false });
    const pt = rect(40, -200 + b, 34, 30, { wash: '#6a5a3a', washA: 1, w: 1.4, col: TM.line, key: 20122 }); for (let k = 0; k < 4; k++) pencil([[40, -196 + k * 8 + b], [74, -196 + k * 8 + b]], { w: 1, col: '#3a2a1a', a: 0.6, gap: true, pass2: false });
    rect(-104, -118 + b, 208, 16, { wash: '#4a2a14', washA: 1, w: 1.6, col: TM.line }); rect(-10, -120 + b, 20, 20, { wash: '#a8884a', washA: 1, w: 1.4, col: '#3a2a08' });
  };
  COST6.army = (OF, b, t, bp, L) => {                                     // хаки-рубаха: два кармана с клапанами, погоны, пуговицы, жетон
    hatch(bp.path, bp.bb, { gap: 6, a: 0.12, col: OF.topD, ang: 0.9, key: 20130, w: 1.2 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.4);
    pencil([[0, -250 + b], [0, -110 + b]], { w: 2, col: OF.topD, a: 0.6, pass2: false }); for (let k = 0; k < 5; k++) ell(0, -236 + k * 28 + b, 3.6, 3.6, { wash: '#5a5430', washA: 1, w: 0.8, col: '#2a2a10' });
    for (const sd of [-1, 1]) { const pk = rect(sd * 50 - 22, -224 + b, 44, 44, { wash: OF.top, washA: 1, w: 1.6, col: TM.line, key: 20131 + sd }); shadeG(pk.path, sd * 72, 0, sd * 28, 0, OF.topD, 0.3);
      poly([[sd * 50 - 24, -226 + b], [sd * 50 + 24, -226 + b], [sd * 50 + 22, -208 + b], [sd * 50, -202 + b], [sd * 50 - 22, -208 + b]], { wash: OF.topL, washA: 1, w: 1.4, col: TM.line }); ell(sd * 50, -208 + b, 3, 3, { wash: '#5a5430', washA: 1, line: false });
      rect(sd * 80 - 16, -262 + b, 32, 12, { wash: OF.topD, washA: 1, w: 1.2, col: TM.line }); }
    pencil(spline([[-20, -258 + b], [-10, -226 + b], [10, -226 + b], [20, -258 + b]], false, 5), { w: 1.4, col: '#b8b8c0', pass2: false }); rect(-8, -232 + b, 16, 22, { wash: '#c8ccd4', washA: 1, w: 1, col: '#4a4e58' });
  };
  HAT6.fedora = (t, o, fx, L) => {                                        // фетровая шляпа: поля, вмятина-«ромб», лента
    push(fx * 0.3, -96, 0.86);
    const br = ell(0, 6, 134, 26, { wash: '#4a3626', washA: 1, w: 2.4, col: TM.line, key: 20140 }); shadeG(br.path, 0, 30, 0, -20, '#1a0e06', 0.45);
    const cr = blob([[-84, 6], [-90, -60], [-50, -100], [0, -84], [50, -100], [90, -60], [84, 6]], { wash: '#5a4230', washA: 1, w: 2.6, col: TM.line, key: 20141 }); shadeG(cr.path, 90, 0, -84, 0, '#2a1a0a', 0.45);
    rect(-86, -26, 172, 24, { wash: '#1a1a1a', washA: 1, w: 1.6, col: TM.line }); pencil([[-40, -92], [0, -70], [40, -92]], { w: 2, col: '#2a1a0a', a: 0.6, pass2: false }); pop();
  };
  HAT6.felt = (t, o, fx, L) => {                                          // широкополая мятая войлочная шляпа угольщика
    push(fx * 0.3, -94, 0.86);
    const br = blob([[-160, 14], [-120, -10], [0, -16], [120, -14], [164, 10], [100, 30], [-100, 30]], { wash: '#3a3026', washA: 1, w: 2.4, col: TM.line, key: 20150 }); shadeG(br.path, 0, 30, 0, -16, '#000', 0.45);
    const cr = blob([[-76, 0], [-70, -70], [-20, -96], [40, -90], [76, -60], [80, 0]], { wash: '#4a3e30', washA: 1, w: 2.4, col: TM.line, key: 20151 }); shadeG(cr.path, 80, 0, -76, 0, '#1a140c', 0.45); hatch(cr.path, cr.bb, { gap: 5, a: 0.2, col: '#1a140c', ang: 0.7, key: 20152, w: 1 });
    ell(30, -40, 12, 8, { wash: '#1a1a1a', washA: 0.4, line: false }); pop();
  };
  HAT6.garrison = (t, o, fx, L) => {                                      // пилотка хаки набок
    push(fx * 0.3 + 10, -96, 0.84, 0.12);
    const g = poly([[-90, 10], [-70, -40], [0, -54], [80, -40], [96, 10]], { wash: '#7a7448', washA: 1, w: 2.4, col: TM.line, key: 20160 }); shadeG(g.path, 96, 0, -90, 0, '#3a3a20', 0.45);
    pencil([[-86, -6], [92, -6]], { w: 2, col: '#4a4628', pass2: false }); pencil([[-70, -40], [0, -14], [80, -40]], { w: 1.6, col: '#4a4628', a: 0.7, pass2: false }); ell(-50, -16, 6, 6, { wash: '#d6a842', washA: 1, w: 1, col: '#6a4a08' }); pop();
  };
  const TROPHY20 = { x: -40, y: -64 };
  const _c20 = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c20(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const x = TROPHY20.x, y = TROPHY20.y + bob;   // трофей №20: капля желтка + перец
    const k = blob([[x - 14, y + 2], [x - 10, y - 9], [x + 2, y - 13], [x + 12, y - 6], [x + 12, y + 6], [x + 2, y + 12], [x - 10, y + 10]], { wash: '#f2b41e', washA: 0.97, w: 1.2, col: '#8a5a08' }); shadeG(k.path, x + 12, 0, x - 14, 0, '#b8780a', 0.4);
    ell(x - 5, y - 4, 3.4, 2, { wash: '#fff2a0', washA: 0.9, line: false }); for (const [dx, dy] of [[4, 2], [-4, 5], [8, -4], [16, 10], [-16, -8]]) ell(x + dx, y + dy, 1.6, 1.4, { wash: '#1a1008', washA: 1, line: false });
  };
})();
