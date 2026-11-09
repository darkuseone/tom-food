/* 018 — `columbus`: «Но в 1492-м Колумб привёз из Америки кукурузу!» Палуба каравеллы в полдень: лазурное море с барашками, вдали тропический остров
   с пальмами и дымком, чайки, мачты с канатами и парусами с красным крестом, марс-корзина с юнгой, штурвал, бочки, бухты каната, клетка с попугаем,
   карта с компасом и астролябией. Колумб в красном берете со свитой, матросы тянут канат. Том-матрос. По словам: «1492-м» — в небе разворачивается
   вымпел 1492; «Колумб» — капитан выходит к сундуку и указывает на остров; «Америки» — на карте вспыхивает новый берег «AMERICA»; «кукурузу!» — сундук
   распахивается, светятся початки, Том поднимает початок к солнцу, юнга роняет подзорную трубу. Переход В сцену: парус надувается и сметает кадр. */
(() => {
  EV.cl_year = wtw('s2', '1492-м');
  EV.cl_col = wtw('s2', 'Колумб');
  EV.cl_am = wtw('s2', 'Америки');
  EV.cl_corn = wtw('s2', 'кукурузу!');
  SHAKES.push([EV.cl_corn, 0.18, 8]);
  KEYW.push('кукурузу!');
  function sea(t) {                                                       // небо, облака, остров с пальмами, море с барашками, чайки
    vgrad(-700, 700, ['#3a7ac8', '#7ab8e8', '#c8e8f4']); glow(240, -100, 300, 'rgba(255,250,220,1)', 0.6); ell(240, -100, 60, 60, { wash: '#fffbe0', washA: 1, line: false });
    for (let i = 0; i < 6; i++) { const x = ((i * 340 + t * 20) % 2000) - 400, y = -360 + (i % 3) * 120; blob([[x, y], [x + 60, y - 50], [x + 160, y - 60], [x + 240, y - 20], [x + 200, y + 20], [x + 40, y + 20]], { wash: '#ffffff', washA: 0.85, w: 1.2, col: '#a8c8e0' }); }
    push(1050, 700, 1); blob([[-260, 0], [-160, -60], [-40, -90], [100, -70], [260, 0]], { wash: '#3a8a4a', washA: 1, w: 2, col: '#1a3a1a' }); for (let i = 0; i < 4; i++) { const x = -140 + i * 80; pencil(spline([[x, -60], [x + 10, -140], [x + 6, -200]], false, 5), { w: 5, col: '#6a4a2a', pass2: false }); for (let k = 0; k < 5; k++) { const a = -2.6 + k * 0.55 + Math.sin(t * 2 + i) * 0.05; blob([[x + 6, -200], [x + 6 + Math.cos(a) * 60, -200 + Math.sin(a) * 40 - 10], [x + 6 + Math.cos(a) * 90, -200 + Math.sin(a) * 30 + 20]], { wash: '#2a7a3a', washA: 1, w: 1, col: '#1a3a1a' }); } }
      for (let k = 0; k < 3; k++) { const q = (t * 0.3 + k / 3) % 1; ell(120 + Math.sin(q * 4) * 10, -80 - q * 160, 14 + q * 20, 10 + q * 14, { wash: '#e8e8e8', washA: 0.4 * (1 - q), line: false }); } pop();
    const sw = rect(-600, 700, 2400, 900, { wash: '#2a6aa8', washA: 1, w: 1.4, col: '#1a3a6a', key: 18500 }); shadeG(sw.path, 540, 700, 540, 1400, '#1a3a6a', 0.5);
    for (let j = 0; j < 7; j++) for (let i = 0; i < 12; i++) { const x = -500 + i * 200 + ((t * 30 + j * 70) % 200), y = 740 + j * 60; pencil(spline([[x, y], [x + 30, y - 10], [x + 60, y]], false, 4), { w: 2 + j * 0.4, col: '#e8f4fc', a: 0.7, pass2: false }); }
    for (let i = 0; i < 4; i++) { const q = (t * 0.1 + i * 0.27) % 1, x = -200 + q * 1500, y = -100 + i * 70 + Math.sin(t * 3 + i) * 20, f = Math.sin(t * 8 + i) * 16; pencil([[x - 30, y + f], [x, y], [x + 30, y + f]], { w: 3, col: '#2a2a3a', pass2: false }); }
  }
  function ship(t) {                                                      // мачты, паруса с крестом, ванты, марс с юнгой, фальшборт
    for (const [x, h, w] of [[200, 1500, 520], [1000, 1300, 420]]) { pencil([[x, 1100], [x, 1100 - h]], { w: 18, col: '#6a4424' }); const bl = Math.sin(t * 1.2 + x) * 16;
      const sl = blob([[x - w / 2, 1100 - h + 160], [x + w / 2, 1100 - h + 160], [x + w / 2 + bl, 1100 - h + 160 + w * 0.9], [x, 1100 - h + 200 + w * 0.95], [x - w / 2 + bl, 1100 - h + 160 + w * 0.9]], { wash: '#f4ead2', washA: 1, w: 2.4, col: '#6a5a40', key: 18510 + x }); shadeG(sl.path, x + w / 2, 0, x - w / 3, 0, '#c8b890', 0.45);
      rect(x - 30, 1100 - h + 200, 60, w * 0.75, { wash: '#c8221a', washA: 0.9, line: false }); rect(x - w * 0.35, 1100 - h + 160 + w * 0.3, w * 0.7, 60, { wash: '#c8221a', washA: 0.9, line: false });
      pencil([[x - w / 2 - 20, 1100 - h + 160], [x + w / 2 + 20, 1100 - h + 160]], { w: 10, col: '#5a3a1a' }); for (let k = 0; k < 6; k++) pencil([[x, 1100 - h + 40], [x - 400 + k * 160, 1120]], { w: 1.6, col: '#3a2a1a', a: 0.7, pass2: false }); }
    push(200, -260, 1); const nest = rect(-70, -40, 140, 80, { wash: '#7a5a34', washA: 1, w: 2, col: '#2a1808' }); human(0, 40, 0.6, t, { body: '#e8e0c8', legs: '#4a3a2a', hair: '#3a2a1a', face: t > EV.cl_corn ? 'shock' : 'smile', armL: 'down', armR: t > EV.cl_am ? 'point' : 'up', look: 0.6, seed: 18520, hat: 'cap', hatCol: '#c8221a' }); rect(-74, -10, 148, 60, { wash: '#7a5a34', washA: 1, w: 2, col: '#2a1808' });
    if (t > EV.cl_corn) { const q = clamp((t - EV.cl_corn) / 0.6); push(80, 60 + q * q * 900, 1, q * 6); rect(-40, -6, 80, 12, { wash: '#c8a050', washA: 1, w: 1.4 }); pop(); } pop();
    if (t > EV.cl_year - 0.1) { const q = popK(t, EV.cl_year - 0.1, 0.4); push(720, 420, q * 0.8, Math.sin(t * 3) * 0.04); pencil([[-220, 0], [220, 0]], { w: 3, col: '#5a3a1a' }); blob([[-200, 0], [200, 0], [240, 60], [200, 120], [-200, 120]], { wash: '#c8221a', washA: 1, w: 2.4, col: '#4a0a04' }); txt('1492', 0, 90, 80, { font: 'Osw', col: '#ffe070' }); pop(); }
    const bw = rect(-400, 1100, 2000, 80, { wash: '#7a4a24', washA: 1, w: 3, col: '#2a1408', key: 18525 }); for (let i = 0; i < 30; i++) rect(-380 + i * 70, 1110, 30, 40, { wash: '#4a2a14', washA: 1, w: 1.4 });
  }
  function crew(t) {                                                      // Колумб у сундука, офицер с картой, матросы тянут канат
    const k = sm(clamp((t - EV.cl_col + 0.3) / 0.5)), cx = lerp(1300, 900, k);
    human(cx, 1320, 1.15, t, { body: '#5a2a5a', legs: '#2a1a2a', hair: '#e8e0d0', face: t > EV.cl_corn ? 'grin' : 'smile', armL: 'hips', armR: t > EV.cl_am && t < EV.cl_corn ? 'point' : 'up', look: -0.6, seed: 18530, flip: -1, belt: '#c8a040' }); hat20(cx, 1320, 1.15, 'beret', '#a8221a', -1);
    push(cx, 1320 - 250, 1); rect(-50, -10, 100, 16, { wash: '#e8e0c8', washA: 1, w: 1.4 }); pop();
    for (const [x, sd] of [[-120, 18531], [40, 18532]]) { const pull = Math.sin(t * 4 + sd) * 14; human(x + pull, 1320, 1.05, t, { body: sd % 2 ? '#d8c8a0' : '#8a6a4a', legs: '#3a2a1a', hair: '#2a1a0a', face: t > EV.cl_corn ? 'shock' : 'calm', armL: 'up', armR: 'up', look: 0.6, seed: sd, beard: sd % 2 ? 'short' : null }); }
    pencil(spline([[-260, 1100], [-120, 1000], [40, 1010], [200, 940]], false, 6), { w: 6, col: '#b8945a' });
  }
  function deck(t) {                                                      // палуба: доски, сундук с початками (герой), бочки, попугай, карта, компас, астролябия, канат
    mmTable(1440, 'wood', t, { key: 18540, col: '#a8784a', lx: 700, lc: 'rgba(255,250,210,1)', la: 0.3 }); for (let i = 0; i < 12; i++) pencil([[-500, 1500 + i * 48], [1600, 1500 + i * 50]], { w: 4, col: '#2a1408', a: 0.35, pass2: false });
    tableBits([['bread', 1240, 1559, 0.9], ['cup', 860, 1559, 1], ['knife', 520, 1567, 1], ['crumbs', 640, 1550, 1]], t, 18549);
    const op = t > EV.cl_corn ? sm(clamp((t - EV.cl_corn) / 0.35)) : 0; push(380, 1470, 1); const ch = rect(-160, -150, 320, 150, { wash: '#7a4a24', washA: 1, w: 3, col: '#2a1408', key: 18541 }); for (const x of [-120, 120]) rect(x - 10, -150, 20, 150, { wash: '#c8a040', washA: 1, w: 1.6 });
    if (op > 0) { for (let i = 0; i < 6; i++) cornCob(-110 + i * 44, -160 - Math.sin(i) * 20, 0.42, -0.6 + i * 0.24, { key: 18542 + i, husk: 0.8 }); glow(0, -200, 260 * op, 'rgba(255,220,100,1)', 0.6 * op); rays(0, -200, -1.57, 1.2, 500, 'rgba(255,230,140,1)', 0.25 * op, 8, t); }
    push(0, -150, 1, 0, 1); ctx.save(); ctx.translate(0, 0); const lid = rect(-160, -70 + 60 * op, 320, 70 - 60 * op, { wash: '#8a5a2a', washA: 1, w: 3, col: '#2a1408' }); ctx.restore(); pop(); txt('AMÉRICA', 0, -60, 30, { font: 'Osw', col: '#f4e0a0' }); pop();
    for (const [x, y, s] of [[960, 1480, 1], [1120, 1500, 0.9]]) { push(x, y, s); const br = blob([[-70, 0], [-80, -90], [-70, -180], [70, -180], [80, -90], [70, 0]], { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#2a1408', key: 18550 + x }); shadeG(br.path, 80, 0, -40, 0, '#4a2a10', 0.45); for (const yy of [-30, -150]) pencil([[-74, yy], [74, yy]], { w: 6, col: '#3a3a3a' }); pop(); }
    push(960, 1300, 1); pencil([[-40, 0], [40, 0]], { w: 4, col: '#5a3a1a' }); const pr = blob([[0, 0], [-20, -30], [-14, -70], [6, -84], [20, -60], [16, -20]], { wash: '#2aa84a', washA: 1, w: 1.6, col: '#0a3a1a' }); ell(10, -72, 8, 8, { wash: '#f4d020', washA: 1, w: 1 }); poly([[20, -74], [34, -68], [20, -64]], { wash: '#2a2a2a', washA: 1, line: false }); blob([[-14, -10], [-30, 30], [-6, 20]], { wash: '#c8221a', washA: 1, w: 1 }); pop();
    push(140, 1560, 1, -0.06); const mp = rect(-180, -60, 360, 120, { wash: '#efe0b8', washA: 1, w: 2, col: '#6a5030' }); blob([[-150, -30], [-90, -50], [-60, 0], [-110, 40], [-160, 20]], { wash: '#c8b07a', washA: 1, w: 1.2, col: '#6a5030' });
    if (t > EV.cl_am) { const q = clamp((t - EV.cl_am) / 0.4); blob([[60, -50], [120, -40], [150, 10], [110, 50], [70, 30]], { wash: '#8ac86a', washA: q, w: 1.6, col: '#3a6a1a' }); txt('AMERICA', 100, 6, 18, { font: 'Osw', col: '#3a1a08', a: q }); glow(100, 0, 80, 'rgba(255,240,150,1)', 0.4 * q); }
    pencil(spline([[-80, 0], [0, 30], [80, -10]], false, 5), { w: 2, col: '#a8221a', pass2: false, gap: true }); ell(-140, 40, 26, 26, { wash: '#c8a050', washA: 1, w: 1.6 }); pencil([[-140, 20], [-140, 60]], { w: 2, col: '#a8221a', pass2: false }); pop();
    push(600, 1580, 1); for (let i = 0; i < 4; i++) ell(0, 0, 80 - i * 16, 26 - i * 5, { line: true, w: 6, col: '#b8945a' }); pop();
  }
  function front(t) { push(-60, 1900, 1.5); pencil([[0, 0], [0, -800]], { w: 22, col: '#5a3a1a' }); for (let k = 0; k < 4; k++) pencil([[0, -700 + k * 140], [140, -680 + k * 140]], { w: 4, col: '#b8945a', pass2: false }); pop();
    pencil(spline([[1100, -100], [1000, 400], [1150, 900]], false, 6), { w: 6, col: '#b8945a' }); motes(20, [-100, 600, 1200, 1500], '#ffffff', t, 18560, { sp: 30, vx: 40, sz: 4, a: 0.5, wob: 6 }); haze('#e8f4fc', 0.04); }
  function shine(t) {                                                     // солнечные блики на воде, лучи, фонарь, пушка, сеть с рыбой, клетка с курами
    for (let i = 0; i < 40; i++) { const r = rng(18570 + i), x = -300 + r() * 1700, y = 760 + r() * 300, tw = Math.sin(t * 6 + i * 2) * 0.5 + 0.5; ell(x, y, 10 * tw + 2, 2, { wash: '#ffffff', washA: 0.8 * tw, line: false }); }
    beam(240, -120, 1.2, 1600, 260, 'rgba(255,250,220,A)', 0.18, t);
  }
  function deckProps(t) { push(1150, 1300, 1); const cn = rect(-120, -40, 240, 70, { wash: '#2a2826', washA: 1, w: 2, col: '#000' }); metalG(cn.path, -40, -20, 140, '#8a8680', '#2a2826', '#0a0a0a'); for (const sd of [-1, 1]) ell(sd * 70, 40, 34, 34, { wash: '#6a4424', washA: 1, w: 2 }); pop();
    push(-160, 1040, 1); pencil([[0, -200], [0, 0]], { w: 3, col: '#3a2a1a', pass2: false }); rect(-26, 0, 52, 70, { wash: '#c8a040', washA: 0.9, w: 2, col: '#4a3008' }); ell(0, 36, 12, 20, { wash: '#ffe080', washA: 0.8, line: false }); pop();
    push(80, 1360, 1); pencil(spline([[-120, -100], [-60, 20], [60, 30], [120, -90]], false, 6), { w: 2, col: '#8a7a5a', pass2: false }); for (let i = 0; i < 5; i++) for (let j = 0; j < 3; j++) pencil([[-100 + i * 50, -80 + j * 30], [-80 + i * 50, -50 + j * 30]], { w: 1.4, col: '#8a7a5a', pass2: false }); for (let i = 0; i < 3; i++) { push(-50 + i * 50, -20, 0.6, 0.3 * i); blob([[-40, 0], [-20, -14], [30, -10], [44, 0], [30, 10], [-20, 12]], { wash: '#a8b8c8', washA: 1, w: 1.4, col: '#3a4a5a' }); pop(); } pop(); }
  WORLD.columbus = (t, u, cat) => {
    const roll = Math.sin(t * 1.4) * 0.012; ctx.save(); ctx.translate(540, 960); ctx.rotate(roll); ctx.translate(-540, -960);
    lay(18, () => { sea(t); }); lay(12, () => { shine(t); }); lay(5, () => { ship(t); }); lay(3, () => { crew(t); deckProps(t); });
    lay(1, () => { cat(); }); lay(0.94, () => { deck(t); }); lay(0.6, () => { front(t); });
    ctx.restore();
    vign(0.32, '10,30,60');
  };
  DIR.columbus = {
    outfit: 'sailorA', light: { side: -1, rim: '#fff4d0' }, grade: ['#80c0f0', 0.06],
    act: () => [[S0.columbus, 'talk'], [EV.cl_col, 'awe'], [EV.cl_am, 'talk'], [EV.cl_corn, 'shock'], [EV.cl_corn + 0.5, 'grin']],
    pose: (t, u, b) => { const up = t > EV.cl_corn + 0.15; return Object.assign(b, { x: 700, y: 1600, s: 1.18, flip: 1, look: up ? [-0.4, -0.8] : t > EV.cl_col ? [0.8, 0] : [0, 0], hand: up ? [200, -440] : [180, -260], handF: [-80, -220], prop: up ? 'cornP' : undefined, propAng: -0.3, tailUp: up }); },
    cam: () => [[S0.columbus, 640, 900, 0.16], [S0.columbus + 0.5, 600, 1150, 0.24, 'x'], [EV.cl_am, 560, 1220, 0.26], [EV.cl_corn, 560, 1150, 0.3], [S1.columbus, 580, 1120, 0.32]]
  };
  // ---------------------------------------------------------------- переход: парус надувается и сметает кадр
  TRANS_IN.columbus = { a: 0.25, b: 0.4, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k); drawBuf(A, 1, 540, 960); const x = lerp(-700, 1900, e);
    ctx.save(); ctx.beginPath(); ctx.moveTo(x - 400, -100); ctx.quadraticCurveTo(x + 300, 960, x - 400, 2100); ctx.lineTo(-1000, 2100); ctx.lineTo(-1000, -100); ctx.closePath(); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore();
    scr(() => { const sl = blob([[x - 400, -100], [x + 200, 400], [x + 300, 960], [x + 200, 1500], [x - 400, 2100], [x - 300, 960]], { wash: '#f4ead2', washA: 1, w: 4, col: '#6a5a40' }); shadeG(sl.path, x + 300, 0, x - 300, 0, '#c8b890', 0.5); rect(x - 120, 400, 80, 1100, { wash: '#c8221a', washA: 0.9, line: false }); });
  } };
})();
