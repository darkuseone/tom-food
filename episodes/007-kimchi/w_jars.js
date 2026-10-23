/* 007 — `jars`: «На зиму кувшины закапывали в землю — чтобы не замёрзли.» Заснеженный двор ханока: черепичные крыши под снегом, каменная терраса
   чандоктэ с рядами кувшинов-онги в снежных шапках, соломенный навес, голые деревья, следы на снегу, идёт снег. На «закапывали» семья с лопатами опускает
   кувшины в ямы — они уходят в землю по плечи, сверху соломенные «шляпы»; на «не замёрзли» над землёй — термометр с ледышкой снаружи и тёплым сердечком внутри.
   Том в тулупе. Переход В сцену: две бумажные двери-ханджи задвигаются и разъезжаются. */
(() => {
  EV.jr_bury = wtw('s8', 'закапывали');
  EV.jr_frz = wtw('s8', 'замёрзли.');
  SHAKES.push([EV.jr_bury + 0.3, 0.15, 6]);
  KEYW.push('землю');

  function yard(t) { vgrad(-600, 1100, ['#9ab0c8', '#c8d8e6', '#eef4f8']); for (let i = 0; i < 3; i++) { const x = -200 + i * 480; rect(x + 20, 640, 400, 300, { wash: '#f2ead6', washA: 1, w: 2.4, col: '#4a3a2a' }); for (let q = 0; q < 3; q++) rect(x + 50 + q * 120, 680, 90, 220, { wash: '#fbf6e8', washA: 1, w: 1.6, col: '#6a4a2a' });
      shape(spline([[x - 60, 620], [x + 20, 660], [x + 220, 630], [x + 420, 660], [x + 500, 620], [x + 420, 560], [x + 220, 530], [x + 20, 560]], true, 8), { wash: '#3a3a44', washA: 1, w: 2.4, col: '#14141a' }); blob([[x - 40, 590], [x + 220, 520], [x + 480, 590], [x + 220, 560]], { wash: '#fbfdff', washA: 1, w: 1.6, col: '#a8b8c8' }); }
    for (let i = 0; i < 3; i++) { const x = 60 + i * 420; pencil([[x, 960], [x - 10, 700]], { w: 12, col: '#4a3a2a' }); for (let q = 0; q < 4; q++) pencil([[x - 6, 760 + q * 40], [x - 80 + q * 40, 700 + q * 30]], { w: 4, col: '#4a3a2a', pass2: false }); }
    rect(-300, 940, 1700, 600, { wash: '#f2f6fa', washA: 1, w: 2, col: '#a8b8c8' }); for (let i = 0; i < 14; i++) ell(-200 + i * 110, 1000 + (i % 3) * 60, 20, 8, { wash: '#c8d4e0', washA: 0.8, line: false });
    // терраса с кувшинами
    rect(560, 960, 520, 70, { wash: '#a8a8a0', washA: 1, w: 2.4, col: '#4a4a44' }); for (let i = 0; i < 5; i++) onggi(610 + i * 100, 970, 0.3 + (i % 2) * 0.08, t, { snow: true, key: i }); }
  function family(t) { const b = clamp((t - EV.jr_bury) / 1.0); for (let i = 0; i < 3; i++) { const x = 140 + i * 230; onggi(x, 1300, 0.6, t, { buried: b * 0.8, snow: b > 0.8, key: 10 + i }); if (b > 0.9) { push(x, 1300 - 150, 1); poly([[-90, 20], [0, -60], [90, 20]], { wash: '#d8b860', washA: 1, w: 2, col: '#6a4a10' }); for (let q = 0; q < 6; q++) pencil([[-80 + q * 30, 16], [-40 + q * 16, -40]], { w: 1.4, col: '#a88430', pass2: false }); pop(); } }
    for (let i = 0; i < 2; i++) { const x = 250 + i * 240; human(x, 1300, 0.74, t, { body: i ? '#8a3a3a' : '#3a5a8a', hair: '#1a1a1a', face: 'smile', armL: 'hold', armR: t > EV.jr_bury && t < EV.jr_bury + 1.4 ? 'swing' : 'hold', seed: 840 + i, long: i, hat: i ? 'scarf' : 'fur', hatCol: '#d9482b' }); push(x + 40, 1300, 0.74); pencil([[0, -200], [20, 0]], { w: 6, col: '#6a4a2a' }); poly([[10, 0], [40, 0], [36, 40], [14, 40]], { wash: '#8a8a90', washA: 1, w: 2 }); pop(); }
    if (t > EV.jr_frz - 0.1) { const p = popK(t, EV.jr_frz - 0.1, 0.4); push(640, 1100, p); rect(-24, -160, 48, 220, { wash: '#fbfbf6', washA: 1, w: 3, col: '#3a3a4a' }); ell(0, 70, 34, 34, { wash: '#d9282b', washA: 1, w: 3 }); rect(-8, -60, 16, 120, { wash: '#d9282b', washA: 1, line: false }); pencil([[-24, -20], [24, -20]], { w: 3, col: '#2a6ab8', pass2: false }); txt('0°', 60, -16, 36, { font: 'Osw', col: '#2a6ab8' }); pop(); bubbleTag('НЕ ЗАМЁРЗНЕТ', 640, 880, t, EV.jr_frz, '#2a6ab8', 30, -0.04); } }
  WORLD.jars = (t, u, cat) => { lay(12, () => yard(t)); lay(1.4, () => family(t)); lay(1, () => { rect(-300, 1450, 1700, 600, { wash: '#eef4f8', washA: 1, w: 2, col: '#a8b8c8', key: 8510 }); cat(); motes(60, [-100, -200, 1200, 1900], '#ffffff', t, 8511, { sp: 60, sz: 5, a: 0.9 }); }); };
  DIR.jars = {
    outfit: 'tulupA', light: { side: 1, rim: '#e0f0ff' }, grade: ['#8ab0d8', 0.06],
    act: () => [[S0.jars, 'cold'], [EV.jr_bury, 'talk'], [EV.jr_frz, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 880, y: 1800, s: 1.1, flip: true, look: [-0.7, -0.2], hand: [150, -320], handF: [-90, -230], frost: 0.5, chatter: t < EV.jr_bury ? 1 : 0, point: t > EV.jr_bury ? 1 : 0 }),
    cam: () => [[S0.jars, 560, 950, 0.1], [EV.jr_bury, 440, 1200, 0.16, 'x'], [EV.jr_frz, 560, 1150, 0.18], [S1.jars, 560, 1150, 0.2]]
  };
  // ---------------------------------------------------------------- переход: две бумажные двери-ханджи задвигаются и разъезжаются
  TRANS_IN.jars = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const c = Math.sin(k * Math.PI), wd = c * W / 2; drawBuf(k < 0.5 ? A : B, 1, 540, 960); scr(() => { for (const sd of [-1, 1]) { const x0 = sd < 0 ? 0 : W - wd; rect(x0, 0, wd, H, { wash: '#fbf6e8', washA: 1, w: 6, col: '#6a4a2a' }); for (let q = 1; q < 4; q++) pencil([[x0 + wd * q / 4, 0], [x0 + wd * q / 4, H]], { w: 4, col: '#6a4a2a', pass2: false }); for (let q = 1; q < 10; q++) pencil([[x0, q * 192], [x0 + wd, q * 192]], { w: 4, col: '#6a4a2a', pass2: false }); } });
  } };
})();
