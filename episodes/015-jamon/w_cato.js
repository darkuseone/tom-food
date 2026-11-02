/* 015 — `cato`: «Рецепт Катона: соль, дым, масло с уксусом — и „ни моль, ни черви не тронут“!» Кладовая римской виллы II в. до н. э.: своды, фрески,
   долии и амфоры в песке, большой чан-дольиум с солью, где слоями лежат окорока, коптильня с очагом, раб-повар раздувает огонь, полки с восковыми
   табличками, связки чеснока. Том — Катон в тоге с восковой табличкой-рецептом. По словам: «соль» — соль сыплется в чан снегопадом; «дым» — очаг вспыхивает,
   окорока над ним в дыму; «масло с уксусом» — две амфоры наклоняются, кисть мажет окорок, блеск; «ни моль, ни черви» — моль подлетает к окороку и отскакивает,
   червяк из щели отворачивается, табличка «НЕ ТРОНУТ ✓». Переход В сцену: восковая табличка — стилус стирает кадр, проступает новый. */
(() => {
  EV.ct_salt = wtw('s2', 'соль,');
  EV.ct_smoke = wtw('s2', 'дым,');
  EV.ct_oil = wtw('s2', 'масло');
  EV.ct_moth = wtw('s2', 'моль,');
  EV.ct_gag = LE('s2');
  KEYW.push('соль,', 'тронут»!');

  function cellar(t) {                                                  // своды, фреска, полки с табличками и чесноком, окно-бойница
    vgrad(-600, 1500, ['#5a3a24', '#8a5a34', '#a87a4a']); for (let i = 0; i < 3; i++) { const x = -100 + i * 560; pencil(spline([[x - 280, 400], [x - 260, 0], [x, -160], [x + 260, 0], [x + 280, 400]], false, 10), { w: 26, col: '#6a4424' }); }
    for (let y = 420; y < 1300; y += 60) for (let x = -400 + (y / 60 % 2) * 60; x < 1600; x += 120) rect(x, y, 116, 56, { wash: '#b08a5a', washA: 0.5, w: 1, col: '#6a4a2a' });
    push(540, 200, 1); const f = rect(-260, -120, 520, 220, { wash: '#c8443a', washA: 1, w: 4, col: '#3a1a08' }); vgrad(-120, 100, ['#d8603a', '#b8302a']); rect(-240, -100, 480, 180, { wash: '#d8b878', washA: 0.85, w: 1.4 }); for (let i = 0; i < 3; i++) { push(-160 + i * 160, 20, 0.5); ibPig(0, 0, 1, 0, { walk: i, key: 15300 + i }); pop(); } spruce(200, 60, 120, '#4a6a3a', 1); pop();
    push(1180, 420, 1); const w = rect(-50, -120, 100, 200, { wash: '#f0e0b0', washA: 1, w: 6, col: '#3a2010' }); rays(0, -20, 2.4, 0.3, 900, 'rgba(255,230,170,1)', 0.18, 3, t); pop();
    for (const y of [560, 760]) { rect(900, y, 400, 16, { wash: '#5a3a1a', washA: 1, w: 2 }); for (let i = 0; i < 5; i++) rect(920 + i * 70, y - 70, 56, 70, { wash: '#c8a050', washA: 1, w: 1.6, col: '#5a3a08' }); }
    for (const x of [-260, -140]) { push(x, 400, 1); pencil([[0, 0], [0, 260]], { w: 3, col: '#c8a868', pass2: false }); for (let k = 0; k < 6; k++) ell((k % 2 ? 14 : -14), 60 + k * 34, 22, 24, { wash: '#f4ecd8', washA: 1, w: 1.4, col: '#8a7a5a' }); pop(); }
  }
  function amphorae(t) {                                                // ряды амфор в песке, долии
    for (let i = 0; i < 6; i++) { const x = -260 + i * 120, tilt = (i % 2 ? 0.1 : -0.08); push(x, 1240, 1, tilt); const a = shape(spline([[-40, 0], [-56, -120], [-40, -230], [-16, -260], [16, -260], [40, -230], [56, -120], [40, 0], [0, 40]], true, 6), { wash: '#b8643a', washA: 1, w: 2, col: '#3a1408' }); shadeG(a.path, 40, -120, -40, -120, '#6a2a14', 0.4); for (const sd of [-1, 1]) pencil(spline([[sd * 16, -250], [sd * 50, -240], [sd * 40, -190]], false, 4), { w: 6, col: '#a8542a', pass2: false }); pop(); }
    push(1050, 1260, 1); const d = shape(spline([[-130, 0], [-160, -150], [-120, -280], [120, -280], [160, -150], [130, 0]], true, 6), { wash: '#c8784a', washA: 1, w: 2.4, col: '#3a1a08' }); shadeG(d.path, 120, -140, -120, -140, '#6a3014', 0.45); ell(0, -280, 120, 22, { wash: '#2a1408', washA: 1, w: 2 }); pop();
  }
  function hearth(t) {                                                  // очаг-коптильня: окорока на крюках, раб-повар с мехами
    push(-40, 1300, 1); rect(-150, -60, 300, 60, { wash: '#6a6258', washA: 1, w: 2, col: '#2a2418' }); const on = t > EV.ct_smoke; for (let i = 0; i < 6; i++) { const f = Math.sin(t * 10 + i) * 10 * (on ? 1.6 : 1); blob([[-80 + i * 30, -60], [-84 + i * 30, -100 - f], [-70 + i * 30, (on ? -170 : -130) - f * 2], [-60 + i * 30, -100], [-54 + i * 30, -60]], { wash: i % 2 ? '#ff8a2a' : '#ffd04a', washA: 0.9, line: false }); } glow(0, -100, on ? 320 : 200, 'rgba(255,140,50,1)', on ? 0.6 : 0.4);
      pencil([[-160, -420], [160, -420]], { w: 8, col: '#3a2a1a' }); for (let i = 0; i < 3; i++) { pencil([[-100 + i * 100, -420], [-100 + i * 100, -380]], { w: 3, col: '#5a5a5a', pass2: false }); jamonLeg(-100 + i * 100, -240, 0.42, -0.55, { key: 15310 + i }); }
      if (on) for (let i = 0; i < 6; i++) { const q = ((t - EV.ct_smoke) * 0.6 + i / 6) % 1; ell(Math.sin(q * 6 + i) * 60, -160 - q * 420, 50 + q * 60, 30 + q * 40, { wash: '#c8c0b8', washA: 0.55 * (1 - q), line: false }); } pop();
    human(-220 + 360, 1330, 0.95, t, { body: '#c8b088', legs: '#6a5a3a', hair: '#1a1410', face: t > EV.ct_smoke ? 'grin' : 'calm', armL: 'hold', armR: 'hold', look: -0.4, seed: 15320, flip: -1 });
  }
  function vat(t) {                                                     // чан с солью и окороками слоями, амфоры масла и уксуса, кисть, моль и червяк
    push(470, 1500, 1); const v = shape(spline([[-170, 0], [-190, -150], [-170, -230], [170, -230], [190, -150], [170, 0]], true, 6), { wash: '#a8643a', washA: 1, w: 2.6, col: '#2a1008', key: 15330 }); shadeG(v.path, 160, -120, -160, -120, '#5a2a10', 0.45); for (const y of [-60, -170]) pencil([[-182, y], [182, y]], { w: 4, col: '#6a3a1a', a: 0.6, pass2: false });
      ell(0, -230, 170, 34, { wash: '#f8f8f4', washA: 1, w: 2, col: '#8a8a8a' }); for (let i = 0; i < 3; i++) jamonLeg(-90 + i * 90, -270, 0.3, -0.9 + i * 0.3, { key: 15331 + i }); for (let i = 0; i < 20; i++) { const r = rng(15334 + i); ell(-150 + r() * 300, -236 + r() * 14, 4, 3, { wash: '#ffffff', washA: 1, line: false }); }
      if (t > EV.ct_salt - 0.1 && t < EV.ct_smoke + 0.4) { const r = rng(15340); for (let i = 0; i < 40; i++) { const q = ((t - EV.ct_salt) * 1.2 + r()) % 1; ell(-140 + r() * 280, -700 + q * 470, 4, 4, { wash: '#ffffff', washA: 0.9, line: false }); } } pop();
    const oil = t > EV.ct_oil - 0.1, tilt = oil ? sm(clamp((t - EV.ct_oil + 0.1) / 0.4)) : 0; for (const [x, c, lbl, sd] of [[180, '#a8a02a', 'OLEVM', -1], [690, '#7a2a3a', 'ACETVM', 1]]) { push(x, 1500, 1, sd * tilt * 0.6); const a = shape(spline([[-34, 0], [-46, -90], [-30, -170], [-12, -190], [12, -190], [30, -170], [46, -90], [34, 0]], true, 6), { wash: '#c8784a', washA: 1, w: 2, col: '#3a1408' }); rect(-30, -110, 60, 30, { wash: '#f4ecd8', washA: 1, w: 1 }); txt(lbl, 0, -88, 14, { font: 'Osw', col: c }); pop();
      if (tilt > 0.6 && t < EV.ct_moth) { const sx = x + sd * -70; pencil(spline([[sx, 1320], [sx - sd * 60, 1300], [470 - sd * 60, 1290]], false, 6), { w: 8, col: c, a: 0.8, pass2: false }); } }
    if (t > EV.ct_oil + 0.3) glow(470, 1270, 160, 'rgba(255,240,170,1)', 0.35);
    if (t > EV.ct_moth - 0.3) { const q = t - EV.ct_moth + 0.3, bx = q < 0.6 ? lerp(760, 520, q / 0.6) : 520 + (q - 0.6) * 500, by = 1180 + Math.sin(t * 20) * 14 - (q > 0.6 ? (q - 0.6) * 300 : 0); push(bx, by, 1); for (const sd of [-1, 1]) blob([[0, 0], [sd * 30, -20 + Math.sin(t * 40) * 10], [sd * 26, 10]], { wash: '#d8ccb0', washA: 1, w: 1.4, col: '#6a5a3a' }); ell(0, 0, 8, 14, { wash: '#8a7a5a', washA: 1, w: 1.2 }); pop(); if (q > 0.55 && q < 1.1) txt('✕', 540, 1150, 50, { font: 'Osw', col: '#c8221a', a: 1 - (q - 0.55) / 0.55 }); }
    if (t > EV.ct_moth + 0.2) { const q = clamp((t - EV.ct_moth - 0.2) / 0.3); push(300, 1460, 1); pencil(spline([[0, 0], [6, -30 * q], [-10 * q, -50 * q], [-24 * q, -48 * q]], false, 5), { w: 9, col: '#f4a8a0' }); pop(); }
    if (t > EV.ct_gag - 0.6) { push(620, 1110, popK(t, EV.ct_gag - 0.6, 0.4)); rect(-140, -36, 280, 72, { wash: '#f4ecd8', washA: 1, w: 3, col: '#5a3a08' }); txt('НЕ ТРОНУТ ✓', 0, 14, 36, { font: 'Osw', col: '#2a6a2a' }); pop(); }
  }
  function front(t) { push(1180, 1950, 1.5); const a = shape(spline([[-60, 0], [-80, -160], [-40, -260], [40, -260], [80, -160], [60, 0]], true, 6), { wash: '#b8643a', washA: 1, w: 2.4, col: '#3a1408' }); shadeG(a.path, 60, -100, -60, -100, '#6a2a14', 0.4); pop();
    push(-60, 1960, 1.6); for (let i = 0; i < 4; i++) ell(-40 + i * 34, -20 - (i % 2) * 14, 24, 26, { wash: '#f4ecd8', washA: 1, w: 1.4, col: '#8a7a5a' }); pop(); motes(26, [100, 300, 1000, 1700], '#ffd8a0', t, 15350, { sp: 8, sz: 4, a: 0.5, wob: 2 }); }
  WORLD.cato = (t, u, cat) => {
    lay(14, () => { cellar(t); haze('#d8a060', 0.08); });
    lay(3.4, () => { amphorae(t); });
    lay(2.2, () => { hearth(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { vat(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.cato = {
    outfit: 'toga', light: { side: -1, rim: '#ffc080' }, grade: ['#ffb070', 0.08],
    act: () => [[S0.cato, 'smug'], [EV.ct_salt, 'talk'], [EV.ct_smoke, 'awe'], [EV.ct_oil, 'proud'], [EV.ct_moth, 'suspicious'], [EV.ct_gag, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 840, y: 1660, s: 0.98, flip: -1, look: t > EV.ct_moth ? [-0.4, -0.4] : t > EV.ct_oil ? [-0.6, 0.4] : t > EV.ct_smoke ? [-0.9, -0.2] : [-0.6, 0.5], hand: [200, -300], handF: [-90, -240], prop: 'scrollP', propAng: 0.1, tailUp: t > EV.ct_gag }),
    cam: () => [[S0.cato, 560, 900, 0.06], [EV.ct_salt - 0.2, 480, 1300, 0.22, 'x'], [EV.ct_smoke, 260, 1080, 0.18], [EV.ct_oil, 500, 1320, 0.2], [EV.ct_moth, 560, 1240, 0.24], [S1.cato, 600, 1220, 0.28]]
  };
  // ---------------------------------------------------------------- переход: восковая табличка — стилус стирает кадр полосами
  TRANS_IN.cato = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const e = sm(k), N = 8, P = new Path2D(); for (let i = 0; i < N; i++) { const p = clamp(e * 1.6 - i * 0.08); if (p >= 1) continue; const y = i * H / N; if (i % 2) P.rect(0, y, W * (1 - p), H / N + 1); else P.rect(W * p, y, W * (1 - p), H / N + 1); }
    inPath(P, () => drawBuf(A, 1, 540, 960)); scr(() => { for (let i = 0; i < N; i++) { const p = clamp(e * 1.6 - i * 0.08); if (p <= 0 || p >= 1) continue; const x = i % 2 ? W * (1 - p) : W * p, y = i * H / N + H / N / 2; ctx.save(); ctx.fillStyle = '#c8a050'; ctx.translate(x, y); ctx.rotate(0.6); ctx.fillRect(-8, -120, 16, 160); ctx.restore(); } });
  } };
})();
