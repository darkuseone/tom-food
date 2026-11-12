/* 018 — `verdict` (развязка ★): «Разгадка, по версии историков: письмо сочинили в тридцатых ради рекламы. Пицца старше легенды.» Неаполь, 1930-е:
   рекламная типография в ар-деко — чёрно-красные плакаты «PIZZERIA BRANDI · LA PIZZA DELLA REGINA», печатный станок с валом и стопками афиш, сохнущие
   листы на верёвках, фотограф с камерой-гармошкой и магниевой вспышкой; два брата Бранди с набриолиненными волосами и усиками позируют с рамкой письма;
   справа — двое историков с толстыми книгами и очками. Главный свет — промышленная лампа-абажур над станком (жёлтый конус), на слове «рекламы» —
   белая вспышка. Том в костюме 30-х со шляпой ставит штамп. По словам: «Разгадка» — луч прожектора, табличка ★ РАЗГАДКА; «историков» — историки
   кивают и раскрывают книги; «письмо сочинили» — один брат пишет пером письмо и подмигивает; «в тридцатых» — календарь 1932; «рекламы» — вспышка
   фотографа, плакат с королевой падает сверху; «Пицца старше легенды» — Том шлёпает штамп «ЛЕГЕНДА» на плакат, внизу лента 997 · 1866 · 1889 · 1930-е.
   Переход В сцену: печатный вал прокатывается по кадру сверху вниз и оставляет за собой новую сцену-оттиск. */
