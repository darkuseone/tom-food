/* 007 — `spicy`: «А острым кимчи стало только в девятнадцатом веке. До того — без перца!» Кухня-пуок XIX века: глиняная печь с чугунным котлом-гамасот,
   связки сушёного красного перца под потолком, деревянные полки с плошками, дверь во двор. Хозяйка в ханбоке натирает капусту красной пастой в большом тазу.
   На «острым» Том-торговец пробует — уши дымятся, мордочка краснеет; на «До того — без перца!» рядом появляется белое кимчи в миске, над перцем — зачёркивающий крест.
   Переход В сцену: облако молотого перца взрывается и оседает. */
(() => {
  EV.ht_hot = wtw('s4', 'острым');
  EV.ht_19 = wtw('s4', 'девятнадцатом');
  EV.ht_no = wtw('s4', 'До');
  SHAKES.push([EV.ht_hot + 0.4, 0.2, 8]);
  KEYW.push('перца!');

  function kitchen(t) { vgrad(-600, 1500, ['#6a4a2a', '#8a6a44', '#a88a5a']); for (let i = 0; i < 6; i++) pencil([[-300 + i * 300, -300], [-300 + i * 300, 1300]], { w: 18, col: '#4a2a14' }); pencil([[-300, 120], [1400, 120]], { w: 22, col: '#4a2a14' });
    for (let i = 0; i < 7; i++) { const x = -40 + i * 170, sw = Math.sin(t * 1.2 + i) * 0.05; push(x, 120, 1, sw); pencil([[0, 0], [0, 300]], { w: 2, col: '#c8a060', pass2: false }); for (let q = 0; q < 6; q++) chili((q % 2 ? 12 : -12), 40 + q * 44, 0.45, (q % 2 ? 0.4 : -0.4)); pop(); }
    rect(820, 500, 260, 500, { wash: '#f6eed8', washA: 1, w: 4, col: '#4a2a14' }); for (let q = 0; q < 4; q++) pencil([[820, 560 + q * 120], [1080, 560 + q * 120]], { w: 2, col: '#8a6a44', pass2: false }); glow(950, 750, 220, 'rgba(255,240,200,1)', 0.4);
    rect(60, 620, 420, 14, { wash: '#5a3a1a', washA: 1, w: 2 }); for (let q = 0; q < 5; q++) { ell(100 + q * 80, 600, 32, 20, { wash: q % 2 ? '#e8dcc0' : '#6a3a1a', washA: 1, w: 1.8, col: '#2a1408' }); } }
  function stove(t) { push(300, 1260, 1); const s = blob([[-220, 0], [-230, -160], [-180, -220], [180, -220], [230, -160], [220, 0]], { wash: '#a87a4a', washA: 1, w: 3, col: '#3a1a08', key: 8100 }); blob([[-80, 0], [-70, -90], [70, -90], [80, 0]], { wash: '#1a0a04', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) { const f = flick(t, i); blob([[-50 + i * 30, 0], [-40 + i * 30, -60 * f], [-30 + i * 30, 0]], { wash: '#ff8a20', washA: 0.9, line: false }); } glow(0, -40, 120, 'rgba(255,140,50,1)', 0.5);
    ell(0, -220, 160, 40, { wash: '#2a2a2a', washA: 1, w: 3 }); ell(0, -250, 150, 30, { wash: '#3a3a3a', washA: 1, w: 2 }); pencil([[0, -280], [0, -300]], { w: 10, col: '#5a5a5a' }); for (let q = 0; q < 3; q++) { const k = (t * 0.6 + q / 3) % 1; ell(-30 + q * 30, -320 - k * 160, 20 + k * 30, 14 + k * 20, { wash: '#ffffff', washA: 0.3 * (1 - k), line: false }); } pop();
    human(640, 1300, 0.8, t, { body: '#f2c0d0', hair: '#1a1a1a', face: 'smile', armL: 'hold', armR: 'swing', seed: 810, long: 1, look: -0.3 }); push(640, 1320, 1); ell(0, 0, 160, 40, { wash: '#a87a4a', washA: 1, w: 3, col: '#3a1a08' }); ell(0, -10, 140, 30, { wash: '#8a5a3a', washA: 1, w: 2 }); for (let i = 0; i < 3; i++) kimchiQuarter(-80 + i * 80, -24, 0.4, (i - 1) * 0.3); pop(); }
  function compare(t) { if (t < EV.ht_no - 0.1) return; const p = popK(t, EV.ht_no - 0.1, 0.5); push(520, 1520, p); kimchiBowl(0, 0, 1.1, t, { white: true }); pop(); bubbleTag('БЕЗ ПЕРЦА', 520, 1300, t, EV.ht_no + 0.1, '#5a8a2a', 36, -0.05);
    push(860, 1000, p); chili(0, 0, 1.6, 0.3); pencil([[-80, -80], [80, 80]], { w: 14, col: '#d9282b', pass2: false }); pencil([[80, -80], [-80, 80]], { w: 14, col: '#d9282b', pass2: false }); pop(); }
  function steamTom(t, P) { if (t < EV.ht_hot + 0.2 || t > EV.ht_no) return; const k = t - EV.ht_hot - 0.2; for (const sd of [-1, 1]) for (let q = 0; q < 3; q++) { const kk = (k * 1.5 + q / 3) % 1; ell(P.x + sd * 90 * P.s + sd * kk * 40, P.y - 470 * P.s - kk * 120, 14 + kk * 20, 10 + kk * 14, { wash: '#ffffff', washA: 0.6 * (1 - kk), line: false }); } ell(P.x, P.y - 330 * P.s, 70 * P.s, 40 * P.s, { wash: '#ff3a2a', washA: 0.25 * clamp(k * 2), line: false }); }
  WORLD.spicy = (t, u, cat) => { lay(10, () => kitchen(t)); lay(1.5, () => stove(t)); lay(1, () => { rect(-300, 1440, 1700, 600, { wash: '#8a6a44', washA: 1, w: 2, col: '#3a2a14', key: 8110 }); cat(); compare(t); }); };
  DIR.spicy = {
    outfit: 'hanbokA', light: { side: -1, rim: '#ffb070' }, grade: ['#d86a3a', 0.08],
    act: () => [[S0.spicy, 'talk'], [EV.ht_hot, 'shock'], [EV.ht_hot + 0.4, 'laugh'], [EV.ht_19, 'sideeye'], [EV.ht_no, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 880, y: 1800, s: 1.1, flip: true, look: [-0.6, -0.3], hand: t < EV.ht_no ? [60, -360] : [150, -300], handF: [-90, -230], prop: t < EV.ht_no ? 'chopKimchiP' : null, sweat: t > EV.ht_hot && t < EV.ht_no ? 1 : 0, point: t > EV.ht_no ? 1 : 0 }),
    afterCat: (t, u, P) => steamTom(t, P),
    cam: () => [[S0.spicy, 540, 1000, 0.12], [EV.ht_hot, 760, 1300, 0.22, 'x'], [EV.ht_no, 620, 1320, 0.2, 'x'], [S1.spicy, 620, 1320, 0.22]]
  };
  // ---------------------------------------------------------------- переход: облако молотого перца взрывается и оседает
  TRANS_IN.spicy = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const d = Math.sin(k * Math.PI); drawBuf(k < 0.5 ? A : B, 1, 540, 960); scr(() => { for (let i = 0; i < 26; i++) { const r = rng(8150 + i), a = r() * 6.283, R = d * (300 + r() * 900); ell(540 + Math.cos(a) * R * 0.8, 960 + Math.sin(a) * R + k * 300, 120 + r() * 200 * d, 100 + r() * 160 * d, { wash: i % 3 ? '#c8281a' : '#e85a2a', washA: 0.8 * d, line: false }); }
      for (let i = 0; i < 60; i++) { const r = rng(8200 + i); ell(r() * W, (r() * H + k * 600) % H, 3, 3, { wash: '#8a1a0a', washA: d, line: false }); } });
  } };
})();
