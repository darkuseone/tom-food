/* 023 — `grain` (ТОМ-МАЛЫШ, раз за ролик): «Присмотрись к зерну: три грани, как у пирамиды. У пшеницы таких нет.» + пауза-гэг.
   Микромир внутри кипящего чугунка: по горизонту — изогнутая чугунная стенка с бликами и каплями, над краем — великанская изба в дымке (окно, огонь печи),
   сверху в отверстие падает тёплый столб света. Внизу — «пустыня» из трёхгранных зёрен-пирамид в перспективе (дальние мелкие, ближние — скалы),
   между ними пузыри кипения лопаются, пар-облака поднимаются, слева тает кусок масла-солнце и растекается золотым озером.
   Том-малыш — альпинист (красная штормовка, шапка с помпоном и очками, моток верёвки + фартук) с ложкой-ледорубом. По словам: «Присмотрись» —
   Том-малыш карабкается по левой грани гигантского зерна; «три грани,» — грани по очереди подсвечиваются цифрами 1-2-3; «пирамиды.» — на вершине
   втыкает флажок «ВЕРШИНА»; «пшеницы» — мимо проплывает овальное зерно пшеницы с бороздкой и биркой «ПШЕНИЦА: 0 граней»; «нет.» — Том-малыш
   кивает. Пауза-гэг: зерно под ним переворачивается, и он съезжает по грани, как с горки, в масляное озеро — «ПЛЮХ!», брызги масла.
   Переход В сцену: пар из чугунка заволакивает кадр и рассеивается (наезд в чугунок). */
