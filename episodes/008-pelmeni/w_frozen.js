/* 008 — `frozen`: «Сибиряки морозили их на улице и брали мешками в тайгу. Правда!» Сибирский зимний двор: изба по окна в сугробах, дым столбом, иней на заборе,
   розовое морозное солнце, тайга стеной. На «на улице» хозяйка выносит на снег доску с рядами пельменей — они покрываются инеем; на «мешками» охотник
   ссыпает их в мешок и кладёт на сани; на «в тайгу» упряжка с санями уходит в лес. На «Правда!» — штамп. Том в шубе. Переход В сцену: порыв ветра несёт
   снежную позёмку через кадр. */
(() => {
  EV.fz_out = wtw('s5', 'улице');
  EV.fz_sack = wtw('s5', 'мешками');
  EV.fz_taiga = wtw('s5', 'тайгу.');
  EV.fz_true = wtw('s5', 'Правда!');
  SHAKES.push([EV.fz_true + 0.1, 0.2, 9]);
  KEYW.push('Правда!');

  function yard(t) { vgrad(-600, 1100, ['#e8b8c8', '#f2d8d8', '#eef2f6']); ell(780, 420, 80, 80, { wash: '#ffd8c0', washA: 1, line: false }); glow(780, 420, 260, 'rgba(255,200,190,1)', 0.5); for (let i = 0; i < 16; i++) spruce(-260 + i * 100, 880 + (i % 3) * 12, 300 + (i % 4) * 40, '#2a4a3a', 1);
    rect(-300, 860, 1700, 600, { wash: '#f6f8fc', washA: 1, w: 2, col: '#a8b8c8' }); push(240, 1000, 1); const iz = rect(-200, -220, 400, 220, { wash: '#7a5a3a', washA: 1, w: 3, col: '#2a1a0a' }); for (let q = 0; q < 6; q++) pencil([[-200, -200 + q * 36], [200, -200 + q * 36]], { w: 3, col: '#4a3018', pass2: false }); poly([[-240, -210], [0, -360], [240, -210]], { wash: '#fbfdff', washA: 1, w: 3, col: '#8a9aaa' }); rect(-50, -160, 100, 80, { wash: '#ffd890', washA: 1, w: 3, col: '#2a1a0a' }); blob([[-260, 0], [-200, -60], [-100, -40], [0, -60], [100, -30], [200, -70], [260, 0]], { wash: '#fbfdff', washA: 1, w: 2, col: '#a8b8c8' });
      for (let q = 0; q < 4; q++) { const k = (t * 0.3 + q / 4) % 1; ell(120 + Math.sin(k * 3) * 8, -380 - k * 300, 20 + k * 20, 16 + k * 14, { wash: '#e8e4e0', washA: 0.5 * (1 - k), line: false }); } pencil([[120, -330], [120, -380]], { w: 18, col: '#6a4a3a' }); pop(); }
  function work(t) { const o = clamp((t - EV.fz_out + 0.2) / 0.5); human(lerp(300, 460, o), 1180, 0.8, t, { body: '#8a3a3a', hair: '#3a2a1a', face: 'smile', armL: 'hold', armR: 'hold', seed: 1020, long: 1, hat: 'scarf', hatCol: '#f2c8d8' });
    if (o > 0) { push(560, 1190, 1); rect(-150, -14, 300, 24, { wash: '#c8a060', washA: 1, w: 2, col: '#5a3a14' }); for (let i = 0; i < 12; i++) pelmen(-130 + (i % 6) * 52, -24 - Math.floor(i / 6) * 26, 0.42, 0, { frozen: t > EV.fz_out + 0.7, key: i }); if (t > EV.fz_out + 0.6) frost(-150, -60, 300, 30, t, clamp((t - EV.fz_out - 0.6) * 2)); pop(); }
    const gone = clamp((t - EV.fz_taiga + 0.1) / 1.2), sx = lerp(820, 1500, gone); push(sx, 1160, 0.9); pencil([[-200, 20], [160, 20], [200, -10]], { w: 8, col: '#6a4a2a' }); rect(-180, -30, 320, 40, { wash: '#8a6a44', washA: 1, w: 2, col: '#2a1a0a' }); if (t > EV.fz_sack - 0.1) pelmenSack(-40, -30, 0.55, t, { frost: true }); for (let i = 0; i < 2; i++) { push(260 + i * 110, 0, 0.6); ell(0, -40, 60, 30, { wash: '#8a8a90', washA: 1, w: 2, col: '#2a2a2a' }); ell(56, -66, 24, 20, { wash: '#8a8a90', washA: 1, w: 2 }); poly([[60, -86], [70, -110], [80, -84]], { wash: '#6a6a70', washA: 1, w: 1.4 }); for (const sd of [-1, 1]) pencil([[sd * 30, -20], [sd * 30 + Math.sin(t * 12 + i) * 8 * gone, 20]], { w: 6, col: '#6a6a70', pass2: false }); pop(); } pop();
    human(lerp(700, 1400, gone), 1200, 0.78, t, { body: '#5a4a3a', hair: '#2a1a0a', face: 'grin', armL: 'hold', armR: t > EV.fz_sack ? 'up' : 'hold', seed: 1022, beard: true, hat: 'fur', hatCol: '#6a4a2a' }); }
  WORLD.frozen = (t, u, cat) => { lay(12, () => yard(t)); lay(1.6, () => work(t)); lay(1, () => { rect(-300, 1450, 1700, 600, { wash: '#f6f8fc', washA: 1, w: 2, col: '#a8b8c8', key: 10200 }); cat(); motes(50, [-100, -200, 1200, 1900], '#ffffff', t, 10201, { sp: 50, sz: 4, a: 0.8 }); quizStamp('ПРАВДА', 600, 860, t, EV.fz_true, '#2a9a4a', -0.1); }); };
  DIR.frozen = {
    outfit: 'furA', light: { side: 1, rim: '#ffe0e8' }, grade: ['#c8a0c8', 0.05],
    act: () => [[S0.frozen, 'cold'], [EV.fz_out, 'talk'], [EV.fz_sack, 'grin'], [EV.fz_true, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 900, y: 1810, s: 1.1, flip: true, look: [-0.7, -0.3], hand: [160, -320], handF: [-90, -230], prop: t > EV.fz_sack ? 'sackP' : null, frost: 0.6, chatter: t < EV.fz_out ? 1 : 0 }),
    cam: () => [[S0.frozen, 480, 950, 0.1], [EV.fz_out, 540, 1150, 0.18, 'x'], [EV.fz_taiga, 700, 1100, 0.14], [EV.fz_true, 640, 1050, 0.16, 'x'], [S1.frozen, 640, 1050, 0.18]]
  };
  // ---------------------------------------------------------------- переход: порыв ветра несёт снежную позёмку через кадр
  TRANS_IN.frozen = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {
    const d = Math.sin(k * Math.PI); drawBuf(k < 0.5 ? A : B, 1, 540 - (k - 0.5) * 80, 960); scr(() => { for (let i = 0; i < 18; i++) { const r = rng(10210 + i), y = r() * H, x = lerp(-900, 1900, clamp(k * 1.2 - r() * 0.2)); ell(x, y, 500 + r() * 400, 80 + r() * 120, { wash: '#fbfdff', washA: 0.85 * d, line: false }); }
      for (let i = 0; i < 80; i++) { const r = rng(10240 + i); ell((r() * W * 1.6 + k * 2400) % (W * 1.6) - W * 0.3, r() * H, 4, 2, { wash: '#ffffff', washA: d, line: false }); } });
  } };
})();
