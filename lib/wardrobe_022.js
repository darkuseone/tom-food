/* 022 — костюмы выпуска «Докторская колбаса»: врач поликлиники (длинный белый халат, стетоскоп на шее, карман с термометром + шапочка `medcap` с красным
   крестом), технолог 70-х (синий рабочий халат с карманами и значком + `hairnet`), покупатель гастронома (вязаная кофта с косами и пуговицами + `flatcap`),
   архивариус 30-х (серый жилет поверх рубашки, чёрные нарукавники + зелёный козырёк `visor`), домашняя клетчатая рубашка (сегодня).
   Трофей №22 на фартуке — розовый кружок докторской с надкусом. */
(() => {
  Object.assign(OUTFIT, {
    docA: { top: '#f6f8f6', topD: '#a8b4b0', topL: '#ffffff', pants: '#3a3a44', detail: 'doctor', collar: 'band', hat: 'medcap', boots: 'oxford', apron: 1 },
    techA: { top: '#3a5a9a', topD: '#16264a', topL: '#6a8ac8', pants: '#2a2a34', detail: 'tech', hat: 'hairnet', boots: 'oxford', apron: 1 },
    buyerA: { top: '#7a5a3a', topD: '#3a2614', topL: '#a8845a', pants: '#3a3a44', shirt: '#e8e0cc', detail: 'cardigan', hat: 'flatcap', boots: 'oxford', apron: 1 },
    archA: { top: '#e8e2d0', topD: '#9a9278', topL: '#fffaf0', pants: '#3a3a40', shirt: '#e8e2d0', detail: 'archivist', hat: 'visor', boots: 'oxford', apron: 1 },
    homeA: { top: '#3a6a9a', topD: '#16304a', topL: '#6a9ac8', pants: '#3a3a44', shirt: '#3a6a9a', detail: 'checks', boots: 'soft', apron: 1 },
  });
  COST6.doctor = (OF, b, t, bp, L) => {                                    // белый халат врача: лацканы, карман с термометром и ручкой, стетоскоп на шее
    skirt6(OF, b, L, -118, -36, 92, 104, 22301, OF.top);
    hatch(bp.path, bp.bb, { gap: 7, a: 0.07, col: OF.topD, ang: 0.9, key: 22302, w: 1.2 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.35);
    for (const sd of [-1, 1]) { const lp = poly([[sd * 22, -250 + b], [sd * 64, -244 + b], [sd * 40, -170 + b], [sd * 6, -140 + b]], { wash: '#eef2ee', washA: 1, w: 2.2, col: TM.line, key: 22303 + sd }); shadeG(lp.path, 0, -140 + b, 0, -250 + b, OF.topD, 0.3); }
    rect(-60, -196 + b, 36, 32, { wash: '#eef2ee', washA: 1, w: 1.8, col: TM.line }); pencil([[-52, -194 + b], [-52, -222 + b]], { w: 4, col: '#2a5aa8', pass2: false }); pencil([[-38, -194 + b], [-38, -226 + b]], { w: 3, col: '#d8e8f0', pass2: false }); ell(-38, -228 + b, 3, 3, { wash: '#c8241e', washA: 1, line: false });
    pencil(spline([[-40, -262 + b], [-56, -200 + b], [-30, -150 + b], [0, -140 + b], [30, -150 + b], [56, -200 + b], [40, -262 + b]], false, 6), { w: 5, col: '#2a2a2a', pass2: false });
    pencil(spline([[30, -150 + b], [40, -120 + b], [36, -96 + b]], false, 4), { w: 4, col: '#2a2a2a', pass2: false }); const c = ell(36, -90 + b, 12, 12, { wash: '#c8c8d0', washA: 1, w: 1.8, col: TM.line }); metalG(c.path, 32, -94 + b, 12, '#ffffff', '#b8b8c4', '#5a5a68', 0.8);
    pencil([[0, -140 + b], [0, -40 + b]], { w: 2, col: OF.topD, a: 0.7, pass2: false }); for (let k = 0; k < 3; k++) nb(8, -128 + k * 30 + b, 4, '#e8e8e8');
  };
  COST6.tech = (OF, b, t, bp, L) => {                                      // синий халат технолога: накладные карманы, ручки, значок-ромб, пояс
    skirt6(OF, b, L, -118, -36, 92, 104, 22311, OF.top);
    hatch(bp.path, bp.bb, { gap: 7, a: 0.12, col: OF.topD, ang: 1.0, key: 22312, w: 1.2 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.45);
    for (const sd of [-1, 1]) rect(sd * 36 - 18, -206 + b, 36, 30, { wash: OF.topL, washA: 0.5, w: 1.8, col: TM.line }); pencil([[-44, -204 + b], [-44, -226 + b]], { w: 4, col: '#d8d8d8', pass2: false }); pencil([[-34, -204 + b], [-34, -222 + b]], { w: 4, col: '#c8241e', pass2: false });
    poly([[36, -236 + b], [46, -226 + b], [36, -216 + b], [26, -226 + b]], { wash: '#c8a040', washA: 1, w: 1.2, col: '#5a3a08' }); rect(-90, -122 + b, 180, 12, { wash: OF.topD, washA: 1, w: 1.4, col: TM.line });
    for (let k = 0; k < 4; k++) nb(0, -236 + k * 30 + b, 4, '#d8d8e0');
  };
  COST6.cardigan = (OF, b, t, bp, L) => {                                  // вязаная кофта: косы, ряд пуговиц, рубашка с воротником
    ctx.save(); ctx.clip(bp.path); for (let i = -3; i <= 3; i++) for (let y = -270; y < 10; y += 16) { pencil([[i * 30 - 6, y + b], [i * 30, y + 8 + b], [i * 30 + 6, y + b]], { w: 2, col: OF.topD, a: 0.45, pass2: false }); } ctx.restore();
    shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.45);
    poly([[-26, -262 + b], [0, -200 + b], [26, -262 + b]], { wash: OF.shirt, washA: 1, w: 1.8, col: TM.line }); for (const sd of [-1, 1]) poly([[sd * 4, -262 + b], [sd * 30, -262 + b], [sd * 12, -238 + b]], { wash: '#ffffff', washA: 1, w: 1.4, col: TM.line });
    for (let k = 0; k < 5; k++) ell(-4, -190 + k * 30 + b, 5, 5, { wash: '#3a2614', washA: 1, w: 1, col: '#1a0e06' }); pencil([[-4, -200 + b], [-4, -40 + b]], { w: 2, col: OF.topD, pass2: false });
  };
  COST6.archivist = (OF, b, t, bp, L) => {                                 // серый жилет на пуговицах, рубашка, галстук, чёрные нарукавники
    hatch(bp.path, bp.bb, { gap: 8, a: 0.07, col: OF.topD, ang: 1.2, key: 22321, w: 1 });
    for (const sd of [-1, 1]) { const v = poly([[sd * 12, -258 + b], [sd * 74, -246 + b], [sd * 76, -104 + b], [sd * 8, -100 + b]], { wash: '#4a4c52', washA: 1, w: 2, col: TM.line, key: 22322 + sd }); shadeG(v.path, sd * 76, 0, sd * 8, 0, '#16161c', 0.45); hatch(v.path, v.bb, { gap: 5, a: 0.15, col: '#16161c', ang: 0.6, key: 22324 + sd, w: 1 }); }
    poly([[-8, -256 + b], [8, -256 + b], [6, -150 + b], [0, -140 + b], [-6, -150 + b]], { wash: '#6a2a3a', washA: 1, w: 1.4, col: TM.line });
    for (let k = 0; k < 4; k++) ell(-12, -224 + k * 30 + b, 4, 4, { wash: '#c8c0a8', washA: 1, w: 0.8, col: '#3a3428' }); pencil(spline([[-12, -168 + b], [20, -156 + b], [52, -166 + b]], false, 5), { w: 2, col: '#d8c060', pass2: false });
  };
  COST6.checks = (OF, b, t, bp, L) => {                                    // клетчатая фланелевая рубашка: красно-синяя клетка, карман, пуговицы
    ctx.save(); ctx.clip(bp.path); for (let i = -6; i <= 6; i++) { pencil([[i * 22, -290 + b], [i * 22, 20 + b]], { w: 8, col: '#c8343a', a: 0.45, pass2: false }); } for (let y = -290; y < 20; y += 22) pencil([[-130, y + b], [130, y + b]], { w: 8, col: '#c8343a', a: 0.35, pass2: false }); for (let i = -6; i <= 6; i++) pencil([[i * 22 + 11, -290 + b], [i * 22 + 11, 20 + b]], { w: 1.6, col: '#f4e8d0', a: 0.4, pass2: false }); ctx.restore();
    shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.4);
    for (const sd of [-1, 1]) poly([[sd * 4, -262 + b], [sd * 34, -262 + b], [sd * 14, -236 + b]], { wash: '#3a6a9a', washA: 1, w: 1.6, col: TM.line });
    for (let k = 0; k < 4; k++) ell(0, -226 + k * 30 + b, 4, 4, { wash: '#f4f0e6', washA: 1, w: 0.8, col: '#3a3a3a' }); rect(24, -214 + b, 36, 30, { wash: '#3a6a9a', washA: 0.4, w: 1.6, col: TM.line });
  };
  HAT6.medcap = (t, o, fx, L) => {                                         // белая шапочка врача с красным крестом
    push(fx * 0.3, -86, 0.8); const c = blob([[-100, 0], [-100, -70], [-60, -92], [60, -92], [100, -70], [100, 0]], { wash: '#fbfbf8', washA: 1, w: 2.4, col: TM.line, key: 22330 }); shadeG(c.path, -L.side * 100, 0, L.side * 30, 0, '#a8b0b0', 0.45);
    pencil([[-98, -14], [98, -14]], { w: 2, col: '#b8c0c0', pass2: false }); rect(-10, -76, 20, 52, { wash: '#d8242a', washA: 1, line: false }); rect(-26, -60, 52, 20, { wash: '#d8242a', washA: 1, line: false }); pop();
  };
  HAT6.visor = (t, o, fx, L) => {                                          // зелёный козырёк-«абажур» архивариуса на резинке
    push(fx * 0.3, -60, 0.84); pencil([[-100, -6], [100, -6]], { w: 6, col: '#2a2a2a', pass2: false });
    const v = poly([[-80, -8], [80, -8], [120, 40], [-120, 40]], { wash: '#2a8a5a', washA: 0.85, w: 2.2, col: TM.line, key: 22331 }); shadeG(v.path, 0, -8, 0, 40, '#0a3a1a', 0.45); pencil([[-110, 36], [110, 36]], { w: 2, col: '#7ac89a', a: 0.6, pass2: false }); pop();
  };
  const TROPHY22 = { x: 38, y: -70 };
  const _c22 = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c22(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const x = TROPHY22.x, y = TROPHY22.y + bob;   // трофей №22: розовый кружок докторской с надкусом
    const s = ell(x, y, 14, 14, { wash: DK.casing, washA: 1, w: 1.1, col: '#6a2a2a' }); ell(x, y, 11.5, 11.5, { wash: DK.pink, washA: 1, line: false });
    for (const [dx, dy] of [[-4, -3], [3, 2], [-2, 5], [5, -5], [0, 0]]) ell(x + dx, y + dy, 1.4, 1.2, { wash: DK.fat, washA: 1, line: false });
    pencil([[x + 9, y - 9], [x + 14, y - 4], [x + 10, y + 1], [x + 14, y + 6]], { w: 2.4, col: '#f4efe4', pass2: false });
    ell(x - 5, y - 6, 4, 1.6, { wash: '#ffffff', washA: 0.7, line: false });
  };
})();
