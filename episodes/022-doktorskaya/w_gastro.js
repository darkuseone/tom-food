/* 022 — `gastro`: «Поэтому в очередях слух: в колбасе — туалетная бумага! / Зато ценник годами один — 2,20. Осталось найти.» Гастроном 1970–80-х:
   высокие окна с зимней улицей (фонари, снег, троллейбус), под потолком лампы-«плафоны» (тёплый главный свет), вывески «МЯСО · КОЛБАСЫ» и «ГАСТРОНОМ»,
   кафельная стена, полки: пирамиды консервов «Килька», банки сока-конусы, бутылки кефира, пачки чая; стеклянная витрина-прилавок с подносами
   (на подносе докторской — пусто), весы со стрелкой, счёты и касса, ценники; продавщица в кружевном колпачке; очередь с авоськами — бабушка в платке,
   мужчина в шапке-ушанке, женщина с сумкой, шепчутся. Том — покупатель в вязаной кофте и кепке с авоськой. По словам: «слух:» — очередь
   оборачивается, над головами пузырь-шёпот; «бумага!» — в пузыре вылезает рулон бумаги, Том в шоке; «ценник» — над прилавком ценник
   «ДОКТОРСКАЯ 2-20» прыгает вперёд; «найти.» — продавщица ставит табличку «КОЛБАСЫ НЕТ», стрелка весов падает на ноль, Том заглядывает в пустую авоську.
   Переход В сцену: дверь гастронома с колокольчиком распахивается. */
