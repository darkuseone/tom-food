/* 003 — `tavern`: «Легенда: восемнадцатый год, трактир. Посетители спорят о политике — до драки.» Трактир-сепия (кадр подкрашен под старую открытку): бревенчатые стены,
   самовар, лампы-керосинки, вывеска «ТРАКТИРЪ», лавки, бородачи в картузах. «спорят» — машут газетами и кулаками, «драки» — летит табурет, кружки, перья из подушки.
   Том-половой с полотенцем и подносом. Переход В сцену: вилка протыкает кадр — 4 прорези-зубца, сквозь них новая сцена. */
(() => {
  EV.tv_leg = LS('s1') + 0.05;
  EV.tv_trak = wtw('s1', 'трактир.');
  EV.tv_argue = wtw('s1', 'спорят');
  EV.tv_fight = wtw('s1', 'драки.');
  SHAKES.push([EV.tv_fight + 0.1, 0.3, 14]);
  KEYW.push('драки.');

  function walls(t) {                                                  // брёвна, окно с метелью, вывеска, полка с посудой
    vgrad(-600, 1600, ['#2a1a0e', '#4a3018', '#6a4422']); for (let i = 0; i < 18; i++) { const y = 60 + i * 74; const l = rect(-300, y, 1700, 70, { wash: i % 2 ? '#7a5028' : '#6a4420', washA: 1, w: 2, col: '#2a1408', key: 3200 + i }); shadeG(l.path, 0, y + 70, 0, y, '#3a2010', 0.5); for (let q = 0; q < 6; q++) ell(-200 + q * 300 + (i % 3) * 60, y + 35, 14, 10, { line: true, w: 1.6, col: '#3a2010', a: 0.6 }); }
    const w = rect(700, 260, 280, 300, { wash: '#2a3a5a', washA: 1, w: 8, col: '#3a2010', key: 3220 }); ctx.save(); ctx.clip(w.path); vgrad(260, 560, ['#1a2440', '#4a5a7a']); motes(40, [700, 260, 980, 560], '#ffffff', t, 3221, { sp: 120, vx: 80, sz: 4, a: 0.9 }); ctx.restore(); pencil([[840, 260], [840, 560]], { w: 6, col: '#3a2010', pass2: false }); pencil([[700, 410], [980, 410]], { w: 6, col: '#3a2010', pass2: false }); frost(700, 500, 280, 60, t, 0.8);
    push(540, 150, 1, -0.02); rect(-230, -50, 460, 100, { wash: '#3a2010', washA: 1, w: 3, col: '#1a0a04' }); txt('ТРАКТИРЪ', 0, 4, 70, { font: 'Osw', col: '#e8c060' }); pop();
    rect(60, 620, 380, 16, { wash: '#5a3418', washA: 1, w: 2, col: '#1a0a04' }); for (let i = 0; i < 6; i++) { ell(90 + i * 60, 600, 24, 20, { wash: ['#e8e0d0', '#3a7ab8', '#d9482b'][i % 3], washA: 1, w: 1.8, col: '#2a1a10' }); }
    for (const x of [300, 1000]) { pencil([[x, 0], [x, 300]], { w: 3, col: '#2a1a10', pass2: false }); rect(x - 20, 300, 40, 50, { wash: '#c8a040', washA: 1, w: 2, col: '#4a2a06' }); glow(x, 330, 150 * flick(t, x), 'rgba(255,190,90,1)', 0.5); }
  }
  function crowd(t) {                                                  // спорщики: машут газетами, к «драки» — кулаки и летящий табурет
    const argue = t > EV.tv_argue, fight = t > EV.tv_fight; const P = [[120, '#5a3a2a', 'long', 0], [330, '#3a4a5a', 'short', 1], [560, '#6a2a2a', undefined, 2], [800, '#4a5a3a', 'long', 3], [1010, '#5a4a6a', 'short', 4]];
    P.forEach(([x, c, beard, i]) => { const sw = argue ? Math.sin(t * (9 + i) + i) * 10 : 0; human(x + sw, 1230, 1.1, t, { body: c, hair: ['#2a1a0a', '#6a4a2a', '#1a1a1a', '#8a6a3a', '#3a2a1a'][i], face: fight ? 'angry' : argue ? (i % 2 ? 'angry' : 'shock') : 'smile', armL: argue ? 'up' : 'hold', armR: fight ? 'point' : argue ? 'swing' : 'hold', seed: 150 + i, flip: i % 2 ? -1 : 1, beard, look: i % 2 ? -0.6 : 0.6, prop: argue && i === 1 ? 'scroll' : undefined });
      const hy = 1230 + (-238 - 46) * 1.1; ell(x + sw, hy - 34, 48, 14, { wash: '#2a2a30', washA: 1, w: 1.8, col: '#0a0a0a' }); blob([[x + sw - 40, hy - 34], [x + sw - 36, hy - 70], [x + sw + 36, hy - 70], [x + sw + 40, hy - 34]], { wash: '#2a2a30', washA: 1, w: 1.8, col: '#0a0a0a' }); });
    if (argue && !fight) for (let i = 0; i < 4; i++) { const k = ((t - EV.tv_argue) * 1.4 + i / 4) % 1; txt(['!!', '?!', '#@!', '!!'][i], 200 + i * 230, 820 - k * 100, 50, { font: 'Osw', col: '#e8c060', a: 1 - k }); }
    if (fight) { const k = clamp((t - EV.tv_fight) / 0.9); push(lerp(200, 980, k), 760 - Math.sin(k * 3.1) * 260, 1, k * 9); rect(-50, -14, 100, 22, { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#2a1408' }); for (const x of [-40, 40]) pencil([[x, 8], [x + 6, 90]], { w: 10, col: '#6a4420' }); pop();
      for (let i = 0; i < 14; i++) { const r = rng(3230 + i), kk = clamp((t - EV.tv_fight) / 1.4); push(540 + (r() - 0.5) * 700 * kk, 900 + r() * 200 + kk * 300 * r(), 1, t * 3 + i); blob([[0, -12], [5, 0], [0, 14], [-5, 0]], { wash: '#f6f0e0', washA: 1 - kk * 0.5, w: 1, col: '#8a7a64' }); pop(); } }
  }
  function table(t) {                                                  // стол: самовар, кружки, баранки; к драке кружки опрокидываются
    const tb = rect(-300, 1330, 1700, 700, { wash: '#6a4020', washA: 1, w: 3, col: '#1a0a04', key: 3240 }); shadeG(tb.path, 540, 1330, 540, 1800, '#2a1408', 0.5); for (let i = 0; i < 10; i++) pencil([[-300, 1350 + i * 50], [1400, 1356 + i * 50]], { w: 1.6, col: '#3a2010', a: 0.5, pass2: false });
    samovar(160, 1340, 1.0, t); const fight = t > EV.tv_fight; for (const [x, i] of [[420, 0], [520, 1], [640, 2]]) { push(x, 1340, 1, fight ? (i - 1) * 1.4 * clamp((t - EV.tv_fight) / 0.3) : 0); rect(-24, -60, 48, 60, { wash: '#e8e0d0', washA: 1, w: 2, col: '#3a2a14' }); pencil(spline([[24, -46], [40, -36], [24, -16]], false, 4), { w: 4, col: '#3a2a14', pass2: false }); pop(); }
    for (let i = 0; i < 4; i++) { ell(320 + i * 30, 1330 - (i % 2) * 14, 26, 10, { line: true, w: 9, col: '#d8a050' }); }
  }
  WORLD.tavern = (t, u, cat) => {
    lay(16, () => { walls(t); }); lay(4, () => { crowd(t); haze('#d8a060', 0.06); });
    lay(1.3, () => { table(t); }); lay(1, () => { cat(); });
    lay(0.6, () => { screenFill('#c89a60', 0.12, 'multiply'); });
  };
  DIR.tavern = {
    outfit: 'polovoy', light: { side: 1, rim: '#ffc070' }, grade: ['#c89050', 0.2],
    act: () => [[S0.tavern, 'talk'], [EV.tv_trak, 'smug'], [EV.tv_argue, 'suspicious'], [EV.tv_fight, 'scared'], [EV.tv_fight + 0.5, 'shock']],
    pose: (t, u, b) => Object.assign(b, { x: 820, y: 1740, s: 1.2, flip: true, look: t < EV.tv_argue ? [0, 0] : [0.8, -0.3], hand: t > EV.tv_fight ? [40, -380] : [110, -230], handF: t > EV.tv_fight ? [-60, -380] : [-90, -200],
      prop: t > EV.tv_fight ? undefined : 'tray', sweat: t > EV.tv_fight, squash: b.squash + (t > EV.tv_fight && t < EV.tv_fight + 0.15 ? 0.1 : 0) }),
    afterCat: (t) => { if (t > EV.tv_leg && t < EV.tv_trak + 0.6) bubbleTag('ЛЕГЕНДА', 760, 760, t, EV.tv_leg, '#2b2622', 46, -0.05); },
    cam: () => [[S0.tavern, 560, 1000, 0.2], [EV.tv_trak, 520, 900, 0.1], [EV.tv_argue, 560, 1080, 0.2], [EV.tv_fight, 540, 1000, 0.06, 'x'], [S1.tavern, 560, 1020, 0.12]]
  };
  // ---------------------------------------------------------------- переход: вилка протыкает кадр — 4 прорези, сквозь них новая сцена
  TRANS_IN.tavern = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const d = Math.pow(k, 1.3), w = lerp(60, 300, Math.pow(k, 2)), P = new Path2D();
    for (let i = 0; i < 4; i++) { const cx = 540 + (i - 1.5) * 260 * (1 + k * 0.2); P.roundRect(cx - w / 2, -100, w, 100 + d * 2200, w / 2); }
    inPath(P, () => drawBuf(B, 1.05 - 0.05 * k, 540, 960));
    scr(() => { for (let i = 0; i < 4; i++) { const cx = 540 + (i - 1.5) * 260 * (1 + k * 0.2); pencil([[cx - w / 2, 0], [cx - w / 2, d * 2100]], { w: 8, col: SH.beet, a: 0.9 * (1 - k), pass2: false }); pencil([[cx + w / 2, 0], [cx + w / 2, d * 2100]], { w: 8, col: SH.beet, a: 0.9 * (1 - k), pass2: false }); } });
  } };
})();
