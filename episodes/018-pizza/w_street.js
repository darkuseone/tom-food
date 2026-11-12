/* 018 — `street`: «Веками это еда бедняков с лотка. Морзе, тот, что с азбукой, назвал её «тошнотворной».» Неаполь, 1831: узкий переулок-вико —
   высокие охристые и розовые дома с балконами, бельё на верёвках через улицу, ставни, уличный алтарь со свечой, в конце улицы — Везувий с дымом.
   Главный свет — солнце сверху в щель между домами (пучок по улице, пятно на мостовой). Разносчик с медной печкой-стуфой на голове кричит, лаццарони
   на ступенях едят пиццу сложенную вчетверо, мальчишки, ослик с корзинами, торговка с макаронами на сушилке. Том-разносчик в белом с красным платком
   жуёт пиццу «книжечкой». По словам: «бедняков» — лаццарони тянут руки, монетки звякают; «с лотка» — лоток с пиццами выезжает; «Морзе» — справа входит
   господин в цилиндре и фраке с альбомом; «с азбукой» — над ним вспыхивают точки-тире «· · · — — — · · ·»; «тошнотворной» — Морзе зеленеет и зажимает нос,
   Том обиженно перестаёт жевать. Пауза-гэг: Том молча откусывает ещё и показывает Морзе большой палец, тот пятится. Переход В сцену: простыня с верёвки
   пролетает через кадр и сметает старую сцену. */
