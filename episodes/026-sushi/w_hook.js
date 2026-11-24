/* 026 — `hook`: «Кислый рис! Я ем суши, а повар нарочно льёт туда уксус. Зачем? / Откусим историю!» ВАУ-КАДР: макро — нигири с лососем на весь
   кадр (рисинки размером с палец, блик скользит по жирным полоскам, капля соуса), затем «отъезд»: нигири уменьшается и ложится в лапу Тома у
   стойки ночного суши-бара. Бар: стойка из светлого кипариса, витрина-нэта с рыбой, повар-итамаэ в белом с повязкой, кадка-хангири с паром,
   красные фонари-тётины, деревянные таблички меню 寿司 на стене, полка сакэ, аквариум (холодный второй свет), за норэн — дождливая улица.
   По словам: «Кислый рис!» — макро нигири; «суши» — отъезд, Том с нигири; «повар нарочно льёт» — итамаэ поднимает черпак; «уксус.» — струя
   уксуса в кадку, пар, Том морщится; «Зачем?» — «?» над кадкой; «Откусим» — Том кусает, прищур «кисло»; «историю!» — нырок в рисинку (переход paddy). */
(() => {
  EV.hk_pull = wtw('h1', 'суши,');
  EV.hk_cook = wtw('h1', 'повар');
  EV.hk_vin = wtw('h1', 'уксус.');
  EV.hk_q = wtw('h1', 'Зачем?');
  EV.hk_bite = wtw('h2', 'Откусим');
  SHAKES.push([EV.hk_vin, 0.15, 6], [EV.hk_bite + 0.05, 0.14, 6]);
  KEYW.push('уксус.');
  const pk = t => sm(clamp((t - EV.hk_pull + 0.5) / 1.1));                // 0 — макро, 1 — нигири в лапе

  function street(t) {                                                     // за норэн и окном: ночная улица в дожде, вывески, фонари
    vgrad(-700, 900, ['#0e1430', '#1a2448', '#2a2a4a']);
    for (let i = 0; i < 6; i++) { const x = -500 + i * 330; rect(x, -300 - (i % 3) * 90, 260, 1200, { wash: ['#1a1a30', '#22223a', '#181828'][i % 3], washA: 1, w: 1.4, col: '#0a0a18' }); windows(x + 20, -260 - (i % 3) * 90, 220, 600, 3, 6, 26500 + i, 0.5, '#ffc870', '#80d0ff', 0.7); }
    for (let i = 0; i < 4; i++) { const x = -300 + i * 420; rect(x, -100, 60, 360, { wash: ['#e8343a', '#f0a030', '#30a0e0', '#e8e040'][i], washA: 0.9, w: 1.4 }); for (let j = 0; j < 4; j++) txt(['寿', '酒', '鮨', '屋'][(i + j) % 4], x + 30, -40 + j * 84, 46, { font: 'Osw', col: '#fff8e8' }); glow(x + 30, 80, 160, ['rgba(255,80,80,1)', 'rgba(255,170,60,1)', 'rgba(80,170,255,1)', 'rgba(255,240,90,1)'][i], 0.16); }
    const r = rng(hsh(FRAME, 26510)); for (let i = 0; i < 40; i++) { const x = -600 + r() * 2200, y = -600 + r() * 1400; pencil([[x, y], [x - 6, y + 40]], { w: 1.4, col: '#a8c0ff', a: 0.4, pass2: false }); }
  }
  function wall(t) {                                                       // стена бара: кипарисовые доски, таблички меню, полка сакэ, фонари, аквариум, норэн
    vgrad(-600, 1500, ['#2a1a10', '#4a2e18', '#5a3a20']);
    for (let i = 0; i < 18; i++) { const p = rect(-700 + i * 140, -600, 138, 2100, { wash: i % 2 ? '#7a5030' : '#6a4428', washA: 1, w: 1.2, col: '#2a1408', key: 26520 + i }); hatch(p.path, p.bb, { gap: 11, a: 0.12, col: '#2a1408', ang: 1.52, key: 26540 + i }); }
    push(0, 0, 1); for (const [x, y, l] of [[150, 170, '寿'], [960, 150, '司'], [560, 120, '酒']]) chochin(x, y, 1.15, t, { label: l, key: 26600 + x }); pop();
    push(330, 680, 1); const win = rect(-260, -420, 520, 640, { wash: '#1a2448', washA: 1, w: 10, col: '#1a0a04', key: 26560 }); ctx.save(); ctx.clip(win.path); push(120, -180, 1); street(t); pop(); ctx.restore();
    for (let i = 1; i < 4; i++) pencil([[-260 + i * 130, -420], [-260 + i * 130, 220]], { w: 5, col: '#1a0a04', pass2: false }); pencil([[-260, -100], [260, -100]], { w: 5, col: '#1a0a04', pass2: false });
    noren(-270, -430, 540, 200, '#1a2a5a', t, 'すし', { key: 26562, n: 4 }); pop();
    const menu = ['鮪', '鮭', '海老', '玉子', '穴子', 'いか', 'うに', '鯛'], pr = ['¥300', '¥250', '¥200', '¥120', '¥280', '¥180', '¥500', '¥320'];
    for (let i = 0; i < 8; i++) { const x = 620 + i * 60, y = 300 + (i % 2) * 8; rect(x - 26, y, 52, 190, { wash: '#f0e0b8', washA: 1, w: 1.6, col: '#4a3010', key: 26570 + i }); txt(menu[i], x, y + 70, menu[i].length > 1 ? 24 : 40, { font: 'Osw', col: '#1a0a04' }); txt(pr[i], x, y + 170, 20, { font: 'Hand', col: '#a8241e' }); }
    push(820, 760, 0.8); rect(-330, 0, 660, 22, { wash: '#4a2a14', washA: 1, w: 2 }); for (let i = 0; i < 9; i++) { const x = -300 + i * 72, h = 150 + (i % 3) * 30, c = ['#2a5a3a', '#c8d8e0', '#6a2a1a', '#e8e0c0'][i % 4]; blob([[x - 20, 0], [x - 22, -h * 0.6], [x - 8, -h * 0.8], [x - 8, -h], [x + 8, -h], [x + 8, -h * 0.8], [x + 22, -h * 0.6], [x + 20, 0]], { wash: c, washA: 1, w: 1.6, col: '#1a0a04', key: 26580 + i }); rect(x - 16, -h * 0.5, 32, 44, { wash: '#f8f0dc', washA: 1, w: 1 }); txt(['酒', '米', '辛', '吟'][i % 4], x, -h * 0.5 + 34, 26, { font: 'Osw', col: '#1a0a04' }); } pop();
    push(1010, 1190, 0.8); const aq = rect(-200, -300, 400, 300, { wash: '#3a8ab8', washA: 0.85, w: 4, col: '#1a2a3a', key: 26590 }); ctx.save(); ctx.clip(aq.path); for (let i = 0; i < 5; i++) { const fx = ((t * 40 + i * 90) % 520) - 260; fish(fx, -220 + i * 50, 0.5, 0, { key: 26591 + i }); } motes(10, [-200, -300, 200, 0], '#e8f8ff', t, 26599, { sp: -20, sz: 4, a: 0.6 }); ctx.restore(); glow(0, -150, 260, 'rgba(90,180,255,1)', 0.22); pop();
    pencil([[-700, -620], [1700, -620]], { w: 26, col: '#1a0a04', pass2: false });
  }
  function chef(t) {                                                       // итамаэ за стойкой: черпак уксуса, кадка с паром
    const pour = t > EV.hk_cook && t < EV.hk_bite;
    human(250, 1300, 1.2, t, { body: '#f6f2ea', legs: '#2a2a3a', hair: '#1a1410', face: t > EV.hk_vin && t < EV.hk_q + 0.4 ? 'grin' : 'calm', armL: 'hold', armR: pour ? 'up' : 'hold', look: 0.6, seed: 26610, long: 1, trim: '#2a3a7a' });
    jpHat(250, 1300, 1.2, 'hachi', '#f4f0e8'); obi(250, 1300, 1.2, '#2a3a7a');
    if (pour) { const k = sm(clamp((t - EV.hk_cook) / 0.6)); push(330, 900 - k * 40, 1, -0.3 - k * 0.6); pencil([[0, 0], [0, -200]], { w: 9, col: '#c89a5a', pass2: false }); blob([[-40, 0], [-36, 34], [0, 46], [36, 34], [40, 0]], { wash: '#c89a5a', washA: 1, w: 2, col: '#5a3a1a' }); pop();
      if (t > EV.hk_vin - 0.15) { const q = clamp((t - EV.hk_vin + 0.15) / 0.3); for (let i = 0; i < 8; i++) { const y = 950 + i * 40 * q; ell(360 + Math.sin(i + t * 9) * 5, y, 7, 14, { wash: '#f0c060', washA: 0.85, line: false }); } } }
    hangiri(380, 1340, 0.62, t, { vin: t > EV.hk_vin ? clamp((t - EV.hk_vin) / 0.5) : 0, key: 26620 });
    if (t > EV.hk_q && t < EV.hk_bite) { push(400, 1090, popK(t, EV.hk_q, 0.35)); txt('?', 0, 0, 130, { font: 'Osw', col: '#ffe070' }); pop(); }
    human(1060, 1300, 1.05, t, { body: '#3a3a4a', legs: '#2a2a2a', hair: '#2a1a10', face: t > EV.hk_bite ? 'grin' : 'smile', armL: 'hold', armR: 'hold', look: -0.5, seed: 26630, flip: -1 });
  }
  function counter(t) {                                                    // стойка, витрина-нэта, блюдца, палочки, имбирь (после cat — перед Томом)
    const tb = rect(-600, 1440, 2400, 600, { wash: '#e8c890', washA: 1, w: 3, col: '#6a4a20', key: 26640 }); shadeG(tb.path, 0, 1440, 0, 1900, '#a8804a', 0.45); for (let i = 0; i < 10; i++) pencil(spline([[-600, 1470 + i * 44], [500, 1476 + i * 44], [1800, 1468 + i * 44]], false, 6), { w: 1.4, col: '#b8905a', a: 0.4, pass2: false });
    pencil([[-600, 1444], [1800, 1444]], { w: 6, col: '#fff4d8', a: 0.5, pass2: false });
    push(190, 1440, 0.75); const gc = rect(-260, -170, 520, 170, { wash: '#d8eef8', washA: 0.35, w: 3, col: '#5a6a7a', key: 26650 }); rect(-250, -30, 500, 30, { wash: '#e8f0f0', washA: 1, w: 1.4 }); for (let i = 0; i < 5; i++) { ell(-200 + i * 100, -40, 44, 14, { wash: '#a8d8b8', washA: 1, line: false }); blob([[-236 + i * 100, -40], [-226 + i * 100, -80], [-170 + i * 100, -84], [-164 + i * 100, -40]], { wash: [SU.salmon, SU.tuna, '#f8f0e8', SU.toro, '#f0a040'][i], washA: 1, w: 1.6, col: '#5a2a1a', key: 26651 + i }); } pencil([[-250, -160], [200, -40]], { w: 5, col: '#ffffff', a: 0.35, pass2: false }); pop();
    for (const [x, y] of [[880, 1480], [160, 1500]]) soyDish(x, y, 1);
    chopsticks(1020, 1530, 1, -0.1); push(300, 1500, 1); ell(0, 0, 50, 14, { wash: '#2a2a2a', washA: 1, w: 1.6 }); for (let i = 0; i < 5; i++) ell(-20 + i * 10, -6, 12, 6, { wash: '#f8c0b0', washA: 1, w: 1, col: '#c87a6a' }); pop();
    push(1180, 1470, 1); blob([[-30, 0], [-36, -90], [-14, -120], [14, -120], [36, -90], [30, 0]], { wash: '#e8e0d0', washA: 1, w: 2, col: '#5a5a5a' }); txt('茶', 0, -48, 40, { font: 'Osw', col: '#2a5a3a' }); pop();
    castShadow(640, 1460, 300, 90, 0.5, 0.25);
  }
  function macro(t) {                                                      // ВАУ-макро: нигири на весь кадр, рисинки-брёвна, блик, потом «отъезд» в лапу
    const k = pk(t); if (k >= 1) return; const sc = lerp(4.2, 0.5, k), x = lerp(540, 470, k), y = lerp(1300, 1080, k), a = 1 - sm(clamp((k - 0.75) / 0.25));
    scr(() => { ctx.save(); ctx.globalAlpha = (1 - k) * 0.9; vgrad(0, 1920, ['#1a0e08', '#3a2010', '#1a0e08']); ctx.restore();
      ctx.save(); ctx.globalAlpha = a; nigiri(x, y, sc, t, { kind: 'salmon', key: 26660 }); ctx.restore();
      if (k < 0.3) { const g = (t * 0.6) % 1; ell(lerp(140, 940, g), y - 480 * sc / 4.2, 60, 16, { wash: '#ffffff', washA: 0.35 * (1 - k * 3), line: false }); } });
  }
  WORLD.hook = (t, u, cat) => {
    lay(12, () => { wall(t); haze('#ffb878', 0.04); });
    lay(2.6, () => { chef(t); lightPool(360, 1300, 520, 120, 'rgba(255,200,130,1)', 0.3); });
    lay(1, () => { lightPool(640, 1470, 700, 130, 'rgba(255,210,150,1)', 0.35); cat(); counter(t); });
    lay(0.7, () => { push(-160, 260, 1.4); for (let i = 0; i < 3; i++) chochin(i * 130, -40 * i, 1, t, { col: '#c8241e', label: '', lit: false, key: 26670 + i }); pop(); push(1250, 1900, 1.3); hangiri(0, 0, 0.8, t, { steam: 1, key: 26680 }); pop();
      motes(14, [-200, 400, 1300, 1500], '#fff0d0', t, 26690, { sp: -8, sz: 3, a: 0.35, wob: 3 }); moodDark(560, 1000, 520, 1500, '#0a0818', 0.45); });
    macro(t);
  };
  DIR.hook = {
    outfit: 'hoodS', light: { side: -1, rim: '#ffd0a0' }, grade: ['#ffa060', 0.07],
    act: () => [[0, 'awe'], [EV.hk_pull, 'grin'], [EV.hk_cook, 'suspicious'], [EV.hk_vin, 'shock'], [EV.hk_q, 'sideeye'], [EV.hk_bite, 'smug'], [EV.hk_bite + 0.25, 'shock']],
    pose: (t, u, b) => { const bite = t > EV.hk_bite + 0.15, k = pk(t); return Object.assign(b, { x: 640, y: 1600, s: 1.16, flip: true, look: t > EV.hk_cook && t < EV.hk_bite ? [-0.9, -0.2] : [-0.2, 0.3],
      hand: k < 1 ? [190, -200] : bite ? [120, -240] : [170, -280], handF: [-80, -200], prop: k > 0.9 ? 'nigiriP' : undefined, propAng: -0.1, squint: bite || (t > EV.hk_vin && t < EV.hk_vin + 0.8), tailUp: bite,
      squash: b.squash + (bite && t < EV.hk_bite + 0.3 ? 0.08 : 0) }); },
    cam: () => [[0, 560, 1060, 0.24], [EV.hk_pull + 0.6, 540, 1080, 0.26], [EV.hk_vin, 500, 1080, 0.28], [EV.hk_bite, 600, 1160, 0.32], [S1.hook, 620, 1180, 0.36]]
  };
})();
