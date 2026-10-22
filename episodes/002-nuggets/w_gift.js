/* 002 — `gift`: «Патента он не взял: рецепт бесплатно получили пятьсот компаний.» Почтовый зал университета 1963: стена ячеек с письмами, часы,
   карта США с булавками, конвейер мешков, клерки. «Патента» — бланк PATENT влетает, Бейкер отмахивается — бланк в корзину. «бесплатно» — Том-почтальон
   разбрасывает конверты веером, на карте зажигаются точки, счётчик → 500. Переход В сцену: дверца морозилки распахивается, облако холода. */
(() => {
  EV.gf_pat = LS('s4') + 0.1;
  EV.gf_toss = wtw('s4', 'взял:');
  EV.gf_free = wtw('s4', 'бесплатно');
  EV.gf_500 = wtw('s4', 'пятьсот');
  KEYW.push('бесплатно');

  function wall(t) {                                                   // сепия: ячейки с письмами, часы, карта США с точками
    vgrad(-600, 1600, ['#5a3a1e', '#8a6038', '#6a4626']);
    for (let r = 0; r < 9; r++) for (let i = 0; i < 6; i++) { const x = -260 + i * 90, y = 120 + r * 90; rect(x, y, 86, 86, { wash: '#4a2c14', washA: 1, w: 2, col: '#2a1408' }); const rr = rng(2400 + r * 10 + i); if (rr() > 0.3) { rect(x + 8, y + 30 + rr() * 20, 70, 30, { wash: rr() > 0.5 ? '#f2e6c8' : '#e8d0a0', washA: 1, w: 1.2, col: '#5a4020' }); } txt(String(100 + r * 6 + i), x + 43, y + 12, 14, { font: 'Osw', col: '#d6a842' }); }
    push(980, 220, 1); ell(0, 0, 90, 90, { wash: '#f6f0dc', washA: 1, w: 6, col: '#3a2410' }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; pencil([[Math.cos(a) * 70, Math.sin(a) * 70], [Math.cos(a) * 82, Math.sin(a) * 82]], { w: 3, col: '#3a2410', pass2: false }); }
    pencil([[0, 0], [Math.cos(t * 0.5 - 1.6) * 50, Math.sin(t * 0.5 - 1.6) * 50]], { w: 6, col: '#2a1408', pass2: false }); pencil([[0, 0], [Math.cos(t * 6) * 70, Math.sin(t * 6) * 70]], { w: 3, col: '#a8241e', pass2: false }); pop();
    const mx = 360, my = 360; const m = rect(mx, my, 520, 330, { wash: '#e8dcb8', washA: 1, w: 4, col: '#5a3a14', key: 2410 });
    const usa = [[mx + 30, my + 90], [mx + 120, my + 50], [mx + 300, my + 60], [mx + 420, my + 40], [mx + 480, my + 70], [mx + 470, my + 150], [mx + 430, my + 230], [mx + 380, my + 270], [mx + 300, my + 250], [mx + 200, my + 280], [mx + 120, my + 240], [mx + 50, my + 200]];
    blob(usa, { wash: '#c8b07a', washA: 1, w: 2.4, col: '#5a3a14', key: 2411 }); txt('U.S.A.', mx + 260, my + 160, 40, { font: 'Osw', col: '#8a6a3a', a: 0.6 });
    const n = t < EV.gf_free ? 0 : Math.min(500, Math.floor(500 * sm(clamp((t - EV.gf_free) / (EV.gf_500 + 0.4 - EV.gf_free))))), r = rng(2412);
    for (let i = 0; i < 90; i++) { const x = mx + 60 + r() * 400, y = my + 70 + r() * 180, on = i < n / 500 * 90; if (on) { ell(x, y, 7, 7, { wash: '#d9482b', washA: 1, w: 1.4, col: '#4a0a06' }); glow(x, y, 16, 'rgba(255,120,80,1)', 0.4); } }
    ell(mx + 400, my + 110, 10, 10, { wash: '#2a5aa8', washA: 1, w: 2 }); txt('ИТАКА', mx + 400, my + 86, 18, { font: 'Osw', col: '#2a3a5a' });
    if (t > EV.gf_free) { push(mx + 440, my + 330, 1, -0.05); rect(-110, -50, 220, 100, { wash: '#2b2622', washA: 1, w: 2 }); txt(String(n), 0, 0, 70, { font: 'Osw', col: '#e8b53a' }); pop(); txt('компаний', mx + 440, my + 410, 30, { font: 'Hand', col: '#f4e6c8' }); }
  }
  function clerks(t) { human(130, 1240, 1.05, t, { body: '#6a5a3a', hair: '#3a2a1a', face: 'calm', armL: 'hold', armR: 'swing', prop: 'scroll', seed: 81, look: 0.4, hat: 'cap', hatCol: '#2a3a5a' });
    human(1000, 1250, 1.0, t, { body: '#4a3a5a', hair: '#8a6a3a', face: t > EV.gf_free ? 'smile' : 'calm', armL: 'hold', armR: 'hold', seed: 82, flip: -1, look: -0.5 });
    for (let i = 0; i < 3; i++) { const x = 720 + i * 110; blob([[x - 50, 1250], [x - 56, 1140], [x - 20, 1110], [x + 20, 1110], [x + 56, 1140], [x + 50, 1250]], { wash: '#a88a5a', washA: 1, w: 2.4, col: '#3a2a14', key: 2420 + i }); txt('U.S. MAIL', x, 1190, 20, { font: 'Osw', col: '#3a2a14' }); } }
  function baker(t) {                                                  // Бейкер отмахивается от бланка патента
    const x = 300, y = 1400; human(x, y, 1.15, t, { body: '#f4f6f2', bodyD: '#a8b0ac', hair: '#5a4a3a', face: t > EV.gf_toss ? 'smile' : 'calm', armL: 'down', armR: t > EV.gf_pat && t < EV.gf_toss + 0.4 ? 'wave' : 'hold', seed: 71, look: 0.6 });
    push(x, y + (-238 - 46) * 1.15 - 5, 1.15); for (const sd of [-1, 1]) ell(sd * 15, 0, 13, 11, { line: true, w: 3, col: '#1a1a1a' }); pop();
    const k = clamp((t - EV.gf_pat) / 0.35), toss = clamp((t - EV.gf_toss) / 0.5); if (t > EV.gf_pat) { const px = lerp(900, 480, sm(k)) - toss * 160, py = 980 + toss * 360 - Math.sin(toss * 3.1) * 200, rot = toss * 6;
      if (toss < 1) { push(px, py, 1, rot - 0.1); rect(-90, -120, 180, 240, { wash: '#f6f2e2', washA: 1, w: 2.4, col: '#3a2a14' }); txt('PATENT', 0, -84, 30, { font: 'Osw', col: '#2a3a5a' }); txt('№ ____', 0, -44, 24, { font: 'Hand', col: '#2a3a5a' }); for (let i = 0; i < 5; i++) pencil([[-70, -10 + i * 22], [70, -10 + i * 22]], { w: 1.4, col: '#8a8a8a', a: 0.7, pass2: false }); ell(50, 90, 26, 26, { wash: '#a8241e', washA: 1, w: 1.6 }); pop(); } }
    push(110, 1440, 1); poly([[-70, -150], [70, -150], [56, 0], [-56, 0]], { wash: '#6a6e74', washA: 1, w: 2.4, col: '#1a1a1a' }); for (let i = 0; i < 6; i++) pencil([[-60 + i * 24, -146], [-48 + i * 20, -4]], { w: 2, col: '#3a3e44', pass2: false }); if (toss >= 1) { push(0, -160, 1, 0.4); rect(-50, -40, 100, 60, { wash: '#f6f2e2', washA: 1, w: 2, col: '#3a2a14' }); pop(); } pop();
  }
  function counter(t) { const b = rect(-300, 1420, 1700, 600, { wash: '#7a4e26', washA: 1, w: 3, col: '#2a1408', key: 2430 }); shadeG(b.path, 540, 1420, 540, 1900, '#2a1408', 0.5); rect(-300, 1400, 1700, 30, { wash: '#a8743a', washA: 1, w: 2.4, col: '#2a1408' });
    for (let i = 0; i < 6; i++) envelope(500 + i * 70, 1390 - (i % 3) * 10, 0.7, (i - 3) * 0.08, { k: 10 + i }); for (let i = 0; i < 4; i++) rect(-200 + i * 30, 1300 - i * 26, 260, 26, { wash: '#f2e6c8', washA: 1, w: 1.4, col: '#5a4020' }); }
  function fan(t) { if (t < EV.gf_free - 0.1) return; const dt = t - EV.gf_free + 0.1;              // веер конвертов из мешка
    for (let i = 0; i < 26; i++) { const r = rng(2440 + i), t0 = r() * 1.6, kk = dt - t0; if (kk < 0 || kk > 1.4) continue; const a = -2.6 + r() * 1.8, v = 900 + r() * 500, x = 760 + Math.cos(a) * v * kk, y = 1200 + Math.sin(a) * v * kk + 500 * kk * kk; envelope(x, y, 0.8, kk * (r() - 0.5) * 12, { k: i, stamp: i % 2 ? '#d9482b' : '#2a5aa8' }); } }
  WORLD.gift = (t, u, cat) => {
    lay(14, () => { wall(t); haze('#f0c890', 0.06); }); lay(3.6, () => { clerks(t); }); lay(1.6, () => { baker(t); });
    lay(1.25, () => { counter(t); });
    lay(1, () => { cat(); });
    lay(0.8, () => { fan(t); motes(26, [0, 200, 1080, 1700], '#ffe6b0', t, 2450, { sp: 14, sz: 3, a: 0.6 }); });
  };
  DIR.gift = {
    outfit: 'postman', light: { side: -1, rim: '#ffd890' }, grade: ['#e89a50', 0.14],
    act: () => [[S0.gift, 'suspicious'], [EV.gf_pat + 0.2, 'sideeye'], [EV.gf_toss + 0.2, 'shock'], [EV.gf_free, 'grin'], [EV.gf_500, 'awe']],
    pose: (t, u, b) => { const th = t > EV.gf_free - 0.1; return Object.assign(b, { x: 700, y: 1740, s: 1.2, flip: true, look: t < EV.gf_toss ? [0.7, -0.3] : th ? [0, -0.6] : [0.8, 0.4],
      hand: th ? [40 + Math.sin(t * 14) * 60, -380 + Math.cos(t * 14) * 40] : [100, -200], handF: [-110, -190], prop: th ? 'letterP' : 'sackP', propAng: th ? Math.sin(t * 14) * 0.6 : 0 }); },
    cam: () => [[S0.gift, 480, 1150, 0.26], [EV.gf_toss, 460, 1200, 0.2], [EV.gf_free, 600, 1000, 0.04, 'x'], [EV.gf_500, 620, 900, 0.1], [S1.gift, 620, 880, 0.14]]
  };
  // ---------------------------------------------------------------- переход: дверца морозилки распахивается, облако холода
  TRANS_IN.gift = { a: 0.15, b: 0.5, runA: 0, fx(k, t, A, B) {
    drawBuf(B, 1.05 - 0.05 * k, 540, 960); const c = Math.cos(sm(k) * 1.55);
    if (c > 0.02) scr(() => { ctx.save(); ctx.translate(0, 0); ctx.transform(c, -0.12 * (1 - c), 0, 1, 0, 0); ctx.drawImage(A, 0, 0); ctx.fillStyle = `rgba(20,40,60,${0.5 * (1 - c)})`; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#c8d4dc'; ctx.fillRect(W - 40, 0, 40, H); ctx.fillStyle = '#7a8a96'; ctx.fillRect(W - 120, 860, 60, 200); ctx.restore(); });
    scr(() => { for (let i = 0; i < 18; i++) { const r = rng(2460 + i), kk = k; ell(r() * 1080 * (0.3 + kk), 400 + r() * 1200, 160 + 200 * kk, 110 + 120 * kk, { wash: '#f2faff', washA: 0.55 * Math.sin(Math.PI * kk), line: false }); } });
  } };
})();
