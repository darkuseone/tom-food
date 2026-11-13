/* 020 — `hook` + `button`: «Карбонаре всего около восьмидесяти — ровесница твоей бабушки! Так кто её придумал? / Откусим историю!»
   Вечерняя траттория в Трастевере: главный свет — тёплая лампа под зелёным абажуром над столом, второй — синие сумерки в окне (переулок с плющом, фонарь, мотороллер).
   Охристая штукатурка с трещинами, полки с бутылками в соломенной оплётке, связки чеснока и перца, медные сковороды, меню-доска «CARBONARA», рамка с фото бабушки 1944 года.
   Гости: пожилая пара римлян за столиком, повар в окне раздачи. Стол в красно-белую клетку, герой-предмет — тарелка карбонары с паром.
   По словам: «Карбонаре» — камера к тарелке, пар; «восьмидесяти» — ценник «≈ 80 ЛЕТ»; «бабушки!» — фото бабушки выскакивает, бабушка-гостья машет; «придумал?» — знаки вопроса,
   все пожимают плечами; «историю!» — Том накручивает вилку и откусывает: соус капает, перец сыплется. `button`: тот же зал, Том подмигивает → петля. */
(() => {
  EV.hk_carb = wtw('h1', 'Карбонаре');
  EV.hk_80 = wtw('h1', 'восьмидесяти');
  EV.hk_gran = wtw('h1', 'бабушки!');
  EV.hk_who = wtw('h1', 'придумал?');
  EV.hk_grab = LS('h2') - 0.15;
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_gran + 0.05, 0.16, 7], [EV.hk_bite, 0.18, 9]);
  KEYW.push('восьмидесяти', 'бабушки!');

  function alley(t) {                                                   // вид в окне: синие сумерки Трастевере — дома, плющ, фонарь, мотороллер, прохожие
    vgrad(-300, 700, ['#1a2448', '#3a4a7a', '#8a7aa0']);
    for (let i = 0; i < 5; i++) { const x = -260 + i * 150, h = 380 + (i * 71) % 160; const b = rect(x, 520 - h, 146, h, { wash: ['#c88a4a', '#b8703a', '#d8a060', '#a86a3a', '#c8904e'][i], washA: 1, w: 1.4, col: '#3a2010', key: 20800 + i });
      shadeG(b.path, x, 520, x + 146, 520 - h, '#2a1a3a', 0.55); windows(x + 18, 560 - h, 110, h - 120, 2, 3, 20810 + i, 0.6, '#ffd890', '#3a3050', 0.85);
      for (let k = 0; k < 2; k++) rect(x + 26 + k * 56, 600 - h, 34, 50, { wash: '#2a5a3a', washA: 1, w: 1, col: '#1a2a1a' }); }
    const r = rng(20820); for (let i = 0; i < 40; i++) ell(-260 + r() * 300, 150 + r() * 360, 10 + r() * 16, 8 + r() * 10, { wash: r() < 0.5 ? '#2a5a2a' : '#3a7a3a', washA: 0.9, line: false });   // плющ
    rect(-300, 520, 1000, 200, { wash: '#4a4a5a', washA: 1, line: false }); for (let i = 0; i < 16; i++) for (let j = 0; j < 3; j++) ell(-280 + i * 60 + (j % 2) * 30, 540 + j * 26, 26, 10, { wash: '#5a5a6a', washA: 1, w: 0.8, col: '#2a2a3a' });   // брусчатка
    push(380, 520, 1); pencil([[0, 0], [0, -330]], { w: 7, col: '#1a1a1a' }); pencil(spline([[0, -330], [30, -360], [70, -350]], false, 5), { w: 5, col: '#1a1a1a' }); poly([[50, -350], [90, -350], [84, -300], [56, -300]], { wash: '#ffe8a0', washA: 1, w: 2, col: '#1a1a1a' }); glow(70, -320, 70, 'rgba(255,220,140,1)', 0.35); pop();
    push(120, 520, 1); const vb = blob([[-80, -20], [-70, -70], [-10, -90], [40, -60], [80, -40], [80, -10]], { wash: '#8ac8b8', washA: 1, w: 2, col: '#1a2a2a', key: 20821 }); shadeG(vb.path, 80, 0, -80, -80, '#2a5a5a', 0.4);
    ell(-60, 0, 22, 22, { wash: '#1a1a1a', washA: 1, w: 1.4 }); ell(60, 0, 22, 22, { wash: '#1a1a1a', washA: 1, w: 1.4 }); pencil([[30, -90], [40, -130], [60, -134]], { w: 4, col: '#1a1a1a' }); ell(-10, -96, 30, 8, { wash: '#5a3a2a', washA: 1, w: 1 }); pop();
    human(-120, 540, 0.62, t, { body: '#4a3a6a', legs: '#2a2a3a', hair: '#e8e0d0', face: 'smile', armL: 'hold', armR: 'down', seed: 20822, long: 1 }); human(250, 540, 0.6, t + 1, { body: '#6a2a2a', legs: '#2a2a2a', hair: '#1a1a1a', face: 'calm', armL: 'down', armR: 'swing', seed: 20823, hat: 'cap', hatCol: '#3a3a3a' });
    motes(14, [-260, 0, 700, 500], '#ffe8a0', t, 20824, { sp: 6, sz: 3, a: 0.6, tw: 1 });
  }
  function wall(t) {                                                    // охристая штукатурка, полки, бутылки, связки, медь, меню, фото бабушки, окно
    vgrad(-300, 2100, ['#4a2a18', '#8a5a30', '#b07a44']);
    const st = rect(-400, -300, 1900, 1500, { wash: '#c8904e', washA: 0.9, line: false, key: 20830 }); hatch(st.path, st.bb, { gap: 12, a: 0.08, col: '#6a3a1a', ang: 0.8, key: 20831 });
    const r = rng(20832); for (let i = 0; i < 14; i++) { const x = -300 + r() * 1600, y = -200 + r() * 1100; pencil([[x, y], [x + 20 + r() * 30, y + 10 + r() * 30], [x + 10 + r() * 40, y + 40 + r() * 40]], { w: 1.4, col: '#6a3a1a', a: 0.5, pass2: false }); }
    for (let i = 0; i < 7; i++) { const x = -200 + r() * 1500, y = r() * 900; blob([[x, y], [x + 60, y - 10], [x + 80, y + 30], [x + 10, y + 40]], { wash: '#e0b070', washA: 0.4, line: false }); }   // проплешины штукатурки
    for (let i = -2; i < 14; i++) pencil([[i * 110, -300], [i * 110 + 20, -220]], { w: 26, col: '#3a2010', a: 0.9, pass2: false });   // балки потолка
    rect(-400, -320, 1900, 110, { wash: '#3a2010', washA: 1, w: 2, col: '#1a0a04' });
    push(130, 620, 1); const wf = rect(-210, -330, 420, 560, { wash: '#1a2448', washA: 1, w: 12, col: '#5a3418', key: 20833 }); ctx.save(); ctx.clip(wf.path); push(-60, -100, 0.75); alley(t); pop(); ctx.restore();
    pencil([[0, -330], [0, 230]], { w: 8, col: '#5a3418' }); pencil([[-210, -50], [210, -50]], { w: 8, col: '#5a3418' });
    rect(-230, 228, 460, 30, { wash: '#6a4424', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 4; i++) { push(-160 + i * 100, 228, 0.6); blob([[-20, 0], [-24, -40], [0, -60], [24, -40], [20, 0]], { wash: '#b8502a', washA: 1, w: 1.6 }); for (let k = 0; k < 5; k++) ell(-18 + k * 9, -66 - (k % 2) * 10, 10, 7, { wash: '#4a8a3a', washA: 1, line: false }); ell(-4, -80, 7, 7, { wash: '#e83a2a', washA: 1, line: false }); pop(); }
    for (let row = 0; row < 2; row++) { const y = 360 + row * 200; rect(420, y, 720, 22, { wash: '#6a4424', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 8; i++) { const x = 450 + i * 86; if (row === 0) fiasco(x, y, 0.9, i);
      else { const jb = rect(x - 26, y - 70, 52, 70, { wash: ['#d8c088', '#c86a3a', '#8a9a4a', '#e8d8a8'][i % 4], washA: 0.9, w: 1.4, col: '#3a2a1a' }); rect(x - 28, y - 82, 56, 14, { wash: '#a8743a', washA: 1, w: 1 }); rect(x - 20, y - 50, 40, 24, { wash: '#f4ecd4', washA: 1, w: 0.8 }); } } }
    push(560, 170, 0.85); const mb = rect(-170, -150, 340, 230, { wash: '#1e2a22', washA: 1, w: 8, col: '#6a4424', key: 20835 }); txt('OGGI', 0, -100, 34, { font: 'Osw', col: '#f4efe0' });
    [['Carbonara', '12'], ['Cacio e pepe', '11'], ['Amatriciana', '12'], ['Gricia', '11']].forEach(([a, b], i) => { txt(a, -40, -50 + i * 36, 28, { font: 'Hand', col: i === 0 ? '#ffd860' : '#f4efe0' }); txt(b, 120, -50 + i * 36, 28, { font: 'Hand', col: '#f4efe0' }); }); pop();
    for (let i = 0; i < 3; i++) { push(-280 + i * 60, 300 + i * 10, 1); pencil([[0, -260], [0, 0]], { w: 2, col: '#6a5a3a', pass2: false }); for (let k = 0; k < 6; k++) ell((k % 2 ? 10 : -10), -220 + k * 36, 18, 16, { wash: i === 1 ? '#c8241e' : '#f4ecdc', washA: 1, w: 1.4, col: i === 1 ? '#5a0a08' : '#8a7a5a' }); pop(); }   // связки чеснока и перца
    for (let i = 0; i < 3; i++) { push(1230, 500 + i * 120, 1); const pn = ell(0, 0, 60 - i * 8, 60 - i * 8, { wash: '#c8743a', washA: 1, w: 2, col: '#5a2a0a' }); metalG(pn.path, -20, -20, 70, '#ffd8a0', '#c8743a', '#5a2a0a'); pencil([[0, -60 + i * 8], [0, -110]], { w: 6, col: '#5a2a0a' }); pop(); }
  }
  function fiasco(x, y, s, i) {                                         // бутылка в соломенной оплётке
    push(x, y, s); const b = blob([[-28, 0], [-34, -40], [-20, -70], [-8, -80], [-8, -120], [8, -120], [8, -80], [20, -70], [34, -40], [28, 0]], { wash: i % 3 === 0 ? '#2a5a2a' : '#6a1a2a', washA: 1, w: 1.6, col: '#1a0a0a', key: 20840 + i });
    ctx.save(); ctx.clip(b.path); rect(-40, -50, 80, 50, { wash: '#d8b060', washA: 1, line: false }); for (let k = 0; k < 8; k++) pencil([[-34 + k * 10, -50], [-30 + k * 10, 0]], { w: 1.4, col: '#8a6a2a', pass2: false }); ctx.restore();
    ell(-14, -60, 4, 10, { wash: '#ffffff', washA: 0.5, line: false }); rect(-7, -130, 14, 12, { wash: '#c8241e', washA: 1, w: 1 }); pop();
  }
  function guests(t) {                                                  // пожилая пара римлян, повар в окне раздачи
    const ask = t > EV.hk_who && t < LS('h2') + 0.6, gr = t > EV.hk_gran && t < EV.hk_who;
    const gk = t > EV.hk_gran ? popK(t, EV.hk_gran, 0.4) : 0;                // фото бабушки 1944
    push(300, 840, 0.55 + 0.25 * gk, (1 - gk) * 0.05); const ph = rect(-110, -140, 220, 280, { wash: '#d8b878', washA: 1, w: 6, col: '#5a3a14', key: 20836 }); rect(-90, -120, 180, 200, { wash: '#d8c8a0', washA: 1, w: 1.4, col: '#6a5a3a' });
    human(0, 80, 0.48, 0, { body: '#6a5a4a', legs: '#4a3a2a', hair: '#3a2a1a', face: 'smile', armL: 'hold', armR: 'down', seed: 20837, long: 1 }); screenFill('#a88a5a', 0); txt('1944', 0, 116, 26, { font: 'Hand', col: '#3a2a1a' }); pop();
    if (gk > 0) bubbleTag('РОВЕСНИЦА!', 300, 700, t, EV.hk_gran + 0.1, '#c8321a', 40, 0.05);
    push(280, 1080, 1); rect(-170, 0, 340, 22, { wash: '#f4ecdc', washA: 1, w: 1.6, col: '#6a5a4a' }); for (let i = 0; i < 6; i++) rect(-170 + i * 56, 0, 28, 22, { wash: '#c8241e', washA: 0.85, line: false }); pencil([[-150, 22], [-150, 200]], { w: 6, col: '#3a2010' }); pencil([[150, 22], [150, 200]], { w: 6, col: '#3a2010' }); fiasco(-40, 0, 0.6, 2); ell(60, -4, 40, 10, { wash: '#ffffff', washA: 1, w: 1 }); pop();
    human(150, 1200, 1.0, t, { body: '#5a4a6a', legs: '#3a3a3a', hair: '#e8e4dc', face: gr ? 'grin' : ask ? 'shock' : 'smile', armL: 'hold', armR: gr ? 'wave' : ask ? 'up' : 'hold', look: 0.5, seed: 20850, long: 1 });
    human(420, 1200, 1.0, t, { body: '#3a3a3a', legs: '#2a2a2a', hair: '#c8c4bc', face: ask ? 'shock' : 'calm', armL: ask ? 'up' : 'hold', armR: 'hold', look: -0.5, seed: 20851, flip: -1, beard: 'short', hat: 'cap', hatCol: '#4a4a4a' });
    push(980, 1000, 1); rect(-150, -200, 300, 200, { wash: '#2a1a10', washA: 1, w: 6, col: '#6a4424' }); for (let i = 0; i < 3; i++) { const q = (t * 0.5 + i / 3) % 1; ell(-60 + i * 50, -60 - q * 120, 20 + q * 20, 12, { wash: '#ffffff', washA: 0.25 * (1 - q), line: false }); } pop();
    human(980, 1010, 0.9, t, { body: '#f4f2ec', legs: '#2a2a2a', hair: '#2a1a0a', face: ask ? 'grin' : 'smile', armL: 'hold', armR: ask ? 'point' : 'hold', look: -0.6, seed: 20852, flip: -1, beard: 'stache' });
    if (ask) for (let i = 0; i < 3; i++) { const k = popK(t, EV.hk_who + i * 0.1, 0.3); txt('?', [150, 420, 980][i], [820, 820, 720][i] - k * 30, 70 * k, { font: 'Osw', col: '#ffd860' }); }
  }
  function table(t) {                                                   // стол в клетку перед Томом: тарелка-герой, пекорино, перечница, хлеб, вино, свеча
    const c = rect(-500, 1440, 2100, 700, { wash: '#f4ecdc', washA: 1, w: 3, col: '#5a3a2a', key: 20860 }); ctx.save(); ctx.clip(c.path);
    for (let i = 0; i < 30; i++) { rect(-500 + i * 72, 1440, 36, 700, { wash: '#c8241e', washA: 0.55, line: false }); } for (let j = 0; j < 12; j++) rect(-500, 1440 + j * 72, 2100, 36, { wash: '#c8241e', washA: 0.45, line: false }); ctx.restore();
    shadeG(c.path, 0, 1700, 0, 1440, '#3a0a08', 0.35);
    const bitten = t > EV.hk_bite && t < S1.hook; carbPlate(860, 1440, 1.0, t, { steam: 1, key: 20870, bite: bitten ? 0.6 : 0 });
    pecorino(250, 1480, 0.55, 20871); push(420, 1450, 1); const pm = rect(-18, -110, 36, 110, { wash: '#6a3a1a', washA: 1, w: 1.6, col: '#2a1408' }); shadeG(pm.path, 18, 0, -18, 0, '#2a1408', 0.4); ell(0, -116, 22, 10, { wash: '#c8ccd4', washA: 1, w: 1.4 }); pop();
    push(1150, 1460, 1); blob([[-90, 0], [-80, -40], [0, -54], [80, -40], [90, 0]], { wash: '#c88a4a', washA: 1, w: 2, col: '#5a3010' }); for (let i = 0; i < 4; i++) pencil([[-60 + i * 40, -40], [-40 + i * 40, -10]], { w: 3, col: '#e8b070', pass2: false }); pop();
    candle(90, 1440, 0.9, t, 20872); glow(90, 1330, 70, 'rgba(255,200,110,1)', 0.3);
    pepperDust(860, 1420, 120, 20, t > EV.hk_bite ? 30 : 0, 20873); castShadow(860, 1450, 240, 140, -0.5, 0.25);
  }
  function front(t) {                                                   // передний план: спинка стула, бокал вина, абажур лампы сверху, пар
    push(-140, 2000, 1.6); for (const x of [-40, 40]) pencil([[x, 0], [x + 10, -460]], { w: 18, col: '#5a3418' }); for (let i = 0; i < 3; i++) pencil([[-50, -420 + i * 60], [50, -416 + i * 60]], { w: 12, col: '#6a4424' }); pop();
    push(1240, 1700, 1.4); const gl = blob([[-40, 0], [-44, -80], [-30, -110], [30, -110], [44, -80], [40, 0]], { wash: '#e8f0f4', washA: 0.25, w: 1.6, col: '#6a7a8a' }); blob([[-40, -40], [-42, -70], [42, -70], [40, -40], [0, -20]], { wash: '#7a1a2a', washA: 0.85, line: false }); pencil([[0, 0], [0, 80]], { w: 4, col: '#8a9aaa' }); ell(0, 80, 40, 8, { wash: '#e8f0f4', washA: 0.3, w: 1.4 }); pop();
    push(760, 120, 1.25); pencil([[0, -400], [0, 0]], { w: 3, col: '#1a1a1a', pass2: false }); const sh = poly([[-110, 80], [-50, 0], [50, 0], [110, 80]], { wash: '#2a5a3a', washA: 1, w: 2.4, col: '#0a1a10', key: 20880 }); shadeG(sh.path, 110, 0, -110, 0, '#0a1a10', 0.45); ell(0, 82, 60, 12, { wash: '#fff0c0', washA: 1, line: false }); glow(0, 110, 160, 'rgba(255,214,140,1)', 0.32); pop();
  }
  WORLD.hook = (t, u, cat) => {
    lay(14, () => { wall(t); haze('#ffb070', 0.04); });
    lay(4, () => { guests(t); lightPool(280, 1200, 400, 120, 'rgba(255,200,130,1)', 0.18); });
    lay(1, () => { cat(); table(t); lightPool(860, 1450, 520, 80, 'rgba(255,220,150,1)', 0.3); shaft(950, 300, 300, 1200, 0.05, 'rgba(255,220,150,0.5)', 0.08); });
    lay(0.6, () => { front(t); moodDark(760, 1150, 520, 1500, '#140818', 0.5); motes(20, [300, 600, 1200, 1500], '#ffe0a0', t, 20890, { sp: 10, sz: 3, a: 0.4 }); });
    if (t > EV.hk_80 && t < S1.hook) bubbleTag('≈ 80 ЛЕТ', 760, 820, t, EV.hk_80 + 0.05, '#c8321a', 64, -0.05);
  };
  const stPose = b => Object.assign(b, { x: 600, y: 1590, s: 1.16, flip: 1, look: [0.6, 0.4], hand: [150, -300], handF: [-70, -210] });
  DIR.hook = {
    outfit: 'trattA', light: { side: 1, rim: '#ffd890' }, grade: ['#ff9a50', 0.07],
    act: () => [[0, 'shock'], [EV.hk_80, 'awe'], [EV.hk_gran, 'grin'], [EV.hk_who, 'suspicious'], [EV.hk_grab, 'smug'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { if (t < EV.hk_grab) return Object.assign(stPose(b), { look: t < EV.hk_gran ? [0.7, 0.5] : t < EV.hk_who ? [0.8, -0.6] : [0, -0.2], point: t > EV.hk_gran && t < EV.hk_who ? 1 : undefined, hand: t > EV.hk_gran && t < EV.hk_who ? [200, -440] : [150, -300] });
      const bite = t > EV.hk_bite; return Object.assign(b, { x: 600, y: 1590, s: 1.16, flip: 1, look: bite ? [-0.2, 0] : [0.4, 0.3], hand: bite ? [60, -330] : [150, -320], handF: [-70, -210], prop: 'forkCarbP', propAng: bite ? -0.6 : -0.2, tailUp: bite, squash: b.squash + (bite && t < EV.hk_bite + 0.12 ? 0.1 : 0) }); },
    afterCat: (t, u, P) => { if (t > EV.hk_bite && t < S1.hook) { const k = clamp((t - EV.hk_bite) / 0.8); for (let i = 0; i < 4; i++) { const q = (k + i / 4) % 1; ell(P.x + (50 + i * 8) * P.s, P.y - (300 - q * 150) * P.s, 5, 7, { wash: CB.sauce, washA: 1 - q, line: false }); } } },
    cam: () => [[0, 760, 1180, 0.36], [EV.hk_80, 700, 1060, 0.26, 'x'], [EV.hk_gran, 760, 940, 0.24, 'x'], [EV.hk_who, 640, 1060, 0.24], [EV.hk_grab, 660, 1100, 0.3, 'x'], [EV.hk_bite, 660, 1120, 0.34], [S1.hook, 660, 1120, 0.36]]
  };
  EV.bt_wink = wtw('x1', 'перемотаем');
  WORLD.button = (t, u, cat) => WORLD.hook(t, u, cat);
  DIR.button = { outfit: 'trattA', light: { side: 1, rim: '#ffd890' }, grade: ['#ff9a50', 0.07],
    act: () => [[S0.button, 'grin'], [EV.bt_wink, 'wink'], [EV.bt_wink + 0.6, 'laugh'], [DUR - 0.5, 'shock']],
    pose: (t, u, b) => { if (t > DUR - 0.7) return stPose(b); return Object.assign(b, { x: 600, y: 1590, s: 1.16, flip: 1, look: [-0.4, -0.1], hand: [130, -330], handF: [-70, -210], prop: 'forkCarbP', propAng: -0.2, tailUp: true }); },
    cam: () => [[S0.button, 680, 1120, 0.32], [DUR - 0.8, 740, 1160, 0.36], [DUR - 0.1, 760, 1180, 0.36], [DUR, 760, 1180, 0.36]] };
  TRANS_IN.button = { a: 0.2, b: 0.4, runA: 1, fx(k, t, A, B) {          // тарелку ставят на стол: новый кадр съезжает сверху, как поднос
    drawBuf(A, 1, 540, 960); const y = lerp(-H, 0, sm(k)); scr(() => { ctx.save(); ctx.translate(0, y); ctx.drawImage(B, 0, 0); ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.fillRect(0, H - 20, W, 20); ctx.restore(); });
  } };
})();
