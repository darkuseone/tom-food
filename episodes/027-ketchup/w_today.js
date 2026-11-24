/* 027 — `today` + `button`: «Отправь тому, кто льёт кетчуп на всё. С картошкой или с макаронами? / Пиши блюдо — выдавим следующее!»
   Сегодня: уютная домашняя кухня вечером — подвесная лампа над столом (главный свет), окно с вечерним городом, холодильник с магнитами
   и открытый его свет (второй), полки с банками, кастрюля с паром, на столе — тарелки фри и макарон, бутылки соусов. Друг в полосатой
   футболке выдавливает кетчуп на арбуз, торт и даже в чай (гэг «на всё»), девочка закрывает глаза рукой. Том — в горчичном домашнем
   свитере с фартуком. По словам: «Отправь» — у друга пиликает телефон; «льёт кетчуп на всё.» — кетчуп на арбуз, торт, чай; «картошкой» —
   Том поднимает фри; «макаронами?» — во второй лапе макароны; финал — Том подмигивает, «ПОДПИШИСЬ» поверх. Переход В сцену: струя кетчупа
   выписывает зигзаг через кадр, по нему открывается кухня. */
(() => {
  EV.td_send = wtw('t1', 'Отправь');
  EV.td_all = wtw('t1', 'льёт');
  EV.td_fry = wtw('t1', 'картошкой');
  EV.td_pasta = wtw('t1', 'макаронами?');
  EV.td_x = LS('x1');
  SHAKES.push([EV.td_all + 0.4, 0.12, 5]);
  KEYW.push('картошкой', 'макаронами?');

  function room(t) {                                                      // стены: плитка, окно с городом, полки, холодильник с магнитами, часы
    vgrad(-500, 1500, ['#e8d8b8', '#f4e4c4', '#e0cca8']); for (let r = 0; r < 6; r++) for (let i = 0; i < 18; i++) rect(-500 + i * 130, 880 + r * 100, 128, 98, { wash: (i + r) % 2 ? '#d8e8e0' : '#e8f0ec', washA: 1, w: 1, col: '#a8b8b0' });
    push(300, 430, 1); const w = rect(-240, -260, 480, 420, { wash: '#2a3a6a', washA: 1, w: 8, col: '#f4f0e8', key: 28000 }); ctx.save(); ctx.clip(w.path); vgrad(-260, 160, ['#1a2050', '#5a3a6a', '#e88a6a']); for (let i = 0; i < 6; i++) { rect(-240 + i * 90, -60 - (i % 3) * 60, 80, 400, { wash: '#2a2a4a', washA: 1, w: 1 }); windows(-234 + i * 90, -50 - (i % 3) * 60, 68, 200, 2, 5, 28001 + i, 0.6, '#ffd890', '#90e0ff', 0.8); } ctx.restore(); pencil([[0, -260], [0, 160]], { w: 6, col: '#f4f0e8', pass2: false }); for (const sd of [-1, 1]) blob([[sd * 240, -280], [sd * 300, -100], [sd * 280, 180], [sd * 230, 180]], { wash: '#c8402a', washA: 1, w: 2 }); pop();
    push(1080, 700, 1); const f = rect(-160, -520, 320, 820, { wash: '#f4f4f0', washA: 1, w: 3, col: '#8a8a8a', key: 28010 }); pencil([[-160, -180], [160, -180]], { w: 3, col: '#8a8a8a', pass2: false }); rect(120, -400, 16, 120, { wash: '#a8a8a8', washA: 1, w: 1 }); for (let i = 0; i < 6; i++) { const r = rng(28011 + i); ell(-110 + r() * 180, -460 + r() * 250, 18, 18, { wash: ['#e8402a', '#3a8ac8', '#f0c030', '#3aa86a'][i % 4], washA: 1, w: 1.4 }); } rect(-100, -360, 90, 110, { wash: '#fbfbf8', washA: 1, w: 1 }); pop();
    push(720, 300, 1); rect(-200, 0, 400, 14, { wash: '#a87a4a', washA: 1, w: 1.6 }); for (let i = 0; i < 5; i++) { const x = -160 + i * 80; blob([[x - 26, 0], [x - 30, -80], [x - 16, -100], [x + 16, -100], [x + 30, -80], [x + 26, 0]], { wash: ['#c8201a', '#f0c030', '#3a7a3a', '#8a5a2a', '#e8e0c0'][i], washA: 0.9, w: 1.6, col: '#3a2a1a', key: 28020 + i }); } pop();
    push(720, 120, 1); ell(0, 0, 60, 60, { wash: '#f8f4ec', washA: 1, w: 4, col: '#3a3a3a' }); pencil([[0, 0], [Math.cos(t) * 40, Math.sin(t) * 40]], { w: 3, col: '#1a1a1a', pass2: false }); pencil([[0, 0], [0, -30]], { w: 4, col: '#1a1a1a', pass2: false }); pop();
    push(560, -40, 1); pencil([[0, -300], [0, 60]], { w: 4, col: '#2a2a2a', pass2: false }); blob([[-120, 60], [-80, 0], [80, 0], [120, 60]], { wash: '#c8502a', washA: 1, w: 2.4 }); glow(0, 80, 260, 'rgba(255,220,160,1)', 0.3); pop();
  }
  function folk(t) {                                                      // друг льёт кетчуп на арбуз/торт/чай, девочка в шоке
    const all = t > EV.td_all;
    human(260, 1300, 1.05, t, { body: '#3a6aa8', legs: '#2a2a3a', hair: '#3a2010', face: all ? 'grin' : 'smile', armL: 'hold', armR: all ? 'up' : 'hold', look: 0.3, seed: 28030, prop: t > EV.td_send && t < EV.td_all ? 'phone' : undefined });
    for (let i = 0; i < 5; i++) pencil([[180 + i * 30, 1060], [180 + i * 30, 1200]], { w: 10, col: i % 2 ? '#f4f0e8' : '#3a6aa8', a: 0.6, pass2: false });
    if (all) { const k = clamp((t - EV.td_all) / 1.2); ketchupBottle(340, 1000, 0.45, t, { rot: 2.6, key: 28031 }); for (let i = 0; i < 3; i++) if (k > i * 0.3) { const x = [360, 420, 480][i]; pencil(spline([[x - 40, 1170], [x, 1160], [x + 40, 1175]], false, 5), { w: 9, col: KC.red, pass2: false }); } }
    human(1000, 1300, 0.85, t, { body: '#f07aa0', legs: '#2a2a3a', hair: '#c88a3a', face: all ? 'shock' : 'smile', armL: all ? 'up' : 'hold', armR: 'hold', look: -0.5, seed: 28032, flip: -1 });
  }
  function table(t) {                                                     // стол: скатерть в клетку, арбуз, торт, чай, фри, макароны, соусы
    const tb = rect(-500, 1440, 2200, 600, { wash: '#f4ecd8', washA: 1, w: 3, col: '#8a7a5a', key: 28040 }); ctx.save(); ctx.clip(tb.path); for (let i = 0; i < 30; i++) { rect(-500 + i * 80, 1440, 40, 600, { wash: '#d8402a', washA: 0.25, line: false }); rect(-500, 1440 + i * 80, 2200, 40, { wash: '#d8402a', washA: 0.25, line: false }); } ctx.restore(); shadeG(tb.path, 0, 1440, 0, 1900, '#a89070', 0.35);
    push(360, 1450, 1); poly([[-70, 0], [70, 0], [0, -90]], { wash: '#e8403a', washA: 1, w: 2, col: '#3a6a2a' }); pencil([[-70, 0], [70, 0]], { w: 10, col: '#3a8a3a', pass2: false }); for (let i = 0; i < 4; i++) ell(-20 + i * 14, -30 - (i % 2) * 14, 4, 6, { wash: '#1a1a1a', washA: 1, line: false }); pop();
    push(460, 1450, 1); rect(-40, -60, 80, 60, { wash: '#f8e8d8', washA: 1, w: 2 }); rect(-40, -66, 80, 10, { wash: '#f0a0c0', washA: 1, line: false }); ell(0, -72, 8, 10, { wash: '#c8201a', washA: 1, line: false }); pop();
    push(540, 1450, 1); blob([[-26, 0], [-30, -50], [30, -50], [26, 0]], { wash: '#f8f4ec', washA: 1, w: 2 }); ell(0, -50, 28, 8, { wash: '#a86a2a', washA: 1, w: 1 }); pop();
    for (let i = 0; i < 3; i++) ketchupBottle(1000 + i * 60, 1450, 0.32, t, { key: 28045 + i, label: ['KETCHUP', 'MUSTARD', 'MAYO'][i], sub: '', fill: 0.8 });
    castShadow(640, 1450, 320, 90, 0.5, 0.25);
  }
  WORLD.today = (t, u, cat) => {
    lay(9, () => { room(t); haze('#fff0d8', 0.04); });
    lay(2.6, () => { folk(t); });
    lay(1, () => { lightPool(580, 1460, 680, 120, 'rgba(255,225,170,1)', 0.36); cat(); table(t); });
    lay(0.65, () => { push(-140, 1960, 1.4); for (let i = 0; i < 3; i++) ketchupBottle(i * 90, 0, 0.7, t, { key: 28050 + i, label: ['KETCHUP', 'BBQ', 'CHILI'][i], sub: '' }); pop(); push(1240, 1900, 1.4); const p = blob([[-120, -60], [-130, -200], [130, -200], [120, -60]], { wash: '#8a8a94', washA: 1, w: 3 }); for (let i = 0; i < 3; i++) { const ph = (t * 0.5 + i / 3) % 1; ell(Math.sin(t + i) * 30, -220 - ph * 200, 50 + ph * 40, 30, { wash: '#ffffff', washA: 0.25 * (1 - ph), line: false }); } pop();
      motes(10, [-200, 300, 1300, 1500], '#fff8e8', t, 28090, { sp: 3, sz: 3, a: 0.3, wob: 3 }); moodDark(600, 1000, 560, 1500, '#140a10', 0.35); });
  };
  WORLD.button = (t, u, cat) => WORLD.today(t, u, cat);
  const pose = (t, b) => { const one = t > EV.td_fry - 0.1, two = t > EV.td_pasta - 0.1;
    return Object.assign(b, { x: 700, y: 1600, s: 1.16, flip: true, look: t > EV.td_all && t < EV.td_fry ? [-0.9, 0.2] : [0, 0], hand: one ? [170, -380] : [150, -230], handF: two ? [-170, -380] : [-90, -230], point: t > EV.td_send && t < EV.td_all ? 1 : undefined, prop: one ? 'fryP' : 'bottleP', tailUp: t > EV.td_x }); };
  DIR.today = {
    outfit: 'homeB', light: { side: -1, rim: '#ffe0b0' }, grade: ['#ffc090', 0.05],
    act: () => [[S0.today, 'grin'], [EV.td_send, 'wink'], [EV.td_all, 'sideeye'], [EV.td_all + 0.6, 'shock'], [EV.td_fry, 'grin'], [EV.td_pasta, 'suspicious']],
    pose: (t, u, b) => pose(t, b),
    afterCat: (t, u, P) => { if (t > EV.td_pasta - 0.1) { push(P.x + 170 * P.s, P.y - 380 * P.s, 1); PROPS.pastaP(); pop(); } },
    cam: () => [[S0.today, 580, 1080, 0.26], [EV.td_all, 520, 1100, 0.27], [EV.td_fry, 600, 1140, 0.3], [S1.today, 610, 1150, 0.32]]
  };
  DIR.button = {
    outfit: 'homeB', light: { side: -1, rim: '#ffe0b0' }, grade: ['#ffc090', 0.05],
    act: () => [[S0.button, 'grin'], [EV.td_x + 0.4, 'wink'], [EV.td_x + 1.3, 'laugh']],
    pose: (t, u, b) => pose(t, b),
    afterCat: (t, u, P) => DIR.today.afterCat(t, u, P),
    cam: () => [[S0.button, 610, 1150, 0.32], [S1.button, 600, 1120, 0.3]]
  };
  // ---------------------------------------------------------------- переход: струя кетчупа выписывает зигзаг, по нему открывается кухня
  TRANS_IN.today = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), Y = lerp(-300, 2300, e); drawBuf(A, 1, 540, 960);
    scr(() => { const z = []; for (let i = 0; i <= 12; i++) z.push([i * 90, Y + (i % 2 ? 140 : -140)]); ctx.save(); ctx.beginPath(); ctx.moveTo(-10, -10); z.forEach(([x, y]) => ctx.lineTo(x, y)); ctx.lineTo(1090, -10); ctx.closePath(); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore();
      pencil(z, { w: 54, col: KC.red, pass2: false }); pencil(z.map(([x, y]) => [x, y - 14]), { w: 10, col: KC.redL, a: 0.7, pass2: false }); ketchupBottle(z[12][0] - 40, Y - 200, 1.6, t, { rot: 2.4, key: 28099 }); });
  } };
})();
