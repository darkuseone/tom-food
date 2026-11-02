/* 013 — `hangover`: «По Похлёбкину, её ели после застолья — кислую, солёную — и звали „похмелкой“.» Утро после купеческого пира в горнице: длинный стол со
   смятой скатертью, опрокинутые кубки и пустые штофы, огарки свечей, обглоданные кости, гости спят лицом в стол (Zzz), петух в окне, утреннее солнце.
   Том-купец с мокрым полотенцем на голове; хозяйка несёт дымящуюся сковороду. На столе — книга «В. Похлёбкин» с закладкой.
   По словам: «Похлёбкину» — книга раскрывается; «застолья» — гость всхрапывает, кубок катится; «кислую» — Том морщится; «солёную» — искры соли;
   «похмелкой» — Том оживает, полотенце слетает, вывеска «ПОХМЕЛКА» выпрыгивает. Переход В сцену: пар запотевает кадр, лапа протирает окошко. */
(() => {
  EV.hg_book = wtw('s2', 'Похлёбкину,');
  EV.hg_feast = wtw('s2', 'застолья');
  EV.hg_sour = wtw('s2', 'кислую,');
  EV.hg_salt = wtw('s2', 'солёную');
  EV.hg_name = wtw('s2', '«похмелкой».');
  SHAKES.push([EV.hg_name + 0.2, 0.18, 8]);
  KEYW.push('застолья', '«похмелкой».');
  const awake = t => t > EV.hg_name + 0.1;

  function room(t) {                                                    // горница: изразцовая печь, окна с солнцем и петухом, полки с посудой, ковёр на стене
    vgrad(-600, 1500, ['#4a2a14', '#8a5a2a', '#b8884a']);
    for (let y = -500; y < 1300; y += 74) { const lg = rect(-400, y, 2000, 70, { wash: '#9a6a34', washA: 1, w: 2, col: '#2a1408' }); shadeG(lg.path, 0, y + 70, 0, y, '#4a2a10', 0.35); }
    for (const x of [300, 780]) { push(x, 320, 1); const w = rect(-130, -180, 260, 300, { wash: '#fff0c8', washA: 1, w: 8, col: '#3a1a08', key: 13300 + x }); ctx.save(); ctx.clip(w.path); vgrad(-180, 120, ['#f8c878', '#fff4d8']); glow(-40, -60, 140, 'rgba(255,240,180,1)', 0.7); if (x === 780) { push(20, 120, 0.8); blob([[-40, 0], [-30, -60], [10, -80], [40, -50], [30, 0]], { wash: '#c8541a', washA: 1, w: 2 }); blob([[10, -80], [20, -110], [34, -84]], { wash: '#d9282a', washA: 1, w: 1 }); poly([[40, -60], [60, -54], [40, -48]], { wash: '#e8b030', washA: 1, w: 1 }); if (Math.sin(t * 3) > 0.5) txt('ку-ка-ре-ку!', 0, -130, 26, { font: 'Hand', col: '#7a1a10' }); pop(); } ctx.restore();
      pencil([[0, -180], [0, 120]], { w: 8, col: '#3a1a08' }); pencil([[-130, -30], [130, -30]], { w: 8, col: '#3a1a08' }); pop(); }
    rays(560, 280, 1.8, 0.5, 1600, 'rgba(255,240,190,1)', 0.18, 7, t);
    push(-160, 560, 1); const cp = rect(-200, -300, 400, 500, { wash: '#8a1a1a', washA: 1, w: 3, col: '#2a0404' }); for (let i = 0; i < 6; i++) for (let j = 0; j < 4; j++) { const cx = -150 + j * 100, cy = -250 + i * 80; poly([[cx, cy - 30], [cx + 30, cy], [cx, cy + 30], [cx - 30, cy]], { wash: ['#e8b030', '#2a5ab8', '#f4ecd8'][(i + j) % 3], washA: 0.9, w: 1, col: '#3a0a04' }); } pop();
    push(1180, 900, 1); const pc = rect(-150, -560, 300, 560, { wash: '#f4f0e6', washA: 1, w: 3, col: '#5a4a3a' }); for (let y = -540; y < 0; y += 60) for (let x = -140; x < 140; x += 60) { rect(x, y, 58, 58, { wash: '#f8f6f0', washA: 1, w: 1, col: '#8a8a7a', a: 0.6 }); txt('✿', x + 29, y + 38, 26, { col: '#2a5ab8', a: 0.8 }); } pop();
  }
  function feast(t) {                                                   // стол после пира: смятая скатерть, кубки, штофы, кости, огарки, спящие гости, книга Похлёбкина
    const tb = rect(-400, 1360, 1900, 70, { wash: '#f4ecdc', washA: 1, w: 2.4, col: '#5a4a3a', key: 13310 }); rect(-400, 1430, 1900, 300, { wash: '#efe2c8', washA: 1, w: 2, col: '#5a4a3a' }); for (let i = 0; i < 16; i++) pencil(spline([[-380 + i * 120, 1440], [-370 + i * 120 + Math.sin(i) * 20, 1560], [-380 + i * 120, 1720]], false, 5), { w: 2, col: '#b8a888', a: 0.6, pass2: false });
    for (const [x, sd, sn] of [[60, 1, 0], [1020, -1, 1]]) { human(x, 1440, 1.1, t, { body: sd > 0 ? '#5a2a4a' : '#2a4a6a', legs: '#2a2a2a', hair: '#3a2a1a', beard: 'short', face: awake(t) && sn ? 'shock' : 'calm', armL: 'hold', armR: 'hold', seed: 13311 + sn, flip: sd });
      if (!(awake(t) && sn)) { for (let i = 0; i < 3; i++) { const q = (t * 0.6 + i / 3) % 1; txt('z', x + sd * (30 + q * 80), 1100 - q * 160, 30 + q * 20, { font: 'Hand', col: '#3a3a6a', a: 1 - q }); } } }
    for (const [x, rot] of [[200, 1.4], [340, 0], [880, -1.3]]) { push(x, 1380, 1, rot); pencil([[0, 0], [0, -40]], { w: 5, col: '#c8a050' }); poly([[-24, -90], [24, -90], [12, -40], [-12, -40]], { wash: '#d6a842', washA: 1, w: 2, col: '#5a3a08' }); pop(); }
    for (const x of [480, 760]) { push(x, 1380, 1); const b = shape(spline([[-26, 0], [-30, -80], [-12, -130], [-12, -170], [12, -170], [12, -130], [30, -80], [26, 0]], true, 6), { wash: '#6a8a6a', washA: 0.5, w: 2, col: '#2a3a2a' }); pop(); }
    for (const x of [580, 940]) { push(x, 1390, 1); candle(0, 0, 0.6, t, x, 0); pop(); } for (let i = 0; i < 3; i++) { push(140 + i * 30, 1390, 1, i * 0.6); blob([[-30, 0], [-36, -10], [36, -10], [30, 0]], { wash: '#f4ecd8', washA: 1, w: 1.6, col: '#8a7a5a' }); ell(-34, -6, 8, 8, { wash: '#f4ecd8', washA: 1, w: 1.2 }); ell(34, -6, 8, 8, { wash: '#f4ecd8', washA: 1, w: 1.2 }); pop(); }
    const op = sm(clamp((t - EV.hg_book + 0.2) / 0.5)); push(360, 1410, 1); poly([[-130, 0], [0, 8], [0, lerp(8, -110, op)], [-120, lerp(0, -100, op)]], { wash: '#efe2c0', washA: 1, w: 2, col: '#6a5232' }); poly([[0, 8], [130, 0], [120, lerp(0, -100, op)], [0, lerp(8, -110, op)]], { wash: '#f2e6c8', washA: 1, w: 2, col: '#6a5232' });
      if (op > 0.6) { txt('В. Похлёбкин', -64, -78, 18, { font: 'Hand', col: '#3a1a08' }); txt('солянка —', 64, -78, 18, { font: 'Hand', col: '#3a1a08' }); txt('«похмелка»', 64, -52, 20, { font: 'Hand', col: '#a8221a' }); } else { rect(-130, -20, 260, 28, { wash: '#7a1a10', washA: 1, w: 2 }); } pop();
  }
  function hostess(t) { const k = sm(clamp((t - EV.hg_feast) / 0.8)); const x = lerp(-200, 140, k); human(x, 1330, 1.15, t, { body: '#2a5a3a', legs: '#2a2a2a', hair: '#8a4a2a', face: 'grin', armL: 'hold', armR: 'hold', look: 0.6, seed: 13320, long: 1 }); kerchief20(x, 1330, 1.15, '#d9282a'); selyankaPan(x + 90, 1330 - 260, 0.45, t, { key: 13321 }); }
  function front(t) {                                                   // передний план: опрокинутый штоф и лужица, кот спит на сундуке, крошки, солевые искры
    push(-60, 1900, 1.5); rect(-160, -150, 320, 150, { wash: '#7a3a14', washA: 1, w: 2.4, col: '#1a0a04' }); for (const y of [-120, -40]) pencil([[-160, y], [160, y]], { w: 6, col: '#c8a050', pass2: false }); blob([[-80, -150], [-70, -200], [-20, -220], [40, -210], [80, -170], [70, -150]], { wash: '#d8803a', washA: 1, w: 2, col: '#3a1a08' }); txt('z', 40, -240, 26, { font: 'Hand', col: '#3a3a6a' }); pop();
    if (t > EV.hg_salt && t < EV.hg_salt + 1.2) { const r = rng(13330); for (let i = 0; i < 26; i++) { const a = r() * 6.283, d = 60 + (t - EV.hg_salt) * 400 * r(); ell(700 + Math.cos(a) * d, 1150 + Math.sin(a) * d, 4, 4, { wash: '#ffffff', washA: 0.9, line: false }); glow(700 + Math.cos(a) * d, 1150 + Math.sin(a) * d, 10, 'rgba(255,255,255,1)', 0.4); } }
    if (t > EV.hg_name) bubbleTag('ПОХМЕЛКА', 700, 1260, t, EV.hg_name + 0.1, '#d8642a', 60, -0.05);
    motes(30, [100, 300, 1000, 1600], '#fff4d0', t, 13331, { sp: 6, sz: 4, a: 0.5, wob: 2 });
  }
  WORLD.hangover = (t, u, cat) => {
    lay(12, () => { room(t); haze('#ffe8c0', 0.08); });
    lay(2.6, () => { hostess(t); });
    lay(1.3, () => { feast(t); });
    lay(1, () => { cat(); });
    lay(0.6, () => { front(t); });
  };
  DIR.hangover = {
    outfit: 'kupecA', light: { side: -1, rim: '#ffe0a0' }, grade: ['#ffc070', 0.08],
    act: () => [[S0.hangover, 'cold'], [EV.hg_feast, 'annoyed'], [EV.hg_sour, 'annoyed'], [EV.hg_salt, 'shock'], [EV.hg_name + 0.1, 'laugh']],
    pose: (t, u, b) => { const aw = awake(t); return Object.assign(b, { x: 720, y: 1740, s: 1.12, flip: -1, rot: aw ? 0 : 0.06, squint: t > EV.hg_sour && t < EV.hg_salt, look: aw ? [0, -0.3] : [-0.4, 0.3], noHat: !aw,
      hand: aw ? [120, -420] : [40, -380], handF: aw ? [-120, -420] : [-80, -200], prop: t > EV.hg_sour - 0.3 && !aw ? 'spoonSP' : undefined, tailUp: aw }); },
    afterCat: (t, u, P) => { if (t > EV.hg_name + 0.3) return; push(P.x - 10 * P.s, P.y - 470 * P.s, P.s); const tw = blob([[-90, 10], [-80, -30], [0, -50], [80, -30], [90, 10], [0, 20]], { wash: '#f4f8fc', washA: 1, w: 2, col: '#7a8a9a' }); for (let i = 0; i < 3; i++) pencil([[-70 + i * 50, -20], [-60 + i * 50, 10]], { w: 2, col: '#9ab0c8', pass2: false }); pop(); },
    cam: () => [[S0.hangover, 560, 960, 0.1], [EV.hg_book, 420, 1260, 0.24, 'x'], [EV.hg_feast, 560, 1220, 0.16], [EV.hg_sour, 660, 1200, 0.28], [EV.hg_name, 600, 1180, 0.22], [S1.hangover, 600, 1180, 0.26]]
  };
  // ---------------------------------------------------------------- переход: пар запотевает кадр, лапа протирает окошко
  TRANS_IN.hangover = { a: 0.3, b: 0.5, runA: 0.3, fx(k, t, A, B) {
    const fog = clamp(k / 0.45), wipe = clamp((k - 0.4) / 0.6); drawBuf(wipe > 0 ? B : A, 1, 540, 960);
    scr(() => { ctx.save(); ctx.fillStyle = '#f4f6f8'; ctx.globalAlpha = 0.92 * fog; ctx.fillRect(0, 0, W, H); ctx.restore(); });
    if (wipe > 0) { const P = new Path2D(); for (let i = 0; i <= 20; i++) { const q = i / 20 * wipe, x = 100 + q * 880, y = 960 + Math.sin(q * 12) * 300; P.moveTo(x + 420, y); P.arc(x, y, 420, 0, 6.283); } inPath(P, () => drawBuf(B, 1, 540, 960)); scr(() => { const q = wipe, x = 100 + q * 880, y = 960 + Math.sin(q * 12) * 300; ell(x, y, 140, 170, { wash: '#8a8a8a', washA: 0.9 * (1 - wipe * 0.8), w: 3, col: '#2a2a2a' }); }); }
  } };
})();
