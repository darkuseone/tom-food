/* 023 — `yunnan`: «Её родина — горы Юньнань в Китае, у подножия Гималаев. / Здесь её приручили тысячи лет назад. / Но ей тесно: через Тибет и степи
   она веками идёт на запад.» Утро в горах северо-западной Юньнани: снежные пики Гималаев в розовом свете, туман в ущельях, нефритовые террасы-ступени
   с розово-красными заплатками дикой гречихи, каменная деревня с плоскими крышами и дымками, водопад, гирлянды молитвенных флажков, сосны на скалах.
   Средний план: крестьянка с заплечной корзиной, старик с мотыгой, мальчик с козой; по горной тропе стоит караван яков с мешками. Передний план —
   каменная стенка террасы: плетёная корзина со снопиком гречихи, серп, глиняная чаша, чайник, ветка сосны; туман у края кадра.
   Том — горец (индиговая куртка, конусная шляпа + фартук). По словам: «Юньнань» — туман расходится, видно террасы; «Гималаев.» — пики вспыхивают
   розовым; «приручили» — Том срывает стебель гречихи и показывает его; «назад.» — зёрна сыплются в чашу; «тесно:» — Том разводит лапы, корзина
   переполнена; «Тибет» — караван трогается влево, на запад; «запад.» — по тропе загорается дорожка из зёрен со стрелкой «ЗАПАД».
   Переход В сцену: зерно с ложки летит в камеру и раскрывается треугольником-окном в горную долину. */
