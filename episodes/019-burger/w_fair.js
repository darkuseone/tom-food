/* 019 — `fair`: «В Америке её ели вилкой. Но на ярмарке вилки нет — котлету сунули в булку.» Сельская ярмарка в США, 1885, тёплый вечер:
   полосатые шатры, гирлянды флажков, карусель с лошадками, воздушный шар вдали, амбар и силосная башня, загон с призовой коровой и лентой, толпа гуляет
   с кукурузой и сахарной ватой, мальчишка с воздушным змеем, дама с зонтиком. Главный свет — низкое закатное солнце справа (золотые лучи), второй — фонари на шатрах.
   Том — ярмарочный продавец в канотье (parisA) за прилавком с жаровней; вывеска HOT MEAT 5¢. По словам: «вилкой» — Том культурно режет котлету вилкой и ножом
   на фарфоровой тарелке (вставка-виньетка «ресторан»); «ярмарке» — толпа валит мимо, дама толкает Тома; «вилки нет» — вилка вылетает из лапы, кувыркается и
   втыкается в землю «дзынь»; «сунули в булку» — хлоп! котлета в разрезанной булке, Том поднимает первый бургер, толпа ахает. Пауза-гэг: вилка ещё качается в земле,
   Том откусывает — мальчишка сглатывает. Переход В сцену: полосатый полог шатра задёргивается с двух сторон и раздвигается уже на ярмарке. */
