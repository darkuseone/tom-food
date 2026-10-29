/* 002 — `today` + `button`: сегодня. Тёплое кафе вечером: на кирпичной стене — салфетка-карта, где по словам загораются пятна соуса-точки:
   Испания «ensaladilla rusa», Италия «insalata russa», Греция «ρώσικη σαλάτα», Турция «rus salatası», Иран «salad olivieh» — везде «русский салат» (или «оливье»).
   «Рекорд — почти две тонны» — справа выезжает гигантская миска с крошечными поварами на лестнице и ценником «≈ 2 ТОННЫ».
   «А оливки не ищи: Оливье — это фамилия» — ХИРО-ШОТ: хрустальная салатница крупно, блики майонеза, пар; Том в худи торжественно кладёт сверху одну оливку
   (петля к хуку), рядом карточка-визитка «OLIVIER». `button`: Том в камеру — «Пиши блюдо — откусим!», хрум огурчиком.
   Переходы: В `today` — скорлупа: кадр раскалывается по зигзагу на две половинки; В `button` — отражение в ложке растёт на весь кадр. */
(() => {
  EV.td_spain = wtw('t1', 'Испании');
  EV.td_greece = wtw('t1', 'Греции.');
  EV.td_rec = wtw('t1', 'Рекорд');
  EV.td_tons = wtw('t1', 'тонны!');
  EV.td_ol = LS('t2') + 0.1;
  EV.td_put = wtw('t2', 'Оливье');
  EV.td_fam = wtw('t2', 'фамилия.');
  EV.bt_bite = LF('x1', 0.82);
  KEYW.push('«русский', 'тонны!', 'фамилия.', 'откусим!');

  const SPOTS = [['ИСПАНИЯ', 'ensaladilla rusa', 250, 640, 'td_spain'], ['ИТАЛИЯ', 'insalata russa', 470, 560, 'td_spain', 0.35], ['ГРЕЦИЯ', 'ρώσικη σαλάτα', 620, 660, 'td_greece'],
    ['ТУРЦИЯ', 'rus salatası', 790, 600, 'td_greece', 0.3], ['ИРАН', 'salad olivieh', 930, 720, 'td_greece', 0.6]];
  function cafe(t) {                                                    // кирпич, лампы-эдисоны, полка с банками, окно на вечернюю улицу
    vgrad(-500, 1600, ['#2a1a14', '#4a2a1e', '#5a3424']); for (let y = -200; y < 1400; y += 46) for (let x = -400; x < 1500; x += 100) rect(x + (y / 46 % 2) * 50, y, 100, 46, { wash: '#8a4a32', washA: 0.55, w: 1, col: '#2a1008', a: 0.4 });
    for (const x of [80, 1000]) { pencil([[x, -200], [x, 120]], { w: 3, col: '#1a1a1a', pass2: false }); ell(x, 150, 22, 32, { wash: '#ffd890', washA: 0.9, w: 2, col: '#6a4a1a' }); glow(x, 150, 260 * flick(t, x), 'rgba(255,200,110,1)', 0.45); }
  }
  function napkinMap(t) {                                               // салфетка-карта: море, берега-кляксы, пунктир, пятна соуса по словам
    push(560, 640, 1, -0.02); ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 24; ctx.shadowOffsetY = 10; ctx.fillStyle = '#f6efe0'; ctx.fillRect(-480, -360, 960, 640); ctx.restore();
    const n = rect(-480, -360, 960, 640, { wash: '#f6efe0', washA: 1, w: 2.4, col: '#8a7a5a', key: 9600 }); for (let i = 0; i < 24; i++) { ell(-480 + i * 41.7, -360, 20, 9, { wash: '#f6efe0', washA: 1, w: 1.4, col: '#b8a888' }); ell(-480 + i * 41.7, 280, 20, 9, { wash: '#f6efe0', washA: 1, w: 1.4, col: '#b8a888' }); }
    ctx.save(); ctx.clip(n.path); ctx.globalAlpha = 0.35; ctx.fillStyle = '#9ac0d8'; ctx.fillRect(-480, -360, 960, 640); ctx.restore();
    const land = [[[-460, -60], [-380, -120], [-280, -100], [-250, -10], [-300, 60], [-420, 70]], [[-200, -260], [80, -300], [440, -250], [460, -60], [300, -40], [200, -100], [60, -80], [-60, -130], [-160, -150]],
      [[-120, -110], [-60, -90], [-40, -10], [0, 60], [-30, 70], [-80, -20], [-120, -60]], [[40, -40], [90, -60], [120, 20], [80, 90], [50, 30]], [[150, -70], [330, -80], [360, -10], [200, 0], [140, -30]], [[340, -20], [460, -10], [470, 160], [360, 140], [330, 40]]];
    for (const L of land) { const p = blob(L, { wash: '#efe0b8', washA: 1, w: 2.4, col: '#6a5232' }); hatch(p.path, p.bb, { gap: 10, a: 0.15, col: '#8a6a3a', ang: 0.9, key: 9601 }); }
    pencil(spline([[-80, -200], [-300, -40], [-80, -40], [60, 0], [240, -40], [400, 60]], false, 8), { w: 3, col: '#d9482b', a: 0.0001, pass2: false });
    for (const [c, nm, x, y, ev, d] of SPOTS) { const t0 = EV[ev] + (d || 0); if (t < t0) continue; const k = popK(t, t0, 0.35), px = x - 560, py = y - 640;
      push(px, py, k); ctx.save(); ctx.globalAlpha = 0.85; ctx.fillStyle = '#d9482b'; ctx.beginPath(); ctx.ellipse(0, 0, 26, 20, 0.4, 0, 6.3); ctx.fill(); ctx.restore(); ell(0, 0, 10, 10, { wash: '#fff4e0', washA: 1, w: 1.2 });
      txt(c, 0, -40, 26, { font: 'Osw', col: '#2b2622' }); txt(nm, 0, 40, 26, { font: 'Hand', col: '#a8241e' }); pop(); }
    txt('«РУССКИЙ САЛАТ» ПО МИРУ', 0, 230, 40, { font: 'Osw', col: '#2b2622' }); pop();
  }
  function record(t) {                                                  // гигантская миска-рекорд с поварами на лестнице
    if (t < EV.td_rec - 0.3 || t > EV.td_ol + 0.6) return; const k = sm(clamp((t - EV.td_rec + 0.3) / 0.5)) * (1 - sm(clamp((t - EV.td_ol) / 0.6))); push(lerp(-700, 330, k), 1300, 0.9);
    const b = shape(spline([[-330, -120], [-300, 40], [0, 110], [300, 40], [330, -120]], false, 8).concat([[330, -120]]), { wash: '#e8eef2', washA: 1, w: 3, col: '#3a4a5a', key: 9620 }); shadeG(b.path, 330, 0, -100, 0, '#8a9aa8', 0.45);
    oliHeap(0, -120, 320, t, 'soviet', 9621); ell(0, -120, 330, 50, { wash: 'rgba(0,0,0,0)', washA: 0, w: 4, col: '#3a4a5a' });
    pencil([[-380, 120], [-260, -260]], { w: 8, col: '#8a6a3a' }); pencil([[-330, 120], [-210, -260]], { w: 8, col: '#8a6a3a' }); for (let i = 0; i < 6; i++) pencil([[-370 + i * 20, 100 - i * 66], [-320 + i * 20, 100 - i * 66]], { w: 6, col: '#8a6a3a' });
    for (const [x, y, s, sd] of [[-250, -200, 0.4, 1], [-80, -260, 0.38, 2], [120, -250, 0.38, 3]]) { human(x, y, s, t, { body: '#f8f5ee', legs: '#3a3a4a', hair: '#3a2a1a', face: 'grin', armL: 'hold', armR: 'up', seed: 170 + sd }); hat20(x, y, s, 'chef'); }
    pop(); if (t > EV.td_tons - 0.1) bubbleTag('≈ 2 ТОННЫ', lerp(-700, 330, k), 1000, t, EV.td_tons - 0.1, '#d9482b', 60, 0.04);
  }
  function counter(t) { const tb = rect(-300, 1460, 1700, 800, { wash: '#6a3a22', washA: 1, w: 3, col: '#1a0a04', key: 9630 }); hatch(tb.path, tb.bb, { gap: 18, a: 0.2, col: '#2a1008', ang: 0.03, key: 9631 }); glow(540, 1560, 500, 'rgba(255,210,140,1)', 0.25); pencil([[-300, 1470], [1400, 1470]], { w: 4, col: '#c8885a', a: 0.6, pass2: false }); }
  function hero(t, x, y, R) {                                           // ХИРО-ШОТ: салатница, пар, блики, оливка сверху, визитка OLIVIER
    if (t < EV.td_ol - 0.4) return; const k = sm(clamp((t - EV.td_ol + 0.4) / 0.6)); push(lerp(x - 700, x, k), y, 1);
    crystalBowl(0, 0, R, t, { seed: 9640 }); for (let i = 0; i < 5; i++) { const kk = (t * 0.55 + i / 5) % 1; pencil(spline([[-120 + i * 60, -R * 0.5 - kk * 300], [-100 + i * 60 + Math.sin(t * 2 + i) * 20, -R * 0.5 - 60 - kk * 300], [-120 + i * 60, -R * 0.5 - 120 - kk * 300]], false, 5), { w: 5, col: '#ffffff', a: 0.4 * (1 - kk), pass2: false }); }
    for (let i = 0; i < 4; i++) glow(-R * 0.4 + i * R * 0.25, -R * 0.4, 14, 'rgba(255,255,255,1)', 0.5 + 0.5 * Math.sin(t * 5 + i * 2));
    if (t > EV.td_put + 0.2) { const kk = clamp((t - EV.td_put - 0.2) / 0.3); olive(0, lerp(-R * 0.9, -R * 0.62, kk * kk), R / 160, 0.3, { stuffed: 1, key: 9641 }); if (kk >= 1) glow(0, -R * 0.62, 50, 'rgba(255,250,200,1)', 0.5); }
    pop();
    if (t > EV.td_fam - 0.2) { const kc = popK(t, EV.td_fam - 0.2, 0.4); push(x + R * 0.95, y + 40, kc, 0.12); rect(-130, -70, 260, 140, { wash: '#f6efe0', washA: 1, w: 2.4, col: '#4a3a2a' }); pencil([[-110, -50], [110, -50]], { w: 2, col: '#c8a050', pass2: false }); txt('OLIVIER', 0, -10, 46, { font: 'Osw', col: '#2b2622' }); txt('фамилия, не оливка', 0, 40, 24, { font: 'Hand', col: '#a8241e' }); pop(); }
  }
  WORLD.today = (t, u, cat) => {
    lay(9, () => { cafe(t); napkinMap(t); haze('#ffc890', 0.04); });
    lay(2.6, () => { record(t); });
    lay(1, () => { cat(); });
    lay(0.92, () => { counter(t); hero(t, 380, 1520, 230); });
  };
  DIR.today = {
    outfit: 'hoodieO', light: { side: -1, rim: '#ffd8a0' }, grade: ['#ff9a60', 0.1],
    act: () => [[S0.today, 'proud'], [EV.td_spain, 'awe'], [EV.td_rec, 'shock'], [EV.td_tons, 'laugh'], [EV.td_ol, 'smug'], [EV.td_fam, 'wink']],
    pose: (t, u, b) => { const put = t > EV.td_put - 0.3 && t < EV.td_put + 0.5;
      return Object.assign(b, { x: 760, y: 1720, s: 1.15, flip: -1, look: t < EV.td_rec ? [0.2, -0.9] : t < EV.td_ol ? [-0.7, -0.3] : t < EV.td_fam ? [0.9, 0.5] : [0, 0], hand: put ? [300, -330] : [180, -260], handF: [-120, -300], prop: t > EV.td_ol - 0.2 && t < EV.td_put + 0.2 ? 'oliveP' : undefined }); },
    cam: () => [[S0.today, 560, 640, 0.22], [EV.td_greece, 640, 680, 0.24], [EV.td_rec, 520, 1060, 0.14, 'x'], [EV.td_ol, 520, 1300, 0.2], [EV.td_fam, 560, 1300, 0.24], [S1.today, 580, 1280, 0.28]]
  };
  WORLD.button = (t, u, cat) => { lay(9, () => { cafe(t); napkinMap(t); }); lay(1, () => cat()); lay(0.92, () => { counter(t); hero(t, 300, 1540, 210); }); };
  DIR.button = {
    outfit: 'hoodieO', light: { side: -1, rim: '#ffd8a0' }, grade: ['#ff9a60', 0.1],
    act: () => [[S0.button, 'grin'], [EV.bt_bite - 0.3, 'smug'], [EV.bt_bite, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1760, s: 1.25, look: [0, 0], hand: t > EV.bt_bite - 0.4 ? [40, -350] : [150, -300], handF: [-130, -330], point: t < EV.bt_bite - 0.4 ? 1 : undefined, prop: t > EV.bt_bite - 0.4 ? (t > EV.bt_bite ? 'pickleB' : 'pickleP') : undefined, tailUp: true }),
    afterCat: (t) => crumbs(700, 1260, t, EV.bt_bite, 14, 33, '#c8e080'),
    cam: () => [[S0.button, 640, 1000, 0.24], [S0.button + 0.5, 660, 1120, 0.32], [DUR, 660, 1120, 0.36]]
  };
  // ---------------------------------------------------------------- В `today`: кадр-скорлупа раскалывается по зигзагу на две половинки
  TRANS_IN.today = { a: 0.2, b: 0.5, runA: 0, fx(k, t, A, B) {
    drawBuf(B, 1.12 - 0.12 * k, 540, 960); const crack = clamp(k / 0.3), open = sm(clamp((k - 0.3) / 0.7)), zz = [];
    for (let i = 0; i <= 16; i++) zz.push([540 + (i % 2 ? 60 : -60) * (i ? 1 : 0), -40 + i * 125]);
    const L = new Path2D(), R = new Path2D(); L.moveTo(-20, -40); zz.forEach(p => L.lineTo(p[0], p[1])); L.lineTo(-20, 2000); L.closePath(); R.moveTo(1100, -40); zz.forEach(p => R.lineTo(p[0], p[1])); R.lineTo(1100, 2000); R.closePath();
    const dx = open * 760, rot = open * 0.25; const ML = new DOMMatrix().translate(-dx, open * 200).rotate(-rot * 57.3), MR = new DOMMatrix().translate(dx, open * 200).rotate(rot * 57.3);
    const L2 = new Path2D(); L2.addPath(L, ML); const R2 = new Path2D(); R2.addPath(R, MR);
    inPath(L2, () => drawBuf(A, 1, 0, 0, 1, null, -dx, open * 200, -rot)); inPath(R2, () => drawBuf(A, 1, 0, 0, 1, null, dx, open * 200, rot));
    scr(() => { if (open < 0.05) pencil(zz.slice(0, Math.ceil(crack * 16) + 1), { w: 6, col: '#2b2622', a: 0.9, pass2: false, gap: false });
      if (open > 0) for (const [M, sd] of [[ML, -1], [MR, 1]]) { ctx.save(); ctx.setTransform(M); ctx.lineWidth = 26; ctx.strokeStyle = '#fbf6ea'; ctx.beginPath(); zz.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.stroke(); ctx.restore(); } });
  } };
  // ---------------------------------------------------------------- В `button`: отражение в ложке растёт на весь кадр
  TRANS_IN.button = { a: 0.15, b: 0.4, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const g = sm(k), rx = lerp(90, 1300, g), ry = lerp(140, 1900, g), cx = 540, cy = lerp(1100, 960, g);
    const P = new Path2D(); P.ellipse(cx, cy, rx, ry, 0, 0, 6.283); inPath(P, () => drawBuf(B, lerp(0.5, 1, g), cx, cy, 1, null, 540 - cx, 960 - cy));
    scr(() => { pencil(ellPts(cx, cy, rx, ry, 0, 0, 60), { w: 10, col: '#c8ccd0', a: 1 - g, pass2: false, gap: false }); glow(cx - rx * 0.4, cy - ry * 0.5, rx * 0.25, 'rgba(255,255,255,1)', 0.5 * (1 - g)); pencil([[cx, cy + ry], [cx, cy + ry + 900]], { w: 30 * (1 - g), col: '#c8ccd0', a: 1 - g, pass2: false }); });
  } };
})();
