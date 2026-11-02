/* 011 — `archive`: «Но самый первый рецепт, Вена, 1696 год — без яблок! Молоко и сливки.» Ночной архив при свечах: каменные своды, стеллажи до потолка с
   кожаными корешками и свитками в ячейках, лестница, стрельчатое окно с луной над крышами, паутина. Старый архивариус в очках со свечой, писарь за конторкой.
   На пюпитре — рукописная «Koch-Puech» 1696: «Mülch Raimb Strudl». Том-архивариус (чёрный камзол + фартук) с лупой.
   По словам: «рецепт» — книга раскрывается, страницы светятся; «1696» — дата проступает золотыми чернилами; «без яблок!» — рисунок яблока перечёркнут красным,
   штамп «БЕЗ ЯБЛОК»; «Молоко» — въезжают кувшин молока и горшок сливок, молоко льётся. Переход В сцену: чернильная клякса растекается по кадру. */
(() => {
  EV.ar_rec = wtw('s3', 'рецепт,');
  EV.ar_year = wtw('s3', '1696');
  EV.ar_no = wtw('s3', 'без');
  EV.ar_milk = wtw('s3', 'Молоко');
  SHAKES.push([EV.ar_no + 0.1, 0.22, 11]);
  KEYW.push('1696', 'яблок!');

  function vault(t) {                                                   // каменные своды, окно с луной, стеллажи с книгами и свитками, лестница
    vgrad(-800, 1500, ['#120c0a', '#2a1c14', '#3a2818']);
    for (let y = -600; y < 1100; y += 70) for (let x = -400; x < 1600; x += 140) { const xx = x + ((y / 70) % 2) * 70; rect(xx, y, 138, 68, { wash: '#3a2a20', washA: 0.9, w: 1.4, col: '#140c08', a: 0.6 }); }
    for (const x of [-100, 540, 1180]) { pencil(spline([[x - 320, 200], [x - 200, -300], [x, -420], [x + 200, -300], [x + 320, 200]], false, 10), { w: 26, col: '#4a3a2a' }); pencil(spline([[x - 320, 200], [x - 200, -300], [x, -420], [x + 200, -300], [x + 320, 200]], false, 10), { w: 4, col: '#140c08', pass2: false }); }
    push(540, 140, 1); const w = shape([[-110, 300], [-110, -60], [-60, -180], [0, -230], [60, -180], [110, -60], [110, 300]], { wash: '#1a2448', washA: 1, w: 6, col: '#4a3a2a', key: 11500 });
      ctx.save(); ctx.clip(w.path); vgrad(-230, 300, ['#0a1030', '#2a3460']); ell(30, -120, 34, 34, { wash: '#f4f0d8', washA: 1, w: 1.4, col: '#a8a488' }); glow(30, -120, 120, 'rgba(240,240,210,1)', 0.5);
      for (let i = 0; i < 6; i++) sil([[-120 + i * 44, 300], [-120 + i * 44, 200 - (i % 3) * 40], [-100 + i * 44, 170 - (i % 3) * 40], [-80 + i * 44, 200 - (i % 3) * 40], [-80 + i * 44, 300]], '#0a0a18', 1);
      motes(12, [-110, -200, 110, 300], '#ffffff', t, 11501, { sp: 0, sz: 2, a: 0.8, tw: 1 }); ctx.restore(); pencil([[0, -230], [0, 300]], { w: 6, col: '#4a3a2a' }); pencil([[-110, 60], [110, 60]], { w: 6, col: '#4a3a2a' }); pop();
    rays(560, 0, 2.0, 0.25, 1400, 'rgba(200,210,255,1)', 0.08, 4, t);
    for (const [x0, x1] of [[-400, 380], [700, 1500]]) for (let sh = 0; sh < 7; sh++) { const y = -300 + sh * 180; rect(x0, y + 150, x1 - x0, 22, { wash: '#4a2814', washA: 1, w: 2, col: '#140804' }); const r = rng(11510 + sh * 7 + x0); let x = x0 + 10;
      while (x < x1 - 30) { const bw = 18 + r() * 22, bh = 100 + r() * 46; if (r() < 0.12) { for (let k = 0; k < 3; k++) ell(x + 20, y + 150 - 14 - k * 26, 20, 13, { wash: '#e8d8b0', washA: 1, w: 1.4, col: '#6a5a3a' }); x += 46; continue; }
        const c = ['#6a1a14', '#3a4a2a', '#2a2a4a', '#5a3a1a', '#7a5a2a', '#3a1a1a'][Math.floor(r() * 6)]; const b = rect(x, y + 150 - bh, bw, bh, { wash: c, washA: 1, w: 1.4, col: '#0a0404' }); shadeG(b.path, x + bw, 0, x, 0, '#000000', 0.35);
        for (const q of [0.15, 0.85]) pencil([[x + 2, y + 150 - bh * q], [x + bw - 2, y + 150 - bh * q]], { w: 2, col: '#c8a050', a: 0.7, pass2: false }); x += bw + 2; } }
    for (let i = 0; i < 9; i++) { pencil([[1120 + i * 4, -300], [1060 + i * 4, 1060]], { w: 8, col: '#5a3a1a' }); } for (let i = 0; i < 14; i++) pencil([[1120 - i * 4.5, -260 + i * 94], [1180 - i * 4.5, -260 + i * 94]], { w: 6, col: '#5a3a1a' });
    for (const [x, y, sd] of [[-300, -260, 1], [1400, -280, -1]]) { for (let i = 0; i < 6; i++) pencil([[x, y], [x + sd * (60 + i * 30), y + 140 - i * 20]], { w: 1, col: '#c8c0b0', a: 0.4, pass2: false }); for (let k = 1; k < 4; k++) pencil(Array.from({ length: 7 }, (_, i) => [x + sd * (k * 30 + i * k * 8), y + k * 40 - i * k * 6]), { w: 1, col: '#c8c0b0', a: 0.35, pass2: false }); }
  }
  function people(t) {                                                  // архивариус со свечой и писарь за конторкой
    const sh = t > EV.ar_no;
    human(-40, 1260, 1.12, t, { body: '#3a2a2a', legs: '#1a1a1a', hair: '#d8d4cc', beard: 'long', face: sh ? 'shock' : 'calm', armL: 'hold', armR: 'up', prop: 'candle', look: 0.7, seed: 51, long: 1 });
    push(-40, 1260 - 290 * 1.12, 1.12); for (const sd of [-1, 1]) ell(sd * 15, -6, 11, 9, { line: true, w: 2, col: '#c8a050' }); pencil([[-4, -6], [4, -6]], { w: 2, col: '#c8a050', pass2: false }); pop();
    push(980, 1260, 1); rect(-110, -200, 220, 30, { wash: '#4a2814', washA: 1, w: 2, col: '#140804' }); pencil([[-90, -170], [-90, 0]], { w: 8, col: '#3a1a08' }); pencil([[90, -170], [90, 0]], { w: 8, col: '#3a1a08' }); poly([[-90, -210], [90, -230], [90, -200], [-90, -196]], { wash: '#efe6cc', washA: 1, w: 1.4 }); candle(-70, -200, 0.6, t, 11520); pop();
    human(980, 1250, 1.05, t, { body: '#2a2a3a', legs: '#1a1a1a', hair: '#5a3a1a', face: sh ? 'shock' : 'calm', armL: 'hold', armR: sh ? 'up' : 'hold', look: -0.6, seed: 52, flip: -1 }); hat20(980, 1250, 1.05, 'beret', '#1a1a1a');
    push(980 - 30, 1250 - 250, 1, 0.8); pencil([[0, 0], [30, -80]], { w: 3, col: '#f4ecd8' }); pop();
  }
  function lectern(t) {                                                 // пюпитр с раскрытой «Koch-Puech» 1696: рецепт рукописью, яблоко перечёркнуто, молоко и сливки
    const op = sm(clamp((t - EV.ar_rec + 0.3) / 0.5));
    push(470, 1460, 1); pencil([[0, 0], [0, -300]], { w: 30, col: '#4a2814' }); poly([[-120, 0], [120, 0], [80, -40], [-80, -40]], { wash: '#3a1a08', washA: 1, w: 2 });
      push(0, -330, 1, -0.06); poly([[-330, 40], [330, 40], [300, -60], [-300, -60]], { wash: '#5a3014', washA: 1, w: 2.4, col: '#140804' });
      const lp = poly([[-310, 20], [-10, 30], [-10, lerp(30, -300, op)], [-300, lerp(20, -290, op)]], { wash: '#efe2c0', washA: 1, w: 2, col: '#6a5232', key: 11530 }); shadeG(lp.path, -10, 0, -300, 0, '#c8b088', 0.35);
      const rp = poly([[10, 30], [310, 20], [300, lerp(20, -290, op)], [10, lerp(30, -300, op)]], { wash: '#f2e6c8', washA: 1, w: 2, col: '#6a5232', key: 11531 }); shadeG(rp.path, 10, 0, 300, 0, '#c8b088', 0.3);
      if (op > 0.5) { const a = clamp((op - 0.5) * 2);
        txt('Koch-Puech', -160, -250, 46, { font: 'Hand', col: '#3a1a08', a }); for (let i = 0; i < 7; i++) pencil(spline([[-280, -190 + i * 26], [-160, -194 + i * 26], [-40, -190 + i * 26]], false, 4), { w: 1.6, col: '#5a3a1a', a: 0.6 * a, pass2: false });
        if (t > EV.ar_year) { const k = clamp((t - EV.ar_year) / 0.4); txt('Anno 1696', -160, -30, 52, { font: 'Hand', col: '#b8862a', a: k }); glow(-160, -40, 120, 'rgba(255,210,120,1)', 0.35 * k); }
        txt('Mülch Raimb Strudl', 160, -250, 34, { font: 'Hand', col: '#7a1a10', a }); for (let i = 0; i < 4; i++) pencil(spline([[40, -200 + i * 24], [160, -204 + i * 24], [280, -200 + i * 24]], false, 4), { w: 1.6, col: '#5a3a1a', a: 0.6 * a, pass2: false });
        apple(170, -70, 38, 0.2, {}); if (t > EV.ar_no) { const k = clamp((t - EV.ar_no) / 0.25); pencil([[120, -120], [lerp(120, 220, k), lerp(-120, -20, k)]], { w: 10, col: '#d9282a' }); if (k > 0.5) pencil([[220, -120], [lerp(220, 120, (k - 0.5) * 2), lerp(-120, -20, (k - 0.5) * 2)]], { w: 10, col: '#d9282a' }); }
        strudel(160, -26 + 40, 0.22, t, { key: 11532, len: 200, sugar: 0, cut: 0 }); }
      pop();
      glow(0, -500, 260, 'rgba(255,220,150,1)', 0.25 * op); pop();
    if (t > EV.ar_no) { const k = popK(t, EV.ar_no + 0.05, 0.35); push(560, 1040, k * 1.0, -0.18); rect(-170, -50, 340, 100, { wash: '#ffffff', washA: 0, w: 8, col: '#d9282a' }); txt('БЕЗ ЯБЛОК', 0, 18, 56, { font: 'Osw', col: '#d9282a' }); pop(); }
    if (t > EV.ar_milk - 0.3) { const k = sm(clamp((t - EV.ar_milk + 0.3) / 0.5)), x = lerp(-200, 230, k);
      push(x, 1400, 1); const j = shape(spline([[-50, 0], [-60, -90], [-40, -150], [-50, -190], [40, -190], [30, -150], [56, -90], [50, 0]], true, 6), { wash: '#e8e0d0', washA: 1, w: 2.4, col: '#4a3a2a' }); shadeG(j.path, 50, 0, -40, 0, '#a89a7a', 0.45); pencil([[-40, -120], [40, -120]], { w: 6, col: '#3a5a8a', pass2: false }); ell(0, -190, 45, 10, { wash: '#ffffff', washA: 1, w: 1.6 });
        if (k > 0.9) { pencil(spline([[-50, -190], [-80, -170], [-90, -60]], false, 5), { w: 9, col: '#ffffff', a: 0.95, pass2: false }); ell(-90, -50, 30, 8, { wash: '#ffffff', washA: 0.9, line: false }); } pop();
      push(x + 150, 1410, 1); const p = shape([[-56, 0], [-66, -80], [66, -80], [56, 0]], { wash: '#a8643a', washA: 1, w: 2.4, col: '#3a1a08' }); shadeG(p.path, 60, 0, -40, 0, '#5a2a10', 0.45); ell(0, -80, 66, 16, { wash: '#fff8e6', washA: 1, w: 2 }); txt('Rahm', 0, -36, 24, { font: 'Hand', col: '#f4e6c8' }); pop();
      bubbleTag('МОЛОКО + СЛИВКИ', 360, 1160, t, EV.ar_milk + 0.1, '#3a5a8a', 50, -0.04); }
  }
  function front(t) {                                                   // передний план: стопка фолиантов, чернильница с пером, свечи, пыль в свете
    push(-60, 1860, 1.5); for (let i = 0; i < 4; i++) { const b = rect(-160 + (i % 2) * 20, -i * 50 - 50, 320 - i * 20, 50, { wash: ['#6a1a14', '#3a4a2a', '#5a3a1a', '#2a2a4a'][i], washA: 1, w: 2, col: '#0a0404' }); pencil([[-150 + (i % 2) * 20, -i * 50 - 10], [150 - i * 20, -i * 50 - 10]], { w: 2, col: '#c8a050', a: 0.7, pass2: false }); } candle(40, -200, 1.1, t, 11540); candle(100, -200, 0.8, t, 11541); pop();
    push(1160, 1860, 1.4); ell(0, 0, 70, 20, { wash: '#1a1a24', washA: 1, w: 2 }); rect(-50, -80, 100, 80, { wash: '#2a2a3a', washA: 1, w: 2 }); pencil([[0, -80], [80, -320]], { w: 5, col: '#3a2a1a' }); blob([[80, -320], [40, -440], [70, -560], [110, -440]], { wash: '#f4ecd8', washA: 1, w: 1.6, col: '#6a5a3a' }); pop();
    motes(40, [0, 600, 1080, 1800], '#ffe0a0', t, 11542, { sp: 8, sz: 4, a: 0.5, wob: 2 });
  }
  WORLD.archive = (t, u, cat) => {
    lay(14, () => { vault(t); haze('#3a2a1a', 0.12); });
    lay(3.6, () => { people(t); haze('#2a1a10', 0.06); });
    lay(1.25, () => { const f = rect(-500, 1360, 2200, 900, { wash: '#4a3828', washA: 1, w: 2, col: '#140c08', key: 11560 }); ctx.save(); ctx.clip(f.path); for (let j = 0; j < 10; j++) for (let i = -6; i < 20; i++) rect(-500 + i * 130 + (j % 2) * 65, 1360 + j * 70, 128, 68, { wash: (i + j) % 3 ? '#4a3a2a' : '#3a2a1e', washA: 1, w: 1.4, col: '#140c08', a: 0.7 }); ctx.restore(); shadeG(f.path, 0, 1360, 0, 1700, '#000000', 0.4);
      const rg = ell(560, 1640, 520, 120, { wash: '#7a2a1e', washA: 1, w: 2, col: '#2a0a04' }); for (let i = 0; i < 3; i++) pencil(ellPts(560, 1640, 480 - i * 60, 110 - i * 14, 0, 1, 40), { w: 4, col: '#c8a050', a: 0.5, pass2: false }); });
    lay(1, () => { cat(); });
    lay(0.95, () => { lectern(t); });
    lay(0.6, () => { front(t); });
    screenFill('#ffb060', 0.05, 'soft-light');
  };
  DIR.archive = {
    outfit: 'dutchA', light: { side: -1, rim: '#ffc070' }, grade: ['#ff9a40', 0.14],
    act: () => [[S0.archive, 'suspicious'], [EV.ar_rec, 'awe'], [EV.ar_year, 'proud'], [EV.ar_no, 'shock'], [EV.ar_milk + 0.2, 'sideeye']],
    pose: (t, u, b) => Object.assign(b, { x: 760, y: 1720, s: 1.12, flip: -1, look: t < EV.ar_no ? [-0.7, 0.4] : [0.1, -0.1], hand: t < EV.ar_no ? [250, -300] : [140, -360], handF: t > EV.ar_no ? [-130, -380] : [-60, -200], prop: 'magP', propAng: -0.5, noHat: true, sweat: t > EV.ar_no }),
    cam: () => [[S0.archive, 600, 900, 0.1], [EV.ar_rec, 560, 1140, 0.18, 'x'], [EV.ar_year, 520, 1120, 0.24], [EV.ar_no, 600, 1120, 0.2], [EV.ar_milk, 540, 1220, 0.2], [S1.archive, 560, 1220, 0.24]]
  };
  // ---------------------------------------------------------------- переход: чернильная клякса растекается
  TRANS_IN.archive = { a: 0.25, b: 0.5, runA: 0.3, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const R = sm(k) * 1500, r = rng(11550), P = []; const n = 28;
    for (let i = 0; i < n; i++) { const a = i / n * 6.283, rr = R * (0.8 + r() * 0.4) * (i % 3 === 0 ? 1.15 : 1); P.push([540 + Math.cos(a) * rr, 960 + Math.sin(a) * rr]); }
    const path = pathOf(spline(P, true, 6)); scr(() => { ctx.save(); ctx.fillStyle = '#0a0a1a'; ctx.fill(path); ctx.restore(); });
    const P2 = P.map(([x, y]) => [540 + (x - 540) * 0.92, 960 + (y - 960) * 0.92]); inPath(pathOf(spline(P2, true, 6)), () => drawBuf(B, 1, 540, 960));
    scr(() => { for (let i = 0; i < 10; i++) { const a = r() * 6.283, d = R * (1.05 + r() * 0.3); ctx.fillStyle = '#0a0a1a'; ctx.globalAlpha = 1 - k; ctx.beginPath(); ctx.arc(540 + Math.cos(a) * d, 960 + Math.sin(a) * d, 10 + r() * 30, 0, 6.283); ctx.fill(); } ctx.globalAlpha = 1; });
  } };
})();
