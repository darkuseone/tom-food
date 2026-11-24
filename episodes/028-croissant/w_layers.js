/* 028 — `layers` (ТОМ-МАЛЫШ, раз за ролик): «Но его рогалик был плотной сдобой. Слоёным круассан сделали французы — около 1905-го.»
   Микромир в разрезе выпечки. Слева — «каньон» старого кипферля: плотная гладкая сдоба без дырочек, справа — круассан: стены из десятков
   тонких золотых слоёв, между ними блестящие пласты масла и воздушные соты-пещеры; сверху — корочка-свод, сквозь неё тёплый свет духовки
   и пар (главный свет), снизу — масляное озерцо с бликами (второй, жёлтый отсвет). Том-малыш — поварёнок. По словам: «плотной» — бодает
   плотную стену кипферля — «БУМ», не пробить; «Слоёным» — гигантская скалка прокатывается сверху, стена расслаивается; «круассан» —
   Том-малыш прыгает по слоям, как по ступенькам, счёт 1-2-3-4; «французы» — флажок-триколор на вершине; «1905-го.» — плашка «≈ 1905»;
   пауза-гэг — ступенька проваливается, Том-малыш ныряет в воздушную ячейку и выглядывает из неё. Переход В сцену: пласт теста складывается
   втрое, как конверт, и разворачивается уже микромиром. */
