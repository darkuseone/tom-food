/* 018 — `hook` + `button`: «Налоговая лазейка сварила эту кашу! Какая?» Молдавская каса-маре вечером: белёные стены, балки, ковёр-скоарцэ с ромбами и
   «древом жизни», рушник на иконе, расписные тарелки, окно с синей рамой на холмы с виноградником и журавлём колодца, связки кукурузы и перца под балкой,
   печь с чугунком на огне — бабушка в платке мешает кашу мешалкой, дед с усами и кружкой вина, внук выглядывает из-за печи. На столе с вышитой дорожкой — жёлтый
   купол мамалыги на круглой доске (герой), брынза, сметана, шкварки, кувшин, чеснок, нитка. По словам: «Налоговая» — сверху шлёпается свиток НАЛОГ с печатью;
   «лазейка» — в свитке дыра, сквозь неё вылезает початок; «сварила эту кашу!» — пар клубами из купола, чугунок булькает; «Какая?» — «?» над Томом.
   «Откусим историю!» — Том отламывает кусок, макает в сметану и откусывает. `button`: «Пиши блюдо — разрежем ниткой!» — Том режет купол ниткой → петля в хук. */
(() => {
  EV.hk_tax = wtw('h1', 'Налоговая') + 0.05;
  EV.hk_hole = wtw('h1', 'лазейка');
  EV.hk_cook = wtw('h1', 'сварила');
  EV.hk_q = wtw('h1', 'Какая?');
  EV.hk_grab = LS('h2') - 0.2;
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_tax, 0.2, 12], [EV.hk_bite, 0.2, 9]);
  KEYW.push('лазейка', 'кашу!');
  const rugM = (x, y, w, h, k) => {                                       // ковёр-скоарцэ: бордо, чёрные полосы, ромбы, «древо жизни»
    const c = rect(x, y, w, h, { wash: '#8a1a1a', washA: 1, w: 2.4, col: '#2a0806', key: k }); hatch(c.path, c.bb, { gap: 6, a: 0.12, col: '#2a0806', ang: 1.57, key: k + 1, w: 1 });
    for (const yy of [y + 24, y + h - 24]) { rect(x + 10, yy - 12, w - 20, 24, { wash: '#1a1414', washA: 1, w: 1, col: '#000' }); for (let i = 0; i < w / 30 - 1; i++) poly([[x + 24 + i * 30, yy], [x + 34 + i * 30, yy - 9], [x + 44 + i * 30, yy], [x + 34 + i * 30, yy + 9]], { wash: i % 2 ? '#e8b030' : '#3a7a4a', washA: 1, w: 0.8, col: '#000' }); }
    for (let i = 0; i < 3; i++) { const cx = x + w * (0.22 + i * 0.28), cy = y + h * 0.5; poly([[cx, cy - 90], [cx + 60, cy], [cx, cy + 90], [cx - 60, cy]], { wash: i === 1 ? '#1a1414' : '#d86a2a', washA: 1, w: 1.6, col: '#000' }); poly([[cx, cy - 50], [cx + 32, cy], [cx, cy + 50], [cx - 32, cy]], { wash: '#f4e6c8', washA: 1, w: 1, col: '#000' }); ell(cx, cy, 10, 10, { wash: '#8a1a1a', washA: 1, w: 1 }); }
    for (let i = 0; i < w / 14; i++) pencil([[x + 6 + i * 14, y + h], [x + 4 + i * 14, y + h + 22]], { w: 2, col: '#6a1010', pass2: false });
  };
  function room(t) {                                                      // стены, балки, окно, ковёр, иконы с рушником, тарелки, связки кукурузы
    vgrad(-600, 1500, ['#cfc4ae', '#e8dfca', '#d8ccb2']); const r = rng(18200); for (let i = 0; i < 40; i++) ell(-300 + r() * 1700, -400 + r() * 1700, 30 + r() * 80, 14 + r() * 30, { wash: '#bfb294', washA: 0.22, line: false });
    for (let i = 0; i < 5; i++) { const b = rect(-400, -560 + i * 18, 2000, 60, { wash: '#6a4424', washA: 1, w: 2.4, col: '#2a1408', key: 18201 + i }); if (i === 0) hatch(b.path, b.bb, { gap: 8, a: 0.2, col: '#2a1408', ang: 0.05, key: 18210 }); }
    for (let i = 0; i < 6; i++) { const x = -260 + i * 300; rect(x, -500, 46, 120, { wash: '#5a3418', washA: 1, w: 2, col: '#2a1408' }); }
    push(820, 420, 1); const wn = rect(-160, -220, 320, 360, { wash: '#f4a860', washA: 1, w: 10, col: '#2a5aa8', key: 18220 }); ctx.save(); ctx.clip(wn.path);
    vgrad(200, 560, ['#f8b870', '#f4d8a0', '#e8a060']); glow(60, -60, 140, 'rgba(255,220,150,1)', 0.8); for (let i = 0; i < 3; i++) blob([[-200, 40 + i * 40], [-80, -10 + i * 40], [60, 20 + i * 40], [200, -20 + i * 40], [200, 160], [-200, 160]], { wash: ['#8a8a4a', '#6a7a3a', '#4a5a2a'][i], washA: 1, w: 1.4, col: '#2a3a14' });
    for (let i = 0; i < 9; i++) for (let j = 0; j < 3; j++) pencil([[-180 + i * 44, 80 + j * 26], [-170 + i * 44, 70 + j * 26]], { w: 3, col: '#2a3a14', pass2: false });
    pencil([[-90, 120], [-90, -30]], { w: 5, col: '#3a2410', pass2: false }); pencil([[-150, -10], [-10, -60]], { w: 4, col: '#3a2410', pass2: false }); pencil([[-10, -60], [-10, 10]], { w: 1.4, col: '#3a2410', pass2: false });   // журавль колодца
    for (let i = 0; i < 3; i++) { const q = (t * 0.25 + i / 3) % 1; pencil([[-170 + q * 340, -120 + i * 18], [-160 + q * 340, -126 + i * 18], [-150 + q * 340, -120 + i * 18]], { w: 2, col: '#3a2a1a', pass2: false }); }
    ctx.restore(); pencil([[0, -220], [0, 140]], { w: 8, col: '#2a5aa8' }); pencil([[-160, -40], [160, -40]], { w: 8, col: '#2a5aa8' }); rect(-190, 140, 380, 30, { wash: '#2a5aa8', washA: 1, w: 2, col: '#0a2a5a' });
    for (const sd of [-1, 1]) { const c = blob([[sd * 170, -240], [sd * 240, -230], [sd * 250, 60], [sd * 220, 200], [sd * 180, 160], [sd * 168, -200]], { wash: '#f4f0e4', washA: 0.95, w: 1.6, col: '#8a8070' }); for (let k = 0; k < 6; k++) ell(sd * 206, -200 + k * 60, 10, 6, { wash: '#c8221a', washA: 0.8, line: false }); }
    for (const x of [-110, 0, 110]) { push(x, 140, 1); rect(-34, -50, 68, 50, { wash: '#b8642a', washA: 1, w: 1.6, col: '#3a1a08' }); for (let k = 0; k < 6; k++) { ell(-24 + k * 10 + Math.sin(t * 2 + k) * 2, -70 - (k % 3) * 16, 12, 10, { wash: k % 2 ? '#e8302a' : '#c81a2a', washA: 1, w: 1, col: '#5a0a0a' }); } blob([[-30, -50], [-40, -80], [-10, -60]], { wash: '#3a7a3a', washA: 1, w: 1, col: '#1a3a1a' }); pop(); }
    glow(0, -40, 380, 'rgba(255,200,130,1)', 0.25); pop(); rays(820, 380, 2.4, 0.5, 1500, 'rgba(255,220,160,1)', 0.14, 4, t);
    rugM(-260, -40, 700, 640, 18230);
    push(540, -170, 1); rect(-60, -80, 120, 150, { wash: '#c8a040', washA: 1, w: 2.4, col: '#4a3008' }); rect(-46, -66, 92, 120, { wash: '#6a2a1a', washA: 1, w: 1.4, col: '#2a0a04' }); ell(0, -30, 24, 28, { wash: '#e8c8a0', washA: 1, w: 1.4 }); glow(0, -30, 60, 'rgba(255,220,120,1)', 0.4);
    const pr = blob([[-110, -86], [110, -86], [130, 20], [100, 240], [70, 250], [80, 60], [0, -60], [-80, 60], [-70, 250], [-100, 240], [-130, 20]], { wash: '#f8f4ea', washA: 1, w: 1.8, col: '#8a8070', key: 18240 });   // рушник
    for (const sd of [-1, 1]) for (let k = 0; k < 5; k++) { poly([[sd * 86, 120 + k * 22], [sd * 94, 112 + k * 22], [sd * 102, 120 + k * 22], [sd * 94, 128 + k * 22]], { wash: k % 2 ? '#1a1414' : '#c8221a', washA: 1, w: 0.6, col: '#000' }); } pop();
    for (let i = 0; i < 6; i++) { const x = -200 + i * 170, y = -300 + (i % 2) * 20; if (x > 700) continue; push(x, y, 1); ell(0, 0, 50, 50, { wash: '#f4ecd8', washA: 1, w: 2, col: '#5a4a30' }); ell(0, 0, 36, 36, { line: true, w: 2, col: ['#2a5aa8', '#c8221a', '#3a7a4a'][i % 3] }); for (let k = 0; k < 6; k++) { const a = k / 6 * 6.28; ell(Math.cos(a) * 20, Math.sin(a) * 20, 6, 6, { wash: ['#c8221a', '#2a5aa8', '#e8b030'][(i + k) % 3], washA: 1, line: false }); } pop(); }
    for (const [x, len] of [[-100, 6], [180, 5]]) for (let k = 0; k < len; k++) cornCob(x + (k % 2) * 26, -400 + k * 52, 0.32, (k % 2 ? 0.4 : -0.4) + Math.sin(t + k) * 0.03, { key: 18250 + k + x, husk: 1, silk: false });
    for (let k = 0; k < 7; k++) { push(380 + k * 12, -400 + k * 46, 1, 0.2 + Math.sin(t * 1.3 + k) * 0.05); blob([[0, 0], [-10, 30], [-4, 70], [6, 74], [10, 30]], { wash: k % 3 ? '#c8221a' : '#e8402a', washA: 1, w: 1.2, col: '#4a0a04' }); pop(); }
  }
  function hearth(t) {                                                    // печь-сoба: белёная, с изразцовым краем, устье с огнём, чугунок, бабушка с мешалкой, внук
    push(1240, 1300, 1); const p = rect(-260, -720, 420, 720, { wash: '#efe6d2', washA: 1, w: 3, col: '#5a4a30', key: 18260 }); shadeG(p.path, 160, 0, -260, 0, '#b8a888', 0.4); for (let i = 0; i < 6; i++) rect(-260 + i * 70, -740, 70, 34, { wash: i % 2 ? '#2a5aa8' : '#f4ecd8', washA: 1, w: 1.4, col: '#1a2a5a' });
    const mo = blob([[-200, -40], [-200, -240], [-120, -320], [-40, -240], [-40, -40]], { wash: '#2a1408', washA: 1, w: 2.6, col: '#000' }); glow(-120, -120, 220, 'rgba(255,140,40,1)', 0.6); pop();
    ceaun(1120, 1170, 0.62, t, { fire: 1, fill: 'y', key: 18265 });
    const st = Math.sin(t * 3); human(940, 1300, 1.1, t, { body: '#2a2a3a', legs: '#2a2a3a', hair: '#8a8a8a', face: t > EV.hk_cook ? 'smile' : 'calm', armL: 'hold', armR: 'hold', look: 0.5, seed: 18270, long: 1, flip: 1 }); kerchief20(940, 1300, 1.1, '#1a3a7a', 1);
    push(940 + 70, 1300 - 330, 1, 0.6 + st * 0.15); facalet(0, 120, 0.6, 0); pop(); rect(860, 1300 - 230, 160, 120, { wash: '#f4f0e4', washA: 1, w: 1.4, col: '#8a8070' }); for (let k = 0; k < 4; k++) pencil([[870 + k * 40, 1180], [880 + k * 40, 1200]], { w: 3, col: '#c8221a', pass2: false });
    const peek = sm(clamp((t - EV.hk_q) / 0.4)); human(1110, 1310, 0.78, t, { body: '#c8221a', legs: '#3a2a1a', hair: '#5a3a1a', face: t > EV.hk_grab ? 'grin' : 'shock', armL: 'up', armR: 'hold', look: -0.7, seed: 18271, flip: -1 });
  }
  function grandpa(t) { human(-60, 1300, 1.12, t, { body: '#f4f0e4', legs: '#2a2a2a', hair: '#9a9a9a', face: t > EV.hk_bite ? 'grin' : t > EV.hk_tax ? 'shock' : 'smile', armL: 'down', armR: t > EV.hk_tax && t < EV.hk_grab ? 'point' : 'hold', look: 0.6, seed: 18280, belt: '#c8221a', hat: 'fur', hatCol: '#1a1414' }); stache(-60, 1300, 1.12);
    push(-60 + 40, 1300 - 230, 1); blob([[-16, -30], [16, -30], [14, 20], [-14, 20]], { wash: '#b8642a', washA: 1, w: 1.4, col: '#3a1a08' }); ell(0, -30, 16, 5, { wash: '#6a0a1a', washA: 1, w: 1 }); pop(); }
  function table(t) {                                                     // стол: скатерть с вышитой дорожкой, доска с мамалыгой (герой), брынза, сметана, шкварки, кувшин, чеснок, свиток НАЛОГ
    const tb = rect(-400, 1440, 1900, 700, { wash: '#f4efe2', washA: 1, w: 3, col: '#5a4a30', key: 18300 }); shadeG(tb.path, 540, 2000, 540, 1440, '#c8bca0', 0.4);
    rect(-400, 1480, 1900, 70, { wash: '#c8221a', washA: 1, w: 1.6, col: '#4a0a04' }); for (let i = 0; i < 46; i++) poly([[-390 + i * 42, 1515], [-378 + i * 42, 1500], [-366 + i * 42, 1515], [-378 + i * 42, 1530]], { wash: i % 2 ? '#1a1414' : '#f4e6c8', washA: 1, w: 0.6, col: '#000' });
    const cut = t > EV.bt_cut ? sm(clamp((t - EV.bt_cut) / 0.4)) : 0, piece = t > EV.hk_grab && t < S1.hook + 0.05;
    mmBoard(400, 1450, 210, 60, { key: 18310 }); mamaliga(400, 1440, 160, 165, t, { key: 18320, steam: 1, cut: t > S0.button ? cut : 0 });
    if (t > EV.hk_cook && t < S1.hook) for (let i = 0; i < 5; i++) { const q = clamp((t - EV.hk_cook) / 1.2 - i * 0.1); if (q <= 0) continue; ell(380 + i * 30 + Math.sin(i * 2) * 40, 1200 - q * 300, 40 + q * 70, 30 + q * 50, { wash: '#ffffff', washA: 0.45 * (1 - q), line: false }); }
    smBowl(760, 1500, 0.8, t, { key: 18330, spoon: 1 }); brinza(220, 1520, 0.9, -0.1, { key: 18331 }); push(980, 1520, 1); ell(0, 0, 90, 22, { wash: '#e8e0cc', washA: 1, w: 1.8, col: '#6a6050' }); pop(); shkvarki(980, 1500, 0.9, 0, { key: 18332, n: 6 });
    push(80, 1460, 1); const jg = blob([[-40, 40], [-50, -40], [-30, -100], [-20, -130], [20, -130], [30, -100], [50, -40], [40, 40]], { wash: '#c8783a', washA: 1, w: 2, col: '#3a1a08' }); shadeG(jg.path, 50, 0, -30, 0, '#6a3414', 0.4); pencil(spline([[40, -90], [80, -60], [44, -20]], false, 5), { w: 6, col: '#c8783a' }); for (let k = 0; k < 6; k++) ell(-30 + k * 12, -40, 4, 4, { wash: '#f4e6c8', washA: 1, line: false }); pop();
    for (let k = 0; k < 3; k++) { push(620 + k * 36, 1560, 0.7); blob([[-20, 10], [-24, -14], [-6, -30], [0, -40], [6, -30], [24, -14], [20, 10]], { wash: '#f4ecdc', washA: 1, w: 1.4, col: '#8a8070' }); pencil([[0, -40], [0, -54]], { w: 2, col: '#8a8070', pass2: false }); pop(); }
    if (t < S0.button) mmThread(130, 1590, 330, 1570, { w: 2 });
    if (t > EV.hk_tax - 0.05 && t < S1.hook) { const fall = sm(clamp((t - EV.hk_tax + 0.05) / 0.25)); push(860, lerp(700, 1300, fall), 1, lerp(-0.6, -0.12, fall)); scrollTax(0, 0, 0.9, 0, { key: 18340, txt: 'НАЛОГ' });
      if (t > EV.hk_hole) { const k = popK(t, EV.hk_hole, 0.4); blob([[-34, 0], [-20, -30], [10, -34], [36, -10], [30, 26], [-10, 34]], { wash: '#2a1408', washA: 1, w: 2, col: '#000' }); cornCob(0, -10 - k * 40, 0.4 * k, 0.15, { key: 18341, husk: 0.6 }); }
      pop(); if (t > EV.hk_hole + 0.1) bubbleTag('ЛАЗЕЙКА', 860, 1060, t, EV.hk_hole + 0.1, '#7a2a14', 46, 0.05); }
    if (t > EV.hk_q && t < EV.hk_grab + 0.2) { push(930, 1050, popK(t, EV.hk_q, 0.35)); txt('?', 0, 0, 190, { font: 'Osw', col: '#e8b030' }); pop(); }
    crumbs(560, 1150, t, EV.hk_bite, 12, 18350, MM.y);
    if (t > S0.button && t < EV.bt_cut + 0.6) { const q = sm(clamp((t - EV.bt_cut + 0.3) / 0.5)); const ty = lerp(1180, 1470, q); mmThread(250, ty, 610, ty, { w: 3 }); }
  }
  function front(t) { for (let k = 0; k < 5; k++) cornCob(-30 + (k % 2) * 30, 80 + k * 70, 0.55, (k % 2 ? 0.5 : -0.3) + Math.sin(t * 0.8 + k) * 0.03, { key: 18360 + k, husk: 1, silk: false }); pencil([[-10, -200], [-10, 60]], { w: 5, col: '#6a4424', pass2: false });
    push(1170, 1960, 1.5); const jg = blob([[-60, 0], [-70, -110], [-40, -200], [40, -200], [70, -110], [60, 0]], { wash: '#a85a2a', washA: 1, w: 2.4, col: '#3a1a08' }); shadeG(jg.path, 70, 0, -40, 0, '#5a2a10', 0.5); pop();
    motes(24, [-100, 200, 1200, 1500], '#fff0c8', t, 18370, { sp: 6, sz: 4, a: 0.35, wob: 2 }); haze('#f0c890', 0.04); }
  WORLD.hook = (t, u, cat) => {
    lay(14, () => { room(t); haze('#e8c898', 0.05); });
    lay(3.2, () => { hearth(t); grandpa(t); haze('#f0d0a0', 0.05); });
    lay(1, () => { cat(); });
    lay(0.94, () => { table(t); });
    lay(0.6, () => { front(t); });
  };
  const stPose = (b, t) => Object.assign(b, { x: 700, y: 1600, s: 1.2, flip: 1, look: [-0.3, 0.3], hand: [180, -300], handF: [-80, -210] });
  EV.bt_cut = wtw('x1', 'разрежем');
  DIR.hook = {
    outfit: 'moldA', light: { side: 1, rim: '#ffd8a0' }, grade: ['#f0b070', 0.08],
    act: () => [[0, 'shock'], [EV.hk_tax + 0.2, 'suspicious'], [EV.hk_hole, 'awe'], [EV.hk_cook, 'grin'], [EV.hk_q, 'sideeye'], [EV.hk_grab, 'smug'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { if (t < EV.hk_tax + 0.2) return stPose(b, t); if (t < EV.hk_grab) return Object.assign(stPose(b, t), { look: t > EV.hk_q ? [0, 0] : [0.7, 0.4], hand: t > EV.hk_hole && t < EV.hk_q ? [-160, -300] : [180, -300], point: t > EV.hk_hole && t < EV.hk_q ? 1 : undefined });
      const k = sm(clamp((t - EV.hk_grab) / 0.3)), bite = t > EV.hk_bite; return Object.assign(b, { x: 700, y: 1600, s: 1.2, flip: 1, look: bite ? [-0.2, -0.1] : [-0.6, 0.6], hand: bite ? [40, -350] : [lerp(260, 200, k), lerp(-230, -170, k)], handF: [-80, -210], prop: bite ? 'mmBiteP' : 'mmPieceP', propAng: 0.2, tailUp: bite, squash: b.squash + (bite && t < EV.hk_bite + 0.12 ? 0.1 : 0) }); },
    cam: () => [[0, 600, 1240, 0.3], [0.9, 600, 1140, 0.22, 'x'], [EV.hk_hole, 700, 1180, 0.26], [EV.hk_cook, 560, 1240, 0.26], [EV.hk_bite, 620, 1200, 0.34], [S1.hook, 620, 1200, 0.36]]
  };
  WORLD.button = (t, u, cat) => WORLD.hook(t, u, cat);
  DIR.button = { outfit: 'moldA', light: { side: 1, rim: '#ffd8a0' }, grade: ['#f0b070', 0.08],
    act: () => [[S0.button, 'grin'], [EV.bt_cut, 'proud'], [EV.bt_cut + 0.6, 'wink'], [DUR - 0.5, 'shock']],
    pose: (t, u, b) => { if (t > DUR - 0.7) return stPose(b, t); return Object.assign(b, { x: 700, y: 1600, s: 1.2, flip: 1, look: [-0.5, 0.2], hand: [200, -330], handF: [-80, -210], prop: 'threadP', propAng: 0.2, tailUp: true }); },
    cam: () => [[S0.button, 600, 1180, 0.26], [DUR - 0.8, 600, 1220, 0.28], [DUR - 0.1, 600, 1240, 0.3], [DUR, 600, 1240, 0.3]] };
})();
