/* 001 — `cardini`: зал ресторана Caesar's, 1924. Стойка бара с зеркалом и бутылками, вентиляторы, люстры, шахматный пол, джаз-трио на эстраде,
   гости-американцы в канотье и шляпках-клош поднимают бокалы («выпить» — звон и искры). На «Цезаря Кардини» — луч софита на хозяина: усы, бабочка, итальянский флажок на лацкане.
   Том-официант несёт поднос с коктейлями. Переход В сцену: машина проносится у самой камеры, облако пыли заливает кадр и рассеивается уже в зале. */
(() => {
  EV.cd_drink = wtw('s2', 'выпить.');
  EV.cd_name = wtw('s2', 'Цезаря');
  KEYW.push('выпить.', 'Кардини.');

  function room(t) {                                                   // стены: тёмные панели, обои с ромбами, окна-арки на улицу
    vgrad(-200, 1500, ['#3a2014', '#5a3018', '#3a2014']);
    const wp = rect(-400, 200, 2000, 700, { wash: '#7a3a22', washA: 1, w: 2, col: '#2a1008', key: 3000 }); ctx.save(); ctx.clip(wp.path); for (let i = 0; i < 40; i++) for (let j = 0; j < 12; j++) { const x = -380 + i * 60 + (j % 2) * 30, y = 220 + j * 60; poly([[x, y - 14], [x + 10, y], [x, y + 14], [x - 10, y]], { wash: '#c88a3a', washA: 0.45, line: false }); } ctx.restore();
    rect(-400, 900, 2000, 360, { wash: '#4a2412', washA: 1, w: 2.4, col: '#1a0a04', key: 3001 }); for (let i = 0; i < 16; i++) { const p = rect(-380 + i * 130, 930, 110, 300, { wash: '#5a2e16', washA: 1, w: 1.8, col: '#2a1008' }); shadeG(p.path, 0, 1230, 0, 930, '#1a0a04', 0.3); }
    for (const x of [140, 920]) { const w = shape(spline([[x - 110, 820], [x - 110, 420], [x - 60, 330], [x, 310], [x + 60, 330], [x + 110, 420], [x + 110, 820]], true, 5), { wash: '#f6d090', washA: 1, w: 3, col: '#1a0a04', key: 3002 + x });
      ctx.save(); ctx.clip(w.path); vgrad(300, 820, ['#9cc4e0', '#f6e2b0']); for (let k = 0; k < 3; k++) rect(x - 100 + k * 70, 600 - k * 40, 60, 260, { wash: '#d8b080', washA: 0.8, w: 1, col: '#5a3a1a' }); glow(x, 500, 160, 'rgba(255,240,200,1)', 0.6); ctx.restore();
      pencil([[x, 320], [x, 820]], { w: 5, col: '#1a0a04' }); pencil([[x - 110, 560], [x + 110, 560]], { w: 5, col: '#1a0a04' }); rays(x, 500, 1.9, 0.5, 900, 'rgba(255,230,170,1)', 0.12, 5, t); }
  }
  function bar(t) {                                                    // стойка бара слева: зеркало, полки с бутылками, бармен
    const m = rect(-300, 360, 700, 380, { wash: '#a8b8b8', washA: 1, w: 3, col: '#2a1008', key: 3010 }); shadeG(m.path, -300, 360, 400, 740, '#e8f0f0', 0.4); for (let k = 0; k < 4; k++) pencil([[-260 + k * 160, 380], [-200 + k * 160, 720]], { w: 3, col: '#ffffff', a: 0.25, pass2: false });
    for (const y of [480, 600, 720]) { rect(-310, y, 720, 16, { wash: '#6a3a1a', washA: 1, w: 2, col: '#1a0a04' }); const r = rng(3011 + y); for (let i = 0; i < 16; i++) { const x = -290 + i * 44, h = 50 + r() * 40, c = ['#2e6a3a', '#8a3a1a', '#d8b050', '#3a2a6a', '#e8e0c8'][Math.floor(r() * 5)]; rect(x - 10, y - h, 20, h, { wash: c, washA: 0.9, w: 1.4, col: '#1a0a04' }); rect(x - 4, y - h - 16, 8, 16, { wash: c, washA: 0.9, w: 1.2, col: '#1a0a04' }); glow(x - 4, y - h * 0.6, 8, 'rgba(255,255,255,1)', 0.4); } }
    human(120, 1080, 0.95, t, { body: '#f6f2e8', legs: '#1a1a1a', hair: '#1a1a1a', face: 'smile', armL: 'hold', armR: 'swing', seed: 60 }); stache(120, 1080, 0.95);
    const c = rect(-320, 920, 760, 200, { wash: '#6a3418', washA: 1, w: 3, col: '#1a0a04', key: 3012 }); shadeG(c.path, 0, 1120, 0, 920, '#2a1006', 0.5); rect(-330, 900, 780, 30, { wash: '#8a4a22', washA: 1, w: 2.4, col: '#1a0a04' }); pencil([[-320, 1100], [440, 1100]], { w: 8, col: '#c99636' });
    for (let i = 0; i < 5; i++) { const x = -260 + i * 150; pencil([[x, 900], [x, 860]], { w: 3, col: '#e8f0f4', a: 0.8, pass2: false }); poly([[x - 18, 820], [x + 18, 820], [x, 860]], { wash: '#e8b53a', washA: 0.85, w: 1.6, col: '#3a2a14' }); }
  }
  function band(t) {                                                   // джаз-трио на эстраде справа
    const st = rect(760, 1000, 600, 60, { wash: '#7a3a1a', washA: 1, w: 2.4, col: '#1a0a04' }); pencil([[760, 1000], [1360, 1000]], { w: 6, col: '#c99636' });
    const sw = Math.sin(t * 6) * 0.15;
    human(840, 1000, 0.85, t, { body: '#1e1e22', legs: '#1e1e22', hair: '#1a1a1a', face: 'grin', armL: 'hold', armR: 'hold', seed: 61 }); push(870, 790, 1, 0.5 + sw); pencil(spline([[0, 0], [10, 60], [0, 120], [-20, 160]], false, 5), { w: 14, col: '#d6a842' }); ell(-26, 170, 22, 14, { wash: '#d6a842', washA: 1, w: 2, col: '#6a4a08' }); pop();
    human(1010, 1000, 0.85, t, { body: '#5a2a2a', legs: '#1e1e22', hair: '#3a2a1a', face: 'smile', armL: 'hold', armR: 'swing', seed: 62 }); push(1000, 860, 1, -0.6); ell(0, 0, 40, 40, { wash: '#efe2c4', washA: 1, w: 2.2, col: '#3a2a14' }); pencil([[30, -20], [140, -110]], { w: 8, col: '#6a3a1a' }); pop(); hat20(1010, 1000, 0.85, 'boater');
    push(1200, 1000, 1); rect(-90, -180, 180, 180, { wash: '#1a1410', washA: 1, w: 2.4, col: '#000' }); rect(-90, -110, 180, 20, { wash: '#f6f2e8', washA: 1, w: 1.4 }); for (let i = 0; i < 9; i++) pencil([[-86 + i * 20, -110], [-86 + i * 20, -90]], { w: 2, col: '#1a1410', pass2: false }); pop();
    for (let i = 0; i < 5; i++) { const k = ((t * 0.6 + i * 0.2) % 1); txt(i % 2 ? '♪' : '♫', 900 + i * 60 + Math.sin(t * 2 + i) * 20, 780 - k * 260, 46, { col: '#f6e2b0', a: 1 - k }); }
  }
  function lights(t) { for (const x of [300, 780]) { pencil([[x, 0], [x, 180]], { w: 3, col: '#2a1a0a' }); push(x, 200, 1, Math.sin(t * 0.8 + x) * 0.02); ell(0, 0, 90, 20, { wash: '#c99636', washA: 1, w: 2, col: '#4a2a08' }); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; const bx = Math.cos(a) * 80, by = Math.sin(a) * 18 + 20; ell(bx, by, 9, 12, { wash: '#fff2c0', washA: 1, w: 1.2, col: '#8a6a2a' }); glow(bx, by, 70, 'rgba(255,200,110,1)', 0.35); } pop(); }
    for (const x of [540]) { push(x, 120, 1); ell(0, 0, 14, 14, { wash: '#3a2a1a', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) { const a = t * 5 + i * 1.57; poly([[0, 0], [Math.cos(a) * 160, Math.sin(a) * 26 - 8], [Math.cos(a + 0.25) * 160, Math.sin(a + 0.25) * 26 + 8]], { wash: '#5a3a1a', washA: 1, w: 1.6, col: '#1a0a04' }); } pop(); } }
  function table(x, y, s, t, k, who) {                                 // столик с гостями
    push(x, y, s); ell(0, 6, 150, 20, { wash: '#000', washA: 0.2, line: false }); pencil([[0, 0], [0, -120]], { w: 12, col: '#3a2010' }); const tc = ell(0, -130, 140, 30, { wash: '#f8f4ea', washA: 1, w: 2.4, col: '#4a3a2a', key: 3020 + k }); poly([[-140, -130], [140, -130], [130, -60], [-130, -60]], { wash: '#f2ecde', washA: 1, w: 2.2, col: '#4a3a2a' });
    ell(-40, -144, 10, 10, { wash: '#e8e0c8', washA: 1, w: 1.4 }); glow(-40, -170, 50, 'rgba(255,190,90,1)', 0.5 * flick(t, k)); blob([[-44, -150], [-40, -176], [-36, -150]], { wash: '#ffc04a', washA: 1, line: false }); pop();
    who.forEach(([dx, o], i) => { const raise = t > EV.cd_drink - 0.1 && t < EV.cd_drink + 1.6; human(x + dx * s, y + 10 * s, s * 0.9, t, Object.assign({ face: raise ? 'grin' : 'smile', armL: 'hold', armR: raise ? 'up' : 'hold', seed: 70 + k * 3 + i }, o));
      if (o.hatK) hat20(x + dx * s, y + 10 * s, s * 0.9, o.hatK, o.hatC || '#3a3028', o.flip || 1);
      if (raise) { const hx = x + dx * s + (o.flip || 1) * 82 * s * 0.9, hy = y + 10 * s + (-216 - 104) * s * 0.9; poly([[hx - 16, hy - 40], [hx + 16, hy - 40], [hx, hy]], { wash: '#e8b53a', washA: 0.85, w: 1.6, col: '#3a2a14' }); if (t - EV.cd_drink < 0.5 && t > EV.cd_drink) glow(hx, hy - 40, 50, 'rgba(255,250,210,1)', 0.8); } });
  }
  function floor(t) { const f = poly([[-500, 1230], [1600, 1230], [1600, 2400], [-500, 2400]], { wash: '#e8dcc0', washA: 1, w: 2, col: '#3a2a14', key: 3030 });
    ctx.save(); ctx.clip(f.path); for (let j = 0; j < 14; j++) for (let i = -10; i < 24; i++) if ((i + j) % 2) { const y0 = 1230 + j * j * 6 + j * 40, y1 = 1230 + (j + 1) * (j + 1) * 6 + (j + 1) * 40, sp0 = 80 + j * 14, sp1 = 80 + (j + 1) * 14; poly([[540 + (i - 7) * sp0, y0], [540 + (i - 6) * sp0, y0], [540 + (i - 6) * sp1, y1], [540 + (i - 7) * sp1, y1]], { wash: '#2a2420', washA: 0.85, line: false }); } ctx.restore();
    glow(540, 1500, 500, 'rgba(255,200,120,1)', 0.12); }
  function cardini(t) {                                                // хозяин у колонны, луч софита на имени
    const on = t > EV.cd_name - 0.1, k = clamp((t - EV.cd_name + 0.1) / 0.3);
    if (on) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; const g = ctx.createLinearGradient(380, 300, 380, 1300); g.addColorStop(0, 'rgba(255,230,160,0.5)'); g.addColorStop(1, 'rgba(255,230,160,0.05)'); ctx.globalAlpha = k; ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(340, 0); ctx.lineTo(420, 0); ctx.lineTo(560, 1300); ctx.lineTo(200, 1300); ctx.closePath(); ctx.fill(); ctx.restore(); }
    human(380, 1290, 1.12, t, { body: '#1e1e26', legs: '#1e1e26', hair: '#141010', face: on ? 'grin' : 'smile', armL: 'hips', armR: on ? 'wave' : 'hold', look: 0.4, seed: 80 }); stache(380, 1290, 1.12);
    const hy = 1290 + (-238 - 46) * 1.12; push(380, hy + 74 * 1.12, 1.12); poly([[0, 0], [-22, -10], [-22, 10]], { wash: '#1a1a1a', washA: 1, w: 1.4 }); poly([[0, 0], [22, -10], [22, 10]], { wash: '#1a1a1a', washA: 1, w: 1.4 }); for (const [c, dx] of [['#2e8a3a', -12], ['#f6f2e8', 0], ['#c8302a', 12]]) rect(-40 + dx, 40, 12, 18, { wash: c, washA: 1, w: 1 }); pop();
    if (on) bubbleTag('ЦЕЗАРЬ КАРДИНИ', 380, hy - 120, t, EV.cd_name + 0.1, '#d9482b', 44, -0.04);
  }
  WORLD.cardini = (t, u, cat) => {
    lay(18, () => { room(t); }); lay(9, () => { lights(t); bar(t); band(t); haze('#ffb070', 0.05); });
    lay(3.2, () => { floor(t); table(120, 1300, 1.0, t, 1, [[-90, { body: '#3a5a8a', legs: '#3a3a4a', hair: '#6a4a2a', hatK: 'fedora', hatC: '#5a4a3a' }], [90, { body: '#a8324a', long: 1, hair: '#1a1a1a', hatK: 'cloche', hatC: '#2a2a3a', flip: -1 }]]);
      table(900, 1310, 1.0, t, 2, [[-90, { body: '#c8b48a', legs: '#3a3a4a', hair: '#c8a060', hatK: 'boater' }], [90, { body: '#2e6a5a', long: 1, hair: '#8a3a1a', hatK: 'cloche', hatC: '#e8b53a', flip: -1 }]]); haze('#ffb070', 0.05); });
    lay(1.6, () => cardini(t));
    lay(1, () => { cat(); });
    lay(0.62, () => { pencil([[1180, 0], [1170, 2000]], { w: 60, col: '#2a1006' }); ell(-120, 2000, 300, 200, { wash: '#1a0a04', washA: 0.6, line: false }); });
  };
  DIR.cardini = {
    outfit: 'waiter', light: { side: -1, rim: '#ffd090' }, grade: ['#ff9a40', 0.1],
    act: () => [[S0.cardini, 'grin'], [EV.cd_drink, 'laugh'], [EV.cd_drink + 0.7, 'talk'], [EV.cd_name, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 760 - Math.min(u, 2) * 30, y: 1600, s: 1.2, walk: u < 2 ? t * 8 : undefined, look: t > EV.cd_name ? [-0.8, -0.1] : [0.3, 0], hand: [96, -210], prop: 'tray', handF: t > EV.cd_name ? [-150, -260] : [-80, -150], point: t > EV.cd_name ? 1 : undefined }),
    cam: () => [[S0.cardini, 760, 1100, 0.3], [EV.cd_drink, 640, 1060, 0.16], [EV.cd_name, 480, 1020, 0.22], [S1.cardini, 470, 1000, 0.3]]
  };
  // ---------------------------------------------------------------- переход: машина у камеры, облако пыли заливает кадр
  TRANS_IN.cardini = { a: 0.35, b: 0.4, runA: 1, fx(k, t, A, B) {
    drawBuf(k < 0.5 ? A : B, k < 0.5 ? 1 + k * 0.2 : 1.1 - (k - 0.5) * 0.2, 540, 960);
    scr(() => { const d = Math.sin(k * Math.PI); for (let i = 0; i < 26; i++) { const r = rng(3100 + i), x = r() * 1300 - 100 + (k - 0.5) * 900 * (r() + 0.5), y = 300 + r() * 1500; ell(x, y, 220 + r() * 240, 160 + r() * 160, { wash: i % 2 ? '#e8d0a0' : '#d8b880', washA: 0.85 * d, line: false }); }
      if (k > 0.15 && k < 0.6) { const cx = lerp(1700, -700, (k - 0.15) / 0.45); push(cx, 1750, 3.2); poly([[-150, -40], [-120, -90], [-40, -96], [-20, -150], [70, -150], [90, -96], [150, -80], [160, -30], [-150, -30]], { wash: '#141418', washA: 1, w: 3, col: '#000' }); for (const wx of [-100, 110]) ell(wx, -20, 36, 36, { wash: '#0a0a0a', washA: 1, w: 2 }); pop(); } });
  } };
})();