(() => {
  EV.gs_rumor = wtw('s8', 'слух:');
  EV.gs_paper = wtw('s8', 'туалетная');
  EV.gs_price = wtw('s9', 'Зато');
  EV.gs_220 = wtw('s9', '2,20.');
  EV.gs_find = wtw('s9', 'найти.');
  SHAKES.push([EV.gs_paper + 0.15, 0.15, 7], [EV.gs_220 + 0.1, 0.12, 5]);
  KEYW.push('бумага!', '2,20.');
  function street(t) {                                                   // за окном: зимний вечер, фонарь, снег, троллейбус, дома
    vgrad(-500, 700, ['#2a3a5a', '#4a5a7a', '#8a8aa0']);
    for (const [bx, bw, bh] of [[-380, 340, 520], [10, 300, 440], [360, 360, 560]]) { rect(bx, 600 - bh, bw, bh, { wash: '#4a4a5a', washA: 1, w: 1.4, col: '#1a1a2a' }); windows(bx + 14, 620 - bh, bw - 28, bh - 60, Math.round(bw / 50), Math.round(bh / 64), bx + 22900, 0.6, '#ffd890', '#5a6a8a', 0.9); }
    push(120, 600, 1); pencil([[0, 0], [0, -460]], { w: 8, col: '#1a1a24' }); pencil([[0, -460], [60, -480]], { w: 6, col: '#1a1a24' }); ell(70, -470, 22, 12, { wash: '#ffe0a0', washA: 1, w: 1.4 }); glow(70, -460, 160, 'rgba(255,214,140,1)', 0.35); pop();
    const tx = ((t * 60) % 1300) - 600; push(tx, 560, 1); const tr = rect(-200, -150, 400, 130, { wash: '#2a6aa8', washA: 1, w: 2, col: '#0a1a3a' }); rect(-200, -60, 400, 40, { wash: '#e8d8b0', washA: 1, w: 1.2 }); windows(-180, -140, 360, 60, 6, 1, 22910, 0.9, '#ffe8b0', '#ffe8b0', 0.9); for (const sd of [-1, 1]) pencil([[sd * 40, -150], [sd * 20 + 60, -300]], { w: 3, col: '#1a1a24', pass2: false }); for (const wx of [-130, 130]) ell(wx, -10, 22, 22, { wash: '#1a1a1a', washA: 1, w: 1.4 }); pop();
    rect(-400, 600, 1100, 100, { wash: '#e8eef8', washA: 1, line: false }); motes(40, [-400, -500, 700, 700], '#ffffff', t, 22911, { sp: 30, sz: 4, a: 0.8, wob: 10 });
  }
  function wall(t) {                                                     // кафель, окна, вывески, полки с консервами, кефир, соки, лампы
    vgrad(-800, 1500, ['#e8dcc0', '#f2e8d0', '#d8c8a8']);
    const tl = rect(-600, 700, 2400, 800, { wash: '#e8e4d8', washA: 1, line: false }); for (let y = 700; y < 1500; y += 40) pencil([[-600, y], [1800, y]], { w: 1.6, col: '#b8b0a0', a: 0.6, pass2: false }); for (let x = -600; x < 1800; x += 40) pencil([[x, 700], [x, 1500]], { w: 1.4, col: '#b8b0a0', a: 0.5, pass2: false });
    for (const wx of [-260, 1460]) { push(wx, 100, 1); const w = rect(-200, -420, 400, 620, { wash: '#2a3a5a', washA: 1, w: 14, col: '#6a4a2a', key: 22920 + wx }); ctx.save(); ctx.clip(w.path); street(t); ctx.restore(); pencil([[0, -420], [0, 200]], { w: 10, col: '#6a4a2a' }); pencil([[-200, -100], [200, -100]], { w: 10, col: '#6a4a2a' }); pop(); }
    push(600, -360, 1); const sg = rect(-420, -70, 840, 140, { wash: '#a8241e', washA: 1, w: 3, col: '#4a0a04', key: 22921 }); shadeG(sg.path, 0, -70, 0, 70, '#5a0a04', 0.4); txt('МЯСО · КОЛБАСЫ', 0, 22, 70, { font: 'Osw', col: '#fff4d8' }); pop();
    for (let s = 0; s < 3; s++) { const y = 0 + s * 230; rect(80, y, 1060, 18, { wash: '#7a4a24', washA: 1, w: 1.8, col: '#2a1408' });
      for (let i = 0; i < 14; i++) { const x = 110 + i * 74, kind = (i + s) % 4;
        if (kind === 0) for (let q = 0; q < 3; q++) for (let p = 0; p <= 2 - q; p++) { const cx = x - 20 + p * 22 + q * 11, cy = y - 18 - q * 26; const c = rect(cx - 10, cy - 24, 20, 24, { wash: '#c8c8d0', washA: 1, w: 1, col: '#4a4a54' }); rect(cx - 10, cy - 18, 20, 12, { wash: '#2a6aa8', washA: 1, line: false }); }
        else if (kind === 1) { const j = poly([[x - 22, y], [x - 16, y - 120], [x + 16, y - 120], [x + 22, y]], { wash: ['#e8a040', '#c8341e', '#8ab040'][s], washA: 0.85, w: 1.4, col: '#3a2a1a' }); rect(x - 14, y - 70, 28, 30, { wash: '#f4ecd0', washA: 1, w: 1 }); txt('СОК', x, y - 50, 11, { font: 'Osw', col: '#2a2a2a' }); }
        else if (kind === 2) for (let q = 0; q < 2; q++) { rect(x - 24 + q * 26, y - 86, 22, 86, { wash: '#f4f4f0', washA: 1, w: 1.2, col: '#6a6a6a' }); rect(x - 24 + q * 26, y - 96, 22, 12, { wash: q ? '#2a8a4a' : '#c8a020', washA: 1, w: 1 }); }
        else { rect(x - 26, y - 60, 52, 60, { wash: '#3a6a3a', washA: 1, w: 1.4, col: '#1a2a1a' }); txt('ЧАЙ', x, y - 24, 13, { font: 'Osw', col: '#f4d040' }); } } }
    for (const lx of [100, 600, 1100]) { push(lx, -620, 1); pencil([[0, -200], [0, 0]], { w: 3, col: '#2a2a2a', pass2: false }); const pl = ell(0, 30, 70, 50, { wash: '#fbf4e0', washA: 1, w: 2, col: '#8a7a5a' }); shadeG(pl.path, 0, 0, 0, 80, '#c8b890', 0.3); glow(0, 40, 170, 'rgba(255,230,170,1)', 0.3); pop(); }
  }
  function store(t) {                                                    // прилавок-витрина, весы, касса, счёты, продавщица, очередь
    const rum = t > EV.gs_rumor, pap = t > EV.gs_paper, gone = t > EV.gs_find;
    human(900, 1300, 1.08, t, { body: '#f4f4f0', bodyD: '#b8b0a0', legs: '#3a3a44', hair: '#c8a040', face: gone ? 'angry' : 'calm', armL: gone ? 'up' : 'hold', armR: 'hold', look: -0.5, seed: 22930, flip: -1, long: 1 });
    push(900, 1300 - 330 * 1.08 - 40, 1); for (let i = 0; i < 7; i++) ell(-36 + i * 12, -50 - Math.abs(i - 3) * 3, 10, 14, { wash: '#ffffff', washA: 1, w: 1, col: '#a8a8a8' }); pop();
    if (gone) { const k = popK(t, EV.gs_find, 0.35); push(860, 980, k, 0.05); rect(-110, -40, 220, 80, { wash: '#f4f0e0', washA: 1, w: 2, col: '#3a3a3a' }); txt('КОЛБАСЫ', 0, -6, 26, { font: 'Osw', col: '#a8241e' }); txt('НЕТ', 0, 24, 26, { font: 'Osw', col: '#a8241e' }); pop(); }
    for (const [qx, o] of [[150, { body: '#5a3a4a', hair: '#a8a8a8', hat: 'scarf', hatCol: '#8a2a3a', long: 1 }], [300, { body: '#3a3a4a', hair: '#5a3a1a', hat: 'fur', hatCol: '#5a4030' }], [-30, { body: '#6a5a3a', hair: '#3a2a1a', hat: 'cap', hatCol: '#4a4a5a' }]]) {
      const fc = pap ? 'shock' : rum ? 'grin' : 'calm'; human(qx, 1320, 1.06, t, Object.assign({ legs: '#2a2a32', face: fc, armL: 'hold', armR: rum && !pap && qx === 150 ? 'point' : 'down', look: rum ? (qx > 200 ? -0.9 : 0.9) : 0.4, seed: 22931 + qx, flip: qx > 200 ? -1 : 1 }, o)); stringBag(qx + 50, 1240, 0.7, t, { key: 22934 + qx, more: qx % 2 }); }
    if (rum) { const k = popK(t, EV.gs_rumor, 0.4); push(330, 960, k); const bb = blob([[-150, 0], [-130, -90], [0, -120], [130, -90], [150, 0], [60, 40], [-10, 90], [-20, 40], [-130, 30]], { wash: '#ffffff', washA: 0.95, w: 2.4, col: '#3a3a3a' });
      if (pap) { const pk = popK(t, EV.gs_paper, 0.35); push(0, -40, pk); const rl = rect(-46, -50, 92, 90, { wash: '#f4f2ec', washA: 1, w: 2, col: '#6a6a6a' }); shadeG(rl.path, 46, 0, -46, 0, '#b8b4a8', 0.4); ell(-46, -5, 14, 45, { wash: '#e8e4dc', washA: 1, w: 1.6, col: '#6a6a6a' }); ell(-46, -5, 6, 18, { wash: '#b8a888', washA: 1, w: 1 }); pencil(spline([[46, 30], [80, 50], [70, 80]], false, 5), { w: 14, col: '#f4f2ec', pass2: false }); pop(); }
      else txt('…шу-шу…', 0, -40, 34, { font: 'Hand', col: '#3a3a3a' }); pop(); }
  }
  function counter(t) {                                                  // прилавок-витрина: стекло, подносы, пустой поднос, ценники, весы, счёты, касса
    const cb = rect(-500, 1440, 2200, 700, { wash: '#6a4a2a', washA: 1, w: 3, col: '#2a1408', key: 22940 }); shadeG(cb.path, 0, 1440, 0, 1900, '#2a1408', 0.4); for (let x = -500; x < 1700; x += 180) rect(x + 10, 1500, 160, 300, { wash: '#7a5a3a', washA: 0.6, w: 1.4, col: '#2a1408' });
    const gl = rect(-500, 1300, 2200, 150, { wash: '#d8ecf0', washA: 0.35, w: 2.4, col: '#5a7a7a' }); pencil([[-500, 1304], [1700, 1304]], { w: 4, col: '#ffffff', a: 0.6, pass2: false }); for (let x = -400; x < 1600; x += 500) pencil([[x, 1310], [x + 120, 1440]], { w: 10, col: '#ffffff', a: 0.25, pass2: false });
    for (const [px, kind] of [[-120, 'cheese'], [180, 'empty'], [1100, 'sard']]) { push(px, 1420, 1); const tr = ell(0, 0, 130, 26, { wash: '#e8e8e4', washA: 1, w: 1.8, col: '#6a6a6a' });
      if (kind === 'cheese') for (let i = 0; i < 3; i++) { const c = poly([[-90 + i * 60, -10], [-40 + i * 60, -60], [-30 + i * 60, -10]], { wash: '#f4c64a', washA: 1, w: 1.6, col: '#8a6a10' }); ell(-50 + i * 60, -26, 5, 5, { wash: '#c8961a', washA: 1, line: false }); }
      if (kind === 'sard') for (let i = 0; i < 4; i++) doktorLoaf(-70 + i * 46, -24, 0.2, 1.5708, { key: 22941 + i, label: 0, len: 260 });
      const tag = rect(-56, 20, 112, 40, { wash: '#f4f0e0', washA: 1, w: 1.4, col: '#3a3a3a' }); txt(kind === 'empty' ? 'ДОКТОРСКАЯ' : kind === 'cheese' ? 'СЫР РОСС.' : 'СОСИСКИ', 0, 44, 14, { font: 'Osw', col: '#2a2a2a' }); pop(); }
    const big = t > EV.gs_price ? popK(t, EV.gs_price, 0.4) : 0; push(180 + big * 260, 1470 - big * 380, 1 + big * 1.1, -0.04 * big); const pt = rect(-80, -40, 160, 80, { wash: '#f4f0e0', washA: 1, w: 2, col: '#3a3a3a' }); txt('ДОКТОРСКАЯ', 0, -14, 20, { font: 'Osw', col: '#2a2a2a' }); txt('2-20', 0, 28, 46, { font: 'Osw', col: '#c8241e' }); txt('за 1 кг', 56, 30, 9, { font: 'Hand', col: '#3a3a3a' }); pop();
    shopScale(880, 1460, 0.9, t, { key: 22950, k: t > EV.gs_find ? 0 : 0.6, item: t < EV.gs_find });
    push(1180, 1460, 1); const cs = rect(-80, -160, 160, 160, { wash: '#4a4a52', washA: 1, w: 2.4, col: '#1a1a24', key: 22951 }); metalG(cs.path, -20, -100, 140, '#a8a8b0', '#4a4a52', '#1a1a24', 0.6); for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) ell(-54 + c * 36, -110 + r * 30, 10, 10, { wash: '#e8e4dc', washA: 1, w: 1 }); rect(-60, -200, 120, 40, { wash: '#2a2a32', washA: 1, w: 1.4 }); txt('0-00', 0, -172, 22, { font: 'Osw', col: '#8ad88a' }); pop();
    push(500, 1560, 1, -0.06); const ab = rect(-110, -50, 220, 100, { wash: '#8a5a2a', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 6; i++) { pencil([[-100, -36 + i * 16], [100, -36 + i * 16]], { w: 2, col: '#3a2a1a', pass2: false }); for (let q = 0; q < 5; q++) ell(-80 + q * 14 + (i % 2) * 30 + (q > 2 ? 40 : 0), -36 + i * 16, 6, 6, { wash: q > 2 ? '#2a2a2a' : '#f4f0e6', washA: 1, w: 0.8 }); } pop();
    castShadow(880, 1470, 160, 80, 0.4, 0.22); lightPool(600, 1450, 700, 110, 'rgba(255,230,170,1)', 0.3);
  }
  function front(t) {                                                    // передний план: край авоськи слева, плечо-силуэт в шапке справа, пар дыхания
    stringBag(-280, 2080, 1.6, t, { key: 22960 });
    sil([[1240, 2200], [1250, 1820], [1300, 1720], [1380, 1700], [1460, 1720], [1500, 1800], [1520, 2200]], '#2a2430', 0.9); blob([[1290, 1740], [1300, 1640], [1380, 1610], [1470, 1640], [1480, 1740]], { wash: '#5a4030', washA: 1, w: 2, col: '#1a0e06' });
    for (let i = 0; i < 3; i++) { const k = (t * 0.6 + i / 3) % 1; ell(1260 - k * 80, 1660 - k * 60, 20 + k * 30, 14 + k * 20, { wash: '#ffffff', washA: 0.3 * (1 - k), line: false }); }
  }
  WORLD.gastro = (t, u, cat) => {
    lay(14, () => { wall(t); shaft(600, -560, 400, 2200, 0, 'rgba(255,232,180,1)', 0.12); haze('#f4e8d0', 0.05); });
    lay(4, () => { store(t); lightPool(500, 1320, 900, 150, 'rgba(255,230,170,1)', 0.22); castShadow(150, 1320, 120, 160, 0.2, 0.22); castShadow(900, 1300, 120, 160, 0.2, 0.2); });
    lay(1, () => { cat(); counter(t); });
    lay(0.6, () => { front(t); motes(14, [-100, 300, 1200, 1500], '#fff4e0', t, 22970, { sp: 4, sz: 3, a: 0.3, wob: 6 }); moodDark(600, 1100, 520, 1500, '#2a1a28', 0.4); });
  };
  DIR.gastro = {
    outfit: 'buyerA', light: { side: 0, rim: '#ffe0b0' }, grade: ['#e8c890', 0.06],
    act: () => [[S0.gastro, 'suspicious'], [EV.gs_rumor, 'sideeye'], [EV.gs_paper, 'shock'], [EV.gs_price, 'grin'], [EV.gs_220, 'proud'], [EV.gs_find, 'annoyed']],
    pose: (t, u, b) => { const peek = t > EV.gs_find;
      return Object.assign(b, { x: 620, y: 1590, s: 1.16, flip: 0, look: t < EV.gs_rumor ? [0.3, 0] : t < EV.gs_price ? [-0.8, -0.3] : t < EV.gs_find ? [0.2, 0.6] : [-0.2, 0.7], hand: peek ? [120, -200] : [140, -260], handF: [-140, -240], prop: 'bagP', propAng: peek ? 0.6 : 0.1, sweat: t > EV.gs_paper && t < EV.gs_price, tilt: peek ? 0.08 : 0 }); },
    cam: () => [[S0.gastro, 600, 1100, 0.24], [EV.gs_rumor, 480, 1080, 0.26], [EV.gs_paper, 520, 1100, 0.3], [EV.gs_price, 600, 1140, 0.28], [EV.gs_220, 600, 1160, 0.32], [EV.gs_find, 680, 1120, 0.28], [S1.gastro, 660, 1120, 0.3]]
  };
  TRANS_IN.gastro = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {        // дверь гастронома с колокольчиком распахивается
    const e = sm(k); drawBuf(B, 1, 540, 960);
    const w = 1080 * Math.cos(e * 1.5708); if (w > 4) { const rp = new Path2D(); rp.rect(0, 0, w, 1920); inPath(rp, () => drawBuf(A, 1, 540, 960, 1, null, -(1080 - w) * 0.5));
      scr(() => { rect(0, 0, w, 1920, { wash: '#6a4a2a', washA: 0.2, w: 30, col: '#4a2a14' }); rect(w * 0.1, 160, w * 0.8, 900, { wash: '#d8ecf0', washA: 0.2, w: 12, col: '#4a2a14' }); if (w > 300) txt('ГАСТРОНОМ', w * 0.5, 1240, 90 * w / 1080, { font: 'Osw', col: '#a8241e' }); ell(w * 0.85, 1000, 26, 26, { wash: '#c8a040', washA: 1, w: 2 }); }); }
    scr(() => {
      const sw = Math.sin(k * 30) * 0.5 * (1 - k); push(540, 120, 1, sw); pencil([[0, -60], [0, 0]], { w: 4, col: '#3a3a3a', pass2: false }); const bl = blob([[-40, 60], [-30, 0], [0, -14], [30, 0], [40, 60]], { wash: '#d8b040', washA: 1, w: 2, col: '#6a4a08' }); metalG(bl.path, -10, 20, 50, '#fff4c0', '#d8b040', '#6a4a08', 0.7); ell(0, 70, 10, 10, { wash: '#8a6a10', washA: 1, w: 1 }); pop(); });
  } };
})();
