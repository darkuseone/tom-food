/* 003 — `today` + `button`: «В 2018-м ей отметили "сто лет" — салатом в тонну. А ей едва пятьдесят.» Праздник: гирлянды, ёлка-боке, растяжка «100 ЛЕТ ШУБЕ», огромные весы
   «1018 КГ», длинный стол с гигантской шубой и людьми в колпаках. ХИРО-ШОТ: шуба на блюде крупно, блеск майонеза, вилки. На «пятьдесят» свеча «100» гаснет, сверху штамп «≈50».
   `button`: Том с вилкой-куском в камеру, подмигивает. Переходы: ёлочный шар-отражение (В today), снежок в камеру (В button). */
(() => {
  EV.td_100 = wtw('t1', '«сто');
  EV.td_ton = wtw('t1', 'тонну.');
  EV.td_50 = wtw('t1', 'пятьдесят.');
  EV.bt_wink = LF('x1', 0.7);
  SHAKES.push([EV.td_ton + 0.1, 0.2, 8]);
  KEYW.push('тонну.', 'пятьдесят.');

  function hall(t) {                                                   // праздничный зал: гирлянды, растяжка, весы
    vgrad(-600, 1600, ['#2a1018', '#4a1a24', '#6a2a2a']); const r = rng(4001); for (let i = 0; i < 36; i++) glow(r() * 1300 - 100, 120 + r() * 900, 30 + r() * 70, ['rgba(255,190,100,1)', 'rgba(255,90,90,1)', 'rgba(120,230,140,1)'][i % 3], 0.2 + 0.1 * Math.sin(t * 2 + i));
    pencil(spline([[-200, 120], [200, 210], [540, 150], [880, 220], [1300, 120]], false, 10), { w: 3, col: '#1a0a04', pass2: false }); for (let i = 0; i < 16; i++) { const x = -150 + i * 95, y = 155 + Math.sin(i * 1.3) * 34; ell(x, y + 16, 9, 13, { wash: ['#ff5a5a', '#ffd24a', '#5ae86a', '#5ac8ff'][i % 4], washA: 1, w: 1.4, col: '#1a0a04' }); glow(x, y + 16, 40, 'rgba(255,220,140,1)', 0.5 * flick(t, i)); }
    push(760, 330, 0.9, -0.02); const b = poly([[-330, -70], [330, -70], [300, 0], [330, 70], [-330, 70], [-300, 0]], { wash: '#d9482b', washA: 1, w: 3, col: '#3a0a04', key: 4002 }); txt('100 ЛЕТ ШУБЕ!', 0, 2, 64, { font: 'Osw', col: '#fff6e0' });
    if (t > EV.td_50) { const k = clamp((t - EV.td_50) / 0.3); pencil([[-300, -40], [-300 + 600 * k, 40]], { w: 12, col: '#2b2622', pass2: false }); } pop();
    push(900, 760, 1); rect(-130, -100, 260, 200, { wash: '#c8ccd0', washA: 1, w: 3, col: '#2a2e34', key: 4003 }); rect(-110, -80, 220, 90, { wash: '#1a2a1a', washA: 1, w: 2 }); const v = t < EV.td_100 ? 0 : Math.min(1018, Math.round(1018 * sm(clamp((t - EV.td_100) / (EV.td_ton - EV.td_100 + 0.2)))));
    txt(v + ' КГ', 0, -36, 54, { font: 'Osw', col: '#7aff8a' }); glow(0, -36, 120, 'rgba(120,255,140,1)', 0.25); ell(0, 60, 40, 20, { wash: '#8a9098', washA: 1, w: 2 }); pop();
  }
  function longTable(t) {                                              // длинный стол с гигантской шубой и гостями в колпаках
    for (let i = 0; i < 6; i++) { const x = -40 + i * 220; human(x, 1150, 0.9, t, { body: ['#3a6a8a', '#8a3a5a', '#4a7a3a', '#8a6a2a', '#5a4a8a', '#2a5a6a'][i], hair: ['#2a1a0a', '#c8a050', '#1a1a1a', '#6a3a1a'][i % 4], face: t > EV.td_ton ? 'grin' : 'smile', armL: 'hold', armR: i % 2 ? 'up' : 'hold', seed: 200 + i, flip: i % 2 ? -1 : 1 });
      const hy = 1150 + (-238 - 46) * 0.9 - 30; poly([[x - 26, hy], [x + 26, hy], [x, hy - 70]], { wash: ['#e8b53a', '#3ab8a8', '#d9482b'][i % 3], washA: 1, w: 1.8, col: '#1a0a04' }); }
    rect(-300, 1100, 1700, 50, { wash: '#f2ead8', washA: 1, w: 2.4, col: '#3a2a14', key: 4010 }); ctx.save(); const s = new Path2D(); s.rect(-300, 1020, 1700, 80); ctx.clip(s); const cols = ['#a8b4c0', SH.pot, SH.onion, SH.carrot, SH.beet]; cols.forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect(-300, 1100 - (i + 1) * 16, 1700, 16); }); ctx.restore();
    pencil([[-300, 1020], [1400, 1020]], { w: 6, col: SH.mayo, pass2: false });
  }
  function candle(t) {                                                 // свеча «100» на шубе гаснет на «пятьдесят»
    const x = 470, y = 1170, out = t > EV.td_50; push(x, y, 1); for (const [dx, d] of [[-50, '1'], [0, '0'], [50, '0']]) { rect(dx - 18, -120, 36, 120, { wash: '#f6f0e0', washA: 1, w: 2, col: '#5a4a3a' }); txt(d, dx, -60, 40, { font: 'Osw', col: '#d9482b' }); pencil([[dx, -120], [dx, -136]], { w: 2, col: '#2a2a2a', pass2: false });
      if (!out) { const f = flick(t, dx); blob([[dx - 8, -136], [dx, -170 * f + 0], [dx + 8, -136]], { wash: '#ffc04a', washA: 1, line: false }); glow(dx, -150, 50, 'rgba(255,190,90,1)', 0.6); } else { for (let q = 0; q < 3; q++) { const k = ((t - EV.td_50) * 1.2 + q / 3) % 1; ell(dx + Math.sin(k * 6) * 10, -150 - k * 120, 8 + k * 14, 6 + k * 10, { wash: '#c8c8c8', washA: 0.5 * (1 - k), line: false }); } } } pop();
    if (out) { const s = popK(t, EV.td_50 + 0.15, 0.3); push(x + 260, y - 130, 1.3 - 0.4 * s, -0.12); ctx.globalAlpha = s; pencil([[-150, -50], [150, -50], [150, 50], [-150, 50], [-150, -50]], { w: 6, col: '#d9482b', pass2: false }); txt('≈ 50 ЛЕТ', 0, 2, 60, { font: 'Osw', col: '#d9482b' }); ctx.globalAlpha = 1; pop(); }
  }
  WORLD.today = (t, u, cat) => {
    lay(12, () => { hall(t); }); lay(3, () => { longTable(t); });
    lay(1.3, () => { const tb = rect(-300, 1340, 1700, 700, { wash: '#f6eee0', washA: 1, w: 3, col: '#3a2a14', key: 4020 }); shadeG(tb.path, 540, 1340, 540, 1800, '#b8a888', 0.4); for (let i = 0; i < 24; i++) pencil([[-300 + i * 70, 1350], [-300 + i * 70, 1410]], { w: 3, col: '#2a7a3a', a: 0.5, pass2: false }); });
    lay(1.12, () => { shubaPlate(470, 1470, 1.25, t); candle(t); });
    lay(1, () => { cat(); });
  };
  DIR.today = {
    outfit: 'sweater', light: { side: -1, rim: '#ffd0a0' }, grade: ['#ff7060', 0.1],
    act: () => [[S0.today, 'proud'], [EV.td_100, 'awe'], [EV.td_ton, 'laugh'], [EV.td_50, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 860, y: 1780, s: 1.2, flip: true, look: t > EV.td_50 ? [0, 0] : [0.6, 0.4], hand: [150, -260], handF: [-90, -220], prop: 'forkShubaP', tailUp: t > EV.td_ton }),
    cam: () => [[S0.today, 600, 1350, 0.36], [S0.today + 1.0, 640, 1000, 0.08, 'x'], [EV.td_ton, 720, 900, 0.16], [EV.td_50, 560, 1200, 0.26], [S1.today, 560, 1220, 0.3]]
  };
  WORLD.button = (t, u, cat) => { lay(12, () => hall(t)); lay(1.3, () => { const tb = rect(-300, 1340, 1700, 700, { wash: '#f6eee0', washA: 1, w: 3, col: '#3a2a14', key: 4020 }); }); lay(1.12, () => shubaPlate(360, 1480, 1.15, t)); lay(1, () => cat()); };
  DIR.button = {
    outfit: 'sweater', light: { side: -1, rim: '#ffd0a0' }, grade: ['#ff7060', 0.1],
    act: () => [[S0.button, 'grin'], [EV.bt_wink, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 720, y: 1820, s: 1.3, look: [0, 0], hand: [110, -320], handF: [-110, -260], prop: 'forkShubaP', tailUp: true }),
    cam: () => [[S0.button, 700, 900, 0.3], [S0.button + 0.5, 660, 960, 0.34], [DUR, 660, 980, 0.36]]
  };
  // ---------------------------------------------------------------- переход В today: ёлочный шар — сцена в отражении шара растёт
  TRANS_IN.today = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const R = 120 + Math.pow(k, 1.6) * 1300; inCircle(540, 960, R, () => { scr(() => { ctx.save(); ctx.translate(540, 960); const s = 0.4 + 0.6 * k; ctx.scale(s, s); ctx.drawImage(B, -540, -960); ctx.restore(); }); });
    scr(() => { pencil(ellPts(540, 960, R, R, 0, 0, 60), { w: 10, col: '#d9482b', a: 1 - k, pass2: false }); glow(540 - R * 0.4, 960 - R * 0.4, R * 0.3, 'rgba(255,255,255,1)', 0.6 * (1 - k)); rect(500, 960 - R - 60, 80, 60, { wash: '#d6a842', washA: 1 - k, w: 3, col: '#5a3a08', a: 1 - k }); });
  } };
  // ---------------------------------------------------------------- переход В button: снежок летит в камеру и рассыпается
  TRANS_IN.button = { a: 0.15, b: 0.35, runA: 1, fx(k, t, A, B) {
    drawBuf(k < 0.5 ? A : B, 1, 540, 960); scr(() => { if (k < 0.55) { const R = 40 + Math.pow(k / 0.55, 2) * 1400; ell(540, 960, R, R, { wash: '#f6faff', washA: 1, w: 4, col: '#a8b8c8' }); } else { const kk = (k - 0.55) / 0.45; for (let i = 0; i < 50; i++) { const r = rng(4030 + i), a = r() * 6.283, v = 300 + r() * 900; ell(540 + Math.cos(a) * v * kk, 960 + Math.sin(a) * v * kk, 20, 20, { wash: '#ffffff', washA: 1 - kk, line: false }); } } });
  } };
})();
