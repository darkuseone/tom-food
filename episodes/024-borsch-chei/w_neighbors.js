/* 024 — `neighbors`: «А соседи — по-своему: поляки варят прозрачный, с ушками, / литовцы — розовый, на кефире: три тонны за праздник!»
   Один длинный стол на два мира, шов — волнистая «кромка» скатерти: СЛЕВА польский Сочельник (Вигилия) — синяя снежная ночь в окне, первая звезда,
   ёлка с шарами, свечи, сено под белой скатертью, облатка, лишняя тарелка «для гостя», бабушка и девочка у окна; на столе — чашка прозрачного рубинового
   барща с ушками. СПРАВА литовский летний праздник розового холодника в Вильнюсе — розовые флажки и шары, люди в розовом, розовый трамвайчик,
   палатка «ŠALTIBARŠČIAI», ящики кефира; на столе — миска розового супа, горячая картошка, яйца. Том в свитере с оленями + фартук.
   По словам: «соседи» — камера в середине, на шве; «поляки» — уезжает влево, свечи разгораются; «прозрачный,» — Том поднимает чашку, сквозь барщ светит свеча;
   «ушками,» — ушки выпрыгивают на блюдце, ценник «УШКИ»; «литовцы» — камера вправо, вспыхивает розовый праздник; «кефире:» — кефир льётся в миску;
   «тонны» — на поддон с грохотом падают ящики кефира, плашка «3 ТОННЫ». Главный свет — свечи (слева) и солнце (справа). Переход В сцену — розовая кефирная волна. */
