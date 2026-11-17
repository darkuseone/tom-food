/* 024 — `beet` (СЛОЙ 2, XVIII в.): «Но приходят свёкла с капустой — и в XVIII веке борщ краснеет!»
   Хата изнутри: белёные стены с расписными цветами, большая белая печь с огнём в устье, ухват и горшки на припечке, рушники над окном и на полке,
   лавки, расписные миски, связки лука и сушёных яблок, окно с вечерним светом; бабушка у печи с ухватом, девушка чистит свёклу, дед с люлькой на лавке.
   На столе: бочонок свекольного кваса (рубиновый), корзина свёклы, кочаны капусты, горшок зелёного борща, нож, доска.
   Том в вышиванке + фартук. По словам: «свёкла» — Том плюхает разрезанную свёклу на доску (кольца, сок брызгает); «капустой» — кочан скатывается по столу
   и бьётся о горшок; «XVIII» — Том наливает рубиновый квас из кувшина в зелёный борщ; «краснеет!» — борщ в горшке перекрашивается в красный, алая вспышка,
   плашка «ЗЕЛЁНЫЙ → КРАСНЫЙ». Главный свет — огонь печи слева; второй — синее окно справа. Переход В сцену — срез свёклы: кольца расходятся от центра. */
(() => {
  EV.bt_beet = wtw('s4', 'свёкла');
  EV.bt_cab = wtw('s4', 'капустой');
  EV.bt_pour = wtw('s4', 'XVIII');
  EV.bt_red = wtw('s4', 'краснеет!');
  SHAKES.push([EV.bt_beet + 0.05, 0.12, 5], [EV.bt_red, 0.16, 6]);
  KEYW.push('свёкла', 'краснеет!');
  const FIRE = [1010, 1180];
  const redK = t => sm(clamp((t - EV.bt_pour - 0.2) / Math.max(0.3, EV.bt_red - EV.bt_pour + 0.1)));
  function walls(t) {                                                    // белёные стены с росписью, балка-сволок, полка с мисками, рушники, окно
    vgrad(-600, 2200, ['#d8ccb4', '#e8dcc4', '#c8b898']);
    for (let i = 0; i < 5; i++) { const x = -300 + i * 300; push(x, 520, 0.9); pencil(spline([[0, 120], [10, 40], [-6, -40]], false, 5), { w: 4, col: '#3a7a2a', pass2: false }); for (let p = 0; p < 5; p++) { const a = -1.2 + p * 0.6; ell(Math.cos(a - 1.57) * 34 - 4, -60 + Math.sin(a - 1.57) * 34, 16, 26, { wash: p % 2 ? '#c8202a' : '#e8a020', washA: 0.9, w: 1.2, col: '#5a1a0a', rot: a }); } ell(-4, -60, 12, 12, { wash: '#2a5aa8', washA: 1, line: false }); for (const sd of [-1, 1]) blob([[0, 60], [sd * 40, 30], [sd * 60, 50], [sd * 30, 70]], { wash: '#4a8a2a', washA: 0.9, line: false }); pop(); }
    rect(-600, 240, 2400, 70, { wash: '#7a5030', washA: 1, w: 3, col: '#2a1408' }); for (let i = 0; i < 20; i++) pencil([[-600 + i * 120, 250], [-560 + i * 120, 300]], { w: 2, col: '#4a2a10', a: 0.5, pass2: false });
    rect(-200, 740, 700, 18, { wash: '#7a5030', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 7; i++) { const x = -160 + i * 100; push(x, 740, 1); if (i % 2) { const b = shape(spline([[-36, -80], [-40, -30], [-20, 0], [20, 0], [40, -30], [36, -80]], false, 6), { wash: '#b8683a', washA: 1, w: 2, col: '#3a1408' }); pencil(spline([[-38, -50], [0, -44], [38, -50]], false, 4), { w: 3, col: '#f4d8a8', pass2: false }); } else { ell(0, -46, 42, 42, { wash: '#f4ecd8', washA: 1, w: 1.6, col: '#3a2a1a' }); ell(0, -46, 24, 24, { line: true, w: 4, col: '#c8202a' }); for (let q = 0; q < 6; q++) ell(Math.cos(q) * 32, -46 + Math.sin(q) * 32, 4, 4, { wash: '#3a7a2a', washA: 1, line: false }); } pop(); }
    push(560, 640, 1); const wn = rect(-130, -200, 260, 280, { wash: '#2a4a7a', washA: 1, w: 10, col: '#8a6a4a' }); ctx.save(); ctx.clip(wn.path); vgrad(-200, 80, ['#1a2a5a', '#4a6a9a', '#8aa0c0']); sil([[-130, 40], [-60, 10], [20, 30], [130, 0], [130, 80], [-130, 80]], '#1a2a3a', 1); for (let i = 0; i < 3; i++) ell(-80 + i * 80, -120 + i * 20, 3, 3, { wash: '#ffffff', washA: 0.9, line: false }); ctx.restore();
    pencil([[0, -200], [0, 80]], { w: 6, col: '#8a6a4a', pass2: false }); pencil([[-130, -60], [130, -60]], { w: 6, col: '#8a6a4a', pass2: false });
    const rs = shape([[-170, -230], [170, -230], [176, -180], [140, -150], [-140, -150], [-176, -180]], { wash: '#f8f4ec', washA: 1, w: 2, col: '#6a5a4a' }); for (let i = 0; i < 12; i++) { const x = -150 + i * 27; pencil([[x - 6, -200], [x + 6, -188]], { w: 2, col: '#c8202a', pass2: false }); pencil([[x + 6, -200], [x - 6, -188]], { w: 2, col: '#c8202a', pass2: false }); }
    for (const sd of [-1, 1]) { const tl = shape([[sd * 150, -170], [sd * 180, -170], [sd * 186, 160], [sd * 150, 160]], { wash: '#f8f4ec', washA: 1, w: 2, col: '#6a5a4a' }); for (let k = 0; k < 4; k++) pencil([[sd * 152, 100 + k * 14], [sd * 184, 100 + k * 14]], { w: 3, col: k % 2 ? '#c8202a' : '#1a1418', pass2: false }); } pop();
    lightPool(560, 720, 300, 360, 'rgba(120,160,240,1)', 0.16);
    for (let i = 0; i < 8; i++) ell(620 + i * 22, 330 + (i % 2) * 12, 14, 16, { wash: '#c88a3a', washA: 1, w: 1.4, col: '#5a3008' }); pencil([[600, 320], [790, 330]], { w: 3, col: '#c8a060', pass2: false });
  }
  function oven(t) {                                                     // печь: белый массив, устье с огнём, припечек с горшками, лежанка, бабушка с ухватом
    push(1010, 1360, 1); const ov = shape([[-420, 0], [-420, -620], [-300, -680], [260, -680], [300, -620], [300, 0]], { wash: '#f4efe4', washA: 1, w: 3, col: '#5a4a3a', key: 24400 }); shadeG(ov.path, 300, 0, -100, 0, '#b8aa96', 0.5);
    for (let i = 0; i < 4; i++) pencil(spline([[-380 + i * 20, -40], [-360 + i * 30, -300], [-380 + i * 20, -600]], false, 5), { w: 2, col: '#d8ccb8', a: 0.6, pass2: false });
    const mo = blob([[-80, -220], [-80, -340], [-40, -400], [40, -400], [80, -340], [80, -220]], { wash: '#1a0a04', washA: 1, w: 3, col: '#2a1a0a' });
    for (let i = 0; i < 6; i++) { const f = flick(t, i); blob([[-60 + i * 22, -222], [-54 + i * 22, -260 - 40 * f], [-44 + i * 22, -300 - 50 * f], [-34 + i * 22, -258 - 30 * f], [-26 + i * 22, -222]], { wash: i % 2 ? '#ffb030' : '#ff6a20', washA: 0.95, line: false }); }
    for (let i = 0; i < 3; i++) { push(-30 + i * 34, -232, 0.4); ell(0, -40, 50, 46, { wash: '#2a1a14', washA: 1, w: 2 }); pop(); } glow(0, -280, 160, 'rgba(255,140,50,1)', 0.35);
    rect(-120, -220, 240, 30, { wash: '#e8e2d4', washA: 1, w: 2, col: '#5a4a3a' }); for (let i = 0; i < 3; i++) { push(160 + i * 60, -230, 0.45); const pp = shape(spline([[-60, -110], [-70, -50], [-40, 0], [40, 0], [70, -50], [60, -110]], false, 6), { wash: '#b8683a', washA: 1, w: 2, col: '#3a1408' }); pop(); }
    for (let i = 0; i < 14; i++) { push(-200 + (i * 37 % 60), -420 - (i % 4) * 30, 1); ell(0, 0, 12, 12, { wash: '#e8d8a0', washA: 0.9, line: false }); pop(); }   // сушёные груши на лежанке
    pencil([[-280, -680], [-280, -760]], { w: 30, col: '#e8e2d4', pass2: false }); pop();
    const gr = t > EV.bt_cab ? 'grin' : 'smile'; human(780, 1370, 1.05, t, { body: '#3a3a5a', trim: '#c8202a', legs: '#3a3a5a', long: 1, hat: 'scarf', hatCol: '#e8c040', armL: 'hold', armR: 'up', face: t > EV.bt_red ? 'shock' : gr, seed: 24401, flip: -1, look: 0.6 });
    push(700, 1060, 1, 0.6); pencil([[0, 0], [240, 140]], { w: 7, col: '#6a4a2a', pass2: false }); pencil(spline([[240, 140], [290, 120], [300, 170]], false, 4), { w: 5, col: '#3a3a3a', pass2: false }); pencil(spline([[240, 140], [260, 190], [310, 200]], false, 4), { w: 5, col: '#3a3a3a', pass2: false }); pop();
  }
  function room(t) {                                                     // лавки, дед с люлькой, девушка чистит свёклу, кот на лавке
    rect(560, 1300, 600, 30, { wash: '#8a5a32', washA: 1, w: 2, col: '#2a1408' }); for (const lx of [580, 1120]) pencil([[lx, 1330], [lx, 1440]], { w: 10, col: '#6a4a2a', pass2: false });
    human(220, 1330, 1.0, t, { body: '#f4ecd8', trim: '#c8202a', legs: '#3a3a5a', beard: 'long', hair: '#e8e8e8', armL: 'hold', armR: 'up', face: t > EV.bt_red ? 'grin' : 'calm', seed: 24410, look: 0.5 });
    push(270, 1080, 1); pencil([[0, 0], [-60, 10]], { w: 4, col: '#4a2a10', pass2: false }); ell(-66, 4, 10, 8, { wash: '#4a2a10', washA: 1, w: 1 }); for (let q = 0; q < 3; q++) { const ph = (t * 0.4 + q / 3) % 1; ell(-66 + Math.sin(ph * 6) * 10, -10 - ph * 80, 6 + ph * 14, 5 + ph * 10, { wash: '#e8e4dc', washA: 0.5 * (1 - ph), line: false }); } pop();
    human(400, 1340, 0.95, t, { body: '#f4ecd8', trim: '#2a5aa8', legs: '#a8243a', long: 1, hair: '#8a5a2a', armL: 'hold', armR: 'hold', face: t > EV.bt_beet ? 'grin' : 'smile', seed: 24411, look: 0.4, skin: '#f4d0b0' });
    push(440, 1120, 1); beet(0, 0, 0.5, Math.sin(t * 3) * 0.3, {}); pop();
    castShadow(220, 1330, 110, 160, -0.9, 0.2); castShadow(400, 1340, 110, 160, -0.9, 0.2);
  }
  function table(t) {                                                    // стол: доска, свёкла (разрезанная — кольца), кочаны, бочонок кваса, горшок борща (зелёный → красный), кувшин, нож, хлеб
    const tb = rect(-400, 1440, 2000, 600, { wash: '#8a5a32', washA: 1, w: 3, col: '#2a1408', key: 24420 }); shadeG(tb.path, 0, 1440, 0, 1800, '#2a1408', 0.5);
    push(0, 0, 1); for (let i = 0; i < 20; i++) { const x = -360 + i * 100; pencil([[x, 1450], [x + 50, 1460]], { w: 4, col: '#c8202a', pass2: false }); } pop(); rect(-400, 1430, 2000, 18, { wash: '#f4ecd8', washA: 1, w: 2, col: '#6a5a4a' });
    lightPool(300, 1520, 620, 140, 'rgba(255,170,90,1)', 0.32);
    kvasTub(220, 1560, 0.72, t, { col: '#a8142a', key: 24424 }); push(220, 1300, 1); rect(-60, -30, 120, 50, { wash: '#f4ecd8', washA: 1, w: 2, col: '#3a2410' }); txt('КВАС', 0, 4, 26, { font: 'Osw', col: '#a8142a' }); pop();
    const r = redK(t), col = lerpC('#6a9a2a', '#b0142a', r);
    push(520, 1560, 0.85); const pp = shape(spline([[-110, -150], [-120, -80], [-80, -20], [80, -20], [120, -80], [110, -150]], false, 6), { wash: '#b8683a', washA: 1, w: 2.4, col: '#3a1408', key: 24421 }); shadeG(pp.path, 120, 0, -40, 0, '#6a3414', 0.5); for (let i = 0; i < 3; i++) pencil(spline([[-114, -110 + i * 26], [0, -100 + i * 26], [114, -110 + i * 26]], false, 6), { w: 3, col: '#f4d8a8', a: 0.6, pass2: false });
    ell(0, -150, 110, 22, { wash: col, washA: 1, w: 2, col: '#2a1408' }); ell(-30, -154, 30, 5, { wash: '#ffffff', washA: 0.4, line: false }); steamWisps(0, -160, 1, t, 4, 24422, 0.45);
    if (t > EV.bt_pour - 0.1 && t < EV.bt_red + 0.4) { for (let i = 0; i < 8; i++) { const ph = (t * 3 + i / 8) % 1; ell(-40 + Math.sin(i) * 20, -300 + ph * 150, 8, 12, { wash: '#a8142a', washA: 0.9, line: false }); } }
    if (t > EV.bt_red && t < EV.bt_red + 0.8) { const k = (t - EV.bt_red) / 0.8; for (let i = 0; i < 12; i++) { const a = -3.1 + i / 11 * 3.1; ell(Math.cos(a) * k * 200, -160 + Math.sin(a) * k * 160 + k * k * 120, 10 * (1 - k) + 3, 8 * (1 - k) + 3, { wash: '#c8142a', washA: 1 - k, line: false }); } }
    pop();
    push(760, 1600, 0.9); rect(-130, -24, 260, 40, { wash: '#c89a5a', washA: 1, w: 2, col: '#4a2a08' }); if (t > EV.bt_beet) { const k = popK(t, EV.bt_beet, 0.3); push(-30, -40, k); for (const dx of [-30, 40]) { const b = ell(dx, 0, 44, 30, { wash: '#7a0a2a', washA: 1, w: 2, col: '#3a0414' }); for (let i = 1; i < 4; i++) ell(dx, 0, 44 - i * 10, 30 - i * 7, { line: true, w: 2, col: '#e8487a', a: 0.7 }); } pop();
      if (t < EV.bt_beet + 0.6) { const kk = (t - EV.bt_beet) / 0.6; for (let i = 0; i < 8; i++) ell(-30 + Math.cos(i) * kk * 140, -40 - Math.sin(i * 0.4 + 0.4) * kk * 120 + kk * kk * 80, 6, 6, { wash: '#a8142a', washA: 1 - kk, line: false }); } }
    pencil([[90, -30], [200, -50]], { w: 8, col: '#6a4a2a', pass2: false }); poly([[90, -40], [10, -30], [90, -22]], { wash: '#b8bcc4', washA: 1, w: 1.4, col: '#3a3e44' }); pop();
    const cx = t > EV.bt_cab ? lerp(1100, 680, sm(clamp((t - EV.bt_cab) / 0.6))) : 1100; cabbage(cx, 1520, 0.8, (1100 - cx) * -0.02); cabbage(1180, 1540, 0.75, 0.3);
    push(1000, 1660, 0.9); const bs = blob([[-110, 0], [-120, -60], [120, -60], [110, 0]], { wash: '#b88a4a', washA: 1, w: 2.4, col: '#4a2a08', key: 24423 }); for (let i = 0; i < 6; i++) pencil([[-110 + i * 40, -56], [-100 + i * 40, -4]], { w: 2, col: '#7a5a2a', pass2: false }); for (let i = 0; i < 4; i++) beet(-70 + i * 46, -70 - (i % 2) * 14, 0.55, i * 0.4, {}); pop();
    push(80, 1700, 0.8); const lf = blob([[-90, 0], [-80, -50], [0, -70], [80, -50], [90, 0]], { wash: '#8a4a22', washA: 1, w: 2, col: '#3a1a04' }); shadeG(lf.path, 0, -70, 0, 0, '#4a2008', 0.4); pop();
    castShadow(520, 1560, 220, 90, 0.9, 0.25); castShadow(1000, 1660, 220, 80, 0.9, 0.22);
  }
  function front(t) {                                                    // передний план: свисающий рушник сверху слева, связка лука справа, искры от печи
    push(-20, 520, 1, Math.sin(t) * 0.02); const ru = shape([[-60, 0], [60, 0], [60, 700], [-60, 700]], { wash: '#f8f4ec', washA: 1, w: 2, col: '#6a5a4a' }); for (let k = 0; k < 6; k++) for (let i = 0; i < 5; i++) { const x = -48 + i * 24, y = 560 + k * 22; pencil([[x - 6, y - 6], [x + 6, y + 6]], { w: 2.4, col: k % 2 ? '#c8202a' : '#1a1418', pass2: false }); pencil([[x + 6, y - 6], [x - 6, y + 6]], { w: 2.4, col: k % 2 ? '#c8202a' : '#1a1418', pass2: false }); } for (let i = 0; i < 10; i++) pencil([[-56 + i * 12, 700], [-56 + i * 12, 740]], { w: 2, col: '#c8202a', pass2: false }); pop();
    for (let i = 0; i < 6; i++) { push(1120 + (i % 2) * 20, 300 + i * 60, 1); ell(0, 0, 26, 30, { wash: '#d8a050', washA: 1, w: 1.6, col: '#5a3a08' }); pop(); } pencil([[1120, 260], [1130, 640]], { w: 3, col: '#c8a060', pass2: false });
    motes(14, [FIRE[0], FIRE[1] - 300, FIRE[0] + 400, FIRE[1] + 100], '#ffb050', t, 24430, { sp: -30, sz: 3, a: 0.7, wob: 12 });
  }
  WORLD.beet = (t, u, cat) => {
    lay(10, () => { walls(t); });
    lay(4, () => { oven(t); room(t); haze('#ffe0c0', 0.05); });
    lay(1, () => { cat(); table(t); });
    lay(0.7, () => { front(t); moodDark(FIRE[0] + 200, 1200, 500, 1500, '#1a0810', 0.4); shaft(FIRE[0], FIRE[1], 260, 900, 1.2, 'rgba(255,160,80,1)', 0.1); });
    if (t > EV.bt_red && t < EV.bt_red + 0.5) screenFill('#ff2040', 0.18 * (1 - (t - EV.bt_red) / 0.5), 'lighter');
  };
  DIR.beet = {
    outfit: 'vyshA', light: { side: 1, rim: '#ffb070' }, grade: ['#ff8060', 0.06],
    act: () => [[S0.beet, 'talk'], [EV.bt_beet, 'grin'], [EV.bt_cab, 'smug'], [EV.bt_pour, 'proud'], [EV.bt_red, 'shock'], [EV.bt_red + 0.4, 'laugh']],
    pose: (t, u, b) => { const slam = t > EV.bt_beet - 0.25 && t < EV.bt_cab, pour = t > EV.bt_pour - 0.2 && t < EV.bt_red + 0.3;
      return Object.assign(b, { x: 640, y: 1600, s: 1.15, flip: true, look: slam ? [0.3, 0.7] : pour ? [-0.4, 0.6] : [0, 0],
        hand: slam ? [80, -160 + Math.max(0, EV.bt_beet - t) * 300] : pour ? [130, -300] : [170, -220], handF: pour ? [-140, -260] : [-150, -210],
        prop: slam && t < EV.bt_beet ? 'beetHalfP' : pour ? 'ladleRedP' : undefined, propAng: pour ? 2.0 : 0, tailUp: t > EV.bt_red, squash: slam && Math.abs(t - EV.bt_beet) < 0.08 ? 0.08 : 0 }); },
    hud: t => { infoPlate(t, EV.bt_pour, S1.beet - 0.05, { kind: 'swap', tb: EV.bt_red, title: 'ЦВЕТ БОРЩА', a: 'ЗЕЛЁНЫЙ', b: 'КРАСНЫЙ', ia: (s, t) => { ell(0, 4, 30, 16, { wash: '#6a9a2a', washA: 1, w: 2, col: '#2a3a0a' }); }, ib: (s, t) => { ell(0, 4, 30, 16, { wash: '#b0142a', washA: 1, w: 2, col: '#3a0408' }); ell(6, 0, 10, 5, { wash: '#fbf6ea', washA: 1, line: false }); } }); },
    cam: () => [[S0.beet, 620, 1240, 0.27], [EV.bt_beet, 640, 1280, 0.3], [EV.bt_cab, 680, 1290, 0.3], [EV.bt_pour, 600, 1300, 0.32], [EV.bt_red, 600, 1310, 0.34], [S1.beet, 610, 1300, 0.35]]
  };
  TRANS_IN.beet = { a: 0.12, b: 0.55, runA: 1, fx(k, t, A, B) {          // срез свёклы: рубиново-розовые кольца расходятся от центра и проявляют хату
    const e = sm(k); drawBuf(A, 1 + e * 0.15, 540, 960);
    inCircle(540, 960, e * 1250, () => drawBuf(B, 1.1 - e * 0.1, 540, 960));
    scr(() => { for (let i = 0; i < 6; i++) { const R = e * 1250 - i * 70; if (R > 0) ell(540, 960, R, R, { line: true, w: 26 - i * 3, col: i % 2 ? '#e8487a' : '#7a0a2a', a: (1 - e) * 0.95 }); } });
  } };
})();
