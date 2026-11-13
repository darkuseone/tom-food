/* 019 — `claim`: «Версии: подросток из Висконсина, фермер из Оклахомы, повар из Коннектикута. Все — первые.» Штаб «Кто первый?» в задней комнате
   закусочной, тёмно-синий вечер: стена в синих обоях с полосой, огромная карта США в деревянной раме (герой-предмет), лампа-абажур над столом (главный свет,
   тёплый конус), окно с синей ночью и луной (второй, холодный), полки с подшивками газет, кофейник, пробковая доска с вырезками, часы, флаг-вымпел.
   Три претендента выходят по очереди: подросток Чарли в кепке с фрикаделькой в хлебе (Висконсин, 1885), фермер в комбинезоне с вилами и бургером (Оклахома,
   1891), повар в колпаке с тостами (Коннектикут, 1900). Том-картограф (твид, econA) втыкает флажки в карту. По словам: «подросток» — флажок в Висконсин, выходит
   Чарли; «фермер» — флажок в Оклахому; «повар» — флажок в Коннектикут; «Все — первые» — все трое одновременно поднимают таблички «№1» и тянут к себе
   гигантский бургер; Том закатывает глаза. Переход В сцену: сверху падают слои бургера — булка, котлета, сыр, булка — стопка закрывает кадр и уезжает вниз. */
