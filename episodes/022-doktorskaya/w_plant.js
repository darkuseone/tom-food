/* 022 — `plant`: «Первые батоны — с московского мясокомбината. И рецепт не трогают сорок лет.» Цех мясокомбината 1930-х: белый кафель до потолка,
   медные трубы и манометры, клёпаные двери варочных камер с иллюминаторами (пар валит из щелей), подвесной конвейер с крюками — по нему едут батоны,
   деревянные рамы-«стойки» с рядами батонов, табло-счётчик лет, лампы-«тарелки» под потолком, плитка пола с водостоком, тележка, весы-платформа,
   рабочие в белых халатах и сетках: один подвешивает батоны, второй везёт тележку, мастер с блокнотом и часами. Том в белой куртке и сетке вешает батон.
   По словам: «батоны» — по конвейеру въезжает вереница батонов, крюки звякают; «мясокомбината.» — из камеры вырывается пар, дверь приоткрывается;
   «сорок лет.» — табло-счётчик крутит годы 1936 → 1974 (щелчки), мастер стучит по часам. Переход В сцену: батон на крюке конвейера проезжает через кадр
   и утягивает прошлую сцену влево. Главный свет — лампы под потолком (тёплые), пар подсвечен, холодный кафель. */
(() => {
  EV.pl_loaf = wtw('s4', 'батоны');
  EV.pl_steam = wtw('s4', 'мясокомбината.');
  EV.pl_count = wtw('s4', 'сорок');
  SHAKES.push([EV.pl_steam + 0.1, 0.15, 6]);
  KEYW.push('мясокомбината.', 'сорок');
  function wall(t) {                                                     // белый кафель, трубы, манометры, двери камер, табло, лампы
    vgrad(-800, 1500, ['#dfe6e2', '#eef2ee', '#d4dcd8']);
    for (let y = -800; y < 1500; y += 44) pencil([[-600, y], [1800, y]], { w: 1.6, col: '#a8b8b4', a: 0.6, pass2: false }); for (let x = -600; x < 1800; x += 64) pencil([[x, -800], [x, 1500]], { w: 1.4, col: '#a8b8b4', a: 0.5, pass2: false });
    const r = rng(22601); for (let i = 0; i < 30; i++) rect(-600 + Math.floor(r() * 37) * 64 + 4, -800 + Math.floor(r() * 52) * 44 + 4, 56, 36, { wash: '#ffffff', washA: 0.2, line: false });
    rect(-600, 1060, 2400, 30, { wash: '#a8241e', washA: 0.8, w: 1.4, col: '#5a0a04' });
    for (const y of [-380, -320]) { pencil([[-600, y], [1800, y]], { w: 20, col: '#b87a3a' }); pencil([[-600, y - 6], [1800, y - 6]], { w: 4, col: '#f0c080', a: 0.6, pass2: false }); for (let x = -500; x < 1800; x += 300) rect(x, y - 16, 20, 32, { wash: '#8a5a2a', washA: 1, w: 1.4 }); }
    for (const [gx, gy] of [[200, -250], [1300, -250]]) { push(gx, gy, 1); pencil([[0, -70], [0, 0]], { w: 10, col: '#b87a3a', pass2: false }); const g = ell(0, 30, 40, 40, { wash: '#f8f4e8', washA: 1, w: 4, col: '#8a5a2a' }); pencil([[0, 30], [Math.cos(t * 2 + gx) * 26, 30 - Math.abs(Math.sin(t * 2 + gx)) * 26]], { w: 3, col: '#c8241e', pass2: false }); for (let i = 0; i < 7; i++) { const a = -3.1 + i * 0.52; pencil([[Math.cos(a) * 30, 30 + Math.sin(a) * 30], [Math.cos(a) * 36, 30 + Math.sin(a) * 36]], { w: 1.6, col: '#2a2a2a', pass2: false }); } pop(); }
    for (const dx of [-140, 1180]) { push(dx, 1300, 1); const d = rect(-180, -760, 360, 760, { wash: '#a8b0b4', washA: 1, w: 3, col: '#3a4048', key: 22602 + dx }); metalG(d.path, -60, -500, 420, '#e8eef0', '#a8b0b4', '#5a6068', 0.6);
      for (let i = 0; i < 8; i++) { nb(-160, -730 + i * 96, 5, '#8a9096'); nb(160, -730 + i * 96, 5, '#8a9096'); } const pw = ell(0, -520, 70, 70, { wash: '#3a2a1a', washA: 1, w: 8, col: '#8a6a3a' }); glow(0, -520, 90, 'rgba(255,170,90,1)', 0.3); ell(-20, -540, 16, 10, { wash: '#ffd090', washA: 0.6, line: false });
      rect(120, -420, 30, 140, { wash: '#5a5a62', washA: 1, w: 2 }); rect(-100, -200, 200, 50, { wash: '#f4f0e0', washA: 1, w: 1.4 }); txt(dx < 0 ? 'КАМЕРА № 1' : 'КАМЕРА № 2', 0, -168, 22, { font: 'Osw', col: '#2a2a2a' }); txt('варка 75–80°', 0, -100, 18, { font: 'Hand', col: '#3a3a3a' }); pop(); }
    push(930, 640, 0.75); const tb = rect(-220, -120, 440, 220, { wash: '#2a2a2a', washA: 1, w: 4, col: '#8a6a3a', key: 22604 }); txt('РЕЦЕПТ БЕЗ ИЗМЕНЕНИЙ', 0, -84, 22, { font: 'Osw', col: '#f4d040' });
    const yr = t < EV.pl_count ? 1936 : Math.min(1974, 1936 + Math.floor((t - EV.pl_count) * 22)); const ys = String(yr); for (let i = 0; i < 4; i++) { rect(-150 + i * 76, -50, 66, 110, { wash: '#f4f0e6', washA: 1, w: 2, col: '#5a5a5a' }); pencil([[-150 + i * 76, 4], [-84 + i * 76, 4]], { w: 2, col: '#8a8a8a', pass2: false }); txt(ys[i], -117 + i * 76, 40, 80, { font: 'Osw', col: '#2a2a2a' }); }
    txt(t > EV.pl_count + 1.8 ? '≈ 40 ЛЕТ' : 'ГОД', 0, 92, 18, { font: 'Osw', col: '#f4d040' }); pop();
    for (const lx of [100, 640, 1180]) { push(lx, -560, 1); pencil([[0, -300], [0, 0]], { w: 4, col: '#2a2a2a', pass2: false }); const lp = blob([[-90, 40], [-40, 0], [40, 0], [90, 40]], { wash: '#2a4a3a', washA: 1, w: 2, col: '#0a1a14' }); ell(0, 40, 80, 12, { wash: '#fff2c8', washA: 1, line: false }); glow(0, 50, 150, 'rgba(255,224,170,1)', 0.28); pop(); }
  }
  function line(t) {                                                     // подвесной конвейер с батонами, рамы с батонами, рабочие, тележка, весы
    const run = t > EV.pl_loaf ? (t - EV.pl_loaf) * 140 : 0;
    pencil([[-600, 380], [1800, 380]], { w: 16, col: '#5a6068' }); pencil([[-600, 374], [1800, 374]], { w: 3, col: '#a8b0b8', pass2: false }); for (let x = -600; x < 1800; x += 200) pencil([[x, 380], [x + 40, 200]], { w: 6, col: '#5a6068', pass2: false });
    for (let i = 0; i < 9; i++) { const x = ((-500 + i * 240 + run) % 2200 + 2200) % 2200 - 500, sw = Math.sin(t * 3 + i) * 0.06; push(x, 380, 1, sw); ell(0, 0, 10, 10, { wash: '#8a9096', washA: 1, w: 1.4 }); pencil([[0, 0], [0, 50]], { w: 3, col: '#5a6068', pass2: false }); pencil(spline([[0, 50], [14, 64], [0, 76]], false, 4), { w: 3, col: '#5a6068', pass2: false }); if (t > EV.pl_loaf - 0.5 || i % 2) doktorLoaf(0, 200, 0.5, 1.5708, { key: 22610 + i, label: 0, len: 260 }); pop(); }
    for (const fx of [-220, 1340]) { push(fx, 1300, 1); for (const sx of [-130, 130]) pencil([[sx, 0], [sx, -560]], { w: 12, col: '#8a6a3a' }); for (let row = 0; row < 3; row++) { const y = -520 + row * 170; pencil([[-150, y], [150, y]], { w: 10, col: '#8a6a3a' }); for (let i = 0; i < 6; i++) doktorLoaf(-110 + i * 44, y + 90, 0.32, 1.5708, { key: 22620 + row * 6 + i + fx, label: 0, len: 260 }); } pop(); }
    const hang = t > EV.pl_loaf + 0.5;
    human(150, 1320, 1.1, t, { body: '#f4f4f0', bodyD: '#a8b0ac', legs: '#3a3a44', hair: '#5a3a1a', face: hang ? 'grin' : 'calm', armL: 'up', armR: 'up', look: -0.4, seed: 22630, flip: 1, hat: 'cap', hatCol: '#ffffff' });
    human(1060, 1320, 1.08, t, { body: '#f4f4f0', bodyD: '#a8b0ac', legs: '#3a3a44', hair: '#8a8a8a', beard: 'short', face: t > EV.pl_count ? 'grin' : 'calm', armL: 'hold', armR: t > EV.pl_count && t < EV.pl_count + 1.4 ? 'point' : 'hold', look: -0.6, seed: 22631, flip: -1, hat: 'cap', hatCol: '#ffffff' });
    push(1060 - 40, 1320 - 200, 1); rect(-34, -20, 50, 64, { wash: '#efe4c8', washA: 1, w: 1.4, col: '#6a5a3a' }); for (let i = 0; i < 4; i++) pencil([[-28, -6 + i * 12], [10, -6 + i * 12]], { w: 1.4, col: '#3a3a5a', a: 0.6, pass2: false }); pop();
    const cx = 760 + Math.sin(t * 0.8) * 30; push(cx + 380, 1330, 1); const c = rect(-120, -150, 240, 110, { wash: '#a8b0b8', washA: 1, w: 2.4, col: '#3a4048', key: 22632 }); metalG(c.path, -40, -110, 160, '#e8eef0', '#a8b0b8', '#5a6068', 0.6); for (let i = 0; i < 4; i++) doktorLoaf(-70 + i * 46, -160, 0.3, 1.5708, { key: 22633 + i, label: 0, len: 260 }); for (const wx of [-90, 90]) ell(wx, -30, 22, 22, { wash: '#2a2a2a', washA: 1, w: 1.6 }); pop();
  }
  function floor(t) {                                                    // стол-разделочный: батоны, шпагат, клипсатор, нож, ведро, водосток
    const tb = rect(-500, 1440, 2200, 700, { wash: '#c8ccd0', washA: 1, w: 3, col: '#3a4048', key: 22640 }); metalG(tb.path, 500, 1500, 1200, '#f4f8fa', '#c8ccd0', '#6a7078', 0.6); for (let x = -500; x < 1700; x += 200) pencil([[x, 1446], [x - 30, 2140]], { w: 2, col: '#8a9096', a: 0.5, pass2: false });
    rect(-500, 1430, 2200, 18, { wash: '#8a9096', washA: 1, w: 2, col: '#3a4048' });
    for (let i = 0; i < 3; i++) doktorLoaf(180 + i * 40, 1560 + i * 26, 0.55, -0.06 + i * 0.05, { key: 22641 + i, label: i === 2 ? 'ДОКТОРСКАЯ' : 0, sub: 'ГОСТ · 1936' });
    push(1000, 1560, 1); const sp = ell(0, 0, 70, 30, { wash: '#efe4c8', washA: 1, w: 2, col: '#8a7a5a' }); ell(0, 0, 30, 12, { wash: '#c8b890', washA: 1, w: 1.4 }); pencil(spline([[60, 0], [120, 20], [160, -10], [200, 30]], false, 6), { w: 3, col: DK.twine, pass2: false }); pop();
    push(1160, 1540, 1); const cl = rect(-60, -110, 120, 110, { wash: '#5a6068', washA: 1, w: 2.2, col: '#1a2028' }); metalG(cl.path, -20, -80, 80, '#c8ccd0', '#5a6068', '#1a2028', 0.6); pencil([[40, -110], [70, -170]], { w: 10, col: '#c8241e', pass2: false }); txt('КЛИПСА', 0, -50, 13, { font: 'Osw', col: '#f4f0e0' }); pop();
    push(880, 1620, 1, 0.15); pencil([[0, 0], [180, 0]], { w: 16, col: '#d8dce0', pass2: false }); pencil([[0, -5], [180, -5]], { w: 3, col: '#ffffff', a: 0.7, pass2: false }); rect(-100, -12, 100, 26, { wash: '#3a2a1a', washA: 1, w: 1.6 }); pop();
    castShadow(240, 1590, 300, 120, 0.4, 0.22); lightPool(640, 1540, 700, 120, 'rgba(255,230,180,1)', 0.3);
  }
  function front(t) {                                                    // передний план: край варочной трубы сверху, пар, висящий батон у края
    pencil([[-400, 360], [1500, 300]], { w: 40, col: '#b87a3a' }); pencil([[-400, 348], [1500, 288]], { w: 8, col: '#f0c080', a: 0.6, pass2: false }); for (let x = -300; x < 1500; x += 360) rect(x, 320, 34, 60, { wash: '#8a5a2a', washA: 1, w: 1.6 });
    const sk = t > EV.pl_steam ? Math.max(0, 1 - (t - EV.pl_steam) / 2.4) : 0;
    for (let i = 0; i < 8; i++) { const k = (t * 0.4 + i / 8) % 1, x = -200 + i * 40 + Math.sin(k * 6 + i) * 40; ell(x, 1500 - k * 900, 80 + k * 140, 60 + k * 100, { wash: '#ffffff', washA: (0.12 + sk * 0.3) * (1 - k), line: false }); }
    push(1420, 520, 1.3, Math.sin(t * 2) * 0.05); pencil([[0, -600], [0, 0]], { w: 4, col: '#5a6068', pass2: false }); doktorLoaf(0, 200, 0.8, 1.5708, { key: 22650, label: 0 }); pop();
  }
  WORLD.plant = (t, u, cat) => {
    lay(14, () => { wall(t); shaft(640, -520, 360, 2200, 0, 'rgba(255,236,190,1)', 0.12); haze('#eef4f2', 0.06); });
    lay(4, () => { line(t); lightPool(640, 1320, 900, 150, 'rgba(255,230,180,1)', 0.2); castShadow(150, 1320, 120, 160, 0.3, 0.22); castShadow(1060, 1320, 120, 160, 0.3, 0.22); });
    lay(1, () => { cat(); floor(t); });
    lay(0.6, () => { front(t); motes(18, [-100, 300, 1200, 1500], '#ffffff', t, 22660, { sp: 8, sz: 4, a: 0.3, wob: 8 }); moodDark(640, 1100, 520, 1500, '#1a2a2a', 0.38); });
  };
  DIR.plant = {
    outfit: 'fabA', light: { side: 0, rim: '#ffe8c0' }, grade: ['#c8e0d8', 0.05],
    act: () => [[S0.plant, 'proud'], [EV.pl_loaf, 'grin'], [EV.pl_steam, 'shock'], [EV.pl_steam + 0.5, 'talk'], [EV.pl_count, 'proud']],
    pose: (t, u, b) => { const up = t > EV.pl_loaf && t < EV.pl_steam;
      return Object.assign(b, { x: 640, y: 1590, s: 1.16, flip: 1, look: up ? [0.2, -0.8] : t > EV.pl_count ? [0, 0] : [0.4, -0.2], hand: up ? [110, -470] : [150, -280], handF: [-130, -230], prop: 'loafP', propAng: up ? -1.2 : -0.3, sweat: t > EV.pl_steam && t < EV.pl_steam + 0.8 }); },
    cam: () => [[S0.plant, 640, 1100, 0.26], [EV.pl_loaf, 620, 1060, 0.24], [EV.pl_steam, 660, 1120, 0.3], [EV.pl_count, 620, 1080, 0.28], [S1.plant, 620, 1100, 0.3]]
  };
  TRANS_IN.plant = { a: 0.2, b: 0.5, runA: 1, fx(k, t, A, B) {          // батон на крюке проезжает и утягивает кадр влево
    const e = sm(k), X = 1180 - e * 1400;
    drawBuf(B, 1, 540, 960); const rp = new Path2D(); rp.rect(0, 0, Math.max(0, X), 1920); inPath(rp, () => drawBuf(A, 1, 540, 960, 1, null, -e * 200));
    scr(() => { pencil([[-100, 200], [1200, 200]], { w: 14, col: '#5a6068' }); push(X, 200, 1, Math.sin(k * 20) * 0.1); pencil([[0, 0], [0, 90]], { w: 5, col: '#5a6068', pass2: false }); doktorLoaf(0, 420, 1.2, 1.5708, { key: 22670 }); pop(); });
  } };
})();
