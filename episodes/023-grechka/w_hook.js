/* 023 — `hook`: «Гречка — вовсе не злак! А её родня — у тебя на грядке. Угадаешь, кто? / Откусим историю!» Золотой закат над цветущим полем гречихи:
   бело-розовое море соцветий на красных стеблях до горизонта, дальние холмы с перелеском и деревней, мельница, ряд ульев-домиков, плетень, пасечница
   с дымарём, дед на лавочке, мальчишка с сачком; у плетня — дачная грядка со щавелем и ревенем (ответ всё время в кадре, табличка «ГРЯДКА»).
   На столе-колоде перед Томом: чугунок с рассыпчатой кашей (пар), кружка молока, банка мёда с сотами, краюха хлеба, пучок гречихи, пчёлы.
   Том — пасечник (шляпа с поднятой сеткой + фартук) с расписной ложкой. По словам: «Гречка» — Том зачерпывает кашу; «злак!» — колосок пшеницы на столе
   зачёркивается красным крестом; «родня» — Том показывает на грядку, ревень качает листьями; «грядке.» — щавель и ревень подсвечены закатом;
   «кто?» — над грядкой «?»; «историю!» — укус: хруст, зёрна сыплются, пчела садится на ложку. Главный свет — низкое солнце справа, второй — костерок под чугунком. */
