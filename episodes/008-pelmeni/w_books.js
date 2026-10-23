/* 008 — `books`: «Старинный рецепт? Миф! В поваренных книгах пельмени — только с девятнадцатого века.» Старая библиотека: дубовые стеллажи до потолка,
   лесенка, глобус, канделябр, пыль в луче. На «Старинный рецепт?» Том-библиотекарь снимает с полки огромную книгу; на «Миф!» — штамп МИФ; на «поваренных книгах»
   книга сама листается: страницы XVI, XVII, XVIII века — пусто (только паутинка), и на странице XIX века — рисунок пельменей и заголовок «Пельмени сибирские».
   Переход В сцену: прошлый кадр переворачивается, как страница книги. */
(() => {
  EV.bk_myth = wtw('s4', 'Миф!');
  EV.bk_books = wtw('s4', 'поваренных');
  EV.bk_19 = wtw('s4', 'девятнадцатого');
  SHAKES.push([EV.bk_myth + 0.1, 0.25, 12]);
  KEYW.push('Миф!');

  const PAGES = ['XVI ВЕК', 'XVII ВЕК', 'XVIII ВЕК', 'XIX ВЕК'];
  function library(t) { vgrad(-600, 1500, ['#2a1a10', '#3a2614', '#4a301a']); for (let c = 0; c < 5; c++) { const x = -260 + c * 300; rect(x, -100, 280, 1400, { wash: '#5a3a1e', washA: 1, w: 3, col: '#1a0a04' }); for (let r = 0; r < 7; r++) { rect(x, 80 + r * 180, 280, 14, { wash: '#3a2410', washA: 1, w: 1.6 }); for (let q = 0; q < 8; q++) { const rr = rng(10100 + c * 100 + r * 10 + q); rect(x + 8 + q * 33, 80 + r * 180 - 120 - rr() * 30, 28, 120 + rr() * 30, { wash: ['#7a1a10', '#2a4a2a', '#2a3a6a', '#8a6a2a', '#4a2a4a'][(q + r + c) % 5], washA: 1, w: 1.4, col: '#0a0402' }); pencil([[x + 12 + q * 33, 80 + r * 180 - 60], [x + 32 + q * 33, 80 + r * 180 - 60]], { w: 2, col: '#d6a842', a: 0.7, pass2: false }); } } }
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = 'rgba(255,220,150,0.08)'; ctx.beginPath(); ctx.moveTo(900, -200); ctx.lineTo(1100, -200); ctx.lineTo(500, 1600); ctx.lineTo(100, 1600); ctx.fill(); ctx.restore(); motes(30, [100, 0, 1000, 1500], '#ffe8b0', t, 10110, { sp: 8, sz: 2.4, a: 0.6 }); }
  function book(t) { push(480, 1240, 1); rect(-360, -40, 720, 60, { wash: '#6a4426', washA: 1, w: 3, col: '#1a0a04' }); const open = clamp((t - EV.bk_books + 0.6) / 0.4);
    if (open <= 0) { const b = rect(-200, -300, 400, 260, { wash: '#7a1a10', washA: 1, w: 4, col: '#2a0402' }); pencil([[-180, -280], [180, -280]], { w: 4, col: '#d6a842', pass2: false }); txt('КУХНЯ', 0, -170, 50, { font: 'Osw', col: '#d6a842' }); txt('СТАРИННАЯ', 0, -110, 30, { font: 'Hand', col: '#d6a842' }); }
    else { for (const sd of [-1, 1]) { const pg = poly([[0, -40], [sd * 340, -60], [sd * 340, -400], [0, -380]], { wash: '#f2e6c8', washA: 1, w: 3, col: '#6a5a3a' }); } pencil([[0, -40], [0, -380]], { w: 4, col: '#6a5a3a', pass2: false });
      const flip = clamp((t - EV.bk_books) / (EV.bk_19 - EV.bk_books + 0.2)), idx = Math.min(3, Math.floor(flip * 3.999)), fp = (flip * 4) % 1;
      txt(PAGES[idx], 170, -340, 34, { font: 'Osw', col: '#7a1a10' }); if (idx < 3) { pencil([[60, -200], [120, -260], [180, -200], [120, -140], [60, -200]], { w: 1.4, col: '#a8a8a8', a: 0.7, pass2: false }); pencil([[120, -260], [120, -140]], { w: 1.4, col: '#a8a8a8', a: 0.7, pass2: false }); pencil([[60, -200], [180, -200]], { w: 1.4, col: '#a8a8a8', a: 0.7, pass2: false }); txt('— пусто —', 170, -90, 28, { font: 'Hand', col: '#8a7a5a' }); }
      else { txt('Пельмени сибирские', 170, -290, 30, { font: 'Hand', col: '#2a2a2a' }); for (let i = 0; i < 5; i++) pelmen(60 + (i % 3) * 70, -200 + Math.floor(i / 3) * 60, 0.6, i * 0.3, { cook: true, key: i }); for (let i = 0; i < 3; i++) pencil([[40, -100 + i * 18], [300, -100 + i * 18]], { w: 2, col: '#4a3a2a', a: 0.6, pass2: false }); }
      txt('Поваренная книга', -170, -340, 30, { font: 'Hand', col: '#5a4a2a' }); for (let i = 0; i < 8; i++) pencil([[-300, -290 + i * 28], [-40, -290 + i * 28]], { w: 2, col: '#4a3a2a', a: 0.4, pass2: false });
      if (fp < 0.4 && flip < 1) { const q = fp / 0.4; poly([[0, -40], [lerp(340, -340, q), -60 + Math.sin(q * Math.PI) * -60], [lerp(340, -340, q), -400 - Math.sin(q * Math.PI) * 60], [0, -380]], { wash: '#fbf2d8', washA: 1, w: 2, col: '#6a5a3a' }); } }
    pop(); quizStamp('МИФ', 540, 780, t, EV.bk_myth, '#d9282b', -0.14); }
  WORLD.books = (t, u, cat) => { lay(10, () => library(t)); lay(1.2, () => book(t)); lay(1, () => { rect(-300, 1460, 1700, 600, { wash: '#5a3a1e', washA: 1, w: 2, col: '#1a0a04', key: 10120 }); for (let i = 0; i < 10; i++) pencil([[-300 + i * 200, 1460], [-260 + i * 200, 2000]], { w: 3, col: '#3a2410', a: 0.6, pass2: false }); cat(); }); };
  DIR.books = {
    outfit: 'victorianA', light: { side: 1, rim: '#ffd8a0' }, grade: ['#a87040', 0.08],
    act: () => [[S0.books, 'suspicious'], [EV.bk_myth, 'smug'], [EV.bk_books, 'talk'], [EV.bk_19, 'awe']],
    pose: (t, u, b) => Object.assign(b, { x: 900, y: 1810, s: 1.1, flip: true, look: [-0.7, -0.2], hand: [170, -320], handF: [-90, -230], prop: 'stampP', point: t > EV.bk_books ? 1 : 0, propAng: t > EV.bk_myth && t < EV.bk_myth + 0.3 ? 0.6 : 0 }),
    cam: () => [[S0.books, 540, 1000, 0.1], [EV.bk_myth, 560, 960, 0.12, 'x'], [EV.bk_books, 480, 1050, 0.2, 'x'], [EV.bk_19, 560, 1020, 0.24], [S1.books, 560, 1020, 0.26]]
  };
  // ---------------------------------------------------------------- переход: прошлый кадр переворачивается, как страница (корешок слева)
  TRANS_IN.books = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = sm(k), sx = Math.cos(q * Math.PI); drawBuf(B, 1, 540, 960); scr(() => { ctx.save(); ctx.translate(0, 0); ctx.scale(Math.max(0.001, Math.abs(sx)), 1); if (sx > 0) ctx.drawImage(A, 0, 0); else { ctx.fillStyle = '#f2e6c8'; ctx.fillRect(0, 0, W, H); } ctx.restore();
      ctx.fillStyle = `rgba(0,0,0,${0.35 * Math.sin(q * Math.PI)})`; ctx.fillRect(W * Math.abs(sx), 0, 60, H); });
  } };
})();
