/* 004 — `names`: «На севере говорят "студень", на юге — "холодец". Блюдо одно, споров — много.» Кадр разделён по диагонали: слева северная изба в снегу, ёлки,
   северное сияние, дед в шубе с табличкой «СТУДЕНЬ»; справа южная хата-мазанка, подсолнухи, солнце, бабушка с табличкой «ХОЛОДЕЦ». Посередине — одна тарелка,
   Том в тулупе пожимает плечами; на «споров» оба тянут тарелку к себе. Переход В сцену: карта-салфетка складывается гармошкой. */
(() => {
  EV.nm_north = wtw('s4', '«студень»,');
  EV.nm_south = wtw('s4', '«холодец».');
  EV.nm_fight = wtw('s4', 'споров');
  KEYW.push('«студень»,', '«холодец».');

  function split(t) {
    vgrad(-600, 1600, ['#1a2a4a', '#3a5a7a', '#c8d8e8']); for (let i = 0; i < 5; i++) { const r = rng(4500 + i); pencil(spline([[-200, 200 + i * 40], [200, 160 + i * 50 + Math.sin(t + i) * 20], [500, 240 + i * 30]], false, 8), { w: 26, col: i % 2 ? '#5affb0' : '#8affd8', a: 0.25, pass2: false }); }
    for (let i = 0; i < 6; i++) spruce(-100 + i * 110, 1180 + (i % 2) * 20, 280, '#1a3a2a', 1); const iz = rect(80, 900, 300, 260, { wash: '#6a4a2a', washA: 1, w: 3, col: '#2a1408', key: 4501 }); for (let i = 0; i < 6; i++) pencil([[80, 910 + i * 42], [380, 910 + i * 42]], { w: 3, col: '#3a2010', pass2: false });
    poly([[50, 910], [230, 760], [410, 910]], { wash: '#f6f8fc', washA: 1, w: 3, col: '#5a6a7a' }); rect(190, 980, 80, 80, { wash: '#ffd27a', washA: 1, w: 3, col: '#2a1408' }); glow(230, 1020, 90, 'rgba(255,210,120,1)', 0.5); motes(60, [-200, 0, 560, 1400], '#ffffff', t, 4502, { sp: 60, vx: 10, sz: 4, a: 0.9 });
    ctx.save(); const S = new Path2D(); S.moveTo(560, -400); S.lineTo(1500, -400); S.lineTo(1500, 1500); S.lineTo(500, 1500); S.lineTo(600, -400); ctx.clip(S); vgrad(-600, 1600, ['#5ab0e8', '#a8d8f0', '#f6e6a0']); ell(940, 260, 90, 90, { wash: '#ffe060', washA: 1, line: false }); glow(940, 260, 260, 'rgba(255,230,120,1)', 0.6);
    hills(1150, 80, '#8ab04a', 2.2); const hata = rect(700, 900, 320, 260, { wash: '#f6f2e6', washA: 1, w: 3, col: '#5a4a3a', key: 4503 }); poly([[670, 910], [860, 760], [1050, 910]], { wash: '#d8b060', washA: 1, w: 3, col: '#6a4a14' }); for (let i = 0; i < 12; i++) pencil([[690 + i * 30, 900], [860, 770]], { w: 2, col: '#a88430', a: 0.5, pass2: false }); rect(800, 980, 80, 80, { wash: '#6ab0d8', washA: 1, w: 3, col: '#3a6a8a' });
    for (let i = 0; i < 5; i++) { const x = 640 + i * 90; pencil([[x, 1260], [x, 1100]], { w: 6, col: '#4a7a2a', pass2: false }); for (let q = 0; q < 10; q++) { const a = q / 10 * 6.283; ell(x + Math.cos(a) * 26, 1090 + Math.sin(a) * 26, 12, 6, { wash: '#f2c020', washA: 1, w: 1, col: '#8a6a08', rot: a }); } ell(x, 1090, 18, 18, { wash: '#4a2a10', washA: 1, w: 1.4 }); }
    ctx.restore(); pencil([[600, -400], [500, 1500]], { w: 10, col: '#2b2622', pass2: false });
  }
  function folks(t) { const fight = t > EV.nm_fight; human(200 + (fight ? 40 : 0), 1330, 1.1, t, { body: '#6a4a2a', hair: '#e8e8e8', face: fight ? 'angry' : 'smile', armL: 'hold', armR: fight ? 'point' : 'up', seed: 300, beard: 'long', hat: 'fur', hatCol: '#5a3a2a', look: 0.6 });
    human(900 - (fight ? 40 : 0), 1330, 1.05, t, { body: '#d9482b', hair: '#c8c8c8', face: fight ? 'angry' : 'smile', armL: 'hold', armR: fight ? 'point' : 'up', seed: 301, flip: -1, look: -0.6, hat: 'scarf', hatCol: '#e8b53a', long: 1 });
    if (t > EV.nm_north - 0.1) { push(160, 860, popK(t, EV.nm_north - 0.1, 0.3), -0.06); rect(-130, -50, 260, 100, { wash: '#f6f0e0', washA: 1, w: 3, col: '#2a2010' }); txt('СТУДЕНЬ', 0, 4, 46, { font: 'Osw', col: '#2a5aa8' }); pop(); }
    if (t > EV.nm_south - 0.1) { push(940, 860, popK(t, EV.nm_south - 0.1, 0.3), 0.06); rect(-140, -50, 280, 100, { wash: '#f6f0e0', washA: 1, w: 3, col: '#2a2010' }); txt('ХОЛОДЕЦ', 0, 4, 46, { font: 'Osw', col: '#d9482b' }); pop(); } }
  WORLD.names = (t, u, cat) => { lay(10, () => split(t)); lay(2.4, () => folks(t)); lay(1.3, () => { const tb = rect(-300, 1420, 1700, 600, { wash: '#7a5a3a', washA: 1, w: 3, col: '#1a0a04', key: 4510 }); const sh = t > EV.nm_fight ? Math.sin(t * 16) * 30 : 0; jellyPlate(540 + sh, 1460, 0.9, t, { wob: 0.6 }); }); lay(1, () => cat()); };
  OUTFIT.tulupA = OUTFIT.tulupA || Object.assign({}, OUTFIT.tulup, { apron: 1 });
  DIR.names = {
    outfit: 'tulupA', light: { side: 1, rim: '#f0f6ff' }, grade: ['#8ab0e8', 0.06],
    act: () => [[S0.names, 'talk'], [EV.nm_north, 'cold'], [EV.nm_south, 'grin'], [EV.nm_fight, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1800, s: 1.05, look: t < EV.nm_south ? [-0.8, -0.3] : [0.8, -0.3], hand: t > EV.nm_fight ? [120, -380] : [110, -240], handF: t > EV.nm_fight ? [-120, -380] : [-90, -230], frost: t < EV.nm_south }),
    cam: () => [[S0.names, 540, 1000, 0.06], [EV.nm_north, 300, 1000, 0.18], [EV.nm_south, 780, 1000, 0.18, 'x'], [EV.nm_fight, 540, 1100, 0.1], [S1.names, 540, 1120, 0.14]]
  };
  // ---------------------------------------------------------------- переход: салфетка складывается гармошкой
  TRANS_IN.names = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const n = 6, w = W / n, fold = Math.pow(k, 1.2);
    scr(() => { for (let i = 0; i < n; i++) { const sx = Math.max(0.01, 1 - fold), x0 = i * w * (1 - fold); ctx.save(); ctx.beginPath(); ctx.rect(x0, 0, w * sx + 1, H); ctx.clip(); ctx.translate(x0, 0); ctx.scale(sx, 1); ctx.drawImage(A, -i * w, 0); ctx.fillStyle = `rgba(0,0,0,${(i % 2 ? 0.35 : 0.1) * fold})`; ctx.fillRect(i * w, 0, w, H); ctx.restore(); } });
  } };
})();
