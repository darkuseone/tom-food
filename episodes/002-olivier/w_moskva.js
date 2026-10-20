/* 002 — `moskva`: «Тысяча девятьсот тридцать девятый. Гостиница „Москва“: шеф Ермилин подаёт „Салат из дичи“.» Ресторан 1939 года в духе ар-деко:
   мраморные колонны, хрустальная люстра-каскад, джаз-оркестр на эстраде, пары за столиками с белыми скатертями, официанты. Шеф Ермилин (усы, колпак)
   выносит серебряное блюдо с салатом-куполом, Том-повар в фартуке открывает меню — карточка «САЛАТ ИЗ ДИЧИ» выпрыгивает ценником.
   Переход В сцену: нож шинкует кадр кубиком (фирменная нарезка оливье) — кубики разлетаются, под ними 1939-й. */
(() => {
  EV.mo_year = LS('s3');
  EV.mo_hotel = wtw('s3', '«Москва»:');
  EV.mo_chef = wtw('s3', 'Ермилин');
  EV.mo_dish = wtw('s3', '«Салат');
  KEYW.push('«Москва»:', 'Ермилин');

  function hall(t) {                                                    // стены: мрамор, пилястры-ступени ар-деко, золотые лучи, балкон
    vgrad(-600, 1500, ['#3a1a14', '#6a2a1e', '#8a3a24']); for (let i = 0; i < 9; i++) { const x = -300 + i * 220; const p = rect(x, 200, 120, 1000, { wash: '#e8dcc4', washA: 1, w: 2.4, col: '#3a2410', key: 5000 + i }); shadeG(p.path, x + 120, 0, x, 0, '#9a8a6a', 0.5);
      for (let k = 0; k < 3; k++) rect(x - 10 - k * 10, 200 - k * 30, 140 + k * 20, 30, { wash: '#d8c8a4', washA: 1, w: 2, col: '#3a2410' }); const r = rng(5010 + i); for (let k = 0; k < 4; k++) pencil(spline([[x + r() * 120, 240], [x + r() * 120, 600], [x + r() * 120, 1100]], false, 5), { w: 1.4, col: '#a89a7a', a: 0.5, pass2: false }); }
    push(540, 150, 1); for (let i = -8; i <= 8; i++) pencil([[0, 0], [i * 90, 220]], { w: 3, col: '#e8b53a', a: 0.6, pass2: false }); poly([[-260, 0], [260, 0], [200, -70], [-200, -70]], { wash: '#e8b53a', washA: 1, w: 2.4, col: '#5a3a08' }); txt('РЕСТОРАН', 0, -34, 52, { font: 'Osw', col: '#5a1a08' }); pop();
    rect(-300, 600, 1700, 40, { wash: '#c8a050', washA: 1, w: 2.4, col: '#4a2a08' }); for (let i = 0; i < 40; i++) pencil([[-280 + i * 44, 640], [-280 + i * 44, 720]], { w: 4, col: '#a8843a', pass2: false }); pencil([[-300, 720], [1400, 720]], { w: 6, col: '#a8843a' });
  }
  function chandelier(t) { push(540, 330, 1); pencil([[0, -300], [0, 0]], { w: 5, col: '#c8a050' }); for (let r = 0; r < 4; r++) { const n = 8 + r * 4, R = 60 + r * 60; for (let i = 0; i < n; i++) { const a = i / n * 6.283 + t * 0.1, x = Math.cos(a) * R, y = r * 50 + Math.sin(a) * R * 0.18;
      pencil([[x, y], [x, y + 50]], { w: 1.4, col: '#e8f0f6', a: 0.7, pass2: false }); ell(x, y + 56, 6, 10, { wash: '#f4fbff', washA: 0.9, w: 1, col: '#8aa0b0' }); } } glow(0, 100, 380, 'rgba(255,236,190,1)', 0.45); glow(0, 100, 120, 'rgba(255,255,240,1)', 0.6); pop(); }
  function band(t) {                                                    // эстрада: саксофон, контрабас, пианист, пюпитры «ДЖАЗ»
    rect(-300, 1000, 900, 60, { wash: '#5a2a1a', washA: 1, w: 2.4, col: '#1a0a04' }); const sw = Math.sin(t * 6);
    human(-80, 1000, 0.85, t, { body: '#1a1a20', legs: '#1a1a20', hair: '#1a1a1a', face: 'calm', armL: 'hold', armR: 'up', seed: 81 }); push(-60, 820, 1, 0.3 + sw * 0.05); pencil(spline([[0, -60], [10, 40], [-10, 90], [20, 110]], false, 6), { w: 14, col: '#d6a842' }); ell(24, 110, 18, 12, { wash: '#d6a842', washA: 1, w: 2 }); pop();
    human(120, 1000, 0.85, t, { body: '#1a1a20', legs: '#1a1a20', hair: '#3a2a1a', face: 'smile', armL: 'hold', armR: 'swing', seed: 82 }); push(170, 1000, 1, -0.1); blob([[-40, -20], [-50, -140], [-24, -220], [24, -220], [50, -140], [40, -20]], { wash: '#8a4a1a', washA: 1, w: 2, col: '#2a1004' }); pencil([[0, -220], [0, -340]], { w: 5, col: '#2a1004' }); pop();
    push(380, 1000, 1); rect(-120, -150, 240, 150, { wash: '#121214', washA: 1, w: 2.4 }); for (let i = 0; i < 10; i++) rect(-110 + i * 22, -40, 20, 40, { wash: '#f6f2e8', washA: 1, w: 1 }); pop(); human(380, 1000, 0.8, t, { body: '#1a1a20', legs: '#1a1a20', hair: '#c8a060', face: 'grin', armL: 'hold', armR: 'hold', seed: 83, flip: -1 });
    for (const x of [-140, 60]) { push(x, 1000, 1); pencil([[0, 0], [0, -110]], { w: 3, col: '#c8a050' }); rect(-40, -150, 80, 50, { wash: '#d9482b', washA: 1, w: 2 }); txt('ДЖАЗ', 0, -124, 22, { font: 'Osw', col: '#fff4d0' }); pop(); }
    for (let i = 0; i < 4; i++) { const k = (t * 0.6 + i / 4) % 1; txt(['♪', '♫'][i % 2], 0 + i * 60 + k * 40, 760 - k * 200, 44, { col: '#f4e6c8', a: 1 - k }); }
  }
  function tables(t) { for (const [x, y, s, sd] of [[760, 1080, 0.85, 91], [1150, 1100, 0.9, 92]]) { push(x, y, s); ell(0, 0, 150, 30, { wash: '#f6f4ee', washA: 1, w: 2, col: '#4a4a4a' }); rect(-150, 0, 300, 90, { wash: '#f6f4ee', washA: 1, w: 2, col: '#4a4a4a' }); for (let i = 0; i < 3; i++) pencil([[-100 + i * 100, 0], [-110 + i * 100, 90]], { w: 2, col: '#c8c4bc', pass2: false });
      candle(-60, -20, 0.6, t, sd); push(60, -10, 1); pencil([[0, 0], [0, -30]], { w: 3, col: '#c8d8e0' }); poly([[-16, -80], [16, -80], [6, -30], [-6, -30]], { wash: '#c8402e', washA: 0.6, w: 1.6, col: '#5a6a7a' }); pop(); pop();
      human(x - 150 * s, y + 20, s * 0.95, t, { body: sd % 2 ? '#1a1a2a' : '#5a2a4a', legs: '#1a1a1a', hair: sd % 2 ? '#2a1a0a' : '#c88a3a', face: t > EV.mo_dish ? 'shock' : 'smile', armL: 'down', armR: t > EV.mo_dish ? 'point' : 'hold', look: -0.6, seed: sd, flip: 1 });
      human(x + 150 * s, y + 20, s * 0.95, t, { body: sd % 2 ? '#7a2a3a' : '#2a3a4a', legs: '#1a1a1a', hair: '#1a1a1a', face: 'grin', armL: 'hold', armR: 'down', look: -0.6, seed: sd + 5, flip: -1 }); } }
  function ermilin(t) {                                                 // шеф Ермилин с серебряным блюдом и салатом-куполом
    const k = sm(clamp((t - EV.mo_chef + 0.4) / 0.6)), x = lerp(-250, 190, k);
    human(x, 1520, 1.15, t, { body: '#f8f5ee', legs: '#2b2622', hair: '#3a2a1a', face: t > EV.mo_dish ? 'grin' : 'smile', armL: 'hold', armR: 'hold', look: 0.4, seed: 95 }); hat20(x, 1520, 1.15, 'chef'); stache(x, 1520, 1.15);
    push(x + 70, 1520 - 250, 1); ell(0, 0, 170, 34, { wash: '#d8dce0', washA: 1, w: 2.6, col: '#3a3e44' }); glow(-80, -6, 40, 'rgba(255,255,255,1)', 0.7);
    const d = blob([[-120, -10], [-110, -90], [-50, -150], [50, -150], [110, -90], [120, -10]], { wash: OL.mayo, washA: 1, w: 2.4, col: '#8a7a4a', key: 5050 }); shadeG(d.path, 100, 0, -60, 0, '#c8b88a', 0.4);
    for (let i = 0; i < 7; i++) { const a = Math.PI + (i + 0.5) / 7 * Math.PI; crayTail(Math.cos(a) * 90, -70 + Math.sin(a) * 60, 0.5, a); } for (let i = 0; i < 5; i++) caper(-60 + i * 30, -20, 1.6); roastBird(0, -150, 0.35, t, { steam: 1 }); pop();
  }
  function menu(t) { if (t < EV.mo_dish - 0.1) return; const k = popK(t, EV.mo_dish - 0.1, 0.4); push(880, 1200, k * 0.75, -0.06);
    rect(-190, -230, 380, 460, { wash: '#f4ead0', washA: 1, w: 3, col: '#4a2a08' }); pencil([[-170, -210], [170, -210], [170, 210], [-170, 210], [-170, -210]], { w: 3, col: '#c8a050', pass2: false });
    txt('МЕНЮ · 1939', 0, -170, 36, { font: 'Osw', col: '#5a1a08' }); pencil([[-120, -140], [120, -140]], { w: 2, col: '#c8a050', pass2: false });
    rect(-170, -100, 340, 90, { wash: '#d9482b', washA: 1, w: 2, col: '#4a0e08' }); txt('САЛАТ', 0, -76, 40, { font: 'Osw', col: '#fff8ec' }); txt('ИЗ ДИЧИ', 0, -34, 40, { font: 'Osw', col: '#fff8ec' });
    for (const [i, s] of ['консоме', 'осетрина', 'котлета по-киевски', 'мороженое'].entries()) txt(s, 0, 40 + i * 42, 30, { font: 'Hand', col: '#3a2a1a' }); pop(); }
  WORLD.moskva = (t, u, cat) => {
    lay(16, () => { hall(t); }); lay(7, () => { chandelier(t); band(t); haze('#ffcf90', 0.08); });
    lay(3.4, () => { tables(t); haze('#ffcf90', 0.05); });
    lay(1, () => { const f = rect(-400, 1460, 2000, 900, { wash: '#7a1a1a', washA: 1, w: 2, col: '#2a0404', key: 5060 }); hatch(f.path, f.bb, { gap: 14, a: 0.15, col: '#2a0404', ang: 0.8, key: 5061 }); for (let i = 0; i < 2; i++) pencil([[-400, 1500 + i * 360], [1600, 1500 + i * 360]], { w: 10, col: '#c8a050', a: 0.7 });
      ermilin(t); cat(); });
    lay(0.8, () => { menu(t); });
    lay(0.55, () => { for (const x of [-120, 1200]) { const c = rect(x - 70, -200, 140, 2400, { wash: '#e8dcc4', washA: 1, w: 3, col: '#3a2410' }); shadeG(c.path, x + 70, 0, x - 70, 0, '#8a7a5a', 0.6); } });
  };
  DIR.moskva = {
    outfit: 'chefO', light: { side: -1, rim: '#ffe0a0' }, grade: ['#ffb060', 0.12],
    act: () => [[S0.moskva, 'proud'], [EV.mo_hotel, 'awe'], [EV.mo_chef, 'grin'], [EV.mo_dish, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 640, y: 1780, s: 1.15, look: t < EV.mo_chef ? [0, -0.5] : [-0.8, 0], hand: t > EV.mo_dish ? [190, -330] : [-160, -200], handF: [-100, -330], point: t > EV.mo_dish ? 1 : undefined }),
    cam: () => [[S0.moskva, 540, 600, 0.3], [S0.moskva + 1.3, 540, 1000, 0.08, 'x'], [EV.mo_chef, 480, 1180, 0.14], [EV.mo_dish, 560, 1200, 0.18], [S1.moskva, 580, 1180, 0.22]]
  };
  // ---------------------------------------------------------------- переход: нож шинкует кадр кубиком, кубики осыпаются
  TRANS_IN.moskva = { a: 0.35, b: 0.5, runA: 0.5, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const N = 120, cut = clamp(k / 0.4), fall = clamp((k - 0.35) / 0.65);
    for (let gx = 0; gx < 9; gx++) for (let gy = 0; gy < 16; gy++) { const r = rng(5090 + gx * 31 + gy), d = clamp(fall * 1.6 - (r() * 0.5 + gy / 32)); if (d >= 1) continue;
      const cx = gx * N + N / 2, cy = gy * N + N / 2, s = 1 - d * 0.6, dy = d * d * 900, rot = (r() - 0.5) * d * 3;
      const P = new Path2D(); ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.translate(cx, cy + dy); ctx.rotate(rot); ctx.scale(s, s); P.rect(-N / 2 - 0.5, -N / 2 - 0.5, N + 1, N + 1); ctx.restore();
      const M = new DOMMatrix().translate(cx, cy + dy).rotate(rot * 57.3).scale(s, s); const P2 = new Path2D(); P2.addPath(P, M);
      inPath(P2, () => drawBuf(A, s, cx, cy, 1, null, 0, dy, rot)); }
    scr(() => { for (let i = 1; i < 9; i++) if (cut * 9 > i - 0.5) pencil([[i * N, -20], [i * N, H * clamp(cut * 9 - i + 1)]], { w: 4, col: '#fffaf0', a: 0.8 * (1 - fall), pass2: false, gap: false });
      for (let j = 1; j < 16; j++) if (cut > 0.5) pencil([[-20, j * N], [W * clamp(cut * 2 - 1) * 1.2, j * N]], { w: 4, col: '#fffaf0', a: 0.8 * (1 - fall), pass2: false, gap: false });
      if (cut < 1) { const y = cut * 2200 - 200; push(540, y, 1, 0.6); poly([[-300, -30], [300, -30], [340, 0], [300, 30], [-300, 30]], { wash: '#e8ecf0', washA: 1, w: 4, col: '#2a2e34' }); rect(-480, -26, 180, 52, { wash: '#2a1a10', washA: 1, w: 3 }); glow(0, -10, 120, 'rgba(255,255,255,1)', 0.5); pop(); } });
  } };
})();
