/* 024 — `tomato` (СЛОЙ 4, ≈ 100 лет назад): «Но наглее всех помидор: век назад он выгнал святое — квас!»
   Кухня 1920-х: мятно-кремовый кафель, эмалированные кастрюли, примус с синим огоньком, полки с банками томата и соленьями, отрывной календарь «1926»,
   репродуктор-тарелка, окно с утренним солнцем и геранью; хозяйка в косынке закатывает помидоры, мальчишка ворует помидор, дед с газетой у окна.
   У двери — дубовая бочка «КВАС» (святыня борща). По словам: «помидор:» — справа вкатывается гигантский помидор-нахал (усики, кепка набекрень);
   «век назад» — листки календаря слетают до «1926»; «выгнал» — помидор толкает бочку, она катится к двери; «святое» — над бочкой нимб (ирония);
   «квас!» — бочка вылетает за дверь, дверь хлопает, плашка «КВАС → ТОМАТ». Том — повар-официант 1920-х + фартук, ловит банку томата.
   Главный свет — солнечное окно справа; второй — синий огонёк примуса. Переход В сцену — помидор лопается: томатные брызги заливают кадр. */
(() => {
  EV.tm_in = wtw('s6', 'помидор:');
  EV.tm_cal = wtw('s6', 'век');
  EV.tm_push = wtw('s6', 'выгнал');
  EV.tm_holy = wtw('s6', 'святое');
  EV.tm_out = wtw('s6', 'квас!');
  SHAKES.push([EV.tm_out + 0.05, 0.18, 8]);
  KEYW.push('помидор:', 'квас!');
  const WIN = [930, 700];
  const roll = t => sm(clamp((t - EV.tm_in + 0.3) / 0.8)), barX = t => t < EV.tm_push ? 900 : lerp(900, 1500, sm(clamp((t - EV.tm_push) / Math.max(0.4, EV.tm_out - EV.tm_push + 0.2))));
  function wall(t) {                                                     // мятный кафель, бордюр, полки, календарь, репродуктор, окно с геранью
    vgrad(-600, 2200, ['#a8d0c0', '#c8e4d8', '#b8d8c8']);
    for (let r = 0; r < 16; r++) for (let c = 0; c < 16; c++) rect(-300 + c * 100, 120 + r * 70, 98, 68, { wash: (r + c) % 2 ? '#d8eee4' : '#c8e4d8', washA: 0.9, w: 1, col: '#7aa898' });
    rect(-300, 880, 1700, 28, { wash: '#2a5a4a', washA: 1, line: false }); for (let i = 0; i < 34; i++) rect(-300 + i * 50, 888, 24, 12, { wash: '#f4ecd8', washA: 1, line: false });
    for (const sy of [500, 740]) { rect(-160, sy, 620, 18, { wash: '#f4ecd8', washA: 1, w: 2, col: '#4a5a54' }); for (let i = 0; i < 6; i++) { const x = -110 + i * 100; if (i % 2) tomatoTin(x, sy, 0.75, t, { key: 24600 + i + sy, label: 'ТОМАТ' }); else jarS(x, sy, 0.48, t, { kind: 'pickle', key: 24610 + i + sy }); } }
    const pages = Math.min(3, Math.floor(clamp((t - EV.tm_cal) / 0.6) * 4)); push(600, 420, 1); rect(-70, -100, 140, 170, { wash: '#f8f4ec', washA: 1, w: 2.4, col: '#2a2a2a' }); rect(-70, -100, 140, 36, { wash: '#c8202a', washA: 1, line: false }); txt(['1880', '1897', '1911', '1926'][pages], 0, 10, 46, { font: 'Osw', col: '#2a2a2a' }); txt('год', 0, 50, 24, { font: 'Hand', col: '#4a4a4a' }); pop();
    if (t > EV.tm_cal && t < EV.tm_cal + 0.8) for (let i = 0; i < 3; i++) { const k = clamp((t - EV.tm_cal - i * 0.15) / 0.5); if (k > 0 && k < 1) { push(600 + k * 160, 420 + k * 260, 1, k * 4); rect(-60, -60, 120, 120, { wash: '#f8f4ec', washA: 1 - k, w: 1.4, col: '#2a2a2a' }); pop(); } }
    push(380, 300, 1); ell(0, 0, 70, 70, { wash: '#2a2a2a', washA: 1, w: 2, col: '#0a0a0a' }); ell(0, 0, 56, 56, { wash: '#3a3a3a', washA: 1, line: false }); ell(0, 0, 12, 12, { wash: '#c8a040', washA: 1, line: false }); pencil([[0, -70], [0, -130]], { w: 3, col: '#2a2a2a', pass2: false }); pop();
    push(WIN[0], WIN[1], 1); const wn = rect(-150, -280, 300, 360, { wash: '#a8d8f8', washA: 1, w: 12, col: '#f4f4f0' }); ctx.save(); ctx.clip(wn.path); vgrad(-280, 80, ['#6aa8e8', '#c8e4f8']); for (let i = 0; i < 4; i++) rect(-150 + i * 80, -60 + (i % 2) * 30, 64, 140, { wash: '#c8a888', washA: 1, w: 1, col: '#6a4a3a' }); ctx.restore();
    pencil([[0, -280], [0, 80]], { w: 8, col: '#f4f4f0', pass2: false }); pencil([[-150, -100], [150, -100]], { w: 8, col: '#f4f4f0', pass2: false }); rect(-170, 80, 340, 20, { wash: '#f4f4f0', washA: 1, w: 2 });
    for (let i = 0; i < 3; i++) { push(-90 + i * 90, 80, 1); const pt = shape([[-30, 0], [-24, -50], [24, -50], [30, 0]], { wash: '#c8603a', washA: 1, w: 2, col: '#4a1a08' }); for (let q = 0; q < 5; q++) ell(-24 + q * 12, -66 - (q % 2) * 14, 12, 10, { wash: '#3a8a3a', washA: 1, w: 1, col: '#1a4a1a' }); for (let q = 0; q < 3; q++) ell(-16 + q * 16, -84 - (q % 2) * 8, 8, 8, { wash: '#e8203a', washA: 1, line: false }); pop(); } pop();
    lightPool(WIN[0], 900, 320, 400, 'rgba(255,240,200,1)', 0.25);
  }
  function room(t) {                                                     // хозяйка закатывает банки, мальчишка с помидором, дед с газетой, дверь (хлопает), примус
    rect(-300, 1300, 1700, 140, { wash: '#e8e0d0', washA: 1, w: 2, col: '#4a4a44' }); for (let i = 0; i < 8; i++) rect(-280 + i * 210, 1320, 190, 100, { wash: '#f4ecd8', washA: 1, w: 1.6, col: '#6a6a60' });
    push(1250, 1440, 1); const dr = rect(-120, -560, 240, 560, { wash: '#7a5a3a', washA: 1, w: 3, col: '#2a1408' }); const open = t > EV.tm_push && t < EV.tm_out + 0.15 ? 1 : 0;
    if (open) rect(-120, -560, 240, 560, { wash: '#f8f0d8', washA: 1, line: false }); else { for (const yy of [-500, -260]) rect(-90, yy, 180, 200, { line: true, w: 2, col: '#4a2a10' }); ell(80, -280, 10, 10, { wash: '#c8a040', washA: 1, w: 1.4 }); } pop();
    human(560, 1330, 1.05, t, { body: '#4a6a9a', trim: '#f4ecd8', legs: '#3a3a5a', long: 1, hat: 'scarf', hatCol: '#e8203a', armL: 'hold', armR: t > EV.tm_out ? 'up' : 'hold', face: t > EV.tm_push ? 'shock' : 'smile', seed: 24620, look: 0.4 });
    for (let i = 0; i < 4; i++) jarS(470 + i * 60, 1300, 0.42, t, { kind: 'olive', key: 24621 + i });
    human(820, 1350, 0.75, t, { body: '#e8dcc0', legs: '#3a4a6a', hair: '#e8c060', face: 'grin', armL: 'up', armR: 'swing', seed: 24622, flip: -1, look: -0.4 }); tomato(800, 1060, 0.5, Math.sin(t * 4) * 0.3);
    human(80, 1360, 1.0, t, { body: '#5a4a3a', legs: '#2a2a2a', beard: 'long', hair: '#c8c8c8', hat: 'cap', hatCol: '#3a3a3a', armL: 'hold', armR: 'hold', face: t > EV.tm_holy ? 'grin' : 'calm', seed: 24623, look: 0.5 });
    push(80, 1120, 1, -0.05); rect(-90, -60, 180, 120, { wash: '#f0ece0', washA: 1, w: 1.6, col: '#4a4a4a' }); for (let i = 0; i < 5; i++) pencil([[-80, -40 + i * 20], [80, -40 + i * 20]], { w: 2, col: '#6a6a6a', a: 0.6, pass2: false }); txt('ГАЗЕТА', 0, -44, 18, { font: 'Osw', col: '#2a2a2a' }); pop();
    push(300, 1290, 0.9); rect(-50, -90, 100, 90, { wash: '#c8a040', washA: 1, w: 2, col: '#4a2a08' }); for (let i = 0; i < 3; i++) { const f = flick(t, i); blob([[-20 + i * 16, -90], [-14 + i * 16, -110 - 10 * f], [-8 + i * 16, -90]], { wash: '#4a8aff', washA: 0.9, line: false }); } glow(0, -100, 60, 'rgba(100,150,255,1)', 0.25); pop();
    castShadow(560, 1330, 110, 160, -0.9, 0.2); castShadow(80, 1360, 110, 160, -0.9, 0.2);
  }
  function actors(t) {                                                   // бочка «КВАС» (едет к двери, нимб) и помидор-нахал (вкатывается, толкает)
    const bx = barX(t), out = t > EV.tm_out + 0.1; if (!out) { push(bx, 1440, 0.8, (bx - 900) * 0.004); kvasTub(0, 0, 1, t, { col: '#7a4a24', cloth: 1, key: 24630 }); rect(-70, -120, 140, 50, { wash: '#f4ecd8', washA: 1, w: 2, col: '#3a2410' }); txt('КВАС', 0, -86, 34, { font: 'Osw', col: '#6a3a10' });
      if (t > EV.tm_holy - 0.05) { const k = popK(t, EV.tm_holy, 0.3); ell(0, -260, 80 * k, 18 * k, { line: true, w: 7, col: '#f4c840' }); glow(0, -260, 80, 'rgba(255,220,120,1)', 0.3 * k); } pop(); }
    const rk = roll(t), tx = lerp(-300, t > EV.tm_push ? lerp(620, 860, sm(clamp((t - EV.tm_push) / 0.8))) : 620, rk);
    push(tx, 1420, 1, (1 - rk) * 8); const tm = ell(0, -150, 160, 140, { wash: '#e0302a', washA: 1, w: 3, col: '#5a0a08', key: 24631 }); shadeG(tm.path, 120, -60, -60, -200, '#8a1a0a', 0.5); ell(-60, -220, 40, 22, { wash: '#ffc0b0', washA: 0.7, line: false });
    for (let i = 0; i < 5; i++) { push(0, -284, 1, i * 1.25); blob([[0, 0], [-14, -30], [0, -56], [14, -30]], { wash: '#3a7a2a', washA: 1, w: 1.4, col: '#1a3a0a' }); pop(); } pop();
    if (rk > 0.6) { push(tx, 1420, 1); for (const sd of [-1, 1]) { ell(sd * 44, -170, 18, 22, { wash: '#ffffff', washA: 1, w: 2, col: '#2a0a0a' }); ell(sd * 44 - 6, -166, 9, 11, { wash: '#1a0a0a', washA: 1, line: false }); pencil([[sd * 20, -204], [sd * 70, -196 - (sd < 0 ? 10 : 0)]], { w: 6, col: '#2a0a0a', pass2: false }); }
      pencil(spline([[-40, -110], [0, -96], [40, -116]], false, 4), { w: 4, col: '#2a0a0a', pass2: false }); pencil(spline([[-30, -128], [-60, -120], [-74, -134]], false, 4), { w: 5, col: '#2a0a0a', pass2: false }); pencil(spline([[30, -128], [60, -120], [74, -134]], false, 4), { w: 5, col: '#2a0a0a', pass2: false });
      const cp = blob([[-90, -270], [-60, -310], [60, -306], [90, -268], [140, -262], [60, -250], [-80, -250]], { wash: '#3a3a4a', washA: 1, w: 2, col: '#0a0a14' }); pop();
      if (t > EV.tm_in && t < EV.tm_push) bubbleTag('НАХАЛ', tx, 1120, t, EV.tm_in + 0.2, '#c8202a', 34, 0.08); }
    if (t > EV.tm_out && t < EV.tm_out + 0.5) { push(1150, 1100, popK(t, EV.tm_out, 0.3), -0.1); txt('БАМ!', 0, 0, 80, { font: 'Osw', col: '#c8202a' }); pop(); }
  }
  function table(t) {                                                    // стол с клеёнкой в клетку: банки томата, кастрюля с паром, разделочная доска, нож, лук, соль
    const tb = rect(-400, 1440, 2000, 600, { wash: '#f4f0e8', washA: 1, w: 3, col: '#3a3a3a', key: 24640 }); for (let i = 0; i < 40; i++) pencil([[-400 + i * 50, 1440], [-400 + i * 50, 2000]], { w: 6, col: '#c8202a', a: 0.25, pass2: false }); for (let i = 0; i < 12; i++) pencil([[-400, 1460 + i * 50], [1600, 1460 + i * 50]], { w: 6, col: '#c8202a', a: 0.25, pass2: false });
    shadeG(tb.path, 0, 1440, 0, 1900, '#6a5a5a', 0.4); lightPool(700, 1520, 600, 140, 'rgba(255,240,200,1)', 0.3);
    push(200, 1600, 0.9); const pt = shape([[-120, -160], [-120, -10], [120, -10], [120, -160]], { wash: '#f4f4f8', washA: 1, w: 2.4, col: '#2a3a4a', key: 24641 }); shadeG(pt.path, 120, 0, -40, 0, '#a8b0c0', 0.5); pencil([[-120, -140], [120, -140]], { w: 6, col: '#2a5aa8', pass2: false }); ell(0, -160, 120, 22, { wash: '#c8142a', washA: 1, w: 2, col: '#2a0408' }); steamWisps(0, -170, 1, t, 4, 24642, 0.45); pop();
    for (let i = 0; i < 3; i++) tomatoTin(920 + i * 90, 1640 - (i % 2) * 10, 0.7, t, { key: 24650 + i }); for (let i = 0; i < 4; i++) tomato(500 + i * 60, 1640 - (i % 2) * 14, 0.5, i);
    push(720, 1720, 0.9); rect(-110, -20, 220, 36, { wash: '#c89a5a', washA: 1, w: 2, col: '#4a2a08' }); for (let i = 0; i < 4; i++) ell(-60 + i * 36, -26, 16, 6, { wash: '#e0302a', washA: 1, w: 1, col: '#5a0a08' }); pop();
    castShadow(200, 1600, 260, 90, -0.9, 0.25);
  }
  function front(t) {                                                    // передний план: занавеска на верёвочке справа, связка перца слева, солнечные пылинки
    push(1180, 300, 1, Math.sin(t * 0.8) * 0.02); const cu = shape([[-80, 0], [80, 0], [100, 900], [-60, 900]], { wash: '#f8f4ec', washA: 1, w: 2, col: '#6a6a60' }); for (let i = 0; i < 6; i++) for (let j = 0; j < 14; j++) ell(-60 + i * 30, 30 + j * 64, 6, 6, { wash: '#e0302a', washA: 0.7, line: false }); pop();
    for (let i = 0; i < 6; i++) { push(-60 + i * 12, 300 + i * 60, 1, 0.2); blob([[0, 0], [-10, 30], [0, 70], [10, 30]], { wash: '#c8202a', washA: 1, w: 1.2, col: '#4a0408' }); pop(); }
    motes(18, [WIN[0] - 300, WIN[1], WIN[0] + 100, 1600], '#fff8e0', t, 24660, { sp: 4, sz: 3, a: 0.5, wob: 8 });
  }
  WORLD.tomato = (t, u, cat) => {
    lay(10, () => { wall(t); });
    lay(4, () => { room(t); shaft(WIN[0], WIN[1] - 200, 280, 1400, 0.7, 'rgba(255,240,200,1)', 0.12); });
    lay(2, () => { actors(t); });
    lay(1, () => { cat(); table(t); });
    lay(0.7, () => { front(t); moodDark(700, 1100, 540, 1500, '#0a1a20', 0.35); });
  };
  DIR.tomato = {
    outfit: 'waitB', light: { side: 1, rim: '#fff0c0' }, grade: ['#ff9070', 0.05],
    act: () => [[S0.tomato, 'suspicious'], [EV.tm_in, 'sideeye'], [EV.tm_cal, 'talk'], [EV.tm_push, 'shock'], [EV.tm_holy, 'smug'], [EV.tm_out, 'scared'], [EV.tm_out + 0.4, 'laugh']],
    pose: (t, u, b) => { const catch1 = t > EV.tm_out - 0.1;
      return Object.assign(b, { x: 560, y: 1600, s: 1.15, flip: false, look: t > EV.tm_in && t < EV.tm_push ? [0.6, 0] : t > EV.tm_push && t < EV.tm_out ? [0.9, 0.1] : [0, 0],
        hand: catch1 ? [120, -340] : [170, -230], handF: catch1 ? [-120, -340] : t > EV.tm_holy && t < EV.tm_out ? [-200, -330] : [-150, -210], point: t > EV.tm_holy && t < EV.tm_out, prop: catch1 ? 'tinP' : undefined, propAng: 0, tailUp: catch1 }); },
    hud: t => { infoPlate(t, EV.tm_push - 0.2, S1.tomato + 0.4, { kind: 'swap', tb: EV.tm_out, title: 'КИСЛИНКА БОРЩА', a: 'КВАС', b: 'ТОМАТ', ia: 'kvas', ib: 'tomato' }); },
    cam: () => [[S0.tomato, 620, 1260, 0.26], [EV.tm_in, 640, 1270, 0.26], [EV.tm_cal, 640, 1250, 0.27], [EV.tm_push, 700, 1280, 0.27], [EV.tm_out, 720, 1290, 0.28], [S1.tomato, 700, 1300, 0.3]]
  };
  TRANS_IN.tomato = { a: 0.12, b: 0.55, runA: 1, fx(k, t, A, B) {       // помидор лопается: томатные брызги-кляксы заливают кадр и сквозь них проявляется кухня
    const e = sm(k); drawBuf(e < 0.5 ? A : B, 1, 540, 960);
    scr(() => { const a = e < 0.5 ? e / 0.5 : (1 - e) / 0.5; for (let i = 0; i < 16; i++) { const r = rng(24670 + i), x = r() * 1080, y = r() * 1920, R = (120 + r() * 320) * Math.min(1, e * 2.2); const pts = []; for (let q = 0; q < 10; q++) { const an = q / 10 * 6.283, rr = R * (0.7 + 0.5 * rng(24680 + i * 10 + q)()); pts.push([x + Math.cos(an) * rr, y + Math.sin(an) * rr]); }
      blob(pts, { wash: i % 3 ? '#d8202a' : '#ff5a3a', washA: 0.95 * a, line: false }); for (let q = 0; q < 3; q++) ell(x + (rng(i + q)() - 0.5) * R, y + (rng(i * 3 + q)() - 0.5) * R, 8, 12, { wash: '#f8e8a0', washA: 0.8 * a, line: false }); } });
  } };
})();
