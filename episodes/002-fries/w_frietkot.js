/* 002 — `frietkot`: «Зато бельгийцы жарят дважды, в говяжьем жиру — и макают в майонез!» ТОМ-МАЛЫШ (раз за ролик): крошечный Том в колпаке
   стоит на брусочке фри внутри гигантской корзины фритюра. Вокруг — лес фри-«брёвен», проволочная сетка как решётка собора, внизу кипит золотой жир.
   «дважды» — корзина ныряет два раза (брызги, бирки «1×», «2×»); «говяжьем» — слева съезжает гигантский брикет «BLANC DE BŒUF» и тает;
   «майонез» — сверху шлёпается майонезная лавина, Том в брызгах хохочет. Переход В сцену: ярмарка тонет в кипящем жире (уровень масла поднимается, пузыри).*/
(() => {
  EV.fk_twice = wtw('s5', 'дважды');
  EV.fk_fat = wtw('s5', 'говяжьем');
  EV.fk_mayo = wtw('s5', 'майонез!');
  SHAKES.push([EV.fk_twice + 0.25, 0.2, 10], [EV.fk_twice + 0.85, 0.2, 10], [EV.fk_mayo + 0.25, 0.3, 14]);
  KEYW.push('дважды,', 'майонез!');
  const dip = t => { let d = 0; for (const t0 of [EV.fk_twice - 0.1, EV.fk_twice + 0.5]) { const q = clamp((t - t0) / 0.6); d += Math.sin(q * Math.PI) * 220; } return d; };
  function backdrop(t) {                                                // за пределами корзины: размытая фритюрная (кафель, окно-раздача, лампа)
    vgrad(-600, 2200, ['#3a2a1a', '#6a4422', '#2a1a0e']); for (let i = 0; i < 12; i++) for (let j = 0; j < 14; j++) rect(-400 + i * 180, -300 + j * 180, 170, 170, { wash: (i + j) % 2 ? '#e8dcc0' : '#d8c8a8', washA: 0.25, line: false });
    glow(540, 200, 700, 'rgba(255,200,120,1)', 0.5); glow(200, 600, 300, 'rgba(255,150,80,1)', 0.25);
  }
  function oil(t, y0) {                                                 // кипящий жир: поверхность с волнами, пузыри, блики
    const P = [[-600, 2600]]; for (let x = -600; x <= 1700; x += 40) P.push([x, y0 + Math.sin(x * 0.02 + t * 6) * 10 + Math.sin(x * 0.05 - t * 9) * 5]); P.push([1700, 2600]);
    const o = shape(P, { wash: '#e8a838', washA: 0.95, w: 3, col: '#7a4a08', key: 8800 }); shadeG(o.path, 0, y0 + 600, 0, y0, '#8a4a08', 0.6);
    ctx.save(); ctx.clip(o.path); const r = rng(hsh(FRAME, 8801)); for (let i = 0; i < 46; i++) { const bx = -500 + r() * 2100, by = y0 + r() * 500, br = 6 + r() * 26; ell(bx, by, br, br * 0.8, { wash: '#fff2b8', washA: 0.45, w: 1.4, col: '#8a5a10', a: 0.5 }); } ctx.restore();
    for (let i = 0; i < 12; i++) { const r = rng(8802 + i), x = -300 + r() * 1700; pencil([[x, y0 + 4], [x + 60 + r() * 60, y0 + 2]], { w: 3, col: '#fff6d0', a: 0.7, pass2: false }); }
  }
  function grid(t, dy) {                                                // гигантская проволочная сетка корзины
    for (let i = -6; i < 14; i++) { pencil([[i * 130 - 200, -400 + dy], [i * 130 + 200, 2400 + dy]], { w: 9, col: '#8a8e94', a: 0.75 }); pencil([[i * 130 + 200, -400 + dy], [i * 130 - 200, 2400 + dy]], { w: 9, col: '#8a8e94', a: 0.75 }); }
    for (let i = -6; i < 14; i++) pencil([[i * 130 - 200 + 3, -400 + dy], [i * 130 + 200 + 3, 2400 + dy]], { w: 2, col: '#ffffff', a: 0.4, pass2: false, gap: false });
  }
  function log(x, y, len, rot, k, near) {                              // гигантская фри-«бревно»: рёбра, поджаристые концы, кристаллы соли-«кубы»
    const w = len * 0.16; fry(x, y, len, rot, { w, key: 8810 + k, lw: 3, col: k % 3 ? FR.fry : '#f6c862' }); push(x, y, 1, rot);
    pencil([[w * 0.18, -len / 2 + 10], [w * 0.18, len / 2 - 10]], { w: 3, col: FR.fryD, a: 0.5, pass2: false }); for (let i = 0; i < 6; i++) { const r = rng(8890 + k * 7 + i), yy = (r() - 0.5) * len * 0.8; pencil([[-w / 2 + 4, yy], [-w / 2 + 4 + r() * w * 0.5, yy + 6]], { w: 2, col: FR.fryT, a: 0.35, pass2: false }); }
    if (near) for (let i = 0; i < 5; i++) { const r = rng(8870 + k * 5 + i), cx = (r() - 0.5) * w * 0.7, cy = (r() - 0.5) * len * 0.8, c = 8 + r() * 10; const q = poly([[cx - c, cy - c * 0.6], [cx + c * 0.2, cy - c], [cx + c, cy - c * 0.2], [cx + c * 0.4, cy + c], [cx - c * 0.8, cy + c * 0.5]], { wash: '#ffffff', washA: 0.95, w: 1.2, col: '#9aa4aa' }); shadeG(q.path, cx + c, cy + c, cx, cy, '#c8d4dc', 0.5); }
    pop(); }
  function fatBlock(t) {                                                // брикет говяжьего жира съезжает и тает
    if (t < EV.fk_fat - 0.3) return; const k = clamp((t - EV.fk_fat + 0.3) / 0.6), melt = clamp((t - EV.fk_fat - 0.4) / 1.6), x = lerp(-300, 220, sm(k)), y = lerp(800, 1260, sm(k)) + melt * 120, s = 1 - melt * 0.7;
    push(x, y, s, -0.1 * (1 - k)); const b = rect(-170, -110, 340, 200, { wash: FR.fat, washA: 1, w: 3, col: '#6a5a40', key: 8820 }); shadeG(b.path, 170, 90, -100, -110, '#c8b890', 0.5);
    rect(-150, -70, 300, 90, { wash: '#d9482b', washA: 0.9, w: 2, col: '#5a1008' }); txt('BLANC DE BŒUF', 0, -40, 34, { font: 'Osw', col: '#fff8ec' }); txt('говяжий жир', 0, 2, 26, { font: 'Hand', col: '#fff8ec' }); pop();
    if (melt > 0) for (let i = 0; i < 6; i++) { const ph = (t * 1.2 + i / 6) % 1; ell(x - 120 + i * 50, y + 100 * s + ph * 60, 10, 14, { wash: FR.fat, washA: 1 - ph, w: 1, col: '#8a7a5a', a: 1 - ph }); }
  }
  function mayoFall(t) {                                                // майонезная лавина сверху + брызги
    if (t < EV.fk_mayo - 0.45) return; const k = clamp((t - EV.fk_mayo + 0.45) / 0.55), y = lerp(-500, 820, k * k);
    push(560, y, 2.6 + k); dollop(0, 0, 1.4, FR.mayo, FR.mayoD, 8830); pop(); pencil([[560, -600], [560, y - 160]], { w: 120 * (1 - k * 0.4), col: FR.mayo, a: 0.95 }); pencil([[530, -600], [530, y - 160]], { w: 20, col: '#ffffff', a: 0.6, pass2: false });
    if (k >= 1) { const q = clamp((t - EV.fk_mayo - 0.1) / 0.6); for (let i = 0; i < 14; i++) { const r = rng(8840 + i), a = r() * 3.14 + 3.14, d = q * (200 + r() * 500); ell(560 + Math.cos(a) * d, 900 + Math.sin(a) * d * 0.7 + q * q * 400, 22 + r() * 20, 16 + r() * 14, { wash: FR.mayo, washA: 1, w: 1.6, col: FR.mayoD }); }
      const pd = ell(560, 960, 240, 70, { wash: FR.mayo, washA: 1, w: 2, col: FR.mayoD }); shadeG(pd.path, 0, 1030, 0, 900, FR.mayoD, 0.4); glow(500, 930, 60, 'rgba(255,255,255,1)', 0.6); }
  }
  WORLD.frietkot = (t, u, cat) => {
    const d = dip(t);
    lay(30, () => { backdrop(t); });
    lay(8, () => { grid(t, -d * 0.2); for (let i = 0; i < 9; i++) log(-300 + i * 220, 700 - (i % 3) * 120 + d * 0.3, 900, (i % 2 ? 0.08 : -0.06), i); haze('#ffb860', 0.22); });
    lay(3, () => { for (let i = 0; i < 7; i++) log(-200 + i * 240, 900 - (i % 2) * 160 + d * 0.6, 760, (i % 2 ? -0.12 : 0.1), 20 + i, 1); oil(t, 1500 - d * 0.6 + 400); haze('#ffb860', 0.08); });
    lay(1.8, () => { for (let i = -2; i < 5; i++) { pencil([[i * 300 - 100, -300], [i * 300 + 260, 2400]], { w: 16, col: '#5a5e64', a: 0.9 }); pencil([[i * 300 - 96, -300], [i * 300 + 264, 2400]], { w: 4, col: '#e8ecf0', a: 0.6, pass2: false }); } fatBlock(t); });
    lay(1, () => { push(0, d, 1); log(540, 1470, 720, 1.57, 40, 1); log(330, 1300, 520, 1.3, 41, 1); cat(); pop(); oil(t, 1560); mayoFall(t);
      for (const t0 of [EV.fk_twice + 0.2, EV.fk_twice + 0.8]) if (t > t0 && t < t0 + 0.7) { const q = (t - t0) / 0.7; for (let i = 0; i < 16; i++) { const r = rng(8850 + i), a = 3.14 + r() * 3.14, v = 300 + r() * 700; ell(540 + Math.cos(a) * v * q, 1560 + Math.sin(a) * v * q + 900 * q * q, 10, 14, { wash: '#f6c050', washA: 1 - q, w: 1, col: '#8a5a10', a: 1 - q }); } }
      bubbleTag('1×', 860, 1180, t, EV.fk_twice + 0.2, '#e8b53a', 70, -0.08); bubbleTag('2×', 900, 1320, t, EV.fk_twice + 0.8, '#d9482b', 80, 0.06); });
    lay(0.55, () => { steam2(540, 1700, t, 7, 0.35, 85, 900); motes(20, [-200, 0, 1300, 1900], '#fff2c0', t, 8, { sp: -60, sz: 6, a: 0.5 }); });
  };
  DIR.frietkot = {
    outfit: 'chef', light: { side: -1, rim: '#ffd060' }, grade: ['#ffb040', 0.14],
    act: () => [[S0.frietkot, 'proud'], [EV.fk_twice, 'shock'], [EV.fk_twice + 1.1, 'grin'], [EV.fk_fat, 'awe'], [EV.fk_mayo, 'scared'], [EV.fk_mayo + 0.35, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1430, s: 0.5, look: t < EV.fk_fat ? [0.3, 0.5] : t < EV.fk_mayo - 0.3 ? [-0.8, 0.3] : [0, -0.9], hand: t > EV.fk_mayo - 0.4 ? [120, -400] : [110, -260], handF: t > EV.fk_mayo - 0.4 ? [-120, -400] : [-130, -150],
      tailUp: true, squash: b.squash + (t > EV.fk_mayo + 0.2 && t < EV.fk_mayo + 0.4 ? 0.2 : 0) }),
    afterCat: (t, u, P) => { if (t > EV.fk_mayo + 0.2) { push(P.x, P.y, P.s); blob([[-150, -420], [-100, -560], [0, -600], [110, -560], [160, -420], [110, -470], [60, -380], [0, -460], [-70, -400]], { wash: FR.mayo, washA: 1, w: 2.4, col: FR.mayoD }); glow(-40, -540, 40, 'rgba(255,255,255,1)', 0.7); pop(); } },
    cam: () => [[S0.frietkot, 560, 1300, 0.42], [EV.fk_twice - 0.1, 560, 1250, 0.36], [EV.fk_fat - 0.2, 420, 1300, 0.3, 'x'], [EV.fk_mayo - 0.5, 560, 1100, 0.32], [EV.fk_mayo + 0.3, 560, 1200, 0.46, 'x'], [S1.frietkot, 560, 1220, 0.5]]
  };
  // ---------------------------------------------------------------- переход: ярмарка тонет в кипящем жире
  TRANS_IN.frietkot = { a: 0.3, b: 0.35, runA: 1, fx(k, t, A, B) {
    const lvl = lerp(2100, -200, sm(k)); drawBuf(B, 1.1 - 0.1 * k, 540, 960);
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.rect(0, -10, W, lvl + 10); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
    scr(() => { const P = [[-20, lvl]]; for (let x = -20; x <= 1100; x += 40) P.push([x, lvl + Math.sin(x * 0.02 + t * 8) * 18]); P.push([1100, lvl + 120]); P.push([-20, lvl + 120]);
      shape(P, { wash: '#e8a838', washA: 0.85, w: 3, col: '#7a4a08' }); const r = rng(hsh(FRAME, 8860)); for (let i = 0; i < 24; i++) ell(r() * 1080, lvl + 20 + r() * 300, 8 + r() * 24, 7 + r() * 18, { wash: '#fff2b8', washA: 0.6, w: 1.4, col: '#8a5a10', a: 0.6 }); });
  } };
})();
