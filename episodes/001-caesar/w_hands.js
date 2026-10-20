/* 001 — `hands`: крупный план столика Caesar's вечером. Тележка-гередон с деревянной миской, гости держат целые листья ромэна за черешок, как веер.
   «хрустишь» — Том откусывает лист: «ХРУСТЬ!» буквами, зелёные крошки. Тёплый боке зала позади. Переход В сцену: гигантский лист ромэна протирает кадр. */
(() => {
  EV.hd_hands = wtw('s5', 'руками:');
  EV.hd_stem = wtw('s5', 'черешок');
  EV.hd_crunch = wtw('s5', 'хрустишь,');
  SHAKES.push([EV.hd_crunch + 0.05, 0.15, 7]);
  KEYW.push('руками:', 'хрустишь,');

  function bokeh(t) { vgrad(-400, 1600, ['#2a140c', '#5a2c14', '#3a1c0c']); const r = rng(6000); for (let i = 0; i < 40; i++) { const x = r() * 1400 - 160, y = 100 + r() * 1000, R = 30 + r() * 70; glow(x + Math.sin(t * 0.5 + i) * 10, y, R, ['rgba(255,200,110,1)', 'rgba(255,150,80,1)', 'rgba(255,240,190,1)'][i % 3], 0.35 + 0.15 * Math.sin(t * 2 + i)); }
    for (const x of [-60, 1120]) pencil([[x, 0], [x, 1600]], { w: 80, col: '#1e0e06', a: 0.7 }); }
  function cart(t) { push(860, 1240, 1); rect(-200, -40, 400, 30, { wash: '#8a4a22', washA: 1, w: 2.4, col: '#2a1008' }); for (const sd of [-1, 1]) { pencil([[sd * 180, -10], [sd * 180, 260]], { w: 10, col: '#6a3a1a' }); ell(sd * 180, 270, 24, 24, { wash: '#2a2a2a', washA: 1, w: 2 }); } pencil([[-180, 160], [180, 160]], { w: 6, col: '#6a3a1a' });
    pop(); woodBowl(860, 1150, 170, 110, { part: 'back' }); const r = rng(6010); for (let i = 0; i < 6; i++) leaf(780 + i * 32, 1170, 0.8, -0.6 + i * 0.25 + Math.sin(t * 6 + i) * 0.05, { key: 6011 + i }); woodBowl(860, 1150, 170, 110, { part: 'front' });
    push(860, 1240, 1); for (const [x, c] of [[-150, '#2a1a0a'], [-110, '#e8862a'], [130, '#f2d23a']]) { if (c === '#e8862a') wBottle(x, -40, 0.32); else if (c === '#f2d23a') lemon(x, -60, 0.6); else { rect(x - 14, -110, 28, 70, { wash: '#c8a040', washA: 0.85, w: 1.6 }); } } pop(); }
  function guest(x, y, s, t, o, k) { human(x, y, s, t, Object.assign({ armL: 'hold', armR: 'up', seed: 100 + k }, o)); if (o.hatK) hat20(x, y, s, o.hatK, o.hatC, o.flip || 1);
    const fl = o.flip || 1, hx = x + fl * 82 * s, hy = y + (-216 - 104) * s;
    push(hx, hy, s * 1.2, fl * (0.2 + Math.sin(t * 2 + k) * 0.08)); leaf(0, 20, 0.9, 0, { key: 6020 + k, shine: 1 }); pop(); }
  function table(t) { const tb = rect(-300, 1380, 1700, 800, { wash: '#f8f4ea', washA: 1, w: 3, col: '#4a3a2a', key: 6030 }); shadeG(tb.path, 0, 1700, 0, 1380, '#b8ac94', 0.4);
    for (let i = 0; i < 12; i++) pencil([[-260 + i * 140, 1400], [-280 + i * 150, 2000]], { w: 1.4, col: '#c8bca4', a: 0.5, pass2: false });
    for (const x of [120, 980]) { ell(x, 1460, 130, 34, { wash: '#ffffff', washA: 1, w: 2.2, col: '#5a5a5a' }); ell(x, 1456, 90, 22, { wash: '#f2efe8', washA: 1, w: 1.2, col: '#9a968c', a: 0.6 }); for (let i = 0; i < 3; i++) crouton(x - 40 + i * 40, 1446, 0.5, i, { key: 6031 + i }); }
    for (const x of [300, 760]) { push(x, 1440, 1); poly([[-30, -110], [30, -110], [8, -40], [-8, -40]], { wash: '#e8b53a', washA: 0.8, w: 2, col: '#3a2a14' }); pencil([[0, -40], [0, 0]], { w: 4, col: '#e8f0f4', a: 0.9, pass2: false }); ell(0, 0, 26, 7, { wash: '#e8f0f4', washA: 0.8, w: 1.4 }); glow(-14, -90, 20, 'rgba(255,255,255,1)', 0.5); pop(); }
    push(540, 1430, 1); ell(0, 0, 16, 16, { wash: '#efe0b8', washA: 1, w: 1.4 }); blob([[-6, -14], [0, -54 * flick(t)], [6, -14]], { wash: '#ffc04a', washA: 1, line: false }); glow(0, -40, 160, 'rgba(255,170,70,1)', 0.45 * flick(t)); pop(); }
  function crunchFX(t) { if (t < EV.hd_crunch || t > EV.hd_crunch + 1.2) return; const k = popK(t, EV.hd_crunch, 0.25), a = clamp((EV.hd_crunch + 1.2 - t) / 0.4);
    push(540, 720, k, -0.1); ctx.save(); ctx.globalAlpha = a; ctx.font = '600 150px Osw'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round'; ctx.lineWidth = 22; ctx.strokeStyle = '#2b2622'; ctx.strokeText('ХРУСТЬ!', 0, 0); ctx.fillStyle = '#e8b53a'; ctx.fillText('ХРУСТЬ!', 0, 0); ctx.restore();
    for (let i = 0; i < 10; i++) { const aa = i / 10 * 6.283; pencil([[Math.cos(aa) * 300, Math.sin(aa) * 130], [Math.cos(aa) * 380, Math.sin(aa) * 170]], { w: 6, col: '#e8b53a', a: a * 0.9, pass2: false }); } pop(); }
  WORLD.hands = (t, u, cat) => {
    lay(10, () => bokeh(t));
    lay(3, () => { cart(t); guest(120, 1400, 1.05, t, { body: '#a8324a', long: 1, hair: '#1a1a1a', face: t > EV.hd_crunch ? 'grin' : 'smile', hatK: 'cloche', hatC: '#2a2a3a' }, 0); guest(380, 1390, 1.0, t, { body: '#2a3a5a', legs: '#2a2a3a', hair: '#6a4a2a', face: t > EV.hd_crunch ? 'shock' : 'smile', hatK: 'fedora', hatC: '#4a3a2a' }, 1); haze('#ff9a50', 0.05); });
    lay(1, () => { cat(); crumbs(640, 1000, t, EV.hd_crunch, 18, 6, '#8ab040'); });
    lay(0.8, () => table(t));
    lay(0.6, () => crunchFX(t));
  };
  DIR.hands = {
    outfit: 'waiter', light: { side: -1, rim: '#ffc880' }, grade: ['#ff9a50', 0.12],
    act: () => [[S0.hands, 'talk'], [EV.hd_stem, 'smug'], [EV.hd_crunch - 0.1, 'grin'], [EV.hd_crunch + 0.15, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 660, y: 1660, s: 1.25, look: [0.2, -0.3], hand: t > EV.hd_crunch - 0.25 ? [130, -270] : [110, -230], prop: 'leafP', propAng: t > EV.hd_crunch - 0.25 ? -1.35 : 0.5, handF: t > EV.hd_stem && t < EV.hd_crunch ? [-130, -300] : [-90, -150], point: t > EV.hd_stem && t < EV.hd_crunch ? 1 : undefined }),
    cam: () => [[S0.hands, 600, 1100, 0.3], [EV.hd_stem, 640, 1040, 0.22], [EV.hd_crunch, 640, 1000, 0.36], [S1.hands, 620, 1060, 0.26]]
  };
  // ---------------------------------------------------------------- переход: лист ромэна протирает кадр
  TRANS_IN.hands = { a: 0.25, b: 0.3, runA: 1, fx(k, t, A, B) {
    const x = lerp(-900, 1900, k); drawBuf(A, 1, 540, 960); ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.rect(0, 0, Math.max(0, x - 150), 1920); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore();
    scr(() => leaf(x, 1500, 8.5, 1.25, { key: 6050, shine: 1, len: 260, wid: 80 }));
  } };
})();
