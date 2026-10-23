/* 006 — `pastor`: «Добавили ананас — и вышло тако аль пастор!» Ночной Мехико 1960-х: неоновая вывеска TAQUERÍA, светящиеся окна, гирлянда лампочек, хромированная
   стойка. Тромпо — красный вертел «пастор» с ананасом на макушке. На «ананас» тайкеро срезает кусок ананаса, тот летит по дуге — Том ловит его тортильей;
   на «тако аль пастор» в лапе Тома готовое тако, стопка тако на тарелке, конфетти. Переход В сцену: кольцо ананаса — кадр открывается в «дырке» ломтика. */
(() => {
  EV.ps_pine = wtw('s6', 'ананас');
  EV.ps_taco = wtw('s6', 'тако');
  SHAKES.push([EV.ps_taco + 0.1, 0.2, 9]);
  KEYW.push('пастор!');

  function night(t) { vgrad(-600, 1300, ['#0a0a2a', '#2a1a4a', '#5a2a5a']); for (let i = 0; i < 5; i++) { const x = -240 + i * 320, h = 600 + (i % 2) * 160; rect(x, 1000 - h, 280, h, { wash: '#1a1a34', washA: 1, w: 2, col: '#06060e' }); windows(x + 20, 1040 - h, 240, h - 160, 3, 5, 6900 + i, 0.5, '#ffd890', '#2a2a44', 0.8); }
    push(540, 640, 1); rect(-300, -80, 600, 150, { wash: '#14142a', washA: 1, w: 4, col: '#e8287a' }); const fl = 0.8 + 0.2 * Math.sin(t * 13); txt('TAQUERÍA', 0, 24, 96, { font: 'Osw', col: '#ff6ab0', a: fl }); glow(0, 0, 360, 'rgba(255,90,170,1)', 0.35 * fl); pop();
    pencil([[-300, 800], [1400, 760]], { w: 2, col: '#3a3a3a', pass2: false }); for (let i = 0; i < 14; i++) { const x = -260 + i * 120; ell(x, 800 - i * 3 + 14, 8, 10, { wash: ['#ffd060', '#ff5a5a', '#5ae0a0'][i % 3], washA: 1, line: false }); glow(x, 814 - i * 3, 40, 'rgba(255,220,140,1)', 0.3); } }
  function stand(t) { rect(-300, 1180, 1700, 120, { wash: '#c8ccd0', washA: 1, w: 3, col: '#3a3e44', key: 6910 }); pencil([[-300, 1190], [1400, 1190]], { w: 4, col: '#ffffff', a: 0.7, pass2: false });
    donerCone(330, 1180, 0.62, t, { kind: 'pastor', pine: true, shave: true }); human(160, 1190, 0.78, t, { body: '#f2f2f2', hair: '#1a1a1a', face: t > EV.ps_pine ? 'grin' : 'smile', armL: 'hold', armR: t > EV.ps_pine && t < EV.ps_pine + 0.5 ? 'up' : 'swing', seed: 660, look: 0.5 }); stache(160, 1190, 0.78);
    const k = clamp((t - EV.ps_pine - 0.1) / 0.7); if (k > 0 && k < 1) { const x = lerp(330, 760, k), y = 820 - Math.sin(k * Math.PI) * 300 + k * 260; push(x, y, 1, k * 9); poly([[-20, -14], [20, -14], [24, 14], [-24, 14]], { wash: SW.pine, washA: 1, w: 2, col: '#8a6a0a' }); pop(); for (let i = 0; i < 4; i++) ell(x - i * 30 * (1 - k), y + i * 20, 4, 4, { wash: '#ffe080', washA: 0.6, line: false }); }
    for (let i = 0; i < 4; i++) taco(560 + (i % 2) * 40, 1150 - i * 26, 0.7, -0.1 + i * 0.05);
    if (t > EV.ps_taco) { bubbleTag('AL PASTOR', 760, 1040, t, EV.ps_taco, '#e8287a', 40, -0.05); for (let i = 0; i < 18; i++) { const r = rng(6920 + i), k2 = t - EV.ps_taco; if (k2 < 1.5) ell(r() * 1080, -100 + k2 * (400 + r() * 500) + r() * 300, 8, 5, { wash: PPc[i % 4], washA: 1, line: false }); } } }
  const PPc = ['#e8287a', '#2ab8e8', '#f2c838', '#3ab86a'];
  WORLD.pastor = (t, u, cat) => { lay(12, () => night(t)); lay(1.3, () => stand(t)); lay(1, () => { rect(-300, 1460, 1700, 600, { wash: '#3a3a44', washA: 1, w: 2, col: '#14141a', key: 6930 }); for (let i = 0; i < 6; i++) pencil([[-300 + i * 300, 1470], [-200 + i * 300, 2000]], { w: 40, col: '#ff6ab0', a: 0.05, pass2: false }); cat(); }); };
  DIR.pastor = {
    outfit: 'diner', light: { side: -1, rim: '#ff8ac0' }, grade: ['#a82a7a', 0.06],
    act: () => [[S0.pastor, 'talk'], [EV.ps_pine, 'awe'], [EV.ps_pine + 0.6, 'grin'], [EV.ps_taco, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 840, y: 1790, s: 1.12, flip: true, look: t < EV.ps_pine + 0.7 ? [-0.6, -0.8] : [-0.2, 0.2], hand: t < EV.ps_pine + 0.5 ? [80, -440] : [110, -360], handF: [-90, -230], prop: 'tacoP', tailUp: t > EV.ps_taco }),
    cam: () => [[S0.pastor, 540, 1000, 0.12], [EV.ps_pine, 560, 1000, 0.16], [EV.ps_taco, 720, 1260, 0.26, 'x'], [S1.pastor, 720, 1260, 0.3]]
  };
  // ---------------------------------------------------------------- переход: кольцо ананаса — новый кадр в «дырке» ломтика, ломтик улетает за кадр
  TRANS_IN.pastor = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = sm(k), R = lerp(0, 1600, q), Rin = R * 0.75; drawBuf(A, 1, 540, 960); inCircle(540, 960, Rin, () => drawBuf(B, 1, 540, 960));
    scr(() => { ctx.save(); ctx.beginPath(); ctx.arc(540, 960, R, 0, 6.283); ctx.arc(540, 960, Rin, 0, 6.283, true); ctx.fillStyle = SW.pine; ctx.fill('evenodd'); ctx.restore(); for (let i = 0; i < 24; i++) { const a = i / 24 * 6.283; pencil([[540 + Math.cos(a) * Rin, 960 + Math.sin(a) * Rin], [540 + Math.cos(a) * R, 960 + Math.sin(a) * R]], { w: 3, col: '#c8961a', a: 0.6, pass2: false }); } pencil(ellPts(540, 960, R, R, 0, 0, 60), { w: 8, col: '#8a6a0a', pass2: false }); });
  } };
})();
