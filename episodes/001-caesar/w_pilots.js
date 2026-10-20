/* 001 — `pilots`: аэродром под Сан-Диего, 1920-е. Пальмы, деревянный ангар, ветроуказатель, биплан на поле и второй — над головой, с дымным следом.
   Лётчики на ящиках едят салат из миски. Брат Алекс (усы, лётный шлем, шарф-триколор) кладёт руку на сердце — «клялся»; «для лётчиков» — ценник «САЛАТ АВИАТОРОВ»;
   «добавил анчоусы» — открывает жестянку, анчоусы дугой летят в миску. Карта-салфетка: Тихуана ↔ Сан-Диего, самолётик по пунктиру. Переход В сцену: волна соуса. */
(() => {
  EV.pl_swear = wtw('s7', 'клялся:');
  EV.pl_pilots = wtw('s7', '«для');
  EV.pl_add = wtw('s7', 'добавил');
  EV.pl_anch = wtw('s7', 'анчоусы.');
  KEYW.push('Алекс', 'лётчиков».', 'анчоусы.');

  function sky(t) { vgrad(-600, 1300, ['#3a7ac8', '#8ac0e8', '#f2e8c8']); glow(220, 260, 360, 'rgba(255,245,210,1)', 0.6);
    const px = ((t * 120) % 1800) - 300, py = 380 + Math.sin(t) * 20; for (let i = 0; i < 18; i++) ell(px - 80 - i * 50, py + i * 4, 20 + i * 3, 14 + i * 2, { wash: '#ffffff', washA: 0.5 * (1 - i / 18), line: false }); biplane(px, py, 0.5, t, 0.05); }
  function biplane(x, y, s, t, rot) { push(x, y, s, rot); const f = blob([[-180, 0], [-150, -26], [120, -30], [170, -10], [170, 14], [120, 24], [-150, 20]], { wash: '#e8b53a', washA: 1, w: 2.6, col: '#2a1a08', key: 7100 }); shadeG(f.path, 0, 30, 0, -30, '#8a5a1a', 0.4);
    for (const wy of [-90, 40]) { const w = rect(-90, wy, 220, 26, { wash: '#d9482b', washA: 1, w: 2.4, col: '#2a1a08' }); shadeG(w.path, 0, wy + 26, 0, wy, '#6a1408', 0.4); } for (const sx of [-60, 90]) pencil([[sx, -64], [sx, 40]], { w: 4, col: '#2a1a08' }); for (const sx of [-60, 90]) pencil([[sx, -64], [sx + 30, 40]], { w: 1.4, col: '#2a1a08', a: 0.7, pass2: false });
    poly([[-180, 0], [-210, -60], [-170, -60], [-150, -10]], { wash: '#d9482b', washA: 1, w: 2, col: '#2a1a08' }); const pa = t * 40; push(176, 0, 1); for (const k of [0, 1]) { const a = pa + k * Math.PI; ell(0, Math.sin(a) * 80, 8, Math.abs(Math.cos(a)) * 6 + 2, { wash: '#4a2a10', washA: 0.6, line: false }); } ell(0, 0, 70 * 0.2, 80, { wash: '#ffffff', washA: 0.12, line: false }); pop();
    ell(40, -40, 22, 16, { wash: '#6a4426', washA: 1, w: 1.6 }); pop(); }
  function field(t) { const h = poly([[-400, 1000], [200, 940], [700, 980], [1500, 930], [1500, 1300], [-400, 1300]], { wash: '#a8a060', washA: 1, w: 2, col: '#4a4a1a', key: 7110 }); hatch(h.path, h.bb, { gap: 10, a: 0.15, col: '#5a5a2a', ang: -0.3, key: 7111 });
    for (const [x, h] of [[-80, 360], [1080, 420], [1180, 300]]) { pencil(spline([[x, 1000], [x + 10, 1000 - h * 0.5], [x - 6, 1000 - h]], false, 5), { w: 14, col: '#7a5a3a' }); for (let i = 0; i < 7; i++) { const a = -Math.PI / 2 + (i - 3) * 0.5 + Math.sin(t * 1.5 + i) * 0.05; pencil(spline([[x - 6, 1000 - h], [x - 6 + Math.cos(a) * 80, 1000 - h + Math.sin(a) * 40 - 10], [x - 6 + Math.cos(a) * 160, 1000 - h + Math.sin(a) * 40 + 40]], false, 5), { w: 12, col: '#3a6a2a' }); } } }
  function hangar(t) { const hg = shape(spline([[300, 1050], [300, 760], [460, 640], [640, 620], [820, 640], [980, 760], [980, 1050]], true, 6), { wash: '#b8a07a', washA: 1, w: 3, col: '#3a2a14', key: 7120 }); hatch(hg.path, hg.bb, { gap: 16, a: 0.2, col: '#5a4a2a', ang: 1.57, key: 7121 }); shadeG(hg.path, 980, 0, 300, 0, '#5a4a2a', 0.4);
    rect(420, 820, 440, 230, { wash: '#2a2018', washA: 1, w: 2.4, col: '#000' }); rect(430, 700, 420, 60, { wash: '#efe2c4', washA: 1, w: 2.2, col: '#3a2a14' }); txt('AIRFIELD · SAN DIEGO', 640, 732, 34, { font: 'Osw', col: '#2a3a6a' });
    pencil([[1060, 1060], [1060, 760]], { w: 6, col: '#6a6a6a' }); const ws = Math.sin(t * 3) * 0.15; push(1060, 770, 1, ws); poly([[0, 0], [120, 10], [120, 40], [0, 50]], { wash: '#e8862a', washA: 1, w: 2, col: '#3a1a04' }); for (const x of [40, 80]) pencil([[x, 4], [x, 46]], { w: 6, col: '#f6f2e8', pass2: false }); pop(); }
  function parked(t) { biplane(820, 1160, 1.15, t * 0.05, -0.08); for (const wx of [-60, 80]) { ell(820 + wx * 1.15, 1230, 40, 40, { wash: '#2a2a2a', washA: 1, w: 2.4 }); pencil([[820 + wx * 1.15, 1230], [820 + wx * 0.6, 1170]], { w: 6, col: '#2a2a2a' }); } }
  function pilots(t) { for (const [x, s, k] of [[120, 0.95, 1], [330, 0.9, 2]]) { rect(x - 60, 1310, 120, 70, { wash: '#b0844a', washA: 1, w: 2, col: '#3a2410' }); human(x, 1320, s, t, { body: '#6a4426', legs: '#8a7a58', hair: '#3a2a1a', face: t > EV.pl_anch ? 'grin' : 'smile', armL: 'hold', armR: k === 1 && t > EV.pl_pilots ? 'up' : 'hold', seed: 110 + k }); hat20(x, 1320, s, 'pilot'); } }
  function alex(t) { const x = 560, y = 1360, s = 1.1, swear = t > EV.pl_swear && t < EV.pl_add, add = t > EV.pl_add - 0.1;
    human(x, y, s, t, { body: '#5a3a22', legs: '#8a7a58', hair: '#141010', face: swear ? 'smile' : add ? 'grin' : 'calm', armL: swear ? 'hold' : 'hold', armR: add ? 'up' : swear ? 'hold' : 'down', look: 0.3, seed: 120 }); stache(x, y, s); hat20(x, y, s, 'pilot');
    const ny = y - 230 * s; for (const [c, dx] of [['#2e8a3a', -16], ['#f6f2e8', 0], ['#c8302a', 16]]) poly([[x + dx - 8, ny], [x + dx + 8, ny], [x + dx + 6 + (dx > 0 ? 40 : 0), ny + 70 + Math.sin(t * 4) * 6]], { wash: c, washA: 1, w: 1.4, col: '#2a1a0a' });
    if (swear) { const hx = x - 30 * s, hy = y - 200 * s; txt('♥', hx, hy, 40, { col: '#d9482b' }); }
    if (add) { const hx = x + 82 * s, hy = y - 320 * s; push(hx, hy, 1, 0.6); rect(-40, -24, 80, 48, { wash: '#c8ccd0', washA: 1, w: 2, col: '#3a3e44' }); txt('ACCIUGHE', 0, 0, 14, { font: 'Osw', col: '#7a1a0a' }); pop(); }
    woodBowl(380, 1440, 150, 90, { part: 'back' }); for (let i = 0; i < 5; i++) leaf(320 + i * 30, 1450, 0.6, -0.5 + i * 0.25, { key: 7130 + i }); woodBowl(380, 1440, 150, 90, { part: 'front' });
    if (t > EV.pl_anch - 0.15) for (let i = 0; i < 5; i++) { const k = clamp((t - EV.pl_anch + 0.15 - i * 0.08) / 0.6); if (k <= 0) continue; const ax = lerp(x + 100, 380, k), ay = lerp(y - 350, 1430, k) - Math.sin(k * Math.PI) * 220; anchovy(ax, ay, 0.5, k * 6 + i); }
    if (t > EV.pl_pilots) bubbleTag('САЛАТ АВИАТОРОВ', x, y - 470 * s, t, EV.pl_pilots + 0.1, '#2a3a6a', 46, 0.04); }
  function napkin(t) { if (t < S0.pilots + 0.4) return; const k = popK(t, S0.pilots + 0.4, 0.35); push(860, 520, k, 0.06); const n = rect(-170, -150, 340, 300, { wash: '#f8f4ea', washA: 1, w: 2.2, col: '#5a4a3a' }); for (let i = 0; i < 10; i++) pencil([[-170 + i * 34, -150], [-170 + i * 34, 150]], { w: 1, col: '#d9482b', a: 0.25, pass2: false });
    pencil(spline([[-170, -60], [-60, -40], [-20, 20], [40, 60], [80, 150]], false, 6), { w: 3, col: '#2a5a8a', pass2: false }); pencil([[-160, 10], [160, 30]], { w: 2.4, col: '#2b2622', a: 0.8, pass2: false }); txt('США', 100, -30, 26, { font: 'Osw', col: '#2b2622' }); txt('МЕКСИКА', 90, 80, 26, { font: 'Osw', col: '#2b2622' });
    ell(-40, -40, 10, 10, { wash: '#2a3a6a', washA: 1, w: 1.6 }); txt('Сан-Диего', -70, -80, 28, { font: 'Hand', col: '#2a3a6a' }); ell(-10, 60, 10, 10, { wash: '#d9482b', washA: 1, w: 1.6 }); txt('Тихуана', -60, 104, 28, { font: 'Hand', col: '#d9482b' });
    const pk = (Math.sin(t * 1.6) + 1) / 2; for (let i = 0; i < 6; i++) { const q = i / 6; ell(lerp(-40, -10, q), lerp(-40, 60, q), 2.6, 2.6, { wash: '#2b2622', washA: 1, line: false }); } push(lerp(-40, -10, pk), lerp(-40, 60, pk), 0.14, 1.3); biplane(0, 0, 1, t, 0); pop();
    ctx.save(); ctx.globalAlpha = 0.18; ctx.fillStyle = '#b8733a'; ctx.beginPath(); ctx.ellipse(110, 110, 40, 26, 0.3, 0, 6.3); ctx.fill(); ctx.restore(); pop(); }
  WORLD.pilots = (t, u, cat) => {
    lay(30, () => sky(t)); lay(8, () => { field(t); hangar(t); haze('#f2e8c8', 0.08); });
    lay(3, () => { parked(t); });
    lay(1.6, () => { const g = poly([[-500, 1300], [1700, 1300], [1700, 2400], [-500, 2400]], { wash: '#b8b070', washA: 1, w: 2, col: '#4a4a1a', key: 7140 }); hatch(g.path, g.bb, { gap: 12, a: 0.12, col: '#5a5a2a', ang: 0.2, key: 7141 }); pilots(t); alex(t); });
    lay(1, () => { cat(); });
    lay(0.75, () => napkin(t));
  };
  DIR.pilots = {
    outfit: 'aviatorA', light: { side: -1, rim: '#fff4d0' }, grade: ['#f0d080', 0.08],
    act: () => [[S0.pilots, 'talk'], [EV.pl_swear, 'suspicious'], [EV.pl_pilots, 'sideeye'], [EV.pl_add, 'shock'], [EV.pl_anch + 0.3, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 880, y: 1720, s: 1.15, flip: -1, look: [-0.8, -0.2], hand: [80, -170], handF: t > EV.pl_add ? [-150, -280] : [-90, -150], point: t > EV.pl_add ? 1 : undefined }),
    cam: () => [[S0.pilots, 540, 700, 0.1], [S0.pilots + 1.0, 600, 1060, 0.12, 'x'], [EV.pl_pilots, 560, 1040, 0.18], [EV.pl_add, 520, 1120, 0.26], [S1.pilots, 520, 1140, 0.3]]
  };
  // ---------------------------------------------------------------- переход: волна вустерского соуса
  TRANS_IN.pilots = { a: 0.3, b: 0.35, runA: 1, fx(k, t, A, B) {
    const up = k < 0.5 ? sm(k / 0.5) : 1 - sm((k - 0.5) / 0.5); drawBuf(k < 0.5 ? A : B, 1, 540, 960);
    scr(() => { const y0 = lerp(2000, -200, up); const P = [[-100, 2100]]; for (let x = -100; x <= 1180; x += 40) P.push([x, y0 + Math.sin(x * 0.012 + t * 8) * 60 + Math.sin(x * 0.03) * 20]); P.push([1180, 2100]);
      const w = shape(P, { wash: '#5a2a10', washA: 0.97, w: 4, col: '#2a0e04' }); shadeG(w.path, 0, y0, 0, y0 + 600, '#2a0e04', 0.5); pencil(P.slice(1, -1).map(([x, y]) => [x, y + 16]), { w: 8, col: '#c8783a', a: 0.6, pass2: false }); for (let i = 0; i < 6; i++) anchovy(100 + i * 180, y0 + 200 + (i % 2) * 90, 0.9, t * 2 + i); });
  } };
})();
