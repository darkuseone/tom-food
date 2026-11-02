/* 012 — `hook` + `button`: «Камешки! Они спасли рецепт тульского пряника. Но как?» Тульская чайная зимним вечером: бревенчатые стены, полки с пряниками в
   коробках и коллекцией самоваров, расписные подносы, рушники, окно на заснеженную стену кремля с башней и фонарями, гирлянда. За столиками гости пьют чай из
   блюдец. На прилавке — весы: на одной чаше тульский пряник, на другую с грохотом сыплются камешки, чаши выравниваются. Том-половой (рубаха + фартук) в изумлении.
   «Откусим историю!» — Том хватает пряник и кусает: глазурь хрустит, повидло тянется. `button`: тот же кадр, Том подмигивает → петля в хук. */
(() => {
  EV.hk_drop = 0.05;
  EV.hk_save = wtw('h1', 'спасли');
  EV.hk_how = wtw('h1', 'как?');
  EV.hk_grab = LS('h2') - 0.15;
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_drop + 0.12, 0.2, 9], [EV.hk_bite, 0.22, 12]);
  KEYW.push('Камешки!', 'спасли');

  function kremlin(t) {                                                 // окно: снежный вечер, стена кремля с зубцами, башня, фонари, снег
    vgrad(-200, 900, ['#1a2040', '#3a3a64', '#6a5a7a']); glow(700, 600, 300, 'rgba(255,180,120,1)', 0.2);
    const w = rect(-200, 520, 1500, 300, { wash: '#8a3a2a', washA: 1, w: 2, col: '#2a0a04' }); for (let y = 540; y < 820; y += 34) for (let x = -200; x < 1300; x += 60) rect(x + ((y / 34) % 2) * 30, y, 58, 32, { wash: '#9a4a34', washA: 0.7, w: 1, col: '#3a1408', a: 0.5 });
    for (let i = 0; i < 26; i++) { const x = -200 + i * 60; poly([[x, 520], [x + 12, 480], [x + 24, 480], [x + 36, 520]], { wash: '#8a3a2a', washA: 1, w: 1.4, col: '#2a0a04' }); }
    push(560, 520, 1); rect(-90, -260, 180, 260, { wash: '#8a3a2a', washA: 1, w: 2, col: '#2a0a04' }); poly([[-110, -260], [0, -400], [110, -260]], { wash: '#2a4a3a', washA: 1, w: 2 }); rect(-30, -200, 60, 80, { wash: '#ffd890', washA: 0.8, w: 1.4 }); glow(0, -160, 80, 'rgba(255,210,130,1)', 0.4); pencil([[0, -400], [0, -440]], { w: 3, col: '#c8a050', pass2: false }); pop();
    for (let i = 0; i < 4; i++) blob([[-200 + i * 400, 520], [-100 + i * 400, 500], [100 + i * 400, 506], [200 + i * 400, 520]], { wash: '#f0f4fa', washA: 1, line: false });
    for (const x of [200, 900]) { pencil([[x, 900], [x, 700]], { w: 4, col: '#1a1a24' }); glow(x, 690, 70, 'rgba(255,220,140,1)', 0.6); ell(x, 692, 9, 12, { wash: '#ffe8a8', washA: 1, w: 1 }); }
    motes(70, [0, 100, 1100, 900], '#ffffff', t, 12201, { sp: 50, vx: 10, sz: 3.5, a: 0.85, wob: 1 });
  }
  function wall(t) {                                                    // брёвна, окно с наличником, полки с самоварами и коробками, подносы, рушник, гирлянда
    vgrad(-500, 1500, ['#3a2410', '#6a4420', '#7a5028']);
    for (let y = -500; y < 1300; y += 70) { const lg = rect(-400, y, 2000, 66, { wash: y % 140 ? '#8a5a2a' : '#7a4e24', washA: 1, w: 2, col: '#2a1408' }); shadeG(lg.path, 0, y + 66, 0, y, '#3a2010', 0.45); }
    push(540, 380, 1); const fr = rect(-260, -300, 520, 520, { wash: '#1a2040', washA: 1, w: 6, col: '#2a1408', key: 12210 }); ctx.save(); ctx.clip(fr.path); push(-540, -380, 1); kremlin(t); pop(); ctx.restore();
      pencil([[0, -300], [0, 220]], { w: 10, col: '#f4ecd8' }); pencil([[-260, -40], [260, -40]], { w: 10, col: '#f4ecd8' });
      const nl = poly([[-300, -300], [-200, -400], [0, -440], [200, -400], [300, -300], [280, -280], [-280, -280]], { wash: '#e8dcc0', washA: 1, w: 2.4, col: '#3a2a14' }); for (let i = 0; i < 9; i++) ell(-200 + i * 50, -340 - Math.sin(i / 8 * 3.14) * 50, 10, 10, { wash: '#2a6a9a', washA: 1, w: 1 });
      rect(-300, 220, 600, 40, { wash: '#e8dcc0', washA: 1, w: 2.4, col: '#3a2a14' }); for (const sd of [-1, 1]) { const c = shape(spline([[sd * 270, -300], [sd * 200, -290], [sd * 190 + Math.sin(t + sd) * 4, 0], [sd * 230, 230], [sd * 280, 230]], true, 6), { wash: '#f8f6f0', washA: 0.85, w: 1.4, col: '#9a9a8a' }); for (let k = 0; k < 8; k++) ell(sd * (210 + (k % 2) * 30), -240 + k * 56, 10, 10, { line: true, w: 1.4, col: '#b8b8a8' }); } pop();
    for (const [x0, y] of [[-380, 280], [-380, 520], [880, 280], [880, 520]]) { rect(x0, y, 520, 20, { wash: '#4a2a10', washA: 1, w: 2, col: '#1a0a04' }); const r = rng(12220 + x0 + y);
      for (let i = 0; i < 4; i++) { const x = x0 + 60 + i * 120; if ((i + (y > 400 ? 1 : 0)) % 2) { samovar(x, y, 0.62, t); } else { const bx = rect(x - 50, y - 90, 100, 90, { wash: ['#c8221a', '#2a5ab8', '#e8b030', '#3a8a3a'][Math.floor(r() * 4)], washA: 1, w: 2, col: '#1a0a04' }); txt('ТУЛЬСКИЕ', x, y - 52, 14, { font: 'Osw', col: '#fff4d0' }); pryanikTop(x, y - 26, 70, 36, { key: 12221 + i, text: '' }); } } }
    for (const [x, y, c] of [[-140, 880, '#1a1a1a'], [1220, 860, '#c8221a']]) { push(x, y, 1); const tr = ell(0, 0, 110, 80, { wash: c, washA: 1, w: 3, col: '#c8a050' }); for (let i = 0; i < 7; i++) { const a = i / 7 * 6.283; ell(Math.cos(a) * 40, Math.sin(a) * 28, 16, 12, { wash: ['#d9283a', '#f4f0e6', '#e8b030'][i % 3], washA: 1, w: 1 }); blob([[Math.cos(a) * 50, Math.sin(a) * 36], [Math.cos(a) * 70, Math.sin(a) * 50], [Math.cos(a + 0.3) * 56, Math.sin(a + 0.3) * 42]], { wash: '#3a8a3a', washA: 1, w: 1 }); } ell(0, 0, 18, 18, { wash: '#e8b030', washA: 1, w: 1 }); pop(); }
    for (let i = 0; i < 24; i++) { const x = -260 + i * 70, y = 40 + Math.sin(i * 0.7) * 26, on = Math.sin(t * 3 + i * 1.9) > -0.3; ell(x, y + 18, 8, 12, { wash: '#ffd890', washA: on ? 1 : 0.4, w: 1, col: '#3a2a1a' }); if (on) glow(x, y + 18, 30, 'rgba(255,210,130,1)', 0.45); }
    pencil(spline(Array.from({ length: 25 }, (_, i) => [-260 + i * 70, 40 + Math.sin(i * 0.7) * 26]), false, 3), { w: 2, col: '#2a1a0a', pass2: false });
  }
  function guests(t) {                                                  // гости: купчиха пьёт чай из блюдца, бородач с баранками, студентка с телефоном
    const sh = t > EV.hk_drop + 0.1 && t < EV.hk_how + 0.5;
    for (const [x, sd] of [[60, 1], [1000, -1]]) { push(x, 1180, 0.9); ell(0, 0, 130, 28, { wash: '#f4ecd8', washA: 1, w: 2, col: '#6a5a3a' }); pencil([[0, 0], [0, 200]], { w: 10, col: '#3a2410' }); samovar(-40 * sd, -6, 0.45, t); ell(60 * sd, -6, 30, 8, { wash: '#f8f6f0', washA: 1, w: 1.4 }); baranki(-90 * sd, -150, 0.5); pop(); }
    human(-60, 1330, 1.1, t, { body: '#8a2a4a', legs: '#2a1a1a', hair: '#3a2a1a', face: sh ? 'shock' : 'smile', armL: 'hold', armR: sh ? 'point' : 'up', look: 0.8, seed: 21, long: 1 }); kerchief20(-60, 1330, 1.1, '#2a5ab8');
    human(200, 1320, 1.1, t, { body: '#3a2a1a', legs: '#2a2a2a', hair: '#8a6a4a', beard: 'long', face: sh ? 'shock' : 'grin', armL: 'hold', armR: 'hold', look: 0.6, seed: 22 }); hat20(200, 1320, 1.1, 'fedora', '#2a2a2a');
    human(1120, 1320, 1.1, t, { body: '#e8b030', legs: '#2a3a5a', hair: '#c88a3a', face: sh ? 'shock' : 'smile', armL: 'hold', armR: 'up', prop: 'phone', look: -0.7, seed: 23, flip: -1 });
  }
  function counter(t) {                                                 // прилавок: весы с пряником и камешками (герой), самовар, баранки, коробка пряников, сахарница
    const tb = rect(-400, 1440, 1900, 800, { wash: '#6a3a18', washA: 1, w: 3, col: '#1a0a04', key: 12230 }); shadeG(tb.path, 0, 1900, 0, 1440, '#2a1408', 0.5); for (let i = 0; i < 8; i++) pencil([[-400, 1470 + i * 60], [1500, 1474 + i * 60]], { w: 2, col: '#3a1a08', a: 0.5, pass2: false });
    const rn = rect(-200, 1440, 900, 40, { wash: '#f8f4ea', washA: 1, w: 1.6, col: '#8a7a5a' }); for (let i = 0; i < 14; i++) txt('✿', -170 + i * 64, 1470, 26, { col: '#c8221a' });
    const k = popK(t, EV.hk_drop, 0.5), gone = t > EV.hk_grab + 0.1 && t < S1.hook + 0.1 || (t > S0.button && t < DUR - 0.75);
    const tilt = lerp(-0.22, 0.0, k);
    balance(400, 1450, 0.85, t, tilt, (px, py) => { if (!gone) pryanik(px, py, 0.7, t, { key: 12231 }); }, (px, py) => { if (t > EV.hk_drop - 0.05) { const f = clamp((t - EV.hk_drop + 0.05) / 0.25); pebbles(px, py - (1 - f) * 300, 14, 12232, 2.2); } });
    if (t > EV.hk_save && t < S1.hook + 0.3) { const q = popK(t, EV.hk_save, 0.4); push(560, 1060, q, -0.05); rect(-150, -40, 300, 80, { wash: '#f4ecd8', washA: 1, w: 3, col: '#5a3a1a' }); txt('РЕЦЕПТ?', 0, 16, 46, { font: 'Osw', col: '#a8221a' }); pop(); }
    samovar(30, 1440, 0.95, t); for (let i = 0; i < 3; i++) { const q = (t * 0.5 + i / 3) % 1; pencil(spline([[30, 1240], [30 + Math.sin(q * 6 + i) * 30, 1240 - q * 200], [30 + Math.sin(q * 9 + i) * 40, 1240 - q * 380]], false, 5), { w: 9, col: '#ffffff', a: 0.3 * (1 - q), pass2: false }); }
    baranki(1000, 1300, 0.9); push(160, 1620, 1); rect(-90, -110, 180, 110, { wash: '#c8221a', washA: 1, w: 2, col: '#1a0a04' }); txt('ТУЛЬСКИЕ', 0, -70, 24, { font: 'Osw', col: '#fff4d0' }); pryanikTop(0, -34, 140, 50, { key: 12233, text: '' }); pop();
    for (const [x, y] of [[420, 1640], [700, 1700]]) { push(x, y, 1); ell(0, 0, 70, 18, { wash: '#f8f6f0', washA: 1, w: 1.6, col: '#5a5a62' }); const g = rect(-30, -110, 60, 100, { wash: '#a8441a', washA: 0.85, w: 1.6, col: '#3a1a08' }); glow(-14, -80, 14, 'rgba(255,255,255,1)', 0.6);
      const ph = shape([[-36, -70], [36, -70], [32, 0], [-32, 0]], { wash: '#c8a050', washA: 1, w: 2, col: '#4a2a08' }); metalG(ph.path, -10, -40, 50, '#fff0c0', '#c8a050', '#6a4a10'); for (let i = 0; i < 3; i++) pencil([[-28 + i * 28, -64], [-20 + i * 28, -8]], { w: 2, col: '#7a5010', a: 0.6, pass2: false }); pencil(spline([[36, -60], [60, -44], [36, -14]], false, 4), { w: 6, col: '#c8a050', pass2: false }); pop(); }
    push(980, 1720, 1); ell(0, 0, 150, 34, { wash: '#f8f6f0', washA: 1, w: 2, col: '#5a5a62' }); for (let i = 0; i < 3; i++) pryanik(-40 + i * 40, -20 - i * 34, 0.4, t, { key: 12236 + i, rot: (i - 1) * 0.1 }); pop();
    crumbs(560, 1150, t, EV.hk_bite, 22, 12234, PK.doughL); crumbs(540, 1170, t, EV.hk_bite + 0.05, 10, 12235, PK.glaze);
  }
  function front(t) {                                                   // передний план: край рушника, кружевная салфетка, связка баранок, пар
    push(-40, 1300, 1.6); pencil([[0, -800], [10, 400]], { w: 4, col: '#8a7a5a', pass2: false }); for (let i = 0; i < 6; i++) { const yy = -700 + i * 70; ell(i % 2 ? 16 : -16, yy, 36, 24, { line: true, w: 13, col: '#c88a3a' }); } pop();
    push(1150, 2000, 1.4); const rr = shape([[-160, -300], [160, -300], [160, 200], [-160, 200]], { wash: '#f8f4ea', washA: 1, w: 2, col: '#8a7a5a' }); for (let i = 0; i < 5; i++) txt('✿', -120 + i * 60, -260, 34, { col: '#c8221a' }); pencil([[-160, -230], [160, -230]], { w: 6, col: '#c8221a', pass2: false }); pop();
    motes(16, [-100, 900, 1200, 1900], '#fff4e0', t, 12240, { sp: 16, sz: 6, a: 0.25, wob: 2 });
  }
  WORLD.hook = (t, u, cat) => {
    lay(14, () => { wall(t); haze('#ffd8a0', 0.06); });
    lay(3.4, () => { guests(t); haze('#ffcf90', 0.05); });
    lay(1, () => { cat(); });
    lay(0.94, () => { counter(t); });
    lay(0.6, () => { front(t); });
  };
  const stPose = (b, t) => Object.assign(b, { x: 730, y: 1700, s: 1.18, flip: -1, look: [-0.7, 0.4], hand: [180, -260], handF: [-60, -200], tilt: 0 });
  DIR.hook = {
    outfit: 'polovoy', light: { side: -1, rim: '#ffd890' }, grade: ['#ffb070', 0.1],
    act: () => [[0, 'shock'], [EV.hk_save, 'awe'], [EV.hk_how, 'suspicious'], [EV.hk_grab, 'smug'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { if (t < EV.hk_how) return stPose(b, t); if (t < EV.hk_grab) return Object.assign(stPose(b, t), { look: [0.2, -0.3], handF: [-120, -400], hand: [140, -260] });
      const kk = sm(clamp((t - EV.hk_grab) / 0.3)), bite = t > EV.hk_bite;
      return Object.assign(b, { x: 730, y: 1700, s: 1.18, flip: -1, look: bite ? [0.2, -0.1] : [-0.6, 0.4], hand: bite ? [40, -350] : [lerp(260, 120, kk), lerp(-230, -330, kk)], handF: [-60, -200], prop: bite ? 'pryanikBiteP' : 'pryanikP', propAng: 0.2, tailUp: bite, squash: b.squash + (bite && t < EV.hk_bite + 0.12 ? 0.1 : 0) }); },
    cam: () => [[0, 380, 1260, 0.36], [0.6, 520, 1180, 0.16, 'x'], [EV.hk_save, 540, 1160, 0.2], [EV.hk_how, 600, 1120, 0.26], [EV.hk_bite, 640, 1040, 0.36], [S1.hook, 650, 1020, 0.42]]
  };
  EV.bt_wink = wtw('x1', 'ещё!');
  WORLD.button = (t, u, cat) => WORLD.hook(t, u, cat);
  DIR.button = { outfit: 'polovoy', light: { side: -1, rim: '#ffd890' }, grade: ['#ffb070', 0.1],
    act: () => [[S0.button, 'grin'], [EV.bt_wink - 0.3, 'laugh'], [EV.bt_wink, 'wink'], [DUR - 0.5, 'shock']],
    pose: (t, u, b) => { if (t > DUR - 0.7) return stPose(b, t); return Object.assign(b, { x: 730, y: 1700, s: 1.18, flip: -1, look: [0.4, -0.1], hand: [-120, -330], handF: [-60, -200], prop: 'pryanikBiteP', propAng: 0.2, tailUp: true }); },
    cam: () => [[S0.button, 620, 1080, 0.22], [DUR - 0.9, 520, 1180, 0.28], [DUR - 0.1, 380, 1260, 0.36], [DUR, 380, 1260, 0.36]] };
})();
