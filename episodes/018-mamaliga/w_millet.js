/* 018 — `millet`: «Сначала мамалыга была не жёлтой: её варили из проса. У римлян — «пульментум».» Римский лагерь в предгорьях на закате: дальние горы
   в дымке, ряды кожаных палаток, частокол, штандарт с орлом и SPQR; у костра на треноге котёл, легионер мелет зерно на ручной мельнице-жёрновах,
   второй ест из миски, третий тащит снопы проса; ящик-стол с глиняными мисками серой каши, амфора, хлеб, метёлки проса, жернов. Том-легионер с ложкой.
   По словам: «не жёлтой» — жёлтый купол на столе сереет и его перечёркивает красный крест; «проса» — мешок MILIUM рвётся, сыплются зёрна, метёлки
   качаются; «пульментум» — ценник PVLMENTVM, легионеры поднимают миски. Переход В сцену: мешалка закручивает кадр водоворотом каши. */
(() => {
  EV.ml_grey = wtw('s1', 'жёлтой:');
  EV.ml_millet = wtw('s1', 'проса.');
  EV.ml_rome = wtw('s1', 'римлян');
  EV.ml_pul = wtw('s1', '«пульментум».');
  SHAKES.push([EV.ml_millet + 0.05, 0.15, 6]);
  KEYW.push('проса.', '«пульментум».');
  function sky(t) {                                                       // закатное небо, облака, горы в дымке, птицы
    vgrad(-700, 900, ['#5a6a8a', '#c8906a', '#f0c088']); glow(760, 300, 420, 'rgba(255,190,120,1)', 0.55); ell(760, 300, 70, 70, { wash: '#ffe0a0', washA: 0.9, line: false });
    for (let i = 0; i < 5; i++) { const x = ((i * 380 + t * 12) % 2000) - 400; blob([[x, 0 + i * 40], [x + 80, -40 + i * 40], [x + 200, -30 + i * 40], [x + 300, 0 + i * 40], [x + 150, 20 + i * 40]], { wash: '#f4d8c0', washA: 0.5, line: false }); }
    for (let j = 0; j < 3; j++) { const pts = []; for (let i = 0; i <= 12; i++) pts.push([-400 + i * 170, 520 + j * 90 - (Math.sin(i * 1.3 + j * 2) * 0.5 + 0.5) * (220 - j * 50)]); pts.push([1700, 1100], [-400, 1100]); shape(pts, { wash: ['#7a809a', '#5a6a6a', '#4a5a3a'][j], washA: 1, w: 1.4, col: '#2a2a3a' }); haze('#e8b890', 0.08); }
    for (let i = 0; i < 5; i++) { const q = (t * 0.06 + i * 0.2) % 1; pencil([[-100 + q * 1400, 200 + i * 30], [-90 + q * 1400, 192 + i * 30], [-80 + q * 1400, 200 + i * 30]], { w: 2, col: '#2a2a3a', pass2: false }); }
  }
  function camp(t) {                                                      // ряды палаток, частокол, штандарт с орлом, дым от костров
    for (let j = 0; j < 2; j++) for (let i = 0; i < 8; i++) { const x = -300 + i * 230 + j * 110, y = 900 + j * 70, s = 0.8 + j * 0.2; push(x, y, s); const tn = poly([[-90, 0], [0, -110], [90, 0]], { wash: j ? '#b8946a' : '#a8845a', washA: 1, w: 2, col: '#3a2410', key: 18400 + i + j * 10 }); shadeG(tn.path, 90, 0, -40, 0, '#6a4a2a', 0.45); poly([[-20, 0], [0, -60], [20, 0]], { wash: '#2a1a0a', washA: 1, w: 1.2 }); pencil([[0, -110], [0, -130]], { w: 3, col: '#3a2410', pass2: false }); pop(); }
    for (let i = 0; i < 40; i++) { const x = -400 + i * 52; poly([[x, 1060], [x + 4, 960], [x + 20, 940], [x + 36, 960], [x + 40, 1060]], { wash: '#7a5a34', washA: 1, w: 1.4, col: '#2a1a08' }); }
    push(1000, 1000, 1); pencil([[0, 0], [0, -520]], { w: 8, col: '#5a3a1a' }); rect(-70, -440, 140, 100, { wash: '#a8221a', washA: 1, w: 2, col: '#3a0a04' }); txt('SPQR', 0, -380, 34, { font: 'Osw', col: '#f0c040' }); for (let k = 0; k < 5; k++) ell(0, -320 + k * 40, 22, 10, { wash: '#d8a830', washA: 1, w: 1.2, col: '#5a3a08' });
    blob([[0, -520], [-60, -560], [-80, -600], [-30, -580], [0, -620], [30, -580], [80, -600], [60, -560]], { wash: '#e8b830', washA: 1, w: 2, col: '#5a3a08' }); glow(0, -560, 60, 'rgba(255,220,120,1)', 0.5); pop();
    for (let i = 0; i < 3; i++) { const x = 120 + i * 360; for (let k = 0; k < 4; k++) { const q = (t * 0.3 + k / 4 + i * 0.2) % 1; ell(x + Math.sin(q * 5 + i) * 30, 900 - q * 400, 30 + q * 50, 20 + q * 30, { wash: '#a89a90', washA: 0.3 * (1 - q), line: false }); } }
  }
  function soldiers(t) {                                                  // костёр с котлом на треноге, мельник с жерновами, едок с миской, носильщик снопов
    const fx = 160, fy = 1300; for (let i = 0; i < 6; i++) { const q = Math.sin(t * 10 + i * 1.3); blob([[fx - 60 + i * 22, fy], [fx - 66 + i * 22 + q * 6, fy - 60 - (i % 3) * 16], [fx - 50 + i * 22, fy - 100 + q * 10], [fx - 40 + i * 22, fy - 40], [fx - 36 + i * 22, fy]], { wash: i % 2 ? '#ff8a20' : '#ffd040', washA: 0.85, line: false }); } glow(fx, fy - 40, 260, 'rgba(255,150,50,1)', 0.5);
    for (const sd of [-1, 1]) pencil([[fx + sd * 110, fy + 10], [fx, fy - 260]], { w: 6, col: '#3a2a1a' }); pencil([[fx, fy - 260], [fx, fy - 190]], { w: 3, col: '#3a3a3a', pass2: false });
    push(fx, fy - 120, 0.6); ceaun(0, 0, 1, t, { fill: 'm', bail: false, key: 18410 }); pop();
    human(-120, 1320, 1.1, t, { body: '#a8221a', legs: '#6a4a2a', hair: '#3a2a1a', face: t > EV.ml_pul ? 'grin' : 'calm', armL: 'hold', armR: t > EV.ml_pul ? 'up' : 'swing', look: 0.5, seed: 18420, belt: '#5a3a1a', hat: 'helmet' });
    push(-60, 1300, 1); const q1 = ell(0, 0, 70, 24, { wash: '#8a8a84', washA: 1, w: 2, col: '#2a2a2a' }); const q2 = ell(0, -24, 64, 22, { wash: '#a8a8a0', washA: 1, w: 2, col: '#2a2a2a' }); push(0, -24, 1, t * 3); pencil([[0, 0], [50, 0]], { w: 6, col: '#5a3a1a', pass2: false }); pop(); for (let k = 0; k < 8; k++) ell(-60 + k * 16, 12, 3, 2, { wash: '#e8dcb0', washA: 1, line: false }); pop();
    human(420, 1330, 1.12, t, { body: '#a8221a', legs: '#6a4a2a', hair: '#1a1a1a', face: t > EV.ml_grey && t < EV.ml_millet ? 'shock' : 'smile', armL: 'hold', armR: t > EV.ml_pul ? 'up' : 'hold', look: 0.6, seed: 18421, belt: '#5a3a1a', beard: 'short', flip: 1 });
    push(420 + 34, 1330 - 230 - (t > EV.ml_pul ? 70 : 0), 0.5); milletBowl(0, 0, 1, t, { key: 18422, steam: 1 }); pop();
    const wk = clamp((t - S0.millet) / 3); human(lerp(1300, 1060, wk), 1340, 1.0, t, { body: '#c8b090', legs: '#6a5a40', hair: '#6a4a2a', face: 'calm', armL: 'up', armR: 'up', look: -0.5, seed: 18423, flip: -1, beard: 'long' });
    push(lerp(1300, 1060, wk), 1340 - 330, 1, -0.1); for (let k = 0; k < 5; k++) { pencil([[-60 + k * 30, 40], [-40 + k * 26, -80]], { w: 3, col: '#a8944a', pass2: false }); blob([[-46 + k * 26, -80], [-56 + k * 26, -130], [-30 + k * 26, -150], [-30 + k * 26, -100]], { wash: '#d8c070', washA: 1, w: 1, col: '#8a7030' }); } pop();
  }
  function table(t) {                                                     // ящик-стол: миски каши, амфора, хлеб, метёлки проса, мешок MILIUM, жёлтый купол → серый с крестом
    const tb = rect(-400, 1440, 1900, 700, { wash: '#8a6a42', washA: 1, w: 3, col: '#2a1808', key: 18430 }); for (let i = 0; i < 6; i++) pencil([[-400, 1480 + i * 70], [1500, 1470 + i * 70]], { w: 2, col: '#4a3418', a: 0.6, pass2: false }); hatch(tb.path, tb.bb, { gap: 10, a: 0.14, col: '#3a2410', ang: 0.04, key: 18431 }); shadeG(tb.path, 540, 2000, 540, 1440, '#3a2410', 0.4);
    for (let i = 0; i < 6; i++) ell(-200 + i * 260, 1460, 10, 10, { wash: '#3a3a3a', washA: 1, w: 1.2 });
    const g = clamp((t - EV.ml_grey) / 0.5); push(420, 1460, 1); mmBoard(0, 0, 150, 44, { key: 18432 }); const d = blob([[-110, -6], [-100, -90], [-50, -130], [50, -130], [100, -90], [110, -6]], { wash: lerpC(MM.y, MM.millet, g), washA: 1, w: 2.2, col: '#5a4420', key: 18433 }); shadeG(d.path, 100, 0, -50, -100, lerpC(MM.yD, MM.milletD, g), 0.45); const r = rng(18434); for (let i = 0; i < 40; i++) ell(-90 + r() * 180, -110 + r() * 100, 2.4, 2.4, { wash: g > 0.5 ? '#e8dcb0' : MM.yD, washA: 0.8, line: false });
    if (t > EV.ml_grey + 0.3) { const k = clamp((t - EV.ml_grey - 0.3) / 0.3); pencil([[-120, -150], [-120 + 240 * k, -150 + 160 * k]], { w: 12, col: '#c8221a', pass2: false }); if (k >= 1) pencil([[120, -150], [-120, 10]], { w: 12, col: '#c8221a', pass2: false }); } pop();
    milletBowl(160, 1510, 0.8, t, { key: 18435, steam: 1 }); milletBowl(860, 1520, 0.7, t, { key: 18436, spoon: false });
    push(1000, 1450, 1); const am = blob([[-30, 30], [-50, -60], [-40, -160], [-20, -200], [20, -200], [40, -160], [50, -60], [30, 30], [0, 60]], { wash: '#c86a3a', washA: 1, w: 2, col: '#3a1408' }); shadeG(am.path, 50, 0, -30, 0, '#6a2a10', 0.45); for (const sd of [-1, 1]) pencil(spline([[sd * 22, -190], [sd * 56, -170], [sd * 40, -120]], false, 5), { w: 6, col: '#c86a3a' }); pop();
    push(-20, 1500, 1); ell(0, 0, 70, 40, { wash: '#c8904a', washA: 1, w: 2, col: '#4a2a10' }); for (let k = 0; k < 4; k++) pencil([[-50 + k * 30, -20], [-40 + k * 30, 20]], { w: 2, col: '#6a4a20', pass2: false }); pop();
    const tear = t > EV.ml_millet ? clamp((t - EV.ml_millet) / 0.5) : 0; grainSack(640, 1560, 0.9, { key: 18437, label: 'MILIUM', grain: 'm', spill: tear > 0.2, rot: 0.05 });
    if (tear > 0) { const r2 = rng(18438); for (let i = 0; i < 30; i++) { const q = clamp(tear * 1.4 - r2() * 0.4); ell(640 + (r2() - 0.5) * 300 * q, 1420 + q * q * 140 + (r2() - 0.5) * 30, 4, 4, { wash: '#e8d8a0', washA: 1, w: 0.8, col: '#8a7a40' }); } }
    for (let k = 0; k < 5; k++) { const sw = Math.sin(t * 2 + k) * 0.05 + (t > EV.ml_millet && t < EV.ml_millet + 0.8 ? Math.sin(t * 20) * 0.1 : 0); push(260 + k * 30, 1440, 1, -0.3 + k * 0.12 + sw); pencil([[0, 0], [0, -150]], { w: 3, col: '#8a7a3a', pass2: false }); for (let j = 0; j < 6; j++) blob([[0, -120 - j * 10], [-20 - j * 3, -150 - j * 12], [-6, -160 - j * 10], [8, -130 - j * 10]], { wash: '#d8c070', washA: 1, w: 0.8, col: '#8a7030' }); pop(); }
    if (t > EV.ml_pul) bubbleTag('PVLMENTVM', 800, 1080, t, EV.ml_pul, '#7a2a14', 52, -0.05);
    if (t > EV.ml_rome && t < EV.ml_pul + 0.8) note('у римлян', 300, 1000, t, EV.ml_rome, EV.ml_pul + 0.8, '#3a2410', 40, -0.08);
  }
  function front(t) { push(-40, 1900, 1.5); pencil([[0, 0], [60, -400]], { w: 10, col: '#6a4a2a' }); poly([[50, -400], [70, -400], [60, -520]], { wash: '#a8acb0', washA: 1, w: 2 }); pop();
    push(1160, 1960, 1.6); const sh = blob([[-100, -260], [100, -260], [110, 0], [-110, 0]], { wash: '#a8221a', washA: 1, w: 3, col: '#3a0a04' }); shadeG(sh.path, 100, 0, -80, 0, '#5a0a04', 0.4); ell(0, -130, 30, 30, { wash: '#d8a830', washA: 1, w: 2 }); pencil([[-90, -130], [90, -130]], { w: 6, col: '#d8a830', pass2: false }); pop();
    motes(30, [-100, 400, 1200, 1500], '#ffd8a0', t, 18440, { sp: 18, sz: 3, a: 0.5, wob: 4 }); haze('#f0b890', 0.05); }
  WORLD.millet = (t, u, cat) => {
    lay(18, () => { sky(t); }); lay(6, () => { camp(t); haze('#e8b890', 0.08); });
    lay(3, () => { soldiers(t); });
    lay(1, () => { cat(); });
    lay(0.94, () => { table(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.millet = {
    outfit: 'legioA', light: { side: -1, rim: '#ffc890' }, grade: ['#e8a070', 0.1],
    act: () => [[S0.millet, 'talk'], [EV.ml_grey, 'shock'], [EV.ml_millet, 'suspicious'], [EV.ml_rome, 'talk'], [EV.ml_pul, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 680, y: 1600, s: 1.18, flip: 1, look: t > EV.ml_pul ? [0, 0] : t > EV.ml_grey ? [-0.7, 0.6] : [0.3, 0], hand: t > EV.ml_pul ? [140, -360] : [160, -260], handF: t > EV.ml_grey && t < EV.ml_millet ? [-200, -280] : [-80, -220], point: t > EV.ml_grey && t < EV.ml_millet ? 1 : undefined, prop: 'spoonMilletP', propAng: t > EV.ml_pul ? -0.4 : 0.2 }),
    cam: () => [[S0.millet, 560, 1000, 0.14], [S0.millet + 0.6, 560, 1180, 0.24, 'x'], [EV.ml_grey, 520, 1250, 0.28], [EV.ml_millet, 600, 1250, 0.26], [EV.ml_pul, 640, 1200, 0.28], [S1.millet, 640, 1180, 0.3]]
  };
  // ---------------------------------------------------------------- переход: мешалка закручивает кадр водоворотом каши
  TRANS_IN.millet = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k); drawBuf(B, 1, 540, 960); const R = (1 - e) * 1400;
    if (R > 4) inCircle(540, 960, R, () => { drawBuf(A, 1 + e * 0.4, 540, 960, 1, null, 0, 0, e * 5); scr(() => { for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283 + e * 9; pencil(spline([[540, 960], [540 + Math.cos(a) * R * 0.4, 960 + Math.sin(a) * R * 0.4], [540 + Math.cos(a + 1) * R * 0.9, 960 + Math.sin(a + 1) * R * 0.9]], false, 6), { w: 30, col: '#f2c23a', a: 0.4, pass2: false, gap: false }); } }); });
    scr(() => { push(540 + Math.cos(e * 12) * R * 0.3, 960 + Math.sin(e * 12) * R * 0.3 - 300, 1.6, Math.cos(e * 12) * 0.4); facalet(0, 0, 1, 0); pop(); });
  } };
})();
