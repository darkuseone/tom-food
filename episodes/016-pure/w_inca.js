/* 016 — `inca`: «Инки сушили картошку морозом — чуньо. Недавно в Перу нашли клубни возрастом пятьсот лет!» Анды на рассвете: снежные пики, облака
   ниже гор, террасы-андены с каменными стенками, хижины с соломой, ламы с цветными кисточками, на соломенных подстилках разложены клубни, люди в пончо
   топчут их босиком, иней на траве. Том-инка в унку и шапке-чульо. По словам: «морозом» — иней ползёт по клубням, пар изо рта, синие блики; «чуньо» — клубни
   сморщиваются и темнеют, ценник ЧУНЬО; «в Перу нашли» — рядом раскоп: кисточка археолога, керамический сосуд, из него выглядывают два чуньо; «пятьсот лет» —
   табло-счётчик 500 ЛЕТ. Переход В сцену: кадр покрывается инеем от краёв и тает, открывая новую сцену. */
(() => {
  EV.in_frost = wtw('s1', 'морозом');
  EV.in_chu = wtw('s1', 'чуньо.');
  EV.in_found = wtw('s1', 'нашли');
  EV.in_500 = wtw('s1', 'пятьсот');
  KEYW.push('чуньо.', 'лет!');

  function andes(t) {                                                   // небо рассвета, пики, облака ниже гор, кондор
    vgrad(-700, 900, ['#3a4a8a', '#c88aa8', '#f8d8a8']); glow(900, 300, 500, 'rgba(255,210,150,1)', 0.5);
    for (const [x, h, c] of [[-150, 1000, '#7a7aa0'], [380, 1200, '#8a8ab0'], [900, 1050, '#7a7aa0'], [1350, 900, '#8a8ab0']]) { poly([[x - 460, 700], [x, 700 - h], [x + 460, 700]], { wash: c, washA: 1, w: 1.6, col: '#3a3a6a' }); poly([[x - 140, 700 - h * 0.7], [x, 700 - h], [x + 140, 700 - h * 0.7], [x + 60, 700 - h * 0.6], [x, 700 - h * 0.68], [x - 70, 700 - h * 0.58]], { wash: '#ffffff', washA: 1, w: 1.2, col: '#9a9ac0' }); }
    for (let i = 0; i < 6; i++) { const x = ((i * 320 + t * 12) % 1900) - 400; for (let k = 0; k < 5; k++) ell(x + k * 60, 420 + (i % 2) * 40, 90, 28, { wash: '#ffffff', washA: 0.75, line: false }); }
    const cx = ((t * 50) % 1600) - 200; push(cx, -80 + Math.sin(t) * 30, 1); pencil(spline([[-60, 0], [-20, -12], [0, 0], [20, -12], [60, 0]], false, 5), { w: 5, col: '#1a1a1a', pass2: false }); pop();
  }
  function terraces(t) {                                                // андены, хижины, ламы, люди топчут клубни
    for (let r = 0; r < 4; r++) { const y = 760 + r * 120; const s = shape([[-400, y], [1600, y - 30], [1600, y + 120], [-400, y + 130]], { wash: r % 2 ? '#7a9a4a' : '#6a8a3a', washA: 1, w: 1.6, col: '#3a4a1a' }); for (let i = 0; i < 20; i++) rect(-400 + i * 100, y - 4 - i * 1.5, 96, 22, { wash: '#9a8a7a', washA: 1, w: 1, col: '#5a4a3a' }); }
    for (const x of [80, 1040]) { push(x, 900, 1); const h = blob([[-90, 0], [-90, -100], [90, -100], [90, 0]], { wash: '#9a8070', washA: 1, w: 2, col: '#3a2a1a' }); shape([[-120, -100], [0, -200], [120, -100]], { wash: '#c8a858', washA: 1, w: 2, col: '#5a4a1a' }); for (let i = 0; i < 8; i++) pencil([[-110 + i * 30, -104], [-80 + i * 22, -180]], { w: 2, col: '#8a7030', a: 0.6, pass2: false }); rect(-20, -60, 40, 60, { wash: '#2a1a10', washA: 1, w: 1.4 }); pop(); }
    for (const [x, y, fl] of [[1180, 1180, -1], [-180, 1160, 1]]) { push(x, y, 1, 0, fl); blob([[-70, -70], [-60, -110], [60, -110], [80, -70], [60, -40], [-60, -40]], { wash: '#f4ecd8', washA: 1, w: 2, col: '#5a4a3a' }); pencil(spline([[60, -100], [80, -180], [76, -240]], false, 5), { w: 26, col: '#f4ecd8' }); ell(86, -250, 26, 18, { wash: '#f4ecd8', washA: 1, w: 2, col: '#5a4a3a' }); for (const sd of [-1, 1]) pencil([[72 + sd * 8, -262], [70 + sd * 12, -292]], { w: 6, col: '#f4ecd8' }); ell(96, -254, 3, 3, { wash: '#1a1a1a', washA: 1, line: false }); for (const [ci, c] of ['#e8443a', '#e8c040', '#3a8ac8'].entries()) ell(62 + ci * 10, -284 + ci * 4, 6, 6, { wash: c, washA: 1, line: false }); for (const lx of [-50, -20, 30, 60]) pencil([[lx, -40], [lx + Math.sin(t * 4 + lx) * 4, 20]], { w: 9, col: '#e8e0cc' }); pop(); }
    for (const [i, x] of [[0, 300], [1, 860]]) { const st = Math.abs(Math.sin(t * 5 + i * 2)) * 12; human(x, 1300 - st, 1.0, t, { body: i ? '#c8443a' : '#3a7ab0', bodyD: i ? '#7a1a1a' : '#1a3a6a', legs: '#8a6a4a', hair: '#1a1410', face: t > EV.in_frost ? 'smile' : 'calm', armL: 'hold', armR: 'hold', look: i ? -0.4 : 0.4, seed: 16200 + i, flip: i ? -1 : 1, long: i }); push(x, 1300 - st - 220, 1); for (let k = 0; k < 4; k++) rect(-60 + k * 30, 0, 30, 14, { wash: ['#e8c040', '#c8221a', '#1a1a1a', '#f4f0e6'][k], washA: 1, line: false }); pop(); }
  }
  function mats(t) {                                                    // подстилки с клубнями: иней → чуньо; раскоп с сосудом; табло 500 ЛЕТ
    const fr = t > EV.in_frost ? clamp((t - EV.in_frost) / 0.8) : 0, ch = t > EV.in_chu ? clamp((t - EV.in_chu) / 0.5) : 0;
    for (const mx of [80, 560]) { push(mx, 1470, 1); const m = blob([[-230, 0], [-210, -40], [210, -40], [230, 0], [200, 20], [-200, 20]], { wash: '#d8b860', washA: 1, w: 2, col: '#6a5020' }); hatch(m.path, m.bb, { gap: 8, a: 0.4, col: '#8a6a20', ang: 0.2 });
      for (let i = 0; i < 9; i++) { const x = -170 + (i % 5) * 84 + (i > 4 ? 40 : 0), y = -24 - (i > 4 ? 26 : 0); if (ch > 0.5) chuno(x, y, 0.5, i, { key: 16210 + i + mx, white: i % 3 === 0 }); else potato(x, y, 0.45, i, { key: 16220 + i + mx }); if (fr > 0 && ch < 0.5) { ctx.save(); ctx.globalAlpha = fr * 0.7; ell(x, y - 6, 30, 18, { wash: '#e8f4ff', washA: 0.7, line: false }); for (let k = 0; k < 3; k++) txt('✳', x - 14 + k * 14, y - 4, 12, { col: '#ffffff' }); ctx.restore(); } } pop(); }
    if (fr > 0 && fr < 1) glow(320, 1400, 400, 'rgba(180,220,255,1)', 0.3 * (1 - fr));
    if (t > EV.in_chu + 0.1) bubbleTag('ЧУНЬО', 320, 1260, t, EV.in_chu + 0.1, '#5a3a8a', 48, -0.04);
    if (t > EV.in_found - 0.2) { const k = popK(t, EV.in_found - 0.2, 0.4); push(960, 1480, k); const pit = ell(0, 0, 170, 40, { wash: '#6a4a2a', washA: 1, w: 2, col: '#3a2010' }); pencil([[-170, -40], [-140, -46], [140, -46], [170, -40]], { w: 3, col: '#c8221a', pass2: false }); for (const x of [-170, 170]) pencil([[x, -40], [x, -100]], { w: 4, col: '#8a6a3a', pass2: false });
      const v = shape(spline([[-60, 0], [-80, -60], [-50, -110], [50, -110], [80, -60], [60, 0]], true, 6), { wash: '#c8784a', washA: 1, w: 2.4, col: '#3a1a08' }); shadeG(v.path, 60, -60, -60, -60, '#6a3014', 0.4); for (let i = 0; i < 4; i++) rect(-50 + i * 26, -80, 18, 18, { wash: i % 2 ? '#1a1a1a' : '#f4ecd8', washA: 1, w: 0.8 });
      chuno(-24, -118, 0.5, 0.3, { key: 16240 }); chuno(24, -122, 0.45, -0.4, { key: 16241 }); push(140, -60, 1, -0.6); rect(-6, -60, 12, 60, { wash: '#a8743a', washA: 1, w: 1.2 }); blob([[-10, -60], [10, -60], [6, -90], [-6, -90]], { wash: '#3a2a1a', washA: 1, line: false }); pop(); pop(); }
    if (t > EV.in_500 - 0.1) { const q = clamp((t - EV.in_500 + 0.1) / 0.6), v = Math.round(lerp(0, 500, sm(q))); push(960, 1180, popK(t, EV.in_500 - 0.1, 0.4)); rect(-170, -60, 340, 120, { wash: '#1a1a20', washA: 1, w: 4, col: '#c8a050' }); txt(v + ' ЛЕТ', 0, 24, 66, { font: 'Osw', col: '#ffe070' }); pop(); }
  }
  function front(t) { push(-40, 1960, 1.6); for (let i = 0; i < 9; i++) pencil([[i * 16 - 60, 0], [i * 16 - 70 + Math.sin(t + i) * 6, -160 - (i % 3) * 30]], { w: 5, col: '#c8b870' }); pop(); push(1180, 1980, 1.6); blob([[-120, 0], [-100, -70], [0, -90], [100, -70], [120, 0]], { wash: '#9a8a7a', washA: 1, w: 2, col: '#5a4a3a' }); pop();
    motes(26, [0, 300, 1100, 1700], '#ffffff', t, 16250, { sp: 6, sz: 3, a: 0.6, wob: 2 }); rays(900, 300, 2.4, 0.5, 1700, 'rgba(255,220,170,1)', 0.12, 5, t); }
  WORLD.inca = (t, u, cat) => {
    lay(14, () => { andes(t); haze('#d8c8e0', 0.1); });
    lay(3.4, () => { terraces(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { mats(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.inca = {
    outfit: 'incaA', light: { side: 1, rim: '#ffd8b0' }, grade: ['#c8b0d8', 0.06],
    act: () => [[S0.inca, 'proud'], [EV.in_frost, 'cold'], [EV.in_chu, 'smug'], [EV.in_found, 'awe'], [EV.in_500, 'shock']],
    pose: (t, u, b) => Object.assign(b, { x: 620, y: 1700, s: 1.02, flip: t > EV.in_found ? 1 : -1, look: t > EV.in_500 ? [0.6, -0.3] : t > EV.in_found ? [0.8, 0.4] : [-0.6, 0.5], hand: [200, -300], handF: [-90, -220], prop: t > EV.in_chu ? 'chunoP' : 'potatoP', propAng: 0.2, chatter: t > EV.in_frost && t < EV.in_chu + 0.3, frost: t > EV.in_frost && t < EV.in_chu + 0.3 }),
    cam: () => [[S0.inca, 560, 900, 0.06], [EV.in_frost, 360, 1300, 0.2, 'x'], [EV.in_chu, 360, 1300, 0.22], [EV.in_found, 820, 1300, 0.2], [EV.in_500, 820, 1250, 0.22], [S1.inca, 800, 1260, 0.24]]
  };
  // ---------------------------------------------------------------- переход: кадр покрывается инеем от краёв и тает
  TRANS_IN.inca = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k); drawBuf(e < 0.5 ? A : B, 1, 540, 960); const f = e < 0.5 ? e * 2 : (1 - e) * 2;
    scr(() => { ctx.save(); const g = ctx.createRadialGradient(540, 960, 200 * (1 - f), 540, 960, 1200 * (1.2 - f * 0.6)); g.addColorStop(0, 'rgba(230,245,255,0)'); g.addColorStop(0.5, 'rgba(230,245,255,' + 0.6 * f + ')'); g.addColorStop(1, 'rgba(255,255,255,' + f + ')'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      const r = rng(16260); ctx.strokeStyle = 'rgba(255,255,255,' + f + ')'; ctx.lineWidth = 3; for (let i = 0; i < 40; i++) { const a = r() * 6.283, d = 600 + r() * 600, x = 540 + Math.cos(a) * d, y = 960 + Math.sin(a) * d * 1.6; ctx.beginPath(); for (let k2 = 0; k2 < 6; k2++) { ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(k2) * 40 * f, y + Math.sin(k2) * 40 * f); } ctx.stroke(); } ctx.restore(); });
  } };
})();
