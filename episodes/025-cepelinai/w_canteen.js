/* 025 — `canteen`: «Первые рецепты — лишь в 1930-х, а в народ их вывели заводские столовые.» Две части: «1930-е» — на кухонном столе выезжает
   тонкая кулинарная книжка 30-х с первым рецептом и рисунком клёцки; «столовые» — большая заводская столовая 1950-х: кафельные стены, плакаты,
   длинные столы, рабочие в спецовках и кепках с подносами, раздача с котлами и паром, окна на цеха с трубами. Главный свет — ряд ламп-тарелок
   под потолком (холодно-белый) + пар от котлов. Том — повар раздачи в белом колпаке, черпаком выкладывает цеппелины на подносы.
   По словам: «Первые рецепты» — книжка 1930-х раскрывается крупно; «1930-х» — табличка года; «в народ» — камера отъезжает: очередь
   рабочих; «столовые» — поднос за подносом с цеппелинами едет по раздаче, счётчик «ПОРЦИЙ: 1 → 1000». Переход В сцену: двустворчатые двери
   столовой распахиваются на камеру. */
(() => {
  EV.cn_first = wtw('s8', 'Первые');
  EV.cn_30 = wtw('s8', '1930-х,');
  EV.cn_ppl = wtw('s8', 'народ');
  EV.cn_cant = wtw('s8', 'столовые.');
  SHAKES.push([EV.cn_ppl, 0.1, 4]);
  KEYW.push('1930-х,', 'столовые.');

  function hall(t) {                                                    // кафель, окна на заводские трубы, плакаты, лампы
    vgrad(-800, 1500, ['#c8d0c8', '#d8dcd0', '#c8c0a8']);
    for (let x = -800; x < 1900; x += 60) for (let y = 500; y < 1440; y += 60) rect(x, y, 58, 58, { wash: ((x + y) / 60) % 2 ? '#e8ece4' : '#d8e0d4', washA: 1, w: 0.8, col: '#8a9a8a' });
    rect(-800, 480, 2700, 24, { wash: '#4a7a6a', washA: 1, w: 2, col: '#1a3a2a' });
    for (let i = 0; i < 4; i++) { push(-500 + i * 520, 40, 1); const w = rect(-180, -300, 360, 420, { wash: '#a8b8c8', washA: 1, w: 8, col: '#4a5a5a', key: 25700 + i }); ctx.save(); ctx.clip(w.path); vgrad(-300, 120, ['#8a98a8', '#d8d0c0']); for (let q = 0; q < 3; q++) { rect(-150 + q * 110, -150 + q * 20, 50, 270, { wash: '#7a6a5a', washA: 1, w: 1.2 }); for (let s = 0; s < 3; s++) { const k = (t * 0.3 + s / 3 + q * 0.2) % 1; ell(-125 + q * 110 + k * 40, -170 - k * 140, 20 + k * 30, 14 + k * 20, { wash: '#b8b0a8', washA: 0.6 * (1 - k), line: false }); } } ctx.restore(); pencil([[0, -300], [0, 120]], { w: 6, col: '#4a5a5a' }); pop(); }
    for (const [x, tx, c] of [[-240, 'ПРИЯТНОГО\nАППЕТИТА!', '#c8221a'], [800, 'МЕНЮ', '#2a5a3a']]) { push(x, 300, 1); rect(-150, -100, 300, 200, { wash: '#f4ecd6', washA: 1, w: 3, col: c }); tx.split('\n').forEach((s, i) => txt(s, 0, -30 + i * 50, 34, { font: 'Osw', col: c })); if (tx === 'МЕНЮ') { ['Щи — 12', 'ЦЕППЕЛИНЫ — 18', 'Компот — 5'].forEach((s, i) => txt(s, 0, 20 + i * 30, 22, { font: 'Hand', col: '#2a2a2a' })); } pop(); }
    for (let i = 0; i < 6; i++) { const x = -500 + i * 340; pencil([[x, -800], [x, -440]], { w: 3, col: '#3a3a3a', pass2: false }); ell(x, -430, 90, 22, { wash: '#f4f4ec', washA: 1, w: 2, col: '#5a5a5a' }); if (i % 2 === 0) glow(x, -420, 160, 'rgba(240,250,255,1)', 0.25); }
  }
  function workers(t) {                                                 // очередь рабочих с подносами, столы
    const q = t > EV.cn_ppl ? 1 : 0;
    for (let i = 0; i < 5; i++) { const x = 900 + i * 110 - q * Math.min(1, (t - EV.cn_ppl) * 0.3) * 60; human(x, 1290, 1.0, t, { body: ['#3a4a6a', '#5a5a4a', '#4a3a3a', '#3a5a4a', '#6a5a3a'][i], legs: '#2a2a2a', hair: '#3a2a1a', face: q ? 'grin' : 'smile', armL: 'hold', armR: 'hold', look: -0.5, seed: 25710 + i, flip: -1, hat: 'cap', hatCol: '#3a3a3a' }); push(x - 40, 1290 - 150, 0.8); rect(-80, -8, 160, 16, { wash: '#a8acb0', washA: 1, w: 1.6 }); if (t > EV.cn_cant + i * 0.12) cepelinas(-30, -20, 0.22, t, { smet: 1, key: 25720 + i }); pop(); }
    for (let i = 0; i < 2; i++) { push(-380 + i * 360, 1300, 1); rect(-160, -100, 320, 24, { wash: '#a8743a', washA: 1, w: 2 }); for (const sd of [-1, 1]) pencil([[sd * 140, -76], [sd * 140, 0]], { w: 8, col: '#5a3a1a', pass2: false }); human(-80, 0, 0.9, t, { body: '#4a4a5a', legs: '#2a2a2a', hair: '#2a1a0a', face: 'grin', armL: 'hold', armR: 'up', seed: 25730 + i, hat: 'cap', hatCol: '#4a4a4a' }); cepelinas(40, -110, 0.2, t, { smet: 1, steam: 1, key: 25735 + i }); pop(); }
  }
  function counter(t) {                                                 // раздача (после cat): котлы с паром, черпаки, подносы, счётчик порций, книжка 30-х
    const c = rect(-500, 1440, 2100, 700, { wash: '#b8bcc0', washA: 1, w: 3, col: '#3a3e44', key: 25740 }); shadeG(c.path, 0, 1440, 0, 1700, '#6a6e74', 0.4); pencil([[-500, 1460], [1600, 1460]], { w: 6, col: '#e8ecf0', a: 0.6, pass2: false });
    for (const x of [140, 1000]) { push(x, 1450, 1); const p = blob([[-110, 0], [-120, -150], [120, -150], [110, 0]], { wash: '#8a8e94', washA: 1, w: 2.4, col: '#2a2e34' }); shadeG(p.path, 120, 0, -60, 0, '#4a4e54', 0.5); ell(0, -150, 120, 24, { wash: '#5a5e64', washA: 1, w: 2 }); pop(); steamWisps(x, 1290, 1.4, t, 3, 25745 + x, 0.45); }
    if (t > EV.cn_cant) { const n = Math.min(1000, Math.floor(Math.pow((t - EV.cn_cant) / 1.2, 2) * 1000) + 1); push(640, 1250, popK(t, EV.cn_cant, 0.3)); rect(-170, -40, 340, 80, { wash: '#1a1a1a', washA: 1, w: 3, col: '#c8a050' }); txt('ПОРЦИЙ: ' + n, 0, 14, 40, { font: 'Osw', col: '#7aff9a' }); pop(); }
    if (t < EV.cn_ppl + 0.3) { const k = popK(t, EV.cn_first - 0.1, 0.4); push(700, 1330, k, -0.05); rect(-170, -120, 340, 240, { wash: '#e8d8b0', washA: 1, w: 3, col: '#5a3a1a' }); rect(-160, -110, 160, 220, { wash: '#f4ecd6', washA: 1, w: 1 }); rect(0, -110, 160, 220, { wash: '#f8f0dc', washA: 1, w: 1 }); txt('1930-е', -80, -70, 30, { font: 'Osw', col: '#8a1a0e' }); for (let i = 0; i < 5; i++) pencil([[-150, -30 + i * 24], [-10, -30 + i * 24]], { w: 1.6, col: '#8a7a5a', pass2: false }); cepelinas(80, 0, 0.32, t, { key: 25750 }); txt('pirmas receptas', 80, 70, 18, { font: 'Hand', col: '#3a2a1a' }); pop(); }
    castShadow(520, 1600, 260, 200, 0.5, 0.3);
  }
  function details(t) {                                                // мелочи столовой: часы, радио-репродуктор, вешалка с куртками, графины, хлебница, салфетки, кассир
    push(240, -180, 1); ell(0, 0, 60, 60, { wash: '#f4f4ec', washA: 1, w: 3, col: '#3a3a3a' }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; pencil([[Math.cos(a) * 48, Math.sin(a) * 48], [Math.cos(a) * 56, Math.sin(a) * 56]], { w: 2, col: '#3a3a3a', pass2: false }); } pencil([[0, 0], [Math.cos(t * 0.4) * 36, Math.sin(t * 0.4) * 36]], { w: 3, col: '#1a1a1a', pass2: false }); pencil([[0, 0], [Math.cos(t * 5) * 46, Math.sin(t * 5) * 46]], { w: 1.4, col: '#c8221a', pass2: false }); pop();
    push(-640, -300, 1); blob([[-40, 0], [-60, -80], [60, -80], [40, 0]], { wash: '#3a3a3a', washA: 1, w: 2 }); ell(0, -40, 34, 30, { wash: '#6a6a6a', washA: 1, w: 1.4 }); for (let i = 0; i < 3; i++) { const k = (t * 1.2 + i / 3) % 1; pencil(spline([[50 + k * 60, -60], [60 + k * 60, -40], [50 + k * 60, -20]], false, 4), { w: 2, col: '#3a3a3a', a: 1 - k, pass2: false }); } pop();
    push(1340, 900, 1); pencil([[0, 0], [0, -420]], { w: 8, col: '#5a3a1a' }); for (let i = 0; i < 3; i++) { pencil([[-40 + i * 40, -400], [-40 + i * 40, -380]], { w: 4, col: '#5a3a1a', pass2: false }); blob([[-70 + i * 40, -380], [-80 + i * 40, -200], [-10 + i * 40, -200], [-20 + i * 40, -380]], { wash: ['#3a4a6a', '#5a5a4a', '#4a3a3a'][i], washA: 1, w: 1.6 }); } pop();
    for (let i = 0; i < 3; i++) { push(-460 + i * 360, 1180, 1); blob([[-16, 0], [-20, -60], [-8, -76], [8, -76], [20, -60], [16, 0]], { wash: '#c8e0e8', washA: 0.5, w: 1.6, col: '#5a7a8a' }); rect(-14, -40, 28, 36, { wash: '#e8a050', washA: 0.6, line: false }); ell(60, -6, 40, 10, { wash: '#c89a5a', washA: 1, w: 1.4 }); for (let q = 0; q < 3; q++) ell(44 + q * 16, -14, 10, 7, { wash: '#a8743a', washA: 1, w: 1 }); pop(); }
    push(-760, 1300, 1); rect(-90, -180, 180, 180, { wash: '#7a5a3a', washA: 1, w: 2 }); rect(-70, -160, 140, 60, { wash: '#2a2a2a', washA: 1, w: 1.4 }); txt('КАССА', 0, -120, 22, { font: 'Osw', col: '#7aff9a' }); human(0, -180, 0.7, t, { body: '#f4f4f4', hair: '#c8a060', face: 'smile', armL: 'hold', armR: 'hold', seed: 25765, long: 1 }); pop();
  }
  function front(t) { push(-220, 1980, 1.6); rect(-160, -120, 320, 120, { wash: '#8a8e94', washA: 1, w: 2.4 }); for (let i = 0; i < 4; i++) rect(-150 + i * 76, -150, 70, 30, { wash: '#f4f4ec', washA: 1, w: 1.2 }); pop(); push(1260, 1940, 1.5); ell(0, -120, 80, 120, { wash: '#c8ccd2', washA: 0.5, w: 2.4, col: '#5a6a7a' }); rect(-70, -160, 140, 60, { wash: '#c8743a', washA: 0.7, line: false }); pop(); }
  WORLD.canteen = (t, u, cat) => {
    lay(12, () => { hall(t); details(t); haze('#e8ecf0', 0.05); });
    lay(2.8, () => { workers(t); });
    lay(1, () => { cat(); counter(t); lightPool(560, 1480, 600, 130, 'rgba(240,250,255,1)', 0.3); });
    lay(0.6, () => { front(t); motes(14, [-200, 400, 1300, 1400], '#ffffff', t, 25760, { sp: 4, sz: 3, a: 0.35, wob: 3 }); moodDark(560, 1100, 500, 1500, '#1a2028', 0.4); });
  };
  DIR.canteen = {
    outfit: 'chef', light: { side: -1, rim: '#e8f4ff' }, grade: ['#a8c0c8', 0.06],
    act: () => [[S0.canteen, 'talk'], [EV.cn_first, 'awe'], [EV.cn_30, 'suspicious'], [EV.cn_ppl, 'grin'], [EV.cn_cant, 'proud']],
    pose: (t, u, b) => { const ladle = t > EV.cn_cant; return Object.assign(b, { x: 560, y: 1600, s: 1.15, flip: 1, look: t < EV.cn_ppl ? [0.6, 0.5] : [0.8, -0.2], hand: ladle ? [230, -280 + Math.sin(t * 8) * 30] : [200, -300], handF: [-80, -220], prop: ladle ? 'trayCepP' : 'bookP', propAng: 0.05 }); },
    cam: () => [[S0.canteen, 620, 1150, 0.3], [EV.cn_30, 660, 1180, 0.32], [EV.cn_ppl, 600, 1060, 0.24], [EV.cn_cant, 640, 1100, 0.26], [S1.canteen, 640, 1100, 0.27]]
  };
  // ---------------------------------------------------------------- переход: двери столовой распахиваются на камеру
  TRANS_IN.canteen = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k); if (e < 0.35) { drawBuf(A, 1, 540, 960); scr(() => { const q = e / 0.35; for (const sd of [-1, 1]) { const x0 = sd < 0 ? lerp(-540, 0, q) : lerp(1080, 540, q); const d = rect(x0, 0, 540, 1920, { wash: '#6a8a7a', washA: 1, w: 4, col: '#1a2a2a' }); rect(x0 + 120, 300, 300, 400, { wash: '#c8d8e0', washA: 1, w: 3, col: '#1a2a2a' }); ell(x0 + (sd < 0 ? 500 : 40), 1000, 20, 20, { wash: '#c8a050', washA: 1, w: 2 }); } }); }
    else { const q = (e - 0.35) / 0.65; drawBuf(B, 1, 540, 960); scr(() => { for (const sd of [-1, 1]) { const w = 540 * Math.cos(q * 1.5); if (w < 4) continue; const x0 = sd < 0 ? 0 : 1080 - w; rect(x0, 0, w, 1920, { wash: '#6a8a7a', washA: 1, w: 4, col: '#1a2a2a' }); } }); }
  } };
})();
