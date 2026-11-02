/* 011 — `istanbul` ★: «Вот он, прадед: османская баклава! Слои тонкого теста, орехи и мёд.» Дворцовая кухня Стамбула XVI в.: ряд куполов с трубами и световыми
   окнами-«глазами», изникские изразцы (тюльпаны, гвоздики), очаг с медными котлами, листы теста-юфки сушатся на шестах, повар раскатывает лист длинной скалкой-оклавой,
   мешки фисташек и орехов, кувшины мёда. В арке — Босфор с минаретами, лодками и чайками. Том — османский повар (красный халат + тюрбан) с подносом баклавы.
   По словам: «прадед» — золотые лучи, родословная: баклава → (стрелка) → штрудель «правнук»; «баклава!» — ценник; «Слои» — ромбик приподнимается, видны слои;
   «орехи» — сыплются фисташки; «мёд» — мёд льётся из кувшина, поднос сияет. Переход В сцену: изникский изразец поворачивается ребром и открывает новый кадр. */
(() => {
  EV.is_gg = wtw('s7', 'прадед:');
  EV.is_bk = wtw('s7', 'баклава!');
  EV.is_lay = wtw('s7', 'Слои');
  EV.is_nut = wtw('s7', 'орехи');
  EV.is_hon = wtw('s7', 'мёд.');
  SHAKES.push([EV.is_bk + 0.05, 0.25, 12]);
  KEYW.push('прадед:', 'баклава!');
  const tile = (x, y, s, k) => { push(x, y, s); rect(-40, -40, 80, 80, { wash: '#f4f6f8', washA: 1, w: 1.4, col: '#2a4a8a', a: 0.6 }); blob([[0, 30], [-12, 0], [-8, -26], [0, -14], [8, -26], [12, 0]], { wash: k % 2 ? '#c8221a' : '#2a5ab8', washA: 1, w: 1, col: '#1a2a5a' }); for (const sd of [-1, 1]) blob([[0, 30], [sd * 24, 10], [sd * 30, 26]], { wash: '#2a8a6a', washA: 1, w: 1, col: '#0a3a2a' }); for (const [cx, cy] of [[-40, -40], [40, -40], [-40, 40], [40, 40]]) ell(cx, cy, 10, 10, { wash: '#2a5ab8', washA: 1, line: false }); pop(); };

  function bosphorus(t) {                                               // в арке: Босфор, минареты, лодки, чайки
    vgrad(-300, 900, ['#f0b878', '#f8d8a8', '#9ac8e0']); glow(300, 200, 260, 'rgba(255,220,150,1)', 0.5);
    for (const [x, h] of [[-80, 360], [140, 420], [420, 380]]) { rect(x - 10, 600 - h, 20, h, { wash: '#efe6d4', washA: 1, w: 1.4, col: '#7a6a5a' }); poly([[x - 14, 600 - h], [x, 540 - h], [x + 14, 600 - h]], { wash: '#6a8aa0', washA: 1, w: 1.2 }); rect(x - 16, 640 - h, 32, 10, { wash: '#efe6d4', washA: 1, w: 1 }); }
    push(260, 600, 1); blob([[-180, 0], [-160, -80], [-80, -150], [0, -170], [80, -150], [160, -80], [180, 0]], { wash: '#8aa0b0', washA: 1, w: 1.6, col: '#3a4a5a' }); rect(-200, 0, 400, 60, { wash: '#e8dcc8', washA: 1, w: 1.6 }); for (let i = 0; i < 4; i++) blob([[-180 + i * 110, 0], [-160 + i * 110, -40], [-120 + i * 110, -50], [-90 + i * 110, -40], [-70 + i * 110, 0]], { wash: '#8aa0b0', washA: 1, w: 1.2 }); pop();
    const w = rect(-300, 660, 1000, 300, { wash: '#3a7aa8', washA: 1, w: 1.6, col: '#1a3a5a' }); for (let i = 0; i < 10; i++) pencil([[-260 + i * 90 + (t * 26) % 90, 700 + (i % 3) * 50], [-220 + i * 90 + (t * 26) % 90, 700 + (i % 3) * 50]], { w: 2, col: '#e0f0ff', a: 0.7, pass2: false });
    push(120 + Math.sin(t * 0.4) * 40, 720, 1); shape([[-80, 0], [80, 0], [60, 24], [-60, 24]], { wash: '#6a3a1a', washA: 1, w: 1.6 }); pencil([[0, 0], [0, -110]], { w: 3, col: '#3a2a1a' }); poly([[0, -110], [60, -20], [0, -20]], { wash: '#f4ecd8', washA: 1, w: 1.2 }); pop();
    for (let i = 0; i < 4; i++) { const x = ((t * 60 + i * 180) % 900) - 200, y = 260 + Math.sin(t * 2 + i) * 30 + i * 30; pencil([[x - 18, y], [x, y - 8], [x + 18, y]], { w: 3, col: '#3a3a3a', pass2: false }); }
  }
  function kitchen(t) {                                                 // купола со световыми окнами, изразцы, арка на Босфор, очаг с медью, тесто на шестах
    vgrad(-900, 1500, ['#5a3a24', '#a87a4a', '#d8b888']);
    for (const x of [-200, 300, 800, 1300]) { const d = blob([[x - 260, -200], [x - 230, -500], [x - 120, -680], [x, -720], [x + 120, -680], [x + 230, -500], [x + 260, -200]], { wash: '#c8a478', washA: 1, w: 3, col: '#3a2410' }); shadeG(d.path, x + 260, 0, x - 100, 0, '#6a4a2a', 0.5);
      ell(x, -620, 40, 22, { wash: '#fff4d8', washA: 1, w: 2 }); glow(x, -600, 200, 'rgba(255,240,200,1)', 0.45); rays(x, -600, 1.57, 0.12, 1600, 'rgba(255,240,200,1)', 0.08, 3, t); for (let i = 0; i < 4; i++) pencil(spline([[x - 240 + i * 20, -220], [x - 120 + i * 30, -620 + i * 20], [x, -700]], false, 6), { w: 1.6, col: '#8a6a4a', a: 0.4, pass2: false }); }
    rect(-400, -200, 2000, 40, { wash: '#8a6a4a', washA: 1, w: 2, col: '#3a2410' });
    for (let y = -150; y < 1000; y += 80) for (let x = -400; x < 1600; x += 80) { if (x > 300 && x < 780 && y > 0 && y < 800) continue; tile(x + 40, y + 40, 1, (x + y) / 80); }
    push(540, 820, 1); const ar = shape([[-240, 0], [-240, -520], ...Array.from({ length: 15 }, (_, i) => [Math.cos(Math.PI + i / 14 * Math.PI) * 240, -520 + Math.sin(Math.PI + i / 14 * Math.PI) * 220]), [240, -520], [240, 0]], { wash: '#9ac8e0', washA: 1, w: 8, col: '#2a4a8a', key: 11900 });
      ctx.save(); ctx.clip(ar.path); push(-300, -900, 1); bosphorus(t); pop(); ctx.restore(); for (let i = 0; i < 9; i++) pencil([[-240 + i * 60, -760], [-240 + i * 60, 0]], { w: 3, col: '#2a3a5a', a: 0.4, pass2: false }); pop();
    for (let i = 0; i < 3; i++) { const y = 260 + i * 120; pencil([[-300, y], [260, y + 10]], { w: 8, col: '#6a4a2a' }); for (let k = 0; k < 4; k++) { const x = -260 + k * 130; const sh = shape(spline([[x, y], [x + 110, y + 4], [x + 104 + Math.sin(t + k + i) * 6, y + 90], [x + 6 + Math.sin(t + k) * 4, y + 96]], true, 6), { wash: '#f6e6c0', washA: 0.75, w: 1.4, col: '#c8a878' }); } }
  }
  function hearth(t) {                                                  // очаг с медными котлами и огнём справа
    push(1080, 1260, 1); rect(-260, -420, 520, 420, { wash: '#6a4a2a', washA: 1, w: 3, col: '#1a0a04' }); rect(-220, -260, 440, 260, { wash: '#1a0a04', washA: 1, w: 2 });
    for (let i = 0; i < 6; i++) { const f = Math.sin(t * 9 + i) * 14; blob([[-180 + i * 70, 0], [-190 + i * 70, -80 - f], [-160 + i * 70, -150 - f * 2], [-150 + i * 70, -80], [-130 + i * 70, 0]], { wash: i % 2 ? '#ff8a2a' : '#ffd04a', washA: 0.9, line: false }); } glow(0, -100, 340, 'rgba(255,130,40,1)', 0.55);
    for (const x of [-120, 110]) { const c = blob([[x - 100, -160], [x - 110, -260], [x - 80, -320], [x + 80, -320], [x + 110, -260], [x + 100, -160]], { wash: '#c8743a', washA: 1, w: 2.6, col: '#3a1a08' }); metalG(c.path, x - 30, -280, 140, '#ffc890', '#c8743a', '#5a2a0a'); ell(x, -320, 80, 16, { wash: '#4a2a14', washA: 1, w: 2 });
      for (let i = 0; i < 3; i++) { const q = (t * 0.4 + i / 3 + x) % 1; pencil(spline([[x, -330], [x + Math.sin(q * 6) * 30, -330 - q * 200], [x + Math.sin(q * 9) * 40, -330 - q * 380]], false, 5), { w: 14, col: '#ffffff', a: 0.25 * (1 - q), pass2: false }); } } pop();
  }
  function cooks(t) {                                                   // повара в высоких колпаках: один раскатывает юфку оклавой, другой несёт мешок, третий у очага
    human(-40, 1300, 1.12, t, { body: '#f4efe2', bodyD: '#b8b0a0', belt: '#a8282a', legs: '#2a5ab8', hair: '#1a1a1a', beard: 'short', face: t > EV.is_bk ? 'grin' : 'calm', armL: 'hold', armR: 'hold', look: 0.4, seed: 91, long: 1 }); turban20(-40, 1300, 1.12, '#f4efe2', 1, 1);
    push(-40, 1300 - 250, 1); pencil([[-180, Math.sin(t * 6) * 6], [180, Math.sin(t * 6) * 6]], { w: 10, col: '#c8a060' }); pop(); push(-40, 1240, 1); const sh = ell(0, 0, 200, 30, { wash: '#f6e6c0', washA: 0.85, w: 1.6, col: '#c8a878' }); pop();
    human(860, 1290, 1.1, t, { body: '#2a6a5a', trim: '#e8c060', legs: '#3a2a1a', hair: '#1a1a1a', beard: 'long', face: t > EV.is_gg ? 'smile' : 'calm', armL: 'up', armR: 'hold', look: -0.5, seed: 92, flip: -1, long: 1 }); turban20(860, 1290, 1.1, '#f4efe2', -1, 0);
    push(860 + 70, 1290 - 420, 1); const sk = blob([[-60, 0], [-70, -90], [-40, -130], [40, -130], [70, -90], [60, 0]], { wash: '#c8b088', washA: 1, w: 2, col: '#4a3a1a' }); for (let i = 0; i < 8; i++) ell(-30 + (i % 4) * 20, -130 - Math.floor(i / 4) * 12, 8, 6, { wash: '#7aa83a', washA: 1, w: 1 }); pop();
  }
  function counter(t) {                                                 // стол: поднос баклавы (герой), фисташки, орехи, кувшин мёда, родословная
    const tb = poly([[-200, 1440], [1280, 1440], [1400, 1600], [-320, 1600]], { wash: '#6a4424', washA: 1, w: 2.4, col: '#1a0a04', key: 11910 }); poly([[-320, 1600], [1400, 1600], [1400, 2100], [-320, 2100]], { wash: '#4a2c18', washA: 1, w: 2.4, col: '#1a0a04' });
    for (let i = 0; i < 9; i++) tile(-260 + i * 180, 1760, 1.6, i);
    baklavaTray(470, 1500, 1.25, t, { key: 11911 });
    if (t > EV.is_lay - 0.1) { const k = sm(clamp((t - EV.is_lay + 0.1) / 0.4)); push(620, 1430 - k * 120, 1.8, -0.2 * k); poly([[0, -26], [30, 0], [0, 26], [-30, 0]], { wash: '#e8a848', washA: 1, w: 2, col: '#5a2a08' }); for (let q = 0; q < 7; q++) pencil([[-30, 4 + q * 4], [30, 4 + q * 4]], { w: 1.4, col: q % 2 ? '#f8dca0' : '#b8742a', pass2: false }); poly([[-30, 0], [30, 0], [30, 30], [-30, 30]], { wash: '#f0c070', washA: 0.4, w: 1, col: '#5a2a08' }); ell(0, -2, 7, 5, { wash: '#7aa83a', washA: 1, w: 1 }); pop(); if (k > 0.6) note('слой за слоем', 250, 1330, t, EV.is_lay + 0.2, S1.istanbul, '#fff4d0', 46, -0.05); }
    if (t > EV.is_nut - 0.1) { const r = rng(11912); for (let i = 0; i < 30; i++) { const t0 = EV.is_nut + r() * 0.4, q = t - t0; if (q < 0) continue; const x = 300 + r() * 360, y = Math.min(1480 + r() * 40, 900 + q * q * 2200); ell(x, y, 8, 6, { wash: i % 3 ? '#7aa83a' : '#a8743a', washA: 1, w: 1, col: '#2a3a0a' }); } }
    push(940, 1440, 1); const j = shape(spline([[-60, 0], [-80, -110], [-50, -190], [50, -190], [80, -110], [60, 0]], true, 6), { wash: '#c8a050', washA: 1, w: 2.4, col: '#4a2a08' }); shadeG(j.path, 60, 0, -40, 0, '#6a4a10', 0.45); for (let i = 0; i < 6; i++) tile(-40 + (i % 3) * 40, -120 + Math.floor(i / 3) * 40, 0.25, i); ell(0, -190, 50, 12, { wash: '#f0a830', washA: 1, w: 2 }); pop();
    if (t > EV.is_hon - 0.2) { const k = clamp((t - EV.is_hon + 0.2) / 0.4); push(180, 1150, 1, 0.6 * k); const j2 = shape(spline([[-50, 60], [-60, -40], [-30, -100], [30, -100], [60, -40], [50, 60]], true, 6), { wash: '#c8a050', washA: 1, w: 2.4, col: '#4a2a08' }); pop();
      if (k > 0.6) { pencil(spline([[240, 1110], [300, 1250], [380, 1440]], false, 6), { w: 14, col: '#f0a830', a: 0.9, pass2: false }); glow(420, 1450, 200, 'rgba(255,200,80,1)', 0.5); } }
    push(1100, 1440, 1); for (let i = 0; i < 10; i++) ell(-50 + (i % 5) * 22, -10 - Math.floor(i / 5) * 16, 12, 9, { wash: '#a8743a', washA: 1, w: 1.2, col: '#4a2a08' }); ell(0, 0, 70, 18, { wash: '#b86a2a', washA: 1, w: 2 }); pop();
    if (t > EV.is_gg) { const k = clamp((t - EV.is_gg) / 0.5); rays(470, 1440, -1.57, 2.8, 900, 'rgba(255,220,130,1)', 0.22 * k, 12, t); glow(470, 1440, 380, 'rgba(255,220,130,1)', 0.35 * k);
      if (t < EV.is_bk) { push(470, 1220, popK(t, EV.is_gg + 0.1, 0.4)); rect(-170, -60, 340, 120, { wash: '#f4ecd8', washA: 1, w: 3, col: '#5a3a1a' }); txt('ПРАДЕД', 0, -18, 40, { font: 'Osw', col: '#a8221a' }); txt('баклава · XVI в.', 0, 30, 26, { font: 'Hand', col: '#3a2a1a' }); pop(); }
      push(760, 960, popK(t, EV.is_gg + 0.4, 0.4) * 0.8); rect(-150, -80, 300, 160, { wash: '#f4ecd8', washA: 1, w: 3, col: '#5a3a1a' }); strudel(0, 10, 0.3, t, { key: 11913, len: 200 }); txt('правнук', 0, -48, 26, { font: 'Hand', col: '#3a2a1a' }); pop();
      if (k > 0.8) pencil(spline([[600, 1180], [620, 1060], [660, 1000]], false, 6), { w: 5, col: '#a8221a', a: 0.9, pass2: false }); }
    if (t > EV.is_bk) bubbleTag('БАКЛАВА!', 520, 1260, t, EV.is_bk, '#2a5ab8', 64, -0.05);
  }
  function front(t) {                                                   // передний план: резная деревянная решётка-машрабия слева, медный ковш на крюке справа, пар
    push(-140, 900, 1.6); rect(-120, -900, 240, 1800, { wash: '#4a2814', washA: 1, w: 3, col: '#140804' }); for (let y = -860; y < 880; y += 60) for (let x = -100; x < 100; x += 60) ell(x + 30, y + 30, 18, 18, { wash: '#2a1408', washA: 1, w: 1.6, col: '#140804' }); pop();
    push(1200, 600, 1.5); pencil([[0, -700], [0, 0]], { w: 6, col: '#3a2a1a' }); const l = ell(0, 60, 80, 70, { wash: '#c8743a', washA: 1, w: 2.6, col: '#3a1a08' }); metalG(l.path, -20, 40, 90, '#ffc890', '#c8743a', '#5a2a0a'); pop();
    motes(36, [0, 400, 1080, 1800], '#ffe8b0', t, 11920, { sp: 10, sz: 4, a: 0.5, wob: 2 });
  }
  WORLD.istanbul = (t, u, cat) => {
    lay(12, () => { kitchen(t); haze('#ffd8a0', 0.08); });
    lay(4, () => { hearth(t); });
    lay(2.6, () => { cooks(t); haze('#ffd8a0', 0.04); });
    lay(1, () => { cat(); });
    lay(0.95, () => { counter(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.istanbul = {
    outfit: 'ottomanA', light: { side: 1, rim: '#ffd890' }, grade: ['#ffb060', 0.12],
    act: () => [[S0.istanbul, 'proud'], [EV.is_gg, 'awe'], [EV.is_bk, 'laugh'], [EV.is_lay, 'proud'], [EV.is_hon, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 740, y: 1580, s: 1.05, flip: -1, look: t < EV.is_gg ? [0.2, -0.2] : [-0.6, 0.5], tailUp: t > EV.is_bk,
      hand: t > EV.is_bk ? [260, -200] : [140, -200], handF: t > EV.is_gg ? [-120, -420] : [-90, -200], point: t > EV.is_bk && t < EV.is_hon ? 1 : undefined }),
    cam: () => [[S0.istanbul, 580, 700, 0.06], [EV.is_gg - 0.2, 580, 1060, 0.12, 'x'], [EV.is_bk, 580, 1280, 0.24], [EV.is_lay, 600, 1300, 0.28], [EV.is_hon, 580, 1300, 0.24], [S1.istanbul, 590, 1280, 0.28]]
  };
  // ---------------------------------------------------------------- переход: изразец поворачивается ребром
  TRANS_IN.istanbul = { a: 0.3, b: 0.4, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), c = Math.cos(e * Math.PI), q = Math.max(0.02, Math.abs(c));
    scr(() => { ctx.fillStyle = '#1a2a5a'; ctx.fillRect(0, 0, W, H); for (let y = 0; y < H; y += 120) for (let x = 0; x < W; x += 120) { ctx.globalAlpha = 0.3; ctx.fillStyle = (x + y) / 120 % 2 ? '#2a5ab8' : '#c8221a'; ctx.beginPath(); ctx.arc(x + 60, y + 60, 24, 0, 6.283); ctx.fill(); ctx.globalAlpha = 1; } });
    ctx.save(); ctx.setTransform(q * 0.9, 0, 0, 0.9, 540 * (1 - q * 0.9), 96); ctx.drawImage(e < 0.5 ? A : B, 0, 0); ctx.restore();
    scr(() => { ctx.strokeStyle = '#f4f6f8'; ctx.lineWidth = 14; ctx.strokeRect(540 - 540 * q * 0.9, 96, 1080 * q * 0.9, 1728); });
  } };
})();
