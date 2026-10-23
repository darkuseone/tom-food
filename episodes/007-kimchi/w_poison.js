/* 007 — `poison`: «Перец знали и раньше, но в 1614-м его звали ядовитым!» Кабинет учёного-сонби: решётчатые окна с бумагой ханджи, ширма с горами,
   стопки сшитых нитью книг, низкий столик, тушечница, кисти. Старый учёный пишет энциклопедию; на столе на блюдце — красный перец. На «1614-м» над книгой
   всплывает год; на «ядовитым» над перцем вспыхивает зелёный череп и надпись ЯД, учёный роняет кисть, Том-сонби отшатывается с платком у носа.
   Переход В сцену: широкий мазок туши проходит по кадру по диагонали. */
(() => {
  EV.pz_y = wtw('s5', '1614-м');
  EV.pz_pois = wtw('s5', 'ядовитым!');
  SHAKES.push([EV.pz_pois + 0.1, 0.25, 12]);
  KEYW.push('ядовитым!');

  function room(t) { vgrad(-600, 1500, ['#e8dcc0', '#f2e8d0', '#e0d0b0']); for (let i = 0; i < 2; i++) { const x = -200 + i * 760; const w = rect(x, 180, 520, 620, { wash: '#fbf6e8', washA: 1, w: 8, col: '#6a4a2a', key: 8200 + i }); for (let q = 1; q < 6; q++) pencil([[x + q * 87, 180], [x + q * 87, 800]], { w: 4, col: '#6a4a2a', pass2: false }); for (let q = 1; q < 6; q++) pencil([[x, 180 + q * 103], [x + 520, 180 + q * 103]], { w: 4, col: '#6a4a2a', pass2: false }); glow(x + 260, 490, 300, 'rgba(255,250,230,1)', 0.35); }
    push(540, 1000, 1); rect(-280, -200, 560, 260, { wash: '#f2ead0', washA: 1, w: 3, col: '#6a4a2a' }); poly([[-280, 60], [-180, -120], [-90, -30], [20, -170], [140, -40], [220, -110], [280, 60]], { wash: '#8a9a8a', washA: 0.8, w: 2, col: '#4a5a4a' }); for (let i = 0; i < 4; i++) pencil([[-280 + i * 140, -200], [-280 + i * 140, 60]], { w: 3, col: '#8a6a44', pass2: false }); pop();
    rect(-300, 1100, 1700, 400, { wash: '#c8a878', washA: 1, w: 2, col: '#6a4a2a' }); for (let i = 0; i < 4; i++) { push(120 + i * 30, 1110, 1); for (let q = 0; q < 5; q++) rect(-60, -24 - q * 26, 120, 24, { wash: ['#e8d8a8', '#d8c090', '#f2e2b8'][q % 3], washA: 1, w: 1.6, col: '#6a4a2a' }); pop(); } }
  function desk(t) { push(520, 1360, 1); rect(-300, -40, 600, 50, { wash: '#7a4a24', washA: 1, w: 3, col: '#2a1408' }); for (const sd of [-1, 1]) rect(sd * 270 - 15, 10, 30, 90, { wash: '#6a3a1a', washA: 1, w: 2 });
    rect(-220, -110, 260, 70, { wash: '#f6eed8', washA: 1, w: 2, col: '#6a5a3a' }); rect(-90, -110, 4, 70, { wash: '#8a7a5a', washA: 1, line: false }); for (let i = 0; i < 4; i++) { pencil([[-200, -96 + i * 16], [-110, -96 + i * 16]], { w: 2, col: '#2a2a2a', a: 0.6, pass2: false }); pencil([[-70, -96 + i * 16], [20, -96 + i * 16]], { w: 2, col: '#2a2a2a', a: t > EV.pz_y ? 0.6 : 0.2, pass2: false }); }
    ell(60, -60, 50, 18, { wash: '#2a2a2a', washA: 1, w: 2 }); ell(150, -60, 40, 14, { wash: '#f2f2f2', washA: 1, w: 2, col: '#8a8a8a' }); chili(150, -86, 0.7, 1.4);
    if (t > EV.pz_pois - 0.1) { const p = popK(t, EV.pz_pois - 0.1, 0.4); glow(150, -150, 160, 'rgba(120,255,90,1)', 0.45 * p); push(150, -230, p); ell(0, 0, 50, 46, { wash: '#e8ffd8', washA: 1, w: 3, col: '#2a6a1a' }); for (const sd of [-1, 1]) ell(sd * 18, -4, 12, 14, { wash: '#1a2a1a', washA: 1, line: false }); poly([[0, 10], [-6, 22], [6, 22]], { wash: '#1a2a1a', washA: 1, line: false }); rect(-24, 34, 48, 16, { wash: '#e8ffd8', washA: 1, w: 2, col: '#2a6a1a' }); pop(); bubbleTag('ЯД!', 760, 1000, t, EV.pz_pois + 0.1, '#3a8a1a', 44, 0.08); }
    if (t > EV.pz_y - 0.1) bubbleTag('1614', -60, -220, t, EV.pz_y, '#a8282a', 44, -0.06); pop();
    const drop = t > EV.pz_pois + 0.1; human(330, 1330, 0.82, t, { body: '#f6f2ea', hair: '#c8c8c8', face: drop ? 'shock' : 'calm', armL: 'hold', armR: drop ? 'up' : 'swing', seed: 820, beard: 'long', look: drop ? 0.4 : 0.2 }); gat20(330, 1330, 0.82);
    if (drop) { const k = clamp(t - EV.pz_pois - 0.1); push(380 + k * 40, lerp(1040, 1310, k * k), 1, k * 6); PROPS.brushP(); pop(); } }
  WORLD.poison = (t, u, cat) => { lay(10, () => room(t)); lay(1.3, () => desk(t)); lay(1, () => { rect(-300, 1460, 1700, 600, { wash: '#d8b880', washA: 1, w: 2, col: '#6a4a2a', key: 8210 }); for (let i = 0; i < 8; i++) pencil([[-300 + i * 230, 1460], [-300 + i * 230, 2000]], { w: 2, col: '#a88a5a', a: 0.6, pass2: false }); cat(); }); };
  DIR.poison = {
    outfit: 'seonbi', light: { side: -1, rim: '#fff4d8' }, grade: ['#c8b080', 0.05],
    act: () => [[S0.poison, 'talk'], [EV.pz_y, 'suspicious'], [EV.pz_pois, 'scared'], [EV.pz_pois + 0.6, 'annoyed']],
    pose: (t, u, b) => { const back = clamp((t - EV.pz_pois) / 0.3); return Object.assign(b, { x: lerp(840, 900, back), y: 1800, s: 1.1, flip: true, tilt: back * 0.12, look: [-0.7, -0.2], hand: back > 0 ? [40, -320] : [150, -330], handF: [-90, -230], point: t < EV.pz_pois ? 1 : 0, sweat: back > 0 ? 1 : 0 }); },
    cam: () => [[S0.poison, 520, 1000, 0.1], [EV.pz_y, 460, 1150, 0.18, 'x'], [EV.pz_pois, 600, 1200, 0.2, 'x'], [S1.poison, 600, 1200, 0.22]]
  };
  // ---------------------------------------------------------------- переход: широкий мазок туши проходит по диагонали и уносит прошлый кадр
  TRANS_IN.poison = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = sm(k), N = 30, n = Math.floor(q * N); drawBuf(A, 1, 540, 960); const pts = []; for (let i = 0; i <= n; i++) { const u2 = i / N; pts.push([lerp(-200, 1300, u2), lerp(2100, -200, u2) + Math.sin(u2 * 9) * 40]); }
    if (pts.length > 1) { const wdt = 2600 * clamp(q * 1.3); inPath(pathOf(pts.map(p => [p[0], p[1] - wdt / 2]).concat(pts.slice().reverse().map(p => [p[0], p[1] + wdt / 2]))), () => drawBuf(B, 1, 540, 960));
      scr(() => { pencil(pts.map(p => [p[0], p[1] - wdt / 2]), { w: 40, col: '#1a1a1a', a: 1 - q * 0.6, pass2: false }); pencil(pts.map(p => [p[0], p[1] + wdt / 2]), { w: 40, col: '#1a1a1a', a: 1 - q * 0.6, pass2: false }); }); }
  } };
})();
