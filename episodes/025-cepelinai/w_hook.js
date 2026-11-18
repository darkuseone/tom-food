/* 025 — `hook`: «Главное блюдо Литвы зовут „дирижабль“. Немецкий! Как он сел на литовский стол? / Откусим историю!» ВАУ-КАДР: камера в небе над
   литовскими полями — серебристый дирижабль плывёт сквозь облака, аисты; камера ведёт его вниз сквозь распахнутое окно корчмы (смуклė) —
   и дирижабль на лету превращается в огромную картофельную клёцку и садится на глиняную тарелку перед Томом: шмяк, сметана брызгает.
   Корчма: тёмные балки, льняные рушники с красным узором, янтарные бусы, глиняные кувшины, связки лука, печь с огнём (главный свет — закатное окно,
   второй — печь). Гости: литовка в льняном, усатый хозяин с кружкой, пара за столом. По словам: «дирижабль» — дирижабль крупно в облаках;
   «Немецкий!» — на борту проступает надпись LZ и штамп «MADE IN GERMANY?»; «Как он сел» — посадка на тарелку, брызги; «историю!» — Том
   разрезает цеппелин вилкой: мясная начинка, пар. Финал `button` — продолжение today (w_today.js). */
(() => {
  EV.hk_ship = 0.1;
  EV.hk_ger = wtw('h1', 'Немецкий!');
  EV.hk_land = wtw('h1', 'сел');
  EV.hk_q = wtw('h1', 'стол?');
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_land + 0.45, 0.2, 10], [EV.hk_bite, 0.16, 7]);
  KEYW.push('Немецкий!');
  const TS = () => EV.hk_land + 0.2, LAND = () => TS() + 0.35;           // TS — смена «небо → корчма» под облаком-шторкой; LAND — клёцка шлёпается на тарелку
  const shipPos = t => { const k = sm(clamp(t / TS())); return { x: lerp(160, 900, k), y: lerp(520, 1250, k * k), s: lerp(1.5, 1.1, k), rot: lerp(-0.04, 0.32, k * k) }; };

  function sky(t) {                                                     // небо, облака, поля, аисты — то, что видно в начале и в окне
    vgrad(-1700, 700, ['#3a5a9a', '#7aa0d0', '#f4c890', '#f8a868']);
    for (let i = 0; i < 9; i++) { const x = ((i * 330 + t * 18) % 2400) - 700, y = -1500 + i * 150; for (let j = 0; j < 4; j++) ell(x + j * 70, y - (j % 2) * 30, 110 - j * 10, 46, { wash: '#ffffff', washA: 0.85, line: false }); ell(x + 100, y + 20, 200, 30, { wash: '#e8d0c0', washA: 0.4, line: false }); }
    sil([[-800, 420], [-400, 380], [0, 400], [400, 360], [900, 400], [1800, 380], [1800, 700], [-800, 700]], '#5a7a3a', 1); for (let i = 0; i < 8; i++) pencil([[-700 + i * 300, 700], [-300 + i * 260, 420]], { w: 3, col: '#c8b040', a: 0.5, pass2: false });
    for (let i = 0; i < 5; i++) { const x = -200 + i * 180, y = 330; pencil([[x, y], [x, y - 40 - i % 2 * 20]], { w: 2, col: '#2a3a1a', pass2: false }); ell(x, y - 60, 20, 26, { wash: '#3a6a2a', washA: 1, line: false }); }
    for (let i = 0; i < 3; i++) { const x = ((t * 80 + i * 260) % 1800) - 400, y = -700 + i * 90 + Math.sin(t * 2 + i) * 12, f = Math.sin(t * 8 + i) * 18; pencil(spline([[x - 40, y + f], [x - 14, y - 4], [x, y]], false, 4), { w: 3, col: '#f8f4ea', pass2: false }); pencil(spline([[x, y], [x + 14, y - 4], [x + 40, y + f]], false, 4), { w: 3, col: '#f8f4ea', pass2: false }); pencil([[x - 4, y], [x + 22, y + 2]], { w: 2, col: '#e8442a', pass2: false }); }
  }
  function outdoor(t) {                                                 // ВАУ-начало: Том на крыльце корчмы, над ним в закатном небе идёт дирижабль
    push(0, 620, 1); sky(t); rect(-900, 690, 2800, 1400, { wash: '#6a8a3a', washA: 1, line: false }); for (let i = 0; i < 14; i++) pencil([[-900 + i * 220, 2000], [-200 + i * 120, 700]], { w: 6, col: '#c8b040', a: 0.4, pass2: false }); const r = rng(25101);
    for (let i = 0; i < 6; i++) { const x = -500 + i * 330, y = 520 + (i % 2) * 30; rect(x, y - 120, 180, 120, { wash: ['#e8dcc0', '#d8c8a0'][i % 2], washA: 1, w: 1.6, col: '#5a4a2a' }); poly([[x - 20, y - 120], [x + 90, y - 200], [x + 200, y - 120]], { wash: '#8a5a2a', washA: 1, w: 1.6, col: '#3a2010' }); rect(x + 70, y - 70, 40, 40, { wash: '#ffd890', washA: 1, w: 1 }); }
    push(1100, 500, 1); pencil([[0, 0], [0, -260]], { w: 8, col: '#5a4a3a', pass2: false }); ell(0, -270, 60, 18, { wash: '#4a3a2a', washA: 1, line: false }); blob([[-30, -290], [0, -330], [36, -300], [6, -280]], { wash: '#f8f4ea', washA: 1, w: 2 }); pencil([[34, -302], [64, -298]], { w: 3, col: '#e8442a', pass2: false }); pop(); pop();
  }
  function porch(t) {                                                   // крыльцо: перила с резьбой, горшки с геранью, кувшин — перед Томом (после cat)
    const rl = rect(-600, 1440, 2400, 70, { wash: '#7a4a24', washA: 1, w: 3, col: '#2a1408', key: 25198 }); shadeG(rl.path, 0, 1440, 0, 1510, '#3a1a08', 0.5); rect(-600, 1510, 2400, 500, { wash: '#5a3a1c', washA: 1, w: 2, col: '#2a1408' });
    for (let i = 0; i < 20; i++) { const x = -560 + i * 130; blob([[x - 16, 1510], [x - 22, 1600], [x, 1640], [x + 22, 1600], [x + 16, 1510]], { wash: '#8a5a2c', washA: 1, w: 1.6, col: '#2a1408' }); }
    for (const [x, c] of [[160, '#e8443a'], [1000, '#f06a8a']]) { push(x, 1440, 1); blob([[-40, 0], [-34, -70], [34, -70], [40, 0]], { wash: '#b8642a', washA: 1, w: 2, col: '#3a1a08' }); for (let i = 0; i < 7; i++) { ell(-30 + (i % 4) * 20, -90 - Math.floor(i / 4) * 24, 14, 12, { wash: c, washA: 1, w: 1 }); } for (let i = 0; i < 5; i++) blob([[-30 + i * 15, -70], [-40 + i * 18, -100], [-24 + i * 15, -80]], { wash: '#3a7a2a', washA: 1, w: 1 }); pop(); }
  }
  function puff(t) {                                                    // облако-шторка: дирижабль ныряет вниз, клубы закрывают кадр, под ними уже корчма
    const a = TS() - 0.35, b = TS() + 0.45; if (t < a || t > b) return; const k = (t - a) / (b - a), cov = Math.sin(k * Math.PI);
    scr(() => { const r = rng(25199); for (let i = 0; i < 26; i++) { const x = r() * 1080, y = r() * 1920, R = (180 + r() * 260) * cov; if (R < 4) continue; ell(x + (k - 0.5) * 120, y - k * 200, R, R * 0.8, { wash: i % 3 ? '#fbf6ee' : '#e8dcd0', washA: 1, line: false }); } });
  }
  function tavern(t) {                                                  // стены корчмы, окно в небо, балки, рушники, полки
    vgrad(-500, 1500, ['#3a2214', '#5a3820', '#6a4428']);
    for (let i = 0; i < 16; i++) { const y = -500 + i * 130; const p = rect(-800, y, 2600, 128, { wash: i % 2 ? '#6a4226' : '#5a3820', washA: 1, w: 1.4, col: '#2a1408', key: 25100 + i }); hatch(p.path, p.bb, { gap: 9, a: 0.1, col: '#2a1408', ang: 0.1, key: 25120 + i }); }
    push(380, 120, 1); const w = rect(-300, -420, 600, 700, { wash: '#7aa0d0', washA: 1, w: 12, col: '#3a2010', key: 25140 }); ctx.save(); ctx.clip(w.path); push(-380, -120, 1); sky(t); pop(); ctx.restore();
    pencil([[0, -420], [0, 280]], { w: 10, col: '#3a2010' }); for (const sd of [-1, 1]) { push(sd * 300, -420, 1); const sh = poly([[0, 0], [sd * 220, 40], [sd * 220, 660], [0, 700]], { wash: '#4a6a3a', washA: 1, w: 2.4, col: '#1a2a10' }); for (let i = 1; i < 5; i++) pencil([[0, i * 140], [sd * 220, i * 130 + 30]], { w: 2, col: '#1a2a10', pass2: false }); pop(); }
    for (const [bx, by] of [[-400, -380], [1200, -360]]) { push(bx, by, 1); rect(-150, 0, 300, 640, { wash: '#f4ecd8', washA: 1, w: 2, col: '#8a7a5a' }); for (let j = 0; j < 5; j++) for (let i = 0; i < 6; i++) poly([[-120 + i * 48, 60 + j * 120], [-96 + i * 48, 36 + j * 120], [-72 + i * 48, 60 + j * 120], [-96 + i * 48, 84 + j * 120]], { wash: j % 2 ? '#c8221a' : '#2a6a3a', washA: 1, w: 1 }); pop(); }
    for (let i = 0; i < 4; i++) pencil([[-800, -560 + i * 6], [1800, -560 + i * 6]], { w: 30, col: '#2a1408', a: 0.8, pass2: false });
    for (let i = 0; i < 6; i++) { const x = -250 + i * 70; pencil([[x, -540], [x, -420 + (i % 2) * 30]], { w: 2, col: '#8a6a3a', pass2: false }); ell(x, -400 + (i % 2) * 30, 18, 22, { wash: '#d8a050', washA: 1, w: 1.4, col: '#5a3a08' }); }
    push(1000, 760, 1); rect(-260, 0, 520, 20, { wash: '#7a4a24', washA: 1, w: 1.8 }); for (let i = 0; i < 6; i++) { const x = -220 + i * 86; blob([[x - 26, 0], [x - 30, -70], [x - 12, -100], [x + 12, -100], [x + 30, -70], [x + 26, 0]], { wash: ['#b8642a', '#8a5a3a', '#c8783a'][i % 3], washA: 1, w: 1.6, col: '#3a1a08' }); } pop();
    push(-460, 900, 1); rect(-140, -240, 280, 380, { wash: '#e8e0d0', washA: 1, w: 3, col: '#5a4a3a' }); const f = blob([[-70, 100], [-60, 20], [60, 20], [70, 100]], { wash: '#1a0804', washA: 1, w: 2 }); glow(0, 60, 150, 'rgba(255,150,60,1)', 0.45); for (let i = 0; i < 5; i++) { const h = 40 + Math.sin(t * 9 + i) * 14; blob([[-50 + i * 24, 96], [-44 + i * 24, 96 - h], [-38 + i * 24, 96]], { wash: '#ffb040', washA: 1, line: false }); } pop();
  }
  function guests(t) {                                                  // хозяин, литовка, пара за столом — реагируют на посадку
    const sh = t > LAND() && t < EV.hk_bite + 0.5;
    human(-120, 1300, 1.05, t, { body: '#f4ecd8', legs: '#4a3a2a', hair: '#c8a060', face: sh ? 'shock' : 'smile', armL: 'hold', armR: sh ? 'up' : 'hold', look: 0.6, seed: 25150, long: 1, trim: '#c8221a', hat: 'scarf', hatCol: '#c8221a' });
    human(1040, 1300, 1.05, t, { body: '#5a3a2a', legs: '#2a2a2a', hair: '#3a2a1a', face: sh ? 'shock' : 'grin', armL: 'hold', armR: 'hold', look: -0.6, seed: 25151, flip: -1, beard: 'short', belt: '#c8a050' }); stache(1040, 1300, 1.05, -1);
    push(1100, 1140, 1); rect(-24, -60, 48, 60, { wash: '#c89a5a', washA: 1, w: 1.8, col: '#4a2a08' }); ell(0, -60, 24, 8, { wash: '#f8f0d8', washA: 1, w: 1.2 }); pop();
    for (const [x, sd, fl] of [[200, 25152, 1], [330, 25153, -1]]) human(x, 1320, 0.9, t, { body: sd % 2 ? '#3a5a3a' : '#8a3a2a', legs: '#2a2a2a', hair: '#2a1a0a', face: sh ? 'shock' : 'smile', armL: 'hold', armR: sh ? 'point' : 'hold', look: 0.5 * fl, seed: sd, flip: fl });
  }
  function ship(t) {                                                    // дирижабль → клёцка (рисуется в плоскости Тома, поверх всего фона)
    if (t > TS()) return; const P = shipPos(t);
    push(P.x, P.y, 1, P.rot + Math.sin(t * 1.3) * 0.03); zeppelinShip(0, 0, P.s, t, { potato: clamp((t - EV.hk_ger) / 1.2) * 0.7, txt: t > EV.hk_ger ? 'LZ' : '', key: 25160 }); pop();
    castShadow(P.x, 1440, 500 * P.s, 60, 0, 0.18);
    if (t > EV.hk_ger) { const k = popK(t, EV.hk_ger, 0.35); push(P.x + 40, P.y + 150, k, -0.12); rect(-190, -40, 380, 80, { wash: '#c8221a', washA: 0.18, w: 6, col: '#c8221a' }); txt('MADE IN GERMANY?', 0, 16, 40, { font: 'Osw', col: '#c8221a' }); pop(); }
  }
  function table(t) {                                                   // стол перед Томом (после cat): льняная скатерть, тарелка с посадившимся цеппелином
    const tb = rect(-500, 1440, 2100, 700, { wash: '#efe6d0', washA: 1, w: 3, col: '#6a5a3a', key: 25170 }); shadeG(tb.path, 0, 1440, 0, 1800, '#a89a7a', 0.4); for (let i = 0; i < 12; i++) pencil([[-480 + i * 180, 1450], [-470 + i * 180, 1900]], { w: 3, col: '#c8221a', a: 0.35, pass2: false }); pencil([[-500, 1500], [1600, 1500]], { w: 8, col: '#c8221a', a: 0.5, pass2: false });
    push(760, 1500, 1.35); ell(0, 0, 260, 60, { wash: '#c86a3a', washA: 1, w: 3, col: '#4a1a08' }); ell(0, -6, 220, 46, { wash: '#e8c8a0', washA: 1, w: 1.6, col: '#8a5a2a' }); for (let i = 0; i < 16; i++) { const a = i / 16 * 6.283; ell(Math.cos(a) * 240, Math.sin(a) * 52, 8, 4, { wash: '#2a6a3a', washA: 1, line: false }); } pop();
    if (t > LAND()) { const cut = t > EV.hk_bite ? sm(clamp((t - EV.hk_bite) / 0.4)) : 0; cepelinas(760, 1440, 0.95, t, { smet: 1, spirg: t > EV.hk_bite - 0.6 ? 1 : 0, cut, steam: 1, key: 25180 }); if (t < LAND() + 0.5) { const q = (t - LAND()) / 0.5; for (let i = 0; i < 9; i++) { const a = -2.9 + i * 0.35; ell(760 + Math.cos(a) * 260 * q, 1430 + Math.sin(a) * 140 * q + q * q * 120, 14 * (1 - q) + 4, 10 * (1 - q) + 3, { wash: CP.smet, washA: 1, line: false }); } } }
    if (t > EV.hk_q && t < EV.hk_bite - 0.2) { push(560, 1000, popK(t, EV.hk_q, 0.35)); txt('?', 0, 0, 150, { font: 'Osw', col: '#ffe070' }); pop(); }
    push(150, 1470, 1); blob([[-40, 0], [-46, -110], [-20, -140], [20, -140], [46, -110], [40, 0]], { wash: '#b8642a', washA: 1, w: 2, col: '#3a1a08' }); ell(0, -140, 22, 8, { wash: '#2a1a0a', washA: 1, line: false }); pop();
    castShadow(760, 1520, 380, 140, 0.6, 0.25);
  }
  function front(t) { push(-200, 2000, 1.6); for (let i = 0; i < 3; i++) ell(-60 + i * 70, -40, 40, 30, { wash: '#c89a5a', washA: 1, w: 2, col: '#4a2a10' }); pop(); push(1240, -200, 1.5); for (let i = 0; i < 4; i++) { pencil([[i * 40 - 60, -400], [i * 40 - 60, -40 - i * 30]], { w: 3, col: '#8a6a3a', pass2: false }); ell(i * 40 - 60, -20 - i * 30, 22, 26, { wash: '#d8a050', washA: 1, w: 1.4 }); } pop(); }
  WORLD.hook = (t, u, cat) => {
    if (t < TS()) {                                                     // снаружи: закат, поля, аист, дирижабль над Томом
      lay(14, () => { outdoor(t); haze('#ffd0a0', 0.05); });
      lay(1.6, () => { ship(t); });
      lay(1, () => { cat(); porch(t); lightPool(500, 1460, 600, 120, 'rgba(255,200,140,1)', 0.3); });
      lay(0.6, () => { motes(14, [-200, 0, 1300, 1200], '#fff4d8', t, 25191, { sp: 8, sz: 3, a: 0.4, wob: 4 }); moodDark(500, 900, 600, 1600, '#1a0a14', 0.35); });
    } else {
      lay(14, () => { tavern(t); haze('#ffc890', 0.05); });
      lay(3.2, () => { guests(t); lightPool(380, 1300, 600, 160, 'rgba(255,210,150,1)', 0.3); });
      lay(1, () => { cat(); table(t); });
      lay(0.6, () => { front(t); motes(16, [-200, 200, 1300, 1500], '#fff0d0', t, 25190, { sp: 5, sz: 3, a: 0.45, wob: 3 }); moodDark(600, 1000, 500, 1500, '#140a10', 0.45); });
    }
    puff(t);
  };
  const stPose = (b, t) => Object.assign(b, { x: 470, y: 1600, s: 1.18, flip: 1, look: [0.6, -0.6], hand: [210, -270], handF: [-70, -210], prop: 'forkCepP', propAng: -0.1 });
  DIR.hook = {
    outfit: 'hoodiePZ', light: { side: -1, rim: '#ffd8a0' }, grade: ['#ffb070', 0.07],
    act: () => [[0, 'awe'], [EV.hk_ger, 'shock'], [EV.hk_land, 'scared'], [LAND() + 0.2, 'suspicious'], [EV.hk_bite - 0.3, 'smug'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { const P = shipPos(t); if (t < LAND()) return Object.assign(stPose(b, t), { look: [clamp((P.x - 470) / 400, -1, 1), -0.9], sweat: t > EV.hk_ger, prop: undefined, hand: t > EV.hk_ger ? [180, -420] : [150, -300], point: t > EV.hk_ger ? 1 : undefined });
      const bite = t > EV.hk_bite; return Object.assign(stPose(b, t), { look: bite ? [-0.2, 0] : [0.7, 0.5], hand: bite ? [60, -330] : [230, -250], tailUp: bite, squash: b.squash + (bite && t < EV.hk_bite + 0.12 ? 0.1 : 0) }); },
    cam: () => [[0, 440, 900, 0.24], [EV.hk_ger, 520, 1000, 0.26], [TS(), 600, 1120, 0.28], [EV.hk_bite, 620, 1180, 0.32], [S1.hook, 620, 1180, 0.34]]
  };
})();
