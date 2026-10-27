/* 009 — `today` + `button`: «С 2011-го он подорожал больше чем вдвое. А ты за лодку или за круг?» Ресторан у окна: вечерний Тбилиси — огни холмов, изогнутый
   стеклянный мост, телебашня; стол с хиро-шотом: огромная аджарская лодка (блестящий желток, тающее масло, пар) и рядом имеретинский круг. На «2011-го» над столом
   ценник 3,76 ЛАРИ, на «вдвое.» — перечёркивается, рядом 8,05 и «×2»; на «лодку» лодка подсвечивается и подпрыгивает, на «круг?» — круг. Том в чохе с газырями.
   `button`: Том отрывает бортик, подмигивает и стоит, как в хуке, — ролик перетекает в начало. Переход В сцену: желток закручивается воронкой. */
(() => {
  EV.td_y = wtw('t1', '2011-го');
  EV.td_x2 = wtw('t1', 'вдвое.');
  EV.td_boat = wtw('t1', 'лодку');
  EV.td_round = wtw('t1', 'круг?');
  EV.bt_wink = LF('x1', 0.6);
  SHAKES.push([EV.td_x2 + 0.1, 0.2, 8]);
  KEYW.push('вдвое.');

  function city(t) { vgrad(-600, 1500, ['#1a1a3a', '#3a2a4a', '#6a3a4a']); for (let i = 0; i < 40; i++) { const r = rng(11300 + i); ell(r() * 1200 - 60, r() * 500 - 300, 2, 2, { wash: '#ffffff', washA: 0.6 + Math.sin(t * 3 + i) * 0.3, line: false }); }
    shape([[-300, 760], [0, 560], [260, 640], [520, 520], [800, 620], [1100, 540], [1400, 700], [1400, 1100], [-300, 1100]], { wash: '#2a2034', washA: 1, w: 2, col: '#0a0a14', key: 11310 }); windows(-200, 600, 1500, 380, 30, 8, 11311, 0.55, '#ffd890', '#ff9a50', 0.7);
    push(900, 560, 1); pencil([[0, 0], [0, -300]], { w: 8, col: '#8a8a9a' }); for (let i = 0; i < 4; i++) pencil([[-30 + i * 6, -60 * i], [30 - i * 6, -60 * i]], { w: 3, col: '#8a8a9a', pass2: false }); ell(0, -310, 8, 8, { wash: '#ff4a4a', washA: 0.6 + Math.sin(t * 4) * 0.4, line: false }); pop();
    push(360, 900, 1); pencil(spline([[-260, 40], [-100, -40], [100, -50], [260, 30]], false, 10), { w: 10, col: '#a8e0f8', a: 0.8, pass2: false }); for (let i = 0; i < 12; i++) ell(-240 + i * 44, 20 - Math.sin(i / 11 * Math.PI) * 70, 4, 4, { wash: ['#5ae0ff', '#ffffff'][i % 2], washA: 0.6 + Math.sin(t * 6 + i) * 0.4, line: false }); pop();
    rect(-300, 1000, 1700, 160, { wash: '#1a2a3a', washA: 1, line: false }); for (let i = 0; i < 20; i++) { const r = rng(11330 + i); pencil([[r() * 1200, 1020 + r() * 120], [r() * 1200 + 40, 1020 + r() * 120]], { w: 3, col: '#ffd890', a: 0.4, pass2: false }); }
    for (const x of [-300, 1240]) rect(x, -400, 140, 1900, { wash: '#4a2a1a', washA: 1, w: 3, col: '#1a0a04' }); rect(-300, 1150, 1700, 30, { wash: '#4a2a1a', washA: 1, w: 3, col: '#1a0a04' }); }
  function tags(t) { if (t < EV.td_y) return; const k = popK(t, EV.td_y, 0.35), x2 = clamp((t - EV.td_x2) / 0.3); push(300, 860, k, -0.06); rect(-130, -50, 260, 100, { wash: '#f6ecd4', washA: 1, w: 4, col: '#2a1a0a' }); txt('2011: 3,76 Л.', 0, 14, 38, { font: 'Osw', col: '#2a1a0a' }); if (x2 > 0) pencil([[-120, 0], [-120 + 240 * x2, 0]], { w: 8, col: '#d9282b', pass2: false }); pop();
    if (t > EV.td_x2) { const k2 = popK(t, EV.td_x2 + 0.15, 0.4); push(640, 820, k2, 0.05); rect(-150, -60, 300, 120, { wash: '#d9482b', washA: 1, w: 4, col: '#2a1a0a' }); txt('2026: 8,05 Л.', 0, 16, 42, { font: 'Osw', col: '#fff8ec' }); pop(); bubbleTag('×2', 470, 720, t, EV.td_x2 + 0.35, '#f2c838', 64, -0.1); } }
  function table(t) { rect(-300, 1380, 1700, 700, { wash: '#7a3a2a', washA: 1, w: 3, col: '#2a0a04', key: 11340 }); for (let i = 0; i < 9; i++) pencil([[-300 + i * 200, 1380], [-200 + i * 200, 2000]], { w: 3, col: '#5a2a1a', a: 0.5, pass2: false }); rect(-300, 1380, 1700, 26, { wash: '#f6f0e4', washA: 1, w: 2, col: '#8a7a6a' });
    const bj = t > EV.td_boat && t < EV.td_round ? Math.abs(Math.sin((t - EV.td_boat) * 9)) * 30 * (1 - clamp((t - EV.td_boat) / 0.8)) : 0, rj = t > EV.td_round ? Math.abs(Math.sin((t - EV.td_round) * 9)) * 30 * (1 - clamp((t - EV.td_round) / 0.8)) : 0;
    if (t > EV.td_boat && t < EV.td_round + 0.1) glow(310, 1360, 280, 'rgba(255,220,120,1)', 0.5); if (t > EV.td_round) glow(560, 1240, 180, 'rgba(255,220,120,1)', 0.5);
    ell(310, 1420, 280, 50, { wash: '#f6f4ee', washA: 1, w: 2, col: '#6a6a7a' }); adjaruli(310, 1390 - bj, 1.02, t, { melt: clamp((t - S0.today) / 3), torn: t > EV.bt_wink - 0.4 });
    ell(560, 1250, 120, 24, { wash: '#f6f4ee', washA: 1, w: 2, col: '#6a6a7a' }); imeruli(560, 1235 - rj, 0.58, t, { cut: true });
    push(130, 1250, 1); rect(-20, -110, 40, 110, { wash: '#6a1a2a', washA: 0.85, w: 2, col: '#2a0a10' }); rect(-8, -150, 16, 40, { wash: '#2a3a2a', washA: 1, w: 1.6 }); pop(); }
  WORLD.today = (t, u, cat) => { lay(12, () => city(t)); lay(2.2, () => tags(t)); lay(1, () => { table(t); cat(); }); };
  DIR.today = {
    outfit: 'chokhaA', light: { side: -1, rim: '#ffc8a0' }, grade: ['#c87a6a', 0.06],
    act: () => [[S0.today, 'proud'], [EV.td_y, 'talk'], [EV.td_x2, 'shock'], [EV.td_boat, 'grin'], [EV.td_round, 'suspicious']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1800, s: 1.12, flip: true, look: t < EV.td_boat ? [-0.6, -0.6] : t < EV.td_round ? [-0.8, 0.4] : [0, 0.2], hand: t > EV.td_boat - 0.1 && t < EV.td_round ? [260, -300] : [130, -300], handF: t > EV.td_round - 0.1 ? [-60, -360] : [-90, -230], point: t > EV.td_boat - 0.1 && t < EV.td_round }),
    cam: () => [[S0.today, 560, 1120, 0.14], [EV.td_y, 480, 1000, 0.22], [EV.td_x2, 500, 980, 0.28, 'x'], [EV.td_boat, 440, 1260, 0.3], [EV.td_round, 580, 1220, 0.28], [S1.today, 560, 1180, 0.24]]
  };
  TRANS_IN.today = { a: 0.2, b: 0.5, runA: 1, fx(k, t, A, B) {                 // желток закручивается воронкой и раскручивает новую сцену
    const q = sm(k), ang = q * 7, s = k < 0.5 ? 1 - q * 0.9 : 0.1 + (q - 0.5) * 1.8; drawBuf(k < 0.5 ? A : B, Math.max(0.1, k < 0.5 ? 1 - q * 0.8 : q), 540, 960, 1, null, 0, 0, k < 0.5 ? ang : -(1 - q) * 6);
    scr(() => { const a = Math.sin(k * Math.PI); for (let i = 0; i < 5; i++) { const pts = []; for (let j = 0; j < 40; j++) { const r = 40 + j * 22, th = j * 0.32 + i * 1.26 + q * 9; pts.push([540 + Math.cos(th) * r, 960 + Math.sin(th) * r]); } pencil(pts, { w: 26 - i * 3, col: i % 2 ? '#ffd060' : '#f2a21a', a: 0.85 * a, pass2: false }); } });
  } };
  WORLD.button = (t, u, cat) => WORLD.today(t, u, cat);
  DIR.button = { outfit: 'chokhaA', light: { side: -1, rim: '#ffc8a0' }, grade: ['#c87a6a', 0.06], act: () => [[S0.button, 'grin'], [EV.bt_wink, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1800, s: 1.15, flip: true, look: [0, 0.1], hand: t > EV.bt_wink - 0.4 ? [60, -360] : [150, -300], handF: [-90, -230], prop: t > EV.bt_wink - 0.4 ? 'crustP' : null, tailUp: true }),
    cam: () => [[S0.button, 600, 1150, 0.22], [DUR - 0.5, 580, 1100, 0.18], [DUR, 580, 1100, 0.18]] };
})();
