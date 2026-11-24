/* 027 — `canton` (РАЗГАДКА ★): «А „кэ-цап“ по-китайски — рыбный рассол! Кетчуп был рыбным соусом.» Побережье Южного Китая (Фуцзянь): двор
   засолочной под палящим солнцем — ряды огромных глиняных чанов с бурым рыбным рассолом, бамбуковые сушилки с рыбой, сети, черепичные крыши
   с загнутыми углами, красные фонари, вдали — море с сампанами и острые горы. Рабочие мешают рассол вёслами, старик-хозяин с весами.
   Том — торговец в бордовой куртке и конусной шляпе с черпаком. Главный свет — полуденное солнце сверху-справа, второй — фонарь под навесом.
   По словам: «кэ-цап» — с навеса раскатывается свиток 鮭汁; «рыбный рассол!» — Том зачерпывает бурый рассол, из чана выпрыгивает рыба;
   «Кетчуп» — плашка «КЕТЧУП: ТОМАТНЫЙ → РЫБНЫЙ»; «соусом.» — Том пробует, глаза на лоб — и довольный кивок. Переход В сцену: крышка кувшина
   слетает, горлышко-овал растёт и открывает двор. */
(() => {
  EV.cn_word = wtw('s9', '«кэ-цап»');
  EV.cn_brine = wtw('s9', 'рыбный');
  EV.cn_ket = wtw('s9', 'Кетчуп');
  EV.cn_sauce = wtw('s9', 'соусом.');
  SHAKES.push([EV.cn_brine + 0.2, 0.16, 7]);
  KEYW.push('рыбный', 'рассол!');

  function coast(t) {                                                     // небо, острые горы, море с сампанами, крыши с загнутыми углами
    vgrad(-500, 900, ['#5a9ad8', '#a8d0f0', '#f0f0d8']); glow(900, -100, 300, 'rgba(255,250,220,1)', 0.3);
    for (let i = 0; i < 3; i++) sil([[-500, 520], [-300 + i * 200, 200 - i * 40], [-100 + i * 250, 420], [200 + i * 200, 160 + i * 30], [500 + i * 150, 420], [900 + i * 100, 220], [1300, 460], [1700, 520]], lerpC('#7a9ab0', '#4a6a7a', i / 2), 0.8);
    rect(-500, 520, 2200, 400, { wash: '#4a8ab0', washA: 1, line: false }); for (let i = 0; i < 10; i++) { const x = ((t * 14 + i * 220) % 1900) - 400; pencil([[x, 540 + i * 18], [x + 100, 540 + i * 18]], { w: 2, col: '#e8f4ff', a: 0.5, pass2: false }); }
    for (const [x, s] of [[200, 0.5], [1100, 0.4]]) { push(x + Math.sin(t * 0.5 + x) * 20, 640, s); blob([[-120, 0], [-100, 24], [100, 24], [130, -8]], { wash: '#5a3a1a', washA: 1, w: 2 }); blob([[-60, 0], [-50, -50], [50, -50], [60, 0]], { wash: '#c8a060', washA: 1, w: 1.6 }); pop(); }
    for (let i = 0; i < 3; i++) { push(-200 + i * 600, 860, 1); rect(-220, -160, 440, 160, { wash: '#e8dcc0', washA: 1, w: 2, col: '#5a4a3a' }); const r = poly([[-280, -160], [-240, -240], [240, -240], [280, -160]], { wash: '#3a4a4a', washA: 1, w: 2, col: '#1a2020' }); pencil(spline([[-280, -160], [-300, -190], [-320, -200]], false, 4), { w: 8, col: '#3a4a4a', pass2: false }); pencil(spline([[280, -160], [300, -190], [320, -200]], false, 4), { w: 8, col: '#3a4a4a', pass2: false }); for (let j = 0; j < 10; j++) pencil([[-240 + j * 50, -236], [-270 + j * 56, -164]], { w: 2, col: '#1a2a2a', pass2: false }); pop(); }
  }
  function yard(t) {                                                      // сушилки с рыбой, чаны, рабочие, свиток 鮭汁 под навесом, фонари
    for (let r = 0; r < 2; r++) { push(80 + r * 900, 1060, 1); pencil([[-180, 0], [-180, -280]], { w: 6, col: '#a8884a', pass2: false }); pencil([[180, 0], [180, -280]], { w: 6, col: '#a8884a', pass2: false }); for (let j = 0; j < 3; j++) { pencil([[-190, -260 + j * 80], [190, -260 + j * 80]], { w: 4, col: '#a8884a', pass2: false }); for (let i = 0; i < 6; i++) fish(-150 + i * 60, -220 + j * 80, 0.42, 1.57 + Math.sin(t * 2 + i + j) * 0.05, { key: 27900 + r * 30 + j * 6 + i }); } pop(); }
    for (let i = 0; i < 3; i++) brineVat(-40 + i * 300, 1250, 0.6, t, { key: 27940 + i * 3 });
    for (const [x, sd, fl] of [[220, 27950, 1], [880, 27951, -1]]) { human(x, 1240, 0.9, t, { body: '#3a4a7a', legs: '#2a2a2a', hair: '#1a1410', face: t > EV.cn_brine ? 'grin' : 'calm', armL: 'up', armR: 'hold', look: 0.4 * fl, seed: sd, flip: fl }); jpHat(x, 1240, 0.9, 'conical', null, fl); push(x + fl * 40, 1240 - 300, 1, fl * (0.3 + Math.sin(t * 3 + sd) * 0.3)); pencil([[0, 0], [0, 320]], { w: 6, col: '#a8884a', pass2: false }); pop(); }
    push(560, 340, 1); rect(-300, -40, 600, 30, { wash: '#6a3a1a', washA: 1, w: 2 }); const k = t > EV.cn_word ? sm(clamp((t - EV.cn_word) / 0.5)) : 0; if (k > 0) { const h = 360 * k; rect(-130, -10, 260, h, { wash: '#f4e8c8', washA: 1, w: 3, col: '#6a4a1a', key: 27960 }); if (k > 0.6) { txt('鮭汁', 0, 140, 110, { font: 'Osw', col: '#a8201a' }); txt('кэ-цап', 0, 230, 40, { font: 'Hand', col: '#3a2a1a' }); txt('= рыбный рассол', 0, 300, 30, { font: 'Hand', col: '#3a2a1a' }); } ell(0, h, 140, 14, { wash: '#6a3a1a', washA: 1, w: 2 }); hudBox('свиток 鮭汁', -130, -10, 130, h); } pop();
    for (const x of [160, 960]) chochin(x, 360, 0.8, t, { key: 27970 + x });
  }
  function work(t) {                                                      // передний стол: главный чан (герой), весы, корзина рыбы, рыба выпрыгивает
    const d = rect(-500, 1440, 2200, 600, { wash: '#c8a878', washA: 1, w: 3, col: '#5a4a2a', key: 27980 }); shadeG(d.path, 0, 1440, 0, 1900, '#8a6a4a', 0.4); for (let i = 0; i < 20; i++) { const r = rng(27981 + i); ell(-400 + r() * 1800, 1480 + r() * 300, 14, 5, { wash: '#a8b8c0', washA: 0.5, line: false }); }
    brineVat(330, 1450, 1.1, t, { key: 27985, label: '鮭汁' });
    if (t > EV.cn_brine && t < EV.cn_brine + 1) { const q = (t - EV.cn_brine) / 1; fish(lerp(300, 520, q), 1150 - Math.sin(q * 3.14) * 320, 0.8, q * 6, { key: 27988 }); for (let i = 0; i < 6; i++) ell(330 + Math.cos(i) * 80 * q, 1200 - Math.sin(i) * 60 * q, 10 * (1 - q) + 2, 10 * (1 - q) + 2, { wash: '#8a5a2a', washA: 1 - q, line: false }); }
    push(1050, 1450, 1); blob([[-90, 0], [-100, -70], [100, -70], [90, 0]], { wash: '#c89a5a', washA: 1, w: 2.4 }); for (let i = 0; i < 5; i++) fish(-60 + i * 30, -76, 0.45, -0.3 + i * 0.15, { key: 27989 + i }); pop();
    castShadow(640, 1450, 320, 100, -0.6, 0.28);
  }
  WORLD.canton = (t, u, cat) => {
    lay(14, () => { coast(t); haze('#f8f4e0', 0.05); });
    lay(2.6, () => { yard(t); shaft(1000, -100, 380, 1600, 0.35, 'rgba(255,250,220,1)', 0.15); });
    lay(1, () => { lightPool(600, 1460, 680, 120, 'rgba(255,245,210,1)', 0.34); cat(); work(t); });
    lay(0.65, () => { push(-150, 1950, 1.4); brineVat(0, 0, 0.9, t, { key: 27995 }); pop(); push(1220, -40, 1.4); for (let i = 0; i < 4; i++) { const sw = Math.sin(t * 1.4 + i) * 8; fish(i * 40 + sw, 200 + i * 40, 0.6, 1.57, { key: 27996 + i }); pencil([[i * 40, -200], [i * 40 + sw, 160 + i * 40]], { w: 2, col: '#6a5a3a', pass2: false }); } pop();
      motes(14, [-200, 300, 1300, 1500], '#fffbe8', t, 27999, { sp: 2, sz: 3, a: 0.35, wob: 4 }); moodDark(600, 1000, 560, 1500, '#1a1410', 0.35); });
  };
  DIR.canton = {
    outfit: 'yunK', light: { side: 1, rim: '#fff4d0' }, grade: ['#ffe0a0', 0.05],
    act: () => [[S0.canton, 'awe'], [EV.cn_word, 'proud'], [EV.cn_brine, 'shock'], [EV.cn_ket, 'grin'], [EV.cn_sauce, 'suspicious'], [EV.cn_sauce + 0.4, 'laugh']],
    pose: (t, u, b) => { const sc = t > EV.cn_brine - 0.3, taste = t > EV.cn_sauce - 0.2;
      return Object.assign(b, { x: 720, y: 1600, s: 1.15, flip: true, look: t > EV.cn_word && t < EV.cn_brine ? [-0.3, -0.9] : [-0.6, 0.4], hand: taste ? [70, -330] : sc ? [260, -300] : [150, -230], handF: [-90, -230], prop: sc ? 'ladleBrineP' : undefined, propAng: taste ? -1.1 : -0.3, squint: taste && t < EV.cn_sauce + 0.4, tailUp: t > EV.cn_sauce + 0.4 }); },
    hud: t => infoPlate(t, EV.cn_ket - 0.1, S1.canton - 0.15, { kind: 'swap', title: 'КЕТЧУП', a: 'ТОМАТНЫЙ', b: 'РЫБНЫЙ', ia: 'tomato', ib: (s, tt) => INGR_C27.fish(s, tt), tb: EV.cn_ket + 0.4 }),
    cam: () => [[S0.canton, 560, 1020, 0.22], [EV.cn_word, 560, 980, 0.22], [EV.cn_brine, 580, 1110, 0.28], [S1.canton, 620, 1130, 0.3]]
  };
  // ---------------------------------------------------------------- переход: крышка кувшина слетает, горлышко-овал растёт и открывает двор
  TRANS_IN.canton = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), rx = lerp(60, 1400, e * e), ry = rx * 0.55; drawBuf(A, 1, 540, 960);
    scr(() => { ctx.save(); ctx.beginPath(); ctx.ellipse(540, 960, rx, ry, 0, 0, 6.283); ctx.clip(); drawBuf(B, lerp(1.3, 1, e), 540, 960); ctx.restore(); pencil(ellPts(540, 960, rx, ry, 0, 0, 48), { w: 40 * (1 - e) + 10, col: '#8a5a3a', pass2: false }); pencil(ellPts(540, 960, rx + 20, ry + 14, 0, 0, 48), { w: 6, col: '#3a1a08', pass2: false });
      if (e < 0.6) { push(540 + e * 900, 960 - e * 1200, 2, e * 4); ell(0, 0, 120, 40, { wash: '#6a4a2a', washA: 1, w: 3 }); pop(); } });
  } };
})();
