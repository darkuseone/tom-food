/* 009 — `index`: ★ «Разгадка: экономисты складывают цены муки, сыра и яиц на один пирог.» Та же аудитория экономфака, что в хуке (петля!), теперь ближе: доска,
   на столе — большие весы-касса. На «складывают» на доске мелом: ИНДЕКС ХАЧАПУРИ = ; на «муки,» на чашу падает мешок муки с ценником; на «сыра» — головка сыра;
   на «яиц» — три яйца; на «пирог.» всё вспыхивает и превращается в один имеретинский хачапури с ценником в лари, на доске дописывается «= ИНФЛЯЦИЯ», монеты звенят.
   Переход В сцену: дождь монет-лари закрывает кадр. */
(() => {
  EV.ix_sum = wtw('s7', 'складывают');
  EV.ix_flour = wtw('s7', 'муки,');
  EV.ix_cheese = wtw('s7', 'сыра');
  EV.ix_eggs = wtw('s7', 'яиц');
  EV.ix_pie = wtw('s7', 'пирог.');
  SHAKES.push([EV.ix_pie + 0.1, 0.25, 10]);
  KEYW.push('пирог.');

  function room(t) { vgrad(-600, 1500, ['#e8d8b8', '#dcc69c', '#c8b080']); for (let i = 0; i < 9; i++) pencil([[-300 + i * 200, -400], [-300 + i * 200, 1500]], { w: 40, col: '#d8c290', a: 0.35, pass2: false });
    push(0, 0, 1); rect(120, 720, 840, 400, { wash: '#2a4a3a', washA: 1, w: 14, col: '#8a6a3a', key: 11200 }); for (let i = 0; i < 24; i++) { const r = rng(11201 + i); ell(140 + r() * 800, 740 + r() * 360, 30 + r() * 40, 8, { wash: '#ffffff', washA: 0.04, line: false }); }
    const rv = clamp((t - EV.ix_sum + 0.05) / 0.6); if (rv > 0) txt('ИНДЕКС ХАЧАПУРИ =', 520, 800, 54, { font: 'Hand', col: '#f2f2ea', reveal: rv });
    const items = [['мука', EV.ix_flour], ['+ сыр', EV.ix_cheese], ['+ яйца, масло', EV.ix_eggs]]; items.forEach(([s, e], i) => { const r2 = clamp((t - e) / 0.4); if (r2 > 0) txt(s, 290 + i * 210, 905, 52, { font: 'Hand', col: '#f6f0c0', reveal: r2 }); });
    const r3 = clamp((t - EV.ix_pie - 0.3) / 0.6); if (r3 > 0) { txt('= ИНФЛЯЦИЯ', 560, 1010, 64, { font: 'Hand', col: '#f2c838', reveal: r3 }); pencil([[360, 1040], [360 + 400 * r3, 1040]], { w: 5, col: '#f2c838', pass2: false }); } pop();
    for (let sh = 0; sh < 2; sh++) { push(-40 + sh * 1120, 340, 1); rect(-80, -260, 160, 560, { wash: '#7a4a2a', washA: 1, w: 3, col: '#2a1408' }); for (let r = 0; r < 5; r++) pencil([[-80, -250 + r * 110], [80, -250 + r * 110]], { w: 5, col: '#3a2010', pass2: false }); pop(); } }
  function scale(t) { const pie = t > EV.ix_pie, k = popK(t, EV.ix_pie, 0.4); push(430, 1440, 1.15); rect(-40, -10, 80, 60, { wash: '#8a8a90', washA: 1, w: 2.4, col: '#2a2a2a' }); pencil([[0, -10], [0, -200]], { w: 10, col: '#6a6a70' });
    const tilt = pie ? 0 : (t > EV.ix_flour ? 0.08 : 0) + (t > EV.ix_cheese ? 0.05 : 0) + (t > EV.ix_eggs ? 0.03 : 0); push(0, -200, 1, -tilt); pencil([[-180, 0], [180, 0]], { w: 8, col: '#5a5a60' });
      for (const sd of [-1, 1]) { push(sd * 170, 0, 1, tilt); pencil([[-40, 0], [0, -0], [40, 0]], { w: 2, col: '#3a3a3a', pass2: false }); pencil([[0, 0], [-60, 90]], { w: 2, col: '#3a3a3a', pass2: false }); pencil([[0, 0], [60, 90]], { w: 2, col: '#3a3a3a', pass2: false }); ell(0, 100, 90, 18, { wash: '#c8c8d0', washA: 1, w: 2.4, col: '#3a3a3a' });
        if (sd < 0 && !pie) { const f = popK(t, EV.ix_flour, 0.35); if (f > 0) { push(-40, 90, f); blob([[-36, 0], [-42, -60], [-20, -90], [20, -90], [42, -60], [36, 0]], { wash: '#e8dcc0', washA: 1, w: 2, col: '#6a5a3a' }); txt('МУКА', 0, -40, 18, { font: 'Osw', col: '#6a4a1a' }); pop(); }
          const c = popK(t, EV.ix_cheese, 0.35); if (c > 0) { push(36, 90, c); ell(0, -24, 40, 26, { wash: '#fbf6e0', washA: 1, w: 2, col: '#b8a878' }); for (let i = 0; i < 4; i++) ell(-16 + i * 10, -28 + (i % 2) * 8, 3, 3, { wash: '#e8dcb0', washA: 1, line: false }); pop(); }
          const e = popK(t, EV.ix_eggs, 0.35); if (e > 0) for (let i = 0; i < 3; i++) { push(-20 + i * 26, 50, e); ell(0, 0, 13, 17, { wash: '#f8f0e0', washA: 1, w: 1.6, col: '#a8987a' }); pop(); } }
        if (sd > 0) { for (let i = 0; i < (pie ? 0 : (t > EV.ix_flour ? 2 : 0) + (t > EV.ix_cheese ? 2 : 0) + (t > EV.ix_eggs ? 2 : 0)); i++) lariCoin(-40 + (i % 3) * 40, 84 - Math.floor(i / 3) * 14, 0.5); } pop(); } pop();
    pop();
    if (pie) { glow(420, 1220, 300 * (1 - clamp((t - EV.ix_pie) / 0.8)) + 60, 'rgba(255,230,140,1)', 0.7); imeruli(420, 1260, 0.95 * k, t); bubbleTag('1 ХАЧАПУРИ', 420, 1150, t, EV.ix_pie + 0.2, '#d9482b', 44, -0.04);
      for (let i = 0; i < 8; i++) { const q = clamp((t - EV.ix_pie) / 1.0), a = -2.9 + i * 0.25; if (q < 1) lariCoin(400 + Math.cos(a) * 320 * q, 1280 + Math.sin(a) * 260 * q + q * q * 300, 0.6, q * 6); } } }
  WORLD.index = (t, u, cat) => { lay(9, () => room(t)); lay(1, () => { rect(-300, 1460, 1700, 50, { wash: '#7a4a2a', washA: 1, w: 3, col: '#2a1408', key: 11210 }); rect(-300, 1510, 1700, 600, { wash: '#a87a4a', washA: 1, w: 2, col: '#3a2410' }); scale(t); cat(); }); };
  DIR.index = {
    outfit: 'econA', light: { side: -1, rim: '#ffe0b0' }, grade: ['#e8b070', 0.05],
    act: () => [[S0.index, 'smug'], [EV.ix_sum, 'talk'], [EV.ix_flour, 'proud'], [EV.ix_eggs, 'suspicious'], [EV.ix_pie, 'awe'], [EV.ix_pie + 0.6, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1810, s: 1.1, flip: true, look: t < EV.ix_flour ? [-0.5, -0.8] : [-0.8, 0.1], hand: [190, -360], handF: [-90, -230], prop: 'stick', propAng: -0.6 }),
    cam: () => [[S0.index, 540, 1100, 0.14], [EV.ix_sum, 540, 960, 0.2], [EV.ix_flour, 470, 1180, 0.26, 'x'], [EV.ix_pie, 480, 1160, 0.3, 'x'], [S1.index, 500, 1120, 0.26]]
  };
  TRANS_IN.index = { a: 0.2, b: 0.45, runA: 1, fx(k, t, A, B) {                // дождь монет-лари закрывает кадр, под ним меняется сцена
    drawBuf(k < 0.55 ? A : B, 1, 540, 960); const q = Math.sin(k * Math.PI); scr(() => { for (let i = 0; i < 90; i++) { const r = rng(11220 + i), x = r() * W, y = -200 + (k * 2.4 + r()) * H * 0.8 % (H + 400); lariCoin(x, y, 1.3 * (0.4 + q), r() * 6 + k * 8); } });
  } };
})();
