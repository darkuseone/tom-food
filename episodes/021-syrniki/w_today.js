/* 021 — `today` + `button`: «Сегодня сырникам около 470 лет. Ты говоришь сырники — или творожники? / Подпишись — откусим ещё одно имя!»
   Та же дачная кухня, что в хуке (`kitchen21`), но солнечный день: синее небо и яблоня в окне, яркий пучок света на клеёнку, бабушка жарит новую партию,
   дед с газетой. Хиро-шот: горка сырников со сметаной, вишнёвым вареньем, мятой и сахарной пудрой, пар (герой), в верхний сырник воткнуты свечки-цифры
   «4·7·0», они загораются на «470». Том в полосатом халате с фартуком. По словам: «Сегодня» — бабушка ставит лопатку, день вспыхивает; «470 лет» —
   свечки «470» зажигаются, плашка «470 ЛЕТ»; «сырники» — Том поднимает в лапе флажок «СЫРНИКИ»; «творожники» — во второй лапе «ТВОРОЖНИКИ», Том
   переводит взгляд с одного на другой и в камеру. `button` — тот же кадр без склейки (WORLD.button = WORLD.today): Том макает сырник в сметану и
   откусывает на «откусим», «ПОДПИШИСЬ» всплывает поверх; камера плавно доезжает к кадру хука → петля. Переход В сцену: кружевная занавеска
   отдёргивается слева направо и открывает солнечную кухню. */
