/* 022 — `deficit`: «Но в 70-х мяса не хватает… и в колбасу пускают крахмал.» Тот же цех, но 1970-е и тусклый: серо-голубой облупленный кафель,
   мигающая лампа дневного света, пустые крюки качаются на конвейере, пустые рамы, доска объявлений с графиком «ПЛАН / ФАКТ» (стрелка вниз), плакат
   «БЕРЕГИ СЫРЬЁ», радиоприёмник, календарь 1974; мешки «КРАХМАЛ» штабелем, фаршемешалка из нержавейки (фарша на дне), мастер в пиджаке разводит руками,
   работница в косынке грустно смотрит в пустую ванну, кот-мышелов на мешках. Том — технолог в синем халате и сетке: на «хватает…» лампа мигает и гаснет
   до холодного полумрака, крюки звякают пустые (пауза-драма); на «крахмал.» — Том сыплет совок крахмала в мешалку — белое облако «ПУФ», лампа
   вспыхивает. Переход В сцену: рольставня цеха с грохотом опускается и поднимается. Главный свет — лампа дневного света (холодная, мигает),
   второй — тусклое окно-фрамуга. */
(() => {
  EV.df_lack = wtw('s5', 'хватает…');
  EV.df_starch = wtw('s5', 'крахмал.');
  SHAKES.push([EV.df_starch + 0.1, 0.18, 8]);
  KEYW.push('хватает…', 'крахмал.');
  const dim = t => t > EV.df_lack && t < EV.df_starch ? 0.55 + (Math.sin(t * 40) > 0.6 ? 0.3 : 0) : t > EV.df_starch ? 0.15 : (Math.sin(t * 23) > 0.92 ? 0.3 : 0);
  function wall(t) {                                                     // облупленный кафель, фрамуга, график, плакат, радио, календарь, лампа
    vgrad(-800, 1500, ['#9aa8ac', '#b4c0c0', '#8a9898']);
    for (let y = -800; y < 1500; y += 44) pencil([[-600, y], [1800, y]], { w: 1.6, col: '#6a7a7a', a: 0.6, pass2: false }); for (let x = -600; x < 1800; x += 64) pencil([[x, -800], [x, 1500]], { w: 1.4, col: '#6a7a7a', a: 0.5, pass2: false });
    const r = rng(22701); for (let i = 0; i < 18; i++) { const x = -500 + r() * 2200, y = -700 + r() * 2000; blob([[x, y], [x + 30 + r() * 30, y - 10], [x + 50, y + 20], [x + 20, y + 40]], { wash: '#7a6a5a', washA: 0.5, w: 1, col: '#4a3a2a' }); }
    for (let i = 0; i < 6; i++) { const x = -400 + i * 380; pencil([[x, 900], [x + 10, 1100]], { w: 3, col: '#6a5a3a', a: 0.4, pass2: false }); }
    push(160, -300, 1); const fr = rect(-240, -140, 480, 220, { wash: '#6a7a8a', washA: 1, w: 10, col: '#4a5058', key: 22702 }); for (let i = 1; i < 4; i++) pencil([[-240 + i * 120, -140], [-240 + i * 120, 80]], { w: 8, col: '#4a5058' }); rect(-230, -130, 460, 200, { wash: '#a8b8c8', washA: 0.4, line: false }); for (let i = 0; i < 5; i++) pencil([[-220 + i * 90, -120], [-180 + i * 90, 60]], { w: 2, col: '#c8d4dc', a: 0.4, pass2: false }); pop();
    push(620, 150, 1); const bd = rect(-220, -170, 440, 330, { wash: '#c8a878', washA: 1, w: 3, col: '#4a3a2a', key: 22703 }); hatch(bd.path, bd.bb, { gap: 6, a: 0.12, col: '#6a4a2a', ang: 0.8, key: 22704, w: 1 });
    const gr = rect(-190, -140, 250, 200, { wash: '#f4f0e6', washA: 1, w: 1.6, col: '#5a5a5a' }); txt('МЯСО: ПЛАН / ФАКТ', -65, -116, 16, { font: 'Osw', col: '#2a2a2a' }); pencil([[-170, 40], [40, 40]], { w: 2, col: '#2a2a2a', pass2: false }); pencil([[-170, 40], [-170, -100]], { w: 2, col: '#2a2a2a', pass2: false });
    pencil([[-160, -80], [-100, -60], [-40, -20], [20, 30]], { w: 5, col: '#c8241e', pass2: false }); poly([[20, 30], [6, 10], [30, 14]], { wash: '#c8241e', washA: 1, w: 1 }); pencil([[-160, -80], [30, -80]], { w: 2, col: '#2a6aa8', pass2: false, gap: true });
    const ps = rect(80, -150, 120, 170, { wash: '#f0d8a0', washA: 1, w: 1.4, col: '#5a4a2a' }); txt('БЕРЕГИ', 140, -112, 16, { font: 'Osw', col: '#a8241e' }); txt('СЫРЬЁ', 140, -88, 16, { font: 'Osw', col: '#a8241e' }); doktorSlice(140, -30, 0.5, 0, { key: 22705 });
    for (const [px, py] of [[-170, -150], [60, -150], [100, 10], [-60, 50]]) ell(px, py, 7, 7, { wash: '#c8241e', washA: 1, w: 1 }); rect(-180, 70, 100, 70, { wash: '#f4f4f0', washA: 1, w: 1.2, col: '#6a6a6a' }); txt('приказ', -130, 100, 16, { font: 'Hand', col: '#2a2a2a' }); pop();
    push(1050, 160, 1); const cal = rect(-70, -90, 140, 170, { wash: '#f4f0e6', washA: 1, w: 1.6, col: '#5a5a5a', key: 22706 }); rect(-70, -90, 140, 34, { wash: '#2a6aa8', washA: 1, line: false }); txt('1974', 0, -66, 20, { font: 'Osw', col: '#ffffff' }); txt('МАРТ', 0, -20, 22, { font: 'Osw', col: '#2a2a2a' }); for (let i = 0; i < 4; i++) for (let j = 0; j < 5; j++) txt(String(i * 5 + j + 1), -48 + j * 24, 10 + i * 18, 11, { font: 'Osw', col: '#5a5a5a' }); pop();
    push(1250, 330, 1); const rd = rect(-90, -60, 180, 120, { wash: '#6a4a2a', washA: 1, w: 2, col: '#2a1408', key: 22707 }); shadeG(rd.path, 90, 0, -90, 0, '#2a1408', 0.4); rect(-76, -46, 100, 92, { wash: '#c8b890', washA: 1, w: 1.2 }); for (let i = 0; i < 6; i++) pencil([[-70, -36 + i * 14], [16, -36 + i * 14]], { w: 2, col: '#6a5a3a', pass2: false }); ell(54, -20, 14, 14, { wash: '#e8d8b0', washA: 1, w: 1.2 }); ell(54, 22, 14, 14, { wash: '#e8d8b0', washA: 1, w: 1.2 }); pop();
    const lt = dim(t), on = 1 - lt; push(640, -620, 1); pencil([[-200, -200], [-200, 0]], { w: 3, col: '#2a2a2a', pass2: false }); pencil([[200, -200], [200, 0]], { w: 3, col: '#2a2a2a', pass2: false }); rect(-260, 0, 520, 40, { wash: '#8a9096', washA: 1, w: 2, col: '#2a3038' }); rect(-240, 36, 480, 22, { wash: on > 0.6 ? '#f4fbff' : '#8a9aa8', washA: 1, w: 1.4 }); if (on > 0.5) glow(0, 50, 320, 'rgba(220,240,255,1)', 0.28 * on); pop();
  }
  function shop(t) {                                                     // пустые крюки, пустые рамы, мешки, мешалка, мастер, работница, кот
    const lack = t > EV.df_lack;
    pencil([[-600, 380], [1800, 380]], { w: 16, col: '#4a5058' }); for (let i = 0; i < 9; i++) { const x = -500 + i * 240, sw = Math.sin(t * (lack ? 4 : 2) + i) * (lack ? 0.2 : 0.06); push(x, 380, 1, sw); pencil([[0, 0], [0, 60]], { w: 3, col: '#4a5058', pass2: false }); pencil(spline([[0, 60], [14, 74], [0, 86]], false, 4), { w: 3, col: '#4a5058', pass2: false }); if (i === 4 && !lack) doktorLoaf(0, 210, 0.5, 1.5708, { key: 22710, label: 0, len: 260 }); pop(); }
    push(1350, 1300, 1); for (const sx of [-130, 130]) pencil([[sx, 0], [sx, -560]], { w: 12, col: '#6a5a3a' }); for (let row = 0; row < 3; row++) pencil([[-150, -520 + row * 170], [150, -520 + row * 170]], { w: 10, col: '#6a5a3a' }); doktorLoaf(-60, -430, 0.32, 1.5708, { key: 22711, label: 0, len: 260 }); pop();
    for (let i = 0; i < 6; i++) starchSack(-240 + (i % 3) * 150 + (i > 2 ? 70 : 0), 1300 - (i > 2 ? 170 : 0), 0.85, { key: 22712 + i, rot: (i % 2 ? 0.04 : -0.03) });
    push(-160, 1300 - 170 - 160, 1); const cat2 = blob([[-50, 0], [-40, -40], [-10, -50], [30, -40], [50, 0]], { wash: '#5a5a5a', washA: 1, w: 1.8, col: '#1a1a1a' }); ell(30, -50, 22, 18, { wash: '#5a5a5a', washA: 1, w: 1.6 }); for (const sd of [-1, 1]) poly([[30 + sd * 12, -62], [30 + sd * 18, -78], [30 + sd * 4, -66]], { wash: '#5a5a5a', washA: 1, w: 1.2 }); pencil([[24, -52], [28, -52]], { w: 2, col: '#e8d040', pass2: false }); pencil([[36, -52], [40, -52]], { w: 2, col: '#e8d040', pass2: false }); pencil(spline([[-50, 0], [-80, -20], [-70, -50]], false, 5), { w: 6, col: '#5a5a5a', pass2: false }); pop();
    human(980, 1310, 1.08, t, { body: '#4a4a52', legs: '#2a2a32', hair: '#7a7a7a', face: lack ? 'shock' : 'calm', armL: lack ? 'hips' : 'down', armR: lack ? 'up' : 'hold', look: -0.7, seed: 22720, flip: -1 });
    human(1180, 1310, 1.0, t, { body: '#e8e8e4', bodyD: '#a8a8a0', legs: '#3a3a44', hair: '#6a3a1a', face: lack ? 'angry' : 'calm', armL: 'hold', armR: 'hold', look: -0.5, seed: 22721, flip: -1, hat: 'scarf', hatCol: '#c8341e', long: 1 });
    push(1080, 1320, 1); const tub = blob([[-120, -120], [120, -120], [110, 0], [-110, 0]], { wash: '#b8c0c8', washA: 1, w: 2.4, col: '#3a4048', key: 22722 }); metalG(tub.path, -40, -80, 140, '#eef2f4', '#b8c0c8', '#5a6068', 0.6); ell(0, -120, 120, 22, { wash: '#6a7078', washA: 1, w: 2 }); ell(0, -112, 90, 12, { wash: DK.pink, washA: 1, line: false }); pop();
  }
  function bench(t) {                                                    // стол: фаршемешалка, совок, ведро воды, весы, журнал
    const tb = rect(-500, 1440, 2200, 700, { wash: '#8a9298', washA: 1, w: 3, col: '#2a3038', key: 22730 }); metalG(tb.path, 400, 1500, 1200, '#c8d0d4', '#8a9298', '#3a4048', 0.5); rect(-500, 1430, 2200, 18, { wash: '#5a6068', washA: 1, w: 2, col: '#2a3038' });
    push(430, 1560, 1); const mx = blob([[-170, -170], [170, -170], [150, 30], [-150, 30]], { wash: '#b8c0c8', washA: 1, w: 3, col: '#2a3038', key: 22731 }); metalG(mx.path, -50, -100, 220, '#f0f4f6', '#b8c0c8', '#4a5058', 0.6); ell(0, -170, 170, 34, { wash: '#4a5058', washA: 1, w: 2.4 });
    const ml = Math.max(0, 1 - (t > EV.df_lack ? 0.5 : 0)); ell(0, -160, 150, 22, { wash: DK.pink, washA: 1, line: false }); if (t > EV.df_starch) ell(0, -164, 120 * clamp((t - EV.df_starch) / 0.6), 14, { wash: '#f8f4ec', washA: 0.9, line: false });
    push(0, -170, 1, t * 4); pencil([[-120, 0], [120, 0]], { w: 8, col: '#5a6068', pass2: false }); pop(); txt('ФАРШЕМЕШАЛКА', 0, -60, 20, { font: 'Osw', col: '#2a3038' }); pop();
    push(980, 1580, 1); const bk = blob([[-50, -100], [50, -100], [40, 0], [-40, 0]], { wash: '#8a9aa8', washA: 1, w: 2, col: '#2a3038' }); metalG(bk.path, -16, -60, 80, '#dfe8ee', '#8a9aa8', '#3a4048', 0.6); ell(0, -100, 50, 12, { wash: '#a8c8e0', washA: 0.8, w: 1.4 }); txt('ВОДА', 0, -40, 14, { font: 'Osw', col: '#2a3038' }); pop();
    push(1180, 1560, 1, -0.05); rect(-90, -40, 180, 80, { wash: '#2a4a7a', washA: 1, w: 1.6, col: '#0a1a3a' }); txt('ЖУРНАЛ', 0, -10, 18, { font: 'Osw', col: '#f4f0e0' }); txt('рецептур', 0, 14, 14, { font: 'Hand', col: '#f4f0e0' }); pop();
    castShadow(430, 1590, 300, 120, 0.2, 0.24);
  }
  function front(t) {                                                    // передний план: край мешка крахмала, облако «ПУФ», пыль
    starchSack(-300, 2140, 1.6, { key: 22740, rot: 0.15 });
    if (t > EV.df_starch) { const k = clamp((t - EV.df_starch) / 1.4); for (let i = 0; i < 9; i++) { const a = i / 9 * 6.283; ell(440 + Math.cos(a) * 160 * k, 1340 + Math.sin(a) * 90 * k - k * 120, 80 + k * 80, 60 + k * 60, { wash: '#ffffff', washA: 0.55 * (1 - k), line: false }); } if (k < 0.5) { push(470, 1150, popK(t, EV.df_starch, 0.3)); txt('ПУФ!', 0, 0, 70, { font: 'Osw', col: '#2a6aa8' }); pop(); } }
  }
  WORLD.deficit = (t, u, cat) => {
    const lt = dim(t);
    lay(14, () => { wall(t); shaft(160, -300, 420, 2000, 0.2, 'rgba(200,215,230,1)', 0.12); haze('#c8d4dc', 0.06); });
    lay(4, () => { shop(t); lightPool(640, 1320, 900, 150, 'rgba(220,240,255,1)', 0.22 * (1 - lt)); castShadow(980, 1310, 120, 160, 0.1, 0.24); castShadow(1180, 1310, 120, 160, 0.1, 0.22); });
    lay(1, () => { cat(); bench(t); });
    lay(0.6, () => { front(t); motes(22, [-100, 300, 1200, 1500], '#f4f8ff', t, 22750, { sp: 4, sz: 3, a: 0.35, wob: 6 }); moodDark(640, 1100, 420, 1400, '#0a1428', 0.45 + lt * 0.35); });
  };
  DIR.deficit = {
    outfit: 'techA', light: { side: 0, rim: '#c8e0ff' }, grade: ['#8aa0c0', 0.12],
    act: () => [[S0.deficit, 'talk'], [EV.df_lack, 'scared'], [EV.df_lack + 0.6, 'annoyed'], [EV.df_starch, 'suspicious'], [EV.df_starch + 0.5, 'sideeye']],
    pose: (t, u, b) => { const sc = t > EV.df_starch - 0.4 && t < EV.df_starch + 0.6;
      return Object.assign(b, { x: 680, y: 1590, s: 1.16, flip: 1, look: t > EV.df_lack && t < EV.df_starch ? [0.2, -0.8] : sc ? [0.7, 0.5] : [0, 0], hand: sc ? [260, -320 + (t > EV.df_starch ? 80 : 0)] : [170, -280], handF: [-120, -220], prop: 'scoopP', propAng: sc && t > EV.df_starch ? -1.8 : -0.2, frost: t > EV.df_lack && t < EV.df_starch }); },
    cam: () => [[S0.deficit, 660, 1080, 0.24], [EV.df_lack, 640, 1060, 0.28], [EV.df_starch, 560, 1150, 0.3], [S1.deficit, 580, 1140, 0.32]]
  };
  TRANS_IN.deficit = { a: 0.25, b: 0.5, runA: 0.5, fx(k, t, A, B) {      // рольставня опускается (A) и поднимается (B)
    const down = k < 0.5, e = down ? sm(k / 0.5) : 1 - sm((k - 0.5) / 0.5), Y = e * 1920;
    drawBuf(down ? A : B, 1, 540, 960);
    scr(() => { const sh = rect(0, 0, 1080, Y, { wash: '#8a9298', washA: 1, w: 3, col: '#2a3038' }); metalG(sh.path, 400, Y * 0.4, 1400, '#c8d0d4', '#8a9298', '#3a4048', 0.6); for (let y = Y - 40; y > -40; y -= 40) { pencil([[0, y], [1080, y]], { w: 3, col: '#4a5058', pass2: false }); pencil([[0, y + 6], [1080, y + 6]], { w: 2, col: '#e0e6ea', a: 0.6, pass2: false }); } rect(0, Y - 30, 1080, 30, { wash: '#5a6068', washA: 1, w: 2 }); rect(500, Y - 24, 80, 18, { wash: '#2a2a2a', washA: 1, w: 1 }); });
  } };
})();
