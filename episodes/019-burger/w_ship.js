/* 019 — `ship`: «Поэтому котлета уплыла: с 1847-го пароходы из Гамбурга везли немцев в Нью-Йорк.» Палуба трансатлантического парохода, холодная сталь Атлантики:
   серое небо с разрывом, косой луч солнца (главный свет — холодный, второй — тёплый огонь камбузной печки у фальшборта), волны с барашками, брызги, чайки за кормой,
   вдали второй пароход с дымом. На палубе эмигранты: мать с ребёнком на сундуке, старик с гармошкой, парень в кепке машет шляпой, матрос сматывает канат; спасательный
   круг «HAMBURG», бухты каната, сундуки и узлы с бирками «NEW YORK», вентиляционные раструбы, труба с красной полосой. Том-эмигрант (куртка, картуз) жарит котлету
   на камбузной печке и укладывает её в жестянку «в дорогу». HUD — карта-пергамент: пунктир Гамбург → Нью-Йорк ползёт по Атлантике, пароходик едет по нему.
   По словам: «уплыла» — палуба качается, котлета в жестянке; «1847-го» — гудок, клуб пара из трубы; «немцев» — эмигранты машут шляпами; «Нью-Йорк» — пароходик
   на карте доезжает, флажок NEW YORK. Переход В сцену: по кадру ползёт пунктир маршрута, за ним, как за ножом, разворачивается новая сцена. */
