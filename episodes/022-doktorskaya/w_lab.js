/* 022 — `lab`: «1936-й. Рецепт пишут не повара — учёные мясного института. / Поэтому строго, как в аптеке: свинина, говядина, соль, сахар, кардамон. /
   И имя — «Докторская»: не для врачей, а для больных. Но каких — не поверишь.» Лаборатория мясного института 1930-х: дубовые панели, охристая стена,
   высокое окно на Москву 30-х (конструктивистский дом, фабричная труба с дымом, трамвайные провода, грузовик), плакат-схема разделки свиньи и коровы,
   грифельная доска «60 + 25 + 15 = 100 кг», полка банок специй с ярлыками, часы, телефон; учёная у доски с мелом, учёный у микроскопа, лаборант крутит
   гигантскую мясорубку-волчок, на крюке — окорок. На лабораторном столе (герой-предмет): аптечные весы с гирьками, лотки фарша, ступка с кардамоном,
   солонка, сахарница, штатив с пробирками, колба, тетрадь «РЕЦЕПТУРА №1», опытный батон. Том — учёный в белом халате и очках-гогглах.
   По словам: «1936-й» — лист отрывного календаря; «учёные» — учёные поворачиваются, учёная кланяется; «аптеке:» — Том ставит гирьку; «свинина,» / «говядина,»
   — куски падают на чаши (весы качаются); «соль,» «сахар,» — щепотки сыплются; «кардамон.» — Том пинцетом кладёт стручок, весы замирают ровно — «ДЗЫНЬ»;
   «Докторская»: — штамп-этикетка на батон; «каких» — на доске три «???», Том щурится. Переход В сцену: страница медкарты перелистывается справа налево.
   Главный свет — окно справа (холодный день), второй — зелёная лампа над столом. */
