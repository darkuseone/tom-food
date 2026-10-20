/* 001 — `hook`: «Юлий Цезарь этот салат никогда не пробовал!» Римский пир: фрески помпейского красного, колонны, лампы, гости на ложах.
   0,0 с — камера летит от тарелки Цезаря к Тому в тоге; Том тянется вилкой — на «никогда» рука официанта из будущего выдёргивает тарелку, вилка втыкается в стол, венок съезжает.
   «Откусим историю!» — Том подбирает гренку, хрум — кадр трескается гренкой (переход в Тихуану — в w_tijuana.js). */
(() => {
  EV.hk_never = wtw('h1', 'никогда');
  EV.hk_yank = EV.hk_never - 0.12;
  EV.hk_stab = EV.hk_never + 0.12;
  EV.hk_grab = LS('h2') + 0.05;
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_stab, 0.25, 12], [EV.hk_bite, 0.22, 10]);
  KEYW.push('никогда');

  function wall(t) {                                                   // помпейская стена: красные панели, охра, гирлянды, фриз
    vgrad(-300, 1700, ['#5a1a10', '#8e2a1a', '#6a2414']);
    for (let i = -2; i < 6; i++) { const x = -60 + i * 260; const p = rect(x + 20, 360, 220, 760, { wash: '#a8322a', washA: 1, w: 2.4, col: '#3a0e08', key: 1100 + i }); shadeG(p.path, x + 240, 0, x + 20, 0, '#5a1208', 0.45);
      rect(x + 40, 380, 180, 720, { line: false, wash: '#b8402e', washA: 0.5 }); pencil([[x + 46, 386], [x + 214, 386], [x + 214, 1094], [x + 46, 1094], [x + 46, 386]], { w: 2, col: '#e8b53a', a: 0.7, pass2: false });
      if (i % 2) { push(x + 130, 700, 1); for (let k = 0; k < 7; k++) { const a = k / 6 * Math.PI; pencil([[0, 0], [Math.cos(a) * 46, -Math.sin(a) * 60]], { w: 3, col: '#2e4a1a', a: 0.7, pass2: false }); ell(Math.cos(a) * 46, -Math.sin(a) * 60, 8, 12, { wash: '#4a6a24', washA: 1, w: 1.2, col: '#1e2a0a', rot: a }); } ell(0, 30, 22, 30, { wash: '#e8b53a', washA: 0.9, w: 1.6, col: '#5a3a08' }); pop(); }
      else { push(x + 130, 720, 1); blob([[-30, 60], [-24, -10], [0, -40], [24, -10], [30, 60]], { wash: '#e8d8b0', washA: 0.85, w: 1.6, col: '#5a3a1a' }); ell(0, -56, 16, 18, { wash: '#e8d8b0', washA: 0.85, w: 1.6, col: '#5a3a1a' }); pop(); } }
    rect(-300, 300, 1700, 60, { wash: '#1a1a14', washA: 1, w: 2, col: '#000' }); for (let i = 0; i < 40; i++) { const x = -280 + i * 44; poly([[x, 312], [x + 22, 330], [x, 348], [x - 22, 330]], { wash: '#e8b53a', washA: 0.8, line: false }); }
    rect(-300, 1100, 1700, 300, { wash: '#2a1a12', washA: 1, w: 2, col: '#000' }); for (let i = 0; i < 26; i++) rect(-300 + i * 70, 1110, 60, 40, { wash: i % 2 ? '#3a2418' : '#4a3020', washA: 1, line: false });
  }
  function arch(t) {                                                   // проём: вечерний Рим, Колизей вдали
    const a = shape(spline([[700, 1100], [700, 560], [760, 470], [850, 440], [940, 470], [1000, 560], [1000, 1100]], true, 6), { wash: '#f0a860', washA: 1, w: 3, col: '#2a0e08', key: 1120 });
    ctx.save(); ctx.clip(a.path); vgrad(440, 1100, ['#f6c070', '#e88a4a', '#a8463a']); glow(900, 900, 200, 'rgba(255,230,150,1)', 0.7);
    for (let k = 0; k < 4; k++) rect(740 + k * 30, 860 - k * 20, 140, 240, { wash: '#7a3a2a', washA: 0.8, w: 1.2, col: '#3a1408' }); blob([[730, 1000], [760, 900], [900, 880], [990, 920], [990, 1000]], { wash: '#8a4a32', washA: 0.9, w: 1.4, col: '#3a1408' });
    for (let r = 0; r < 3; r++) for (let k = 0; k < 6; k++) pencil(spline([[760 + k * 36, 960 - r * 34], [776 + k * 36, 942 - r * 34], [792 + k * 36, 960 - r * 34]], false, 4), { w: 1.8, col: '#3a1408', a: 0.7, pass2: false });
    for (let i = 0; i < 3; i++) { const x = ((t * 30 + i * 90) % 300) + 720; pencil([[x - 8, 600 + i * 20], [x, 604 + i * 20], [x + 8, 600 + i * 20]], { w: 2, col: '#3a1408', pass2: false }); } ctx.restore();
  }
  function column(x, h, k) {                                           // каннелированная колонна с капителью
    const c = rect(x - 46, 300, 92, h, { wash: '#efe6d2', washA: 1, w: 2.6, col: '#4a3a2a', key: 1130 + k }); shadeG(c.path, x + 46, 0, x - 20, 0, '#a89a7a', 0.6);
    for (let i = -3; i <= 3; i++) pencil([[x + i * 12, 330], [x + i * 12, 300 + h - 20]], { w: 1.6, col: '#9a8a6a', a: 0.6, pass2: false });
    rect(x - 66, 280, 132, 34, { wash: '#efe6d2', washA: 1, w: 2.4, col: '#4a3a2a' }); for (const sd of [-1, 1]) ell(x + sd * 56, 300, 16, 16, { wash: '#efe6d2', washA: 1, w: 2, col: '#4a3a2a' }); rect(x - 60, 300 + h - 20, 120, 30, { wash: '#e0d6c0', washA: 1, w: 2.4, col: '#4a3a2a' });
  }
  function drape(x, t, k) { const sw = Math.sin(t * 1.4 + k) * 10; const d = shape(spline([[x - 120, 250], [x + 120, 250], [x + 110 + sw, 700], [x + 60, 760], [x, 640], [x - 60, 760], [x - 110 + sw, 700]], true, 6), { wash: '#8a1a2a', washA: 1, w: 2.6, col: '#2a0610', key: 1140 + k });
    shadeG(d.path, x + 120, 0, x - 60, 0, '#3a0610', 0.55); for (let i = -2; i <= 2; i++) pencil([[x + i * 40, 260], [x + i * 44 + sw * 0.5, 700]], { w: 2, col: '#c04050', a: 0.5, pass2: false }); pencil([[x - 120, 250], [x + 120, 250]], { w: 10, col: '#d6a842' }); }
  function lamp(x, y, t, k) { pencil([[x, y], [x, y + 380]], { w: 6, col: '#8a6a2a' }); for (const sd of [-1, 1]) pencil([[x, y + 380], [x + sd * 40, y + 420]], { w: 5, col: '#8a6a2a' }); const b = blob([[x - 40, y], [x - 30, y - 22], [x + 30, y - 22], [x + 50, y - 8], [x + 30, y + 10], [x - 30, y + 10]], { wash: '#c99636', washA: 1, w: 2, col: '#4a2a08' });
    const f = flick(t, k); blob([[x + 40, y - 14], [x + 34, y - 50 * f], [x + 46, y - 80 * f], [x + 56, y - 46 * f], [x + 52, y - 14]], { wash: '#ffc04a', washA: 1, line: false }); glow(x + 46, y - 40, 180 * f, 'rgba(255,170,70,1)', 0.55); }
  function guest(x, y, s, t, o) {                                      // гость на ложе: ложе + полулежащий римлянин
    push(x, y, s); const c = rect(-170, -60, 340, 70, { wash: '#7a4a22', washA: 1, w: 2.4, col: '#2a1408' }); rect(-180, -86, 360, 34, { wash: o.cloth, washA: 1, w: 2.2, col: '#2a1408', shade: { gap: 6, a: 0.25, col: '#000', ang: 1 } });
    ell(-150, -100, 40, 26, { wash: '#d6a842', washA: 1, w: 2, col: '#5a3a08' }); for (const lx of [-150, 150]) pencil([[lx, 10], [lx, 70]], { w: 10, col: '#4a2a12' }); pop();
    human(x + 20 * s, y - 60 * s, s * 0.9, t, { body: o.body, legs: o.body, long: 1, hair: o.hair, hat: o.hat, hatCol: '#5a7a24', face: t > EV.hk_stab ? (o.react || 'shock') : 'smile', armL: 'down', armR: o.arm, prop: o.prop, look: o.look, flip: o.flip, seed: o.seed, beard: o.beard });
  }
  function servant(t) { const yank = clamp((t - EV.hk_yank) / 0.25); if (yank <= 0 || t > EV.hk_grab + 0.8) return; const x = lerp(1180, 820, sm(yank)) + (t > EV.hk_never + 0.15 ? (t - EV.hk_never - 0.15) * 1800 : 0);
    push(x, 1370, 1); shape(tubeP([[400, -40], [200, -10], [40, 0]], 70, 54), { wash: '#f6f2e8', washA: 1, w: 2.6, col: '#2a2a2a' }); pencil([[150, -40], [150, 30]], { w: 3, col: '#c8a040', pass2: false });
    ell(20, 0, 34, 30, { wash: '#e2b48e', washA: 1, w: 2.2, col: '#2a1a0a' }); plateCaesar(-150, 10, 0.75, t); pop();
    if (t > EV.hk_never - 0.1 && t < EV.hk_never + 0.4) for (let i = 0; i < 8; i++) pencil([[x + 260 + i * 30, 1300 + i * 16], [x + 520 + i * 30, 1300 + i * 16]], { w: 3, col: '#fff6e0', a: 0.6, pass2: false });
  }
  function table(t) {                                                  // стол пира: скатерть, серебро, виноград, хлеб, кубки
    const tb = rect(-200, 1440, 1480, 700, { wash: '#efe2c4', washA: 1, w: 3, col: '#3a2a14', key: 1150 }); shadeG(tb.path, 0, 1800, 0, 1440, '#a08a62', 0.5); rect(-200, 1440, 1480, 26, { wash: '#f8eed6', washA: 1, w: 2, col: '#3a2a14' });
    for (let i = 0; i < 30; i++) { const x = -190 + i * 52; pencil([[x, 1560], [x, 1600]], { w: 3, col: '#c99636', pass2: false }); ell(x, 1606, 6, 9, { wash: '#d6a842', washA: 1, w: 1.2, col: '#5a3a08' }); }
    for (let i = 0; i < 40; i++) { const x = -190 + i * 38; poly([[x, 1520], [x + 19, 1540], [x, 1560], [x - 19, 1540]], { wash: i % 2 ? '#d9482b' : '#e8b53a', washA: 0.85, w: 1, col: '#5a1a08', a: 0.5 }); }
    
    for (const [x, y] of [[90, 1470], [960, 1476]]) { push(x, y, 1); for (let k = 0; k < 22; k++) ell((k % 6) * 20 - 50 + Math.floor(k / 6) * 8, -Math.floor(k / 6) * 20 - 10, 13, 13, { wash: k % 2 ? '#6a2a5a' : '#8a3a6a', washA: 1, w: 1.2, col: '#2a0a20' }); pencil([[0, -60], [6, -80]], { w: 3, col: '#4a3a1a', pass2: false }); pop(); }
    for (const x of [230, 820]) { push(x, 1470, 1); poly([[-24, -80], [24, -80], [10, -30], [-10, -30]], { wash: '#d6a842', washA: 1, w: 2, col: '#5a3a08' }); pencil([[0, -30], [0, 0]], { w: 6, col: '#c99636' }); ell(0, 0, 22, 6, { wash: '#c99636', washA: 1, w: 1.6 }); pop(); }
    blob([[290, 1500], [300, 1450], [360, 1430], [420, 1450], [430, 1500]], { wash: '#c8883a', washA: 1, w: 2.2, col: '#4a2408' }); for (let k = 0; k < 4; k++) pencil([[310 + k * 30, 1450], [330 + k * 30, 1440]], { w: 2, col: '#7a3a08', a: 0.6, pass2: false });
    ell(720, 1500, 60, 16, { wash: '#e8e0d0', washA: 1, w: 2, col: '#5a4a3a' }); for (let k = 0; k < 9; k++) ell(690 + (k % 5) * 14, 1490 - Math.floor(k / 5) * 10, 7, 9, { wash: k % 2 ? '#3a4a1a' : '#5a6a2a', washA: 1, w: 1, col: '#1a2008' });
    if (t < EV.hk_yank) { const x = 540; push(x, 1500, 1); ell(0, 0, 250, 60, { wash: '#c8ccd0', washA: 1, w: 2.4, col: '#4a5058' }); glow(-120, -14, 60, 'rgba(255,255,255,1)', 0.6); pop(); plateCaesar(x, 1480, 0.95, t); }
    else { const k = clamp((t - EV.hk_yank) / 0.2); ctx.save(); ctx.globalAlpha = 0.08 + 0.2 * (1 - k); ell(540, 1500, 200, 44, { wash: '#7a6a4a', washA: 1, line: false }); ctx.restore(); }
    if (t > EV.hk_stab) { push(560, 1500, 1, 0.08); pencil([[0, 0], [10, -140]], { w: 8, col: '#c8ccd0' }); rect(-6, -10, 34, 26, { wash: '#c8ccd0', washA: 1, w: 2 }); pop(); for (let i = 0; i < 6; i++) pencil([[540 + i * 8 - 20, 1510], [520 + i * 14 - 40, 1526 + (i % 2) * 6]], { w: 2, col: '#5a3a14', a: 0.6, pass2: false }); }
    if (t > EV.hk_never && t < EV.hk_grab) crouton(420, 1480, 0.9, 0.3, { key: 1160 });
  }
  WORLD.hook = (t, u, cat) => {
    lay(26, () => { wall(t); arch(t); });
    lay(12, () => { column(140, 820, 1); column(1240, 820, 2); drape(540, t, 1); lamp(320, 760, t, 1); lamp(1120, 760, t, 2); haze('#ffb070', 0.05); });
    lay(4.5, () => { guest(140, 1320, 1.0, t, { cloth: '#2a4a8a', body: '#efe6d2', hair: '#3a2a1a', hat: 'crown', arm: 'up', prop: 'candle', look: 0.6, seed: 31, beard: 'short' });
      guest(980, 1310, 1.0, t, { cloth: '#6a2a5a', body: '#e8d0a0', hair: '#1a1a1a', arm: 'point', look: -0.6, flip: -1, seed: 32, react: 'grin' }); human(560, 1250, 0.72, t, { body: '#c8b48a', legs: '#c8b48a', long: 1, hair: '#2a1a0a', face: t > EV.hk_stab ? 'shock' : 'calm', armL: 'hold', armR: 'up', prop: 'scroll', seed: 34 });
      human(760, 1240, 0.7, t, { body: '#5a7a3a', legs: '#5a7a3a', long: 1, hair: '#6a4a2a', face: 'smile', armL: 'hold', armR: 'swing', seed: 35, flip: -1 }); haze('#ffa060', 0.06); });
    lay(1, () => { cat(); });
    lay(0.92, () => { table(t); servant(t); crumbs(600, 1150, t, EV.hk_bite, 22, 3); });
    lay(0.55, () => { for (const x of [-60, 1160]) { pencil([[x, 300], [x + 20, 2000]], { w: 30, col: '#3a0a10', a: 0.9 }); } glow(540, 900, 600, 'rgba(255,140,60,1)', 0.08); });
  };
  DIR.hook = {
    outfit: 'toga', light: { side: -1, rim: '#ffc070' }, grade: ['#ff9a50', 0.12],
    act: () => [[0, 'awe'], [0.6, 'grin'], [EV.hk_yank, 'shock'], [EV.hk_stab + 0.3, 'annoyed'], [EV.hk_grab, 'suspicious'], [EV.hk_bite - 0.2, 'smug'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { const reach = t < EV.hk_stab, grab = t > EV.hk_grab, slip = clamp((t - EV.hk_stab) / 0.3);
      return Object.assign(b, { x: 560, y: 1590, s: 1.22, look: reach ? [0, 0.6] : grab ? [0.4, -0.2] : [0.6, 0.2], tilt: t > EV.hk_stab && t < EV.hk_stab + 0.3 ? 0.06 : 0,
        hand: grab ? (t > EV.hk_bite - 0.25 ? [40, -330] : [80, -230]) : reach ? [60 + sm(clamp(u / 2)) * 10, -150 + sm(clamp(u / 1.5)) * 60] : [10, -100], prop: grab ? 'croutonP' : reach ? 'fork' : undefined, propAng: reach ? 2.9 : 0,
        laurelSlip: slip, squash: b.squash + (t > EV.hk_stab && t < EV.hk_stab + 0.12 ? 0.12 : 0), tailUp: t < EV.hk_yank }); },
    cam: () => [[0, 540, 1420, 0.42], [0.55, 560, 1180, 0.08, 'x'], [EV.hk_never, 560, 1150, 0.12], [EV.hk_stab, 560, 1220, 0.2], [EV.hk_grab, 600, 1050, 0.12], [EV.hk_bite, 620, 880, 0.34], [S1.hook, 640, 820, 0.42]]
  };
})();
