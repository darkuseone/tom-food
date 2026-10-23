/* 005 — `meadow`: «Борщевик — зонтик с лугов. Славяне квасили его листья для кислой похлёбки.» Древний славянский луг у реки: зонтики борщевика, деревянный тын,
   изба с соломенной крышей, дым из волока. Женщина в рубахе срывает листья в корзину, дети несут; «квасили» — листья в кадке под камнем пузырятся; «похлёбки» — горшок
   кипит над костром. Том в рубахе+фартук. Переход В сцену: ложка-воронка — кадр закручивается в водоворот супа. */
(() => {
  EV.md_um = LS('s1') + 0.05;
  EV.md_sour = wtw('s1', 'квасили');
  EV.md_soup = wtw('s1', 'похлёбки.');
  KEYW.push('квасили', 'похлёбки.');

  function land(t) { vgrad(-600, 1200, ['#f0c890', '#f6e0b0', '#d8e0a8']); ell(820, 300, 70, 70, { wash: '#fff2b0', washA: 1, line: false }); glow(820, 300, 260, 'rgba(255,230,150,1)', 0.5);
    hills(820, 90, '#7a9a4a', 0.9); rect(-300, 860, 1700, 70, { wash: '#6a9ab8', washA: 1, w: 2, col: '#2a4a5a' }); for (let i = 0; i < 12; i++) pencil([[(i * 130 + t * 30) % 1700 - 300, 880 + (i % 3) * 14], [(i * 130 + t * 30) % 1700 - 260, 880 + (i % 3) * 14]], { w: 3, col: '#f6f0d0', a: 0.7, pass2: false });
    const iz = rect(620, 820, 300, 200, { wash: '#7a5a34', washA: 1, w: 3, col: '#2a1a0a', key: 5300 }); for (let i = 0; i < 5; i++) pencil([[620, 830 + i * 38], [920, 830 + i * 38]], { w: 3, col: '#3a2a14', pass2: false }); poly([[590, 830], [770, 700], [950, 830]], { wash: '#d8b060', washA: 1, w: 3, col: '#6a4a14' });
    for (let q = 0; q < 3; q++) { const k = (t * 0.4 + q / 3) % 1; ell(820 + Math.sin(k * 5) * 20, 690 - k * 200, 20 + k * 30, 14 + k * 20, { wash: '#d8d0c0', washA: 0.4 * (1 - k), line: false }); }
    for (let i = 0; i < 20; i++) pencil([[-300 + i * 90, 1040], [-300 + i * 90, 900]], { w: 10, col: '#8a6a3a' }); pencil([[-300, 940], [1500, 940]], { w: 6, col: '#6a4a2a', pass2: false }); }
  function field(t) { for (let i = 0; i < 6; i++) hogweed(-80 + i * 230, 1300 + (i % 2) * 30, 1.2 + (i % 3) * 0.15, t + i);
    const pick = t > EV.md_um; human(220, 1300, 1.1, t, { body: '#f2ead6', hair: '#c8a050', face: 'smile', armL: 'hold', armR: pick ? 'up' : 'hold', seed: 370, look: 0.4, long: 1, hat: 'scarf', hatCol: '#d9482b', trim: '#d9482b' });
    push(280, 1220, 1); const b = shape(spline([[-60, 0], [-50, 60], [50, 60], [60, 0]], false, 6), { wash: '#c8a060', washA: 1, w: 2.4, col: '#5a3a10' }); for (let i = 0; i < 4; i++) blob([[-40 + i * 24, 0], [-50 + i * 24, -40], [-30 + i * 24, -30]], { wash: '#4a7a2a', washA: 1, w: 1.2 }); pop();
    human(440, 1320, 0.8, t, { body: '#e8dcc0', hair: '#8a6a3a', face: 'grin', armL: 'hold', armR: 'up', seed: 371, prop: 'stick' }); }
  function camp(t) { const tub = rect(560, 1260, 180, 160, { wash: '#8a5a2a', washA: 1, w: 3, col: '#2a1408', key: 5310 }); for (const yy of [1290, 1390]) pencil([[560, yy], [740, yy]], { w: 6, col: '#4a4a4a', pass2: false }); ell(650, 1260, 90, 18, { wash: '#4a6a2a', washA: 1, w: 2 });
    if (t > EV.md_sour) { for (let i = 0; i < 6; i++) { const k = ((t - EV.md_sour) * 1.5 + i / 6) % 1; ell(600 + i * 18, 1256 - k * 20, 5 * (1 - k) + 3, 4 * (1 - k) + 2, { line: true, w: 2, col: '#c8e09a', a: 1 - k }); } bubbleTag('КИСНЕТ', 650, 1170, t, EV.md_sour, '#6b7a2e', 32, 0.04); }
    ell(650, 1230, 50, 26, { wash: '#8a8a8a', washA: 1, w: 2 });
    if (t > EV.md_soup - 0.2) { pencil([[880, 1440], [940, 1200], [1000, 1440]], { w: 6, col: '#4a3a2a', pass2: false }); clayPot(940, 1300, 0.6, t, { col: '#5a8a2a' }); for (let i = 0; i < 4; i++) { const f = flick(t, i); blob([[900 + i * 20, 1440], [905 + i * 20, 1440 - 50 * f], [915 + i * 20, 1440]], { wash: '#ff8a20', washA: 0.9, line: false }); } glow(940, 1420, 100, 'rgba(255,150,60,1)', 0.5); } }
  WORLD.meadow = (t, u, cat) => { lay(14, () => land(t)); lay(2.4, () => { field(t); camp(t); }); lay(1, () => { rect(-300, 1440, 1700, 600, { wash: '#6a8a3a', washA: 1, w: 2, col: '#1a3a0a', key: 5320 }); cat(); }); };
  DIR.meadow = {
    outfit: 'polovoy', light: { side: -1, rim: '#ffe0a0' }, grade: ['#c8a050', 0.1],
    act: () => [[S0.meadow, 'talk'], [EV.md_sour, 'sideeye'], [EV.md_soup, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 880, y: 1780, s: 1.12, flip: true, look: [0.7, -0.4], hand: [130, -280], handF: [-90, -220], prop: 'hogweedP' }),
    cam: () => [[S0.meadow, 400, 1000, 0.12], [EV.md_sour, 620, 1120, 0.22, 'x'], [EV.md_soup, 760, 1150, 0.22], [S1.meadow, 760, 1150, 0.26]]
  };
  // ---------------------------------------------------------------- переход: суп закручивается воронкой от ложки
  TRANS_IN.meadow = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const R = (1 - Math.pow(k, 0.8)) * 1500; if (R > 5) inCircle(540, 960, R, () => drawBuf(A, 1 + k * 0.5, 540, 960, 1, null, 0, 0, k * 4));
    scr(() => { for (let i = 0; i < 3; i++) pencil(ellPts(540, 960, R + i * 30, R + i * 30, k * 6, 0, 50), { w: 14 - i * 4, col: BR.red, a: 0.8 * (1 - k), pass2: false }); });
  } };
})();
