/* 005 — `america`: «Картошка и помидоры приплыли из Америки, а в борщ попали лишь в девятнадцатом веке.» Гавань XVIII–XIX века: море, парусники на рейде,
   пирс, грузчики катят бочки, кран-журавль поднимает сетку. Том-матрос на палубе: на «Картошка» из сетки сыплется картошка, на «помидоры» — помидоры;
   на «Америки» вдали за морем на облаке-карте проступает силуэт континента; на «борщ» картошка и помидор плюхаются в котёл на палубе; «девятнадцатом» — ценник XIX.
   Переход В сцену: огромный парус падает сверху, надувается ветром и улетает вправо. */
(() => {
  EV.am_pot = wtw('s5', 'Картошка');
  EV.am_tom = wtw('s5', 'помидоры');
  EV.am_far = wtw('s5', 'Америки');
  EV.am_drop = wtw('s5', 'борщ');
  EV.am_xix = wtw('s5', 'девятнадцатом');
  SHAKES.push([EV.am_drop + 0.35, 0.2, 9]);
  KEYW.push('Америки');

  function sea(t) { vgrad(-600, 1000, ['#5aa0d8', '#9ad0ec', '#e8f4f0']); for (let i = 0; i < 4; i++) { const r = rng(5700 + i), x = (r() * 1400 + t * 14) % 1600 - 300; blob([[x, 200 + i * 70], [x + 160, 180 + i * 70], [x + 300, 220 + i * 70], [x + 120, 240 + i * 70]], { wash: '#ffffff', washA: 0.85, line: false }); }
    const k = clamp((t - EV.am_far + 0.1) / 0.6); if (k > 0) { push(820, 420, 0.9); blob([[-120, -120], [-40, -150], [40, -120], [20, -40], [-30, 0], [10, 60], [60, 140], [20, 180], [-40, 120], [-70, 40], [-140, -40]], { wash: '#d8b878', washA: 0.85 * k, w: 2.6, col: '#5a3a14', a: k }); pop(); bubbleTag('АМЕРИКА', 820, 640, t, EV.am_far, '#2a6a9a', 34, -0.05); }
    rect(-300, 760, 1700, 600, { wash: '#2a7aa8', washA: 1, line: false }); for (let i = 0; i < 22; i++) { const x = ((i * 97 + t * (20 + i % 3 * 10)) % 1700) - 300, y = 790 + (i % 6) * 60; pencil([[x, y], [x + 40, y - 6], [x + 80, y]], { w: 3, col: '#d8f0f8', a: 0.7, pass2: false }); }
    for (let i = 0; i < 2; i++) { const x = 140 + i * 380, y = 780 + i * 10, s = 0.5 + i * 0.12; push(x, y + Math.sin(t * 1.4 + i) * 4, s); poly([[-140, 0], [140, 0], [100, 50], [-110, 50]], { wash: '#5a3a1a', washA: 1, w: 2.4, col: '#1a0a04' }); for (const m of [-50, 50]) { pencil([[m, 0], [m, -260]], { w: 6, col: '#3a2410' }); blob([[m - 70, -240], [m + 70, -240], [m + 80, -60], [m - 60, -50]], { wash: '#f2ead6', washA: 1, w: 2, col: '#8a7a5a' }); } pop(); } }
  function pier(t) { const p = rect(-300, 1040, 1000, 80, { wash: '#7a5a3a', washA: 1, w: 3, col: '#2a1408', key: 5710 }); for (let i = 0; i < 8; i++) pencil([[-260 + i * 130, 1120], [-260 + i * 130, 1260]], { w: 16, col: '#4a3018' });
    human(80, 1050, 0.75, t, { body: '#8a5a3a', hair: '#2a1a0a', face: 'grin', armL: 'hold', armR: 'hold', seed: 390, beard: true, hat: 'cap', hatCol: '#3a3a5a' }); barrel(170, 1050, 0.45, t, { lid: true });
    human(330, 1050, 0.72, t, { body: '#3a5a7a', hair: '#8a5a2a', face: t > EV.am_pot ? 'shock' : 'calm', armL: 'hold', armR: t > EV.am_pot ? 'point' : 'hold', seed: 391, look: 0.6 });
    // кран-журавль и сетка
    pencil([[560, 1050], [560, 560], [880, 520]], { w: 14, col: '#5a3a1a' }); pencil([[880, 520], [880, 640 + Math.sin(t * 1.5) * 10]], { w: 2.4, col: '#3a2a1a', pass2: false });
    push(880, 700 + Math.sin(t * 1.5) * 10, 1, Math.sin(t * 1.5) * 0.05); const net = blob([[-90, -60], [90, -60], [110, 30], [0, 90], [-110, 30]], { wash: '#c8a868', washA: 0.4, w: 2.4, col: '#5a3a1a' }); for (let i = -3; i <= 3; i++) pencil([[i * 28, -60], [i * 24, 80]], { w: 1.4, col: '#5a3a1a', pass2: false });
    potato(-40, 0, 0.5, 0.3); tomato(30, 10, 0.55, 0); potato(10, 40, 0.45, -0.4); pop();
    for (const [t0, kind] of [[EV.am_pot, 'p'], [EV.am_tom, 't']]) { const k = t - t0; if (k > 0 && k < 1.6) for (let i = 0; i < 4; i++) { const x = 840 + i * 26, y = 780 + 600 * Math.min(k, 0.9) ** 2; kind === 'p' ? potato(x, Math.min(y, 1300), 0.38, i + k * 4) : tomato(x, Math.min(y, 1300), 0.4, i); } } }
  function deck(t) { const d = rect(-300, 1420, 1700, 600, { wash: '#8a6440', washA: 1, w: 3, col: '#2a1408', key: 5720 }); for (let i = 0; i < 6; i++) pencil([[-300, 1460 + i * 70], [1400, 1460 + i * 70]], { w: 2, col: '#4a2a10', a: 0.6, pass2: false });
    rect(-300, 1380, 1700, 40, { wash: '#5a3a1a', washA: 1, w: 3, col: '#1a0a04' }); for (let i = 0; i < 12; i++) pencil([[-280 + i * 140, 1380], [-280 + i * 140, 1300]], { w: 10, col: '#5a3a1a' }); pencil([[-300, 1300], [1400, 1300]], { w: 12, col: '#6a4a2a' });
    const cx = 400, cy = 1430; pencil([[cx - 90, cy + 80], [cx, cy - 120], [cx + 90, cy + 80]], { w: 6, col: '#3a2a1a', pass2: false }); clayPot(cx, cy - 20, 0.55, t, { col: t > EV.am_drop + 0.5 ? BR.red : '#c8a868', steam: true });
    const k = clamp((t - EV.am_drop) / 0.5); if (k > 0 && k < 1) { potato(cx - 30, lerp(1000, 1320, k * k), 0.4, k * 6); tomato(cx + 30, lerp(960, 1320, k * k), 0.42, 0); }
    if (k >= 1 && t < EV.am_drop + 1.2) for (let i = 0; i < 8; i++) { const q = t - EV.am_drop - 0.5, a = i / 8 * 3.14 + 3.14; ell(cx + Math.cos(a) * 200 * q, 1320 + Math.sin(a) * 200 * q + 300 * q * q, 7, 5, { wash: BR.red, washA: 1 - q, line: false }); }
    if (t > EV.am_xix) bubbleTag('XIX ВЕК', cx, 1140, t, EV.am_xix, '#a8182a', 40, 0.06); }
  WORLD.america = (t, u, cat) => { lay(18, () => sea(t)); lay(3, () => pier(t)); lay(1, () => { deck(t); cat(); }); };
  DIR.america = {
    outfit: 'sailorA', light: { side: -1, rim: '#fff4d0' }, grade: ['#5aa0d8', 0.06],
    act: () => [[S0.america, 'talk'], [EV.am_pot, 'awe'], [EV.am_far, 'proud'], [EV.am_drop, 'grin'], [EV.am_xix, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 820, y: 1790, s: 1.12, flip: true, look: t < EV.am_drop ? [0.5, -0.8] : [0.8, 0.3], hand: t < EV.am_far ? [140, -380] : [180, -250], handF: [-90, -230], prop: t > EV.am_tom ? 'tomatoP' : null, point: t < EV.am_far ? 1 : 0, rot: Math.sin(t * 1.4) * 0.03 }),
    cam: () => [[S0.america, 700, 1100, 0.12], [EV.am_pot, 760, 1080, 0.16], [EV.am_far, 720, 960, 0.14, 'x'], [EV.am_drop, 480, 1250, 0.24, 'x'], [S1.america, 480, 1250, 0.28]]
  };
  // ---------------------------------------------------------------- переход: парус падает сверху, надувается и улетает вправо
  TRANS_IN.america = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {
    const drop = sm(clamp(k / 0.45)), fly = sm(clamp((k - 0.5) / 0.5)); drawBuf(fly > 0 ? B : A, 1, 540, 960);
    scr(() => { const top = lerp(-2000, 0, drop), x0 = fly * 1800, bil = Math.sin(k * 9) * 60 + fly * 200;
      const pts = [[-60 + x0, top], [1140 + x0, top], [1140 + x0 + bil, top + 1000], [1120 + x0, top + 1960], [-80 + x0, top + 1960], [-60 + x0 + bil * 0.5, top + 1000]];
      const s = shape(spline(pts, true, 10), { wash: '#f2ead6', washA: 1, w: 6, col: '#8a7a5a' }); shadeG(s.path, 1140 + x0, 960, 300 + x0, 960, '#b8a888', 0.5);
      for (let i = 1; i < 5; i++) pencil([[x0 - 60, top + i * 390], [1140 + x0 + bil * 0.7, top + i * 390 + 20]], { w: 3, col: '#a89878', pass2: false });
      txt('1800-е', 540 + x0, top + 980, 120, { font: 'Hand', col: '#8a1a10', a: 0.8 }); });
  } };
})();
