/* 023 — `panic`: «И хранится она долго — поэтому в любую панику её сметают первой. / Не зря её звали «чёрной кашей» — запас на чёрный день.»
   Магазин у дома: холодные лампы дневного света под потолком, длинные стеллажи с крупами, макаронами, консервами, мукой, сахаром, ценники; полка
   «ГРЕЧКА» в центре — пачки исчезают одна за другой под руками покупателей; табличка «ГРЕЧКА — ВСЁ». Покупатели с тележками и корзинами бегут,
   бабушка с двумя сумками, мужчина тащит мешок, кассирша за кассой хватается за голову. Справа — большое окно на улицу: днём светло, на
   «чёрный день» небо становится чёрным, молния. Над стеллажом — старинная жестяная вывеска «ЧЁРНАЯ КАША».
   Том — в куртке (+ фартук) с тележкой, полной пачек гречки. По словам: «долго» — Том показывает пачку, бирка «ХРАНИТСЯ ДОЛГО»; «панику» —
   свет мигает, покупатели вбегают; «первой.» — последняя пачка исчезает с полки, Том хватает её; ««чёрной» — над стеллажом вспыхивает вывеска
   «ЧЁРНАЯ КАША»; «чёрный день.» — за окном чернеет, молния, Том прячет пачку за спину и косится. Главный свет — лампы дневного света; второй — окно.
   Переход В сцену: автоматические двери магазина разъезжаются. */
