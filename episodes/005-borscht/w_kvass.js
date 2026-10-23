/* 005 — `kvass`: «Кислинку давал свекольный квас: свёклу квасили до пяти дней.» Бревенчатый погреб при свече: ряды бочек, связки лука и чеснока, полки с
   крынками, лестница наверх со светом из люка. Том в тулупе снимает крышку с бочки — рубиновый квас пузырится; на «квасили» хозяйка в платке крошит свёклу в кадку;
   на «пяти дней» углём на балке ставятся пять зарубок, свет из люка мигает «день-ночь». Переход В сцену: круглая крышка бочки падает сверху, прихлопывает кадр, катится вбок. */
(() => {
  EV.kv_lid = wtw('s4', 'свекольный');
  EV.kv_cut = wtw('s4', 'квасили');
  EV.kv_days = wtw('s4', 'пяти');
  SHAKES.push([EV.kv_lid, 0.18, 7]);
  KEYW.push('дней.');

  const dayK = t => clamp((t - EV.kv_days) / 0.6);            // 0→1 за пять «суток»
  function cellar(t) { vgrad(-600, 1600, ['#1a1008', '#2a1a0c', '#3a2614']);
    for (let i = 0; i < 9; i++) { const y = 80 + i * 110; const lg = rect(-300, y, 1700, 100, { wash: i % 2 ? '#4a3018' : '#553820', washA: 1, w: 2.4, col: '#140a04', key: 5600 + i }); for (let q = 0; q < 6; q++) ell(-200 + q * 300 + (i % 2) * 150, y + 50, 14, 30, { wash: '#2a1a0a', washA: 0.6, line: false }); }
    const d = Math.floor(dayK(t) * 5 + 0.0001), night = false; const hatchCol = night ? '#3a4a7a' : '#fff0c0';
    poly([[700, -300], [940, -300], [900, 140], [740, 140]], { wash: hatchCol, washA: 0.9, w: 3, col: '#140a04' }); ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = night ? 'rgba(120,140,220,0.08)' : 'rgba(255,230,160,0.14)'; ctx.beginPath(); ctx.moveTo(740, 140); ctx.lineTo(900, 140); ctx.lineTo(1100, 1500); ctx.lineTo(560, 1500); ctx.fill(); ctx.restore();
    for (let i = 0; i < 8; i++) { const y = 150 + i * 140; pencil([[760 - i * 10, y], [880 + i * 10, y]], { w: 10, col: '#6a4a2a' }); } pencil([[750, 140], [680, 1300]], { w: 12, col: '#5a3a1a' }); pencil([[890, 140], [960, 1300]], { w: 12, col: '#5a3a1a' });
    for (let i = 0; i < 3; i++) { push(120 + i * 140, 180, 1, Math.sin(t * 0.8 + i) * 0.05); pencil([[0, -80], [0, 0]], { w: 2, col: '#8a7a5a', pass2: false }); for (let q = 0; q < 5; q++) ell((q % 2 ? 14 : -14), q * 34, 20, 18, { wash: i === 1 ? '#f2e8d8' : '#c8904a', washA: 1, w: 1.6, col: '#5a3a14' }); pop(); }
    rect(980, 360, 120, 18, { wash: '#6a4a2a', washA: 1, w: 2 }); for (let q = 0; q < 2; q++) { const c = shape(spline([[990 + q * 56, 360], [984 + q * 56, 310], [1000 + q * 56, 290], [1030 + q * 56, 300], [1036 + q * 56, 360]], false, 6), { wash: '#b8683a', washA: 1, w: 2, col: '#3a1408' }); }
    // зарубки на балке
    const kd = dayK(t); if (t > EV.kv_days - 0.1) { rect(480, 640, 420, 40, { wash: '#6a4426', washA: 1, w: 2.4, col: '#140a04' }); for (let i = 0; i < 5; i++) { const k = clamp(kd * 5 - i); if (k > 0) { pencil([[520 + i * 70, 644], [520 + i * 70 + 10, 644 + 32 * sm(Math.min(1, k * 3))]], { w: 8, col: '#f2ead6', pass2: false }); } }
      bubbleTag('ДО 5 ДНЕЙ', 840, 760, t, EV.kv_days + 0.1, '#a8182a', 34, 0.05); }
  }
  function back(t) { for (let i = 0; i < 4; i++) barrel(560 + i * 160, 1180, 0.8, t + i, { lid: true });
    const cut = t > EV.kv_cut - 0.1; human(240, 1260, 0.95, t, { body: '#6a3a3a', hair: '#5a3a1a', face: cut ? 'smile' : 'calm', armL: 'hold', armR: cut ? 'swing' : 'hold', seed: 380, look: 0.4, long: 1, hat: 'scarf', hatCol: '#d9a842', trim: '#a8182a' });
    const tub = rect(260, 1180, 160, 110, { wash: '#7a4a24', washA: 1, w: 2.6, col: '#2a1408', key: 5620 }); ell(340, 1180, 80, 14, { wash: BR.redD, washA: 1, w: 2 });
    if (cut) for (let i = 0; i < 6; i++) { const k = ((t - EV.kv_cut) * 1.6 + i / 6) % 1; poly([[300 + i * 14, 1080 + k * 100], [312 + i * 14, 1080 + k * 100], [308 + i * 14, 1092 + k * 100]], { wash: BR.red, washA: 1 - k * 0.5, line: false }); }
  }
  function front(t) { const open = clamp((t - EV.kv_lid + 0.1) / 0.5); barrel(560, 1500, 1.25, t, { lid: open < 0.5 });
    if (open > 0) { glow(560, 1200, 200, 'rgba(240,60,80,1)', 0.25 * open); for (let i = 0; i < 8; i++) { const k = ((t * 0.9) + i / 8) % 1; ell(500 + (i % 4) * 40, 1196 - k * 120, 5 + 3 * (1 - k), 4 + 3 * (1 - k), { line: true, w: 2, col: BR.redL, a: (1 - k) * open }); } }
    ell(-60, 1300, 80, 80, { wash: '#ffd890', washA: 0.25, line: false }); pencil([[1000, 1500], [1000, 1380]], { w: 18, col: '#f2e8c8' }); const f = flick(t, 3); blob([[990, 1380], [1000, 1380 - 40 * f], [1010, 1380]], { wash: '#ffb040', washA: 1, line: false }); glow(1000, 1360, 160, 'rgba(255,190,90,1)', 0.45); }
  WORLD.kvass = (t, u, cat) => { lay(12, () => cellar(t)); lay(2.6, () => back(t)); lay(1, () => { rect(-300, 1460, 1700, 600, { wash: '#2a1a0c', washA: 1, w: 2, col: '#0a0402', key: 5630 }); front(t); cat(); }); };
  DIR.kvass = {
    outfit: 'tulupA', light: { side: 1, rim: '#ffc070' }, grade: ['#a85030', 0.1],
    act: () => [[S0.kvass, 'talk'], [EV.kv_lid + 0.2, 'awe'], [EV.kv_cut, 'sideeye'], [EV.kv_days, 'smug']],
    pose: (t, u, b) => { const lifted = t > EV.kv_lid - 0.15; return Object.assign(b, { x: 820, y: 1760, s: 1.14, flip: true, look: lifted ? [0.7, 0.6] : [0.5, 0], hand: lifted ? [190, -360] : [150, -200], handF: [-110, -220], prop: lifted ? 'lidP' : null }); },
    cam: () => [[S0.kvass, 640, 1150, 0.18], [EV.kv_lid, 620, 1250, 0.26, 'x'], [EV.kv_cut, 420, 1150, 0.22], [EV.kv_days, 640, 1020, 0.18, 'x'], [S1.kvass, 640, 1020, 0.2]]
  };
  PROPS.lidP = () => { push(0, -40, 1, 0.3); ell(0, 0, 90, 24, { wash: '#7a4a24', washA: 1, w: 2.4, col: '#2a1408' }); pencil([[-30, -6], [30, -6]], { w: 10, col: '#4a2a10' }); pop(); };
  // ---------------------------------------------------------------- переход: крышка бочки падает и прихлопывает кадр, катится вбок
  TRANS_IN.kvass = { a: 0.2, b: 0.4, runA: 1, fx(k, t, A, B) {
    const R = 1250; let cx, cy, ry;
    if (k < 0.45) { const q = sm(k / 0.45); cx = 540; cy = lerp(-1400, 960, q); ry = lerp(0.3, 1, q) * R; drawBuf(A, 1, 540, 960); }
    else { const q = sm((k - 0.45) / 0.55); cx = lerp(540, 2900, q); cy = 960; ry = R; drawBuf(B, 1, 540, 960); }
    scr(() => { push(cx, cy, 1, k > 0.45 ? (k - 0.45) * 8 : 0); const lid = ell(0, 0, R, ry, { wash: '#7a4a24', washA: 1, w: 8, col: '#2a1408' }); for (let i = -5; i <= 5; i++) pencil([[i * 220, -ry * Math.sqrt(Math.max(0, 1 - (i * 220 / R) ** 2))], [i * 220, ry * Math.sqrt(Math.max(0, 1 - (i * 220 / R) ** 2))]], { w: 4, col: '#4a2a10', pass2: false });
      pencil([[-400, -60], [400, -60]], { w: 60, col: '#4a2a10' }); pop(); });
    if (k > 0.42 && k < 0.5) whiteOut((0.5 - Math.abs(k - 0.46) * 12) * 0.4, '255,220,180');
  } };
})();
