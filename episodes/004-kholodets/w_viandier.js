/* 004 — `viandier`: «А мясное желе подавали королям: в 1375-м француз Тайлеван записал рецепт.» Королевская кухня XIV века: каменные своды, огромный очаг с вертелом,
   медь, гобелен с лилиями, в окне — замок. Повар Тайлеван (колпак, борода) пишет пером в книгу «Le Viandier»; на «королям» — блюдо с желе несут по коридору к трону
   (король на заднем плане). Том — средневековый повар в шапероне. Переход В сцену: вертел проворачивается — кадр поворачивается вокруг оси, как туша на вертеле. */
(() => {
  EV.vn_king = wtw('s2', 'королям:');
  EV.vn_year = wtw('s2', '1375-м');
  EV.vn_write = wtw('s2', 'Тайлеван');
  KEYW.push('королям:');

  function hall(t) {                                                   // каменные своды, очаг, гобелен, окно с замком
    vgrad(-600, 1600, ['#2a2018', '#4a3a2a', '#5a4632']); for (let r = 0; r < 16; r++) for (let i = 0; i < 9; i++) { const x = -300 + i * 200 + (r % 2) * 100, y = r * 90; if (y > 1360) continue; const st = rect(x, y, 196, 86, { wash: (r + i) % 3 ? '#6a5a48' : '#5a4a3a', washA: 1, w: 1.6, col: '#2a2018', a: 0.8 }); }
    for (const x of [-60, 540, 1140]) pencil(spline([[x - 300, 0], [x, -120], [x + 300, 0]], false, 10), { w: 26, col: '#3a2e22', pass2: false });
    const w = shape(spline([[720, 600], [720, 260], [820, 180], [920, 260], [920, 600]], true, 6), { wash: '#8ab0d0', washA: 1, w: 6, col: '#2a2018', key: 4300 }); ctx.save(); ctx.clip(w.path); vgrad(180, 600, ['#8ab0d0', '#d8e0d0']); hills(560, 60, '#6a8a5a', 1.2);
    for (let i = 0; i < 3; i++) { rect(760 + i * 50, 420 - i * 30, 40, 140 + i * 30, { wash: '#a8a090', washA: 1, w: 1.4, col: '#4a4030' }); poly([[756 + i * 50, 420 - i * 30], [804 + i * 50, 420 - i * 30], [780 + i * 50, 380 - i * 30]], { wash: '#3a4a7a', washA: 1, w: 1.2 }); } ctx.restore();
    const tp = rect(80, 200, 360, 480, { wash: '#2a3a7a', washA: 1, w: 3, col: '#1a1a3a', key: 4301 }); for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) { push(150 + c * 110, 270 + r * 110, 0.6); for (const a of [-0.5, 0, 0.5]) { push(0, 0, 1, a); blob([[0, 10], [-12, -20], [0, -50], [12, -20]], { wash: '#e8b53a', washA: 1, w: 1.4, col: '#5a3a08' }); pop(); } pop(); }
    const h = rect(240, 820, 600, 520, { wash: '#2a1a10', washA: 1, w: 5, col: '#0a0604', key: 4302 }); rect(200, 780, 680, 60, { wash: '#6a5a48', washA: 1, w: 3, col: '#2a2018' }); for (let i = 0; i < 7; i++) { const f = flick(t, i); blob([[300 + i * 70, 1340], [310 + i * 70, 1340 - 200 * f], [340 + i * 70, 1240 - 60 * f], [350 + i * 70, 1340]], { wash: i % 2 ? '#ffb040' : '#ff7020', washA: 0.95, line: false }); }
    glow(540, 1260, 360, 'rgba(255,140,50,1)', 0.6); pencil([[260, 1060], [820, 1060]], { w: 10, col: '#3a3a3a', pass2: false }); push(540, 1060, 1, t * 1.5); blob([[-120, -40], [-60, -70], [60, -70], [120, -30], [110, 30], [-110, 40]], { wash: '#a8582a', washA: 1, w: 2.4, col: '#3a1408' }); pop();
  }
  function cook(t) { const x = 330, y = 1360; human(x, y, 1.15, t, { body: '#6a4a2a', hair: '#3a2a1a', face: t > EV.vn_write ? 'smile' : 'calm', armL: 'hold', armR: t > EV.vn_write ? 'swing' : 'hold', seed: 280, beard: 'long', look: 0.5 }); hat20(x, y, 1.15, 'chef');
    push(x + 120, y - 160, 1); rect(-90, -20, 180, 30, { wash: '#5a3a1a', washA: 1, w: 2 }); const b = poly([[-90, -20], [0, -30], [0, -150], [-80, -140]], { wash: '#efe2c0', washA: 1, w: 2, col: '#3a2a14' }); poly([[0, -30], [90, -20], [80, -140], [0, -150]], { wash: '#f2e6c8', washA: 1, w: 2, col: '#3a2a14' });
    txt('Le Viandier', -44, -120, 16, { font: 'Hand', col: '#7a1a10' }); for (let i = 0; i < 5; i++) pencil([[-76, -96 + i * 14], [-10, -96 + i * 14]], { w: 2, col: '#4a3a2a', a: 0.7, pass2: false }); if (t > EV.vn_year) { const k = clamp((t - EV.vn_year) / 0.6); txt('MCCCLXXV', 40, -110, 16, { font: 'Hand', col: '#2a1a0a', reveal: k }); }
    pencil([[60, -60], [100, -150]], { w: 3, col: '#efe6d0', pass2: false }); pop(); if (t > EV.vn_write) bubbleTag('ТАЙЛЕВАН', x, 900, t, EV.vn_write, '#2b2622', 36, -0.03); }
  function procession(t) { if (t < EV.vn_king - 0.3) return; const k = clamp((t - EV.vn_king + 0.3) / 2.4), x = lerp(1250, 620, k);   // слуга несёт блюдо в желе к королю
    human(1000, 1130, 0.75, t, { body: '#7a1a2a', hair: '#c8a050', face: 'smile', armL: 'down', armR: 'hold', seed: 281, flip: -1, beard: 'short' }); push(1000, 1130 + (-238 - 46) * 0.75 - 40, 0.75); rect(-34, -16, 68, 18, { wash: '#d6a842', washA: 1, w: 1.6 }); for (let q = 0; q < 4; q++) poly([[-34 + q * 22, -16], [-24 + q * 22, -40], [-12 + q * 22, -16]], { wash: '#d6a842', washA: 1, w: 1.4 }); pop(); bubbleTag('КОРОЛЬ', 1000, 760, t, EV.vn_king, '#d6a842', 30, 0.04);
    human(x, 1200, 0.85, t, { body: '#3a5a3a', hair: '#2a1a0a', face: 'smile', armL: 'up', armR: 'up', seed: 282, flip: -1 }); push(x, 1200 - 330 * 0.85, 0.5); ell(0, 0, 200, 40, { wash: '#d6a842', washA: 1, w: 3, col: '#5a3a08' }); jellySlab(0, -6, 220, 110, t, { key: 4310 }); pop(); }
  WORLD.viandier = (t, u, cat) => {
    lay(14, () => { hall(t); }); lay(3.4, () => { procession(t); cook(t); });
    lay(1.3, () => { const tb = rect(-300, 1400, 1700, 600, { wash: '#6a4a2a', washA: 1, w: 3, col: '#1a0a04', key: 4320 }); shadeG(tb.path, 540, 1400, 540, 1800, '#2a1408', 0.5); for (let i = 0; i < 5; i++) onionBulb(80 + i * 60, 1400, 0.5, i * 0.3); bone(900, 1410, 0.9, 0.1, 3); });
    lay(1, () => { cat(); });
  };
  DIR.viandier = {
    outfit: 'medcook', light: { side: -1, rim: '#ffb060' }, grade: ['#ff9050', 0.12],
    act: () => [[S0.viandier, 'proud'], [EV.vn_king, 'awe'], [EV.vn_year, 'talk'], [EV.vn_write, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 800, y: 1760, s: 1.15, flip: true, look: t < EV.vn_write ? [-0.6, -0.3] : [0.8, -0.2], hand: [110, -260], handF: [-90, -220], prop: 'ladleP' }),
    cam: () => [[S0.viandier, 560, 1050, 0.16], [EV.vn_king, 760, 1000, 0.18], [EV.vn_write, 420, 1100, 0.22, 'x'], [S1.viandier, 440, 1100, 0.26]]
  };
  // ---------------------------------------------------------------- переход: вертел проворачивает кадр вокруг горизонтальной оси
  TRANS_IN.viandier = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const a = k * Math.PI, sy = Math.cos(a); scr(() => { ctx.fillStyle = '#1a1008'; ctx.fillRect(0, 0, W, H); ctx.save(); ctx.translate(540, 960); ctx.scale(1, Math.max(0.02, Math.abs(sy))); ctx.drawImage(sy > 0 ? A : B, -540, -960); ctx.restore();
      pencil([[-40, 960], [W + 40, 960]], { w: 16, col: '#4a4a4a', pass2: false }); ell(30, 960, 26, 26, { wash: '#6a6a6a', washA: 1, w: 3 }); glow(540, 960, 400, 'rgba(255,140,50,1)', 0.3 * Math.sin(a)); });
  } };
})();
