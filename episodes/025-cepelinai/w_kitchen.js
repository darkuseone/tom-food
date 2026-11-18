/* 025 — `kitchen`: «Тесто — инженерия: сырой картофель трут, отжимают, а крахмал со дна — обратно.» Деревенская литовская кухня: бревенчатые
   стены, большая белёная печь с огнём (главный свет — печь, тёплый), окно с аистом на гнезде, на полках глиняные горшки, рушник, связки сушёных
   грибов, мешок картошки, вёдра; бабушка в платке с тёркой, внучка с миской. Том в рубахе с фартуком трёт картофель на огромной тёрке.
   По словам: «инженерия» — над столом появляется чертёж-схема «ТЁРКА → МАРЛЯ → КРАХМАЛ → ТЕСТО» со стрелками; «трут» — Том трёт, стружка летит;
   «отжимают» — бабушка выкручивает марлю, сок струйкой в банку; «крахмал» — банка: крахмал оседает белым слоем, стрелка «обратно» в тесто.
   Переход В сцену: тёрка проезжает по кадру и сдирает прошлую сцену стружкой. */
(() => {
  EV.kt_eng = wtw('s4', 'инженерия:');
  EV.kt_grate = wtw('s4', 'трут,');
  EV.kt_squeeze = wtw('s4', 'отжимают,');
  EV.kt_starch = wtw('s4', 'крахмал');
  EV.kt_back = wtw('s4', 'обратно.');
  SHAKES.push([EV.kt_back, 0.1, 4]);
  KEYW.push('инженерия:', 'обратно.');

  function room(t) {                                                    // брёвна, окно с аистом, полки, грибы, печь
    vgrad(-800, 1500, ['#3a2414', '#5a3a22', '#6a4a2c']);
    for (let i = 0; i < 16; i++) { const y = -800 + i * 120; const l = rect(-900, y, 2800, 116, { wash: i % 2 ? '#7a5030' : '#6a4428', washA: 1, w: 1.6, col: '#2a1408', key: 25400 + i }); shadeG(l.path, 0, y, 0, y + 116, '#2a1408', 0.35); ell(-880, y + 58, 30, 50, { wash: '#8a6040', washA: 1, w: 1.4 }); }
    push(820, -120, 1); const w = rect(-180, -240, 360, 420, { wash: '#a8c8e0', washA: 1, w: 10, col: '#3a2010', key: 25420 }); ctx.save(); ctx.clip(w.path); vgrad(-240, 180, ['#8ab0d8', '#f0e0c0']); sil([[-180, 180], [-180, 60], [180, 40], [180, 180]], '#6a8a3a', 1); pencil([[60, 40], [60, -120]], { w: 6, col: '#4a3a2a', pass2: false }); ell(60, -130, 60, 18, { wash: '#5a4a3a', washA: 1, line: false }); blob([[30, -150], [60, -190], [96, -160], [64, -140]], { wash: '#f8f4ea', washA: 1, w: 2 }); pencil([[94, -162], [126, -158]], { w: 3, col: '#e8442a', pass2: false }); ctx.restore(); pencil([[0, -240], [0, 180]], { w: 8, col: '#3a2010' }); pencil([[-180, -30], [180, -30]], { w: 8, col: '#3a2010' }); rect(-220, 180, 440, 24, { wash: '#f4ecd8', washA: 1, w: 1.6 }); for (let i = 0; i < 8; i++) poly([[-200 + i * 52, 190], [-180 + i * 52, 180], [-160 + i * 52, 190], [-180 + i * 52, 200]], { wash: '#c8221a', washA: 1, w: 0.8 }); pop();
    for (let j = 0; j < 2; j++) { const y = -300 + j * 240; rect(140, y, 420, 18, { wash: '#5a3a1e', washA: 1, w: 1.6 }); for (let i = 0; i < 6; i++) { const x = 170 + i * 66; blob([[x - 24, y], [x - 28, y - 60], [x - 12, y - 84], [x + 12, y - 84], [x + 28, y - 60], [x + 24, y]], { wash: ['#b8642a', '#8a5a3a', '#c8783a', '#6a4a2a'][(i + j) % 4], washA: 1, w: 1.6, col: '#3a1a08' }); } }
    for (let i = 0; i < 3; i++) { const x = -40 + i * 60; pencil([[x, -560], [x, -300]], { w: 2, col: '#8a6a3a', pass2: false }); for (let q = 0; q < 6; q++) blob([[x - 14, -520 + q * 40], [x, -540 + q * 40], [x + 14, -520 + q * 40], [x, -508 + q * 40]], { wash: '#6a4424', washA: 1, w: 1 }); }
    push(-420, 1000, 1); const o = rect(-260, -640, 520, 640, { wash: '#ece4d4', washA: 1, w: 3, col: '#6a5a4a', key: 25430 }); shadeG(o.path, 260, 0, -260, 0, '#a89a88', 0.4); const m = blob([[-110, -60], [-100, -200], [0, -250], [100, -200], [110, -60]], { wash: '#1a0804', washA: 1, w: 2.4 }); ctx.save(); ctx.clip(m.path); glow(0, -110, 220, 'rgba(255,140,50,1)', 0.75); ctx.globalCompositeOperation = 'lighter'; for (let i = 0; i < 7; i++) { const h = 70 + Math.sin(t * 9 + i * 2) * 25; ctx.fillStyle = i % 2 ? '#ffb040' : '#ff6a1a'; ctx.beginPath(); ctx.moveTo(-80 + i * 26, -60); ctx.quadraticCurveTo(-70 + i * 26, -60 - h, -60 + i * 26, -60); ctx.fill(); } ctx.restore(); pop();
    shaft(-420, 800, 320, 1300, -0.9, 'rgba(255,160,70,1)', 0.12);
  }
  function folk(t) {                                                    // бабушка с марлей, внучка с миской, мешок картошки
    const sq = t > EV.kt_squeeze; human(200, 1290, 1.05, t, { body: '#5a3a5a', legs: '#3a2a3a', hair: '#c8c8c8', face: sq ? 'grin' : 'smile', armL: sq ? 'up' : 'hold', armR: sq ? 'up' : 'hold', look: 0.3, seed: 25440, long: 1, hat: 'scarf', hatCol: '#e8c040' });
    if (sq) { const tw = Math.sin((t - EV.kt_squeeze) * 10) * 0.3; push(200, 920, 1, tw); blob([[-60, -20], [60, -20], [40, 40], [-40, 40]], { wash: '#f4f0e6', washA: 1, w: 2, col: '#8a8070' }); for (let i = 0; i < 4; i++) pencil([[-50 + i * 30, -20], [-40 + i * 26, 40]], { w: 1.4, col: '#c8c0b0', pass2: false }); pop(); for (let i = 0; i < 8; i++) { const q = ((t - EV.kt_squeeze) * 2 + i / 8) % 1; ell(200, 970 + q * 180, 4, 7, { wash: '#d8c890', washA: 0.8, line: false }); } }
    starchJar(200, 1180, 0.9, t > EV.kt_starch ? clamp((t - EV.kt_starch) / 0.8) * 0.3 + 0.2 : 0.15);
    human(1040, 1300, 0.85, t, { body: '#e8dcc0', legs: '#4a3a2a', hair: '#e8b860', face: 'grin', armL: 'hold', armR: 'hold', look: -0.6, seed: 25441, flip: -1, long: 1 }); push(1000, 1120, 1); ell(0, 0, 60, 20, { wash: '#c8743a', washA: 1, w: 2 }); ell(0, -4, 50, 12, { wash: CP.dough, washA: 1, line: false }); pop();
    push(-120, 1300, 1); const s = blob([[-90, 0], [-100, -150], [-60, -200], [60, -200], [100, -150], [90, 0]], { wash: '#c8b080', washA: 1, w: 2, col: '#5a4a2a' }); for (let i = 0; i < 5; i++) ell(-50 + i * 25, -200, 22, 16, { wash: '#c89a5a', washA: 1, w: 1.4, col: '#4a2a10' }); pop();
  }
  function scheme(t) {                                                  // чертёж-инженерия над столом
    if (t < EV.kt_eng - 0.1) return; const k = popK(t, EV.kt_eng - 0.1, 0.4); push(620, 900, k * 0.9);
    rect(-300, -90, 600, 180, { wash: '#2a4a7a', washA: 0.92, w: 3, col: '#f4f0e6' }); for (let i = 0; i < 12; i++) pencil([[-300 + i * 50, -90], [-300 + i * 50, 90]], { w: 1, col: '#6a8ab8', a: 0.5, pass2: false });
    const steps = [['ТЁРКА', EV.kt_grate], ['МАРЛЯ', EV.kt_squeeze], ['КРАХМАЛ', EV.kt_starch], ['ТЕСТО', EV.kt_back]];
    steps.forEach(([s, t0], i) => { const x = -225 + i * 150, on = t > t0 - 0.05; rect(x - 62, -30, 124, 60, { wash: on ? '#f4f0e6' : '#3a5a8a', washA: 1, w: 2, col: '#f4f0e6' }); txt(s, x, 10, 24, { font: 'Osw', col: on ? '#2a4a7a' : '#a8c0e0' }); if (i < 3) pencil([[x + 64, 0], [x + 86, 0]], { w: 3, col: '#f4f0e6', pass2: false }); });
    if (t > EV.kt_back) { const q = clamp((t - EV.kt_back) / 0.4); pencil(spline([[75, 32], [0, 80], [-150 * q + 75, 34]], false, 6), { w: 4, col: '#f0c020', pass2: false }); txt('обратно!', 0, 76, 26, { font: 'Hand', col: '#f0c020' }); }
    pop();
  }
  function table(t) {                                                   // стол (после cat): тёрка, стружка, миска, картофелины, банка
    const tb = rect(-500, 1440, 2100, 700, { wash: '#8a6a44', washA: 1, w: 3, col: '#2a1408', key: 25450 }); for (let i = 0; i < 6; i++) pencil([[-500, 1470 + i * 50], [1600, 1470 + i * 50]], { w: 2, col: '#5a3a1c', a: 0.5, pass2: false });
    grater(800, 1370, 0.9, 0.25); const gr = t > EV.kt_grate && t < EV.kt_back; if (gr) for (let i = 0; i < 10; i++) { const q = ((t - EV.kt_grate) * 3 + i / 10) % 1; pencil([[760 + i * 6, 1400 + q * 90], [770 + i * 6, 1420 + q * 90]], { w: 3, col: '#e8dcb8', pass2: false }); }
    push(820, 1500, 1); ell(0, 0, 130, 34, { wash: '#c8743a', washA: 1, w: 2.4, col: '#4a1a08' }); ell(0, -6, 110, 22, { wash: '#e8dcb8', washA: 1, line: false }); for (let i = 0; i < 12; i++) pencil([[-90 + i * 15, -10], [-84 + i * 15, 2]], { w: 2, col: '#b8a888', pass2: false }); pop();
    for (const [x, y] of [[300, 1470], [360, 1480], [420, 1468]]) { push(x, y, 1); blob([[-26, 4], [-18, -16], [6, -20], [24, -8], [24, 12], [4, 20], [-18, 18]], { wash: '#c89a5a', washA: 1, w: 2, col: '#4a2a10' }); pop(); }
    castShadow(560, 1600, 260, 200, 0.5, 0.3);
  }
  function front(t) { push(-220, 1980, 1.6); blob([[-150, 0], [-140, -120], [140, -120], [150, 0]], { wash: '#9a8a7a', washA: 1, w: 2.4 }); for (let i = 0; i < 5; i++) ell(-90 + i * 45, -126, 22, 10, { wash: '#c89a5a', washA: 1, w: 1.2 }); pop(); push(1240, -200, 1.5); for (let i = 0; i < 4; i++) { pencil([[i * 40 - 60, -500], [i * 40 - 60, -120 - i * 20]], { w: 3, col: '#8a6a3a', pass2: false }); for (let q = 0; q < 4; q++) blob([[i * 40 - 70, -260 + q * 36 - i * 20], [i * 40 - 60, -280 + q * 36 - i * 20], [i * 40 - 50, -260 + q * 36 - i * 20]], { wash: '#6a4424', washA: 1, w: 1 }); } pop(); }
  WORLD.kitchen = (t, u, cat) => {
    lay(12, () => { room(t); haze('#ffc890', 0.05); });
    lay(2.6, () => { folk(t); });
    lay(1, () => { cat(); table(t); scheme(t); lightPool(400, 1480, 560, 130, 'rgba(255,170,80,1)', 0.35); });
    lay(0.6, () => { front(t); motes(14, [-200, 300, 1300, 1400], '#fff0d0', t, 25460, { sp: 4, sz: 3, a: 0.4, wob: 3 }); moodDark(500, 1000, 500, 1500, '#140a08', 0.5); });
  };
  DIR.kitchen = {
    outfit: 'selA', light: { side: -1, rim: '#ffb070' }, grade: ['#ff9a50', 0.07],
    act: () => [[S0.kitchen, 'talk'], [EV.kt_eng, 'proud'], [EV.kt_grate, 'grin'], [EV.kt_squeeze, 'awe'], [EV.kt_starch, 'smug'], [EV.kt_back, 'laugh']],
    pose: (t, u, b) => { const gr = t > EV.kt_grate && t < EV.kt_back, rub = gr ? Math.sin(t * 16) * 40 : 0; return Object.assign(b, { x: 580, y: 1600, s: 1.16, flip: 1, look: t < EV.kt_squeeze ? [0.7, 0.5] : [-0.6, -0.1], hand: gr ? [230, -230 + rub] : [200, -280], handF: [-80, -220], prop: gr ? 'potatoP' : undefined }); },
    cam: () => [[S0.kitchen, 520, 1050, 0.24], [EV.kt_eng, 600, 1000, 0.26], [EV.kt_grate, 640, 1150, 0.3], [EV.kt_squeeze, 420, 1100, 0.28], [EV.kt_back, 580, 1100, 0.28], [S1.kitchen, 580, 1120, 0.28]]
  };
  // ---------------------------------------------------------------- переход: тёрка проезжает по кадру и сдирает прошлую сцену стружкой
  TRANS_IN.kitchen = { a: 0.25, b: 0.45, runA: 0.5, fx(k, t, A, B) {
    const e = sm(k), x = lerp(-300, 1500, e); drawBuf(B, 1, 540, 960); const P = new Path2D(); P.rect(x, 0, W + 400, H); inPath(P, () => drawBuf(A, 1, 540, 960));
    scr(() => { const g = rect(x - 160, -40, 220, 2000, { wash: '#c8ccd2', washA: 1, w: 4, col: '#3a3e44' }); shadeG(g.path, x + 60, 0, x - 160, 0, '#6a6e74', 0.5); for (let j = 0; j < 40; j++) for (let i = 0; i < 4; i++) ell(x - 130 + i * 50, 10 + j * 48, 10, 5, { wash: '#2a2e34', washA: 0.8, line: false }); for (let i = 0; i < 16; i++) { const r = rng(25470 + i); pencil([[x - 170 - r() * 120, r() * 1920], [x - 200 - r() * 160, r() * 1920]], { w: 6, col: '#e8dcb8', a: 0.8, pass2: false }); } });
  } };
})();
