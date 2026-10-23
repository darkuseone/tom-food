/* 005 — `hook`: «Первый борщ варили из сорняка!» Дачный огород летом: покосившийся забор, борщевик выше человека, лопухи, теплица, соседка над забором.
   0,0 с — камера летит вдоль забора к гигантскому борщевику. Том-дачник на «сорняка» рвёт лист борщевика и в шоке смотрит то на лист, то на тарелку борща на столике.
   «Откусим историю!» — зачерпывает ложку борща со сметаной и кусает: брызги свёклы. */
(() => {
  EV.hk_weed = wtw('h1', 'сорняка!');
  EV.hk_dip = LS('h2') + 0.05;
  EV.hk_bite = wtw('h2', 'историю!') + 0.05;
  SHAKES.push([EV.hk_weed + 0.1, 0.2, 10], [EV.hk_bite, 0.2, 8]);
  KEYW.push('сорняка!');

  function garden(t) {                                                 // небо, дальний лес, теплица, забор
    vgrad(-600, 1300, ['#6ab0e8', '#a8d8f0', '#e8f0d8']); for (let i = 0; i < 4; i++) { const r = rng(5200 + i); blob([[r() * 1000 - 100, 160 + i * 60], [r() * 1000 + 100, 140 + i * 60], [r() * 1000 + 260, 180 + i * 60], [r() * 1000 + 60, 200 + i * 60]], { wash: '#ffffff', washA: 0.8, line: false }); }
    hills(820, 120, '#4a7a3a', 1.7); for (let i = 0; i < 12; i++) spruce(-100 + i * 110, 900 + (i % 3) * 10, 200, '#2a5a3a', 0.9);
    const gh = rect(720, 700, 320, 260, { wash: '#d8f0f8', washA: 0.5, w: 3, col: '#5a7a8a', key: 5210 }); for (let i = 0; i < 5; i++) pencil([[720 + i * 64, 700], [720 + i * 64, 960]], { w: 3, col: '#5a7a8a', pass2: false }); poly([[700, 700], [880, 600], [1060, 700]], { wash: '#d8f0f8', washA: 0.5, w: 3, col: '#5a7a8a' });
    for (let i = 0; i < 16; i++) { const x = -200 + i * 90, lean = (i % 3 - 1) * 0.06; push(x, 1180, 1, lean); rect(-30, -260, 60, 260, { wash: i % 2 ? '#8a6a44' : '#7a5a3a', washA: 1, w: 2, col: '#2a1a0a' }); poly([[-30, -260], [0, -290], [30, -260]], { wash: '#7a5a3a', washA: 1, w: 2, col: '#2a1a0a' }); pop(); }
    human(980, 960, 0.9, t, { body: '#d9482b', hair: '#c8c8c8', face: t > EV.hk_weed ? 'shock' : 'smile', armL: 'hold', armR: t > EV.hk_weed ? 'point' : 'hold', seed: 360, flip: -1, look: -0.6, hat: 'scarf', hatCol: '#3a7ab8', long: 1 });
  }
  function weeds(t) { hogweed(180, 1420, 1.9, t); hogweed(420, 1400, 1.5, t + 1); for (let i = 0; i < 6; i++) { const x = -60 + i * 220; blob([[x - 80, 1420], [x - 60, 1320], [x, 1290], [x + 60, 1320], [x + 80, 1420]], { wash: '#3a7a2a', washA: 1, w: 2, col: '#14300a' }); } }
  function table(t) { const x = 700, y = 1450; rect(x - 150, y - 20, 300, 24, { wash: '#a87a4a', washA: 1, w: 2.4, col: '#2a1408' }); for (const sd of [-1, 1]) pencil([[x + sd * 120, y], [x + sd * 120, y + 200]], { w: 10, col: '#7a5030' }); borschBowl(x, y - 40, 0.7, t);
    if (t > EV.hk_bite && t < EV.hk_bite + 1) { const k = t - EV.hk_bite; for (let i = 0; i < 16; i++) { const r = rng(5220 + i), a = r() * 6.28, v = 300 + r() * 500; ell(600 + Math.cos(a) * v * k, 1050 + Math.sin(a) * v * k + 800 * k * k, 9, 7, { wash: i % 3 ? BR.red : BR.smet, washA: 1 - k, line: false }); } } }
  WORLD.hook = (t, u, cat) => { lay(14, () => garden(t)); lay(2.2, () => weeds(t)); lay(1.2, () => table(t)); lay(1, () => cat()); };
  DIR.hook = {
    outfit: 'dacha', light: { side: 1, rim: '#fff4c0' }, grade: ['#8ad06a', 0.06],
    act: () => [[0, 'talk'], [EV.hk_weed, 'shock'], [EV.hk_dip, 'suspicious'], [EV.hk_bite - 0.1, 'grin'], [EV.hk_bite + 0.2, 'laugh']],
    pose: (t, u, b) => { const bite = t > EV.hk_bite - 0.3, dip = t > EV.hk_dip && !bite; return Object.assign(b, { x: 860, y: 1760, s: 1.2, flip: true, look: t < EV.hk_weed ? [0.8, -0.5] : t < EV.hk_dip ? [0.9, -0.2] : [0.6, 0.6],
      hand: bite ? [60, -360] : dip ? [200, -200] : [150, -330], handF: [-90, -230], prop: t < EV.hk_dip ? 'hogweedP' : 'spoonBorschP', tailUp: t > EV.hk_bite }); },
    cam: () => [[0, 300, 1100, 0.4], [0.5, 560, 1080, 0.08, 'x'], [EV.hk_weed, 480, 1000, 0.04], [EV.hk_dip, 720, 1200, 0.22], [EV.hk_bite, 760, 1120, 0.34], [S1.hook, 760, 1100, 0.4]]
  };
})();