(() => {
  EV.td_day = LS('t1') + 0.05;
  EV.td_470 = wtw('t1', '470');
  EV.td_a = wtw('t1', 'сырники');
  EV.td_b = wtw('t1', 'творожники?');
  EV.bt_sub = LS('x1');
  EV.bt_bite = wtw('x1', 'откусим');
  SHAKES.push([EV.td_470, 0.15, 6], [EV.bt_bite, 0.15, 6]);
  KEYW.push('470', 'творожники?');
  const ev = { flip: EV.td_day + 0.6, shock: -9 };
  function extra(t) {                                                   // свечки «470» в горке сырников, плашка «470 ЛЕТ»; мёд, черешня, блики, свет
    const lit = t > EV.td_470;
    push(1080, 1500, 1); const hj = blob([[-50, 0], [-58, -80], [-46, -110], [46, -110], [58, -80], [50, 0]], { wash: '#e8a020', washA: 0.85, w: 2, col: '#8a5008', key: 22320 }); shadeG(hj.path, 58, 0, -50, 0, '#8a5008', 0.45); ell(-24, -60, 8, 26, { wash: '#fff0b0', washA: 0.6, line: false }); rect(-40, -70, 80, 30, { wash: '#f8f0d8', washA: 1, w: 1 }); txt('МЁД', 0, -50, 16, { font: 'Osw', col: '#8a5008' });
    push(30, -120, 1, 0.5); pencil([[0, 0], [0, -120]], { w: 6, col: '#a8743a', pass2: false }); for (let i = 0; i < 4; i++) ell(0, 10 + i * 10, 16 - i, 5, { wash: '#c8902a', washA: 1, w: 1, col: '#6a4008' }); pop(); const dr = (t * 0.6) % 1; ell(36, -100 + dr * 60, 5, 7, { wash: '#e8a020', washA: 1 - dr, line: false }); pop();
    push(640, 1600, 1); const bw = ell(0, 0, 90, 26, { wash: '#f4f0e8', washA: 1, w: 2, col: '#6a6a6a', key: 22321 }); shadeG(bw.path, 90, 0, -90, 0, '#a8a49a', 0.4); const r = rng(22322); for (let i = 0; i < 9; i++) { const x = -60 + r() * 120, y = -14 - r() * 20; ell(x, y, 14, 13, { wash: '#a80e2a', washA: 1, w: 1.2, col: '#5a0614' }); ell(x - 4, y - 4, 4, 3, { wash: '#ffb0c0', washA: 0.9, line: false }); pencil(spline([[x, y - 12], [x + 6, y - 30], [x + 14, y - 40]], false, 4), { w: 2, col: '#3a6a2a', pass2: false }); } pop();
    for (let i = 0; i < 6; i++) { const a = t * 2 + i; ell(800 + i * 30, 1460 + Math.sin(a) * 4, 4, 2, { wash: '#ffffff', washA: 0.5 + 0.5 * Math.sin(a * 1.7), line: false }); }
    if (t > S0.today) { const k = clamp((t - S0.today) / 0.8); lightPool(860, 1500, 420, 120, 'rgba(255,250,215,1)', 0.25 * k); castShadow(880, 1540, 300, 160, -0.65, 0.2); }
    for (let i = 0; i < 2; i++) { const k = (t * 0.25 + i * 0.5) % 1, x = 420 + Math.sin(k * 6.283 + i) * 140, y = 520 - k * 120; push(x, y, 0.9); const fl = Math.abs(Math.sin(t * 14 + i)); for (const sd of [-1, 1]) ell(sd * 12 * fl, 0, 12 * fl + 2, 16, { wash: i ? '#f4d040' : '#ffffff', washA: 0.9, w: 1, col: '#5a4a2a' }); pencil([[0, -10], [0, 10]], { w: 3, col: '#2a2a2a', pass2: false }); pop(); }
    [['4', 820], ['7', 880], ['0', 940]].forEach(([d, x], i) => { push(x, 1400 - (i === 1 ? 20 : 0), 1); rect(-14, -70, 28, 70, { wash: ['#f4d040', '#e8402a', '#4aa8d8'][i], washA: 1, w: 1.6, col: '#3a2a1a' }); txt(d, 0, -30, 34, { font: 'Osw', col: '#ffffff' }); pencil([[0, -70], [0, -86]], { w: 2, col: '#2a2a2a', pass2: false });
      if (lit) { const f = 1 + Math.sin(t * 17 + i) * 0.12; blob([[-8, -86], [0, -86 - 30 * f], [8, -86]], { wash: '#ffd050', washA: 1, line: false }); glow(0, -100, 34, 'rgba(255,190,80,1)', 0.35); } pop(); });
    if (t > EV.td_470) { const k = popK(t, EV.td_470, 0.45); push(880, 1180, k, 0.04); rect(-150, -50, 300, 100, { wash: '#c8241e', washA: 1, w: 3, col: '#5a0a04' }); txt('470 ЛЕТ', 0, 18, 64, { font: 'Osw', col: '#ffffff' }); pop(); }
  }
  const flags = (t, P) => {                                             // флажки «СЫРНИКИ» / «ТВОРОЖНИКИ» в лапах (А или Б?)
    if (t < EV.td_a - 0.1 || t > S1.today + 0.2) return; const ka = sm(clamp((t - EV.td_a + 0.1) / 0.3)), kb = sm(clamp((t - EV.td_b + 0.1) / 0.3));
    for (const [hx, lab, k, col] of [[120, 'СЫРНИКИ', ka, '#c8241e'], [-120, 'ТВОРОЖНИКИ', kb, '#2a5aa8']]) { if (k <= 0) continue; const x = P.x - hx * P.s, y = P.y - 300 * P.s; push(x, y, k, (hx > 0 ? 1 : -1) * Math.sin(t * 3) * 0.06); pencil([[0, 40], [0, -150]], { w: 6, col: '#8a5a2a', pass2: false }); pencil([[0, -150], [0, -220]], { w: 6, col: '#8a5a2a', pass2: false }); rect(-120, -220, 240, 70, { wash: '#f8f4e8', washA: 1, w: 3, col }); txt(lab, 0, -176, lab.length > 8 ? 30 : 38, { font: 'Osw', col }); pop(); }
  };
  function kid(t) {                                                     // внук с пустой тарелкой ждёт добавки; на «творожники» чешет затылок
    const q = t > EV.td_b; human(430, 1300, 0.78, t, { body: '#e8b030', bodyD: '#8a5a08', legs: '#2a4a8a', hair: '#c88a3a', face: q ? 'shock' : 'grin', armL: 'hold', armR: q ? 'up' : 'hold', look: 0.6, seed: 22330 });
    push(470, 1120, 1); ell(0, 0, 50, 12, { wash: '#f4f0e8', washA: 1, w: 1.4, col: '#6a6a6a' }); for (let i = 0; i < 10; i++) ell(-40 + i * 9, -2, 4, 2, { wash: '#2a5aa8', washA: 0.8, line: false }); pop();
  }
  function sun(t) {                                                     // передний план: солнечная пыль, ваза с васильками, лучи из окна
    rays(560, 200, 1.9, 0.5, 1400, 'rgba(255,250,220,1)', 0.08, 5, t); motes(26, [200, 300, 1100, 1500], '#fffbe0', t, 22340, { sp: 4, sz: 3, a: 0.55, wob: 6, tw: 1 });
    push(-120, 2080, 1.5); const v = blob([[-60, 0], [-70, -120], [-40, -200], [40, -200], [70, -120], [60, 0]], { wash: '#d8e8f4', washA: 0.7, w: 2.4, col: '#6a8aa8' }); shadeG(v.path, 70, 0, -60, 0, '#6a8aa8', 0.4);
    for (let i = 0; i < 7; i++) { const a = -1.9 + i * 0.22, L = 260 + (i % 3) * 40, x = Math.cos(a) * L, y = -200 + Math.sin(a) * L; pencil([[0, -200], [x, y]], { w: 4, col: '#3a7a3a', pass2: false }); for (let p = 0; p < 6; p++) ell(x + Math.cos(p) * 14, y + Math.sin(p) * 14, 9, 5, { wash: '#3a6ad8', washA: 1, w: 1, col: '#1a2a8a', rot: p }); ell(x, y, 5, 5, { wash: '#1a1a4a', washA: 1, line: false }); } pop();
  }
  WORLD.today = (t, u, cat) => { lay(4.2, () => { kid(t); }); kitchen21(t, { day: 1, ev, cat, afterTable: () => extra(t) }); lay(0.55, () => { sun(t); haze('#fff8e0', 0.03); }); };
  const base = (b, t) => Object.assign(b, { x: 640, y: 1590, s: 1.18, flip: 1 });
  DIR.today = {
    outfit: 'robeS', light: { side: -1, rim: '#fff4d0' }, grade: ['#ffd080', 0.06],
    act: () => [[S0.today, 'grin'], [EV.td_470, 'proud'], [EV.td_a, 'smug'], [EV.td_b, 'suspicious'], [EV.td_b + 0.7, 'wink']],
    pose: (t, u, b) => { const ab = t > EV.td_a - 0.1; return Object.assign(base(b, t), { look: t < EV.td_470 ? [0.3, -0.2] : t < EV.td_a ? [0.5, 0.3] : t < EV.td_b ? [0.7, -0.4] : t < EV.td_b + 0.6 ? [-0.7, -0.4] : [0, 0], hand: ab ? [200, -330] : [170, -300], handF: ab ? [-200, -330] : [-100, -230], prop: ab ? undefined : 'syrnikP', point: !ab && t > EV.td_470 ? 1 : undefined }); },
    afterCat: (t, u, P) => flags(t, P),
    cam: () => [[S0.today, 720, 1180, 0.24], [EV.td_470, 780, 1160, 0.28], [EV.td_a, 720, 1120, 0.28], [EV.td_b, 720, 1120, 0.28], [S1.today, 720, 1130, 0.28]]
  };
  WORLD.button = (t, u, cat) => WORLD.today(t, u, cat);
  DIR.button = {
    outfit: 'robeS', light: { side: -1, rim: '#fff4d0' }, grade: ['#ffd080', 0.06],
    act: () => [[S0.button, 'grin'], [EV.bt_bite - 0.2, 'smug'], [EV.bt_bite + 0.1, 'laugh'], [DUR - 0.8, 'suspicious']],
    pose: (t, u, b) => { const bite = t > EV.bt_bite; return Object.assign(base(b, t), { look: bite ? [0.2, -0.1] : [0, 0], hand: bite ? [70, -310] : [190, -300], handF: [-100, -230], prop: bite ? 'syrnikBiteP' : 'syrnikP', tailUp: bite, squash: bite && t < EV.bt_bite + 0.12 ? 0.1 : 0 }); },
    afterCat: (t, u, P) => { if (t > EV.bt_bite && t < EV.bt_bite + 1.2) { steamWisps(P.x - 70 * P.s, P.y - 380 * P.s, 0.6, t, 3, 22301, 0.45 * (1 - clamp((t - EV.bt_bite) / 1.2))); crumbs(P.x - 70 * P.s, P.y - 360 * P.s, t, EV.bt_bite, 10, 22302, SY.crust); } },
    cam: () => [[S0.button, 720, 1130, 0.28], [EV.bt_bite, 690, 1140, 0.3], [DUR - 0.5, 640, 1150, 0.34], [DUR, 640, 1150, 0.34]]
  };
  TRANS_IN.today = { a: 0.2, b: 0.5, runA: 0.6, fx(k, t, A, B) {          // кружевная занавеска отдёргивается слева направо
    const e = sm(k), cx = lerp(-80, 1180, e); drawBuf(B, 1, 540, 960);
    scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(Math.max(0, cx), 0, 1100, 1920); ctx.clip(); drawBuf(A, 1, 540, 960); ctx.restore();
      for (let i = 0; i < 3; i++) { const x = cx - 60 + i * 50; const c = blob([[x - 90, -20], [x + 90, -20], [x + 60 + Math.sin(t * 6 + i) * 30, 960], [x + 90, 1940], [x - 90, 1940]], { wash: '#fbf6ea', washA: 0.85, w: 2, col: '#c8bca4' }); for (let q = 0; q < 9; q++) ell(x, 60 + q * 220, 30, 30, { wash: 'rgba(0,0,0,0)', washA: 0, w: 2, col: '#d8ccb4' }); } });
  } };
})();
