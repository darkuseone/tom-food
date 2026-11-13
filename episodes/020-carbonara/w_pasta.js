/* 020 — `pasta` ★ РАЗГАДКА: «Разгадка, по главной версии: повара бросили их в пасту — солдатский завтрак на спагетти!» ТОМ-МАЛЫШ (раз за ролик):
   крошечный Том в шлеме вагонетчика катается по СПАГЕТТИ-ГОРКАМ внутри гигантской тарелки карбонары: рельсы — две толстые макаронины со шпалами-кубиками гуанчале,
   вагонетка — ломтик бекона. Вокруг объёмный мир из еды: спагетти-холмы витками на 3 планах, озёра золотого яичного соуса с бликами, кубики гуанчале-валуны с поджаристыми
   гранями, глыбы пекорино, перчинки-камни; с неба сыплется тёртый пекорино, как снег. За краем тарелки — гигантская кухня 1944: банка DRIED EGG как башня, котелок, окно с рассветом.
   По словам: «Разгадка» — Том на вершине машет, «повара бросили» — сверху падают бекон-полосы и облако яичного порошка, «в пасту» — вагонетка срывается вниз,
   «завтрак на спагетти!» — полный разгон; пауза-гэг — мёртвая петля: Том вверх ногами, шлем слетает и ловится. Переход В сцену: вилка накручивает кадр спиралью. */
