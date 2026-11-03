/* 016 — костюмы выпуска «Пюре»: инка XV–XVI вв. (терракотовая унку до колен с кремовыми поясами из красно-чёрно-жёлтых ступенчатых квадратов, цветная лямка, шапка `chullo` — вязаная
   с ушками, помпоном и полосками красный/жёлтый/синий) и военный аптекарь Пармантье 1750-х (синий жюстокор с красными обшлагами и отворотами, медные пуговицы, белый жилет и галстук-жабо,
   шляпа `tricorn` — чёрная треуголка с золотым кантом). Трофей №16 на фартуке — капля пюре с кубиком масла. */
(() => {
  Object.assign(OUTFIT, {
    incaA: { top: '#c8683c', topD: '#7a3016', topL: '#e89a6a', pants: null, detail: 'unku', hat: 'chullo', boots: 'soft', apron: 1, long: 1 },
    pharmA: { top: '#26469a', topD: '#101e5a', topL: '#5a7ad0', pants: '#ece8dc', shirt: '#f4f0e6', detail: 'justau', hat: 'tricorn', boots: 'shoe', cuff: '#c8221a', apron: 1, long: 1 },
  });
  const tocapu = (x0, x1, y, h, sq) => {                                   // пояс-тукапу: кремовая лента с шашечкой красный/чёрный/жёлтый
    rect(x0, y, x1 - x0, h, { wash: '#f0e0b8', washA: 1, w: 1.6, col: TM.line });
    const cols = ['#c8221a', '#1a1612', '#e8b82a'], rows = Math.max(1, Math.floor((h - 4) / sq));
    for (let r = 0; r < rows; r++) for (let i = 0; i < Math.floor((x1 - x0 - 4) / sq); i++) { const c = cols[(i + r * 2) % 3]; if ((i + r) % 2) rect(x0 + 2 + i * sq, y + 2 + r * sq, sq - 1, sq - 1, { wash: c, washA: 1, line: false }); else rect(x0 + 2 + i * sq + sq * 0.25, y + 2 + r * sq + sq * 0.25, sq * 0.5, sq * 0.5, { wash: cols[(i + r * 2 + 1) % 3], washA: 1, line: false }); }
  };
  COST6.unku = (OF, b, t, bp, L) => {                                      // унку: шерстяная туника до колен, пояса-тукапу на груди и подоле, цветная лямка с сумкой
    hatch(bp.path, bp.bb, { gap: 6, a: 0.12, col: OF.topD, ang: 0.8, key: 16100, w: 1.1 });
    const sk = skirt6(OF, b, L, -118, -54, 78, 96, 16101);
    for (const f of [-0.55, 0.1, 0.6]) pencil([[f * 84, -110 + b], [f * 96, -64 + b]], { w: 1.6, col: OF.topD, a: 0.4, pass2: false });
    tocapu(-60, 60, -224 + b, 18, 6); tocapu(-88, 88, -78 + b, 20, 7);
    const sc = ['#c8221a', '#e8b82a', '#2a8a4a', '#2a5aa8', '#f0e0b8'];                      // лямка-сумка через плечо
    for (let i = 0; i < 9; i++) pencil([[52 - i * 11, -248 + i * 15 + b], [42 - i * 11, -238 + i * 15 + b]], { w: 7, col: sc[i % 5], pass2: false });
    rect(-82, -124 + b, 34, 30, { wash: '#a8402a', washA: 1, w: 1.8, col: L }); for (let i = 0; i < 3; i++) pencil([[-82, -116 + i * 8 + b], [-48, -116 + i * 8 + b]], { w: 3, col: sc[i], pass2: false });
  };
  COST6.justau = (OF, b, t, bp, L) => {                                    // жюстокор: белый жилет, красные отвороты, медные пуговицы, жабо; подол с красной подкладкой
    const sk = skirt6(OF, b, L, -120, -50, 76, 98, 16110);
    poly([[-8, -118 + b], [8, -118 + b], [20, -52 + b], [-20, -52 + b]], { wash: '#b8221a', washA: 1, w: 1.6, col: L });
    for (const sd of [-1, 1]) { rect(sd * 62 - 17, -108 + b, 34, 22, { wash: OF.top, washA: 1, w: 1.6, col: L }); nb(sd * 62 - 8, -97 + b, 3.4, CU.gold); nb(sd * 62 + 8, -97 + b, 3.4, CU.gold); }
    const wc = poly([[-32, -250 + b], [32, -250 + b], [42, -112 + b], [-42, -112 + b]], { wash: '#f4f0e6', washA: 1, w: 2, col: L, key: 16111 }); shadeG(wc.path, 42, 0, -20, 0, '#a8a090', 0.35);
    for (const sd of [-1, 1]) { const lp = poly([[sd * 14, -250 + b], [sd * 62, -246 + b], [sd * 66, -176 + b], [sd * 40, -112 + b], [sd * 30, -190 + b]], { wash: '#b8221a', washA: 1, w: 2, col: L, key: 16112 + sd }); shadeG(lp.path, sd * 66, 0, 0, 0, '#4a0a08', 0.4);
      for (let k = 0; k < 4; k++) nb(sd * (44 - k * 3), -226 + k * 28 + b, 3.8, CU.gold); }
    for (let k = 0; k < 5; k++) nb(0, -216 + k * 22 + b, 3, CU.gold);
    pencil([[-26, -236 + b], [0, -222 + b], [26, -236 + b]], { w: 2, col: '#a8a090', a: 0.5, pass2: false });
    for (let k = 0; k < 6; k++) ell(-22 + k * 9 + (k % 2) * 1.5, -240 + (k % 2) * 7 + b, 8, 9, { wash: '#ffffff', washA: 1, w: 1.2, col: '#a8a49a' });   // жабо
    poly([[-18, -236 + b], [18, -236 + b], [12, -210 + b], [-12, -210 + b]], { wash: '#fbf8f0', washA: 1, w: 1.4, col: '#a8a49a' });
    for (let k = 0; k < 3; k++) pencil([[-9, -230 + k * 7 + b], [9, -230 + k * 7 + b]], { w: 1, col: '#b8b4aa', a: 0.7, pass2: false });
    pencil([[-72, -118 + b], [72, -118 + b]], { w: 3, col: OF.topD, a: 0.6, pass2: false });
  };
  HAT6.chullo = (t, o, fx, L) => {                                         // чульо: вязаная шапка с ушками, косичками и помпоном, полоски красный/жёлтый/синий
    push(fx * 0.3, -96, 0.82);
    const bands = ['#c8221a', '#e8b82a', '#2a5aa8', '#f0e0b8', '#c8221a', '#e8b82a'], strip = (path, y0, h) => { ctx.save(); ctx.clip(path); bands.forEach((c, i) => { ctx.fillStyle = c; ctx.globalAlpha = 1; ctx.fillRect(-140, y0 + i * h, 280, h + 1); }); ctx.restore(); };
    for (const sd of [-1, 1]) {                                            // ушки
      const fl = blob([[sd * 82, 0], [sd * 122, 4], [sd * 124, 46], [sd * 112, 88], [sd * 96, 90], [sd * 84, 46]], { wash: '#c8221a', washA: 1, w: 2.4, col: TM.line, key: 16120 + sd }); strip(fl.path, 0, 16);
      pencil([[sd * 104, 92], [sd * 104, 114]], { w: 3, col: '#f0e0b8', pass2: false }); ell(sd * 104, 118, 6, 8, { wash: '#c8221a', washA: 1, w: 1.2, col: TM.line }); }
    const cr = blob([[-98, 18], [-96, -28], [-62, -68], [0, -80], [62, -68], [96, -28], [98, 18], [0, 8]], { wash: '#c8221a', washA: 1, w: 2.6, col: TM.line, key: 16122 });
    strip(cr.path, -92, 22); shadeG(cr.path, 98, 0, -30, 0, '#2a0806', 0.4);
    ctx.save(); ctx.clip(cr.path); for (let i = 0; i < 9; i++) { const x = -80 + i * 20; poly([[x, -34], [x + 8, -26], [x, -18], [x - 8, -26]], { wash: '#f0e0b8', washA: 0.95, w: 0.8, col: '#6a4a1a', a: 0.6 }); } for (let i = 0; i < 24; i++) pencil([[-96 + i * 8, -80 + (i % 4) * 22], [-95 + i * 8, -70 + (i % 4) * 22]], { w: 1, col: '#3a1a08', a: 0.25, pass2: false }); ctx.restore();
    blob([[-100, 4], [-98, 24], [0, 28], [98, 24], [100, 4], [0, 0]], { wash: '#2a5aa8', washA: 1, w: 1.8, col: TM.line }); for (let i = 0; i < 13; i++) pencil([[-92 + i * 15, 8], [-92 + i * 15, 20]], { w: 1.4, col: '#101e5a', a: 0.6, pass2: false });
    for (let i = 0; i < 14; i++) { const a = i / 14 * 6.283; pencil([[Math.cos(a) * 6, -94 + Math.sin(a) * 6], [Math.cos(a) * 24, -94 + Math.sin(a) * 22]], { w: 5, col: i % 2 ? '#f0e0b8' : '#e8b82a', pass2: false }); }
    ell(0, -94, 15, 14, { wash: '#f0e0b8', washA: 1, w: 1.6, col: '#6a4a1a' }); pop();
  };
  HAT6.tricorn = (t, o, fx, L) => {                                        // треуголка: чёрные загнутые поля, низкая тулья, золотой кант, белая кокарда
    push(fx * 0.3, -100, 0.82);
    const br = [[-138, -6], [-126, -50], [-64, -44], [0, -30], [64, -44], [126, -50], [138, -6], [74, 18], [0, 40], [-74, 18]];
    const h = blob(br, { wash: '#16161c', washA: 1, w: 2.6, col: TM.line, key: 16130 }); shadeG(h.path, 120, 0, -40, 0, '#000000', 0.45);
    const cr = blob([[-62, -24], [-52, -78], [0, -94], [52, -78], [62, -24], [0, -10]], { wash: '#22222a', washA: 1, w: 2.2, col: TM.line, key: 16131 }); shadeG(cr.path, 62, 0, -30, 0, '#000', 0.45);
    pencil(spline([[-40, -80], [-10, -90], [30, -84]], false, 5), { w: 3, col: '#5a5a68', a: 0.5, pass2: false });
    const edge = spline(br.concat([br[0]]), false, 6); pencil(edge, { w: 3.4, col: '#d4a62a', pass2: false }); pencil(edge, { w: 1.2, col: '#fff0a0', a: 0.6, pass2: false });
    pencil([[-62, -26], [0, -12], [62, -26]], { w: 2.4, col: '#d4a62a', pass2: false });
    ell(0, 14, 11, 11, { wash: '#f8f6ee', washA: 1, w: 1.4, col: TM.line }); ell(0, 14, 4, 4, { wash: '#d4a62a', washA: 1, w: 1 }); pop();
  };
  const _c16e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c16e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    const x = -40, y = -112 + b;                                           // пятно-трофей №16: капля пюре + кубик масла
    blob([[x - 20, y + 4], [x - 16, y - 6], [x + 16, y - 6], [x + 20, y + 4], [x + 8, y + 9], [x - 10, y + 9]], { wash: '#f6eed2', washA: 1, w: 1.4, col: '#a8946a' });
    blob([[x - 14, y - 6], [x - 11, y - 15], [x + 11, y - 15], [x + 14, y - 6]], { wash: '#fbf4dc', washA: 1, w: 1.3, col: '#a8946a' });
    blob([[x - 8, y - 15], [x - 4, y - 22], [x + 3, y - 28], [x + 6, y - 22], [x + 8, y - 15]], { wash: '#fffaea', washA: 1, w: 1.2, col: '#a8946a' });
    pencil([[x - 13, y - 1], [x + 12, y - 3]], { w: 1.2, col: '#c8b888', a: 0.7, pass2: false }); pencil([[x - 9, y - 10], [x + 9, y - 11]], { w: 1.2, col: '#c8b888', a: 0.7, pass2: false });
    poly([[x - 6, y - 28], [x + 4, y - 30], [x + 10, y - 26], [x + 0, y - 24]], { wash: '#fbe878', washA: 1, w: 1, col: '#8a6a10' }); poly([[x - 6, y - 28], [x + 0, y - 24], [x + 0, y - 18], [x - 6, y - 22]], { wash: '#e8c030', washA: 1, w: 1, col: '#8a6a10' }); poly([[x + 0, y - 24], [x + 10, y - 26], [x + 10, y - 20], [x + 0, y - 18]], { wash: '#d4a820', washA: 1, w: 1, col: '#8a6a10' });
    pencil(spline([[x + 3, y - 18], [x + 6, y - 12], [x + 5, y - 5]], false, 4), { w: 1.8, col: '#f0d040', a: 0.9, pass2: false });
  };
})();
