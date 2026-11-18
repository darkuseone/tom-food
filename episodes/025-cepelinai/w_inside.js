/* 025 — `inside` (ТОМ-МАЛЫШ, раз за ролик): «Внутри — свинина, творог или грибы, сверху — шкварки. Лёгкий ужин? Забудь!» Микромир внутри
   разрезанного цеппелина: своды из тёртого картофеля (бугристые стены-пещера с крахмальным блеском), в центре — мясная скала-начинка с луком
   и зеленью, справа — творожные валуны, грибы-деревья; сверху сквозь разрез — тёплый свет кухни и пар. Том-малыш в поварском колпаке с
   фонариком. По словам: «свинина» — Том-малыш взбирается на мясную скалу; «творог» — прыгает на творожный валун, тот проминается; «грибы» —
   грибы-деревья качаются; «шкварки» — сверху градом падают шкварки-метеориты, Том уворачивается; «Лёгкий ужин? Забудь!» — сверху медленно
   стекает сметанный водопад. Пауза-гэг: Том-малыш, наевшись, ложится на спину с круглым пузом, рядом шлёпается последняя шкварка — «бум».
   Переход В сцену: нож разрезает кадр по диагонали, половинки разъезжаются, внутри — начинка. */
(() => {
  EV.in_meat = wtw('s5', 'свинина,');
  EV.in_curd = wtw('s5', 'творог');
  EV.in_mush = wtw('s5', 'грибы,');
  EV.in_spirg = wtw('s5', 'шкварки.');
  EV.in_light = wtw('s5', 'Лёгкий');
  EV.in_gag = LE('s5') + 0.05;
  SHAKES.push([EV.in_spirg + 0.3, 0.2, 8], [EV.in_gag + 0.3, 0.15, 6]);
  KEYW.push('шкварки.', 'Забудь!');

  function cave(t) {                                                    // своды из тёртого картофеля, разрез сверху со светом
    vgrad(-900, 1600, ['#f4e8c8', '#d8cba8', '#b8a880']); const r = rng(25500);
    const top = shape([[-900, -900], [1900, -900], [1900, -100], [1400, 40], [900, -60], [540, 80], [100, -40], [-400, 60], [-900, -60]], { wash: '#c8b890', washA: 1, w: 3, col: '#6a5a3a', key: 25501 }); shadeG(top.path, 0, -900, 0, 80, '#8a7a5a', 0.4);
    const cut = blob([[-200, -500], [540, -620], [1300, -500], [1100, -380], [540, -420], [0, -380]], { wash: '#ffe8b0', washA: 1, w: 2, col: '#8a6a3a', key: 25502 }); glow(540, -500, 400, 'rgba(255,230,170,1)', 0.35);
    for (let i = 0; i < 90; i++) { const x = -880 + r() * 2760, y = -880 + r() * 2400; pencil([[x, y], [x + 10 + r() * 10, y + (r() - 0.5) * 6]], { w: 2, col: i % 3 ? '#a89a78' : '#fff6e0', a: 0.55, pass2: false }); }
    for (let i = 0; i < 7; i++) { const x = -800 + i * 400; blob([[x - 140, 1600], [x - 120, 700 + (i % 2) * 100], [x, 600 + (i % 3) * 60], [x + 120, 700], [x + 140, 1600]], { wash: i % 2 ? '#d8c8a0' : '#c8b890', washA: 1, w: 2, col: '#7a6a4a' }); }
    shaft(540, -460, 360, 2200, 0, 'rgba(255,236,190,1)', 0.16);
  }
  function filling(t) {                                                 // мясная скала, творожные валуны, грибы-деревья
    const m = blob([[-120, 1440], [-160, 1180], [-60, 1000], [120, 960], [260, 1060], [300, 1300], [260, 1440]], { wash: CP.meat, washA: 1, w: 3, col: CP.meatD, key: 25510 }); shadeG(m.path, 0, 960, 0, 1440, '#c8786a', 0.35); const r = rng(25511); for (let i = 0; i < 26; i++) ell(-110 + r() * 380, 1000 + r() * 420, 8 + r() * 10, 6 + r() * 6, { wash: i % 4 ? '#7a3428' : '#e8c0a0', washA: 1, line: false }); for (let i = 0; i < 6; i++) ell(-60 + i * 60, 1060 + (i % 2) * 120, 14, 6, { wash: '#4a8a2a', washA: 0.9, line: false });
    const press = t > EV.in_curd && t < EV.in_curd + 0.6 ? Math.sin((t - EV.in_curd) / 0.6 * 3.14) * 0.15 : 0;
    for (const [x, y, s] of [[640, 1440, 1.1], [820, 1440, 0.8]]) { push(x, y, s, 0); const c = blob([[-110, 0], [-120, -110 * (1 - (x === 640 ? press : 0))], [-60, -170 * (1 - (x === 640 ? press : 0))], [60, -170 * (1 - (x === 640 ? press : 0))], [120, -110], [110, 0]], { wash: '#fbf8f0', washA: 1, w: 2.4, col: '#8a8070' }); shadeG(c.path, 0, -170, 0, 0, '#e0d8c8', 0.4); for (let i = 0; i < 10; i++) ell(-80 + (i % 5) * 40, -40 - Math.floor(i / 5) * 60, 8, 6, { wash: '#ece4d4', washA: 1, line: false }); pop(); }
    const sway = t > EV.in_mush ? Math.sin((t - EV.in_mush) * 6) * 0.08 * Math.exp(-(t - EV.in_mush)) : 0;
    for (const [x, h, s] of [[1020, 360, 1.2], [1180, 280, 1], [-380, 320, 1.1]]) { push(x, 1440, s, sway); rect(-26, -h, 52, h, { wash: '#f0e8d8', washA: 1, w: 2, col: '#6a5a4a' }); const cp = blob([[-120, -h + 10], [-90, -h - 80], [0, -h - 110], [90, -h - 80], [120, -h + 10]], { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#3a2008' }); shadeG(cp.path, 0, -h - 110, 0, -h, '#c8945a', 0.4); for (let i = 0; i < 5; i++) pencil([[-90 + i * 45, -h + 6], [-80 + i * 40, -h - 10]], { w: 1.4, col: '#5a3a18', pass2: false }); pop(); }
  }
  function sky(t) {                                                     // шкварки-метеориты и сметанный водопад
    if (t > EV.in_spirg - 0.1) { const r = rng(25520); for (let i = 0; i < 14; i++) { const q = clamp((t - EV.in_spirg + 0.1 - r() * 0.8) / 0.7); if (q <= 0) continue; const x = -200 + r() * 1400, y = lerp(-600, 1400 - (i % 4) * 30, q * q); push(x, y, 2.2, t * 3 + i); rect(-10, -8, 20, 16, { wash: i % 2 ? CP.spirg : '#a8582a', washA: 1, w: 1.4, col: CP.spirgD }); pop(); if (q < 1) pencil([[x, y - 20], [x - 10, y - 120]], { w: 4, col: '#ffd890', a: 0.5 * (1 - q), pass2: false }); } }
    if (t > EV.in_light - 0.2) { const q = clamp((t - EV.in_light + 0.2) / 1.4); const w = blob([[440, -460], [640, -460], [620, -460 + 1700 * q], [460, -460 + 1700 * q]], { wash: CP.smet, washA: 1, w: 2, col: CP.smetD }); shadeG(w.path, 440, 0, 640, 0, '#ffffff', 0.4); if (q > 0.7) ell(540, 1440, 220 * q, 40, { wash: CP.smet, washA: 1, w: 2, col: CP.smetD }); }
    if (t > EV.in_gag + 0.25) { push(780, 1420, popK(t, EV.in_gag + 0.25, 0.3) * 3, 0.4); rect(-12, -10, 24, 20, { wash: CP.spirg, washA: 1, w: 1.6, col: CP.spirgD }); pop(); push(780, 1200, 1); txt('БУМ', 0, 0, 60, { font: 'Osw', col: '#c8221a', a: clamp(1 - (t - EV.in_gag - 0.25) / 0.6) }); pop(); }
  }
  function front(t) { push(-260, 1900, 1.8); blob([[-150, 100], [-160, -100], [-60, -220], [80, -200], [150, -60], [140, 100]], { wash: '#c8b890', washA: 1, w: 3, col: '#6a5a3a' }); pop(); push(1300, -300, 1.8); blob([[-150, -200], [-100, 80], [60, 140], [150, 0]], { wash: '#d8c8a0', washA: 1, w: 3, col: '#6a5a3a' }); pop(); steamWisps(300, 1200, 1.6, t, 3, 25530, 0.35); }
  WORLD.inside = (t, u, cat) => {
    lay(8, () => { cave(t); haze('#fff0d0', 0.06); });
    lay(1.4, () => { filling(t); });
    lay(1, () => { cat(); sky(t); lightPool(540, 1460, 500, 100, 'rgba(255,230,170,1)', 0.35); castShadow(540, 1460, 140, 120, 0.4, 0.3); });
    lay(0.6, () => { front(t); motes(20, [-200, 0, 1300, 1500], '#fff8e8', t, 25540, { sp: 4, sz: 4, a: 0.45, wob: 4 }); moodDark(540, 1000, 500, 1500, '#2a1a08', 0.4); });
  };
  DIR.inside = {
    outfit: 'chef', light: { side: 1, rim: '#fff0c0' }, grade: ['#f0c890', 0.06],
    act: () => [[S0.inside, 'awe'], [EV.in_meat, 'grin'], [EV.in_curd, 'laugh'], [EV.in_mush, 'awe'], [EV.in_spirg, 'scared'], [EV.in_light, 'shock'], [EV.in_gag, 'smug'], [EV.in_gag + 0.3, 'shock']],
    pose: (t, u, b) => { let x = 200, y = 1440;
      if (t < EV.in_curd) { const k = clamp((t - S0.inside) / (EV.in_curd - S0.inside)); x = lerp(-60, 140, k); y = lerp(1440, 1000, k); }
      else if (t < EV.in_spirg) { const k = clamp((t - EV.in_curd) / 0.5); x = lerp(140, 600, k); y = lerp(1000, 1270, k) - Math.sin(k * 3.14) * 220 - (t > EV.in_curd + 0.5 ? Math.abs(Math.sin((t - EV.in_curd) * 9)) * 50 : 0); }
      else { const k = clamp((t - EV.in_spirg) / 0.8); x = lerp(600, 420, k); y = lerp(1270, 1440, k); }
      const lie = t > EV.in_gag; return Object.assign(b, { x, y, s: 0.62, flip: 0, rot: lie ? -1.4 : 0, walk: !lie && t > EV.in_spirg && t < EV.in_spirg + 0.8 ? t * 9 : undefined, look: t > EV.in_spirg ? [0, -0.9] : [0.6, -0.3], hand: t > EV.in_spirg && !lie ? [60, -460] : [140, -260], handF: t > EV.in_spirg && !lie ? [-60, -460] : [-100, -240], sweat: t > EV.in_spirg, squash: b.squash + (lie ? 0.15 : 0) }); },
    cam: () => [[S0.inside, 540, 800, 0.14], [EV.in_curd, 400, 1050, 0.24], [EV.in_spirg, 540, 1050, 0.22], [EV.in_light, 540, 1000, 0.2], [EV.in_gag, 460, 1250, 0.28], [S1.inside, 460, 1250, 0.28]]
  };
  // ---------------------------------------------------------------- переход: нож разрезает кадр по диагонали, половинки разъезжаются
  TRANS_IN.inside = { a: 0.3, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k); drawBuf(B, 1, 540, 960); const cut = clamp(e / 0.4), op = clamp((e - 0.4) / 0.6) * 1400;
    const P1 = new Path2D(); P1.moveTo(-200, -200); P1.lineTo(1400, -200); P1.lineTo(-200, 2200); P1.closePath(); const P2 = new Path2D(); P2.moveTo(1400, -200); P2.lineTo(1400, 2200); P2.lineTo(-200, 2200); P2.closePath();
    inPath(P1, () => drawBuf(A, 1, 540, 960, 1, null, -op * 0.6, -op * 0.4)); inPath(P2, () => drawBuf(A, 1, 540, 960, 1, null, op * 0.6, op * 0.4));
    scr(() => { if (cut < 1) { const x = lerp(1400, -200, cut), y = lerp(-200, 2200, cut); push(x, y, 1, -0.98); poly([[-260, -24], [260, -24], [300, 0], [260, 24], [-260, 24]], { wash: '#e8ecf0', washA: 1, w: 4, col: '#2a2e34' }); rect(-440, -22, 180, 44, { wash: '#4a2a14', washA: 1, w: 3 }); pop(); } pencil([[1400, -200], [lerp(1400, -200, cut), lerp(-200, 2200, cut)]], { w: 6, col: '#fffaf0', a: 0.8 * (1 - clamp((e - 0.5) * 2)), pass2: false }); });
  } };
})();
