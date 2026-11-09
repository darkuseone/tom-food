/* 018 — `thread` (ТОМ-МАЛЫШ, раз за ролик): «Готовую кашу вываливают на доску и режут ниткой: к ножу она липнет.» Том-малыш в кушме гуляет по вершине
   гигантской горы мамалыги: жёлтые холмы с порами-кратерами и паром-гейзерами, у подножия — озеро сметаны с ложкой-пирсом, брынза-валуны, шкварки-брёвна,
   крошки; вдали — гигантская кухня (балки, окно, связки перца), над горой — огромные руки бабушки. По словам: «вываливают» — гора шлёпается сверху и
   колышется, Том подпрыгивает; «на доску» — у подножия проступает край доски с кольцами; «ниткой» — сверху опускается натянутая нитка в руках; «к ножу» —
   слева в гору втыкается великанский нож; «липнет» — нож вытаскивают, за ним тянутся жёлтые нити и комья, ценник ЛИПНЕТ!. Немая пауза-гэг: нитка
   со свистом режет гору в шаге от Тома — гора расходится, Том замирает, потом показывает большой палец. Переход В сцену: чугунок переворачивается — кадр
   вываливается куполом. */
(() => {
  EV.th_drop = wtw('s4', 'вываливают');
  EV.th_board = wtw('s4', 'доску');
  EV.th_thread = wtw('s4', 'ниткой:');
  EV.th_knife = wtw('s4', 'ножу');
  EV.th_stick = wtw('s4', 'липнет.');
  EV.th_gag = LE('s4') + 0.02;
  SHAKES.push([EV.th_drop + 0.25, 0.25, 12], [EV.th_gag + 0.2, 0.15, 8]);
  KEYW.push('ниткой:', 'липнет.');
  const DROP = t => t < EV.th_drop ? 0 : clamp((t - EV.th_drop) / 0.35), WOB = t => t > EV.th_drop + 0.35 ? Math.sin((t - EV.th_drop) * 18) * Math.exp(-(t - EV.th_drop - 0.35) * 4) : 0;
  const CUT = t => t < EV.th_gag ? 0 : sm(clamp((t - EV.th_gag) / 0.35));
  function kitchen(t) {                                                   // гигантская кухня вдали: балки, белёная стена, окно, перец, полка с горшками
    vgrad(-800, 900, ['#5a3a24', '#a8805a', '#c8a880']); const rr = rng(18699); for (let i = 0; i < 30; i++) ell(-400 + rr() * 2000, -600 + rr() * 1400, 40 + rr() * 90, 18 + rr() * 30, { wash: '#8a6a48', washA: 0.25, line: false }); for (let i = 0; i < 4; i++) rect(-500 + i * 600, -800, 120, 1700, { wash: '#6a4424', washA: 1, w: 3, col: '#2a1408' }); rect(-500, -700, 2200, 90, { wash: '#5a3418', washA: 1, w: 3, col: '#2a1408' });
    push(900, -200, 1.6); const wn = rect(-150, -200, 300, 330, { wash: '#f8d8a0', washA: 1, w: 10, col: '#2a5aa8' }); glow(0, -40, 260, 'rgba(255,230,170,1)', 0.6); pencil([[0, -200], [0, 130]], { w: 8, col: '#2a5aa8' }); pencil([[-150, -40], [150, -40]], { w: 8, col: '#2a5aa8' }); pop(); rays(900, -200, 2.2, 0.5, 2200, 'rgba(255,230,170,1)', 0.15, 5, t);
    for (let k = 0; k < 6; k++) { push(-200 + k * 26, -500 + k * 70, 1.6, 0.2); blob([[0, 0], [-10, 30], [-4, 70], [6, 74], [10, 30]], { wash: '#c8221a', washA: 1, w: 1.2, col: '#4a0a04' }); pop(); }
    rect(200, -360, 500, 30, { wash: '#6a4424', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 5; i++) { push(240 + i * 100, -360, 1.4); blob([[-30, 0], [-36, -40], [-20, -70], [20, -70], [36, -40], [30, 0]], { wash: ['#b8642a', '#8a4a2a', '#c8783a'][i % 3], washA: 1, w: 1.6, col: '#3a1a08' }); pop(); }
  }
  function giant(t) {                                                    // великанша-бабушка заглядывает сверху справа: платок в горошек, очки, улыбка; лампа с тёплым светом
    const look = t > EV.th_knife ? 1 : 0.6; push(820, 160, 2.0, -0.15); const hd = ell(0, 0, 150, 170, { wash: '#e8b890', washA: 1, w: 3, col: '#5a3418', key: 18690 }); shadeG(hd.path, 150, 0, -60, 0, '#a8764e', 0.45);
    const kc = blob([[-170, 40], [-180, -100], [-110, -200], [0, -230], [110, -200], [180, -100], [170, 40], [120, -60], [0, -110], [-120, -60]], { wash: '#2a4a8a', washA: 1, w: 3, col: '#0a1a3a', key: 18691 }); for (let i = 0; i < 14; i++) { const a = -2.8 + i * 0.2; ell(Math.cos(a) * 150, -60 + Math.sin(a) * 150, 9, 9, { wash: '#f4f0e4', washA: 1, line: false }); }
    for (const sd of [-1, 1]) { ell(sd * 55, -10, 34, 26, { line: true, w: 4, col: '#5a3a1a' }); ell(sd * 55 - 10 * look, -8, 10, 12, { wash: '#2a1a0a', washA: 1, line: false }); ell(sd * 55 - 12 * look, -12, 3, 3, { wash: '#ffffff', washA: 1, line: false }); } pencil([[-21, -12], [21, -12]], { w: 4, col: '#5a3a1a', pass2: false });
    pencil(spline([[-60, 80], [0, 110], [60, 80]], false, 5), { w: 5, col: '#8a3a2a', pass2: false }); for (const sd of [-1, 1]) ell(sd * 90, 50, 26, 16, { wash: '#e88a7a', washA: 0.5, line: false }); pencil([[0, 10], [-10, 50], [8, 56]], { w: 3, col: '#a8764e', pass2: false }); pop();
    push(200, -600, 1.6); pencil([[0, -300], [0, 0]], { w: 3, col: '#2a1a0a', pass2: false }); blob([[-60, 0], [60, 0], [40, 70], [-40, 70]], { wash: '#c8a040', washA: 1, w: 2, col: '#4a3008' }); ell(0, 90, 30, 30, { wash: '#fff0b0', washA: 0.9, line: false }); pop(); lightPool(200, -460, 900, 'rgba(255,200,120,1)', 0.35);
  }
  function hands(t) {                                                     // огромные руки бабушки с ниткой и рука с ножом
    if (t > EV.th_thread - 0.3) { const q = sm(clamp((t - EV.th_thread + 0.3) / 0.5)), c = CUT(t), y = lerp(-700, 640, q) + c * 1500;
      for (const sd of [-1, 1]) { push(520 + sd * 400, y, 1.5, sd * 0.2); const h = blob([[-60, -400], [-70, -120], [-90, -40], [-50, 30], [40, 30], [70, -30], [60, -400]], { wash: '#e8b890', washA: 1, w: 3, col: '#5a3418', key: 18700 + sd }); shadeG(h.path, sd * 60, 0, -sd * 40, 0, '#a8764e', 0.4); for (let k = 0; k < 3; k++) pencil([[-40 + k * 26, -10], [-38 + k * 26, 24]], { w: 2, col: '#8a5430', pass2: false }); rect(-70, -420, 140, 80, { wash: '#1a3a7a', washA: 1, w: 2, col: '#0a1a3a' }); pop(); }
      mmThread(150, y + 20, 890, y + 20, { w: 6 }); if (t > EV.th_gag - 0.05 && t < EV.th_gag + 0.5) for (let k = 0; k < 4; k++) pencil([[100 + k * 260, y - 20 - k * 10], [180 + k * 260, y - 40 - k * 10]], { w: 3, col: '#ffffff', a: 0.7, pass2: false }); }
    if (t > EV.th_knife - 0.2) { const q = sm(clamp((t - EV.th_knife + 0.2) / 0.3)), pull = sm(clamp((t - EV.th_stick) / 0.5)); const kx = 250 - pull * 60, ky = lerp(-700, 300, q) - pull * 380;
      push(kx, ky, 1.6, 0.25); const bl = poly([[-40, 0], [40, 0], [44, 520], [0, 600], [-40, 520]], { wash: '#c8ccd4', washA: 1, w: 3, col: '#3a3e44', key: 18710 }); metalG(bl.path, 10, 200, 400, '#ffffff', '#c8ccd4', '#6a6e74');
      rect(-50, -320, 100, 330, { wash: '#4a2a14', washA: 1, w: 3, col: '#1a0a04' }); for (const yy of [-260, -120]) ell(0, yy, 10, 10, { wash: '#c8a040', washA: 1, w: 1.4 });
      if (t > EV.th_stick - 0.1) for (let i = 0; i < 7; i++) blob([[-30 + (i % 3) * 22, 240 + i * 50], [-44 + (i % 3) * 24, 270 + i * 50], [-10 + (i % 3) * 22, 300 + i * 50], [24 + (i % 2) * 10, 270 + i * 50]], { wash: MM.y, washA: 1, w: 1.6, col: MM.yD }); pop();
      if (pull > 0) for (let i = 0; i < 5; i++) pencil(spline([[kx + 40 + i * 30, ky + 900 - i * 30], [kx + 70 + i * 30 + Math.sin(t * 6 + i) * 20, ky + 1100], [120 + i * 40, 1180]], false, 6), { w: 10 - i, col: MM.y, a: 1 - pull * 0.4, pass2: false }); }
  }
  function hill(t) {                                                      // жёлтая гора-мамалыга: поверхность, поры-кратеры, пар-гейзеры, разрез ниткой
    const d = DROP(t), w = WOB(t), oy = (1 - d) * -1400, c = CUT(t);
    if (t > EV.th_board - 0.1) { const q = clamp((t - EV.th_board + 0.1) / 0.4); const bd = ell(540, 1850 + oy, 1500 * (0.9 + q * 0.1), 360, { wash: MM.wood, washA: 1, w: 4, col: '#3a2410', key: 18720 }); for (let i = 1; i < 5; i++) ell(540, 1850 + oy, 300 * i, 70 * i, { line: true, w: 2, col: '#7a5028', a: 0.5 }); }
    const half = (sx, kk) => { push(540 + sx * c * 110, 0, 1, sx * c * 0.03); const P = [[-900, 1900], [-760, 1300 - w * 40], [-400, 1040 + w * 30], [0, 980 - w * 50], [400, 1040 + w * 30], [760, 1300 - w * 40], [900, 1900]].map(([x, y]) => [x, y + oy]);
      ctx.save(); if (c > 0) { ctx.beginPath(); if (sx < 0) ctx.rect(-2000, -2000, 2000, 5000); else ctx.rect(0, -2000, 2000, 5000); ctx.clip(); }
      const m = shape(spline(P, true, 10), { wash: MM.y, washA: 1, w: 3, col: '#6a4410', key: kk }); shadeG(m.path, 700, 1500 + oy, -200, 1000 + oy, MM.yD, 0.5); hatch(m.path, m.bb, { gap: 14, a: 0.1, col: MM.crust, ang: 0.6, key: kk + 1, w: 1.2 });
      const r = rng(18730); for (let i = 0; i < 46; i++) { const x = -800 + r() * 1600, yb = 1000 + Math.abs(x) * 0.45 + r() * 600 + oy; ell(x, yb, 10 + r() * 22, 5 + r() * 9, { wash: MM.yD, washA: 0.75, w: 1.2, col: MM.crust, a: 0.5 }); ell(x - 4, yb - 2, 4, 2, { wash: MM.yL, washA: 0.8, line: false }); }
      pencil(spline([[-600, 1180 + oy], [-200, 1020 + oy], [200, 1000 + oy]], false, 8), { w: 26, col: MM.yL, a: 0.6, pass2: false });
      const r2 = rng(18735); for (let i = 0; i < 14; i++) { const x = -700 + r2() * 1400, yb = 1030 + Math.abs(x) * 0.42 + r2() * 260 + oy, R = 22 + r2() * 30; ell(x, yb, R, R * 0.4, { wash: MM.crust, washA: 0.55, w: 2, col: '#6a4410' }); pencil(spline([[x - R, yb - 2], [x, yb - R * 0.5], [x + R, yb - 2]], false, 4), { w: 3, col: MM.yL, a: 0.8, pass2: false }); }
      for (let i = 0; i < 6; i++) { const x = -500 + i * 200, yb = 1000 + Math.abs(x) * 0.45 + oy; pencil(spline([[x, yb], [x + 20, yb + 120], [x + 4, yb + 260]], false, 5), { w: 7, col: '#fff2b0', a: 0.45, pass2: false }); }
      ctx.restore(); pop(); };
    half(-1, 18740); half(1, 18740);
    if (c > 0) { const sl = rect(540 - c * 110, 970 + oy, c * 220, 1000, { wash: '#8a5a20', washA: 0.6, line: false }); for (const sd of [-1, 1]) pencil([[540 + sd * c * 110, 990], [540 + sd * c * 110, 1900]], { w: 10, col: MM.yL, a: 0.9, pass2: false }); }
    if (d >= 1) for (let i = 0; i < 4; i++) { const x = [-200, 120, 860, 1180][i], q = (t * 0.6 + i * 0.27) % 1; for (let k = 0; k < 3; k++) ell(x + Math.sin(q * 6 + k) * 30, 1080 + Math.abs(x - 540) * 0.4 - q * 700 - k * 60, 50 + q * 90, 30 + q * 50, { wash: '#ffffff', washA: 0.35 * (1 - q), line: false }); }
  }
  function boulders(t) {                                                  // брынза-валуны, озеро сметаны с ложкой-пирсом, шкварки-брёвна, зёрна
    const d = DROP(t); if (d < 1) return;
    push(1160, 1660, 1); const lk = ell(0, 0, 360, 110, { wash: MM.sm, washA: 1, w: 3, col: '#8a8470', key: 18750 }); shadeG(lk.path, 300, 80, -200, -60, MM.smD, 0.4); for (let i = 0; i < 4; i++) pencil(spline([[-260 + i * 120, -10 + Math.sin(t * 2 + i) * 6], [-220 + i * 120, -20], [-180 + i * 120, -10]], false, 4), { w: 3, col: '#ffffff', a: 0.8, pass2: false }); pop();
    push(1000, 1620, 1, -0.3); rect(-200, -24, 360, 48, { wash: MM.woodL, washA: 1, w: 2.4, col: '#5a3818' }); ell(200, 0, 90, 60, { wash: MM.woodL, washA: 1, w: 2.4, col: '#5a3818' }); pop();
    brinza(860, 1090, 1.5, -0.2, { key: 18757 }); shkvarki(160, 1110, 1.8, 0.2, { key: 18758, n: 3 }); push(1080, 1200, 0.7); const lk2 = ell(0, 0, 260, 70, { wash: MM.sm, washA: 1, w: 3, col: '#8a8470' }); shadeG(lk2.path, 200, 50, -150, -40, MM.smD, 0.4); pencil([[-120, -10], [60, -20]], { w: 6, col: '#ffffff', pass2: false }); pop();
    brinza(80, 1500, 2.2, -0.2, { key: 18751 }); brinza(330, 1620, 1.6, 0.3, { key: 18752 }); brinza(930, 1450, 1.4, -0.1, { key: 18753 });
    shkvarki(-60, 1720, 2.6, 0.1, { key: 18754, n: 4 }); shkvarki(700, 1760, 2.2, -0.2, { key: 18755, n: 3 });
    const r = rng(18756); for (let i = 0; i < 14; i++) ell(-100 + r() * 1300, 1480 + r() * 260, 8, 6, { wash: MM.corn, washA: 1, w: 1, col: MM.cornD, rot: r() * 3 });
  }
  function labels(t) { if (t > EV.th_stick) bubbleTag('ЛИПНЕТ!', 320, 860, t, EV.th_stick, '#7a2a14', 54, -0.06); if (t > EV.th_thread + 0.2 && t < EV.th_knife) bubbleTag('НИТКА', 820, 760, t, EV.th_thread + 0.2, '#3a2a14', 46, 0.05);
    if (t > EV.th_gag + 0.15 && t < EV.th_gag + 0.6) { push(560, 760, popK(t, EV.th_gag + 0.15, 0.3)); txt('ВЖУХ!', 0, 0, 80, { font: 'Osw', col: '#c8221a' }); pop(); } }
  function front(t) { const r = rng(18760); for (let i = 0; i < 5; i++) { push(-40 + i * 290 + r() * 50, 1980, 1.6, r()); ell(0, -20, 30, 20, { wash: MM.y, washA: 1, w: 1.6, col: MM.yD }); pop(); }
    motes(30, [-100, 300, 1200, 1700], '#ffffff', t, 18765, { sp: 20, sz: 6, a: 0.35, wob: 8 }); haze('#f8e0a0', 0.06); }
  WORLD.thread = (t, u, cat) => {
    lay(16, () => { kitchen(t); haze('#c89868', 0.06); }); lay(7, () => { giant(t); haze('#d8b080', 0.1); });
    lay(1.3, () => { hill(t); boulders(t); });
    lay(1.2, () => { hands(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { labels(t); });
    lay(0.6, () => { front(t); });
    vign(0.4, '60,30,6');
  };
  DIR.thread = {
    outfit: 'moldA', light: { side: 1, rim: '#fff0c0' }, grade: ['#f0c060', 0.08],
    act: () => [[S0.thread, 'awe'], [EV.th_drop + 0.3, 'shock'], [EV.th_board, 'talk'], [EV.th_thread, 'awe'], [EV.th_knife, 'suspicious'], [EV.th_stick, 'laugh'], [EV.th_gag, 'scared'], [EV.th_gag + 0.45, 'grin']],
    pose: (t, u, b) => { const k = clamp((t - EV.th_drop - 0.4) / (EV.th_gag - EV.th_drop - 0.4)), hop = t > EV.th_drop + 0.3 && t < EV.th_drop + 0.8 ? Math.abs(Math.sin((t - EV.th_drop - 0.3) * 12)) * 60 : 0, gag = t > EV.th_gag, thumb = t > EV.th_gag + 0.45;
      return Object.assign(b, { x: lerp(330, 470, k), y: 1080 - hop + (DROP(t) < 1 ? -800 * (1 - DROP(t)) : 0), s: 0.5, flip: 1, walk: !gag && t > EV.th_drop + 0.8 ? t * 7 : undefined,
        look: gag ? [0.8, 0] : t > EV.th_stick ? [-0.8, -0.2] : t > EV.th_thread ? [0.2, -0.9] : [0.4, -0.2], hand: thumb ? [140, -340] : gag ? [120, -200] : [140, -260], handF: gag && !thumb ? [-120, -200] : [-80, -220], sweat: gag && !thumb, tailUp: thumb, squash: gag && t < EV.th_gag + 0.3 ? 0.08 : 0 }); },
    cam: () => [[S0.thread, 540, 900, 0.1], [EV.th_drop + 0.3, 480, 1000, 0.22, 'x'], [EV.th_thread, 520, 900, 0.2], [EV.th_knife, 380, 980, 0.24], [EV.th_gag, 480, 1020, 0.3], [S1.thread, 500, 1000, 0.32]]
  };
  // ---------------------------------------------------------------- переход: чугунок переворачивается — кадр вываливается куполом
  TRANS_IN.thread = { a: 0.3, b: 0.4, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), dropY = lerp(-1900, 0, clamp(e * 1.4)); drawBuf(A, 1, 540, 960);
    ctx.save(); ctx.translate(0, dropY); ctx.beginPath(); ctx.moveTo(-100, 2000); ctx.bezierCurveTo(-100, 200, 1180, 200, 1180, 2000); ctx.closePath(); if (e > 0.85) ctx.rect(-100, -100, 1300, 2200); ctx.clip(); ctx.translate(0, -dropY); drawBuf(B, 1, 540, 960); ctx.restore();
    scr(() => { push(540, dropY - 300 - e * 200, 2.2, Math.PI * (0.6 + e * 0.4)); ceaun(0, 0, 1, t, { key: 18790, bail: false, fill: e < 0.5 ? 'y' : null, steam: false }); pop(); });
  } };
})();