(() => {
  EV.lb_year = LS('s1');
  EV.lb_sci = wtw('s1', 'учёные');
  EV.lb_apt = wtw('s2', 'аптеке:');
  EV.lb_pork = wtw('s2', 'свинина,');
  EV.lb_beef = wtw('s2', 'говядина,');
  EV.lb_salt = wtw('s2', 'соль,');
  EV.lb_sugar = wtw('s2', 'сахар,');
  EV.lb_card = wtw('s2', 'кардамон.');
  EV.lb_name = wtw('s3', '«Докторская»:');
  EV.lb_sick = wtw('s3', 'больных.');
  EV.lb_who = wtw('s3', 'каких');
  SHAKES.push([EV.lb_pork + 0.1, 0.12, 5], [EV.lb_beef + 0.1, 0.12, 5], [EV.lb_name + 0.15, 0.15, 7]);
  KEYW.push('аптеке:', 'кардамон.', '«Докторская»:');
  const SX = 330, SY = 1500;                                             // весы на столе
  const tilt = t => { let a = 0; if (t > EV.lb_pork) a -= 0.16 * sm(clamp((t - EV.lb_pork) / 0.4)); if (t > EV.lb_beef) a += 0.1 * sm(clamp((t - EV.lb_beef) / 0.4)); if (t > EV.lb_card) a *= 1 - sm(clamp((t - EV.lb_card) / 0.6)); return a + Math.sin(t * 6) * 0.015 * (t < EV.lb_card + 0.6 ? 1 : 0); };
  function city(t) {                                                     // за окном: Москва 30-х
    vgrad(-500, 700, ['#a8b8c8', '#c8d4dc', '#e4e4dc']);
    for (let i = 0; i < 3; i++) { const x = ((-200 + i * 380 + t * 6) % 1200) - 300; blob([[x, -280 + i * 40], [x + 90, -320 + i * 40], [x + 220, -300 + i * 40], [x + 260, -260 + i * 40]], { wash: '#f4f4f0', washA: 0.7, line: false }); }
    const b = rect(-320, 100, 420, 420, { wash: '#d8c8b0', washA: 1, w: 1.6, col: '#5a5048' }); shadeG(b.path, 100, 0, -320, 0, '#8a7a68', 0.3); for (let r = 0; r < 5; r++) rect(-320, 130 + r * 76, 420, 34, { wash: '#7a8a98', washA: 0.8, w: 1, col: '#3a4048' });
    const tw = ell(-80, 120, 60, 60, { wash: '#c8b8a0', washA: 1, w: 1.6, col: '#5a5048' }); rect(-140, 120, 120, 400, { wash: '#c8b8a0', washA: 1, w: 1.4, col: '#5a5048' });
    rect(180, -60, 34, 580, { wash: '#8a4a3a', washA: 1, w: 1.6, col: '#3a1a10' }); for (let i = 0; i < 5; i++) { const k = (t * 0.25 + i * 0.2) % 1; ell(200 + k * 120, -80 - k * 260, 30 + k * 60, 22 + k * 40, { wash: '#8a8a90', washA: 0.5 * (1 - k), line: false }); }
    const f = rect(120, 260, 280, 260, { wash: '#b8a088', washA: 1, w: 1.4, col: '#4a3a2a' }); windows(130, 280, 260, 220, 6, 4, 22501, 0.4, '#fff0c0', '#8aa0b8', 0.8);
    pencil([[-400, 40], [500, 80]], { w: 2, col: '#2a2a2a', a: 0.7, pass2: false }); pencil([[-400, 60], [500, 100]], { w: 2, col: '#2a2a2a', a: 0.7, pass2: false });
    const tx = ((t * 40) % 1100) - 500; push(tx, 500, 0.8); rect(-80, -70, 160, 60, { wash: '#4a6a4a', washA: 1, w: 1.6, col: '#1a2a1a' }); rect(40, -110, 50, 50, { wash: '#4a6a4a', washA: 1, w: 1.6 }); for (const wx of [-50, 50]) ell(wx, -8, 20, 20, { wash: '#2a2a2a', washA: 1, w: 1.4 }); pop();
  }
  function wall(t) {                                                     // панели, окно, плакат разделки, доска, полка специй, часы, телефон
    vgrad(-800, 1500, ['#c89a5a', '#d8ac68', '#b8884a']);
    const r = rng(22510); for (let i = 0; i < 40; i++) ell(-500 + r() * 2200, -700 + r() * 1500, 20 + r() * 60, 10 + r() * 30, { wash: '#a87a3a', washA: 0.12, line: false });
    for (let x = -560; x < 1800; x += 120) { const p = rect(x, 860, 118, 600, { wash: '#7a4a24', washA: 1, w: 1.8, col: '#2a1408', key: 22511 + x }); shadeG(p.path, x, 860, x + 118, 1460, '#3a1a08', 0.35); rect(x + 14, 890, 90, 220, { wash: '#8a5a30', washA: 0.6, w: 1.2, col: '#3a1a08' }); }
    rect(-560, 846, 2400, 24, { wash: '#5a3014', washA: 1, w: 2, col: '#1a0a04' });
    push(1060, 80, 0.8); const w = rect(-260, -520, 520, 860, { wash: '#a8b8c8', washA: 1, w: 16, col: '#5a3a1a', key: 22512 }); ctx.save(); ctx.clip(w.path); push(0, -60, 1); city(t); pop(); ctx.restore();
    pencil([[0, -520], [0, 340]], { w: 12, col: '#5a3a1a' }); for (let y = -300; y < 340; y += 220) pencil([[-260, y], [260, y]], { w: 10, col: '#5a3a1a' }); rect(-290, 340, 580, 34, { wash: '#6a4220', washA: 1, w: 2 }); pop();
    push(80, 240, 1); const ps = rect(-230, -260, 460, 380, { wash: '#efe2c0', washA: 1, w: 2.4, col: '#5a4a2a', key: 22513 }); shadeG(ps.path, 230, 120, -230, -260, '#b8a070', 0.35);
    txt('СХЕМА РАЗДЕЛКИ', 0, -222, 26, { font: 'Osw', col: '#a8241e' });
    const pig = blob([[-200, -60], [-180, -120], [-100, -140], [-20, -130], [0, -90], [-10, -20], [-60, 0], [-160, 0]], { wash: '#f0b8b0', washA: 1, w: 2, col: '#5a2a2a' }); for (const [a, b] of [[-150, -130], [-100, -138], [-50, -132]]) pencil([[a, b], [a + 10, -4]], { w: 1.6, col: '#5a2a2a', pass2: false, gap: true }); ell(-6, -96, 14, 12, { wash: '#e8a0a0', washA: 1, w: 1.4 }); for (const lx of [-170, -40]) pencil([[lx, 0], [lx, 40]], { w: 6, col: '#5a2a2a', pass2: false });
    const cow = blob([[30, -70], [50, -130], [140, -140], [210, -120], [220, -60], [200, -10], [60, -10]], { wash: '#c88a6a', washA: 1, w: 2, col: '#4a2a1a' }); for (const [a, b] of [[80, -136], [130, -140], [180, -128]]) pencil([[a, b], [a + 6, -12]], { w: 1.6, col: '#4a2a1a', pass2: false, gap: true }); for (const sd of [-1, 1]) pencil([[220 + sd * 6, -130], [230 + sd * 16, -160]], { w: 4, col: '#efe6d0', pass2: false }); for (const lx of [70, 190]) pencil([[lx, -10], [lx, 40]], { w: 6, col: '#4a2a1a', pass2: false });
    txt('свинина 85 %', -100, 80, 20, { font: 'Hand', col: '#2a2a2a' }); txt('говядина 15 %', 120, 80, 20, { font: 'Hand', col: '#2a2a2a' }); pop();
    push(620, 300, 1); const bd = rect(-200, -200, 400, 300, { wash: '#2a3a32', washA: 1, w: 10, col: '#6a4220', key: 22514 }); shadeG(bd.path, 200, 100, -200, -200, '#4a5a52', 0.3);
    txt('60 + 25 + 15', 0, -130, 40, { font: 'Hand', col: '#f4f4ec' }); txt('= 100 кг', 0, -80, 40, { font: 'Hand', col: '#f4f4ec' }); txt('соль 2,5 · сахар 0,1', 0, -26, 24, { font: 'Hand', col: '#e8e8d8' }); txt('кардамон 0,03', 0, 8, 24, { font: 'Hand', col: '#e8e8d8' });
    if (t > EV.lb_who) { const k = popK(t, EV.lb_who, 0.4); push(0, 60, k); txt('???', 0, 0, 56, { font: 'Hand', col: '#f4d040' }); pop(); } rect(-180, 96, 360, 14, { wash: '#6a4220', washA: 1, w: 1.4 }); rect(-120, 86, 30, 10, { wash: '#f4f4f0', washA: 1, w: 1 }); pop();
    push(-60, 640, 1); rect(-220, 0, 440, 16, { wash: '#6a4220', washA: 1, w: 1.8, col: '#2a1408' }); ['соль', 'сахар', 'кардамон', 'селитра', 'перец', 'мускат'].forEach((l, i) => { const x = -190 + i * 76; const j = rect(x - 26, -96, 52, 96, { wash: '#e8e4d8', washA: 0.85, w: 1.6, col: '#5a5a5a' }); shadeG(j.path, x + 26, 0, x - 26, 0, '#a8a49a', 0.4); rect(x - 28, -108, 56, 14, { wash: '#3a3a3a', washA: 1, w: 1 }); const fl = ['#ffffff', '#f8f0e0', '#8a9a5a', '#e8e0d0', '#2a2a2a', '#a8703a'][i]; rect(x - 22, -50, 44, 46, { wash: fl, washA: 0.9, line: false }); rect(x - 22, -86, 44, 22, { wash: '#f4ecd0', washA: 1, w: 1 }); txt(l, x, -71, 11, { font: 'Hand', col: '#2a2a2a' }); }); pop();
    push(980, -380, 1); ell(0, 0, 60, 60, { wash: '#f4ecd8', washA: 1, w: 3, col: '#3a2a1a' }); ell(0, 0, 68, 68, { wash: 'rgba(0,0,0,0)', washA: 0, w: 8, col: '#5a3a1a' }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; pencil([[Math.cos(a) * 48, Math.sin(a) * 48], [Math.cos(a) * 54, Math.sin(a) * 54]], { w: 2, col: '#2a2a2a', pass2: false }); } pencil([[0, 0], [Math.cos(t * 0.4) * 40, Math.sin(t * 0.4) * 40]], { w: 3, col: '#1a1a1a', pass2: false }); pencil([[0, 0], [20, -26]], { w: 5, col: '#1a1a1a', pass2: false }); pop();
    push(960, 640, 1); const cal = rect(-60, -80, 120, 150, { wash: '#f4f0e6', washA: 1, w: 1.6, col: '#5a5a5a', key: 22515 }); rect(-60, -80, 120, 30, { wash: '#a8241e', washA: 1, line: false }); txt('1936', 0, -58, 18, { font: 'Osw', col: '#ffffff' }); txt('29', 0, 30, 64, { font: 'Osw', col: '#2a2a2a' }); txt('апреля', 0, 58, 14, { font: 'Hand', col: '#2a2a2a' });
    if (t > EV.lb_year && t < EV.lb_year + 0.9) { const k = (t - EV.lb_year) / 0.9; push(30 + k * 120, -20 + k * 200, 1, k * 3); rect(-60, -50, 120, 120, { wash: '#f4f0e6', washA: 1 - k, w: 1.4, col: '#5a5a5a' }); txt('28', 0, 30, 54, { font: 'Osw', col: '#2a2a2a' }); pop(); } pop();
  }
  function people(t) {                                                   // учёная у доски, учёный у микроскопа, лаборант у мясорубки, окорок на крюке
    const look = t > EV.lb_sci && t < EV.lb_sci + 1.6;
    human(200, 1300, 1.08, t, { body: '#f4f4f0', bodyD: '#a8b0ac', legs: '#3a3a44', hair: '#3a2a1a', face: look ? 'smile' : 'calm', armL: 'down', armR: t < EV.lb_who ? 'up' : 'point', look: look ? 0.9 : -0.6, seed: 22520, flip: 1, long: 1 });
    push(200 + 30, 1300 - 330 * 1.08, 1); blob([[-40, -40], [-30, -66], [0, -72], [30, -66], [40, -40], [24, -50], [-24, -50]], { wash: '#3a2a1a', washA: 1, w: 1.6, col: '#1a0a04' }); ell(0, -82, 18, 16, { wash: '#3a2a1a', washA: 1, w: 1.4 }); pop();
    human(1020, 1300, 1.05, t, { body: '#f4f4f0', bodyD: '#a8b0ac', legs: '#3a3a44', hair: '#a8a8a8', beard: 'short', face: look ? 'grin' : 'calm', armL: 'hold', armR: 'hold', look: look ? -0.9 : -0.2, seed: 22521, flip: -1 });
    push(940, 1160, 1); rect(-20, 0, 60, 16, { wash: '#2a2a2a', washA: 1, w: 1.4 }); pencil([[10, 0], [0, -80]], { w: 10, col: '#2a2a2a', pass2: false }); pencil([[0, -80], [-14, -120]], { w: 14, col: '#3a3a3a', pass2: false }); ell(-14, -126, 10, 6, { wash: '#8ab0c8', washA: 1, w: 1 }); pop();
    push(1500, 1300, 1); const g = blob([[-60, -380], [60, -380], [80, -300], [70, -160], [-70, -160], [-80, -300]], { wash: '#8a8a94', washA: 1, w: 2.6, col: '#2a2a34', key: 22522 }); metalG(g.path, -20, -320, 120, '#e8e8f0', '#8a8a94', '#3a3a44', 0.7);
    ell(0, -380, 70, 20, { wash: '#5a5a64', washA: 1, w: 2 }); rect(-40, -160, 80, 160, { wash: '#6a6a74', washA: 1, w: 2 }); push(80, -260, 1, t * 3); pencil([[0, 0], [70, 0]], { w: 10, col: '#4a4a54', pass2: false }); pencil([[70, 0], [70, -40]], { w: 12, col: '#8a4a2a', pass2: false }); pop();
    for (let i = 0; i < 6; i++) { const k = (t * 1.5 + i / 6) % 1; ell(-80 - k * 40, -200 + i * 6, 12, 8, { wash: DK.pink, washA: 1 - k * 0.5, w: 1, col: DK.pinkD }); } pop();
    human(1640, 1300, 1.0, t, { body: '#f4f4f0', bodyD: '#a8b0ac', legs: '#3a3a44', hair: '#8a5a2a', face: 'calm', armL: 'swing', armR: 'hold', look: -0.5, seed: 22523, flip: -1, hat: 'cap', hatCol: '#ffffff' });
    push(1230, 760, 1); pencil([[0, -60], [0, 40]], { w: 4, col: '#8a8a8a', pass2: false }); pencil(spline([[0, 40], [16, 60], [0, 76]], false, 4), { w: 4, col: '#8a8a8a', pass2: false }); const h = blob([[-30, 70], [30, 70], [60, 160], [40, 260], [-40, 260], [-60, 160]], { wash: '#c8705a', washA: 1, w: 2.2, col: '#4a1a10', key: 22524 }); shadeG(h.path, 60, 0, -40, 0, '#6a2a1a', 0.45); ell(0, 250, 40, 16, { wash: '#f4d8c8', washA: 1, w: 1.6 }); pop();
  }
  function bench(t) {                                                    // лабораторный стол: весы, фарш, ступка, солонка, сахарница, пробирки, колба, тетрадь, батон
    const tb = rect(-500, 1440, 2200, 700, { wash: '#3a3a3a', washA: 1, w: 3, col: '#0a0a0a', key: 22530 }); shadeG(tb.path, 0, 1440, 0, 1900, '#0a0a0a', 0.4); for (let x = -500; x < 1700; x += 140) pencil([[x, 1446], [x - 20, 2140]], { w: 2, col: '#5a5a5a', a: 0.5, pass2: false });
    rect(-500, 1430, 2200, 18, { wash: '#6a4220', washA: 1, w: 2, col: '#2a1008' });
    const a = tilt(t); push(SX, SY, 1); rect(-150, -10, 300, 30, { wash: '#6a4220', washA: 1, w: 2, col: '#2a1008' }); const pl = rect(-12, -190, 24, 180, { wash: '#c8a040', washA: 1, w: 2, col: '#5a3a08' }); metalG(pl.path, -4, -120, 60, '#fff0b0', '#c8a040', '#6a4a10', 0.7);
    push(0, -200, 1, a); pencil([[-150, 0], [150, 0]], { w: 8, col: '#c8a040', pass2: false }); poly([[-10, 0], [10, 0], [0, -30]], { wash: '#c8a040', washA: 1, w: 1.4 }); pop();
    for (const sd of [-1, 1]) { const px = sd * 150 * Math.cos(a), py = -200 + sd * 150 * Math.sin(a); pencil([[px, py], [px - 40, py + 110]], { w: 1.4, col: '#6a4a10', pass2: false }); pencil([[px, py], [px + 40, py + 110]], { w: 1.4, col: '#6a4a10', pass2: false }); const pn = ell(px, py + 112, 56, 14, { wash: '#d8b050', washA: 1, w: 2, col: '#6a4a10' }); metalG(pn.path, px - 16, py + 108, 50, '#fff4c0', '#d8b050', '#6a4a10', 0.7);
      if (sd < 0 && t > EV.lb_pork) { const k = clamp((t - EV.lb_pork) / 0.3); blob([[px - 40, py + 104 - (1 - k) * 200], [px - 20, py + 76 - (1 - k) * 200], [px + 30, py + 80 - (1 - k) * 200], [px + 40, py + 104 - (1 - k) * 200]], { wash: '#f0a0a0', washA: 1, w: 1.6, col: '#8a3a3a' }); for (let i = 0; i < 4; i++) ell(px - 20 + i * 14, py + 92 - (1 - k) * 200, 5, 3, { wash: '#fff4ec', washA: 0.9, line: false }); }
      if (sd > 0 && t > EV.lb_beef) { const k = clamp((t - EV.lb_beef) / 0.3); blob([[px - 30, py + 104 - (1 - k) * 200], [px - 14, py + 84 - (1 - k) * 200], [px + 24, py + 86 - (1 - k) * 200], [px + 30, py + 104 - (1 - k) * 200]], { wash: '#a83a3a', washA: 1, w: 1.6, col: '#4a0a0a' }); }
      if (sd > 0 && t > EV.lb_card) { const k = clamp((t - EV.lb_card) / 0.25); ell(px + 8, py + 100 - (1 - k) * 120, 9, 5, { wash: '#8aa05a', washA: 1, w: 1.2, col: '#3a4a1a' }); } }
    for (let i = 0; i < 4; i++) { const gx = 180 + i * 34, gs = 1 - i * 0.18; const g = rect(gx - 14 * gs, -40 * gs, 28 * gs, 40 * gs, { wash: '#c8a040', washA: 1, w: 1.4, col: '#5a3a08' }); metalG(g.path, gx - 4, -30 * gs, 20, '#fff4c0', '#c8a040', '#6a4a10', 0.7); ell(gx, -44 * gs, 6 * gs, 5 * gs, { wash: '#c8a040', washA: 1, w: 1 }); }
    pop();
    for (const [tx, tc, lbl] of [[830, '#f6c0b8', 'свинина'], [1030, '#b84a44', 'говядина']]) { push(tx, 1560, 1); rect(-90, -20, 180, 40, { wash: '#e8e8e4', washA: 1, w: 1.8, col: '#6a6a6a' }); const m = blob([[-70, -18], [-50, -50], [0, -60], [50, -50], [70, -18]], { wash: tc, washA: 1, w: 1.6, col: '#5a1a1a' }); const rr = rng(22531 + tx); for (let i = 0; i < 7; i++) ell(-50 + rr() * 100, -40 + rr() * 20, 3, 2, { wash: '#fff0e8', washA: 0.8, line: false }); rect(-50, 4, 100, 18, { wash: '#f4ecd0', washA: 1, w: 1 }); txt(lbl, 0, 18, 13, { font: 'Hand', col: '#2a2a2a' }); pop(); }
    push(1180, 1580, 1); const mo = blob([[-60, -50], [60, -50], [50, 10], [-50, 10]], { wash: '#d8d4c8', washA: 1, w: 2, col: '#4a4a44' }); shadeG(mo.path, 60, 0, -60, 0, '#8a8a80', 0.4); ell(0, -50, 60, 14, { wash: '#6a7a4a', washA: 1, w: 1.4 }); for (let i = 0; i < 8; i++) ell(-40 + i * 11, -52 + (i % 2) * 4, 6, 4, { wash: '#8aa05a', washA: 1, w: 1, col: '#3a4a1a' }); pencil([[20, -50], [70, -130]], { w: 12, col: '#c8c4b8', pass2: false }); pop();
    push(1300, 1530, 1); for (let i = 0; i < 5; i++) { const x = -60 + i * 30; const tu = rect(x - 8, -120, 16, 110, { wash: '#d8ecf0', washA: 0.5, w: 1.4, col: '#5a6a6a' }); rect(x - 7, -60 + (i % 3) * 10, 14, 50 - (i % 3) * 10, { wash: ['#c8341e', '#e8b030', '#4a8a5a', '#2a5aa8', '#f0a0a0'][i], washA: 0.8, line: false }); } rect(-90, -40, 180, 16, { wash: '#6a4220', washA: 1, w: 1.4 }); rect(-90, -100, 180, 12, { wash: '#6a4220', washA: 1, w: 1.4 }); pop();
    push(1420, 1540, 1); const fk = blob([[-20, -150], [20, -150], [20, -100], [70, -10], [-70, -10], [-20, -100]], { wash: '#d8ecf0', washA: 0.45, w: 2, col: '#4a6a6a', key: 22532 }); blob([[-50, -40], [50, -40], [66, -10], [-66, -10]], { wash: '#e86a8a', washA: 0.7, line: false }); pencil([[-40, -130], [-30, -40]], { w: 4, col: '#ffffff', a: 0.6, pass2: false }); for (let i = 0; i < 3; i++) { const k = (t * 0.7 + i / 3) % 1; ell(0 + Math.sin(k * 7 + i) * 10, -160 - k * 120, 8 + k * 14, 6 + k * 10, { wash: '#ffffff', washA: 0.4 * (1 - k), line: false }); } pop();
    push(-60, 1560, 1, -0.06); const nb2 = rect(-110, -50, 220, 90, { wash: '#efe4c8', washA: 1, w: 1.6, col: '#6a5a3a' }); pencil([[0, -50], [0, 40]], { w: 2, col: '#6a5a3a', pass2: false }); txt('РЕЦЕПТУРА №1', -54, -26, 15, { font: 'Osw', col: '#a8241e' }); for (let i = 0; i < 3; i++) { pencil([[-100, -6 + i * 14], [-10, -6 + i * 14]], { w: 1.6, col: '#3a3a5a', a: 0.6, pass2: false, gap: true }); pencil([[10, -30 + i * 14], [100, -30 + i * 14]], { w: 1.6, col: '#3a3a5a', a: 0.6, pass2: false, gap: true }); } pop();
    doktorLoaf(540, 1630, 0.55, -0.04, { key: 22533, label: t > EV.lb_name ? 'ДОКТОРСКАЯ' : '№ 1 · опытный', sub: t > EV.lb_name ? 'для больных' : 'ВНИИМП' });
    if (t > EV.lb_name && t < EV.lb_name + 0.8) { const k = popK(t, EV.lb_name, 0.35); push(540, 1560, k * 1.2, -0.1); ell(0, 0, 50, 50, { wash: 'rgba(0,0,0,0)', washA: 0, w: 4, col: DK.stamp }); txt('ДОКТОР', 0, 6, 16, { font: 'Osw', col: DK.stamp }); pop(); }
    castShadow(SX, SY, 300, 140, -0.6, 0.25); castShadow(1300, 1540, 200, 100, -0.6, 0.2);
  }
  function front(t) {                                                    // передний план: зелёный абажур лампы сверху, колба и бутыль по краям, пар
    push(700, 470, 1.2); const sh = blob([[-200, 0], [-140, -90], [140, -90], [200, 0]], { wash: '#2a6a4a', washA: 1, w: 2.6, col: '#0a2a14', key: 22540 }); shadeG(sh.path, 0, -90, 0, 0, '#0a3a1a', 0.45); pencil([[0, -90], [0, -400]], { w: 6, col: '#2a2a2a', pass2: false }); ell(0, 0, 200, 22, { wash: '#fff2c0', washA: 1, line: false }); glow(0, 10, 220, 'rgba(255,230,160,1)', 0.3); pop();
    push(-260, 2080, 1.4); const b = blob([[-60, -260], [60, -260], [60, -200], [110, -100], [110, 0], [-110, 0], [-110, -100], [-60, -200]], { wash: '#6a4a2a', washA: 0.7, w: 2.2, col: '#2a1408', key: 22541 }); shadeG(b.path, 110, 0, -110, 0, '#2a1408', 0.4); rect(-80, -120, 160, 70, { wash: '#f4ecd0', washA: 1, w: 1.2 }); txt('СЕЛИТРА', 0, -80, 20, { font: 'Osw', col: '#2a2a2a' }); pop();
  }
  WORLD.lab = (t, u, cat) => {
    lay(14, () => { wall(t); shaft(1240, -300, 480, 2400, 0.35, 'rgba(230,240,255,1)', 0.15); haze('#f4e8d0', 0.05); });
    lay(4, () => { people(t); lightPool(700, 1300, 800, 160, 'rgba(240,245,255,1)', 0.2); castShadow(200, 1300, 120, 160, -0.6, 0.22); castShadow(1020, 1300, 120, 160, -0.6, 0.2); });
    lay(1, () => { cat(); bench(t); lightPool(700, 1540, 600, 120, 'rgba(255,230,160,1)', 0.3); });
    lay(0.6, () => { front(t); motes(20, [-100, 300, 1200, 1500], '#fff4e0', t, 22550, { sp: 5, sz: 3, a: 0.35, wob: 6 }); moodDark(640, 1150, 520, 1500, '#2a1a10', 0.42); });
  };
  DIR.lab = {
    outfit: 'labA', light: { side: 1, rim: '#e8f0ff' }, grade: ['#e0b070', 0.06],
    act: () => [[S0.lab, 'talk'], [EV.lb_sci, 'proud'], [EV.lb_apt, 'suspicious'], [EV.lb_pork, 'talk'], [EV.lb_card, 'awe'], [EV.lb_card + 0.6, 'smug'], [EV.lb_name, 'proud'], [EV.lb_sick, 'talk'], [EV.lb_who, 'sideeye']],
    pose: (t, u, b) => { const weigh = t > EV.lb_apt - 0.3 && t < EV.lb_card + 0.5, card = t > EV.lb_card - 0.4 && t < EV.lb_card + 0.4;
      return Object.assign(b, { x: 600, y: 1590, s: 1.16, flip: 1, look: weigh ? [0.6, 0.6] : t > EV.lb_who ? [-0.3, -0.5] : [0.1, -0.1], hand: card ? [170, -150] : weigh ? [150, -200] : [130, -260], handF: t > EV.lb_name - 0.2 && t < EV.lb_name + 0.6 ? [-90, -120] : [-120, -220], squint: t > EV.lb_who, tilt: weigh ? 0.05 : 0 }); },
    afterCat: (t, u, P) => { if (t > EV.lb_card - 0.4 && t < EV.lb_card + 0.1) { const hx = P.x - 170 * P.s, hy = P.y - 150 * P.s; pencil([[hx, hy], [hx + 20, hy + 60]], { w: 3, col: '#b8b8c4', pass2: false }); ell(hx + 22, hy + 66, 9, 5, { wash: '#8aa05a', washA: 1, w: 1.2, col: '#3a4a1a' }); }
      for (const [ev, col] of [[EV.lb_salt, '#ffffff'], [EV.lb_sugar, '#fff8e0']]) if (t > ev && t < ev + 0.7) { const k = (t - ev) / 0.7; for (let i = 0; i < 10; i++) ell(SX + 140 + Math.sin(i * 3) * 14, SY - 260 + k * 160 + i * 8, 3, 3, { wash: col, washA: 1 - k, w: 0.6, col: '#a8a8a8' }); } },
    cam: () => [[S0.lab, 600, 1120, 0.24], [EV.lb_sci, 620, 1110, 0.26], [EV.lb_apt, 580, 1180, 0.3], [EV.lb_card, 540, 1200, 0.34], [EV.lb_name, 620, 1160, 0.3], [EV.lb_who, 600, 1120, 0.3], [S1.lab, 600, 1120, 0.32]]
  };
  TRANS_IN.lab = { a: 0.15, b: 0.55, runA: 1, fx(k, t, A, B) {           // страница медкарты перелистывается справа налево
    const e = sm(k), X = 1080 * (1 - e);
    drawBuf(A, 1, 540, 960); const rp = new Path2D(); rp.rect(X, 0, 1080 - X + 2, 1920); inPath(rp, () => drawBuf(B, 1, 540, 960));
    scr(() => { const w = 160 * Math.sin(e * 3.14); if (w > 2) { const p = rect(X - w, 0, w, 1920, { wash: '#f4efe2', washA: 1, w: 2, col: '#8a8270' }); shadeG(p.path, X, 0, X - w, 0, '#b8b09a', 0.6); for (let i = 0; i < 30; i++) pencil([[X - w + 10, 120 + i * 60], [X - 10, 120 + i * 60]], { w: 1.4, col: '#9ab0c8', a: 0.7, pass2: false }); } });
  } };
})();
