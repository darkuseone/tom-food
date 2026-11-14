/* 021 — костюмы выпуска «Сырники»: утренний халат в полоску (шалевый воротник, пояс с кистями), новгородский писец XIV в. (льняная рубаха с красной
   вышивкой по вороту и плетёный пояс), боярский повар XVI в. (зелёный кафтан с золотыми петлицами-«разговорами», стоячий ворот + шапка `murmolka`),
   кухарка XIX в. (ситцевая кофта в цветочек + косынка `kerchief`), сыровар 1866 (рубаха, жилет, нарукавники + `kartuz`), повар столовой 1950-х
   (белая куртка, значок, колпак `toque`). Трофей №21 на фартуке — завиток сметаны с вишенкой варенья. */
(() => {
  Object.assign(OUTFIT, {
    robeS: { top: '#8a2a34', topD: '#3a0a12', topL: '#b8505a', pants: '#3a2a3a', shirt: '#8a2a34', detail: 'robe', boots: 'soft', apron: 1 },
    scribeA: { top: '#e8dcc0', topD: '#9a8a68', topL: '#fff6e0', pants: '#5a4a3a', shirt: '#e8dcc0', detail: 'scribe', boots: 'soft', apron: 1 },
    boyarA: { top: '#2a5a3a', topD: '#0e2a16', topL: '#4a8a5a', pants: '#3a2a1a', shirt: '#2a5a3a', detail: 'boyar', hat: 'murmolka', boots: 'soft', apron: 1 },
    kuhA: { top: '#e8eef4', topD: '#8a98a8', topL: '#ffffff', pants: '#3a3a4a', shirt: '#e8eef4', detail: 'chintz', hat: 'kerchief', boots: 'soft', apron: 1 },
    syrA: { top: '#f0e8d4', topD: '#a8987a', topL: '#ffffff', pants: '#3a3226', shirt: '#f0e8d4', detail: 'syrovar', hat: 'kartuz', boots: 'oxford', apron: 1 },
    stolA: { top: '#f6f6f2', topD: '#a8b0b8', topL: '#ffffff', pants: '#4a4a52', shirt: '#f6f6f2', detail: 'stol', hat: 'toque', boots: 'oxford', apron: 1 },
  });
  COST6.robe = (OF, b, t, bp, L) => {                                     // халат в полоску: кремовые полосы, шалевый воротник, пояс с кистями
    ctx.save(); ctx.clip(bp.path); for (let i = -7; i < 8; i++) { pencil([[i * 20, -280 + b], [i * 20 + 6, 10 + b]], { w: 5, col: '#e8c8a0', a: 0.55, pass2: false }); pencil([[i * 20 + 8, -280 + b], [i * 20 + 14, 10 + b]], { w: 1.6, col: '#e8c8a0', a: 0.4, pass2: false }); } ctx.restore();
    shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.45);
    for (const sd of [-1, 1]) { const c = poly([[sd * 8, -262 + b], [sd * 60, -256 + b], [sd * 40, -170 + b], [sd * 6, -120 + b]], { wash: '#2a0a12', washA: 1, w: 2, col: TM.line, key: 21301 + sd }); shadeG(c.path, sd * 60, 0, 0, 0, '#5a1a24', 0.4); pencil([[sd * 10, -258 + b], [sd * 8, -126 + b]], { w: 2, col: '#d8a850', a: 0.7, pass2: false }); }
    rect(-90, -112 + b, 180, 14, { wash: '#2a0a12', washA: 1, w: 1.6, col: TM.line }); for (const dx of [20, 40]) { pencil([[dx, -104 + b], [dx + 6, -60 + b]], { w: 4, col: '#2a0a12', pass2: false }); ell(dx + 6, -56 + b, 6, 10, { wash: '#d8a850', washA: 1, w: 1, col: '#6a4a08' }); }
  };
  COST6.scribe = (OF, b, t, bp, L) => {                                   // льняная рубаха: красная вышивка-ромбы по вороту и подолу, плетёный пояс
    hatch(bp.path, bp.bb, { gap: 6, a: 0.1, col: OF.topD, ang: 1.3, key: 21310, w: 1 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.4);
    pencil([[-34, -262 + b], [0, -236 + b], [34, -262 + b]], { w: 7, col: '#b8241e', pass2: false }); for (let i = -2; i <= 2; i++) poly([[i * 12, -254 + b + Math.abs(i) * -4], [i * 12 + 5, -248 + b], [i * 12, -242 + b], [i * 12 - 5, -248 + b]], { wash: '#b8241e', washA: 1, w: 0.8, col: '#5a0a04' });
    pencil([[-6, -238 + b], [-6, -190 + b]], { w: 4, col: '#b8241e', pass2: false }); for (let k = 0; k < 3; k++) ell(-6, -230 + k * 16 + b, 2.6, 2.6, { wash: '#f4e0a0', washA: 1, line: false });
    rect(-96, -118 + b, 192, 12, { wash: '#c8241e', washA: 1, w: 1.4, col: TM.line }); for (let i = 0; i < 12; i++) pencil([[-92 + i * 16, -118 + b], [-84 + i * 16, -106 + b]], { w: 2, col: '#f4d078', a: 0.8, pass2: false }); pencil([[60, -106 + b], [66, -66 + b]], { w: 4, col: '#c8241e', pass2: false }); pencil([[70, -106 + b], [80, -70 + b]], { w: 4, col: '#c8241e', pass2: false });
  };
  COST6.boyar = (OF, b, t, bp, L) => {                                    // кафтан: золотые петлицы, стоячий ворот, парчовая кайма
    hatch(bp.path, bp.bb, { gap: 7, a: 0.14, col: OF.topD, ang: 1.1, key: 21320, w: 1.2 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.5);
    const cl = rect(-40, -280 + b, 80, 30, { wash: '#c8a040', washA: 1, w: 1.8, col: TM.line, key: 21321 }); shadeG(cl.path, 40, 0, -40, 0, '#6a4a08', 0.4); for (let i = 0; i < 6; i++) ell(-30 + i * 12, -265 + b, 3, 3, { wash: '#b8241e', washA: 1, line: false });
    pencil([[0, -250 + b], [0, -110 + b]], { w: 3, col: TM.line, pass2: false }); for (let k = 0; k < 5; k++) { const y = -236 + k * 26 + b; for (const sd of [-1, 1]) pencil([[sd * 4, y], [sd * 34, y + 2]], { w: 5, col: '#e0b848', pass2: false }); ell(-4, y, 4, 4, { wash: '#f4d878', washA: 1, w: 0.8, col: '#6a4a08' }); }
  };
  COST6.chintz = (OF, b, t, bp, L) => {                                   // ситцевая кофта: синие цветочки, рюш у ворота
    ctx.save(); ctx.clip(bp.path); const r = rng(21330); for (let i = 0; i < 40; i++) { const x = -110 + r() * 220, y = -280 + r() * 290 + b; for (let p = 0; p < 4; p++) ell(x + Math.cos(p * 1.57) * 4, y + Math.sin(p * 1.57) * 4, 3, 3, { wash: '#3a6aa8', washA: 0.8, line: false }); ell(x, y, 2, 2, { wash: '#e8b030', washA: 1, line: false }); } ctx.restore();
    shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.4); for (let i = 0; i < 8; i++) ell(-35 + i * 10, -262 + b + Math.abs(i - 3.5) * 2, 7, 5, { wash: '#ffffff', washA: 1, w: 1, col: '#8a98a8' });
  };
  COST6.syrovar = (OF, b, t, bp, L) => {                                  // рубаха + тёмный жилет на пуговицах, часы на цепочке, нарукавники
    hatch(bp.path, bp.bb, { gap: 7, a: 0.08, col: OF.topD, ang: 1.2, key: 21340, w: 1 });
    for (const sd of [-1, 1]) { const v = poly([[sd * 12, -258 + b], [sd * 74, -246 + b], [sd * 76, -104 + b], [sd * 8, -100 + b]], { wash: '#3a3a4a', washA: 1, w: 2, col: TM.line, key: 21341 + sd }); shadeG(v.path, sd * 76, 0, sd * 8, 0, '#0a0a14', 0.45); }
    for (let k = 0; k < 4; k++) ell(-12, -230 + k * 30 + b, 4, 4, { wash: '#c8a040', washA: 1, w: 0.8, col: '#5a3a08' }); pencil(spline([[-12, -170 + b], [20, -156 + b], [50, -166 + b]], false, 5), { w: 2, col: '#e0c050', pass2: false });
    pencil([[-10, -258 + b], [0, -236 + b], [10, -258 + b]], { w: 3, col: '#1a1a1a', pass2: false });
  };
  COST6.stol = (OF, b, t, bp, L) => {                                     // белая куртка повара столовой: два ряда пуговиц, карман, значок
    hatch(bp.path, bp.bb, { gap: 8, a: 0.07, col: OF.topD, ang: 1.2, key: 21350, w: 1 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.4);
    for (const sd of [-1, 1]) for (let k = 0; k < 4; k++) ell(sd * 22, -236 + k * 28 + b, 4, 4, { wash: '#e8e8e8', washA: 1, w: 1, col: '#6a6a72' });
    rect(-64, -238 + b, 34, 26, { wash: '#f6f6f2', washA: 1, w: 1.4, col: '#8a8a92' }); pencil([[-60, -232 + b], [-56, -250 + b]], { w: 3, col: '#2a4a8a', pass2: false });
    ell(52, -224 + b, 11, 11, { wash: '#c8241e', washA: 1, w: 1.2, col: '#5a0a04' }); txt('★', 52, -218 + b, 14, { font: 'Osw', col: '#f4d040' });
    pencil([[-24, -264 + b], [0, -250 + b], [24, -264 + b]], { w: 3, col: '#a8b0b8', pass2: false });
  };
  HAT6.murmolka = (t, o, fx, L) => {                                      // мурмолка: высокая парчовая тулья, меховой отворот
    push(fx * 0.3, -92, 0.86);
    const cr = blob([[-70, 0], [-76, -90], [-40, -150], [20, -160], [70, -110], [72, 0]], { wash: '#8a1a24', washA: 1, w: 2.4, col: TM.line, key: 21360 }); shadeG(cr.path, 72, 0, -70, 0, '#3a0408', 0.5);
    for (let i = 0; i < 5; i++) pencil([[-60 + i * 30, -10], [-50 + i * 24, -140]], { w: 2, col: '#e0b848', a: 0.6, pass2: false });
    const f = blob([[-100, 20], [-104, -30], [-60, -44], [60, -44], [104, -30], [100, 20], [0, 30]], { wash: '#6a4a2a', washA: 1, w: 2.4, col: TM.line, key: 21361 }); hatch(f.path, f.bb, { gap: 4, a: 0.35, col: '#2a1a0a', ang: 1.4, key: 21362, w: 1.2 }); shadeG(f.path, 100, 0, -100, 0, '#2a1a0a', 0.35);
    ell(10, -150, 10, 10, { wash: '#f4d878', washA: 1, w: 1.2, col: '#6a4a08' }); pop();
  };
  const TROPHY21 = { x: 38, y: -70 };
  const _c21 = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c21(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const x = TROPHY21.x, y = TROPHY21.y + bob;   // трофей №21: завиток сметаны + вишенка варенья
    const d = blob([[x - 14, y + 6], [x - 12, y - 4], [x - 2, y - 10], [x + 4, y - 18], [x + 6, y - 8], [x + 14, y - 4], [x + 14, y + 6], [x, y + 10]], { wash: '#fbf8f0', washA: 1, w: 1.1, col: '#bfb4a0' });
    pencil([[x - 6, y - 2], [x + 2, y - 8], [x + 6, y - 4]], { w: 1.2, col: '#d8cdb8', pass2: false }); ell(x + 10, y + 8, 6, 5.6, { wash: '#a80e2a', washA: 1, w: 1, col: '#5a0614' }); ell(x + 8, y + 6, 2, 1.4, { wash: '#ff9aa8', washA: 1, line: false });
  };
})();
