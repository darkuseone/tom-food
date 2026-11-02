/* 012 — `secret`: «Рецепт хранили хитро: вместо гирь — камешки и железки, спрятанные от чужих.» Ночная кладовая мастера-пряничника при свече: полки с
   горшками мёда, мешки муки и пряностей (корица, гвоздика, имбирь), связки сушёных трав, окно с луной, ключи на гвозде, кот хозяина на мешке. Седой мастер
   в фартуке у весов, рядом — сундучок с камешками. Том-сыщик (тренч + охотничья шапка) подглядывает из-за бочки.
   По словам: «вместо гирь» — обычные гири с цифрами перечёркиваются красным; «камешки и железки» — мастер кладёт их на чашу; «спрятанные» — мастер прячет
   сундучок под половицу, щёлкает замок, Том прижимает палец к губам. Переход В сцену: свеча гаснет — тьма, дымок — новая свеча вспыхивает. */
(() => {
  EV.sc_gir = wtw('s5', 'гирь');
  EV.sc_peb = wtw('s5', 'камешки');
  EV.sc_hide = wtw('s5', 'спрятанные');
  SHAKES.push([EV.sc_hide + 0.4, 0.15, 6]);
  KEYW.push('гирь', 'камешки');

  function room(t) {                                                    // бревенчатая кладовая, окно с луной, полки, травы, ключи
    vgrad(-600, 1500, ['#0e0a10', '#2a1c14', '#3a2818']);
    for (let y = -500; y < 1300; y += 70) { const lg = rect(-400, y, 2000, 66, { wash: '#3a2614', washA: 1, w: 2, col: '#140a04' }); shadeG(lg.path, 0, y + 66, 0, y, '#140a04', 0.5); }
    push(860, 300, 1); const w = rect(-120, -150, 240, 260, { wash: '#101830', washA: 1, w: 6, col: '#2a1408', key: 12700 }); ctx.save(); ctx.clip(w.path); vgrad(-150, 110, ['#0a1028', '#2a3058']); ell(40, -70, 34, 34, { wash: '#f4f0d8', washA: 1, w: 1.4 }); glow(40, -70, 120, 'rgba(230,230,200,1)', 0.5); motes(10, [-120, -150, 120, 110], '#ffffff', t, 12701, { sp: 0, sz: 2, a: 0.8, tw: 1 }); ctx.restore(); pencil([[0, -150], [0, 110]], { w: 6, col: '#2a1408' }); pencil([[-120, -20], [120, -20]], { w: 6, col: '#2a1408' }); pop();
    rays(860, 300, 2.3, 0.3, 1400, 'rgba(180,200,255,1)', 0.08, 4, t);
    for (const y of [380, 620]) { rect(-380, y, 860, 20, { wash: '#4a2a10', washA: 1, w: 2, col: '#140804' }); for (let i = 0; i < 7; i++) { const x = -330 + i * 118, r = rng(12710 + i + y); if (i % 3 === 0) { const j = shape(spline([[-36, 0], [-46, -70], [-26, -110], [26, -110], [46, -70], [36, 0]], true, 6).map(([a, b]) => [a + x, b + y]), { wash: '#a8643a', washA: 1, w: 2, col: '#2a0a04' }); rect(x - 30, y - 120, 60, 16, { wash: '#e8dcc0', washA: 1, w: 1.4 }); txt('мёдъ', x, y - 60, 18, { font: 'Hand', col: '#f4e6c8' }); }
      else if (i % 3 === 1) { const b = rect(x - 40, y - 100, 80, 100, { wash: '#c8b088', washA: 1, w: 2, col: '#3a2a1a' }); txt(['корица', 'гвоздика', 'имбирь', 'мята', 'анисъ'][i % 5], x, y - 50, 16, { font: 'Hand', col: '#4a2a10' }); } else { for (let k = 0; k < 3; k++) ell(x - 30 + k * 30, y - 16, 14, 16, { wash: ['#8a4a1a', '#5a2a0a', '#c88a3a'][k], washA: 1, w: 1 }); } } }
    for (let i = 0; i < 5; i++) { const x = -260 + i * 90; pencil([[x, -120], [x + 4, 140]], { w: 2, col: '#6a5a3a', pass2: false }); for (let k = 0; k < 6; k++) blob([[x, -60 + k * 30], [x - 20, -40 + k * 30], [x + 6, -30 + k * 30]], { wash: ['#5a7a2a', '#8a6a3a'][i % 2], washA: 1, w: 1, col: '#2a3a1a' }); }
    push(560, 200, 1); pencil([[0, 0], [0, 30]], { w: 4, col: '#3a3a3a', pass2: false }); for (let i = 0; i < 3; i++) { push(-20 + i * 20, 40, 1, (i - 1) * 0.3); ell(0, 0, 10, 10, { line: true, w: 3, col: '#c8a050' }); pencil([[0, 10], [0, 60]], { w: 4, col: '#c8a050', pass2: false }); pop(); } pop();
  }
  function master(t) {                                                  // мастер у весов: гири с цифрами, сундучок, половица, кот на мешке
    const hide = t > EV.sc_hide;
    human(700, 1360, 1.15, t, { body: '#4a3a2a', legs: '#2a2a2a', hair: '#d8d0c0', beard: 'long', face: hide ? 'smile' : 'calm', armL: 'hold', armR: t > EV.sc_peb && !hide ? 'point' : 'hold', look: 0.4, seed: 12720, long: 1 });
    push(700, 1360 - 70, 1.15); rect(-46, -160, 92, 160, { wash: '#efe6d0', washA: 1, w: 1.6, col: '#6a5a3a' }); pop();
    push(80, 1380, 1); const sk = shape(spline([[-80, 0], [-90, -120], [-60, -170], [60, -170], [90, -120], [80, 0]], true, 6), { wash: '#c8b088', washA: 1, w: 2, col: '#3a2a1a' }); txt('МУКА', 0, -80, 26, { font: 'Osw', col: '#6a3a10' }); push(0, -170, 0.8); blob([[-40, 0], [-36, -40], [0, -54], [36, -40], [40, 0]], { wash: '#3a3a3a', washA: 1, w: 2 }); for (const sd of [-1, 1]) poly([[sd * 30, -40], [sd * 40, -70], [sd * 14, -50]], { wash: '#3a3a3a', washA: 1, w: 1.6 }); for (const sd of [-1, 1]) ell(sd * 14, -26, 6, 4, { wash: '#e8d040', washA: 1, line: false }); pop(); pop();
  }
  function table(t) {                                                   // стол с весами; гири перечёркнуты; камешки на чашу; сундучок прячут
    const tb = rect(-400, 1440, 1900, 800, { wash: '#4a2a12', washA: 1, w: 3, col: '#140804', key: 12730 }); shadeG(tb.path, 0, 1900, 0, 1440, '#140804', 0.5); for (let i = 0; i < 6; i++) pencil([[-400, 1470 + i * 70], [1500, 1474 + i * 70]], { w: 2, col: '#2a1408', a: 0.5, pass2: false });
    const pe = t > EV.sc_peb, tilt = pe ? lerp(-0.2, 0, popK(t, EV.sc_peb + 0.2, 0.5)) : -0.2;
    balance(520, 1450, 0.8, t, tilt, (px, py) => { push(px, py - 6, 1); rect(-50, -40, 100, 40, { wash: '#efe2c0', washA: 1, w: 1.4, col: '#6a5a3a' }); txt('мука', 0, -14, 16, { font: 'Hand', col: '#4a2a10' }); pop(); }, (px, py) => { if (pe) pebbles(px, py - 4, 7, 12731, 1.6); });
    if (t > EV.sc_gir - 0.3) { const k = popK(t, EV.sc_gir - 0.3, 0.4); for (let i = 0; i < 3; i++) { const x = 40 + i * 80, h = 60 - i * 12; push(x, 1470, k); const g = shape([[-30, 0], [-26, -h], [26, -h], [30, 0]], { wash: '#5a5a62', washA: 1, w: 2, col: '#1a1a1a' }); metalG(g.path, -10, -h / 2, 40, '#a8a8b0', '#5a5a62', '#1a1a1a'); ell(0, -h, 12, 6, { wash: '#3a3a3a', washA: 1, w: 1.4 }); txt(['1 ф.', '½ ф.', '¼ ф.'][i], 0, -h / 2 + 6, 16, { font: 'Osw', col: '#f4e6c8' }); pop(); }
      if (t > EV.sc_gir) { const q = clamp((t - EV.sc_gir) / 0.3); pencil([[0, 1360], [lerp(0, 240, q), lerp(1360, 1480, q)]], { w: 9, col: '#d9282a', pass2: false }); pencil([[240, 1360], [lerp(240, 0, q), lerp(1360, 1480, q)]], { w: 9, col: '#d9282a', pass2: false }); } }
    const hk = clamp((t - EV.sc_hide) / 0.6); push(lerp(330, 380, hk), 1530 + hk * 60, 1); if (hk < 1) { const bx = rect(-70, -60, 140, 60, { wash: '#6a3a14', washA: 1, w: 2.4, col: '#1a0a04' }); pencil([[-70, -60], [70, -60]], { w: 6, col: '#c8a050', pass2: false }); rect(-10, -40, 20, 20, { wash: '#c8a050', washA: 1, w: 1.4 }); if (t < EV.sc_hide) pebbles(0, -64, 6, 12732, 1.0); } pop();
    if (t > EV.sc_hide) { const fb = clamp((t - EV.sc_hide - 0.4) / 0.3); push(380, 1610, 1); rect(-120, -16, 240, 32, { wash: '#3a1a08', washA: 1, w: 2, col: '#0a0400' }); poly([[-120, -16], [120, -16], [120 - fb * 0, -16 - (1 - fb) * 50], [-120, -16 - (1 - fb) * 50]], { wash: '#5a3014', washA: 1, w: 2, col: '#0a0400' }); pop(); if (fb >= 1) bubbleTag('ТАЙНА!', 400, 1500, t, EV.sc_hide + 0.75, '#2a2a3a', 44, -0.06); }
    candle(250, 1440, 1.2, t, 12733); candle(300, 1440, 0.9, t, 12734);
  }
  function front(t) {                                                   // передний план: бочка слева, из-за которой подглядывает Том; паутина; пыль в свете свечи
    push(-60, 2000, 1.6); const b = shape(spline([[-110, 0], [-130, -150], [-110, -300], [110, -300], [130, -150], [110, 0]], true, 6), { wash: '#5a3414', washA: 1, w: 2.6, col: '#0a0400' }); shadeG(b.path, 120, 0, -80, 0, '#1a0a04', 0.5); for (const y of [-50, -250]) pencil([[-120, y], [120, y]], { w: 8, col: '#2a2a2a', pass2: false }); pop();
    for (let i = 0; i < 6; i++) pencil([[1100, 0], [1100 - 60 - i * 26, 140 - i * 20]], { w: 1, col: '#c8c0b0', a: 0.4, pass2: false }); for (let k = 1; k < 4; k++) pencil(Array.from({ length: 7 }, (_, i) => [1100 - k * 30 - i * k * 8, k * 40 - i * k * 6]), { w: 1, col: '#c8c0b0', a: 0.35, pass2: false });
    motes(30, [300, 900, 900, 1600], '#ffd890', t, 12740, { sp: 6, sz: 4, a: 0.5, wob: 2 }); glow(620, 1350, 500, 'rgba(255,180,90,1)', 0.18);
  }
  WORLD.secret = (t, u, cat) => {
    lay(12, () => { room(t); haze('#1a1008', 0.12); });
    lay(2.6, () => { master(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { table(t); });
    lay(0.6, () => { front(t); });
    screenFill('#ff9a40', 0.06, 'soft-light');
  };
  DIR.secret = {
    outfit: 'sleuth', light: { side: -1, rim: '#ffb060' }, grade: ['#ff8a30', 0.16],
    act: () => [[S0.secret, 'suspicious'], [EV.sc_gir, 'sideeye'], [EV.sc_peb, 'awe'], [EV.sc_hide, 'smug'], [EV.sc_hide + 0.6, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 840, y: 1720, s: 1.05, flip: -1, look: t < EV.sc_hide ? [-0.8, 0.4] : [0, 0], tilt: -0.06, hand: t > EV.sc_hide + 0.5 ? [-10, -350] : [160, -260], handF: [-80, -220], point: t > EV.sc_hide + 0.5 ? 1 : undefined }),
    cam: () => [[S0.secret, 600, 1000, 0.1], [EV.sc_gir - 0.2, 360, 1260, 0.22, 'x'], [EV.sc_peb, 560, 1260, 0.22], [EV.sc_hide, 500, 1300, 0.24], [S1.secret, 620, 1240, 0.26]]
  };
  // ---------------------------------------------------------------- переход: свеча гаснет — тьма — новая свеча вспыхивает
  TRANS_IN.secret = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const dark = Math.sin(clamp(k) * Math.PI); drawBuf(k < 0.5 ? A : B, 1, 540, 960);
    scr(() => { ctx.fillStyle = '#000000'; ctx.globalAlpha = Math.min(1, dark * 1.3); ctx.fillRect(0, 0, W, H); ctx.globalAlpha = 1;
      if (k < 0.5) { const q = k * 2; for (let i = 0; i < 4; i++) pencil(spline([[540, 1100], [540 + Math.sin(q * 6 + i) * 60, 1100 - q * 300 - i * 40], [540 + Math.sin(q * 9 + i) * 80, 1100 - q * 600 - i * 60]], false, 6), { w: 10, col: '#c8c8c8', a: 0.5 * (1 - q), pass2: false }); }
      else { const q = (k - 0.5) * 2; glow(540, 1100, 200 + q * 600, 'rgba(255,190,90,1)', 0.6 * (1 - q)); } });
  } };
})();
