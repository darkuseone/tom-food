/* 005 — `poland`: «Потом борщ пошёл по миру: в Польше прозрачный, с пельмешками-«ушками».» Сочельник (Вигилия): тёмно-синее окно со снегом и первой звездой,
   на стене карта в раме — на «по миру» от котла ползёт красный пунктир, на «Польше» вспыхивает точка. Стол: белая скатерть с сеном под ней, облатка, свечи, лишняя
   тарелка «для путника», семья за столом. На «прозрачный» в чашке — прозрачный рубиновый барщ, сквозь него видно дно; на «ушками» в чашку прыгают ушки.
   Том в свитере. Переход В сцену: пламя свечи прожигает кадр, края тлеют. */
(() => {
  EV.pl_map = wtw('s6', 'миру:');
  EV.pl_pl = wtw('s6', 'Польше');
  EV.pl_clear = wtw('s6', 'прозрачный,');
  EV.pl_usz = wtw('s6', 'пельмешками');
  SHAKES.push([EV.pl_usz + 0.3, 0.16, 6]);
  KEYW.push('прозрачный,');

  function room(t) { vgrad(-600, 1600, ['#2a2a4a', '#3a3456', '#4a3a50']); for (let i = 0; i < 7; i++) pencil([[-300, 120 + i * 160], [1400, 120 + i * 160]], { w: 1.6, col: '#5a4a6a', a: 0.5, pass2: false });
    const w = rect(640, 160, 360, 480, { wash: '#14204a', washA: 1, w: 10, col: '#e8e0d0', key: 5800 }); ctx.save(); ctx.clip(w.path); motes(40, [640, 160, 1000, 640], '#ffffff', t, 5801, { sp: 40, sz: 4, a: 0.9 }); const st = 0.5 + 0.5 * Math.sin(t * 5); glow(900, 240, 50 + st * 20, 'rgba(255,240,180,1)', 0.8); ctx.restore(); pencil([[820, 160], [820, 640]], { w: 8, col: '#e8e0d0' }); pencil([[640, 400], [1000, 400]], { w: 8, col: '#e8e0d0' });
    poly([[900, 222], [906, 236], [920, 240], [906, 244], [900, 258], [894, 244], [880, 240], [894, 236]], { wash: '#fff6c0', washA: 1, line: false });
    // карта в раме
    const m = rect(60, 600, 480, 360, { wash: '#e8d8b0', washA: 1, w: 8, col: '#6a4a2a', key: 5810 }); push(300, 780, 1);
    blob([[-200, -120], [-60, -150], [80, -130], [200, -90], [210, 20], [150, 140], [-20, 150], [-150, 120], [-210, 30]], { wash: '#c8b888', washA: 1, w: 2, col: '#6a5a3a' }); for (let i = 0; i < 4; i++) pencil([[-180 + i * 110, -140], [-160 + i * 100, 140]], { w: 1.2, col: '#8a7a5a', a: 0.5, pass2: false });
    const k = clamp((t - EV.pl_map) / (EV.pl_pl - EV.pl_map + 0.2)); ell(140, 60, 14, 14, { wash: BR.red, washA: 1, w: 2 }); if (k > 0) { const pts = []; for (let i = 0; i <= 20 * k; i++) { const q = i / 20; pts.push([lerp(140, -60, q), lerp(60, -40, q) - Math.sin(q * 3.14) * 60]); } dashL(pts, BR.red, 1, 4, 2); }
    if (t > EV.pl_pl) { const p = popK(t, EV.pl_pl); ell(-60, -40, 16 * p, 16 * p, { wash: '#fff2a0', washA: 1, w: 2.4, col: BR.red }); glow(-60, -40, 50, 'rgba(255,220,120,1)', 0.5 * p); txt('ПОЛЬША', -60, -76, 26, { font: 'Osw', col: '#7a1a10', a: p }); } pop(); }
  function family(t) { const cl = t > EV.pl_clear; human(160, 1240, 0.9, t, { body: '#7a2a3a', hair: '#e8d8b0', face: cl ? 'smile' : 'calm', armL: 'hold', armR: 'hold', seed: 400, look: 0.5, long: 1 });
    human(380, 1240, 0.82, t, { body: '#2a3a5a', hair: '#5a3a1a', face: t > EV.pl_usz ? 'grin' : 'smile', armL: 'hold', armR: t > EV.pl_usz ? 'up' : 'hold', seed: 401, look: 0.6, beard: true });
    for (const [x, h] of [[300, 120], [560, 150]]) { rect(x - 10, 1270 - h, 20, h, { wash: '#f6f0e0', washA: 1, w: 1.6, col: '#8a7a5a' }); const f = flick(t, x); blob([[x - 8, 1270 - h], [x, 1270 - h - 40 * f], [x + 8, 1270 - h]], { wash: '#ffb040', washA: 1, line: false }); glow(x, 1270 - h - 20, 120, 'rgba(255,190,90,1)', 0.45); } }
  function table(t) { const tb = rect(-300, 1300, 1700, 700, { wash: '#f8f4ea', washA: 1, w: 3, col: '#8a8270', key: 5820 }); shadeG(tb.path, 540, 1300, 540, 1900, '#c8c0b0', 0.4); for (let i = 0; i < 8; i++) pencil([[-260 + i * 190, 1300], [-280 + i * 190, 1290 - 20 * ((i * 7) % 3)]], { w: 2, col: '#d8b860', pass2: false });
    ell(140, 1370, 110, 26, { wash: '#ffffff', washA: 1, w: 2.4, col: '#8a8a8a' }); txt('для путника', 140, 1430, 26, { font: 'Hand', col: '#6a5a4a', a: 0.8 }); rect(560, 1330, 120, 70, { wash: '#f6eed8', washA: 1, w: 1.6, col: '#a89878' });
    // чашка барща
    const cx = 520, cy = 1500, cl = clamp((t - EV.pl_clear + 0.1) / 0.5); push(cx, cy, 1.1); ell(0, 40, 130, 26, { wash: '#ffffff', washA: 1, w: 2.4, col: '#8a8a8a' }); const cup = shape(spline([[-100, -60], [-90, 20], [-50, 50], [50, 50], [90, 20], [100, -60]], false, 8), { wash: '#ffffff', washA: 1, w: 2.6, col: '#5a5a6a' });
    for (const sd of [-1, 1]) pencil(spline([[sd * 100, -40], [sd * 140, -20], [sd * 100, 20]], false, 6), { w: 6, col: '#5a5a6a' });
    const lv = ell(0, -60, 100, 22, { wash: lerpC('#6a0a14', '#c8182a', cl), washA: lerp(1, 0.7, cl), w: 2, col: '#5a0a14' }); if (cl > 0) { ctx.save(); ctx.clip(lv.path); for (let i = 0; i < 3; i++) pencil([[-80 + i * 60, -64], [-60 + i * 60, -56]], { w: 2, col: '#ffe0e0', a: 0.6 * cl, pass2: false }); ell(-30, -66, 30, 6, { wash: '#ffd0d8', washA: 0.5 * cl, line: false }); ctx.restore(); }
    const uk = t - EV.pl_usz; for (let i = 0; i < 4; i++) { const q = clamp((uk - i * 0.15) / 0.4); if (q > 0) uszko(-50 + i * 32, lerp(-260, -60, q * q) - (q >= 1 ? Math.sin(t * 3 + i) * 3 : 0), 0.9, i - 1.5 + q); } pop();
    if (t > EV.pl_clear) bubbleTag('ПРОЗРАЧНЫЙ', 520, 1250, t, EV.pl_clear, '#a8182a', 30, -0.05); if (t > EV.pl_usz) bubbleTag('«УШКИ»', 800, 1330, t, EV.pl_usz + 0.2, '#d6a842', 34, 0.06); }
  WORLD.poland = (t, u, cat) => { lay(12, () => room(t)); lay(2.6, () => family(t)); lay(1, () => { table(t); cat(); }); };
  DIR.poland = {
    outfit: 'sweater', light: { side: -1, rim: '#ffd890' }, grade: ['#3a3a7a', 0.06],
    act: () => [[S0.poland, 'talk'], [EV.pl_pl, 'proud'], [EV.pl_clear, 'awe'], [EV.pl_usz, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 860, y: 1800, s: 1.12, flip: true, noHat: true, look: t < EV.pl_clear ? [-0.8, -0.6] : [-0.6, 0.4], hand: t < EV.pl_clear ? [160, -360] : [120, -240], handF: [-90, -220], point: t < EV.pl_clear ? 1 : 0, prop: t > EV.pl_clear ? 'spoonBorschP' : null }),
    cam: () => [[S0.poland, 420, 900, 0.16], [EV.pl_pl, 320, 820, 0.24, 'x'], [EV.pl_clear, 560, 1340, 0.26, 'x'], [EV.pl_usz, 560, 1320, 0.32], [S1.poland, 580, 1320, 0.34]]
  };
  // ---------------------------------------------------------------- переход: пламя свечи прожигает кадр, края тлеют
  TRANS_IN.poland = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const R = Math.pow(k, 1.3) * 1500, pts = []; for (let i = 0; i < 48; i++) { const a = i / 48 * 6.283, r = rng(5850 + i)(); pts.push([540 + Math.cos(a) * R * (0.85 + 0.25 * r), 1100 + Math.sin(a) * R * (0.85 + 0.25 * rng(5900 + i)())]); }
    const p = spline(pts, true, 3); inPath(pathOf(p), () => drawBuf(B, 1, 540, 960));
    scr(() => { pencil(p, { w: 26, col: '#2a1408', a: 1 - k * 0.5, pass2: false }); pencil(p, { w: 10, col: '#ff8a20', a: 1 - k * 0.4, pass2: false }); glow(540, 1100, 120 + R * 0.2, 'rgba(255,170,60,1)', 0.4 * (1 - k)); });
  } };
})();
