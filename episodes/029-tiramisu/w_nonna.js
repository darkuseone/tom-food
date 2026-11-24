/* 029 — `nonna`: «Основа старая: желтки, взбитые с сахаром. Итальянские бабушки давали их внукам для бодрости.» Деревенская кухня Венето:
   каменные стены, дровяная плита, медные кастрюли и сковороды, связки чеснока и перца, колбаски под балкой, буфет с расписными тарелками,
   окно на виноградники и Доломиты, в дверь заглядывают куры; бабушка в платке и фартуке взбивает желтки, внуки за столом с ложками. Том —
   в льняной рубахе и соломенной шляпе, помогает. Главный свет — солнце из окна, второй — огонь плиты. По словам: «желтки,» — Том разбивает
   яйцо, желток плюхается в миску; «сахаром.» — сахар сыплется струйкой; «бабушки» — бабушка яростно взбивает, крем пенится; «внукам» —
   внуки протягивают ложки; «бодрости.» — внуки подпрыгивают, как пружинки (гэг). Переход В сцену: огромная скорлупа трескается по зигзагу
   и половинки разъезжаются. */
(() => {
  EV.nn_yolk = wtw('s1', 'желтки,');
  EV.nn_sug = wtw('s1', 'сахаром.');
  EV.nn_nonna = wtw('s1', 'бабушки');
  EV.nn_kids = wtw('s1', 'внукам');
  EV.nn_boost = wtw('s1', 'бодрости.');
  SHAKES.push([EV.nn_boost + 0.2, 0.12, 5]);
  KEYW.push('бодрости.');

  function outside(t) {                                                   // вид в окне: виноградники, кипарисы, Доломиты
    vgrad(-300, 700, ['#7ab0e0', '#c8e0f0', '#f0ecd8']); sil([[-300, 400], [-100, 120], [60, 260], [200, 80], [380, 300], [600, 160], [800, 420]], '#a8b0c0', 0.9); for (const [x, y] of [[-100, 120], [200, 80], [600, 160]]) poly([[x - 40, y + 40], [x, y], [x + 40, y + 40]], { wash: '#f8f8f8', washA: 1, line: false });
    rect(-300, 400, 1100, 400, { wash: '#8ab04a', washA: 1, line: false }); for (let r = 0; r < 5; r++) for (let i = 0; i < 12; i++) ell(-280 + i * 90 + (r % 2) * 45, 430 + r * 40, 18, 10, { wash: '#4a7a2a', washA: 1, line: false });
    for (const x of [-200, 500]) { pencil([[x, 440], [x, 330]], { w: 4, col: '#4a3a1a', pass2: false }); blob([[x - 16, 400], [x - 12, 300], [x, 240], [x + 12, 300], [x + 16, 400]], { wash: '#2a5a2a', washA: 1, line: false }); }
  }
  function kitchen(t) {                                                   // стены, окно, плита, медь, буфет, связки, колбаски
    vgrad(-500, 1500, ['#a8885a', '#c8a878', '#b89868']); for (let r = 0; r < 12; r++) for (let i = 0; i < 9; i++) { const x = -500 + i * 260 + (r % 2) * 130, y = -500 + r * 150; blob([[x, y], [x + 250, y + 8], [x + 250, y + 140], [x, y + 146]], { wash: ['#c8a878', '#b8986a', '#d0b084'][(i + r) % 3], washA: 1, w: 1, col: '#7a5a3a' }); }
    push(260, 380, 1); const w = rect(-200, -220, 400, 400, { wash: '#c8e0f0', washA: 1, w: 10, col: '#5a3a1a', key: 29300 }); ctx.save(); ctx.clip(w.path); outside(t); ctx.restore(); pencil([[0, -220], [0, 180]], { w: 6, col: '#5a3a1a', pass2: false }); pencil([[-200, -20], [200, -20]], { w: 6, col: '#5a3a1a', pass2: false }); for (let i = 0; i < 5; i++) ell(-170 + i * 30, 190, 16, 12, { wash: '#d84a3a', washA: 1, w: 1 }); pop();
    push(900, 1150, 1); rect(-200, -300, 400, 300, { wash: '#2a2a2e', washA: 1, w: 3, col: '#0a0a0a', key: 29301 }); rect(-160, -120, 140, 80, { wash: '#1a0a04', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) { const fh = 50 + Math.sin(t * 9 + i) * 16; blob([[-150 + i * 30, -40], [-142 + i * 30, -40 - fh], [-130 + i * 30, -40]], { wash: '#ff9030', washA: 1, line: false }); } glow(-90, -80, 120, 'rgba(255,150,60,1)', 0.32); ell(80, -310, 70, 16, { wash: '#8a8a8a', washA: 1, w: 2 }); blob([[20, -310], [10, -390], [150, -390], [140, -310]], { wash: '#c8783a', washA: 1, w: 2 }); for (let j = 0; j < 3; j++) { const ph = (t * 0.5 + j / 3) % 1; ell(80, -400 - ph * 120, 30 + ph * 20, 16, { wash: '#ffffff', washA: 0.3 * (1 - ph), line: false }); } pop();
    for (let i = 0; i < 5; i++) { push(560 + i * 90, -240, 1); pencil([[0, 0], [0, 60]], { w: 2, col: '#3a3a3a', pass2: false }); ell(0, 110, 40, 46, { wash: '#c8783a', washA: 1, w: 2, col: '#4a2008' }); pop(); }
    for (let i = 0; i < 6; i++) { push(-60 + i * 50, -300, 1); pencil([[0, 0], [0, 80]], { w: 2, col: '#6a5a3a', pass2: false }); blob([[-10, 80], [-12, 200], [0, 220], [12, 200], [10, 80]], { wash: '#8a2a1a', washA: 1, w: 1.4 }); pop(); }
    push(620, 620, 1); rect(-150, -200, 300, 400, { wash: '#6a8a6a', washA: 1, w: 3, col: '#2a3a2a' }); for (let r = 0; r < 2; r++) for (let i = 0; i < 3; i++) { ell(-90 + i * 90, -110 + r * 150, 38, 38, { wash: '#f8f4ec', washA: 1, w: 2, col: '#2a4a8a' }); pencil(ellPts(-90 + i * 90, -110 + r * 150, 24, 24, 0, 0, 14), { w: 3, col: ['#2a4a8a', '#c8302a', '#e8a020'][i], pass2: false }); } pop();
  }
  function family(t) {                                                    // бабушка взбивает, внуки с ложками, куры в двери
    const whisk = t > EV.nn_nonna, boost = t > EV.nn_boost;
    human(300, 1300, 1.05, t, { body: '#3a3a5a', legs: '#2a2a2a', hair: '#c8c8c8', face: whisk ? 'grin' : 'smile', armL: 'hold', armR: whisk ? (Math.sin(t * 18) > 0 ? 'up' : 'hold') : 'hold', look: 0.4, seed: 29310, long: 1, hat: 'scarf', hatCol: '#c84a3a' }); rect(250, 1300 - 220, 100, 180, { wash: '#f4ecd8', washA: 1, w: 1.4 });
    yolkBowl(360, 1120, 0.6, t, { whisk: whisk, cream: t > EV.nn_nonna + 0.4, key: 29311 });
    for (const [x, sd] of [[900, 29312], [1040, 29313]]) { const j = boost ? Math.abs(Math.sin((t - EV.nn_boost) * 10 + sd)) * 60 : 0; human(x, 1320 - j, 0.7, t, { body: sd % 2 ? '#e8c040' : '#3a8a5a', legs: '#3a3a5a', hair: '#6a3a1a', face: boost ? 'grin' : t > EV.nn_kids ? 'smile' : 'calm', armL: t > EV.nn_kids ? 'up' : 'hold', armR: boost ? 'up' : 'hold', look: -0.5, seed: sd, flip: -1 }); if (t > EV.nn_kids) { push(x - 30, 1320 - j - 240, 1, -0.4); pencil([[0, 0], [0, -60]], { w: 4, col: '#c8ccd4', pass2: false }); ell(0, 6, 10, 14, { wash: '#c8ccd4', washA: 1, w: 1 }); pop(); } }
    for (let i = 0; i < 2; i++) { const x = -100 + i * 90 + Math.sin(t * 2 + i) * 20; push(x, 1300, 0.6, 0, i ? -1 : 1); blob([[-40, 0], [-50, -40], [-20, -70], [30, -60], [40, -20], [20, 0]], { wash: '#f4ecd8', washA: 1, w: 2, col: '#6a5a3a' }); ell(30, -76, 16, 16, { wash: '#f4ecd8', washA: 1, w: 1.6 }); poly([[24, -94], [30, -104], [36, -92]], { wash: '#c8201a', washA: 1, w: 1 }); poly([[44, -76], [58, -72], [44, -68]], { wash: '#f0a020', washA: 1, w: 1 }); pop(); }
  }
  function table(t) {                                                     // стол Тома: яйца в корзинке, скорлупа, сахарница, миска
    const tb = rect(-500, 1440, 2200, 600, { wash: '#a8805a', washA: 1, w: 3, col: '#4a3018', key: 29320 }); shadeG(tb.path, 0, 1440, 0, 1900, '#6a4a2a', 0.45); for (let i = 0; i < 6; i++) pencil([[-500, 1470 + i * 70], [1700, 1476 + i * 70]], { w: 2, col: '#7a5a3a', a: 0.5, pass2: false });
    push(180, 1450, 1); blob([[-80, 0], [-90, -60], [90, -60], [80, 0]], { wash: '#c89a5a', washA: 1, w: 2.4 }); for (let i = 0; i < 6; i++) ell(-60 + (i % 3) * 50, -66 - Math.floor(i / 3) * 24, 22, 28, { wash: '#f8ecd8', washA: 1, w: 1.6, col: '#a89a7a' }); pop();
    yolkBowl(420, 1450, 0.9, t, { key: 29321, cream: t > EV.nn_nonna + 0.4 });
    if (t > EV.nn_yolk && t < EV.nn_yolk + 0.6) { const q = (t - EV.nn_yolk) / 0.6; ell(420, lerp(1220, 1400, q * q), 18, 16, { wash: '#f8b020', washA: 1, w: 1.4, col: '#a8701a' }); }
    if (t > EV.nn_sug && t < EV.nn_sug + 0.9) for (let i = 0; i < 10; i++) ell(440 + Math.sin(i) * 4, 1260 + i * 14, 3, 3, { wash: '#ffffff', washA: 1, line: false });
    push(1000, 1450, 1); blob([[-40, 0], [-46, -70], [-20, -90], [20, -90], [46, -70], [40, 0]], { wash: '#f4f0e8', washA: 1, w: 2, col: '#2a4a8a' }); txt('ZUCCHERO', 0, -40, 12, { font: 'Osw', col: '#2a4a8a' }); pop();
    castShadow(640, 1450, 320, 90, -0.5, 0.25);
  }
  WORLD.nonna = (t, u, cat) => {
    lay(9, () => { kitchen(t); hatch(pathOf([[-500, -500], [1700, -500], [1700, 900], [-500, 900]]), bbOf([[-500, -500], [1700, 900]]), { gap: 26, a: 0.05, col: '#3a2a1a', ang: 0.9, key: 29435 }); shadeG(pathOf([[-500, 600], [1700, 600], [1700, 1440], [-500, 1440]]), 0, 1440, 0, 600, '#2a1a10', 0.18); haze('#fff0d0', 0.05); });
    lay(2.6, () => { family(t); shaft(260, 380, 300, 1400, -0.4, 'rgba(255,245,210,1)', 0.15); });
    lay(1, () => { lightPool(560, 1460, 660, 120, 'rgba(255,235,190,1)', 0.34); cat(); table(t); });
    lay(0.65, () => { push(-150, 200, 1.4); for (let i = 0; i < 4; i++) { const sw = Math.sin(t * 1.3 + i) * 8; pencil(spline([[i * 40, 0], [i * 36 + sw, 200], [i * 30 + sw * 2, 380]], false, 5), { w: 3, col: '#6a8a2a', pass2: false }); for (let j = 0; j < 4; j++) ell(i * 30 + sw * 1.5 + 6, 120 + j * 70, 14, 18, { wash: '#6a2a6a', washA: 1, w: 1 }); } pop(); push(1230, 1950, 1.4); ell(0, -40, 120, 40, { wash: '#c8783a', washA: 1, w: 3 }); pop();
      motes(14, [-200, 300, 1300, 1500], '#fff8e0', t, 29390, { sp: 3, sz: 3, a: 0.4, wob: 4 }); moodDark(560, 1000, 520, 1500, '#140c06', 0.38); });
  };
  DIR.nonna = {
    outfit: 'dacha', light: { side: -1, rim: '#fff0c8' }, grade: ['#ffd8a0', 0.05],
    act: () => [[S0.nonna, 'talk'], [EV.nn_yolk, 'grin'], [EV.nn_nonna, 'awe'], [EV.nn_kids, 'grin'], [EV.nn_boost, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 720, y: 1600, s: 1.15, flip: true, look: t > EV.nn_nonna && t < EV.nn_boost ? [-0.9, -0.1] : [-0.6, 0.5], hand: t < EV.nn_sug + 0.6 ? [260, -270] : [200, -240 + Math.abs(Math.sin(t * 16)) * 20], handF: [-90, -230], prop: t < EV.nn_sug + 0.6 ? undefined : 'whiskP', tailUp: t > EV.nn_boost }),
    cam: () => [[S0.nonna, 560, 1040, 0.22], [EV.nn_yolk, 560, 1110, 0.28], [EV.nn_kids, 620, 1100, 0.27], [S1.nonna, 640, 1110, 0.28]]
  };
  // ---------------------------------------------------------------- переход: огромная скорлупа трескается по зигзагу, половинки разъезжаются
  TRANS_IN.nonna = { a: 0.2, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const crack = clamp(k / 0.35), open = sm(clamp((k - 0.35) / 0.65)); drawBuf(k < 0.35 ? A : B, 1, 540, 960);
    scr(() => { const zz = []; for (let i = 0; i <= 12; i++) zz.push([i * 90, 960 + (i % 2 ? 60 : -60)]);
      if (k < 0.35) { pencil(zz.slice(0, Math.ceil(crack * 13)), { w: 8, col: '#3a2a1a', pass2: false }); return; }
      for (const sd of [-1, 1]) { ctx.save(); ctx.translate(0, sd * open * 1100); ctx.beginPath(); if (sd < 0) { ctx.moveTo(-10, -10); zz.forEach(([x, y]) => ctx.lineTo(x, y)); ctx.lineTo(1090, -10); } else { ctx.moveTo(-10, 1930); zz.forEach(([x, y]) => ctx.lineTo(x, y)); ctx.lineTo(1090, 1930); } ctx.closePath(); ctx.clip(); drawBuf(A, 1, 540, 960, 1, null, 0, sd * open * 1100); ctx.restore(); } pencil(zz.map(([x, y]) => [x, y - open * 1100]), { w: 10, col: '#f8ecd8', pass2: false }); pencil(zz.map(([x, y]) => [x, y + open * 1100]), { w: 10, col: '#f8ecd8', pass2: false }); });
  } };
})();
