/* 011 — костюмы выпуска «Яблочный штрудель»: тиролец (серо-зелёный лоден-джанкер с зелёным воротником, роговые пуговицы, эдельвейс + шляпа `tyrol` с пером),
   придворный кондитер XVIII в. (голубой камзол с золотым шитьём, кружевное жабо + парик `wig` из 010), венгр (белая рубаха, чёрный жилет с цветочной вышивкой,
   шляпа `hunhat` с лентой). Трофей №11 на фартуке — сахарная пудра и коричное пятнышко с ломтиком яблока. */
(() => {
  Object.assign(OUTFIT, {
    tyrolA: { top: '#7a8270', topD: '#3a4234', topL: '#a8b098', pants: '#5a4028', shirt: '#f2efe6', detail: 'tyrol', hat: 'tyrol', boots: 'soft', apron: 1 },
    courtA: { top: '#9ab8d8', topD: '#4a6a8a', topL: '#d0e2f2', pants: '#e8e2d0', shirt: '#ffffff', detail: 'rococo', hat: 'powder', boots: 'oxford', apron: 1 },
    hunA: { top: '#f6f2e8', topD: '#b0a890', topL: '#ffffff', pants: '#1a1a20', detail: 'hun', hat: 'hunhat', boots: 'rider', apron: 1 },
    waiterS: Object.assign({}, OUTFIT.waiter, { top: '#16161c', topD: '#000000', topL: '#3a3a46' }),
    dutchA: Object.assign({}, OUTFIT.dutch, { apron: 1 }),
    minerA: Object.assign({}, OUTFIT.miner, { apron: 1 }),
  });
  COST6.tyrol = (OF, b, t, bp, L) => {                                   // джанкер: зелёный стоячий воротник и канты, роговые пуговицы, эдельвейс на груди
    hatch(bp.path, bp.bb, { gap: 6, a: 0.14, col: OF.topD, ang: 0.7, w: 1.1 });
    for (const sd of [-1, 1]) pencil([[sd * 6, -244 + b], [sd * 10, -108 + b]], { w: 6, col: '#2e5a2a', pass2: false });
    shape(spline([[-40, -250 + b], [0, -240 + b], [40, -250 + b], [34, -230 + b], [0, -224 + b], [-34, -230 + b]], true, 5), { wash: '#2e5a2a', washA: 1, w: 2, col: L });
    for (let k = 0; k < 4; k++) for (const sd of [-1, 1]) ell(sd * 20, -210 + k * 26 + b, 5, 5, { wash: '#6a4a2a', washA: 1, w: 1.4, col: L });
    push(-38, -196 + b, 1); for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; blob([[0, 0], [Math.cos(a - 0.3) * 9, Math.sin(a - 0.3) * 9], [Math.cos(a) * 18, Math.sin(a) * 18], [Math.cos(a + 0.3) * 9, Math.sin(a + 0.3) * 9]], { wash: '#f8f6f0', washA: 1, w: 1, col: '#6a6a5a' }); } ell(0, 0, 5, 5, { wash: '#e8c040', washA: 1, w: 1 }); pop();
  };
  COST6.rococo = (OF, b, t, bp, L) => {                                  // камзол XVIII в.: золотое шитьё по борту, кружевное жабо, манжеты
    for (const sd of [-1, 1]) { pencil(spline([[sd * 18, -246 + b], [sd * 26, -180 + b], [sd * 30, -108 + b]], false, 5), { w: 5, col: '#d6a842', pass2: false });
      for (let k = 0; k < 6; k++) { const y = -232 + k * 22 + b; pencil(spline([[sd * 24, y], [sd * 40, y - 6], [sd * 46, y + 6]], false, 4), { w: 2, col: '#d6a842', a: 0.9, pass2: false }); nb(sd * 22, y + 4, 3.6, CU.gold); } }
    for (let k = 0; k < 4; k++) blob([[-22, -244 + k * 14 + b], [0, -238 + k * 14 + b], [22, -244 + k * 14 + b], [14, -226 + k * 14 + b], [0, -222 + k * 14 + b], [-14, -226 + k * 14 + b]], { wash: '#ffffff', washA: 1, w: 1.2, col: '#9a9a9a' });
  };
  COST6.hun = (OF, b, t, bp, L) => {                                     // белая рубаха + чёрный жилет с цветами (красные, синие, зелёные листья)
    for (const sd of [-1, 1]) { const v = poly([[sd * 14, -246 + b], [sd * 58, -238 + b], [sd * 56, -112 + b], [sd * 10, -112 + b]], { wash: '#16161c', washA: 1, w: 2, col: L });
      for (let k = 0; k < 3; k++) { const cx = sd * 34, cy = -210 + k * 36 + b; for (let i = 0; i < 5; i++) { const a = i / 5 * 6.283; ell(cx + Math.cos(a) * 7, cy + Math.sin(a) * 7, 5, 5, { wash: k % 2 ? '#2a5ab8' : '#d9282a', washA: 1, w: 0.8, col: '#1a0a0a' }); } ell(cx, cy, 3.6, 3.6, { wash: '#f0c030', washA: 1, line: false });
        blob([[cx + sd * 10, cy + 10], [cx + sd * 22, cy + 6], [cx + sd * 16, cy + 18]], { wash: '#3a8a3a', washA: 1, w: 0.8, col: '#0a2a0a' }); } }
    for (let i = 0; i < 4; i++) pencil([[-4 + i * 3, -240 + b], [-4 + i * 3, -228 + b]], { w: 1.6, col: '#d9282a', a: 0.8, pass2: false });
  };
  HAT6.tyrol = (t, o, fx, L) => {                                        // тирольская шляпа: зелёный фетр, шнур, перо и «гамсбарт»
    push(fx * 0.3, -96, 0.82); ell(0, 10, 112, 22, { wash: '#2e4a2a', washA: 1, w: 2.4, col: TM.line });
    const c = blob([[-70, 8], [-62, -70], [-20, -96], [24, -92], [64, -66], [70, 8]], { wash: '#3a5a32', washA: 1, w: 2.4, col: TM.line, key: 11190 }); shadeG(c.path, 70, 0, -30, 0, '#14240e', 0.5);
    pencil(spline([[-68, -6], [0, 2], [68, -6]], false, 5), { w: 9, col: '#c8a050', pass2: false });
    pencil(spline([[56, -10], [80, -80], [70, -150]], false, 6), { w: 6, col: '#2a2a2a', pass2: false }); for (let i = 0; i < 6; i++) pencil([[62 + i * 2, -40 - i * 18], [80 + i * 2, -50 - i * 18]], { w: 2, col: '#2a2a2a', pass2: false });
    for (let i = 0; i < 9; i++) pencil([[-56, -4], [-80 + i * 5, -54 + (i % 3) * 4]], { w: 2.4, col: '#c8b898', pass2: false }); pop();
  };
  HAT6.powder = (t, o, fx, L) => {                                       // пудреный парик XVIII в.: шапочка на макушке, валики над ушами, косичка с чёрным бантом
    push(fx * 0.3, -104, 0.8); const c = blob([[-84, 14], [-80, -40], [-40, -80], [0, -88], [40, -80], [80, -40], [84, 14], [40, -10], [0, -16], [-40, -10]], { wash: '#f4f2ec', washA: 1, w: 2.2, col: '#8a8478', key: 11195 });
    for (let i = 0; i < 5; i++) pencil(spline([[-60 + i * 30, -70], [-56 + i * 28, -30], [-60 + i * 30, 6]], false, 4), { w: 1.4, col: '#b8b2a4', a: 0.7, pass2: false });
    for (const sd of [-1, 1]) for (let i = 0; i < 2; i++) { const r = ell(sd * 92, 16 + i * 30, 20, 13, { wash: '#f8f6f0', washA: 1, w: 1.6, col: '#8a8478' }); pencil(ellPts(sd * 92, 16 + i * 30, 12, 7, 0, 1, 12), { w: 1, col: '#b8b2a4', a: 0.6, pass2: false }); }
    pop();
  };
  HAT6.hunhat = (t, o, fx, L) => {                                       // венгерская шляпа: чёрный фетр с плоской тульёй, красно-зелёная лента
    push(fx * 0.3, -96, 0.8); ell(0, 8, 104, 18, { wash: '#16161c', washA: 1, w: 2.4, col: TM.line }); rect(-62, -76, 124, 84, { wash: '#1e1e26', washA: 1, w: 2.4, col: TM.line }); ell(0, -76, 62, 12, { wash: '#2a2a34', washA: 1, w: 2 });
    rect(-62, -18, 124, 18, { wash: '#d9282a', washA: 1, w: 1.6, col: TM.line }); rect(-62, -18, 124, 6, { wash: '#3a8a3a', washA: 1, line: false }); for (let i = 0; i < 3; i++) ell(-36 + i * 36, -9, 5, 5, { wash: '#f0c030', washA: 1, w: 1 }); pop();
  };
  const _c11e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c11e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    for (let i = 0; i < 22; i++) { const r = rng(11180 + i); ell(14 + r() * 40, -190 + r() * 40 + b, 2.2, 2.2, { wash: '#ffffff', washA: 0.95, line: false }); }
    ell(-38, -176 + b, 9, 6, { wash: '#a86a2a', washA: 0.5, line: false }); push(-36, -178 + b, 1, 0.4); blob([[-10, 0], [0, -6], [10, 0], [0, 4]], { wash: '#efd27a', washA: 1, w: 1, col: '#8a5a1a' }); pop();
  };
})();
