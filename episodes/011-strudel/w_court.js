/* 011 — `court`: «Говорят, его обожала императрица Мария Терезия. А в XVIII веке пришли яблоки.» Большая галерея дворца: белые стены с золотой лепниной-рокайлем,
   высокие окна в парк (партер, фонтан, глориетта на холме), плафон с облаками, хрустальные люстры, зеркала, наборный паркет. Портрет императрицы в огромной раме,
   дамы в широких платьях-панье, кавалер в парике, лакей в ливрее, банкетный стол с серебром. Том — придворный кондитер в голубом камзоле и парике — несёт штрудель.
   По словам: «императрица» — портрет вспыхивает лучами; «Мария Терезия» — дамы делают реверанс; «яблоки» — из корзины на стол катятся яблоки, ценник «+ ЯБЛОКИ».
   Переход В сцену: сахарная пудра сквозь сито — круг сита опускается, мелкая сетка, пудра осыпается и открывает дворец. */
(() => {
  EV.ct_emp = wtw('s2', 'императрица');
  EV.ct_mt = wtw('s2', 'Мария');
  EV.ct_cent = wtw('s2', 'XVIII');
  EV.ct_app = wtw('s2', 'яблоки.');
  SHAKES.push([EV.ct_app + 0.15, 0.2, 8]);
  KEYW.push('императрица', 'яблоки.');

  function park(t) {                                                    // вид в окнах: партер, фонтан, глориетта на холме, небо
    vgrad(-200, 1000, ['#8ab8e0', '#c8e0f0', '#f0e8d0']); for (let i = 0; i < 4; i++) ell(((i * 330 + t * 10) % 1500) - 200, 120 + (i % 2) * 70, 90, 30, { wash: '#ffffff', washA: 0.8, line: false });
    shape(spline([[-300, 700], [200, 520], [540, 480], [900, 520], [1400, 700], [1400, 1000], [-300, 1000]], true, 8), { wash: '#7aa85a', washA: 1, w: 1.6, col: '#3a5a2a' });
    push(540, 520, 1); rect(-150, -60, 300, 60, { wash: '#f0ece0', washA: 1, w: 1.6, col: '#6a6a5a' }); for (let i = 0; i < 7; i++) { ell(-120 + i * 40, -40, 12, 22, { wash: '#8ab8e0', washA: 1, w: 1 }); } poly([[-80, -60], [0, -110], [80, -60]], { wash: '#f0ece0', washA: 1, w: 1.4 }); txt('♛', 0, -112, 24, { col: '#c8a050' }); pop();
    for (let i = 0; i < 12; i++) { const x = -200 + i * 130; ell(x, 760, 30, 50, { wash: '#3a6a2a', washA: 1, w: 1.4, col: '#1a3a0a' }); }
    const pt = shape([[-300, 820], [1400, 820], [1400, 1000], [-300, 1000]], { wash: '#d8c8a0', washA: 1, w: 1.4, col: '#8a7a5a' }); for (let i = 0; i < 6; i++) blob([[-200 + i * 260, 880], [-120 + i * 260, 850], [-40 + i * 260, 880], [-120 + i * 260, 910]], { wash: '#5a8a3a', washA: 1, w: 1.2, col: '#2a4a1a' });
    push(540, 900, 1); ell(0, 0, 90, 20, { wash: '#9ac8e0', washA: 1, w: 1.6 }); for (let i = 0; i < 5; i++) { const k = (t * 1.5 + i / 5) % 1; pencil(spline([[0, -10], [(i - 2) * 30 * k, -90 + 60 * k * k], [(i - 2) * 40 * k, -10 + 40 * k]], false, 5), { w: 3, col: '#e8f4ff', a: 0.8 * (1 - k), pass2: false }); } pop();
  }
  function hall(t) {                                                    // белые стены, золотые завитки, окна, зеркала, плафон, портрет
    vgrad(-800, 1500, ['#e8d8b8', '#f6f0e2', '#efe6d0']);
    const pl = rect(-400, -800, 2000, 420, { wash: '#a8c8e8', washA: 1, w: 2, col: '#8a6a3a', key: 11400 }); for (let i = 0; i < 6; i++) ell(-200 + i * 300, -620 + (i % 2) * 60, 140, 50, { wash: '#fff4e8', washA: 0.8, line: false }); for (let i = 0; i < 4; i++) { const x = -100 + i * 380; human(x, -440, 0.6, t, { body: '#f0c8c8', long: 1, face: 'smile', armL: 'up', armR: 'wave', seed: 120 + i, hair: '#e8c060' }); }
    pencil([[-400, -380], [1600, -380]], { w: 14, col: '#d6a842' });
    for (const x of [-180, 300, 780, 1260]) { const fr = shape([[x - 110, 940], ...Array.from({ length: 13 }, (_, i) => [x + Math.cos(Math.PI + i / 12 * Math.PI) * 110, 120 + Math.sin(Math.PI + i / 12 * Math.PI) * 110]), [x + 110, 940]], { wash: '#c8e0f0', washA: 1, w: 4, col: '#c8a050', key: 11401 + x });
      if (x !== 780) { ctx.save(); ctx.clip(fr.path); park(t); ctx.restore(); for (let i = 1; i < 4; i++) pencil([[x - 110, 120 + i * 205], [x + 110, 120 + i * 205]], { w: 3, col: '#f0e8d8', pass2: false }); pencil([[x, 20], [x, 940]], { w: 3, col: '#f0e8d8', pass2: false }); }
      else { ctx.save(); ctx.clip(fr.path); vgrad(0, 940, ['#c8b898', '#e8dcc0']); ctx.restore(); }
      for (let i = 0; i < 4; i++) { const a = -0.6 + i * 0.4; pencil(spline([[x + Math.cos(a - 1.57) * 120, -40], [x + Math.cos(a - 1.57) * 160, -80], [x + Math.cos(a - 1.57) * 140, -120]], false, 5), { w: 5, col: '#d6a842', pass2: false }); }
      ell(x, -60, 20, 26, { wash: '#d6a842', washA: 1, w: 1.6, col: '#6a4a08' }); }
    // портрет императрицы на месте третьего окна
    push(780, 470, 1); const pf = rect(-150, -380, 300, 440, { wash: '#d6a842', washA: 1, w: 3, col: '#5a3a08', key: 11410 }); metalG(pf.path, -60, -200, 360, '#ffe8a0', '#c89a3a', '#6a4a10');
      const pc = rect(-120, -350, 240, 380, { wash: '#4a3a3a', washA: 1, w: 2, col: '#3a2a1a', key: 11411 }); ctx.save(); ctx.clip(pc.path); vgrad(-350, 30, ['#3a2a3a', '#6a4a4a']); human(0, 120, 1.0, t, { body: '#e8b8c8', bodyD: '#a87888', long: 1, hair: '#d8c8a8', face: t > EV.ct_mt ? 'smile' : 'calm', armL: 'hold', armR: 'hold', seed: 111 }); hat20(0, 120, 1.0, 'cloche', '#e8e0d0'); push(0, 120 - 330, 1); rect(-30, -20, 60, 18, { wash: '#d6a842', washA: 1, w: 1.4 }); for (let i = 0; i < 5; i++) poly([[-30 + i * 15, -20], [-23 + i * 15, -40], [-16 + i * 15, -20]], { wash: '#d6a842', washA: 1, w: 1 }); pop(); ctx.restore();
      rect(-60, 70, 120, 28, { wash: '#d6a842', washA: 1, w: 1.6, col: '#5a3a08' }); txt('M. THERESIA', 0, 88, 16, { font: 'Osw', col: '#3a1a08' });
      if (t > EV.ct_emp) { const g = clamp((t - EV.ct_emp) / 0.4); rays(0, -150, -1.57, 3.2, 600, 'rgba(255,230,160,1)', 0.18 * g, 10, t); glow(0, -150, 300, 'rgba(255,230,160,1)', 0.35 * g); } pop();
    for (const x of [60, 540, 1020]) { push(x, 520, 1); const pn = rect(-90, -330, 180, 640, { wash: '#f8f2e4', washA: 1, w: 3, col: '#c8a050', key: 11405 + x }); shadeG(pn.path, 90, 0, -90, 0, '#e0d4b8', 0.4);
      for (const [cx, cy] of [[-90, -330], [90, -330], [-90, 310], [90, 310]]) { pencil(spline([[cx, cy], [cx * 0.6, cy * 0.9], [cx * 0.7, cy * 0.75], [cx * 0.9, cy * 0.8]], false, 5), { w: 5, col: '#d6a842', pass2: false }); ell(cx, cy, 10, 10, { wash: '#d6a842', washA: 1, w: 1.4, col: '#6a4a08' }); }
      const mo = ell(0, -80, 60, 90, { wash: '#a8b8c0', washA: 1, w: 6, col: '#d6a842' }); ctx.save(); ctx.clip(mo.path); vgrad(-170, 10, ['#c8d0d0', '#8a9aa0']); glow(-20, -120, 30, 'rgba(255,255,255,1)', 0.6); ctx.restore(); candle(-60, 120, 0.7, t, x); candle(60, 120, 0.7, t, x + 1); pencil(spline([[-80, 130], [0, 100], [80, 130]], false, 5), { w: 6, col: '#d6a842', pass2: false });
      for (let i = 0; i < 5; i++) txt('❦', -60 + i * 30, 250, 26, { col: '#d6a842', a: 0.8 }); pop(); }
    for (let i = 0; i < 9; i++) { const x = -300 + i * 240; rect(x - 10, 940, 20, 60, { wash: '#d6a842', washA: 1, w: 1.4 }); }
    rect(-400, 1000, 2000, 30, { wash: '#d6a842', washA: 1, w: 2, col: '#6a4a08' });
  }
  function chandelier(x, y, s, t) {                                     // хрустальная люстра: ярусы подвесок, свечи
    push(x, y, s); pencil([[0, -500], [0, 0]], { w: 5, col: '#c8a050' }); for (let r = 0; r < 3; r++) { const n = 8 + r * 4, R = 50 + r * 55; for (let i = 0; i < n; i++) { const a = i / n * 6.283 + t * 0.1, xx = Math.cos(a) * R, yy = r * 46 + Math.sin(a) * R * 0.2;
      pencil([[xx, yy], [xx, yy + 46]], { w: 1.4, col: '#eaf2f8', a: 0.7, pass2: false }); ell(xx, yy + 52, 5, 9, { wash: '#f4fbff', washA: 0.9, w: 1, col: '#8aa0b0' }); if (r === 2 && i % 2 === 0) candle(xx, yy - 4, 0.45, t, i + 11420); } }
    glow(0, 80, 360, 'rgba(255,236,190,1)', 0.4); pop();
  }
  function courtiers(t) {                                               // дамы в панье, кавалер в парике, лакей в ливрее, стол с серебром и яблоками
    const bow = t > EV.ct_mt && t < EV.ct_mt + 1.2;
    const lady = (x, s, col, sd, fl) => { push(x, 1300, s); const sk = shape(spline([[-130, 0], [-120, -60], [-60, -120], [60, -120], [120, -60], [130, 0]], true, 6), { wash: col, washA: 1, w: 2.2, col: '#3a2a2a' }); shadeG(sk.path, 130, 0, -40, 0, lerpC(col, '#000000', 0.4), 0.45); for (let i = 0; i < 4; i++) pencil(spline([[-110 + i * 70, -6], [-90 + i * 60, -60], [-50 + i * 34, -110]], false, 4), { w: 1.6, col: '#ffffff', a: 0.5, pass2: false }); pop();
      human(x, 1300 - (bow ? 20 : 0) * s, s, t, { body: col, long: 1, hair: '#f0ece4', face: bow ? 'smile' : t > EV.ct_app ? 'shock' : 'smile', armL: 'hold', armR: bow ? 'down' : 'hold', look: fl * -0.5, seed: sd, flip: fl });
      push(x, 1300 + (-238 - 46) * s - (bow ? 20 : 0) * s, s); blob([[-44, -10], [-40, -50], [-26, -100], [0, -116], [26, -100], [40, -50], [44, -10], [30, -34], [-30, -34]], { wash: '#f8f6f0', washA: 1, w: 1.6, col: '#9a9a9a' }); for (let i = 0; i < 4; i++) ell(-24 + i * 16, -70 - (i % 2) * 18, 9, 9, { wash: '#ffffff', washA: 1, w: 1, col: '#b8b8b8' }); ell(22, -90, 8, 8, { wash: '#d9486a', washA: 1, w: 1 }); pop();
      push(x + 80 * s * fl, 1300 - 250 * s, s, fl * 0.3); for (let i = 0; i < 6; i++) pencil([[0, 0], [Math.cos(-2.6 + i * 0.3) * 50, Math.sin(-2.6 + i * 0.3) * 50]], { w: 2, col: '#f4e6c8', pass2: false }); pop(); };
    lady(-60, 1.05, '#e8b8c8', 131, 1); lady(1120, 1.05, '#b8d0a8', 132, -1);
    human(140, 1290, 1.1, t, { body: '#c83a3a', legs: '#f0ece0', hair: '#f0ece4', face: t > EV.ct_app ? 'grin' : 'calm', armL: 'hips', armR: bow ? 'wave' : 'hold', look: 0.6, seed: 133 }); push(140, 1290 - 284 * 1.1, 1.1); blob([[-44, -6], [-42, -36], [0, -52], [42, -36], [44, -6], [30, -28], [-30, -28]], { wash: '#f4f2ec', washA: 1, w: 1.6, col: '#9a9a9a' }); for (const sd of [-1, 1]) for (let i = 0; i < 2; i++) ell(sd * 46, -4 + i * 20, 10, 9, { wash: '#f8f6f0', washA: 1, w: 1, col: '#9a9a9a' }); pencil([[0, 10], [0, 50]], { w: 6, col: '#1a1a1a', pass2: false }); pop();
    human(940, 1280, 1.05, t, { body: '#2a4a8a', trim: '#d6a842', legs: '#f0ece0', hair: '#f0ece4', face: 'calm', armL: 'down', armR: 'hold', look: -0.7, seed: 134, flip: -1 }); push(940 + 30, 1280 - 270, 1); const tr = ell(0, 0, 60, 12, { wash: '#d8dce0', washA: 1, w: 2 }); metalG(tr.path, -20, -4, 70, '#ffffff', '#b8bcc4', '#5a5e66'); for (let i = 0; i < 3; i++) { pencil([[-30 + i * 30, 0], [-30 + i * 30, -30]], { w: 3, col: '#c8d8e0' }); ell(-30 + i * 30, -40, 12, 14, { wash: '#f4e090', washA: 0.6, w: 1.4 }); } pop();
  }
  function banquet(t) {                                                 // банкетный стол: скатерть с кистями, серебряная ваза-этажерка, корзина яблок, яблоки катятся по словам
    const tb = rect(-300, 1380, 1100, 70, { wash: '#f8f4ea', washA: 1, w: 2.4, col: '#5a4a3a', key: 11430 }); rect(-300, 1450, 1100, 200, { wash: '#f0e8d8', washA: 1, w: 2, col: '#5a4a3a' }); for (let i = 0; i < 12; i++) { pencil([[-280 + i * 92, 1450], [-270 + i * 92, 1640]], { w: 2, col: '#c8b898', a: 0.5, pass2: false }); ell(-280 + i * 92, 1650, 8, 14, { wash: '#d6a842', washA: 1, w: 1 }); }
    push(40, 1380, 1); for (let k = 0; k < 3; k++) { const y = -60 - k * 80, R = 110 - k * 30; const p = ell(0, y, R, 16, { wash: '#d8dce0', washA: 1, w: 2, col: '#4a4e54' }); metalG(p.path, -R / 3, y - 4, R + 20, '#ffffff', '#b8bcc4', '#5a5e66'); pencil([[0, y], [0, y + 80]], { w: 6, col: '#b8bcc4' }); for (let i = 0; i < 4 - k; i++) baklavaP_mini(-R * 0.6 + i * (R * 1.2 / Math.max(1, 3 - k)), y - 14); } pop();
    push(300, 1380, 1); const bk = shape(spline([[-90, 0], [-100, -70], [100, -70], [90, 0]], true, 5), { wash: '#b8844a', washA: 1, w: 2.2, col: '#4a2a08' }); hatch(bk.path, bk.bb, { gap: 8, a: 0.4, col: '#6a4a1a', ang: 0.8 }); hatch(bk.path, bk.bb, { gap: 8, a: 0.4, col: '#6a4a1a', ang: -0.8 }); for (let i = 0; i < 6; i++) apple(-70 + i * 28, -76 - (i % 2) * 18, 22, i); pop();
    if (t > EV.ct_app - 0.2) for (let i = 0; i < 6; i++) { const k = sm(clamp((t - EV.ct_app + 0.2 - i * 0.08) / 0.8)); apple(lerp(300, 400 + i * 52, k), 1360 - Math.abs(Math.sin(k * 9)) * 40 * (1 - k), 24, k * 9 + i); }
    
    if (t > EV.ct_app) bubbleTag('+ ЯБЛОКИ', 470, 1180, t, EV.ct_app, '#3a8a3a', 56, -0.05);
  }
  function baklavaP_mini(x, y) { poly([[x, y - 10], [x + 14, y], [x, y + 10], [x - 14, y]], { wash: '#e0a040', washA: 1, w: 1, col: '#5a2a08' }); }
  function parquet(t) {                                                 // наборный паркет ромбами, отражения окон
    const f = rect(-400, 1450, 2000, 800, { wash: '#a8743a', washA: 1, w: 2, col: '#3a1a08', key: 11440 }); ctx.save(); ctx.clip(f.path);
    for (let i = -10; i < 30; i++) for (let j = 0; j < 12; j++) { const x = -400 + i * 90 + (j % 2) * 45, y = 1460 + j * 46; poly([[x, y], [x + 45, y + 23], [x, y + 46], [x - 45, y + 23]], { wash: (i + j) % 2 ? '#b8844a' : '#8a5a2a', washA: 1, w: 1, col: '#4a2a10', a: 0.5 }); }
    for (const x of [-180, 300, 1260]) glow(x, 1700, 160, 'rgba(255,250,230,1)', 0.25); ctx.restore();
  }
  function front(t) {                                                   // передний план: бархатная портьера с кистью слева, канделябр справа, пылинки в лучах
    const c = shape(spline([[-300, -200], [60, -200], [20 + Math.sin(t) * 6, 700], [80, 1500], [-300, 2200]], true, 8), { wash: '#7a1e3a', washA: 1, w: 3, col: '#2a0414', key: 11450 }); shadeG(c.path, 80, 0, -200, 0, '#2a0414', 0.55); for (let i = 0; i < 5; i++) pencil(spline([[-260 + i * 60, -200], [-250 + i * 60, 700], [-240 + i * 50, 1700]], false, 6), { w: 3, col: '#a83a5a', a: 0.4, pass2: false });
    pencil([[40, 760], [40, 900]], { w: 4, col: '#d6a842' }); ell(40, 930, 20, 40, { wash: '#d6a842', washA: 1, w: 2, col: '#6a4a08' });
    push(1150, 1900, 1.5); pencil([[0, 0], [0, -320]], { w: 12, col: '#d6a842' }); for (const sd of [-1, 0, 1]) { pencil(spline([[0, -260], [sd * 60, -300], [sd * 70, -360]], false, 5), { w: 7, col: '#d6a842', pass2: false }); candle(sd * 70, -360, 0.9, t, sd + 11451); } pop();
    rays(-100, 300, 0.5, 0.4, 1600, 'rgba(255,248,220,1)', 0.1, 5, t); motes(36, [100, 300, 1100, 1700], '#fff8e0', t, 11452, { sp: 10, sz: 4, a: 0.55, wob: 2 });
  }
  WORLD.court = (t, u, cat) => {
    lay(12, () => { hall(t); haze('#fff4e0', 0.03); });
    lay(6, () => { chandelier(260, 420, 1, t); chandelier(960, 380, 0.9, t); });
    lay(3.2, () => { courtiers(t); haze('#fff0d8', 0.04); });
    lay(1.4, () => { parquet(t); banquet(t); });
    lay(1, () => { cat(); });
    lay(0.6, () => { front(t); });
  };
  DIR.court = {
    outfit: 'courtA', light: { side: -1, rim: '#fff0c8' }, grade: ['#ffe0b0', 0.06],
    act: () => [[S0.court, 'proud'], [EV.ct_emp, 'awe'], [EV.ct_mt, 'smug'], [EV.ct_cent, 'talk'], [EV.ct_app, 'grin']],
    pose: (t, u, b) => { const bow = t > EV.ct_mt && t < EV.ct_mt + 1.0; return Object.assign(b, { x: 760, y: 1660, s: 1.12, flip: -1, rot: bow ? -0.05 : 0, look: t < EV.ct_cent ? [0.3, -0.6] : [-0.7, 0.3],
      hand: [120, -330], handF: t > EV.ct_app ? [-160, -300] : [-90, -200], prop: 'trayP', propAng: 0.05, point: t > EV.ct_app ? 1 : undefined }); },
    cam: () => [[S0.court, 620, 1040, 0.14], [EV.ct_emp, 700, 1000, 0.2], [EV.ct_mt + 0.6, 600, 1140, 0.14, 'x'], [EV.ct_app, 560, 1200, 0.2], [S1.court, 580, 1220, 0.24]]
  };
  // ---------------------------------------------------------------- переход: сахарная пудра сквозь сито
  TRANS_IN.court = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const R = 200 + sm(k) * 1300, cy = lerp(-200, 960, sm(clamp(k * 1.6)));
    inCircle(540, cy, R, () => drawBuf(B, 1, 540, 960));
    scr(() => { ctx.save(); ctx.beginPath(); ctx.arc(540, cy, R, 0, 6.283); ctx.clip(); ctx.globalAlpha = 0.25 * (1 - k); ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 1.2; for (let i = -40; i < 40; i++) { ctx.beginPath(); ctx.moveTo(540 + i * 24, cy - R); ctx.lineTo(540 + i * 24, cy + R); ctx.stroke(); ctx.beginPath(); ctx.moveTo(540 - R, cy + i * 24); ctx.lineTo(540 + R, cy + i * 24); ctx.stroke(); } ctx.restore();
      ctx.lineWidth = 26; ctx.strokeStyle = '#b8bcc4'; ctx.globalAlpha = 1 - k; ctx.beginPath(); ctx.arc(540, cy, R, 0, 6.283); ctx.stroke(); ctx.globalAlpha = 1; });
    scr(() => motes(220, [0, 0, 1080, 1920], '#ffffff', t, 11460, { sp: 260, vx: 10, sz: 6, a: 0.9 * (1 - k * 0.8), wob: 3 }));
  } };
})();
