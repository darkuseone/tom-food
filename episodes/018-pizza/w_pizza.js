/* 018 — `pizza` (ТОМ-МАЛЫШ, раз за ролик): «Улика третья: пиццу с томатом, моцареллой и базиликом описали за двадцать лет до визита.» Микромир на
   гигантской маргарите, которая лежит на раскрытой книге «Обычаи и нравы Неаполя» 1866 года: Том-малыш в шапочке пиццайоло шагает по томатной
   равнине, моцарелла — мягкие белые холмы-подушки, листья базилика — зелёные зонтики-деревья, бортик вдали — горная гряда в «леопардовых» подпалинах,
   капли масла — золотые озёрца с бликами, из пузырей пар столбами. За бортиком — страница книги стеной с гравюрой и словами pomodoro / mozzarella /
   basilico. Главный свет — тёплая кухонная лампа сверху-слева (пучок сквозь пар), блики на соусе. По словам: «Улика третья» — бирка УЛИКА №3;
   «томатом» — Том-малыш шлёпает по соусу, брызги, слово pomodoro подсвечено красным; «моцареллой» — прыгает на моцарелле как на батуте; «базиликом» —
   срывает лист базилика и держит как зонт; «двадцать лет до визита» — на странице лента «1866 → 1889», между ними «−23 года». Пауза-гэг: пузырь
   корочки раздувается под Томом-малышом и лопается «ПУФ!» — Том подлетает и мягко шлёпается на моцареллу. Переход В сцену: кадр подбрасывают, как тесто, —
   он раскручивается кругом и улетает вверх в облаке муки. */
