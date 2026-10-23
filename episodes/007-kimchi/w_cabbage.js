/* 007 — `cabbage`: «Конец девятнадцатого века: приходит пекинская капуста — звезда кимчи.» Рынок позднего Чосона: черепичные крыши ханоков с загнутыми
   карнизами, горы вдали, торговцы в белом и в шляпах-кат, корзины с редькой. На «приходит» справа въезжает воловья повозка с горой капусты, носильщик несёт кочаны
   на заплечной раме-чжиге; на «звезда кимчи» один кочан встаёт на помост — софиты, вспышки фотографов-зевак, звёздочки. Том — торговец в ханбоке.
   Переход В сцену: прошлый кадр отслаивается, как капустный лист, с угла. */
(() => {
  EV.cb_come = wtw('s3', 'приходит');
  EV.cb_star = wtw('s3', 'звезда');
  SHAKES.push([EV.cb_star + 0.1, 0.18, 8]);
  KEYW.push('звезда');

  function town(t) { vgrad(-600, 1100, ['#a8d0e8', '#d8ecf4', '#f6f2e0']); hills(760, 140, '#7a9a8a', 1.4); hills(840, 90, '#5a7a5a', 0.9);
    for (let i = 0; i < 4; i++) { const x = -240 + i * 370; rect(x + 20, 760, 300, 240, { wash: '#f2ead6', washA: 1, w: 2.4, col: '#4a3a2a' }); for (let q = 0; q < 3; q++) rect(x + 40 + q * 95, 800, 70, 160, { wash: '#e8dcc0', washA: 1, w: 1.6, col: '#6a4a2a' }); pencil([[x + 20, 1000], [x + 320, 1000]], { w: 12, col: '#6a4a2a' });
      const roof = shape(spline([[x - 50, 720], [x + 10, 770], [x + 170, 740], [x + 330, 770], [x + 390, 720], [x + 320, 680], [x + 170, 650], [x + 20, 680]], true, 8), { wash: '#3a3a44', washA: 1, w: 2.6, col: '#14141a', key: 8000 + i }); for (let q = 0; q < 10; q++) pencil([[x + q * 36, 690], [x + q * 36 + 10, 760]], { w: 2, col: '#5a5a64', a: 0.6, pass2: false }); } }
  function market(t) { for (let i = 0; i < 3; i++) { const x = 60 + i * 150; human(x, 1220, 0.72, t, { body: '#f6f2ea', hair: '#1a1a1a', face: t > EV.cb_star ? 'shock' : 'smile', armL: 'hold', armR: t > EV.cb_star ? 'point' : 'hold', seed: 800 + i, beard: i === 1, look: 0.6, long: i === 2 ? 1 : 0 }); if (i !== 2) gat20(x, 1220, 0.72); }
    for (let i = 0; i < 3; i++) { push(140 + i * 140, 1300, 0.7); ell(0, 0, 70, 24, { wash: '#c8a060', washA: 1, w: 2, col: '#5a3a14' }); for (let q = 0; q < 3; q++) radish(-30 + q * 30, -30, 0.35, -0.3 + q * 0.3); pop(); }
    const k = clamp((t - EV.cb_come + 0.4) / 2.8), cx = lerp(1500, -700, k); push(cx, 1300, 0.9); for (const sd of [-1, 1]) { ell(sd * 160, 0, 60, 60, { wash: '#7a5a3a', washA: 1, w: 3, col: '#2a1a0a' }); for (let s2 = 0; s2 < 6; s2++) { const a = s2 / 6 * 6.283 + (1 - k) * 8; pencil([[sd * 160, 0], [sd * 160 + Math.cos(a) * 56, Math.sin(a) * 56]], { w: 3, col: '#4a3010', pass2: false }); } }
      rect(-220, -70, 440, 50, { wash: '#8a6a44', washA: 1, w: 2.4, col: '#2a1a0a' }); for (let i = 0; i < 9; i++) napaCabbage(-180 + (i % 5) * 90, -110 - Math.floor(i / 5) * 90, 0.55, (i - 4) * 0.08); pop();
    push(cx + 260, 1300, 0.8); blob([[-80, 0], [-90, -110], [-40, -170], [60, -160], [90, -90], [80, 0]], { wash: '#5a3a2a', washA: 1, w: 3, col: '#1a0a04' }); for (const sd of [-1, 1]) pencil([[sd * 60, 0], [sd * 60, 70]], { w: 16, col: '#4a2a1a' }); ell(110, -150, 50, 40, { wash: '#5a3a2a', washA: 1, w: 3, col: '#1a0a04' }); pencil([[130, -180], [160, -210]], { w: 6, col: '#e8dcc0', pass2: false }); pop();
    human(lerp(1700, -300, k), 1260, 0.74, t, { body: '#e8dcc0', hair: '#1a1a1a', face: 'grin', armL: 'hold', armR: 'hold', seed: 806, look: -0.5, flip: -1 }); push(lerp(1700, -300, k) + 30, 1060, 0.7); pencil([[-40, 200], [-20, -60]], { w: 8, col: '#6a4a2a' }); pencil([[40, 200], [20, -60]], { w: 8, col: '#6a4a2a' }); for (let q = 0; q < 3; q++) napaCabbage(0, -40 - q * 70, 0.5, 0.2); pop(); }
  function stage(t) { if (t < EV.cb_star - 0.2) return; const p = popK(t, EV.cb_star - 0.2, 0.5); push(440, 1440, 1); rect(-150, -40, 300, 60, { wash: '#a8282a', washA: 1, w: 3, col: '#4a0a0a' }); rect(-130, -80, 260, 40, { wash: '#d6a842', washA: 1, w: 2, col: '#6a4a10' });
    for (const sd of [-1, 1]) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = 'rgba(255,240,180,0.18)'; ctx.beginPath(); ctx.moveTo(sd * 400, -700); ctx.lineTo(sd * 360, -720); ctx.lineTo(sd * -40, -80); ctx.lineTo(sd * 80, -80); ctx.fill(); ctx.restore(); }
    napaCabbage(0, -240, 1.4 * p, Math.sin(t * 3) * 0.04); for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283 + t, r = 220 + Math.sin(t * 5 + i) * 20; poly([[Math.cos(a) * r, -240 + Math.sin(a) * r - 14], [Math.cos(a) * r + 6, -240 + Math.sin(a) * r - 4], [Math.cos(a) * r + 16, -240 + Math.sin(a) * r], [Math.cos(a) * r + 6, -240 + Math.sin(a) * r + 4], [Math.cos(a) * r, -240 + Math.sin(a) * r + 14], [Math.cos(a) * r - 6, -240 + Math.sin(a) * r + 4], [Math.cos(a) * r - 16, -240 + Math.sin(a) * r], [Math.cos(a) * r - 6, -240 + Math.sin(a) * r - 4]], { wash: '#fff2a0', washA: 1, line: false }); }
    if ((Math.floor(t * 7) % 3) === 0) whiteOut(0.12, '255,250,230'); pop(); bubbleTag('ЗВЕЗДА', 440, 960, t, EV.cb_star + 0.1, '#d6a842', 40, -0.05); }
  WORLD.cabbage = (t, u, cat) => { lay(14, () => town(t)); lay(2.2, () => market(t)); lay(1, () => { rect(-300, 1440, 1700, 600, { wash: '#c8b090', washA: 1, w: 2, col: '#5a4a2a', key: 8010 }); stage(t); cat(); }); };
  DIR.cabbage = {
    outfit: 'hanbokA', light: { side: 1, rim: '#fff4d8' }, grade: ['#8ab0c8', 0.05],
    act: () => [[S0.cabbage, 'talk'], [EV.cb_come, 'awe'], [EV.cb_star, 'proud'], [EV.cb_star + 0.5, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 860, y: 1800, s: 1.1, flip: true, look: t < EV.cb_star ? [0.7, -0.4] : [-0.7, -0.3], hand: [160, -320], handF: [-90, -230], point: t > EV.cb_star ? 1 : 0, prop: t > EV.cb_come && t < EV.cb_star ? 'napaP' : null }),
    cam: () => [[S0.cabbage, 520, 1000, 0.1], [EV.cb_come, 720, 1150, 0.14], [EV.cb_star, 520, 1250, 0.2, 'x'], [S1.cabbage, 520, 1250, 0.24]]
  };
  // ---------------------------------------------------------------- переход: прошлый кадр отслаивается капустным листом с правого верхнего угла
  TRANS_IN.cabbage = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = sm(k), d = q * 4600; drawBuf(B, 1, 540, 960); scr(() => { const ux = W - d * 0.6, uy = d * 0.8; ctx.save(); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.max(0, W - d * 0.6), 0); ctx.lineTo(0, Math.min(H * 2, d * 1.4)); ctx.closePath(); ctx.restore();
      ctx.save(); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(W, 0); ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath(); ctx.moveTo(W - d * 0.7, 0); ctx.lineTo(W, 0); ctx.lineTo(W, d * 0.9); ctx.closePath(); ctx.clip('evenodd'); ctx.drawImage(A, 0, 0); ctx.restore();
      const p1 = [W - d * 0.7, 0], p2 = [W, d * 0.9]; const back = shape([p1, p2, [W - d * 0.7 + d * 0.3, d * 0.9 * 0.6 + d * 0.2]], { wash: KM.leaf, washA: 1, w: 4, col: KM.leafD }); pencil([p1, [W - d * 0.35 + d * 0.15, d * 0.55]], { w: 6, col: KM.rib, pass2: false }); });
  } };
})();
