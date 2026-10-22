/* 002 — `today` + `button`: «Двадцать первый: наггетс-человечек ушёл почти за сто тысяч. А Бейкер отдал рецепт даром.» Тёплая студия-кухня, боке гирлянд,
   на стене — табло «ПРОДАНО $99 997» и портрет профессора Бейкера. ХИРО-ШОТ: тарелка с горой наггетсов медленно разворачивается (2.5D), три соуса с бликами, пар.
   Том-шеф макает наггетс в барбекю и жуёт. «даром» — из рамки вылетает листок рецепта, штамп «БЕСПЛАТНО», портрет подмигивает.
   `button`: Том с коробкой в камеру, «Пиши блюдо — откусим!», подмигивает. Переходы: вспышка камеры с диафрагмой (В today), мазок соуса (В button). */
(() => {
  EV.td_sold = wtw('t1', 'сто');
  EV.td_baker = wtw('t1', 'Бейкер');
  EV.td_free = wtw('t1', 'даром.');
  EV.bt_wink = LF('x1', 0.7);
  KEYW.push('даром.');

  function studio(t) {                                                 // тёплая стена, гирлянда-боке, табло, портрет Бейкера
    vgrad(-600, 1600, ['#3a1a10', '#6a3418', '#a8642a']); const r = rng(3001); for (let i = 0; i < 34; i++) glow(r() * 1300 - 100, 120 + r() * 900, 30 + r() * 70, ['rgba(255,190,100,1)', 'rgba(255,130,80,1)', 'rgba(255,235,180,1)'][i % 3], 0.22 + 0.1 * Math.sin(t * 2 + i));
    pencil(spline([[-200, 140], [200, 220], [540, 160], [900, 230], [1300, 150]], false, 10), { w: 3, col: '#2a1408', pass2: false }); for (let i = 0; i < 16; i++) { const x = -150 + i * 95, y = 170 + Math.sin(i * 1.3) * 34; ell(x, y + 16, 9, 13, { wash: '#ffe6a0', washA: 1, w: 1.4, col: '#6a4a14' }); glow(x, y + 16, 40, 'rgba(255,220,140,1)', 0.6 * flick(t, i)); }
    push(760, 470, 1, 0.03); const b = rect(-250, -120, 500, 240, { wash: '#1a120c', washA: 1, w: 4, col: '#000', key: 3002 }); pencil([[-250, -120], [250, -120], [250, 120], [-250, 120], [-250, -120]], { w: 12, col: '#c99636', pass2: false });
    txt('ПРОДАНО', 0, -66, 46, { font: 'Osw', col: '#ff6a3a' }); ctx.save(); ctx.font = '600 104px Osw'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.shadowColor = 'rgba(255,200,80,1)'; ctx.shadowBlur = 26; ctx.fillStyle = '#ffd24a'; ctx.fillText(money(99997), 0, 30); ctx.restore();
    if (t > EV.td_sold) { push(150, -150, popK(t, EV.td_sold, 0.3), 0.2); nugget(0, 0, 0.9, 0, { kind: 'among', key: 7710 }); pop(); } pop();
    push(250, 760, 1, -0.03); const f = rect(-130, -160, 260, 320, { wash: '#d6a842', washA: 1, w: 3, col: '#4a2a06', key: 3003 }); metalG(f.path, -50, -90, 300, '#fff0b0', '#d6a842', '#6a4208'); rect(-104, -134, 208, 250, { wash: '#6a8a9a', washA: 1, w: 2 });
    const wink = t > EV.td_free + 0.2; human(0, 180, 0.62, t, { body: '#f4f6f2', bodyD: '#a8b0ac', hair: '#5a4a3a', face: wink ? 'grin' : 'smile', armL: 'hold', armR: wink ? 'up' : 'hold', seed: 71 });
    push(0, 180 + (-238 - 46) * 0.62 - 3, 0.62); for (const sd of [-1, 1]) ell(sd * 15, 0, 13, 11, { line: true, w: 3, col: '#1a1a1a' }); pop(); rect(-90, 120, 180, 30, { wash: '#f6ecd0', washA: 1, w: 1.6 }); txt('Р. БЕЙКЕР · 1963', 0, 136, 20, { font: 'Osw', col: '#3a2408' }); pop();
    if (t > EV.td_baker) glow(250, 760, 260, 'rgba(255,230,150,1)', 0.35);
  }
  function recipeFly(t) { if (t < EV.td_free - 0.15) return; const k = clamp((t - EV.td_free + 0.15) / 0.8), x = lerp(250, 520, sm(k)), y = lerp(760, 820, sm(k)) - Math.sin(k * 3.1) * 120;   // листок рецепта со штампом
    push(x, y, 0.6 + 0.6 * sm(k), Math.sin(t * 6) * 0.08 * (1 - k) - 0.06); rect(-150, -190, 300, 380, { wash: '#f6f0dc', washA: 1, w: 2.6, col: '#3a2a14', key: 3010 }); txt('CHICKEN STICKS', 0, -150, 30, { font: 'Osw', col: '#2b2622' }); txt('Cornell · 1963', 0, -116, 24, { font: 'Hand', col: '#6a5a44' });
    for (let i = 0; i < 7; i++) pencil([[-120, -80 + i * 30], [-120 + 150 + (i * 41 % 90), -80 + i * 30]], { w: 5, col: '#6a5a44', a: 0.5, pass2: false });
    if (k > 0.5) { const s = popK(t, EV.td_free + 0.25, 0.25); push(10, 120, 1.4 - 0.4 * s, -0.2); ctx.globalAlpha = s; pencil([[-140, -40], [140, -40], [140, 40], [-140, 40], [-140, -40]], { w: 6, col: '#d9482b', pass2: false }); txt('БЕСПЛАТНО', 0, 2, 52, { font: 'Osw', col: '#d9482b' }); ctx.globalAlpha = 1; pop(); } pop(); }
  function table(t) { const tb = poly([[-500, 1300], [1600, 1300], [1700, 2400], [-600, 2400]], { wash: '#7a4422', washA: 1, w: 3, col: '#2a1408', key: 3020 }); shadeG(tb.path, 540, 1300, 540, 1900, '#2a1408', 0.4);
    ctx.save(); ctx.clip(tb.path); for (let i = 0; i < 14; i++) pencil([[-500, 1320 + i * 46], [1600, 1330 + i * 46]], { w: 2, col: '#4a2410', a: 0.4, pass2: false }); ctx.restore();
    const cl = poly([[100, 1310], [900, 1310], [980, 1700], [40, 1700]], { wash: '#f4e6c8', washA: 1, w: 2, col: '#8a6a40' }); ctx.save(); ctx.clip(cl.path); for (let i = 0; i < 12; i++) { pencil([[100 + i * 80, 1300], [60 + i * 86, 1720]], { w: 18, col: '#d9482b', a: 0.5, pass2: false }); pencil([[0, 1340 + i * 60], [1000, 1340 + i * 60]], { w: 14, col: '#d9482b', a: 0.35, pass2: false }); } ctx.restore(); }
  const PLATE = (() => { const r = rng(3030), N = []; const kinds = ['bell', 'ball', 'boot', 'bone']; for (let i = 0; i < 16; i++) { const rad = i < 1 ? 0 : i < 6 ? 0.42 : 0.8, a = i < 1 ? 0 : i < 6 ? (i - 1) / 5 * 6.283 : (i - 6) / 10 * 6.283 + 0.3; N.push({ rad, a, kind: kinds[i % 4], rot: r() * 6.28, h: i < 1 ? 1.3 : i < 6 ? 0.7 : 0.15, key: 3031 + i }); } return N; })();
  function hero(x, y, R, ang, t) {                                     // 2.5D-тарелка: наггетсы по кругу, сортировка по глубине, пар, соусы
    ell(x, y + 30, R * 1.15, R * 0.38, { wash: '#000000', washA: 0.25, line: false }); const pl = ell(x, y, R * 1.12, R * 0.4, { wash: '#f6f2ea', washA: 1, w: 3, col: '#5a5048', key: 3040 }); shadeG(pl.path, x + R, y + R * 0.3, x - R * 0.3, y - R * 0.2, '#b8b0a4', 0.5); ell(x, y - 4, R * 0.86, R * 0.3, { line: true, w: 2, col: '#c8c0b4' });
    const items = PLATE.map(n => { const a = n.a + ang, px = x + Math.cos(a) * n.rad * R * 0.8, py = y + Math.sin(a) * n.rad * R * 0.28 - n.h * 60 - 30; return { z: Math.sin(a) * n.rad + n.h * 0.2, f: () => nugget(px, py, 1.15, n.rot + ang * 0.3, { kind: n.kind, key: n.key }) }; });
    items.sort((a, b) => a.z - b.z).forEach(i => i.f());
    for (let q = 0; q < 5; q++) { const k = (t * 0.45 + q / 5) % 1; pencil(spline([[x - 80 + q * 40, y - 140 - k * 200], [x - 70 + q * 40 + Math.sin(k * 6 + q) * 30, y - 220 - k * 240], [x - 86 + q * 40, y - 300 - k * 260]], false, 6), { w: 8, col: '#ffffff', a: 0.35 * Math.sin(k * Math.PI), pass2: false }); }
    sauceCup(x - R * 1.2, y + 90, 1.6, FN.bbq, FN.bbqL, { drip: 1 }); sauceCup(x + R * 0.1, y + 170, 1.5, FN.sour, FN.sourL); sauceCup(x + R * 1.25, y + 60, 1.4, FN.must, FN.mustL);
  }
  WORLD.today = (t, u, cat) => {
    lay(12, () => { studio(t); }); lay(1.3, () => { table(t); }); lay(1.12, () => { hero(470, 1420, 300, t * 0.35, t); });
    lay(1, () => { cat(); }); lay(0.9, () => { recipeFly(t); });
  };
  DIR.today = {
    outfit: 'chef', light: { side: -1, rim: '#ffd0a0' }, grade: ['#ff9050', 0.1],
    act: () => [[S0.today, 'grin'], [EV.td_sold, 'awe'], [EV.td_sold + 0.6, 'laugh'], [EV.td_baker, 'proud'], [EV.td_free, 'smug']],
    pose: (t, u, b) => { const ph = ((t - S0.today) % 2.2) / 2.2, toMouth = ph > 0.55 && ph < 0.85, dip = ph > 0.2 && ph < 0.45;
      return Object.assign(b, { x: 780, y: 1780, s: 1.2, flip: true, look: t > EV.td_baker ? [0.9, -0.6] : [0.6, 0.6], hand: toMouth ? [50, -380] : dip ? [330, -160] : [160, -260], handF: [-90, -210], prop: toMouth && ph > 0.7 ? 'nugBiteP' : 'sauceP', chew: toMouth }); },
    cam: () => [[S0.today, 520, 1400, 0.4], [S0.today + 1.2, 560, 1180, 0.12, 'x'], [EV.td_sold, 640, 900, 0.14], [EV.td_baker, 420, 960, 0.16], [EV.td_free, 460, 1000, 0.2], [S1.today, 480, 1040, 0.22]]
  };
  WORLD.button = (t, u, cat) => { lay(12, () => studio(t)); lay(1.3, () => table(t)); lay(1.12, () => hero(330, 1450, 260, t * 0.35, t)); lay(1, () => cat()); };
  DIR.button = {
    outfit: 'chef', light: { side: -1, rim: '#ffd0a0' }, grade: ['#ff9050', 0.1],
    act: () => [[S0.button, 'grin'], [EV.bt_wink, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 720, y: 1820, s: 1.3, look: [0, 0], hand: [90, -330], handF: [-110, -260], prop: 'nugP', point: 0, tailUp: true }),
    cam: () => [[S0.button, 700, 900, 0.3], [S0.button + 0.5, 660, 960, 0.34], [DUR, 660, 980, 0.36]]
  };
  // ---------------------------------------------------------------- переход В today: вспышка камеры + диафрагма
  TRANS_IN.today = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const c = k < 0.45 ? sm(k / 0.45) : 1 - sm((k - 0.45) / 0.55); drawBuf(k < 0.45 ? A : B, 1, 540, 960);
    scr(() => { const R = (1 - c) * 1300; const P = new Path2D(); P.rect(0, 0, W, H); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283 + c * 1.2; i ? P.lineTo(540 + Math.cos(a) * R, 960 + Math.sin(a) * R) : P.moveTo(540 + Math.cos(a) * R, 960 + Math.sin(a) * R); } P.closePath();
      ctx.fillStyle = '#141010'; ctx.fill(P, 'evenodd'); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283 + c * 1.2; pencil([[540 + Math.cos(a) * R, 960 + Math.sin(a) * R], [540 + Math.cos(a + 0.6) * (R + 900), 960 + Math.sin(a + 0.6) * (R + 900)]], { w: 3, col: '#5a5050', pass2: false }); } });
    if (k > 0.4 && k < 0.6) whiteOut(1 - Math.abs(k - 0.5) * 10);
  } };
  // ---------------------------------------------------------------- переход В button: мазок соуса барбекю
  TRANS_IN.button = { a: 0.12, b: 0.35, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const x = lerp(-600, 1700, sm(k)); const P = new Path2D(); P.moveTo(-200, 2000); P.lineTo(x - 300, 2000); P.quadraticCurveTo(x + 100, 960, x - 300, -100); P.lineTo(-200, -100); P.closePath();
    inPath(P, () => drawBuf(B, 1, 540, 960)); scr(() => { for (let i = 0; i < 6; i++) pencil(spline([[x - 300 + i * 14, 2000], [x + 100 + i * 14, 960], [x - 300 + i * 14, -100]], false, 12), { w: 30 - i * 4, col: i % 2 ? FN.bbqL : FN.bbq, a: 0.95, pass2: false }); });
  } };
})();
