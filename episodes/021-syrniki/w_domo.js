/* 021 — `domo`: «А сырники? Впервые — в «Домострое», при Иване Грозном: «сырники с яйцы и с сыром». / Но вот подвох: слова «творог» в книге нет.
   Ни разу! / Как кот без клички: живёт, а позвать нельзя.» Поварня боярского терема середины XVI в.: изразцовая печь с огнём (главный тёплый свет),
   расписной свод с травами, слюдяное окошко в синюю ночь, полки с глиняными горшками и медью, связки сушёной рыбы, грибов и лука, кадка, сундук,
   парсуна в раме (силуэт в шапке Мономаха), ключница со связкой ключей, поварёнок с корзиной яиц, дьяк с гусиным пером. На столе — рукопись «Домострой»
   на аналое со свечой (герой). Том — боярский повар в кафтане и мурмолке. По словам: «А сырники?» — Том тянется к книге; «Домострое» — книга
   распахивается, буквица вспыхивает; «при Иване Грозном» — свеча освещает парсуну, плашка «1550-е»; «с яйцы и с сыром» — поварёнок ставит корзину яиц,
   Том берёт блин-конверт с начинкой; «подвох» — Том с лупой над книгой; «творог» — бирка «ТВОРОГ?» с счётчиком; «Ни разу!» — красный штамп «0».
   Шутка: у печи кошка-домовая с пустой биркой на шее; на «кот без клички» над ней пузырь «кис-кис?» — кошка не оборачивается, Том поводит ухом
   (пауза-гэг). Переход В сцену: страница рукописи с буквицей переворачивается справа налево. */
