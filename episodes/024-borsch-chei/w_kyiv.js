/* 024 — `kyiv` (1584): «XVI век, Киев. Немецкий купец: «Борщ тут не покупают — каждый варит свой!»» + пауза-гэг.
   Октябрьский закат 1584 под Киевом: зелено-золотые холмы, на дальнем холме — золотые главки церквей и деревянные стены, речка в камышах с мостком,
   хаты-мазанки с соломенными крышами, и в КАЖДОМ дворе свой котелок на треноге (огонь, пар), хозяйки помешивают. Обоз немецкого купца:
   крытая повозка с бочками и тюками, лошадь, фонарь. Том — немецкий купец (зелёный камзол + берет) за прилавком-доской с котлом и вывеской «БОРЩ · 1 ГРОШ».
   По словам: «XVI век,» — зажигается фонарь; «Киев.» — главки на холме вспыхивают закатом; «купец:» — Том пишет в дневнике пером, строчки бегут;
   «покупают» — прохожие машут руками «нет», вывеска перечёркнута; «каждый» — во дворах один за другим вспыхивают костры под котелками;
   пауза-гэг — Том пожимает плечами и сам ест свой борщ. Главный свет — закатное солнце справа; второй — фонарь над прилавком.
   Переход В сцену — зонтик борщевика рассыпается семенами-«снежинками», они кружат и оседают страницей дневника. */
