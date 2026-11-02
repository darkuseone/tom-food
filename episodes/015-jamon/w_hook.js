/* 015 — `hook` + `button`: «„Олива на ногах“! Так испанцы зовут свинью для хамона. Почему?» Андалузский бар-хамонерия: под потолком на балках — ряд
   окороков с бумажными «зонтиками», стена в синих азулежу, полки с винными бутылками, бочки, меловая доска TAPAS, окно на солнечную улицу с белыми домами,
   посетители и бармен за стойкой. На стойке — хамонера с окороком (чёрная бирка), тарелка ломтиков, миска оливок, хлеб, бокалы. Том-кортадор в белом кителе
   с фартуком и ножом. По словам: «Олива на ногах!» — оливка из миски вырастает четыре свиных ножки и хвостик и бежит по стойке; «свинью» — в окне показывается
   чёрная иберийская свинья; «Почему?» — над Томом вопрос, оливка-свинка останавливается и тоже смотрит в камеру. «Откусим историю!» — Том ест ломтик.
   `button`: тот же кадр, Том подмигивает → петля в хук. */
(() => {
  EV.hk_olive = 0.1;
  EV.hk_pig = wtw('h1', 'свинью');
  EV.hk_why = wtw('h1', 'Почему?');
  EV.hk_grab = LS('h2') - 0.15;
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_bite, 0.2, 10]);
  KEYW.push('ногах»!', 'Почему?');

  function street(t) { vgrad(-200, 700, ['#7ab8e8', '#cfe6f6']); for (const [x, w, h] of [[-80, 220, 300], [150, 180, 380], [340, 240, 260], [580, 200, 340]]) { rect(x, 700 - h, w, h + 20, { wash: '#f8f4ea', washA: 1, w: 1.6, col: '#8a8070' }); for (let i = 0; i < 3; i++) rect(x + 20 + i * (w - 40) / 3, 740 - h, 34, 50, { wash: '#2a5a8a', washA: 1, w: 1.2 }); pencil([[x, 700 - h], [x + w, 700 - h]], { w: 8, col: '#c86a3a', pass2: false }); }
    for (let i = 0; i < 5; i++) ell(40 + i * 150, 700 - 280 - (i % 2) * 40, 26, 16, { wash: '#d83a6a', washA: 0.9, line: false }); }
  function wall(t) {                                                    // азулежу, окно на улицу, полки с вином, доска TAPAS, постер с гитарой
    vgrad(-500, 1500, ['#3a2418', '#5a3a24', '#6a4830']); for (let x = -400; x < 1600; x += 80) for (let y = 640; y < 1300; y += 80) { rect(x, y, 78, 78, { wash: (x / 80 + y / 80) % 2 ? '#e8eef6' : '#f4f6fa', washA: 1, w: 1.2, col: '#3a5a9a' }); push(x + 39, y + 39, 1); for (let k = 0; k < 4; k++) { push(0, 0, 1, k * 1.5708); blob([[0, 0], [10, -20], [0, -32], [-10, -20]], { wash: '#2a5ab0', washA: 0.85, line: false }); pop(); } ell(0, 0, 6, 6, { wash: '#e8b030', washA: 1, line: false }); pop(); }
    push(900, 380, 1); const w = rect(-160, -220, 320, 400, { wash: '#7ab8e8', washA: 1, w: 10, col: '#3a2010', key: 15100 }); ctx.save(); ctx.clip(w.path); push(-460, -440, 1); street(t); pop(); if (t > EV.hk_pig - 0.2 && t < S1.hook + 0.1) { const k = sm(clamp((t - EV.hk_pig + 0.2) / 0.5)); ibPig(lerp(260, 40, k), 200, 0.8, t, { walk: t * 9, flip: -1, key: 15101 }); } ctx.restore(); pencil([[0, -220], [0, 180]], { w: 8, col: '#3a2010' }); pencil([[-160, -20], [160, -20]], { w: 8, col: '#3a2010' });
      for (let i = 0; i < 4; i++) { ell(-120 + i * 80, 200, 30, 18, { wash: '#a8443a', washA: 1, w: 1.6 }); for (let k = 0; k < 3; k++) ell(-130 + i * 80 + k * 10, 180 - k * 6, 12, 10, { wash: ['#d8283a', '#f45a8a', '#ffffff'][k], washA: 1, w: 1 }); } pop();
    for (const y of [320, 520]) { rect(-380, y, 620, 18, { wash: '#5a3a24', washA: 1, w: 2, col: '#1a0a04' }); for (let i = 0; i < 9; i++) { const x = -350 + i * 66; shape(spline([[x - 14, y], [x - 16, y - 70], [x - 6, y - 100], [x - 6, y - 130], [x + 6, y - 130], [x + 6, y - 100], [x + 16, y - 70], [x + 14, y]], true, 6), { wash: ['#2a3a1a', '#5a1a2a', '#2a2a1a'][i % 3], washA: 1, w: 1.4, col: '#0a0a04' }); rect(x - 12, y - 60, 24, 30, { wash: '#f4ecd8', washA: 1, w: 1 }); } }
    push(380, 760, 1); rect(-150, -110, 300, 220, { wash: '#1e2a24', washA: 1, w: 6, col: '#6a4a24' }); txt('TAPAS', 0, -60, 40, { font: 'Hand', col: '#f4f0e6' }); for (const [i, s] of ['jamón ··· 9', 'olivas ··· 3', 'queso ··· 6', 'vino ··· 2'].entries()) txt(s, 0, -16 + i * 30, 22, { font: 'Hand', col: '#e8e4d8' }); pop();
  }
  function hams(t) {                                                    // балка с окороками и бумажными зонтиками
    rect(-400, -60, 2000, 50, { wash: '#4a2a14', washA: 1, w: 2.4, col: '#1a0a04' });
    for (let i = 0; i < 9; i++) { const x = -260 + i * 170, sw = Math.sin(t * 1.4 + i) * 0.04; push(x, -20, 1, sw); pencil([[0, 0], [0, 70]], { w: 3, col: '#c8a868', pass2: false }); jamonLeg(-50, 290, 0.8, -0.55, { rope: 0, key: 15110 + i, tag: ['black', 'red', 'black', 'green'][i % 4] });
      shape([[-40, 300], [40, 300], [8, 360], [-8, 360]], { wash: '#f8f4ea', washA: 1, w: 1.4, col: '#8a8070' }); pop(); }
  }
  function bar(t) {                                                     // бармен и посетители за стойкой, бочки
    for (const [x, i] of [[110, 0], [980, 1]]) { human(x, 1300, 1.05, t, { body: i ? '#c8443a' : '#2a4a6a', legs: '#2a2a34', hair: i ? '#1a1410' : '#5a3a20', face: t > EV.hk_why ? 'shock' : 'smile', armL: 'hold', armR: i && t > EV.hk_olive + 0.3 && t < EV.hk_why ? 'point' : 'hold', look: i ? -0.5 : 0.5, seed: 15120 + i, flip: i ? -1 : 1, long: i }); }
    stache(110, 1300, 1.05);
    for (const x of [-180, 1260]) { push(x, 1300, 1); const b = shape(spline([[-90, 0], [-110, -110], [-90, -220], [90, -220], [110, -110], [90, 0]], true, 6), { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#1a0a04' }); shadeG(b.path, 60, -110, -90, -110, '#3a2010', 0.5); for (const y of [-40, -180]) pencil([[-100, y], [100, y]], { w: 6, col: '#3a3a3a', pass2: false }); ell(0, -110, 30, 30, { wash: '#5a3414', washA: 1, w: 1.6 }); pop(); }
  }
  function olivePig(x, y, s, t, run) {                                  // оливка на свиных ножках: зелёная, блик, розовые копытца, хвостик-пружинка
    push(x, y, s); const ph = run ? t * 16 : 0; for (const [lx, p] of [[-26, 0], [-10, 3.14], [10, 0], [26, 3.14]]) { const sw = Math.sin(ph + p) * 8; pencil([[lx, -10], [lx + sw, 22]], { w: 7, col: '#f0a8a0' }); ell(lx + sw, 24, 6, 4, { wash: '#3a2a2a', washA: 1, line: false }); }
    const o = ell(0, -30, 46, 36, { wash: '#7a9a2a', washA: 1, w: 2.4, col: '#2a3a0a' }); shadeG(o.path, 30, 0, -20, -50, '#3a5a10', 0.4); ell(-18, -46, 12, 7, { wash: '#ffffff', washA: 0.7, line: false }); ell(40, -36, 8, 8, { wash: '#c8443a', washA: 1, w: 1.2 });
    pencil(spline([[-46, -30], [-58, -40], [-52, -50], [-60, -56]], false, 5), { w: 3, col: '#f0a8a0', pass2: false }); for (const sd of [-1, 1]) { ell(14 + sd * 12, -38, 6, 7, { wash: '#ffffff', washA: 1, w: 1 }); ell(16 + sd * 12, -37, 3, 3, { wash: '#1a1a1a', washA: 1, line: false }); } pop();
  }
  function counter(t) {                                                 // стойка: хамонера, ломтики, оливки, хлеб, бокалы, оливка-свинка
    const tb = rect(-400, 1440, 1900, 800, { wash: '#7a4424', washA: 1, w: 3, col: '#1a0a04', key: 15130 }); shadeG(tb.path, 0, 1900, 0, 1440, '#2a1408', 0.45); pencil([[-400, 1446], [1500, 1446]], { w: 8, col: '#c8904a', pass2: false }); for (let i = 0; i < 6; i++) pencil([[-400, 1490 + i * 70], [1500, 1494 + i * 70]], { w: 2, col: '#3a1a08', a: 0.5, pass2: false });
    jamonero(250, 1480, 0.85, t, { tag: 'black', cut: 0.7 });
    push(560, 1500, 1); ell(0, 0, 130, 30, { wash: '#f8f6f0', washA: 1, w: 2, col: '#4a4a52' }); if (!(t > EV.hk_grab && t < S1.hook + 0.1)) for (let i = 0; i < 4; i++) slice(-60 + i * 40, -12, 0.55, 0.3 * i - 0.4, { key: 15131 + i }); else for (let i = 1; i < 4; i++) slice(-60 + i * 40, -12, 0.55, 0.3 * i - 0.4, { key: 15131 + i }); pop();
    push(930, 1500, 1); ell(0, 0, 90, 26, { wash: '#e8d8b0', washA: 1, w: 2, col: '#6a4a2a' }); for (let i = 0; i < 8; i++) ell(-50 + (i % 4) * 32, -14 - Math.floor(i / 4) * 16, 16, 12, { wash: i % 3 ? '#7a9a2a' : '#2a2228', washA: 1, w: 1.4, col: '#1a1a10' }); pop();
    for (const x of [-40, 1080]) { push(x, 1500, 1); ell(0, 0, 30, 8, { wash: '#d8ecf4', washA: 0.5, w: 1.4 }); pencil([[0, 0], [0, -50]], { w: 3, col: '#d8ecf4', pass2: false }); const g = shape(spline([[-36, -50], [-40, -110], [0, -130], [40, -110], [36, -50], [0, -40]], true, 6), { wash: '#d8ecf4', washA: 0.3, w: 1.6, col: '#8aa0b0' }); blob([[-34, -70], [34, -70], [24, -46], [-24, -46]], { wash: '#7a1424', washA: 0.9, line: false }); pop(); }
    push(1180, 1530, 1); blob([[-90, 0], [-80, -50], [0, -64], [80, -50], [90, 0]], { wash: '#d8a050', washA: 1, w: 2, col: '#6a3a10' }); for (let i = 0; i < 4; i++) pencil([[-60 + i * 40, -50], [-50 + i * 40, -20]], { w: 3, col: '#8a5a20', pass2: false }); pop();
    if (t < S1.hook + 0.1 || t > S0.button) { const run = t > EV.hk_olive + 0.3 && t < EV.hk_why, gx = t < EV.hk_olive + 0.3 ? 930 : lerp(930, 700, sm(clamp((t - EV.hk_olive - 0.3) / Math.max(0.3, EV.hk_why - EV.hk_olive - 0.3)))), pk = t < EV.hk_olive ? 0 : popK(t, EV.hk_olive, 0.4); if (t > S0.button) olivePig(700, 1410, 1.2, t, false); else if (pk > 0) olivePig(gx, 1440 - 40 * pk + (run ? Math.abs(Math.sin(t * 16)) * -10 : 0), 1.2 * pk, t, run); }
    if (t > EV.hk_why && t < EV.hk_grab) { push(720, 900, popK(t, EV.hk_why, 0.35)); txt('?', 0, 0, 150, { font: 'Osw', col: '#ffe070' }); pop(); push(760, 1250, popK(t, EV.hk_why + 0.15, 0.35)); txt('?', 0, 0, 60, { font: 'Osw', col: '#ffe070' }); pop(); }
    crumbs(600, 1150, t, EV.hk_bite, 14, 15139, JM.meatL);
  }
  function front(t) { push(-40, 1960, 1.6); ell(0, -20, 110, 30, { wash: '#f8f6f0', washA: 1, w: 2 }); for (let i = 0; i < 5; i++) ell(-60 + i * 30, -40, 14, 10, { wash: '#7a9a2a', washA: 1, w: 1.2 }); pop(); push(1160, 1980, 1.6, -0.2); hamKnife(-120, -40, 0.9, 0.1); pop();
    motes(20, [-100, 300, 1200, 1500], '#fff4d0', t, 15140, { sp: 10, sz: 4, a: 0.4, wob: 2 }); rays(900, 380, 2.4, 0.4, 1400, 'rgba(255,240,200,1)', 0.12, 4, t); }
  WORLD.hook = (t, u, cat) => {
    lay(14, () => { wall(t); haze('#ffd8a0', 0.05); });
    lay(6, () => { hams(t); });
    lay(3.2, () => { bar(t); });
    lay(1, () => { cat(); });
    lay(0.94, () => { counter(t); });
    lay(0.6, () => { front(t); });
  };
  const stPose = (b, t) => Object.assign(b, { x: 740, y: 1700, s: 1.12, flip: -1, look: [-0.5, 0.5], hand: [200, -260], handF: [-60, -200], prop: 'knifeP', propAng: -0.2 });
  DIR.hook = {
    outfit: 'cortA', light: { side: 1, rim: '#ffe0a0' }, grade: ['#ffb070', 0.06],
    act: () => [[0, 'shock'], [EV.hk_olive + 0.3, 'awe'], [EV.hk_pig, 'suspicious'], [EV.hk_why, 'shock'], [EV.hk_grab, 'smug'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { if (t < EV.hk_pig) return Object.assign(stPose(b, t), { look: [-0.3, 0.6] }); if (t < EV.hk_why) return Object.assign(stPose(b, t), { look: [0.7, -0.6] }); if (t < EV.hk_grab) return Object.assign(stPose(b, t), { look: [0, 0], hand: [220, -360], handF: [-200, -330], prop: undefined });
      const k = sm(clamp((t - EV.hk_grab) / 0.3)), bite = t > EV.hk_bite; return Object.assign(b, { x: 740, y: 1700, s: 1.12, flip: -1, look: bite ? [0.2, -0.1] : [-0.6, 0.4], hand: bite ? [40, -350] : [lerp(260, 140, k), lerp(-230, -320, k)], handF: [-60, -200], prop: 'sliceP', propAng: 0.2, tailUp: bite, squash: b.squash + (bite && t < EV.hk_bite + 0.12 ? 0.1 : 0) }); },
    cam: () => [[0, 760, 1300, 0.36], [0.9, 600, 1200, 0.16, 'x'], [EV.hk_pig, 760, 900, 0.16], [EV.hk_why, 680, 1150, 0.24], [EV.hk_bite, 660, 1080, 0.36], [S1.hook, 660, 1060, 0.4]]
  };
  EV.bt_wink = wtw('x1', 'тонко-тонко!');
  WORLD.button = (t, u, cat) => WORLD.hook(t, u, cat);
  DIR.button = { outfit: 'cortA', light: { side: 1, rim: '#ffe0a0' }, grade: ['#ffb070', 0.06],
    act: () => [[S0.button, 'grin'], [EV.bt_wink - 0.3, 'laugh'], [EV.bt_wink, 'wink'], [DUR - 0.5, 'shock']],
    pose: (t, u, b) => { if (t > DUR - 0.7) return stPose(b, t); return Object.assign(b, { x: 740, y: 1700, s: 1.12, flip: -1, look: [0.4, -0.1], hand: [-120, -330], handF: [-60, -200], prop: 'sliceP', propAng: 0.2, tailUp: true }); },
    cam: () => [[S0.button, 640, 1080, 0.24], [DUR - 0.9, 700, 1200, 0.3], [DUR - 0.1, 760, 1300, 0.36], [DUR, 760, 1300, 0.36]] };
})();
