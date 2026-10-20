/* 002 — `jar`: «А майонез в банке звался „Провансаль“ — как соус из старинного рецепта!» Гастроном 1970-х: полки с пирамидами банок, очередь,
   продавщица в белом колпаке у весов, плакат «ВКУСНО И ПИТАТЕЛЬНО». Том поднимает банку «Провансаль» к свету — на «Провансаль» этикетка горит ценником;
   на «старинного рецепта» за стеклом банки проступает сепией соусник XIX века с надписью «sauce provençale» — ниточка к старому рецепту.
   Переход В сцену: крышка банки накрывает кадр, проворачивается и улетает вверх. */
(() => {
  EV.jr_jar = wtw('s2', 'банке');
  EV.jr_prov = wtw('s2', 'Провансаль');
  EV.jr_old = wtw('s2', 'старинного');
  KEYW.push('«Провансаль»', 'старинного');

  function shop(t) {                                                    // стены гастронома: кафель, плакат, часы, лампы-шары
    vgrad(-500, 1600, ['#e8e2cc', '#d8d0b4', '#c8bc98']); for (let y = 700; y < 1200; y += 50) for (let x = -400; x < 1500; x += 100) rect(x + (y / 50 % 2) * 50, y, 100, 50, { wash: '#e8eee4', washA: 0.8, w: 1, col: '#9aa89a', a: 0.4 });
    push(800, 300, 1, 0.01); rect(-200, -170, 400, 340, { wash: '#f4ead0', washA: 1, w: 2.4, col: '#4a2a14' }); rect(-200, -170, 400, 80, { wash: '#d9482b', washA: 1, w: 2, col: '#4a0e08' }); txt('ВКУСНО', 0, -130, 48, { font: 'Osw', col: '#fff8ec' });
    mayoJar(-60, 130, 0.9, t); txt('И ПИТАТЕЛЬНО', 80, -50, 30, { font: 'Osw', col: '#a8241e' }); for (let i = 0; i < 3; i++) ell(110, 20 + i * 40, 36, 14, { wash: OL.mayo, washA: 1, w: 1.4, col: '#a89a6a' }); pop();
    for (const x of [140, 540, 940]) { pencil([[x, -200], [x, 60]], { w: 3, col: '#4a4a4a', pass2: false }); ell(x, 100, 54, 54, { wash: '#fff8e0', washA: 1, w: 2, col: '#8a8a7a' }); glow(x, 100, 220, 'rgba(255,240,190,1)', 0.35); }
    push(260, 330, 1); ell(0, 0, 70, 70, { wash: '#f4f2ea', washA: 1, w: 3, col: '#2a2a2a' }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; pencil([[Math.cos(a) * 58, Math.sin(a) * 58], [Math.cos(a) * 66, Math.sin(a) * 66]], { w: 3, col: '#2a2a2a', pass2: false }); } pencil([[0, 0], [0, -50]], { w: 5, col: '#2a2a2a' }); pencil([[0, 0], [Math.cos(t * 0.5) * 40, Math.sin(t * 0.5) * 40]], { w: 3, col: '#d9482b', pass2: false }); pop();
  }
  function shelves(t) {                                                 // полки с пирамидами банок и консервов
    for (let r = 0; r < 3; r++) { const y = 560 + r * 170; rect(-300, y, 1700, 18, { wash: '#a8845a', washA: 1, w: 2, col: '#3a2410' });
      for (let i = 0; i < 20; i++) { const x = -260 + i * 84; if (r === 1) { push(x, y, 0.5); mayoJar(0, 0, 1, t); pop(); } else { push(x, y, 1); const c = rect(-30, -90, 60, 90, { wash: r ? '#c8ccd0' : '#e8c070', washA: 1, w: 2, col: '#3a3e44' }); rect(-30, -70, 60, 46, { wash: ['#2e7a3a', '#d9482b', '#2a4a8a'][(i + r) % 3], washA: 1, w: 1.4 }); pop(); } } }
  }
  function queue(t) {                                                   // очередь: пальто, шапки, авоськи; продавщица у весов
    const ppl = [[-120, '#5a4a3a', 'fur', '#3a2a1a'], [60, '#2a3a5a', 'cap', '#5a5a5a'], [220, '#7a3a3a', 'scarf', '#c8b080'], [1220, '#3a5a4a', 'fur', '#6a4a2a']];
    for (const [x, b, h, hc] of ppl) human(x, 1290, 0.95, t, { body: b, legs: '#2a2a2a', hair: '#3a2a1a', hat: h, hatCol: hc, long: 1, face: t > EV.jr_prov ? 'shock' : 'calm', armL: 'hold', armR: x > 1000 ? 'point' : 'down', look: x > 1000 ? -0.8 : 0.6, seed: 70 + x, flip: x > 1000 ? -1 : 1 });
    push(380, 1210, 1, 0.1); pencil([[0, 0], [10, 80]], { w: 2, col: '#5a5a5a', pass2: false }); for (let i = 0; i < 4; i++) pencil(spline([[-40, 80], [0, 160 + i * 4], [40, 80]], false, 5), { w: 1.6, col: '#3a6a3a', a: 0.8, pass2: false }); pop();
    human(980, 1250, 1.0, t, { body: '#f6f4ee', legs: '#f6f4ee', hair: '#c88a3a', hat: 'cap', hatCol: '#ffffff', long: 1, face: 'calm', armL: 'hips', armR: 'hold', seed: 77, flip: -1 });
    push(860, 1260, 1); rect(-90, -20, 180, 20, { wash: '#c8ccd0', washA: 1, w: 2, col: '#3a3e44' }); ell(0, -40, 70, 70, { wash: '#f4f2ea', washA: 1, w: 2.4, col: '#3a3e44' }); pencil([[0, -40], [Math.sin(t * 2) * 40, -90]], { w: 3, col: '#d9482b', pass2: false }); for (const sd of [-1, 1]) ell(sd * 80, -130, 50, 10, { wash: '#d8dce0', washA: 1, w: 2 }); pop();
  }
  function counter(t) { const c = rect(-300, 1300, 1700, 800, { wash: '#b8946a', washA: 1, w: 3, col: '#3a2410', key: 4040 }); shadeG(c.path, 0, 1300, 0, 1800, '#5a3a1a', 0.5); rect(-300, 1300, 1700, 40, { wash: '#d8dce0', washA: 1, w: 2.4, col: '#3a3e44' });
    for (let i = 0; i < 6; i++) pencil([[-200 + i * 300, 1360], [-200 + i * 300, 2100]], { w: 3, col: '#5a3a1a', a: 0.5, pass2: false });
    push(200, 1330, 1); for (let i = 0; i < 3; i++) for (let k = 0; k <= i; k++) { push((k - i / 2) * 90, -(2 - i) * 130, 0.62); mayoJar(0, 0, 1, t); pop(); } pop(); }
  function ghost(t) {                                                   // соусник XIX века проступает сепией в стекле банки
    if (t < EV.jr_old - 0.2) return; const k = sm(clamp((t - EV.jr_old + 0.2) / 0.5));
    ctx.save(); ctx.globalAlpha = 0.92 * k; push(380, 900, 0.85, -0.05); ell(0, 0, 300, 220, { wash: '#f2dcae', washA: 1, w: 6, col: '#8a5a20' }); ell(0, 0, 280, 200, { wash: '#e8c890', washA: 0.5, w: 2, col: '#a87a3a' }); glow(0, 0, 300, 'rgba(255,220,150,1)', 0.3);
    const b = blob([[-150, 40], [-130, -30], [-40, -60], [120, -60], [190, -90], [170, -30], [120, 40], [0, 70]], { wash: '#f4e6c0', washA: 1, w: 2.4, col: '#6a4a1a' }); shadeG(b.path, 0, -60, 0, 70, '#b8945a', 0.4);
    pencil(spline([[-150, 0], [-220, -40], [-210, 40], [-140, 30]], false, 6), { w: 6, col: '#8a6a3a' }); ell(0, 90, 120, 20, { wash: '#e8d4a0', washA: 1, w: 2, col: '#6a4a1a' });
    txt('sauce provençale', 0, -120, 40, { font: 'Hand', col: '#6a3a10' }); pop(); ctx.restore();
  }
  WORLD.jar = (t, u, cat) => {
    lay(14, () => { shop(t); }); lay(6, () => { shelves(t); haze('#f8eed4', 0.08); }); lay(3, () => { queue(t); counter(t); haze('#f8eed4', 0.04); });
    
    lay(1, () => { cat(); });
    lay(0.85, () => { ghost(t); if (t > EV.jr_prov) bubbleTag('ПРОВАНСАЛЬ', 820, 1080, t, EV.jr_prov, '#d9482b', 64, 0.04); });
  };
  DIR.jar = {
    outfit: 'sovietA', light: { side: -1, rim: '#fff4d0' }, grade: ['#e8d8a0', 0.08],
    act: () => [[S0.jar, 'suspicious'], [EV.jr_jar, 'sideeye'], [EV.jr_prov, 'awe'], [EV.jr_old, 'shock'], [EV.jr_old + 0.7, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1820, s: 1.3, look: t > EV.jr_old ? [0, -0.9] : [0.5, -0.4], hand: [150, -400 - sm(clamp((t - EV.jr_jar) / 0.4)) * 80], handF: [-120, -380] }),
    afterCat: (t, u, P) => { const hx = P.x + 150 * P.s, hy = P.y + (-400 - sm(clamp((t - EV.jr_jar) / 0.4)) * 80) * P.s; mayoJar(hx - 10, hy + 90, 1.25, t, {}); glow(hx - 50, hy - 40, 60, 'rgba(255,255,255,1)', 0.5); },
    cam: () => [[S0.jar, 600, 1000, 0.3], [S0.jar + 0.8, 620, 1100, 0.18, 'x'], [EV.jr_old, 600, 900, 0.22], [S1.jar, 600, 860, 0.28]]
  };
  // ---------------------------------------------------------------- переход: крышка банки накрывает кадр, проворачивается и улетает вверх
  TRANS_IN.jar = { a: 0.3, b: 0.45, runA: 1, fx(k, t, A, B) {
    const down = sm(clamp(k / 0.45)), up = sm(clamp((k - 0.5) / 0.5)); drawBuf(k < 0.5 ? A : B, k < 0.5 ? 1 + 0.1 * down : 1.08 - 0.08 * up, 540, 960);
    scr(() => { const R = lerp(150, 1250, down), y = 960 - up * 2600, rot = k * 5;
      push(540, y, 1, rot); const L = ell(0, 0, R, R, { wash: '#c8b070', washA: 1, w: 6, col: '#4a3a1a', key: 4090 }); metalG(L.path, -R * 0.3, -R * 0.3, R * 1.2, '#fff4c8', '#c8b070', '#6a5420');
      for (let i = 0; i < 48; i++) { const a = i / 48 * 6.283; pencil([[Math.cos(a) * R * 0.92, Math.sin(a) * R * 0.92], [Math.cos(a) * R, Math.sin(a) * R]], { w: 4, col: '#6a5420', a: 0.7, pass2: false, gap: false }); }
      pencil(ellPts(0, 0, R * 0.7, R * 0.7, 0, 0, 50), { w: 5, col: '#8a7030', a: 0.6, pass2: false }); txt('ПРОВАНСАЛЬ', 0, 0, R * 0.16, { font: 'Osw', col: '#6a3a10', a: 0.8 }); pop(); });
  } };
})();
