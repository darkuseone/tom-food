/* 024 — `answer` ★ (разгадка ≈ 77 %): «Так чей? Красный свекольный — по большинству источников, с украинских земель. /
   В 2022-м ЮНЕСКО внесла культуру украинского борща в список наследия. / А кислый «борщ» — у всех свой. Купец был прав!»
   Солнечный вишнёвый сад у белой хаты, за плетнём — поле подсолнухов до горизонта; длинный праздничный стол под вишней: вышитая скатерть, в центре —
   глиняная миска красного борща со сметаной, пампушки с чесноком, сало, зелень. Вокруг стола — те же соседи из хука, теперь мирно, у каждого — свой «борщ»:
   польский барщ с ушками, литовский розовый холодник, молдавская зама на борше. Том в вышиванке + фартук.
   По словам: «Так чей?» — пауза, барабанная дробь, все замирают; «свекольный» — Том ставит миску в центр, сметана плюхается; «земель.» — подсолнухи
   поворачиваются к столу, ★-плашка «ЧЕЙ БОРЩ?»; «ЮНЕСКО» — плашка «ЮНЕСКО · 2022» (культура украинского борща, список нематериального наследия);
   «у всех свой.» — соседи поднимают свои миски, пузыри «СВОЙ!» (колбэк к «НАШ!» из хука); «Купец был прав!» — на стол ложится дневник 1584 («каждый варит свой»).
   Главный свет — солнце сквозь вишню слева сверху; второй — тёплый отсвет скатерти. Переход В сцену — сметанная клякса падает в центр и растекается. */
