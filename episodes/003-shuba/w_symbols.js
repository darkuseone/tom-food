/* 003 — `symbols`: «Селёдка — пролетариат, картошка — крестьяне, свёкла — красное знамя. Красиво?» Плакат-агитка в стиле 1920-х: диагонали кремового и красного,
   лучи, крупный шрифт. По словам выезжают персонажи-ингредиенты: селёдка в кепке шагает, картошка в лаптях, свёкла развевается на древке как знамя.
   «Красиво?» — Том-агитатор с рупором приподнимает бровь, плакат слегка «отклеивается» уголком. Переход В сцену: прошлый кадр сворачивается рулоном вверх. */
(() => {
  EV.sy_fish = wtw('s3', 'Селёдка');
  EV.sy_pot = wtw('s3', 'картошка');
  EV.sy_beet = wtw('s3', 'свёкла');
  EV.sy_q = wtw('s3', 'Красиво?');
  KEYW.push('знамя.');

  function poster(t) {                                                 // фон-агитка: диагонали, лучи, рамка
    vgrad(-600, 1600, ['#efe0bc', '#e8d4a8', '#d8c090']); ctx.save(); ctx.globalAlpha = 0.95;
    poly([[-300, 1500], [1400, 200], [1400, 700], [-300, 2000]], { wash: '#b8281e', washA: 1, line: false }); poly([[-300, 400], [700, -300], [900, -300], [-300, 640]], { wash: '#2b2622', washA: 1, line: false });
    for (let i = 0; i < 14; i++) { const a = -2.6 + i * 0.12; poly([[980, 1300], [980 + Math.cos(a) * 1600, 1300 + Math.sin(a) * 1600], [980 + Math.cos(a + 0.05) * 1600, 1300 + Math.sin(a + 0.05) * 1600]], { wash: '#e8b53a', washA: 0.35, line: false }); }
    ctx.restore(); ell(980, 1300, 160, 160, { wash: '#e8b53a', washA: 1, w: 3, col: '#5a3a08' });
    push(540, 300, 1, -0.06); txt('ЛЕГЕНДА', 0, 0, 120, { font: 'Osw', col: '#2b2622' }); pop(); txt('(ни одного документа)', 620, 400, 34, { font: 'Hand', col: '#7a1a10', a: 0.8 });
    const peel = t > EV.sy_q ? sm(clamp((t - EV.sy_q) / 0.5)) : 0; if (peel) poly([[1080, 0], [1080 - 180 * peel, 0], [1080, 180 * peel]], { wash: '#f6ecd0', washA: 1, w: 2, col: '#5a4020' });
  }
  function march(t) {                                                  // персонажи-ингредиенты
    if (t > EV.sy_fish - 0.1) { const k = sm(clamp((t - EV.sy_fish + 0.1) / 0.5)), x = lerp(-300, 330, k), bob = Math.abs(Math.sin(t * 8)) * 16; herring(x, 780 - bob, 1.6, -0.05, { key: 3400, cap: 'kepka', face: 1 });
      for (const sd of [-1, 1]) pencil([[x + sd * 30, 820 - bob], [x + sd * 30 + Math.sin(t * 8) * 20 * sd, 900]], { w: 8, col: '#3a4a5e', pass2: false }); bubbleTag('ПРОЛЕТАРИАТ', x, 620, t, EV.sy_fish + 0.3, '#b8281e', 40, -0.05); }
    if (t > EV.sy_pot - 0.1) { const k = sm(clamp((t - EV.sy_pot + 0.1) / 0.5)), x = lerp(1300, 760, k), bob = Math.abs(Math.sin(t * 7 + 1)) * 14; potato(x, 1060 - bob, 1.9, 0.05, { key: 3401, face: 1, lapti: 1 });
      bubbleTag('КРЕСТЬЯНЕ', x, 900, t, EV.sy_pot + 0.3, '#6b7a2e', 40, 0.05); }
    if (t > EV.sy_beet - 0.1) { const k = popK(t, EV.sy_beet - 0.1, 0.4); push(560, 1230, 1); pencil([[0, 0], [0, -620 * k]], { w: 12, col: '#6a3e1c' }); const wv = Math.sin(t * 5) * 20;
      const fl = shape(spline([[0, -620 * k], [180, -640 * k + wv], [360, -600 * k], [360, -420 * k + wv], [180, -440 * k], [0, -420 * k]], true, 6), { wash: SH.beet, washA: 1, w: 3, col: '#2a0414' }); shadeG(fl.path, 0, 0, 360, 0, SH.beetD, 0.4);
      beet(0, -660 * k, 1.2 * k, 0, { key: 3402, face: 1, noLeaf: 0 }); pop(); bubbleTag('ЗНАМЯ', 740, 640, t, EV.sy_beet + 0.4, '#8a1a4a', 40, -0.03); }
    if (t > EV.sy_q) bubbleTag('КРАСИВО?', 540, 520, t, EV.sy_q, '#2b2622', 70, 0.06);
  }
  WORLD.symbols = (t, u, cat) => {
    lay(10, () => { poster(t); }); lay(2.2, () => { march(t); });
    lay(1, () => { const f = rect(-300, 1420, 1700, 600, { wash: '#2b2622', washA: 1, w: 2, col: '#000', key: 3410 }); cat(); });
  };
  DIR.symbols = {
    outfit: 'agit', light: { side: 1, rim: '#ffe0a0' }, grade: ['#ff6040', 0.08],
    act: () => [[S0.symbols, 'proud'], [EV.sy_fish, 'talk'], [EV.sy_pot, 'grin'], [EV.sy_beet, 'proud'], [EV.sy_q, 'sideeye']],
    pose: (t, u, b) => Object.assign(b, { x: 860, y: 1760, s: 1.15, flip: true, look: t > EV.sy_q ? [-0.2, 0] : [0.6, -0.5], hand: t < EV.sy_q ? [170, -300] : [100, -230], handF: [-90, -220], prop: t < EV.sy_q ? 'megaphone' : undefined, tilt: t > EV.sy_q ? 0.08 : 0 }),
    cam: () => [[S0.symbols, 540, 960, 0.06], [EV.sy_fish, 420, 960, 0.1], [EV.sy_pot, 700, 980, 0.1], [EV.sy_beet, 560, 900, 0.04, 'x'], [EV.sy_q, 620, 1080, 0.18], [S1.symbols, 640, 1100, 0.22]]
  };
  // ---------------------------------------------------------------- переход: прошлый кадр сворачивается рулоном вверх
  TRANS_IN.symbols = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const y = H * (1 - Math.pow(k, 1.3)), R = 30 + 50 * k; const P = new Path2D(); P.rect(0, 0, W, y);
    inPath(P, () => drawBuf(A, 1, 540, 960)); scr(() => { if (y > -R) { const c = rect(-10, y - R, W + 20, R * 2, { wash: '#efe0bc', washA: 1, w: 4, col: '#5a4020' }); shadeG(c.path, 0, y + R, 0, y - R, '#8a6a3a', 0.6); ell(-10, y, 12, R, { wash: '#c8a868', washA: 1, w: 3 }); } });
  } };
})();