(() => {
  EV.vd_key = wtw('s7', 'Разгадка,');
  EV.vd_hist = wtw('s7', 'историков:');
  EV.vd_write = wtw('s7', 'сочинили');
  EV.vd_30 = wtw('s7', 'тридцатых');
  EV.vd_flash = wtw('s7', 'рекламы.');
  EV.vd_stamp = wtw('s7', 'легенды.');
  SHAKES.push([EV.vd_flash, 0.14, 6], [EV.vd_stamp + 0.05, 0.2, 10]);
  KEYW.push('рекламы.', 'легенды.');

  function poster(x, y, s, rot, k = 18900, queen = 1) {                // плакат ар-деко: лучи, королева, пицца, надписи
    push(x, y, s, rot); const p = rect(-160, -230, 320, 460, { wash: '#1a1a1a', washA: 1, w: 3, col: '#000', key: k }); for (let i = -6; i <= 6; i++) pencil([[0, 40], [i * 40, -230]], { w: 6, col: '#c8221a', a: 0.6, pass2: false });
    if (queen) { human(0, 120, 0.42, 0, { body: '#f8f4ec', hair: '#c8a060', face: 'smile', hat: 'crown', hatCol: '#d6a842', armL: 'hold', armR: 'up', seed: k + 1, long: 1 }); } margherita(0, 150, 0.3, 0, { tilt: 0.35, key: k + 2 });
    rect(-150, -220, 300, 70, { wash: '#e8c060', washA: 1, w: 2, col: '#000' }); txt('PIZZERIA BRANDI', 0, -176, 30, { font: 'Osw', col: '#1a1a1a' }); txt('LA PIZZA DELLA REGINA', 0, 214, 22, { font: 'Osw', col: '#e8c060' }); pop();
  }
  function shop(t) {                                                    // стены, плакаты, сушка афиш, окно с городом
    vgrad(-800, 1500, ['#1a1214', '#2a1c1a', '#3a2620']); for (let x = -800; x < 1900; x += 90) for (let y = -800; y < 1500; y += 45) rect(x + ((y / 45) % 2) * 45, y, 88, 43, { wash: (x + y) % 3 ? '#5a2e22' : '#4a2418', washA: 0.85, w: 0.8, col: '#2a1008' });
    for (const [i, [px, py, r]] of [[-520, -100, -0.05], [-180, -140, 0.04], [1000, -120, -0.03], [1300, -60, 0.05]].entries()) poster(px, py, 1, r, 18910 + i * 10, i % 2 === 0);
    push(420, -260, 1); const w = rect(-200, -260, 400, 420, { wash: '#8ab0d0', washA: 1, w: 10, col: '#2a2a2a', key: 18950 }); ctx.save(); ctx.clip(w.path); vgrad(-260, 160, ['#8ab0d0', '#e8d8b8']); sil([[-200, 160], [-200, 40], [-140, 40], [-140, -20], [-60, -20], [-60, 60], [20, 60], [20, -60], [100, -60], [100, 30], [200, 30], [200, 160]], '#6a6a7a', 1); ctx.restore(); for (let i = 1; i < 4; i++) pencil([[-200 + i * 100, -260], [-200 + i * 100, 160]], { w: 5, col: '#2a2a2a', pass2: false }); pencil([[-200, -50], [200, -50]], { w: 5, col: '#2a2a2a', pass2: false }); pop();
    for (let r = 0; r < 2; r++) { const y = -600 + r * 160; pencil(spline([[-800, y], [540, y + 50], [1900, y]], false, 8), { w: 2, col: '#8a8a8a', pass2: false }); for (let i = 0; i < 9; i++) { const x = -700 + i * 290, sw = Math.sin(t * 2 + i + r) * 0.05; push(x, y + 50 - Math.abs(x - 540) / 1300 * 50, 0.4, sw); rect(-150, 0, 300, 400, { wash: i % 2 ? '#e8c060' : '#f4ecd6', washA: 1, w: 2, col: '#3a2a1a' }); txt('BRANDI', 0, 120, 60, { font: 'Osw', col: '#c8221a' }); pop(); } }
    push(1180, 500, 1); rect(-100, -130, 200, 260, { wash: '#f4ecd6', washA: 1, w: 2.4, col: '#3a2a1a' }); rect(-100, -130, 200, 60, { wash: '#1a1a1a', washA: 1, line: false }); txt('ANNO', 0, -92, 26, { font: 'Osw', col: '#e8c060' }); const yr = t > EV.vd_30 ? Math.min(1932, 1889 + Math.floor((t - EV.vd_30) / 0.02)) : 1889; txt(String(yr), 0, 50, 70, { font: 'Osw', col: '#c8221a' }); pop();
  }
  function press(t) {                                                   // печатный станок: станина, вал, колесо, стопки, лампа-абажур
    push(-160, 1250, 1); const b = rect(-260, -320, 520, 320, { wash: '#2a2a30', washA: 1, w: 3, col: '#0a0a0a', key: 18960 }); shadeG(b.path, 260, 0, -260, 0, '#000', 0.5); for (let i = 0; i < 6; i++) ell(-220 + i * 88, -300, 10, 10, { wash: '#8a8a8a', washA: 1, w: 1 });
    const a = t * 3; ell(220, -420, 120, 120, { wash: '#1a1a20', washA: 0.4, w: 8, col: '#3a3a40' }); for (let i = 0; i < 6; i++) pencil([[220, -420], [220 + Math.cos(a + i) * 116, -420 + Math.sin(a + i) * 116]], { w: 6, col: '#3a3a40', pass2: false });
    rect(-240, -380, 400, 50, { wash: '#4a4a52', washA: 1, w: 2, col: '#0a0a0a' }); for (let i = 0; i < 8; i++) pencil([[-230 + i * 50 + (t * 120 % 50), -380], [-230 + i * 50 + (t * 120 % 50), -330]], { w: 2, col: '#8a8a92', a: 0.6, pass2: false });
    for (let i = 0; i < 5; i++) rect(-240 + i * 6, -340 - i * 8 - 40, 300, 8, { wash: '#f4ecd6', washA: 1, w: 0.8, col: '#8a7a5a' }); pop();
    push(-60, 300, 1); pencil([[0, -900], [0, 0]], { w: 3, col: '#2a2a2a', pass2: false }); const sh = blob([[-150, 80], [-90, 0], [90, 0], [150, 80]], { wash: '#2a4a3a', washA: 1, w: 3, col: '#0a1a14' }); shadeG(sh.path, 0, 0, 0, 80, '#6aa88a', 0.4); glow(0, 90, 160, 'rgba(255,230,160,1)', 0.45); pop();
    shaft(-60, 390, 300, 1100, 0, 'rgba(255,230,160,1)', 0.16);
  }
  function people(t) {                                                  // братья Бранди с рамкой, фотограф, историки
    const wr = t > EV.vd_write && t < EV.vd_flash;
    for (const [i, x] of [[0, 240], [1, 420]]) { human(x, 1300, 1.05, t, { body: i ? '#3a3a4a' : '#2a2a3a', legs: '#1a1a1a', hair: '#0a0a0a', face: wr && i === 0 ? 'grin' : 'smile', armL: 'hold', armR: i === 0 && wr ? 'up' : 'hold', look: 0.4, seed: 18970 + i, trim: '#f4f0e6' }); stache(x, 1300, 1.05); }
    push(330, 1300 - 190, 1); rect(-110, -80, 220, 150, { wash: '#c89a3a', washA: 1, w: 3, col: '#4a2a08' }); royalLetter(0, 0, 0.28, 0, { key: 18972 }); pop();
    if (wr) { push(240 + 80, 1300 - 360, 1, -0.6); pencil([[0, 0], [0, -120]], { w: 3, col: '#f4f0e6', pass2: false }); blob([[0, -120], [14, -80], [0, -40], [-10, -80]], { wash: '#f4f0e6', washA: 1, w: 1.4 }); pop(); push(240, 1300 - 300, 1); txt('*подмиг*', 0, -80, 22, { font: 'Hand', col: '#e8c060' }); pop(); }
    const fl = t > EV.vd_flash && t < EV.vd_flash + 0.4; human(820, 1300, 1.0, t, { body: '#6a5a4a', legs: '#2a2a2a', hair: '#3a2a1a', face: 'grin', armL: 'up', armR: 'hold', look: -0.6, seed: 18973, flip: -1, hat: 'cap', hatCol: '#3a3a3a' });
    push(740, 1060, 1); for (const lx of [-40, 0, 40]) pencil([[0, 0], [lx, 240]], { w: 4, col: '#3a2a1a', pass2: false }); rect(-60, -70, 120, 80, { wash: '#2a1a10', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) rect(-90 - i * 14, -60 + i * 6, 30, 60 - i * 12, { wash: '#1a1a1a', washA: 1, w: 1 }); ell(-150, -40, 24, 24, { wash: '#6a8aa8', washA: 1, w: 3, col: '#1a1a1a' }); pencil([[60, -140], [60, -70]], { w: 3, col: '#3a3a3a', pass2: false }); poly([[30, -170], [90, -170], [60, -140]], { wash: '#c8c8c8', washA: 1, w: 1.4 }); if (fl) glow(60, -170, 260, 'rgba(255,255,255,1)', 0.8); pop();
    const nod = t > EV.vd_hist ? Math.sin(t * 6) * 0.5 + 0.5 : 0;
    for (const [i, x] of [[0, 1020], [1, 1180]]) { human(x, 1300, 1.0, t, { body: i ? '#5a4a3a' : '#3a4a3a', legs: '#2a2a2a', hair: '#c8c8c8', face: t > EV.vd_hist ? 'grin' : 'calm', armL: 'hold', armR: 'hold', look: -0.6, seed: 18975 + i, flip: -1, beard: i ? 'short' : null });
      push(x - 30, 1300 - 280 + nod * 6, 1); for (const sd of [-1, 1]) ell(sd * 12, 0, 10, 8, { wash: '#d8ecf4', washA: 0.3, w: 2, col: '#2a2a2a' }); pop(); push(x - 50, 1300 - 170, 1); const o = t > EV.vd_hist ? 1 : 0; rect(-50 - o * 30, -30, 100 + o * 60, 60, { wash: i ? '#6a2a1a' : '#2a3a6a', washA: 1, w: 2, col: '#1a0a04' }); if (o) { rect(-76, -26, 72, 52, { wash: '#f4ecd6', washA: 1, w: 1 }); rect(4, -26, 72, 52, { wash: '#f4ecd6', washA: 1, w: 1 }); } pop(); }
  }
  function floor(t) {                                                   // пол-плитка ар-деко, стол с бумагами, штамп-плакат, лента лет
    const f = rect(-800, 1300, 2700, 900, { wash: '#1a1a1a', washA: 1, w: 2, col: '#000', key: 18980 }); for (let i = 0; i < 27; i++) for (let j = 0; j < 9; j++) if ((i + j) % 2) rect(-800 + i * 100, 1300 + j * 100, 100, 100, { wash: '#e8e0cc', washA: 0.9, w: 0.6, col: '#3a3a3a' });
    lightPool(-60, 1480, 520, 150, 'rgba(255,230,160,1)', 0.4); castShadow(330, 1300, 200, 200, 0.6, 0.3); castShadow(640, 1600, 260, 220, 0.5, 0.3);
    const fall = t > EV.vd_flash ? sm(clamp((t - EV.vd_flash) / 0.4)) : 0; if (fall > 0) { poster(900, lerp(600, 1420, fall), 0.85, lerp(0.6, 0.05, fall), 18990); if (t > EV.vd_stamp) { push(900, 1420, popK(t, EV.vd_stamp, 0.3), -0.25); rect(-180, -50, 360, 100, { wash: '#c8221a', washA: 0.25, w: 8, col: '#c8221a' }); txt('ЛЕГЕНДА', 0, 22, 60, { font: 'Osw', col: '#c8221a' }); pop(); } }
    if (t > EV.vd_key - 0.1) { const k = popK(t, EV.vd_key - 0.1, 0.4); push(560, 780, k, -0.03); const b = rect(-220, -60, 440, 110, { wash: '#e8c060', washA: 1, w: 4, col: '#1a1a1a' }); txt('★ РАЗГАДКА', 0, 18, 56, { font: 'Osw', col: '#1a1a1a' }); pop(); }
    if (t > EV.vd_stamp + 0.2) { const k = sm(clamp((t - EV.vd_stamp - 0.2) / 0.6)); push(540, 920, 1); pencil([[-340, 0], [-340 + 680 * k, 0]], { w: 6, col: '#e8c060', pass2: false }); ['997', '1866', '1889', '1930-е'].forEach((y, i) => { if (k > i / 3.2) { ell(-340 + i * 226, 0, 14, 14, { wash: i === 3 ? '#c8221a' : '#e8c060', washA: 1, w: 2, col: '#1a1a1a' }); txt(y, -340 + i * 226, -26, 34, { font: 'Osw', col: '#f4ecd6' }); } }); pop(); }
  }
  function front(t) { push(-200, 2000, 1.6); for (let i = 0; i < 5; i++) rect(-150, -40 - i * 14, 300, 14, { wash: i % 2 ? '#f4ecd6' : '#e8c060', washA: 1, w: 1, col: '#5a4a2a' }); pop(); push(1260, 1900, 1.6); rect(-60, -260, 120, 260, { wash: '#2a2a30', washA: 1, w: 2.4 }); for (let i = 0; i < 4; i++) ell(0, -220 + i * 60, 30, 10, { wash: ['#c8221a', '#1a1a1a', '#e8c060', '#2a5aa8'][i], washA: 1, w: 1.4 }); pop(); }
  WORLD.verdict = (t, u, cat) => {
    lay(12, () => { shop(t); haze('#5a3a2a', 0.06); });
    lay(2.6, () => { press(t); people(t); });
    lay(1, () => { floor(t); cat(); });
    lay(0.6, () => { front(t); motes(16, [-200, 300, 1300, 1500], '#ffe8b0', t, 18995, { sp: 4, sz: 3, a: 0.4, wob: 3 }); moodDark(400, 1100, 500, 1500, '#0a0610', 0.55); if (t > EV.vd_flash && t < EV.vd_flash + 0.3) screenFill('#ffffff', 0.5 * (1 - (t - EV.vd_flash) / 0.3), 'lighter'); });
  };
  DIR.verdict = {
    outfit: 'econA', light: { side: -1, rim: '#ffe0a0' }, grade: ['#e8a060', 0.07],
    act: () => [[S0.verdict, 'smug'], [EV.vd_key, 'proud'], [EV.vd_hist, 'talk'], [EV.vd_write, 'sideeye'], [EV.vd_flash, 'shock'], [EV.vd_stamp, 'laugh']],
    pose: (t, u, b) => { const st = t > EV.vd_stamp - 0.25 && t < EV.vd_stamp + 0.5; return Object.assign(b, { x: 700, y: 1600, s: 1.15, flip: 1, look: t < EV.vd_flash ? [-0.6, -0.3] : [0.8, 0.4], hand: st ? [280, t < EV.vd_stamp ? -360 : -200] : [180, -300], handF: [-90, -220], prop: 'stampP', propAng: st ? 0.3 : 0, squash: b.squash + (t > EV.vd_stamp && t < EV.vd_stamp + 0.1 ? 0.08 : 0) }); },
    cam: () => [[S0.verdict, 560, 950, 0.24], [EV.vd_key, 560, 1000, 0.28, 'x'], [EV.vd_hist, 760, 1050, 0.28], [EV.vd_write, 400, 1000, 0.3], [EV.vd_flash, 640, 1020, 0.26], [EV.vd_stamp, 760, 1120, 0.28], [S1.verdict, 620, 1060, 0.26]]
  };
  // ---------------------------------------------------------------- переход: печатный вал прокатывается сверху вниз, оставляя оттиск
  TRANS_IN.verdict = { a: 0.25, b: 0.45, runA: 0.5, fx(k, t, A, B) {
    const e = sm(k), y = lerp(-120, 2040, e); drawBuf(A, 1, 540, 960); const P = new Path2D(); P.rect(0, 0, W, y); inPath(P, () => drawBuf(B, 1, 540, 960));
    scr(() => { const r = rect(-40, y - 70, W + 80, 140, { wash: '#2a2a30', washA: 1, w: 4, col: '#000' }); shadeG(r.path, 0, y - 70, 0, y + 70, '#8a8a92', 0.5); for (let i = 0; i < 12; i++) pencil([[i * 100 + (e * 900 % 100), y - 70], [i * 100 + (e * 900 % 100), y + 70]], { w: 2, col: '#5a5a62', a: 0.6, pass2: false }); pencil([[-40, y - 76], [W + 40, y - 76]], { w: 10, col: '#c8221a', a: 0.7, pass2: false }); });
  } };
})();
