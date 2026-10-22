/* 002 — костюмы выпуска «Наггетсы»: лаборант 1960-х (халат, очки на лбу, ручки в кармане), почтальон U.S. Mail, повар закусочной 70-х (бумажная пилотка),
   старатель (фланель + шляпа), адвокат (костюм-тройка). Фартук канала — из costumes.js; трофей №2 на фартуке — пятно соуса барбекю. */
(() => {
  Object.assign(OUTFIT, {
    labcoat: { top: '#f4f6f2', topD: '#a8b0ac', topL: '#ffffff', pants: '#3a3a44', detail: 'labcoat', collar: 'band', hat: 'goggles', boots: 'oxford', apron: 1 },
    postman: { top: '#3a5a8a', topD: '#1a2a4a', topL: '#6a8abe', pants: '#2a3a5a', detail: 'postman', hat: 'postcap', boots: 'oxford', shirt: '#d8e0ea', apron: 1 },
    diner: { top: '#f6f2e8', topD: '#b4ac9a', topL: '#ffffff', pants: '#2a2622', detail: 'diner', hat: 'paper', boots: 'oxford', apron: 1 },
    prospector: Object.assign({}, OUTFIT.iron, { top: '#a8322a', topD: '#5e1612', topL: '#d65a4a', pants: '#4a5a7a', shirt: '#e8d8b0', detail: 'flannel', hat: 'panama', gloves: 0, apron: 1 }),
    lawyer: { top: '#2a3448', topD: '#121828', topL: '#4a5878', pants: '#2a3448', detail: 'lawyer', hat: null, boots: 'oxford', shirt: '#f2f0ea', apron: 1 },
  });
  COST6.labcoat = (OF, b, t, bp, L) => {                                 // длинный белый халат: полы ниже колен, карман с ручками, бейдж
    skirt6(OF, b, L, -118, -36, 92, 104, 9201, OF.top);
    hatch(bp.path, bp.bb, { gap: 7, a: 0.07, col: OF.topD, ang: 0.9, key: 9202, w: 1.2 });
    for (const sd of [-1, 1]) { const lp = poly([[sd * 22, -250 + b], [sd * 64, -244 + b], [sd * 40, -170 + b], [sd * 6, -140 + b]], { wash: '#eef0ec', washA: 1, w: 2.2, col: TM.line, key: 9203 + sd }); shadeG(lp.path, 0, -140 + b, 0, -250 + b, OF.topD, 0.3); }
    rect(-58, -196 + b, 34, 30, { wash: '#eef0ec', washA: 1, w: 1.8, col: TM.line }); for (const [x, c] of [[-50, '#2a5aa8'], [-40, '#d9482b'], [-32, '#2a2a2a']]) pencil([[x, -194 + b], [x, -218 + b]], { w: 4, col: c, pass2: false });
    rect(22, -196 + b, 34, 22, { wash: '#f6f0d8', washA: 1, w: 1.4, col: '#6a6a6a' }); pencil([[26, -186 + b], [50, -186 + b]], { w: 1.4, col: '#6a6a6a', pass2: false });
    pencil([[0, -140 + b], [0, -40 + b]], { w: 2, col: OF.topD, a: 0.7, pass2: false }); for (let k = 0; k < 3; k++) nb(8, -128 + k * 30 + b, 4, '#e8e8e8');
  };
  HAT6.goggles = (t, o, fx) => {                                         // защитные очки, поднятые на лоб
    push(fx * 0.3, -70, 0.9); pencil([[-110, 6], [110, 6]], { w: 8, col: '#3a3a3a', pass2: false });
    for (const sd of [-1, 1]) { const g = ell(sd * 44, 0, 36, 26, { wash: '#bfe0ea', washA: 0.85, w: 4, col: '#2a2a2a' }); glow(sd * 44 - 10, -6, 16, 'rgba(255,255,255,1)', 0.7); } pop();
  };
  COST6.postman = (OF, b, t, bp, L) => {                                 // китель почтальона: латунные пуговицы, нагрудные карманы, ремень сумки через плечо
    hatch(bp.path, bp.bb, { gap: 7, a: 0.1, col: OF.topD, ang: 0.9, key: 9210, w: 1.2 });
    for (const sd of [-1, 1]) { rect(sd * 34 - 18, -214 + b, 36, 28, { wash: OF.topL, washA: 0.4, w: 1.8, col: TM.line }); nb(sd * 34, -210 + b, 4); }
    for (let k = 0; k < 4; k++) nb(0, -230 + k * 34 + b, 4.5);
    pencil([[-60, -246 + b], [60, -90 + b]], { w: 9, col: '#6a4424', pass2: false }); pencil([[-60, -246 + b], [60, -90 + b]], { w: 2, col: '#a8784a', a: 0.7, pass2: false });
  };
  HAT6.postcap = (t, o, fx, L) => {                                      // фуражка почтальона с латунным значком
    push(fx * 0.3, -70, 0.78); const c = blob([[-100, -8], [-110, -60], [-40, -96], [40, -96], [110, -60], [100, -8]], { wash: '#2a4a7a', washA: 1, w: 2.6, col: TM.line, key: 9211 }); shadeG(c.path, -L.side * 100, 0, L.side * 40, 0, '#0a1a3a', 0.5);
    rect(-104, -14, 208, 20, { wash: '#1a2a4a', washA: 1, w: 2.2, col: TM.line }); blob([[-80, 6], [80, 6], [110, 26], [-110, 26]], { wash: '#141414', washA: 1, w: 2.2, col: TM.line }); ell(0, -40, 16, 16, { wash: CU.gold, washA: 1, w: 1.8, col: CU.goldD }); pop();
  };
  COST6.diner = (OF, b, t, bp, L) => {                                   // рубашка повара закусочной: короткий рукав, полоска томатного канта, бейдж с именем
    hatch(bp.path, bp.bb, { gap: 7, a: 0.08, col: OF.topD, ang: 0.9, key: 9220, w: 1.2 });
    pencil([[-50, -240 + b], [0, -200 + b], [50, -240 + b]], { w: 6, col: '#d9482b', pass2: false }); for (let k = 0; k < 3; k++) nb(0, -190 + k * 30 + b, 4, '#f0ece2');
    rect(18, -214 + b, 44, 20, { wash: '#e8b53a', washA: 1, w: 1.4, col: TM.line }); txt('TOM', 40, -204 + b, 14, { font: 'Osw', col: '#2b2622' });
  };
  HAT6.paper = (t, o, fx, L) => {                                        // бумажная пилотка
    push(fx * 0.3, -86, 0.8); const p = poly([[-110, 0], [-80, -70], [80, -70], [110, 0]], { wash: '#fbf8f0', washA: 1, w: 2.4, col: TM.line, key: 9221 }); shadeG(p.path, -L.side * 110, 0, 0, 0, '#b8b0a0', 0.45);
    pencil([[-96, -20], [96, -20]], { w: 6, col: '#d9482b', pass2: false }); pencil([[-60, -64], [0, -40], [60, -64]], { w: 1.6, col: '#b8b0a0', a: 0.7, pass2: false }); pop();
  };
  COST6.flannel = (OF, b, t, bp, L) => {                                 // фланелевая рубаха в клетку + подтяжки
    ctx.save(); ctx.clip(bp.path); for (let i = -6; i < 7; i++) { pencil([[i * 22, -260 + b], [i * 22, -20 + b]], { w: 7, col: '#3a0a06', a: 0.35, pass2: false }); pencil([[-90, -250 + i * 22 + 130 + b], [90, -250 + i * 22 + 130 + b]], { w: 7, col: '#3a0a06', a: 0.35, pass2: false }); } ctx.restore();
    for (const sd of [-1, 1]) pencil([[sd * 30, -250 + b], [sd * 34, -100 + b]], { w: 8, col: '#5a3a1a', pass2: false });
  };
  COST6.lawyer = (OF, b, t, bp, L) => {                                  // костюм-тройка: лацканы, белая рубашка, бордовый галстук, платок в кармане
    hatch(bp.path, bp.bb, { gap: 7, a: 0.1, col: OF.topD, ang: 0.9, key: 9230, w: 1.2 });
    poly([[-22, -250 + b], [22, -250 + b], [8, -150 + b], [-8, -150 + b]], { wash: OF.shirt, washA: 1, w: 1.8, col: TM.line });
    poly([[-8, -244 + b], [8, -244 + b], [12, -170 + b], [0, -150 + b], [-12, -170 + b]], { wash: '#7a1a2a', washA: 1, w: 1.6, col: TM.line });
    for (const sd of [-1, 1]) poly([[sd * 22, -250 + b], [sd * 60, -244 + b], [sd * 36, -172 + b], [sd * 10, -140 + b]], { wash: OF.topL, washA: 0.5, w: 2.2, col: TM.line, key: 9231 + sd });
    poly([[34, -206 + b], [56, -206 + b], [50, -192 + b], [40, -190 + b]], { wash: '#f2f0ea', washA: 1, w: 1.4, col: TM.line }); for (let k = 0; k < 2; k++) nb(-14, -128 + k * 28 + b, 4.5, '#1a1a1a');
  };
  // ---------------------------------------------------------------- трофей №2 на фартуке: пятно барбекю (после выпуска 002)
  const _c5b = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c5b(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    ctx.save(); ctx.globalAlpha = 0.6; ctx.fillStyle = '#7a2a12'; ctx.beginPath(); ctx.ellipse(-36, -150 + b, 7, 5, -0.4, 0, 6.3); ctx.fill(); ctx.beginPath(); ctx.ellipse(-26, -144 + b, 3, 2.4, 0, 0, 6.3); ctx.fill(); ctx.restore();
  };
})();
