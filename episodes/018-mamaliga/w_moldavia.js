/* 018 — `moldavia`: «А уже в 1690-х кукуруза росла в Молдавии — при господаре Константине Дуке.» Золотое поле под монастырём: холмы, крепостные
   стены монастыря с расписной церковью под высокой крышей и колокольней, соломенные хаты, журавль колодца, аисты в гнезде; крестьяне собирают початки
   в корзины, вол тянет телегу с кукурузой; ряды высоких стеблей. Том-боярин в кафтане и меховой шапке. По словам: «1690-х» — табличка-вывеска 1690-е;
   «кукуруза росла» — стебли перед Томом стремительно вырастают, выпускают метёлки и початки; «Молдавии» — пролетают аисты; «господаре Константине» —
   въезжает господарь на белом коне под стягом с головой зубра; «Дуке.» — глашатай трубит, крестьяне кланяются. Переход В сцену: стебли кукурузы
   раздвигаются, как шторы. */
(() => {
  EV.md_year = wtw('s3', '1690-х');
  EV.md_grow = wtw('s3', 'кукуруза');
  EV.md_mold = wtw('s3', 'Молдавии');
  EV.md_gosp = wtw('s3', 'господаре');
  EV.md_duka = wtw('s3', 'Дуке.');
  SHAKES.push([EV.md_duka, 0.15, 6]);
  KEYW.push('Молдавии', 'Дуке.');
  function land(t) {                                                      // небо с облаками, холмы, монастырь, хаты, аисты
    vgrad(-700, 800, ['#6aa0d8', '#a8d0e8', '#f4e8c0']); glow(900, -200, 400, 'rgba(255,240,190,1)', 0.45);
    for (let i = 0; i < 5; i++) { const x = ((i * 420 + t * 10) % 2100) - 400, y = -420 + (i % 2) * 120; blob([[x, y], [x + 80, y - 60], [x + 200, y - 70], [x + 300, y - 10], [x + 160, y + 30]], { wash: '#ffffff', washA: 0.9, w: 1.2, col: '#b8d0e0' }); }
    for (let j = 0; j < 3; j++) { const pts = []; for (let i = 0; i <= 10; i++) pts.push([-400 + i * 200, 560 + j * 110 - (Math.sin(i * 0.9 + j * 1.7) * 0.5 + 0.5) * 160]); pts.push([1700, 1200], [-400, 1200]); const h = shape(pts, { wash: ['#8aa86a', '#a8b85a', '#c8b84a'][j], washA: 1, w: 1.4, col: '#3a4a1a', key: 18600 + j }); hatch(h.path, h.bb, { gap: 14, a: 0.12, col: '#3a4a1a', ang: 0.3 + j * 0.2, key: 18603 + j }); }
    push(300, 520, 1); rect(-300, -120, 600, 140, { wash: '#e8dcc0', washA: 1, w: 2, col: '#5a4a30' }); for (let i = 0; i < 12; i++) rect(-300 + i * 52, -140, 30, 24, { wash: '#e8dcc0', washA: 1, w: 1.4, col: '#5a4a30' });
    for (const x of [-260, 260]) { rect(x - 40, -260, 80, 280, { wash: '#e0d4b8', washA: 1, w: 2, col: '#5a4a30' }); poly([[x - 50, -260], [x, -340], [x + 50, -260]], { wash: '#5a3a2a', washA: 1, w: 2, col: '#2a1408' }); }
    const ch = rect(-90, -280, 180, 200, { wash: '#4a6aa8', washA: 1, w: 2, col: '#1a2a4a', key: 18610 }); for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) ell(-60 + i * 40, -240 + j * 50, 12, 18, { wash: ['#c8221a', '#e8b030', '#f4ecd8'][(i + j) % 3], washA: 0.9, w: 0.8 });
    poly([[-120, -280], [0, -420], [120, -280]], { wash: '#3a2a1a', washA: 1, w: 2, col: '#000' }); rect(-24, -500, 48, 90, { wash: '#4a6aa8', washA: 1, w: 1.6, col: '#1a2a4a' }); poly([[-34, -500], [0, -560], [34, -500]], { wash: '#3a2a1a', washA: 1, w: 1.6 }); pencil([[0, -560], [0, -610]], { w: 3, col: '#c8a040', pass2: false }); pencil([[-16, -594], [16, -594]], { w: 3, col: '#c8a040', pass2: false }); pop();
    for (const [x, y] of [[760, 640], [920, 660], [1100, 630]]) { push(x, y, 0.8); rect(-70, -70, 140, 80, { wash: '#f4f0e4', washA: 1, w: 1.6, col: '#5a4a30' }); poly([[-90, -66], [0, -150], [90, -66]], { wash: '#c8a860', washA: 1, w: 1.6, col: '#5a4a20', shade: { gap: 5, a: 0.3, col: '#6a5020', ang: 1.2 } }); rect(-20, -40, 40, 50, { wash: '#2a5aa8', washA: 1, w: 1.2 }); pop(); }
    push(1180, 600, 1); pencil([[0, 40], [0, -200]], { w: 6, col: '#4a3018' }); blob([[-40, -200], [40, -200], [30, -230], [-30, -230]], { wash: '#6a4a2a', washA: 1, w: 1.4 }); ell(0, -236, 22, 14, { wash: '#f4f4f4', washA: 1, w: 1.2 }); pop();
    if (t > EV.md_mold - 0.3) for (let i = 0; i < 3; i++) { const q = clamp((t - EV.md_mold + 0.3) / 2.5) + i * 0.08, x = lerp(1400, -300, q), y = 100 + i * 60 + Math.sin(q * 8) * 10, f = Math.sin(t * 6 + i) * 30; push(x, y, 0.8); pencil([[-70, f], [0, 0], [70, f]], { w: 6, col: '#f4f4f4' }); pencil([[-70, f], [-90, f + 6]], { w: 5, col: '#1a1a1a', pass2: false }); ell(-6, 0, 30, 9, { wash: '#f4f4f4', washA: 1, w: 1.2 }); pencil([[-36, 0], [-60, 4]], { w: 3, col: '#e86a2a', pass2: false }); pop(); }
  }
  function field(t) {                                                     // ряды кукурузы, крестьяне с корзинами, вол с телегой, господарь на коне, глашатай
    for (let j = 0; j < 3; j++) for (let i = 0; i < 16; i++) { const x = -400 + i * 120 + j * 60, y = 1040 + j * 50, h = 220 + (i * 37 % 60), sw = Math.sin(t * 1.5 + i * 0.7 + j) * 8; pencil(spline([[x, y], [x + sw * 0.5, y - h * 0.5], [x + sw, y - h]], false, 5), { w: 4, col: '#5a7a2a', pass2: false });
      for (let k = 0; k < 3; k++) blob([[x, y - 60 - k * 50], [x + (k % 2 ? 50 : -50) + sw, y - 80 - k * 50], [x + (k % 2 ? 80 : -80) + sw, y - 50 - k * 50]], { wash: '#6a8a3a', washA: 1, w: 1, col: '#2a4a1a' }); pencil([[x + sw, y - h], [x + sw - 10, y - h - 30]], { w: 2, col: '#c8a860', pass2: false }); }
    for (const [x, sd, f] of [[880, 18620, 1], [1120, 18621, -1]]) { human(x, 1260, 1.05, t, { body: sd % 2 ? '#f4f0e4' : '#e8e0c8', legs: '#3a2a1a', hair: '#5a3a1a', face: t > EV.md_duka ? 'shock' : 'smile', armL: 'hold', armR: t > EV.md_gosp ? 'down' : 'swing', look: 0.4 * f, seed: sd, flip: f, belt: '#c8221a', long: sd % 2 ? 1 : 0 }); if (sd % 2) kerchief20(x, 1260, 1.05, '#c8221a', f); else hat20(x, 1260, 1.05, 'boater', '#e8d49a'); }
    push(1000, 1280, 1); blob([[-60, 0], [-70, -60], [70, -60], [60, 0]], { wash: '#a8743a', washA: 1, w: 2, col: '#3a2010', shade: { gap: 6, a: 0.3, col: '#3a2010', ang: 0.7 } }); for (let i = 0; i < 5; i++) cornCob(-44 + i * 22, -70, 0.24, -0.3 + i * 0.15, { key: 18622 + i, husk: 0.6, silk: false }); pop();
    const ck = clamp((t - S0.moldavia) / 5); push(lerp(1350, 1250, ck), 1180, 0.75); for (const sd of [-1, 1]) { ell(sd * 140, 40, 46, 46, { line: true, w: 6, col: '#4a3018' }); for (let k = 0; k < 6; k++) pencil([[sd * 140, 40], [sd * 140 + Math.cos(k + t * -2) * 44, 40 + Math.sin(k + t * -2) * 44]], { w: 2, col: '#4a3018', pass2: false }); }
    rect(-200, -60, 400, 80, { wash: '#8a6a3a', washA: 1, w: 2, col: '#2a1808' }); for (let i = 0; i < 9; i++) cornCob(-170 + i * 42, -70, 0.3, -0.2 + (i % 3) * 0.2, { key: 18630 + i, husk: 0.4, silk: false }); pop();
    push(lerp(1080, 980, ck), 1200, 0.75); const ox = blob([[-120, -20], [-120, -100], [-60, -120], [60, -110], [110, -80], [150, -110], [180, -80], [150, -40], [100, -30], [90, 30], [-110, 30]], { wash: '#c8bca8', washA: 1, w: 2, col: '#3a3020' }); for (const lx of [-90, -50, 50, 90]) pencil([[lx, 20], [lx + Math.sin(t * 4 + lx) * 6, 90]], { w: 9, col: '#a89a84' }); pencil(spline([[130, -110], [170, -160], [200, -150]], false, 4), { w: 5, col: '#f4ecd8', pass2: false }); pop();
    const gk = sm(clamp((t - EV.md_gosp + 0.3) / 0.8)), gx = lerp(-650, 170, gk); push(gx, 1290, 1.05, 0, 1); const hb = blob([[-150, -150], [-150, -230], [-80, -250], [70, -240], [130, -260], [190, -320], [220, -290], [170, -220], [150, -150], [100, -140], [-120, -140]], { wash: '#f4f0ea', washA: 1, w: 2.4, col: '#3a3a3a', key: 18640 }); shadeG(hb.path, 0, -140, 0, -260, '#b8b0a4', 0.4);
    for (const lx of [-120, -80, 90, 130]) pencil([[lx, -150], [lx + Math.sin(t * 6 + lx) * 12, -20]], { w: 12, col: '#e8e4dc' }); blob([[190, -320], [150, -350], [120, -300], [160, -270]], { wash: '#a8a098', washA: 1, w: 1.4 }); rect(-70, -260, 120, 40, { wash: '#a8221a', washA: 1, w: 1.6, col: '#3a0a04' });
    pop(); human(gx - 10, 1290 - 230 * 1.05 + 30, 1.0, t, { body: '#a8221a', legs: '#3a1a1a', hair: '#3a2a1a', face: 'smile', armL: 'hold', armR: t > EV.md_duka ? 'wave' : 'hold', look: 0.6, seed: 18641, flip: 1, beard: 'long', belt: '#e8b030', hat: 'fur', hatCol: '#3a2a1a' });
    push(gx - 150, 1290 - 600, 1); pencil([[0, 300], [0, -60]], { w: 5, col: '#5a3a1a' }); const fl = blob([[0, -60], [160 + Math.sin(t * 5) * 10, -40], [150, 40], [170 + Math.sin(t * 5 + 1) * 10, 110], [0, 90]], { wash: '#2a5aa8', washA: 1, w: 2, col: '#0a1a4a' }); push(70, 20, 0.7); blob([[-40, 30], [-46, -20], [-30, -50], [30, -50], [46, -20], [40, 30], [0, 44]], { wash: '#e8b030', washA: 1, w: 1.6, col: '#3a2008' }); for (const sd of [-1, 1]) pencil(spline([[sd * 30, -40], [sd * 56, -70], [sd * 40, -90]], false, 4), { w: 5, col: '#f4ecd8', pass2: false }); ell(-12, -10, 4, 4, { wash: '#1a1a1a', washA: 1, line: false }); ell(12, -10, 4, 4, { wash: '#1a1a1a', washA: 1, line: false }); pop(); pop();
    if (t > EV.md_gosp + 0.2) { push(gx + 40, 900, popK(t, EV.md_gosp + 0.2, 0.4)); rect(-170, -40, 340, 80, { wash: '#f4e6c0', washA: 1, w: 2.4, col: '#5a3a10' }); txt('КОНСТАНТИН ДУКА', 0, 12, 30, { font: 'Osw', col: '#7a2a14' }); pop(); }
    const hk = gk; human(lerp(1600, 1000, hk), 1310, 1.0, t, { body: '#c8a040', legs: '#5a2a1a', hair: '#1a1a1a', face: t > EV.md_duka ? 'grin' : 'calm', armL: 'hold', armR: t > EV.md_duka - 0.2 ? 'up' : 'hold', look: -0.4, seed: 18642, flip: -1, hat: 'merchant', hatCol: '#a8221a' });
    if (t > EV.md_duka - 0.2) { push(lerp(1600, 1000, hk) - 70, 1310 - 340, 1, -0.6); pencil([[0, 0], [-120, 0]], { w: 6, col: '#e8b030' }); poly([[-120, 0], [-170, -30], [-170, 30]], { wash: '#e8b030', washA: 1, w: 1.6, col: '#6a4a08' }); pop(); for (let i = 0; i < 3; i++) { const q = (t * 2 + i / 3) % 1; txt('♪', lerp(1600, 1000, hk) - 260 - q * 100, 1310 - 360 - q * 80, 40, { col: '#5a3a10', a: 1 - q }); } }
  }
  function front(t) {                                                     // стол-край телеги: мешок, корзина початков, кувшин; стебли растут перед Томом
    const tb = rect(-400, 1440, 1900, 700, { wash: '#b88a4a', washA: 1, w: 3, col: '#3a2010', key: 18650 }); for (let i = 0; i < 8; i++) pencil([[-400, 1470 + i * 70], [1500, 1460 + i * 72]], { w: 2, col: '#6a4420', a: 0.5, pass2: false }); shadeG(tb.path, 540, 2000, 540, 1440, '#4a2a10', 0.35);
    push(260, 1500, 1); const bk = blob([[-130, 0], [-140, -110], [140, -110], [130, 0], [0, 20]], { wash: '#c8944a', washA: 1, w: 2.4, col: '#4a2a10', key: 18651 }); hatch(bk.path, bk.bb, { gap: 10, a: 0.35, col: '#6a4420', ang: 0.8, key: 18652 }); hatch(bk.path, bk.bb, { gap: 10, a: 0.35, col: '#6a4420', ang: -0.8, key: 18653 }); for (let i = 0; i < 7; i++) cornCob(-110 + i * 36, -120 - (i % 2) * 20, 0.36, -0.5 + i * 0.16, { key: 18654 + i, husk: 0.5, silk: false }); pop();
    grainSack(980, 1540, 0.85, { key: 18660, label: 'PORUMB', grain: 'c', lcol: '#3a5a1a' });
    const g = sm(clamp((t - EV.md_grow) / 0.9)); for (let i = 0; i < 4; i++) { const x = [-80, 120, 900, 1120][i], h = 900 * g * (0.8 + i * 0.07), sw = Math.sin(t * 1.6 + i) * 14; if (h < 10) continue; pencil(spline([[x, 1960], [x + sw * 0.4, 1960 - h * 0.5], [x + sw, 1960 - h]], false, 6), { w: 12, col: '#4a7a2a' });
      for (let k = 0; k < 5; k++) if (h > 160 + k * 150) blob([[x, 1900 - k * 150], [x + (k % 2 ? 130 : -130) + sw, 1860 - k * 150], [x + (k % 2 ? 210 : -210) + sw, 1920 - k * 150]], { wash: '#5a8a3a', washA: 1, w: 1.4, col: '#1a4a1a' });
      if (g > 0.7) cornCob(x + sw * 0.6 + 26, 1960 - h * 0.55, 0.5 * (g - 0.7) / 0.3, 0.5, { key: 18670 + i, husk: 1 }); if (g > 0.9) for (let k = 0; k < 5; k++) pencil([[x + sw, 1960 - h], [x + sw - 40 + k * 20, 1960 - h - 60]], { w: 3, col: '#c8a860', pass2: false }); }
    motes(26, [-100, 300, 1200, 1500], '#fff4c0', t, 18680, { sp: 10, vx: 20, sz: 3, a: 0.45, wob: 4 }); haze('#f4e0a0', 0.04);
    if (t > EV.md_year) { push(840, 900, popK(t, EV.md_year, 0.35), 0.06); rect(-120, -50, 240, 100, { wash: '#7a4a24', washA: 1, w: 3, col: '#2a1408' }); txt('1690-е', 0, 20, 56, { font: 'Osw', col: '#f4e0a0' }); pencil([[0, 50], [0, 200]], { w: 8, col: '#5a3a1a' }); pop(); }
  }
  WORLD.moldavia = (t, u, cat) => {
    lay(16, () => { land(t); haze('#f4e8c0', 0.06); }); lay(3.4, () => { field(t); });
    lay(1, () => { cat(); }); lay(0.94, () => { front(t); });
  };
  DIR.moldavia = {
    outfit: 'knyazA', light: { side: -1, rim: '#fff0b0' }, grade: ['#f0d070', 0.1],
    act: () => [[S0.moldavia, 'talk'], [EV.md_grow, 'awe'], [EV.md_mold, 'proud'], [EV.md_gosp, 'sideeye'], [EV.md_duka, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 640, y: 1600, s: 1.18, flip: 1, look: t > EV.md_gosp ? [-0.8, -0.1] : t > EV.md_grow ? [-0.4, -0.5] : [0, 0], hand: [160, -280], handF: t > EV.md_gosp ? [-200, -330] : [-80, -220], point: t > EV.md_gosp ? 1 : undefined, prop: 'cornP', propAng: 0.1 }),
    cam: () => [[S0.moldavia, 540, 1100, 0.18], [S0.moldavia + 0.5, 560, 1200, 0.24, 'x'], [EV.md_grow, 540, 1240, 0.26], [EV.md_gosp, 460, 1180, 0.22], [EV.md_duka, 480, 1160, 0.24], [S1.moldavia, 500, 1160, 0.26]]
  };
  // ---------------------------------------------------------------- переход: стебли кукурузы раздвигаются, как шторы
  TRANS_IN.moldavia = { a: 0.2, b: 0.5, runA: 0.3, fx(k, t, A, B) {
    const e = sm(clamp((k - 0.35) / 0.65)), c = sm(clamp(k / 0.4)); drawBuf(B, 1, 540, 960);
    const gapW = e * 700; ctx.save(); ctx.beginPath(); ctx.rect(0, 0, 540 - gapW, H); ctx.rect(540 + gapW, 0, 540, H); ctx.clip(); drawBuf(A, 1, 540, 960); ctx.restore();
    scr(() => { for (let i = 0; i < 12; i++) { const sd = i % 2 ? 1 : -1, base = 540 + sd * (gapW + (i >> 1) * 60) + sd * (1 - c) * 600, h = 2100; pencil([[base, 2000], [base + sd * 20, 2000 - h]], { w: 14, col: '#4a7a2a', gap: false });
      for (let k2 = 0; k2 < 8; k2++) blob([[base, 1900 - k2 * 240], [base + sd * 150, 1860 - k2 * 240], [base + sd * 230, 1920 - k2 * 240]], { wash: '#5a8a3a', washA: 1, w: 1.4, col: '#1a4a1a' }); } });
  } };
})();
