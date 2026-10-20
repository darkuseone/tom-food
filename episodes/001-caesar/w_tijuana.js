/* 001 — `tijuana`: 1924, Авенида Революсьон в Тихуане. Фальшфасады, вывески CAESAR'S / CANTINA / LONG BAR, «Форды-T» с американцами в пыли, пограничная арка.
   «сухой закон» — указатель на столбе: «← США: НЕЛЬЗЯ» / «МЕКСИКА: МОЖНО →». Том — официант в фартуке у дверей Caesar's, зазывает.
   Переход В сцену: укус-трещина — кадр пира раскалывается на куски-гренки, крошки разлетаются. */
(() => {
  EV.tj_year = LS('s1');
  EV.tj_mex = wtw('s1', 'Мексика.');
  EV.tj_dry = wtw('s1', 'сухой');
  KEYW.push('Мексика.', 'сухой', 'закон.');

  function sky(t) { vgrad(-600, 1300, ['#4a8ac8', '#9cc4e0', '#f6e2b0']); glow(860, 220, 380, 'rgba(255,240,190,1)', 0.7);
    for (const [x, y, w, sd] of [[200, 260, 300, 1], [760, 420, 240, 2]]) { const r = rng(2000 + sd), dx = (t * 8) % 60; for (let k = 0; k < 5; k++) ell(x + dx + (k - 2) * w / 5 + (r() - 0.5) * 20, y - Math.sin(k / 4 * Math.PI) * 30, w * 0.17, 30, { wash: '#fbf4e4', washA: 0.85, w: 1, col: '#c8b8a0', a: 0.3 }); } }
  function hills(t) { const h = poly([[-400, 1000], [-100, 840], [200, 900], [460, 800], [760, 880], [1100, 790], [1500, 900], [1500, 1200], [-400, 1200]], { wash: '#c8a070', washA: 1, w: 2, col: '#5a3a1a', key: 2010 });
    hatch(h.path, h.bb, { gap: 9, a: 0.14, col: '#6a4a2a', ang: -0.5, key: 2011 }); const r = rng(2012); for (let i = 0; i < 40; i++) ell(-300 + r() * 1700, 880 + r() * 120, 10 + r() * 10, 6, { wash: '#7a8a4a', washA: 0.9, w: 1, col: '#3a4a1a', a: 0.5 });
    push(160, 930, 1); rect(-150, -150, 300, 30, { wash: '#efe2c4', washA: 1, w: 2.2, col: '#3a2a14' }); txt('MEXICO', 0, -134, 26, { font: 'Osw', col: '#a8241e' }); for (const sd of [-1, 1]) rect(sd * 140 - 10, -122, 20, 130, { wash: '#efe2c4', washA: 1, w: 2, col: '#3a2a14' }); pencil([[-130, -40], [130, -40]], { w: 6, col: '#d9482b' }); pop(); }
  function facade(x, w, h, col, sign, sc, k, t) {                     // фальшфасад: карниз, балкон, окна-арки, вывеска
    const top = 1250 - h, f = rect(x, top, w, h, { wash: col, washA: 1, w: 2.4, col: '#3a2414', key: 2100 + k }); shadeG(f.path, x + w, 0, x, 0, '#5a3a20', 0.35); hatch(f.path, f.bb, { gap: 10, a: 0.08, col: '#5a3a20', ang: 1.2, key: 2101 + k });
    poly([[x - 10, top], [x + w + 10, top], [x + w + 10, top - 26], [x + w * 0.7, top - 26], [x + w / 2, top - 60], [x + w * 0.3, top - 26], [x - 10, top - 26]], { wash: lerpC(col, '#ffffff', 0.25), washA: 1, w: 2.2, col: '#3a2414' });
    for (let i = 0; i < Math.floor(w / 90); i++) { const wx = x + 30 + i * 90; const wp = shape(spline([[wx, top + 200], [wx, top + 110], [wx + 25, top + 90], [wx + 50, top + 110], [wx + 50, top + 200]], true, 4), { wash: '#3a4a5a', washA: 1, w: 2, col: '#2a1a0a' }); glow(wx + 20, top + 130, 20, 'rgba(255,255,255,1)', 0.25); }
    rect(x - 10, top + 220, w + 20, 14, { wash: '#6a4a2a', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < w / 24; i++) pencil([[x + i * 24, top + 234], [x + i * 24, top + 270]], { w: 2.4, col: '#5a3a1a', pass2: false }); pencil([[x - 10, top + 270], [x + w + 10, top + 270]], { w: 4, col: '#5a3a1a' });
    if (sign) { push(x + w / 2, top + 50, 1, Math.sin(t + k) * 0.01); rect(-w * 0.42, -30, w * 0.84, 60, { wash: sc[0], washA: 1, w: 2.4, col: '#2a1408' }); txt(sign, 0, 2, Math.min(44, w * 1.6 / sign.length), { font: 'Osw', col: sc[1] }); pop(); }
    rect(x + w / 2 - 50, 1250 - 200, 100, 200, { wash: '#2a1a10', washA: 1, w: 2.2, col: '#1a0a04' }); pencil([[x + w / 2, 1060], [x + w / 2, 1240]], { w: 2, col: '#6a4a2a', a: 0.7, pass2: false });
  }
  function poles(t) { for (const x of [-40, 470, 1000]) { pencil([[x, 1260], [x + 4, 640]], { w: 10, col: '#5a3a1a' }); pencil([[x - 50, 680], [x + 54, 680]], { w: 6, col: '#5a3a1a' }); }
    for (const y of [690, 700]) pencil(spline([[-40, y], [215, y + 50], [470, y], [735, y + 50], [1000, y], [1200, y + 40]], false, 8), { w: 1.6, col: '#2a1a0a', a: 0.8, pass2: false }); }
  function fordT(x, y, s, t, k) {                                     // «Форд-T» с туристами
    push(x, y, s); const b = poly([[-150, -40], [-120, -90], [-40, -96], [-20, -150], [70, -150], [90, -96], [150, -80], [160, -30], [-150, -30]], { wash: '#1e1e22', washA: 1, w: 2.6, col: '#000', key: 2200 + k }); shadeG(b.path, 0, -150, 0, -30, '#5a5a66', 0.3);
    pencil([[-20, -150], [-40, -230], [80, -230], [70, -150]], { w: 3, col: '#1e1e22', pass2: false }); rect(-44, -240, 128, 14, { wash: '#2a2a2e', washA: 1, w: 2 });
    for (const wx of [-100, 110]) { ell(wx, -20, 36, 36, { wash: '#1a1a1a', washA: 1, w: 2.4 }); ell(wx, -20, 14, 14, { wash: '#c8c4bc', washA: 1, w: 1.4 }); for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283 + t * 12; pencil([[wx, -20], [wx + Math.cos(a) * 30, -20 + Math.sin(a) * 30]], { w: 2, col: '#c8c4bc', pass2: false }); } }
    ell(150, -70, 12, 12, { wash: '#f6e6a0', washA: 1, w: 1.6 }); pop();
    human(x - 10 * s, y - 70 * s, s * 0.62, t, { body: '#c8b48a', legs: '#c8b48a', hair: '#6a4a2a', face: 'grin', armL: 'down', armR: 'wave', seed: 40 + k }); hat20(x - 10 * s, y - 70 * s, s * 0.62, 'boater');
    human(x + 50 * s, y - 70 * s, s * 0.6, t, { body: '#3a5a8a', legs: '#3a5a8a', hair: '#2a1a0a', face: 'smile', armL: 'down', armR: 'up', prop: k % 2 ? undefined : 'candle', seed: 44 + k }); hat20(x + 50 * s, y - 70 * s, s * 0.6, 'cloche', '#a8241e');
  }
  function dust(x, y, t, n, seed) { for (let i = 0; i < n; i++) { const r = rng(seed * 50 + i), k = ((t * 0.7 + r()) % 1); ell(x - k * 260 + r() * 40, y - k * 80 - r() * 30, 30 + k * 70, 20 + k * 40, { wash: '#e8d0a0', washA: 0.4 * (1 - k), line: false }); } }
  function signpost(t) {                                               // «сухой закон»: столб-указатель
    if (t < EV.tj_dry - 0.15) return; const k = popK(t, EV.tj_dry - 0.15, 0.4); push(440, 1660, 1, (1 - k) * 0.3); pencil([[0, 0], [0, -520 * k]], { w: 14, col: '#6a4424' });
    for (const [y, sd, s, c, d] of [[-470, -1, 'США: НЕЛЬЗЯ', '#d9482b', 0], [-380, 1, 'МЕКСИКА: МОЖНО', '#6b7a2e', 0.25]]) { const kk = popK(t, EV.tj_dry + d, 0.35); if (kk <= 0) continue; push(0, y, kk, sd * 0.04);
      poly([[sd * -20, -34], [sd * 270, -34], [sd * 306, 0], [sd * 270, 34], [sd * -20, 34]], { wash: c, washA: 1, w: 2.6, col: '#2a1408' }); txt(s, sd * 136, 2, 36, { font: 'Osw', col: '#fff8ec' }); pop(); }
    if (t > EV.tj_dry + 0.5) { push(-120, -200, popK(t, EV.tj_dry + 0.5, 0.3)); poly([[-14, 40], [14, 40], [12, -20], [6, -40], [-6, -40], [-12, -20]], { wash: '#8a5a2a', washA: 0.9, w: 2, col: '#2a1408' }); pencil([[-40, -60], [40, 60]], { w: 8, col: '#d9482b' }); pencil([[40, -60], [-40, 60]], { w: 8, col: '#d9482b' }); pop(); }
    pop();
  }
  function fore(t) { const g = poly([[-500, 1250], [1600, 1250], [1600, 2300], [-500, 2300]], { wash: '#d8b884', washA: 1, w: 2, col: '#6a4a2a', key: 2300 }); hatch(g.path, g.bb, { gap: 12, a: 0.12, col: '#8a6a3a', ang: 0.1, key: 2301 });
    const r = rng(2302); for (let i = 0; i < 50; i++) ell(r() * 1700 - 300, 1270 + r() * 700, 4 + r() * 6, 2 + r() * 3, { wash: '#a8885a', washA: 0.7, line: false });
    for (let i = 0; i < 2; i++) pencil(spline([[-400, 1320 + i * 90], [540, 1300 + i * 110], [1500, 1320 + i * 90]], false, 6), { w: 4, col: '#a07a48', a: 0.5, pass2: false });
    rect(-500, 1236, 2100, 22, { wash: '#b89a6a', washA: 1, w: 2, col: '#5a3a1a' }); }
  function cactusPot(x, y, s) { push(x, y, s); poly([[-50, 0], [50, 0], [40, -80], [-40, -80]], { wash: '#c8603a', washA: 1, w: 2.4, col: '#3a1408' }); for (const [cx, h, w] of [[0, 220, 26], [-30, 140, 18], [34, 160, 18]]) { const c = rect(cx - w / 2, -80 - h, w, h, { wash: '#4a7a3a', washA: 1, w: 2, col: '#1a2a0a' }); for (let k = 0; k < 6; k++) pencil([[cx - w / 2 - 4, -90 - k * h / 6], [cx - w / 2 + 2, -94 - k * h / 6]], { w: 1.4, col: '#e8e0a0', pass2: false }); } ell(0, -310, 12, 10, { wash: '#e85a7a', washA: 1, w: 1.4 }); pop(); }
  function crates(x, y) { for (let i = 0; i < 2; i++) { push(x + i * 30, y - i * 110, 1); rect(-110, -100, 220, 100, { wash: '#b0844a', washA: 1, w: 2.4, col: '#3a2410' }); txt('TEQUILA', 0, -46, 34, { font: 'Osw', col: '#3a1a08', a: 0.8 }); for (let k = 0; k < 6; k++) { pencil([[-90 + k * 36, -100], [-90 + k * 36, -150]], { w: 10, col: k % 2 ? '#3a6a3a' : '#7a4a1a', a: 0.9 }); } pop(); } }

  WORLD.tijuana = (t, u, cat) => {
    lay(30, () => sky(t)); lay(14, () => { hills(t); haze('#f6e2b0', 0.12); });
    lay(5, () => { facade(-200, 340, 520, '#d8b080', 'CANTINA', ['#2e6a4a', '#f6ecd6'], 1, t); facade(160, 300, 600, '#e8d0a8', 'LONG BAR', ['#1e1e22', '#e8b53a'], 2, t); facade(480, 380, 560, '#efe2c4', "CAESAR'S", ['#d9482b', '#fff8ec'], 3, t); facade(880, 320, 500, '#c8a07a', 'HOTEL', ['#2a4a8a', '#f6ecd6'], 4, t); poles(t); haze('#f6e2b0', 0.06); });
    lay(1.7, () => { const k = (u * 0.2) % 1; fordT(lerp(1600, -600, k), 1300, 1.05, t, 1); dust(lerp(1600, -600, k) + 180, 1290, t, 8, 1); human(80, 1330, 0.8, t, { body: '#8a6a4a', legs: '#5a4a3a', hair: '#1a1a1a', face: 'calm', armL: 'hips', armR: 'hips', seed: 50 }); hat20(80, 1330, 0.8, 'fedora', '#c8a870'); });
    lay(1.15, () => { fore(t); human(1020, 1420, 0.85, t, { body: '#e8e0d0', legs: '#3a3a4a', hair: '#1a1a1a', face: t > EV.tj_dry ? 'grin' : 'calm', armL: 'hold', armR: t > EV.tj_mex ? 'wave' : 'down', seed: 52, flip: -1 }); hat20(1020, 1420, 0.85, 'fedora', '#3a3028', -1);
      push(150, 1450, 1); ell(0, 0, 70, 16, { wash: '#000', washA: 0.15, line: false }); blob([[-60, 0], [-50, -40], [20, -46], [50, -30], [60, 0]], { wash: '#c8a070', washA: 1, w: 2, col: '#3a2410' }); ell(52, -40, 24, 20, { wash: '#c8a070', washA: 1, w: 2, col: '#3a2410' }); pencil([[60, -50], [76, -66]], { w: 6, col: '#a8804a' }); pencil([[44, -40], [50, -38]], { w: 2, col: '#2a1408', pass2: false }); pop(); });
    lay(1, () => { cat(); });
    lay(0.8, () => { signpost(t); cactusPot(1000, 1640, 1.0); });
    lay(0.6, () => { crates(-60, 1960); });
  };
  DIR.tijuana = {
    outfit: 'waiter', light: { side: 1, rim: '#fff0c0' }, grade: ['#f0b060', 0.12],
    act: () => [[S0.tijuana, 'proud'], [EV.tj_mex, 'grin'], [EV.tj_dry, 'sideeye'], [EV.tj_dry + 0.8, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1640, s: 1.3, look: t > EV.tj_dry ? [-0.8, -0.2] : [0.2, 0], hand: t < EV.tj_dry ? [100, -330 + Math.sin(t * 9) * 20] : [70, -200], handF: [-90, -170], point: t > EV.tj_dry ? 1 : undefined, flip: -1 }),
    cam: () => [[S0.tijuana, 600, 900, 0.32], [S0.tijuana + 1.2, 560, 1160, 0.16, 'x'], [EV.tj_dry - 0.2, 500, 1220, 0.2], [S1.tijuana, 540, 1200, 0.26]]
  };
  // ---------------------------------------------------------------- переход: укус-трещина (кадр пира колется на куски-гренки)
  TRANS_IN.tijuana = { a: 0.12, b: 0.5, runA: 0, fx(k, t, A, B) {
    drawBuf(B, 1.15 - 0.15 * k, 540, 960); const r = rng(2400), cx = 600, cy = 1000, n = 16;
    for (let i = 0; i < n; i++) { const a0 = i / n * 6.283, a1 = (i + 1) / n * 6.283, d = Math.pow(k, 1.7) * (500 + r() * 900), am = (a0 + a1) / 2, rot = (r() - 0.5) * 2 * k;
      const P = new Path2D(); P.moveTo(cx + Math.cos(am) * d, cy + Math.sin(am) * d); for (const a of [a0, a0 + 0.1, (a0 + a1) / 2, a1 - 0.08, a1]) { const R = 2400; P.lineTo(cx + Math.cos(a) * R + Math.cos(am) * d, cy + Math.sin(a) * R + Math.sin(am) * d); } P.closePath();
      if (k < 0.98) inPath(P, () => drawBuf(A, 1, cx, cy, 1, null, Math.cos(am) * d, Math.sin(am) * d + 600 * k * k, rot)); }
    scr(() => { for (let i = 0; i < 40; i++) { const rr = rng(2410 + i), a = rr() * 6.283, d = k * (300 + rr() * 900); poly([[cx + Math.cos(a) * d - 8, cy + Math.sin(a) * d - 6], [cx + Math.cos(a) * d + 9, cy + Math.sin(a) * d - 4], [cx + Math.cos(a) * d + 6, cy + Math.sin(a) * d + 8]], { wash: i % 2 ? '#d8a04a' : '#f4d08a', washA: 1 - k, w: 1.2, col: '#4a2a08', a: 1 - k }); }
      if (k < 0.3) whiteOut((0.3 - k) * 2, '255,236,190'); });
  } };
})();
