/* 013 — `stew`: «В XVIII веке это даже не суп, а второе блюдо: квашеная капуста, рыба, уксус.» Изба зимой: бревенчатые стены, белая русская печь с чугунками
   и ухватом, окно с морозным узором и деревней, полка с деревянными ложками и мисками, рушник, связки лука, лапти на гвозде, кадка с квашеной капустой. Хозяйка
   вынимает из печи чугунную сковороду «селянки», дед с бородой ждёт с вилкой. Том в рубахе и фартуке.
   По словам: «не суп» — миска с супом перечёркнута; «второе блюдо» — сковорода встаёт на стол, Том с вилкой; «капуста» — из кадки выкатываются кочаны;
   «рыба» — на доске подпрыгивает рыбина; «уксус» — из штофа капают капли. Переход В сцену: кадр рвётся на полоски, как шинкованная капуста, и осыпается. */
(() => {
  EV.st_not = wtw('s1', 'суп,');
  EV.st_sec = wtw('s1', 'второе');
  EV.st_cab = wtw('s1', 'капуста,');
  EV.st_fish = wtw('s1', 'рыба,');
  EV.st_vin = wtw('s1', 'уксус.');
  SHAKES.push([EV.st_sec + 0.2, 0.18, 8]);
  KEYW.push('суп,', 'капуста,');

  function izba(t) {                                                    // брёвна, окно с морозом и деревней, полки, рушник, лук, лапти
    vgrad(-600, 1500, ['#3a2410', '#6a4422', '#7a5028']);
    for (let y = -500; y < 1300; y += 76) { const lg = rect(-400, y, 2000, 72, { wash: y % 152 ? '#8a5a2a' : '#7a4e24', washA: 1, w: 2, col: '#2a1408' }); shadeG(lg.path, 0, y + 72, 0, y, '#3a2010', 0.45); for (let k = 0; k < 6; k++) ell(-300 + k * 360 + (y % 3) * 40, y + 36, 14, 10, { wash: '#5a3414', washA: 0.6, line: false }); }
    push(540, 340, 1); const w = rect(-160, -200, 320, 320, { wash: '#a8c8e0', washA: 1, w: 10, col: '#4a2a10', key: 13200 }); ctx.save(); ctx.clip(w.path); vgrad(-200, 120, ['#c8dcec', '#f0f4f8']); for (let i = 0; i < 4; i++) { const x = -150 + i * 100; rect(x, 40, 70, 80, { wash: '#6a4a2a', washA: 1, w: 1.4 }); poly([[x - 10, 40], [x + 35, 0], [x + 80, 40]], { wash: '#f4f8fc', washA: 1, w: 1.4 }); }
      for (let i = 0; i < 14; i++) { const r = rng(13201 + i); const cx = -160 + r() * 320, cy = -200 + r() * 320; for (let k = 0; k < 5; k++) { const a = k / 5 * 6.283 + r(); pencil([[cx, cy], [cx + Math.cos(a) * 30, cy + Math.sin(a) * 30]], { w: 2, col: '#ffffff', a: 0.7, pass2: false }); } } motes(20, [-160, -200, 160, 120], '#ffffff', t, 13202, { sp: 30, sz: 3, a: 0.8, wob: 1 }); ctx.restore();
      pencil([[0, -200], [0, 120]], { w: 8, col: '#4a2a10' }); pencil([[-160, -40], [160, -40]], { w: 8, col: '#4a2a10' }); const nl = poly([[-200, -200], [-100, -280], [0, -300], [100, -280], [200, -200]], { wash: '#c8a070', washA: 1, w: 2.4, col: '#3a1a08' }); for (let i = 0; i < 7; i++) ell(-120 + i * 40, -240 - Math.sin(i / 6 * 3.14) * 30, 8, 8, { wash: '#a8221a', washA: 1, w: 1 }); pop();
    rect(-380, 300, 460, 18, { wash: '#5a3414', washA: 1, w: 2, col: '#1a0a04' }); for (let i = 0; i < 6; i++) { const x = -340 + i * 72; push(x, 300, 1, 0.1 * (i % 2 ? 1 : -1)); pencil([[0, 0], [0, -110]], { w: 6, col: '#c8904a' }); ell(0, -120, 16, 24, { wash: '#c8904a', washA: 1, w: 1.6, col: '#5a3414' }); pop(); }
    rect(-380, 540, 460, 18, { wash: '#5a3414', washA: 1, w: 2, col: '#1a0a04' }); for (let i = 0; i < 3; i++) { const x = -310 + i * 140; ell(x, 520, 56, 18, { wash: '#a8643a', washA: 1, w: 2, col: '#3a1a08' }); ell(x, 514, 46, 12, { wash: '#c88a5a', washA: 1, line: false }); }
    push(880, 200, 1); const tw = rect(-40, 0, 80, 360, { wash: '#f8f4ea', washA: 1, w: 1.6, col: '#8a7a5a' }); for (let i = 0; i < 4; i++) txt('✿', 0, 300 + i * 18, 22, { col: '#c8221a' }); pencil([[-40, 280], [40, 280]], { w: 6, col: '#c8221a', pass2: false }); pop();
    for (let i = 0; i < 2; i++) { const x = 980 + i * 70; pencil([[x, 120], [x + 4, 380]], { w: 2, col: '#6a5a3a', pass2: false }); for (let k = 0; k < 6; k++) ell(x + (k % 2 ? 10 : -10), 160 + k * 38, 18, 20, { wash: '#c88a3a', washA: 1, w: 1.4, col: '#5a3a08' }); }
    push(1180, 500, 1); pencil([[0, -60], [0, -20]], { w: 3, col: '#3a3a3a', pass2: false }); for (const sd of [-1, 1]) { const l = blob([[sd * 10, 0], [sd * 40, -10], [sd * 50, 60], [sd * 30, 90], [sd * 10, 80]], { wash: '#c8a868', washA: 1, w: 1.6, col: '#5a4a1a' }); hatch(l.path, l.bb, { gap: 6, a: 0.5, col: '#7a6a3a', ang: 0.8 }); } pop();
  }
  function stove(t) {                                                   // русская печь: белёная, устье с огнём, чугунки, ухват, хозяйка
    push(-120, 1320, 1); const o = shape([[-320, 0], [-320, -620], [300, -620], [300, 0]], { wash: '#f0ece2', washA: 1, w: 3, col: '#5a4a3a', key: 13210 }); shadeG(o.path, 300, 0, -100, 0, '#b8b0a0', 0.4);
    const m = blob([[-120, -180], [-120, -330], [0, -390], [120, -330], [120, -180]], { wash: '#1a0a04', washA: 1, w: 3, col: '#2a1408' }); for (let i = 0; i < 5; i++) { const f = Math.sin(t * 9 + i) * 12; blob([[-80 + i * 40, -180], [-90 + i * 40, -240 - f], [-70 + i * 40, -300 - f * 2], [-60 + i * 40, -240], [-40 + i * 40, -180]], { wash: i % 2 ? '#ff8a2a' : '#ffd04a', washA: 0.9, line: false }); } glow(0, -250, 260, 'rgba(255,140,50,1)', 0.5);
    for (let i = 0; i < 3; i++) { const x = -260 + i * 60; const c = blob([[x - 26, -620], [x - 30, -660], [x - 18, -690], [x + 18, -690], [x + 30, -660], [x + 26, -620]], { wash: '#2a2a2e', washA: 1, w: 2, col: '#0a0a0a' }); } pencil([[200, -10], [260, -400]], { w: 10, col: '#6a4424' }); pencil(spline([[230, -400], [250, -440], [290, -430], [280, -400]], false, 5), { w: 6, col: '#3a3a3a', pass2: false }); pop();
    human(300, 1330, 1.15, t, { body: '#a8282a', legs: '#2a2a3a', hair: '#3a2a1a', face: t > EV.st_sec ? 'smile' : 'calm', armL: 'hold', armR: 'hold', look: 0.6, seed: 13211, long: 1 }); kerchief20(300, 1330, 1.15, '#2a5ab8');
    human(980, 1320, 1.12, t, { body: '#efe8d6', legs: '#3a3228', hair: '#d8d0c0', beard: 'long', face: t > EV.st_vin ? 'grin' : t > EV.st_not ? 'shock' : 'calm', armL: 'hold', armR: t > EV.st_sec ? 'up' : 'hold', look: -0.6, seed: 13212, flip: -1, long: 1 });
  }
  function table(t) {                                                   // стол: сковорода селянки, миска супа перечёркнута, кадка капусты, рыба, штоф уксуса
    const tb = rect(-400, 1440, 1900, 800, { wash: '#8a5a2a', washA: 1, w: 3, col: '#1a0a04', key: 13220 }); shadeG(tb.path, 0, 1900, 0, 1440, '#3a1a08', 0.45); for (let i = 0; i < 8; i++) pencil([[-400, 1470 + i * 60], [1500, 1474 + i * 60]], { w: 2, col: '#4a2a10', a: 0.5, pass2: false });
    const pk = sm(clamp((t - EV.st_sec + 0.3) / 0.5)); selyankaPan(lerp(-200, 420, pk), 1480 - Math.sin(pk * Math.PI) * 60, 1.0, t, { key: 13221 });
    push(820, 1480, 1); ell(0, 0, 90, 28, { wash: '#a8643a', washA: 1, w: 2, col: '#3a1a08' }); ell(0, -4, 76, 20, { wash: '#d8a868', washA: 1, line: false }); pop();
    if (t > EV.st_not) { const q = clamp((t - EV.st_not) / 0.3); pencil([[740, 1430], [lerp(740, 900, q), lerp(1430, 1530, q)]], { w: 10, col: '#d9282a', pass2: false }); pencil([[900, 1430], [lerp(900, 740, q), lerp(1430, 1530, q)]], { w: 10, col: '#d9282a', pass2: false }); txt('СУП?', 820, 1400, 30, { font: 'Osw', col: '#d9282a' }); }
    push(-80, 1460, 1); const kd = shape([[-90, 0], [-80, -160], [80, -160], [90, 0]], { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#2a1408' }); for (const y of [-30, -130]) pencil([[-90, y], [90, y]], { w: 6, col: '#3a3a3a', pass2: false }); ell(0, -160, 80, 18, { wash: '#d8d8a0', washA: 1, w: 2 }); pop();
    if (t > EV.st_cab - 0.1) for (let i = 0; i < 3; i++) { const k = sm(clamp((t - EV.st_cab + 0.1 - i * 0.1) / 0.6)); const x = lerp(-80, 100 + i * 90, k); push(x, 1440 - Math.abs(Math.sin(k * 6)) * 40 * (1 - k), 1, k * 6); const c = ell(0, -30, 40, 36, { wash: '#a8c870', washA: 1, w: 2, col: '#3a5a1a' }); for (let j = 0; j < 4; j++) pencil(spline([[-30 + j * 18, -60], [-34 + j * 18, -30], [-26 + j * 18, -2]], false, 4), { w: 2, col: '#6a8a3a', pass2: false }); pop(); }
    push(1040, 1470, 1); rect(-110, -16, 220, 30, { wash: '#c8a070', washA: 1, w: 2, col: '#4a2a08' }); const jump = t > EV.st_fish ? Math.abs(Math.sin((t - EV.st_fish) * 12)) * 60 * Math.exp(-(t - EV.st_fish) * 2) : 0; push(0, -40 - jump, 1, jump * 0.004); const f = blob([[-90, 0], [-40, -30], [40, -26], [80, 0], [40, 24], [-40, 26]], { wash: '#9aa8b0', washA: 1, w: 2, col: '#2a3a4a' }); poly([[80, 0], [120, -30], [116, 30]], { wash: '#8a98a0', washA: 1, w: 1.6 }); ell(-60, -6, 6, 6, { wash: '#1a1a1a', washA: 1, line: false }); for (let i = 0; i < 6; i++) pencil([[-30 + i * 14, -16], [-24 + i * 14, 14]], { w: 1.4, col: '#c8d8e0', a: 0.6, pass2: false }); pop(); pop();
    push(150, 1470, 1, t > EV.st_vin ? 0.6 : 0); const b = shape(spline([[-26, 0], [-30, -90], [-12, -140], [-12, -180], [12, -180], [12, -140], [30, -90], [26, 0]], true, 6), { wash: '#9ab890', washA: 0.6, w: 2, col: '#3a5a3a' }); rect(-12, -196, 24, 18, { wash: '#8a5a2a', washA: 1, w: 1.4 }); rect(-22, -80, 44, 40, { wash: '#f4ecd8', washA: 1, w: 1.2 }); txt('уксусъ', 0, -54, 14, { font: 'Hand', col: '#3a1a08' }); pop();
    if (t > EV.st_vin + 0.1) for (let i = 0; i < 5; i++) { const q = (t - EV.st_vin - 0.1 + i * 0.12) % 0.6; ell(240 + q * 40, 1330 + q * q * 900, 5, 7, { wash: '#e8e0b0', washA: 0.9, w: 1, col: '#8a8a5a' }); }
    const rn = rect(-400, 1580, 2000, 60, { wash: '#f8f4ea', washA: 1, w: 1.6, col: '#8a7a5a' }); for (let i = 0; i < 28; i++) txt('✿', -380 + i * 72, 1622, 24, { col: '#c8221a' });
    push(640, 1700, 1); const br = blob([[-120, 0], [-110, -60], [-40, -90], [60, -86], [120, -40], [116, 0]], { wash: '#a8642a', washA: 1, w: 2.4, col: '#3a1a08' }); shadeG(br.path, 120, 0, -60, -80, '#5a2a0a', 0.4); for (let i = 0; i < 3; i++) pencil([[-60 + i * 50, -70], [-40 + i * 50, -30]], { w: 3, col: '#f0c080', pass2: false }); pop();
    for (let i = 0; i < 3; i++) { push(200 + i * 60, 1720, 1, 0.3 - i * 0.2); pencil([[0, 0], [0, -110]], { w: 6, col: '#c8904a' }); ell(0, -120, 16, 24, { wash: '#c8904a', washA: 1, w: 1.6, col: '#5a3414' }); pop(); }
    if (t > EV.st_sec + 0.2) bubbleTag('ВТОРОЕ!', 420, 1250, t, EV.st_sec + 0.2, '#8a5a2a', 54, -0.05);
  }
  function front(t) {                                                   // передний план: край лавки, кот на лавке, связка лука, морозный пар
    const bn = rect(-400, 1780, 2000, 120, { wash: '#6a4422', washA: 1, w: 3, col: '#1a0a04' }); shadeG(bn.path, 0, 1900, 0, 1780, '#2a1408', 0.4);
    push(1100, 1780, 1.2); blob([[-80, 0], [-70, -60], [-20, -80], [40, -70], [80, -30], [70, 0]], { wash: '#8a8a8a', washA: 1, w: 2, col: '#2a2a2a' }); ell(-60, -80, 30, 26, { wash: '#8a8a8a', washA: 1, w: 2 }); for (const sd of [-1, 1]) poly([[-60 + sd * 18, -96], [-60 + sd * 26, -120], [-60 + sd * 6, -104]], { wash: '#8a8a8a', washA: 1, w: 1.4 }); pencil([[-64, -80], [-56, -80]], { w: 2, col: '#1a1a1a', pass2: false }); pop();
    for (let i = 0; i < 4; i++) { const y = -80 + i * 70; ell(-30 + (i % 2) * 20, y, 30, 34, { wash: '#c88a3a', washA: 1, w: 1.6, col: '#5a3a08' }); } pencil([[-20, -300], [-10, 200]], { w: 3, col: '#6a5a3a', pass2: false });
    motes(24, [0, 600, 1080, 1700], '#fff0d8', t, 13230, { sp: 8, sz: 4, a: 0.45, wob: 2 }); rays(540, 300, 1.7, 0.3, 1500, 'rgba(230,240,255,1)', 0.1, 5, t);
  }
  WORLD.stew = (t, u, cat) => {
    lay(12, () => { izba(t); haze('#ffe0b0', 0.05); });
    lay(2.8, () => { stove(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { table(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.stew = {
    outfit: 'selA', light: { side: -1, rim: '#ffc080' }, grade: ['#ffb070', 0.08],
    act: () => [[S0.stew, 'awe'], [EV.st_not, 'shock'], [EV.st_sec, 'grin'], [EV.st_cab, 'proud'], [EV.st_fish, 'scared'], [EV.st_vin, 'sideeye']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1720, s: 1.12, flip: -1, look: t < EV.st_sec ? [0.3, 0.3] : [-0.7, 0.5], hand: t > EV.st_sec ? [220, -280] : [120, -240], handF: t > EV.st_not && t < EV.st_sec ? [-100, -380] : [-70, -200], prop: 'forkP', propAng: 0.3 }),
    cam: () => [[S0.stew, 560, 900, 0.08], [EV.st_not - 0.2, 700, 1260, 0.2, 'x'], [EV.st_sec, 520, 1260, 0.2], [EV.st_cab, 360, 1300, 0.22], [EV.st_fish, 620, 1300, 0.2], [S1.stew, 600, 1260, 0.24]]
  };
  // ---------------------------------------------------------------- переход: кадр шинкуется на полоски, как капуста, и осыпается
  TRANS_IN.stew = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const N = 18, w = W / N;
    for (let i = 0; i < N; i++) { const r = rng(13240 + i), d = clamp(k * 1.8 - r() * 0.6 - i * 0.02); if (d >= 1) continue; const dy = d * d * 2200, rot = (r() - 0.5) * d * 0.8;
      ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.translate(i * w + w / 2, dy); ctx.rotate(rot); ctx.translate(-(i * w + w / 2), 0); ctx.beginPath(); ctx.rect(i * w, 0, w - 2, H); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore(); }
    scr(() => { for (let i = 1; i < N; i++) if (k < 0.5) pencil([[i * w, 0], [i * w + (i % 2 ? 6 : -6), H * clamp(k * 3)]], { w: 3, col: '#e8f0c0', a: 0.8, pass2: false, gap: false }); });
  } };
})();
