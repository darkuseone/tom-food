/* 013 — `tavern`: «В трактирах её нарядили: маслины, каперсы, лимон — и подавали в мельхиоровой миске.» Московский трактир XIX в.: тёмные панели, вывеска
   «ТРАКТИРЪ», оркестрион с трубами, люстра со свечами, полки с самоварами и чайниками, окно на заснеженную улицу с санями. Купцы пьют чай из блюдец, половые в
   белом с полотенцами. Том — половой в белой рубахе — несёт на подносе мельхиоровую миску. По словам: «маслины» — с потолка падают маслины в миску;
   «каперсы» — сыплются каперсы; «лимон» — ломтик лимона шлёпается сверху; «мельхиоровой» — миска сверкает бликом; немая пауза — ломтик лимона крутится
   на краю, как монетка, Том подмигивает. Переход В сцену: катится огромная маслина, внутри её кольца — новый кадр. */
(() => {
  EV.tv_dress = wtw('s4', 'нарядили:');
  EV.tv_ol = wtw('s4', 'маслины,');
  EV.tv_cap = wtw('s4', 'каперсы,');
  EV.tv_lem = wtw('s4', 'лимон');
  EV.tv_metal = wtw('s4', 'мельхиоровой');
  EV.tv_gag = LE('s4');
  SHAKES.push([EV.tv_lem + 0.1, 0.15, 6]);
  KEYW.push('маслины,', 'мельхиоровой');

  function hall(t) {                                                    // панели, вывеска, окно со снегом и санями, полки, оркестрион
    vgrad(-600, 1500, ['#2a1a10', '#4a2a18', '#5a3a20']);
    for (let i = 0; i < 12; i++) { const x = -400 + i * 170; const p = rect(x, 600, 160, 700, { wash: '#5a3418', washA: 1, w: 2, col: '#1a0a04' }); rect(x + 14, 640, 132, 300, { wash: '#6a4020', washA: 1, w: 1.6, col: '#2a1408' }); }
    for (let y = -500; y < 600; y += 60) pencil([[-400, y], [1600, y]], { w: 2, col: '#3a2010', a: 0.5, pass2: false }); vgrad(-500, 600, ['#7a5a3a', '#9a7a52'], 0.6);
    push(540, 80, 1); rect(-280, -50, 560, 100, { wash: '#1a2a1a', washA: 1, w: 4, col: '#c8a050' }); txt('ТРАКТИРЪ', 0, 26, 70, { font: 'Osw', col: '#e8c878' }); pop();
    push(980, 380, 1); const w = rect(-150, -170, 300, 300, { wash: '#2a3458', washA: 1, w: 8, col: '#2a1408', key: 13500 }); ctx.save(); ctx.clip(w.path); vgrad(-170, 130, ['#1a2448', '#4a5a7a']); rect(-160, 60, 320, 80, { wash: '#e8eef4', washA: 1, line: false }); const sx = ((t * 80) % 500) - 250; push(sx, 60, 0.6); rect(-60, -40, 120, 40, { wash: '#8a2a1a', washA: 1, w: 1.6 }); blob([[60, -20], [100, -60], [140, -50], [120, 0]], { wash: '#5a3a2a', washA: 1, w: 1.4 }); pop(); motes(30, [-150, -170, 150, 130], '#ffffff', t, 13501, { sp: 40, sz: 3, a: 0.8, wob: 1 }); ctx.restore(); pencil([[0, -170], [0, 130]], { w: 6, col: '#2a1408' }); pop();
    push(-120, 1000, 1); rect(-200, -560, 400, 560, { wash: '#6a2a1a', washA: 1, w: 3, col: '#1a0404' }); for (let i = 0; i < 9; i++) { const h = 160 + Math.abs(4 - i) * -20 + 80; const p = rect(-170 + i * 38, -520, 28, h, { wash: '#c8a050', washA: 1, w: 1.6, col: '#5a3a08' }); metalG(p.path, -170 + i * 38 + 6, -520 + h / 2, 40, '#fff0b0', '#c8a050', '#6a4a10'); } rect(-180, -300, 360, 200, { wash: '#3a1a0a', washA: 1, w: 2 }); for (let i = 0; i < 3; i++) ell(-90 + i * 90, -200, 30, 30, { wash: '#f4ecd8', washA: 1, w: 2 }); txt('♪', 120 + Math.sin(t * 4) * 20, -620 - (t * 60 % 100), 40, { col: '#f4e6c8', a: 0.8 }); pop();
    for (let i = 0; i < 5; i++) { const x = 300 + i * 90; samovar(x, 560, 0.55, t); } rect(260, 560, 480, 16, { wash: '#3a2010', washA: 1, w: 2 });
  }
  function chandelier(t) { push(540, 260, 1); pencil([[0, -300], [0, 0]], { w: 5, col: '#8a6a2a' }); ell(0, 0, 160, 24, { line: true, w: 6, col: '#8a6a2a' }); for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283, x = Math.cos(a) * 160, y = Math.sin(a) * 24; candle(x, y, 0.6, t, 13510 + i); } glow(0, 0, 380, 'rgba(255,210,130,1)', 0.35); pop(); }
  function guests(t) {                                                  // купцы с чаем, половой с полотенцем
    for (const [x, sd] of [[120, 1], [900, -1]]) { push(x, 1190, 0.9); ell(0, 0, 140, 30, { wash: '#f4ecd8', washA: 1, w: 2, col: '#6a5a3a' }); pencil([[0, 0], [0, 200]], { w: 10, col: '#3a2410' }); samovar(-60 * sd, -6, 0.5, t); ell(70 * sd, -8, 30, 8, { wash: '#f8f6f0', washA: 1, w: 1.4 }); pop(); }
    human(-20, 1330, 1.12, t, { body: '#2a3a6a', legs: '#2a2a2a', hair: '#5a3a1a', beard: 'long', face: t > EV.tv_metal ? 'grin' : 'smile', armL: 'hold', armR: 'up', look: 0.7, seed: 13520, long: 1 }); hat20(-20, 1330, 1.12, 'fedora', '#2a2a2a');
    human(1060, 1330, 1.12, t, { body: '#5a2a1a', legs: '#2a2a2a', hair: '#d8d0c0', beard: 'short', face: t > EV.tv_ol ? 'shock' : 'smile', armL: 'hold', armR: t > EV.tv_lem ? 'point' : 'hold', look: -0.7, seed: 13521, flip: -1 });
    human(760, 1290, 1.0, t, { body: '#fbf8f0', legs: '#f4f0e6', hair: '#3a2a1a', face: 'smile', armL: 'hold', armR: 'up', look: -0.4, seed: 13522, flip: -1 });
  }
  function hero(t) {                                                    // миска на подносе, начинка падает по словам, блик мельхиора, лимон-монетка на паузе
    const bx = 470, by = 1450; push(bx, by + 40, 1); const tr = ell(0, 0, 300, 50, { wash: '#c8ccd2', washA: 1, w: 2.6, col: '#3a3e44' }); metalG(tr.path, -80, -10, 320, '#ffffff', '#b8bcc4', '#5a5e66'); pop();
    solyankaBowl(bx, by, 1.1, t, { metal: 1, key: 13530 });
    const drop = (t0, n, f) => { if (t < t0 - 0.3) return; for (let i = 0; i < n; i++) { const q = clamp((t - t0 + 0.3 - i * 0.06) / 0.4); if (q >= 1) continue; f(bx - 120 + i * (240 / n), lerp(500, by - 20, q * q), i); } };
    drop(EV.tv_ol, 6, (x, y) => oliveS(x, y, 16)); drop(EV.tv_cap, 10, (x, y) => ell(x, y, 8, 8, { wash: '#6a7a2a', washA: 1, w: 1 }));
    if (t > EV.tv_lem - 0.3 && t < EV.tv_gag) { const q = clamp((t - EV.tv_lem + 0.3) / 0.35); lemonSlice(bx + 70, lerp(500, by - 20, q * q), 50, q * 6, { flat: lerp(1, 0.45, q) }); }
    if (t >= EV.tv_gag) { const g = t - EV.tv_gag, sp = Math.max(0.05, Math.abs(Math.cos(g * 14))); push(bx + 210, by - 60 - Math.abs(Math.sin(g * 7)) * 10, 1); ctx.save(); ctx.scale(sp, 1); lemonSlice(0, 0, 44, 0); ctx.restore(); pop(); }
    if (t > EV.tv_metal) { const k = clamp((t - EV.tv_metal) / 0.5); const gx = lerp(bx - 220, bx + 220, k); glow(gx, by + 20, 60, 'rgba(255,255,255,1)', 0.8 * Math.sin(k * Math.PI)); txt('✦', gx, by + 30, 50, { col: '#ffffff', a: Math.sin(k * Math.PI) }); bubbleTag('МЕЛЬХИОР', 470, 1180, t, EV.tv_metal + 0.1, '#8a8e94', 50, -0.05); }
  }
  function front(t) {                                                   // передний план: край стойки с самоваром, полотенце, пар чая
    const st = rect(-400, 1700, 2000, 400, { wash: '#4a2a14', washA: 1, w: 3, col: '#1a0a04' }); shadeG(st.path, 0, 1700, 0, 2000, '#1a0a04', 0.4); pencil([[-400, 1704], [1600, 1704]], { w: 8, col: '#c8a050', pass2: false });
    push(1140, 1700, 1.4); samovar(0, 0, 1.0, t); for (let i = 0; i < 3; i++) { const q = (t * 0.45 + i / 3) % 1; pencil(spline([[0, -260], [Math.sin(q * 6 + i) * 30, -260 - q * 160], [Math.sin(q * 9 + i) * 40, -260 - q * 300]], false, 5), { w: 9, col: '#ffffff', a: 0.3 * (1 - q), pass2: false }); } pop();
    push(-40, 1720, 1.4); const tw = shape(spline([[-60, -200], [60, -200], [70, 60], [-50, 70]], true, 6), { wash: '#f8f4ea', washA: 1, w: 1.6, col: '#8a7a5a' }); for (let i = 0; i < 3; i++) pencil([[-50, 30 + i * 10], [60, 30 + i * 10]], { w: 3, col: '#c8221a', pass2: false }); pop();
    motes(24, [100, 400, 1000, 1600], '#ffe8b0', t, 13540, { sp: 6, sz: 4, a: 0.45, wob: 2 });
  }
  WORLD.tavern = (t, u, cat) => {
    lay(12, () => { hall(t); haze('#ffd8a0', 0.06); });
    lay(6, () => { chandelier(t); });
    lay(3, () => { guests(t); haze('#ffcf90', 0.04); });
    lay(1, () => { cat(); });
    lay(0.95, () => { hero(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.tavern = {
    outfit: 'traktirA', light: { side: -1, rim: '#ffd890' }, grade: ['#ffb060', 0.1],
    act: () => [[S0.tavern, 'proud'], [EV.tv_ol, 'awe'], [EV.tv_lem, 'grin'], [EV.tv_metal, 'proud'], [EV.tv_gag + 0.2, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 690, y: 1680, s: 1.08, flip: -1, look: t < EV.tv_gag ? [-0.6, 0.5] : [-0.2, 0.2], hand: [280, -230], handF: [-60, -230], tailUp: t > EV.tv_lem }),
    afterCat: (t, u, P) => { push(P.x + 60 * P.s, P.y - 230 * P.s, P.s); const tw = shape([[-14, 0], [14, 0], [18, 160], [-18, 160]], { wash: '#ffffff', washA: 1, w: 1.6, col: '#8a8a8a' }); pencil([[-16, 130], [16, 130]], { w: 3, col: '#2a5ab8', pass2: false }); pop(); },
    cam: () => [[S0.tavern, 560, 700, 0.06], [EV.tv_dress - 0.2, 520, 1180, 0.2, 'x'], [EV.tv_ol, 480, 1260, 0.26], [EV.tv_metal, 520, 1260, 0.22], [EV.tv_gag, 560, 1300, 0.3], [S1.tavern, 560, 1300, 0.32]]
  };
  // ---------------------------------------------------------------- переход: катится огромная маслина, в её кольце — новый кадр
  TRANS_IN.tavern = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), R = lerp(80, 1400, e), cx = lerp(-200, 540, clamp(e * 2)), cy = 960; drawBuf(A, 1, 540, 960);
    inCircle(cx, cy, R * 0.7, () => drawBuf(B, 1, 540, 960)); scr(() => { ctx.save(); ctx.lineWidth = R * 0.6; ctx.strokeStyle = SL.olive; ctx.globalAlpha = 1 - clamp((e - 0.7) / 0.3); ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.283); ctx.stroke(); ctx.restore(); glow(cx - R * 0.5, cy - R * 0.5, R * 0.3, 'rgba(255,255,255,1)', 0.4 * (1 - e)); });
  } };
})();
