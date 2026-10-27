/* 009 — `eat`: «Едят руками: отрываешь бортик и мешаешь им желток с маслом.» Летняя терраса кафе в Батуми: вечернее море, пальмы, фонари бульвара, колесо обозрения
   вдали, официант с подносом, пара за соседним столиком (у девушки тянется сыр от лодочки ко рту). Том-отпускник в рубашке с пальмами: на «отрываешь» отрывает кончик
   (сыр тянется нитью от лапы), на «мешаешь» кружит бортиком в желтке — желток растекается, масло тает. Пауза-гэг: капля желтка срывается с бортика и падает на фартук —
   Том замирает, смотрит вниз (шок), потом машет лапой и смеётся (трофей №9). Переход В сцену: кадр рвётся рваным краем, как бортик хачапури. */
(() => {
  EV.et_tear = wtw('s5', 'отрываешь');
  EV.et_mix = wtw('s5', 'мешаешь');
  EV.et_drop = LE('s5') - 0.1;
  SHAKES.push([EV.et_tear + 0.15, 0.15, 6]);
  KEYW.push('руками:');

  const BX = 400, BY = 1450, BS = 0.95;
  function seaside(t) { vgrad(-600, 900, ['#f2a070', '#f6c090', '#f8dcb0']); ell(300, 760, 90, 90, { wash: '#ffd890', washA: 1, line: false }); glow(300, 760, 300, 'rgba(255,200,120,1)', 0.5);
    rect(-300, 820, 1700, 300, { wash: '#2a6a8a', washA: 1, line: false, key: 11000 }); for (let i = 0; i < 18; i++) { const x = ((i * 110 + t * 20) % 1700) - 300; pencil([[x, 840 + (i % 4) * 30], [x + 50, 840 + (i % 4) * 30]], { w: 3, col: '#ffe0b0', a: 0.6, pass2: false }); }
    push(880, 760, 1); ell(0, 0, 90, 90, { line: true, w: 4, col: '#4a4a5a' }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283 + t * 0.2; pencil([[0, 0], [Math.cos(a) * 90, Math.sin(a) * 90]], { w: 1.6, col: '#4a4a5a', pass2: false }); rect(Math.cos(a) * 90 - 8, Math.sin(a) * 90 - 6, 16, 12, { wash: ['#e84a4a', '#f2c838', '#4ab0e0'][i % 3], washA: 1, line: false }); } pencil([[-40, 120], [0, 0], [40, 120]], { w: 4, col: '#4a4a5a', pass2: false }); pop();
    for (const px of [-60, 700, 1140]) { push(px, 1080, 1); pencil(spline([[0, 0], [10, -200], [-6, -420]], false, 6), { w: 18, col: '#7a5a3a' }); for (let i = 0; i < 7; i++) { const a = -2.8 + i * 0.5 + Math.sin(t * 1.5 + i) * 0.05; blob([[-6, -420], [Math.cos(a) * 90, -420 + Math.sin(a) * 50 - 20], [Math.cos(a) * 170, -400 + Math.sin(a) * 60 + 30], [Math.cos(a) * 80, -410 + Math.sin(a) * 40 + 10]], { wash: '#3a8a3a', washA: 1, w: 1.6, col: '#1a4a1a' }); } pop(); }
    for (let i = 0; i < 5; i++) { push(-100 + i * 300, 1080, 1); pencil([[0, 0], [0, -220]], { w: 6, col: '#2a2a2a' }); ell(0, -230, 18, 18, { wash: '#fff2c0', washA: 1, w: 2, col: '#2a2a2a' }); glow(0, -230, 70, 'rgba(255,230,160,1)', 0.5); pop(); } rect(-300, 1080, 1700, 400, { wash: '#c8b49a', washA: 1, w: 2, col: '#6a5a4a', key: 11010 }); }
  function guests(t) { const wk = (t * 0.18) % 1; human(lerp(1300, -200, wk), 1290, 1.0, t, { body: '#f6f4ee', hair: '#1a1a1a', face: 'smile', armL: 'down', armR: 'up', seed: 1090, legs: '#1a1a1a', look: -0.4, flip: -1 }); push(lerp(1300, -200, wk) + 80, 1290 - 330 - 110, 0.8); ell(0, 0, 90, 14, { wash: '#c8c8d0', washA: 1, w: 2 }); adjaruli(0, -20, 0.24, t, { steam: true }); pop();
    rect(920, 1240, 300, 24, { wash: '#f6f4ee', washA: 1, w: 2, col: '#6a6a6a' }); human(900, 1340, 1.0, t, { body: '#e8486a', hair: '#3a1a0a', face: 'grin', armL: 'hold', armR: 'up', seed: 1091, long: 1, look: 0.4 }); human(1140, 1340, 1.0, t, { body: '#3a6a8a', hair: '#2a1a0a', face: 'smile', armL: 'hold', armR: 'hold', seed: 1092, flip: -1, look: -0.5 });
    const sx = 1020, sy = 1225, mx = 930, my = 1340 - 330 * 1.0 + 70; pencil(spline([[sx, sy], [(sx + mx) / 2, sy + 30 + Math.sin(t * 3) * 10], [mx, my]], false, 6), { w: 4, col: KHP.cheese, pass2: false }); adjaruli(1040, 1236, 0.26, t, { steam: false }); }
  function table(t) { rect(-300, 1480, 1700, 60, { wash: '#f6f4ee', washA: 1, w: 3, col: '#6a6a6a', key: 11020 }); for (let i = 0; i < 18; i++) rect(-300 + i * 100, 1480, 50, 60, { wash: '#4ab0c0', washA: 0.25, line: false }); rect(-300, 1540, 1700, 600, { wash: '#8a6a4a', washA: 1, w: 2, col: '#2a1408' });
    ell(BX, BY + 30, 250, 40, { wash: '#f6f4ee', washA: 1, w: 2, col: '#6a6a7a' }); adjaruli(BX, BY, BS, t, { torn: t > EV.et_tear + 0.1, mix: clamp((t - EV.et_mix) / 1.4), melt: clamp((t - EV.et_mix + 0.4) / 1.6) });
    push(150, 1460, 1); rect(-24, -90, 48, 90, { wash: '#a8d8e8', washA: 0.6, w: 2, col: '#4a6a7a' }); rect(-20, -60, 40, 56, { wash: '#f2d870', washA: 0.8, line: false }); pop(); }
  function hands(t, P) { const hx = P.x - 170 * P.s, hy = P.y - 300 * P.s; const tipX = BX + 230 * BS * 0.74, tipY = BY - 10;
    if (t > EV.et_tear && t < EV.et_mix) pencil(spline([[tipX, tipY], [(tipX + hx) / 2, (tipY + hy) / 2 + 40], [hx, hy]], false, 6), { w: 6, col: KHP.cheese, pass2: false });
    if (t > EV.et_drop - 0.05 && t < EV.et_drop + 0.5) { const q = clamp((t - EV.et_drop) / 0.35), dx = P.x - 8 * P.s, dy = P.y - 98 * P.s; ell(lerp(hx, dx, q), lerp(hy + 20, dy, q * q), 7, 10, { wash: KHP.yolk, washA: 1, w: 1.4, col: '#a85a08' }); }
    if (t > EV.et_drop + 0.35 && t < EV.et_drop + 1.2) bubbleTag('ОЙ!', P.x - 40 * P.s, P.y - 520 * P.s, t, EV.et_drop + 0.35, '#d9482b', 40, 0.1); }
  WORLD.eat = (t, u, cat) => { lay(14, () => seaside(t)); lay(3.2, () => guests(t)); lay(1, () => { table(t); cat(); }); };
  DIR.eat = {
    outfit: 'beachA', light: { side: -1, rim: '#ffc890' }, grade: ['#f09060', 0.06],
    act: () => [[S0.eat, 'talk'], [EV.et_tear, 'grin'], [EV.et_mix, 'smug'], [EV.et_drop + 0.3, 'shock'], [EV.et_drop + 0.9, 'laugh']],
    pose: (t, u, b) => { const stir = t > EV.et_mix && t < EV.et_drop; const sw = stir ? Math.sin(t * 9) * 26 : 0; const look = t > EV.et_drop + 0.25 && t < EV.et_drop + 0.9;
      return Object.assign(b, { x: 720, y: 1830, s: 1.1, flip: true, look: look ? [0, 0.9] : t < EV.et_drop + 0.9 ? [-0.7, 0.5] : [0, 0], nod: look ? 0.15 : 0,
        hand: t < EV.et_tear - 0.2 ? [120, -300] : stir ? [170 + sw, -290 + Math.cos(t * 9) * 10] : [170, -300], handF: t > EV.et_drop + 0.9 ? [-150, -380] : [-90, -240], prop: t > EV.et_tear ? (t > EV.et_mix ? 'crustYolkP' : 'crustP') : null }); },
    afterCat: (t, u, P) => hands(t, P),
    cam: () => [[S0.eat, 560, 1120, 0.14], [EV.et_tear, 520, 1300, 0.28, 'x'], [EV.et_mix, 500, 1320, 0.34], [EV.et_drop, 640, 1400, 0.36], [EV.et_drop + 0.4, 660, 1440, 0.42, 'x'], [S1.eat, 640, 1400, 0.38]]
  };
  TRANS_IN.eat = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {                 // кадр рвётся рваным краем, как бортик хачапури: левая половина уезжает влево-вниз
    const q = sm(k), pts = []; for (let i = 0; i <= 24; i++) { const r = rng(11030 + i); pts.push([W / 2 + (r() - 0.5) * 120, -40 + i * (H + 80) / 24]); } drawBuf(B, 1, 540, 960);
    for (const sd of [-1, 1]) { ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.moveTo(sd < 0 ? -50 : W + 50, -40); pts.forEach(([x, y]) => ctx.lineTo(x, y)); ctx.lineTo(sd < 0 ? -50 : W + 50, H + 40); ctx.closePath(); ctx.clip();
      ctx.translate(sd * q * 700, q * q * 300 * (sd < 0 ? 1 : 0.4)); ctx.rotate(sd * q * 0.12); ctx.drawImage(A, 0, 0); ctx.restore(); }
    scr(() => { const d = q * 700; pencil(pts.map(([x, y]) => [x - d, y]), { w: 14, col: KHP.crumb, a: 1 - q, pass2: false }); pencil(pts.map(([x, y]) => [x + d, y]), { w: 14, col: KHP.crumb, a: 1 - q, pass2: false }); });
  } };
})();
