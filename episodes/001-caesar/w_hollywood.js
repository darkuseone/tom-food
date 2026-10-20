/* 001 — `hollywood`: 1937, павильон киностудии. Прожекторы на штативах, кинокамера с бобинами, фанерные пальмы, звезда в мехах и жемчуге ест Цезарь на съёмке,
   в воротах павильона — холмы с надписью HOLLYWOODLAND (так она выглядела до 1949). Том-режиссёр в фартуке с рупором. Рецепт-листок «CAESAR SALAD» перелетает в кадр.
   «по словам самого Кардини» — вырезка из газеты 1952 года с его интервью. Переход В сцену: винт биплана разрезает кадр секторами. */
(() => {
  EV.hw_hw = wtw('s8', 'Голливуд');
  EV.hw_words = wtw('s8', 'словам');
  KEYW.push('Голливуд');

  function stage(t) { vgrad(-400, 1600, ['#121216', '#24242c', '#18181e']); for (let i = 0; i < 9; i++) pencil([[-200 + i * 180, 0], [-260 + i * 200, 400]], { w: 10, col: '#3a3a44', a: 0.8 }); for (let i = 0; i < 3; i++) pencil([[-300, 120 + i * 120], [1400, 120 + i * 120]], { w: 8, col: '#3a3a44', a: 0.8 });
    const d = rect(620, 420, 520, 700, { wash: '#8ac0e8', washA: 1, w: 4, col: '#0a0a0a', key: 8000 }); ctx.save(); ctx.clip(d.path); vgrad(420, 1120, ['#4a8ac8', '#f2d8a0']); poly([[620, 900], [800, 760], [960, 820], [1140, 720], [1140, 1120], [620, 1120]], { wash: '#8a7a4a', washA: 1, w: 2, col: '#3a2a14' });
    const L = 'HOLLYWOODLAND'; for (let i = 0; i < L.length; i++) txt(L[i], 680 + i * 34, 810 - i * 4, 34, { font: 'Osw', col: '#ffffff' }); ctx.restore(); }
  function set(t) { for (const x of [60, 420]) { pencil(spline([[x, 1300], [x + 10, 1000], [x - 6, 760]], false, 5), { w: 16, col: '#8a6a3a' }); for (let i = 0; i < 6; i++) { const a = -Math.PI / 2 + (i - 2.5) * 0.55; pencil(spline([[x - 6, 760], [x - 6 + Math.cos(a) * 90, 760 + Math.sin(a) * 40 - 10], [x - 6 + Math.cos(a) * 170, 760 + Math.sin(a) * 40 + 50]], false, 5), { w: 14, col: '#4a8a3a' }); } pencil([[x - 30, 1300], [x - 30, 900]], { w: 4, col: '#5a4a3a', a: 0.6, pass2: false }); }
    rect(-100, 1180, 700, 140, { wash: '#efe2c4', washA: 1, w: 2.4, col: '#3a2a14' }); human(240, 1200, 1.0, t, { body: '#efe8e0', long: 1, hair: '#f2d070', face: t > EV.hw_hw ? 'grin' : 'smile', armL: 'hold', armR: 'up', seed: 130 }); push(240, 1200 - 230, 1); for (let i = 0; i < 9; i++) ell(-40 + i * 10, Math.abs(i - 4) * 4, 5, 5, { wash: '#f6f2e8', washA: 1, w: 1 }); pop();
    blob([[160, 1000], [140, 920], [240, 880], [340, 920], [320, 1000]], { wash: '#d8ccc0', washA: 1, w: 2, col: '#5a4a3a' }); push(322, 880, 0.8, 0.2); leaf(0, 0, 0.7, 0, { key: 8010, shine: 1 }); pop(); plateCaesar(420, 1170, 0.6, t); }
  function rig(t) { for (const [x, a] of [[-60, 0.5], [1180, -0.5]]) { pencil([[x, 1400], [x, 700]], { w: 8, col: '#4a4a52' }); for (const sd of [-1, 1]) pencil([[x, 1400], [x + sd * 80, 1500]], { w: 6, col: '#4a4a52' }); push(x, 680, 1, a); rect(-90, -80, 180, 160, { wash: '#2a2a30', washA: 1, w: 3, col: '#000' }); ell(a > 0 ? 90 : -90, 0, 30, 76, { wash: '#fff8e0', washA: 1, w: 3, col: '#000' }); pop(); rays(x + (a > 0 ? 80 : -80), 700, a > 0 ? 0.6 : Math.PI - 0.6, 0.4, 1200, 'rgba(255,245,210,1)', 0.25, 5, t); }
    push(820, 1260, 1); for (const sd of [-1, 0, 1]) pencil([[0, -200], [sd * 120, 120]], { w: 8, col: '#4a4a52' }); rect(-110, -330, 220, 140, { wash: '#2a2a30', washA: 1, w: 3, col: '#000' }); ell(-150, -260, 50, 50, { wash: '#2a2a30', washA: 1, w: 3 });
    for (const [rx, ry] of [[-50, -400], [60, -400]]) { push(rx, ry, 1, t * 3); ell(0, 0, 60, 60, { wash: '#3a3a42', washA: 1, w: 3 }); for (let i = 0; i < 5; i++) { const a = i / 5 * 6.283; ell(Math.cos(a) * 32, Math.sin(a) * 32, 12, 12, { wash: '#18181e', washA: 1, w: 1 }); } pop(); } pop(); }
  function recipe(t) { const k = clamp((t - S0.hollywood - 0.2) / 0.9); if (k <= 0) return; const x = lerp(1300, 300, sm(k)), y = lerp(300, 880, sm(k)) - Math.sin(k * Math.PI) * 200; push(x, y, 1, (1 - k) * 4 + Math.sin(t * 3) * 0.05);
    rect(-110, -140, 220, 280, { wash: '#f8f2e0', washA: 1, w: 2.4, col: '#4a3a2a' }); txt('CAESAR', 0, -100, 38, { font: 'Osw', col: '#d9482b' }); txt('SALAD', 0, -60, 34, { font: 'Osw', col: '#2b2622' }); for (let i = 0; i < 5; i++) pencil([[-80, -20 + i * 30], [60 - (i % 2) * 30, -20 + i * 30]], { w: 2, col: '#5a4a3a', a: 0.7, pass2: false }); pop(); }
  function clipping(t) { if (t < EV.hw_words - 0.1) return; const k = popK(t, EV.hw_words - 0.1, 0.3); push(800, 560, k, -0.06); rect(-210, -150, 420, 300, { wash: '#e8e0c8', washA: 1, w: 2.2, col: '#3a3a3a' }); txt('THE NEWS · 1952', 0, -110, 30, { font: 'Osw', col: '#2b2622' }); pencil([[-190, -86], [190, -86]], { w: 3, col: '#2b2622', pass2: false });
    rect(-190, -66, 140, 170, { wash: '#a8a090', washA: 1, w: 1.6 }); human(-120, 110, 0.5, t, { body: '#1e1e26', legs: '#1e1e26', hair: '#141010', face: 'smile', seed: 80 }); stache(-120, 110, 0.5); txt('CARDINI:', 70, -40, 34, { font: 'Osw', col: '#d9482b' }); for (let i = 0; i < 5; i++) pencil([[-30, -4 + i * 26], [190, -4 + i * 26]], { w: 2, col: '#5a5a5a', a: 0.6, pass2: false }); pop(); }
  WORLD.hollywood = (t, u, cat) => {
    lay(10, () => stage(t)); lay(4, () => { set(t); haze('#20202a', 0.1); });
    lay(2, () => { rig(t); }); lay(1.2, () => { const f = poly([[-500, 1300], [1700, 1300], [1700, 2400], [-500, 2400]], { wash: '#3a3430', washA: 1, w: 2, col: '#000', key: 8020 }); for (let i = 0; i < 12; i++) pencil([[-500, 1320 + i * i * 9], [1700, 1320 + i * i * 9]], { w: 1.6, col: '#5a524a', a: 0.6, pass2: false }); pencil([[200, 1320], [-200, 2400]], { w: 4, col: '#e8b53a', a: 0.5, pass2: false }); });
    lay(1, () => { cat(); recipe(t); });
    lay(0.7, () => clipping(t));
  };
  DIR.hollywood = {
    outfit: 'directorA', light: { side: 1, rim: '#fff8e0' }, grade: ['#c0b0ff', 0.08],
    act: () => [[S0.hollywood, 'proud'], [EV.hw_hw, 'grin'], [EV.hw_words, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 620, y: 1660, s: 1.2, look: t > EV.hw_words ? [0.7, -0.5] : [-0.6, -0.1], hand: [150, -200], prop: 'megaphone', propAng: 0.9, handF: [-100, -170] }),
    cam: () => [[S0.hollywood, 560, 1000, 0.12], [EV.hw_hw, 560, 1020, 0.2], [EV.hw_words, 640, 960, 0.24], [S1.hollywood, 660, 940, 0.3]]
  };
  // ---------------------------------------------------------------- переход: винт биплана режет кадр секторами
  TRANS_IN.hollywood = { a: 0.2, b: 0.4, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const cx = 540, cy = 960, a0 = k * 9;
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); const P = new Path2D(); for (const off of [0, Math.PI]) { P.moveTo(cx, cy); P.arc(cx, cy, 2400, a0 + off, a0 + off + Math.PI * Math.min(1, k * 1.1)); P.closePath(); } ctx.clip(P); drawBuf(B, 1, 540, 960); ctx.restore();
    scr(() => { if (k > 0.92) return; push(cx, cy, 1, a0); for (const sd of [-1, 1]) { blob([[0, 0], [sd * 300, -60], [sd * 1400, -40], [sd * 1450, 0], [sd * 1400, 40], [sd * 300, 60]], { wash: '#5a3418', washA: 1, w: 4, col: '#1a0a04' }); } ell(0, 0, 80, 80, { wash: '#c8ccd0', washA: 1, w: 3, col: '#2a2a2a' }); pop(); });
  } };
})();
