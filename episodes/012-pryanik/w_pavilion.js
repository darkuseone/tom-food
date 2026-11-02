/* 012 — `pavilion`: «А в 1900-м у Эйфелевой башни встал его павильон из пряников!» Париж 1900, солнечное Марсово поле: огромная Эйфелева башня, павильоны
   в стиле модерн, фонари-ар-нуво, публика с зонтиками-от-солнца и в канотье, воздушные шары, голуби. Пряничный павильон: стены из пряничных плиток с глазурью,
   крыша-чешуя из пряников, луковка-купол в глазури, вывеска PAIN D'ÉPICES DE TOULA. Том — франт в светлом пиджаке и канотье.
   По словам: «Эйфелевой башни» — камера взлетает к башне; «павильон» — плитки павильона выскакивают рядами снизу вверх; «из пряников!» — мальчишка отламывает
   кусок стены и хрустит, дама ахает. Переход В сцену: глазурь стекает сверху белыми потёками и открывает новый кадр. */
(() => {
  EV.pv_tow = wtw('s4', 'Эйфелевой');
  EV.pv_pav = wtw('s4', 'павильон');
  EV.pv_pr = wtw('s4', 'пряников!');
  SHAKES.push([EV.pv_pr + 0.1, 0.15, 6]);
  KEYW.push('павильон', 'пряников!');
  const build = t => clamp((t - EV.pv_pav + 0.2) / 0.9);

  function sky(t) {                                                     // небо, облака, Эйфелева башня, павильоны модерна, воздушный шар
    vgrad(-1400, 1200, ['#5aa0e0', '#9ac8ee', '#f0e8d0']); for (let i = 0; i < 6; i++) { const x = ((i * 300 + t * 12) % 1800) - 300, y = -900 + (i % 3) * 200; for (let k = 0; k < 4; k++) ell(x + k * 50, y - (k % 2) * 22, 64, 34, { wash: '#ffffff', washA: 0.9, line: false }); }
    push(560, 900, 0.72); const legs = [[-340, 0], [-180, -500], [-80, -1100], [-26, -1700], [0, -1960], [26, -1700], [80, -1100], [180, -500], [340, 0]]; const tw = shape(spline(legs, false, 12).concat([[340, 0]]), { wash: '#9a6a3a', washA: 0.55, line: false });
      pencil(spline(legs, false, 12), { w: 16, col: '#8a5a2a' }); for (const [y, w] of [[-500, 170], [-1100, 80], [-1600, 34]]) { rect(-w - 10, y - 20, 2 * w + 20, 30, { wash: '#8a5a2a', washA: 1, w: 2, col: '#3a1a08' }); } pencil(spline([[-280, 0], [-140, -220], [0, -270], [140, -220], [280, 0]], false, 8), { w: 12, col: '#8a5a2a' });
      for (let i = 0; i < 26; i++) { const y = -60 - i * 70, w = lerp(300, 12, i / 26); pencil([[-w, y], [w * 0.5, y - 70]], { w: 3, col: '#8a5a2a', a: 0.6, pass2: false }); pencil([[w, y], [-w * 0.5, y - 70]], { w: 3, col: '#8a5a2a', a: 0.6, pass2: false }); } pencil([[0, -1960], [0, -2060]], { w: 4, col: '#3a2a1a', pass2: false }); rect(0, -2060, 50, 30, { wash: '#2a5ab8', washA: 1, w: 1 }); pop();
    push(180 + Math.sin(t * 0.3) * 40, -600, 1); ell(0, 0, 70, 84, { wash: '#e8b030', washA: 1, w: 2, col: '#5a3a08' }); for (let i = -2; i <= 2; i++) pencil(spline([[i * 26, -80], [i * 34, 0], [i * 18, 80]], false, 5), { w: 2, col: '#c8221a', pass2: false }); for (const sd of [-1, 1]) pencil([[sd * 50, 60], [sd * 20, 130]], { w: 1.4, col: '#3a2a1a', pass2: false }); rect(-22, 130, 44, 30, { wash: '#8a5a2a', washA: 1, w: 1.4 }); pop();
    for (const [x, w, c] of [[-200, 300, '#f4e6d0'], [1060, 340, '#e8f0e8']]) { push(x, 980, 1); rect(-w / 2, -300, w, 300, { wash: c, washA: 1, w: 2, col: '#5a5a4a' }); blob([[-w / 2, -300], [-w / 3, -400], [0, -440], [w / 3, -400], [w / 2, -300]], { wash: '#6a9aa8', washA: 1, w: 2, col: '#2a4a5a' }); for (let i = 0; i < 4; i++) rect(-w / 2 + 20 + i * (w - 40) / 4, -240, (w - 40) / 4 - 16, 160, { wash: '#a8c8d8', washA: 1, w: 1.4 }); pop(); }
    for (let i = 0; i < 4; i++) { const x = ((t * 70 + i * 260) % 1400) - 200, y = -300 + Math.sin(t * 2 + i) * 40 + i * 50; pencil([[x - 16, y], [x, y - 8], [x + 16, y]], { w: 3, col: '#3a3a3a', pass2: false }); }
  }
  function ground(t) {                                                  // аллея: гравий, газоны, клумбы, фонари-модерн
    const g = rect(-400, 980, 2000, 1000, { wash: '#e0d0a8', washA: 1, w: 2, col: '#8a7a5a', key: 12600 }); shadeG(g.path, 0, 1700, 0, 980, '#b8a078', 0.35);
    for (let i = 0; i < 6; i++) { const x = -300 + i * 340; blob([[x - 120, 1010], [x - 60, 990], [x + 60, 990], [x + 120, 1010], [x + 60, 1030], [x - 60, 1030]], { wash: '#6a9a4a', washA: 1, w: 1.6, col: '#2a4a1a' }); for (let k = 0; k < 6; k++) ell(x - 80 + k * 32, 1004, 8, 8, { wash: ['#d9283a', '#f0c040', '#ffffff'][k % 3], washA: 1, line: false }); }
    for (const x of [-60, 1140]) { push(x, 1300, 1); pencil(spline([[0, 0], [10, -200], [-10, -360], [20, -420]], false, 6), { w: 12, col: '#2a4a3a' }); for (const sd of [-1, 1]) { pencil(spline([[10, -380], [sd * 50, -420], [sd * 70, -380]], false, 5), { w: 6, col: '#2a4a3a', pass2: false }); ell(sd * 70, -360, 18, 26, { wash: '#fff4c8', washA: 1, w: 1.6 }); glow(sd * 70, -360, 40, 'rgba(255,240,180,1)', 0.4); } pop(); }
  }
  function pavilion(t) {                                                // пряничный павильон: плитки-стены рядами, крыша-чешуя, луковка, вывеска, мальчишка откусывает
    const k = build(t), x0 = 540, y0 = 1260;
    const rows = 6, cols = 6, tw = 110, th = 70;
    for (let r = 0; r < rows; r++) { const vis = clamp(k * (rows + 3) - r); if (vis <= 0) continue;
      for (let c = 0; c < cols; c++) { if (r < 3 && (c === 2 || c === 3)) continue; if (r === 2 && c === 4 && t > EV.pv_pr + 0.2) continue; const x = x0 - cols * tw / 2 + c * tw + tw / 2, y = y0 - r * th - th / 2 - (1 - sm(vis)) * 60;
        push(x, y, 1); ctx.globalAlpha = sm(vis); pryanikTop(0, 0, tw - 6, th - 6, { key: 12610 + r * 10 + c, text: '' }); ctx.globalAlpha = 1; pop(); } }
    if (k > 0.2) { const d = shape([[x0 - 110, y0], [x0 - 110, y0 - 200], [x0 - 60, y0 - 250], [x0 + 60, y0 - 250], [x0 + 110, y0 - 200], [x0 + 110, y0]], { wash: '#5a2a0a', washA: 1, w: 2.4, col: '#1a0a04' }); for (let i = 0; i < 6; i++) ell(x0 - 80 + i * 32, y0 - 210, 8, 8, { wash: PK.glaze, washA: 1, line: false }); }
    if (k > 0.65) { const rk = clamp((k - 0.65) / 0.35); for (let r = 0; r < 4; r++) for (let c = 0; c <= 7 - r; c++) { const x = x0 - (7 - r) * 52 + c * 104, y = y0 - rows * th - r * 46 - 20; if (rk * 4 < r) continue; blob([[x - 52, y], [x - 46, y - 40], [x, y - 52], [x + 46, y - 40], [x + 52, y]], { wash: r % 2 ? PK.doughL : PK.dough, washA: 1, w: 2, col: '#3a1a06' }); pencil(spline([[x - 40, y - 18], [x, y - 34], [x + 40, y - 18]], false, 5), { w: 4, col: PK.glaze, a: 0.9, pass2: false }); } }
    if (k > 0.9) { const dk = clamp((k - 0.9) / 0.1); push(x0, y0 - rows * th - 220, dk); const dm = blob([[-70, 0], [-80, -60], [-40, -130], [0, -180], [40, -130], [80, -60], [70, 0]], { wash: PK.dough, washA: 1, w: 2.4, col: '#3a1a06' }); for (let i = 0; i < 5; i++) pencil(spline([[-60 + i * 30, -10], [-40 + i * 20, -100], [0, -170]], false, 5), { w: 5, col: PK.glaze, pass2: false }); pencil([[0, -180], [0, -240]], { w: 4, col: '#c8a050', pass2: false }); pop(); }
    if (k > 0.5) { push(x0, y0 - rows * th - 6, 1); rect(-260, -34, 520, 60, { wash: '#2a3a6a', washA: 1, w: 3, col: '#c8a050' }); txt("PAIN D'ÉPICES DE TOULA", 0, 8, 30, { font: 'Osw', col: '#ffe070' }); pop(); }
    const by = 1290; human(260, by, 0.95, t, { body: '#3a5a8a', legs: '#2a2a2a', hair: '#c8a060', face: t > EV.pv_pr ? 'grin' : 'smile', armL: 'hold', armR: t > EV.pv_pr ? 'up' : 'hold', look: 0.6, seed: 12620 }); hat20(260, by, 0.95, 'beret', '#2a3a6a');
    if (t > EV.pv_pr + 0.2) { push(260 + 80, by - 340, 1); pryanikTop(0, 0, 70, 46, { key: 12621, text: '' }); pop(); crumbs(330, by - 330, t, EV.pv_pr + 0.4, 12, 12622, PK.doughL); }
    human(840, by, 1.05, t, { body: '#e8c8d8', legs: '#1a1a1a', hair: '#8a4a2a', face: t > EV.pv_pr + 0.3 ? 'shock' : 'smile', armL: 'hold', armR: 'up', look: -0.6, seed: 12623, flip: -1, long: 1 }); hat20(840, by, 1.05, 'boater');
    push(840 + 82 * 1.05, by - 400 * 1.05, 1); pencil([[0, 0], [0, 140]], { w: 3, col: '#3a2a1a', pass2: false }); blob([[-80, 0], [-40, -40], [0, -50], [40, -40], [80, 0]], { wash: '#f8f0f4', washA: 1, w: 1.6, col: '#a89a9a' }); pop();
  }
  function crowd(t) { for (let i = 0; i < 8; i++) { const x = -260 + i * 220, lady = i % 2; human(x, 1060, 0.62, t, { body: lady ? ['#f0c8c8', '#c8d8f0', '#e8e0b8'][i % 3] : '#2a2a34', legs: '#1a1a1a', hair: '#5a3a1a', face: 'smile', armL: 'hold', armR: 'down', seed: 12630 + i, long: lady, flip: i % 3 ? 1 : -1 }); hat20(x, 1060, 0.62, lady ? 'boater' : 'tophat'); } }
  function front(t) {                                                   // передний план: ветка каштана в цвету сверху, скамейка с газетой «LE FIGARO 1900», голуби
    for (let i = 0; i < 9; i++) { const x = -120 + i * 60, y = 120 + Math.sin(i) * 40; blob([[x, y], [x - 60, y + 30], [x - 30, y + 90], [x + 20, y + 60], [x + 50, y + 90], [x + 70, y + 30]], { wash: '#3a7a3a', washA: 1, w: 1.6, col: '#1a3a1a' }); if (i % 2) { ell(x, y - 10, 14, 34, { wash: '#f8f0f0', washA: 1, w: 1.2, col: '#a8a0a0' }); } }
    push(1100, 1900, 1.4); rect(-200, -100, 400, 30, { wash: '#2a4a3a', washA: 1, w: 2 }); for (const sd of [-1, 1]) pencil([[sd * 180, -70], [sd * 180, 40]], { w: 10, col: '#1a1a1a' }); push(-40, -120, 1, -0.1); rect(-90, -26, 180, 52, { wash: '#efe6d0', washA: 1, w: 1.6 }); txt('LE FIGARO · 1900', 0, 6, 18, { font: 'Osw', col: '#2a2a2a' }); pop(); pop();
    for (let i = 0; i < 3; i++) { const x = 200 + i * 140 + Math.sin(t * 2 + i) * 20; push(x, 1880, 1.3, 0, i % 2 ? 1 : -1); blob([[-30, 0], [-24, -30], [10, -36], [30, -20], [24, 0]], { wash: '#8a8a9a', washA: 1, w: 1.4, col: '#3a3a4a' }); ell(26, -34, 9, 9, { wash: '#6a6a7a', washA: 1, w: 1 }); pop(); }
  }
  WORLD.pavilion = (t, u, cat) => {
    lay(12, () => { sky(t); haze('#e8f0f4', 0.1); });
    lay(4, () => { crowd(t); });
    lay(1.5, () => { ground(t); });
    lay(1.3, () => { pavilion(t); });
    lay(1, () => { cat(); });
    lay(0.6, () => { front(t); });
  };
  DIR.pavilion = {
    outfit: 'parisA', light: { side: 1, rim: '#fff8e0' }, grade: ['#ffe8c8', 0.04],
    act: () => [[S0.pavilion, 'grin'], [EV.pv_tow, 'awe'], [EV.pv_pav, 'proud'], [EV.pv_pr + 0.3, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 780, y: 1720, s: 1.08, flip: -1, look: t < EV.pv_pav ? [0, -0.8] : [-0.6, -0.2], hand: t > EV.pv_pav ? [180, -300] : [120, -380], handF: [-80, -220], point: t > EV.pv_pav ? 1 : undefined, tailUp: t > EV.pv_pr }),
    cam: () => [[S0.pavilion, 560, 1100, 0.14], [EV.pv_tow, 560, 520, 0.06, 'x'], [EV.pv_pav - 0.1, 560, 1060, 0.12], [EV.pv_pr, 560, 1160, 0.2], [S1.pavilion, 580, 1200, 0.24]]
  };
  // ---------------------------------------------------------------- переход: глазурь стекает сверху потёками
  TRANS_IN.pavilion = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const e = sm(k), r = rng(12650), P = new Path2D(); P.moveTo(0, 0);
    for (let i = 0; i <= 18; i++) { const x = i * 60, d = (e * 2400) * (0.7 + r() * 0.4); P.lineTo(x, d - 40); P.quadraticCurveTo(x + 30, d + 40, x + 60, d - 40); } P.lineTo(W, 0); P.closePath();
    inPath(P, () => drawBuf(B, 1, 540, 960)); scr(() => { if (e < 0.95) { ctx.save(); ctx.strokeStyle = '#fff6e8'; ctx.lineWidth = 28; ctx.globalAlpha = 0.95; ctx.stroke(P); ctx.restore(); } });
  } };
})();
