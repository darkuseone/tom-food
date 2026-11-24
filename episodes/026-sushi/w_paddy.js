/* 026 — `paddy`: «Давным-давно в Азии рыбу прятали в соль и рис — на месяцы. А рис… потом выбрасывали!» Рисовые террасы Юго-Восточной Азии
   на туманном рассвете: ступени террас с водой-зеркалом, горы в дымке, хижина на сваях с дымком, буйвол с пахарем, пальмы и бамбук. На
   переднем плане — двор у террас: циновка с рыбой, мешок соли, ряд глиняных кувшинов нарэдзуси; крестьяне солят рыбу и трамбуют рис.
   Том (горец в индиговой куртке и конусной шляпе) у кувшина. По словам: «рыбу» — Том поднимает рыбу; «соль» — горсть соли сыплется;
   «рис» — Том трамбует рис в кувшин (разрез-окно со слоями); «месяцы.» — над горами пролетают луны (таймлапс), кувшин покрывается мхом-пузырями;
   «выбрасывали!» — Том опрокидывает кувшин, рис ссыпается, утки бегут его клевать, у Тома в лапе остаётся одна рыба. Главный свет — низкое
   солнце справа (пучок через туман), второй — холодный голубой туман с гор. Переход В сцену: нырок в рисинку — кадр бара сжимается в зерно,
   внутри зерна раскрывается рассвет на террасах, рисинки разлетаются. */