(() => {
  EV.dm_ask = LS('s5') + 0.05;
  EV.dm_book = wtw('s5', '«Домострое»,');
  EV.dm_tsar = wtw('s5', 'Грозном:');
  EV.dm_eggs = wtw('s5', 'яйцы');
  EV.dm_trick = wtw('s6', 'подвох:');
  EV.dm_word = wtw('s6', '«творог»');
  EV.dm_zero = wtw('s6', 'разу!');
  EV.dm_cat = wtw('s7', 'кот');
  EV.dm_call = wtw('s7', 'позвать');
  EV.dm_gag = LE('s7') + 0.05;
  SHAKES.push([EV.dm_zero, 0.2, 10]);
  KEYW.push('«творог»', 'разу!');

  function vault(t) {                                                   // расписной свод, стены из брёвен, слюдяное окошко, парсуна
    vgrad(-900, 1500, ['#2a1a10', '#5a3a20', '#7a5030']);
    for (let y = -400; y < 1300; y += 64) { const b = rect(-700, y, 2600, 60, { wash: y % 128 ? '#7a5434' : '#6a4a2c', washA: 1, w: 1.6, col: '#2a1408', key: 21800 + y }); shadeG(b.path, 0, y, 0, y + 60, '#2a1408', 0.4); }
    const v = blob([[-700, -400], [-500, -700], [0, -860], [600, -860], [1300, -700], [1900, -400]], { wash: '#c8a070', washA: 1, w: 2.4, col: '#3a2010', key: 21801 }); shadeG(v.path, 0, -860, 0, -400, '#5a3a20', 0.4);
    for (let i = 0; i < 14; i++) { const x = -500 + i * 170, y = -560 - Math.sin(i / 13 * 3.14) * 220; pencil(spline([[x - 60, y + 40], [x, y - 20], [x + 60, y + 40]], false, 5), { w: 5, col: '#2a6a3a', pass2: false }); ell(x, y - 10, 14, 14, { wash: i % 2 ? '#c8241e' : '#e8b030', washA: 1, w: 1.2 }); for (const sd of [-1, 1]) ell(x + sd * 30, y + 20, 12, 6, { wash: '#3a8a4a', washA: 1, w: 1, rot: sd * 0.5 }); }
    push(1200, 80, 1); const w = rect(-110, -150, 220, 260, { wash: '#1a2a5a', washA: 1, w: 8, col: '#4a2a10', key: 21802 }); ctx.save(); ctx.clip(w.path); for (let i = 0; i < 6; i++) for (let j = 0; j < 7; j++) { const c = poly([[-100 + i * 40, -140 + j * 40], [-80 + i * 40, -160 + j * 40], [-60 + i * 40, -140 + j * 40], [-80 + i * 40, -120 + j * 40]], { wash: '#3a4a8a', washA: 0.6, w: 1.6, col: '#c8a050' }); } ell(40, -60, 22, 22, { wash: '#f4f0d8', washA: 0.8, line: false }); ctx.restore(); pop();
    push(420, 340, 1); const f = rect(-130, -170, 260, 340, { wash: '#c89a3a', washA: 1, w: 3, col: '#4a2a08', key: 21803 }); rect(-110, -150, 220, 300, { wash: '#4a2a1a', washA: 1, w: 1.4 }); const lit = t > EV.dm_tsar ? sm(clamp((t - EV.dm_tsar) / 0.4)) : 0.25;
    sil([[-80, 150], [-90, 40], [-50, -10], [-40, -60], [-50, -110], [0, -130], [50, -110], [40, -60], [50, -10], [90, 40], [80, 150]], lerpC('#2a1a10', '#8a5a2a', lit), 1); blob([[-46, -110], [-40, -150], [0, -170], [40, -150], [46, -110]], { wash: lerpC('#3a2a1a', '#d8a830', lit), washA: 1, w: 1.4, col: '#2a1408' }); ell(0, -180, 8, 8, { wash: '#c8241e', washA: lit, line: false });
    if (t > EV.dm_tsar) { const k = popK(t, EV.dm_tsar, 0.4); push(0, 210, k); rect(-110, -30, 220, 56, { wash: '#f4e4b0', washA: 1, w: 2, col: '#6a4a10' }); txt('1550-е', 0, 14, 40, { font: 'Osw', col: '#8a1a0e' }); pop(); } pop();
  }
  function stove(t) {                                                   // изразцовая печь с огнём, ухват, горшки, кошка с пустой биркой
    push(110, 1260, 1); const s = rect(-260, -820, 520, 820, { wash: '#f0e8d8', washA: 1, w: 3, col: '#3a2a1a', key: 21810 }); shadeG(s.path, 260, 0, -260, 0, '#8a7a60', 0.45);
    for (let i = 0; i < 6; i++) for (let j = 0; j < 9; j++) { const x = -240 + i * 80, y = -800 + j * 80; if (j > 5 && i > 0 && i < 5) continue; rect(x, y, 78, 78, { wash: '#f4ecdc', washA: 1, w: 1, col: '#8a7a60' }); ell(x + 39, y + 39, 22, 22, { wash: (i + j) % 2 ? '#2a6a4a' : '#2a5aa8', washA: 0.85, w: 1, col: '#1a3a2a' }); ell(x + 39, y + 39, 8, 8, { wash: '#e8b030', washA: 1, line: false }); }
    const m = rect(-160, -330, 320, 250, { wash: '#1a0a04', washA: 1, w: 3, col: '#2a1408' }); poly([[-160, -330], [0, -400], [160, -330]], { wash: '#1a0a04', washA: 1, w: 3, col: '#2a1408' });
    for (let i = 0; i < 7; i++) { const fx = -120 + i * 40, fh = 80 + Math.sin(t * 9 + i * 1.7) * 30; blob([[fx - 22, -90], [fx - 10, -90 - fh * 0.6], [fx, -90 - fh], [fx + 10, -90 - fh * 0.6], [fx + 22, -90]], { wash: i % 2 ? '#ff9a2a' : '#ffd050', washA: 0.95, line: false }); }
    for (let i = 0; i < 4; i++) rect(-130 + i * 60, -100, 70, 20, { wash: '#4a2a14', washA: 1, w: 1.4 }); glow(0, -170, 240, 'rgba(255,150,60,1)', 0.35);
    push(80, -110, 1); const p = blob([[-50, 0], [-60, -60], [-40, -90], [40, -90], [60, -60], [50, 0]], { wash: '#5a3a1a', washA: 1, w: 2, col: '#1a0a04' }); pop(); pencil([[260, 0], [120, -120]], { w: 8, col: '#6a4a2a', pass2: false }); pencil(spline([[100, -110], [120, -140], [150, -130]], false, 4), { w: 6, col: '#4a4a4a', pass2: false }); pop();
    push(330, 1280, 1); const cb = blob([[-60, 0], [-70, -50], [-50, -90], [-30, -100], [-36, -140], [-20, -150], [0, -130], [20, -150], [36, -140], [30, -100], [50, -80], [70, -40], [60, 0]], { wash: '#5a5a5a', washA: 1, w: 2, col: '#1a1a1a', key: 21815 }); hatch(cb.path, cb.bb, { gap: 6, a: 0.3, col: '#1a1a1a', ang: 1.2, key: 21816 });
    pencil(spline([[60, -10], [110, -20], [120, -70], [100, -90]], false, 6), { w: 10, col: '#5a5a5a', pass2: false }); ell(-14, -120, 5, 3, { wash: '#c8e040', washA: 1, line: false }); ell(14, -120, 5, 3, { wash: '#c8e040', washA: 1, line: false });
    pencil(spline([[-30, -96], [0, -88], [30, -96]], false, 4), { w: 3, col: '#c8241e', pass2: false }); push(0, -80, 1, Math.sin(t * 2) * 0.1); rect(-18, 0, 36, 26, { wash: '#f4e8c8', washA: 1, w: 1.4, col: '#6a4a10' }); txt('…', 0, 20, 20, { font: 'Osw', col: '#6a4a10' }); pop();
    if (t > EV.dm_call && t < EV.dm_gag + 0.9) { const k = popK(t, EV.dm_call, 0.3); push(-60, -230, k); const bb = blob([[-110, 0], [-110, -70], [110, -70], [110, 0], [20, 0], [0, 26], [-10, 0]], { wash: '#fff8e8', washA: 1, w: 2, col: '#3a2a1a' }); txt('кис-кис?', 0, -22, 36, { font: 'Hand', col: '#3a2a1a' }); pop(); } pop();
  }
  function people(t) {                                                  // ключница, поварёнок с яйцами, дьяк с пером; полки с горшками, связки
    for (const [sx, sy] of [[620, 340], [620, 560], [1150, 560]]) { rect(sx - 230, sy, 460, 18, { wash: '#5a3a1a', washA: 1, w: 1.6, col: '#1a0a04' }); for (let i = 0; i < 6; i++) { const x = sx - 190 + i * 76; if (i % 3 === 2) { const c = blob([[x - 30, sy], [x - 36, sy - 50], [x - 20, sy - 70], [x + 20, sy - 70], [x + 36, sy - 50], [x + 30, sy]], { wash: '#c87a3a', washA: 1, w: 1.6, col: '#5a2a08' }); shadeG(c.path, x + 36, 0, x - 20, 0, '#6a3a08', 0.4); ell(x - 10, sy - 50, 6, 14, { wash: '#ffd8a0', washA: 0.6, line: false }); } else { const p = blob([[x - 28, sy], [x - 34, sy - 40], [x - 24, sy - 70], [x - 30, sy - 80], [x + 30, sy - 80], [x + 24, sy - 70], [x + 34, sy - 40], [x + 28, sy]], { wash: i % 2 ? '#9a5a2e' : '#7a4a24', washA: 1, w: 1.6, col: '#2a1408' }); shadeG(p.path, x + 34, 0, x - 28, 0, '#2a1408', 0.4); pencil([[x - 30, sy - 40], [x + 30, sy - 40]], { w: 2, col: '#e8c890', a: 0.5, pass2: false }); } } }
    for (let i = 0; i < 4; i++) { const x = 800 + i * 70; pencil([[x, -100], [x, 40]], { w: 2, col: '#5a4a2a', pass2: false }); for (let q = 0; q < 4; q++) { push(x, 50 + q * 44, 1, Math.sin(t * 1.2 + i + q) * 0.05); blob([[0, 0], [12, 20], [0, 40], [-12, 20]], { wash: i % 2 ? '#a88a5a' : '#8a6a3a', washA: 1, w: 1.2, col: '#3a2a1a' }); pop(); } }
    const sh = t > EV.dm_zero && t < EV.dm_zero + 1.5;
    human(820, 1300, 1.05, t, { body: '#8a1a24', bodyD: '#3a0610', trim: '#e0b848', legs: '#3a2a2a', hair: '#5a3a1a', hat: 'scarf', hatCol: '#e8c860', face: sh ? 'shock' : t > EV.dm_cat ? 'grin' : 'smile', armL: 'hold', armR: 'hold', look: -0.5, seed: 21820, flip: -1, long: 1 });
    push(860, 1060, 1); for (let i = 0; i < 4; i++) { pencil([[0, 0], [-10 + i * 8, 40]], { w: 2, col: '#a8a8a0', pass2: false }); poly([[-14 + i * 8, 40], [-6 + i * 8, 40], [-8 + i * 8, 70]], { wash: '#c8a040', washA: 1, w: 1 }); } ell(0, 0, 14, 14, { wash: 'rgba(0,0,0,0)', washA: 0, w: 3, col: '#c8a040' }); pop();
    const egg = t > EV.dm_eggs; human(egg ? 1020 : 1250, 1300, 0.85, t, { body: '#e8dcc0', legs: '#5a4a3a', hair: '#e8c870', face: egg ? 'grin' : 'smile', armL: 'hold', armR: 'hold', look: -0.7, seed: 21821, flip: -1 });
    human(1350, 1300, 1.05, t, { body: '#3a3a5a', legs: '#2a2a2a', hair: '#3a2a1a', beard: 'long', hat: 'fur', face: sh ? 'shock' : 'calm', armL: 'hold', armR: 'up', look: -0.6, seed: 21822, flip: -1, long: 1 }); push(1290, 1010, 1, 0.5); pencil(spline([[0, 0], [20, -60], [10, -110]], false, 5), { w: 6, col: '#f4f4f0', pass2: false }); pop();
  }
  function table(t) {                                                   // стол: рукопись на аналое со свечой, корзина яиц, блины-конверты, лупа, бирка «ТВОРОГ? 0»
    const c = rect(-300, 1440, 1700, 600, { wash: '#6a4424', washA: 1, w: 3, col: '#1a0a04', key: 21830 }); for (let i = 0; i < 7; i++) pencil([[-300, 1470 + i * 80], [1400, 1474 + i * 80]], { w: 3, col: '#2a1408', a: 0.5, pass2: false }); shadeG(c.path, 0, 1440, 0, 1800, '#1a0a04', 0.45);
    for (let i = 0; i < 12; i++) poly([[-300 + i * 145, 1440], [-228 + i * 145, 1480], [-155 + i * 145, 1440]], { wash: i % 2 ? '#c8241e' : '#f4e8c8', washA: 1, w: 1, col: '#5a1a08' });
    const op = t > EV.dm_book ? sm(clamp((t - EV.dm_book) / 0.4)) : 0; push(880, 1430, 1, -0.04); pencil([[-60, 0], [0, -120]], { w: 10, col: '#4a2a14', pass2: false }); pencil([[60, 0], [0, -120]], { w: 10, col: '#4a2a14', pass2: false });
    if (op > 0) domoBook(0, -260, 0.62 * (0.6 + 0.4 * op), t, { key: 21831 }); else oldBook(0, -260, 0.62, 0, { title: 'ДОМОСТРОИ', col: '#5a2a14', key: 21832 });
    if (t > EV.dm_eggs && op > 0) { const q = sm(clamp((t - EV.dm_eggs) / 0.4)); rect(-10, -192, 200 * q, 40, { wash: '#f4d040', washA: 0.4, line: false }); }
    if (t > EV.dm_word) { const k = popK(t, EV.dm_word, 0.4), n = t > EV.dm_zero ? '0' : String(Math.max(0, 9 - Math.floor((t - EV.dm_word) * 8))); push(-170, -520, k, -0.05); rect(-170, -50, 340, 100, { wash: '#f4e8c8', washA: 1, w: 3, col: '#8a1a0e' }); txt('«ТВОРОГ»?', -40, 20, 44, { font: 'Osw', col: '#2a1a0a' }); ell(118, 0, 40, 40, { wash: t > EV.dm_zero ? '#c8241e' : '#f4e8c8', washA: 1, w: 2, col: '#8a1a0e' }); txt(n, 118, 18, 50, { font: 'Osw', col: t > EV.dm_zero ? '#ffffff' : '#8a1a0e' }); pop(); }
    if (t > EV.dm_zero && t < S1.domo) { const q = clamp((t - EV.dm_zero) / 0.25); push(-10, -300, lerp(2.4, 1, sm(q)), -0.2); ctx.save(); ctx.globalAlpha = q; rect(-140, -60, 280, 120, { wash: 'rgba(0,0,0,0)', washA: 0, w: 10, col: '#c8241e' }); txt('НИ РАЗУ', 0, 22, 60, { font: 'Osw', col: '#c8241e' }); ctx.restore(); pop(); }
    candle(1060, -10, 1.2, t, 21833, 1); pop();
    if (t > EV.dm_eggs) { const k = popK(t, EV.dm_eggs, 0.4); push(260, 1480, k); const bk = blob([[-90, 0], [-100, -60], [100, -60], [90, 0]], { wash: '#b8884a', washA: 1, w: 2, col: '#4a2a08' }); for (let i = 0; i < 6; i++) pencil([[-96, -10 - i * 9], [96, -10 - i * 9]], { w: 2, col: '#6a4a18', a: 0.6, pass2: false }); for (let i = 0; i < 5; i++) ell(-60 + i * 30, -70 - (i % 2) * 10, 20, 26, { wash: '#f8f0e0', washA: 1, w: 1.4, col: '#8a7a5a' }); pencil(spline([[-90, -60], [0, -170], [90, -60]], false, 8), { w: 8, col: '#8a5a2a', pass2: false }); pop(); }
    bliniFold(540, 1500, 0.8, 0.1, { key: 21834 }); bliniFold(450, 1530, 0.7, -0.2, { key: 21835 });
    castShadow(880, 1450, 200, 200, 0.6, 0.25); lightPool(900, 1300, 400, 300, 'rgba(255,200,120,1)', 0.25);
  }
  function front(t) {                                                   // передний план: связка лука и чеснока, край кадки, пар от горшка
    for (let i = 0; i < 6; i++) { const x = -260 + i * 34, y = -500 + i * 40 + Math.sin(t + i) * 4; pencil([[x, -900], [x, y]], { w: 3, col: '#8a6a3a', pass2: false }); blob([[x - 30, y], [x - 34, y + 34], [x, y + 60], [x + 34, y + 34], [x + 30, y]], { wash: i % 2 ? '#c8803a' : '#e8d8b8', washA: 1, w: 1.6, col: '#5a3a1a' }); }
    push(1440, 2060, 1.6); const k = rect(-140, -280, 280, 280, { wash: '#7a5434', washA: 1, w: 3, col: '#1a0a04' }); for (const y of [-240, -80]) pencil([[-142, y], [142, y]], { w: 8, col: '#3a3a40', pass2: false }); shadeG(k.path, -140, 0, 140, 0, '#1a0a04', 0.5); pop();
    motes(16, [-300, 400, 600, 1500], '#ffb060', t, 21840, { sp: 30, sz: 3, a: 0.6, add: 1, wob: 8 });
  }
  WORLD.domo = (t, u, cat) => {
    lay(16, () => { vault(t); }); lay(4.2, () => { stove(t); people(t); haze('#ff9a50', 0.05); });
    lay(1, () => { cat(); table(t); });
    lay(0.6, () => { front(t); moodDark(500, 1100, 500, 1500, '#1a0804', 0.55); shaft(110, 900, 300, 1400, -1.2, 'rgba(255,170,90,1)', 0.12); });
  };
  DIR.domo = {
    outfit: 'boyarA', light: { side: -1, rim: '#ffb060' }, grade: ['#ff8a40', 0.08],
    act: () => [[S0.domo, 'talk'], [EV.dm_ask, 'suspicious'], [EV.dm_book, 'awe'], [EV.dm_eggs, 'grin'], [EV.dm_trick, 'suspicious'], [EV.dm_word, 'sideeye'], [EV.dm_zero, 'shock'], [EV.dm_cat, 'smug'], [EV.dm_gag, 'annoyed'], [EV.dm_gag + 0.5, 'wink']],
    pose: (t, u, b) => { const lup = t > EV.dm_trick && t < EV.dm_cat, gag = t > EV.dm_gag && t < EV.dm_gag + 0.7, blin = t > EV.dm_eggs && t < EV.dm_trick;
      return Object.assign(b, { x: 600, y: 1590, s: 1.18, flip: 0, look: t < EV.dm_book ? [0.6, -0.2] : lup ? [0.7, -0.1] : t > EV.dm_cat ? [-0.7, 0.2] : [0.3, 0], hand: lup ? [260, -300] : t < EV.dm_book ? [240, -260] : [150, -300], handF: [-110, -230],
        prop: lup ? 'magnP' : blin ? 'bliniFoldP' : undefined, propAng: lup ? -0.3 : 0, point: t > EV.dm_ask && t < EV.dm_book + 0.3 ? 1 : undefined, rot: gag ? Math.sin((t - EV.dm_gag) * 30) * 0.015 : 0, tilt: gag ? 0.06 : 0 }); },
    afterCat: (t, u, P) => { if (t > EV.dm_gag && t < EV.dm_gag + 0.7) { const q = Math.sin((t - EV.dm_gag) * 40); pencil([[P.x - 130 * P.s, P.y - 520 * P.s], [P.x - 160 * P.s + q * 8, P.y - 560 * P.s]], { w: 3, col: '#3a2a1a', a: 0.6, pass2: false }); pencil([[P.x - 120 * P.s, P.y - 540 * P.s], [P.x - 150 * P.s + q * 8, P.y - 590 * P.s]], { w: 3, col: '#3a2a1a', a: 0.6, pass2: false }); } },
    cam: () => [[S0.domo, 680, 1080, 0.24], [EV.dm_book, 760, 1060, 0.3], [EV.dm_tsar, 660, 1000, 0.28], [EV.dm_eggs, 640, 1150, 0.28], [EV.dm_trick, 720, 1100, 0.3], [EV.dm_zero, 700, 1060, 0.32], [EV.dm_cat, 520, 1120, 0.28], [S1.domo, 560, 1150, 0.3]]
  };
  TRANS_IN.domo = { a: 0.2, b: 0.55, runA: 0.6, fx(k, t, A, B) {          // страница рукописи с буквицей переворачивается справа налево
    const e = sm(k), fx0 = lerp(1080, -40, e); drawBuf(B, 1, 540, 960);
    scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(0, 0, Math.max(0, fx0), 1920); ctx.clip(); drawBuf(A, 1, 540, 960); ctx.restore();
      const w = 260 * Math.sin(e * 3.14) + 20; const pg = poly([[fx0, 0], [fx0 - w, 60], [fx0 - w, 1880], [fx0, 1920]], { wash: '#efe0b8', washA: 1, w: 3, col: '#7a5a2a', key: 21899 }); shadeG(pg.path, fx0, 0, fx0 - w, 0, '#a8884a', 0.6);
      if (w > 120) { push(fx0 - w * 0.6, 300, w / 260); rect(-40, -44, 80, 88, { wash: '#c8241e', washA: 0.9, w: 1.4 }); txt('С', 0, 28, 72, { font: 'Osw', col: '#f4d878' }); pop(); for (let i = 0; i < 18; i++) pencil([[fx0 - w * 0.9, 420 + i * 70], [fx0 - w * 0.15, 420 + i * 70]], { w: 4, col: '#3a2410', a: 0.4, pass2: false }); } });
  } };
})();
