/* 003 — `acronym`: «Трактирщик Богомилов подаёт салат: ШУБА — "Шовинизму и упадку — бойкот и анафема"!» Стойка трактира крупно: бочки, связки баранок, счёты,
   трактирщик (усы, фартук) выносит блюдо с шубой — драка замирает (кулаки в воздухе). Над блюдом разворачивается транспарант: буквы Ш·У·Б·А по словам
   раскрываются в «ШОВИНИЗМУ / УПАДКУ / БОЙКОТ / АНАФЕМА». Том-половой с открытым ртом. Переход В сцену: свекольный сок заливает кадр снизу вверх. */
(() => {
  EV.ac_boss = wtw('s2', 'Богомилов');
  EV.ac_serve = wtw('s2', 'салат:');
  EV.ac_w = ['«Шовинизму', 'упадку', 'бойкот', 'анафема»!'].map(w => wtw('s2', w));
  SHAKES.push([EV.ac_serve + 0.4, 0.15, 6]);
  KEYW.push('ШУБА');

  function bar(t) {                                                    // задник: полки с бочонками, баранки, счёты, икона-лампа нет — керосинка, часы-ходики
    vgrad(-600, 1600, ['#2a160a', '#4a2a14', '#5a3418']); for (let i = 0; i < 12; i++) pencil([[-300 + i * 150, 0], [-300 + i * 150, 1400]], { w: 8, col: '#2a1408', a: 0.5, pass2: false });
    for (const y of [420, 640]) { rect(-200, y, 1500, 20, { wash: '#6a3e1c', washA: 1, w: 2, col: '#1a0a04' }); for (let i = 0; i < 9; i++) { const x = -150 + i * 160; const b = rect(x, y - 130, 110, 130, { wash: '#8a5a2a', washA: 1, w: 2.2, col: '#2a1408', key: 3300 + i + y }); shadeG(b.path, x + 110, 0, x, 0, '#3a2010', 0.4); for (const yy of [y - 110, y - 20]) pencil([[x, yy], [x + 110, yy]], { w: 6, col: '#4a4a4a', pass2: false }); } }
    for (let i = 0; i < 3; i++) { const x = 760 + i * 90; pencil([[x, 700], [x, 860]], { w: 3, col: '#5a3a1a', pass2: false }); for (let q = 0; q < 5; q++) ell(x, 730 + q * 28, 22, 12, { line: true, w: 8, col: '#d8a050' }); }
    push(160, 840, 1); rect(-90, -60, 180, 120, { wash: '#6a3e1c', washA: 1, w: 2.4, col: '#1a0a04' }); for (let r = 0; r < 4; r++) { pencil([[-80, -40 + r * 26], [80, -40 + r * 26]], { w: 2, col: '#2a1408', pass2: false }); for (let q = 0; q < 5; q++) ell(-60 + q * 22 + (r * 13 % 30), -40 + r * 26, 8, 8, { wash: r % 2 ? '#2a1408' : '#e8d8b0', washA: 1, w: 1 }); } pop();
  }
  function fighters(t) { const frz = t > EV.ac_serve; [[150, '#5a3a2a', 0], [380, '#3a4a5a', 1], [980, '#6a2a2a', 2]].forEach(([x, c, i]) => {   // драка замирает
    const sw = frz ? 0 : Math.sin(t * 9 + i) * 12; human(x + sw, 1230, 1.1, t, { body: c, hair: ['#2a1a0a', '#6a4a2a', '#1a1a1a'][i], face: frz ? 'shock' : 'angry', armL: 'up', armR: frz ? 'up' : 'point', seed: 150 + i, flip: i % 2 ? -1 : 1, beard: i === 1 ? 'short' : 'long', look: i === 2 ? -0.6 : 0.6 }); }); }
  function boss(t) {                                                   // трактирщик Богомилов с подносом
    const k = sm(clamp((t - EV.ac_boss + 0.2) / 0.6)), x = lerp(1200, 650, k), y = 1300; human(x, y, 1.3, t, { body: '#f2ead8', bodyD: '#b8a888', hair: '#3a2a1a', face: 'smile', armL: 'hold', armR: 'hold', seed: 160, flip: -1, look: -0.4 }); stache(x, y, 1.3, -1);
    const hy = y + (-238 - 46) * 1.3; blob([[x - 50, hy - 20], [x - 40, hy - 62], [x + 40, hy - 62], [x + 50, hy - 20]], { wash: '#2a2a30', washA: 1, w: 2, col: '#000' }); ell(x, hy - 20, 60, 14, { wash: '#1a1a20', washA: 1, w: 1.6 });
    push(x - 10, y - 200, 0.55); ell(0, 30, 220, 40, { wash: '#c8ccd0', washA: 1, w: 3, col: '#3a3e44' }); shubaPlate(0, 20, 0.8, t); pop();
    if (t > EV.ac_boss) bubbleTag('ТРАКТИРЩИК БОГОМИЛОВ', x, 1190, t, EV.ac_boss, '#2b2622', 32, 0.03);
  }
  function banner(t) {                                                 // транспарант Ш·У·Б·А → слова
    if (t < EV.ac_serve) return; const k = sm(clamp((t - EV.ac_serve) / 0.4)), W0 = 820 * k; push(620, 640, 0.85, -0.02);
    pencil([[-430, -170], [-430, 170]], { w: 12, col: '#6a3e1c', pass2: false }); pencil([[430, -170], [430, 170]], { w: 12, col: '#6a3e1c', pass2: false });
    const b = rect(-W0 / 2, -150, W0, 300, { wash: '#b8281e', washA: 1, w: 3, col: '#3a0a04', key: 3320 }); if (k < 1) { pop(); return; } for (let i = 0; i < 12; i++) pencil([[-410 + i * 70, -150], [-405 + i * 70, 150]], { w: 2, col: '#7a1010', a: 0.5, pass2: false });
    const L = ['Ш', 'У', 'Б', 'А'], Wd = ['ОВИНИЗМУ', 'ПАДКУ', 'ОЙКОТ', 'НАФЕМА'];
    L.forEach((l, i) => { const y = -105 + i * 70, open = t > EV.ac_w[i]; txt(l, -340, y, 66, { font: 'Osw', col: '#f6e6a0' }); if (open) txt(Wd[i] + (i === 1 ? ' —' : ''), -305, y, 54, { font: 'Osw', col: '#f6f0e0', align: 'left', reveal: clamp((t - EV.ac_w[i]) / 0.35) }); });
    pop();
  }
  WORLD.acronym = (t, u, cat) => {
    lay(14, () => { bar(t); }); lay(4.2, () => { fighters(t); }); lay(2.2, () => { banner(t); });
    lay(1.3, () => { const tb = rect(-300, 1340, 1700, 700, { wash: '#7a4a24', washA: 1, w: 3, col: '#1a0a04', key: 3330 }); shadeG(tb.path, 540, 1340, 540, 1800, '#2a1408', 0.5); rect(-300, 1320, 1700, 30, { wash: '#9a6030', washA: 1, w: 2.4, col: '#1a0a04' }); boss(t); });
    lay(1, () => { cat(); }); lay(0.6, () => { screenFill('#c89a60', 0.1, 'multiply'); });
  };
  DIR.acronym = {
    outfit: 'polovoy', light: { side: -1, rim: '#ffc070' }, grade: ['#c89050', 0.16],
    act: () => [[S0.acronym, 'scared'], [EV.ac_boss, 'suspicious'], [EV.ac_serve, 'awe'], [EV.ac_w[0], 'shock'], [EV.ac_w[3], 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 330, y: 1740, s: 1.15, look: t < EV.ac_serve ? [0.8, 0] : [0.3, -0.9], hand: [110, -220], handF: [-90, -210], tailUp: t > EV.ac_w[3] }),
    cam: () => [[S0.acronym, 560, 1100, 0.18], [EV.ac_boss, 640, 1080, 0.14], [EV.ac_serve, 600, 980, 0.04, 'x'], [EV.ac_w[3], 600, 960, 0.1], [S1.acronym, 600, 960, 0.14]]
  };
  // ---------------------------------------------------------------- переход: свекольный сок заливает кадр снизу вверх
  TRANS_IN.acronym = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {
    const lvl = H - Math.pow(k, 1.2) * (H + 300), pts = [[0, H + 50]]; for (let x = 0; x <= W; x += 30) pts.push([x, lvl + Math.sin(x * 0.02 + t * 8) * 30 * (1 - k)]); pts.push([W, H + 50]);
    drawBuf(A, 1, 540, 960); const P = pathOf(pts); inPath(P, () => { drawBuf(B, 1, 540, 960); ctx.fillStyle = `rgba(138,26,74,${0.85 * (1 - k)})`; ctx.fillRect(0, 0, W, H); });
    scr(() => { pencil(pts.slice(1, -1), { w: 10, col: SH.beetL, a: 0.8 * (1 - k * 0.5), pass2: false }); });
  } };
})();
