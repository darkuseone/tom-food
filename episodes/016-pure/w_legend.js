/* 016 — `legend` ★: «Разгадка — легенда: днём поле Пармантье стерегли солдаты, а ночью картошку крали сами парижане!» Поле на равнине Саблон: сначала
   день — солдаты в треуголках на посту, табличка DÉFENDU, флаг; на «ночью» небо темнеет, всходит луна и звёзды, солдаты уходят в будку и храпят, из-за кустов
   с фонарями крадутся парижане — дама в чепце, подмастерье, булочник — копают кусты и уносят мешки с картошкой; вдали огоньки Парижа. Том-парижанин с мешком.
   Рамка-страница «легенды» обрамляет кадр в начале. По словам: «легенда» — кадр в рамке сказочной книги с буквицей; «днём» — солнце, солдаты салютуют; «ночью» —
   небо быстро ночное, луна, будка светится, храп «Zzz»; «крали сами парижане» — фонари, лопаты, мешки, Том подмигивает с мешком. Переход В сцену: книга
   «легенд» захлопывается и снова раскрывается новой сценой. */
(() => {
  EV.lg_leg = wtw('s7', 'легенда:');
  EV.lg_day = wtw('s7', 'днём');
  EV.lg_night = wtw('s7', 'ночью');
  EV.lg_steal = wtw('s7', 'крали');
  EV.lg_par = wtw('s7', 'парижане!');
  KEYW.push('легенда:', 'парижане!');
  const N = t => sm(clamp((t - EV.lg_night + 0.2) / 0.6));

  function sky(t) {                                                     // день → ночь, солнце → луна, звёзды, огни Парижа
    const n = N(t); vgrad(-700, 900, [lerpC('#6aa8e0', '#0e1430', n), lerpC('#b8d8f0', '#2a2a5a', n), lerpC('#f0e8d0', '#4a3a6a', n)]);
    if (n < 1) { glow(900, -300, 300, 'rgba(255,240,180,1)', 0.7 * (1 - n)); ell(900, -300 + n * 600, 70, 70, { wash: '#fff6c0', washA: 1 - n, line: false }); }
    if (n > 0) { const r = rng(16800); for (let i = 0; i < 60; i++) ell(-300 + r() * 1700, -700 + r() * 1100, 2 + r() * 2, 2 + r() * 2, { wash: '#ffffff', washA: n * (0.5 + 0.5 * Math.sin(t * 3 + i)), line: false }); glow(250, -320, 260, 'rgba(220,230,255,1)', 0.5 * n); ell(250, -320, 80, 80, { wash: '#f4f4e8', washA: n, line: false }); ell(280, -340, 70, 70, { wash: lerpC('#6aa8e0', '#0e1430', n), washA: n * 0.6, line: false }); }
    for (const [x, w, h] of [[-200, 160, 110], [20, 220, 80], [280, 140, 140], [500, 200, 90], [780, 180, 120], [1020, 240, 80]]) { rect(x, 700 - h, w, h, { wash: lerpC('#b8b0c8', '#1a1a34', n), washA: 1, w: 1.2, col: '#3a3050' }); if (n > 0.5) for (let i = 0; i < 4; i++) ell(x + 20 + i * w / 4, 720 - h * 0.6, 5, 7, { wash: '#ffd890', washA: n, line: false }); }
  }
  function field(t) {                                                   // поле, будка, табличка DÉFENDU, флаг, кусты
    const n = N(t); const g = shape(spline([[-400, 760], [400, 700], [1600, 760], [1600, 1400], [-400, 1400]], true, 8), { wash: lerpC('#7a9a3a', '#1e2a24', n), washA: 1, w: 1.6, col: '#1a2a12', key: 16810 }); shadeG(g.path, 540, 700, 540, 1400, '#0a1408', 0.35 + n * 0.3);
    for (let r = 0; r < 4; r++) { const y = 800 + r * 120, sc = 0.5 + r * 0.2; for (let i = 0; i < 11; i++) { const x = -330 + i * 180 + (r % 2) * 90; if (t > EV.lg_steal && (i + r) % 3 === 0) { ell(x, y, 40 * sc, 12 * sc, { wash: '#3a2a1a', washA: 1, line: false }); continue; } push(x, y, sc); for (let k = 0; k < 5; k++) blob([[0, 0], [-40 + k * 20, -50 - (k % 2) * 20], [-20 + k * 20, -70], [-10 + k * 16, -20]], { wash: lerpC(k % 2 ? '#4a7a2a' : '#5a8a30', '#1a3a2a', n), washA: 1, w: 1.2, col: '#1a2a12' }); potFlower(-16, -66, 0.6, i); pop(); } }
    push(1100, 1060, 1); rect(-80, -240, 160, 240, { wash: lerpC('#2a4a8a', '#1a2440', n), washA: 1, w: 2, col: '#0a1020' }); shape([[-100, -240], [0, -320], [100, -240]], { wash: '#8a1a1a', washA: 1, w: 2 }); rect(-34, -160, 68, 160, { wash: n > 0.5 ? '#ffd890' : '#1a1a2a', washA: 1, w: 1.2 }); if (n > 0.5) { glow(0, -80, 200, 'rgba(255,200,110,1)', 0.5 * n); for (let i = 0; i < 3; i++) { const q = (t * 0.5 + i / 3) % 1; txt('Z', 60 + q * 60, -200 - q * 120, 30 + q * 20, { font: 'Osw', col: '#f4f0d0', a: 1 - q }); } } pop();
    push(-60, 1080, 1); pencil([[0, 0], [0, -200]], { w: 6, col: '#5a3a1a' }); rect(-100, -260, 200, 70, { wash: '#f4ecd8', washA: 1, w: 3, col: '#5a3a1a' }); txt('DÉFENDU', 0, -214, 34, { font: 'Osw', col: '#a8221a' }); pop();
  }
  function people(t) {                                                  // днём — солдаты на посту; ночью — парижане с фонарями и мешками
    const n = N(t); if (n < 1) for (const [i, x] of [[0, 300], [1, 820]]) { const gx = x + (n > 0 ? (1100 - x) * n : 0); human(gx, 1260, 1.0, t, { body: '#2a4a9a', bodyD: '#1a2a5a', legs: '#f4f0e6', hair: '#d8d0c0', face: t > EV.lg_day ? 'calm' : 'smile', armL: 'hold', armR: t > EV.lg_day && n === 0 ? 'up' : 'hold', look: 0.2, seed: 16820 + i, flip: n > 0 ? 1 : (i ? -1 : 1) }); push(gx, 1260 - 286, 1); shape([[-60, 0], [-40, -30], [0, -46], [40, -30], [60, 0], [0, -14]], { wash: '#1a1a1a', washA: 1, w: 2, col: '#000' }); pop(); push(gx + 50, 1140, 1); pencil([[0, 100], [0, -240]], { w: 7, col: '#6a4424' }); pencil([[0, -240], [0, -310]], { w: 3, col: '#b8bcc4', pass2: false }); pop(); }
    if (t > EV.lg_steal - 0.2) { const k = sm(clamp((t - EV.lg_steal + 0.2) / 0.6)); [[100, '#8a3a4a', 1, 'cloche'], [420, '#5a6a3a', 0, 'fedora'], [920, '#f4f0e6', 0, 'chef']].forEach(([x, c, lng, hat], i) => { const px = x + (1 - k) * (i === 2 ? 400 : -400), bob = Math.abs(Math.sin(t * 7 + i)) * 6;
      human(px, 1290 - bob, 0.95, t, { body: c, legs: '#2a2a34', hair: ['#8a5a2a', '#3a2010', '#1a1410'][i], face: 'grin', armL: 'hold', armR: 'up', look: i === 2 ? -0.5 : 0.5, seed: 16830 + i, flip: i === 2 ? -1 : 1, long: lng }); hat20(px, 1290 - bob, 0.95, hat, i === 2 ? '#ffffff' : '#3a2a1a', i === 2 ? -1 : 1);
      push(px + (i === 2 ? -60 : 60), 1290 - bob - 290, 1); pencil([[0, 0], [0, 30]], { w: 2, col: '#3a3a3a', pass2: false }); rect(-14, 30, 28, 36, { wash: '#ffd890', washA: 1, w: 1.6, col: '#3a3a3a' }); glow(0, 48, 120, 'rgba(255,200,110,1)', 0.6); pop();
      push(px - (i === 2 ? -50 : 50), 1290 - bob - 80, 1); blob([[-40, 0], [-50, -80], [-10, -110], [40, -90], [50, 0]], { wash: '#c8a868', washA: 1, w: 2, col: '#5a3a1a' }); potato(0, -110, 0.3, i, { key: 16840 + i }); pop(); }); }
  }
  function frame(t) {                                                   // рамка страницы «легенды» с буквицей (в начале), ценники
    if (t < EV.lg_day + 0.3) { const a = 1 - clamp((t - EV.lg_day) / 0.3); scr(() => { ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = '#c89a3a'; ctx.lineWidth = 40; ctx.strokeRect(40, 40, W - 80, H - 80); ctx.lineWidth = 6; ctx.strokeRect(80, 80, W - 160, H - 160); ctx.restore(); }); push(300, 300, a); rect(-80, -80, 160, 160, { wash: '#a8221a', washA: a, w: 3, col: '#c89a3a' }); txt('L', 0, 50, 140, { font: 'Osw', col: '#ffe070', a }); pop(); }
    if (t > EV.lg_leg) bubbleTag('ЛЕГЕНДА', 640, 760, t, EV.lg_leg, '#a8221a', 48, -0.04);
    if (t > EV.lg_par) bubbleTag('ПАРИЖАНЕ', 520, 980, t, EV.lg_par, '#2a4a9a', 44, 0.04);
    if (t > EV.lg_par + 0.5) { const k = clamp((t - EV.lg_par - 0.5) / 0.6); glow(540, 900, 800 * k, 'rgba(255,220,120,1)', 0.25 * (1 - k)); }
  }
  function ground(t) { const n = N(t); const tb = rect(-400, 1460, 1900, 800, { wash: lerpC('#6a4a2a', '#2a1e14', n), washA: 1, w: 3, col: '#1a0a04', key: 16850 }); for (let i = 0; i < 6; i++) pencil([[-400, 1500 + i * 70], [1500, 1504 + i * 70]], { w: 2, col: '#1a0a04', a: 0.4, pass2: false });
    for (const [x, r] of [[160, 0.3], [240, -0.4], [960, 0.8], [1040, 0.1]]) potato(x, 1510, 0.75, r, { key: 16851 + x, dirt: 1 }); push(1100, 1500, 1, -0.3); pencil([[0, 0], [0, -260]], { w: 8, col: '#6a4424' }); shape([[-40, 0], [40, 0], [34, 70], [-34, 70]], { wash: '#8a8e94', washA: 1, w: 2 }); pop(); }
  function front(t) { const n = N(t); push(-40, 1970, 1.6); for (let k = 0; k < 6; k++) blob([[0, 0], [-60 + k * 26, -80 - (k % 2) * 30], [-30 + k * 26, -110], [-10 + k * 22, -30]], { wash: lerpC('#4a7a2a', '#142a1a', n), washA: 1, w: 1.4, col: '#0a1a0a' }); pop(); push(1180, 1990, 1.6); blob([[-120, 0], [-100, -70], [0, -90], [100, -70], [120, 0]], { wash: lerpC('#7a9a3a', '#1a2a1a', n), washA: 1, w: 2 }); pop();
    if (n > 0) for (let i = 0; i < 10; i++) { const x = 100 + (i * 113) % 900, y = 900 + (i * 197) % 700; glow(x + Math.sin(t * 2 + i) * 30, y + Math.cos(t * 1.5 + i) * 20, 20, 'rgba(220,255,140,1)', n * 0.6 * (0.5 + 0.5 * Math.sin(t * 5 + i))); } motes(20, [0, 300, 1100, 1700], '#fffbe0', t, 16860, { sp: 6, sz: 3, a: 0.4 * (1 - n), wob: 2 }); }
  WORLD.legend = (t, u, cat) => {
    lay(14, () => { sky(t); });
    lay(5, () => { field(t); });
    lay(2.6, () => { people(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { ground(t); frame(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.legend = {
    outfit: 'parisA', light: { side: 1, rim: '#ffd890' }, grade: ['#ffd890', 0.04],
    act: () => [[S0.legend, 'suspicious'], [EV.lg_leg, 'smug'], [EV.lg_day, 'proud'], [EV.lg_night, 'sideeye'], [EV.lg_steal, 'grin'], [EV.lg_par, 'wink']],
    pose: (t, u, b) => { const nt = t > EV.lg_steal; return Object.assign(b, { x: 600, y: 1700, s: 1.0, flip: nt ? -1 : 1, look: t > EV.lg_par ? [0, 0] : nt ? [-0.6, 0.2] : t > EV.lg_night ? [0.6, -0.7] : [0.5, -0.2], hand: [200, -280], handF: [-90, -220], prop: nt ? 'potatoP' : undefined, propAng: 0.2, tailUp: nt }); },
    cam: () => [[S0.legend, 560, 960, 0.06], [EV.lg_day, 560, 1050, 0.12, 'x'], [EV.lg_night, 700, 900, 0.1], [EV.lg_steal, 560, 1150, 0.16], [EV.lg_par, 600, 1250, 0.24], [S1.legend, 600, 1260, 0.26]]
  };
  // ---------------------------------------------------------------- переход: книга легенд захлопывается и раскрывается новой сценой
  TRANS_IN.legend = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), half = e < 0.5, f = half ? 1 - e * 2 : (e - 0.5) * 2, src = half ? A : B; scr(() => { ctx.fillStyle = '#3a1a10'; ctx.fillRect(0, 0, W, H); });
    for (const sd of [-1, 1]) { ctx.save(); ctx.beginPath(); ctx.rect(sd < 0 ? 0 : W / 2, 0, W / 2, H); ctx.clip(); ctx.translate(W / 2, 0); ctx.scale(Math.max(0.02, f), 1); ctx.translate(-W / 2, 0); ctx.drawImage(src, 0, 0); ctx.restore(); }
    scr(() => { ctx.fillStyle = 'rgba(0,0,0,0.4)'; ctx.fillRect(W / 2 - 6, 0, 12, H); });
  } };
})();
