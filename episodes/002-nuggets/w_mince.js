/* 002 — `mince`: «Задача первая: фарш без оболочки разваливается. Спасли соль, уксус и сухое молоко.» Ночная лаборатория под настольной лампой:
   пробковая доска с чертежами курицы и записками, сосиска в оболочке под стеклом («им-то легко»). Том держит сырую палочку — на «разваливается» фарш сыплется из лап.
   «соль» — солонка трясётся над миской, «уксус» — бутыль льёт струю, «сухое молоко» — банка выдыхает белое облако; фарш собирается в ровную палочку и светится.
   Переход В сцену: мясорубка — кадр аукциона/лаборатории выдавливается полосками-«фаршем» вправо. */
(() => {
  EV.mc_skin = wtw('s2', 'оболочки');
  EV.mc_fall = wtw('s2', 'разваливается.');
  EV.mc_salt = wtw('s2', 'соль,');
  EV.mc_vin = wtw('s2', 'уксус');
  EV.mc_milk = wtw('s2', 'сухое');
  EV.mc_ok = LE('s2') - 0.45;
  SHAKES.push([EV.mc_fall + 0.15, 0.2, 8]);
  KEYW.push('разваливается.');

  function wall(t) {                                                   // ночь: тёмно-зелёная стена, пробковая доска с записками, окно с луной
    vgrad(-600, 1600, ['#0e1e1a', '#1a3a30', '#24463a']);
    const w = rect(720, 140, 300, 340, { wash: '#1a2a44', washA: 1, w: 4, col: '#0a0a0a', key: 2200 }); ctx.save(); ctx.clip(w.path); vgrad(140, 480, ['#14204a', '#3a4a7a']); ell(900, 240, 40, 40, { wash: '#f6f0d0', washA: 1, line: false }); glow(900, 240, 120, 'rgba(240,240,200,1)', 0.4);
    motes(20, [720, 140, 1020, 480], '#ffffff', t, 2201, { sp: 60, sz: 3, a: 0.9 }); for (let i = 0; i < 5; i++) rect(730 + i * 60, 400 - (i * 23 % 50), 50, 100, { wash: '#0a1020', washA: 1, line: false }); ctx.restore(); pencil([[870, 140], [870, 480]], { w: 6, col: '#0a0a0a', pass2: false });
    const c = rect(60, 560, 620, 440, { wash: '#b8844a', washA: 1, w: 6, col: '#4a2a10', key: 2202 }); ctx.save(); ctx.clip(c.path); const r = rng(2203); for (let i = 0; i < 300; i++) ell(60 + r() * 620, 560 + r() * 440, 2, 1.4, { wash: '#7a4a1a', washA: 0.5, line: false }); ctx.restore();
    const notes = [[110, 600, '#f6f0a0', 'КОЖУ — ПРОЧЬ'], [330, 590, '#f6c8c8', 'держится??'], [500, 610, '#c8e8f6', 'NaCl 2%'], [120, 800, '#f6f0a0', '−10°F'], [470, 820, '#d8f6c8', 'дёшево!']];
    notes.forEach(([x, y, col, s], i) => { push(x + 70, y + 70, 1, (i % 2 ? 0.06 : -0.05)); rect(-70, -70, 150, 130, { wash: col, washA: 1, w: 2, col: '#3a3020' }); txt(s, 4, 0, 26, { font: 'Hand', col: '#2a2010' }); ell(0, -62, 8, 8, { wash: '#d9482b', washA: 1, w: 1.4 }); pop(); });
    push(330, 880, 1); blob([[-100, 40], [-110, -20], [-60, -70], [40, -76], [100, -40], [110, 30]], { line: true, w: 2.4, col: '#1a1a1a' }); for (const [x, y] of [[-40, -20], [40, -10], [0, 30]]) pencil([[x - 30, y], [x + 30, y + 10]], { w: 2, col: '#d9482b', pass2: false }); txt('ГРУДКА', -10, -30, 22, { font: 'Hand', col: '#1a1a1a' }); pop();
    pencil(spline([[180, 600], [330, 680], [520, 640]], false, 6), { w: 2, col: '#d9482b', a: 0.8, pass2: false });
  }
  function lamp(t) { const x = 900, y = 620; pencil([[x + 120, y + 640], [x + 60, y + 200], [x, y]], { w: 12, col: '#2a5a4a' }); const sh = poly([[x - 90, y - 10], [x + 60, y - 70], [x + 100, y + 30], [x - 40, y + 90]], { wash: '#2a7a64', washA: 1, w: 3, col: '#0a2a20', key: 2210 });
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; const g = ctx.createLinearGradient(x, y, x - 400, y + 900); g.addColorStop(0, 'rgba(255,230,160,0.35)'); g.addColorStop(1, 'rgba(255,230,160,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(x - 60, y + 60); ctx.lineTo(x + 60, y + 40); ctx.lineTo(x + 160, y + 1100); ctx.lineTo(x - 900, y + 1100); ctx.fill(); ctx.restore(); glow(x - 10, y + 60, 120, 'rgba(255,240,180,1)', 0.8); }
  function bench(t) {                                                  // стол: сосиска под стеклянным колпаком (оболочка), миска для фарша, банки
    const b = rect(-300, 1300, 1700, 700, { wash: '#6a4a2a', washA: 1, w: 3, col: '#1a0a04', key: 2220 }); shadeG(b.path, 540, 1300, 540, 1900, '#1a0a04', 0.5); for (let i = 0; i < 12; i++) pencil([[-300, 1330 + i * 50], [1400, 1340 + i * 50]], { w: 1.6, col: '#3a2410', a: 0.4, pass2: false });
    push(860, 1300, 1); ell(0, 0, 120, 20, { wash: '#efe8dc', washA: 1, w: 2.2, col: '#3a3a3a' }); const s = blob([[-90, -16], [-96, -40], [-60, -56], [60, -56], [96, -40], [90, -16], [60, -6], [-60, -6]], { wash: '#b8603a', washA: 1, w: 2.4, col: '#3a1408', key: 2221 }); shadeG(s.path, 0, -60, 0, -6, '#ffb080', 0.4); ell(-30, -44, 30, 6, { wash: '#ffd0a0', washA: 0.8, line: false });
    for (const sd of [-1, 1]) pencil([[sd * 92, -30], [sd * 110, -36], [sd * 106, -24]], { w: 3, col: '#3a1408', pass2: false });
    const d = shape(spline([[-130, 0], [-130, -110], [0, -170], [130, -110], [130, 0]], false, 8), { line: true, w: 3, col: '#a8c8d8' }); ctx.save(); ctx.globalAlpha = 0.15; ctx.fillStyle = '#cfeaf6'; ctx.fill(d.path); ctx.restore(); pencil(spline([[-90, -100], [-60, -140], [-10, -160]], false, 5), { w: 6, col: '#ffffff', a: 0.6, pass2: false }); pop();
    if (t > EV.mc_skin) { bubbleTag('ОБОЛОЧКА', 860, 1060, t, EV.mc_skin, '#2b2622', 36, 0.04); }
    push(250, 1330, 1); const bw = shape(spline([[-170, -100], [-150, 30], [0, 70], [150, 30], [170, -100]], false, 8), { wash: '#d8eef4', washA: 0.4, w: 3, col: '#3a5a64' }); mince(0, -60, 1.1, t, { key: 2222, crumble: 0 }); if (t > EV.mc_ok) { glow(0, -70, 160, 'rgba(255,240,180,1)', 0.5); nugget(0, -110, 0.9, 0, { kind: 'stick', key: 2223, raw: 1 }); }
    ell(0, -100, 170, 28, { line: true, w: 3, col: '#3a5a64' }); pencil(spline([[-130, -60], [-120, 0], [-80, 30]], false, 5), { w: 6, col: '#ffffff', a: 0.6, pass2: false }); pop();
  }
  function shaker(t) {                                                 // соль: солонка влетает и трясётся над миской
    if (t < EV.mc_salt - 0.3) return; const k = sm(clamp((t - EV.mc_salt + 0.3) / 0.3)), out = t > EV.mc_vin + 0.4 ? sm(clamp((t - EV.mc_vin - 0.4) / 0.3)) : 0, x = lerp(-200, 210, k) - out * 500, y = 1000 + Math.sin(t * 30) * 12;
    push(x, y, 1, 2.6 + Math.sin(t * 30) * 0.15); const s = rect(-34, -60, 68, 100, { wash: '#f2f6f8', washA: 0.8, w: 2.6, col: '#3a4a54', key: 2230 }); ctx.save(); ctx.clip(s.path); ctx.fillStyle = '#ffffff'; ctx.fillRect(-34, -10, 68, 50); ctx.restore(); blob([[-36, -60], [-30, -90], [30, -90], [36, -60]], { wash: '#c8ccd0', washA: 1, w: 2.4, col: '#3a4a54' }); txt('S', 0, 10, 40, { font: 'Osw', col: '#3a4a54' }); pop();
    for (let i = 0; i < 24; i++) { const r = rng(2231 + i), kk = (t * 2.4 + r()) % 1; ell(x + 40 + (r() - 0.5) * 40 + kk * 20, y + 60 + kk * 220, 3, 3, { wash: '#ffffff', washA: 1 - kk, line: false }); }
  }
  function vinegar(t) {                                                // уксус: бутыль наклоняется, золотистая струя
    if (t < EV.mc_vin - 0.3) return; const k = sm(clamp((t - EV.mc_vin + 0.3) / 0.35)), out = t > EV.mc_milk + 0.4 ? sm(clamp((t - EV.mc_milk - 0.4) / 0.3)) : 0, x = lerp(-300, 360, k) - out * 700, y = 880, a = lerp(0, 2.2, k);
    push(x, y, 1.2, a); const b = shape(spline([[-34, 90], [-36, -10], [-14, -50], [-12, -110], [12, -110], [14, -50], [36, -10], [34, 90]], true, 6), { wash: '#e8d890', washA: 0.75, w: 2.6, col: '#3a3410', key: 2240 }); rect(-14, -136, 28, 26, { wash: '#2a2a2a', washA: 1, w: 2 });
    rect(-30, 0, 60, 50, { wash: '#f6f0d8', washA: 1, w: 1.6, col: '#3a3410' }); txt('УКСУС', 0, 24, 18, { font: 'Osw', col: '#a8241e' }); glow(-16, -20, 20, 'rgba(255,255,255,1)', 0.6); pop();
    if (k > 0.9 && out < 0.2) { pencil(spline([[x + 130, y + 40], [x + 60, y + 250], [260, 1230]], false, 8), { w: 12, col: '#e8d070', a: 0.85, pass2: false }); pencil(spline([[x + 126, y + 40], [x + 56, y + 250], [256, 1230]], false, 8), { w: 3, col: '#ffffff', a: 0.6, pass2: false }); }
  }
  function milk(t) {                                                   // сухое молоко: жестяная банка, белое облако
    if (t < EV.mc_milk - 0.3) return; const k = sm(clamp((t - EV.mc_milk + 0.3) / 0.35)), x = lerp(-300, 330, k), y = 920;
    push(x, y, 1.1, lerp(0, 2.0, k)); const c = rect(-60, -80, 120, 160, { wash: '#4a7ab8', washA: 1, w: 2.6, col: '#1a2a44', key: 2250 }); metalG(c.path, -30, -40, 160, '#a8c8f0', '#4a7ab8', '#1a2a44'); rect(-60, -20, 120, 60, { wash: '#f6f0e0', washA: 1, w: 1.6, col: '#1a2a44' }); txt('DRY MILK', 0, 10, 22, { font: 'Osw', col: '#1a2a44' }); pop();
    if (k > 0.8) { const kk = clamp((t - EV.mc_milk - 0.05) / 1.4); for (let i = 0; i < 16; i++) { const r = rng(2251 + i); ell(250 + (r() - 0.5) * 300 * (0.3 + kk), 1180 - kk * 260 * r() - 40, 60 + kk * 90 * r(), 40 + kk * 60 * r(), { wash: '#ffffff', washA: 0.5 * (1 - kk * 0.6), line: false }); } }
  }
  function falling(t, P) { if (t < EV.mc_fall - 0.1 || t > EV.mc_salt + 0.6) return; const k = t - EV.mc_fall + 0.1, hx = P.x + 100 * P.s, hy = P.y - 300 * P.s;    // фарш сыплется из лап
    for (let i = 0; i < 26; i++) { const r = rng(2260 + i), kk = (k * 0.9 + r()) % 1, x = hx + (r() - 0.5) * 140 + (r() - 0.5) * 160 * kk, y = hy + 10 + 420 * kk * kk; if (k < 0.3 && r() > k * 3) continue; push(x, y, 1, r() * 3 + k * 4); pencil(spline([[-14, 0], [0, -6], [14, 2]], false, 4), { w: 10, col: i % 3 ? FN.raw : '#f2c0b8', pass2: false }); pop(); } }
  WORLD.mince = (t, u, cat) => {
    lay(16, () => { wall(t); }); lay(3, () => { lamp(t); });
    lay(1.3, () => { bench(t); });
    lay(1, () => { cat(); });
    lay(0.85, () => { shaker(t); vinegar(t); milk(t); });
  };
  DIR.mince = {
    outfit: 'labcoat', light: { side: 1, rim: '#ffe6a0' }, grade: ['#ffcc80', 0.1],
    act: () => [[S0.mince, 'suspicious'], [EV.mc_skin, 'sideeye'], [EV.mc_fall, 'shock'], [EV.mc_fall + 0.5, 'annoyed'], [EV.mc_salt, 'awe'], [EV.mc_milk, 'grin'], [EV.mc_ok, 'proud']],
    pose: (t, u, b) => { const hold = t < EV.mc_fall + 0.05 || t > EV.mc_ok;
      return Object.assign(b, { x: 620, y: 1720, s: 1.25, look: t < EV.mc_fall ? [0.4, -0.6] : t < EV.mc_salt ? [0.3, 0.6] : [-0.8, 0.2], hand: hold ? [100, -300] : [110, -240 + Math.sin(t * 12) * 10], handF: [-90, -250],
        prop: hold ? 'rawStickP' : undefined, tailUp: t > EV.mc_ok, sweat: t > EV.mc_fall && t < EV.mc_salt }); },
    afterCat: (t, u, P) => falling(t, P),
    cam: () => [[S0.mince, 620, 1100, 0.34], [EV.mc_skin, 760, 1100, 0.22], [EV.mc_fall, 600, 1180, 0.36, 'x'], [EV.mc_salt, 420, 1150, 0.16], [EV.mc_ok, 420, 1180, 0.2], [S1.mince, 440, 1150, 0.26]]
  };
  // ---------------------------------------------------------------- переход: мясорубка — кадр выдавливается полосками-«фаршем»
  TRANS_IN.mince = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    drawBuf(B, 1.08 - 0.08 * k, 540, 960); const n = 24, h = H / n;
    for (let i = 0; i < n; i++) { const r = rng(2290 + i), d = Math.pow(clamp(k * 1.25 - r() * 0.25), 2) * (1300 + r() * 500), wy = Math.sin(i * 1.3 + k * 8) * 18 * k, y0 = i * h;
      if (d > 1500) continue; const P = new Path2D(); P.rect(d, y0 + wy, W + 40, h + 1); inPath(P, () => drawBuf(A, 1, 540, 960, 1, null, d, wy));
      scr(() => { ell(d, y0 + h / 2 + wy, 14, h / 2, { wash: FN.raw, washA: 1, w: 1.6, col: FN.rawD }); }); }
  } };
})();
