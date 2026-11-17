/* 024 — `hook`: «Чей борщ? Соседи спорят до хрипоты, а ответ — на дне тарелки! / Откусим историю!»
   ВАУ-первый кадр: огромная тарелка красного борща крупно сверху-3/4 (орнамент по краю, жир-золотинки, сметанное облачко, укроп, пар) под тёплой лампой-абажуром.
   Вечерняя кухня: кафель, полки с банками и расписными тарелками, связки чеснока и перца, плита с кастрюлей и паром, окно с синим снегом (холодный второй свет).
   Вокруг стола — соседи-спорщики (бабушка в платке, усач в жилете, девушка с косой, парень в свитере) тянут к тарелке ложки, над ними пузыри «НАШ!».
   Том в худи + фартук за тарелкой. По словам: «Чей» — пар взвивается, лампа качнулась; «Соседи» — с краёв кадра въезжают руки с ложками;
   «хрипоты,» — пузыри «НАШ!» множатся, ложки дерутся (звяк); «дне» — Том тычет ложкой в центр тарелки, руки замирают; «историю!» — укус ложки борща,
   сметана начинает раскручиваться спиралью → нырок (переход В grass). Главный свет — абажур над столом, второй — синее окно справа. */
(() => {
  EV.hk_chei = wtw('h1', 'Чей');
  EV.hk_sosedi = wtw('h1', 'Соседи');
  EV.hk_hrip = wtw('h1', 'хрипоты,');
  EV.hk_dno = wtw('h1', 'дне');
  EV.hk_bite = wtw('h2', 'историю!');
  EV.hk_swirl = EV.hk_bite + 0.35;
  SHAKES.push([EV.hk_hrip + 0.05, 0.16, 6], [EV.hk_bite, 0.18, 8]);
  KEYW.push('хрипоты,', 'тарелки!');
  const LAMP = [600, 740], PL = { x: 470, y: 1580, s: 1.0 };
  const handsIn = t => sm(clamp((t - EV.hk_sosedi) / 0.45)), freeze = t => t > EV.hk_dno;
  function wall(t) {                                                     // кафель с росписью, полки, расписные тарелки, связки, часы, окно со снегом
    vgrad(-600, 2400, ['#3a2418', '#6a3a24', '#8a5030']); push(540, 700, 1.35); ctx.translate(-540, -500);
    for (let r = 0; r < 12; r++) for (let c = 0; c < 14; c++) { const x = -120 + c * 92 + (r % 2) * 0, y = 260 + r * 92; rect(x, y, 88, 88, { wash: (r + c) % 2 ? '#e8d8b8' : '#f0e2c4', washA: 0.95, w: 1, col: '#8a6a4a' });
      if ((r * 3 + c) % 5 === 0) { ell(x + 44, y + 44, 18, 18, { line: true, w: 2, col: '#2a5aa8', a: 0.6 }); for (let q = 0; q < 4; q++) ell(x + 44 + Math.cos(q * 1.57) * 24, y + 44 + Math.sin(q * 1.57) * 24, 6, 6, { wash: '#2a5aa8', washA: 0.5, line: false }); } }
    lightPool(LAMP[0], 700, 700, 520, 'rgba(255,200,120,1)', 0.32); moodDark(LAMP[0], 760, 380, 1100, '#1a0a14', 0.45);
    for (const [sy, n] of [[420, 7], [640, 6]]) { rect(-80, sy, 560, 18, { wash: '#7a4a24', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < n; i++) { const x = -40 + i * 74;
      if (i % 3 === 0) { push(x + 20, sy, 1); ell(0, -50, 34, 34, { wash: '#f4ecd8', washA: 1, w: 1.6, col: '#3a2a1a' }); ell(0, -50, 20, 20, { line: true, w: 3, col: '#c8202a' }); for (let q = 0; q < 8; q++) ell(Math.cos(q * 0.785) * 27, -50 + Math.sin(q * 0.785) * 27, 3, 3, { wash: '#2a5aa8', washA: 1, line: false }); pop(); }
      else jarS(x + 20, sy, 0.42, t, { kind: i % 3 === 1 ? 'pickle' : 'olive', key: 24100 + i + sy }); } }
    push(380, 640, 1); rect(0, -110, 70, 110, { wash: '#c8743a', washA: 1, w: 2, col: '#3a1408' }); txt('СОЛЬ', 35, -50, 16, { font: 'Osw', col: '#f4ecd8' }); pop();
    for (let i = 0; i < 9; i++) ell(-60 + i * 22, 300 + (i % 2) * 14, 12, 16, { wash: '#f8f2e4', washA: 1, w: 1.4, col: '#6a5a4a' }); pencil([[-80, 290], [130, 300]], { w: 3, col: '#c8a060', pass2: false });   // связка чеснока
    for (let i = 0; i < 7; i++) { push(560 + i * 18, 270 + i * 26, 1, 0.3); blob([[0, 0], [-8, 20], [0, 50], [8, 20]], { wash: '#c8202a', washA: 1, w: 1.2, col: '#4a0408' }); pop(); } pencil([[560, 250], [690, 440]], { w: 2, col: '#c8a060', pass2: false });   // связка перца
    push(940, 640, 1); const wn = rect(-150, -320, 300, 380, { wash: '#1a3a6a', washA: 1, w: 10, col: '#e8dcc0' }); vgrad(-320, 60, ['#0a1a3a', '#2a4a7a']);
    ctx.save(); ctx.clip(wn.path); vgrad(-320, 60, ['#0a1a3a', '#2a4a7a', '#4a6a9a']); for (let i = 0; i < 6; i++) rect(-150 + i * 60, -80 + (i % 3) * 30, 50, 140, { wash: '#1a2a4a', washA: 1, line: false }); windows(-150, -60, 300, 100, 6, 3, 24120, 0.5, '#ffd98a', '#9fd8ff', 0.8); motes(30, [-150, -320, 150, 60], '#ffffff', t, 24121, { sp: 40, sz: 3, a: 0.8 }); ctx.restore();
    pencil([[0, -320], [0, 60]], { w: 8, col: '#e8dcc0', pass2: false }); pencil([[-150, -130], [150, -130]], { w: 8, col: '#e8dcc0', pass2: false }); for (let i = 0; i < 5; i++) ell(-120 + i * 60, 50, 22, 8, { wash: '#f4f4f8', washA: 0.9, line: false }); pop();
    lightPool(940, 520, 260, 300, 'rgba(120,170,255,1)', 0.18);
    push(780, 380, 1); ell(0, 0, 46, 46, { wash: '#f4ecd8', washA: 1, w: 3, col: '#3a2410' }); pencil([[0, 0], [0, -30]], { w: 3, col: '#2a1a0a', pass2: false }); pencil([[0, 0], [22 * Math.cos(t * 0.5), 22 * Math.sin(t * 0.5)]], { w: 2, col: '#c8202a', pass2: false }); pop();
    for (let r = 0; r < 4; r++) for (let c = 0; c < 14; c++) rect(-120 + c * 92, 1364 + r * 92, 88, 88, { wash: (r + c) % 2 ? '#e8d8b8' : '#f0e2c4', washA: 0.95, w: 1, col: '#8a6a4a' });
    pop();
  }
  function stove(t) {                                                    // плита сзади справа: кастрюля с борщом, пар, половник, прихватка
    push(780, 1160, 1); rect(-170, -40, 340, 200, { wash: '#e8e2d6', washA: 1, w: 2.4, col: '#3a3028' }); for (const dx of [-90, 90]) ell(dx, -40, 60, 12, { wash: '#2a2420', washA: 1, w: 1.4 });
    const pt = shape([[-150, -40], [-150, -190], [-10, -190], [-10, -40]], { wash: '#c8202a', washA: 1, w: 2.4, col: '#3a0408' }); shadeG(pt.path, -10, 0, -110, 0, '#6a0410', 0.5); for (let i = 0; i < 6; i++) ell(-130 + i * 22, -110 + (i % 2) * 20, 6, 6, { wash: '#f4ecd8', washA: 1, line: false });
    ell(-80, -190, 70, 14, { wash: '#8a0a1a', washA: 1, w: 2, col: '#3a0408' }); pencil([[-60, -190], [-20, -290]], { w: 6, col: '#a8aeb4', pass2: false });
    steamWisps(-80, -200, 1.2, t, 4, 24130, 0.45); for (let i = 0; i < 4; i++) { const f = flick(t, i); blob([[-110 + i * 20, -40], [-104 + i * 20, -54 - 10 * f], [-96 + i * 20, -40]], { wash: '#4a8aff', washA: 0.9, line: false }); }
    rect(40, -120, 100, 80, { wash: '#d8a040', washA: 1, w: 2, col: '#4a2a08' }); pop();
  }
  function crowd(t) {                                                    // соседи-спорщики у стола: каждый тянет к себе; пузыри «НАШ!»
    const ar = t > EV.hk_sosedi && !freeze(t), ang = ar ? 'angry' : t > EV.hk_dno ? 'shock' : 'calm';
    human(200, 1440, 1.3, t, { body: '#f4ecd8', trim: '#c8202a', legs: '#3a3a5a', hat: 'scarf', hatCol: '#c8202a', face: ang, armL: 'hold', armR: ar ? 'point' : 'down', seed: 24140, look: 0.6, skin: '#f0c8a8' });
    human(400, 1430, 1.2, t, { body: '#2a2a2a', trim: '#e8c040', legs: '#2a2a2a', beard: 'long', hair: '#3a2a1a', face: ang, armL: ar ? 'up' : 'down', armR: 'hold', seed: 24141, look: 0.3 });
    human(860, 1430, 1.25, t, { body: '#e86a9a', legs: '#3a3a5a', hair: '#c88a3a', face: ang, armL: ar ? 'point' : 'down', armR: 'hips', seed: 24142, flip: -1, look: -0.5, skin: '#f4d0b0' });
    human(1040, 1450, 1.3, t, { body: '#3a6a8a', legs: '#2a2a3a', hair: '#1a1a1a', face: ang, armL: 'hold', armR: ar ? 'up' : 'down', seed: 24143, flip: -1, look: -0.4, prop: 'phone' });
    if (t > EV.hk_sosedi && t < EV.hk_bite + 0.2) { const n = t > EV.hk_hrip ? 4 : 2; const P = [[210, 960, -0.1], [880, 940, 0.08], [400, 900, 0.05], [1040, 990, -0.06]];
      for (let i = 0; i < n; i++) { const k = popK(t, (i < 2 ? EV.hk_sosedi : EV.hk_hrip) + i * 0.08, 0.3), sh = t > EV.hk_hrip && !freeze(t) ? Math.sin(t * 30 + i) * 4 : 0; push(P[i][0] + sh, P[i][1], k * (freeze(t) ? 0.85 : 1), P[i][2]);
        blob([[-80, -40], [80, -44], [90, 30], [-10, 34], [-30, 64], [-40, 32], [-86, 30]], { wash: '#fff8ec', washA: 1, w: 3, col: '#2b2622' }); txt('НАШ!', 0, 4, 46, { font: 'Osw', col: '#c8202a' }); pop(); } }
  }
  function table(t) {                                                    // стол: вышитая скатерть-рушник, хлебница с пампушками, сметана, чеснок, соль, перец, рюмка, ложки
    const tb = rect(-500, 1440, 2100, 600, { wash: '#f4ecdc', washA: 1, w: 3, col: '#3a2a1a', key: 24150 }); shadeG(tb.path, 0, 1440, 0, 1900, '#8a6a4a', 0.4);
    for (let i = 0; i < 26; i++) xst(-460 + i * 80, 1462, i); pencil([[-500, 1440], [1600, 1440]], { w: 4, col: '#c8202a', pass2: false });
    lightPool(PL.x, PL.y, 560, 220, 'rgba(255,214,150,1)', 0.38);
    push(130, 1560, 0.9); const bk = blob([[-110, 0], [-120, -60], [120, -60], [110, 0]], { wash: '#c89a5a', washA: 1, w: 2.4, col: '#4a2a08', key: 24151 }); for (let i = 0; i < 6; i++) pencil([[-110 + i * 40, -56], [-100 + i * 40, -4]], { w: 2, col: '#8a5a2a', pass2: false }); for (let i = 0; i < 4; i++) pampushka(-70 + i * 46, -70 - (i % 2) * 18, 0.7); pop();
    smetanaPot(880, 1560, 0.75, { key: 24152, spoon: 1 }); for (let i = 0; i < 3; i++) ell(960 + i * 24, 1610 - (i % 2) * 6, 12, 15, { wash: '#f8f2e4', washA: 1, w: 1.4, col: '#6a5a4a' });
    push(300, 1640, 0.8); rect(-14, -60, 28, 60, { wash: '#f4f4f8', washA: 1, w: 1.6 }); rect(20, -60, 28, 60, { wash: '#2a2a2a', washA: 1, w: 1.6 }); pop();
    castShadow(130, 1560, 220, 80, 0.5, 0.25); castShadow(880, 1560, 120, 80, 0.5, 0.25);
  }
  function xst(x, y, i) { for (let q = 0; q < 3; q++) { const xx = x + q * 18, yy = y + Math.abs(q - 1) * 10; pencil([[xx - 6, yy - 6], [xx + 6, yy + 6]], { w: 2, col: i % 2 ? '#c8202a' : '#1a1418', pass2: false }); pencil([[xx + 6, yy - 6], [xx - 6, yy + 6]], { w: 2, col: i % 2 ? '#c8202a' : '#1a1418', pass2: false }); } }
  function hero(t) {                                                     // тарелка-герой + ложки соседей (руки с краёв кадра)
    const sw = clamp((t - EV.hk_swirl) / 0.9); borschHero(PL.x, PL.y, PL.s, t, { swirl: sw, key: 24160 });
    if (t > EV.hk_dno - 0.05 && t < EV.hk_bite) { const k = popK(t, EV.hk_dno, 0.3); ell(PL.x + 30, PL.y - 6, 60 * k, 26 * k, { line: true, w: 4, col: '#fff2c0', a: 0.8 }); ell(PL.x + 30, PL.y - 6, 100 * k, 44 * k, { line: true, w: 2, col: '#fff2c0', a: 0.5 }); }
    castShadow(PL.x, PL.y + 80, 600, 60, 0.4, 0.2);
  }
  function arms(t) {                                                     // руки соседей с ложками въезжают с краёв (рукава: вышитый, клетчатый, вязаный, чёрный жилет)
    const k = handsIn(t); if (k <= 0) return; const tug = t > EV.hk_hrip && !freeze(t) ? Math.sin(t * 18) * 14 : 0;
    const A = [[-260, 1420, 0.35, '#f4ecd8', '#c8202a', 1], [-240, 1720, -0.1, '#c84a3a', '#f4e8d8', 1], [1340, 1440, -0.3, '#4a7a5a', '#e8e0c8', -1], [1320, 1760, 0.15, '#2a2a2a', '#e8c040', -1]];
    A.forEach(([x0, y0, rot, sleeve, trim, sd], i) => { const x = lerp(x0, x0 + sd * 560, k) + (i % 2 ? tug : -tug) * sd; push(x, y0, 1, rot);
      const sl = shape([[-sd * 400, -46], [0, -40], [0, 40], [-sd * 400, 46]], { wash: sleeve, washA: 1, w: 2.6, col: '#2a1a0a' }); shadeG(sl.path, 0, 40, 0, -40, '#000000', 0.25);
      if (i === 0) for (let q = 0; q < 8; q++) xst(-sd * (360 - q * 44), -14, q); else if (i === 1) for (let q = 0; q < 6; q++) { pencil([[-sd * (380 - q * 60), -44], [-sd * (380 - q * 60), 44]], { w: 6, col: trim, a: 0.6, pass2: false }); }
      else for (let q = 0; q < 5; q++) pencil([[-sd * 380, -30 + q * 15], [0, -30 + q * 15]], { w: 2, col: trim, a: 0.4, pass2: false });
      pencil([[0, -40], [0, 40]], { w: 10, col: trim, pass2: false }); const hd = ell(sd * 40, 0, 46, 38, { wash: '#f0c8a8', washA: 1, w: 2.4, col: '#5a3420' }); for (let f = 0; f < 3; f++) pencil([[sd * 54, -20 + f * 16], [sd * 84, -18 + f * 16]], { w: 3, col: '#5a3420', pass2: false });
      pencil([[sd * 60, 0], [sd * 260, -10]], { w: 9, col: '#c8ccd0', pass2: false }); const bw = ell(sd * 300, -12, 46, 30, { wash: '#c8ccd0', washA: 1, w: 2.4, col: '#3a3e44' }); metalG(bw.path, sd * 290, -20, 40, '#ffffff', '#b8bcc4', '#5a5e68', 0.6); pop(); });
  }
  function front(t) {                                                    // передний план: пар над тарелкой, край абажура сверху, бахрома, искры-пылинки в свете
    for (let i = 0; i < 4; i++) { const ph = (t * 0.25 + i / 4) % 1; blob([[300 + i * 120 - 80, 1300 - ph * 600], [300 + i * 120, 1240 - ph * 640], [300 + i * 120 + 90, 1290 - ph * 600], [300 + i * 120 + 20, 1340 - ph * 580]], { wash: '#ffffff', washA: 0.22 * Math.sin(ph * 3.14), line: false }); }
  }
  function lamp(t) {                                                     // абажур с бахромой над столом — главный свет
    const sway = Math.sin(t * 1.4) * 0.03 + (t > EV.hk_chei && t < EV.hk_chei + 1 ? Math.sin((t - EV.hk_chei) * 8) * 0.05 * (1 - (t - EV.hk_chei)) : 0);
    push(LAMP[0], LAMP[1] - 270, 1, sway); pencil([[0, -400], [0, 200]], { w: 4, col: '#2a1a0a', pass2: false }); const sh = shape([[-220, 260], [-120, 200], [120, 200], [220, 260]], { wash: '#c8202a', washA: 1, w: 3, col: '#3a0408', key: 24170 }); shadeG(sh.path, 0, 200, 0, 260, '#ff6a4a', 0.4);
    for (let i = 0; i < 16; i++) pencil([[-210 + i * 28, 262], [-212 + i * 28, 290 + (i % 2) * 6]], { w: 3, col: '#e8c040', pass2: false }); ell(0, 270, 60, 16, { wash: '#fff2c0', washA: 1, line: false }); glow(0, 280, 130, 'rgba(255,214,140,1)', 0.35); pop();
    shaft(LAMP[0], LAMP[1] + 20, 380, 1200, 0, 'rgba(255,214,150,1)', 0.12);
  }
  WORLD.hook = (t, u, cat) => {
    lay(9, () => { wall(t); });
    lay(3, () => { stove(t); haze('#ffd8b0', 0.05); });
    lay(1.6, () => { crowd(t); });
    lay(1, () => { cat(); table(t); hero(t); arms(t); lamp(t); });
    lay(0.75, () => { front(t); motes(18, [200, 500, 900, 1300], '#ffe8c0', t, 24180, { sp: 8, sz: 3, a: 0.45, wob: 8 }); moodDark(540, 1200, 500, 1400, '#1a0610', 0.35); });
  };
  DIR.hook = {
    outfit: 'homeB', light: { side: -1, rim: '#ffc890' }, grade: ['#ff9060', 0.06],
    act: () => [[0, 'suspicious'], [EV.hk_sosedi, 'sideeye'], [EV.hk_hrip, 'annoyed'], [EV.hk_dno, 'smug'], [EV.h2, 'grin'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { const bite = t > EV.hk_bite, dip = t > EV.hk_dno && t < EV.hk_bite - 0.2;
      Object.assign(b, { x: 700, y: 1600, s: 1.15, flip: true, look: t < EV.hk_sosedi ? [0, 0.1] : t < EV.hk_dno ? [-0.6, 0.1] : dip ? [-0.4, 0.6] : [0, 0],
        hand: dip ? [190, -150] : bite ? [70, -300] : [150, -230], handF: t > EV.hk_sosedi && t < EV.hk_dno ? [-170, -300] : [-120, -200], point: t > EV.hk_sosedi && t < EV.hk_dno, prop: 'spoonBorschP', propAng: dip ? 2.2 : bite ? 0.3 : 0.9, tailUp: bite });
      if (bite && t < EV.hk_bite + 0.12) b.squash = (b.squash || 0) + 0.1; return b; },
    cam: () => [[0, 540, 1420, 0.5], [EV.hk_sosedi, 590, 1290, 0.3], [EV.hk_hrip, 600, 1280, 0.29], [EV.hk_dno, 580, 1320, 0.33], [EV.h2, 610, 1280, 0.31], [EV.hk_bite, 610, 1290, 0.32], [S1.hook, 540, 1420, 0.42]]
  };
})();
