/* 006 — `berlin`: «В Берлине семидесятых дёнер сунули в булку. Кто первый — спорят до сих пор.» Западный Берлин 1970-х: кирпичный виадук городской электрички,
   поезд жёлто-красный, афишная тумба, «жук» у бордюра, прохожие в клёшах и с бакенбардами. Ларёк IMBISS с вертелом. На «в булку» четвертинка лепёшки раскрывается,
   мясо и салат влетают внутрь — готовый дёнер. На «Кто первый» над ларьком всплывают таблички «1969?» и «1972?», прохожие пожимают плечами.
   Переход В сцену: поезд электрички проносится через кадр и увозит прошлую сцену. */
(() => {
  EV.bn_bun = wtw('s7', 'булку.');
  EV.bn_who = wtw('s7', 'Кто');
  EV.bn_still = wtw('s7', 'спорят');
  SHAKES.push([EV.bn_bun + 0.2, 0.18, 8]);
  KEYW.push('булку.');

  function city(t) { vgrad(-600, 1100, ['#8a9aa8', '#b8c4cc', '#e0e4e0']); for (let i = 0; i < 5; i++) { const x = -260 + i * 330, h = 500 + (i % 2) * 120; rect(x, 900 - h, 300, h, { wash: ['#c8b8a0', '#a8a8a0', '#d8c8a8'][i % 3], washA: 1, w: 2, col: '#4a4a44' }); for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) rect(x + 20 + c * 70, 940 - h + r * 100, 44, 60, { wash: '#5a6a7a', washA: 1, w: 1.4, col: '#2a2a2a' }); }
    const via = rect(-300, 700, 1700, 120, { wash: '#a8583a', washA: 1, w: 3, col: '#3a1a0a', key: 7000 }); for (let i = 0; i < 6; i++) blob([[-260 + i * 300, 1000], [-260 + i * 300, 860], [-150 + i * 300, 800], [-40 + i * 300, 860], [-40 + i * 300, 1000]], { wash: '#3a2a24', washA: 1, w: 2, col: '#1a0a04' }); for (let r = 0; r < 3; r++) pencil([[-300, 720 + r * 36], [1400, 720 + r * 36]], { w: 1.6, col: '#5a2a14', a: 0.5, pass2: false });
    const tx = ((t * 500) % 3600) - 1600; for (let c = 0; c < 3; c++) { const x = tx + c * 420; rect(x, 600, 400, 110, { wash: c % 2 ? '#e8b82a' : '#b8282a', washA: 1, w: 2.4, col: '#2a1a0a' }); rect(x, 600, 400, 50, { wash: '#e8b82a', washA: 1, w: 1.4, col: '#2a1a0a' }); for (let w = 0; w < 5; w++) rect(x + 20 + w * 76, 612, 56, 30, { wash: '#4a5a6a', washA: 1, w: 1.2 }); } }
  function street(t) { push(80, 1260, 1); rect(-60, -340, 120, 340, { wash: '#d8d0b8', washA: 1, w: 2.4, col: '#3a3a3a' }); ell(0, -340, 70, 20, { wash: '#3a6a3a', washA: 1, w: 2 }); for (let q = 0; q < 3; q++) rect(-56, -320 + q * 100, 112, 90, { wash: ['#e8287a', '#2a6ab8', '#f2c838'][q], washA: 0.8, w: 1.2, col: '#2a2a2a' }); pop();
    push(960, 1270, 0.9); blob([[-180, 0], [-170, -90], [-80, -160], [80, -160], [170, -90], [180, 0]], { wash: '#e8862a', washA: 1, w: 3, col: '#3a1a04' }); for (const sd of [-1, 1]) ell(sd * 110, 0, 40, 40, { wash: '#2a2a2a', washA: 1, w: 2 }); rect(-90, -140, 180, 60, { wash: '#8ab8d8', washA: 1, w: 2 }); pop();
    const shrug = t > EV.bn_still; human(230, 1290, 0.74, t, { body: '#8a5a2a', hair: '#3a2a1a', face: shrug ? 'calm' : 'smile', armL: shrug ? 'hips' : 'hold', armR: shrug ? 'hips' : 'hold', seed: 670, beard: true, legs: '#2a3a6a' });
    human(700, 1290, 0.72, t, { body: '#e8c82a', hair: '#c88a3a', face: shrug ? 'shock' : 'smile', armL: 'hold', armR: shrug ? 'point' : 'hold', seed: 671, long: 1, flip: -1, look: -0.5 }); }
  function imbiss(t) { const k = rect(300, 940, 360, 300, { wash: '#f2ead6', washA: 1, w: 3, col: '#2a2a2a', key: 7010 }); rect(280, 900, 400, 60, { wash: '#b8282a', washA: 1, w: 2.4, col: '#2a0a0a' }); txt('IMBISS', 480, 942, 44, { font: 'Osw', col: '#fff4d0' }); donerCone(420, 1230, 0.42, t, { kind: 'lamb', shave: true, heat: false });
    human(560, 1240, 0.62, t, { body: '#f2f2f2', hair: '#1a1a1a', face: 'grin', armL: 'hold', armR: 'swing', seed: 672, beard: true }); stache(560, 1240, 0.62);
    if (t > EV.bn_who - 0.1) { bubbleTag('1969?', 360, 820, t, EV.bn_who, '#2a6ab8', 38, -0.08); bubbleTag('1972?', 620, 800, t, EV.bn_who + 0.25, '#b8282a', 38, 0.06); } }
  function bun(t) { const k = clamp((t - EV.bn_bun + 0.5) / 0.5); if (k <= 0) return; const x = 560, y = 1360; if (k < 1) { for (let i = 0; i < 6; i++) { const q = clamp(k * 1.5 - i * 0.1), sx = 420 + i * 12, sy = 1150; blob([[lerp(sx, x, q) - 14, lerp(sy, y, q) - 6], [lerp(sx, x, q) + 14, lerp(sy, y, q) - 8], [lerp(sx, x, q) + 10, lerp(sy, y, q) + 8], [lerp(sx, x, q) - 12, lerp(sy, y, q) + 6]], { wash: i % 3 ? SW.meat : '#6aa04a', washA: 1, w: 1.2, col: '#2a1408' }); } }
    donerBun(x, y, 1.0 * popK(t, EV.bn_bun - 0.1, 0.4), -0.08); }
  WORLD.berlin = (t, u, cat) => { lay(14, () => city(t)); lay(2.4, () => street(t)); lay(1.5, () => imbiss(t)); lay(1, () => { rect(-300, 1440, 1700, 600, { wash: '#8a8a88', washA: 1, w: 2, col: '#3a3a3a', key: 7020 }); for (let i = 0; i < 12; i++) pencil([[-300 + i * 150, 1440], [-300 + i * 150, 2000]], { w: 2, col: '#5a5a58', a: 0.5, pass2: false }); bun(t); cat(); }); };
  DIR.berlin = {
    outfit: 'hoodie70', light: { side: 1, rim: '#fff4e0' }, grade: ['#c8a060', 0.08],
    act: () => [[S0.berlin, 'talk'], [EV.bn_bun, 'grin'], [EV.bn_who, 'suspicious'], [EV.bn_still, 'sideeye']],
    pose: (t, u, b) => Object.assign(b, { x: 860, y: 1800, s: 1.1, flip: true, apron: 1, look: t < EV.bn_who ? [-0.7, 0.2] : [-0.5, -0.8], hand: t < EV.bn_who ? [150, -300] : [170, -300], handF: t < EV.bn_who ? [-90, -230] : [-170, -300], prop: t > EV.bn_bun + 0.4 && t < EV.bn_who ? 'bunP' : null }),
    cam: () => [[S0.berlin, 560, 900, 0.1], [EV.bn_bun, 600, 1300, 0.22, 'x'], [EV.bn_who, 520, 980, 0.14], [S1.berlin, 520, 1000, 0.16]]
  };
  // ---------------------------------------------------------------- переход: поезд проносится через кадр и увозит прошлую сцену
  TRANS_IN.berlin = { a: 0.15, b: 0.4, runA: 1, fx(k, t, A, B) {
    const q = k, x = lerp(1100, -3100, q); drawBuf(B, 1, 540, 960); scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(0, 0, Math.max(0, x + 10), H); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
      for (let c = 0; c < 4; c++) { const cx = x + c * 760; if (cx > W || cx + 740 < 0) continue; rect(cx, 400, 740, 1100, { wash: c % 2 ? '#e8b82a' : '#b8282a', washA: 1, w: 6, col: '#1a0a04' }); for (let w = 0; w < 3; w++) rect(cx + 60 + w * 220, 560, 160, 300, { wash: '#4a5a6a', washA: 1, w: 3, col: '#1a1a1a' }); rect(cx, 1000, 740, 60, { wash: '#2a2a2a', washA: 1, line: false }); } });
  } };
})();
