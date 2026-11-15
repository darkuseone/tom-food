/* 023 — костюмы выпуска «Гречка»: пасечник (льняная куртка с накладными карманами, дымарь-значок + шляпа `beehat` с поднятой сеткой),
   горец Юньнани (индиговая куртка с вышитой каймой и кушаком + плетёная конусная шляпа `conical`), греческий монах (чёрный подрясник до пят,
   крест на шнурке + скуфья `skufia`), средневековый торговец (котта + шаперон — готовые), Том-малыш-альпинист (красная штормовка, моток верёвки
   через плечо + шапка `woolcap` с помпоном и очками), домашний вязаный свитер (сегодня). Трофей №23 на фартуке — пятно каши с тремя зёрнышками. */
(() => {
  Object.assign(OUTFIT, {
    beeA: { top: '#e8dcb8', topD: '#9a8a5a', topL: '#fff6dc', pants: '#5a5a48', shirt: '#e8dcb8', detail: 'beekeep', hat: 'beehat', boots: 'soft', apron: 1 },
    yunA: { top: '#2a3a7a', topD: '#0e1638', topL: '#4a5aa8', pants: '#1a2040', shirt: '#2a3a7a', detail: 'yunnan', hat: 'conical', boots: 'soft', apron: 1 },
    monkG: { top: '#24222a', topD: '#08080c', topL: '#4a4652', pants: '#1a1a20', shirt: '#24222a', detail: 'cassock', hat: 'skufia', boots: 'soft', apron: 1 },
    merchA: { top: '#8a2a2a', topD: '#3a0a0a', topL: '#b8504a', pants: '#3a3a5a', detail: 'cotte', hat: 'chaperon', boots: 'soft', apron: 1 },
    alpA: { top: '#d8343a', topD: '#6a0a10', topL: '#ff6a60', pants: '#2a3a5a', shirt: '#d8343a', detail: 'anorak', hat: 'woolcap', boots: 'oxford', apron: 1 },
    homeG: { top: '#4a7a5a', topD: '#1a3a24', topL: '#7aaa8a', pants: '#3a3a44', shirt: '#4a7a5a', detail: 'knit', boots: 'soft', apron: 1 },
  });
  if (OUTFIT.rubakha) OUTFIT.rubA = Object.assign({}, OUTFIT.rubakha, { apron: 1 });
  if (OUTFIT.puffer) OUTFIT.pufA = Object.assign({}, OUTFIT.puffer, { apron: 1, top: '#3a5a8a', topD: '#16264a', topL: '#6a8ac8' });
  COST6.beekeep = (OF, b, t, bp, L) => {                                   // льняная куртка пасечника: накладные карманы, молния, нашивка-сота
    hatch(bp.path, bp.bb, { gap: 7, a: 0.1, col: OF.topD, ang: 1.1, key: 23701, w: 1.2 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.4);
    pencil([[0, -258 + b], [0, -40 + b]], { w: 3, col: '#8a7a4a', pass2: false }); for (let k = 0; k < 8; k++) pencil([[-4, -250 + k * 26 + b], [4, -250 + k * 26 + b]], { w: 2, col: '#6a5a2a', pass2: false });
    for (const sd of [-1, 1]) { rect(sd * 44 - 22, -210 + b, 44, 38, { wash: OF.topL, washA: 0.6, w: 1.8, col: TM.line }); pencil([[sd * 44 - 22, -200 + b], [sd * 44 + 22, -200 + b]], { w: 1.4, col: OF.topD, pass2: false }); }
    const hx = 44, hy = -238 + b; poly([[hx - 9, hy], [hx - 4, hy - 8], [hx + 4, hy - 8], [hx + 9, hy], [hx + 4, hy + 8], [hx - 4, hy + 8]], { wash: '#f4c020', washA: 1, w: 1.2, col: '#6a4a08' });
    for (const sd of [-1, 1]) poly([[sd * 6, -262 + b], [sd * 34, -262 + b], [sd * 16, -238 + b]], { wash: OF.topL, washA: 1, w: 1.6, col: TM.line });
  };
  COST6.yunnan = (OF, b, t, bp, L) => {                                    // индиговая куртка горцев: запах набок, вышитая кайма (красно-жёлтые ромбы), кушак
    hatch(bp.path, bp.bb, { gap: 7, a: 0.14, col: OF.topD, ang: 0.9, key: 23711, w: 1.2 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.5);
    pencil(spline([[-30, -262 + b], [10, -210 + b], [40, -150 + b], [44, -110 + b]], false, 6), { w: 10, col: '#c8343a', pass2: false });
    for (let k = 0; k < 6; k++) { const p = [[-24 + k * 12, -254 + k * 24 + b]]; poly([[p[0][0], p[0][1] - 5], [p[0][0] + 5, p[0][1]], [p[0][0], p[0][1] + 5], [p[0][0] - 5, p[0][1]]], { wash: '#f4c840', washA: 1, line: false }); }
    rect(-100, -124 + b, 200, 22, { wash: '#c8343a', washA: 1, w: 1.6, col: TM.line }); for (let k = 0; k < 9; k++) ell(-88 + k * 22, -113 + b, 4, 4, { wash: k % 2 ? '#f4c840' : '#3aa86a', washA: 1, line: false });
    pencil([[40, -102 + b], [52, -50 + b]], { w: 5, col: '#c8343a', pass2: false }); pencil([[56, -102 + b], [66, -56 + b]], { w: 5, col: '#c8343a', pass2: false });
  };
  COST6.cassock = (OF, b, t, bp, L) => {                                   // подрясник монаха до пят, стоячий ворот, крест на шнурке, кожаный пояс
    skirt6(OF, b, L, -118, -10, 92, 112, 23721, OF.top);
    hatch(bp.path, bp.bb, { gap: 6, a: 0.16, col: '#000000', ang: 1.0, key: 23722, w: 1.2 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, '#000000', 0.4);
    pencil(spline([[-20, -262 + b], [0, -256 + b], [20, -262 + b]], false, 4), { w: 6, col: '#4a4652', pass2: false });
    pencil(spline([[-26, -258 + b], [0, -190 + b], [26, -258 + b]], false, 6), { w: 2, col: '#c8a040', pass2: false });
    rect(-4, -196 + b, 8, 34, { wash: '#e8c860', washA: 1, w: 1, col: '#6a4a08' }); rect(-12, -186 + b, 24, 8, { wash: '#e8c860', washA: 1, w: 1, col: '#6a4a08' });
    rect(-96, -122 + b, 192, 12, { wash: '#3a2414', washA: 1, w: 1.4, col: TM.line }); for (let k = 0; k < 10; k++) ell(-50 + k * 6, -90 + Math.abs(k - 5) * 6 + b, 3, 3, { wash: '#7a5a3a', washA: 1, line: false });
  };
  COST6.anorak = (OF, b, t, bp, L) => {                                    // штормовка альпиниста: молния, капюшон за спиной, моток верёвки через плечо, карабин
    hatch(bp.path, bp.bb, { gap: 8, a: 0.12, col: OF.topD, ang: 1.2, key: 23731, w: 1.2 }); shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.5);
    pencil([[0, -262 + b], [0, -40 + b]], { w: 4, col: '#2a2a2a', pass2: false }); ell(0, -230 + b, 5, 8, { wash: '#c8c8d0', washA: 1, w: 1, col: '#2a2a2a' });
    pencil(spline([[-60, -262 + b], [-20, -280 + b], [30, -280 + b], [64, -262 + b]], false, 5), { w: 14, col: OF.topD, pass2: false });
    pencil(spline([[-56, -250 + b], [-10, -190 + b], [40, -120 + b], [70, -80 + b]], false, 6), { w: 14, col: '#e8c040', pass2: false }); for (let k = 0; k < 7; k++) pencil([[-50 + k * 17, -246 + k * 24 + b], [-40 + k * 17, -238 + k * 24 + b]], { w: 2, col: '#8a6a10', pass2: false });
    pencil(spline([[60, -96 + b], [70, -80 + b], [62, -66 + b]], false, 4), { w: 4, col: '#b8b8c4', pass2: false });
  };
  COST6.knit = (OF, b, t, bp, L) => {                                      // вязаный свитер без узоров-праздника: резинка, косы, горло
    ctx.save(); ctx.clip(bp.path); for (let i = -4; i <= 4; i++) for (let y = -270; y < 10; y += 14) pencil([[i * 26 - 5, y + b], [i * 26, y + 7 + b], [i * 26 + 5, y + b]], { w: 2, col: OF.topD, a: 0.4, pass2: false }); ctx.restore();
    shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.45);
    pencil(spline([[-30, -262 + b], [0, -252 + b], [30, -262 + b]], false, 4), { w: 12, col: OF.topL, pass2: false }); for (let k = 0; k < 8; k++) pencil([[-28 + k * 8, -266 + b], [-28 + k * 8, -254 + b]], { w: 1.4, col: OF.topD, a: 0.6, pass2: false });
    rect(-100, -60 + b, 200, 18, { wash: OF.topL, washA: 0.5, line: false });
  };
  HAT6.beehat = (t, o, fx, L) => {                                         // соломенная шляпа пасечника с поднятой сеткой: широкие поля, сетка свёрнута на тулье
    push(fx * 0.3, -70, 0.86); const br = ell(0, 0, 170, 34, { wash: '#e8cc80', washA: 1, w: 2.4, col: TM.line, key: 23740 }); shadeG(br.path, 0, -34, 0, 34, '#9a7a30', 0.4);
    for (let i = 0; i < 9; i++) pencil(spline(ellPts(0, 0, 60 + i * 12, 12 + i * 2.4, 0, 0, 20), true, 3), { w: 1, col: '#b8984a', a: 0.4, pass2: false });
    const cr = blob([[-80, -6], [-76, -70], [-40, -96], [40, -96], [76, -70], [80, -6]], { wash: '#f0d890', washA: 1, w: 2.4, col: TM.line, key: 23741 }); shadeG(cr.path, -L.side * 80, 0, L.side * 30, 0, '#9a7a30', 0.45);
    const net = blob([[-84, -40], [-60, -70], [0, -78], [60, -70], [84, -40], [60, -28], [-60, -28]], { wash: '#3a3a3a', washA: 0.35, w: 1.6, col: '#1a1a1a' }); ctx.save(); ctx.clip(net.path); for (let i = -10; i < 10; i++) { pencil([[i * 10, -80], [i * 10 + 40, -20]], { w: 0.8, col: '#d8d8d8', a: 0.5, pass2: false }); pencil([[i * 10, -80], [i * 10 - 40, -20]], { w: 0.8, col: '#d8d8d8', a: 0.5, pass2: false }); } ctx.restore();
    rect(-80, -26, 160, 12, { wash: '#6a4a2a', washA: 1, w: 1.4, col: TM.line }); pop();
  };
  HAT6.conical = (t, o, fx, L) => {                                        // плетёная конусная шляпа: плоский широкий конус, полоски плетения, подбородочный шнурок
    push(fx * 0.3, -66, 0.9); const c = poly([[-190, 10], [0, -110], [190, 10], [0, 26]], { wash: '#d8b870', washA: 1, w: 2.4, col: TM.line, key: 23750 }); shadeG(c.path, -L.side * 190, 0, L.side * 60, 0, '#7a5a20', 0.5);
    for (let i = 1; i < 6; i++) pencil([[-190 + i * 32, 10 - i * 20 + i * 0], [0, -110 + i * 0]], { w: 1, col: '#9a7a3a', a: 0.4, pass2: false }); for (let i = 1; i < 6; i++) pencil([[-190 * i / 6, 10 - (6 - i) * 0 - 120 * (1 - i / 6) + 0], [190 * i / 6, 10 - 120 * (1 - i / 6)]], { w: 1.2, col: '#9a7a3a', a: 0.45, pass2: false });
    pencil(spline([[-180, 12], [0, 30], [180, 12]], false, 6), { w: 5, col: '#8a6a2a', pass2: false }); ell(0, -110, 8, 6, { wash: '#8a6a2a', washA: 1, w: 1 }); pop();
    pencil([[fx * 0.3 - 60, -40], [fx * 0.3 - 40, 40]], { w: 1.6, col: '#3a2a1a', a: 0.7, pass2: false });
  };
  HAT6.skufia = (t, o, fx, L) => {                                         // скуфья монаха: мягкая чёрная шапочка-купол, складки
    push(fx * 0.3, -82, 0.82); const s = blob([[-92, 0], [-90, -54], [-56, -82], [56, -82], [90, -54], [92, 0]], { wash: '#1e1c24', washA: 1, w: 2.4, col: TM.line, key: 23760 }); shadeG(s.path, -L.side * 92, 0, L.side * 30, 0, '#000000', 0.5);
    for (const dx of [-50, -10, 30, 64]) pencil(spline([[dx, -4], [dx + 6, -40], [dx + 2, -76]], false, 4), { w: 1.4, col: '#4a4652', a: 0.7, pass2: false }); pencil([[-90, -4], [90, -4]], { w: 4, col: '#3a3640', pass2: false }); pop();
  };
  HAT6.woolcap = (t, o, fx, L) => {                                        // вязаная шапка альпиниста: отворот, помпон, очки-маска на лбу
    push(fx * 0.3, -82, 0.84); const c = blob([[-96, 0], [-90, -60], [-50, -96], [50, -96], [90, -60], [96, 0]], { wash: '#2a6aa8', washA: 1, w: 2.4, col: TM.line, key: 23770 }); shadeG(c.path, -L.side * 96, 0, L.side * 30, 0, '#0a2a5a', 0.5);
    for (let i = -4; i <= 4; i++) pencil([[i * 20, -4], [i * 18, -86]], { w: 1.2, col: '#0a2a5a', a: 0.4, pass2: false }); rect(-98, -20, 196, 24, { wash: '#f4f0e8', washA: 1, w: 2, col: TM.line }); for (let i = 0; i < 9; i++) ell(-80 + i * 20, -8, 5, 5, { wash: '#d8343a', washA: 1, line: false });
    ell(0, -110, 26, 24, { wash: '#f4f0e8', washA: 1, w: 2, col: TM.line }); for (let i = 0; i < 8; i++) pencil([[0, -110], [Math.cos(i) * 22, -110 + Math.sin(i) * 20]], { w: 1, col: '#c8c0b0', pass2: false });
    pencil([[-98, 18], [98, 18]], { w: 6, col: '#2a2a2a', pass2: false }); for (const sd of [-1, 1]) { const g = ell(sd * 40, 16, 32, 20, { wash: '#f4a020', washA: 0.85, w: 3, col: '#2a2a2a' }); ell(sd * 40 - 10, 10, 10, 5, { wash: '#ffffff', washA: 0.7, line: false }); } pop();
  };
  const TROPHY23 = { x: -38, y: -66 };
  const _c23 = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c23(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const x = TROPHY23.x, y = TROPHY23.y + bob;   // трофей №23: пятно каши с тремя зёрнышками
    blob([[x - 14, y], [x - 8, y - 10], [x + 6, y - 11], [x + 14, y - 2], [x + 9, y + 9], [x - 8, y + 8]], { wash: '#a86a3a', washA: 0.55, line: false });
    for (const [dx, dy, r] of [[-5, -2, 0.3], [5, -4, -0.8], [1, 5, 1.6]]) grainB(x + dx, y + dy, 0.2, r, { key: 23790 + dx });
  };
})();