(() => {
  EV.ps_ans = wtw('s10', 'Разгадка,');
  EV.ps_cooks = wtw('s10', 'повара');
  EV.ps_pasta = wtw('s10', 'пасту');
  EV.ps_brk = wtw('s10', 'завтрак');
  EV.ps_loop = LE('s10') + 0.05;
  SHAKES.push([EV.ps_pasta + 0.1, 0.2, 8], [EV.ps_loop + 0.4, 0.2, 6]);
  KEYW.push('Разгадка,', 'завтрак');

  // трасса: спуск-волны → мёртвая петля → выезд. Параметр p 0..1 по времени
  const LOOPC = [860, 1180], LR = 190;
  function trackPt(p) {
    if (p < 0.62) { const q = p / 0.62, x = lerp(380, LOOPC[0], q), y = 1200 + q * 220 - Math.sin(q * Math.PI * 2.2) * 120 * (1 - q * 0.6); return [x, y]; }
    if (p < 0.9) { const q = (p - 0.62) / 0.28, a = Math.PI / 2 - q * Math.PI * 2; return [LOOPC[0] + Math.cos(a) * LR + q * 60, LOOPC[1] + Math.sin(a) * LR]; }
    const q = (p - 0.9) / 0.1; return [lerp(LOOPC[0] + 60, 1240, q), LOOPC[1] + LR - q * 40];
  }
  function trackP(t) {                                                  // где вагонетка по времени
    if (t < EV.ps_pasta - 0.2) return 0;
    if (t < EV.ps_loop) return 0.62 * sm(clamp((t - EV.ps_pasta + 0.2) / (EV.ps_loop - EV.ps_pasta + 0.2)));
    return lerp(0.62, 1, clamp((t - EV.ps_loop) / Math.max(0.6, S1.pasta - EV.ps_loop - 0.1)));
  }
  function giantKitchen(t) {                                            // за краем тарелки: кухня-великан 1944 — рассветное окно, банка DRIED EGG-башня, котелок, ложка
    vgrad(-600, 1200, ['#3a2a3a', '#8a5a4a', '#c8885a']);
    push(260, 160, 2.2); const w = rect(-160, -200, 320, 360, { wash: '#f8c890', washA: 1, w: 8, col: '#4a3020', key: 21600 }); ctx.save(); ctx.clip(w.path); vgrad(-200, 160, ['#c86a6a', '#f8b878', '#fff0c0']); ell(0, 60, 50, 50, { wash: '#fff4d0', washA: 1, line: false }); for (let i = 0; i < 6; i++) rect(-160 + i * 60, 80 - (i % 3) * 30, 56, 100, { wash: '#8a5a4a', washA: 1, line: false }); ctx.restore(); pencil([[0, -200], [0, 160]], { w: 8, col: '#4a3020' }); pop();
    glow(260, 300, 420, 'rgba(255,210,150,1)', 0.3);
    eggPowderCan(980, 780, 3.2, 21601); push(-120, 760, 2.4); const pt = rect(-120, -200, 240, 200, { wash: '#8a8e96', washA: 1, w: 3, col: '#2a2e36', key: 21602 }); metalG(pt.path, -40, -120, 200, '#e8ecf0', '#8a8e96', '#2a2e36'); ell(0, -200, 120, 26, { wash: '#4a4e56', washA: 1, w: 2 }); pop();
    push(620, 300, 2.2, 0.5); rect(-14, -260, 28, 420, { wash: '#a8acb4', washA: 1, w: 2, col: '#3a3e44' }); pop();
  }
  function plateRim(t) {                                                // край тарелки-горизонт: белый фаянс, синий кант, блик
    const rim = blob([[-600, 900], [0, 820], [540, 800], [1100, 820], [1700, 900], [1700, 1000], [-600, 1000]], { wash: '#f8f6f0', washA: 1, w: 3, col: '#6a6a78', key: 21610 }); shadeG(rim.path, 0, 1000, 0, 800, '#b8b8c8', 0.45);
    pencil(spline([[-600, 930], [0, 856], [540, 838], [1100, 856], [1700, 930]], false, 8), { w: 8, col: '#2a4a8a', a: 0.5, pass2: false }); pencil(spline([[100, 830], [500, 816], [800, 822]], false, 6), { w: 10, col: '#ffffff', a: 0.8, pass2: false });
  }
  function hills(t, far) {                                              // спагетти-холмы витками: дальний план светлее, ближний — сочнее, с соусом между витками
    const r = rng(far ? 21620 : 21630), n = far ? 7 : 5, sc = far ? 0.7 : 1.2, by = far ? 1000 : 1150;
    for (let h = 0; h < n; h++) { const cx = -300 + h * (1700 / (n - 1)) + r() * 80, hh = (far ? 160 : 230) + r() * 120, hw = (far ? 220 : 320) + r() * 80;
      const hill = blob([[cx - hw, by + 40], [cx - hw * 0.6, by - hh * 0.7], [cx, by - hh], [cx + hw * 0.6, by - hh * 0.7], [cx + hw, by + 40]], { wash: far ? '#e8c87a' : CB.sauceD, washA: 1, w: 2, col: '#8a5a10', key: 21640 + h + (far ? 0 : 20) });
      shadeG(hill.path, cx + hw, by, cx - hw * 0.3, by - hh, far ? '#a87a3a' : '#7a4a08', 0.45);
      for (let k = 0; k < (far ? 7 : 10); k++) { const yy = by - hh * (k / (far ? 7 : 10)), ww = hw * (1 - k / (far ? 8 : 11)); pastaStrand([[cx - ww, yy + 20], [cx - ww * 0.4, yy - 14], [cx + ww * 0.4, yy + 6], [cx + ww, yy - 10]], (far ? 9 : 14) * sc * 0.8, far ? 0.85 : 1, 21650 + h * 30 + k); }
      if (!far) for (let k = 0; k < 4; k++) ell(cx - hw * 0.4 + k * hw * 0.25, by - hh * 0.4 - (k % 2) * 30, 18, 6, { wash: '#ffffff', washA: 0.65, line: false }); }
  }
  function lakes(t) {                                                   // озёра яичного соуса: глянец, рябь от вагонетки, отражение окна
    for (const [x, y, rx, ry] of [[300, 1330, 260, 50], [1180, 1300, 220, 46]]) { const l = ell(x, y, rx, ry, { wash: CB.sauce, washA: 1, w: 2, col: '#a87010', key: 21700 + x }); shadeG(l.path, x, y + ry, x, y - ry, '#c8901e', 0.5);
      for (let i = 0; i < 3; i++) { const q = (t * 0.5 + i / 3) % 1; ell(x, y, rx * 0.3 + q * rx * 0.6, ry * 0.3 + q * ry * 0.6, { wash: '#000', washA: 0, w: 2, col: '#fff0a0' }); } ell(x - rx * 0.4, y - ry * 0.3, rx * 0.25, ry * 0.18, { wash: '#fffbe0', washA: 0.85, line: false }); }
  }
  function floor(t) {                                                   // дно тарелки ближе к зрителю: соусная гладь, россыпь макаронин, перец, сыр
    const f = rect(-500, 1380, 2200, 900, { wash: CB.sauce, washA: 1, line: false, key: 21980 }); shadeG(f.path, 0, 2000, 0, 1380, '#a86a10', 0.5); const r = rng(21981);
    for (let i = 0; i < 16; i++) { const x = -300 + r() * 1700, y = 1440 + r() * 520, w = 160 + r() * 200; pastaStrand([[x - w, y], [x - w * 0.3, y - 30 - r() * 30], [x + w * 0.3, y + 20], [x + w, y - 10]], 16 + r() * 8, 1, 21982 + i * 3); }
    for (let i = 0; i < 10; i++) ell(-200 + r() * 1600, 1500 + r() * 450, 30 + r() * 30, 8, { wash: '#fff8d0', washA: 0.6, line: false });
    pepperDust(600, 1700, 900, 300, 70, 21999); for (let i = 0; i < 6; i++) guanCube(-100 + i * 260 + r() * 60, 1560 + r() * 300, 3 + r() * 2, r() * 2, 22200 + i);
  }
  function boulders(t) {                                                // гуанчале-валуны, глыбы пекорино, перчинки-камни, бекон-мостик
    for (const [x, y, s, a] of [[60, 1380, 5.5, 0.2], [520, 1300, 4.2, -0.3], [1060, 1420, 6, 0.4], [1300, 1180, 3.6, 0.1], [680, 1100, 3, 0.6]]) { guanCube(x, y, s, a, 21710 + x); castShadow(x, y + 12 * s, 14 * s, 8 * s, 0.6, 0.25); }
    for (const [x, y] of [[230, 1180], [1180, 1080]]) { push(x, y, 1); const ch = poly([[-90, 30], [-60, -60], [40, -80], [100, -10], [80, 40]], { wash: CB.cheese, washA: 1, w: 2.2, col: '#8a7a4a', key: 21720 + x }); shadeG(ch.path, 100, 40, -60, -60, '#c8b888', 0.5); for (let i = 0; i < 8; i++) ell(-50 + i * 16, -30 + (i % 3) * 18, 3, 2, { wash: '#fffbe8', washA: 0.9, line: false }); pop(); }
    const r = rng(21730); for (let i = 0; i < 14; i++) { const x = -200 + r() * 1700, y = 1180 + r() * 280, s = 8 + r() * 14; blob([[x - s, y], [x - s * 0.6, y - s], [x + s * 0.7, y - s * 0.8], [x + s, y + s * 0.2]], { wash: '#2a1a12', washA: 1, w: 1.4, col: '#000' }); ell(x - s * 0.3, y - s * 0.6, s * 0.2, s * 0.12, { wash: '#8a7a6a', washA: 0.8, line: false }); }
  }
  function track(t) {                                                   // рельсы-макаронины: две параллельные спагетти, шпалы-кубики, петля
    const pts = [], N = 70; for (let i = 0; i <= N; i++) pts.push(trackPt(i / N));
    const off = (d) => pts.map((p, i) => { const q = pts[Math.min(N, i + 1)], o = pts[Math.max(0, i - 1)], dx = q[0] - o[0], dy = q[1] - o[1], L = Math.hypot(dx, dy) || 1; return [p[0] - dy / L * d, p[1] + dx / L * d]; });
    for (let i = 0; i < N; i += 3) { const [x, y] = pts[i]; guanCube(x, y + 6, 0.9, i * 0.4, 21740 + i); }
    for (const d of [-12, 12]) { const P = off(d); for (let i = 0; i < N; i += 10) pastaStrand(P.slice(i, Math.min(N, i + 11) + 1), 10, 1, 21800 + i + (d > 0 ? 100 : 0)); }
    for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; pencil([[LOOPC[0] + Math.cos(a) * (LR + 20), LOOPC[1] + Math.sin(a) * (LR + 20)], [LOOPC[0] + Math.cos(a) * (LR + 20) * 1.1, LOOPC[1] + 220]], { w: 9, col: CB.pastaD, a: 0.85, pass2: false }); }   // опоры петли — макаронины
    push(LOOPC[0], LOOPC[1] - LR - 90, 1); rect(-110, -30, 220, 60, { wash: '#c8321a', washA: 1, w: 2, col: '#3a0a08' }); txt('SPAGHETTI EXPRESS', 0, 10, 22, { font: 'Osw', col: '#fff4c8' }); pop();
  }
  function fallers(t) {                                                 // «повара бросили их в пасту»: бекон-полосы и облако яичного порошка падают сверху
    if (t < EV.ps_cooks - 0.1) return; for (let i = 0; i < 4; i++) { const k = clamp((t - EV.ps_cooks - i * 0.12) / 0.6); if (k <= 0) continue; const y = lerp(-200, 1200 - i * 40, k * k); baconStrip(300 + i * 220, y, 1.6, 0.3 + i * 0.4 + k * 2, 21900 + i); }
    const k = clamp((t - EV.ps_cooks - 0.3) / 1.2); if (k > 0 && k < 1) for (let i = 0; i < 9; i++) ell(700 + Math.sin(i * 2.3) * 200 * k, lerp(-100, 900, k) + i * 20, 80 + k * 80, 50 + k * 40, { wash: '#f8d860', washA: 0.45 * (1 - k), line: false });
  }
  function cart(t) {                                                    // вагонетка — ломтик бекона с колёсами-кольцами пасты; рисуется под Томом
    const p = trackP(t), [x, y] = trackPt(p), [x2, y2] = trackPt(Math.min(1, p + 0.01)), a = Math.atan2(y2 - y, x2 - x);
    push(x, y - 6, 1, a); baconStrip(0, -26, 0.75, 0, 21950); for (const wx of [-60, 60]) { ell(wx, 0, 16, 16, { wash: CB.pasta, washA: 1, w: 3, col: CB.pastaD }); ell(wx, 0, 6, 6, { wash: CB.pastaD, washA: 1, line: false }); } pop();
    if (p > 0.05 && p < 0.99) for (let i = 0; i < 5; i++) ell(x - Math.cos(a) * (60 + i * 26), y - Math.sin(a) * (60 + i * 26) - 20, 10 - i, 6 - i * 0.8, { wash: CB.sauce, washA: 0.8 - i * 0.14, line: false });
  }
  WORLD.pasta = (t, u, cat) => {
    lay(9, () => { giantKitchen(t); haze('#ffd8a0', 0.08); });
    lay(4, () => { plateRim(t); hills(t, 1); haze('#fff0c8', 0.05); });
    lay(2.2, () => { hills(t, 0); lakes(t); fallers(t); });
    lay(1.4, () => { floor(t); boulders(t); lightPool(560, 1250, 760, 220, 'rgba(255,230,160,1)', 0.18); });
    lay(1, () => { track(t); cart(t); cat(); });
    lay(0.95, () => { motes(40, [-200, 200, 1400, 1600], CB.cheese, t, 21960, { sp: 50, vx: -10, sz: 5, a: 0.9, wob: 6 }); });
    lay(0.6, () => { motes(16, [-200, 200, 1400, 1800], '#fffbe8', t, 21961, { sp: 70, sz: 10, a: 0.8, wob: 8 }); moodDark(640, 1200, 560, 1500, '#2a1008', 0.4);
      push(-160, 1900, 1.8); for (let i = 0; i < 4; i++) pastaStrand([[-200, -40 - i * 30], [0, -120 - i * 26], [200, -30 - i * 34], [380, -100 - i * 30]], 22, 1, 21970 + i * 3); pop(); });
    if (t > EV.ps_ans && t < S1.pasta) bubbleTag('ВЕРСИЯ ★', 560, 760, t, EV.ps_ans + 0.05, '#c8321a', 64, -0.05);
    if (t > EV.ps_brk) bubbleTag('БЕКОН + ЯЙЦО + ПАСТА', 600, 900, t, EV.ps_brk + 0.05, '#5a6a2a', 44, 0.04);
  };
  DIR.pasta = {
    outfit: 'minerA', light: { side: -1, rim: '#ffe0a0' }, grade: ['#ffc860', 0.08],
    act: () => [[S0.pasta, 'proud'], [EV.ps_cooks, 'awe'], [EV.ps_pasta, 'shock'], [EV.ps_pasta + 0.5, 'laugh'], [EV.ps_brk, 'grin'], [EV.ps_loop, 'scared'], [EV.ps_loop + 0.6, 'laugh']],
    pose: (t, u, b) => { const p = trackP(t), [x, y] = trackPt(p), [x2, y2] = trackPt(Math.min(1, p + 0.01)), a = Math.atan2(y2 - y, x2 - x), ride = t > EV.ps_pasta - 0.2;
      const wave = !ride, inLoop = p > 0.62 && p < 0.9;
      return Object.assign(b, { x: x + Math.sin(a) * 30, y: y - 30 - Math.cos(a) * 10, s: 0.42, rot: ride ? a : 0, flip: 1, look: ride ? [0.6, 0] : [0.4, -0.3], hand: wave ? [140, -440 + Math.sin(t * 10) * 30] : [120, -460], handF: wave ? [-60, -220] : [-120, -440], tailUp: ride, noHat: inLoop && p > 0.72 && p < 0.84 }); },
    cam: () => [[S0.pasta, 480, 1160, 0.26], [EV.ps_cooks, 560, 1120, 0.24], [EV.ps_pasta, 500, 1180, 0.3, 'x'], [EV.ps_brk, 640, 1260, 0.3], [EV.ps_loop, 820, 1200, 0.32, 'x'], [S1.pasta, 900, 1240, 0.3]]
  };
  TRANS_IN.pasta = { a: 0.2, b: 0.5, runA: 1, fx(k, t, A, B) {          // вилка накручивает кадр спиралью: старый кадр закручивается в центр, новый раскручивается
    scr(() => { ctx.fillStyle = '#f2d47e'; ctx.fillRect(0, 0, W, H); const img = k < 0.5 ? A : B, q = k < 0.5 ? k * 2 : (1 - k) * 2, ang = (k < 0.5 ? 1 : -1) * q * 5, s = 1 - q * 0.9;
      ctx.save(); ctx.translate(540, 960); ctx.rotate(ang); ctx.scale(s, s); ctx.drawImage(img, -540, -960); ctx.restore();
      ctx.strokeStyle = 'rgba(184,134,42,0.7)'; ctx.lineWidth = 18; for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.arc(540, 960, (i + 1) * 160 * q + 40, ang + i, ang + i + 4); ctx.stroke(); }
      if (q > 0.2) { ctx.save(); ctx.translate(540, 960); ctx.rotate(ang); ctx.fillStyle = '#c8ccd2'; for (let i = 0; i < 4; i++) ctx.fillRect(-60 + i * 36, -260, 22, 220); ctx.fillRect(-70, -50, 150, 40); ctx.fillRect(-16, -20, 32, 900); ctx.restore(); } });
  } };
})();
