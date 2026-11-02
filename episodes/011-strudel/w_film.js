/* 011 — `film`: «Голливуд, 1965-й: фильм про Австрию поёт о „хрустящих яблочных штруделях“.» Съёмочный павильон: нарисованные Альпы (задник с видимыми
   подпорками и швами), луг из искусственной травы с цветами, фермы с прожекторами под потолком, камера на тележке-рельсах, режиссёр в кресле с мегафоном,
   звуковик с «удочкой», помощница с хлопушкой-планшетом, красная лампа «ТИХО! СЪЁМКА». Том-тиролец поёт с корзиной штруделей, вокруг — ноты.
   По словам: «Голливуд» — врубаются прожекторы; «Австрию» — табличка-указатель SALZBURG; «хрустящих» — Том поднимает корзину, ценник CRISP APPLE STRUDELS;
   «штруделях» — съёмочная группа аплодирует. Переход В сцену: кинолента — кадр уезжает вверх по перфорации, снизу въезжает павильон. */
(() => {
  EV.fm_on = wtw('s1', 'Голливуд,');
  EV.fm_aut = wtw('s1', 'Австрию');
  EV.fm_crisp = wtw('s1', '«хрустящих');
  EV.fm_clap = wtw('s1', 'штруделях».');
  SHAKES.push([EV.fm_on + 0.05, 0.15, 6], [EV.fm_crisp + 0.1, 0.2, 8]);
  KEYW.push('Голливуд,', '«хрустящих');
  const on = t => clamp((t - EV.fm_on) / 0.25);

  function backdrop(t) {                                                // нарисованные Альпы: небо, облака, пики со снегом, ёлки, шов холста и подпорки
    vgrad(-600, 1200, ['#5a9ad8', '#9ac8ec', '#dceef6']);
    for (let i = 0; i < 5; i++) { const x = ((i * 300 + t * 12) % 1700) - 300, y = 120 + (i % 3) * 90; for (let k = 0; k < 4; k++) ell(x + k * 50, y - (k % 2) * 24, 60, 34, { wash: '#ffffff', washA: 0.85, line: false }); }
    const pk = [[-300, 900], [-120, 520], [40, 640], [220, 300], [380, 560], [540, 380], [720, 220], [900, 520], [1080, 360], [1300, 700], [1400, 900]];
    const m = shape(pk, { wash: '#7a8aa8', washA: 1, w: 2.4, col: '#2a3448', key: 11300 }); shadeG(m.path, 0, 900, 0, 300, '#3a4a68', 0.5);
    for (const [x, y] of [[220, 300], [720, 220], [1080, 360], [540, 380]]) blob([[x - 90, y + 110], [x - 40, y + 30], [x, y], [x + 50, y + 40], [x + 100, y + 120], [x + 30, y + 80], [x - 20, y + 110]], { wash: '#f8fbff', washA: 1, w: 1.6, col: '#6a7a98' });
    const hill = shape(spline([[-300, 1000], [100, 760], [500, 840], [900, 740], [1400, 860], [1400, 1100], [-300, 1100]], true, 8), { wash: '#6aa84a', washA: 1, w: 2, col: '#2a4a1a', key: 11301 }); shadeG(hill.path, 0, 1100, 0, 760, '#3a6a2a', 0.4);
    for (let i = 0; i < 22; i++) { const x = -260 + i * 76, y = 820 + Math.sin(i * 1.7) * 40; spruce(x, y, 90 + (i % 3) * 30, '#2e5a3a', 1); }
    push(860, 800, 1); rect(-60, -80, 120, 80, { wash: '#a8743a', washA: 1, w: 2, col: '#3a1a08' }); poly([[-80, -80], [0, -140], [80, -80]], { wash: '#6a2a1a', washA: 1, w: 2 }); rect(-20, -40, 40, 40, { wash: '#3a1a08', washA: 1, w: 1.4 }); pop();
    pencil([[540, -400], [540, 1100]], { w: 3, col: '#c8b898', a: 0.5, pass2: false });
    for (const x of [-200, 1280]) { pencil([[x, 1100], [x + (x < 0 ? 200 : -200), -100]], { w: 14, col: '#a8844a' }); pencil([[x, 1100], [x + (x < 0 ? 90 : -90), 400]], { w: 10, col: '#a8844a' }); }
  }
  function rig(t) {                                                     // фермы под потолком, прожекторы, красная лампа «ТИХО! СЪЁМКА»
    rect(-400, -300, 2000, 400, { wash: '#1a1a20', washA: 1, w: 2, col: '#000000' });
    for (let i = 0; i < 24; i++) { pencil([[-300 + i * 80, 100], [-260 + i * 80, 20]], { w: 3, col: '#5a5a62', pass2: false }); pencil([[-260 + i * 80, 20], [-220 + i * 80, 100]], { w: 3, col: '#5a5a62', pass2: false }); }
    pencil([[-300, 100], [1600, 100]], { w: 6, col: '#6a6a72' }); pencil([[-300, 20], [1600, 20]], { w: 6, col: '#6a6a72' });
    for (const [x, a] of [[120, 0.5], [540, 0.1], [960, -0.4]]) { push(x, 110, 1, a); pencil([[0, -20], [0, 30]], { w: 5, col: '#3a3a3a' }); const c = shape([[-40, 30], [40, 30], [56, 120], [-56, 120]], { wash: '#2a2a30', washA: 1, w: 2, col: '#0a0a0a' }); ell(0, 120, 56, 14, { wash: on(t) > 0 ? '#fff8d0' : '#5a5a50', washA: 1, w: 2 }); pop(); if (on(t) > 0) glow(x + Math.sin(a) * -120, 230, 160, 'rgba(255,240,190,1)', 0.6 * on(t)); }
    push(1000, 300, 1); rect(-90, -40, 180, 80, { wash: '#2a0a0a', washA: 1, w: 2.4, col: '#0a0000' }); const lit = Math.sin(t * 6) > -0.4; txt('ТИХО!', 0, -8, 30, { font: 'Osw', col: lit ? '#ff3a3a' : '#6a1a1a' }); txt('СЪЁМКА', 0, 22, 22, { font: 'Osw', col: lit ? '#ff6a5a' : '#5a1a1a' }); if (lit) glow(0, 0, 120, 'rgba(255,40,40,1)', 0.35); pop();
  }
  function meadow(t) {                                                  // луг павильона: трава-ковёр с краем, цветы, указатель SALZBURG, забор
    const g = shape(spline([[-400, 1180], [200, 1120], [800, 1150], [1500, 1110], [1500, 1700], [-400, 1700]], true, 8), { wash: '#7ab84a', washA: 1, w: 2.4, col: '#2a4a1a', key: 11310 }); shadeG(g.path, 0, 1700, 0, 1120, '#3a6a2a', 0.45);
    const r = rng(11311); for (let i = 0; i < 70; i++) { const x = -350 + r() * 1800, y = 1140 + r() * 400; pencil([[x, y], [x - 4, y - 18]], { w: 2, col: '#3a6a2a', a: 0.6, pass2: false }); if (i % 3 === 0) ell(x, y - 18, 7, 7, { wash: ['#ffffff', '#f0d040', '#d9486a', '#8a6ad8'][i % 4], washA: 1, w: 1, col: '#3a3a1a' }); }
    for (let i = 0; i < 9; i++) { const x = -260 + i * 110; pencil([[x, 1200], [x, 1080]], { w: 7, col: '#8a5a2a' }); } pencil([[-280, 1110], [700, 1100]], { w: 6, col: '#8a5a2a' }); pencil([[-280, 1160], [700, 1150]], { w: 6, col: '#8a5a2a' });
    if (t > EV.fm_aut - 0.2) { const k = popK(t, EV.fm_aut - 0.2, 0.4); push(160, 1200, k); pencil([[0, 0], [0, -280]], { w: 10, col: '#6a3a14' }); poly([[-10, -270], [200, -270], [240, -230], [200, -190], [-10, -190]], { wash: '#f4e6c8', washA: 1, w: 2.4, col: '#3a1a08' }); txt('SALZBURG', 105, -216, 32, { font: 'Osw', col: '#7a1a10' }); poly([[-10, -170], [-200, -170], [-236, -136], [-200, -100], [-10, -100]], { wash: '#f4e6c8', washA: 1, w: 2.4, col: '#3a1a08' }); txt('WIEN', -110, -126, 28, { font: 'Osw', col: '#7a1a10' }); pop(); }
  }
  function crew(t) {                                                    // съёмочная группа: оператор у камеры, режиссёр с мегафоном, звуковик с микрофоном, помощница
    const clap = t > EV.fm_clap, wv = clap ? 'wave' : 'hold';
    push(60, 1330, 1.15); rect(-140, -20, 280, 40, { wash: '#3a3a40', washA: 1, w: 2 }); for (const x of [-110, 110]) ell(x, 22, 26, 26, { wash: '#1a1a1a', washA: 1, w: 2 }); pencil([[0, -20], [0, -200]], { w: 14, col: '#2a2a2a' });
      const cb = rect(-110, -330, 200, 130, { wash: '#2a2a30', washA: 1, w: 2.4, col: '#0a0a0a', key: 11320 }); metalG(cb.path, -40, -300, 160, '#6a6a72', '#2a2a30', '#0a0a0a');
      for (const x of [-60, 40]) { ell(x, -380, 50, 50, { wash: '#1a1a1e', washA: 1, w: 2 }); ell(x, -380, 14, 14, { wash: '#5a5a62', washA: 1, w: 1.4 }); } const lens = shape([[90, -300], [170, -310], [170, -230], [90, -240]], { wash: '#1a1a1e', washA: 1, w: 2 }); ell(170, -270, 18, 40, { wash: '#3a5a8a', washA: 1, w: 2 }); glow(170, -280, 20, 'rgba(180,220,255,1)', 0.6); txt('PANAVISION', 0, -250, 18, { font: 'Osw', col: '#c8c8c8' }); pop();
    human(-110, 1340, 1.25, t, { body: '#4a5a6a', legs: '#2a2a34', hair: '#3a2a1a', face: clap ? 'grin' : 'calm', armL: 'hold', armR: clap ? 'wave' : 'hold', look: 0.8, seed: 41 }); hat20(-110, 1340, 1.25, 'beret', '#2a2a2a');
    push(1000, 1340, 1.1); pencil([[-50, 0], [-40, -120]], { w: 6, col: '#6a3a14' }); pencil([[50, 0], [40, -120]], { w: 6, col: '#6a3a14' }); rect(-60, -140, 120, 20, { wash: '#2a2a2a', washA: 1, w: 2 }); rect(-60, -260, 120, 100, { wash: '#2a2a2a', washA: 1, w: 2 }); txt('DIRECTOR', 0, -214, 22, { font: 'Osw', col: '#f4e6c8' }); pop();
    human(1000, 1350, 1.25, t, { body: '#c8a878', legs: '#4a3a2a', hair: '#1a1a1a', face: t > EV.fm_crisp ? 'grin' : 'calm', armL: clap ? 'wave' : 'hips', armR: 'up', look: -0.8, seed: 42, flip: -1 }); hat20(1000, 1350, 1.25, 'fedora', '#5a3a1a');
    push(1000 - 82 * 1.25, 1350 - 340 * 1.25, 1.2, -0.6); poly([[0, -14], [60, -40], [60, 40], [0, 14]], { wash: '#d8d0b8', washA: 1, w: 2, col: '#3a3a3a' }); pop();
    human(840, 1290, 1.12, t, { body: '#3a3a3a', legs: '#1a1a1a', hair: '#8a5a2a', face: clap ? 'smile' : 'calm', armL: 'up', armR: 'up', look: -0.6, seed: 43, flip: -1 });
    const bx = 840 - 92, by = 1290 - 386; pencil([[bx, by], [520, 600 + Math.sin(t * 2) * 10]], { w: 7, col: '#3a3a3a' }); ell(520, 620 + Math.sin(t * 2) * 10, 22, 50, { wash: '#8a8a8a', washA: 1, w: 2, col: '#2a2a2a', rot: 0.4 }); for (let i = 0; i < 6; i++) pencil([[504 + i * 6, 590], [504 + i * 6, 650]], { w: 1, col: '#5a5a5a', pass2: false });
    human(300, 1290, 1.1, t, { body: '#d9486a', legs: '#2a2a34', hair: '#e8c060', face: clap ? 'grin' : 'smile', armL: clap ? 'wave' : 'hold', armR: 'hold', look: 0.5, seed: 44 });
  }
  function stands(t) {                                                  // прожекторы на стойках слева и справа, светят на Тома
    for (const [x, a] of [[-120, 0.6], [1180, -0.6]]) { push(x, 1500, 1); pencil([[0, 0], [-60, 60]], { w: 6, col: '#2a2a2a' }); pencil([[0, 0], [60, 60]], { w: 6, col: '#2a2a2a' }); pencil([[0, 0], [0, -700]], { w: 9, col: '#3a3a3a' });
      push(0, -720, 1, a); const c = shape([[-70, -60], [70, -60], [90, 80], [-90, 80]], { wash: '#2a2a30', washA: 1, w: 2.4, col: '#0a0a0a' }); metalG(c.path, -20, -20, 120, '#6a6a72', '#2a2a30', '#0a0a0a'); for (const sd of [-1, 1]) poly([[sd * 90, 80], [sd * 140, 140], [sd * 120, 150], [sd * 80, 96]], { wash: '#1a1a1e', washA: 1, w: 1.6 });
      ell(0, 82, 90, 20, { wash: on(t) > 0 ? '#fffbe0' : '#5a5a50', washA: 1, w: 2 }); if (on(t) > 0) glow(0, 120, 220, 'rgba(255,244,200,1)', 0.6 * on(t)); pop(); pop(); }
  }
  function notes(t) { if (t < EV.fm_on) return; for (let i = 0; i < 7; i++) { const k = (t * 0.5 + i / 7) % 1; txt(['♪', '♫', '♬'][i % 3], 640 + Math.sin(i * 2 + k * 5) * 120 - k * 80, 1120 - k * 520, 56 - k * 12, { col: '#fff4d0', a: (1 - k) * 0.95 }); } }
  function front(t) {                                                   // передний план: рельсы тележки, кабели, мешок с песком, ножка прожектора, ящик PROPS
    for (const y of [1900, 1990]) pencil([[-300, y], [1400, y - 40]], { w: 10, col: '#8a8a92' }); const fl = rect(-400, 1860, 2000, 400, { wash: '#3a3430', washA: 1, w: 2, col: '#1a1410' }); hatch(fl.path, fl.bb, { gap: 16, a: 0.2, col: '#1a1410', ang: 0.2 }); 
    pencil(spline([[-200, 1960], [200, 1880], [600, 1960], [1000, 1890], [1300, 1950]], false, 8), { w: 9, col: '#1a1a1a' }); pencil(spline([[-200, 2000], [300, 1940], [800, 2010], [1300, 1960]], false, 8), { w: 7, col: '#2a2a2a' });
    push(1180, 1980, 1.4); rect(-110, -160, 220, 160, { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#2a1408' }); txt('PROPS · WIEN', 0, -80, 26, { font: 'Osw', col: '#f4e6c8' }); pop();
    push(-100, 2000, 1.3); blob([[-80, 0], [-70, -60], [0, -70], [70, -60], [80, 0]], { wash: '#c8b088', washA: 1, w: 2, col: '#4a3a1a' }); pop();
    pencil([[60, 2100], [180, 1300]], { w: 14, col: '#3a3a3a' });
    if (on(t) > 0) { rays(540, -300, 1.57, 0.5, 2200, 'rgba(255,240,190,1)', 0.12 * on(t), 6, t); motes(30, [200, 400, 900, 1700], '#fff4d0', t, 11330, { sp: 10, sz: 4, a: 0.5, wob: 2 }); }
  }
  WORLD.film = (t, u, cat) => {
    lay(18, () => { backdrop(t); haze('#cfe4f4', 0.12); });
    lay(9, () => { rig(t); });
    lay(4, () => { meadow(t); haze('#fff0d0', 0.05); });
    lay(2.4, () => { stands(t); crew(t); });
    lay(1, () => { cat(); notes(t); });
    lay(0.6, () => { front(t); });
    if (t < EV.fm_on) screenFill('#000000', 0.35 * (1 - clamp((t - S0.film) / 0.4)));
  };
  DIR.film = {
    outfit: 'tyrolA', light: { side: 1, rim: '#fff4d0' }, grade: ['#a8d0f0', 0.06],
    act: () => [[S0.film, 'awe'], [EV.fm_on, 'grin'], [EV.fm_aut, 'proud'], [EV.fm_crisp, 'laugh'], [EV.fm_clap, 'grin']],
    pose: (t, u, b) => { const up = t > EV.fm_crisp; return Object.assign(b, { x: 620, y: 1720, s: 1.15, flip: -1, look: up ? [-0.3, -0.4] : [0.2, -0.2], tilt: Math.sin(t * 4) * 0.03,
      hand: up ? [210, -360] : [-160, -230], handF: [-170, -330 + Math.sin(t * 5) * 30], prop: 'trayP', propAng: up ? -0.1 : 0.3, tailUp: up }); },
    cam: () => [[S0.film, 560, 1000, 0.12], [EV.fm_on, 560, 1020, 0.1, 'x'], [EV.fm_aut, 480, 1120, 0.16], [EV.fm_crisp, 600, 1220, 0.26], [S1.film, 620, 1230, 0.3]]
  };
  // ---------------------------------------------------------------- переход: кинолента — кадр уезжает вверх по перфорации
  TRANS_IN.film = { a: 0.25, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), sc = 0.84, fh = H * sc + 60;
    scr(() => { ctx.fillStyle = '#121010'; ctx.fillRect(0, 0, W, H); });
    const off = e * fh; drawBuf(A, sc, 540, 960 - off); drawBuf(B, sc, 540, 960 - off + fh);
    scr(() => { for (const x of [30, W - 30]) for (let i = -2; i < 26; i++) { const y = ((i * 90 - off) % (90 * 24) + 90 * 24) % (90 * 24) - 90; ctx.fillStyle = '#f4ecd8'; ctx.globalAlpha = 0.85; ctx.fillRect(x - 16, y, 32, 46); ctx.globalAlpha = 1; } });
  } };
})();
