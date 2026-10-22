/* 002 — `lab`: «Шестьдесят третий год. Корнелл, США. Профессор Бейкер колдует над курицей.» Лаборатория пищевых наук 1963: мятный кафель, окно на осенний кампус
   с часовой башней, шкаф с банками, вытяжка, доска «CHICKEN STICK?», клетка с курами. Профессор Бейкер (очки, бабочка) крутит мясорубку, студент Маршалл у весов.
   Том-лаборант с колбой. На «колдует» колбы взрываются цветным паром, куры кудахчут, летят перья. Переход В сцену: гигантский УКУС съедает кадр аукциона (два укуса + крошки). */
(() => {
  EV.lb_cornell = wtw('s1', 'Корнелл,');
  EV.lb_baker = wtw('s1', 'Бейкер');
  EV.lb_magic = wtw('s1', 'колдует');
  SHAKES.push([EV.lb_magic + 0.1, 0.25, 8]);
  KEYW.push('курицей.');

  function room(t) {                                                   // мятный кафель, окно с кампусом, доска
    vgrad(-600, 1600, ['#8ec8b4', '#a8d8c4', '#7ab4a0']);
    for (let r = 0; r < 26; r++) for (let i = 0; i < 16; i++) { const x = -260 + i * 100, y = 500 + r * 50; if (y > 1500) continue; rect(x + 2, y + 2, 96, 46, { wash: (r + i) % 7 ? '#b8e4d2' : '#9ad0bc', washA: 0.9, w: 1, col: '#5a8a78', a: 0.5 }); }
    rect(-300, 470, 1700, 24, { wash: '#2a6a5a', washA: 1, w: 2, col: '#123a30' });
    const w = rect(560, 90, 420, 360, { wash: '#f0c890', washA: 1, w: 4, col: '#2a2a24', key: 2100 }); ctx.save(); ctx.clip(w.path); vgrad(90, 450, ['#9ac8e8', '#f6d8a8']);
    hills(400, 60, '#c8743a', 1.3); hills(430, 30, '#a85a2a', 2.2); push(800, 400, 1); rect(-24, -220, 48, 220, { wash: '#b8a890', washA: 1, w: 2, col: '#3a3024' }); poly([[-30, -220], [30, -220], [0, -280]], { wash: '#6a5a4a', washA: 1, w: 2, col: '#2a2018' }); ell(0, -170, 14, 14, { wash: '#f8f0d8', washA: 1, w: 1.6, col: '#3a3024' }); pop();
    for (let i = 0; i < 9; i++) { const r = rng(2101 + i); ell(580 + r() * 380, 360 + r() * 70, 30 + r() * 30, 20 + r() * 14, { wash: ['#e8742a', '#d8a030', '#b8402a'][i % 3], washA: 0.9, line: false }); }
    motes(14, [560, 90, 980, 450], '#e8742a', t, 2102, { sp: 40, vx: 30, sz: 5, a: 0.8 }); ctx.restore();
    pencil([[770, 90], [770, 450]], { w: 8, col: '#2a2a24', pass2: false }); pencil([[560, 270], [980, 270]], { w: 8, col: '#2a2a24', pass2: false });
    const b = rect(540, 500, 440, 290, { wash: '#2a3a30', washA: 1, w: 6, col: '#6a4a2a', key: 2103 }); ctx.save(); ctx.clip(b.path); for (let i = 0; i < 8; i++) { const r = rng(2104 + i); pencil([[560 + r() * 380, 520 + r() * 250], [580 + r() * 400, 530 + r() * 250]], { w: 8, col: '#e8f0e0', a: 0.08, pass2: false }); } ctx.restore();
    txt('CHICKEN STICK?', 760, 550, 46, { font: 'Hand', col: '#f2f6ea' }); push(640, 650, 0.6); nugget(0, 0, 1, 0, { kind: 'stick', key: 2105 }); pop(); pencil([[700, 650], [760, 650]], { w: 3, col: '#f2f6ea', pass2: false });
    txt('NaCl + уксус', 860, 630, 30, { font: 'Hand', col: '#f2f6ea' }); txt('−10°F ×2', 860, 690, 30, { font: 'Hand', col: '#f2e090' }); txt('?!', 940, 750, 40, { font: 'Hand', col: '#f28a6a' });
  }
  function shelves(t) {                                                // шкаф: банки со специями и реактивами, ящик кур
    for (const y of [640, 820]) { rect(-160, y, 520, 18, { wash: '#8a6a44', washA: 1, w: 2, col: '#2a1a0c' }); for (let i = 0; i < 7; i++) { const x = -130 + i * 72, h = 70 + (i * 37 % 40), c = ['#e8b53a', '#d9482b', '#f2ece0', '#7a9a3a', '#b8733a', '#f6f0d8', '#5a8aa8'][i];
      const j = rect(x, y - h, 54, h, { wash: '#e8f2ee', washA: 0.6, w: 2, col: '#3a4a44' }); rect(x + 4, y - h * 0.7, 46, h * 0.7 - 2, { wash: c, washA: 0.85, line: false }); rect(x - 2, y - h - 12, 58, 14, { wash: '#6a6a60', washA: 1, w: 1.6 }); rect(x + 8, y - h * 0.5, 38, 22, { wash: '#f6f0e0', washA: 1, w: 1, col: '#5a5a50' }); } }
    const cx = 1000, cy = 1060; rect(cx - 170, cy - 200, 340, 200, { wash: '#c8a868', washA: 1, w: 2.6, col: '#3a2a14', key: 2110 });
    for (let i = 0; i < 2; i++) { const hop = t > EV.lb_magic ? Math.abs(Math.sin(t * 14 + i)) * 30 : Math.abs(Math.sin(t * 3 + i * 2)) * 6, x = cx - 80 + i * 150, y = cy - 30 - hop;
      blob([[x - 50, y], [x - 56, y - 50], [x - 20, y - 90], [x + 20, y - 96], [x + 46, y - 70], [x + 50, y - 20]], { wash: '#f6f2e8', washA: 1, w: 2.2, col: '#3a2a14' }); poly([[x + 20, y - 96], [x + 26, y - 120], [x + 34, y - 100], [x + 42, y - 116], [x + 44, y - 90]], { wash: '#c8281e', washA: 1, w: 1.6 });
      poly([[x + 44, y - 74], [x + 72, y - 66], [x + 44, y - 60]], { wash: '#e8b53a', washA: 1, w: 1.6 }); ell(x + 30, y - 78, 5, 6, { wash: '#1a0a04', washA: 1, line: false }); if (t > EV.lb_magic) { ell(x + 60, y - 66, 8, 5, { wash: '#4a1a10', washA: 1, line: false }); } }
    for (let i = 0; i < 9; i++) pencil([[cx - 160 + i * 40, cy - 200], [cx - 160 + i * 40, cy]], { w: 4, col: '#6a4a24', pass2: false });
    if (t > EV.lb_magic) bubbleTag('КО-КО?!', cx + 40, cy - 280, t, EV.lb_magic + 0.1, '#e8b53a', 40, 0.06);
  }
  function bench(t) {                                                  // лабораторный стол: мясорубка, весы, колбы на горелках, курица на подносе
    const b = rect(-200, 1330, 1500, 60, { wash: '#2a2a2a', washA: 1, w: 3, col: '#000', key: 2120 }); rect(-200, 1390, 1500, 600, { wash: '#6a7a72', washA: 1, w: 2.4, col: '#1a2a24' }); for (let i = 0; i < 8; i++) { rect(-180 + i * 190, 1420, 170, 220, { wash: '#7a8a82', washA: 1, w: 2, col: '#1a2a24' }); ell(-95 + i * 190, 1450, 14, 6, { wash: '#c8ccd0', washA: 1, w: 1.4 }); }
    const crank = t * (t > EV.lb_baker ? 9 : 2); push(240, 1330, 1); rect(-30, -60, 60, 60, { wash: '#9aa0a6', washA: 1, w: 2.4, col: '#2a2e34' }); const g = shape(spline([[-60, -150], [60, -150], [70, -100], [-70, -100]], true, 4), { wash: '#b8bec4', washA: 1, w: 2.6, col: '#2a2e34' }); metalG(g.path, -20, -140, 90, '#ffffff', '#b8bec4', '#4a5058');
    poly([[-40, -150], [40, -150], [60, -220], [-60, -220]], { wash: '#9aa0a6', washA: 1, w: 2.4, col: '#2a2e34' }); ell(70, -124, 14, 30, { wash: '#8a9096', washA: 1, w: 2 }); push(84, -124, 1, crank); pencil([[0, 0], [0, -70]], { w: 8, col: '#4a5058' }); ell(0, -74, 12, 12, { wash: '#a8241e', washA: 1, w: 2 }); pop();
    for (let i = 0; i < 5; i++) { const yy = -96 + ((t * 80 + i * 20) % 80); pencil(spline([[-80 + i * 6, yy], [-90 + i * 6, yy + 20], [-84 + i * 6, yy + 40]], false, 4), { w: 6, col: FN.raw, pass2: false }); } pop();
    mince(130, 1330, 0.7, t, { key: 2121 });
    push(420, 1330, 1); rect(-60, -20, 120, 20, { wash: '#c8ccd0', washA: 1, w: 2, col: '#2a2e34' }); pencil([[0, -20], [0, -80]], { w: 6, col: '#4a5058' }); ell(0, -86, 70, 12, { wash: '#d8dce0', washA: 1, w: 2 }); ell(0, -130, 30, 30, { wash: '#f6f2e6', washA: 1, w: 2, col: '#2a2e34' }); push(0, -130, 1, Math.sin(t * 3) * 0.6); pencil([[0, 0], [0, -24]], { w: 2, col: '#d9482b', pass2: false }); pop(); nugget(0, -104, 0.4, 0, { kind: 'stick', key: 2122, raw: 1 }); pop();
    const boom = t > EV.lb_magic; [[700, '#e8b53a'], [790, '#d9482b'], [880, '#7ac24a']].forEach(([x, c], i) => { push(x, 1330, 1); pencil([[-30, 0], [-20, -60]], { w: 4, col: '#4a4a4a', pass2: false }); pencil([[30, 0], [20, -60]], { w: 4, col: '#4a4a4a', pass2: false });
      blob([[-10, -50], [0, -80 * flick(t, i)], [10, -50]], { wash: '#5aa8ff', washA: 0.9, line: false }); const f = shape(spline([[-12, -150], [12, -150], [12, -120], [40, -70], [0, -56], [-40, -70], [-12, -120]], true, 6), { wash: '#e8f4f6', washA: 0.5, w: 2.2, col: '#3a4a50' });
      ctx.save(); ctx.clip(f.path); ctx.fillStyle = c; ctx.globalAlpha = 0.85; ctx.fillRect(-50, -100 + Math.sin(t * 6 + i) * 4, 100, 60); ctx.restore(); for (let q = 0; q < 4; q++) { const k = (t * 1.5 + q / 4 + i * 0.3) % 1; ell(Math.sin(k * 9 + i) * 8, -110 - k * 50, 4 * (1 - k) + 2, 4 * (1 - k) + 2, { wash: '#ffffff', washA: 0.7, line: false }); }
      if (boom) { const k = clamp((t - EV.lb_magic) / 1.2); for (let q = 0; q < 6; q++) { const r = rng(2130 + i * 10 + q); ell(Math.sin(q + t) * 30 * k + (r() - 0.5) * 60 * k, -170 - k * (200 + r() * 220), 40 + k * 60, 34 + k * 50, { wash: c, washA: 0.35 * (1 - k * 0.7), line: false }); } } pop(); });
    push(1060, 1330, 1); ell(0, -10, 110, 22, { wash: '#c8ccd0', washA: 1, w: 2.4, col: '#2a2e34' }); blob([[-70, -20], [-80, -70], [-40, -110], [30, -116], [80, -80], [74, -24]], { wash: '#f2d8b8', washA: 1, w: 2.4, col: '#5a3a1a', key: 2131 }); for (const sd of [-1, 1]) pencil([[sd * 60, -40], [sd * 100, -60]], { w: 18, col: '#f2d8b8' }); pop();
    if (boom) for (let i = 0; i < 12; i++) { const r = rng(2140 + i), k = clamp((t - EV.lb_magic) / 2.2), x = 1000 + (r() - 0.5) * 300 + Math.sin(t * 3 + i) * 40, y = 900 - k * (r() * 400) + k * k * 900; push(x, y, 1, t * 2 + i); blob([[0, -14], [6, 0], [0, 16], [-6, 0]], { wash: '#fbf6ea', washA: 1, w: 1.2, col: '#8a7a64' }); pop(); }
  }
  function people(t) {                                                 // профессор Бейкер у мясорубки, студент Маршалл с блокнотом
    human(240, 1330, 1.25, t, { body: '#f4f6f2', bodyD: '#a8b0ac', hair: '#5a4a3a', face: t > EV.lb_magic ? 'grin' : 'smile', armL: 'hold', armR: t > EV.lb_baker ? 'swing' : 'hold', seed: 71, look: 0.5 });
    push(240, 1330 + (-238 - 46) * 1.25 - 5, 1.25); for (const sd of [-1, 1]) ell(sd * 15, 0, 13, 11, { line: true, w: 3, col: '#1a1a1a' }); pencil([[-2, 0], [2, 0]], { w: 3, col: '#1a1a1a', pass2: false }); pop();
    push(240, 1330 - 230 * 1.25, 1.25); poly([[-18, -8], [0, 0], [-18, 8]], { wash: '#2a3a7a', washA: 1, w: 1.4 }); poly([[18, -8], [0, 0], [18, 8]], { wash: '#2a3a7a', washA: 1, w: 1.4 }); pop();
    if (t > EV.lb_baker - 0.1) bubbleTag('ПРОФ. РОБЕРТ БЕЙКЕР', 260, 830, t, EV.lb_baker - 0.1, '#2b2622', 34, -0.03);
    human(500, 1330, 1.1, t, { body: '#c8a868', hair: '#2a1a0a', face: t > EV.lb_magic ? 'shock' : 'calm', armL: 'hold', armR: 'hold', prop: 'scroll', seed: 72, flip: -1, look: -0.5 });
  }
  WORLD.lab = (t, u, cat) => {
    lay(18, () => { room(t); haze('#d8f0e4', 0.06); }); lay(4, () => { shelves(t); people(t); });
    lay(1.6, () => { bench(t); });
    lay(1, () => { cat(); });
    lay(0.6, () => { if (t > EV.lb_magic) { const k = clamp((t - EV.lb_magic) / 0.6); glow(780, 1100, 500, 'rgba(255,220,140,1)', 0.25 * (1 - k)); } });
  };
  DIR.lab = {
    outfit: 'labcoat', light: { side: 1, rim: '#fff4d0' }, grade: ['#6ac8a8', 0.08],
    act: () => [[S0.lab, 'awe'], [EV.lb_cornell, 'proud'], [EV.lb_baker, 'talk'], [EV.lb_magic, 'shock'], [EV.lb_magic + 0.6, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 720, y: 1700, s: 1.12, flip: true, look: t < EV.lb_baker ? [0.3, -0.4] : [0.8, 0], hand: [100, -260 + (t > EV.lb_magic ? Math.sin(t * 20) * 10 : 0)], handF: [-80, -200], prop: 'flaskP', tailUp: t > EV.lb_magic + 0.5 }),
    cam: () => [[S0.lab, 540, 900, 0.3], [S0.lab + 0.6, 560, 1000, 0.08, 'x'], [EV.lb_baker, 420, 1060, 0.16], [EV.lb_magic, 700, 1080, 0.14], [S1.lab, 740, 1120, 0.22]]
  };
  // ---------------------------------------------------------------- переход: гигантский укус съедает кадр (два укуса, следы зубов, крошки панировки)
  function biteP(cx, cy, R) { const P = new Path2D(); P.arc(cx, cy, Math.max(1, R), 0, 6.3); for (let i = 0; i < 11; i++) { const a = i / 11 * 6.283; P.moveTo(cx + Math.cos(a) * R + 0.4 * R * 0.18, cy + Math.sin(a) * R); P.arc(cx + Math.cos(a) * R, cy + Math.sin(a) * R, R * 0.18, 0, 6.3); } return P; }
  TRANS_IN.lab = { a: 0.15, b: 0.55, runA: 0, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const k1 = sm(clamp(k / 0.45)), k2 = sm(clamp((k - 0.5) / 0.5)), B1 = [1180, 760, k1 * 820], B2 = [-80, 1200, k2 * 1350];
    for (const [cx, cy, R] of [B1, B2]) if (R > 2) { const P = biteP(cx, cy, R); inPath(P, () => drawBuf(B, 1.06 - 0.06 * k, 540, 960));
      scr(() => { for (let i = 0; i < 40; i++) { const r = rng(2150 + i + cx), a = r() * 6.283, d = R * (1 + r() * 0.12); ell(cx + Math.cos(a) * d, cy + Math.sin(a) * d, 8 + r() * 10, 6 + r() * 8, { wash: i % 3 ? FN.crust : FN.crustL, washA: 1, w: 1.4, col: '#4a2408', rot: r() * 3 }); } }); }
    scr(() => { for (const [t0, x, y] of [[0.05, 900, 800], [0.55, 200, 1150]]) if (k > t0 && k < t0 + 0.4) { const kk = (k - t0) / 0.4; for (let i = 0; i < 26; i++) { const r = rng(2190 + i + x), a = r() * 6.283, v = 300 + r() * 700; ell(x + Math.cos(a) * v * kk, y + Math.sin(a) * v * kk + 600 * kk * kk, 9, 7, { wash: FN.crust, washA: 1 - kk, w: 1, col: '#4a2408', a: 1 - kk }); } } });
  } };
})();
