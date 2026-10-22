/* 002 — `hook`: «Сто тысяч долларов — за один наггетс?!» Ночной аукционный зал: изумрудные обои с золотыми рамами (портреты кур), бархатные кулисы,
   табло ставок крутится от $0,99 до $99 997, ряды покупателей вскидывают таблички, аукционист с молотком. В луче прожектора — наггетс-человечек под стеклянным колпаком.
   0,0 с — камера летит в колпак, таблички взлетают, табло бешено крутится. Том в смокинге+фартуке: шок. «Откусим историю!» — снимает колпак, кусает — зал ахает. */
(() => {
  EV.hk_sold = wtw('h1', 'наггетс?!');
  EV.hk_lift = LS('h2') - 0.05;
  EV.hk_grab = LS('h2') + 0.35;
  EV.hk_bite = wtw('h2', 'историю!') + 0.05;
  SHAKES.push([EV.hk_sold + 0.1, 0.22, 10], [EV.hk_bite, 0.22, 12]);
  KEYW.push('наггетс?!');

  const bid = t => t < 0.15 ? 0.99 : t > EV.hk_sold ? 99997 : 0.99 + 99996 * Math.pow(sm((t - 0.15) / (EV.hk_sold - 0.15)), 1.6);
  function wall(t) {                                                   // изумрудные обои с дамаском, золотые рамы с «куриными» портретами, люстры
    vgrad(-600, 1600, ['#06140f', '#0e2a20', '#143628']);
    const r = rng(1201); for (let i = 0; i < 80; i++) { const x = (i % 10) * 150 - 100 + (Math.floor(i / 10) % 2) * 75, y = Math.floor(i / 10) * 160 + 120; push(x, y, 1); for (const sd of [-1, 1]) pencil(spline([[0, -40], [sd * 26, -20], [sd * 10, 0], [sd * 24, 22], [0, 40]], false, 5), { w: 2, col: '#2e5a44', a: 0.5, pass2: false }); pop(); }
    for (const [x, y, w, h, k] of [[-40, 260, 230, 300, 0], [840, 240, 250, 320, 1]]) { const f = rect(x, y, w, h, { wash: '#d6a842', washA: 1, w: 3, col: '#4a2a06', key: 1210 + k }); metalG(f.path, x + 40, y + 40, 300, '#fff0b0', '#d6a842', '#6a4208');
      const c = rect(x + 24, y + 24, w - 48, h - 48, { wash: k ? '#5a2a1a' : '#2a3a4a', washA: 1, w: 2, col: '#2a1408' }); push(x + w / 2, y + h / 2 + 30, 0.9, 0); // куриный портрет в парике / с медалью
      blob([[-50, 60], [-60, -10], [-30, -60], [20, -70], [50, -30], [56, 40], [40, 70]], { wash: '#f2ead8', washA: 1, w: 2, col: '#3a2a14' }); poly([[10, -70], [20, -96], [30, -72], [40, -92], [44, -64]], { wash: '#c8281e', washA: 1, w: 1.6, col: '#3a0a06' });
      poly([[46, -30], [80, -20], [46, -12]], { wash: '#e8b53a', washA: 1, w: 1.6, col: '#5a3a08' }); ell(26, -36, 6, 6, { wash: '#1a0a04', washA: 1, line: false }); blob([[44, -8], [54, 10], [40, 14]], { wash: '#c8281e', washA: 1, w: 1.2 });
      if (k) { ell(0, 40, 16, 16, { wash: '#d6a842', washA: 1, w: 1.6, col: '#5a3a08' }); pencil([[-10, 20], [0, 30], [10, 20]], { w: 4, col: '#2a4a8a', pass2: false }); } else { for (let q = 0; q < 6; q++) ell(-40 + q * 8, -60 - Math.sin(q) * 6, 12, 12, { wash: '#f6f6f6', washA: 1, w: 1.2, col: '#8a8a8a' }); } pop(); }
    for (const x of [300, 780]) { pencil([[x, -200], [x, 80]], { w: 4, col: '#8a6a2a' }); for (let i = 0; i < 9; i++) { const a = i / 8 * Math.PI; pencil([[x, 120], [x + Math.cos(a) * 110, 120 + Math.sin(a) * 40]], { w: 3, col: '#c99636', pass2: false }); ell(x + Math.cos(a) * 110, 110 + Math.sin(a) * 40, 8, 14, { wash: '#fff2c0', washA: 1, w: 1.2, col: '#8a6a2a' }); }
      glow(x, 120, 300 * flick(t, x), 'rgba(255,214,140,1)', 0.45); for (let i = 0; i < 7; i++) { const yy = 120 + i * 18; ell(x - 40 + i * 13, yy + 40, 5, 9, { wash: '#e8f6ff', washA: 0.9, w: 1, col: '#8aa0b0' }); } }
  }
  function board(t) {                                                  // табло ставок: латунная рама, перекидные цифры, лампочки по периметру
    const x = 540, y = 690, v = bid(t), sold = t > EV.hk_sold;
    push(x, y, 1, -0.01); const b = rect(-330, -110, 660, 220, { wash: '#1a120c', washA: 1, w: 4, col: '#000' }); pencil([[-330, -110], [330, -110], [330, 110], [-330, 110], [-330, -110]], { w: 12, col: '#c99636', pass2: false });
    for (let i = 0; i < 26; i++) { const px = -320 + i * 25.6, on = Math.sin(t * 14 + i) > (sold ? -1 : 0.2); for (const py of [-110, 110]) { ell(px, py, 6, 6, { wash: on ? '#fff2a0' : '#5a4a2a', washA: 1, line: false }); if (on) glow(px, py, 22, 'rgba(255,230,140,1)', 0.5); } }
    txt('ТЕКУЩАЯ СТАВКА', 0, -70, 34, { font: 'Osw', col: '#c99636' });
    const s = money(v); ctx.save(); ctx.font = '600 120px Osw'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.shadowColor = sold ? 'rgba(255,90,40,1)' : 'rgba(255,200,80,1)'; ctx.shadowBlur = 30; ctx.fillStyle = sold ? '#ff6a3a' : '#ffd24a'; ctx.fillText(s, 0, 30); ctx.restore();
    for (let i = -5; i <= 5; i++) pencil([[i * 54, -20], [i * 54, 90]], { w: 2, col: '#000', a: 0.5, pass2: false }); pencil([[-310, 32], [310, 32]], { w: 2, col: '#000', a: 0.6, pass2: false });
    pop();
  }
  function curtain(x, side, t) { const sw = Math.sin(t * 1.1 + x) * 12; const c = shape(spline([[x - 170 * side, -300], [x + 170 * side, -300], [x + 150 * side + sw, 700], [x + 40 * side, 1500], [x - 170 * side, 1500]], true, 8), { wash: '#6a0a1a', washA: 1, w: 3, col: '#1a0206', key: 1220 + side });
    shadeG(c.path, x + 170 * side, 0, x - 60 * side, 0, '#1a0206', 0.6); for (let i = -3; i <= 3; i++) pencil([[x + i * 44 * side, -280], [x + i * 40 * side + sw * 0.6, 1480]], { w: 2.4, col: '#a8283a', a: 0.45, pass2: false });
    pencil(spline([[x - 160 * side, 760], [x + 60 * side, 800], [x + 150 * side, 740]], false, 6), { w: 12, col: '#d6a842', pass2: false }); ell(x + 150 * side, 760, 18, 34, { wash: '#d6a842', washA: 1, w: 2, col: '#5a3a08' }); }
  function floor(t) {                                                 // ковёр зала: бордо с золотыми ромбами, уходит в перспективу
    const f = rect(-500, 1060, 2100, 1200, { wash: '#4a0a14', washA: 1, w: 2, col: '#1a0206', key: 1260 }); shadeG(f.path, 0, 1700, 0, 1060, '#1a0206', 0.5);
    for (let r = 0; r < 8; r++) for (let i = 0; i < 16; i++) { const x = -400 + i * 130 + (r % 2) * 65, y = 1090 + r * 60; poly([[x, y - 16], [x + 26, y], [x, y + 16], [x - 26, y]], { wash: '#a8742a', washA: 0.5, line: false }); }
  }
  function bidders(t) {                                                // ряды покупателей: таблички с номерами взлетают, на «наггетс» все ахают
    const rows = [[1130, 0.62, 6, 140], [1250, 0.74, 5, 170]]; let n = 0;
    rows.forEach(([y, s, cnt, gap], ri) => { for (let i = 0; i < cnt; i++, n++) { const x = 120 + i * gap + ri * 40, up = Math.sin(t * 5 + n * 1.7) > 0.3 && t < EV.hk_sold + 0.6, wow = t > EV.hk_bite;
      human(x, y, s, t, { body: ['#2a2a34', '#5a1a2a', '#1a2a3a', '#3a3a2a', '#4a2a4a', '#2a3a2a'][n % 6], hair: ['#2a1a0a', '#8a6a3a', '#1a1a1a', '#c8c8c8', '#6a3a1a'][n % 5], face: wow ? 'shock' : t > EV.hk_sold ? 'shock' : 'calm',
        armL: 'down', armR: up || wow ? 'up' : 'hold', seed: 40 + n, flip: x > 540 ? -1 : 1, look: x > 540 ? -0.4 : 0.4, beard: n % 4 === 1 ? 'short' : undefined });
      if (up && !wow) { const hx = x + (x > 540 ? -82 : 82) * s, hy = y + (-238 + 22 - 104) * s; pencil([[hx, hy], [hx, hy - 60 * s]], { w: 5, col: '#6a4424', pass2: false }); ell(hx, hy - 90 * s, 34 * s, 30 * s, { wash: '#f6ecd6', washA: 1, w: 2, col: '#2a1a0a' }); txt(String(100 + n * 7), hx, hy - 90 * s, 24 * s, { font: 'Osw', col: '#2a1a0a' }); }
      if (n % 2 === 0) hat20(x, y, s, n % 4 ? 'fedora' : 'cloche', n % 4 ? '#1a1a1a' : '#8a2a3a', x > 540 ? -1 : 1); } });
  }
  function auctioneer(t) {                                             // аукционист за кафедрой: молоток бьёт на «наггетс»
    const hit = t > EV.hk_sold - 0.15 && t < EV.hk_sold + 0.1; human(980, 1180, 0.8, t, { body: '#1a1a20', hair: '#c8c8c8', face: t > EV.hk_bite ? 'shock' : 'smile', armL: 'down', armR: hit ? 'point' : 'up', seed: 61, flip: -1, look: -0.6 });
    stache(980, 1180, 0.8, -1); const p = poly([[860, 1060], [1100, 1060], [1080, 1300], [880, 1300]], { wash: '#5a3418', washA: 1, w: 2.6, col: '#1a0a04', key: 1230 }); shadeG(p.path, 1100, 0, 900, 0, '#2a1408', 0.5); rect(850, 1040, 260, 28, { wash: '#7a4a24', washA: 1, w: 2.4, col: '#1a0a04' });
    ell(980, 1170, 40, 40, { wash: '#d6a842', washA: 1, w: 2, col: '#5a3a08' }); txt('LOT 1', 980, 1172, 22, { font: 'Osw', col: '#3a2408' });
    push(900, hit ? 1030 : 950, 1, hit ? -0.2 : -1.0); pencil([[0, 0], [0, -90]], { w: 8, col: '#6a3a18' }); rect(-34, -116, 68, 30, { wash: '#7a4420', washA: 1, w: 2.2, col: '#2a1408' }); pop();
  }
  function pedestal(t) {                                               // мраморная тумба, бархатная подушка, наггетс-человечек под стеклянным колпаком, бархатные канаты
    const x = 400, lift = clamp((t - EV.hk_lift) / 0.4), grabbed = t > EV.hk_grab;
    for (const px of [130, 670]) { pencil([[px, 1450], [px, 1260]], { w: 12, col: '#c99636' }); ell(px, 1250, 16, 16, { wash: '#e8c860', washA: 1, w: 2, col: '#5a3a08' }); }
    pencil(spline([[130, 1270], [270, 1330], [400, 1340], [530, 1330], [670, 1270]], false, 8), { w: 14, col: '#7a0a1a', pass2: false });
    const p = rect(x - 110, 1180, 220, 270, { wash: '#efe8e0', washA: 1, w: 3, col: '#3a3a3a', key: 1240 }); shadeG(p.path, x + 110, 0, x - 40, 0, '#a8a098', 0.55); for (let i = 0; i < 4; i++) pencil(spline([[x - 100 + i * 50, 1190], [x - 80 + i * 50, 1300], [x - 96 + i * 50, 1440]], false, 5), { w: 1.4, col: '#a8a098', a: 0.6, pass2: false });
    rect(x - 130, 1160, 260, 30, { wash: '#e0d8cc', washA: 1, w: 2.6, col: '#3a3a3a' }); const c = blob([[x - 100, 1160], [x - 110, 1120], [x, 1100], [x + 110, 1120], [x + 100, 1160]], { wash: '#8a0a24', washA: 1, w: 2.4, col: '#2a0208', key: 1241 }); shadeG(c.path, x + 100, 1160, x - 40, 1110, '#3a0210', 0.5);
    for (const sd of [-1, 1]) { pencil([[x + sd * 104, 1150], [x + sd * 120, 1180]], { w: 4, col: '#d6a842', pass2: false }); }
    if (!grabbed) nugget(x, 1080, 0.85, Math.sin(t * 2) * 0.05, { kind: 'among', key: 7710 });
    const dy = -lift * 260, dx = -lift * 420; push(x + dx, 1120 + dy, 1, -lift * 0.7); const d = shape(spline([[-120, 40], [-120, -60], [-80, -150], [0, -180], [80, -150], [120, -60], [120, 40]], false, 10), { line: true, w: 3, col: '#a8c8d8' });
    ctx.save(); ctx.globalAlpha = 0.18; ctx.fillStyle = '#cfeaf6'; ctx.fill(d.path); ctx.restore(); pencil(spline([[-80, -110], [-60, -150], [-20, -168]], false, 5), { w: 8, col: '#ffffff', a: 0.7, pass2: false }); ell(0, -186, 18, 12, { wash: '#d6a842', washA: 1, w: 2, col: '#5a3a08' }); rect(-126, 30, 252, 16, { wash: '#d6a842', washA: 1, w: 2, col: '#5a3a08' }); pop();
  }
  function spot(t) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; const g = ctx.createLinearGradient(400, -200, 400, 1300); g.addColorStop(0, 'rgba(255,240,200,0.0)'); g.addColorStop(1, 'rgba(255,240,200,0.22)'); ctx.fillStyle = g;
    ctx.beginPath(); ctx.moveTo(340, -200); ctx.lineTo(460, -200); ctx.lineTo(620, 1300); ctx.lineTo(180, 1300); ctx.fill(); ctx.restore(); glow(400, 1080, 220, 'rgba(255,240,190,1)', 0.45);
    motes(30, [200, 0, 600, 1300], '#fff6d8', t, 1250, { sp: 20, sz: 3, a: 0.6 }); }
  function flashes(t) { const r = rng(hsh(Math.floor(t * 6), 3)); if (r() > 0.55 || t < EV.hk_sold - 0.3) return; const x = r() * 1080, y = 1100 + r() * 300; glow(x, y, 160, 'rgba(255,255,255,1)', 0.8); }
  WORLD.hook = (t, u, cat) => {
    lay(30, () => { wall(t); }); lay(14, () => { board(t); curtain(-60, 1, t); curtain(1140, -1, t); haze('#1a3a2a', 0.08); });
    lay(5, () => { floor(t); bidders(t); auctioneer(t); haze('#0a1a12', 0.06); });
    lay(1, () => { pedestal(t); spot(t); cat(); crumbs(520, 900, t, EV.hk_bite, 26, 5); });
    lay(0.6, () => { for (const x of [60, 1020]) { const c = blob([[x - 110, 2000], [x - 100, 1640], [x, 1600], [x + 100, 1640], [x + 110, 2000]], { wash: '#2a0a12', washA: 1, w: 3, col: '#000' }); } flashes(t); });
  };
  DIR.hook = {
    outfit: 'tuxA', light: { side: -1, rim: '#ffe6b0' }, grade: ['#3a9a6a', 0.08],
    act: () => [[0, 'awe'], [0.4, 'shock'], [EV.hk_sold + 0.2, 'suspicious'], [EV.hk_lift, 'smug'], [EV.hk_bite - 0.15, 'grin'], [EV.hk_bite + 0.12, 'laugh']],
    pose: (t, u, b) => { const grab = t > EV.hk_grab, bite = t > EV.hk_bite - 0.25, reach = t > EV.hk_lift - 0.1 && !grab;
      return Object.assign(b, { x: 760, y: 1560, s: 1.18, flip: true, look: t < EV.hk_sold ? [-0.3, -0.7] : reach ? [0.7, 0.3] : [0, 0],
        hand: t > EV.hk_bite + 0.35 ? [130, -240] : bite ? [60, -350] : grab ? [140, -280] : reach ? [270, -330] : [70, -150], handF: t < EV.hk_sold + 0.4 ? [-90, -320] : [-90, -170],
        prop: grab ? (t > EV.hk_bite + 0.05 ? 'amongBiteP' : 'amongP') : undefined, tailUp: t > EV.hk_bite, squash: b.squash + (t > EV.hk_bite && t < EV.hk_bite + 0.12 ? 0.1 : 0) }); },
    cam: () => [[0, 400, 1080, 0.55], [0.6, 520, 1050, 0.1, 'x'], [EV.hk_sold, 560, 900, 0.0], [EV.hk_sold + 0.4, 600, 1020, 0.12], [EV.hk_grab, 640, 1060, 0.2], [EV.hk_bite, 700, 1020, 0.36], [S1.hook, 720, 1000, 0.44]]
  };
})();
