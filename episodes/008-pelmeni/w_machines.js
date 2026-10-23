/* 008 — `machines`: «Сегодня магазинные пельмени по пятнадцать граммов лепят машины — часто итальянские.» Цех: белый кафель, нержавеющие столы, лампы,
   рабочие в сетках и халатах. Большой формовочный автомат со стальными барабанами выдаёт пельмени на конвейер ровной рекой, дальше — морозильный тоннель
   и пачки. На «пятнадцать граммов» пельмень ложится на весы — табло «15 г»; на «машины» барабаны крутятся быстрее, счётчик штук мелькает; на «итальянские» —
   табличка MADE IN ITALY на боку автомата. Том — работник цеха в сетке. Переход В сцену: новая сцена въезжает на конвейерной ленте справа. */
(() => {
  EV.mc_15 = wtw('s9', 'пятнадцать');
  EV.mc_mach = wtw('s9', 'машины');
  EV.mc_it = wtw('s9', 'итальянские.');
  SHAKES.push([EV.mc_mach + 0.1, 0.18, 7]);
  KEYW.push('итальянские.');

  function hall(t) { vgrad(-600, 1500, ['#dfe6ea', '#eef2f4', '#d8dee2']); for (let y = 0; y < 14; y++) for (let x = 0; x < 12; x++) rect(-300 + x * 140, -200 + y * 110, 140, 110, { line: true, w: 1, col: '#b8c4cc', a: 0.6 }); for (let i = 0; i < 5; i++) { pencil([[-100 + i * 280, -300], [-100 + i * 280, 120]], { w: 3, col: '#5a6470', pass2: false }); rect(-160 + i * 280, 120, 120, 30, { wash: '#f6fbff', washA: 1, w: 2, col: '#5a6470' }); glow(-100 + i * 280, 160, 200, 'rgba(240,250,255,1)', 0.4); }
    for (let i = 0; i < 3; i++) human(100 + i * 160, 1060, 0.7, t, { body: '#f2f2f0', hair: '#3a2a1a', face: 'smile', armL: 'hold', armR: (Math.floor(t * 3 + i) % 2) ? 'swing' : 'hold', seed: 1080 + i, long: i % 2, hat: 'scarf', hatCol: '#f2f2f6' }); rect(-300, 1060, 1700, 30, { wash: '#a8b0b8', washA: 1, w: 2, col: '#4a5058' }); }
  function line_(t) { const fast = t > EV.mc_mach ? 2.6 : 1;
    push(300, 1210, 1); rect(-230, -330, 360, 330, { wash: '#c8ccd2', washA: 1, w: 4, col: '#3a3e46', key: 10600 }); shadeG(pathOf([[-230, -330], [130, -330], [130, 0], [-230, 0]]), -230, 0, 130, 0, '#ffffff', 0.3); for (const dx of [-120, 20]) { ell(dx, -200, 60, 60, { wash: '#a8acb4', washA: 1, w: 3, col: '#3a3e46' }); for (let s2 = 0; s2 < 8; s2++) { const a = s2 / 8 * 6.283 + t * 4 * fast * (dx < 0 ? 1 : -1); pencil([[dx, -200], [dx + Math.cos(a) * 56, -200 + Math.sin(a) * 56]], { w: 4, col: '#5a5e66', pass2: false }); } }
      ell(-150, -300, 16, 16, { wash: '#5ae08a', washA: 0.6 + 0.4 * Math.sin(t * 9), line: false }); ell(-110, -300, 16, 16, { wash: '#f2c838', washA: 1, line: false });
      if (t > EV.mc_it - 0.1) { push(-50, -60, popK(t, EV.mc_it - 0.1, 0.4)); rect(-130, -36, 260, 72, { wash: '#1a1a1a', washA: 1, w: 3, col: '#d6a842' }); txt('MADE IN ITALY', 0, 12, 34, { font: 'Osw', col: '#fff4d0' }); pop(); } pop();
    rect(430, 1150, 1000, 50, { wash: '#3a3e46', washA: 1, w: 3, col: '#1a1a1a' }); for (let i = 0; i < 12; i++) ell(450 + i * 80, 1176, 20, 20, { wash: '#6a6e76', washA: 1, w: 2 }); for (let i = 0; i < 16; i++) { const x = 430 + ((i * 70 + t * 160 * fast) % 1100); pelmen(x, 1136, 0.5, 0, { key: i }); }
    push(1000, 1060, 1); rect(-120, -260, 240, 260, { wash: '#a8c8e0', washA: 0.85, w: 4, col: '#3a4a5a' }); for (let q = 0; q < 5; q++) { const k = (t * 0.6 + q / 5) % 1; ell(-80 + q * 40, -100 - k * 120, 24, 16, { wash: '#ffffff', washA: 0.4 * (1 - k), line: false }); } txt('−18°', 0, -200, 40, { font: 'Osw', col: '#2a4a8a' }); pop();
    if (t > EV.mc_15 - 0.2) { push(560, 1450, 1); rect(-120, -30, 240, 50, { wash: '#e8eef2', washA: 1, w: 3, col: '#3a3e46' }); rect(-90, 0, 180, 60, { wash: '#2a2e36', washA: 1, w: 2 }); const g = Math.round(lerp(0, 15, clamp((t - EV.mc_15 + 0.2) / 0.5))); txt(g + ' г', 0, 44, 44, { font: 'Osw', col: '#5ae08a' }); pelmen(0, -50, 0.9, 0, { key: 99 }); pop(); }
    if (t > EV.mc_mach) { push(780, 860, 1); rect(-150, -50, 300, 100, { wash: '#1a1a1a', washA: 1, w: 3, col: '#5a6470' }); txt(String(1000 + Math.floor((t - EV.mc_mach) * 3600)).padStart(6, '0') + ' шт', 0, 20, 44, { font: 'Osw', col: '#ff8a5a' }); pop(); }
    quizStamp('ПРАВДА', 300, 760, t, EV.mc_it + 0.4, '#2a9a4a', -0.1, 0.8); }
  WORLD.machines = (t, u, cat) => { lay(10, () => hall(t)); lay(1.2, () => line_(t)); lay(1, () => { rect(-300, 1480, 1700, 600, { wash: '#c8ccd0', washA: 1, w: 2, col: '#5a6066', key: 10610 }); cat(); }); };
  DIR.machines = {
    outfit: 'fabA', light: { side: -1, rim: '#f0faff' }, grade: ['#8ab0c8', 0.04],
    act: () => [[S0.machines, 'talk'], [EV.mc_15, 'suspicious'], [EV.mc_mach, 'awe'], [EV.mc_it, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 900, y: 1820, s: 1.1, flip: true, look: [-0.7, -0.2], hand: [170, -330], handF: [-90, -230], point: t > EV.mc_mach ? 1 : 0 }),
    cam: () => [[S0.machines, 540, 1000, 0.1], [EV.mc_15, 560, 1300, 0.2, 'x'], [EV.mc_mach, 640, 1050, 0.12], [EV.mc_it, 340, 1100, 0.18, 'x'], [S1.machines, 360, 1100, 0.2]]
  };
  // ---------------------------------------------------------------- переход: новая сцена въезжает на конвейерной ленте справа
  TRANS_IN.machines = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = sm(k), x = lerp(W, 0, q); scr(() => { ctx.drawImage(A, x - W, 0); ctx.drawImage(B, x, 0); rect(-10, H - 120, W + 20, 120, { wash: '#3a3e46', washA: 1, w: 3, col: '#1a1a1a' }); for (let i = 0; i < 14; i++) ell(((i * 80 - q * 800) % (W + 80) + W + 80) % (W + 80) - 40, H - 60, 30, 30, { wash: '#6a6e76', washA: 1, w: 2 }); });
  } };
})();