(() => {
  EV.hk_scoop = wtw('h1', 'Гречка');
  EV.hk_not = wtw('h1', 'злак!');
  EV.hk_kin = wtw('h1', 'родня');
  EV.hk_bed = wtw('h1', 'грядке.');
  EV.hk_q = wtw('h1', 'кто?');
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_not + 0.05, 0.14, 6], [EV.hk_bite, 0.18, 8]);
  KEYW.push('злак!', 'грядке.');
  const SUN = [930, 760];
  function sky(t) {                                                      // закатное небо: золото → розовый → сирень, солнце, облака-перья, птицы
    vgrad(-700, 1300, ['#6a5a9a', '#c87a9a', '#f4a870', '#ffd890', '#ffe8b0']);
    glow(SUN[0], SUN[1], 300, 'rgba(255,220,140,1)', 0.35); ell(SUN[0], SUN[1], 70, 70, { wash: '#fff2c0', washA: 1, line: false });
    for (let i = 0; i < 6; i++) { const x = ((-400 + i * 330 + t * 8) % 2100) - 400, y = -300 + (i % 3) * 140; blob([[x, y], [x + 120, y - 26], [x + 300, y - 14], [x + 420, y + 6], [x + 260, y + 18], [x + 80, y + 14]], { wash: i % 2 ? '#f8c0a8' : '#ffd8b8', washA: 0.75, line: false }); pencil([[x + 40, y + 10], [x + 380, y + 4]], { w: 3, col: '#c87a8a', a: 0.4, pass2: false }); }
    for (let i = 0; i < 5; i++) { const k = (t * 0.06 + i * 0.2) % 1, x = -200 + k * 1500, y = 200 + Math.sin(k * 9 + i) * 40 + i * 30; pencil([[x - 14, y], [x, y - 8], [x + 14, y]], { w: 3, col: '#3a2a4a', pass2: false }); }
  }
  function hills(t) {                                                    // дальние холмы, перелесок, деревня, мельница, церквушка-силуэт
    sil([[-700, 1000], [-400, 880], [0, 900], [400, 860], [800, 900], [1200, 870], [1800, 920], [1800, 1200], [-700, 1200]], '#9a7aa0', 0.85);
    for (let i = 0; i < 40; i++) { const x = -600 + i * 60, h = 40 + (i * 37 % 50); ell(x, 905 - h * 0.4, 30, h * 0.6, { wash: i % 3 ? '#7a6a8a' : '#6a5a7a', washA: 0.9, line: false }); }
    sil([[-700, 1050], [-300, 980], [200, 1000], [700, 970], [1300, 990], [1800, 960], [1800, 1250], [-700, 1250]], '#b88a8a', 0.9);
    for (let i = 0; i < 7; i++) { const x = 1050 + i * 70, h = 50 + (i % 3) * 12; rect(x, 990 - h, 52, h, { wash: '#8a6a6a', washA: 1, w: 1.2, col: '#4a3040' }); poly([[x - 6, 990 - h], [x + 26, 960 - h], [x + 58, 990 - h]], { wash: '#6a4a5a', washA: 1, w: 1.2, col: '#3a2030' }); rect(x + 18, 990 - h * 0.6, 14, 14, { wash: '#ffd890', washA: 1, line: false }); }
    push(-200, 1000, 1); rect(-20, -170, 40, 170, { wash: '#8a6a5a', washA: 1, w: 1.6, col: '#3a2030' }); poly([[-30, -170], [0, -210], [30, -170]], { wash: '#5a3a4a', washA: 1, w: 1.4 }); const a = t * 0.8; for (let i = 0; i < 4; i++) { const an = a + i * 1.571; pencil([[0, -180], [Math.cos(an) * 110, -180 + Math.sin(an) * 110]], { w: 6, col: '#4a3040', pass2: false }); poly([[Math.cos(an) * 40, -180 + Math.sin(an) * 40], [Math.cos(an) * 110, -180 + Math.sin(an) * 110], [Math.cos(an + 0.25) * 104, -180 + Math.sin(an + 0.25) * 104], [Math.cos(an + 0.35) * 40, -180 + Math.sin(an + 0.35) * 40]], { wash: '#e8d0c0', washA: 0.85, w: 1, col: '#4a3040' }); } pop();
    haze('#ffd0b0', 0.08);
  }
  function field(t) {                                                    // море цветущей гречихи: полосы-гряды до горизонта, ульи, плетень, люди
    vgrad(1000, 1500, ['#e8c8d0', '#f4dce0', '#e8b8c4']);
    buckField(1010, 1380, 120, t, 23801, { hMax: 120 });
    for (let i = 0; i < 6; i++) { const x = 820 + i * 150; beehive(x, 1300 - (i % 2) * 20, 0.62 + (i % 2) * 0.06, t, { key: 23810 + i, col: ['#e8c060', '#7aa8c8', '#e8e0d0', '#c86a4a', '#a8c870', '#e8c060'][i] }); }
    for (let i = 0; i < 22; i++) { const x = -500 + i * 50; pencil([[x, 1320], [x + 4, 1230]], { w: 6, col: '#6a4a2a', pass2: false }); } for (let k = 0; k < 3; k++) pencil(spline([[-500, 1250 + k * 22], [-200, 1260 + k * 22], [100, 1252 + k * 22], [560, 1262 + k * 22]], false, 6), { w: 5, col: '#8a6a3a', pass2: false });
    const sm1 = t > EV.hk_kin && t < EV.hk_bite;
    human(1180, 1330, 0.95, t, { body: '#c8584a', legs: '#4a3a3a', long: 1, hat: 'scarf', hatCol: '#f4e8d8', armL: 'hold', armR: sm1 ? 'point' : 'hold', face: sm1 ? 'grin' : 'smile', seed: 23820, flip: -1, look: -0.6, skin: '#f0c8a8' });
    push(1130, 1180, 0.95); const sm = rect(-14, -40, 28, 40, { wash: '#b8b8c0', washA: 1, w: 1.4, col: '#3a3a44' }); metalG(sm.path, -6, -30, 30, '#ffffff', '#b8b8c4', '#5a5a68', 0.7); pop();
    for (let i = 0; i < 4; i++) { const ph = (t * 0.4 + i / 4) % 1; ell(1130 + ph * 50, 1130 - ph * 160, 12 + ph * 30, 10 + ph * 20, { wash: '#f4ece8', washA: 0.45 * (1 - ph), line: false }); }
    human(-120, 1340, 0.9, t, { body: '#4a5a7a', legs: '#3a3a44', hair: '#e8e8e8', beard: 'long', face: t > EV.hk_q ? 'grin' : 'calm', armL: 'hold', armR: t > EV.hk_q ? 'up' : 'down', seed: 23821, look: 0.5, hat: 'cap', hatCol: '#3a3a3a' });
    rect(-220, 1290, 200, 14, { wash: '#8a6a3a', washA: 1, w: 1.4, col: '#3a2410' }); for (const lx of [-210, -40]) pencil([[lx, 1300], [lx, 1340]], { w: 6, col: '#6a4a2a', pass2: false });
    const bx = 100 + Math.sin(t * 1.6) * 60; human(bx, 1350, 0.7, t, { body: '#f4e8d0', legs: '#3a4a6a', hair: '#e8c060', face: 'grin', armL: 'swing', armR: 'up', seed: 23822, flip: Math.cos(t * 1.6) > 0 ? 1 : -1 });
    push(bx + 20 * (Math.cos(t * 1.6) > 0 ? 1 : -1), 1350 - 300 * 0.7, 1); pencil([[0, 0], [30, -90]], { w: 3, col: '#8a6a3a', pass2: false }); ell(36, -110, 26, 20, { wash: '#ffffff', washA: 0.4, w: 1.4, col: '#6a6a6a' }); pop();
    haze('#ffd8c0', 0.05);
  }
  function bed(t) {                                                      // дачная грядка: щавель и ревень у плетня, табличка, лейка, пугало
    const lit = clamp((t - EV.hk_bed + 0.2) / 0.5) * (t < EV.hk_bite + 0.6 ? 1 : 0);
    const gb = rect(280, 1380, 340, 70, { wash: '#6a4026', washA: 1, w: 2, col: '#2a1408', key: 23830 }); shadeG(gb.path, 0, 1380, 0, 1450, '#2a1408', 0.45); for (let i = 0; i < 12; i++) ell(290 + i * 28, 1390 + (i % 2) * 10, 20, 6, { wash: '#8a5a36', washA: 0.8, line: false });
    rect(270, 1372, 360, 16, { wash: '#9a7a4a', washA: 1, w: 1.6, col: '#3a2410' });
    rhubarb(370, 1390, 0.78 + Math.sin(t * 6) * 0.02 * (t > EV.hk_kin && t < EV.hk_kin + 1 ? 1 : 0), t * (t > EV.hk_kin ? 3 : 1), { key: 23831 });
    for (let i = 0; i < 9; i++) sorrelLeaf(450 + i * 16, 1392, 0.62 + (i % 3) * 0.08, -0.5 + i * 0.12 + Math.sin(t * 1.2 + i) * 0.04, { key: 23840 + i });
    if (lit > 0) lightPool(440, 1300, 300, 160, 'rgba(255,220,150,1)', 0.3 * lit);
    push(620, 1376, 0.8, 0.04); pencil([[0, 0], [0, -120]], { w: 6, col: '#6a4a2a', pass2: false }); rect(-70, -170, 140, 56, { wash: '#f4e8c8', washA: 1, w: 2, col: '#4a3010' }); txt('ГРЯДКА', 0, -132, 26, { font: 'Hand', col: '#3a2a1a' }); pop();
    push(270, 1440, 0.8); const lv = blob([[-40, 0], [-36, -60], [30, -60], [36, 0]], { wash: '#5a8a6a', washA: 1, w: 1.8, col: '#1a3a24' }); metalG(lv.path, -10, -40, 50, '#a8d8b8', '#5a8a6a', '#1a3a24', 0.6); pencil([[30, -50], [80, -86]], { w: 6, col: '#5a8a6a', pass2: false }); pencil(spline([[-36, -50], [-60, -80], [-30, -70]], false, 4), { w: 4, col: '#1a3a24', pass2: false }); pop();
    if (t > EV.hk_q - 0.05 && t < EV.hk_bite + 0.3) { const k = popK(t, EV.hk_q, 0.4); push(420, 1060, k, Math.sin(t * 5) * 0.1); txt('?', 0, 0, 180, { font: 'Osw', col: '#c8243a' }); pop(); }
  }
  function table(t) {                                                    // стол-колода: доски, чугунок на треноге с угольками, мёд, хлеб, молоко, колосок
    const tb = rect(-400, 1440, 2000, 600, { wash: '#8a5a32', washA: 1, w: 3, col: '#2a1408', key: 23850 }); shadeG(tb.path, 0, 1440, 0, 1800, '#3a1a08', 0.5);
    for (let i = 0; i < 6; i++) pencil([[-400, 1474 + i * 48], [1600, 1480 + i * 48]], { w: 3, col: '#4a2a10', a: 0.5, pass2: false }); for (let i = 0; i < 8; i++) ell(-200 + i * 230, 1500 + (i % 3) * 50, 18, 6, { wash: '#5a3418', washA: 0.6, line: false });
    rect(-400, 1430, 2000, 16, { wash: '#a8743e', washA: 1, w: 2, col: '#3a1a08' });
    lightPool(700, 1520, 520, 110, 'rgba(255,214,140,1)', 0.35);
    for (let i = 0; i < 4; i++) { const f = flick(t, i); blob([[920 + i * 22, 1500], [928 + i * 22, 1470 - 24 * f], [940 + i * 22, 1452 - 30 * f], [952 + i * 22, 1476 - 16 * f], [960 + i * 22, 1500]], { wash: i % 2 ? '#ffb030' : '#ff7020', washA: 0.95, line: false }); }
    glow(960, 1470, 110, 'rgba(255,150,60,1)', 0.3); for (const lx of [880, 1040]) pencil([[lx, 1510], [960, 1340]], { w: 6, col: '#2a2420', pass2: false });
    chugunok(960, 1450, 0.8, t, { key: 23860, kasha: 1, steam: 0.55 });
    const scoop = clamp((t - EV.hk_scoop) / 0.4); if (scoop > 0 && scoop < 1) for (let i = 0; i < 6; i++) grainB(900 + i * 12, 1320 - scoop * 60 + i * 4, 0.3, i, { key: 23865 + i });
    push(390, 1520, 0.85); const jr = rect(-50, -110, 100, 110, { wash: '#e89a20', washA: 0.85, w: 2, col: '#6a3a08', key: 23870 }); shadeG(jr.path, 50, 0, -50, 0, '#8a4a08', 0.4); pencil([[-36, -100], [-30, -10]], { w: 8, col: '#fff0a0', a: 0.5, pass2: false }); rect(-56, -128, 112, 22, { wash: '#f4f0e0', washA: 1, w: 1.6 }); pencil([[-56, -118], [56, -118]], { w: 2, col: '#c8343a', pass2: false }); rect(-34, -70, 68, 40, { wash: '#f4ecd0', washA: 1, w: 1.2 }); txt('МЁД', 0, -44, 18, { font: 'Osw', col: '#6a3a08' });
    pencil(spline([[30, -128], [50, -170], [40, -200]], false, 4), { w: 5, col: '#c8a060', pass2: false }); pop();
    push(480, 1600, 0.7); const cm = poly([[-60, 0], [-40, -40], [40, -40], [60, 0], [40, 40], [-40, 40]], { wash: '#f4c040', washA: 1, w: 1.6, col: '#8a5a08' }); for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) poly([[-40 + c * 24, -22 + r * 20], [-34 + c * 24, -30 + r * 20], [-24 + c * 24, -30 + r * 20], [-18 + c * 24, -22 + r * 20], [-24 + c * 24, -14 + r * 20], [-34 + c * 24, -14 + r * 20]], { wash: '#ffe080', washA: 0.8, w: 1, col: '#c88a10' }); pop();
    push(1040, 1610, 0.7); const br = blob([[-110, 0], [-100, -50], [-40, -80], [60, -76], [110, -40], [110, 0]], { wash: '#a85a22', washA: 1, w: 2, col: '#3a1a04', key: 23872 }); shadeG(br.path, 0, -80, 0, 0, '#5a2a08', 0.4); for (let i = 0; i < 5; i++) pencil([[-80 + i * 40, -60], [-60 + i * 40, -20]], { w: 3, col: '#5a2a08', a: 0.6, pass2: false }); ell(-110, -20, 20, 26, { wash: '#f4dca0', washA: 1, w: 1.4, col: '#8a5a20' }); pop();
    push(300, 1560, 0.8); const mg = rect(-44, -100, 88, 100, { wash: '#e8eef4', washA: 1, w: 2, col: '#4a5a6a', key: 23873 }); shadeG(mg.path, 44, 0, -44, 0, '#8aa0b8', 0.4); ell(0, -100, 44, 10, { wash: GR.milk, washA: 1, w: 1.4 }); for (let i = 0; i < 5; i++) ell(-30 + i * 15, -50, 5, 5, { wash: '#2a5aa8', washA: 0.8, line: false }); pencil(spline([[44, -80], [70, -60], [44, -30]], false, 4), { w: 6, col: '#d8e0e8', pass2: false }); pop();
    const nx = clamp((t - EV.hk_not) / 0.35); push(760, 1490, 1, -0.5); pencil([[-90, 0], [70, 0]], { w: 4, col: '#c89a3a', pass2: false }); for (let i = 0; i < 8; i++) for (const sd of [-1, 1]) ell(30 + i * 9, sd * 7, 8, 4, { wash: '#e8b850', washA: 1, w: 1, col: '#8a6a10', rot: sd * 0.5 }); pop();
    if (nx > 0) { push(790, 1460, popK(t, EV.hk_not, 0.3)); pencil([[-60, -50], [60, 50]], { w: 12, col: '#d8242a', pass2: false }); pencil([[60, -50], [-60, 50]], { w: 12, col: '#d8242a', pass2: false }); pop(); if (t < EV.hk_kin + 1) bubbleTag('НЕ ЗЛАК', 760, 1330, t, EV.hk_not + 0.1, '#c8243a', 40, -0.05); }
    for (let i = 0; i < 4; i++) buckPlant(560 + i * 16, 1470, 150 + i * 14, t, { seed: 23880 + i, sway: 3 });
    castShadow(960, 1500, 220, 120, -0.8, 0.25); castShadow(390, 1520, 100, 90, -0.8, 0.22); castShadow(300, 1560, 80, 90, -0.8, 0.2);
  }
  function front(t) {                                                    // передний план: крупные стебли гречихи с цветами по краям, пчёлы, пыльца
    for (let i = 0; i < 4; i++) buckPlant(370 + i * 20, 1820, 240 + i * 40, t, { seed: 23890 + i, sway: 6 });
    for (let i = 0; i < 3; i++) buckPlant(930 + i * 24, 1820, 240 + i * 50, t, { seed: 23896 + i, sway: 6 });
    bees(470, 1450, 3, t, 23899, 60); bees(930, 1500, 2, t, 23898, 50);
  }
  WORLD.hook = (t, u, cat) => {
    lay(34, () => { sky(t); });
    lay(16, () => { hills(t); shaft(SUN[0], SUN[1] - 100, 240, 2400, 0.7, 'rgba(255,220,160,1)', 0.12); });
    lay(5, () => { field(t); castShadow(1180, 1330, 120, 160, -0.9, 0.2); castShadow(-120, 1340, 120, 160, -0.9, 0.2); });
    lay(2.2, () => { bed(t); });
    lay(1, () => { cat(); table(t); });
    lay(0.7, () => { front(t); motes(22, [300, 900, 1000, 1700], '#ffe8a0', t, 23900, { sp: 10, sz: 3, a: 0.5, wob: 8 }); moodDark(820, 1100, 560, 1500, '#3a1a3a', 0.35); });
  };
  DIR.hook = {
    outfit: 'beeA', light: { side: 1, rim: '#ffc880' }, grade: ['#ffb080', 0.07],
    act: () => [[0, 'smug'], [EV.hk_not, 'shock'], [EV.hk_kin, 'sideeye'], [EV.hk_bed, 'wink'], [EV.hk_q, 'suspicious'], [EV.h2, 'grin'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { const bite = t > EV.hk_bite, pt = t > EV.hk_kin && t < EV.hk_q + 0.3;
      Object.assign(b, { x: 680, y: 1590, s: 1.18, flip: pt ? true : false, look: t < EV.hk_not ? [0.2, 0.3] : t < EV.hk_kin ? [0, -0.1] : pt ? [-0.8, 0.1] : [0, 0],
        hand: bite ? [70, -250] : [170, -230], handF: pt ? [-230, -300] : [-140, -200], point: pt, prop: bite && t < EV.hk_bite + 0.2 ? 'spoonKP' : bite ? 'spoonEmptyP' : 'spoonKP', propAng: bite ? -1.2 : -0.6, tailUp: bite });
      if (bite && t < EV.hk_bite + 0.12) b.squash = (b.squash || 0) + 0.1; return b; },
    afterCat: (t, u, P) => {
      if (t > EV.hk_bite && t < EV.hk_bite + 1.4) { const k = clamp((t - EV.hk_bite) / 1.2); for (let i = 0; i < 12; i++) { const r = rng(23910 + i), a = r() * 6.283; grainB(P.x - 60 * P.s + Math.cos(a) * k * 160, P.y - 380 * P.s + Math.sin(a) * k * 80 + k * k * 300, 0.32, r() * 6 + k * 8, { key: 23920 + i }); } }
      if (t > EV.hk_bite + 0.3) bees(P.x - 120 * P.s, P.y - 420 * P.s, 1, t, 23930, 30);
    },
    cam: () => [[0, 650, 1140, 0.3], [EV.hk_not, 670, 1150, 0.31], [EV.hk_kin, 600, 1130, 0.27], [EV.hk_q, 590, 1130, 0.27], [EV.h2, 640, 1140, 0.3], [EV.hk_bite, 650, 1140, 0.31], [S1.hook, 650, 1140, 0.32]]
  };
})();
