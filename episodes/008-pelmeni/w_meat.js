/* 008 — `meat`: «Начинка — говядина, свинина и баранина. Три мяса в одном ухе!» ТОМ-МАЛЫШ внутри пельменя: над ним купол теста (свет просвечивает, видны
   защипы шва), под ногами — холмы фарша. На «говядина» поднимается тёмно-красный холм и вылетает значок-коровка, на «свинина» — розовый с хрюшкой, на «баранина» —
   коричневый с барашком; лук и перец сыплются, как конфетти. На «Три мяса» холмы смешиваются, Том-малыш втыкает флажок «3». Переход В сцену: нож разрезает кадр
   пополам, половинки разъезжаются. */
(() => {
  EV.mt_beef = wtw('s6', 'говядина,');
  EV.mt_pork = wtw('s6', 'свинина');
  EV.mt_lamb = wtw('s6', 'баранина.');
  EV.mt_three = wtw('s6', 'Три');
  SHAKES.push([EV.mt_three + 0.2, 0.2, 8]);
  KEYW.push('ухе!');

  const MEAT = [['#8a2a1a', 'mt_beef', 'cow'], ['#e8a0a0', 'mt_pork', 'pig'], ['#9a6a3a', 'mt_lamb', 'sheep']];
  function dome(t) { vgrad(-600, 2400, ['#fff4dc', '#f6e2b8', '#e8cc98']); glow(540, 200, 700, 'rgba(255,250,230,1)', 0.6); for (let i = 0; i < 9; i++) pencil(spline([[-300 + i * 200, -200], [-200 + i * 200, 400], [-260 + i * 200, 1000]], false, 6), { w: 3, col: '#d8b880', a: 0.5, pass2: false });
    for (let i = 0; i < 12; i++) { const x = -200 + i * 130, y = 160 + Math.sin(i * 0.7) * 40; pencil(spline([[x, y], [x + 30, y + 50], [x + 70, y + 20]], false, 4), { w: 5, col: '#c8a060', a: 0.7, pass2: false }); } for (let i = 0; i < 20; i++) { const r = rng(10300 + i); ell(r() * 1200 - 60, r() * 900, 10 + r() * 20, 6 + r() * 10, { wash: '#ffffff', washA: 0.15, line: false }); } }
  function icon(kind, x, y, s) { push(x, y, s); if (kind === 'cow') { ell(0, 0, 50, 40, { wash: '#f6f2ea', washA: 1, w: 2.4, col: '#2a2a2a' }); ell(-14, -6, 14, 10, { wash: '#2a2a2a', washA: 1, line: false }); ell(0, 22, 26, 14, { wash: '#f0b0b0', washA: 1, w: 1.6 }); for (const sd of [-1, 1]) poly([[sd * 30, -30], [sd * 54, -50], [sd * 40, -24]], { wash: '#e8d8a8', washA: 1, w: 1.6 }); }
    else if (kind === 'pig') { ell(0, 0, 50, 42, { wash: '#f8b8c0', washA: 1, w: 2.4, col: '#8a3a4a' }); ell(0, 14, 20, 14, { wash: '#f090a0', washA: 1, w: 1.6, col: '#8a3a4a' }); for (const sd of [-1, 1]) { ell(sd * 6, 14, 3, 4, { wash: '#8a3a4a', washA: 1, line: false }); poly([[sd * 20, -36], [sd * 40, -54], [sd * 40, -26]], { wash: '#f8b8c0', washA: 1, w: 1.6, col: '#8a3a4a' }); } }
    else { for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; ell(Math.cos(a) * 34, Math.sin(a) * 28 - 6, 20, 20, { wash: '#f6f2ea', washA: 1, w: 1.6, col: '#8a8a8a' }); } ell(0, 8, 26, 22, { wash: '#3a3a3a', washA: 1, w: 1.6 }); }
    for (const sd of [-1, 1]) ell(sd * 14, kind === 'sheep' ? 2 : -8, 4, 5, { wash: kind === 'sheep' ? '#ffffff' : '#1a1a1a', washA: 1, line: false }); pop(); }
  function filling(t) { const mix = clamp((t - EV.mt_three) / 0.8); for (let i = 0; i < 3; i++) { const [col, ev] = MEAT[i]; const k = sm(clamp((t - EV[ev] + 0.1) / 0.4)); if (k <= 0) continue; const x = 200 + i * 340, h = 320 * k;
      shape(spline([[x - 300, 1700], [x - 200, 1700 - h * 0.6], [x - 60, 1700 - h], [x + 80, 1700 - h * 0.9], [x + 220, 1700 - h * 0.5], [x + 320, 1700]], true, 6), { wash: lerpC(col, '#8a4a2a', mix * 0.6), washA: 1, w: 3, col: '#3a1408', key: 10310 + i });
      for (let q = 0; q < 10; q++) { const r = rng(10320 + i * 20 + q); pencil(spline([[x - 160 + r() * 320, 1680 - r() * h * 0.7], [x - 150 + r() * 320, 1670 - r() * h * 0.7], [x - 140 + r() * 320, 1680 - r() * h * 0.7]], false, 4), { w: 3, col: lerpC(col, '#ffffff', 0.3), a: 0.7, pass2: false }); }
      if (t < EV.mt_three + 0.6) icon(MEAT[i][2], x, 1700 - h - 100 - Math.sin(t * 4 + i) * 10, popK(t, EV[ev], 0.4)); }
    for (let i = 0; i < 24; i++) { const r = rng(10350 + i), y = ((t * 0.3 + r()) % 1) * 1500; if (t > EV.mt_beef) ell(r() * 1080, y, i % 2 ? 6 : 10, i % 2 ? 6 : 4, { wash: i % 2 ? '#2a2420' : '#f2f0e0', washA: 0.8, line: false }); }
    if (t > EV.mt_three + 0.3) { const p = popK(t, EV.mt_three + 0.3, 0.4); push(540, 1260, p); pencil([[0, 0], [0, -200]], { w: 6, col: '#6a4a2a' }); poly([[0, -200], [120, -170], [0, -140]], { wash: '#d9282b', washA: 1, w: 2 }); txt('3', 50, -158, 40, { font: 'Osw', col: '#ffffff' }); pop(); } }
  WORLD.meat = (t, u, cat) => { lay(6, () => dome(t)); lay(1, () => { filling(t); cat(); }); };
  DIR.meat = {
    outfit: 'chef', light: { side: 1, rim: '#fff4d0' }, grade: ['#e8b070', 0.06],
    act: () => [[S0.meat, 'awe'], [EV.mt_beef, 'talk'], [EV.mt_pork, 'grin'], [EV.mt_lamb, 'awe'], [EV.mt_three, 'laugh']],
    pose: (t, u, b) => { const k = clamp((t - EV.mt_beef) / 1.2); return Object.assign(b, { x: lerp(540, 600, k), y: lerp(1700, 1440, sm(k)), s: 0.6, look: t < EV.mt_three ? [Math.sin(t * 1.5) * 0.7, 0.3] : [0, 0], hand: [140, -380], handF: [-140, -380], tailUp: true }); },
    cam: () => [[S0.meat, 540, 1000, 0.06], [EV.mt_pork, 560, 1200, 0.12], [EV.mt_three, 560, 1200, 0.16, 'x'], [S1.meat, 560, 1220, 0.18]]
  };
  // ---------------------------------------------------------------- переход: нож разрезает кадр пополам, половинки разъезжаются
  TRANS_IN.meat = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const cut = clamp(k / 0.35), q = sm(clamp((k - 0.35) / 0.65)), d = q * 700; drawBuf(B, 1, 540, 960); scr(() => { for (const sd of [-1, 1]) { ctx.save(); ctx.beginPath(); if (sd < 0) ctx.rect(0, 0, W / 2, H); else ctx.rect(W / 2, 0, W / 2, H); ctx.clip(); ctx.translate(sd * d, 0); ctx.drawImage(A, 0, 0); ctx.restore(); }
      if (q < 0.05) { const y = lerp(-300, H + 100, cut); push(540, y, 3, 0); PROPS.knifeLongP ? PROPS.knifeLongP() : null; pop(); pencil([[540, 0], [540, y - 200]], { w: 4, col: '#ffffff', a: 0.8, pass2: false }); } });
  } };
})();
