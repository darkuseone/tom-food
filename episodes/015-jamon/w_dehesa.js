/* 015 — `dehesa` (ТОМ-МАЛЫШ, раз за ролик): «Осенью свиньи пасутся в дубравах: до десяти кило желудей в день!» Деэса глазами муравья: Том-малыш
   в шляпе свинопаса катит жёлудь размером с себя по траве-джунглям; вокруг — жёлуди-валуны, шапочки-чаши, сухие дубовые листья-лодки, божья коровка,
   гриб, капли росы; сверху — крона каменного дуба с солнцем в листве, падающие жёлуди и листья; позади — великанская иберийская свинья пасётся, её рыло
   с пятачком опускается к земле. По словам: «Осенью» — листья кружат, свет золотеет; «пасутся» — свинья проходит позади, жуёт; «до десяти кило» —
   рядом растёт гора желудей, табло «10 КГ»; «в день!» — солнце в кроне катится по дуге; немая пауза — рыло-пылесос втягивает жёлудь Тома, Том остаётся с
   пустыми лапами. Переход В сцену: падающий жёлудь — удар, круг-волна открывает новую сцену. */
(() => {
  EV.dh_fall = LS('s4');
  EV.dh_graze = wtw('s4', 'пасутся');
  EV.dh_10 = wtw('s4', 'десяти');
  EV.dh_day = wtw('s4', 'день!');
  EV.dh_gag = LE('s4') + 0.05;
  KEYW.push('дубравах:', 'день!');

  function canopy(t) {                                                  // небо сквозь крону дуба, солнце, падающие жёлуди и листья
    vgrad(-700, 1300, ['#e8c070', '#f4dca0', '#c8a868']); const sk = clamp((t - EV.dh_day) / 1.2), sx = lerp(300, 820, sm(sk)), sy = -300 - Math.sin(sk * Math.PI) * 120; glow(sx, sy, 380, 'rgba(255,240,180,1)', 0.8); ell(sx, sy, 70, 70, { wash: '#fff6d0', washA: 1, line: false });
    for (let i = 0; i < 26; i++) { const r = rng(15500 + i), x = -400 + r() * 2000, y = -700 + r() * 600; blob([[x - 140, y + 40], [x - 120, y - 60], [x, y - 100], [x + 120, y - 60], [x + 140, y + 40], [x, y + 70]], { wash: ['#3a5a2a', '#4a6a30', '#2e4a24'][i % 3], washA: 0.95, w: 1.4, col: '#1a2a12' }); }
    pencil(spline([[1100, 1300], [1060, 600], [1120, 0], [1000, -400]], false, 8), { w: 160, col: '#5a4a3a' }); pencil(spline([[1100, 1300], [1060, 600], [1120, 0], [1000, -400]], false, 8), { w: 6, col: '#2a2018', pass2: false }); for (let i = 0; i < 8; i++) pencil([[1040 + (i % 3) * 30, 1200 - i * 160], [1060 + (i % 3) * 30, 1100 - i * 160]], { w: 4, col: '#3a2e24', pass2: false });
    rays(sx, sy, 1.9, 0.6, 2200, 'rgba(255,240,190,1)', 0.16, 6, t);
  }
  function giantPig(t) {                                                // великанская иберийская свинья пасётся позади, рыло опускается к земле
    const k = clamp((t - EV.dh_graze + 0.4) / 1.6), x = lerp(-700, 160, sm(k)), eat = t > EV.dh_gag - 0.6 ? sm(clamp((t - EV.dh_gag + 0.6) / 0.4)) : 0.25 + Math.sin(t * 3) * 0.15;
    ibPig(x, 1250, 4.0, t, { walk: k < 1 ? t * 5 : 0, eat, flip: 1, key: 15510 });
  }
  function ground(t) {                                                  // земля, трава-джунгли, жёлуди-валуны, шапочки, листья, гриб, божья коровка, роса
    const g = rect(-400, 1300, 1900, 900, { wash: '#8a7a44', washA: 1, w: 2, col: '#3a3010', key: 15520 }); shadeG(g.path, 540, 1300, 540, 2000, '#4a3a18', 0.4); hatch(g.path, g.bb, { gap: 14, a: 0.15, col: '#4a3a18', ang: 0.3 });
    for (let i = 0; i < 30; i++) { const x = -360 + i * 66, h = 300 + (i * 37) % 260, sw = Math.sin(t * 1.4 + i) * 20; pencil(spline([[x, 1340], [x + sw * 0.5, 1340 - h * 0.5], [x + sw, 1340 - h]], false, 6), { w: 14, col: i % 3 ? '#8aa040' : '#6a8a30' }); }
    for (const [x, y, s, r] of [[-120, 1420, 1.6, 0.4], [860, 1400, 1.9, -0.3], [240, 1360, 1.0, 0.9]]) acorn(x, y, s, r, { key: 15521 + x });
    for (const [x, y] of [[60, 1460], [1000, 1480]]) { push(x, y, 1.4); const c = blob([[-30, 0], [-26, -20], [0, -26], [26, -20], [30, 0]], { wash: JM.cap, washA: 1, w: 2, col: '#3a2a10' }); hatch(c.path, c.bb, { gap: 6, a: 0.5, col: '#3a2a10', ang: 0.8 }); ell(0, -2, 22, 6, { wash: '#bcd8ec', washA: 0.8, line: false }); pop(); }
    for (const [x, y, r, c] of [[400, 1480, 0.3, '#c8843a'], [760, 1560, -0.4, '#a8642a'], [-60, 1600, 0.2, '#d8a050']]) { push(x, y, 1.3, r); const l = blob([[-90, 0], [-60, -24], [-20, -16], [0, -34], [30, -20], [70, -30], [96, 0], [60, 16], [0, 20], [-60, 14]], { wash: c, washA: 1, w: 2, col: '#5a3010' }); pencil([[-90, 0], [96, 0]], { w: 2, col: '#5a3010', pass2: false }); pop(); }
    push(1180, 1400, 1.3); rect(-14, -80, 28, 80, { wash: '#f4ecd8', washA: 1, w: 1.6 }); const m = blob([[-60, -70], [-50, -110], [0, -130], [50, -110], [60, -70]], { wash: '#c8443a', washA: 1, w: 2, col: '#5a1a10' }); for (const [a, b] of [[-30, -100], [10, -112], [30, -86]]) ell(a, b, 7, 6, { wash: '#ffffff', washA: 1, line: false }); pop();
    push(320, 1250 + Math.sin(t * 2) * 6, 1.2); ell(0, 0, 22, 18, { wash: '#c8221a', washA: 1, w: 1.6, col: '#1a0a0a' }); pencil([[0, -18], [0, 18]], { w: 1.4, col: '#1a0a0a', pass2: false }); for (const [a, b] of [[-10, -6], [10, 4], [-8, 8]]) ell(a, b, 4, 4, { wash: '#1a0a0a', washA: 1, line: false }); ell(0, -20, 10, 8, { wash: '#1a1a1a', washA: 1, line: false }); pop();
    for (const [x, y] of [[180, 1500], [660, 1440]]) { ell(x, y, 12, 12, { wash: '#d8ecf4', washA: 0.6, w: 1, col: '#8aa8c0' }); ell(x - 4, y - 4, 3, 3, { wash: '#ffffff', washA: 1, line: false }); }
    if (t > EV.dh_10 - 0.1) { const n = Math.min(16, Math.floor((t - EV.dh_10 + 0.1) * 14)); for (let i = 0; i < n; i++) { const row = i < 6 ? 0 : i < 11 ? 1 : i < 14 ? 2 : 3, col = i - [0, 6, 11, 14][row]; acorn(-40 + col * 52 + row * 26, 1600 - row * 44, 0.75, (i % 3 - 1) * 0.4, { key: 15530 + i }); }
      push(330, 1180, popK(t, EV.dh_10, 0.4)); rect(-130, -50, 260, 100, { wash: '#1a1a20', washA: 1, w: 4, col: '#c8a050' }); txt('10 КГ', 0, 22, 60, { font: 'Osw', col: '#ffe070' }); pop(); }
    if (t > EV.dh_day) bubbleTag('В ДЕНЬ!', 820, 1020, t, EV.dh_day, '#8a2a1a', 44, 0.04);
  }
  function falling(t) { const r = rng(15540); for (let i = 0; i < 14; i++) { const q = ((t - S0.dehesa) * (0.25 + r() * 0.2) + r()) % 1, x = -100 + r() * 1300 + Math.sin(t * 2 + i) * 60, y = -300 + q * 1800; push(x, y, 1, t * 2 + i); if (i % 4 === 0) acorn(0, 0, 0.5, 0, { key: 15541 + i }); else blob([[-30, 0], [-10, -12], [30, 0], [-10, 12]], { wash: ['#c8843a', '#d8a050', '#a8642a'][i % 3], washA: 1, w: 1.2, col: '#5a3010' }); pop(); } }
  function myAcorn(t) {                                                 // жёлудь Тома: катится рядом, на паузе его втягивает рыло
    if (t > EV.dh_gag + 0.4) return; const k = clamp((t - S0.dehesa) / (EV.dh_gag - S0.dehesa)), x = lerp(360, 640, k), suck = t > EV.dh_gag - 0.1 ? sm(clamp((t - EV.dh_gag + 0.1) / 0.5)) : 0;
    acorn(lerp(x, 760, suck), lerp(1600, 1300, suck), 1.25 * (1 - suck * 0.6), k * 6 + suck * 4, { key: 15550 });
    if (suck > 0) for (let i = 0; i < 6; i++) { const q = (t * 3 + i / 6) % 1; pencil([[lerp(600, 760, q), 1500 - q * 200 + (i - 3) * 20], [lerp(640, 790, q), 1480 - q * 200 + (i - 3) * 20]], { w: 3, col: '#ffffff', a: 0.6, pass2: false }); }
  }
  function front(t) { push(-40, 1960, 1.8); for (let i = 0; i < 7; i++) { const a = -2.7 + i * 0.25, sw = Math.sin(t * 1.3 + i) * 0.05; pencil([[0, 0], [Math.cos(a + sw) * 200, Math.sin(a + sw) * 280]], { w: 14, col: '#5a7a2a' }); } pop(); push(1160, 1980, 1.8, -0.3); blob([[-90, 0], [-60, -24], [0, -34], [70, -30], [96, 0], [0, 20]], { wash: '#a8642a', washA: 1, w: 2, col: '#5a3010' }); pop();
    motes(30, [0, 300, 1100, 1800], '#fff0b0', t, 15560, { sp: 10, sz: 4, a: 0.6, wob: 3 }); haze('#f4c870', 0.05); }
  WORLD.dehesa = (t, u, cat) => {
    lay(14, () => { canopy(t); haze('#f0d090', 0.1); });
    lay(5, () => { giantPig(t); haze('#f0d090', 0.12); });
    lay(1.6, () => { ground(t); falling(t); });
    lay(1.05, () => { myAcorn(t); });
    lay(1, () => { cat(); });
    lay(0.6, () => { front(t); });
  };
  DIR.dehesa = {
    outfit: 'porqA', light: { side: -1, rim: '#ffe0a0' }, grade: ['#ffc870', 0.08],
    act: () => [[S0.dehesa, 'grin'], [EV.dh_graze, 'awe'], [EV.dh_10, 'shock'], [EV.dh_day, 'laugh'], [EV.dh_gag, 'shock'], [EV.dh_gag + 0.4, 'annoyed']],
    pose: (t, u, b) => { const k = clamp((t - S0.dehesa) / (EV.dh_gag - S0.dehesa)), gag = t > EV.dh_gag; return Object.assign(b, { x: lerp(250, 520, k), y: 1660, s: 0.55, flip: 1, walk: gag ? undefined : t * 9,
      look: gag ? [0.8, -0.6] : t > EV.dh_10 ? [-0.6, 0.3] : t > EV.dh_graze ? [0.7, -0.7] : [0.6, 0.2], hand: gag ? [160, -380] : [140, -240], handF: gag ? [-60, -380] : [120, -230], sweat: gag, tailUp: !gag }); },
    cam: () => [[S0.dehesa, 540, 1000, 0.04], [S0.dehesa + 0.8, 500, 1360, 0.24, 'x'], [EV.dh_graze, 600, 1100, 0.12], [EV.dh_10, 400, 1400, 0.24], [EV.dh_day, 560, 1200, 0.16], [EV.dh_gag, 620, 1360, 0.24], [S1.dehesa, 600, 1380, 0.28]]
  };
  // ---------------------------------------------------------------- переход: падает жёлудь — удар, круг-волна открывает новую сцену
  TRANS_IN.dehesa = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const e = sm(k); if (e < 0.4) { const q = e / 0.4; scr(() => { push(540, lerp(-200, 960, q * q), 3, q * 3); acorn(0, 0, 1, 0, { key: 15570 }); pop(); }); return; }
    const R = lerp(0, 1400, sm((e - 0.4) / 0.6)); inCircle(540, 960, R, () => drawBuf(B, 1, 540, 960)); scr(() => { ctx.save(); ctx.strokeStyle = 'rgba(255,240,190,0.8)'; ctx.lineWidth = 30 * (1 - e); ctx.beginPath(); ctx.arc(540, 960, R + 10, 0, 6.283); ctx.stroke(); ctx.restore(); });
  } };
})();
