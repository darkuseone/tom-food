/* 009 — `hook`: «Экономисты в Грузии считают инфляцию… в хачапури! Откусим историю!» Аудитория экономфака в Тбилиси: окно на старый город (резные балконы,
   крепость на холме), книжные шкафы, большая зелёная доска с графиком цен. Том-экономист в твидовом пиджаке с указкой. На «инфляцию» мелом взлетает линия графика;
   на «хачапури!» вместо точек графика выскакивают лодочки-хачапури, студенты ахают; на «Откусим» Том отрывает бортик хачапури со стола и кусает — сыр тянется. */
(() => {
  EV.hk_infl = wtw('h1', 'инфляцию…');
  EV.hk_kh = wtw('h1', 'хачапури!');
  EV.hk_tear = EV.h2 + 0.1;
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_kh + 0.1, 0.2, 10], [EV.hk_bite, 0.2, 8]);
  KEYW.push('хачапури!');

  const PTS = [[200, 1080], [290, 1050], [380, 1010], [470, 960], [560, 880], [650, 800]];
  function room(t) { vgrad(-600, 1500, ['#e8d8b8', '#dcc69c', '#c8b080']); for (let i = 0; i < 9; i++) pencil([[-300 + i * 200, -400], [-300 + i * 200, 1500]], { w: 40, col: '#d8c290', a: 0.35, pass2: false });
    push(830, 300, 1); rect(-180, -230, 360, 430, { wash: '#bcdcec', washA: 1, w: 12, col: '#6a4a2a', key: 10500 }); ctx.save(); ctx.beginPath(); ctx.rect(-180, -230, 360, 430); ctx.clip();
      blob([[-200, 40], [-120, -40], [-40, -10], [40, -90], [120, -60], [200, -20], [200, 220], [-200, 220]], { wash: '#9ab07a', washA: 1, line: false }); rect(10, -150, 70, 60, { wash: '#b89a70', washA: 1, w: 1.6, col: '#5a4030' }); for (let q = 0; q < 4; q++) rect(14 + q * 16, -170, 10, 22, { wash: '#b89a70', washA: 1, line: false });
      for (let i = 0; i < 6; i++) { const x = -170 + i * 64, h = 80 + (i % 3) * 30; rect(x, 200 - h, 58, h, { wash: ['#e8c8a0', '#d8b090', '#f0dcc0'][i % 3], washA: 1, w: 1.6, col: '#5a4030' }); rect(x - 4, 200 - h + 30, 66, 22, { wash: '#7a5a3a', washA: 1, w: 1.2, col: '#3a2010' }); for (let q = 0; q < 5; q++) pencil([[x + q * 13, 200 - h + 30], [x + q * 13, 200 - h + 52]], { w: 1.4, col: '#e8d0a8', pass2: false }); poly([[x - 6, 200 - h], [x + 29, 200 - h - 30], [x + 64, 200 - h]], { wash: '#a8422a', washA: 1, w: 1.4, col: '#5a2010' }); }
      ctx.restore(); pencil([[0, -230], [0, 200]], { w: 8, col: '#6a4a2a' }); pencil([[-180, -20], [180, -20]], { w: 8, col: '#6a4a2a' }); pop();
    for (let sh = 0; sh < 2; sh++) { push(120 + sh * 170, 340, 1); rect(-80, -260, 160, 560, { wash: '#7a4a2a', washA: 1, w: 3, col: '#2a1408', key: 10510 + sh }); for (let r = 0; r < 5; r++) { pencil([[-80, -250 + r * 110], [80, -250 + r * 110]], { w: 5, col: '#3a2010', pass2: false }); for (let b = 0; b < 7; b++) { const rr = rng(10520 + sh * 40 + r * 7 + b); rect(-72 + b * 21, -244 + r * 110 + (1 - rr()) * 18, 17, 86 - (1 - rr()) * 18, { wash: ['#8a2a2a', '#2a4a6a', '#3a6a3a', '#a8842a', '#5a3a6a'][Math.floor(rr() * 5)], washA: 1, w: 1, col: '#1a0a04' }); } } pop(); } }
  function board(t) { push(0, 0, 1); rect(140, 700, 800, 470, { wash: '#2a4a3a', washA: 1, w: 14, col: '#8a6a3a', key: 10530 }); for (let i = 0; i < 30; i++) { const r = rng(10531 + i); ell(160 + r() * 760, 720 + r() * 430, 30 + r() * 40, 8, { wash: '#ffffff', washA: 0.04, line: false }); }
    pencil([[180, 740], [180, 1130], [900, 1130]], { w: 4, col: '#f2f2ea', pass2: false }); txt('ИНФЛЯЦИЯ, %', 300, 770, 34, { font: 'Hand', col: '#f2f2ea' }); txt('2011', 210, 1160, 26, { font: 'Hand', col: '#f2f2ea' }); txt('2026', 660, 1160, 26, { font: 'Hand', col: '#f2f2ea' });
    const k = clamp((t - EV.hk_infl + 0.1) / 1.0), n = 1 + k * (PTS.length - 1); const pts = []; for (let i = 0; i < PTS.length; i++) { if (i > n) break; pts.push(PTS[i]); } if (n % 1 && Math.floor(n) < PTS.length - 1) { const i = Math.floor(n), f = n % 1; pts.push([lerp(PTS[i][0], PTS[i + 1][0], f), lerp(PTS[i][1], PTS[i + 1][1], f)]); }
    if (pts.length > 1) pencil(pts, { w: 6, col: '#f6f0c0', pass2: false });
    for (let i = 0; i < PTS.length; i++) { const kk = popK(t, EV.hk_kh + i * 0.06, 0.35); if (kk > 0) adjaruli(PTS[i][0], PTS[i][1], 0.16 * kk, t, { steam: false }); else if (i < n) ell(PTS[i][0], PTS[i][1], 7, 7, { wash: '#f6f0c0', washA: 1, line: false }); }
    if (t > EV.hk_kh) { const kk = popK(t, EV.hk_kh + 0.4, 0.35); push(760, 820, kk, -0.1); txt('?!', 0, 0, 90, { font: 'Osw', col: '#f2c838' }); pop(); } pop(); }
  function students(t) { const gasp = t > EV.hk_kh && t < EV.hk_kh + 1.6; for (let i = 0; i < 3; i++) human(70 + i * 150, 1500, 1.05, t, { body: ['#3a5a8a', '#a8422a', '#4a6a3a'][i], hair: ['#2a1a0a', '#5a3a1a', '#1a1a1a'][i], face: gasp ? 'shock' : 'calm', armL: gasp && i === 1 ? 'up' : 'hold', armR: gasp ? 'up' : 'hold', seed: 1050 + i, long: i === 1 ? 1 : 0, look: 0.6 });
    rect(-300, 1420, 760, 40, { wash: '#8a5a32', washA: 1, w: 3, col: '#2a1408', key: 10540 }); for (let i = 0; i < 3; i++) { rect(30 + i * 150, 1396, 70, 24, { wash: '#f2f0e6', washA: 1, w: 1.4, col: '#6a6a6a' }); } }
  function desk(t) { rect(330, 1560, 900, 50, { wash: '#7a4a2a', washA: 1, w: 3, col: '#2a1408', key: 10545 }); ell(560, 1560, 170, 26, { wash: '#f6f4ee', washA: 1, w: 2, col: '#6a6a7a' });
    adjaruli(560, 1540, 0.62, t, { torn: t > EV.hk_tear, melt: clamp((t - 1) / 4) }); }
  function cheeseString(t, P) { if (t < EV.hk_tear || t > EV.hk_bite + 0.2) return; const hx = P.x - 60 * P.s, hy = P.y - 340 * P.s, k = clamp((t - EV.hk_tear) / 0.3);
    pencil(spline([[560 + 0.62 * 170, 1530], [lerp(560 + 105, hx, 0.5), lerp(1530, hy, 0.5) + 60], [hx, hy]], false, 8), { w: 7, col: KHP.cheese, a: 1 - clamp((t - EV.hk_bite) / 0.2), pass2: false }); }
  WORLD.hook = (t, u, cat) => { lay(12, () => room(t)); lay(2.4, () => board(t)); lay(1.4, () => students(t)); lay(1, () => { rect(-300, 1600, 1700, 500, { wash: '#a87a4a', washA: 1, w: 2, col: '#3a2410', key: 10550 }); cat(); desk(t); }); };
  DIR.hook = {
    outfit: 'econA', light: { side: -1, rim: '#ffe0b0' }, grade: ['#e8b070', 0.05],
    act: () => [[0, 'talk'], [EV.hk_infl, 'suspicious'], [EV.hk_kh, 'shock'], [EV.h2, 'smug'], [EV.hk_bite - 0.1, 'grin'], [EV.hk_bite + 0.2, 'laugh']],
    pose: (t, u, b) => { const grab = t > EV.h2 - 0.15, bite = t > EV.hk_bite - 0.25; return Object.assign(b, { x: 700, y: 1800, s: 1.15, flip: true, look: t < EV.hk_kh ? [-0.8, -0.5] : t < EV.h2 ? [-0.3, -0.2] : [0, 0.3],
      hand: bite ? [60, -360] : grab ? [150, -300] : [170, -380], handF: [-90, -230], prop: grab ? 'crustP' : 'stick', propAng: grab ? 0 : -0.9, tailUp: t > EV.hk_bite }); },
    afterCat: (t, u, P) => cheeseString(t, P),
    cam: () => [[0, 580, 1100, 0.18], [EV.hk_infl, 470, 960, 0.26, 'x'], [EV.hk_kh, 480, 980, 0.32], [EV.h2, 620, 1240, 0.24], [EV.hk_bite, 660, 1240, 0.32], [S1.hook, 660, 1230, 0.34]]
  };
})();
