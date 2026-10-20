/* 002 — `swap`: «Но рябчика сменила курица, а каперсы — горошек. Дичь ушла в лес.» Кухня ресторана 1939-го: кафель, медные котлы под вытяжкой,
   повара в колпаках режут, пар. На столе — старинные весы с двумя чашами: на «рябчика» в левой чаше рябчик, на «курица» в правую шлёпается курица — чаша
   перевешивает, рябчик подлетает; «каперсы — горошек»: банка каперсов уезжает, банка горошка въезжает. «Дичь ушла в лес» — живой рябчик топает к задней двери,
   за ней заснеженный ельник; оборачивается и машет крылом.  Переход В сцену: ложка мешает — кадр закручивается водоворотом. */
(() => {
  EV.sw_grouse = wtw('s4', 'рябчика');
  EV.sw_chick = wtw('s4', 'курица,');
  EV.sw_cap = wtw('s4', 'каперсы');
  EV.sw_pea = wtw('s4', 'горошек.');
  EV.sw_forest = wtw('s4', 'Дичь');
  SHAKES.push([EV.sw_chick + 0.1, 0.2, 10]);
  KEYW.push('курица,', 'горошек.', 'лес.');

  function kitchen(t) {                                                 // кафель, вытяжка, медь на крюках, окно раздачи
    vgrad(-500, 1600, ['#dce4dc', '#c8d4cc', '#a8b8b0']); for (let y = 300; y < 1300; y += 70) for (let x = -400; x < 1500; x += 70) rect(x, y, 70, 70, { wash: (x / 70 + y / 70) % 2 ? '#f0f2ea' : '#e2eae4', washA: 0.9, w: 1, col: '#8a9a8a', a: 0.35 });
    poly([[-200, 120], [700, 120], [620, 340], [-120, 340]], { wash: '#9aa0a8', washA: 1, w: 2.6, col: '#2a2e34' }); for (let i = 0; i < 6; i++) pencil([[-100 + i * 130, 140], [-60 + i * 110, 330]], { w: 2, col: '#5a5e66', a: 0.5, pass2: false });
    for (let i = 0; i < 6; i++) { const x = -60 + i * 130; pencil([[x, 340], [x, 400]], { w: 3, col: '#3a3a3a', pass2: false }); push(x, 450, 1, Math.sin(t * 1.5 + i) * 0.05); const p = ell(0, 0, 44 + (i % 2) * 10, 44 + (i % 2) * 10, { wash: '#c87a3a', washA: 1, w: 2.4, col: '#4a2008', key: 6000 + i }); metalG(p.path, -14, -14, 60, '#ffd8a0', '#c87a3a', '#6a3008'); pencil([[0, -50], [0, -110]], { w: 6, col: '#6a3008' }); pop(); }
  }
  function backdoor(t) {                                                // задняя дверь в заснеженный ельник (открывается на «Дичь»)
    const o = sm(clamp((t - EV.sw_forest + 0.3) / 0.5)); push(1000, 1260, 1); const fr = rect(-140, -560, 280, 560, { wash: '#1a2a3a', washA: 1, w: 4, col: '#2a1a0a' });
    ctx.save(); ctx.clip(fr.path); vgrad(-560, 0, ['#5a7aa8', '#c8d8e8']); for (let i = 0; i < 6; i++) spruce(-130 + i * 54, -40 - (i % 2) * 30, 260 + (i % 3) * 60, i % 2 ? '#2e4a3a' : '#1e3a2a'); motes(30, [-140, -560, 140, 0], '#ffffff', t, 6010, { sp: 50, sz: 4, a: 0.9 }); rect(-140, -40, 280, 40, { wash: '#f4f6fa', washA: 1, line: false }); ctx.restore();
    const dw = 280 * (1 - o); if (dw > 4) { const d = rect(-140, -560, dw, 560, { wash: '#7a5a3a', washA: 1, w: 3, col: '#2a1a0a' }); hatch(d.path, d.bb, { gap: 12, a: 0.2, col: '#2a1a0a', ang: 1.57, key: 6011 }); ell(-140 + dw - 30, -280, 10, 10, { wash: '#c8a050', washA: 1, w: 1.6 }); }
    rect(-120, -620, 240, 50, { wash: '#2e5a3a', washA: 1, w: 2, col: '#0a1a0a' }); txt('ЗАПАСНОЙ ВЫХОД', 0, -596, 22, { font: 'Osw', col: '#e8f0d0' }); pop();
  }
  function cooks(t) { for (const [x, sd, f] of [[120, 1, 1], [420, 2, -1]]) { human(x, 1180, 0.9, t, { body: '#f8f5ee', legs: '#3a3a3a', hair: '#3a2a1a', face: sd % 2 ? 'calm' : 'smile', armL: 'hold', armR: 'up', seed: 100 + sd, flip: f }); hat20(x, 1180, 0.9, 'chef', '#fff', f); }
    for (let i = 0; i < 3; i++) { const kk = (t * 0.5 + i / 3) % 1; ell(200 + i * 120, 1000 - kk * 400, 60 + kk * 60, 40 + kk * 30, { wash: '#ffffff', washA: 0.3 * (1 - kk), line: false }); } }
  function scale(t) {                                                   // весы: коромысло наклоняется, когда падает курица
    const tilt = t < EV.sw_chick ? -0.12 : lerp(-0.12, 0.18, popK(t, EV.sw_chick, 0.5)); push(400, 1430, 0.85);
    rect(-80, 0, 160, 60, { wash: '#6a4a2a', washA: 1, w: 2.4, col: '#2a1408' }); pencil([[0, 0], [0, -300]], { w: 14, col: '#c8a050' }); ell(0, -300, 18, 18, { wash: '#e8c070', washA: 1, w: 2 });
    push(0, -300, 1, tilt); pencil([[-300, 0], [300, 0]], { w: 12, col: '#c8a050' }); pop();
    for (const sd of [-1, 1]) { const px = sd * 300 * Math.cos(tilt), py = -300 + sd * 300 * Math.sin(tilt); for (const q of [-1, 1]) pencil([[px, py], [px + q * 110, py + 160]], { w: 2, col: '#8a7030', pass2: false });
      const pan = ell(px, py + 170, 130, 26, { wash: '#d8b060', washA: 1, w: 2.4, col: '#5a3a08' }); metalG(pan.path, px - 40, py + 160, 140, '#fff0c0', '#d8b060', '#7a5010');
      if (sd < 0 && t < EV.sw_chick + 0.1) roastBird(px, py + 160, 0.8, t, {}); if (sd < 0 && t >= EV.sw_chick + 0.1 && t < EV.sw_forest) { const k = t - EV.sw_chick - 0.1; roastBird(px + k * 200, py + 160 - 600 * k + 900 * k * k, 0.8, t, {}); }
      if (sd > 0 && t >= EV.sw_chick - 0.15) { const k = clamp((t - EV.sw_chick + 0.15) / 0.15); roastBird(px, py + 160 - (1 - k) * 700, 1.0, t, { chicken: 1, steam: 1 }); } }
    pop();
    if (t > EV.sw_chick) bubbleTag('РЯБЧИК → КУРИЦА', 520, 1100, t, EV.sw_chick + 0.1, '#d9482b', 46, -0.03);
  }
  function jars(t) {                                                    // каперсы уезжают, горошек въезжает
    const k = sm(clamp((t - EV.sw_cap) / 0.5)), kp = sm(clamp((t - EV.sw_pea + 0.2) / 0.5));
    push(lerp(140, -400, k), 1600, 0.9); const j = rect(-70, -160, 140, 160, { wash: '#d8e8c8', washA: 0.6, w: 2.6, col: '#3a5a3a' }); for (let i = 0; i < 26; i++) caper(-50 + (i % 6) * 20, -20 - Math.floor(i / 6) * 24, 1.6); rect(-70, -110, 140, 40, { wash: '#f2ead0', washA: 1, w: 1.6 }); txt('КАПЕРСЫ', 0, -90, 22, { font: 'Osw', col: '#3a5a1a' }); rect(-74, -184, 148, 26, { wash: '#7a5a3a', washA: 1, w: 2 }); pop();
    if (kp > 0) peaCan(lerp(-400, 140, kp), 1600, 1.0, 1);
    if (t > EV.sw_pea) bubbleTag('КАПЕРСЫ → ГОРОШЕК', 360, 1700, t, EV.sw_pea + 0.1, '#6b7a2e', 40, 0.04);
  }
  function liveGrouse(t) {                                              // живой рябчик уходит в лес и машет крылом
    if (t < EV.sw_forest - 0.2) return; const k = clamp((t - EV.sw_forest + 0.2) / 1.6), x = lerp(760, 1010, k), y = 1250, hop = Math.abs(Math.sin(t * 10)) * 14, wave = t > EV.sw_forest + 1.0;
    push(x, y - hop, 0.9, 0, k > 0.85 ? -1 : 1); ell(0, 6 + hop / 0.9, 50, 10, { wash: '#000', washA: 0.15, line: false });
    const b = blob([[-60, 0], [-70, -50], [-30, -90], [30, -90], [60, -50], [50, 0]], { wash: '#8a7a6a', washA: 1, w: 2.2, col: '#2a1a0a', key: 6050 }); hatch(b.path, b.bb, { gap: 7, a: 0.3, col: '#3a2a1a', ang: 0.6, key: 6051 }); for (let i = 0; i < 10; i++) ell(-40 + (i % 5) * 20, -60 + Math.floor(i / 5) * 24, 4, 3, { wash: '#f4ecd8', washA: 1, line: false });
    ell(40, -110, 30, 28, { wash: '#8a7a6a', washA: 1, w: 2, col: '#2a1a0a' }); poly([[30, -136], [44, -170], [52, -134]], { wash: '#6a5a4a', washA: 1, w: 1.6 }); poly([[66, -112], [86, -106], [66, -100]], { wash: '#3a2a1a', washA: 1, w: 1.2 }); ell(50, -116, 5, 5, { wash: '#1a0a04', washA: 1, w: 1 }); pencil([[40, -96], [60, -90]], { w: 3, col: '#1a1a1a', pass2: false }); ell(52, -126, 8, 3, { wash: '#d9482b', washA: 1, line: false });
    push(-10, -60, 1, wave ? -1.2 + Math.sin(t * 14) * 0.4 : 0.2); blob([[0, 0], [-40, -10], [-70, 10], [-40, 24]], { wash: '#6a5a4a', washA: 1, w: 1.8, col: '#2a1a0a' }); pop();
    for (const sd of [-1, 1]) pencil([[sd * 14, -4], [sd * 14 + Math.sin(t * 10) * 10, 30]], { w: 3, col: '#8a5a2a', pass2: false }); pop();
    if (t > EV.sw_forest + 0.3) bubbleTag('ПОКА!', x - 20, y - 220, t, EV.sw_forest + 0.6, '#2e5a3a', 40, -0.05);
  }
  WORLD.swap = (t, u, cat) => {
    lay(12, () => { kitchen(t); }); lay(4, () => { cooks(t); backdoor(t); haze('#f0f4ea', 0.06); }); lay(3, () => liveGrouse(t));
    lay(1, () => { cat(); });
    lay(0.9, () => { const tb = rect(-300, 1460, 1700, 700, { wash: '#d8dce0', washA: 1, w: 3, col: '#2a2e34', key: 6070 }); metalG(tb.path, 300, 1500, 1200, '#ffffff', '#c8ccd0', '#6a6e74'); pencil([[-300, 1470], [1400, 1470]], { w: 4, col: '#ffffff', a: 0.6, pass2: false }); scale(t); jars(t); });
  };
  DIR.swap = {
    outfit: 'chefO', light: { side: 1, rim: '#f0fff0' }, grade: ['#a8d0c0', 0.1],
    act: () => [[S0.swap, 'suspicious'], [EV.sw_chick, 'shock'], [EV.sw_cap, 'sideeye'], [EV.sw_pea, 'smug'], [EV.sw_forest, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 880, y: 1640, s: 1.05, flip: -1, look: t < EV.sw_forest ? [-0.6, 0.4] : [0.8, -0.2], hand: t > EV.sw_forest ? [-150, -380 + Math.sin(t * 12) * 30] : [140, -250], handF: [-120, -200] }),
    cam: () => [[S0.swap, 560, 1200, 0.16], [EV.sw_chick, 540, 1220, 0.18], [EV.sw_cap, 500, 1280, 0.18], [EV.sw_forest, 760, 1120, 0.24], [S1.swap, 820, 1100, 0.3]]
  };
  // ---------------------------------------------------------------- переход: ложка мешает — водоворот закручивает кадр
  TRANS_IN.swap = { a: 0.3, b: 0.4, runA: 0.6, fx(k, t, A, B) {
    drawBuf(B, 1.15 - 0.15 * sm(clamp((k - 0.4) / 0.6)), 540, 960); const shrink = 1 - sm(k), R0 = 1250 * shrink;
    if (R0 > 2) for (let i = 9; i >= 0; i--) { const r1 = R0 * (i + 1) / 10, rot = k * k * (10 - i) * 0.9; inCircle(540, 960, r1, () => drawBuf(A, shrink * 0.4 + 0.6, 540, 960, 1, null, 0, 0, rot)); }
    scr(() => { pencil(Array.from({ length: 80 }, (_, i) => { const a = i * 0.25 + k * 10, r = i * 14 * shrink; return [540 + Math.cos(a) * r, 960 + Math.sin(a) * r]; }), { w: 6, col: '#fcf4dc', a: 0.6 * (1 - k), pass2: false, gap: false });
      push(540 + Math.cos(k * 12) * 200 * shrink, 960 + Math.sin(k * 12) * 200 * shrink, 2.2, k * 12); PROPS.spoon(); pop(); });
  } };
})();
