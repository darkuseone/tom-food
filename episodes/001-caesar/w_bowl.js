/* 001 — `bowl`: ТОМ-МАЛЫШ внутри гигантской деревянной салатницы. Сверху склоняется огромный Кардини (усы, бабочка), его руки с деревянными ложкой и вилкой.
   По словам падают гиганты: «ромэн» — лист как пальма шлёпается рядом, «яйцо» — катится на Тома, «пармезан» — снегопад стружки, «сухари» — гренки-валуны с грохотом,
   «смешал» — ложка и вилка проходят волной, всё кружится. В конце — водопад масла и дождь лимона. Переход В сцену: ныряем в миску по спирали. */
(() => {
  EV.bw_leaf = wtw('s4', 'ромэн,');
  EV.bw_egg = wtw('s4', 'яйцо,');
  EV.bw_parm = wtw('s4', 'пармезан,');
  EV.bw_crout = wtw('s4', 'сухари');
  EV.bw_mix = wtw('s4', 'смешал');
  EV.bw_oil = LF('s4', 0.8);
  SHAKES.push([EV.bw_leaf + 0.25, 0.2, 10], [EV.bw_crout + 0.2, 0.25, 14], [EV.bw_crout + 0.35, 0.2, 10]);
  KEYW.push('ромэн,', 'яйцо,', 'пармезан,', 'сухари');

  const fall = (t, t0, y0, y1, d = 0.3) => t < t0 ? y0 : t > t0 + d ? y1 : lerp(y0, y1, Math.pow((t - t0) / d, 2));
  function above(t) {                                                  // над миской: потолок ресторана, огромный Кардини, лампы
    vgrad(-800, 700, ['#2a140a', '#6a3418', '#c8803a']); for (const x of [120, 960]) { glow(x, 80, 420, 'rgba(255,200,110,1)', 0.5); ell(x, 60, 60, 26, { wash: '#fff2c0', washA: 1, w: 2, col: '#8a6a2a' }); }
    const lean = Math.sin(t * 1.3) * 10; push(540, 420 + lean, 2.0); ell(0, 0, 160, 150, { wash: '#e2b48e', washA: 1, w: 2.4, col: '#2a1408', key: 5000 }); shadeG(pathOf(ellPts(0, 0, 160, 150, 0, 0, 30)), 160, 100, -40, 0, '#a8764e', 0.5);
    blob([[-160, -30], [-140, -130], [0, -170], [140, -130], [160, -30], [110, -100], [-110, -100]], { wash: '#141010', washA: 1, w: 2, col: '#000' });
    for (const sd of [-1, 1]) { ell(sd * 56, 0, 26, 30, { wash: '#f8f4ea', washA: 1, w: 2, col: '#2a1408' }); ell(sd * 56 + (t > EV.bw_mix ? Math.sin(t * 8) * 6 : 0), 6, 12, 14, { wash: '#2a1a0a', washA: 1, line: false }); pencil([[sd * 30, -46], [sd * 86, -54]], { w: 8, col: '#141010', pass2: false }); }
    blob([[0, 50], [-50, 40], [-110, 66], [-120, 84], [-60, 70], [0, 72], [60, 70], [120, 84], [110, 66], [50, 40]], { wash: '#141010', washA: 1, w: 1.6, col: '#000' }); blob([[-40, 100], [40, 100], [0, 120]], { wash: '#7a2a1a', washA: 1, w: 1.6 }); pop();
  }
  function walls(t) {                                                  // внутренность миски: вогнутая деревянная чаша с кольцами, толстый обод сверху
    const cx = 540, cy = 1760, RX = 1500, RY = 1260; const w = ell(cx, cy, RX, RY, { wash: '#a8683a', washA: 1, w: 3, col: '#2a1408', key: 5010 });
    ctx.save(); ctx.clip(w.path); const g = ctx.createRadialGradient(cx, cy, 200, cx, cy - 200, RY * 1.1); g.addColorStop(0, '#8a4a20'); g.addColorStop(0.6, '#b8783e'); g.addColorStop(1, '#6a3412'); ctx.fillStyle = g; ctx.fillRect(-1000, -200, 3000, 3000);
    for (let i = 1; i < 16; i++) pencil(ellPts(cx, cy, RX * i / 16, RY * i / 16, 0, 0.04, 70), { w: 2, col: '#5a2a0a', a: 0.28, pass2: false });
    const r = rng(5011); for (let i = 0; i < 50; i++) { const a = r() * 6.283, d = 0.3 + r() * 0.65; pencil([[cx + Math.cos(a) * RX * d, cy + Math.sin(a) * RY * d], [cx + Math.cos(a + 0.03) * RX * (d + 0.06), cy + Math.sin(a + 0.03) * RY * (d + 0.06)]], { w: 1.4, col: '#4a2008', a: 0.3, pass2: false }); }
    glow(cx - 500, cy - 700, 400, 'rgba(255,220,160,1)', 0.3); glow(cx + 300, cy - 300, 260, 'rgba(240,210,110,1)', 0.18); ctx.restore();
    pencil(ellPts(cx, cy, RX, RY, 0, 0, 120), { w: 46, col: '#c88a50', pass2: false }); pencil(ellPts(cx, cy, RX - 22, RY - 22, 0, 0, 120), { w: 4, col: '#4a2008', a: 0.8, pass2: false }); pencil(ellPts(cx, cy, RX + 22, RY + 22, 0, 0, 120), { w: 4, col: '#2a1408', pass2: false });
  }
  function bottom(t) { const b = ell(540, 1780, 900, 300, { wash: '#8a5028', washA: 1, w: 2.4, col: '#2a1408', key: 5020 }); shadeG(b.path, 540, 2000, 540, 1400, '#3a1806', 0.4); for (let i = 1; i < 6; i++) pencil(ellPts(540, 1720, 980 - i * 150, 330 - i * 50, 0, 0.1, 40), { w: 2, col: '#5a2a0a', a: 0.35, pass2: false }); }
  function bigLeaf(t) { if (t < EV.bw_leaf - 0.05) return; const y = fall(t, EV.bw_leaf - 0.05, -400, 1720, 0.32), wob = t > EV.bw_leaf + 0.27 ? Math.sin((t - EV.bw_leaf) * 18) * 0.05 * Math.exp(-(t - EV.bw_leaf) * 4) : 0;
    leaf(230, y, 3.0, -0.35 + wob, { key: 5030, shine: 1, len: 260, wid: 70 }); leaf(-40, y + 80, 2.6, -0.8 + wob, { key: 5031, len: 240, wid: 64, col: '#5e8a24' }); }
  function bigEgg(t) { if (t < EV.bw_egg - 0.1) return; const k = clamp((t - EV.bw_egg + 0.1) / 1.0), x = lerp(1300, 820, sm(k)), y = fall(t, EV.bw_egg - 0.1, -300, 1640, 0.3); egg(x, y - 120, 2.6, -k * 4, { cracked: t > EV.bw_crout, key: 5040 }); }
  function bigCrouts(t) { if (t < EV.bw_crout - 0.05) return; [[120, 0], [880, 0.12], [460, 0.2]].forEach(([x, d], i) => { const y = fall(t, EV.bw_crout - 0.05 + d, -300, 1760 - i * 30, 0.3); crouton(x, y - 60, 3.6, 0.3 - i * 0.4, { key: 5050 + i }); if (t > EV.bw_crout + d + 0.25 && t < EV.bw_crout + d + 0.6) { const kk = (t - EV.bw_crout - d - 0.25) / 0.35; ell(x, 1780, 140 + kk * 200, 30 + kk * 30, { wash: '#e8d0a0', washA: 0.5 * (1 - kk), line: false }); } }); }
  function parmSnow(t) { if (t < EV.bw_parm - 0.1) return; const r = rng(5060), dt = t - EV.bw_parm + 0.1; for (let i = 0; i < 60; i++) { const x = r() * 1300 - 100, sp = 500 + r() * 400, y = -200 + ((dt * sp + r() * 600) % 2200); if (dt * sp + r() * 600 > 2400) continue; parmShard(x + Math.sin(t * 2 + i) * 30, y, 1.6 + r(), t * 3 + i, 5061 + (i % 5)); } }
  function utensils(t) { if (t < EV.bw_mix - 0.5) return; const k = clamp((t - EV.bw_mix + 0.5) / 1.6), a = lerp(-1.2, 1.4, sm(k));
    for (const [sd, kind] of [[-1, 'spoon'], [1, 'fork']]) { push(540 + sd * 260 + Math.cos(a * 2 + sd) * 300, 420 + Math.sin(a * 2) * 120, 2.4, sd * 0.3 + a * 0.4);
      pencil([[0, -500], [0, 120]], { w: 30, col: '#c8884a' }); pencil([[-8, -480], [-6, 100]], { w: 6, col: '#f2c890', a: 0.6, pass2: false });
      if (kind === 'spoon') { const s = ell(0, 230, 70, 120, { wash: '#c8884a', washA: 1, w: 3, col: '#3a1a08' }); shadeG(s.path, 60, 260, -20, 180, '#6a3410', 0.5); } else { rect(-70, 120, 140, 70, { wash: '#c8884a', washA: 1, w: 3, col: '#3a1a08' }); for (const x of [-56, -18, 18, 56]) rect(x - 10, 186, 20, 140, { wash: '#c8884a', washA: 1, w: 2.4, col: '#3a1a08' }); }
      pop(); } }
  function swirl(t) { if (t < EV.bw_mix) return; const dt = t - EV.bw_mix; for (let i = 0; i < 26; i++) { const r = rng(5070 + i), a = dt * (2 + r()) + r() * 6.283, d = 300 + r() * 500;
      const x = 540 + Math.cos(a) * d, y = 1300 + Math.sin(a) * d * 0.45 - dt * 60; if (i % 3 === 0) leaf(x, y, 0.9, a, { key: 5080 + (i % 4), len: 200, wid: 60 }); else if (i % 3 === 1) crouton(x, y, 1.2, a, { key: 5090 + (i % 4) }); else parmShard(x, y, 2, a, 5100 + i); } }
  function oilFall(t) { if (t < EV.bw_oil - 0.1) return; const k = clamp((t - EV.bw_oil + 0.1) / 0.3); ctx.save(); const g = ctx.createLinearGradient(980, 0, 1060, 0); g.addColorStop(0, 'rgba(216,184,74,0.2)'); g.addColorStop(0.5, 'rgba(240,210,110,0.9)'); g.addColorStop(1, 'rgba(216,184,74,0.2)'); ctx.fillStyle = g; ctx.fillRect(980 + Math.sin(t * 9) * 6, -200, 70, 1900 * k); ctx.restore();
    glow(1015, 1700, 160, 'rgba(255,220,120,1)', 0.5 * k); for (let i = 0; i < 12; i++) { const r = rng(5110 + i), kk = ((t * 2 + r()) % 1); ell(1015 + (r() - 0.5) * 200 * kk, 1700 - kk * 120, 10, 7, { wash: '#f0d26e', washA: 1 - kk, line: false }); }
    push(-60, 300, 2.2, 0.4); lemon(0, 0, 1, 0, { half: true }); pop(); for (let i = 0; i < 14; i++) { const r = rng(5130 + i), kk = ((t * 1.6 + r()) % 1); ell(-40 + r() * 260, 300 + kk * 1400, 7, 12, { wash: '#f6ea90', washA: 0.9, w: 1, col: '#c8b84a', a: 0.6 }); } }
  WORLD.bowl = (t, u, cat) => {
    lay(20, () => above(t)); lay(4, () => { walls(t); });
    lay(2.2, () => { bottom(t); bigLeaf(t); });
    lay(1.4, () => { utensils(t); });
    lay(1, () => { bigEgg(t); cat(); bigCrouts(t); swirl(t); });
    lay(0.7, () => { parmSnow(t); oilFall(t); });
  };
  DIR.bowl = {
    outfit: 'waiter', light: { side: -1, rim: '#ffd8a0' }, grade: ['#ffb060', 0.12],
    act: () => [[S0.bowl, 'awe'], [EV.bw_leaf + 0.2, 'shock'], [EV.bw_egg + 0.4, 'scared'], [EV.bw_parm, 'grin'], [EV.bw_crout + 0.2, 'shock'], [EV.bw_mix, 'laugh']],
    pose: (t, u, b) => { const dodge = t > EV.bw_egg + 0.5 && t < EV.bw_egg + 1.0, spin = t > EV.bw_mix + 0.2;
      return Object.assign(b, { x: 540 + (dodge ? -120 * sm((t - EV.bw_egg - 0.5) / 0.3) : t > EV.bw_egg + 1 ? -120 : 0), y: 1740 - (dodge ? Math.sin((t - EV.bw_egg - 0.5) / 0.5 * Math.PI) * 140 : 0), s: 0.62, rot: spin ? Math.sin((t - EV.bw_mix) * 6) * 0.25 : 0,
        look: t < EV.bw_leaf ? [0, -1] : t < EV.bw_egg ? [-0.6, -0.3] : t < EV.bw_parm ? [0.9, 0] : [0, -0.8], hand: t > EV.bw_parm && t < EV.bw_crout ? [80, -330] : [100, -200], handF: [-100, -260], tailUp: true }); },
    cam: () => [[S0.bowl, 540, 600, -0.2], [S0.bowl + 0.8, 540, 1380, 0.28, 'x'], [EV.bw_egg, 640, 1420, 0.3], [EV.bw_crout, 520, 1380, 0.22], [EV.bw_mix, 540, 1200, 0.05], [S1.bowl, 600, 1300, 0.2]]
  };
  // ---------------------------------------------------------------- переход: ныряем в миску по спирали
  TRANS_IN.bowl = { a: 0.2, b: 0.45, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1 + k * 1.6, 540, 960, 1, null, 0, 0, -k * 0.8); const R = Math.pow(k, 1.5) * 1400;
    inCircle(540, 960, R, () => drawBuf(B, 0.4 + 0.6 * k, 540, 960, 1, null, 0, 0, (1 - k) * 2.5));
    scr(() => { pencil(ellPts(540, 960, R, R, 0, 0.02, 80), { w: 26, col: '#a8683a', a: 0.95, pass2: false }); pencil(ellPts(540, 960, R + 12, R + 12, 0, 0.02, 80), { w: 6, col: '#3a1a08', pass2: false }); });
  } };
})();
