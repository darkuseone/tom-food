/* 003 — `ussr`: «Настоящая шуба родилась в СССР в шестидесятых: хозяйки нарядили рыбный винегрет.» Кухня-«хрущёвка» конца 60-х: голубой кафель, газовая плита с чайником,
   пузатый холодильник, радиоточка, отрывной календарь 1968, окно с панельками в снегу. Хозяйка в косынке раскладывает слои; Том-хозяйка трёт свёклу на тёрке.
   «нарядили» — каламбур: на селёдку натягивают настоящую шубку из свёклы с майонезным воротником. Переход В сцену: иней затягивает кадр и оттаивает. */
(() => {
  EV.us_born = wtw('s7', 'родилась');
  EV.us_60 = wtw('s7', 'шестидесятых:');
  EV.us_dress = wtw('s7', 'нарядили');
  EV.us_vin = wtw('s7', 'винегрет.');
  KEYW.push('родилась', 'нарядили');

  function kitchen(t) {                                                // кафель, окно с панельками, календарь, радио
    vgrad(-600, 1600, ['#a8d0d0', '#c8e4e0', '#9ac0c0']); for (let r = 0; r < 18; r++) for (let i = 0; i < 18; i++) { const x = -300 + i * 90, y = 640 + r * 46; if (y > 1360) continue; rect(x, y, 88, 44, { wash: (r + i) % 2 ? '#e8f4f2' : '#d8ecea', washA: 1, w: 1, col: '#8ab0b0', a: 0.6 }); }
    const w = rect(600, 150, 380, 440, { wash: '#c8d8e8', washA: 1, w: 8, col: '#f6f2ea', key: 3800 }); ctx.save(); ctx.clip(w.path); vgrad(150, 590, ['#7a8aa8', '#c8d0e0']); for (let i = 0; i < 4; i++) { const bx = 610 + i * 95; rect(bx, 280 - i * 20, 85, 320, { wash: '#a8a8a8', washA: 1, w: 1.6, col: '#5a5a5a' }); for (let r = 0; r < 8; r++) for (let q = 0; q < 3; q++) rect(bx + 8 + q * 26, 296 - i * 20 + r * 36, 18, 20, { wash: (r * 3 + q + i) % 4 ? '#5a6070' : '#ffd27a', washA: 1, line: false }); }
    motes(30, [600, 150, 980, 590], '#ffffff', t, 3801, { sp: 70, vx: 20, sz: 4, a: 0.9 }); ctx.restore(); pencil([[790, 150], [790, 590]], { w: 6, col: '#f6f2ea', pass2: false }); frost(600, 520, 380, 70, t, 0.9);
    push(260, 360, 1, 0.03); rect(-90, -110, 180, 220, { wash: '#f6f0e0', washA: 1, w: 2.4, col: '#3a3a3a' }); rect(-90, -110, 180, 50, { wash: '#d9482b', washA: 1, w: 2 }); txt('1968', 0, -84, 34, { font: 'Osw', col: '#ffffff' }); txt('31', 0, 10, 90, { font: 'Osw', col: '#2b2622' }); txt('декабрь', 0, 80, 24, { font: 'Hand', col: '#7a1a10' }); pop();
    push(470, 520, 1); rect(-60, -50, 120, 100, { wash: '#6a4a2a', washA: 1, w: 2.4, col: '#1a0a04' }); ell(0, 0, 36, 36, { wash: '#e8d8b0', washA: 1, w: 2 }); for (let i = 0; i < 5; i++) pencil([[-26, -20 + i * 10], [26, -20 + i * 10]], { w: 1.4, col: '#6a4a2a', pass2: false }); pop();
    for (let i = 0; i < 3; i++) { const k = (t * 0.7 + i / 3) % 1; txt('♪', 540 + k * 60, 470 - k * 100, 34, { font: 'Osw', col: '#3a5a5a', a: 1 - k }); }
  }
  function appliances(t) {                                             // плита с чайником, холодильник
    push(130, 1330, 1); const f = rect(-110, -520, 220, 520, { wash: '#f6f6f0', washA: 1, w: 3, col: '#3a3a3a', key: 3810 }); shadeG(f.path, 110, 0, -40, 0, '#c8c8c0', 0.5); blob([[-110, -520], [-100, -560], [100, -560], [110, -520]], { wash: '#f6f6f0', washA: 1, w: 3, col: '#3a3a3a' }); rect(70, -420, 14, 120, { wash: '#c8ccd0', washA: 1, w: 1.6 }); txt('ЗИМА', 0, -480, 26, { font: 'Osw', col: '#8a8a8a' }); pop();
    push(1020, 1330, 1); rect(-150, -300, 300, 300, { wash: '#f2f2ec', washA: 1, w: 3, col: '#3a3a3a', key: 3811 }); for (let i = 0; i < 4; i++) ell(-90 + i * 60, -270, 14, 14, { wash: '#2a2a2a', washA: 1, w: 1.4 }); rect(-130, -230, 260, 200, { wash: '#e2e2dc', washA: 1, w: 2 });
    push(-40, -330, 1); const k = ell(0, 0, 70, 50, { wash: '#d9482b', washA: 1, w: 2.4, col: '#3a0a04' }); ell(-10, -14, 20, 8, { wash: '#ffffff', washA: 0.6, line: false }); pencil(spline([[60, -10], [100, -30], [110, -50]], false, 4), { w: 8, col: '#d9482b', pass2: false }); for (let q = 0; q < 3; q++) { const kk = (t * 0.8 + q / 3) % 1; ell(110 + kk * 30, -60 - kk * 120, 14 + kk * 20, 10 + kk * 14, { wash: '#ffffff', washA: 0.4 * (1 - kk), line: false }); } pop();
    glow(-60, -290, 50, 'rgba(120,170,255,1)', 0.5); pop();
  }
  function hostess(t) { const x = 360, y = 1290; human(x, y, 1.2, t, { body: '#3a8a8a', hair: '#6a3a1a', face: t > EV.us_dress ? 'grin' : 'smile', armL: 'hold', armR: t > EV.us_60 ? 'swing' : 'hold', seed: 190, look: 0.6, long: 1 });   // хозяйка в косынке
    const hy = y + (-238 - 46) * 1.2; blob([[x - 56, hy + 10], [x - 52, hy - 46], [x, hy - 64], [x + 52, hy - 46], [x + 56, hy + 10], [x + 30, hy - 20], [x - 30, hy - 20]], { wash: '#d9482b', washA: 1, w: 2, col: '#3a0a04' }); for (let i = 0; i < 6; i++) ell(x - 40 + i * 16, hy - 36 + Math.abs(i - 2.5) * 4, 4, 4, { wash: '#f6f0e0', washA: 1, line: false }); }
  function counter(t) {                                                // стол: миски со слоями, рыбный винегрет, селёдка в шубке
    const tb = rect(-300, 1340, 1700, 700, { wash: '#e8e0c8', washA: 1, w: 3, col: '#3a3a2a', key: 3820 }); shadeG(tb.path, 540, 1340, 540, 1800, '#a89a78', 0.4); for (let i = 0; i < 18; i++) { pencil([[-300 + i * 100, 1340], [-300 + i * 100, 2000]], { w: 2, col: '#d9482b', a: 0.25, pass2: false }); pencil([[-300, 1380 + i * 60], [1400, 1380 + i * 60]], { w: 2, col: '#d9482b', a: 0.25, pass2: false }); }
    const bowls = [[150, SH.pot], [300, SH.carrot], [450, SH.beet]]; bowls.forEach(([x, c]) => { ell(x, 1340, 70, 18, { wash: c, washA: 1, w: 2, col: '#3a3a3a' }); const b = shape(spline([[x - 74, 1340], [x - 60, 1390], [x + 60, 1390], [x + 74, 1340]], false, 6), { wash: '#f2f2ec', washA: 1, w: 2.4, col: '#3a3a3a' }); });
    const x = 700, y = 1350; ell(x, y, 160, 34, { wash: '#f6f2ea', washA: 1, w: 2.4, col: '#3a3a3a' }); pencil(ellPts(x, y, 130, 26, 0, 0, 30), { w: 3, col: '#3a7ab8', a: 0.5, pass2: false });
    if (t < EV.us_vin - 0.2) { const r = rng(3821); for (let i = 0; i < 40; i++) { const px = x + (r() - 0.5) * 220, py = y - 20 - r() * 60; ell(px, py, 9, 7, { wash: [SH.beet, SH.pot, SH.carrot, '#c8d4de'][i % 4], washA: 1, w: 1, col: '#3a2a20' }); } }
    const dress = clamp((t - EV.us_dress) / 0.6); herring(x, y - 70 - (t < EV.us_dress ? 0 : 20), 0.9, -0.05, { key: 3822, face: 1 });
    if (dress > 0) { push(x + 10, y - 90, 0.9); const sh = sm(dress), cw = 200 * sh; const c = blob([[-cw * 0.55, -40], [cw * 0.55, -44], [cw * 0.6, 36], [-cw * 0.6, 40]], { wash: SH.beet, washA: 1, w: 2.4, col: '#2a0414' }); ctx.save(); ctx.clip(c.path); for (let i = 0; i < 30; i++) { const r = rng(3823 + i); pencil([[(r() - 0.5) * cw, (r() - 0.5) * 80], [(r() - 0.5) * cw + 6, (r() - 0.5) * 80 + 10]], { w: 3, col: SH.beetL, a: 0.7, pass2: false }); } ctx.restore();
      if (sh > 0.6) { blob([[-cw * 0.58, -40], [-cw * 0.3, -66], [cw * 0.3, -66], [cw * 0.58, -44], [cw * 0.3, -30], [-cw * 0.3, -30]], { wash: SH.mayo, washA: 1, w: 2, col: SH.mayoD }); for (let i = 0; i < 3; i++) ell(0, -10 + i * 22, 7, 7, { wash: '#e8b53a', washA: 1, w: 1.4, col: '#5a3a08' }); } pop();
      if (t > EV.us_vin) bubbleTag('В ШУБЕ!', x, y - 260, t, EV.us_vin, '#8a1a4a', 44, 0.05); }
  }
  WORLD.ussr = (t, u, cat) => {
    lay(14, () => { kitchen(t); }); lay(3.6, () => { appliances(t); hostess(t); });
    lay(1.3, () => { counter(t); }); lay(1, () => { cat(); });
  };
  DIR.ussr = {
    outfit: 'hostess', light: { side: 1, rim: '#fff0d0' }, grade: ['#70c0c0', 0.08],
    act: () => [[S0.ussr, 'proud'], [EV.us_60, 'talk'], [EV.us_dress, 'grin'], [EV.us_vin, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 900, y: 1760, s: 1.12, flip: true, look: [0.6, 0.5], hand: [130, -240 + Math.abs(Math.sin(t * 10)) * 30], handF: [-80, -240], prop: 'graterP' }),
    cam: () => [[S0.ussr, 560, 1000, 0.12], [EV.us_60, 360, 900, 0.16], [EV.us_dress, 700, 1200, 0.32, 'x'], [EV.us_vin, 720, 1180, 0.28], [S1.ussr, 720, 1180, 0.32]]
  };
  // ---------------------------------------------------------------- переход: иней затягивает кадр и оттаивает
  TRANS_IN.ussr = { a: 0.2, b: 0.5, runA: 1, fx(k, t, A, B) {
    const c = k < 0.45 ? sm(k / 0.45) : 1 - sm((k - 0.45) / 0.55); drawBuf(k < 0.45 ? A : B, 1, 540, 960);
    scr(() => { ctx.fillStyle = `rgba(230,244,255,${0.75 * c})`; ctx.fillRect(0, 0, W, H); const r = rng(3830); for (let i = 0; i < 70; i++) { const x = r() * W, y = r() * H, l = (30 + r() * 90) * c; for (let q = 0; q < 6; q++) { const a = q * 1.047 + r(); pencil([[x, y], [x + Math.cos(a) * l, y + Math.sin(a) * l]], { w: 2, col: '#ffffff', a: c, pass2: false }); } } });
  } };
})();
