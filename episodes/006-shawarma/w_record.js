/* 006 — `record`: «А в июне в Оттаве выложили рекордную линию — 2451 шаурму!» Летняя Оттава: рыночная улица с кирпичными домами и навесами, вдали башня
   с часами и зелёная медная крыша, тюльпаны. По улице змейкой тянется бесконечный стол, на нём шаурма в ряд до горизонта, волонтёры в перчатках раскладывают.
   Счётчик на табло крутится до 2451, на «шаурму!» — медаль РЕКОРД и конфетти. Том-шеф с рулеткой. Переход В сцену: жёлтая лента рулетки вытягивается через кадр. */
(() => {
  EV.rc_ott = wtw('s10', 'Оттаве');
  EV.rc_line = wtw('s10', 'рекордную');
  EV.rc_num = wtw('s10', '2451');
  SHAKES.push([EV.rc_num + 0.6, 0.25, 10]);
  KEYW.push('2451');

  function town(t) { vgrad(-600, 1000, ['#5ab0f0', '#a8d8f8', '#f2f6f0']); push(860, 520, 1); rect(-50, -300, 100, 360, { wash: '#d8c8a8', washA: 1, w: 2.4, col: '#4a3a2a' }); ell(0, -220, 34, 34, { wash: '#fbf6ea', washA: 1, w: 2 }); pencil([[0, -220], [0, -240]], { w: 3, col: '#2a2a2a', pass2: false }); pencil([[0, -220], [14, -214]], { w: 3, col: '#2a2a2a', pass2: false }); poly([[-60, -300], [0, -420], [60, -300]], { wash: '#5aa88a', washA: 1, w: 2.4, col: '#1a4a3a' }); pop();
    for (let i = 0; i < 6; i++) { const x = -260 + i * 280, h = 360 + (i % 3) * 80; rect(x, 900 - h, 260, h, { wash: ['#a8483a', '#c86a4a', '#8a3a2a'][i % 3], washA: 1, w: 2.4, col: '#3a1a0a' }); for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) rect(x + 30 + c * 76, 940 - h + r * 100, 44, 60, { wash: '#f2f0e0', washA: 1, w: 1.4, col: '#3a2a1a' }); poly([[x, 900 - h * 0.3], [x + 260, 900 - h * 0.3], [x + 280, 960 - h * 0.3], [x - 20, 960 - h * 0.3]], { wash: ['#2a6a4a', '#d8b030', '#2a4a8a'][i % 3], washA: 1, w: 2, col: '#1a1a1a' }); } }
  function line(t) { const N = 26, vis = clamp((t - EV.rc_ott) / (EV.rc_num - EV.rc_ott + 0.4)); for (let i = N - 1; i >= 0; i--) { const q = i / N, d = Math.pow(q, 1.6), y = lerp(1300, 900, d), x = 540 + Math.sin(q * 7 - t * 0.2) * lerp(360, 60, d), s = lerp(1, 0.18, d);
      rect(x - 170 * s, y, 340 * s, 30 * s, { wash: '#fbfbf6', washA: 1, w: 1.4, col: '#8a8a7a' }); if (q < vis) for (let j = -1; j <= 1; j++) shawarmaRoll(x + j * 90 * s, y - 10 * s, 0.4 * s, 1.57); if (i % 6 === 2 && s > 0.3) human(x + 200 * s, y + 40 * s, 0.7 * s, t, { body: '#e8402a', hair: '#3a2a1a', face: 'grin', armL: 'hold', armR: 'swing', seed: 700 + i, look: -0.5 }); } }
  function board(t) { push(290, 1000, 1); rect(-170, -70, 340, 140, { wash: '#1a1a1a', washA: 1, w: 4, col: '#d6a842' }); const k = clamp((t - EV.rc_line) / (EV.rc_num - EV.rc_line + 0.4)); const n = Math.floor(sm(k) * 2451); txt(String(n), 0, 30, 84, { font: 'Osw', col: n >= 2451 ? '#f2d040' : '#5ae08a' }); pop();
    if (t > EV.rc_num + 0.4) { const p = popK(t, EV.rc_num + 0.4, 0.5); push(780, 1000, p, Math.sin(t * 3) * 0.05); pencil([[-30, -160], [0, -60], [30, -160]], { w: 14, col: '#c8282a' }); ell(0, 0, 90, 90, { wash: '#f2c838', washA: 1, w: 4, col: '#8a6a0a' }); txt('РЕКОРД', 0, 14, 34, { font: 'Osw', col: '#8a3a0a' }); pop(); for (let i = 0; i < 20; i++) { const r = rng(7300 + i), q = t - EV.rc_num - 0.4; if (q < 1.6) ell(r() * 1080, -50 + q * (400 + r() * 500) + r() * 200, 8, 5, { wash: ['#e8402a', '#ffffff', '#f2c838'][i % 3], washA: 1, line: false }); } } }
  WORLD.record = (t, u, cat) => { lay(12, () => town(t)); lay(1.4, () => { rect(-300, 900, 1700, 700, { wash: '#a8a49a', washA: 1, w: 2, col: '#4a4a44', key: 7310 }); line(t); }); lay(1, () => { board(t); cat(); }); };
  DIR.record = {
    outfit: 'chef', light: { side: 1, rim: '#fff8e0' }, grade: ['#5ab0f0', 0.04],
    act: () => [[S0.record, 'talk'], [EV.rc_ott, 'proud'], [EV.rc_line, 'awe'], [EV.rc_num + 0.4, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 880, y: 1800, s: 1.1, flip: true, look: [-0.6, -0.5], hand: t < EV.rc_num ? [150, -320] : [90, -420], handF: [-90, -230], point: t < EV.rc_num ? 1 : 0, prop: t > EV.rc_num ? 'shawarmaP' : null, tailUp: t > EV.rc_num }),
    cam: () => [[S0.record, 540, 900, 0.1], [EV.rc_ott, 540, 860, 0.1], [EV.rc_line, 560, 1000, 0.16, 'x'], [EV.rc_num, 560, 1100, 0.16], [S1.record, 580, 1120, 0.2]]
  };
  // ---------------------------------------------------------------- переход: лента рулетки вытягивается через кадр и открывает новую сцену полосой
  TRANS_IN.record = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = sm(k), x = lerp(-200, 1300, clamp(q * 1.4)), h = lerp(120, 2200, clamp((q - 0.5) / 0.5)); drawBuf(A, 1, 540, 960); inPath(pathOf([[0, 960 - h / 2], [x, 960 - h / 2], [x, 960 + h / 2], [0, 960 + h / 2]]), () => drawBuf(B, 1, 540, 960));
    scr(() => { if (h < 2000) { for (const yy of [960 - h / 2 - 60, 960 + h / 2]) { rect(-10, yy, x + 10, 60, { wash: '#f2d040', washA: 1, w: 3, col: '#5a4a0a' }); for (let i = 0; i < x / 40; i++) pencil([[i * 40, yy], [i * 40, yy + (i % 5 ? 20 : 40)]], { w: 2, col: '#1a1a1a', pass2: false }); } ell(x + 60, 960, 120, 120, { wash: '#2a2a2a', washA: 1, w: 4, col: '#0a0a0a' }); ell(x + 60, 960, 50, 50, { wash: '#f2d040', washA: 1, w: 2 }); } });
  } };
})();
