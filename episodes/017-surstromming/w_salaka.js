/* 017 — `salaka`: «Сюрстрёмминг — шведская „кислая салака“. Её упоминают ещё в шестнадцатом веке.» Рыбацкий посёлок на Высоком берегу Швеции:
   красные домики с белыми углами на скалах, сосны, ботнический залив, лодки с сетями, сушилки для сетей, чайки, бочки, рыбаки чистят салаку, флаг-вымпел.
   Том-повар в фартуке держит серебристую салаку. По словам: «Сюрстрёмминг» — над Томом табличка SURSTRÖMMING разламывается на SUR + STRÖMMING;
   «кислая» — под SUR подпись «= КИСЛАЯ», рядом кислая рожица; «салака» — под STRÖMMING «= САЛАКА», из бочки выпрыгивает рыба; «шестнадцатом веке» —
   свиток-грамота с печатью «XVI». Переход В сцену: кадр уходит под воду — волна снизу накрывает и открывает новую сцену. */
(() => {
  EV.sl_name = wtw('s1', 'Сюрстрёмминг');
  EV.sl_sour = wtw('s1', '«кислая');
  EV.sl_fish = wtw('s1', 'салака».');
  EV.sl_16 = wtw('s1', 'шестнадцатом');
  KEYW.push('Сюрстрёмминг', 'веке.');

  function coast(t) {                                                   // небо, залив, скалы с соснами, красные домики, чайки
    vgrad(-700, 900, ['#7aa8d8', '#c8e0f0', '#f0f4f4']); for (let i = 0; i < 4; i++) { const x = ((i * 420 + t * 14) % 1900) - 400; for (let k = 0; k < 4; k++) ell(x + k * 60, -320 + (i % 2) * 100 - (k % 2) * 20, 80, 28, { wash: '#ffffff', washA: 0.9, line: false }); }
    const sea = rect(-400, 620, 2000, 500, { wash: '#4a7a9a', washA: 1, line: false }); for (let i = 0; i < 8; i++) pencil(Array.from({ length: 30 }, (_, j) => [-400 + j * 70, 650 + i * 50 + Math.sin(t * 1.5 + j * 0.6 + i) * 6]), { w: 2, col: '#cfe4f4', a: 0.5, pass2: false });
    for (const [x, h] of [[-200, 380], [1200, 420]]) { shape(spline([[x - 400, 900], [x - 200, 900 - h * 0.6], [x, 900 - h], [x + 200, 900 - h * 0.7], [x + 400, 900]], true, 8), { wash: '#7a7068', washA: 1, w: 2, col: '#3a3430' }); for (let i = 0; i < 6; i++) spruce(x - 220 + i * 90, 900 - h * 0.7 + Math.abs(i - 2.5) * 30, 140, '#2a4a3a', 1); }
    for (const [x, y, s] of [[-120, 560, 1], [80, 600, 0.8], [1080, 540, 1], [1260, 580, 0.85]]) { push(x, y, s); rect(-80, -100, 160, 100, { wash: '#a8302a', washA: 1, w: 2, col: '#3a0a08' }); for (const sd of [-1, 1]) rect(sd * 80 - 6, -100, 12, 100, { wash: '#f4f4f0', washA: 1, line: false }); shape([[-100, -100], [0, -170], [100, -100]], { wash: '#3a3a3a', washA: 1, w: 2 }); rect(-20, -60, 40, 60, { wash: '#2a1a10', washA: 1, w: 1.2 }); rect(30, -80, 30, 30, { wash: '#f4f4f0', washA: 1, w: 1 }); pop(); }
    for (let i = 0; i < 5; i++) { const x = ((i * 260 + t * 70) % 1600) - 200, y = -100 + i * 40 + Math.sin(t * 3 + i) * 12; pencil(spline([[x - 30, y], [x - 12, y - 14], [x, y], [x + 12, y - 14], [x + 30, y]], false, 5), { w: 4, col: '#f4f4f4', pass2: false }); }
  }
  function harbor(t) {                                                  // пристань, лодки, сушилки для сетей, рыбаки, бочки
    rect(-400, 1060, 2000, 40, { wash: '#7a5a3a', washA: 1, w: 2, col: '#2a1a0a' }); for (let i = 0; i < 12; i++) pencil([[-380 + i * 170, 1100], [-380 + i * 170, 1200]], { w: 14, col: '#5a3a1a' });
    for (const [x, c] of [[300, '#2a5a8a'], [760, '#8a3a2a']]) { const bob = Math.sin(t * 1.6 + x) * 6; push(x, 1000 + bob, 1); shape(spline([[-150, -40], [-120, 30], [120, 30], [160, -50]], true, 6), { wash: c, washA: 1, w: 2.4, col: '#1a1a1a' }); pencil([[-140, -40], [150, -46]], { w: 4, col: '#f4f0e6', pass2: false }); pencil([[0, -40], [0, -240]], { w: 6, col: '#5a3a1a' }); shape([[4, -230], [100, -60], [4, -60]], { wash: '#f4ecd8', washA: 0.9, w: 1.6 }); pop(); }
    for (const x of [-200, 1080]) { push(x, 1080, 1); for (const sd of [-1, 1]) pencil([[sd * 90, 0], [sd * 90, -260]], { w: 8, col: '#5a3a1a' }); pencil([[-100, -250], [100, -250]], { w: 6, col: '#5a3a1a' }); const n = shape([[-90, -250], [90, -250], [80, -60], [-80, -70]], { wash: '#c8b888', washA: 0.4, w: 1.4, col: '#8a7a5a' }); hatch(n.path, n.bb, { gap: 14, a: 0.7, col: '#6a5a3a', ang: 0.8 }); hatch(n.path, n.bb, { gap: 14, a: 0.7, col: '#6a5a3a', ang: -0.8 }); pop(); }
    for (const [i, x] of [[0, 140], [1, 980]]) { human(x, 1310, 1.0, t, { body: i ? '#3a4a6a' : '#6a4a3a', legs: '#3a3a3a', hair: ['#e8c890', '#c8a060'][i], beard: i ? 'short' : undefined, face: t > EV.sl_fish ? 'grin' : 'smile', armL: 'hold', armR: 'hold', look: i ? -0.5 : 0.5, seed: 17200 + i, flip: i ? -1 : 1 }); push(x + (i ? -70 : 70), 1310 - 180, 1); fish(0, 0, 0.45, i ? 0.4 : -0.4, { key: 17202 + i }); pop(); }
  }
  function dock(t) {                                                    // стол: корзина салаки, бочка, табличка-разлом, свиток XVI
    const tb = rect(-400, 1440, 1900, 800, { wash: '#8a6a44', washA: 1, w: 3, col: '#2a1a0a', key: 17210 }); shadeG(tb.path, 0, 1900, 0, 1440, '#3a2410', 0.45); for (let i = 0; i < 8; i++) pencil([[-400 + i * 260, 1440], [-400 + i * 260, 2200]], { w: 3, col: '#4a3018', a: 0.5, pass2: false });
    push(160, 1500, 1); const bk = blob([[-130, 0], [-140, -90], [140, -90], [130, 0]], { wash: '#c8a058', washA: 1, w: 2, col: '#5a3a10' }); hatch(bk.path, bk.bb, { gap: 10, a: 0.5, col: '#8a6020', ang: 0.8 }); for (let i = 0; i < 6; i++) push(-80 + (i % 3) * 80, -100 - Math.floor(i / 3) * 24, 0.5, (i % 2 ? 0.2 : -0.2)), fish(0, 0, 1, 0, { key: 17211 + i }), pop(); pop();
    barrel(1000, 1540, 0.75, t, { key: 17220, bubbles: 1 }); if (t > EV.sl_fish) { const q = clamp((t - EV.sl_fish) / 0.7); push(1000 + q * -120, 1340 - Math.sin(q * Math.PI) * 220, 1, q * 5); fish(0, 0, 0.5, 0, { key: 17225 }); pop(); }
    if (t > EV.sl_name - 0.1) { const sp = t > EV.sl_sour - 0.1 ? sm(clamp((t - EV.sl_sour + 0.1) / 0.3)) : 0; push(560, 900, popK(t, EV.sl_name - 0.1, 0.4));
      push(-sp * 90, 0, 1, -sp * 0.06); rect(-260 + sp * 30, -50, 160, 100, { wash: '#f4c020', washA: 1, w: 3, col: '#5a3a08' }); txt('SUR', -180 + sp * 30, 18, 52, { font: 'Osw', col: '#2a3a6a' }); pop();
      push(sp * 90, 0, 1, sp * 0.06); rect(-100, -50, 360, 100, { wash: '#f4c020', washA: 1, w: 3, col: '#5a3a08' }); txt('STRÖMMING', 80, 18, 52, { font: 'Osw', col: '#2a3a6a' }); pop();
      if (t > EV.sl_sour) { push(-270, 100, popK(t, EV.sl_sour, 0.35)); txt('= КИСЛАЯ', 0, 0, 36, { font: 'Osw', col: '#8a3a1a' }); pop(); } if (t > EV.sl_fish) { push(170, 100, popK(t, EV.sl_fish, 0.35)); txt('= САЛАКА', 0, 0, 36, { font: 'Osw', col: '#2a4a7a' }); pop(); } pop(); }
    if (t > EV.sl_16 - 0.1) { push(820, 1260, popK(t, EV.sl_16 - 0.1, 0.4), 0.06); rect(-110, -70, 220, 140, { wash: '#f0e2c0', washA: 1, w: 2, col: '#6a4a1a' }); for (const sd of [-1, 1]) ell(sd * 110, 0, 14, 74, { wash: '#c8a868', washA: 1, w: 2 }); txt('XVI', 0, -10, 54, { font: 'Osw', col: '#8a2a1a' }); for (let i = 0; i < 2; i++) pencil([[-80, 20 + i * 16], [80, 20 + i * 16]], { w: 2, col: '#8a6a3a', a: 0.7, pass2: false }); ell(70, 50, 20, 20, { wash: '#a8221a', washA: 1, w: 1.6 }); pop(); }
  }
  function front(t) { push(-40, 1960, 1.6); for (let i = 0; i < 3; i++) push(-40 + i * 40, -30 - i * 10, 0.6, 0.3 - i * 0.3), fish(0, 0, 1, 0, { key: 17230 + i }), pop(); pop(); push(1180, 1990, 1.6); for (let i = 0; i < 5; i++) ell(-60 + i * 30, -20, 26, 16, { line: true, w: 6, col: '#c8b088' }); pop();
    motes(24, [0, 300, 1100, 1700], '#ffffff', t, 17235, { sp: 8, sz: 3, a: 0.45, wob: 2 }); rays(1100, -300, 2.2, 0.4, 1900, 'rgba(255,250,230,1)', 0.12, 5, t); }
  WORLD.salaka = (t, u, cat) => {
    lay(14, () => { coast(t); haze('#dfe8f0', 0.08); });
    lay(3.2, () => { harbor(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { dock(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.salaka = {
    outfit: 'medcook', light: { side: 1, rim: '#fff4d8' }, grade: ['#c8d8e8', 0.05],
    act: () => [[S0.salaka, 'proud'], [EV.sl_name, 'talk'], [EV.sl_sour, 'annoyed'], [EV.sl_fish, 'grin'], [EV.sl_16, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1580, s: 1.16, flip: t > EV.sl_16 ? 1 : -1, look: t > EV.sl_16 ? [0.8, 0.2] : t > EV.sl_name ? [0, -0.8] : [-0.5, 0.4], hand: [200, -300], handF: [-90, -220], prop: 'fishP', propAng: 0.1, squint: t > EV.sl_sour && t < EV.sl_fish }),
    cam: () => [[S0.salaka, 560, 900, 0.12], [EV.sl_name, 540, 1050, 0.22, 'x'], [EV.sl_sour, 520, 1000, 0.22], [EV.sl_16, 700, 1250, 0.22], [S1.salaka, 700, 1250, 0.24]]
  };
  // ---------------------------------------------------------------- переход: волна снизу накрывает кадр и открывает новую сцену
  TRANS_IN.salaka = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), Y = lerp(H + 100, -200, e); drawBuf(A, 1, 540, 960); const P = new Path2D(); P.moveTo(0, H); for (let x = 0; x <= W; x += 40) P.lineTo(x, Y + Math.sin(x * 0.012 + e * 10) * 60); P.lineTo(W, H); P.closePath(); inPath(P, () => drawBuf(B, 1, 540, 960));
    scr(() => { ctx.save(); ctx.strokeStyle = 'rgba(220,240,255,0.9)'; ctx.lineWidth = 24; ctx.beginPath(); for (let x = 0; x <= W; x += 40) { const y = Y + Math.sin(x * 0.012 + e * 10) * 60; if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); } ctx.stroke(); ctx.restore(); });
  } };
})();
