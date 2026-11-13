/* 020 — `legend`: «А до войны? В книге римской кухни 1930-го года карбонары нет. / А угольщики, что варили её у костра, — просто красивая легенда.»
   Ночной лес в Апеннинах: луна и синие горы, буки-великаны, угольная «карбонайя» — земляной купол с дымящими отдушинами (главный свет — оранжевый жар костра и кургана,
   второй — холодная луна), поленницы, топор в пне, шалаш угольщиков, мул, совы. Два угольщика в саже у котелка на треноге. Том-угольщик в саже и войлочной шляпе.
   По словам: «до войны?» — Том раскрывает толстую книгу «LA CUCINA ROMANA 1930», листает; «нет.» — пустая страница, красный ✕; «угольщики» — угольщики у котла поднимают ложки,
   «у костра» — костёр вспыхивает искрами; «легенда.» — всё затягивает дымом-сепией, сверху падает штамп «ЛЕГЕНДА». Переход В сцену: дым угля заволакивает кадр. */
(() => {
  EV.lg_war = wtw('s7', 'войны?');
  EV.lg_book = wtw('s7', 'книге');
  EV.lg_no = wtw('s7', 'нет.');
  EV.lg_coal = wtw('s8', 'угольщики,');
  EV.lg_fire = wtw('s8', 'костра,');
  EV.lg_leg = wtw('s8', 'легенда.');
  SHAKES.push([EV.lg_no, 0.15, 6], [EV.lg_leg + 0.15, 0.25, 11]);
  KEYW.push('нет.', 'легенда.');

  function night(t) {                                                   // луна, звёзды, синие горы, сосны на хребте
    vgrad(-400, 1000, ['#060a1c', '#141c3a', '#2a3050']); const r = rng(21300); for (let i = 0; i < 70; i++) ell(-300 + r() * 1700, -350 + r() * 700, 1.4 + r() * 1.6, 1.4 + r() * 1.6, { wash: '#ffffff', washA: 0.4 + 0.5 * Math.abs(Math.sin(t * 2 + i)), line: false });
    ell(880, 0, 80, 80, { wash: '#f4f0d8', washA: 1, w: 1.6, col: '#a8a488' }); for (const [x, y, rr] of [[860, -20, 14], [900, 20, 10], [850, 30, 8]]) ell(x, y, rr, rr, { wash: '#d8d4b8', washA: 0.6, line: false }); glow(880, 0, 220, 'rgba(200,220,255,1)', 0.25);
    for (let k = 0; k < 3; k++) { const pts = [[-400, 800]]; for (let i = 0; i <= 12; i++) pts.push([-400 + i * 160, 500 + k * 120 - Math.abs(Math.sin(i * 1.3 + k)) * (220 - k * 50)]); pts.push([1600, 800]); sil(pts, ['#2a3458', '#1e2846', '#141c34'][k], 1); }
    for (let i = 0; i < 26; i++) { const x = -380 + i * 72, y = 640 - Math.abs(Math.sin(i * 0.9)) * 60; poly([[x - 14, y], [x, y - 60], [x + 14, y]], { wash: '#0e1428', washA: 1, line: false }); }
  }
  function forest(t) {                                                  // буки-великаны, шалаш, поленницы, мул, совы
    for (const [x, w] of [[-260, 90], [80, 70], [1000, 110], [1300, 80]]) { const tr = poly([[x - w / 2, 1440], [x - w / 3, -300], [x + w / 3, -300], [x + w / 2, 1440]], { wash: '#2a2420', washA: 1, w: 2, col: '#0a0806', key: 21310 + x }); shadeG(tr.path, x + w / 2, 0, x - w / 2, 0, '#c86a2a', 0.25);
      for (let k = 0; k < 8; k++) pencil([[x - w / 4 + (k % 3) * 10, 1400 - k * 180], [x - w / 4 + (k % 3) * 10 + 6, 1340 - k * 180]], { w: 2, col: '#0a0806', a: 0.5, pass2: false }); }
    const r = rng(21320); for (let i = 0; i < 50; i++) ell(-400 + r() * 1900, -260 + r() * 300, 60 + r() * 80, 30 + r() * 40, { wash: r() < 0.5 ? '#1a2a1e' : '#22362a', washA: 0.95, line: false });
    push(1060, 1260, 1); poly([[-180, 0], [0, -260], [180, 0]], { wash: '#4a3a24', washA: 1, w: 2.4, col: '#1a1008', key: 21321 }); for (let i = 0; i < 12; i++) pencil([[-170 + i * 30, 0], [0, -250]], { w: 2, col: '#2a1a0a', a: 0.6, pass2: false }); poly([[-40, 0], [0, -80], [40, 0]], { wash: '#0a0604', washA: 1, line: false }); glow(0, -30, 50, 'rgba(255,150,60,1)', 0.25); pop();
    for (let s2 = 0; s2 < 2; s2++) { push(-80 + s2 * 120, 1330 - s2 * 10, 1); for (let rr = 0; rr < 4; rr++) for (let c = 0; c < 5; c++) { const lg = ell(-80 + c * 40 + (rr % 2) * 20, -20 - rr * 36, 20, 18, { wash: '#8a6a44', washA: 1, w: 1.4, col: '#3a2410' }); ell(-80 + c * 40 + (rr % 2) * 20, -20 - rr * 36, 10, 9, { wash: '#c8a070', washA: 1, w: 0.8, col: '#6a4a24' }); } pop(); }
    push(1250, 1340, 1); const m = blob([[-90, 0], [-100, -110], [-60, -150], [60, -150], [100, -120], [140, -200], [170, -190], [150, -110], [100, -90], [90, 0]], { wash: '#6a5a4a', washA: 1, w: 2, col: '#1a1008', key: 21322 }); shadeG(m.path, -90, 0, 100, 0, '#c86a2a', 0.3); for (const x of [-70, -30, 50, 80]) pencil([[x, -20], [x, 60]], { w: 10, col: '#4a3a2a' }); ell(150, -186, 6, 5, { wash: '#1a1a1a', washA: 1, line: false }); pencil([[130, -210], [120, -250]], { w: 6, col: '#5a4a3a' }); pop();
    for (const [x, y] of [[80, 380], [1000, 260]]) { push(x, y, 1); ell(0, 0, 22, 28, { wash: '#5a4a3a', washA: 1, w: 1.4, col: '#1a1008' }); ell(-8, -8, 7, 7, { wash: '#f8d860', washA: 1, w: 1 }); ell(8, -8, 7, 7, { wash: '#f8d860', washA: Math.sin(t * 3 + x) > -0.9 ? 1 : 0, w: 1 }); poly([[-4, 2], [4, 2], [0, 8]], { wash: '#c8a040', washA: 1, line: false }); pop(); }
  }
  function carbonaia(t) {                                               // угольный курган: земляной купол, отдушины с жаром, дым
    push(380, 1290, 1); const d = blob([[-300, 0], [-260, -120], [-140, -230], [0, -260], [140, -230], [260, -120], [300, 0]], { wash: '#3a2e24', washA: 1, w: 2.4, col: '#0a0604', key: 21330 }); shadeG(d.path, 300, 0, -300, -200, '#e8742a', 0.3); hatch(d.path, d.bb, { gap: 7, a: 0.2, col: '#0a0604', ang: 0.6, key: 21331 });
    const fl = t > EV.lg_fire ? 1.6 : 1; for (const [x, y] of [[-160, -80], [-60, -170], [60, -190], [170, -100], [0, -60]]) { ell(x, y, 14, 9, { wash: '#ff8a2a', washA: 1, w: 1, col: '#5a1a04' }); glow(x, y, 40 * fl, 'rgba(255,120,30,1)', 0.3); }
    for (let i = 0; i < 6; i++) { const q = (t * 0.25 + i / 6) % 1; ell(-60 + Math.sin(q * 6 + i) * 60, -260 - q * 700, 50 + q * 120, 30 + q * 60, { wash: '#8a8090', washA: 0.25 * (1 - q), line: false }); }
    pop();
  }
  function burners(t) {                                                 // угольщики у котла на треноге, костёр, искры
    const up = t > EV.lg_coal && t < EV.lg_leg;
    push(820, 1360, 1); for (const a of [-0.35, 0, 0.35]) pencil([[0, -330], [Math.sin(a) * 150, 0]], { w: 7, col: '#3a2a1a' }); pencil([[0, -330], [0, -220]], { w: 3, col: '#1a1a1a', pass2: false });
    const pot = blob([[-70, -220], [-80, -150], [-50, -110], [50, -110], [80, -150], [70, -220]], { wash: '#1a1a1e', washA: 1, w: 2.4, col: '#000', key: 21340 }); metalG(pot.path, -20, -180, 90, '#6a6a7a', '#2a2a2e', '#000'); ell(0, -220, 70, 14, { wash: '#3a3a3e', washA: 1, w: 1.6 });
    for (let i = 0; i < 3; i++) { const q = (t * 0.7 + i / 3) % 1; ell(-30 + i * 30, -240 - q * 120, 20 + q * 20, 12, { wash: '#ffffff', washA: 0.3 * (1 - q), line: false }); }
    const fs = t > EV.lg_fire ? 1 + 0.5 * Math.exp(-(t - EV.lg_fire) * 2) : 1; for (let i = 0; i < 5; i++) { const fh = (60 + Math.sin(t * 9 + i * 2) * 18) * fs; blob([[-60 + i * 30, -20], [-50 + i * 30, -20 - fh * 0.6], [-40 + i * 30 + Math.sin(t * 7 + i) * 6, -20 - fh], [-30 + i * 30, -20 - fh * 0.5], [-20 + i * 30, -20]], { wash: i % 2 ? '#ffb030' : '#ff6a1a', washA: 0.95, line: false }); }
    for (let i = 0; i < 6; i++) { const lg = rect(-80 + i * 28, -24, 30, 14, { wash: '#4a2a14', washA: 1, w: 1.2, col: '#1a0a04' }); } glow(0, -60, 180 * fs, 'rgba(255,140,50,1)', 0.32); pop();
    human(640, 1380, 1.05, t, { body: '#5a5040', legs: '#3a3228', hair: '#2a2a2a', skin: '#a8846a', face: up ? 'grin' : 'calm', armL: 'hold', armR: up ? 'up' : 'hold', look: 0.6, seed: 21341, beard: 'long', hat: 'merchant', hatCol: '#2a2420' });
    human(1010, 1380, 1.0, t, { body: '#6a5a44', legs: '#3a3228', hair: '#1a1a1a', skin: '#a8846a', face: up ? 'grin' : 'smile', armL: up ? 'up' : 'hold', armR: 'hold', look: -0.6, seed: 21342, flip: -1, beard: 'short', hat: 'cap', hatCol: '#3a3026' });
    for (const [x, y, a] of [[640 + 70, 1380 - 330, -0.5], [1010 - 70, 1380 - 320, 0.5]]) if (up) { push(x, y, 1, a); rect(-4, -60, 8, 70, { wash: '#8a6a3a', washA: 1, w: 1 }); ell(0, -66, 12, 8, { wash: '#8a6a3a', washA: 1, w: 1 }); pop(); }
    motes(24, [700, 900, 950, 1350], '#ffb040', t, 21343, { sp: -80, vx: 10, sz: 3, a: 0.9, tw: 1 });
  }
  function ground(t) {                                                  // земля перед Томом: пень с топором, мешок угля, корзина, угли, папоротник
    const g = rect(-500, 1440, 2100, 700, { wash: '#2a2218', washA: 1, w: 3, col: '#0a0604', key: 21350 }); shadeG(g.path, 0, 1440, 0, 1800, '#0a0604', 0.5); const r = rng(21351); for (let i = 0; i < 60; i++) ell(-400 + r() * 1900, 1460 + r() * 400, 4 + r() * 8, 3 + r() * 4, { wash: r() < 0.5 ? '#1a1a1e' : '#3a3026', washA: 1, line: false });
    push(860, 1460, 1); const st = ell(0, 0, 130, 34, { wash: '#8a6a44', washA: 1, w: 2.4, col: '#3a2410', key: 21352 }); for (let k = 1; k < 5; k++) ell(0, 0, 130 - k * 24, 34 - k * 6, { wash: '#a8845a', washA: 0.2, w: 1, col: '#6a4a24' }); rect(-130, 0, 260, 90, { wash: '#6a4a2a', washA: 1, w: 2, col: '#3a2410' });
    push(40, -10, 1, 0.5); rect(-6, -180, 12, 180, { wash: '#a8743a', washA: 1, w: 1.6 }); poly([[-6, -180], [-60, -160], [-60, -120], [-6, -140]], { wash: '#8a8e96', washA: 1, w: 2, col: '#2a2e36' }); pop();
    if (t > EV.lg_book) { push(-40, -40, 1); const k = popK(t, EV.lg_book, 0.35); push(0, 0, k); const bk = rect(-150, -80, 300, 100, { wash: '#6a2a1a', washA: 1, w: 2, col: '#2a0a04' }); rect(-140, -90, 280, 20, { wash: '#f4ecd4', washA: 1, w: 1 }); txt('LA CUCINA ROMANA', 0, -40, 24, { font: 'Osw', col: '#e8c860' }); txt('1930', 0, -10, 22, { font: 'Osw', col: '#e8c860' }); pop(); pop(); }
    pop();
    push(1180, 1470, 1); const sk = blob([[-80, 0], [-90, -110], [-40, -140], [40, -140], [90, -110], [80, 0]], { wash: '#8a7a5a', washA: 1, w: 2, col: '#2a2010', key: 21353 }); hatch(sk.path, sk.bb, { gap: 6, a: 0.25, col: '#2a2010', ang: 0.4, key: 21354 }); for (let i = 0; i < 6; i++) blob([[-50 + i * 20, -140], [-44 + i * 20, -170], [-30 + i * 20, -160], [-34 + i * 20, -140]], { wash: '#1a1a1e', washA: 1, w: 1 }); txt('CARBONE', 0, -60, 20, { font: 'Osw', col: '#2a2010' }); pop();
    castShadow(560, 1450, 200, 200, -0.8, 0.35, '#0a0410');
  }
  function bookPage(t) {                                                // раскрытая книга 1930 в лапах Тома крупно: пустая страница, «?» → «✕ НЕТ»
    if (t < EV.lg_war || t > EV.lg_coal + 0.3) return; const k = sm(clamp((t - EV.lg_war) / 0.4)) * (1 - sm(clamp((t - EV.lg_coal) / 0.3)));
    push(860, 1130, 0.4 + 0.45 * k, -0.05); const L = rect(-230, -160, 230, 300, { wash: '#f4ecd4', washA: 1, w: 2, col: '#5a4a2a' }), R = rect(0, -160, 230, 300, { wash: '#f4ecd4', washA: 1, w: 2, col: '#5a4a2a' }); shadeG(L.path, 0, 0, -230, 0, '#c8b898', 0.35); shadeG(R.path, 0, 0, 230, 0, '#c8b898', 0.25);
    txt('Primi piatti', -115, -120, 24, { font: 'Hand', col: '#3a2a1a' }); ['Cacio e pepe', 'Amatriciana', 'Gricia', 'Fettuccine', 'Gnocchi'].forEach((s, i) => txt(s, -115, -80 + i * 34, 20, { font: 'Hand', col: '#3a2a1a' }));
    txt('Carbonara?', 115, -100, 28, { font: 'Hand', col: '#8a7a5a' }); for (let i = 0; i < 4; i++) rect(30, -60 + i * 30, 170, 6, { wash: '#d8ccb0', washA: 0.5, line: false });
    if (t > EV.lg_no) { const q = popK(t, EV.lg_no, 0.3); push(115, 20, q); pencil([[-70, -70], [70, 70]], { w: 16, col: '#d8241e', pass2: false }); pencil([[70, -70], [-70, 70]], { w: 16, col: '#d8241e', pass2: false }); txt('НЕТ', 0, 120, 40, { font: 'Osw', col: '#d8241e' }); pop(); }
    pop();
  }
  function front(t) {                                                   // передний план: папоротники, ветка, светлячки
    for (const [x, sd] of [[-150, 1], [1250, -1]]) { push(x, 1950, 1.7, 0, sd); for (let i = 0; i < 6; i++) { const a = -2.2 + i * 0.25; const pts = []; for (let k = 0; k < 6; k++) pts.push([Math.cos(a) * k * 50 + k * k * 2, Math.sin(a) * k * 50 + k * k * 4]); pencil(spline(pts, false, 6), { w: 4, col: '#1a3a1a', pass2: false }); for (let k = 1; k < 6; k++) { const [px, py] = pts[k]; blob([[px, py], [px - 18, py + 8], [px - 4, py + 14]], { wash: '#2a5a2a', washA: 1, line: false }); blob([[px, py], [px + 18, py + 8], [px + 4, py + 14]], { wash: '#2a5a2a', washA: 1, line: false }); } } pop(); }
    motes(14, [-200, 600, 1300, 1600], '#e8ff80', t, 21360, { sp: 10, sz: 4, a: 0.8, tw: 1, wob: 20 });
  }
  WORLD.legend = (t, u, cat) => {
    const lgk = t > EV.lg_leg ? sm(clamp((t - EV.lg_leg) / 0.6)) : 0;
    lay(22, () => { night(t); });
    lay(6, () => { forest(t); haze('#1a2040', 0.08); });
    lay(3.6, () => { carbonaia(t); burners(t); lightPool(820, 1360, 520, 140, 'rgba(255,140,60,1)', 0.3); });
    lay(1, () => { cat(); ground(t); lightPool(700, 1460, 520, 90, 'rgba(255,150,70,1)', 0.25); shaft(880, -100, 260, 1600, 0.2, 'rgba(180,200,255,0.5)', 0.07); });
    lay(0.95, () => { bookPage(t); });
    lay(0.6, () => { front(t); moodDark(640, 1200, 480, 1500, '#04060e', 0.55); if (lgk > 0) { screenFill('#c8a070', 0.35 * lgk, 'multiply'); for (let i = 0; i < 5; i++) { const q = (t * 0.3 + i / 5) % 1; ell(200 + i * 200, 1500 - q * 900, 260, 120, { wash: '#a8988a', washA: 0.25 * lgk, line: false }); } } });
    if (t > EV.lg_leg) { const k = popK(t, EV.lg_leg + 0.1, 0.3); scr(() => { ctx.save(); ctx.translate(560, 820); ctx.rotate(-0.12); ctx.scale(k * 1.0 + (1 - Math.min(1, k)) * 2.2, k); ctx.globalAlpha = Math.min(1, k); ctx.strokeStyle = '#d8241e'; ctx.lineWidth = 12; ctx.strokeRect(-300, -80, 600, 160); ctx.fillStyle = '#d8241e'; ctx.font = 'bold 110px Oswald'; ctx.textAlign = 'center'; ctx.fillText('ЛЕГЕНДА', 0, 40); ctx.restore(); }); }
  };
  DIR.legend = {
    outfit: 'carbA', light: { side: 1, rim: '#ff9a4a' }, grade: ['#ff8a40', 0.08],
    act: () => [[S0.legend, 'suspicious'], [EV.lg_book, 'talk'], [EV.lg_no, 'shock'], [EV.lg_coal, 'grin'], [EV.lg_fire, 'awe'], [EV.lg_leg, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 540, y: 1590, s: 1.15, flip: 1, look: t < EV.lg_coal ? [0.6, 0.4] : [0.8, -0.1], hand: t < EV.lg_coal ? [210, -300] : [150, -260], handF: [-60, -240], prop: t > EV.lg_coal ? 'coalP' : undefined, soot: 1, point: t > EV.lg_leg ? 1 : undefined }),
    cam: () => [[S0.legend, 620, 1120, 0.24], [EV.lg_book, 650, 1160, 0.28, 'x'], [EV.lg_no, 660, 1140, 0.3], [EV.lg_coal, 640, 1100, 0.24, 'x'], [EV.lg_fire, 660, 1120, 0.26], [EV.lg_leg, 620, 1060, 0.24, 'x'], [S1.legend, 620, 1060, 0.26]]
  };
  TRANS_IN.legend = { a: 0.25, b: 0.5, runA: 1, fx(k, t, A, B) {         // дым угля: клубы снизу заволакивают кадр и рассеиваются в ночь
    drawBuf(k < 0.5 ? A : B, 1, 540, 960);
    scr(() => { const r = rng(21370), cov = Math.sin(Math.PI * k); for (let i = 0; i < 46; i++) { const x = r() * W, y = H - r() * H * 1.2 * cov - (k * 400), rr = 160 + r() * 260; const g = ctx.createRadialGradient(x, y, 0, x, y, rr); g.addColorStop(0, `rgba(${60 + (r() * 40) | 0},${50 + (r() * 30) | 0},${50 + (r() * 30) | 0},${0.9 * cov})`); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(x - rr, y - rr, rr * 2, rr * 2); } });
    rewTag(k, 0.8);
  } };
})();
