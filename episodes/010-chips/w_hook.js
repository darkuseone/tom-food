/* 010 — `hook`: «Его похоронили в банке из-под чипсов. По его же просьбе! Откусим историю!» «Музей снеков» вечером: тёмно-бордовые стены, рамы с пачками разных
   десятилетий, бархатные канаты, прожектор. В центре на постаменте под стеклянным колпаком — туба чипсов с траурной ленточкой и табличкой «ЗАВЕЩАНИЕ».
   На «банке» прожектор вспыхивает на тубе, посетители ахают; на «просьбе!» рядом раскручивается свиток-завещание с подписью и знаком «?»;
   на «Откусим» Том-экскурсовод в смокинге хрустит чипсом — крошки летят. */
(() => {
  EV.hk_can = wtw('h1', 'банке');
  EV.hk_req = wtw('h1', 'просьбе!');
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_can + 0.1, 0.2, 10], [EV.hk_bite, 0.2, 8]);
  KEYW.push('просьбе!');

  function hall(t) { vgrad(-600, 1500, ['#2a0e14', '#4a1a22', '#5a2228']); for (let i = 0; i < 10; i++) pencil([[-300 + i * 180, -400], [-300 + i * 180, 1500]], { w: 30, col: '#3a1218', a: 0.4, pass2: false });
    const frames = [[130, 240, '#2a8a3a', 'ЧИПСЫ', '1960'], [130, 560, '#c8282a', 'КРИСПС', '1970'], [960, 240, '#2a5aa8', 'SNACK', '1980'], [960, 560, '#e8a020', 'ЧИПСЫ', '1990']];
    for (const [x, y, c, l, yr] of frames) { push(x, y, 1); rect(-110, -140, 220, 280, { wash: '#1a0a0a', washA: 1, w: 10, col: '#c8a040', key: 11400 + x + y }); chipBag(0, 0, 0.58, t, { col: c, label: l, size: 32 }); txt(yr, 0, 166, 26, { font: 'Osw', col: '#e8c870' }); pop(); }
    for (let i = 0; i < 3; i++) { const x = 220 + i * 320; pencil([[x, -200], [x + 40, -60]], { w: 4, col: '#2a2a2a', pass2: false }); ell(x + 44, -50, 24, 16, { wash: '#3a3a3a', washA: 1, w: 2 }); } }
  function exhibit(t) { const on = t > EV.hk_can - 0.05; push(560, 1180, 1); if (on) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = 'rgba(255,240,200,0.10)'; ctx.beginPath(); ctx.moveTo(-60, -1400); ctx.lineTo(60, -1400); ctx.lineTo(260, 0); ctx.lineTo(-260, 0); ctx.fill(); ctx.restore(); glow(0, -260, 280, 'rgba(255,230,170,1)', 0.45); }
    rect(-170, 0, 340, 300, { wash: '#2a1a14', washA: 1, w: 3, col: '#0a0404', key: 11410 }); rect(-190, -14, 380, 24, { wash: '#4a3020', washA: 1, w: 2.4, col: '#0a0404' }); rect(-110, 60, 220, 70, { wash: '#c8a040', washA: 1, w: 2, col: '#5a4010' }); txt('ЗАВЕЩАНИЕ', 0, 108, 34, { font: 'Osw', col: '#3a2a0a' });
    chipTube(0, -20, 0.95, t, { col: '#c8282a' }); push(0, -200, 1); pencil([[-60, -10], [-20, 20], [0, -6], [20, 20], [60, -10]], { w: 6, col: '#111111', pass2: false }); ell(0, 0, 10, 10, { wash: '#111111', washA: 1, line: false }); pop();
    rect(-150, -380, 300, 360, { wash: '#d8f0ff', washA: 0.12, line: false }); rect(-150, -380, 300, 360, { line: true, w: 3, col: '#c8e8f8', a: 0.8 }); pencil([[-120, -360], [-80, -60]], { w: 8, col: '#ffffff', a: 0.4, pass2: false });
    for (const sd of [-1, 1]) { push(sd * 330, 40, 1); rect(-10, -150, 20, 150, { wash: '#c8a040', washA: 1, w: 2, col: '#5a4010' }); ell(0, -156, 18, 12, { wash: '#e8c860', washA: 1, w: 2 }); pop(); pencil(spline([[sd * 330, -110], [sd * 250, -60], [sd * 190, -100]], false, 8), { w: 10, col: '#8a1a2a' }); }
    if (t > EV.hk_req - 0.05) { const k = clamp((t - EV.hk_req + 0.05) / 0.4); push(-300, -420, 1, -0.08); rect(-110, -20, 220, 240 * k, { wash: '#f6ecd4', washA: 1, w: 2.4, col: '#6a4a1a' }); ell(0, -20, 120, 16, { wash: '#e8d8b0', washA: 1, w: 2, col: '#6a4a1a' });
      if (k > 0.5) { for (let i = 0; i < 4; i++) pencil([[-80, 30 + i * 30], [80 - (i % 2) * 40, 30 + i * 30]], { w: 3, col: '#6a5a3a', a: 0.6, pass2: false }); txt('похороните', 0, 170, 30, { font: 'Hand', col: '#3a2a1a' }); txt('меня в ней', 0, 202, 30, { font: 'Hand', col: '#3a2a1a' }); } pop(); } pop(); }
  function visitors(t) { const gasp = t > EV.hk_can && t < EV.hk_can + 2.0; for (let i = 0; i < 3; i++) { const x = [100, 270, 940][i]; human(x, 1500, 1.12, t, { body: ['#3a4a6a', '#7a2a4a', '#4a5a3a'][i], hair: ['#2a1a0a', '#e8c890', '#1a1a1a'][i], face: gasp ? 'shock' : 'calm', armL: gasp && i === 1 ? 'up' : 'down', armR: gasp ? 'up' : i === 2 ? 'hold' : 'down', seed: 1140 + i, long: i === 1 ? 1 : 0, flip: i === 2 ? -1 : 1, look: i === 2 ? -0.6 : 0.6, prop: i === 2 ? 'phone' : null }); } }
  function crumbs(t, P) { if (t < EV.hk_bite || t > EV.hk_bite + 1.0) return; const q = clamp((t - EV.hk_bite) / 1.0), mx = P.x - 30 * P.s, my = P.y - 330 * P.s; for (let i = 0; i < 14; i++) { const r = rng(11420 + i), a = -3.1 + r() * 2.2; ell(mx + Math.cos(a) * 200 * q, my + Math.sin(a) * 120 * q + q * q * 260, 5 + r() * 5, 4 + r() * 3, { wash: CHP.gold, washA: 1 - q, line: false }); } }
  WORLD.hook = (t, u, cat) => { lay(12, () => hall(t)); lay(2.2, () => exhibit(t)); lay(1.5, () => visitors(t)); lay(1, () => { rect(-300, 1600, 1700, 500, { wash: '#3a1a14', washA: 1, w: 2, col: '#0a0404', key: 11430 }); for (let i = 0; i < 8; i++) pencil([[-300 + i * 220, 1600], [-200 + i * 240, 2100]], { w: 2, col: '#5a3020', a: 0.6, pass2: false }); cat(); }); };
  DIR.hook = {
    outfit: 'tuxA', light: { side: -1, rim: '#ffe0b0' }, grade: ['#a83a3a', 0.05],
    act: () => [[0, 'talk'], [EV.hk_can, 'shock'], [EV.hk_req, 'suspicious'], [EV.h2, 'smug'], [EV.hk_bite - 0.1, 'grin'], [EV.hk_bite + 0.2, 'laugh']],
    pose: (t, u, b) => { const bite = t > EV.hk_bite - 0.25; return Object.assign(b, { x: 700, y: 1810, s: 1.15, flip: true, look: t < EV.hk_req ? [-0.7, -0.6] : t < EV.h2 ? [-0.9, -0.8] : [0, 0.3],
      hand: bite ? [60, -360] : t > EV.h2 - 0.2 ? [150, -320] : [190, -360], handF: [-90, -230], point: t < EV.h2 - 0.2, prop: t > EV.h2 - 0.2 ? 'chipP' : null, tailUp: t > EV.hk_bite }); },
    afterCat: (t, u, P) => crumbs(t, P),
    cam: () => [[0, 580, 1080, 0.16], [EV.hk_can, 560, 900, 0.3, 'x'], [EV.hk_req, 480, 860, 0.3], [EV.h2, 620, 1240, 0.24], [EV.hk_bite, 660, 1240, 0.32], [S1.hook, 660, 1230, 0.34]]
  };
})();
