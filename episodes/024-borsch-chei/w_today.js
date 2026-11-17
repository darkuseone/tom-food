/* 024 — `today` + `button` (финал без склейки): «А ты за какой — свежий или вчерашний?» / «Пиши в комменты — откусим!»
   Поздний вечер, та же кухня-хук после спора: на столе — хиро-тарелка борща (пар, сметана, жир-золотинки, укроп), пампушки, чеснок, недопитый компот,
   ложки соседей сложены горкой. Слева — открытый холодильник (холодный свет) с кастрюлей «ВЧЕРА · ДЕНЬ 2» (настоявшийся, гуще и темнее),
   справа — окно с ночным городом и снегом, часы, связки перца; под абажуром — тёплый главный свет. Том в горчичном свитере + фартук (как в хуке).
   По словам: «свежий» — Том показывает ложкой на тарелку, пар взвивается, ценник «СЕГОДНЯ»; «вчерашний?» — кивает на холодильник, тот вспыхивает голубым, ценник «ДЕНЬ 2»;
   «откусим!» — Том откусывает ложку борща; камера плавно доезжает к тарелке — к первому кадру хука (петля), «ПОДПИШИСЬ» всплывает поверх.
   Переход В сцену — ополовник наливает борщ сверху вниз рубиновым занавесом. */