(() => {
  EV.nb_mid = LS('s7');
  EV.nb_pl = wtw('s7', 'поляки');
  EV.nb_clear = wtw('s7', 'прозрачный,');
  EV.nb_ush = wtw('s7', 'ушками,');
  EV.nb_lt = LS('s8');
  EV.nb_pink = wtw('s8', 'розовый,');
  EV.nb_kef = wtw('s8', 'кефире:');
  EV.nb_ton = wtw('s8', 'тонны');
  SHAKES.push([EV.nb_ton + 0.1, 0.18, 8]);
  KEYW.push('прозрачный,', 'розовый,');
  const SEAM = 640, CANDLE = [300, 1330], SUN = [1250, 500];
  const seamPts = (x0, y0, y1) => { const p = [[x0 - 4000, y0], [x0, y0]]; for (let y = y0; y <= y1; y += 80) p.push([x0 + Math.sin(y * 0.01) * 40, y]); p.push([x0, y1], [x0 - 4000, y1]); return p; };
  function backL(t) {                                                    // польская зимняя ночь: стена в обоях, окно со снегом и звездой, ёлка, картина
    vgrad(-600, 2200, ['#1a2a4a', '#2a3a5a', '#3a3a5a']);
    for (let i = 0; i < 14; i++) for (let j = 0; j < 12; j++) ell(-500 + i * 80, 200 + j * 90, 6, 10, { wash: '#4a5a8a', washA: 0.6, line: false });
    push(200, 700, 1); const wn = rect(-150, -300, 300, 380, { wash: '#0a1a3a', washA: 1, w: 12, col: '#e8dcc0' }); ctx.save(); ctx.clip(wn.path); vgrad(-300, 80, ['#050a20', '#1a2a5a']); sil([[-150, 40], [-80, 0], [0, 20], [150, -10], [150, 80], [-150, 80]], '#e8f0f8', 1);
    motes(30, [-150, -300, 150, 80], '#ffffff', t, 24700, { sp: 30, sz: 3, a: 0.9 }); const st = 0.7 + Math.sin(t * 5) * 0.3; for (let q = 0; q < 4; q++) pencil([[60, -200], [60 + Math.cos(q * 0.785) * 30 * st, -200 + Math.sin(q * 0.785) * 30 * st]], { w: 3, col: '#fff4c0', pass2: false }); for (let q = 0; q < 4; q++) pencil([[60, -200], [60 - Math.cos(q * 0.785) * 30 * st, -200 - Math.sin(q * 0.785) * 30 * st]], { w: 3, col: '#fff4c0', pass2: false }); glow(60, -200, 50, 'rgba(255,240,180,1)', 0.35); ctx.restore();
    pencil([[0, -300], [0, 80]], { w: 8, col: '#e8dcc0', pass2: false }); pencil([[-150, -110], [150, -110]], { w: 8, col: '#e8dcc0', pass2: false }); for (let i = 0; i < 6; i++) ell(-120 + i * 48, 76, 22, 10, { wash: '#f4f8fc', washA: 1, line: false }); pop();
    push(-160, 1300, 1); for (let i = 0; i < 5; i++) poly([[-180 + i * 30, -i * 140], [0, -170 - i * 140], [180 - i * 30, -i * 140]], { wash: i % 2 ? '#1a5a3a' : '#2a6a4a', washA: 1, w: 2, col: '#0a2a1a' }); for (let i = 0; i < 10; i++) { const r = rng(24701 + i); ell(-120 + r() * 240 * (1 - (i % 5) * 0.15), -60 - (i % 5) * 130, 14, 14, { wash: ['#c8202a', '#e8c040', '#f4f4f8', '#2a6ac8'][i % 4], washA: 1, w: 1.4, col: '#2a2a2a' }); }
    for (let i = 0; i < 12; i++) { const r = rng(24715 + i), on = Math.sin(t * 4 + i) > 0; ell(-130 + r() * 260 * (1 - (i % 5) * 0.15), -30 - (i % 5) * 130, 5, 5, { wash: on ? '#fff4a0' : '#a89a60', washA: 1, line: false }); } poly([[0, -740], [14, -700], [56, -700], [22, -676], [34, -634], [0, -660], [-34, -634], [-22, -676], [-56, -700], [-14, -700]], { wash: '#f4c840', washA: 1, w: 1.6, col: '#6a4a08' }); pop();
    push(420, 520, 1); rect(-80, -100, 160, 140, { wash: '#c8a060', washA: 1, w: 6, col: '#6a4a20' }); rect(-64, -84, 128, 108, { wash: '#4a5a6a', washA: 1, line: false }); ell(0, -30, 30, 36, { wash: '#e8d0b0', washA: 1, line: false }); pop();
    lightPool(CANDLE[0], 1200, 500, 400, 'rgba(255,190,110,1)', 0.25);
  }
  function backR(t) {                                                    // литовский розовый праздник: небо, крыши Вильнюса, флажки, шары, палатка, трамвайчик, люди в розовом
    vgrad(-600, 2200, ['#8ac8f0', '#c8e4f8', '#ffd8e8']);
    glow(SUN[0], SUN[1], 260, 'rgba(255,250,220,1)', 0.35); ell(SUN[0], SUN[1], 60, 60, { wash: '#fffbe8', washA: 1, line: false });
    for (let i = 0; i < 9; i++) { const x = 680 + i * 110, h = 160 + (i * 53 % 120); rect(x, 1000 - h, 100, h, { wash: ['#f4e0c8', '#e8c8a8', '#f8ecd8'][i % 3], washA: 1, w: 1.6, col: '#6a4a3a' }); poly([[x - 6, 1000 - h], [x + 50, 950 - h], [x + 106, 1000 - h]], { wash: '#c8603a', washA: 1, w: 1.4, col: '#5a2a1a' }); for (let w = 0; w < 2; w++) rect(x + 20 + w * 36, 1020 - h + 30, 22, 30, { wash: '#4a6a9a', washA: 1, line: false }); }
    push(1000, 760, 1); rect(-20, -320, 40, 320, { wash: '#f4ecdc', washA: 1, w: 1.6, col: '#6a5a4a' }); poly([[-30, -320], [0, -400], [30, -320]], { wash: '#8a6a4a', washA: 1, w: 1.4 }); pop();
    for (let g = 0; g < 2; g++) { const y0 = 640 + g * 160; pencil(spline([[620, y0], [900, y0 + 80], [1300, y0 + 20]], false, 8), { w: 2, col: '#4a4a4a', pass2: false }); for (let i = 0; i < 12; i++) { const x = 640 + i * 56, y = y0 + Math.sin((x - 620) / 680 * 3.14) * 70; poly([[x, y], [x + 34, y], [x + 17, y + 44 + Math.sin(t * 3 + i) * 4]], { wash: i % 2 ? '#f26aa8' : '#ffd0e4', washA: 1, w: 1, col: '#8a2a5a' }); } }
    const pk = clamp((t - EV.nb_pink) / 0.5); for (let i = 0; i < 7; i++) { const x = 720 + i * 90, y = 520 - ((t * 20 + i * 60) % 260) * pk; ell(x, y, 30, 36, { wash: i % 2 ? '#f26aa8' : '#ff9ac8', washA: 1, w: 1.6, col: '#8a2a5a' }); pencil([[x, y + 36], [x + 8, y + 120]], { w: 1.4, col: '#6a6a6a', pass2: false }); ell(x - 10, y - 12, 8, 6, { wash: '#ffffff', washA: 0.7, line: false }); }
    push(1180, 1180, 0.9); rect(-180, -100, 360, 100, { wash: '#f26aa8', washA: 1, w: 3, col: '#6a1a3a' }); for (let i = 0; i < 6; i++) rect(-160 + i * 56, -84, 44, 50, { wash: '#ffd8e8', washA: 1, w: 1.4, col: '#6a1a3a' }); ell(-120, 0, 30, 30, { wash: '#3a3a3a', washA: 1, line: false }); ell(120, 0, 30, 30, { wash: '#3a3a3a', washA: 1, line: false }); pop();
    push(820, 1180, 1); poly([[-150, -60], [0, -160], [150, -60]], { wash: '#f26aa8', washA: 1, w: 2, col: '#6a1a3a' }); for (let i = 0; i < 5; i++) poly([[-150 + i * 60, -60], [-120 + i * 60, -36], [-90 + i * 60, -60]], { wash: i % 2 ? '#ffffff' : '#f26aa8', washA: 1, line: false }); rect(-140, -60, 280, 40, { wash: '#ffffff', washA: 1, w: 1.6, col: '#6a1a3a' }); txt('ŠALTIBARŠČIAI', 0, -34, 22, { font: 'Osw', col: '#c82a6a' }); pop();
    const hy = t > EV.nb_kef ? 'grin' : 'smile';
    human(760, 1320, 1.0, t, { body: '#f26aa8', legs: '#3a3a5a', hair: '#e8c060', face: hy, armL: 'up', armR: 'hold', seed: 24720, look: -0.3 });
    human(980, 1330, 1.05, t, { body: '#ffd0e4', legs: '#2a3a5a', hair: '#5a3a2a', hat: 'cap', hatCol: '#f26aa8', face: t > EV.nb_ton ? 'shock' : hy, armL: 'wave', armR: 'hold', seed: 24721, flip: -1, look: -0.5 });
    human(1220, 1340, 0.95, t, { body: '#c82a6a', legs: '#3a3a3a', beard: 'long', hair: '#c8a060', face: hy, armL: 'hold', armR: 'up', seed: 24722, flip: -1, look: -0.4 });
    lightPool(1000, 1300, 500, 200, 'rgba(255,220,240,1)', 0.22);
  }
  function peopleL(t) {                                                  // бабушка со свечой, девочка у окна ищет первую звезду
    human(120, 1330, 0.95, t, { body: '#5a2a3a', legs: '#2a2a3a', long: 1, hair: '#e8e8e8', hat: 'scarf', hatCol: '#2a3a6a', armL: 'hold', armR: 'hold', face: 'smile', seed: 24730, look: 0.5, prop: 'candle' });
    human(330, 1350, 0.7, t, { body: '#f4ecd8', trim: '#c8202a', legs: '#c8202a', hair: '#e8c060', face: 'grin', armL: 'point', armR: 'down', seed: 24731, flip: -1, look: -0.6 });
  }
  function table(t) {                                                    // стол: слева белая скатерть с сеном и облаткой, свечи, барщ, лишняя тарелка; справа розовая клетка, холодник, картошка, кефир
    const tb = rect(-500, 1440, 2200, 600, { wash: '#f8f4ec', washA: 1, w: 3, col: '#3a3a3a', key: 24740 }); shadeG(tb.path, 0, 1440, 0, 1900, '#8a8a9a', 0.4);
    for (let i = 0; i < 12; i++) pencil([[SEAM + 40 + i * 60, 1440], [SEAM + 40 + i * 60, 2000]], { w: 8, col: '#f26aa8', a: 0.35, pass2: false }); for (let i = 0; i < 10; i++) pencil([[SEAM + 20, 1470 + i * 60], [1700, 1470 + i * 60]], { w: 8, col: '#f26aa8', a: 0.35, pass2: false });
    pencil(spline([[SEAM, 1440], [SEAM - 30, 1700], [SEAM + 20, 2000]], false, 6), { w: 6, col: '#c8a060', pass2: false });
    for (let i = 0; i < 14; i++) pencil([[-300 + i * 30, 1450], [-280 + i * 34, 1430 - (i % 3) * 6]], { w: 2, col: '#d8b860', pass2: false });   // сено торчит из-под скатерти
    const lit = clamp((t - EV.nb_pl) / 0.4) * 0.6 + 0.4; lightPool(CANDLE[0], 1500, 380, 120, 'rgba(255,200,120,1)', 0.35 * lit);
    for (const cx of [180, 300]) { rect(cx - 12, 1330, 24, 110, { wash: '#f8f0d8', washA: 1, w: 1.6, col: '#6a5a4a' }); const f = flick(t, cx); blob([[cx - 8, 1330], [cx, 1300 - 16 * f], [cx + 8, 1330]], { wash: '#ffc040', washA: 1, line: false }); glow(cx, 1310, 60, 'rgba(255,200,110,1)', 0.35 * lit); }
    push(60, 1560, 0.9); ell(0, 0, 110, 24, { wash: '#f4f4f8', washA: 1, w: 2, col: '#4a4a5a' }); ell(0, 0, 80, 16, { line: true, w: 1.6, col: '#c8a040' }); pop();
    push(180, 1640, 0.9, 0.1); rect(-60, -20, 120, 40, { wash: '#f8f4e8', washA: 1, w: 1.6, col: '#8a8070' }); for (let i = 0; i < 3; i++) ell(-30 + i * 30, 0, 10, 10, { line: true, w: 1.4, col: '#c8b8a0' }); pop();
    if (!(t > EV.nb_clear - 0.2 && t < EV.nb_lt)) barszczCup(420, 1560, 0.85, t, { key: 24741 }); else { push(420, 1600, 0.85); ell(0, 0, 170, 34, { wash: '#f8f4ec', washA: 1, w: 2.4, col: '#4a4038' }); for (let i = 0; i < 4; i++) { const a = -0.8 + i * 0.5; uszko(Math.cos(a) * 120 + 20, Math.sin(a) * 6, 0.9, a); } pop(); }
    if (t > EV.nb_ush) for (let i = 0; i < 3; i++) { const k = popK(t, EV.nb_ush + i * 0.1, 0.4); uszko(330 + i * 60, 1520 - k * 40, 1.1 * k, i - 1); }
    if (t > EV.nb_ush && t < EV.nb_lt + 0.3) bubbleTag('УШКИ', 380, 1380, t, EV.nb_ush + 0.1, '#c8202a', 36, -0.06);
    const kef = clamp((t - EV.nb_kef) / 0.8); pinkSoup(880, 1560, 0.85, t, { key: 24742 });
    if (kef > 0 && kef < 1) { push(980, 1300, 1, -0.9); const bt = blob([[-24, 60], [-24, -30], [-12, -50], [-12, -80], [12, -80], [12, -50], [24, -30], [24, 60]], { wash: '#f4f4f8', washA: 1, w: 2, col: '#4a5a6a' }); rect(-24, 0, 48, 24, { wash: '#f26aa8', washA: 1, line: false }); pop(); pencil(spline([[940, 1330], [920, 1420], [900, 1520]], false, 5), { w: 14, col: '#fbf8f4', pass2: false }); }
    push(1080, 1640, 0.8); ell(0, 0, 100, 22, { wash: '#f4f4f8', washA: 1, w: 2, col: '#4a4a5a' }); for (let i = 0; i < 4; i++) { ell(-50 + i * 32, -16 - (i % 2) * 10, 26, 20, { wash: '#f0d8a0', washA: 1, w: 1.4, col: '#8a6a2a' }); for (let q = 0; q < 2; q++) pencil([[-60 + i * 32 + q * 8, -24], [-56 + i * 32 + q * 8, -30]], { w: 2, col: '#3a8a2a', pass2: false }); } steamWisps(0, -30, 0.7, t, 3, 24743, 0.4); pop();
    for (let i = 0; i < 3; i++) { push(720 + i * 46, 1700, 0.8); const bt = blob([[-24, 0], [-24, -90], [-12, -110], [-12, -140], [12, -140], [12, -110], [24, -90], [24, 0]], { wash: '#f4f4f8', washA: 1, w: 2, col: '#4a5a6a', key: 24745 + i }); rect(-24, -60, 48, 30, { wash: '#f26aa8', washA: 1, line: false }); txt('KEFYRAS', 0, -40, 10, { font: 'Osw', col: '#ffffff' }); rect(-12, -150, 24, 12, { wash: '#2a7ac8', washA: 1, line: false }); pop(); }
    castShadow(420, 1560, 260, 90, 0.6, 0.25); castShadow(880, 1560, 260, 90, -0.6, 0.25);
  }
  function pallet(t) {                                                   // «три тонны»: ящики кефира с грохотом падают на поддон справа
    if (t < EV.nb_ton - 0.3) return; for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) { const t0 = EV.nb_ton - 0.3 + (r * 3 + c) * 0.04, k = clamp((t - t0) / 0.3); if (k <= 0) continue; const x = 1060 + c * 110, y = lerp(200, 1420 - r * 80, k * k);
      push(x, y, 1); rect(-52, -78, 104, 78, { wash: '#2a7ac8', washA: 1, w: 2, col: '#0a2a5a' }); for (let q = 0; q < 4; q++) { rect(-46 + q * 24, -100, 20, 40, { wash: '#f4f4f8', washA: 1, w: 1, col: '#4a5a6a' }); rect(-46 + q * 24, -86, 20, 10, { wash: '#f26aa8', washA: 1, line: false }); } pop(); }
    rect(1000, 1420, 340, 30, { wash: '#c8a060', washA: 1, w: 2, col: '#4a2a08' });
  }
  function front(t) {                                                    // передний план: еловая ветка с шаром слева сверху, розовая гирлянда-флажки справа, конфетти и снег
    push(-80, 380, 1, 0.3); for (let i = 0; i < 8; i++) { pencil([[0, i * 40], [120 + i * 10, i * 40 + 30]], { w: 3, col: '#1a4a2a', pass2: false }); for (let q = 0; q < 6; q++) pencil([[q * 20, i * 40 + q * 5], [q * 20 + 10, i * 40 + q * 5 - 16]], { w: 2, col: '#2a6a3a', pass2: false }); } ell(80, 360, 40, 40, { wash: '#c8202a', washA: 1, w: 2, col: '#4a0408' }); ell(66, 346, 12, 8, { wash: '#ffffff', washA: 0.7, line: false }); pop();
    pencil(spline([[900, 260], [1050, 330], [1200, 280]], false, 6), { w: 2, col: '#4a4a4a', pass2: false }); for (let i = 0; i < 6; i++) poly([[910 + i * 50, 270 + Math.sin(i * 0.6) * 40], [944 + i * 50, 270 + Math.sin(i * 0.6) * 40], [927 + i * 50, 320 + Math.sin(i * 0.6) * 40]], { wash: i % 2 ? '#f26aa8' : '#ffffff', washA: 1, w: 1, col: '#8a2a5a' });
    motes(16, [-200, 600, SEAM, 1700], '#ffffff', t, 24750, { sp: 30, sz: 3, a: 0.6 }); motes(16, [SEAM, 600, 1400, 1700], '#f26aa8', t, 24751, { sp: 20, sz: 5, a: 0.8, wob: 20 });
  }
  WORLD.neighbors = (t, u, cat) => {
    lay(6, () => { backL(t); ctx.save(); ctx.beginPath(); const pp = []; for (let y = -800; y <= 2600; y += 80) pp.push([SEAM + Math.sin(y * 0.008) * 60, y]); ctx.moveTo(pp[0][0], pp[0][1]); pp.forEach(p => ctx.lineTo(p[0], p[1])); ctx.lineTo(4000, 2600); ctx.lineTo(4000, -800); ctx.closePath(); ctx.clip(); backR(t); ctx.restore();
      pencil(Array.from({ length: 44 }, (_, i) => [SEAM + Math.sin((-800 + i * 80) * 0.008) * 60, -800 + i * 80]), { w: 8, col: '#f4ecd8', pass2: false }); peopleL(t); });
    lay(1, () => { cat(); table(t); pallet(t); });
    lay(0.7, () => { front(t); moodDark(CANDLE[0], 1200, 300, 1300, '#0a0a2a', 0.3); shaft(SUN[0], SUN[1], 300, 1400, 0.4, 'rgba(255,240,240,1)', 0.1); });
  };
  DIR.neighbors = {
    outfit: 'sweatB', light: { side: -1, rim: '#ffd0a0' }, grade: ['#ffb0c0', 0.05],
    act: () => [[S0.neighbors, 'talk'], [EV.nb_pl, 'smug'], [EV.nb_clear, 'awe'], [EV.nb_ush, 'grin'], [EV.nb_lt, 'talk'], [EV.nb_pink, 'wink'], [EV.nb_ton, 'shock'], [EV.nb_ton + 0.5, 'laugh']],
    pose: (t, u, b) => { const cup = t > EV.nb_clear - 0.2 && t < EV.nb_lt, kef = t > EV.nb_kef - 0.2 && t < EV.nb_ton;
      return Object.assign(b, { x: 640, y: 1600, s: 1.15, flip: t < EV.nb_lt, look: cup ? [-0.2, -0.3] : t < EV.nb_lt ? [-0.5, 0] : [0.5, 0],
        hand: cup ? [150, -360] : kef ? [-120, -300] : [170, -220], handF: [-150, -210], prop: cup ? 'bowlBorschP' : kef ? 'pinkBowlP' : undefined, propAng: 0, tailUp: t > EV.nb_ton }); },
    afterCat: (t, u, P) => { if (t > EV.nb_clear && t < EV.nb_lt) glow(P.x + (P.flip ? -150 : 150) * P.s, P.y - 400 * P.s, 70, 'rgba(255,80,90,1)', 0.25); },
    hud: t => { infoPlate(t, EV.nb_ton, S1.neighbors + 0.3, { kind: 'num', title: 'ПРАЗДНИК В ВИЛЬНЮСЕ', big: '3 ТОННЫ', sub: 'кефира за три дня', icon: 'kefir' }); },
    cam: () => [[S0.neighbors, 640, 1260, 0.27], [EV.nb_pl, 480, 1270, 0.28], [EV.nb_clear, 470, 1260, 0.3], [EV.nb_ush, 480, 1290, 0.3], [EV.nb_lt, 780, 1270, 0.28], [EV.nb_kef, 820, 1290, 0.29], [EV.nb_ton, 820, 1280, 0.27], [S1.neighbors, 800, 1290, 0.28]]
  };
  TRANS_IN.neighbors = { a: 0.12, b: 0.6, runA: 1, fx(k, t, A, B) {     // розовая кефирная волна накрывает кадр снизу и стекает, открывая стол соседей
    const e = sm(k), up = e < 0.5 ? e / 0.5 : 1, down = e < 0.5 ? 0 : (e - 0.5) / 0.5; drawBuf(e < 0.5 ? A : B, 1, 540, 960);
    scr(() => { const top = lerp(1980, -100, up) + down * 2100; const pts = [[0, 2100]]; for (let x = 0; x <= 1080; x += 60) pts.push([x, top + Math.sin(x * 0.012 + t * 8) * 40]); pts.push([1080, 2100]);
      shape(pts, { wash: '#f28ab8', washA: 0.97, w: 6, col: '#fbd0e2' }); for (let i = 0; i < 10; i++) { const r = rng(24760 + i); ell(r() * 1080, top + 60 + r() * 400, 10, 6, { wash: '#7ab84a', washA: 0.9, line: false }); pencil([[r() * 1080, top + 100 + r() * 300], [r() * 1080 + 20, top + 110 + r() * 300]], { w: 3, col: '#3a8a2a', pass2: false }); } });
  } };
})();
