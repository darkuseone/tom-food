/* 018 — `letter`: «Улика вторая: в письме пекарь назван Бранди. Так пиццерию назовут только через сорок лет.» Кабинет-экспертиза в архиве: тёмное дерево,
   стеллажи с коробками «CASA REALE 1889», «ARCHIVIO», картотечные ящики, на стене — доска сыщика: фото королевы, пекаря, письма, связанные красными
   нитками; настенный календарь, часы, глобус. Главный свет — зелёная банковская лампа над столом (пятно на сукне), из окна — холодная ночь с дождём.
   Архивариус в очках и нарукавниках, помощница с папками. Том-эксперт в белом халате с лупой.
   По словам: «в письме» — письмо выезжает под лампу; «назван Бранди» — круг лупы увеличивает строку «Raffaele Esposito Brandi», маркер подсвечивает
   «Brandi»; «Так пиццерию назовут» — сверху на цепях опускается вывеска «PIZZERIA BRANDI»; «через сорок лет» — листки календаря слетают 1889 → 1932,
   штамп «+40 ЛЕТ». Переход В сцену: круг лупы раскрывает новую сцену из центра. */
(() => {
  EV.lt_in = wtw('s5', 'письме');
  EV.lt_brandi = wtw('s5', 'Бранди.');
  EV.lt_sign = wtw('s5', 'назовут');
  EV.lt_forty = wtw('s5', 'сорок');
  SHAKES.push([EV.lt_brandi + 0.1, 0.14, 6]);
  KEYW.push('Бранди.', 'сорок');

  function room(t) {                                                    // панели, стеллажи, окно с дождём, доска сыщика, часы
    vgrad(-800, 1500, ['#1a1410', '#2a2018', '#3a2a1e']);
    for (let x = -800; x < 1900; x += 110) { const p = rect(x, 700, 108, 800, { wash: '#4a2e1a', washA: 1, w: 1.6, col: '#1a0a04', key: 18700 + x }); shadeG(p.path, x, 700, x, 1500, '#1a0a04', 0.4); rect(x + 14, 760, 80, 300, { wash: '#3a2412', washA: 1, w: 1.2, col: '#1a0a04' }); }
    for (const sx of [-560, 1060]) for (let j = 0; j < 5; j++) { const y = -560 + j * 250; rect(sx - 200, y + 200, 460, 20, { wash: '#5a3a1e', washA: 1, w: 1.6, col: '#1a0a04' }); for (let i = 0; i < 6; i++) { const bx = sx - 190 + i * 74, h = 150 + ((i * 7 + j) % 3) * 16; rect(bx, y + 200 - h, 66, h, { wash: ['#a8946a', '#8a6a4a', '#b8a47a', '#6a5a4a'][(i + j) % 4], washA: 1, w: 1.2, col: '#2a1a0a' }); rect(bx + 10, y + 220 - h, 46, 30, { wash: '#f0e8d0', washA: 1, w: 0.8 }); txt(['1889', 'C.R.', 'ARCH', 'NAP.'][(i + j) % 4], bx + 33, y + 242 - h, 12, { font: 'Osw', col: '#3a2a1a' }); } }
    push(250, -200, 1); const w = rect(-180, -280, 360, 520, { wash: '#1a2438', washA: 1, w: 10, col: '#3a2412', key: 18710 }); ctx.save(); ctx.clip(w.path); vgrad(-480, 240, ['#0a1020', '#1a2a48']); windows(-180, -40, 360, 280, 6, 4, 18711, 0.4, '#ffd890', '#ffd890', 0.7); for (let i = 0; i < 40; i++) { const r = rng(18712 + i), y = ((t * 900 + r() * 520) % 520) - 280, x = -180 + r() * 360; pencil([[x, y], [x - 6, y + 30]], { w: 1.4, col: '#a8c0e0', a: 0.5, pass2: false }); } ctx.restore(); pencil([[0, -280], [0, 240]], { w: 8, col: '#3a2412' }); pencil([[-180, -20], [180, -20]], { w: 8, col: '#3a2412' }); pop();
    push(720, -150, 1); const bd = rect(-230, -230, 460, 400, { wash: '#a8845a', washA: 1, w: 3, col: '#3a2412', key: 18720 }); hatch(bd.path, bd.bb, { gap: 6, a: 0.12, col: '#5a3a1a', ang: 0.8, key: 18721 });
    const pins = [[-140, -130], [130, -140], [-110, 80], [140, 70], [0, -30]]; for (let i = 0; i < pins.length; i++) for (let j = i + 1; j < pins.length; j++) if ((i + j) % 2) pencil([pins[i], pins[j]], { w: 2, col: '#c8221a', a: 0.8, pass2: false });
    for (const [i, [px, py]] of pins.entries()) { push(px, py, 1, (i - 2) * 0.06); rect(-60, -50, 120, 100, { wash: '#f4ecd6', washA: 1, w: 1.4, col: '#6a5a3a' }); if (i === 0) human(0, 46, 0.26, t, { body: '#f8f4ec', hair: '#c8a060', face: 'smile', hat: 'crown', hatCol: '#d6a842', seed: 18722, long: 1 }); else if (i === 1) { human(0, 46, 0.26, t, { body: '#f4f1ea', hair: '#2a1a0a', face: 'grin', seed: 18723 }); } else if (i === 4) { txt('?', 0, 26, 70, { font: 'Osw', col: '#c8221a' }); } else { for (let q = 0; q < 4; q++) pencil([[-44, -30 + q * 18], [44, -30 + q * 18]], { w: 1.6, col: '#5a5a5a', pass2: false }); } ell(0, -46, 8, 8, { wash: '#c8221a', washA: 1, w: 1 }); pop(); } pop();
    push(-120, -380, 1); ell(0, 0, 70, 70, { wash: '#f4ecd6', washA: 1, w: 4, col: '#5a3a1a' }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; pencil([[Math.cos(a) * 56, Math.sin(a) * 56], [Math.cos(a) * 64, Math.sin(a) * 64]], { w: 2, col: '#3a2a1a', pass2: false }); } pencil([[0, 0], [Math.cos(t * 0.5 - 1.57) * 44, Math.sin(t * 0.5 - 1.57) * 44]], { w: 3, col: '#1a1a1a', pass2: false }); pencil([[0, 0], [Math.cos(t * 6 - 1.57) * 58, Math.sin(t * 6 - 1.57) * 58]], { w: 1.4, col: '#c8221a', pass2: false }); pop();
  }
  function calendar(t) {                                                // календарь: 1889 → 1932 листками; штамп +40
    push(1000, 420, 1); rect(-110, -150, 220, 300, { wash: '#f4ecd6', washA: 1, w: 2.4, col: '#3a2a1a' }); rect(-110, -150, 220, 60, { wash: '#c8221a', washA: 1, w: 2, col: '#4a0804' });
    let yr = 1889; if (t > EV.lt_forty - 0.3) yr = Math.min(1932, 1889 + Math.floor((t - EV.lt_forty + 0.3) / 0.025)); txt(String(yr), 0, 40, 70, { font: 'Osw', col: '#2a1a1a' }); txt('ANNO', 0, -106, 26, { font: 'Osw', col: '#f8f4ea' });
    if (t > EV.lt_forty - 0.3 && yr < 1932) for (let i = 0; i < 4; i++) { const q = ((t * 6 + i / 4) % 1); push(q * 200, -40 - q * 200, 1, q * 2); rect(-80, -60, 160, 120, { wash: '#f4ecd6', washA: 1, w: 1.4, col: '#6a5a3a' }); pop(); }
    if (t > EV.lt_forty + 0.5) { push(0, 160, popK(t, EV.lt_forty + 0.5, 0.35), -0.2); rect(-130, -40, 260, 80, { wash: '#c8221a', washA: 0.2, w: 6, col: '#c8221a' }); txt('+40 ЛЕТ', 0, 18, 46, { font: 'Osw', col: '#c8221a' }); pop(); } pop();
  }
  function staff(t) {                                                   // архивариус в очках, помощница с папками
    const look = t > EV.lt_brandi; human(-260, 1280, 1.02, t, { body: '#3a3a4a', legs: '#2a2a2a', hair: '#d8d8d8', face: look ? 'shock' : 'calm', armL: 'hold', armR: look ? 'point' : 'hold', look: 0.6, seed: 18730, beard: 'short', trim: '#d8d0c0' });
    push(-260, 1280 - 290 * 1.02, 1.02); for (const sd of [-1, 1]) ell(sd * 14, 0, 11, 9, { wash: '#d8ecf4', washA: 0.3, w: 2, col: '#2a2a2a' }); pencil([[-3, 0], [3, 0]], { w: 2, col: '#2a2a2a', pass2: false }); pop();
    human(1060, 1290, 1.0, t, { body: '#5a6a8a', legs: '#3a3a3a', hair: '#6a3a1a', face: t > EV.lt_sign ? 'grin' : 'smile', armL: 'hold', armR: 'hold', look: -0.5, seed: 18731, flip: -1, long: 1 }); push(1030, 1290 - 170, 1); for (let i = 0; i < 4; i++) rect(-50, -i * 16, 100, 14, { wash: ['#c8a050', '#a8743a', '#e8d8a0', '#8a5a2a'][i], washA: 1, w: 1.2, col: '#3a2a1a' }); pop();
  }
  function desk(t) {                                                    // стол с сукном, лампа, письмо, лупа-круг, папки, перо, печати
    const d = rect(-500, 1440, 2100, 700, { wash: '#3a2412', washA: 1, w: 3, col: '#1a0a04', key: 18740 }); const cl = rect(-300, 1440, 1400, 260, { wash: '#2a5a3a', washA: 1, w: 2, col: '#0a2a14', key: 18741 }); hatch(cl.path, cl.bb, { gap: 7, a: 0.1, col: '#0a2a14', ang: 0.7, key: 18742 });
    push(1040, 1440, 1); pencil([[0, 0], [0, -200]], { w: 10, col: '#c8a050' }); ell(0, 0, 70, 16, { wash: '#c8a050', washA: 1, w: 2 }); const sh = blob([[-130, -200], [-110, -260], [110, -260], [130, -200]], { wash: '#1a6a3a', washA: 1, w: 2.4, col: '#0a2a14' }); shadeG(sh.path, 0, -260, 0, -200, '#7ad8a0', 0.4); glow(0, -190, 160, 'rgba(255,240,180,1)', 0.45); pop();
    lightPool(820, 1520, 520, 150, 'rgba(255,240,180,1)', 0.45);
    const k = sm(clamp((t - EV.lt_in + 0.2) / 0.5)), hl = t > EV.lt_brandi ? sm(clamp((t - EV.lt_brandi) / 0.4)) : 0; royalLetter(lerp(1300, 820, k), 1540, 0.62, -0.05, { key: 18743, hl });
    for (let i = 0; i < 3; i++) rect(-240 + i * 30, 1480 - i * 18, 260, 40, { wash: ['#c8a050', '#a8743a', '#e8d8a0'][i], washA: 1, w: 1.6, col: '#3a2a1a' }); push(260, 1500, 1); ell(0, 0, 30, 12, { wash: '#1a1a2a', washA: 1, w: 1.6 }); pencil(spline([[0, -6], [20, -80], [50, -140]], false, 5), { w: 3, col: '#f4f0e6', pass2: false }); pop();
    for (let i = 0; i < 3; i++) { push(380 + i * 50, 1490, 1); rect(-10, -50, 20, 50, { wash: '#6a3a1a', washA: 1, w: 1.2 }); ell(0, -54, 16, 8, { wash: '#a8180e', washA: 1, w: 1.2 }); pop(); }
    castShadow(700, 1600, 260, 200, -0.6, 0.3);
  }
  function zoom(t) {                                                    // круг-увеличение строки «Esposito Brandi»
    if (t < EV.lt_brandi - 0.15 || t > EV.lt_sign + 0.3) return; const k = t > EV.lt_sign ? 1 - clamp((t - EV.lt_sign) / 0.3) : popK(t, EV.lt_brandi - 0.15, 0.4);
    push(560, 900, k); ell(0, 0, 230, 230, { wash: PZ.paper, washA: 1, w: 14, col: '#c8a040' }); txt('Raffaele', 0, -40, 50, { font: 'Hand', col: '#2a1a4a' }); txt('Esposito', 0, 20, 50, { font: 'Hand', col: '#2a1a4a' }); rect(-150, 46, 300 * clamp((t - EV.lt_brandi) / 0.4), 70, { wash: '#f8e040', washA: 0.5, line: false }); txt('Brandi', 0, 100, 64, { font: 'Hand', col: '#8a1a0e' });
    pencil(spline([[-160, -120], [-110, -170], [-40, -190]], false, 4), { w: 10, col: '#ffffff', a: 0.6, pass2: false }); pencil([[160, 160], [260, 300]], { w: 30, col: '#5a3a1a' }); pop();
  }
  function sign(t) { if (t < EV.lt_sign - 0.2) return; const k = sm(clamp((t - EV.lt_sign + 0.2) / 0.5)), sw = Math.sin((t - EV.lt_sign) * 5) * 0.08 * Math.exp(-(t - EV.lt_sign) * 1.2);
    push(500, lerp(-300, 380, k), 1, sw); for (const sd of [-1, 1]) pencil([[sd * 200, -600], [sd * 200, -60]], { w: 4, col: '#8a8a8a', pass2: false }); const b = rect(-280, -60, 560, 150, { wash: '#1a3a2a', washA: 1, w: 4, col: '#d6a842' }); shadeG(b.path, 0, 90, 0, -60, '#0a1a10', 0.4);
    txt('PIZZERIA', 0, -2, 40, { font: 'Osw', col: '#e8c060' }); txt('BRANDI', 0, 66, 64, { font: 'Osw', col: '#f8f4ea' }); pop(); }
  function front(t) { push(-220, 1980, 1.6); for (let i = 0; i < 4; i++) rect(-160, -60 - i * 50, 320, 48, { wash: ['#a8946a', '#8a6a4a', '#b8a47a', '#6a5a4a'][i], washA: 1, w: 1.6, col: '#2a1a0a' }); pop(); push(1240, 1900, 1.6); blob([[-60, 0], [-70, -180], [-40, -220], [40, -220], [70, -180], [60, 0]], { wash: '#2a3a2a', washA: 1, w: 2 }); for (let i = 0; i < 5; i++) blob([[0, -220], [-80 + i * 40, -360 - (i % 2) * 40], [-60 + i * 40, -330]], { wash: '#3a6a3a', washA: 1, w: 1.2 }); pop(); }
  WORLD.letter = (t, u, cat) => {
    lay(12, () => { room(t); calendar(t); haze('#4a6a5a', 0.05); });
    lay(2.6, () => { staff(t); });
    lay(1.5, () => { sign(t); });
    lay(1, () => { desk(t); cat(); zoom(t); });
    lay(0.6, () => { front(t); motes(16, [-200, 600, 1300, 1500], '#e8f0d0', t, 18750, { sp: 3, sz: 3, a: 0.35, wob: 3 }); moodDark(820, 1300, 400, 1400, '#0a0a14', 0.6); });
  };
  DIR.letter = {
    outfit: 'labA', light: { side: 1, rim: '#d0ffc8' }, grade: ['#6a9a7a', 0.07],
    act: () => [[S0.letter, 'suspicious'], [EV.lt_in, 'talk'], [EV.lt_brandi, 'shock'], [EV.lt_sign, 'sideeye'], [EV.lt_forty, 'awe']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1600, s: 1.15, flip: 0, look: t < EV.lt_sign ? [0.6, 0.5] : t < EV.lt_forty ? [-0.2, -0.9] : [0.8, -0.8], hand: [-170, -300], handF: t > EV.lt_brandi ? [160, -280] : [120, -230], prop: 'magnP', propAng: -0.4, point: t > EV.lt_forty ? 1 : undefined }),
    cam: () => [[S0.letter, 600, 1100, 0.24], [EV.lt_in, 680, 1250, 0.3, 'x'], [EV.lt_brandi, 600, 1050, 0.3], [EV.lt_sign, 560, 900, 0.24], [EV.lt_forty, 760, 800, 0.26], [S1.letter, 720, 900, 0.26]]
  };
  // ---------------------------------------------------------------- переход: круг лупы раскрывает сцену из центра
  TRANS_IN.letter = { a: 0.2, b: 0.5, runA: 0.5, fx(k, t, A, B) {
    const e = sm(k), R = lerp(10, 1300, e); drawBuf(A, 1, 540, 960); inCircle(540, 960, R, () => drawBuf(B, lerp(1.5, 1, e), 540, 960));
    scr(() => { pencil(ellPts(540, 960, R, R, 0, 0, 48), { w: 30 * (1 - e) + 8, col: '#c8a040', pass2: false, gap: false }); pencil([[540 + R * 0.7, 960 + R * 0.7], [540 + R * 0.7 + 200, 960 + R * 0.7 + 260]], { w: 40, col: '#5a3a1a' }); });
  } };
})();
