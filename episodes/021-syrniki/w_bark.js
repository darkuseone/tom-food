/* 021 — `bark`: «Новгород, 1380-й. В берестяной записке за аренду платят рыбой, маслом и… сырами. / Но твёрдый сыр на Руси тогда не варили.
   Что же это за «сыры»?» Новгородский торг XIV в. у Волхова: серебристое северное небо, золотой шлем Софии и луковки за рекой, ладьи с парусами
   и гребцами, деревянный мост, бревенчатые терема с резными причелинами, мостовая из плах, лавки-навесы. Том — писец в льняной рубахе с вышивкой
   за дощатым прилавком на бочках процарапывает бересту писалом. По словам: «Новгород» — общий план реки и Софии; «берестяной записке» — свиток бересты
   (герой) на прилавке, буквы появляются; «рыбой» — рыбак ставит бочку с рыбой; «маслом» — баба ставит горшок масла; «сырами» — на прилавок шлёпаются
   белые кислые «сыры» в холстине; «твёрдый сыр» — призрачный жёлтый брусок с красным крестом «НЕ ВАРИЛИ»; «Что же это за сыры?» — Том тычет писалом
   в мягкий белый ком, тот проминается, «?». Главный свет — солнце сквозь облака справа-сверху (холодно-тёплый пучок), тени влево.
   Переход В сцену: кадр сворачивается в свиток бересты справа налево и раскрывает торг. */
