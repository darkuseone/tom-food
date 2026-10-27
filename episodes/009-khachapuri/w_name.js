/* 009 — `name`: «Сначала имя: "хачо" — творог, "пури" — хлеб. Хлеб с творогом — и всё.» Старая пекарня в Кутаиси: кирпичная стена, круглая глиняная печь тоне
   с огнём, на шесте висят лодочки шоти, пекарь-бабушка месит тесто, внук носит доску. На «творог,» слева выезжает вывеска ХАЧО = ТВОРОГ с миской творога, на «хлеб.»
   справа — ПУРИ = ХЛЕБ с шоти; на «Хлеб с творогом» вывески съезжаются, хлопок муки — и между ними круглый хачапури; «и всё.» — Том-пекарь разводит лапами.
   Переход В сцену: сыр тянется нитями — прошлый кадр сползает вниз на сырных нитях. */
(() => {
  EV.nm_cheese = wtw('s1', 'творог,');
  EV.nm_bread = wtw('s1', 'хлеб.');
  EV.nm_join = wtw('s1', 'творогом');
  EV.nm_all = wtw('s1', 'всё.');
  SHAKES.push([EV.nm_join + 0.25, 0.2, 9]);
  KEYW.push('творогом');

  function bakery(t) { vgrad(-600, 1500, ['#b8784a', '#a8683e', '#8a5432']); for (let r = 0; r < 26; r++) for (let c = 0; c < 9; c++) { const x = -260 + c * 180 + (r % 2) * 90, y = -300 + r * 62; rect(x, y, 170, 54, { wash: (r + c) % 3 ? '#b4704a' : '#a4603a', washA: 0.5, w: 1.2, col: '#6a3a1e', a: 0.5 }); }
    rect(-300, 560, 1700, 40, { wash: '#6a4026', washA: 1, w: 2, col: '#2a1408' }); pencil([[-100, 160], [1200, 160]], { w: 8, col: '#5a3a1a' }); for (let i = 0; i < 8; i++) { push(-40 + i * 150, 196 + (i % 2) * 8, 0.8, 1.5 + (i % 2) * 0.1); shotiBread(0, 0, 1); pop(); pencil([[-40 + i * 150, 160], [-40 + i * 150, 180]], { w: 2, col: '#3a2a1a', pass2: false }); }
    push(150, 1220, 1); ell(0, 0, 200, 60, { wash: '#c88a5a', washA: 1, w: 3, col: '#5a2a10', key: 10600 }); ell(0, -6, 150, 40, { wash: '#2a0a04', washA: 1, w: 2 }); glow(0, -10, 220, 'rgba(255,150,60,1)', 0.5 + Math.sin(t * 7) * 0.08); for (let i = 0; i < 6; i++) { const r = rng(10601 + i), k = (t * 1.2 + r()) % 1; ell(-80 + r() * 160, -20 - k * 160, 4, 4, { wash: '#ffb040', washA: 1 - k, line: false }); } pop(); }
  function people(t) { human(330, 1340, 1.05, t, { body: '#3a3a5a', hair: '#c8c8c8', face: t > EV.nm_join ? 'grin' : 'smile', armL: 'hold', armR: (Math.floor(t * 3) % 2) ? 'hold' : 'down', seed: 1060, long: 1, hat: 'scarf', hatCol: '#2a2a2a', look: 0.4 });
    rect(250, 1250, 240, 30, { wash: '#e8d0a0', washA: 1, w: 2, col: '#6a4a1a' }); ell(370, 1240, 70, 26, { wash: '#f6ecd4', washA: 1, w: 2, col: '#c8b088' });
    const wk = (t * 0.25) % 1; human(lerp(-120, 1200, wk), 1300, 0.95, t, { body: '#7a8a5a', hair: '#3a2a1a', face: 'smile', armL: 'up', armR: 'up', seed: 1061, look: 0.5 }); push(lerp(-120, 1200, wk), 1300 - 330 * 0.95 - 40, 0.6); shotiBread(-50, 0, 1); shotiBread(50, -10, 1); pop(); }
  function sign(x, y, k, word, mean, col, kind, t) { if (k <= 0) return; push(x, y, k, (word === 'ХАЧО' ? -0.05 : 0.05)); rect(-170, -110, 340, 220, { wash: '#f6ecd4', washA: 1, w: 6, col, key: 10610 + (kind === 'cheese' ? 0 : 1) });
    txt('«' + word + '»', 0, -50, 62, { font: 'Osw', col }); txt('= ' + mean, 0, 30, 46, { font: 'Osw', col: '#2a1a0a' });
    if (kind === 'cheese') { ell(0, 80, 60, 20, { wash: '#7a9ac8', washA: 1, w: 2, col: '#2a3a6a' }); for (let i = 0; i < 6; i++) ell(-30 + i * 12, 68 - (i % 2) * 6, 12, 8, { wash: '#fbf8ee', washA: 1, w: 1, col: '#c8c0a8' }); } else shotiBread(0, 80, 0.6); pop(); }
  function signs(t) { const j = clamp((t - EV.nm_join) / 0.3), jj = sm(j); const lx = lerp(290, 470, jj), rx = lerp(700, 520, jj), fade = j >= 1 ? 0 : 1;
    if (fade) { sign(lx, 880, popK(t, EV.nm_cheese, 0.35), 'ХАЧО', 'ТВОРОГ', '#2a5a9a', 'cheese', t); sign(rx, 880, popK(t, EV.nm_bread, 0.35), 'ПУРИ', 'ХЛЕБ', '#a8422a', 'bread', t); }
    if (j > 0.6) { const k = popK(t, EV.nm_join + 0.25, 0.4); imeruli(500, 920, 0.95 * k, t); if (t < EV.nm_join + 1) { const q = clamp((t - EV.nm_join - 0.25) / 0.7); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; ell(500 + Math.cos(a) * 200 * q, 900 + Math.sin(a) * 120 * q, 40 * (1 - q) + 6, 26 * (1 - q) + 4, { wash: '#fbf8f0', washA: 0.8 * (1 - q), line: false }); } }
      if (t > EV.nm_join + 0.3) bubbleTag('ХАЧАПУРИ', 500, 760, t, EV.nm_join + 0.35, '#d9482b', 46, -0.04); } }
  function table(t) { rect(-300, 1460, 1700, 600, { wash: '#a87448', washA: 1, w: 3, col: '#3a2010', key: 10620 }); for (let i = 0; i < 16; i++) { const r = rng(10621 + i); ell(r() * 1080, 1490 + r() * 60, 30 + r() * 30, 7, { wash: '#fbf8f0', washA: 0.5, line: false }); } }
  WORLD.name = (t, u, cat) => { lay(14, () => bakery(t)); lay(3.4, () => people(t)); lay(2.2, () => signs(t)); lay(1, () => { table(t); cat(); }); };
  DIR.name = {
    outfit: 'chef', light: { side: -1, rim: '#ffc080' }, grade: ['#e88a4a', 0.07],
    act: () => [[S0.name, 'talk'], [EV.nm_cheese, 'proud'], [EV.nm_bread, 'smug'], [EV.nm_join, 'awe'], [EV.nm_all, 'grin']],
    pose: (t, u, b) => { const shrug = t > EV.nm_all - 0.1; return Object.assign(b, { x: 700, y: 1790, s: 1.12, flip: true, look: t < EV.nm_bread ? [-0.7, -0.3] : t < EV.nm_join ? [-0.2, -0.3] : [-0.4, -0.2],
      hand: shrug ? [210, -300] : t > EV.nm_bread ? [160, -380] : [120, -260], handF: shrug ? [-170, -300] : [-90, -230] }); },
    cam: () => [[S0.name, 560, 1120, 0.18], [EV.nm_cheese, 520, 1020, 0.24], [EV.nm_join, 520, 1000, 0.3, 'x'], [S1.name, 540, 1040, 0.28]]
  };
  TRANS_IN.name = { a: 0.15, b: 0.55, runA: 1, fx(k, t, A, B) {                // сыр тянется нитями: прошлый кадр сползает вниз, сверху висят сырные нити
    const q = sm(k), d = q * H; drawBuf(B, 1, 540, 960); drawBuf(A, 1, 540, 960, 1, null, 0, d);
    scr(() => { for (let i = 0; i < 14; i++) { const r = rng(10630 + i), x = 40 + i * 76 + r() * 30, sag = Math.sin(t * 4 + i) * 20; pencil(spline([[x, -10], [x + sag, d * 0.5], [x + r() * 20, d + 4]], false, 6), { w: 10 + r() * 12, col: '#f8e6a0', a: (1 - q * 0.8), pass2: false }); pencil(spline([[x - 3, -10], [x + sag - 3, d * 0.5]], false, 4), { w: 3, col: '#fffbe0', a: (1 - q), pass2: false }); } });
  } };
})();
