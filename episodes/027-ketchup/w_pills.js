/* 027 — `pills`: «Мотаем назад! В 1830-х томат продавали в аптеке — от поноса! / Пилюли расхватывали. А помидоров в них — ноль, одно слабительное.»
   Американская аптека 1830-х: полки до потолка с банками и бутылями (латинские ярлыки), весы, ступка, шкафчик с ящичками, часы с маятником,
   окно на пыльную улицу с повозкой, огромный плакат «TOMATO PILLS — cures all!» с помидором; «доктор» в сюртуке и цилиндре расхваливает
   пилюли, покупатели толпятся. Том — аптекарь в жилете с фартуком за прилавком. Главный свет — дневное окно, второй — масляная лампа.
   По словам: «назад!» — часы крутятся назад; «аптеке» — звенит колокольчик над дверью; «поноса!» — покупатель хватается за живот; «Пилюли
   расхватывали.» — коробки улетают с прилавка в руки; «ноль,» — Том раскалывает пилюлю под лупой: внутри пусто, штамп «0 ТОМАТОВ»;
   «слабительное.» — покупатели переглядываются и пулей вылетают за дверь (пауза-гэг). Переход В сцену: «перемотка» — горизонтальные
   полосы плёнки бегут вверх, кадр отматывается. */
(() => {
  EV.pl_back = wtw('s4', 'назад!');
  EV.pl_apt = wtw('s4', 'аптеке');
  EV.pl_belly = wtw('s4', 'поноса!');
  EV.pl_grab = wtw('s5', 'расхватывали.');
  EV.pl_zero = wtw('s5', 'ноль,');
  EV.pl_lax = wtw('s5', 'слабительное.');
  SHAKES.push([EV.pl_lax + 0.6, 0.18, 7]);
  KEYW.push('поноса!', 'ноль,');
  const flee = t => clamp((t - EV.pl_lax - 0.3) / 0.8);

  function shop(t) {                                                      // стены аптеки: полки с банками, часы, окно на улицу, плакат
    vgrad(-500, 1500, ['#4a3020', '#6a4a30', '#7a5a3a']); for (let i = 0; i < 12; i++) pencil([[-500 + i * 200, -500], [-500 + i * 200, 1500]], { w: 3, col: '#3a2414', a: 0.6, pass2: false });
    for (let r = 0; r < 5; r++) { const y = -100 + r * 170; rect(-500, y, 760, 16, { wash: '#5a3a1e', washA: 1, w: 1.6, col: '#2a1408' }); for (let i = 0; i < 9; i++) { const x = -460 + i * 82, c = ['#3a6a8a', '#8a3a2a', '#e8e0c0', '#3a7a4a', '#c8a040'][(i + r) % 5]; blob([[x - 24, y], [x - 28, y - 80], [x - 14, y - 100], [x + 14, y - 100], [x + 28, y - 80], [x + 24, y]], { wash: c, washA: 0.9, w: 1.6, col: '#2a1408', key: 27500 + r * 10 + i }); rect(x - 18, y - 70, 36, 28, { wash: '#f4ecd0', washA: 1, w: 1 }); txt(['Aq.', 'Sal', 'Opi', 'Rhe', 'Lax'][(i + r * 2) % 5], x, y - 50, 14, { font: 'Hand', col: '#2a1a0a' }); } }
    push(960, 380, 1); rect(-200, -260, 400, 440, { wash: '#d8e8e8', washA: 1, w: 8, col: '#3a2414', key: 27560 }); vgrad(120, 560, ['#c8dce8', '#e8d8b0']); rect(-190, 60, 380, 110, { wash: '#c8a878', washA: 1, line: false }); push(-60 + ((t * 40) % 400), 120, 0.5); rect(-80, -60, 160, 60, { wash: '#8a5a2a', washA: 1, w: 2 }); ell(-50, 4, 22, 22, { wash: '#3a2414', washA: 1, w: 2 }); ell(50, 4, 22, 22, { wash: '#3a2414', washA: 1, w: 2 }); pop(); pencil([[0, -260], [0, 180]], { w: 6, col: '#3a2414', pass2: false }); pencil([[-200, -40], [200, -40]], { w: 6, col: '#3a2414', pass2: false }); glow(0, -40, 280, 'rgba(255,245,220,1)', 0.22); pop();
    push(620, 220, 1); rect(-170, -140, 340, 280, { wash: '#f4e4b8', washA: 1, w: 3, col: '#4a2a10' }); txt('TOMATO', 0, -80, 50, { font: 'Osw', col: '#c8201a' }); txt('PILLS', 0, -24, 50, { font: 'Osw', col: '#c8201a' }); tomato(0, 70, 0.9, { key: 27561 }); txt('cures all!', 0, 124, 28, { font: 'Hand', col: '#2a1a0a' }); hudBox('плакат TOMATO PILLS', -170, -140, 170, 140); pop();
    push(260, 620, 1); ell(0, 0, 70, 70, { wash: '#f4ecd8', washA: 1, w: 4, col: '#4a2a10' }); const a = t > EV.pl_back && t < EV.pl_back + 1.2 ? -t * 18 : -t * 0.3; pencil([[0, 0], [Math.cos(a) * 54, Math.sin(a) * 54]], { w: 4, col: '#1a1a1a', pass2: false }); pencil([[0, 0], [Math.cos(a / 12) * 36, Math.sin(a / 12) * 36]], { w: 5, col: '#1a1a1a', pass2: false }); pencil([[0, 70], [Math.sin(t * 3) * 30, 220]], { w: 4, col: '#c8a040', pass2: false }); ell(Math.sin(t * 3) * 30, 230, 18, 18, { wash: '#c8a040', washA: 1, w: 2 }); pop();
  }
  function crowd(t) {                                                     // «доктор» в цилиндре и покупатели: живот, хватают коробки, убегают
    const f = flee(t);
    human(330, 1300, 1.05, t, { body: '#2a2a3a', legs: '#1a1a1a', hair: '#8a8a8a', beard: 'short', face: t > EV.pl_zero ? 'shock' : 'grin', armL: 'hold', armR: t < EV.pl_zero ? 'wave' : 'hold', look: 0.4, seed: 27570 }); push(330, 1300 - 330 * 1.05, 1.05); rect(-44, -14, 88, 14, { wash: '#1a1a1a', washA: 1, w: 1.4 }); rect(-30, -80, 60, 68, { wash: '#1a1a1a', washA: 1, w: 1.4 }); pop();
    for (const [x0, sd, col, fl] of [[900, 27571, '#8a5a3a', -1], [1040, 27572, '#5a7a4a', -1], [-60, 27573, '#a84a4a', 1]]) { const x = x0 + (fl < 0 ? 1 : -1) * f * 700, sh = t > EV.pl_lax + 0.1;
      human(x, 1310, 1.0, t, { body: col, legs: '#3a2a1a', hair: '#4a2a14', face: sh ? 'shock' : t > EV.pl_belly && sd === 27571 && t < EV.pl_grab ? 'angry' : 'smile', armL: t > EV.pl_grab && t < EV.pl_lax ? 'up' : 'hold', armR: sd === 27571 && t > EV.pl_belly && t < EV.pl_grab ? 'hips' : 'hold', look: 0.4 * fl, seed: sd, flip: fl, hat: 'cap', hatCol: '#6a4a2a' });
      if (t > EV.pl_grab && f < 0.1) pillBox(x, 1310 - 520, 0.4, t, { key: sd + 20 }); }
    if (f > 0) for (let i = 0; i < 6; i++) { const ph = (t * 2 + i / 6) % 1; ell(1100 + f * 300 - ph * 200, 1250 + i * 10, 30 * (1 - ph), 16 * (1 - ph), { wash: '#d8c8a8', washA: 0.5 * (1 - ph), line: false }); }
    push(1150, 900, 1); rect(-80, -260, 160, 520, { wash: '#6a4426', washA: 1, w: 3, col: '#2a1408' }); const sw = t > EV.pl_apt && t < EV.pl_apt + 0.8 ? Math.sin(t * 20) * 0.3 : 0; push(0, -280, 1, sw); ell(0, 0, 20, 24, { wash: '#d8b040', washA: 1, w: 2 }); pop(); pop();
  }
  function counter(t) {                                                   // прилавок: весы, ступка, коробки пилюль, лупа, расколотая пилюля
    const tb = rect(-500, 1440, 2200, 600, { wash: '#6a4426', washA: 1, w: 3, col: '#2a1408', key: 27580 }); shadeG(tb.path, 0, 1440, 0, 1900, '#3a2414', 0.5); for (let i = 0; i < 6; i++) rect(-480 + i * 380, 1500, 340, 300, { wash: '#5a3a1e', washA: 1, w: 2, col: '#2a1408' });
    push(220, 1450, 1); pencil([[0, 0], [0, -150]], { w: 6, col: '#c8a040', pass2: false }); pencil([[-110, -150], [110, -150]], { w: 5, col: '#c8a040', pass2: false }); for (const sd of [-1, 1]) { pencil([[sd * 110, -150], [sd * 80, -80]], { w: 2, col: '#c8a040', pass2: false }); pencil([[sd * 110, -150], [sd * 140, -80]], { w: 2, col: '#c8a040', pass2: false }); ell(sd * 110, -80, 40, 10, { wash: '#d8b040', washA: 1, w: 2 }); } pop();
    push(380, 1450, 1); blob([[-46, 0], [-54, -60], [54, -60], [46, 0]], { wash: '#e8e0d0', washA: 1, w: 2 }); pencil([[0, -50], [50, -140]], { w: 10, col: '#d8d0c0', pass2: false }); pop();
    if (t < EV.pl_grab + 0.2) for (let i = 0; i < 4; i++) pillBox(820 + (i % 2) * 120, 1450 - Math.floor(i / 2) * 60, 0.6, t, { key: 27585 + i * 3 });
    if (t > EV.pl_zero - 0.2) { const k = popK(t, EV.pl_zero - 0.2, 0.3); push(560, 1430, 1); ell(-22, 0, 22, 14, { wash: '#8a3a2a', washA: 1, w: 2 }); ell(22, 4, 22, 14, { wash: '#8a3a2a', washA: 1, w: 2 }); ell(-22, -2, 14, 8, { wash: '#e8d8b8', washA: 1, line: false }); ell(22, 2, 14, 8, { wash: '#e8d8b8', washA: 1, line: false }); pop();
      push(560, 1260, k, -0.12); rect(-120, -46, 240, 92, { wash: '#c8201a', washA: 0.15, w: 6, col: '#c8201a' }); txt('0 ТОМАТОВ', 0, 14, 40, { font: 'Osw', col: '#c8201a' }); pop(); }
    castShadow(640, 1450, 320, 90, -0.5, 0.25);
  }
  WORLD.pills = (t, u, cat) => {
    lay(9, () => { shop(t); haze('#ffe8c0', 0.05); });
    lay(2.6, () => { crowd(t); shaft(960, 380, 300, 1300, -0.35, 'rgba(255,245,220,1)', 0.15); });
    lay(1, () => { lightPool(600, 1460, 680, 120, 'rgba(255,220,160,1)', 0.34); cat(); counter(t); });
    lay(0.65, () => { push(-120, 300, 1.4); pencil([[0, -400], [0, -100]], { w: 4, col: '#2a1a10', pass2: false }); blob([[-50, -100], [-40, -40], [40, -40], [50, -100]], { wash: '#c8a040', washA: 1, w: 2 }); ell(0, -20, 18, 26, { wash: '#ffc060', washA: 1, line: false }); glow(0, -20, 150, 'rgba(255,190,100,1)', 0.3); pop();
      push(1220, 1950, 1.4); for (let i = 0; i < 3; i++) blob([[i * 70 - 30, 0], [i * 70 - 34, -110], [i * 70 + 34, -110], [i * 70 + 30, 0]], { wash: ['#3a6a8a', '#8a3a2a', '#3a7a4a'][i], washA: 0.9, w: 2 }); pop();
      motes(14, [200, 200, 1200, 1400], '#fff4d8', t, 27590, { sp: 3, sz: 3, a: 0.4, wob: 4 }); moodDark(600, 1000, 520, 1500, '#140a08', 0.45); });
  };
  DIR.pills = {
    outfit: 'pharmA', light: { side: 1, rim: '#ffe8c0' }, grade: ['#ffc080', 0.06],
    act: () => [[S0.pills, 'talk'], [EV.pl_apt, 'proud'], [EV.pl_belly, 'sideeye'], [EV.pl_grab, 'grin'], [EV.pl_zero, 'suspicious'], [EV.pl_lax, 'shock'], [EV.pl_lax + 0.7, 'laugh']],
    pose: (t, u, b) => { const zoom = t > EV.pl_zero - 0.4 && t < EV.pl_lax;
      return Object.assign(b, { x: 700, y: 1600, s: 1.15, flip: true, look: zoom ? [-0.6, 0.8] : t > EV.pl_lax ? [0.9, 0.1] : [-0.3, 0.2], hand: zoom ? [180, -220] : t > EV.pl_apt && t < EV.pl_grab ? [170, -330] : [150, -230], handF: [-90, -230],
        prop: zoom ? 'magP' : t > EV.pl_apt && t < EV.pl_grab ? 'pillP' : undefined, propAng: zoom ? -0.4 : 0, squint: zoom, tailUp: t > EV.pl_lax }); },
    hud: t => infoPlate(t, EV.pl_apt, EV.pl_zero - 0.3, { kind: 'num', title: 'АПТЕКА · 1830-е', big: 'ТОМАТ', sub: '«лекарство от всего»' }),
    cam: () => [[S0.pills, 560, 1040, 0.22], [EV.pl_belly, 580, 1100, 0.27], [EV.pl_zero, 620, 1160, 0.31], [EV.pl_lax + 0.3, 640, 1100, 0.26], [S1.pills, 650, 1100, 0.26]]
  };
  // ---------------------------------------------------------------- переход: «перемотка» — горизонтальные полосы плёнки бегут вверх
  TRANS_IN.pills = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k); drawBuf(A, 1, 540, 960 - e * 600);
    scr(() => { for (let i = 0; i < 16; i++) { const y0 = i * 120, show = (i / 16) < e * 1.3 - 0.15; if (!show) continue; const dy = (1 - e) * (300 + i * 20); ctx.save(); ctx.beginPath(); ctx.rect(0, y0, 1080, 121); ctx.clip(); drawBuf(B, 1, 540 + Math.sin(i * 7 + t * 30) * 40 * (1 - e), 960 - dy); ctx.restore(); }
      for (let i = 0; i < 5; i++) { const y = ((t * 3000 + i * 400) % 2000); rect(0, y, 1080, 6, { wash: '#ffffff', washA: 0.35 * (1 - e), line: false }); } txt('◀◀', 900, 300, 80, { font: 'Osw', col: '#ffffff', a: 1 - e }); });
  } };
})();
