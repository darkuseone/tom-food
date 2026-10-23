/* 004 — `zalivnoe`: «А заливное — не холодец: там желатин. Перепутаешь — бабушка не простит.» Бабушкина кухня 1980-х: обои в цветочек, холодильник с магнитами,
   эмалированные кастрюли, сервант с хрусталём, окно с панельками. Слева — заливное с рыбой и пакетом желатина, справа — холодец в кастрюле; знак «≠» между ними.
   «бабушка» — бабушка в халате и платке грозит половником, Том (хозяйка) втягивает голову. Переход В сцену: дверца холодильника открывается — внутри новая сцена. */
(() => {
  EV.zl_gel = wtw('s8', 'желатин.');
  EV.zl_gran = wtw('s8', 'бабушка');
  SHAKES.push([EV.zl_gran + 0.2, 0.2, 8]);
  KEYW.push('желатин.', 'бабушка');

  function room(t) {                                                   // обои, сервант, окно
    vgrad(-600, 1600, ['#e8d8a8', '#e0cc98', '#d0b888']); for (let i = 0; i < 12; i++) for (let j = 0; j < 16; j++) { const x = -200 + i * 130 + (j % 2) * 65, y = 40 + j * 90; push(x, y, 0.45); for (let q = 0; q < 5; q++) ell(Math.cos(q * 1.256) * 14, Math.sin(q * 1.256) * 14, 9, 6, { wash: '#c8604a', washA: 0.5, line: false, rot: q * 1.256 }); pop(); }
    const w = rect(640, 160, 340, 400, { wash: '#a8c0d8', washA: 1, w: 8, col: '#f6f2ea', key: 4900 }); ctx.save(); ctx.clip(w.path); vgrad(160, 560, ['#8aa0c0', '#d0d8e0']); for (let i = 0; i < 3; i++) { rect(660 + i * 110, 300 - i * 30, 90, 300, { wash: '#b8b8b0', washA: 1, w: 1.4, col: '#5a5a5a' }); for (let r = 0; r < 7; r++) for (let q = 0; q < 3; q++) rect(668 + i * 110 + q * 28, 316 - i * 30 + r * 36, 18, 20, { wash: (r + q) % 3 ? '#6a7080' : '#ffd27a', washA: 1, line: false }); } ctx.restore(); pencil([[810, 160], [810, 560]], { w: 6, col: '#f6f2ea', pass2: false });
    const sv = rect(60, 300, 380, 560, { wash: '#7a4a24', washA: 1, w: 3, col: '#2a1408', key: 4901 }); for (let r = 0; r < 2; r++) { rect(80, 330 + r * 230, 340, 200, { wash: '#a8c8d8', washA: 0.5, w: 2, col: '#2a1408' }); for (let q = 0; q < 4; q++) { const x = 120 + q * 80, y = 500 + r * 230; poly([[x - 22, y], [x + 22, y], [x + 14, y - 70], [x - 14, y - 70]], { wash: '#e8f4fa', washA: 0.7, w: 1.6, col: '#5a7a8a' }); glow(x - 6, y - 40, 14, 'rgba(255,255,255,1)', 0.7); } }
  }
  function granny(t) { const x = 300, y = 1320, angry = t > EV.zl_gran - 0.2; human(x, y, 1.15, t, { body: '#5a7aa8', hair: '#c8c8c8', face: angry ? 'angry' : 'smile', armL: 'hips', armR: angry ? 'up' : 'hold', seed: 340, look: 0.6, long: 1, hat: 'scarf', hatCol: '#d9482b' });
    if (angry) { push(x + 90, y - 440 + Math.sin(t * 14) * 14, 1, -0.5 + Math.sin(t * 14) * 0.2); pencil([[0, 10], [0, -140]], { w: 8, col: '#8a9098' }); ell(0, -170, 40, 30, { wash: '#a8aeb4', washA: 1, w: 2.4, col: '#3a3e44' }); pop(); bubbleTag('НЕ ПРОЩУ!', x, y - 560, t, EV.zl_gran + 0.2, '#d9482b', 40, -0.05); } }
  function counter(t) { const tb = rect(-300, 1340, 1700, 700, { wash: '#e8e4d8', washA: 1, w: 3, col: '#3a3a3a', key: 4910 }); for (let i = 0; i < 18; i++) { pencil([[-300 + i * 100, 1340], [-300 + i * 100, 2000]], { w: 2, col: '#5a8ab8', a: 0.3, pass2: false }); pencil([[-300, 1380 + i * 60], [1400, 1380 + i * 60]], { w: 2, col: '#5a8ab8', a: 0.3, pass2: false }); }
    push(460, 1350, 1); ell(0, 0, 170, 36, { wash: '#f6f2ea', washA: 1, w: 2.4, col: '#4a4038' }); const z = ell(0, -30, 150, 40, { wash: '#e8e0b0', washA: 0.85, w: 2, col: '#8a7a3a' }); push(0, -34, 0.9, 0.1); ctx.globalAlpha = 0.85; herring(0, 0, 0.8, 0, { key: 4911 }); ctx.globalAlpha = 1; pop(); for (let i = 0; i < 4; i++) { push(-90 + i * 60, -40, 0.25, i); poly(Array.from({ length: 10 }, (_, k) => { const a = k / 10 * 6.283, R = k % 2 ? 9 : 18; return [Math.cos(a) * R, Math.sin(a) * R]; }), { wash: KH.carrot, washA: 1, w: 1.2 }); pop(); } pop();
    gelatinPack(300, 1260, 0.9, -0.15); if (t > EV.zl_gel) bubbleTag('ЗАЛИВНОЕ', 460, 1180, t, EV.zl_gel, '#2a6ab8', 36, -0.04);
    stockPot(800, 1330, 0.75, t, {}); if (t > EV.zl_gel + 0.3) { bubbleTag('ХОЛОДЕЦ', 800, 1000, t, EV.zl_gel + 0.3, '#d9482b', 36, 0.04); const k = popK(t, EV.zl_gel + 0.5, 0.3); push(640, 1200, k); txt('≠', 0, 0, 120, { font: 'Osw', col: '#2b2622' }); pop(); } }
  WORLD.zalivnoe = (t, u, cat) => { lay(14, () => room(t)); lay(3, () => granny(t)); lay(1.3, () => counter(t)); lay(1, () => cat()); };
  DIR.zalivnoe = {
    outfit: 'hostess', light: { side: 1, rim: '#fff4d0' }, grade: ['#e8b060', 0.08],
    act: () => [[S0.zalivnoe, 'sideeye'], [EV.zl_gel, 'smug'], [EV.zl_gran, 'scared']],
    pose: (t, u, b) => Object.assign(b, { x: 900, y: 1780, s: 1.1, flip: true, look: t < EV.zl_gran ? [0.6, 0.3] : [1, -0.2], hand: [140, -250], handF: [-90, -230], squash: b.squash + (t > EV.zl_gran ? 0.06 : 0), sweat: t > EV.zl_gran }),
    cam: () => [[S0.zalivnoe, 600, 1150, 0.2], [EV.zl_gel, 620, 1200, 0.24], [EV.zl_gran, 420, 1050, 0.14, 'x'], [S1.zalivnoe, 440, 1060, 0.18]]
  };
  // ---------------------------------------------------------------- переход: дверца холодильника — внутри новая сцена, холодный свет
  TRANS_IN.zalivnoe = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const c = Math.cos(sm(k) * 1.5); if (c > 0.02) scr(() => { ctx.save(); ctx.translate(W, 0); ctx.transform(-c, 0.1 * (1 - c), 0, 1, 0, 0); ctx.drawImage(A, 0, 0); ctx.fillStyle = `rgba(240,244,236,${0.85 - 0.5 * c})`; ctx.fillRect(0, 0, W, H); ctx.restore(); });
    scr(() => glow(540, 960, 900, 'rgba(220,240,255,1)', 0.4 * Math.sin(k * Math.PI)));
  } };
})();
