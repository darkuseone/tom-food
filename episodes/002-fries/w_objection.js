/* 002 — `objection`: «Протест! Рукописи никто не видел, а картошки там ещё не было.» Тот же зал суда, крупно — стол улик перед кафедрой.
   «Протест!» — Том бьёт молотком; под стеклом витрины «РУКОПИСЬ 1781» — пусто, паутина, пыль; лупа скользит по пустоте.
   «картошки» — справа вразвалку входит картофелина с чемоданом и биркой «1735»: опоздала на полвека; галерея хохочет.
   Переход В сцену: сковорода разворачивается в камеру — чёрное дно закрывает кадр и отъезжает, открывая зал. */
(() => {
  EV.ob_bang = LS('s2') + 0.1;
  EV.ob_seen = wtw('s2', 'видел');
  EV.ob_potato = wtw('s2', 'картошки');
  SHAKES.push([EV.ob_bang, 0.2, 12]);
  KEYW.push('протест!');
  function vitrine(t) {                                                 // витрина улик: постамент, стекло, табличка, пустая подушка, паутина
    push(170, 1330, 1); const pd = rect(-150, 0, 300, 200, { wash: '#5a3a22', washA: 1, w: 2.6, col: '#1e1008', key: 8500 }); shadeG(pd.path, 150, 0, -150, 0, '#2a140a', 0.5);
    ell(0, -20, 120, 26, { wash: '#7a1e2a', washA: 1, w: 2, col: '#2a0610' }); for (const x of [-110, 110]) ell(x, -20, 14, 14, { wash: '#d6a842', washA: 1, w: 1.4 });
    const g = rect(-140, -300, 280, 300, { wash: '#d8ecf2', washA: 0.12, w: 3, col: '#5a6a72', key: 8501 }); pencil([[-110, -280], [-60, -200]], { w: 6, col: '#ffffff', a: 0.55, pass2: false }); pencil([[-90, -290], [-70, -260]], { w: 3, col: '#ffffff', a: 0.5, pass2: false });
    for (let i = 0; i < 6; i++) { const a = i / 5 * 1.57; pencil([[140, -300], [140 - Math.cos(a) * 90, -300 + Math.sin(a) * 90]], { w: 1, col: '#ffffff', a: 0.8, pass2: false }); } for (let r = 1; r < 4; r++) pencil(spline(Array.from({ length: 6 }, (_, i) => { const a = i / 5 * 1.57; return [140 - Math.cos(a) * r * 28, -300 + Math.sin(a) * r * 28]; }), false, 3), { w: 1, col: '#ffffff', a: 0.7, pass2: false });
    const sp = Math.sin(t * 2) * 10; pencil([[90, -300], [90, -230 + sp]], { w: 1, col: '#ffffff', a: 0.7, pass2: false }); ell(90, -224 + sp, 7, 6, { wash: '#1a1a1a', washA: 1, w: 1 }); for (const sd of [-1, 1]) for (let k = 0; k < 3; k++) pencil([[90, -224 + sp], [90 + sd * 12, -230 + sp + k * 6]], { w: 1, col: '#1a1a1a', pass2: false });
    motes(10, [-130, -280, 130, -40], '#e8dcc0', t, 9, { sp: 8, vx: 4, sz: 3, a: 0.6 });
    rect(-120, 60, 240, 70, { wash: '#c8883a', washA: 1, w: 2, col: '#3a1a08' }); txt('РУКОПИСЬ 1781', 0, 96, 32, { font: 'Osw', col: '#3a1a08' });
    if (t > EV.ob_seen - 0.4) { const k = clamp((t - EV.ob_seen + 0.4) / 1.0), lx = lerp(-90, 80, sm(k)); push(lx, -120, 1, -0.4); ell(0, 0, 54, 54, { wash: '#d8ecf2', washA: 0.25, w: 7, col: '#2a2a2a' }); pencil([[38, 38], [100, 100]], { w: 14, col: '#4a2a14' }); pop(); if (k > 0.6) bubbleTag('ПУСТО', 0, -340, t, EV.ob_seen + 0.3, '#2b2622', 46, -0.06); }
    pop();
  }
  function lateSpud(t) {                                                // картофелина-опоздавшая: шляпа, чемодан, бирка «1735»
    if (t < EV.ob_potato - 0.5) return; const k = clamp((t - EV.ob_potato + 0.5) / 1.1), x = lerp(1250, 780, sm(k)), hop = Math.abs(Math.sin(t * 9)) * 18 * (k < 1 ? 1 : 0.2);
    push(x, 1420 - hop, 1.25); for (const sd of [-1, 1]) pencil([[sd * 20, 30], [sd * 26 + Math.sin(t * 9) * sd * 10, 80]], { w: 6, col: '#3a2410' });
    potato(0, 0, 0.9, 0.05, { key: 8510, face: 1 }); ell(0, -46, 50, 9, { wash: '#2a2420', washA: 1, w: 1.6 }); rect(-28, -86, 56, 40, { wash: '#2a2420', washA: 1, w: 1.6 });
    pencil([[-60, 0], [-100, 20]], { w: 5, col: '#3a2410' }); const sc = rect(-170, 0, 80, 60, { wash: '#8a4a2a', washA: 1, w: 2, col: '#2a1408' }); pencil([[-150, 0], [-140, -12], [-120, -12], [-110, 0]], { w: 3, col: '#2a1408', pass2: false });
    rect(-120, 40, 60, 34, { wash: '#f4ead2', washA: 1, w: 1.6, col: '#3a2410' }); txt('1735', -90, 58, 24, { font: 'Osw', col: '#d9482b' }); pop();
    if (k > 0.8) bubbleTag('+ 50 ЛЕТ', x, 1220, t, EV.ob_potato + 0.6, '#d9482b', 42, 0.05);
  }
  WORLD.objection = (t, u, cat) => {
    courtroom(t, { react: i => t > EV.ob_potato + 0.6 ? (i % 2 ? 'grin' : 'smile') : t > EV.ob_bang ? 'shock' : 'calm' });
    lay(1, () => { cat(); });
    lay(0.92, () => { bench(t, { cone: false }); gavelHit(800, 1290, t, EV.ob_bang, 1.1); });
    lay(0.8, () => { vitrine(t); lateSpud(t); });
  };
  DIR.objection = {
    outfit: 'judge', light: { side: 1, rim: '#ffcf8a' }, grade: ['#ff9a50', 0.1],
    act: () => [[S0.objection, 'annoyed'], [EV.ob_bang + 0.25, 'suspicious'], [EV.ob_seen, 'sideeye'], [EV.ob_potato, 'shock'], [EV.ob_potato + 0.7, 'laugh']],
    pose: (t, u, b) => { const bang = t < EV.ob_bang + 0.25, up = t < EV.ob_bang ? 1 - (t - S0.objection) / Math.max(0.05, EV.ob_bang - S0.objection) : 0;
      return Object.assign(b, { x: 560, y: 1500, s: 1.05, look: t < EV.ob_seen - 0.3 ? [0, 0.3] : t < EV.ob_potato ? [-0.8, 0.7] : [0.9, 0.5], hand: bang ? [200, -250 - up * 120] : [150, -190], prop: 'mallet', propAng: bang ? -0.3 - up * 0.9 : 0.3, handF: t > EV.ob_potato ? [-60, -330] : [-120, -190],
        squash: b.squash + (t > EV.ob_bang && t < EV.ob_bang + 0.12 ? 0.1 : 0) }); },
    cam: () => [[S0.objection, 600, 1100, 0.3], [EV.ob_bang + 0.2, 560, 1080, 0.22], [EV.ob_seen - 0.4, 300, 1160, 0.32, 'x'], [EV.ob_potato - 0.1, 340, 1150, 0.3], [EV.ob_potato + 0.3, 700, 1150, 0.28, 'x'], [S1.objection, 640, 1120, 0.24]]
  };
  // ---------------------------------------------------------------- переход: сковорода разворачивается в камеру дном, закрывает кадр и уезжает
  TRANS_IN.objection = { a: 0.3, b: 0.35, runA: 1, fx(k, t, A, B) {
    const cover = k < 0.5, q = cover ? sm(k / 0.5) : 1 - sm((k - 0.5) / 0.5);
    drawBuf(cover ? A : B, cover ? 1 + q * 0.1 : 1.08 - 0.08 * (1 - q), 540, 960);
    scr(() => { const R = 40 + q * 1500, cx = cover ? lerp(830, 560, q) : lerp(-700, 560, q), cy = cover ? lerp(1560, 980, q) : 980;
      pencil([[cx + R * 0.7, cy + R * 0.1], [cx + R * 1.9, cy - R * 0.3]], { w: Math.max(6, R * 0.12), col: '#2a2420' });
      const p = ell(cx, cy, R, R * (0.35 + 0.65 * q), { wash: '#1e1a18', washA: 1, w: 4, col: '#000' }); metalG(p.path, cx - R * 0.4, cy - R * 0.3, R * 1.3, '#6a5e56', '#2a2420', '#0a0806');
      for (let i = 1; i < 5; i++) pencil(ellPts(cx, cy, R * i / 5, R * i / 5 * (0.35 + 0.65 * q), 0, 0.05, 40), { w: 2, col: '#4a403a', a: 0.6, pass2: false, gap: false }); glow(cx - R * 0.3, cy - R * 0.3, R * 0.5, 'rgba(255,220,180,1)', 0.15); });
  } };
})();
