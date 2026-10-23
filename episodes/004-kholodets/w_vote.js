/* 004 — `vote`: «Голосуют иностранцы: за свои блюда на этом сайте голосовать нельзя.» Стена из 9 экранов-окошек видеозвонков: люди разных стран смотрят на холодец
   и жмут «палец вниз», один зажимает нос. «нельзя» — на экране со своим флагом-сердечком появляется замок и «✕». Том-адвокат записывает в блокнот.
   Переход В сцену: желе дрожит — кадр хука качается «желейной» волной и сменяется. */
(() => {
  EV.vt_for = wtw('s1', 'свои');
  EV.vt_no = wtw('s1', 'нельзя.');
  KEYW.push('нельзя.');

  function wall(t) {                                                   // 3×3 окна видеочата
    vgrad(-600, 1600, ['#141822', '#202838', '#2a3446']); const faces = ['shock', 'angry', 'calm', 'shock', 'angry', 'smile', 'shock', 'calm', 'angry'];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) { const i = r * 3 + c, x = 130 + c * 290, y = 420 + r * 330; const bg = ['#5a7aa8', '#a87a5a', '#6aa87a', '#a85a7a', '#7a6aa8', '#a8a05a', '#5aa8a0', '#a86a5a', '#6a7aa8'][i];
      rect(x - 135, y - 150, 270, 300, { wash: '#0a0a10', washA: 1, w: 3, col: '#3a4460', key: 4200 + i }); const sc = rect(x - 125, y - 140, 250, 250, { wash: bg, washA: 1, w: 1.4, col: '#000' }); ctx.save(); ctx.clip(sc.path);
      human(x, y + 230, 0.95, t, { body: ['#3a4a6a', '#6a3a2a', '#2a5a3a'][i % 3], hair: ['#2a1a0a', '#e8c070', '#1a1a1a', '#8a3a1a'][i % 4], skin: ['#e2b48e', '#8a5a3a', '#f0c8a0', '#c8946a'][i % 4], face: faces[i], armL: 'hold', armR: (t > EV.vt_for && i % 2 === 0) ? 'up' : 'hold', seed: 270 + i, look: 0.2 });
      ctx.restore(); if (t > LS('s1') + i * 0.08) { const k = popK(t, LS('s1') + i * 0.08, 0.3); push(x + 90, y + 80, k * 0.6, Math.PI); blob([[-30, -30], [10, -34], [14, -60], [30, -60], [32, -30], [40, 20], [-30, 24]], { wash: '#ffd27a', washA: 1, w: 3, col: '#5a3a08' }); pop(); }
      if (i === 4 && t > EV.vt_no) { const k = popK(t, EV.vt_no, 0.3); push(x, y - 20, k); rect(-50, -20, 100, 80, { wash: '#c8a040', washA: 1, w: 3, col: '#3a2a08' }); pencil(spline([[-30, -20], [-30, -60], [30, -60], [30, -20]], false, 6), { w: 10, col: '#8a8a8a', pass2: false }); pop();
        pencil([[x - 110, y - 120], [x + 110, y + 100]], { w: 10, col: '#d9482b', pass2: false }); pencil([[x + 110, y - 120], [x - 110, y + 100]], { w: 10, col: '#d9482b', pass2: false }); bubbleTag('СВОИ — НЕЛЬЗЯ', x, y + 190, t, EV.vt_no + 0.1, '#2b2622', 30, -0.04); } }
  }
  WORLD.vote = (t, u, cat) => { lay(6, () => wall(t)); lay(1, () => { const f = rect(-300, 1460, 1700, 600, { wash: '#1a1e2a', washA: 1, w: 2, col: '#000', key: 4210 }); cat(); }); };
  DIR.vote = {
    outfit: 'lawyer', light: { side: 1, rim: '#a8c8ff' }, grade: ['#4a6ab8', 0.08],
    act: () => [[S0.vote, 'suspicious'], [EV.vt_for, 'sideeye'], [EV.vt_no, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 820, y: 1800, s: 1.15, flip: true, look: [0.6, -0.6], hand: [100, -260], handF: [-80, -240], prop: 'folderP' }),
    cam: () => [[S0.vote, 540, 900, 0.06], [EV.vt_no, 560, 960, 0.12], [S1.vote, 560, 980, 0.16]]
  };
  // ---------------------------------------------------------------- переход: желейная волна — кадр колышется и сменяется
  TRANS_IN.vote = { a: 0.15, b: 0.4, runA: 1, fx(k, t, A, B) {
    const n = 32, h = H / n, amp = Math.sin(k * Math.PI) * 120; for (let i = 0; i < n; i++) { const dx = Math.sin(i * 0.5 + k * 14) * amp, P = new Path2D(); P.rect(0, i * h, W, h + 1); inPath(P, () => drawBuf(k < 0.5 ? A : B, 1 + 0.05 * Math.sin(k * Math.PI), 540, 960, 1, null, dx, 0)); }
    scr(() => { ctx.fillStyle = `rgba(216,180,106,${0.35 * Math.sin(k * Math.PI)})`; ctx.fillRect(0, 0, W, H); });
  } };
})();
