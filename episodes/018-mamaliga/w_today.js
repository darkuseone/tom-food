/* 018 — `today`: «Сегодня кукурузы растят больше миллиарда тонн в год. Мамалыга — с брынзой или со шкварками?» Летняя веранда в молдавском селе
   на закате: виноградная лоза над головой с гроздьями, резные столбы, фонарики-гирлянда; за перилами — холмы с полями кукурузы и виноградниками,
   село с церковью, комбайн на поле, стая птиц, солнце садится. За столом гости чокаются, бабушка несёт миску. Хиро-шот: мамалыга на доске в пару,
   брынза, сметана, шкварки в сковороде, яичница, кувшин вина. Том-дачник в вышитой рубахе и соломенной шляпе. По словам: «Сегодня» — гирлянда
   вспыхивает; «миллиарда» — на табло-счётчике прокручивается 1 000 000 000; «тонн» — за холмом вырастает гора початков; «Мамалыга» — камера к
   доске, нитка режет ломоть, пар; «с брынзой» — Том поднимает брынзу, ценник БРЫНЗА; «шкварками?» — сковорода шкварчит, ценник ШКВАРКИ.
   Переход В сцену: натянутая нитка режет кадр пополам, половинки разъезжаются. */
(() => {
  EV.td_now = wtw('t1', 'Сегодня');
  EV.td_bil = wtw('t1', 'миллиарда');
  EV.td_ton = wtw('t1', 'тонн');
  EV.td_mm = wtw('t1', 'Мамалыга');
  EV.td_br = wtw('t1', 'брынзой');
  EV.td_sh = wtw('t1', 'шкварками?');
  SHAKES.push([EV.td_ton + 0.1, 0.15, 6]);
  KEYW.push('миллиарда', 'шкварками?');
  function land(t) {                                                      // закат, холмы, поля кукурузы и виноградники, село с церковью, комбайн, гора початков
    vgrad(-600, 900, ['#5a4a8a', '#e88a5a', '#f8d090']); glow(700, 520, 520, 'rgba(255,190,110,1)', 0.6); ell(700, 560, 90, 90, { wash: '#ffd890', washA: 1, line: false });
    for (let i = 0; i < 5; i++) { const x = ((i * 400 + t * 8) % 2000) - 400, y = 80 + (i % 3) * 90; blob([[x, y], [x + 100, y - 30], [x + 260, y - 20], [x + 320, y + 10], [x + 120, y + 26]], { wash: '#f8b090', washA: 0.6, line: false }); }
    const pile = t > EV.td_ton ? sm(clamp((t - EV.td_ton) / 0.8)) : 0; if (pile > 0) { const ph = 380 * pile; blob([[200, 720], [320, 720 - ph * 0.6], [480, 720 - ph], [640, 720 - ph * 0.7], [760, 720]], { wash: MM.corn, washA: 1, w: 2.4, col: '#7a5010', key: 19100 }); const r = rng(19101); for (let i = 0; i < 40 * pile; i++) { const x = 260 + r() * 460, y = 720 - r() * ph * 0.8; ell(x, y, 10, 5, { wash: r() > 0.5 ? '#ffd860' : MM.cornD, washA: 1, w: 0.8, col: '#7a5010', rot: r() * 3 }); } glow(480, 720 - ph * 0.6, 260, 'rgba(255,220,100,1)', 0.35 * pile); }
    for (let j = 0; j < 3; j++) { const pts = []; for (let i = 0; i <= 10; i++) pts.push([-400 + i * 200, 700 + j * 90 - (Math.sin(i * 1.1 + j * 1.9) * 0.5 + 0.5) * 140]); pts.push([1700, 1300], [-400, 1300]); const h = shape(pts, { wash: ['#8a8a4a', '#6a7a3a', '#4a6a2a'][j], washA: 1, w: 1.4, col: '#2a3a14', key: 19102 + j }); for (let i = 0; i < 30; i++) pencil([[-380 + i * 70 + j * 20, 760 + j * 100], [-370 + i * 70 + j * 20, 740 + j * 100]], { w: 3, col: j === 1 ? '#c8a840' : '#2a4a1a', a: 0.7, pass2: false }); }
    push(1000, 700, 0.8); rect(-50, -100, 100, 100, { wash: '#f4f0e4', washA: 1, w: 1.6, col: '#5a4a30' }); poly([[-60, -100], [0, -170], [60, -100]], { wash: '#3a6a8a', washA: 1, w: 1.6 }); pencil([[0, -170], [0, -220]], { w: 3, col: '#e8c040', pass2: false }); pencil([[-14, -204], [14, -204]], { w: 3, col: '#e8c040', pass2: false }); for (const x of [-180, 160, 260]) { rect(x - 40, -50, 80, 50, { wash: '#f4f0e4', washA: 1, w: 1.4 }); poly([[x - 50, -50], [x, -100], [x + 50, -50]], { wash: '#a85a3a', washA: 1, w: 1.4 }); ell(x, -26, 10, 10, { wash: '#ffd870', washA: 1, line: false }); } pop();
    const cx = ((t * 20) % 1600) - 300; push(cx, 860, 0.6); rect(-80, -70, 160, 70, { wash: '#3a8a3a', washA: 1, w: 2, col: '#0a2a0a' }); rect(-30, -130, 70, 60, { wash: '#a8d8e8', washA: 0.8, w: 2, col: '#0a2a0a' }); ell(-50, 0, 30, 30, { wash: '#2a2a2a', washA: 1, w: 1.4 }); ell(50, 6, 24, 24, { wash: '#2a2a2a', washA: 1, w: 1.4 }); rect(80, -40, 80, 30, { wash: '#e8c040', washA: 1, w: 1.4 }); for (let i = 0; i < 3; i++) ell(-120 - i * 30, -10 - i * 10, 20 + i * 10, 14, { wash: '#e8d090', washA: 0.4, line: false }); pop();
    for (let i = 0; i < 6; i++) { const q = (t * 0.07 + i * 0.03) % 1, x = 1200 - q * 1500 + i * 30, y = 260 + Math.sin(i * 2) * 40, f = Math.sin(t * 8 + i) * 10; pencil([[x - 16, y + f], [x, y], [x + 16, y + f]], { w: 2.4, col: '#3a2a3a', pass2: false }); }
  }
  function veranda(t) {                                                   // лоза, гроздья, столбы, перила, гирлянда, табло-счётчик, гости
    for (const x of [-120, 1200]) { const p = rect(x - 40, -600, 80, 2100, { wash: '#7a5030', washA: 1, w: 3, col: '#2a1408', key: 19110 + x }); shadeG(p.path, x + 40, 0, x - 40, 0, '#3a2010', 0.4); for (let k = 0; k < 6; k++) pencil([[x - 40, -400 + k * 220], [x + 40, -380 + k * 220]], { w: 2, col: '#4a2a10', pass2: false }); }
    rect(-400, -560, 2000, 70, { wash: '#6a4424', washA: 1, w: 3, col: '#2a1408' }); for (let i = 0; i < 40; i++) { const x = -380 + i * 52, y = -480 + Math.sin(i * 1.7) * 30; blob([[x, y], [x - 40, y + 30], [x - 20, y + 70], [x + 30, y + 60], [x + 40, y + 20]], { wash: i % 3 ? '#4a8a3a' : '#6aa04a', washA: 1, w: 1.2, col: '#1a3a1a' }); }
    for (const [x, y] of [[60, -380], [380, -400], [780, -390], [1060, -370]]) { push(x, y, 1, Math.sin(t * 1.2 + x) * 0.05); for (let r = 0; r < 5; r++) for (let c = 0; c <= 4 - r; c++) ell(-40 + c * 20 + r * 10, r * 18, 11, 11, { wash: (r + c) % 2 ? '#5a2a5a' : '#7a3a7a', washA: 1, w: 1, col: '#2a0a2a' }); pencil([[20, -20], [20, -60]], { w: 3, col: '#4a3018', pass2: false }); pop(); }
    const on = t > EV.td_now ? 1 : 0.35; pencil(spline([[-200, -320], [200, -230], [600, -300], [1000, -220], [1300, -310]], false, 10), { w: 2, col: '#2a2a2a', pass2: false }); for (let i = 0; i < 14; i++) { const q = i / 13, x = lerp(-150, 1250, q), y = -280 + Math.sin(q * 9) * 40; ell(x, y + 16, 9, 12, { wash: ['#ffd860', '#ff8a4a', '#f4f0d0'][i % 3], washA: on, w: 1, col: '#5a4a10' }); if (on > 0.5) glow(x, y + 16, 40, 'rgba(255,220,140,1)', 0.5); }
    rect(-400, 1060, 2000, 30, { wash: '#7a5030', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 40; i++) rect(-380 + i * 52, 1090, 18, 200, { wash: '#8a6040', washA: 1, w: 1.4, col: '#2a1408' });
    push(820, 470, 1); rect(-200, -60, 400, 120, { wash: '#2a2a2a', washA: 1, w: 4, col: '#c8a040' }); const n = t > EV.td_bil ? clamp((t - EV.td_bil) / 0.9) : 0; const v = Math.floor(sm(n) * 1e9); txt(v.toLocaleString('ru-RU').replace(/ /g, ' '), 0, 18, 46, { font: 'Osw', col: '#ffe070' }); txt('ТОНН КУКУРУЗЫ / ГОД', 0, 90, 26, { font: 'Osw', col: '#f4ecd8' }); pop();
    human(-20, 1300, 1.05, t, { body: '#f4f0e4', legs: '#2a2a3a', hair: '#3a2a1a', face: 'grin', armL: 'hold', armR: 'up', look: 0.5, seed: 19120, belt: '#c8221a' }); human(1050, 1310, 1.08, t, { body: '#c8221a', legs: '#2a2a2a', hair: '#8a5a2a', face: 'smile', armL: 'hold', armR: 'up', look: -0.6, seed: 19121, flip: -1, long: 1 });
    for (const [x, y] of [[-20 + 80, 1300 - 330], [1050 - 80, 1310 - 330]]) { push(x, y, 1); blob([[-14, -30], [14, -30], [10, 20], [-10, 20]], { wash: '#f4f0e8', washA: 0.5, w: 1.4, col: '#8a8a8a' }); rect(-10, -10, 20, 26, { wash: '#8a1a3a', washA: 0.85, line: false }); pop(); }
  }
  function table(t) {                                                     // хиро-стол: мамалыга, брынза, сметана, шкварки на сковороде, яичница, вино
    const tb = rect(-400, 1440, 1900, 700, { wash: '#f4efe2', washA: 1, w: 3, col: '#5a4a30', key: 19130 }); shadeG(tb.path, 540, 2000, 540, 1440, '#c8bca0', 0.4); for (let i = 0; i < 20; i++) for (let j = 0; j < 6; j++) if ((i + j) % 2) rect(-400 + i * 100, 1440 + j * 100, 100, 100, { wash: '#c8221a', washA: 0.18, line: false });
    const cut = t > EV.td_mm ? sm(clamp((t - EV.td_mm - 0.1) / 0.4)) : 0; mmBoard(420, 1470, 230, 64, { key: 19131 }); mamaliga(420, 1460, 170, 170, t, { key: 19132, steam: 1, cut }); if (t > EV.td_mm - 0.1 && cut < 1) { const ty = lerp(1260, 1470, cut); mmThread(220, ty, 620, ty, { w: 3 }); }
    const brUp = t > EV.td_br ? popK(t, EV.td_br, 0.35) : 0; brinza(150, 1530, 1 + brUp * 0.3, -0.1, { key: 19133 }); if (t > EV.td_br) { glow(150, 1520, 140, 'rgba(255,255,230,1)', 0.4); bubbleTag('БРЫНЗА', 170, 1320, t, EV.td_br, '#3a5a1a', 40, -0.05); }
    smBowl(700, 1540, 0.75, t, { key: 19134, spoon: 1 });
    push(980, 1520, 1); const sk = ell(0, 0, 130, 36, { wash: '#2a2826', washA: 1, w: 3, col: '#000' }); metalG(sk.path, -40, -10, 120, '#7a7670', '#2a2826', '#0a0a0a'); pencil([[120, -6], [260, -30]], { w: 14, col: '#2a2826' }); shkvarki(0, -10, 1.1, 0, { key: 19135, n: 8 });
    if (t > EV.td_sh - 0.1) { for (let i = 0; i < 8; i++) { const q = (t * 3 + i * 0.13) % 1; ell(-90 + i * 26, -20 - q * 40, 3, 3, { wash: '#ffe0a0', washA: 1 - q, line: false }); } for (let i = 0; i < 3; i++) { const q = (t * 0.7 + i / 3) % 1; pencil(spline([[-40 + i * 40, -30], [-30 + i * 40 + Math.sin(q * 6) * 14, -90 - q * 60], [-40 + i * 40, -150 - q * 80]], false, 5), { w: 7, col: '#ffffff', a: 0.4 * (1 - q), pass2: false }); } } pop();
    if (t > EV.td_sh) bubbleTag('ШКВАРКИ', 880, 1310, t, EV.td_sh, '#7a2a14', 40, 0.05);
    push(-60, 1560, 1); ell(0, 0, 90, 24, { wash: '#f4f0e4', washA: 1, w: 2, col: '#5a5a5a' }); for (const dx of [-30, 30]) { blob([[dx - 34, -4], [dx - 20, -20], [dx + 20, -22], [dx + 36, -6], [dx + 10, 6]], { wash: '#fbfbf6', washA: 1, w: 1.2, col: '#a8a8a0' }); ell(dx, -10, 12, 9, { wash: '#f8b820', washA: 1, w: 1, col: '#a86a08' }); ell(dx - 3, -13, 3, 2, { wash: '#ffffff', washA: 0.8, line: false }); } pop();
    push(1200, 1480, 1); const jg = blob([[-40, 40], [-50, -40], [-30, -100], [-20, -130], [20, -130], [30, -100], [50, -40], [40, 40]], { wash: '#c8783a', washA: 1, w: 2, col: '#3a1a08' }); shadeG(jg.path, 50, 0, -30, 0, '#6a3414', 0.4); pop();
  }
  function front(t) { push(-40, 160, 1.5); for (let r = 0; r < 6; r++) for (let c = 0; c <= 5 - r; c++) ell(-50 + c * 20 + r * 10, r * 18, 11, 11, { wash: (r + c) % 2 ? '#5a2a5a' : '#7a3a7a', washA: 1, w: 1, col: '#2a0a2a' }); for (let i = 0; i < 4; i++) blob([[0, -40 - i * 40], [-80, -10 - i * 40], [-60, 40 - i * 40], [40, 20 - i * 40]], { wash: '#4a8a3a', washA: 1, w: 1.4, col: '#1a3a1a' }); pop();
    push(1180, 1980, 1.6); const gl = blob([[-40, 0], [-50, -140], [50, -140], [40, 0]], { wash: '#f4f0e8', washA: 0.4, w: 2, col: '#8a8a8a' }); rect(-46, -100, 92, 96, { wash: '#8a1a3a', washA: 0.8, line: false }); pop();
    motes(30, [-100, 200, 1200, 1500], '#ffd8a0', t, 19140, { sp: 6, sz: 3, a: 0.5, wob: 3, add: 1 }); haze('#f8c890', 0.05); }
  WORLD.today = (t, u, cat) => {
    lay(18, () => { land(t); haze('#f0b890', 0.06); }); lay(3.2, () => { veranda(t); });
    lay(1, () => { cat(); }); lay(0.94, () => { table(t); }); lay(0.6, () => { front(t); });
  };
  DIR.today = {
    outfit: 'dacha', light: { side: 1, rim: '#ffc890' }, grade: ['#f0a070', 0.1],
    act: () => [[S0.today, 'grin'], [EV.td_bil, 'awe'], [EV.td_mm, 'proud'], [EV.td_br, 'smug'], [EV.td_sh, 'suspicious'], [EV.td_sh + 0.5, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1600, s: 1.2, flip: 1, look: t > EV.td_sh ? [0.7, 0.4] : t > EV.td_br ? [-0.7, 0.4] : t > EV.td_bil ? [0.3, -0.6] : [0, 0], hand: t > EV.td_sh ? [-200, -360] : [180, -260], handF: t > EV.td_br ? [-220, -340] : [-80, -220], tailUp: t > EV.td_sh }),
    cam: () => [[S0.today, 600, 900, 0.16], [S0.today + 0.5, 600, 1150, 0.24, 'x'], [EV.td_bil, 640, 900, 0.22], [EV.td_mm, 520, 1250, 0.28], [EV.td_br, 440, 1260, 0.3], [EV.td_sh, 740, 1260, 0.3], [S1.today, 700, 1240, 0.3]]
  };
  // ---------------------------------------------------------------- переход: нитка режет кадр пополам, половинки разъезжаются
  TRANS_IN.today = { a: 0.25, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const cut = clamp(k / 0.45), sep = sm(clamp((k - 0.4) / 0.6)); drawBuf(B, 1, 540, 960);
    ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, 960); ctx.clip(); drawBuf(A, 1, 540, 960, 1, null, -sep * 1200, -sep * 200, -sep * 0.15); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.rect(0, 960, W, 960); ctx.clip(); drawBuf(A, 1, 540, 960, 1, null, sep * 1200, sep * 200, sep * 0.15); ctx.restore();
    if (sep < 0.3) scr(() => mmThread(-40, 960, -40 + cut * 1160, 960, { w: 6 }));
  } };
})();
