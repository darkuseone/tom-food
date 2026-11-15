/* 023 — `byzant`: «К славянам её везут греки из Византии. Отсюда, по версии, и «гречка».» Широкая река в солнечный день (лазурь и золото):
   на дальнем берегу — белокаменный монастырь с золотыми куполами за стеной, лес, холмы; у деревянной пристани — византийская ладья с полосатым
   красно-белым парусом и глазом на носу, гребцы, грузчики-монахи несут мешки с надписью «ΓΡΕΚ…»; на берегу славяне — бородач в рубахе подставляет
   ладони, женщина в платке с корзиной, мальчишка на бочке. Передний план — сваи пристани, канат, бочка, амфора, сеть, чайка на столбе.
   Том — греческий монах (чёрный подрясник, скуфья + фартук) с мешком. По словам: «славянам» — бородач подходит и подставляет ладони; «греки» —
   парус надувается ветром; «Византии.» — купола вспыхивают бликом; «Отсюда,» — Том сыплет зерно из мешка в ладони; ««гречка».» — над мешком
   всплывает деревянная табличка «ГРЕЧКА = ГРЕЧЕСКАЯ», бородач пробует слово на вкус. Главный свет — полуденное солнце справа сверху, блики на воде.
   Переход В сцену: полосатый парус ладьи с ветром проносится через кадр и открывает реку. */
