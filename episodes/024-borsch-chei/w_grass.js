/* 024 — `grass` (СЛОЙ 1): «Ныряем на тысячу лет: тут борщ зелёный — из травы борщевика. / Запомни: борщ — это кисло!»
   Рассветный луг больше тысячи лет назад: туман над рекой, лес на холмах, полуземлянки с соломенными крышами и дымком, плетень, огород,
   гигантские зонтики борщевика в росе; женщины в длинных льняных рубахах режут стебли серпом и носят в корзинах, мальчишка гонит гусей.
   На переднем плане — дубовая колода-стол: кадка с зелёной закваской (пузыри брожения), горшок на костре, нож, пучки травы, деревянные ложки.
   Том в льняной рубахе + фартук. По словам: «Ныряем» — последние красные пузыри уплывают вверх; «зелёный» — горшок на огне вспыхивает зелёным, ценник «ЗЕЛЁНЫЙ»;
   «борщевика.» — Том поднимает стебель борщевика, над ним табличка «БОРЩЕВИК → БОРЩ»; «Запомни:» — палец вверх; «кисло!» — отхлёбывает из ложки и морщится, «кислые» зигзаги.
   Главный свет — низкое солнце слева сквозь туман; второй — оранжевый костёр под горшком. Переход В сцену — НЫРОК в тарелку: сметанная спираль закручивает кадр, красная толща с пузырями, всплытие в зелёный луг. */
