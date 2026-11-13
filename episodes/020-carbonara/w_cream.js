/* 020 — `cream`: «Сегодня карбонара строгая: гуанчале — свиная щека, яйцо, пекорино, перец. Сливки — ересь! / Но перемотаем: лет тридцать сливки в неё клали почти все — даже в Италии.»
   Часть 1 (сегодня): светлая кухня римской траттории — белый кафель «кабанчик», стальная вытяжка, окно с крышами и куполом (главный свет — дневное окно слева), полки банок,
   повара за плитой. На столе по словам выскакивают канон: гуанчале → яйцо → пекорино → перечная мельница; «Сливки» — пакет сливок въезжает, «ересь!» — красный штамп ✕, Том отпихивает пакет.
   «перемотаем» — ◀◀ REW: полосы VHS, кухня перематывается в 80-е: оранжево-коричневый кафель, обои с кругами, холодильник цвета авокадо, телефон с витым шнуром,
   кассетник, календарь ROMA 1985, лампа-трубка (холодный свет) + тёплая лампа. Хозяйка с химзавивкой и усатый повар льют сливки; Том льёт сливки в сковороду — соус белеет.
   «Италии.» — на календаре вспыхивает трёхцветный флажок. Переход В сцену: перечная мельница — кадр засыпает чёрным перцем и он осыпается вниз. */
