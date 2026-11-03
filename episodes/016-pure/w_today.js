/* 016 — `today`: «Сегодня мир выращивает 383 миллиона тонн картошки в год. Пюре с комочками или гладкое?» Домашняя кухня вечером: плитка-кабанчик,
   окно с дождём и огнями города, полки с банками и специями, холодильник с магнитами, плита с кастрюлей, лампа над столом, кошачья миска, растение на подоконнике,
   сетка с картошкой. Том в стёганой жилетке с фартуком и толкушкой. По словам: «Сегодня» — лампа загорается; «383 миллиона тонн» — за окном глобус-гора
   картошки растёт, табло 383 000 000 Т; «в год» — календарь листается; «с комочками» — слева миска пюре с комками подсвечивается; «гладкое» — справа гладкое
   пюре блестит, Том переводит взгляд. Переход В сцену: толкушка вдавливается в кадр — сеткой-решёткой продавливает новую сцену. */
(() => {
  EV.td_now = LS('t1');
  EV.td_383 = wtw('t1', '383');
  EV.td_year = wtw('t1', 'год.');
  EV.td_lump = wtw('t1', 'комочками');
  EV.td_smooth = wtw('t1', 'гладкое?');
  KEYW.push('миллиона', 'гладкое?');

  function room(t) {                                                    // плитка, окно с дождём и горой-глобусом картошки, полки, холодильник, лампа
    vgrad(-600, 1500, ['#2a3a44', '#4a5a64', '#5a6a70']); for (let y = 500; y < 1300; y += 50) for (let x = -400 + (y / 50 % 2) * 50; x < 1600; x += 100) rect(x, y, 98, 48, { wash: '#e8eef0', washA: 0.85, w: 1, col: '#a8b8c0' });
    push(820, 260, 1); const w = rect(-200, -220, 400, 400, { wash: '#1a2440', washA: 1, w: 10, col: '#e8e8e8', key: 16900 }); ctx.save(); ctx.clip(w.path); vgrad(-220, 180, ['#141a34', '#3a3a5a']); for (let i = 0; i < 16; i++) ell(-180 + (i * 61) % 360, 60 + (i * 37) % 100, 5, 6, { wash: '#ffd890', washA: 0.8, line: false });
      const g = t > EV.td_383 - 0.2 ? sm(clamp((t - EV.td_383 + 0.2) / 1.0)) : 0.2; push(0, 180, 0.4 + g * 0.6); for (let i = 0; i < 26; i++) { const r = rng(16901 + i), a = r() * Math.PI, d = r() * 150; potato(Math.cos(a) * d * 1.3, -Math.sin(a) * d, 0.5, r() * 6, { key: 16902 + i }); } pop();
      for (let i = 0; i < 30; i++) { const r = rng(16930 + i), q = (t * 1.6 + r()) % 1; pencil([[-200 + r() * 400, -220 + q * 420], [-206 + r() * 400, -190 + q * 420]], { w: 2, col: '#a8c0e0', a: 0.5, pass2: false }); } ctx.restore(); pencil([[0, -220], [0, 180]], { w: 8, col: '#e8e8e8' }); rect(-220, 180, 440, 20, { wash: '#f4f4f0', washA: 1, w: 1.6 }); push(140, 170, 1); rect(-30, -50, 60, 50, { wash: '#c86a3a', washA: 1, w: 1.4 }); for (let k = 0; k < 4; k++) blob([[0, -50], [-30 + k * 20, -110], [-20 + k * 20, -90]], { wash: '#4a8a3a', washA: 1, w: 1 }); pop(); pop();
    for (const y of [380, 560]) { rect(-380, y, 520, 14, { wash: '#8a6a4a', washA: 1, w: 1.6 }); for (let i = 0; i < 6; i++) { const x = -350 + i * 82; rect(x, y - 80, 56, 80, { wash: '#e8f0f4', washA: 0.5, w: 1.6, col: '#5a7a8a' }); rect(x + 4, y - 50, 48, 50, { wash: ['#f4d870', '#c8642a', '#8a5a2a', '#f4f0e6', '#6a8a3a', '#c8221a'][i], washA: 0.9, line: false }); rect(x - 2, y - 92, 60, 14, { wash: '#c8221a', washA: 1, w: 1 }); } }
    push(1260, 1300, 1); const f = rect(-160, -900, 320, 900, { wash: '#e8ecf0', washA: 1, w: 3, col: '#5a6a74' }); shadeG(f.path, 160, -450, -160, -450, '#a8b4bc', 0.4); pencil([[-160, -560], [160, -560]], { w: 3, col: '#5a6a74', pass2: false }); rect(-140, -700, 14, 100, { wash: '#8a9aa4', washA: 1, w: 1 }); for (const [x, y, c] of [[-40, -820, '#e83a3a'], [40, -760, '#3a8ac8'], [-60, -660, '#f4c020'], [20, -400, '#3aa83a']]) ell(x, y, 22, 22, { wash: c, washA: 1, w: 1.4 }); pop();
    const on = t > EV.td_now; push(400, -100, 1); pencil([[0, -600], [0, 0]], { w: 3, col: '#2a2a2a', pass2: false }); shape([[-110, 60], [-60, 0], [60, 0], [110, 60]], { wash: '#2a5a4a', washA: 1, w: 2 }); if (on) { glow(0, 80, 380, 'rgba(255,220,150,1)', 0.5); rays(0, 60, 1.57, 0.5, 1500, 'rgba(255,230,170,1)', 0.12, 5, t); } pop();
    push(80, 1180, 1); rect(-200, -120, 400, 120, { wash: '#2a2a2e', washA: 1, w: 2 }); for (const x of [-100, 100]) ell(x, -120, 60, 12, { wash: '#1a1a1a', washA: 1, w: 1.4 }); const p = shape(spline([[-70, -130], [-74, -230], [74, -230], [70, -130]], true, 6), { wash: '#b8bcc4', washA: 1, w: 2, col: '#3a3e44' }); metalG(p.path, -20, -180, 100, '#ffffff', '#b8bcc4', '#6a6e74'); glow(-100, -110, 70, 'rgba(80,120,255,1)', 0.5); for (let k = 0; k < 2; k++) { const q = (t * 0.5 + k / 2) % 1; pencil(spline([[-20 + k * 40, -240], [-14 + k * 40 + Math.sin(q * 6) * 14, -290 - q * 60], [-20 + k * 40, -340 - q * 80]], false, 5), { w: 8, col: '#ffffff', a: 0.35 * (1 - q), pass2: false }); } pop();
  }
  function counter(t) {                                                 // стол: две миски (комочки / гладкое), сетка картошки, табло, календарь, кошачья миска
    const tb = rect(-400, 1440, 1900, 800, { wash: '#c8a070', washA: 1, w: 3, col: '#5a3a1a', key: 16940 }); shadeG(tb.path, 0, 1900, 0, 1440, '#8a6034', 0.4); for (let i = 0; i < 6; i++) pencil([[-400, 1480 + i * 70], [1500, 1484 + i * 70]], { w: 2, col: '#8a6034', a: 0.5, pass2: false });
    for (const [i, x] of [[0, 330], [1, 760]]) { const on = i ? t > EV.td_smooth - 0.1 : t > EV.td_lump - 0.1; if (on) glow(x, 1440, 240, 'rgba(255,230,150,1)', 0.5); mashBowl(x, 1520, 0.9, t, { key: 16941 + i * 4, col: i ? '#f4f0e6' : '#e8f0f8', melt: 0.5, steam: true, h: 64 });
      if (!i) { const r = rng(16950); for (let k = 0; k < 9; k++) ell(x - 70 + r() * 140, 1440 - r() * 50, 9 + r() * 6, 7 + r() * 4, { wash: PU.flesh, washA: 1, w: 1.4, col: '#a8946a' }); } else pencil([[x - 60, 1446], [x + 20, 1430]], { w: 6, col: '#ffffff', a: 0.8, pass2: false });
      if (on) { push(x, 1650, popK(t, i ? EV.td_smooth - 0.1 : EV.td_lump - 0.1, 0.35)); rect(-130, -30, 260, 60, { wash: i ? '#2a5ab0' : '#a8642a', washA: 1, w: 2.4, col: '#1a0a04' }); txt(i ? 'ГЛАДКОЕ' : 'С КОМОЧКАМИ', 0, 12, i ? 34 : 28, { font: 'Osw', col: '#fff4d0' }); pop(); } }
    push(1100, 1500, 1); const n = blob([[-90, 0], [-100, -100], [-60, -150], [60, -150], [100, -100], [90, 0]], { wash: '#d8a040', washA: 0.4, w: 2, col: '#8a5a10' }); for (let i = 0; i < 6; i++) potato(-50 + (i % 3) * 50, -40 - Math.floor(i / 3) * 50, 0.42, i, { key: 16955 + i }); hatch(n.path, n.bb, { gap: 12, a: 0.7, col: '#c87a10', ang: 0.8 }); hatch(n.path, n.bb, { gap: 12, a: 0.7, col: '#c87a10', ang: -0.8 }); pop();
    push(-60, 1520, 1); ell(0, 0, 60, 16, { wash: '#e83a5a', washA: 1, w: 1.6 }); txt('TOM', 0, 6, 16, { font: 'Osw', col: '#ffffff' }); pop();
    if (t > EV.td_383 - 0.1) { const q = clamp((t - EV.td_383 + 0.1) / 0.9), v = Math.round(lerp(0, 383, sm(q))); push(680, 1060, 0.8 * popK(t, EV.td_383 - 0.1, 0.4)); rect(-250, -66, 500, 132, { wash: '#1a1a20', washA: 1, w: 5, col: '#c8a050' }); txt(v + ' 000 000 Т', 0, 14, 60, { font: 'Osw', col: '#ffe070' }); txt('В ГОД', 0, 54, 24, { font: 'Osw', col: '#f4e6c8' }); pop(); }
  }
  function front(t) { push(-40, 1970, 1.6); masher(0, -10, 1.0, 1.2); pop(); push(1180, 1990, 1.6); for (let i = 0; i < 3; i++) potato(-60 + i * 60, -30, 0.7, i, { key: 16960 + i }); pop(); motes(20, [0, 300, 1100, 1700], '#fff0d0', t, 16965, { sp: 6, sz: 4, a: 0.4, wob: 2 }); }
  WORLD.today = (t, u, cat) => {
    lay(14, () => { room(t); haze('#a8b8c0', 0.05); });
    lay(1, () => { cat(); });
    lay(0.95, () => { counter(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.today = {
    outfit: 'pufferK', light: { side: -1, rim: '#ffe0a0' }, grade: ['#ffd0a0', 0.05],
    act: () => [[S0.today, 'grin'], [EV.td_383, 'shock'], [EV.td_year, 'awe'], [EV.td_lump, 'sideeye'], [EV.td_smooth, 'suspicious']],
    pose: (t, u, b) => { const q = t > EV.td_smooth - 0.2; return Object.assign(b, { x: 540, y: 1700, s: 1.02, flip: q ? 1 : -1, look: q ? [0.8, 0.5] : t > EV.td_lump ? [-0.8, 0.5] : t > EV.td_383 ? [0.5, -0.8] : [0, 0], hand: [180, -300], handF: [-60, -220], prop: 'masherP', propAng: 0.3, point: t > EV.td_lump ? 1 : undefined }); },
    cam: () => [[S0.today, 560, 900, 0.06], [EV.td_383, 700, 700, 0.14, 'x'], [EV.td_year, 560, 1100, 0.14], [EV.td_lump, 540, 1350, 0.2], [S1.today, 540, 1350, 0.24]]
  };
  // ---------------------------------------------------------------- переход: толкушка продавливает кадр сеткой
  TRANS_IN.today = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const e = sm(k), R = e * e * 160 + 2, P = new Path2D(); for (let i = 0; i < 7; i++) for (let j = 0; j < 12; j++) { const x = 77 + i * 154, y = 80 + j * 160; P.moveTo(x + R, y); P.arc(x, y, R, 0, 6.283); } inPath(P, () => drawBuf(B, 1, 540, 960));
    scr(() => { if (e < 0.7) { ctx.save(); ctx.fillStyle = 'rgba(184,188,196,' + (0.6 * (1 - e)) + ')'; ctx.fillRect(0, 0, W, H); ctx.restore(); } });
  } };
})();
