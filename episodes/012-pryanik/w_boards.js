/* 012 — `boards`: «Узор не рисовали — печатали! Вырезали зеркально на доске из липы или груши.» ТОМ-МАЛЫШ (раз за ролик) на гигантской пряничной доске:
   под лапами — липовые волокна, вокруг вырезанный рельеф: зеркальные буквы «АЛУТ» каньонами, розетка-цветок, лунки-точки бордюра. За краем доски — мастерская
   резчика великанского масштаба: верстак, лампа, стамески, кружка, окно. Огромные завитки стружки, пыль в луче.
   По словам: «печатали» — сверху опускается пласт теста, прижимается и поднимается — на нём буквы читаются правильно «ТУЛА»; «зеркально» — буквы-каньоны
   светятся и призрак «ТУЛА» переворачивается; «липы или груши» — падают липовый лист и груша; немая пауза — гигантская стамеска тюкает рядом, Том-малыш подпрыгивает.
   Переход В сцену: стружка завивается — прошлый кадр снимается длинной закручивающейся лентой. */
(() => {
  EV.bd_print = wtw('s2', 'печатали!');
  EV.bd_mirror = wtw('s2', 'зеркально');
  EV.bd_lipa = wtw('s2', 'липы');
  EV.bd_gag = LE('s2');
  SHAKES.push([EV.bd_print + 0.35, 0.22, 12], [EV.bd_gag + 0.15, 0.15, 8]);
  KEYW.push('печатали!', 'зеркально');
  const press = t => { const a = clamp((t - EV.bd_print + 0.3) / 0.35), b = clamp((t - EV.bd_print - 0.3) / 0.5); return a < 1 ? sm(a) : 1 - sm(b); };

  function workshop(t) {                                                // мастерская великана за краем доски: стена, окно, полка со стамесками, лампа, кружка
    vgrad(-900, 1400, ['#3a2614', '#6a4a2a', '#8a6a42']); glow(900, -100, 800, 'rgba(255,220,150,1)', 0.35);
    push(1000, -200, 2.4); rect(-120, -160, 240, 300, { wash: '#cfe6f6', washA: 1, w: 3, col: '#5a3a1a' }); pencil([[0, -160], [0, 140]], { w: 6, col: '#5a3a1a' }); pencil([[-120, -10], [120, -10]], { w: 6, col: '#5a3a1a' }); pop();
    rays(1000, -200, 2.2, 0.35, 2200, 'rgba(255,240,200,1)', 0.12, 6, t);
    for (let i = 0; i < 8; i++) { const x = -360 + i * 70; push(x, 200, 2, 0.05 * (i % 3 - 1)); pencil([[0, 0], [0, -80]], { w: 12, col: '#8a5a2a' }); poly([[-6, 0], [6, 0], [5, 60], [-5, 60]], { wash: '#b8bcc4', washA: 1, w: 1.6 }); pop(); }
    rect(-500, 260, 1000, 30, { wash: '#4a2a10', washA: 1, w: 2, col: '#1a0a04' });
    push(-200, 700, 2.4); const m = shape([[-50, 0], [-56, -120], [56, -120], [50, 0]], { wash: '#e8e0d0', washA: 1, w: 2.4, col: '#3a2a1a' }); shadeG(m.path, 50, 0, -30, 0, '#a89a7a', 0.4); pencil(spline([[56, -100], [90, -80], [56, -30]], false, 5), { w: 8, col: '#e8e0d0' }); for (let i = 0; i < 2; i++) { const q = (t * 0.4 + i / 2) % 1; pencil(spline([[0, -130], [Math.sin(q * 7) * 16, -130 - q * 80], [0, -130 - q * 160]], false, 5), { w: 6, col: '#ffffff', a: 0.3 * (1 - q), pass2: false }); } pop();
  }
  function board(t) {                                                   // поверхность доски: волокна, каньоны зеркальных букв, розетка, лунки, следы резца
    const top = poly([[-600, 760], [1700, 760], [2400, 2400], [-1300, 2400]], { wash: PK.wood, washA: 1, w: 3, col: '#3a2408', key: 12400 }); shadeG(top.path, 0, 2400, 0, 760, PK.woodD, 0.35);
    const r = rng(12401); ctx.save(); ctx.clip(top.path); for (let i = 0; i < 40; i++) { const y = 780 + i * 34 + i * i * 0.6; pencil(spline([[-1200, y], [0, y + Math.sin(i) * 10], [540, y - 4], [1200, y + Math.cos(i) * 10], [2300, y]], false, 8), { w: 1.6 + i * 0.04, col: PK.woodD, a: 0.35, pass2: false }); }
    for (let i = 0; i < 8; i++) ell(-200 + r() * 1600, 900 + r() * 700, 30 + r() * 30, 8, { wash: '#8a5a28', washA: 0.4, line: false }); ctx.restore();
    const glowK = t > EV.bd_mirror ? clamp((t - EV.bd_mirror) / 0.4) : 0;
    push(560, 1120, 1); ctx.save(); ctx.scale(-1, 0.6); for (const [i, ch] of [...'ТУЛА'].entries()) { txt(ch, -420 + i * 280, 60, 420, { font: 'Osw', col: '#3a1c06' }); txt(ch, -412 + i * 280, 44, 420, { font: 'Osw', col: '#6a4018' }); txt(ch, -406 + i * 280, 36, 420, { font: 'Osw', col: '#8a5a28', a: 0.6 }); } ctx.restore();
      pencil([[-620, -230], [620, -230], [620, 130], [-620, 130], [-620, -230]], { w: 10, col: '#5a3414', a: 0.8, pass2: false }); pencil([[-612, -222], [612, -222]], { w: 4, col: '#e8c898', a: 0.6, pass2: false }); pop();
    if (glowK > 0) glow(540, 1080, 520, 'rgba(255,220,140,1)', 0.35 * glowK);
    push(160, 1520, 1.5); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; const p = blob([[0, 0], [Math.cos(a - 0.35) * 70, Math.sin(a - 0.35) * 30], [Math.cos(a) * 140, Math.sin(a) * 60], [Math.cos(a + 0.35) * 70, Math.sin(a + 0.35) * 30]], { wash: '#8a5a28', washA: 1, w: 2.4, col: '#3a2408' }); shadeG(p.path, 0, -60, 0, 60, '#4a2a0e', 0.4); } ell(0, 0, 30, 14, { wash: '#5a3414', washA: 1, w: 2 }); pop();
    for (let i = 0; i < 12; i++) { const x = -200 + i * 150, y = 900; ell(x, y, 24, 9, { wash: '#5a3414', washA: 1, w: 1.6, col: '#2a1408' }); } for (let i = 0; i < 9; i++) { const x = -300 + i * 220, y = 1780; ell(x, y, 46, 16, { wash: '#5a3414', washA: 1, w: 2, col: '#2a1408' }); }
    if (glowK > 0) { const f = clamp((t - EV.bd_mirror - 0.2) / 0.6), sx = Math.cos(f * Math.PI); push(560, 760, 1); ctx.save(); ctx.scale(-sx || 0.01, 1); txt('ТУЛА', 0, 0, 120, { font: 'Osw', col: '#fff4d0', a: 0.7 * (1 - clamp((t - EV.bd_mirror - 1.4) / 0.5)) }); ctx.restore(); pop(); }
  }
  function shavings(t) {                                                // гигантские завитки стружки и щепки
    for (const [x, y, s, a] of [[-60, 1320, 1.6, 0.3], [1040, 1220, 1.3, -0.5], [880, 1700, 1.8, 0.8]]) { push(x, y, s, a); const P = []; for (let i = 0; i <= 40; i++) { const q = i / 40, an = q * 9, R = 60 - q * 40; P.push([Math.cos(an) * R + q * 100, Math.sin(an) * R * 0.6]); } pencil(P, { w: 30, col: '#f0d8a8', pass2: false }); pencil(P, { w: 3, col: '#a87a48', a: 0.7, pass2: false }); pop(); }
  }
  function dough(t) {                                                   // пласт теста сверху: опускается, прижимается, поднимается — на нём правильная надпись
    const p = press(t); if (p <= 0.01 && t < EV.bd_print) return; if (t > EV.bd_print + 1.0) return;
    const y = lerp(-900, 820, p); ctx.save(); ctx.globalAlpha = 1; const d = rect(-300, y - 700, 1700, 700, { wash: PK.dough, washA: 1, w: 3, col: '#3a1a06' }); shadeG(d.path, 0, y, 0, y - 700, PK.doughD, 0.35);
    if (t > EV.bd_print + 0.05) { txt('ТУЛА', 540, y - 140, 200, { font: 'Osw', col: PK.doughD }); txt('ТУЛА', 534, y - 148, 200, { font: 'Osw', col: PK.doughL }); } ctx.restore();
    if (p > 0.8) for (let i = 0; i < 20; i++) { const a = i / 20 * 6.283; ell(540 + Math.cos(a) * 700, 900 + Math.sin(a) * 120, 8, 6, { wash: '#fff8e8', washA: 0.8, line: false }); }
  }
  function falling(t) {                                                 // липовый лист и груша падают на «липы или груши»
    if (t < EV.bd_lipa - 0.2) return; const q = t - EV.bd_lipa + 0.2;
    push(380 + Math.sin(q * 3) * 60, Math.min(1500, -200 + q * 900), 2.2, Math.sin(q * 4) * 0.6); blob([[0, 30], [-50, -10], [-30, -60], [0, -50], [30, -60], [50, -10]], { wash: '#6aa83a', washA: 1, w: 2, col: '#2a4a1a' }); pencil([[0, 30], [0, -50]], { w: 2, col: '#2a4a1a', pass2: false }); pop();
    if (q > 0.4) { const yy = Math.min(1560, -300 + (q - 0.4) * (q - 0.4) * 3200); push(820, yy, 2.4); const pr = blob([[0, -60], [-22, -30], [-40, 20], [-30, 50], [0, 60], [30, 50], [40, 20], [22, -30]], { wash: '#c8c040', washA: 1, w: 2, col: '#4a4a0a' }); shadeG(pr.path, 40, 40, -30, -30, '#7a8a1a', 0.4); glow(-14, -10, 14, 'rgba(255,255,220,1)', 0.6); pencil([[0, -60], [6, -84]], { w: 4, col: '#3a2a1a', pass2: false }); pop(); }
  }
  function chisel(t) { if (t < EV.bd_gag - 0.3) return; const q = t - EV.bd_gag + 0.3, tap = Math.abs(Math.sin(q * 9)) * 120 * Math.exp(-q * 1.5); push(820, 1200 - tap, 2.6, 0.35); pencil([[0, -900], [0, -300]], { w: 50, col: '#8a5a2a' }); const bl = poly([[-24, -300], [24, -300], [18, 40], [-18, 40]], { wash: '#c8ccd2', washA: 1, w: 3, col: '#2a2e34' }); metalG(bl.path, -6, -150, 160, '#ffffff', '#c8ccd2', '#5a5e66'); pop(); }
  WORLD.boards = (t, u, cat) => {
    lay(7, () => { workshop(t); haze('#ffd8a0', 0.12); });
    lay(1.3, () => { board(t); shavings(t); });
    lay(1, () => { cat(); });
    lay(0.9, () => { falling(t); chisel(t); dough(t); });
    lay(0.6, () => { motes(40, [-100, 300, 1200, 1900], '#ffe8b0', t, 12410, { sp: 12, sz: 5, a: 0.5, wob: 2 }); push(-80, 1980, 1.6); const P = []; for (let i = 0; i <= 30; i++) { const q = i / 30, an = q * 8, R = 70 - q * 50; P.push([Math.cos(an) * R + q * 120, Math.sin(an) * R * 0.6]); } pencil(P, { w: 36, col: '#f0d8a8', pass2: false }); pop(); });
  };
  DIR.boards = {
    outfit: 'founder', light: { side: 1, rim: '#ffe0a0' }, grade: ['#ffc070', 0.08],
    act: () => [[S0.boards, 'awe'], [EV.bd_print - 0.2, 'shock'], [EV.bd_print + 0.8, 'grin'], [EV.bd_mirror, 'proud'], [EV.bd_lipa, 'laugh'], [EV.bd_gag, 'scared'], [EV.bd_gag + 0.5, 'grin']],
    pose: (t, u, b) => { const wk = t < EV.bd_print - 0.3 || (t > EV.bd_mirror && t < EV.bd_lipa), jump = t > EV.bd_gag && t < EV.bd_gag + 0.4, duck = t > EV.bd_print - 0.3 && t < EV.bd_print + 0.6;
      return Object.assign(b, { x: lerp(300, 640, clamp((t - S0.boards) / (EV.bd_lipa - S0.boards))), y: 1480 - (jump ? Math.sin((t - EV.bd_gag) / 0.4 * Math.PI) * 120 : 0), s: 0.55, flip: 1, walk: wk ? t * 8 : undefined, squash: b.squash + (duck ? 0.2 : 0),
        look: duck ? [0, -0.9] : t > EV.bd_lipa ? [0.6, -0.6] : [0.4, 0.3], hand: duck ? [60, -420] : [120, -220], handF: duck ? [-60, -420] : [-100, -200], tailUp: jump }); },
    cam: () => [[S0.boards, 540, 1000, 0.0], [S0.boards + 0.9, 420, 1300, 0.3, 'x'], [EV.bd_print - 0.2, 520, 1160, 0.14], [EV.bd_mirror, 540, 1180, 0.2], [EV.bd_lipa, 600, 1300, 0.24], [S1.boards, 640, 1340, 0.3]]
  };
  // ---------------------------------------------------------------- переход: стружка завивается — кадр снимается закручивающейся лентой
  TRANS_IN.boards = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const e = sm(k), band = 260, N = Math.ceil(H / band);
    for (let i = 0; i < N; i++) { const q = clamp(e * 1.6 - i * 0.08); if (q >= 1) continue; const y0 = i * band, cut = q * W;
      ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.rect(cut, y0, W - cut, band); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
      if (q > 0) scr(() => { const R = 30 + q * 60; ctx.save(); ctx.fillStyle = '#f0d8a8'; ctx.strokeStyle = '#a87a48'; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(cut, y0 + band / 2, R, band / 2, 0, 0, 6.283); ctx.fill(); ctx.stroke(); for (let j = 1; j < 4; j++) { ctx.beginPath(); ctx.ellipse(cut, y0 + band / 2, R * j / 4, band / 2 * j / 4, 0, 0, 6.283); ctx.stroke(); } ctx.restore(); }); }
  } };
})();