(() => {
  EV.bz_slav = wtw('s4', 'славянам');
  EV.bz_greek = wtw('s4', 'греки');
  EV.bz_byz = wtw('s4', 'Византии.');
  EV.bz_pour = wtw('s4', 'Отсюда,');
  EV.bz_name = wtw('s4', 'гречка».');
  SHAKES.push([EV.bz_name + 0.05, 0.12, 5]);
  KEYW.push('Византии.', '«гречка».');
  function sky(t) {                                                      // лазурное небо, облака, солнце справа, чайки
    vgrad(-800, 1100, ['#3a7ac8', '#7ab0e0', '#c8e0f0', '#f4ecd8']);
    glow(1250, 80, 280, 'rgba(255,244,210,1)', 0.35); ell(1250, 80, 60, 60, { wash: '#fffbe8', washA: 1, line: false });
    for (let i = 0; i < 5; i++) { const x = ((i * 420 + t * 10) % 2300) - 500, y = -380 + (i % 2) * 160; blob([[x, y], [x + 140, y - 60], [x + 320, y - 50], [x + 420, y], [x + 300, y + 30], [x + 80, y + 30]], { wash: '#ffffff', washA: 0.85, w: 1.2, col: '#a8c0d8' }); }
    for (let i = 0; i < 4; i++) { const k = (t * 0.08 + i * 0.25) % 1, x = -300 + k * 1700, y = 0 + Math.sin(k * 8 + i) * 60 + i * 40; pencil(spline([[x - 22, y + 4], [x - 10, y - 8], [x, y], [x + 10, y - 8], [x + 22, y + 4]], false, 4), { w: 3, col: '#f4f4f4', pass2: false }); pencil(spline([[x - 22, y + 6], [x, y + 2], [x + 22, y + 6]], false, 3), { w: 1, col: '#3a3a3a', pass2: false }); }
  }
  function monastery(t) {                                                // дальний берег: холм, белая стена, храм с золотыми куполами, лес
    const glint = clamp(1 - Math.abs(t - EV.bz_byz - 0.3) / 0.5);
    sil([[-800, 860], [-300, 700], [200, 620], [700, 640], [1200, 720], [1900, 760], [1900, 1100], [-800, 1100]], '#6a9a5a', 1);
    for (let i = 0; i < 38; i++) { const x = -700 + i * 70, y = 760 + Math.sin(i * 1.7) * 40 - (i > 10 && i < 24 ? 60 : 0); ell(x, y, 46, 60, { wash: i % 3 ? '#3a6a3a' : '#2a5a34', washA: 1, w: 1, col: '#1a3a1a' }); }
    push(420, 640, 1); const wl = rect(-360, -60, 720, 80, { wash: '#f4f0e4', washA: 1, w: 2, col: '#6a6050' }); shadeG(wl.path, 360, 0, -360, 0, '#a89a80', 0.4); for (let i = 0; i < 18; i++) rect(-360 + i * 40, -76, 24, 18, { wash: '#f4f0e4', washA: 1, w: 1.2, col: '#6a6050' });
    for (const tx of [-320, 320]) { rect(tx - 34, -200, 68, 160, { wash: '#efe8d8', washA: 1, w: 1.8, col: '#6a6050' }); poly([[tx - 44, -200], [tx, -260], [tx + 44, -200]], { wash: '#3a6a5a', washA: 1, w: 1.6, col: '#1a3a2a' }); }
    const ch = rect(-140, -300, 280, 240, { wash: '#f8f4ea', washA: 1, w: 2, col: '#6a6050', key: 24020 }); shadeG(ch.path, 140, 0, -140, 0, '#b8a888', 0.4); for (let i = 0; i < 3; i++) { const ax = -90 + i * 90; blob([[ax - 22, -110], [ax - 22, -170], [ax, -194], [ax + 22, -170], [ax + 22, -110]], { wash: '#3a4a6a', washA: 1, w: 1.4, col: '#1a2030' }); }
    rect(-60, -380, 120, 80, { wash: '#f8f4ea', washA: 1, w: 1.8, col: '#6a6050' });
    for (const [dx, dy, r] of [[0, -400, 70], [-110, -320, 44], [110, -320, 44]]) { const d = blob([[dx - r, dy], [dx - r * 0.9, dy - r * 0.8], [dx, dy - r * 1.5], [dx + r * 0.9, dy - r * 0.8], [dx + r, dy]], { wash: '#e8b830', washA: 1, w: 2, col: '#6a4a08' }); metalG(d.path, dx - r * 0.3, dy - r * 0.8, r * 1.4, '#fff8c0', '#e8b830', '#8a5a08', 0.8); pencil([[dx, dy - r * 1.5], [dx, dy - r * 1.5 - 40]], { w: 4, col: '#c8a030', pass2: false }); pencil([[dx - 14, dy - r * 1.5 - 28], [dx + 14, dy - r * 1.5 - 28]], { w: 4, col: '#c8a030', pass2: false }); if (glint > 0) glow(dx - r * 0.3, dy - r * 0.9, r * 1.2, 'rgba(255,240,180,1)', 0.35 * glint); }
    pop(); haze('#e0ecf4', 0.1);
  }
  function river(t) {                                                    // река: синие полосы, блики солнца, отражение куполов, рябь
    const rv = rect(-800, 900, 2700, 500, { wash: '#2a6aa8', washA: 1, line: false, key: 24030 }); shadeG(rv.path, 0, 900, 0, 1400, '#5a9ad0', 0.5);
    for (let i = 0; i < 26; i++) { const r = rng(24031 + i), x = -600 + r() * 2400, y = 920 + r() * 460, ph = Math.sin(t * 2 + i); pencil([[x, y], [x + 60 + r() * 120, y + ph * 3]], { w: 2.4, col: '#f4fbff', a: 0.55 + ph * 0.2, pass2: false }); }
    for (let i = 0; i < 6; i++) ell(1180 + Math.sin(t * 3 + i) * 20, 960 + i * 40, 50 - i * 6, 4, { wash: '#fff8d8', washA: 0.8, line: false });
    for (let i = 0; i < 3; i++) ell(420 + (i - 1) * 110, 940 + i * 4, 30, 50, { wash: '#e8b830', washA: 0.25, line: false });
  }
  function boat(t) {                                                     // ладья: корпус с глазом, весла, полосатый парус (надувается на «греки»), гребцы, монахи с мешками
    const fill = sm(clamp((t - EV.bz_greek + 0.1) / 0.5)), bob = Math.sin(t * 1.6) * 6;
    push(840, 1180 + bob, 1, Math.sin(t * 1.6) * 0.01);
    const hl = blob([[-420, -60], [-380, 20], [-200, 50], [260, 50], [420, 10], [480, -90], [440, -70], [260, -40], [-300, -40]], { wash: '#8a4a22', washA: 1, w: 3, col: '#2a1408', key: 24040 }); shadeG(hl.path, 0, -60, 0, 50, '#3a1a08', 0.45);
    for (let i = 0; i < 3; i++) pencil(spline([[-390, -30 + i * 22], [0, -10 + i * 22], [420, -40 + i * 22]], false, 6), { w: 2.4, col: '#5a2a10', pass2: false }); for (let i = 0; i < 8; i++) ell(-300 + i * 80, -30, 12, 12, { wash: ['#c8343a', '#e8c040', '#2a5aa8'][i % 3], washA: 1, w: 1.4, col: '#2a1408' });
    ell(400, -40, 20, 12, { wash: '#f8f4e8', washA: 1, w: 1.6, col: '#1a0a04' }); ell(404, -40, 8, 8, { wash: '#2a5aa8', washA: 1, line: false });
    for (let i = 0; i < 5; i++) { const a = Math.sin(t * 2 + i * 0.4) * 0.3; pencil([[-260 + i * 110, 10], [-300 + i * 110 + Math.sin(a) * 60, 140]], { w: 6, col: '#6a4a2a', pass2: false }); }
    pencil([[0, -40], [0, -620]], { w: 14, col: '#5a3a1a', pass2: false }); pencil([[-230, -580], [230, -580]], { w: 10, col: '#5a3a1a', pass2: false });
    const bx = fill * 70; const sl = blob([[-220, -575], [220, -575], [220 + bx, -320], [200, -100], [-200, -100], [-220 + bx, -320]], { wash: '#f4ecd8', washA: 1, w: 2.4, col: '#4a3a2a', key: 24041 }); shadeG(sl.path, 220, 0, -220, 0, '#a89a7a', 0.4);
    ctx.save(); ctx.clip(sl.path); for (let i = 0; i < 4; i++) rect(-240 + i * 120 + bx * 0.5, -580, 60, 500, { wash: '#c8343a', washA: 0.9, line: false }); ctx.restore();
    for (const sd of [-1, 1]) pencil([[sd * 220, -575], [sd * 400, -60]], { w: 2, col: '#3a2a1a', a: 0.8, pass2: false });
    for (let i = 0; i < 3; i++) human(-240 + i * 150, -40, 0.62, t, { body: ['#5a3a6a', '#3a5a6a', '#6a5a3a'][i], legs: '#3a3028', armL: 'hold', armR: 'hold', face: 'calm', seed: 24042 + i, skin: '#d8a070', hat: i === 1 ? 'cap' : undefined, hatCol: '#3a2a1a' });
    pop();
  }
  function pier(t) {                                                     // пристань: настил, сваи, люди: монахи-грузчики, славяне, мальчишка на бочке
    const pd = rect(-500, 1260, 1400, 60, { wash: '#a8784a', washA: 1, w: 2.4, col: '#3a2410', key: 24050 }); for (let i = 0; i < 18; i++) pencil([[-500 + i * 80, 1262], [-500 + i * 80, 1318]], { w: 2, col: '#5a3a1a', pass2: false }); shadeG(pd.path, 0, 1260, 0, 1320, '#5a3a1a', 0.4);
    for (let i = 0; i < 8; i++) { const x = -460 + i * 180; rect(x, 1318, 26, 140, { wash: '#6a4a2a', washA: 1, w: 1.6, col: '#2a1408' }); ell(x + 13, 1430, 30, 6, { wash: '#a8d0f0', washA: 0.5, line: false }); }
    const cm = t > EV.bz_slav ? sm(clamp((t - EV.bz_slav) / 0.6)) : 0, taste = t > EV.bz_name;
    human(lerp(80, 220, cm), 1290, 1.05, t, { body: '#e8dcc0', bodyD: '#9a8a68', legs: '#5a4a3a', hair: '#c8a060', beard: 'long', face: taste ? 'grin' : t > EV.bz_pour ? 'shock' : 'calm', armL: cm > 0.5 ? 'up' : 'down', armR: cm > 0.5 ? 'up' : 'down', seed: 24051, look: 0.6, trim: '#c8343a', belt: '#c8343a' });
    human(-180, 1290, 1.0, t, { body: '#c8584a', legs: '#4a3a3a', long: 1, hat: 'scarf', hatCol: '#f4e8d0', armL: 'hold', armR: t > EV.bz_name ? 'point' : 'hold', face: t > EV.bz_name ? 'grin' : 'smile', seed: 24052, look: 0.7 });
    push(-140, 1170, 1); const kb = blob([[-40, 0], [-50, -50], [50, -50], [40, 0]], { wash: '#c8a060', washA: 1, w: 1.6, col: '#5a3a10' }); for (let i = 0; i < 3; i++) pencil([[-46, -12 - i * 14], [46, -12 - i * 14]], { w: 1.4, col: '#8a6a30', pass2: false }); for (let i = 0; i < 4; i++) ell(-24 + i * 16, -54, 9, 9, { wash: '#d8343a', washA: 1, w: 1 }); pop();
    push(-420, 1290, 1); const br = rect(-50, -110, 100, 110, { wash: '#8a5a2a', washA: 1, w: 2, col: '#2a1408' }); for (const yy of [-90, -20]) pencil([[-52, yy], [52, yy]], { w: 6, col: '#4a4a4a', pass2: false }); pop();
    human(-420, 1180, 0.68, t, { body: '#4a6a9a', legs: '#2a3a5a', hair: '#e8c060', face: 'grin', armL: 'wave', armR: 'swing', seed: 24053 });
    for (let i = 0; i < 2; i++) { const x = 560 + i * 140, sw = Math.sin(t * 4 + i) * 4; human(x, 1290 + sw * 0.2, 0.98, t, { body: '#24222a', legs: '#1a1a20', long: 1, hair: '#2a2018', beard: 'long', face: 'calm', armL: 'up', armR: 'up', seed: 24054 + i, look: -0.5, flip: -1, skin: '#d8a070' }); grainSack(x, 1290 - 300 * 0.98 + 30, 0.55, { key: 24056 + i, label: 'ΓΡΕΚ', size: 18 }); }
  }
  function sign(t) {                                                     // табличка «ГРЕЧКА = ГРЕЧЕСКАЯ» над мешком
    if (t < EV.bz_name - 0.05) return; const k = popK(t, EV.bz_name, 0.4); push(380, 1080, k, -0.04);
    pencil([[-150, -90], [-150, -130]], { w: 3, col: '#5a3a1a', pass2: false }); pencil([[150, -90], [150, -130]], { w: 3, col: '#5a3a1a', pass2: false });
    const b = rect(-190, -90, 380, 110, { wash: '#e8c890', washA: 1, w: 3, col: '#4a2a10', key: 24060 }); shadeG(b.path, 0, -90, 0, 20, '#a87a3a', 0.35); for (let i = 0; i < 4; i++) pencil([[-186, -70 + i * 26], [186, -66 + i * 26]], { w: 1.4, col: '#a87a3a', a: 0.6, pass2: false });
    txt('ГРЕЧКА', 0, -38, 46, { font: 'Osw', col: '#a8241e' }); txt('= греческая крупа', 0, 4, 24, { font: 'Hand', col: '#2a1a0a' }); pop();
  }
  function deck(t) {                                                     // ближний настил: доски, бочка, амфора, канат, сеть, мешки, рассыпанные зёрна
    const dk = rect(-400, 1440, 2000, 600, { wash: '#9a6a3a', washA: 1, w: 3, col: '#2a1408', key: 24070 }); shadeG(dk.path, 0, 1440, 0, 1900, '#3a1a08', 0.5);
    for (let i = 0; i < 14; i++) pencil([[-400 + i * 140, 1440], [-420 + i * 150, 2000]], { w: 3, col: '#4a2a10', a: 0.5, pass2: false }); for (let i = 0; i < 20; i++) ell(-300 + i * 90, 1460 + (i % 4) * 30, 4, 4, { wash: '#3a2410', washA: 0.8, line: false });
    rect(-400, 1430, 2000, 16, { wash: '#b8844a', washA: 1, w: 2, col: '#3a1a08' });
    lightPool(700, 1500, 600, 120, 'rgba(255,240,200,1)', 0.32);
    grainSack(300, 1520, 0.8, { key: 24071, label: 'ΓΡΕΚ', open: 1 }); grainSack(180, 1540, 0.7, { key: 24072, col: '#b8986a' });
    push(980, 1530, 1); const am = blob([[-30, -180], [30, -180], [26, -150], [60, -110], [64, -40], [30, 0], [-30, 0], [-64, -40], [-60, -110], [-26, -150]], { wash: '#c8784a', washA: 1, w: 2, col: '#4a2010', key: 24073 }); shadeG(am.path, 64, 0, -64, 0, '#6a2a10', 0.45); for (const sd of [-1, 1]) pencil(spline([[sd * 26, -170], [sd * 60, -160], [sd * 50, -120]], false, 4), { w: 6, col: '#c8784a', pass2: false }); pencil([[-54, -90], [54, -90]], { w: 3, col: '#2a1408', pass2: false }); for (let i = 0; i < 6; i++) pencil([[-50 + i * 20, -80], [-40 + i * 20, -60]], { w: 2, col: '#2a1408', pass2: false }); pop();
    push(760, 1600, 1); for (let i = 0; i < 4; i++) pencil(spline(ellPts(0, 0, 80 - i * 14, 26 - i * 4, 0, 0, 16), true, 3), { w: 8, col: '#c8a868', pass2: false }); pencil(spline(ellPts(0, -4, 80, 26, 0, 0, 16), true, 3), { w: 2, col: '#6a4a20', a: 0.6, pass2: false }); pop();
    const r = rng(24074); for (let i = 0; i < 14; i++) grainB(420 + r() * 300, 1530 + r() * 60, 0.32, r() * 6, { key: 24075 + i });
    castShadow(300, 1520, 160, 90, -0.7, 0.22); castShadow(980, 1530, 120, 90, -0.7, 0.22);
  }
  function front(t) {                                                    // передний план: свая с канатом и чайкой справа, край сети слева, вода у края
    push(1000, 1900, 1); const pl = rect(-40, -800, 80, 800, { wash: '#6a4a2a', washA: 1, w: 2.4, col: '#2a1408', key: 24080 }); shadeG(pl.path, 40, 0, -40, 0, '#2a1408', 0.45); for (let i = 0; i < 4; i++) pencil([[-44, -600 + i * 18], [44, -590 + i * 18]], { w: 7, col: '#c8a868', pass2: false });
    const gb = Math.sin(t * 2) * 4; ell(0, -830 + gb, 40, 24, { wash: '#f8f8f4', washA: 1, w: 1.8, col: '#3a3a3a' }); ell(30, -850 + gb, 16, 14, { wash: '#f8f8f4', washA: 1, w: 1.6, col: '#3a3a3a' }); poly([[44, -852 + gb], [64, -846 + gb], [44, -842 + gb]], { wash: '#f4b020', washA: 1, w: 1 }); ell(34, -854 + gb, 2.5, 2.5, { wash: '#000', washA: 1, line: false }); pencil([[-30, -840 + gb], [10, -834 + gb]], { w: 4, col: '#8a8a94', pass2: false }); pop();
    push(420, 1800, 1); for (let i = 0; i < 8; i++) { pencil([[i * 20 - 70, -260], [i * 26 - 90, 0]], { w: 1.6, col: '#6a5a3a', pass2: false }); } for (let k = 0; k < 8; k++) pencil([[-70, -240 + k * 30], [80, -250 + k * 34]], { w: 1.6, col: '#6a5a3a', pass2: false }); for (let i = 0; i < 4; i++) ell(-60 + i * 40, -30, 10, 10, { wash: '#e8c040', washA: 1, w: 1 }); pop();
  }
  WORLD.byzant = (t, u, cat) => {
    lay(34, () => { sky(t); });
    lay(16, () => { monastery(t); river(t); });
    lay(5, () => { boat(t); });
    lay(3, () => { pier(t); sign(t); castShadow(220, 1290, 110, 150, -0.7, 0.22); castShadow(-180, 1290, 110, 150, -0.7, 0.2); });
    lay(1, () => { cat(); deck(t); });
    lay(0.7, () => { front(t); motes(12, [300, 600, 1000, 1500], '#ffffff', t, 24090, { sp: 8, sz: 3, a: 0.35, wob: 6 }); shaft(1100, 300, 300, 1800, 0.4, 'rgba(255,246,220,1)', 0.1); moodDark(560, 1100, 520, 1500, '#0a1a3a', 0.3); });
  };
  DIR.byzant = {
    outfit: 'monkG', light: { side: 1, rim: '#fff0c8' }, grade: ['#a8c8f0', 0.06],
    act: () => [[S0.byzant, 'talk'], [EV.bz_greek, 'proud'], [EV.bz_byz, 'awe'], [EV.bz_pour, 'smug'], [EV.bz_name, 'wink']],
    pose: (t, u, b) => { const pour = t > EV.bz_pour - 0.1;
      return Object.assign(b, { x: 660, y: 1590, s: 1.15, flip: true, look: t < EV.bz_greek ? [-0.7, 0] : t < EV.bz_pour ? [0.6, -0.4] : [-0.6, 0.3],
        hand: pour ? [220, -320] : [150, -240], handF: pour ? [-150, -260] : [-120, -200], prop: 'sackP', propAng: pour ? -1.0 : 0, tilt: pour ? -0.05 : 0 }); },
    afterCat: (t, u, P) => { if (t > EV.bz_pour && t < S1.byzant) { for (let i = 0; i < 10; i++) { const k = ((t - EV.bz_pour) * 1.6 + i / 10) % 1; grainB(P.x - 290 * P.s - k * 30, P.y - 300 * P.s + k * 200, 0.32, t * 5 + i, { key: 24095 + i }); } } },
    cam: () => [[S0.byzant, 620, 1040, 0.2], [EV.bz_greek, 680, 1060, 0.22], [EV.bz_byz, 620, 1030, 0.21], [EV.bz_pour, 560, 1120, 0.27], [EV.bz_name, 560, 1120, 0.3], [S1.byzant, 560, 1120, 0.31]]
  };
  TRANS_IN.byzant = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {       // полосатый парус проносится через кадр справа налево
    const e = sm(k), x = lerp(1700, -700, e); drawBuf(A, 1, 540, 960); scr(() => { ctx.save(); const P = new Path2D(); P.rect(x + 300, 0, 1500, 1920); ctx.clip(P); ctx.drawImage(B, 0, 0); ctx.restore();
      const S = blob([[x - 360, -100], [x + 360, -100], [x + 420, 960], [x + 360, 2020], [x - 360, 2020], [x - 300, 960]], { wash: '#f4ecd8', washA: 1, w: 6, col: '#4a3a2a' }); ctx.save(); ctx.clip(S.path); for (let i = 0; i < 4; i++) rect(x - 380 + i * 190, -100, 95, 2200, { wash: '#c8343a', washA: 0.9, line: false }); ctx.restore(); shadeG(S.path, x + 420, 0, x - 360, 0, '#8a7a5a', 0.4); });
  } };
})();
