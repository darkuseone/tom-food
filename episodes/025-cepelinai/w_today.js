/* 025 — `today` + `button`: «Теперь у них свой Всемирный день — с 2014-го! Ты бы — с мясом или с творогом? / Пиши блюдо — запустим следующий
   дирижабль!» Современная корчма в Вильнюсе на празднике: гирлянды, флажки, баннер «PASAULINĖ CEPELINŲ DIENA», окно на черепичные крыши
   Старого города и башню Гедимина, в небе праздничный дирижабль-клёцка; гости с тарелками, повар в колпаке. Главный свет — гирлянды и закат
   в окне. Том-шеф над большой тарелкой: два цеппелина в сметане и шкварках, пар, укроп (хиро-шот). По словам: «Всемирный день» — баннер
   разворачивается, хлопушки; «2014-го» — инфо-плашка; «с мясом / с творогом» — Том разрезает два цеппелина: мясо и творог, две карточки-выбора.
   `button`: тот же кадр, камера мягко доезжает, Том подмигивает, ПОДПИШИСЬ всплывает поверх (без склейки). Переход В сцену: праздничный
   дирижабль пролетает через кадр и тянет за собой новую сцену, как баннер. */
(() => {
  EV.td_day = wtw('t1', 'Всемирный');
  EV.td_2014 = wtw('t1', '2014-го!');
  EV.td_meat = wtw('t1', 'мясом');
  EV.td_curd = wtw('t1', 'творогом?');
  EV.bt_wink = wtw('x1', 'дирижабль!');
  SHAKES.push([EV.td_day + 0.1, 0.12, 5]);
  KEYW.push('Всемирный', 'творогом?');

  function hall(t) {                                                    // стены, окно на Старый город с башней и дирижаблем, баннер, гирлянды
    vgrad(-800, 1500, ['#4a2a1c', '#6a3e24', '#7a4a2c']);
    for (let i = 0; i < 14; i++) { const y = -800 + i * 130; rect(-900, y, 2800, 126, { wash: i % 2 ? '#7a4a2a' : '#6a4024', washA: 1, w: 1.2, col: '#2a1408' }); }
    push(820, -60, 1); const w = rect(-240, -300, 480, 520, { wash: '#f4a868', washA: 1, w: 10, col: '#3a2010', key: 25900 }); ctx.save(); ctx.clip(w.path); vgrad(-300, 220, ['#5a6aa8', '#f4a868', '#f8d8a0']); for (let i = 0; i < 8; i++) poly([[-240 + i * 60, 220], [-240 + i * 60, 90 - (i % 3) * 30], [-210 + i * 60, 50 - (i % 3) * 30], [-180 + i * 60, 90 - (i % 3) * 30], [-180 + i * 60, 220]], { wash: ['#b8542a', '#c86a3a', '#a84a2a'][i % 3], washA: 1, w: 1 }); rect(80, -140, 60, 200, { wash: '#a8542a', washA: 1, w: 1.4 }); poly([[70, -140], [110, -200], [150, -140]], { wash: '#5a6a4a', washA: 1, w: 1.4 }); push(-80 + Math.sin(t * 0.4) * 40, -200, 1); zeppelinShip(0, 0, 0.22, t, { potato: 1, key: 25901 }); pop(); ctx.restore(); pencil([[0, -300], [0, 220]], { w: 8, col: '#3a2010' }); pop();
    const bk = t > EV.td_day - 0.1 ? sm(clamp((t - EV.td_day + 0.1) / 0.5)) : 0.1; push(260, -330, 1); rect(-360, 0, 720, 120 * bk, { wash: '#f4c020', washA: 1, w: 3, col: '#5a4008' }); rect(-360, 120 * bk - 6, 720, 6, { wash: '#2a7a3a', washA: 1, line: false }); if (bk > 0.8) { txt('PASAULINĖ CEPELINŲ DIENA', 0, 52, 38, { font: 'Osw', col: '#2a5a2a' }); txt('Всемирный день цеппелинов', 0, 96, 26, { font: 'Hand', col: '#c8221a' }); } pop();
    for (let i = 0; i < 18; i++) { const x = -800 + i * 150, y = -480 + Math.sin(i * 0.8) * 30; pencil([[x, y], [x + 150, -480 + Math.sin((i + 1) * 0.8) * 30]], { w: 2, col: '#1a1008', pass2: false }); poly([[x + 50, y + 4], [x + 75, y + 50], [x + 100, y + 4]], { wash: ['#f4c020', '#2a7a3a', '#c8221a'][i % 3], washA: 1, w: 1 }); }
    for (let i = 0; i < 6; i++) { const x = -600 + i * 380; ell(x, -560, 12, 16, { wash: '#ffd890', washA: 1, w: 1 }); if (i % 2) glow(x, -560, 70, 'rgba(255,214,140,1)', 0.35); }
  }
  function guests(t) {                                                  // гости с тарелками, повар, хлопушки
    const party = t > EV.td_day;
    for (const [i, x] of [[0, -320], [1, -180], [2, 1060], [3, 1190]].map(v => v)) { human(x, 1290, 1.0, t, { body: ['#c8221a', '#2a7a3a', '#f4c020', '#3a4a6a'][i], legs: '#2a2a2a', hair: ['#c8a060', '#3a2a1a', '#2a1a0a', '#8a6a4a'][i], face: party ? 'grin' : 'smile', armL: party && i % 2 ? 'up' : 'hold', armR: party ? 'wave' : 'hold', look: i < 2 ? 0.5 : -0.5, seed: 25910 + i, flip: i < 2 ? 1 : -1, long: i % 2 }); }
    if (party) for (let i = 0; i < 30; i++) { const r = rng(25920 + i), q = clamp((t - EV.td_day) / 2.5); ell(-400 + r() * 1700, 300 + r() * 500 + q * 700 * r(), 6, 4, { wash: ['#f4c020', '#2a7a3a', '#c8221a'][i % 3], washA: 1 - q * 0.5, line: false, rot: t * 4 + i }); }
  }
  function table(t) {                                                   // стол (после cat): хиро-шот — тарелка с двумя цеппелинами, сметана, шкварки, укроп, квас, хлеб
    const tb = rect(-500, 1440, 2100, 700, { wash: '#efe6d0', washA: 1, w: 3, col: '#6a5a3a', key: 25930 }); shadeG(tb.path, 0, 1440, 0, 1800, '#a89a7a', 0.4); for (let i = 0; i < 10; i++) pencil([[-480 + i * 220, 1450], [-470 + i * 220, 1900]], { w: 4, col: '#2a7a3a', a: 0.3, pass2: false });
    push(760, 1520, 1.25); ell(0, 0, 260, 60, { wash: '#f4f4f4', washA: 1, w: 3, col: '#5a5a5a' }); ell(0, -4, 220, 46, { wash: '#fbfbf8', washA: 1, w: 1.4, col: '#a8a8a8' }); pop();
    const cm = t > EV.td_meat ? sm(clamp((t - EV.td_meat) / 0.35)) : 0, cc = t > EV.td_curd ? sm(clamp((t - EV.td_curd) / 0.35)) : 0;
    cepelinas(650, 1470, 0.62, t, { smet: 1, spirg: 1, cut: cm, steam: 1, key: 25931 }); push(870, 1480, 1); cepelinas(0, 0, 0.6, t, { smet: 1, steam: 1, key: 25932 }); if (cc) { const c = blob([[-80 * cc, 0], [-50 * cc, -26], [0, -32 * cc], [50 * cc, -26], [80 * cc, 0], [50 * cc, 24], [0, 30 * cc], [-50 * cc, 24]], { wash: '#fbf8f0', washA: 1, w: 2, col: '#8a8070' }); for (let i = 0; i < 6; i++) ell(-40 * cc + i * 16 * cc, -6, 4, 3, { wash: '#e8e0d0', washA: 1, line: false }); } pop();
    for (let i = 0; i < 6; i++) pencil([[600 + i * 50, 1400], [612 + i * 50, 1386]], { w: 3, col: '#4a8a2a', pass2: false });
    push(240, 1460, 1); blob([[-36, 0], [-40, -130], [-22, -150], [22, -150], [40, -130], [36, 0]], { wash: '#8a5a2a', washA: 0.85, w: 2, col: '#3a1a08' }); rect(-30, -90, 60, 50, { wash: '#f4ecd0', washA: 1, w: 1 }); txt('GIRA', 0, -58, 16, { font: 'Osw', col: '#5a2a08' }); pop();
    push(380, 1470, 1); blob([[-60, 0], [-56, -40], [0, -54], [56, -40], [60, 0]], { wash: '#5a3018', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 4; i++) ell(-36 + i * 24, -36, 4, 3, { wash: '#c8a868', washA: 1, line: false }); pop();
    // «С 2014» — в hud (19.11.2026)
    // карточки выбора А/Б — в hud (19.11.2026)
    castShadow(760, 1540, 380, 150, 0.6, 0.25);
  }
  function decor(t) {                                                  // детали зала: полки с горшками и янтарём, рушник, связка лука, корзина картошки
    for (let j = 0; j < 2; j++) { const y = 300 + j * 230; rect(-620, y, 440, 16, { wash: '#4a2a14', washA: 1, w: 1.4 }); for (let i = 0; i < 6; i++) { const x = -590 + i * 70; if ((i + j) % 2) { blob([[x - 22, y], [x - 26, y - 60], [x - 10, y - 80], [x + 10, y - 80], [x + 26, y - 60], [x + 22, y]], { wash: ['#b8642a', '#8a5a3a', '#c8783a'][i % 3], washA: 1, w: 1.4, col: '#3a1a08' }); } else { for (let q = 0; q < 5; q++) ell(x - 16 + q * 8, y - 20 - (q % 2) * 10, 7, 7, { wash: '#e8a030', washA: 1, w: 1, col: '#8a4a08' }); } } }
    push(-400, 120, 1); rect(-120, 0, 240, 360, { wash: '#f4ecd8', washA: 1, w: 2, col: '#8a7a5a' }); for (let j = 0; j < 4; j++) for (let i = 0; i < 5; i++) poly([[-100 + i * 48, 60 + j * 80], [-76 + i * 48, 36 + j * 80], [-52 + i * 48, 60 + j * 80], [-76 + i * 48, 84 + j * 80]], { wash: j % 2 ? '#c8221a' : '#2a6a3a', washA: 1, w: 1 }); pop();
    for (let i = 0; i < 5; i++) { const x = 1220 + i * 40; pencil([[x, -440], [x, -280 + (i % 2) * 30]], { w: 2, col: '#8a6a3a', pass2: false }); ell(x, -262 + (i % 2) * 30, 18, 22, { wash: '#d8a050', washA: 1, w: 1.4, col: '#5a3a08' }); }
    push(1300, 1300, 1); blob([[-80, 0], [-90, -90], [90, -90], [80, 0]], { wash: '#b8904a', washA: 1, w: 2, col: '#4a2a08' }); for (let i = 0; i < 5; i++) pencil([[-86 + i * 40, -90], [-80 + i * 38, 0]], { w: 1.6, col: '#7a5a2a', pass2: false }); for (let i = 0; i < 4; i++) ell(-50 + i * 34, -96, 18, 14, { wash: '#c89a5a', washA: 1, w: 1.2 }); pop();
    rays(820, -60, 2.2, 0.3, 1600, 'rgba(255,210,150,1)', 0.12, 4, t); const fl = rect(-900, 1200, 2800, 240, { wash: '#4a2a14', washA: 0.4, line: false }); hatch(fl.path, fl.bb, { gap: 10, a: 0.12, col: '#1a0a04', ang: 0.2, key: 25960 });
  }
  function front(t) { push(-200, 2000, 1.6); for (let i = 0; i < 3; i++) ell(-60 + i * 70, -40, 40, 30, { wash: '#c89a5a', washA: 1, w: 2, col: '#4a2a10' }); pop(); push(1250, -200, 1.5); for (let i = 0; i < 4; i++) { pencil([[i * 40 - 60, -400], [i * 40 - 60, -40 - i * 30]], { w: 3, col: '#8a6a3a', pass2: false }); poly([[i * 40 - 80, -40 - i * 30], [i * 40 - 60, 0 - i * 30], [i * 40 - 40, -40 - i * 30]], { wash: ['#f4c020', '#2a7a3a', '#c8221a'][i % 3], washA: 1, w: 1 }); } pop(); }
  WORLD.today = (t, u, cat) => {
    lay(12, () => { hall(t); decor(t); haze('#ffc890', 0.05); });
    lay(2.8, () => { guests(t); });
    lay(1, () => { cat(); table(t); lightPool(700, 1480, 600, 130, 'rgba(255,214,150,1)', 0.35); });
    lay(0.6, () => { front(t); motes(16, [-200, 200, 1300, 1400], '#ffe0a0', t, 25940, { sp: 5, sz: 3, a: 0.45, wob: 3 }); moodDark(600, 1000, 500, 1500, '#140a08', 0.45); });
  };
  DIR.today = {
    outfit: 'chef', light: { side: 1, rim: '#ffd8a0' }, grade: ['#ffb070', 0.07],
    act: () => [[S0.today, 'proud'], [EV.td_day, 'grin'], [EV.td_2014, 'awe'], [EV.td_meat, 'smug'], [EV.td_curd, 'suspicious']],
    pose: (t, u, b) => Object.assign(b, { x: 520, y: 1600, s: 1.17, flip: 1, look: t < EV.td_meat ? [0.2, -0.1] : [0.7, 0.5], hand: t > EV.td_meat ? [230, -250] : [200, -300], handF: [-80, -220], prop: 'forkCepP', propAng: 0.1 }),
    hud: t => { if (t > EV.td_2014 && t < EV.td_meat) { push(735, 470, popK(t, EV.td_2014, 0.35)); if (t > EV.td_2014 + 0.35) hudBox('табличка С 2014', -170, -60, 170, 120); rect(-170, -60, 340, 120, { wash: '#f4ecd6', washA: 1, w: 4, col: '#2a7a3a' }); txt('С 2014', 0, 2, 60, { font: 'Osw', col: '#2a7a3a' }); txt('1-е воскресенье февраля', 0, 44, 22, { font: 'Hand', col: '#3a2a1a' }); pop(); } if (t > EV.td_meat - 0.1 && t < S1.today) for (const [i, [lab, c, x]] of [['С МЯСОМ', '#9a4a3a', 360], ['С ТВОРОГОМ', '#8a8070', 740]].entries()) { const k = popK(t, (i ? EV.td_curd : EV.td_meat) - 0.1, 0.4); if (k <= 0) continue; push(x, 760, k * 0.9, Math.sin(t * 3 + i) * 0.03); if (k > 0.95) hudBox('выбор ' + lab, -180, -60, 180, 60); rect(-180, -60, 360, 120, { wash: '#f8f4ea', washA: 1, w: 5, col: c }); txt(i ? 'Б' : 'А', -150, -20, 36, { font: 'Osw', col: c }); txt(lab, 10, 16, 44, { font: 'Osw', col: '#1a1a1a' }); pop(); } },
    cam: () => [[S0.today, 560, 1050, 0.24], [EV.td_day, 520, 980, 0.24], [EV.td_2014, 580, 1100, 0.28], [EV.td_meat, 620, 1160, 0.3], [S1.today, 620, 1160, 0.31]]
  };
  WORLD.button = (t, u, cat) => WORLD.today(t, u, cat);
  DIR.button = Object.assign({}, DIR.today, { act: () => [[S0.button, 'grin'], [EV.bt_wink - 0.2, 'wink'], [EV.bt_wink + 0.6, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 520, y: 1600, s: 1.17, flip: 1, look: [-0.3, -0.1], hand: [180, -320], handF: [-80, -220], prop: 'forkCepP', propAng: 0.1, tailUp: true }),
    cam: () => { const L = DIR.today.cam().slice(-1)[0]; return [[S0.button, L[1], L[2], L[3]], [DUR, L[1], L[2] + 30, L[3] + 0.04]]; } });   // продолжение кадра today — ПОДПИШИСЬ всплывает поверх
  // ---------------------------------------------------------------- переход: праздничный дирижабль пролетает и тянет за собой новую сцену, как баннер
  TRANS_IN.today = { a: 0.3, b: 0.45, runA: 0.5, fx(k, t, A, B) {
    const e = sm(k), x = lerp(1500, -500, e); drawBuf(A, 1, 540, 960); const P = new Path2D(); P.rect(x + 200, 0, W + 600, H); inPath(P, () => drawBuf(B, 1, 540, 960));
    scr(() => { pencil([[x + 200, -20], [x + 200, 1940]], { w: 10, col: '#f4c020', pass2: false }); zeppelinShip(x, 900, 1.0, t, { potato: 0.4, txt: 'CEPELINAI', key: 25950 }); for (let i = 0; i < 6; i++) pencil([[x + 200, 300 + i * 260], [x + 300, 320 + i * 260]], { w: 3, col: '#2a2a2a', pass2: false }); });
  } };
})();
