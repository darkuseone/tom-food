/* 021 — `hook`: «В сырниках нет ни грамма сыра. Так почему они — СЫРНИКИ? / Откусим историю!» Утренняя дачная кухня на рассвете: окно в сад
   (розово-золотое небо, яблоня, забор, скворечник, соседская крыша, туман), обои в цветочек, деревянные панели, полки с банками «ВАРЕНЬЕ / МУКА / САХАР»,
   ходики с маятником, отрывной календарь, радиоточка, связка лука, пучки трав, эмалированные кружки. Слева — белая газовая плита: на чугунной сковороде
   шипят сырники, бабушка в косынке переворачивает их лопаткой; дед у окна с газетой и стаканом в подстаканнике, внук выглядывает из-под стола.
   На клеёнке — горка сырников со сметаной и вареньем (герой-предмет), крынка сметаны, банка варенья, сахарница. Том в полосатом халате с фартуком.
   По словам: «В сырниках» — Том поднимает сырник; «ни грамма сыра» — во второй лапе брусок твёрдого сыра с биркой «СЫР?»; «СЫРНИКИ?» — Том сравнивает,
   бабушка замирает с лопаткой, над столом «?»; «Откусим историю!» — укус: хруст, пар, крошки. Главный свет — окно слева (рассвет), второй — синий газ.
   `kitchen21(t, o)` — общая кухня для `today` (o.day — солнечный день). */
