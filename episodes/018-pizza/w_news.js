/* 018 — `news`: «Так была ли королева в пиццерии? Улика первая: газеты того лета молчат.» Неаполь, июнь 1889, вечер: газетный киоск под чугунным
   газовым фонарём у входа в стеклянную галерею (железные арки, купол, синие сумерки); киоск в афишах, стопки газет CORRIERE DI NAPOLI, IL PUNGOLO,
   ROMA на прилавке и прищепках, мальчишка-газетчик с сумкой, господа в котелках читают, дама с зонтиком, извозчик. Главный свет — газовый фонарь
   (тёплый круг на брусчатке), второй — холодные сумерки. Том-сыщик в клетчатом пальто и кепке с лупой листает газеты.
   По словам: «Так была ли королева в пиццерии?» — пузырь-мысль: корона + пицца и большой «?»; «Улика первая:» — бирка «УЛИКА №1» на верёвочке;
   «газеты» — газеты веером взлетают с прилавка; «молчат.» — под лупой пустая колонка с «?», газетчик прикладывает палец к губам, стрекочут сверчки.
   Переход В сцену: газета, крутясь, влетает из глубины и заполняет кадр. */
(() => {
  EV.nw_q = wtw('s4', 'пиццерии?');
  EV.nw_clue = wtw('s4', 'Улика');
  EV.nw_papers = wtw('s4', 'газеты');
  EV.nw_silent = wtw('s4', 'молчат.');
  SHAKES.push([EV.nw_clue, 0.12, 5]);
  KEYW.push('Улика', 'молчат.');

  function gallery(t) {                                                 // сумеречное небо, фасады, стеклянная галерея с куполом
    vgrad(-800, 800, ['#1a2448', '#3a4a7a', '#7a7aa0']); for (let i = 0; i < 20; i++) { const r = rng(18600 + i); ell(-600 + r() * 2200, -760 + r() * 400, 2, 2, { wash: '#ffffff', washA: 0.4 + 0.4 * Math.sin(t * 2 + i), line: false }); }
    for (const [x, w, c] of [[-700, 520, '#c8a888'], [1200, 520, '#b89878']]) { rect(x, -500, w, 1900, { wash: c, washA: 1, w: 2, col: '#3a2a1a' }); for (let j = 0; j < 6; j++) for (let i = 0; i < 3; i++) { const wx = x + 60 + i * 150, wy = -420 + j * 220; rect(wx, wy, 80, 140, { wash: (i + j) % 3 ? '#ffd890' : '#2a2a3a', washA: 1, w: 1.6, col: '#3a2a1a' }); poly([[wx - 10, wy], [wx + 40, wy - 30], [wx + 90, wy]], { wash: c, washA: 1, w: 1.4, col: '#3a2a1a' }); } }
    push(540, 260, 1); const ar = shape(spline([[-380, 900], [-380, 0], [-260, -260], [0, -360], [260, -260], [380, 0], [380, 900]], false, 10), { wash: '#2a3050', washA: 1, w: 6, col: '#2a2a2a', key: 18610 });
    ctx.save(); ctx.clip(ar.path); for (let i = 0; i < 12; i++) pencil(spline([[-380 + i * 70, 900], [-380 + i * 70, 0], [0, -360]], false, 8), { w: 2.4, col: '#5a6a8a', a: 0.6, pass2: false }); for (let j = 0; j < 8; j++) pencil([[-380, -200 + j * 120], [380, -200 + j * 120]], { w: 2, col: '#5a6a8a', a: 0.5, pass2: false });
    for (let i = 0; i < 6; i++) { const lx = -300 + i * 120; ell(lx, 300, 16, 16, { wash: '#ffd890', washA: 1, line: false }); } glow(0, 300, 380, 'rgba(255,210,140,1)', 0.25);
    for (let i = 0; i < 6; i++) { const px = ((t * 25 + i * 140) % 760) - 380; sil([[px - 14, 900], [px - 16, 760], [px, 740], [px + 16, 760], [px + 14, 900]], '#1a1a2a', 0.8); } ctx.restore();
    pencil(spline([[-380, 900], [-380, 0], [-260, -260], [0, -360], [260, -260], [380, 0], [380, 900]], false, 10), { w: 14, col: '#c8b088' }); txt('GALLERIA', 0, -220, 40, { font: 'Osw', col: '#3a2a1a' }); pop();
  }
  function kiosk(t) {                                                   // киоск с афишами, газеты на прищепках, газетчик
    push(-60, 1300, 1); const b = rect(-260, -560, 520, 560, { wash: '#2a5a4a', washA: 1, w: 3, col: '#0a2a1a', key: 18620 }); shadeG(b.path, 260, 0, -260, 0, '#0a1a14', 0.5);
    poly([[-320, -560], [320, -560], [260, -680], [-260, -680]], { wash: '#1a3a2a', washA: 1, w: 3, col: '#0a1a14' }); ell(0, -700, 40, 30, { wash: '#1a3a2a', washA: 1, w: 2 }); txt('GIORNALI', 0, -600, 36, { font: 'Osw', col: '#e8c060' });
    for (const [i, nm] of ['ROMA', 'IL PUNGOLO', 'CORRIERE'].entries()) { const sw = Math.sin(t * 2 + i) * 0.04; push(-170 + i * 170, -520, 1, sw); pencil([[0, -10], [0, 10]], { w: 3, col: '#c8a050', pass2: false }); rect(-70, 10, 140, 190, { wash: '#efe6cc', washA: 1, w: 1.6, col: '#5a5040' }); txt(nm, 0, 40, nm.length > 6 ? 16 : 24, { font: 'Osw', col: '#1a1a1a' }); for (let q = 0; q < 6; q++) pencil([[-56, 60 + q * 20], [56 - (q % 3) * 14, 60 + q * 20]], { w: 2, col: '#6a6458', a: 0.6, pass2: false }); pop(); }
    for (const [ax, c] of [[-230, '#c8343a'], [210, '#e8b040']]) { rect(ax - 24, -300, 48, 200, { wash: c, washA: 1, w: 1.6, col: '#3a1a08' }); txt('★', ax, -180, 30, { col: '#f8f4ea' }); }
    rect(-280, -120, 560, 40, { wash: '#6a4424', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) rect(-260 + i * 130, -150 - j * 10, 120, 30, { wash: j % 2 ? '#efe6cc' : '#e4dabe', washA: 1, w: 1, col: '#8a7a5a' }); pop();
    const hush = t > EV.nw_silent; human(330, 1320, 0.95, t, { body: '#6a5a4a', legs: '#3a3a3a', hair: '#3a2a1a', face: hush ? 'calm' : 'grin', armL: hush ? 'up' : 'wave', armR: 'hold', look: hush ? 0.3 : -0.3, seed: 18621, hat: 'cap', hatCol: '#3a3a4a' }); push(330, 1320, 0.95); rect(30, -200, 60, 80, { wash: '#8a6a4a', washA: 1, w: 1.6 }); rect(40, -220, 50, 30, { wash: '#efe6cc', washA: 1, w: 1 }); if (hush) pencil([[-6, -300], [-6, -268]], { w: 6, col: '#e2b48e', pass2: false }); pop();
    if (!hush && t > S0.news + 0.2) { const k = (t * 1.5) % 1; txt('EXTRA!', 330, 900 - k * 30, 34, { font: 'Hand', col: '#ffe090', a: 1 - k }); }
  }
  function people(t) {                                                  // господа в котелках, дама с зонтиком, извозчик с лошадью
    for (const [x, sd, fl] of [[760, 18630, -1], [930, 18631, -1]]) { human(x, 1260, 0.95, t, { body: sd % 2 ? '#2a2a3a' : '#4a3a2a', legs: '#1a1a1a', hair: '#3a2a1a', face: t > EV.nw_silent ? 'shock' : 'calm', armL: 'hold', armR: 'hold', look: -0.5, seed: sd, flip: fl, beard: sd % 2 ? 'short' : null }); hat20(x, 1260, 0.95, 'fedora', '#1a1a1a', fl); newspaper(x - 60, 1260 - 180, 0.22, 0.1, 'ROMA', { key: sd + 5 }); }
    human(1080, 1250, 0.95, t, { body: '#8a3a5a', legs: '#8a3a5a', hair: '#c8a060', face: 'smile', armL: 'hold', armR: 'up', look: -0.6, seed: 18632, flip: -1, long: 1 }); push(1100, 1250 - 330, 1); poly([[-90, 0], [0, -60], [90, 0]], { wash: '#e8c8d8', washA: 1, w: 1.6, col: '#5a3a4a' }); pencil([[0, -60], [0, 110]], { w: 3, col: '#3a2a2a', pass2: false }); pop();
    push(-520, 1240, 0.9); blob([[-200, -120], [-210, -220], [60, -240], [120, -200], [130, -120]], { wash: '#5a3a2a', washA: 1, w: 2, col: '#1a0a04' }); blob([[110, -230], [170, -330], [220, -320], [200, -230]], { wash: '#5a3a2a', washA: 1, w: 2, col: '#1a0a04' }); for (const lx of [-180, -130, 60, 110]) pencil([[lx, -120], [lx + Math.sin(t * 4 + lx) * 6, 0]], { w: 10, col: '#4a2a1a' }); pop();
  }
  function lamp(t) {                                                    // газовый фонарь — главный свет
    push(520, 1300, 1); pencil([[0, 0], [0, -700]], { w: 16, col: '#1a1a1a' }); for (let i = 0; i < 3; i++) ell(0, -100 - i * 200, 20, 10, { wash: '#2a2a2a', washA: 1, w: 1.4 }); pencil(spline([[0, -700], [60, -760], [120, -720]], false, 5), { w: 8, col: '#1a1a1a' });
    push(120, -700, 1); poly([[-40, 0], [40, 0], [56, 90], [-56, 90]], { wash: '#ffe8a0', washA: 0.9, w: 3, col: '#1a1a1a' }); poly([[-60, 0], [60, 0], [0, -40]], { wash: '#1a1a1a', washA: 1, w: 2 }); const f = 0.9 + Math.sin(t * 11) * 0.05; glow(0, 50, 220 * f, 'rgba(255,214,140,1)', 0.45); glow(0, 50, 60, 'rgba(255,250,220,1)', 0.6); pop(); pop();
  }
  function ground(t) {                                                  // брусчатка, прилавок перед Томом с газетами, бирка улики, мысль, пустая колонка
    const f = rect(-800, 1300, 2700, 900, { wash: '#3a3a48', washA: 1, w: 2, col: '#0a0a14', key: 18640 }); for (let i = 0; i < 26; i++) for (let j = 0; j < 7; j++) ell(-780 + i * 100 + (j % 2) * 50, 1320 + j * 80, 46, 30, { wash: (i + j) % 3 ? '#4a4a58' : '#3a3a46', washA: 0.9, w: 1, col: '#1a1a24' });
    lightPool(640, 1460, 520, 170, 'rgba(255,200,120,1)', 0.45); castShadow(700, 1600, 260, 240, 0.5, 0.3); castShadow(330, 1320, 90, 160, -0.6, 0.25);
    const tb = rect(-120, 1440, 560, 240, { wash: '#6a4424', washA: 1, w: 2.4, col: '#2a1408', key: 18641 }); shadeG(tb.path, 0, 1680, 0, 1440, '#2a1408', 0.4);
    for (let i = 0; i < 5; i++) { const fly = t > EV.nw_papers ? sm(clamp((t - EV.nw_papers - i * 0.06) / 0.5)) : 0; newspaper(40 + i * 90 + fly * (i - 2) * 140, 1420 - fly * (260 + i * 40), 0.32, -0.3 + i * 0.15 + fly * (i - 2) * 0.4, ['CORRIERE', 'IL PUNGOLO', 'ROMA', 'CORRIERE', 'IL PUNGOLO'][i], { key: 18642 + i, blank: i === 2 && t > EV.nw_silent ? 1 : 0 }); }
  }
  function overlays(t) {
    if (t > EV.nw_q - 0.4 && t < EV.nw_clue) { const k = popK(t, EV.nw_q - 0.4, 0.4); push(340, 820, k); for (let i = 0; i < 3; i++) ell(220 - i * 40, 160 + i * 40, 16 - i * 4, 14 - i * 4, { wash: '#f8f4ea', washA: 1, w: 2 }); const c = blob([[-200, -110], [0, -150], [200, -110], [230, 20], [120, 110], [-120, 110], [-230, 20]], { wash: '#f8f4ea', washA: 1, w: 2.6, col: '#2a2a2a' });
      push(-90, 10, 1); poly([[-40, 20], [-44, -20], [-20, 0], [0, -34], [20, 0], [44, -20], [40, 20]], { wash: '#d6a842', washA: 1, w: 2, col: '#5a3a08' }); pop(); txt('+', 0, 30, 50, { font: 'Osw', col: '#2a2a2a' }); margherita(100, 10, 0.18, t, { tilt: 0.7, key: 18650 }); txt('?', 180, -50, 70, { font: 'Osw', col: '#c8221a' }); pop(); }
    if (t > EV.nw_clue) { const k = popK(t, EV.nw_clue, 0.4), sw = Math.sin(t * 3) * 0.06; push(640, 780, k, sw); pencil([[0, -120], [0, -40]], { w: 2, col: '#6a5a3a', pass2: false }); const tg = poly([[-150, -40], [150, -40], [180, 20], [150, 80], [-150, 80]], { wash: '#f4e4b0', washA: 1, w: 2.4, col: '#6a4a10' }); ell(140, 20, 10, 10, { wash: '#3a2a1a', washA: 1, line: false }); txt('УЛИКА №1', -10, 40, 44, { font: 'Osw', col: '#8a1a0e' }); pop(); }
    if (t > EV.nw_silent) { for (let i = 0; i < 2; i++) { const k = (t * 2 + i * 0.5) % 1; txt('цвирк', 860 + i * 70, 1250 - k * 40, 26, { font: 'Hand', col: '#c8d8a0', a: 1 - k }); } }
  }
  function front(t) { push(-140, 2000, 1.6); rect(-200, -260, 400, 260, { wash: '#2a1a10', washA: 1, w: 2.4 }); for (let i = 0; i < 3; i++) rect(-180, -300 - i * 26, 360, 26, { wash: i % 2 ? '#efe6cc' : '#e4dabe', washA: 1, w: 1.2, col: '#8a7a5a' }); pop();
    push(1250, -200, 1.5); pencil([[-300, -400], [100, 300]], { w: 18, col: '#1a1a1a' }); for (let i = 0; i < 8; i++) pencil(spline([[-260 + i * 50, -330 + i * 80], [-240 + i * 50, -300 + i * 80], [-280 + i * 50, -270 + i * 80]], false, 4), { w: 6, col: '#1a1a1a', pass2: false }); pop(); }
  WORLD.news = (t, u, cat) => {
    lay(12, () => { gallery(t); haze('#8a90b8', 0.08); });
    lay(2.6, () => { kiosk(t); people(t); });
    lay(1.8, () => { lamp(t); });
    lay(1, () => { ground(t); cat(); overlays(t); });
    lay(0.6, () => { front(t); motes(14, [-200, 400, 1300, 1400], '#ffe0a0', t, 18660, { sp: 4, sz: 3, a: 0.4, wob: 4 }); moodDark(640, 1000, 500, 1400, '#0a0a20', 0.55); });
  };
  DIR.news = {
    outfit: 'sleuth', light: { side: -1, rim: '#ffd090' }, grade: ['#6a7ab0', 0.08],
    act: () => [[S0.news, 'suspicious'], [EV.nw_q, 'sideeye'], [EV.nw_clue, 'smug'], [EV.nw_papers, 'awe'], [EV.nw_silent, 'suspicious']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1600, s: 1.15, flip: 1, look: t < EV.nw_clue ? [-0.5, -0.6] : t < EV.nw_papers ? [0.2, -0.8] : [-0.6, 0.6], hand: t > EV.nw_papers ? [200, -250] : [180, -330], handF: [-100, -220], prop: 'magnP', propAng: t > EV.nw_papers ? 0.8 : 0.2, squint: t > EV.nw_silent }),
    cam: () => [[S0.news, 540, 800, 0.22], [EV.nw_q, 520, 1000, 0.26, 'x'], [EV.nw_clue, 600, 1050, 0.28], [EV.nw_papers, 500, 1150, 0.26], [EV.nw_silent, 520, 1260, 0.34], [S1.news, 540, 1260, 0.36]]
  };
  // ---------------------------------------------------------------- переход: газета, крутясь, влетает из глубины
  TRANS_IN.news = { a: 0.15, b: 0.55, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k); if (e < 0.75) { drawBuf(A, 1, 540, 960); const s = lerp(0.05, 2.6, e / 0.75), rot = (1 - e / 0.75) * 12; scr(() => newspaper(540, 960, s, rot, 'CORRIERE', { key: 18670, date: 'Giugno 1889' })); }
    else { const q = (e - 0.75) / 0.25; drawBuf(B, 1, 540, 960); scr(() => newspaper(540 + q * 300, 960 - sm(q) * 2600, 2.6, q * 0.5, 'CORRIERE', { key: 18670 })); }
  } };
})();
