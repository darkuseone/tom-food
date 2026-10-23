/* 004 — `domostroi`: «У нас студень впервые записан в "Домострое" — шестнадцатый век.» Боярский терем XVI века: расписные своды с травами, изразцовая печь,
   слюдяное окно, лавки с коврами. Писарь за аналоем выводит строки в книге «Домострой», на столе — миска студня в глиняной посуде. Том-боярин в кафтане + фартук.
   Переход В сцену: свиток разматывается сверху вниз и открывает терем. */
(() => {
  EV.dm_book = wtw('s3', '«Домострое»');
  EV.dm_age = wtw('s3', 'шестнадцатый');
  KEYW.push('«Домострое»');

  function terem(t) {                                                  // своды с росписью, изразцовая печь, слюдяное окно
    vgrad(-600, 1600, ['#5a2a1a', '#7a3a24', '#8a4a2a']); for (let i = 0; i < 6; i++) { const x = -100 + i * 260; pencil(spline([[x - 130, 260], [x, 120], [x + 130, 260]], false, 8), { w: 14, col: '#3a1a0a', pass2: false });
      for (let q = 0; q < 5; q++) { push(x - 80 + q * 40, 210 - Math.sin(q / 4 * Math.PI) * 60, 0.5, q); blob([[0, 0], [-10, -20], [0, -40], [10, -20]], { wash: q % 2 ? '#d6a842' : '#3a7a3a', washA: 1, w: 1.2, col: '#2a1a0a' }); pop(); } }
    rect(-300, 300, 1700, 30, { wash: '#d6a842', washA: 1, w: 2, col: '#5a3a08' }); for (let i = 0; i < 40; i++) poly([[-290 + i * 44, 330], [-268 + i * 44, 360], [-246 + i * 44, 330]], { wash: '#2a6a3a', washA: 1, w: 1, col: '#1a2a10' });
    const w = rect(720, 420, 240, 300, { wash: '#c8b48a', washA: 1, w: 6, col: '#3a1a0a', key: 4400 }); ctx.save(); ctx.clip(w.path); for (let r = 0; r < 8; r++) for (let c = 0; c < 5; c++) { poly([[726 + c * 48, 430 + r * 38], [750 + c * 48, 410 + r * 38], [774 + c * 48, 430 + r * 38], [750 + c * 48, 450 + r * 38]], { wash: '#e8dcb0', washA: 0.8, w: 1.2, col: '#6a4a2a' }); } glow(840, 560, 120, 'rgba(255,250,220,1)', 0.4); ctx.restore();
    const p = rect(60, 420, 280, 900, { wash: '#efe6d0', washA: 1, w: 3, col: '#3a2a14', key: 4401 }); for (let r = 0; r < 10; r++) for (let c = 0; c < 4; c++) { const x = 70 + c * 66, y = 430 + r * 88; rect(x, y, 62, 84, { wash: '#f2ead6', washA: 1, w: 1.4, col: '#6a5a3a' }); ell(x + 31, y + 42, 18, 24, { line: true, w: 3, col: (r + c) % 2 ? '#2a6aa8' : '#3a8a4a' }); ell(x + 31, y + 42, 6, 8, { wash: '#d9482b', washA: 1, line: false }); }
    const w2 = rect(-300, 1100, 1700, 300, { wash: '#6a2a1a', washA: 1, w: 2, col: '#2a0a04' }); for (let i = 0; i < 20; i++) poly([[-300 + i * 90, 1110], [-255 + i * 90, 1160], [-210 + i * 90, 1110]], { wash: i % 2 ? '#d6a842' : '#2a5a8a', washA: 0.9, line: false });
  }
  function scribe(t) { const x = 560, y = 1300; push(x + 60, y - 140, 1); poly([[-90, 0], [90, 0], [70, -120], [-70, -120]], { wash: '#7a4a24', washA: 1, w: 2.4, col: '#2a1408' }); pop();   // писарь у аналоя
    human(x, y, 1.1, t, { body: '#2a4a7a', hair: '#6a4a2a', face: 'calm', armL: 'hold', armR: 'swing', seed: 290, beard: 'long', look: 0.6, long: 1 });
    push(x + 70, y - 290, 1, -0.1); rect(-90, -60, 180, 110, { wash: '#efe2c0', washA: 1, w: 2.2, col: '#3a2a14' }); txt('ДОМОСТРОЙ', 0, -36, 22, { font: 'Osw', col: '#7a1a10' }); const k = clamp((t - EV.dm_book + 0.2) / 1.2); for (let i = 0; i < 4; i++) pencil([[-74, -10 + i * 14], [-74 + 148 * clamp(k * 4 - i), -10 + i * 14]], { w: 2.4, col: '#2a1a0a', pass2: false }); if (t > EV.dm_book) txt('студень', 30, 40, 20, { font: 'Hand', col: '#7a1a10', reveal: clamp((t - EV.dm_book) / 0.5) }); pop();
    if (t > EV.dm_age) bubbleTag('XVI ВЕК', x + 60, 760, t, EV.dm_age, '#d6a842', 40, 0.04); }
  function table(t) { const tb = rect(-300, 1380, 1700, 700, { wash: '#8a5a2a', washA: 1, w: 3, col: '#2a1408', key: 4410 }); shadeG(tb.path, 540, 1380, 540, 1800, '#3a1a08', 0.5); rect(-300, 1370, 1700, 26, { wash: '#f2ead6', washA: 1, w: 1.6 }); for (let i = 0; i < 40; i++) pencil([[-290 + i * 44, 1376], [-270 + i * 44, 1390]], { w: 3, col: '#d9482b', pass2: false });
    push(200, 1410, 1); ell(0, 0, 130, 30, { wash: '#a8643a', washA: 1, w: 2.4, col: '#3a1408' }); pop(); jellySlab(200, 1400, 160, 70, t, { key: 4411, wob: 0.2 }); for (let i = 0; i < 3; i++) { ell(420 + i * 80, 1400, 34, 34, { wash: '#a8643a', washA: 1, w: 2, col: '#3a1408' }); } }
  WORLD.domostroi = (t, u, cat) => { lay(14, () => terem(t)); lay(3, () => scribe(t)); lay(1.3, () => table(t)); lay(1, () => cat()); };
  DIR.domostroi = {
    outfit: 'knyazA', light: { side: 1, rim: '#ffd090' }, grade: ['#e86a3a', 0.12],
    act: () => [[S0.domostroi, 'proud'], [EV.dm_book, 'talk'], [EV.dm_age, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 860, y: 1760, s: 1.15, flip: true, look: [0.7, -0.3], hand: [120, -240], handF: [-80, -220], prop: 'spoonJellyP' }),
    cam: () => [[S0.domostroi, 600, 1000, 0.14], [EV.dm_book, 620, 1000, 0.26, 'x'], [S1.domostroi, 640, 1020, 0.3]]
  };
  // ---------------------------------------------------------------- переход: свиток разматывается сверху вниз
  TRANS_IN.domostroi = { a: 0.12, b: 0.45, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const y = Math.pow(k, 1.2) * (H + 120), P = new Path2D(); P.rect(0, 0, W, y); inPath(P, () => drawBuf(B, 1, 540, 960));
    scr(() => { if (y < H + 80) { const c = rect(-20, y - 50, W + 40, 100, { wash: '#efe2c0', washA: 1, w: 4, col: '#5a4020' }); shadeG(c.path, 0, y + 50, 0, y - 50, '#a88a5a', 0.6); for (const x of [-10, W + 10]) ell(x, y, 30, 50, { wash: '#7a4a24', washA: 1, w: 3 }); } });
  } };
})();