(() => {
  EV.gr_dive = S0.grass;
  EV.gr_green = wtw('s1', 'зелёный');
  EV.gr_name = wtw('s1', 'борщевика.');
  EV.gr_rule = wtw('s2', 'Запомни:');
  EV.gr_sour = wtw('s2', 'кисло!');
  SHAKES.push([EV.gr_sour + 0.05, 0.14, 5]);
  KEYW.push('зелёный', 'кисло!');
  const SUN = [-60, 640];
  function sky(t) {                                                      // рассветное небо: персик → мята, солнце в дымке, облака, птицы
    vgrad(-800, 1400, ['#6a8ab0', '#a8c4c8', '#f4d8a8', '#ffe8c0']);
    glow(SUN[0], SUN[1], 320, 'rgba(255,224,160,1)', 0.35); ell(SUN[0], SUN[1], 80, 80, { wash: '#fff4d0', washA: 1, line: false });
    for (let i = 0; i < 6; i++) { const x = ((i * 360 + t * 10) % 2200) - 500, y = -200 + (i % 3) * 120; blob([[x, y], [x + 140, y - 30], [x + 320, y - 10], [x + 420, y + 10], [x + 240, y + 26], [x + 60, y + 20]], { wash: i % 2 ? '#f8e0c8' : '#e8eef0', washA: 0.75, line: false }); }
    for (let i = 0; i < 6; i++) { const k = (t * 0.05 + i * 0.17) % 1, x = -200 + k * 1500, y = 160 + Math.sin(k * 8 + i) * 40 + i * 24; pencil([[x - 14, y], [x, y - 8], [x + 14, y]], { w: 3, col: '#3a3a4a', pass2: false }); }
  }
  function hills(t) {                                                    // лесистые холмы, река в тумане, дальние полуземлянки с дымом
    sil([[-800, 1000], [-400, 850], [0, 880], [400, 820], [900, 880], [1400, 840], [1900, 900], [1900, 1300], [-800, 1300]], '#6a8a7a', 0.9);
    for (let i = 0; i < 46; i++) { const x = -700 + i * 56, h = 50 + (i * 31 % 60); ell(x, 900 - h * 0.4, 34, h * 0.7, { wash: i % 3 ? '#4a6a5a' : '#3a5a4a', washA: 0.9, line: false }); pencil([[x, 900 - h * 0.2], [x, 940]], { w: 3, col: '#2a3a2a', a: 0.5, pass2: false }); }
    const rv = blob([[-800, 1010], [-200, 990], [300, 1020], [800, 1000], [1900, 1020], [1900, 1060], [800, 1050], [300, 1070], [-200, 1040], [-800, 1060]], { wash: '#c8dce0', washA: 1, line: false, key: 24200 }); for (let i = 0; i < 12; i++) pencil([[-600 + i * 200 + (t * 20) % 200, 1030], [-560 + i * 200 + (t * 20) % 200, 1030]], { w: 3, col: '#ffffff', a: 0.6, pass2: false });
    for (let i = 0; i < 4; i++) { const x = 820 + i * 150, y = 990; poly([[x - 70, y], [x, y - 80], [x + 70, y]], { wash: '#c8a868', washA: 1, w: 1.6, col: '#5a4020' }); rect(x - 14, y - 30, 28, 30, { wash: '#3a2a1a', washA: 1, line: false }); for (let q = 0; q < 4; q++) { const ph = (t * 0.3 + q / 4 + i * 0.2) % 1; ell(x + 10 + Math.sin(ph * 6 + i) * 20, y - 90 - ph * 160, 16 + ph * 30, 12 + ph * 18, { wash: '#e8e4dc', washA: 0.5 * (1 - ph), line: false }); } }
    haze('#f4e8d8', 0.14);
  }
  function village(t) {                                                  // средний план: полуземлянка, плетень, огород, люди, гуси
    vgrad(1000, 1500, ['#8aa86a', '#9ab870', '#7a9a5a']);
    push(-60, 1260, 1.1); const rf = poly([[-260, 0], [0, -230], [260, 0]], { wash: '#d8b870', washA: 1, w: 3, col: '#4a3010', key: 24210 }); shadeG(rf.path, 260, 0, -40, -100, '#7a5a20', 0.5); for (let i = 0; i < 20; i++) pencil([[-240 + i * 24, -6], [-120 + i * 12, -200 + Math.abs(i - 10) * 6]], { w: 1.6, col: '#8a6a30', a: 0.6, pass2: false });
    rect(-60, -100, 120, 100, { wash: '#2a1a10', washA: 1, w: 2, col: '#1a0a04' }); rect(-180, -40, 360, 40, { wash: '#8a6a4a', washA: 1, w: 2, col: '#3a2410' }); for (let q = 0; q < 5; q++) { const ph = (t * 0.35 + q / 5) % 1; ell(120 + Math.sin(ph * 5) * 24, -260 - ph * 260, 20 + ph * 40, 14 + ph * 24, { wash: '#efe8e0', washA: 0.55 * (1 - ph), line: false }); } pop();
    for (let i = 0; i < 18; i++) { const x = 240 + i * 34; pencil([[x, 1320], [x + 3, 1210]], { w: 6, col: '#6a4a2a', pass2: false }); } for (let k = 0; k < 4; k++) pencil(spline([[230, 1240 + k * 20], [500, 1250 + k * 20], [860, 1236 + k * 20]], false, 6), { w: 5, col: '#8a6a3a', pass2: false });
    for (let i = 0; i < 4; i++) { pencil([[260 + i * 150, 1222], [262 + i * 150, 1196]], { w: 3, col: '#6a4a2a', pass2: false }); ell(262 + i * 150, 1186, 16, 12, { wash: '#b8743a', washA: 1, w: 1.4, col: '#3a1a08' }); }   // горшки на кольях плетня
    for (let i = 0; i < 3; i++) hogweed(980 + i * 120, 1300, 0.95 + (i % 2) * 0.15, t, {});
    const cut = Math.sin(t * 3) * 0.6;
    human(760, 1330, 1.05, t, { body: '#efe6d2', trim: '#c8202a', legs: '#efe6d2', long: 1, hat: 'scarf', hatCol: '#f4f0e4', armL: 'hold', armR: 'swing', face: t > EV.gr_sour ? 'grin' : 'smile', seed: 24211, flip: -1, look: -0.4, skin: '#f0c8a8' });
    push(720, 1080, 1, cut); pencil(spline([[0, 0], [30, -20], [50, 10]], false, 4), { w: 5, col: '#a8aeb4', pass2: false }); pop();
    human(1180, 1340, 1.0, t, { body: '#e8dcc0', trim: '#2a5aa8', legs: '#e8dcc0', long: 1, hat: 'scarf', hatCol: '#c8202a', armL: 'hold', armR: 'hold', face: 'calm', seed: 24212, look: -0.2, skin: '#f0c8a8' });
    push(1180, 1150, 1); const bk = blob([[-60, 0], [-50, 50], [50, 50], [60, 0]], { wash: '#c8a060', washA: 1, w: 2, col: '#4a2a08' }); for (let i = 0; i < 4; i++) pencil([[-40 + i * 26, 0], [-50 + i * 30, -80]], { w: 5, col: '#5a8a2a', pass2: false }); pop();
    const gx = 420 + Math.sin(t * 0.6) * 80; human(gx, 1360, 0.75, t, { body: '#e8dcc0', legs: '#7a5a3a', hair: '#e8c060', face: 'grin', armL: 'swing', armR: 'up', seed: 24213, prop: 'stick' });
    for (let i = 0; i < 3; i++) { const x = gx + 80 + i * 60, y = 1360 + (i % 2) * 10, b = Math.sin(t * 6 + i) * 4; ell(x, y - 30 + b, 30, 20, { wash: '#f8f6f0', washA: 1, w: 1.8, col: '#4a4a4a' }); pencil(spline([[x + 20, y - 40], [x + 34, y - 70], [x + 44, y - 74]], false, 4), { w: 6, col: '#f8f6f0', pass2: false }); poly([[x + 44, y - 78], [x + 60, y - 72], [x + 44, y - 70]], { wash: '#f0a020', washA: 1, line: false }); }
    shaft(SUN[0] + 200, SUN[1], 300, 1200, -0.9, 'rgba(255,230,170,1)', 0.12); castShadow(760, 1330, 110, 220, 0.9, 0.22); castShadow(1180, 1340, 110, 220, 0.9, 0.2);
  }
  function giant(t) {                                                    // гигантский борщевик за Томом: зонтик качается, на «борщевика.» — подсвечен
    const lit = t > EV.gr_name - 0.1 && t < EV.gr_rule ? 1 : 0; push(900, 1460, 1.9, Math.sin(t * 0.8) * 0.03 + (lit ? Math.sin((t - EV.gr_name) * 7) * 0.04 : 0)); hogweed(0, 0, 1, t, {}); pop();
    if (lit) lightPool(900, 660, 260, 120, 'rgba(255,240,180,1)', 0.3);
    if (t > EV.gr_name && t < EV.gr_rule + 0.4) { const k = popK(t, EV.gr_name, 0.4); push(760, 760, k, -0.05); rect(-210, -50, 420, 100, { wash: '#f4ecd8', washA: 1, w: 3, col: '#2b2622' }); txt('БОРЩЕВИК', -60, 14, 40, { font: 'Osw', col: '#3a6a2a' }); txt('→ БОРЩ', 130, 14, 40, { font: 'Osw', col: '#c8202a' }); pencil([[-180, 30], [-40, 30]], { w: 3, col: '#c8202a', a: 0.7, pass2: false }); pop(); }
  }
  function table(t) {                                                    // колода-стол: кадка с зелёной закваской, горшок на костре, нож, травы, ложки, лук, хлеб
    const tb = rect(-400, 1440, 2000, 600, { wash: '#7a5a3a', washA: 1, w: 3, col: '#2a1408', key: 24220 }); shadeG(tb.path, 0, 1440, 0, 1800, '#2a1408', 0.5); for (let i = 0; i < 6; i++) pencil([[-400, 1470 + i * 50], [1600, 1474 + i * 50]], { w: 3, col: '#4a2a10', a: 0.5, pass2: false });
    rect(-400, 1430, 2000, 16, { wash: '#9a7a4a', washA: 1, w: 2, col: '#3a1a08' }); lightPool(400, 1500, 600, 120, 'rgba(255,224,170,1)', 0.3);
    kvasTub(330, 1520, 0.95, t, { col: t > EV.gr_green ? '#6a9a2a' : '#7a8a4a', leaves: 1, key: 24221 });
    const gf = t > EV.gr_green && t < EV.gr_green + 0.8 ? 1 - (t - EV.gr_green) / 0.8 : 0;
    for (let i = 0; i < 4; i++) { const f = flick(t, i); blob([[960 + i * 22, 1520], [968 + i * 22, 1490 - 24 * f], [980 + i * 22, 1470 - 30 * f], [992 + i * 22, 1496 - 16 * f], [1000 + i * 22, 1520]], { wash: i % 2 ? '#ffb030' : '#ff7020', washA: 0.95, line: false }); }
    glow(1000, 1490, 110, 'rgba(255,150,60,1)', 0.3); clayPot(1000, 1460, 0.75, t, { col: '#5a8a2a' }); if (gf > 0) { ell(1000, 1340, 90 * (1 + (1 - gf)), 20, { line: true, w: 6, col: '#8aff6a', a: gf }); }
    if (t > EV.gr_green && t < EV.gr_name + 0.3) bubbleTag('ЗЕЛЁНЫЙ', 860, 1250, t, EV.gr_green + 0.05, '#3a8a2a', 40, 0.05);
    push(560, 1600, 0.9, 0.2); pencil([[-80, 0], [40, 0]], { w: 10, col: '#6a4a2a', pass2: false }); poly([[40, -10], [150, -4], [40, 10]], { wash: '#b8bcc4', washA: 1, w: 1.6, col: '#3a3e44' }); pop();
    for (let i = 0; i < 5; i++) { push(700 + i * 16, 1560, 1, -0.3 + i * 0.15); pencil([[0, 0], [0, -110]], { w: 6, col: '#5a8a2a', pass2: false }); blob([[0, -110], [-24, -140], [-6, -160], [14, -138]], { wash: '#4a8a2a', washA: 1, w: 1.2, col: '#1a3a0a' }); pop(); }
    for (let i = 0; i < 3; i++) { push(150 + i * 40, 1640, 0.8, -0.4 + i * 0.3); pencil([[0, 0], [0, -120]], { w: 7, col: '#b8864a', pass2: false }); ell(0, -130, 18, 24, { wash: '#c8965a', washA: 1, w: 1.6, col: '#4a2a08' }); pop(); }
    push(880, 1660, 0.8); const br = blob([[-90, 0], [-80, -50], [0, -70], [80, -50], [90, 0]], { wash: '#a8743a', washA: 1, w: 2, col: '#3a1a04' }); shadeG(br.path, 0, -70, 0, 0, '#5a2a08', 0.4); pop();
    for (let i = 0; i < 3; i++) ell(1100 + i * 40, 1640, 24, 20, { wash: '#e8d8b8', washA: 1, w: 1.6, col: '#6a4a2a' });
    castShadow(330, 1520, 240, 120, 0.9, 0.25); castShadow(1000, 1520, 160, 100, 0.9, 0.2);
  }
  function sourFx(t, P) {                                                // «кисло!»: зигзаги и капли вокруг Тома
    if (t < EV.gr_sour || t > EV.gr_sour + 1.2) return; const k = clamp((t - EV.gr_sour) / 0.4);
    for (let i = 0; i < 6; i++) { const a = -2.6 + i * 0.4, r0 = 160 * P.s, r1 = r0 + 70 * k; const x0 = P.x + Math.cos(a) * r0, y0 = P.y - 380 * P.s + Math.sin(a) * r0; pencil([[x0, y0], [x0 + Math.cos(a) * 30 + 10, y0 + Math.sin(a) * 30], [x0 + Math.cos(a) * (r1 - r0), y0 + Math.sin(a) * (r1 - r0)]], { w: 5, col: '#8ad83a', pass2: false }); }
  }
  function front(t) {                                                    // передний план: крупные листья борщевика и роса, стебли по краям, паутинка
    for (const [x, y, s, r] of [[-60, 1900, 1.4, 0.4], [1150, 1880, 1.3, -0.5]]) { push(x, y, s, r + Math.sin(t + x) * 0.03); for (let i = 0; i < 3; i++) { push(0, -i * 90, 1, (i - 1) * 0.6); blob([[0, 0], [40, -40], [100, -30], [130, -80], [170, -30], [120, 20], [60, 30]], { wash: '#3a6a2a', washA: 1, w: 2, col: '#1a3a0a' }); pencil([[0, 0], [150, -40]], { w: 2, col: '#8ab84a', pass2: false }); pop(); } pop(); }
    const r = rng(24230); for (let i = 0; i < 14; i++) { const x = r() * 1100, y = 1700 + r() * 200; ell(x, y, 5, 5, { wash: '#ffffff', washA: 0.7 + Math.sin(t * 3 + i) * 0.2, line: false }); }
    if (t < EV.gr_dive + 1.2) { const k = clamp((t - EV.gr_dive) / 1.2); for (let i = 0; i < 10; i++) { const rr = rng(24231 + i); ell(rr() * 1000, 1800 - k * 1400 - rr() * 300, 12 + rr() * 16, 12 + rr() * 16, { wash: '#c8202a', washA: 0.5 * (1 - k), w: 2, col: '#ff8a9a' }); } }
  }
  WORLD.grass = (t, u, cat) => {
    lay(30, () => { sky(t); });
    lay(12, () => { hills(t); });
    lay(4, () => { village(t); });
    lay(2.2, () => { giant(t); });
    lay(1, () => { cat(); table(t); });
    lay(0.7, () => { front(t); motes(20, [100, 900, 1100, 1700], '#fff8e0', t, 24240, { sp: 6, sz: 3, a: 0.5, wob: 8 }); moodDark(240, 1000, 600, 1600, '#1a2a2a', 0.32); });
  };
  DIR.grass = {
    outfit: 'linB', light: { side: -1, rim: '#ffe0a0' }, grade: ['#c8e0a0', 0.06],
    act: () => [[S0.grass, 'awe'], [EV.gr_green, 'talk'], [EV.gr_name, 'proud'], [EV.gr_rule, 'smug'], [EV.gr_sour, 'annoyed'], [EV.gr_sour + 0.5, 'laugh']],
    pose: (t, u, b) => { const hold = t > EV.gr_name - 0.2 && t < EV.gr_rule, rule = t > EV.gr_rule && t < EV.gr_sour - 0.1, sip = t > EV.gr_sour - 0.25;
      return Object.assign(b, { x: 660, y: 1600, s: 1.15, flip: true, look: t < EV.gr_green ? [0.2, -0.4] : hold ? [0.4, -0.5] : [0, 0],
        hand: hold ? [160, -380] : sip ? [40, -330] : [190, -200], handF: rule ? [-120, -400] : [-150, -200], point: rule,
        prop: hold ? 'hogweedP' : 'ladleP', propAng: hold ? 0.2 : sip ? 2.6 : 0.5, squint: t > EV.gr_sour && t < EV.gr_sour + 1, sweat: t > EV.gr_sour && t < EV.gr_sour + 1, tailUp: t > EV.gr_sour }); },
    afterCat: (t, u, P) => { sourFx(t, P); },
    cam: () => [[S0.grass, 600, 1320, 0.26], [EV.gr_green, 620, 1290, 0.28], [EV.gr_name, 660, 1180, 0.27], [EV.gr_rule, 640, 1250, 0.3], [EV.gr_sour, 640, 1260, 0.33], [S1.grass, 640, 1270, 0.34]]
  };
  TRANS_IN.grass = { a: 0.5, b: 0.8, runA: 1, fx(k, t, A, B) {          // НЫРОК: наезд в центр тарелки, сметанная спираль закручивает кадр, красная толща с пузырями, всплытие в зелёный
    const px = 440, py = 1190;
    if (k < 0.42) { const e = sm(k / 0.42), s = 1 + e * e * 5; drawBuf(A, s, px + (540 - px) * s, py + (960 - py) * s, 1, 'source-over', 0, 0, e * 1.2);
      scr(() => { const n = 70, pts = []; for (let i = 0; i <= n; i++) { const q = i / n, a = q * 3 * 6.283 + e * 8, rad = 20 + q * (120 + e * 900); pts.push([540 + Math.cos(a) * rad, 960 + Math.sin(a) * rad]); }
        pencil(pts, { w: 26 + e * 40, col: '#fbf6ea', a: 0.9 * e, pass2: false, gap: false }); screenFill('#a8142a', e * 0.6); }); }
    else if (k < 0.62) { scr(() => { vgrad(0, 1920, ['#6a0414', '#a8142a', '#3a0008']); const e = (k - 0.42) / 0.2; for (let i = 0; i < 40; i++) { const r = rng(24250 + i), x = r() * 1080, y = 1920 - ((r() * 1920 + e * 2400) % 2100), rr = 8 + r() * 30; ell(x, y, rr, rr, { line: true, w: 3, col: '#ff9aa8', a: 0.7 }); ell(x - rr * 0.3, y - rr * 0.3, rr * 0.25, rr * 0.25, { wash: '#ffffff', washA: 0.6, line: false }); }
        for (let i = 0; i < 6; i++) { const r = rng(24290 + i); pencil([[r() * 1080, r() * 1920], [r() * 1080 + 80, r() * 1920 - 30]], { w: 8, col: '#e8f0c8', a: 0.6, pass2: false }); } }); }
    else { const e = sm((k - 0.62) / 0.38); drawBuf(B, 1.25 - e * 0.25, 540, 960); scr(() => { ctx.save(); const R = e * 1500; ctx.beginPath(); ctx.rect(0, 0, 1080, 1920); ctx.arc(540, 960, R, 0, 6.3, true); ctx.fillStyle = '#8a0a1e'; ctx.fill(); ctx.restore(); ell(540, 960, R, R, { line: true, w: 22, col: '#e8485a', a: 1 - e });
        for (let i = 0; i < 18; i++) { const a = i / 18 * 6.283, r = R + 20 + (i % 3) * 30; ell(540 + Math.cos(a) * r, 960 + Math.sin(a) * r, 14, 14, { line: true, w: 3, col: '#ffb0b8', a: 1 - e }); } }); }
  } };
})();
