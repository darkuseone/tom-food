/* 025 — `airship`: «Цеппелины — картофельные „дирижабли“ до тридцати сантиметров. В честь графа Цеппелина и его воздушных кораблей.» 1900,
   Боденское озеро: плавучий ангар на воде, из ворот медленно выплывает серебристый дирижабль LZ 1; лодки, зеваки в шляпах и канотье, флажки,
   граф с белыми усами и в фуражке машет; главный свет — утреннее солнце над озером (пучок, блики на воде). Том-авиатор в шлеме и очках держит
   огромный цеппелин на подносе. По словам: «картофельные» — Том поднимает поднос с клёцкой рядом с носом дирижабля; «тридцати сантиметров» —
   жёлтая рулетка вытягивается «30 см»; «графа Цеппелина» — граф снимает фуражку; «кораблей» — дирижабль выходит из ангара целиком, толпа ахает.
   Переход В сцену: винт дирижабля раскручивается на весь кадр и «разгоняет» прошлую сцену лопастями. */
(() => {
  EV.as_cep = wtw('s1', 'картофельные');
  EV.as_30 = wtw('s1', 'тридцати');
  EV.as_count = wtw('s1', 'графа');
  EV.as_ships = wtw('s1', 'кораблей.');
  SHAKES.push([EV.as_ships, 0.12, 4]);
  KEYW.push('сантиметров.');

  function lake(t) {                                                    // небо, Альпы, озеро с бликами, плавучий ангар
    vgrad(-800, 900, ['#5a8ac8', '#a8c8e8', '#f8e0b0']); ell(1100, -300, 70, 70, { wash: '#fff4c8', washA: 1, w: 1.4, col: '#e8c070' }); glow(1100, -300, 220, 'rgba(255,240,190,1)', 0.35);
    for (let i = 0; i < 5; i++) { const x = ((i * 420 + t * 10) % 2200) - 600; for (let j = 0; j < 3; j++) ell(x + j * 80, -500 + i * 50, 100, 34, { wash: '#ffffff', washA: 0.8, line: false }); }
    sil([[-800, 420], [-500, 160], [-300, 300], [-80, 90], [200, 280], [420, 120], [700, 300], [1000, 140], [1300, 320], [1800, 200], [1800, 500], [-800, 500]], '#8a9ab8', 1); for (const [x, y] of [[-80, 90], [420, 120], [1000, 140]]) poly([[x - 50, y + 50], [x, y], [x + 50, y + 50]], { wash: '#f8f8fc', washA: 1, line: false });
    const w = rect(-800, 480, 2800, 1100, { wash: '#4a7aa8', washA: 1, line: false, key: 25200 }); shadeG(w.path, 0, 480, 0, 1300, '#a8d0f0', 0.4);
    for (let i = 0; i < 40; i++) { const x = -700 + (i * 113) % 2600, y = 520 + (i * 47) % 700; pencil([[x + Math.sin(t * 2 + i) * 8, y], [x + 40 + Math.sin(t * 2 + i) * 8, y]], { w: 2, col: '#e8f4fc', a: 0.6, pass2: false }); }
    push(-200, 760, 1); const h = rect(-420, -330, 840, 330, { wash: '#8a6a4a', washA: 1, w: 3, col: '#2a1a0a', key: 25201 }); shadeG(h.path, 420, 0, -420, 0, '#3a2a1a', 0.5); for (let i = 0; i < 14; i++) pencil([[-420 + i * 60, -330], [-420 + i * 60, 0]], { w: 2, col: '#4a3420', a: 0.6, pass2: false });
    poly([[-440, -330], [440, -330], [380, -400], [-380, -400]], { wash: '#5a4a3a', washA: 1, w: 2.4, col: '#2a1a0a' }); rect(-440, 0, 880, 40, { wash: '#6a5a4a', washA: 1, w: 2 }); for (let i = 0; i < 6; i++) { pencil([[-400 + i * 160, 40], [-400 + i * 160, 90]], { w: 8, col: '#4a3a2a', pass2: false }); }
    rect(380, -300, 50, 280, { wash: '#1a1208', washA: 1, w: 2 }); pop();
    shaft(1100, -300, 300, 2000, 0.55, 'rgba(255,240,190,1)', 0.14);
  }
  function airship(t) {                                                 // дирижабль выплывает из ангара
    const k = sm(clamp((t - S0.airship) / (EV.as_ships + 0.6 - S0.airship))), x = lerp(-300, 520, k);
    push(x, 560, 1); zeppelinShip(0, 0, 1.1, t, { txt: 'LZ 1', key: 25210 }); pop(); push(x, 900, 1); ell(0, 0, 340, 30, { wash: '#2a4a6a', washA: 0.35, line: false }); pop();
    for (let i = 0; i < 3; i++) { const bx = 800 + i * 220, by = 900 + i * 40, bob = Math.sin(t * 2 + i) * 6; push(bx, by + bob, 0.8, Math.sin(t * 1.5 + i) * 0.05); blob([[-80, 0], [80, 0], [60, 30], [-60, 30]], { wash: ['#c8743a', '#f4ecd8', '#4a7a3a'][i], washA: 1, w: 2, col: '#2a1408' }); human(0, 6, 0.55, t, { body: ['#2a2a3a', '#f4ecd8', '#8a3a2a'][i], hair: '#2a1a0a', face: t > EV.as_ships ? 'shock' : 'smile', armL: 'wave', armR: 'hold', seed: 25211 + i, hat: i === 1 ? 'cap' : null }); pop(); }
  }
  function crowd(t) {                                                   // зеваки на пирсе, граф Цеппелин, флажки
    rect(-800, 1180, 2700, 60, { wash: '#8a6a4a', washA: 1, w: 2, col: '#2a1a0a' }); for (let i = 0; i < 30; i++) pencil([[-780 + i * 90, 1180], [-780 + i * 90, 1240]], { w: 2, col: '#4a3420', pass2: false });
    for (let i = 0; i < 12; i++) { const x = -500 + i * 100; pencil(spline([[x, 1000], [x + 50, 1030], [x + 100, 1000]], false, 4), { w: 1.6, col: '#3a3a3a', pass2: false }); poly([[x + 30, 1015], [x + 50, 1055], [x + 70, 1015]], { wash: ['#c8221a', '#f4ecd8', '#2a5aa8'][i % 3], washA: 1, w: 1 }); }
    const ah = t > EV.as_ships;
    for (const [i, x] of [[0, -300], [1, -170], [2, 1000], [3, 1130]].map(v => v)) { human(x, 1190, 0.95, t, { body: ['#2a2a3a', '#7a2a3a', '#3a4a6a', '#f4ecd8'][i], legs: '#1a1a1a', hair: '#3a2a1a', face: ah ? 'shock' : 'smile', armL: ah ? 'up' : 'hold', armR: 'hold', look: 0.5 * (i < 2 ? 1 : -1), seed: 25220 + i, flip: i < 2 ? 1 : -1, long: i % 2 }); hat20(x, 1190, 0.95, i % 2 ? 'boater' : 'fedora', '#3a3028', i < 2 ? 1 : -1); }
    const cw = t > EV.as_count; human(160, 1190, 1.05, t, { body: '#2a3050', legs: '#1a1a2a', hair: '#e8e8e8', face: cw ? 'grin' : 'smile', armL: 'hold', armR: cw ? 'wave' : 'hold', look: 0.4, seed: 25230, trim: '#d6a842' }); stache(160, 1190, 1.05); hat20(160 + (cw ? 30 : 0), 1190 - (cw ? 40 : 0), 1.05, 'pilot', '#2a3050');
    // табличка «ГРАФ ЦЕППЕЛИН» — в hud (19.11.2026: не под шкалой СОСТАВ)
  }
  function deck(t) {                                                    // пирс перед Томом (после cat): ящики, канаты, ведро, рулетка 30 см
    const d = rect(-600, 1440, 2400, 600, { wash: '#7a5a3a', washA: 1, w: 3, col: '#2a1408', key: 25240 }); for (let i = 0; i < 12; i++) pencil([[-600, 1460 + i * 40], [1800, 1460 + i * 40]], { w: 2, col: '#4a3420', a: 0.6, pass2: false });
    push(120, 1460, 1); rect(-70, -100, 140, 100, { wash: '#a8743a', washA: 1, w: 2, col: '#3a1a08' }); pencil([[-70, -50], [70, -50]], { w: 2, col: '#3a1a08', pass2: false }); txt('LZ', 0, -60, 26, { font: 'Osw', col: '#3a1a08' }); pop();
    push(1060, 1470, 1); for (let i = 0; i < 4; i++) ell(0, -i * 12, 70 - i * 6, 18, { wash: '#c8a868', washA: 1, w: 1.6, col: '#5a4a2a' }); pop();
    if (t > EV.as_30 - 0.1) { const k = sm(clamp((t - EV.as_30 + 0.1) / 0.5)); push(560, 1360, 1); rect(0, -20, 380 * k, 40, { wash: '#f0c020', washA: 1, w: 2, col: '#5a4a08' }); for (let i = 0; i <= 30 * k; i++) pencil([[i * 12.6, -20], [i * 12.6, i % 5 ? -6 : 4]], { w: 1.4, col: '#2a2a08', pass2: false }); rect(-50, -40, 60, 80, { wash: '#c8221a', washA: 1, w: 2 }); if (k > 0.9) txt('30 см', 190, -40, 44, { font: 'Osw', col: '#c8221a' }); pop(); }
    castShadow(560, 1600, 260, 200, -0.5, 0.28);
  }
  function front(t) { push(-200, 1960, 1.6); for (let i = 0; i < 3; i++) pencil(spline([[-200, -40 - i * 20], [0, -10 - i * 20], [200, -40 - i * 20]], false, 5), { w: 14, col: '#c8a868', pass2: false }); pop(); push(1250, 1900, 1.5); rect(-50, -300, 100, 300, { wash: '#6a4a2a', washA: 1, w: 2.4 }); ell(0, -300, 50, 14, { wash: '#7a5a3a', washA: 1, w: 2 }); pop(); }
  WORLD.airship = (t, u, cat) => {
    lay(12, () => { lake(t); haze('#d8e8f8', 0.06); });
    lay(4, () => { airship(t); });
    lay(2.6, () => { crowd(t); });
    lay(1, () => { cat(); deck(t); lightPool(560, 1480, 520, 120, 'rgba(255,240,200,1)', 0.35); });
    lay(0.6, () => { front(t); motes(12, [-200, 300, 1300, 1400], '#ffffff', t, 25250, { sp: 6, sz: 3, a: 0.35, wob: 3 }); moodDark(560, 1000, 500, 1500, '#1a2030', 0.35); });
  };
  DIR.airship = {
    outfit: 'aviatorA', light: { side: 1, rim: '#fff0c8' }, grade: ['#c8d8f0', 0.06],
    act: () => [[S0.airship, 'proud'], [EV.as_cep, 'grin'], [EV.as_30, 'awe'], [EV.as_count, 'smug'], [EV.as_ships, 'awe']],
    pose: (t, u, b) => Object.assign(b, { x: 580, y: 1600, s: 1.16, flip: 0, look: t < EV.as_count ? [0.5, -0.3] : [-0.4, -0.7], hand: [-160, -320], handF: [130, -240], prop: 'trayCepP', propAng: 0.05 }),
    hud: t => { if (t > EV.as_count) { push(720, 470, popK(t, EV.as_count, 0.35)); if (t > EV.as_count + 0.35) hudBox('табличка ГРАФ ЦЕППЕЛИН', -170, -32, 170, 32); rect(-170, -32, 340, 64, { wash: '#f4ecd6', washA: 1, w: 3, col: '#2a3050' }); txt('ГРАФ ЦЕППЕЛИН', 0, 12, 34, { font: 'Osw', col: '#2a3050' }); pop(); } },
    cam: () => [[S0.airship, 440, 950, 0.22], [EV.as_cep, 520, 1100, 0.26], [EV.as_30, 600, 1150, 0.28], [EV.as_count, 420, 1050, 0.26], [EV.as_ships, 480, 960, 0.22], [S1.airship, 500, 1000, 0.24]]
  };
  // ---------------------------------------------------------------- переход: винт раскручивается на весь кадр и разгоняет прошлую сцену
  TRANS_IN.airship = { a: 0.3, b: 0.45, runA: 0.5, fx(k, t, A, B) {
    const e = sm(k); drawBuf(B, 1, 540, 960); const R = 1400 * (1 - e), rot = e * 14;
    if (R > 5) { const P = new Path2D(); for (let i = 0; i < 3; i++) { const a = rot + i * 2.094; P.moveTo(540, 960); P.arc(540, 960, R, a - 0.6 * (1 - e), a + 0.6 * (1 - e)); P.closePath(); } inPath(P, () => drawBuf(A, 1, 540, 960)); }
    scr(() => { for (let i = 0; i < 3; i++) { const a = rot + i * 2.094; pencil([[540, 960], [540 + Math.cos(a) * 900 * (1 - e * 0.6), 960 + Math.sin(a) * 900 * (1 - e * 0.6)]], { w: 60 * (1 - e) + 4, col: '#4a3a2a', a: 0.8 * (1 - e), pass2: false }); } ell(540, 960, 60 * (1 - e) + 6, 60 * (1 - e) + 6, { wash: '#6a6a62', washA: 1, w: 3 }); });
  } };
})();
