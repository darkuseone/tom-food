/* 011 — `dough`: «Тесто тянули на скатерти так тонко, что сквозь него читали любовное письмо.» Венская кухня XIX в. утром: бело-голубой кафель, большое окно
   с лучами и геранью, полки с медными кастрюлями и банками (Mehl, Zucker, Zimt), чугунная плита с паром, часы, связки трав. Две кухарки в косынках обходят стол и
   тянут тесто тыльной стороной ладоней; тесто — полупрозрачная простыня поверх клетчатой скатерти, свисает краями. Миски с яблоками, изюмом, сухари на масле.
   По словам: «скатерти» — тесто расползается по столу; «тонко» — сквозь тесто проступает клетка; «сквозь» — Том подкладывает письмо, «Mein Schatz» читается
   сквозь тесто; «письмо» + немая пауза — сердечки, Том краснеет, кухарка хихикает. Переход В сцену: прошлый кадр растягивается, как тесто, до прозрачности. */
(() => {
  EV.dg_cloth = wtw('s4', 'скатерти');
  EV.dg_thin = wtw('s4', 'тонко,');
  EV.dg_thru = wtw('s4', 'сквозь');
  EV.dg_love = wtw('s4', 'любовное');
  EV.dg_gag = LE('s4');
  SHAKES.push([EV.dg_love + 0.1, 0.15, 6]);
  KEYW.push('тонко,', 'письмо.');
  const st = t => sm(clamp((t - S0.dough) / (EV.dg_thin - S0.dough + 0.3)));

  function kitchen(t) {                                                 // кафель, окно с лучами и геранью, полки с медью и банками, плита, часы, травы
    vgrad(-600, 1500, ['#e8e4d8', '#f2eee4', '#e0d8c8']);
    for (let y = 300; y < 1200; y += 56) for (let x = -400; x < 1600; x += 56) { rect(x, y, 56, 56, { wash: ((x + y) / 56) % 2 ? '#f4f6f8' : '#dce8f2', washA: 0.95, w: 1, col: '#9aaab8', a: 0.4 }); if (((x / 56 + y / 56) % 5) === 0) txt('✿', x + 28, y + 36, 26, { col: '#3a6aa8', a: 0.6 }); }
    push(540, 380, 1); const w = rect(-200, -340, 400, 520, { wash: '#cfe6f6', washA: 1, w: 8, col: '#f0ece4', key: 11600 }); ctx.save(); ctx.clip(w.path); vgrad(-340, 180, ['#a8d0f0', '#e8f4fa']); for (let i = 0; i < 5; i++) sil([[-220 + i * 100, 180], [-210 + i * 100, -40 - (i % 2) * 60], [-150 + i * 100, -60 - (i % 2) * 60], [-140 + i * 100, 180]], '#b8c8d0', 0.8); ctx.restore();
      pencil([[0, -340], [0, 180]], { w: 10, col: '#f0ece4' }); pencil([[-200, -80], [200, -80]], { w: 10, col: '#f0ece4' }); rect(-230, 180, 460, 30, { wash: '#f0ece4', washA: 1, w: 2 });
      for (let i = 0; i < 3; i++) { push(-140 + i * 140, 180, 1); shape([[-40, 0], [-30, -60], [30, -60], [40, 0]], { wash: '#b8643a', washA: 1, w: 2 }); for (let k = 0; k < 6; k++) { ell(-30 + k * 12, -70 - (k % 2) * 16, 14, 12, { wash: '#3a7a2a', washA: 1, w: 1 }); if (k % 2) ell(-30 + k * 12, -90 - (k % 3) * 10, 7, 7, { wash: '#d9283a', washA: 1, w: 1 }); } pop(); }
      for (const sd of [-1, 1]) { const c = shape(spline([[sd * 230, -360], [sd * 180, -360], [sd * 170, 0], [sd * 220, 200], [sd * 260, 200]], true, 6), { wash: '#f8f4ea', washA: 0.9, w: 1.6, col: '#a89a7a' }); for (let k = 0; k < 4; k++) pencil([[sd * (180 + k * 12), -340], [sd * (180 + k * 14), 180]], { w: 1.4, col: '#d8c8a8', a: 0.6, pass2: false }); } pop();
    rays(540, 200, 1.9, 0.35, 1600, 'rgba(255,248,220,1)', 0.16, 6, t);
    for (const [x0, y] of [[-380, 340], [-380, 560], [860, 380], [860, 600]]) { rect(x0, y, 520, 18, { wash: '#8a5a2a', washA: 1, w: 2, col: '#2a1408' }); const r = rng(11610 + x0 + y);
      for (let i = 0; i < 5; i++) { const x = x0 + 40 + i * 98; if (y < 500) { const p = ell(x, y - 40, 40, 40, { wash: '#c8743a', washA: 1, w: 2, col: '#3a1a08' }); metalG(p.path, x - 14, y - 54, 50, '#ffc890', '#c8743a', '#5a2a0a'); pencil([[x + 38, y - 40], [x + 80, y - 50]], { w: 6, col: '#8a4a1a' }); }
        else { const h = 70 + r() * 30; const j = rect(x - 28, y - h, 56, h, { wash: '#e8eef0', washA: 0.5, w: 1.6, col: '#6a7a8a' }); rect(x - 26, y - h * 0.7, 52, h * 0.7 - 2, { wash: ['#f4ecd8', '#ffffff', '#a8643a', '#5a2a1a', '#e8c070'][i], washA: 0.9, line: false }); rect(x - 30, y - h - 8, 60, 12, { wash: '#c84a2a', washA: 1, w: 1.2 }); rect(x - 22, y - h * 0.6, 44, 22, { wash: '#fffaf0', washA: 1, w: 1 }); txt(['Mehl', 'Zucker', 'Zimt', 'Rosinen', 'Butter'][i], x, y - h * 0.6 + 16, 14, { font: 'Hand', col: '#3a2a1a' }); } } }
    push(1180, 800, 1); const cl = ell(0, 0, 60, 60, { wash: '#f8f4e8', washA: 1, w: 4, col: '#5a3a1a' }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; pencil([[Math.cos(a) * 48, Math.sin(a) * 48], [Math.cos(a) * 54, Math.sin(a) * 54]], { w: 2, col: '#2a1a0a', pass2: false }); } pencil([[0, 0], [Math.cos(t * 0.5) * 36, Math.sin(t * 0.5) * 36]], { w: 3, col: '#2a1a0a', pass2: false }); pencil([[0, 0], [0, -26]], { w: 4, col: '#2a1a0a', pass2: false }); pop();
    pencil([[300, 820], [780, 820]], { w: 6, col: '#5a3a1a' }); for (let i = 0; i < 6; i++) { const x = 330 + i * 84; pencil([[x, 820], [x, 860]], { w: 2, col: '#3a2a1a', pass2: false }); const p = ell(x, 900 + (i % 2) * 20, 30 + (i % 3) * 8, 30 + (i % 3) * 8, { wash: '#c8743a', washA: 1, w: 2, col: '#3a1a08' }); metalG(p.path, x - 10, 890, 40, '#ffc890', '#c8743a', '#5a2a0a'); pencil([[x, 860], [x, 900 - 30]], { w: 6, col: '#8a4a1a', pass2: false }); }
    push(-200, 1240, 1); rect(-140, -420, 280, 420, { wash: '#6a8aa8', washA: 1, w: 2.4, col: '#1a2a3a' }); for (let r = 0; r < 3; r++) { pencil([[-130, -320 + r * 110], [130, -320 + r * 110]], { w: 4, col: '#3a4a5a', pass2: false }); for (let i = 0; i < 4; i++) { ell(-96 + i * 64, -360 + r * 110, 28, 28, { wash: '#f8f6f0', washA: 1, w: 1.6, col: '#3a4a6a' }); ell(-96 + i * 64, -360 + r * 110, 16, 16, { line: true, w: 2, col: '#3a6aa8' }); } } pop();
    push(1250, 1060, 1); rect(-70, -100, 140, 160, { wash: '#f8f4e8', washA: 1, w: 3, col: '#6a4a2a' }); txt('1848', 0, -60, 26, { font: 'Osw', col: '#a82a2a' }); for (let i = 0; i < 4; i++) for (let j = 0; j < 5; j++) txt(String(1 + i * 5 + j), -50 + j * 25, -20 + i * 22, 14, { font: 'Hand', col: '#3a3a3a' }); pop();
    for (let i = 0; i < 4; i++) { const x = -260 + i * 70; pencil([[x, 0], [x + 6, 160]], { w: 2, col: '#6a5a3a', pass2: false }); for (let k = 0; k < 5; k++) blob([[x, 60 + k * 22], [x - 18, 80 + k * 22], [x + 6, 90 + k * 22]], { wash: i % 2 ? '#6a8a3a' : '#e8e0c8', washA: 1, w: 1, col: '#2a3a1a' }); }
  }
  function stove(t) {                                                   // чугунная плита с кастрюлей и паром
    push(1060, 1260, 1); const s = rect(-200, -260, 400, 260, { wash: '#2a2a2e', washA: 1, w: 2.4, col: '#0a0a0a', key: 11620 }); metalG(s.path, -60, -200, 300, '#5a5a62', '#2a2a2e', '#0a0a0a'); for (let i = 0; i < 2; i++) { rect(-160 + i * 200, -170, 120, 90, { wash: '#1a1a1e', washA: 1, w: 2 }); glow(-100 + i * 200, -110, 60, 'rgba(255,120,40,1)', 0.5); }
    const p = shape([[-150, -260], [-140, -380], [-20, -380], [-10, -260]], { wash: '#c8743a', washA: 1, w: 2.4, col: '#3a1a08' }); metalG(p.path, -110, -340, 120, '#ffc890', '#c8743a', '#5a2a0a');
    for (let i = 0; i < 4; i++) { const q = (t * 0.4 + i / 4) % 1; pencil(spline([[-80, -390], [-80 + Math.sin(q * 6 + i) * 40, -390 - q * 200], [-80 + Math.sin(q * 9 + i) * 60, -390 - q * 380]], false, 5), { w: 12, col: '#ffffff', a: 0.3 * (1 - q), pass2: false }); }
    rect(60, -380, 100, 120, { wash: '#a8643a', washA: 1, w: 2 }); pop();
  }
  function cooks(t) {                                                   // две кухарки обходят стол и тянут тесто
    const gig = t > EV.dg_gag;
    const a = lerp(-0.4, 0.3, st(t)), x1 = 110 + Math.sin(a) * 60, x2 = 990 - Math.sin(a) * 50;
    human(x1, 1360, 1.15, t, { body: '#5a7aa8', legs: '#2a2a3a', hair: '#8a4a2a', face: gig ? 'grin' : 'smile', armL: 'hold', armR: 'hold', look: 0.5, seed: 61, long: 1 }); kerchief20(x1, 1360, 1.15, '#d9482b');
    human(x2, 1360, 1.15, t, { body: '#8a3a4a', legs: '#2a2a3a', hair: '#3a2a1a', face: gig ? 'grin' : t > EV.dg_love ? 'shock' : 'smile', armL: gig ? 'up' : 'hold', armR: 'hold', look: -0.5, seed: 62, flip: -1, long: 1 }); kerchief20(x2, 1360, 1.15, '#3a6aa8', -1);
    for (const x of [x1, x2]) { push(x, 1360 - 70, 1.15); const ap = rect(-46, -150, 92, 150, { wash: '#ffffff', washA: 1, w: 1.6, col: '#8a8a8a' }); pop(); }
  }
  function table(t) {                                                   // стол перед Томом: скатерть в клетку в перспективе, тесто-простыня растёт и свисает, письмо под тестом, миски
    const k = st(t), Y0 = 1400, Y1 = 1580;
    const top = poly([[-60, Y0], [1140, Y0], [1300, Y1], [-220, Y1]], { wash: '#f4ecdc', washA: 1, w: 2.4, col: '#4a3a2a', key: 11630 });
    ctx.save(); ctx.clip(top.path); for (let i = -6; i < 20; i++) pencil([[-60 + i * 70, Y0], [-220 + i * 70 * 1.27, Y1]], { w: 14, col: '#c83a3a', a: 0.28, pass2: false }); for (let j = 0; j < 5; j++) pencil([[-300, Y0 + 10 + j * 38], [1400, Y0 + 10 + j * 38]], { w: 12 + j * 2, col: '#c83a3a', a: 0.28, pass2: false }); ctx.restore();
    const fr = poly([[-220, Y1], [1300, Y1], [1300, 2000], [-220, 2000]], { wash: '#f0e6d4', washA: 1, w: 2.4, col: '#4a3a2a', key: 11631 }); ctx.save(); ctx.clip(fr.path); for (let i = 0; i < 26; i++) pencil([[-220 + i * 60, Y1], [-220 + i * 60, 2000]], { w: 16, col: '#c83a3a', a: 0.3, pass2: false }); for (let j = 0; j < 8; j++) pencil([[-220, Y1 + 20 + j * 60], [1300, Y1 + 20 + j * 60]], { w: 16, col: '#c83a3a', a: 0.3, pass2: false }); ctx.restore(); shadeG(fr.path, 0, Y1, 0, 1900, '#8a7a6a', 0.35);
    push(80, Y0 + 10, 1); ell(0, 0, 90, 26, { wash: '#f0ece4', washA: 1, w: 2, col: '#4a4a52' }); for (let i = 0; i < 10; i++) { push(-60 + (i % 5) * 30, -14 - Math.floor(i / 5) * 14, 1, i); rect(-14, -10, 28, 20, { wash: SD.apple, washA: 1, w: 1.2, col: '#8a5a1a' }); pop(); } pop();
    push(1010, Y0 + 10, 1); ell(0, 0, 60, 18, { wash: '#f0ece4', washA: 1, w: 2, col: '#4a4a52' }); for (let i = 0; i < 9; i++) ell(-36 + (i % 5) * 18, -10 - Math.floor(i / 5) * 10, 7, 6, { wash: SD.raisin, washA: 1, w: 1 }); pop();
    push(250, Y0 + 4, 0.8); const pan = ell(0, 0, 80, 22, { wash: '#2a2a2e', washA: 1, w: 2 }); ell(0, -4, 64, 16, { wash: '#c8964a', washA: 1, line: false }); for (let i = 0; i < 14; i++) ell(-50 + (i * 37) % 100, -6 + (i % 3) * 4, 4, 3, { wash: '#8a5a1a', washA: 1, line: false }); pop();
    if (t > EV.dg_thru - 0.3) { const lk = sm(clamp((t - EV.dg_thru + 0.3) / 0.5)); push(lerp(900, 540, lk), 1500, 1.1, -0.04); poly([[-130, -40], [130, -40], [150, 40], [-150, 40]], { wash: '#fbe6e0', washA: 1, w: 1.6, col: '#8a4a4a' }); txt('Mein Schatz, ich liebe dich!', 0, -6, 26, { font: 'Hand', col: '#7a1a2a' }); txt('♥', 110, 26, 24, { col: '#d9283a' }); pop(); }
    const rx = lerp(160, 760, k), ry = lerp(40, 100, k), cx = 540, cy = 1490, hang = clamp((k - 0.4) / 0.6) * 220;
    const d = shape(spline([[cx - rx, cy], [cx - rx * 0.7, cy - ry], [cx, cy - ry * 1.05], [cx + rx * 0.7, cy - ry], [cx + rx, cy], [cx + rx * 0.9 + 20, cy + ry * 0.9 + hang + Math.sin(t * 2) * 6], [cx + rx * 0.4, cy + ry + hang * 1.1], [cx - rx * 0.2, cy + ry + hang * 0.9], [cx - rx * 0.7, cy + ry + hang * 1.15], [cx - rx * 0.95 - 20, cy + ry * 0.8 + hang + Math.sin(t * 2 + 1) * 6]], true, 6), { wash: '#f4dcae', washA: lerp(0.97, 0.6, k), w: 3, col: '#a8844a', key: 11632 }); shadeG(d.path, 0, cy + ry + hang, 0, cy - ry, '#d8b478', 0.35);
    pencil(spline([[cx - rx * 0.95, cy + 4], [cx - rx * 0.6, cy - ry * 0.95], [cx, cy - ry], [cx + rx * 0.6, cy - ry * 0.95], [cx + rx * 0.95, cy + 4]], false, 8), { w: 7, col: '#e8c890', a: 0.8, pass2: false });
    for (let i = 0; i < 5; i++) { const fx = cx - rx * 0.8 + i * rx * 0.4; pencil(spline([[fx, cy + ry * 0.6], [fx + 10, cy + ry + hang * 0.5], [fx - 6, cy + ry + hang * 0.95]], false, 5), { w: 3, col: '#b8945a', a: 0.6 * clamp(hang / 100), pass2: false }); }
    const r = rng(11633); for (let i = 0; i < 22; i++) { const x = cx + (r() - 0.5) * rx * 1.8, y = cy - ry * 0.8 + r() * (ry * 1.6 + hang); pencil([[x, y], [x + 30 + r() * 30, y + (r() - 0.5) * 20]], { w: 1.2, col: '#c8a878', a: 0.5, pass2: false }); }
    glow(cx - 120, cy - 30, 140, 'rgba(255,255,240,1)', 0.3 * k);
    push(160, 1540, 1, -0.15); rect(-150, -18, 300, 36, { wash: '#d8b070', washA: 1, w: 2.4, col: '#4a2a08' }); for (const sd of [-1, 1]) rect(sd > 0 ? 150 : -210, -12, 60, 24, { wash: '#a87a3a', washA: 1, w: 2 }); pop();
    push(940, 1545, 1); blob([[-110, 10], [-60, -30], [0, -46], [70, -30], [110, 10]], { wash: '#ffffff', washA: 0.9, w: 1.2, col: '#c8c0b0' }); for (let i = 0; i < 3; i++) ell(-50 + i * 50, 30, 16, 8, { wash: '#ffffff', washA: 0.7, line: false }); pop();
  }
  function hearts(t) { if (t < EV.dg_love + 0.4) return; for (let i = 0; i < 8; i++) { const q = ((t - EV.dg_love) * 0.6 + i / 8) % 1; txt('♥', 620 + Math.sin(i * 2.1) * 200 + Math.sin(q * 6) * 30, 1200 - q * 500, 40 + (i % 3) * 14, { col: ['#d9283a', '#ff6a8a', '#ff9ab0'][i % 3], a: 1 - q }); } }
  function front(t) {                                                   // передний план: мешок муки MEHL, край свисающего теста, кувшин с деревянными ложками, мука в воздухе
    push(-80, 1900, 1.5); const m = shape(spline([[-130, 0], [-140, -160], [-110, -260], [-60, -290], [60, -290], [110, -250], [140, -160], [130, 0]], true, 6), { wash: '#e8dcc0', washA: 1, w: 2.4, col: '#5a4a2a' }); shadeG(m.path, 130, 0, -60, 0, '#a89a7a', 0.45); txt('MEHL', 0, -130, 44, { font: 'Osw', col: '#7a3a1a' }); txt('Ungarn', 0, -90, 26, { font: 'Hand', col: '#5a3a1a' }); ell(0, -290, 70, 18, { wash: '#ffffff', washA: 1, w: 1.6 }); pop();
    push(1180, 1900, 1.4); const j = shape([[-60, 0], [-70, -150], [70, -150], [60, 0]], { wash: '#b8643a', washA: 1, w: 2.4, col: '#3a1a08' }); shadeG(j.path, 60, 0, -40, 0, '#5a2a10', 0.45); for (let i = 0; i < 4; i++) { pencil([[-40 + i * 26, -140], [-60 + i * 34, -380]], { w: 9, col: '#c8a060' }); ell(-60 + i * 34, -390, 18, 26, { wash: '#c8a060', washA: 1, w: 1.6 }); } pop();
    motes(50, [0, 600, 1080, 1900], '#ffffff', t, 11640, { sp: 12, sz: 5, a: 0.55, wob: 2 });
  }
  WORLD.dough = (t, u, cat) => {
    lay(13, () => { kitchen(t); haze('#fff8e8', 0.06); });
    lay(4, () => { stove(t); });
    lay(2.4, () => { cooks(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { table(t); hearts(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.dough = {
    outfit: 'chef', light: { side: 1, rim: '#fff4d0' }, grade: ['#ffe8c0', 0.05],
    act: () => [[S0.dough, 'awe'], [EV.dg_thin, 'proud'], [EV.dg_thru, 'sideeye'], [EV.dg_love, 'grin'], [EV.dg_gag, 'laugh']],
    pose: (t, u, b) => { const lt = t > EV.dg_thru - 0.2, gag = t > EV.dg_gag; return Object.assign(b, { x: 600, y: 1560, s: 1.05, flip: -1, look: lt ? [-0.2, 0.7] : [0, 0.5], tilt: gag ? Math.sin(t * 10) * 0.05 : 0,
      hand: lt ? [80, -110] : [150, -130 + Math.sin(t * 4) * 10], handF: gag ? [-60, -420] : lt ? [-90, -110] : [-150, -130 + Math.cos(t * 4) * 10], tailUp: gag, sweat: gag }); },
    afterCat: (t, u, P) => { if (t > EV.dg_love) { const k = clamp((t - EV.dg_love) / 0.4); for (const sd of [-1, 1]) glow(P.x + sd * 70 * P.s, P.y - 300 * P.s, 40 * P.s, 'rgba(255,90,120,1)', 0.55 * k); } },
    cam: () => [[S0.dough, 540, 1040, 0.12], [EV.dg_cloth, 540, 1180, 0.18, 'x'], [EV.dg_thru, 560, 1270, 0.3], [EV.dg_love, 560, 1240, 0.32], [S1.dough, 580, 1220, 0.36]]
  };
  // ---------------------------------------------------------------- переход: кадр растягивается, как тесто, и становится прозрачным
  TRANS_IN.dough = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const e = sm(k); ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1 - e; ctx.translate(540, 960); ctx.scale(1 + e * 0.9, 1 + e * 0.35); ctx.drawImage(A, -540, -960); ctx.restore();
    scr(() => { ctx.globalAlpha = 0.35 * Math.sin(e * Math.PI); ctx.fillStyle = '#f8ecd0'; ctx.fillRect(0, 0, W, H); ctx.globalAlpha = 1; const r = rng(11650); for (let i = 0; i < 9; i++) { const x = r() * W, y = r() * H, R = e * (200 + r() * 260); ctx.save(); ctx.globalCompositeOperation = 'destination-over'; ctx.restore(); if (R > 10) { ctx.strokeStyle = '#c8a878'; ctx.globalAlpha = 0.4 * (1 - e); ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(x, y, R, R * 0.7, 0, 0, 6.283); ctx.stroke(); ctx.globalAlpha = 1; } } });
  } };
})();