(() => {
  EV.pz_clue = wtw('s6', 'Улика');
  EV.pz_tom = wtw('s6', 'томатом,');
  EV.pz_mozz = wtw('s6', 'моцареллой');
  EV.pz_basil = wtw('s6', 'базиликом');
  EV.pz_years = wtw('s6', 'двадцать');
  EV.pz_gag = LE('s6') + 0.05;
  EV.pz_pop = EV.pz_gag + 0.45;
  SHAKES.push([EV.pz_pop, 0.2, 9]);
  KEYW.push('томатом,', 'базиликом');

  function page(t) {                                                    // страница книги стеной, гравюра, слова, лента лет
    vgrad(-900, 900, ['#5a3a20', '#a8784a', '#e8c890']); glow(-200, -700, 500, 'rgba(255,230,170,1)', 0.35);
    const p = blob([[-900, 700], [-880, -500], [-200, -560], [500, -520], [1300, -560], [1400, 700]], { wash: '#f2e8cc', washA: 1, w: 3, col: '#5a4a2a', key: 18800 }); shadeG(p.path, 0, 700, 0, -560, '#c8b080', 0.35);
    for (let i = 0; i < 16; i++) pencil([[-760, -420 + i * 60], [-160 - (i % 3) * 60, -424 + i * 60]], { w: 4, col: '#8a7a5a', a: 0.5, pass2: false });
    rect(-60, -470, 460, 380, { wash: '#e0d4b0', washA: 1, w: 2, col: '#3a2a1a' }); for (let i = 0; i < 14; i++) pencil([[-50 + i * 32, -460], [-60 + i * 32, -100]], { w: 1.2, col: '#5a4a2a', a: 0.25, pass2: false }); human(170, -110, 0.9, t, { body: '#efe8d8', legs: '#4a4a4a', hair: '#2a1a0a', face: 'smile', armL: 'hold', armR: 'up', seed: 18801 }); stufa(80, -380, 0.6, t, 18802); txt('IL PIZZAIUOLO', 170, -60, 26, { font: 'Osw', col: '#3a2a1a' });
    txt('USI E COSTUMI DI NAPOLI', 800, -470, 40, { font: 'Osw', col: '#3a2a1a' }); txt('1866', 800, -410, 50, { font: 'Osw', col: '#8a1a0e' });
    const W3 = [['pomodoro', EV.pz_tom, '#e8442a'], ['mozzarella', EV.pz_mozz, '#ffffff'], ['basilico', EV.pz_basil, '#4aa83a']]; W3.forEach(([w, t0, c], i) => { const y = -320 + i * 80, k = t > t0 ? sm(clamp((t - t0) / 0.3)) : 0; if (k > 0) rect(560, y - 44, 420 * k, 60, { wash: c, washA: 0.55, line: false }); txt(w, 770, y, 54, { font: 'Hand', col: '#2a1a4a' }); });
    if (t > EV.pz_years - 0.1) { const k = sm(clamp((t - EV.pz_years + 0.1) / 0.6)); push(560, -60, 1); pencil([[0, 0], [700 * k, 0]], { w: 8, col: '#3a2a1a', pass2: false }); ell(0, 0, 20, 20, { wash: '#3a2a1a', washA: 1, line: false }); txt('1866', 0, -30, 44, { font: 'Osw', col: '#3a2a1a' }); if (k > 0.9) { ell(700, 0, 20, 20, { wash: '#c8221a', washA: 1, line: false }); txt('1889', 700, -30, 44, { font: 'Osw', col: '#c8221a' }); txt('−23 года', 350, 60, 50, { font: 'Hand', col: '#8a1a0e' }); } pop(); }
  }
  function crust(t) {                                                   // бортик-гряда в подпалинах
    const pts = [[-900, 640]]; for (let i = 0; i <= 24; i++) pts.push([-900 + i * 100, 420 - Math.abs(Math.sin(i * 1.3)) * 120 - (i % 3) * 30]); pts.push([1500, 640]); const c = shape(pts, { wash: PZ.crust, washA: 1, w: 3, col: PZ.char, key: 18810 }); shadeG(c.path, 0, 300, 0, 640, '#f8d8a0', 0.45); shadeG(c.path, 0, 640, 0, 420, PZ.crustD, 0.3);
    const r = rng(18811); for (let i = 0; i < 30; i++) { const x = -880 + r() * 2360, y = 440 + r() * 160; ell(x, y, 14 + r() * 26, 8 + r() * 14, { wash: PZ.char, washA: 0.85, line: false }); } for (let i = 0; i < 10; i++) { const x = -800 + i * 240; pencil(spline([[x, 380], [x + 40, 350], [x + 90, 370]], false, 4), { w: 6, col: '#fff0c8', a: 0.5, pass2: false }); }
  }
  function plain(t) {                                                   // томатная равнина, масло, моцарелла-холмы, базилик-деревья, пар
    const f = rect(-900, 600, 2500, 1700, { wash: PZ.sauce, washA: 1, w: 2, col: PZ.sauceD, key: 18820 }); shadeG(f.path, 0, 600, 0, 900, '#ffb080', 0.3); hatch(f.path, f.bb, { gap: 10, a: 0.12, col: PZ.sauceD, ang: 0.3, key: 18821 });
    const r = rng(18822); for (let i = 0; i < 40; i++) { const x = -880 + r() * 2400, y = 640 + r() * 1100; ell(x, y, 6 + r() * 10, 3 + r() * 5, { wash: i % 3 ? PZ.sauceL : '#7a1408', washA: 0.6, line: false }); }
    for (const [x, y, s] of [[-300, 900, 1], [1080, 1060, 1.2], [120, 760, 0.6]]) { const o = ell(x, y, 120 * s, 30 * s, { wash: PZ.oil, washA: 0.75, w: 1.4, col: '#a87a10' }); ell(x - 30 * s, y - 8 * s, 40 * s, 6 * s, { wash: '#ffffff', washA: 0.7, line: false }); }
    for (const [x, y, s, sd] of [[-480, 820, 1, 1], [820, 760, 0.9, 2], [300, 980, 1.3, 3]]) { const m = blob(ellPts(x, y, 220 * s, 90 * s, 0, 0, 10).map((p, j) => [p[0] + Math.sin(j * 2.1 + sd) * 18 * s, p[1] - (p[1] < y ? 40 * s : 0)]), { wash: PZ.mozz, washA: 1, w: 2.4, col: PZ.mozzD, key: 18830 + sd }); shadeG(m.path, x, y + 90 * s, x, y - 120 * s, '#d8b878', 0.45); ell(x - 60 * s, y - 70 * s, 70 * s, 18 * s, { wash: '#ffffff', washA: 0.8, line: false }); pencil(spline([[x - 160 * s, y + 40 * s], [x, y + 70 * s], [x + 160 * s, y + 40 * s]], false, 5), { w: 6, col: '#ecd8a8', a: 0.6, pass2: false }); }
    for (const [x, y, s, rot] of [[-700, 1000, 3.2, -0.2], [1250, 900, 3.6, 0.25], [640, 700, 2, 0.1]]) { push(x, y, 1); pencil([[0, 0], [0, -160 * s / 3]], { w: 10, col: PZ.basilD }); pop(); basilLeaf(x, y - 120 * s / 3, s, rot + Math.sin(t * 1.5 + x) * 0.05, 18840 + x); }
    for (let i = 0; i < 3; i++) steamWisps(-400 + i * 600, 900, 2, t, 3, 18850 + i * 7, 0.35);
  }
  function bubble(t) {                                                  // пузырь корочки под Томом-малышом: раздувается и лопается
    if (t < EV.pz_gag) return; const k = clamp((t - EV.pz_gag) / 0.45), popd = t > EV.pz_pop;
    if (!popd) { const b = blob(ellPts(560, 1560, 140 + 60 * k, 40 + 140 * k, 0, 0, 12).map(p => [p[0], Math.min(p[1], 1580)]), { wash: PZ.crust, washA: 1, w: 3, col: PZ.char, key: 18860 }); shadeG(b.path, 520, 1400, 600, 1580, '#f8d8a0', 0.4); for (let i = 0; i < 5; i++) ell(500 + i * 30, 1520 - k * 80 + (i % 2) * 20, 10, 6, { wash: PZ.char, washA: 0.8, line: false }); }
    else { const q = clamp((t - EV.pz_pop) / 0.5); for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283; push(560 + Math.cos(a) * q * 240, 1440 + Math.sin(a) * q * 160 - q * 60, 1, a); rect(-16, -10, 32, 20, { wash: PZ.crust, washA: 1, w: 1.4, col: PZ.char }); pop(); } if (q < 1) { push(560, 1260, 0.6 + q); txt('ПУФ!', 0, 0, 90, { font: 'Osw', col: '#fff4d0', a: 1 - q }); pop(); } steamWisps(560, 1480, 1.6, t, 3, 18861, 0.5 * (1 - q)); }
  }
  function front(t) {                                                   // передний план: край листа базилика сверху, капли соуса, нить моцареллы
    basilLeaf(1260, -140, 5, 2.6, 18870); push(-260, 1980, 1.6); blob([[-200, 0], [-150, -120], [-40, -170], [80, -120], [140, 0]], { wash: PZ.mozz, washA: 1, w: 2.4, col: PZ.mozzD }); pop();
    cheeseString(-300, -200, 200, -260, 120, 14); for (let i = 0; i < 3; i++) { const k = (t * 0.7 + i / 3) % 1; ell(-200 + i * 160, -100 + k * 400, 10, 14, { wash: PZ.mozz, washA: 1 - k, line: false }); }
  }
  WORLD.pizza = (t, u, cat) => {
    lay(10, () => { page(t); });
    lay(4, () => { crust(t); haze('#ffd8a0', 0.06); });
    lay(1.6, () => { plain(t); shaft(-300, -400, 260, 2600, -0.35, 'rgba(255,236,180,1)', 0.14); });
    lay(1, () => { bubble(t); cat(); lightPool(560, 1600, 300, 70, 'rgba(255,220,170,1)', 0.3); castShadow(560, 1600, 140, 120, 0.6, 0.3); });
    lay(0.6, () => { front(t); motes(22, [-300, 200, 1300, 1500], '#fff4e0', t, 18880, { sp: 5, sz: 4, a: 0.45, wob: 4 }); moodDark(560, 1200, 500, 1500, '#2a0808', 0.4); });
    if (t > EV.pz_clue && t < EV.pz_tom + 0.4) lay(1, () => { const k = popK(t, EV.pz_clue, 0.4); push(700, 900, k, Math.sin(t * 3) * 0.06); poly([[-150, -40], [150, -40], [180, 20], [150, 80], [-150, 80]], { wash: '#f4e4b0', washA: 1, w: 2.4, col: '#6a4a10' }); txt('УЛИКА №3', -10, 40, 44, { font: 'Osw', col: '#8a1a0e' }); pop(); });
  };
  DIR.pizza = {
    outfit: 'pizzA', light: { side: -1, rim: '#fff0c0' }, grade: ['#ff9a60', 0.06],
    act: () => [[S0.pizza, 'awe'], [EV.pz_tom, 'grin'], [EV.pz_mozz, 'laugh'], [EV.pz_basil, 'proud'], [EV.pz_years, 'smug'], [EV.pz_gag, 'suspicious'], [EV.pz_pop, 'shock'], [EV.pz_pop + 0.5, 'laugh']],
    pose: (t, u, b) => { const walk = t < EV.pz_mozz, x = t < EV.pz_mozz ? lerp(200, 420, clamp((t - S0.pizza) / (EV.pz_mozz - S0.pizza))) : t < EV.pz_basil ? 420 : lerp(420, 560, clamp((t - EV.pz_basil) / 0.8));
      const bounce = t > EV.pz_mozz && t < EV.pz_basil ? Math.abs(Math.sin((t - EV.pz_mozz) * 9)) * 120 : 0, rise = t > EV.pz_gag && t < EV.pz_pop ? clamp((t - EV.pz_gag) / 0.45) * 150 : 0, fly = t > EV.pz_pop ? Math.sin(clamp((t - EV.pz_pop) / 0.7) * 3.14) * 260 : 0;
      const umb = t > EV.pz_basil; return Object.assign(b, { x, y: 1600 - bounce - rise - fly, s: 0.6, flip: 0, walk: walk ? t * 7 : undefined, rot: t > EV.pz_pop && t < EV.pz_pop + 0.7 ? Math.sin((t - EV.pz_pop) * 9) * 0.4 : 0,
        look: t < EV.pz_basil ? [0.6, -0.4] : t < EV.pz_gag ? [0.8, -0.8] : [0, 0.8], hand: umb ? [40, -440] : [140, -260], handF: [-120, -240], tailUp: bounce > 0, squash: b.squash + (bounce > 0 && bounce < 20 ? 0.12 : 0) }); },
    afterCat: (t, u, P) => { if (t > EV.pz_basil) basilLeaf(P.x + 40 * P.s, P.y - 440 * P.s, 1.4, 0.05 + Math.sin(t * 4) * 0.08, 18890); else if (t > EV.pz_tom && t < EV.pz_mozz) for (let i = 0; i < 6; i++) { const q = ((t - EV.pz_tom) * 2 + i / 6) % 1; ell(P.x - 40 + i * 16, P.y - 10 - q * 80, 8, 8, { wash: PZ.sauce, washA: 1 - q, line: false }); } },
    cam: () => [[S0.pizza, 560, 600, 0.12], [S0.pizza + 0.7, 360, 1200, 0.26, 'x'], [EV.pz_mozz, 420, 1150, 0.26], [EV.pz_basil, 520, 1100, 0.24], [EV.pz_years, 700, 700, 0.22], [EV.pz_gag, 560, 1250, 0.28], [EV.pz_pop, 560, 1150, 0.24], [S1.pizza, 560, 1200, 0.26]]
  };
  // ---------------------------------------------------------------- переход: кадр подбрасывают, как тесто, — крутится кругом и улетает в облаке муки
  TRANS_IN.pizza = { a: 0.35, b: 0.45, runA: 0.6, fx(k, t, A, B) {
    const e = sm(k); drawBuf(B, 1, 540, 960); const R = lerp(1200, 0, e), y = 960 - e * e * 1400; if (R > 2) inCircle(540, y, R, () => drawBuf(A, lerp(1, 0.4, e), 540, y, 1, null, 0, 0, e * 9));
    scr(() => { if (R > 2) pencil(ellPts(540, y, R, R, 0, 0, 48), { w: 20, col: PZ.dough, pass2: false, gap: false }); motes(30, [0, 600, 1080, 1700], '#ffffff', t, 18895, { sp: 120, sz: 6, a: 0.6 * (1 - e) + 0.2, wob: 20 }); });
  } };
})();