(() => {
  EV.pn_long = wtw('s11', 'долго');
  EV.pn_panic = wtw('s11', 'панику');
  EV.pn_first = wtw('s11', 'первой.');
  EV.pn_black = wtw('s12', '«чёрной');
  EV.pn_day = wtw('s12', 'день.');
  SHAKES.push([EV.pn_panic + 0.1, 0.18, 7], [EV.pn_day + 0.05, 0.2, 9]);
  KEYW.push('панику', 'чёрный');
  const dark = t => clamp((t - EV.pn_day + 0.6) / 0.6);
  const flick2 = t => (t > EV.pn_panic && t < EV.pn_panic + 0.6 && Math.sin(t * 60) > 0.3) ? 0.6 : 1;
  function shelves(t) {                                                  // стена-стеллажи: крупы, макароны, консервы, мука, ценники; центральная полка «ГРЕЧКА»
    vgrad(-800, 1500, ['#d8e0dc', '#e8ece6', '#c8d0cc']);
    for (let i = 0; i < 20; i++) rect(-800 + i * 140, -800, 136, 300, { wash: '#e0e6e2', washA: 1, w: 1, col: '#a8b0ac' });
    const left = Math.max(0, 1 - clamp((t - EV.pn_panic) / Math.max(0.3, EV.pn_first - EV.pn_panic)));
    for (let s = 0; s < 5; s++) { const y = -380 + s * 300; rect(-800, y + 240, 2700, 26, { wash: '#a8b0b8', washA: 1, w: 1.6, col: '#3a4048' }); rect(-800, y + 266, 2700, 30, { wash: '#f4f4f0', washA: 1, w: 1, col: '#8a9098' });
      for (let i = 0; i < 26; i++) { const x = -760 + i * 100, kind = (i + s * 3) % 5; if (Math.abs(x - 560) < 300) continue;
        if (kind === 0) for (let q = 0; q < 3; q++) { const c = rect(x + q * 28, y + 160, 26, 80, { wash: ['#c8343a', '#e8c040', '#2a6aa8'][(i + q) % 3], washA: 1, w: 1, col: '#2a2a2a' }); rect(x + q * 28, y + 190, 26, 22, { wash: '#f4f0e0', washA: 1, line: false }); }
        else if (kind === 1) { const b = blob([[x, y + 240], [x - 4, y + 150], [x + 20, y + 120], [x + 70, y + 120], [x + 90, y + 150], [x + 86, y + 240]], { wash: '#f4f0e4', washA: 1, w: 1.2, col: '#6a6a6a' }); rect(x + 10, y + 170, 70, 30, { wash: '#2a7a4a', washA: 1, line: false }); }
        else if (kind === 2) for (let q = 0; q < 2; q++) rect(x + q * 44, y + 110, 40, 130, { wash: ['#f8d860', '#e8843a'][q], washA: 1, w: 1.2, col: '#5a4a1a' });
        else if (kind === 3) for (let q = 0; q < 3; q++) { const c = ell(x + 14 + q * 30, y + 200, 14, 40, { wash: '#c8ccd4', washA: 1, w: 1.2, col: '#3a3a44' }); rect(x + q * 30, y + 190, 28, 26, { wash: ['#c8343a', '#3a8a5a'][q % 2], washA: 1, line: false }); }
        else for (let q = 0; q < 2; q++) grechkaPack(x + 20 + q * 50, y + 240, 0.36, 0, { key: 24400 + i * 3 + q + s * 100, band: '#3a7a3a' });
        rect(x, y + 268, 60, 24, { wash: '#f8e840', washA: 1, w: 1, col: '#5a5a1a' }); txt(String(30 + ((i * 17 + s * 11) % 90)), x + 30, y + 288, 16, { font: 'Osw', col: '#2a2a2a' }); } }
    push(560, 0, 1); const sg = rect(-280, -500, 560, 90, { wash: '#3a7a3a', washA: 1, w: 3, col: '#0a2a0a', key: 24420 }); txt('ГРЕЧКА', 0, -438, 60, { font: 'Osw', col: '#ffffff' });
    for (let s = 0; s < 4; s++) { const y = -380 + s * 300; for (let i = 0; i < 9; i++) { const idx = s * 9 + i, gone = idx / 36 >= left; if (gone) continue; grechkaPack(-240 + i * 60, y + 240, 0.42, 0, { key: 24430 + idx, band: '#3a7a3a' }); } }
    if (left < 0.05) { const k = popK(t, EV.pn_first, 0.35); push(0, 220, k, -0.06); rect(-170, -40, 340, 80, { wash: '#f4f0e0', washA: 1, w: 3, col: '#a8241e' }); txt('ГРЕЧКА — ВСЁ', 0, 14, 40, { font: 'Osw', col: '#a8241e' }); pop(); }
    pop();
  }
  function tinSign(t) {                                                 // жестяная вывеска «ЧЁРНАЯ КАША»
    if (t > EV.pn_black - 0.05) { const k = popK(t, EV.pn_black, 0.4), fl = 0.8 + Math.sin(t * 9) * 0.2; push(820, -330, k * 0.8); const tin = rect(-300, -70, 600, 140, { wash: '#1a1a1a', washA: 1, w: 4, col: '#c8a040', key: 24440 }); shadeG(tin.path, 0, -70, 0, 70, '#3a3a3a', 0.4); rect(-286, -56, 572, 112, { wash: 'rgba(0,0,0,0)', washA: 0, w: 3, col: '#c8a040' }); for (const sx of [-270, 270]) for (const sy of [-50, 50]) nb(sx, sy, 6, '#c8a040'); txt('ЧЁРНАЯ КАША', 0, 22, 64, { font: 'Osw', col: '#f4d860', a: fl }); pop(); }
  }
  function lamps(t) {                                                    // потолок: лампы дневного света
    const on = flick2(t) * (1 - dark(t) * 0.25); rect(-800, -1100, 2700, 200, { wash: '#c8ccc8', washA: 1, w: 1, col: '#8a8a8a' });
    for (let i = 0; i < 5; i++) { const x = -300 + i * 380; rect(x, -940, 260, 30, { wash: '#f8fcff', washA: on, w: 2, col: '#6a6a6a' }); glow(x + 130, -925, 220, 'rgba(230,245,255,1)', 0.25 * on); }
  }
  function window_(t) {                                                  // окно на улицу: дома, машины, деревья; на «чёрный день» — туча и молния
    const d = dark(t); push(1380, 300, 1); const fr = rect(-260, -560, 520, 900, { wash: '#8ab8e0', washA: 1, w: 14, col: '#4a5058', key: 24450 });
    ctx.save(); ctx.clip(fr.path); vgrad(-560, 340, [lerpC('#8ab8e0', '#1a1a2a', d), lerpC('#d8e8f4', '#2a2a3a', d)]); for (let i = 0; i < 3; i++) { const b = rect(-260 + i * 180, -200 - i * 40, 160, 600, { wash: lerpC('#d8c8b0', '#3a3640', d), washA: 1, w: 1.4, col: '#4a4a4a' }); windows(-250 + i * 180, -180 - i * 40, 140, 360, 3, 6, 24451 + i, d > 0.5 ? 0.6 : 0.2, '#ffd98a', '#9fd8ff', 0.85); }
    for (let i = 0; i < 4; i++) { const x = ((t * 120 + i * 260) % 900) - 400; rect(x, 230, 140, 50, { wash: ['#c8343a', '#3a6ab8', '#e8c040', '#5a5a5a'][i], washA: 1, w: 1.4 }); for (const wx of [24, 110]) ell(x + wx, 282, 16, 16, { wash: '#1a1a1a', washA: 1, line: false }); }
    if (d > 0) { for (let i = 0; i < 4; i++) blob([[-300 + i * 160, -560], [-200 + i * 160, -480 + (i % 2) * 40], [-100 + i * 160, -560]], { wash: '#0a0a14', washA: 0.85 * d, line: false }); if (t > EV.pn_day && t < EV.pn_day + 0.3) { pencil([[40, -560], [0, -400], [60, -380], [10, -200]], { w: 8, col: '#f4f8ff', pass2: false }); screenFill('#e8f0ff', 0.25, 'lighter'); } motes(20, [-260, -560, 260, 340], '#a8b8d8', t, 24455, { sp: 300, vx: -60, sz: 3, a: 0.6 * d, stretch: 1 }); }
    ctx.restore(); pencil([[0, -560], [0, 340]], { w: 10, col: '#4a5058' }); pop();
    if (d < 1) shaft(1380, -260, 400, 1400, 0.5, 'rgba(230,240,255,1)', 0.1 * (1 - d));
  }
  function crowd(t) {                                                    // покупатели: бегут с тележками, бабушка с сумками, мужчина с мешком, кассирша
    const run = clamp((t - EV.pn_panic) / 2.5);
    for (let i = 0; i < 3; i++) { const x = lerp(-200 + i * 120, 300 + i * 120, run), y = 1290; human(x, y, 1.0, t, { body: ['#c8584a', '#3a6a9a', '#7a5a3a'][i], legs: '#3a3a44', hat: i === 1 ? 'scarf' : undefined, hatCol: '#e8e0d0', long: i === 1, armL: run > 0 && run < 1 ? 'up' : 'hold', armR: 'hold', face: run > 0 ? 'shock' : 'calm', seed: 24460 + i, look: 0.6 });
      push(x + 70, y, 0.7); pencil([[-60, -120], [60, -120], [50, -40], [-50, -40], [-60, -120]], { w: 3, col: '#8a9098', pass2: false }); for (let q = 0; q < 4; q++) pencil([[-56 + q * 30, -120], [-46 + q * 26, -40]], { w: 1.4, col: '#8a9098', pass2: false }); for (const wx of [-40, 40]) ell(wx, -20, 10, 10, { wash: '#2a2a2a', washA: 1, line: false }); if (run > 0.3) for (let q = 0; q < 3; q++) grechkaPack(-30 + q * 30, -50, 0.3, 0.2 * q, { key: 24465 + q + i * 3 }); pop(); }
    human(1000, 1290, 1.02, t, { body: '#6a3a5a', legs: '#3a2a3a', long: 1, hat: 'scarf', hatCol: '#d8343a', hair: '#d8d8d8', armL: 'down', armR: 'down', face: t > EV.pn_first ? 'angry' : 'calm', seed: 24470, flip: -1, look: -0.6 });
    for (const sd of [-1, 1]) { push(1000 + sd * 70, 1200, 0.9); blob([[-40, 0], [-44, -80], [44, -80], [40, 0]], { wash: '#c8b898', washA: 1, w: 1.6, col: '#5a4a2a' }); grechkaPack(0, -60, 0.32, 0.1, { key: 24471 + sd }); pop(); }
    human(820, 1290, 1.04, t, { body: '#3a4a3a', legs: '#2a2a2a', hat: 'cap', hatCol: '#2a2a2a', armL: 'up', armR: 'up', face: 'grin', seed: 24473, flip: -1, look: -0.3 }); grainSack(820, 1290 - 340, 0.6, { key: 24474, label: 'ГРЕЧКА', size: 18 });
    push(-260, 1300, 1); const cs = rect(-120, -150, 240, 150, { wash: '#a8b0b8', washA: 1, w: 2, col: '#3a4048' }); rect(-110, -200, 90, 60, { wash: '#2a2a2a', washA: 1, w: 1.4 }); txt('КАССА', 40, -100, 22, { font: 'Osw', col: '#2a2a2a' }); pop();
    human(-300, 1150, 0.9, t, { body: '#c8343a', legs: '#3a3a44', hair: '#c8784a', armL: t > EV.pn_first ? 'up' : 'hold', armR: t > EV.pn_first ? 'up' : 'hold', face: t > EV.pn_first ? 'shock' : 'smile', seed: 24475, look: 0.5 });
  }
  function cartFront(t) {                                                // тележка Тома с пачками и пол-плитка
    const fl = rect(-400, 1440, 2000, 600, { wash: '#c8ccc4', washA: 1, w: 2, col: '#5a5a5a', key: 24480 }); for (let i = 0; i < 12; i++) pencil([[-400 + i * 180, 1440], [-500 + i * 200, 2000]], { w: 2, col: '#8a8e88', pass2: false }); for (let i = 0; i < 6; i++) pencil([[-400, 1480 + i * 80], [1600, 1480 + i * 80]], { w: 2, col: '#8a8e88', pass2: false });
    lightPool(560, 1520, 640, 130, 'rgba(230,245,255,1)', 0.25 * flick2(t));
    push(400, 1660, 1); const bx = poly([[-200, -230], [200, -230], [170, 0], [-170, 0]], { wash: 'rgba(0,0,0,0)', washA: 0, line: false });
    for (let i = 0; i < 9; i++) grechkaPack(-160 + (i % 5) * 80, -60 - Math.floor(i / 5) * 80, 0.62, (i % 3 - 1) * 0.15, { key: 24481 + i, band: '#3a7a3a' });
    for (let i = 0; i < 9; i++) pencil([[-200 + i * 50, -230], [-170 + i * 42, 0]], { w: 3, col: '#a8b0b8', pass2: false }); for (let k = 0; k < 4; k++) pencil([[-200 + k * 8, -230 + k * 58], [200 - k * 8, -230 + k * 58]], { w: 3, col: '#a8b0b8', pass2: false }); pencil([[-200, -230], [200, -230]], { w: 6, col: '#c8ccd4', pass2: false }); pencil([[200, -230], [260, -300]], { w: 8, col: '#c8343a', pass2: false });
    for (const wx of [-150, 150]) ell(wx, 30, 22, 22, { wash: '#2a2a2a', washA: 1, w: 2, col: '#0a0a0a' }); pop();
    castShadow(400, 1700, 360, 100, 0.2, 0.25);
    if (t > EV.pn_long) bubbleTag('ХРАНИТСЯ ДОЛГО', 760, 1250, t, EV.pn_long + 0.1, '#3a7a3a', 34, 0.04);
  }
  WORLD.panic = (t, u, cat) => {
    lay(9, () => { push(0, 800, 1); lamps(t); shelves(t); pop(); push(-420, 460, 1); window_(t); pop(); push(0, 800, 1); tinSign(t); pop(); haze('#e8f0f0', 0.04); });
    lay(2.4, () => { crowd(t); castShadow(1000, 1290, 110, 150, 0.2, 0.22); castShadow(820, 1290, 110, 150, 0.2, 0.22); });
    lay(1, () => { cat(); cartFront(t); });
    lay(0.75, () => { motes(10, [300, 700, 1000, 1500], '#ffffff', t, 24490, { sp: 6, sz: 3, a: 0.3, wob: 6 }); moodDark(560, 1100, 520, 1500, lerpC('#1a2a3a', '#000000', dark(t)), 0.3 + dark(t) * 0.25); });
    if (t > EV.pn_day - 0.2) screenFill('#0a0a2a', 0.18 * dark(t), 'multiply');
  };
  DIR.panic = {
    outfit: 'pufA', light: { side: 1, rim: '#d8ecff' }, grade: ['#a8c8d8', 0.06],
    act: () => [[S0.panic, 'smug'], [EV.pn_long, 'proud'], [EV.pn_panic, 'shock'], [EV.pn_first, 'grin'], [EV.pn_black, 'sideeye'], [EV.pn_day, 'suspicious']],
    pose: (t, u, b) => { const grab = t > EV.pn_first - 0.1 && t < EV.pn_black, hide = t > EV.pn_day - 0.1, show = t > EV.pn_long - 0.1 && t < EV.pn_panic;
      return Object.assign(b, { x: 640, y: 1590, s: 1.16, flip: false, look: show ? [0.4, -0.3] : t < EV.pn_first ? [-0.6, -0.4] : hide ? [0.7, 0] : [-0.3, -0.5],
        hand: hide ? [60, -150] : grab ? [-60, -420] : show ? [170, -320] : [160, -220], handF: [-170, -200], prop: show || grab ? 'packP' : undefined, propAng: 0, squint: hide, sweat: t > EV.pn_panic && t < EV.pn_first + 0.5 }); },
    cam: () => [[S0.panic, 600, 1080, 0.24], [EV.pn_long, 640, 1120, 0.28], [EV.pn_panic, 520, 1060, 0.24], [EV.pn_first, 580, 1000, 0.26], [EV.pn_black, 580, 980, 0.25], [EV.pn_day, 640, 1110, 0.3], [S1.panic, 640, 1110, 0.31]]
  };
  TRANS_IN.panic = { a: 0.1, b: 0.5, runA: 1, fx(k, t, A, B) {          // стеклянные двери разъезжаются в стороны
    const e = sm(k), g = e * 560; drawBuf(B, 1.05 - e * 0.05, 540, 960);
    scr(() => { for (const sd of [-1, 1]) { const x0 = sd < 0 ? 0 - g : 540 + g; ctx.save(); const P = new Path2D(); P.rect(x0, 0, 540, 1920); ctx.clip(P); ctx.drawImage(A, sd * g, 0); ctx.restore(); rect(x0, 0, 540, 1920, { wash: '#bfe0f0', washA: 0.25, w: 14, col: '#7a8a94' }); pencil([[x0 + (sd < 0 ? 500 : 40), 900], [x0 + (sd < 0 ? 500 : 40), 1100]], { w: 10, col: '#c8ccd4', pass2: false }); } });
  } };
})();