(() => {
  EV.ky_lamp = wtw('s3', 'XVI');
  EV.ky_kyiv = wtw('s3', 'Киев.');
  EV.ky_write = wtw('s3', 'Немецкий');
  EV.ky_no = wtw('s3', 'покупают');
  EV.ky_each = wtw('s3', 'каждый');
  EV.ky_gag = LE('s3') + 0.05;
  SHAKES.push([EV.ky_no + 0.05, 0.12, 4]);
  KEYW.push('свой!»', 'покупают');
  const SUN = [1100, 820];
  function sky(t) {                                                      // закатное небо: синь → сирень → оранжевый, солнце, вороны
    vgrad(-800, 1300, ['#2a3a6a', '#6a5a8a', '#d8806a', '#f4b060', '#ffd890']);
    glow(SUN[0], SUN[1], 340, 'rgba(255,190,110,1)', 0.35); ell(SUN[0], SUN[1], 90, 90, { wash: '#fff0b0', washA: 1, line: false });
    for (let i = 0; i < 5; i++) { const x = ((i * 420 + t * 6) % 2300) - 600, y = -260 + (i % 3) * 130; blob([[x, y], [x + 200, y - 30], [x + 420, y], [x + 260, y + 30], [x + 60, y + 24]], { wash: i % 2 ? '#e88a7a' : '#b87a9a', washA: 0.7, line: false }); pencil([[x + 40, y + 20], [x + 380, y + 10]], { w: 3, col: '#ffc890', a: 0.5, pass2: false }); }
    for (let i = 0; i < 7; i++) { const k = (t * 0.04 + i * 0.13) % 1, x = -200 + k * 1500, y = 120 + Math.sin(k * 7 + i) * 50 + i * 20; pencil([[x - 16, y], [x, y - 10], [x + 16, y]], { w: 3, col: '#1a1420', pass2: false }); }
  }
  function hills(t) {                                                    // дальний холм: деревянные стены, главки церквей (вспыхивают на «Киев.»), посад; река
    const glint = t > EV.ky_kyiv - 0.05 ? clamp(1 - (t - EV.ky_kyiv) / 1.6) : 0;
    sil([[-800, 980], [-300, 760], [200, 720], [700, 760], [1100, 840], [1900, 900], [1900, 1300], [-800, 1300]], '#5a6a5a', 0.95);
    for (let i = 0; i < 26; i++) { const x = -200 + i * 40; rect(x, 720 + Math.abs(i - 13) * 4 - 40, 36, 44, { wash: '#6a4a3a', washA: 1, w: 1, col: '#2a1a14' }); poly([[x, 720 + Math.abs(i - 13) * 4 - 40], [x + 18, 700 + Math.abs(i - 13) * 4 - 40], [x + 36, 720 + Math.abs(i - 13) * 4 - 40]], { wash: '#4a3a2a', washA: 1, line: false }); }
    push(380, 700, 0.45); ctx.translate(-380, -700); for (const [x, h, n] of [[150, 160, 3], [420, 200, 5], [700, 140, 1]]) { rect(x - 50, 700 - h, 100, h, { wash: '#f4ecdc', washA: 1, w: 1.6, col: '#4a3a2a' }); for (let q = 0; q < n; q++) { const dx = n === 1 ? 0 : (q - (n - 1) / 2) * 36, dh = q === Math.floor(n / 2) ? 60 : 30; rect(x + dx - 12, 700 - h - dh, 24, dh, { wash: '#f4ecdc', washA: 1, w: 1.2, col: '#4a3a2a' });
      const d = blob([[x + dx - 22, 700 - h - dh], [x + dx - 18, 700 - h - dh - 36], [x + dx, 700 - h - dh - 56], [x + dx + 18, 700 - h - dh - 36], [x + dx + 22, 700 - h - dh]], { wash: '#e8b030', washA: 1, w: 1.4, col: '#6a4a08' }); shadeG(d.path, x + dx - 20, 0, x + dx + 20, 0, '#fff4b0', 0.5 + glint * 0.5);
      pencil([[x + dx, 700 - h - dh - 56], [x + dx, 700 - h - dh - 90]], { w: 2.4, col: '#e8b030', pass2: false }); pencil([[x + dx - 10, 700 - h - dh - 78], [x + dx + 10, 700 - h - dh - 78]], { w: 2.4, col: '#e8b030', pass2: false }); if (glint > 0) glow(x + dx, 700 - h - dh - 30, 50, 'rgba(255,230,140,1)', 0.35 * glint); } } pop();
    for (let i = 0; i < 12; i++) khata(-600 + i * 130 + (i % 2) * 40, 900 + (i % 3) * 14, 0.32, t, { key: 24310 + i, smoke: i % 3 === 0, lit: i % 2 });
    const rv = blob([[-800, 1060], [-200, 1040], [300, 1080], [900, 1050], [1900, 1080], [1900, 1130], [900, 1110], [300, 1140], [-200, 1100], [-800, 1120]], { wash: '#8a9ab8', washA: 1, line: false, key: 24330 }); shadeG(rv.path, SUN[0], 0, 0, 0, '#ffc880', 0.5);
    for (let i = 0; i < 10; i++) pencil([[-600 + i * 220 + (t * 16) % 220, 1090], [-540 + i * 220 + (t * 16) % 220, 1090]], { w: 3, col: '#ffe0b0', a: 0.6, pass2: false });
    for (let i = 0; i < 30; i++) pencil([[-700 + i * 50, 1120], [-696 + i * 50 + Math.sin(t + i) * 4, 1060]], { w: 3, col: '#5a6a3a', pass2: false });
    haze('#ffc8a0', 0.1);
  }
  function yards(t) {                                                    // ближние хаты: в каждом дворе свой котелок, хозяйки помешивают (вспыхивают на «каждый»)
    vgrad(1100, 1500, ['#8a8a4a', '#7a7a3a', '#6a6a30']);
    khata(-120, 1240, 0.95, t, { key: 24340, lit: 1, sun: '#ffb070' }); khata(1180, 1250, 0.9, t, { key: 24341, lit: 1, sun: '#ffb070' });
    for (let i = 0; i < 14; i++) { const x = 140 + i * 30; pencil([[x, 1330], [x + 3, 1240]], { w: 5, col: '#6a4a2a', pass2: false }); } for (let k = 0; k < 3; k++) pencil(spline([[130, 1270 + k * 22], [300, 1280 + k * 22], [560, 1268 + k * 22]], false, 6), { w: 4, col: '#8a6a3a', pass2: false });
    const pots = [[200, 1380], [520, 1360], [860, 1370], [1060, 1390], [-30, 1400]];
    pots.forEach(([x, y], i) => { const on = t > EV.ky_each + i * 0.18; if (on) tripodPot(x, y, 0.75, t, { col: '#a8142a' }); else { push(x, y, 0.75); for (const sd of [-1, 1]) pencil([[sd * 70, 0], [0, -170]], { w: 6, col: '#3a2a1a', pass2: false }); pop(); }
      if (on && t < EV.ky_each + i * 0.18 + 0.6) bubbleTag('свой', x, y - 220, t, EV.ky_each + i * 0.18, '#c8202a', 26, (i % 2 ? 0.1 : -0.1)); });
    human(280, 1390, 0.85, t, { body: '#f4ecd8', trim: '#c8202a', legs: '#7a2a2a', long: 1, hat: 'scarf', hatCol: '#c8202a', armL: 'hold', armR: t > EV.ky_each ? 'swing' : 'down', face: 'smile', seed: 24350, flip: -1, look: -0.3 });
    human(960, 1390, 0.85, t, { body: '#e8dcc0', trim: '#2a5aa8', legs: '#3a3a5a', long: 1, hat: 'scarf', hatCol: '#f4f0e4', armL: t > EV.ky_each ? 'swing' : 'down', armR: 'hold', face: 'smile', seed: 24351, look: 0.3 });
    const no = t > EV.ky_no && t < EV.ky_gag + 0.6;
    human(420, 1420, 1.0, t, { body: '#6a4a2a', legs: '#3a3a3a', beard: 'long', hair: '#3a2a1a', hat: 'fur', hatCol: '#3a2a1a', armL: no ? 'up' : 'down', armR: no ? 'wave' : 'hold', face: no ? 'smile' : 'calm', seed: 24352, look: 0.5 });
    human(1120, 1430, 0.95, t, { body: '#c8a868', legs: '#4a3a2a', hair: '#8a5a2a', hat: 'cap', hatCol: '#5a3a2a', armL: no ? 'wave' : 'down', armR: 'hips', face: no ? 'grin' : 'calm', seed: 24353, flip: -1, look: -0.5 });
    if (no) { for (const [x, y] of [[420, 1020], [1120, 1040]]) { push(x, y, popK(t, EV.ky_no + 0.05, 0.3), 0.06); blob([[-70, -36], [70, -40], [80, 26], [-10, 30], [-26, 56], [-34, 28], [-76, 26]], { wash: '#fff8ec', washA: 1, w: 2.6, col: '#2b2622' }); txt('Сваримъ!', 0, 4, 30, { font: 'Hand', col: '#2b2622' }); pop(); } }
    castShadow(420, 1420, 110, 200, -0.9, 0.22); castShadow(1120, 1430, 110, 200, -0.9, 0.22);
  }
  function wagon(t) {                                                    // обоз купца: крытая повозка, бочки, тюки, лошадь жуёт сено, фонарь на дуге
    push(-150, 1420, 0.95); for (const dx of [-120, 120]) { ell(dx, -10, 70, 70, { line: true, w: 6, col: '#3a2410' }); for (let s = 0; s < 8; s++) pencil([[dx, -10], [dx + Math.cos(s * 0.785 + t * 0) * 66, -10 + Math.sin(s * 0.785) * 66]], { w: 3, col: '#5a3a1a', pass2: false }); }
    rect(-200, -110, 400, 60, { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#2a1408' }); const cv = blob([[-190, -110], [-180, -250], [-60, -300], [60, -300], [180, -250], [190, -110]], { wash: '#e8dcc0', washA: 1, w: 2.4, col: '#4a3a2a', key: 24360 }); shadeG(cv.path, 190, 0, -60, 0, '#a8987a', 0.5);
    for (let i = 0; i < 4; i++) pencil(spline([[-170 + i * 110, -110], [-160 + i * 110, -250], [-140 + i * 110, -290]], false, 4), { w: 2, col: '#8a7a5a', pass2: false }); txt('NÜRNBERG', 0, -190, 30, { font: 'Osw', col: '#6a2a1a' });
    kvasTub(170, -110, 0.42, t, { col: '#7a4a24', cloth: 1, key: 24361 }); rect(-230, -170, 70, 60, { wash: '#b89a6a', washA: 1, w: 2, col: '#4a3010' }); pencil([[-230, -140], [-160, -140]], { w: 3, col: '#6a2a1a', pass2: false }); pop();
  }
  function stall(t) {                                                    // прилавок купца: доска на козлах, котёл борща, миски, вывеска «БОРЩ · 1 ГРОШ» (перечёркнута), фонарь, дневник, весы, монеты
    const tb = rect(-400, 1440, 2000, 600, { wash: '#6a4a2a', washA: 1, w: 3, col: '#2a1408', key: 24370 }); shadeG(tb.path, 0, 1440, 0, 1800, '#2a1408', 0.5); for (let i = 0; i < 7; i++) pencil([[-400, 1470 + i * 46], [1600, 1474 + i * 46]], { w: 3, col: '#3a2010', a: 0.5, pass2: false });
    rect(-400, 1430, 2000, 18, { wash: '#8a6a3a', washA: 1, w: 2, col: '#3a1a08' });
    const lit = clamp((t - EV.ky_lamp) / 0.3); lightPool(560, 1500, 520, 130, 'rgba(255,200,120,1)', 0.18 + 0.2 * lit);
    push(860, 1440, 1); pencil([[0, 0], [0, -520]], { w: 10, col: '#5a3a1a', pass2: false }); pencil([[0, -520], [160, -520]], { w: 7, col: '#5a3a1a', pass2: false }); pencil([[150, -520], [150, -470]], { w: 2, col: '#2a2a2a', pass2: false });
    const lb = rect(126, -470, 48, 66, { wash: lit ? '#ffd880' : '#5a5a5a', washA: 1, w: 2.4, col: '#1a1a1a' }); for (const dx of [130, 170]) pencil([[dx, -470], [dx, -404]], { w: 3, col: '#1a1a1a', pass2: false }); if (lit) glow(150, -437, 90, 'rgba(255,190,100,1)', 0.35 * lit);
    const sg = rect(-110, -400, 220, 90, { wash: '#f4e8c8', washA: 1, w: 3, col: '#2a1a0a' }); txt('БОРЩЪ', 0, -362, 38, { font: 'Osw', col: '#a8142a' }); txt('1 грошъ', 0, -330, 26, { font: 'Hand', col: '#2a1a0a' });
    if (t > EV.ky_no + 0.1) { const kk = clamp((t - EV.ky_no - 0.1) / 0.3); pencil([[-100, -390], [-100 + 200 * kk, -390 + 70 * kk]], { w: 7, col: '#c8202a', pass2: false }); pencil([[100, -390], [100 - 200 * kk, -390 + 70 * kk]], { w: 7, col: '#c8202a', pass2: false }); } pop();
    push(420, 1580, 0.9); const kt = shape(spline([[-110, -150], [-120, -80], [-80, -20], [80, -20], [120, -80], [110, -150]], false, 6), { wash: '#3a3430', washA: 1, w: 2.4, col: '#0a0806', key: 24371 }); metalG(kt.path, -40, -110, 120, '#8a8480', '#3a3430', '#0a0806', 0.6); ell(0, -150, 110, 22, { wash: '#a8142a', washA: 1, w: 2, col: '#2a0408' }); ell(-30, -154, 30, 5, { wash: '#ffffff', washA: 0.4, line: false }); steamWisps(0, -160, 1, t, 4, 24372, 0.4); pop();
    for (let i = 0; i < 3; i++) { push(650 + i * 70, 1600 - (i % 2) * 8, 0.6); const b = shape(spline([[-60, -30], [-50, 10], [0, 24], [50, 10], [60, -30]], false, 6), { wash: '#a86a3a', washA: 1, w: 2, col: '#3a1a08' }); ell(0, -30, 60, 14, { wash: '#7a4a24', washA: 1, w: 1.6 }); pop(); }
    push(0, 0, 1); ctx.translate(0, 0); diary(760, 1600, 0.75, t, { write: clamp((t - EV.ky_write) / 1.4), rot: 0.06, key: 24373 }); pop(); push(930, 1560, 0.8); rect(-14, -50, 28, 50, { wash: '#2a2a3a', washA: 1, w: 1.6 }); ell(0, -50, 14, 5, { wash: '#1a1a2a', washA: 1, line: false }); pop();
    for (let i = 0; i < 4; i++) ell(1050 + i * 18, 1620 - i * 4, 14, 6, { wash: '#c8a040', washA: 1, w: 1.2, col: '#6a4a08' });
    push(200, 1720, 0.9); const bs = blob([[-110, 0], [-120, -70], [120, -70], [110, 0]], { wash: '#b88a4a', washA: 1, w: 2.4, col: '#4a2a08', key: 24374 }); for (let i = 0; i < 6; i++) pencil([[-110 + i * 40, -66], [-100 + i * 40, -4]], { w: 2, col: '#7a5a2a', pass2: false }); for (let i = 0; i < 4; i++) beet(-70 + i * 46, -80 - (i % 2) * 14, 0.5, i * 0.4, {}); for (let i = 0; i < 2; i++) cabbage(-30 + i * 70, -110, 0.55, 0); pop();
    for (let i = 0; i < 2; i++) { push(620 + i * 150, 1760, 0.8); const lf = blob([[-90, 0], [-80, -50], [0, -70], [80, -50], [90, 0]], { wash: '#a8743a', washA: 1, w: 2, col: '#3a1a04', key: 24375 + i }); shadeG(lf.path, 0, -70, 0, 0, '#5a2a08', 0.4); for (let q = 0; q < 4; q++) pencil([[-50 + q * 30, -54], [-40 + q * 30, -20]], { w: 3, col: '#5a2a08', pass2: false }); pop(); }
    for (let i = 0; i < 3; i++) ell(980 + i * 40, 1780, 22, 26, { wash: '#f8f2e4', washA: 1, w: 1.4, col: '#6a5a4a' }); push(1000, 1700, 0.8); pencil([[0, 0], [0, -90]], { w: 4, col: '#4a4a4a', pass2: false }); pencil([[-70, -90], [70, -90]], { w: 4, col: '#4a4a4a', pass2: false }); for (const sd of [-1, 1]) { pencil([[sd * 70, -90], [sd * 70, -40]], { w: 1.4, col: '#4a4a4a', pass2: false }); ell(sd * 70, -40, 34, 8, { wash: '#c8a040', washA: 1, w: 1.4, col: '#5a3a08' }); } pop();
    castShadow(420, 1580, 260, 90, -0.9, 0.25); castShadow(200, 1720, 220, 80, -0.9, 0.22);
  }
  function front(t) {                                                    // передний план: камыши речки по краям, летящие семена борщевика, листья
    for (let i = 0; i < 9; i++) { const x = -40 + i * 14, sw = Math.sin(t * 1.3 + i) * 6; pencil([[x, 1920], [x + sw, 1500 - (i % 3) * 60]], { w: 6, col: '#4a5a2a', pass2: false }); ell(x + sw, 1500 - (i % 3) * 60, 8, 28, { wash: '#6a3a1a', washA: 1, w: 1.4, col: '#2a1408' }); }
    for (let i = 0; i < 7; i++) { const x = 1040 + i * 14, sw = Math.sin(t * 1.2 + i) * 6; pencil([[x, 1920], [x + sw, 1540 - (i % 3) * 50]], { w: 6, col: '#4a5a2a', pass2: false }); }
    for (let i = 0; i < 6; i++) { const ph = (t * 0.12 + i / 6) % 1, x = -100 + ph * 1300, y = 900 + Math.sin(ph * 9 + i) * 120 + i * 60; push(x, y, 1, ph * 8); blob([[0, 0], [14, -6], [22, 4], [6, 10]], { wash: i % 2 ? '#e8a030' : '#c8602a', washA: 0.9, w: 1, col: '#5a2a08' }); pop(); }
  }
  WORLD.kyiv = (t, u, cat) => {
    lay(30, () => { sky(t); });
    lay(12, () => { hills(t); });
    lay(4, () => { yards(t); });
    lay(2.4, () => { wagon(t); });
    lay(1, () => { cat(); stall(t); });
    lay(0.7, () => { front(t); motes(16, [200, 900, 1100, 1700], '#ffd8a0', t, 24380, { sp: 5, sz: 3, a: 0.5, wob: 10 }); moodDark(800, 1100, 500, 1500, '#1a1030', 0.4); shaft(SUN[0], SUN[1] - 200, 260, 1600, 1.0, 'rgba(255,200,130,1)', 0.1); });
  };
  DIR.kyiv = {
    outfit: 'kaufA', light: { side: 1, rim: '#ffb870' }, grade: ['#ffa060', 0.07],
    act: () => [[S0.kyiv, 'talk'], [EV.ky_kyiv, 'awe'], [EV.ky_write, 'proud'], [EV.ky_no, 'shock'], [EV.ky_each, 'sideeye'], [EV.ky_gag, 'annoyed'], [EV.ky_gag + 0.35, 'grin']],
    pose: (t, u, b) => { const wr = t > EV.ky_write && t < EV.ky_no, gag = t > EV.ky_gag, sh = t > EV.ky_no && t < EV.ky_each;
      return Object.assign(b, { x: 640, y: 1600, s: 1.15, flip: false, look: wr ? [0.6, 0.6] : t < EV.ky_write ? [-0.4, -0.3] : sh ? [-0.6, 0] : [0, 0],
        hand: wr ? [190, -150] : gag ? [60, -320] : [170, -230], handF: sh ? [-200, -320] : [-150, -210], prop: wr ? 'quillP' : gag ? 'spoonBorschP' : undefined, propAng: wr ? 0.3 : 0.2,
        nod: gag && t < EV.ky_gag + 0.3 ? Math.sin(t * 20) * 0.3 : 0 }); },
    cam: () => [[S0.kyiv, 600, 1200, 0.24], [EV.ky_kyiv, 560, 1160, 0.24], [EV.ky_write, 680, 1260, 0.3], [EV.ky_no, 640, 1240, 0.28], [EV.ky_each, 600, 1230, 0.26], [EV.ky_gag, 640, 1270, 0.31], [S1.kyiv, 640, 1280, 0.32]]
  };
  TRANS_IN.kyiv = { a: 0.15, b: 0.6, runA: 1, fx(k, t, A, B) {          // зонтик борщевика рассыпается семенами-«снежинками», они кружат и оседают страницей дневника
    const e = sm(k); drawBuf(e < 0.55 ? A : B, 1, 540, 960);
    scr(() => { const a = Math.sin(e * 3.14); for (let i = 0; i < 70; i++) { const r = rng(24390 + i), ang = r() * 6.283 + e * 4, rad = (1 - Math.abs(e - 0.5) * 2) * (200 + r() * 700) + 40; const x = 540 + Math.cos(ang) * rad, y = 960 + Math.sin(ang) * rad * 1.3;
      ell(x, y, 10 + r() * 10, 6 + r() * 6, { wash: '#f8f4e6', washA: 0.95 * a, w: 1, col: '#8a8a6a' }); pencil([[x, y], [x + 10, y + 20]], { w: 1.4, col: '#6a8a3a', a: a, pass2: false }); }
      if (e > 0.35 && e < 0.75) { const p = 1 - Math.abs(e - 0.55) / 0.2; screenFill('#f2e6c8', 0.6 * p); for (let i = 0; i < 10; i++) pencil(spline([[120, 500 + i * 90], [540, 495 + i * 90], [960, 502 + i * 90]], false, 5), { w: 3, col: '#2a1a3a', a: 0.5 * p, pass2: false }); } });
  } };
})();
