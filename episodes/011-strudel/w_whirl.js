/* 011 — `whirl`: «А имя „штрудель“ значит „водоворот“. Разрежь рулет — и на срезе закрутится вихрь.» ТОМ-МАЛЫШ (раз за ролик) внутри гигантского среза штруделя:
   над ним закручивается спираль теста — светлые слоистые витки, между ними яблочные кубы-валуны с бликами сока, изюм-камни, коричная метель, пар. Под лапами —
   румяная корочка. За срезом — гигантская кухня: край тарелки, ложка с ванильным соусом, окно.
   По словам: Том-малыш катит яблочный куб; «водоворот» — спираль начинает вращаться, Тома качает; «Разрежь» — сверху проходит лезвие ножа с бликом;
   «вихрь» — коричная метель закручивается воронкой; немая пауза — сверху опускается гигантская вилка, Том-малыш приседает. Переход В сцену: срез-спираль раскручивается. */
(() => {
  EV.wh_name = wtw('s5', '«штрудель»');
  EV.wh_whirl = wtw('s5', '«водоворот».');
  EV.wh_cut = wtw('s5', 'Разрежь');
  EV.wh_vortex = wtw('s5', 'вихрь.');
  EV.wh_fork = LE('s5') - 0.1;
  SHAKES.push([EV.wh_cut + 0.15, 0.2, 10], [EV.wh_fork + 0.3, 0.2, 8]);
  KEYW.push('«водоворот».', 'вихрь.');
  const spin = t => t < EV.wh_whirl ? 0 : (t - EV.wh_whirl) * 0.9 + (t > EV.wh_vortex ? (t - EV.wh_vortex) * 1.2 : 0);

  function giantKitchen(t) {                                            // за краем среза: гигантская кухня — окно, край тарелки, ложка в соусе
    vgrad(-800, 1600, ['#6a4a30', '#a8784a', '#d8a868']); glow(900, 100, 700, 'rgba(255,230,170,1)', 0.35);
    push(980, 60, 2.6); rect(-90, -140, 180, 240, { wash: '#cfe6f6', washA: 1, w: 3, col: '#f0e8d8' }); pencil([[0, -140], [0, 100]], { w: 6, col: '#f0e8d8' }); pop();
    const pl = ell(540, 1560, 1500, 300, { wash: '#f8f6f0', washA: 1, w: 4, col: '#8a8a92', key: 11700 }); shadeG(pl.path, 0, 1700, 0, 1300, '#c8c4bc', 0.4); pencil(ellPts(540, 1560, 1440, 280, 0, 1, 60).slice(30, 58), { w: 14, col: '#c8a050', a: 0.7, pass2: false });
    const sc = blob([[-400, 1500], [-200, 1430], [200, 1440], [500, 1470], [600, 1540], [200, 1600], [-300, 1580]], { wash: SD.vanilla, washA: 1, w: 2, col: '#c8a050' }); glow(0, 1480, 200, 'rgba(255,250,220,1)', 0.4);
    push(-120, 700, 2.2, -0.5); pencil([[0, 0], [0, -400]], { w: 26, col: '#c8ccd2' }); const sp = ell(0, 60, 70, 100, { wash: '#d8dce0', washA: 1, w: 3, col: '#4a4e54' }); metalG(sp.path, -20, 40, 100, '#ffffff', '#b8bcc4', '#5a5e66'); pop();
  }
  function spiral(t) {                                                  // гигантская спираль среза: витки теста, яблочные кубы, изюм, корица; вращается
    const cx = 540, cy = 900, R = 660, sp = spin(t);
    const disk = ell(cx, cy, R, R, { wash: SD.apple, washA: 1, w: 5, col: '#6a3a10', key: 11710 }); shadeG(disk.path, cx + R, cy + R, cx - R * 0.3, cy - R * 0.3, SD.appleD, 0.5);
    ctx.save(); ctx.clip(disk.path); const r = rng(11711);
    for (let i = 0; i < 26; i++) { const a = r() * 6.283 + sp, d = 0.18 + Math.sqrt(r()) * 0.78, x = cx + Math.cos(a) * R * d, y = cy + Math.sin(a) * R * d, sz = 60 + r() * 50;
      push(x, y, 1, r() * 3 + sp); cube3(0, 0, sz, r() > 0.6); pop(); }
    for (let i = 0; i < 8; i++) { const a0 = r() * 6.283 + sp; pencil(Array.from({ length: 12 }, (_, j) => { const a = a0 + j * 0.12, d = (0.3 + r() * 0.05 + j * 0.03) * R; return [cx + Math.cos(a) * d, cy + Math.sin(a) * d]; }), { w: 10, col: '#a8642a', a: 0.35, pass2: false }); }
    for (let i = 0; i < 12; i++) { const a = r() * 6.283 + sp, d = 0.2 + Math.sqrt(r()) * 0.75; const x = cx + Math.cos(a) * R * d, y = cy + Math.sin(a) * R * d; const rs = blob([[x - 34, y], [x - 26, y - 26], [x + 6, y - 32], [x + 34, y - 6], [x + 24, y + 24], [x - 14, y + 26]], { wash: SD.raisin, washA: 1, w: 2, col: '#1a0a04' }); pencil([[x - 14, y - 12], [x + 12, y + 8]], { w: 2, col: '#8a4a3a', a: 0.6, pass2: false }); }
    for (let i = 0; i < 160; i++) { const a = r() * 6.283 + sp, d = r(); ell(cx + Math.cos(a) * R * d, cy + Math.sin(a) * R * d, 3, 3, { wash: SD.cin, washA: 0.7, line: false }); }
    const turns = 2.6, P = []; for (let i = 0; i <= 160; i++) { const q = i / 160, a = q * turns * 6.283 + sp, Rr = 0.05 + q * 0.95; P.push([cx + Math.cos(a) * R * Rr, cy + Math.sin(a) * R * Rr]); }
    const sh = P.map(([x, y]) => [x + 10, y + 14]); pencil(sh, { w: 120, col: '#6a3a10', a: 0.45, pass2: false, gap: false });
    pencil(P, { w: 104, col: '#8a4a14', a: 0.9, pass2: false, gap: false }); pencil(P, { w: 92, col: SD.dough, a: 1, pass2: false, gap: false });
    pencil(P.map(([x, y]) => [x - 8, y - 10]), { w: 40, col: '#fffaf0', a: 0.45, pass2: false, gap: false });
    for (const off of [-34, -18, 0, 18, 34]) { const P2 = P.map(([x, y]) => { const dx = x - cx, dy = y - cy, L = Math.hypot(dx, dy) || 1; return [x + dx / L * off, y + dy / L * off]; }); pencil(P2, { w: 2, col: '#d8b878', a: 0.8, pass2: false }); }
    ctx.restore();
    pencil(ellPts(cx, cy, R + 30, R + 30, 0, 1, 90), { w: 60, col: SD.crust, pass2: false }); pencil(ellPts(cx, cy, R + 58, R + 58, 0, 1, 90), { w: 8, col: SD.crustD, a: 0.8, pass2: false }); pencil(ellPts(cx, cy, R + 6, R + 6, 0, 1, 90), { w: 6, col: '#fff0c8', a: 0.6, pass2: false }); const rr2 = rng(11712); for (let i = 0; i < 80; i++) { const a = rr2() * 6.283; ell(cx + Math.cos(a) * (R + 40), cy + Math.sin(a) * (R + 40) - 16, 4, 3, { wash: '#fffaf0', washA: 0.9, line: false }); }
  }
  function ground(t) {                                                  // пол: румяная корочка внизу среза, крошки, сахарная пудра
    const g = shape(spline([[-400, 1600], [100, 1560], [540, 1550], [980, 1560], [1500, 1600], [1500, 2200], [-400, 2200]], true, 8), { wash: SD.crust, washA: 1, w: 3, col: '#4a2408', key: 11720 }); shadeG(g.path, 0, 2100, 0, 1560, SD.crustD, 0.5);
    for (let i = 0; i < 6; i++) pencil(spline([[-400, 1640 + i * 40], [540, 1620 + i * 44], [1500, 1640 + i * 40]], false, 6), { w: 3, col: i % 2 ? SD.crustL : SD.crustD, a: 0.5, pass2: false });
    const r = rng(11721); for (let i = 0; i < 60; i++) ell(-300 + r() * 1700, 1570 + r() * 40, 4 + r() * 4, 3, { wash: '#fffaf0', washA: 0.9, line: false });
  }
  function cube3(x, y, sz, skin) {                                      // яблочный кубик в 3D: лицевая грань, верх светлее, бок темнее, кожура, блик сока
    const d = sz * 0.3; poly([[x - sz / 2, y - sz / 2], [x - sz / 2 + d, y - sz / 2 - d], [x + sz / 2 + d, y - sz / 2 - d], [x + sz / 2, y - sz / 2]], { wash: skin ? '#c8382a' : '#fbe8b0', washA: 1, w: 2, col: '#8a5a1a' });
    poly([[x + sz / 2, y - sz / 2], [x + sz / 2 + d, y - sz / 2 - d], [x + sz / 2 + d, y + sz / 2 - d], [x + sz / 2, y + sz / 2]], { wash: '#d8a848', washA: 1, w: 2, col: '#8a5a1a' });
    const f = rect(x - sz / 2, y - sz / 2, sz, sz, { wash: '#f2d27a', washA: 1, w: 2, col: '#8a5a1a' }); shadeG(f.path, x + sz / 2, y + sz / 2, x - sz / 2, y - sz / 2, '#c8963a', 0.35); glow(x - sz * 0.2, y - sz * 0.2, sz * 0.25, 'rgba(255,255,230,1)', 0.7);
    for (let i = 0; i < 3; i++) ell(x - sz * 0.25 + i * sz * 0.25, y + sz * 0.1 + (i % 2) * sz * 0.15, 2.5, 2.5, { wash: SD.cin, washA: 0.8, line: false });
  }
  function apple(t) {                                                   // яблочный куб, который катит Том-малыш
    const k = clamp((t - S0.whirl) / (EV.wh_whirl - S0.whirl)); const x = lerp(260, 470, sm(k)), rot = k * 1.57;
    push(x, 1490, 1, rot * 0.2); cube3(0, 0, 150, true); pop();
  }
  function knife(t) { if (t < EV.wh_cut - 0.2 || t > EV.wh_cut + 0.7) return; const k = clamp((t - EV.wh_cut + 0.2) / 0.6), x = lerp(-600, 1700, k);
    push(x, 640, 1, -0.08); const b = poly([[-500, -60], [500, -60], [560, 20], [-500, 40]], { wash: '#e8ecf0', washA: 1, w: 4, col: '#2a2e34' }); metalG(b.path, 0, -20, 600, '#ffffff', '#c8ccd2', '#6a6e74'); rect(-760, -70, 260, 110, { wash: '#2a1a10', washA: 1, w: 3 }); glow(200, -10, 160, 'rgba(255,255,255,1)', 0.6); pop();
    scr(() => { ctx.globalAlpha = 0.5 * Math.sin(k * Math.PI); ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, W, 8 + k * 6); ctx.globalAlpha = 1; }); }
  function fork(t) { if (t < EV.wh_fork) return; const k = sm(clamp((t - EV.wh_fork) / 0.35)), y = lerp(-900, 260, k) - (t > EV.wh_fork + 0.6 ? sm(clamp((t - EV.wh_fork - 0.6) / 0.3)) * 1000 : 0);
    push(620, y, 1); for (let i = -1; i <= 2; i++) { const tn = shape([[i * 70 - 18, -600], [i * 70 + 18, -600], [i * 70 + 14, 300], [i * 70, 340], [i * 70 - 14, 300]], { wash: '#d8dce0', washA: 1, w: 3, col: '#3a3e44' }); metalG(tn.path, i * 70 - 6, 0, 80, '#ffffff', '#c8ccd2', '#6a6e74'); } rect(-110, -760, 290, 180, { wash: '#c8ccd2', washA: 1, w: 3 }); pop(); }
  WORLD.whirl = (t, u, cat) => {
    lay(8, () => { giantKitchen(t); haze('#ffd8a0', 0.1); });
    lay(1.6, () => { spiral(t); knife(t); fork(t); });
    lay(1.15, () => { ground(t); apple(t); });
    lay(1, () => { cat(); });
    lay(0.6, () => { const r = rng(11740); for (let i = 0; i < 3; i++) { const x = [-60, 1160, 1080][i], y = [1900, 1880, 300][i]; blob([[x - 90, y], [x - 70, y - 70], [x + 10, y - 90], [x + 90, y - 30], [x + 70, y + 60], [x - 40, y + 70]], { wash: i === 2 ? '#f6e2a0' : SD.raisin, washA: 1, w: 3, col: '#1a0a04' }); }
      const vk = t > EV.wh_vortex ? clamp((t - EV.wh_vortex) / 0.4) : 0; for (let i = 0; i < 90; i++) { const a = r() * 6.283 + t * (1 + vk * 4), d = 120 + r() * 800 * (1 - vk * 0.5); ell(540 + Math.cos(a) * d, 900 + Math.sin(a) * d * 0.9 + ((t * 80 + r() * 1900) % 1900) * (1 - vk) - 900 * (1 - vk), 4, 3, { wash: i % 3 ? SD.cin : '#ffffff', washA: 0.8, line: false }); }
      for (let i = 0; i < 4; i++) { const q = (t * 0.4 + i / 4) % 1; pencil(spline([[200 + i * 220, 1600], [180 + i * 220 + Math.sin(q * 6) * 40, 1600 - q * 500], [220 + i * 220, 1600 - q * 900]], false, 5), { w: 20, col: '#ffffff', a: 0.18 * (1 - q), pass2: false }); } });
  };
  DIR.whirl = {
    outfit: 'minerA', light: { side: -1, rim: '#ffe0a0' }, grade: ['#ffb060', 0.1],
    act: () => [[S0.whirl, 'proud'], [EV.wh_name, 'talk'], [EV.wh_whirl, 'awe'], [EV.wh_cut, 'shock'], [EV.wh_vortex, 'laugh'], [EV.wh_fork, 'scared'], [EV.wh_fork + 0.7, 'grin']],
    pose: (t, u, b) => { const push_ = t < EV.wh_whirl, duck = t > EV.wh_fork && t < EV.wh_fork + 0.7, sw = t > EV.wh_whirl ? Math.sin(t * 5) * 0.08 : 0;
      return Object.assign(b, { x: push_ ? lerp(110, 330, sm(clamp((t - S0.whirl) / (EV.wh_whirl - S0.whirl)))) : 640, y: 1590, s: 0.6, flip: push_ ? 1 : -1, walk: push_ ? t * 8 : undefined, rot: sw, squash: b.squash + (duck ? 0.18 : 0),
        look: duck ? [0, -0.9] : t > EV.wh_whirl ? [0, -0.7] : [0.6, 0], hand: push_ ? [150, -200] : t > EV.wh_vortex ? [80, -380] : [100, -220], handF: push_ ? [130, -260] : t > EV.wh_vortex ? [-80, -380] : [-90, -200], tailUp: t > EV.wh_vortex }); },
    cam: () => [[S0.whirl, 540, 1000, 0.0], [S0.whirl + 0.9, 380, 1380, 0.3, 'x'], [EV.wh_whirl, 520, 1200, 0.14], [EV.wh_cut, 540, 1100, 0.08], [EV.wh_vortex, 600, 1360, 0.3], [EV.wh_fork, 600, 1300, 0.22], [S1.whirl, 600, 1300, 0.24]]
  };
  // ---------------------------------------------------------------- переход: срез-спираль раскручивается — новый кадр виден внутри растущей спирали
  TRANS_IN.whirl = { a: 0.3, b: 0.5, runA: 0.3, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const e = sm(k), P = [], turns = 3;
    for (let i = 0; i <= 200; i++) { const q = i / 200, a = q * turns * 6.283 - e * 6, R = q * 1400 * e * 1.2; P.push([540 + Math.cos(a) * R, 960 + Math.sin(a) * R]); }
    const path = new Path2D(); path.moveTo(540, 960); for (const [x, y] of P) path.lineTo(x, y); path.lineTo(540 + 2400, 960); path.arc(540, 960, 2400 * e, 0, 6.283 * e); path.closePath();
    inCircle(540, 960, 1500 * e * e, () => drawBuf(B, 1, 540, 960));
    scr(() => { ctx.save(); ctx.lineWidth = 60 * (1 - e) + 6; ctx.strokeStyle = '#f6e6c0'; ctx.globalAlpha = 0.9 * (1 - e * 0.6); ctx.beginPath(); P.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke(); ctx.lineWidth = 6; ctx.strokeStyle = '#8a4a14'; ctx.stroke(); ctx.restore(); });
  } };
})();
