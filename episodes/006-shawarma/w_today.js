/* 006 — `today` + `button`: «Только скажи честно: шаурма или шаверма?» Та же ночная шаурмичная, что в хуке, но крупно: витрина, вертел шипит, пар.
   Хиро-шот — шаурма в разрезе на доске: глянец соуса, пар, хрустящий лаваш. Над Томом две вывески: слева ШАУРМА, справа ШАВЕРМА — на каждом слове загорается
   своя, Том держит по шаурме в каждой лапе и переводит взгляд, на «?» — облачко-комментарий. `button`: Том кусает шаурму, подмигивает.
   Переход В сцену: чесночный соус рисует по кадру зигзаг и заливает его. */
(() => {
  EV.td_hon = wtw('t1', 'честно:');
  EV.td_a = wtw('t1', 'шаурма');
  EV.td_b = wtw('t1', 'шаверма?');
  EV.bt_wink = wtw('x1', 'откусим!');
  KEYW.push('шаверма?');

  function shop(t) { vgrad(-600, 1300, ['#0a0a24', '#1a1440', '#3a2050']); rect(-300, 300, 1700, 1000, { wash: '#2a2a34', washA: 1, w: 3, col: '#0a0a10' }); for (let y = 0; y < 8; y++) for (let x = 0; x < 14; x++) rect(-300 + x * 120, 300 + y * 120, 120, 120, { line: true, w: 1, col: '#3a3a4a', a: 0.6 });
    donerCone(220, 1240, 0.7, t, { kind: 'chicken', shave: true });
    for (const [x, name, ev, c] of [[560, 'ШАУРМА', 'td_a', '#d9482b'], [880, 'ШАВЕРМА', 'td_b', '#2ab8e8']]) { const on = t > EV[ev] - 0.05; push(x, 520, 1, x < 700 ? -0.03 : 0.03); rect(-150, -60, 300, 120, { wash: '#14141c', washA: 1, w: 5, col: on ? c : '#4a4a5a' }); txt(name, 0, 20, 52, { font: 'Osw', col: on ? '#fff4e0' : '#5a5a6a' }); if (on) glow(0, 0, 220, x < 700 ? 'rgba(255,110,80,1)' : 'rgba(80,200,255,1)', 0.5); pop(); }
    if (t > EV.td_b + 0.3) { push(720, 760, popK(t, EV.td_b + 0.3)); blob([[-120, -70], [120, -70], [130, 50], [-20, 60], [-60, 110], [-60, 60], [-130, 50]], { wash: '#fbfbf6', washA: 1, w: 3, col: '#2a2a2a' }); txt('А ТЫ?', 0, 14, 50, { font: 'Osw', col: '#d9482b' }); pop(); } }
  function board(t) { rect(-300, 1380, 1700, 700, { wash: '#2a2a30', washA: 1, w: 3, col: '#0a0a10', key: 7400 }); push(420, 1480, 1); const b = rect(-300, -40, 600, 110, { wash: '#b8844a', washA: 1, w: 3, col: '#3a1a04' }); for (let i = 0; i < 5; i++) pencil([[-280, -20 + i * 20], [280, -18 + i * 20]], { w: 1.6, col: '#8a5a2a', a: 0.6, pass2: false }); pop();
    shawarmaRoll(300, 1430, 0.9, 1.45); shawarmaRoll(560, 1440, 0.9, -1.6); for (let i = 0; i < 4; i++) { const k = (t * 0.6 + i / 4) % 1; ell(420 + i * 30 - 45, 1360 - k * 220, 20 + k * 30, 14 + k * 20, { wash: '#ffffff', washA: 0.3 * (1 - k), line: false }); }
    sauceCup(140, 1490, 0.8, SW.toum, '#ffffff'); }
  WORLD.today = (t, u, cat) => { lay(10, () => shop(t)); lay(1.15, () => board(t)); lay(1, () => cat()); };
  DIR.today = {
    outfit: 'shaurma', light: { side: -1, rim: '#ff9a7a' }, grade: ['#6a3aa8', 0.06],
    act: () => [[S0.today, 'suspicious'], [EV.td_hon, 'sideeye'], [EV.td_a, 'grin'], [EV.td_b, 'wink'], [EV.td_b + 0.4, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 820, y: 1800, s: 1.16, flip: true, look: t < EV.td_a ? [0, 0] : t < EV.td_b ? [-0.7, -0.8] : [0.6, -0.8], hand: [170, -330], handF: [-170, -330], prop: 'shawarmaP' }),
    afterCat: (t, u, P) => shawarmaRoll(P.x + 170 * P.s, P.y - 390 * P.s, 0.5 * P.s, 0.2),
    cam: () => [[S0.today, 600, 1150, 0.18], [EV.td_a, 640, 900, 0.14], [EV.td_b, 740, 900, 0.16, 'x'], [S1.today, 720, 980, 0.18]]
  };
  // ---------------------------------------------------------------- переход: чесночный соус рисует зигзаг и заливает кадр
  TRANS_IN.today = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = clamp(k / 0.6), fill = clamp((k - 0.5) / 0.5); drawBuf(fill > 0.5 ? B : A, 1, 540, 960);
    scr(() => { const pts = []; const n = Math.floor(q * 40); for (let i = 0; i <= n; i++) pts.push([i % 2 ? 980 : 100, -60 + i * 52]); if (pts.length > 1) { pencil(pts, { w: 80 + fill * 140, col: SW.toum, a: 1 - Math.max(0, fill - 0.5) * 2, pass2: false }); pencil(pts.map(p => [p[0] - 14, p[1] - 10]), { w: 16, col: '#ffffff', a: 0.7 * (1 - fill), pass2: false }); } });
  } };
})();

(() => {                                                          // кнопка: шаурмичная, Том кусает шаурму и подмигивает на «откусим»
  WORLD.button = (t, u, cat) => { lay(10, () => { vgrad(-600, 1300, ['#0a0a24', '#1a1440', '#3a2050']); rect(-300, 300, 1700, 1000, { wash: '#2a2a34', washA: 1, w: 3, col: '#0a0a10' }); donerCone(200, 1240, 0.7, t, { kind: 'chicken', shave: true }); });
    lay(1.15, () => { rect(-300, 1380, 1700, 700, { wash: '#2a2a30', washA: 1, w: 3, col: '#0a0a10', key: 7410 }); shawarmaRoll(330, 1440, 0.9, 1.45); }); lay(1, () => cat()); };
  DIR.button = { outfit: 'shaurma', light: { side: -1, rim: '#ff9a7a' }, grade: ['#6a3aa8', 0.08], act: () => [[S0.button, 'grin'], [EV.bt_wink, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 720, y: 1820, s: 1.3, look: [0, 0], hand: t > EV.bt_wink - 0.3 ? [60, -360] : [110, -320], handF: [-110, -260], prop: t > EV.bt_wink ? 'shawarmaBiteP' : 'shawarmaP', tailUp: true }), cam: () => [[S0.button, 700, 1180, 0.24], [DUR, 680, 1200, 0.28]] };
  TRANS_IN.button = { a: 0.1, b: 0.3, runA: 1, fx(k, t, A, B) { drawBuf(k < 0.5 ? A : B, 1 + Math.sin(k * Math.PI) * 0.08, 540, 960); scr(() => whiteOut(Math.sin(k * Math.PI) * 0.8, '255,244,220')); } };
})();
