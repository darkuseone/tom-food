/* 013 — `today`: «Сегодня у неё три главных лика: мясная, рыбная, грибная. Мясная или рыбная?» Домашняя кухня-столовая вечером: открытые полки с банками огурцов,
   маслин, каперсов, гирлянда, окно с городом, растения. На длинном столе — три миски под тремя лампами: мясная, рыбная, грибная. Том в худи с ложкой.
   По словам: «мясная / рыбная / грибная» — над каждой миской загорается лампа и табличка; «Мясная или рыбная?» — Том переводит взгляд с одной на другую,
   две таблички «МЯСНАЯ» / «РЫБНАЯ» выезжают крупно. Переход В сцену: крышка кастрюли подпрыгивает и переворачивается, открывая новый кадр. */
(() => {
  EV.tdy_meat = wtw('t1', 'мясная,');
  EV.tdy_fish = wtw('t1', 'рыбная,');
  EV.tdy_mush = wtw('t1', 'грибная.');
  EV.tdy_q = wtw('t1', 'или') - 0.35;
  KEYW.push('грибная.', 'рыбная?');
  const lit = (t, i) => t > [EV.tdy_meat, EV.tdy_fish, EV.tdy_mush][i] - 0.05;

  function room(t) {                                                    // кафель «кабанчик», окно с вечерним городом, полки с банками, гирлянда, растения
    vgrad(-600, 1500, ['#2a3a3a', '#4a5a5a', '#6a7a72']);
    for (let y = -400; y < 1300; y += 44) for (let x = -400; x < 1600; x += 110) rect(x + ((y / 44) % 2) * 55, y, 108, 42, { wash: '#2a4a4a', washA: 0.9, w: 1.2, col: '#1a2a2a', a: 0.5 });
    push(540, 280, 1); const w = rect(-260, -220, 520, 380, { wash: '#1a2448', washA: 1, w: 8, col: '#1a1a1a', key: 13900 }); ctx.save(); ctx.clip(w.path); vgrad(-220, 160, ['#1a2448', '#4a3a6a']); for (let i = 0; i < 6; i++) { rect(-260 + i * 90, -60 - (i % 3) * 60, 80, 260, { wash: '#2a2a40', washA: 1, w: 1.2 }); windows(-252 + i * 90, -50 - (i % 3) * 60, 64, 200, 3, 6, 13901 + i, 0.5, '#ffd890', '#3a3a5a', 0.9); } ctx.restore(); pencil([[0, -220], [0, 160]], { w: 8, col: '#1a1a1a' }); pop();
    for (let i = 0; i < 22; i++) { const x = -60 + i * 56, y = 40 + Math.sin(i * 0.7) * 24, on = Math.sin(t * 3 + i * 1.7) > -0.3; ell(x, y + 18, 8, 12, { wash: '#ffd890', washA: on ? 1 : 0.4, w: 1, col: '#3a2a1a' }); if (on) glow(x, y + 18, 30, 'rgba(255,210,130,1)', 0.45); }
    for (const [x0, y] of [[-380, 520], [-380, 760], [840, 520], [840, 760]]) { rect(x0, y, 560, 18, { wash: '#8a5a2a', washA: 1, w: 2, col: '#1a0a04' }); for (let i = 0; i < 3; i++) jarS(x0 + 90 + i * 170, y, 0.5, t, { key: 13902 + i + y + x0, kind: ['pickle', 'olive', 'caper'][i], label: ['огурцы', 'маслины', 'каперсы'][i] }); }
    for (const x of [-200, 1220]) { push(x, 1000, 1); const p = shape([[-50, 0], [-40, -90], [40, -90], [50, 0]], { wash: '#c8643a', washA: 1, w: 2 }); for (let i = 0; i < 8; i++) { const a = -2.8 + i * 0.35; blob([[0, -90], [Math.cos(a) * 60, -90 + Math.sin(a) * 120 - 40], [Math.cos(a) * 90, -90 + Math.sin(a) * 160]], { wash: '#3a7a3a', washA: 1, w: 1.4, col: '#1a3a1a' }); } pop(); }
  }
  function family(t) {                                                  // семья за столом: мама с половником, дочка тянется к мискам, папа с хлебом; холодильник, часы
    push(1180, 1300, 1); const f = rect(-130, -760, 260, 760, { wash: '#e8ece8', washA: 1, w: 3, col: '#3a4a4a' }); shadeG(f.path, 130, 0, -100, 0, '#a8b0a8', 0.45); pencil([[-130, -480], [130, -480]], { w: 3, col: '#5a6a6a', pass2: false }); pencil([[-100, -440], [-100, -300]], { w: 10, col: '#9aa0a0' });
      for (const [x, y, c] of [[-40, -620, '#d9482b'], [40, -560, '#e8b53a'], [0, -380, '#3a7aa8']]) { push(x, y, 1, 0.1); rect(-30, -20, 60, 40, { wash: c, washA: 1, w: 2 }); pop(); } push(30, -260, 1); rect(-60, -70, 120, 140, { wash: '#fff8e8', washA: 1, w: 1.6 }); txt('КУПИТЬ:', 0, -46, 18, { font: 'Hand', col: '#2a2a2a' }); for (const [i, w] of ['маслины', 'каперсы', 'лимон'].entries()) txt(w, 0, -16 + i * 24, 18, { font: 'Hand', col: '#3a3a6a' }); pop(); pop();
    push(-150, 640, 1); ell(0, 0, 60, 60, { wash: '#f8f4e8', washA: 1, w: 4, col: '#2a2a2a' }); pencil([[0, 0], [Math.cos(t * 0.5) * 40, Math.sin(t * 0.5) * 40]], { w: 3, col: '#2a2a2a', pass2: false }); pencil([[0, 0], [0, -28]], { w: 4, col: '#2a2a2a', pass2: false }); pop();
    human(80, 1300, 1.05, t, { body: '#c8604a', legs: '#2a2a34', hair: '#8a4a2a', face: t > EV.tdy_mush ? 'grin' : 'smile', armL: 'hold', armR: 'up', look: 0.6, seed: 13925, long: 1 }); push(80 + 82 * 1.05, 1300 - 330 * 1.05, 1); pencil([[0, 0], [0, -120]], { w: 6, col: '#c8ccd2' }); ell(0, 10, 26, 18, { wash: '#c8ccd2', washA: 1, w: 2 }); pop();
    human(1000, 1300, 0.8, t, { body: '#e8b030', legs: '#3a5a8a', hair: '#3a2a1a', face: t > EV.tdy_q ? 'shock' : 'grin', armL: 'up', armR: 'point', look: -0.6, seed: 13926, flip: -1 });
  }
  function table(t) {                                                   // стол: три миски под лампами, таблички, хлеб, сметана, лимоны
    for (let i = 0; i < 3; i++) { const x = 250 + i * 310, on = lit(t, i); pencil([[x, -400], [x, 860]], { w: 3, col: '#1a1a1a', pass2: false }); poly([[x - 90, 920], [x + 90, 920], [x + 50, 850], [x - 50, 850]], { wash: '#c8a050', washA: 1, w: 2, col: '#3a2a08' }); if (on) { glow(x, 940, 260, 'rgba(255,230,160,1)', 0.45); rays(x, 920, 1.57, 0.35, 600, 'rgba(255,240,190,1)', 0.12, 4, t); } }
    const tb = rect(-400, 1440, 1900, 800, { wash: '#6a4024', washA: 1, w: 3, col: '#1a0a04', key: 13910 }); shadeG(tb.path, 0, 1900, 0, 1440, '#2a1408', 0.45); for (let i = 0; i < 8; i++) pencil([[-400, 1470 + i * 60], [1500, 1474 + i * 60]], { w: 2, col: '#3a1a08', a: 0.5, pass2: false });
    for (let i = 0; i < 3; i++) { const x = 250 + i * 310; solyankaBowl(x, 1460, 0.7, t, { key: 13911 + i, kind: ['meat', 'fish', 'mush'][i], steam: lit(t, i) ? 1 : 0 });
      if (lit(t, i)) { const k = popK(t, [EV.tdy_meat, EV.tdy_fish, EV.tdy_mush][i], 0.35); push(x, 1640, k * 0.9); rect(-110, -30, 220, 60, { wash: ['#b8584a', '#4a7aa8', '#8a6a3a'][i], washA: 1, w: 2.4, col: '#1a0a04' }); txt(['МЯСНАЯ', 'РЫБНАЯ', 'ГРИБНАЯ'][i], 0, 12, 34, { font: 'Osw', col: '#fff4d0' }); pop(); } }
  }
  function front(t) {                                                   // передний план: доска с хлебом, лимоны, кружка
    push(-40, 1880, 1.4); rect(-160, -30, 320, 40, { wash: '#c8904a', washA: 1, w: 2.4, col: '#4a2a08' }); for (let i = 0; i < 3; i++) { push(-80 + i * 70, -40, 1, -0.2); rect(-24, -60, 48, 80, { wash: '#4a2a14', washA: 1, w: 1.6 }); rect(-20, -56, 40, 72, { wash: '#8a5a3a', washA: 1, line: false }); pop(); } pop();
    lemonSlice(1080, 1860, 60, 0.3, { flat: 0.5 }); lemonSlice(1160, 1880, 54, -0.3, { flat: 0.5 });
    motes(24, [0, 600, 1080, 1700], '#fff0d0', t, 13920, { sp: 6, sz: 4, a: 0.4, wob: 2 });
  }
  WORLD.today = (t, u, cat) => {
    lay(12, () => { room(t); haze('#ffe0b0', 0.05); });
    lay(3, () => { family(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { table(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.today = {
    outfit: 'hoodie70', light: { side: 1, rim: '#ffe0a0' }, grade: ['#ffc080', 0.06],
    act: () => [[S0.today, 'grin'], [EV.tdy_meat, 'proud'], [EV.tdy_mush, 'awe'], [EV.tdy_q, 'sideeye'], [EV.tdy_q + 0.8, 'suspicious']],
    pose: (t, u, b) => { const q = t > EV.tdy_q, side = q && t > EV.tdy_q + 0.7 ? 1 : -1; return Object.assign(b, { x: 560, y: 1640, s: 1.02, flip: q ? -side : -1, look: q ? [0.8, 0.4] : t > EV.tdy_mush ? [0.6, 0.5] : t > EV.tdy_fish ? [0, 0.6] : [-0.6, 0.5],
      hand: [180, -300], handF: [-60, -200], prop: 'spoonSP', propAng: 0.3, point: q ? 1 : undefined }); },
    cam: () => [[S0.today, 560, 900, 0.08], [EV.tdy_meat - 0.2, 560, 1300, 0.16, 'x'], [EV.tdy_q, 560, 1320, 0.2], [S1.today, 560, 1320, 0.24]]
  };
  // ---------------------------------------------------------------- переход: крышка кастрюли подпрыгивает и переворачивается
  TRANS_IN.today = { a: 0.3, b: 0.4, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), sy = Math.abs(Math.cos(e * Math.PI)), up = Math.sin(e * Math.PI) * 300; scr(() => { ctx.fillStyle = '#1a1a1a'; ctx.fillRect(0, 0, W, H); });
    ctx.save(); ctx.setTransform(1, 0, 0, Math.max(0.02, sy), 0, 960 - 960 * Math.max(0.02, sy) - up); ctx.drawImage(e < 0.5 ? A : B, 0, 0); ctx.restore();
    if (sy < 0.3) scr(() => { const lid = ell(540, 960 - up, 560, 60 + sy * 200, { wash: '#c8ccd2', washA: 1, w: 4, col: '#3a3e44' }); metalG(lid.path, 400, 940 - up, 600, '#ffffff', '#b8bcc4', '#4a4e54'); ell(540, 900 - up, 60, 24, { wash: '#a8acb4', washA: 1, w: 2 }); });
  } };
})();