(() => {
  EV.td_fresh = wtw('t1', 'свежий');
  EV.td_old = wtw('t1', 'вчерашний?');
  EV.td_bite = wtw('x1', 'откусим!');
  SHAKES.push([EV.td_bite, 0.14, 6]);
  KEYW.push('вчерашний?', 'откусим!');
  const LAMP = [600, 740], PL = { x: 470, y: 1580, s: 1.0 };
  function wall(t) {                                                     // вечерняя кухня: кафель, холодильник, окно с ночным городом, полки, часы
    vgrad(-600, 2400, ['#2a1a20', '#4a2a2a', '#6a3a30']);
    for (let r = 0; r < 18; r++) for (let c = 0; c < 16; c++) rect(-300 + c * 92, 200 + r * 92, 88, 88, { wash: (r + c) % 2 ? '#d8c8a8' : '#e0d0b0', washA: 0.95, w: 1, col: '#7a5a3a' });
    lightPool(LAMP[0], 900, 700, 520, 'rgba(255,200,120,1)', 0.3); moodDark(LAMP[0], 900, 380, 1200, '#120814', 0.5);
    const fr = clamp((t - EV.td_old) / 0.3); push(120, 1440, 1); rect(-200, -900, 400, 900, { wash: '#e8ecf0', washA: 1, w: 3, col: '#3a4048' }); rect(-180, -880, 360, 860, { wash: lerpC('#9ab8d0', '#d8f0ff', fr), washA: 1, line: false });
    for (const sy of [-660, -420, -200]) { rect(-180, sy, 360, 10, { wash: '#f4f8fc', washA: 0.9, line: false }); }
    push(0, -420, 0.9); const pt = shape([[-110, -150], [-110, 0], [110, 0], [110, -150]], { wash: '#c8202a', washA: 1, w: 2.4, col: '#3a0408' }); for (let i = 0; i < 6; i++) ell(-90 + i * 36, -80 + (i % 2) * 20, 7, 7, { wash: '#f4ecd8', washA: 1, line: false }); ell(0, -150, 110, 20, { wash: '#6a0414', washA: 1, w: 2 }); pop();
    push(0, -560, 1, -0.05); rect(-70, -30, 140, 56, { wash: '#f4e860', washA: 1, w: 1.6, col: '#6a5a08' }); txt('ВЧЕРА · день 2', 0, 6, 20, { font: 'Hand', col: '#2a2a2a' }); pop();
    for (let i = 0; i < 4; i++) jarS(-120 + i * 80, -660, 0.36, t, { kind: i % 2 ? 'pickle' : 'olive', key: 24960 + i }); for (let i = 0; i < 3; i++) { rect(-140 + i * 90, -200 - 90, 50, 90, { wash: '#f4f4f8', washA: 1, w: 1.4, col: '#4a5a6a' }); rect(-140 + i * 90, -260, 50, 26, { wash: '#2a7ac8', washA: 1, line: false }); }
    pencil([[-200, -900], [-380, -860], [-380, -40], [-200, 0]], { w: 4, col: '#3a4048', pass2: false }); if (fr > 0) { glow(0, -440, 380, 'rgba(160,210,255,1)', 0.28 * fr); } pop();
    push(940, 700, 1); const wn = rect(-150, -320, 300, 380, { wash: '#0a1a3a', washA: 1, w: 10, col: '#e8dcc0' }); ctx.save(); ctx.clip(wn.path); vgrad(-320, 60, ['#050a1a', '#1a2a4a']); for (let i = 0; i < 6; i++) rect(-150 + i * 60, -100 + (i % 3) * 30, 50, 160, { wash: '#101a30', washA: 1, line: false }); windows(-150, -80, 300, 120, 6, 3, 24970, 0.6, '#ffd98a', '#9fd8ff', 0.85); motes(26, [-150, -320, 150, 60], '#ffffff', t, 24971, { sp: 40, sz: 3, a: 0.8 }); ctx.restore();
    pencil([[0, -320], [0, 60]], { w: 8, col: '#e8dcc0', pass2: false }); pencil([[-150, -130], [150, -130]], { w: 8, col: '#e8dcc0', pass2: false }); pop();
    push(720, 420, 1); ell(0, 0, 46, 46, { wash: '#f4ecd8', washA: 1, w: 3, col: '#3a2410' }); pencil([[0, 0], [16, -24]], { w: 3, col: '#2a1a0a', pass2: false }); pencil([[0, 0], [26 * Math.cos(t * 0.6), 26 * Math.sin(t * 0.6)]], { w: 2, col: '#c8202a', pass2: false }); pop();
    for (let i = 0; i < 7; i++) { push(1080 + i * 14, 300 + i * 30, 1, 0.3); blob([[0, 0], [-8, 20], [0, 50], [8, 20]], { wash: '#c8202a', washA: 1, w: 1.2, col: '#4a0408' }); pop(); }
  }
  function table(t) {                                                    // стол: вышитая дорожка, хиро-тарелка, пампушки, чеснок, компот, горка ложек соседей, хлебные крошки
    const tb = rect(-500, 1440, 2100, 600, { wash: '#f4ecdc', washA: 1, w: 3, col: '#3a2a1a', key: 24980 }); shadeG(tb.path, 0, 1440, 0, 1900, '#7a5a4a', 0.45);
    for (let i = 0; i < 26; i++) { const x = -460 + i * 80; for (let q = 0; q < 3; q++) { const xx = x + q * 18, yy = 1462 + Math.abs(q - 1) * 10; pencil([[xx - 6, yy - 6], [xx + 6, yy + 6]], { w: 2, col: i % 2 ? '#c8202a' : '#1a1418', pass2: false }); pencil([[xx + 6, yy - 6], [xx - 6, yy + 6]], { w: 2, col: i % 2 ? '#c8202a' : '#1a1418', pass2: false }); } }
    lightPool(PL.x, PL.y, 560, 220, 'rgba(255,214,150,1)', 0.4);
    push(130, 1560, 0.9); const bk = blob([[-110, 0], [-120, -60], [120, -60], [110, 0]], { wash: '#c89a5a', washA: 1, w: 2.4, col: '#4a2a08', key: 24981 }); for (let i = 0; i < 6; i++) pencil([[-110 + i * 40, -56], [-100 + i * 40, -4]], { w: 2, col: '#8a5a2a', pass2: false }); for (let i = 0; i < 3; i++) pampushka(-60 + i * 50, -70 - (i % 2) * 18, 0.7); pop();
    push(890, 1580, 0.8); rect(-40, -120, 80, 120, { wash: '#e8f0f8', washA: 0.55, w: 2, col: '#4a5a6a' }); rect(-36, -70, 72, 66, { wash: '#a8203a', washA: 0.6, line: false }); for (let i = 0; i < 3; i++) ell(-16 + i * 16, -40, 8, 8, { wash: '#6a0a2a', washA: 0.8, line: false }); pop();
    push(1000, 1640, 0.8); for (let i = 0; i < 4; i++) { push(i * 14, -i * 10, 1, 0.2 + i * 0.15); pencil([[-90, 0], [40, 0]], { w: 8, col: '#c8ccd0', pass2: false }); ell(66, 0, 30, 20, { wash: '#c8ccd0', washA: 1, w: 2, col: '#3a3e44' }); pop(); } pop();
    for (let i = 0; i < 3; i++) ell(300 + i * 24, 1690 - (i % 2) * 6, 12, 15, { wash: '#f8f2e4', washA: 1, w: 1.4, col: '#6a5a4a' }); for (let i = 0; i < 10; i++) { const r = rng(24982 + i); ell(600 + r() * 300, 1700 + r() * 80, 4, 3, { wash: '#c88a3a', washA: 1, line: false }); }
    borschHero(PL.x, PL.y, PL.s, t, { key: 24983 });
    if (t > EV.td_fresh && t < EV.td_old + 0.2) bubbleTag('СЕГОДНЯ', PL.x - 60, PL.y - 240, t, EV.td_fresh + 0.05, '#c8202a', 34, -0.05);
    castShadow(PL.x, PL.y + 80, 600, 60, 0.4, 0.2); castShadow(130, 1560, 220, 80, 0.5, 0.22);
  }
  function lamp(t) {                                                     // абажур с бахромой (как в хуке) — главный свет
    push(LAMP[0], LAMP[1] - 270, 1, Math.sin(t * 1.2) * 0.02); pencil([[0, -400], [0, 200]], { w: 4, col: '#2a1a0a', pass2: false }); const sh = shape([[-220, 260], [-120, 200], [120, 200], [220, 260]], { wash: '#c8202a', washA: 1, w: 3, col: '#3a0408', key: 24990 }); shadeG(sh.path, 0, 200, 0, 260, '#ff6a4a', 0.4);
    for (let i = 0; i < 16; i++) pencil([[-210 + i * 28, 262], [-212 + i * 28, 290 + (i % 2) * 6]], { w: 3, col: '#e8c040', pass2: false }); ell(0, 270, 60, 16, { wash: '#fff2c0', washA: 1, line: false }); glow(0, 280, 130, 'rgba(255,214,140,1)', 0.35); pop();
    shaft(LAMP[0], LAMP[1] + 20, 380, 1200, 0, 'rgba(255,214,150,1)', 0.12);
  }
  function front(t) {                                                    // передний план: пар над тарелкой, ветка укропа в стакане слева, пылинки в свете
    for (let i = 0; i < 4; i++) { const ph = (t * 0.25 + i / 4) % 1; blob([[300 + i * 120 - 80, 1300 - ph * 600], [300 + i * 120, 1240 - ph * 640], [300 + i * 120 + 90, 1290 - ph * 600], [300 + i * 120 + 20, 1340 - ph * 580]], { wash: '#ffffff', washA: 0.2 * Math.sin(ph * 3.14), line: false }); }
    push(-20, 1900, 1.2); rect(-50, -200, 100, 200, { wash: '#e8f0f8', washA: 0.5, w: 2, col: '#4a5a6a' }); for (let i = 0; i < 5; i++) { pencil([[i * 10 - 20, -100], [i * 14 - 30, -320 - i * 20]], { w: 3, col: '#3a8a2a', pass2: false }); for (let q = 0; q < 6; q++) pencil([[i * 12 - 26, -200 - q * 20], [i * 12 - 10, -214 - q * 20]], { w: 1.6, col: '#5aaa3a', pass2: false }); } pop();
  }
  WORLD.today = (t, u, cat) => {
    lay(9, () => { wall(t); });
    lay(1, () => { cat(); table(t); lamp(t); });
    lay(0.75, () => { front(t); motes(16, [200, 600, 900, 1300], '#ffe8c0', t, 24995, { sp: 8, sz: 3, a: 0.45, wob: 8 }); moodDark(540, 1200, 500, 1400, '#1a0610', 0.38); });
  };
  WORLD.button = (t, u, cat) => WORLD.today(t, u, cat);
  DIR.today = {
    outfit: 'homeB', light: { side: -1, rim: '#ffc890' }, grade: ['#ff9060', 0.06],
    act: () => [[S0.today, 'smug'], [EV.td_fresh, 'grin'], [EV.td_old, 'sideeye']],
    pose: (t, u, b) => { const f = t > EV.td_fresh && t < EV.td_old, o = t > EV.td_old;
      return Object.assign(b, { x: 700, y: 1600, s: 1.15, flip: true, look: f ? [-0.4, 0.5] : o ? [-0.9, -0.1] : [0, 0],
        hand: f ? [190, -170] : [150, -230], handF: o ? [-200, -320] : [-120, -200], point: o, prop: 'spoonBorschP', propAng: f ? 2.0 : 0.9 }); },
    cam: () => [[S0.today, 620, 1280, 0.29], [EV.td_fresh, 600, 1310, 0.31], [EV.td_old, 520, 1260, 0.29], [S1.today, 560, 1300, 0.31]]
  };
  DIR.button = {
    outfit: 'homeB', light: { side: -1, rim: '#ffc890' }, grade: ['#ff9060', 0.06],
    act: () => [[S0.button, 'grin'], [EV.td_bite, 'laugh']],
    pose: (t, u, b) => { const bite = t > EV.td_bite - 0.1;
      if (bite && t < EV.td_bite + 0.12) b.squash = (b.squash || 0) + 0.1;
      return Object.assign(b, { x: 700, y: 1600, s: 1.15, flip: true, look: [0, 0.05], hand: bite ? [70, -300] : [150, -230], handF: [-120, -200], prop: 'spoonBorschP', propAng: bite ? 0.3 : 0.9, tailUp: bite }); },
    cam: () => [[S0.button, 560, 1300, 0.31], [EV.td_bite, 550, 1360, 0.38], [DUR, 540, 1420, 0.5]]
  };
  TRANS_IN.today = { a: 0.12, b: 0.5, runA: 1, fx(k, t, A, B) {          // ополовник наливает борщ сверху: рубиновый занавес стекает и открывает кухню
    const e = sm(k), down = e < 0.5 ? e / 0.5 : 1, up = e < 0.5 ? 0 : (e - 0.5) / 0.5; drawBuf(e < 0.5 ? A : B, 1, 540, 960);
    scr(() => { const bot = lerp(-80, 2000, down), top = lerp(-80, 2000, up); if (bot - top > 2) { const pts = [[0, top]]; for (let x = 0; x <= 1080; x += 60) pts.push([x, top]); for (let x = 1080; x >= 0; x -= 60) pts.push([x, bot + Math.sin(x * 0.02 + t * 6) * 40]); shape(pts, { wash: '#a8122a', washA: 0.97, w: 4, col: '#5a0614' });
      for (let i = 0; i < 12; i++) { const r = rng(24998 + i); ell(r() * 1080, lerp(top, bot, r()), 14, 6, { wash: '#f6b84a', washA: 0.7, line: false }); } }
      push(540, lerp(-60, 160, Math.min(1, e * 3)), 1, 2.4 - e); pencil([[0, 0], [0, -400]], { w: 14, col: '#a8aeb4', pass2: false }); ell(0, 30, 90, 60, { wash: '#a8aeb4', washA: 1, w: 3, col: '#3a3e44' }); pop(); });
  } };
})();
