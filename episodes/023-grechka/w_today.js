/* 023 — `today`: «Сегодня в мире собирают около 2 миллионов тонн в год — половину у нас. / Так ты ешь родню щавеля с молоком — или с котлетой?»
   + `button` (тот же кадр): «Подпишись — разберём следующее по зёрнышку!» Солнечная утренняя кухня: большое окно с утренним двором и солнцем
   (главный свет справа), занавеска в горошек, горшок со щавелем и ревенем на подоконнике (колбэк), плитка-кабанчик с бликами, полки с банками
   («ГРЕЧКА», «САХАР», «СОЛЬ», «МУКА»), часы, радиоприёмник, плита с кастрюлей и паром, чайник, прихватки, магнитики на холодильнике.
   На столе (клеёнка в клетку) — ХИРО: глубокая тарелка рассыпчатой гречки, кусок масла тает, блеск, пар; слева миска «с молоком», справа тарелка
   «с котлетой», хлеб, солонка, сахарница, чашка чая. По словам: «2 миллионов» — над столом вырастает число «≈ 2 000 000 т»; «половину» — рядом
   круг-диаграмма, половина закрашивается; «молоком» — Том показывает на миску «А»; «котлетой?» — на тарелку «Б»; кнопка — Том зачерпывает
   кашу и жуёт, подмигивает; «ПОДПИШИСЬ» всплывает поверх. Переход В сцену: ложка каши плюхается в тарелку — зёрна разлетаются по кадру. */
