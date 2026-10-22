/* 002 — `diet`: «Семьдесят седьмой: американцам — меньше красного мяса. А в бургерных одни котлеты.» Бургерная 1977: неон, шахматный пол, музыкальный автомат,
   хромированные табуреты, посетители в клёшах и с афро, телевизор. «меньше красного мяса» — газета «EAT LESS RED MEAT» шлёпается на стойку, по ТВ — сенат,
   посетители отодвигают бургеры. «одни котлеты» — меню-табло: BURGER · CHEESEBURGER · DOUBLE · BIG… а курицы — ноль. Том — повар у гриля, котлеты шкворчат.
   Переход В сцену: конверт распахивается, внутри — новая сцена. */
(() => {
  EV.dt_meat = wtw('s5', 'красного');
  EV.dt_paper = EV.dt_meat - 0.25;
  EV.dt_menu = wtw('s5', 'бургерных');
  EV.dt_only = wtw('s5', 'котлеты.');
  SHAKES.push([EV.dt_paper + 0.15, 0.2, 10]);
  KEYW.push('красного', 'котлеты.');

  function wall(t) {                                                   // бирюзовая стена 70-х, неон, табло меню, телевизор
    vgrad(-600, 1600, ['#1a4a4a', '#2a6a64', '#c86a3a']);
    for (let i = 0; i < 14; i++) pencil([[-300 + i * 120, 720], [-300 + i * 120, 1300]], { w: 26, col: i % 2 ? '#e8a03a' : '#c8582a', a: 0.85, pass2: false });
    rect(-300, 700, 1700, 30, { wash: '#d8dce0', washA: 1, w: 2, col: '#3a3e44' });
    push(540, 150, 1, -0.02); const on = Math.sin(t * 9) > -0.8; ctx.save(); ctx.font = '600 110px Osw'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.shadowColor = on ? 'rgba(255,80,120,1)' : 'rgba(0,0,0,0)'; ctx.shadowBlur = 40; ctx.lineWidth = 8; ctx.strokeStyle = on ? '#ffb0c8' : '#5a2a3a'; ctx.strokeText('BURGERS', 0, 0); ctx.restore(); glow(0, 0, 400, 'rgba(255,90,140,1)', on ? 0.25 : 0.05); pop();
    const m = rect(480, 250, 560, 420, { wash: '#1a1410', washA: 1, w: 5, col: '#c99636', key: 2500 }); const items = ['BURGER', 'CHEESEBURGER', 'DOUBLE BURGER', 'BIG BURGER', 'BURGER JR.', 'CHICKEN'];
    items.forEach((s, i) => { const y = 290 + i * 62, ch = s === 'CHICKEN', lit = t > EV.dt_menu - 0.1 + i * 0.12; txt(s, 510, y + 10, 40, { font: 'Osw', col: ch ? '#7a7a7a' : lit ? '#ffe08a' : '#a89a6a', align: 'left' }); txt(ch ? '—' : '$0.' + (55 + i * 10), 1010, y + 10, 40, { font: 'Osw', col: ch ? '#d9482b' : '#ffe08a', align: 'right' });
      if (!ch && lit) { push(940, y + 6, 0.32); ell(0, 6, 60, 18, { wash: '#d89a4a', washA: 1, w: 3 }); rect(-62, -6, 124, 14, { wash: '#5a2a10', washA: 1, w: 2 }); blob([[-60, -6], [-50, -40], [0, -54], [50, -40], [60, -6]], { wash: '#e8a85a', washA: 1, w: 3 }); pop(); } });
    if (t > EV.dt_only) { const k = clamp((t - EV.dt_only) / 0.3); pencil([[500, 600], [500 + 520 * k, 600]], { w: 6, col: '#d9482b', pass2: false }); bubbleTag('КУРИЦЫ НЕТ', 760, 720, t, EV.dt_only + 0.15, '#d9482b', 44, -0.05); }
    push(200, 600, 1, 0.04); const tv = rect(-130, -110, 260, 210, { wash: '#6a4a2a', washA: 1, w: 3, col: '#1a0a04', key: 2501 }); const sc = rect(-110, -90, 200, 170, { wash: '#2a3a3a', washA: 1, w: 3, col: '#000' }); ctx.save(); ctx.clip(sc.path);
    if (t > EV.dt_paper) { vgrad(330, 500, ['#5a6a8a', '#3a4a6a']); human(-10, 80, 0.4, t, { body: '#2a2a34', hair: '#c8c8c8', face: 'angry', armL: 'down', armR: 'point', seed: 91 }); txt('U.S. SENATE', -10, -70, 22, { font: 'Osw', col: '#ffffff' }); } else { vgrad(330, 500, ['#8aa0a0', '#4a6060']); }
    for (let y = -90; y < 80; y += 6) pencil([[-110, y], [90, y]], { w: 1.4, col: '#000', a: 0.15, pass2: false }); ctx.restore(); glow(-10, 0, 140, 'rgba(160,220,255,1)', 0.15); for (const sd of [-1, 1]) pencil([[sd * 40, -110], [sd * 80, -170]], { w: 3, col: '#2a2a2a', pass2: false }); pop();
  }
  function jukebox(t) { push(-60, 1300, 1); const j = shape(spline([[-110, 0], [-120, -300], [-60, -420], [60, -420], [120, -300], [110, 0]], true, 8), { wash: '#c8382a', washA: 1, w: 3, col: '#2a0a04', key: 2510 });
    for (let i = 0; i < 6; i++) { const c = ['#ffe08a', '#7ae8ff', '#ff8ac8'][i % 3]; pencil(spline([[-90 + i * 4, -20], [-100 + i * 6, -300], [-50 + i * 10, -400]], false, 6), { w: 6, col: c, a: 0.5 + 0.5 * Math.sin(t * 6 + i), pass2: false }); }
    rect(-70, -260, 140, 90, { wash: '#f6f0d8', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) pencil([[-60, -244 + i * 20], [60, -244 + i * 20]], { w: 1.4, col: '#8a8a8a', pass2: false }); glow(0, -200, 160, 'rgba(255,200,120,1)', 0.35); pop();
    for (let i = 0; i < 4; i++) { const k = (t * 0.6 + i / 4) % 1; txt('♪', -40 + Math.sin(k * 6 + i) * 40, 860 - k * 300, 50, { font: 'Osw', col: '#ffe08a', a: 1 - k }); } }
  function customers(t) {                                              // посетители 70-х на табуретах: афро, клёш, кепки; на «красного» отодвигают бургеры
    const no = t > EV.dt_meat + 0.1; [[180, '#d8682a', '#2a1a0a', 'afro'], [420, '#6a3a8a', '#e8c070', null], [660, '#3a7a4a', '#4a2a1a', 'cap'], [880, '#c89a3a', '#1a1a1a', null]].forEach(([x, c, h, hat], i) => {
      pencil([[x, 1300], [x, 1180]], { w: 8, col: '#c8ccd0' }); ell(x, 1170, 50, 14, { wash: '#d9482b', washA: 1, w: 2.4, col: '#3a0a04' });
      human(x, 1170, 0.9, t, { body: c, legs: '#3a4a7a', hair: h, face: no ? (i % 2 ? 'shock' : 'angry') : 'smile', armL: 'hold', armR: no ? 'point' : 'hold', seed: 92 + i, flip: i % 2 ? -1 : 1, hat: hat === 'cap' ? 'cap' : undefined, hatCol: '#d9482b', beard: i === 2 ? 'short' : undefined });
      if (hat === 'afro') ell(x, 1170 + (-238 - 66) * 0.9, 62, 54, { wash: '#2a1a0a', washA: 1, w: 2, col: '#000' }); });
  }
  function counter(t) {                                                // стойка с хромом, бургеры на тарелках, газета шлёпается
    const b = rect(-300, 1300, 1700, 700, { wash: '#e8e0d0', washA: 1, w: 3, col: '#2a2a2a', key: 2520 }); for (let i = 0; i < 20; i++) rect(-300 + i * 90, 1340, 90, 90, { wash: i % 2 ? '#1a1a1a' : '#f6f2e8', washA: 1, line: false }); rect(-300, 1300, 1700, 40, { wash: '#c8ccd0', washA: 1, w: 2.4, col: '#2a2e34' });
    const no = t > EV.dt_meat + 0.1; [[200, 0], [450, 1], [680, 2]].forEach(([x, i]) => { const dx = no ? -sm(clamp((t - EV.dt_meat - 0.1 - i * 0.1) / 0.4)) * 60 : 0; ell(x + dx, 1290, 80, 16, { wash: '#f6f6f2', washA: 1, w: 2, col: '#3a3a3a' }); push(x + dx, 1270, 0.7);
      ell(0, 6, 60, 18, { wash: '#d89a4a', washA: 1, w: 2.4, col: '#3a1a08' }); rect(-62, -10, 124, 18, { wash: '#4a2008', washA: 1, w: 2 }); blob([[-62, -8], [-70, 0], [70, 0], [62, -8]], { wash: '#6a9a2a', washA: 1, w: 1.6 }); blob([[-60, -10], [-50, -44], [0, -58], [50, -44], [60, -10]], { wash: '#e8a85a', washA: 1, w: 2.4, col: '#3a1a08' });
      for (let q = 0; q < 6; q++) ell(-30 + q * 12, -40 + (q % 2) * 6, 2.4, 1.6, { wash: '#fff6d8', washA: 1, line: false }); pop(); });
    if (t > EV.dt_paper) { const k = clamp((t - EV.dt_paper) / 0.25), y = lerp(600, 1250, k * k); push(520, y, 1, -0.12 + (1 - k) * 0.6); const p = rect(-200, -130, 400, 260, { wash: '#efe8d8', washA: 1, w: 2.6, col: '#2a2a2a', key: 2521 });
      txt('THE DAILY NEWS · 1977', 0, -100, 22, { font: 'Osw', col: '#2a2a2a' }); pencil([[-180, -84], [180, -84]], { w: 2, col: '#2a2a2a', pass2: false }); txt('EAT LESS', 0, -40, 56, { font: 'Osw', col: '#1a1a1a' }); txt('RED MEAT!', 0, 20, 56, { font: 'Osw', col: '#a8241e' });
      for (let i = 0; i < 4; i++) pencil([[-180, 64 + i * 16], [180, 64 + i * 16]], { w: 1.4, col: '#8a8a8a', pass2: false }); pop(); if (k >= 1 && t < EV.dt_paper + 0.6) { const kk = (t - EV.dt_paper - 0.25) / 0.35; for (let i = 0; i < 10; i++) { const a = -Math.PI + i / 9 * Math.PI; pencil([[520 + Math.cos(a) * 220 * (1 + kk), 1260 + Math.sin(a) * 60 * (1 + kk)], [520 + Math.cos(a) * 300 * (1 + kk), 1260 + Math.sin(a) * 90 * (1 + kk)]], { w: 4, col: '#ffffff', a: 1 - kk, pass2: false }); } } }
  }
  function grill(t) {                                                  // гриль перед Томом: котлеты шкворчат, дым
    const x = 760, y = 1520; rect(x - 220, y - 30, 440, 60, { wash: '#2a2a2a', washA: 1, w: 3, col: '#000', key: 2530 }); for (let i = 0; i < 9; i++) pencil([[x - 200 + i * 50, y - 26], [x - 200 + i * 50, y + 26]], { w: 3, col: '#5a5a5a', pass2: false });
    for (let i = 0; i < 3; i++) { const px = x - 130 + i * 130, hop = Math.abs(Math.sin(t * 7 + i)) * 4; ell(px, y - 34 - hop, 56, 18, { wash: '#5a2a10', washA: 1, w: 2.4, col: '#1a0804' }); for (let q = 0; q < 3; q++) pencil([[px - 40 + q * 30, y - 44 - hop], [px - 30 + q * 30, y - 28 - hop]], { w: 3, col: '#1a0804', a: 0.7, pass2: false });
      for (let q = 0; q < 3; q++) { const k = (t * 0.9 + q / 3 + i * 0.2) % 1; ell(px + Math.sin(k * 7 + i) * 20, y - 80 - k * 300, 30 + k * 40, 22 + k * 30, { wash: '#ffffff', washA: 0.3 * (1 - k), line: false }); } }
  }
  WORLD.diet = (t, u, cat) => {
    lay(14, () => { wall(t); }); lay(3.4, () => { jukebox(t); customers(t); }); lay(1.4, () => { counter(t); });
    lay(1, () => { cat(); }); lay(0.9, () => { grill(t); });
  };
  DIR.diet = {
    outfit: 'diner', light: { side: 1, rim: '#ffb0d0' }, grade: ['#ff8a60', 0.12],
    act: () => [[S0.diet, 'grin'], [EV.dt_paper + 0.1, 'shock'], [EV.dt_meat + 0.4, 'scared'], [EV.dt_menu, 'suspicious'], [EV.dt_only, 'annoyed']],
    pose: (t, u, b) => Object.assign(b, { x: 860, y: 1820, s: 1.25, flip: true, look: t < EV.dt_paper ? [0.4, 0.5] : t < EV.dt_menu ? [0.6, 0.3] : [0.5, -0.8], hand: t < EV.dt_paper ? [160, -260 + Math.abs(Math.sin(t * 8)) * 40] : [90, -330], handF: [-100, -200],
      prop: t < EV.dt_paper ? 'spatulaP' : undefined, sweat: t > EV.dt_only, tailUp: t < EV.dt_paper }),
    cam: () => [[S0.diet, 640, 1300, 0.28], [EV.dt_paper, 560, 1160, 0.12, 'x'], [EV.dt_meat + 0.4, 560, 1100, 0.06], [EV.dt_menu, 720, 700, 0.14], [S1.diet, 740, 680, 0.2]]
  };
  Object.assign(PROPS, { spatulaP() { push(0, -30, 1, -0.4); pencil([[0, 20], [0, -80]], { w: 8, col: '#3a2a1a' }); rect(-34, -150, 68, 70, { wash: '#c8ccd0', washA: 1, w: 2.2, col: '#2a2e34' }); for (let i = 0; i < 3; i++) pencil([[-18 + i * 18, -140], [-18 + i * 18, -96]], { w: 3, col: '#5a6068', pass2: false }); pop(); } });
  // ---------------------------------------------------------------- переход: конверт распахивается, внутри — новая сцена
  TRANS_IN.diet = { a: 0.15, b: 0.55, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1 + k * 0.2, 540, 960); scr(() => { ctx.fillStyle = `rgba(30,16,8,${0.5 * k})`; ctx.fillRect(0, 0, W, H); });
    const g = sm(clamp((k - 0.35) / 0.65)), w = lerp(560, 1500, g), h = lerp(360, 2400, g), cx = 540, cy = 980, fl = sm(clamp(k / 0.4));
    const P = new Path2D(); P.rect(cx - w / 2, cy - h / 2, w, h); scr(() => { ctx.fillStyle = '#f2e6c8'; ctx.fill(P); }); inPath(P, () => drawBuf(B, 1, 540, 960, clamp(fl * 1.5)));
    scr(() => { pencil([[cx - w / 2, cy - h / 2], [cx + w / 2, cy - h / 2], [cx + w / 2, cy + h / 2], [cx - w / 2, cy + h / 2], [cx - w / 2, cy - h / 2]], { w: 6, col: '#5a4020', pass2: false });
      if (g < 0.6) { const fy = cy - h / 2, tip = fy + lerp(h * 0.5, -h * 0.5, fl); poly([[cx - w / 2, fy], [cx + w / 2, fy], [cx, tip]], { wash: '#e8d8b0', washA: 1 - g, w: 4, col: '#5a4020', a: 1 - g }); if (fl < 0.5) ell(cx, tip - 10, 34, 34, { wash: '#a8241e', washA: 1, w: 2 }); } });
  } };
})();
