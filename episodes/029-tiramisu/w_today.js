/* 029 — `today` + `button`: «Отправь тому, кто ест тирамису прямо из формы. С кофе или с ликёром? / Пиши блюдо — поднимем следующее!»
   Сегодня: ночная кухня-гостиная после кино — на телевизоре титры, гирлянда-лампочки, холодильник с магнитами, открытая дверца даёт
   холодный свет (второй), тёплая лампа над столом (главный). Друг в пижаме сидит прямо над формой тирамису и ест огромной ложкой из
   формы (гэг), сестра закрывает лицо ладонью. Том — в зелёном худи «ТОМ». По словам: «Отправь» — у друга пиликает телефон, он прячет
   ложку; «ест» — друг всё равно зачерпывает из формы, «ам!»; «формы.» — Том закатывает глаза; «кофе» — в лапе чашка кофе; «ликёром?» —
   во второй лапе бутылочка ликёра; финал — Том подмигивает, «ПОДПИШИСЬ» поверх. Переход В сцену: какао из ситечка засыпает кадр
   полосами и стряхивается. */
(() => {
  EV.td_send = wtw('t1', 'Отправь');
  EV.td_eat = wtw('t1', 'ест');
  EV.td_form = wtw('t1', 'формы.');
  EV.td_cof = wtw('t1', 'кофе');
  EV.td_liq = wtw('t1', 'ликёром?');
  EV.td_x = LS('x1');
  KEYW.push('формы.', 'ликёром?');

  function room(t) {                                                      // стены, окно с ночным городом, ТВ с титрами, гирлянда, холодильник
    vgrad(-500, 1500, ['#2a2a40', '#3a3450', '#4a3e58']); for (let r = 0; r < 8; r++) for (let i = 0; i < 14; i++) rect(-500 + i * 160, 900 + r * 70, 156, 66, { wash: (i + r) % 2 ? '#e8e4dc' : '#dcd8d0', washA: 1, w: 1, col: '#a8a49c' });
    push(240, 420, 1); const w = rect(-200, -240, 400, 400, { wash: '#0e1430', washA: 1, w: 8, col: '#5a4a3a', key: 30100 }); ctx.save(); ctx.clip(w.path); vgrad(-240, 160, ['#0a0e2a', '#2a2050']); for (let i = 0; i < 5; i++) { rect(-200 + i * 90, -60 - (i % 3) * 50, 80, 300, { wash: '#1a1a30', washA: 1, w: 1 }); windows(-194 + i * 90, -50 - (i % 3) * 50, 68, 200, 2, 5, 30101 + i, 0.5, '#ffd890', '#90e0ff', 0.8); } ell(150, -180, 26, 26, { wash: '#f8f0d0', washA: 1, line: false }); ctx.restore(); pop();
    push(700, 480, 1); rect(-200, -150, 400, 270, { wash: '#2a2a2e', washA: 1, w: 4, col: '#0a0a0a', key: 30102 }); rect(-180, -130, 360, 230, { wash: '#05050f', washA: 1, w: 1 }); for (let i = 0; i < 6; i++) { const y = 80 - ((t * 40 + i * 40) % 240); rect(-80, y - 130, 160, 8, { wash: '#c8c8d8', washA: 0.8, line: false }); } glow(0, -20, 240, 'rgba(140,180,255,1)', 0.25); hudBox('ТВ титры', -200, -150, 200, 120); pop();
    for (let i = 0; i < 16; i++) { const x = -300 + i * 110, y = 200 + Math.sin(i * 0.8) * 40; ell(x, y, 10, 14, { wash: ['#ff5a5a', '#ffd040', '#5aff8a', '#5ac8ff'][i % 4], washA: 0.8 + 0.2 * Math.sin(t * 5 + i), line: false }); glow(x, y, 30, 'rgba(255,230,150,1)', 0.15); }
    pencil(Array.from({ length: 17 }, (_, i) => [-300 + i * 110, 192 + Math.sin(i * 0.8) * 40]), { w: 2, col: '#2a2a2a', pass2: false });
    push(1100, 900, 1); rect(-150, -500, 300, 760, { wash: '#f4f4f0', washA: 1, w: 3, col: '#8a8a8a', key: 30103 }); pencil([[-150, -180], [150, -180]], { w: 3, col: '#8a8a8a', pass2: false }); for (let i = 0; i < 6; i++) { const r = rng(30104 + i); ell(-110 + r() * 180, -450 + r() * 250, 16, 16, { wash: ['#e8402a', '#3a8ac8', '#f0c030', '#3aa86a'][i % 4], washA: 1, w: 1.4 }); } glow(-150, 100, 260, 'rgba(200,230,255,1)', 0.2); pop();
  }
  function folk(t) {                                                      // друг ест из формы огромной ложкой, сестра — фейспалм
    const eat = t > EV.td_eat;
    human(260, 1300, 1.05, t, { body: '#3a6aa8', legs: '#3a6aa8', hair: '#3a2010', face: eat ? 'grin' : 'smile', armL: 'hold', armR: eat ? (Math.sin(t * 6) > 0 ? 'up' : 'hold') : 'hold', look: 0.4, seed: 30110, prop: t > EV.td_send && t < EV.td_eat ? 'phone' : undefined });
    if (eat) { push(330, 1000 + Math.sin(t * 6) * 40, 1, -0.4); pencil([[0, 0], [0, -200]], { w: 10, col: '#c8ccd4', pass2: false }); ell(0, 20, 34, 46, { wash: TI.cream, washA: 1, w: 2, col: '#a8acb4' }); ell(0, 6, 26, 12, { wash: TI.cocoa, washA: 1, line: false }); pop(); push(300, 820, popK(t, EV.td_eat + 0.1, 0.3)); txt('ам!', 0, 0, 54, { font: 'Hand', col: '#ffe070' }); pop(); }
    human(960, 1310, 0.9, t, { body: '#e87aa0', legs: '#e87aa0', hair: '#c88a3a', face: t > EV.td_form ? 'shock' : 'smile', armL: t > EV.td_form ? 'up' : 'hold', armR: 'hold', look: -0.5, seed: 30111, flip: -1 });
  }
  function table(t) {                                                     // стол: большая форма тирамису (герой, с выемкой), чашки, свеча
    const tb = rect(-500, 1440, 2200, 600, { wash: '#6a4a3a', washA: 1, w: 3, col: '#2a1408', key: 30120 }); shadeG(tb.path, 0, 1440, 0, 1900, '#3a2010', 0.5); for (let i = 0; i < 6; i++) pencil([[-500, 1470 + i * 70], [1700, 1476 + i * 70]], { w: 2, col: '#4a2a18', a: 0.5, pass2: false });
    tiramisuDish(360, 1460, 0.75, t, { key: 30121, scoop: t > EV.td_eat });
    push(1000, 1450, 1); rect(-12, -100, 24, 100, { wash: '#f8f0d8', washA: 1, w: 1.4 }); ell(0, -112, 8, 14, { wash: '#ffc060', washA: 1, line: false }); glow(0, -112, 70, 'rgba(255,190,100,1)', 0.25); pop();
    castShadow(640, 1450, 320, 90, 0.5, 0.25);
  }
  function extra(t) {                                                     // мелочи: коробка от пиццы, пульт, плед, кошачья миска, кассета, растение
    push(1020, 1300, 0.8); rect(-90, -16, 180, 16, { wash: '#c8a070', washA: 1, w: 2 }); txt('PIZZA', 0, -2, 18, { font: 'Osw', col: '#a8241e' }); pop();
    push(560, 1300, 0.7); rect(-30, -70, 60, 70, { wash: '#2a2a2e', washA: 1, w: 2 }); for (let i = 0; i < 6; i++) ell(-14 + (i % 2) * 28, -56 + Math.floor(i / 2) * 18, 6, 6, { wash: ['#c8302a', '#3a8ac8', '#3aa86a'][i % 3], washA: 1, line: false }); pop();
    push(-60, 760, 1); blob([[-40, 0], [-34, -60], [34, -60], [40, 0]], { wash: '#c86a3a', washA: 1, w: 2 }); for (let i = 0; i < 6; i++) pencil(spline([[0, -60], [-50 + i * 20, -140], [-70 + i * 26, -200]], false, 4), { w: 4, col: '#3a8a3a', pass2: false }); pop();
    hatch(pathOf([[-500, 900], [1700, 900], [1700, 1440], [-500, 1440]]), bbOf([[-500, 900], [1700, 1440]]), { gap: 24, a: 0.05, col: '#8a8a94', ang: 0.6, key: 30160 });
  }
  WORLD.today = (t, u, cat) => {
    lay(9, () => { room(t); extra(t); haze('#4a3a6a', 0.04); });
    lay(2.6, () => { folk(t); });
    lay(1, () => { lightPool(560, 1460, 680, 120, 'rgba(255,220,170,1)', 0.36); cat(); table(t); });
    lay(0.65, () => { push(-150, 1950, 1.4); tiraCup(0, -10, 1.2, t, { key: 30130 }); pop(); push(1240, 1950, 1.4); mokaPot(0, -10, 1.3, t); pop();
      motes(10, [-200, 300, 1300, 1500], '#ffe8c8', t, 30190, { sp: 3, sz: 3, a: 0.3, wob: 3 }); moodDark(600, 1000, 560, 1500, '#0a0614', 0.4); });
  };
  WORLD.button = (t, u, cat) => WORLD.today(t, u, cat);
  const pose = (t, b) => { const one = t > EV.td_cof - 0.1, two = t > EV.td_liq - 0.1;
    return Object.assign(b, { x: 720, y: 1600, s: 1.16, flip: true, look: t > EV.td_eat && t < EV.td_cof ? [-0.9, 0.3] : [0, 0], hand: one ? [170, -380] : [150, -230], handF: two ? [-170, -380] : [-90, -230], point: t > EV.td_send && t < EV.td_eat ? 1 : undefined, prop: one ? 'coffeeP' : 'spoonTiraP', squint: t > EV.td_form && t < EV.td_cof, tailUp: t > EV.td_x }); };
  DIR.today = {
    outfit: 'hoodiePZ', light: { side: -1, rim: '#ffe0b0' }, grade: ['#c8a0d0', 0.05],
    act: () => [[S0.today, 'grin'], [EV.td_send, 'wink'], [EV.td_eat, 'sideeye'], [EV.td_form, 'annoyed'], [EV.td_cof, 'grin'], [EV.td_liq, 'suspicious']],
    pose: (t, u, b) => pose(t, b),
    afterCat: (t, u, P) => { if (t > EV.td_liq - 0.1) { push(P.x + 170 * P.s, P.y - 380 * P.s, 1); alchermes(0, 30, 0.45); pop(); } },
    cam: () => [[S0.today, 580, 1080, 0.26], [EV.td_eat, 520, 1100, 0.27], [EV.td_cof, 600, 1140, 0.3], [S1.today, 610, 1150, 0.32]]
  };
  DIR.button = {
    outfit: 'hoodiePZ', light: { side: -1, rim: '#ffe0b0' }, grade: ['#c8a0d0', 0.05],
    act: () => [[S0.button, 'grin'], [EV.td_x + 0.4, 'wink'], [EV.td_x + 1.3, 'laugh']],
    pose: (t, u, b) => pose(t, b),
    afterCat: (t, u, P) => DIR.today.afterCat(t, u, P),
    cam: () => [[S0.button, 610, 1150, 0.32], [S1.button, 600, 1120, 0.3]]
  };
  // ---------------------------------------------------------------- переход: какао из ситечка засыпает кадр полосами и стряхивается
  TRANS_IN.today = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), Y = lerp(-100, 2100, e); drawBuf(A, 1, 540, 960);
    scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(-10, -10, 1100, Y); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore(); const r = rng(hsh(FRAME, 30198)); for (let i = 0; i < 120; i++) ell(r() * 1080, Y - r() * 220, 5, 5, { wash: TI.cocoaL, washA: 0.9, line: false });
      push(540, Y - 260, 1.4); ell(0, 0, 120, 40, { wash: '#a8acb4', washA: 0.5, w: 4, col: '#6a6e76' }); pencil([[120, 0], [360, -40]], { w: 10, col: '#6a6e76', pass2: false }); pop(); });
  } };
})();