(() => {
  EV.td_num = wtw('t1', 'собирают');
  EV.td_half = wtw('t1', 'половину');
  EV.td_milk = wtw('t2', 'молоком');
  EV.td_cut = wtw('t2', 'котлетой?');
  EV.td_eat = LS('x1') + 0.2;
  SHAKES.push([EV.td_num + 0.4, 0.12, 5]);
  KEYW.push('миллионов', 'котлетой?');
  function wall(t) {                                                     // плитка, окно с солнцем и двором, занавески, подоконник со щавелем
    vgrad(-800, 1500, ['#f4ecd8', '#fbf4e4', '#f0e4cc']);
    const tl = rect(-800, 700, 2700, 800, { wash: '#e8f0ec', washA: 1, line: false, key: 24600 }); shadeG(tl.path, 1300, 700, -400, 700, '#a8b8b0', 0.35);
    for (let y = 700; y < 1500; y += 46) for (let x = -800 + ((y / 46) % 2) * 46; x < 1900; x += 92) { rect(x, y, 88, 42, { wash: '#f4faf6', washA: 1, w: 1.2, col: '#a8b8b0' }); ell(x + 20, y + 10, 14, 4, { wash: '#ffffff', washA: 0.8, line: false }); }
    push(1180, 250, 1); const wf = rect(-260, -420, 520, 640, { wash: '#a8d8f8', washA: 1, w: 16, col: '#f8f8f4', key: 24610 }); ctx.save(); ctx.clip(wf.path); vgrad(-420, 220, ['#6ab0e8', '#b8e0f8', '#f4f8e8']); ell(120, -260, 70, 70, { wash: '#fffbe0', washA: 1, line: false }); glow(120, -260, 200, 'rgba(255,250,210,1)', 0.35);
    for (let i = 0; i < 3; i++) { const x = -280 + i * 200; rect(x, -40 - i * 30, 170, 300, { wash: ['#e8d8c0', '#d8c8b0', '#f0e0c8'][i], washA: 1, w: 1.4, col: '#8a7a6a' }); windows(x + 10, -20 - i * 30, 150, 220, 3, 5, 24611 + i, 0.2, '#ffd98a', '#9fd8ff', 0.85); } for (let i = 0; i < 3; i++) { const x = -200 + i * 180; pencil([[x, 220], [x, 60]], { w: 8, col: '#5a4a3a', pass2: false }); blob([[x - 70, 60], [x - 40, -10], [x + 40, -10], [x + 70, 60], [x, 90]], { wash: '#6aa84a', washA: 1, w: 1.4, col: '#2a5a1a' }); } ctx.restore();
    pencil([[0, -420], [0, 220]], { w: 12, col: '#f8f8f4' }); pencil([[-260, -100], [260, -100]], { w: 12, col: '#f8f8f4' });
    for (const sd of [-1, 1]) { const cu = blob([[sd * 240, -460], [sd * 330, -460], [sd * 340, 0], [sd * 300, 240], [sd * 250, 0]], { wash: '#f4f0e4', washA: 1, w: 2, col: '#a8a090' }); for (let i = 0; i < 14; i++) ell(sd * (260 + (i % 3) * 26), -420 + i * 40, 7, 7, { wash: '#d8343a', washA: 0.85, line: false }); }
    rect(-300, 220, 600, 30, { wash: '#f8f8f4', washA: 1, w: 2, col: '#a8a090' });
    push(-140, 220, 0.8); const pt = blob([[-60, 0], [-50, -80], [50, -80], [60, 0]], { wash: '#c8784a', washA: 1, w: 2, col: '#4a2010' }); for (let i = 0; i < 7; i++) sorrelLeaf(-40 + i * 13, -70, 0.55, -0.6 + i * 0.2, { key: 24615 + i }); pop();
    push(120, 220, 0.6); const pt2 = blob([[-60, 0], [-50, -80], [50, -80], [60, 0]], { wash: '#5a7aa8', washA: 1, w: 2, col: '#1a2a4a' }); rhubarb(0, -70, 0.55, t, { key: 24622 }); pop(); pop();
    glow(1300, 0, 280, 'rgba(255,248,210,1)', 0.18);
    push(300, -60, 1); rect(-320, 0, 640, 18, { wash: '#c8a068', washA: 1, w: 1.6, col: '#5a3a10' }); ['ГРЕЧКА', 'САХАР', 'СОЛЬ', 'МУКА'].forEach((n, i) => { const x = -240 + i * 160; const j = rect(x - 50, -150, 100, 150, { wash: '#e8f0f0', washA: 0.5, w: 2, col: '#4a5a5a' }); rect(x - 50, -100, 100, 100, { wash: ['#8a4a1e', '#ffffff', '#f4f4f4', '#f4ecd8'][i], washA: 1, line: false }); rect(x - 56, -172, 112, 26, { wash: '#d8343a', washA: 1, w: 1.4 }); for (let q = 0; q < 5; q++) ell(x - 44 + q * 22, -160, 6, 6, { wash: '#ffffff', washA: 1, line: false }); rect(x - 40, -80, 80, 30, { wash: '#ffffff', washA: 1, w: 1 }); txt(n, x, -58, 16, { font: 'Osw', col: '#2a2a2a' }); }); pop();
    push(720, -260, 0.9); ell(0, 0, 70, 70, { wash: '#ffffff', washA: 1, w: 4, col: '#c8343a' }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; pencil([[Math.cos(a) * 54, Math.sin(a) * 54], [Math.cos(a) * 62, Math.sin(a) * 62]], { w: i % 3 ? 2 : 4, col: '#2a2a2a', pass2: false }); } pencil([[0, 0], [30, -24]], { w: 5, col: '#1a1a1a', pass2: false }); pencil([[0, 0], [Math.cos(t - 1.57) * 50, Math.sin(t - 1.57) * 50]], { w: 2, col: '#c8343a', pass2: false }); pop();
  }
  function kitchen(t) {                                                  // плита с кастрюлей и чайником (пар), холодильник с магнитами, радио
    push(-120, 1300, 1); const st = rect(-220, -560, 440, 560, { wash: '#f4f4f0', washA: 1, w: 2.4, col: '#5a5a5a', key: 24630 }); shadeG(st.path, 220, 0, -220, 0, '#a8a8a0', 0.4); rect(-200, -360, 400, 260, { wash: '#2a2a30', washA: 1, w: 2, col: '#0a0a10' }); rect(-170, -330, 340, 200, { wash: '#4a3a3a', washA: 0.6, line: false }); for (let i = 0; i < 4; i++) ell(-150 + i * 100, -420, 18, 18, { wash: '#2a2a2a', washA: 1, w: 1.4 }); rect(-220, -580, 440, 30, { wash: '#2a2a30', washA: 1, w: 1.6 });
    const pt = rect(-160, -720, 180, 140, { wash: '#d84a3a', washA: 1, w: 2, col: '#4a0a08' }); shadeG(pt.path, 20, 0, -160, 0, '#5a0a08', 0.4); for (let i = 0; i < 9; i++) ell(-140 + (i % 3) * 60, -690 + Math.floor(i / 3) * 40, 9, 9, { wash: '#ffffff', washA: 0.85, line: false }); ell(-70, -720, 96, 16, { wash: '#a83a2a', washA: 1, w: 1.6 });
    const kt = blob([[60, -580], [50, -680], [100, -720], [170, -710], [200, -660], [190, -580]], { wash: '#c8ccd4', washA: 1, w: 2, col: '#3a3a44' }); metalG(kt.path, 100, -660, 100, '#ffffff', '#c8ccd4', '#5a5a68', 0.7); pencil([[200, -650], [260, -690]], { w: 10, col: '#c8ccd4', pass2: false }); pop();
    steamWisps(-190, 560, 0.8, t, 4, 24631, 0.45); steamWisps(110, 590, 0.5, t, 3, 24632, 0.4);
    push(1500, 1300, 1); const fr = rect(-200, -900, 400, 900, { wash: '#f8f8f4', washA: 1, w: 2.4, col: '#6a6a6a', key: 24633 }); shadeG(fr.path, -200, 0, 200, 0, '#b8b8b0', 0.4); pencil([[-200, -560], [200, -560]], { w: 3, col: '#6a6a6a', pass2: false }); pencil([[-170, -760], [-170, -620]], { w: 8, col: '#a8a8a8', pass2: false });
    for (let i = 0; i < 6; i++) { const x = -100 + (i % 3) * 80, y = -820 + Math.floor(i / 3) * 100; ell(x, y, 22, 22, { wash: ['#c8343a', '#e8c040', '#3a8a5a', '#2a5aa8', '#e8843a', '#8a3a8a'][i], washA: 1, w: 1.4 }); } rect(-60, -500, 140, 180, { wash: '#ffffff', washA: 1, w: 1.4 }); for (let i = 0; i < 5; i++) pencil([[-40, -470 + i * 30], [60, -470 + i * 30]], { w: 2, col: '#4a5a8a', pass2: false }); pop();
    push(980, 700, 1); const rd = rect(-90, -70, 180, 100, { wash: '#8a5a2a', washA: 1, w: 2, col: '#2a1408' }); rect(-74, -54, 90, 70, { wash: '#e8d8b0', washA: 1, w: 1.4 }); for (let i = 0; i < 5; i++) pencil([[-70, -44 + i * 14], [12, -44 + i * 14]], { w: 1.6, col: '#5a3a1a', pass2: false }); for (const yy of [-30, 0]) ell(50, yy, 14, 14, { wash: '#2a2a2a', washA: 1, w: 1.2 }); const nk = (t * 0.7) % 1; txt('♪', 120 + nk * 30, -60 - nk * 80, 30, { font: 'Osw', col: '#5a3a1a', a: 1 - nk }); pop();
  }
  function table(t) {                                                    // клеёнка в клетку, хиро-тарелка, миски «А» и «Б», хлеб, солонка, чай
    const tb = rect(-400, 1440, 2000, 600, { wash: '#f4f0e8', washA: 1, w: 3, col: '#5a4a3a', key: 24640 }); for (let i = 0; i < 26; i++) { pencil([[-400 + i * 80, 1440], [-460 + i * 90, 2000]], { w: 14, col: '#d8343a', a: 0.35, pass2: false }); } for (let i = 0; i < 9; i++) pencil([[-400, 1460 + i * 64], [1600, 1460 + i * 64]], { w: 12, col: '#d8343a', a: 0.3, pass2: false }); shadeG(tb.path, 0, 1440, 0, 1900, '#8a6a5a', 0.3);
    rect(-400, 1430, 2000, 14, { wash: '#e8e0d4', washA: 1, w: 2, col: '#5a4a3a' });
    lightPool(700, 1540, 640, 130, 'rgba(255,240,200,1)', 0.35);
    const melt = clamp((t - S0.today) / 6);
    kashaPlate(640, 1545, 1.3, t, { key: 24641, melt, steam: 0.6 });
    const mA = t > EV.td_milk - 0.1 && t < EV.td_cut, cB = t > EV.td_cut - 0.1 && t < S0.button;
    milkBowl(250, 1540 - (mA ? 20 : 0), 0.95, t, { key: 24650 }); cutletPlate(1020, 1550 - (cB ? 20 : 0), 0.95, t, { key: 24660 });
    if (t > EV.td_milk) { push(250, 1380, popK(t, EV.td_milk, 0.35)); ell(0, 0, 40, 40, { wash: '#2a5aa8', washA: 1, w: 3, col: '#ffffff' }); txt('А', 0, 18, 50, { font: 'Osw', col: '#ffffff' }); pop(); }
    if (t > EV.td_cut) { push(1000, 1390, popK(t, EV.td_cut, 0.35)); ell(0, 0, 40, 40, { wash: '#c8343a', washA: 1, w: 3, col: '#ffffff' }); txt('Б', 0, 18, 50, { font: 'Osw', col: '#ffffff' }); pop(); }
    push(420, 1660, 0.8); const sh = blob([[-20, 0], [-24, -60], [-10, -80], [10, -80], [24, -60], [20, 0]], { wash: '#f8f8f4', washA: 1, w: 1.6, col: '#5a5a5a' }); rect(-22, -96, 44, 18, { wash: '#c8ccd4', washA: 1, w: 1 }); for (let i = 0; i < 3; i++) ell(-8 + i * 8, -92, 2, 2, { wash: '#2a2a2a', washA: 1, line: false }); pop();
    push(880, 1680, 0.8); const cp = blob([[-50, -60], [50, -60], [40, 0], [-40, 0]], { wash: '#ffffff', washA: 1, w: 2, col: '#5a5a6a' }); for (let i = 0; i < 4; i++) ell(-30 + i * 20, -30, 6, 6, { wash: '#2a5aa8', washA: 1, line: false }); ell(0, -60, 50, 10, { wash: '#a8582a', washA: 1, w: 1.2 }); pencil(spline([[50, -50], [76, -36], [44, -16]], false, 4), { w: 6, col: '#ffffff', pass2: false }); pop(); steamWisps(880, 1600, 0.35, t, 2, 24670, 0.35);
    castShadow(640, 1570, 420, 110, -0.7, 0.22); castShadow(250, 1540, 160, 90, -0.7, 0.2); castShadow(1020, 1550, 180, 90, -0.7, 0.2);
  }
  function numbers(t) {                                                  // число-сувенир «≈ 2 000 000 т» + круг «половина»
    if (t < EV.td_num - 0.05 || t > LS('t2') + 0.1) return; const k = popK(t, EV.td_num + 0.3, 0.45), cnt = Math.min(1, (t - EV.td_num - 0.2) / 0.9);
    push(600, 860, k); const b = rect(-300, -80, 600, 150, { wash: '#f8f0dc', washA: 1, w: 4, col: '#5a2a08', key: 24680 }); shadeG(b.path, 0, -80, 0, 70, '#d8c8a0', 0.3); txt('≈ ' + (Math.round(Math.max(0, cnt) * 2000000)).toLocaleString('ru-RU') + ' т', 0, 20, 70, { font: 'Osw', col: '#8a3a10' }); txt('гречки в мире за год', 0, 58, 24, { font: 'Hand', col: '#3a2a1a' }); pop();
    if (t > EV.td_half) { const h = clamp((t - EV.td_half) / 0.5); push(880, 1130, popK(t, EV.td_half, 0.35)); ell(0, 0, 70, 70, { wash: '#f4ecd8', washA: 1, w: 3, col: '#5a2a08' }); ctx.save(); ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 66, -1.571, -1.571 + h * 3.1416); ctx.closePath(); ctx.fillStyle = '#a8642a'; ctx.fill(); ctx.restore(); txt('½', 0, 118, 40, { font: 'Osw', col: '#8a3a10' }); pop(); }
  }
  function front(t) {                                                    // передний план: край вазы с полевыми цветами гречихи слева, полотенце справа, пар
    push(330, 2010, 0.8); const vs = blob([[-60, 0], [-80, -160], [-40, -240], [40, -240], [80, -160], [60, 0]], { wash: '#5a8ac8', washA: 0.9, w: 2.4, col: '#1a2a4a' }); shadeG(vs.path, 80, 0, -80, 0, '#1a2a4a', 0.4); for (let i = 0; i < 4; i++) buckPlant(-30 + i * 20, -220, 260 + i * 30, t, { seed: 24690 + i, sway: 4 }); pop();
    push(960, 1960, 1); const tw = blob([[-90, 0], [-80, -200], [80, -200], [90, 0]], { wash: '#f4f0e4', washA: 1, w: 2, col: '#8a8070' }); for (let i = 0; i < 3; i++) pencil([[-86, -40 - i * 16], [86, -40 - i * 16]], { w: 6, col: '#2a5aa8', pass2: false }); pop();
  }
  WORLD.today = (t, u, cat) => {
    lay(9, () => { wall(t); shaft(1180, 200, 380, 2200, 0.35, 'rgba(255,248,215,1)', 0.12); });
    lay(2.8, () => { kitchen(t); });
    lay(1.6, () => { numbers(t); });
    lay(1, () => { cat(); table(t); });
    lay(0.75, () => { front(t); motes(14, [300, 700, 1000, 1500], '#fffbe8', t, 24699, { sp: 5, sz: 3, a: 0.4, wob: 6 }); moodDark(640, 1150, 560, 1500, '#3a2a1a', 0.25); });
  };
  DIR.today = {
    outfit: 'homeG', light: { side: 1, rim: '#fff0c8' }, grade: ['#ffe0a8', 0.05],
    act: () => [[S0.today, 'grin'], [EV.td_num, 'talk'], [EV.td_half, 'proud'], [LS('t2'), 'sideeye'], [EV.td_milk, 'smug'], [EV.td_cut, 'wink']],
    pose: (t, u, b) => { const mA = t > EV.td_milk - 0.1 && t < EV.td_cut, cB = t > EV.td_cut - 0.1;
      return Object.assign(b, { x: 640, y: 1590, s: 1.16, flip: mA, look: t < EV.td_num ? [0, 0] : t < LS('t2') ? [0.2, -0.5] : mA ? [-0.8, 0.5] : cB ? [0.8, 0.5] : [0, 0],
        hand: cB ? [270, -230] : [160, -230], handF: mA ? [-270, -230] : [-140, -200], point: mA || cB, prop: !mA && !cB ? 'spoonKP' : undefined, propAng: -0.5 }); },
    cam: () => [[S0.today, 620, 1130, 0.27], [EV.td_num, 600, 1060, 0.25], [EV.td_half, 640, 1080, 0.26], [EV.td_milk, 520, 1150, 0.28], [EV.td_cut, 720, 1150, 0.28], [S1.today, 640, 1140, 0.3]]
  };
  TRANS_IN.today = { a: 0.12, b: 0.45, runA: 1, fx(k, t, A, B) {        // ложка каши плюхается — зёрна разлетаются по кадру, сквозь них — кухня
    const e = sm(k); drawBuf(e < 0.4 ? A : B, 1, 540, 960);
    scr(() => { if (e < 0.6) { const R = e / 0.6; for (let i = 0; i < 40; i++) { const r = rng(24700 + i), a = r() * 6.283, d = R * (300 + r() * 900); grainB(540 + Math.cos(a) * d, 1100 + Math.sin(a) * d * 0.8 + R * R * 300, 1.4 + r() * 1.2, r() * 6 + R * 6, { key: 24710 + i }); } if (e > 0.3 && e < 0.5) screenFill('#fff4e0', (0.5 - e) * 3, 'lighter'); } });
  } };
})();

(() => {                                                          // кнопка: тот же мир и кадр (без склейки), Том ест кашу и подмигивает; ПОДПИШИСЬ всплывает поверх
  WORLD.button = (t, u, cat) => WORLD.today(t, u, cat);
  DIR.button = Object.assign({}, DIR.today, {
    act: () => [[S0.button, 'grin'], [EV.td_eat + 0.35, 'laugh'], [LF('x1', 0.7), 'wink']],
    pose: (t, u, b) => { const eat = t > EV.td_eat && t < EV.td_eat + 0.5; return Object.assign(b, { x: 640, y: 1590, s: 1.16, flip: false, look: [0, 0], hand: eat ? [70, -250] : [160, -230], handF: [-140, -200], prop: eat ? 'spoonEmptyP' : 'spoonKP', propAng: eat ? -1.2 : -0.5, tailUp: t > EV.td_eat }); },
    cam: () => { const L = DIR.today.cam().slice(-1)[0]; return [[S0.button, L[1], L[2], L[3]], [DUR, L[1], L[2] + 20, L[3] + 0.03]]; } });   // 14.11.2026: продолжение кадра today без скачка
})();
