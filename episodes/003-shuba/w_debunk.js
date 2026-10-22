/* 003 — `debunk`: «Но документов нет: ни трактира, ни Богомилова. Легенду, похоже, сочинили потом.» Архив: стеллажи коробок до потолка, картотека, пыль в луче лампы,
   архивариус в нарукавниках. Том-сыщик (тренч, охотничья шапка, лупа). «документов нет» — ящик картотеки выезжает пустым, облако пыли; «трактира» — карточка с фото трактира
   получает штамп «НЕ НАЙДЕНО», «Богомилова» — силуэт с «?»; «сочинили потом» — Том рвёт плакат «ШУБА» пополам. Переход В сцену: ящик картотеки выезжает в камеру. */
(() => {
  EV.db_no = wtw('s4', 'документов');
  EV.db_trak = wtw('s4', 'трактира,');
  EV.db_bog = wtw('s4', 'Богомилова.');
  EV.db_tear = wtw('s4', 'сочинили');
  SHAKES.push([EV.db_trak + 0.15, 0.15, 8], [EV.db_bog + 0.15, 0.15, 8]);
  KEYW.push('нет:', 'потом.');

  function archive(t) {                                                // стеллажи коробок, лампа-луч, пыль
    vgrad(-600, 1600, ['#1a1e24', '#2e343c', '#3a4048']); for (let c = 0; c < 6; c++) { const x = -260 + c * 260; rect(x, 100, 16, 1250, { wash: '#4a4e54', washA: 1, w: 2, col: '#101214' }); rect(x + 230, 100, 16, 1250, { wash: '#4a4e54', washA: 1, w: 2, col: '#101214' });
      for (let r = 0; r < 7; r++) { const y = 140 + r * 175; rect(x, y + 140, 246, 14, { wash: '#5a5e64', washA: 1, w: 1.6, col: '#101214' }); for (let q = 0; q < 3; q++) { const rr = rng(3500 + c * 30 + r * 3 + q); if (rr() < 0.15) continue; const bx = rect(x + 22 + q * 72, y + 30 + rr() * 20, 66, 110 - rr() * 20, { wash: rr() > 0.5 ? '#a89070' : '#8a7a60', washA: 1, w: 1.6, col: '#2a2010' }); rect(x + 34 + q * 72, y + 60, 42, 22, { wash: '#efe6d0', washA: 1, w: 1, col: '#2a2010' }); } } }
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; const g = ctx.createLinearGradient(700, 0, 500, 1300); g.addColorStop(0, 'rgba(255,240,200,0.25)'); g.addColorStop(1, 'rgba(255,240,200,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(640, 0); ctx.lineTo(760, 0); ctx.lineTo(900, 1400); ctx.lineTo(260, 1400); ctx.fill(); ctx.restore();
    motes(60, [260, 0, 900, 1400], '#fff6dc', t, 3510, { sp: 10, sz: 3, a: 0.7 });
  }
  function clerk(t) { human(160, 1290, 1.15, t, { body: '#4a5060', hair: '#c8c8c8', face: t > EV.db_no ? 'shock' : 'calm', armL: 'hold', armR: t > EV.db_no ? 'up' : 'hold', seed: 170, look: 0.5, beard: 'short' });   // архивариус
    push(160, 1290 + (-238 - 46) * 1.15 - 4, 1.15); for (const sd of [-1, 1]) ell(sd * 15, 0, 13, 11, { line: true, w: 3, col: '#1a1a1a' }); pop(); }
  function catalog(t) {                                                // картотека на столе: ящик выезжает пустым, карточки со штампами
    const x = 520, y = 1330; for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) { rect(x - 210 + c * 140, y - 260 + r * 120, 130, 110, { wash: '#8a5a2a', washA: 1, w: 2.2, col: '#2a1408', key: 3520 + r * 3 + c }); ell(x - 145 + c * 140, y - 200 + r * 120, 14, 8, { wash: '#c8a040', washA: 1, w: 1.4 }); rect(x - 175 + c * 140, y - 240 + r * 120, 60, 20, { wash: '#efe6d0', washA: 1, w: 1 }); }
    if (t > EV.db_no) { const k = sm(clamp((t - EV.db_no) / 0.35)); push(x - 5, y - 140 + 60 * k, 1 + 0.5 * k); const d = rect(-65, -50, 130, 110, { wash: '#9a6a32', washA: 1, w: 2.4, col: '#2a1408' }); rect(-55, -40, 110, 30, { wash: '#2a1408', washA: 1, line: false }); txt('ПУСТО', 0, 30, 26, { font: 'Osw', col: '#f6e6c0' }); pop();
      if (t < EV.db_no + 1.2) { const kk = (t - EV.db_no) / 1.2; for (let i = 0; i < 10; i++) { const r = rng(3530 + i); ell(x + (r() - 0.5) * 300 * kk, y - 160 - kk * 200 * r(), 40 + 80 * kk, 30 + 50 * kk, { wash: '#c8bca8', washA: 0.4 * (1 - kk), line: false }); } } }
    const card = (cx, cy, t0, label, kind, rot) => { if (t < t0 - 0.3) return; const k = popK(t, t0 - 0.3, 0.3); push(cx, cy, k, rot); rect(-120, -150, 240, 300, { wash: '#efe6d0', washA: 1, w: 2.4, col: '#3a2a14' }); rect(-100, -130, 200, 160, { wash: '#8a8070', washA: 1, w: 1.6, col: '#3a2a14' });
      if (kind === 'tav') { poly([[-80, 20], [-80, -60], [0, -110], [80, -60], [80, 20]], { wash: '#5a4030', washA: 1, w: 1.6 }); rect(-20, -30, 40, 50, { wash: '#2a1a10', washA: 1, line: false }); } else { ell(0, -70, 34, 40, { wash: '#2a2a2a', washA: 1, line: false }); blob([[-70, 30], [-60, -20], [60, -20], [70, 30]], { wash: '#2a2a2a', washA: 1, line: false }); txt('?', 0, -60, 60, { font: 'Osw', col: '#efe6d0' }); }
      txt(label, 0, 70, 26, { font: 'Hand', col: '#2a2010' }); if (t > t0 + 0.05) { const s = popK(t, t0 + 0.05, 0.25); push(0, 0, 1.6 - 0.6 * s, -0.25); ctx.globalAlpha = s; pencil([[-120, -36], [120, -36], [120, 36], [-120, 36], [-120, -36]], { w: 6, col: '#b8281e', pass2: false }); txt('НЕ НАЙДЕНО', 0, 2, 38, { font: 'Osw', col: '#b8281e' }); ctx.globalAlpha = 1; pop(); } pop(); };
    card(380, 900, EV.db_trak, 'трактир, 1918', 'tav', -0.08); card(700, 880, EV.db_bog, 'Богомилов А.', 'man', 0.07);
  }
  function tear(t, P) { if (t < EV.db_tear - 0.3) return; const k = clamp((t - EV.db_tear) / 0.6), hx = P.x - 80 * P.s, hy = P.y - 400 * P.s;            // плакат «ШУБА» рвётся пополам
    for (const sd of [-1, 1]) { push(hx + sd * (20 + 160 * k), hy + 200 * k * k, 1, sd * k * 0.8); const h = rect(sd > 0 ? 0 : -120, -80, 120, 160, { wash: '#b8281e', washA: 1, w: 2.4, col: '#3a0a04' }); txt(sd > 0 ? 'БА' : 'ШУ', sd * 60, 0, 60, { font: 'Osw', col: '#f6e6a0' }); pop(); } }
  WORLD.debunk = (t, u, cat) => {
    lay(14, () => { archive(t); }); lay(3.6, () => { clerk(t); });
    lay(1.3, () => { const tb = rect(-300, 1330, 1700, 700, { wash: '#4a3a2a', washA: 1, w: 3, col: '#101010', key: 3540 }); shadeG(tb.path, 540, 1330, 540, 1800, '#1a1410', 0.5); catalog(t); });
    lay(1, () => { cat(); });
  };
  DIR.debunk = {
    outfit: 'sleuth', light: { side: -1, rim: '#fff0c0' }, grade: ['#6a8ab0', 0.1],
    act: () => [[S0.debunk, 'suspicious'], [EV.db_no, 'sideeye'], [EV.db_trak, 'smug'], [EV.db_bog, 'suspicious'], [EV.db_tear, 'annoyed'], [EV.db_tear + 0.5, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 860, y: 1760, s: 1.18, flip: true, look: t < EV.db_tear ? [0.8, -0.2] : [0, 0], hand: t > EV.db_tear - 0.3 ? [80, -400] : [200, -330], handF: t > EV.db_tear - 0.3 ? [-60, -400] : [-90, -220],
      prop: t < EV.db_tear - 0.3 ? 'magnifier' : undefined, propAng: -0.6 }),
    afterCat: (t, u, P) => tear(t, P),
    cam: () => [[S0.debunk, 560, 1100, 0.14], [EV.db_no, 540, 1200, 0.24], [EV.db_trak, 520, 1000, 0.16], [EV.db_bog, 620, 1000, 0.16], [EV.db_tear, 760, 1180, 0.26, 'x'], [S1.debunk, 760, 1160, 0.3]]
  };
  // ---------------------------------------------------------------- переход: ящик картотеки выезжает в камеру
  TRANS_IN.debunk = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); scr(() => { ctx.fillStyle = `rgba(10,10,14,${0.6 * k})`; ctx.fillRect(0, 0, W, H); });
    const s = 0.12 + 0.88 * Math.pow(k, 1.6), w = W * s, h = H * s, x = 540 - w / 2, y = 960 - h / 2 + (1 - k) * 200, P = new Path2D(); P.rect(x, y, w, h);
    inPath(P, () => drawBuf(B, 1, 540, 960)); scr(() => { const b = 18 + 40 * s; pencil([[x, y], [x + w, y], [x + w, y + h], [x, y + h], [x, y]], { w: b, col: '#8a5a2a', pass2: false }); ell(540, y + h - b, 30 * s + 6, 14 * s + 4, { wash: '#c8a040', washA: 1, w: 2 }); });
  } };
})();
