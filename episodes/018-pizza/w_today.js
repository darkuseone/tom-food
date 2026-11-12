/* 018 — `today`: «Сегодня настоящую Маргариту пекут девяносто секунд. А ты веришь письму или историкам?» Неаполитанская пиццерия сегодня, вечер:
   огромная дровяная печь-купол в сине-белой мозаике с надписью NAPOLI (главный свет — огонь в устье), пиццайоло подбрасывает тесто, второй раскатывает
   руками; мраморная стойка: шарики теста в ящиках, банки томатов, миска моцареллы, горшок базилика, оливковое масло; на стене — диплом
   «UNESCO 2017 · L'ARTE DEL PIZZAIUOLO NAPOLETANO», меню-доска, фото, гирлянда; очередь гостей у двери. Том-шеф лопатой вынимает дымящуюся маргариту
   (хиро-шот: пар, блики масла, сыр пузырится). По словам: «пекут» — пицца скользит в печь, огонь вспыхивает; «девяносто секунд» — таймер 90 → 0
   и термометр 485°; Том достаёт готовую пиццу; «А ты веришь» — Том поворачивается к камере; «письму или историкам?» — две карточки-выбора:
   «ПИСЬМУ ♛» слева и «ИСТОРИКАМ ✎» справа. Переход В сцену: языки пламени из устья печи вырываются и заливают кадр. */
