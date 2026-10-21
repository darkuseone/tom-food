/* 002 — `paris`: «Версия Франции: Париж, перед революцией — картошку жарят прямо на улице.» Новый мост (Пон-Нёф) 1780-х: каменные арки над Сеной,
   полукруглые лавочки на мосту, башни Нотр-Дама в дымке, баржи, толпа (торговка в чепце, водонос, мальчишка, господин в треуголке).
   Том — уличный жарщик (синяя куртка, красный колпак, фартук): на «жарят» подбрасывает ломтики со сковороды, ловит кульком; дым от жаровни.
   Переход В сцену: нож режет кадр суда на вертикальные «брусочки», они разъезжаются, как нарезанная картошка. */
(() => {
  EV.pa_paris = wtw('s3', 'Париж');
  EV.pa_rev = wtw('s3', 'революцией');
  EV.pa_fry = wtw('s3', 'жарят');
  EV.pa_street = wtw('s3', 'улице');
  KEYW.push('улице.');
  function sky(t) { vgrad(-600, 1200, ['#c8b8d0', '#f0d0a8', '#f4e2c0']); glow(300, 420, 360, 'rgba(255,220,170,1)', 0.45); for (let i = 0; i < 4; i++) { const x = ((t * 8 + i * 420) % 1900) - 400; blob([[x, 300 + i * 60], [x + 80, 270 + i * 60], [x + 200, 280 + i * 60], [x + 260, 310 + i * 60], [x + 120, 320 + i * 60]], { wash: '#fff4e4', washA: 0.6, line: false }); } }
  function notreDame(t) {                                               // силуэт собора: две квадратные башни, роза, шпиль вдали
    push(760, 980, 1); const C = '#a89c90';
    for (const x of [-170, 70]) { const tw = rect(x, -420, 100, 420, { wash: C, washA: 1, w: 2, col: '#4a4038', key: 8600 + x }); shadeG(tw.path, x + 100, 0, x, 0, '#6a5e54', 0.4); for (let k = 0; k < 3; k++) { rect(x + 20, -380 + k * 110, 22, 70, { wash: '#4a4038', washA: 0.7, line: false }); rect(x + 58, -380 + k * 110, 22, 70, { wash: '#4a4038', washA: 0.7, line: false }); } pencil([[x - 6, -420], [x + 106, -420]], { w: 4, col: '#4a4038', pass2: false }); }
    rect(-70, -300, 140, 300, { wash: C, washA: 1, w: 2, col: '#4a4038' }); ell(0, -200, 48, 48, { wash: '#6a7aa0', washA: 0.8, w: 2, col: '#4a4038' }); for (let k = 0; k < 8; k++) { const a = k / 8 * 6.283; pencil([[0, -200], [Math.cos(a) * 46, -200 + Math.sin(a) * 46]], { w: 1.4, col: '#4a4038', pass2: false }); }
    rect(70, -170, 340, 170, { wash: '#9a8e82', washA: 1, w: 2, col: '#4a4038' }); pencil([[260, -170], [260, -380]], { w: 5, col: '#5a5048' }); poly([[244, -290], [260, -420], [276, -290]], { wash: '#7a6e66', washA: 1, w: 1.6, col: '#4a4038' });
    pop(); haze('#f0dcc0', 0.3);
  }
  function quay(t) {                                                    // набережная: дома с мансардами, деревья
    for (let i = 0; i < 9; i++) { const x = -360 + i * 190, h = 260 + (i % 3) * 40; const p = rect(x, 1050 - h, 180, h, { wash: ['#e4d4b8', '#d8c4a4', '#ecdcc0'][i % 3], washA: 1, w: 2, col: '#4a3a2a', key: 8610 + i }); shadeG(p.path, x + 180, 0, x, 0, '#9a8466', 0.35);
      poly([[x - 6, 1050 - h], [x + 20, 1050 - h - 70], [x + 160, 1050 - h - 70], [x + 186, 1050 - h]], { wash: '#5a6a7a', washA: 1, w: 2, col: '#2a3038' }); rect(x + 70, 1050 - h - 60, 40, 44, { wash: '#e8e0d0', washA: 1, w: 1.4, col: '#2a3038' });
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) rect(x + 20 + c * 54, 1050 - h + 30 + r * 76, 30, 50, { wash: '#4a5a6a', washA: 0.85, w: 1.2, col: '#2a2a2a' }); }
    haze('#f0dcc0', 0.12);
  }
  function river(t) {                                                   // Сена и арки моста, баржа
    rect(-600, 1050, 2300, 260, { wash: '#6a8a9a', washA: 1, line: false }); for (let i = 0; i < 20; i++) { const r = rng(8620 + i), x = -400 + r() * 1900, y = 1070 + r() * 220; pencil([[x + Math.sin(t + i) * 10, y], [x + 90 + Math.sin(t + i) * 10, y]], { w: 2.4, col: '#e8f0f0', a: 0.6, pass2: false }); }
    const bx = ((t * 20) % 1800) - 400; push(bx, 1180, 0.8); blob([[-160, 0], [160, 0], [130, 40], [-130, 40]], { wash: '#6a4a2a', washA: 1, w: 2, col: '#2a1a0a' }); for (let k = 0; k < 4; k++) rect(-110 + k * 56, -40, 44, 40, { wash: '#c8a46a', washA: 1, w: 1.4, col: '#4a3010' }); human(120, 0, 0.6, t, { body: '#3a4a6a', hat: 'cap', hatCol: '#a8241e', armR: 'swing', seed: 80, prop: 'oar' }); pop();
    rect(-600, 1200, 2300, 140, { wash: '#c8b494', washA: 1, w: 2.4, col: '#4a3a2a', key: 8630 }); for (let i = 0; i < 6; i++) { const x = -420 + i * 380; const a = shape(spline([[x, 1340], [x + 30, 1260], [x + 150, 1228], [x + 270, 1260], [x + 300, 1340]], false, 8), { wash: '#3a4a52', washA: 1, w: 2.2, col: '#2a2a2a' }); }
    rect(-600, 1180, 2300, 26, { wash: '#b8a284', washA: 1, w: 2, col: '#4a3a2a' });
  }
  function booth(x, t, k) {                                             // полукруглая лавочка на мосту
    push(x, 1200, 0.9); const b = rect(-90, -170, 180, 170, { wash: '#c8b494', washA: 1, w: 2.2, col: '#4a3a2a', key: 8640 + k }); poly([[-110, -170], [0, -240], [110, -170]], { wash: '#7a5a3a', washA: 1, w: 2, col: '#2a1a0a' });
    rect(-60, -130, 120, 70, { wash: '#3a2a1a', washA: 0.9, w: 1.6 }); const awn = ['#d9482b', '#2a4a8a', '#e8b53a'][k % 3]; for (let i = 0; i < 6; i++) poly([[-80 + i * 27, -130], [-53 + i * 27, -130], [-58 + i * 27, -110], [-75 + i * 27, -110]], { wash: i % 2 ? '#f4ead2' : awn, washA: 1, w: 1, col: '#2a1a0a' }); pop();
  }
  function crowd(t) {
    const P = [[-80, '#7a2a2a', 'scarf', '#f4ead2', 'calm'], [140, '#3a4a6a', 'cap', '#2a2a2a', 'smile'], [960, '#5a3a5a', 'hood', '#f4ead2', 'grin'], [1150, '#4a5a3a', null, null, 'calm']];
    P.forEach(([x, c, h, hc, f], i) => human(x, 1470, 1.0, t, { body: c, long: i % 2 ? 0 : 1, hat: h, hatCol: hc, hair: '#4a3a2a', face: t > EV.pa_fry + 0.4 ? 'grin' : f, armR: t > EV.pa_fry && i % 2 ? 'point' : 'hold', armL: 'down', seed: 90 + i, flip: x < 540 ? 1 : -1, look: x < 540 ? 0.6 : -0.6, prop: i === 3 ? 'stick' : undefined }));
    hat20(140, 1470, 1.0, 'tophat', '#1a1a1a'); push(960, 1470 - 284, 1.0); pop();
    push(1080, 1470, 1); for (const sd of [-1, 1]) { pencil([[sd * 60, -200], [sd * 70, -60]], { w: 3, col: '#5a3a1a', pass2: false }); ell(sd * 70, -50, 26, 34, { wash: '#8a6a3a', washA: 1, w: 2, col: '#2a1408' }); } pop();
  }
  function stall(t) {                                                   // жаровня уличного жарщика: угли, сковорода, ломтики летят
    push(380, 1500, 1); rect(-150, -110, 300, 120, { wash: '#4a3a30', washA: 1, w: 2.4, col: '#1a1008', key: 8650 }); for (let i = 0; i < 10; i++) ell(-120 + i * 26, -110, 14, 8, { wash: i % 2 ? '#ff7a20' : '#ffb040', washA: 1, w: 1, col: '#5a1a08' }); glow(0, -110, 200, 'rgba(255,140,60,1)', 0.5);
    for (const lx of [-130, 130]) pencil([[lx, 10], [lx + Math.sign(lx) * 20, 120]], { w: 10, col: '#2a2420' }); pop();
    pan(380, 1370, 0.75, t, { R: 150, items: () => { for (let k = 0; k < 7; k++) { const r = rng(8660 + k); ell(-90 + k * 30, -4 + (k % 2) * 8, 18, 9, { wash: FR.fry, washA: 1, w: 1.4, col: '#5a2e08' }); } } });
    const fk = clamp((t - EV.pa_fry) / 0.9); if (fk > 0 && fk < 1) for (let k = 0; k < 7; k++) { const r = rng(8670 + k), x = 380 + (r() - 0.5) * 140 + fk * (r() - 0.3) * 260, y = 1360 - Math.sin(fk * Math.PI) * (260 + r() * 160); push(x, y, 1, fk * 8 + k); ell(0, 0, 20, 10, { wash: FR.fry, washA: 1, w: 1.4, col: '#5a2e08' }); pop(); }
    for (let i = 0; i < 5; i++) { const ph = (t * 0.4 + i / 5) % 1; ell(380 + Math.sin(t + i) * 30 + ph * 80, 1300 - ph * 500, 30 + ph * 70, 24 + ph * 50, { wash: '#d8d0c8', washA: 0.35 * (1 - ph), line: false }); }
  }
  WORLD.paris = (t, u, cat) => {
    lay(36, () => { sky(t); notreDame(t); });
    lay(16, () => { quay(t); });
    lay(6, () => { river(t); for (let k = 0; k < 4; k++) booth(-120 + k * 440, t, k); haze('#f4e0c0', 0.06); });
    lay(1.4, () => { crowd(t); });
    lay(1, () => { cat(); });
    lay(0.88, () => { stall(t); });
  };
  DIR.paris = {
    outfit: 'parisian', light: { side: -1, rim: '#ffd090' }, grade: ['#ffb070', 0.1],
    act: () => [[S0.paris, 'sideeye'], [EV.pa_paris, 'proud'], [EV.pa_rev, 'suspicious'], [EV.pa_fry, 'grin'], [EV.pa_street, 'laugh']],
    pose: (t, u, b) => { const fk = clamp((t - EV.pa_fry) / 0.9);
      return Object.assign(b, { x: 640, y: 1590, s: 1.05, flip: -1, look: t < EV.pa_fry ? [-0.3, 0] : [-0.5, -0.6 + fk * 0.8], hand: t > EV.pa_fry - 0.3 ? [90, -260 - Math.sin(fk * Math.PI) * 80] : [100, -190], prop: t > EV.pa_fry + 0.6 ? 'coneP' : undefined, handF: [-130, -230 + Math.sin(fk * Math.PI) * 30] }); },
    cam: () => [[S0.paris, 700, 760, 0.06], [EV.pa_paris + 0.3, 640, 900, 0.1], [EV.pa_rev, 560, 1060, 0.2, 'x'], [EV.pa_fry, 520, 1180, 0.3], [EV.pa_street, 540, 1100, 0.16], [S1.paris, 540, 1080, 0.12]]
  };
  // ---------------------------------------------------------------- переход: нож режет кадр на брусочки, они разъезжаются
  TRANS_IN.paris = { a: 0.3, b: 0.35, runA: 1, fx(k, t, A, B) {
    drawBuf(B, 1.06 - 0.06 * k, 540, 960); const n = 8, cut = clamp(k / 0.5), slide = clamp((k - 0.4) / 0.6);
    for (let i = 0; i < n; i++) { const x0 = i * W / n, done = cut * n > i + 1 || slide > 0, dy = slide * (900 + (i % 3) * 400) * (i % 2 ? 1 : -1) * sm(slide), rot = (i % 2 ? 1 : -1) * slide * 0.15;
      if (slide < 1) { ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.translate(x0 + W / n / 2, 960 + dy); ctx.rotate(rot); ctx.translate(-x0 - W / n / 2, -960); ctx.beginPath(); ctx.rect(x0 + (done ? 3 : 0), -100, W / n - (done ? 6 : 0), 2120); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore(); } }
    scr(() => { if (cut < 1) { const i = Math.floor(cut * n), x = (i + 1) * W / n, y = -200 + (cut * n % 1) * 2400; push(x, y, 1, 0.08); const bl = poly([[-24, -360], [24, -360], [10, 40], [-10, 40]], { wash: '#d8dde2', washA: 1, w: 3, col: '#2a2e34' }); metalG(bl.path, -10, -200, 260, '#ffffff', '#c8ccd0', '#5a6068'); rect(-20, 40, 40, 200, { wash: '#4a2a14', washA: 1, w: 2.4, col: '#1a0a04' }); pop(); glow(x, y, 120, 'rgba(255,255,255,1)', 0.4); } });
  } };
})();
