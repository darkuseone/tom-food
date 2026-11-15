/* 022 — `train`: «Загадка тех лет: длинная, зелёная, пахнет колбасой? Электричка из Москвы!» Вагон зимней электрички на закате: деревянные
   лакированные скамьи, окна в инее, за окнами бегут заснеженный лес, столбы, провода и розово-оранжевое небо (главный свет — низкое солнце в окна,
   тёплые полосы по вагону; второй — холодные плафоны), багажные полки над головой битком: авоськи с батонами колбасы, коробки с тортом, апельсины;
   пассажиры в ушанках и платках с авоськами, бабушка вяжет, дед дремлет, мальчик рисует на инее. Том в тулупе и ушанке, на шее — «бусы» из батонов
   докторской, нюхает: от батонов поднимаются розовые волны запаха. По словам: «длинная,» / «зелёная,» / «колбасой?» — над вагоном выскакивают три
   карточки-подсказки (линейка, зелёный мазок, волна запаха); «Электричка» — вагон дёргается, все качаются, табло «МОСКВА — …» мигает, гудок.
   Переход В сцену: зелёный вагон электрички проезжает сквозь кадр. */
(() => {
  EV.tr_long = wtw('s10', 'длинная,');
  EV.tr_green = wtw('s10', 'зелёная,');
  EV.tr_smell = wtw('s10', 'пахнет');
  EV.tr_ans = wtw('s10', 'Электричка');
  SHAKES.push([EV.tr_ans + 0.05, 0.3, 9]);
  KEYW.push('зелёная,', 'Электричка');
  const sway = t => Math.sin(t * 5) * 3 + (t > EV.tr_ans && t < EV.tr_ans + 0.6 ? Math.sin((t - EV.tr_ans) * 30) * 14 * (1 - (t - EV.tr_ans) / 0.6) : 0);
  function outside(t) {                                                  // за окнами: закат, заснеженный лес, столбы, провода
    vgrad(-600, 700, ['#4a5a9a', '#d87a7a', '#f8c080']); ell(200, 300, 70, 70, { wash: '#ffe0a0', washA: 1, line: false }); glow(200, 300, 260, 'rgba(255,200,130,1)', 0.35);
    const off = (t * 900) % 400; for (let i = -2; i < 8; i++) { const x = i * 400 - off; pencil([[x, 700], [x + 6, -200]], { w: 10, col: '#3a2a2a' }); pencil([[x - 40, -160], [x + 46, -160]], { w: 6, col: '#3a2a2a' }); }
    pencil([[-500, -150], [1500, -130]], { w: 2, col: '#2a1a1a', a: 0.7, pass2: false }); pencil([[-500, -120], [1500, -100]], { w: 2, col: '#2a1a1a', a: 0.7, pass2: false });
    const off2 = (t * 260) % 220; for (let i = -2; i < 10; i++) { const x = i * 220 - off2, h = 260 + (i * 37 % 120); poly([[x - 70, 520], [x, 520 - h], [x + 70, 520]], { wash: '#2a4a4a', washA: 1, w: 1.4, col: '#0a1a1a' }); for (let q = 0; q < 3; q++) poly([[x - 50 + q * 10, 520 - h * (0.3 + q * 0.22)], [x, 520 - h * (0.45 + q * 0.22)], [x + 50 - q * 10, 520 - h * (0.3 + q * 0.22)]], { wash: '#f4f4ff', washA: 0.85, line: false }); }
    rect(-500, 500, 2000, 300, { wash: '#f0eef8', washA: 1, line: false }); const off3 = (t * 1600) % 300; for (let i = -1; i < 8; i++) ell(i * 300 - off3, 560, 120, 20, { wash: '#d8d0e8', washA: 0.7, line: false });
  }
  function car(t) {                                                      // стены вагона, окна с инеем, табло, полки, плафоны, двери
    vgrad(-800, 1500, ['#b8a888', '#d8c8a0', '#a89870']); push(0, 320, 1);
    for (let i = 0; i < 4; i++) { const wx = -300 + i * 560; push(wx, 260, 1); const w = rect(-220, -280, 440, 440, { wash: '#f8c080', washA: 1, w: 12, col: '#5a4a3a', key: 23001 + i }); ctx.save(); ctx.clip(w.path); push(-wx * 0.3, 0, 1); outside(t + i * 0.7); pop(); ctx.restore();
      ctx.save(); ctx.clip(w.path); for (let q = 0; q < 6; q++) blob([[-220, 160 - q * 10], [-150 + q * 20, 120 - q * 30], [-80, 160]], { wash: '#ffffff', washA: 0.4, line: false }); for (let q = 0; q < 5; q++) blob([[220, -280 + q * 20], [150 - q * 14, -230 + q * 10], [220, -180 + q * 30]], { wash: '#ffffff', washA: 0.35, line: false }); ctx.restore();
      if (i === 1) { pencil(spline([[60, -40], [90, -60], [120, -40], [100, 0], [70, 10]], false, 6), { w: 4, col: '#ffffff', a: 0.8, pass2: false }); ell(80, -50, 4, 4, { wash: '#ffffff', washA: 1, line: false }); }
      pencil([[0, -280], [0, 160]], { w: 8, col: '#5a4a3a' }); rect(-240, 160, 480, 24, { wash: '#7a5a3a', washA: 1, w: 1.6 }); pop(); }
    for (let i = 0; i < 4; i++) shaft(-300 + i * 560, 100, 380, 1800, 0.55, 'rgba(255,190,120,1)', 0.1);
    pencil([[-600, -100], [1800, -100]], { w: 10, col: '#8a8a94' }); pencil([[-600, -40], [1800, -40]], { w: 10, col: '#8a8a94' }); for (let x = -500; x < 1800; x += 30) pencil([[x, -100], [x, -40]], { w: 2, col: '#6a6a74', pass2: false });
    const r = rng(23010); for (let i = 0; i < 12; i++) { const x = -500 + i * 190; if (i % 3 === 0) stringBag(x, -110, 0.7, t, { key: 23011 + i }); else if (i % 3 === 1) { const b = rect(x - 60, -200, 120, 96, { wash: '#f4ecd8', washA: 1, w: 1.6, col: '#6a5a3a' }); pencil([[x - 60, -152], [x + 60, -152]], { w: 4, col: '#c8241e', pass2: false }); pencil([[x, -200], [x, -104]], { w: 4, col: '#c8241e', pass2: false }); txt('ТОРТ', x, -164, 14, { font: 'Osw', col: '#6a3a1a' }); } else for (let q = 0; q < 5; q++) ell(x - 40 + q * 20, -120 - (q % 2) * 16, 14, 14, { wash: '#f08a2a', washA: 1, w: 1.2, col: '#8a3a08' }); }
    for (const lx of [100, 640, 1180]) { push(lx, -380, 1); const pl = ell(0, 0, 90, 30, { wash: '#f4f8ff', washA: 1, w: 2, col: '#6a6a74' }); glow(0, 10, 140, 'rgba(220,235,255,1)', 0.22); pop(); }
    push(640, -150, 1); rect(-260, -50, 520, 100, { wash: '#1a1a1a', washA: 1, w: 3, col: '#5a5a64' }); const bl = t > EV.tr_ans && Math.sin(t * 16) > 0; txt('МОСКВА — 101 км', 0, 22, 44, { font: 'Osw', col: bl ? '#ffe070' : '#f08a2a' }); pop(); pop();
  }
  function people(t) {                                                   // пассажиры на скамьях: бабушка вяжет, дед дремлет, мужчина в ушанке, мальчик
    const sw = sway(t), ans = t > EV.tr_ans && t < EV.tr_ans + 1.4;
    for (const bx of [140, 1060]) { push(bx + sw * 0.3, 1300, 1); const bk = rect(-220, -340, 440, 80, { wash: '#a8743a', washA: 1, w: 2.4, col: '#3a1a08', key: 23020 + bx }); for (let i = 0; i < 5; i++) pencil([[-210, -330 + i * 16], [210, -330 + i * 16]], { w: 2, col: '#6a3a10', a: 0.6, pass2: false }); rect(-220, -150, 440, 40, { wash: '#a8743a', washA: 1, w: 2.4, col: '#3a1a08' }); for (const lx of [-200, 200]) pencil([[lx, -110], [lx, 0]], { w: 10, col: '#3a3a3a', pass2: false }); pop(); }
    human(60 + sw * 0.4, 1310, 1.04, t, { body: '#7a3a4a', legs: '#2a2a32', hair: '#d8d8d8', face: ans ? 'shock' : 'smile', armL: 'hold', armR: 'hold', look: 0.6, seed: 23030, flip: 1, hat: 'scarf', hatCol: '#c8a040', long: 1 });
    push(100 + sw * 0.4, 1060, 1); for (let i = 0; i < 2; i++) pencil([[-30 + i * 20, -10], [10 + i * 20, -60 + Math.sin(t * 8 + i) * 6]], { w: 3, col: '#a8a8b0', pass2: false }); blob([[-30, 0], [30, 0], [24, 30], [-24, 30]], { wash: '#c8341e', washA: 1, w: 1.2, col: '#5a0a04' }); pop();
    human(250 + sw * 0.4, 1310, 1.06, t, { body: '#4a4a3a', legs: '#2a2a32', hair: '#c8c8c8', beard: 'long', face: ans ? 'shock' : 'calm', armL: 'down', armR: 'down', look: 0.2, seed: 23031, flip: 1, hat: 'fur', hatCol: '#5a4030' });
    if (!ans) { push(290, 900, 1); txt('z', 0, -Math.sin(t * 2) * 10, 30, { font: 'Hand', col: '#3a3a5a' }); txt('z', 24, -30 - Math.sin(t * 2) * 10, 22, { font: 'Hand', col: '#3a3a5a' }); pop(); }
    human(960 + sw * 0.4, 1310, 1.08, t, { body: '#2a3a5a', legs: '#2a2a32', hair: '#3a2a1a', face: ans ? 'grin' : 'calm', armL: 'hold', armR: ans ? 'up' : 'hold', look: -0.6, seed: 23032, flip: -1, hat: 'fur', hatCol: '#3a2a1a' }); stringBag(910 + sw * 0.4, 1220, 0.75, t, { key: 23033 });
    human(1120 + sw * 0.4, 1310, 0.82, t, { body: '#c8341e', legs: '#2a2a32', hair: '#8a5a2a', face: 'grin', armL: 'down', armR: 'point', look: -0.8, seed: 23034, flip: -1, hat: 'cap', hatCol: '#2a6aa8' });
  }
  function aisle(t) {                                                    // проход: столик у окна, термос, газета, авоська на полу, рюкзак
    const tb = rect(-500, 1440, 2200, 700, { wash: '#8a6a4a', washA: 1, w: 3, col: '#2a1408', key: 23040 }); shadeG(tb.path, 0, 1440, 0, 1900, '#2a1408', 0.4); for (let i = 0; i < 8; i++) pencil([[-500, 1470 + i * 48], [1700, 1476 + i * 48]], { w: 3, col: '#5a3a1a', a: 0.4, pass2: false });
    rect(-500, 1430, 2200, 18, { wash: '#5a3a1a', washA: 1, w: 2, col: '#2a1008' });
    push(220, 1540, 1); const th = rect(-34, -150, 68, 150, { wash: '#c8341e', washA: 1, w: 2, col: '#4a0a04', key: 23041 }); shadeG(th.path, 34, 0, -34, 0, '#4a0a04', 0.4); for (let i = 0; i < 5; i++) ell(-10 + (i % 2) * 20, -110 + i * 22, 6, 6, { wash: '#ffffff', washA: 0.8, line: false }); rect(-30, -190, 60, 40, { wash: '#b8b8c0', washA: 1, w: 1.6 }); pop(); steamWisps(220, 1340, 0.5, t, 2, 23042, 0.3);
    push(1000, 1580, 1, 0.08); const np = rect(-130, -60, 260, 120, { wash: '#efe8d4', washA: 1, w: 1.6, col: '#6a6a5a' }); txt('ВЕЧЕРНЯЯ', 0, -30, 22, { font: 'Osw', col: '#1a1a1a' }); for (let i = 0; i < 4; i++) pencil([[-110, 0 + i * 14], [110, 0 + i * 14]], { w: 2, col: '#5a5a5a', a: 0.5, pass2: false }); pop();
    stringBag(1200, 1640, 0.9, t, { key: 23043 });
    lightPool(600, 1520, 700, 110, 'rgba(255,200,140,1)', 0.3); castShadow(220, 1540, 120, 120, -0.8, 0.22);
  }
  function hints(t) {                                                    // три карточки-подсказки загадки + волны запаха
    [[EV.tr_long, 380, 'ДЛИННАЯ'], [EV.tr_green, 600, 'ЗЕЛЁНАЯ'], [EV.tr_smell, 820, 'ПАХНЕТ']].forEach(([ev, x, l], i) => { if (t < ev || t > EV.tr_ans + 0.3) return; const k = popK(t, ev, 0.35);
      push(x, 900, k, (i - 1) * 0.06); const c = rect(-100, -70, 200, 140, { wash: '#f4f0e0', washA: 1, w: 2, col: '#3a3a3a' });
      if (i === 0) { rect(-80, -30, 160, 24, { wash: '#e8c040', washA: 1, w: 1.4 }); for (let q = 0; q < 9; q++) pencil([[-76 + q * 19, -30], [-76 + q * 19, -18]], { w: 1.4, col: '#2a2a2a', pass2: false }); }
      if (i === 1) blob([[-70, -40], [0, -54], [70, -36], [60, 0], [-60, 4]], { wash: '#2a8a4a', washA: 1, w: 1.4, col: '#0a3a1a' });
      if (i === 2) for (let q = 0; q < 3; q++) pencil(spline([[-60, -40 + q * 16], [-30, -50 + q * 16], [0, -40 + q * 16], [30, -50 + q * 16], [60, -40 + q * 16]], false, 6), { w: 4, col: '#e86a8a', pass2: false });
      txt(l, 0, 52, 26, { font: 'Osw', col: '#2a2a2a' }); pop(); });
    if (t > EV.tr_ans && t < S1.train) { const k = popK(t, EV.tr_ans, 0.4); push(600, 900, k, -0.04); rect(-260, -60, 520, 120, { wash: '#2a8a4a', washA: 1, w: 3, col: '#0a3a1a' }); txt('ЭЛЕКТРИЧКА!', 0, 22, 64, { font: 'Osw', col: '#fff4d8' }); pop(); }
  }
  function front(t) {                                                    // передний план: поручень-стойка слева, край скамьи справа
    push(-200, 0, 1); pencil([[0, -400], [0, 2400]], { w: 34, col: '#a8a8b4' }); pencil([[-8, -400], [-8, 2400]], { w: 8, col: '#ffffff', a: 0.5, pass2: false }); pop();
    const sb = rect(1280, 1780, 600, 420, { wash: '#a8743a', washA: 1, w: 3, col: '#3a1a08', key: 23050 }); shadeG(sb.path, 1280, 1780, 1880, 2200, '#3a1a08', 0.4); for (let i = 0; i < 5; i++) pencil([[1290, 1800 + i * 20], [1880, 1800 + i * 20]], { w: 2, col: '#6a3a10', a: 0.6, pass2: false });
  }
  WORLD.train = (t, u, cat) => {
    lay(14, () => { push(0, sway(t) * 0.5, 1); car(t); pop(); haze('#f4d8b8', 0.05); });
    lay(4, () => { people(t); lightPool(500, 1320, 900, 150, 'rgba(255,200,140,1)', 0.22); castShadow(250, 1310, 120, 140, -0.8, 0.22); castShadow(960, 1310, 120, 140, -0.8, 0.2); });
    lay(1, () => { cat(); aisle(t); hints(t); });
    lay(0.6, () => { front(t); motes(16, [-100, 300, 1200, 1500], '#fff0e0', t, 23060, { sp: 4, sz: 3, a: 0.3, wob: 6 }); moodDark(600, 1100, 520, 1500, '#2a1430', 0.42); });
  };
  DIR.train = {
    outfit: 'tulupA', light: { side: -1, rim: '#ffc080' }, grade: ['#f0a070', 0.08],
    act: () => [[S0.train, 'sideeye'], [EV.tr_long, 'talk'], [EV.tr_smell, 'awe'], [EV.tr_ans, 'laugh']],
    pose: (t, u, b) => { const sn = t > EV.tr_smell && t < EV.tr_ans;
      return Object.assign(b, { x: 620, y: 1590 + sway(t) * 0.4, s: 1.16, flip: 1, rot: sway(t) * 0.004, look: sn ? [0.5, 0.5] : [0, -0.1], hand: sn ? [90, -330] : [150, -270], handF: t > EV.tr_ans ? [-150, -380] : [-120, -230], squint: sn, tailUp: t > EV.tr_ans }); },
    afterCat: (t, u, P) => { for (let i = 0; i < 7; i++) { const a = -1.1 + i * 0.36, x = P.x + Math.sin(a) * 120 * P.s, y = P.y - 250 * P.s + Math.cos(a) * 40 * P.s; doktorLoaf(x, y, 0.22 * P.s, a + 1.5708, { key: 23070 + i, label: 0, len: 260 }); }
      if (t > EV.tr_smell - 0.3) for (let i = 0; i < 4; i++) { const k = (t * 0.9 + i / 4) % 1; pencil(spline([[P.x - 60 + i * 40, P.y - 300 * P.s - k * 200], [P.x - 40 + i * 40, P.y - 320 * P.s - k * 200], [P.x - 60 + i * 40, P.y - 340 * P.s - k * 200]], false, 5), { w: 4, col: '#e86a8a', a: 1 - k, pass2: false }); } },
    cam: () => [[S0.train, 620, 1100, 0.26], [EV.tr_long, 560, 1060, 0.26], [EV.tr_smell, 620, 1120, 0.3], [EV.tr_ans, 600, 1080, 0.26], [S1.train, 600, 1100, 0.28]]
  };
  TRANS_IN.train = { a: 0.2, b: 0.5, runA: 1, fx(k, t, A, B) {          // зелёный вагон проезжает сквозь кадр
    const e = sm(k), X = 1400 - e * 2900; drawBuf(e < 0.5 ? A : B, 1, 540, 960);
    scr(() => { const c = rect(X, 300, 1500, 1400, { wash: '#2a7a4a', washA: 1, w: 4, col: '#0a2a14' }); shadeG(c.path, 0, 300, 0, 1700, '#0a3a1a', 0.4); rect(X, 1180, 1500, 60, { wash: '#c8341e', washA: 1, line: false });
      for (let i = 0; i < 4; i++) { rect(X + 80 + i * 350, 460, 240, 300, { wash: '#f8c080', washA: 1, w: 6, col: '#0a2a14' }); } rect(X + 600, 820, 160, 360, { wash: '#1a4a2a', washA: 1, w: 3 }); for (let i = 0; i < 3; i++) ell(X + 200 + i * 500, 1720, 70, 70, { wash: '#2a2a2a', washA: 1, w: 3 }); txt('ЭР2', X + 300, 1120, 60, { font: 'Osw', col: '#f4d040' }); });
  } };
})();
