/* 009 — `shepherd`: «Версия этнографов: его пекли пастухи в горах — мука с собой, сыр на месте.» Высокогорное пастбище: снежные пики, облака ниже гор, каменная
   хижина-кош с дымком, отара, пастух у костра с котлом, лепёшка печётся на плоском камне. На «пастухи» по склону сбегает отара; на «мука» Том-пастух хлопает по
   мешку муки — облачко муки; на «сыр» пастух поднимает из котла белую головку сыра. Переход В сцену: облако пара из котла заволакивает кадр. */
(() => {
  EV.sh_herd = wtw('s2', 'пастухи');
  EV.sh_flour = wtw('s2', 'мука');
  EV.sh_cheese = wtw('s2', 'сыр');
  SHAKES.push([EV.sh_flour + 0.05, 0.15, 6]);
  KEYW.push('пастухи');

  function peaks(t) { vgrad(-600, 1100, ['#7ab0e0', '#a8d0ec', '#e8f0f2']); ell(860, 120, 70, 70, { wash: '#fff8d8', washA: 1, line: false }); glow(860, 120, 260, 'rgba(255,250,210,1)', 0.5);
    const P = [[-300, 900], [-80, 380], [120, 620], [320, 300], [560, 640], [760, 360], [980, 600], [1200, 420], [1400, 900]]; shape(P, { wash: '#8a8aa8', washA: 1, w: 2.4, col: '#3a3a5a', key: 10700 });
    for (const [x, y] of [[-80, 380], [320, 300], [760, 360], [1200, 420]]) poly([[x - 80, y + 110], [x, y], [x + 80, y + 110], [x + 40, y + 90], [x + 10, y + 120], [x - 30, y + 95]], { wash: '#fbfdff', washA: 1, w: 1.6, col: '#8a9ab8' });
    for (let i = 0; i < 6; i++) { const x = ((i * 260 + t * 14) % 1700) - 300; ell(x, 760 + (i % 2) * 40, 160, 34, { wash: '#ffffff', washA: 0.85, line: false }); ell(x + 90, 744 + (i % 2) * 40, 100, 30, { wash: '#ffffff', washA: 0.85, line: false }); } }
  function slope(t) { shape([[-300, 900], [200, 820], [600, 860], [1000, 800], [1400, 860], [1400, 1500], [-300, 1500]], { wash: '#7aa84a', washA: 1, w: 2.4, col: '#2a4a1a', key: 10710 });
    for (let i = 0; i < 40; i++) { const r = rng(10711 + i); pencil([[r() * 1500 - 200, 880 + r() * 500], [r() * 1500 - 196, 868 + r() * 500]], { w: 2, col: '#4a7a2a', a: 0.6, pass2: false }); }
    push(820, 930, 1); rect(-110, -110, 220, 110, { wash: '#9a9488', washA: 1, w: 2.4, col: '#3a3630' }); for (let q = 0; q < 12; q++) ell(-90 + (q % 6) * 36, -90 + Math.floor(q / 6) * 50, 16, 12, { wash: '#b8b0a0', washA: 0.8, w: 1, col: '#5a564c' }); poly([[-130, -100], [0, -170], [130, -100]], { wash: '#6a5a40', washA: 1, w: 2, col: '#2a1a0a' }); rect(-24, -60, 48, 60, { wash: '#2a1a0a', washA: 1, w: 1.6 });
      for (let q = 0; q < 4; q++) { const k = (t * 0.4 + q / 4) % 1; ell(60 + Math.sin(k * 4) * 10, -180 - k * 200, 14 + k * 20, 10 + k * 14, { wash: '#e8e8ea', washA: 0.5 * (1 - k), line: false }); } pop(); }
  function flock(t) { const run = clamp((t - EV.sh_herd + 0.2) / 2.2); for (let i = 0; i < 7; i++) { const r = rng(10720 + i); const x = lerp(-200 - r() * 300, 120 + i * 90 + r() * 40, sm(run)), y = 1040 + (i % 3) * 50 + r() * 20; sheep(x, y, 0.75 + (i % 3) * 0.1, t, { walk: run > 0 && run < 1, chew: run >= 1, flip: 1 }); }
    if (run > 0) { const dx = lerp(-300, 640, sm(run)); push(dx, 1140, 0.7); ell(0, -40, 50, 30, { wash: '#f2f0e6', washA: 1, w: 2, col: '#4a4a4a' }); ell(46, -64, 20, 18, { wash: '#f2f0e6', washA: 1, w: 2 }); ell(54, -76, 6, 10, { wash: '#4a4a4a', washA: 1, line: false }); for (const lx of [-30, 20]) pencil([[lx, -14], [lx + Math.sin(t * 14) * 8, 10]], { w: 8, col: '#f2f0e6', pass2: false }); pop(); } }
  function camp(t) { const lift = clamp((t - EV.sh_cheese) / 0.5);
    human(250, 1420, 1.12, t, { body: '#5a4030', hair: '#2a1a0a', face: lift > 0 ? 'grin' : 'calm', armL: 'hold', armR: lift > 0 ? 'up' : 'hold', seed: 1070, beard: 'long', hat: 'fur', hatCol: '#3a2a1a', look: 0.6 });
    push(430, 1420, 1); for (let i = 0; i < 5; i++) { const r = rng(10730 + i); pencil([[-60 + i * 30, 0], [-50 + i * 24, -30]], { w: 9, col: '#5a3a1a', pass2: false }); } for (let i = 0; i < 6; i++) { const k = (t * 3 + i / 6) % 1; blob([[-30 + i * 10, -10], [-20 + i * 10, -40 - k * 50], [-10 + i * 10, -10]], { wash: ['#ff6a1a', '#ffb020', '#ffd860'][i % 3], washA: 1 - k * 0.5, line: false }); } glow(0, -30, 140, 'rgba(255,160,60,1)', 0.5);
      pencil([[-70, -150], [0, -190], [70, -150]], { w: 5, col: '#3a2a1a' }); const pot = blob([[-70, -140], [-80, -80], [-50, -40], [50, -40], [80, -80], [70, -140]], { wash: '#3a3a3e', washA: 1, w: 3, col: '#0a0a0a', key: 10735 }); ell(0, -140, 70, 14, { wash: '#f6f2e0', washA: 1, w: 2, col: '#0a0a0a' });
      for (let q = 0; q < 4; q++) { const k = (t * 0.6 + q / 4) % 1; ell(-30 + q * 20, -170 - k * 160, 20 + k * 26, 14 + k * 16, { wash: '#ffffff', washA: 0.4 * (1 - k), line: false }); }
      if (lift > 0) { const hx = -180 + 0, hy = -330 * 1.12 - 120; ell(lerp(0, -160, lift), lerp(-150, -470, lift), 62, 46, { wash: '#fbfaf2', washA: 1, w: 2, col: '#b8b098' }); for (let i = 0; i < 4; i++) ell(lerp(0, -160, lift) - 20 + i * 14, lerp(-120, -440, lift) + i * 10, 4, 8, { wash: '#e8f0ff', washA: 0.8, line: false }); } pop();
    push(560, 1440, 1); ell(0, 0, 90, 24, { wash: '#8a8478', washA: 1, w: 2, col: '#3a3630' }); ell(0, -16, 64, 14, { wash: '#e8b860', washA: 1, w: 2, col: '#7a4a14' }); for (let i = 0; i < 5; i++) ell(-40 + i * 20, -18, 6, 3, { wash: '#a86a24', washA: 0.7, line: false }); pop(); }
  function sack(t, P) { const x = 540, y = 1500, k = popK(t, EV.sh_flour, 0.3); push(x, y, 1, 0); blob([[-60, 0], [-70, -90], [-40, -150], [-20, -170], [20, -170], [40, -150], [70, -90], [60, 0]], { wash: '#e8dcc0', washA: 1, w: 2.4, col: '#6a5a3a', key: 10740 }); pencil([[-26, -150], [26, -150]], { w: 5, col: '#8a6a3a', pass2: false }); txt('МУКА', 0, -70, 30, { font: 'Osw', col: '#6a4a1a' }); pop();
    if (t > EV.sh_flour - 0.05 && t < EV.sh_flour + 1.2) { const q = clamp((t - EV.sh_flour) / 1.1); for (let i = 0; i < 10; i++) { const a = -2.6 + i * 0.25; ell(x + Math.cos(a) * 140 * q, y - 150 + Math.sin(a) * 120 * q, 30 * (1 - q) + 8, 22 * (1 - q) + 6, { wash: '#fbf8f0', washA: 0.85 * (1 - q), line: false }); } } }
  WORLD.shepherd = (t, u, cat) => { lay(30, () => peaks(t)); lay(9, () => slope(t)); lay(4, () => flock(t)); lay(1.5, () => camp(t)); lay(1, () => { shape([[-300, 1460], [1400, 1440], [1400, 2100], [-300, 2100]], { wash: '#6a9a3a', washA: 1, w: 2, col: '#2a4a1a', key: 10750 }); sack(t); cat(); }); };
  DIR.shepherd = {
    outfit: 'svanA', light: { side: 1, rim: '#fff4d0' }, grade: ['#c8d8a0', 0.04],
    act: () => [[S0.shepherd, 'talk'], [EV.sh_herd, 'grin'], [EV.sh_flour, 'proud'], [EV.sh_cheese, 'awe']],
    pose: (t, u, b) => { const pat = t > EV.sh_flour - 0.2 && t < EV.sh_flour + 0.6; return Object.assign(b, { x: 730, y: 1800, s: 1.12, flip: true, look: t < EV.sh_flour ? [-0.8, -0.4] : t < EV.sh_cheese ? [-0.5, 0.3] : [-0.9, -0.2],
      hand: pat ? [180, -230 + Math.abs(Math.sin(t * 16)) * 30] : [130, -270], handF: [-90, -230] }); },
    cam: () => [[S0.shepherd, 560, 1050, 0.12], [EV.sh_herd, 520, 1060, 0.18], [EV.sh_flour, 640, 1260, 0.26, 'x'], [EV.sh_cheese, 420, 1200, 0.28], [S1.shepherd, 420, 1190, 0.3]]
  };
  TRANS_IN.shepherd = { a: 0.2, b: 0.5, runA: 1, fx(k, t, A, B) {             // облако пара из котла заволакивает кадр и рассеивается
    const q = Math.sin(k * Math.PI); drawBuf(k < 0.5 ? A : B, 1 + q * 0.04, 540, 960);
    scr(() => { for (let i = 0; i < 22; i++) { const r = rng(10760 + i), cx = r() * W, cy = H - k * H * 1.4 + r() * H * 0.9; ell(cx, cy, 260 + r() * 200, 180 + r() * 140, { wash: '#f8f6f0', washA: 0.85 * q, line: false }); } screenFill('#ffffff', 0.5 * q); });
  } };
})();
