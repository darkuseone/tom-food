/* 028 — `kipferl`: «А рогалик-кипферль пекли в Австрии ещё в тринадцатом веке — за четыреста лет до осады!» Монастырская пекарня XIII в.:
   романские арки из грубого камня, в арочном окне — долина Дуная, замок на скале, виноградники; печь-купол с огнём, длинный стол, монахи
   в рясах раскатывают тесто и сворачивают рогалики, корзины, кувшины, связки чеснока, деревянные лопаты; голуби на подоконнике. Том —
   средневековый повар в котте и шапероне. Главный свет — луч из арки (утро), второй — огонь печи. По словам: «рогалик-кипферль» — Том
   сворачивает тесто в полумесяц; «пекли» — монах вынимает лопатой противень; «тринадцатом» — плашка «XIII в.»; «четыреста» — лента
   времени «XIII → 1683 = 400 лет» на плашке; «осады!» — Том посыпает рогалики сахарной пудрой облачком. Переход В сцену: облако муки
   поднимается снизу и рассеивается, открывая пекарню. */
(() => {
  EV.kp_roll = wtw('s4', 'рогалик-кипферль');
  EV.kp_bake = wtw('s4', 'пекли');
  EV.kp_13 = wtw('s4', 'тринадцатом');
  EV.kp_400 = wtw('s4', 'четыреста');
  EV.kp_sug = wtw('s4', 'осады!');
  KEYW.push('четыреста');

  function valley(t) {                                                    // вид в арке: Дунай, замок на скале, виноградники, облака
    vgrad(-300, 900, ['#8ab0d8', '#d8e8f0', '#f0ecd8']); for (let i = 0; i < 3; i++) ell(((t * 12 + i * 400) % 1600) - 300, 0 + i * 60, 180, 36, { wash: '#ffffff', washA: 0.7, line: false });
    sil([[-300, 520], [0, 300], [300, 420], [600, 260], [900, 400], [1300, 520]], '#6a8a6a', 0.9); push(600, 260, 1); rect(-60, -140, 120, 140, { wash: '#a8a090', washA: 1, w: 1.6 }); rect(-90, -80, 30, 80, { wash: '#a8a090', washA: 1, w: 1.4 }); rect(60, -100, 30, 100, { wash: '#a8a090', washA: 1, w: 1.4 }); poly([[-70, -140], [0, -200], [70, -140]], { wash: '#8a4a2a', washA: 1, w: 1.4 }); pop();
    rect(-300, 520, 1600, 200, { wash: '#5a8ab0', washA: 1, line: false }); for (let i = 0; i < 6; i++) pencil([[-200 + ((t * 30 + i * 220) % 1500), 560 + i * 20], [-120 + ((t * 30 + i * 220) % 1500), 560 + i * 20]], { w: 2, col: '#e8f4ff', a: 0.5, pass2: false });
    for (let r = 0; r < 4; r++) for (let i = 0; i < 12; i++) ell(-250 + i * 120 + (r % 2) * 60, 740 + r * 40, 20, 12, { wash: '#4a7a3a', washA: 1, line: false });
  }
  function hall(t) {                                                      // романские арки из камня, печь-купол, полки с корзинами, связки чеснока
    vgrad(-500, 1500, ['#5a4a3a', '#7a6a58', '#8a7a66']); for (let r = 0; r < 14; r++) for (let i = 0; i < 9; i++) { const x = -500 + i * 260 + (r % 2) * 130, y = -500 + r * 140; blob([[x, y], [x + 250, y + 6], [x + 254, y + 130], [x + 4, y + 134]], { wash: ['#9a8a74', '#8a7a64', '#a89880'][(i + r) % 3], washA: 1, w: 1.2, col: '#4a3a2a' }); }
    push(560, 360, 1); const a = blob([[-260, 360], [-260, -120], [-180, -280], [0, -340], [180, -280], [260, -120], [260, 360]], { wash: '#8ab0d8', washA: 1, w: 10, col: '#3a2a1a', key: 28600 }); ctx.save(); ctx.clip(a.path); push(-560, -360, 1); push(560, 360, 1); valley(t); pop(); pop(); ctx.restore(); pencil(spline([[-280, 360], [-280, -130], [-190, -300], [0, -360], [190, -300], [280, -130], [280, 360]], false, 10), { w: 26, col: '#7a6a58', pass2: false });
    for (let i = 0; i < 3; i++) { ell(-140 + i * 70, 340, 14, 10, { wash: '#a8a8b0', washA: 1, w: 1.2 }); } pop();
    push(1040, 1180, 1); const ov = blob([[-200, 0], [-200, -220], [-120, -360], [0, -400], [120, -360], [200, -220], [200, 0]], { wash: '#a8805a', washA: 1, w: 3, col: '#3a2010', key: 28601 }); shadeG(ov.path, -200, 0, 200, 0, '#5a3a1a', 0.4); blob([[-90, 0], [-90, -120], [0, -170], [90, -120], [90, 0]], { wash: '#1a0a04', washA: 1, w: 2 }); for (let i = 0; i < 5; i++) { const fh = 90 + Math.sin(t * 9 + i * 2) * 30; blob([[-70 + i * 30, 0], [-62 + i * 30, -fh], [-50 + i * 30, -fh * 0.6], [-40 + i * 30, 0]], { wash: i % 2 ? '#ffb040' : '#ff7a20', washA: 1, line: false }); } glow(0, -60, 200, 'rgba(255,150,60,1)', 0.32); pop();
    for (let i = 0; i < 5; i++) { push(-140 + i * 70, -300, 1); pencil([[0, 0], [0, 140]], { w: 2, col: '#6a5a3a', pass2: false }); for (let j = 0; j < 5; j++) ell(Math.sin(j) * 12, 150 + j * 18, 16, 14, { wash: '#f4ecd8', washA: 1, w: 1.2, col: '#8a7a5a' }); pop(); }
  }
  function monks(t) {                                                     // монахи раскатывают тесто, монах с лопатой у печи
    const bake = t > EV.kp_bake;
    human(240, 1300, 1.05, t, { body: '#5a4a3a', legs: '#3a2a1a', hair: '#8a6a4a', face: 'smile', armL: 'hold', armR: Math.sin(t * 6) > 0 ? 'up' : 'hold', look: 0.4, seed: 28610, long: 1, hat: 'hood', hatCol: '#5a4a3a' }); rect(150, 1300 - 120, 180, 24, { wash: '#f4e8c8', washA: 1, w: 1.4 });
    human(900, 1300, 1.0, t, { body: '#4a3a2a', legs: '#2a1a1a', hair: '#c8c8c8', face: bake ? 'grin' : 'calm', armL: 'up', armR: 'up', look: 0.5, seed: 28611, long: 1, hat: 'hood', hatCol: '#4a3a2a' });
    const k = bake ? clamp((t - EV.kp_bake) / 0.8) : 0; push(900 + k * 60, 1000, 1, -0.2); pencil([[0, 0], [220, 40]], { w: 8, col: '#8a6a3a', pass2: false }); rect(200, 20, 120, 16, { wash: '#8a6a3a', washA: 1, w: 1.4 }); if (k > 0.2) for (let i = 0; i < 3; i++) kipferl(220 + i * 36, 18, 0.18, t, { key: 28612 + i }); pop();
  }
  function table(t) {                                                     // стол: тесто, рогалики рядами, мука, кувшин, корзина, сахарная пудра
    const tb = rect(-500, 1440, 2200, 600, { wash: '#8a6a44', washA: 1, w: 3, col: '#3a2010', key: 28620 }); shadeG(tb.path, 0, 1440, 0, 1900, '#4a3018', 0.5); for (let i = 0; i < 6; i++) pencil([[-500, 1470 + i * 70], [1700, 1476 + i * 70]], { w: 2, col: '#5a3a20', a: 0.5, pass2: false });
    push(340, 1450, 1); blob([[-160, 0], [-150, -40], [150, -40], [160, 0]], { wash: '#f4e8c8', washA: 1, w: 2, col: '#a89a70' }); for (let i = 0; i < 4; i++) kipferl(-110 + i * 72, -42, 0.24, t, { key: 28621 + i }); pop();
    if (t > EV.kp_sug) { const q = clamp((t - EV.kp_sug) / 0.8); for (let i = 0; i < 6; i++) ell(340 + Math.cos(i) * 140 * q, 1360 - q * 80 + Math.sin(i * 2) * 20, 60 * q + 10, 30 * q + 6, { wash: '#ffffff', washA: 0.5 * (1 - q), line: false }); }
    push(1000, 1450, 1); blob([[-36, 0], [-44, -90], [-20, -120], [20, -120], [44, -90], [36, 0]], { wash: '#a8643a', washA: 1, w: 2 }); pop(); push(1140, 1450, 1); blob([[-70, 0], [-80, -60], [80, -60], [70, 0]], { wash: '#c89a5a', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) ell(-40 + i * 26, -66, 16, 12, { wash: '#f4ecd8', washA: 1, w: 1 }); pop();
    castShadow(640, 1450, 320, 90, -0.5, 0.25);
  }
  WORLD.kipferl = (t, u, cat) => {
    lay(9, () => { hall(t); haze('#fff0d8', 0.05); });
    lay(2.6, () => { monks(t); shaft(560, 100, 400, 1500, 0.15, 'rgba(255,245,215,1)', 0.16); });
    lay(1, () => { lightPool(560, 1460, 660, 120, 'rgba(255,235,190,1)', 0.34); cat(); table(t); });
    lay(0.65, () => { push(-150, 1950, 1.4); blob([[-90, 0], [-100, -200], [-60, -240], [60, -240], [100, -200], [90, 0]], { wash: '#e8dcc0', washA: 1, w: 3, col: '#6a5a3a' }); pop(); push(1230, 140, 1.4); for (let i = 0; i < 4; i++) { const sw = Math.sin(t * 1.3 + i) * 8; pencil(spline([[i * 40, 0], [i * 36 + sw, 200], [i * 30 + sw * 2, 380]], false, 5), { w: 3, col: '#5a7a2a', pass2: false }); for (let j = 0; j < 4; j++) ell(i * 30 + sw * 1.5 + 8, 120 + j * 70, 16, 10, { wash: '#6a9a3a', washA: 1, line: false }); } pop();
      motes(18, [200, 0, 1000, 1400], '#fff8e0', t, 28690, { sp: 2, sz: 3, a: 0.5, wob: 5 }); moodDark(560, 1000, 520, 1500, '#140c06', 0.42); });
  };
  DIR.kipferl = {
    outfit: 'medcook', light: { side: -1, rim: '#fff0c8' }, grade: ['#ffd8a0', 0.05],
    act: () => [[S0.kipferl, 'grin'], [EV.kp_bake, 'proud'], [EV.kp_13, 'awe'], [EV.kp_400, 'shock'], [EV.kp_sug, 'smug']],
    pose: (t, u, b) => { const roll = t < EV.kp_bake; return Object.assign(b, { x: 700, y: 1600, s: 1.15, flip: true, look: [-0.6, 0.5], hand: roll ? [230, -210 + Math.sin(t * 10) * 10] : t > EV.kp_sug ? [220, -330] : [160, -260], handF: [-90, -230], prop: roll ? 'pinP' : 'kipferlP', tailUp: t > EV.kp_400 }); },
    hud: t => infoPlate(t, EV.kp_400 - 0.1, S1.kipferl - 0.15, { kind: 'num', title: 'КИПФЕРЛЬ: XIII ВЕК', big: '400 ЛЕТ', sub: 'до осады Вены' }),
    cam: () => [[S0.kipferl, 560, 1040, 0.22], [EV.kp_13, 580, 1100, 0.27], [S1.kipferl, 600, 1130, 0.3]]
  };
  // ---------------------------------------------------------------- переход: облако муки поднимается снизу и рассеивается
  TRANS_IN.kipferl = { a: 0.3, b: 0.5, runA: 0.4, fx(k, t, A, B) {
    const up = k < 0.45 ? sm(k / 0.45) : 1, out = k > 0.45 ? sm((k - 0.45) / 0.55) : 0; drawBuf(k < 0.45 ? A : B, 1, 540, 960);
    scr(() => { const r = rng(28699); for (let i = 0; i < 40; i++) { const x = r() * 1080, y0 = 2000 + r() * 300, y = lerp(y0, r() * 1920, up) - out * 400, R = (150 + r() * 220) * (1 - out * 0.7); ell(x + Math.sin(t * 2 + i) * 30, y, R, R * 0.8, { wash: i % 3 ? '#fbf8f0' : '#e8e0d0', washA: 0.9 * (1 - out), line: false }); } });
  } };
})();