(() => {
  EV.pd_fish = wtw('s1', 'рыбу');
  EV.pd_salt = wtw('s1', 'соль');
  EV.pd_rice = wtw('s1', 'рис');
  EV.pd_moon = wtw('s1', 'месяцы.');
  EV.pd_dump = wtw('s1', 'выбрасывали!');
  SHAKES.push([EV.pd_dump + 0.1, 0.18, 7]);
  KEYW.push('выбрасывали!');
  const tilt = t => sm(clamp((t - EV.pd_dump + 0.15) / 0.4));

  function sky(t) {                                                       // рассветное небо, горы в тумане, луны-таймлапс
    vgrad(-300, 1100, ['#7a9ab8', '#c8d8d0', '#f8e0b8', '#f4c890']);
    glow(880, 300, 260, 'rgba(255,220,150,1)', 0.3); ell(880, 300, 56, 56, { wash: '#fff0c8', washA: 1, line: false });
    if (t > EV.pd_moon - 0.3) { const k = clamp((t - EV.pd_moon + 0.3) / 1.6); for (let i = 0; i < 5; i++) { const q = clamp(k * 5 - i), x = lerp(-100, 1200, q), y = 330 + Math.sin(q * 3.14) * -110; if (q > 0 && q < 1) { ell(x, y, 34, 34, { wash: '#f8f4e0', washA: 0.9, line: false }); ell(x + 10 - i * 8, y - 4, 30, 32, { wash: '#a8b8c8', washA: 0.85, line: false }); } } }
    const r = rng(26700); for (let i = 0; i < 4; i++) sil([[-400, 700], [-200 + i * 120, 420 - i * 30 + r() * 60], [200 + i * 140, 520 - i * 20], [500 + i * 100, 360 + i * 10 + r() * 50], [900 + i * 60, 560], [1300, 440 + i * 30], [1600, 700]], lerpC('#6a8aa0', '#3a5a5a', i / 3), 0.75);
    for (let i = 0; i < 3; i++) ell(((t * 14 + i * 500) % 2000) - 400, 520 + i * 50, 380, 40, { wash: '#f4f0e8', washA: 0.45, line: false });
    for (let i = 0; i < 5; i++) { const x = ((t * 30 + i * 260) % 1600) - 200, y = 240 + i * 30 + Math.sin(t * 3 + i) * 8, f = Math.sin(t * 9 + i) * 10; pencil(spline([[x - 18, y + f], [x - 6, y], [x, y]], false, 3), { w: 2, col: '#2a2a3a', pass2: false }); pencil(spline([[x, y], [x + 6, y], [x + 18, y + f]], false, 3), { w: 2, col: '#2a2a3a', pass2: false }); }
  }
  function terraces(t) {                                                  // ступени террас с водой-зеркалом, хижина на сваях, буйвол, пальмы
    for (let i = 0; i < 7; i++) { const y = 640 + i * 110, a = i * 0.7;
      const top = [[-500, y + Math.sin(a) * 30], [0, y - 20 + Math.cos(a) * 20], [500, y + 10], [1000, y - 30 + Math.sin(a) * 20], [1600, y]];
      const p = shape(top.concat([[1600, y + 100], [-500, y + 100]]), { wash: lerpC('#8ab898', '#5a8a4a', i / 6), washA: 1, w: 1.6, col: '#2a4a2a', key: 26710 + i });
      blob(top.map(([x, yy]) => [x, yy + 10]).concat([[1600, y + 60], [-500, y + 60]]), { wash: lerpC('#c8e0e8', '#a8c8b8', i / 6), washA: 0.8, line: false });
      pencil(top.map(([x, yy]) => [x, yy + 26]), { w: 3, col: '#fff4d8', a: 0.35, pass2: false });
      for (let j = 0; j < 14; j++) { const x = -460 + j * 150 + (i % 2) * 70; pencil([[x, y + 60], [x - 6, y + 34]], { w: 2, col: '#3a7a2a', a: 0.7, pass2: false }); pencil([[x + 8, y + 60], [x + 12, y + 30]], { w: 2, col: '#4a8a3a', a: 0.7, pass2: false }); } }
    push(1000, 760, 0.9); for (const x of [-80, -20, 40, 100]) pencil([[x, 0], [x, -140]], { w: 6, col: '#5a3a1a', pass2: false }); rect(-110, -200, 240, 70, { wash: '#a87a4a', washA: 1, w: 2, col: '#3a2010' }); poly([[-140, -200], [10, -320], [160, -200]], { wash: '#c8a060', washA: 1, w: 2, col: '#4a3010' }); for (let i = 0; i < 8; i++) pencil([[-130 + i * 36, -200], [-120 + i * 34, -240]], { w: 1.4, col: '#8a6a3a', pass2: false });
    for (let i = 0; i < 4; i++) { const ph = (t * 0.3 + i * 0.25) % 1; ell(20 + Math.sin(t + i) * 20, -330 - ph * 200, 20 + ph * 40, 14 + ph * 30, { wash: '#e8e8e0', washA: 0.4 * (1 - ph), line: false }); } pop();
    push(180, 870, 0.7); blob([[-120, 0], [-130, -70], [-60, -100], [80, -96], [130, -60], [120, 0]], { wash: '#4a4a48', washA: 1, w: 2, col: '#1a1a1a' }); pencil(spline([[-130, -80], [-180, -110], [-160, -70]], false, 4), { w: 6, col: '#e8e0d0', pass2: false }); pencil(spline([[-110, -96], [-60, -140], [-80, -90]], false, 4), { w: 6, col: '#e8e0d0', pass2: false }); for (const x of [-90, -50, 60, 100]) pencil([[x, 0], [x + Math.sin(t * 3 + x) * 6, 60]], { w: 10, col: '#3a3a38', pass2: false }); pop();
    human(420, 900, 0.62, t, { body: '#3a4a6a', legs: '#2a2a3a', face: 'calm', armL: 'hold', armR: 'swing', seed: 26720, flip: -1 }); jpHat(420, 900, 0.62, 'conical', null, -1);
    for (const [x, y, s] of [[-200, 900, 1], [1250, 860, 1.1], [1380, 960, 0.9]]) { push(x, y, s); pencil(spline([[0, 0], [10, -200], [-10, -400]], false, 6), { w: 12, col: '#6a5a3a', pass2: false }); for (let i = 0; i < 7; i++) { const a = -2.6 + i * 0.8 + Math.sin(t * 1.4 + i) * 0.06; pencil(spline([[-10, -400], [-10 + Math.cos(a) * 110, -420 + Math.sin(a) * 60], [-10 + Math.cos(a) * 200, -380 + Math.sin(a) * 120]], false, 5), { w: 9, col: '#3a7a3a', pass2: false }); } pop(); }
  }
  function yard(t) {                                                      // двор: крестьяне с рыбой и рисом, кувшины, циновки, утки
    rect(-600, 1180, 2400, 700, { wash: '#a8885a', washA: 1, line: false }); for (let i = 0; i < 30; i++) { const r = rng(26730 + i); ell(-500 + r() * 2000, 1200 + r() * 260, 10 + r() * 14, 4, { wash: '#8a6a3a', washA: 0.6, line: false }); }
    push(300, 1260, 1); rect(-200, -10, 400, 40, { wash: '#d8b870', washA: 1, w: 1.6, col: '#6a4a1a' }); for (let i = 0; i < 8; i++) pencil([[-190 + i * 50, -10], [-190 + i * 50, 30]], { w: 1.2, col: '#8a6a3a', pass2: false }); for (let i = 0; i < 5; i++) fish(-150 + i * 72, 4, 0.55, 0.1, { key: 26731 + i }); pop();
    human(230, 1250, 0.95, t, { body: '#6a3a2a', legs: '#3a2a1a', face: t > EV.pd_dump ? 'shock' : 'smile', armL: 'hold', armR: t > EV.pd_salt && t < EV.pd_rice ? 'up' : 'hold', look: 0.4, seed: 26740 }); jpHat(230, 1250, 0.95, 'kerchief', '#c8443a');
    human(1000, 1250, 1, t, { body: '#2a4a5a', legs: '#2a2a2a', face: t > EV.pd_dump ? 'grin' : 'calm', armL: 'hold', armR: 'hold', look: -0.6, seed: 26741, flip: -1, prop: 'scroll' }); jpHat(1000, 1250, 1, 'conical', null, -1);
    for (let i = 0; i < 4; i++) narezushiJar(820 + i * 90, 1290 - (i % 2) * 10, 0.42, t, { key: 26750 + i * 3 });
    push(1140, 1300, 0.9); blob([[-60, 0], [-70, -80], [-40, -110], [40, -110], [70, -80], [60, 0]], { wash: '#e8dcc0', washA: 1, w: 2, col: '#6a5a3a' }); txt('塩', 0, -44, 44, { font: 'Osw', col: '#5a4a2a' }); ell(0, -112, 42, 12, { wash: '#fbfbf8', washA: 1, w: 1 }); pop();
    if (t > EV.pd_dump) { for (let i = 0; i < 3; i++) { const k = clamp((t - EV.pd_dump - 0.2 - i * 0.15) / 0.8), x = lerp(-150 + i * 60, 260 + i * 40, sm(k)), y = 1330 + i * 20 - Math.abs(Math.sin(t * 12 + i)) * 10; push(x, y, 0.7, 0, -1); blob([[-34, 0], [-40, -30], [-10, -46], [26, -40], [34, -20], [20, 0]], { wash: '#f4f0e8', washA: 1, w: 2, col: '#4a4a4a' }); ell(30, -54, 14, 13, { wash: '#f4f0e8', washA: 1, w: 1.6 }); poly([[42, -54], [60, -50], [42, -46]], { wash: '#f0a020', washA: 1, w: 1 }); pencil([[-6, 0], [-10, 20]], { w: 3, col: '#f0a020', pass2: false }); pencil([[10, 0], [12, 20]], { w: 3, col: '#f0a020', pass2: false }); pop(); } }
  }
  function jar(t) {                                                       // кувшин Тома (герой): разрез со слоями, опрокидывается — рис высыпается
    const k = tilt(t); push(400, 1450, 1.05, -k * 0.85); narezushiJar(0, 0, 1, t, { cut: t > EV.pd_rice - 0.1, open: t > EV.pd_dump - 0.2, key: 26760 }); if (t > EV.pd_moon && t < EV.pd_dump) for (let i = 0; i < 5; i++) { const ph = (t * 0.9 + i * 0.2) % 1; ell(-40 + i * 20, -280 - ph * 60, 6 + ph * 6, 6 + ph * 6, { wash: '#f4f0e0', washA: 0.7 * (1 - ph), w: 1, col: '#a8a090' }); } pop();
    if (t > EV.pd_dump + 0.15) { const q = clamp((t - EV.pd_dump - 0.15) / 0.9); const r = rng(26770); for (let i = 0; i < 46; i++) { const d = r() * q, x = 190 - d * 120 - r() * 70, y = 1260 + d * 230 + r() * 20; ell(x, Math.min(y, 1470), 8, 4, { rot: r() * 3, wash: '#fbf8f0', washA: 1, w: 1, col: '#a8a090' }); } ell(160, 1478, 150 * q, 20 * q, { wash: '#fbf8f0', washA: 1, w: 1.4, col: '#a8a090' }); }
    if (t > EV.pd_salt && t < EV.pd_rice + 0.3) { const r = rng(hsh(FRAME, 26780)); for (let i = 0; i < 18; i++) ell(440 + r() * 60 - 30, 1080 + ((t - EV.pd_salt) * 600 + r() * 120) % 200, 3, 3, { wash: '#ffffff', washA: 0.9, line: false }); }
    castShadow(400, 1455, 220, 80, -0.6, 0.25);
  }
  function front(t) {                                                     // передний план: колосья риса, бамбук, корзина
    push(-60, 1900, 1.4); for (let i = 0; i < 9; i++) { const sw = Math.sin(t * 1.5 + i) * 10; pencil(spline([[i * 26, 0], [i * 24 + sw, -260], [i * 20 + sw * 2, -420 - i * 10]], false, 6), { w: 4, col: '#6a8a2a', pass2: false }); for (let j = 0; j < 6; j++) ell(i * 20 + sw * 2 + 8, -400 - i * 10 + j * 18, 7, 4, { rot: 0.6, wash: '#e8c860', washA: 1, w: 1, col: '#8a6a1a' }); } pop();
    push(1180, 2000, 1.5); for (let i = 0; i < 3; i++) { rect(i * 50, -900, 34, 900, { wash: '#7a9a3a', washA: 1, w: 2, col: '#2a4a1a' }); for (let j = 1; j < 6; j++) pencil([[i * 50, -j * 160], [i * 50 + 34, -j * 160]], { w: 4, col: '#3a5a1a', pass2: false }); } pop();
  }
  WORLD.paddy = (t, u, cat) => {
    lay(26, () => { sky(t); });
    lay(9, () => { terraces(t); haze('#e8f0e8', 0.07); });
    lay(2.8, () => { yard(t); shaft(1000, 300, 380, 1400, 0.45, 'rgba(255,230,170,1)', 0.15); });
    lay(1, () => { lightPool(560, 1460, 650, 120, 'rgba(255,220,160,1)', 0.32); cat(); jar(t); });
    lay(0.65, () => { front(t); motes(18, [-200, 300, 1300, 1500], '#fff8e0', t, 26790, { sp: 4, sz: 3, a: 0.4, wob: 5 }); moodDark(560, 1000, 520, 1500, '#1a2030', 0.35); });
  };
  DIR.paddy = {
    outfit: 'yunA', light: { side: 1, rim: '#ffe0a8' }, grade: ['#f0d0a0', 0.06],
    act: () => [[S0.paddy, 'talk'], [EV.pd_fish, 'proud'], [EV.pd_rice, 'grin'], [EV.pd_moon, 'awe'], [EV.pd_dump - 0.3, 'sideeye'], [EV.pd_dump, 'shock']],
    pose: (t, u, b) => { const k = tilt(t);
      return Object.assign(b, { x: 680, y: 1600, s: 1.15, flip: true, look: t > EV.pd_moon && t < EV.pd_dump ? [0.3, -0.9] : [-0.7, 0.3],
        hand: t < EV.pd_fish ? [150, -230] : t < EV.pd_rice ? [210, -300] : t < EV.pd_dump - 0.2 ? [230, -310] : [240 - k * 30, -330 + k * 60], handF: t > EV.pd_dump ? [-70, -320] : [-90, -220],
        prop: t > EV.pd_fish && t < EV.pd_rice ? 'fishP' : t > EV.pd_dump + 0.3 ? 'fishP' : undefined, propAng: -0.3, tailUp: t > EV.pd_dump }); },
    cam: () => [[S0.paddy, 540, 1000, 0.2], [EV.pd_rice, 560, 1080, 0.26], [EV.pd_moon, 560, 980, 0.24], [EV.pd_dump, 520, 1120, 0.3], [S1.paddy, 520, 1140, 0.32]]
  };
  // ---------------------------------------------------------------- переход: нырок в рисинку — бар сжимается в зерно, внутри зерна рассвет, рисинки разлетаются
  TRANS_IN.paddy = { a: 0.25, b: 0.5, runA: 0.5, fx(k, t, A, B) {
    const e = sm(k); drawBuf(A, 1 + e * 1.4, 540, 960); const rx = lerp(20, 1500, e * e), ry = rx * 0.48;
    scr(() => { const p = pathOf(ellPts(540, 960, rx, ry, -0.5, 0, 48)); ctx.save(); ctx.clip(p); drawBuf(B, lerp(1.6, 1, e), 540, 960); ctx.restore(); pencil(ellPts(540, 960, rx, ry, -0.5, 0, 48), { w: 6 * (1 - e) + 1, col: '#fbf8f0', pass2: false });
      const r = rng(26799); for (let i = 0; i < 24; i++) { const a = r() * 6.28, d = 100 + e * (400 + r() * 900); ell(540 + Math.cos(a) * d, 960 + Math.sin(a) * d, 22 * (1 - e) + 6, 10 * (1 - e) + 3, { rot: a, wash: '#fbf8f0', washA: 1 - e, w: 1, col: '#a8a090' }); } });
  } };
})();
