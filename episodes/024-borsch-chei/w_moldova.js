/* 024 — `moldova` (поворот перед разгадкой): «А в Молдове и Румынии борш — квас из отрубей. Свёкла не нужна — лишь бы кисло!»
   Осенний молдавский двор: виноградная беседка с гроздьями (солнце сквозь листья), белый дом с голубыми рамами и резными столбами крыльца, колодец-журавль,
   сохнущие початки кукурузы и связки перца, глиняные кувшины, казан замы на огне; хозяйка просеивает отруби через сито, дед с кувшином вина, дети с виноградом.
   Том — молдавский крестьянин (вышитая рубаха, чёрный кожушок, кэчула) + фартук. По словам: «Молдове» — на заборе вспыхивают цветные ковры-«скоарце»;
   «борш» — Том поднимает кувшин «БОРШ», крышка-тряпица слетает; «отрубей.» — хозяйка трясёт сито, отруби золотым дождём сыплются в кувшин, пузыри брожения;
   «Свёкла не нужна» — Том отбрасывает свёклу через плечо (она катится, ценник «НЕ ОБЯЗАТЕЛЬНО»); «кисло!» — отхлёбывает борш и морщится, как в первом слое (колбэк), штамп «КИСЛО ✓».
   Плашка-мини-карта «БОРЩ У СОСЕДЕЙ». Главный свет — солнце сквозь виноград; второй — огонь под казаном. Переход В сцену — отруби вихрем просеиваются сквозь сито. */
