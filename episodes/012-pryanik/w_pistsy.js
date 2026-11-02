/* 012 — `pistsy`: «Тула, 1685 год: в писцовой книге — лавки с пряниками и орехами.» Торг у красных стен Тульского кремля XVII в. осенью: башни с шатрами,
   золотые берёзы, деревянные лавки под навесами, бочки, мешки лесных орехов, пряники горками, гуси, торговцы в кафтанах, бабы в платках. Подьячий в длинном кафтане
   и меховой шапке пишет в огромную книгу пером. Том-купец (синяя поддёвка + картуз + фартук) за своей лавкой с пряниками.
   По словам: «писцовой книге» — книга раскрывается, перо выводит «пряники»; «лавки» — над лавками выпрыгивают вывески; «орехами» — из мешка сыплются орехи.
   Переход В сцену: глазурь пряника трескается паутинкой, осколки прошлого кадра осыпаются. */
(() => {
  EV.ps_book = wtw('s1', 'писцовой');
  EV.ps_shops = wtw('s1', 'лавки');
  EV.ps_nuts = wtw('s1', 'орехами.');
  SHAKES.push([EV.ps_nuts + 0.1, 0.15, 6]);
  KEYW.push('писцовой', 'орехами.');

  function kremlin(t) {                                                 // небо, облака, стена кремля с зубцами и шатровыми башнями, купола, берёзы
    vgrad(-600, 1000, ['#6a9ad0', '#a8c8e4', '#e8e0c8']); for (let i = 0; i < 5; i++) { const x = ((i * 320 + t * 10) % 1700) - 300, y = 100 + (i % 3) * 90; for (let k = 0; k < 4; k++) ell(x + k * 50, y - (k % 2) * 22, 60, 32, { wash: '#ffffff', washA: 0.85, line: false }); }
    const w = rect(-400, 560, 2000, 360, { wash: '#a8442e', washA: 1, w: 2.4, col: '#3a0e06', key: 12300 }); shadeG(w.path, 0, 920, 0, 560, '#6a2214', 0.4); for (let y = 580; y < 920; y += 30) for (let x = -400; x < 1600; x += 56) rect(x + ((y / 30) % 2) * 28, y, 54, 28, { wash: '#b8543a', washA: 0.6, w: 1, col: '#4a1408', a: 0.45 });
    for (let i = 0; i < 34; i++) { const x = -400 + i * 60; blob([[x, 560], [x + 4, 520], [x + 16, 506], [x + 28, 520], [x + 32, 560]], { wash: '#a8442e', washA: 1, w: 1.4, col: '#3a0e06' }); }
    for (const [x, h] of [[100, 340], [760, 400]]) { push(x, 560, 1); rect(-90, -h, 180, h + 360, { wash: '#a8442e', washA: 1, w: 2.4, col: '#3a0e06' }); poly([[-110, -h], [0, -h - 260], [110, -h]], { wash: '#3a6a4a', washA: 1, w: 2.4, col: '#0a2a1a' }); for (let k = 0; k < 6; k++) pencil([[-100 + k * 20, -h], [0, -h - 250]], { w: 1.4, col: '#1a4a2a', a: 0.5, pass2: false }); rect(-24, -h + 60, 48, 70, { wash: '#2a1a14', washA: 1, w: 1.6 }); pencil([[0, -h - 260], [0, -h - 300]], { w: 3, col: '#c8a050', pass2: false }); pop(); }
    push(430, 560, 1); rect(-60, -180, 120, 180, { wash: '#f4f0e6', washA: 1, w: 2, col: '#5a5a4a' }); blob([[-70, -180], [-60, -250], [0, -300], [60, -250], [70, -180]], { wash: '#d6a842', washA: 1, w: 2, col: '#5a3a08' }); glow(-20, -250, 30, 'rgba(255,240,180,1)', 0.6); pencil([[0, -300], [0, -350]], { w: 3, col: '#c8a050', pass2: false }); pencil([[-14, -334], [14, -334]], { w: 3, col: '#c8a050', pass2: false }); pop();
    for (let i = 0; i < 7; i++) { const x = -300 + i * 230 + (i % 2) * 60; pencil([[x, 940], [x + 6, 600]], { w: 8, col: '#f4f0e6' }); for (let k = 0; k < 5; k++) pencil([[x + 2, 900 - k * 60], [x + 8, 896 - k * 60]], { w: 3, col: '#2a2a2a', pass2: false }); const r = rng(12310 + i); for (let k = 0; k < 14; k++) ell(x + (r() - 0.5) * 140, 640 - r() * 160, 22, 16, { wash: ['#e8b030', '#f0c040', '#c88a1a'][k % 3], washA: 0.9, line: false }); }
  }
  function stalls(t) {                                                  // лавки: навесы, бочки, мешки, пряники, вывески по слову, торговцы и покупатели, гуси
    for (const [x, c, sgn] of [[-120, '#c8221a', 'ОРЕХИ'], [380, '#2a5ab8', 'ПРЯНИКИ'], [880, '#3a8a3a', 'МЁДЪ']]) { push(x, 1240, 1);
      for (const sd of [-1, 1]) pencil([[sd * 180, 0], [sd * 180, -300]], { w: 10, col: '#6a4424' });
      const aw = shape(spline([[-210, -300], [0, -330], [210, -300], [200, -250], [0, -270], [-200, -250]], true, 6), { wash: c, washA: 1, w: 2.4, col: '#1a0a04' }); for (let i = 0; i < 7; i++) pencil([[-180 + i * 60, -320], [-176 + i * 60, -260]], { w: 12, col: '#f4f0e6', a: 0.6, pass2: false });
      rect(-180, -90, 360, 90, { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#2a1408' }); for (let i = 0; i < 4; i++) pencil([[-180, -70 + i * 20], [180, -70 + i * 20]], { w: 1.4, col: '#4a2a10', a: 0.5, pass2: false });
      if (sgn === 'ПРЯНИКИ') for (let i = 0; i < 6; i++) pryanik(-120 + (i % 3) * 120, -96 - Math.floor(i / 3) * 40, 0.3, t, { key: 12320 + i, text: '' });
      else if (sgn === 'ОРЕХИ') for (let i = 0; i < 3; i++) { const sk = shape(spline([[-60, 0], [-70, -70], [-40, -110], [40, -110], [70, -70], [60, 0]], true, 6).map(([a, b]) => [a + (i - 1) * 120, b - 90]), { wash: '#c8b088', washA: 1, w: 2, col: '#4a3a1a' }); for (let k = 0; k < 10; k++) ell((i - 1) * 120 - 40 + (k % 5) * 18, -200 - Math.floor(k / 5) * 12, 9, 8, { wash: '#8a5a2a', washA: 1, w: 1 }); }
      else for (let i = 0; i < 3; i++) { const b = shape(spline([[-40, 0], [-50, -60], [-40, -110], [40, -110], [50, -60], [40, 0]], true, 6).map(([a, bb]) => [a + (i - 1) * 110, bb - 90]), { wash: '#c88a3a', washA: 1, w: 2, col: '#3a1a08' }); pencil([[(i - 1) * 110 - 46, -150], [(i - 1) * 110 + 46, -150]], { w: 4, col: '#3a2a1a', pass2: false }); }
      if (t > EV.ps_shops - 0.1) { const k = popK(t, EV.ps_shops - 0.1 + (x + 120) / 3000, 0.4); push(0, -380, k); rect(-110, -34, 220, 68, { wash: '#f4ecd8', washA: 1, w: 3, col: '#3a1a08' }); txt(sgn, 0, 14, 36, { font: 'Osw', col: '#7a1a10' }); pop(); } pop(); }
    human(-60, 1300, 1.12, t, { body: '#5a3a24', legs: '#2a2a2a', hair: '#8a6a4a', beard: 'long', face: t > EV.ps_nuts ? 'grin' : 'calm', armL: 'hold', armR: t > EV.ps_shops ? 'wave' : 'hold', look: 0.5, seed: 31, long: 1 }); hat20(-60, 1300, 1.12, 'fedora', '#3a2a1a');
    human(1000, 1300, 1.1, t, { body: '#c8221a', legs: '#2a2a2a', hair: '#3a2a1a', face: 'smile', armL: 'hold', armR: 'hold', look: -0.6, seed: 32, flip: -1, long: 1 }); kerchief20(1000, 1300, 1.1, '#e8b030', -1);
    human(620, 1290, 1.0, t, { body: '#3a5a2a', legs: '#2a2a2a', hair: '#c8a060', face: 'grin', armL: 'point', armR: 'hold', look: -0.4, seed: 33 });
    for (let i = 0; i < 3; i++) { const gx = 200 + i * 70 + Math.sin(t * 2 + i) * 20; push(gx, 1320, 0.8, 0, i % 2 ? 1 : -1); blob([[-40, 0], [-30, -40], [20, -44], [40, -20], [30, 0]], { wash: '#f4f0e6', washA: 1, w: 1.6, col: '#5a5a5a' }); pencil(spline([[30, -30], [50, -80], [60, -90]], false, 4), { w: 8, col: '#f4f0e6' }); poly([[60, -96], [80, -88], [60, -84]], { wash: '#e88a2a', washA: 1, w: 1 }); pop(); }
  }
  function scribe(t) {                                                  // подьячий за столиком: книга раскрывается, перо пишет «пряники · орехи»
    push(240, 1560, 1); rect(-170, -40, 340, 30, { wash: '#6a4424', washA: 1, w: 2.4, col: '#1a0a04' }); for (const sd of [-1, 1]) pencil([[sd * 150, -10], [sd * 150, 200]], { w: 9, col: '#4a2a14' }); pop();
    human(80, 1660, 1.15, t, { body: '#6a2a2a', trim: '#e8c060', legs: '#2a2a2a', hair: '#5a3a1a', beard: 'short', face: t > EV.ps_book ? 'smile' : 'calm', armL: 'hold', armR: 'hold', look: 0.6, seed: 34, long: 1 }); hat20(80, 1660, 1.15, 'fedora', '#6a4a2a');
    push(80, 1660 - 380 * 1.15, 1.15); blob([[-50, 0], [-46, -40], [0, -56], [46, -40], [50, 0]], { wash: '#8a6a4a', washA: 1, w: 1.6, col: '#2a1a0a' }); pop();
    const op = sm(clamp((t - EV.ps_book + 0.3) / 0.5)); push(260, 1505, 1);
    const lp = poly([[-150, 0], [-4, 6], [-4, lerp(6, -150, op)], [-140, lerp(0, -140, op)]], { wash: '#efe2c0', washA: 1, w: 2, col: '#6a5232' }); const rp = poly([[4, 6], [150, 0], [140, lerp(0, -140, op)], [4, lerp(6, -150, op)]], { wash: '#f2e6c8', washA: 1, w: 2, col: '#6a5232' });
    if (op > 0.6) { txt('Книга писцовая', -76, -116, 22, { font: 'Hand', col: '#3a1a08' }); txt('1685', -76, -84, 30, { font: 'Hand', col: '#a8221a' }); for (let i = 0; i < 3; i++) pencil([[-130, -56 + i * 16], [-20, -56 + i * 16]], { w: 1.4, col: '#5a3a1a', a: 0.6, pass2: false });
      const w = clamp((t - EV.ps_shops) / 1.0); txt('пряники', 76, -110, 28, { font: 'Hand', col: '#3a1a08', a: clamp(w * 2) }); txt('орѣхи', 76, -76, 28, { font: 'Hand', col: '#3a1a08', a: clamp(w * 2 - 1) }); push(120, -60 - w * 40, 1, -0.6); blob([[0, 0], [-16, -50], [-4, -110], [10, -50]], { wash: '#f4ecd8', washA: 1, w: 1.4, col: '#6a5a3a' }); pop(); }
    pop();
    if (t > EV.ps_nuts - 0.1) { const r = rng(12330); for (let i = 0; i < 26; i++) { const t0 = EV.ps_nuts - 0.1 + r() * 0.3, q = t - t0; if (q < 0) continue; const x = 640 + r() * 300 + q * (r() - 0.3) * 300, y = Math.min(1640 + r() * 40, 1300 + q * q * 1800); ell(x, y, 10, 9, { wash: '#8a5a2a', washA: 1, w: 1.2, col: '#2a1408' }); } }
  }
  function front(t) {                                                   // передний план: край телеги с колесом слева, бочка справа, листья летят
    push(-120, 1960, 1.5); rect(-200, -200, 360, 60, { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#1a0a04' }); ell(60, -60, 110, 110, { line: true, w: 12, col: '#5a3a1a' }); for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; pencil([[60, -60], [60 + Math.cos(a) * 104, -60 + Math.sin(a) * 104]], { w: 6, col: '#5a3a1a', pass2: false }); } pop();
    push(1180, 1940, 1.5); const b = shape(spline([[-90, 0], [-110, -120], [-90, -240], [90, -240], [110, -120], [90, 0]], true, 6), { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#1a0a04' }); shadeG(b.path, 100, 0, -60, 0, '#3a1a08', 0.45); for (const y of [-40, -200]) pencil([[-100, y], [100, y]], { w: 8, col: '#3a3a3a', pass2: false }); pop();
    const r = rng(12340); for (let i = 0; i < 16; i++) { const q = (t * 0.25 + r()) % 1, x = r() * 1200 + Math.sin(q * 8 + i) * 60 - q * 200, y = q * 1900; push(x, y, 1, q * 9); blob([[0, 0], [-8, -10], [0, -22], [8, -10]], { wash: ['#e8b030', '#c8641a', '#f0c040'][i % 3], washA: 0.9, w: 1, col: '#6a3a08' }); pop(); }
  }
  WORLD.pistsy = (t, u, cat) => {
    lay(14, () => { kremlin(t); haze('#f0e8d0', 0.08); });
    lay(3.4, () => { stalls(t); haze('#f0e8d0', 0.04); });
    lay(1, () => { cat(); });
    lay(0.95, () => { scribe(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.pistsy = {
    outfit: 'kupecA', light: { side: 1, rim: '#fff0c8' }, grade: ['#ffd8a0', 0.06],
    act: () => [[S0.pistsy, 'proud'], [EV.ps_book, 'awe'], [EV.ps_shops, 'grin'], [EV.ps_nuts, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 740, y: 1700, s: 1.12, flip: -1, look: t < EV.ps_shops ? [-0.7, 0.5] : [0.3, -0.3], hand: t > EV.ps_shops ? [-140, -330] : [150, -240], handF: [-80, -200], prop: 'pryanikP', propAng: 0.1, point: t > EV.ps_nuts ? 1 : undefined }),
    cam: () => [[S0.pistsy, 560, 900, 0.08], [S0.pistsy + 0.8, 540, 1100, 0.12, 'x'], [EV.ps_book, 420, 1320, 0.26], [EV.ps_shops, 560, 1180, 0.16], [EV.ps_nuts, 640, 1300, 0.24], [S1.pistsy, 640, 1300, 0.28]]
  };
  // ---------------------------------------------------------------- переход: глазурь трескается паутинкой, осколки осыпаются
  TRANS_IN.pistsy = { a: 0.25, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const crack = clamp(k / 0.4), fall = clamp((k - 0.35) / 0.65), r = rng(12350), cx = 560, cy = 1000, N = 14;
    for (let i = 0; i < N; i++) { const a0 = i / N * 6.283, a1 = (i + 1) / N * 6.283, rr = rng(12351 + i), d = clamp(fall * 1.5 - rr() * 0.5); if (d >= 1) continue;
      const P = new Path2D(); P.moveTo(cx, cy); for (let q = 0; q <= 4; q++) { const a = lerp(a0, a1, q / 4); P.lineTo(cx + Math.cos(a) * 2400, cy + Math.sin(a) * 2400); } P.closePath();
      const dy = d * d * 1500, rot = (rr() - 0.5) * d * 1.5; ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, dy); ctx.translate(cx, cy); ctx.rotate(rot); ctx.translate(-cx, -cy); ctx.clip(P); ctx.globalAlpha = 1 - d * 0.3; ctx.drawImage(A, 0, 0); ctx.restore(); }
    scr(() => { if (fall < 0.6) for (let i = 0; i < N; i++) { const a = i / N * 6.283 + r() * 0.2; pencil([[cx, cy], [cx + Math.cos(a) * 1600 * crack, cy + Math.sin(a) * 1600 * crack]], { w: 4, col: '#fff6e8', a: 0.9 * (1 - fall), pass2: false, gap: false }); } for (let j = 1; j < 5; j++) if (crack > j / 5) pencil(ellPts(cx, cy, j * 220, j * 220, 0, 1, 30), { w: 3, col: '#fff6e8', a: 0.6 * (1 - fall), pass2: false, gap: false }); });
  } };
})();