(() => {
  EV.fr_fork = wtw('s3', 'вилкой.');
  EV.fr_fair = wtw('s3', 'ярмарке');
  EV.fr_nofork = wtw('s3', 'нет');
  EV.fr_bun = wtw('s3', 'булку.');
  EV.fr_gag = LE('s3') + 0.05;
  SHAKES.push([EV.fr_bun, 0.15, 8]);
  KEYW.push('вилки', 'булку.');
  const FORK = { x: 980, y: 1520 };

  function sky(t) {                                                     // (lay 20 ≈ экран) закатное небо, шар, амбар, силосная башня, поля
    vgrad(-200, 1000, ['#5a6aa8', '#c88aa0', '#f4b070', '#ffd890']); ell(900, 640, 120, 120, { wash: '#fff0c0', washA: 0.9, line: false }); glow(900, 640, 260, 'rgba(255,220,140,1)', 0.35);
    for (let i = 0; i < 5; i++) { const x = ((i * 300 + t * 10) % 1600) - 200; blob([[x - 140, 200 + i * 50], [x - 60, 160 + i * 50], [x + 80, 170 + i * 50], [x + 150, 210 + i * 50]], { wash: '#f8d0b0', washA: 0.6, line: false }); }
    push(240, 300 + Math.sin(t * 0.8) * 10, 0.7); const b = ell(0, 0, 80, 96, { wash: '#c81e14', washA: 1, w: 2, col: '#4a0a08' }); ctx.save(); ctx.clip(b.path); for (let i = -2; i < 3; i++) rect(i * 32 - 8, -100, 16, 200, { wash: '#f4e8c8', washA: 1, line: false }); ctx.restore(); for (const sd of [-1, 1]) pencil([[sd * 40, 80], [sd * 20, 150]], { w: 1.4, col: '#3a2a1a', pass2: false }); rect(-22, 150, 44, 30, { wash: '#8a5a2a', washA: 1, w: 1.4 }); pop();
    sil([[-200, 820], [200, 760], [600, 790], [1000, 750], [1300, 780], [1300, 1100], [-200, 1100]], '#7a8a4a', 0.9);
    push(80, 820, 1); rect(-90, -160, 180, 160, { wash: '#a8321e', washA: 1, w: 2, col: '#3a0a04' }); poly([[-100, -160], [0, -240], [100, -160]], { wash: '#5a2a1a', washA: 1, w: 2 }); rect(-30, -90, 60, 90, { wash: '#3a1a0a', washA: 1, w: 1.4 }); pencil([[-30, -90], [30, 0]], { w: 3, col: '#f4e8c8', pass2: false }); pencil([[30, -90], [-30, 0]], { w: 3, col: '#f4e8c8', pass2: false }); rect(100, -260, 60, 260, { wash: '#b8b0a0', washA: 1, w: 2 }); ell(130, -260, 30, 22, { wash: '#8a8478', washA: 1, w: 1.6 }); pop();
    for (let i = 0; i < 9; i++) { const x = 300 + i * 110; pencil([[x, 800], [x, 760]], { w: 2, col: '#5a4a2a', pass2: false }); } pencil([[300, 780], [1300, 780]], { w: 2, col: '#5a4a2a', pass2: false });
  }
  function tent(x, base, w, h, c1, c2, k, t) {                           // полосатый шатёр с флажком
    const P = [[x - w / 2, base], [x - w / 2, base - h * 0.5], [x, base - h], [x + w / 2, base - h * 0.5], [x + w / 2, base]], p = shape(P, { wash: c1, washA: 1, w: 2.4, col: '#2a1a1a', key: 19900 + k });
    ctx.save(); ctx.clip(p.path); for (let i = -4; i < 5; i++) { ctx.fillStyle = c2; ctx.beginPath(); ctx.moveTo(x, base - h); ctx.lineTo(x + i * w / 8, base); ctx.lineTo(x + (i + 0.5) * w / 8, base); ctx.fill(); } ctx.restore(); shadeG(p.path, x + w / 2, 0, x - w / 2, 0, '#2a0a0a', 0.35);
    pencil([[x, base - h], [x, base - h - 60]], { w: 3, col: '#3a2a1a', pass2: false }); poly([[x, base - h - 60], [x + 40 + Math.sin(t * 5 + k) * 6, base - h - 50], [x, base - h - 40]], { wash: '#2a6aa8', washA: 1, w: 1.2 });
    rect(x - w * 0.2, base - h * 0.45, w * 0.4, h * 0.45, { wash: '#2a1a10', washA: 0.85, w: 1.6 }); glow(x, base - h * 0.2, w * 0.25, 'rgba(255,190,90,1)', 0.25);
  }
  function midway(t) {                                                  // (lay 4.5) шатры, карусель, гирлянды, загон с коровой, вывеска ярмарки
    tent(-40, 1040, 300, 380, '#f4ece0', '#c81e14', 1, t); tent(1100, 1040, 320, 400, '#f4ece0', '#2a6aa8', 2, t); tent(300, 990, 220, 300, '#f4e8c0', '#e8a020', 3, t);
    push(760, 1000, 1); const rot = t * 0.8; ell(0, -20, 200, 40, { wash: '#8a3a2a', washA: 1, w: 2, col: '#2a0a04' }); for (let i = 0; i < 6; i++) { const a = rot + i * 1.047, x = Math.cos(a) * 170, z = Math.sin(a); if (z < 0) continue; pencil([[x, -260], [x, -30]], { w: 4, col: '#e8c040', pass2: false }); const hy = -120 + Math.sin(t * 3 + i) * 16; blob([[x - 34, hy], [x - 20, hy - 40], [x + 26, hy - 44], [x + 40, hy - 70], [x + 46, hy - 40], [x + 30, hy + 10], [x - 30, hy + 12]], { wash: i % 2 ? '#f4f0e8' : '#3a2a1a', washA: 1, w: 1.6, col: '#1a1a1a' }); }
    poly([[-220, -260], [0, -360], [220, -260]], { wash: '#c81e14', washA: 1, w: 2, col: '#4a0a08' }); for (let i = 0; i < 8; i++) poly([[-220 + i * 55, -260], [-165 + i * 55, -260], [-192 + i * 55, -230]], { wash: i % 2 ? '#f4e8c0' : '#c81e14', washA: 1, w: 1 }); for (let i = 0; i < 9; i++) ell(-200 + i * 50, -250, 6, 6, { wash: '#fff0a0', washA: 1, line: false }); glow(0, -300, 200, 'rgba(255,200,100,1)', 0.2); pop();
    for (let g = 0; g < 2; g++) { const y0 = 560 + g * 70; for (let i = 0; i < 16; i++) { const x = -200 + i * 100, sg = Math.sin(i * 1.2) * 20; pencil([[x, y0 + sg], [x + 100, y0 + Math.sin((i + 1) * 1.2) * 20]], { w: 2, col: '#3a2a1a', pass2: false }); poly([[x + 30, y0 + sg + 4], [x + 60, y0 + sg + 4], [x + 45, y0 + sg + 40]], { wash: ['#c81e14', '#f4e8c0', '#2a6aa8'][(i + g) % 3], washA: 1, w: 1 }); } }
    push(540, 640, 1); rect(-260, -60, 520, 110, { wash: '#f4e8c0', washA: 1, w: 3, col: '#5a2a0a' }); txt('COUNTY FAIR · 1885', 0, 16, 52, { font: 'Osw', col: '#a8221a' }); for (const sd of [-1, 1]) pencil([[sd * 240, 50], [sd * 240, 400]], { w: 8, col: '#5a3a1a', pass2: false }); pop();
    push(170, 1120, 1); for (let i = 0; i < 6; i++) pencil([[-120 + i * 48, 0], [-120 + i * 48, -80]], { w: 6, col: '#8a6a3a', pass2: false }); pencil([[-130, -60], [130, -60]], { w: 6, col: '#8a6a3a', pass2: false }); pencil([[-130, -24], [130, -24]], { w: 6, col: '#8a6a3a', pass2: false });
    const cw = blob([[-80, -60], [-70, -110], [40, -120], [80, -100], [90, -60], [60, -40], [-60, -40]], { wash: '#f4f0e8', washA: 1, w: 2, col: '#2a2a2a' }); for (const [x, y, r] of [[-40, -90, 18], [20, -80, 14], [60, -100, 12]]) ell(x, y, r, r * 0.7, { wash: '#2a2a2a', washA: 1, line: false }); ell(96, -110, 22, 16, { wash: '#f4f0e8', washA: 1, w: 1.6 }); ell(110, -100, 8, 6, { wash: '#f4b0b0', washA: 1, line: false }); for (const x of [-60, -30, 40, 70]) pencil([[x, -42], [x, -2]], { w: 6, col: '#f4f0e8', pass2: false });
    ell(0, -126, 16, 16, { wash: '#2a6aa8', washA: 1, w: 1.4 }); poly([[-8, -114], [8, -114], [12, -90], [0, -96], [-12, -90]], { wash: '#2a6aa8', washA: 1, w: 1 }); txt('1st', 0, -122, 12, { font: 'Osw', col: '#ffffff' }); pop();
  }
  function crowd(t) {                                                   // (lay 2.6) толпа: дама с зонтиком, парень с кукурузой, мальчишка, фермер
    const rush = t > EV.fr_fair && t < EV.fr_nofork + 0.6, wow = t > EV.fr_bun && t < S1.fair;
    const dx = rush ? (t - EV.fr_fair) * 120 : 0;
    human(60 + dx, 1290, 1.1, t, { body: '#8a3a5a', legs: '#4a2a3a', hair: '#8a4a2a', face: wow ? 'shock' : 'smile', armL: 'hold', armR: wow ? 'point' : 'hold', look: 0.6, seed: 19910, long: 1, hat: 'scarf', hatCol: '#f4e8c0' }); push(40 + dx, 930, 1); poly([[-80, 0], [0, -60], [80, 0]], { wash: '#f4c8d8', washA: 1, w: 1.6, col: '#5a2a3a' }); pencil([[0, -60], [0, 120]], { w: 2, col: '#3a2a1a', pass2: false }); pop();
    human(250 + dx * 0.6, 1300, 1.1, t, { body: '#4a6a3a', legs: '#3a3a2a', hair: '#c88a3a', face: wow ? 'grin' : 'smile', armL: 'hold', armR: 'hold', look: 0.8, seed: 19911, hat: 'cap', hatCol: '#8a6a3a' }); push(290 + dx * 0.6, 1060, 1, -0.4); ell(0, 0, 14, 40, { wash: '#f4c840', washA: 1, w: 1.4, col: '#8a6a10' }); for (let i = 0; i < 5; i++) pencil([[-10, -30 + i * 14], [10, -30 + i * 14]], { w: 1, col: '#c8a020', pass2: false }); pop();
    human(1000, 1310, 0.75, t, { body: '#2a4a8a', legs: '#5a4a3a', hair: '#e8c060', face: t > EV.fr_gag ? 'shock' : wow ? 'grin' : 'smile', armL: 'hold', armR: 'up', look: -0.6, seed: 19912, flip: -1 }); pencil([[1040, 1060], [1080, 800]], { w: 1.2, col: '#3a3a3a', a: 0.6, pass2: false }); push(1080, 780 + Math.sin(t * 2) * 10, 1, 0.3 + Math.sin(t * 2.4) * 0.1); poly([[0, -50], [36, 0], [0, 50], [-36, 0]], { wash: '#e8a020', washA: 1, w: 1.6, col: '#5a3a0a' }); pencil([[-36, 0], [36, 0]], { w: 1.2, col: '#5a3a0a', pass2: false }); pop();
    human(1180, 1300, 1.1, t, { body: '#8a6a4a', legs: '#2a3a5a', hair: '#e8e8e8', face: wow ? 'shock' : 'calm', armL: 'hold', armR: 'hips', look: -0.5, seed: 19913, flip: -1, beard: 'long', hat: 'merchant', hatCol: '#5a4a2a' });
    push(-60, 1290, 1); ell(0, -260, 40, 30, { wash: '#f8c8e0', washA: 0.9, line: false }); pencil([[0, -230], [0, -120]], { w: 3, col: '#e8d8b0', pass2: false }); pop();
  }
  function counter(t) {                                                 // перед Томом: прилавок, жаровня с котлетами, булки в корзине, вывеска, вилка в земле
    push(FORK.x, FORK.y, 1); ell(0, 6, 110, 20, { wash: '#8a6a3a', washA: 0.6, line: false }); pop();
    const c = rect(-300, 1440, 1700, 600, { wash: '#a8743a', washA: 1, w: 3, col: '#3a1a08', key: 19920 }); shadeG(c.path, 0, 1440, 0, 1700, '#3a1a08', 0.5); for (let i = 0; i < 10; i++) pencil([[-300 + i * 180, 1450], [-300 + i * 180, 2000]], { w: 2, col: '#5a3410', a: 0.5, pass2: false }); for (let i = 0; i < 8; i++) poly([[-300 + i * 220, 1440], [-80 + i * 220, 1440], [-190 + i * 220, 1520]], { wash: i % 2 ? '#c81e14' : '#f4f0e8', washA: 1, w: 1.2, col: '#4a0a08' });
    push(330, 1600, 1); rect(-150, -50, 300, 100, { wash: '#f4e8c0', washA: 1, w: 3, col: '#5a2a0a' }); txt('HOT MEAT 5¢', 0, 18, 44, { font: 'Osw', col: '#a8221a' }); pop();
    push(940, 1440, 1); rect(-160, -40, 320, 40, { wash: '#2a2a2e', washA: 1, w: 2, col: '#000' }); for (let i = 0; i < 6; i++) { const f = Math.sin(t * 8 + i) * 6; blob([[-130 + i * 50, 0], [-120 + i * 50, 30 + f], [-110 + i * 50, 0]], { wash: '#ff7a2a', washA: 0.9, line: false }); } for (let i = 0; i < 3; i++) { pattyRock(-100 + i * 100, -40, 44, 18, 19921 + i * 3); } steamWisps(-40, -80, 0.8, t, 3, 19925, 0.4); glow(0, -20, 180, 'rgba(255,140,50,1)', 0.25); pop();
    push(170, 1450, 1); const bk = blob([[-110, 0], [-120, -70], [120, -70], [110, 0]], { wash: '#c8a060', washA: 1, w: 2, col: '#5a3a10' }); for (let i = 0; i < 6; i++) pencil([[-110 + i * 44, -70], [-100 + i * 44, 0]], { w: 2, col: '#7a5a20', pass2: false }); for (let i = 0; i < 4; i++) sesameDome(-80 + i * 54, -66, 34, 30, 19926 + i * 3, { seeds: 6 }); pop();
    if (t < EV.fr_fair) { push(560, 1440, 1); ell(0, 0, 120, 24, { wash: '#f4f4f0', washA: 1, w: 2, col: '#5a6068' }); ell(0, 0, 90, 16, { wash: '#2a5aa8', washA: 0.25, w: 1, col: '#2a5aa8' }); hamSteak(0, 4, 0.5, t, { key: 19930 }); pop(); }
    if (t > EV.fr_nofork) { const k = clamp((t - EV.fr_nofork) / 0.6); let x, y, r; if (k < 1) { x = lerp(700, FORK.x, k); y = lerp(1200, FORK.y - 40, k) - Math.sin(k * 3.14) * 300; r = k * 12; } else { x = FORK.x; y = FORK.y - 40; r = 2.8 + Math.sin((t - EV.fr_nofork - 0.6) * 30) * 0.2 * Math.exp(-(t - EV.fr_nofork - 0.6) * 2); }
      push(x, y, 1.1, r); rect(-6, -10, 12, 110, { wash: '#c8ccd2', washA: 1, w: 1.4, col: '#3a3e44' }); for (let i = 0; i < 4; i++) rect(-16 + i * 9, -70, 5, 62, { wash: '#d8dce2', washA: 1, w: 1 }); pop(); if (k >= 1 && t < EV.fr_nofork + 1.4) txt('ДЗЫНЬ!', FORK.x, FORK.y - 220, 50, { font: 'Osw', col: '#fff4c0' }); }
    castShadow(620, 1450, 260, 160, -0.6, 0.25); lightPool(800, 1450, 600, 80, 'rgba(255,200,120,1)', 0.3);
  }
  function front(t) {                                                   // передний план: гирлянда флажков, тюк сена, сахарная вата
    for (let i = 0; i < 8; i++) { const x = -100 + i * 180, y = 120 + Math.sin(i * 1.4) * 30 + Math.sin(t * 1.5 + i) * 6; poly([[x, y], [x + 70, y], [x + 35, y + 80]], { wash: ['#c81e14', '#f4e8c0', '#2a6aa8', '#e8a020'][i % 4], washA: 1, w: 1.6, col: '#3a1a0a' }); } pencil(spline([[-100, 120], [400, 160], [900, 110], [1400, 150]], false, 10), { w: 3, col: '#3a2a1a', pass2: false });
    push(-80, 2000, 1.6); const h = blob([[-160, 0], [-170, -120], [160, -130], [170, 0]], { wash: '#e8c860', washA: 1, w: 2.4, col: '#7a5a10' }); hatch(h.path, h.bb, { gap: 5, a: 0.35, col: '#a8841a', ang: 0.2, key: 19940, w: 1.4 }); pop();
  }
  WORLD.fair = (t, u, cat) => {
    lay(20, () => { sky(t); });
    lay(4.5, () => { midway(t); haze('#ffd0a0', 0.06); });
    lay(2.6, () => { crowd(t); });
    lay(1, () => { cat(); counter(t); });
    lay(0.6, () => { front(t); motes(24, [-200, 400, 1300, 1600], '#fff4c0', t, 19950, { sp: 12, sz: 3, a: 0.6, add: 1, wob: 8 }); shaft(1000, 300, 260, 1600, 0.5, 'rgba(255,220,150,1)', 0.14); moodDark(560, 1100, 500, 1500, '#2a1020', 0.4); });
  };
  DIR.fair = {
    outfit: 'parisA', light: { side: 1, rim: '#ffc070' }, grade: ['#ffa060', 0.1],
    act: () => [[S0.fair, 'smug'], [EV.fr_fork, 'proud'], [EV.fr_fair, 'shock'], [EV.fr_nofork, 'scared'], [EV.fr_bun, 'grin'], [EV.fr_gag, 'laugh']],
    pose: (t, u, b) => { const eat = t < EV.fr_fair, empty = t > EV.fr_nofork && t < EV.fr_bun - 0.2, has = t > EV.fr_bun - 0.2, bump = t > EV.fr_fair && t < EV.fr_nofork ? Math.sin((t - EV.fr_fair) * 10) * 0.05 : 0;
      return Object.assign(b, { x: 620, y: 1590, s: 1.18, flip: 1, rot: bump, look: eat ? [-0.4, 0.8] : empty ? [0.8, 0.4] : [0.1, -0.2],
        hand: eat ? [-60, -240] : empty ? [240, -380] : has ? (t > EV.fr_gag ? [70, -300] : [120, -420]) : [-100, -300], prop: eat || (t > EV.fr_fair && t < EV.fr_nofork) ? 'forkPattyP' : has ? (t > EV.fr_gag + 0.2 ? 'burgerBiteP' : 'burgerP') : undefined, propAng: has ? 0.1 : -0.3,
        handF: eat ? [-180, -230] : [-120, -240], sweat: empty, tailUp: has, squash: b.squash + (t > EV.fr_bun && t < EV.fr_bun + 0.12 ? 0.08 : 0) }); },
    afterCat: (t, u, P) => { if (t > EV.fr_bun && t < EV.fr_bun + 0.5) { const k = clamp((t - EV.fr_bun) / 0.5); txt('ХЛОП!', P.x + 200 * P.s, P.y - 560 * P.s - k * 40, 60, { font: 'Osw', col: '#fff4c0', a: 1 - k }); } },
    cam: () => [[S0.fair, 600, 860, 0.16], [S0.fair + 0.5, 560, 1060, 0.26, 'x'], [EV.fr_fair, 600, 1000, 0.22], [EV.fr_nofork, 760, 1150, 0.24], [EV.fr_bun, 640, 1050, 0.3, 'x'], [EV.fr_gag, 760, 1150, 0.26], [S1.fair, 680, 1080, 0.28]]
  };
  // ---------------------------------------------------------------- переход: полосатый полог шатра задёргивается и раздвигается уже на ярмарке
  TRANS_IN.fair = { a: 0.3, b: 0.35, runA: 1, fx(k, t, A, B) {
    const close = k < 0.5, q = close ? sm(k * 2) : 1 - sm((k - 0.5) * 2); drawBuf(close ? A : B, 1, 540, 960);
    scr(() => { for (const sd of [-1, 1]) { const w = 560 * q, x0 = sd < 0 ? 0 : 1080 - w; for (let i = 0; i < 8; i++) { const sw = w / 8, x = x0 + i * sw; rect(x, -20, sw + 1, 1960, { wash: i % 2 ? '#f4ece0' : '#c81e14', washA: 1, line: false }); pencil([[x, -20], [x + Math.sin(i + t * 3) * 10, 1940]], { w: 3, col: '#5a0a08', a: 0.4, pass2: false }); } if (q > 0.05) for (let i = 0; i < 8; i++) ell(x0 + w * (i + 0.5) / 8, 20, w / 16, 26, { wash: i % 2 ? '#c81e14' : '#f4ece0', washA: 1, w: 1.4, col: '#4a0a08' }); } });
  } };
})();
