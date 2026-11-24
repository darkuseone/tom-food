/* 026 — костюмы выпуска «Суши»: итамаэ (белая куртка с запахом, синяя кайма, индиговый пояс + повязка `hachimaki`), кимоно эпохи Муромати
   (оливковое, пояс-оби, ромбики), разносчик Эдо (индиговое хаппи с гербом 寿 + красно-белая повязка), торговец рыбой (коричневое хаппи + резиновые сапоги),
   норвежский свитер 80-х (синий, селбу-звёзды по кокетке), худи (сегодня), Том-малыш-итамаэ. Трофей №26 на фартуке — капля соевого соуса с рисинкой. */
(() => {
  Object.assign(OUTFIT, {
    itaA: { top: '#f4f2ea', topD: '#a8a698', topL: '#ffffff', pants: '#2a3458', shirt: '#f4f2ea', detail: 'itamae', hat: 'hachimaki', boots: 'soft', apron: 1 },
    kimA: { top: '#5a6a34', topD: '#2a3414', topL: '#8a9a58', pants: '#3a3a2a', shirt: '#5a6a34', detail: 'kimono', boots: 'soft', apron: 1 },
    edoA: { top: '#24336a', topD: '#0a1238', topL: '#4a5ca0', pants: '#2a2e44', shirt: '#24336a', detail: 'happi', hat: 'hachimaki', hbCol: '#c8202a', boots: 'soft', apron: 1 },
    mktA: { top: '#7a4a24', topD: '#3a200a', topL: '#a8743c', pants: '#3a3a3a', shirt: '#7a4a24', detail: 'happi', hat: 'hachimaki', hbCol: '#f4f2ea', boots: 'rubber', apron: 1, happiCol: '#e8dcc0', noKanji: 1 },
    norA: { top: '#2a4a8a', topD: '#0e1e48', topL: '#5a7ac0', pants: '#3a3a44', shirt: '#2a4a8a', detail: 'selbu', boots: 'soft', apron: 1 },
  });
  if (OUTFIT.hoodieA) OUTFIT.hoodS = Object.assign({}, OUTFIT.hoodieA, { top: '#2a3a5a', topD: '#101a30', topL: '#4a5a88', print: 'ТОМ', capTxt: 'Т', capCol: '#c8301e', capTxtCol: '#f6efd8', printCol: '#f4ecd6', accent: '#e8b53a', apron: 1 });   // синее худи «ТОМ» (хук)
  OUTFIT.itaB = Object.assign({}, OUTFIT.itaA);                                                                                      // малыш-итамаэ внутри суши
  const wrap = (OF, b, L, col, key) => {                                  // запах: диагональ слева направо + тонкая кайма
    pencil(spline([[-34, -262 + b], [-6, -200 + b], [24, -140 + b], [40, -70 + b]], false, 6), { w: 8, col, pass2: false });
    pencil(spline([[-30, -262 + b], [-2, -200 + b], [28, -140 + b], [44, -70 + b]], false, 6), { w: 1.6, col: OF.topD, a: 0.7, pass2: false });
  };
  COST6.itamae = (OF, b, t, bp, L) => {                                    // куртка итамаэ: белое кимоно с запахом, синяя кайма, узкий индиговый пояс с узлом
    hatch(bp.path, bp.bb, { gap: 8, a: 0.08, col: OF.topD, ang: 1.1, key: 26601, w: 1.1 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.35);
    wrap(OF, b, L, '#2a4a98', 26602);
    pencil(spline([[-34, -262 + b], [0, -252 + b], [34, -262 + b]], false, 4), { w: 5, col: '#2a4a98', pass2: false });
    rect(-100, -122 + b, 200, 12, { wash: '#1a2458', washA: 1, w: 1.6, col: TM.line }); for (let k = 0; k < 6; k++) pencil([[-90 + k * 36, -120 + b], [-86 + k * 36, -112 + b]], { w: 1.2, col: '#4a5aa0', a: 0.7, pass2: false });
    pencil([[46, -112 + b], [54, -60 + b]], { w: 5, col: '#1a2458', pass2: false }); pencil([[56, -112 + b], [70, -66 + b]], { w: 5, col: '#1a2458', pass2: false });
    for (let k = 0; k < 4; k++) pencil([[-80 + k * 8, -230 + k * 40 + b], [-60 + k * 8, -226 + k * 40 + b]], { w: 1, col: OF.topD, a: 0.5, pass2: false });
  };
  COST6.kimono = (OF, b, t, bp, L) => {                                    // кимоно Муромати: оливковое, запах, широкий охристый оби с узелком, ромбики по ткани
    ctx.save(); ctx.clip(bp.path); for (let i = -4; i <= 4; i++) for (let j = 0; j < 9; j++) { const x = i * 24 + (j % 2) * 12, y = -250 + j * 24 + b; poly([[x, y - 4], [x + 4, y], [x, y + 4], [x - 4, y]], { wash: OF.topL, washA: 0.55, line: false }); } ctx.restore();
    hatch(bp.path, bp.bb, { gap: 8, a: 0.12, col: OF.topD, ang: 1.0, key: 26611, w: 1.1 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.5);
    wrap(OF, b, L, '#d8d0a8', 26612);
    rect(-102, -146 + b, 204, 46, { wash: '#c8962a', washA: 1, w: 2, col: TM.line }); for (let k = 0; k < 7; k++) pencil([[-92 + k * 30, -142 + b], [-92 + k * 30, -104 + b]], { w: 1.2, col: '#8a620a', a: 0.6, pass2: false });
    rect(-102, -126 + b, 204, 5, { wash: '#7a2a1a', washA: 1, line: false }); ell(50, -122 + b, 18, 14, { wash: '#c8962a', washA: 1, w: 1.6, col: TM.line }); pencil([[50, -112 + b], [44, -70 + b]], { w: 6, col: '#c8962a', pass2: false });
  };
  COST6.happi = (OF, b, t, bp, L) => {                                     // хаппи: короткая куртка с белой каймой по вороту и подолу, круглый герб на груди (寿), пояс
    const cb = OF.happiCol || '#f4f2ea'; hatch(bp.path, bp.bb, { gap: 7, a: 0.14, col: OF.topD, ang: 1.0, key: 26621, w: 1.2 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.45);
    for (const sd of [-1, 1]) pencil(spline([[sd * 6, -262 + b], [sd * 20, -220 + b], [sd * 28, -150 + b], [sd * 30, -90 + b]], false, 6), { w: 9, col: cb, pass2: false });
    pencil(spline([[-32, -264 + b], [0, -254 + b], [32, -264 + b]], false, 4), { w: 6, col: cb, pass2: false });
    if (!OF.noKanji) { ell(0, -190 + b, 30, 30, { wash: '#f6f2e6', washA: 1, w: 2, col: TM.line }); ell(0, -190 + b, 25, 25, { wash: '#f6f2e6', washA: 0, w: 1, col: OF.topD }); txt('寿', 0, -176 + b, 36, { font: 'Osw', col: '#c8202a', bold: true, align: 'center' }); }
    else { for (let k = 0; k < 3; k++) pencil(spline([[-60 + k * 6, -200 + k * 22 + b], [-20, -192 + k * 22 + b], [20, -200 + k * 22 + b]], false, 4), { w: 1.4, col: OF.topD, a: 0.6, pass2: false }); }
    pencil([[-100, -70 + b], [100, -70 + b]], { w: 8, col: cb, pass2: false }); rect(-96, -126 + b, 192, 12, { wash: '#ece4d0', washA: 1, w: 1.4, col: TM.line }); pencil([[40, -114 + b], [46, -70 + b]], { w: 4, col: '#ece4d0', pass2: false });
  };
  COST6.selbu = (OF, b, t, bp, L) => {                                     // норвежский свитер: синий, белая кокетка с восьмиконечными звёздами (селбу-роза), резинка, горло
    ctx.save(); ctx.clip(bp.path); rect(-120, -272 + b, 240, 6, { wash: '#f4f2ea', washA: 1, line: false });
    for (let i = -3; i <= 3; i++) for (let row = 0; row < 3; row++) { const x = i * 34 + (row % 2) * 17, y = -236 + row * 34 + b;
      for (let a = 0; a < 8; a++) { const an = a * Math.PI / 4, r = a % 2 ? 9 : 15; pencil([[x, y], [x + Math.cos(an) * r, y + Math.sin(an) * r]], { w: 3, col: '#f4f2ea', pass2: false }); } ell(x, y, 3, 3, { wash: '#c8202a', washA: 1, line: false }); }
    for (let i = -6; i <= 6; i++) { pencil([[i * 17, -266 + b], [i * 17 + 5, -256 + b]], { w: 2, col: '#f4f2ea', pass2: false }); pencil([[i * 17, -134 + b], [i * 17 + 5, -126 + b]], { w: 2, col: '#f4f2ea', pass2: false }); } ctx.restore();
    shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.45);
    pencil(spline([[-30, -262 + b], [0, -250 + b], [30, -262 + b]], false, 4), { w: 12, col: '#f4f2ea', pass2: false }); for (let k = 0; k < 8; k++) pencil([[-28 + k * 8, -266 + b], [-28 + k * 8, -254 + b]], { w: 1.2, col: OF.topD, a: 0.5, pass2: false });
    rect(-100, -60 + b, 200, 18, { wash: '#f4f2ea', washA: 0.8, line: false });
  };
  HAT6.hachimaki = (t, o, fx, L, OF) => {                                  // хатимаки: скрученная повязка-жгут вокруг лба с узлом и хвостиками сбоку (цвет — OF.hbCol, по умолчанию белая с синими полосками)
    const col = (OF && OF.hbCol) || '#f4f2ea', stripe = (OF && OF.hbCol) ? '#ffffff' : '#2a4a98'; push(fx * 0.3, -44, 0.9);
    const h = blob([[-100, 6], [-96, -18], [-50, -34], [50, -34], [96, -18], [100, 6], [60, 20], [-60, 20]], { wash: col, washA: 1, w: 2.4, col: TM.line, key: 26640 }); shadeG(h.path, -L.side * 100, 0, L.side * 30, 0, '#6a6a60', 0.4);
    ctx.save(); ctx.clip(h.path); for (let i = -8; i <= 8; i++) pencil([[i * 12 - 6, -36], [i * 12 + 6, 22]], { w: 4, col: stripe, a: 0.85, pass2: false }); ctx.restore();
    const kx = L.side * 92; ell(kx, -4, 12, 11, { wash: col, washA: 1, w: 2, col: TM.line }); pencil(spline([[kx, 4], [kx + L.side * 14, 30], [kx + L.side * 8, 52]], false, 4), { w: 8, col, pass2: false }); pencil(spline([[kx, 4], [kx + L.side * 30, 22], [kx + L.side * 34, 44]], false, 4), { w: 8, col, pass2: false }); pop();
  };
  const TROPHY26 = { x: 4, y: -74 };
  const _c26 = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c26(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const x = TROPHY26.x, y = TROPHY26.y + bob;   // трофей №26: капля соевого соуса с прилипшей рисинкой
    blob([[x, y - 15], [x - 9, y - 2], [x - 10, y + 7], [x, y + 13], [x + 10, y + 7], [x + 8, y - 2]], { wash: '#4a2408', washA: 0.8, line: false }); ell(x - 3, y - 2, 2, 4, { wash: '#a8683a', washA: 0.7, line: false });
    ell(x + 5, y + 2, 7, 3.5, { wash: '#fbf8ee', washA: 1, w: 1, col: '#8a8470' }); pencil([[x + 1, y + 1], [x + 9, y + 3]], { w: 0.8, col: '#c8c0a8', pass2: false });
  };
})();
