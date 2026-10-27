/* 010 — `baur`: ★ «Разгадка: создатель банки Pringles Фред Баур. Его прах положили в такую банку.» Лаборатория-кабинет 1960-х: кульман с чертежом тубы
   «ТУБА + КРЫШКА», колбы, окно на заводские трубы. На «Разгадка:» вспышка-портрет: рамка «ФРЕД БАУР · 1918–2008» с химиком в очках; на «банки» на кульмане
   оживает чертёж — туба собирается из линий, сверху защёлкивается крышка; на «прах» — тёплый вечер: постамент из хука с тубой в цветах и свечах, рядом семья
   (сын с пакетом из аптеки) улыбается — светло, без трагедии; табличка «ПО ЕГО ПРОСЬБЕ». Том в халате снимает очки. Переход В сцену: вспышка старой фотокамеры. */
(() => {
  EV.br_ans = wtw('s7', 'Разгадка:');
  EV.br_can = wtw('s7', 'банки');
  EV.br_fred = wtw('s7', 'Фред');
  EV.br_ash = wtw('s7', 'прах');
  SHAKES.push([EV.br_ans + 0.05, 0.2, 8]);
  KEYW.push('Баур.');

  function lab(t) { const eve = clamp((t - EV.br_ash) / 0.8); vgrad(-600, 1500, [lerpC('#d8e0d8', '#3a2a4a', eve), lerpC('#c8d0c8', '#5a3a4a', eve), lerpC('#b8c0b8', '#7a4a4a', eve)]);
    push(830, 380, 1); rect(-160, -200, 320, 330, { wash: lerpC('#a8c0d0', '#e89a6a', eve), washA: 1, w: 10, col: '#3a3a3a', key: 12100 }); for (let i = 0; i < 3; i++) { rect(-120 + i * 90, -20 - i * 30, 40, 150 + i * 30, { wash: '#5a5a60', washA: 1, w: 1.6, col: '#2a2a2a' }); for (let q = 0; q < 3; q++) { const k = (t * 0.4 + q / 3 + i * 0.2) % 1; ell(-100 + i * 90 + k * 30, -40 - i * 30 - k * 160, 18 + k * 20, 14 + k * 14, { wash: '#e8e8ea', washA: 0.5 * (1 - k), line: false }); } } pencil([[0, -200], [0, 130]], { w: 6, col: '#3a3a3a' }); pop();
    push(170, 480, 1); for (let r = 0; r < 2; r++) { pencil([[-130, r * 160], [130, r * 160]], { w: 6, col: '#5a4a3a', pass2: false }); for (let i = 0; i < 4; i++) { const x = -100 + i * 64, y = r * 160; ell(x, y - 30, 22, 28, { wash: ['#8ad8a8', '#f2c838', '#d88aa8', '#8ab8e8'][(i + r) % 4], washA: 0.6, w: 1.6, col: '#3a3a3a' }); rect(x - 6, y - 80, 12, 30, { wash: '#e8f0f2', washA: 0.6, w: 1.4, col: '#3a3a3a' }); } } pop(); }
  function drafting(t) { const k = clamp((t - EV.br_can + 0.1) / 0.9), lid = clamp((t - EV.br_can - 0.7) / 0.3); push(560, 840, 1, -0.05); pencil([[-180, 380], [0, 160]], { w: 8, col: '#5a5a60' }); pencil([[180, 380], [0, 160]], { w: 8, col: '#5a5a60' });
    rect(-230, -200, 460, 360, { wash: '#2a4a8a', washA: 1, w: 6, col: '#1a2a4a', key: 12110 }); for (let i = 0; i < 9; i++) pencil([[-220, -190 + i * 40], [220, -190 + i * 40]], { w: 1, col: '#5a7ab8', a: 0.6, pass2: false }); txt('ТУБА + КРЫШКА', 0, -150, 32, { font: 'Osw', col: '#e8f0ff' });
    const segs = [[[-50, 120], [-50, -80]], [[50, 120], [50, -80]], [[-50, 120], [50, 120]]]; segs.forEach((sg, i) => { const kk = clamp(k * 3 - i); if (kk > 0) pencil([sg[0], [lerp(sg[0][0], sg[1][0], kk), lerp(sg[0][1], sg[1][1], kk)]], { w: 4, col: '#e8f0ff', pass2: false }); });
    if (k > 0.6) { ell(0, -80 - (1 - lid) * 80, 54, 12, { line: true, w: 4, col: '#f2c838' }); ell(0, 120, 50, 10, { line: true, w: 3, col: '#e8f0ff' }); for (let i = 0; i < 5; i++) { const y = 100 - i * 34; if (k > 0.7 + i * 0.05) pencil(spline([[-40, y], [0, y - 10], [40, y]], false, 5), { w: 3, col: '#f6d07a', pass2: false }); } }
    if (lid >= 1 && t < EV.br_can + 1.6) bubbleTag('ЩЁЛК!', 160, -100, t, EV.br_can + 1.0, '#f2c838', 34, 0.1); pop(); }
  function portrait(t) { if (t < EV.br_ans - 0.05) return; const k = popK(t, EV.br_ans, 0.4), fade = 1 - clamp((t - EV.br_ash + 0.2) / 0.5); if (fade <= 0) return; ctx.save(); ctx.globalAlpha = fade; push(810, 600, k * 0.9, -0.04);
    rect(-140, -170, 280, 330, { wash: '#2a1a10', washA: 1, w: 10, col: '#c8a040', key: 12120 }); rect(-116, -146, 232, 240, { wash: '#d8cbb0', washA: 1, w: 2, col: '#8a7a5a' }); human(0, 90, 0.75, t, { body: '#f2f2ee', hair: '#c8c8c8', face: 'smile', armL: 'down', armR: 'down', seed: 1210, look: 0 });
    push(0, 90 - 300 * 0.75, 0.75); for (const sd of [-1, 1]) ell(sd * 16, -14, 12, 10, { line: true, w: 3, col: '#2a2a2a' }); pencil([[-4, -14], [4, -14]], { w: 3, col: '#2a2a2a', pass2: false }); pop();
    txt('ФРЕД БАУР', 0, 130, 34, { font: 'Osw', col: '#f2e0b0' }); pop(); ctx.restore(); }
  function memorial(t) { if (t < EV.br_ash - 0.3) return; const k = clamp((t - EV.br_ash + 0.3) / 0.6); ctx.save(); ctx.globalAlpha = k; push(560, 1300, 1);
    rect(-150, 0, 300, 260, { wash: '#4a3a3a', washA: 1, w: 3, col: '#1a0a0a', key: 12130 }); rect(-170, -14, 340, 24, { wash: '#6a5050', washA: 1, w: 2.4, col: '#1a0a0a' }); chipTube(0, -20, 0.8, t, { col: '#c8282a' });
    for (const sd of [-1, 1]) { for (let i = 0; i < 5; i++) { const a = -1.4 + i * 0.35; push(sd * 120, -20, 1); pencil([[0, 0], [Math.cos(a) * 40 * sd, Math.sin(a) * 70]], { w: 3, col: '#3a7a3a', pass2: false }); ell(Math.cos(a) * 46 * sd, Math.sin(a) * 78, 13, 13, { wash: ['#f2f0e6', '#f2c8d8', '#f2d870'][i % 3], washA: 1, w: 1.2, col: '#8a6a6a' }); pop(); }
      push(sd * 210, -10, 1); rect(-12, -70, 24, 70, { wash: '#f6f0e0', washA: 1, w: 1.6, col: '#8a7a6a' }); blob([[-6, -70], [0, -96 - Math.sin(t * 12 + sd) * 4], [6, -70]], { wash: '#ffc040', washA: 1, line: false }); glow(0, -84, 60, 'rgba(255,200,100,1)', 0.6); pop(); }
    rect(-120, 80, 240, 56, { wash: '#c8a040', washA: 1, w: 2, col: '#5a4010' }); txt('ПО ЕГО ПРОСЬБЕ', 0, 118, 28, { font: 'Osw', col: '#3a2a0a' }); pop();
    for (let i = 0; i < 2; i++) human(150 + i * 140, 1420, 1.05, t, { body: ['#3a4a5a', '#5a3a4a'][i], hair: ['#8a8a8a', '#6a4a2a'][i], face: 'smile', armL: 'hold', armR: i === 0 ? 'hold' : 'down', seed: 1215 + i, look: 0.5, long: i });
    push(150 + 50, 1420 - 140, 1); rect(-30, -50, 60, 70, { wash: '#f2f2f6', washA: 1, w: 2, col: '#5a5a6a' }); rect(-30, -20, 60, 16, { wash: '#d9282b', washA: 1, line: false }); pop(); ctx.restore(); }
  WORLD.baur = (t, u, cat) => { lay(12, () => lab(t)); lay(2.4, () => { drafting(t); portrait(t); }); lay(1, () => { rect(-300, 1560, 1700, 600, { wash: '#5a4a4a', washA: 1, w: 2, col: '#1a0a0a', key: 12140 }); memorial(t); cat(); }); };
  DIR.baur = {
    outfit: 'labcoat', light: { side: -1, rim: '#ffe0c0' }, grade: ['#c09070', 0.05],
    act: () => [[S0.baur, 'suspicious'], [EV.br_ans, 'awe'], [EV.br_can, 'talk'], [EV.br_fred, 'proud'], [EV.br_ash, 'awe'], [EV.br_ash + 0.8, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 760, y: 1820, s: 1.12, flip: true, look: t < EV.br_ash ? [-0.7, -0.5] : [-0.7, 0.3], hand: t > EV.br_ash + 0.3 ? [100, -420] : [140, -300], handF: [-90, -240], noHat: t > EV.br_ash + 0.3, nod: t > EV.br_ash + 0.3 ? 0.12 : 0 }),
    cam: () => [[S0.baur, 560, 1000, 0.12], [EV.br_ans, 560, 880, 0.22, 'x'], [EV.br_can, 560, 860, 0.28], [EV.br_ash, 560, 1240, 0.26, 'x'], [S1.baur, 560, 1220, 0.28]]
  };
  TRANS_IN.baur = { a: 0.1, b: 0.4, runA: 1, fx(k, t, A, B) {                // вспышка старой фотокамеры: белый взрыв, проявление
    drawBuf(k < 0.35 ? A : B, 1, 540, 960); scr(() => { const a = k < 0.35 ? k / 0.35 : 1 - (k - 0.35) / 0.65; whiteOut(a, '255,250,235'); if (k > 0.35) screenFill('#d8c8a0', 0.4 * (1 - (k - 0.35) / 0.65), 'multiply'); });
  } };
})();