(() => {
  EV.cr_guan = wtw('s1', 'гуанчале');
  EV.cr_egg = wtw('s1', 'яйцо,');
  EV.cr_pec = wtw('s1', 'пекорино,');
  EV.cr_pep = wtw('s1', 'перец.');
  EV.cr_cream = wtw('s1', 'Сливки');
  EV.cr_heresy = wtw('s1', 'ересь!');
  EV.cr_rew = wtw('s2', 'перемотаем:');
  EV.cr_30 = wtw('s2', 'тридцать');
  EV.cr_pour = wtw('s2', 'клали');
  EV.cr_it = wtw('s2', 'Италии.');
  SHAKES.push([EV.cr_heresy, 0.18, 9], [EV.cr_rew, 0.4, 6]);
  KEYW.push('ересь!', 'тридцать');
  const old = t => t > EV.cr_rew + 0.35;                                   // после перемотки — 80-е

  function nowWall(t) {                                                 // сегодня: кафель-кабанчик, окно с крышами Рима, вытяжка, полки
    vgrad(-300, 2100, ['#c8ccd0', '#e8e8e4', '#f4f0e8']);
    for (let y = -300; y < 1100; y += 40) for (let x = -400 + ((y / 40) % 2) * 40; x < 1500; x += 80) rect(x, y, 78, 38, { wash: '#f8f8f4', washA: 1, w: 0.7, col: '#b8bcc0' });
    push(140, 420, 1); const w = rect(-200, -300, 400, 480, { wash: '#a8d0f0', washA: 1, w: 12, col: '#6a6e74', key: 20900 }); ctx.save(); ctx.clip(w.path);
    vgrad(-300, 200, ['#6aa8e0', '#a8d0f0', '#f4e8d0']); for (let i = 0; i < 3; i++) blob([[-180 + i * 140, -220], [-120 + i * 140, -250], [-60 + i * 140, -220], [-100 + i * 140, -200]], { wash: '#ffffff', washA: 0.85, line: false });
    ell(60, 40, 90, 70, { wash: '#d8c8a0', washA: 1, w: 1.6, col: '#6a5a3a' }); rect(-30, 40, 180, 140, { wash: '#d8c8a0', washA: 1, line: false }); pencil([[60, -30], [60, -70]], { w: 6, col: '#6a5a3a' }); ell(60, -76, 10, 10, { wash: '#d8b860', washA: 1, w: 1 });
    for (let i = 0; i < 6; i++) { const x = -200 + i * 70, h = 60 + (i * 37) % 60; rect(x, 180 - h, 66, h, { wash: ['#d8905a', '#c8784a', '#e8b070'][i % 3], washA: 1, w: 1, col: '#5a3a1a' }); poly([[x - 4, 180 - h], [x + 33, 150 - h], [x + 70, 180 - h]], { wash: '#a84a2a', washA: 1, w: 1 }); } ctx.restore();
    pencil([[0, -300], [0, 180]], { w: 8, col: '#6a6e74' }); for (let i = 0; i < 3; i++) { push(-120 + i * 110, 180, 0.6); blob([[-24, 0], [-28, -40], [28, -40], [24, 0]], { wash: '#c8603a', washA: 1, w: 1.4 }); for (let k = 0; k < 6; k++) ell(-20 + k * 8, -60 - (k % 3) * 12, 9, 14, { wash: '#4a9a3a', washA: 1, line: false }); pop(); }
    push(760, 120, 1); const hd = poly([[-260, 140], [-150, -80], [150, -80], [260, 140]], { wash: '#c8ccd4', washA: 1, w: 3, col: '#4a4e58', key: 20901 }); metalG(hd.path, -60, 20, 300, '#ffffff', '#c8ccd4', '#6a6e78'); rect(-60, -320, 120, 240, { wash: '#b8bcc4', washA: 1, w: 2, col: '#4a4e58' }); pop();
    for (let i = 0; i < 6; i++) { push(560 + i * 80, 280, 1); const pn = ell(0, 30, 34, 34, { wash: '#8a8e96', washA: 1, w: 1.6, col: '#2a2e36' }); metalG(pn.path, -10, 20, 40, '#ffffff', '#8a8e96', '#2a2e36'); pencil([[0, -4], [0, -30]], { w: 4, col: '#2a2e36' }); pop(); }
    rect(1000, 380, 300, 18, { wash: '#8a8e96', washA: 1, w: 1.6 }); for (let i = 0; i < 6; i++) { const x = 1020 + i * 46; rect(x, 320, 36, 60, { wash: ['#e8d8a8', '#c8603a', '#6a8a3a'][i % 3], washA: 0.9, w: 1.2, col: '#3a2a1a' }); rect(x - 2, 312, 40, 10, { wash: '#4a4e58', washA: 1, w: 1 }); }
  }
  function oldWall(t) {                                                 // 80-е: оранжево-коричневый кафель, обои с кругами, холодильник-авокадо, телефон, кассетник, календарь
    vgrad(-300, 2100, ['#5a3a20', '#8a5a2a', '#a8703a']);
    for (let y = -300; y < 700; y += 120) for (let x = -400; x < 1500; x += 120) { ell(x + 60, y + 60, 50, 50, { wash: '#c8843a', washA: 0.7, w: 1, col: '#6a3a14' }); ell(x + 60, y + 60, 30, 30, { wash: '#e8b860', washA: 0.7, line: false }); }
    for (let y = 700; y < 1440; y += 60) for (let x = -400; x < 1500; x += 60) rect(x, y, 58, 58, { wash: ((x + y) / 60) % 2 ? '#8a4a1e' : '#c8803a', washA: 1, w: 0.7, col: '#4a2a10' });
    push(150, 1000, 1); const fr = rect(-140, -620, 280, 620, { wash: '#a8b85a', washA: 1, w: 3, col: '#3a4a1a', key: 20910 }); shadeG(fr.path, 140, 0, -140, 0, '#5a6a2a', 0.45); pencil([[-140, -400], [140, -400]], { w: 3, col: '#3a4a1a' }); rect(100, -560, 14, 120, { wash: '#c8ccd4', washA: 1, w: 1.4 }); rect(100, -360, 14, 160, { wash: '#c8ccd4', washA: 1, w: 1.4 });
    for (let i = 0; i < 5; i++) ell(-90 + i * 40, -520 + (i % 2) * 40, 14, 14, { wash: ['#e83a2a', '#3a8ae8', '#f4d040'][i % 3], washA: 1, w: 1 }); rect(-60, -300, 110, 70, { wash: '#f4f0e0', washA: 1, w: 1, col: '#5a5a5a' }); txt('lista spesa', -5, -270, 18, { font: 'Hand', col: '#3a3a8a' }); pop();
    push(440, 460, 1); rect(-60, -100, 120, 200, { wash: '#e8d8b0', washA: 1, w: 2, col: '#4a3a2a' }); rect(-40, -80, 80, 40, { wash: '#c8241e', washA: 1, line: false }); txt('ROMA 1985', 0, -52, 18, { font: 'Osw', col: '#ffffff' }); txt('APRILE', 0, -10, 20, { font: 'Osw', col: '#3a2a1a' });
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) rect(-50 + c * 17, 10 + r * 18, 14, 14, { wash: '#f4ecd4', washA: 1, w: 0.6, col: '#8a7a5a' });
    if (t > EV.cr_it) { const k = popK(t, EV.cr_it, 0.35); push(0, -140, k); for (let i = 0; i < 3; i++) rect(-36 + i * 24, -30, 24, 50, { wash: ['#2a8a3a', '#f4f0e8', '#c8241e'][i], washA: 1, w: 1.2, col: '#2a2a2a' }); pencil([[-36, -30], [-36, 60]], { w: 4, col: '#4a3a2a' }); pop(); } pop();
    push(640, 380, 1); rect(-40, -80, 80, 140, { wash: '#e86a3a', washA: 1, w: 2, col: '#4a1a0a' }); for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) ell(-20 + c * 20, -50 + r * 24, 7, 7, { wash: '#f4ecd4', washA: 1, w: 0.8 }); rect(-50, -110, 100, 30, { wash: '#e86a3a', washA: 1, w: 2, col: '#4a1a0a' });
    const cord = []; for (let i = 0; i < 30; i++) cord.push([-46 + Math.sin(i * 1.2) * 10, -90 + i * 10]); pencil(cord, { w: 3, col: '#c84a1a', pass2: false }); pop();
    push(1040, 560, 1); const rd = rect(-170, -70, 340, 140, { wash: '#2a2a2e', washA: 1, w: 2.4, col: '#0a0a0a', key: 20911 }); shadeG(rd.path, 0, -70, 0, 70, '#5a5a6a', 0.4); for (const sx of [-110, 110]) { ell(sx, 0, 48, 48, { wash: '#4a4a52', washA: 1, w: 2 }); for (let k = 1; k < 4; k++) ell(sx, 0, 48 - k * 12, 48 - k * 12, { wash: '#3a3a42', washA: 0.4, w: 1, col: '#1a1a1a' }); }
    rect(-46, -40, 92, 50, { wash: '#8ac8e8', washA: 0.6, w: 1.4 }); ell(-20, -14, 12, 12, { wash: '#1a1a1a', washA: 1, line: false }); ell(20, -14, 12, 12, { wash: '#1a1a1a', washA: 1, line: false }); pencil([[60, -70], [140, -160]], { w: 3, col: '#c8ccd4', pass2: false });
    for (let i = 0; i < 3; i++) { const q = (t * 0.8 + i / 3) % 1; txt('♪', 60 + q * 120, -90 - q * 120, 34, { col: '#ffe080', a: 1 - q }); } pop();
    push(700, -120, 1); rect(-300, -20, 600, 40, { wash: '#e8e8e0', washA: 1, w: 2, col: '#4a4e58' }); rect(-280, -6, 560, 18, { wash: '#f0fbff', washA: 1, line: false }); glow(0, 20, 300, 'rgba(220,240,255,1)', 0.25); pop();
  }
  function cooks(t) {                                                   // повара: сегодня — у плиты; в 80-е — хозяйка с химзавивкой и усатый повар со сливками
    if (!old(t)) {
      push(860, 1240, 1); rect(-200, -60, 400, 60, { wash: '#2a2a2e', washA: 1, w: 2 }); for (let i = 0; i < 3; i++) { ell(-130 + i * 130, -60, 50, 12, { wash: '#1a1a1a', washA: 1, w: 1.2 }); glow(-130 + i * 130, -60, 50, 'rgba(90,140,255,1)', 0.15); } pop();
      human(760, 1230, 1.0, t, { body: '#f8f6f0', legs: '#2a2a2a', hair: '#2a1a0a', face: t > EV.cr_cream && t < EV.cr_rew ? 'shock' : 'smile', armL: 'hold', armR: t > EV.cr_heresy && t < EV.cr_rew ? 'point' : 'swing', look: -0.4, seed: 20920, hat: 'cap', hatCol: '#f8f6f0' });
      human(1010, 1230, 1.0, t, { body: '#2a2a2e', legs: '#2a2a2a', hair: '#5a3a1a', face: t > EV.cr_heresy && t < EV.cr_rew ? 'angry' : 'grin', armL: 'up', armR: 'hold', look: -0.7, seed: 20921, flip: -1, beard: 'short', long: 1 });
      push(1010, 1100, 1, Math.sin(t * 6) * 0.2); const pn = ell(-80, 0, 60, 18, { wash: '#2a2a2e', washA: 1, w: 2 }); carbNest(-80, -6, 0.3, t, { key: 20922 }); pencil([[-20, 0], [60, 10]], { w: 8, col: '#1a1a1a' }); pop();
    } else {
      human(780, 1230, 1.05, t, { body: '#e86aa0', legs: '#4a4a8a', hair: '#8a4a1a', face: t > EV.cr_pour ? 'grin' : 'smile', armL: 'hold', armR: t > EV.cr_pour ? 'up' : 'hold', look: -0.5, seed: 20925, long: 1 });
      for (let i = 0; i < 9; i++) ell(740 + (i % 3) * 30, 1230 - 1.05 * 300 - 20 + ((i / 3) | 0) * 22, 18, 16, { wash: '#8a4a1a', washA: 1, line: false });   // химзавивка
      if (t > EV.cr_pour) { creamCarton(850, 860, 0.7, 2.4, 20926); pencil(spline([[860, 900], [870, 1000], [880, 1110]], false, 5), { w: 10, col: CB.cream, pass2: false }); }
      human(1020, 1230, 1.05, t, { body: '#6a4a2a', legs: '#3a3a3a', hair: '#1a1a1a', face: t > EV.cr_30 ? 'grin' : 'calm', armL: 'hold', armR: t > EV.cr_it ? 'wave' : 'hold', look: -0.6, seed: 20927, flip: -1, beard: 'short' });
      push(900, 1180, 1); const pn = ell(0, 0, 90, 22, { wash: '#3a3a3a', washA: 1, w: 2 }); carbNest(0, -8, 0.42, t, { cream: 1, key: 20928, steam: 1 }); pencil([[80, 0], [180, 14]], { w: 10, col: '#1a1a1a' }); pop();
    }
  }
  function table(t) {                                                   // столешница: канон по словам (гуанчале, яйцо, пекорино, мельница) → в 80-е: сливки, ветчина, грибы
    const c = rect(-500, 1440, 2100, 700, { wash: old(t) ? '#c8a878' : '#dcdcd8', washA: 1, w: 3, col: '#4a4a4a', key: 20930 }); shadeG(c.path, 0, 1440, 0, 1900, old(t) ? '#5a3a1a' : '#6a6e78', 0.5);
    if (!old(t)) { const r = rng(20931); for (let i = 0; i < 20; i++) pencil([[-400 + r() * 1800, 1460 + r() * 300], [-380 + r() * 1800, 1470 + r() * 300]], { w: 1.4, col: '#ffffff', a: 0.5, pass2: false }); }
    else for (let i = 0; i < 14; i++) pencil([[-500, 1470 + i * 30], [1600, 1474 + i * 30]], { w: 2, col: '#8a6a3a', a: 0.4, pass2: false });
    const pk = (t0, x, y, fn) => { if (t < t0) return; const k = popK(t, t0, 0.35); push(x, y - (1 - k) * 80, 0.4 + 0.6 * k); fn(); pop(); };
    if (!old(t)) {
      push(860, 1470, 1); rect(-260, -40, 520, 60, { wash: '#a8743a', washA: 1, w: 2, col: '#3a2010' }); for (let i = 0; i < 6; i++) pencil([[-250, -30 + i * 9], [250, -30 + i * 9]], { w: 1.2, col: '#6a4a1a', a: 0.4, pass2: false }); pop();
      pk(EV.cr_guan, 700, 1420, () => guanciale(0, 0, 0.62, -0.1, 20932)); pk(EV.cr_egg, 860, 1410, () => { egg(-20, 0, 0.6, -0.2, { key: 20933 }); egg(30, 10, 0.6, 0.3, { key: 20934, cracked: 1 }); });
      pk(EV.cr_pec, 1000, 1430, () => pecorino(0, 0, 0.5, 20935)); pk(EV.cr_pep, 1120, 1440, () => { const pm = rect(-20, -130, 40, 130, { wash: '#4a2a14', washA: 1, w: 1.6, col: '#1a0a04' }); shadeG(pm.path, 20, 0, -20, 0, '#1a0a04', 0.4); ell(0, -136, 24, 10, { wash: '#c8ccd4', washA: 1, w: 1.4 }); pepperDust(-40, -20, 30, 10, 14, 20936); });
      if (t > EV.cr_cream) { const k = sm(clamp((t - EV.cr_cream) / 0.4)), away = t > EV.cr_heresy + 0.2 ? sm(clamp((t - EV.cr_heresy - 0.2) / 0.5)) : 0; creamCarton(lerp(1300, 1000, k) + away * 400, 1440, 0.9, away * 0.6, 20937);
        if (t > EV.cr_heresy) { const s = popK(t, EV.cr_heresy, 0.3); push(1000 + away * 400, 1360, s, -0.2); pencil([[-70, -70], [70, 70]], { w: 18, col: '#d8241e', pass2: false }); pencil([[70, -70], [-70, 70]], { w: 18, col: '#d8241e', pass2: false }); pop(); } }
      basilPot(180, 1450, t);
    } else {
      push(700, 1440, 1); rect(-60, -40, 120, 40, { wash: '#f4f0e8', washA: 1, w: 1.6 }); for (let i = 0; i < 4; i++) { rect(-50 + i * 26, -64, 22, 24, { wash: '#e8a0a0', washA: 1, w: 1, col: '#8a4a4a' }); } txt('PROSCIUTTO', 0, -12, 13, { font: 'Osw', col: '#8a4a4a' }); pop();
      for (let i = 0; i < 4; i++) { push(560 + i * 34, 1440, 0.6); ell(0, -20, 26, 16, { wash: '#c8a080', washA: 1, w: 1.4, col: '#5a3a1a' }); rect(-8, -20, 16, 24, { wash: '#e8d8c0', washA: 1, w: 1.2 }); pop(); }
      for (let i = 0; i < 3; i++) creamCarton(1080 + i * 70, 1450, 0.7, 0, 20940 + i); txt('×3', 1160, 1300, 36, { font: 'Osw', col: '#c8241e' });
      if (t > EV.cr_30) bubbleTag('30 ЛЕТ СО СЛИВКАМИ', 820, 1250, t, EV.cr_30 + 0.05, '#2a6ac8', 44, -0.04);
    }
    castShadow(860, 1450, 400, 140, 0.5, 0.25);
  }
  function basilPot(x, y, t) { push(x, y, 1); blob([[-40, 0], [-46, -70], [46, -70], [40, 0]], { wash: '#c8603a', washA: 1, w: 1.6, col: '#5a2a10' }); for (let i = 0; i < 9; i++) basilLeaf(-36 + (i % 3) * 36, -90 - ((i / 3) | 0) * 30 + Math.sin(t * 2 + i) * 2, 0.5, i * 0.7, 20950 + i); pop(); }
  function front(t) {                                                   // передний план: сегодня — ряд стальных половников; 80-е — пластиковая лейка-сахарница и край магнитофона
    if (!old(t)) { push(1260, 300, 1.3); pencil([[-220, -60], [200, -60]], { w: 8, col: '#6a6e78' }); for (let i = 0; i < 4; i++) { push(-180 + i * 110, -60, 1); pencil([[0, 0], [0, 260]], { w: 8, col: '#8a8e96' }); const b = ell(0, 290, 40, 30, { wash: '#a8acb4', washA: 1, w: 2, col: '#3a3e44' }); metalG(b.path, -10, 280, 40, '#ffffff', '#a8acb4', '#3a3e44'); pop(); } pop();
      push(-120, 1900, 1.6); for (let i = 0; i < 6; i++) pencil(spline([[0, 0], [-30 + i * 14, -140], [-10 + i * 20, -260]], false, 5), { w: 6, col: '#3a8a2a' }); for (let i = 0; i < 6; i++) basilLeaf(-10 + i * 20, -260 + (i % 2) * 20, 0.7, i, 20960 + i); pop(); }
    else { push(-120, 1700, 1.5); const jar = rect(-60, -160, 120, 160, { wash: '#f4e8a0', washA: 0.4, w: 2, col: '#6a5a2a' }); rect(-64, -180, 128, 24, { wash: '#e86a3a', washA: 1, w: 1.6 }); txt('ZUCCHERO', 0, -70, 20, { font: 'Osw', col: '#6a3a1a' }); pop();
      push(1260, 1800, 1.5); ell(0, 0, 160, 50, { wash: '#4a4a52', washA: 1, w: 2 }); ell(0, -10, 120, 30, { wash: '#2a2a2e', washA: 1, w: 1.4 }); pop(); }
  }
  WORLD.cream = (t, u, cat) => {
    lay(14, () => { if (old(t)) { oldWall(t); haze('#ffa060', 0.06); } else { nowWall(t); haze('#e8f4ff', 0.05); } });
    lay(4, () => { cooks(t); if (!old(t)) shaft(140, 300, 260, 1400, -0.35, 'rgba(255,250,230,0.6)', 0.12); else lightPool(900, 1200, 420, 100, 'rgba(255,200,120,1)', 0.2); });
    lay(1, () => { cat(); table(t); lightPool(860, 1450, 560, 90, old(t) ? 'rgba(255,200,130,1)' : 'rgba(255,255,240,1)', 0.25); });
    lay(0.6, () => { front(t); moodDark(760, 1100, 560, 1500, old(t) ? '#1a0a04' : '#0a1020', 0.4); motes(16, [200, 600, 1200, 1400], old(t) ? '#ffe0a0' : '#ffffff', t, 20970, { sp: 8, sz: 3, a: 0.35 }); });
    if (t > EV.cr_rew - 0.1 && t < EV.cr_rew + 0.9) { const k = clamp((t - EV.cr_rew + 0.1) / 1.0); rewTag(k, 1); scr(() => { ctx.save(); ctx.globalAlpha = 0.35 * Math.sin(Math.PI * k); for (let i = 0; i < 14; i++) { ctx.fillStyle = i % 2 ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)'; ctx.fillRect(0, ((i * 157 + FRAME * 61) % H), W, 10 + (i % 4) * 8); } ctx.restore(); }); }
  };
  DIR.cream = {
    outfit: 'chef', light: { side: -1, rim: '#fff4e0' }, grade: ['#ffe0b0', 0.05],
    act: () => [[S0.cream, 'proud'], [EV.cr_guan, 'talk'], [EV.cr_pep, 'smug'], [EV.cr_cream, 'suspicious'], [EV.cr_heresy, 'annoyed'], [EV.cr_rew, 'shock'], [EV.cr_30, 'sideeye'], [EV.cr_pour, 'grin'], [EV.cr_it, 'awe']],
    pose: (t, u, b) => { const o = old(t), push_ = t > EV.cr_heresy && t < EV.cr_rew, pour = o && t > EV.cr_pour;
      return Object.assign(b, { x: 560, y: 1590, s: 1.15, flip: 1, look: o ? [0.6, 0.2] : t < EV.cr_cream ? [0.6, 0.5] : [0.8, 0.3], hand: push_ ? [300, -240] : pour ? [230, -330] : [160, -260], handF: t < EV.cr_cream ? [-60, -260] : [-70, -210],
        prop: pour ? 'creamP' : t > EV.cr_guan && t < EV.cr_cream ? 'guanP' : undefined, propAng: pour ? 2.2 : -0.2, point: t > EV.cr_egg && t < EV.cr_cream ? 1 : undefined, sweat: t > EV.cr_rew && t < EV.cr_30 }); },
    afterCat: (t, u, P) => { if (old(t) && t > EV.cr_pour) { const x = P.x + 260 * P.s, y = P.y - 300 * P.s; pencil(spline([[x, y], [x + 10, y + 80], [x + 14, y + 160]], false, 5), { w: 9, col: CB.cream, pass2: false }); } },
    cam: () => [[S0.cream, 640, 1150, 0.26], [EV.cr_guan, 680, 1200, 0.3, 'x'], [EV.cr_cream, 720, 1160, 0.28], [EV.cr_heresy, 700, 1140, 0.32, 'x'], [EV.cr_rew, 660, 1080, 0.22], [EV.cr_30, 680, 1120, 0.26, 'x'], [EV.cr_it, 680, 1080, 0.28], [S1.cream, 680, 1100, 0.3]]
  };
  TRANS_IN.cream = { a: 0.2, b: 0.5, runA: 1, fx(k, t, A, B) {           // перечная мельница: кадр засыпает крупным чёрным перцем, перец осыпается — под ним новая сцена
    drawBuf(k < 0.5 ? A : B, 1, 540, 960);
    scr(() => { const r = rng(20980); const cov = Math.sin(Math.PI * k); for (let i = 0; i < 900; i++) { const x = r() * W, y0 = r() * H, fall = k > 0.5 ? (k - 0.5) * 2 * (600 + r() * 1400) : 0; if (r() > cov * 1.1) continue;
      ctx.fillStyle = r() < 0.5 ? '#1a1008' : '#3a2a1a'; ctx.beginPath(); ctx.ellipse(x, y0 + fall, 10 + r() * 30, 8 + r() * 24, r() * 3, 0, 6.3); ctx.fill(); } });
  } };
})();