(() => {
  EV.an_q = LS('s10');
  EV.an_beet = wtw('s10', 'свекольный');
  EV.an_land = wtw('s10', 'земель.');
  EV.an_unesco = wtw('s11', 'ЮНЕСКО');
  EV.an_own = wtw('s12', 'свой.');
  EV.an_merch = wtw('s12', 'Купец');
  SHAKES.push([EV.an_beet + 0.05, 0.12, 5]);
  KEYW.push('земель.', 'свой.');
  const SUN = [-100, 200];
  function sky(t) {                                                      // летнее небо, поле подсолнухов, дальние тополя и хаты
    vgrad(-800, 1300, ['#5aa0e8', '#9ac8f0', '#f4ecc0']);
    for (let i = 0; i < 5; i++) { const x = ((i * 420 + t * 8) % 2300) - 600, y = -200 + (i % 3) * 120; blob([[x, y], [x + 160, y - 50], [x + 360, y - 10], [x + 440, y + 20], [x + 220, y + 34], [x + 40, y + 24]], { wash: '#ffffff', washA: 0.85, line: false }); }
    sil([[-800, 1000], [1900, 960], [1900, 1300], [-800, 1300]], '#8aa860', 0.95);
    const turn = clamp((t - EV.an_land) / 0.8);
    for (let r = 0; r < 4; r++) for (let i = 0; i < 26; i++) { const x = -700 + i * 100 + (r % 2) * 50, y = 960 + r * 40, s = 0.5 + r * 0.25; pencil([[x, y], [x, y - 80 * s]], { w: 4 * s, col: '#4a7a2a', pass2: false });
      push(x, y - 80 * s, s, lerp(0.3, -0.2, turn)); for (let p = 0; p < 12; p++) { const a = p / 12 * 6.283; ell(Math.cos(a) * 26, Math.sin(a) * 26, 12, 6, { wash: '#f4c020', washA: 1, line: false, rot: a }); } ell(0, 0, 18, 18, { wash: '#5a3a1a', washA: 1, line: false }); pop(); }
    for (let i = 0; i < 6; i++) { const x = 900 + i * 120; ell(x, 900, 30, 120, { wash: '#4a7a4a', washA: 0.9, line: false }); }
    haze('#f8f0d0', 0.08);
  }
  function garden(t) {                                                   // хата, плетень с горшками, вишня, соседи у стола
    khata(820, 1260, 1.25, t, { key: 24900, sun: '#ffe8b0' });
    for (let i = 0; i < 20; i++) { const x = -300 + i * 34; pencil([[x, 1320], [x + 3, 1200]], { w: 6, col: '#7a5a3a', pass2: false }); } for (let k = 0; k < 3; k++) pencil(spline([[-310, 1230 + k * 22], [0, 1240 + k * 22], [380, 1226 + k * 22]], false, 6), { w: 5, col: '#9a7a4a', pass2: false });
    for (let i = 0; i < 4; i++) { pencil([[-280 + i * 180, 1210], [-278 + i * 180, 1186]], { w: 3, col: '#6a4a2a', pass2: false }); ell(-278 + i * 180, 1176, 18, 14, { wash: i % 2 ? '#b8743a' : '#3a5a8a', washA: 1, w: 1.4, col: '#3a1a08' }); }
    const own = t > EV.an_own, freeze = t > EV.an_q && t < EV.an_beet;
    const P = [[60, 1360, 1.15, '#f4ecd8', '#c8202a', 'scarf', '#c8202a', 0.5, 'barszcz'], [300, 1360, 1.1, '#2a2a2a', '#e8c040', null, null, 0.3, 'zeama'], [1000, 1370, 1.1, '#e86a9a', null, null, null, -0.5, 'pink'], [1180, 1380, 1.15, '#3a6a8a', null, 'cap', '#2a2a3a', -0.4, 'borsch']];
    P.forEach(([x, y, s, body, trim, hat, hatCol, look, bowl], i) => { human(x, y, s, t, { body, trim, legs: '#3a3a5a', hat, hatCol, beard: i === 1 ? 'long' : undefined, hair: ['#e8e8e8', '#3a2a1a', '#c88a3a', '#1a1a1a'][i], face: freeze ? 'shock' : own ? 'grin' : 'smile', armL: own ? 'up' : 'hold', armR: 'hold', seed: 24910 + i, flip: x > 640 ? -1 : 1, look });
      if (own) { const k = popK(t, EV.an_own + i * 0.08, 0.35), bx = x + (x > 640 ? 50 : -50), by = y - 330 * s - 30 * k; push(bx, by, 0.3 * k); if (bowl === 'barszcz') barszczCup(0, 0, 1, t, { steam: false }); else if (bowl === 'pink') pinkSoup(0, 0, 1, t); else if (bowl === 'zeama') zeama(0, 0, 1, t, { steam: false }); else borschBowl(0, 0, 1, t, { steam: false }); pop();
        if (t < EV.an_merch + 0.4) { push(x, y - 470 * s, popK(t, EV.an_own + 0.1 + i * 0.08, 0.3), (i % 2 ? 0.08 : -0.08)); blob([[-70, -36], [70, -40], [80, 26], [-10, 30], [-26, 56], [-34, 28], [-76, 26]], { wash: '#fff8ec', washA: 1, w: 2.6, col: '#2b2622' }); txt('СВОЙ!', 0, 6, 36, { font: 'Osw', col: '#2a7a3a' }); pop(); } } });
    for (const [x, y] of [[60, 1360], [300, 1360], [1000, 1370], [1180, 1380]]) castShadow(x, y, 110, 200, 0.8, 0.2);
  }
  function cherry(t) {                                                   // вишня над столом: ствол, ветви, листва, ягоды, пятна света
    push(-260, 1440, 1); pencil(spline([[0, 0], [20, -300], [-10, -600], [60, -900]], false, 6), { w: 40, col: '#5a3a2a', pass2: false }); for (const [a, l] of [[-0.6, 400], [-0.2, 500], [0.3, 600]]) pencil([[10, -600], [10 + Math.sin(a + 1.2) * l, -600 - Math.cos(a + 1.2) * l * 0.4 - 100]], { w: 14, col: '#5a3a2a', pass2: false }); pop();
    const r = rng(24920); for (let i = 0; i < 60; i++) { const x = -500 + r() * 1300, y = 120 + r() * 420, s = 0.7 + r() * 0.6; push(x, y + Math.sin(t * 1.2 + i) * 4, s, r() * 6); blob([[0, 0], [24, -14], [50, 0], [24, 14]], { wash: i % 3 ? '#4a8a3a' : '#6aa84a', washA: 1, w: 1.2, col: '#1a4a1a' }); pop(); }
    for (let i = 0; i < 20; i++) { const x = -400 + r() * 1100, y = 300 + r() * 280; pencil([[x, y - 30], [x + 4, y]], { w: 2, col: '#3a5a1a', pass2: false }); ell(x + 4, y + 8, 10, 10, { wash: '#b0102a', washA: 1, w: 1.2, col: '#4a0010' }); ell(x + 1, y + 4, 3, 2, { wash: '#ffffff', washA: 0.7, line: false }); }
    for (let i = 0; i < 7; i++) lightPool(-100 + i * 200, 1470 + (i % 2) * 30, 80, 24, 'rgba(255,250,210,1)', 0.25);
  }
  function table(t) {                                                    // праздничный стол: вышитая скатерть, миска борща (герой), пампушки, сметана, сало, зелень, чеснок, рюмки, дневник 1584
    const tb = rect(-400, 1440, 2000, 600, { wash: '#f8f4ec', washA: 1, w: 3, col: '#3a2a1a', key: 24930 }); shadeG(tb.path, 0, 1440, 0, 1900, '#b8a890', 0.4);
    for (let i = 0; i < 24; i++) { const x = -380 + i * 84; for (let q = 0; q < 3; q++) { const xx = x + q * 18, yy = 1466 + Math.abs(q - 1) * 10; pencil([[xx - 7, yy - 7], [xx + 7, yy + 7]], { w: 2.4, col: i % 2 ? '#c8202a' : '#1a1418', pass2: false }); pencil([[xx + 7, yy - 7], [xx - 7, yy + 7]], { w: 2.4, col: i % 2 ? '#c8202a' : '#1a1418', pass2: false }); } }
    lightPool(560, 1540, 620, 150, 'rgba(255,240,190,1)', 0.35);
    const put = clamp((t - EV.an_beet + 0.3) / 0.5); push(660, lerp(1300, 1600, put), 1.0); const bw = shape(spline([[-170, 0], [-150, 70], [0, 96], [150, 70], [170, 0]], false, 8), { wash: '#b8683a', washA: 1, w: 2.6, col: '#3a1408', key: 24931 }); shadeG(bw.path, 170, 0, -40, 0, '#6a3414', 0.5); pencil(spline([[-150, 34], [0, 62], [150, 34]], false, 6), { w: 5, col: '#f4d8a8', a: 0.7, pass2: false });
    const so = ell(0, 0, 170, 40, { wash: '#b0142a', washA: 1, w: 2.4, col: '#3a0408' }); shadeG(so.path, -120, -30, 140, 30, '#5a0614', 0.45); const rr = rng(24932); for (let i = 0; i < 14; i++) ell((rr() - 0.5) * 280, (rr() - 0.5) * 56, 9, 4, { wash: '#f6b84a', washA: 0.6, line: false }); for (let i = 0; i < 8; i++) { push((rr() - 0.5) * 240, (rr() - 0.5) * 50, 1, rr() * 3); pencil([[-12, 0], [12, 0]], { w: 4, col: '#e8f0c8', pass2: false }); pop(); }
    if (put > 0.9) { const sk = popK(t, EV.an_beet + 0.3, 0.35); push(20, -8, sk); smetanaDollop(0, 0, 1.1, 24933); pop(); for (let i = 0; i < 5; i++) { push(-60 + i * 30, -14 + (i % 2) * 10, 1, i); pencil([[-12, 0], [12, 0]], { w: 2, col: '#3a8a2a', pass2: false }); for (let q = -2; q <= 2; q++) pencil([[q * 5, 0], [q * 5 + 4, 8]], { w: 1.4, col: '#5aaa3a', pass2: false }); pop(); } }
    ell(-70, -12, 40, 6, { wash: '#ffffff', washA: 0.35, line: false }); steamWisps(0, -30, 1.1, t, 5, 24934, 0.45); pop();
    push(170, 1640, 0.9); ell(0, 10, 120, 26, { wash: '#f4f0e4', washA: 1, w: 2, col: '#4a4038' }); for (let i = 0; i < 5; i++) pampushka(-70 + i * 36, -14 - (i % 2) * 18, 0.65); pop();
    push(960, 1650, 0.85); ell(0, 0, 100, 22, { wash: '#f4f0e4', washA: 1, w: 2, col: '#4a4038' }); for (let i = 0; i < 4; i++) { push(-50 + i * 34, -10, 1, 0.3); rect(-14, -30, 28, 40, { wash: '#fbf4ea', washA: 1, w: 1.4, col: '#8a7a6a' }); rect(-14, -36, 28, 8, { wash: '#c86a5a', washA: 1, line: false }); pop(); } pop();
    for (let i = 0; i < 3; i++) ell(1020 + i * 26, 1610 - (i % 2) * 8, 13, 16, { wash: '#f8f2e4', washA: 1, w: 1.4, col: '#6a5a4a' }); for (let i = 0; i < 6; i++) pencil([[740 + i * 10, 1610], [736 + i * 12, 1520]], { w: 4, col: '#3a8a2a', pass2: false });
    push(330, 1700, 0.75); rect(-14, -70, 28, 70, { wash: '#e8f0f8', washA: 0.6, w: 1.6, col: '#4a5a6a' }); pop(); push(700, 1720, 0.75); rect(-14, -70, 28, 70, { wash: '#e8f0f8', washA: 0.6, w: 1.6, col: '#4a5a6a' }); pop();
    if (t > EV.an_merch - 0.1) { const k = popK(t, EV.an_merch, 0.4); push(lerp(1300, 1000, k), 1740, 0.75); diary(0, 0, 1, t, { write: 1, rot: -0.05, key: 24935 }); pop(); if (t < S1.answer) bubbleTag('«каждый варит свой»', 980, 1560, t, EV.an_merch + 0.2, '#6a2a1a', 28, -0.05); }
    castShadow(660, 1600, 280, 90, 0.8, 0.25); castShadow(170, 1640, 200, 70, 0.8, 0.22);
  }
  function front(t) {                                                    // передний план: подсолнух справа, свисающая ветка вишни слева, бабочки, пух
    push(1160, 1920, 1.3, -0.1 + Math.sin(t) * 0.02); pencil([[0, 0], [0, -700]], { w: 12, col: '#4a7a2a', pass2: false }); for (let i = 0; i < 3; i++) { push(0, -200 - i * 160, 1, i % 2 ? 0.7 : -0.7); blob([[0, 0], [40, -40], [120, -20], [60, 20]], { wash: '#5a8a3a', washA: 1, w: 1.6, col: '#1a4a1a' }); pop(); }
    push(0, -720, 1, -0.3); for (let p = 0; p < 16; p++) { const a = p / 16 * 6.283; ell(Math.cos(a) * 70, Math.sin(a) * 70, 34, 14, { wash: '#f4c020', washA: 1, w: 1, col: '#8a5a08', rot: a }); } const c = ell(0, 0, 50, 50, { wash: '#5a3a1a', washA: 1, w: 1.6, col: '#2a1a08' }); for (let i = 0; i < 20; i++) ell(Math.cos(i * 2.4) * (i * 2.2), Math.sin(i * 2.4) * (i * 2.2), 3, 3, { wash: '#8a6a3a', washA: 1, line: false }); pop(); pop();
    push(-60, 200, 1.2, 0.4); pencil([[0, 0], [260, 140]], { w: 8, col: '#5a3a2a', pass2: false }); for (let i = 0; i < 6; i++) { push(40 + i * 40, 20 + i * 22, 1, i); blob([[0, 0], [30, -16], [60, 0], [30, 16]], { wash: '#4a8a3a', washA: 1, w: 1.2, col: '#1a4a1a' }); pop(); ell(60 + i * 36, 60 + i * 22, 11, 11, { wash: '#b0102a', washA: 1, w: 1.2, col: '#4a0010' }); } pop();
    for (let i = 0; i < 2; i++) { const x = 300 + Math.sin(t * 0.7 + i * 3) * 300 + i * 300, y = 900 + Math.cos(t * 0.9 + i) * 100, f = Math.abs(Math.sin(t * 12 + i)); for (const sd of [-1, 1]) blob([[x, y], [x + sd * 22 * f, y - 18], [x + sd * 26 * f, y + 4]], { wash: i ? '#f4f0e8' : '#f4c040', washA: 1, w: 1, col: '#3a2a1a' }); }
  }
  WORLD.answer = (t, u, cat) => {
    lay(26, () => { sky(t); });
    lay(4, () => { garden(t); });
    lay(2.4, () => { cherry(t); shaft(SUN[0] + 200, SUN[1], 300, 1600, -0.5, 'rgba(255,250,210,1)', 0.12); });
    lay(1, () => { cat(); table(t); });
    lay(0.7, () => { front(t); motes(16, [100, 700, 1100, 1600], '#fff8e0', t, 24950, { sp: 5, sz: 3, a: 0.5, wob: 10 }); moodDark(560, 1100, 560, 1500, '#1a1408', 0.3); });
    if (t > EV.an_q && t < EV.an_beet) screenFill('#000000', 0.12 * Math.sin(clamp((t - EV.an_q) / (EV.an_beet - EV.an_q)) * 3.14), 'multiply');
  };
  DIR.answer = {
    outfit: 'vyshA', light: { side: -1, rim: '#fff0c0' }, grade: ['#ffd070', 0.05],
    act: () => [[S0.answer, 'suspicious'], [EV.an_beet, 'talk'], [EV.an_land, 'proud'], [EV.an_unesco, 'smug'], [EV.an_own, 'grin'], [EV.an_merch, 'wink'], [EV.an_merch + 0.6, 'laugh']],
    pose: (t, u, b) => { const put = t > EV.an_beet - 0.4 && t < EV.an_beet + 0.3, own = t > EV.an_own - 0.1 && t < EV.an_merch;
      return Object.assign(b, { x: 640, y: 1600, s: 1.15, flip: false, look: t < EV.an_beet ? [-0.3, -0.2] : put ? [-0.3, 0.7] : own ? [0, -0.2] : [0, 0],
        hand: put ? [-60, -160] : own ? [230, -330] : [170, -220], handF: own ? [-230, -330] : put ? [-160, -160] : [-150, -210], tailUp: t > EV.an_own, nod: t > EV.an_land && t < EV.an_land + 0.4 ? Math.sin(t * 18) * 0.4 : 0 }); },
    hud: t => { infoPlate(t, EV.an_land, EV.an_unesco - 0.15, { kind: 'list', title: '★ ЧЕЙ БОРЩ?', rows: [['Красный свекольный', 'украинские земли', '#b0142a'], ['по версии', 'большинства источников', '#8a7a6a']] });
      infoPlate(t, EV.an_unesco, EV.an_own - 0.1, { kind: 'num', title: 'ЮНЕСКО · 2022', big: 'НАСЛЕДИЕ', sub: 'культура украинского борща', icon: 'smetana' });
      infoPlate(t, EV.an_own, S1.answer + 0.3, { kind: 'list', title: 'А «БОРЩ» — У ВСЕХ СВОЙ', rows: [['Польша', 'прозрачный, ушки', '#c0102a'], ['Литва', 'розовый, кефир', '#f28ab8'], ['Молдова · Румыния', 'борш = закваска', '#e8b850'], ['Украина', 'красный свекольный', '#b0142a']] }); },
    cam: () => [[S0.answer, 620, 1220, 0.25], [EV.an_q, 630, 1260, 0.3], [EV.an_beet, 600, 1300, 0.3], [EV.an_land, 640, 1180, 0.22], [EV.an_unesco, 640, 1240, 0.27], [EV.an_own, 640, 1200, 0.2], [EV.an_merch, 760, 1310, 0.26], [S1.answer, 700, 1300, 0.28]]
  };
  TRANS_IN.answer = { a: 0.12, b: 0.55, runA: 1, fx(k, t, A, B) {      // сметанная клякса падает в центр, растекается белым и раскрывает сад
    const e = sm(k); drawBuf(A, 1, 540, 960);
    scr(() => { const R = e * 1500, pts = []; for (let q = 0; q < 14; q++) { const a = q / 14 * 6.283, rr = R * (0.85 + 0.25 * Math.sin(q * 2.3 + 1)); pts.push([540 + Math.cos(a) * rr, 960 + Math.sin(a) * rr]); }
      const sp = blob(pts, { wash: '#fbf6ea', washA: 1, w: 6, col: '#d8ccb4' }); if (e > 0.25) inPath(sp.path, () => drawBuf(B, 1 + (1 - e) * 0.3, 540, 960, clamp((e - 0.25) / 0.35)));
      if (e < 0.4) { const d = 1 - e / 0.4; ell(540, 960 - d * 700, 90, 110, { wash: '#fbf6ea', washA: 1, w: 3, col: '#d8ccb4' }); } });
  } };
})();
