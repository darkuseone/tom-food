/* 009 — `heritage`: «С 2019-го хачапури — наследие Грузии. А в конце февраля — его праздник.» Торжественный зал: колонны, люстра, бордовые шторы, флаг Грузии,
   на мольберте грамота «НАСЛЕДИЕ · 2019» с хачапури в лавровом венке. На «наследие» сверху бьёт печать с сургучом, зал аплодирует; на «февраля» с настенного календаря
   срывается листок, под ним — ФЕВРАЛЬ, праздничный стол с хачапури; на «праздник.» — конфетти, гости поднимают руки в танце. Том в смокинге с медалью.
   Переход В сцену: огромная круглая печать опускается на кадр и оставляет оттиск, из которого проступает зал. */
(() => {
  EV.hr_stamp = wtw('s6', 'наследие');
  EV.hr_feb = wtw('s6', 'февраля');
  EV.hr_party = wtw('s6', 'праздник.');
  SHAKES.push([EV.hr_stamp + 0.15, 0.2, 10]);
  KEYW.push('наследие');

  function hall(t) { vgrad(-600, 1500, ['#f2e8d8', '#e8dcc4', '#d8c8a8']); for (const x of [40, 1040]) { rect(x - 60, -300, 120, 1700, { wash: '#f6f0e4', washA: 1, w: 2.4, col: '#8a7a60', key: 11100 + x }); for (let i = 0; i < 6; i++) pencil([[x - 40 + i * 16, -300], [x - 40 + i * 16, 1400]], { w: 1.4, col: '#b8a888', pass2: false }); }
    for (const sd of [-1, 1]) { const x0 = sd < 0 ? 120 : 960; blob([[x0, -300], [x0 + sd * 140, -300], [x0 + sd * 90, 600], [x0 + sd * 150, 1300], [x0, 1300]], { wash: '#7a1a2a', washA: 1, w: 2.4, col: '#3a0a10' }); }
    push(540, 90, 1); pencil([[0, -200], [0, -40]], { w: 4, col: '#8a6a3a', pass2: false }); for (let i = 0; i < 9; i++) { const a = Math.PI * (0.1 + i * 0.1); pencil([[0, -30], [Math.cos(a) * 160, Math.sin(a) * 50]], { w: 3, col: '#c8a040', pass2: false }); ell(Math.cos(a) * 160, Math.sin(a) * 50 + 14, 9, 16, { wash: '#fff6d8', washA: 1, w: 1.4, col: '#a8842a' }); glow(Math.cos(a) * 160, Math.sin(a) * 50 + 14, 40, 'rgba(255,240,190,1)', 0.4); } pop();
    push(850, 520, 1); pencil([[-120, -180], [-120, 260]], { w: 6, col: '#8a6a3a' }); rect(-120, -180, 220, 150, { wash: '#ffffff', washA: 1, w: 2, col: '#8a8a8a' }); rect(-6 - 120 + 110 - 14, -180, 28, 150, { wash: '#d9282b', washA: 1, line: false }); rect(-120, -119, 220, 28, { wash: '#d9282b', washA: 1, line: false });
      for (const [cx, cy] of [[-70, -147], [55, -147], [-70, -62], [55, -62]]) { rect(cx - 4, cy - 14, 8, 28, { wash: '#d9282b', washA: 1, line: false }); rect(cx - 14, cy - 4, 28, 8, { wash: '#d9282b', washA: 1, line: false }); } pop();
    push(830, 900, 1); rect(-110, -90, 220, 200, { wash: '#fbf8f0', washA: 1, w: 3, col: '#4a3a2a', key: 11110 }); rect(-110, -90, 220, 44, { wash: '#c8282a', washA: 1, line: false }); const torn = clamp((t - EV.hr_feb) / 0.6);
      txt(t > EV.hr_feb ? 'ФЕВРАЛЬ' : 'ЯНВАРЬ', 0, -60, 30, { font: 'Osw', col: '#ffffff' }); txt(t > EV.hr_feb ? '27' : '22', 0, 60, 96, { font: 'Osw', col: '#2a1a0a' });
      if (torn > 0 && torn < 1) { push(0, torn * 400, 1, torn * 1.4); rect(-110, -46, 220, 156, { wash: '#fbf8f0', washA: 1 - torn, w: 2, col: '#4a3a2a' }); txt('22', 0, 60, 96, { font: 'Osw', col: '#2a1a0a' }); pop(); } pop(); }
  function diploma(t) { push(380, 960, 1, -0.03); pencil([[-150, 360], [0, -280], [150, 360]], { w: 9, col: '#6a4a24' }); rect(-180, -240, 360, 420, { wash: '#fbf2d8', washA: 1, w: 5, col: '#a8842a', key: 11120 }); rect(-160, -220, 320, 380, { line: true, w: 2, col: '#c8a040' });
    txt('НАСЛЕДИЕ', 0, -170, 44, { font: 'Osw', col: '#7a1a2a' }); txt('ГРУЗИИ · 2019', 0, -120, 30, { font: 'Osw', col: '#4a3a2a' }); for (const sd of [-1, 1]) for (let i = 0; i < 7; i++) ell(sd * (70 - Math.sin(i / 6 * Math.PI) * 10) + sd * 16, -20 + i * 22 - 40, 14, 7, { wash: '#4a8a3a', washA: 1, w: 1, col: '#1a4a1a', rot: sd * (0.6 - i * 0.18) });
    adjaruli(0, 20, 0.3, t, { steam: false }); txt('традиция хачапури', 0, 120, 26, { font: 'Hand', col: '#4a3a2a' });
    const k = clamp((t - EV.hr_stamp + 0.25) / 0.25); if (k > 0) { const down = t < EV.hr_stamp ? k : 1 - clamp((t - EV.hr_stamp - 0.15) / 0.3); push(110, 140 - down * 0, 1); if (t > EV.hr_stamp) { ell(0, 0, 54, 54, { wash: '#a8141a', washA: 1, w: 2, col: '#5a0a0a' }); ell(0, 0, 38, 38, { line: true, w: 2, col: '#e86a6a' }); txt('2019', 0, 8, 24, { font: 'Osw', col: '#ffd0c0' }); }
      if (down > 0) { push(0, -40 - (1 - down) * 260, 1); rect(-40, -200, 80, 160, { wash: '#5a3a1a', washA: 1, w: 2, col: '#1a0a04' }); ell(0, -200, 50, 20, { wash: '#7a4a24', washA: 1, w: 2 }); rect(-60, -40, 120, 40, { wash: '#3a2a1a', washA: 1, w: 2 }); pop(); } pop(); } pop(); }
  function guests(t) { const clap = t > EV.hr_stamp + 0.1, dance = t > EV.hr_party - 0.1; for (let i = 0; i < 4; i++) { const x = 90 + i * 260 - (i > 1 ? -40 : 0); if (x > 600 && x < 820) continue;
      human(x, 1420 + (i % 2) * 20, 1.08, t, { body: ['#2a2a3a', '#7a1a2a', '#2a4a6a', '#5a2a5a'][i], hair: ['#2a1a0a', '#1a1a1a', '#5a3a1a', '#3a2a1a'][i], face: clap ? 'grin' : 'calm', armL: dance ? 'up' : clap ? (Math.floor(t * 8 + i) % 2 ? 'hold' : 'point') : 'down', armR: dance ? 'up' : clap ? (Math.floor(t * 8 + i) % 2 ? 'point' : 'hold') : 'down', seed: 1100 + i, long: i % 2, look: 0.3 }); }
    if (t > EV.hr_feb) { const k = popK(t, EV.hr_feb + 0.2, 0.4); rect(-300, 1420, 1700, 40, { wash: '#fbf8f0', washA: 1, w: 2, col: '#8a8a8a' }); for (let i = 0; i < 4; i++) adjaruli(80 + i * 180, 1400, 0.34 * k, t, { steam: i % 2 === 0 }); } }
  function confetti(t) { if (t < EV.hr_party) return; const q = t - EV.hr_party; for (let i = 0; i < 70; i++) { const r = rng(11130 + i), x = r() * 1200 - 60 + Math.sin(q * 3 + i) * 30, y = -100 + (r() * 400 + q * (300 + r() * 300)) % 1800; rect(x, y, 14, 8, { wash: ['#d9282b', '#f2c838', '#4ab0e0', '#5ae08a', '#ffffff'][i % 5], washA: 1, line: false }); } }
  WORLD.heritage = (t, u, cat) => { lay(12, () => hall(t)); lay(2.6, () => diploma(t)); lay(1.8, () => guests(t)); lay(1, () => { rect(-300, 1600, 1700, 500, { wash: '#8a1a2a', washA: 1, w: 2, col: '#3a0a10', key: 11140 }); cat(); confetti(t); }); };
  DIR.heritage = {
    outfit: 'tuxA', light: { side: 1, rim: '#fff0c0' }, grade: ['#e8a870', 0.05],
    act: () => [[S0.heritage, 'proud'], [EV.hr_stamp, 'awe'], [EV.hr_stamp + 0.5, 'proud'], [EV.hr_feb, 'talk'], [EV.hr_party, 'laugh']],
    pose: (t, u, b) => { const party = t > EV.hr_party - 0.05; return Object.assign(b, { x: 670, y: 1810, s: 1.12, flip: true, look: t < EV.hr_feb ? [-0.8, -0.3] : [0.4, -0.5], hand: party ? [120, -460] : [110, -280], handF: party ? [-120, -460] : [-90, -230], prop: party ? null : 'medal', tailUp: party }); },
    cam: () => [[S0.heritage, 560, 1060, 0.14], [EV.hr_stamp, 480, 1080, 0.26, 'x'], [EV.hr_feb, 640, 1020, 0.22], [EV.hr_party, 560, 1100, 0.18, 'x'], [S1.heritage, 560, 1100, 0.2]]
  };
  TRANS_IN.heritage = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {             // круглая печать опускается на кадр и оставляет оттиск, из которого проступает зал
    const down = clamp(k / 0.45), lift = clamp((k - 0.45) / 0.55), R = 380 + lift * 1200; drawBuf(A, 1, 540, 960); if (lift > 0) inCircle(540, 960, R, () => drawBuf(B, 1, 540, 960));
    scr(() => { if (lift > 0) { ell(540, 960, R, R, { line: true, w: 30 * (1 - lift) + 4, col: '#a8141a', a: 1 - lift }); }
      const sy = lift > 0 ? 960 - lift * 1800 : lerp(-700, 960, sm(down)), sc = 1.6; push(540, sy, sc); ell(0, 0, 240, 240, { wash: '#a8141a', washA: lift > 0 ? 1 - lift : 1, w: 6, col: '#3a0a0a' }); rect(-60, -560, 120, 330, { wash: '#5a3a1a', washA: 1, w: 3, col: '#1a0a04' }); ell(0, -560, 90, 36, { wash: '#7a4a24', washA: 1, w: 3 }); pop(); });
  } };
})();
