/* 002 — `judge`: «Две тысячи третий: судья обозвал их "МакФранкенштейном" — десятки ингредиентов, не только курица.» Зал суда в грозу: тёмное дерево,
   высокие окна с молниями, герб, присяжные, судья в мантии с молотком. На столе улик под лампой — наггетс. «МакФранкенштейном» — молния, наггетс
   садится: болты, шрамы-швы, руки вперёд. «десятки ингредиентов» — длинный свиток-состав разворачивается до пола, «не только курица» — маленькая курица
   в свитке обведена. Том-адвокат с папкой, косится. Переход В сцену: удар молотка — кадр сплющивается в линию и выпрыгивает новым. */
(() => {
  EV.jd_judge = wtw('s9', 'судья');
  EV.jd_frank = wtw('s9', '«МакФранкенштейном»');
  EV.jd_list = wtw('s9', 'десятки');
  EV.jd_chick = wtw('s9', 'курица.');
  SHAKES.push([EV.jd_frank + 0.05, 0.3, 14]);
  KEYW.push('«МакФранкенштейном»');

  const flash = t => { const d = t - EV.jd_frank; return (d > 0 && d < 0.12) || (d > 0.22 && d < 0.3) ? 1 : Math.sin(t * 0.9) > 0.995 ? 0.6 : 0; };
  function hall(t) {                                                   // дерево, окна с грозой, герб
    vgrad(-600, 1600, ['#140c08', '#2a1a10', '#3a2416']); const fl = flash(t);
    for (const x of [60, 820]) { const w = shape(spline([[x, 900], [x, 300], [x + 100, 200], [x + 200, 300], [x + 200, 900]], true, 6), { wash: '#1a2440', washA: 1, w: 4, col: '#0a0604', key: 2900 + x }); ctx.save(); ctx.clip(w.path); vgrad(200, 900, fl ? ['#d8e8ff', '#8aa8d8'] : ['#1a2440', '#2a3a5a']);
      for (let i = 0; i < 30; i++) { const r = rng(2901 + i), y = (r() * 800 + t * 900) % 800 + 150; pencil([[x + r() * 200, y], [x + r() * 200 - 10, y + 40]], { w: 2, col: '#8aa8d8', a: 0.6, pass2: false }); }
      if (fl) pencil([[x + 120, 200], [x + 80, 420], [x + 130, 440], [x + 70, 700]], { w: 6, col: '#ffffff', pass2: false }); ctx.restore(); pencil([[x + 100, 200], [x + 100, 900]], { w: 6, col: '#0a0604', pass2: false }); pencil([[x, 560], [x + 200, 560]], { w: 6, col: '#0a0604', pass2: false }); }
    for (let i = 0; i < 12; i++) { const x = -300 + i * 150; rect(x, 950, 140, 400, { wash: '#4a2a14', washA: 1, w: 2, col: '#1a0a04' }); rect(x + 14, 970, 112, 360, { wash: '#5a3418', washA: 1, w: 1.6, col: '#1a0a04' }); }
    push(540, 360, 1); ell(0, 0, 120, 120, { wash: '#c99636', washA: 1, w: 3, col: '#4a2a06' }); ell(0, 0, 96, 96, { wash: '#2a3a5a', washA: 1, w: 2 }); for (const sd of [-1, 1]) blob([[sd * 10, -40], [sd * 70, -60], [sd * 80, 0], [sd * 40, 40], [sd * 10, 20]], { wash: '#c99636', washA: 1, w: 1.8, col: '#4a2a06' }); ell(0, -10, 20, 26, { wash: '#f6f0dc', washA: 1, w: 1.6 }); pop();
    txt('U.S. DISTRICT COURT', 540, 520, 30, { font: 'Osw', col: '#c99636', a: 0.8 }); if (fl) screenFill('#dfe8ff', 0.25 * fl, 'lighter');
  }
  function bench(t) {                                                  // судья за кафедрой, присяжные сбоку
    for (let i = 0; i < 6; i++) { const x = -40 + (i % 3) * 110, y = 1160 + Math.floor(i / 3) * 70; human(x, y, 0.62, t, { body: ['#3a3a4a', '#5a2a2a', '#2a4a3a', '#4a4a2a', '#3a2a4a', '#2a2a2a'][i], hair: ['#2a1a0a', '#c8c8c8', '#6a4a2a'][i % 3], face: t > EV.jd_frank ? 'shock' : 'calm', armL: 'hold', armR: 'hold', seed: 120 + i, look: 0.5 }); }
    rect(-120, 1180, 380, 180, { wash: '#4a2a14', washA: 1, w: 3, col: '#1a0a04' });
    const x = 640, hit = t > EV.jd_judge && t < EV.jd_judge + 0.25; human(x, 1060, 1.1, t, { body: '#141418', hair: '#e8e8e8', face: t > EV.jd_frank ? 'angry' : 'calm', armL: 'hold', armR: hit ? 'point' : 'up', seed: 130, look: 0.2, beard: undefined });
    push(x, 1060 + (-238 - 46) * 1.1 - 5, 1.1); for (const sd of [-1, 1]) ell(sd * 15, 0, 13, 11, { line: true, w: 3, col: '#c99636' }); pop();
    const b = rect(x - 330, 900, 660, 460, { wash: '#5a3418', washA: 1, w: 4, col: '#1a0a04', key: 2910 }); shadeG(b.path, x + 330, 0, x - 200, 0, '#2a1408', 0.55); rect(x - 350, 880, 700, 40, { wash: '#7a4a24', washA: 1, w: 3, col: '#1a0a04' }); for (let i = 0; i < 4; i++) rect(x - 300 + i * 160, 960, 120, 340, { wash: '#6a3e1c', washA: 1, w: 2, col: '#1a0a04' });
    push(x + 200, hit ? 870 : 780, 1, hit ? -0.1 : -0.9); pencil([[0, 0], [0, -100]], { w: 10, col: '#6a3a18' }); rect(-44, -130, 88, 36, { wash: '#7a4420', washA: 1, w: 2.4, col: '#2a1408' }); pop(); rect(x + 160, 870, 90, 16, { wash: '#7a4420', washA: 1, w: 2 });
    rect(x - 70, 930, 140, 50, { wash: '#c99636', washA: 1, w: 2, col: '#4a2a06' }); txt('JUDGE', x, 956, 26, { font: 'Osw', col: '#2a1408' });
    if (t > EV.jd_judge) bubbleTag('СУДЬЯ РОБЕРТ СВИТ', x, 640, t, EV.jd_judge, '#2b2622', 32, 0.03);
  }
  function evidence(t) {                                               // стол улик: лампа, наггетс → «МакФранкенштейн»
    const x = 380, y = 1420; rect(x - 220, y - 20, 440, 30, { wash: '#6a3e1c', washA: 1, w: 3, col: '#1a0a04', key: 2920 }); for (const sd of [-1, 1]) pencil([[x + sd * 190, y + 10], [x + sd * 190, y + 400]], { w: 14, col: '#4a2a14' });
    pencil([[x - 160, y - 20], [x - 160, y - 240], [x - 60, y - 280]], { w: 6, col: '#2a2a2a', pass2: false }); poly([[x - 100, y - 300], [x - 20, y - 300], [x, y - 250], [x - 120, y - 250]], { wash: '#2a6a4a', washA: 1, w: 2.4, col: '#0a1a10' }); glow(x - 60, y - 200, 200, 'rgba(255,240,180,1)', 0.35);
    rect(x + 60, y - 60, 120, 50, { wash: '#f6f2e2', washA: 1, w: 1.6, col: '#3a2a14' }); txt('УЛИКА №1', x + 120, y - 34, 18, { font: 'Osw', col: '#a8241e' });
    const up = clamp((t - EV.jd_frank) / 0.35), f = t > EV.jd_frank; push(x - 40, y - 50 - up * 60, 1, -up * 0.0);
    if (f) { for (const sd of [-1, 1]) { pencil([[sd * 50, -10], [sd * 120, -30 - Math.sin(t * 6) * 6]], { w: 18, col: FN.crust }); ell(sd * 126, -32, 14, 12, { wash: FN.crustL, washA: 1, w: 2, col: '#4a2408' }); } }
    nugget(0, 0, 1.3, 0, { kind: 'ball', key: 2921, face: f ? 'monster' : undefined }); if (f) { for (let i = 0; i < 4; i++) pencil([[-30 + i * 18, -50], [-26 + i * 18, -38]], { w: 2, col: '#2a1408', pass2: false }); pencil([[-36, -44], [36, -44]], { w: 2, col: '#2a1408', pass2: false }); }
    pop(); if (f && t < EV.jd_frank + 0.6) { const k = (t - EV.jd_frank) / 0.6; for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283; pencil([[x - 40 + Math.cos(a) * 80 * (1 + k), y - 90 + Math.sin(a) * 80 * (1 + k)], [x - 40 + Math.cos(a) * 130 * (1 + k), y - 90 + Math.sin(a) * 130 * (1 + k)]], { w: 4, col: '#cfe8ff', a: 1 - k, pass2: false }); } }
  }
  function scroll(t) {                                                 // свиток состава разворачивается до пола
    if (t < EV.jd_list - 0.1) return; const k = sm(clamp((t - EV.jd_list + 0.1) / 0.8)), x = 760, y0 = 560, h = 900 * k; push(x, y0, 1, 0.04);
    rect(-150, 0, 300, h, { wash: '#f2e6c8', washA: 1, w: 2.4, col: '#5a4020', key: 2930 }); ell(0, 0, 160, 18, { wash: '#d8c8a0', washA: 1, w: 2.4, col: '#5a4020' }); ell(0, h, 160, 18, { wash: '#d8c8a0', washA: 1, w: 2.4, col: '#5a4020' });
    txt('СОСТАВ:', 0, 40, 34, { font: 'Osw', col: '#2b2622' }); for (let i = 0; i < 24; i++) { const y = 80 + i * 34; if (y > h - 20) break; pencil([[-120, y], [-120 + 160 + (i * 37 % 80), y]], { w: 6, col: '#6a5a44', a: 0.55, pass2: false }); txt(String(i + 1), 120, y, 22, { font: 'Hand', col: '#a8241e' }); }
    if (t > EV.jd_chick && h > 300) { const cy = 260; push(-60, cy, 0.5); blob([[-40, 10], [-50, -30], [-20, -60], [20, -66], [44, -40], [46, 10]], { wash: '#f6f2e8', washA: 1, w: 2.4, col: '#3a2a14' }); poly([[20, -66], [24, -90], [32, -72], [40, -88], [42, -60]], { wash: '#c8281e', washA: 1, w: 1.6 }); pop();
      pencil(ellPts(-60, cy - 14, 70, 50, 0.2, 0.15, 30).slice(0, Math.floor(30 * clamp((t - EV.jd_chick) / 0.35))), { w: 6, col: '#d9482b', pass2: false }); bubbleTag('ТОЛЬКО №1?', 60, cy + 60, t, EV.jd_chick + 0.2, '#d9482b', 30, -0.05); }
    pop();
  }
  WORLD.judge = (t, u, cat) => {
    lay(16, () => { hall(t); }); lay(3.4, () => { bench(t); }); lay(1.5, () => { evidence(t); scroll(t); });
    lay(1, () => { const f = rect(-300, 1500, 1700, 600, { wash: '#3a2214', washA: 1, w: 2, col: '#0a0604', key: 2940 }); for (let i = 0; i < 12; i++) pencil([[-300, 1520 + i * 40], [1400, 1530 + i * 40]], { w: 1.6, col: '#1a0a04', a: 0.5, pass2: false }); cat(); });
    lay(0.6, () => { if (flash(t)) glow(540, 900, 900, 'rgba(220,235,255,1)', 0.25); });
  };
  DIR.judge = {
    outfit: 'lawyer', light: { side: 1, rim: '#cfe0ff' }, grade: ['#5a7ab8', 0.12],
    act: () => [[S0.judge, 'suspicious'], [EV.jd_judge, 'talk'], [EV.jd_frank, 'scared'], [EV.jd_frank + 0.5, 'shock'], [EV.jd_list, 'sideeye'], [EV.jd_chick, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 860, y: 1760, s: 1.18, flip: true, look: t < EV.jd_frank ? [0.3, -0.6] : t < EV.jd_list ? [0.9, 0.2] : [0.4, -0.3], hand: t > EV.jd_list ? [140, -300] : [100, -230], handF: [-90, -220], prop: 'folderP', tailUp: false, sweat: t > EV.jd_frank && t < EV.jd_list }),
    cam: () => [[S0.judge, 640, 900, 0.22], [EV.jd_judge, 640, 860, 0.18], [EV.jd_frank, 380, 1260, 0.4, 'x'], [EV.jd_list, 620, 1080, 0.12], [EV.jd_chick, 680, 960, 0.2], [S1.judge, 680, 960, 0.24]]
  };
  // ---------------------------------------------------------------- переход: удар молотка — кадр сплющивается и выпрыгивает новым
  TRANS_IN.judge = { a: 0.2, b: 0.4, runA: 0, fx(k, t, A, B) {
    scr(() => { ctx.fillStyle = '#140c08'; ctx.fillRect(0, 0, W, H); });
    if (k < 0.5) { const s = 1 - sm(k / 0.5) * 0.97; scr(() => { ctx.save(); ctx.translate(0, 960); ctx.scale(1, s); ctx.drawImage(A, 0, -960); ctx.restore(); }); }
    else { const kk = (k - 0.5) / 0.5, s = popK(kk, 0, 1); scr(() => { ctx.save(); ctx.translate(540, 960); ctx.scale(1, Math.max(0.03, s)); ctx.drawImage(B, -540, -960); ctx.restore(); }); }
    if (k > 0.4 && k < 0.7) scr(() => { const kk = (k - 0.4) / 0.3; for (let i = 0; i < 14; i++) { const a = i / 14 * 6.283; pencil([[540 + Math.cos(a) * 200 * (1 + kk * 3), 960 + Math.sin(a) * 60 * (1 + kk * 3)], [540 + Math.cos(a) * 320 * (1 + kk * 3), 960 + Math.sin(a) * 100 * (1 + kk * 3)]], { w: 8, col: '#fff6d0', a: 1 - kk, pass2: false }); } });
  } };
})();
