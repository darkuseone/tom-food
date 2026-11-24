/* 028 — `today` + `button`: «Отправь тому, кто макает круассан в кофе. Ты с шоколадом или без? / Пиши блюдо — раскатаем следующее!»
   Сегодня: уютная булочная-кафе изнутри — стеклянная витрина с рядами круассанов и пэн-о-шоколя, кофемашина с паром, меловая доска меню,
   полки с багетами в корзинах, подвесные лампы-шары (главный свет), окно на улицу с утренним солнцем (второй), бариста, мадам с
   таксой, студент с ноутбуком макает круассан в капучино. Том — в канотье и полосатой рубашке. По словам: «Отправь» — у студента пиликает
   телефон; «макает» — студент окунает круассан в чашку: брызги-«буль»; «кофе.» — Том морщится-улыбается; «шоколадом» — в одной лапе
   пэн-о-шоколя; «без?» — в другой — классический круассан; финал — Том подмигивает, «ПОДПИШИСЬ» поверх. Переход В сцену: кофе в чашке
   закручивается латте-арт-сердечком, которое растёт и открывает кафе. */
(() => {
  EV.td_send = wtw('t1', 'Отправь');
  EV.td_dunk = wtw('t1', 'макает');
  EV.td_coffee = wtw('t1', 'кофе.');
  EV.td_choc = wtw('t1', 'шоколадом');
  EV.td_plain = wtw('t1', 'без?');
  EV.td_x = LS('x1');
  SHAKES.push([EV.td_dunk + 0.4, 0.1, 4]);
  KEYW.push('шоколадом', 'без?');

  function shop(t) {                                                      // стены: кафель-метро, меловая доска, полки с багетами, окно, лампы
    vgrad(-500, 1500, ['#f0e8d8', '#f8f0e0', '#e8dcc8']); for (let r = 0; r < 12; r++) for (let i = 0; i < 14; i++) rect(-500 + i * 160 + (r % 2) * 80, 700 + r * 60, 156, 56, { wash: '#f8f8f4', washA: 1, w: 1, col: '#c8c8c0' });
    push(680, 470, 0.75); rect(-200, -200, 400, 360, { wash: '#2a3a34', washA: 1, w: 8, col: '#6a4a2a', key: 29100 }); txt('MENU', 0, -140, 44, { font: 'Hand', col: '#f8f4ec' }); const it = [['croissant', '1,40'], ['pain au chocolat', '1,60'], ['café crème', '2,80'], ['baguette', '1,20']]; it.forEach(([a, b], i) => { txt(a, -60, -80 + i * 54, 30, { font: 'Hand', col: '#f8f4ec' }); txt(b, 140, -80 + i * 54, 30, { font: 'Hand', col: '#f0c060' }); }); hudBox('меловая доска', -200, -200, 200, 160); pop();
    push(1060, 420, 1); rect(-180, -220, 360, 440, { wash: '#bfe0f0', washA: 1, w: 8, col: '#f4f0e8', key: 29101 }); vgrad(-220, 220, ['#c8e0f0', '#f8e8c8']); for (let i = 0; i < 3; i++) rect(-160 + i * 110, -60, 90, 280, { wash: '#e8dcc8', washA: 1, w: 1 }); pencil([[0, -220], [0, 220]], { w: 6, col: '#f4f0e8', pass2: false }); glow(0, 0, 260, 'rgba(255,240,200,1)', 0.25); pop();
    push(320, 780, 1); rect(-240, 0, 480, 16, { wash: '#8a5a2a', washA: 1, w: 1.6 }); for (let i = 0; i < 3; i++) { blob([[-200 + i * 160, 0], [-210 + i * 160, -60], [-130 + i * 160, -60], [-120 + i * 160, 0]], { wash: '#c89a5a', washA: 1, w: 2 }); for (let j = 0; j < 4; j++) baguette(-165 + i * 160 + j * 6, -60 - j * 8, 0.28, -1.3 + j * 0.1); } pop();
    for (const x of [160, 560, 960]) { push(x, -60, 1); pencil([[0, -300], [0, 0]], { w: 3, col: '#2a2a2a', pass2: false }); ell(0, 30, 50, 50, { wash: '#f8e8c0', washA: 0.9, w: 2, col: '#8a7a5a' }); glow(0, 30, 150, 'rgba(255,225,170,1)', 0.25); pop(); }
  }
  function folk(t) {                                                      // бариста у кофемашины, студент с ноутбуком макает круассан, мадам с таксой
    human(140, 1290, 1.0, t, { body: '#2a2a2a', legs: '#2a2a2a', hair: '#3a2010', face: 'smile', armL: 'hold', armR: 'up', look: 0.4, seed: 29110 }); rect(90, 1290 - 200, 100, 140, { wash: '#a87a4a', washA: 1, w: 1 });
    push(300, 1290, 1); rect(-90, -260, 180, 200, { wash: '#a8acb4', washA: 1, w: 2.4, col: '#3a3a3a' }); for (let i = 0; i < 2; i++) { const ph = (t * 0.6 + i * 0.5) % 1; ell(-30 + i * 60, -280 - ph * 100, 24 + ph * 20, 16 + ph * 12, { wash: '#ffffff', washA: 0.4 * (1 - ph), line: false }); } pop();
    const dunk = t > EV.td_dunk; human(1000, 1290, 1.0, t, { body: '#4a8a6a', legs: '#2a2a3a', hair: '#1a1410', face: dunk ? 'grin' : 'smile', armL: 'hold', armR: dunk ? 'hold' : 'hold', look: -0.5, seed: 29111, flip: -1, prop: t > EV.td_send && t < EV.td_dunk ? 'phone' : undefined });
    push(900, 1120, 1); coffeeCup(0, 0, 0.5, t); const q = dunk ? clamp((t - EV.td_dunk) / 0.6) : 0; croissant(-10, -60 + Math.sin(q * 3.14) * 40, 0.16, t, { rot: 1.2, key: 29112 }); if (q > 0.5) for (let i = 0; i < 5; i++) ell(-20 + Math.cos(i * 1.3) * 40 * q, -50 - Math.sin(i * 1.3) * 40 * q, 5, 5, { wash: '#8a5a2a', washA: 1 - q, line: false }); pop();
    human(-60, 1300, 0.9, t, { body: '#c84a6a', legs: '#2a1a2a', hair: '#f0c060', face: t > EV.td_coffee ? 'shock' : 'smile', armL: 'hold', armR: 'hold', look: 0.5, seed: 29113, long: 1, hat: 'scarf', hatCol: '#c8201a' });
    push(60, 1330, 0.5); blob([[-80, 0], [-70, -40], [60, -40], [90, -20], [80, 0]], { wash: '#8a4a1a', washA: 1, w: 2 }); ell(100, -40, 26, 20, { wash: '#8a4a1a', washA: 1, w: 2 }); ell(90, -22, 10, 16, { wash: '#5a2a0a', washA: 1, line: false }); for (const x of [-60, -30, 40, 60]) pencil([[x, 0], [x, 20]], { w: 6, col: '#8a4a1a', pass2: false }); pop();
  }
  function counter(t) {                                                   // витрина: ряды круассанов и пэн-о-шоколя, ценники
    const tb = rect(-500, 1440, 2200, 600, { wash: '#6a4a2a', washA: 1, w: 3, col: '#2a1408', key: 29120 }); shadeG(tb.path, 0, 1440, 0, 1900, '#3a2010', 0.5); rect(-500, 1440, 2200, 24, { wash: '#e8dcc0', washA: 1, line: false });
    push(330, 1450, 1); rect(-220, -110, 440, 110, { wash: '#e8f4f8', washA: 0.35, w: 3, col: '#8a9aa0' }); for (let i = 0; i < 4; i++) croissant(-160 + i * 105, -20, 0.22, t, { key: 29121 + i, choc: i % 2 }); pencil([[-210, -100], [100, -30]], { w: 5, col: '#ffffff', a: 0.4, pass2: false }); pop();
    push(1050, 1450, 1); rect(-60, -40, 120, 40, { wash: '#f8f4ec', washA: 1, w: 1.6 }); txt('1,40 €', 0, -12, 26, { font: 'Osw', col: '#c8201a' }); pop();
    castShadow(640, 1450, 320, 90, 0.5, 0.25);
  }
  function extra(t) {                                                     // мелочи булочной: часы, растение, касса, стопка коробок, флажки-гирлянда
    push(250, 260, 1); ell(0, 0, 54, 54, { wash: '#f8f4ec', washA: 1, w: 4, col: '#2a2a2a' }); pencil([[0, 0], [Math.cos(t * 0.5) * 36, Math.sin(t * 0.5) * 36]], { w: 3, col: '#1a1a1a', pass2: false }); pencil([[0, 0], [0, -26]], { w: 4, col: '#1a1a1a', pass2: false }); pop();
    push(-60, 760, 1); blob([[-40, 0], [-34, -60], [34, -60], [40, 0]], { wash: '#c86a3a', washA: 1, w: 2 }); for (let i = 0; i < 7; i++) pencil(spline([[0, -60], [-60 + i * 20, -150], [-80 + i * 26, -220 - (i % 3) * 20]], false, 4), { w: 4, col: '#3a8a3a', pass2: false }); pop();
    push(560, 1250, 1); rect(-70, -80, 140, 80, { wash: '#3a3a40', washA: 1, w: 2 }); rect(-50, -110, 100, 30, { wash: '#2a2a30', washA: 1, w: 1.6 }); for (let i = 0; i < 6; i++) rect(-56 + (i % 3) * 40, -66 + Math.floor(i / 3) * 26, 28, 18, { wash: '#c8ccd4', washA: 1, w: 1 }); pop();
    for (let i = 0; i < 9; i++) { const x = -200 + i * 170, y = 160 + Math.sin(i * 1.1) * 30 + Math.sin(t * 2 + i) * 4; poly([[x, y], [x + 60, y + 6], [x + 30, y + 60]], { wash: ['#2a3a8a', '#f8f4ec', '#c8201a'][i % 3], washA: 1, w: 1 }); }
    pencil(Array.from({ length: 10 }, (_, i) => [-200 + i * 170, 160 + Math.sin(i * 1.1) * 30]), { w: 2, col: '#3a2a1a', pass2: false });
    hatch(pathOf([[-500, 700], [1700, 700], [1700, 1440], [-500, 1440]]), bbOf([[-500, 700], [1700, 1440]]), { gap: 22, a: 0.05, col: '#a8a8a0', ang: 0.7, key: 29150 });
  }
  WORLD.today = (t, u, cat) => {
    lay(9, () => { shop(t); extra(t); haze('#fff4e0', 0.04); });
    lay(2.6, () => { folk(t); });
    lay(1, () => { lightPool(580, 1460, 680, 120, 'rgba(255,230,180,1)', 0.35); cat(); counter(t); });
    lay(0.65, () => { push(-140, 1950, 1.4); coffeeCup(0, -20, 1.4, t); pop(); push(1240, 1950, 1.4); for (let i = 0; i < 3; i++) croissant(0, -40 - i * 50, 0.4, t, { key: 29130 + i }); pop();
      motes(10, [-200, 300, 1300, 1500], '#fff8e8', t, 29190, { sp: 3, sz: 3, a: 0.3, wob: 3 }); moodDark(600, 1000, 560, 1500, '#140a10', 0.35); });
  };
  WORLD.button = (t, u, cat) => WORLD.today(t, u, cat);
  const pose = (t, b) => { const one = t > EV.td_choc - 0.1, two = t > EV.td_plain - 0.1;
    return Object.assign(b, { x: 700, y: 1600, s: 1.16, flip: true, look: t > EV.td_dunk && t < EV.td_choc ? [0.9, 0.2] : [0, 0], hand: one ? [170, -380] : [150, -230], handF: two ? [-170, -380] : [-90, -230], point: t > EV.td_send && t < EV.td_dunk ? 1 : undefined, prop: one ? 'chocP' : 'coffeeP', squint: t > EV.td_coffee && t < EV.td_choc, tailUp: t > EV.td_x }); };
  DIR.today = {
    outfit: 'parisA', light: { side: -1, rim: '#ffe8c0' }, grade: ['#ffd0a0', 0.05],
    act: () => [[S0.today, 'grin'], [EV.td_send, 'wink'], [EV.td_dunk, 'sideeye'], [EV.td_coffee, 'laugh'], [EV.td_choc, 'grin'], [EV.td_plain, 'suspicious']],
    pose: (t, u, b) => pose(t, b),
    afterCat: (t, u, P) => { if (t > EV.td_plain - 0.1) { push(P.x + 170 * P.s, P.y - 380 * P.s, 1); croissant(0, 0, 0.32, t, { key: 29140 }); pop(); } },
    cam: () => [[S0.today, 580, 1080, 0.26], [EV.td_dunk, 640, 1100, 0.27], [EV.td_choc, 600, 1140, 0.3], [S1.today, 610, 1150, 0.32]]
  };
  DIR.button = {
    outfit: 'parisA', light: { side: -1, rim: '#ffe8c0' }, grade: ['#ffd0a0', 0.05],
    act: () => [[S0.button, 'grin'], [EV.td_x + 0.4, 'wink'], [EV.td_x + 1.3, 'laugh']],
    pose: (t, u, b) => pose(t, b),
    afterCat: (t, u, P) => DIR.today.afterCat(t, u, P),
    cam: () => [[S0.button, 610, 1150, 0.32], [S1.button, 600, 1120, 0.3]]
  };
  Object.assign(PROPS, { chocP() { croissant(0, 0, 0.32, 0, { choc: 1, key: 29145 }); } });   // пэн-о-шоколя в лапе
  // ---------------------------------------------------------------- переход: латте-арт-сердечко растёт из чашки и открывает кафе
  TRANS_IN.today = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), s = lerp(0.05, 9, e * e); drawBuf(A, 1, 540, 960);
    scr(() => { const hp = []; for (let i = 0; i <= 40; i++) { const a = i / 40 * 6.283, x = 16 * Math.sin(a) ** 3, y = -(13 * Math.cos(a) - 5 * Math.cos(2 * a) - 2 * Math.cos(3 * a) - Math.cos(4 * a)); hp.push([540 + x * 16 * s, 960 + y * 16 * s]); }
      ctx.save(); ctx.clip(pathOf(hp)); drawBuf(B, 1, 540, 960); ctx.restore(); pencil(hp, { w: 30 * (1 - e) + 6, col: '#f8ecd8', pass2: false }); pencil(hp.map(([x, y]) => [540 + (x - 540) * 1.06, 960 + (y - 960) * 1.06]), { w: 14 * (1 - e) + 4, col: '#8a5a2a', a: 0.8, pass2: false }); });
  } };
})();
