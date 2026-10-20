/* 001 — `paris`: 1953, парижский салон общества гурманов. Хрустальные люстры, позолота, высокие окна с Эйфелевой башней в сумерках.
   Жюри (смокинги, монокль, берет, дама в жемчуге) пробует салат; на «лучшим» все поднимают таблички «10», на миску на постаменте ложится медаль «№1 · 50 ЛЕТ»,
   конфетти. Том во фраке с фартуком кланяется. Переход В сцену: хлопушка — полосатые планки схлопываются и раскрываются уже в Париже. */
(() => {
  EV.pr_gourm = wtw('s9', 'гурманы');
  EV.pr_best = wtw('s9', 'лучшим');
  EV.pr_half = wtw('s9', 'полвека!');
  KEYW.push('Парижа', 'лучшим', 'полвека!');

  function hall(t) { vgrad(-400, 1500, ['#3a2a3a', '#6a4a4a', '#4a3030']); const w = rect(-400, 100, 2000, 1200, { wash: '#e8d8c0', washA: 1, w: 2, col: '#4a3a2a', key: 9000 }); shadeG(w.path, 540, 1300, 540, 100, '#a8987a', 0.35);
    for (let i = -1; i < 5; i++) { const x = -100 + i * 320; rect(x, 200, 260, 1000, { line: false, wash: '#f2e6cc', washA: 0.6 }); pencil([[x, 200], [x + 260, 200], [x + 260, 1200], [x, 1200], [x, 200]], { w: 4, col: '#c99636', pass2: false }); pencil([[x + 20, 220], [x + 240, 220], [x + 240, 1180], [x + 20, 1180], [x + 20, 220]], { w: 2, col: '#c99636', a: 0.6, pass2: false }); }
    for (const x of [220, 860]) { const wn = shape(spline([[x - 130, 1150], [x - 130, 420], [x - 60, 320], [x, 300], [x + 60, 320], [x + 130, 420], [x + 130, 1150]], true, 5), { wash: '#4a5a8a', washA: 1, w: 4, col: '#4a3a2a', key: 9001 + x });
      ctx.save(); ctx.clip(wn.path); vgrad(300, 1150, ['#2a3a7a', '#a86a8a', '#f2a870']); for (let i = 0; i < 20; i++) { const r = rng(9010 + i + x); ell(x - 130 + r() * 260, 330 + r() * 300, 2, 2, { wash: '#fff', washA: r(), line: false }); }
      if (x === 860) { push(x, 1150, 1); pencil([[-90, 0], [-10, -620]], { w: 6, col: '#2a2030' }); pencil([[90, 0], [10, -620]], { w: 6, col: '#2a2030' }); for (let i = 0; i < 12; i++) { const y = -i * 50, w = lerp(90, 10, i / 12); pencil([[-w, y], [w, y - 50]], { w: 2, col: '#2a2030', pass2: false }); pencil([[w, y], [-w, y - 50]], { w: 2, col: '#2a2030', pass2: false }); } pencil(spline([[-80, -60], [0, -200], [80, -60]], false, 6), { w: 5, col: '#2a2030' }); pencil([[0, -620], [0, -680]], { w: 4, col: '#2a2030' }); if (Math.sin(t * 6) > 0) glow(0, -680, 30, 'rgba(255,230,160,1)', 0.9); pop(); }
      for (let i = 0; i < 8; i++) { const r = rng(9020 + i + x); rect(x - 130 + i * 34, 1000 + r() * 60, 30, 200, { wash: '#2a2030', washA: 0.85, line: false }); if (r() > 0.4) ell(x - 118 + i * 34, 1040 + r() * 60, 3, 4, { wash: '#ffd890', washA: 1, line: false }); } ctx.restore();
      pencil([[x, 300], [x, 1150]], { w: 5, col: '#4a3a2a' }); for (let j = 0; j < 4; j++) pencil([[x - 130, 500 + j * 180], [x + 130, 500 + j * 180]], { w: 4, col: '#4a3a2a' });
      for (const sd of [-1, 1]) { const d = shape(spline([[x + sd * 150, 260], [x + sd * 220, 260], [x + sd * 200, 1200], [x + sd * 140, 1200], [x + sd * 120, 700]], true, 5), { wash: '#7a1a2a', washA: 1, w: 2.4, col: '#2a0610' }); shadeG(d.path, x + sd * 220, 0, x + sd * 130, 0, '#2a0610', 0.5); } }
  }
  function chandelier(x, y, s, t) { push(x, y, s, Math.sin(t * 0.7 + x) * 0.02); pencil([[0, -400], [0, 0]], { w: 4, col: '#8a6a2a' }); for (let r = 0; r < 3; r++) { const R = 160 - r * 50, yy = r * -60; pencil(ellPts(0, yy, R, R * 0.25, 0, 0, 30), { w: 5, col: '#c99636', pass2: false }); for (let i = 0; i < 10 - r * 2; i++) { const a = i / (10 - r * 2) * 6.283; const bx = Math.cos(a) * R, by = yy + Math.sin(a) * R * 0.25; pencil([[bx, by], [bx, by + 40]], { w: 2, col: '#e8f0ff', a: 0.8, pass2: false }); ell(bx, by + 46, 6, 9, { wash: '#e8f4ff', washA: 0.9, w: 1, col: '#8aa0c0' }); glow(bx, by - 10, 50, 'rgba(255,220,150,1)', 0.35); } } pop(); }
  function jury(t) { const up = t > EV.pr_best - 0.1; const P = [[60, { body: '#141418', hair: '#c8c8c8', beard: 'short', hatK: 'tophat' }], [250, { body: '#141418', hair: '#5a3a1a', hatK: 'beret', hatC: '#2a2a3a' }], [440, { body: '#7a1a3a', long: 1, hair: '#2a1a0a' }], [1000, { body: '#141418', hair: '#8a8a8a' }]];
    P.forEach(([x, o], i) => { human(x, 1240, 0.95, t, Object.assign({ legs: '#141418', face: up ? 'grin' : 'calm', armL: 'hold', armR: up ? 'up' : 'hold', seed: 140 + i }, o)); if (o.hatK) hat20(x, 1240, 0.95, o.hatK, o.hatC || '#141418');
      if (i === 0) { ell(x + 14, 1240 - 290 * 0.95, 9, 9, { wash: '#e8f0f4', washA: 0.3, w: 2, col: '#c99636' }); pencil([[x + 22, 1240 - 284 * 0.95], [x + 30, 1240 - 200 * 0.95]], { w: 1.4, col: '#c99636', pass2: false }); }
      if (up) { const kk = popK(t, EV.pr_best - 0.1 + i * 0.08, 0.3), hx = x + 82 * 0.95, hy = 1240 - 320 * 0.95; push(hx, hy - 60, kk, (i - 1.5) * 0.06); rect(-50, -50, 100, 90, { wash: '#f8f4ea', washA: 1, w: 2.4, col: '#2b2622' }); txt('10', 0, -4, 60, { font: 'Osw', col: '#d9482b' }); pop(); } });
    const tb = rect(-200, 1180, 1500, 120, { wash: '#f8f4ea', washA: 1, w: 2.4, col: '#4a3a2a', key: 9030 }); for (let i = 0; i < 6; i++) { ell(-80 + i * 240, 1190, 60, 14, { wash: '#ffffff', washA: 1, w: 1.6, col: '#7a7a7a' }); push(-30 + i * 240, 1170, 1); poly([[-14, -60], [14, -60], [4, -20], [-4, -20]], { wash: '#f4e8b0', washA: 0.7, w: 1.6, col: '#5a5a5a' }); pencil([[0, -20], [0, 0]], { w: 3, col: '#e8f0f4', pass2: false }); pop(); } }
  function pedestal(t) { push(740, 1500, 1); rect(-110, -260, 220, 260, { wash: '#efe6d2', washA: 1, w: 3, col: '#4a3a2a' }); rect(-130, -280, 260, 30, { wash: '#efe6d2', washA: 1, w: 2.6, col: '#4a3a2a' }); pop();
    woodBowl(740, 1180, 150, 90, { part: 'back' }); for (let i = 0; i < 6; i++) leaf(680 + i * 26, 1190, 0.62, -0.6 + i * 0.25, { key: 9040 + i, shine: 1 }); woodBowl(740, 1180, 150, 90, { part: 'front' });
    if (t > EV.pr_best + 0.2) { const k = popK(t, EV.pr_best + 0.2, 0.35); push(740, 1300, k, 0.05); pencil([[-40, -110], [0, -10], [40, -110]], { w: 18, col: '#2a3a8a', pass2: false }); pencil([[-16, -110], [0, -40], [16, -110]], { w: 6, col: '#d9482b', pass2: false }); const m = ell(0, 20, 54, 54, { wash: '#e8b53a', washA: 1, w: 3, col: '#6a4a08' }); metalG(m.path, -14, 0, 70, '#fff2b0', '#e8b53a', '#7a5a08'); txt('№1', 0, 6, 40, { font: 'Osw', col: '#6a4a08' }); txt('50 ЛЕТ', 0, 44, 16, { font: 'Osw', col: '#6a4a08' }); pop(); glow(740, 1320, 160, 'rgba(255,230,140,1)', 0.4 * k); } }
  function confetti(t) { if (t < EV.pr_best) return; const dt = t - EV.pr_best; for (let i = 0; i < 60; i++) { const r = rng(9050 + i), x = r() * 1200 - 60 + Math.sin(dt * 3 + i) * 30, y = -100 + dt * (400 + r() * 300) + r() * 200; if (y > 2000) continue; push(x, y, 1, dt * 6 + i); rect(-8, -4, 16, 8, { wash: ['#d9482b', '#e8b53a', '#6b7a2e', '#f4e6c8', '#2a3a8a'][i % 5], washA: 1, line: false }); pop(); } }
  WORLD.paris = (t, u, cat) => {
    lay(12, () => hall(t)); lay(6, () => { chandelier(300, 180, 1.0, t); chandelier(820, 140, 0.9, t); });
    lay(3, () => { const f = poly([[-500, 1250], [1700, 1250], [1700, 2400], [-500, 2400]], { wash: '#8a5a3a', washA: 1, w: 2, col: '#2a1408', key: 9060 }); ctx.save(); ctx.clip(f.path); for (let i = -20; i < 30; i++) { pencil([[540 + i * 60, 1250], [540 + i * 140, 2400]], { w: 1.6, col: '#5a3418', a: 0.6, pass2: false }); } ctx.restore(); rect(-500, 1300, 2200, 600, { line: false, wash: '#8a1a2a', washA: 0.0 }); jury(t); });
    lay(1.4, () => pedestal(t));
    lay(1, () => { cat(); });
    lay(0.6, () => confetti(t));
  };
  DIR.paris = {
    outfit: 'tuxA', light: { side: 1, rim: '#ffe8c0' }, grade: ['#f0a0a0', 0.08],
    act: () => [[S0.paris, 'talk'], [EV.pr_gourm, 'smug'], [EV.pr_best, 'awe'], [EV.pr_best + 0.6, 'proud'], [EV.pr_half, 'laugh']],
    pose: (t, u, b) => { const bow = t > EV.pr_best + 0.5 && t < EV.pr_half; return Object.assign(b, { x: 380, y: 1680, s: 1.2, tilt: bow ? 0.2 : 0, nod: bow ? 0.3 : 0, look: bow ? [0.2, 0.6] : [0.6, -0.2], hand: bow ? [60, -120] : [90, -170], handF: bow ? [-160, -280] : [-90, -160] }); },
    cam: () => [[S0.paris, 540, 900, 0.1], [EV.pr_gourm, 520, 1000, 0.12], [EV.pr_best, 560, 1060, 0.2], [EV.pr_half, 560, 1100, 0.28], [S1.paris, 540, 1120, 0.32]]
  };
  // ---------------------------------------------------------------- переход: хлопушка
  TRANS_IN.paris = { a: 0.2, b: 0.35, runA: 0, fx(k, t, A, B) {
    const c = k < 0.45 ? sm(k / 0.45) : 1 - sm((k - 0.45) / 0.55); drawBuf(k < 0.45 ? A : B, 1, 540, 960);
    scr(() => { for (const sd of [-1, 1]) { const h = 960 * c; if (h < 2) continue; const y0 = sd < 0 ? 0 : 1920 - h; ctx.save(); ctx.beginPath(); ctx.rect(0, y0, 1080, h); ctx.clip(); ctx.fillStyle = '#141414'; ctx.fillRect(0, y0, 1080, h);
      for (let i = -2; i < 12; i++) { ctx.fillStyle = '#f4f0e6'; ctx.beginPath(); const yy = sd < 0 ? y0 + h - 160 : y0; ctx.moveTo(i * 140, yy); ctx.lineTo(i * 140 + 70, yy); ctx.lineTo(i * 140 + 140, yy + 160); ctx.lineTo(i * 140 + 70, yy + 160); ctx.closePath(); ctx.fill(); } ctx.restore(); }
      if (k > 0.42 && k < 0.5) whiteOut(0.6); });
  } };
})();
