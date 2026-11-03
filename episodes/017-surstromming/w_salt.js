/* 017 — `salt`: «Легенда: рыбакам не хватило соли — и рыба забродила. Но это лишь версия.» Палуба рыбацкого парусника на Балтике на закате:
   мачта, парус в заплатах, канаты, фонарь, бочки с уловом, сети, чайки, волны и далёкий маяк; шкипер трясёт пустой мешок SALT — сыплется одна крупинка.
   Том-матрос с фартуком. По словам: «Легенда» — палуба тонирована сепией, как старинная гравюра, рамка-картуш; «не хватило соли» — мешок вытряхивают,
   падает одна крупинка, Том ловит её; «забродила» — бочка пузырится, крышку подбрасывает, зелёный пар; «лишь версия» — на кадр падает штамп ВЕРСИЯ?
   Переход В сцену: старинная карта-гравюра сворачивается в трубку и открывает новую сцену. */
(() => {
  EV.st_leg = wtw('s2', 'Легенда:');
  EV.st_salt = wtw('s2', 'соли');
  EV.st_ferm = wtw('s2', 'забродила.');
  EV.st_ver = wtw('s2', 'версия.');
  KEYW.push('Легенда:', 'версия.');
  const roll = t => Math.sin(t * 1.1) * 0.035;

  function sea(t) {                                                     // закатное небо, море, маяк, чайки
    vgrad(-700, 900, ['#4a3a6a', '#d8785a', '#f8c070']); glow(800, 700, 600, 'rgba(255,190,110,1)', 0.6); ell(800, 720, 110, 110, { wash: '#ffe0a0', washA: 1, line: false });
    const s = rect(-400, 740, 2000, 700, { wash: '#3a4a6a', washA: 1, line: false }); for (let i = 0; i < 10; i++) pencil(Array.from({ length: 30 }, (_, j) => [-400 + j * 70, 770 + i * 45 + Math.sin(t * 1.4 + j * 0.5 + i) * 8]), { w: 3, col: i % 2 ? '#f8c070' : '#8aa0c0', a: 0.4, pass2: false });
    push(120, 740, 0.8); rect(-20, -220, 40, 220, { wash: '#f4f0e6', washA: 1, w: 1.6 }); for (let i = 0; i < 3; i++) rect(-20, -200 + i * 70, 40, 24, { wash: '#c8221a', washA: 1, line: false }); rect(-30, -260, 60, 40, { wash: '#2a2a2a', washA: 1, w: 1.4 }); glow(0, -240, 140, 'rgba(255,240,170,1)', 0.6 + Math.sin(t * 3) * 0.2); pop();
    for (let i = 0; i < 4; i++) { const x = ((i * 300 + t * 80) % 1600) - 200, y = 200 + i * 50 + Math.sin(t * 3 + i) * 14; pencil(spline([[x - 30, y], [x - 12, y - 14], [x, y], [x + 12, y - 14], [x + 30, y]], false, 5), { w: 4, col: '#2a2a3a', pass2: false }); }
  }
  function deck(t) {                                                    // мачта, парус в заплатах, канаты, фонарь, сети, шкипер с пустым мешком
    pencil([[540, -600], [540, 1300]], { w: 30, col: '#5a3a1a' }); const sl = shape(spline([[560, -500], [940 + Math.sin(t * 2) * 20, -300], [980, 200], [560, 300]], true, 8), { wash: '#e8d8b8', washA: 1, w: 2.4, col: '#6a5a3a', key: 17300 }); shadeG(sl.path, 900, 0, 560, 0, '#b8a888', 0.4); for (const [x, y] of [[700, -200], [800, 60]]) rect(x, y, 60, 50, { wash: '#c8b088', washA: 1, w: 1.4, col: '#6a5a3a' });
    for (const [a, b] of [[[540, -560], [-200, 1100]], [[540, -560], [1300, 1100]], [[540, -300], [-100, 1100]]]) pencil([a, b], { w: 3, col: '#3a2a1a', pass2: false });
    push(380, 160, 1, Math.sin(t * 1.4) * 0.2); pencil([[0, -60], [0, 0]], { w: 3, col: '#2a2a2a', pass2: false }); rect(-22, 0, 44, 60, { wash: '#ffd890', washA: 0.9, w: 2.4, col: '#2a2a2a' }); glow(0, 30, 130, 'rgba(255,200,110,1)', 0.5); pop();
    const r = rect(-400, 1120, 2000, 340, { wash: '#7a5434', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 14; i++) pencil([[-400, 1140 + i * 24], [1600, 1140 + i * 24]], { w: 2, col: '#4a3018', a: 0.5, pass2: false }); pencil([[-400, 1120], [1600, 1120]], { w: 14, col: '#4a2a10', pass2: false });
    human(150, 1300, 1.05, t, { body: '#4a5a7a', legs: '#3a3a3a', hair: '#d8c8a0', beard: 'short', face: t > EV.st_salt ? 'shock' : 'annoyed', armL: 'up', armR: 'up', look: 0.4, seed: 17310 }); hat20(150, 1300, 1.05, 'fedora', '#3a3028');
    push(150 + 10, 1300 - 420, 1, t > EV.st_salt - 0.2 ? Math.PI * 0.9 : 0); const sk = blob([[-50, 0], [-60, -90], [-20, -110], [30, -110], [60, -90], [50, 0]], { wash: '#e8dcc0', washA: 1, w: 2, col: '#6a5a3a' }); txt('SALT', 0, -46, 24, { font: 'Osw', col: '#5a3a1a' }); pop();
    if (t > EV.st_salt) { const q = clamp((t - EV.st_salt) / 0.9); ell(lerp(160, 520, q), lerp(820, 1260, q * q), 5, 5, { wash: '#ffffff', washA: 1, w: 1, col: '#8a8a8a' }); if (q < 1) glow(lerp(160, 520, q), lerp(820, 1260, q * q), 30, 'rgba(255,255,255,1)', 0.6); }
    human(960, 1300, 1.0, t, { body: '#8a5a3a', legs: '#3a3a3a', hair: '#3a2a1a', face: t > EV.st_ferm ? 'shock' : 'calm', armL: 'hold', armR: t > EV.st_ferm ? 'up' : 'hold', look: -0.5, seed: 17311, flip: -1 });
  }
  function cargo(t) {                                                   // бочки с уловом (одна бродит), сети, штамп ВЕРСИЯ?, картуш «легенды»
    const fr = t > EV.st_ferm ? clamp((t - EV.st_ferm) / 0.4) : 0; barrel(220, 1560, 0.7, t, { key: 17320 }); push(800, 1560, 1 + fr * 0.06 * Math.sin(t * 30)); barrel(0, 0, 0.8, t, { key: 17325, bubbles: fr > 0 }); pop(); if (fr > 0) { stink(800, 1340, 1.3, t, { n: 4 }); push(800 + fr * 40, 1360 - fr * 140, 1, fr * 3); ell(0, 0, 80, 14, { wash: '#8a5a2a', washA: 1, w: 2, col: '#1a0a04' }); pop(); }
    push(500, 1580, 1); const n = shape([[-140, 0], [-120, -60], [120, -70], [150, 0]], { wash: '#a89070', washA: 0.4, w: 1.4, col: '#6a5a3a' }); hatch(n.path, n.bb, { gap: 12, a: 0.7, col: '#5a4a2a', ang: 0.8 }); hatch(n.path, n.bb, { gap: 12, a: 0.7, col: '#5a4a2a', ang: -0.8 }); for (let i = 0; i < 4; i++) ell(-100 + i * 70, -40, 14, 14, { wash: '#e8b030', washA: 1, w: 1 }); pop();
    if (t < EV.st_salt) { const a = t > EV.st_leg ? 1 - clamp((t - EV.st_salt + 0.4) / 0.4) : 0; if (a > 0) scr(() => { ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = 'rgba(160,120,60,0.25)'; ctx.fillRect(0, 0, W, H); ctx.strokeStyle = '#6a4a1a'; ctx.lineWidth = 30; ctx.strokeRect(30, 30, W - 60, H - 60); ctx.restore(); }); }
    if (t > EV.st_leg) bubbleTag('ЛЕГЕНДА', 560, 820, t, EV.st_leg, '#6a4a1a', 46, -0.04);
    if (t > EV.st_ver - 0.1) { push(560, 1060, popK(t, EV.st_ver - 0.1, 0.35), -0.12); rect(-200, -60, 400, 120, { wash: '#c8221a', washA: 0.12, w: 8, col: '#c8221a' }); txt('ВЕРСИЯ?', 0, 26, 76, { font: 'Osw', col: '#c8221a' }); pop(); }
  }
  function front(t) { push(-40, 1960, 1.6); for (let i = 0; i < 5; i++) ell(-60 + i * 30, -20 - (i % 2) * 10, 40, 14, { line: true, w: 8, col: '#c8b088' }); pop(); push(1180, 1990, 1.6); barrel(0, 0, 0.6, t, { key: 17330 }); pop(); motes(20, [0, 300, 1100, 1700], '#ffe0b0', t, 17335, { sp: 8, sz: 4, a: 0.45, wob: 2 }); }
  WORLD.salt = (t, u, cat) => {
    ctx.save(); ctx.translate(540, 960); ctx.rotate(roll(t)); ctx.translate(-540, -960);
    lay(14, () => { sea(t); haze('#f8b070', 0.08); });
    lay(2.4, () => { deck(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { cargo(t); });
    lay(0.6, () => { front(t); });
    ctx.restore();
  };
  DIR.salt = {
    outfit: 'sailorA', light: { side: 1, rim: '#ffc890' }, grade: ['#ffa870', 0.08],
    act: () => [[S0.salt, 'talk'], [EV.st_leg, 'smug'], [EV.st_salt, 'shock'], [EV.st_ferm, 'scared'], [EV.st_ver, 'sideeye']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1580, s: 1.16, flip: t > EV.st_ferm ? 1 : -1, look: t > EV.st_ver ? [0, 0] : t > EV.st_ferm ? [0.8, 0.3] : t > EV.st_salt ? [-0.6, -0.6] : [-0.4, 0.3], hand: t > EV.st_salt && t < EV.st_ferm ? [-40, -320] : [200, -280], handF: [-90, -220], sweat: t > EV.st_ferm, tailUp: t > EV.st_ferm && t < EV.st_ver }),
    cam: () => [[S0.salt, 560, 900, 0.12], [EV.st_leg, 540, 1000, 0.22, 'x'], [EV.st_salt, 300, 1000, 0.22], [EV.st_ferm, 720, 1250, 0.22], [EV.st_ver, 560, 1150, 0.22], [S1.salt, 560, 1160, 0.22]]
  };
  // ---------------------------------------------------------------- переход: старинная карта сворачивается в трубку
  TRANS_IN.salt = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const e = sm(k), Y = H * (1 - e); ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, Y); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
    scr(() => { const r = 30 + e * 40; ctx.save(); const g = ctx.createLinearGradient(0, Y - r, 0, Y + r); g.addColorStop(0, '#c8a868'); g.addColorStop(0.5, '#f4e2b8'); g.addColorStop(1, '#8a6a3a'); ctx.fillStyle = g; ctx.fillRect(0, Y - r, W, r * 2); ctx.strokeStyle = '#5a3a1a'; ctx.lineWidth = 4; ctx.strokeRect(-4, Y - r, W + 8, r * 2); ctx.restore(); });
  } };
})();