(() => {
  EV.sh_sail = wtw('s2', 'уплыла:');
  EV.sh_year = wtw('s2', '1847-го');
  EV.sh_ships = wtw('s2', 'пароходы');
  EV.sh_people = wtw('s2', 'немцев');
  EV.sh_ny = wtw('s2', 'Нью-Йорк.');
  SHAKES.push([EV.sh_year + 0.1, 0.25, 6]);
  KEYW.push('1847-го', 'Нью-Йорк.');
  const roll = t => Math.sin(t * 1.3) * 0.025;

  function sea(t) {                                                     // (lay 18 ≈ экран) небо, разрыв облаков, луч, море, второй пароход, чайки
    vgrad(-200, 1100, ['#4a5664', '#7a8894', '#aab4bc', '#c8ccc8']);
    for (let i = 0; i < 7; i++) { const x = -200 + ((i * 260 + t * 12) % 1500), y = 80 + (i % 3) * 110; blob([[x - 200, y + 40], [x - 150, y - 20], [x - 40, y - 50], [x + 80, y - 40], [x + 200, y + 10], [x + 160, y + 50]], { wash: i % 2 ? '#6a7480' : '#8a949c', washA: 0.8, line: false }); }
    ell(820, 200, 150, 60, { wash: '#f4ecd0', washA: 0.6, line: false }); glow(820, 200, 200, 'rgba(255,245,220,1)', 0.3);
    sil([[-200, 760], [1300, 760], [1300, 2000], [-200, 2000]], '#3a4a5a', 1);
    for (let r = 0; r < 14; r++) { const y = 770 + r * r * 4.5, amp = 6 + r * 2; const pts = []; for (let i = 0; i <= 30; i++) { const x = -200 + i * 52; pts.push([x, y + Math.sin(i * 0.9 + t * 1.6 + r) * amp]); } pencil(pts, { w: 2 + r * 0.3, col: r % 2 ? '#7a8ea0' : '#2a3a4a', a: 0.6, pass2: false }); }
    for (let i = 0; i < 12; i++) { const r = rng(19800 + i), x = -150 + r() * 1400, y = 800 + r() * 300, k = (t * 0.6 + r()) % 1; ell(x, y, 30 * (1 - k) + 6, 5, { wash: '#f4f8fc', washA: 0.7 * (1 - k), line: false }); }
    steamer(160, 770, 0.22, t, { key: 19801, name: 'BORUSSIA' });
    for (let i = 0; i < 4; i++) { const x = 300 + i * 150 + Math.sin(t + i) * 40, y = 340 + i * 40 + Math.cos(t * 1.4 + i) * 20; pencil(spline([[x - 20, y], [x - 9, y - 10 - Math.abs(Math.sin(t * 7 + i)) * 7], [x, y], [x + 9, y - 10 - Math.abs(Math.sin(t * 7 + i)) * 7], [x + 20, y]], false, 5), { w: 3, col: '#2a2a30', pass2: false }); }
  }
  function deck(t) {                                                    // (lay 3.4) труба, мачта, раструбы, рубка, люди
    push(540, 960, 1, roll(t)); push(-540, -960, 1);
    const fn = rect(820, 260, 150, 560, { wash: '#1e1e22', washA: 1, w: 2.4, col: '#000', key: 19810 }); shadeG(fn.path, 970, 0, 820, 0, '#4a4e58', 0.35); rect(820, 320, 150, 60, { wash: '#b8221a', washA: 1, line: false }); rect(820, 390, 150, 18, { wash: '#f4f0e8', washA: 1, line: false });
    const blow = t > EV.sh_year ? clamp((t - EV.sh_year) / 1.2) : 0; for (let i = 0; i < 8; i++) { const q = (t * 0.3 + i / 8) % 1, big = blow > 0 && blow < 1 ? 1 + (1 - blow) * 1.5 : 1; ell(895 - q * 500, 240 - q * 300, (40 + q * 120) * big, (30 + q * 70) * big, { wash: i % 2 ? '#3a3a42' : '#5a5a62', washA: 0.6 * (1 - q), line: false }); }
    if (blow > 0 && blow < 1) { ell(860, 300, 80 + blow * 160, 40 + blow * 80, { wash: '#ffffff', washA: 0.8 * (1 - blow), line: false }); txt('ТУУ-У!', 700, 200, 60, { font: 'Osw', col: '#ffffff', a: 1 - blow }); }
    pencil([[150, 1100], [150, -200]], { w: 12, col: '#4a3a2a' }); for (let k = 0; k < 6; k++) pencil([[150, -100 + k * 160], [-200, 1100]], { w: 1.2, col: '#2a2a2a', a: 0.5, pass2: false }); pencil([[40, 200], [260, 200]], { w: 8, col: '#4a3a2a' });
    for (const [x, s] of [[380, 1], [1000, 0.9]]) { push(x, 1100, s); rect(-20, -180, 40, 180, { wash: '#e8e2d0', washA: 1, w: 2, col: '#3a3a3a' }); const h = blob([[-20, -180], [-60, -230], [-50, -280], [40, -280], [60, -230], [20, -180]], { wash: '#e8e2d0', washA: 1, w: 2, col: '#3a3a3a' }); ell(0, -255, 40, 24, { wash: '#2a2a2a', washA: 1, w: 1.4 }); ell(0, -255, 30, 16, { wash: '#b8221a', washA: 1, line: false }); pop(); }
    const rail = rect(-200, 1080, 1500, 30, { wash: '#8a6a4a', washA: 1, w: 2, col: '#2a1a0a', key: 19811 }); for (let i = 0; i < 30; i++) pencil([[-200 + i * 52, 1110], [-200 + i * 52, 1240]], { w: 4, col: '#5a4a3a', pass2: false }); rect(-200, 1240, 1500, 400, { wash: '#9a8a6a', washA: 1, w: 2, col: '#3a2a1a' }); for (let i = 0; i < 20; i++) pencil([[-200, 1260 + i * 20], [1300, 1260 + i * 20]], { w: 1.2, col: '#6a5a3a', a: 0.5, pass2: false });
    push(560, 1000, 1); ell(0, 0, 70, 70, { wash: '#f4f0e8', washA: 1, w: 2.4, col: '#3a3a3a' }); ell(0, 0, 36, 36, { wash: '#9a8a6a', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) { const a = i * 1.57 + 0.78; push(Math.cos(a) * 52, Math.sin(a) * 52, 1, a); rect(-14, -10, 28, 20, { wash: '#c81e14', washA: 1, line: false }); pop(); } txt('HAMBURG', 0, 6, 14, { font: 'Osw', col: '#2a2a2a' }); pop();
    const wave = t > EV.sh_people && t < EV.sh_ny + 0.6;
    human(40, 1270, 1.05, t, { body: '#5a3a4a', legs: '#3a2a2a', hair: '#c8a060', face: wave ? 'smile' : 'calm', armL: 'hold', armR: wave ? 'wave' : 'hold', look: 0.4, seed: 19820, long: 1, hat: 'scarf', hatCol: '#e8d8b0' }); human(120, 1270, 0.6, t, { body: '#2a5a8a', legs: '#3a3a3a', hair: '#e8c060', face: wave ? 'grin' : 'smile', armL: 'hold', armR: wave ? 'wave' : 'up', look: 0.6, seed: 19821 });
    push(80, 1280, 1); rect(-90, -60, 180, 60, { wash: '#6a4424', washA: 1, w: 2, col: '#2a1408' }); for (const x of [-60, 60]) rect(x - 8, -60, 16, 60, { wash: '#3a3a3a', washA: 1, line: false }); rect(-40, -50, 80, 26, { wash: '#f4e8c8', washA: 1, w: 1 }); txt('NEW YORK', 0, -32, 14, { font: 'Osw', col: '#2a1408' }); pop();
    human(310, 1250, 1.0, t, { body: '#3a3a3a', legs: '#2a2a2a', hair: '#e8e8e8', face: wave ? 'grin' : 'calm', armL: 'hold', armR: 'hold', look: 0.3, seed: 19822, beard: 'long', hat: 'merchant', hatCol: '#2a2a2a' }); push(310, 1110, 1); for (let i = 0; i < 7; i++) { const x = -60 + i * 20 + Math.sin(t * 4) * (i - 3) * 2; rect(x, -30, 18, 60, { wash: i % 2 ? '#c81e14' : '#f4e8c8', washA: 1, w: 1, col: '#3a1a0a' }); } pop();
    for (let i = 0; i < 3; i++) { const q = (t * 0.7 + i / 3) % 1; push(260 + q * 80, 1000 - q * 120, 1, q); pencil(spline([[0, 0], [6, -10], [14, -4]], false, 4), { w: 3, col: '#2a2a2a', a: 1 - q, pass2: false }); ell(14, -4, 4, 3, { wash: '#2a2a2a', washA: 1 - q, line: false }); pop(); }
    human(1060, 1260, 1.05, t, { body: '#4a5a3a', legs: '#3a3a2a', hair: '#8a5a2a', face: wave ? 'grin' : 'smile', armL: 'hold', armR: wave ? 'up' : 'hold', look: -0.6, seed: 19823, flip: -1, hat: 'cap', hatCol: '#3a3a2a' });
    human(860, 1250, 1.0, t, { body: '#1a2a4a', legs: '#f4f0e8', hair: '#3a2a1a', face: 'calm', armL: 'hold', armR: 'hold', look: -0.2, seed: 19824, flip: -1, beard: 'short', hat: 'cap', hatCol: '#1a2030' }); push(860, 1250, 1); for (let r = 0; r < 4; r++) pencil(ellPts(-70, -10, 50 - r * 10, 16 - r * 3, 0, 0, 20), { w: 5, col: '#c8b088', pass2: false }); pop();
    for (const [x, y] of [[620, 1250], [700, 1230]]) { push(x, y, 1); blob([[-50, 0], [-40, -70], [0, -84], [40, -70], [50, 0]], { wash: '#a8946a', washA: 1, w: 1.8, col: '#4a3a1a' }); pencil([[-10, -84], [10, -100]], { w: 3, col: '#4a3a1a', pass2: false }); pop(); }
    pop(); pop();
  }
  function galley(t) {                                                  // перед Томом: камбузная печка, сковорода с котлетой, жестянка «в дорогу», хлеб, кружка
    push(540, 960, 1, roll(t) * 0.6); push(-540, -960, 1);
    const st = rect(-300, 1440, 1700, 600, { wash: '#7a6a4a', washA: 1, w: 3, col: '#2a1a0a', key: 19830 }); shadeG(st.path, 0, 1440, 0, 1700, '#2a1a0a', 0.5); for (let i = 0; i < 8; i++) pencil([[-280, 1470 + i * 36], [1380, 1470 + i * 36]], { w: 1.4, col: '#4a3a1a', a: 0.4, pass2: false });
    push(950, 1450, 1); const sv = rect(-140, -150, 280, 150, { wash: '#2a2a2e', washA: 1, w: 2.4, col: '#000', key: 19831 }); shadeG(sv.path, 140, 0, -140, 0, '#000', 0.4); rect(-90, -110, 80, 60, { wash: '#ff7a2a', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) { const fl = Math.sin(t * 9 + i) * 6; blob([[-84 + i * 20, -50], [-76 + i * 20, -96 - fl], [-68 + i * 20, -50]], { wash: '#ffd040', washA: 0.9, line: false }); } glow(-50, -80, 120, 'rgba(255,140,40,1)', 0.35);
    rect(60, -300, 40, 150, { wash: '#2a2a2e', washA: 1, w: 2 }); for (let i = 0; i < 3; i++) { const q = (t * 0.5 + i / 3) % 1; ell(80 - q * 40, -320 - q * 120, 16 + q * 30, 10 + q * 14, { wash: '#6a6a72', washA: 0.5 * (1 - q), line: false }); }
    ell(-10, -160, 120, 26, { wash: '#1a1a1e', washA: 1, w: 2 }); pencil([[110, -160], [220, -180]], { w: 10, col: '#1a1a1e' }); if (t < EV.sh_sail) hamSteak(-10, -150, 0.5, t, { key: 19832, plate: '#1a1a1e', steam: 1 }); pop();
    push(560, 1460, 1); const tin = rect(-90, -80, 180, 80, { wash: '#a8b0b8', washA: 1, w: 2, col: '#3a3e44', key: 19833 }); shadeG(tin.path, 90, 0, -90, 0, '#5a6068', 0.4); pencil([[-84, -70], [84, -70]], { w: 2, col: '#ffffff', a: 0.6, pass2: false });
    if (t > EV.sh_sail) { pattyRock(0, -76, 70, 26, 19834); const lid = clamp((t - EV.sh_sail - 0.4) / 0.4); push(-90, -80, 1, -1.4 * (1 - lid)); rect(0, -12, 186, 14, { wash: '#c8ccd2', washA: 1, w: 1.6, col: '#3a3e44' }); pop(); } txt('PROVIANT', 0, -30, 18, { font: 'Osw', col: '#2a2e34' }); pop();
    push(250, 1460, 1); const br = blob([[-80, 0], [-84, -50], [-40, -80], [40, -80], [84, -50], [80, 0]], { wash: '#b87a3a', washA: 1, w: 2, col: '#4a2a0a' }); shadeG(br.path, 0, -80, 0, 0, '#f0c070', 0.4); for (let i = 0; i < 4; i++) pencil([[-50 + i * 30, -70], [-40 + i * 30, -50]], { w: 3, col: '#5a3a10', pass2: false }); pop();
    push(1250, 1460, 1); rect(-34, -70, 68, 70, { wash: '#e8e0d0', washA: 1, w: 1.6, col: '#3a3a3a' }); ell(0, -70, 34, 8, { wash: '#5a3a1a', washA: 1, w: 1 }); pencil(spline([[34, -56], [56, -46], [34, -20]], false, 5), { w: 6, col: '#e8e0d0', pass2: false }); pop();
    castShadow(560, 1460, 200, 140, -0.5, 0.25); lightPool(880, 1450, 360, 70, 'rgba(255,150,60,1)', 0.3);
    pop(); pop();
  }
  function front(t) {                                                   // передний план: канатная бухта, брызги через фальшборт, край паруса
    push(-120, 2000, 1.6); for (let r = 0; r < 6; r++) pencil(ellPts(0, -40, 200 - r * 30, 60 - r * 9, 0, 0, 30), { w: 12, col: r % 2 ? '#c8b088' : '#a8946a', pass2: false }); pop();
    const sp = (t * 0.8) % 1; for (let i = 0; i < 14; i++) { const r = rng(19840 + i); ell(900 + r() * 400 - sp * 200, 200 + r() * 300 + sp * sp * 600, 8 + r() * 10, 6 + r() * 8, { wash: '#e8f0f8', washA: 0.6 * (1 - sp), line: false }); }
    blob([[1080, -200], [1300, -200], [1300, 600], [1180, 400], [1120, 100]], { wash: '#e8e0cc', washA: 0.9, w: 2, col: '#6a5a3a' });
  }
  WORLD.ship = (t, u, cat) => {
    lay(18, () => { sea(t); });
    lay(3.4, () => { deck(t); haze('#c8d0d8', 0.06); });
    lay(1, () => { cat(); galley(t); });
    lay(0.6, () => { front(t); motes(26, [-200, 0, 1300, 1900], '#e8f0f8', t, 19850, { sp: 160, vx: -120, sz: 3, a: 0.5 }); moodDark(560, 1000, 500, 1500, '#0a1420', 0.45); shaft(820, -100, 240, 1700, 0.25, 'rgba(240,245,255,1)', 0.12); });
  };
  DIR.ship = {
    outfit: 'emigA', light: { side: 1, rim: '#e8f0ff' }, grade: ['#8aa0b8', 0.1],
    act: () => [[S0.ship, 'grin'], [EV.sh_sail, 'proud'], [EV.sh_year, 'shock'], [EV.sh_ships, 'awe'], [EV.sh_people, 'laugh'], [EV.sh_ny, 'smug']],
    pose: (t, u, b) => { const pack = t > EV.sh_sail - 0.3 && t < EV.sh_year, wave = t > EV.sh_people && t < EV.sh_ny + 0.5;
      return Object.assign(b, { x: 640, y: 1590, s: 1.18, flip: 1, rot: roll(t) * 0.5, look: t < EV.sh_sail ? [0.6, 0.3] : t < EV.sh_people ? [0.7, -0.8] : [-0.4, -0.3],
        hand: pack ? [-20, -150] : wave ? [180, -470] : [220, -230], prop: pack ? 'forkPattyP' : wave ? undefined : 'forkP19', propAng: pack ? 0.6 : -0.2, handF: [-120, -230], tailUp: wave }); },
    hud: t => {                                                          // карта-пергамент: пунктир Гамбург → Нью-Йорк, пароходик
      const k = popK(t, S0.ship + 0.4, 0.4); if (k <= 0) return; push(720, 480, k * 1.25, -0.03);
      ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.35)'; ctx.shadowBlur = 14; ctx.shadowOffsetY = 6; ctx.fillStyle = '#efe2c0'; ctx.fillRect(-210, -130, 420, 260); ctx.restore();
      rect(-200, -120, 400, 240, { wash: '#a8c0c8', washA: 0.5, w: 1.4, col: '#7a6a4a' }); blob([[-200, -110], [-120, -100], [-110, -20], [-150, 60], [-200, 110]], { wash: '#d8c890', washA: 1, w: 1.2, col: '#7a6a4a' }); blob([[200, -120], [130, -90], [110, -30], [150, 30], [200, 40]], { wash: '#d8c890', washA: 1, w: 1.2, col: '#7a6a4a' });
      const A = [150, -50], B = [-130, 0], d = clamp((t - EV.sh_ships) / Math.max(0.5, EV.sh_ny - EV.sh_ships + 0.2)); const pts = []; for (let i = 0; i <= 20; i++) { const q = i / 20 * d; pts.push([lerp(A[0], B[0], q), lerp(A[1], B[1], q) - Math.sin(q * 3.14) * 50]); } if (pts.length > 1) dashL(pts, '#c81e10', 0.9, 4, 2);
      ell(A[0], A[1], 8, 8, { wash: '#c81e10', washA: 1, line: false }); txt('HAMBURG', A[0], A[1] - 18, 18, { font: 'Osw', col: '#3a2a1a' }); const P = pts[pts.length - 1]; push(P[0], P[1] - 8, 0.12); steamer(0, 0, 1, t, { key: 19860 }); pop();
      if (t > EV.sh_ny) { const q = popK(t, EV.sh_ny, 0.3); push(B[0], B[1], q); pencil([[0, 0], [0, -40]], { w: 3, col: '#2a1a0a', pass2: false }); poly([[0, -40], [36, -32], [0, -24]], { wash: '#2a6aa8', washA: 1, w: 1.2 }); pop(); txt('NEW YORK', B[0] + 10, B[1] + 30, 18, { font: 'Osw', col: '#2a6aa8' }); }
      txt('1847 →', -150, -96, 24, { font: 'Hand', col: '#3a2a1a' }); pop(); },
    cam: () => [[S0.ship, 640, 900, 0.18], [S0.ship + 0.6, 620, 1040, 0.24, 'x'], [EV.sh_sail, 600, 1120, 0.3], [EV.sh_year, 760, 900, 0.22], [EV.sh_people, 520, 1050, 0.22], [EV.sh_ny, 640, 1060, 0.26], [S1.ship, 640, 1080, 0.28]]
  };
  // ---------------------------------------------------------------- переход: пунктир маршрута ползёт по кадру, за ним разворачивается новая сцена
  TRANS_IN.ship = { a: 0.2, b: 0.55, runA: 1, fx(k, t, A, B) {
    const e = sm(k); drawBuf(A, 1, 540, 960); const X = -100 + e * 1400, path = new Path2D(); path.moveTo(-50, -50); path.lineTo(X, -50); for (let i = 0; i <= 20; i++) { const y = -50 + i * 101; path.lineTo(X + Math.sin(i * 1.3) * 40, y); } path.lineTo(-50, 2100); path.closePath();
    inPath(path, () => drawBuf(B, 1, 540, 960)); scr(() => { const pts = []; for (let i = 0; i <= 20; i++) pts.push([X + Math.sin(i * 1.3) * 40, -50 + i * 101]); dashL(pts, '#c81e10', 1, 10, 6); ell(X + Math.sin(13) * 40, 960, 30, 30, { wash: '#c81e10', washA: 1, line: false }); });
  } };
})();
