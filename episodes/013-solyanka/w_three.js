/* 013 — `three`: «Правило: в сборной — минимум три вида мяса, в рыбной — три вида рыбы.» ТОМ-МАЛЫШ (раз за ролик) внутри гигантской миски солянки: оранжевое
   море бульона с жирными «глазками», плот — ломтик лимона, на котором Том гребёт каперсом-веслом; вокруг плавают кружки огурцов-кувшинки, кольца маслин-буйки,
   укроп-деревья у берега-сметаны; за бортом миски — гигантский стол трактира и ложка великана. По словам: «три вида» — счётчик 1-2-3, с неба шлёпаются
   колбасный кругляш, кубик ветчины, кусок говядины (волна); «рыбной» — из бульона выпрыгивают три рыбы с номерами; немая пауза — огромная маслина плюхается,
   плот качает, Том хватается за кольцо маслины. Переход В сцену: ломтик лимона — дольки поворачиваются и открывают новый кадр. */
(() => {
  EV.th_rule = wtw('s5', 'Правило:');
  EV.th_meat = wtw('s5', 'минимум');
  EV.th_fish = wtw('s5', 'рыбной');
  EV.th_gag = LE('s5');
  SHAKES.push([EV.th_meat + 0.4, 0.15, 8], [EV.th_gag + 0.2, 0.2, 10]);
  KEYW.push('мяса,', 'рыбы.');
  const wave = (t, x) => Math.sin(t * 2 + x / 140) * 10 + (t > EV.th_gag ? Math.sin((t - EV.th_gag) * 9 + x / 80) * 40 * Math.exp(-(t - EV.th_gag) * 2) : 0);

  function beyond(t) {                                                  // за бортом: гигантский трактир размыт — тёплый свет, ложка великана
    vgrad(-900, 1100, ['#3a2214', '#7a4a24', '#a8743a']); glow(300, -200, 700, 'rgba(255,210,140,1)', 0.35); for (let i = 0; i < 6; i++) glow(-200 + i * 300, -400 + (i % 2) * 120, 120, 'rgba(255,220,150,1)', 0.35);
    push(900, 200, 2.6, 0.3); pencil([[0, 0], [0, -700]], { w: 34, col: '#c8ccd2' }); const sp = ell(0, 120, 110, 150, { wash: '#d8dce0', washA: 1, w: 4, col: '#4a4e54' }); metalG(sp.path, -30, 90, 160, '#ffffff', '#b8bcc4', '#5a5e66'); pop();
  }
  function rim(t) {                                                     // борт мельхиоровой миски — горизонт
    const r = ell(540, 1200, 1500, 520, { line: true, w: 90, col: '#c8ccd2' }); pencil(ellPts(540, 1200, 1545, 545, 0, 1, 80).slice(40, 80), { w: 10, col: '#ffffff', a: 0.7, pass2: false }); pencil(ellPts(540, 1200, 1455, 475, 0, 1, 80).slice(40, 80), { w: 8, col: '#5a5e66', a: 0.6, pass2: false });
  }
  function sea(t) {                                                     // бульонное море: волны, жирные глазки, кувшинки-огурцы, буйки-маслины, сметанный берег с укропом
    const s = shape([[-600, 760], [1700, 760], [1700, 2400], [-600, 2400]], { wash: SL.broth, washA: 1, line: false }); shadeG(s.path, 0, 2100, 0, 760, SL.brothD, 0.4);
    for (let i = 0; i < 14; i++) { const y = 800 + i * 70 + i * i * 3; pencil(Array.from({ length: 30 }, (_, j) => [-600 + j * 80, y + wave(t, j * 80) * (0.3 + i * 0.05)]), { w: 3 + i * 0.2, col: SL.brothL, a: 0.4, pass2: false }); }
    const r = rng(13600); for (let i = 0; i < 30; i++) { const x = -500 + r() * 2100, y = 820 + Math.pow(r(), 1.4) * 1200, sz = 10 + (y - 800) / 30; ell(x, y + wave(t, x) * 0.5, sz, sz * 0.4, { wash: SL.oil, washA: 0.7, w: 1, col: '#c86a1a', a: 0.6 }); }
    for (let i = 0; i < 6; i++) { const x = -300 + i * 320, y = 980 + (i % 3) * 160; push(x, y + wave(t, x), 2.4 + (y - 900) / 300); pickleS(0, 0, 1, 0, { slice: 1 }); pop(); }
    for (let i = 0; i < 4; i++) { const x = 60 + i * 300, y = 900 + (i % 2) * 120; push(x, y + wave(t, x), 2.2); oliveS(0, 0, 14, { ring: 1 }); pop(); }
    const sh = blob([[-600, 780], [-200, 740], [100, 770], [140, 820], [-200, 860], [-600, 880]], { wash: SL.sour, washA: 1, w: 2, col: '#c8c0b0' }); for (let i = 0; i < 6; i++) { const x = -500 + i * 110; pencil([[x, 790], [x + 10, 600]], { w: 4, col: SL.dill, pass2: false }); for (let k = 0; k < 6; k++) pencil([[x + 6, 620 + k * 26], [x + 6 + (k % 2 ? 40 : -40), 600 + k * 26]], { w: 2, col: SL.dill, pass2: false }); }
  }
  function drops(t) {                                                   // три мяса шлёпаются по счёту, три рыбы прыгают, огромная маслина на паузе
    const meats = [(x, y) => { ell(x, y, 90, 34, { wash: SL.saus, washA: 1, w: 2.4, col: '#5a1a1a' }); for (let q = 0; q < 8; q++) ell(x - 50 + q * 14, y - 6 + (q % 2) * 10, 5, 5, { wash: '#f8e8d8', washA: 1, line: false }); },
      (x, y) => { push(x, y, 1, 0.3); const c = rect(-60, -50, 120, 100, { wash: SL.ham, washA: 1, w: 2.4, col: '#8a3a2a' }); poly([[-60, -50], [-30, -80], [90, -80], [60, -50]], { wash: '#f4b8a8', washA: 1, w: 2 }); pop(); },
      (x, y) => { blob([[x - 80, y], [x - 60, y - 50], [x + 30, y - 60], [x + 90, y - 20], [x + 70, y + 30], [x - 40, y + 30]], { wash: '#7a3a22', washA: 1, w: 2.4, col: '#2a0a04' }); for (let q = 0; q < 4; q++) pencil([[x - 50 + q * 30, y - 40], [x - 40 + q * 30, y + 20]], { w: 2, col: '#4a1a0a', pass2: false }); }];
    for (let i = 0; i < 3; i++) { const t0 = EV.th_meat + 0.15 + i * 0.35; if (t < t0 - 0.4) continue; const q = clamp((t - t0 + 0.4) / 0.4), x = [150, 900, 300][i], y = lerp(-200, [1080, 1060, 1500][i], q * q) + (q >= 1 ? wave(t, x) : 0); meats[i](x, y); if (q >= 1 && t < t0 + 0.6) { const k = (t - t0) / 0.6; for (let j = 0; j < 8; j++) { const a = -Math.PI * j / 7; ell(x + Math.cos(a) * 120 * k, y + Math.sin(a) * 120 * k + k * k * 200, 10, 10, { wash: SL.broth, washA: 1 - k, line: false }); } } if (q >= 1) txt(String(i + 1), x, y - 90, 70, { font: 'Osw', col: '#fff4d0' }); }
    for (let i = 0; i < 3; i++) { const t0 = EV.th_fish + 0.15 + i * 0.3, q = (t - t0) / 0.9; if (q < 0 || q > 1) continue; const x = 220 + i * 300 + q * 120, y = 1100 - Math.sin(q * Math.PI) * 420; push(x, y, 1.2, -1 + q * 2); const f = blob([[-90, 0], [-40, -34], [40, -30], [80, 0], [40, 28], [-40, 30]], { wash: ['#f0a080', '#8a98a8', '#a8b088'][i], washA: 1, w: 2, col: '#2a3a4a' }); poly([[80, 0], [130, -36], [124, 36]], { wash: ['#e0907a', '#7a8898', '#98a078'][i], washA: 1, w: 1.6 }); ell(-60, -6, 7, 7, { wash: '#1a1a1a', washA: 1, line: false }); pop(); txt(String(i + 1), x, y - 80, 60, { font: 'Osw', col: '#fff4d0' }); }
    if (t > EV.th_gag - 0.3) { const q = clamp((t - EV.th_gag + 0.3) / 0.3), y = lerp(-300, 980, q * q); push(820, y + (q >= 1 ? wave(t, 820) : 0), 7.5); oliveS(0, 0, 18); pop(); }
  }
  function raft(t) {                                                    // плот — ломтик лимона под Томом
    const x = 540, y = 1360 + wave(t, 540), rot = Math.sin(t * 2) * 0.05 + (t > EV.th_gag ? Math.sin((t - EV.th_gag) * 9) * 0.25 * Math.exp(-(t - EV.th_gag) * 2) : 0);
    push(x, y, 1, rot); ctx.save(); ctx.scale(1, 0.38); lemonSlice(0, 0, 230, 0); ctx.restore(); const side = shape([[-230, 0], [230, 0], [226, 24], [-226, 24]], { wash: '#e8c020', washA: 1, w: 2, col: '#8a6a08' }); pop();
  }
  WORLD.three = (t, u, cat) => {
    lay(10, () => { beyond(t); });
    lay(4, () => { rim(t); haze('#ffb060', 0.08); glow(540, 700, 700, 'rgba(255,200,120,1)', 0.25); rays(300, -300, 1.2, 0.4, 2000, 'rgba(255,230,170,1)', 0.12, 5, t); });
    lay(1.3, () => { sea(t); drops(t); raft(t); });
    lay(1, () => { cat(); });
    lay(0.6, () => { for (let i = 0; i < 3; i++) { const q = (t * 0.35 + i / 3) % 1; pencil(spline([[100 + i * 400, 1900], [80 + i * 400 + Math.sin(q * 6) * 40, 1900 - q * 600], [100 + i * 400, 1900 - q * 1100]], false, 5), { w: 30, col: '#ffffff', a: 0.15 * (1 - q), pass2: false }); } motes(40, [-100, 300, 1200, 1900], '#ffe0b0', t, 13610, { sp: 10, sz: 5, a: 0.45, wob: 2 }); });
  };
  DIR.three = {
    outfit: 'traktirA', light: { side: -1, rim: '#ffd890' }, grade: ['#ffa050', 0.1],
    act: () => [[S0.three, 'proud'], [EV.th_meat, 'awe'], [EV.th_meat + 0.5, 'shock'], [EV.th_fish, 'laugh'], [EV.th_gag, 'scared'], [EV.th_gag + 0.4, 'grin']],
    pose: (t, u, b) => { const y = 1360 + wave(t, 540) - 4, gag = t > EV.th_gag; return Object.assign(b, { x: 540, y, s: 0.58, flip: 1, rot: Math.sin(t * 2) * 0.05 + (gag ? Math.sin((t - EV.th_gag) * 9) * 0.2 * Math.exp(-(t - EV.th_gag) * 2) : 0),
      look: t > EV.th_fish && !gag ? [0.4, -0.7] : t > EV.th_meat ? [0.3, -0.6] : [0.4, 0.2], hand: gag ? [200, -300] : [150, -200 + Math.sin(t * 5) * 40], handF: gag ? [120, -360] : [130, -160 + Math.cos(t * 5) * 40], prop: gag ? undefined : 'pickleP', propAng: 1.2 + Math.sin(t * 5) * 0.4, tailUp: t > EV.th_fish }); },
    cam: () => [[S0.three, 540, 1000, 0.0], [S0.three + 0.8, 540, 1260, 0.3, 'x'], [EV.th_meat, 560, 1100, 0.12], [EV.th_fish, 600, 1080, 0.12], [EV.th_gag, 600, 1200, 0.24], [S1.three, 580, 1260, 0.3]]
  };
  // ---------------------------------------------------------------- переход: дольки лимона поворачиваются и открывают новый кадр
  TRANS_IN.three = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const e = sm(k), N = 9;
    for (let i = 0; i < N; i++) { const a0 = i / N * 6.283 + e * 2, a1 = a0 + 6.283 / N * e; const P = new Path2D(); P.moveTo(540, 960); P.arc(540, 960, 2400, a0, a1); P.closePath(); inPath(P, () => drawBuf(B, 1, 540, 960)); }
    scr(() => { if (e < 0.98) { for (let i = 0; i < N; i++) { const a = i / N * 6.283 + e * 2; pencil([[540, 960], [540 + Math.cos(a) * 1600, 960 + Math.sin(a) * 1600]], { w: 14 * (1 - e) + 2, col: SL.lemonL, a: 0.9, pass2: false, gap: false }); } ell(540, 960, 60 * (1 - e) + 10, 60 * (1 - e) + 10, { wash: SL.lemonL, washA: 1, line: false }); } });
  } };
})();
