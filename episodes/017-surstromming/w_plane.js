/* 017 — `plane`: «В 2006-м несколько авиакомпаний запретили банки на борту: вдруг лопнут!» Салон авиалайнера 2000-х: ряды кресел, иллюминаторы
   с облаками, багажные полки, табло «пристегните ремни», стюардесса с тележкой, пассажиры с газетами и наушниками; в проходе — стойка досмотра с экраном
   рентгена. Том-пилот в фуражке с фартуком. По словам: «2006-м» — табло 2006; «авиакомпаний» — табло вылетов: четыре рейса, у всех появляется красный
   крестик с банкой; «запретили» — рентген показывает банку, мигает красная лампа, знак «перечёркнутая банка»; «лопнут!» — банка на полке вздувается, стрелка
   манометра в красном; немая пауза — крышка хлопает «ПУФ!», из панелей падают кислородные маски, пассажиры зажимают носы. Переход В сцену: иллюминатор —
   кадр уходит в круглое окно и вылетает через облака. */
(() => {
  EV.pl_year = wtw('s6', '2006-м');
  EV.pl_air = wtw('s6', 'авиакомпаний');
  EV.pl_ban = wtw('s6', 'запретили');
  EV.pl_pop = wtw('s6', 'лопнут!');
  EV.pl_gag = LE('s6') + 0.05;
  SHAKES.push([EV.pl_gag, 0.2, 9]);
  KEYW.push('запретили', 'лопнут!');

  function cabin(t) {                                                   // стенки салона, иллюминаторы с облаками, полки, табло, маски
    vgrad(-600, 1500, ['#c8ccd4', '#e0e4ea', '#d0d4dc']); pencil(spline([[-400, -200], [540, -420], [1500, -200]], false, 8), { w: 60, col: '#b8bcc4' });
    for (let i = 0; i < 6; i++) { const x = -260 + i * 300; push(x, 360, 1); const o = ell(0, 0, 70, 96, { wash: '#7ab0e0', washA: 1, w: 10, col: '#a8acb4', key: 17700 + i }); ctx.save(); ctx.clip(o.path); vgrad(-96, 96, ['#4a8ad8', '#c8e0f8']); for (let k = 0; k < 3; k++) { const cx = ((k * 70 + t * 120 + i * 40) % 260) - 130; ell(cx, 20 + k * 20, 50, 18, { wash: '#ffffff', washA: 0.95, line: false }); } ctx.restore(); pop(); }
    for (let i = 0; i < 4; i++) { const x = -300 + i * 480; push(x, 0, 1); const b = rect(-220, -60, 440, 120, { wash: '#e8ecf0', washA: 1, w: 2.4, col: '#8a8e94' }); shadeG(b.path, 0, 60, 0, -60, '#a8acb4', 0.35); pencil([[-220, 30], [220, 30]], { w: 2, col: '#8a8e94', pass2: false }); ell(160, 0, 14, 8, { wash: '#6a6e74', washA: 1, line: false }); pop(); }
    for (let i = 0; i < 6; i++) rays(-260 + i * 300, 360, 1.9, 0.25, 900, 'rgba(240,248,255,1)', 0.1, 3, t); push(560, -150, 1); rect(-90, -30, 180, 60, { wash: '#2a2a2e', washA: 1, w: 2 }); txt('◉ ⛓', 0, 12, 28, { col: Math.sin(t * 4) > 0 ? '#ffd040' : '#8a7a30' }); pop();
    if (t > EV.pl_gag) { const q = clamp((t - EV.pl_gag) / 0.4); for (let i = 0; i < 6; i++) { const x = -200 + i * 260, sw = Math.sin(t * 5 + i) * 10; pencil([[x, 70], [x + sw, 70 + q * 260]], { w: 2, col: '#3a3a3a', pass2: false }); push(x + sw, 70 + q * 260, 1); shape([[-26, 0], [26, 0], [20, 40], [-20, 40]], { wash: '#f4c020', washA: 1, w: 1.6, col: '#8a6a10' }); pop(); } }
  }
  function seats(t) {                                                   // ряды кресел, пассажиры, стюардесса с тележкой, рентген-стойка, табло вылетов
    for (let i = 0; i < 5; i++) { const x = -260 + i * 340; push(x, 1180, 1); const s = blob([[-120, 0], [-130, -260], [-100, -300], [100, -300], [130, -260], [120, 0]], { wash: '#2a4a8a', washA: 1, w: 2, col: '#0a1a3a' }); rect(-110, -300, 220, 50, { wash: '#f4f4f0', washA: 1, w: 1.2 }); pop(); }
    const stink2 = t > EV.pl_gag; for (const [i, x] of [[0, 120], [1, 980]]) { human(x, 1300, 1.0, t, { body: i ? '#c8443a' : '#5a5a6a', legs: '#2a2a34', hair: ['#3a2a1a', '#e8c890'][i], face: stink2 ? 'shock' : 'smile', armL: 'hold', armR: stink2 ? 'up' : 'hold', look: i ? -0.4 : 0.4, seed: 17710 + i, flip: i ? -1 : 1, long: i }); if (stink2) nosePeg(x + (i ? -6 : 6), 1300 - 230, 1); }
    push(1180, 1300, 1); rect(-90, -200, 180, 200, { wash: '#b8bcc4', washA: 1, w: 2, col: '#3a3e44' }); for (let i = 0; i < 3; i++) rect(-80, -190 + i * 64, 160, 56, { wash: '#d8dce2', washA: 1, w: 1 }); pop();
    if (t > EV.pl_air - 0.1) { push(300, 760, popK(t, EV.pl_air - 0.1, 0.4)); rect(-260, -130, 520, 260, { wash: '#1a1a24', washA: 1, w: 4, col: '#5a5a6a' }); txt('DEPARTURES', 0, -96, 26, { font: 'Osw', col: '#f4c020' });
      for (let i = 0; i < 4; i++) { const y = -50 + i * 46; txt(['FL 201  LONDON', 'FL 517  PARIS', 'FL 330  AMSTERDAM', 'FL 812  HELSINKI'][i], -60, y + 10, 22, { font: 'Osw', col: '#e8e8e8' }); if (t > EV.pl_air + 0.2 + i * 0.12) { push(190, y, 1); tinCan(0, 14, 0.18, 0, { key: 17720 + i }); pencil([[-22, -16], [22, 22]], { w: 5, col: '#e83a3a', pass2: false }); pencil([[22, -16], [-22, 22]], { w: 5, col: '#e83a3a', pass2: false }); pop(); } } pop(); }
  }
  function aisle(t) {                                                   // пол-проход, рентген-экран, знак-запрет, банка на полке-переднем плане
    const tb = rect(-400, 1440, 1900, 800, { wash: '#5a5e6a', washA: 1, w: 3, col: '#1a1a24', key: 17730 }); for (let i = 0; i < 8; i++) pencil([[-400, 1480 + i * 60], [1500, 1484 + i * 60]], { w: 2, col: '#3a3e4a', a: 0.5, pass2: false }); pencil([[540, 1440], [540, 2200]], { w: 8, col: '#f4c020', a: 0.6, pass2: false });
    if (t > EV.pl_ban - 0.1) { push(860, 1300, popK(t, EV.pl_ban - 0.1, 0.4)); rect(-170, -150, 340, 230, { wash: '#2a2a2e', washA: 1, w: 3 }); const sc = rect(-150, -130, 300, 160, { wash: '#0a3a4a', washA: 1, w: 2 }); ctx.save(); ctx.globalAlpha = 0.9; push(0, -50, 1); rect(-60, -40, 120, 90, { wash: '#4ac8e8', washA: 0.5, w: 3, col: '#9af0ff' }); for (let i = 0; i < 3; i++) ell(-30 + i * 30, 0, 20, 8, { wash: '#e8a030', washA: 0.7, line: false }); pop(); ctx.restore(); ell(130, -170, 16, 16, { wash: Math.sin(t * 12) > 0 ? '#ff2a2a' : '#5a1a1a', washA: 1, w: 1.4 }); pop();
      push(300, 1150, popK(t, EV.pl_ban + 0.15, 0.4)); ell(0, 0, 90, 90, { wash: '#ffffff', washA: 1, w: 10, col: '#e83a3a' }); tinCan(0, 40, 0.5, 0, { bulge: 0.5, key: 17731 }); pencil([[-64, -64], [64, 64]], { w: 12, col: '#e83a3a', pass2: false }); pop(); }
    if (t > EV.pl_pop - 0.2) { const b = clamp((t - EV.pl_pop + 0.2) / 0.6); push(820, 1500, 1); if (t < EV.pl_gag) { tinCan(0, 0, 0.9, 0, { bulge: 0.4 + b * 1.4, key: 17732 }); } else { tinCan(0, 0, 0.9, 0, { open: 1, key: 17732 }); stink(0, -130, 1.4, t, { n: 5 }); } pop();
      push(1000, 1050, 1); ell(0, 0, 70, 70, { wash: '#f8f8f4', washA: 1, w: 4, col: '#3a3a3a' }); for (let i = 0; i < 2; i++) { push(0, 0, 1, -Math.PI * 0.75 + i * 0.6); const r2 = shape([[0, -60], [10, -50], [-10, -50]], { wash: i ? '#e83a3a' : '#3aa83a', washA: 1, line: false }); pop(); } pencil([[0, 0], [Math.cos(-2.4 + b * 2) * 52, Math.sin(-2.4 + b * 2) * 52]], { w: 5, col: '#1a1a1a', pass2: false }); pop(); }
    if (t > EV.pl_gag && t < EV.pl_gag + 0.8) { const k = (t - EV.pl_gag) / 0.8; push(820, 1180, 1 + k * 0.5); txt('ПУФ!', 0, 0, 90, { font: 'Osw', col: '#8ac83a', a: 1 - k }); pop(); }
    if (t > EV.pl_year - 0.1) { push(760, 560, popK(t, EV.pl_year - 0.1, 0.4)); rect(-120, -50, 240, 100, { wash: '#1a1a20', washA: 1, w: 4, col: '#c8a050' }); txt('2006', 0, 22, 62, { font: 'Osw', col: '#ffe070' }); pop(); }
  }
  function front(t) { push(-40, 1970, 1.6); blob([[-120, 0], [-130, -200], [130, -200], [120, 0]], { wash: '#2a4a8a', washA: 1, w: 2, col: '#0a1a3a' }); pop(); push(1180, 1990, 1.6); rect(-90, -120, 180, 120, { wash: '#b8bcc4', washA: 1, w: 2 }); for (let i = 0; i < 3; i++) rect(-70 + i * 50, -100, 40, 60, { wash: '#f4f0e6', washA: 1, w: 1 }); pop();
    motes(20, [0, 300, 1100, 1700], '#ffffff', t, 17740, { sp: 6, sz: 3, a: 0.35, wob: 2 }); if (t > EV.pl_gag) haze('#a8d870', 0.08); }
  WORLD.plane = (t, u, cat) => {
    lay(14, () => { cabin(t); haze('#e8eef4', 0.04); });
    lay(2.6, () => { seats(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { aisle(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.plane = {
    outfit: 'aviatorA', light: { side: 1, rim: '#f0f8ff' }, grade: ['#c8d8f0', 0.04],
    act: () => [[S0.plane, 'proud'], [EV.pl_air, 'talk'], [EV.pl_ban, 'annoyed'], [EV.pl_pop, 'scared'], [EV.pl_gag, 'shock'], [EV.pl_gag + 0.5, 'annoyed']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1580, s: 1.16, flip: t > EV.pl_ban ? 1 : -1, look: t > EV.pl_gag ? [0, -0.8] : t > EV.pl_pop ? [0, 0.7] : t > EV.pl_ban ? [0.7, 0.2] : [-0.6, -0.4], hand: [200, -290], handF: t > EV.pl_ban && t < EV.pl_pop ? [180, -440] : [-90, -220], point: t > EV.pl_ban && t < EV.pl_pop ? 1 : undefined, sweat: t > EV.pl_pop, squash: b.squash + (t > EV.pl_gag && t < EV.pl_gag + 0.15 ? 0.1 : 0) }),
    cam: () => [[S0.plane, 560, 900, 0.12], [EV.pl_year, 640, 950, 0.22, 'x'], [EV.pl_air, 360, 950, 0.22], [EV.pl_ban, 680, 1200, 0.22], [EV.pl_pop, 560, 1250, 0.22], [EV.pl_gag, 560, 1000, 0.22], [S1.plane, 560, 1050, 0.22]]
  };
  // ---------------------------------------------------------------- переход: иллюминатор — кадр вылетает сквозь облака
  TRANS_IN.plane = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k); drawBuf(A, 1, 540, 960); const R = lerp(60, 1400, e * e); scr(() => { ctx.fillStyle = 'rgba(200,205,212,' + Math.sin(e * Math.PI) + ')'; ctx.fillRect(0, 0, W, H); });
    ctx.save(); ctx.beginPath(); ctx.ellipse(540, 960, R * 0.75, R, 0, 0, 6.283); ctx.clip(); ctx.drawImage(B, 0, 0); ctx.restore();
    scr(() => { ctx.save(); ctx.strokeStyle = 'rgba(168,172,180,' + (1 - e) + ')'; ctx.lineWidth = 40; ctx.beginPath(); ctx.ellipse(540, 960, R * 0.75 + 20, R + 20, 0, 0, 6.283); ctx.stroke(); const r = rng(17750); ctx.fillStyle = 'rgba(255,255,255,' + 0.8 * Math.sin(e * Math.PI) + ')'; for (let i = 0; i < 12; i++) { ctx.beginPath(); ctx.ellipse(r() * W, r() * H, 140, 50, 0, 0, 6.283); ctx.fill(); } ctx.restore(); });
  } };
})();
