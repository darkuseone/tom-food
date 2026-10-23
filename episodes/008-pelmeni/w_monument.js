/* 008 — `monument`: «В Ижевске пельменю поставили памятник: огромный пельмень на вилке!» Зимний сквер у набережной пруда: лёд с рыбаками, дома, фонари,
   ели в снегу. На «памятник» из сугроба поднимается постамент, на «огромный пельмень» над сквером вырастает гигантская вилка, воткнутая в землю ручкой,
   на зубцах — пельмень выше человека; туристы делают селфи. Штамп ПРАВДА. Том-турист в оранжевом пуховике с фотоаппаратом.
   Переход В сцену: экран телефона-камеры — рамка видоискателя, щелчок затвора. */
(() => {
  EV.mn_city = wtw('s8', 'Ижевске');
  EV.mn_mon = wtw('s8', 'памятник:');
  EV.mn_big = wtw('s8', 'огромный');
  EV.mn_fork = wtw('s8', 'вилке!');
  SHAKES.push([EV.mn_big + 0.4, 0.25, 12]);
  KEYW.push('вилке!');

  function city(t) { vgrad(-600, 1000, ['#8aa8c8', '#c8d8e8', '#eef2f6']); for (let i = 0; i < 6; i++) { const x = -240 + i * 260, h = 300 + (i % 3) * 120; rect(x, 760 - h, 220, h, { wash: ['#d8c8b0', '#c8b8a8', '#e0d4c0'][i % 3], washA: 1, w: 2, col: '#5a5048' }); windows(x + 15, 790 - h, 190, h - 60, 4, 4, 10500 + i, 0.4, '#ffe8a0', '#7a8a9a', 0.7); }
    rect(-300, 760, 1700, 200, { wash: '#dfe8f0', washA: 1, w: 2, col: '#a8b8c8' }); for (let i = 0; i < 4; i++) { const x = 100 + i * 280; human(x, 860, 0.36, t, { body: '#3a3a5a', hair: '#1a1a1a', face: 'calm', armL: 'hold', armR: 'hold', seed: 1060 + i, hat: 'fur' }); ell(x + 30, 870, 14, 5, { wash: '#2a3a4a', washA: 1, line: false }); }
    rect(-300, 950, 1700, 600, { wash: '#f6f8fc', washA: 1, w: 2, col: '#a8b8c8' }); for (let i = 0; i < 8; i++) { const x = -200 + i * 190; pencil([[x, 1060], [x, 860]], { w: 8, col: '#3a3a44' }); ell(x, 850, 24, 14, { wash: '#fff0b0', washA: 1, w: 2, col: '#3a3a44' }); } for (let i = 0; i < 6; i++) spruce(-260 + i * 300, 1080, 220, '#2a4a3a', 1); }
  function monument(t) { const rise = sm(clamp((t - EV.mn_mon + 0.1) / 0.5)), big = popK(t, EV.mn_big, 0.6); push(480, 1300, 0.8); rect(-150, -60 * rise, 300, 60 * rise + 20, { wash: '#8a8a90', washA: 1, w: 3, col: '#3a3a44' });
    if (t > EV.mn_big - 0.05) { push(0, -60, big); pencil([[0, 0], [0, -520]], { w: 34, col: '#a8acb4' }); pencil([[-10, 0], [-10, -520]], { w: 6, col: '#e8eef4', a: 0.7, pass2: false }); poly([[-90, -520], [90, -520], [60, -600], [-60, -600]], { wash: '#a8acb4', washA: 1, w: 3, col: '#4a4e58' }); for (const dx of [-70, -24, 24, 70]) pencil([[dx, -600], [dx * 1.1, -760]], { w: 14, col: '#a8acb4' });
      pelmen(0, -820, 4.2, 0, { shine: true, col: '#e2b878' }); pelmen(0, -820, 4.2, 0, { shine: true, col: '#e2b878', key: 1 }); blob([[-150, -760], [-120, -790], [120, -790], [150, -760]], { wash: '#fbfdff', washA: 0.9, line: false }); pop(); } pop();
    if (t > EV.mn_fork - 0.3) { for (let i = 0; i < 2; i++) { const x = 160 + i * 560; human(x, 1340, 0.8, t, { body: ['#2a6ab8', '#c8282a'][i], hair: '#3a2a1a', face: 'grin', armL: 'hold', armR: 'up', prop: 'phone', seed: 1070 + i, look: i ? -0.6 : 0.6, flip: i ? -1 : 1 }); } if ((Math.floor(t * 6) % 4) === 0) whiteOut(0.12, '255,255,255'); }
    quizStamp('ПРАВДА', 760, 760, t, EV.mn_fork + 0.1, '#2a9a4a', 0.1, 0.8); }
  WORLD.monument = (t, u, cat) => { lay(12, () => city(t)); lay(1.3, () => monument(t)); lay(1, () => { rect(-300, 1450, 1700, 600, { wash: '#eef2f8', washA: 1, w: 2, col: '#a8b8c8', key: 10510 }); cat(); motes(30, [-100, -200, 1200, 1900], '#ffffff', t, 10511, { sp: 40, sz: 4, a: 0.8 }); }); };
  DIR.monument = {
    outfit: 'touristA', light: { side: 1, rim: '#ffffff' }, grade: ['#8ab0d8', 0.05],
    act: () => [[S0.monument, 'talk'], [EV.mn_mon, 'awe'], [EV.mn_big, 'shock'], [EV.mn_fork, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 900, y: 1810, s: 1.1, flip: true, look: t < EV.mn_big ? [-0.6, -0.3] : [-0.5, -0.9], hand: [170, -340], handF: [-90, -230], point: 1 }),
    cam: () => [[S0.monument, 540, 950, 0.1], [EV.mn_mon, 500, 1150, 0.12], [EV.mn_big, 500, 900, 0.08, 'x'], [S1.monument, 520, 920, 0.1]]
  };
  // ---------------------------------------------------------------- переход: видоискатель телефона — рамка, сетка, щелчок затвора
  TRANS_IN.monument = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const shut = Math.max(0, 1 - Math.abs(k - 0.5) * 6); drawBuf(k < 0.5 ? A : B, 1, 540, 960); scr(() => { const ui = Math.sin(k * Math.PI); ctx.globalAlpha = ui; for (const x of [W / 3, W * 2 / 3]) pencil([[x, 0], [x, H]], { w: 2, col: '#ffffff', a: 0.6, pass2: false }); for (const y of [H / 3, H * 2 / 3]) pencil([[0, y], [W, y]], { w: 2, col: '#ffffff', a: 0.6, pass2: false });
      for (const [x, y, sx, sy] of [[80, 200, 1, 1], [W - 80, 200, -1, 1], [80, H - 300, 1, -1], [W - 80, H - 300, -1, -1]]) pencil([[x, y + sy * 80], [x, y], [x + sx * 80, y]], { w: 8, col: '#ffffff', pass2: false }); ell(540, H - 180, 80, 80, { wash: '#ffffff', washA: 0.9, w: 6, col: '#c8c8c8' }); ctx.globalAlpha = 1; if (shut > 0) { ctx.fillStyle = `rgba(0,0,0,${shut})`; ctx.fillRect(0, 0, W, H); } });
  } };
})();