(() => {
  EV.ly_dense = wtw('s7', 'плотной');
  EV.ly_flaky = wtw('s7', 'Слоёным');
  EV.ly_cr = wtw('s7', 'круассан');
  EV.ly_fr = wtw('s7', 'французы');
  EV.ly_1905 = wtw('s7', '1905-го.');
  EV.ly_fall = LE('s7') + 0.2;
  SHAKES.push([EV.ly_dense + 0.3, 0.16, 7], [EV.ly_fall, 0.18, 7]);
  KEYW.push('Слоёным');
  const steps = [[420, 1360], [520, 1280], [620, 1200], [720, 1120], [820, 1040]];

  function oven(t) {                                                      // свод-корочка сверху, тёплый свет духовки, пар
    vgrad(-400, 1600, ['#6a3a14', '#a8642a', '#d8984a']); glow(600, -100, 700, 'rgba(255,200,120,1)', 0.28);
    const c = blob([[-400, -200], [1500, -200], [1500, 160], [1100, 240], [600, 280], [100, 240], [-400, 160]], { wash: CR.crust, washA: 1, w: 4, col: CR.crustD, key: 28900 }); shadeG(c.path, 0, 0, 0, 280, '#6a3010', 0.4); for (let i = 0; i < 12; i++) pencil(spline([[-300 + i * 150, 200], [-250 + i * 150, 120], [-300 + i * 150, 40]], false, 4), { w: 6, col: CR.crustL, a: 0.6, pass2: false });
    for (let i = 0; i < 6; i++) { const ph = (t * 0.25 + i / 6) % 1; ell(-100 + i * 260 + Math.sin(t + i) * 40, 600 - ph * 400, 160, 70, { wash: '#fff4e0', washA: 0.12 * (1 - ph), line: false }); }
  }
  function dense(t) {                                                     // левая стена: плотная сдоба кипферля, гладкая, без дырочек
    const d = blob([[-400, 300], [140, 320], [200, 600], [220, 1000], [180, 1500], [-400, 1500]], { wash: '#e8c890', washA: 1, w: 4, col: '#8a5a20', key: 28910 }); shadeG(d.path, 220, 0, -200, 0, '#b8884a', 0.4); hatch(d.path, d.bb, { gap: 18, a: 0.08, col: '#a87a3a', ang: 0.4, key: 28911 });
    if (t > EV.ly_dense + 0.2 && t < EV.ly_flaky) { push(260, 1060, popK(t, EV.ly_dense + 0.2, 0.3)); txt('БУМ!', 0, 0, 70, { font: 'Osw', col: '#c8201a', rot: -0.15 }); pop(); for (let i = 0; i < 5; i++) { const a = i * 1.2 + t * 4; ell(200 + Math.cos(a) * 40, 1000 + Math.sin(a) * 20, 8, 8, { wash: '#ffe070', washA: 1, line: false }); } }
    push(-120, 900, 1); txt('1839', 0, 0, 70, { font: 'Osw', col: '#a87a3a', a: 0.6 }); txt('сдоба', 0, 60, 40, { font: 'Hand', col: '#8a5a20', a: 0.6 }); pop();
  }
  function flaky(t) {                                                     // правая стена: десятки слоёв теста и масла, соты, ступеньки-слои
    const sp = t > EV.ly_flaky ? clamp((t - EV.ly_flaky) / 0.8) : 0;
    for (let i = 0; i < 16; i++) { const y = 380 + i * 70, wob = Math.sin(i * 1.7 + t * 0.5) * 14; const lay2 = blob([[300 - i * 4, y + wob], [800, y - 10 + wob], [1400, y + wob], [1400, y + 50 * (0.4 + sp * 0.6) + wob], [800, y + 40 * (0.4 + sp * 0.6) + wob], [300 - i * 4, y + 50 * (0.4 + sp * 0.6) + wob]], { wash: i % 2 ? CR.butter : '#f0c070', washA: 1, w: 2, col: '#a8702a', key: 28920 + i });
      if (i % 2 === 0) pencil([[320, y + 8 + wob], [1380, y + 4 + wob]], { w: 4, col: '#fff4c0', a: 0.6, pass2: false }); }
    const r = rng(28940); for (let i = 0; i < 26; i++) { const x = 360 + r() * 1000, y = 420 + r() * 1000; ell(x, y, (18 + r() * 30) * (0.3 + sp * 0.7), (12 + r() * 16) * (0.3 + sp * 0.7), { wash: '#7a4a1a', washA: 0.85, w: 1.6, col: '#5a3010' }); ell(x - 4, y - 4, 6, 3, { wash: '#f8d890', washA: 0.7, line: false }); }
    for (let i = 0; i < steps.length; i++) { const [x, y] = steps[i]; rect(x - 60, y, 120, 22, { wash: CR.butter, washA: 1, w: 2, col: '#a8802a' }); if (t > EV.ly_cr + i * 0.25 && t < EV.ly_fall) { push(x, y - 30, popK(t, EV.ly_cr + i * 0.25, 0.3)); txt(String(i + 1), 0, 0, 40, { font: 'Osw', col: '#c8201a' }); pop(); } }
    if (t > EV.ly_fr) { const k = popK(t, EV.ly_fr, 0.35); push(900, 1030, k); pencil([[0, 0], [0, -150]], { w: 5, col: '#5a3a1a', pass2: false }); rect(0, -150, 30, 70, { wash: '#2a3a8a', washA: 1, line: false }); rect(30, -150, 30, 70, { wash: '#f8f4ec', washA: 1, line: false }); rect(60, -150, 30, 70, { wash: '#c8201a', washA: 1, line: false }); pop(); }
  }
  function pin(t) {                                                       // гигантская скалка прокатывается по слоям на «Слоёным»
    if (t < EV.ly_flaky - 0.2 || t > EV.ly_flaky + 1.2) return; const k = sm(clamp((t - EV.ly_flaky + 0.2) / 1.2)); push(lerp(1500, 200, k), lerp(300, 600, k), 1, -0.3);
    rect(-700, -70, 1400, 140, { wash: '#d8a868', washA: 1, w: 4, col: '#6a4a24', key: 28950 }); for (let i = 0; i < 8; i++) pencil([[-640 + ((i * 180 + k * 900) % 1280), -66], [-640 + ((i * 180 + k * 900) % 1280), 66]], { w: 4, col: '#a87a4a', pass2: false }); pop();
  }
  function lake(t) {                                                      // масляное озерцо внизу с бликами и крошками
    const l = ell(700, 1560, 700, 120, { wash: '#f8d860', washA: 1, w: 3, col: '#a88020', key: 28960 }); ell(560, 1510, 260, 20, { wash: '#fff8c0', washA: 0.7, line: false });
    for (let i = 0; i < 8; i++) { const r = rng(28961 + i); ell(200 + r() * 1000, 1540 + r() * 60, 10, 5, { rot: r() * 3, wash: CR.crustL, washA: 1, w: 1, col: CR.crustD }); }
    if (t > EV.ly_fall) { const q = clamp((t - EV.ly_fall) / 0.5); for (let i = 0; i < 8; i++) { const a = -2.8 + i * 0.35; ell(720 + Math.cos(a) * 100 * q, 1200 + Math.sin(a) * 120 * q, 8, 8, { wash: CR.crustL, washA: 1 - q, line: false }); } }
  }
  WORLD.layers = (t, u, cat) => {
    lay(6, () => { oven(t); });
    lay(1.4, () => { dense(t); flaky(t); lake(t); });
    lay(1, () => { lightPool(620, 1200, 500, 100, 'rgba(255,230,170,1)', 0.25); cat(); castShadow(600, 1300, 160, 50, 0.4, 0.2); if (t > EV.ly_fall + 0.3) { push(720, 1210, 1); ell(0, 0, 70, 46, { wash: '#7a4a1a', washA: 1, w: 3, col: '#5a3010' }); pop(); } });
    lay(0.7, () => { pin(t); motes(20, [-200, 100, 1300, 1600], '#ffe8b0', t, 28990, { sp: -6, sz: 5, a: 0.4, wob: 5 }); moodDark(600, 960, 600, 1500, '#2a1404', 0.38); });
  };
  DIR.layers = {
    outfit: 'chefB', light: { side: 1, rim: '#fff0c0' }, grade: ['#ffb060', 0.06],
    act: () => [[S0.layers, 'grin'], [EV.ly_dense, 'annoyed'], [EV.ly_dense + 0.3, 'shock'], [EV.ly_flaky, 'awe'], [EV.ly_cr, 'laugh'], [EV.ly_fr, 'proud'], [EV.ly_fall, 'shock'], [EV.ly_fall + 0.5, 'grin']],
    pose: (t, u, b) => { let x = 380, y = 1400, walk;
      if (t < EV.ly_dense + 0.3) { const q = clamp((t - S0.layers) / (EV.ly_dense + 0.3 - S0.layers)); x = lerp(560, 260, q); walk = t * 9; }
      else if (t < EV.ly_cr) { x = 330; }
      else if (t < EV.ly_fall) { const i = Math.min(steps.length - 1, Math.floor((t - EV.ly_cr) / 0.25)), f = clamp((t - EV.ly_cr) / 0.25 - i); const a = steps[Math.max(0, i - 1)], c = steps[i]; x = lerp(i ? a[0] : 330, c[0], f); y = lerp(i ? a[1] : 1400, c[1], f) - Math.sin(f * 3.14) * 80; }
      else { const q = clamp((t - EV.ly_fall) / 0.5); x = 720; y = lerp(1040, 1240, q); }
      const hide = t > EV.ly_fall + 0.3; return Object.assign(b, { x, y, s: 0.66, flip: t < EV.ly_dense + 0.3, rot: t > EV.ly_dense && t < EV.ly_dense + 0.6 ? 0.2 : 0, walk, look: t > EV.ly_fr && t < EV.ly_fall ? [0.6, -0.5] : [0.3, -0.2], hand: t > EV.ly_fr && !hide ? [80, -440] : [140, -260], handF: [-100, -240], tailUp: t > EV.ly_cr, sweat: t > EV.ly_dense && t < EV.ly_flaky }); },
    hud: t => infoPlate(t, EV.ly_1905 - 0.1, S1.layers - 0.15, { kind: 'swap', title: 'ТЕСТО', a: 'СДОБА', b: 'СЛОИ + МАСЛО', ia: (s, tt) => INGR_C28.kipferl(s, tt), ib: (s, tt) => INGR_C28.layers(s, tt), tb: EV.ly_1905 + 0.4 }),
    cam: () => [[S0.layers, 520, 1040, 0.2], [EV.ly_dense, 420, 1100, 0.24], [EV.ly_cr, 560, 1060, 0.22], [EV.ly_fall, 680, 1080, 0.24], [S1.layers, 700, 1100, 0.25]]
  };
  // ---------------------------------------------------------------- переход: пласт теста складывается втрое, как конверт, и разворачивается микромиром
  TRANS_IN.layers = { a: 0.3, b: 0.5, runA: 0.4, fx(k, t, A, B) {
    const f = k < 0.45 ? sm(k / 0.45) : 1 - sm((k - 0.45) / 0.55); drawBuf(k < 0.45 ? A : B, 1, 540, 960);
    scr(() => { const h1 = 640 * f; if (h1 > 2) { const p = rect(-10, -10, 1100, h1, { wash: '#f4e0b0', washA: 1, w: 4, col: '#a87a3a', key: 28998 }); hatch(p.path, p.bb, { gap: 22, a: 0.15, col: '#c8a060', ang: 0.2, key: 28997 }); rect(-10, h1 - 30, 1100, 24, { wash: CR.butter, washA: 1, line: false }); }
      const h2 = 640 * f; if (h2 > 2) { const p = rect(-10, 1930 - h2, 1100, h2, { wash: '#f0d8a0', washA: 1, w: 4, col: '#a87a3a', key: 28999 }); rect(-10, 1930 - h2 + 6, 1100, 24, { wash: CR.butter, washA: 1, line: false }); } });
  } };
})();
