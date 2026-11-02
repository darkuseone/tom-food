/* 014 — `rome`: «Ещё римские легионеры носили в поход буцеллатум — хлеб, высушенный почти до камня.» Походный лагерь легиона: частокол, ряды кожаных палаток,
   штандарты с орлом и SPQR, холмы с римской дорогой и акведуком, полевая печь-клибанус с пекарем, легионеры с поклажей на шестах-фурках марширую́т.
   Том-легионер (лорика, шлем с гребнем, фартук) с буцеллатумом. По словам: «поход» — колонна марширует, поклажа качается; «буцеллатум» — пекарь вынимает
   лепёшки из печи, ценник; «до камня» — Том стучит лепёшкой о щит: «ДЗЫНЬ», искры; рядом камень на столе — не отличить. Переход В сцену: гладиус рассекает
   кадр по диагонали, половинки разъезжаются. */
(() => {
  EV.rm_march = wtw('s1', 'поход');
  EV.rm_buc = wtw('s1', 'буцеллатум');
  EV.rm_stone = wtw('s1', 'камня.');
  SHAKES.push([EV.rm_stone + 0.05, 0.2, 10]);
  KEYW.push('буцеллатум', 'камня.');

  function land(t) {                                                    // небо, холмы, кипарисы, акведук, дорога
    vgrad(-600, 1000, ['#6aa8e0', '#a8d0ee', '#f4e8c8']); for (let i = 0; i < 4; i++) { const x = ((i * 380 + t * 12) % 1800) - 300; for (let k = 0; k < 4; k++) ell(x + k * 50, 160 + (i % 2) * 80 - (k % 2) * 20, 60, 30, { wash: '#ffffff', washA: 0.9, line: false }); }
    shape(spline([[-400, 700], [100, 560], [500, 620], [900, 540], [1500, 640], [1500, 1000], [-400, 1000]], true, 8), { wash: '#9ab86a', washA: 1, w: 2, col: '#4a5a2a' });
    push(760, 640, 1); for (let i = 0; i < 9; i++) { const x = -300 + i * 80; rect(x, -160, 24, 160, { wash: '#d8c8a0', washA: 1, w: 1.4, col: '#6a5a3a' }); pencil(spline([[x + 24, -150], [x + 52, -190], [x + 80, -150]], false, 6), { w: 6, col: '#d8c8a0', pass2: false }); } rect(-300, -200, 740, 40, { wash: '#d8c8a0', washA: 1, w: 1.6, col: '#6a5a3a' }); pop();
    for (let i = 0; i < 6; i++) { const x = -200 + i * 260 + (i % 2) * 60; push(x, 700 + (i % 2) * 30, 1); blob([[-14, 0], [-20, -80], [0, -160], [20, -80], [14, 0]], { wash: '#2a4a2a', washA: 1, w: 1.4, col: '#0a1a0a' }); pop(); }
    pencil(spline([[-400, 980], [300, 860], [700, 800], [1500, 760]], false, 8), { w: 30, col: '#c8b088' }); for (let i = 0; i < 20; i++) pencil([[-380 + i * 90, 970 - i * 10], [-360 + i * 90, 990 - i * 10]], { w: 3, col: '#8a7a5a', a: 0.5, pass2: false });
  }
  function camp(t) {                                                    // частокол, палатки, штандарты, легионеры в колонне с фурками
    for (let i = 0; i < 30; i++) { const x = -400 + i * 70; poly([[x, 1060], [x + 10, 900], [x + 20, 880], [x + 30, 900], [x + 40, 1060]], { wash: '#8a5a2a', washA: 1, w: 1.6, col: '#2a1408' }); }
    for (let i = 0; i < 5; i++) { const x = -260 + i * 300; push(x, 1060, 1); poly([[-110, 0], [0, -120], [110, 0]], { wash: '#c8a070', washA: 1, w: 2, col: '#4a2a10' }); pencil([[0, -120], [0, 0]], { w: 2, col: '#5a3a1a', pass2: false }); for (let k = 0; k < 4; k++) pencil([[-100 + k * 20, -10], [-20 + k * 5, -100]], { w: 1.4, col: '#8a6a3a', a: 0.6, pass2: false }); pop(); }
    for (const x of [140, 960]) { push(x, 1100, 1); pencil([[0, 0], [0, -420]], { w: 8, col: '#5a3a1a' }); rect(-60, -360, 120, 90, { wash: '#a8221a', washA: 1, w: 2, col: '#3a0a04' }); txt('SPQR', 0, -305, 32, { font: 'Osw', col: '#e8c060' }); blob([[-50, -430], [-20, -470], [0, -460], [20, -470], [50, -430], [0, -440]], { wash: '#d6a842', washA: 1, w: 1.6, col: '#5a3a08' }); for (let k = 0; k < 3; k++) ell(0, -240 + k * 40, 18, 18, { wash: '#d6a842', washA: 1, w: 1.4 }); pop(); }
    for (let i = 0; i < 6; i++) { const x = ((t * 80 + i * 210) % 1600) - 300, sw = Math.sin(t * 8 + i) * 4; human(x, 1180, 0.85, t, { body: '#b8281e', legs: '#c8a070', hair: '#3a2a1a', face: 'calm', armL: 'hold', armR: 'up', seed: 14200 + i }); push(x, 1180 - 280 * 0.85, 0.85); blob([[-40, -20], [-36, -60], [0, -76], [36, -60], [40, -20]], { wash: '#a8acb4', washA: 1, w: 1.6 }); pop();
      push(x + 60, 1180 - 400 * 0.85 + sw, 0.85, 0.3); pencil([[0, 0], [0, -120]], { w: 5, col: '#5a3a1a' }); rect(-30, -150, 60, 40, { wash: '#8a6a3a', washA: 1, w: 1.4 }); ell(20, -110, 14, 14, { wash: '#c88a3a', washA: 1, w: 1 }); pop(); }
  }
  function bakery(t) {                                                  // полевая печь-клибанус, пекарь вынимает лепёшки, стол с лепёшками и камнем
    push(1000, 1360, 1); const o = blob([[-160, 0], [-150, -160], [-80, -240], [80, -240], [150, -160], [160, 0]], { wash: '#c8a078', washA: 1, w: 2.4, col: '#4a2a10' }); shadeG(o.path, 160, 0, -60, 0, '#8a6a4a', 0.4); const m = blob([[-60, 0], [-60, -80], [0, -110], [60, -80], [60, 0]], { wash: '#1a0a04', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) { const f = Math.sin(t * 9 + i) * 10; blob([[-40 + i * 25, 0], [-46 + i * 25, -40 - f], [-30 + i * 25, -70 - f], [-24 + i * 25, 0]], { wash: i % 2 ? '#ff8a2a' : '#ffd04a', washA: 0.9, line: false }); } glow(0, -50, 160, 'rgba(255,140,50,1)', 0.5);
      for (let i = 0; i < 3; i++) { const q = (t * 0.4 + i / 3) % 1; pencil(spline([[0, -240], [Math.sin(q * 6) * 30, -240 - q * 200], [0, -240 - q * 380]], false, 5), { w: 14, col: '#9a9a9a', a: 0.3 * (1 - q), pass2: false }); } pop();
    const pk = clamp((t - EV.rm_buc + 0.3) / 0.6); human(840, 1360, 1.1, t, { body: '#e8dcc0', legs: '#8a6a3a', hair: '#3a2a1a', beard: 'short', face: pk > 0 ? 'grin' : 'calm', armL: 'hold', armR: pk > 0 ? 'point' : 'hold', look: 0.5, seed: 14210 }); push(840 + 100, 1360 - 260, 1, -0.2); pencil([[-120, 0], [120, 0]], { w: 6, col: '#6a4424' }); if (pk > 0) bucellatum(120, -14, 0.5, 0, { key: 14211 }); pop();
  }
  function table(t) {                                                   // грубый стол: стопка буцеллатумов, камень рядом, амфора, миска поски
    const tb = rect(-400, 1440, 1900, 800, { wash: '#8a6a40', washA: 1, w: 3, col: '#2a1408', key: 14220 }); shadeG(tb.path, 0, 1900, 0, 1440, '#4a2a10', 0.45); for (let i = 0; i < 6; i++) pencil([[-400, 1480 + i * 70], [1500, 1484 + i * 70]], { w: 3, col: '#5a3a18', a: 0.6, pass2: false });
    for (let i = 0; i < 4; i++) bucellatum(160, 1480 - i * 26, 0.9, 0.1 * (i % 2 ? 1 : -1), { key: 14221 + i });
    push(420, 1500, 1); const st = blob([[-70, 10], [-60, -40], [-10, -60], [50, -50], [76, -10], [60, 16]], { wash: '#9a948a', washA: 1, w: 2.4, col: '#2a2a2a' }); shadeG(st.path, 70, 16, -40, -40, '#5a5650', 0.4); glow(-20, -30, 20, 'rgba(255,255,255,1)', 0.3); pop();
    if (t > EV.rm_stone - 0.1) { txt('=', 300, 1500, 70, { font: 'Osw', col: '#d9282a' }); bubbleTag('КАМЕНЬ?', 300, 1330, t, EV.rm_stone, '#6a6a6a', 50, -0.05); }
    push(-120, 1460, 1); const a = shape(spline([[-40, 0], [-60, -80], [-40, -160], [-20, -200], [20, -200], [40, -160], [60, -80], [40, 0]], true, 6), { wash: '#b8643a', washA: 1, w: 2.4, col: '#3a1a08' }); for (const sd of [-1, 1]) pencil(spline([[sd * 20, -190], [sd * 50, -180], [sd * 44, -150]], false, 4), { w: 6, col: '#b8643a', pass2: false }); pop();
    if (t > EV.rm_buc) bubbleTag('BUCELLATUM', 360, 1200, t, EV.rm_buc, '#a8221a', 46, -0.05);
    if (t > EV.rm_stone && t < EV.rm_stone + 0.8) { const k = (t - EV.rm_stone) / 0.8; txt('ДЗЫНЬ!', 600, 1080 - k * 60, 70, { font: 'Osw', col: '#e8c060', a: 1 - k }); for (let i = 0; i < 8; i++) { const a2 = i / 8 * 6.283; pencil([[560, 1180], [560 + Math.cos(a2) * 100 * (0.3 + k), 1180 + Math.sin(a2) * 100 * (0.3 + k)]], { w: 4, col: '#ffe070', a: 1 - k, pass2: false }); } }
  }
  function front(t) {                                                   // передний план: щит-скутум у края, пилум, пыль
    push(-40, 1700, 1.5); const sh = rect(-110, -300, 220, 440, { wash: '#a8221a', washA: 1, w: 3, col: '#3a0a04' }); shadeG(sh.path, 110, 0, -60, 0, '#5a0a04', 0.4); ell(0, -80, 40, 40, { wash: '#c8ccd2', washA: 1, w: 2 }); for (const sd of [-1, 1]) pencil(spline([[sd * 80, -260], [sd * 30, -150], [sd * 80, -40]], false, 5), { w: 6, col: '#e8c060', pass2: false }); pop();
    pencil([[1160, 2000], [1240, 400]], { w: 10, col: '#6a4424' }); poly([[1234, 410], [1250, 410], [1246, 300]], { wash: '#a8acb4', washA: 1, w: 1.6 });
    motes(40, [0, 600, 1080, 1800], '#f8e8c0', t, 14230, { sp: 14, vx: 20, sz: 4, a: 0.45, wob: 2 }); rays(1000, -100, 2.0, 0.4, 2000, 'rgba(255,248,220,1)', 0.12, 5, t);
  }
  WORLD.rome = (t, u, cat) => {
    lay(14, () => { land(t); haze('#f4ecd0', 0.08); });
    lay(4, () => { camp(t); haze('#f0e4c8', 0.05); });
    lay(2.4, () => { bakery(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { table(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.rome = {
    outfit: 'legioA', light: { side: 1, rim: '#fff4d0' }, grade: ['#ffd8a0', 0.06],
    act: () => [[S0.rome, 'proud'], [EV.rm_march, 'grin'], [EV.rm_buc, 'awe'], [EV.rm_stone - 0.2, 'smug'], [EV.rm_stone + 0.1, 'shock']],
    pose: (t, u, b) => { const knock = t > EV.rm_stone - 0.25 && t < EV.rm_stone + 0.4; return Object.assign(b, { x: 700, y: 1580, s: 1.05, flip: -1, look: knock ? [-0.6, 0.4] : [-0.3, -0.2], walk: t < EV.rm_buc ? t * 6 : undefined,
      hand: knock ? [lerp(160, 260, Math.abs(Math.sin((t - EV.rm_stone) * 16))), -280] : [160, -300], handF: [-90, -220], prop: 'bucP', propAng: 0.2 }); },
    cam: () => [[S0.rome, 560, 900, 0.06], [EV.rm_march, 560, 1060, 0.1, 'x'], [EV.rm_buc, 640, 1160, 0.2], [EV.rm_stone, 480, 1200, 0.22], [S1.rome, 500, 1200, 0.26]]
  };
  // ---------------------------------------------------------------- переход: гладиус рассекает кадр по диагонали
  TRANS_IN.rome = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const cut = clamp(k / 0.35), sep = sm(clamp((k - 0.3) / 0.7)) * 900; drawBuf(B, 1, 540, 960);
    const P1 = new Path2D(); P1.moveTo(-100, -100); P1.lineTo(W + 100, -100); P1.lineTo(-100, H + 100); P1.closePath(); const P2 = new Path2D(); P2.moveTo(W + 100, -100); P2.lineTo(W + 100, H + 100); P2.lineTo(-100, H + 100); P2.closePath();
    ctx.save(); ctx.setTransform(1, 0, 0, 1, -sep, -sep * 1.7); ctx.clip(P1); ctx.drawImage(A, 0, 0); ctx.restore(); ctx.save(); ctx.setTransform(1, 0, 0, 1, sep, sep * 1.7); ctx.clip(P2); ctx.drawImage(A, 0, 0); ctx.restore();
    scr(() => { if (cut < 1) { const x = lerp(W + 100, -100, cut), y = lerp(-100, H + 100, cut); push(x, y, 2.4, -1.05); poly([[-200, -14], [200, -10], [240, 0], [200, 10], [-200, 14]], { wash: '#d8dce0', washA: 1, w: 2, col: '#2a2e34' }); rect(-280, -16, 80, 32, { wash: '#6a3a14', washA: 1, w: 2 }); pop(); } if (k < 0.5) pencil([[W + 100, -100], [lerp(W + 100, -100, cut), lerp(-100, H + 100, cut)]], { w: 6, col: '#ffffff', a: 0.9, pass2: false, gap: false }); });
  } };
})();
