/* 002 — `batter`: «Задача вторая: панировка отваливается. Яйцо, хлопья, двойная заморозка — держится!» Холодильная камера: сталь, иней, сосульки, огромный
   термометр −10°F (−23°C), морозильник с паром, студент в парке. Том держит панированную палочку — корочка сыплется. «яйцо» — макает в желток (глянец),
   «хлопья» — в лоток с кукурузными хлопьями, «двойная заморозка» — дверь морозилки, облако холода, иней на усах; «держится!» — стучит палочкой: ни крошки.
   Переход В сцену: яичный желток растекается по кадру. */
(() => {
  EV.bt_fall = wtw('s3', 'отваливается.');
  EV.bt_egg = wtw('s3', 'Яйцо,');
  EV.bt_flake = wtw('s3', 'хлопья,');
  EV.bt_frz = wtw('s3', 'двойная');
  EV.bt_ok = wtw('s3', 'держится!');
  SHAKES.push([EV.bt_ok + 0.1, 0.2, 9]);
  KEYW.push('отваливается.', 'держится!');

  Object.assign(PROPS, {
    eggStickP() { nugget(0, -60, 0.6, 1.5, { kind: 'stick', key: 7720, raw: 1 }); ctx.save(); ctx.globalAlpha = 0.55; push(0, -60, 0.6, 1.5); blob([[-80, -24], [80, -26], [84, 22], [-80, 26]], { wash: '#f2b01e', washA: 1, line: false }); pop(); ctx.restore(); glow(-6, -80, 24, 'rgba(255,255,230,1)', 0.8); },
    frostStickP() { nugget(0, -60, 0.6, 1.5, { kind: 'stick', key: 7721 }); ctx.save(); ctx.globalAlpha = 0.35; push(0, -60, 0.6, 1.5); blob([[-80, -30], [80, -32], [84, 30], [-80, 32]], { wash: '#d8f0ff', washA: 1, line: false }); pop(); ctx.restore(); },
  });
  function room(t) {                                                   // холодильная камера: стальные панели, заклёпки, сосульки, термометр
    vgrad(-600, 1600, ['#9ab8cc', '#c8dcea', '#8aa8bc']);
    for (let i = 0; i < 9; i++) { const x = -300 + i * 200, p = rect(x, 100, 196, 1250, { wash: '#b8ccd8', washA: 1, w: 2.4, col: '#3a4a58', key: 2300 + i }); metalG(p.path, x + 60, 400, 900, '#eef6fc', '#b8ccd8', '#6a8294', 0.7); for (let j = 0; j < 12; j++) { ell(x + 14, 130 + j * 100, 4, 4, { wash: '#6a8294', washA: 1, line: false }); ell(x + 182, 130 + j * 100, 4, 4, { wash: '#6a8294', washA: 1, line: false }); } }
    for (let i = 0; i < 30; i++) { const r = rng(2310 + i), x = -280 + i * 56, l = 30 + r() * 90; poly([[x - 10, 100], [x + 10, 100], [x + 2, 100 + l]], { wash: '#e8f6ff', washA: 0.9, w: 1.4, col: '#7a9ab0' }); glow(x, 100 + l, 10, 'rgba(255,255,255,1)', 0.5); }
    push(860, 560, 1); const d = ell(0, 0, 170, 170, { wash: '#f6f6f2', washA: 1, w: 8, col: '#2a3a48', key: 2320 }); for (let i = 0; i <= 12; i++) { const a = Math.PI * 0.8 + i / 12 * Math.PI * 1.4; pencil([[Math.cos(a) * 130, Math.sin(a) * 130], [Math.cos(a) * 150, Math.sin(a) * 150]], { w: 3, col: '#2a3a48', pass2: false }); }
    txt('°F', 0, 70, 34, { font: 'Osw', col: '#2a3a48' }); txt('−10', -80, -60, 28, { font: 'Osw', col: '#2a5aa8' }); const na = Math.PI * 0.8 + 0.12 * Math.PI * 1.4 + Math.sin(t * 9) * 0.02 - (t > EV.bt_frz ? 0.05 : 0);
    pencil([[0, 0], [Math.cos(na) * 130, Math.sin(na) * 130]], { w: 6, col: '#d9482b', pass2: false }); ell(0, 0, 14, 14, { wash: '#2a3a48', washA: 1, line: false }); pop();
    if (t > EV.bt_frz) bubbleTag('−23 °C', 860, 790, t, EV.bt_frz, '#2a5aa8', 46, 0.04);
  }
  function freezer(t) {                                                // ларь-морозильник с открывающейся дверью и облаком холода
    const x = 60, y = 1300, open = t > EV.bt_frz - 0.1 && t < EV.bt_ok - 0.1 ? 1 : 0;
    const b = rect(x - 210, y - 420, 420, 420, { wash: '#e8eef2', washA: 1, w: 3, col: '#2a3a48', key: 2330 }); metalG(b.path, x - 120, y - 300, 500, '#ffffff', '#dfe8ee', '#8aa0b0', 0.8);
    rect(x - 190, y - 400, 380, 220, { wash: '#2a3a48', washA: open ? 1 : 0, line: false }); if (open) { glow(x, y - 300, 220, 'rgba(200,240,255,1)', 0.8); for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) nugget(x - 120 + i * 80, y - 360 + j * 90, 0.45, 1.5, { kind: 'stick', key: 2331 + i + j }); }
    push(x - 210, y - 400, 1, open ? -1.3 : 0); const dr = rect(0, 0, 420, 220, { wash: '#f2f6f8', washA: 1, w: 3, col: '#2a3a48', key: 2332 }); metalG(dr.path, 100, 60, 300, '#ffffff', '#e2eaf0', '#9ab0c0', 0.8); rect(300, 90, 90, 30, { wash: '#9aa6b0', washA: 1, w: 2.4, col: '#2a3a48' }); txt('FREEZER', 160, 110, 34, { font: 'Osw', col: '#2a5aa8' }); pop();
    frost(x - 200, y - 200, 400, 60, t, 1); if (open) { const k = clamp((t - EV.bt_frz + 0.1) / 1.2); for (let i = 0; i < 14; i++) { const r = rng(2340 + i); ell(x + (r() - 0.3) * 600 * k, y - 300 - r() * 200 * k + 200 * k, 80 + 120 * k, 50 + 70 * k, { wash: '#f6fcff', washA: 0.5 * (1 - k * 0.5), line: false }); } }
  }
  function student(t) { human(330, 1240, 1.0, t, { body: '#3a6a9a', hair: '#2a1a0a', face: t > EV.bt_ok ? 'grin' : t > EV.bt_fall ? 'shock' : 'calm', armL: 'hold', armR: t > EV.bt_ok ? 'up' : 'hold', prop: t > EV.bt_ok ? undefined : 'scroll', seed: 72, look: 0.4, hat: 'fur', hatCol: '#3a6a9a' });
    if (t > EV.bt_ok) bubbleTag('ЕСТЬ!', 330, 860, t, EV.bt_ok + 0.1, '#7a9a3a', 40, -0.06); }
  function table(t) {                                                  // стальной стол: миска с желтками, лоток хлопьев, коробка «хлопья»
    const b = rect(-300, 1380, 1700, 40, { wash: '#c8d4dc', washA: 1, w: 3, col: '#2a3a48', key: 2350 }); rect(-300, 1420, 1700, 600, { wash: '#7a8a96', washA: 1, w: 2, col: '#2a3a48' }); frost(-300, 1380, 1700, 40, t, 0.8);
    push(330, 1380, 1); ell(0, -10, 150, 34, { wash: '#f2f6f8', washA: 1, w: 3, col: '#3a4a54' }); ell(0, -16, 130, 24, { wash: '#f2a81e', washA: 1, w: 2, col: '#8a5a08' }); ell(-40, -22, 40, 8, { wash: '#ffe08a', washA: 0.9, line: false }); for (let i = 0; i < 3; i++) ell(-60 + i * 60, -12, 22, 12, { wash: '#f8b820', washA: 1, w: 1.4, col: '#a86a08' });
    if (t > EV.bt_egg - 0.1 && t < EV.bt_flake) { const k = (t - EV.bt_egg) % 0.5; ell(20, -20, 30 + k * 60, 8 + k * 10, { line: true, w: 2, col: '#ffe08a', a: 1 - k * 2 }); } pop();
    push(600, 1380, 1); rect(-140, -40, 280, 40, { wash: '#c8ccd0', washA: 1, w: 2.6, col: '#3a4a54' }); const r = rng(2351); for (let i = 0; i < 40; i++) { const x = -120 + r() * 240, y = -46 - r() * 20; poly([[x - 12, y], [x, y - 8], [x + 14, y - 2], [x + 4, y + 8]], { wash: i % 3 ? '#f2c050' : '#e8a030', washA: 1, w: 1.2, col: '#8a5a10' }); } pop();
    push(-40, 1380, 1, -0.05); const bx = rect(-70, -240, 140, 240, { wash: '#e8b53a', washA: 1, w: 2.6, col: '#3a2408', key: 2352 }); shadeG(bx.path, 70, 0, -20, 0, '#8a5a10', 0.4); ell(0, -150, 50, 50, { wash: '#f6f0d8', washA: 1, w: 2 }); for (let i = 0; i < 5; i++) poly([[-20 + i * 10, -160], [-10 + i * 10, -170], [i * 10, -150]], { wash: '#e8a030', washA: 1, w: 1 });
    txt('КУКУРУЗНЫЕ', 0, -70, 22, { font: 'Osw', col: '#a8241e' }); txt('ХЛОПЬЯ', 0, -40, 26, { font: 'Osw', col: '#a8241e' }); pop();
    if (t > EV.bt_flake - 0.1 && t < EV.bt_frz) for (let i = 0; i < 18; i++) { const r = rng(2360 + i), kk = ((t - EV.bt_flake) * 2 + r()) % 1; poly([[600 + (r() - 0.5) * 200, 1200 - kk * 200], [610 + (r() - 0.5) * 200, 1190 - kk * 200], [606 + (r() - 0.5) * 200, 1210 - kk * 200]], { wash: '#f2c050', washA: 1 - kk, w: 1, col: '#8a5a10' }); }
  }
  function shed(t, P) { if (t > EV.bt_egg) return; const hx = P.x - 100 * P.s, hy = P.y - 330 * P.s;                // корочка отваливается с палочки
    for (let i = 0; i < 16; i++) { const r = rng(2370 + i), kk = ((t * 0.9 + r()) % 1); if (t < EV.bt_fall - 0.4 && i > 3) continue; poly([[hx + (r() - 0.5) * 90 - 8, hy + kk * 700], [hx + (r() - 0.5) * 90 + 8, hy + kk * 700 - 4], [hx + (r() - 0.5) * 90 + 4, hy + kk * 700 + 8]], { wash: FN.crust, washA: 1, w: 1.2, col: '#4a2408' }); } }
  function okFX(t, P) { if (t < EV.bt_ok) return; const k = clamp((t - EV.bt_ok) / 0.6), hx = P.x - 60 * P.s, hy = P.y - 420 * P.s; for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; pencil([[hx + Math.cos(a) * 60 * (1 + k), hy + Math.sin(a) * 60 * (1 + k)], [hx + Math.cos(a) * 100 * (1 + k), hy + Math.sin(a) * 100 * (1 + k)]], { w: 5, col: '#fff2a0', a: 1 - k, pass2: false }); } }
  WORLD.batter = (t, u, cat) => {
    lay(16, () => { room(t); haze('#e8f6ff', 0.1); }); lay(3.2, () => { freezer(t); student(t); });
    lay(1.3, () => { table(t); });
    lay(1, () => { cat(); });
    lay(0.7, () => { motes(40, [0, 0, 1080, 1920], '#ffffff', t, 2380, { sp: 50, vx: 10, sz: 4, a: 0.7 }); });
  };
  DIR.batter = {
    outfit: 'labcoat', light: { side: -1, rim: '#d8f0ff' }, grade: ['#7ab4e8', 0.12],
    act: () => [[S0.batter, 'suspicious'], [EV.bt_fall, 'annoyed'], [EV.bt_egg, 'talk'], [EV.bt_flake, 'grin'], [EV.bt_frz, 'cold'], [EV.bt_ok, 'proud'], [EV.bt_ok + 0.5, 'laugh']],
    pose: (t, u, b) => { const egg = t > EV.bt_egg && t < EV.bt_flake, fl = t > EV.bt_flake && t < EV.bt_frz, fr = t > EV.bt_frz && t < EV.bt_ok;
      return Object.assign(b, { x: 820, y: 1720, s: 1.2, flip: true, look: egg || fl ? [0.6, 0.6] : fr ? [0.9, 0] : [0.4, -0.6],
        hand: egg ? [430, -300 + Math.abs(Math.sin(t * 9)) * 40] : fl ? [230, -320 + Math.abs(Math.sin(t * 9)) * 30] : fr ? [140, -200] : t > EV.bt_ok ? [60, -420 + (t - EV.bt_ok < 0.3 ? Math.sin((t - EV.bt_ok) * 40) * 30 : 0)] : [100, -330], handF: [-90, -230],
        prop: t < EV.bt_egg ? 'stickP' : egg ? 'eggStickP' : fl ? 'stickP' : fr ? undefined : 'frostStickP', frost: t > EV.bt_frz, chatter: fr, tailUp: t > EV.bt_ok }); },
    afterCat: (t, u, P) => { shed(t, P); okFX(t, P); },
    cam: () => [[S0.batter, 760, 1000, 0.3], [EV.bt_fall, 760, 1140, 0.36], [EV.bt_egg, 560, 1200, 0.18, 'x'], [EV.bt_frz, 300, 1100, 0.14], [EV.bt_ok, 700, 1060, 0.3], [S1.batter, 720, 1040, 0.36]]
  };
  // ---------------------------------------------------------------- переход: желток растекается по кадру
  TRANS_IN.batter = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const R = Math.pow(k, 1.4) * 1500, cx = 560, cy = 1000; const pts = []; for (let i = 0; i < 40; i++) { const a = i / 40 * 6.283; pts.push([cx + Math.cos(a) * R * (1 + 0.08 * Math.sin(a * 5 + k * 6)), cy + Math.sin(a) * R * (1 + 0.08 * Math.sin(a * 4 + 1))]); }
    const P = pathOf(spline(pts, true, 4)); inPath(P, () => { drawBuf(B, 1.1 - 0.1 * k, 540, 960); ctx.globalAlpha = clamp(1 - k * 1.4) * 0.9; ctx.fillStyle = '#f2a81e'; ctx.fillRect(0, 0, W, H); ctx.globalAlpha = 1; });
    scr(() => { pencil(spline(pts, true, 4), { w: 14, col: '#f8c030', a: clamp(1.4 - k * 1.4), pass2: false }); glow(cx - R * 0.3, cy - R * 0.3, R * 0.3 + 10, 'rgba(255,250,210,1)', 0.5 * (1 - k)); });
  } };
})();
