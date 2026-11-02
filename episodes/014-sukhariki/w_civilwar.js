/* 014 — `civilwar` (ТОМ-МАЛЫШ, раз за ролик): «В Гражданскую войну в США их звали „зуболомами“ и „замками для червей“.» Том-малыш в мундире и кепи
   шагает по гигантской галете на жестяной тарелке солдата 1860-х: под ногами — равнина с кратерами-наколами, трещины, валуны крошек, кристаллы соли;
   впереди — «замок» из обломков галет с башнями, бойницами и флажком; позади, за краем тарелки, — великанский лагерь: кружка-башня с паром, кофейник,
   губная гармошка, ложка, пуговица мундира, огромный костёр в боке, искры-боке. По словам: «США» — на башне поднимается флажок со звёздами;
   «зуболомами» — Том кусает стену замка: «КРАК», звёзды, ценник, отлетает зуб-осколок; «замками для червей» — из бойниц и наколов высовываются червячки
   (один в кепи), ценник «ЗАМОК ДЛЯ ЧЕРВЕЙ»; немая пауза — червяк вылезает из кратера за спиной Тома и стучит его по плечу. Переход В сцену: кадр разламывается
   на квадратные куски галеты с наколами и осыпается. */
(() => {
  EV.cw_usa = wtw('s5', 'США');
  EV.cw_tooth = wtw('s5', '«зуболомами»');
  EV.cw_worm = wtw('s5', '«замками');
  EV.cw_gag = LE('s5');
  SHAKES.push([EV.cw_tooth + 0.15, 0.22, 11]);
  KEYW.push('«зуболомами»', 'червей».');
  const PIN = '#5a4a2a';

  function sky(t) {                                                     // сумерки лагеря, огромный размытый костёр и искры-боке
    vgrad(-700, 1300, ['#1e1e44', '#7a3e5a', '#e08a50']); glow(1080, 900, 900, 'rgba(255,140,50,1)', 0.55); glow(1080, 1000, 400, 'rgba(255,210,120,1)', 0.45);
    for (let i = 0; i < 5; i++) { const f = Math.sin(t * 5 + i) * 40; blob([[880 + i * 90, 1250], [860 + i * 90, 900 - f], [900 + i * 90, 640 - f * 2], [930 + i * 90, 900], [960 + i * 90, 1250]], { wash: i % 2 ? '#ff8a2a' : '#ffc04a', washA: 0.35, line: false }); }
    const r = rng(14650); for (let i = 0; i < 22; i++) { const q = (t * 0.12 + r()) % 1, x = 700 + r() * 700 + Math.sin(t + i) * 40, y = 1200 - q * 1500, R = 10 + r() * 34; ell(x, y, R, R, { wash: '#ffb050', washA: 0.25 * (1 - q), line: false }); }
    for (let i = 0; i < 9; i++) { const x = -300 + i * 130; ell(x, -380 + (i % 3) * 40, 3, 3, { wash: '#fff4d0', washA: 0.8, line: false }); }
  }
  function giants(t) {                                                  // великанский лагерь за краем тарелки: кружка-башня, кофейник, гармошка, ложка, пуговица
    push(120, 1240, 1); const m = rect(-230, -1000, 460, 1000, { wash: '#a8acb4', washA: 1, w: 4, col: '#2a2a2a', key: 14651 }); metalG(m.path, -60, -500, 500, '#e8ecf0', '#9a9ea6', '#3a3e44');
      for (let i = 0; i < 6; i++) ell(-120 + (i % 3) * 110, -820 + Math.floor(i / 3) * 520, 26, 18, { wash: '#6a6e74', washA: 0.5, line: false }); ell(0, -1000, 230, 40, { wash: '#3a2010', washA: 1, w: 3 });
      pencil(spline([[230, -880], [380, -800], [390, -480], [230, -380]], false, 6), { w: 44, col: '#8a8e94' }); txt('U.S.', 0, -560, 70, { font: 'Osw', col: '#4a4e54', a: 0.7 });
      for (let i = 0; i < 3; i++) { const q = (t * 0.35 + i / 3) % 1; pencil(spline([[-120 + i * 120, -1010], [-100 + i * 120 + Math.sin(q * 6 + i) * 60, -1150 - q * 200], [-110 + i * 120, -1300 - q * 400]], false, 6), { w: 40, col: '#ffffff', a: 0.22 * (1 - q), pass2: false }); } pop();
    push(560, 1230, 1); const h = rect(-240, -70, 480, 80, { wash: '#c8a050', washA: 1, w: 3, col: '#5a3a08', key: 14652 }); metalG(h.path, 0, -40, 260, '#ffe8a0', '#c89a3a', '#6a4a10'); for (let i = 0; i < 10; i++) rect(-220 + i * 44, -54, 30, 30, { wash: '#2a1a08', washA: 1, w: 1.2 }); pop();
    push(1180, 1160, 1, -0.5); pencil([[0, 0], [-700, -320]], { w: 36, col: '#9a9ea6' }); ell(40, 20, 120, 70, { wash: '#b8bcc4', washA: 1, w: 3, col: '#3a3e44' }); pop();
    push(860, 1200, 1); const bt = ell(0, 0, 70, 70, { wash: '#c8a050', washA: 1, w: 3, col: '#5a3a08' }); metalG(bt.path, -20, -20, 90, '#ffe8a0', '#c89a3a', '#6a4a10'); txt('★', 0, 16, 56, { col: '#6a4a10' }); pop();
    ell(540, 1270, 1100, 70, { wash: '#8a8e94', washA: 1, w: 3, col: '#2a2a2a' }); ell(540, 1290, 1060, 50, { wash: '#b8bcc4', washA: 1, w: 1.6, col: '#5a5e64' });
  }
  function holeAt(x, y, k) { ell(x, y, 34 * k, 13 * k, { wash: '#3a2a14', washA: 1, w: 1.6, col: PIN }); ell(x, y + 3 * k, 26 * k, 8 * k, { wash: '#1a0e04', washA: 1, line: false }); }
  function worm(x, y, k, t, o = {}) {                                   // червячок: розово-бежевый, сегменты, глазки; o.kepi, o.tap
    const h = (o.h ?? 1) * 70 * k, sw = Math.sin(t * 5 + x) * 8 * k; push(x, y, 1);
    const P = [[-14 * k, 0], [-14 * k + sw * 0.5, -h * 0.5], [-12 * k + sw, -h], [12 * k + sw, -h], [14 * k + sw * 0.5, -h * 0.5], [14 * k, 0]]; shape(spline(P, true, 6), { wash: '#f4a8a0', washA: 1, w: 2.4, col: '#8a3a3a' });
    for (let i = 1; i < 4; i++) pencil([[-13 * k + sw * i / 4, -h * i / 4], [13 * k + sw * i / 4, -h * i / 4]], { w: 1.4, col: '#b88070', pass2: false });
    for (const sd of [-1, 1]) { ell(sw + sd * 6 * k, -h + 10 * k, 5 * k, 6 * k, { wash: '#ffffff', washA: 1, w: 1 }); ell(sw + sd * 6 * k + 1.5 * k, -h + 11 * k, 2.4 * k, 2.4 * k, { wash: '#1a1a1a', washA: 1, line: false }); }
    if (o.kepi) { push(sw, -h - 4 * k, k); shape([[-16, 0], [-12, -18], [14, -14], [16, 0]], { wash: '#2a3a6a', washA: 1, w: 1.4 }); rect(-16, -2, 34, 5, { wash: '#1a1a1a', washA: 1, line: false }); pop(); }
    pop();
  }
  function plain(t) {                                                   // равнина галеты: перспектива, наколы-кратеры, трещины, валуны крошек, соль
    const f = shape([[-300, 1300], [1400, 1300], [1700, 2200], [-600, 2200]], { wash: SK.tack, washA: 1, w: 3, col: PIN, key: 14660 }); shadeG(f.path, 540, 1300, 540, 2100, SK.tackD, 0.4); hatch(f.path, f.bb, { gap: 12, a: 0.12, col: SK.tackD, ang: 0.4 });
    for (let j = 0; j < 4; j++) { const y = 1360 + j * j * 60 + j * 90, k = 0.7 + j * 0.45; for (let i = 0; i < 5; i++) { const x = 540 + (i - 2) * (280 + j * 120); if (!(j === 1 && i === 3)) holeAt(x, y, k); } }
    for (const C of [[[100, 1500], [160, 1560], [140, 1640], [220, 1720]], [[900, 1700], [960, 1660], [1040, 1700]]]) pencil(C, { w: 3, col: '#6a4a24', pass2: false });
    const r = rng(14661); for (let i = 0; i < 26; i++) { const x = -100 + r() * 1300, y = 1330 + r() * 600, k = 0.4 + (y - 1300) / 500; if (Math.abs(x - 500) < 260 && y > 1450 && y < 1760) continue; blob([[x - 14 * k, y], [x - 10 * k, y - 12 * k], [x + 6 * k, y - 14 * k], [x + 14 * k, y]], { wash: r() < 0.3 ? '#f8f8f4' : SK.tackD, washA: 1, w: 1.2, col: PIN }); }
    for (const [x, y, s] of [[60, 1430, 0.6], [1030, 1440, 0.7]]) { push(x, y, s); blob([[-80, 0], [-70, -60], [-20, -90], [40, -70], [80, 0]], { wash: SK.tack, washA: 1, w: 2, col: PIN }); for (let i = 0; i < 3; i++) ell(-30 + i * 30, -40, 6, 4, { wash: '#3a2a14', washA: 1, line: false }); pop(); }
    if (t > EV.cw_worm) { const q = t - EV.cw_worm; for (const [x, y, k, d] of [[260, 1360, 0.7, 0.2], [1100, 1475, 1.15, 0.35], [-20, 1475, 1.15, 0.5]]) if (q > d) worm(x, y, k, t, { h: sm(clamp((q - d) / 0.3)) }); }
    if (t > EV.cw_gag - 0.1) { const q = sm(clamp((t - EV.cw_gag + 0.1) / 0.35)); holeAt(400, 1690, 1.5); worm(400, 1690, 1.5, t, { h: q * 1.4, kepi: 1 }); if (q > 0.9) { push(400 - 120, 1690 - 190, 1); txt('тук-тук!', 0, 0, 50, { font: 'Hand', col: '#3a1a08' }); pop(); } }
  }
  function castle(t) {                                                  // замок из обломков галет: стены, башни, бойницы-наколы, флажок
    push(860, 1360, 1); for (let row = 0; row < 3; row++) for (let i = 0; i < 4 - row; i++) hardtack(-180 + i * 125 + row * 62, -60 - row * 120, 0.95, (i + row) % 2 ? 0.04 : -0.03, { worm: 1, key: 14670 + row * 5 + i });
      for (const sd of [-1, 1]) { const tw = rect(sd * 250 - 60, -520, 120, 520, { wash: SK.tack, washA: 1, w: 2.4, col: PIN, key: 14680 + sd }); shadeG(tw.path, sd * 250 + 60, -260, sd * 250 - 60, -260, SK.tackD, 0.4); for (let k = 0; k < 3; k++) rect(sd * 250 - 60 + k * 44, -560, 32, 40, { wash: SK.tack, washA: 1, w: 2, col: PIN }); for (let k = 0; k < 3; k++) holeAt(sd * 250, -420 + k * 130, 0.8); }
      const up = clamp((t - EV.cw_usa) / 0.6); pencil([[250, -560], [250, -800]], { w: 5, col: '#5a3a1a' }); push(250, -800 + 120 * (1 - up), 1); const fw = Math.sin(t * 6) * 6; rect(0, 0, 110, 70, { wash: '#f4f0e6', washA: 1, w: 1.6, col: '#3a3a3a' }); for (let k = 0; k < 4; k++) rect(0, 18 + k * 14, 110, 7, { wash: '#b8221a', washA: 1, line: false }); rect(0, 0, 46, 38, { wash: '#2a3a6a', washA: 1, line: false }); for (let k = 0; k < 6; k++) txt('★', 8 + (k % 3) * 14, 14 + Math.floor(k / 3) * 16, 12, { col: '#ffffff' }); pencil([[110, 0], [114 + fw, 36], [110, 70]], { w: 2, col: '#3a3a3a', pass2: false }); pop();
      if (t > EV.cw_worm) { const q = t - EV.cw_worm; [[-250, -420], [250, -290], [-250, -160], [-60, -250], [130, -120]].forEach(([x, y], i) => { if (q > i * 0.12) worm(x, y + 8, 0.9, t, { h: 0.7 * sm(clamp((q - i * 0.12) / 0.25)), kepi: i === 1 }); }); }
      if (t > EV.cw_tooth && t < EV.cw_worm) { push(-300, -140, 1); for (let k = 0; k < 4; k++) pencil([[0, 0], [30 + k * 14, -40 + k * 26]], { w: 3, col: '#3a2a14', pass2: false }); pop(); }
    pop();
    if (t > EV.cw_tooth && t < EV.cw_tooth + 0.9) { const k = (t - EV.cw_tooth) / 0.9; txt('КРАК!', 560, 1080 - k * 60, 80, { font: 'Osw', col: '#ffe070', a: 1 - k }); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283 + t * 6; txt('✦', 580 + Math.cos(a) * 130 * (0.5 + k), 1300 + Math.sin(a) * 80 * (0.5 + k), 32, { col: '#ffe070', a: 1 - k }); } }
    if (t > EV.cw_tooth) bubbleTag('ЗУБОЛОМ', 300, 1120, t, EV.cw_tooth + 0.1, '#2a3a6a', 48, -0.05);
    if (t > EV.cw_worm + 0.2) bubbleTag('ЗАМОК ДЛЯ ЧЕРВЕЙ', 760, 760, t, EV.cw_worm + 0.2, '#8a2a1a', 44, 0.04);
  }
  function front(t) { const r = rng(14690); for (const [x, y, k] of [[-40, 1980, 1.6], [60, 2040, 2.0], [1120, 1990, 1.7], [1020, 2060, 1.3]]) { push(x, y, k); blob([[-30, 0], [-24, -26], [8, -34], [30, 0]], { wash: r() < 0.3 ? '#f8f8f4' : SK.tackD, washA: 1, w: 1.6, col: PIN }); pop(); }
    motes(30, [100, 500, 1100, 1700], '#ffc070', t, 14691, { sp: 30, sz: 4, a: 0.6, wob: 2 }); haze('#f0a060', 0.05); }
  WORLD.civilwar = (t, u, cat) => {
    lay(14, () => { sky(t); });
    lay(5, () => { giants(t); haze('#e08a50', 0.1); });
    lay(1.6, () => { plain(t); });
    lay(1.25, () => { castle(t); });
    lay(1, () => { cat(); });
    lay(0.6, () => { front(t); });
  };
  DIR.civilwar = {
    outfit: 'kepiA', light: { side: 1, rim: '#ffb060' }, grade: ['#ff9050', 0.1],
    act: () => [[S0.civilwar, 'talk'], [EV.cw_usa, 'proud'], [EV.cw_tooth - 0.2, 'smug'], [EV.cw_tooth + 0.1, 'shock'], [EV.cw_worm, 'scared'], [EV.cw_gag, 'suspicious'], [EV.cw_gag + 0.5, 'annoyed']],
    pose: (t, u, b) => { const wEnd = EV.cw_tooth - 0.35, wk = t < wEnd ? t * 9 : undefined, bite = t > EV.cw_tooth - 0.25 && t < EV.cw_tooth + 0.4, gag = t > EV.cw_gag + 0.25;
      return Object.assign(b, { x: lerp(250, 590, sm(clamp((t - S0.civilwar) / (wEnd - S0.civilwar)))), y: 1640, s: 0.56, walk: wk, flip: gag ? -1 : 1,
        look: gag ? [-0.6, 0.3] : t > EV.cw_worm ? [0.5, -0.7] : bite ? [0.8, 0] : [0.6, -0.2], hand: bite ? [160, -330] : t > EV.cw_worm ? [120, -360] : [120, -260], handF: t > EV.cw_worm ? [-20, -360] : [-80, -200],
        squash: b.squash + (t > EV.cw_tooth && t < EV.cw_tooth + 0.15 ? 0.12 : 0), sweat: t > EV.cw_worm, tailUp: t > EV.cw_worm && !gag }); },
    afterCat: (t, u, P) => { if (t < EV.cw_tooth + 0.1 || t > EV.cw_tooth + 1.2) return; const k = clamp((t - EV.cw_tooth - 0.1) / 0.8); push(P.x + lerp(90, 200, k) * P.s, P.y + lerp(-300, 0, k * k) * P.s, P.s, k * 9); blob([[-8, 0], [-6, -14], [6, -14], [8, 0], [0, 6]], { wash: '#fffaf0', washA: 1, w: 1.4, col: '#8a8a8a' }); pop(); },
    cam: () => [[S0.civilwar, 540, 1200, 0.08], [EV.cw_usa, 560, 1300, 0.16, 'x'], [EV.cw_tooth - 0.3, 600, 1380, 0.26], [EV.cw_worm, 700, 1200, 0.14], [EV.cw_gag, 420, 1420, 0.24], [S1.civilwar, 420, 1440, 0.28]]
  };
  // ---------------------------------------------------------------- переход: кадр разламывается на квадраты галеты и осыпается
  TRANS_IN.civilwar = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const N = 270, cols = 4, rows = 8;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) { const r = rng(14640 + i * 17 + j), d = clamp(k * 1.7 - r() * 0.5 - j * 0.03); if (d >= 1) continue; const cx = i * N + N / 2, cy = j * 240 + 120, dy = d * d * 2000, rot = (r() - 0.5) * d * 3;
      ctx.save(); ctx.setTransform(1, 0, 0, 1, cx, cy + dy); ctx.rotate(rot); ctx.beginPath(); ctx.rect(-N / 2 + 2, -118, N - 4, 236); ctx.clip(); ctx.translate(-cx, -cy); ctx.drawImage(A, 0, 0); ctx.restore();
      scr(() => { push(cx, cy + dy, 1, rot); for (let a = 0; a < 3; a++) for (let b2 = 0; b2 < 3; b2++) ell(-80 + a * 80, -70 + b2 * 70, 6, 6, { wash: '#6a5030', washA: 0.8 * (1 - d), line: false }); pop(); }); }
  } };
})();
