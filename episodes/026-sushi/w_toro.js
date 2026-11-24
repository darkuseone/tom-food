/* 026 — `toro`: «Жирного тунца тогда выкидывали: „кошка перешагнёт“. Я бы не перешагнул! / А в 2019-м одного тунца продали за три миллиона
   долларов!» Две эпохи в одном мире. А) Рыбный рынок Нихонбаси на рассвете: навесы, корзины, бадьи, лотки с рыбой, торговцы в хаппи, мост
   Нихонбаси вдали, Фудзи в розовой дымке; на земле — огромный тунец, торговец отрезает жирное брюшко-торо и швыряет в помойную бадью;
   рыжая бродячая кошка подходит, нюхает и демонстративно ПЕРЕШАГИВАЕТ торо («кошка перешагнёт»); Том (рыночный торговец) в ужасе
   подхватывает кусок — «Я бы не перешагнул!» — и уплетает. Б) «А в 2019-м» — по кадру проплывает тунец на крюке крана, и за ним уже
   холодный аукцион Тоёсу: лампы дневного света, ряды мороженых тунцов с красными иероглифами на боках, аукционист с колокольчиком на ящике,
   покупатели в кепках с бирками, табло «¥333 600 000»; Том с биркой покупателя в шоке. Плашка-число «$3 000 000». Главный свет: А — розовый
   рассвет слева, Б — белые лампы сверху. Переход В сцену: волна соевого соуса поднимается снизу и стекает, открывая рынок. */