(() => {
  EV.st_poor = wtw('s3', 'бедняков');
  EV.st_tray = wtw('s3', 'лотка.');
  EV.st_morse = wtw('s3', 'Морзе,');
  EV.st_abc = wtw('s3', 'азбукой,');
  EV.st_yuck = wtw('s3', '«тошнотворной».');
  EV.st_gag = LE('s3') + 0.05;
  SHAKES.push([EV.st_yuck + 0.1, 0.16, 6]);
  KEYW.push('бедняков', '«тошнотворной».');

  function city(t) {                                                    // перспектива переулка, дома, балконы, Везувий
    vgrad(-800, 600, ['#8ab8d8', '#c8dcea', '#f4e4c4']); sil([[300, 200], [480, 20], [540, 0], [600, 30], [780, 200]], '#8a8aa8', 1); for (let i = 0; i < 5; i++) { const k = (t * 0.15 + i / 5) % 1; ell(540 + k * 120, -10 - k * 260, 30 + k * 80, 20 + k * 40, { wash: '#a8a0a8', washA: 0.5 * (1 - k), line: false }); }
    const H = [['#e8a868', -600, 380], ['#d88a7a', -300, 240], ['#f0c878', 1180, 380], ['#c8946a', 860, 240]];
    for (const [c, x, w] of H) { const L = x < 540; const p = rect(x, -900, w, 2300, { wash: c, washA: 1, w: 2.4, col: '#4a2a14', key: 18500 + x }); shadeG(p.path, L ? x + w : x, 0, L ? x : x + w, 0, '#6a3a1a', 0.35); hatch(p.path, p.bb, { gap: 12, a: 0.08, col: '#6a3a1a', ang: 0.4, key: 18501 + x });
      for (let j = 0; j < 5; j++) { const wy = -760 + j * 260; for (let i = 0; i < 2; i++) { const wx = x + 40 + i * (w - 140); rect(wx, wy, 90, 150, { wash: '#3a2a2a', washA: 1, w: 1.6, col: '#2a1408' }); for (const sd of [0, 1]) rect(wx - 34 + sd * 124, wy, 34, 150, { wash: '#4a7a5a', washA: 1, w: 1.4, col: '#1a3a2a' });
        if (j % 2 === 0) { rect(wx - 20, wy + 150, 130, 14, { wash: '#7a6a5a', washA: 1, w: 1.4 }); for (let q = 0; q < 6; q++) pencil([[wx - 14 + q * 24, wy + 150], [wx - 14 + q * 24, wy + 100]], { w: 2, col: '#2a2a2a', pass2: false }); pencil([[wx - 20, wy + 100], [wx + 110, wy + 100]], { w: 3, col: '#2a2a2a', pass2: false }); for (let q = 0; q < 3; q++) { push(wx + q * 40, wy + 100, 1); rect(-12, -24, 24, 24, { wash: '#b8542a', washA: 1, w: 1 }); blob([[-14, -24], [0, -50], [14, -24]], { wash: '#c8221a', washA: 1, w: 1 }); pop(); } } } } }
    for (let r = 0; r < 4; r++) { const y = -500 + r * 220; pencil(spline([[-300, y], [540, y + 60], [1180, y]], false, 8), { w: 2, col: '#3a3a3a', pass2: false }); for (let i = 0; i < 6; i++) { const x = -200 + i * 230, yy = y + 60 - Math.abs(x - 540) / 840 * 60, sw = Math.sin(t * 3 + i + r) * 0.08; push(x, yy, 1, sw); const c = ['#f8f4ea', '#c8343a', '#3a6aa8', '#f0c040', '#f8f4ea', '#8ac8a8'][(i + r) % 6]; const s = rect(-50, 0, 100, 120 - (i % 2) * 40, { wash: c, washA: 1, w: 1.6, col: '#5a5a5a' }); shadeG(s.path, 50, 0, -50, 0, '#000', 0.12); pop(); } }
    push(1020, 900, 1); rect(-60, -100, 120, 140, { wash: '#f4ecd6', washA: 1, w: 2, col: '#6a4a2a' }); ell(0, -40, 34, 44, { wash: '#4a6aa8', washA: 1, w: 1.4 }); candle(-40, 40, 0.6, t, 18); candle(40, 40, 0.6, t, 19); pop();
    shaft(540, -700, 200, 2400, 0, 'rgba(255,236,190,1)', 0.16);
  }
  function crowd(t) {                                                   // лаццарони, разносчик со стуфой, торговка, мальчишки, ослик
    const beg = t > EV.st_poor;
    for (const [x, b, sd, fl] of [[-220, '#8a6a4a', 18510, 1], [-90, '#5a4a3a', 18511, 1], [80, '#6a5a3a', 18512, -1]]) { human(x, 1240, 1.0, t, { body: b, legs: '#4a3a2a', hair: '#1a1a1a', face: 'grin', armL: beg && sd === 18511 ? 'up' : 'hold', armR: 'hold', look: 0.3 * fl, seed: sd, flip: fl, hat: sd === 18510 ? 'cap' : null, hatCol: '#c8221a' }); foldPizza(x + 30 * fl, 1240 - 180, 0.32, 0.2 * fl, 18513 + sd); }
    const sx = 360 + Math.sin(t * 1.4) * 30; human(sx, 1200, 1.05, t, { body: '#f4ecdc', legs: '#4a3a2a', hair: '#3a2a1a', face: 'grin', armL: 'up', armR: 'wave', look: 0.2, seed: 18515 }); stufa(sx, 1200 - 350 * 1.05, 0.7, t, 18516);
    if (t > EV.st_poor && t < EV.st_morse) { const k = (t - EV.st_poor) % 0.6 / 0.6; push(sx + 80, 820, 1); txt('PIZZA CALDA!', 60, -20 - k * 30, 30, { font: 'Hand', col: '#8a1a0e', a: 1 - k }); pop(); }
    push(900, 1250, 1); rect(-120, -260, 16, 260, { wash: '#7a5a3a', washA: 1, w: 1.4 }); rect(104, -260, 16, 260, { wash: '#7a5a3a', washA: 1, w: 1.4 }); for (let i = 0; i < 4; i++) { pencil([[-110, -240 + i * 50], [110, -240 + i * 50]], { w: 3, col: '#6a4a2a', pass2: false }); for (let q = 0; q < 10; q++) pencil([[-100 + q * 22, -240 + i * 50], [-102 + q * 22, -200 + i * 50]], { w: 2, col: '#f0d890', pass2: false }); } pop();
    human(1040, 1250, 1.0, t, { body: '#3a5a8a', legs: '#3a3a3a', hair: '#2a1a0a', face: 'smile', armL: 'hips', armR: 'hold', look: -0.5, seed: 18517, flip: -1, long: 1, hat: 'scarf', hatCol: '#e8c040' });
    for (const [x, sd] of [[180, 18518], [240, 18519]]) human(x, 1290, 0.6, t, { body: '#a8743a', legs: '#4a3a2a', hair: '#2a1a0a', face: 'grin', armL: 'wave', armR: 'hold', seed: sd, look: Math.sin(t + sd) });
    push(-420, 1260, 0.9); blob([[-120, -60], [-130, -150], [60, -160], [110, -130], [120, -60]], { wash: '#8a7a6a', washA: 1, w: 2, col: '#3a2a1a' }); blob([[100, -150], [150, -220], [190, -200], [170, -150]], { wash: '#8a7a6a', washA: 1, w: 2, col: '#3a2a1a' }); for (const sd of [-1, 1]) pencil([[160 + sd * 10, -220], [150 + sd * 20, -270]], { w: 6, col: '#6a5a4a' }); for (const lx of [-100, -60, 60, 100]) pencil([[lx, -60], [lx, 0]], { w: 8, col: '#6a5a4a' }); blob([[-80, -160], [-90, -230], [20, -230], [30, -160]], { wash: '#c89a5a', washA: 1, w: 1.6, col: '#5a3a1a' }); pop();
  }
  function morse(t) {                                                   // Сэмюэл Морзе: цилиндр, фрак, альбом; точки-тире; зеленеет
    if (t < EV.st_morse - 0.3) return; const k = sm(clamp((t - EV.st_morse + 0.3) / 0.5)), back = t > EV.st_gag + 0.2 ? sm(clamp((t - EV.st_gag - 0.2) / 0.5)) * 60 : 0, x = lerp(1100, 840, k) + back, yuck = t > EV.st_yuck;
    human(x, 1380, 1.12, t, { body: '#1a1a24', legs: '#2a2a2a', hair: '#8a7a6a', face: yuck ? 'shock' : 'calm', armL: yuck ? 'up' : 'hold', armR: 'hold', look: -0.7, seed: 18520, flip: -1, beard: 'short', skin: yuck ? '#b8d0a0' : undefined });
    hat20(x, 1380, 1.12, 'tophat', '#1a1a1a', -1); push(x + 30, 1380 - 160, 1); rect(-50, -40, 100, 70, { wash: '#efe6cc', washA: 1, w: 1.6, col: '#5a4a2a' }); pencil(spline([[-36, 0], [-10, -20], [20, 0], [36, -14]], false, 5), { w: 1.4, col: '#3a3a3a', pass2: false }); pop();
    if (yuck) { push(x - 6, 1380 - 300, 1); ell(0, 0, 14, 8, { wash: '#e2b48e', washA: 1, w: 1.4, col: '#6a3a1a' }); pop(); for (let i = 0; i < 3; i++) { const q = (t * 1.2 + i / 3) % 1; pencil(spline([[x - 160, 1100 - q * 120 + i * 20], [x - 120, 1080 - q * 120 + i * 20], [x - 80, 1100 - q * 120 + i * 20]], false, 4), { w: 4, col: '#7aa83a', a: 0.7 * (1 - q), pass2: false }); } }
    if (t > EV.st_abc) { const code = '· · ·  — — —  · · ·', n = Math.min(code.length, Math.floor((t - EV.st_abc) / 0.04)); push(x - 140, 960, 1); const b = blob([[-220, -60], [220, -60], [236, 40], [40, 50], [0, 100], [-10, 50], [-236, 40]], { wash: '#f8f4ea', washA: 1, w: 2.4, col: '#2a2a2a' }); txt(code.slice(0, n), 0, 10, 46, { font: 'Osw', col: '#1a1a2a' }); if (yuck) txt('ФУ!', 160, -80, 40, { font: 'Osw', col: '#5a8a2a' }); pop(); }
  }
  function street(t) {                                                  // мостовая из базальта, лужа, ступени, корзины, свёртки
    const f = rect(-800, 1300, 2700, 900, { wash: '#5a5a62', washA: 1, w: 2, col: '#1a1a24', key: 18530 }); for (let i = 0; i < 24; i++) for (let j = 0; j < 6; j++) rect(-800 + i * 110 + (j % 2) * 55, 1300 + j * 90, 108, 88, { wash: (i * 3 + j) % 4 ? '#6a6a72' : '#4a4a54', washA: 0.8, w: 1, col: '#2a2a34' });
    lightPool(540, 1480, 460, 140, 'rgba(255,230,180,1)', 0.35); push(200, 1520, 1); ell(0, 0, 120, 20, { wash: '#8ab0d0', washA: 0.5, w: 1, col: '#4a5a6a' }); ell(-30, -4, 30, 4, { wash: '#ffffff', washA: 0.6, line: false }); pop();
    push(-60, 1440, 1); rect(-200, -60, 400, 60, { wash: '#8a7a6a', washA: 1, w: 2, col: '#3a2a1a' }); rect(-180, -110, 360, 50, { wash: '#7a6a5a', washA: 1, w: 2, col: '#3a2a1a' }); pop();
    if (t > EV.st_tray - 0.2) { const k = sm(clamp((t - EV.st_tray + 0.2) / 0.4)); push(lerp(-500, 180, k), 1440, 1); rect(-140, -90, 280, 26, { wash: '#a8743a', washA: 1, w: 2, col: '#3a1a08' }); for (const sd of [-1, 1]) pencil([[sd * 120, -64], [sd * 130, 0]], { w: 8, col: '#6a4424' }); for (let i = 0; i < 3; i++) foldPizza(-90 + i * 90, -90, 0.42, -0.1 + i * 0.1, 18531 + i); pop(); }
    for (const [x, c] of [[860, '#c89a5a'], [1000, '#b88a4a']]) { push(x, 1460, 1); blob([[-60, 0], [-70, -70], [70, -70], [60, 0]], { wash: c, washA: 1, w: 2, col: '#5a3a1a' }); for (let i = 0; i < 4; i++) pencil([[-66 + i * 40, -70], [-60 + i * 38, 0]], { w: 1.6, col: '#7a5a2a', pass2: false }); for (let i = 0; i < 4; i++) ell(-40 + i * 26, -76, 14, 14, { wash: i % 2 ? '#d8402a' : '#e8b040', washA: 1, w: 1.2 }); pop(); }
    castShadow(640, 1600, 260, 200, 0.2, 0.25); castShadow(360, 1200, 100, 160, 0.2, 0.22);
  }
  function front(t) { push(-120, -200, 1.5, Math.sin(t * 2) * 0.05); pencil([[-200, -300], [600, -200]], { w: 3, col: '#3a3a3a', pass2: false }); for (let i = 0; i < 3; i++) { const s = rect(-150 + i * 160, -280 + i * 12, 130, 220, { wash: ['#f8f4ea', '#c8343a', '#f0c040'][i], washA: 1, w: 2, col: '#5a5a5a' }); shadeG(s.path, 0, 0, 0, 200, '#000', 0.1); } pop();
    push(1240, 2000, 1.6); rect(-90, -200, 180, 200, { wash: '#a8743a', washA: 1, w: 2.4, col: '#3a1a08' }); for (let i = 0; i < 5; i++) pencil([[-90, -180 + i * 40], [90, -180 + i * 40]], { w: 1.6, col: '#5a3a1a', pass2: false }); for (let i = 0; i < 6; i++) ell(-60 + i * 24, -210, 16, 16, { wash: '#d8402a', washA: 1, w: 1.2 }); pop(); }
  WORLD.street = (t, u, cat) => {
    lay(12, () => { city(t); haze('#f8e8c8', 0.06); });
    lay(2.8, () => { crowd(t); });
    lay(1.6, () => { morse(t); });
    lay(1, () => { street(t); cat(); });
    lay(0.6, () => { front(t); motes(18, [-200, 200, 1300, 1500], '#fff4d0', t, 18540, { sp: 6, sz: 3, a: 0.45, wob: 3 }); steamWisps(360, 800, 0.8, t, 2, 18541, 0.3); moodDark(540, 1000, 600, 1500, '#1a1020', 0.45); });
  };
  DIR.street = {
    outfit: 'pizzA', light: { side: -1, rim: '#ffe0a0' }, grade: ['#ffc880', 0.07],
    act: () => [[S0.street, 'grin'], [EV.st_morse, 'suspicious'], [EV.st_abc, 'sideeye'], [EV.st_yuck, 'annoyed'], [EV.st_gag + 0.2, 'smug'], [EV.st_gag + 0.5, 'wink']],
    pose: (t, u, b) => { const chew = t < EV.st_yuck ? Math.abs(Math.sin(t * 10)) * 0.04 : 0, gag = t > EV.st_gag;
      return Object.assign(b, { x: 560, y: 1600, s: 1.15, flip: 0, look: t < EV.st_morse ? [-0.3, 0] : [0.8, -0.2], hand: gag ? [-60, -340] : (t < EV.st_yuck && Math.sin(t * 3) > 0.3 ? [-40, -320] : [-120, -250]), handF: gag ? [-200, -360] : [80, -220], prop: 'foldP', propAng: 0.1, squash: b.squash + chew, tailUp: gag }); },
    cam: () => [[S0.street, 540, 900, 0.22], [EV.st_poor, 360, 1100, 0.26, 'x'], [EV.st_tray, 440, 1150, 0.26], [EV.st_morse, 720, 1100, 0.26], [EV.st_yuck, 780, 1080, 0.32], [EV.st_gag, 660, 1150, 0.28], [S1.street, 640, 1150, 0.3]]
  };
  // ---------------------------------------------------------------- переход: простыня с верёвки пролетает через кадр и сметает сцену
  TRANS_IN.street = { a: 0.3, b: 0.4, runA: 0.5, fx(k, t, A, B) {
    const e = sm(k), x = lerp(-700, 1800, e); drawBuf(B, 1, 540, 960); const P = new Path2D(); P.rect(x, 0, W + 800, H); inPath(P, () => drawBuf(A, 1, 540, 960));
    scr(() => { const pts = []; for (let i = 0; i <= 10; i++) pts.push([x + Math.sin(i * 0.9 + t * 8) * 40, -40 + i * 200]); const back = pts.slice().reverse().map(p => [p[0] - 360 + Math.sin(p[1] * 0.01) * 30, p[1]]);
      const s = blob(pts.concat(back), { wash: '#f8f4ea', washA: 1, w: 3, col: '#6a6a6a' }); shadeG(s.path, x, 0, x - 360, 0, '#a8a8b8', 0.5); for (let i = 0; i < 4; i++) pencil([[x - 60 - i * 70, -40], [x - 80 - i * 70, H + 40]], { w: 10, col: '#c8343a', a: 0.6, pass2: false }); });
  } };
})();
