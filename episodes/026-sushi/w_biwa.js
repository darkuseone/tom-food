/* 026 — `biwa`: «Такие суши в Японии бродят до сих пор — до трёх лет. Запах? Я, кот, сбегаю!» Озеро Бива: серо-голубое утро, в воде —
   красные тории святилища, лодки рыбаков, тростник, горы Хира в облаках. Ближе — открытый амбар-кура из тёмных досок с белой штукатуркой:
   ряды кадок фунадзуси под камнями-гнётами, на кадках бумажные бирки с годами, сети и связки рыбы под стрехой, фонарь, старый рыбак с трубкой
   и его внучка с корзиной. Том (рыбак в зелёной хаппи и резиновых сапогах) у главной кадки. По словам: «бродят» — кадка пыхтит пузырями
   из-под крышки; «трёх лет.» — на кадках вспыхивают бирки 1·2·3 года; «Запах?» — Том снимает крышку — зелёное облако; «Я, кот,» — шерсть
   дыбом; «сбегаю!» — Том пятится и удирает вправо, шляпа слетает (пауза-гэг), рыбак довольно жуёт ломтик. Главный свет — холодное утро с
   озера слева; второй — тёплый фонарь в амбаре. Переход В сцену: круглая крышка кадки проезжает через кадр и открывает амбар. */
