/* 008 — `ears`: «Правда: "пель" — ухо, "нянь" — хлеб. Так говорят коми и удмурты.» Удмуртская деревня у Камы: бревенчатые избы с резными наличниками,
   берёзы, амбар на столбах, дымок. На первом слове — штамп ПРАВДА. Перед избой — классная доска на мольберте: карточка «ПЕЛЬ» + нарисованное ухо, карточка
   «НЯНЬ» + каравай; на «нянь» обе картинки съезжаются и превращаются в пельмень. На «коми и удмурты» из избы выходят жители в вышитых рубахах и машут.
   Том в удмуртской рубахе. Переход В сцену: скалка прокатывается по кадру — прошлый кадр раскатывается в тонкий пласт теста. */
(() => {
  EV.er_pr = LS('s1') + 0.05;
  EV.er_pel = wtw('s1', '«пель»');
  EV.er_nyan = wtw('s1', '«нянь»');
  EV.er_komi = wtw('s1', 'коми');
  SHAKES.push([EV.er_pr + 0.15, 0.2, 10]);
  KEYW.push('хлеб.');

  function village(t) { vgrad(-600, 1100, ['#a8d0f0', '#d8ecf8', '#f4f6ee']); hills(820, 80, '#7a9a6a', 1.1); for (let i = 0; i < 10; i++) { const x = -260 + i * 150; pencil([[x, 900], [x + 6, 560]], { w: 10, col: '#f2f2ea' }); for (let q = 0; q < 4; q++) pencil([[x - 4, 620 + q * 70], [x + 8, 620 + q * 70]], { w: 4, col: '#2a2a2a', pass2: false }); blob([[x - 60, 600], [x, 520], [x + 60, 600], [x, 640]], { wash: '#8ab84a', washA: 0.9, line: false }); }
    for (let i = 0; i < 2; i++) { const x = 40 + i * 620, w = 380; const hs = rect(x, 700, w, 300, { wash: '#a87a4a', washA: 1, w: 3, col: '#3a2410', key: 9960 + i }); for (let q = 0; q < 8; q++) pencil([[x, 714 + q * 36], [x + w, 714 + q * 36]], { w: 3, col: '#6a4a24', pass2: false }); poly([[x - 30, 710], [x + w / 2, 540], [x + w + 30, 710]], { wash: '#6a5a4a', washA: 1, w: 3, col: '#2a1a0a' });
      const wx = x + w / 2 - 50; rect(wx, 780, 100, 110, { wash: '#8ab0c8', washA: 1, w: 3, col: '#2a1a0a' }); for (const [dx, dy, ww, hh] of [[-16, -20, 132, 22], [-16, 108, 132, 22]]) rect(wx + dx, 780 + dy, ww, hh, { wash: '#f2ead6', washA: 1, w: 2, col: '#6a4a24' }); for (let q = 0; q < 4; q++) poly([[wx + 10 + q * 26, 760], [wx + 22 + q * 26, 744], [wx + 34 + q * 26, 760]], { wash: '#f2ead6', washA: 1, w: 1.4, col: '#6a4a24' }); }
    for (let q = 0; q < 3; q++) { const k = (t * 0.4 + q / 3) % 1; ell(240 + Math.sin(k * 5) * 16, 560 - k * 200, 18 + k * 30, 14 + k * 20, { wash: '#d8d4cc', washA: 0.4 * (1 - k), line: false }); } }
  function folk(t) { const out = clamp((t - EV.er_komi + 0.1) / 0.6); for (let i = 0; i < 3; i++) { const x = lerp(230 + i * 30, 120 + i * 150, out); human(x, 1240, 0.74, t, { body: '#f6f2e8', hair: ['#c8a050', '#5a3a1a', '#2a1a0a'][i], face: out > 0.5 ? 'grin' : 'smile', armL: 'hold', armR: out > 0.5 ? 'wave' : 'hold', seed: 1000 + i, long: i !== 1 ? 1 : 0, hat: i !== 1 ? 'scarf' : null, hatCol: '#c8282a', trim: '#c8282a', beard: i === 1 }); } }
  function board(t) { push(640, 1300, 1); for (const sd of [-1, 1]) pencil([[sd * 160, 0], [sd * 120, -460]], { w: 10, col: '#6a4a24' }); rect(-220, -460, 440, 300, { wash: '#2a4a3a', washA: 1, w: 8, col: '#6a4a24', key: 9970 });
    const m = clamp((t - EV.er_nyan - 0.4) / 0.5); if (m < 1) { const a1 = t > EV.er_pel - 0.1 ? 1 : 0, a2 = t > EV.er_nyan - 0.1 ? 1 : 0;
        if (a1) { push(lerp(-110, 0, m), -330, 1); txt('ПЕЛЬ', 0, -70, 44, { font: 'Hand', col: '#fff4d0', a: 1 - m }); pencil(spline([[-20, -40], [20, -36], [34, 0], [20, 40], [0, 50], [-8, 30], [4, 10], [14, -6], [0, -20]], false, 8), { w: 5, col: '#f2c8a8', pass2: false }); pop(); }
        if (a2) { push(lerp(110, 0, m), -330, 1); txt('НЯНЬ', 0, -70, 44, { font: 'Hand', col: '#fff4d0', a: 1 - m }); blob([[-46, 30], [-40, -20], [0, -40], [40, -20], [46, 30]], { wash: '#d8a050', washA: 1, w: 2.4, col: '#6a3a10' }); for (let q = 0; q < 3; q++) pencil([[-24 + q * 22, -24], [-14 + q * 22, -4]], { w: 2, col: '#6a3a10', pass2: false }); pop(); }
        if (a1 && a2) txt('+', 0, -320, 60, { font: 'Osw', col: '#fff4d0', a: 1 - m }); }
      else { pelmen(0, -320, 1.6 * popK(t, EV.er_nyan + 0.9, 0.4), 0, { cook: true, face: true }); txt('= ХЛЕБНОЕ УХО', 0, -200, 40, { font: 'Hand', col: '#fff4d0' }); } pop();
    quizStamp('ПРАВДА', 300, 560, t, EV.er_pr, '#2a9a4a', -0.12); }
  WORLD.ears = (t, u, cat) => { lay(14, () => village(t)); lay(2.4, () => folk(t)); lay(1.3, () => board(t)); lay(1, () => { rect(-300, 1440, 1700, 600, { wash: '#8aa85a', washA: 1, w: 2, col: '#3a5a1a', key: 9980 }); cat(); }); };
  DIR.ears = {
    outfit: 'udmA', light: { side: 1, rim: '#fff4d8' }, grade: ['#8ac0e0', 0.05],
    act: () => [[S0.ears, 'proud'], [EV.er_pel, 'talk'], [EV.er_nyan, 'grin'], [EV.er_komi, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 900, y: 1800, s: 1.1, flip: true, look: [-0.7, -0.5], hand: [150, -340], handF: [-90, -230], point: 1, prop: null }),
    cam: () => [[S0.ears, 520, 900, 0.1], [EV.er_pel, 640, 1060, 0.18, 'x'], [EV.er_komi, 480, 1100, 0.14, 'x'], [S1.ears, 480, 1100, 0.16]]
  };
  // ---------------------------------------------------------------- переход: скалка прокатывается по кадру сверху вниз — прошлый кадр раскатывается в пласт теста
  TRANS_IN.ears = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = sm(k), y = lerp(-200, H + 200, q); drawBuf(B, 1, 540, 960); scr(() => { if (y < H) { ctx.save(); ctx.beginPath(); ctx.rect(0, y, W, H - y); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore(); }
      if (y > 0) { ctx.fillStyle = PL.dough; ctx.fillRect(0, Math.max(0, y - 120), W, Math.min(120, y)); for (let i = 0; i < 12; i++) ell(i * 100 + 40, y - 60, 30, 6, { wash: PL.doughD, washA: 0.4, line: false }); }
      push(540, y, 1); rect(-620, -50, 1240, 100, { wash: '#d8a868', washA: 1, w: 4, col: '#6a4a1a' }); for (let i = 0; i < 8; i++) pencil([[-600 + i * 160, -46], [-580 + i * 160, 46]], { w: 2, col: '#b8884a', a: 0.6, pass2: false }); pop(); });
  } };
})();
