/* 006 — `mexico`: «Ливанцы привезли вертел в Мексику, а их дети сменили баранину свининой.» Пуэбла 1930-х: фасады в изразцах талавера, башни собора, гирлянды
   папель-пикадо, кактус в кадке, ослик с тележкой. Таверна «TACOS ÁRABES»: старый ливанец в жилете у вертела с бараниной, лепёшки-пита. На «Мексику» — ценник
   ЛИВАН → МЕКСИКА со стрелкой-пароходом; на «дети» выбегает сын в фартуке; на «свининой» табличка с барашком переворачивается — на ней поросёнок, вертел краснеет.
   Переход В сцену: гирлянда папель-пикадо падает занавесом и поднимается. */
(() => {
  EV.mx_mex = wtw('s5', 'Мексику,');
  EV.mx_kids = wtw('s5', 'дети');
  EV.mx_pork = wtw('s5', 'свининой.');
  SHAKES.push([EV.mx_pork + 0.2, 0.16, 6]);
  KEYW.push('свининой.');

  const PP = ['#e8287a', '#2ab8e8', '#f2c838', '#3ab86a', '#f26a2a'];
  function town(t) { vgrad(-600, 1100, ['#58b8f0', '#a8e0f8', '#fff4d8']); for (const x of [700, 940]) { rect(x, 260, 120, 500, { wash: '#e8c8a0', washA: 1, w: 2.4, col: '#6a4a2a' }); ell(x + 60, 260, 60, 50, { wash: '#f2f2f2', washA: 1, w: 2, col: '#6a4a2a' }); for (let q = 0; q < 3; q++) blob([[x + 30, 380 + q * 120], [x + 30, 330 + q * 120], [x + 60, 310 + q * 120], [x + 90, 330 + q * 120], [x + 90, 380 + q * 120]], { wash: '#3a2a1a', washA: 1, w: 1.6 }); }
    for (let i = 0; i < 4; i++) { const x = -260 + i * 380, f = rect(x, 640, 360, 560, { wash: ['#e8a8a0', '#f2e0a0', '#a8d0e8', '#f2c0a0'][i], washA: 1, w: 3, col: '#5a3a2a', key: 6800 + i }); for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) { const xx = x + 10 + c * 58, yy = 660 + r * 58; if ((r + c) % 2) { rect(xx, yy, 50, 50, { wash: '#f6f2ea', washA: 1, w: 1, col: '#2a4a8a' }); ell(xx + 25, yy + 25, 12, 12, { wash: '#2a4a8a', washA: 0.8, line: false }); } } rect(x + 120, 960, 120, 240, { wash: '#5a3a2a', washA: 1, w: 2 }); }
    for (let r = 0; r < 2; r++) { pencil([[-300, 520 + r * 120], [1400, 520 + r * 120]], { w: 2, col: '#3a3a3a', pass2: false }); for (let i = 0; i < 16; i++) { const x = -280 + i * 110, sw = Math.sin(t * 2 + i + r) * 6; poly([[x, 520 + r * 120], [x + 90, 520 + r * 120], [x + 90 + sw, 600 + r * 120], [x + 45 + sw, 590 + r * 120], [x + sw, 600 + r * 120]], { wash: PP[(i + r) % 5], washA: 0.95, w: 1.2, col: '#3a2a2a' }); } }
    if (t > EV.mx_mex - 0.1) { push(770, 440, popK(t, EV.mx_mex) * 0.9); rect(-230, -60, 460, 120, { wash: '#fbf6ea', washA: 1, w: 4, col: '#a8282a' }); txt('ЛИВАН → МЕКСИКА', 0, 14, 42, { font: 'Osw', col: '#a8282a' }); pop(); } }
  function taqueria(t) { rect(180, 880, 640, 70, { wash: '#2a6a3a', washA: 1, w: 3, col: '#0a2a14' }); txt('TACOS ÁRABES', 500, 928, 48, { font: 'Osw', col: '#fff4d0' });
    const pork = clamp((t - EV.mx_pork + 0.1) / 0.4); donerCone(420, 1270, 0.6, t, { kind: pork > 0.5 ? 'pastor' : 'lamb', shave: true });
    human(250, 1280, 0.78, t, { body: '#3a3a5a', hair: '#e8e8e8', face: pork > 0.5 ? 'shock' : 'smile', armL: 'hold', armR: 'hold', seed: 650, beard: true, look: 0.4 }); hat20(250, 1280, 0.78, 'fedora', '#3a3a3a');
    if (t > EV.mx_kids - 0.2) { const k = clamp((t - EV.mx_kids + 0.2) / 0.5); human(lerp(900, 640, sm(k)), 1290, 0.7, t, { body: '#f2f2f2', hair: '#2a1a0a', face: 'grin', armL: 'hold', armR: t > EV.mx_pork ? 'up' : 'swing', seed: 652, look: -0.4 }); }
    push(660, 1040, 1); const fl = Math.abs(Math.cos(pork * Math.PI)); rect(-80, -60 * fl, 160, 120 * fl, { wash: '#fbf6ea', washA: 1, w: 3, col: '#5a3a1a' }); 
    if (pork < 0.5) { ctx.save(); ctx.scale(1, fl); ell(0, 0, 50, 30, { wash: '#f2ece0', washA: 1, w: 2, col: '#5a5a5a' }); for (let i = 0; i < 6; i++) ell(-36 + i * 14, -20, 12, 12, { wash: '#ffffff', washA: 1, w: 1.4, col: '#8a8a8a' }); ell(50, -10, 16, 14, { wash: '#4a4a4a', washA: 1, w: 1.4 }); ctx.restore(); }
    else { ctx.save(); ctx.scale(1, fl); ell(0, 0, 50, 34, { wash: '#f8a8b8', washA: 1, w: 2, col: '#8a3a4a' }); ell(48, -4, 16, 14, { wash: '#f08aa0', washA: 1, w: 1.6, col: '#8a3a4a' }); pencil(spline([[-50, -6], [-62, -16], [-56, -24]], false, 4), { w: 2, col: '#8a3a4a', pass2: false }); ctx.restore(); } pop(); }
  WORLD.mexico = (t, u, cat) => { lay(12, () => town(t)); lay(1.4, () => taqueria(t)); lay(1, () => { rect(-300, 1460, 1700, 600, { wash: '#c8a880', washA: 1, w: 2, col: '#5a3a1a', key: 6820 }); push(80, 1560, 1); rect(-50, -20, 100, 80, { wash: '#b8683a', washA: 1, w: 2 }); for (const [dx, h] of [[-20, 140], [20, 100]]) blob([[dx - 16, -20], [dx - 16, -h], [dx, -h - 16], [dx + 16, -h], [dx + 16, -20]], { wash: '#4a8a3a', washA: 1, w: 2, col: '#1a3a0a' }); pop(); cat(); }); };
  DIR.mexico = {
    outfit: 'prospector', light: { side: 1, rim: '#fff0c0' }, grade: ['#f2a040', 0.06],
    act: () => [[S0.mexico, 'talk'], [EV.mx_mex, 'proud'], [EV.mx_kids, 'grin'], [EV.mx_pork, 'shock'], [EV.mx_pork + 0.5, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 860, y: 1800, s: 1.08, flip: true, apron: 1, look: [-0.7, -0.4], hand: [150, -320], handF: [-90, -230], point: t > EV.mx_kids ? 1 : 0 }),
    cam: () => [[S0.mexico, 540, 900, 0.1], [EV.mx_mex, 540, 820, 0.12], [EV.mx_kids, 600, 1200, 0.18, 'x'], [EV.mx_pork, 560, 1150, 0.22], [S1.mexico, 560, 1150, 0.24]]
  };
  // ---------------------------------------------------------------- переход: гирлянда папель-пикадо падает занавесом и поднимается
  TRANS_IN.mexico = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    drawBuf(k < 0.5 ? A : B, 1, 540, 960); const d = Math.sin(k * Math.PI); scr(() => { for (let i = 0; i < 9; i++) { const x = i * 124 - 10, len = d * (1500 + (i % 3) * 300); poly([[x, -10], [x + 126, -10], [x + 126, len], [x + 63, len - 80], [x, len]], { wash: PP[i % 5], washA: 1, w: 2, col: '#3a2a2a' });
      for (let q = 0; q < 6; q++) ell(x + 63, 120 + q * 220, 20, 20, { wash: '#ffffff', washA: q * 220 < len - 100 ? 0.6 : 0, line: false }); } });
  } };
})();
