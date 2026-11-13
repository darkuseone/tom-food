/* 019 — `menches`: «А братья Менчес жарили котлеты в городке… Гамбург, штат Нью-Йорк! Вот и разгадка?» Ярмарка округа Эри в сумерках (ложный финал):
   фиолетово-розовое небо, первые звёзды, гирлянды бумажных фонариков (главный свет — тёплые фонари над жаровней, второй — холодные сумерки), выставочный павильон
   с куполом, коровник, флагшток, толпа-силуэты с фонарями, оркестрик на помосте (труба, барабан). Дорожный указатель на столбе — герой-предмет: стрелки
   «BUFFALO 12 mi», «EDEN», и главная — «HAMBURG, N.Y.». Ларёк «MENCHES BROS.»: двое усатых братьев в котелках у жаровни, табличка «SAUSAGE — SOLD OUT», рядом
   поднос котлет в булках. Том-сыщик (sleuth). По словам: «братья Менчес» — братья машут лопатками, котлеты шипят; «в городке…» — камера
   ползёт к указателю, пауза-интрига; «Гамбург, штат Нью-Йорк!» — указатель вспыхивает, Том тычет в него, конфетти; «Вот и разгадка?» — над Томом огромный «?»,
   фонари мигают. Переход В сцену: кадр разворачивается, как дорожный указатель, вокруг вертикальной оси. */
