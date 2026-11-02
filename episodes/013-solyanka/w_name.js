/* 013 — `name` ★: «Так кто „посолил“? Версия лингвистов: селянка — еда селянина. Слово забылось — суп „посолили“.» Летнее село: избы с резными наличниками,
   поле ржи, колодец-журавль, плетень с горшками, селяне у котла под открытым небом едят из мисок. Над селом в небе — огромная словарная карточка
   «СЕЛЯНКА — пища селянина». Том-лингвист в твидовом пиджаке с указкой у грифельной доски. По словам: «лингвистов» — карточка раскрывается; «селянина» —
   стрелка от слова к селянам у котла; «забылось» — буквы карточки облетают пылью, селяне тают в дымке; «посолили» — гигантская солонка сыплет соль, «Е» → «О»,
   надпись «СОЛЯНКА» вспыхивает золотом. Переход В сцену: губка стирает меловую доску и открывает новый кадр. */
(() => {
  EV.nm_q = LS('s7');
  EV.nm_ling = wtw('s7', 'лингвистов:');
  EV.nm_sel = wtw('s7', 'селянина.');
  EV.nm_forgot = wtw('s7', 'забылось');
  EV.nm_salt = wtw('s7', '«посолили».');
  SHAKES.push([EV.nm_salt + 0.3, 0.22, 10]);
  KEYW.push('селянина.', '«посолили».');
  const fade = t => clamp((t - EV.nm_forgot) / 0.9);

  function village(t) {                                                 // небо, поле ржи, избы с наличниками, колодец-журавль, плетень
    vgrad(-800, 1000, ['#5aa0e0', '#9ac8ee', '#f0e8c8']); for (let i = 0; i < 5; i++) { const x = ((i * 320 + t * 14) % 1700) - 300, y = 100 + (i % 3) * 100; for (let k = 0; k < 4; k++) ell(x + k * 50, y - (k % 2) * 22, 60, 32, { wash: '#ffffff', washA: 0.9, line: false }); }
    const f = shape(spline([[-400, 800], [200, 720], [700, 760], [1500, 700], [1500, 1100], [-400, 1100]], true, 8), { wash: '#e8c860', washA: 1, w: 1.6, col: '#8a6a1a' }); for (let i = 0; i < 80; i++) { const r = rng(13800 + i), x = -380 + r() * 1880, y = 760 + r() * 300; pencil([[x, y], [x + Math.sin(t * 2 + i) * 6, y - 30]], { w: 2, col: '#b8962a', pass2: false }); }
    for (const [x, s] of [[-100, 1], [880, 1.1], [1260, 0.9]]) { push(x, 980, s); rect(-140, -200, 280, 200, { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#2a1408' }); for (let i = 0; i < 5; i++) pencil([[-140, -180 + i * 40], [140, -180 + i * 40]], { w: 2, col: '#4a2a10', pass2: false }); poly([[-170, -200], [0, -330], [170, -200]], { wash: '#a89a6a', washA: 1, w: 2.4 }); for (let i = 0; i < 6; i++) pencil([[-150 + i * 50, -210], [-20 + i * 20, -320]], { w: 1.4, col: '#6a5a2a', a: 0.6, pass2: false });
      const w = rect(-44, -150, 88, 80, { wash: '#a8c8e0', washA: 1, w: 2, col: '#2a1408' }); poly([[-60, -150], [0, -190], [60, -150]], { wash: '#f4f0e6', washA: 1, w: 1.6 }); for (let i = 0; i < 5; i++) ell(-36 + i * 18, -164, 4, 4, { wash: '#2a5ab8', washA: 1, line: false }); pop(); }
    push(1080, 1000, 1); pencil([[0, 0], [0, -260]], { w: 12, col: '#5a3a1a' }); pencil([[-200, -320], [260, -180]], { w: 8, col: '#5a3a1a' }); pencil([[-200, -320], [-200, -100]], { w: 3, col: '#3a3a3a', pass2: false }); rect(-230, -100, 60, 50, { wash: '#6a4424', washA: 1, w: 1.6 }); pop();
    for (let i = 0; i < 14; i++) { const x = 200 + i * 40; pencil([[x, 1000], [x + 4, 900]], { w: 5, col: '#7a5a2a' }); } for (let k = 0; k < 3; k++) pencil(spline([[190, 920 + k * 30], [460, 910 + k * 30], [750, 920 + k * 30]], false, 6), { w: 4, col: '#8a6a3a', pass2: false }); for (let i = 0; i < 4; i++) { const x = 230 + i * 140; blob([[x - 24, 900], [x - 30, 870], [x - 12, 850], [x + 12, 850], [x + 30, 870], [x + 24, 900]], { wash: '#a8643a', washA: 1, w: 1.6, col: '#3a1a08' }); }
  }
  function card(t) {                                                    // словарная карточка в небе: раскрывается, буквы облетают, соль меняет «Е» на «О»
    if (t < EV.nm_ling - 0.3) return; const k = popK(t, EV.nm_ling - 0.3, 0.5), fd = fade(t), salt = t > EV.nm_salt + 0.3;
    push(700, 620, k * 0.72); const c = rect(-380, -150, 760, 300, { wash: '#f8f2e0', washA: 1, w: 4, col: '#6a5232', key: 13810 }); shadeG(c.path, 0, 150, 0, -150, '#d8c8a0', 0.3); for (let i = 0; i < 6; i++) pencil([[-360, -80 + i * 40], [360, -80 + i * 40]], { w: 1, col: '#9ab0c8', a: 0.5, pass2: false }); pencil([[-300, -150], [-300, 150]], { w: 2, col: '#d9282a', a: 0.6, pass2: false });
      const word = salt ? 'СОЛЯНКА' : 'СЕЛЯНКА', a = salt ? 1 : 1 - fd * 0.75; txt(word, 40, -40, 110, { font: 'Osw', col: salt ? '#d6a842' : '#3a2a1a', a }); if (salt) glow(40, -60, 380, 'rgba(255,220,120,1)', 0.35 * clamp((t - EV.nm_salt - 0.3) / 0.4));
      if (!salt) txt('— пища селянина', 40, 60, 46, { font: 'Hand', col: '#5a3a1a', a: 1 - fd }); else txt('— «посолили»!', 40, 60, 46, { font: 'Hand', col: '#a8221a' });
      if (fd > 0 && !salt) { const r = rng(13811); for (let i = 0; i < 30; i++) { const q = fd * (0.5 + r() * 0.8); ell(-200 + r() * 480 + q * 300, -40 + (r() - 0.5) * 100 - q * 120, 4, 3, { wash: '#3a2a1a', washA: 0.7 * (1 - q), line: false }); } } pop();
    if (t > EV.nm_salt - 0.4 && t < EV.nm_salt + 1.2) { const pour = t > EV.nm_salt - 0.1 ? 1 : 0; saltShaker(1000, 440, 0.9, Math.PI * 0.8 + Math.sin(t * 20) * 0.1, t, pour); }
  }
  function people(t) {                                                  // селяне у котла: едят из мисок, тают на «забылось»
    const a = 1 - fade(t) * 0.8; ctx.save(); ctx.globalAlpha = a;
    push(360, 1260, 1); pencil([[-80, 0], [0, -160], [80, 0]], { w: 8, col: '#5a3a1a' }); const p = blob([[-70, -100], [-80, -40], [-40, 0], [40, 0], [80, -40], [70, -100]], { wash: '#2a2a2e', washA: 1, w: 2, col: '#0a0a0a' }); ell(0, -100, 70, 14, { wash: '#c8b070', washA: 1, w: 1.4 }); for (let i = 0; i < 5; i++) { const f = Math.sin(t * 9 + i) * 8; blob([[-40 + i * 20, 10], [-46 + i * 20, -20 - f], [-34 + i * 20, -40 - f], [-30 + i * 20, 10]], { wash: '#ffa030', washA: 0.9, line: false }); } glow(0, 0, 120, 'rgba(255,150,60,1)', 0.4); pop();
    for (const [x, sd, sd2] of [[160, 1, 0], [560, -1, 1], [260, 1, 2]]) { human(x, 1300 + sd2 * 10, 1.0, t, { body: ['#efe8d6', '#a8282a', '#3a5a8a'][sd2], legs: '#3a3228', hair: ['#c8a060', '#3a2a1a', '#8a6a4a'][sd2], beard: sd2 === 0 ? 'long' : null, face: 'smile', armL: 'hold', armR: 'up', look: sd * 0.5, seed: 13820 + sd2, flip: sd, long: sd2 === 1 }); if (sd2 === 1) kerchief20(x, 1300 + 10, 1.0, '#e8b030', sd); }
    ctx.restore();
    if (t > EV.nm_sel && t < EV.nm_forgot + 0.4) { const k = clamp((t - EV.nm_sel) / 0.4); pencil(spline([[500, 600], [460, 800], [380, 1000]].map(([x, y], i) => i === 2 ? [lerp(500, x, k), lerp(600, y, k)] : [x, y]), false, 6), { w: 8, col: '#d9282a', a: 0.9, pass2: false }); }
  }
  function board(t) {                                                   // грифельная доска лингвиста на мольберте: схема «село → селянин → селянка → солянка»
    push(880, 1460, 1); for (const sd of [-1, 1]) pencil([[sd * 90, 0], [sd * 60, -520]], { w: 10, col: '#6a4424' }); const b = rect(-170, -560, 340, 300, { wash: '#1e2a24', washA: 1, w: 8, col: '#6a4424' });
      const steps = ['село', '↓ селянин', '↓ селянка', '↓ «соль»?']; for (const [i, s] of steps.entries()) { const tt = EV.nm_ling + i * 0.9; if (t > tt) txt(s, 0, -500 + i * 64, 36, { font: 'Hand', col: i === 3 && t > EV.nm_salt ? '#ffd890' : '#f4f0e6', a: clamp((t - tt) / 0.3) }); } pop();
  }
  function front(t) {                                                   // передний план: колосья ржи, васильки, бабочка, пыль слов в луче
    for (let i = 0; i < 16; i++) { const x = -60 + i * 80, sw = Math.sin(t * 2 + i) * 10; pencil([[x, 2000], [x + sw, 1660 + (i % 3) * 40]], { w: 4, col: '#c8a040', pass2: false }); for (let k = 0; k < 6; k++) ell(x + sw + (k % 2 ? 8 : -8), 1680 + (i % 3) * 40 + k * 16, 7, 11, { wash: '#e8c860', washA: 1, w: 1, col: '#8a6a1a' }); if (i % 4 === 1) { for (let k = 0; k < 6; k++) { const a = k / 6 * 6.283; ell(x + 30 + Math.cos(a) * 10, 1760 + Math.sin(a) * 10, 6, 6, { wash: '#3a6ad8', washA: 1, line: false }); } } }
    const bx = 300 + Math.sin(t * 1.3) * 200, by = 1200 + Math.cos(t * 1.7) * 100, fl = Math.abs(Math.sin(t * 14)); for (const sd of [-1, 1]) blob([[bx, by], [bx + sd * 30 * fl, by - 20], [bx + sd * 34 * fl, by + 10]], { wash: '#f0c040', washA: 1, w: 1, col: '#5a3a08' });
    rays(900, -200, 2.0, 0.4, 2200, 'rgba(255,248,220,1)', 0.12, 6, t); motes(30, [0, 300, 1080, 1700], '#fff8d0', t, 13830, { sp: 6, sz: 4, a: 0.45, wob: 2 });
  }
  WORLD.name = (t, u, cat) => {
    lay(14, () => { village(t); haze('#f4ecd0', 0.08); });
    lay(6, () => { card(t); });
    lay(2.6, () => { people(t); });
    lay(1.3, () => { board(t); });
    lay(1, () => { cat(); });
    lay(0.6, () => { front(t); });
  };
  DIR.name = {
    outfit: 'econA', light: { side: 1, rim: '#fff4d0' }, grade: ['#ffe0a0', 0.06],
    act: () => [[S0.name, 'suspicious'], [EV.nm_ling, 'proud'], [EV.nm_sel, 'talk'], [EV.nm_forgot, 'sideeye'], [EV.nm_salt, 'shock'], [EV.nm_salt + 0.5, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 640, y: 1660, s: 1.05, flip: -1, look: t < EV.nm_sel ? [-0.2, -0.8] : t < EV.nm_salt ? [-0.6, 0] : [-0.1, -0.8], hand: t > EV.nm_salt ? [60, -420] : [180, -380], handF: t > EV.nm_salt ? [-60, -420] : [-80, -200], point: t < EV.nm_salt ? 1 : undefined, tailUp: t > EV.nm_salt }),
    cam: () => [[S0.name, 560, 1000, 0.06], [EV.nm_ling, 600, 900, 0.1, 'x'], [EV.nm_sel, 460, 1080, 0.12], [EV.nm_forgot, 580, 1000, 0.1], [EV.nm_salt, 600, 920, 0.14], [S1.name, 580, 1000, 0.14]]
  };
  // ---------------------------------------------------------------- переход: губка стирает меловую доску и открывает новый кадр
  TRANS_IN.name = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); scr(() => { ctx.fillStyle = 'rgba(30,42,36,' + (0.85 * clamp(k * 3)) + ')'; ctx.fillRect(0, 0, W, H); });
    const P = new Path2D(); const e = sm(k); for (let i = 0; i <= 30; i++) { const q = i / 30 * e, x = 540 + Math.sin(q * 18) * 420, y = q * 2200 - 100; P.moveTo(x + 260, y); P.arc(x, y, 260, 0, 6.283); } inPath(P, () => drawBuf(B, 1, 540, 960));
    scr(() => { const q = e, x = 540 + Math.sin(q * 18) * 420, y = q * 2200 - 100; if (e < 1) { rect(x - 130, y - 70, 260, 140, { wash: '#e8c040', washA: 1, w: 3, col: '#6a4a08' }); rect(x - 130, y + 30, 260, 40, { wash: '#3a8a3a', washA: 1, w: 2 }); } });
  } };
})();
