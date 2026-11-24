/* 026 — `edo`: «Двести лет назад в Токио Ханая Ёхэй слепил нигири — фастфуд втрое больше нынешнего!» Ночной Эдо у моста Рёгоку: над рекой —
   горбатый деревянный мост с прохожими-силуэтами, лодки-ятакабунэ с фонарями, фейерверк ханаби; на набережной — лоток-ятай под тесовой
   крышей с норэн «すし», цепочка красных фонарей, вывеска-андон. Ханая Ёхэй (повязка, синяя куртка) лепит рис в ладони и шлёпает рыбу; едоки стоя:
   носильщик с коромыслом, самурай с двумя мечами, девушка с зонтиком. Том — разносчик в индиговой хаппи с гербом 寿. По словам: «Токио» —
   плашка «ЭДО = ТОКИО · 1824»; «Ёхэй слепил» — ладони Ханаи сжимают рис, рыба ложится сверху; «фастфуд» — над рекой бахает фейерверк, едоки
   хватают нигири и жуют на ходу; «втрое больше» — Том поднимает огромное нигири, рядом нынешнее крошечное и «×3». Главный свет — фонари
   лотка, второй — вспышки фейерверка. Переход В сцену: полотна норэн падают сверху и расходятся в стороны. */
(() => {
  EV.ed_tokyo = wtw('s4', 'Токио');
  EV.ed_press = wtw('s4', 'слепил');
  EV.ed_fast = wtw('s4', 'фастфуд');
  EV.ed_big = wtw('s4', 'втрое');
  SHAKES.push([EV.ed_fast + 0.1, 0.15, 6]);
  KEYW.push('фастфуд');
  const boom = t => t > EV.ed_fast ? Math.exp(-(t - EV.ed_fast) * 2.4) : 0;

  function sky(t) {                                                       // ночное небо, фейерверк, мост, река с лодками
    vgrad(-500, 1000, ['#0a0e2a', '#1a2050', '#2a2a5a']);
    const r0 = rng(27000); for (let i = 0; i < 40; i++) ell(-400 + r0() * 1900, -400 + r0() * 700, 2, 2, { wash: '#f8f4e0', washA: 0.6 + 0.4 * Math.sin(t * 3 + i), line: false });
    for (const [x, y, t0, c] of [[300, 120, EV.ed_fast, '#ffb040'], [800, 40, EV.ed_fast + 0.35, '#ff5a7a'], [560, -60, EV.ed_fast + 0.8, '#80e0ff']]) { if (t < t0) continue; const q = clamp((t - t0) / 1.4), R = 40 + 280 * sm(q); for (let i = 0; i < 18; i++) { const a = i / 18 * 6.28; pencil([[x + Math.cos(a) * R * 0.6, y + Math.sin(a) * R * 0.6 + q * 40], [x + Math.cos(a) * R, y + Math.sin(a) * R + q * 60]], { w: 4, col: c, a: 1 - q, pass2: false }); } glow(x, y, R * 1.2, 'rgba(255,200,140,1)', 0.25 * (1 - q)); }
    rect(-500, 620, 2200, 500, { wash: '#1a2448', washA: 1, line: false }); for (let i = 0; i < 14; i++) { const y = 640 + i * 24, x = ((t * 16 + i * 170) % 1800) - 400; pencil([[x, y], [x + 120, y]], { w: 2, col: '#ffc870', a: 0.25, pass2: false }); }
    push(500, 560, 1); const br = spline([[-900, 80], [-400, -60], [0, -100], [400, -60], [900, 80]], false, 30); pencil(br, { w: 26, col: '#3a2a1a', pass2: false }); pencil(br.map(([x, y]) => [x, y - 40]), { w: 4, col: '#5a4028', pass2: false }); for (let i = 0; i < 18; i++) { const x = -850 + i * 100, y = 80 - 180 * Math.exp(-(x * x) / 400000) ; pencil([[x, y - 40], [x, y + 160]], { w: 8, col: '#2a1a0a', pass2: false }); }
    for (let i = 0; i < 10; i++) { const x = -700 + ((t * 30 + i * 150) % 1400), y = 40 - 180 * Math.exp(-(x * x) / 400000); sil([[x - 10, y - 46], [x + 10, y - 46], [x + 14, y], [x - 14, y]], '#0a0a18', 1); ell(x, y - 58, 9, 10, { wash: '#0a0a18', washA: 1, line: false }); if (i % 3 === 0) { ell(x + 14, y - 30, 6, 9, { wash: '#ffb050', washA: 1, line: false }); } } pop();
    for (const [x, s] of [[100, 0.7], [1000, 0.6]]) { const bx = x + Math.sin(t * 0.4 + x) * 40; push(bx, 760, s); blob([[-180, 0], [-160, 40], [160, 40], [190, -6]], { wash: '#3a2a1a', washA: 1, w: 2 }); rect(-120, -90, 240, 90, { wash: '#6a4a2a', washA: 1, w: 2 }); poly([[-140, -90], [0, -140], [140, -90]], { wash: '#2a1a0a', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) chochin(-90 + i * 60, -100, 0.3, t, { key: 27010 + i + x }); pop(); }
  }
  function stall(t) {                                                     // лоток-ятай: тесовая крыша, норэн, фонари, андон, полка с рыбой, едоки
    push(320, 0, 1); rect(-360, 560, 720, 40, { wash: '#4a3018', washA: 1, w: 3, col: '#1a0a04' }); poly([[-420, 560], [0, 420], [420, 560]], { wash: '#5a3a1e', washA: 1, w: 3, col: '#1a0a04', key: 27020 }); for (let i = 0; i < 12; i++) pencil([[-400 + i * 70, 556 - Math.max(0, 140 - Math.abs(-400 + i * 70) / 3)], [-400 + i * 70, 560]], { w: 1.4, col: '#2a1808', pass2: false });
    for (const x of [-340, 340]) rect(x - 14, 560, 28, 760, { wash: '#4a3018', washA: 1, w: 2, col: '#1a0a04' });
    noren(-330, 600, 660, 180, '#24336a', t, 'すし', { key: 27021, n: 4 });
    for (let i = 0; i < 5; i++) chochin(-300 + i * 150, 830, 0.55, t, { label: ['花', '屋', '与', '兵', '衛'][i], key: 27030 + i });
    push(-460, 1100, 1); rect(-50, -200, 100, 200, { wash: '#f4ecd4', washA: 1, w: 3, col: '#3a2410' }); txt('寿司', 0, -100, 40, { font: 'Osw', col: '#a8241e' }); glow(0, -100, 140, 'rgba(255,190,110,1)', 0.25); rect(-10, 0, 20, 200, { wash: '#3a2410', washA: 1, w: 1.4 }); pop();
    push(0, 1120, 1); rect(-330, -16, 660, 20, { wash: '#6a4a24', washA: 1, w: 2 }); for (let i = 0; i < 6; i++) fish(-260 + i * 100, -24, 0.6, 0, { key: 27040 + i }); pop();
    pop();
  }
  function people(t) {                                                    // Ханая Ёхэй лепит, едоки: самурай, носильщик, девушка с зонтиком
    const press = t > EV.ed_press && t < EV.ed_fast + 0.4, eat = t > EV.ed_fast;
    human(320, 1330, 1.15, t, { body: '#24336a', legs: '#1a1a2a', hair: '#1a1410', face: press ? 'smile' : 'calm', armL: 'hold', armR: press ? (Math.sin(t * 12) > 0 ? 'hold' : 'up') : 'hold', look: 0.2, seed: 27050 }); jpHat(320, 1330, 1.15, 'hachi', '#f4f0e8');
    if (press) { const k = Math.abs(Math.sin(t * 6)); push(330, 1150, 1); ell(-30 + k * 10, 0, 30, 18, { wash: '#e2b48e', washA: 1, w: 1.6 }); ell(30 - k * 10, 0, 30, 18, { wash: '#e2b48e', washA: 1, w: 1.6 }); nigiri(0, 14, 0.28, t, { kind: 'tuna', big: 1, key: 27051 }); pop(); }
    human(60, 1330, 1.05, t, { body: '#3a3a3a', legs: '#2a2a3a', hair: '#1a1410', face: eat ? 'grin' : 'calm', armL: 'hold', armR: eat ? 'up' : 'hold', look: 0.4, seed: 27052, prop: 'sword', long: 1 }); jpHat(60, 1330, 1.05, 'mage'); obi(60, 1330, 1.05, '#8a2a2a');
    if (eat) { push(130, 940, 1); nigiri(0, 0, 0.22, t, { kind: 'tuna', big: 1, key: 27053 }); pop(); }
    human(1000, 1330, 1.0, t, { body: '#c84a6a', legs: '#2a1a2a', hair: '#1a1410', face: eat ? 'smile' : 'calm', armL: 'hold', armR: 'hold', look: -0.5, seed: 27054, flip: -1, long: 1 }); obi(1000, 1330, 1.0, '#f0d040', -1); push(1040, 900, 1); pencil([[0, 0], [0, -200]], { w: 3, col: '#3a2a1a', pass2: false }); blob([[-120, -180], [0, -240], [120, -180], [0, -200]], { wash: '#e8a030', washA: 1, w: 2 }); for (let i = 0; i < 6; i++) pencil([[0, -240], [-120 + i * 48, -184]], { w: 1.2, col: '#8a5a10', pass2: false }); pop();
    human(780, 1340, 0.95, t, { body: '#6a5a3a', legs: '#3a2a1a', hair: '#1a1410', face: eat ? 'grin' : 'calm', armL: 'hold', armR: eat ? 'up' : 'hold', look: -0.3, seed: 27055, flip: -1 }); jpHat(780, 1340, 0.95, 'hachi', '#c8443a', -1);
  }
  function counter(t) {                                                   // прилавок лотка: доска, кадка риса, большое и маленькое нигири «×3», чайник
    const tb = rect(-500, 1440, 2200, 600, { wash: '#7a5a34', washA: 1, w: 3, col: '#2a1408', key: 27060 }); shadeG(tb.path, 0, 1440, 0, 1900, '#3a2410', 0.5); for (let i = 0; i < 8; i++) pencil([[-500, 1470 + i * 50], [1700, 1476 + i * 50]], { w: 1.4, col: '#4a3018', a: 0.5, pass2: false });
    hangiri(150, 1450, 0.55, t, { key: 27061 });
    if (t > EV.ed_big) { const k = popK(t, EV.ed_big, 0.4); push(380, 1460, k); nigiri(0, 0, 0.62, t, { kind: 'tuna', big: 1, key: 27062 }); nigiri(170, 0, 0.3, t, { kind: 'tuna', key: 27063 }); txt('×3', 100, -150, 70, { font: 'Osw', col: '#ffe070' }); txt('1824', 0, 60, 30, { font: 'Osw', col: '#fbf4e4' }); txt('сегодня', 170, 60, 26, { font: 'Hand', col: '#fbf4e4' }); pop(); }
    push(1060, 1470, 1); blob([[-40, 0], [-50, -60], [-30, -90], [30, -90], [50, -60], [40, 0]], { wash: '#3a3a3a', washA: 1, w: 2 }); pencil(spline([[40, -60], [80, -80], [96, -110]], false, 4), { w: 6, col: '#3a3a3a', pass2: false }); pop();
    castShadow(560, 1450, 320, 90, -0.5, 0.25);
  }
  function front(t) {                                                     // передний план: фонарь сверху, ветка ивы, перила моста
    push(1180, 140, 1.5); for (let i = 0; i < 8; i++) { const sw = Math.sin(t * 1.2 + i) * 14; pencil(spline([[i * 20, 0], [i * 18 + sw, 300], [i * 16 + sw * 2, 600 - i * 30]], false, 6), { w: 2.4, col: '#4a7a3a', pass2: false }); } pop();
    push(-160, 300, 1.6); chochin(0, 0, 1, t, { label: '鮨', key: 27070 }); pop();
    push(-200, 1960, 1.5); rect(0, -200, 1600, 40, { wash: '#4a3018', washA: 1, w: 3 }); for (let i = 0; i < 6; i++) rect(i * 160, -200, 30, 300, { wash: '#4a3018', washA: 1, w: 2 }); pop();
  }
  WORLD.edo = (t, u, cat) => {
    lay(18, () => { sky(t); haze('#2a2a5a', 0.06); });
    lay(4.2, () => { stall(t); });
    lay(2.6, () => { people(t); lightPool(320, 1330, 520, 110, 'rgba(255,180,110,1)', 0.35); });
    lay(1, () => { lightPool(560, 1460, 620, 120, 'rgba(255,190,120,1)', 0.35); cat(); counter(t); if (boom(t) > 0.05) screenFill('rgba(255,200,150,1)', boom(t) * 0.12, 'lighter'); });
    lay(0.65, () => { front(t); motes(12, [-200, 300, 1300, 1500], '#ffd8a0', t, 27090, { sp: -5, sz: 3, a: 0.4, wob: 4 }); moodDark(560, 1000, 520, 1500, '#060818', 0.5); });
  };
  DIR.edo = {
    outfit: 'edoA', light: { side: -1, rim: '#ffc080' }, grade: ['#ff9a50', 0.07],
    act: () => [[S0.edo, 'talk'], [EV.ed_tokyo, 'proud'], [EV.ed_press, 'awe'], [EV.ed_fast, 'laugh'], [EV.ed_big, 'shock'], [EV.ed_big + 0.6, 'grin']],
    pose: (t, u, b) => { const big = t > EV.ed_big;
      return Object.assign(b, { x: 720, y: 1600, s: 1.15, flip: true, look: t > EV.ed_press && t < EV.ed_fast ? [-0.9, 0.1] : t > EV.ed_fast && t < EV.ed_big ? [0, -0.9] : [-0.4, 0.3],
        hand: big ? [110, -420] : [160, -230], handF: big ? [-110, -420] : [-80, -220], prop: big ? 'nigiriBigP' : undefined, propAng: 0, tailUp: t > EV.ed_fast }); },
    hud: t => infoPlate(t, EV.ed_tokyo, EV.ed_big - 0.1, { kind: 'num', title: 'ЭДО = ТОКИО', big: '1824', sub: 'нигири — уличный фастфуд' }),
    cam: () => [[S0.edo, 540, 980, 0.2], [EV.ed_press, 560, 1060, 0.26], [EV.ed_fast, 560, 1000, 0.24], [EV.ed_big, 600, 1120, 0.3], [S1.edo, 610, 1140, 0.32]]
  };
  // ---------------------------------------------------------------- переход: полотна норэн падают сверху и расходятся в стороны
  TRANS_IN.edo = { a: 0.25, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const drop = sm(clamp(k / 0.4)), open = sm(clamp((k - 0.4) / 0.6)); drawBuf(k < 0.4 ? A : B, 1, 540, 960);
    scr(() => { for (let i = 0; i < 4; i++) { const w = 270, x0 = i * w, dir = i < 2 ? -1 : 1, dx = dir * open * (i % 2 === (i < 2 ? 0 : 1) ? 700 : 420), sw = Math.sin(t * 8 + i) * 18 * (1 - open);
      push(x0 + dx, 0, 1); const p = poly([[2, -40], [w - 2, -40], [w - 2 + sw, (drop * 2000) - 40], [2 + sw, (drop * 2000) - 40]], { wash: '#24336a', washA: 1, w: 3, col: '#0a1238', key: 27098 + i }); shadeG(p.path, 0, 0, w, 0, '#000000', 0.2); if (i === 1 || i === 2) txt(i === 1 ? 'す' : 'し', i === 1 ? w - 60 : 60, 900 * drop, 160, { font: 'Osw', col: '#fbf4e4' }); pop(); } });
  } };
})();
