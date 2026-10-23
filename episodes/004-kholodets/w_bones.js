/* 004 — `bones`: ТОМ-МАЛЫШ внутри кастрюли. «Секрет — кости: ноги, хвосты, уши. Варят до восьми часов — желе застывает само.» Мутно-золотой бульон,
   пузыри-шары, гигантские кости-колонны, морковь-брёвна, лавровые листья-лодки. По словам с края кастрюли падают: «ноги» — копыто-кость, «хвосты» — хвост, «уши» — ухо;
   «восьми часов» — сверху кружат часы, стрелки бегут; «застывает само» — бульон мутнеет-застывает, пузыри замирают, Том застревает в желе. Переход: пузырь лопается. */
(() => {
  EV.bn_bone = wtw('s7', 'кости:');
  EV.bn_tail = wtw('s7', 'хвосты,');
  EV.bn_ear = wtw('s7', 'уши.');
  EV.bn_hours = wtw('s7', 'восьми');
  EV.bn_set = wtw('s7', 'само.');
  SHAKES.push([EV.bn_bone + 0.3, 0.15, 8], [EV.bn_tail + 0.3, 0.15, 8], [EV.bn_ear + 0.3, 0.15, 8]);
  KEYW.push('кости:', 'само.');

  const fall = (t, t0, y0, y1, d = 0.35) => t < t0 ? y0 : t > t0 + d ? y1 : lerp(y0, y1, Math.pow((t - t0) / d, 2));
  function broth(t) {                                                  // стенки кастрюли, бульон, свет сверху
    const set = clamp((t - EV.bn_set) / 1.0); vgrad(-600, 2200, [lerpC('#d8a850', '#e8c47a', set), lerpC('#b8843a', '#d8b06a', set), lerpC('#7a4a1a', '#a87a3a', set)]);
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; for (let i = 0; i < 6; i++) { const x = 100 + i * 180 + Math.sin(t + i) * 30; ctx.fillStyle = `rgba(255,240,190,${0.08 * (1 - set)})`; ctx.beginPath(); ctx.moveTo(x - 40, -200); ctx.lineTo(x + 40, -200); ctx.lineTo(x + 140, 1800); ctx.lineTo(x - 60, 1800); ctx.fill(); } ctx.restore();
    for (const sd of [-1, 1]) { const x = sd < 0 ? -150 : 1230; rect(x - 60, -400, 120, 2600, { wash: '#e8e4d8', washA: 1, w: 3, col: '#3a3a3a' }); ell(x - sd * 20, 400, 30, 30, { wash: '#d9482b', washA: 1, w: 2 }); }
    rect(-300, -380, 1700, 60, { wash: '#c8c4b8', washA: 1, w: 3, col: '#3a3a3a' });
  }
  function bubbles(t) { const set = t > EV.bn_set ? clamp((t - EV.bn_set) / 0.6) : 0; for (let i = 0; i < 28; i++) { const r = rng(4800 + i), sp = (0.15 + r() * 0.25) * (1 - set), y = 1900 - ((t * sp + r()) % 1) * 2300, x = r() * 1200 - 60 + Math.sin(t * 2 + i) * 20, R = 14 + r() * 40;
    pencil(ellPts(x, y, R, R, 0, 0, 20), { w: 3, col: '#fff2c8', a: 0.7, pass2: false }); ell(x - R * 0.3, y - R * 0.3, R * 0.25, R * 0.15, { wash: '#ffffff', washA: 0.8, line: false }); } }
  function pillars(t) { bone(160, 1100, 4.0, 1.45, 10); bone(940, 1150, 3.6, 1.62, 11); for (let i = 0; i < 3; i++) { push(300 + i * 280, 1640 + (i % 2) * 40, 2.4, 0.2 - i * 0.3); carrot(0, 0, 1, 1.4); pop(); }
    for (let i = 0; i < 3; i++) { push(200 + i * 340, 500 + Math.sin(t * 1.4 + i) * 30, 2, Math.sin(t + i) * 0.3); blob([[-40, 0], [0, -14], [40, 0], [0, 14]], { wash: '#6a8a2a', washA: 1, w: 2, col: '#2a3a0a' }); pencil([[-36, 0], [36, 0]], { w: 1.6, col: '#a8c86a', pass2: false }); pop(); } }
  function drops(t) {                                                  // падают: нога, хвост, ухо
    if (t > EV.bn_bone - 0.1) { const y = fall(t, EV.bn_bone - 0.1, -400, 1380); push(700, y, 2.2, 0.4); bone(0, 0, 1, 0, 12); ell(80, 0, 40, 30, { wash: '#c88a6a', washA: 1, w: 2, col: '#5a2a1a' }); pop(); }
    if (t > EV.bn_tail - 0.1) { const y = fall(t, EV.bn_tail - 0.1, -400, 1300); push(380, y, 2, 0.3); pencil(spline([[-80, 0], [-30, -30], [30, 20], [80, -10]], false, 8), { w: 26, col: '#c88a6a', pass2: false }); pencil(spline([[-80, 0], [-30, -30], [30, 20], [80, -10]], false, 8), { w: 6, col: '#e8b090', a: 0.6, pass2: false }); pop(); }
    if (t > EV.bn_ear - 0.1) { const y = fall(t, EV.bn_ear - 0.1, -400, 1250); push(560, y, 2.2, -0.2); blob([[-30, 30], [-40, -20], [0, -60], [40, -20], [30, 30]], { wash: '#e8a090', washA: 1, w: 2.4, col: '#5a2a1a' }); blob([[-16, 20], [-20, -14], [0, -40], [20, -14], [16, 20]], { wash: '#f6c8b8', washA: 1, line: false }); pop(); } }
  function clock(t) { if (t < EV.bn_hours - 0.2) return; const k = popK(t, EV.bn_hours - 0.2, 0.3), sp = (t - EV.bn_hours) * 12; push(760, 380, k); ell(0, 0, 120, 120, { wash: '#f6f2e6', washA: 1, w: 6, col: '#3a3a3a' }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; pencil([[Math.cos(a) * 96, Math.sin(a) * 96], [Math.cos(a) * 110, Math.sin(a) * 110]], { w: 4, col: '#3a3a3a', pass2: false }); }
    pencil([[0, 0], [Math.cos(sp - 1.57) * 90, Math.sin(sp - 1.57) * 90]], { w: 5, col: '#2a2a2a', pass2: false }); pencil([[0, 0], [Math.cos(sp / 12 - 1.57) * 60, Math.sin(sp / 12 - 1.57) * 60]], { w: 8, col: '#d9482b', pass2: false }); pop(); bubbleTag('8 ЧАСОВ', 760, 560, t, EV.bn_hours, '#d9482b', 44, 0.04); }
  function jelly(t) { if (t < EV.bn_set) return; const k = clamp((t - EV.bn_set) / 0.8); ctx.save(); ctx.globalAlpha = 0.45 * k; vgrad(-600, 2200, ['#f6e2a8', '#e8c47a']); ctx.restore(); for (let i = 0; i < 20; i++) { const r = rng(4850 + i); pencil([[r() * 1200, r() * 1800], [r() * 1200 + 40, r() * 1800 + 60]], { w: 3, col: '#ffffff', a: 0.4 * k, pass2: false }); } if (k > 0.5) bubbleTag('ЗАСТЫЛО!', 540, 880, t, EV.bn_set + 0.4, '#d9482b', 54, -0.04); }
  WORLD.bones = (t, u, cat) => { lay(4, () => { broth(t); }); lay(2, () => { pillars(t); bubbles(t); }); lay(1.3, () => { clock(t); drops(t); }); lay(1, () => { cat(); jelly(t); }); };
  DIR.bones = {
    outfit: 'chef', light: { side: -1, rim: '#fff0c0' }, grade: ['#e8a040', 0.1],
    act: () => [[S0.bones, 'awe'], [EV.bn_bone + 0.3, 'shock'], [EV.bn_tail + 0.3, 'scared'], [EV.bn_ear + 0.3, 'laugh'], [EV.bn_hours, 'talk'], [EV.bn_set + 0.2, 'shock']],
    pose: (t, u, b) => { const swim = t < EV.bn_set; return Object.assign(b, { x: 560 + (swim ? Math.sin(t * 1.6) * 120 : 0), y: 1150 + (swim ? Math.sin(t * 3) * 30 : 0), s: 0.6, rot: swim ? Math.sin(t * 2) * 0.15 : 0.05, look: [0, -0.8], hand: swim ? [140, -300 + Math.sin(t * 6) * 60] : [120, -380], handF: swim ? [-140, -300 - Math.sin(t * 6) * 60] : [-120, -380], tailUp: true, apron: 1 }); },
    cam: () => [[S0.bones, 540, 600, 0.0], [EV.bn_bone, 600, 1000, 0.16], [EV.bn_hours, 640, 760, 0.12, 'x'], [EV.bn_set, 560, 1000, 0.24], [S1.bones, 560, 1020, 0.3]]
  };
  // ---------------------------------------------------------------- переход: гигантский пузырь бульона надувается и лопается
  TRANS_IN.bones = { a: 0.2, b: 0.4, runA: 1, fx(k, t, A, B) {
    const R = 100 + Math.pow(Math.min(k / 0.6, 1), 1.4) * 1300, pop = k > 0.6; if (!pop) { drawBuf(A, 1, 540, 960); inCircle(540, 960, R, () => drawBuf(B, 0.7 + 0.3 * k, 540, 960)); scr(() => { pencil(ellPts(540, 960, R, R, 0, 0, 60), { w: 8, col: '#fff2c8', a: 0.9, pass2: false }); ell(540 - R * 0.4, 960 - R * 0.4, R * 0.2, R * 0.12, { wash: '#ffffff', washA: 0.7, line: false, rot: -0.6 }); }); }
    else { drawBuf(B, 1, 540, 960); const kk = (k - 0.6) / 0.4; scr(() => { for (let i = 0; i < 30; i++) { const a = i / 30 * 6.283; ell(540 + Math.cos(a) * (900 + kk * 500), 960 + Math.sin(a) * (900 + kk * 500), 14, 14, { wash: '#fff2c8', washA: 1 - kk, line: false }); } }); }
  } };
})();
