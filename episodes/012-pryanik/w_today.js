/* 012 — `today`: «Сегодня рекордный тульский пряник весит 117 килограммов! С повидлом или со сгущёнкой?» Праздник пряника на площади у кремля: красная стена
   с башнями, растяжка «ДЕНЬ ПРЯНИКА», шарики, ряд самоваров, толпа. На длинном столе — гигантский пряник 1,8 м в глазури с узором, люди вокруг с телефонами.
   Табло весов «117 КГ». Том в худи. По словам: «рекордный» — снимают покрывало с пряника; «117 килограммов» — табло мигает, конфетти; «повидлом» — слева
   разламывается пряник с повидлом, тянется; «сгущёнкой» — справа со сгущёнкой; Том переводит взгляд — выбирай. Переход В сцену: чаша весов кренится и
   сбрасывает прошлый кадр вниз. */
(() => {
  EV.td_rec = wtw('t1', 'рекордный');
  EV.td_kg = wtw('t1', '117');
  EV.td_jam = wtw('t1', 'повидлом');
  EV.td_milk = wtw('t1', 'сгущёнкой?');
  SHAKES.push([EV.td_kg + 0.05, 0.2, 9]);
  KEYW.push('117', 'сгущёнкой?');

  function square(t) {                                                  // небо, стена кремля с башнями, растяжка, шарики, гирлянды флажков
    vgrad(-600, 1000, ['#4a9ad8', '#8ac4ec', '#e8f0f4']); for (let i = 0; i < 5; i++) { const x = ((i * 330 + t * 12) % 1800) - 300, y = 80 + (i % 3) * 100; for (let k = 0; k < 4; k++) ell(x + k * 46, y - (k % 2) * 20, 56, 30, { wash: '#ffffff', washA: 0.9, line: false }); }
    const w = rect(-400, 560, 2000, 360, { wash: '#a8442e', washA: 1, w: 2.4, col: '#3a0e06' }); for (let y = 580; y < 920; y += 30) for (let x = -400; x < 1600; x += 56) rect(x + ((y / 30) % 2) * 28, y, 54, 28, { wash: '#b8543a', washA: 0.6, w: 1, col: '#4a1408', a: 0.45 });
    for (let i = 0; i < 34; i++) { const x = -400 + i * 60; blob([[x, 560], [x + 4, 520], [x + 16, 506], [x + 28, 520], [x + 32, 560]], { wash: '#a8442e', washA: 1, w: 1.4, col: '#3a0e06' }); }
    for (const x of [60, 1020]) { push(x, 560, 1); rect(-90, -320, 180, 680, { wash: '#a8442e', washA: 1, w: 2.4, col: '#3a0e06' }); poly([[-110, -320], [0, -560], [110, -320]], { wash: '#3a6a4a', washA: 1, w: 2.4 }); rect(-24, -260, 48, 70, { wash: '#2a1a14', washA: 1, w: 1.6 }); pop(); }
    push(540, 420, 1); pencil([[-460, -40], [460, -40]], { w: 3, col: '#3a3a3a', pass2: false }); rect(-360, -30, 720, 110, { wash: '#c8221a', washA: 1, w: 3, col: '#3a0a04' }); txt('ДЕНЬ ПРЯНИКА', 0, 42, 64, { font: 'Osw', col: '#fff4d0' }); pop();
    for (let g = 0; g < 2; g++) { const P = spline([[-300, 250 + g * 120], [540, 330 + g * 120], [1400, 250 + g * 120]], false, 16); pencil(P, { w: 2, col: '#3a3a3a', pass2: false }); for (let i = 1; i < P.length - 1; i++) { const [x, y] = P[i]; poly([[x - 22, y], [x + 22, y], [x + Math.sin(t * 3 + i) * 3, y + 56]], { wash: ['#c8221a', '#e8b030', '#2a5ab8', '#3a8a3a'][i % 4], washA: 1, w: 1, col: '#3a3a3a' }); } }
    for (const [x, c] of [[160, '#d9282a'], [260, '#e8b030'], [880, '#2a5ab8'], [960, '#3a8a3a']]) { const y = 600 + Math.sin(t * 1.5 + x) * 20; ell(x, y, 40, 50, { wash: c, washA: 1, w: 2, col: '#2a2a2a' }); glow(x - 14, y - 18, 14, 'rgba(255,255,255,1)', 0.6); pencil([[x, y + 50], [x + 10, y + 300]], { w: 1.6, col: '#5a5a5a', pass2: false }); }
  }
  function crowd(t) { const r = rng(13000); for (let i = 0; i < 9; i++) { const x = -260 + i * 180 + (i % 2) * 30, ex = t > EV.td_kg; human(x, 1180 + (i % 2) * 20, 1.15, t, { body: ['#c8221a', '#2a5ab8', '#f4f0e6', '#3a8a3a', '#e8b030'][i % 5], legs: '#2a2a3a', hair: ['#3a2a1a', '#d8b060', '#1a1a1a'][i % 3], face: ex ? 'grin' : 'smile', armL: ex ? 'wave' : 'hold', armR: i % 3 === 0 ? 'up' : ex ? 'up' : 'hold', prop: i % 3 === 0 ? 'phone' : undefined, look: (540 - x) / 900, seed: 13001 + i, long: i % 4 === 1, flip: x > 540 ? -1 : 1 }); } }
  function hero(t) {                                                    // гигантский пряник на столе: покрывало слетает; табло весов; самовары
    const tb = rect(-200, 1300, 1480, 60, { wash: '#f4ecd8', washA: 1, w: 2.4, col: '#5a4a3a', key: 13010 }); rect(-200, 1360, 1480, 160, { wash: '#efe2c8', washA: 1, w: 2, col: '#5a4a3a' }); for (let i = 0; i < 22; i++) txt('✿', -180 + i * 68, 1400, 26, { col: '#c8221a' });
    push(540, 1150, 1); rect(-560, 0, 1120, 160, { wash: '#6a3a18', washA: 1, w: 2, col: '#1a0a04' }); ctx.save(); ctx.scale(1, 0.6); pryanikTop(0, -300, 1100, 560, { key: 13011, text: 'ТУЛА · 2019' }); ctx.restore(); const side = rect(-550, -12, 1100, 26, { wash: PK.doughD, washA: 1, w: 2, col: '#3a1a06' });
      const cv = clamp((t - EV.td_rec) / 0.5); if (cv < 1) { push(cv * 700, -150 - cv * 400, 1, cv * 0.8); const c = shape(spline([[-580, 20], [-560, -300], [0, -330], [560, -300], [580, 20]], true, 8), { wash: '#a8282a', washA: 1, w: 3, col: '#3a0a04' }); for (let i = 0; i < 6; i++) pencil([[-500 + i * 200, -300], [-480 + i * 200, 10]], { w: 3, col: '#6a0a0a', a: 0.5, pass2: false }); pop(); } pop();
    for (const x of [-120, 1200]) samovar(x, 1310, 1.0, t);
    push(540, 760, 1); rect(-190, -80, 380, 130, { wash: '#1a1a20', washA: 1, w: 4, col: '#c8a050' }); const on = t > EV.td_kg, blink = on && Math.sin(t * 14) > -0.3; txt(on ? '117 КГ' : '— — —', 0, 26, 86, { font: 'Osw', col: blink ? '#ffe070' : '#6a6a4a' }); if (blink) glow(0, 0, 260, 'rgba(255,220,100,1)', 0.3); txt('1,8 × 1,18 м', 0, -50, 24, { font: 'Osw', col: '#f4e6c8' }); pop();
    if (t > EV.td_kg) { const r = rng(13012); for (let i = 0; i < 50; i++) { const q = t - EV.td_kg - r() * 0.3; if (q < 0) continue; const x = 540 + (r() - 0.5) * 1100 + Math.sin(q * 4 + i) * 30, y = 600 + q * 520 + r() * 200; push(x, y, 1, q * 6 + i); rect(-8, -4, 16, 8, { wash: ['#c8221a', '#ffd04a', '#2a5ab8', '#ffffff'][i % 4], washA: 1, line: false }); pop(); } }
  }
  function choice(t) {                                                  // два разлома: повидло слева, сгущёнка справа
    if (t > EV.td_jam - 0.15) { const k = sm(clamp((t - EV.td_jam + 0.15) / 0.5)); pryanikHalf(200, 1680, 1.4, t, { open: k, key: 13020 }); bubbleTag('ПОВИДЛО', 220, 1540, t, EV.td_jam + 0.1, '#a8282a', 50, -0.06); }
    if (t > EV.td_milk - 0.15) { const k = sm(clamp((t - EV.td_milk + 0.15) / 0.5)); pryanikHalf(900, 1680, 1.4, t, { open: k, milk: 1, key: 13021 }); bubbleTag('СГУЩЁНКА', 860, 1540, t, EV.td_milk + 0.1, '#c8a050', 50, 0.05); }
  }
  function front(t) {                                                   // передний план: чашка чая в подстаканнике, связка баранок, край скатерти
    const tc = rect(-400, 1740, 2000, 500, { wash: '#f4ecd8', washA: 1, w: 2.4, col: '#5a4a3a' }); for (let i = 0; i < 28; i++) txt('✿', -380 + i * 70, 1790, 30, { col: '#c8221a' }); pencil([[-400, 1820], [1600, 1820]], { w: 6, col: '#c8221a', pass2: false });
    baranki(-40, 1500, 1.4); push(1150, 1760, 1.5); const g = rect(-34, -120, 68, 110, { wash: '#a8441a', washA: 0.85, w: 1.6, col: '#3a1a08' }); const ph = shape([[-40, -80], [40, -80], [36, 0], [-36, 0]], { wash: '#c8a050', washA: 1, w: 2, col: '#4a2a08' }); metalG(ph.path, -10, -40, 50, '#fff0c0', '#c8a050', '#6a4a10'); pencil(spline([[40, -70], [64, -50], [40, -16]], false, 4), { w: 6, col: '#c8a050', pass2: false }); for (let i = 0; i < 2; i++) { const q = (t * 0.5 + i / 2) % 1; pencil(spline([[0, -126], [Math.sin(q * 6) * 14, -126 - q * 80], [0, -126 - q * 150]], false, 5), { w: 5, col: '#ffffff', a: 0.3 * (1 - q), pass2: false }); } pop();
    motes(20, [0, 400, 1080, 1700], '#fff8d0', t, 13030, { sp: 6, sz: 4, a: 0.4, wob: 2 }); rays(900, -200, 2.0, 0.4, 2200, 'rgba(255,248,220,1)', 0.12, 6, t); glow(540, 1100, 500, 'rgba(255,230,170,1)', 0.15); haze('#fff4e0', 0.04);
  }
  WORLD.today = (t, u, cat) => {
    lay(14, () => { square(t); haze('#e8f0f4', 0.08); });
    lay(3.6, () => { crowd(t); });
    lay(1.4, () => { hero(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { choice(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.today = {
    outfit: 'hoodie70', light: { side: 1, rim: '#fff4d0' }, grade: ['#ffe8b0', 0.04],
    act: () => [[S0.today, 'grin'], [EV.td_rec, 'awe'], [EV.td_kg, 'shock'], [EV.td_kg + 0.5, 'laugh'], [EV.td_jam, 'sideeye'], [EV.td_milk, 'suspicious']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1820, s: 0.98, flip: t > EV.td_milk ? 1 : -1, look: t > EV.td_milk ? [0.8, 0.3] : t > EV.td_jam ? [-0.8, 0.3] : [0, -0.4], tailUp: t > EV.td_kg,
      hand: t < EV.td_jam ? [180, -330] : [150, -280], handF: t < EV.td_jam ? [-180, -330] : [-60, -360], point: t > EV.td_jam ? 1 : undefined }),
    cam: () => [[S0.today, 560, 900, 0.06], [EV.td_rec, 560, 1050, 0.1, 'x'], [EV.td_kg, 560, 1080, 0.12], [EV.td_jam, 560, 1260, 0.16], [S1.today, 560, 1270, 0.2]]
  };
  // ---------------------------------------------------------------- переход: чаша весов кренится и сбрасывает прошлый кадр вниз
  TRANS_IN.today = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k); drawBuf(B, 1, 540, 960); ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.translate(540, 300 + e * e * 1900); ctx.rotate(e * 0.5); ctx.scale(0.85, 0.85); ctx.drawImage(A, -540, -300); ctx.restore();
    scr(() => { push(540, 280 + e * 200, 1, e * 0.5); const pan = ell(0, 0, 640, 60, { wash: '#d8b060', washA: 1, w: 6, col: '#5a3a08' }); metalG(pan.path, -200, -20, 700, '#fff0c0', '#d8b060', '#7a5010'); pop(); });
  } };
})();
