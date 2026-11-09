/* 018 — `sultan` (★ РАЗГАДКА): «Разгадка: султан брал налог пшеницей, а кукурузу не считал. Пшеницу — туркам, кашу — себе!» Двор сборщика податей
   XVIII в. в бирюзе и золоте: османские стрельчатые арки с изразцами, сквозь главную арку — Стамбул вдали (купола, минареты, Босфор с парусами),
   фонтан, медные кувшины, ковёр; писарь в тюрбане с огромной книгой, янычар-стражник, обоз с мешками пшеницы и верблюд, молдавский крестьянин прячет
   початки за спину. Стол: весы-коромысло (герой), мешки WHEAT/BUĞDAY, книга-реестр с тугрой, монеты, кукуруза, чугунок. Том — османский писарь.
   По словам: «Разгадка» — золотая вспышка, звезда; «султан» — на реестре шлёпается тугра; «налог пшеницей» — мешок пшеницы падает на чашу, весы
   кренятся, в книге ✓; «кукурузу не считал» — початок на другую чашу — весы не двигаются, писарь машет рукой, в книге «0»; «Пшеницу — туркам» — обоз
   с пшеницей уходит в арку к Стамбулу; «кашу — себе!» — крестьянин с початками подмигивает, в его чугунке пыхтит мамалыга. Переход В сцену: водопад монет. */
