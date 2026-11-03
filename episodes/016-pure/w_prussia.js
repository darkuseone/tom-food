/* 016 — `prussia`: «А француз Пармантье попал в плен к пруссакам — и выжил на картошке.» Зимний лагерь военнопленных Семилетней войны: частокол,
   сторожевая вышка с фонарём, деревянные бараки в снегу, прусский часовой в тёмно-синем мундире и шапке-митре, пленные французы в белых мундирах греют руки у
   костра, большой котёл с варёной картошкой, ворота с решёткой, вороны на заборе, снегопад. Том — Пармантье, военный аптекарь в синем кафтане и треуголке.
   По словам: «Пармантье» — табличка с именем PARMENTIER; «в плен» — решётка ворот с лязгом опускается за Томом; «к пруссакам» — на вышке поднимается чёрно-белый
   флаг с орлом; «выжил на картошке» — из котла вынимают дымящуюся картошку, Том ест, табло ВЫЖИЛ ✓; немая пауза — часовой принюхивается к котлу.
   Переход В сцену: падающий снег густеет в метель и рассеивается. */
(() => {
  EV.pr_name = wtw('s4', 'Пармантье');
  EV.pr_cap = wtw('s4', 'плен');
  EV.pr_prus = wtw('s4', 'пруссакам');
  EV.pr_ate = wtw('s4', 'выжил');
  EV.pr_gag = LE('s4');
  SHAKES.push([EV.pr_cap + 0.2, 0.15, 8]);
  KEYW.push('Пармантье', 'картошке.');

  function camp(t) {                                                    // зимнее небо, лес, частокол, вышка с флагом, бараки, вороны
    vgrad(-700, 1000, ['#4a5a7a', '#8a9ab0', '#c8d0d8']); for (let i = 0; i < 20; i++) spruce(-380 + i * 100, 700, 140 + (i % 3) * 50, '#2a3a3a', 1); rect(-400, 700, 2000, 60, { wash: '#e8eef4', washA: 1, line: false });
    for (let i = 0; i < 40; i++) { const x = -400 + i * 50; pencil([[x, 1000], [x, 760]], { w: 30, col: '#6a5a44' }); poly([[x - 15, 760], [x, 730], [x + 15, 760]], { wash: '#6a5a44', washA: 1, line: false }); ell(x, 740, 14, 6, { wash: '#ffffff', washA: 1, line: false }); }
    push(1000, 1000, 1); for (const sd of [-1, 1]) pencil([[sd * 70, 0], [sd * 50, -420]], { w: 14, col: '#4a3a2a' }); pencil([[-70, -100], [50, -300]], { w: 6, col: '#4a3a2a', pass2: false }); rect(-90, -500, 180, 90, { wash: '#5a4a34', washA: 1, w: 2 }); shape([[-110, -500], [0, -580], [110, -500]], { wash: '#3a2a1a', washA: 1, w: 2 }); ell(0, -580, 60, 14, { wash: '#ffffff', washA: 1, line: false }); glow(40, -450, 80, 'rgba(255,210,120,1)', 0.6);
      const up = t > EV.pr_prus ? sm(clamp((t - EV.pr_prus) / 0.5)) : 0; pencil([[-60, -580], [-60, -760]], { w: 4, col: '#3a2a1a', pass2: false }); if (up > 0) { push(-60, -580 - 170 * up, 1); const fw = Math.sin(t * 5) * 8; rect(0, 0, 120, 70, { wash: '#f4f4f0', washA: 1, w: 1.6, col: '#1a1a1a' }); rect(0, 0, 120, 14, { wash: '#1a1a1a', washA: 1, line: false }); txt('🦅', 60, 50, 1, { a: 0 }); blob([[44, 22], [60, 14], [76, 22], [70, 50], [60, 58], [50, 50]], { wash: '#1a1a1a', washA: 1, line: false }); pencil([[120, 0], [124 + fw, 35], [120, 70]], { w: 1.6, col: '#1a1a1a', pass2: false }); pop(); } pop();
    for (const x of [-120, 300]) { push(x, 1100, 1); rect(-160, -200, 320, 200, { wash: '#7a6044', washA: 1, w: 2, col: '#2a1a0a' }); for (let i = 0; i < 6; i++) pencil([[-160, -200 + i * 34], [160, -200 + i * 34]], { w: 2, col: '#4a3a24', a: 0.6, pass2: false }); shape([[-190, -200], [0, -300], [190, -200]], { wash: '#e8eef4', washA: 1, w: 2, col: '#8a9aa8' }); rect(-30, -110, 60, 110, { wash: '#2a1a0a', washA: 1, w: 1.4 }); rect(70, -150, 50, 40, { wash: '#ffd890', washA: 0.8, w: 1.4 }); for (let k = 0; k < 2; k++) { const q = (t * 0.3 + k / 2) % 1; ell(110, -320 - q * 160, 30 + q * 40, 20 + q * 20, { wash: '#d8d8d8', washA: 0.5 * (1 - q), line: false }); } pop(); }
    for (let i = 0; i < 3; i++) { const x = 560 + i * 60; push(x, 728 - Math.abs(Math.sin(t * 3 + i)) * 4, 0.8); ell(0, 0, 20, 14, { wash: '#1a1a1a', washA: 1, line: false }); ell(16, -12, 9, 9, { wash: '#1a1a1a', washA: 1, line: false }); poly([[24, -12], [36, -10], [24, -8]], { wash: '#3a3a3a', washA: 1, line: false }); pop(); }
  }
  function people(t) {                                                  // пленные у костра, часовой-пруссак, костёр и котёл с картошкой
    for (const [i, x] of [[0, 120], [1, 260]]) { human(x, 1320, 0.95, t, { body: '#f4f0e6', bodyD: '#b8b0a0', legs: '#c8c0b0', hair: ['#5a3a20', '#2a1a10'][i], face: t > EV.pr_ate ? 'smile' : 'calm', armL: 'up', armR: 'up', look: 0.5, seed: 16500 + i }); hat20(x, 1320, 0.95, 'fedora', '#1a1a1a'); }
    push(450, 1330, 1); for (let i = 0; i < 4; i++) { push(0, 0, 1, -0.6 + i * 0.4); rect(-80, -10, 160, 20, { wash: '#5a3a1a', washA: 1, w: 1.4 }); pop(); } for (let i = 0; i < 6; i++) { const f = Math.sin(t * 9 + i) * 10; blob([[-50 + i * 20, -10], [-54 + i * 20, -60 - f], [-44 + i * 20, -110 - f * 2], [-36 + i * 20, -60], [-30 + i * 20, -10]], { wash: i % 2 ? '#ff8a2a' : '#ffd04a', washA: 0.9, line: false }); } glow(0, -60, 220, 'rgba(255,150,60,1)', 0.55);
      for (const sd of [-1, 1]) pencil([[sd * 90, 0], [0, -220]], { w: 5, col: '#3a3a3a', pass2: false }); const pot = shape(spline([[-80, -200], [-90, -140], [-60, -100], [60, -100], [90, -140], [80, -200]], true, 6), { wash: '#2a2a2a', washA: 1, w: 2.4 }); ell(0, -200, 80, 16, { wash: '#c8c0a8', washA: 1, w: 2 }); for (let i = 0; i < 5; i++) potato(-50 + i * 25, -206, 0.28, i, { key: 16510 + i });
      for (let k = 0; k < 3; k++) { const q = (t * 0.5 + k / 3) % 1; pencil(spline([[-30 + k * 30, -210], [-20 + k * 30 + Math.sin(q * 6) * 16, -260 - q * 60], [-30 + k * 30, -320 - q * 80]], false, 5), { w: 8, col: '#ffffff', a: 0.4 * (1 - q), pass2: false }); } pop();
    const sn = t > EV.pr_gag; human(860, 1320, 1.05, t, { body: '#1e2a5a', bodyD: '#0e1a3a', legs: '#e8e0c8', hair: '#c8b890', face: sn ? 'smile' : 'calm', armL: 'hold', armR: 'hold', look: sn ? -0.8 : -0.2, seed: 16520, flip: -1 }); push(860, 1320 - 290, 1.05); shape([[-34, 0], [-28, -80], [0, -110], [28, -80], [34, 0]], { wash: '#c8a040', washA: 1, w: 2, col: '#5a3a08' }); rect(-34, -10, 68, 14, { wash: '#1e2a5a', washA: 1, w: 1 }); pop();
    push(860 + 50, 1320 - 120, 1.05); pencil([[0, 100], [0, -260]], { w: 7, col: '#6a4424' }); pencil([[0, -260], [0, -330]], { w: 3, col: '#b8bcc4', pass2: false }); pop(); if (sn) { push(760, 1000, 1); txt('*нюх*', 0, 0, 30, { font: 'Hand', col: '#1a1a2a' }); pop(); }
  }
  function gate(t) {                                                    // ворота с решёткой, табличка имени, миска картошки, табло
    const tb = rect(-400, 1440, 1900, 800, { wash: '#e8eef4', washA: 1, w: 2, col: '#8a9aa8', key: 16530 }); shadeG(tb.path, 0, 1900, 0, 1440, '#a8b8c8', 0.4); for (let i = 0; i < 12; i++) ell(-300 + i * 150, 1520 + (i % 3) * 120, 50, 10, { wash: '#c8d4e0', washA: 0.8, line: false });
    const dn = t > EV.pr_cap ? sm(clamp((t - EV.pr_cap) / 0.3)) : 0; if (dn > 0) { const yb = lerp(400, 1460, dn); push(-40, 0, 1); for (let i = 0; i < 4; i++) pencil([[-120 + i * 70, yb], [-120 + i * 70, yb - 900]], { w: 12, col: '#3a3a3a' }); for (let k = 0; k < 4; k++) pencil([[-140, yb - 120 - k * 220], [100, yb - 120 - k * 220]], { w: 8, col: '#3a3a3a' }); pop(); }
    if (t > EV.pr_name - 0.1) { push(520, 1060, popK(t, EV.pr_name - 0.1, 0.4)); rect(-170, -40, 340, 80, { wash: '#f4ecd8', washA: 1, w: 3, col: '#5a3a1a' }); txt('PARMENTIER', 0, 14, 44, { font: 'Osw', col: '#2a4a9a' }); pop(); }
    if (t > EV.pr_prus) bubbleTag('ПРУССИЯ', 900, 820, t, EV.pr_prus, '#1a1a1a', 40, 0.05);
    push(640, 1520, 1); ell(0, 0, 100, 24, { wash: '#8a8e94', washA: 1, w: 2, col: '#3a3e44' }); if (t > EV.pr_ate - 0.2) for (let i = 0; i < 4; i++) potato(-50 + i * 34, -16, 0.38, i, { key: 16531 + i, half: i % 2 }); pop();
    if (t > EV.pr_ate + 0.3) { push(520, 900, popK(t, EV.pr_ate + 0.3, 0.4)); rect(-140, -46, 280, 92, { wash: '#1a1a20', washA: 1, w: 4, col: '#c8a050' }); txt('ВЫЖИЛ ✓', 0, 18, 52, { font: 'Osw', col: '#9ae070' }); pop(); }
  }
  function snow(t) { const r = rng(16540); for (let i = 0; i < 60; i++) { const q = ((t * (0.1 + r() * 0.08)) + r()) % 1; ell(-100 + r() * 1300 + Math.sin(t + i) * 30, -200 + q * 2200, 3 + r() * 4, 3 + r() * 4, { wash: '#ffffff', washA: 0.9, line: false }); } }
  function front(t) { push(-40, 1980, 1.6); blob([[-160, 0], [-120, -70], [0, -100], [120, -70], [160, 0]], { wash: '#f4f8fc', washA: 1, w: 2, col: '#a8b8c8' }); pop(); push(1180, 1980, 1.6); for (let i = 0; i < 3; i++) { push(-60 + i * 50, -20, 1, i * 0.3); rect(-60, -10, 120, 20, { wash: '#6a4a2a', washA: 1, w: 1.4 }); pop(); } pop(); snow(t); haze('#dfe8f0', 0.06); }
  WORLD.prussia = (t, u, cat) => {
    lay(14, () => { camp(t); haze('#c8d4e0', 0.12); });
    lay(2.6, () => { people(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { gate(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.prussia = {
    outfit: 'pharmA', light: { side: 1, rim: '#ffd0a0' }, grade: ['#a8c0e0', 0.08],
    act: () => [[S0.prussia, 'proud'], [EV.pr_cap, 'scared'], [EV.pr_prus, 'annoyed'], [EV.pr_ate, 'grin'], [EV.pr_gag, 'suspicious']],
    pose: (t, u, b) => { const eat = t > EV.pr_ate; return Object.assign(b, { x: 620, y: 1700, s: 1.0, flip: t > EV.pr_gag ? 1 : -1, look: t > EV.pr_gag ? [0.8, -0.3] : eat ? [0, 0.4] : t > EV.pr_cap ? [-0.9, -0.2] : [-0.3, 0.2], hand: eat ? [60 + Math.abs(Math.sin(t * 6)) * 30, -340] : [200, -280], handF: [-90, -220], prop: eat ? 'potatoP' : undefined, propAng: 0.2, chatter: !eat && t > EV.pr_cap, frost: !eat }); },
    cam: () => [[S0.prussia, 560, 900, 0.06], [EV.pr_name, 560, 1150, 0.18, 'x'], [EV.pr_cap, 300, 1150, 0.16], [EV.pr_prus, 800, 650, 0.12], [EV.pr_ate, 600, 1250, 0.22], [EV.pr_gag, 720, 1220, 0.2], [S1.prussia, 720, 1240, 0.24]]
  };
  // ---------------------------------------------------------------- переход: снег густеет в метель и рассеивается
  TRANS_IN.prussia = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k); drawBuf(e < 0.5 ? A : B, 1, 540, 960); const f = e < 0.5 ? e * 2 : (1 - e) * 2;
    scr(() => { ctx.save(); ctx.fillStyle = 'rgba(240,245,250,' + 0.85 * f + ')'; ctx.fillRect(0, 0, W, H); const r = rng(16550); ctx.fillStyle = '#ffffff'; for (let i = 0; i < 260 * f; i++) { const x = (r() * W + t * 900 * (0.5 + r())) % W, y = r() * H; ctx.beginPath(); ctx.arc(x, y, 3 + r() * 8, 0, 6.283); ctx.fill(); } ctx.restore(); });
  } };
})();
