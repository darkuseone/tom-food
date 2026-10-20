/* 002 — `deficit`: «Докторская, горошек, майонез — так его режут к Новому году с семидесятых.» Кухня-малометражка 1970-х: стены масляной краской,
   газовая плита с чайником, отрывной календарь «31 ДЕКАБРЯ», холодильник с телевизором, за окном снег. Мама режет на доске, бабушка трёт, ребёнок таскает горошек.
   На каждое слово — продукт впрыгивает в кадр: батон докторской, банка горошка (крышка отскакивает), банка майонеза; всё — в эмалированный таз.
   Переход В сцену: брызги рассола от укуса огурчика — капли растут, в каждой уже 1970-е. */
(() => {
  EV.df_saus = wtw('s1', 'Докторская');
  EV.df_peas = wtw('s1', 'горошек');
  EV.df_mayo = wtw('s1', 'майонез');
  EV.df_ny = wtw('s1', 'Новому');
  EV.df_70 = wtw('s1', 'семидесятых.');
  KEYW.push('Докторская,', 'семидесятых.');

  function walls(t) {                                                   // масляная краска до середины, побелка выше, газовая труба, полка с банками
    vgrad(-500, 1700, ['#efe8d6', '#e6dcc4', '#d8cca8']); const p = rect(-400, 760, 2000, 900, { wash: '#7aa08a', washA: 1, w: 2.4, col: '#2a4a3a', key: 3001 }); hatch(p.path, p.bb, { gap: 11, a: 0.1, col: '#2a4a3a', ang: 0.2, key: 3002 }); pencil([[-400, 760], [1600, 760]], { w: 6, col: '#4a6a5a' });
    pencil([[-400, 600], [1600, 600]], { w: 12, col: '#d8d0b8' }); pencil([[-400, 600], [1600, 600]], { w: 2, col: '#7a7060', a: 0.6, pass2: false });
    rect(-60, 420, 420, 22, { wash: '#a8845a', washA: 1, w: 2, col: '#3a2410' }); for (let i = 0; i < 6; i++) { const x = -40 + i * 64; push(x + 24, 420, 1); rect(-22, -80, 44, 80, { wash: ['#e8c070', '#d8603a', '#c8d8a0'][i % 3], washA: 0.8, w: 2, col: '#5a4a3a' }); rect(-24, -92, 48, 14, { wash: '#c8c8c8', washA: 1, w: 1.6 }); pop(); }
    push(930, 330, 1, 0.02); rect(-90, -110, 180, 220, { wash: '#f4ecd6', washA: 1, w: 2.2, col: '#4a3a2a' }); rect(-90, -110, 180, 50, { wash: '#d9482b', washA: 1, w: 2, col: '#4a0e08' }); txt('ДЕКАБРЬ', 0, -84, 26, { font: 'Osw', col: '#fff8ec' });
    txt('31', 0, 10, 110, { font: 'Osw', col: '#d9482b' }); txt('пятница', 0, 84, 24, { font: 'Hand', col: '#2a2a2a' }); pop();
  }
  function window70(t) { const w = rect(380, 120, 420, 560, { wash: '#2a3a5a', washA: 1, w: 5, col: '#e8e0cc', key: 3010 }); ctx.save(); ctx.clip(w.path); vgrad(120, 680, ['#1a2240', '#3a4a6a']);
      for (const [x, h] of [[400, 300], [560, 380], [700, 260]]) { rect(x, 680 - h, 120, h, { wash: '#3a3a52', washA: 1, w: 1.6, col: '#1a1a2a' }); windows(x + 10, 700 - h, 100, h - 50, 3, 6, x + 7, 0.55, '#ffd88a', '#4a4a6a', 0.9); }
      motes(40, [380, 120, 800, 680], '#ffffff', t, 3011, { sp: 60, vx: 10, sz: 4, a: 0.9, wob: 1 }); ctx.restore();
    pencil([[590, 120], [590, 680]], { w: 12, col: '#e8e0cc' }); pencil([[380, 330], [800, 330]], { w: 10, col: '#e8e0cc' }); for (let i = 0; i < 6; i++) blob(ellPts(400 + i * 70, 670, 40, 16, 0, 0.3, 8), { wash: '#ffffff', washA: 0.85, line: false });
    rect(360, 680, 460, 30, { wash: '#efe8d6', washA: 1, w: 2.4, col: '#4a3a2a' }); for (let i = 0; i < 3; i++) { push(430 + i * 140, 680, 1); poly([[-30, 0], [30, 0], [22, -50], [-22, -50]], { wash: '#b8603a', washA: 1, w: 2, col: '#3a1408' }); for (let k = 0; k < 4; k++) blob([[0, -50], [-20 + k * 12, -100], [-6 + k * 12, -60]], { wash: '#4a8a3a', washA: 1, w: 1.4, col: '#1a3a0a' }); pop(); } }
  function stove(t) {                                                   // газовая плита + чайник со свистком
    const s = rect(-260, 860, 360, 420, { wash: '#f2f0e8', washA: 1, w: 2.8, col: '#3a3a3a', key: 3020 }); shadeG(s.path, -260, 0, 100, 0, '#a8a8a0', 0.4); rect(-240, 1000, 320, 200, { wash: '#2a2a2a', washA: 0.8, w: 2 });
    for (let i = 0; i < 4; i++) ell(-200 + i * 80, 880, 12, 12, { wash: '#1a1a1a', washA: 1, w: 1.4 });
    push(-120, 850, 1); const k = blob([[-80, 0], [-90, -60], [-50, -110], [50, -110], [90, -60], [80, 0]], { wash: '#e05040', washA: 1, w: 2.4, col: '#4a0e08' }); glow(-40, -70, 26, 'rgba(255,255,255,1)', 0.6); pencil(spline([[-50, -110], [0, -170], [50, -110]], false, 6), { w: 6, col: '#2a2a2a' }); pencil([[80, -40], [140, -90]], { w: 14, col: '#e05040' });
    for (let i = 0; i < 4; i++) { const kk = (t * 0.8 + i / 4) % 1; pencil(spline([[150, -100 - kk * 160], [160 + Math.sin(t * 3 + i) * 20, -140 - kk * 160], [150, -180 - kk * 160]], false, 5), { w: 5, col: '#ffffff', a: 0.5 * (1 - kk), pass2: false }); } pop();
  }
  function fridgeTV(t) {                                                // пузатый холодильник, на нём телевизор с «С НОВЫМ ГОДОМ!»
    const f = shape(spline([[1000, 1280], [990, 820], [1010, 760], [1250, 760], [1270, 820], [1260, 1280]], true, 6), { wash: '#f4f2ea', washA: 1, w: 2.8, col: '#3a3a3a', key: 3030 }); shadeG(f.path, 1000, 0, 1260, 0, '#b8b6ae', 0.5); rect(1030, 900, 20, 120, { wash: '#c8c8c8', washA: 1, w: 2 }); txt('ЗИЛ', 1130, 820, 30, { font: 'Osw', col: '#9a9a9a' });
    push(1130, 760, 1); const tv = rect(-140, -240, 280, 230, { wash: '#6a4a2a', washA: 1, w: 2.6, col: '#2a1408' }); const sc = rect(-116, -220, 200, 170, { wash: '#2a3a3a', washA: 1, w: 2, col: '#000' });
    ctx.save(); ctx.clip(sc.path); vgrad(-220, -50, ['#5a6a6a', '#8a9a9a']); txt('С НОВЫМ', -16, -160, 30, { font: 'Osw', col: '#f6f6f0' }); txt('ГОДОМ!', -16, -124, 30, { font: 'Osw', col: '#f6f6f0' }); motes(30, [-116, -220, 84, -50], '#ffffff', t, 3031, { sp: 50, sz: 3, a: 0.7 }); const r = rng(hsh(FRAME, 3032)); for (let i = 0; i < 6; i++) pencil([[-116, -220 + r() * 170], [84, -220 + r() * 170]], { w: 1, col: '#ffffff', a: 0.2, pass2: false }); ctx.restore(); glow(-16, -135, 120, 'rgba(180,220,230,1)', 0.25);
    for (const y of [-180, -120]) ell(110, y, 10, 10, { wash: '#c8c0a8', washA: 1, w: 1.6 }); pencil([[-60, -240], [-110, -330]], { w: 3, col: '#5a5a5a', pass2: false }); pencil([[40, -240], [100, -330]], { w: 3, col: '#5a5a5a', pass2: false }); pop();
  }
  function family(t) {                                                  // мама режет, бабушка трёт на тёрке, ребёнок таскает горошек
    const chop = Math.abs(Math.sin(t * 12));
    human(150, 1300, 1.0, t, { body: '#c85a6a', legs: '#4a3a5a', hair: '#6a3a1a', face: t > EV.df_ny ? 'smile' : 'calm', armL: 'hold', armR: 'up', seed: 61, long: 1 }); push(220, 1150 + chop * 20, 1, -0.4); rect(-6, -60, 12, 60, { wash: '#4a2a12', washA: 1, w: 1.6 }); poly([[-8, -60], [8, -60], [10, -140], [-4, -150]], { wash: '#d8dce0', washA: 1, w: 1.6, col: '#3a3e44' }); pop();
    human(930, 1300, 0.95, t, { body: '#4a5a8a', legs: '#3a3a4a', hair: '#d8d8d8', hat: 'scarf', hatCol: '#c8402e', face: 'smile', armL: 'hold', armR: 'swing', seed: 62, flip: -1, long: 1 });
    push(860, 1160, 1, 0.3); rect(-26, -80, 52, 120, { wash: '#c8ccd0', washA: 1, w: 2, col: '#3a3e44' }); for (let i = 0; i < 5; i++) pencil([[-18, -60 + i * 22], [18, -60 + i * 22]], { w: 1.2, col: '#4a5058', a: 0.7, pass2: false }); pop();
    const kid = Math.sin(t * 2.5) * 10; human(1180 + kid, 1340, 0.62, t, { body: '#e8b53a', legs: '#3a5a8a', hair: '#8a5a2a', face: 'grin', armL: 'down', armR: 'up', seed: 63, flip: -1 }); if (t > EV.df_peas) pea(1140 + kid, 1120, 1.6);
  }
  function counter(t) {                                                 // стол с клеёнкой: эмалированный таз, доска, продукты прыгают по словам
    const tb = rect(-300, 1460, 1700, 700, { wash: '#e8dcc0', washA: 1, w: 3, col: '#3a2a14', key: 3040 }); ctx.save(); ctx.clip(tb.path); for (let y = 1460; y < 2160; y += 60) for (let x = -300; x < 1400; x += 60) if ((x + y) / 60 % 2 === 0) rect(x, y, 60, 60, { wash: '#c8402e', washA: 0.16, line: false }); ctx.restore();
    push(330, 1520, 0.9); ell(0, 40, 270, 40, { wash: '#000', washA: 0.15, line: false }); const b = shape(spline([[-260, -60], [-230, 30], [0, 70], [230, 30], [260, -60]], false, 8).concat([[260, -60]]), { wash: '#f6f4ee', washA: 1, w: 2.6, col: '#3a3a3a', key: 3041 }); shadeG(b.path, 260, 0, -100, 0, '#a8a8a0', 0.4);
    oliHeap(0, -60, 240, t, 'soviet', 3050); ell(0, -60, 262, 34, { wash: 'rgba(0,0,0,0)', washA: 0, w: 9, col: '#2a5aa8' }); for (const sd of [-1, 1]) ell(sd * 250, -50, 22, 10, { wash: '#f6f4ee', washA: 1, w: 2 }); pop();
    push(800, 1540, 1, -0.04); rect(-150, -30, 300, 60, { wash: '#c89a5a', washA: 1, w: 2.4, col: '#4a2a10' }); for (let i = 0; i < 8; i++) cube(-100 + i * 26, -36, 1.2, OL.saus, OL.sausD, 0, 3060 + i); pop();
    const kS = popK(t, EV.df_saus - 0.2, 0.4); if (kS > 0) doctorska(lerp(1500, 860, kS), 1470 - Math.sin(kS * 3.14) * 200, 0.9, (1 - kS) * 2);
    const kP = popK(t, EV.df_peas - 0.2, 0.4); if (kP > 0) { peaCan(lerp(-300, 180, kP), 1560, 0.95, t > EV.df_peas + 0.15 ? 1 : 0); if (t > EV.df_peas + 0.15 && t < EV.df_peas + 1.2) { const k = t - EV.df_peas - 0.15; push(180, 1420, 1, 0); ell(0, -70 * k - 200 * k + 300 * k * k, 70, 14, { wash: '#d8dce0', washA: 1, w: 2, col: '#3a3e44', rot: k * 12 }); pop(); for (let i = 0; i < 10; i++) pea(180 + (i - 5) * 30 * k * 3, 1420 - 400 * k + 900 * k * k + i * 4, 1.4); } }
    const kM = popK(t, EV.df_mayo - 0.2, 0.4); if (kM > 0) mayoJar(lerp(1500, 980, kM), 1500, 0.8, t, {});
    if (t > EV.df_70) bubbleTag('С 1970-х', 540, 1000, t, EV.df_70, '#d9482b', 56, -0.04);
  }
  WORLD.deficit = (t, u, cat) => {
    lay(12, () => { walls(t); window70(t); });
    lay(4, () => { stove(t); fridgeTV(t); family(t); haze('#f6e8c8', 0.06); });
    lay(1, () => { cat(); });
    lay(0.92, () => { counter(t); });
    lay(0.6, () => { for (let i = 0; i < 2; i++) { const kk = (t * 0.25 + i * 0.5) % 1; ell(200 + i * 600, 1900 - kk * 900, 260, 140, { wash: '#ffffff', washA: 0.12 * Math.sin(kk * 3.14), line: false }); } });
  };
  DIR.deficit = {
    outfit: 'sovietA', light: { side: 1, rim: '#fff0c8' }, grade: ['#c8d8a0', 0.1],
    act: () => [[S0.deficit, 'sideeye'], [EV.df_saus, 'grin'], [EV.df_peas, 'smug'], [EV.df_mayo, 'awe'], [EV.df_ny, 'proud'], [EV.df_70, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 600, y: 1600, s: 1.22, look: t < EV.df_peas ? [0.7, 0.3] : t < EV.df_mayo ? [-0.7, 0.3] : [0.2, 0.1], hand: [-140, -300 + Math.abs(Math.sin(t * 12)) * 30], handF: [130, -320], prop: 'ladle', propAng: -0.3 }),
    cam: () => [[S0.deficit, 560, 1100, 0.22], [S0.deficit + 1.0, 600, 1160, 0.14, 'x'], [EV.df_mayo, 640, 1200, 0.16], [S1.deficit, 600, 1150, 0.2]]
  };
  // ---------------------------------------------------------------- переход: брызги рассола от укуса — капли растут, в каждой уже 1970-е
  TRANS_IN.deficit = { a: 0.15, b: 0.55, runA: 0.4, fx(k, t, A, B) {
    drawBuf(A, 1 + 0.06 * k, 540, 960); const r = rng(3090), P = new Path2D(), D = [];
    for (let i = 0; i < 22; i++) { const x = 540 + (r() - 0.5) * 1300, y = 860 + (r() - 0.5) * 1700, R = Math.pow(clamp(k * 1.6 - r() * 0.5), 1.5) * (300 + r() * 500); if (R > 1) { P.moveTo(x + R, y); P.arc(x, y, R, 0, 6.283); D.push([x, y, R]); } }
    inPath(P, () => drawBuf(B, 1.08 - 0.08 * k, 540, 960));
    scr(() => { for (const [x, y, R] of D) { pencil(ellPts(x, y, R, R, 0, 0, 40), { w: 4, col: '#8aa83a', a: 0.6 * (1 - k), pass2: false, gap: false }); glow(x - R * 0.3, y - R * 0.3, R * 0.25, 'rgba(240,255,200,1)', 0.4 * (1 - k)); } });
  } };
})();
