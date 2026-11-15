/* 023 — `botany` (★ РАЗВЯЗКА): «Так кто же она, если не злак? Ботаники отвечают: / она из семьи гречишных. Её родня — щавель… и ревень! /
   А «зерно» — плод-орешек, как у бука. Англичане были правы.» + пауза-гэг. Кабинет ботаника вечером: тёмно-зелёные стены, рамки с гербариями,
   книжный шкаф до потолка, глобус, шкафчик с ящичками «SEMINA», банки с семенами и подписями, окно с луной и садом. Грифельная доска: мелом
   «ЗЛАКИ?» (зачёркивается) и семейное древо «ГРЕЧИШНЫЕ» — ветки к гречихе, щавелю, ревеню и горцу рисуются на словах. На столе — раскрытая папка
   гербария с засушенной гречихой, пучок щавеля, банка с черешками ревеня, микроскоп, лупа, чернильница с пером, стопка книг, латунная лампа
   с зелёным абажуром (главный свет), второй — холодная луна из окна. Ассистентка в очках у шкафа выдвигает ящик. Том — ботаник (+ фартук).
   По словам: «злак?» — на доске «ЗЛАКИ?» перечёркивается; «гречишных.» — мелом рисуется древо; «щавель…» — Том прикладывает лист щавеля к гербарию;
   «ревень!» — Том поднимает банку с ревенем, бирка «РОДНЯ»; «плод-орешек,» — под лупой круг-вставка: зерно и буковый орешек рядом;
   «правы.» — на доске «BUCK ✓». Пауза-гэг: Том откусывает лист щавеля и морщится — кисло. Переход В сцену: страница гербария переворачивается. */
