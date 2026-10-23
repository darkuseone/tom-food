/* 005 — `belt`: «А в Америке курорты в горах прозвали «Борщовым поясом» из-за кухни переселенцев.» Горы Кэтскилл, 1930–50-е: лесистые хребты в дымке,
   озеро, большой деревянный отель с верандой и вывеской-щитом, бассейн с зонтиками, отдыхающие в шезлонгах. На «Борщовым поясом» по горам, как ремень, проезжает
   красная лента-пояс с пряжкой-тарелкой и надписью BORSCHT BELT; на «переселенцев» на веранде бабушка-повар в платке выносит кастрюлю, гости аплодируют.
   Том в смокинге-конферансье. Переход В сцену: вывеска-щит переворачивается, как табло. */
(() => {
  EV.bl_mount = wtw('s8', 'горах');
  EV.bl_belt = wtw('s8', '«Борщовым');
  EV.bl_cook = wtw('s8', 'кухни');
  SHAKES.push([EV.bl_belt + 0.6, 0.2, 8]);
  KEYW.push('поясом»');

  function hills2(t) { vgrad(-600, 1100, ['#f0a868', '#f8d0a0', '#f8ecd0']); ell(200, 360, 80, 80, { wash: '#fff0b0', washA: 1, line: false }); glow(200, 360, 260, 'rgba(255,220,150,1)', 0.5);
    const ridge = (y, a, col, sd) => { const pts = [[-300, 1200]]; for (let i = 0; i <= 18; i++) { const r = rng(sd + i)(); pts.push([-300 + i * 100, y - Math.sin(i * 0.7 + sd) * a - r * a * 0.5]); } pts.push([1500, 1200]); shape(pts, { wash: col, washA: 1, w: 2, col: '#2a3a2a' }); };
    ridge(640, 120, '#8aa0a0', 6000); ridge(760, 100, '#5a7a5a', 6020); for (let i = 0; i < 18; i++) spruce(-280 + i * 90, 900 + (i % 3) * 14, 150, '#2a4a2a', 0.9);
    // пояс по горам
    const k = clamp((t - EV.bl_belt) / 1.0); if (k > 0) { const pts = []; for (let i = 0; i <= 30 * k; i++) { const q = i / 30; pts.push([lerp(-200, 1300, q), 600 - Math.sin(q * 6) * 40 - q * 30]); }
      if (pts.length > 1) { pencil(pts, { w: 46, col: '#8a1424', pass2: false }); pencil(pts, { w: 34, col: BR.red, pass2: false }); pencil(pts.map(p => [p[0], p[1] - 10]), { w: 4, col: BR.redL, a: 0.8, pass2: false });
        const [bx, by] = pts[Math.min(pts.length - 1, 15)]; if (pts.length > 15) { ell(bx, by, 60, 60, { wash: '#d6a842', washA: 1, w: 4, col: '#5a3a10' }); ell(bx, by, 40, 40, { wash: BR.red, washA: 1, w: 2, col: '#5a0a14' }); ell(bx - 8, by - 8, 14, 8, { wash: BR.smet, washA: 1, line: false }); } }
      if (k > 0.5) txt('BORSCHT BELT', 780, 540, 56, { font: 'Osw', col: '#fff4d0', a: (k - 0.5) * 2, rot: -0.04 }); } }
  function hotel(t) { const h = rect(380, 820, 700, 360, { wash: '#f2ead6', washA: 1, w: 3, col: '#3a2a1a', key: 6040 }); poly([[350, 820], [730, 700], [1110, 820]], { wash: '#3a5a4a', washA: 1, w: 3, col: '#1a2a1a' });
    for (let r = 0; r < 2; r++) for (let c = 0; c < 6; c++) rect(410 + c * 110, 860 + r * 130, 60, 80, { wash: (c + r) % 3 ? '#fff0a0' : '#6a8aa8', washA: 1, w: 2, col: '#3a2a1a' });
    rect(380, 1120, 700, 20, { wash: '#8a5a3a', washA: 1, w: 2 }); for (let i = 0; i < 8; i++) pencil([[400 + i * 95, 1140], [400 + i * 95, 1180]], { w: 6, col: '#8a5a3a' });
    const cook = t > EV.bl_cook - 0.1; human(560, 1180, 0.6, t, { body: '#5a4a7a', hair: '#c8c8c8', face: 'smile', armL: 'hold', armR: cook ? 'up' : 'hold', seed: 410, long: 1, hat: 'scarf', hatCol: '#d9482b' }); if (cook) clayPot(600, 1040, 0.28, t, { col: BR.red, steam: true });
    for (let i = 0; i < 3; i++) human(760 + i * 100, 1180, 0.56, t, { body: ['#e8a040', '#3a6aa8', '#d9482b'][i], hair: '#3a2a1a', face: cook ? 'grin' : 'smile', armL: cook ? 'wave' : 'hold', armR: cook ? 'wave' : 'hold', seed: 411 + i, look: -0.6 });
    hat20(860, 1180, 0.56, 'fedora', '#5a4a3a'); }
  function pool(t) { const p = ell(380, 1330, 520, 70, { wash: '#5ac0e0', washA: 1, w: 4, col: '#f2f2f2', key: 6050 }); for (let i = 0; i < 8; i++) pencil([[-60 + i * 110, 1320 + (i % 2) * 20], [-20 + i * 110, 1316 + (i % 2) * 20]], { w: 3, col: '#e8faff', pass2: false });
    for (let i = 0; i < 2; i++) { const x = 60 + i * 240; pencil([[x, 1300], [x, 1150]], { w: 4, col: '#5a4a3a' }); poly([[x - 90, 1170], [x, 1110], [x + 90, 1170]], { wash: i ? '#f2d040' : '#d9482b', washA: 1, w: 2, col: '#3a2a1a' }); }
    human(160, 1290, 0.6, t, { body: '#f08ab0', hair: '#e8c060', face: 'smile', armL: 'hold', armR: 'hold', seed: 415, look: 0.3 }); hat20(160, 1290, 0.6, 'boater'); }
  function sign(t) { push(940, 1240, 1, -0.03); pencil([[-120, 200], [-120, 0]], { w: 12, col: '#5a3a1a' }); pencil([[120, 200], [120, 0]], { w: 12, col: '#5a3a1a' }); rect(-170, -150, 340, 170, { wash: '#2a4a3a', washA: 1, w: 5, col: '#d6a842' }); txt('ОТЕЛЬ', 0, -100, 32, { font: 'Osw', col: '#d6a842' }); txt('«ГОРЫ»', 0, -40, 50, { font: 'Hand', col: '#fff4d0' }); for (let i = 0; i < 10; i++) { const on = (Math.floor(t * 6) + i) % 2; ell(-160 + i * 35, -150, 6, 6, { wash: on ? '#fff0a0' : '#8a7a4a', washA: 1, line: false }); } pop(); }
  WORLD.belt = (t, u, cat) => { lay(16, () => hills2(t)); lay(3, () => hotel(t)); lay(1.6, () => pool(t)); lay(1, () => { rect(-300, 1460, 1700, 600, { wash: '#c8a878', washA: 1, w: 2, col: '#5a3a1a', key: 6060 }); for (let i = 0; i < 10; i++) pencil([[-300, 1490 + i * 50], [1400, 1490 + i * 50]], { w: 1.6, col: '#8a6a4a', a: 0.5, pass2: false }); sign(t); cat(); }); };
  DIR.belt = {
    outfit: 'tuxA', light: { side: 1, rim: '#ffd8a0' }, grade: ['#f0a050', 0.08],
    act: () => [[S0.belt, 'talk'], [EV.bl_mount, 'smug'], [EV.bl_belt, 'awe'], [EV.bl_belt + 0.8, 'laugh'], [EV.bl_cook, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1800, s: 1.1, flip: false, look: t < EV.bl_cook ? [0.3, -0.9] : [0.5, -0.5], hand: t < EV.bl_belt + 0.6 ? [-150, -400] : [-130, -260], handF: [110, -240], point: t < EV.bl_cook ? 1 : 0, tailUp: t > EV.bl_belt }),
    cam: () => [[S0.belt, 540, 1050, 0.16], [EV.bl_mount, 560, 1000, 0.1], [EV.bl_belt, 600, 960, 0.1, 'x'], [EV.bl_cook, 680, 1080, 0.26, 'x'], [S1.belt, 700, 1080, 0.3]]
  };
  // ---------------------------------------------------------------- переход: щит-вывеска переворачивается, как табло (сверху вниз полосами)
  TRANS_IN.belt = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    scr(() => { const N = 8, hh = H / N; for (let i = 0; i < N; i++) { const q = clamp(k * 1.6 - i * 0.08), y0 = i * hh, sy = Math.abs(Math.cos(q * Math.PI)), src = q < 0.5 ? A : B;
      ctx.save(); ctx.beginPath(); ctx.rect(0, y0, W, hh + 1); ctx.clip(); ctx.translate(0, y0 + hh / 2); ctx.scale(1, Math.max(0.02, sy)); ctx.translate(0, -(y0 + hh / 2)); ctx.drawImage(src, 0, 0); ctx.restore();
      if (q > 0 && q < 1) { ctx.fillStyle = `rgba(20,30,24,${0.5 * (1 - sy)})`; ctx.fillRect(0, y0, W, hh); } ctx.fillStyle = '#d6a842'; ctx.fillRect(0, y0 + hh - 3, W, 3); } });
  } };
})();
