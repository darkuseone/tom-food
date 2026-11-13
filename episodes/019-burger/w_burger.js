/* 019 — `burger` (ТОМ-МАЛЫШ, раз за ролик; развязка ★): «Разгадка: котлета и имя приплыли из Гамбурга. А булку ей дали американцы.» Микромир — гигантский бургер
   на тарелке посреди ночной кухни-великана: котлета — бурая скала в подпалинах с ручьями сока, сыр стекает водопадом, ломти томата — красные уступы, салат — зелёный
   карниз, булка-купол со звёздами-кунжутинами — вершина. Внизу на тарелке — кетчупово-горчичное озеро, по нему плывёт игрушечный пароходик «HAMBURG». За бургером —
   гигантские бутылки кетчупа и горчицы, брёвна картошки фри, край кружки, кафель кухни; сверху лампа (главный свет, тёплый конус, блики на сыре), из окна — холодная луна.
   Том-малыш в пробковом шлеме (safariA). По словам: «Разгадка» — Том-малыш у подножия котлеты-скалы; «котлета» — лезет по котлете, на вершине котлеты вспыхивает флажок
   Гамбурга и табличка «ИЗ ГАМБУРГА»; «имя» — на сырном уступе лента-баннер «HAMBURG + ER»; «приплыли» — по озеру плывёт пароходик; «А булку» — Том-малыш на вершине
   булки втыкает флажок со звёздами «АМЕРИКА». Пауза-гэг: из гигантской бутылки сверху падает капля кетчупа размером с Тома — «ПЛЮХ!» рядом, брызги, Том-малыш в
   крапинку хохочет. Переход В сцену: кетчуп заливает кадр сверху потёками, сквозь них проступает новая сцена. */
