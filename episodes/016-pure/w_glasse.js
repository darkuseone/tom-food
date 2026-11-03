/* 016 — `glasse`: «Пюре с молоком и маслом напечатала англичанка Ханна Гласс — в 1747-м.» Георгианская кухня Лондона: большой очаг с вертелом и
   котлами, медные кастрюли на стене, полка с фаянсом, окно-эркер на улицу с кэбами, служанка у очага, за столом Ханна Гласс в чепце пишет пером; рядом
   типографский пресс с листами. Том-повар с фартуком толчёт картошку в миске. По словам: «молоком» — из кувшина льётся молоко в миску; «маслом» — кубик
   масла плюхается и тает; «напечатала» — пресс опускается, выезжает лист, книга THE ART OF COOKERY открывается на странице «TO MASH POTATOES»;
   «1747» — дата штампом на титуле. Переход В сцену: страница книги перелистывается и открывает новую сцену. */
(() => {
  EV.gl_milk = wtw('s3', 'молоком');
  EV.gl_butter = wtw('s3', 'маслом');
  EV.gl_print = wtw('s3', 'напечатала');
  EV.gl_year = LF('s3', 0.82);
  KEYW.push('напечатала', 'Гласс');

  function kitchen(t) {                                                 // стены, очаг с вертелом и котлами, медь, фаянс, окно-эркер
    vgrad(-600, 1500, ['#3a2a20', '#5a4232', '#6a5040']); for (let y = 600; y < 1300; y += 60) for (let x = -400 + (y / 60 % 2) * 60; x < 1600; x += 120) rect(x, y, 116, 56, { wash: '#a89070', washA: 0.4, w: 1, col: '#5a4a3a' });
    push(-60, 1120, 1); rect(-280, -560, 560, 560, { wash: '#6a5a4a', washA: 1, w: 3, col: '#2a1a10' }); rect(-220, -440, 440, 440, { wash: '#1a100a', washA: 1, w: 2 }); for (let i = 0; i < 8; i++) { const f = Math.sin(t * 8 + i) * 12; blob([[-150 + i * 40, 0], [-160 + i * 40, -80 - f], [-140 + i * 40, -170 - f * 2], [-120 + i * 40, -80], [-110 + i * 40, 0]], { wash: i % 2 ? '#ff8a2a' : '#ffd04a', washA: 0.9, line: false }); } glow(0, -120, 360, 'rgba(255,140,50,1)', 0.6);
      pencil([[-220, -300], [220, -300]], { w: 8, col: '#3a3a3a' }); for (const x of [-100, 100]) { pencil([[x, -300], [x, -240]], { w: 3, col: '#3a3a3a', pass2: false }); const p = shape(spline([[x - 70, -240], [x - 80, -160], [x - 50, -120], [x + 50, -120], [x + 80, -160], [x + 70, -240]], true, 6), { wash: '#2a2a2a', washA: 1, w: 2 }); for (let k = 0; k < 2; k++) { const q = (t * 0.4 + k / 2) % 1; pencil(spline([[x, -250], [x + Math.sin(q * 6) * 20, -300 - q * 80], [x, -360 - q * 100]], false, 5), { w: 8, col: '#ffffff', a: 0.3 * (1 - q), pass2: false }); } } pop();
    for (let i = 0; i < 6; i++) { const x = 340 + i * 90, y = 420 + (i % 2) * 30; pencil([[x, 380], [x, y - 40]], { w: 3, col: '#3a3a3a', pass2: false }); const c = ell(x, y, 38, 38, { wash: '#c87a3a', washA: 1, w: 2, col: '#5a2a0a' }); metalG(c.path, x - 12, y - 12, 50, '#ffd0a0', '#c87a3a', '#6a3010'); pencil([[x, y + 38], [x, y + 110]], { w: 7, col: '#8a4a1a', pass2: false }); }
    rect(900, 560, 400, 14, { wash: '#5a3a1a', washA: 1, w: 1.6 }); for (let i = 0; i < 6; i++) { ell(930 + i * 62, 520, 28, 40, { wash: '#f4f4f0', washA: 1, w: 1.6, col: '#2a4a8a' }); txt('✿', 930 + i * 62, 530, 22, { col: '#2a5ab0' }); }
    push(1150, 260, 1); const w = rect(-150, -160, 300, 280, { wash: '#a8c0d8', washA: 1, w: 8, col: '#3a2410', key: 16400 }); ctx.save(); ctx.clip(w.path); vgrad(-160, 120, ['#a8b8c8', '#d8dce0']); for (const [x, h] of [[-140, 140], [-40, 180], [60, 120]]) rect(x, 120 - h, 90, h, { wash: '#8a7a6a', washA: 1, w: 1.2 }); const cx = ((t * 80) % 500) - 250; rect(cx - 50, 40, 100, 50, { wash: '#2a2a2a', washA: 1, w: 1.4 }); for (const sd of [-1, 1]) ell(cx + sd * 34, 96, 16, 16, { line: true, w: 4, col: '#4a3a2a' }); ctx.restore(); for (let i = 1; i < 3; i++) pencil([[-150 + i * 100, -160], [-150 + i * 100, 120]], { w: 5, col: '#3a2410', pass2: false }); pencil([[-150, -20], [150, -20]], { w: 5, col: '#3a2410', pass2: false }); pop();
  }
  function people(t) {                                                  // Ханна Гласс за столом с пером, служанка у очага, пресс
    human(280, 1300, 1.0, t, { body: '#5a7a5a', legs: '#3a3a3a', hair: '#8a5a2a', face: t > EV.gl_print ? 'grin' : 'smile', armL: 'hold', armR: 'hold', look: 0.4, seed: 16410, long: 1 }); push(280, 1300 - 286, 1); blob([[-46, 0], [-50, -30], [0, -50], [50, -30], [46, 0], [0, 10]], { wash: '#ffffff', washA: 1, w: 1.6, col: '#8a8a8a' }); pop();
    push(280 + 80, 1300 - 150, 1, -0.6); pencil([[0, 0], [30, -70]], { w: 3, col: '#3a2a1a', pass2: false }); blob([[30, -70], [40, -120], [50, -110], [36, -60]], { wash: '#f4f4f0', washA: 1, w: 1 }); pop();
    human(-200, 1300, 0.95, t, { body: '#8a6a5a', legs: '#4a3a3a', hair: '#3a2010', face: 'calm', armL: 'hold', armR: 'up', look: 0.6, seed: 16411, long: 1 }); kerchief20(-200, 1300, 0.95, '#f4f0e6');
    push(1060, 1260, 1); rect(-140, -300, 30, 300, { wash: '#5a3a1a', washA: 1, w: 2 }); rect(110, -300, 30, 300, { wash: '#5a3a1a', washA: 1, w: 2 }); rect(-150, -320, 300, 40, { wash: '#6a4424', washA: 1, w: 2 }); const d = t > EV.gl_print ? Math.min(1, (t - EV.gl_print) / 0.25) : 0, up = t > EV.gl_print + 0.5 ? 1 : 0;
      rect(-100, -260 + d * 80 * (1 - up), 200, 40, { wash: '#3a3a3a', washA: 1, w: 2 }); pencil([[0, -280], [0, -260 + d * 80 * (1 - up)]], { w: 10, col: '#5a5a5a', pass2: false }); rect(-110, -120, 220, 20, { wash: '#6a4424', washA: 1, w: 1.6 });
      if (up) { const q = clamp((t - EV.gl_print - 0.5) / 0.5); rect(-80 + q * 160, -150, 150, 24, { wash: '#f8f4ea', washA: 1, w: 1.2, col: '#8a8a8a' }); } pop();
  }
  function table(t) {                                                   // стол: миска пюре, кувшин молока, масло, книга, перо и чернильница
    const tb = rect(-400, 1440, 1900, 800, { wash: '#7a5434', washA: 1, w: 3, col: '#2a1408', key: 16420 }); shadeG(tb.path, 0, 1900, 0, 1440, '#3a1a08', 0.45); for (let i = 0; i < 6; i++) pencil([[-400, 1480 + i * 70], [1500, 1484 + i * 70]], { w: 2, col: '#4a2410', a: 0.5, pass2: false });
    const mk = t > EV.gl_butter ? clamp((t - EV.gl_butter) / 1.5) : 0; mashBowl(780, 1520, 0.95, t, { key: 16421, melt: mk, butter: t > EV.gl_butter - 0.1, steam: true, h: 60 });
    if (t > EV.gl_milk - 0.1 && t < EV.gl_butter + 0.2) { pencil(spline([[960, 1300], [900, 1320], [820, 1420]], false, 6), { w: 12, col: PU.milk, a: 0.9, pass2: false }); } push(t > EV.gl_milk - 0.1 && t < EV.gl_butter + 0.2 ? 1000 : 1060, 1540, 1, t > EV.gl_milk - 0.1 && t < EV.gl_butter + 0.2 ? -0.8 : 0); milkJug(0, 0, 0.8); pop();
    if (t < EV.gl_butter - 0.1) butterBlock(1180, 1540, 0.8, 0, { key: 16422 }); else { butterBlock(1180, 1540, 0.8, 0, { key: 16422, cut: 1 }); if (t < EV.gl_butter + 0.3) { const q = (t - EV.gl_butter + 0.1) / 0.4; push(lerp(1150, 780, q), lerp(1480, 1400, q) - Math.sin(q * Math.PI) * 120, 1); rect(-16, -16, 32, 32, { wash: PU.butter, washA: 1, w: 1.6, col: PU.butterD }); pop(); } }
    const bk = t > EV.gl_print ? popK(t, EV.gl_print, 0.45) : 0; push(250, 1500, 1); if (bk > 0) { push(0, 0, bk); rect(-200, -150, 200, 150, { wash: '#f8f2e0', washA: 1, w: 2, col: '#6a5a3a' }); rect(0, -150, 200, 150, { wash: '#f8f2e0', washA: 1, w: 2, col: '#6a5a3a' }); txt('THE ART', -100, -110, 22, { font: 'Osw', col: '#3a1a08' }); txt('OF COOKERY', -100, -84, 22, { font: 'Osw', col: '#3a1a08' }); txt('TO MASH', 100, -110, 22, { font: 'Osw', col: '#a8221a' }); txt('POTATOES', 100, -84, 22, { font: 'Osw', col: '#a8221a' }); for (let i = 0; i < 4; i++) pencil([[30, -60 + i * 16], [170, -60 + i * 16]], { w: 2, col: '#8a8a8a', a: 0.7, pass2: false });
      if (t > EV.gl_year) { push(-100, -40, popK(t, EV.gl_year, 0.3), -0.1); rect(-60, -22, 120, 44, { wash: '#a8221a', washA: 0.15, w: 3, col: '#a8221a' }); txt('1747', 0, 12, 32, { font: 'Osw', col: '#a8221a' }); pop(); } pop(); } else { rect(-180, -50, 180, 50, { wash: '#6a2a1a', washA: 1, w: 2 }); }
      ell(-260, -30, 24, 24, { wash: '#1a1a2a', washA: 1, w: 2 }); pop();
    if (t > EV.gl_milk) bubbleTag('+ МОЛОКО', 940, 1180, t, EV.gl_milk, '#2a5ab0', 40, 0.04);
    if (t > EV.gl_butter) bubbleTag('+ МАСЛО', 660, 1140, t, EV.gl_butter, '#c89a20', 40, -0.04);
  }
  function front(t) { push(-40, 1960, 1.6); for (let i = 0; i < 3; i++) potato(-50 + i * 50, -30, 0.7, i, { key: 16430 + i, dirt: 1 }); pop(); push(1180, 1990, 1.6); const c = ell(0, -40, 90, 50, { wash: '#c87a3a', washA: 1, w: 2, col: '#5a2a0a' }); metalG(c.path, -30, -60, 90, '#ffd0a0', '#c87a3a', '#6a3010'); pop();
    motes(24, [0, 300, 1100, 1700], '#ffd8a0', t, 16435, { sp: 8, sz: 4, a: 0.5, wob: 2 }); rays(1150, 260, 2.4, 0.35, 1500, 'rgba(240,245,255,1)', 0.12, 4, t); }
  WORLD.glasse = (t, u, cat) => {
    lay(14, () => { kitchen(t); haze('#d8a070', 0.06); });
    lay(2.8, () => { people(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { table(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.glasse = {
    outfit: 'medcook', light: { side: -1, rim: '#ffc080' }, grade: ['#ffb070', 0.06],
    act: () => [[S0.glasse, 'talk'], [EV.gl_milk, 'awe'], [EV.gl_butter, 'grin'], [EV.gl_print, 'proud'], [EV.gl_year, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1700, s: 1.0, flip: t > EV.gl_print ? -1 : 1, look: t > EV.gl_print ? [-0.7, 0.5] : [0.8, 0.5], hand: [200, -280 + (t < EV.gl_print ? Math.abs(Math.sin(t * 8)) * -30 : 0)], handF: [-90, -220], prop: t < EV.gl_print ? 'masherP' : 'spoonMP', propAng: 0.1 }),
    cam: () => [[S0.glasse, 560, 900, 0.06], [EV.gl_milk - 0.2, 860, 1300, 0.22, 'x'], [EV.gl_butter, 820, 1320, 0.24], [EV.gl_print, 400, 1250, 0.2], [EV.gl_year, 300, 1350, 0.26], [S1.glasse, 320, 1350, 0.28]]
  };
  // ---------------------------------------------------------------- переход: страница книги перелистывается справа налево
  TRANS_IN.glasse = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const e = sm(k), w = W * (1 - e); ctx.save(); ctx.beginPath(); ctx.rect(0, 0, w, H); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
    scr(() => { const fw = Math.min(200, w) * Math.sin(e * Math.PI) + 10; ctx.save(); const g = ctx.createLinearGradient(w - fw, 0, w, 0); g.addColorStop(0, 'rgba(240,230,200,0.95)'); g.addColorStop(1, 'rgba(160,140,100,0.95)'); ctx.fillStyle = g; ctx.fillRect(w - fw, 0, fw, H); ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.fillRect(w, 0, 30, H); ctx.restore(); });
  } };
})();
