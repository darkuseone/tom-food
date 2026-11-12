/* 018 — `rent`: «Но пицца старше королевы: ещё в 997-м ею платили епископу за аренду.» Гаэта, 997: двор водяной мельницы у моря — каменные арки,
   мельничное колесо крутится и плещет, за аркой — синее море с парусными лодками, мыс с крепостью и куполом храма; мешки с мукой, корзины, куры
   клюют зерно, свинья. Главный свет — утреннее солнце из арки слева (пучок, пятно на плитах, тени вправо). Епископ в белой митре с посохом сидит
   под навесом, рядом нотарий пишет пером на пергаменте «duodecim pizze». Том-арендатор в рубахе и фартуке несёт стопку из двенадцати лепёшек.
   По словам: «старше» — Том оглядывается, табличка «997 > 1889»; «997-м» — пергамент раскрывается, год римскими цифрами; «платили епископу» —
   Том протягивает стопку, епископ берёт; «аренду» — над лепёшками всплывают цифры I…XII, нотарий ставит печать, курица взлетает.
   Переход В сцену: пергаментный свиток разворачивается сверху вниз, закрученный край катится по кадру. */
(() => {
  EV.rn_old = wtw('s2', 'старше');
  EV.rn_year = wtw('s2', '997-м');
  EV.rn_pay = wtw('s2', 'платили');
  EV.rn_bishop = wtw('s2', 'епископу');
  EV.rn_rent = wtw('s2', 'аренду.');
  SHAKES.push([EV.rn_rent + 0.1, 0.14, 5]);
  KEYW.push('997-м', 'аренду.');

  function sea(t) {                                                     // небо, море, мыс с крепостью и куполом, лодки, чайки
    vgrad(-800, 700, ['#7ab0d8', '#b8d8ec', '#f0e8d0']); for (let i = 0; i < 5; i++) { const x = ((i * 380 + t * 12) % 2400) - 700; blob([[x, -400 + i * 40], [x + 60, -450 + i * 40], [x + 160, -440 + i * 40], [x + 220, -400 + i * 40]], { wash: '#ffffff', washA: 0.8, w: 1, col: '#c8d8e8' }); }
    sil([[-700, 520], [-300, 470], [-120, 380], [100, 360], [260, 420], [500, 520]], '#7a8a6a', 1); for (let i = 0; i < 6; i++) rect(-200 + i * 50, 300 - (i % 2) * 30, 46, 80 + (i % 2) * 30, { wash: '#d8c8a0', washA: 1, w: 1.2, col: '#6a5a3a' }); blob([[60, 320], [70, 250], [110, 230], [150, 250], [160, 320]], { wash: '#c8a878', washA: 1, w: 1.4, col: '#6a4a2a' }); pencil([[110, 230], [110, 200]], { w: 3, col: '#6a4a2a' }); pencil([[100, 212], [120, 212]], { w: 3, col: '#6a4a2a' });
    rect(-800, 520, 2600, 400, { wash: '#2a6a9a', washA: 1, line: false }); for (let i = 0; i < 30; i++) { const x = -700 + (i * 97) % 2400, y = 540 + (i * 37) % 300; pencil([[x + Math.sin(t * 2 + i) * 10, y], [x + 40 + Math.sin(t * 2 + i) * 10, y]], { w: 2, col: '#e8f4fc', a: 0.6, pass2: false }); }
    for (let i = 0; i < 3; i++) { const x = ((i * 600 + t * 30) % 2200) - 600, y = 600 + i * 60; push(x, y, 0.6 + i * 0.2, Math.sin(t * 1.5 + i) * 0.05); blob([[-60, 0], [60, 0], [40, 24], [-40, 24]], { wash: '#6a3a1a', washA: 1, w: 1.6 }); pencil([[0, 0], [0, -110]], { w: 3, col: '#3a2a1a' }); poly([[4, -104], [70, -20], [4, -20]], { wash: '#f4e4c0', washA: 1, w: 1.4, col: '#6a5a3a' }); pop(); }
    for (let i = 0; i < 4; i++) { const x = ((t * 60 + i * 300) % 1600) - 300, y = -200 + Math.sin(t * 3 + i) * 30 + i * 40; pencil(spline([[x - 20, y], [x - 8, y - 10], [x, y]], false, 3), { w: 2.4, col: '#2a2a2a', pass2: false }); pencil(spline([[x, y], [x + 8, y - 10], [x + 20, y]], false, 3), { w: 2.4, col: '#2a2a2a', pass2: false }); }
  }
  function court(t) {                                                   // стены с арками, мельничное колесо, навес, мешки
    vgrad(-800, 1500, ['#c8b090', '#b89c78', '#a88a64']);
    for (let y = -800; y < 1500; y += 70) for (let x = -800 + ((y / 70) % 2) * 60; x < 1900; x += 120) rect(x, y, 118, 68, { wash: (x * 7 + y) % 3 ? '#c8b28c' : '#b8a07a', washA: 0.85, w: 0.8, col: '#7a6448' });
    for (const [ax, aw] of [[-300, 520], [480, 360]]) { push(ax, 600, 1); const ar = shape(spline([[-aw / 2, 300], [-aw / 2, -200], [-aw / 4, -380], [0, -420], [aw / 4, -380], [aw / 2, -200], [aw / 2, 300]], false, 10), { wash: '#7ab0d8', washA: 1, w: 4, col: '#5a4428', key: 18400 + ax }); ctx.save(); ctx.clip(ar.path); push(-ax, -600, 1); sea(t); pop(); ctx.restore();
      for (let i = 0; i < 9; i++) { const a = Math.PI + i / 8 * Math.PI; rect(Math.cos(a) * (aw / 2 + 20) - 24, -200 + Math.sin(a) * 220 - 24, 48, 48, { wash: '#d8c4a0', washA: 1, w: 1.4, col: '#6a5438', rot: a }); } pop(); }
    push(1180, 700, 1); const wr = t * 0.8; ell(0, 0, 260, 260, { wash: '#6a4424', washA: 0.25, w: 10, col: '#4a2a12' }); for (let i = 0; i < 12; i++) { const a = wr + i / 12 * 6.283; pencil([[0, 0], [Math.cos(a) * 260, Math.sin(a) * 260]], { w: 8, col: '#5a3a1a' }); push(Math.cos(a) * 250, Math.sin(a) * 250, 1, a); rect(-20, -40, 40, 80, { wash: '#7a5434', washA: 1, w: 1.6, col: '#2a1408' }); pop(); } ell(0, 0, 40, 40, { wash: '#3a2a1a', washA: 1, w: 2 });
    for (let i = 0; i < 10; i++) { const k = (t * 1.5 + i / 10) % 1; ell(-200 + i * 30, 260 + k * 200, 6, 10, { wash: '#a8d8f0', washA: 0.7 * (1 - k), line: false }); } pop();
    push(-60, 1050, 1); poly([[-420, -480], [420, -480], [480, -400], [-480, -400]], { wash: '#a8443a', washA: 1, w: 2.4, col: '#3a1408' }); for (let i = 0; i < 12; i++) pencil([[-460 + i * 80, -400], [-440 + i * 80, -480]], { w: 2, col: '#6a2418', a: 0.7, pass2: false }); for (const sd of [-1, 1]) pencil([[sd * 400, -400], [sd * 400, 120]], { w: 18, col: '#6a4424' }); pop();
    shaft(-300, 240, 300, 2000, -0.5, 'rgba(255,230,170,1)', 0.18);
  }
  function people(t) {                                                  // епископ, нотарий, крестьяне, куры, свинья
    const take = t > EV.rn_bishop;
    human(-260, 1160, 1.1, t, { body: '#f4ece0', legs: '#f4ece0', hair: '#c8c8c8', face: take ? 'grin' : 'calm', armL: take ? 'point' : 'hold', armR: 'hold', prop: 'stick', look: 0.6, seed: 18410, long: 1, trim: '#c8221a', beard: 'long' });
    push(-260, 1160 - 330 * 1.1, 1.1); poly([[-30, 10], [-34, -60], [0, -100], [34, -60], [30, 10]], { wash: '#f8f4ea', washA: 1, w: 2, col: '#6a5a3a' }); pencil([[0, -96], [0, 6]], { w: 6, col: '#d6a842', pass2: false }); pencil([[-26, -40], [26, -40]], { w: 6, col: '#d6a842', pass2: false }); pop();
    push(-160, 1160 - 330, 1.1); pencil(spline([[0, 0], [0, -160], [20, -190], [40, -170], [30, -150]], false, 6), { w: 6, col: '#d6a842' }); pop();
    human(40, 1160, 1.0, t, { body: '#5a3a2a', legs: '#5a3a2a', hair: '#1a1a1a', face: t > EV.rn_rent ? 'smile' : 'calm', armL: 'hold', armR: 'hold', look: -0.4, seed: 18411, long: 1, hat: 'hood', hatCol: '#3a2a1a', flip: -1 });
    push(30, 1060, 1); rect(-90, -20, 180, 40, { wash: '#6a4424', washA: 1, w: 2 }); const pk = t > EV.rn_year ? sm(clamp((t - EV.rn_year) / 0.5)) : 0; rect(-80, -30 - 140 * pk, 160, 140 * pk + 10, { wash: PZ.paper, washA: 1, w: 1.6, col: '#6a5a3a' });
    if (pk > 0.6) { txt('DCCCCXCVII', 0, -140, 22, { font: 'Hand', col: '#3a1a08' }); txt('duodecim pizze', 0, -104, 26, { font: 'Hand', col: '#8a1a0e' }); for (let i = 0; i < 3; i++) pencil([[-60, -80 + i * 16], [60 - i * 14, -80 + i * 16]], { w: 1.4, col: '#6a5a40', a: 0.6, pass2: false }); }
    pencil([[60, -40], [90, -110]], { w: 2, col: '#f4f0e6', pass2: false }); ell(-60, -30, 8, 8, { wash: '#1a1a1a', washA: 1, line: false }); if (t > EV.rn_rent + 0.2) { const k = popK(t, EV.rn_rent + 0.2, 0.3); ell(40, -60, 22 * k, 22 * k, { wash: '#a8180e', washA: 1, w: 1.4, col: '#4a0804' }); } pop();
    human(900, 1180, 1.0, t, { body: '#7a6a3a', legs: '#5a4a2a', hair: '#6a4a2a', face: 'smile', armL: 'hold', armR: 'hold', look: -0.6, seed: 18412, flip: -1 }); push(900, 1180 - 210, 1); ell(0, 0, 60, 34, { wash: '#c8a06a', washA: 1, w: 2, col: '#4a2a10' }); ell(-10, -6, 20, 10, { wash: '#e8c09a', washA: 1, line: false }); pop();
    human(1080, 1200, 0.95, t, { body: '#8a5a3a', legs: '#5a4a2a', hair: '#3a2a1a', face: 'grin', armL: 'up', armR: 'hold', look: -0.7, seed: 18413, flip: -1, long: 1, hat: 'scarf', hatCol: '#e8d8b0' });
    const fly = t > EV.rn_rent ? (t - EV.rn_rent) : 0;
    for (const [i, cx] of [[0, 300], [1, 420], [2, 760]].map(v => v)) { const peck = Math.abs(Math.sin(t * 5 + i * 2)), up = i === 1 ? Math.min(fly * 500, 400) : 0; push(cx + (i === 1 ? fly * 300 : 0), 1260 - up, 0.7, 0, i % 2 ? -1 : 1);
      blob([[-40, 0], [-50, -40], [-20, -60], [10, -50], [30, -70 + peck * 20], [44, -60 + peck * 20], [36, -40], [40, 0]], { wash: i === 2 ? '#8a5a2a' : '#f4ece0', washA: 1, w: 1.8, col: '#4a3a2a' }); ell(38, -68 + peck * 20, 6, 8, { wash: '#c8221a', washA: 1, line: false }); poly([[46, -60 + peck * 20], [58, -56 + peck * 20], [46, -52 + peck * 20]], { wash: '#e8b040', washA: 1, w: 1 });
      if (up > 0) for (const sd of [-1, 1]) blob([[0, -40], [sd * 60, -80 - Math.sin(t * 20) * 30], [sd * 20, -30]], { wash: '#f4ece0', washA: 1, w: 1.6, col: '#4a3a2a' }); pop(); }
    for (let i = 0; i < 20; i++) ell(260 + (i * 53) % 600, 1270 + (i * 17) % 30, 4, 2, { wash: '#d8b860', washA: 1, line: false });
    push(620, 1250, 0.8); blob([[-80, 0], [-96, -50], [-70, -90], [40, -96], [90, -70], [100, -30], [80, 0]], { wash: '#e8a8a0', washA: 1, w: 2, col: '#6a3a3a' }); ell(108, -46, 18, 14, { wash: '#d89890', washA: 1, w: 1.6, col: '#6a3a3a' }); ell(112, -48, 3, 3, { wash: '#3a1a1a', washA: 1, line: false }); pencil(spline([[-90, -60], [-110, -70], [-100, -84]], false, 4), { w: 2.4, col: '#6a3a3a', pass2: false }); pop();
  }
  function yard(t) {                                                    // плиты двора, мешки, корзины, амфоры
    const f = rect(-800, 1300, 2700, 900, { wash: '#a89070', washA: 1, w: 2, col: '#4a3a24', key: 18420 }); for (let i = 0; i < 20; i++) for (let j = 0; j < 5; j++) rect(-800 + i * 140 + (j % 2) * 70, 1300 + j * 120, 138, 118, { wash: (i + j) % 3 ? '#b8a07c' : '#9a8464', washA: 0.7, w: 1, col: '#5a4a34' });
    lightPool(300, 1500, 600, 180, 'rgba(255,230,170,1)', 0.35);
    for (const [x, s] of [[-420, 1], [-300, 0.9], [1020, 1.1]]) { push(x, 1440, s); const b = blob([[-70, 0], [-80, -110], [-40, -150], [40, -150], [80, -110], [70, 0]], { wash: '#e8dcc0', washA: 1, w: 2, col: '#6a5a3a' }); shadeG(b.path, 80, 0, -40, 0, '#a8987a', 0.5); pencil([[-40, -150], [0, -170], [40, -150]], { w: 3, col: '#6a5a3a', pass2: false }); txt('FARINA', 0, -60, 18, { font: 'Hand', col: '#6a5a3a' }); pop(); }
    for (const [x, c] of [[1200, '#a8743a'], [1300, '#8a5a2a']]) { push(x, 1440, 1); blob([[-36, 0], [-50, -80], [-30, -150], [-14, -170], [14, -170], [30, -150], [50, -80], [36, 0]], { wash: c, washA: 1, w: 2, col: '#3a1a08' }); for (const sd of [-1, 1]) pencil(spline([[sd * 14, -160], [sd * 40, -150], [sd * 34, -120]], false, 4), { w: 4, col: '#3a1a08', pass2: false }); pop(); }
    push(-120, 1460, 1); blob([[-90, 0], [-100, -70], [100, -70], [90, 0]], { wash: '#c89a5a', washA: 1, w: 2, col: '#5a3a1a' }); for (let i = 0; i < 6; i++) pencil([[-96 + i * 38, -70], [-90 + i * 36, 0]], { w: 1.6, col: '#7a5a2a', pass2: false }); for (let i = 0; i < 4; i++) ell(-60 + i * 40, -78, 20, 12, { wash: '#e8b860', washA: 1, w: 1.2 }); pop();
    castShadow(-260, 1170, 140, 200, 0.7, 0.26); castShadow(900, 1190, 120, 200, 0.7, 0.24);
  }
  function counter(t) { if (t < EV.rn_rent) return; const n = Math.min(12, Math.floor((t - EV.rn_rent) / 0.08) + 1); const R = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
    for (let i = 0; i < n; i++) { const a = -2.6 + i * 0.2, k = popK(t, EV.rn_rent + i * 0.08, 0.3); push(420 + Math.cos(a) * 300, 1000 + Math.sin(a) * 260, k); txt(R[i], 0, 0, i === 11 ? 70 : 40, { font: 'Osw', col: i === 11 ? '#c8221a' : '#4a2a08' }); pop(); } }
  function front(t) { push(-200, 1950, 1.6); for (let i = 0; i < 7; i++) blob([[i * 30, 0], [i * 30 - 20 + Math.sin(t * 2 + i) * 6, -200 - i * 10], [i * 30 + 10, -260 - i * 12], [i * 30 + 18, -200]], { wash: '#c8a850', washA: 1, w: 1.6, col: '#6a5a1a' }); pop();
    push(1260, -300, 1.5); for (let i = 0; i < 6; i++) { const x = i * 40 - 100; pencil(spline([[x, -400], [x + Math.sin(t + i) * 10, 0], [x - 10, 120]], false, 5), { w: 6, col: '#4a7a2a', pass2: false }); for (let j = 0; j < 4; j++) blob([[x, j * 30], [x + 30, j * 30 + 10], [x + 4, j * 30 + 24]], { wash: '#5a8a3a', washA: 1, w: 1 }); } pop(); }
  WORLD.rent = (t, u, cat) => {
    lay(12, () => { court(t); rays(-300, 300, 0.9, 0.25, 1800, 'rgba(255,236,190,1)', 0.12, 4, t); glow(-300, 200, 200, 'rgba(255,240,200,1)', 0.25); haze('#fff0d0', 0.06); });
    lay(1.7, () => { push(240, 110, 1); people(t); pop(); });
    lay(1, () => { yard(t); cat(); counter(t); });
    lay(0.85, () => { push(1150, 1980, 1.4); rect(-160, -120, 320, 120, { wash: '#8a6a4a', washA: 1, w: 2.4, col: '#3a2a14' }); for (let i = 0; i < 3; i++) ell(-90 + i * 90, -130, 40, 22, { wash: '#e8b860', washA: 1, w: 1.4 }); pop(); });
    lay(0.6, () => { front(t); motes(22, [-200, 200, 1200, 1500], '#fff4d0', t, 18430, { sp: 6, sz: 3, a: 0.5, wob: 3 }); moodDark(200, 900, 600, 1500, '#1a1428', 0.4); });
  };
  DIR.rent = {
    outfit: 'selA', light: { side: -1, rim: '#ffe0a0' }, grade: ['#ffd090', 0.06],
    act: () => [[S0.rent, 'smug'], [EV.rn_old, 'sideeye'], [EV.rn_year, 'awe'], [EV.rn_pay, 'talk'], [EV.rn_bishop, 'grin'], [EV.rn_rent, 'proud']],
    pose: (t, u, b) => { const give = t > EV.rn_pay; return Object.assign(b, { x: 700, y: 1600, s: 1.15, flip: 1, look: t < EV.rn_year ? [0.7, -0.2] : [-0.8, -0.3], hand: give ? [230, -330] : [120, -280], handF: give ? [100, -330] : [-80, -240], prop: 'pizza12P', propAng: 0, tilt: give ? -0.06 : 0 }); },
    cam: () => [[S0.rent, 560, 900, 0.22], [EV.rn_old, 540, 1120, 0.26, 'x'], [EV.rn_year, 420, 1100, 0.28], [EV.rn_bishop, 400, 1140, 0.26], [EV.rn_rent, 500, 1140, 0.25], [S1.rent, 540, 1150, 0.27]]
  };
  // ---------------------------------------------------------------- переход: свиток пергамента разворачивается сверху вниз
  TRANS_IN.rent = { a: 0.25, b: 0.5, runA: 0.5, fx(k, t, A, B) {
    const e = sm(k), y = lerp(-80, 2060, e); drawBuf(A, 1, 540, 960); const P = new Path2D(); P.rect(0, 0, W, y); inPath(P, () => drawBuf(B, 1, 540, 960));
    scr(() => { const r = rect(-40, y - 20, W + 80, 110, { wash: PZ.paper, washA: 1, w: 3, col: '#6a5a3a' }); shadeG(r.path, 0, y + 90, 0, y - 20, '#a8946a', 0.6); for (let i = 0; i < 3; i++) pencil([[-40, y + 10 + i * 26], [W + 40, y + 10 + i * 26]], { w: 2, col: '#8a7a5a', a: 0.6, pass2: false });
      for (const sd of [0, 1]) { ell(sd ? W + 10 : -10, y + 35, 40, 60, { wash: '#c8a868', washA: 1, w: 2.4, col: '#5a4a2a' }); } });
  } };
})();
