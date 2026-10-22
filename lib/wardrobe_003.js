/* 003 — костюмы выпуска «Селёдка под шубой»: новогодний свитер с оленями + колпак Деда Мороза, половой трактира (рубаха + фартук), агитатор (рабочая роба + кепка),
   сыщик (тренч + охотничья шапка), пижама + ночной колпак, хозяйка 60-х (платье в горох + косынка). Трофей №3 на фартуке — свекольное пятно. */
(() => {
  Object.assign(OUTFIT, {
    sweater: { top: '#b8282a', topD: '#6a0a10', topL: '#e05050', pants: '#2a3442', detail: 'sweater', hat: 'santa', boots: 'oxford', apron: 1 },
    polovoy: Object.assign({}, OUTFIT.rubakha, { apron: 1 }),
    agit: Object.assign({}, OUTFIT.iron, { top: '#5a5a4a', topD: '#2a2a20', topL: '#8a8a72', pants: '#3a3a30', shirt: '#c8b088', gloves: 0, apron: 1 }),
    sleuth: { top: '#c8a870', topD: '#7a6034', topL: '#ecd6a4', pants: '#4a4038', detail: 'trench', hat: 'deer', boots: 'oxford', apron: 1 },
    pajama: { top: '#7ab0d8', topD: '#3a6a90', topL: '#b0d4ee', pants: '#7ab0d8', detail: 'pajama', hat: 'nightcap', boots: 'soft', apron: 0 },
    hostess: { top: '#3a8a8a', topD: '#1a4a4a', topL: '#6ac0c0', pants: '#3a8a8a', detail: 'polka', hat: 'kerchief', boots: 'soft', apron: 1, long: 1 },
  });
  COST6.sweater = (OF, b, t, bp, L) => {                                 // вязаный свитер: полосы-косички, снежинки и олени
    ctx.save(); ctx.clip(bp.path); for (const y of [-230, -150]) { rect(-100, y + b, 200, 26, { wash: '#f6f0e0', washA: 1, line: false }); for (let i = -5; i <= 5; i++) poly([[i * 18 - 6, y + 13 + b], [i * 18, y + 4 + b], [i * 18 + 6, y + 13 + b], [i * 18, y + 22 + b]], { wash: '#2a7a3a', washA: 1, line: false }); }
    for (const x of [-40, 40]) { push(x, -190 + b, 0.9, 0); pencil([[-10, 10], [10, 10]], { w: 4, col: '#f6f0e0', pass2: false }); pencil([[-10, 10], [-12, 24]], { w: 3, col: '#f6f0e0', pass2: false }); pencil([[10, 10], [12, 24]], { w: 3, col: '#f6f0e0', pass2: false }); pencil([[10, 10], [16, -4], [22, -14]], { w: 3, col: '#f6f0e0', pass2: false }); pencil([[22, -14], [16, -26], [28, -22]], { w: 2, col: '#f6f0e0', pass2: false }); pop(); }
    for (let i = 0; i < 8; i++) pencil([[-90 + i * 26, -110 + b], [-90 + i * 26, -40 + b]], { w: 2, col: OF.topD, a: 0.4, pass2: false }); ctx.restore();
  };
  HAT6.santa = (t, o, fx, L) => { push(fx * 0.3, -80, 0.85, 0.1); const c = poly([[-100, 0], [100, 0], [40 + Math.sin(t * 3) * 6, -150], [150, -110]], { wash: '#c8282a', washA: 1, w: 2.6, col: TM.line, key: 9301 }); shadeG(c.path, -L.side * 100, 0, 60, -100, '#6a0a10', 0.4);
    rect(-110, -16, 220, 34, { wash: '#f8f4ec', washA: 1, w: 2.4, col: TM.line }); ell(156, -112, 24, 24, { wash: '#f8f4ec', washA: 1, w: 2.2, col: TM.line }); pop(); };
  COST6.trench = (OF, b, t, bp, L) => {                                  // тренч сыщика: двубортный, пояс, погончики, длинные полы
    skirt6(OF, b, L, -118, -30, 92, 108, 9310, OF.top); hatch(bp.path, bp.bb, { gap: 7, a: 0.08, col: OF.topD, ang: 0.9, key: 9311, w: 1.2 });
    for (const sd of [-1, 1]) poly([[sd * 22, -250 + b], [sd * 70, -240 + b], [sd * 44, -170 + b], [sd * 8, -150 + b]], { wash: OF.topL, washA: 0.6, w: 2.2, col: TM.line, key: 9312 + sd });
    rect(-80, -126 + b, 160, 18, { wash: OF.topD, washA: 1, w: 1.8, col: TM.line }); rect(-12, -128 + b, 24, 22, { wash: '#8a6a3a', washA: 1, w: 1.6, col: TM.line }); for (let k = 0; k < 3; k++) for (const x of [-24, 20]) nb(x, -220 + k * 30 + b, 4, '#5a4020');
  };
  HAT6.deer = (t, o, fx, L) => { push(fx * 0.3, -80, 0.78); const c = blob([[-100, 0], [-96, -70], [-40, -110], [40, -110], [96, -70], [100, 0]], { wash: '#a88a5a', washA: 1, w: 2.6, col: TM.line, key: 9315 });
    ctx.save(); ctx.clip(c.path); for (let i = -6; i < 7; i++) { pencil([[i * 22, -120], [i * 22 + 40, 10]], { w: 2, col: '#5a4020', a: 0.4, pass2: false }); pencil([[i * 22 + 40, -120], [i * 22, 10]], { w: 2, col: '#5a4020', a: 0.4, pass2: false }); } ctx.restore();
    poly([[-60, -4], [60, -4], [80, 16], [-80, 16]], { wash: '#8a6a3a', washA: 1, w: 2, col: TM.line }); rect(-20, -116, 40, 12, { wash: '#8a6a3a', washA: 1, w: 1.6 }); pop(); };
  COST6.pajama = (OF, b, t, bp, L) => { ctx.save(); ctx.clip(bp.path); for (let i = -6; i < 7; i++) pencil([[i * 22, -270 + b], [i * 22, 0 + b]], { w: 7, col: '#f4f8fc', a: 0.75, pass2: false }); ctx.restore(); for (let k = 0; k < 4; k++) nb(0, -230 + k * 34 + b, 4, '#f4f8fc'); pencil([[-40, -246 + b], [0, -220 + b], [40, -246 + b]], { w: 6, col: OF.topD, pass2: false }); };
  HAT6.nightcap = (t, o, fx, L) => { push(fx * 0.3, -82, 0.82, 0.2); const sw = Math.sin(t * 2) * 10; poly([[-100, 0], [100, 0], [170 + sw, 60], [130 + sw, 70]], { wash: '#7ab0d8', washA: 1, w: 2.4, col: TM.line, key: 9320 }); pencil([[-100, 0], [100, 0]], { w: 1, col: TM.line, pass2: false });
    blob([[-100, 0], [-60, -120], [60, -110], [100, 0]], { wash: '#7ab0d8', washA: 1, w: 2.4, col: TM.line }); for (let i = 0; i < 4; i++) pencil([[-80 + i * 50, -6], [-60 + i * 40, -100]], { w: 6, col: '#f4f8fc', a: 0.7, pass2: false }); ell(150 + sw, 70, 22, 22, { wash: '#f4f8fc', washA: 1, w: 2, col: TM.line }); pop(); };
  COST6.polka = (OF, b, t, bp, L) => { skirt6(OF, b, L, -118, -10, 92, 120, 9330, OF.top); ctx.save(); ctx.clip(bp.path); const r = rng(9331); for (let i = 0; i < 40; i++) ell(-90 + (i % 8) * 26 + (Math.floor(i / 8) % 2) * 13, -250 + Math.floor(i / 8) * 30 + b, 6, 6, { wash: '#f6f0e0', washA: 1, line: false }); ctx.restore();
    pencil([[-36, -246 + b], [0, -226 + b], [36, -246 + b]], { w: 10, col: '#f6f0e0', pass2: false }); };
  HAT6.kerchief = (t, o, fx, L) => { push(fx * 0.3, -60, 0.86); const k = blob([[-120, 30], [-110, -70], [-40, -120], [40, -120], [110, -70], [120, 30], [80, -20], [-80, -20]], { wash: '#d9482b', washA: 1, w: 2.4, col: TM.line, key: 9335 });
    ctx.save(); ctx.clip(k.path); for (let i = 0; i < 20; i++) ell(-100 + (i % 5) * 50, -100 + Math.floor(i / 5) * 34, 7, 7, { wash: '#f6f0e0', washA: 1, line: false }); ctx.restore(); poly([[100, 10], [150, 40], [120, 60]], { wash: '#d9482b', washA: 1, w: 2, col: TM.line }); pop(); };
  // ---------------------------------------------------------------- трофей №3 на фартуке: свекольное пятно (после выпуска 003)
  const _c5c = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c5c(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    ctx.save(); ctx.globalAlpha = 0.6; ctx.fillStyle = '#8a1a4a'; ctx.beginPath(); ctx.ellipse(18, -104 + b, 8, 6, 0.3, 0, 6.3); ctx.fill(); ctx.beginPath(); ctx.ellipse(28, -96 + b, 3, 2.4, 0, 0, 6.3); ctx.fill(); ctx.restore();
  };
})();
