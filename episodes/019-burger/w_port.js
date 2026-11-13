/* 019 — `port`: «Начнём с порта Гамбург. Там рубленую говядину жарили лепёшкой — „гамбургский стейк“. Без булки.» Гамбург, 1840-е, туманный порт на рассвете:
   за водой — мачты парусников и первый пароход с дымом, кирпичные склады с щипцами и лебёдками, шпиль церкви в дымке, чайки; на набережной — мясная лавка под
   навесом: висят колбасы, окорока на крюках, весы, бочки; мясник с топориком, грузчик с мешком, торговка рыбой, матрос с трубкой. Главный свет — фонарь над лавкой
   (тёплый), второй — холодный туман с воды. Том — гамбургский мясник (полосатая рубаха + фартук) за колодой. По словам: «Гамбург» — флажок Гамбурга на мачте лавки
   разворачивается; «рубленую» — Том рубит говядину топориком (стук, щепки фарша); «лепёшкой» — шлёпает лепёшку на чугунную сковороду, пар и шкворчание;
   «гамбургский стейк» — мелом на доске HAMBURGER STEAK; «Без булки» — над Томом пузырь с булкой, перечёркнутой красным. Переход В сцену: пар гриля из дайнера
   разрастается, становится портовым туманом и расходится. */
(() => {
  EV.pt_city = wtw('s1', 'Гамбург.');
  EV.pt_chop = wtw('s1', 'рубленую');
  EV.pt_slap = wtw('s1', 'лепёшкой');
  EV.pt_name = wtw('s1', '«гамбургский');
  EV.pt_nobun = wtw('s1', 'Без');
  SHAKES.push([EV.pt_chop + 0.05, 0.12, 6], [EV.pt_slap + 0.1, 0.15, 7]);
  KEYW.push('«гамбургский', 'булки.');

  function harbor(t) {                                                  // (lay 16 ≈ экран) небо-рассвет, шпиль, склады, мачты, пароход, вода, чайки
    vgrad(-200, 1300, ['#6a7a8a', '#a8b0b4', '#d8c8a8', '#e8d0a0']);
    for (let i = 0; i < 5; i++) { const k = (t * 0.01 + i * 0.23) % 1; ell(-200 + k * 1500, 120 + i * 60, 220, 30, { wash: '#f0e8d8', washA: 0.35, line: false }); }
    sil([[600, 700], [600, 300], [640, 140], [660, 40], [680, 140], [720, 300], [720, 700]], '#7a8088', 0.8); sil([[620, 320], [700, 320], [700, 360], [620, 360]], '#5a6068', 0.8);
    for (let i = 0; i < 7; i++) { const x = -100 + i * 170, h = 260 + (i % 3) * 70; const c = i % 2 ? '#8a4a34' : '#7a3e2a'; sil([[x, 760], [x, 760 - h], [x + 70, 680 - h], [x + 140, 760 - h], [x + 140, 760]], c, 0.85); for (let r = 0; r < 3; r++) for (let q = 0; q < 2; q++) rect(x + 30 + q * 50, 730 - h + 90 + r * 60, 24, 34, { wash: (i + r + q) % 3 ? '#3a2a2a' : '#ffd890', washA: 0.8, line: false }); pencil([[x + 70, 690 - h], [x + 70, 650 - h], [x + 110, 650 - h]], { w: 3, col: '#3a2a2a', a: 0.7, pass2: false }); }
    rect(-200, 760, 1500, 260, { wash: '#5a6a78', washA: 1, line: false }); for (let i = 0; i < 16; i++) { const y = 780 + i * 15, x = -200 + ((i * 137 + t * 30) % 1400); pencil([[x, y], [x + 90, y]], { w: 2, col: '#d8e0e8', a: 0.45, pass2: false }); }
    for (const [mx, s] of [[60, 1], [210, 0.8], [880, 0.9], [1010, 1.1]]) { push(mx, 820, s); shape([[-100, -10], [110, -10], [90, 30], [-80, 30]], { wash: '#3a2a20', washA: 1, w: 1.6, col: '#1a0a04' }); pencil([[0, -10], [0, -420]], { w: 5, col: '#3a2a20', pass2: false }); for (let k = 0; k < 3; k++) pencil([[-60 + k * 10, -360 + k * 110], [60 - k * 10, -360 + k * 110]], { w: 3, col: '#3a2a20', pass2: false }); poly([[0, -400], [70, -340], [0, -300]], { wash: '#e8dcc0', washA: 0.8, w: 1, col: '#5a4a3a' }); pencil([[0, -420], [-100, -10]], { w: 1, col: '#3a2a20', a: 0.6, pass2: false }); pencil([[0, -420], [110, -10]], { w: 1, col: '#3a2a20', a: 0.6, pass2: false }); pop(); }
    steamer(520, 830, 0.42, t, { key: 19701, name: 'HAMBURG' });
    for (let i = 0; i < 5; i++) { const k = (t * 0.06 + i * 0.21) % 1, x = -100 + k * 1300, y = 220 + Math.sin(t * 2 + i) * 30 + i * 30; pencil(spline([[x - 18, y], [x - 8, y - 8 - Math.abs(Math.sin(t * 8 + i)) * 6], [x, y], [x + 8, y - 8 - Math.abs(Math.sin(t * 8 + i)) * 6], [x + 18, y]], false, 5), { w: 3, col: '#3a3a40', pass2: false }); }
    haze('#e8e4dc', 0.1);
  }
  function quay(t) {                                                    // (lay 4) набережная: брусчатка, бочки, ящики, лебёдка, люди
    const q = rect(-300, 1000, 1700, 600, { wash: '#7a7468', washA: 1, w: 2, col: '#2a2620', key: 19710 }); for (let r = 0; r < 10; r++) for (let i = 0; i < 24; i++) ell(-280 + i * 70 + (r % 2) * 35, 1020 + r * 40, 30, 14, { wash: (i + r) % 3 ? '#8a8478' : '#6a6458', washA: 1, w: 0.8, col: '#3a3630' });
    pencil([[-300, 1000], [1400, 1000]], { w: 6, col: '#3a3630' }); for (let i = 0; i < 6; i++) { const x = -200 + i * 260; rect(x - 12, 960, 24, 60, { wash: '#3a2a20', washA: 1, w: 1.4 }); ell(x, 960, 14, 6, { wash: '#4a3a28', washA: 1, w: 1 }); }
    for (const [x, y, s] of [[60, 1120, 1], [140, 1140, 0.9], [980, 1110, 1]]) { push(x, y, s); const b = blob([[-50, 0], [-58, -60], [-50, -120], [50, -120], [58, -60], [50, 0]], { wash: '#8a5a2a', washA: 1, w: 2, col: '#2a1408' }); shadeG(b.path, 58, 0, -58, 0, '#2a1408', 0.4); for (const yy of [-20, -100]) pencil([[-54, yy], [54, yy]], { w: 4, col: '#3a3a3a', pass2: false }); txt('HH', 0, -54, 22, { font: 'Osw', col: '#2a1408' }); pop(); }
    for (let i = 0; i < 3; i++) { push(860 + i * 70, 1140 - i * 20, 1); rect(-40, -60, 80, 60, { wash: '#a87a4a', washA: 1, w: 1.6, col: '#3a2410' }); pencil([[-40, -30], [40, -30]], { w: 2, col: '#3a2410', pass2: false }); txt('KAFFEE', 0, -38, 12, { font: 'Osw', col: '#3a2410' }); pop(); }
    const hey = t > EV.pt_name && t < EV.pt_nobun + 0.8;
    human(260, 1150, 1.05, t, { body: '#2a3a5a', legs: '#3a3a3a', hair: '#3a2a1a', face: hey ? 'grin' : 'calm', armL: 'hold', armR: 'hold', look: 0.6, seed: 19720, beard: 'short', hat: 'cap', hatCol: '#1a2030' });
    push(300, 920, 1); pencil([[0, 0], [16, -10]], { w: 3, col: '#5a3a1a', pass2: false }); for (let i = 0; i < 3; i++) { const k = (t * 0.5 + i / 3) % 1; ell(20 + k * 20, -20 - k * 60, 6 + k * 10, 5, { wash: '#e8e8e8', washA: 0.5 * (1 - k), line: false }); } pop();
    const sw = Math.sin(t * 1.4); human(1020, 1160, 1.05, t, { body: '#6a5a3a', legs: '#3a3020', hair: '#5a3a1a', face: hey ? 'shock' : 'calm', armL: 'up', armR: 'up', look: -0.6, seed: 19721, flip: -1, hat: 'cap', hatCol: '#4a3a2a' }); push(1020, 820 + sw * 4, 1); blob([[-60, 0], [-50, -60], [0, -70], [50, -60], [60, 0], [0, 10]], { wash: '#c8b088', washA: 1, w: 2, col: '#5a4a2a' }); txt('MEHL', 0, -24, 18, { font: 'Osw', col: '#5a4a2a' }); pop();
    human(140, 1180, 1.0, t, { body: '#8a3a2a', legs: '#4a3a3a', hair: '#c8a060', face: hey ? 'smile' : 'calm', armL: 'hold', armR: 'hips', look: 0.4, seed: 19722, long: 1, hat: 'scarf', hatCol: '#e8dcc0' }); push(60, 1180, 1); ell(0, -10, 50, 18, { wash: '#8a6a3a', washA: 1, w: 1.6 }); for (let i = 0; i < 4; i++) anchovy(-30 + i * 20, -20, 0.6, -0.3 + i * 0.2); pop();
  }
  function stall(t) {                                                   // (lay 2.2) мясная лавка: навес, крюки с колбасами и окороками, доска мелом, весы, флажок
    push(640, 0, 1);
    const aw = poly([[-520, 560], [520, 560], [560, 700], [-560, 700]], { wash: '#c81e14', washA: 1, w: 2.4, col: '#4a0a08', key: 19730 }); for (let i = 0; i < 14; i++) poly([[-520 + i * 76, 560], [-482 + i * 76, 560], [-478 + i * 80, 700], [-518 + i * 80, 700]], { wash: '#f4ece0', washA: 1, line: false }); shadeG(aw.path, 0, 700, 0, 560, '#4a0a08', 0.35);
    for (let i = 0; i < 14; i++) ell(-520 + i * 80, 706, 40, 16, { wash: i % 2 ? '#c81e14' : '#f4ece0', washA: 1, w: 1.4, col: '#4a0a08' });
    for (const sd of [-1, 1]) { rect(sd * 500 - 14, 560, 28, 900, { wash: '#5a3a1a', washA: 1, w: 2, col: '#1a0a04' }); }
    pencil([[-480, 760], [480, 760]], { w: 6, col: '#3a3a3a', pass2: false });
    for (let i = 0; i < 9; i++) { const x = -440 + i * 110, sw = Math.sin(t * 1.2 + i) * 0.05; push(x, 760, 1, sw); pencil([[0, 0], [0, 30]], { w: 3, col: '#5a5a5a', pass2: false }); pencil(spline([[0, 30], [10, 40], [0, 50]], false, 4), { w: 3, col: '#5a5a5a', pass2: false });
      if (i % 3 === 0) { const h = blob([[-30, 50], [30, 50], [50, 140], [20, 200], [-20, 200], [-50, 140]], { wash: '#a83a2a', washA: 1, w: 2, col: '#3a0a04' }); shadeG(h.path, 50, 0, -50, 0, '#4a0a04', 0.4); ell(0, 186, 18, 12, { wash: '#f4e8d8', washA: 1, w: 1.2 }); }
      else for (let k = 0; k < 3; k++) { const s = blob([[-10 + k * 12, 50], [-2 + k * 12, 50], [0 + k * 12, 170 - k * 20], [-12 + k * 12, 170 - k * 20]], { wash: k % 2 ? '#8a2a1a' : '#b84a2a', washA: 1, w: 1.4, col: '#3a0a04' }); for (let q = 0; q < 3; q++) ell(-6 + k * 12, 80 + q * 30, 2, 2, { wash: '#f4e8d8', washA: 0.8, line: false }); } pop(); }
    push(-380, 640, 1); flagHH(0, 0, 0.9 * (t > EV.pt_city ? popK(t, EV.pt_city, 0.4) : 0.4), t); pop();
    push(330, 1010, 1); const bd = rect(-150, -130, 300, 220, { wash: '#2a2a28', washA: 1, w: 5, col: '#7a5a3a', key: 19731 }); txt('FLEISCH', 0, -80, 34, { font: 'Hand', col: '#f4efe0' }); txt('Rind · 6 Schilling', 0, -36, 26, { font: 'Hand', col: '#f4efe0' });
    if (t > EV.pt_name) { const k = clamp((t - EV.pt_name) / 0.6); txt('HAMBURGER', 0, 18, 36, { font: 'Hand', col: '#ffd040', reveal: k }); txt('STEAK', 0, 62, 36, { font: 'Hand', col: '#ffd040', reveal: k }); } pop();
    push(-260, 1120, 1); pencil([[0, -160], [0, -40]], { w: 4, col: '#8a7a3a', pass2: false }); pencil([[-90, -150], [90, -150]], { w: 4, col: '#8a7a3a', pass2: false }); for (const sd of [-1, 1]) { pencil([[sd * 90, -150], [sd * 70, -100]], { w: 1.4, col: '#5a4a2a', pass2: false }); pencil([[sd * 90, -150], [sd * 110, -100]], { w: 1.4, col: '#5a4a2a', pass2: false }); ell(sd * 90, -100, 40, 10, { wash: '#c8a040', washA: 1, w: 1.4, col: '#5a4a10' }); } rect(-30, -40, 60, 40, { wash: '#5a3a1a', washA: 1, w: 1.4 }); pop();
    const lp = Math.sin(t * 5) * 0.03 + 1; push(0, 600, 1); pencil([[0, 0], [0, 80]], { w: 3, col: '#2a2a2a', pass2: false }); poly([[-34, 80], [34, 80], [24, 150], [-24, 150]], { wash: '#ffd890', washA: 0.9, w: 2.4, col: '#2a2a2a' }); poly([[-40, 80], [40, 80], [0, 50]], { wash: '#2a2a2a', washA: 1, line: false }); glow(0, 116, 160 * lp, 'rgba(255,200,110,1)', 0.35); pop();
    pop();
  }
  function block(t) {                                                   // перед Томом: колода, говядина, фарш, лук, сковорода на жаровне, нож, соль
    const c = rect(-300, 1440, 1700, 600, { wash: '#6a4a2a', washA: 1, w: 3, col: '#1a0a04', key: 19740 }); shadeG(c.path, 0, 1440, 0, 1700, '#2a1408', 0.5); for (let i = 0; i < 12; i++) pencil([[-280, 1470 + i * 28], [1380, 1466 + i * 28 + Math.sin(i) * 6]], { w: 1.6, col: '#3a2410', a: 0.4, pass2: false });
    push(400, 1450, 1); const bl = ell(0, -20, 170, 40, { wash: '#a87a4a', washA: 1, w: 2.4, col: '#3a2410' }); for (let r = 1; r < 5; r++) pencil(ellPts(0, -20, r * 34, r * 8, 0, 0, 24), { w: 1.2, col: '#6a4a2a', a: 0.6, pass2: false });
    const chopped = t > EV.pt_chop; if (!chopped) { const m = blob([[-90, -30], [-80, -80], [0, -96], [80, -76], [94, -30], [0, -10]], { wash: '#b8303a', washA: 1, w: 2, col: '#4a0a10' }); shadeG(m.path, 0, -96, 0, -10, '#ec8a90', 0.4); for (let i = 0; i < 5; i++) pencil(spline([[-70 + i * 30, -70], [-60 + i * 30, -50], [-70 + i * 30, -30]], false, 4), { w: 3, col: '#f8e8e0', a: 0.7, pass2: false }); }
    else { mince(0, -40, 0.7, t, { key: 19741 }); for (let i = 0; i < 6; i++) { const k = clamp((t - EV.pt_chop) * 3 - i * 0.1), a = -2.6 + i * 0.4; if (k > 0 && k < 1) ell(Math.cos(a) * 140 * k, -60 + Math.sin(a) * 100 * k + k * k * 80, 6, 4, { wash: BG.raw, washA: 1, line: false }); } }
    pop();
    push(980, 1450, 1); rect(-150, -60, 300, 60, { wash: '#3a3a3a', washA: 1, w: 2, col: '#0a0a0a' }); for (let i = 0; i < 5; i++) { const fl = Math.sin(t * 9 + i * 2) * 8; blob([[-120 + i * 60, -60], [-110 + i * 60, -90 - fl], [-100 + i * 60, -60]], { wash: '#ff8a2a', washA: 0.9, line: false }); }
    const pan = ell(0, -90, 150, 36, { wash: '#2a2a2e', washA: 1, w: 2.4, col: '#0a0a0a' }); pencil([[150, -90], [300, -110]], { w: 12, col: '#2a2a2e' }); ell(0, -94, 126, 28, { wash: '#4a3a2a', washA: 1, line: false });
    if (t > EV.pt_slap + 0.15) { hamSteak(0, -80, 0.6, t, { key: 19742, plate: '#2a2a2e', steam: 1 }); const k = clamp((t - EV.pt_slap - 0.15) / 0.4); for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; ell(Math.cos(a) * (60 + k * 80), -100 + Math.sin(a) * 20 * (1 + k), 4, 3, { wash: '#ffe0a0', washA: 1 - k, line: false }); } }
    glow(0, -60, 200, 'rgba(255,140,50,1)', 0.25); pop();
    push(700, 1460, 1); for (let i = 0; i < 3; i++) blob(ellPts(-40 + i * 40, -30, 26, 24, 0, 0, 10), { wash: '#e8c890', washA: 1, w: 1.6, col: '#8a6a3a' }); ell(80, -20, 30, 14, { wash: '#efe0f2', washA: 1, w: 1.4 }); for (let i = 0; i < 3; i++) pencil(ellPts(80, -20, 22 - i * 7, 10 - i * 3, 0, 0, 16), { w: 1, col: '#a888b0', pass2: false }); pop();
    push(180, 1460, 1); rect(-30, -50, 60, 50, { wash: '#efe8d8', washA: 1, w: 1.6, col: '#5a5a5a' }); txt('SALZ', 0, -22, 16, { font: 'Osw', col: '#3a3a3a' }); pop();
    castShadow(400, 1450, 220, 160, 0.6, 0.25); lightPool(560, 1460, 600, 80, 'rgba(255,200,120,1)', 0.25);
  }
  function front(t) {                                                   // передний план: свисающая колбаса, сеть, канат, туман
    for (let i = 0; i < 3; i++) { const x = -120 + i * 60, sw = Math.sin(t * 1.3 + i) * 6; pencil([[x, -200], [x + sw, 220 + i * 40]], { w: 3, col: '#5a4a3a', pass2: false }); const s = blob([[x - 22 + sw, 220 + i * 40], [x + 22 + sw, 220 + i * 40], [x + 26 + sw, 460 + i * 40], [x + sw, 490 + i * 40], [x - 26 + sw, 460 + i * 40]], { wash: '#9a2a1a', washA: 1, w: 2, col: '#3a0a04' }); shadeG(s.path, x + 26, 0, x - 26, 0, '#3a0404', 0.45); }
    push(1240, 1900, 1.6); for (let i = 0; i < 6; i++) pencil(spline([[-200, -i * 30], [0, -i * 30 - 20], [200, -i * 30]], false, 6), { w: 10, col: '#a8946a', pass2: false }); pop();
    motes(30, [-200, 500, 1400, 1800], '#ffffff', t, 19750, { sp: 10, vx: 14, sz: 18, a: 0.08, wob: 10 });
  }
  WORLD.port = (t, u, cat) => {
    lay(16, () => { harbor(t); });
    lay(4, () => { quay(t); haze('#d8d8d8', 0.06); });
    lay(2.2, () => { stall(t); });
    lay(1, () => { cat(); block(t); });
    lay(0.6, () => { front(t); moodDark(600, 1100, 500, 1500, '#1a1a2a', 0.45); shaft(640, 600, 200, 1200, 0, 'rgba(255,210,140,1)', 0.12); });
  };
  DIR.port = {
    outfit: 'butchA', light: { side: -1, rim: '#ffd090' }, grade: ['#a8b8c8', 0.08],
    act: () => [[S0.port, 'talk'], [EV.pt_city, 'proud'], [EV.pt_chop, 'grin'], [EV.pt_slap, 'laugh'], [EV.pt_name, 'smug'], [EV.pt_nobun, 'sideeye']],
    pose: (t, u, b) => { const chop = t > EV.pt_chop - 0.2 && t < EV.pt_slap - 0.1, hit = chop ? Math.abs(Math.sin((t - EV.pt_chop) * 14)) : 0, slap = t > EV.pt_slap - 0.1 && t < EV.pt_name;
      return Object.assign(b, { x: 620, y: 1590, s: 1.18, flip: 1, look: t < EV.pt_chop ? [0.5, -0.3] : t < EV.pt_name ? [-0.3, 0.7] : [0.2, -0.1],
        hand: chop ? [-170, -280 - hit * 120] : slap ? [-260, -200] : t > EV.pt_nobun ? [160, -380] : [-160, -260], prop: chop ? 'cleaverP' : slap ? 'rawPattyP' : undefined, propAng: chop ? -0.6 + hit * 0.8 : 0,
        handF: t > EV.pt_nobun ? [-150, -380] : [-90, -220], squash: b.squash + (hit > 0.9 ? 0.05 : 0) }); },
    afterCat: (t, u, P) => { if (t > EV.pt_nobun) { const k = popK(t, EV.pt_nobun, 0.35); push(P.x + 250 * P.s, P.y - 620 * P.s, k); ell(0, 0, 110, 80, { wash: '#ffffff', washA: 0.95, w: 2.4, col: '#2a2a2a' }); poly([[-30, 70], [-10, 70], [-50, 110]], { wash: '#ffffff', washA: 0.95, w: 2 }); sesameDome(0, 30, 70, 60, 19760, { seeds: 10 }); pencil([[-70, -50], [70, 50]], { w: 10, col: '#c81e10', pass2: false }); pencil([[70, -50], [-70, 50]], { w: 10, col: '#c81e10', pass2: false }); pop(); } },
    cam: () => [[S0.port, 640, 860, 0.16], [S0.port + 0.6, 640, 980, 0.22, 'x'], [EV.pt_chop, 560, 1080, 0.28], [EV.pt_slap, 760, 1100, 0.28], [EV.pt_name, 640, 1000, 0.24], [EV.pt_nobun, 620, 960, 0.26], [S1.port, 620, 980, 0.28]]
  };
  // ---------------------------------------------------------------- переход: пар гриля разрастается в портовый туман и расходится
  TRANS_IN.port = { a: 0.3, b: 0.5, runA: 1, fx(k, t, A, B) {
    const e = sm(k); drawBuf(e < 0.5 ? A : B, 1 + (e < 0.5 ? e * 0.1 : (1 - e) * 0.1), 540, 960);
    scr(() => { const a = Math.sin(e * 3.14); for (let i = 0; i < 14; i++) { const r = rng(19790 + i), x = r() * 1080, y = 1900 - e * 1400 * (0.6 + r() * 0.6) - r() * 600; ell(x, y, 260 + e * 300, 160 + e * 160, { wash: i % 2 ? '#f4f4f0' : '#dfe4e8', washA: 0.85 * a, line: false }); } screenFill('#eef0f2', 0.75 * a); });
  } };
})();
