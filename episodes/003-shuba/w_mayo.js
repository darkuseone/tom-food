/* 003 — `mayo`: ТОМ-МАЛЫШ внутри шубы в разрезе. «Секрет — магазинный майонез. Без него шуба — просто винегрет.» Пласты как горные породы: сельдь-фундамент,
   картошка, лук, морковь, свёкла, между ними блестящие прослойки майонеза. Том-малыш стоит на морковном пласте. «магазинный майонез» — сверху наклоняется гигантская
   банка и льёт белый водопад, Том катается по волне; «Без него» — майонез исчезает, пласты рассыпаются в кучу кубиков: «просто винегрет». Переход: майонезная сетка. */
(() => {
  EV.my_sec = LS('s8') + 0.05;
  EV.my_mayo = wtw('s8', 'магазинный');
  EV.my_wo = wtw('s8', 'Без');
  EV.my_vin = wtw('s8', 'винегрет.');
  SHAKES.push([EV.my_vin + 0.1, 0.25, 10]);
  KEYW.push('майонез.');

  function above(t) {                                                  // над салатом: кухня-гигант, лампа, огромная банка
    vgrad(-900, 500, ['#3a2a3a', '#6a4a4a', '#a8746a']); glow(540, -300, 500, 'rgba(255,220,170,1)', 0.5);
    const k = sm(clamp((t - EV.my_mayo + 0.4) / 0.5)), gone = t > EV.my_wo ? sm(clamp((t - EV.my_wo) / 0.4)) : 0; 
  }
  function strata(t) {                                                 // пласты шубы на весь кадр
    const crumble = t > EV.my_vin - 0.3 ? sm(clamp((t - EV.my_vin + 0.3) / 0.5)) : 0, mayo = t > EV.my_wo ? 1 - sm(clamp((t - EV.my_wo) / 0.4)) : 1;
    if (crumble < 1) { ctx.save(); ctx.globalAlpha = 1 - crumble; const L = layers(540, 2050, 2200, t, { th: 300, key: 3900 }); ctx.restore();
      if (mayo > 0) for (const [, top] of L.slice(1)) { const g = rect(-560, top - 14, 2200, 28 * mayo, { wash: SH.mayo, washA: 1, w: 1.4, col: SH.mayoD }); glow(300 + Math.sin(t + top) * 200, top, 120, 'rgba(255,255,255,1)', 0.35 * mayo); }
      if (mayo < 1) for (const [, top] of L.slice(1)) { for (let i = 0; i < 12; i++) { const r = rng(3910 + i + top); ell(r() * 1300 - 100, top + (1 - mayo) * 200 * r(), 6, 4, { wash: SH.mayo, washA: mayo, line: false }); } } }
    if (crumble > 0) { const r = rng(3920); const cols = ['#c8d4de', SH.pot, SH.onion, SH.carrot, SH.beet]; for (let i = 0; i < 160; i++) { const x = r() * 1500 - 200, y0 = 600 + r() * 1300, y = lerp(y0, 1300 + Math.abs(x - 540) * 0.3 + r() * 500, crumble); push(x, y, 2.2, r() * 3); rect(-10, -10, 20, 20, { wash: cols[i % 5], washA: crumble, w: 1.2, col: '#3a2a20', a: crumble }); pop(); }
      if (t > EV.my_vin) bubbleTag('ВИНЕГРЕТ', 540, 820, t, EV.my_vin + 0.1, '#8a1a4a', 56, -0.04); }
  }
  function jar(t) { const k = sm(clamp((t - EV.my_mayo + 0.4) / 0.5)), gone = t > EV.my_wo ? sm(clamp((t - EV.my_wo) / 0.4)) : 0; if (k <= 0 || gone >= 1) return;   // гигантская банка наклоняется
    push(880 + gone * 600, 560 - (1 - k) * 900, 2.6, -1.1 * k); mayoJar(0, 0, 1, 0); pop(); }
  function waterfall(t) { const k = clamp((t - EV.my_mayo - 0.15) / 0.3), gone = t > EV.my_wo ? sm(clamp((t - EV.my_wo) / 0.3)) : 0; if (k <= 0 || gone >= 1) return;
    ctx.save(); ctx.globalAlpha = 1 - gone; const g = ctx.createLinearGradient(560, 0, 760, 0); g.addColorStop(0, 'rgba(240,232,210,0.6)'); g.addColorStop(0.5, 'rgba(255,252,240,1)'); g.addColorStop(1, 'rgba(240,232,210,0.6)'); ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(560 + Math.sin(t * 6) * 10, -100); ctx.lineTo(760 + Math.sin(t * 6) * 10, -100); ctx.lineTo(780, 1200 * k); ctx.lineTo(540, 1200 * k); ctx.fill(); ctx.restore();
    for (let i = 0; i < 16; i++) { const r = rng(3930 + i), kk = (t * 1.5 + r()) % 1; ell(660 + (r() - 0.5) * 500 * kk, 1150 - kk * 140, 14, 10, { wash: SH.mayo, washA: (1 - kk) * (1 - gone), line: false }); } glow(660, 1150, 220, 'rgba(255,255,240,1)', 0.4 * k * (1 - gone)); }
  WORLD.mayo = (t, u, cat) => {
    lay(6, () => { above(t); }); lay(1.2, () => { strata(t); jar(t); waterfall(t); });
    lay(1, () => { cat(); });
  };
  DIR.mayo = {
    outfit: 'sweater', light: { side: -1, rim: '#fff0e0' }, grade: ['#ff7090', 0.08],
    act: () => [[S0.mayo, 'awe'], [EV.my_mayo, 'laugh'], [EV.my_wo, 'scared'], [EV.my_vin, 'shock']],
    pose: (t, u, b) => { const surf = t > EV.my_mayo + 0.3 && t < EV.my_wo; return Object.assign(b, { x: surf ? 540 + Math.sin((t - EV.my_mayo) * 3) * 120 : 380, y: surf ? 1180 - Math.abs(Math.sin(t * 4)) * 40 : 1250, s: 0.6, rot: surf ? Math.sin(t * 4) * 0.2 : 0,
      look: t < EV.my_mayo ? [0.6, -0.9] : [0.3, 0.2], hand: surf ? [120, -360] : [100, -220], handF: surf ? [-120, -360] : [-80, -220], tailUp: true, apron: 1 }); },
    cam: () => [[S0.mayo, 540, 700, 0.1], [EV.my_mayo, 560, 900, 0.18], [EV.my_wo, 540, 1100, 0.22], [EV.my_vin, 540, 1100, 0.0, 'x'], [S1.mayo, 540, 1080, 0.06]]
  };
  // ---------------------------------------------------------------- переход: майонезная сетка рисуется по кадру, сквозь ячейки — новая сцена
  TRANS_IN.mayo = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const cell = 180, hole = Math.pow(k, 1.4) * cell * 0.75, P = new Path2D();
    for (let i = -1; i < 8; i++) for (let j = -1; j < 13; j++) { const cx = i * cell + (j % 2) * cell / 2, cy = j * cell * 0.8; P.moveTo(cx, cy - hole); P.lineTo(cx + hole, cy); P.lineTo(cx, cy + hole); P.lineTo(cx - hole, cy); P.closePath(); }
    inPath(P, () => drawBuf(B, 1, 540, 960)); if (k < 0.9) scr(() => { for (let i = -6; i < 14; i++) { pencil([[i * cell - 400, -100], [i * cell + 1400, 2000]], { w: 16, col: SH.mayo, a: 0.9 * (1 - k), pass2: false }); pencil([[i * cell + 400, -100], [i * cell - 1400, 2000]], { w: 16, col: SH.mayo, a: 0.9 * (1 - k), pass2: false }); } });
  } };
})();
