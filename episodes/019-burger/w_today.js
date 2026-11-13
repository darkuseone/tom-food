/* 019 — `today`: «Сегодня в США — около полутора тысяч бургеров в секунду. Ты за булку или вилку?» Современный бургер-бар ночью: открытый гриль с языками пламени
   (главный свет — оранжевый огонь, второй — бирюзовый неон «GRILL» и холодный экран заказов), стена из чёрного кафеля «кабанчик», полки с булками и соусами,
   экраны-меню, лампочки Эдисона, очередь: курьер с термосумкой, девушка с телефоном, парень в наушниках, повар у фритюра. Над грилем — табло-счётчик, цифры
   крутятся до «1 500 / СЕК» (число-сувенир). Том — повар гриля (chef + фартук) переворачивает котлету лопаткой, сыр плавится, пар. По словам: «Сегодня в США» —
   табло вспыхивает; «полутора тысяч» — цифры прокручиваются, бургеры вылетают на ленту; «в секунду» — секундная стрелка; «за булку или вилку?» — Том держит в одной
   лапе булку, в другой вилку, плашки «А» и «Б». Переход В сцену: кадр подлетает и переворачивается на лопатке, как котлета, — шипение и искры. */
(() => {
  EV.td_now = wtw('t1', 'Сегодня');
  EV.td_num = wtw('t1', 'полутора');
  EV.td_sec = wtw('t1', 'секунду.');
  EV.td_flip = wtw('t1', 'бургеров');
  EV.td_ab = wtw('t1', 'булку');
  SHAKES.push([EV.td_flip + 0.1, 0.12, 6]);
  KEYW.push('полутора', 'вилку?');

  function wall(t) {                                                    // (lay 12 ≈ экран) чёрный кафель, неон GRILL, экраны меню, лампочки, полки
    vgrad(-200, 2100, ['#0e1014', '#1a1a20', '#2a201a']);
    for (let r = 0; r < 36; r++) for (let i = 0; i < 14; i++) { const x = -200 + i * 110 + (r % 2) * 55, y = -200 + r * 40; rect(x, y, 106, 36, { wash: (i + r) % 5 ? '#1e2024' : '#24262c', washA: 1, w: 0.8, col: '#0a0a0c' }); pencil([[x + 8, y + 6], [x + 50, y + 6]], { w: 2, col: '#4a4e58', a: 0.4, pass2: false }); }
    const on = Math.sin(t * 6) > -0.85; push(300, 330, 1); txt('GRILL', 0, 0, 120, { font: 'Osw', col: on ? '#3ae0d0' : '#1a5a54' }); pencil(spline([[-180, 40], [0, 60], [180, 40]], false, 6), { w: 6, col: '#ff4a6a', a: 0.9, pass2: false }); if (on) glow(0, -20, 260, 'rgba(60,220,210,1)', 0.25); pop();
    for (const [x, c] of [[700, '#ffd040'], [920, '#ff6a4a']]) { push(x, 300, 1); const s = rect(-100, -110, 200, 220, { wash: '#101418', washA: 1, w: 3, col: '#3a3e44' }); rect(-90, -100, 180, 200, { wash: c, washA: 0.18, line: false }); burger(0, 30, 0.42, t, { key: 20300 + x, shadow: false }); txt(x < 800 ? 'CLASSIC $9' : 'DOUBLE $12', 0, 90, 22, { font: 'Osw', col: '#f4efe0' }); pop(); }
    for (let i = 0; i < 7; i++) { const x = -100 + i * 200, sw = Math.sin(t * 1.4 + i) * 3; pencil([[x, -200], [x + sw, 120]], { w: 2, col: '#1a1a1a', pass2: false }); ell(x + sw, 140, 18, 26, { wash: '#ffc860', washA: 0.95, w: 1.4, col: '#5a3a10' }); for (let k = 0; k < 3; k++) pencil([[x + sw - 6 + k * 6, 126], [x + sw - 6 + k * 6, 150]], { w: 1, col: '#ff8a20', pass2: false }); }
    for (const sy of [640, 820]) { rect(560, sy, 560, 16, { wash: '#6a4424', washA: 1, w: 1.6, col: '#2a1408' }); for (let i = 0; i < 9; i++) { const x = 590 + i * 58; if (i % 3 === 2) sauceBottle(x, sy, 0.42, 0, i % 2 ? 'mustard' : 'ketchup', 20310 + i + sy); else sesameDome(x, sy - 4, 26, 26, 20320 + i + sy, { seeds: 5 }); } }
  }
  function counter(t) {                                                 // (lay 3) табло-счётчик, лента выдачи с бургерами, очередь
    push(700, 640, 0.75); const b = rect(-300, -90, 600, 180, { wash: '#0a0a0c', washA: 1, w: 4, col: '#c8ccd4', key: 20330 }); const k = t > EV.td_num ? clamp((t - EV.td_num) / 1.0) : 0, n = Math.round(1500 * sm(k)), lit = t > EV.td_now;
    txt(lit ? n.toLocaleString('ru-RU').replace(/ /g, ' ') : '0', -40, 40, 110, { font: 'Osw', col: lit ? '#ffd040' : '#4a4020' }); txt('/ СЕК', 200, 30, 44, { font: 'Osw', col: lit ? '#3ae0d0' : '#1a4a44' }); if (lit) glow(0, 0, 320, 'rgba(255,200,60,1)', 0.18);
    if (t > EV.td_sec) { push(-250, 0, 0.8); ell(0, 0, 50, 50, { wash: '#f4efe0', washA: 1, w: 3, col: '#c8ccd4' }); pencil([[0, 0], [Math.sin((t - EV.td_sec) * 6.28) * 40, -Math.cos((t - EV.td_sec) * 6.28) * 40]], { w: 4, col: '#c81e10', pass2: false }); pop(); } pop();
    rect(-200, 1180, 1500, 40, { wash: '#8a9098', washA: 1, w: 2, col: '#2a2e34' }); for (let i = 0; i < 30; i++) pencil([[-200 + ((i * 50 + t * 120) % 1500), 1184], [-200 + ((i * 50 + t * 120) % 1500), 1216]], { w: 2, col: '#4a4e58', pass2: false });
    if (t > EV.td_num) for (let i = 0; i < 6; i++) { const x = ((i * 240 + (t - EV.td_num) * 260) % 1500) - 200; push(x, 1180, 0.26); burger(0, 0, 1, t, { key: 20331 + i, shadow: false }); pop(); }
    const look = t > EV.td_num;
    human(90, 1300, 1.05, t, { body: '#2a7a5a', legs: '#2a2a3a', hair: '#1a1a1a', face: look ? 'shock' : 'calm', armL: 'hold', armR: 'hold', look: 0.5, seed: 20340, hat: 'cap', hatCol: '#2a7a5a' }); push(60, 1180, 1); rect(-60, -130, 120, 130, { wash: '#2a7a5a', washA: 1, w: 2, col: '#0a2a1a' }); txt('FOOD', 0, -60, 24, { font: 'Osw', col: '#f4efe0' }); pop();
    human(250, 1300, 1.0, t, { body: '#e8a0c0', legs: '#3a3a5a', hair: '#e8c060', face: look ? 'grin' : 'smile', armL: 'hold', armR: 'up', prop: 'phone', look: 0.4, seed: 20341, long: 1 });
    human(1000, 1300, 1.05, t, { body: '#3a3a4a', legs: '#2a2a2a', hair: '#5a3a1a', face: look ? 'shock' : 'calm', armL: 'hold', armR: 'hold', look: -0.5, seed: 20342, flip: -1, beard: 'short' }); push(1000, 980, 1); pencil(spline([[-40, 0], [0, -40], [40, 0]], false, 6), { w: 6, col: '#1a1a1a', pass2: false }); for (const sd of [-1, 1]) ell(sd * 40, 6, 10, 14, { wash: '#1a1a1a', washA: 1, line: false }); pop();
    human(1180, 1310, 1.0, t, { body: '#f4f0e8', legs: '#2a2a2a', hair: '#2a1a0a', face: 'smile', armL: 'hold', armR: 'hold', look: -0.3, seed: 20343, flip: -1 }); hat20(1180, 1310, 1.0, 'chef', '#f4f0e8', -1);
  }
  function grill(t) {                                                   // перед Томом: стальной гриль с пламенем, котлеты, сыр плавится, хиро-бургер, булка и вилка
    const c = rect(-300, 1440, 1700, 600, { wash: '#3a3e44', washA: 1, w: 3, col: '#0a0a0c', key: 20350 }); shadeG(c.path, 0, 1440, 0, 1700, '#0a0a0c', 0.55); for (let i = 0; i < 14; i++) pencil([[-280 + i * 120, 1460], [-260 + i * 120, 2000]], { w: 2, col: '#6a6e78', a: 0.4, pass2: false }); pencil([[-300, 1446], [1400, 1446]], { w: 5, col: '#c8ccd4', pass2: false });
    push(900, 1440, 1); rect(-240, -30, 480, 30, { wash: '#1a1a1e', washA: 1, w: 2 }); for (let i = 0; i < 10; i++) pencil([[-230 + i * 50, -30], [-230 + i * 50, 0]], { w: 4, col: '#4a4a4e', pass2: false });
    for (let i = 0; i < 9; i++) { const f = Math.sin(t * 9 + i * 1.7) * 20; blob([[-230 + i * 52, -30], [-218 + i * 52, -100 - f], [-206 + i * 52, -60], [-196 + i * 52, -120 + f], [-180 + i * 52, -30]], { wash: i % 2 ? '#ff7a2a' : '#ffc040', washA: 0.9, line: false }); }
    for (let i = 0; i < 3; i++) { pattyRock(-150 + i * 150, -40, 56, 22, 20351 + i * 3); cheeseDrip(-150 + i * 150, -64, 56, t, 20352 + i * 3, { long: 0.5 + 0.3 * clamp((t - EV.td_now) / 2) }); }
    glow(0, -60, 260, 'rgba(255,130,40,1)', 0.35); for (let i = 0; i < 3; i++) steamWisps(-150 + i * 150, -110, 0.8, t, 2, 20360 + i, 0.35); pop();
    push(330, 1440, 1); ell(0, 0, 150, 26, { wash: '#2a2a2a', washA: 1, w: 2 }); rect(-150, -6, 300, 10, { wash: '#6a4424', washA: 1, line: false }); burger(0, -6, 0.75, t, { key: 20370, steam: 1, tall: 1 }); pop();
    push(120, 1460, 1); rect(-40, -60, 80, 60, { wash: '#c8ccd2', washA: 1, w: 1.6, col: '#3a3e44' }); for (let i = 0; i < 5; i++) rect(-30 + i * 14, -110, 10, 60, { wash: '#f4c048', washA: 1, w: 1, col: '#8a5a10' }); pop();
    castShadow(620, 1450, 260, 160, -0.6, 0.28); lightPool(880, 1440, 500, 90, 'rgba(255,140,50,1)', 0.35);
  }
  function front(t) {                                                   // передний план: искры гриля, край вытяжки, чек на штыре
    motes(30, [500, 900, 1300, 1500], '#ffb040', t, 20380, { sp: 140, sz: 3, a: 0.8, add: 1, wob: 10 });
    push(900, -120, 1.4); const h = poly([[-300, -200], [300, -200], [380, 120], [-380, 120]], { wash: '#8a9098', washA: 1, w: 3, col: '#2a2e34' }); shadeG(h.path, 0, -200, 0, 120, '#3a3e44', 0.4); for (let i = 0; i < 8; i++) pencil([[-340 + i * 90, 110], [-330 + i * 90, 120]], { w: 4, col: '#4a4e58', pass2: false }); pop();
    push(-60, 1900, 1.5); pencil([[0, 0], [0, -300]], { w: 4, col: '#c8ccd2', pass2: false }); for (let i = 0; i < 3; i++) { push(0, -120 - i * 50, 1, (i - 1) * 0.15); rect(-60, -40, 120, 80, { wash: '#f4f0e8', washA: 1, w: 1.2, col: '#7a7a7a' }); for (let q = 0; q < 4; q++) pencil([[-50, -24 + q * 14], [40, -24 + q * 14]], { w: 1.2, col: '#5a5a5a', pass2: false }); pop(); } pop();
  }
  WORLD.today = (t, u, cat) => {
    lay(12, () => { wall(t); });
    lay(3, () => { counter(t); haze('#ff8a40', 0.04); });
    lay(1, () => { cat(); grill(t); });
    lay(0.6, () => { front(t); moodDark(640, 1100, 450, 1450, '#0a0608', 0.5); shaft(900, 1400, 300, 900, 3.14, 'rgba(255,150,60,1)', 0.12); });
  };
  DIR.today = {
    outfit: 'chef', light: { side: 1, rim: '#ffa050' }, grade: ['#ff8a50', 0.08],
    act: () => [[S0.today, 'proud'], [EV.td_num, 'awe'], [EV.td_flip, 'grin'], [EV.td_sec, 'shock'], [EV.td_ab, 'smug'], [EV.td_ab + 0.7, 'wink']],
    pose: (t, u, b) => { const flip = t > EV.td_flip - 0.3 && t < EV.td_ab - 0.2, fk = flip ? Math.sin(clamp((t - EV.td_flip + 0.3) / 0.6) * 3.14) : 0, ab = t > EV.td_ab - 0.2;
      return Object.assign(b, { x: 620, y: 1590, s: 1.18, flip: 1, look: t < EV.td_num ? [0.3, -0.2] : t < EV.td_ab ? [0.1, -0.9] : [0, 0.1],
        hand: ab ? [260, -360] : flip ? [220, -260 - fk * 160] : [200, -240], prop: ab ? 'forkP19' : 'spatPattyP', propAng: flip ? -0.4 - fk * 1.2 : 0, handF: ab ? [-260, -360] : [-120, -230], tailUp: ab }); },
    afterCat: (t, u, P) => { if (t > EV.td_ab - 0.2) { const q = popK(t, EV.td_ab - 0.1, 0.35); push(P.x + 260 * P.s, P.y - 360 * P.s, q * 0.5); sesameDome(0, 40, 90, 80, 20390, { seeds: 10 }); pop();
      for (const [dx, l, c] of [[220, 'А', '#c81e10'], [-200, 'Б', '#2a6aa8']]) { push(P.x + dx * P.s, P.y - 560 * P.s, q); ell(0, 0, 44, 44, { wash: c, washA: 1, w: 3, col: '#f4efe0' }); txt(l, 0, 18, 54, { font: 'Osw', col: '#f4efe0' }); pop(); } } },
    cam: () => [[S0.today, 540, 760, 0.2], [S0.today + 0.5, 560, 820, 0.24, 'x'], [EV.td_num, 560, 760, 0.24], [EV.td_flip, 700, 1080, 0.26, 'x'], [EV.td_ab, 640, 1060, 0.28], [S1.today, 640, 1080, 0.3]]
  };
  // ---------------------------------------------------------------- переход: кадр подлетает и переворачивается на лопатке, как котлета, — шипение и искры
  TRANS_IN.today = { a: 0.3, b: 0.4, runA: 1, fx(k, t, A, B) {
    const e = sm(k); drawBuf(B, 1, 540, 960); const sy = Math.cos(e * 3.14), lift = Math.sin(e * 3.14) * 500;
    if (e < 0.5) scr(() => { ctx.save(); ctx.translate(540, 960 - lift); ctx.scale(1 - e * 0.3, Math.max(0.02, sy) * (1 - e * 0.3)); ctx.translate(-540, -960); drawBuf(A, 1, 540, 960); ctx.restore(); });
    scr(() => { motes(40, [0, 900, 1080, 1920], '#ffb040', t, 20395, { sp: 400, sz: 4, a: 0.9 * (1 - e), add: 1 }); if (e > 0.4) { push(540, 1900 - lift * 0.3, 3, -0.3); PROPS.spatP(); pop(); } });
  } };
})();