(() => {
  EV.yn_name = wtw('s1', 'Юньнань');
  EV.yn_peaks = wtw('s1', 'Гималаев.');
  EV.yn_tame = wtw('s2', 'приручили');
  EV.yn_ago = wtw('s2', 'назад.');
  EV.yn_tight = wtw('s3', 'тесно:');
  EV.yn_tibet = wtw('s3', 'Тибет');
  EV.yn_west = wtw('s3', 'запад.');
  SHAKES.push([EV.yn_tight + 0.05, 0.12, 5]);
  KEYW.push('Гималаев.', 'запад.');
  const SUNY = [-120, 300];
  function sky(t) {                                                      // утреннее небо: персиковый край, голубой верх, облака, птицы
    vgrad(-800, 1100, ['#7aa8d8', '#a8c8e4', '#f4d8c0', '#f8e4c8']);
    glow(SUNY[0], SUNY[1], 360, 'rgba(255,230,180,1)', 0.35);
    for (let i = 0; i < 5; i++) { const x = ((i * 380 + t * 6) % 2200) - 500, y = -420 + (i % 3) * 110; blob([[x, y], [x + 160, y - 40], [x + 360, y - 20], [x + 460, y + 14], [x + 200, y + 26]], { wash: '#ffffff', washA: 0.7, line: false }); }
    for (let i = 0; i < 4; i++) { const k = (t * 0.05 + i * 0.25) % 1, x = 1400 - k * 1800, y = -100 + Math.sin(k * 7 + i) * 50; pencil([[x - 16, y], [x, y - 9], [x + 16, y]], { w: 3, col: '#3a3a5a', pass2: false }); }
  }
  function peaks(t) {                                                    // Гималаи: зубцы со снегом, голубые тени, розовая вспышка на «Гималаев»
    const pink = clamp((t - EV.yn_peaks + 0.1) / 0.6) * (1 - clamp((t - EV.yn_peaks - 2.5) / 2) * 0.6);
    const P = [[-800, 900], [-560, 380], [-420, 520], [-200, 180], [40, 420], [260, 120], [520, 380], [760, 60], [1000, 340], [1240, 160], [1500, 420], [1800, 260], [2000, 900]];
    const m = shape(P, { wash: '#6a78a8', washA: 1, w: 2.4, col: '#2a3458', key: 23950 }); shadeG(m.path, 1200, 0, 0, 0, '#2a3458', 0.55); hatch(m.path, m.bb, { gap: 9, a: 0.15, col: '#2a3458', ang: 1.1, key: 23951, w: 1.2 });
    for (let i = 1; i < P.length - 1; i++) { const [x, y] = P[i]; if (y > 400) continue; const sn = blob([[x - 140, y + 180], [x - 60, y + 60], [x, y], [x + 70, y + 70], [x + 150, y + 170], [x + 60, y + 140], [x, y + 190], [x - 70, y + 140]], { wash: '#f8fbff', washA: 1, w: 1.6, col: '#8a9ab8' }); shadeG(sn.path, x + 150, 0, x, 0, '#a8b8d8', 0.55); if (pink > 0) wash(sn.path, '#ffb0c0', 0.45 * pink); pencil([[x, y], [x + 40, y + 120]], { w: 2, col: '#a8b8d8', a: 0.7, pass2: false }); }
    haze('#e8f0f8', 0.1);
  }
  function terraces(t) {                                                 // нефритовые террасы-ступени, дикая гречиха заплатками, деревня, водопад, флажки
    sil([[-800, 900], [-300, 640], [200, 700], [700, 600], [1300, 680], [1900, 640], [1900, 1400], [-800, 1400]], '#4a7a5a', 1);
    const yk = (k, x) => 650 + k * 74 + Math.sin(x / 260 + k * 1.3) * 26;
    for (let k = 0; k < 9; k++) { const top = [], bot = []; for (let x = -800; x <= 1900; x += 90) { top.push([x, yk(k, x)]); bot.push([x, yk(k + 1, x) - 14]); }
      const band = shape(top.concat(bot.reverse()), { wash: k % 2 ? '#7ab86a' : '#5aa05a', washA: 1, line: false, key: 23940 + k }); shadeG(band.path, 0, yk(k, 500), 0, yk(k + 1, 500), '#2a6a3a', 0.35);
      const wallB = top.map(([x]) => [x, yk(k + 1, x) - 14]).concat(top.map(([x]) => [x, yk(k + 1, x)]).reverse()); shape(wallB, { wash: '#6a6a5a', washA: 1, line: false });
      pencil(spline(top, false, 3), { w: 2.4, col: '#d8f0c0', a: 0.7, pass2: false });
      const r = rng(23945 + k); for (let i = 0; i < 5; i++) { const x = -600 + r() * 2400, y = yk(k, x) + 22; for (let q = 0; q < 14; q++) ell(x + (r() - 0.5) * 160, y + (r() - 0.5) * 26, 7, 5, { wash: r() < 0.4 ? '#d8586a' : '#f4b8c4', washA: 0.95, line: false }); } }
    for (let i = 0; i < 7; i++) { const x = 820 + i * 92 - (i % 2) * 20, y = 760 + (i % 3) * 40; const h = rect(x, y - 60, 80, 60, { wash: '#c8b8a0', washA: 1, w: 1.6, col: '#4a3a2a' }); shadeG(h.path, x + 80, 0, x, 0, '#6a5a4a', 0.4); rect(x - 6, y - 70, 92, 12, { wash: '#5a4a3a', washA: 1, w: 1.2 }); rect(x + 30, y - 40, 18, 22, { wash: i % 2 ? '#2a1a10' : '#f4c870', washA: 1, line: false });
      for (let q = 0; q < 3; q++) { const ph = (t * 0.25 + q / 3 + i * 0.13) % 1; ell(x + 60 + ph * 30, y - 80 - ph * 120, 8 + ph * 20, 6 + ph * 14, { wash: '#f4f4f8', washA: 0.4 * (1 - ph), line: false }); } }
    for (let i = 0; i < 2; i++) { const x0 = 860 + i * 380; pencil(spline([[x0, 700], [x0 + 180, 660], [x0 + 360, 690]], false, 6), { w: 1.6, col: '#5a4a3a', pass2: false }); for (let f = 0; f < 9; f++) { const fx = x0 + 20 + f * 38, fy = 690 - Math.sin(f / 8 * 3.14) * 34 + Math.sin(t * 3 + f) * 3; rect(fx, fy, 22, 26, { wash: ['#2a6ad8', '#f8f8f8', '#d8343a', '#3aa84a', '#f4c020'][f % 5], washA: 1, w: 0.8, col: '#3a3a3a' }); } }
    push(-380, 640, 1); pencil([[0, 0], [10, 400]], { w: 40, col: '#e8f4fc', a: 0.85, pass2: false }); for (let i = 0; i < 5; i++) { const k = (t * 1.5 + i / 5) % 1; pencil([[-12 + i * 6, k * 400], [-10 + i * 6, k * 400 + 50]], { w: 3, col: '#ffffff', pass2: false }); } for (let i = 0; i < 4; i++) ell(10 + Math.sin(t * 2 + i) * 20, 400, 50 + i * 10, 18, { wash: '#ffffff', washA: 0.45, line: false }); pop();
    for (let i = 0; i < 5; i++) { const x = -700 + i * 90, y = 660 - (i % 2) * 30; pencil([[x, y], [x + 4, y - 120]], { w: 6, col: '#3a2a1a', pass2: false }); for (let q = 0; q < 4; q++) blob([[x - 50 + q * 6, y - 100 + q * 26], [x, y - 140 + q * 26], [x + 50 - q * 6, y - 100 + q * 26]], { wash: '#2a5a3a', washA: 1, w: 1, col: '#0a2a1a' }); }
    const mist = 1 - clamp((t - EV.yn_name) / 1.2) * 0.65; for (let i = 0; i < 6; i++) { const x = ((i * 420 + t * 20) % 2600) - 700; blob([[x, 760 + i * 30], [x + 200, 720 + i * 30], [x + 500, 740 + i * 30], [x + 600, 790 + i * 30], [x + 260, 810 + i * 30]], { wash: '#f4f8fc', washA: 0.55 * mist, line: false }); }
    haze('#eef4f8', 0.08);
  }
  function people(t) {                                                   // средний план: крестьянка с корзиной, старик с мотыгой, мальчик с козой, караван яков
    const go = clamp((t - EV.yn_tibet) / 6);
    human(940, 1280, 1.0, t, { body: '#2a3a7a', legs: '#1a2040', long: 1, hat: 'scarf', hatCol: '#d8343a', armL: 'hold', armR: t > EV.yn_tame ? 'wave' : 'hold', face: t > EV.yn_tame ? 'grin' : 'smile', seed: 23960, flip: -1, look: -0.5, skin: '#d8a880', trim: '#f4c840' });
    push(980, 1280 - 250, 1); const bk = blob([[-50, 0], [-60, -110], [60, -110], [50, 0]], { wash: '#c8a060', washA: 1, w: 2, col: '#5a3a10' }); for (let i = 0; i < 5; i++) pencil([[-56, -20 - i * 20], [56, -20 - i * 20]], { w: 1.6, col: '#8a6a30', pass2: false }); for (let i = 0; i < 4; i++) buckPlant(-40 + i * 26, -100, 90, t, { seed: 23961 + i, sway: 2 }); pop();
    human(170, 1300, 1.02, t, { body: '#4a4a6a', legs: '#2a2a3a', hair: '#e8e8e8', beard: 'long', face: t > EV.yn_ago ? 'grin' : 'calm', armL: 'hold', armR: 'up', seed: 23962, look: 0.5, skin: '#c89870', hat: 'cap', hatCol: '#2a2a3a' });
    push(210, 1300 - 330, 1, Math.sin(t * 3) * 0.3); pencil([[0, 0], [70, 240]], { w: 6, col: '#6a4a2a', pass2: false }); poly([[60, 230], [110, 250], [100, 270], [50, 252]], { wash: '#8a8a94', washA: 1, w: 1.4 }); pop();
    human(790, 1320, 0.72, t, { body: '#d8343a', legs: '#2a2040', hair: '#1a1008', face: 'grin', armL: 'hold', armR: 'swing', seed: 23963, skin: '#d8a880' });
    push(860, 1330, 0.8); const gt = ell(0, -60, 54, 30, { wash: '#f4f0e8', washA: 1, w: 2, col: '#4a4038' }); ell(52, -90, 20, 16, { wash: '#f4f0e8', washA: 1, w: 1.8, col: '#4a4038' }); pencil([[60, -104], [76, -130]], { w: 3, col: '#6a5a4a', pass2: false }); for (const lx of [-34, -14, 20, 38]) pencil([[lx, -40], [lx, 0]], { w: 5, col: '#4a4038', pass2: false }); ell(58, -92, 3, 3, { wash: '#000', washA: 1, line: false }); pop();
    for (let i = 0; i < 4; i++) { const x = 640 + i * 150 - go * 900, y = 1170 - i * 6; if (x < -500) continue; push(x, y, 0.8, 0, -1); const wb = Math.sin(t * 6 + i) * (go > 0 && go < 1 ? 4 : 0);
      const yb = blob([[-90, -40 + wb], [-70, -100], [40, -110], [90, -80], [100, -30], [70, -10], [-80, -10]], { wash: '#3a2a20', washA: 1, w: 2, col: '#0a0604', key: 23970 + i }); hatch(yb.path, yb.bb, { gap: 5, a: 0.3, col: '#6a5040', ang: 1.4, key: 23974 + i, w: 1 });
      ell(110, -70, 30, 24, { wash: '#2a2018', washA: 1, w: 1.6, col: '#0a0604' }); for (const sd of [-1, 1]) pencil(spline([[110 + sd * 16, -90], [110 + sd * 34, -110], [110 + sd * 26, -126]], false, 4), { w: 4, col: '#e8e0d0', pass2: false });
      for (const lx of [-60, -30, 40, 70]) pencil([[lx, -14], [lx + (go > 0 && go < 1 ? Math.sin(t * 8 + lx) * 8 : 0), 30]], { w: 9, col: '#2a2018', pass2: false });
      for (const sd of [-1, 1]) grainSack(sd * 30 - 10, -90, 0.32, { key: 23978 + i, col: sd > 0 ? '#c8a878' : '#a88858' });
      rect(-30, -120, 60, 20, { wash: '#d8343a', washA: 1, w: 1.2 }); pop(); }
    human(1060 - go * 900, 1180, 0.82, t, { body: '#6a4a2a', legs: '#3a2a1a', hat: 'fur', hatCol: '#5a3a1a', armL: 'swing', armR: 'hold', face: 'calm', seed: 23965, flip: -1, skin: '#c89870' });
  }
  function trail(t) {                                                    // дорожка из зёрен по тропе на запад + указатель
    const k = clamp((t - EV.yn_west + 0.3) / 1.0); if (k <= 0) return;
    const pts = spline([[1100, 1210], [800, 1190], [400, 1200], [0, 1180], [-400, 1170]], false, 10);
    const n = Math.floor(pts.length * k); for (let i = 0; i < n; i += 2) { const [x, y] = pts[i]; grainB(x, y, 0.4, i * 0.7, { key: 23980 + i }); }
    push(160, 1250, popK(t, EV.yn_west, 0.4)); pencil([[0, 0], [0, -150]], { w: 8, col: '#6a4a2a', pass2: false }); const ar = poly([[-130, -190], [-90, -230], [90, -230], [90, -150], [-90, -150]], { wash: '#f4e8c8', washA: 1, w: 2, col: '#4a3010' }); txt('← ЗАПАД', 0, -178, 28, { font: 'Osw', col: '#a8241e' }); pop();
  }
  function wall(t) {                                                     // каменная стенка террасы: корзина со снопиком, серп, чаша, чайник, сосновая ветка
    const st = rect(-400, 1440, 2000, 600, { wash: '#8a8478', washA: 1, w: 3, col: '#2a2620', key: 23990 }); shadeG(st.path, 0, 1440, 0, 1900, '#3a3630', 0.5);
    const r = rng(23991); for (let row = 0; row < 6; row++) for (let i = 0; i < 16; i++) { const x = -400 + i * 130 + (row % 2) * 65 + r() * 20, y = 1450 + row * 70; const s = blob([[x, y], [x + 110, y + 4], [x + 116, y + 58], [x + 4, y + 62]], { wash: lerpC('#9a9488', '#6a6458', r()), washA: 1, w: 1.6, col: '#3a3630' }); }
    for (let i = 0; i < 18; i++) ell(-380 + i * 110, 1440 + (i % 3) * 6, 50, 14, { wash: '#4a7a3a', washA: 0.85, line: false });
    lightPool(500, 1480, 560, 110, 'rgba(255,236,190,1)', 0.3);
    push(250, 1480, 0.72); const bk = blob([[-110, 0], [-130, -150], [130, -150], [110, 0]], { wash: '#c8a060', washA: 1, w: 2.4, col: '#5a3a10', key: 23992 }); shadeG(bk.path, 130, 0, -130, 0, '#6a4a10', 0.4); for (let i = 0; i < 7; i++) pencil([[-124 + i * 3, -20 - i * 20], [124 - i * 3, -20 - i * 20]], { w: 2, col: '#8a6a30', pass2: false }); for (let i = -5; i <= 5; i++) pencil([[i * 22, 0], [i * 24, -150]], { w: 1.4, col: '#8a6a30', a: 0.6, pass2: false });
    const over = t > EV.yn_tight ? 1 : 0; for (let i = 0; i < 6 + over * 5; i++) buckPlant(-90 + i * (over ? 17 : 34), -140, 170 + (i % 3) * 30, t, { seed: 23993 + i, sway: 4 }); pop();
    push(620, 1520, 1); const bw = blob([[-80, -30], [80, -30], [60, 20], [-60, 20]], { wash: '#a8583a', washA: 1, w: 2, col: '#3a1008', key: 23994 }); shadeG(bw.path, 80, 0, -80, 0, '#5a2010', 0.4); ell(0, -30, 80, 16, { wash: '#4a2010', washA: 1, w: 1.4 }); const fill = clamp((t - EV.yn_ago + 0.2) / 1.5); for (let i = 0; i < Math.floor(fill * 14); i++) grainB(-60 + (i % 7) * 20, -34 - Math.floor(i / 7) * 8, 0.3, i, { key: 23995 + i, hull: 1 });
    if (fill > 0 && fill < 1) for (let i = 0; i < 4; i++) grainB(-10 + i * 6, -200 + ((t * 3 + i * 0.3) % 1) * 160, 0.32, t * 4 + i, { key: 23999 + i, hull: 1 }); pop();
    push(900, 1500, 0.9); const tp = blob([[-60, 0], [-70, -60], [-40, -90], [40, -90], [70, -60], [60, 0]], { wash: '#3a5a4a', washA: 1, w: 2, col: '#0a2014', key: 24000 }); shadeG(tp.path, 70, 0, -70, 0, '#0a2014', 0.4); pencil(spline([[60, -60], [110, -80], [130, -110]], false, 4), { w: 8, col: '#3a5a4a', pass2: false }); pencil(spline([[-66, -70], [-110, -50], [-90, -20]], false, 4), { w: 6, col: '#6a4a2a', pass2: false }); ell(0, -96, 20, 8, { wash: '#2a3a30', washA: 1, w: 1.4 }); pop(); steamWisps(1020, 1390, 0.4, t, 2, 24001, 0.35);
    push(780, 1600, 1, -0.3); pencil(spline([[0, 0], [60, -10], [110, -50], [120, -100], [96, -130]], false, 6), { w: 7, col: '#8a8a94', pass2: false }); rect(-70, -10, 70, 20, { wash: '#6a3a1a', washA: 1, w: 1.4 }); pop();
    castShadow(250, 1480, 160, 100, 0.8, 0.22); castShadow(620, 1520, 140, 80, 0.8, 0.2); castShadow(900, 1500, 120, 80, 0.8, 0.2);
  }
  function front(t) {                                                    // передний план: сосновая ветка сверху-слева, туман снизу
    push(400, 640, 1); for (let i = 0; i < 9; i++) { pencil([[i * 34, i * 6], [i * 34 + 30, i * 6 + 60]], { w: 2, col: '#1a3a24', pass2: false }); for (let q = 0; q < 8; q++) pencil([[i * 34 + q * 4, i * 6 + q * 6], [i * 34 + q * 4 + (q % 2 ? 26 : -22), i * 6 + q * 6 + 30]], { w: 2.4, col: q % 2 ? '#2a5a3a' : '#1a4a2a', pass2: false }); } pencil(spline([[-60, -40], [100, 10], [300, 50]], false, 6), { w: 12, col: '#4a3020', pass2: false }); pop();
    for (let i = 0; i < 3; i++) { const x = ((i * 300 + t * 30) % 900) + 300; blob([[x, 1720], [x + 200, 1690], [x + 380, 1710], [x + 300, 1760], [x + 60, 1760]], { wash: '#f4f8fc', washA: 0.35, line: false }); }
  }
  WORLD.yunnan = (t, u, cat) => {
    lay(36, () => { sky(t); peaks(t); shaft(SUNY[0] + 200, SUNY[1], 300, 2600, -0.5, 'rgba(255,236,200,1)', 0.12); });
    lay(14, () => { terraces(t); });
    lay(4.5, () => { people(t); trail(t); castShadow(940, 1280, 110, 160, 0.8, 0.2); castShadow(170, 1300, 110, 160, 0.8, 0.2); });
    lay(1, () => { cat(); wall(t); });
    lay(0.7, () => { front(t); motes(18, [300, 700, 1000, 1600], '#fff8e8', t, 24010, { sp: 6, sz: 3, a: 0.4, wob: 8 }); moodDark(400, 1000, 560, 1500, '#1a2a4a', 0.32); });
  };
  DIR.yunnan = {
    outfit: 'yunA', light: { side: -1, rim: '#ffe0b0' }, grade: ['#a8d0c0', 0.06],
    act: () => [[S0.yunnan, 'talk'], [EV.yn_peaks, 'awe'], [EV.yn_tame, 'proud'], [EV.yn_ago, 'grin'], [EV.yn_tight, 'annoyed'], [EV.yn_tibet, 'talk'], [EV.yn_west, 'smug']],
    pose: (t, u, b) => { const tame = t > EV.yn_tame && t < EV.yn_tight, tight = t > EV.yn_tight && t < EV.yn_tibet, west = t > EV.yn_west - 0.2;
      return Object.assign(b, { x: 640, y: 1590, s: 1.16, flip: west, look: t < EV.yn_peaks ? [-0.3, -0.4] : t < EV.yn_tame ? [-0.2, -0.6] : tame ? [0.4, -0.2] : west ? [-0.8, 0] : [0, 0],
        hand: tame ? [170, -330] : tight ? [260, -220] : [150, -200], handF: tight ? [-260, -220] : west ? [-260, -300] : [-130, -200], point: west, prop: tame ? 'stalkP' : undefined, propAng: 0.2, squash: tight ? 0.06 : 0 }); },
    cam: () => [[S0.yunnan, 560, 1060, 0.2], [EV.yn_name, 580, 1080, 0.22], [EV.yn_peaks, 560, 1020, 0.21], [EV.yn_tame, 640, 1130, 0.3], [EV.yn_ago, 660, 1150, 0.31], [EV.yn_tight, 640, 1140, 0.29], [EV.yn_tibet, 560, 1100, 0.24], [EV.yn_west, 520, 1110, 0.25], [S1.yunnan, 520, 1110, 0.26]]
  };
  TRANS_IN.yunnan = { a: 0.15, b: 0.55, runA: 1, fx(k, t, A, B) {      // зерно с ложки летит в камеру и раскрывается треугольником-окном
    const e = sm(k); drawBuf(A, 1 + e * 0.3, 540, 960); const R = e * e * 2600, cx = 540, cy = 760 + (1 - e) * 200, rot = e * 1.2;
    const tri = [[cx + Math.sin(rot) * R, cy - Math.cos(rot) * R], [cx + Math.sin(rot + 2.2) * R * 0.9, cy - Math.cos(rot + 2.2) * R * 0.9], [cx + Math.sin(rot + 4.1) * R * 0.9, cy - Math.cos(rot + 4.1) * R * 0.9]];
    const P = new Path2D(); P.moveTo(...tri[0]); P.lineTo(...tri[1]); P.lineTo(...tri[2]); P.closePath(); scr(() => { ctx.save(); ctx.clip(P); ctx.drawImage(B, 0, 0); ctx.restore(); pencil(tri.concat([tri[0]]), { w: 10 + 30 * (1 - e), col: GR.kernD, pass2: false }); });
  } };
})();
