/* 003 — `names`: «В Польше селёдка спит "под периной", а в Литве — "в постели".» Ночная спальня в лунном свете: окно со звёздами, обои с ромашками, ночник.
   Две кроватки: слева селёдка в колпаке под пышной периной (ярлык ПОЛЬША), справа — в кроватке с одеялом и подушкой (ЛИТВА). Том в пижаме зевает, подтыкает перину.
   Переход В сцену: огромная подушка падает на кадр и взрывается перьями. */
(() => {
  EV.nm_pl = wtw('s6', 'Польше');
  EV.nm_per = wtw('s6', '«под');
  EV.nm_lt = wtw('s6', 'Литве');
  EV.nm_bed = wtw('s6', 'постели».') - 0.15;
  KEYW.push('периной»,', 'постели».');

  function room(t) {                                                   // ночные обои, окно с луной, ночник
    vgrad(-600, 1600, ['#141a3a', '#22285a', '#2e3468']); for (let i = 0; i < 10; i++) for (let j = 0; j < 14; j++) { const x = -200 + i * 150 + (j % 2) * 75, y = 60 + j * 100; push(x, y, 0.5); for (let q = 0; q < 6; q++) ell(Math.cos(q) * 14, Math.sin(q) * 14, 8, 5, { wash: '#4a5090', washA: 0.5, line: false, rot: q }); ell(0, 0, 6, 6, { wash: '#8a7a3a', washA: 0.5, line: false }); pop(); }
    const w = rect(660, 140, 340, 420, { wash: '#0a1030', washA: 1, w: 8, col: '#e8e0d0', key: 3700 }); ctx.save(); ctx.clip(w.path); vgrad(140, 560, ['#0a1030', '#1a2a5a']); ell(880, 260, 60, 60, { wash: '#f6f0d0', washA: 1, line: false }); ell(900, 250, 50, 54, { wash: '#0a1030', washA: 1, line: false }); glow(870, 260, 160, 'rgba(240,240,200,1)', 0.3);
    motes(30, [660, 140, 1000, 560], '#fff6d8', t, 3701, { sp: 4, sz: 3, a: 0.9, tw: 1 }); ctx.restore(); pencil([[830, 140], [830, 560]], { w: 6, col: '#e8e0d0', pass2: false }); pencil([[660, 350], [1000, 350]], { w: 6, col: '#e8e0d0', pass2: false });
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = 'rgba(180,200,255,0.08)'; ctx.beginPath(); ctx.moveTo(660, 560); ctx.lineTo(1000, 560); ctx.lineTo(800, 1500); ctx.lineTo(200, 1500); ctx.fill(); ctx.restore();
    push(540, 900, 1); rect(-40, 0, 80, 120, { wash: '#6a4a2a', washA: 1, w: 2, col: '#1a0a04' }); poly([[-60, 0], [60, 0], [40, -70], [-40, -70]], { wash: '#f2c860', washA: 1, w: 2, col: '#5a3a08' }); glow(0, -30, 200, 'rgba(255,210,120,1)', 0.45); pop();
  }
  function bedPL(t) {                                                  // кровать с периной: селёдка в колпаке
    const x = 260, y = 1340, k = popK(t, EV.nm_pl - 0.1, 0.35); push(x, y, k); rect(-200, -60, 400, 70, { wash: '#8a5a2a', washA: 1, w: 2.6, col: '#2a1408', key: 3710 }); rect(-210, -200, 30, 230, { wash: '#7a4a24', washA: 1, w: 2.4, col: '#2a1408' }); rect(180, -140, 30, 170, { wash: '#7a4a24', washA: 1, w: 2.4, col: '#2a1408' });
    ell(-130, -90, 70, 34, { wash: '#f6f2ea', washA: 1, w: 2, col: '#5a5a6a' }); herring(-110, -110, 0.75, 0.15, { key: 3711, cap: 'night', face: 'sleep' }); const br = Math.sin(t * 2.4) * 8;
    const p = blob([[-150, -60], [-120, -170 - br], [0, -200 - br], [120, -180 - br], [190, -100], [180, -50]], { wash: '#f6ecd8', washA: 1, w: 2.6, col: '#5a4a3a', key: 3712 }); shadeG(p.path, 0, -60, 0, -200, '#c8b498', 0.45); for (let i = 0; i < 5; i++) pencil(spline([[-100 + i * 50, -70], [-90 + i * 50, -150 - br], [-70 + i * 50, -180 - br]], false, 5), { w: 1.6, col: '#c8b498', a: 0.7, pass2: false });
    if (t > EV.nm_pl) for (let i = 0; i < 3; i++) { const kk = (t * 0.6 + i / 3) % 1; txt('z', -60 + kk * 60, -230 - kk * 120, 30 + kk * 20, { font: 'Osw', col: '#cfd8ff', a: 1 - kk }); } pop();
    if (t > EV.nm_pl) bubbleTag('ПОЛЬША', x, 1060, t, EV.nm_pl, '#d9482b', 40, -0.04); if (t > EV.nm_per) bubbleTag('«ПОД ПЕРИНОЙ»', x, 1450, t, EV.nm_per, '#2b2622', 36, 0.03);
  }
  function bedLT(t) {                                                  // кроватка: селёдка в постели с подушкой и клетчатым одеялом
    if (t < EV.nm_lt - 0.1) return; const x = 820, y = 1220, k = popK(t, EV.nm_lt - 0.1, 0.35); push(x, y, k * 0.85); rect(-180, -50, 360, 60, { wash: '#a8743a', washA: 1, w: 2.6, col: '#2a1408', key: 3720 }); rect(-190, -170, 26, 190, { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#2a1408' }); rect(164, -120, 26, 140, { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#2a1408' });
    ell(-110, -80, 60, 30, { wash: '#f6f2ea', washA: 1, w: 2, col: '#5a5a6a' }); herring(-90, -96, 0.65, 0.1, { key: 3721, face: 'sleep' }); const bl = poly([[-130, -50], [170, -50], [170, -120], [-60, -130]], { wash: '#3a7a3a', washA: 1, w: 2.4, col: '#1a3a1a', key: 3722 });
    ctx.save(); ctx.clip(bl.path); for (let i = 0; i < 10; i++) { pencil([[-140 + i * 34, -140], [-140 + i * 34, -40]], { w: 8, col: '#e8c040', a: 0.5, pass2: false }); pencil([[-140, -130 + i * 14], [180, -130 + i * 14]], { w: 4, col: '#a8241e', a: 0.4, pass2: false }); } ctx.restore(); pop();
    bubbleTag('ЛИТВА', x, 980, t, EV.nm_lt, '#6b7a2e', 40, 0.04); if (t > EV.nm_bed) bubbleTag('«В ПОСТЕЛИ»', x, 1310, t, EV.nm_bed, '#2b2622', 36, -0.03);
  }
  WORLD.names = (t, u, cat) => {
    lay(14, () => { room(t); }); lay(1.4, () => { const f = rect(-300, 1300, 1700, 700, { wash: '#3a2a4a', washA: 1, w: 2, col: '#0a0410', key: 3730 }); for (let i = 0; i < 10; i++) pencil([[-300, 1320 + i * 60], [1400, 1326 + i * 60]], { w: 1.6, col: '#1a1028', a: 0.5, pass2: false }); bedLT(t); bedPL(t); });
    lay(1, () => { cat(); });
  };
  DIR.names = {
    outfit: 'pajama', light: { side: 1, rim: '#bcd0ff' }, grade: ['#5a6ad8', 0.14],
    act: () => [[S0.names, 'smug'], [EV.nm_pl, 'grin'], [EV.nm_per, 'laugh'], [EV.nm_lt, 'talk'], [EV.nm_bed, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 580, y: 1760, s: 1.15, flip: t < EV.nm_lt, look: t < EV.nm_lt ? [0.8, 0.4] : [0.8, 0.3], hand: [200, -200 + Math.sin(t * 6) * 20], handF: [-80, -300], tailUp: true }),
    cam: () => [[S0.names, 400, 1150, 0.16], [EV.nm_per, 360, 1220, 0.24], [EV.nm_lt, 700, 1150, 0.16, 'x'], [S1.names, 720, 1160, 0.22]]
  };
  // ---------------------------------------------------------------- переход: подушка падает на кадр и взрывается перьями
  TRANS_IN.names = { a: 0.2, b: 0.5, runA: 1, fx(k, t, A, B) {
    const fall = sm(clamp(k / 0.45)), burst = clamp((k - 0.45) / 0.55); drawBuf(burst > 0 ? B : A, 1, 540, 960);
    scr(() => { if (burst < 0.2) { const y = lerp(-1200, 960, fall), s = 1 + burst * 2; push(540, y, s); const p = blob([[-700, -500], [0, -620], [700, -500], [760, 0], [700, 500], [0, 620], [-700, 500], [-760, 0]], { wash: '#f6f2ea', washA: 1, w: 6, col: '#5a5a6a' }); shadeG(p.path, 0, 600, 0, -600, '#b8b4c8', 0.5); pop(); }
      if (burst > 0) for (let i = 0; i < 60; i++) { const r = rng(3740 + i), a = r() * 6.283, v = 400 + r() * 900; push(540 + Math.cos(a) * v * burst, 960 + Math.sin(a) * v * burst + 300 * burst * burst, 1.4, t * 3 + i); blob([[0, -26], [10, 0], [0, 26], [-10, 0]], { wash: '#ffffff', washA: 1 - burst, w: 1.2, col: '#8a8aa0', a: 1 - burst }); pop(); } });
  } };
})();
