/* 024 — `pot` (ТОМ-МАЛЫШ, СЛОЙ 3, XIX в.): «В XIX веке картошка выгоняет репу. Репа, ты уволена!» + пауза-гэг.
   Микромир внутри гигантской кастрюли: эмалированные стенки с бликами и каплями, над краем — великанская кухня XIX в. (чугунная плита, окно, медные сковороды, в дымке),
   снизу — рубиновое «озеро» бульона в перспективе: жир-золотинки, листья капусты-паруса, плавающие кубики свёклы, пузыри кипения, пар-облака.
   Сверху из великанского мешка «КАРТОФЕЛЬ · ИЗ АМЕРИКИ» сыплются гигантские кубики картошки — плюх, брызги. Слева на волнах качается репа с мордочкой.
   Том-малыш — поварёнок в колпаке + фартук: прыгает по кубикам картошки, как по кочкам, через озеро. По словам: «XIX» — мешок над краем, первые кубики падают;
   «картошка» — Том-малыш прыгает; «выгоняет» — кубики оттесняют репу к краю; «репу.» — репа грустнеет; «уволена!» — пинок, репа с табличкой «УВОЛЕНА» вылетает за борт;
   пауза-гэг — репа машет платочком и исчезает за краем, Том отряхивает лапы. Главный свет — окно великанской кухни сверху справа; второй — красный рефлекс бульона снизу.
   Переход В сцену — капустный лист раскрывается прожилками на весь кадр. */
