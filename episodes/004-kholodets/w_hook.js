/* 004 — `hook`: «Холодец — в сотне худших блюд мира?!» Телестудия-антирейтинг: гигантский экран «100 ХУДШИХ БЛЮД» со строками-плашками, прожекторы, неон,
   холодец на тарелке под лучом дрожит. 0,0 с — камера влетает в экран, строки листаются, на «худших» выезжает плашка «№67 ХОЛОДЕЦ» с красным пальцем вниз.
   Том-адвокат (костюм lawyer) возмущён, стучит молотком. «Откусим историю!» — ложкой зачерпывает дрожащее желе и кусает. */
(() => {
  EV.hk_rank = wtw('h1', 'худших');
  EV.hk_dip = LS('h2') + 0.1;
  EV.hk_bite = wtw('h2', 'историю!') + 0.05;
  SHAKES.push([EV.hk_rank + 0.1, 0.2, 10], [EV.hk_bite, 0.2, 8]);
  KEYW.push('худших');

  function studio(t) {                                                 // тёмная студия, прожекторы, экран рейтинга
    vgrad(-600, 1600, ['#0a0a18', '#1a1430', '#2a1a3a']); for (const [x, c] of [[100, 'rgba(255,90,140,1)'], [980, 'rgba(90,180,255,1)']]) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = c.replace(',1)', ',0.12)'); ctx.beginPath(); ctx.moveTo(x - 30, -100); ctx.lineTo(x + 30, -100); ctx.lineTo(540 + (x - 540) * 0.2 + 300, 1400); ctx.lineTo(540 + (x - 540) * 0.2 - 300, 1400); ctx.fill(); ctx.restore(); }
    const x0 = 140, y0 = 160, w = 800, h = 900; rect(x0 - 20, y0 - 20, w + 40, h + 40, { wash: '#2a2a34', washA: 1, w: 4, col: '#000', key: 4100 }); rect(x0, y0, w, h, { wash: '#101420', washA: 1, w: 2, col: '#000' });
    txt('100 ХУДШИХ', 540, y0 + 60, 70, { font: 'Osw', col: '#ff4a5a' }); txt('БЛЮД МИРА', 540, y0 + 130, 46, { font: 'Osw', col: '#f6e6d0' });
    const scroll = t < EV.hk_rank ? t * 600 : EV.hk_rank * 600; ctx.save(); const cl = new Path2D(); cl.rect(x0 + 20, y0 + 180, w - 40, h - 210); ctx.clip(cl);
    for (let i = 0; i < 40; i++) { const y = y0 + 200 + i * 80 - (scroll % 3200); if (y < y0 + 150 || y > y0 + h) continue; rect(x0 + 40, y, w - 80, 64, { wash: '#1e2436', washA: 1, w: 1.6, col: '#3a4460' }); txt('№' + (100 - i), x0 + 110, y + 34, 32, { font: 'Osw', col: '#8a94b0' }); for (let q = 0; q < 3; q++) rect(x0 + 180 + q * 150, y + 22, 120, 18, { wash: '#3a4460', washA: 1, line: false }); }
    ctx.restore(); if (t > EV.hk_rank) { const k = popK(t, EV.hk_rank, 0.35); push(540, y0 + 560, k, -0.03); rect(-380, -70, 760, 140, { wash: '#d9482b', washA: 1, w: 4, col: '#2a0a04' }); txt('№67  ХОЛОДЕЦ', -20, 4, 74, { font: 'Osw', col: '#fff6e0' });
      push(320, 0, 1, Math.PI); blob([[-30, -30], [10, -34], [14, -60], [30, -60], [32, -30], [40, 20], [-30, 24]], { wash: '#ffd27a', washA: 1, w: 3, col: '#5a3a08' }); pop(); pop(); }
    for (let i = 0; i < 20; i++) { const on = Math.sin(t * 9 + i) > 0; ell(x0 + i * 42, y0 - 20, 7, 7, { wash: on ? '#ff6a8a' : '#4a2a3a', washA: 1, line: false }); ell(x0 + i * 42, y0 + h + 20, 7, 7, { wash: on ? '#6ac8ff' : '#2a3a4a', washA: 1, line: false }); }
  }
  function audience(t) { for (let i = 0; i < 7; i++) { const x = 40 + i * 170, boo = t > EV.hk_rank; human(x, 1300, 0.85, t, { body: ['#3a4a6a', '#6a3a4a', '#4a6a4a', '#5a4a6a'][i % 4], hair: ['#2a1a0a', '#c8a050', '#1a1a1a'][i % 3], face: boo ? (i % 2 ? 'shock' : 'angry') : 'calm', armL: 'hold', armR: boo && i % 2 ? 'point' : 'hold', seed: 260 + i, flip: i % 2 ? -1 : 1 }); } }
  function desk(t) {                                                   // стол ведущего с холодцом под лучом
    const tb = rect(-300, 1350, 1700, 700, { wash: '#2a2438', washA: 1, w: 3, col: '#000', key: 4110 }); rect(-300, 1330, 1700, 30, { wash: '#4a4060', washA: 1, w: 2 }); glow(420, 1300, 260, 'rgba(255,240,200,1)', 0.45);
    jellyPlate(400, 1400, 0.95, t, { wob: t > EV.hk_rank ? 1 : 0.3 }); condJar(160, 1380, 0.9, 'hren'); condJar(640, 1380, 0.8, 'mustard');
  }
  WORLD.hook = (t, u, cat) => {
    lay(16, () => { studio(t); }); lay(4, () => { audience(t); haze('#1a1430', 0.1); }); lay(1.3, () => { desk(t); }); lay(1, () => { cat(); });
  };
  DIR.hook = {
    outfit: 'lawyer', light: { side: -1, rim: '#ffb0d0' }, grade: ['#6a4ab8', 0.1],
    act: () => [[0, 'awe'], [EV.hk_rank, 'shock'], [EV.hk_rank + 0.5, 'annoyed'], [EV.hk_dip, 'smug'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { const dip = t > EV.hk_dip && t < EV.hk_bite - 0.3, bite = t > EV.hk_bite - 0.3;
      return Object.assign(b, { x: 820, y: 1720, s: 1.2, flip: true, look: t < EV.hk_dip ? [0.2, -0.7] : [0.7, 0.4], hand: bite ? [60, -360] : dip ? [300, -220] : [80, -360 + (t > EV.hk_rank ? Math.abs(Math.sin(t * 12)) * 40 : 0)], handF: [-90, -220],
        prop: t > EV.hk_dip ? 'spoonJellyP' : 'gavelP2', tailUp: t > EV.hk_bite }); },
    cam: () => [[0, 540, 700, 0.5], [0.6, 540, 900, 0.04, 'x'], [EV.hk_rank, 540, 860, 0.08], [EV.hk_dip, 640, 1200, 0.2], [EV.hk_bite, 720, 1100, 0.32], [S1.hook, 740, 1080, 0.38]]
  };
})();