(() => {
  EV.bw_ferm = wtw('s2', 'бродят');
  EV.bw_years = wtw('s2', 'трёх');
  EV.bw_smell = wtw('s2', 'Запах?');
  EV.bw_cat = wtw('s2', 'кот,');
  EV.bw_run = wtw('s2', 'сбегаю!');
  SHAKES.push([EV.bw_smell + 0.15, 0.2, 7]);
  KEYW.push('Запах?');
  const lid = t => sm(clamp((t - EV.bw_smell + 0.1) / 0.35));
  const run = t => sm(clamp((t - EV.bw_run) / 0.9));

  function lake(t) {                                                      // небо, горы Хира, озеро, тории в воде, лодки
    vgrad(-500, 900, ['#8a9ab0', '#b8c4cc', '#d8dcd8']);
    for (let i = 0; i < 4; i++) ell(((t * 10 + i * 520) % 2200) - 500, 60 + i * 60, 300, 50, { wash: '#eef0f0', washA: 0.6, line: false });
    sil([[-500, 520], [-200, 300], [100, 380], [400, 240], [700, 360], [1000, 260], [1400, 400], [1700, 520]], '#5a6a7a', 0.8); sil([[-500, 560], [0, 440], [500, 500], [900, 430], [1700, 560]], '#6a7a84', 0.8);
    rect(-600, 540, 2400, 600, { wash: '#8aa0b0', washA: 1, line: false }); for (let i = 0; i < 16; i++) { const y = 560 + i * 26, x = ((t * 20 + i * 140) % 1800) - 400; pencil([[x, y], [x + 140 + i * 8, y]], { w: 2, col: '#e8f0f4', a: 0.4, pass2: false }); }
    push(620, 700, 0.8); for (const x of [-120, 120]) { rect(x - 14, -300, 28, 320, { wash: '#d8402a', washA: 1, w: 2, col: '#4a0a04' }); ell(x, 30, 40, 8, { wash: '#d8402a', washA: 0.3, line: false }); }
    blob([[-200, -300], [-180, -326], [0, -334], [180, -326], [200, -300], [0, -310]], { wash: '#1a1a1a', washA: 1, w: 2 }); rect(-160, -290, 320, 22, { wash: '#d8402a', washA: 1, w: 2, col: '#4a0a04' }); rect(-14, -290, 28, 60, { wash: '#d8402a', washA: 1, w: 1.6 });
    for (let i = 0; i < 4; i++) pencil([[-140, 40 + i * 14], [140, 40 + i * 14]], { w: 3, col: '#d8402a', a: 0.25 - i * 0.05, pass2: false }); pop();
    for (const [x, y, s] of [[200, 760, 0.7], [1050, 700, 0.5]]) { const bob = Math.sin(t * 1.6 + x) * 6; push(x + Math.sin(t * 0.3 + x) * 30, y + bob, s); blob([[-120, 0], [-100, 30], [100, 30], [130, -4]], { wash: '#6a4a2a', washA: 1, w: 2, col: '#2a1408' }); human(0, 0, 0.6, t, { body: '#3a4a5a', face: 'calm', armL: 'swing', armR: 'hold', seed: 26800 + x }); jpHat(0, 0, 0.6, 'conical'); pencil([[30, -120], [200, -260]], { w: 2, col: '#4a3a2a', pass2: false }); pop(); }
  }
  function kura(t) {                                                      // амбар: стены, стреха, полки с кадками, сети, связки рыбы, фонарь, рыбак с внучкой
    push(1000, 0, 1); const wl = rect(-700, -400, 900, 1900, { wash: '#3a2a1e', washA: 1, w: 3, col: '#1a0e08', key: 26810 }); for (let i = 0; i < 7; i++) pencil([[-700 + i * 130, -400], [-700 + i * 130, 1500]], { w: 3, col: '#1a0e08', pass2: false }); hatch(wl.path, wl.bb, { gap: 12, a: 0.15, col: '#0a0604', ang: 1.5, key: 26811 });
    const plaster = rect(-700, -400, 900, 300, { wash: '#e8e0d0', washA: 1, w: 2, col: '#5a4a3a' }); shadeG(plaster.path, 0, -400, 0, -100, '#a89c88', 0.35);
    poly([[-760, -440], [400, -300], [400, -250], [-760, -380]], { wash: '#2a2a30', washA: 1, w: 2.4, col: '#0a0a10' }); for (let i = 0; i < 12; i++) ell(-700 + i * 98, -398 + i * 11, 40, 14, { wash: '#3a3a44', washA: 1, w: 1.4, col: '#0a0a10' });
    for (let i = 0; i < 9; i++) { const x = -400 + i * 60; pencil([[x, -270 + i * 7], [x, -140 + (i % 3) * 20]], { w: 2, col: '#8a7a5a', pass2: false }); fish(x, -120 + (i % 3) * 20, 0.5, 1.57, { key: 26812 + i }); }
    push(-80, 120, 1); for (let r2 = 0; r2 < 3; r2++) { rect(-560, r2 * 240 - 10, 560, 18, { wash: '#6a4a2a', washA: 1, w: 1.6, col: '#2a1408' }); for (let i = 0; i < 4; i++) funaTaru(-500 + i * 140, r2 * 240 - 10, 0.36, t, { key: 26820 + r2 * 10 + i }); } pop();
    push(-180, 60, 1); for (let i = 0; i < 10; i++) pencil([[-200 + i * 40, -140], [-220 + i * 44, 120]], { w: 1.2, col: '#a89070', a: 0.6, pass2: false }); for (let i = 0; i < 6; i++) pencil([[-210, -120 + i * 44], [200, -120 + i * 44]], { w: 1.2, col: '#a89070', a: 0.6, pass2: false }); pop();
    chochin(60, -150, 0.9, t, { col: '#f0e0b0', label: '鮒', key: 26840, glowCol: 'rgba(255,190,110,1)' });
    pop();
  }
  function folk(t) {                                                      // старый рыбак с трубкой и внучка — реагируют на запах и бегство
    const sm1 = t > EV.bw_smell;
    human(230, 1300, 1.1, t, { body: '#4a5a4a', legs: '#2a2a2a', hair: '#c8c8c8', beard: 'short', face: t > EV.bw_run ? 'grin' : sm1 ? 'smile' : 'calm', armL: 'hold', armR: t > EV.bw_run ? 'up' : 'hold', look: 0.6, seed: 26850 }); jpHat(230, 1300, 1.1, 'hachi', '#3a4a7a');
    push(260, 900, 1); pencil([[0, 0], [50, -20]], { w: 4, col: '#3a2a1a', pass2: false }); ell(54, -24, 10, 7, { wash: '#3a2a1a', washA: 1, line: false }); for (let i = 0; i < 3; i++) { const ph = (t * 0.6 + i * 0.33) % 1; ell(60 + Math.sin(t * 2 + i) * 10, -40 - ph * 120, 8 + ph * 14, 6 + ph * 10, { wash: '#e8e8e0', washA: 0.5 * (1 - ph), line: false }); } pop();
    if (t > EV.bw_run + 0.4) { push(300, 1020, 1); nigiri(0, 0, 0.18, t, { kind: 'egg', key: 26851 }); pop(); }
    human(90, 1330, 0.8, t, { body: '#c8443a', legs: '#2a2a3a', hair: '#1a1410', face: sm1 ? 'shock' : 'smile', armL: sm1 ? 'up' : 'hold', armR: sm1 ? 'up' : 'hold', look: 0.6, seed: 26852, prop: sm1 ? undefined : 'stick' });
  }
  function barrel(t) {                                                    // главная кадка перед Томом: пузыри брожения, бирки лет, крышка
    const L = lid(t); funaTaru(380, 1450, 0.95, t, { open: L, key: 26860 });
    if (t > EV.bw_ferm && t < EV.bw_smell) for (let i = 0; i < 6; i++) { const ph = (t * 1.4 + i / 6) % 1; ell(280 + i * 40, 1160 - ph * 50, 6 + ph * 8, 6 + ph * 8, { wash: '#d8e8a0', washA: 0.8 * (1 - ph), w: 1, col: '#6a8a2a' }); }
    if (t > EV.bw_years) for (let i = 0; i < 3; i++) { const k = popK(t, EV.bw_years + i * 0.2, 0.35); if (k <= 0) continue; push(300 + i * 120, 1310 - (i % 2) * 14, k, -0.08 + i * 0.08); rect(-44, -56, 88, 112, { wash: '#f8f0dc', washA: 1, w: 2, col: '#6a5a3a' }); txt(String(i + 1), 0, 6, 54, { font: 'Osw', col: '#c8241e' }); txt(i ? 'ГОДА' : 'ГОД', 0, 42, 22, { font: 'Osw', col: '#3a2a1a' }); pop(); }
    if (t > EV.bw_smell + 0.2) { push(500, 900, popK(t, EV.bw_smell + 0.2, 0.35)); txt('ФУ-У!', 0, 0, 74, { font: 'Osw', col: '#6a9a1a', rot: -0.1 }); pop(); }
    castShadow(380, 1455, 260, 90, 0.6, 0.25);
  }
  function floor(t) { const f = rect(-600, 1440, 2400, 600, { wash: '#6a5a44', washA: 1, w: 2, col: '#2a1e10', key: 26870 }); shadeG(f.path, 0, 1440, 0, 1900, '#3a2a1a', 0.4); for (let i = 0; i < 12; i++) pencil([[-600 + i * 220, 1440], [-700 + i * 260, 1900]], { w: 1.6, col: '#4a3a24', a: 0.5, pass2: false }); for (let i = 0; i < 4; i++) ell(-100 + i * 300, 1500 + (i % 2) * 40, 50, 10, { wash: '#8aa0b0', washA: 0.4, line: false }); }
  function front(t) {                                                     // передний план: тростник у воды слева, верёвочные сети сверху, камень-гнёт
    push(-120, 1950, 1.4); for (let i = 0; i < 10; i++) { const sw = Math.sin(t * 1.3 + i * 0.7) * 12; pencil(spline([[i * 18, 0], [i * 16 + sw, -400], [i * 14 + sw * 2, -720 + (i % 3) * 60]], false, 6), { w: 4, col: '#8a8a4a', pass2: false }); ell(i * 14 + sw * 2, -720 + (i % 3) * 60, 7, 30, { wash: '#6a4a2a', washA: 1, w: 1 }); } pop();
    push(1100, -60, 1.3); for (let i = 0; i < 8; i++) pencil(spline([[-200 + i * 50, 0], [-180 + i * 50, 200 + Math.sin(t + i) * 10], [-200 + i * 50, 380]], false, 5), { w: 1.6, col: '#5a4a3a', pass2: false }); for (let i = 0; i < 6; i++) pencil(spline([[-220, 60 + i * 60], [0, 90 + i * 60], [200, 60 + i * 60]], false, 5), { w: 1.6, col: '#5a4a3a', pass2: false }); for (let i = 0; i < 4; i++) ell(-150 + i * 100, 380, 14, 14, { wash: '#e8d8a8', washA: 1, w: 1.4 }); pop();
  }
  WORLD.biwa = (t, u, cat) => {
    lay(20, () => { lake(t); haze('#d8e0e8', 0.08); });
    lay(4, () => { kura(t); });
    lay(2.6, () => { folk(t); lightPool(100, 1310, 400, 90, 'rgba(255,200,130,1)', 0.25); });
    lay(1, () => { floor(t); shaft(-200, 200, 340, 1500, -0.5, 'rgba(220,235,255,1)', 0.14); lightPool(500, 1470, 600, 110, 'rgba(230,240,255,1)', 0.3); barrel(t); cat(); });
    lay(0.65, () => { front(t); motes(16, [-200, 300, 1300, 1500], '#e8f0f0', t, 26890, { sp: 3, sz: 3, a: 0.35, wob: 4 }); moodDark(620, 1000, 520, 1500, '#0a1420', 0.45); });
  };
  DIR.biwa = {
    outfit: 'mktB', light: { side: -1, rim: '#d8e8ff' }, grade: ['#a8c0d0', 0.06],
    act: () => [[S0.biwa, 'talk'], [EV.bw_ferm, 'grin'], [EV.bw_years, 'awe'], [EV.bw_smell, 'suspicious'], [EV.bw_smell + 0.35, 'shock'], [EV.bw_cat, 'scared'], [EV.bw_run + 0.3, 'laugh']],
    pose: (t, u, b) => { const R = run(t), L = lid(t);
      return Object.assign(b, { x: 660 + R * 260, y: 1600 - Math.abs(Math.sin(R * 9)) * 30 * R, s: 1.15, flip: R > 0.05 ? false : true, look: t > EV.bw_smell ? [-0.8, 0.2] : [-0.5, 0.4],
        hand: t < EV.bw_smell - 0.1 ? [180, -220] : R > 0 ? [130, -470] : [220, -330 - L * 60], handF: R > 0 ? [-130, -470] : [-80, -230],
        walk: R > 0 && R < 1 ? t * 12 : undefined, sweat: t > EV.bw_cat, frost: false, tailUp: t > EV.bw_cat, noHat: t > EV.bw_run + 0.25, squash: b.squash + (t > EV.bw_cat && t < EV.bw_cat + 0.2 ? -0.08 : 0) }); },
    afterCat: (t, u, P) => { if (t > EV.bw_run + 0.25) { const q = clamp((t - EV.bw_run - 0.25) / 0.8); push(P.x - 120 - q * 160, P.y - 520 + q * q * 380, 0.8, q * 5); jpHat(0, 0, 1, 'hachi', '#f4f0e8'); pop(); } },
    cam: () => [[S0.biwa, 560, 1000, 0.22], [EV.bw_ferm, 560, 1080, 0.27], [EV.bw_smell, 560, 1120, 0.3], [EV.bw_run, 620, 1120, 0.28], [S1.biwa, 680, 1100, 0.26]]
  };
  // ---------------------------------------------------------------- переход: деревянная крышка кадки проезжает через кадр, за ней — амбар
  TRANS_IN.biwa = { a: 0.25, b: 0.4, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), cx = lerp(1700, -620, e); drawBuf(A, 1, 540, 960);
    scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(cx, -50, 2400, 2100); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore();
      push(cx, 960, 1); const L = ell(0, 0, 620, 1100, { wash: '#a87a42', washA: 1, w: 6, col: '#4a2a10', key: 26899 }); hatch(L.path, L.bb, { gap: 22, a: 0.25, col: '#5a3a18', ang: 1.57, key: 26898 }); for (const y of [-500, 500]) rect(-480, y - 30, 960, 60, { wash: '#6a4a24', washA: 1, w: 3 }); pop(); });
  } };
})();
