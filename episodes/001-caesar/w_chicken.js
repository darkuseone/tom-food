/* 001 — `chicken`: современная ресторанная кухня — нержавейка, вытяжка, рейка с чеками, языки пламени над сковородой.
   В окно раздачи врывается живая курица и плюхается в тарелку Цезаря (на карточке — «+ курица»). Два шефа ругаются: старый в колпаке «НЕЛЬЗЯ!», молодой в бандане «МОЖНО!».
   Том-шеф сначала в ужасе, потом хохочет. Переход В сцену: белая тарелка, вращаясь, закрывает кадр и раскрывается на кухне. */
(() => {
  EV.ck_in = LS('s10') + 0.1;
  EV.ck_land = LS('s10') + 0.6;
  EV.ck_fight = wtw('s10', 'шефы');
  EV.ck_swear = wtw('s10', 'ругаются.');
  SHAKES.push([EV.ck_land, 0.2, 10]);
  KEYW.push('Курицу', 'ругаются.');

  function steel(t) { vgrad(-400, 1500, ['#2a2e34', '#4a5058', '#30343a']); const w = rect(-400, 100, 2000, 1200, { wash: '#8a9098', washA: 1, w: 2, col: '#1a1c20', key: 9100 }); for (let i = 0; i < 20; i++) pencil([[-400 + i * 110, 100], [-400 + i * 110, 1300]], { w: 2, col: '#5a6068', a: 0.5, pass2: false }); metalG(w.path, 300, 400, 900, '#d8dee4', '#8a9098', '#3a3e44');
    const h = poly([[60, 120], [1020, 120], [1120, 420], [-40, 420]], { wash: '#b8c0c8', washA: 1, w: 3, col: '#1a1c20', key: 9101 }); metalG(h.path, 500, 200, 600, '#ffffff', '#a8b0b8', '#4a5058');
    rect(-40, 520, 1160, 26, { wash: '#c8ccd0', washA: 1, w: 2, col: '#2a2a2a' }); const r = rng(9102); for (let i = 0; i < 9; i++) { push(20 + i * 120, 546, 1, (r() - 0.5) * 0.1); rect(-40, 0, 80, 110 + r() * 40, { wash: '#f8f6ea', washA: 1, w: 1.6, col: '#5a5a5a' }); for (let k = 0; k < 4; k++) pencil([[-28, 20 + k * 20], [26, 20 + k * 20]], { w: 1.4, col: '#5a5a5a', a: 0.6, pass2: false }); pop(); }
    const pw = rect(260, 700, 560, 300, { wash: '#2a2420', washA: 1, w: 4, col: '#1a1c20', key: 9103 }); ctx.save(); ctx.clip(pw.path); vgrad(700, 1000, ['#6a3a1a', '#c8803a']); for (let i = 0; i < 8; i++) glow(300 + i * 70, 820, 50, 'rgba(255,200,120,1)', 0.4); ctx.restore(); for (let i = 0; i < 4; i++) glow(340 + i * 140, 690, 40, 'rgba(255,170,60,1)', 0.7); }
  function stove(t) { rect(-200, 1080, 1500, 240, { wash: '#5a6068', washA: 1, w: 3, col: '#1a1c20' }); push(880, 1060, 1); ell(0, 0, 130, 30, { wash: '#1a1a1a', washA: 1, w: 3 }); pencil([[120, -6], [300, -30]], { w: 14, col: '#1a1a1a' }); pop();
    for (let i = 0; i < 6; i++) { const f = flick(t * 3, i); blob([[820 + i * 22, 1040], [810 + i * 22, 1040 - 120 * f], [830 + i * 22, 1040 - 200 * f], [846 + i * 22, 1040 - 90 * f]], { wash: i % 2 ? '#ffb040' : '#ff6a2a', washA: 0.9, line: false }); } glow(880, 920, 220, 'rgba(255,140,40,1)', 0.5); }
  function chef(x, s, t, o, k) { human(x, 1300, s, t, Object.assign({ legs: '#2a2a2a', armL: 'hips', armR: t > EV.ck_fight ? 'point' : 'hold', seed: 150 + k }, o)); hat20(x, 1300, s, o.hatK, o.hatC, o.flip || 1); if (o.st) stache(x, 1300, s, o.flip || 1);
    if (t > EV.ck_fight) bubbleTag(o.say, x + (o.flip || 1) * 40, 1300 - 420 * s, t, EV.ck_fight + k * 0.2, o.sayC, 50, (o.flip || 1) * -0.06);
    if (t > EV.ck_swear) for (let i = 0; i < 3; i++) { const kk = ((t * 2 + i * 0.33 + k) % 1); txt(['#!', '@?', '%!'][i], x + (o.flip || 1) * (60 + i * 30), 1300 - 380 * s - kk * 80, 40, { font: 'Osw', col: '#d9482b', a: 1 - kk }); } }
  function hen(t) { if (t < EV.ck_in) return; const k = clamp((t - EV.ck_in) / (EV.ck_land - EV.ck_in)), land = t >= EV.ck_land; const x = land ? 540 : lerp(540, 540, k), y = land ? 1330 + Math.sin(t * 8) * 6 : lerp(820, 1330, k) - Math.sin(k * Math.PI) * 300;
    push(x, y, 1.1, land ? Math.sin(t * 10) * 0.08 : k * 6); const b = blob([[-70, 0], [-60, -60], [0, -80], [50, -60], [70, -10], [40, 20], [-40, 20]], { wash: '#f8f4ea', washA: 1, w: 2.6, col: '#3a2a1a', key: 9110 }); shadeG(b.path, 60, 20, -20, -40, '#c8b8a0', 0.4);
    ell(50, -100, 34, 36, { wash: '#f8f4ea', washA: 1, w: 2.4, col: '#3a2a1a' }); for (let i = 0; i < 3; i++) ell(40 + i * 12, -140 - (i % 2) * 6, 10, 14, { wash: '#d9482b', washA: 1, w: 1.4, col: '#5a1008' }); poly([[80, -100], [108, -92], [80, -84]], { wash: '#e8b53a', washA: 1, w: 1.6, col: '#5a3a08' }); ell(62, -106, 6, 7, { wash: '#1a1a1a', washA: 1, line: false }); blob([[74, -80], [82, -60], [70, -64]], { wash: '#d9482b', washA: 1, w: 1.2 });
    const fl = Math.sin(t * 20) * 0.6; for (const sd of [-1, 1]) { push(-10, -40, 1, sd * 0.4 + fl * sd); blob([[0, 0], [sd * -60, -40], [sd * -90, 0], [sd * -50, 20]], { wash: '#efe8d8', washA: 1, w: 2, col: '#3a2a1a' }); pop(); } for (let i = 0; i < 4; i++) blob([[-70, -20], [-110 - i * 6, -60 + i * 18], [-80, -10]], { wash: '#8a5a2a', washA: 1, w: 1.4 }); pop();
    if (t > EV.ck_in && t < EV.ck_land + 0.6) for (let i = 0; i < 10; i++) { const r = rng(9120 + i), kk = ((t - EV.ck_in) * 1.5 + r()) % 1; push(x + (r() - 0.5) * 300, y - 100 + kk * 300, 1, kk * 4); blob([[0, 0], [10, -20], [4, 10]], { wash: '#f8f4ea', washA: 1 - kk, w: 1, col: '#5a4a3a', a: 1 - kk }); pop(); } }
  WORLD.chicken = (t, u, cat) => {
    lay(9, () => steel(t)); lay(4, () => stove(t));
    lay(2, () => { chef(140, 1.05, t, { body: '#f6f2e8', hair: '#c8c8c8', face: t > EV.ck_fight ? 'angry' : 'shock', hatK: 'chef', st: 1, say: 'НЕЛЬЗЯ!', sayC: '#d9482b' }, 0); chef(940, 1.0, t, { body: '#2b2622', hair: '#3a2a1a', face: t > EV.ck_fight ? 'grin' : 'shock', hatK: 'beret', hatC: '#d9482b', flip: -1, say: 'МОЖНО!', sayC: '#6b7a2e' }, 1); });
    lay(1.15, () => { const c = rect(-300, 1360, 1700, 900, { wash: '#a8b0b8', washA: 1, w: 3, col: '#1a1c20', key: 9130 }); metalG(c.path, 400, 1400, 900, '#e8eef4', '#a8b0b8', '#4a5058'); plateCaesar(540, 1400, 1.1, t); hen(t); });
    lay(1, () => { cat(); });
  };
  DIR.chicken = {
    outfit: 'chef', light: { side: 1, rim: '#ffe0b0' }, grade: ['#8ab0d0', 0.08],
    act: () => [[S0.chicken, 'suspicious'], [EV.ck_in, 'shock'], [EV.ck_land + 0.3, 'scared'], [EV.ck_fight, 'sideeye'], [EV.ck_swear - 0.1, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 820, y: 1760, s: 1.1, flip: -1, look: t < EV.ck_fight ? [-0.6, 0.4] : [Math.sin(t * 5) * 0.8, -0.2], hand: [80, -200], handF: t > EV.ck_land && t < EV.ck_fight ? [-140, -340] : [-90, -160], tailUp: t > EV.ck_in && t < EV.ck_fight }),
    cam: () => [[S0.chicken, 560, 1000, 0.14], [EV.ck_in, 560, 1080, 0.18], [EV.ck_land, 560, 1180, 0.28], [EV.ck_fight, 540, 1000, 0.1], [S1.chicken, 540, 1000, 0.16]]
  };
  // ---------------------------------------------------------------- переход: вращающаяся тарелка
  TRANS_IN.chicken = { a: 0.25, b: 0.35, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const R = k < 0.5 ? sm(k / 0.5) * 1150 : 1150, hole = k < 0.5 ? 0 : sm((k - 0.5) / 0.5) * 1150, rot = k * 8;
    scr(() => { if (R > 2) { const pl = ell(540, 960, R, R, { wash: '#f8f6f0', washA: 1, w: 4, col: '#3a3a3a' }); shadeG(pl.path, 540 + R, 960 + R, 540 - R * 0.3, 960 - R * 0.3, '#b8b4ac', 0.4); pencil(ellPts(540, 960, R * 0.72, R * 0.72, 0, 0, 80), { w: 3, col: '#9a968c', a: 0.6, pass2: false });
      for (let i = 0; i < 3; i++) { const a = rot + i * 2.1; pencil([[540 + Math.cos(a) * R * 0.8, 960 + Math.sin(a) * R * 0.8], [540 + Math.cos(a + 0.4) * R * 0.8, 960 + Math.sin(a + 0.4) * R * 0.8]], { w: 10, col: '#ffffff', a: 0.8, pass2: false }); } } });
    if (hole > 1) inCircle(540, 960, hole, () => drawBuf(B, 1.2 - 0.2 * k, 540, 960, 1, null, 0, 0, (1 - k) * 1.5));
  } };
})();