(() => {
  EV.tr_fat = wtw('s6', 'тунца');
  EV.tr_throw = wtw('s6', 'выкидывали:');
  EV.tr_cat = wtw('s6', '«кошка');
  EV.tr_step = wtw('s6', 'перешагнёт».');
  EV.tr_me = wtw('s6', 'перешагнул!') - 0.4;
  EV.tr_2019 = LS('s7');
  EV.tr_sold = wtw('s7', 'продали');
  EV.tr_mil = wtw('s7', 'миллиона');
  SHAKES.push([EV.tr_mil, 0.2, 9]);
  KEYW.push('перешагнёт».', 'миллиона');
  const SW = () => EV.tr_2019 + 0.1;                                       // середина пролёта тунца на крюке — смена эпохи
  const swipeX = t => lerp(1700, -700, sm(clamp((t - SW() + 0.35) / 0.7)));

  function edoBack(t) {                                                   // рассвет, Фудзи, мост Нихонбаси, навесы рынка, торговцы
    vgrad(-500, 1100, ['#e8a8a8', '#f8d0b0', '#fbe8c8']); sil([[100, 560], [500, 200], [580, 190], [1000, 560]], '#8a8aa8', 0.6); poly([[440, 280], [500, 200], [580, 190], [640, 280], [580, 260], [540, 290], [490, 265]], { wash: '#f8f4f8', washA: 0.9, line: false });
    push(540, 640, 1); const br = spline([[-700, 60], [0, -80], [700, 60]], false, 24); pencil(br, { w: 22, col: '#5a3a24', pass2: false }); for (let i = 0; i < 14; i++) { const x = -650 + i * 100; pencil([[x, 50 - 140 * Math.exp(-(x * x) / 250000)], [x, 200]], { w: 7, col: '#3a2414', pass2: false }); } pop();
    for (let i = 0; i < 5; i++) { const x = -300 + i * 380; push(x, 900, 1); poly([[-200, -200], [200, -200], [230, -150], [-230, -150]], { wash: ['#6a4a2a', '#5a3a20'][i % 2], washA: 1, w: 2, col: '#2a1408' }); for (const xx of [-190, 190]) rect(xx - 8, -150, 16, 300, { wash: '#4a3018', washA: 1, w: 1.4 }); noren(-180, -150, 360, 80, ['#24336a', '#8a2a2a', '#2a5a3a'][i % 3], t, ['魚', '河岸', '鮪', '鯛', '貝'][i], { key: 27300 + i * 5, n: 3 }); for (let j = 0; j < 4; j++) { ell(-120 + j * 80, 120, 40, 14, { wash: '#a87a4a', washA: 1, w: 1.4 }); fish(-120 + j * 80, 110, 0.4, 0.2, { key: 27310 + i * 4 + j }); } pop(); }
    for (let i = 0; i < 4; i++) { const x = ((t * 26 + i * 400) % 1800) - 300; human(x, 1180, 0.7, t, { body: ['#24336a', '#6a4a2a', '#8a2a2a', '#3a5a3a'][i], legs: '#2a2a2a', face: 'calm', armL: 'hold', armR: 'swing', seed: 27320 + i, flip: i % 2 ? -1 : 1, prop: i === 1 ? 'stick' : undefined }); jpHat(x, 1180, 0.7, i % 2 ? 'hachi' : 'conical', null, i % 2 ? -1 : 1); }
  }
  function aucBack(t) {                                                   // аукцион Тоёсу: лампы, ряды тунцов, табло, покупатели, аукционист
    vgrad(-500, 1500, ['#3a4a5a', '#6a7a88', '#8a98a4']); for (let i = 0; i < 10; i++) rect(-500 + i * 240, -400, 238, 1500, { wash: i % 2 ? '#7a8894' : '#72808c', washA: 1, w: 1, col: '#4a5864' });
    for (let r = 0; r < 3; r++) for (let i = 0; i < 6; i++) { const x = -300 + i * 300 + r * 60, y = -200 + r * 160; rect(x - 110, y, 220, 18, { wash: '#f8fcff', washA: 1, w: 1.4, col: '#6a7a8a' }); glow(x, y + 9, 120, 'rgba(220,240,255,1)', 0.18); }
    push(760, 380, 0.6); rect(-260, -150, 520, 300, { wash: '#1a1e24', washA: 1, w: 4, col: '#0a0a0e', key: 27330 }); hudBox('табло аукциона', -260, -150, 260, 150); txt('せり · 鮪', 0, -90, 40, { font: 'Osw', col: '#f0f0f0' }); txt(t > EV.tr_sold ? '¥333 600 000' : '¥' + String(Math.floor(clamp((t - SW()) / 1.6) * 333600000)).replace(/\B(?=(\d{3})+(?!\d))/g, ' '), 0, 10, 56, { font: 'Osw', col: '#ff5a3a' }); txt('278 кг', 0, 100, 34, { font: 'Osw', col: '#f0d040' }); pop();
    for (let i = 0; i < 7; i++) { push(-250 + i * 230, 1240 - (i % 2) * 20, 0.62, 0.02); tunaFish(0, 0, 1, 0, { key: 27340 + i }); txt(String(100 + i * 7), -40, -10, 60, { font: 'Osw', col: '#d8201a' }); pop(); }
    for (let i = 0; i < 4; i++) { const x = 30 + i * 300; human(x, 1150, 0.85, t, { body: ['#2a2a3a', '#3a4a6a', '#5a5a5a', '#2a3a2a'][i], legs: '#1a1a1a', face: t > EV.tr_mil ? 'shock' : 'calm', armL: 'hold', armR: t > EV.tr_sold && i % 2 ? 'up' : 'hold', look: 0.3, seed: 27350 + i, hat: 'cap', hatCol: ['#e8e8e8', '#2a4a8a', '#c82a2a', '#3a3a3a'][i] }); rect(x - 16, 1150 - 210 * 0.85, 32, 20, { wash: '#f8f4e8', washA: 1, w: 1 }); }
    human(300, 1000, 0.95, t, { body: '#1a2a5a', legs: '#1a1a1a', face: 'grin', armL: 'hold', armR: Math.sin(t * 14) > 0 ? 'up' : 'wave', look: 0.4, seed: 27360, hat: 'cap', hatCol: '#e8e8e8' }); rect(220, 1000, 160, 120, { wash: '#6a7a8a', washA: 1, w: 2, col: '#2a3a4a' }); push(380, 690 + Math.sin(t * 20) * 6, 1); ell(0, 0, 18, 22, { wash: '#d8b040', washA: 1, w: 1.6 }); pencil([[0, -22], [0, -60]], { w: 4, col: '#3a2a1a', pass2: false }); pop();
  }
  function strayCat(x, y, s, t, lift) {                                    // рыжая бродячая кошка: идёт, нос кверху, высоко поднимает лапы
    push(x, y - lift * 60, s); const st = Math.sin(t * 10);
    for (const [lx, ph] of [[-50, 0], [-30, 3.1], [40, 1.5], [60, 4.6]]) pencil([[lx, -40], [lx + Math.sin(t * 10 + ph) * 12, 0 - Math.max(0, Math.sin(t * 10 + ph)) * (10 + lift * 40)]], { w: 9, col: '#c87a2a', pass2: false });
    const b = blob([[-70, -40], [-60, -80], [0, -90], [60, -80], [74, -44], [0, -30]], { wash: '#e89a40', washA: 1, w: 2.4, col: '#5a2a08', key: 27370 }); for (let i = 0; i < 4; i++) pencil([[-40 + i * 24, -86], [-46 + i * 24, -50]], { w: 4, col: '#b8601a', pass2: false });
    pencil(spline([[-70, -60], [-120, -90 + st * 10], [-110, -160]], false, 6), { w: 10, col: '#e89a40', pass2: false });
    push(86, -104, 1, -0.3); ell(0, 0, 34, 30, { wash: '#e89a40', washA: 1, w: 2.2, col: '#5a2a08' }); poly([[-26, -14], [-20, -46], [-4, -24]], { wash: '#e89a40', washA: 1, w: 1.8 }); poly([[8, -26], [22, -48], [28, -12]], { wash: '#e89a40', washA: 1, w: 1.8 }); pencil([[-14, -2], [-4, -4]], { w: 3, col: '#1a1a1a', pass2: false }); pencil([[8, -4], [18, -2]], { w: 3, col: '#1a1a1a', pass2: false }); ell(24, 8, 4, 3, { wash: '#c84a4a', washA: 1, line: false }); pop();
    pop();
  }
  function edoFront(t) {                                                  // земля рынка: тунец, бадья, торо, кошка
    const g = rect(-500, 1440, 2200, 600, { wash: '#8a7a5a', washA: 1, w: 2, col: '#3a2a1a', key: 27380 }); shadeG(g.path, 0, 1440, 0, 1900, '#5a4a2a', 0.4); for (let i = 0; i < 20; i++) { const r = rng(27381 + i); ell(-400 + r() * 1800, 1460 + r() * 300, 30, 6, { wash: '#a8b8c0', washA: 0.4, line: false }); }
    push(150, 1460, 1); blob([[-80, 0], [-90, -110], [90, -110], [80, 0]], { wash: '#8a6a3a', washA: 1, w: 2.4, col: '#3a2010' }); for (const y of [-90, -24]) pencil([[-88, y], [88, y]], { w: 6, col: '#4a4a4a', pass2: false }); ell(0, -110, 90, 18, { wash: '#4a3a2a', washA: 1, w: 2 }); txt('捨', 0, -46, 40, { font: 'Osw', col: '#2a1408' }); pop();
    tunaFish(520, 1420, 0.75, 0.04, { toro: 1, key: 27385 });
    const toroK = t > EV.tr_throw ? clamp((t - EV.tr_throw) / 0.5) : 0, eaten = t > EV.tr_me + 0.2;
    if (toroK > 0 && !eaten) { const x = lerp(520, 300, toroK), y = lerp(1430, 1470, toroK) - Math.sin(toroK * 3.14) * 160; push(x, y, 2.2, toroK * 3); INGR_C26.tuna(1, t); pop(); }
    if (t > EV.tr_cat - 0.6 && t < EV.tr_me + 0.8) { const q = clamp((t - EV.tr_cat + 0.6) / (EV.tr_me - EV.tr_cat + 1.2)), cx = lerp(-150, 560, q), lift = Math.exp(-((cx - 300) ** 2) / 4000); strayCat(cx, 1490, 0.85, t, lift);
      if (t > EV.tr_step && t < EV.tr_me) { push(300, 1260, popK(t, EV.tr_step, 0.35)); txt('ФИ!', 0, 0, 56, { font: 'Osw', col: '#c8501a', rot: -0.1 }); pop(); } }
  }
  function aucFront(t) {                                                  // пол аукциона: мокрый бетон, лёд, тунец-рекордсмен с биркой
    const g = rect(-500, 1440, 2200, 600, { wash: '#a8b0b8', washA: 1, w: 2, col: '#4a5460', key: 27390 }); shadeG(g.path, 0, 1440, 0, 1900, '#6a7884', 0.4); for (let i = 0; i < 12; i++) ell(-300 + i * 170, 1500 + (i % 3) * 60, 70, 8, { wash: '#e8f4fc', washA: 0.5, line: false });
    push(420, 1440, 0.95, 0.03); tunaFish(0, 0, 1, 0, { key: 27391 }); txt('1', -40, -10, 80, { font: 'Osw', col: '#d8201a' }); for (let i = 0; i < 10; i++) { const r = rng(27392 + i); ell(-300 + r() * 600, 60 + r() * 20, 14, 8, { wash: '#f0faff', washA: 0.9, w: 1, col: '#a8c0d0' }); } pop();
  }
  WORLD.toro = (t, u, cat) => {
    const B = t > SW(), x = swipeX(t);
    const draw = (b) => { if (!b) { lay(10, () => { edoBack(t); haze('#ffd8c0', 0.06); }); lay(1, () => { edoFront(t); shaft(-200, 0, 380, 1700, -0.5, 'rgba(255,210,180,1)', 0.15); lightPool(500, 1460, 620, 110, 'rgba(255,210,180,1)', 0.3); }); }
      else { lay(10, () => { aucBack(t); haze('#d8e8f8', 0.05); }); lay(1, () => { aucFront(t); lightPool(560, 1460, 700, 120, 'rgba(235,245,255,1)', 0.35); }); } };
    const clipX = (x0, x1, b) => { ctx.save(); const m = ctx.getTransform(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.rect(x0, -100, x1 - x0, 2200); ctx.clip(); ctx.setTransform(m); draw(b); ctx.restore(); };
    if (t > SW() - 0.35 && t < SW() + 0.4) { clipX(-100, x, false); clipX(x, 2400, true); }
    else draw(B);
    lay(1, () => { cat(); castShadow(640, 1450, 280, 90, 0.5, 0.25); });
    lay(0.65, () => { if (!B) { push(1150, 1950, 1.4); for (let i = 0; i < 3; i++) { ell(i * 90, -60, 80, 26, { wash: '#a87a4a', washA: 1, w: 2 }); for (let j = 0; j < 3; j++) fish(i * 90 - 30 + j * 30, -70, 0.35, 0.3, { key: 27395 + i * 3 + j }); } pop(); } else { push(1200, -100, 1.4); rect(-100, 0, 300, 30, { wash: '#f8fcff', washA: 1, w: 2 }); pop(); }
      motes(12, [-200, 300, 1300, 1500], B ? '#f0f8ff' : '#fff0e0', t, 27398, { sp: 3, sz: 3, a: 0.35, wob: 4 }); moodDark(600, 1000, 520, 1500, B ? '#0a1420' : '#1a0a14', 0.42); });
    if (t > SW() - 0.35 && t < SW() + 0.4) scr(() => { push(x, 900, 2.4, 0.08); pencil([[0, -900], [0, -60]], { w: 10, col: '#4a4a4a', pass2: false }); pencil(spline([[0, -60], [30, -10], [0, 20]], false, 4), { w: 10, col: '#8a8a8a', pass2: false }); tunaFish(0, 120, 0.9, 1.57, { key: 27399 }); pop(); });
  };
  DIR.toro = {
    outfit: 'mktA', light: { side: -1, rim: '#ffd8c0' }, grade: ['#ffb8a0', 0.05],
    act: () => [[S0.toro, 'talk'], [EV.tr_throw, 'shock'], [EV.tr_cat, 'suspicious'], [EV.tr_step, 'annoyed'], [EV.tr_me, 'grin'], [EV.tr_me + 0.4, 'laugh'], [EV.tr_2019, 'talk'], [EV.tr_sold, 'awe'], [EV.tr_mil, 'shock']],
    pose: (t, u, b) => { const eat = t > EV.tr_me && t < SW(), B = t > SW();
      return Object.assign(b, { x: 690, y: 1600, s: 1.15, flip: true, look: t > EV.tr_cat && t < EV.tr_me ? [-0.8, 0.6] : B ? [0, -0.6] : [-0.5, 0.3],
        hand: eat ? [60, -330] : B && t > EV.tr_mil ? [130, -470] : t > EV.tr_throw && t < EV.tr_me ? [200, -260] : [150, -220], handF: B && t > EV.tr_mil ? [-130, -470] : [-80, -220],
        prop: eat ? 'toroP' : undefined, squint: eat, tailUp: eat || t > EV.tr_mil, sweat: t > EV.tr_mil }); },
    hud: t => infoPlate(t, EV.tr_mil - 0.2, S1.toro - 0.15, { kind: 'num', title: 'ЧИСЛО НА ПАМЯТЬ', big: '$3 000 000', sub: 'один тунец, 278 кг · 2019', y: 700 }),
    cam: () => [[S0.toro, 540, 1020, 0.22], [EV.tr_cat, 460, 1140, 0.28], [EV.tr_me, 600, 1140, 0.3], [SW() + 0.4, 580, 1040, 0.24], [EV.tr_mil, 600, 1120, 0.3], [S1.toro, 610, 1130, 0.31]]
  };
  Object.assign(PROPS, { toroP() { push(0, -16, 1.6); INGR_C26.tuna(1, 0); pop(); } });   // кусок торо в лапе
  // ---------------------------------------------------------------- переход: волна соевого соуса поднимается снизу и стекает, открывая рынок
  TRANS_IN.toro = { a: 0.3, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const up = k < 0.45 ? sm(k / 0.45) : 1 - sm((k - 0.45) / 0.55), lvl = lerp(2050, -120, up); drawBuf(k < 0.45 ? A : B, 1, 540, 960);
    scr(() => { const pts = []; for (let i = 0; i <= 24; i++) pts.push([i * 46, lvl + Math.sin(i * 0.8 + t * 9) * 40]); pts.push([1104, 2100], [0, 2100]); poly(pts, { wash: SU.soy, washA: 1, w: 4, col: '#1a0a04', key: 27397 }); pencil(pts.slice(0, 25).map(([x, y]) => [x, y + 24]), { w: 8, col: '#c88a4a', a: 0.5, pass2: false }); });
  } };
})();
