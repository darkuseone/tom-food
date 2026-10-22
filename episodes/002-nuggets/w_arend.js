/* 002 — `arend`: «Шеф Рене Аренд, кормивший королеву, лепит луковые наггетсы. Босс: давай курицу!» Тест-кухня 1979: медные вытяжки, фритюрницы,
   стальные столы, доска «ONION NUGGETS?», на стене — фото шефа с короной (кормил королеву). Аренд (усы, колпак) лепит луковые комочки, Том-шеф рыдает от лука.
   «Босс:» — дверь распахивается, босс в галстуке с живой курицей под мышкой: «ДАВАЙ КУРИЦУ!» — доска перечёркнута, курица хлопает крыльями.
   Переход В сцену: шипящее масло фритюра — пузыри вскипают и лопаются. */
(() => {
  EV.ar_chef = wtw('s6', 'Аренд,');
  EV.ar_queen = wtw('s6', 'королеву,');
  EV.ar_onion = wtw('s6', 'луковые');
  EV.ar_boss = wtw('s6', 'Босс:') - 0.15;
  EV.ar_chick = wtw('s6', 'курицу!');
  SHAKES.push([EV.ar_boss + 0.1, 0.22, 12], [EV.ar_chick, 0.2, 8]);
  KEYW.push('королеву,', 'курицу!');

  function wall(t) {                                                   // кафель песочный, медные вытяжки, доска, фото с короной, дверь
    vgrad(-600, 1600, ['#3a2a1e', '#6a4a30', '#8a6a48']);
    for (let r = 0; r < 20; r++) for (let i = 0; i < 18; i++) { const x = -300 + i * 90 + (r % 2) * 45, y = 560 + r * 44; if (y > 1400) continue; rect(x, y, 88, 42, { wash: (r * 3 + i) % 5 ? '#e8d4a8' : '#d8b880', washA: 1, w: 1, col: '#8a6a40', a: 0.6 }); }
    for (const x of [200, 760]) { const h = poly([[x - 220, 520], [x + 220, 520], [x + 140, 300], [x - 140, 300]], { wash: '#b8733a', washA: 1, w: 3, col: '#3a1a08', key: 2600 + x }); metalG(h.path, x - 60, 360, 300, '#f6c890', '#b8733a', '#5a2a10'); rect(x - 60, 120, 120, 180, { wash: '#a8642a', washA: 1, w: 2.6, col: '#3a1a08' }); for (let i = 0; i < 5; i++) pencil([[x - 200 + i * 100, 512], [x - 130 + i * 70, 310]], { w: 2, col: '#ffe0b0', a: 0.4, pass2: false }); }
    const b = rect(470, 600, 360, 230, { wash: '#f6f4ee', washA: 1, w: 4, col: '#3a3a3a', key: 2610 }); txt('ONION', 650, 660, 48, { font: 'Hand', col: '#2a5aa8' }); txt('NUGGETS?', 650, 720, 48, { font: 'Hand', col: '#2a5aa8' }); onionRing(540, 790, 0.4, 0, 1); txt('1979', 760, 800, 34, { font: 'Hand', col: '#d9482b' });
    if (t > EV.ar_chick) { const k = clamp((t - EV.ar_chick) / 0.3); pencil([[480, 620], [480 + 340 * k, 620 + 200 * k]], { w: 10, col: '#d9482b', pass2: false }); pencil([[820, 620], [820 - 340 * k, 620 + 200 * k]], { w: 10, col: '#d9482b', pass2: false }); txt('CHICKEN!', 650, 600 - 30 * k, 52, { font: 'Hand', col: '#d9482b', a: k }); }
    push(900, 860, 0.8, 0.03); const f = rect(-110, -140, 220, 260, { wash: '#d6a842', washA: 1, w: 3, col: '#4a2a06', key: 2611 }); metalG(f.path, -40, -80, 260, '#fff0b0', '#d6a842', '#6a4208'); rect(-86, -116, 172, 200, { wash: '#4a3a5a', washA: 1, w: 2 });
    human(-30, 80, 0.5, t, { body: '#f6f2e8', hair: '#3a2a1a', face: 'smile', armL: 'hold', armR: 'hold', seed: 101 }); hat20(-30, 80, 0.5, 'chef'); human(40, 80, 0.48, t, { body: '#5a7ab8', hair: '#c8c8c8', face: 'smile', armL: 'hold', armR: 'down', seed: 102, flip: -1 });
    push(40, 80 + (-238 - 46) * 0.48 - 30, 0.5); rect(-30, -16, 60, 18, { wash: '#d6a842', washA: 1, w: 1.6, col: '#5a3a08' }); for (let q = 0; q < 4; q++) poly([[-30 + q * 20, -16], [-20 + q * 20, -40], [-10 + q * 20, -16]], { wash: '#d6a842', washA: 1, w: 1.4, col: '#5a3a08' }); pop(); pop();
    if (t > EV.ar_queen) { glow(900, 860, 200, 'rgba(255,230,140,1)', 0.4 * (1 - clamp((t - EV.ar_queen) / 1.5))); bubbleTag('КОРМИЛ КОРОЛЕВУ', 860, 1040, t, EV.ar_queen, '#d6a842', 34, 0.04); }
  }
  function door(t) {                                                   // распашная дверь: на «Босс» распахивается, босс с курицей
    const x = -120, y = 1340, open = t > EV.ar_boss ? sm(clamp((t - EV.ar_boss) / 0.15)) : 0; rect(x - 10, y - 560, 300, 570, { wash: '#2a1a10', washA: 1, w: 3, col: '#000' });
    if (open > 0) { human(x + 140, y, 1.1, t, { body: '#5a4a3a', legs: '#3a3028', hair: '#3a2a1a', face: t > EV.ar_chick ? 'angry' : 'shock', armL: 'hold', armR: 'point', seed: 103, look: 0.7 });
      push(x + 140, y - 230 * 1.1, 1.1); poly([[-8, -6], [8, -6], [12, 60], [0, 74], [-12, 60]], { wash: '#d8a030', washA: 1, w: 1.6 }); pop(); push(x + 140, y + (-238 - 46) * 1.1, 1.1); for (const sd of [-1, 1]) rect(sd * 16 - 15, -18, 30, 24, { line: true, w: 3, col: '#1a1a1a' }); pop();
      const cx = x + 100, cy = y - 230, fl = Math.sin(t * 22) * 0.5; push(cx, cy, 1); blob([[-40, 10], [-50, -30], [-20, -60], [20, -66], [44, -40], [46, 10]], { wash: '#f6f2e8', washA: 1, w: 2.2, col: '#3a2a14' }); poly([[20, -66], [24, -90], [32, -72], [40, -88], [42, -60]], { wash: '#c8281e', washA: 1, w: 1.6 });
      poly([[44, -46], [70, -40], [44, -32]], { wash: '#e8b53a', washA: 1, w: 1.6 }); ell(28, -48, 5, 6, { wash: '#1a0a04', washA: 1, line: false }); for (const sd of [-1, 1]) { push(sd * 30, -20, 1, sd * (0.8 + fl)); blob([[0, 0], [sd * 50, -20], [sd * 70, 10], [sd * 30, 20]], { wash: '#efe8d8', washA: 1, w: 2, col: '#3a2a14' }); pop(); } pop();
      if (t > EV.ar_chick - 0.1) { push(x + 260, y - 520, 1, -0.06); const k = popK(t, EV.ar_chick - 0.1, 0.3); push(0, 0, k); blob([[-170, -60], [170, -66], [180, 50], [-20, 56], [-60, 110], [-60, 56], [-176, 50]], { wash: '#fff8ec', washA: 1, w: 3, col: '#2b2622' }); txt('ДАВАЙ КУРИЦУ!', 0, -4, 44, { font: 'Osw', col: '#d9482b' }); pop(); pop(); } }
    push(x, y - 560, 1); ctx.transform(1 - open * 0.85, -open * 0.15, 0, 1, 0, 0); const d = rect(0, 0, 280, 560, { wash: '#c8ccd0', washA: 1, w: 3, col: '#2a2e34', key: 2620 }); metalG(d.path, 80, 200, 400, '#ffffff', '#c8ccd0', '#6a7078', 0.8); ell(140, 140, 50, 50, { wash: '#9ac0d8', washA: 1, w: 4, col: '#2a2e34' }); rect(20, 380, 240, 40, { wash: '#9aa0a8', washA: 1, w: 2 }); pop();
    if (t > EV.ar_boss && t < EV.ar_boss + 0.5) { const k = (t - EV.ar_boss) / 0.5; for (let i = 0; i < 10; i++) { const a = -1 + i * 0.22; pencil([[x + 300 + Math.cos(a) * 60 * (1 + k * 3), y - 300 + Math.sin(a) * 60 * (1 + k * 3)], [x + 300 + Math.cos(a) * 120 * (1 + k * 3), y - 300 + Math.sin(a) * 120 * (1 + k * 3)]], { w: 5, col: '#fff6d0', a: 1 - k, pass2: false }); } }
  }
  function arend(t) {                                                  // шеф Аренд лепит луковые наггетсы
    const x = 380, y = 1340; human(x, y, 1.2, t, { body: '#f8f5ee', bodyD: '#b8b0a0', hair: '#5a4030', face: t > EV.ar_chick ? 'shock' : 'smile', armL: 'hold', armR: t > EV.ar_onion ? 'swing' : 'hold', seed: 104, look: t > EV.ar_boss ? -0.8 : 0.3 });
    hat20(x, y, 1.2, 'chef'); stache(x, y, 1.2); if (t > EV.ar_chef) bubbleTag('ШЕФ РЕНЕ АРЕНД', x, 870, t, EV.ar_chef, '#2b2622', 32, -0.03);
  }
  function fryers(t) {                                                 // стол: фритюрницы с кипящим маслом, лук, доска
    const b = rect(-300, 1340, 1700, 700, { wash: '#a8b0b8', washA: 1, w: 3, col: '#2a2e34', key: 2630 }); metalG(b.path, 400, 1400, 1200, '#eef2f6', '#a8b0b8', '#4a5058', 0.7); rect(-300, 1320, 1700, 30, { wash: '#d8dce0', washA: 1, w: 2.4, col: '#2a2e34' });
    for (const x of [140, 960]) { rect(x - 130, 1250, 260, 90, { wash: '#6a7078', washA: 1, w: 3, col: '#1a1e24' }); ell(x, 1260, 120, 26, { wash: '#d8a030', washA: 1, w: 2, col: '#5a3a08' }); for (let i = 0; i < 12; i++) { const r = rng(2640 + i + x), k = (t * 2 + r()) % 1; ell(x + (r() - 0.5) * 200, 1260 + (r() - 0.5) * 20, 6 + k * 8, 3 + k * 4, { line: true, w: 1.6, col: '#fff0b0', a: 1 - k }); }
      for (let q = 0; q < 2; q++) { const k = (t * 0.7 + q * 0.5) % 1; ell(x + Math.sin(k * 6) * 30, 1200 - k * 300, 40 + k * 50, 30 + k * 30, { wash: '#ffffff', washA: 0.25 * (1 - k), line: false }); } }
    push(540, 1320, 1); rect(-170, -20, 340, 24, { wash: '#c8964a', washA: 1, w: 2.4, col: '#3a1a08' }); for (let i = 0; i < 5; i++) onionRing(-120 + i * 60, -40, 0.4, i * 0.4, i); if (t > EV.ar_onion) for (let i = 0; i < 3; i++) nugget(-80 + i * 80, -66, 0.4, i, { kind: 'ball', key: 2650 + i }); pop();
    push(830, 1320, 1); for (let i = 0; i < 3; i++) { const o = ell(-40 + i * 50, -40, 34, 40, { wash: '#e8d8b0', washA: 1, w: 2.2, col: '#6a4a24', key: 2660 + i }); shadeG(o.path, 30, 0, -30, 0, '#a88a5a', 0.4); for (let q = -1; q <= 1; q++) pencil([[-40 + i * 50 + q * 14, -76], [-40 + i * 50 + q * 8, -4]], { w: 1.4, col: '#a88a5a', a: 0.7, pass2: false }); } pop();
  }
  function tears(t, P) { if (t < EV.ar_onion - 0.2 || t > EV.ar_boss + 0.3) return; const hy = P.y - 372 * P.s; for (const sd of [-1, 1]) { const ex = P.x + sd * 40 * P.s * (P.flip ? -1 : 1); for (let i = 0; i < 3; i++) { const k = (t * 2 + i / 3 + (sd > 0 ? 0.2 : 0)) % 1; ell(ex + sd * k * 30, hy + 20 + k * 160, 9, 13, { wash: '#9ad8ff', washA: 0.9 * (1 - k), w: 1.4, col: '#2a6a9a' }); } } }
  WORLD.arend = (t, u, cat) => {
    lay(14, () => { wall(t); haze('#ffd8a0', 0.05); }); lay(3.6, () => { arend(t); }); lay(2.4, () => { door(t); });
    lay(1.3, () => { fryers(t); });
    lay(1, () => { cat(); });
  };
  DIR.arend = {
    outfit: 'chef', light: { side: -1, rim: '#ffcf90' }, grade: ['#e8904a', 0.12],
    act: () => [[S0.arend, 'talk'], [EV.ar_queen, 'awe'], [EV.ar_onion, 'scared'], [EV.ar_onion + 0.4, 'annoyed'], [EV.ar_boss, 'shock'], [EV.ar_chick + 0.3, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 880, y: 1760, s: 1.15, flip: true, look: t < EV.ar_queen ? [0.6, 0] : t < EV.ar_boss ? [0.2, 0.5] : [1, -0.2], hand: t > EV.ar_onion && t < EV.ar_boss ? [40, -360] : [110, -240], handF: [-80, -230],
      squint: t > EV.ar_onion && t < EV.ar_boss, tailUp: t > EV.ar_chick + 0.3 }),
    afterCat: (t, u, P) => tears(t, P),
    cam: () => [[S0.arend, 560, 1060, 0.18], [EV.ar_queen, 760, 1000, 0.2], [EV.ar_onion, 640, 1200, 0.24], [EV.ar_boss, 300, 1000, 0.06, 'x'], [EV.ar_chick, 260, 960, 0.14], [S1.arend, 280, 960, 0.18]]
  };
  // ---------------------------------------------------------------- переход: масло фритюра вскипает пузырями
  TRANS_IN.arend = { a: 0.2, b: 0.5, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const P = new Path2D(); const bub = [];
    for (let i = 0; i < 46; i++) { const r = rng(2690 + i), x = r() * 1080, sp = 0.5 + r() * 0.8, y = 2100 - k * sp * 2600, R = (60 + r() * 140) * (0.4 + k * 1.6); if (y - R > 1920) continue; P.moveTo(x + R, y); P.arc(x, y, R, 0, 6.3); bub.push([x, y, R]); }
    inPath(P, () => { drawBuf(B, 1, 540, 960); ctx.fillStyle = `rgba(232,170,50,${0.45 * (1 - k)})`; ctx.fillRect(0, 0, W, H); });
    scr(() => bub.forEach(([x, y, R]) => { pencil(ellPts(x, y, R, R, 0, 0, 30), { w: 4, col: '#ffe08a', a: 0.8 * (1 - k * 0.6), pass2: false }); ell(x - R * 0.4, y - R * 0.4, R * 0.18, R * 0.1, { wash: '#ffffff', washA: 0.7, line: false, rot: -0.6 }); }));
  } };
})();
