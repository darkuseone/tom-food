/* 009 — `boat`: «А аджарский — лодка. Желток посередине, по легенде, — солнце над Чёрным морем.» ТОМ-МАЛЫШ внутри аджарского хачапури: по краям кадра — бортики
   теста как золотые скалы с поджаристыми прожилками, между ними сырное море с пузырями; Том-малыш в морской форме стоит в маленькой лодочке-хачапури с веслом.
   На «лодка.» лодочка выплывает из-за скалы; на «Желток» из-за горизонта встаёт желток-солнце с лучами; на «легенде» — чайки-крошки и табличка ЛЕГЕНДА; на «морем.»
   море у горизонта синеет в Чёрное, белые барашки. Пауза-гэг: мимо проплывает айсберг-кубик масла и тает, Том-малыш отталкивает его веслом.
   Переход В сцену: сырная волна прокатывается через кадр. */
(() => {
  EV.bt_boat = wtw('s4', 'лодка.');
  EV.bt_yolk = wtw('s4', 'Желток');
  EV.bt_leg = wtw('s4', 'легенде,');
  EV.bt_sea = wtw('s4', 'морем.');
  EV.bt_butter = LE('s4') - 0.6;
  SHAKES.push([EV.bt_yolk + 0.3, 0.2, 6]);
  KEYW.push('солнце');

  const HZ = 900;
  function sky(t) { const sk = clamp((t - EV.bt_yolk) / 1.2); vgrad(-600, HZ + 40, [lerpC('#f6e6b8', '#ffb060', sk * 0.6), lerpC('#f8ecc8', '#ffd890', sk * 0.6), '#fff4d8']);
    const rise = sm(clamp((t - EV.bt_yolk + 0.1) / 1.0)); if (rise > 0) { const sy = HZ + 60 - rise * 300; glow(560, sy, 520, 'rgba(255,190,60,1)', 0.7 * rise); rays(560, sy, -Math.PI / 2, 2.6, 900, 'rgba(255,220,120,1)', 0.25 * rise, 14, t);
      ell(560, sy, 130, 120, { wash: KHP.yolk, washA: 1, w: 3, col: '#a85a08', key: 10900 }); ell(520, sy - 40, 40, 22, { wash: '#fff6d0', washA: 0.8, line: false }); }
    if (t > EV.bt_leg) for (let i = 0; i < 5; i++) { const x = ((i * 230 + t * 60) % 1500) - 200, y = 780 + Math.sin(t * 2 + i) * 30 + (i % 2) * 50, f = Math.sin(t * 9 + i) * 14; pencil(spline([[x - 30, y + f], [x - 12, y - 6], [x, y], [x + 12, y - 6], [x + 30, y + f]], false, 6), { w: 5, col: '#5a4a3a', pass2: false }); ell(x + 50, y + 30, 4, 3, { wash: KHP.crust, washA: 1, line: false }); }
    if (t > EV.bt_leg) bubbleTag('ЛЕГЕНДА', 560, 520, t, EV.bt_leg, '#2a5a8a', 44, 0.05); }
  function sea(t) { const blue = clamp((t - EV.bt_sea + 0.2) / 0.8);
    rect(-300, HZ, 1700, 1300, { wash: KHP.cheese, washA: 1, line: false, key: 10910 }); if (blue > 0) { ctx.save(); ctx.globalAlpha = blue; vgrad(HZ, HZ + 600, ['#1a4a6a', '#2a6a8a', KHP.cheese]); ctx.restore(); }
    for (let r = 0; r < 9; r++) { const y = HZ + 20 + r * r * 14; for (let i = 0; i < 9; i++) { const x = ((i * 170 + r * 60 + t * (20 + r * 8)) % 1700) - 300; pencil(spline([[x, y], [x + 30, y - 8 - r], [x + 60, y]], false, 5), { w: 2 + r * 0.6, col: blue > 0.5 && r < 5 ? '#ffffff' : KHP.cheeseD, a: 0.7, pass2: false }); } }
    for (let i = 0; i < 10; i++) { const r = rng(10920 + i), k = (t * 0.5 + r()) % 1; ell(r() * 1080, 1100 + r() * 700, 10 + r() * 14, 8 + r() * 10, { wash: '#fff8d8', washA: 0.7 * (1 - k), w: 1, col: KHP.cheeseD, a: 1 - k }); }
    const bx = lerp(900, -150, clamp((t - EV.bt_butter) / 2.6)), melt = clamp((t - EV.bt_butter - 0.6) / 1.6); if (t > EV.bt_butter - 0.1) { push(bx, 1300, 1); rect(-60, -80 + melt * 50, 120, 110 - melt * 60, { wash: KHP.butter, washA: 1, w: 2.4, col: '#b8a040' }); ell(0, 30, 90 + melt * 40, 16, { wash: '#fff6c0', washA: 0.7, line: false }); ell(-20, -60 + melt * 50, 18, 8, { wash: '#ffffff', washA: 0.8, line: false }); pop(); } }
  function cliffs(t) { for (const sd of [-1, 1]) { const x0 = sd < 0 ? -40 : 1120; const pts = [[x0 - sd * 380, -400], [x0 + sd * 40, -400], [x0 + sd * 80, 300], [x0 + sd * 20, 900], [x0 + sd * 120, 1500], [x0 + sd * 60, 2100], [x0 - sd * 380, 2100]];
      const c = shape(spline(pts, true, 8), { wash: KHP.crust, washA: 1, w: 4, col: '#5a300c', key: 10930 + (sd + 1) }); shadeG(c.path, x0 + sd * 100, 0, x0 - sd * 300, 0, KHP.crustD, 0.5);
      for (let i = 0; i < 9; i++) { const y = -300 + i * 260; pencil(spline([[x0 - sd * 200, y], [x0, y + 40], [x0 + sd * 60, y + 120]], false, 6), { w: 5, col: '#b06a24', a: 0.6, pass2: false }); ell(x0 - sd * 120, y + 100, 26, 12, { wash: '#a85a1a', washA: 0.4, line: false }); } } }
  function boat(t, P) { const by = P.y + 10, bx = P.x; push(bx, by, 1.05, Math.sin(t * 1.6) * 0.04); adjaruli(0, -10, 0.62, t, { steam: false, noYolk: true, butter: false }); blob([[-150, -10], [-120, 30], [120, 30], [150, -10], [100, -24], [-100, -24]], { wash: KHP.crustD, washA: 0.3, line: false }); pop();
    const oarA = Math.sin(t * 3) * 0.4 - (t > EV.bt_butter + 1.0 && t < EV.bt_butter + 1.8 ? 0.7 : 0); push(bx - 90, by - 120, 1, oarA - 0.4); pencil([[0, -40], [0, 180]], { w: 7, col: '#7a4a24' }); ell(0, 200, 16, 40, { wash: '#a8743a', washA: 1, w: 2, col: '#4a2a0a' }); pop(); }
  WORLD.boat = (t, u, cat) => { lay(14, () => sky(t)); lay(3, () => sea(t)); lay(1.6, () => cliffs(t)); lay(1, () => { cat(); }); };
  DIR.boat = {
    outfit: 'sailorA', light: { side: -1, rim: '#ffd890' }, grade: ['#f0a040', 0.05],
    act: () => [[S0.boat, 'awe'], [EV.bt_boat, 'proud'], [EV.bt_yolk, 'awe'], [EV.bt_leg, 'smug'], [EV.bt_sea, 'grin'], [EV.bt_butter + 0.8, 'suspicious'], [EV.bt_butter + 1.4, 'laugh']],
    pose: (t, u, b) => { const sail = sm(clamp((t - S0.boat) / 1.4)); return Object.assign(b, { x: lerp(980, 600, sail), y: 1430 + Math.sin(t * 1.6) * 8, s: 0.52, flip: true, look: t < EV.bt_yolk ? [-0.3, 0] : t < EV.bt_butter + 0.6 ? [-0.2, -0.8] : [0.6, 0.3], hand: [140, -300], handF: [-100, -260], tailUp: true }); },
    afterCat: (t, u, P) => boat(t, P),
    cam: () => [[S0.boat, 560, 1100, 0.1], [EV.bt_yolk, 560, 1000, 0.14], [EV.bt_sea, 560, 1080, 0.2], [EV.bt_butter, 640, 1200, 0.3], [S1.boat, 600, 1200, 0.32]]
  };
  TRANS_IN.boat = { a: 0.2, b: 0.45, runA: 1, fx(k, t, A, B) {                // сырная волна прокатывается через кадр
    const q = sm(k), xw = lerp(-500, W + 500, q); drawBuf(A, 1, 540, 960);
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); for (let y = -100; y <= H + 100; y += 40) ctx.lineTo(xw + Math.sin(y / 160 + t * 6) * 70, y); ctx.lineTo(-100, H + 100); ctx.lineTo(-100, -100); ctx.closePath(); ctx.clip(); ctx.drawImage(B, 0, 0); ctx.restore();
    scr(() => { const pts = []; for (let y = -100; y <= H + 100; y += 40) pts.push([xw + Math.sin(y / 160 + t * 6) * 70, y]); pencil(pts, { w: 60, col: '#f8e6a0', a: 1 - q * 0.3, pass2: false }); pencil(pts.map(([x, y]) => [x + 22, y]), { w: 14, col: '#fffbe0', a: 0.8, pass2: false }); });
  } };
})();