(() => {
  EV.mn_bros = wtw('s5', 'братья');
  EV.mn_town = wtw('s5', 'городке…');
  EV.mn_ham = wtw('s5', 'Гамбург,');
  EV.mn_q = wtw('s5', 'разгадка?');
  SHAKES.push([EV.mn_ham + 0.05, 0.2, 9]);
  KEYW.push('Гамбург,', 'разгадка?');

  function dusk(t) {                                                    // (lay 20 ≈ экран) небо-сумерки, звёзды, павильон с куполом, коровник, флагшток
    vgrad(-200, 1100, ['#1e1a48', '#4a2a6a', '#a8507a', '#f0a070']); const r = rng(20000); for (let i = 0; i < 40; i++) { const x = r() * 1080, y = r() * 500, tw = 0.5 + 0.5 * Math.sin(t * 3 + i); ell(x, y, 2, 2, { wash: '#ffffff', washA: 0.4 + tw * 0.5, line: false }); }
    ell(880, 240, 40, 40, { wash: '#f8f0d0', washA: 0.9, line: false });
    sil([[-200, 820], [300, 790], [700, 810], [1300, 780], [1300, 1100], [-200, 1100]], '#2a2a4a', 1);
    push(560, 820, 1); rect(-260, -180, 520, 180, { wash: '#e8dcc8', washA: 1, w: 2, col: '#3a2a3a' }); ell(0, -180, 120, 110, { wash: '#c8b8a8', washA: 1, w: 2, col: '#3a2a3a' }); rect(-280, -190, 560, 20, { wash: '#a8988a', washA: 1, w: 1.6 }); for (let i = 0; i < 6; i++) rect(-230 + i * 84, -150, 40, 120, { wash: '#ffd890', washA: 0.85, w: 1.2, col: '#3a2a3a' }); txt('EXHIBITION HALL', 0, -10, 24, { font: 'Osw', col: '#3a2a3a' }); pencil([[0, -290], [0, -360]], { w: 3, col: '#3a2a3a', pass2: false }); poly([[0, -360], [50 + Math.sin(t * 4) * 6, -350], [0, -336]], { wash: '#c81e14', washA: 1, w: 1 }); pop();
    push(80, 830, 1); rect(-110, -150, 220, 150, { wash: '#8a2a1e', washA: 1, w: 2, col: '#2a0a04' }); poly([[-130, -150], [0, -230], [130, -150]], { wash: '#4a1a14', washA: 1, w: 2 }); txt('CATTLE', 0, -70, 26, { font: 'Osw', col: '#f4e8c8' }); pop();
    for (let i = 0; i < 18; i++) { const x = -150 + i * 80, y = 860 + (i % 3) * 14; sil([[x - 14, y], [x - 12, y - 60], [x, y - 76], [x + 12, y - 60], [x + 14, y]], '#1a1a30', 0.9); if (i % 4 === 0) { ell(x + 18, y - 70, 6, 8, { wash: '#ffd070', washA: 1, line: false }); glow(x + 18, y - 70, 20, 'rgba(255,200,90,1)', 0.3); } }
  }
  function fairground(t) {                                              // (lay 4) гирлянды фонариков, оркестрик на помосте, указатель-столб
    for (let g = 0; g < 2; g++) { const y0 = 380 + g * 120; for (let i = 0; i < 14; i++) { const x = -200 + i * 110, sg = Math.sin(i * 0.9 + g) * 30; pencil([[x, y0 + sg], [x + 110, y0 + Math.sin((i + 1) * 0.9 + g) * 30]], { w: 2, col: '#1a1020', pass2: false }); const on = t > EV.mn_q ? Math.sin(t * 10 + i) > 0 : 1; ell(x + 55, y0 + sg + 30, 16, 22, { wash: ['#ff8a3a', '#ffd040', '#ff5a6a'][(i + g) % 3], washA: on ? 1 : 0.4, w: 1.2, col: '#3a1a0a' }); } }
    push(180, 1180, 1); rect(-170, -40, 340, 40, { wash: '#6a4424', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 8; i++) poly([[-170 + i * 42, -40], [-128 + i * 42, -40], [-149 + i * 42, -10]], { wash: i % 2 ? '#f4e8c0' : '#2a4a8a', washA: 1, line: false });
    human(-90, -40, 0.85, t, { body: '#2a3a7a', legs: '#2a2a2a', hair: '#3a2a1a', face: 'calm', armL: 'up', armR: 'up', look: 0.4, seed: 20010, hat: 'cap', hatCol: '#2a3a7a', trim: '#e8c040' }); push(-60, -320, 0.85); poly([[0, 0], [70, -8], [110, -40], [110, 30], [70, 8]], { wash: '#e8c040', washA: 1, w: 1.4, col: '#6a4a08' }); pop();
    human(80, -40, 0.85, t, { body: '#2a3a7a', legs: '#2a2a2a', hair: '#8a5a2a', face: 'smile', armL: 'swing', armR: 'swing', look: -0.2, seed: 20011, hat: 'cap', hatCol: '#2a3a7a', trim: '#e8c040' }); push(80, -150, 0.85); ell(0, 0, 50, 40, { wash: '#f4f0e8', washA: 1, w: 2, col: '#c81e14' }); rect(-50, -10, 100, 30, { wash: '#c81e14', washA: 1, line: false }); pop();
    for (let i = 0; i < 3; i++) { const q = (t * 0.8 + i / 3) % 1; txt('♪', -40 + i * 40 + Math.sin(t + i) * 20, -360 - q * 120, 40, { font: 'Hand', col: '#fff0c0', a: 1 - q }); } pop();
  }
  function signpost(t) {                                                // (lay 2.2) дорожный указатель — герой-предмет
    push(830, 1300, 1); const p = rect(-16, -900, 32, 900, { wash: '#6a4424', washA: 1, w: 2.4, col: '#1a0a04', key: 20020 }); hatch(p.path, p.bb, { gap: 5, a: 0.25, col: '#2a1408', ang: 1.5, key: 20021, w: 1 });
    const flash = t > EV.mn_ham ? popK(t, EV.mn_ham, 0.4) : 0, spin = t > EV.mn_ham && t < EV.mn_ham + 0.5 ? Math.sin((t - EV.mn_ham) * 12.5) * 0.25 : 0;
    for (const [y, lab, dir, w0] of [[-820, 'BUFFALO 12 mi', 1, 280], [-700, 'EDEN 9 mi', -1, 240]]) { push(0, y, 1); poly([[0, -34], [dir * w0, -34], [dir * (w0 + 40), 0], [dir * w0, 34], [0, 34]], { wash: '#e8dcc0', washA: 1, w: 2, col: '#3a2a1a' }); txt(lab, dir * w0 / 2, 12, 30, { font: 'Osw', col: '#3a2a1a' }); pop(); }
    push(0, -540, 1 + flash * 0.15, spin); const sg = poly([[-40, -60], [-380, -60], [-430, 0], [-380, 60], [-40, 60]], { wash: flash ? '#ffe070' : '#f4e8c0', washA: 1, w: 3, col: '#3a1a0a', key: 20022 }); shadeG(sg.path, -430, 0, -40, 0, '#a87a3a', 0.3); txt('HAMBURG, N.Y.', -230, 18, 48, { font: 'Osw', col: '#a8221a' }); for (const x of [-60, -360]) ell(x, 0, 6, 6, { wash: '#3a3a3a', washA: 1, line: false });
    if (flash) { for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283, q = clamp((t - EV.mn_ham) / 0.6); pencil([[-230 + Math.cos(a) * (230 + q * 60), Math.sin(a) * (90 + q * 30)], [-230 + Math.cos(a) * (260 + q * 90), Math.sin(a) * (110 + q * 40)]], { w: 6, col: '#fff0a0', a: 1 - q, pass2: false }); } }
    pop(); lightPool(-200, -540, 360, 160, 'rgba(255,200,110,1)', 0.18); pop();
  }
  function stand(t) {                                                   // (lay 1.7) ларёк братьев Менчес: вывеска, жаровня, братья в котелках, «SAUSAGE SOLD OUT»
    push(250, 1330, 1); const roof = poly([[-280, -480], [280, -480], [310, -400], [-310, -400]], { wash: '#c81e14', washA: 1, w: 2, col: '#4a0a08', key: 20030 }); for (let i = 0; i < 9; i++) poly([[-280 + i * 62, -480], [-250 + i * 62, -480], [-246 + i * 68, -400], [-276 + i * 68, -400]], { wash: '#f4ece0', washA: 1, line: false });
    rect(-210, -560, 420, 80, { wash: '#2a2a28', washA: 1, w: 3, col: '#c8a050' }); txt('MENCHES BROS.', 0, -508, 44, { font: 'Osw', col: '#ffd040' }); for (const sd of [-1, 1]) rect(sd * 270 - 10, -400, 20, 400, { wash: '#6a4424', washA: 1, w: 1.6 });
    const busy = t > EV.mn_bros; for (const [x, sd] of [[-110, 20040], [100, 20041]]) { human(x, -80, 1.0, t, { body: '#f4f0e8', legs: '#2a2a2a', hair: '#3a2a1a', face: t > EV.mn_ham ? 'grin' : busy ? 'smile' : 'calm', armL: busy ? 'wave' : 'hold', armR: 'hold', look: x < 0 ? 0.3 : -0.3, seed: sd, flip: x < 0 ? 1 : -1, beard: null }); hat20(x, -80, 1.0, 'boater', '#e8d8a0'); stache(x, -80, 1.0, x < 0 ? 1 : -1); }
    rect(-230, -100, 460, 100, { wash: '#8a5a2a', washA: 1, w: 2, col: '#2a1408' }); rect(-200, -130, 260, 30, { wash: '#2a2a2e', washA: 1, w: 1.6 }); for (let i = 0; i < 4; i++) pattyRock(-170 + i * 64, -130, 26, 12, 20042 + i * 3); for (let i = 0; i < 3; i++) { const q = (t * 0.7 + i / 3) % 1; ell(-120 + i * 70, -150 - q * 90, 12 + q * 20, 8 + q * 8, { wash: '#e8e0f0', washA: 0.5 * (1 - q), line: false }); } glow(-70, -120, 140, 'rgba(255,140,60,1)', 0.25);
    push(150, -150, 1, 0.08); rect(-70, -40, 140, 70, { wash: '#f4efe0', washA: 1, w: 1.6, col: '#3a2a1a' }); txt('SAUSAGE', 0, -10, 20, { font: 'Osw', col: '#3a2a1a' }); txt('SOLD OUT', 0, 18, 22, { font: 'Osw', col: '#c81e10' }); pop();
    pop();
  }
  function counter(t) {                                                 // перед Томом: перила ярмарки, поднос «бургеров», путеводитель, лимонад, кукурузный початок
    const c = rect(-300, 1440, 1700, 600, { wash: '#7a5434', washA: 1, w: 3, col: '#2a1408', key: 20050 }); shadeG(c.path, 0, 1440, 0, 1700, '#1a0a14', 0.55); for (let i = 0; i < 20; i++) pencil([[-300 + i * 90, 1460], [-300 + i * 90, 2000]], { w: 3, col: '#4a2a14', a: 0.5, pass2: false }); pencil([[-300, 1450], [1400, 1450]], { w: 8, col: '#a87a4a', pass2: false });
    push(330, 1450, 1); ell(0, 0, 170, 28, { wash: '#c8ccd2', washA: 1, w: 2, col: '#4a4e58' }); for (let i = 0; i < 3; i++) burger(-110 + i * 110, -6, 0.32, t, { key: 20051 + i * 40, shadow: false }); pop();
    push(940, 1450, 1); rect(-30, -90, 60, 90, { wash: '#f4f0a0', washA: 0.6, w: 1.6, col: '#5a5a3a' }); ell(0, -90, 30, 8, { wash: '#f4f0a0', washA: 0.8, w: 1 }); pencil([[6, -90], [20, -140]], { w: 4, col: '#c81e10', pass2: false }); ell(-8, -60, 10, 3, { wash: '#ffffff', washA: 0.6, line: false }); pop();
    push(1120, 1460, 1, -0.2); ell(0, 0, 16, 60, { wash: '#f4c840', washA: 1, w: 1.4, col: '#8a6a10' }); for (let i = 0; i < 6; i++) pencil([[-12, -46 + i * 16], [12, -46 + i * 16]], { w: 1, col: '#c8a020', pass2: false }); blob([[-16, 40], [-30, 90], [0, 70], [30, 90], [16, 40]], { wash: '#8ab040', washA: 1, w: 1.2 }); pop();
    castShadow(620, 1450, 260, 160, 0.6, 0.28); lightPool(560, 1450, 600, 90, 'rgba(255,190,110,1)', 0.3);
  }
  function front(t) {                                                   // передний план: фонарик на проводе сверху, конфетти, перила
    push(80, -60, 1.5); pencil([[0, -200], [0, 0]], { w: 2, col: '#1a1a1a', pass2: false }); const l = ell(0, 40, 50, 60, { wash: '#ff8a3a', washA: 0.95, w: 2, col: '#5a2a0a' }); for (let i = -2; i <= 2; i++) pencil([[i * 18, -14], [i * 22, 96]], { w: 1.2, col: '#5a2a0a', a: 0.5, pass2: false }); glow(0, 40, 110, 'rgba(255,160,70,1)', 0.35); pop();
    if (t > EV.mn_ham) { const k = clamp((t - EV.mn_ham) / 1.6); for (let i = 0; i < 30; i++) { const r = rng(20060 + i); push(r() * 1100, -100 + k * (900 + r() * 900), 1, t * 4 + i); rect(-8, -4, 16, 8, { wash: ['#ff5a6a', '#ffd040', '#3ae0d0', '#ffffff'][i % 4], washA: 1 - k * 0.6, line: false }); pop(); } }
  }
  WORLD.menches = (t, u, cat) => {
    lay(20, () => { dusk(t); });
    lay(4, () => { fairground(t); haze('#6a3a7a', 0.06); });
    lay(2.2, () => { signpost(t); });
    lay(1.7, () => { stand(t); });
    lay(1, () => { cat(); counter(t); });
    lay(0.6, () => { front(t); motes(18, [-200, 300, 1300, 1500], '#ffd8a0', t, 20070, { sp: 8, sz: 3, a: 0.6, add: 1, wob: 8 }); moodDark(600, 1000, 450, 1450, '#1a0a2a', 0.5); });
  };
  DIR.menches = {
    outfit: 'sleuth', light: { side: -1, rim: '#ffb070' }, grade: ['#a870a8', 0.08],
    act: () => [[S0.menches, 'talk'], [EV.mn_bros, 'grin'], [EV.mn_town, 'suspicious'], [EV.mn_ham, 'shock'], [EV.mn_ham + 0.5, 'proud'], [EV.mn_q, 'sideeye']],
    pose: (t, u, b) => { const pt = t > EV.mn_ham && t < EV.mn_q;
      return Object.assign(b, { x: 640, y: 1590, s: 1.18, flip: 1, look: t < EV.mn_town ? [-0.7, -0.3] : t < EV.mn_q ? [-0.8, -0.9] : [0.1, -0.1],
        point: pt ? 1 : undefined, hand: pt ? [-230, -560] : t > EV.mn_q ? [60, -380] : [190, -260], prop: pt ? undefined : t > EV.mn_q ? undefined : 'burgerP', propAng: 0.1, handF: t > EV.mn_q ? [-80, -420] : [-120, -220], tailUp: pt, sweat: t > EV.mn_q }); },
    afterCat: (t, u, P) => { if (t > EV.mn_q) { const k = popK(t, EV.mn_q, 0.4); push(P.x + 20 * P.s, P.y - 720 * P.s, k, Math.sin(t * 3) * 0.08); txt('?', 0, 0, 220, { font: 'Osw', col: '#ffd040' }); pop(); } },
    cam: () => [[S0.menches, 400, 1000, 0.2], [S0.menches + 0.5, 420, 1060, 0.26, 'x'], [EV.mn_town, 640, 900, 0.22], [EV.mn_ham, 720, 880, 0.28, 'x'], [EV.mn_q, 640, 1020, 0.26], [S1.menches, 640, 1040, 0.28]]
  };
  // ---------------------------------------------------------------- переход: кадр переворачивается, как дорожный указатель, вокруг вертикальной оси
  TRANS_IN.menches = { a: 0.25, b: 0.35, runA: 1, fx(k, t, A, B) {
    const half = k < 0.5, sx = half ? Math.cos(k * 3.14) : -Math.cos(k * 3.14); screenFill('#1a1028', 1);
    scr(() => { ctx.save(); ctx.translate(540, 960); ctx.scale(Math.max(0.02, sx), 1 - (1 - sx) * 0.06); ctx.translate(-540, -960); drawBuf(half ? A : B, 1, 540, 960); ctx.restore(); pencil([[540 - 540 * sx, 960], [540 + 540 * sx, 960]], { w: 6, col: '#ffd040', a: 1 - sx, pass2: false }); });
  } };
})();
