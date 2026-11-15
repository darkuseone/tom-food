/* 023 — `names`: «И так везде: французы зовут её сарацинской, / немцы — языческой. Своей её не признаёт никто! / Подсказка — у англичан: buckwheat —
   «буковая пшеница». Запомни бук!» Средневековая рыночная площадь XV в. после полудня: фахверковые дома с черепицей и эркерами, собор с витражной розой,
   колодец с воротом, голуби на брусчатке, полосатые навесы лавок. Слева — лавка француза (вывеска «BLÉ SARRASIN», синий навес с лилиями), справа —
   лавка немца («HEIDENKORN», жёлто-чёрный навес), над Томом — доска «BUCKWHEAT» и ветка огромного бука с трёхгранными орешками. На прилавке Тома:
   мешки с гречкой, весы-коромысло с гирьками, монеты, рулоны сукна, связка лука, головка сыра, корзина торговки с пучком щавеля (подсказка).
   Том — торговец (котта, шаперон + фартук). По словам: «сарацинской,» — француз тычет пальцем на восток, табличка «САРАЦИНСКАЯ»; «языческой.» — немец
   тычет в ответ, табличка «ЯЗЫЧЕСКАЯ»; «никто!» — оба отворачиваются, мешок на прилавке остаётся с биркой «ЧЕЙ?», Том разводит лапами;
   «buckwheat» — над Томом раскачивается доска; «буковая» — с ветки падает орешек бука, Том ловит его и держит рядом с зерном (похожи!); «бук!» —
   Том стучит себя по лбу, бирка «БУК = ЗАПОМНИ». Главный свет — солнце слева сквозь проулок, тени навесов. Переход В сцену: свиток-вывеска
   раскатывается сверху вниз. */
