/* 019 — костюмы выпуска «Бургер»: гамбургский мясник 1840-х (сине-белая полосатая рубаха, нарукавники-подвязки, тёмный шейный платок, картуз), эмигрант 1850-х
   (коричневая куртка, жилет, картуз), газетчик 1918 (серый жилет поверх белой рубахи, кепка-восьмиклинка `newsboy`, сумка-ремень), Том-малыш-путешественник
   в пробковом шлеме (safariA). Трофей №19 на фартуке — капля кетчупа и капля горчицы рядом, с бликами. */
(() => {
  Object.assign(OUTFIT, {
    butchA: { top: '#e8eef6', topD: '#7a8aa8', topL: '#ffffff', pants: '#3a3a44', shirt: '#e8eef6', detail: 'butch', hat: 'kartuz', boots: 'oxford', apron: 1 },
    emigA: { top: '#6a4a2e', topD: '#30200e', topL: '#9a7a52', pants: '#4a4238', shirt: '#efe6d2', detail: 'emig', hat: 'kartuz', boots: 'oxford', apron: 1 },
    newsA: { top: '#f2eee4', topD: '#a8a294', topL: '#ffffff', pants: '#4a4a52', shirt: '#f2eee4', detail: 'newsie', hat: 'newsboy', boots: 'oxford', apron: 1 },
    safariA: Object.assign({}, OUTFIT.safari, { apron: 1 }),
  });
  COST6.butch = (OF, b, t, bp, L) => {                                    // полосатая рубаха мясника: синие полосы, нарукавники, платок
    ctx.save(); ctx.clip(bp.path); for (let i = -6; i < 7; i++) pencil([[i * 17, -270 + b], [i * 17 + 4, -80 + b]], { w: 5, col: '#3a5a9a', a: 0.75, pass2: false }); ctx.restore();
    shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.4); hatch(bp.path, bp.bb, { gap: 7, a: 0.08, col: '#2a3a6a', ang: 0.9, key: 19100, w: 1.2 });
    for (const sd of [-1, 1]) { rect(sd * 92 - 10, -200 + b, 20, 10, { wash: '#2a2a2a', washA: 1, w: 1, col: '#000' }); }
    const nk = poly([[-26, -262 + b], [26, -262 + b], [12, -232 + b], [0, -226 + b], [-12, -232 + b]], { wash: '#2a2a3a', washA: 1, w: 1.6, col: '#000', key: 19102 }); shadeG(nk.path, 26, 0, -26, 0, '#000', 0.3);
    poly([[-4, -230 + b], [4, -230 + b], [10, -206 + b], [-10, -206 + b]], { wash: '#2a2a3a', washA: 1, w: 1.2, col: '#000' });
  };
  COST6.emig = (OF, b, t, bp, L) => {                                     // куртка эмигранта: борта, заплата на локте, жилет, часовая цепочка
    hatch(bp.path, bp.bb, { gap: 6, a: 0.14, col: OF.topD, ang: 1.2, key: 19110, w: 1.2 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.45);
    const vs = poly([[-30, -256 + b], [30, -256 + b], [40, -112 + b], [0, -100 + b], [-40, -112 + b]], { wash: '#4a5a4a', washA: 1, w: 2, col: L, key: 19111 }); shadeG(vs.path, 40, 0, -30, 0, '#1a2a1a', 0.4);
    for (let k = 0; k < 4; k++) ell(0, -226 + k * 28 + b, 4, 4, { wash: '#c8a040', washA: 1, w: 1, col: '#5a3a08' });
    pencil(spline([[0, -170 + b], [-20, -156 + b], [-36, -168 + b]], false, 5), { w: 2, col: '#e8c860', pass2: false });
    for (const sd of [-1, 1]) { const lp = poly([[sd * 14, -260 + b], [sd * 62, -254 + b], [sd * 68, -180 + b], [sd * 58, -110 + b], [sd * 38, -110 + b], [sd * 32, -200 + b]], { wash: OF.top, washA: 1, w: 2.2, col: L, key: 19112 + sd }); shadeG(lp.path, sd * 68, 0, sd * 14, 0, OF.topD, 0.35); }
    const pt = blob([[-104, -170 + b], [-84, -176 + b], [-80, -150 + b], [-100, -144 + b]], { wash: '#8a6a3a', washA: 1, w: 1.4, col: L, key: 19115 }); for (let k = 0; k < 4; k++) pencil([[-102, -172 + k * 7 + b], [-82, -172 + k * 7 + b]], { w: 1, col: '#4a3a1a', a: 0.6, gap: true, pass2: false });
  };
  COST6.newsie = (OF, b, t, bp, L) => {                                   // газетчик: серый жилет, белая рубаха с закатанными рукавами, ремень сумки через плечо
    hatch(bp.path, bp.bb, { gap: 7, a: 0.08, col: OF.topD, ang: 0.9, key: 19120, w: 1.2 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.35);
    for (const sd of [-1, 1]) { const v = poly([[sd * 12, -258 + b], [sd * 66, -248 + b], [sd * 70, -110 + b], [sd * 8, -104 + b], [sd * 6, -200 + b]], { wash: '#6a6a72', washA: 1, w: 2, col: L, key: 19121 + sd }); shadeG(v.path, sd * 70, 0, sd * 8, 0, '#2a2a30', 0.4); hatch(v.path, v.bb, { gap: 5, a: 0.15, col: '#3a3a40', ang: 0.4, key: 19123 + sd, w: 1 }); for (let k = 0; k < 3; k++) ell(sd * 14, -200 + k * 30 + b, 3.4, 3.4, { wash: '#1a1a1a', washA: 1, line: false }); }
    pencil([[60, -256 + b], [-70, -110 + b]], { w: 9, col: '#6a4424', pass2: false }); pencil([[60, -256 + b], [-70, -110 + b]], { w: 2, col: '#a8784a', a: 0.6, pass2: false });
  };
  HAT6.newsboy = (t, o, fx, L) => {                                       // кепка-восьмиклинка: пухлая тулья, пуговка, короткий козырёк
    push(fx * 0.3, -92, 0.82);
    const v = blob([[-60, 0], [80, -6], [120, 6], [70, 16], [-60, 12]], { wash: '#3a3a40', washA: 1, w: 2.2, col: TM.line, key: 19130 }); shadeG(v.path, 0, 16, 0, -6, '#000', 0.4);
    const c = blob([[-96, 2], [-110, -40], [-70, -92], [0, -110], [80, -96], [118, -50], [104, 4], [0, 10]], { wash: '#5a5a62', washA: 1, w: 2.6, col: TM.line, key: 19131 });
    shadeG(c.path, 110, 0, -90, 0, '#2a2a30', 0.45); hatch(c.path, c.bb, { gap: 5, a: 0.18, col: '#2a2a30', ang: 0.6, key: 19132, w: 1 });
    for (const a of [-1.2, -0.6, 0, 0.6, 1.2]) pencil([[0, -104], [Math.sin(a) * 104, -50 + Math.abs(a) * 30]], { w: 1.2, col: '#2a2a30', a: 0.6, pass2: false });
    ell(0, -106, 8, 6, { wash: '#3a3a40', washA: 1, w: 1.2, col: TM.line }); pop();
  };
  const TROPHY19 = { x: -44, y: -66 };
  const _c19e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c19e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const x = TROPHY19.x, y = TROPHY19.y + bob;   // трофей №19: капля кетчупа + капля горчицы
    const k = blob([[x - 12, y + 4], [x - 10, y - 6], [x - 2, y - 12], [x + 6, y - 8], [x + 8, y + 4], [x + 2, y + 11], [x - 8, y + 10]], { wash: '#c81e10', washA: 0.97, w: 1.2, col: '#6a0a04' }); shadeG(k.path, x + 8, 0, x - 12, 0, '#5a0804', 0.4);
    ell(x - 5, y - 3, 3, 2, { wash: '#ff8a6a', washA: 0.9, line: false }); pencil([[x - 2, y + 11], [x - 1, y + 20]], { w: 3, col: '#c81e10', pass2: false }); ell(x - 1, y + 21, 2.4, 3, { wash: '#c81e10', washA: 1, line: false });
    const m = blob([[x + 12, y + 6], [x + 13, y - 2], [x + 20, y - 6], [x + 26, y], [x + 25, y + 8], [x + 18, y + 12]], { wash: '#eeb81e', washA: 0.97, w: 1.2, col: '#8a5a08' }); shadeG(m.path, x + 26, 0, x + 12, 0, '#a8700a', 0.4);
    ell(x + 17, y - 1, 2.2, 1.6, { wash: '#fff07a', washA: 0.9, line: false });
  };
})();
