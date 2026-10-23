/* 007 — `poem`: «А в тринадцатом веке поэт уже воспевал редьку в рассоле.» Ночь эпохи Корё: полная луна, кривая сосна на скале, беседка-чонджа над рекой,
   туман между горами. Поэт в белом сидит на циновке и декламирует со свитка; перед ним кувшин с рассолом, из которого, как муза, поднимается светящаяся редька.
   Строчки стихов (волнистые линии) плывут к луне. Том-сонби слушает, прижав лапу к сердцу. Переход В сцену: складная ширма — прошлый кадр складывается панелями. */
(() => {
  EV.pm_poet = wtw('s6', 'поэт');
  EV.pm_rad = wtw('s6', 'редьку');
  KEYW.push('редьку');

  function night(t) { vgrad(-600, 1300, ['#0a1430', '#1a2a50', '#3a4a6a']); ell(760, 360, 150, 150, { wash: '#fff6d0', washA: 1, line: false }); glow(760, 360, 420, 'rgba(255,240,190,1)', 0.45); for (let i = 0; i < 40; i++) { const r = rng(8300 + i); ell(r() * 1200 - 60, r() * 700 - 100, 1.6, 1.6, { wash: '#ffffff', washA: 0.4 + 0.4 * Math.sin(t * 2 + i), line: false }); }
    poly([[-300, 1000], [-100, 620], [80, 820], [300, 560], [520, 860], [760, 640], [1000, 880], [1400, 700], [1400, 1100], [-300, 1100]], { wash: '#2a3a50', washA: 1, w: 2, col: '#0a1424' }); haze('#8aa0c0', 0.12);
    rect(-300, 1000, 1700, 200, { wash: '#1a2a44', washA: 1, line: false }); for (let i = 0; i < 12; i++) pencil([[(i * 120 + t * 20) % 1700 - 300, 1040 + (i % 3) * 40], [(i * 120 + t * 20) % 1700 - 240, 1040 + (i % 3) * 40]], { w: 3, col: '#fff6d0', a: 0.5, pass2: false });
    push(860, 900, 1); for (const sd of [-1, 1]) pencil([[sd * 110, 0], [sd * 110, -180]], { w: 12, col: '#6a2a1a' }); const r1 = shape(spline([[-200, -170], [-130, -150], [0, -220], [130, -150], [200, -170], [140, -230], [0, -300], [-140, -230]], true, 8), { wash: '#2a2a34', washA: 1, w: 2.4, col: '#0a0a10' }); rect(-130, -20, 260, 20, { wash: '#6a2a1a', washA: 1, w: 2 }); pop(); }
  function pine(t) { push(120, 1300, 1); pencil(spline([[0, 0], [30, -200], [-20, -400], [60, -600], [20, -760]], false, 8), { w: 34, col: '#3a2a1a' }); for (const [x, y, w] of [[-80, -420, 220], [120, -560, 260], [-20, -720, 200], [160, -320, 180]]) { blob([[x - w / 2, y], [x - w / 3, y - 50], [x + w / 3, y - 60], [x + w / 2, y], [x, y + 20]], { wash: '#1a3a2a', washA: 1, w: 2, col: '#0a1a10' }); } pop(); }
  function poet(t) { rect(260, 1290, 400, 30, { wash: '#c8a860', washA: 1, w: 2, col: '#5a3a14' }); human(380, 1300, 0.86, t, { body: '#f2f0e8', hair: '#c8c8c8', face: t > EV.pm_rad ? 'grin' : 'smile', armL: 'hold', armR: 'up', seed: 830, beard: 'long', look: 0.4 }); gat20(380, 1300, 0.86);
    push(460, 1040, 1, 0.1); rect(-50, -70, 100, 140, { wash: '#f6eed8', washA: 1, w: 2, col: '#6a5a3a' }); for (let i = 0; i < 4; i++) pencil([[-30 + i * 20, -56], [-30 + i * 20, 56]], { w: 2, col: '#2a2a2a', a: 0.5, pass2: false }); pop();
    if (t > EV.pm_poet) for (let i = 0; i < 5; i++) { const k = ((t - EV.pm_poet) * 0.5 + i / 5) % 1; const x = 500 + k * 300, y = 1000 - k * 520; pencil([[x, y], [x + 20, y - 8], [x + 40, y], [x + 60, y - 8], [x + 80, y]], { w: 3, col: '#fff6d0', a: 0.8 * (1 - k), pass2: false }); }
    onggi(580, 1440, 0.55, t, { lid: false }); if (t > EV.pm_rad - 0.2) { const p = popK(t, EV.pm_rad - 0.2, 0.6); glow(580, 1220, 200, 'rgba(255,250,220,1)', 0.5 * p); radish(580, 1240 - p * 60 + Math.sin(t * 2) * 8, 0.8 * p, Math.sin(t * 1.5) * 0.1); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283 + t; ell(580 + Math.cos(a) * 130, 1200 + Math.sin(a) * 90, 4, 4, { wash: '#fff6d0', washA: 0.8, line: false }); } bubbleTag('МУЗА', 580, 980, t, EV.pm_rad + 0.2, '#2a6ab8', 32, 0.05); } }
  WORLD.poem = (t, u, cat) => { lay(12, () => night(t)); lay(2, () => pine(t)); lay(1.2, () => poet(t)); lay(1, () => { rect(-300, 1460, 1700, 600, { wash: '#3a4a5a', washA: 1, w: 2, col: '#0a1420', key: 8310 }); cat(); }); };
  DIR.poem = {
    outfit: 'seonbi', light: { side: 1, rim: '#fff6d0' }, grade: ['#3a4a8a', 0.06],
    act: () => [[S0.poem, 'talk'], [EV.pm_poet, 'awe'], [EV.pm_rad, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 880, y: 1800, s: 1.1, flip: true, look: [-0.7, -0.3], hand: [40, -300], handF: [-90, -230], tilt: Math.sin(t * 2) * 0.03 }),
    cam: () => [[S0.poem, 600, 900, 0.1], [EV.pm_poet, 480, 1150, 0.16, 'x'], [EV.pm_rad, 560, 1250, 0.2], [S1.poem, 560, 1250, 0.22]]
  };
  // ---------------------------------------------------------------- переход: складная ширма — прошлый кадр складывается вертикальными панелями
  TRANS_IN.poem = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const q = sm(k), N = 6, pw = W / N; scr(() => { for (let i = 0; i < N; i++) { const sx = Math.max(0.001, 1 - q), x0 = i * pw; ctx.save(); ctx.translate(x0 + (i % 2 ? pw : 0), 0); ctx.scale(sx, 1); ctx.translate(-(x0 + (i % 2 ? pw : 0)), 0); ctx.beginPath(); ctx.rect(x0, 0, pw, H); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.fillStyle = `rgba(0,0,0,${0.4 * q * (i % 2 ? 1 : 0.5)})`; ctx.fillRect(x0, 0, pw, H); ctx.restore(); } });
  } };
})();
