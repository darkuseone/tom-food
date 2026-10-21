/* 002 — `trench`: «А „френч фрайз“? Мол, американцы в Первую мировую спутали бельгийцев с французами.» Окоп во Фландрии 1917–18:
   мешки с песком, дощатый настил, колючая проволока, обрубки деревьев, дымное небо. Бельгийский солдат в каске Адриана протягивает кульки: «Voilà, des frites!»;
   американцы в касках Броди (и Том-doughboy в фартуке) переглядываются. «Мол» — штамп «ЛЕГЕНДА»; «спутали» — над головами флажки BE/FR меняются местами, «?».
   Переход В сцену: пар из фритюра заволакивает кадр и рассеивается окопным дымом. */
(() => {
  EV.tr_name = LS('s6') + 0.1;
  EV.tr_legend = wtw('s6', 'Мол');
  EV.tr_ww = wtw('s6', 'Первую');
  EV.tr_mix = wtw('s6', 'спутали');
  KEYW.push('спутали');
  function sky(t) { vgrad(-600, 1200, ['#6a6a6a', '#9a948a', '#c8b89a']); for (let i = 0; i < 6; i++) { const x = ((t * 14 + i * 330) % 2000) - 500; blob([[x, 300 + i * 70], [x + 140, 240 + i * 70], [x + 320, 260 + i * 70], [x + 400, 330 + i * 70], [x + 160, 360 + i * 70]], { wash: '#5a5650', washA: 0.4, line: false }); }
    const fl = Math.max(0, Math.sin(t * 1.7) - 0.9) * 10; if (fl > 0) glow(900, 900, 400, 'rgba(255,200,140,1)', fl * 0.3); }
  function noMansLand(t) {                                              // ничья земля: воронки, обрубки деревьев, проволока
    rect(-600, 980, 2300, 400, { wash: '#6a5a44', washA: 1, w: 2, col: '#2a2016', key: 8900 });
    for (let i = 0; i < 7; i++) { const r = rng(8901 + i), x = -300 + i * 260 + r() * 80; ell(x, 1040 + r() * 60, 90, 18, { wash: '#4a3e30', washA: 1, w: 1.6, col: '#2a2016' });
      const h = 140 + r() * 160; pencil([[x + 40, 1020], [x + 46, 1020 - h]], { w: 14, col: '#2a2016' }); for (let k = 0; k < 2; k++) pencil([[x + 44, 1020 - h * (0.5 + k * 0.3)], [x + 44 + (k ? 50 : -40), 1000 - h * (0.6 + k * 0.3)]], { w: 6, col: '#2a2016', pass2: false }); }
    for (let i = 0; i < 12; i++) { const x = -400 + i * 170; pencil([[x, 1010], [x, 950]], { w: 5, col: '#3a2a1a' }); pencil(spline([[x, 960], [x + 40, 990], [x + 85, 950], [x + 130, 990], [x + 170, 960]], false, 10), { w: 2, col: '#2a2a2a', a: 0.8, pass2: false }); }
    haze('#b0a890', 0.15);
  }
  function trench(t) {                                                  // стенка окопа: мешки, доски, ящик, лампа
    rect(-600, 1080, 2300, 1000, { wash: '#5a4630', washA: 1, w: 2, col: '#2a1a10', key: 8910 });
    for (let r = 0; r < 4; r++) for (let i = 0; i < 16; i++) { const x = -500 + i * 140 + (r % 2) * 70, y = 1000 + r * 70; const b = blob([[x - 66, y + 30], [x - 70, y], [x - 50, y - 26], [x + 50, y - 28], [x + 70, y], [x + 66, y + 30]], { wash: r % 2 ? '#a89070' : '#9a8464', washA: 1, w: 2, col: '#3a2a1a', key: 8920 + r * 20 + i }); shadeG(b.path, x, y + 30, x, y - 26, '#5a4630', 0.5); pencil([[x - 30, y - 10], [x + 26, y - 14]], { w: 1.4, col: '#5a4630', a: 0.5, pass2: false }); }
    for (let i = 0; i < 6; i++) rect(-400 + i * 330, 1290, 26, 300, { wash: '#6a4a2a', washA: 1, w: 2, col: '#2a1408' }); for (let k = 0; k < 4; k++) rect(-600, 1310 + k * 60, 2300, 48, { wash: k % 2 ? '#7a5a36' : '#6a4c2c', washA: 1, w: 1.6, col: '#2a1408' });
    const lx = 880; pencil([[lx, 1240], [lx, 1300]], { w: 2, col: '#2a2a2a', pass2: false }); poly([[lx - 22, 1300], [lx + 22, 1300], [lx + 16, 1350], [lx - 16, 1350]], { wash: '#ffe0a0', washA: 1, w: 2, col: '#2a2a2a' }); glow(lx, 1325, 160 * flick(t), 'rgba(255,200,120,1)', 0.5);
  }
  function belgian(t) {                                                 // бельгийский солдат: каска Адриана с гребнем, шинель хаки, протягивает кульки
    const give = t > EV.tr_name - 0.2; human(250, 1600, 1.1, t, { body: '#8a7a54', legs: '#6a5a3a', hair: '#5a3a1a', face: 'smile', armL: 'down', armR: give ? 'point' : 'hold', seed: 130, beard: 'short', look: 0.6 });
    push(250, 1600 - 284 * 1.1, 1.1); ell(0, -26, 66, 12, { wash: '#6a6a52', washA: 1, w: 2, col: '#1a1a10' }); const h = blob([[-44, -26], [-40, -66], [0, -84], [40, -66], [44, -26]], { wash: '#7a7a5e', washA: 1, w: 2, col: '#1a1a10' }); metalG(h.path, -10, -60, 60, '#aaaa88', '#7a7a5e', '#3a3a2a');
    pencil(spline([[-34, -60], [0, -96], [34, -60]], false, 6), { w: 6, col: '#5a5a42', pass2: false }); ell(0, -50, 9, 9, { wash: '#d6a842', washA: 1, w: 1 }); pop();
    if (give) fryCone(420, 1300, 0.36, t, { kind: 'news', seed: 8930, title: 'LE SOIR' });
    if (t > EV.tr_name) speech('Voilà, des frites!', 330, 1060, t, EV.tr_name, -1);
  }
  function yank(x, t, k) {                                              // американский солдат: каска Броди, обмотки
    human(x, 1600, 1.05, t, { body: '#6a6a3e', legs: '#5a5a32', hair: '#7a5a3a', face: t > EV.tr_mix ? 'shock' : 'smile', armL: 'hold', armR: k ? 'hold' : 'up', seed: 140 + k, flip: -1, look: -0.6 });
    push(x, 1600 - 284 * 1.05, 1.05); ell(0, -30, 80, 16, { wash: '#5a5a32', washA: 1, w: 2, col: '#1a1a0a' }); blob([[-46, -30], [-40, -64], [0, -76], [40, -64], [46, -30]], { wash: '#6a6a3e', washA: 1, w: 2, col: '#1a1a0a' }); pop();
  }
  function speech(s, x, y, t, t0, tail) { const k = popK(t, t0, 0.3); push(x, y, k, -0.03); ctx.save(); ctx.font = '600 44px Osw'; const w = ctx.measureText(s).width + 50; ctx.restore();
    ctx.save(); ctx.fillStyle = '#fbf6ea'; ctx.strokeStyle = '#2b2622'; ctx.lineWidth = 4; ctx.beginPath(); ctx.roundRect(-w / 2, -44, w, 88, 40); ctx.moveTo(tail * 20 - 20, 40); ctx.lineTo(tail * 70, 100); ctx.lineTo(tail * 20 + 20, 40); ctx.fill(); ctx.stroke(); ctx.restore(); txt(s, 0, 4, 44, { font: 'Osw', col: '#2b2622' }); pop(); }
  function flagsSwap(t) {                                               // над головами: флажки BE/FR, на «спутали» меняются местами с «?»
    if (t < EV.tr_ww) return; const k = clamp((t - EV.tr_mix) / 0.6), a = k * Math.PI;
    for (const [kind, sd] of [['be', -1], ['fr', 1]]) { const x = 540 + sd * Math.cos(a) * 180, y = 760 - sd * Math.sin(a) * 90; push(x, y, popK(t, EV.tr_ww, 0.3)); flag2(-60, -40, 120, 80, kind, t, { pole: 40, key: 8940 + sd }); pop(); }
    if (k > 0.5) bubbleTag('?', 540, 640, t, EV.tr_mix + 0.3, '#d9482b', 90, 0.1);
  }
  WORLD.trench = (t, u, cat) => {
    lay(34, () => { sky(t); });
    lay(10, () => { noMansLand(t); });
    lay(2.2, () => { trench(t); });
    lay(1.25, () => { belgian(t); yank(860, t, 0); yank(1060, t, 1); });
    lay(1, () => { cat(); flagsSwap(t); });
    lay(0.9, () => { const r = rng(8950); for (let i = 0; i < 6; i++) ell(-100 + i * 260, 1720 + r() * 40, 140, 30, { wash: '#4a3a26', washA: 0.9, line: false }); if (t > EV.tr_legend) { push(780, 980, popK(t, EV.tr_legend, 0.3) * 1.1, -0.12); const st = rect(-200, -60, 400, 120, { wash: '#d9482b', washA: 0.12, w: 7, col: '#d9482b' }); txt('ЛЕГЕНДА', 0, 4, 76, { font: 'Osw', col: '#d9482b', a: 0.9 }); pop(); } });
    lay(0.6, () => { motes(18, [-200, 0, 1300, 1900], '#d8d0c0', t, 12, { sp: 30, vx: 40, sz: 8, a: 0.35 }); });
  };
  DIR.trench = {
    outfit: 'doughboy', light: { side: -1, rim: '#ffd8a0' }, grade: ['#a89870', 0.14],
    act: () => [[S0.trench, 'suspicious'], [EV.tr_legend, 'sideeye'], [EV.tr_ww, 'talk'], [EV.tr_mix, 'shock'], [EV.tr_mix + 0.6, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 620, y: 1640, s: 1.0, look: t < EV.tr_legend ? [-0.6, 0] : t < EV.tr_mix ? [0.4, -0.3] : [0, -0.8], hand: [110, -300], prop: t > EV.tr_name ? 'coneP' : undefined, handF: t > EV.tr_mix ? [-120, -380] : [-110, -190] }),
    cam: () => [[S0.trench, 540, 900, 0.1], [EV.tr_name + 0.2, 400, 1150, 0.24, 'x'], [EV.tr_legend, 600, 1120, 0.16], [EV.tr_mix - 0.2, 600, 1000, 0.2], [S1.trench, 600, 980, 0.26]]
  };
  // ---------------------------------------------------------------- переход: пар из фритюра заволакивает кадр и рассеивается дымом окопа
  TRANS_IN.trench = { a: 0.35, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = Math.sin(k * Math.PI); drawBuf(k < 0.5 ? A : B, 1 + q * 0.05, 540, 960);
    scr(() => { for (let i = 0; i < 26; i++) { const r = rng(2600 + i), x = r() * 1080, y = 1920 - k * (1200 + r() * 1400) + r() * 600, R = 160 + r() * 260 + q * 200; glow(x, y, R, k < 0.5 ? 'rgba(255,250,240,1)' : 'rgba(220,214,200,1)', 0.9 * q, 'source-over'); } whiteOut(q * 0.55, k < 0.5 ? '255,250,240' : '220,214,200'); });
  } };
})();
