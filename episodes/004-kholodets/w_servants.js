/* 004 — `servants`: «А в девятнадцатом веке студень считали едой для прислуги.» Разрез усадьбы: наверху — барский зал (люстра, лакеи, господа во фраках морщат носы
   от студня), внизу — людская кухня (печь, кухарка, лакеи с удовольствием едят студень). На «прислуги» тарелка съезжает по лестнице вниз. Том-лакей с подносом.
   Переход В сцену: колокольчик звонка прислуги — звуковая волна кольцами сменяет кадр. */
(() => {
  EV.sv_pr = wtw('s6', 'прислуги.');
  KEYW.push('прислуги.');

  function house(t) {                                                  // верх — зал, низ — людская
    vgrad(-600, 760, ['#6a4a5a', '#8a6a7a']); for (let i = 0; i < 8; i++) rect(-200 + i * 200, 200, 180, 520, { wash: '#a88a9a', washA: 0.6, w: 1.4, col: '#4a2a3a' }); push(540, 140, 1); pencil([[0, -140], [0, 0]], { w: 4, col: '#c99636', pass2: false }); for (let i = 0; i < 9; i++) { const a = i / 8 * Math.PI; ell(Math.cos(a) * 160, 20 + Math.sin(a) * 40, 10, 16, { wash: '#fff2c0', washA: 1, w: 1, col: '#8a6a2a' }); } glow(0, 20, 260, 'rgba(255,230,160,1)', 0.5); pop();
    rect(-300, 740, 1700, 40, { wash: '#4a2a1a', washA: 1, w: 3, col: '#1a0a04' }); vgrad(780, 1600, ['#5a4632', '#3a2a1e']); for (let i = 0; i < 20; i++) pencil([[-300, 800 + i * 40], [1400, 806 + i * 40]], { w: 2, col: '#2a1e14', a: 0.5, pass2: false });
    const ov = rect(40, 900, 260, 420, { wash: '#efe6d0', washA: 1, w: 3, col: '#3a2a14', key: 4700 }); rect(100, 1100, 140, 110, { wash: '#2a1408', washA: 1, w: 2 }); glow(170, 1160, 120, 'rgba(255,150,60,1)', 0.6);
    for (let i = 0; i < 6; i++) { const y = 740 + i * 70, x = 1040 - i * 60; rect(x, y, 120, 20, { wash: '#7a4a24', washA: 1, w: 2, col: '#2a1408' }); }
  }
  function masters(t) { for (const [x, i] of [[300, 0], [520, 1], [760, 2]]) { human(x, 720, 0.8, t, { body: ['#1a1a24', '#6a2a4a', '#1a1a24'][i], hair: ['#8a6a3a', '#3a1a0a', '#c8c8c8'][i], face: t > EV.sv_pr - 0.6 ? 'angry' : 'calm', armL: 'hold', armR: i === 1 ? 'point' : 'hold', seed: 320 + i, flip: i === 2 ? -1 : 1, long: i === 1 ? 1 : 0 }); if (i !== 1) hat20(x, 720, 0.8, 'tophat'); }
    rect(240, 600, 600, 30, { wash: '#f6f2ea', washA: 1, w: 2, col: '#5a5a5a' }); const k = clamp((t - EV.sv_pr + 0.6) / 1.2), px = lerp(520, 1100, k), py = k < 0.5 ? 590 : lerp(590, 1200, (k - 0.5) * 2); push(px, py, 0.45, k * 1.5); jellyPlate(0, 0, 1, t, { wob: 0.6 }); pop(); }
  function kitchen(t) { for (const [x, i] of [[440, 0], [640, 1]]) human(x, 1320, 1.0, t, { body: ['#6a5a3a', '#4a5a6a'][i], hair: ['#3a2a1a', '#8a5a2a'][i], face: t > EV.sv_pr ? 'grin' : 'smile', armL: 'hold', armR: 'up', seed: 330 + i, flip: i ? -1 : 1, long: i, hat: i ? 'scarf' : undefined, hatCol: '#f6f0e0' });
    rect(320, 1240, 440, 26, { wash: '#8a5a2a', washA: 1, w: 2, col: '#2a1408' }); if (t > EV.sv_pr + 0.5) jellyPlate(540, 1240, 0.6, t, { wob: 0.4 }); }
  WORLD.servants = (t, u, cat) => { lay(10, () => house(t)); lay(2.6, () => { masters(t); kitchen(t); }); lay(1, () => { rect(-300, 1460, 1700, 600, { wash: '#2a1e14', washA: 1, w: 2, col: '#000', key: 4710 }); cat(); }); };
  DIR.servants = {
    outfit: 'waiter', light: { side: -1, rim: '#ffd8a0' }, grade: ['#c87a5a', 0.1],
    act: () => [[S0.servants, 'suspicious'], [EV.sv_pr, 'annoyed'], [EV.sv_pr + 0.5, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 880, y: 1780, s: 1.1, flip: true, look: t < EV.sv_pr ? [0.4, -0.9] : [0.6, 0.2], hand: [110, -230], handF: [-90, -220], prop: 'tray' }),
    cam: () => [[S0.servants, 540, 800, 0.1], [EV.sv_pr, 600, 1000, 0.08, 'x'], [S1.servants, 620, 1080, 0.14]]
  };
  // ---------------------------------------------------------------- переход: колокольчик прислуги — кольца звуковой волны
  TRANS_IN.servants = { a: 0.12, b: 0.45, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const R = Math.pow(k, 1.3) * 1500; inCircle(900, 300, R, () => drawBuf(B, 1, 540, 960));
    scr(() => { for (let i = 0; i < 4; i++) { const r = R + i * 60; pencil(ellPts(900, 300, r, r, 0, 0, 60), { w: 8 - i * 1.5, col: '#e8c060', a: (1 - k) * (1 - i * 0.2), pass2: false }); } if (k < 0.5) { push(900, 300, 1.2, Math.sin(t * 40) * 0.3); poly([[-40, 30], [-30, -30], [0, -50], [30, -30], [40, 30]], { wash: '#d6a842', washA: 1, w: 3, col: '#5a3a08' }); pop(); } });
  } };
})();
