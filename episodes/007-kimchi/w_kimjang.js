/* 007 — `kimjang`: «Сегодня кимджан — засолка на зиму всей семьёй — в списке ЮНЕСКО.» Площадь в ноябре: длинные столы под навесами, горы засоленной
   капусты в сетках, тазы с красной пастой, сотни людей в фартуках и красных резиновых перчатках натирают кочаны; коробки с готовым кимчи — раздавать соседям;
   гирлянды флажков (без государственных символов), высотки на фоне. На «всей семьёй» в кадр втягиваются бабушка, родители, дети; на «ЮНЕСКО» над площадью
   раскрывается свиток-грамота НАСЛЕДИЕ ЧЕЛОВЕЧЕСТВА · 2013. Том в стёганой жилетке. Переход В сцену: рука в красной перчатке размазывает пасту по кадру. */
(() => {
  EV.kj_fam = wtw('s9', 'всей');
  EV.kj_un = wtw('s9', 'списке');
  SHAKES.push([EV.kj_un + 0.2, 0.18, 8]);
  KEYW.push('ЮНЕСКО.');

  function plaza(t) { vgrad(-600, 1100, ['#8ac0e8', '#c8e0f0', '#f2f2ea']); for (let i = 0; i < 7; i++) { const x = -260 + i * 220, h = 420 + (i % 3) * 160; rect(x, 900 - h, 190, h, { wash: ['#c8ccd4', '#a8b0bc', '#d8d4cc'][i % 3], washA: 1, w: 2, col: '#4a4e58' }); windows(x + 15, 930 - h, 160, h - 80, 3, 6, 8600 + i, 0.3, '#fff0c0', '#6a7a8a', 0.7); }
    for (let r = 0; r < 2; r++) { pencil([[-300, 760 + r * 70], [1400, 740 + r * 70]], { w: 2, col: '#4a4a4a', pass2: false }); for (let i = 0; i < 18; i++) poly([[-280 + i * 100, 754 + r * 70 - i * 1.1], [-210 + i * 100, 754 + r * 70 - i * 1.1], [-245 + i * 100, 810 + r * 70 - i * 1.1]], { wash: ['#e8402a', '#f2c838', '#2a6ab8', '#3aa84a', '#f2f2f2'][(i + r) % 5], washA: 0.95, w: 1.2, col: '#3a3a3a' }); }
    if (t > EV.kj_un - 0.2) { const k = sm(clamp((t - EV.kj_un + 0.2) / 0.5)); push(640, 520, 1); rect(-280 * k, -110, 560 * k, 220, { wash: '#f6eed8', washA: 1, w: 4, col: '#a8282a' }); for (const sd of [-1, 1]) ell(sd * 280 * k, 0, 22, 120, { wash: '#c8a060', washA: 1, w: 2.4, col: '#6a4a14' });
      if (k > 0.8) { txt('НАСЛЕДИЕ', 0, -36, 54, { font: 'Osw', col: '#a8282a' }); txt('ЧЕЛОВЕЧЕСТВА · 2013', 0, 30, 36, { font: 'Osw', col: '#2a4a8a' }); txt('ЮНЕСКО', 0, 80, 30, { font: 'Hand', col: '#5a4a3a' }); } pop(); } }
  function tables(t) { for (let row = 0; row < 2; row++) { const y = 1080 + row * 200, s = 0.72 + row * 0.1; rect(-300, y, 1700, 30, { wash: '#f2f2f2', washA: 1, w: 2, col: '#6a6a6a' }); rect(-300, y - 6, 1700, 10, { wash: '#2a6ab8', washA: 1, line: false });
      for (let i = 0; i < 6; i++) { const x = -120 + i * 230 + row * 110; const fam = row === 1 && t > EV.kj_fam - 0.2 && i < 3; human(x, y + 10, s, t, { body: ['#e86a8a', '#2a6ab8', '#f2a040', '#3aa84a', '#8a3aa8', '#f2f2f2'][(i + row) % 6], hair: ['#1a1a1a', '#c8c8c8', '#3a2a1a'][i % 3], face: t > EV.kj_un ? 'grin' : 'smile', armL: 'hold', armR: (Math.floor(t * 3 + i) % 2) ? 'swing' : 'hold', seed: 860 + i + row * 10, long: (i + row) % 2, hat: i % 2 ? 'scarf' : null, hatCol: '#f2f2f2', look: 0.2 });
        push(x + 60 * s, y - 10, s); ell(0, 0, 70, 16, { wash: '#d9282b', washA: 1, w: 2, col: '#5a0a0a' }); kimchiQuarter(0, -14, 0.36, (i % 2 ? 0.2 : -0.2)); pop(); } }
    if (t > EV.kj_fam - 0.3) { const k = sm(clamp((t - EV.kj_fam + 0.3) / 0.6)); for (let i = 0; i < 3; i++) human(lerp(-200, 140 + i * 110, k), 1420, [0.9, 0.86, 0.55][i], t, { body: ['#a8282a', '#2a5a8a', '#f2c838'][i], hair: ['#c8c8c8', '#1a1a1a', '#3a2a1a'][i], face: 'grin', armL: 'wave', armR: 'hold', seed: 880 + i, long: i === 0 ? 1 : 0, hat: i === 0 ? 'scarf' : null, hatCol: '#e86a8a', look: 0.5 }); bubbleTag('ВСЕЙ СЕМЬЁЙ', 280, 1080, t, EV.kj_fam + 0.1, '#e86a8a', 32, -0.05); }
    for (let i = 0; i < 4; i++) { push(720 + i * 110, 1400, 1); rect(-50, -60, 100, 60, { wash: '#c8a060', washA: 1, w: 2, col: '#5a3a14' }); pencil([[-50, -40], [50, -40]], { w: 3, col: '#d9282b', pass2: false }); pop(); } }
  WORLD.kimjang = (t, u, cat) => { lay(12, () => plaza(t)); lay(1.3, () => tables(t)); lay(1, () => { rect(-300, 1450, 1700, 600, { wash: '#b8b4ac', washA: 1, w: 2, col: '#5a5a54', key: 8610 }); cat(); }); };
  DIR.kimjang = {
    outfit: 'kimjangA', light: { side: -1, rim: '#fff8e0' }, grade: ['#e8a0a0', 0.05],
    act: () => [[S0.kimjang, 'talk'], [EV.kj_fam, 'grin'], [EV.kj_un, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 880, y: 1800, s: 1.1, flip: true, look: t < EV.kj_un ? [-0.6, -0.2] : [-0.5, -0.8], hand: [160, -320], handF: [-90, -230], prop: 'napaP', point: t > EV.kj_un ? 1 : 0 }),
    cam: () => [[S0.kimjang, 520, 1000, 0.1], [EV.kj_fam, 460, 1250, 0.16, 'x'], [EV.kj_un, 600, 900, 0.14, 'x'], [S1.kimjang, 600, 920, 0.16]]
  };
  // ---------------------------------------------------------------- переход: рука в красной перчатке проводит по кадру и размазывает пасту
  TRANS_IN.kimjang = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = sm(k), y = lerp(-300, H + 300, q); drawBuf(A, 1, 540, 960); inPath(pathOf([[0, 0], [W, 0], [W, y - 200], [0, y + 200]]), () => drawBuf(B, 1, 540, 960));
    scr(() => { pencil([[-50, y + 260], [W + 50, y - 140]], { w: 140, col: KM.red, a: 0.9, pass2: false }); for (let i = 0; i < 10; i++) ell(i * 120, y + 200 - i * 40 + 90, 14, 10, { wash: KM.redD, washA: 0.8, line: false });
      push(540, y + 40, 2.4, -0.35); blob([[-60, 60], [-70, -20], [-50, -70], [-30, -90], [-10, -70], [10, -96], [30, -70], [50, -80], [64, -40], [60, 60]], { wash: '#e8302a', washA: 1, w: 3, col: '#6a0a0a' }); rect(-56, 60, 112, 80, { wash: '#c8201a', washA: 1, w: 3, col: '#6a0a0a' }); pop(); });
  } };
})();