(() => {
  EV.td_bake = wtw('t1', 'пекут');
  EV.td_90 = wtw('t1', 'девяносто');
  EV.td_out = wtw('t1', 'секунд.');
  EV.td_ask = wtw('t1', 'веришь');
  EV.td_ab = wtw('t1', 'письму');
  SHAKES.push([EV.td_bake + 0.1, 0.12, 5]);
  KEYW.push('девяносто', 'историкам?');

  function room(t) {                                                    // стена: кирпич, полки, диплом ЮНЕСКО, доска-меню, гирлянда, окно-дверь с очередью
    vgrad(-800, 1500, ['#2a1a14', '#4a2e20', '#6a4430']); for (let y = -800; y < 1500; y += 50) for (let x = -800 + ((y / 50) % 2) * 50; x < 1900; x += 100) rect(x, y, 98, 48, { wash: (x * 3 + y) % 4 ? '#8a4a30' : '#7a3e26', washA: 0.9, w: 0.8, col: '#3a1a10' });
    for (let x = -800; x < 1900; x += 64) for (let y = 700; y < 1450; y += 64) rect(x, y, 62, 62, { wash: ((x + y) / 64) % 2 ? '#e8eef4' : '#2a5aa8', washA: 0.95, w: 0.8, col: '#1a2a4a' });
    push(860, -180, 1); rect(-170, -130, 340, 260, { wash: '#c89a3a', washA: 1, w: 4, col: '#4a2a08' }); rect(-150, -110, 300, 220, { wash: '#f4ecd6', washA: 1, w: 1.4 }); ell(0, -50, 34, 34, { wash: '#2a5aa8', washA: 1, w: 1.4 }); txt('UNESCO', 0, -38, 18, { font: 'Osw', col: '#f8f4ea' }); txt("L'ARTE DEL PIZZAIUOLO", 0, 20, 20, { font: 'Osw', col: '#2a2a2a' }); txt('NAPOLETANO · 2017', 0, 50, 20, { font: 'Osw', col: '#8a1a0e' }); for (let i = 0; i < 2; i++) pencil([[-110, 74 + i * 14], [110, 74 + i * 14]], { w: 1.4, col: '#8a8a8a', pass2: false }); pop();
    push(-500, -200, 1); rect(-200, -220, 400, 440, { wash: '#1a1a1a', washA: 1, w: 6, col: '#6a4424' }); txt('MENU', 0, -160, 44, { font: 'Osw', col: '#f8f4ea' }); ['MARINARA  5', 'MARGHERITA  6', 'DIAVOLA  8', 'CAPRICCIOSA  9', 'CALZONE  8'].forEach((s, i) => txt(s, 0, -90 + i * 56, i === 1 ? 34 : 28, { font: 'Hand', col: i === 1 ? '#ffe070' : '#e8e8e8' })); pop();
    for (const [sx, sy] of [[300, -500], [1300, -400]]) { rect(sx - 200, sy, 400, 16, { wash: '#6a4424', washA: 1, w: 1.6 }); for (let i = 0; i < 6; i++) { const x = sx - 170 + i * 66; rect(x - 20, sy - 70, 40, 70, { wash: i % 2 ? '#c8221a' : '#2a7a3a', washA: 1, w: 1.4, col: '#1a0a04' }); rect(x - 20, sy - 54, 40, 26, { wash: '#f4ecd0', washA: 1, w: 1 }); txt('S.M.', x, sy - 36, 12, { font: 'Osw', col: '#8a1a0e' }); } }
    for (let i = 0; i < 18; i++) { const x = -800 + i * 150, y = -660 + Math.sin(i * 0.8) * 30; pencil([[x, y], [x + 150, -660 + Math.sin((i + 1) * 0.8) * 30]], { w: 2, col: '#1a1008', pass2: false }); ell(x + 75, y + 26, 9, 12, { wash: '#ffd890', washA: 1, w: 1, col: '#5a3a10' }); }
    push(1350, 300, 1); const d = rect(-160, -400, 320, 800, { wash: '#3a5a7a', washA: 1, w: 6, col: '#2a1a10', key: 19000 }); ctx.save(); ctx.clip(d.path); vgrad(-400, 400, ['#2a3a6a', '#e8906a']); for (let i = 0; i < 4; i++) human(-110 + i * 70, 400, 0.8, t, { body: ['#c8343a', '#3a5aa8', '#e8b040', '#5a8a4a'][i], legs: '#2a2a2a', hair: '#2a1a0a', face: 'smile', armL: 'hold', armR: i % 2 ? 'wave' : 'hold', seed: 19001 + i, flip: -1 }); ctx.restore(); txt('APERTO', 0, -330, 30, { font: 'Osw', col: '#ffe070' }); pop();
  }
  function crew(t) {                                                    // печь, пиццайоло с подбрасываемым тестом, второй раскатывает
    const fire = t > EV.td_bake ? 1 + 0.4 * Math.exp(-(t - EV.td_bake) * 2) : 1; woodOven(-80, 1260, 1.25, t, { tile: '#2a5aa8', tile2: '#e8eef4', txt: 'NAPOLI', fire, arch: '#f4ecd6', key: 19010 }); glow(-80, 1130, 340, 'rgba(255,140,50,1)', 0.35 * fire);
    for (let i = 0; i < 8; i++) rect(-560 + (i % 4) * 34, 1240 - Math.floor(i / 4) * 30, 140, 28, { wash: '#6a4424', washA: 1, w: 1.4, col: '#2a1408' });
    const tz = Math.abs(Math.sin(t * 2.6)); human(250, 1300, 1.05, t, { body: '#f4f1ea', legs: '#2a2a34', hair: '#2a1a0a', face: 'grin', armL: 'up', armR: 'up', look: -0.2, seed: 19020, belt: '#c8221a' }); hat20(250, 1300, 1.05, 'chef');
    push(250, 1300 - 420 - tz * 160, 1, t * 6); ell(0, 0, 90, 26 + Math.sin(t * 6) * 6, { wash: PZ.dough, washA: 1, w: 2, col: '#8a6a3a' }); pop(); motes(10, [130, 700, 370, 1000], '#ffffff', t, 19021, { sp: 20, sz: 4, a: 0.5, wob: 8 });
    human(880, 1300, 1.0, t, { body: '#2a2a2a', legs: '#2a2a34', hair: '#6a3a1a', face: 'smile', armL: 'hold', armR: 'hold', look: -0.5, seed: 19022, flip: -1, belt: '#f4f0e6' }); push(820, 1150, 1); ell(0, 0, 70, 18, { wash: PZ.dough, washA: 1, w: 1.6, col: '#8a6a3a' }); pop();
  }
  function counter(t) {                                                 // мрамор, шарики теста, моцарелла, базилик, банки, таймер, термометр
    const c = rect(-500, 1440, 2100, 700, { wash: '#ece8e0', washA: 1, w: 3, col: '#3a3a3a', key: 19030 }); shadeG(c.path, 0, 1440, 0, 1800, '#8a8a8a', 0.4); for (let i = 0; i < 8; i++) pencil(spline([[-400 + i * 260, 1450], [-360 + i * 260, 1580], [-420 + i * 260, 1760]], false, 5), { w: 1.6, col: '#b8b4aa', a: 0.6, pass2: false }); rect(-500, 1430, 2100, 22, { wash: '#2a5aa8', washA: 1, w: 2, col: '#0a1a4a' });
    push(140, 1470, 1); rect(-150, -50, 300, 60, { wash: '#c89a5a', washA: 1, w: 2, col: '#5a3a1a' }); for (let i = 0; i < 5; i++) { ell(-120 + i * 60, -54, 28, 18, { wash: PZ.dough, washA: 1, w: 1.4, col: '#8a6a3a' }); ell(-128 + i * 60, -62, 10, 4, { wash: '#ffffff', washA: 0.6, line: false }); } pop();
    push(1100, 1470, 1); ell(0, -20, 90, 26, { wash: '#f4f4f4', washA: 1, w: 2, col: '#5a5a5a' }); for (let i = 0; i < 4; i++) ell(-40 + i * 26, -34, 20, 16, { wash: PZ.mozz, washA: 1, w: 1.2, col: PZ.mozzD }); pop();
    push(1260, 1470, 1); rect(-50, -80, 100, 80, { wash: '#b8542a', washA: 1, w: 2, col: '#4a1a08' }); for (let i = 0; i < 9; i++) basilLeaf(-40 + i * 10, -80, 0.6, -0.8 + i * 0.2, 19031 + i); pop();
    push(-260, 1470, 1); rect(-34, -90, 68, 90, { wash: '#c8221a', washA: 1, w: 1.6, col: '#4a0a04' }); rect(-34, -70, 68, 40, { wash: '#f4e8c8', washA: 1, w: 1 }); txt('SAN MARZANO', 0, -46, 10, { font: 'Osw', col: '#8a1a0e' }); pop();
    if (t > EV.td_90 - 0.2 && t < EV.td_ab - 0.1 && !(typeof COVER_ON !== 'undefined' && COVER_ON)) { const k = popK(t, EV.td_90 - 0.2, 0.35), sec = Math.max(0, 90 - Math.floor((t - EV.td_90) / 1.2 * 90)); push(330, 1080, k); const b = rect(-150, -80, 300, 160, { wash: '#1a1a1a', washA: 1, w: 4, col: '#c8a050' }); txt(String(sec) + ' c', 0, 30, 90, { font: 'Osw', col: sec < 10 ? '#ff6040' : '#7aff9a' }); pop();
      push(330, 1260, k); rect(-150, -40, 300, 70, { wash: '#f4ecd6', washA: 1, w: 3, col: '#8a1a0e' }); txt('485 °C', 0, 16, 50, { font: 'Osw', col: '#8a1a0e' }); pop(); }
    margherita(560, 1560, 0.62, t, { tilt: 0.32, steam: 1, key: 19035 }); castShadow(560, 1600, 300, 160, 0.6, 0.25);
    castShadow(700, 1600, 280, 200, 0.6, 0.3); lightPool(160, 1500, 640, 170, 'rgba(255,160,70,1)', 0.4);
  }
  function choice(t) { if (t < EV.td_ab - 0.1) return; for (const [i, [lab, sym, c, x]] of [['ПИСЬМУ', '♛', '#d6a842', 300], ['ИСТОРИКАМ', '✎', '#2a5aa8', 780]].entries()) { const k = popK(t, EV.td_ab - 0.1 + i * 0.35, 0.4), sw = Math.sin(t * 3 + i) * 0.04; push(x, 880, k, sw);
    const b = rect(-200, -90, 400, 180, { wash: '#f8f4ea', washA: 1, w: 5, col: c }); shadeG(b.path, 0, 90, 0, -90, '#d8d0c0', 0.4); txt(sym, 0, -12, 60, { col: c }); txt(lab, 0, 64, 46, { font: 'Osw', col: '#1a1a1a' }); txt(i ? 'Б' : 'А', -160, -50, 40, { font: 'Osw', col: c }); pop(); } }
  function front(t) { push(-220, 1960, 1.6); rect(-200, -60, 400, 60, { wash: '#c89a5a', washA: 1, w: 2.4, col: '#3a1a08' }); for (let i = 0; i < 12; i++) ell(-180 + i * 30, -66, 10, 4, { wash: PZ.flour, washA: 0.8, line: false }); pop();
    push(1240, 2050, 1.5); blob([[-40, 0], [-44, -200], [-16, -260], [-16, -340], [16, -340], [16, -260], [44, -200], [40, 0]], { wash: '#6a8a2a', washA: 0.85, w: 2.4, col: '#2a3a08' }); rect(-36, -160, 72, 80, { wash: '#f4ecd0', washA: 1, w: 1.4 }); txt('OLIO', 0, -112, 18, { font: 'Osw', col: '#2a3a08' }); pop(); }
  WORLD.today = (t, u, cat) => {
    lay(12, () => { room(t); haze('#ffb070', 0.04); });
    lay(2.6, () => { crew(t); });
    lay(1, () => { cat(); counter(t); choice(t); });
    lay(0.6, () => { front(t); motes(20, [-200, 600, 1300, 1500], '#ffb050', t, 19040, { sp: 30, sz: 3, a: 0.6, add: 1, wob: 6 }); moodDark(500, 1100, 500, 1500, '#140818', 0.45); });
  };
  DIR.today = {
    outfit: 'chef', light: { side: -1, rim: '#ffb070' }, grade: ['#ff9a50', 0.08],
    act: () => [[S0.today, 'proud'], [EV.td_bake, 'grin'], [EV.td_90, 'awe'], [EV.td_out, 'proud'], [EV.td_ask, 'sideeye'], [EV.td_ab, 'smug']],
    pose: (t, u, b) => { const out = t > EV.td_out - 0.2; return Object.assign(b, { x: 620, y: 1600, s: 1.18, flip: 1, look: t < EV.td_ask ? [-0.7, -0.2] : [0, 0], hand: out ? [140, -300] : [220, -260], handF: out ? [-120, -300] : [60, -240], prop: out ? 'peelP' : undefined, propAng: out ? -0.1 : 0 }); },
    afterCat: (t, u, P) => { if (t > EV.td_out - 0.2) steamWisps(P.x - 140 * P.s, P.y - 420 * P.s, 1, t, 4, 19050, 0.5); },
    cam: () => [[S0.today, 500, 950, 0.22], [EV.td_bake, 440, 1120, 0.26, 'x'], [EV.td_90, 520, 1150, 0.26], [EV.td_out, 620, 1150, 0.3], [EV.td_ask, 640, 1080, 0.3], [EV.td_ab, 560, 1000, 0.24], [S1.today, 580, 1050, 0.26]]
  };
  // ---------------------------------------------------------------- переход: языки пламени из устья печи заливают кадр
  TRANS_IN.today = { a: 0.3, b: 0.4, runA: 0.5, fx(k, t, A, B) {
    const e = sm(k); drawBuf(e < 0.5 ? A : B, 1, 540, 960); const h = Math.sin(e * Math.PI) * 2400;
    scr(() => { ctx.save(); ctx.globalCompositeOperation = 'lighter'; for (let i = 0; i < 14; i++) { const fx = i * 84 - 20, hh = h * (0.7 + 0.3 * Math.sin(i * 1.7 + t * 9)); ctx.fillStyle = i % 2 ? '#ff7a20' : '#ffb840'; ctx.globalAlpha = 0.85; ctx.beginPath(); ctx.moveTo(fx - 80, H + 40); ctx.quadraticCurveTo(fx + Math.sin(t * 7 + i) * 60, H - hh, fx + 80, H + 40); ctx.fill(); } ctx.restore(); });
  } };
})();
