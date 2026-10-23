/* 008 — `lucky`: «А на Новый год в один пельмень прячут сюрприз — на удачу.» Новогодняя кухня: окно со снегом и салютом, ёлка с гирляндой в дверях,
   часы на стене без пяти двенадцать, стол в муке, вся семья лепит пельмени. На «прячут» бабушка, подмигнув, кладёт в один пельмень искорку-сюрприз и
   защипывает; на «на удачу» пельмени на доске перемешиваются, как напёрстки, и один на миг вспыхивает золотом. Том в новогоднем свитере.
   Переход В сцену: салют — вспышка-звезда разрывает прошлый кадр на искры. */
(() => {
  EV.lk_ny = wtw('s7', 'Новый');
  EV.lk_hide = wtw('s7', 'прячут');
  EV.lk_luck = wtw('s7', 'удачу.');
  SHAKES.push([EV.lk_luck + 0.1, 0.15, 6]);
  KEYW.push('сюрприз');

  function kitchen(t) { vgrad(-600, 1500, ['#f2e2c8', '#f6ead6', '#ead8b8']); for (let i = 0; i < 10; i++) pencil([[-300 + i * 180, -300], [-300 + i * 180, 1300]], { w: 30, col: '#e8d0a8', a: 0.5, pass2: false });
    const w = rect(600, 200, 420, 460, { wash: '#14204a', washA: 1, w: 12, col: '#f6f0e2', key: 10400 }); ctx.save(); ctx.clip(w.path); motes(40, [600, 200, 1020, 660], '#ffffff', t, 10401, { sp: 30, sz: 4, a: 0.9 }); for (let i = 0; i < 3; i++) { const k = ((t * 0.7 + i / 3) % 1), cx = 680 + i * 130, cy = 320 + (i % 2) * 80; if (k > 0.2) for (let q = 0; q < 12; q++) { const a = q / 12 * 6.283; ell(cx + Math.cos(a) * k * 90, cy + Math.sin(a) * k * 90, 5, 5, { wash: ['#ff5a5a', '#5ae08a', '#f2d040'][i], washA: 1 - k, line: false }); } } ctx.restore(); pencil([[810, 200], [810, 660]], { w: 8, col: '#f6f0e2' }); pencil([[600, 430], [1020, 430]], { w: 8, col: '#f6f0e2' });
    push(300, 380, 1); ell(0, 0, 100, 100, { wash: '#fbfbf6', washA: 1, w: 6, col: '#5a3a1a' }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; pencil([[Math.cos(a) * 82, Math.sin(a) * 82], [Math.cos(a) * 92, Math.sin(a) * 92]], { w: 3, col: '#2a2a2a', pass2: false }); } pencil([[0, 0], [0, -70]], { w: 6, col: '#2a2a2a', pass2: false }); pencil([[0, 0], [-20, -60]], { w: 4, col: '#2a2a2a', pass2: false }); pop();
    push(60, 1000, 1); for (let i = 0; i < 4; i++) poly([[-120 + i * 18, -80 - i * 140], [0, -240 - i * 140], [120 - i * 18, -80 - i * 140]], { wash: '#2a6a3a', washA: 1, w: 2, col: '#0a2a14' }); for (let i = 0; i < 12; i++) { const on = (Math.floor(t * 4) + i) % 3 === 0; ell(-80 + (i % 4) * 50, -120 - Math.floor(i / 4) * 130, 9, 9, { wash: ['#ff5a5a', '#f2d040', '#5ab0ff'][i % 3], washA: on ? 1 : 0.4, line: false }); if (on) glow(-80 + (i % 4) * 50, -120 - Math.floor(i / 4) * 130, 30, 'rgba(255,240,180,1)', 0.5); } poly([[0, -720], [12, -690], [44, -690], [18, -670], [28, -640], [0, -660], [-28, -640], [-18, -670], [-44, -690], [-12, -690]], { wash: '#f2d040', washA: 1, w: 2, col: '#8a6a0a' }); pop(); }
  function table(t) { const tb = rect(-300, 1180, 1700, 700, { wash: '#c89a64', washA: 1, w: 3, col: '#3a2410', key: 10410 }); for (let i = 0; i < 14; i++) { const r = rng(10420 + i); ell(200 + r() * 600, 1220 + r() * 80, 40 + r() * 40, 10, { wash: '#fbf8f0', washA: 0.6, line: false }); }
    for (let i = 0; i < 3; i++) human(180 + i * 220, 1200, [0.8, 0.84, 0.56][i], t, { body: ['#a8282a', '#2a5a8a', '#f2c838'][i], hair: ['#c8c8c8', '#3a2a1a', '#5a3a1a'][i], face: t > EV.lk_hide && i === 0 ? 'grin' : 'smile', armL: 'hold', armR: (Math.floor(t * 3 + i) % 2) ? 'swing' : 'hold', seed: 1040 + i, long: i === 0 ? 1 : 0, hat: i === 0 ? 'scarf' : null, hatCol: '#f2f2f2', look: 0.3 });
    push(520, 1290, 1); rect(-240, -20, 480, 40, { wash: '#e8c890', washA: 1, w: 2.4, col: '#6a4a1a' }); const sh = clamp((t - EV.lk_luck + 0.4) / 1.0); for (let i = 0; i < 9; i++) { const base = -200 + i * 50, off = Math.sin((sh * 3 + i * 0.7) * Math.PI) * 60 * Math.sin(sh * Math.PI), lucky = i === 4; const glowOn = lucky && t > EV.lk_luck && t < EV.lk_luck + 0.7; if (glowOn) glow(base + off, -30, 70, 'rgba(255,220,90,1)', 0.8); pelmen(base + off, -30, 0.55, 0, { key: i, shine: glowOn }); }
      if (t > EV.lk_hide - 0.1 && t < EV.lk_hide + 0.8) { const k = t - EV.lk_hide + 0.1; for (let q = 0; q < 6; q++) { const a = q / 6 * 6.283 + t * 4; ell(0 + Math.cos(a) * 30 * (1 - k), -60 + Math.sin(a) * 30 * (1 - k), 5, 5, { wash: '#f2d040', washA: 1 - k, line: false }); } } pop();
    if (t > EV.lk_luck) bubbleTag('НА УДАЧУ', 520, 1080, t, EV.lk_luck, '#d6a842', 38, -0.05); }
  WORLD.lucky = (t, u, cat) => { lay(10, () => kitchen(t)); lay(1.3, () => table(t)); lay(1, () => { rect(-300, 1460, 1700, 600, { wash: '#a87a4a', washA: 1, w: 2, col: '#3a2410', key: 10430 }); cat(); }); };
  DIR.lucky = {
    outfit: 'sweater', light: { side: -1, rim: '#ffe0a0' }, grade: ['#e8a060', 0.06],
    act: () => [[S0.lucky, 'talk'], [EV.lk_hide, 'wink'], [EV.lk_luck, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 900, y: 1810, s: 1.1, flip: true, look: [-0.7, 0.2], hand: [170, -320], handF: [-90, -230], prop: 'rollingPinP' }),
    cam: () => [[S0.lucky, 540, 950, 0.1], [EV.lk_hide, 480, 1180, 0.18, 'x'], [EV.lk_luck, 540, 1220, 0.22], [S1.lucky, 540, 1220, 0.24]]
  };
  // ---------------------------------------------------------------- переход: салют — вспышка-звезда разрывает прошлый кадр на искры
  TRANS_IN.lucky = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = sm(k), R = q * 1500; drawBuf(A, 1, 540, 960); inCircle(540, 960, R, () => drawBuf(B, 1, 540, 960));
    scr(() => { for (let i = 0; i < 36; i++) { const a = i / 36 * 6.283, r1 = R + 20, r2 = R + 120 + (i % 3) * 40; pencil([[540 + Math.cos(a) * r1, 960 + Math.sin(a) * r1], [540 + Math.cos(a) * r2, 960 + Math.sin(a) * r2]], { w: 6, col: ['#ff5a5a', '#f2d040', '#5ae08a', '#5ab0ff'][i % 4], a: 1 - q, pass2: false }); } glow(540, 960, 200 + R * 0.3, 'rgba(255,240,180,1)', 0.6 * (1 - q)); });
  } };
})();
