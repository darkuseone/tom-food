/* 010 — `debunk`: «Красиво, но рецепт напечатали в Лондоне ещё в 1817-м. А миллионера дописала реклама.» Кабинет лондонского доктора-гурмана: камин, полки с
   банками специй, окно с туманом и газовым фонарём, на конторке огромная книга «THE COOK'S ORACLE · 1817». На «Красиво,» сепийная картинка легенды на мольберте;
   на «рецепт» книга распахивается — страница «картофель ломтиками» с гравюрой; на «1817-м» штамп; на «реклама.» рука-коллаж из рекламы 1973 года вклеивает в картинку
   легенды вырезанного богача в цилиндре, появляется подпись «РЕКЛАМА 1973». Том — доктор-викторианец с пером. Переход В сцену: страница книги перелистывается. */
(() => {
  EV.db_nice = wtw('s2', 'Красиво,');
  EV.db_book = wtw('s2', 'рецепт');
  EV.db_year = wtw('s2', '1817-м.');
  EV.db_ad = wtw('s2', 'реклама.');
  EV.db_mil = wtw('s2', 'миллионера');
  SHAKES.push([EV.db_year + 0.1, 0.2, 8]);
  KEYW.push('реклама.');

  function study(t) { vgrad(-600, 1500, ['#3a2a3a', '#4a3438', '#5a4038']); for (let i = 0; i < 12; i++) rect(-300 + i * 150, -400, 140, 1900, { wash: i % 2 ? '#4a2a2a' : '#3a2428', washA: 0.5, line: false });
    push(820, 360, 1); rect(-150, -200, 300, 330, { wash: '#a8b0b8', washA: 1, w: 10, col: '#2a1a10', key: 11600 }); for (let i = 0; i < 6; i++) ell(-120 + i * 50, -40 + (i % 3) * 40, 80, 30, { wash: '#e8e8ec', washA: 0.5, line: false }); push(60, 40, 1); pencil([[0, 0], [0, 90]], { w: 5, col: '#1a1a1a' }); rect(-14, -36, 28, 36, { wash: '#ffe8a0', washA: 1, w: 2, col: '#1a1a1a' }); glow(0, -18, 70, 'rgba(255,220,140,1)', 0.6); pop(); pencil([[0, -200], [0, 130]], { w: 8, col: '#2a1a10' }); pop();
    push(150, 300, 1); for (let r = 0; r < 3; r++) { pencil([[-120, r * 120], [120, r * 120]], { w: 6, col: '#2a1408', pass2: false }); for (let i = 0; i < 5; i++) { rect(-110 + i * 46, r * 120 - 70, 34, 70, { wash: ['#c8a868', '#8a3a2a', '#5a7a3a', '#d8c8a8', '#6a4a2a'][(i + r) % 5], washA: 0.9, w: 1.4, col: '#1a0a04' }); ell(-93 + i * 46, r * 120 - 72, 16, 5, { wash: '#3a2a1a', washA: 1, line: false }); } } pop();
    push(180, 1180, 1); rect(-200, -260, 400, 260, { wash: '#6a4a3a', washA: 1, w: 4, col: '#1a0a04', key: 11605 }); rect(-130, -190, 260, 190, { wash: '#1a0a04', washA: 1, w: 2 }); for (let i = 0; i < 6; i++) { const k = (t * 2.2 + i / 6) % 1; blob([[-60 + i * 22, -10], [-50 + i * 22, -60 - k * 60], [-40 + i * 22, -10]], { wash: ['#ff6a1a', '#ffb020'][i % 2], washA: 1 - k * 0.6, line: false }); } glow(0, -60, 200, 'rgba(255,150,60,1)', 0.45); pop(); }
  function easel(t) { push(560, 760, 1, 0.03); pencil([[-120, 360], [0, -230], [120, 360]], { w: 9, col: '#6a4a24' }); rect(-200, -200, 400, 290, { wash: '#d8c098', washA: 1, w: 8, col: '#8a6a3a', key: 11610 });
      for (let i = 0; i < 4; i++) pencil([[-180, -150 + i * 60], [180, -150 + i * 60]], { w: 2, col: '#a8885a', a: 0.6, pass2: false }); human(-90, 60, 0.6, t, { body: '#7a6a5a', hair: '#4a3a2a', face: 'smile', armL: 'hold', armR: 'up', seed: 1160, look: 0.3 }); rect(10, -40, 140, 14, { wash: '#efe4cc', washA: 1, w: 1.4, col: '#6a5a4a' });
      const k = clamp((t - EV.db_mil) / 0.45); if (k > 0) { const y = lerp(-600, 60, sm(k)), rot = (1 - k) * 0.6; push(110, y, 1, rot); rect(-60, -230, 120, 240, { wash: '#ffffff', washA: 1, w: 2, col: '#8a8a8a' }); human(0, 0, 0.66, t, { body: '#1a1a1a', hair: '#5a3a1a', face: 'angry', armL: 'down', armR: 'hips', seed: 1161, beard: 'short', hat: 'merchant', hatCol: '#111111', look: -0.3, prop: 'stick' }); pop();
        if (k < 1) { push(110 + 70, y - 260, 1, -0.5); pencil([[0, 0], [90, -60]], { w: 22, col: '#e8b88a' }); ell(0, 0, 24, 18, { wash: '#e8b88a', washA: 1, w: 2, col: '#6a3a1a' }); pop(); } }
      if (t > EV.db_ad) { const q = popK(t, EV.db_ad, 0.35); push(0, 140, q, -0.06); rect(-170, -32, 340, 64, { wash: '#e8482a', washA: 1, w: 3, col: '#2a0a0a' }); txt('РЕКЛАМА 1973', 0, 14, 40, { font: 'Osw', col: '#fff8ec' }); pop(); } pop(); }
  function desk(t) { rect(-300, 1460, 1700, 60, { wash: '#5a3420', washA: 1, w: 3, col: '#1a0a04', key: 11620 }); rect(-300, 1520, 1700, 600, { wash: '#4a2a18', washA: 1, w: 2, col: '#1a0a04' });
    const op = clamp((t - EV.db_book + 0.1) / 0.5); push(470, 1400, 1); if (op <= 0) { rect(-150, -40, 300, 50, { wash: '#6a1a1a', washA: 1, w: 3, col: '#1a0404' }); txt("THE COOK'S ORACLE", 0, -6, 26, { font: 'Osw', col: '#e8c870' }); }
      else { for (const sd of [-1, 1]) { push(0, 0, 1); poly([[0, 0], [sd * 220 * op, -14], [sd * 220 * op, -230], [0, -210]], { wash: '#f6ecd4', washA: 1, w: 2.4, col: '#6a4a1a' }); pop(); }
        if (op > 0.8) { txt('POTATOES FRIED', -110, -180, 22, { font: 'Osw', col: '#3a2a1a' }); txt('IN SLICES', -110, -152, 22, { font: 'Osw', col: '#3a2a1a' }); for (let i = 0; i < 4; i++) pencil([[-190, -120 + i * 22], [-30, -120 + i * 22]], { w: 2, col: '#6a5a3a', a: 0.6, pass2: false }); chip(110, -120, 0.7, 0.2, { col: '#e8d8a8', seed: 4 }); txt('1817', 110, -40, 40, { font: 'Osw', col: '#6a1a1a' }); } }
      if (t > EV.db_year) quizStamp('1817', 140, -260, t, EV.db_year, '#2a7a3a', -0.12, 0.8); pop(); }
  WORLD.debunk = (t, u, cat) => { lay(12, () => study(t)); lay(2.2, () => easel(t)); lay(1, () => { desk(t); cat(); }); };
  DIR.debunk = {
    outfit: 'victorianA', light: { side: 1, rim: '#ffd8a0' }, grade: ['#b07a5a', 0.06],
    act: () => [[S0.debunk, 'sideeye'], [EV.db_nice, 'smug'], [EV.db_book, 'talk'], [EV.db_year, 'proud'], [EV.db_mil, 'suspicious'], [EV.db_ad, 'annoyed']],
    pose: (t, u, b) => Object.assign(b, { x: 740, y: 1820, s: 1.12, flip: true, look: t < EV.db_mil ? [-0.6, 0.4] : [-0.6, -0.6], hand: t > EV.db_mil ? [200, -400] : [150, -300], handF: [-90, -240], point: t > EV.db_mil, prop: t < EV.db_mil ? 'quill' : null }),
    cam: () => [[S0.debunk, 560, 1100, 0.14], [EV.db_book, 520, 1300, 0.26], [EV.db_year, 520, 1280, 0.32, 'x'], [EV.db_mil, 560, 860, 0.24, 'x'], [S1.debunk, 560, 880, 0.26]]
  };
  TRANS_IN.debunk = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {              // страница книги перелистывается: лист с прошлой сценой загибается справа налево
    const q = sm(k), fx = W * (1 - q); drawBuf(B, 1, 540, 960); ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.rect(0, 0, fx, H); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
    scr(() => { const w = Math.sin(q * Math.PI) * 260; rect(fx - w, 0, w, H, { wash: '#f6ecd4', washA: 1, line: false }); shadeG(rect(fx - w, 0, w, H, { line: false }).path, fx - w, 0, fx, 0, '#a8885a', 0.6); pencil([[fx, 0], [fx, H]], { w: 4, col: '#6a4a1a', pass2: false }); });
  } };
})();
