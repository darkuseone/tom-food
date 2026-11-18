/* 025 — `prussia` (развязка ★): «Разгадка, по словам этнологов: рецепт прилетел из Пруссии, из Германии, в начале двадцатого века!»
   Немецкая (прусская) кухня начала XX века: фахверк, синий кафель-делфт, медные кастрюли, часы с кукушкой, окно с черепичными крышами и
   кирхой; немецкая хозяйка в чепце лепит Klöße — круглые клёцки, усатый муж с трубкой. На стене — большая старая карта Балтики: Пруссия,
   Неман, Литва; по ней пунктиром летит маленький дирижабль-клёцка. Главный свет — окно (дневной, белый) + плита. Том в тирольском костюме
   (фартук). По словам: «Разгадка» — ★ плашка, свет вспыхивает; «Пруссии» — на карте загорается Пруссия, дирижабль стартует; «из Германии» —
   хозяйка поднимает блюдо с Klöße; «двадцатого века» — дирижабль долетает до Литвы, клёцка вытягивается в цеппелин, на карте «1900-е».
   Переход В сцену: карта разворачивается на весь кадр, складки расправляются. */
(() => {
  EV.pr_key = wtw('s7', 'Разгадка,');
  EV.pr_prus = wtw('s7', 'Пруссии,');
  EV.pr_ger = wtw('s7', 'Германии,');
  EV.pr_cent = wtw('s7', 'двадцатого');
  SHAKES.push([EV.pr_key, 0.14, 6]);
  KEYW.push('Пруссии,', 'Германии,');

  function room(t) {                                                    // фахверк, делфт-кафель, окно с кирхой, медь, часы с кукушкой
    vgrad(-800, 1500, ['#e8dcc0', '#d8c8a4', '#c8b48c']);
    for (let i = 0; i < 9; i++) pencil([[-800 + i * 330, -800], [-800 + i * 330, 1440]], { w: 26, col: '#4a2a14', pass2: false }); for (let j = 0; j < 4; j++) pencil([[-800, -500 + j * 420], [1900, -500 + j * 420]], { w: 22, col: '#4a2a14', pass2: false }); for (let i = 0; i < 8; i++) { pencil([[-800 + i * 330, -500], [-470 + i * 330, -80]], { w: 16, col: '#4a2a14', pass2: false }); }
    for (let x = -800; x < 1900; x += 56) for (let y = 1000; y < 1440; y += 56) { rect(x, y, 54, 54, { wash: '#f4f4f8', washA: 1, w: 0.8, col: '#6a7a9a' }); ell(x + 27, y + 27, 12, 12, { wash: '#2a4a9a', washA: 0.7, line: false }); }
    push(980, -60, 1); const w = rect(-170, -260, 340, 440, { wash: '#a8c8e8', washA: 1, w: 10, col: '#3a2010', key: 25800 }); ctx.save(); ctx.clip(w.path); vgrad(-260, 180, ['#9ac0e8', '#f4ecd8']); for (let i = 0; i < 5; i++) poly([[-170 + i * 70, 180], [-170 + i * 70, 60], [-135 + i * 70, 20], [-100 + i * 70, 60], [-100 + i * 70, 180]], { wash: '#c8542a', washA: 1, w: 1.2 }); rect(-20, -160, 40, 220, { wash: '#e8e0d0', washA: 1, w: 1.4 }); poly([[-30, -160], [0, -250], [30, -160]], { wash: '#3a6a5a', washA: 1, w: 1.4 }); ctx.restore(); for (const v of [0]) pencil([[v, -260], [v, 180]], { w: 8, col: '#3a2010' }); pencil([[-170, -40], [170, -40]], { w: 8, col: '#3a2010' }); pop();
    shaft(980, -60, 300, 1800, 0.45, 'rgba(255,255,240,1)', 0.15);
    push(-560, -420, 1); rect(-70, -90, 140, 180, { wash: '#6a3a1a', washA: 1, w: 2.4 }); poly([[-90, -90], [0, -170], [90, -90]], { wash: '#5a2a10', washA: 1, w: 2 }); ell(0, 0, 50, 50, { wash: '#f4ecd6', washA: 1, w: 2 }); pencil([[0, 0], [Math.cos(t) * 34, Math.sin(t) * 34]], { w: 3, col: '#1a1a1a', pass2: false }); pencil([[0, 90], [0, 260 + Math.sin(t * 3) * 20]], { w: 2, col: '#c8a050', pass2: false }); ell(0, 270 + Math.sin(t * 3) * 20, 16, 30, { wash: '#c8a050', washA: 1, w: 1.4 }); pop();
    for (let i = 0; i < 5; i++) { push(-300 + i * 120, 620, 1); pencil([[0, -40], [0, 0]], { w: 2, col: '#3a2a1a', pass2: false }); const p = ell(0, 30, 44, 36, { wash: '#c87a3a', washA: 1, w: 2, col: '#5a2a08' }); shadeG(p.path, 40, 30, -40, 30, '#f0b070', 0.5); pop(); }
  }
  function mapWall(t) {                                                 // карта Балтики: Пруссия → Литва, пунктир полёта
    push(430, 820, 0.95); const m = rect(-320, -300, 640, 520, { wash: '#efe0b8', washA: 1, w: 4, col: '#5a3a1a', key: 25810 }); shadeG(m.path, 320, 220, -200, -300, '#c8a878', 0.5);
    blob([[-320, -300], [-100, -300], [-60, -180], [-140, -40], [-320, -20]], { wash: '#9ac0d8', washA: 1, w: 1.6, col: '#4a6a8a' }); txt('BALTIJA', -230, -170, 24, { font: 'Hand', col: '#2a4a7a' });
    const pk = t > EV.pr_prus ? sm(clamp((t - EV.pr_prus) / 0.4)) : 0; const pr = blob([[-140, -40], [40, -60], [80, 80], [-120, 120], [-200, 40]], { wash: pk ? lerpC('#d8c890', '#e8a050', pk) : '#d8c890', washA: 1, w: 2, col: '#5a3a1a' }); txt('PREUSSEN', -60, 40, 26, { font: 'Osw', col: '#5a2a08' });
    const lt = blob([[40, -60], [260, -180], [300, 60], [80, 80]], { wash: t > EV.pr_cent ? '#a8d098' : '#d8d0a0', washA: 1, w: 2, col: '#5a3a1a' }); txt('LIETUVA', 180, -40, 26, { font: 'Osw', col: '#2a5a2a' }); pencil(spline([[-100, 200], [0, 120], [120, 60], [220, -80]], false, 6), { w: 3, col: '#4a6a8a', a: 0.7, pass2: false });
    if (t > EV.pr_prus) { const q = clamp((t - EV.pr_prus) / (EV.pr_cent + 0.4 - EV.pr_prus)); for (let i = 0; i < 16 * q; i++) { const p = i / 16; ell(lerp(-60, 190, p), lerp(40, -60, p) - Math.sin(p * 3.14) * 80, 5, 5, { wash: '#c8221a', washA: 1, line: false }); } push(lerp(-60, 190, q), lerp(40, -60, q) - Math.sin(q * 3.14) * 80, 1); zeppelinShip(0, 0, 0.14, t, { potato: 1, key: 25811 }); pop(); }
    if (t > EV.pr_cent + 0.3) { push(180, 160, popK(t, EV.pr_cent + 0.3, 0.3)); rect(-90, -26, 180, 52, { wash: '#c8221a', washA: 1, w: 2 }); txt('1900-е', 0, 12, 32, { font: 'Osw', col: '#f8f4ea' }); pop(); }
    pop();
  }
  function family(t) {                                                  // хозяйка с Klöße, муж с трубкой
    const up = t > EV.pr_ger; human(-260, 1300, 1.05, t, { body: '#2a3a6a', legs: '#2a2a3a', hair: '#e8c070', face: up ? 'grin' : 'smile', armL: up ? 'up' : 'hold', armR: up ? 'up' : 'hold', look: 0.5, seed: 25820, long: 1, trim: '#f4f4f4', hat: 'scarf', hatCol: '#f4f4f4' });
    push(-260, up ? 920 : 1110, 1); ell(0, 0, 110, 26, { wash: '#f4f4f8', washA: 1, w: 2, col: '#4a5a8a' }); for (let i = 0; i < 4; i++) { ell(-60 + i * 40, -20, 22, 20, { wash: CP.dough, washA: 1, w: 1.6, col: '#6a5a3a' }); } if (up) { push(0, -90, popK(t, EV.pr_ger, 0.3)); rect(-80, -24, 160, 48, { wash: '#f4ecd6', washA: 1, w: 2, col: '#2a2a2a' }); txt('KLÖSSE', 0, 10, 30, { font: 'Osw', col: '#2a2a2a' }); pop(); } pop();
    human(1080, 1300, 1.0, t, { body: '#3a4a3a', legs: '#2a2a2a', hair: '#8a6a4a', face: 'smile', armL: 'hold', armR: 'up', look: -0.6, seed: 25821, flip: -1 }); stache(1080, 1300, 1.0, -1); push(1030, 1000, 1); pencil([[0, 0], [-30, 20]], { w: 4, col: '#4a2a14', pass2: false }); ell(-34, 14, 10, 12, { wash: '#4a2a14', washA: 1, w: 1.4 }); for (let i = 0; i < 3; i++) { const k = (t * 0.6 + i / 3) % 1; ell(-34 + k * 20, -4 - k * 80, 8 + k * 14, 6 + k * 8, { wash: '#d8d0c8', washA: 0.5 * (1 - k), line: false }); } pop();
  }
  function table(t) {                                                   // стол (после cat): доска, клёцки, мука, медная кастрюля
    const tb = rect(-500, 1440, 2100, 700, { wash: '#a8845a', washA: 1, w: 3, col: '#3a2010', key: 25830 }); for (let i = 0; i < 6; i++) pencil([[-500, 1470 + i * 50], [1600, 1470 + i * 50]], { w: 2, col: '#6a4a24', a: 0.5, pass2: false });
    push(800, 1470, 1); rect(-170, -20, 340, 30, { wash: '#c89a5a', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) ell(-120 + i * 80, -40, 34, 30, { wash: CP.dough, washA: 1, w: 1.6, col: '#6a5a3a' }); if (t > EV.pr_cent) cepelinas(0, -110, 0.42, t, { smet: 1, key: 25831 }); for (let i = 0; i < 10; i++) ell(-160 + i * 34, 0, 10, 3, { wash: '#f8f4ec', washA: 0.7, line: false }); pop();
    push(200, 1460, 1); const p = blob([[-80, 0], [-90, -110], [90, -110], [80, 0]], { wash: '#c8743a', washA: 1, w: 2.4, col: '#4a1a08' }); shadeG(p.path, 90, 0, -40, 0, '#f0b070', 0.4); pop(); steamWisps(200, 1340, 1, t, 3, 25835, 0.4);
    if (t > EV.pr_key - 0.1) { push(760, 520, popK(t, EV.pr_key - 0.1, 0.4) * 0.85, -0.03); rect(-210, -56, 420, 104, { wash: '#e8c060', washA: 1, w: 4, col: '#1a1a1a' }); txt('★ РАЗГАДКА', 0, 18, 52, { font: 'Osw', col: '#1a1a1a' }); pop(); }
    castShadow(520, 1600, 260, 220, -0.5, 0.3);
  }
  function front(t) { push(-220, 1980, 1.6); const p = blob([[-150, 0], [-160, -160], [160, -160], [150, 0]], { wash: '#c8743a', washA: 1, w: 2.4, col: '#4a1a08' }); shadeG(p.path, 150, 0, -60, 0, '#f0b070', 0.4); pop(); push(1250, -150, 1.5); for (let i = 0; i < 3; i++) { pencil([[i * 50 - 50, -450], [i * 50 - 50, -150 - i * 30]], { w: 3, col: '#6a4a2a', pass2: false }); ell(i * 50 - 50, -130 - i * 30, 30, 18, { wash: '#c84a2a', washA: 1, w: 1.4 }); } pop(); }
  WORLD.prussia = (t, u, cat) => {
    lay(12, () => { room(t); haze('#f8f0e0', 0.05); });
    lay(2.8, () => { family(t); });
    lay(2.0, () => { mapWall(t); });
    lay(1, () => { cat(); table(t); lightPool(700, 1480, 560, 130, 'rgba(255,250,235,1)', 0.35); });
    lay(0.6, () => { front(t); motes(14, [-200, 300, 1300, 1400], '#ffffff', t, 25840, { sp: 4, sz: 3, a: 0.4, wob: 3 }); moodDark(560, 1000, 500, 1500, '#1a1410', 0.4); if (t > EV.pr_key && t < EV.pr_key + 0.3) screenFill('#fff8e0', 0.35 * (1 - (t - EV.pr_key) / 0.3), 'lighter'); });
  };
  DIR.prussia = {
    outfit: 'tyrolA', light: { side: 1, rim: '#fffaf0' }, grade: ['#e8d8b8', 0.06],
    act: () => [[S0.prussia, 'smug'], [EV.pr_key, 'proud'], [EV.pr_prus, 'talk'], [EV.pr_ger, 'awe'], [EV.pr_cent, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 600, y: 1600, s: 1.16, flip: 0, look: t < EV.pr_prus ? [0, 0] : [-0.6, -0.7], hand: t > EV.pr_prus ? [-200, -420] : [-150, -300], handF: [120, -230], point: t > EV.pr_prus ? 1 : undefined, prop: t > EV.pr_cent ? 'cepP' : undefined }),
    cam: () => [[S0.prussia, 560, 1100, 0.26], [EV.pr_key, 580, 1120, 0.28], [EV.pr_prus, 520, 1020, 0.26], [EV.pr_cent, 540, 1040, 0.26], [S1.prussia, 560, 1080, 0.27]],
    hud: t => { infoPlate(t, EV.pr_cent + 0.2, S1.prussia + 0.3, { kind: 'list', title: 'ОТКУДА ПРИЛЕТЕЛ', rows: [['Пруссия, Германия', 'Klöße — клёцки', '#5a3a1a'], ['нач. XX века', '→ в Литву', '#c8221a'], ['1930-е', 'первые рецепты', '#2a6a3a']] }); }
  };
  // ---------------------------------------------------------------- переход: карта разворачивается на весь кадр, складки расправляются
  TRANS_IN.prussia = { a: 0.25, b: 0.5, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), w = lerp(80, 1080, e); drawBuf(A, 1, 540, 960); const P = new Path2D(); P.rect(540 - w / 2, 0, w, H); inPath(P, () => drawBuf(B, 1, 540, 960));
    scr(() => { for (let i = 1; i < 4; i++) { const x = 540 - w / 2 + w * i / 4; pencil([[x, 0], [x, H]], { w: 8 * (1 - e) + 1, col: '#8a6a3a', a: 0.6 * (1 - e), pass2: false }); } for (const sd of [-1, 1]) { const x = 540 + sd * w / 2; pencil([[x, 0], [x, H]], { w: 14, col: '#c8a868', a: 1 - e * 0.8, pass2: false }); } });
  } };
})();
