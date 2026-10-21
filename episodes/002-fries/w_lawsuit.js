/* 002 — `lawsuit`: «Вегетарианцы подали в суд — минус десять миллионов долларов!» Тот же зал, но 2002: лампы дневного света, плакаты «VEG», морковки.
   Слева истцы с плакатами, справа ответчик — потеющая коробка фри (без логотипов). «суд» — удар молотка; «минус» — гигантский чек «$10 000 000» въезжает и шлёпается на кафедру;
   «долларов» — дождь купюр, Том-судья хохочет. Переход В сцену: из кассового аппарата выползает длинный чек, закрывает кадр и отрывается. */
(() => {
  EV.lw_court = wtw('s10', 'суд');
  EV.lw_minus = wtw('s10', 'минус');
  EV.lw_usd = wtw('s10', 'долларов!');
  SHAKES.push([EV.lw_court + 0.1, 0.2, 12], [EV.lw_minus + 0.45, 0.25, 14]);
  KEYW.push('минус', 'долларов!');
  function plaintiffs(t) {                                              // истцы: плакаты VEG, морковка, лист салата
    const P = [[60, '#5a8a3a', 'VEG'], [250, '#e8dcc0', 'NO BEEF!'], [-120, '#8a5a8a', '🥕']];
    P.forEach(([x, c, s], i) => { const wave = Math.sin(t * 5 + i) * 12; human(x, 1560, 1.0, t, { body: c, hair: ['#3a2a1a', '#c89a5a', '#1a1a1a'][i], face: t > EV.lw_minus + 0.4 ? 'grin' : 'angry', armL: 'up', armR: 'up', seed: 170 + i, look: 0.5, skin: ['#e2b48e', '#a8744a', '#f0c8a8'][i] });
      push(x, 1560 - 400 + wave, 1, wave * 0.01); pencil([[0, 60], [0, 200]], { w: 7, col: '#6a4424' }); rect(-110, -40, 220, 110, { wash: '#fbf6ea', washA: 1, w: 3, col: '#2a3a1a' }); txt(s, 0, 16, s.length > 4 ? 44 : 60, { font: 'Osw', col: '#3a7a2a' }); pop(); });
  }
  function defendant(t) {                                               // ответчик: красная коробка фри с глазами, потеет
    push(960, 1500, 1.2, Math.sin(t * 3) * 0.03); friesPile(0, -200, 0.9, 11, 9300, { spread: 1, salt: 1 });
    const b = shape([[-120, -230], [120, -230], [100, 40], [-100, 40]], { wash: '#c8282a', washA: 1, w: 3, col: '#3a0a08', key: 9301 }); shadeG(b.path, 120, 0, -40, 0, '#5a0a08', 0.5); pencil(spline([[-120, -230], [0, -190], [120, -230]], false, 8), { w: 4, col: '#3a0a08', pass2: false });
    const sh = t > EV.lw_minus + 0.4; for (const ex of [-40, 40]) { ell(ex, -110, 22, sh ? 28 : 22, { wash: '#ffffff', washA: 1, w: 2.4, col: '#1a0a04' }); ell(ex + (sh ? 0 : -6), -104, 9, 9, { wash: '#1a0a04', washA: 1, line: false }); }
    if (sh) ell(0, -40, 26, 30, { wash: '#4a0a08', washA: 1, w: 2, col: '#1a0a04' }); else pencil(spline([[-30, -40], [0, -50], [30, -40]], false, 4), { w: 4, col: '#1a0a04', pass2: false });
    for (let i = 0; i < 3; i++) { const ph = (t * 1.3 + i / 3) % 1; blob([[100 + i * 10, -150 + ph * 120], [92 + i * 10, -130 + ph * 120], [100 + i * 10, -120 + ph * 120], [108 + i * 10, -130 + ph * 120]], { wash: '#a8d8f0', washA: 1 - ph, w: 1.4, col: '#3a6a8a', a: 1 - ph }); }
    for (const sd of [-1, 1]) { pencil([[sd * 60, 40], [sd * 70, 160]], { w: 9, col: '#1a1a1a' }); ell(sd * 80, 166, 30, 12, { wash: '#1a1a1a', washA: 1, w: 1.6 }); } pop();
    push(960, 1660, 1); rect(-220, -60, 440, 40, { wash: '#7a5c44', washA: 1, w: 2.6, col: '#1e1008' }); for (const lx of [-200, 200]) rect(lx - 12, -20, 24, 200, { wash: '#5a3a20', washA: 1, w: 2, col: '#1e1008' }); pop();
  }
  function bigCheque(t) { if (t < EV.lw_minus - 0.1) return; const k = clamp((t - EV.lw_minus + 0.1) / 0.55), x = lerp(1500, 560, sm(k)), y = lerp(300, 1180, k * k), r = lerp(0.8, -0.06, sm(k)); cheque(x, y, 0.95, r, t);
    if (k >= 1) gavelHit(560, 1260, t, EV.lw_minus + 0.45, 1.4); }
  function money(t) { if (t < EV.lw_usd - 0.1) return; const q = t - EV.lw_usd + 0.1; for (let i = 0; i < 26; i++) { const r = rng(9310 + i), x = r() * 1200 - 60 + Math.sin(q * 3 + i) * 60, y = -200 + q * (500 + r() * 400) - r() * 600; if (y < -200) continue;
    push(x, y, 1, Math.sin(q * 4 + i) * 0.8); const b = rect(-60, -28, 120, 56, { wash: '#a8c890', washA: 1, w: 2, col: '#2a4a1a' }); ell(0, 0, 18, 18, { wash: '#7aa860', washA: 1, w: 1.4, col: '#2a4a1a' }); txt('$', 0, 2, 26, { font: 'Osw', col: '#2a4a1a' }); pop(); } }
  WORLD.lawsuit = (t, u, cat) => {
    courtroom(t, { modern: 1, react: i => t > EV.lw_minus + 0.4 ? (i % 2 ? 'shock' : 'grin') : 'calm' });
    lay(1.25, () => { plaintiffs(t); defendant(t); });
    lay(1, () => { cat(); });
    lay(0.92, () => { bench(t, { cone: false, plate: 'СУД НА ВКУС' }); gavelHit(800, 1290, t, EV.lw_court + 0.1, 1.1); bigCheque(t); });
    lay(0.7, () => { money(t); });
  };
  DIR.lawsuit = {
    outfit: 'judge', light: { side: -1, rim: '#e8f4ff' }, grade: ['#c8d8e0', 0.08],
    act: () => [[S0.lawsuit, 'suspicious'], [EV.lw_court, 'annoyed'], [EV.lw_minus, 'shock'], [EV.lw_minus + 0.5, 'laugh']],
    pose: (t, u, b) => { const t0 = EV.lw_court + 0.1, bang = t < t0 + 0.25 && t > t0 - 0.6, up = t < t0 ? clamp((t0 - t) / 0.6) : 0;
      return Object.assign(b, { x: 560, y: 1500, s: 1.05, look: t < EV.lw_court ? [-0.8, 0.2] : t < EV.lw_minus ? [0.8, 0.2] : [0.1, 0.6], hand: bang ? [200, -250 - up * 120] : [160, -200], prop: 'mallet', propAng: bang ? -0.3 - up * 0.9 : 0.3,
        handF: t > EV.lw_minus + 0.5 ? [-80, -380] : [-120, -190], squash: b.squash + (t > t0 && t < t0 + 0.12 ? 0.1 : 0) }); },
    cam: () => [[S0.lawsuit, 300, 1120, 0.26], [EV.lw_court - 0.2, 360, 1120, 0.24], [EV.lw_court + 0.3, 900, 1150, 0.26, 'x'], [EV.lw_minus - 0.1, 880, 1150, 0.26], [EV.lw_minus + 0.4, 560, 1100, 0.18, 'x'], [S1.lawsuit, 560, 1060, 0.12]]
  };
  // ---------------------------------------------------------------- переход: кассовый чек выползает, закрывает кадр, отрывается
  TRANS_IN.lawsuit = { a: 0.3, b: 0.35, runA: 1, fx(k, t, A, B) {
    const up = k < 0.55 ? sm(k / 0.55) : 1, off = k < 0.55 ? 0 : sm((k - 0.55) / 0.45); drawBuf(k < 0.55 ? A : B, 1, 540, 960);
    scr(() => { const top = lerp(2000, -100, up) - off * 2300, x0 = 80, x1 = 1000; const p = rect(x0, top, x1 - x0, 2100, { wash: '#fbfaf4', washA: 1, w: 3, col: '#8a8478', key: 2900 });
      for (let i = 0; i < 40; i++) { const y = top + 80 + i * 52; if (y > 2000) break; pencil([[x0 + 60, y], [x0 + 60 + ((i * 37) % 500) + 120, y]], { w: 4, col: '#4a4a4a', a: 0.55, pass2: false, gap: false }); txt(((i * 7919) % 900 / 100 + 1).toFixed(2), x1 - 90, y, 30, { font: 'Osw', col: '#4a4a4a', a: 0.7 }); }
      txt('ИТОГО: $10 000 000', 540, top + 80 + 41 * 52 > 2000 ? Math.min(1800, top + 1900) : top + 1900, 60, { font: 'Osw', col: '#d9482b' });
      const zz = []; for (let i = 0; i <= 30; i++) zz.push([x0 + i * (x1 - x0) / 30, top + 2100 + (i % 2 ? 20 : 0)]); pencil(zz, { w: 3, col: '#8a8478', pass2: false }); });
  } };
})();
