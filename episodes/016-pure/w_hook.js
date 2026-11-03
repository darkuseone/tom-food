/* 016 — `hook` + `button`: «Солдаты стерегли картошку — чтобы её украли! Как же картошка стала пюре?» Картофельное поле под Парижем, XVIII в., день:
   ряды цветущей картошки, плетёный забор, табличка DÉFENSE D'ENTRER, два солдата в синих мундирах и треуголках с ружьями-штыками ходят вдоль поля, будка
   часового, вдали — Париж с куполами и мельницами Монмартра, облака, птицы; за забором крадётся парижанин с мешком. Том-огородник в соломенной шляпе с фартуком
   держит миску пюре. По словам: «стерегли» — солдаты разворачиваются и берут ружья «на караул»; «украли!» — из-за забора выглядывает парижанин с мешком,
   подмигивает; «пюре?» — над миской пар, масло тает. «Откусим историю!» — Том ест ложку пюре. `button`: тот же кадр, Том подмигивает → петля в хук. */
(() => {
  EV.hk_guard = 0.1;
  EV.hk_steal = wtw('h1', 'украли!');
  EV.hk_pure = wtw('h1', 'пюре?');
  EV.hk_grab = LS('h2') - 0.15;
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_bite, 0.2, 10]);
  KEYW.push('украли!', 'пюре?');

  function sky(t) {                                                     // летнее небо, облака, птицы, Париж с куполами и мельницами
    vgrad(-700, 900, ['#5a9ad8', '#a8d0f0', '#f4ecd8']); for (let i = 0; i < 5; i++) { const x = ((i * 380 + t * 16) % 1900) - 400; for (let k = 0; k < 4; k++) ell(x + k * 56, -260 + (i % 2) * 120 - (k % 2) * 18, 80, 30, { wash: '#ffffff', washA: 0.9, line: false }); }
    for (let i = 0; i < 4; i++) { const x = ((i * 300 + t * 60) % 1600) - 200, y = -120 + i * 30 + Math.sin(t * 3 + i) * 10; pencil([[x - 14, y], [x, y + 8], [x + 14, y]], { w: 3, col: '#3a3a4a', pass2: false }); }
    for (const [x, w, h] of [[-200, 160, 120], [0, 220, 90], [260, 140, 150], [480, 200, 100], [760, 180, 130], [1000, 240, 90]]) rect(x, 700 - h, w, h, { wash: '#b8b0c8', washA: 0.9, w: 1.2, col: '#7a7090' });
    push(380, 560, 1); ell(0, 0, 70, 70, { wash: '#c8c0d8', washA: 1, w: 1.4, col: '#7a7090' }); rect(-70, 0, 140, 40, { wash: '#b8b0c8', washA: 1, w: 1.2 }); pencil([[0, -70], [0, -110]], { w: 4, col: '#7a7090', pass2: false }); pop();
    for (const x of [880, 1100]) { push(x, 620, 1); poly([[-30, 0], [-20, -110], [20, -110], [30, 0]], { wash: '#c8b8a8', washA: 1, w: 1.4, col: '#6a5a4a' }); push(0, -110, 1, t * 0.8 + x); for (let k = 0; k < 4; k++) { push(0, 0, 1, k * 1.5708); rect(-6, -90, 12, 90, { wash: '#e8e0d0', washA: 1, w: 1, col: '#6a5a4a' }); pop(); } pop(); pop(); }
  }
  function field(t) {                                                   // ряды цветущей картошки, будка часового, забор, табличка
    const g = shape(spline([[-400, 760], [400, 700], [1600, 760], [1600, 1400], [-400, 1400]], true, 8), { wash: '#7a9a3a', washA: 1, w: 1.6, col: '#3a4a1a', key: 16100 }); shadeG(g.path, 540, 700, 540, 1400, '#4a6a24', 0.35);
    for (let r = 0; r < 5; r++) { const y = 800 + r * 110, sc = 0.5 + r * 0.18; for (let i = 0; i < 12; i++) { const x = -360 + i * 170 + (r % 2) * 80, sw = Math.sin(t * 1.5 + i + r) * 4; push(x + sw, y, sc); for (let k = 0; k < 5; k++) blob([[0, 0], [-40 + k * 20, -50 - (k % 2) * 20], [-20 + k * 20, -70], [-10 + k * 16, -20]], { wash: k % 2 ? '#4a7a2a' : '#5a8a30', washA: 1, w: 1.2, col: '#2a4a1a' }); potFlower(-20, -70, 0.6, i); potFlower(24, -60, 0.5, r); pop(); } pencil([[-400, y + 20], [1600, y + 24]], { w: 3, col: '#6a5a2a', a: 0.5, pass2: false }); }
    push(1180, 1050, 1); rect(-70, -220, 140, 220, { wash: '#2a4a8a', washA: 1, w: 2, col: '#0a1a3a' }); for (let i = 0; i < 4; i++) rect(-70, -220 + i * 55, 140, 26, { wash: '#f4f0e6', washA: 0.9, w: 0.8 }); shape([[-90, -220], [0, -300], [90, -220]], { wash: '#c8221a', washA: 1, w: 2 }); rect(-30, -150, 60, 150, { wash: '#1a1a2a', washA: 1, w: 1.2 }); pop();
  }
  function guards(t) {                                                  // два солдата в синих мундирах и треуголках с ружьями, ходят вдоль поля
    const salute = t > EV.hk_guard + 0.6 && t < S1.hook; for (const [i, x0] of [[0, 260], [1, 860]]) { const x = x0 + (salute ? 0 : Math.sin(t * 0.8 + i * 3) * 60), fl = salute ? (i ? -1 : 1) : Math.cos(t * 0.8 + i * 3) > 0 ? 1 : -1;
      human(x, 1250, 1.0, t, { body: '#2a4a9a', bodyD: '#1a2a5a', legs: '#f4f0e6', hair: '#d8d0c0', face: t > EV.hk_steal ? 'shock' : 'calm', armL: 'hold', armR: salute ? 'up' : 'hold', look: fl * 0.4, seed: 16110 + i, flip: fl });
      push(x, 1250 - 286, 1, 0, fl); shape([[-60, 0], [-40, -30], [0, -46], [40, -30], [60, 0], [0, -14]], { wash: '#1a1a1a', washA: 1, w: 2, col: '#000' }); pencil([[-60, 0], [0, -14], [60, 0]], { w: 2, col: '#e8c050', pass2: false }); pop();
      push(x + fl * 50, 1250 - 120, 1, fl * (salute ? 0 : 0.15)); pencil([[0, 100], [0, -240]], { w: 7, col: '#6a4424' }); pencil([[0, -240], [0, -320]], { w: 3, col: '#b8bcc4', pass2: false }); pop(); }
  }
  function fence(t) {                                                   // плетёный забор, табличка, парижанин с мешком, Томова миска
    for (let i = 0; i < 14; i++) { const x = -360 + i * 140; pencil([[x, 1460], [x, 1300]], { w: 10, col: '#7a5a34' }); } for (let k = 0; k < 4; k++) pencil(spline(Array.from({ length: 14 }, (_, i) => [-360 + i * 140, 1330 + k * 32 + (i % 2 ? 8 : -8)]), false, 8), { w: 9, col: '#9a7a4a' });
    push(140, 1300, 1, -0.05); rect(-130, -60, 260, 80, { wash: '#f4ecd8', washA: 1, w: 3, col: '#5a3a1a' }); txt("DÉFENSE", 0, -24, 28, { font: 'Osw', col: '#a8221a' }); txt("D'ENTRER", 0, 8, 28, { font: 'Osw', col: '#a8221a' }); pencil([[0, 20], [0, 160]], { w: 8, col: '#6a4424' }); pop();
    if (t > EV.hk_steal - 0.2 && t < S1.hook + 0.1) { const k = sm(clamp((t - EV.hk_steal + 0.2) / 0.4)); human(1000, 1480 + (1 - k) * 160, 1.05, t, { body: '#8a5a3a', legs: '#4a3a2a', hair: '#3a2010', face: 'grin', armL: 'hold', armR: 'up', look: -0.6, seed: 16120, flip: -1 }); hat20(1000, 1480 + (1 - k) * 160, 1.05, 'cloche', '#5a3a2a', -1);
      push(1110, 1300 + (1 - k) * 160, 1); blob([[-40, 0], [-50, -80], [-10, -110], [40, -90], [50, 0]], { wash: '#c8a868', washA: 1, w: 2, col: '#5a3a1a' }); potato(0, -110, 0.3, 0.4, { key: 16121 }); pop(); }
    const tb = rect(-400, 1460, 1900, 800, { wash: '#6a4a2a', washA: 1, w: 3, col: '#1a0a04', key: 16130 }); shadeG(tb.path, 0, 1900, 0, 1460, '#2a1408', 0.45); for (let i = 0; i < 6; i++) pencil([[-400, 1500 + i * 70], [1500, 1504 + i * 70]], { w: 2, col: '#3a1a08', a: 0.5, pass2: false });
    for (const [x, r] of [[200, 0.3], [280, -0.4], [360, 0.8]]) potato(x, 1500, 0.8, r, { key: 16131 + x, dirt: 1 }); masher(480, 1490, 0.7, 1.3); mashBowl(860, 1520, 0.9, t, { key: 16135, melt: t > EV.hk_pure ? clamp((t - EV.hk_pure) / 1.2) * 0.8 + 0.2 : 0.2, steam: t > EV.hk_pure - 0.3 || t > S0.button });
    milkJug(1120, 1540, 0.7); crumbs(600, 1150, t, EV.hk_bite, 10, 16139, PU.mash);
  }
  function front(t) { push(-40, 1960, 1.6); for (let k = 0; k < 5; k++) blob([[0, 0], [-60 + k * 30, -80 - (k % 2) * 30], [-30 + k * 30, -110], [-10 + k * 24, -30]], { wash: '#4a7a2a', washA: 1, w: 1.4, col: '#2a4a1a' }); potFlower(-20, -110, 1.0); pop();
    push(1180, 1990, 1.6); for (let i = 0; i < 3; i++) potato(-60 + i * 60, -30, 0.7, i, { key: 16140 + i, dirt: 1 }); pop(); motes(20, [-100, 300, 1200, 1500], '#fffbe0', t, 16145, { sp: 10, sz: 4, a: 0.4, wob: 2 }); rays(1100, -300, 2.2, 0.4, 1900, 'rgba(255,248,220,1)', 0.12, 5, t); }
  WORLD.hook = (t, u, cat) => {
    lay(14, () => { sky(t); haze('#dfe8f0', 0.08); });
    lay(5, () => { field(t); });
    lay(2.8, () => { guards(t); });
    lay(1, () => { cat(); });
    lay(0.94, () => { fence(t); });
    lay(0.6, () => { front(t); });
  };
  const stPose = (b, t) => Object.assign(b, { x: 620, y: 1720, s: 1.12, flip: 1, look: [0.6, 0.4], hand: [200, -260], handF: [-60, -200], prop: 'spoonMP', propAng: -0.2 });
  DIR.hook = {
    outfit: 'dacha', light: { side: 1, rim: '#fff0c0' }, grade: ['#ffe0a0', 0.05],
    act: () => [[0, 'shock'], [EV.hk_guard + 0.6, 'suspicious'], [EV.hk_steal, 'shock'], [EV.hk_pure, 'smug'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { if (t < EV.hk_steal) return Object.assign(stPose(b, t), { look: [-0.5, -0.5] }); if (t < EV.hk_grab) return Object.assign(stPose(b, t), { look: t > EV.hk_pure ? [0.7, 0.6] : [0.9, -0.2] });
      const k = sm(clamp((t - EV.hk_grab) / 0.3)), bite = t > EV.hk_bite; return Object.assign(b, { x: 620, y: 1720, s: 1.12, flip: 1, look: bite ? [-0.2, -0.1] : [0.6, 0.4], hand: bite ? [40, -350] : [lerp(260, 140, k), lerp(-230, -320, k)], handF: [-60, -200], prop: 'spoonMP', propAng: 0.2, tailUp: bite, squash: b.squash + (bite && t < EV.hk_bite + 0.12 ? 0.1 : 0) }); },
    cam: () => [[0, 640, 1250, 0.32], [0.9, 560, 1100, 0.12, 'x'], [EV.hk_steal, 800, 1250, 0.2], [EV.hk_pure, 760, 1300, 0.26], [EV.hk_bite, 640, 1200, 0.34], [S1.hook, 640, 1200, 0.36]]
  };
  EV.bt_wink = wtw('x1', 'разомнём!');
  WORLD.button = (t, u, cat) => WORLD.hook(t, u, cat);
  DIR.button = { outfit: 'dacha', light: { side: 1, rim: '#fff0c0' }, grade: ['#ffe0a0', 0.05],
    act: () => [[S0.button, 'grin'], [EV.bt_wink - 0.3, 'laugh'], [EV.bt_wink, 'wink'], [DUR - 0.5, 'shock']],
    pose: (t, u, b) => { if (t > DUR - 0.7) return stPose(b, t); return Object.assign(b, { x: 620, y: 1720, s: 1.12, flip: 1, look: [-0.4, -0.1], hand: [120, -330], handF: [-60, -200], prop: 'masherP', propAng: 0.2, tailUp: true }); },
    cam: () => [[S0.button, 640, 1150, 0.26], [DUR - 0.8, 640, 1220, 0.3], [DUR - 0.1, 640, 1250, 0.32], [DUR, 640, 1250, 0.32]] };
})();
