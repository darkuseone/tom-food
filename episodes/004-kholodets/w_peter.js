/* 004 — `peter`: «Пётр Первый начинал обед со студня — с солёными огурцами и квашеной капустой.» Голландский зал петровской эпохи: бело-синие изразцы, окно с мачтами
   кораблей и шпилем, модель фрегата на полке, карта. Пётр (очень высокий, усы, зелёный кафтан) за столом; повар-датчанин в колпаке подаёт студень. По словам на стол
   прыгают огурцы и капуста. Том — в голландском камзоле эпохи + фартук. Переход В сцену: скатерть сдёргивается вбок, открывая новую сцену. */
(() => {
  EV.pt_tsar = LS('s5') + 0.05;
  EV.pt_jel = wtw('s5', 'студня');
  EV.pt_cuc = wtw('s5', 'огурцами');
  EV.pt_kraut = wtw('s5', 'капустой.');
  KEYW.push('студня');

  function hall(t) {                                                   // голландские изразцы, окно с кораблями, полка с фрегатом
    vgrad(-600, 1600, ['#e8e4dc', '#d8d4cc', '#c8c0b0']); for (let r = 0; r < 14; r++) for (let c = 0; c < 14; c++) { const x = -300 + c * 120, y = 500 + r * 60; if (y > 1360) continue; rect(x, y, 118, 58, { wash: '#f6f6f2', washA: 1, w: 1, col: '#8a96a8', a: 0.6 }); ell(x + 59, y + 29, 16, 12, { line: true, w: 2, col: '#2a5aa8', a: 0.7 }); }
    const w = rect(600, 140, 380, 320, { wash: '#a8c8e8', washA: 1, w: 8, col: '#4a3a2a', key: 4600 }); ctx.save(); ctx.clip(w.path); vgrad(140, 460, ['#a8c8e8', '#e8eef4']); rect(600, 400, 380, 60, { wash: '#5a7a9a', washA: 1, line: false });
    for (let i = 0; i < 3; i++) { const x = 650 + i * 110 + Math.sin(t * 0.5 + i) * 6; pencil([[x, 400], [x, 220]], { w: 4, col: '#3a2a1a', pass2: false }); for (let q = 0; q < 2; q++) poly([[x - 30, 250 + q * 60], [x + 30, 250 + q * 60], [x + 24, 290 + q * 60], [x - 24, 290 + q * 60]], { wash: '#f6f2e6', washA: 1, w: 1.4, col: '#5a5040' }); }
    pencil([[920, 400], [920, 180]], { w: 6, col: '#d6a842', pass2: false }); ctx.restore(); pencil([[790, 140], [790, 460]], { w: 6, col: '#4a3a2a', pass2: false });
    rect(80, 240, 360, 220, { wash: '#efe2c0', washA: 1, w: 3, col: '#4a3a2a' }); pencil(spline([[100, 300], [200, 280], [300, 320], [420, 300]], false, 6), { w: 3, col: '#2a5aa8', pass2: false }); txt('MARE BALTICUM', 260, 420, 22, { font: 'Hand', col: '#4a3a2a' });
  }
  function tsar(t) { const x = 360, y = 1330; human(x, y, 1.45, t, { body: '#2a5a3a', hair: '#1a1a1a', face: t > EV.pt_jel ? 'grin' : 'smile', armL: 'hold', armR: t > EV.pt_jel ? 'up' : 'hold', seed: 310, look: 0.5 }); stache(x, y, 1.45);    // Пётр — очень высокий
    if (t > EV.pt_tsar) bubbleTag('ПЁТР I', x, y - 560, t, EV.pt_tsar, '#2a5a3a', 40, -0.04);
    const cx = 640, cy = 1300; human(cx, cy, 1.0, t, { body: '#f6f2ea', hair: '#c8a050', face: 'smile', armL: 'hold', armR: 'up', seed: 311, flip: -1, look: -0.6 }); hat20(cx, cy, 1.0, 'chef', '#fff', -1); if (t > EV.pt_jel) bubbleTag('ПОВАР-ДАТЧАНИН', cx, cy - 430, t, EV.pt_jel + 0.2, '#2b2622', 26, 0.04); }
  function table(t) { const tb = rect(-300, 1380, 1700, 700, { wash: '#6a4020', washA: 1, w: 3, col: '#1a0a04', key: 4610 }); shadeG(tb.path, 540, 1380, 540, 1800, '#2a1408', 0.5); rect(-300, 1370, 1700, 30, { wash: '#f6f2ea', washA: 1, w: 2, col: '#5a5a5a' });
    jellyPlate(360, 1410, 0.8, t, { wob: 0.4 }); const hop = t0 => t < t0 ? null : -Math.max(0, Math.sin(clamp((t - t0) / 0.4) * Math.PI)) * 160;
    let h = hop(EV.pt_cuc); if (h !== null) { cucumber(600, 1390 + h, 1.0, 0.2); cucumber(680, 1400 + h * 0.8, 0.9, -0.3); } h = hop(EV.pt_kraut); if (h !== null) sauerkraut(160, 1400 + h, 1.4); }
  WORLD.peter = (t, u, cat) => { lay(14, () => hall(t)); lay(3, () => tsar(t)); lay(1.3, () => table(t)); lay(1, () => cat()); };
  DIR.peter = {
    outfit: 'dutchA', light: { side: -1, rim: '#fff6e0' }, grade: ['#6a9ad8', 0.06],
    act: () => [[S0.peter, 'awe'], [EV.pt_jel, 'grin'], [EV.pt_cuc, 'talk'], [EV.pt_kraut, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 880, y: 1770, s: 1.12, flip: true, look: [0.8, -0.4], hand: [130, -250], handF: [-90, -220], prop: t > EV.pt_cuc ? 'cucumberP' : undefined }),
    cam: () => [[S0.peter, 540, 950, 0.1], [EV.pt_jel, 460, 1100, 0.2], [EV.pt_cuc, 560, 1200, 0.26, 'x'], [S1.peter, 560, 1180, 0.3]]
  };
  // ---------------------------------------------------------------- переход: скатерть сдёргивается вбок
  TRANS_IN.peter = { a: 0.12, b: 0.4, runA: 1, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const x = Math.pow(k, 1.6) * (W + 400); scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(x, 0, W, H); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
      const c = rect(x - 60, -20, 120, H + 40, { wash: '#f6f2ea', washA: 1, w: 4, col: '#8a8a8a' }); for (let i = 0; i < 12; i++) pencil(spline([[x - 40, i * 170], [x + 20, i * 170 + 60], [x - 30, i * 170 + 140]], false, 5), { w: 3, col: '#b8b4ac', pass2: false }); });
  } };
})();
