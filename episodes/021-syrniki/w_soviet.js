/* 021 — `soviet`: «А раз сыра в них нет, советские книги переименовали их в «творожники». Не прижилось!» Заводская столовая 1950-х: мятный кафель
   до половины стены, побелка, большое окно на заводские трубы и краны (главный свет — тёплое утреннее солнце из окна справа), лампы-плафоны,
   фикус в кадке, часы, плакаты «ХЛЕБ — ВСЕМУ ГОЛОВА» и «ПРИЯТНОГО АППЕТИТА», доска-меню с ценами, раздача с баками и стопками тарелок, повариха
   в колпаке с половником, очередь рабочих с подносами, в зале — столики с солонками. На стойке — «Книга о вкусной и здоровой пище» (герой) и тарелка
   сырников. Том — повар столовой в белой куртке и колпаке. По словам: «раз сыра в них нет» — Том разводит лапами, держа книгу; «советские книги» — книга
   распахивается; «переименовали» — на доске-меню слово «СЫРНИКИ» перечёркнуто, сверху шлёпается штамп «ТВОРОЖНИКИ»; «Не прижилось!» — буквы штампа
   осыпаются, рабочий в очереди: «Мне сырники!», остальные кивают, повариха хохочет. Переход В сцену: красный штамп «ТВОРОЖНИКИ» бьёт по кадру,
   и сцена проступает в его рамке. */
