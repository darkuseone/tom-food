/* 017 — `hook` + `button`: «Суд выселил квартирантку из-за банки рыбы! Что же в ней такого?» Подъезд немецкого дома 1981 года: обои в ромбик, лестница
   с деревянными перилами, двери с табличками MÜLLER / SCHMIDT, почтовые ящики, фикус, окно на улицу с «жуком» и фонарём, люстра-шар; соседи в халате и
   в бигуди зажимают носы, домовладелец с письмом KÜNDIGUNG; на ступенях лужа рассола. Том в олимпийке с фартуком держит вздутую банку. По словам:
   «Суд выселил» — удар молотка, на двери шлёпается красный штамп KÜNDIGUNG; «банки рыбы» — крышка банки хлопает, зелёные волны запаха, соседи кашляют;
   «Что же в ней такого?» — Том заглядывает в банку, вопрос. «Откусим историю!» — Том откусывает лепёшку с салакой. `button`: тот же кадр, Том подмигивает → петля. */
(() => {
  EV.hk_court = 0.15;
  EV.hk_can = wtw('h1', 'банки');
  EV.hk_what = wtw('h1', 'такого?');
  EV.hk_grab = LS('h2') - 0.15;
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_court, 0.22, 12], [EV.hk_bite, 0.2, 10]);
  KEYW.push('выселил', 'рыбы!');

  function street(t) { vgrad(-200, 500, ['#8aa0b8', '#c8d0d8']); for (const [x, w, h] of [[-80, 200, 300], [140, 240, 360], [400, 200, 280]]) { rect(x, 500 - h, w, h, { wash: '#c8b8a0', washA: 1, w: 1.4, col: '#6a5a4a' }); for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) rect(x + 20 + i * (w - 40) / 3, 540 - h + j * 80, 34, 46, { wash: '#4a5a6a', washA: 1, w: 1 }); }
    push(260, 470, 1); blob([[-80, 0], [-76, -40], [-40, -66], [30, -66], [70, -40], [80, 0]], { wash: '#d8a030', washA: 1, w: 2, col: '#3a2a10' }); for (const sd of [-1, 1]) ell(sd * 50, 4, 18, 18, { wash: '#1a1a1a', washA: 1, w: 1.4 }); rect(-30, -56, 50, 24, { wash: '#a8c8e0', washA: 1, w: 1 }); pop(); }
  function stair(t) {                                                   // обои, окно, лестница с перилами, двери, почтовые ящики, люстра
    vgrad(-600, 1500, ['#8a7a5a', '#a89470', '#b8a480']); for (let x = -400; x < 1600; x += 60) for (let y = -500; y < 1300; y += 60) poly([[x, y + 30], [x + 30, y], [x + 60, y + 30], [x + 30, y + 60]], { wash: (x / 60 + y / 60) % 2 ? '#c8b088' : '#b89c74', washA: 0.5, w: 0.8, col: '#8a7a5a' });
    push(880, 200, 1); const w = rect(-130, -200, 260, 340, { wash: '#a8c0d8', washA: 1, w: 8, col: '#f4f0e6', key: 17100 }); ctx.save(); ctx.clip(w.path); push(-400, -300, 1); street(t); pop(); ctx.restore(); pencil([[0, -200], [0, 140]], { w: 6, col: '#f4f0e6' }); pencil([[-130, -40], [130, -40]], { w: 6, col: '#f4f0e6' }); pop();
    for (let i = 0; i < 9; i++) { const x = -360 + i * 110, y = 1100 - i * 70; rect(x, y, 120, 70 + i * 70, { wash: '#7a5a3a', washA: 1, w: 1.6, col: '#3a2010' }); pencil([[x, y], [x + 120, y]], { w: 6, col: '#5a3a1a', pass2: false }); pencil([[x + 60, y], [x + 60, y - 160]], { w: 4, col: '#3a2a1a', pass2: false }); } pencil(spline([[-360, 940], [100, 620], [660, 300]], false, 6), { w: 14, col: '#6a3a1a' });
    for (const [x, nm] of [[100, 'MÜLLER'], [1180, 'SCHMIDT']]) { push(x, 1100, 1); rect(-110, -420, 220, 420, { wash: '#6a4424', washA: 1, w: 3, col: '#2a1408' }); rect(-90, -400, 180, 160, { wash: '#7a5434', washA: 1, w: 1.6 }); rect(-90, -220, 180, 200, { wash: '#7a5434', washA: 1, w: 1.6 }); ell(80, -200, 10, 10, { wash: '#c8a050', washA: 1, w: 1.2 }); rect(-50, -300, 100, 26, { wash: '#e8d8a0', washA: 1, w: 1.2 }); txt(nm, 0, -282, 16, { font: 'Osw', col: '#3a2a1a' });
      if (x === 100 && t > EV.hk_court + 0.1) { push(0, -140, popK(t, EV.hk_court + 0.1, 0.35), -0.15); rect(-110, -34, 220, 68, { wash: '#c8221a', washA: 0.2, w: 5, col: '#c8221a' }); txt('KÜNDIGUNG', 0, 12, 34, { font: 'Osw', col: '#c8221a' }); pop(); } pop(); }
    push(560, 640, 1); for (let i = 0; i < 4; i++) { rect(-150 + i * 76, -50, 70, 90, { wash: '#c8c8c0', washA: 1, w: 1.6, col: '#5a5a5a' }); rect(-140 + i * 76, -30, 50, 8, { wash: '#3a3a3a', washA: 1, line: false }); } pop();
    rays(880, 200, 2.3, 0.4, 1500, 'rgba(255,240,200,1)', 0.16, 4, t); push(560, -200, 1); pencil([[0, -300], [0, 0]], { w: 3, col: '#3a3a3a', pass2: false }); ell(0, 40, 70, 60, { wash: '#f8f4e0', washA: 0.95, w: 2, col: '#a89870' }); glow(0, 40, 300, 'rgba(255,240,190,1)', 0.45); pop();
  }
  function people(t) {                                                  // соседи зажимают носы, домовладелец с письмом, фикус
    const smell = t > EV.hk_can && t < S1.hook + 0.1; human(260, 1250, 1.0, t, { body: '#c8a8d8', legs: '#4a3a4a', hair: '#c8a060', face: smell ? 'shock' : 'calm', armL: 'hold', armR: smell ? 'up' : 'hold', look: 0.5, seed: 17110, long: 1 }); push(260, 1250 - 300, 1); for (let i = 0; i < 4; i++) ell(-36 + i * 24, 0, 12, 12, { wash: '#e8443a', washA: 1, w: 1 }); pop();
    if (smell) { nosePeg(260 + 8, 1250 - 230, 1); }
    human(940, 1250, 1.05, t, { body: '#3a4a3a', legs: '#2a2a2a', hair: '#8a8a8a', face: smell ? 'shock' : 'annoyed', armL: 'hold', armR: 'up', look: -0.5, seed: 17111, flip: -1 }); stache(940, 1250, 1.05, -1); push(940 - 90, 1250 - 300, 1, -0.2); rect(-44, -30, 88, 60, { wash: '#f8f4ea', washA: 1, w: 1.4, col: '#5a5a5a' }); txt('KÜNDIGUNG', 0, 6, 12, { font: 'Osw', col: '#c8221a' }); pop();
    push(-160, 1300, 1); rect(-50, -90, 100, 90, { wash: '#c86a3a', washA: 1, w: 2 }); for (let i = 0; i < 9; i++) { const a = -2.8 + i * 0.32; blob([[0, -90], [Math.cos(a) * 70, -90 + Math.sin(a) * 140 - 40], [Math.cos(a) * 110, -90 + Math.sin(a) * 200]], { wash: '#3a7a3a', washA: 1, w: 1.4, col: '#1a3a1a' }); } pop();
  }
  function floor(t) {                                                   // площадка: лужа рассола, коврик, банка, лепёшки, молоток судьи «вспышкой»
    const tb = rect(-400, 1440, 1900, 800, { wash: '#8a6a4a', washA: 1, w: 3, col: '#2a1408', key: 17120 }); for (let i = 0; i < 10; i++) for (let j = 0; j < 5; j++) rect(-400 + i * 200 + (j % 2) * 100, 1440 + j * 100, 200, 100, { wash: (i + j) % 2 ? '#7a5a3a' : '#9a7a54', washA: 0.6, w: 1, col: '#3a2010' });
    push(300, 1500, 1); ell(0, 0, 150, 30, { wash: SR.brine, washA: 0.7, w: 1.4, col: '#8a8a5a' }); ell(-40, -6, 30, 6, { wash: '#ffffff', washA: 0.5, line: false }); pop(); push(860, 1500, 1); rect(-140, -10, 280, 30, { wash: '#a8443a', washA: 1, w: 1.6 }); txt('WILLKOMMEN', 0, 12, 18, { font: 'Osw', col: '#f4e6c8' }); pop();
    const op = t > EV.hk_can && t < S1.hook + 0.1; push(640, 1440, 1); tinCan(0, 0, 0.9, 0, { bulge: op ? 0 : 0.8, open: op, key: 17121 }); pop(); if (op) { stink(640, 1310, 1.2, t, { n: 4 }); if (t < EV.hk_can + 0.3) { const k = (t - EV.hk_can) / 0.3; push(700 + k * 120, 1300 - k * 260, 1, k * 8); ell(0, 0, 60, 14, { wash: SR.tin, washA: 1, w: 2 }); pop(); } }
    if (t > EV.hk_court - 0.05 && t < EV.hk_court + 0.6) { const k = (t - EV.hk_court) / 0.6; push(560, 1000, 1 + k * 0.4); txt('БАХ!', 0, 0, 90, { font: 'Osw', col: '#c8221a', a: 1 - k }); pop(); }
    if (t > EV.hk_what && t < EV.hk_grab) { push(780, 980, popK(t, EV.hk_what, 0.35)); txt('?', 0, 0, 140, { font: 'Osw', col: '#ffe070' }); pop(); }
    crumbs(600, 1150, t, EV.hk_bite, 10, 17129, SR.bread);
  }
  function front(t) { push(-40, 1960, 1.6); for (let i = 0; i < 3; i++) rect(-90 + i * 10, -40 - i * 30, 180, 30, { wash: ['#f4ecd8', '#e8d8b0', '#f8f4ea'][i], washA: 1, w: 1.4, col: '#8a8070' }); pop(); push(1180, 1990, 1.6); rect(-80, -160, 160, 160, { wash: '#c8c8c0', washA: 1, w: 2, col: '#5a5a5a' }); pop();
    motes(20, [-100, 300, 1200, 1500], '#fff4d0', t, 17130, { sp: 6, sz: 4, a: 0.35, wob: 2 }); if (t > EV.hk_can) haze('#a8d870', 0.06); }
  WORLD.hook = (t, u, cat) => {
    lay(14, () => { stair(t); haze('#d8c8a0', 0.05); });
    lay(2.8, () => { people(t); });
    lay(1, () => { cat(); });
    lay(0.94, () => { floor(t); });
    lay(0.6, () => { front(t); });
  };
  const stPose = (b, t) => Object.assign(b, { x: 620, y: 1600, s: 1.22, flip: 1, look: [0.2, 0.5], hand: [220, -280], handF: [-60, -200], prop: 'klammaP', propAng: -0.1 });
  DIR.hook = {
    outfit: 'olympA', light: { side: 1, rim: '#fff0c0' }, grade: ['#e8d8a0', 0.05],
    act: () => [[0, 'shock'], [EV.hk_court + 0.3, 'scared'], [EV.hk_can, 'annoyed'], [EV.hk_what, 'suspicious'], [EV.hk_grab, 'smug'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { if (t < EV.hk_can) return Object.assign(stPose(b, t), { look: [-0.7, -0.3] }); if (t < EV.hk_grab) return Object.assign(stPose(b, t), { look: [0.2, 0.7], squint: true, sweat: true });
      const k = sm(clamp((t - EV.hk_grab) / 0.3)), bite = t > EV.hk_bite; return Object.assign(b, { x: 620, y: 1600, s: 1.22, flip: 1, look: bite ? [-0.2, -0.1] : [0.6, 0.4], hand: bite ? [40, -350] : [lerp(260, 140, k), lerp(-230, -320, k)], handF: [-60, -200], prop: 'klammaP', propAng: 0.2, tailUp: bite, squash: b.squash + (bite && t < EV.hk_bite + 0.12 ? 0.1 : 0) }); },
    cam: () => [[0, 640, 1250, 0.32], [0.9, 560, 1100, 0.22, 'x'], [EV.hk_can, 640, 1250, 0.24], [EV.hk_what, 660, 1250, 0.28], [EV.hk_bite, 640, 1200, 0.34], [S1.hook, 640, 1200, 0.36]]
  };
  EV.bt_wink = wtw('x1', 'банку!');
  WORLD.button = (t, u, cat) => WORLD.hook(t, u, cat);
  DIR.button = { outfit: 'olympA', light: { side: 1, rim: '#fff0c0' }, grade: ['#e8d8a0', 0.05],
    act: () => [[S0.button, 'grin'], [EV.bt_wink - 0.3, 'laugh'], [EV.bt_wink, 'wink'], [DUR - 0.5, 'shock']],
    pose: (t, u, b) => { if (t > DUR - 0.7) return stPose(b, t); return Object.assign(b, { x: 620, y: 1600, s: 1.22, flip: 1, look: [-0.4, -0.1], hand: [120, -330], handF: [-60, -200], prop: 'canP', propAng: 0.1, tailUp: true }); },
    cam: () => [[S0.button, 640, 1150, 0.26], [DUR - 0.8, 640, 1220, 0.30], [DUR - 0.1, 640, 1250, 0.32], [DUR, 640, 1250, 0.32]] };
})();