(() => {
  EV.su_ans = wtw('s7', 'Разгадка:');
  EV.su_sultan = wtw('s7', 'султан');
  EV.su_wheat = wtw('s7', 'пшеницей,');
  EV.su_corn = wtw('s7', 'кукурузу');
  EV.su_zero = wtw('s7', 'считал.');
  EV.su_go = wtw('s7', 'туркам,');
  EV.su_self = wtw('s7', 'себе!');
  SHAKES.push([EV.su_wheat + 0.15, 0.18, 9], [EV.su_sultan, 0.12, 6]);
  KEYW.push('Разгадка:', 'считал.', 'себе!');
  function city(t) {                                                      // Стамбул вдали: небо, Босфор с парусами, купола и минареты
    vgrad(-300, 600, ['#4ab0c8', '#a8e0e0', '#f4e8c0']); glow(300, 100, 300, 'rgba(255,240,190,1)', 0.5);
    const sw = rect(-300, 420, 1600, 300, { wash: '#2a8aa8', washA: 1, w: 1.4, col: '#0a3a5a' }); for (let i = 0; i < 20; i++) pencil([[-280 + i * 80 + ((t * 20) % 80), 450 + (i % 4) * 30], [-250 + i * 80 + ((t * 20) % 80), 446 + (i % 4) * 30]], { w: 2, col: '#e8f8fc', pass2: false });
    for (let i = 0; i < 3; i++) { const x = ((i * 300 + t * 30) % 1400) - 200; push(x, 470, 0.6); poly([[-40, 0], [40, 0], [30, 20], [-30, 20]], { wash: '#6a4424', washA: 1, w: 1 }); poly([[0, 0], [0, -80], [40, -10]], { wash: '#f4f0e4', washA: 1, w: 1 }); pop(); }
    for (const [x, r, h] of [[300, 120, 0], [620, 90, 30], [880, 70, 40]]) { rect(x - r, 420 - 100 + h, r * 2, 100, { wash: '#e8dcc4', washA: 1, w: 1.6, col: '#6a5a40' }); blob([[x - r, 320 + h], [x - r * 0.7, 320 + h - r * 0.7], [x, 320 + h - r], [x + r * 0.7, 320 + h - r * 0.7], [x + r, 320 + h]], { wash: '#a8b8b0', washA: 1, w: 1.6, col: '#4a5a50' }); pencil([[x, 320 + h - r], [x, 300 + h - r - 30]], { w: 3, col: '#c8a040', pass2: false });
      for (const sd of [-1, 1]) { rect(x + sd * (r + 30) - 8, 420 - 300 + h, 16, 300 - h, { wash: '#e8dcc4', washA: 1, w: 1.2, col: '#6a5a40' }); poly([[x + sd * (r + 30) - 10, 120 + h], [x + sd * (r + 30), 70 + h], [x + sd * (r + 30) + 10, 120 + h]], { wash: '#8a9a90', washA: 1, w: 1 }); } }
    for (let i = 0; i < 4; i++) { const q = (t * 0.08 + i * 0.25) % 1; pencil([[-100 + q * 1300, 100 + i * 30], [-90 + q * 1300, 92 + i * 30], [-80 + q * 1300, 100 + i * 30]], { w: 2, col: '#2a2a3a', pass2: false }); }
  }
  function court(t) {                                                     // стена с аркадами и изразцами, главная арка со Стамбулом, фонтан, кувшины, ковёр
    vgrad(-600, 1500, ['#e8d8b0', '#f4e8c8', '#e0d0a8']); const r = rng(19000); for (let i = 0; i < 30; i++) ell(-300 + r() * 1700, -400 + r() * 1600, 40 + r() * 60, 20, { wash: '#d8c498', washA: 0.25, line: false });
    for (let i = 0; i < 26; i++) for (let j = 0; j < 4; j++) { const x = -400 + i * 80, y = 760 + j * 80; rect(x, y, 80, 80, { wash: (i + j) % 2 ? '#2a8aa8' : '#f4f0e4', washA: 1, w: 1, col: '#1a4a5a' }); ell(x + 40, y + 40, 22, 22, { wash: (i + j) % 2 ? '#f4f0e4' : '#2a8aa8', washA: 1, w: 0.8, col: '#1a4a5a' }); poly([[x + 40, y + 24], [x + 52, y + 40], [x + 40, y + 56], [x + 28, y + 40]], { wash: '#c8221a', washA: 1, line: false }); }
    push(560, 0, 1); const ar = shape(spline([[-330, 760], [-330, 200], [-250, -60], [0, -200], [250, -60], [330, 200], [330, 760]], false, 10).concat([[330, 760], [-330, 760]]), { wash: '#a8e0e0', washA: 1, w: 6, col: '#6a4424', key: 19001 }); ctx.save(); ctx.clip(ar.path); push(-560, 0, 1); city(t); pop(); ctx.restore();
    for (let k = 0; k < 2; k++) pencil(spline([[-350 - k * 26, 760], [-350 - k * 26, 200], [-268 - k * 20, -76 - k * 20], [0, -224 - k * 26], [268 + k * 20, -76 - k * 20], [350 + k * 26, 200], [350 + k * 26, 760]], false, 10), { w: 14, col: k ? '#2a8aa8' : '#c8a040' }); pop();
    for (const x of [-180, 1300]) { push(x, 0, 0.8); const sa = shape(spline([[-200, 900], [-200, 300], [-140, 100], [0, 20], [140, 100], [200, 300], [200, 900]], false, 8), { wash: '#4a3a2a', washA: 1, w: 4, col: '#2a1408' }); pencil(spline([[-220, 900], [-220, 300], [-150, 80], [0, 0], [150, 80], [220, 300], [220, 900]], false, 8), { w: 12, col: '#c8a040' }); push(0, 420, 1); pencil([[0, -260], [0, -40]], { w: 2, col: '#1a1a1a', pass2: false }); blob([[-40, -40], [40, -40], [30, 60], [-30, 60]], { wash: '#c8a040', washA: 1, w: 1.6 }); glow(0, 20, 160, 'rgba(255,200,100,1)', 0.45); pop(); pop(); }
    txt('ДИВАН ПОДАТЕЙ', 560, -280, 44, { font: 'Osw', col: '#7a2a14' });
  }
  function crowd(t) {                                                     // писарь-сборщик, янычар, обоз с пшеницей и верблюдом, крестьянин с початками
    const go = t > EV.su_go ? sm(clamp((t - EV.su_go) / 1.6)) : 0;
    push(lerp(-80, 420, go), 1300 - go * 120, 1 - go * 0.4); const cm = blob([[-200, -140], [-200, -220], [-150, -280], [-110, -230], [-80, -300], [-30, -240], [60, -230], [110, -270], [150, -320], [180, -300], [160, -240], [120, -200], [100, -140], [-180, -130]], { wash: '#c8a070', washA: 1, w: 2.2, col: '#4a3010', key: 19010 }); shadeG(cm.path, 0, -130, 0, -300, '#8a6a3a', 0.4);
    for (const lx of [-170, -130, 60, 100]) pencil([[lx, -140], [lx + Math.sin(t * 6 + lx) * 12, 0]], { w: 10, col: '#a8844a' }); for (let i = 0; i < 3; i++) grainSack(-150 + i * 80, -250, 0.45, { key: 19011 + i, grain: 'w', rot: (i - 1) * 0.2 }); rect(-200, -270, 340, 30, { wash: '#a8221a', washA: 1, w: 1.4 }); pop();
    if (go > 0.2) { push(560, 640, popK(t, EV.su_go + 0.3, 0.4) * 0.8); rect(-130, -36, 260, 72, { wash: '#7a4a24', washA: 1, w: 3, col: '#2a1408' }); txt('→ СТАМБУЛ', 0, 14, 40, { font: 'Osw', col: '#f4e0a0' }); pop(); }
    human(1060, 1300, 1.15, t, { body: '#2a5a8a', legs: '#c8221a', hair: '#1a1a1a', face: t > EV.su_corn && t < EV.su_go ? 'grin' : 'calm', armL: 'hold', armR: t > EV.su_zero && t < EV.su_go ? 'wave' : 'hold', look: -0.6, seed: 19020, flip: -1, beard: 'long', belt: '#e8b030' }); turban20(1060, 1300, 1.15, '#f4efe2', -1);
    push(980, 1060, 1, -0.1); rect(-60, -80, 120, 160, { wash: '#6a1a1a', washA: 1, w: 2, col: '#2a0404' }); rect(-52, -72, 104, 144, { wash: '#efe0b8', washA: 1, w: 1 }); pencil(spline([[-30, -40], [-10, -60], [10, -30], [30, -56]], false, 6), { w: 2.4, col: '#1a3a7a', pass2: false }); pop();
    human(1240, 1310, 1.12, t, { body: '#a8221a', legs: '#f4f0e4', hair: '#1a1a1a', face: 'calm', armL: 'hold', armR: 'down', look: -0.4, seed: 19021, flip: -1, prop: 'spear' }); turban20(1240, 1310, 1.12, '#f4f0e4', -1, 1); stache(1240, 1310, 1.12, -1);
    const run = t > EV.su_self ? sm(clamp((t - EV.su_self) / 0.6)) : 0; human(lerp(-60, -280, run), 1310, 1.08, t, { body: '#f4f0e4', legs: '#3a2a1a', hair: '#5a3a1a', face: t > EV.su_self ? 'grin' : t > EV.su_corn ? 'smile' : 'calm', armL: 'hold', armR: t > EV.su_self ? 'up' : 'hold', look: 0.6, seed: 19022, belt: '#c8221a', hat: 'fur', hatCol: '#1a1a1a' }); stache(lerp(-60, -280, run), 1310, 1.08);
    for (let i = 0; i < 3; i++) cornCob(lerp(-60, -280, run) - 70 + i * 16, 1100 - i * 10, 0.36, -0.6 + i * 0.3, { key: 19023 + i, husk: 0.7, silk: false });
    if (t > EV.su_self) { ceaun(lerp(80, -140, run), 1230, 0.42, t, { fill: 'y', key: 19026, bail: true }); bubbleTag('КАШУ — СЕБЕ!', 120, 960, t, EV.su_self, '#3a5a1a', 40, -0.06); }
  }
  function table(t) {                                                     // стол писаря: весы (герой), мешки, реестр с тугрой, монеты, чернильница, кукуруза
    const tb = rect(-400, 1440, 1900, 700, { wash: '#7a3a24', washA: 1, w: 3, col: '#2a0a04', key: 19030 }); for (let i = 0; i < 20; i++) for (let j = 0; j < 4; j++) poly([[-380 + i * 100, 1500 + j * 120], [-330 + i * 100, 1460 + j * 120], [-280 + i * 100, 1500 + j * 120], [-330 + i * 100, 1540 + j * 120]], { wash: (i + j) % 2 ? '#c8a040' : '#2a5a8a', washA: 0.8, w: 1, col: '#2a0a04' }); shadeG(tb.path, 540, 2000, 540, 1440, '#2a0a04', 0.4);
    const wh = t > EV.su_wheat ? sm(clamp((t - EV.su_wheat) / 0.3)) : 0, cr = t > EV.su_corn + 0.2 ? 1 : 0, tilt = -0.22 * wh + (cr && t < EV.su_zero ? Math.sin(t * 30) * 0.01 : 0);
    balance(330, 1470, 0.75, t, tilt, (px, py) => { if (wh > 0) grainSack(px, py + 10 - (1 - wh) * 400, 0.55, { key: 19031, grain: 'w', label: 'BUĞDAY', lsize: 22 }); }, (px, py) => { if (cr) cornCob(px, py - 20, 0.42, 1.4, { key: 19032, husk: 0.5, silk: false }); });
    push(800, 1530, 1, 0.04); const bk = rect(-170, -70, 340, 140, { wash: '#efe0b8', washA: 1, w: 2.4, col: '#5a4030', key: 19033 }); rect(-180, -78, 360, 156, { line: true, w: 6, col: '#6a1a1a' }); pencil([[0, -70], [0, 70]], { w: 3, col: '#8a6a4a', pass2: false });
    txt('ПШЕНИЦА', -86, -36, 24, { font: 'Osw', col: '#3a2a1a' }); txt('КУКУРУЗА', 86, -36, 24, { font: 'Osw', col: '#3a2a1a' });
    if (wh > 0.5) for (let i = 0; i < 3; i++) pencil([[-130 + i * 34, 14], [-120 + i * 34, 26], [-104 + i * 34, 0]], { w: 4, col: '#2a6a2a', pass2: false }); if (t > EV.su_zero) { push(86, 20, popK(t, EV.su_zero, 0.35)); txt('0', 0, 10, 60, { font: 'Osw', col: '#c8221a' }); pop(); }
    if (t > EV.su_sultan) { push(-86, 40, popK(t, EV.su_sultan, 0.3), -0.1); pencil(spline([[-50, 10], [-30, -30], [-10, 10], [10, -40], [30, 10], [40, -20], [60, 0]], false, 8), { w: 4, col: '#1a3a7a', pass2: false }); ell(-10, 4, 46, 14, { line: true, w: 2.4, col: '#1a3a7a' }); pop(); } pop();
    for (let i = 0; i < 9; i++) { push(1000 + (i % 3) * 40, 1560 - Math.floor(i / 3) * 12, 1); ell(0, 0, 24, 8, { wash: '#e8c050', washA: 1, w: 1.4, col: '#6a4a08' }); pop(); } push(60, 1560, 1); ell(0, 0, 40, 14, { wash: '#1a1a2a', washA: 1, w: 1.6 }); pencil([[0, -4], [30, -90]], { w: 3, col: '#f4f0e4', pass2: false }); pop();
    if (t > EV.su_ans && t < EV.su_ans + 0.7) { const q = (t - EV.su_ans) / 0.7; glow(560, 1000, 700 * q, 'rgba(255,220,120,1)', 0.6 * (1 - q)); push(560, 900, 1 + q, q * 2); poly([[0, -80], [20, -24], [80, -24], [32, 10], [50, 70], [0, 34], [-50, 70], [-32, 10], [-80, -24], [-20, -24]], { wash: '#ffd040', washA: 1 - q, w: 3, col: '#a87808' }); pop(); }
  }
  function front(t) { push(-60, 1960, 1.6); const jg = blob([[-60, 0], [-70, -120], [-40, -200], [-30, -280], [30, -280], [40, -200], [70, -120], [60, 0]], { wash: '#c8783a', washA: 1, w: 2.4, col: '#3a1a08' }); metalG(jg.path, -20, -140, 160, '#ffd8a0', '#c8783a', '#5a2a10'); pop();
    push(1180, 600, 1.4); for (let i = 0; i < 5; i++) { blob([[0, i * 120], [-60, i * 120 + 50], [-30, i * 120 + 110], [30, i * 120 + 110], [60, i * 120 + 50]], { wash: i % 2 ? '#2a8aa8' : '#c8221a', washA: 0.9, w: 1.4, col: '#1a1a1a' }); } pop();
    motes(24, [-100, 300, 1200, 1500], '#ffe8a0', t, 19040, { sp: 8, sz: 3, a: 0.45, wob: 3 }); haze('#f4e0b0', 0.04); }
  WORLD.sultan = (t, u, cat) => {
    lay(14, () => { court(t); haze('#f4e8c8', 0.05); }); lay(3.2, () => { crowd(t); });
    lay(1, () => { cat(); }); lay(0.94, () => { table(t); }); lay(0.6, () => { front(t); });
  };
  DIR.sultan = {
    outfit: 'ottomanA', light: { side: 1, rim: '#fff0c0' }, grade: ['#e8c070', 0.08],
    act: () => [[S0.sultan, 'proud'], [EV.su_sultan, 'smug'], [EV.su_wheat, 'talk'], [EV.su_corn, 'sideeye'], [EV.su_zero, 'laugh'], [EV.su_go, 'proud'], [EV.su_self, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1600, s: 1.18, flip: 1, look: t > EV.su_self ? [-0.8, 0.1] : t > EV.su_go ? [-0.4, -0.5] : t > EV.su_wheat ? [-0.7, 0.5] : [0, 0], hand: t > EV.su_zero && t < EV.su_go ? [200, -380] : [160, -260], handF: t > EV.su_self ? [-200, -320] : [-80, -220], point: t > EV.su_self ? 1 : undefined, prop: 'quillP', propAng: 0.3, tailUp: t > EV.su_self }),
    cam: () => [[S0.sultan, 560, 1000, 0.18], [EV.su_ans + 0.3, 560, 1180, 0.26, 'x'], [EV.su_wheat, 460, 1250, 0.28], [EV.su_zero, 560, 1240, 0.28], [EV.su_go, 560, 1000, 0.2], [EV.su_self, 360, 1200, 0.26], [S1.sultan, 400, 1200, 0.28]]
  };
  // ---------------------------------------------------------------- переход: водопад золотых монет
  TRANS_IN.sultan = { a: 0.3, b: 0.4, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k); drawBuf(A, 1, 540, 960); const edge = lerp(-200, 2200, e); ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, Math.max(0, edge - 200)); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore();
    scr(() => { const r = rng(19050); for (let i = 0; i < 70; i++) { const x = r() * 1080, y = edge - 300 + r() * 400 + Math.sin(i) * 60, rr = r() * 6; push(x, y, 1, rr + t * 6); ell(0, 0, 34, 12 + Math.abs(Math.sin(rr + t * 8)) * 22, { wash: '#e8c050', washA: 1, w: 2, col: '#6a4a08' }); pop(); } });
  } };
})();