(() => {
  EV.gr_look = LS('s10');
  EV.gr_faces = wtw('s10', 'грани,');
  EV.gr_top = wtw('s10', 'пирамиды.');
  EV.gr_wheat = wtw('s10', 'пшеницы');
  EV.gr_no = wtw('s10', 'нет.');
  EV.gr_gag = LE('s10') + 0.08;
  EV.gr_splash = EV.gr_gag + 0.5;
  SHAKES.push([EV.gr_splash, 0.22, 10]);
  KEYW.push('грани,', 'пирамиды.');
  const G = { x: 560, y: 1560, s: 14 };                                   // гигантское зерно: вершина (560,1140), углы (252,1756) (868,1756)
  const climb = t => sm(clamp((t - EV.gr_look) / Math.max(0.3, EV.gr_top - EV.gr_look)));
  const slide = t => clamp((t - EV.gr_gag) / 0.5);
  function giant(t) {                                                    // великанская изба над краем чугунка (размыто), окно, огонь
    vgrad(-900, 700, ['#3a2416', '#6a4428', '#8a5a34']);
    for (let i = 0; i < 6; i++) rect(-800, -900 + i * 220, 2700, 210, { wash: i % 2 ? '#7a5030' : '#6a4428', washA: 0.8, line: false });
    push(1150, -300, 1); rect(-220, -260, 440, 440, { wash: '#8aa8d8', washA: 0.7, w: 14, col: '#e8dcc0' }); pencil([[0, -260], [0, 180]], { w: 12, col: '#e8dcc0', a: 0.8 }); pop();
    glow(-200, 200, 380, 'rgba(255,150,60,1)', 0.3); haze('#ffd8b0', 0.12);
  }
  function wall(t) {                                                     // чугунная стенка: изогнутая, блики, капли конденсата, край-обод
    const w = blob([[-800, 1100], [-800, 400], [-300, 300], [500, 270], [1300, 300], [1900, 420], [1900, 1100]], { wash: GR.iron, washA: 1, w: 3, col: GR.ironD, key: 24300 });
    shadeG(w.path, 0, 270, 0, 1100, '#000000', 0.45); metalG(w.path, 300, 500, 900, '#6a6670', GR.iron, GR.ironD, 0.55);
    pencil(spline([[-800, 400], [-300, 300], [500, 270], [1300, 300], [1900, 420]], false, 8), { w: 26, col: '#4a4650', pass2: false }); pencil(spline([[-800, 390], [-300, 290], [500, 260], [1300, 290], [1900, 410]], false, 8), { w: 5, col: '#a8a4b0', a: 0.7, pass2: false });
    for (let i = 0; i < 4; i++) pencil(spline([[-700 + i * 60, 900], [-650 + i * 60, 600], [-560 + i * 60, 380]], false, 5), { w: 8, col: '#8a8690', a: 0.25, pass2: false });
    const r = rng(24301); for (let i = 0; i < 30; i++) { const x = -600 + r() * 2300, y = 420 + r() * 500, dy = ((t * 30 + i * 40) % 200) * (i % 4 === 0 ? 1 : 0); ell(x, y + dy, 5 + r() * 4, 7 + r() * 5, { wash: '#c8d8e8', washA: 0.6, w: 1, col: '#5a6a7a' }); ell(x - 2, y + dy - 3, 2, 2, { wash: '#ffffff', washA: 0.9, line: false }); }
  }
  function steamClouds(t, near) {                                        // пар-облака поднимаются
    const n = near ? 4 : 7; for (let i = 0; i < n; i++) { const ph = (t * (near ? 0.12 : 0.08) + i / n) % 1, x = -300 + ((i * 397) % 1700) + Math.sin(t + i) * 40, y = (near ? 1500 : 1100) - ph * 1100;
      blob([[x - 160, y], [x - 100, y - 70], [x, y - 90], [x + 110, y - 60], [x + 170, y], [x + 60, y + 40], [x - 80, y + 40]], { wash: '#f8f4ee', washA: (near ? 0.25 : 0.4) * Math.sin(ph * 3.14), line: false }); }
  }
  function dunes(t, z) {                                                 // поле зёрен-пирамид в перспективе, пузыри кипения
    if (z === 'far') { const g = rect(-900, 900, 2900, 500, { wash: '#7a4218', washA: 1, line: false, key: 24310 }); shadeG(g.path, 0, 900, 0, 1400, '#c88a4a', 0.35); grainField(-700, 920, 1800, 1100, 120, 24311, 1.0); grainField(-700, 1100, 1800, 1300, 70, 24312, 2.2); }
    else { grainField(-600, 1260, 1700, 1440, 40, 24313, 3.6); for (const [x, y, s, r] of [[-120, 1460, 6.5, -0.2], [1180, 1440, 7, 0.3], [40, 1380, 4, 0.5], [1020, 1360, 4.5, -0.4]]) { grainB(x, y, s, r, { key: 24320 + x }); castShadow(x, y + 14 * s, 26 * s, 50, 0.3, 0.2); } }
    const r = rng(24330); for (let i = 0; i < (z === 'far' ? 10 : 6); i++) { const ph = (t * 1.3 + r()) % 1, x = -400 + r() * 2000, y = (z === 'far' ? 1000 : 1320) + r() * 120; const rr = (z === 'far' ? 10 : 22) * (0.4 + ph);
      if (ph < 0.85) ell(x, y - ph * 40, rr, rr * 0.8, { wash: '#fff4e0', washA: 0.4, w: 1.2, col: '#c8a888' }); else for (let q = 0; q < 5; q++) ell(x + Math.cos(q * 1.26) * rr * 1.4, y - 40 + Math.sin(q * 1.26) * rr, 3, 3, { wash: '#ffffff', washA: 0.7, line: false }); }
  }
  function butter(t) {                                                   // кусок масла-«солнце» тает, золотое озеро, брызги «ПЛЮХ»
    push(940, 1700, 1); const lk = ell(0, 40, 260, 54, { wash: GR.butter, washA: 0.95, w: 2, col: GR.butterD, key: 24340 }); shadeG(lk.path, 0, -14, 0, 94, '#fff4c0', 0.5); for (let i = 0; i < 5; i++) ell(-160 + i * 80, 30 + Math.sin(t * 2 + i) * 6, 40, 6, { wash: '#fffbe0', washA: 0.7, line: false });
    const mb = rect(-60, -100, 160, 110, { wash: GR.butter, washA: 1, w: 2.4, col: GR.butterD }); shadeG(mb.path, 100, 0, -60, 0, '#c89a20', 0.45); pencil([[-50, -90], [90, -90]], { w: 6, col: '#fffbe0', a: 0.8, pass2: false }); for (let i = 0; i < 4; i++) pencil([[-40 + i * 40, 6], [-44 + i * 40, 30 + (t * 20 + i * 7) % 20]], { w: 8, col: GR.butter, pass2: false }); pop();
    if (t > EV.gr_splash) { const k = clamp((t - EV.gr_splash) / 0.7); for (let i = 0; i < 12; i++) { const a = -3.14 + i / 11 * 3.14; ell(880 + Math.cos(a) * k * 240, 1720 + Math.sin(a) * k * 200 + k * k * 220, 14 * (1 - k) + 4, 12 * (1 - k) + 3, { wash: GR.butter, washA: 1 - k, w: 1, col: GR.butterD }); }
      if (k < 0.85) { push(880, 1460, popK(t, EV.gr_splash, 0.3), -0.08); txt('ПЛЮХ!', 0, 0, 90, { font: 'Osw', col: '#c8243a' }); pop(); } }
  }
  function giantGrain(t) {                                               // гигантское зерно-пирамида: 3 грани с фактурой, подсветка граней цифрами, флажок
    const rot = t > EV.gr_gag ? Math.sin(clamp((t - EV.gr_gag) / 0.4) * 3.14) * 0.06 : 0; push(G.x, G.y, G.s, rot);
    const L = poly([[0, -30], [-22, 14], [0, 22]], { wash: '#b8763a', washA: 1, w: 3 / G.s, col: GR.kernD, key: 24350 }); const R = poly([[0, -30], [0, 22], [22, 14]], { wash: '#8a4a1e', washA: 1, w: 3 / G.s, col: GR.kernD, key: 24351 });
    shadeG(L.path, -22, 14, 0, -30, '#f0b878', 0.4); shadeG(R.path, 22, 14, 0, -20, '#3a1a08', 0.4);
    for (let i = 0; i < 9; i++) { pencil([[-2 - i * 2, -24 + i * 4.4], [-1 - i * 0.4, 20 - i * 0.2]], { w: 1.2, col: '#d89a5a', a: 0.4, pass2: false }); pencil([[2 + i * 2, -24 + i * 4.4], [1 + i * 0.4, 20 - i * 0.2]], { w: 1.2, col: '#5a2a08', a: 0.35, pass2: false }); }
    const r = rng(24352); for (let i = 0; i < 24; i++) { const u = r(), v = r() * (1 - u); const sd = r() < 0.5 ? -1 : 1; ell(sd * 22 * u * 0.9, -30 + 44 * (u + v) * 0.9, 0.5, 0.3, { wash: sd < 0 ? '#e8b080' : '#5a2a10', washA: 0.7, line: false }); }
    pencil([[0, -29], [0, 21]], { w: 4 / G.s * 3, col: '#f8d8a8', a: 0.75, pass2: false }); ell(-7, -8, 1.6, 6, { wash: '#ffffff', washA: 0.4, line: false, rot: 0.3 });
    pop();
    if (t > EV.gr_faces - 0.05 && t < EV.gr_top + 0.6) { const n = Math.min(3, 1 + Math.floor((t - EV.gr_faces) / 0.22)); const pts = [[430, 1520], [690, 1520], [560, 1830]]; for (let i = 0; i < n; i++) { const k = popK(t, EV.gr_faces + i * 0.22, 0.3); push(pts[i][0], pts[i][1], k); ell(0, 0, 44, 44, { wash: '#f4e8c8', washA: 1, w: 3, col: '#a8241e' }); txt(String(i + 1), 0, 18, 56, { font: 'Osw', col: '#a8241e' }); pop(); } }
    if (t > EV.gr_top && t < EV.gr_gag + 0.2) { push(574, 1146, 1, 0.05); pencil([[0, 0], [0, -150]], { w: 5, col: '#6a4a2a', pass2: false }); poly([[0, -150], [100, -126], [0, -100]], { wash: '#c8343a', washA: 1, w: 2, col: '#5a0a10' }); txt('ВЕРШИНА', 46, -118, 14, { font: 'Osw', col: '#ffffff' }); pop(); }
    if (t > EV.gr_look && t < EV.gr_gag) { const c = climb(t); pencil([[300, 1700], [lerp(300, 560, c) - 10, lerp(1700, 1150, c) - 120]], { w: 4, col: '#e8c040', pass2: false }); }
  }
  function wheat(t) {                                                    // овальное зерно пшеницы проплывает мимо с биркой
    if (t < EV.gr_wheat - 0.4) return; const k = clamp((t - EV.gr_wheat + 0.4) / 2.5), x = lerp(1000, 780, k), y = 1060 + Math.sin(t * 2) * 14;
    push(x, y, 1, 0.3); const w = ell(0, 0, 130, 70, { wash: '#e8b860', washA: 1, w: 2.4, col: '#8a5a10', key: 24360 }); shadeG(w.path, 0, -70, 0, 70, '#a87a20', 0.45); pencil(spline([[-110, 6], [0, 16], [110, 6]], false, 6), { w: 5, col: '#8a5a10', pass2: false }); ell(-40, -30, 40, 12, { wash: '#fff0c0', washA: 0.6, line: false }); for (let i = 0; i < 6; i++) pencil([[120, -10 + i * 4], [150, -20 + i * 8]], { w: 1.6, col: '#c8a050', pass2: false }); pop();
    push(x - 20, y - 130, popK(t, EV.gr_wheat, 0.35)); rect(-130, -32, 260, 60, { wash: '#f4e8c8', washA: 1, w: 2, col: '#4a3010' }); txt('ПШЕНИЦА: 0 граней', 0, 8, 24, { font: 'Osw', col: '#2a4a3a' }); pop();
  }
  function front(t) {                                                    // передний план: край гигантской деревянной ложки сверху справа, ближние зёрна-валуны и пар
    for (let i = 0; i < 3; i++) { const ph = (t * 0.5 + i / 3) % 1; ell(300 + i * 280, 1700 - ph * 300, 20 + ph * 30, 16 + ph * 20, { wash: '#fff4e0', washA: 0.35 * (1 - ph), w: 1, col: '#c8a888' }); }
    grainB(380, 1960, 8, 0.4, { key: 24371 }); grainB(860, 1990, 7, -0.5, { key: 24372 });
  }
  WORLD.grain = (t, u, cat) => {
    lay(22, () => { giant(t); });
    lay(9, () => { wall(t); steamClouds(t, false); });
    lay(4, () => { dunes(t, 'far'); shaft(560, -200, 420, 2000, 0, 'rgba(255,236,190,1)', 0.14); });
    lay(2, () => { dunes(t, 'near'); wheat(t); lightPool(560, 1400, 700, 120, 'rgba(255,230,170,1)', 0.25); });
    lay(1, () => { butter(t); giantGrain(t); castShadow(560, 1760, 600, 160, 0.4, 0.28); cat(); });
    lay(0.7, () => { front(t); steamClouds(t, true); motes(16, [300, 800, 1000, 1700], '#fff4e0', t, 24380, { sp: -20, sz: 4, a: 0.35, wob: 10 }); moodDark(560, 1200, 520, 1500, '#1a0a10', 0.38); });
  };
  DIR.grain = {
    outfit: 'alpA', light: { side: 0, rim: '#ffe0b0' }, grade: ['#ffb070', 0.07],
    act: () => [[S0.grain, 'grin'], [EV.gr_faces, 'talk'], [EV.gr_top, 'proud'], [EV.gr_wheat, 'sideeye'], [EV.gr_no, 'smug'], [EV.gr_gag, 'scared'], [EV.gr_splash + 0.3, 'laugh']],
    pose: (t, u, b) => { const c = climb(t), sl = slide(t), gag = t > EV.gr_gag, top = t > EV.gr_top && !gag;
      const x = gag ? lerp(560, 860, sl) : lerp(300, 560, c), y = gag ? lerp(1150, 1740, sl * sl) : lerp(1700, 1150, c);
      return Object.assign(b, { x, y, s: 0.58, flip: false, rot: gag && sl < 1 ? 0.7 : !top && c < 1 ? -0.35 : 0, walk: c > 0 && c < 1 ? t * 9 : undefined, look: t < EV.gr_wheat ? [0.2, -0.3] : t < EV.gr_gag ? [0.9, -0.4] : [0.2, 0.6],
        hand: top ? [140, -380] : [150, -260], handF: gag ? [-180, -340] : [-140, -260], prop: top ? 'flagGP' : 'iceAxeP', propAng: top ? 0 : -0.2, nod: t > EV.gr_no && t < EV.gr_gag ? Math.sin(t * 14) * 0.5 : 0, tailUp: gag, sweat: gag && sl < 1 }); },
    cam: () => [[S0.grain, 520, 1300, 0.22], [EV.gr_faces, 500, 1340, 0.26], [EV.gr_top, 580, 1180, 0.28], [EV.gr_wheat, 700, 1160, 0.27], [EV.gr_gag, 640, 1300, 0.26], [EV.gr_splash, 740, 1460, 0.3], [S1.grain, 740, 1460, 0.31]]
  };
  TRANS_IN.grain = { a: 0.2, b: 0.6, runA: 1, fx(k, t, A, B) {          // пар заволакивает кадр и рассеивается
    const e = sm(k); drawBuf(e < 0.5 ? A : B, e < 0.5 ? 1 + e * 0.4 : 1.2 - (e - 0.5) * 0.4, 540, 960);
    scr(() => { const a = Math.sin(e * 3.14); for (let i = 0; i < 14; i++) { const r = rng(24390 + i), x = r() * 1080, y = r() * 1920 - e * 400; blob([[x - 300, y], [x - 160, y - 160], [x + 40, y - 200], [x + 260, y - 120], [x + 320, y + 40], [x + 100, y + 140], [x - 200, y + 120]], { wash: '#f8f4ee', washA: 0.85 * a, line: false }); } screenFill('#fffaf0', 0.5 * a); });
  } };
})();