(() => {
  EV.bg_ans = wtw('s7', 'Разгадка:');
  EV.bg_patty = wtw('s7', 'котлета');
  EV.bg_name = wtw('s7', 'имя');
  EV.bg_sail = wtw('s7', 'приплыли');
  EV.bg_bun = wtw('s7', 'булку');
  EV.bg_us = wtw('s7', 'американцы.');
  EV.bg_gag = LE('s7') + 0.05;
  EV.bg_plop = EV.bg_gag + 0.35;
  SHAKES.push([EV.bg_plop, 0.22, 10]);
  KEYW.push('Гамбурга.', 'американцы.');
  const S = 4.6, BX = 540, BY = 1950;                                    // бургер: низ булки (BX, BY), ширина ≈ 2·150·S

  function kitchen(t) {                                                 // (lay 10) кухня-великан: кафель, окно с луной, гигантские бутылки, фри-брёвна, кружка
    vgrad(-200, 2100, ['#1a1420', '#2a2028', '#3a2a24']);
    for (let x = -200; x < 1300; x += 90) for (let y = -200; y < 1200; y += 90) rect(x, y, 88, 88, { wash: ((x + y) / 90) % 2 ? '#2e3a3a' : '#283232', washA: 1, w: 0.8, col: '#1a2020' });
    push(880, 200, 1); const w = rect(-150, -180, 300, 360, { wash: '#0a1430', washA: 1, w: 8, col: '#5a4a3a', key: 20200 }); ctx.save(); ctx.clip(w.path); ell(40, -60, 50, 50, { wash: '#f4f0d8', washA: 1, line: false }); glow(40, -60, 120, 'rgba(210,225,255,1)', 0.3); const r = rng(20201); for (let i = 0; i < 20; i++) ell(-140 + r() * 280, -170 + r() * 340, 2, 2, { wash: '#ffffff', washA: 0.7, line: false }); ctx.restore(); pencil([[0, -180], [0, 180]], { w: 6, col: '#5a4a3a' }); pop();
    sauceBottle(120, 1300, 4.2, -0.08, 'ketchup', 20202); sauceBottle(1000, 1320, 3.6, 0.1, 'mustard', 20203);
    for (let i = 0; i < 5; i++) { push(820 + i * 70, 1500 - (i % 2) * 40, 1, -0.4 + i * 0.18); const f = rect(-22, -260, 44, 260, { wash: '#f4c048', washA: 1, w: 2, col: '#8a5a10' }); shadeG(f.path, 22, 0, -22, 0, '#c88a20', 0.4); for (let q = 0; q < 4; q++) ell(0, -220 + q * 60, 5, 3, { wash: '#fff0b0', washA: 0.8, line: false }); pop(); }
    push(-60, 1500, 1); rect(-160, -360, 320, 360, { wash: '#e8e4dc', washA: 1, w: 3, col: '#3a3a3a' }); pencil(spline([[160, -300], [260, -240], [160, -120]], false, 6), { w: 30, col: '#e8e4dc', pass2: false }); ell(0, -360, 160, 30, { wash: '#3a2010', washA: 1, w: 2 }); txt('TOM', 0, -180, 60, { font: 'Osw', col: '#c81e10' }); pop();
  }
  function plate(t) {                                                   // (lay 1.3) тарелка и озеро кетчупа с горчицей, пароходик
    const p = ell(540, 2000, 900, 160, { wash: '#eef0f2', washA: 1, w: 3, col: '#4a5058', key: 20210 }); shadeG(p.path, 540, 2160, 540, 1840, '#9aa4b0', 0.4); ell(540, 2000, 760, 120, { wash: '#ffffff', washA: 0.4, w: 1.4, col: '#a8b0b8' });
    const lk = blob([[-100, 1990], [40, 1930], [300, 1920], [500, 1960], [380, 2040], [80, 2050]], { wash: BG.ketchup, washA: 1, w: 2, col: '#6a0a04', key: 20211 }); shadeG(lk.path, 0, 1920, 0, 2050, BG.ketchupL, 0.35); for (let i = 0; i < 6; i++) pencil([[-40 + i * 80, 1970 + Math.sin(t * 2 + i) * 6], [10 + i * 80, 1970 + Math.sin(t * 2 + i + 1) * 6]], { w: 3, col: '#ff9a8a', a: 0.6, pass2: false });
    blob([[700, 1990], [860, 1940], [1040, 1960], [1000, 2040], [780, 2040]], { wash: BG.mustard, washA: 1, w: 2, col: '#8a5a08' }); ell(840, 1970, 60, 10, { wash: '#fff8a0', washA: 0.7, line: false });
    if (t > EV.bg_sail - 0.3) { const q = clamp((t - EV.bg_sail + 0.3) / 1.6), x = lerp(-60, 420, q); push(x, 1960 + Math.sin(t * 4) * 6, 0.16, Math.sin(t * 3) * 0.05); steamer(0, 0, 1, t, { key: 20212, name: 'HAMBURG' }); pop(); for (let i = 0; i < 4; i++) pencil([[x - 80 - i * 30, 1972 + i * 4], [x - 60 - i * 30, 1972 + i * 4]], { w: 3, col: '#ffb0a0', a: 0.7, pass2: false }); }
  }
  function giant(t) {                                                   // (lay 1.05) гигантский бургер: скала-котлета, сырный водопад, уступы, купол, флажки, баннер
    burger(BX, BY, S, t, { key: 20220, shadow: false });
    for (let i = 0; i < 4; i++) { const x = 140 + i * 230, q = (t * 0.9 + i * 0.27) % 1; ell(x, 1540 + q * 260, 10, 18, { wash: BG.cheese, washA: 1 - q * 0.6, line: false }); }
    for (let i = 0; i < 3; i++) { const x = 300 + i * 260, q = (t * 0.6 + i * 0.3) % 1; ell(x, 1760 + q * 180, 8, 12, { wash: '#7a3a14', washA: 0.9 - q * 0.6, line: false }); }
    if (t > EV.bg_patty) { const q = popK(t, EV.bg_patty + 0.5, 0.35); push(260, 1545, q); flagHH(0, 0, 1.6, t); pop(); if (q > 0) { push(240, 1660, q); rect(-130, -32, 260, 64, { wash: '#f4efe0', washA: 0.95, w: 2.4, col: '#c81e14' }); txt('ИЗ ГАМБУРГА', 0, 12, 34, { font: 'Osw', col: '#c81e14' }); pop(); } }
    if (t > EV.bg_name) { const k = clamp((t - EV.bg_name) / 0.5); push(640, 1490, 1, -0.04); const bn = poly([[-260 * k, -40], [260 * k, -40], [230 * k, 0], [260 * k, 40], [-260 * k, 40], [-230 * k, 0]], { wash: '#2a3a7a', washA: 1, w: 2.4, col: '#0a1030' }); if (k > 0.6) { txt('HAMBURG', -50, 14, 46, { font: 'Osw', col: '#f4efe0' }); txt('+ER', 150, 14, 46, { font: 'Osw', col: '#ffd040' }); } pop(); }
    if (t > EV.bg_us) { const q = popK(t, EV.bg_us, 0.35); push(600, 830, q); pencil([[0, 0], [0, -200]], { w: 7, col: '#4a3a2a', pass2: false }); const f = poly([[0, -200], [150 + Math.sin(t * 5) * 8, -190], [150 + Math.sin(t * 5 + 1) * 8, -110], [0, -120]], { wash: '#f4ece0', washA: 1, w: 2, col: '#3a2a1a' }); ctx.save(); ctx.clip(f.path); for (let k = 0; k < 5; k++) rect(0, -200 + k * 18, 160, 9, { wash: '#b81e1e', washA: 1, line: false }); rect(0, -200, 60, 46, { wash: '#2a3a7a', washA: 1, line: false }); ctx.restore(); pop(); push(600, 760, q); rect(-120, -30, 240, 60, { wash: '#f4efe0', washA: 0.95, w: 2.4, col: '#2a3a7a' }); txt('АМЕРИКА', 0, 12, 34, { font: 'Osw', col: '#2a3a7a' }); pop(); }
    if (t > EV.bg_gag) { const k = clamp((t - EV.bg_gag) / 0.35); if (t < EV.bg_plop) { const y = lerp(-300, 760, k * k); blob([[860, y - 120], [900, y - 20], [930, y + 60], [860, y + 110], [790, y + 60], [820, y - 20]], { wash: BG.ketchup, washA: 1, w: 2.4, col: '#6a0a04' }); ell(840, y + 30, 16, 30, { wash: BG.ketchupL, washA: 0.8, line: false }); }
      else { const q = clamp((t - EV.bg_plop) / 0.5); blob([[740, 860], [780, 800], [880, 790], [960, 820], [990, 870], [860, 890]], { wash: BG.ketchup, washA: 1, w: 2.4, col: '#6a0a04' }); for (let i = 0; i < 12; i++) { const a = -3.0 + i * 0.25; ell(860 + Math.cos(a) * q * 300, 840 + Math.sin(a) * q * 200 + q * q * 200, 12, 10, { wash: BG.ketchup, washA: 1 - q * 0.5, line: false }); } if (q < 1) { push(900, 620, 0.7 + q * 0.5); txt('ПЛЮХ!', 0, 0, 90, { font: 'Osw', col: '#fff0c0', a: 1 - q }); pop(); } } }
  }
  function front(t) {                                                   // передний план: зубочистка с оливкой, край булки сбоку, крошки кунжута
    push(-60, 300, 1.6, 0.3); pencil([[0, -500], [0, 600]], { w: 12, col: '#e8d0a0', pass2: false }); ell(0, 80, 60, 50, { wash: '#4a5a1a', washA: 1, w: 2.4, col: '#1a2a04' }); ell(-10, 70, 20, 16, { wash: '#c81e14', washA: 1, line: false }); pop();
    push(1250, 1900, 1.6); blob([[-200, 0], [-160, -200], [0, -260], [160, -200], [200, 0]], { wash: BG.bun, washA: 1, w: 3, col: BG.bunD }); for (let i = 0; i < 6; i++) ell(-120 + i * 50, -150 - (i % 2) * 40, 14, 7, { wash: BG.sesame, washA: 1, w: 1 }); pop();
  }
  WORLD.burger = (t, u, cat) => {
    lay(10, () => { kitchen(t); haze('#3a2a20', 0.08); });
    lay(1.3, () => { plate(t); });
    lay(1.05, () => { giant(t); });
    lay(1, () => { cat(); lightPool(540, 1300, 700, 300, 'rgba(255,220,160,1)', 0.2); castShadow(PX, PY, 120, 100, 0.5, 0.3); });
    lay(0.6, () => { front(t); shaft(540, -300, 300, 2400, 0, 'rgba(255,225,160,1)', 0.14); motes(24, [-200, 200, 1300, 1900], '#fff0c8', t, 20230, { sp: 6, sz: 4, a: 0.5, wob: 6 }); moodDark(540, 1200, 500, 1500, '#140808', 0.45); });
  };
  let PX = 120, PY = 1960;
  const PATH = () => [[S0.burger, 120, 1960], [EV.bg_patty, 150, 1960], [EV.bg_patty + 0.9, 210, 1545], [EV.bg_name, 330, 1500], [EV.bg_sail, 420, 1450], [EV.bg_bun, 480, 1320], [EV.bg_bun + 0.8, 560, 840], [EV.bg_us, 700, 820], [S1.burger, 700, 820]];
  const at = t => { const P = PATH(); for (let i = 0; i < P.length - 1; i++) if (t < P[i + 1][0]) { const q = sm(clamp((t - P[i][0]) / Math.max(0.01, P[i + 1][0] - P[i][0]))); return [lerp(P[i][1], P[i + 1][1], q), lerp(P[i][2], P[i + 1][2], q), P[i][2] !== P[i + 1][2]]; } const L = P[P.length - 1]; return [L[1], L[2], false]; };
  DIR.burger = {
    outfit: 'safariA', light: { side: -1, rim: '#ffe0a0' }, grade: ['#ffa060', 0.06],
    act: () => [[S0.burger, 'awe'], [EV.bg_patty, 'proud'], [EV.bg_name, 'grin'], [EV.bg_sail, 'laugh'], [EV.bg_bun, 'proud'], [EV.bg_us, 'smug'], [EV.bg_gag, 'suspicious'], [EV.bg_plop, 'shock'], [EV.bg_plop + 0.4, 'laugh']],
    pose: (t, u, b) => { const [x, y, climb] = at(t); PX = x; PY = y; const plant = t > EV.bg_us - 0.3 && t < EV.bg_gag;
      return Object.assign(b, { x, y, s: 0.66, flip: 1, walk: !climb && t < EV.bg_us ? t * 7 : undefined, look: t < EV.bg_bun ? [0.5, -0.6] : t < EV.bg_gag ? [0.6, -0.3] : [0.8, -0.8],
        hand: climb ? [120, -480 + Math.sin(t * 12) * 60] : plant ? [200, -360] : [150, -260], handF: climb ? [-80, -460 - Math.sin(t * 12) * 60] : [-120, -240], tailUp: !climb, squash: b.squash + (t > EV.bg_plop && t < EV.bg_plop + 0.12 ? 0.14 : 0) }); },
    afterCat: (t, u, P) => { if (t > EV.bg_plop) for (let i = 0; i < 7; i++) { const r = rng(20240 + i); ell(P.x + (r() - 0.5) * 160 * P.s, P.y - (100 + r() * 360) * P.s, 6, 5, { wash: BG.ketchup, washA: 0.95, line: false }); } },
    cam: () => [[S0.burger, 540, 1200, 0.1], [S0.burger + 0.6, 300, 1700, 0.24, 'x'], [EV.bg_patty + 0.4, 280, 1640, 0.26], [EV.bg_name, 420, 1480, 0.24], [EV.bg_sail, 360, 1600, 0.22], [EV.bg_bun, 520, 1200, 0.22], [EV.bg_us, 640, 900, 0.28], [EV.bg_plop, 760, 820, 0.3], [S1.burger, 720, 860, 0.3]]
  };
  // ---------------------------------------------------------------- переход: кетчуп заливает кадр сверху потёками, сквозь них проступает новая сцена
  TRANS_IN.burger = { a: 0.3, b: 0.5, runA: 1, fx(k, t, A, B) {
    const e = sm(k); drawBuf(e < 0.55 ? A : B, 1, 540, 960);
    scr(() => { const fill = e < 0.55 ? e / 0.55 : 1 - (e - 0.55) / 0.45; const pts = [[-20, -20]]; for (let i = 0; i <= 18; i++) { const x = i * 62, d = fill * 2100 * (0.75 + 0.25 * Math.sin(i * 2.7)); pts.push([x - 20, d - 60], [x + 4, d], [x + 28, d - 60]); } pts.push([1120, -20]); const p = shape(pts, { wash: BG.ketchup, washA: 1, w: 3, col: '#5a0804' }); shadeG(p.path, 0, 0, 0, 2000, '#ff5a3a', 0.3); for (let i = 0; i < 9; i++) pencil([[60 + i * 120, 0], [60 + i * 120, fill * 1600 * (0.6 + 0.3 * Math.sin(i * 3))]], { w: 12, col: '#ff8a6a', a: 0.4, pass2: false }); });
  } };
})();