(() => {
  EV.sv_no = wtw('s11', 'сыра');
  EV.sv_books = wtw('s11', 'советские');
  EV.sv_ren = wtw('s11', 'переименовали');
  EV.sv_stamp = wtw('s11', '«творожники».');
  EV.sv_fail = wtw('s11', 'прижилось!');
  SHAKES.push([EV.sv_stamp, 0.18, 9]);
  KEYW.push('«творожники».', 'прижилось!');

  function hall(t) {                                                    // побелка, мятный кафель, окно с заводом, плакаты, часы, плафоны
    vgrad(-900, 1500, ['#e8e6dc', '#f0eee4', '#d8d6ca']); for (let x = -600; x < 1800; x += 48) for (let y = 700; y < 1460; y += 36) rect(x + ((y / 36) % 2) * 24, y, 46, 34, { wash: '#a8d8c0', washA: 1, w: 0.8, col: '#6a9a84' }); rect(-600, 690, 2400, 16, { wash: '#4a8a6a', washA: 1, w: 1.4 });
    push(1150, 180, 1); const w = rect(-230, -330, 460, 560, { wash: '#c8dcec', washA: 1, w: 12, col: '#e8e4d8', key: 22101 }); ctx.save(); ctx.clip(w.path); vgrad(-330, 230, ['#f0c890', '#f8e8c8']); ell(140, -200, 50, 50, { wash: '#fff0c0', washA: 1, line: false });
    for (const [fx, h] of [[-160, 300], [-80, 360], [60, 260]]) { rect(fx - 20, 230 - h, 40, h, { wash: '#8a5a4a', washA: 1, w: 1.4 }); for (let i = 0; i < 4; i++) { const k = (t * 0.3 + i / 4) % 1; ell(fx + k * 80, 230 - h - k * 160, 20 + k * 40, 14 + k * 20, { wash: '#c8c0b8', washA: 0.6 * (1 - k), line: false }); } }
    sil([[-230, 230], [-230, 120], [100, 120], [110, 60], [230, 60], [230, 230]], '#6a6a7a', 1); pencil([[120, 60], [200, -120], [260, -120]], { w: 6, col: '#3a3a4a', pass2: false }); ctx.restore(); pencil([[0, -330], [0, 230]], { w: 8, col: '#e8e4d8' }); pencil([[-230, -60], [230, -60]], { w: 8, col: '#e8e4d8' }); pop(); glow(1150, 0, 280, 'rgba(255,230,180,1)', 0.22);
    for (const [px, py, t1, t2, c] of [[-80, 100, 'ХЛЕБ —', 'ВСЕМУ ГОЛОВА', '#c8241e'], [430, 60, 'ПРИЯТНОГО', 'АППЕТИТА!', '#2a5aa8']]) { push(px, py, 1, (px > 0 ? 0.02 : -0.02)); rect(-150, -190, 300, 380, { wash: '#f4ecd8', washA: 1, w: 2, col: '#3a3a3a' }); rect(-130, -170, 260, 200, { wash: c, washA: 0.9, w: 1 }); human(0, 20, 0.5, t, { body: '#f4f4f0', hair: '#3a2a1a', face: 'smile', armL: 'hold', armR: 'up', seed: 22102 + px }); txt(t1, 0, 90, 34, { font: 'Osw', col: c }); txt(t2, 0, 140, 30, { font: 'Osw', col: '#2a2a2a' }); pop(); }
    push(760, -100, 1); ell(0, 0, 56, 56, { wash: '#f4f4f0', washA: 1, w: 3, col: '#2a2a2a' }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; pencil([[Math.cos(a) * 44, Math.sin(a) * 44], [Math.cos(a) * 50, Math.sin(a) * 50]], { w: 3, col: '#2a2a2a', pass2: false }); } pencil([[0, 0], [0, -36]], { w: 4, col: '#2a2a2a', pass2: false }); pencil([[0, 0], [24, 8]], { w: 4, col: '#2a2a2a', pass2: false }); pop();
    for (const lx of [100, 700, 1300]) { pencil([[lx, -900], [lx, -560]], { w: 3, col: '#3a3a3a', pass2: false }); const l = ell(lx, -540, 70, 30, { wash: '#f8f4e8', washA: 1, w: 2, col: '#6a6a6a' }); glow(lx, -520, 110, 'rgba(255,240,200,1)', 0.25); }
  }
  function serve(t) {                                                   // раздача: баки, тарелки, повариха с половником, очередь с подносами, фикус
    push(320, 1300, 1); const c = rect(-420, -260, 840, 260, { wash: '#b8bcc4', washA: 1, w: 3, col: '#3a3e48', key: 22110 }); shadeG(c.path, 0, -260, 0, 0, '#6a6e78', 0.4); pencil([[-420, -250], [420, -250]], { w: 6, col: '#e8ecf0', pass2: false });
    for (const [bx, lab] of [[-300, 'ЩИ'], [-120, 'КАША'], [60, 'КИСЕЛЬ']]) { const b = rect(bx - 70, -420, 140, 160, { wash: '#d8dce4', washA: 1, w: 2, col: '#4a4e58' }); shadeG(b.path, bx + 70, 0, bx - 70, 0, '#8a8e98', 0.45); rect(bx - 40, -370, 80, 30, { wash: '#f4f0e8', washA: 1, w: 1 }); txt(lab, bx, -350, 18, { font: 'Osw', col: '#c8241e' }); } steamWisps(-200, 840, 0.9, t, 3, 22111, 0.35);
    for (let i = 0; i < 8; i++) ell(260, -280 - i * 12, 70, 14, { wash: '#f8f8f4', washA: 1, w: 1.2, col: '#8a8a8a' }); pop();
    human(150, 1040, 1.0, t, { body: '#f8f8f4', bodyD: '#a8a8a0', legs: '#3a3a4a', hair: '#8a5a2a', face: t > EV.sv_fail ? 'grin' : 'smile', armL: 'hold', armR: 'up', look: 0.6, seed: 22112, long: 1 }); hat20(150, 1040, 1.0, 'chef'); push(220, 790, 1, 0.5 + Math.sin(t * 3) * 0.1); pencil([[0, 0], [0, -120]], { w: 6, col: '#a8acb4', pass2: false }); ell(0, 10, 26, 16, { wash: '#a8acb4', washA: 1, w: 1.4 }); pop();
    const fl = t > EV.sv_fail; for (const [x, b, sd, hat] of [[860, '#3a4a6a', 0, 'cap'], [990, '#6a5a3a', 1, null], [1120, '#5a3a4a', 2, 'scarf'], [1250, '#3a5a4a', 3, 'cap']]) { human(x, 1300, 1.0, t, { body: b, legs: '#2a2a2a', hair: sd === 2 ? '#c88a3a' : '#3a2a1a', hat, hatCol: sd === 2 ? '#c8241e' : '#3a3a4a', face: fl ? 'grin' : 'calm', armL: 'hold', armR: fl && sd === 0 ? 'up' : 'hold', look: -0.7, seed: 22120 + sd, flip: -1, long: sd === 2 ? 1 : 0 }); push(x - 30, 1100, 1); rect(-60, -10, 120, 16, { wash: '#8a6a4a', washA: 1, w: 1.4 }); ell(-20, -14, 26, 8, { wash: '#f8f8f4', washA: 1, w: 1 }); pop(); }
    if (fl) { const k = popK(t, EV.sv_fail + 0.15, 0.4); push(860, 720, k); const bb = blob([[-150, 0], [-150, -90], [150, -90], [150, 0], [30, 0], [0, 34], [-20, 0]], { wash: '#ffffff', washA: 1, w: 2.4, col: '#2a2a2a' }); txt('Мне СЫРНИКИ!', 0, -34, 38, { font: 'Hand', col: '#c8241e' }); pop(); }
    push(1440, 1300, 1); rect(-50, -100, 100, 100, { wash: '#8a5a32', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 9; i++) { const a = -1.57 + (i - 4) * 0.3; pencil([[0, -100], [Math.cos(a) * 160, -100 + Math.sin(a) * 260]], { w: 4, col: '#3a6a3a', pass2: false }); push(Math.cos(a) * 160, -100 + Math.sin(a) * 260, 1, a + 1.57); ell(0, 0, 26, 50, { wash: '#2a7a3a', washA: 1, w: 1.4, col: '#0a3a1a' }); pop(); } pop();
  }
  function menu(t) {                                                    // доска-меню: «СЫРНИКИ» → штамп «ТВОРОЖНИКИ» → буквы осыпаются
    push(860, 560, 0.9); const b = rect(-260, -200, 520, 400, { wash: '#2a3a32', washA: 1, w: 6, col: '#6a4a2a', key: 22130 }); shadeG(b.path, 260, 200, -260, -200, '#1a2a22', 0.4); txt('МЕНЮ', 0, -150, 44, { font: 'Osw', col: '#f4f0e0' });
    const rows = [['Щи суточные', '18'], ['Каша гречневая', '9'], ['СЫРНИКИ со сметаной', '12'], ['Кисель', '5']]; rows.forEach(([n, p], i) => { txt(n, -40, -80 + i * 70, 30, { font: 'Hand', col: i === 2 ? '#fff4c0' : '#e8ece4' }); txt(p + ' коп.', 190, -80 + i * 70, 28, { font: 'Hand', col: '#e8ece4' }); });
    if (t > EV.sv_ren) { const q = sm(clamp((t - EV.sv_ren) / 0.3)); pencil([[-210, 60], [-210 + 300 * q, 60]], { w: 6, col: '#e8402a', pass2: false }); }
    if (t > EV.sv_stamp) { const k = popK(t, EV.sv_stamp, 0.3), fall = t > EV.sv_fail ? t - EV.sv_fail : 0; push(-40, 70, lerp(2, 1, clamp((t - EV.sv_stamp) / 0.15)), -0.12);
      if (!fall) { rect(-220, -40, 440, 80, { wash: 'rgba(0,0,0,0)', washA: 0, w: 8, col: '#e8402a' }); txt('ТВОРОЖНИКИ', 0, 16, 56, { font: 'Osw', col: '#e8402a' }); }
      else { const L = 'ТВОРОЖНИКИ'.split(''); L.forEach((ch, i) => { const d = clamp(fall * 2.4 - i * 0.12); txt(ch, -180 + i * 40, 16 + d * d * 700, 56, { font: 'Osw', col: '#e8402a', rot: d * (i % 2 ? 2 : -2), a: 1 - d * 0.6 }); }); } pop(); }
    pop();
  }
  function counter(t) {                                                 // стойка: книга (герой), тарелка сырников, солонка, стакан чая, подставка с ценником
    const c = rect(-300, 1440, 1700, 600, { wash: '#c8ccd4', washA: 1, w: 3, col: '#3a3e48', key: 22140 }); shadeG(c.path, 0, 1440, 0, 1800, '#6a6e78', 0.4); rect(-300, 1430, 1700, 22, { wash: '#e8ecf0', washA: 1, w: 1.6 });
    const op = t > EV.sv_books ? sm(clamp((t - EV.sv_books) / 0.4)) : 0; if (op > 0.3) push(920, 1460, 1, 0.04), oldBook(0, 0, 0.75, 0, { open: 1, title: 'О ВКУСНОЙ И ЗДОРОВОЙ', sub: 'творожники', key: 22141 }), syrnik(110, 40, 0.6, 0, { key: 22142 }), pop(); else kvzpBook(920, 1400, 0.75, -0.05);
    syrnikPlate(360, 1500, 0.6, t, { n: 3, key: 22143, steam: 0.3 });
    push(140, 1490, 1); rect(-20, -60, 40, 60, { wash: '#e8ecf0', washA: 0.8, w: 1.4 }); for (let i = 0; i < 3; i++) ell(-8 + i * 8, -64, 2, 2, { wash: '#2a2a2a', washA: 1, line: false }); pop();
    push(1250, 1500, 1); const g = rect(-30, -90, 60, 90, { wash: '#c88a3a', washA: 0.8, w: 1.4, col: '#6a4a1a' }); rect(-36, -40, 72, 44, { wash: '#a8a8b0', washA: 1, w: 1.4 }); pencil([[10, -90], [30, -150]], { w: 3, col: '#c8c8d0', pass2: false }); pop(); steamWisps(1250, 1410, 0.5, t, 2, 22144, 0.3);
    castShadow(920, 1480, 280, 140, -0.6, 0.22); lightPool(700, 1520, 640, 140, 'rgba(255,230,180,1)', 0.25);
  }
  function front(t) {                                                   // передний план: край подноса с компотом, вилки в стакане
    push(-280, 2040, 1.6); rect(-200, -50, 400, 50, { wash: '#8a6a4a', washA: 1, w: 3, col: '#2a1408' }); const k = rect(-40, -170, 80, 120, { wash: '#c84a3a', washA: 0.75, w: 2, col: '#6a1a0a' }); for (let i = 0; i < 3; i++) ell(-16 + i * 16, -80, 8, 8, { wash: '#8a1a1a', washA: 0.9, line: false }); pop();
    push(1420, 2000, 1.6); const g = rect(-50, -200, 100, 200, { wash: '#d8e0e8', washA: 0.6, w: 2, col: '#6a7a8a' }); for (let i = 0; i < 4; i++) pencil([[-30 + i * 20, -180], [-36 + i * 22, -330]], { w: 5, col: '#a8acb4', pass2: false }); pop();
    motes(12, [-200, 200, 1200, 1400], '#fff8e0', t, 22150, { sp: 5, sz: 3, a: 0.35, wob: 5 });
  }
  WORLD.soviet = (t, u, cat) => {
    lay(16, () => { hall(t); shaft(1150, 0, 380, 2200, 0.35, 'rgba(255,230,180,1)', 0.12); }); lay(4, () => { serve(t); haze('#f4f0e4', 0.05); });
    lay(2.2, () => { menu(t); });
    lay(1, () => { cat(); counter(t); });
    lay(0.6, () => { front(t); moodDark(620, 1100, 520, 1500, '#1a2a3a', 0.35); });
  };
  DIR.soviet = {
    outfit: 'stolA', light: { side: 1, rim: '#ffe8c0' }, grade: ['#a8d8c0', 0.05],
    act: () => [[S0.soviet, 'talk'], [EV.sv_no, 'sideeye'], [EV.sv_books, 'proud'], [EV.sv_stamp, 'smug'], [EV.sv_fail, 'laugh']],
    pose: (t, u, b) => { const shrug = t > EV.sv_no && t < EV.sv_books;
      return Object.assign(b, { x: 640, y: 1590, s: 1.18, flip: 1, look: t > EV.sv_ren && t < EV.sv_fail ? [-0.4, -0.7] : t > EV.sv_fail ? [0.7, -0.3] : [0.2, 0], hand: shrug ? [220, -360] : [150, -300], handF: shrug ? [-220, -360] : [-100, -230], prop: t < EV.sv_books ? 'kvzpP' : 'spatulaP', propAng: 0.1, nod: t > EV.sv_fail ? Math.sin(t * 9) * 0.03 : 0 }); },
    cam: () => [[S0.soviet, 640, 1080, 0.26], [EV.sv_books, 700, 1150, 0.3], [EV.sv_ren, 600, 960, 0.28], [EV.sv_fail, 720, 1060, 0.26], [S1.soviet, 700, 1100, 0.3]]
  };
  TRANS_IN.soviet = { a: 0.15, b: 0.45, runA: 0.5, fx(k, t, A, B) {        // штамп «ТВОРОЖНИКИ» бьёт по кадру, сцена проступает в его рамке
    const e = sm(k), sc = lerp(2.6, 1, clamp(k * 2.5)), hit = k > 0.4; drawBuf(A, 1, 540, 960);
    const w = hit ? lerp(520, 1400, sm((k - 0.4) / 0.6)) : 520 * (1 / sc), h = w * 0.5;
    if (hit) scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(540 - w / 2, 960 - h / 2, w, h * (1 + (k - 0.4) * 4)); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore(); });
    scr(() => { push(540, 960, sc, -0.08); ctx.save(); ctx.globalAlpha = hit ? 1 - sm((k - 0.4) / 0.6) : 1; rect(-260, -70, 520, 140, { wash: 'rgba(0,0,0,0)', washA: 0, w: 14, col: '#e8402a' }); txt('ТВОРОЖНИКИ', 0, 22, 84, { font: 'Osw', col: '#e8402a' }); ctx.restore(); pop(); });
  } };
})();
