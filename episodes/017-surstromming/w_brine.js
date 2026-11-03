/* 017 — `brine`: «Салаку ловят весной, кладут в слабый рассол — и она бродит месяц-два.» Засолочный сарай у моря весной: открытые ворота на залив
   с тающими льдинами, ледоход, первые подснежники у порога, длинный стол, где рыбаки и рыбачки чистят салаку, ряды бочек, весы, ковши, сети под потолком,
   лампа, пар от чанов. Том-рыбак в жёлтой штормовке и зюйдвестке. По словам: «весной» — льдины трескаются, сыплются капли, распускаются подснежники;
   «слабый рассол» — ковш соли — лишь щепотка, шкала СОЛИ: МАЛО; «бродит» — бочка пузырится; «месяц-два» — над бочкой календарь листается 1 → 2 МЕСЯЦА.
   Переход В сцену: кадр запотевает паром от рассола и проясняется. */
(() => {
  EV.br_spring = wtw('s3', 'весной,');
  EV.br_weak = wtw('s3', 'слабый');
  EV.br_ferm = wtw('s3', 'бродит');
  EV.br_mon = wtw('s3', 'месяц-два.');
  KEYW.push('весной,', 'месяц-два.');

  function shed(t) {                                                    // доски сарая, ворота на весенний залив со льдинами, сети, лампа
    vgrad(-600, 1500, ['#3a2a1e', '#5a4230', '#6a503a']); for (let x = -400; x < 1600; x += 70) pencil([[x, -500], [x, 1300]], { w: 4, col: '#2a1a10', a: 0.6, pass2: false });
    push(560, 520, 1); const g = rect(-330, -360, 660, 520, { wash: '#a8c8e0', washA: 1, w: 10, col: '#2a1a10', key: 17400 }); ctx.save(); ctx.clip(g.path); vgrad(-360, 160, ['#9ac0e0', '#d8e8f0']); rect(-330, 0, 660, 160, { wash: '#4a7a9a', washA: 1, line: false });
      const mlt = t > EV.br_spring ? clamp((t - EV.br_spring) / 1.0) : 0; for (let i = 0; i < 7; i++) { const x = -300 + i * 100 + (i % 2) * 20 + mlt * (i % 2 ? 20 : -20), w = 70 - mlt * 30; poly([[x - w / 2, 40 + (i % 3) * 30], [x + w / 2, 30 + (i % 3) * 30], [x + w / 2 - 10, 60 + (i % 3) * 30], [x - w / 2 + 10, 66 + (i % 3) * 30]], { wash: '#f4f8fc', washA: 1, w: 1.2, col: '#8aa8c0' }); }
      for (let i = 0; i < 6; i++) pencil(Array.from({ length: 14 }, (_, j) => [-330 + j * 50, 20 + i * 24 + Math.sin(t * 1.5 + j + i) * 4]), { w: 2, col: '#cfe4f4', a: 0.5, pass2: false }); for (let i = 0; i < 6; i++) spruce(-300 + i * 120, -10, 90, '#2a4a3a', 1); ctx.restore(); pop();
    for (let i = 0; i < 3; i++) { pencil(spline([[-400, -40 + i * 60], [200, 80 + i * 40], [800, -20 + i * 60], [1600, 60 + i * 40]], false, 8), { w: 2, col: '#c8b088', a: 0.8, pass2: false }); } for (let i = 0; i < 6; i++) ell(-200 + i * 300, 40 + (i % 2) * 40, 16, 16, { wash: '#e8b030', washA: 1, w: 1 });
    push(860, -60, 1); pencil([[0, -200], [0, 0]], { w: 3, col: '#2a2a2a', pass2: false }); shape([[-70, 40], [-40, 0], [40, 0], [70, 40]], { wash: '#2a4a3a', washA: 1, w: 2 }); glow(0, 60, 300, 'rgba(255,220,150,1)', 0.45); pop();
  }
  function workers(t) {                                                 // длинный стол разделки, рыбаки и рыбачки, бочки рядами, весы
    for (let i = 0; i < 5; i++) barrel(-260 + i * 130, 1240, 0.55, t, { key: 17410 + i * 4 }); for (let i = 0; i < 4; i++) barrel(900 + i * 130, 1240, 0.55, t, { key: 17440 + i * 4 });
    for (const [i, x] of [[0, 120], [1, 980]]) { const ch = Math.abs(Math.sin(t * 6 + i * 2)) * 10; human(x, 1300, 1.0, t, { body: i ? '#c8a8a0' : '#4a6a8a', legs: '#3a3a3a', hair: ['#e8d0a0', '#8a5a2a'][i], face: 'smile', armL: 'hold', armR: 'up', look: i ? -0.4 : 0.4, seed: 17460 + i, flip: i ? -1 : 1, long: i }); if (i) kerchief20(x, 1300, 1.0, '#f4f0e6', -1); push(x + (i ? -80 : 80), 1300 - 150 - ch, 1); fish(0, 0, 0.4, 0.2, { key: 17462 + i }); pop(); }
  }
  function table(t) {                                                   // стол: салака, ковш с щепоткой соли, шкала, бочка-бродилка, календарь
    const tb = rect(-400, 1440, 1900, 800, { wash: '#8a6a44', washA: 1, w: 3, col: '#2a1a0a', key: 17470 }); shadeG(tb.path, 0, 1900, 0, 1440, '#3a2410', 0.45); for (let i = 0; i < 6; i++) pencil([[-400, 1480 + i * 70], [1500, 1484 + i * 70]], { w: 2, col: '#4a3018', a: 0.5, pass2: false });
    for (let i = 0; i < 5; i++) push(-80 + i * 70, 1480, 0.45, 0.2 * (i % 2 ? 1 : -1)), fish(0, 0, 1, 0, { key: 17471 + i }), pop();
    if (t > EV.br_spring) { for (let i = 0; i < 4; i++) { const k = popK(t, EV.br_spring + i * 0.12, 0.35); if (k <= 0) continue; push(380 + i * 30, 1240 + (i % 2) * 20, k); pencil([[0, 0], [0, -50]], { w: 3, col: '#4a8a2a', pass2: false }); blob([[0, -50], [-12, -70], [0, -86], [12, -70]], { wash: '#ffffff', washA: 1, w: 1.2, col: '#8a8a8a' }); pop(); } }
    if (t > EV.br_weak - 0.2) { push(520, 1440, 1, -0.3); rect(-12, -150, 24, 110, { wash: '#a8743a', washA: 1, w: 1.4 }); const sc = ell(0, -30, 60, 30, { wash: '#b8bcc4', washA: 1, w: 2, col: '#3a3e44' }); ell(10, -40, 8, 5, { wash: '#ffffff', washA: 1, line: false }); pop();
      push(250, 1160, popK(t, EV.br_weak, 0.35)); rect(-130, -40, 260, 80, { wash: '#1a1a20', washA: 1, w: 4, col: '#c8a050' }); txt('СОЛИ: МАЛО', 0, 4, 32, { font: 'Osw', col: '#9ad0ff' }); rect(-100, 20, 200, 10, { wash: '#3a3a4a', washA: 1, line: false }); rect(-100, 20, 50, 10, { wash: '#9ad0ff', washA: 1, line: false }); pop(); }
    const fm = t > EV.br_ferm; push(860, 1560, 1 + (fm ? Math.sin(t * 24) * 0.015 : 0)); barrel(0, 0, 0.9, t, { key: 17480, bubbles: fm }); pop(); if (fm) stink(860, 1320, 1.0, t, { n: 3, a: 0.7 });
    if (t > EV.br_mon - 0.1) { const q = clamp((t - EV.br_mon + 0.1) / 0.8); push(860, 1040, popK(t, EV.br_mon - 0.1, 0.4)); rect(-110, -100, 220, 200, { wash: '#f8f4ea', washA: 1, w: 2.4, col: '#3a3a3a' }); rect(-110, -100, 220, 50, { wash: '#c8221a', washA: 1, w: 2 }); txt('МЕСЯЦ', 0, -64, 26, { font: 'Osw', col: '#ffffff' }); txt(q > 0.5 ? '2' : '1', 0, 64, 110, { font: 'Osw', col: '#2a2a2a' }); if (q > 0.3 && q < 0.7) { push(80, -40, 1, (q - 0.3) * 6); rect(-60, -40, 120, 80, { wash: '#f8f4ea', washA: 1, w: 1.2 }); pop(); } pop(); }
  }
  function steam(t) { for (let i = 0; i < 5; i++) { const q = (t * 0.25 + i / 5) % 1, x = 100 + i * 220; ell(x + Math.sin(t + i) * 40, 1300 - q * 900, 120 + q * 80, 50 + q * 30, { wash: '#f4f4f0', washA: 0.18 * (1 - q), line: false }); } }
  function front(t) { push(-40, 1960, 1.6); barrel(0, 0, 0.7, t, { key: 17490 }); pop(); push(1180, 1990, 1.6); const b = shape([[-90, 0], [-70, -80], [70, -80], [90, 0]], { wash: '#8a8e94', washA: 1, w: 2 }); for (let i = 0; i < 3; i++) push(-40 + i * 40, -90, 0.35, 1.2), fish(0, 0, 1, 0, { key: 17491 + i }), pop(); pop();
    motes(24, [0, 300, 1100, 1700], '#fff4e0', t, 17495, { sp: 6, sz: 4, a: 0.45, wob: 2 }); rays(560, 520, 1.6, 0.4, 1500, 'rgba(240,248,255,1)', 0.14, 5, t); }
  WORLD.brine = (t, u, cat) => {
    lay(14, () => { shed(t); haze('#c8a880', 0.06); });
    lay(2.6, () => { workers(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { table(t); steam(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.brine = {
    outfit: 'fiskA', light: { side: -1, rim: '#e0f0ff' }, grade: ['#c8d8e8', 0.05],
    act: () => [[S0.brine, 'grin'], [EV.br_spring, 'awe'], [EV.br_weak, 'smug'], [EV.br_ferm, 'suspicious'], [EV.br_mon, 'shock']],
    pose: (t, u, b) => Object.assign(b, { x: 600, y: 1580, s: 1.16, flip: t > EV.br_ferm ? 1 : -1, look: t > EV.br_ferm ? [0.8, 0.2] : t > EV.br_weak ? [-0.6, 0.4] : [-0.2, -0.6], hand: [200, -290], handF: [-90, -220], prop: 'fishP', propAng: 0.1, squint: t > EV.br_ferm + 0.3 }),
    cam: () => [[S0.brine, 560, 900, 0.12], [EV.br_spring, 520, 950, 0.22, 'x'], [EV.br_weak, 420, 1250, 0.22], [EV.br_ferm, 760, 1250, 0.22], [EV.br_mon, 800, 1150, 0.22], [S1.brine, 780, 1180, 0.22]]
  };
  // ---------------------------------------------------------------- переход: кадр запотевает паром от рассола и проясняется
  TRANS_IN.brine = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k); drawBuf(e < 0.5 ? A : B, 1, 540, 960); const f = e < 0.5 ? e * 2 : (1 - e) * 2;
    scr(() => { ctx.save(); ctx.fillStyle = 'rgba(235,240,240,' + 0.9 * f + ')'; ctx.fillRect(0, 0, W, H); const r = rng(17499); for (let i = 0; i < 40; i++) { ctx.fillStyle = 'rgba(255,255,255,' + 0.6 * f + ')'; ctx.beginPath(); ctx.arc(r() * W, r() * H, 30 + r() * 80, 0, 6.283); ctx.fill(); } ctx.restore(); });
  } };
})();
