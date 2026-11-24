/* 026 — `today` + `button`: «Отправь тому, кто топит суши в соусе. Ты за нигири или за роллы? / Пиши блюдо — заквасим следующее!»
   Сегодня: яркий конвейерный суши-бар (кайтэн): лента с цветными тарелками едет через кадр, над ней — неон 回転寿司, планшеты заказа,
   краны с зелёным чаем, стопки пустых тарелок, окно в вечерний город с неоном (второй — холодный свет), главный — тёплые лампы над стойкой.
   Соседи: парень с телефоном, девушка с палочками, ребёнок с горой тарелок. По словам: «Отправь» — Том кивает в камеру, у соседа загорается
   телефон; «топит» — сосед топит нигири в соусе целиком: плюх, брызги; «нигири» — Том поднимает нигири; «роллы?» — во второй лапе ролл;
   финал — Том подмигивает, «ПОДПИШИСЬ» всплывает поверх (движок), лента едет дальше. Переход В сцену: лента-конвейер проезжает через кадр
   полосой тарелок и утаскивает старый кадр. */
(() => {
  EV.td_send = wtw('t1', 'Отправь');
  EV.td_dunk = wtw('t1', 'топит');
  EV.td_nig = wtw('t1', 'нигири');
  EV.td_roll = wtw('t1', 'роллы?');
  EV.td_x = LS('x1');
  SHAKES.push([EV.td_dunk + 0.3, 0.12, 5]);
  KEYW.push('нигири', 'роллы?');
  const RIMS = ['#c8343a', '#3a7ac8', '#e8b030', '#2a9a5a', '#8a3ab8', '#f07a2a'];

  function city(t) {                                                      // окно: вечерний город, неон, поезд
    vgrad(-300, 900, ['#2a2050', '#6a3a7a', '#e87a6a']); for (let i = 0; i < 7; i++) { const x = -300 + i * 240; rect(x, 200 - (i % 3) * 120, 200, 900, { wash: ['#2a2a4a', '#3a2a50', '#22223e'][i % 3], washA: 1, w: 1.2 }); windows(x + 14, 230 - (i % 3) * 120, 172, 500, 4, 8, 27600 + i, 0.55, '#ffd890', '#90e0ff', 0.8); }
    const tx = ((t * 260) % 2400) - 900; rect(tx, 720, 700, 60, { wash: '#d8dce0', washA: 1, w: 1.6 }); for (let i = 0; i < 10; i++) rect(tx + 20 + i * 68, 730, 46, 24, { wash: '#ffe8a8', washA: 1, w: 1 });
  }
  function bar(t) {                                                       // стена бара: окно, неон, полки, планшеты, плакаты-меню
    vgrad(-500, 1500, ['#e8dcc8', '#f4e8d4', '#e8d8c0']); for (let i = 0; i < 20; i++) pencil([[-500 + i * 120, -500], [-500 + i * 120, 1500]], { w: 2, col: '#c8b898', a: 0.5, pass2: false });
    push(240, 600, 1); const w = rect(-300, -380, 600, 560, { wash: '#2a2050', washA: 1, w: 8, col: '#3a2a1a', key: 27620 }); ctx.save(); ctx.clip(w.path); push(-240, -600, 1); city(t); pop(); ctx.restore(); pencil([[0, -380], [0, 180]], { w: 6, col: '#3a2a1a', pass2: false }); pop();
    push(760, 240, 1); rect(-240, -60, 480, 120, { wash: '#1a1020', washA: 1, w: 3, col: '#0a0a10' }); txt('回転寿司', 0, 24, 70, { font: 'Osw', col: '#ff6a8a' }); glow(0, 0, 260, 'rgba(255,90,140,1)', 0.22); hudBox('неон', -240, -60, 240, 60); pop();
    const posters = [['鮭', SU.salmon], ['鮪', SU.tuna], ['海老', '#f08a5a'], ['玉子', '#f8d040']]; for (let i = 0; i < 4; i++) { const x = 610 + i * 110; push(x, 520, 1); rect(-46, -80, 92, 160, { wash: '#fbf8f0', washA: 1, w: 2, col: '#6a5a4a' }); nigiri(0, 30, 0.22, t, { kind: ['salmon', 'tuna', 'salmon', 'egg'][i], key: 27630 + i }); txt(posters[i][0], 0, -36, 32, { font: 'Osw', col: '#a8241e' }); txt('¥' + (100 + i * 50), 0, 70, 20, { font: 'Osw', col: '#2a2a2a' }); pop(); }
    push(760, 860, 1); rect(-330, 0, 660, 20, { wash: '#8a6a4a', washA: 1, w: 2 }); for (let i = 0; i < 8; i++) { const x = -300 + i * 80; blob([[x - 24, 0], [x - 30, -60], [x + 30, -60], [x + 24, 0]], { wash: ['#e8e0d0', '#2a5a3a', '#c8d8e0'][i % 3], washA: 1, w: 1.6, col: '#3a3a3a', key: 27640 + i }); txt(['茶', '湯', '箸'][i % 3], x, -22, 24, { font: 'Osw', col: '#2a2a2a' }); } pop();
  }
  function people(t) {                                                    // соседи у ленты: парень с телефоном топит суши, девушка, ребёнок с тарелками
    const dunk = t > EV.td_dunk && t < EV.td_dunk + 1.4;
    human(320, 1310, 1.05, t, { body: '#3a5a8a', legs: '#2a2a3a', hair: '#1a1410', face: dunk ? 'grin' : 'smile', armL: 'hold', armR: dunk ? 'hold' : 'hold', look: 0.4, seed: 27650, prop: t > EV.td_send && t < EV.td_dunk ? 'phone' : undefined, hat: 'cap', hatCol: '#e8b030' });
    if (dunk) { const q = clamp((t - EV.td_dunk) / 0.5); push(400, 1010 + q * 80, 1); nigiri(0, 0, 0.24, t, { kind: 'salmon', key: 27651 }); pop(); if (q >= 1) { const z = clamp((t - EV.td_dunk - 0.5) / 0.5); for (let i = 0; i < 8; i++) { const a = -2.8 + i * 0.35; ell(400 + Math.cos(a) * 80 * z, 1110 + Math.sin(a) * 90 * z + z * z * 60, 7, 7, { wash: SU.soy, washA: 1 - z * 0.6, line: false }); } push(400, 1060, popK(t, EV.td_dunk + 0.5, 0.3)); txt('БУЛЬ!', 0, -60, 46, { font: 'Osw', col: '#5a2a0a' }); pop(); } }
    soyDish(400, 1130, 1.3);
    human(980, 1310, 1.0, t, { body: '#e87a8a', legs: '#2a2a3a', hair: '#3a2010', face: t > EV.td_dunk + 0.4 ? 'shock' : 'smile', armL: 'hold', armR: 'hold', look: -0.6, seed: 27652, flip: -1 });
    push(1080, 1200, 1); for (let i = 0; i < 9; i++) { ell(0, -i * 16, 60, 14, { wash: RIMS[i % 6], washA: 1, w: 1.4 }); } pop();
  }
  function belt(t) {                                                      // конвейер: стальная лента с тарелками, едет вправо
    const b = rect(-500, 1380, 2200, 70, { wash: '#b8c0c8', washA: 1, w: 3, col: '#4a5460', key: 27660 }); shadeG(b.path, 0, 1380, 0, 1450, '#6a7480', 0.4); for (let i = 0; i < 30; i++) { const x = ((t * 120 + i * 80) % 2400) - 500; pencil([[x, 1384], [x - 10, 1446]], { w: 2, col: '#8a949e', pass2: false }); }
    for (let i = 0; i < 9; i++) { const x = ((t * 120 + i * 260) % 2340) - 520; if (x > 380 && x < 820) continue; sushiPlate(x, 1390, 0.7, t, { rim: RIMS[i % 6], roll: i % 3 === 2, kind: ['salmon', 'tuna', 'toro'][i % 3], key: 27670 + i * 5 }); }
    const c = rect(-500, 1450, 2200, 600, { wash: '#e8c890', washA: 1, w: 3, col: '#6a4a20', key: 27668 }); shadeG(c.path, 0, 1450, 0, 1900, '#a8804a', 0.4);
    push(560, 1460, 1); rect(-70, -120, 140, 120, { wash: '#2a2a2e', washA: 1, w: 2 }); rect(-60, -110, 120, 90, { wash: '#6ac8e8', washA: 1, w: 1 }); txt('注文', 0, -56, 30, { font: 'Osw', col: '#ffffff' }); glow(0, -66, 90, 'rgba(120,210,255,1)', 0.18); pop();
    castShadow(700, 1460, 300, 90, -0.5, 0.25);
  }
  WORLD.today = (t, u, cat) => {
    lay(9, () => { bar(t); haze('#fff0e0', 0.04); });
    lay(2.6, () => { people(t); });
    lay(1, () => { lightPool(600, 1440, 700, 120, 'rgba(255,225,180,1)', 0.35); belt(t); cat(); });
    lay(0.65, () => { push(-120, 220, 1.4); for (let i = 0; i < 3; i++) { pencil([[i * 140, -400], [i * 140, -40]], { w: 3, col: '#2a2a2a', pass2: false }); blob([[i * 140 - 60, -40], [i * 140 - 40, -90], [i * 140 + 40, -90], [i * 140 + 60, -40]], { wash: '#2a2a2e', washA: 1, w: 2 }); glow(i * 140, -30, 90, 'rgba(255,220,160,1)', 0.25); } pop();
      push(1240, 1900, 1.4); sushiPlate(0, 0, 1, t, { rim: '#c8343a', kind: 'tuna', key: 27690 }); pop(); motes(10, [-200, 300, 1300, 1500], '#fff8e8', t, 27695, { sp: 3, sz: 3, a: 0.3, wob: 3 }); moodDark(600, 1000, 560, 1500, '#140a10', 0.35); });
  };
  WORLD.button = (t, u, cat) => WORLD.today(t, u, cat);
  const pose = (t, b) => { const two = t > EV.td_roll - 0.1, one = t > EV.td_nig - 0.1;
    return Object.assign(b, { x: 680, y: 1600, s: 1.16, flip: true, look: t > EV.td_dunk && t < EV.td_nig ? [-0.9, 0.2] : [0, 0], hand: one ? [170, -380] : t > EV.td_send && t < EV.td_dunk ? [120, -400] : [150, -230], handF: two ? [-170, -380] : [-90, -230],
      point: t > EV.td_send && t < EV.td_dunk ? 1 : undefined, prop: one ? 'nigiriP' : undefined, tailUp: t > EV.td_x }); };
  DIR.today = {
    outfit: 'hoodS', light: { side: -1, rim: '#ffe0b0' }, grade: ['#ffc090', 0.05],
    act: () => [[S0.today, 'grin'], [EV.td_send, 'wink'], [EV.td_dunk, 'sideeye'], [EV.td_dunk + 0.6, 'annoyed'], [EV.td_nig, 'grin'], [EV.td_roll, 'suspicious']],
    pose: (t, u, b) => pose(t, b),
    afterCat: (t, u, P) => { if (t > EV.td_roll - 0.1) { push(P.x + 170 * P.s, P.y - 380 * P.s, 1); maki(0, -20, 0.55, { key: 27699 }); pop(); } },
    cam: () => [[S0.today, 580, 1080, 0.26], [EV.td_dunk, 520, 1100, 0.27], [EV.td_nig, 600, 1140, 0.3], [S1.today, 610, 1150, 0.32]]
  };
  DIR.button = {
    outfit: 'hoodS', light: { side: -1, rim: '#ffe0b0' }, grade: ['#ffc090', 0.05],
    act: () => [[S0.button, 'grin'], [EV.td_x + 0.4, 'wink'], [EV.td_x + 1.3, 'laugh']],
    pose: (t, u, b) => pose(t, b),
    afterCat: (t, u, P) => DIR.today.afterCat(t, u, P),
    cam: () => [[S0.button, 610, 1150, 0.32], [S1.button, 600, 1120, 0.3]]
  };
  // ---------------------------------------------------------------- переход: лента конвейера проезжает через кадр и утаскивает старый кадр
  TRANS_IN.today = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), dx = e * 1200; drawBuf(B, 1, 540, 960); drawBuf(A, 1, 540 + dx, 960);
    scr(() => { const x0 = 540 + dx - 600; rect(x0 - 40, -50, 80, 2050, { wash: '#b8c0c8', washA: 1, w: 4, col: '#4a5460', key: 27698 }); for (let i = 0; i < 6; i++) sushiPlate(x0, 140 + i * 330, 0.8, t, { rim: RIMS[i % 6], roll: i % 2 === 1, key: 27700 + i * 5 }); });
  } };
})();
