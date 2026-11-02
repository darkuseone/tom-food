/* 011 — `buda`: «Но тонкое тесто — венгерское. А в Венгрию его привезли османы, правившие полтора века.» Дом в Буде XVI–XVII вв.: белёные стены с расписными
   цветами, тёмные балки, полка с расписными тарелками, косы красной паприки, печь-кемence с огнём, мешки муки LISZT, горшки. В распахнутой двери — Дунай и холм
   Буды с куполами и минаретом. Венгерка в красной юбке тянет тесто, старик с усами у печи. Том в чёрном жилете с цветами месит тесто, мука летит.
   По словам: «венгерское» — ценник RÉTES; «османы» — в двери появляется янычар с подносом пахлавы, хозяйка ахает; «полтора века» — лента лет 1526 → 1699
   прокручивается над столом. Переход В сцену: вышитое полотенце скатывается сверху вниз и открывает кадр. */
(() => {
  EV.bd_hun = wtw('s6', 'венгерское.');
  EV.bd_brought = wtw('s6', 'привезли');
  EV.bd_ott = wtw('s6', 'османы,');
  EV.bd_cent = wtw('s6', 'полтора');
  SHAKES.push([EV.bd_ott + 0.1, 0.2, 8]);
  KEYW.push('венгерское.', 'османы,');

  function view(t) {                                                    // в двери: Дунай, холм Буды с куполами и минаретом, лодки, облака
    vgrad(-200, 1200, ['#7ab0d8', '#bcd8ec', '#f0e4c8']); for (let i = 0; i < 3; i++) ell(((i * 200 + t * 8) % 700) - 100, 140 + i * 40, 70, 22, { wash: '#ffffff', washA: 0.8, line: false });
    shape(spline([[-200, 700], [0, 520], [200, 440], [420, 500], [600, 700]], false, 8).concat([[600, 900], [-200, 900]]), { wash: '#8a9a6a', washA: 1, w: 1.6, col: '#3a4a2a' });
    rect(60, 380, 260, 120, { wash: '#e8dcc0', washA: 1, w: 1.6, col: '#6a5a3a' }); for (let i = 0; i < 6; i++) rect(70 + i * 42, 360, 22, 26, { wash: '#e8dcc0', washA: 1, w: 1.2 });
    push(150, 380, 1); blob([[-50, 0], [-46, -40], [0, -64], [46, -40], [50, 0]], { wash: '#8aa0a0', washA: 1, w: 1.6, col: '#3a4a4a' }); pencil([[0, -64], [0, -84]], { w: 3, col: '#c8a050', pass2: false }); txt('☾', 0, -92, 18, { col: '#c8a050' }); pop();
    push(270, 380, 1); rect(-10, -150, 20, 150, { wash: '#f0ece0', washA: 1, w: 1.4 }); poly([[-14, -150], [0, -190], [14, -150]], { wash: '#8aa0a0', washA: 1, w: 1.2 }); rect(-14, -100, 28, 8, { wash: '#d8d0b8', washA: 1, w: 1 }); pop();
    const w = rect(-200, 700, 800, 200, { wash: '#4a7aa0', washA: 1, w: 1.6, col: '#2a4a6a' }); for (let i = 0; i < 8; i++) pencil([[-160 + i * 90 + (t * 20) % 90, 740 + (i % 3) * 40], [-120 + i * 90 + (t * 20) % 90, 740 + (i % 3) * 40]], { w: 2, col: '#cfe4f0', a: 0.7, pass2: false });
    push(380 + Math.sin(t * 0.5) * 20, 760, 1); shape([[-60, 0], [60, 0], [44, 20], [-44, 20]], { wash: '#6a3a1a', washA: 1, w: 1.6 }); pencil([[0, 0], [0, -80]], { w: 3, col: '#3a2a1a' }); poly([[0, -80], [44, -20], [0, -20]], { wash: '#f4ecd8', washA: 1, w: 1.2 }); pop();
  }
  function room(t) {                                                    // белёная стена с росписью, балки, дверь, тарелки, паприка, печь
    vgrad(-600, 1500, ['#e8e0cc', '#f4eedc', '#e0d4b8']);
    for (let i = 0; i < 18; i++) { const r = rng(11800 + i), x = -300 + r() * 1700, y = 300 + r() * 600; if (x > 180 && x < 820 && y > 250) continue; for (let k = 0; k < 5; k++) { const a = k / 5 * 6.283; ell(x + Math.cos(a) * 14, y + Math.sin(a) * 14, 10, 10, { wash: ['#d9282a', '#2a5ab8', '#e8b030'][i % 3], washA: 0.8, w: 1, col: '#5a1a1a', a: 0.6 }); } ell(x, y, 6, 6, { wash: '#f0c030', washA: 1, line: false }); for (const sd of [-1, 1]) blob([[x + sd * 20, y + 20], [x + sd * 44, y + 30], [x + sd * 30, y + 44]], { wash: '#3a8a3a', washA: 0.8, w: 1, col: '#1a3a1a' }); }
    for (let i = 0; i < 6; i++) { const b = rect(-400 + i * 360, -300, 60, 1800, { wash: '#4a2c18', washA: 1, w: 2, col: '#1a0a04' }); } rect(-400, 200, 2000, 50, { wash: '#4a2c18', washA: 1, w: 2, col: '#1a0a04' });
    push(500, 1240, 1); const dr = rect(-300, -900, 600, 900, { wash: '#7ab0d8', washA: 1, w: 8, col: '#3a1a08', key: 11810 }); ctx.save(); ctx.clip(dr.path); push(-200, -900, 1); view(t); pop(); ctx.restore();
      for (const sd of [-1, 1]) { const dd = poly([[sd * 300, -900], [sd * 420, -860], [sd * 420, 40], [sd * 300, 0]], { wash: '#6a3a1a', washA: 1, w: 2.4, col: '#1a0a04' }); for (let k = 0; k < 4; k++) pencil([[sd * 320, -800 + k * 220], [sd * 400, -770 + k * 220]], { w: 3, col: '#3a1a08', pass2: false }); } pop();
    rect(900, 420, 500, 20, { wash: '#5a3a1a', washA: 1, w: 2, col: '#1a0a04' }); for (let i = 0; i < 5; i++) { const x = 940 + i * 90; const p = ell(x, 360, 40, 40, { wash: '#f4ecd8', washA: 1, w: 2, col: '#5a3a1a' }); ell(x, 360, 26, 26, { line: true, w: 3, col: ['#2a5ab8', '#d9282a', '#3a8a3a'][i % 3] }); for (let k = 0; k < 5; k++) { const a = k / 5 * 6.283 + i; ell(x + Math.cos(a) * 12, 360 + Math.sin(a) * 12, 5, 5, { wash: ['#d9282a', '#2a5ab8'][k % 2], washA: 1, line: false }); } }
    for (const x0 of [-200, 1060]) for (let g = 0; g < 2; g++) { const x = x0 + g * 90; pencil([[x, 250], [x + 6, 760]], { w: 3, col: '#6a5a3a', pass2: false }); for (let k = 0; k < 14; k++) { const y = 280 + k * 34; push(x + (k % 2 ? 12 : -12), y, 1, (k % 2 ? 0.4 : -0.4)); blob([[0, 0], [-10, 20], [-4, 60], [4, 64], [10, 20]], { wash: k % 4 ? '#c8221a' : '#a81a14', washA: 1, w: 1.4, col: '#3a0a04' }); pencil([[0, 0], [0, -10]], { w: 3, col: '#3a6a1a', pass2: false }); pop(); } }
  }
  function oven(t) {                                                    // печь-кемence: белёный купол, устье с огнём, кочерга, хлеб
    push(-120, 1300, 1); const o = blob([[-260, 0], [-260, -260], [-180, -440], [0, -500], [180, -440], [260, -260], [260, 0]], { wash: '#f0e8d8', washA: 1, w: 3, col: '#5a4a3a', key: 11820 }); shadeG(o.path, 260, 0, -100, 0, '#b8a888', 0.45);
    const m = blob([[-90, -10], [-90, -110], [0, -170], [90, -110], [90, -10]], { wash: '#1a0a04', washA: 1, w: 2.4 }); for (let i = 0; i < 5; i++) { const f = Math.sin(t * 9 + i) * 10; blob([[-60 + i * 30, -10], [-70 + i * 30, -60 - f], [-50 + i * 30, -100 - f * 2], [-40 + i * 30, -60], [-30 + i * 30, -10]], { wash: i % 2 ? '#ff9a2a' : '#ffd04a', washA: 0.9, line: false }); }
    glow(0, -70, 240, 'rgba(255,140,40,1)', 0.55); pencil([[120, 0], [300, -240]], { w: 8, col: '#3a3a3a' }); ell(-160, -40, 50, 26, { wash: '#a8642a', washA: 1, w: 2 }); pop();
  }
  function people(t) {                                                  // хозяйка тянет тесто, старик у печи, янычар в двери
    const sh = t > EV.bd_ott && t < EV.bd_ott + 1.6;
    human(150, 1310, 1.15, t, { body: '#f4f0e6', bodyD: '#b8b0a0', legs: '#c8221a', hair: '#3a2a1a', face: sh ? 'shock' : 'smile', armL: 'hold', armR: sh ? 'up' : 'hold', look: sh ? 0.6 : 0.3, seed: 81, long: 1 }); kerchief20(150, 1310, 1.15, '#c8221a');
    push(150, 1310, 1.15); const sk = shape([[-60, -130], [60, -130], [80, 0], [-80, 0]], { wash: '#c8221a', washA: 1, w: 2, col: '#3a0a04' }); for (let i = 0; i < 3; i++) pencil([[-76, -40 + i * 16], [76, -40 + i * 16]], { w: 4, col: ['#2a5ab8', '#3a8a3a', '#f0c030'][i], pass2: false }); rect(-40, -180, 80, 120, { wash: '#16161c', washA: 1, w: 1.6 }); pop();
    human(-40, 1290, 1.1, t, { body: '#3a2a1a', legs: '#2a2a2a', hair: '#d8d0c0', face: sh ? 'shock' : 'calm', armL: 'hips', armR: 'hold', look: 0.6, seed: 82 }); stache(-40, 1290, 1.1); hat20(-40, 1290, 1.1, 'fedora', '#1a1a1a');
    if (t > EV.bd_ott - 0.3) { const k = sm(clamp((t - EV.bd_ott + 0.3) / 0.5)); const x = lerp(760, 470, k);
      human(x, 1250, 1.15, t, { body: '#a8282a', bodyD: '#5a0e10', trim: '#e8c060', belt: '#2a5ab8', legs: '#2a2a3a', hair: '#1a1a1a', beard: 'short', face: t > EV.bd_cent ? 'smile' : 'calm', armL: 'hold', armR: 'hold', look: -0.5, seed: 83, flip: -1, long: 1 }); turban20(x, 1250, 1.15, '#f4efe2', -1, 1);
      push(x - 30, 1250 - 250 * 1.15, 1); const tr = ell(0, 0, 90, 22, { wash: '#b86a2a', washA: 1, w: 2, col: '#3a1806' }); metalG(tr.path, -30, -6, 100, '#f8c88a', '#b86a2a', '#5a2a0a'); for (let i = 0; i < 5; i++) poly([[-60 + i * 30, -14], [-46 + i * 30, -4], [-60 + i * 30, 6], [-74 + i * 30, -4]], { wash: '#e0a040', washA: 1, w: 1.2, col: '#5a2a08' }); pop(); }
  }
  function table(t) {                                                   // стол: тесто, мешок LISZT, скалка, миска с маком, лента лет 1526 → 1699
    const tb = poly([[-100, 1420], [1180, 1420], [1320, 1580], [-240, 1580]], { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#2a1408', key: 11830 }); for (let i = 0; i < 6; i++) pencil([[-100 - i * 24, 1420 + i * 30], [1180 + i * 24, 1420 + i * 30]], { w: 2, col: '#5a3a1a', a: 0.6, pass2: false });
    poly([[-240, 1580], [1320, 1580], [1320, 2000], [-240, 2000]], { wash: '#6a4a24', washA: 1, w: 2.4, col: '#2a1408' });
    const kn = Math.sin(t * 7) * 10, d = blob([[460, 1500], [520, 1446 + kn * 0.3], [700, 1436], [880, 1446 - kn * 0.3], [940, 1500], [860, 1540], [700, 1550], [540, 1540]], { wash: '#f6e6c0', washA: 1, w: 2.4, col: '#a8844a', key: 11831 }); shadeG(d.path, 540, 1550, 540, 1440, '#d8b878', 0.4); glow(640, 1470, 60, 'rgba(255,255,240,1)', 0.5);
    for (let i = 0; i < 3; i++) { ell(220 + i * 50, 1470, 24, 30, { wash: '#f4ecd8', washA: 1, w: 2, col: '#8a7a5a' }); } ell(320, 1520, 60, 14, { wash: '#ffffff', washA: 0.8, line: false }); push(560, 1600, 1, -0.3); rect(-90, -8, 120, 16, { wash: '#c8ccd2', washA: 1, w: 2 }); rect(30, -10, 80, 20, { wash: '#4a2a14', washA: 1, w: 2 }); pop();
    push(0, 1430, 1); const sk = shape(spline([[-110, 0], [-120, -140], [-80, -210], [80, -210], [120, -140], [110, 0]], true, 6), { wash: '#e8dcc0', washA: 1, w: 2.4, col: '#5a4a2a' }); shadeG(sk.path, 110, 0, -60, 0, '#a89a7a', 0.45); txt('LISZT', 0, -100, 40, { font: 'Osw', col: '#a8221a' }); ell(0, -210, 74, 18, { wash: '#ffffff', washA: 1, w: 1.6 }); pop();
    push(1140, 1450, 1); ell(0, 0, 80, 24, { wash: '#6a8aa8', washA: 1, w: 2, col: '#1a2a3a' }); for (let i = 0; i < 40; i++) ell(-60 + (i * 13) % 120, -6 + (i % 4) * 3, 2.4, 2.4, { wash: '#2a2a3a', washA: 1, line: false }); txt('mák', 0, 40, 24, { font: 'Hand', col: '#3a2a1a' }); pop();
    push(1060, 1520, 1, 0.2); rect(-120, -14, 240, 28, { wash: '#d8b070', washA: 1, w: 2, col: '#4a2a08' }); pop();
    if (t > EV.bd_hun) bubbleTag('RÉTES', 330, 1240, t, EV.bd_hun, '#3a8a3a', 60, -0.05);
    if (t > EV.bd_cent - 0.2) { const k = clamp((t - EV.bd_cent + 0.2) / 0.8), y = 1060; push(560, y, popK(t, EV.bd_cent - 0.2, 0.3)); rect(-330, -50, 660, 100, { wash: '#f4ecd8', washA: 1, w: 3, col: '#5a3a1a' }); const yr = Math.round(lerp(1526, 1699, sm(k)));
      for (let i = 0; i < 12; i++) pencil([[-300 + i * 55, 30], [-300 + i * 55, 44]], { w: 2, col: '#5a3a1a', pass2: false }); rect(-310, 26, 620 * sm(k), 10, { wash: '#a8282a', washA: 1, line: false }); txt('1526 → ' + yr, 0, 6, 54, { font: 'Osw', col: '#a8221a' }); pop(); }
  }
  function front(t) {                                                   // передний план: коса паприки сверху слева, кувшин справа, мука в воздухе
    pencil([[60, -200], [80, 700]], { w: 4, col: '#6a5a3a', pass2: false }); for (let k = 0; k < 18; k++) { push(70 + (k % 2 ? 22 : -22), -160 + k * 46, 1.5, (k % 2 ? 0.4 : -0.4)); blob([[0, 0], [-12, 24], [-5, 70], [5, 74], [12, 24]], { wash: k % 3 ? '#d8261a' : '#a81a14', washA: 1, w: 1.6, col: '#3a0a04' }); pop(); }
    push(1170, 1940, 1.5); const j = shape(spline([[-70, 0], [-90, -100], [-50, -180], [-30, -230], [30, -230], [50, -180], [90, -100], [70, 0]], true, 6), { wash: '#b8643a', washA: 1, w: 2.4, col: '#3a1a08' }); shadeG(j.path, 80, 0, -40, 0, '#5a2a10', 0.45); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; ell(Math.cos(a) * 34, -110 + Math.sin(a) * 34, 8, 8, { wash: '#f4ecd8', washA: 1, w: 1 }); } pencil(spline([[60, -200], [120, -170], [100, -110]], false, 5), { w: 9, col: '#b8643a' }); pop();
    motes(40, [100, 900, 1000, 1800], '#ffffff', t, 11840, { sp: 14, sz: 5, a: 0.5, wob: 2 }); rays(500, 400, 1.7, 0.4, 1500, 'rgba(255,240,200,1)', 0.1, 5, t);
  }
  WORLD.buda = (t, u, cat) => {
    lay(11, () => { room(t); haze('#fff0d8', 0.05); });
    lay(4, () => { oven(t); });
    lay(2.6, () => { people(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { table(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.buda = {
    outfit: 'hunA', light: { side: 1, rim: '#ffd8a0' }, grade: ['#ffc080', 0.08],
    act: () => [[S0.buda, 'talk'], [EV.bd_hun, 'proud'], [EV.bd_ott, 'shock'], [EV.bd_cent, 'suspicious']],
    pose: (t, u, b) => { const kn = t < EV.bd_ott; return Object.assign(b, { x: 780, y: 1560, s: 1.05, flip: -1, look: kn ? [-0.1, 0.6] : [0.7, -0.2],
      hand: kn ? [90, -120 + Math.abs(Math.sin(t * 7)) * 30] : [140, -300], handF: kn ? [-90, -120 + Math.abs(Math.cos(t * 7)) * 30] : [-80, -200], point: !kn && t < EV.bd_cent ? 1 : undefined }); },
    cam: () => [[S0.buda, 520, 1100, 0.12], [EV.bd_hun, 580, 1260, 0.24, 'x'], [EV.bd_ott - 0.2, 560, 1120, 0.14], [EV.bd_cent, 560, 1160, 0.2], [S1.buda, 570, 1180, 0.24]]
  };
  // ---------------------------------------------------------------- переход: вышитое полотенце скатывается сверху вниз
  TRANS_IN.buda = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), y = e * (H + 200) - 100; drawBuf(A, 1, 540, 960); ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.rect(0, 0, W, Math.max(0, y)); ctx.clip(); ctx.drawImage(B, 0, 0); ctx.restore();
    scr(() => { const r = rect(-20, y - 70, W + 40, 140, { wash: '#f8f4ea', washA: 1, w: 3, col: '#8a7a5a' }); for (let i = 0; i < 18; i++) { const x = 30 + i * 60; txt('✿', x, y + 12, 40, { col: i % 2 ? '#c8221a' : '#2a5ab8' }); } pencil([[0, y - 50], [W, y - 50]], { w: 6, col: '#c8221a', pass2: false }); pencil([[0, y + 50], [W, y + 50]], { w: 6, col: '#c8221a', pass2: false }); });
  } };
})();