(() => {
  EV.bk_city = S0.bark + 0.05;
  EV.bk_bark = wtw('s1', 'берестяной');
  EV.bk_fish = wtw('s1', 'рыбой,');
  EV.bk_butter = wtw('s1', 'маслом');
  EV.bk_cheese = wtw('s1', 'сырами.');
  EV.bk_hard = wtw('s2', 'твёрдый');
  EV.bk_no = wtw('s2', 'варили.');
  EV.bk_poke = wtw('s2', 'сыры»?');
  SHAKES.push([EV.bk_cheese + 0.05, 0.18, 7], [EV.bk_no, 0.15, 6]);
  KEYW.push('сырами.', 'варили.');

  function sky(t) {                                                     // северное небо, облака, чайки, золотой шлем Софии, луковки, дальний берег
    vgrad(-900, 700, ['#7a9ab8', '#b8cad8', '#e8ece8']); glow(1100, -500, 260, 'rgba(255,240,200,1)', 0.3);
    for (let i = 0; i < 7; i++) { const x = ((-600 + i * 330 + t * 10) % 2400) - 600, y = -620 + (i % 3) * 110; blob([[x, y], [x + 80, y - 50], [x + 200, y - 60], [x + 300, y - 20], [x + 250, y + 20], [x + 40, y + 20]], { wash: '#f4f4f0', washA: 0.85, w: 1, col: '#a8b0b8' }); shadeG(blob([[x, y], [x + 300, y - 20], [x + 250, y + 20], [x + 40, y + 20]], { wash: '#c8d0d8', washA: 0.5, line: false }).path, 0, y - 60, 0, y + 20, '#8a98a8', 0.3); }
    for (let i = 0; i < 4; i++) { const k = (t * 0.12 + i * 0.25) % 1, x = -400 + k * 1900, y = -380 + Math.sin(k * 7 + i) * 50; pencil([[x - 14, y], [x, y - 8], [x + 14, y]], { w: 2.4, col: '#3a4a5a', pass2: false }); }
    sil([[-800, 260], [-400, 220], [0, 240], [600, 200], [1200, 230], [1800, 220], [1800, 400], [-800, 400]], '#7a8a7a', 1);
    push(500, 230, 1); const b = rect(-160, -260, 320, 260, { wash: '#f0ece0', washA: 1, w: 2, col: '#5a5a5a', key: 21601 }); shadeG(b.path, 160, 0, -160, 0, '#b8b4a8', 0.45); for (let i = 0; i < 5; i++) { rect(-140 + i * 60, -200, 30, 60, { wash: '#4a4a5a', washA: 0.8, w: 1 }); poly([[-140 + i * 60, -200], [-125 + i * 60, -222], [-110 + i * 60, -200]], { wash: '#f0ece0', washA: 1, w: 1 }); }
    for (const [dx, dy, r] of [[0, -340, 70], [-110, -300, 44], [110, -300, 44], [-110, -230, 0], [0, -270, 0]]) { if (!r) continue; rect(dx - r * 0.5, dy + r * 0.2, r, 80, { wash: '#f0ece0', washA: 1, w: 1.4, col: '#5a5a5a' }); const d = blob([[dx - r * 0.6, dy + r * 0.3], [dx - r * 0.7, dy - r * 0.2], [dx, dy - r * 1.1], [dx + r * 0.7, dy - r * 0.2], [dx + r * 0.6, dy + r * 0.3]], { wash: dx ? '#7a8a9a' : '#d8a830', washA: 1, w: 2, col: '#4a3a10', key: 21602 + dx }); shadeG(d.path, dx + r, 0, dx - r, 0, dx ? '#3a4a5a' : '#8a5a08', 0.45); pencil([[dx, dy - r * 1.1], [dx, dy - r * 1.6]], { w: 3, col: '#d8a830', pass2: false }); pencil([[dx - 12, dy - r * 1.4], [dx + 12, dy - r * 1.4]], { w: 3, col: '#d8a830', pass2: false }); }
    if (true) { glow(500, -110, 80, 'rgba(255,220,120,1)', 0.25); } pop();
    for (const [x, h] of [[-300, 120], [-160, 90], [1000, 110], [1200, 80], [1400, 130]]) { rect(x - 50, 260 - h, 100, h, { wash: '#8a6a4a', washA: 1, w: 1.4, col: '#3a2a1a' }); poly([[x - 64, 260 - h], [x, 200 - h], [x + 64, 260 - h]], { wash: '#5a4a3a', washA: 1, w: 1.4, col: '#2a1a0a' }); }
  }
  function river(t) {                                                   // Волхов: рябь, блики, ладьи с парусами и гребцами, мост
    const w = rect(-900, 380, 3000, 360, { wash: '#5a7a8a', washA: 1, line: false, key: 21610 }); shadeG(w.path, 0, 380, 0, 740, '#2a4a5a', 0.5);
    for (let i = 0; i < 30; i++) { const y = 400 + (i % 10) * 32, x = -800 + ((i * 397 + t * 30) % 2600); pencil([[x, y], [x + 60, y]], { w: 3, col: '#d8e8f0', a: 0.5, pass2: false }); }
    for (const [bx, sd, ph] of [[-200, 1, 0], [900, -1, 2]]) { const x = bx + Math.sin(t * 0.3 + ph) * 40, y = 520 + Math.sin(t * 1.4 + ph) * 4; push(x, y, 1, Math.sin(t * 1.2 + ph) * 0.02, sd);
      const h = blob([[-170, -20], [-140, 20], [140, 20], [190, -40], [150, -20]], { wash: '#6a4a2a', washA: 1, w: 2, col: '#2a1a0a', key: 21611 + ph }); shadeG(h.path, 0, -20, 0, 20, '#2a1a0a', 0.45); pencil([[0, -20], [0, -230]], { w: 6, col: '#4a3020', pass2: false });
      const sl = poly([[6, -220], [120, -200], [110, -50], [6, -40]], { wash: '#e8dcc0', washA: 1, w: 1.6, col: '#6a5a3a', key: 21613 + ph }); pencil([[20, -180], [100, -120]], { w: 8, col: '#b8241e', a: 0.6, pass2: false }); for (let k = 0; k < 3; k++) { human(-110 + k * 60, -10, 0.45, t, { body: ['#6a4a3a', '#5a6a8a', '#8a6a3a'][k], hair: '#3a2a1a', beard: 'short', face: 'calm', armL: 'hold', armR: 'swing', prop: 'oar', seed: 21615 + k + ph }); } pop(); }
    const bank = rect(-900, 730, 3000, 1300, { wash: '#8a7458', washA: 1, w: 2, col: '#3a2a1a', key: 21625 }); shadeG(bank.path, 0, 730, 0, 1300, '#4a3a2a', 0.4); for (let x = -900; x < 2100; x += 110) { rect(x, 700, 22, 90, { wash: '#4a3020', washA: 1, w: 1.2, col: '#1a0a04' }); } pencil([[-900, 730], [2100, 730]], { w: 8, col: '#5a3a1a', pass2: false });
    for (let i = 0; i < 18; i++) { const x = -600 + i * 130; sil([[x - 26, 900], [x - 22, 790], [x, 760], [x + 22, 790], [x + 26, 900]], ['#5a4a4a', '#6a5a4a', '#4a4a5a'][i % 3], 0.75); ell(x, 750, 16, 16, { wash: '#c8a080', washA: 0.8, line: false }); }
    push(1300, 480, 1); for (let i = 0; i < 8; i++) rect(-400 + i * 100, -30, 20, 120, { wash: '#4a3020', washA: 1, w: 1.4, col: '#1a0a04' }); rect(-420, -50, 840, 30, { wash: '#7a5a3a', washA: 1, w: 1.6, col: '#2a1a0a' }); for (let i = 0; i < 4; i++) human(-300 + i * 160, -50, 0.4, t, { body: ['#7a3a2a', '#4a5a7a', '#6a6a3a', '#8a5a2a'][i], face: 'calm', armL: 'down', armR: 'swing', seed: 21620 + i, flip: i % 2 ? -1 : 1 }); pop();
  }
  function houses(t) {                                                  // терема с резными причелинами, мостовая из плах, лавки-навесы, люди
    for (const [hx, w, h, c] of [[60, 300, 420, '#8a6040'], [1180, 320, 460, '#7a5434']]) { push(hx, 1180, 1);
      const b = rect(-w / 2, -h, w, h, { wash: c, washA: 1, w: 2, col: '#2a1408', key: 21630 + hx }); for (let y = -h; y < 0; y += 34) pencil([[-w / 2, y], [w / 2, y + 4]], { w: 3, col: '#3a2010', a: 0.6, pass2: false }); shadeG(b.path, w / 2, 0, -w / 2, 0, '#2a1408', 0.4);
      poly([[-w / 2 - 40, -h], [0, -h - 180], [w / 2 + 40, -h]], { wash: '#5a4a3a', washA: 1, w: 2, col: '#1a0a04' }); for (const sd of [-1, 1]) { pencil([[sd * (w / 2 + 40), -h], [0, -h - 180]], { w: 12, col: '#c8a070', pass2: false }); for (let q = 0; q < 6; q++) ell(sd * (w / 2 + 40) * (1 - q / 6), -h - 180 * q / 6 + 14, 8, 8, { wash: '#c8a070', washA: 1, w: 1 }); }
      for (const wx of [-w / 4, w / 4]) { rect(wx - 34, -h + 120, 68, 84, { wash: '#3a2a20', washA: 1, w: 2, col: '#1a0a04' }); rect(wx - 44, -h + 110, 88, 16, { wash: '#d8b080', washA: 1, w: 1.4 }); poly([[wx - 44, -h + 204], [wx, -h + 234], [wx + 44, -h + 204]], { wash: '#d8b080', washA: 1, w: 1.4 }); } pop(); }
    for (const [sx, col] of [[80, '#b8241e'], [1060, '#2a5a8a']]) { push(sx, 1240, 1); for (const dx of [-140, 140]) pencil([[dx, 0], [dx, -280]], { w: 10, col: '#5a3a1a', pass2: false }); const a = poly([[-170, -280], [170, -280], [190, -220], [-190, -220]], { wash: col, washA: 1, w: 2, col: '#2a0a04', key: 21640 + sx }); for (let i = 0; i < 8; i++) pencil([[-170 + i * 45, -280], [-180 + i * 48, -220]], { w: 5, col: '#f0e8d0', a: 0.5, pass2: false });
      rect(-150, -100, 300, 20, { wash: '#7a5a3a', washA: 1, w: 1.6 }); for (let i = 0; i < 5; i++) { if (sx < 500) ell(-110 + i * 55, -116, 22, 14, { wash: ['#e8dcc0', '#d8a050', '#f4f0e6'][i % 3], washA: 1, w: 1.2 }); else blob([[-120 + i * 55, -100], [-100 + i * 55, -130], [-80 + i * 55, -100]], { wash: '#8a9aa8', washA: 1, w: 1.2 }); } pop(); }
    const sh = t > EV.bk_cheese && t < EV.bk_cheese + 1.5;
    human(170, 1300, 1.05, t, { body: '#5a6a3a', legs: '#3a3a2a', hair: '#8a5a2a', beard: 'long', hat: 'fur', face: t > EV.bk_fish ? 'grin' : 'calm', armL: 'hold', armR: t > EV.bk_fish && t < EV.bk_butter ? 'point' : 'hold', look: 0.5, seed: 21650 });
    human(1010, 1300, 1.0, t, { body: '#9a3a3a', legs: '#4a2a2a', hair: '#c88a3a', hat: 'scarf', hatCol: '#f4e8c8', face: sh ? 'shock' : 'smile', armL: 'hold', armR: 'hold', look: -0.6, seed: 21651, flip: -1, long: 1 });
    human(1180, 1300, 0.8, t, { body: '#4a5a8a', legs: '#3a3a4a', hair: '#e8c870', face: t > EV.bk_poke ? 'grin' : 'smile', armL: 'down', armR: t > EV.bk_poke ? 'point' : 'wave', look: -0.8, seed: 21652, flip: -1 });
    push(1250, 1300, 1); const g = blob([[-40, 0], [-50, -40], [-20, -60], [20, -50], [40, -20], [30, 0]], { wash: '#f4f4f0', washA: 1, w: 1.6, col: '#7a7a7a' }); pencil(spline([[20, -50], [40, -100], [60, -110]], false, 5), { w: 10, col: '#f4f4f0', pass2: false }); ell(66, -112, 10, 6, { wash: '#e8902a', washA: 1, w: 1 }); pop();
    const pv = rect(-900, 1300, 3000, 300, { wash: '#8a6a4a', washA: 1, w: 1.6, col: '#3a2010', key: 21655 }); for (let x = -900; x < 2100; x += 90) pencil([[x, 1300], [x - 20, 1600]], { w: 3, col: '#3a2010', a: 0.6, pass2: false }); shadeG(pv.path, 0, 1300, 0, 1600, '#3a2010', 0.35);
  }
  function counter(t) {                                                 // прилавок на бочках: береста (герой), бочка рыбы, горшок масла, «сыры» в холстине, писало
    const c = rect(-300, 1440, 1700, 600, { wash: '#a87a4a', washA: 1, w: 3, col: '#2a1408', key: 21660 }); for (let i = 0; i < 8; i++) pencil([[-300, 1470 + i * 70], [1400, 1474 + i * 70]], { w: 3, col: '#5a3a1a', a: 0.5, pass2: false }); shadeG(c.path, 0, 1440, 0, 1800, '#3a2010', 0.4);
    birchBark(520, 1530, 1.0, -0.04, { key: 21661, reveal: clamp((t - EV.bk_bark) / 2.4) });
    if (t > EV.bk_fish) { const k = popK(t, EV.bk_fish, 0.4); push(220, 1470, k); const b = rect(-80, -150, 160, 150, { wash: '#7a5434', washA: 1, w: 2.4, col: '#2a1408' }); for (const y of [-130, -30]) pencil([[-82, y], [82, y]], { w: 6, col: '#3a3a40', pass2: false }); shadeG(b.path, 80, 0, -80, 0, '#2a1408', 0.4); for (let i = 0; i < 4; i++) { push(-50 + i * 34, -160, 1, -0.6 + i * 0.4); const f = blob([[0, 0], [10, -50], [0, -80], [-10, -50]], { wash: '#a8b8c0', washA: 1, w: 1.4, col: '#3a4a5a' }); poly([[0, -80], [-14, -100], [14, -100]], { wash: '#8a98a0', washA: 1, w: 1 }); ell(0, -16, 3, 3, { wash: '#1a1a1a', washA: 1, line: false }); pop(); } pop(); }
    if (t > EV.bk_butter) { const k = popK(t, EV.bk_butter, 0.4); push(980, 1470, k); const p = blob([[-60, 0], [-70, -70], [-50, -110], [50, -110], [70, -70], [60, 0]], { wash: '#9a5a2e', washA: 1, w: 2, col: '#3a1a08' }); shadeG(p.path, 60, 0, -40, 0, '#3a1a08', 0.45); ell(0, -110, 50, 12, { wash: '#f8e070', washA: 1, w: 1.4, col: '#a8801a' }); ell(-14, -114, 16, 4, { wash: '#ffffff', washA: 0.7, line: false }); txt('МАСЛО', 0, -50, 16, { font: 'Hand', col: '#f4e0b0' }); pop(); }
    if (t > EV.bk_cheese) { const k = popK(t, EV.bk_cheese, 0.35), sq = t > EV.bk_poke ? 0.25 * Math.exp(-(t - EV.bk_poke) * 4) * Math.abs(Math.sin((t - EV.bk_poke) * 18)) + 0.08 : 0; for (const [x, s] of [[820, 1.0], [740, 0.8]]) { push(x, 1510, k); push(0, 0, 1 + sq, 0); tvorogBag(0, 0, s * (1 - sq * 0.5), t, { key: 21670 + x }); pop(); pop(); } }
    if (t > EV.bk_hard && t < S1.bark) { const k = sm(clamp((t - EV.bk_hard) / 0.5)); push(860, 1000, 1); ctx.save(); ctx.globalAlpha = 0.8 * k; cheeseWedge(0, 0, 0.9, 0.1, { key: 21680 }); ctx.restore(); if (t > EV.bk_no) { const q = sm(clamp((t - EV.bk_no) / 0.25)); pencil([[-110, -90], [-110 + 240 * q, -90 + 170 * q]], { w: 16, col: '#c8241e', pass2: false }); if (q > 0.6) pencil([[130, -90], [130 - 240 * (q - 0.6) / 0.4, -90 + 170 * (q - 0.6) / 0.4]], { w: 16, col: '#c8241e', pass2: false }); txt('НЕ ВАРИЛИ', 0, 120, 40, { font: 'Osw', col: '#c8241e', a: q }); } pop(); }
    if (t > EV.bk_poke) { const k = popK(t, EV.bk_poke + 0.3, 0.4); push(820, 1250, k, Math.sin(t * 3) * 0.06); txt('?', 0, 0, 130, { font: 'Osw', col: '#2a4a8a' }); pop(); }
    castShadow(560, 1600, 360, 140, -0.6, 0.22); lightPool(620, 1560, 600, 120, 'rgba(255,245,220,1)', 0.25);
  }
  function front(t) {                                                   // передний план: ветка берёзы с листьями сверху-слева, край бочки справа, сеть
    push(-200, -300, 1.5); pencil(spline([[0, 0], [200, 120], [420, 160], [600, 260]], false, 8), { w: 6, col: '#e8e4dc', pass2: false }); for (let i = 0; i < 10; i++) { const x = 60 + i * 52, y = 60 + i * 18 + Math.sin(t * 2 + i) * 6; pencil([[x, y], [x + 4, y + 40]], { w: 1.4, col: '#5a6a3a', pass2: false }); blob([[x, y + 40], [x - 12, y + 56], [x, y + 74], [x + 12, y + 56]], { wash: i % 2 ? '#8ab04a' : '#a8c85a', washA: 1, w: 1.2, col: '#3a5a1a' }); } pop();
    push(1420, 2000, 1.6); const b = rect(-120, -260, 240, 260, { wash: '#6a4a2a', washA: 1, w: 3, col: '#1a0a04' }); for (const y of [-220, -60]) pencil([[-122, y], [122, y]], { w: 8, col: '#3a3a40', pass2: false }); shadeG(b.path, -120, 0, 120, 0, '#1a0a04', 0.5); pop();
    for (let i = 0; i < 6; i++) pencil([[-380 + i * 30, 1300], [-360 + i * 30, 2100]], { w: 2, col: '#5a4a3a', a: 0.5, pass2: false }); for (let i = 0; i < 12; i++) pencil([[-380, 1340 + i * 60], [-220, 1360 + i * 60]], { w: 2, col: '#5a4a3a', a: 0.5, pass2: false });
  }
  WORLD.bark = (t, u, cat) => {
    lay(24, () => { sky(t); }); lay(10, () => { river(t); haze('#d8e0e8', 0.08); });
    lay(3.6, () => { houses(t); shaft(1100, -500, 400, 2400, 0.35, 'rgba(255,248,225,1)', 0.12); });
    lay(1, () => { cat(); counter(t); });
    lay(0.6, () => { front(t); motes(14, [-200, 200, 1200, 1500], '#ffffff', t, 21690, { sp: 8, sz: 3, a: 0.35, wob: 6 }); moodDark(700, 1100, 500, 1500, '#1a2a3a', 0.4); });
  };
  DIR.bark = {
    outfit: 'scribeA', light: { side: 1, rim: '#fff4dc' }, grade: ['#a8c0d8', 0.06],
    act: () => [[S0.bark, 'talk'], [EV.bk_bark, 'proud'], [EV.bk_cheese, 'grin'], [EV.bk_hard, 'suspicious'], [EV.bk_no, 'annoyed'], [EV.bk_poke, 'sideeye']],
    pose: (t, u, b) => { const wr = t > EV.bk_bark && t < EV.bk_fish + 0.6, pk = t > EV.bk_poke;
      return Object.assign(b, { x: 620, y: 1590, s: 1.18, flip: 0, look: wr ? [0, 0.7] : pk ? [0.6, 0.6] : t > EV.bk_hard ? [0.7, -0.2] : [0.2, 0], hand: pk ? [190, -200] : wr ? [-40 + Math.sin(t * 14) * 14, -170] : [120, -280], handF: [-110, -240], prop: 'stylusP', propAng: pk ? 0.9 : 0.2, nod: wr ? Math.sin(t * 6) * 0.03 : 0 }); },
    cam: () => [[S0.bark, 600, 900, 0.16], [EV.bk_bark, 620, 1180, 0.26], [EV.bk_fish, 560, 1180, 0.24], [EV.bk_cheese, 680, 1180, 0.26], [EV.bk_hard, 700, 1120, 0.26], [EV.bk_poke, 700, 1180, 0.3], [S1.bark, 680, 1180, 0.32]]
  };
  TRANS_IN.bark = { a: 0.2, b: 0.55, runA: 0.6, fx(k, t, A, B) {          // кадр сворачивается в свиток бересты справа налево
    const e = sm(k), ex = lerp(1180, -120, e); drawBuf(B, 1, 540, 960);
    scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(0, 0, Math.max(0, ex), 1920); ctx.clip(); drawBuf(A, 1, 540, 960); ctx.restore();
      const R = 50 + 70 * e; const c = rect(ex - R * 0.2, -20, R * 1.4, 1960, { wash: SY.bark, washA: 1, w: 3, col: SY.barkD, key: 21699 }); shadeG(c.path, ex + R * 1.2, 0, ex - R * 0.2, 0, SY.barkD, 0.5);
      for (let i = 0; i < 26; i++) pencil([[ex, i * 76], [ex + R, i * 76 + 6]], { w: 2, col: '#8a6a4a', a: 0.6, pass2: false }); });
  } };
})();
