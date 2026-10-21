/* 002 — `idaho`: «Американец Симплот научился морозить фри — и с шестьдесят седьмого кормит Макдоналдс.» Айдахо, 1950-е: картофельные поля до гор,
   завод с трубой и цистерной, ряды мешков «FROZEN FRENCH FRIES», фермер в стетсоне. Том (джинсовый комбинезон, соломенная шляпа, фартук) держит заледеневшую фри.
   «морозить» — иней ползёт по краям кадра, фри синеют и покрываются кристаллами; «шестьдесят седьмого» — по дороге мчит рефрижератор к закусочной 1960-х с неоновой вывеской.
   Переход В сцену: открывается дверь морозильной камеры — в лицо зрителю валит морозный пар. */
(() => {
  EV.id_simplot = wtw('s8', 'Симплот');
  EV.id_freeze = wtw('s8', 'морозить');
  EV.id_67 = wtw('s8', 'шестьдесят');
  EV.id_mc = wtw('s8', 'Макдоналдс.');
  KEYW.push('морозить');
  const fz = t => clamp((t - EV.id_freeze) / 0.7);
  function sky(t) { vgrad(-600, 1100, ['#6aa0d0', '#a8cce4', '#e8eef0']); glow(820, 300, 260, 'rgba(255,250,220,1)', 0.6); for (let i = 0; i < 3; i++) { const x = ((t * 10 + i * 600) % 2000) - 400; blob([[x, 260 + i * 80], [x + 120, 220 + i * 80], [x + 280, 236 + i * 80], [x + 340, 290 + i * 80], [x + 140, 300 + i * 80]], { wash: '#ffffff', washA: 0.85, w: 1.2, col: '#a8b8c8', a: 0.5 }); } }
  function mountains() { const P = [[-500, 1000]]; for (let i = 0; i <= 16; i++) P.push([-500 + i * 140, 700 - (i % 2 ? 180 : 40) - Math.sin(i) * 60]); P.push([1800, 1000]); const m = shape(P, { wash: '#7a8aa0', washA: 1, w: 2, col: '#3a4658', key: 9100 }); shadeG(m.path, 1000, 0, -200, 0, '#4a5668', 0.4);
    for (let i = 0; i < 8; i++) { const x = -360 + i * 280, y = 700 - 180 - Math.sin(i * 2 + 1) * 60; blob([[x - 40, y + 60], [x, y], [x + 40, y + 60], [x + 10, y + 50]], { wash: '#f4f8fa', washA: 0.9, line: false }); } haze('#dfe8ee', 0.25); }
  function fields(t) { rect(-600, 980, 2300, 300, { wash: '#7a8a3a', washA: 1, w: 2, col: '#3a4418', key: 9110 }); for (let i = 0; i < 26; i++) { const x = -800 + i * 110; pencil([[540 + (x - 540) * 0.25, 990], [x, 1290]], { w: 6, col: '#5a6a26', a: 0.8, pass2: false }); for (let k = 0; k < 4; k++) { const q = (k + 1) / 5, px = 540 + (x - 540) * (0.25 + q * 0.75), py = 990 + q * 300; ell(px, py, 8 + q * 14, 5 + q * 8, { wash: '#4a7a2a', washA: 1, w: 1, col: '#2a3a10' }); } } }
  function factory(t) {                                                 // завод: корпус, труба с дымом, цистерна, табличка
    push(-80, 1000, 1); rect(-260, -320, 520, 320, { wash: '#c8c0b0', washA: 1, w: 2.6, col: '#3a3a3a', key: 9120 }); for (let i = 0; i < 4; i++) poly([[-260 + i * 130, -320], [-195 + i * 130, -380], [-130 + i * 130, -320]], { wash: '#9a9488', washA: 1, w: 2, col: '#3a3a3a' });
    for (let i = 0; i < 6; i++) rect(-230 + i * 80, -260, 50, 80, { wash: '#5a7a9a', washA: 0.9, w: 1.4, col: '#2a2a2a' }); rect(-150, -150, 300, 60, { wash: '#2a4a8a', washA: 1, w: 2, col: '#1a1a2a' }); txt('FROZEN FOODS', 0, -118, 34, { font: 'Osw', col: '#fbf6ea' });
    rect(200, -620, 60, 300, { wash: '#8a4a32', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 6; i++) { const ph = (t * 0.25 + i / 6) % 1; ell(230 + ph * 120, -640 - ph * 300, 30 + ph * 60, 24 + ph * 40, { wash: '#f4f4f0', washA: 0.7 * (1 - ph), line: false }); }
    const tk = ell(-340, -120, 70, 120, { wash: '#d8dce0', washA: 1, w: 2, col: '#3a3e44' }); metalG(tk.path, -360, -160, 140, '#ffffff', '#c8ccd0', '#6a6e74'); pop();
  }
  function bags(t) {                                                    // штабель мешков замороженной фри, ящик-морозилка
    for (let r = 0; r < 3; r++) for (let i = 0; i < 4 - r; i++) { const x = 760 + i * 120 + r * 60, y = 1460 - r * 110; const b = blob([[x - 56, y], [x - 52, y - 100], [x + 52, y - 100], [x + 56, y]], { wash: '#f4f0e6', washA: 1, w: 2, col: '#3a3a3a', key: 9130 + r * 5 + i }); shadeG(b.path, x + 56, 0, x - 20, 0, '#a8a498', 0.4);
      rect(x - 42, y - 80, 84, 40, { wash: '#2a6aa8', washA: 1, w: 1.4, col: '#1a2a4a' }); txt('FROZEN', x, y - 66, 18, { font: 'Osw', col: '#fbf6ea' }); txt('FRIES', x, y - 48, 18, { font: 'Osw', col: '#fbf6ea' }); ell(x, y - 20, 18, 12, { wash: '#e8b53a', washA: 1, w: 1, col: '#8a5a08' }); }
  }
  function farmer(t) { human(220, 1560, 1.05, t, { body: '#e8dcc4', legs: '#2a4a7a', hair: '#7a5a3a', face: t > EV.id_freeze ? 'grin' : 'calm', armL: 'hips', armR: t > EV.id_simplot && t < EV.id_freeze ? 'wave' : 'hold', seed: 160, look: 0.5, belt: '#5a3a1a' });
    push(220, 1560 - 284 * 1.05, 1.05); ell(0, -30, 92, 18, { wash: '#c8a46a', washA: 1, w: 2, col: '#3a2a10' }); blob([[-46, -30], [-42, -86], [-10, -94], [0, -82], [10, -94], [42, -86], [46, -30]], { wash: '#d8b47a', washA: 1, w: 2, col: '#3a2a10' }); rect(-44, -46, 88, 12, { wash: '#5a3a1a', washA: 1, w: 1.2 }); pop(); }
  function road(t) {                                                    // дорога к закусочной 1960-х, рефрижератор
    if (t < EV.id_67 - 0.3) return; const k = clamp((t - EV.id_67 + 0.3) / 1.6);
    push(860, 960, 0.9); rect(-200, -260, 400, 260, { wash: '#f4f0e6', washA: 1, w: 2.4, col: '#2a2a2a', key: 9140 }); rect(-200, -300, 400, 50, { wash: '#d9482b', washA: 1, w: 2, col: '#2a2a2a' });
    for (const sd of [-1, 1]) { const a = pencil(spline([[sd * 60, 0], [sd * 90, -260], [sd * 130, -420], [sd * 170, -260], [sd * 200, 0]], false, 10), { w: 22, col: '#f2c81e' }); }
    rect(-160, -200, 320, 140, { wash: '#8ab8d8', washA: 0.85, w: 2, col: '#2a2a2a' }); const on = Math.sin(t * 12) > -0.3; rect(-150, -380, 300, 70, { wash: '#2a2a2a', washA: 1, w: 2 }); txt('BURGERS · FRIES', 0, -344, 34, { font: 'Osw', col: on ? '#ffd860' : '#8a7a40' }); if (on) glow(0, -344, 200, 'rgba(255,220,90,1)', 0.4); pop();
    const tx = lerp(-400, 640, sm(k)); push(tx, 1040, 0.7); const tr = rect(-220, -150, 300, 150, { wash: '#f4f6f8', washA: 1, w: 2.4, col: '#2a2a2a' }); txt('FROZEN', -70, -90, 40, { font: 'Osw', col: '#2a6aa8' }); txt('❄', -70, -40, 40, { font: 'Osw', col: '#2a6aa8' });
    blob([[80, 0], [80, -120], [160, -120], [200, -60], [200, 0]], { wash: '#d9482b', washA: 1, w: 2.4, col: '#2a2a2a' }); rect(110, -110, 50, 40, { wash: '#8ab8d8', washA: 1, w: 1.6 }); for (const x of [-160, 0, 150]) ell(x, 0, 30, 30, { wash: '#1a1a1a', washA: 1, w: 2 }); pop();
    for (let i = 0; i < 4; i++) ell(tx - 300 - i * 50, 1020, 30 + i * 10, 20, { wash: '#e8e0d0', washA: 0.4 - i * 0.08, line: false });
  }
  function frost(t) { const q = fz(t); if (q <= 0) return; scr(() => { for (let i = 0; i < 70; i++) { const r = rng(9150 + i), side = i % 4, L = q * (60 + r() * 220), p = r(); let x, y, a;
      if (side === 0) { x = p * W; y = 0; a = 1.57; } else if (side === 1) { x = p * W; y = H; a = -1.57; } else if (side === 2) { x = 0; y = p * H; a = 0; } else { x = W; y = p * H; a = 3.14; }
      a += (r() - 0.5) * 0.9; pencil([[x, y], [x + Math.cos(a) * L, y + Math.sin(a) * L]], { w: 3, col: '#eaf6ff', a: 0.85, pass2: false }); for (const sd of [-1, 1]) pencil([[x + Math.cos(a) * L * 0.5, y + Math.sin(a) * L * 0.5], [x + Math.cos(a) * L * 0.5 + Math.cos(a + sd * 0.8) * L * 0.3, y + Math.sin(a) * L * 0.5 + Math.sin(a + sd * 0.8) * L * 0.3]], { w: 2, col: '#eaf6ff', a: 0.7, pass2: false }); }
    const g = ctx.createRadialGradient(540, 960, 500, 540, 960, 1200); g.addColorStop(0, 'rgba(200,230,255,0)'); g.addColorStop(1, `rgba(200,230,255,${0.45 * q})`); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); }); }
  PROPS.iceFryP = () => { const q = fz(TT); fry(0, -90, 210, 0.15, { key: 7370, w: 22, col: lerpC(FR.fry, '#bfe0f4', q) }); if (q > 0) { push(0, -90, 1, 0.15); for (let i = 0; i < 5; i++) poly([[-14 + i * 6, -100 + i * 40], [-4 + i * 6, -112 + i * 40], [6 + i * 6, -96 + i * 40]], { wash: '#ffffff', washA: q, w: 1, col: '#8ab8d8', a: q }); pop(); } };
  let TT = 0;
  WORLD.idaho = (t, u, cat) => { TT = t;
    lay(40, () => { sky(t); mountains(); });
    lay(12, () => { fields(t); factory(t); road(t); haze('#e8eef2', 0.06); });
    lay(1.3, () => { bags(t); farmer(t); });
    lay(1, () => { cat(); });
    lay(0.8, () => { if (fz(t) > 0) motes(26, [-200, 0, 1300, 1900], '#ffffff', t, 14, { sp: 50, vx: 10, sz: 6, a: 0.8 * fz(t) }); });
    frost(t);
  };
  DIR.idaho = {
    outfit: 'farmer', light: { side: 1, rim: '#fff2c8' }, grade: ['#a8d0f0', 0.08],
    act: () => [[S0.idaho, 'talk'], [EV.id_simplot, 'proud'], [EV.id_freeze, 'cold'], [EV.id_67, 'awe'], [EV.id_mc, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1640, s: 1.0, look: t < EV.id_freeze ? [-0.6, 0] : t < EV.id_67 ? [0.3, -0.5] : [0.9, -0.3], hand: [120, -320], prop: 'iceFryP', handF: t > EV.id_67 ? [130, -300] : [-110, -190], point: t > EV.id_67 ? 1 : undefined,
      frost: fz(t) * 0.8, chatter: t > EV.id_freeze && t < EV.id_67 }),
    cam: () => [[S0.idaho, 540, 800, 0.04], [EV.id_simplot, 380, 1160, 0.2, 'x'], [EV.id_freeze, 560, 1100, 0.3], [EV.id_67 - 0.1, 560, 1100, 0.26], [EV.id_67 + 0.5, 760, 960, 0.12, 'x'], [S1.idaho, 780, 960, 0.14]]
  };
  // ---------------------------------------------------------------- переход: дверь морозильной камеры распахивается в камеру, валит пар
  TRANS_IN.idaho = { a: 0.2, b: 0.45, runA: 1, fx(k, t, A, B) {
    drawBuf(B, 1.08 - 0.08 * k, 540, 960); const op = sm(k), wd = Math.max(0, Math.cos(op * 1.5)) * W;
    if (wd > 2) { ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.rect(0, 0, wd, H); ctx.clip(); ctx.translate(0, 0); ctx.scale(wd / W, 1); ctx.drawImage(A, 0, 0); ctx.restore();
      scr(() => { const d = rect(0, 0, wd, H, { wash: '#e8eef2', washA: 0.25, w: 6, col: '#5a6a78' }); metalG(d.path, wd * 0.3, 600, 1400, '#ffffff', '#c8d4dc', '#7a8a98', 0.6); pencil([[wd - 60 * (wd / W), 820], [wd - 60 * (wd / W), 1100]], { w: Math.max(4, 22 * wd / W), col: '#5a6a78' }); }); }
    scr(() => { for (let i = 0; i < 18; i++) { const r = rng(2700 + i); glow(wd + r() * 600, r() * 1920, 200 + r() * 200, 'rgba(235,245,255,1)', 0.7 * Math.sin(k * Math.PI), 'source-over'); } });
  } };
})();
