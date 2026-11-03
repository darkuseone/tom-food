/* 017 — `can` (ТОМ-МАЛЫШ, раз за ролик): «Брожение продолжается и в банке: бактерии выделяют газ — банка раздувается!» Внутри жестяной банки: Том-малыш
   в скафандре идёт по дну-«равнине» между гигантскими серебристыми салаками, как между брёвнами-китами; рассол-море мутно-жёлтое, по нему плавают чешуйки,
   сверху — вогнутая крышка с отражениями, стенки — рифлёные металлические скалы с бликами; лучик света сквозь дырочку. По словам: «в банке» — камера ныряет
   внутрь, луч фонаря; «бактерии» — зелёные бактерии с рожицами выплывают и танцуют; «газ» — пузыри растут и поднимаются; «раздувается!» — крышка выгибается
   куполом, всё дрожит, Том подпрыгивает; немая пауза — пузырь обволакивает Тома и поднимает, стекло шлема запотевает. Переход В сцену: консервный нож
   вскрывает кадр по кругу, и крышка-кадр отгибается. */
(() => {
  EV.cn_in = wtw('s4', 'банке:');
  EV.cn_bac = wtw('s4', 'бактерии');
  EV.cn_gas = wtw('s4', 'газ');
  EV.cn_bulge = wtw('s4', 'раздувается!');
  EV.cn_gag = LE('s4') + 0.05;
  SHAKES.push([EV.cn_bulge + 0.2, 0.25, 10]);
  KEYW.push('банке:', 'раздувается!');
  const BG = t => t > EV.cn_bulge ? sm(clamp((t - EV.cn_bulge) / 0.6)) : 0;

  function walls(t) {                                                   // металлические стенки, рифление, крышка-купол, луч из дырочки
    vgrad(-700, 1500, ['#8a8a70', '#b8b48a', '#d8d0a0']); for (let i = 0; i < 14; i++) { const x = -400 + i * 150; pencil([[x, -700], [x + 30, 1500]], { w: 40, col: '#c8ccd2', a: 0.35, pass2: false }); pencil([[x + 20, -700], [x + 50, 1500]], { w: 6, col: '#ffffff', a: 0.4, pass2: false }); }
    const b = BG(t); const top = shape(spline([[-400, -300], [540, -300 - 260 * b + 80 * (1 - b)], [1500, -300], [1500, -800], [-400, -800]], true, 8), { wash: '#c8ccd2', washA: 1, w: 4, col: '#5a5e64', key: 17500 }); metalG(top.path, 540, -500, 900, '#ffffff', '#c8ccd2', '#6a6e74');
    for (let i = 0; i < 3; i++) pencil(spline([[-200 + i * 50, -320 + i * 20], [540, -330 - 240 * b + 70 * (1 - b) + i * 30], [1300 - i * 50, -320 + i * 20]], false, 8), { w: 3, col: '#7a7e84', a: 0.6, pass2: false });
    glow(540, 700, 800, 'rgba(190,240,140,1)', 0.14); rays(900, -360, 1.9, 0.08, 1900, 'rgba(255,255,220,1)', 0.25, 2, t); glow(900, -360, 60, 'rgba(255,255,230,1)', 0.8);
  }
  function brine(t) {                                                   // мутный рассол, чешуйки, бактерии, пузыри
    rect(-400, -200, 2000, 1700, { wash: SR.brine, washA: 0.25, line: false }); const r = rng(17510); for (let i = 0; i < 30; i++) { const x = -300 + r() * 1700 + Math.sin(t * 0.7 + i) * 30, y = -100 + r() * 1300 + Math.cos(t * 0.5 + i) * 20; push(x, y, 1, t + i); ell(0, 0, 10, 6, { wash: '#e8eef4', washA: 0.6, w: 1, col: '#a8b0b8' }); pop(); }
    if (t > EV.cn_bac - 0.1) { for (let i = 0; i < 7; i++) { const k = popK(t, EV.cn_bac - 0.1 + i * 0.08, 0.35); if (k <= 0) continue; const x = 120 + i * 140 + Math.sin(t * 2 + i) * 30, y = 600 + (i % 3) * 140 + Math.cos(t * 3 + i) * 20; push(x, y, k, Math.sin(t * 4 + i) * 0.3);
      const bc = blob([[-40, 0], [-30, -24], [0, -30], [36, -20], [44, 6], [20, 26], [-20, 24]], { wash: '#8ac83a', washA: 0.9, w: 2, col: '#3a6a1a' }); for (let k2 = 0; k2 < 5; k2++) pencil([[-40 + k2 * 20, 20], [-46 + k2 * 22, 36 + Math.sin(t * 8 + k2) * 6]], { w: 2, col: '#3a6a1a', pass2: false });
      for (const sd of [-1, 1]) { ell(sd * 10, -8, 6, 7, { wash: '#ffffff', washA: 1, w: 1 }); ell(sd * 10 + 1, -7, 3, 3, { wash: '#1a1a1a', washA: 1, line: false }); } pencil(spline([[-10, 8], [0, 14], [10, 8]], false, 4), { w: 2, col: '#1a3a0a', pass2: false }); pop(); } }
    if (t > EV.cn_gas - 0.1) { const r2 = rng(17520); for (let i = 0; i < 16; i++) { const q = ((t - EV.cn_gas) * (0.2 + r2() * 0.2) + r2()) % 1, R = 10 + r2() * 40 + q * 30; gasBubble(-100 + r2() * 1300 + Math.sin(t + i) * 20, 1300 - q * 1500, R, t); } }
  }
  function fishes(t) {                                                  // гигантские салаки-«брёвна» лежат на дне, покачиваются; дно банки
    const b = BG(t); const fl = rect(-400, 1440, 2000, 500, { wash: '#a8acb4', washA: 1, w: 3, col: '#4a4e54' }); hatch(fl.path, fl.bb, { gap: 16, a: 0.25, col: '#6a6e74', ang: 0.1 }); shadeG(fl.path, 540, 1440, 540, 1900, '#5a5e64', 0.4); for (let i = 0; i < 6; i++) ell(-200 + i * 320, 1500 + (i % 2) * 30, 140, 16, { wash: '#c8ccd2', washA: 0.6, line: false });
    for (const [x, y, s, r] of [[200, 1340, 4.2, 0.05], [900, 1300, 3.8, -0.08], [560, 980, 3.4, 0.1], [-80, 900, 3.2, -0.1]]) { push(x, y - b * 60 + Math.sin(t * 1.2 + x) * 8, 1, r); fish(0, 0, s, 0, { key: 17530 + x }); pop(); }
  }
  function bubbleTom(t) { if (t < EV.cn_gag - 0.1) return; const q = clamp((t - EV.cn_gag + 0.1) / 0.6); const P = { x: lerp(560, 600, q), y: lerp(1560, 1360, q) }; gasBubble(P.x, P.y - 140, 190 * sm(clamp(q * 2)), t); }
  function labels(t) { if (t > EV.cn_bac + 0.2) bubbleTag('БАКТЕРИИ', 320, 520, t, EV.cn_bac + 0.2, '#3a6a1a', 44, -0.04); if (t > EV.cn_gas + 0.1) bubbleTag('ГАЗ!', 860, 760, t, EV.cn_gas + 0.1, '#8a6a1a', 54, 0.05);
    if (t > EV.cn_bulge) { push(540, 300, popK(t, EV.cn_bulge, 0.4)); rect(-210, -54, 420, 108, { wash: '#1a1a20', washA: 1, w: 4, col: '#c8a050' }); txt('ВЗДУТИЕ!', 0, 22, 66, { font: 'Osw', col: '#ffe070' }); pop(); } }
  function front(t) { const r = rng(17540); for (let i = 0; i < 5; i++) { const x = -60 + i * 300 + r() * 60; push(x, 1960, 1.6, r()); ell(0, -20, 30, 18, { wash: '#e8eef4', washA: 0.7, w: 1.4, col: '#a8b0b8' }); pop(); } motes(30, [0, 0, 1100, 1700], '#f4f8e0', t, 17545, { sp: 14, sz: 4, a: 0.5, wob: 3 }); haze('#c8c49a', 0.08); }
  WORLD.can = (t, u, cat) => {
    const b = BG(t), sh = b > 0 && b < 1 ? Math.sin(t * 40) * 6 : 0; ctx.save(); ctx.translate(sh, 0);
    lay(14, () => { walls(t); });
    lay(2.2, () => { brine(t); });
    lay(1.4, () => { fishes(t); });
    lay(1.02, () => { bubbleTom(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { labels(t); });
    lay(0.6, () => { front(t); });
    ctx.restore();
  };
  DIR.can = {
    outfit: 'astroA', light: { side: 1, rim: '#f0ffd0' }, grade: ['#d8d8a0', 0.06],
    act: () => [[S0.can, 'awe'], [EV.cn_bac, 'shock'], [EV.cn_gas, 'suspicious'], [EV.cn_bulge, 'scared'], [EV.cn_gag, 'shock'], [EV.cn_gag + 0.4, 'laugh']],
    pose: (t, u, b) => { const k = clamp((t - S0.can) / (EV.cn_bulge - S0.can)), q = t > EV.cn_gag - 0.1 ? clamp((t - EV.cn_gag + 0.1) / 0.6) : 0, hop = t > EV.cn_bulge && t < EV.cn_bulge + 0.5 ? Math.abs(Math.sin((t - EV.cn_bulge) * 12)) * 40 : 0;
      return Object.assign(b, { x: lerp(320, 560, k) + q * 40, y: lerp(1560, 1360, q) - hop, s: 0.55, flip: 1, walk: q === 0 && t < EV.cn_bulge ? t * 7 : undefined, rot: q * Math.sin(t * 3) * 0.2,
        look: t > EV.cn_bulge ? [0, -0.9] : t > EV.cn_gas ? [0.3, -0.7] : t > EV.cn_bac ? [-0.4, -0.6] : [0.7, -0.2], hand: t > EV.cn_bulge ? [160, -380] : [140, -260], handF: t > EV.cn_bulge ? [-60, -380] : [-80, -220], sweat: t > EV.cn_bulge }); },
    cam: () => [[S0.can, 540, 700, 0.04], [S0.can + 0.8, 460, 1200, 0.24, 'x'], [EV.cn_bac, 420, 1000, 0.2], [EV.cn_gas, 520, 1150, 0.2], [EV.cn_bulge, 540, 900, 0.12], [EV.cn_gag, 580, 1280, 0.22], [S1.can, 600, 1260, 0.24]]
  };
  // ---------------------------------------------------------------- переход: консервный нож вскрывает кадр по кругу, крышка отгибается
  TRANS_IN.can = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const e = sm(k), cut = clamp(e * 1.6), lift = clamp(e * 1.6 - 0.6) / 1;
    ctx.save(); ctx.translate(540, 960 - lift * 1400); ctx.scale(1, 1 - lift * 0.7); ctx.translate(-540, -960); ctx.beginPath(); ctx.arc(540, 960, 1150, 0, 6.283); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
    scr(() => { ctx.save(); ctx.strokeStyle = '#e8eef4'; ctx.lineWidth = 14; ctx.beginPath(); ctx.arc(540, 960 - lift * 1400, 520, -Math.PI / 2, -Math.PI / 2 + cut * 6.283); ctx.stroke(); ctx.restore(); });
  } };
})();