(() => {
  EV.cl_teen = wtw('s4', 'подросток');
  EV.cl_farm = wtw('s4', 'фермер');
  EV.cl_cook = wtw('s4', 'повар');
  EV.cl_all = wtw('s4', 'Все');
  SHAKES.push([EV.cl_all + 0.05, 0.15, 7]);
  KEYW.push('Все', 'первые.');
  const PIN = [[-150, -40, '#c81e10', 'ВИСКОНСИН · 1885', () => EV.cl_teen], [-40, 40, '#3a8a3a', 'ОКЛАХОМА · 1891', () => EV.cl_farm], [230, -40, '#e8b820', 'КОННЕКТИКУТ · 1900', () => EV.cl_cook]];

  function room(t) {                                                    // (lay 12 ≈ экран) обои, окно с луной, полки с подшивками, часы, пробковая доска
    vgrad(-200, 2100, ['#141c34', '#1e2a4a', '#2a3456']);
    for (let x = -200; x < 1300; x += 60) { pencil([[x, -200], [x, 1100]], { w: 10, col: '#2a3a62', a: 0.5, pass2: false }); for (let y = -160; y < 1100; y += 90) ell(x + 30, y + ((x / 60) % 2) * 45, 6, 9, { wash: '#4a5a8a', washA: 0.5, line: false }); }
    rect(-200, 1080, 1500, 40, { wash: '#6a4424', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 30; i++) rect(-200 + i * 52, 1120, 50, 900, { wash: i % 2 ? '#3a2a24' : '#4a3428', washA: 1, w: 1, col: '#1a0a08' });
    push(120, 300, 1); const w = rect(-120, -170, 240, 340, { wash: '#0a1028', washA: 1, w: 8, col: '#5a3a1a', key: 19960 }); ctx.save(); ctx.clip(w.path); ell(40, -90, 34, 34, { wash: '#f4f0d8', washA: 1, line: false }); glow(40, -90, 90, 'rgba(220,230,255,1)', 0.3); windows(-110, 20, 220, 140, 6, 3, 19961, 0.4, '#ffd890', '#2a3050', 0.8); ctx.restore(); pencil([[0, -170], [0, 170]], { w: 6, col: '#5a3a1a' }); pencil([[-120, 0], [120, 0]], { w: 6, col: '#5a3a1a' }); pop();
    for (const [sx, sy] of [[980, 260], [980, 520]]) { rect(sx - 160, sy, 320, 16, { wash: '#6a4424', washA: 1, w: 1.6, col: '#2a1408' }); const r = rng(19962 + sy); for (let i = 0; i < 9; i++) { const h = 90 + r() * 50, x = sx - 150 + i * 34; rect(x, sy - h, 30, h, { wash: ['#8a2a1a', '#2a4a6a', '#5a5a3a', '#e8dcc0'][i % 4], washA: 1, w: 1.2, col: '#1a0a04' }); pencil([[x + 4, sy - h + 16], [x + 26, sy - h + 16]], { w: 2, col: '#e8c860', a: 0.7, pass2: false }); } }
    push(960, 120, 0.8); ell(0, 0, 70, 70, { wash: '#f4efe0', washA: 1, w: 4, col: '#6a4424' }); pencil([[0, 0], [Math.cos(t * 0.3) * 40, Math.sin(t * 0.3) * 40]], { w: 5, col: '#2a2a2a', pass2: false }); pencil([[0, 0], [-20, -44]], { w: 4, col: '#2a2a2a', pass2: false }); pop();
    push(980, 800, 1); const cb = rect(-150, -110, 300, 220, { wash: '#c89a5a', washA: 1, w: 4, col: '#5a3a1a', key: 19963 }); hatch(cb.path, cb.bb, { gap: 4, a: 0.2, col: '#8a6a3a', ang: 0.8, key: 19964, w: 1 }); for (const [x, y, r] of [[-90, -50, -0.1], [10, -60, 0.08], [90, -40, -0.05], [-60, 40, 0.1], [60, 50, -0.12]]) { push(x, y, 1, r); rect(-44, -34, 88, 68, { wash: '#efe8d4', washA: 1, w: 1, col: '#7a7a6a' }); for (let i = 0; i < 4; i++) pencil([[-36, -20 + i * 12], [36, -20 + i * 12]], { w: 1.4, col: '#7a7a6a', a: 0.6, pass2: false }); ell(0, -30, 5, 5, { wash: '#c81e10', washA: 1, line: false }); pop(); } pop();
    push(-60, 820, 0.9); pencil([[0, -120], [0, 120]], { w: 4, col: '#3a2a1a', pass2: false }); poly([[0, -120], [180, -80], [0, -40]], { wash: '#c81e10', washA: 1, w: 1.6 }); txt('#1', 60, -72, 30, { font: 'Osw', col: '#f4efe0' }); pop();
  }
  function bigMap(t) {                                                  // (lay 2.4) карта США в раме: флажки претендентов, подписи
    push(640, 620, 1); const f = rect(-360, -230, 720, 460, { wash: '#7a4a24', washA: 1, w: 3, col: '#2a1408', key: 19970 }); shadeG(f.path, 360, 230, -360, -230, '#2a1408', 0.45); for (let i = 0; i < 6; i++) pencil([[-350, -220 + i * 4], [350, -220 + i * 4]], { w: 1, col: '#a8743a', a: 0.4, pass2: false });
    const m = rect(-330, -200, 660, 400, { wash: '#bcd4dc', washA: 1, w: 1.6, col: '#3a4a5a' }); for (let i = 0; i < 8; i++) pencil([[-320, -180 + i * 50], [320, -176 + i * 50]], { w: 1.2, col: '#ffffff', a: 0.35, pass2: false });
    usMap(0, 20, 0.95, t, { key: 19971, pins: PIN.map(([x, y, c, l, f]) => [x, y, c, '', f()]) });
    PIN.forEach(([x, y, c, l, f]) => { if (t > f()) { const q = popK(t, f() + 0.1, 0.3); push(x * 0.95, 20 + y * 0.95 + 46, q); rect(-90, -16, 180, 32, { wash: '#f4efe0', washA: 0.95, w: 1.2, col: c }); txt(l, 0, 8, 18, { font: 'Osw', col: '#2a1a0a' }); pop(); } });
    txt('КТО ПЕРВЫЙ?', 0, -170, 34, { font: 'Osw', col: '#2a3a5a' }); pop();
  }
  function claimants(t) {                                               // (lay 1.8) трое претендентов: входят по слову, на «Все» поднимают «№1»
    const all = t > EV.cl_all, tug = all ? Math.sin((t - EV.cl_all) * 6) * 18 : 0;
    const P = [[150, EV.cl_teen, { body: '#8a2a1a', legs: '#4a3a2a', hair: '#c88a3a', face: all ? 'angry' : 'grin', hat: 'cap', hatCol: '#3a3a3a', seed: 19980 }, 0.95, 'ВИСКОНСИН'],
               [320, EV.cl_farm, { body: '#3a5a8a', legs: '#3a5a8a', hair: '#8a8a8a', face: all ? 'angry' : 'smile', beard: 'short', hat: 'merchant', hatCol: '#c8a060', seed: 19981 }, 1.1, 'ОКЛАХОМА'],
               [490, EV.cl_cook, { body: '#f4f0e8', legs: '#2a2a2a', hair: '#2a1a0a', face: all ? 'angry' : 'grin', seed: 19982 }, 1.1, 'КОННЕКТИКУТ']];
    P.forEach(([x, t0, o, s, lab], i) => { if (t < t0 - 0.2) return; const k = sm(clamp((t - t0 + 0.2) / 0.5)), xx = x - (1 - k) * 500;
      human(xx + (all ? (i === 2 ? -tug : tug) : 0), 1360, s, t, Object.assign({}, o, { armL: all ? 'up' : 'hold', armR: all ? 'up' : 'hold', look: 0.5, flip: 1 }));
      if (i === 2) hat20(xx, 1360, s, 'chef', '#f4f0e8', 1);
      if (all) { const q = popK(t, EV.cl_all + i * 0.08, 0.3); push(xx + (i === 2 ? -tug : tug), 1360 - 420 * s, q, (i - 1) * 0.15); rect(-60, -50, 120, 70, { wash: '#f4efe0', washA: 1, w: 2, col: '#2a1a0a' }); txt('№1', 0, 6, 48, { font: 'Osw', col: ['#c81e10', '#3a8a3a', '#c88a10'][i] }); pencil([[0, 20], [0, 90]], { w: 5, col: '#6a4424', pass2: false }); pop(); }
      else { push(xx, 1360 - 200 * s, 1); if (i === 0) { const b = blob([[-46, 0], [-40, -20], [40, -20], [46, 0], [40, 14], [-40, 14]], { wash: '#f4e0b0', washA: 1, w: 1.4, col: '#7a5a2a' }); ell(0, -6, 30, 14, { wash: BG.patty, washA: 1, w: 1.2 }); } else if (i === 1) { pencil([[50, 60], [60, -160]], { w: 5, col: '#8a6a3a', pass2: false }); for (let q = 0; q < 3; q++) pencil([[44 + q * 10, -160], [46 + q * 10, -210]], { w: 3, col: '#8a8a8a', pass2: false }); burger(-40, 10, 0.25, t, { key: 19983, shadow: false }); } else { for (let q = 0; q < 2; q++) rect(-70 + q * 20, -40 - q * 10, 80, 60, { wash: '#e8b870', washA: 1, w: 1.4, col: '#7a4a1a' }); pattyRock(-20, -20, 34, 14, 19984); } pop(); }
      txt(lab, xx, 1410, 26, { font: 'Osw', col: '#f4efe0', a: k }); });
    if (all) { const s = 1 + Math.sin((t - EV.cl_all) * 6) * 0.04; push(320 + tug * 0.3, 860, s); burger(0, 0, 0.55, t, { key: 19985, shadow: false }); for (let i = 0; i < 3; i++) { const q = ((t - EV.cl_all) * 2 + i / 3) % 1; ell(-80 + i * 80, -100 - q * 60, 4, 6, { wash: BG.ketchup, washA: 1 - q, line: false }); } pop(); }
  }
  function desk(t) {                                                    // перед Томом: стол с атласом, линейка, циркуль, кофе, коробка флажков, газета
    const c = rect(-300, 1440, 1700, 600, { wash: '#5a3a24', washA: 1, w: 3, col: '#1a0a04', key: 19990 }); shadeG(c.path, 0, 1440, 0, 1700, '#1a0a04', 0.55); for (let i = 0; i < 10; i++) pencil([[-280, 1470 + i * 30], [1380, 1468 + i * 30]], { w: 1.4, col: '#3a2410', a: 0.45, pass2: false });
    push(330, 1450, 1); poly([[-150, 0], [150, 0], [130, -50], [-130, -50]], { wash: '#e8dcb0', washA: 1, w: 2, col: '#5a4a2a' }); pencil([[0, 0], [0, -50]], { w: 2, col: '#5a4a2a', pass2: false }); usMap(-70, -26, 0.18, t, { key: 19991 }); usMap(70, -26, 0.18, t, { key: 19992, land: '#c8e0b0' }); pop();
    push(900, 1450, 1); rect(-60, -40, 120, 40, { wash: '#8a5a2a', washA: 1, w: 1.6 }); for (let i = 0; i < 8; i++) { pencil([[-50 + i * 14, -40], [-50 + i * 14, -90]], { w: 2, col: '#3a2a1a', pass2: false }); poly([[-50 + i * 14, -90], [-30 + i * 14, -84], [-50 + i * 14, -76]], { wash: ['#c81e10', '#2a6aa8', '#3a8a3a', '#e8b820'][i % 4], washA: 1, line: false }); } pop();
    push(1150, 1450, 1); rect(-34, -70, 68, 70, { wash: '#e8e0d0', washA: 1, w: 1.6, col: '#3a3a3a' }); ell(0, -70, 34, 8, { wash: '#3a1a0a', washA: 1, w: 1 }); for (let i = 0; i < 2; i++) { const q = (t * 0.6 + i / 2) % 1; ell(0, -80 - q * 60, 8 + q * 10, 5, { wash: '#ffffff', washA: 0.4 * (1 - q), line: false }); } pop();
    push(80, 1460, 1, -0.1); rect(-90, -16, 180, 16, { wash: '#e8c860', washA: 1, w: 1.4, col: '#7a5a10' }); for (let i = 0; i < 12; i++) pencil([[-84 + i * 15, -16], [-84 + i * 15, -8 - (i % 2) * 4]], { w: 1, col: '#5a4a10', pass2: false }); pop();
    push(640, 1460, 1, 0.05); rect(-100, -12, 200, 12, { wash: '#efe8d4', washA: 1, w: 1.2 }); txt('DAILY HERALD', 0, -2, 12, { font: 'Osw', col: '#2a2a2a' }); pop();
    castShadow(620, 1450, 260, 160, 0.5, 0.25); lightPool(620, 1450, 600, 90, 'rgba(255,210,140,1)', 0.32);
  }
  function lamp(t) {                                                    // передний план: абажур сверху (главный свет), край стула, дым кофе
    push(600, -120, 1.3); pencil([[0, -300], [0, 40]], { w: 3, col: '#1a1a1a', pass2: false }); const sh = poly([[-140, 160], [-60, 40], [60, 40], [140, 160]], { wash: '#2a5a3a', washA: 1, w: 2.4, col: '#0a1a10', key: 19995 }); shadeG(sh.path, 0, 40, 0, 160, '#4a8a5a', 0.4); ell(0, 162, 70, 14, { wash: '#fff0c0', washA: 1, line: false }); glow(0, 180, 160, 'rgba(255,220,150,1)', 0.35); pop();
    push(1250, 2000, 1.6); const ch = rect(-100, -320, 40, 320, { wash: '#4a2a14', washA: 1, w: 2, col: '#1a0a04' }); rect(-100, -180, 220, 30, { wash: '#4a2a14', washA: 1, w: 2, col: '#1a0a04' }); pop();
  }
  WORLD.claim = (t, u, cat) => {
    lay(12, () => { room(t); haze('#1a2448', 0.05); });
    lay(2.4, () => { bigMap(t); });
    lay(1.6, () => { claimants(t); });
    lay(1, () => { cat(); desk(t); });
    lay(0.6, () => { lamp(t); shaft(780, 100, 220, 1500, 0.08, 'rgba(255,220,150,1)', 0.14); motes(16, [200, 200, 1100, 1500], '#fff0c0', t, 19996, { sp: 6, sz: 3, a: 0.5, add: 1, wob: 6 }); moodDark(640, 1000, 450, 1400, '#0a0a20', 0.55); });
  };
  DIR.claim = {
    outfit: 'econA', light: { side: -1, rim: '#ffd090' }, grade: ['#6a7ab8', 0.08],
    act: () => [[S0.claim, 'talk'], [EV.cl_teen, 'smug'], [EV.cl_farm, 'sideeye'], [EV.cl_cook, 'suspicious'], [EV.cl_all, 'annoyed'], [EV.cl_all + 0.6, 'sideeye']],
    pose: (t, u, b) => { const step = t < EV.cl_teen ? -1 : t < EV.cl_farm ? 0 : t < EV.cl_cook ? 1 : t < EV.cl_all ? 2 : 3, pin = step >= 0 && step < 3 ? clamp((t - [EV.cl_teen, EV.cl_farm, EV.cl_cook][step]) / 0.4) : 0;
      const tgt = [[260, -470], [330, -420], [130, -480]][Math.max(0, Math.min(2, step))];
      return Object.assign(b, { x: 750, y: 1590, s: 1.18, flip: -1, look: step < 3 ? [-0.6, -0.8] : [0.1, -0.1],
        hand: step >= 0 && step < 3 ? [tgt[0], tgt[1] + Math.sin(pin * 3.14) * 40] : step === 3 ? [100, -260] : [200, -300], prop: step >= 0 && step < 3 ? 'pinP' : 'pinP', propAng: step === 3 ? 0.4 : -0.3, handF: step === 3 ? [-140, -320] : [-100, -220], sweat: step === 3 }); },
    cam: () => [[S0.claim, 640, 800, 0.18], [S0.claim + 0.5, 600, 1000, 0.24, 'x'], [EV.cl_farm, 580, 1000, 0.22], [EV.cl_cook, 620, 1000, 0.22], [EV.cl_all, 600, 1020, 0.24, 'x'], [S1.claim, 620, 1040, 0.28]]
  };
  // ---------------------------------------------------------------- переход: сверху падают слои бургера, стопка закрывает кадр и уезжает вниз
  TRANS_IN.claim = { a: 0.35, b: 0.45, runA: 1, fx(k, t, A, B) {
    drawBuf(k < 0.55 ? A : B, 1, 540, 960); const L = [[BG.bun, 1760, 340], [BG.patty, 1440, 300], [BG.cheese, 1200, 180], [BG.lettuce, 1060, 100], [BG.tomato, 960, 100], [BG.bun, 470, 900]];
    scr(() => { const out = k > 0.55 ? sm((k - 0.55) / 0.45) * 2200 : 0; L.forEach(([c, y, h], i) => { const q = clamp(k * 1.9 - i * 0.12), yy = lerp(-h - 200, y - h / 2, sm(q)) + out; if (q <= 0) return; if (i === 5) { const b = blob([[-60, yy + h / 2], [0, yy - h / 2 + 80], [540, yy - h / 2], [1080, yy - h / 2 + 80], [1140, yy + h / 2]], { wash: c, washA: 1, w: 4, col: BG.bunD }); shadeG(b.path, 0, yy - h / 2, 0, yy + h / 2, BG.bunL, 0.3); for (let s = 0; s < 30; s++) { const r = rng(19997 + s); ell(r() * 1080, yy - h / 2 + 120 + r() * (h - 160), 12, 7, { wash: BG.sesame, washA: 1, w: 1, col: '#a87a3a' }); } } else { const r = rect(-40, yy - h / 2, 1160, h, { wash: c, washA: 1, w: 4, col: '#2a1408' }); shadeG(r.path, 0, yy - h / 2, 0, yy + h / 2, '#000000', 0.25); } }); });
  } };
})();
