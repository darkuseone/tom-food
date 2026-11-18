/* 025 — `book`: «Но вот подвох: в старых литовских кулинарных книгах цеппелинов нет вообще!» Старая библиотека при свечах: стеллажи до сводов,
   лестница-стремянка, глобус, окно с луной и снегом над Вильнюсом, пыль в лучах; на пюпитре огромная старинная поваренная книга. Главный свет —
   канделябр на столе (тёплый), второй — лунное окно (холодный). Библиотекарь с очками на цепочке, студент со стопкой книг. Том-архивариус
   в чёрном сюртуке с лупой. По словам: «подвох» — Том поднимает палец, книга распахивается; «старых литовских кулинарных книгах» — страницы
   листаются ветром: картинки блинов, супа, пирогов — но пусто; «нет вообще!» — на чистом развороте штамп «НЕТ!», лупа над пустым местом,
   из книги вылетает моль. Переход В сцену: страница книги переворачивается на весь кадр. */
(() => {
  EV.bk_trap = wtw('s6', 'подвох:');
  EV.bk_flip = wtw('s6', 'кулинарных');
  EV.bk_none = wtw('s6', 'нет');
  SHAKES.push([EV.bk_none + 0.1, 0.16, 7]);
  KEYW.push('подвох:', 'вообще!');

  function library(t) {                                                 // своды, стеллажи, окно с луной и снегом, лестница, глобус
    vgrad(-800, 1500, ['#141018', '#24181c', '#342420']);
    for (let i = 0; i < 4; i++) { const x = -500 + i * 560; pencil(spline([[x - 280, -300], [x, -700], [x + 280, -300]], false, 10), { w: 26, col: '#3a2a22', pass2: false }); }
    for (const sx of [-560, 1260]) for (let j = 0; j < 7; j++) { const y = -500 + j * 200; rect(sx - 260, y + 180, 520, 16, { wash: '#4a3020', washA: 1, w: 1.4 }); for (let i = 0; i < 14; i++) { const bx = sx - 250 + i * 36, h = 120 + ((i * 7 + j * 3) % 5) * 12; rect(bx, y + 180 - h, 32, h, { wash: ['#5a1a14', '#1a3a2a', '#6a4a1a', '#2a2a44', '#4a2a1a'][(i + j) % 5], washA: 1, w: 1, col: '#0a0404' }); pencil([[bx + 4, y + 196 - h], [bx + 28, y + 196 - h]], { w: 2, col: '#c8a050', a: 0.6, pass2: false }); } }
    push(340, -150, 1); const w = blob([[-180, 260], [-180, -120], [-120, -260], [0, -300], [120, -260], [180, -120], [180, 260]], { wash: '#1a2448', washA: 1, w: 10, col: '#2a1a12', key: 25600 }); ctx.save(); ctx.clip(w.path); vgrad(-300, 260, ['#0a1430', '#2a3a68']); ell(60, -160, 46, 46, { wash: '#f4f0d8', washA: 1, w: 1 }); for (let i = 0; i < 6; i++) poly([[-180 + i * 70, 260], [-180 + i * 70, 120 - (i % 3) * 30], [-145 + i * 70, 90 - (i % 3) * 30], [-110 + i * 70, 120 - (i % 3) * 30], [-110 + i * 70, 260]], { wash: '#0a1020', washA: 1, w: 1 }); for (let i = 0; i < 30; i++) { const r = rng(25601 + i), y = ((t * 40 + r() * 560) % 560) - 300; ell(-180 + r() * 360, y, 3, 3, { wash: '#ffffff', washA: 0.8, line: false }); } ctx.restore(); pop();
    rays(400, -300, 2.3, 0.18, 1500, 'rgba(180,200,255,1)', 0.12, 3, t);
    push(-200, 1100, 1); for (const sd of [-1, 1]) pencil([[sd * 80, 0], [sd * 40, -800]], { w: 10, col: '#5a3a1a' }); for (let i = 0; i < 8; i++) pencil([[-78 + i * 5, -i * 100], [78 - i * 5, -i * 100]], { w: 6, col: '#5a3a1a', pass2: false }); pop();
    push(980, 1000, 1); ell(0, -120, 100, 100, { wash: '#c8a868', washA: 1, w: 2.4, col: '#4a2a08' }); for (let i = 0; i < 3; i++) pencil(spline([[-100, -120 + (i - 1) * 50], [0, -110 + (i - 1) * 60], [100, -120 + (i - 1) * 50]], false, 6), { w: 1.4, col: '#6a4a18', pass2: false }); pencil([[0, -20], [0, 60]], { w: 8, col: '#4a2a08' }); pop();
  }
  function clutter(t) {                                                // мелочи библиотеки: стопки книг на полу, свитки, чернильница, карточный каталог, паутина
    for (let i = 0; i < 3; i++) { push(-460 + i * 140, 1300, 1); for (let q = 0; q < 5; q++) rect(-50 + (q % 2) * 6, -22 - q * 22, 100, 20, { wash: ['#5a1a14', '#1a3a2a', '#6a4a1a', '#2a2a44', '#4a2a1a'][(q + i) % 5], washA: 1, w: 1.2, col: '#0a0404' }); pop(); }
    for (let i = 0; i < 4; i++) { push(1220 + (i % 2) * 60, 1220 - Math.floor(i / 2) * 50, 1, 0.2); rect(-60, -14, 120, 28, { wash: '#e8d8b0', washA: 1, w: 1.4, col: '#6a5a3a' }); ell(-60, 0, 10, 14, { wash: '#c8b088', washA: 1, w: 1.2 }); ell(60, 0, 10, 14, { wash: '#c8b088', washA: 1, w: 1.2 }); pop(); }
    push(-760, 1000, 1); rect(-110, -300, 220, 300, { wash: '#5a3a1e', washA: 1, w: 2 }); for (let j = 0; j < 5; j++) for (let i = 0; i < 3; i++) { rect(-100 + i * 70, -290 + j * 58, 60, 50, { wash: '#6a4a2a', washA: 1, w: 1 }); ell(-70 + i * 70, -262 + j * 58, 6, 4, { wash: '#c8a050', washA: 1, line: false }); } pop();
    push(-700, -620, 1); for (let i = 0; i < 6; i++) pencil([[0, 0], [Math.cos(i * 0.5) * 160, Math.sin(i * 0.5) * 160]], { w: 1, col: '#c8c0b8', a: 0.5, pass2: false }); for (let r = 1; r < 4; r++) pencil(spline([[r * 40, 0], [r * 34, r * 22], [r * 20, r * 34], [0, r * 40]], false, 5), { w: 1, col: '#c8c0b8', a: 0.4, pass2: false }); pop();
  }
  function people(t) {                                                  // библиотекарь и студент
    const sh = t > EV.bk_none; human(120, 1300, 1.0, t, { body: '#3a2a3a', legs: '#2a2a2a', hair: '#c8c8c8', face: sh ? 'shock' : 'calm', armL: 'hold', armR: sh ? 'up' : 'hold', look: 0.5, seed: 25610, long: 1 }); push(120, 1300 - 290, 1); for (const sd of [-1, 1]) ell(sd * 12, 0, 10, 8, { wash: '#d8ecf4', washA: 0.3, w: 2, col: '#c8a050' }); pencil(spline([[-22, 4], [0, 40], [22, 4]], false, 4), { w: 1.4, col: '#c8a050', pass2: false }); pop();
    human(1060, 1300, 0.95, t, { body: '#2a3a5a', legs: '#2a2a2a', hair: '#6a3a1a', face: sh ? 'shock' : 'smile', armL: 'hold', armR: 'hold', look: -0.5, seed: 25611, flip: -1 }); push(1040, 1110, 1); for (let i = 0; i < 4; i++) rect(-50, -i * 18, 100, 16, { wash: ['#5a1a14', '#1a3a2a', '#6a4a1a', '#2a2a44'][i], washA: 1, w: 1.2 }); pop();
  }
  function lectern(t) {                                                 // пюпитр и книга (после cat): страницы листаются, пустой разворот, штамп, моль
    const d = rect(-500, 1440, 2100, 700, { wash: '#3a2214', washA: 1, w: 3, col: '#0a0404', key: 25620 }); shadeG(d.path, 0, 1440, 0, 1700, '#0a0404', 0.4);
    push(880, 1480, 0.78); poly([[-260, 0], [260, 0], [230, -60], [-230, -60]], { wash: '#5a3a1e', washA: 1, w: 2.4 }); const open = t > EV.bk_trap ? sm(clamp((t - EV.bk_trap) / 0.4)) : 0;
    const L = blob([[-250, -50], [-240, -250 * open - 30], [0, -230 * open - 40], [0, -50]], { wash: '#f2e6c8', washA: 1, w: 2, col: '#5a4a2a' }), R = blob([[0, -50], [0, -230 * open - 40], [240, -250 * open - 30], [250, -50]], { wash: '#f4ead0', washA: 1, w: 2, col: '#5a4a2a' }); shadeG(L.path, 0, 0, -120, 0, '#b8a478', 0.5); shadeG(R.path, 0, 0, 120, 0, '#b8a478', 0.45);
    if (open > 0.8) { const flipping = t > EV.bk_flip - 0.1 && t < EV.bk_none; if (flipping) { const q = ((t - EV.bk_flip) * 3) % 1; push(0, -50, 1); blob([[0, 0], [lerp(240, -240, q), -200 + Math.sin(q * 3.14) * -60], [lerp(240, -240, q), 0]], { wash: '#f8f0dc', washA: 1, w: 1.6, col: '#6a5a3a' }); pop(); const pics = ['блины', 'суп', 'пирог', 'каша']; txt(pics[Math.floor((t - EV.bk_flip) * 3) % 4], -120, -150, 30, { font: 'Hand', col: '#3a2a1a' }); }
      if (!flipping && t < EV.bk_none) txt('XIX в. · VIRĖJA', -120, -230, 22, { font: 'Osw', col: '#3a2a1a' });
      if (t > EV.bk_none) { for (let i = 0; i < 6; i++) pencil([[-220, -230 + i * 30], [-40, -230 + i * 30]], { w: 2, col: '#8a7a5a', a: 0.5, pass2: false }); push(120, -150, popK(t, EV.bk_none, 0.3), -0.2); rect(-90, -40, 180, 80, { wash: '#c8221a', washA: 0.15, w: 6, col: '#c8221a' }); txt('НЕТ!', 0, 18, 56, { font: 'Osw', col: '#c8221a' }); pop();
        const q = clamp((t - EV.bk_none - 0.2) / 1.5); push(lerp(80, 300, q), lerp(-200, -600, q) + Math.sin(t * 12) * 10, 1); ell(0, 0, 10, 6, { wash: '#a89a7a', washA: 1, w: 1 }); for (const sd of [-1, 1]) ell(sd * 10, -4, 10, 6 + Math.sin(t * 30) * 4, { wash: '#c8b898', washA: 1, w: 1, rot: sd * 0.4 }); pop(); } }
    pop();
    push(1080, 1440, 1); for (const x of [-60, 0, 60]) { candle(x, 0, 1, t, 25630 + x); } pencil([[-80, 0], [80, 0]], { w: 6, col: '#c8a050', pass2: false }); pop(); lightPool(900, 1500, 480, 120, 'rgba(255,190,100,1)', 0.4);
    castShadow(520, 1600, 260, 220, -0.6, 0.32);
  }
  function front(t) { push(-200, 1980, 1.6); for (let i = 0; i < 5; i++) rect(-150 + i * 12, -50 - i * 34, 280, 32, { wash: ['#5a1a14', '#1a3a2a', '#6a4a1a', '#2a2a44', '#4a2a1a'][i], washA: 1, w: 1.6, col: '#0a0404' }); pop(); push(1250, -200, 1.5); for (let i = 0; i < 3; i++) pencil(spline([[-200 + i * 60, -400], [-160 + i * 60, -100 - i * 30], [-120 + i * 60, -400]], false, 6), { w: 2, col: '#c8c0b8', a: 0.5, pass2: false }); pop(); }
  WORLD.book = (t, u, cat) => {
    lay(12, () => { library(t); glow(1080, 1300, 160, 'rgba(255,190,100,1)', 0.3); haze('#4a3a5a', 0.06); });
    lay(2.6, () => { clutter(t); people(t); });
    lay(1, () => { cat(); lectern(t); });
    lay(0.6, () => { front(t); motes(22, [-200, 200, 1300, 1400], '#ffe8c0', t, 25640, { sp: 3, sz: 3, a: 0.45, wob: 3 }); moodDark(800, 1300, 450, 1400, '#06040a', 0.55); });
  };
  DIR.book = {
    outfit: 'dutchA', light: { side: 1, rim: '#ffc880' }, grade: ['#8a6a8a', 0.07],
    act: () => [[S0.book, 'suspicious'], [EV.bk_trap, 'smug'], [EV.bk_flip, 'talk'], [EV.bk_none, 'shock']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1600, s: 1.16, flip: 1, look: t < EV.bk_trap ? [-0.4, -0.3] : [0.8, 0.5], hand: t > EV.bk_flip ? [250, -260] : [140, -400], handF: [-80, -230], prop: 'magnP', propAng: t > EV.bk_flip ? 0.9 : 0, point: t > EV.bk_trap && t < EV.bk_flip ? 1 : undefined }),
    cam: () => [[S0.book, 560, 1000, 0.24], [EV.bk_trap, 600, 1080, 0.26], [EV.bk_flip, 680, 1160, 0.3], [EV.bk_none, 700, 1150, 0.32], [S1.book, 690, 1150, 0.32]]
  };
  // ---------------------------------------------------------------- переход: страница переворачивается на весь кадр
  TRANS_IN.book = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), x = lerp(1080, -100, e); drawBuf(B, 1, 540, 960); const P = new Path2D(); P.rect(0, 0, x, H); inPath(P, () => drawBuf(A, 1, 540, 960));
    scr(() => { const w = 300 * Math.sin(e * Math.PI) + 20; const p = poly([[x, -40], [x + w, 40], [x + w, 1960], [x, 1880]], { wash: '#f4ead0', washA: 1, w: 3, col: '#6a5a3a' }); shadeG(p.path, x, 0, x + w, 0, '#a89470', 0.6); for (let i = 0; i < 30; i++) pencil([[x + 20, 100 + i * 60], [x + w - 20, 110 + i * 60]], { w: 1.4, col: '#8a7a5a', a: 0.4, pass2: false }); });
  } };
})();