(() => {
  EV.md_in = wtw('s9', 'Молдове');
  EV.md_bors = wtw('s9', 'борш');
  EV.md_bran = wtw('s9', 'отрубей.');
  EV.md_beet = wtw('s9', 'Свёкла');
  EV.md_sour = wtw('s9', 'кисло!');
  SHAKES.push([EV.md_sour + 0.05, 0.14, 5]);
  KEYW.push('борш', 'кисло!');
  const SUN = [900, 300];
  function sky(t) {                                                      // осеннее небо, холмы с виноградниками, тополя, дальнее село с церковью
    vgrad(-800, 1300, ['#7aa8d8', '#b8d4e8', '#f4e0b0']);
    for (let i = 0; i < 4; i++) { const x = ((i * 500 + t * 8) % 2300) - 600, y = -180 + (i % 2) * 140; blob([[x, y], [x + 180, y - 40], [x + 380, y], [x + 220, y + 30], [x + 40, y + 24]], { wash: '#fbf8f0', washA: 0.8, line: false }); }
    sil([[-800, 980], [-300, 820], [200, 860], [700, 800], [1200, 860], [1900, 820], [1900, 1300], [-800, 1300]], '#a8a868', 0.95);
    for (let r = 0; r < 6; r++) pencil(spline([[-700, 880 + r * 20], [0, 860 + r * 22], [700, 840 + r * 24], [1800, 860 + r * 22]], false, 8), { w: 6, col: '#7a7a3a', a: 0.6, pass2: false });
    for (let i = 0; i < 8; i++) { const x = -500 + i * 280; ell(x, 840, 24, 110, { wash: '#c8a040', washA: 0.95, line: false }); pencil([[x, 900], [x, 950]], { w: 4, col: '#4a3a2a', pass2: false }); }
    push(1100, 870, 0.6); rect(-40, -140, 80, 140, { wash: '#f4f0e4', washA: 1, w: 1.6, col: '#5a4a3a' }); blob([[-34, -140], [-30, -190], [0, -220], [30, -190], [34, -140]], { wash: '#3a6a9a', washA: 1, w: 1.4 }); pencil([[0, -220], [0, -260]], { w: 3, col: '#c8a040', pass2: false }); pop();
    haze('#f8e8c0', 0.1);
  }
  function yard(t) {                                                     // дом с голубыми рамами, крыльцо, колодец-журавль, забор с коврами, кукуруза, люди
    vgrad(1050, 1500, ['#b8a870', '#a89860', '#988850']);
    push(160, 1260, 1); const hs = rect(-320, -300, 640, 300, { wash: '#f8f4ea', washA: 1, w: 3, col: '#4a3a2a', key: 24800 }); shadeG(hs.path, 320, 0, -100, 0, '#c8bca8', 0.45); const rf = poly([[-370, -290], [-250, -430], [250, -430], [370, -290]], { wash: '#a85a3a', washA: 1, w: 2.6, col: '#3a1a08' }); for (let i = 0; i < 9; i++) pencil([[-350 + i * 80, -296], [-240 + i * 60, -426]], { w: 2, col: '#7a3a1a', a: 0.5, pass2: false });
    rect(-330, -40, 660, 40, { wash: '#6a8ab8', washA: 1, w: 1.6, col: '#2a3a5a' }); for (const dx of [-200, 140]) { rect(dx - 50, -230, 100, 110, { wash: '#2a4a6a', washA: 1, w: 8, col: '#4a8ac8' }); pencil([[dx, -230], [dx, -120]], { w: 5, col: '#4a8ac8', pass2: false }); for (let q = 0; q < 6; q++) poly([[dx - 50 + q * 20, -236], [dx - 40 + q * 20, -256], [dx - 30 + q * 20, -236]], { wash: '#4a8ac8', washA: 1, line: false }); }
    for (const px of [-60, 60]) { rect(px - 10, -300, 20, 260, { wash: '#8a5a32', washA: 1, w: 1.6, col: '#2a1408' }); for (let q = 0; q < 6; q++) ell(px, -280 + q * 40, 12, 6, { wash: '#6a3a1a', washA: 1, line: false }); }
    for (let i = 0; i < 10; i++) { push(-280 + i * 14, -300, 1); ell(0, 40, 12, 30, { wash: '#f4c040', washA: 1, w: 1.2, col: '#8a5a08' }); pencil([[0, 0], [0, 10]], { w: 2, col: '#c8a060', pass2: false }); pop(); } for (let i = 0; i < 8; i++) { push(250 + (i % 2) * 14, -280 + i * 24, 1, 0.3); blob([[0, 0], [-8, 20], [0, 44], [8, 20]], { wash: '#c8202a', washA: 1, w: 1, col: '#4a0408' }); pop(); } pop();
    for (let i = 0; i < 16; i++) { const x = 520 + i * 36; pencil([[x, 1320], [x + 2, 1190]], { w: 6, col: '#7a5a3a', pass2: false }); } pencil([[510, 1220], [1100, 1216]], { w: 6, col: '#6a4a2a', pass2: false });
    const rug = clamp((t - EV.md_in) / 0.4); for (let k = 0; k < 2; k++) { const x = 620 + k * 260; push(x, 1200, 1); rect(-110, -10, 220, 140 * rug, { wash: k ? '#2a3a6a' : '#8a1a2a', washA: 1, w: 2, col: '#1a0a0a' }); if (rug > 0.5) for (let q = 0; q < 3; q++) { poly([[0, 20 + q * 36], [24, 36 + q * 36], [0, 52 + q * 36], [-24, 36 + q * 36]], { wash: ['#f4c040', '#3aa86a', '#f4ecd8'][q], washA: 1, line: false }); for (const sd of [-1, 1]) ell(sd * 70, 36 + q * 36, 10, 10, { wash: '#e86a3a', washA: 1, line: false }); } pop(); }
    push(1220, 1300, 1); rect(-60, -80, 120, 80, { wash: '#a8a8a0', washA: 1, w: 2, col: '#3a3a3a' }); pencil([[40, 0], [40, -420]], { w: 10, col: '#6a4a2a', pass2: false }); const sw = Math.sin(t * 0.6) * 0.1; push(40, -420, 1, -0.5 + sw); pencil([[-300, 0], [200, 0]], { w: 8, col: '#6a4a2a', pass2: false }); pencil([[-300, 0], [-300, 160]], { w: 2, col: '#3a3a3a', pass2: false }); rect(-320, 160, 40, 40, { wash: '#6a6a6a', washA: 1, w: 1.4 }); pop(); pop();
    const sift = t > EV.md_bran - 0.3 && t < EV.md_beet;
    human(450, 1340, 1.0, t, { body: '#f4ecd8', trim: '#c8202a', legs: '#2a2a3a', long: 1, hat: 'scarf', hatCol: '#2a2a3a', armL: sift ? 'up' : 'hold', armR: sift ? 'up' : 'hold', face: t > EV.md_sour ? 'grin' : 'smile', seed: 24810, look: 0.4 });
    human(1040, 1350, 1.0, t, { body: '#2a2220', trim: '#e8e0d0', legs: '#e8e2d2', beard: 'long', hair: '#c8c8c8', hat: 'fur', hatCol: '#2a2220', armL: 'hold', armR: t > EV.md_sour ? 'up' : 'hold', face: t > EV.md_sour ? 'grin' : 'calm', seed: 24811, flip: -1, look: -0.4 });
    push(1000, 1120, 0.6); branJug(0, 0, 1, t, { cloth: false, key: 24812 }); pop();
    human(820, 1370, 0.7, t, { body: '#e86a3a', legs: '#3a3a5a', hair: '#3a2a1a', face: 'grin', armL: 'up', armR: 'swing', seed: 24813, look: -0.2 }); for (let q = 0; q < 7; q++) ell(800 + (q % 3) * 10, 1120 + Math.floor(q / 3) * 12, 7, 7, { wash: '#5a2a6a', washA: 1, w: 1, col: '#2a0a2a' });
    castShadow(450, 1340, 110, 200, -0.8, 0.22); castShadow(1040, 1350, 110, 200, -0.8, 0.22);
  }
  function pergola(t) {                                                  // виноградная беседка сверху: лозы, листья, гроздья, просветы солнца
    pencil([[-400, 640], [1500, 620]], { w: 18, col: '#6a4a2a', pass2: false }); pencil([[-400, 660], [1500, 640]], { w: 4, col: '#4a2a10', a: 0.6, pass2: false });
    const r = rng(24820); for (let i = 0; i < 40; i++) { const x = -350 + r() * 1800, y = 560 + r() * 160, s = 0.8 + r() * 0.6; push(x, y + Math.sin(t + i) * 4, s, r() * 6); blob([[0, 0], [30, -20], [60, 0], [50, 30], [20, 40], [-10, 30]], { wash: i % 3 ? '#6a9a3a' : '#c8a040', washA: 1, w: 1.4, col: '#2a4a14' }); pencil([[0, 0], [40, 10]], { w: 1.2, col: '#a8c870', pass2: false }); pop(); }
    for (let g = 0; g < 7; g++) { const x = -200 + g * 230, y = 700 + (g % 2) * 30; for (let q = 0; q < 12; q++) { const row = Math.floor(q / 4), col = q % 4; ell(x + col * 16 - 24 + row * 6, y + row * 20, 11, 12, { wash: g % 2 ? '#4a1a5a' : '#c8d070', washA: 1, w: 1, col: '#1a0a1a' }); } }
    for (let i = 0; i < 6; i++) lightPool(-100 + i * 260, 1450, 90, 30, 'rgba(255,240,180,1)', 0.25);
  }
  function table(t) {                                                    // стол: льняная скатерть с вышивкой, казан замы на огне, кувшин БОРШ, сито с отрубями, свёкла (отброшена), мамалыга, брынза, лук
    const tb = rect(-400, 1440, 2000, 600, { wash: '#f4ecd8', washA: 1, w: 3, col: '#3a2a1a', key: 24830 }); shadeG(tb.path, 0, 1440, 0, 1900, '#a89a7a', 0.4); for (let i = 0; i < 20; i++) { const x = -360 + i * 100; poly([[x, 1470], [x + 14, 1456], [x + 28, 1470], [x + 14, 1484]], { wash: i % 2 ? '#c8202a' : '#2a5aa8', washA: 1, line: false }); }
    lightPool(700, 1520, 600, 140, 'rgba(255,230,160,1)', 0.32);
    for (let i = 0; i < 4; i++) { const f = flick(t, i); blob([[200 + i * 22, 1540], [208 + i * 22, 1510 - 24 * f], [220 + i * 22, 1490 - 30 * f], [232 + i * 22, 1516 - 16 * f], [240 + i * 22, 1540]], { wash: i % 2 ? '#ffb030' : '#ff7020', washA: 0.95, line: false }); } glow(240, 1510, 100, 'rgba(255,150,60,1)', 0.3);
    zeama(240, 1460, 0.75, t, { key: 24831 });
    const lift = t > EV.md_bors - 0.1 && t < EV.md_beet - 0.2; if (!lift) branJug(560, 1600, 0.75, t, { label: 'БОРШ', cloth: t < EV.md_bors, key: 24832 });
    if (t > EV.md_bran - 0.2 && t < EV.md_beet + 0.4) { const k = clamp((t - EV.md_bran + 0.2) / 0.6); push(560, 1300, 1, Math.sin(t * 30) * 0.05); ell(0, 0, 110, 26, { wash: '#c8a060', washA: 1, w: 3, col: '#4a2a08' }); for (let i = -4; i <= 4; i++) pencil([[i * 22, -20], [i * 22, 20]], { w: 1, col: '#6a4a20', a: 0.6, pass2: false }); for (let i = 0; i < 16; i++) { const r = rng(24833 + i), ph = (t * 2 + r()) % 1; ell(-80 + r() * 160, 20 + ph * 200, 6, 3, { wash: '#b88a4a', washA: 0.95 * k, line: false, rot: r() * 3 }); } pop(); }
    const bk = t > EV.md_beet ? clamp((t - EV.md_beet) / 0.7) : 0; beet(lerp(820, 1240, bk), lerp(1560, 1500, bk) - Math.sin(bk * 3.14) * 220, 0.9, bk * 8, {});
    if (bk > 0.4 && t < EV.md_sour + 0.6) bubbleTag('НЕ ОБЯЗАТЕЛЬНО', 1040, 1320, t, EV.md_beet + 0.3, '#5a5a5a', 28, 0.06);
    push(940, 1680, 0.8); const mm = ell(0, 0, 110, 70, { wash: '#f4c040', washA: 1, w: 2, col: '#8a5a08' }); shadeG(mm.path, 0, -70, 0, 70, '#c88a10', 0.35); pencil([[-90, 0], [90, 0]], { w: 2, col: '#2a2a2a', pass2: false }); pop();
    push(80, 1700, 0.8); rect(-80, -50, 160, 60, { wash: '#f8f4ec', washA: 1, w: 1.6, col: '#8a8070' }); for (let i = 0; i < 5; i++) ell(-60 + i * 30, -30, 4, 4, { wash: '#c8c0a8', washA: 1, line: false }); pop();
    if (t > EV.md_sour + 0.1 && t < S1.moldova + 0.2) { const k = popK(t, EV.md_sour + 0.1, 0.3); push(900, 1240, k, -0.15); ell(0, 0, 120, 70, { line: true, w: 7, col: '#2a7a3a' }); txt('КИСЛО ✓', 0, 14, 44, { font: 'Osw', col: '#2a7a3a' }); pop(); }
    castShadow(240, 1460, 220, 90, -0.8, 0.25);
  }
  function front(t) {                                                    // передний план: свисающая гроздь и листья сверху слева, кукурузный стебель справа, осенние листья летят
    push(-40, 220, 1.4, 0.2); for (let q = 0; q < 14; q++) { const row = Math.floor(q / 4), col = q % 4; ell(col * 22 - 30 + row * 8, 260 + row * 26, 15, 16, { wash: '#4a1a5a', washA: 1, w: 1.4, col: '#1a0a1a' }); ell(col * 22 - 34 + row * 8, 254 + row * 26, 4, 4, { wash: '#c8a8e8', washA: 0.8, line: false }); } blob([[0, 0], [60, -40], [130, 0], [110, 60], [40, 90], [-20, 60]], { wash: '#6a9a3a', washA: 1, w: 2, col: '#2a4a14' }); pop();
    push(1180, 1920, 1.1, -0.1 + Math.sin(t) * 0.02); pencil([[0, 0], [0, -900]], { w: 14, col: '#c8b060', pass2: false }); for (let i = 0; i < 4; i++) { push(0, -200 - i * 180, 1, i % 2 ? 0.8 : -0.8); blob([[0, 0], [40, -30], [180, -10], [40, 10]], { wash: '#d8c070', washA: 1, w: 1.6, col: '#6a5a20' }); pop(); } pop();
    for (let i = 0; i < 7; i++) { const ph = (t * 0.1 + i / 7) % 1, x = -100 + ph * 1300, y = 700 + Math.sin(ph * 9 + i) * 100 + i * 80; push(x, y, 1, ph * 9); blob([[0, 0], [16, -8], [26, 6], [8, 12]], { wash: i % 2 ? '#e8a030' : '#c8602a', washA: 0.9, w: 1, col: '#5a2a08' }); pop(); }
  }
  WORLD.moldova = (t, u, cat) => {
    lay(28, () => { sky(t); });
    lay(4, () => { yard(t); });
    lay(2.2, () => { pergola(t); shaft(SUN[0], SUN[1], 300, 1500, 0.15, 'rgba(255,240,190,1)', 0.12); });
    lay(1, () => { cat(); table(t); });
    lay(0.7, () => { front(t); motes(14, [300, 800, 1100, 1600], '#fff4c0', t, 24850, { sp: 6, sz: 3, a: 0.5, wob: 8 }); moodDark(700, 1100, 520, 1500, '#1a1008', 0.35); });
  };
  DIR.moldova = {
    outfit: 'moldA', light: { side: 1, rim: '#ffe0a0' }, grade: ['#ffc070', 0.06],
    act: () => [[S0.moldova, 'talk'], [EV.md_in, 'grin'], [EV.md_bors, 'proud'], [EV.md_bran, 'smug'], [EV.md_beet, 'sideeye'], [EV.md_sour, 'annoyed'], [EV.md_sour + 0.45, 'laugh']],
    pose: (t, u, b) => { const lift = t > EV.md_bors - 0.1 && t < EV.md_beet - 0.2, toss = t > EV.md_beet - 0.15 && t < EV.md_beet + 0.4, sip = t > EV.md_sour - 0.25;
      return Object.assign(b, { x: 620, y: 1600, s: 1.15, flip: false, look: lift ? [0.4, -0.4] : toss ? [-0.6, -0.2] : [0, 0],
        hand: lift ? [140, -360] : sip ? [40, -330] : toss ? [-80, -380] : [170, -220], handF: [-150, -210], prop: lift || sip ? 'branJugP' : undefined, propAng: sip ? 2.2 : 0,
        squint: t > EV.md_sour && t < EV.md_sour + 1, sweat: t > EV.md_sour && t < EV.md_sour + 1, tailUp: t > EV.md_sour }); },
    hud: t => { infoPlate(t, EV.md_bran + 0.3, S1.moldova + 0.2, { kind: 'list', title: 'БОРЩ У СОСЕДЕЙ', rows: [['Польша', 'прозрачный, ушки', '#c0102a'], ['Литва', 'розовый, кефир', '#f28ab8'], ['Молдова · Румыния', 'борш = закваска', '#e8b850']] }); },
    cam: () => [[S0.moldova, 620, 1250, 0.26], [EV.md_bors, 650, 1240, 0.29], [EV.md_bran, 640, 1270, 0.28], [EV.md_beet, 700, 1280, 0.28], [EV.md_sour, 640, 1260, 0.32], [S1.moldova, 640, 1270, 0.33]]
  };
  TRANS_IN.moldova = { a: 0.12, b: 0.55, runA: 1, fx(k, t, A, B) {      // отруби вихрем: золотые хлопья закручиваются, сетка сита сжимается и открывает двор
    const e = sm(k); drawBuf(e < 0.5 ? A : B, 1, 540, 960);
    scr(() => { const a = Math.sin(e * 3.14); for (let i = 0; i < 90; i++) { const r = rng(24860 + i), ang = r() * 6.283 + e * 6, rad = 60 + r() * 900 * (1 - a * 0.6); ell(540 + Math.cos(ang) * rad, 960 + Math.sin(ang) * rad * 1.4, 12, 6, { wash: i % 2 ? '#c89a5a' : '#a87a3a', washA: 0.95 * a, line: false, rot: ang }); }
      const R = 1300 * (1 - a * 0.7); ell(540, 960, R, R, { line: true, w: 40, col: '#a8743a', a: a }); for (let i = -8; i <= 8; i++) { pencil([[540 + i * 90, 0], [540 + i * 90, 1920]], { w: 2, col: '#6a4a20', a: 0.5 * a, pass2: false }); pencil([[0, 960 + i * 120], [1080, 960 + i * 120]], { w: 2, col: '#6a4a20', a: 0.5 * a, pass2: false }); } });
  } };
})();