(() => {
  EV.pt_sack = LS('s5');
  EV.pt_hop = wtw('s5', 'картошка');
  EV.pt_push = wtw('s5', 'выгоняет');
  EV.pt_sad = wtw('s5', 'репу.');
  EV.pt_point = wtw('s5', 'Репа,');
  EV.pt_kick = wtw('s5', 'уволена!');
  EV.pt_gag = LE('s5') + 0.05;
  SHAKES.push([EV.pt_kick + 0.05, 0.18, 9]);
  KEYW.push('уволена!');
  const STEPS = [[260, 1560], [420, 1520], [570, 1550], [720, 1510]];      // кубики-кочки, по которым прыгает Том-малыш
  const hopP = t => { const k = clamp((t - EV.pt_hop) / Math.max(0.5, EV.pt_sad - EV.pt_hop)) * (STEPS.length - 1), i = Math.min(STEPS.length - 2, Math.floor(k)), f = k - i, a = STEPS[i], b = STEPS[i + 1];
    return [lerp(a[0], b[0], f), lerp(a[1], b[1], f) - Math.sin(f * Math.PI) * 120, f > 0.05 && f < 0.95]; };
  function giant(t) {                                                    // великанская кухня XIX в. над краем (в дымке): плита, окно, медные сковороды, полки
    vgrad(-900, 700, ['#3a2a24', '#5a4034', '#7a5a44']);
    push(1200, -280, 1); rect(-260, -280, 520, 560, { wash: '#a8c0d8', washA: 0.8, w: 16, col: '#e8dcc0' }); pencil([[0, -280], [0, 280]], { w: 14, col: '#e8dcc0', a: 0.8, pass2: false }); pencil([[-260, 0], [260, 0]], { w: 14, col: '#e8dcc0', a: 0.8, pass2: false }); pop();
    for (let i = 0; i < 5; i++) { push(-500 + i * 200, -400, 1); ell(0, 0, 70, 70, { wash: '#c8743a', washA: 0.8, w: 3, col: '#5a2a08' }); pencil([[0, -70], [0, -180]], { w: 10, col: '#8a4a1a', a: 0.8, pass2: false }); pop(); }
    rect(-800, 200, 900, 400, { wash: '#2a2a2e', washA: 0.85, w: 4, col: '#0a0a0a' }); for (let i = 0; i < 3; i++) ell(-640 + i * 260, 210, 90, 18, { wash: '#1a1a1a', washA: 1, line: false });
    glow(1200, -280, 420, 'rgba(255,240,210,1)', 0.25); haze('#e8d8c8', 0.16);
  }
  function wall(t) {                                                     // эмалированная стенка кастрюли: изгиб, синий кант, блики, капли конденсата, край-обод
    const w = blob([[-900, 1200], [-900, 420], [-300, 320], [500, 290], [1300, 320], [2000, 440], [2000, 1200]], { wash: '#f2ece2', washA: 1, w: 3, col: '#5a5048', key: 24500 });
    shadeG(w.path, 0, 290, 0, 1200, '#8a7a6a', 0.45); metalG(w.path, 900, 500, 900, '#ffffff', '#f2ece2', '#a89a8a', 0.45);
    pencil(spline([[-900, 420], [-300, 320], [500, 290], [1300, 320], [2000, 440]], false, 8), { w: 30, col: '#2a5aa8', pass2: false }); pencil(spline([[-900, 408], [-300, 308], [500, 278], [1300, 308], [2000, 428]], false, 8), { w: 6, col: '#8ab0e8', a: 0.7, pass2: false });
    for (let i = 0; i < 3; i++) pencil(spline([[900 + i * 70, 1000], [940 + i * 70, 700], [1000 + i * 70, 420]], false, 5), { w: 12, col: '#ffffff', a: 0.35, pass2: false });
    pencil(spline([[-900, 1000], [500, 960], [2000, 1000]], false, 8), { w: 40, col: '#c8142a', a: 0.35, pass2: false });   // красный «след» уровня бульона на эмали
    for (let i = 0; i < 6; i++) { const x = -500 + i * 420, y = 700 + (i % 2) * 90; push(x, y, 1.3); for (let p = 0; p < 6; p++) { const a = p * 1.047; ell(Math.cos(a) * 34, Math.sin(a) * 34, 30, 22, { wash: i % 2 ? '#d8343a' : '#e86a3a', washA: 0.9, w: 1.4, col: '#6a0a10', rot: a }); } ell(0, 0, 20, 20, { wash: '#f4c040', washA: 1, w: 1.4, col: '#6a4a08' });
      for (const sd of [-1, 1]) { push(sd * 70, 40, 1, sd * 0.5); blob([[0, 0], [sd * 40, -26], [sd * 90, -6], [sd * 50, 20]], { wash: '#3a8a3a', washA: 1, w: 1.4, col: '#1a4a1a' }); pop(); } pop(); }
    for (let i = 0; i < 8; i++) { const r2 = rng(24505 + i), bx = -600 + r2() * 2400, by = 480 + r2() * 500; blob([[0, 0], [10, -6], [18, 4], [8, 12]].map(([a, b]) => [bx + a, by + b]), { wash: '#1a1a24', washA: 0.85, line: false }); }
    const r = rng(24501); for (let i = 0; i < 26; i++) { const x = -600 + r() * 2400, y = 460 + r() * 450, dy = ((t * 26 + i * 40) % 200) * (i % 4 === 0 ? 1 : 0); ell(x, y + dy, 6 + r() * 4, 8 + r() * 5, { wash: '#e8f0f8', washA: 0.6, w: 1, col: '#8a9aaa' }); ell(x - 2, y + dy - 3, 2, 2, { wash: '#ffffff', washA: 0.9, line: false }); }
  }
  function sack(t) {                                                     // великанский мешок над краем: «КАРТОФЕЛЬ · ИЗ АМЕРИКИ», сыплются кубики
    const k = sm(clamp((t - EV.pt_sack + 0.2) / 0.5)); push(1000, lerp(-200, 330, k), 0.9, -0.5);
    const sk = shape(spline([[-200, -500], [-260, -200], [-240, 120], [-100, 200], [100, 200], [240, 120], [260, -200], [200, -500]], false, 8), { wash: '#c8a868', washA: 1, w: 4, col: '#4a3010', key: 24510 }); shadeG(sk.path, 260, 0, -80, 0, '#6a4a20', 0.5);
    for (let i = 0; i < 7; i++) pencil([[-220 + i * 70, -480], [-200 + i * 66, 180]], { w: 2, col: '#8a6a3a', a: 0.5, pass2: false }); rect(-170, -260, 340, 170, { wash: '#f4ecd8', washA: 1, w: 3, col: '#3a2410' }); txt('КАРТОФЕЛЬ', 0, -196, 44, { font: 'Osw', col: '#6a3a10' }); txt('из Америки', 0, -132, 38, { font: 'Hand', col: '#c8202a' }); pop();
  }
  function lake(t, far) {                                                // бульонное «озеро» в перспективе: рубиновая гладь, жир, капуста-паруса, свёкла, пузыри
    if (far) { const g = rect(-900, 980, 2900, 700, { wash: '#a8122a', washA: 1, line: false, key: 24520 }); shadeG(g.path, 0, 980, 0, 1300, '#5a0614', 0.6); shadeG(g.path, 1200, 980, 0, 1400, '#ff6a7a', 0.25);
      const r = rng(24521); for (let i = 0; i < 40; i++) { const x = -700 + r() * 2300, y = 1000 + r() * 300, rr = 6 + r() * 18, wob = Math.sin(t * 1.5 + i) * 4; ell(x + wob, y, rr * 1.6, rr * 0.5, { wash: '#f6b84a', washA: 0.5, line: false }); ell(x + wob - rr * 0.4, y - 2, rr * 0.4, rr * 0.15, { wash: '#fffbe0', washA: 0.8, line: false }); }
      for (let i = 0; i < 5; i++) { const x = -300 + i * 380 + Math.sin(t * 0.5 + i) * 30, y = 1080 + (i % 2) * 60; push(x, y, 0.7 + (i % 2) * 0.2, Math.sin(t + i) * 0.05); blob([[-60, 0], [-40, -90], [10, -130], [50, -70], [60, 0]], { wash: '#e8f0c8', washA: 1, w: 2, col: '#7a9a4a' }); for (let q = 0; q < 4; q++) pencil([[0, 0], [-40 + q * 26, -100 + Math.abs(q - 1.5) * 20]], { w: 1.6, col: '#a8c070', pass2: false }); pop(); }
      for (let i = 0; i < 9; i++) { const x = -400 + i * 230, y = 1200 + (i % 3) * 40; push(x, y + Math.sin(t * 1.4 + i) * 6, 1, i); rect(-22, -12, 44, 24, { wash: '#6a0a24', washA: 1, w: 1.6, col: '#2a0010' }); pop(); }
    } else { const nr = rect(-900, 1640, 2900, 900, { wash: '#9a0e24', washA: 1, line: false, key: 24529 }); shadeG(nr.path, 0, 1640, 0, 2000, '#4a0410', 0.6); const r2 = rng(24528); for (let i = 0; i < 24; i++) { const x = -400 + r2() * 1900, y = 1680 + r2() * 300, rr = 10 + r2() * 26; ell(x + Math.sin(t * 1.3 + i) * 5, y, rr * 1.7, rr * 0.5, { wash: '#f6b84a', washA: 0.55, line: false }); ell(x - rr * 0.4, y - 3, rr * 0.5, rr * 0.16, { wash: '#fffbe0', washA: 0.85, line: false }); }
      for (let i = 0; i < 4; i++) { push(-60 + i * 380, 1820 + (i % 2) * 50, 1.2, i * 0.8 + Math.sin(t + i) * 0.1); rect(-26, -14, 52, 28, { wash: '#6a0a24', washA: 1, w: 1.6, col: '#2a0010' }); pop(); }
      const r = rng(24530); for (let i = 0; i < 7; i++) { const ph = (t * 1.2 + r()) % 1, x = -200 + r() * 1500, y = 1660 + r() * 120, rr = 18 * (0.4 + ph); if (ph < 0.85) ell(x, y - ph * 30, rr, rr * 0.8, { line: true, w: 2, col: '#ffb0b8', a: 0.6 }); else for (let q = 0; q < 5; q++) ell(x + Math.cos(q * 1.26) * rr * 1.4, y - 30 + Math.sin(q * 1.26) * rr, 3, 3, { wash: '#ffd0d8', washA: 0.7, line: false }); } }
  }
  function cubes(t) {                                                    // падающие и плавающие кубики картошки (кочки), брызги «ПЛЮХ»
    const drops = [[300, EV.pt_sack + 0.2], [700, EV.pt_sack + 0.45], [1000, EV.pt_sack + 0.7], [-20, EV.pt_sack + 0.9]];
    drops.forEach(([x, t0], i) => { if (t < t0) return; const k = clamp((t - t0) / 0.5); if (k < 1) potatoCube(lerp(980, x, k), lerp(150, 1480, k * k), 2.0, k * 6, { key: 24540 + i }); else { potatoCube(x, 1520 + Math.sin(t * 2 + i) * 6, 2.0, Math.sin(t + i) * 0.05, { key: 24540 + i, wet: 1 });
      if (t - t0 < 1.0) { const s = (t - t0 - 0.5) / 0.5; for (let q = 0; q < 10; q++) { const a = -3.1 + q / 9 * 3.1; ell(x + Math.cos(a) * s * 160, 1480 + Math.sin(a) * s * 140 + s * s * 140, 10 * (1 - s) + 3, 10 * (1 - s) + 3, { wash: '#c8142a', washA: 1 - s, line: false }); } } } });
    STEPS.forEach(([x, y], i) => { const dip = hopLand(t, i) ? 10 : 0; potatoCube(x, y + 40 + dip + Math.sin(t * 2 + i) * 4, 1.9, Math.sin(t * 1.3 + i) * 0.04, { key: 24550 + i, wet: 1 }); ell(x, y + 110, 90, 16, { wash: '#5a0614', washA: 0.4, line: false }); });
  }
  function hopLand(t, i) { const k = clamp((t - EV.pt_hop) / Math.max(0.5, EV.pt_sad - EV.pt_hop)) * (STEPS.length - 1); return Math.abs(k - i) < 0.12 && t > EV.pt_hop; }
  function turnip(t) {                                                   // репа на волнах: оттесняется, грустит, вылетает за борт с табличкой
    const push2 = clamp((t - EV.pt_push) / 0.8), kick = clamp((t - EV.pt_kick - 0.05) / 0.9), gone = t > EV.pt_gag + 0.6;
    if (gone) return; let x = lerp(980, 900, push2), y = 1440 + Math.sin(t * 2) * 10, r = Math.sin(t * 1.5) * 0.08;
    if (kick > 0) { x = lerp(900, 1500, kick); y = lerp(1440, 500, Math.sin(kick * 1.4)) ; r = kick * 6; }
    turnipFace(x, y, 1.5, r, { sad: t > EV.pt_sad, tear: t > EV.pt_sad ? t : 0, sign: kick > 0, key: 24560 });
    if (kick > 0 && kick < 0.5) { push(1000, 1200, popK(t, EV.pt_kick, 0.3), -0.1); txt('ПИНОК!', 0, 0, 70, { font: 'Osw', col: '#c8202a' }); pop(); }
  }
  function front(t) {                                                    // передний план: край деревянной ложки слева сверху, пар-облака, крупные пузыри
    push(-120, 300, 1, 0.5); pencil([[0, 0], [0, 900]], { w: 60, col: '#c89a5a', pass2: false }); pencil([[-20, 0], [-20, 900]], { w: 10, col: '#f0c890', a: 0.6, pass2: false }); pop();
    for (let i = 0; i < 4; i++) { const ph = (t * 0.1 + i / 4) % 1, x = -200 + ((i * 397) % 1500), y = 1500 - ph * 1100; blob([[x - 160, y], [x - 100, y - 70], [x, y - 90], [x + 110, y - 60], [x + 170, y], [x + 60, y + 40], [x - 80, y + 40]], { wash: '#fbf4f0', washA: 0.25 * Math.sin(ph * 3.14), line: false }); }
  }
  WORLD.pot = (t, u, cat) => {
    lay(22, () => { giant(t); });
    lay(8, () => { wall(t); sack(t); });
    lay(3, () => { lake(t, true); shaft(1200, -200, 460, 2000, -0.15, 'rgba(255,240,210,1)', 0.12); });
    lay(1, () => { lightPool(560, 1560, 700, 120, 'rgba(255,120,130,1)', 0.22); castShadow(560, 1600, 300, 100, -0.4, 0.25); lake(t, false); cubes(t); turnip(t); cat(); });
    lay(0.7, () => { front(t); motes(16, [200, 800, 1000, 1700], '#fff4f0', t, 24580, { sp: -20, sz: 4, a: 0.35, wob: 10 }); moodDark(600, 1200, 520, 1500, '#1a0410', 0.4); });
  };
  DIR.pot = {
    outfit: 'chefB', light: { side: 1, rim: '#ffd0c8' }, grade: ['#ff8080', 0.06],
    act: () => [[S0.pot, 'awe'], [EV.pt_hop, 'grin'], [EV.pt_push, 'smug'], [EV.pt_sad, 'suspicious'], [EV.pt_point, 'annoyed'], [EV.pt_kick, 'laugh'], [EV.pt_gag + 0.3, 'smug']],
    pose: (t, u, b) => { const [hx, hy, air] = t > EV.pt_hop ? hopP(t) : [STEPS[0][0], STEPS[0][1]], kick = t > EV.pt_kick - 0.15 && t < EV.pt_kick + 0.35, pt = t > EV.pt_point && t < EV.pt_kick - 0.15, dust = t > EV.pt_gag;
      return Object.assign(b, { x: hx, y: hy, s: 0.6, flip: false, rot: kick ? -0.25 : air ? -0.12 : 0, walk: air ? t * 10 : undefined, look: [0.8, -0.1],
        hand: pt ? [220, -330] : dust ? [60, -200 + Math.sin(t * 20) * 20] : [160, -260], handF: dust ? [-40, -200 - Math.sin(t * 20) * 20] : air ? [-200, -360] : [-150, -240], point: pt, tailUp: air || kick, squash: hopLand(t, 1) || hopLand(t, 2) ? 0.08 : 0 }); },
    cam: () => [[S0.pot, 560, 1280, 0.24], [EV.pt_hop, 480, 1320, 0.26], [EV.pt_push, 600, 1300, 0.26], [EV.pt_sad, 760, 1300, 0.27], [EV.pt_kick, 800, 1250, 0.27], [EV.pt_gag, 800, 1200, 0.25], [S1.pot, 780, 1220, 0.26]]
  };
  TRANS_IN.pot = { a: 0.12, b: 0.55, runA: 1, fx(k, t, A, B) {          // капустный лист: раскрывается прожилками на весь кадр, створки расходятся — внутри кастрюля
    const e = sm(k), open = clamp((e - 0.45) / 0.55); drawBuf(e < 0.45 ? A : B, 1, 540, 960);
    scr(() => { const g = Math.min(1, e / 0.45); for (const sd of [-1, 1]) { push(540 + sd * open * 700, 960, 1); const lf = blob([[0, -1100 * g], [sd * 700 * g, -700 * g], [sd * 800 * g, 0], [sd * 650 * g, 800 * g], [0, 1100 * g]], { wash: '#d8e8a8', washA: 1, w: 4, col: '#5a7a2a' });
      shadeG(lf.path, 0, 0, sd * 700, 0, '#8ab050', 0.5); pencil([[0, -1100 * g], [0, 1100 * g]], { w: 26 * g, col: '#f4f8e0', pass2: false }); for (let i = 0; i < 7; i++) pencil(spline([[0, -800 * g + i * 260 * g], [sd * 300 * g, -900 * g + i * 260 * g], [sd * 700 * g, -860 * g + i * 260 * g]], false, 5), { w: 8 * g, col: '#f4f8e0', a: 0.8, pass2: false }); pop(); } });
  } };
})();