(() => {
  EV.nm_fr = wtw('s5', 'сарацинской,');
  EV.nm_de = wtw('s6', 'языческой.');
  EV.nm_none = wtw('s6', 'признаёт');
  EV.nm_en = wtw('s7', 'buckwheat');
  EV.nm_beech = wtw('s7', 'буковая');
  EV.nm_rem = wtw('s7', 'бук!');
  SHAKES.push([EV.nm_none + 0.3, 0.12, 5], [EV.nm_rem, 0.1, 4]);
  KEYW.push('сарацинской,', 'языческой.', '«буковая');
  const nutFall = t => clamp((t - EV.nm_beech + 0.25) / 0.45);
  function back(t) {                                                     // небо, собор с витражной розой и шпилями, фахверковые дома
    vgrad(-800, 900, ['#7aa0c8', '#b8cce0', '#f0e0c8']);
    for (let i = 0; i < 3; i++) { const x = ((i * 600 + t * 8) % 2200) - 500; blob([[x, -300 + i * 60], [x + 200, -340 + i * 60], [x + 420, -300 + i * 60], [x + 260, -270 + i * 60]], { wash: '#ffffff', washA: 0.8, line: false }); }
    push(560, 760, 1); const cw = rect(-260, -820, 520, 820, { wash: '#c8b898', washA: 1, w: 2.4, col: '#4a3a2a', key: 24100 }); shadeG(cw.path, 260, 0, -260, 0, '#7a6a50', 0.45); hatch(cw.path, cw.bb, { gap: 14, a: 0.12, col: '#5a4a30', ang: 0, key: 24101, w: 1.2 });
    for (const sx of [-220, 220]) { rect(sx - 50, -1100, 100, 1100, { wash: '#b8a888', washA: 1, w: 2, col: '#4a3a2a' }); poly([[sx - 60, -1100], [sx, -1320], [sx + 60, -1100]], { wash: '#5a6a7a', washA: 1, w: 2, col: '#2a3a4a' }); for (let k = 0; k < 4; k++) rect(sx - 16, -1040 + k * 220, 32, 80, { wash: '#2a2a3a', washA: 1, w: 1.2 }); }
    const rs = ell(0, -560, 150, 150, { wash: '#3a2a5a', washA: 1, w: 4, col: '#2a1a10', key: 24102 }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; const p = poly([[0, -560], [Math.cos(a) * 140, -560 + Math.sin(a) * 140], [Math.cos(a + 0.52) * 140, -560 + Math.sin(a + 0.52) * 140]], { wash: ['#c8343a', '#2a5aa8', '#e8b830', '#3a8a5a'][i % 4], washA: 0.9, w: 2, col: '#1a1008' }); } ell(0, -560, 40, 40, { wash: '#e8b830', washA: 1, w: 2, col: '#1a1008' }); glow(0, -560, 180, 'rgba(255,220,160,1)', 0.15);
    poly([[-150, -150], [0, -330], [150, -150]], { wash: '#b8a888', washA: 1, w: 2 }); rect(-90, -160, 180, 160, { wash: '#4a2a1a', washA: 1, w: 2, col: '#1a0a04' }); blob([[-90, -160], [-90, -220], [0, -270], [90, -220], [90, -160]], { wash: '#4a2a1a', washA: 1, w: 2 }); pop();
    for (let i = 0; i < 8; i++) { const x = -640 + i * 200 + (i > 3 ? 280 : 0), w = 180, h = 380 + (i % 3) * 60; if (i === 4) continue; const bse = 900;
      const wl = rect(x, bse - h, w, h, { wash: ['#f0e4c8', '#e8d0b0', '#f4e8d8'][i % 3], washA: 1, w: 2, col: '#3a2a1a', key: 24110 + i }); shadeG(wl.path, x + w, 0, x, 0, '#9a8060', 0.4);
      for (let q = 0; q < 4; q++) pencil([[x, bse - h + q * h / 4], [x + w, bse - h + q * h / 4]], { w: 8, col: '#4a2a14', pass2: false }); for (let q = 0; q < 4; q++) pencil([[x + q * w / 3, bse - h], [x + q * w / 3, bse]], { w: 8, col: '#4a2a14', pass2: false }); pencil([[x, bse - h], [x + w / 3, bse - h * 0.75]], { w: 6, col: '#4a2a14', pass2: false }); pencil([[x + w, bse - h], [x + w * 2 / 3, bse - h * 0.75]], { w: 6, col: '#4a2a14', pass2: false });
      for (let q = 0; q < 2; q++) { rect(x + 20 + q * 90, bse - h * 0.62, 50, 60, { wash: '#a8c8d8', washA: 1, w: 1.6, col: '#3a2a1a' }); rect(x + 14 + q * 90, bse - h * 0.62 + 56, 62, 14, { wash: '#c8343a', washA: 1, w: 1, col: '#3a1a0a' }); for (let f = 0; f < 3; f++) ell(x + 26 + q * 90 + f * 18, bse - h * 0.62 + 50, 7, 7, { wash: f % 2 ? '#f4c020' : '#e84a6a', washA: 1, line: false }); }
      const rf = poly([[x - 16, bse - h], [x + w / 2, bse - h - 170], [x + w + 16, bse - h]], { wash: '#a8482a', washA: 1, w: 2, col: '#3a1408' }); shadeG(rf.path, x + w, 0, x, 0, '#5a1a08', 0.4); for (let q = 1; q < 5; q++) pencil([[x - 16 + q * 18, bse - h - q * 30], [x + w + 16 - q * 18, bse - h - q * 30]], { w: 1.4, col: '#5a1a08', a: 0.6, pass2: false }); }
    haze('#f4e8d8', 0.08);
  }
  function square(t) {                                                   // брусчатка, колодец, голуби, горожане на заднем плане
    const sq = rect(-800, 900, 2700, 600, { wash: '#a89a88', washA: 1, line: false, key: 24130 }); shadeG(sq.path, 0, 900, 0, 1400, '#6a5a4a', 0.35);
    for (let row = 0; row < 10; row++) for (let i = 0; i < 30; i++) { const y = 910 + row * 46, x = -800 + i * 92 + (row % 2) * 46; ell(x, y, 40, 16 + row, { wash: row % 3 ? '#b8aa98' : '#9a8c7a', washA: 1, w: 1, col: '#5a4a3a' }); }
    push(560, 1040, 1); const wl = ell(0, 0, 110, 30, { wash: '#8a8478', washA: 1, w: 2, col: '#2a2620' }); rect(-110, -90, 220, 90, { wash: '#9a9488', washA: 1, w: 2, col: '#2a2620' }); for (const sx of [-100, 100]) pencil([[sx, -90], [sx, -240]], { w: 10, col: '#5a3a1a', pass2: false }); pencil([[-120, -240], [120, -240]], { w: 10, col: '#5a3a1a', pass2: false }); poly([[-140, -240], [0, -320], [140, -240]], { wash: '#a8482a', washA: 1, w: 2 }); pop();
    for (let i = 0; i < 6; i++) { const ph = t * 1.5 + i, x = 300 + i * 90 + Math.sin(ph * 0.3) * 20, y = 1100 + (i % 3) * 30; push(x, y, 0.8, 0, i % 2 ? 1 : -1); ell(0, 0, 18, 11, { wash: '#8a8a9a', washA: 1, w: 1.2, col: '#2a2a3a' }); ell(14, -8 + Math.abs(Math.sin(ph * 3)) * 6, 8, 7, { wash: '#7a7a8a', washA: 1, w: 1, col: '#2a2a3a' }); ell(14, -10 + Math.abs(Math.sin(ph * 3)) * 6, 4, 2, { wash: '#4a8a6a', washA: 1, line: false }); pop(); }
    for (let i = 0; i < 6; i++) human(-200 + i * 260 + (i > 2 ? 300 : 0), 1000, 0.6, t, { body: ['#6a3a3a', '#3a4a6a', '#5a5a3a', '#7a5a3a', '#4a3a5a', '#3a5a4a'][i], legs: '#3a3028', long: i % 2, hat: i % 3 === 0 ? 'cap' : i % 3 === 1 ? 'scarf' : undefined, hatCol: '#3a2a1a', armL: 'swing', armR: i % 2 ? 'hold' : 'swing', face: 'calm', seed: 24131 + i, flip: i % 2 ? 1 : -1 });
  }
  function stall(x, y, t, o) {                                           // лавка: навес-полосы, стойка, мешки, вывеска, продавец
    push(x, y, 1); for (const sx of [-180, 180]) pencil([[sx, 0], [sx, -380]], { w: 10, col: '#5a3a1a', pass2: false });
    const aw = blob([[-210, -380], [210, -380], [230, -300], [-230, -300]], { wash: o.c1, washA: 1, w: 2.4, col: '#2a1a10' }); ctx.save(); ctx.clip(aw.path); for (let i = 0; i < 8; i++) rect(-240 + i * 60, -400, 30, 120, { wash: o.c2, washA: 1, line: false }); ctx.restore(); for (let i = 0; i < 8; i++) blob([[-230 + i * 58, -300], [-201 + i * 58, -270], [-172 + i * 58, -300]], { wash: i % 2 ? o.c1 : o.c2, washA: 1, w: 1.4, col: '#2a1a10' });
    if (o.lily) for (let i = 0; i < 4; i++) txt('⚜', -150 + i * 100, -330, 26, { font: 'Osw', col: '#f4d860' });
    const ct = rect(-200, -110, 400, 110, { wash: '#8a5a32', washA: 1, w: 2.2, col: '#2a1408' }); shadeG(ct.path, 0, -110, 0, 0, '#3a1a08', 0.4);
    for (let i = 0; i < 3; i++) grainSack(-120 + i * 110, -100, 0.55, { key: o.key + i, open: i === 1, col: ['#c8a878', '#b8986a', '#d8b888'][i] });
    const sg = rect(-150, -250, 300, 70, { wash: '#f4e8c8', washA: 1, w: 2.4, col: '#3a2410' }); shadeG(sg.path, 0, -250, 0, -180, '#c8b088', 0.3); txt(o.sign, 0, -204, o.size || 34, { font: 'Osw', col: o.ink }); pop();
    const turn = t > EV.nm_none, act = t > o.t0;
    human(x + (o.side > 0 ? 60 : -60), y - 40, 1.05, t, { body: o.body, legs: '#3a3028', hat: o.hat, hatCol: o.hatCol, armL: act && !turn ? 'point' : 'hold', armR: turn ? 'hips' : 'hold', face: turn ? 'angry' : act ? 'grin' : 'calm', seed: o.key + 5, flip: turn ? -o.side : o.side, look: o.side * 0.6, beard: o.beard });
    if (act) bubbleTag(o.tag, x, y - 470, t, o.t0 + 0.1, o.tagCol, 40, o.side * 0.05);
  }
  function board(t) {                                                    // доска BUCKWHEAT над Томом + ветка бука с орешками
    const sw = t > EV.nm_en ? Math.sin((t - EV.nm_en) * 6) * 0.08 * Math.exp(-(t - EV.nm_en) * 1.2) : 0;
    push(620, 820, 1); pencil(spline([[-700, -260], [-300, -200], [100, -230], [500, -180], [900, -240]], false, 8), { w: 30, col: '#5a3a24', pass2: false }); pencil(spline([[-700, -270], [-300, -210], [100, -240], [500, -190], [900, -250]], false, 8), { w: 6, col: '#8a6a4a', a: 0.6, pass2: false });
    for (let i = 0; i < 16; i++) { const x = -640 + i * 96, y = -230 + Math.sin(i) * 30, a = Math.sin(t * 1.2 + i) * 0.06; push(x, y, 1, 0.6 + a + (i % 2) * 0.8); const lf = blob([[0, 0], [24, -20], [70, -16], [94, 0], [70, 16], [24, 20]], { wash: i % 3 ? '#6a9a3a' : '#5a8a2a', washA: 1, w: 1.4, col: '#2a4a14' }); pencil([[0, 0], [90, 0]], { w: 1.2, col: '#a8c870', a: 0.7, pass2: false }); for (let q = 1; q < 5; q++) pencil([[q * 18, 0], [q * 18 + 10, -14]], { w: 1, col: '#a8c870', a: 0.5, pass2: false }); pop(); if (i % 3 === 1) { push(x + 10, y + 30, 1); const hk = blob([[-18, 0], [-14, -20], [14, -20], [18, 0], [0, 14]], { wash: '#8a6a3a', washA: 1, w: 1.4, col: '#3a2410' }); for (let q = 0; q < 6; q++) pencil([[-14 + q * 6, -18], [-16 + q * 6, -26]], { w: 1.4, col: '#5a3a1a', pass2: false }); beechnut(-6, 14, 0.5, 0.3, { key: 24140 + i }); beechnut(8, 16, 0.5, -0.3, { key: 24150 + i }); pop(); } }
    pop();
    push(620, 820, 1, sw); for (const sx of [-170, 170]) pencil([[sx, -40], [sx * 0.6, -200]], { w: 3, col: '#5a4a3a', pass2: false });
    const b = rect(-200, -40, 400, 100, { wash: '#2a4a3a', washA: 1, w: 3, col: '#0a1a10', key: 24160 }); shadeG(b.path, 0, -40, 0, 60, '#0a1a10', 0.4); rect(-186, -28, 372, 76, { wash: 'rgba(0,0,0,0)', washA: 0, w: 2, col: '#e8c860' });
    txt('BUCKWHEAT', 0, 26, 48, { font: 'Osw', col: '#f4e8c8' }); pop();
    if (t > EV.nm_beech) { const k = popK(t, EV.nm_beech + 0.1, 0.4); push(620, 990, k); rect(-210, -36, 420, 60, { wash: '#f4e8c8', washA: 1, w: 2, col: '#3a2410' }); txt('BUCK = БУК · WHEAT = ПШЕНИЦА', 0, 6, 22, { font: 'Osw', col: '#2a4a3a' }); pop(); }
    const nf = nutFall(t); if (nf > 0 && nf < 1) beechnut(560 - nf * 20, lerp(640, 1190, nf * nf), 1.1, nf * 6, { key: 24161 });
  }
  function counter(t) {                                                  // прилавок Тома: весы, гирьки, монеты, сукно, лук, сыр, корзина со щавелем, бирка «ЧЕЙ?»
    const tb = rect(-400, 1440, 2000, 600, { wash: '#8a5a32', washA: 1, w: 3, col: '#2a1408', key: 24170 }); shadeG(tb.path, 0, 1440, 0, 1850, '#3a1a08', 0.5);
    for (let i = 0; i < 7; i++) pencil([[-400, 1470 + i * 50], [1600, 1476 + i * 50]], { w: 3, col: '#4a2a10', a: 0.45, pass2: false }); rect(-400, 1430, 2000, 16, { wash: '#a8743e', washA: 1, w: 2, col: '#3a1a08' });
    lightPool(420, 1500, 560, 110, 'rgba(255,230,180,1)', 0.32);
    grainSack(840, 1530, 0.85, { key: 24171, open: 1 }); if (t > EV.nm_none + 0.1) { const k = popK(t, EV.nm_none + 0.2, 0.35); push(840, 1420, k, 0.08); pencil([[-40, 30], [0, 60]], { w: 2, col: '#4a3010', pass2: false }); rect(-60, -30, 120, 60, { wash: '#f4e8c8', washA: 1, w: 2, col: '#4a3010' }); txt('ЧЕЙ?', 0, 12, 34, { font: 'Osw', col: '#a8241e' }); pop(); }
    push(330, 1500, 1); pencil([[0, 0], [0, -200]], { w: 8, col: '#6a4a2a', pass2: false }); const tl = Math.sin(t * 1.5) * 0.06; push(0, -200, 1, tl); pencil([[-120, 0], [120, 0]], { w: 7, col: '#8a6a3a', pass2: false }); for (const sd of [-1, 1]) { pencil([[sd * 116, 0], [sd * 116 - 30, 90]], { w: 1.4, col: '#3a3a3a', pass2: false }); pencil([[sd * 116, 0], [sd * 116 + 30, 90]], { w: 1.4, col: '#3a3a3a', pass2: false }); const pn = ell(sd * 116, 92, 44, 12, { wash: '#c89a3a', washA: 1, w: 1.6, col: '#5a3a08' }); metalG(pn.path, sd * 116 - 10, 88, 40, '#fff0b0', '#c89a3a', '#6a4a08', 0.7); } for (let i = 0; i < 5; i++) grainB(-116 - 20 + i * 10, 84 - (i % 2) * 6, 0.24, i, { key: 24175 + i }); rect(104, 66, 24, 22, { wash: '#6a6a72', washA: 1, w: 1.2 }); pop(); pop();
    for (let i = 0; i < 6; i++) { const c = ell(190 + i * 18 + (i % 2) * 4, 1580 - i * 3, 14, 6, { wash: '#e8c040', washA: 1, w: 1.2, col: '#6a4a08' }); }
    for (let i = 0; i < 3; i++) { const r = rect(-60 + i * 30, 1460 - i * 36, 220, 36, { wash: ['#6a2a5a', '#2a5a7a', '#8a6a2a'][i], washA: 1, w: 1.6, col: '#1a0a14' }); ell(160 + i * 30, 1478 - i * 36, 18, 18, { wash: ['#8a3a7a', '#3a7a9a', '#a88a3a'][i], washA: 1, w: 1.4 }); }
    push(1010, 1490, 1); for (let i = 0; i < 6; i++) { const o = ell(-30 + (i % 3) * 30, -100 + Math.floor(i / 3) * 50, 22, 24, { wash: '#c8843a', washA: 1, w: 1.4, col: '#5a2a08' }); } pencil([[0, -180], [0, -140]], { w: 3, col: '#8a6a3a', pass2: false }); pop();
    push(600, 1580, 0.9); const ch = blob([[-80, 0], [-80, -50], [80, -50], [80, 0]], { wash: '#f4c840', washA: 1, w: 2, col: '#8a5a08' }); ell(0, -50, 80, 18, { wash: '#ffe080', washA: 1, w: 1.6, col: '#8a5a08' }); poly([[0, -50], [60, -44], [40, -30]], { wash: '#fff0a0', washA: 1, line: false }); pop();
    push(1150, 1560, 0.9); const bk = blob([[-80, 0], [-96, -90], [96, -90], [80, 0]], { wash: '#c8a060', washA: 1, w: 2, col: '#5a3a10' }); for (let i = 0; i < 4; i++) pencil([[-92, -16 - i * 20], [92, -16 - i * 20]], { w: 1.6, col: '#8a6a30', pass2: false }); for (let i = 0; i < 6; i++) sorrelLeaf(-60 + i * 24, -80, 0.45, -0.4 + i * 0.16, { key: 24180 + i }); pencil(spline([[-90, -90], [0, -200], [90, -90]], false, 6), { w: 6, col: '#8a6a30', pass2: false }); pop();
    castShadow(840, 1530, 140, 90, 0.7, 0.22); castShadow(330, 1500, 160, 90, 0.7, 0.2); castShadow(1150, 1560, 140, 80, 0.7, 0.2);
  }
  function front(t) {                                                    // передний план: свисающий край навеса сверху, связка лука и колбас справа, голубь
    push(540, 560, 1); const aw = blob([[-400, -60], [400, -60], [420, 30], [-420, 30]], { wash: '#2a5aa8', washA: 1, w: 2.4, col: '#0a1a3a' }); ctx.save(); ctx.clip(aw.path); for (let i = 0; i < 12; i++) rect(-420 + i * 72, -70, 36, 110, { wash: '#f4f0e4', washA: 1, line: false }); ctx.restore(); for (let i = 0; i < 12; i++) blob([[-420 + i * 70, 30], [-385 + i * 70, 64], [-350 + i * 70, 30]], { wash: i % 2 ? '#2a5aa8' : '#f4f0e4', washA: 1, w: 1.4, col: '#0a1a3a' }); pop();
    push(980, 700, 1); pencil([[0, 0], [0, 300]], { w: 3, col: '#8a6a3a', pass2: false }); for (let i = 0; i < 6; i++) ell((i % 2 ? 14 : -14), 40 + i * 44, 24, 26, { wash: '#c8843a', washA: 1, w: 1.4, col: '#5a2a08' }); pop();
  }
  WORLD.names = (t, u, cat) => {
    lay(18, () => { back(t); shaft(-200, 0, 360, 2600, -0.55, 'rgba(255,236,200,1)', 0.12); });
    lay(6, () => { square(t); });
    lay(2.6, () => { stall(270, 1300, t, { key: 24190, c1: '#2a5aa8', c2: '#f4f0e4', sign: 'BLÉ SARRASIN', ink: '#2a3a8a', body: '#2a3a7a', hat: 'cap', hatCol: '#1a1a3a', side: 1, t0: EV.nm_fr, tag: 'САРАЦИНСКАЯ', tagCol: '#2a5aa8', lily: 1 });
      stall(850, 1300, t, { key: 24195, c1: '#e8c020', c2: '#2a2a2a', sign: 'HEIDENKORN', ink: '#2a2a2a', body: '#4a4a3a', hat: 'fur', hatCol: '#5a3a1a', side: -1, t0: EV.nm_de, tag: 'ЯЗЫЧЕСКАЯ', tagCol: '#2a2a2a', beard: 'short' });
      castShadow(270, 1300, 360, 120, 0.7, 0.2); castShadow(850, 1300, 360, 120, 0.7, 0.2); });
    lay(1.5, () => { board(t); });
    lay(1, () => { cat(); counter(t); });
    lay(0.75, () => { front(t); motes(14, [300, 700, 1000, 1500], '#fff4d8', t, 24199, { sp: 5, sz: 3, a: 0.35, wob: 6 }); moodDark(600, 1100, 520, 1500, '#2a1a3a', 0.32); });
  };
  DIR.names = {
    outfit: 'merchA', light: { side: -1, rim: '#ffe0b0' }, grade: ['#f0c8a0', 0.06],
    act: () => [[S0.names, 'talk'], [EV.nm_fr, 'sideeye'], [EV.nm_de, 'suspicious'], [EV.nm_none, 'annoyed'], [EV.nm_en, 'talk'], [EV.nm_beech + 0.3, 'awe'], [EV.nm_rem, 'wink']],
    pose: (t, u, b) => { const none = t > EV.nm_none && t < EV.nm_en, nut = t > EV.nm_beech + 0.2, rem = t > EV.nm_rem;
      return Object.assign(b, { x: 600, y: 1590, s: 1.15, flip: t > EV.nm_fr && t < EV.nm_de, look: t < EV.nm_fr ? [0, 0] : t < EV.nm_de ? [-0.8, 0] : t < EV.nm_none ? [0.8, 0] : t < EV.nm_en ? [0, 0.2] : t < EV.nm_beech ? [0, -0.8] : [0.3, -0.2],
        hand: none ? [250, -200] : nut ? [180, -330] : [150, -220], handF: none ? [-250, -200] : rem ? [-60, -400] : nut ? [-170, -330] : [-130, -200], prop: nut ? 'beechP' : undefined, propF: undefined, propAng: 0.1 }); },
    afterCat: (t, u, P) => { if (t > EV.nm_beech + 0.2) grainB(P.x + 170 * P.s, P.y - 390 * P.s, 1.0, 0.1, { key: 24198 }); },
    cam: () => [[S0.names, 520, 1080, 0.24], [EV.nm_fr, 470, 1120, 0.27], [EV.nm_de, 700, 1120, 0.27], [EV.nm_none, 600, 1130, 0.25], [EV.nm_en, 600, 1040, 0.25], [EV.nm_beech, 600, 1120, 0.3], [EV.nm_rem, 600, 1140, 0.32], [S1.names, 600, 1140, 0.33]]
  };
  TRANS_IN.names = { a: 0.1, b: 0.55, runA: 1, fx(k, t, A, B) {        // свиток-вывеска раскатывается сверху вниз
    const e = sm(k), Y = lerp(-80, 2050, e); drawBuf(A, 1, 540, 960);
    scr(() => { ctx.save(); const P = new Path2D(); P.rect(0, 0, 1080, Y); ctx.clip(P); ctx.drawImage(B, 0, 0); ctx.restore();
      const rl = rect(-20, Y - 30, 1120, 90, { wash: '#e8d4a0', washA: 1, w: 4, col: '#5a3a10' }); shadeG(rl.path, 0, Y - 30, 0, Y + 60, '#8a6a30', 0.5); pencil([[-20, Y + 10], [1100, Y + 10]], { w: 3, col: '#a8241e', pass2: false });
      for (const sx of [-10, 1090]) ell(sx, Y + 15, 30, 50, { wash: '#6a3a1a', washA: 1, w: 2, col: '#2a1408' }); });
  } };
})();