(() => {
  EV.bt_q = wtw('s13', 'злак?');
  EV.bt_ans = wtw('s13', 'Ботаники');
  EV.bt_fam = wtw('s14', 'гречишных.');
  EV.bt_sorrel = wtw('s14', 'щавель…');
  EV.bt_rhub = wtw('s14', 'ревень!') + 0.55;
  EV.bt_nut = wtw('s15', 'плод-орешек,');
  EV.bt_right = wtw('s15', 'правы.');
  EV.bt_gag = LE('s15') + 0.05;
  SHAKES.push([EV.bt_rhub, 0.14, 6]);
  KEYW.push('гречишных.', 'ревень!', 'плод-орешек,');
  function room(t) {                                                     // стены, гербарии в рамках, шкаф с книгами, глобус, окно с луной
    vgrad(-800, 1500, ['#1a3a2e', '#2a4a3a', '#1e3a2e']);
    for (let i = 0; i < 26; i++) pencil([[-800 + i * 100, -800], [-800 + i * 100, 1500]], { w: 3, col: '#16302a', a: 0.6, pass2: false });
    rect(-800, 900, 2700, 30, { wash: '#5a3a1a', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 20; i++) rect(-800 + i * 140, 930, 130, 380, { wash: '#4a2e18', washA: 1, w: 1.6, col: '#1a0a04' });
    const plants = [(x, y) => buckPlant(x, y + 120, 200, 0, { seed: 24510, sway: 0 }), (x, y) => sorrelLeaf(x, y + 120, 0.9, 0, { key: 24511 }), (x, y) => rhubarb(x, y + 110, 0.4, 0, { key: 24512 }), (x, y) => { pencil(spline([[x, y + 110], [x - 10, y], [x + 6, y - 90]], false, 5), { w: 3, col: '#5a7a3a', pass2: false }); for (let q = 0; q < 6; q++) ell(x + (q % 2 ? 14 : -14), y + 80 - q * 30, 12, 6, { wash: '#6a9a4a', washA: 1, w: 1 }); }];
    for (let i = 0; i < 4; i++) { const x = -420 + i * 200 + (i > 1 ? 1100 : 0), y = 260 + (i % 2) * 60; push(x, y, 0.8); const f = rect(-80, -120, 160, 240, { wash: '#f4ecd4', washA: 1, w: 8, col: '#6a4a2a', key: 24520 + i }); shadeG(f.path, 80, 0, -80, 0, '#b8a880', 0.3); ctx.save(); ctx.clip(f.path); plants[i](0, 0); ctx.restore(); rect(-50, 90, 100, 20, { wash: '#ffffff', washA: 0.8, w: 0.8 }); txt(['Fagopyrum', 'Rumex', 'Rheum', 'Polygonum'][i], 0, 106, 13, { font: 'Hand', col: '#2a2a2a' }); pop(); }
    push(-160, 1300, 1); const bc = rect(-220, -1300, 440, 1300, { wash: '#5a3418', washA: 1, w: 3, col: '#1a0a04', key: 24530 }); shadeG(bc.path, 220, 0, -220, 0, '#1a0a04', 0.4);
    for (let s = 0; s < 7; s++) { const y = -1260 + s * 180; rect(-200, y + 160, 400, 16, { wash: '#7a4a24', washA: 1, w: 1.4 }); let x = -190; const r = rng(24531 + s); while (x < 180) { const w = 16 + r() * 18, h = 110 + r() * 40; rect(x, y + 160 - h, w, h, { wash: ['#8a2a2a', '#2a4a6a', '#5a6a2a', '#8a6a2a', '#3a2a4a'][Math.floor(r() * 5)], washA: 1, w: 1, col: '#1a0a04' }); pencil([[x + 3, y + 172 - h], [x + w - 3, y + 172 - h]], { w: 1.4, col: '#e8c860', a: 0.7, pass2: false }); x += w + 2; } } pop();
    push(1180, 240, 1); const wf = rect(-180, -300, 360, 480, { wash: '#1a2a4a', washA: 1, w: 12, col: '#3a2a1a', key: 24540 }); ctx.save(); ctx.clip(wf.path); vgrad(-300, 180, ['#0a1430', '#1a2a50', '#2a3a5a']); ell(60, -170, 46, 46, { wash: '#f4f0d8', washA: 1, line: false }); glow(60, -170, 120, 'rgba(220,230,255,1)', 0.3); for (let i = 0; i < 5; i++) sil([[-200 + i * 90, 180], [-170 + i * 90, 40 - (i % 2) * 40], [-130 + i * 90, 180]], '#0a1a14', 1); motes(10, [-180, -300, 180, 0], '#ffffff', t, 24541, { sp: 0, sz: 2, a: 0.8, tw: 1 }); ctx.restore(); pencil([[0, -300], [0, 180]], { w: 10, col: '#3a2a1a' }); pencil([[-180, -60], [180, -60]], { w: 10, col: '#3a2a1a' }); pop();
    push(1380, 900, 1); pencil([[0, 0], [0, -120]], { w: 8, col: '#6a4a2a', pass2: false }); const gl = ell(0, -200, 90, 90, { wash: '#c8b888', washA: 1, w: 2.4, col: '#3a2a1a', key: 24542 }); shadeG(gl.path, 90, -200, -90, -200, '#6a5a3a', 0.45); for (let i = 0; i < 3; i++) blob([[-60 + i * 30, -260 + i * 30], [-20 + i * 30, -240 + i * 30], [-30 + i * 30, -200 + i * 30], [-70 + i * 30, -220 + i * 30]], { wash: '#6a8a5a', washA: 0.8, line: false }); pencil(spline(ellPts(0, -200, 100, 100, 0.3, 0, 20), false, 3), { w: 5, col: '#c8a040', pass2: false }); pop();
  }
  function board(t) {                                                    // грифельная доска: «ЗЛАКИ?» зачёркнуто, мелом древо «ГРЕЧИШНЫЕ», «BUCK ✓»
    push(730, 640, 0.75); const b = rect(-360, -260, 720, 440, { wash: '#2a3430', washA: 1, w: 14, col: '#6a4a2a', key: 24550 }); shadeG(b.path, 360, 0, -360, 0, '#0a1410', 0.4); for (let i = 0; i < 6; i++) pencil([[-340 + i * 120, -240], [-300 + i * 120, 160]], { w: 14, col: '#f4f4f0', a: 0.04, pass2: false });
    txt('ЗЛАКИ?', -210, -170, 44, { font: 'Hand', col: '#f4f4ec' }); pencil([[-320, -150], [-250, -200], [-200, -150], [-160, -190]], { w: 3, col: '#e8d860', a: 0.8, pass2: false });
    if (t > EV.bt_q) { const k = clamp((t - EV.bt_q) / 0.35); pencil([[-320, -180], [-320 + k * 240, -186 + k * 10]], { w: 7, col: '#f87070', pass2: false }); }
    if (t > EV.bt_fam - 0.1) { const k = clamp((t - EV.bt_fam + 0.1) / 1.0); txt('ГРЕЧИШНЫЕ', 120, -170, 46, { font: 'Hand', col: '#f4f4ec', reveal: clamp(k * 2) });
      const leaves = [[-250, 40, 'гречиха'], [-50, 40, 'щавель'], [150, 40, 'ревень'], [300, -40, 'горец']]; leaves.forEach(([x, y, n], i) => { const kk = clamp(k * 1.6 - i * 0.2); if (kk <= 0) return; pencil([[120, -140], [120 + (x - 120) * kk, -140 + (y + 20) * kk]], { w: 4, col: '#f4f4ec', pass2: false }); if (kk > 0.9) { txt(n, x, y + 60, 32, { font: 'Hand', col: i === 1 || i === 2 ? (t > (i === 1 ? EV.bt_sorrel : EV.bt_rhub - 0.4) ? '#a8f080' : '#f4f4ec') : i === 0 ? '#f8d860' : '#f4f4ec' }); ell(x, y + 50, 70, 30, { wash: 'rgba(0,0,0,0)', washA: 0, w: 2, col: '#f4f4ec', a: 0.5 }); } }); }
    if (t > EV.bt_right) { const k = popK(t, EV.bt_right, 0.35); push(270, 120, k); txt('BUCK ✓', 0, 0, 40, { font: 'Hand', col: '#f8d860' }); pop(); }
    rect(-360, 180, 720, 20, { wash: '#6a4a2a', washA: 1, w: 2 }); for (let i = 0; i < 3; i++) rect(-300 + i * 40, 168, 26, 10, { wash: '#f4f4ec', washA: 1, w: 0.8 }); pop();
  }
  function assistant(t) {                                                // ассистентка у шкафа с ящичками «SEMINA», банки с семенами
    push(1020, 1300, 1); const cb = rect(-180, -520, 360, 520, { wash: '#6a4224', washA: 1, w: 2.4, col: '#1a0a04', key: 24560 }); shadeG(cb.path, 180, 0, -180, 0, '#1a0a04', 0.4); txt('SEMINA', 0, -486, 26, { font: 'Osw', col: '#e8c860' });
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) { const op = r === 1 && c === 2 && t > EV.bt_nut - 0.5 ? 40 : 0; rect(-160 + c * 82, -450 + r * 100 + op * 0, 76, 90, { wash: '#7a5030', washA: 1, w: 1.4, col: '#1a0a04' }); rect(-140 + c * 82, -420 + r * 100, 36, 18, { wash: '#f4ecd0', washA: 1, w: 0.8 }); nb(-102 + c * 82 + 0, -380 + r * 100, 5, '#c8a040'); }
    for (let i = 0; i < 4; i++) { const x = -140 + i * 90; const j = rect(x - 30, -620, 60, 90, { wash: '#d8e8e0', washA: 0.45, w: 1.6, col: '#3a4a40' }); rect(x - 30, -580, 60, 50, { wash: ['#8a4a1e', '#c8a040', '#3a2a20', '#b8b878'][i], washA: 1, line: false }); rect(x - 34, -636, 68, 18, { wash: '#6a4a2a', washA: 1, w: 1 }); rect(x - 24, -560, 48, 22, { wash: '#f4ecd0', washA: 1, w: 0.8 }); } pop();
    human(860, 1300, 1.04, t, { body: '#5a3a5a', legs: '#2a2a3a', long: 1, hair: '#6a3a1a', face: t > EV.bt_rhub - 0.3 ? 'grin' : t > EV.bt_fam ? 'shock' : 'calm', armL: 'hold', armR: t > EV.bt_fam ? 'point' : 'hold', seed: 24561, flip: -1, look: -0.6, trim: '#e8e0d0' });
    push(860, 1300 - 300 * 1.04, 1.04); for (const sd of [-1, 1]) ell(sd * 14, -10, 11, 9, { wash: '#e8f4ff', washA: 0.4, w: 2, col: '#2a2a2a' }); pencil([[-3, -10], [3, -10]], { w: 2, col: '#2a2a2a', pass2: false }); pop();
  }
  function desk(t) {                                                     // стол: папка гербария, микроскоп, лупа, чернильница, книги, банка ревеня, пучок щавеля, лампа
    const tb = rect(-400, 1440, 2000, 600, { wash: '#5a3418', washA: 1, w: 3, col: '#1a0a04', key: 24570 }); shadeG(tb.path, 0, 1440, 0, 1850, '#1a0a04', 0.5); for (let i = 0; i < 6; i++) pencil([[-400, 1470 + i * 56], [1600, 1474 + i * 56]], { w: 3, col: '#2a1408', a: 0.45, pass2: false });
    const gl = rect(-100, 1446, 1300, 220, { wash: '#1e4a34', washA: 0.95, w: 1.6, col: '#0a2014' }); shadeG(gl.path, 0, 1446, 0, 1666, '#0a2014', 0.35); rect(-400, 1430, 2000, 16, { wash: '#7a4a24', washA: 1, w: 2, col: '#1a0a04' });
    push(1080, 1470, 1); pencil([[0, 0], [0, -280]], { w: 8, col: '#c8a040', pass2: false }); pencil([[0, -280], [-70, -340]], { w: 7, col: '#c8a040', pass2: false }); const ls = blob([[-170, -330], [-120, -400], [-20, -400], [30, -330]], { wash: '#2a7a4a', washA: 1, w: 2.2, col: '#0a2a14', key: 24571 }); shadeG(ls.path, 0, -400, 0, -330, '#0a3a1a', 0.4); ell(-70, -330, 90, 12, { wash: '#fff2c0', washA: 1, line: false }); glow(-70, -320, 180, 'rgba(255,220,150,1)', 0.32); ell(0, 0, 56, 14, { wash: '#c8a040', washA: 1, w: 1.6 }); pop();
    lightPool(820, 1560, 460, 110, 'rgba(255,214,150,1)', 0.4);
    push(760, 1560, 1); const pf = rect(-230, -40, 460, 120, { wash: '#c8a868', washA: 1, w: 2, col: '#4a3010' }); rect(-220, -34, 216, 108, { wash: '#f4ecd4', washA: 1, w: 1.4, col: '#8a7a5a' }); rect(4, -34, 216, 108, { wash: '#f4ecd4', washA: 1, w: 1.4, col: '#8a7a5a' }); push(-110, 70, 0.5, -1.4); buckPlant(0, 0, 260, 0, { seed: 24572, sway: 0 }); pop(); txt('Fagopyrum esculentum', 110, 50, 16, { font: 'Hand', col: '#2a2a2a' }); txt('сем. Polygonaceae', 110, 22, 18, { font: 'Hand', col: '#a8241e' }); pop();
    push(430, 1520, 1); const mc = rect(-30, -220, 60, 160, { wash: '#c8a040', washA: 1, w: 2, col: '#5a3a08' }); metalG(mc.path, -10, -160, 120, '#fff0b0', '#c8a040', '#6a4a08', 0.7); pencil([[0, -220], [-30, -280]], { w: 22, col: '#b8903a', pass2: false }); rect(-70, -60, 140, 20, { wash: '#3a3640', washA: 1, w: 1.6 }); ell(0, 0, 80, 16, { wash: '#3a3640', washA: 1, w: 2 }); ell(0, -72, 40, 8, { wash: '#c8c8d0', washA: 1, w: 1.2 }); pop();
    push(1240, 1560, 1); const jr = rect(-46, -200, 92, 200, { wash: '#d8e8e0', washA: 0.4, w: 2, col: '#3a4a40', key: 24573 }); for (let i = 0; i < 4; i++) { pencil([[-24 + i * 16, -10], [-34 + i * 20, -300 - (i % 2) * 40]], { w: 12, col: GR.rhubarb, pass2: false }); } for (let i = 0; i < 3; i++) { push(-30 + i * 30, -320 - (i % 2) * 40, 0.4, -0.6 + i * 0.5); const lf = blob([[0, 10], [-80, -10], [-100, -70], [-60, -130], [0, -150], [60, -130], [100, -70], [80, -10]], { wash: '#5a9a34', washA: 1, w: 2, col: '#1a3a10' }); pop(); } pencil([[-40, -190], [-36, -20]], { w: 6, col: '#ffffff', a: 0.4, pass2: false }); pop();
    push(1180, 1640, 1); for (let i = 0; i < 4; i++) rect(-90 + i * 4, -30 - i * 34, 180, 32, { wash: ['#6a2a2a', '#2a4a6a', '#5a5a2a', '#3a2a4a'][i], washA: 1, w: 1.4, col: '#1a0a04' }); pop();
    push(560, 1620, 1); ell(0, 0, 30, 10, { wash: '#1a1a24', washA: 1, w: 1.6 }); rect(-24, -40, 48, 40, { wash: '#1a1a24', washA: 1, w: 1.6 }); pencil([[0, -40], [40, -150]], { w: 3, col: '#f4f0e0', pass2: false }); for (let i = 0; i < 6; i++) pencil([[10 + i * 5, -70 - i * 14], [26 + i * 5, -80 - i * 14]], { w: 2, col: '#f4f0e0', pass2: false }); pop();
    if (t < EV.bt_sorrel) for (let i = 0; i < 5; i++) sorrelLeaf(120 + i * 22, 1600, 0.55, -0.9 + i * 0.12, { key: 24575 + i });
    castShadow(760, 1600, 400, 100, 0.8, 0.22); castShadow(430, 1520, 120, 100, 0.8, 0.22); castShadow(1240, 1560, 120, 100, -0.6, 0.2);
  }
  function lens(t) {                                                     // круг-вставка «под лупой»: зерно и буковый орешек рядом
    if (t < EV.bt_nut - 0.1 || t > EV.bt_gag + 0.1) return; const k = popK(t, EV.bt_nut, 0.45); push(735, 800, k * 0.85);
    ell(0, 0, 230, 230, { wash: '#f4ecd4', washA: 1, w: 12, col: '#c8a040' }); ell(0, 0, 214, 214, { wash: '#fffaf0', washA: 1, line: false }); grainB(-90, 20, 3.6, -0.1, { key: 24580 }); beechnut(90, 10, 3, 0.15, { key: 24581 });
    txt('гречка', -90, 160, 28, { font: 'Hand', col: '#5a2a08' }); txt('бук', 90, 160, 28, { font: 'Hand', col: '#5a2a08' }); txt('=', 0, 30, 60, { font: 'Osw', col: '#a8241e' }); txt('ОРЕШЕК', 0, -150, 30, { font: 'Osw', col: '#a8241e' });
    pencil([[-150, -180], [-60, -210]], { w: 10, col: '#ffffff', a: 0.6, pass2: false }); pencil(spline([[180, 150], [260, 230], [300, 300]], false, 4), { w: 30, col: '#6a3a1a', pass2: false }); pop();
  }
  function front(t) {                                                    // передний план: свисающий папоротник в горшке слева сверху, край книги справа, пыль в луче
    push(420, 620, 1); for (let i = 0; i < 7; i++) { const a = -0.4 + i * 0.22 + Math.sin(t * 0.6 + i) * 0.03; pencil(spline([[0, 0], [Math.sin(a) * 120, 100], [Math.sin(a) * 200, 260]], false, 6), { w: 3, col: '#2a5a2a', pass2: false }); for (let q = 1; q < 9; q++) { const px = Math.sin(a) * (q * 24), py = q * 30; pencil([[px, py], [px - 20, py + 14]], { w: 3, col: '#3a7a3a', pass2: false }); pencil([[px, py], [px + 20, py + 14]], { w: 3, col: '#3a7a3a', pass2: false }); } } const pt = blob([[-60, -60], [60, -60], [50, 10], [-50, 10]], { wash: '#a8583a', washA: 1, w: 2, col: '#3a1008' }); pop();
    push(980, 1900, 1, -0.1); const bk = rect(-160, -120, 320, 120, { wash: '#6a2a2a', washA: 1, w: 2.4, col: '#1a0a04' }); rect(-150, -126, 300, 14, { wash: '#f4ecd4', washA: 1, w: 1 }); txt('FLORA', 0, -50, 30, { font: 'Osw', col: '#e8c860' }); pop();
  }
  WORLD.botany = (t, u, cat) => {
    lay(10, () => { room(t); });
    lay(3, () => { assistant(t); castShadow(860, 1300, 120, 160, -0.6, 0.25); });
    lay(2, () => { board(t); });
    lay(1, () => { cat(); desk(t); lens(t); });
    lay(0.75, () => { front(t); motes(14, [400, 800, 1000, 1500], '#ffe8b0', t, 24590, { sp: 4, sz: 3, a: 0.4, wob: 6 }); shaft(1010, 1150, 200, 600, 0.3, 'rgba(255,220,150,1)', 0.1); moodDark(760, 1250, 480, 1400, '#06140e', 0.45); });
  };
  DIR.botany = {
    outfit: 'botanistA', light: { side: 1, rim: '#ffd890' }, grade: ['#a8d0a0', 0.06],
    act: () => [[S0.botany, 'suspicious'], [EV.bt_ans, 'talk'], [EV.bt_fam, 'proud'], [EV.bt_sorrel, 'awe'], [EV.bt_rhub - 0.4, 'shock'], [EV.bt_nut, 'talk'], [EV.bt_right, 'smug'], [EV.bt_gag + 0.15, 'annoyed']],
    pose: (t, u, b) => { const so = t > EV.bt_sorrel - 0.1 && t < EV.bt_rhub - 0.4, rh = t > EV.bt_rhub - 0.45 && t < EV.bt_nut, lens = t > EV.bt_nut - 0.1 && t < EV.bt_gag, gag = t > EV.bt_gag;
      return Object.assign(b, { x: 640, y: 1590, s: 1.16, flip: false, look: t < EV.bt_fam ? [-0.3, -0.5] : so ? [0.5, 0.6] : lens ? [-0.1, -0.4] : [0, 0],
        hand: gag ? [70, -260] : so ? [200, -260] : lens ? [150, -330] : [150, -220], handF: rh ? [-200, -360] : [-140, -200], prop: gag ? 'sorrelBiteP' : so ? 'sorrelP' : lens ? 'magnGP' : undefined, propAng: gag ? -0.6 : 0, squint: gag, tilt: gag ? 0.05 : 0, sweat: rh }); },
    afterCat: (t, u, P) => { if (t > EV.bt_rhub - 0.45 && t < EV.bt_nut) { const hx = P.x - 200 * P.s, hy = P.y - 360 * P.s; for (let i = 0; i < 4; i++) pencil([[hx - 20 + i * 12, hy + 20], [hx - 30 + i * 16, hy - 150 - (i % 2) * 30]], { w: 10, col: GR.rhubarb, pass2: false }); push(hx - 20, hy - 170, 0.5); const lf = blob([[0, 10], [-80, -10], [-100, -70], [-60, -130], [0, -150], [60, -130], [100, -70], [80, -10]], { wash: '#5a9a34', washA: 1, w: 2, col: '#1a3a10' }); pop(); bubbleTag('РОДНЯ!', hx + 40, hy - 260, t, EV.bt_rhub - 0.3, '#3a8a3a', 40, -0.05); }
      if (t > EV.bt_gag + 0.2) { push(P.x + 60 * P.s, P.y - 470 * P.s, popK(t, EV.bt_gag + 0.2, 0.3)); txt('КИСЛО!', 0, 0, 40, { font: 'Osw', col: '#5a8a2a' }); pop(); } },
    cam: () => [[S0.botany, 600, 1080, 0.24], [EV.bt_q, 560, 900, 0.25], [EV.bt_ans, 620, 1110, 0.28], [EV.bt_fam, 580, 940, 0.24], [EV.bt_sorrel, 640, 1130, 0.3], [EV.bt_rhub - 0.4, 620, 1100, 0.31], [EV.bt_nut, 620, 1060, 0.28], [EV.bt_right, 620, 1080, 0.28], [EV.bt_gag, 640, 1130, 0.32], [S1.botany, 640, 1130, 0.33]]
  };
  TRANS_IN.botany = { a: 0.12, b: 0.55, runA: 1, fx(k, t, A, B) {      // страница гербария переворачивается справа налево
    const e = sm(k), x = lerp(1080, -40, e); drawBuf(B, 1, 540, 960);
    scr(() => { ctx.save(); const P = new Path2D(); P.rect(0, 0, x, 1920); ctx.clip(P); ctx.drawImage(A, 0, 0); ctx.restore(); const w = Math.sin(e * 3.14) * 220;
      const pg = poly([[x, 0], [x - w, 40], [x - w, 1880], [x, 1920]], { wash: '#f4ecd4', washA: 1, w: 3, col: '#8a7a5a' }); shadeG(pg.path, x, 0, x - w, 0, '#a89a78', 0.5); pencil([[x - w * 0.5, 600], [x - w * 0.6, 1300]], { w: 3, col: '#5a8a3a', a: 0.6, pass2: false }); });
  } };
})();
