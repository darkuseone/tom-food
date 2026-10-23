/* 006 — `eu`: «Турция попросила ЕС защитить рецепт: ломтики три–пять миллиметров. Германия — против!» Стерильная «палата стандартов»: стеклянные перегородки,
   стеллажи с папками, лампа-лупа, весы, на стене плакат с размерами ломтика. На «попросила» на стол ложится толстая папка «ЗАЯВКА: РЕЦЕПТ ДЁНЕРА» и раскрывается
   чек-лист; на «ломтики» Том-лаборант меряет штангенциркулем ломтик под лупой — табло «3–5 мм»; на «Германия — против!» сбоку врезается огромный штамп
   ПРОТИВ, посетитель с дёнером в руке возмущённо машет. Флагов нет — только еда и бумаги. Переход В сцену: резиновый штамп бьёт по кадру. */
(() => {
  EV.eu_ask = wtw('s9', 'попросила');
  EV.eu_mm = wtw('s9', 'ломтики');
  EV.eu_de = wtw('s9', 'Германия');
  EV.eu_no = wtw('s9', 'против!');
  SHAKES.push([EV.eu_no, 0.25, 14]);
  KEYW.push('против!');

  function office(t) { vgrad(-600, 1300, ['#d8e4ec', '#e8eef2', '#f2f4f4']); for (let i = 0; i < 5; i++) { const x = -260 + i * 330; rect(x, 200, 300, 900, { wash: '#c8e0ea', washA: 0.4, w: 3, col: '#8aa0aa' }); pencil([[x + 40, 220], [x + 120, 380]], { w: 3, col: '#ffffff', a: 0.7, pass2: false }); }
    for (let r = 0; r < 4; r++) { rect(620, 560 + r * 140, 420, 14, { wash: '#8a9aa4', washA: 1, w: 2 }); for (let q = 0; q < 9; q++) rect(628 + q * 46, 460 + r * 140, 38, 100, { wash: ['#2a4a8a', '#c8a030', '#5a7a8a', '#e8e0d0'][(r + q) % 4], washA: 1, w: 1.4, col: '#1a2a3a' }); }
    push(300, 760, 1); rect(-150, -150, 300, 300, { wash: '#fbfbf6', washA: 1, w: 3, col: '#3a4a5a' }); ell(0, -20, 110, 60, { wash: SW.meat, washA: 1, w: 2, col: '#3a1a08' }); pencil([[-110, 70], [110, 70]], { w: 3, col: '#c8282a', pass2: false }); txt('3–5 мм', 0, 120, 40, { font: 'Osw', col: '#c8282a' }); pop();
    human(980, 1250, 0.74, t, { body: '#2a5a3a', hair: '#c8a050', face: t > EV.eu_no ? 'angry' : 'smile', armL: 'hold', armR: t > EV.eu_no ? 'up' : 'hold', seed: 690, look: -0.6, flip: -1 }); if (t > EV.eu_de - 0.2) { push(1040, 900 + Math.sin(t * 9) * 10 * (t > EV.eu_no ? 1 : 0), 0.6); donerBun(0, 0, 1, 0.2); pop(); } }
  function desk(t) { const tb = rect(-300, 1300, 1700, 700, { wash: '#f2f2f0', washA: 1, w: 3, col: '#5a6a7a', key: 7200 }); shadeG(tb.path, 540, 1300, 540, 1800, '#a8b4bc', 0.4);
    if (t > EV.eu_ask - 0.2) { const k = sm(clamp((t - EV.eu_ask + 0.2) / 0.5)); push(420, lerp(800, 1360, k), 1, lerp(-0.4, -0.05, k)); rect(-230, -130, 460, 260, { wash: '#2a4a8a', washA: 1, w: 3, col: '#0a1a3a' }); rect(-210, -110, 420, 220, { wash: '#fbf6ea', washA: 1, w: 2, col: '#8a8a7a' });
      txt('ЗАЯВКА: ДЁНЕР', 0, -70, 34, { font: 'Osw', col: '#2a4a8a' }); const rows = ['говядина ≥ 16 мес.', 'ломтик 3–5 мм', 'вертел стоймя']; for (let i = 0; i < 3; i++) { const on = t > EV.eu_ask + 0.4 + i * 0.35; rect(-180, -30 + i * 48, 26, 26, { wash: '#ffffff', washA: 1, w: 2 }); if (on) pencil([[-176, -16 + i * 48], [-166, -6 + i * 48], [-150, -30 + i * 48]], { w: 4, col: '#2a8a4a', pass2: false }); txt(rows[i], 10, -10 + i * 48, 28, { font: 'Hand', col: '#2a2a2a' }); }
      if (t > EV.eu_no - 0.05) { const s = popK(t, EV.eu_no, 0.3); push(40, 0, lerp(2.2, 1, Math.min(1, s)), -0.2); rect(-190, -60, 380, 120, { wash: '#c8282a', washA: 0.2, w: 8, col: '#c8282a' }); txt('ПРОТИВ', 0, 30, 80, { font: 'Osw', col: '#c8282a' }); pop(); } pop(); }
    if (t > EV.eu_mm - 0.1) { push(760, 1300, 1); pencil([[-60, -260], [60, -260]], { w: 6, col: '#5a6a7a' }); pencil([[60, -260], [60, -60]], { w: 6, col: '#5a6a7a' }); ell(0, -40, 120, 40, { wash: '#e8f4f8', washA: 0.5, w: 4, col: '#5a6a7a' }); glow(0, -30, 160, 'rgba(255,255,230,1)', 0.4);
      ell(0, -30, 70, 14, { wash: SW.meat, washA: 1, w: 2, col: '#3a1a08' }); rect(-110, -160, 220, 60, { wash: '#1a1a1a', washA: 1, w: 2 }); const mm = Math.min(5, 3 + Math.floor((t - EV.eu_mm) * 4) % 3); txt(mm + ',0 мм', 0, -118, 38, { font: 'Osw', col: '#5ae08a' }); pop(); } }
  WORLD.eu = (t, u, cat) => { lay(10, () => office(t)); lay(1, () => { desk(t); cat(); }); };
  DIR.eu = {
    outfit: 'labcoat', light: { side: -1, rim: '#ffffff' }, grade: ['#5a8ab8', 0.05],
    act: () => [[S0.eu, 'talk'], [EV.eu_ask, 'proud'], [EV.eu_mm, 'suspicious'], [EV.eu_de, 'awe'], [EV.eu_no, 'shock']],
    pose: (t, u, b) => Object.assign(b, { x: 900, y: 1820, s: 1.08, flip: true, look: t < EV.eu_no ? [-0.6, 0.2] : [0.6, -0.4], hand: t < EV.eu_no ? [170, -320] : [130, -380], handF: [-90, -230], prop: t > EV.eu_mm - 0.3 && t < EV.eu_no ? 'caliperP' : null, sweat: t > EV.eu_no ? 1 : 0 }),
    cam: () => [[S0.eu, 560, 1000, 0.1], [EV.eu_ask, 480, 1250, 0.18, 'x'], [EV.eu_mm, 700, 1200, 0.22], [EV.eu_de, 700, 1100, 0.14], [EV.eu_no, 520, 1250, 0.22, 'x'], [S1.eu, 520, 1250, 0.24]]
  };
  // ---------------------------------------------------------------- переход: резиновый штамп бьёт по кадру — оттиск, под ним новая сцена
  TRANS_IN.eu = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const down = clamp(k / 0.4), up = clamp((k - 0.5) / 0.5); drawBuf(k < 0.45 ? A : B, 1, 540, 960);
    scr(() => { if (k > 0.4 && k < 0.95) { ctx.fillStyle = `rgba(200,40,42,${0.35 * (1 - up)})`; ctx.fillRect(60, 300, 960, 1300); } const y = k < 0.45 ? lerp(-1600, 300, sm(down)) : lerp(300, -1700, sm(up));
      rect(40, y - 1200, 1000, 1200, { wash: '#6a4a2a', washA: 1, w: 6, col: '#1a0a04' }); rect(60, y, 960, 80, { wash: '#2a2a2a', washA: 1, w: 4, col: '#0a0a0a' }); if (k > 0.4 && k < 0.5) whiteOut(0.3, '255,240,230'); });
  } };
})();