function kitchen21(t, o = {}) {
  const day = o.day ? 1 : 0, ev = o.ev || {};
  function sky() {                                                      // за окном: рассвет/день, сад, яблоня, забор, скворечник, соседская крыша
    vgrad(-500, 700, day ? ['#5aa0d8', '#9ac8e8', '#e8f0e0'] : ['#5a4a7a', '#d87a7a', '#f8c890']); const sx = day ? 300 : 120, sy = day ? -380 : 260;
    ell(sx, sy, 60, 60, { wash: day ? '#fff8d8' : '#ffd890', washA: 1, line: false }); glow(sx, sy, 200, day ? 'rgba(255,250,220,1)' : 'rgba(255,190,120,1)', 0.35);
    for (let i = 0; i < 5; i++) { const x = ((-300 + i * 260 + t * 8) % 1300) - 300; blob([[x, -200 + i * 40], [x + 60, -240 + i * 40], [x + 160, -230 + i * 40], [x + 220, -196 + i * 40]], { wash: day ? '#ffffff' : '#f8b8a0', washA: 0.7, line: false }); }
    sil([[-400, 420], [-200, 330], [-120, 340], [-100, 260], [60, 200], [220, 260], [240, 340], [700, 360], [700, 700], [-400, 700]], day ? '#7a9a6a' : '#6a5a6a', 1);
    poly([[60, 200], [140, 120], [220, 200]], { wash: day ? '#a8443a' : '#7a3a4a', washA: 1, w: 1.4, col: '#3a1a1a' }); rect(80, 200, 120, 90, { wash: day ? '#e8d8b0' : '#b89a8a', washA: 1, w: 1.2 }); rect(124, 226, 30, 30, { wash: '#ffd890', washA: 0.9, w: 1 });
    appleTree(-180, 520, 360, t, 21401, { fruit: 1 }); for (let i = 0; i < 16; i++) { const x = -380 + i * 60; rect(x, 470, 26, 120, { wash: day ? '#c8a878' : '#9a7a6a', washA: 1, w: 1.2, col: '#4a3020' }); poly([[x, 470], [x + 13, 452], [x + 26, 470]], { wash: day ? '#c8a878' : '#9a7a6a', washA: 1, w: 1.2, col: '#4a3020' }); }
    pencil([[-400, 510], [700, 510]], { w: 6, col: '#6a4a30', pass2: false }); push(380, 240, 1); rect(-4, 0, 8, 260, { wash: '#6a4a30', washA: 1, line: false }); rect(-30, -60, 60, 70, { wash: '#a87a4a', washA: 1, w: 1.4, col: '#3a2010' }); poly([[-40, -60], [0, -96], [40, -60]], { wash: '#7a3a2a', washA: 1, w: 1.4 }); ell(0, -30, 10, 10, { wash: '#1a1008', washA: 1, line: false }); pop();
    for (let i = 0; i < 3; i++) { const k = (t * 0.15 + i * 0.33) % 1; const x = -300 + k * 1000, y = -100 + Math.sin(k * 9 + i) * 30; pencil([[x - 10, y], [x, y - 6], [x + 10, y]], { w: 2.4, col: '#3a2a3a', pass2: false }); }
    if (!day) rect(-400, 380, 1100, 200, { wash: '#f8d8d0', washA: 0.25, line: false });
  }
  function wall() {                                                     // обои, панели, окно, полки, ходики, календарь, радио, лук, травы
    vgrad(-800, 1500, day ? ['#e8d8b0', '#f0e2c0', '#d8c098'] : ['#8a6a5a', '#c8a080', '#a8805a']);
    const r = rng(21410); for (let y = -760; y < 900; y += 70) for (let x = -560 + ((y / 70) % 2) * 35; x < 1700; x += 70) { ell(x, y, 7, 7, { wash: day ? '#c86a5a' : '#a8504a', washA: 0.5, line: false }); for (let p = 0; p < 2; p++) ell(x + (p ? 8 : -8), y + 6, 5, 3, { wash: '#6a9a5a', washA: 0.45, line: false }); }
    for (let x = -560; x < 1700; x += 100) { const b = rect(x, 900, 98, 560, { wash: day ? '#b07a48' : '#8a5a38', washA: 1, w: 1.6, col: '#3a2010', key: 21411 + x }); shadeG(b.path, x, 900, x + 98, 1460, '#4a2a10', 0.3); pencil([[x + 20, 920], [x + 26, 1440]], { w: 2, col: '#d8a870', a: 0.35, pass2: false }); }
    rect(-560, 880, 2300, 26, { wash: '#6a3a18', washA: 1, w: 2, col: '#2a1008' });
    push(560, 300, 1); const w = rect(-300, -380, 600, 700, { wash: '#5a4a7a', washA: 1, w: 12, col: '#e8e0d0', key: 21412 }); ctx.save(); ctx.clip(w.path); push(0, -60, 1); sky(); pop(); ctx.restore();
    pencil([[0, -380], [0, 320]], { w: 10, col: '#e8e0d0' }); pencil([[-300, -60], [300, -60]], { w: 10, col: '#e8e0d0' }); rect(-330, 320, 660, 36, { wash: '#e8e0d0', washA: 1, w: 2, col: '#6a5a4a' });
    for (const [px, c] of [[-230, '#c8241e'], [-120, '#e87a2a'], [210, '#c8241e']]) { push(px, 320, 1); rect(-34, -60, 68, 60, { wash: '#b0643a', washA: 1, w: 1.6, col: '#4a2008' }); for (let i = 0; i < 5; i++) { pencil([[(i - 2) * 10, -60], [(i - 2) * 16, -120]], { w: 3, col: '#3a7a3a', pass2: false }); ell((i - 2) * 16, -124, 9, 9, { wash: c, washA: 1, w: 1 }); } pop(); } pop();
    for (const [sx, sy] of [[-60, -120], [-60, 140], [1140, -40]]) { rect(sx - 200, sy, 400, 18, { wash: '#7a4a24', washA: 1, w: 1.8, col: '#2a1408' }); for (let i = 0; i < 6; i++) { const x = sx - 170 + i * 66, kind = (i + sx / 10 + sy) % 3 | 0;
      if (kind === 0) jamJar(x, sy, 0.55, { label: ['вишня', 'малина', 'слива'][i % 3], key: 21420 + i + sx });
      else if (kind === 1) { const j = rect(x - 26, sy - 90, 52, 90, { wash: '#e8e4dc', washA: 1, w: 1.6, col: '#6a6a6a' }); shadeG(j.path, x + 26, 0, x - 26, 0, '#a8a49a', 0.4); rect(x - 26, sy - 100, 52, 12, { wash: '#c8241e', washA: 1, w: 1 }); txt(['МУКА', 'САХАР', 'СОЛЬ'][i % 3], x, sy - 44, 13, { font: 'Osw', col: '#2a2a2a' }); }
      else { ell(x, sy - 30, 28, 30, { wash: '#2a6aa8', washA: 1, w: 1.6, col: '#0a2a4a' }); ell(x, sy - 30, 10, 8, { wash: '#ffffff', washA: 0.8, line: false }); pencil(spline([[x + 26, sy - 46], [x + 44, sy - 30], [x + 26, sy - 14]], false, 5), { w: 5, col: '#2a6aa8', pass2: false }); } } }
    push(980, -330, 1); const c = rect(-70, -90, 140, 160, { wash: '#7a4a24', washA: 1, w: 2, col: '#2a1408' }); ell(0, -10, 54, 54, { wash: '#f4ecd8', washA: 1, w: 2, col: '#3a2a1a' }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; pencil([[Math.cos(a) * 44, -10 + Math.sin(a) * 44], [Math.cos(a) * 50, -10 + Math.sin(a) * 50]], { w: 2, col: '#3a2a1a', pass2: false }); }
    pencil([[0, -10], [Math.cos(t * 0.3) * 30, -10 + Math.sin(t * 0.3) * 30]], { w: 3, col: '#1a1a1a', pass2: false }); pencil([[0, -10], [-20, -40]], { w: 4, col: '#1a1a1a', pass2: false }); const sw = Math.sin(t * 3.2) * 0.3; push(0, 70, 1, sw); pencil([[0, 0], [0, 140]], { w: 2, col: '#8a6a2a', pass2: false }); ell(0, 150, 16, 16, { wash: '#c8a040', washA: 1, w: 1.4 }); pop();
    for (const dx of [-30, 30]) { pencil([[dx, 70], [dx, 220]], { w: 1.4, col: '#5a4a2a', pass2: false }); rect(dx - 8, 220, 16, 40, { wash: '#4a4a4a', washA: 1, w: 1 }); } pop();
    push(1200, -260, 1); rect(-60, -80, 120, 150, { wash: '#f4f0e6', washA: 1, w: 1.6, col: '#5a5a5a' }); rect(-60, -80, 120, 30, { wash: '#c8241e', washA: 1, line: false }); txt('ИЮНЬ', 0, -58, 16, { font: 'Osw', col: '#ffffff' }); txt('14', 0, 30, 64, { font: 'Osw', col: '#2a2a2a' }); pop();
    push(1250, 60, 1); rect(-70, -50, 140, 100, { wash: '#a87a4a', washA: 1, w: 2, col: '#3a2010' }); ell(-20, 0, 34, 34, { wash: '#3a2a1a', washA: 1, w: 1.4 }); for (let i = 0; i < 5; i++) pencil([[-44, -20 + i * 10], [4, -20 + i * 10]], { w: 1.4, col: '#7a5a3a', pass2: false }); ell(44, -14, 10, 10, { wash: '#e8d8b0', washA: 1, w: 1.2 }); ell(44, 20, 10, 10, { wash: '#e8d8b0', washA: 1, w: 1.2 }); pop();
    for (let i = 0; i < 6; i++) { const x = 760 + i * 26, y = -260 + i * 34; blob([[x - 18, y], [x - 22, y + 20], [x, y + 36], [x + 22, y + 20], [x + 18, y]], { wash: '#d8a050', washA: 1, w: 1.4, col: '#6a3a10' }); pencil([[x, y], [x + 4, y - 30]], { w: 3, col: '#8a6a2a', pass2: false }); }
    for (let i = 0; i < 3; i++) { const x = 1380 + i * 70; pencil([[x, -500], [x, -380]], { w: 2, col: '#6a4a2a', pass2: false }); for (let q = 0; q < 7; q++) pencil([[x, -380], [x - 30 + q * 10, -300 + (q % 2) * 20]], { w: 3, col: ['#5a8a3a', '#7a9a4a', '#a8a048'][i], pass2: false }); }
    for (const [mx, col] of [[1180, '#e8e4dc'], [1240, '#2a6aa8'], [1300, '#c8241e']]) { pencil([[mx, 380], [mx, 400]], { w: 2, col: '#3a3a3a', pass2: false }); rect(mx - 18, 400, 36, 40, { wash: col, washA: 1, w: 1.4, col: '#2a2a2a' }); pencil(spline([[mx + 18, 406], [mx + 30, 420], [mx + 18, 434]], false, 4), { w: 3, col, pass2: false }); }
    push(1000, 560, 1); rect(-80, -100, 160, 120, { wash: '#3a2a1a', washA: 1, w: 3, col: '#c8a050' }); rect(-66, -86, 132, 92, { wash: '#c8b8a0', washA: 1, w: 1 }); human(-20, 0, 0.3, t, { body: '#4a4a5a', hair: '#e8e8e8', face: 'smile', seed: 21430 }); human(26, 0, 0.3, t, { body: '#7a3a4a', hair: '#e8e8e8', face: 'smile', seed: 21431, hat: 'scarf' }); pop();
  }
  function stove() {                                                    // газовая плита, сковорода с сырниками, чайник, бабушка с лопаткой
    push(60, 1260, 1); const s = rect(-210, -300, 420, 300, { wash: '#f2f0ea', washA: 1, w: 3, col: '#4a4a4a', key: 21440 }); shadeG(s.path, 210, 0, -210, 0, '#a8a8a0', 0.4); rect(-170, -230, 340, 190, { wash: '#2a2a2a', washA: 1, w: 2 }); rect(-150, -210, 300, 150, { wash: '#4a3a2a', washA: 0.6, line: false });
    for (let i = 0; i < 4; i++) ell(-150 + i * 100, -270, 16, 10, { wash: '#2a2a2a', washA: 1, w: 1.4 }); txt('ГАЗ', 160, -250, 16, { font: 'Osw', col: '#2a6aa8' }); pop();
    for (const fx of [-40, 160]) for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; push(fx, 960, 1); pencil([[Math.cos(a) * 30, Math.sin(a) * 8], [Math.cos(a) * 42, Math.sin(a) * 10 - 16 - Math.sin(t * 20 + i) * 4]], { w: 5, col: '#5ab0ff', a: 0.85, pass2: false }); pop(); }
    glow(60, 960, 90, 'rgba(90,170,255,1)', 0.3);
    castIron(140, 930, 0.62, t, { n: 5, flip: ev.flip || -9, key: 21450 });
    push(-70, 900, 1); const k = blob([[-60, 0], [-64, -70], [-30, -100], [30, -100], [64, -70], [60, 0]], { wash: '#c8241e', washA: 1, w: 2.4, col: '#4a0a04', key: 21460 }); shadeG(k.path, 64, 0, -40, 0, '#5a0a04', 0.45); ell(-24, -64, 14, 6, { wash: '#ffffff', washA: 0.6, line: false }); for (let i = 0; i < 5; i++) ell(-40 + i * 20, -40, 6, 6, { wash: '#ffffff', washA: 0.9, line: false });
    pencil(spline([[-40, -100], [0, -150], [40, -100]], false, 6), { w: 5, col: '#2a2a2a', pass2: false }); pencil([[60, -60], [110, -90]], { w: 10, col: '#c8241e', pass2: false }); pop(); steamWisps(40, 800, 0.8, t, 2, 21461, 0.3);
    const fl = ev.flip && t > ev.flip && t < ev.flip + 0.7; human(240, 1250, 1.05, t, { body: '#5a7aa8', bodyD: '#2a3a5a', legs: '#3a3a4a', skin: '#e8b898', hair: '#d8d8d8', face: ev.shock && t > ev.shock && t < ev.shock + 1.6 ? 'shock' : 'smile', armL: 'hold', armR: fl ? 'up' : 'hold', look: ev.shock && t > ev.shock ? 0.8 : -0.5, seed: 21462, flip: 1, long: 1 });
    kerchief20(240, 1250, 1.05, '#c8241e', 1); push(240 + 60, 1250 - 250 * 1.05, 1, -0.6 + (fl ? Math.sin((t - ev.flip) * 9) * 0.4 : 0)); pencil([[0, 0], [-60, 60]], { w: 6, col: '#6a3a1a', pass2: false }); rect(-100, 50, 50, 40, { wash: '#b8b8c0', washA: 1, w: 1.4, col: '#3a3a40' }); pop();
  }
  function family() {                                                   // дед у окна с газетой и подстаканником, внук под столом
    const sh = ev.shock && t > ev.shock && t < ev.shock + 1.6;
    human(980, 1290, 1.0, t, { body: '#6a6a4a', legs: '#3a3a30', hair: '#e8e8e8', beard: 'short', face: sh ? 'shock' : 'calm', armL: 'hold', armR: 'hold', look: sh ? -0.8 : -0.2, seed: 21470, flip: -1 });
    push(910, 1060, 1, -0.08); rect(-90, -70, 180, 130, { wash: '#efe8d4', washA: 1, w: 1.6, col: '#6a6a5a' }); txt('ДАЧНЫЕ', 0, -40, 20, { font: 'Osw', col: '#1a1a1a' }); txt('ВЕСТИ', 0, -14, 20, { font: 'Osw', col: '#1a1a1a' }); for (let i = 0; i < 6; i++) pencil([[-80, 10 + i * 9], [80, 10 + i * 9]], { w: 2, col: '#5a5a5a', a: 0.5, pass2: false }); pop();
    push(1050, 1080, 1); rect(-18, -50, 36, 50, { wash: '#c88a3a', washA: 0.85, w: 1.4, col: '#6a4a1a' }); const g = rect(-22, -20, 44, 26, { wash: '#a8a8b0', washA: 1, w: 1.4, col: '#3a3a40' }); shadeG(g.path, 22, 0, -22, 0, '#5a5a60', 0.4); pencil(spline([[22, -14], [36, -6], [22, 2]], false, 4), { w: 3, col: '#8a8a90', pass2: false }); pop(); steamWisps(1050, 1010, 0.5, t, 2, 21471, 0.3);
  }
  function table() {                                                    // клеёнка в клетку, горка сырников, крынка сметаны, варенье, сахарница, чашки
    const tb = rect(-500, 1440, 2200, 700, { wash: '#e8eef0', washA: 1, w: 3, col: '#3a4a5a', key: 21480 }); ctx.save(); ctx.clip(tb.path); for (let x = -500; x < 1700; x += 60) pencil([[x, 1440], [x - 30, 2140]], { w: 14, col: '#c8241e', a: 0.25, pass2: false }); for (let y = 1460; y < 2140; y += 60) pencil([[-500, y], [1700, y]], { w: 14, col: '#c8241e', a: 0.2, pass2: false }); ctx.restore();
    shadeG(tb.path, 0, 1440, 0, 1900, '#5a6a7a', 0.35); rect(-500, 1430, 2200, 18, { wash: '#a8743a', washA: 1, w: 2, col: '#3a1a08' });
    syrnikPlate(880, 1510, 1.0, t, { n: 5, key: 21481, steam: 0.4 });
    smetanaPot(330, 1480, 0.9, { key: 21482 }); jamJar(1180, 1480, 0.9, { label: 'вишня', key: 21483 });
    push(150, 1500, 1); const sb = ell(0, -30, 46, 34, { wash: '#f4f0e8', washA: 1, w: 1.8, col: '#6a6a6a' }); shadeG(sb.path, 40, 0, -40, 0, '#a8a49a', 0.4); for (let i = 0; i < 6; i++) ell(-30 + i * 12, -40, 4, 4, { wash: '#2a6aa8', washA: 0.9, line: false }); ell(0, -62, 40, 10, { wash: '#ffffff', washA: 1, w: 1.2 }); pop();
    for (const [cx, cy] of [[520, 1560], [1300, 1580]]) { push(cx, cy, 1); ell(0, 10, 60, 14, { wash: '#f4f0e8', washA: 1, w: 1.4, col: '#6a6a6a' }); const c = rect(-34, -50, 68, 56, { wash: '#f4f0e8', washA: 1, w: 1.6, col: '#6a6a6a' }); shadeG(c.path, 34, 0, -34, 0, '#a8a49a', 0.45); ell(0, -50, 34, 9, { wash: '#a8601a', washA: 1, w: 1.2 }); for (let i = 0; i < 3; i++) ell(-20 + i * 20, -20, 5, 5, { wash: '#c8241e', washA: 0.9, line: false }); pencil(spline([[34, -40], [52, -24], [34, -8]], false, 4), { w: 4, col: '#d8d4cc', pass2: false }); pop(); }
    pencil([[620, 1610], [740, 1580]], { w: 5, col: '#b8b8c0', pass2: false }); ell(750, 1578, 16, 9, { wash: '#c8c8d0', washA: 1, w: 1.2 });
    const r = rng(21484); for (let i = 0; i < 14; i++) ell(560 + r() * 600, 1600 + r() * 60, 4, 3, { wash: SY.crust, washA: 0.8, line: false });
    castShadow(880, 1560, 280, 120, -0.7, 0.22); castShadow(330, 1500, 120, 160, -0.7, 0.2); lightPool(700, 1560, 700, 140, day ? 'rgba(255,250,220,1)' : 'rgba(255,200,150,1)', 0.25);
  }
  function front() {                                                    // передний план: кружевная занавеска слева, пучок укропа сверху, край чашки
    for (let i = 0; i < 2; i++) { const sx = -360 + i * 40, sw = Math.sin(t * 0.8 + i) * 12; const c = blob([[sx, -900], [sx + 220 + sw, -900], [sx + 180 + sw, 300], [sx + 240 + sw, 1300], [sx, 1300]], { wash: '#fbf6ea', washA: 0.55, w: 1.6, col: '#c8bca4', key: 21490 + i });
      for (let q = 0; q < 10; q++) ell(sx + 90 + sw * 0.6, -800 + q * 210, 26, 26, { wash: 'rgba(0,0,0,0)', washA: 0, w: 1.4, col: '#d8ccb4' }); }
    for (let i = 0; i < 7; i++) { const x = 1240 + i * 24, y = -760 + Math.sin(t + i) * 6; pencil([[x, -1000], [x, y]], { w: 3, col: '#5a8a3a', pass2: false }); for (let q = 0; q < 5; q++) pencil([[x, y - q * 30], [x + 22, y - q * 30 + 14]], { w: 2, col: '#6aa84a', pass2: false }); }
    push(1360, 2140, 1.4); const c = rect(-80, -120, 160, 130, { wash: '#2a6aa8', washA: 1, w: 2.4, col: '#0a2a4a' }); shadeG(c.path, 80, 0, -80, 0, '#0a2a4a', 0.5); ell(0, -120, 80, 18, { wash: '#a8601a', washA: 1, w: 1.6 }); for (let i = 0; i < 4; i++) ell(-50 + i * 34, -60, 8, 8, { wash: '#ffffff', washA: 0.9, line: false }); pop();
  }
  lay(14, () => { wall(); shaft(520, -200, 520, 2200, -0.35, day ? 'rgba(255,250,220,1)' : 'rgba(255,200,150,1)', 0.14); haze(day ? '#fff4d8' : '#ffb8a0', 0.05); });
  lay(4, () => { stove(); family(); lightPool(300, 1250, 600, 200, day ? 'rgba(255,250,220,1)' : 'rgba(255,190,140,1)', 0.22); });
  lay(1, () => { if (o.cat) o.cat(); table(); if (o.afterTable) o.afterTable(); });
  lay(0.6, () => { front(); motes(18, [-200, 200, 1200, 1500], day ? '#fffbe8' : '#ffe0c8', t, 21495, { sp: 6, sz: 3, a: 0.4, wob: 5 }); moodDark(600, 1200, 500, 1500, day ? '#3a3a5a' : '#2a1428', day ? 0.3 : 0.45); });
}
(() => {
  EV.hk_lift = 0.05;
  EV.hk_cheese = wtw('h1', 'сыра.');
  EV.hk_why = wtw('h1', 'СЫРНИКИ?');
  EV.hk_flip = 0.3;
  EV.hk_grab = LS('h2');
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_why + 0.05, 0.2, 9], [EV.hk_bite, 0.18, 8]);
  KEYW.push('сыра.', 'СЫРНИКИ?');
  const ev = { flip: EV.hk_flip, shock: EV.hk_why };
  const why = t => {                                                    // «?» над столом и бирка «СЫР?»
    if (t > EV.hk_why && t < S1.hook) { const k = popK(t, EV.hk_why, 0.4); push(520, 980, k, Math.sin(t * 4) * 0.08); txt('?', 0, 0, 160, { font: 'Osw', col: '#c8241e' }); pop(); }
  };
  WORLD.hook = (t, u, cat) => { kitchen21(t, { day: 0, ev, cat, afterTable: () => why(t) }); };
  const stPose = (b, t) => Object.assign(b, { x: 640, y: 1590, s: 1.18, flip: 1, look: [0.2, -0.1], hand: [190, -300], handF: [-150, -300], prop: 'syrnikP', propAng: -0.1 });
  DIR.hook = {
    outfit: 'robeS', light: { side: -1, rim: '#ffc0a0' }, grade: ['#ff9a80', 0.08],
    act: () => [[0, 'suspicious'], [EV.hk_cheese, 'sideeye'], [EV.hk_why, 'shock'], [EV.hk_grab, 'smug'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { const bite = t > EV.hk_bite, ch = t > EV.hk_cheese - 0.2 && t < EV.hk_grab + 0.2;
      Object.assign(stPose(b, t), { look: t < EV.hk_cheese ? [0.5, -0.2] : t < EV.hk_why ? [-0.6, -0.2] : t < EV.hk_grab ? [0, 0.1] : [0.4, -0.1], hand: bite ? [70, -310] : t > EV.hk_grab ? [150, -320] : [190, -300], handF: ch ? [-170, -310] : [-90, -220], prop: bite ? 'syrnikBiteP' : 'syrnikP', sweat: t > EV.hk_why && t < EV.hk_grab, tailUp: bite });
      if (bite && t < EV.hk_bite + 0.12) b.squash = (b.squash || 0) + 0.1; return b; },
    afterCat: (t, u, P) => {
      if (t > EV.hk_cheese - 0.2 && t < EV.hk_grab + 0.2) { const k = sm(clamp((t - EV.hk_cheese + 0.2) / 0.4)) * (t > EV.hk_grab ? 1 - clamp((t - EV.hk_grab) / 0.2) : 1); cheeseWedge(P.x + 175 * P.s, P.y - 340 * P.s + (1 - k) * 200, 0.85 * k, 0.15, { key: 21500, tag: 'СЫР?' }); }
      if (t > EV.hk_bite && t < EV.hk_bite + 1.4) { steamWisps(P.x - 70 * P.s, P.y - 380 * P.s, 0.6, t, 3, 21501, 0.5 * (1 - clamp((t - EV.hk_bite) / 1.4))); crumbs(P.x - 70 * P.s, P.y - 360 * P.s, t, EV.hk_bite, 12, 21502, SY.crust); }
    },
    cam: () => [[0, 640, 1150, 0.34], [EV.hk_cheese, 640, 1120, 0.26], [EV.hk_why, 660, 1100, 0.3], [EV.hk_grab, 620, 1120, 0.26], [EV.hk_bite, 640, 1140, 0.3], [S1.hook, 640, 1140, 0.32]]
  };
})();
