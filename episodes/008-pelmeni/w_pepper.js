/* 008 — `pepper`: «Улика — чёрный перец в фарше. На Урале он не растёт!» Кабинет детектива-нуар: жалюзи с полосами света, пробковая доска с фото пельменя,
   цзяоцзы и карты, красные нити между кнопками, настольная лампа, кружка. На столе — разрезанный пельмень; на «чёрный перец» Том-сыщик наводит лупу, в линзе —
   крупные горошины перца, бирка УЛИКА №1; на «не растёт» в окне — заснеженный уральский лес, а горшок с перцем дрожит в сугробе и сникает. Штамп УЛИКА.
   Переход В сцену: красная нить натягивается между кнопками через весь кадр, и прошлая сцена падает вниз. */
(() => {
  EV.pp_pep = wtw('s3', 'чёрный');
  EV.pp_ural = wtw('s3', 'Урале');
  EV.pp_no = wtw('s3', 'растёт!');
  SHAKES.push([EV.pp_no + 0.1, 0.2, 9]);
  KEYW.push('растёт!');

  function office(t) { vgrad(-600, 1500, ['#1a1a22', '#2a2a34', '#3a3440']); const w = rect(560, 160, 500, 600, { wash: '#0a1020', washA: 1, w: 8, col: '#1a1410', key: 10000 }); ctx.save(); ctx.clip(w.path); const sn = t > EV.pp_ural - 0.2; vgrad(160, 760, sn ? ['#8aa0b8', '#c8d4e0', '#eef2f6'] : ['#0a1020', '#141a2a', '#1a2030']); if (sn) { for (let i = 0; i < 6; i++) spruce(600 + i * 80, 760, 260, '#2a4a3a', 1); motes(40, [560, 160, 1060, 760], '#ffffff', t, 10001, { sp: 70, sz: 4, a: 0.9 }); } ctx.restore();
    for (let i = 0; i < 12; i++) pencil([[560, 190 + i * 48], [1060, 190 + i * 48]], { w: 12, col: '#3a3028', a: 0.85, pass2: false }); ctx.save(); ctx.globalCompositeOperation = 'lighter'; for (let i = 0; i < 6; i++) { ctx.fillStyle = 'rgba(255,240,200,0.05)'; ctx.beginPath(); ctx.moveTo(560, 200 + i * 96); ctx.lineTo(1060, 200 + i * 96); ctx.lineTo(500, 1400 + i * 60); ctx.lineTo(-200, 1400 + i * 60); ctx.fill(); } ctx.restore();
    const b = rect(40, 560, 460, 380, { wash: '#b8885a', washA: 1, w: 6, col: '#4a2a10', key: 10010 }); const pins = [[120, 640], [380, 620], [250, 800], [440, 860], [100, 880]]; for (let i = 0; i < pins.length - 1; i++) pencil([pins[i], pins[i + 1]], { w: 2.4, col: '#d9282b', pass2: false });
    push(120, 690, 1, -0.08); rect(-60, -50, 120, 100, { wash: '#f6f2ea', washA: 1, w: 2, col: '#6a6a6a' }); pelmen(0, 0, 0.9, 0, { cook: true }); pop(); push(380, 670, 1, 0.06); rect(-60, -50, 120, 100, { wash: '#f6f2ea', washA: 1, w: 2, col: '#6a6a6a' }); jiaozi(0, 0, 0.9, 0); pop(); push(250, 840, 1, -0.04); rect(-70, -40, 140, 80, { wash: '#efe0b8', washA: 1, w: 2, col: '#6a6a6a' }); txt('?', 0, 20, 50, { font: 'Osw', col: '#d9282b' }); pop();
    for (const [x, y] of pins) ell(x, y, 8, 8, { wash: '#d9282b', washA: 1, w: 1.4 }); }
  function desk(t) { const d = rect(-300, 1320, 1700, 700, { wash: '#4a3020', washA: 1, w: 3, col: '#1a0a04', key: 10020 }); shadeG(d.path, 540, 1320, 540, 1800, '#1a0a04', 0.5);
    push(200, 1320, 1); pencil([[0, 0], [60, -200], [150, -230]], { w: 10, col: '#2a5a3a' }); poly([[110, -250], [210, -250], [240, -180], [80, -180]], { wash: '#2a5a3a', washA: 1, w: 2 }); glow(160, -160, 260, 'rgba(255,230,160,1)', 0.5); pop();
    push(540, 1360, 1.4); pelmen(-30, 0, 1, -0.2, { cook: true }); blob([[0, -30], [40, -36], [60, 0], [40, 26], [0, 20]], { wash: PL.meat, washA: 1, w: 2, col: '#4a2010' }); peppercorns(30, -4, 0.5, 6, 10030); pop();
    if (t > EV.pp_pep - 0.2) { const k = popK(t, EV.pp_pep - 0.2, 0.4); push(600, 1180, k); const l = ell(0, 0, 150, 150, { wash: '#f2ead8', washA: 1, w: 12, col: '#c8a040' }); ctx.save(); ctx.clip(l.path); blob([[-150, -40], [80, -80], [150, 40], [-40, 120], [-150, 80]], { wash: PL.meat, washA: 1, line: false }); peppercorns(0, 0, 3.2, 8, 10040); ctx.restore(); pencil([[100, 100], [200, 220]], { w: 22, col: '#3a2a1a' }); pop();
      push(820, 1020, 1, 0.1); rect(-90, -34, 180, 68, { wash: '#f6eed8', washA: 1, w: 2, col: '#6a5a3a' }); txt('УЛИКА №1', 0, 12, 34, { font: 'Osw', col: '#2a2a2a' }); pencil([[-90, 0], [-160, 60]], { w: 2, col: '#6a5a3a', pass2: false }); pop(); }
    if (t > EV.pp_ural) { const sag = clamp((t - EV.pp_no) / 0.6); push(860, 700, 1); ell(0, 40, 80, 20, { wash: '#ffffff', washA: 1, w: 2, col: '#a8b8c8' }); rect(-36, -20, 72, 60, { wash: '#b8683a', washA: 1, w: 2, col: '#4a1a08' }); pencil(spline([[0, -20], [lerp(4, 30, sag), -80], [lerp(0, 50, sag), lerp(-140, -60, sag)]], false, 5), { w: 5, col: '#4a6a2a', pass2: false }); for (let i = 0; i < 3; i++) ell(lerp(0, 40, sag) + i * 10 - 10, lerp(-120, -60, sag) + i * 14, 10, 6, { wash: '#4a8a2a', washA: 1, line: false }); if (t > EV.pp_no) { pencil([[-60, -160], [60, 40]], { w: 10, col: '#d9282b', pass2: false }); pencil([[60, -160], [-60, 40]], { w: 10, col: '#d9282b', pass2: false }); } pop(); }
    quizStamp('УЛИКА', 640, 860, t, EV.pp_no + 0.2, '#5a5a8a', 0.1, 0.8); }
  WORLD.pepper = (t, u, cat) => { lay(10, () => office(t)); lay(1, () => { desk(t); cat(); }); };
  DIR.pepper = {
    outfit: 'sleuth', light: { side: -1, rim: '#ffe0a0' }, grade: ['#3a3a5a', 0.08],
    act: () => [[S0.pepper, 'suspicious'], [EV.pp_pep, 'awe'], [EV.pp_ural, 'sideeye'], [EV.pp_no, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 900, y: 1810, s: 1.1, flip: true, look: t < EV.pp_ural ? [-0.6, 0.5] : [-0.2, -0.9], hand: [170, -300], handF: [-90, -230], prop: 'magnifier', point: t > EV.pp_ural ? 1 : 0 }),
    cam: () => [[S0.pepper, 400, 900, 0.1], [EV.pp_pep, 620, 1250, 0.22, 'x'], [EV.pp_ural, 760, 900, 0.16, 'x'], [S1.pepper, 760, 900, 0.18]]
  };
  // ---------------------------------------------------------------- переход: красная нить натягивается через кадр, и прошлая сцена падает вниз
  TRANS_IN.pepper = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const draw = clamp(k / 0.45), fall = sm(clamp((k - 0.45) / 0.55)); drawBuf(B, 1, 540, 960); scr(() => { ctx.save(); ctx.translate(0, fall * fall * 2200); ctx.rotate(fall * 0.15); ctx.drawImage(A, 0, 0); ctx.restore();
      const pins = [[40, 300], [420, 620], [180, 1000], [760, 1300], [1040, 900]], n = draw * (pins.length - 1); for (let i = 0; i < Math.floor(n); i++) pencil([pins[i], pins[i + 1]], { w: 6, col: '#d9282b', a: 1 - fall, pass2: false });
      const i0 = Math.floor(n), f = n - i0; if (i0 < pins.length - 1) pencil([pins[i0], [lerp(pins[i0][0], pins[i0 + 1][0], f), lerp(pins[i0][1], pins[i0 + 1][1], f)]], { w: 6, col: '#d9282b', pass2: false }); for (const [x, y] of pins) ell(x, y, 14, 14, { wash: '#d9282b', washA: 1 - fall, w: 2 }); });
  } };
})();
