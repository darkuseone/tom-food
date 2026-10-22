/* 002 — `name`: «"Наггетс" по-английски — самородок. Золото из курицы!» Золотая лихорадка: закатный каньон, река, деревянный жёлоб, палатки, старатели с лотками.
   Том-старатель моет лоток; на «самородок» поднимает сияющий самородок — словарная карточка NUGGET = САМОРОДОК; на «Золото из курицы!» самородок
   покрывается панировкой (золотой наггетс), рядом квохчет курица в шляпке, старатели бросают кирки. Переход В сцену: луковое кольцо-«глазок» раскрывается. */
(() => {
  EV.nm_word = LS('s7') + 0.1;
  EV.nm_rock = wtw('s7', 'самородок.');
  EV.nm_gold = wtw('s7', 'Золото');
  EV.nm_chick = wtw('s7', 'курицы!');
  SHAKES.push([EV.nm_gold + 0.05, 0.2, 8]);
  KEYW.push('самородок.', 'Золото');

  function sky(t) {                                                    // закат, каньон, сосны
    vgrad(-600, 1300, ['#4a2a6a', '#e8603a', '#f6c060']); ell(700, 760, 120, 120, { wash: '#fff0b0', washA: 1, line: false }); glow(700, 760, 420, 'rgba(255,220,120,1)', 0.6);
    for (let i = 0; i < 5; i++) { const r = rng(2700 + i); blob([[r() * 1080 - 200, 200 + i * 90], [r() * 1080, 180 + i * 90], [r() * 1080 + 300, 220 + i * 90], [r() * 1080 + 100, 240 + i * 90]], { wash: '#f6a07a', washA: 0.5, line: false }); }
    hills(900, 260, '#a8462a', 0.7); hills(980, 180, '#8a3420', 2.1);
  }
  function canyon(t) {                                                 // утёсы с полосами, сосны, палатки старателей
    for (const [x0, sd] of [[-200, 1], [1280, -1]]) { const pts = [[x0, 1500], [x0, 500], [x0 + sd * 200, 560], [x0 + sd * 260, 700], [x0 + sd * 340, 760], [x0 + sd * 380, 1000], [x0 + sd * 460, 1100], [x0 + sd * 520, 1500]]; const c = shape(pts, { wash: '#b8562a', washA: 1, w: 3, col: '#3a1408', key: 2710 + sd });
      shadeG(c.path, x0 + sd * 500, 0, x0, 0, '#5a1a08', 0.5); ctx.save(); ctx.clip(c.path); for (let i = 0; i < 12; i++) pencil([[x0 - 100, 560 + i * 80], [x0 + sd * 600, 600 + i * 80]], { w: 6, col: i % 2 ? '#d8763a' : '#8a3a18', a: 0.5, pass2: false }); ctx.restore(); }
    for (let i = 0; i < 8; i++) { const x = 140 + i * 110, y = 1080 + (i % 3) * 14; spruce(x, y, 180 + (i % 3) * 40, '#2a3a2a', 0.9); }
    for (const [x, c] of [[300, '#efe2c4'], [820, '#e8d4a8']]) { poly([[x - 90, 1180], [x, 1060], [x + 90, 1180]], { wash: c, washA: 1, w: 2.4, col: '#3a2a14' }); poly([[x - 16, 1180], [x, 1120], [x + 16, 1180]], { wash: '#3a2a14', washA: 1, line: false }); }
  }
  function river(t) {                                                  // река: блики, жёлоб, старатели
    const r = rect(-300, 1200, 1700, 260, { wash: '#4a8aa8', washA: 1, w: 2, col: '#1a3a4a', key: 2720 }); for (let i = 0; i < 30; i++) { const rr = rng(2721 + i), x = (rr() * 1700 - 300 + t * 60) % 1700 - 300; pencil([[x, 1220 + rr() * 220], [x + 40, 1220 + rr() * 220]], { w: 3, col: '#f6e0a0', a: 0.7, pass2: false }); }
    push(860, 1230, 1, -0.08); rect(-260, -40, 520, 50, { wash: '#8a5a2a', washA: 1, w: 2.6, col: '#2a1408' }); for (let i = 0; i < 6; i++) pencil([[-240 + i * 90, -40], [-240 + i * 90, 10]], { w: 3, col: '#4a2a10', pass2: false }); for (const x of [-220, 200]) pencil([[x, 10], [x, 120]], { w: 10, col: '#5a3a18' }); pop();
    const surprised = t > EV.nm_gold; human(140, 1290, 1.0, t, { body: '#4a5a7a', hair: '#6a4a2a', face: surprised ? 'shock' : 'calm', armL: 'hold', armR: surprised ? 'up' : 'hold', seed: 111, beard: 'long', look: 0.6 }); hat20(140, 1290, 1.0, 'fedora', '#6a4a2a');
    push(140 + 30, 1290 - 140, 1); ell(0, 0, 60, 14, { wash: '#5a5048', washA: 1, w: 2 }); pop();
    human(960, 1260, 0.95, t, { body: '#8a3a2a', hair: '#2a1a0a', face: surprised ? 'grin' : 'calm', armL: 'hold', armR: surprised ? 'up' : 'swing', seed: 112, flip: -1, beard: 'short', prop: surprised ? undefined : 'axe', look: -0.6 }); hat20(960, 1260, 0.95, 'fedora', '#3a2a1a', -1);
    if (surprised) { push(1060, 1200 - Math.min(1, (t - EV.nm_gold) * 3) * 120, 1, (t - EV.nm_gold) * 10); pencil([[0, 60], [0, -110]], { w: 8, col: '#6a4424' }); blob([[0, -110], [40, -130], [46, -80], [0, -84]], { wash: '#9aa0a6', washA: 1, w: 2 }); pop(); }
  }
  function chicken(t) { if (t < EV.nm_gold - 0.2) return; const k = sm(clamp((t - EV.nm_gold + 0.2) / 0.4)), x = lerp(-150, 270, k), y = 1560 - Math.abs(Math.sin(t * 10)) * 20;   // курица в шляпке старателя
    push(x, y, 1.3); blob([[-40, 10], [-50, -30], [-20, -60], [20, -66], [44, -40], [46, 10]], { wash: '#f6f2e8', washA: 1, w: 2.4, col: '#3a2a14' }); poly([[44, -46], [70, -40], [44, -32]], { wash: '#e8b53a', washA: 1, w: 1.6 }); ell(28, -48, 5, 6, { wash: '#1a0a04', washA: 1, line: false });
    ell(20, -70, 34, 8, { wash: '#6a4a2a', washA: 1, w: 1.6 }); rect(2, -94, 36, 24, { wash: '#6a4a2a', washA: 1, w: 1.6 }); for (const sd of [-1, 1]) pencil([[sd * 12, 10], [sd * 14, 40]], { w: 4, col: '#e8b53a', pass2: false }); pop();
    if (t > EV.nm_chick) bubbleTag('КО-КО-КО!', x + 60, y - 200, t, EV.nm_chick, '#e8b53a', 36, 0.06); }
  function dict(t) { if (t < EV.nm_word) return; const k = popK(t, EV.nm_word, 0.35); push(700, 600, k, 0.04);   // словарная карточка
    const c = rect(-260, -130, 520, 260, { wash: '#f6ecd0', washA: 1, w: 3, col: '#3a2a14', key: 2730 }); ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.3)'; ctx.restore(); for (let i = 0; i < 5; i++) pencil([[-240, -60 + i * 40], [240, -60 + i * 40]], { w: 1.2, col: '#9ab8c8', a: 0.5, pass2: false });
    txt('NUGGET', -60, -80, 64, { font: 'Osw', col: '#2b2622' }); txt('[ˈnʌɡɪt]', 160, -76, 30, { font: 'Hand', col: '#6a5a44' }); txt('сущ.', -190, -10, 30, { font: 'Hand', col: '#6a5a44' });
    if (t > EV.nm_rock) { txt('САМОРОДОК', 40, 50, 66, { font: 'Osw', col: '#b8733a', reveal: clamp((t - EV.nm_rock) / 0.4) }); } pop(); }
  function sparkle(t, P) { const hx = P.x + 90 * P.s, hy = P.y - 420 * P.s; if (t < EV.nm_rock) return; for (let i = 0; i < 6; i++) { const a = t * 2 + i, d = 80 + Math.sin(t * 5 + i) * 20; const x = hx + Math.cos(a) * d, y = hy + Math.sin(a) * d; pencil([[x - 14, y], [x + 14, y]], { w: 3, col: '#fff8c0', pass2: false }); pencil([[x, y - 14], [x, y + 14]], { w: 3, col: '#fff8c0', pass2: false }); } glow(hx, hy, 160, 'rgba(255,230,120,1)', 0.45); }
  WORLD.name = (t, u, cat) => {
    lay(30, () => { sky(t); }); lay(8, () => { canyon(t); haze('#ffb070', 0.1); });
    lay(2.2, () => { river(t); dict(t); });
    lay(1, () => { const g = rect(-300, 1430, 1700, 600, { wash: '#c8964a', washA: 1, w: 2, col: '#3a1a08', key: 2740 }); shadeG(g.path, 540, 1430, 540, 1800, '#6a3a14', 0.4); for (let i = 0; i < 20; i++) { const r = rng(2741 + i); ell(r() * 1300 - 100, 1460 + r() * 300, 10 + r() * 20, 6 + r() * 10, { wash: '#8a5a2a', washA: 0.8, w: 1.2, col: '#3a1a08' }); }
      cat(); chicken(t); });
  };
  DIR.name = {
    outfit: 'prospector', light: { side: 1, rim: '#ffd080' }, grade: ['#ffb050', 0.16],
    act: () => [[S0.name, 'talk'], [EV.nm_rock, 'awe'], [EV.nm_gold, 'laugh'], [EV.nm_chick + 0.2, 'smug']],
    pose: (t, u, b) => { const up = t > EV.nm_rock - 0.1; return Object.assign(b, { x: 560, y: 1700, s: 1.25, look: up ? [0.5, -0.8] : [0.3, 0.7], hand: up ? [90, -420] : [120, -200 + Math.sin(t * 10) * 16], handF: up ? [-60, -300] : [-120, -210],
      prop: up ? (t > EV.nm_gold ? 'goldNugP' : 'rockP') : 'panP', tailUp: up }); },
    afterCat: (t, u, P) => sparkle(t, P),
    cam: () => [[S0.name, 560, 1300, 0.3], [EV.nm_word, 580, 1000, 0.12], [EV.nm_rock, 600, 960, 0.18], [EV.nm_gold, 600, 1100, 0.3, 'x'], [S1.name, 600, 1120, 0.36]]
  };
  Object.assign(PROPS, {
    rockP() { push(0, -40, 0.7); const g = blob([[-50, 10], [-56, -30], [-20, -56], [30, -50], [56, -14], [40, 30], [0, 40]], { wash: FN.gold, washA: 1, w: 2.6, col: '#5a3a06', key: 7730 }); metalG(g.path, -16, -26, 70, FN.goldL, FN.gold, FN.goldD); for (let i = 0; i < 6; i++) { const r = rng(7731 + i); ell(-30 + r() * 60, -30 + r() * 50, 5, 3, { wash: FN.goldD, washA: 0.6, line: false }); } pop(); },
    goldNugP() { nugget(0, -40, 0.68, 0.1, { kind: 'ball', key: 7732 }); ctx.save(); ctx.globalCompositeOperation = 'overlay'; ctx.globalAlpha = 0.5; ell(0, -40, 40, 32, { wash: '#fff0a0', washA: 1, line: false }); ctx.restore(); },
  });
  // ---------------------------------------------------------------- переход: луковое кольцо-«глазок» раскрывается
  TRANS_IN.name = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1 + k * 0.3, 540, 960); const R = Math.pow(k, 1.6) * 1300 + 20, cx = 540, cy = 960; inCircle(cx, cy, R, () => drawBuf(B, 0.9 + 0.1 * k, 540, 960));
    scr(() => { const w = 40 + R * 0.25; pencil(ellPts(cx, cy, R + w / 2, R * 0.92 + w / 2, 0, 0.02, 80), { w, col: FN.crust, pass2: false }); pencil(ellPts(cx, cy, R + w / 2, R * 0.92 + w / 2, 0, 0.02, 80), { w: w * 0.4, col: FN.crustL, a: 0.6, pass2: false });
      pencil(ellPts(cx, cy, R + w, R * 0.92 + w, 0, 0.02, 80), { w: 4, col: '#4a2408', pass2: false }); pencil(ellPts(cx, cy, R, R * 0.92, 0, 0.02, 80), { w: 4, col: '#4a2408', pass2: false }); });
  } };
})();
