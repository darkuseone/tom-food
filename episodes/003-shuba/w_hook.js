/* 003 — `hook`: «Шуба — это лозунг революции?!» Новогодняя комната: окно со снегом и салютом, ёлка с огнями и шарами, гирлянды, стол — шуба, мандарины, свечи,
   гости в бумажных колпаках. 0,0 с — камера летит к шубе, над ней вспыхивают буквы Ш·У·Б·А как лозунг на транспаранте. Том в новогоднем свитере с вилкой.
   «Откусим историю!» — вилка в шубу, кусок со всеми слоями, хрум-чвак, брызги свёклы. Переход В tavern — в w_tavern.js. */
(() => {
  EV.hk_word = 0.05;
  EV.hk_slogan = wtw('h1', 'лозунг');
  EV.hk_dig = LS('h2') + 0.1;
  EV.hk_bite = wtw('h2', 'историю!') + 0.05;
  SHAKES.push([EV.hk_slogan, 0.2, 10], [EV.hk_bite, 0.2, 10]);
  KEYW.push('лозунг');

  function room(t) {                                                   // обои, окно со снегом и салютом, гирлянда
    vgrad(-600, 1600, ['#1a2a3a', '#3a2a3a', '#5a3428']); for (let i = 0; i < 9; i++) for (let j = 0; j < 14; j++) { const x = -200 + i * 170 + (j % 2) * 85, y = 80 + j * 90; push(x, y, 0.6); for (let q = 0; q < 6; q++) pencil([[0, 0], [Math.cos(q) * 20, Math.sin(q) * 20]], { w: 2, col: '#7a5a5a', a: 0.35, pass2: false }); pop(); }
    const w = rect(600, 160, 400, 480, { wash: '#0a1430', washA: 1, w: 6, col: '#f2ead8', key: 3100 }); ctx.save(); ctx.clip(w.path); vgrad(160, 640, ['#06102a', '#1a2a5a']);
    for (let i = 0; i < 6; i++) rect(610 + i * 70, 470 - (i * 37 % 90), 60, 200, { wash: '#141a30', washA: 1, line: false }); for (let i = 0; i < 20; i++) { const r = rng(3101 + i); rect(616 + r() * 360, 480 + r() * 120, 10, 12, { wash: '#ffd27a', washA: r() > 0.4 ? 0.9 : 0.2, line: false }); }
    for (let f = 0; f < 3; f++) { const ph = (t * 0.7 + f / 3) % 1, cx = 680 + f * 110, cy = 260 + f * 30, c = ['#ff6a8a', '#ffd24a', '#7ae8ff'][f]; for (let q = 0; q < 14; q++) { const a = q / 14 * 6.283; ell(cx + Math.cos(a) * ph * 70, cy + Math.sin(a) * ph * 70 + ph * ph * 30, 4, 4, { wash: c, washA: 1 - ph, line: false }); } glow(cx, cy, 70 * ph, 'rgba(255,220,180,1)', 0.4 * (1 - ph)); }
    motes(30, [600, 160, 1000, 640], '#ffffff', t, 3102, { sp: 50, vx: 10, sz: 4, a: 0.9 }); ctx.restore(); pencil([[800, 160], [800, 640]], { w: 8, col: '#f2ead8', pass2: false }); pencil([[600, 400], [1000, 400]], { w: 8, col: '#f2ead8', pass2: false });
    pencil(spline([[-200, 120], [200, 220], [540, 150], [880, 230], [1300, 130]], false, 10), { w: 3, col: '#2a1a10', pass2: false }); for (let i = 0; i < 16; i++) { const x = -150 + i * 95, y = 160 + Math.sin(i * 1.3) * 36, c = ['#ff5a5a', '#ffd24a', '#5ae86a', '#5ac8ff'][i % 4]; ell(x, y + 16, 9, 13, { wash: c, washA: 1, w: 1.4, col: '#2a1a10' }); glow(x, y + 16, 46, c === '#ff5a5a' ? 'rgba(255,90,90,1)' : 'rgba(255,220,120,1)', 0.5 * (0.6 + 0.4 * Math.sin(t * 5 + i))); }
  }
  function tree(t) {                                                   // ёлка: ярусы, игрушки, огоньки, звезда
    const x = 170, y = 1260; for (let i = 0; i < 5; i++) { const w = 260 - i * 44, yy = y - i * 150; const p = poly([[x - w, yy], [x + w, yy], [x, yy - 230]], { wash: i % 2 ? '#1f5a34' : '#2a6a3e', washA: 1, w: 2.6, col: '#0a2010', key: 3110 + i }); shadeG(p.path, x + w, yy, x - 40, yy - 100, '#0a2a14', 0.5); }
    const r = rng(3115); for (let i = 0; i < 22; i++) { const yy = y - r() * 700 - 40, w = (yy - (y - 830)) / 830 * 240, xx = x + (r() - 0.5) * w * 1.6, c = ['#d9482b', '#e8b53a', '#3a7ab8', '#f6f0e0'][i % 4]; ell(xx, yy, 18, 18, { wash: c, washA: 1, w: 1.6, col: '#2a1a10' }); ell(xx - 6, yy - 6, 5, 4, { wash: '#ffffff', washA: 0.8, line: false }); }
    for (let i = 0; i < 30; i++) { const yy = y - r() * 760, w = (yy - (y - 830)) / 830 * 240, xx = x + (r() - 0.5) * w * 1.6; glow(xx, yy, 20, 'rgba(255,230,140,1)', 0.6 * (0.5 + 0.5 * Math.sin(t * 6 + i))); }
    push(x, y - 840, 1, Math.sin(t * 2) * 0.05); poly(Array.from({ length: 10 }, (_, i) => { const a = -Math.PI / 2 + i * Math.PI / 5, R = i % 2 ? 18 : 44; return [Math.cos(a) * R, Math.sin(a) * R]; }), { wash: '#e8b53a', washA: 1, w: 2, col: '#5a3a08' }); glow(0, 0, 90, 'rgba(255,220,120,1)', 0.6); pop();
    for (let i = 0; i < 3; i++) { const bx = x - 160 + i * 110; rect(bx, y - 70, 90, 70, { wash: ['#d9482b', '#3a7ab8', '#e8b53a'][i], washA: 1, w: 2, col: '#2a1a10' }); pencil([[bx + 45, y - 70], [bx + 45, y]], { w: 6, col: '#f6f0e0', pass2: false }); }
  }
  function guests(t) { const wow = t > EV.hk_slogan; [[470, '#3a6a8a', '#2a1a0a', 0], [900, '#8a3a5a', '#c8a050', 1]].forEach(([x, c, h, i]) => {
    human(x, 1250, 1.15, t, { body: c, hair: h, face: wow ? 'shock' : 'smile', armL: 'hold', armR: wow ? 'up' : 'hold', seed: 140 + i, flip: i ? -1 : 1, look: i ? -0.5 : 0.5, beard: i ? undefined : 'short' });
    const hy = 1250 + (-238 - 46) * 1.15 - 40; poly([[x - 30, hy], [x + 30, hy], [x, hy - 80]], { wash: i ? '#e8b53a' : '#3ab8a8', washA: 1, w: 2, col: '#2a1a10' }); ell(x, hy - 84, 10, 10, { wash: '#f6f0e0', washA: 1, w: 1.4 }); }); }
  function table(t) {                                                  // праздничный стол: скатерть, шуба, мандарины, свечи
    const tb = rect(-300, 1330, 1700, 700, { wash: '#f2ead8', washA: 1, w: 3, col: '#3a2a14', key: 3120 }); shadeG(tb.path, 540, 1330, 540, 1800, '#a89070', 0.4); for (let i = 0; i < 30; i++) pencil([[-300 + i * 60, 1340], [-300 + i * 60, 1400]], { w: 3, col: '#d9482b', a: 0.5, pass2: false });
    for (const [x, y] of [[180, 1370], [240, 1390], [130, 1400], [960, 1380]]) { const m = ell(x, y, 34, 30, { wash: '#f28a1a', washA: 1, w: 2, col: '#6a3a08' }); shadeG(m.path, x + 20, y + 20, x - 10, y - 10, '#a84a08', 0.4); ell(x - 10, y - 10, 8, 5, { wash: '#ffd090', washA: 0.8, line: false }); }
    for (const x of [80, 1000]) { rect(x - 12, 1240, 24, 110, { wash: '#f6f0e0', washA: 1, w: 2 }); blob([[x - 6, 1240], [x, 1200 * flick(t, x) / flick(t, x) - 6], [x + 6, 1240]], { wash: '#ffc04a', washA: 1, line: false }); glow(x, 1215, 80 * flick(t, x), 'rgba(255,180,80,1)', 0.6); }
    shubaPlate(560, 1440, 1.05, t);
    if (t > EV.hk_dig) { const k = clamp((t - EV.hk_dig) / 0.3); ctx.save(); ctx.globalAlpha = k; rect(600, 1300, 60, 60, { wash: '#f6f2ea', washA: 1, line: false }); ctx.restore(); }
  }
  function slogan(t) {                                                 // буквы Ш·У·Б·А вспыхивают над шубой как транспарант
    if (t < EV.hk_word) return; const L = ['Ш', 'У', 'Б', 'А'], k0 = EV.hk_slogan; for (let i = 0; i < 4; i++) { const t0 = EV.hk_word + i * 0.1, k = popK(t, t0, 0.3), red = t > k0 + i * 0.06;
      push(330 + i * 150, 980 - Math.sin(t * 3 + i) * 6, k, (i - 1.5) * 0.04); rect(-62, -78, 124, 156, { wash: red ? '#b8281e' : '#f6f0e0', washA: 1, w: 3, col: '#2a0a04' }); txt(L[i], 0, 4, 120, { font: 'Osw', col: red ? '#f6f0e0' : '#b8281e' }); if (red) glow(0, 0, 120, 'rgba(255,80,60,1)', 0.25); pop();
      if (i < 3) ell(392 + i * 150, 990, 8, 8, { wash: '#2a0a04', washA: 1, line: false }); }
    if (t > k0) for (let i = 0; i < 2; i++) pencil([[300 - i * 30, 900 + i * 40], [280 - i * 30, 1060 + i * 40]], { w: 6, col: '#8a5a2a', pass2: false });
  }
  function splash(t) { if (t < EV.hk_bite || t > EV.hk_bite + 1) return; const k = t - EV.hk_bite; for (let i = 0; i < 18; i++) { const r = rng(3130 + i), a = r() * 6.28, v = 300 + r() * 500; ell(640 + Math.cos(a) * v * k, 1000 + Math.sin(a) * v * k + 800 * k * k, 9, 7, { wash: i % 3 ? SH.beet : SH.mayo, washA: 1 - k, w: 1, col: '#2a0414', a: 1 - k }); } }
  WORLD.hook = (t, u, cat) => {
    lay(18, () => { room(t); }); lay(4.2, () => { tree(t); guests(t); });
    lay(1.3, () => { table(t); }); lay(1.2, () => slogan(t));
    lay(1, () => { cat(); splash(t); });
  };
  DIR.hook = {
    outfit: 'sweater', light: { side: -1, rim: '#ffd090' }, grade: ['#ff7050', 0.1],
    act: () => [[0, 'awe'], [EV.hk_slogan, 'shock'], [EV.hk_dig - 0.2, 'suspicious'], [EV.hk_bite - 0.1, 'grin'], [EV.hk_bite + 0.2, 'laugh']],
    pose: (t, u, b) => { const dig = t > EV.hk_dig && t < EV.hk_bite - 0.3, bite = t > EV.hk_bite - 0.3;
      return Object.assign(b, { x: 820, y: 1720, s: 1.2, flip: true, look: t < EV.hk_dig ? [0.4, -0.6] : [0.7, 0.4], hand: bite ? [60, -360] : dig ? [230, -230] : [120, -240], handF: t < EV.hk_dig ? [-90, -330] : [-90, -200],
        prop: t > EV.hk_dig + 0.15 ? 'forkShubaP' : 'fork', propAng: dig ? 2.6 : 0, tailUp: t > EV.hk_bite }); },
    cam: () => [[0, 560, 1300, 0.45], [0.5, 560, 1050, 0.06, 'x'], [EV.hk_slogan, 560, 980, 0.0], [EV.hk_dig, 660, 1180, 0.18], [EV.hk_bite, 720, 1100, 0.32], [S1.hook, 740, 1080, 0.4]]
  };
})();
