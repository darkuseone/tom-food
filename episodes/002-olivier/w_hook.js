/* 002 — `hook`: «Ни одной оливки — а называется „оливье“?!» Сегодня, ночь перед Новым годом: тёплая кухня, окно со снегом и салютом, гирлянда, мандарины.
   0,0 с — камера летит от хрустальной салатницы к Тому в зелёном худи и фартуке: он роет ложкой, кубики летят — оливки нет; на «оливье» — ценник «0 ОЛИВОК».
   «Откусим историю!» — Том выуживает из банки солёный огурчик и хрумкает: рассол брызжет на кадр (переход в 1970-е — в w_deficit.js). */
(() => {
  EV.hk_dig = 0.15;
  EV.hk_none = wtw('h1', 'оливки');
  EV.hk_name = wtw('h1', 'оливье');
  EV.hk_grab = LS('h2') - 0.1;
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_name, 0.2, 8], [EV.hk_bite, 0.22, 12]);
  KEYW.push('оливки', '«оливье»?!');

  function night(t) {                                                   // окно: ночной двор, снег, салют, окна дома напротив
    vgrad(-200, 1000, ['#0a0e24', '#1a2244', '#3a3050']);
    for (let i = 0; i < 3; i++) { const t0 = (t * 0.7 + i * 0.37) % 1, cx = 300 + i * 260, cy = 300 + (i % 2) * 90, R = 40 + t0 * 150; for (let k = 0; k < 14; k++) { const a = k / 14 * 6.283; pencil([[cx + Math.cos(a) * R * 0.6, cy + Math.sin(a) * R * 0.6], [cx + Math.cos(a) * R, cy + Math.sin(a) * R]], { w: 3, col: ['#ffd06a', '#ff6a5a', '#9ae0ff'][i], a: 1 - t0, pass2: false, gap: false }); } glow(cx, cy, R, ['rgba(255,200,90,1)', 'rgba(255,90,80,1)', 'rgba(120,200,255,1)'][i], 0.3 * (1 - t0)); }
    for (const [x, w, h] of [[120, 260, 420], [420, 300, 520], [760, 260, 460]]) { rect(x, 980 - h, w, h + 40, { wash: '#2a2840', washA: 1, w: 2, col: '#0a0a18' }); windows(x + 20, 1000 - h, w - 40, h - 60, 5, 7, x, 0.45, '#ffd88a', '#3a3858', 0.9); }
    motes(70, [60, 120, 1020, 1000], '#ffffff', t, 2001, { sp: 70, vx: 12, sz: 4, a: 0.85, wob: 1 });
  }
  function wall(t) {                                                    // кухня: кафель, полки, холодильник с магнитами, часы, гирлянда
    vgrad(-400, 1700, ['#e8d2a8', '#d8b888', '#c89a68']);
    for (let y = 1000; y < 1460; y += 60) for (let x = -300; x < 1500; x += 60) rect(x, y, 60, 60, { wash: (x / 60 + y / 60) % 2 ? '#e8e2d0' : '#d8e4dc', washA: 0.9, w: 1, col: '#8a8a7a', a: 0.4 });
    const fr = rect(60, 40, 960, 960, { wash: '#f4ecd8', washA: 1, w: 6, col: '#4a3420', key: 2010 }); ctx.save(); ctx.clip(fr.path); night(t); ctx.restore();
    pencil([[540, 40], [540, 1000]], { w: 14, col: '#f4ecd8' }); pencil([[60, 480], [1020, 480]], { w: 12, col: '#f4ecd8' }); pencil([[60, 40], [1020, 40], [1020, 1000], [60, 1000], [60, 40]], { w: 3, col: '#4a3420', pass2: false });
    for (const sd of [-1, 1]) { const c = shape(spline([[540 + sd * 560, 20], [540 + sd * 470, 20], [540 + sd * 430 + Math.sin(t) * 6, 560], [540 + sd * 500, 1040], [540 + sd * 580, 1040]], true, 6), { wash: '#c8402e', washA: 1, w: 2.4, col: '#4a0e08', key: 2011 + sd }); hatch(c.path, c.bb, { gap: 14, a: 0.25, col: '#f4e6c8', ang: 1.57, key: 2013 + sd }); }
    rect(-220, 1000, 1520, 30, { wash: '#a87a4a', washA: 1, w: 2.4, col: '#3a2410' });
    for (let i = 0; i < 26; i++) { const x = -100 + i * 52, y = 60 + Math.sin(i * 0.6) * 30; const on = Math.sin(t * 4 + i * 1.7) > -0.3; ell(x, y + 20, 9, 13, { wash: ['#ff5a4a', '#ffd04a', '#5ad0ff', '#7aff6a'][i % 4], washA: on ? 1 : 0.4, w: 1.2, col: '#2a2a2a' }); if (on) glow(x, y + 20, 34, ['rgba(255,90,70,1)', 'rgba(255,210,80,1)', 'rgba(90,210,255,1)', 'rgba(120,255,100,1)'][i % 4], 0.45); }
    pencil(spline(Array.from({ length: 27 }, (_, i) => [-100 + i * 52, 60 + Math.sin(i * 0.6) * 30]), false, 3), { w: 2, col: '#2a3a1a', pass2: false });
  }
  function fridge(t) { const f = rect(1040, 360, 300, 1100, { wash: '#f2f0e8', washA: 1, w: 3, col: '#3a3a3a', key: 2020 }); shadeG(f.path, 1040, 0, 1340, 0, '#b8b6ae', 0.45); pencil([[1040, 720], [1340, 720]], { w: 3, col: '#5a5a5a', pass2: false }); pencil([[1070, 760], [1070, 900]], { w: 10, col: '#9a9a9a' });
    for (const [x, y, c, r] of [[1120, 480, '#d9482b', 0.2], [1200, 560, '#e8b53a', -0.3], [1160, 820, '#3a7aa8', 0.1]]) { push(x, y, 1, r); rect(-34, -24, 68, 48, { wash: c, washA: 1, w: 2, col: '#2a1a0a' }); pop(); }
    push(1250, 980, 1, 0.05); rect(-60, -80, 120, 160, { wash: '#fff8e8', washA: 1, w: 1.8, col: '#7a6a4a' }); txt('КУПИТЬ:', 0, -56, 22, { font: 'Hand', col: '#2a2a2a' }); for (const [i, s] of ['горошек', 'майонез', 'колбаса', 'огурцы'].entries()) txt(s, 0, -24 + i * 26, 22, { font: 'Hand', col: '#3a3a6a' }); pop(); }
  function table(t) {                                                   // праздничный стол: скатерть, мандарины, шампанское, «шуба», бокалы
    const tb = rect(-300, 1280, 1700, 300, { wash: '#f6eee0', washA: 1, w: 2.4, col: '#4a3a2a', key: 2030 }); shadeG(tb.path, 0, 1580, 0, 1280, '#b8a888', 0.4);
    for (let i = 0; i < 18; i++) pencil([[-300 + i * 100, 1290], [-260 + i * 100, 1580]], { w: 6, col: '#d9482b', a: 0.12, pass2: false });
    const r = rng(2031); for (let i = 0; i < 7; i++) { const x = 760 + (i % 4) * 46 + (i > 3 ? 22 : 0), y = 1270 - (i > 3 ? 36 : 0); ell(x, y, 26, 23, { wash: '#f08a2a', washA: 1, w: 2, col: '#7a3a08' }); glow(x - 8, y - 8, 10, 'rgba(255,240,200,1)', 0.6); pencil([[x, y - 22], [x + 6, y - 30]], { w: 3, col: '#3a6a1a', pass2: false }); }
    push(160, 1290, 1); const b = shape(spline([[-26, 0], [-28, -150], [-12, -200], [-12, -270], [12, -270], [12, -200], [28, -150], [26, 0]], true, 6), { wash: '#1e3a24', washA: 1, w: 2.4, col: '#0a1a0a' }); shadeG(b.path, 30, 0, -10, 0, '#000', 0.4); rect(-12, -300, 24, 34, { wash: '#e8b53a', washA: 1, w: 2 }); rect(-24, -110, 48, 60, { wash: '#f4e6c8', washA: 1, w: 1.6 }); txt('★', 0, -80, 30, { col: '#d9482b' }); glow(-12, -140, 14, 'rgba(255,255,255,1)', 0.7); pop();
    for (const x of [260, 980]) { push(x, 1290, 1); pencil([[0, 0], [0, -60]], { w: 4, col: '#c8d8e0' }); poly([[-24, -150], [24, -150], [10, -60], [-10, -60]], { wash: '#f4e090', washA: 0.6, w: 2, col: '#7a8a9a' }); for (let k = 0; k < 4; k++) ell(((t * 30 + k * 13) % 30) - 15, -70 - ((t * 60 + k * 23) % 70), 2.5, 2.5, { wash: '#ffffff', washA: 0.9, line: false }); pop(); }
    push(1180, 1300, 1); ell(0, 0, 120, 30, { wash: '#f2f2f6', washA: 1, w: 2, col: '#5a5a6a' }); blob([[-100, -4], [-90, -60], [0, -76], [90, -60], [100, -4]], { wash: '#a8344a', washA: 1, w: 2, col: '#4a0a1a' }); blob([[-90, -50], [0, -80], [90, -50], [0, -60]], { wash: '#fff8ec', washA: 0.9, w: 1.2, col: '#a89a8a' }); pop();
  }
  function flying(t) {                                                   // кубики и горошины из-под ложки
    if (t < EV.hk_dig || t > EV.hk_grab + 0.6) return; const r = rng(2040);
    for (let i = 0; i < 18; i++) { const t0 = EV.hk_dig + r() * (EV.hk_name - EV.hk_dig), k = t - t0; if (k < 0 || k > 0.9) continue; const vx = (r() - 0.3) * 700, vy = -600 - r() * 500;
      const x = 420 + vx * k, y = 1350 + vy * k + 1400 * k * k, c = [[OL.pot, OL.potD], [OL.saus, OL.sausD], [OL.carrot, OL.carrotD], [OL.egg, '#b8b0a0']][i % 4]; if (i % 5 === 0) pea(x, y, 1.3); else cube(x, y, 1.6, c[0], c[1], k * 8 + i, 2041 + i); }
  }
  WORLD.hook = (t, u, cat) => {
    lay(14, () => { wall(t); });
    lay(6, () => { fridge(t); haze('#ffd8a0', 0.05); });
    lay(2.2, () => { table(t); });
    lay(1, () => { cat(); });
    lay(0.92, () => { const tb = rect(-300, 1480, 1700, 700, { wash: '#f6eee0', washA: 1, w: 3, col: '#4a3a2a', key: 2050 }); shadeG(tb.path, 0, 1900, 0, 1480, '#a89878', 0.5); for (let i = 0; i < 9; i++) pencil([[-300, 1540 + i * 50], [1400, 1540 + i * 50]], { w: 4, col: '#d9482b', a: 0.12, pass2: false });
      crystalBowl(400, 1440, 225, t, { seed: 8100 + (t > EV.hk_name ? 1 : 0) }); flying(t);
      if (t < EV.hk_bite + 0.3) { push(900, 1500, 1); const j = shape(spline([[-80, 0], [-90, -60], [-90, -260], [-70, -290], [70, -290], [90, -260], [90, -60], [80, 0]], true, 6), { wash: '#cfe0c0', washA: 0.55, w: 2.6, col: '#3a5a3a', key: 2051 });
        ctx.save(); ctx.clip(j.path); ctx.globalAlpha = 0.8; vgrad(-200, 20, ['#b8c870', '#7a9a3a']); ctx.restore(); for (let k = 0; k < 5; k++) pickle(-40 + (k % 2) * 60, -60 - k * 46, 0.7, 1.4 + k * 0.3, { key: 2052 + k }); pencil([[-60, -240], [-20, -200]], { w: 3, col: '#3a6a1a', pass2: false }); glow(-50, -200, 30, 'rgba(255,255,255,1)', 0.6); pop(); }
      bubbleTag('0 ОЛИВОК', 470, 1130, t, EV.hk_name, '#d9482b', 64, -0.06);
      crumbs(640, 1050, t, EV.hk_bite, 18, 21, '#c8e080');
    });
    lay(0.55, () => { for (let i = 0; i < 6; i++) glow(i * 220 - 40, 1880 + Math.sin(i) * 40, 90, ['rgba(255,90,70,1)', 'rgba(255,210,80,1)', 'rgba(90,210,255,1)'][i % 3], 0.35); });
  };
  DIR.hook = {
    outfit: 'hoodieO', light: { side: -1, rim: '#ffd890' }, grade: ['#ffb070', 0.1],
    act: () => [[0, 'suspicious'], [EV.hk_none - 0.1, 'annoyed'], [EV.hk_name, 'shock'], [EV.hk_grab, 'sideeye'], [EV.hk_bite - 0.2, 'smug'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { const dig = t < EV.hk_grab, grab = t >= EV.hk_grab, bite = t > EV.hk_bite;
      return Object.assign(b, { x: 700, y: 1600, s: 1.22, flip: -1, look: dig ? [-0.7, 0.7] : [0.2, -0.1], tilt: t > EV.hk_name && t < EV.hk_name + 0.3 ? -0.05 : 0,
        hand: dig ? [190 + Math.sin(t * 14) * 20, -330 + Math.abs(Math.sin(t * 14)) * 40] : bite ? [30, -340] : [lerp(-140, 30, sm(clamp((t - EV.hk_grab) / 0.4))), lerp(-220, -330, sm(clamp((t - EV.hk_grab) / 0.4)))],
        handF: t > EV.hk_name && dig ? [-120, -340] : [-80, -180], prop: dig ? 'spoon' : bite ? 'pickleB' : 'pickleP', propAng: dig ? 2.5 : 0, tailUp: t > EV.hk_bite, squash: b.squash + (bite && t < EV.hk_bite + 0.12 ? 0.1 : 0) }); },
    cam: () => [[0, 430, 1420, 0.46], [0.5, 560, 1240, 0.12, 'x'], [EV.hk_name, 540, 1200, 0.16], [EV.hk_grab, 620, 1080, 0.14], [EV.hk_bite, 660, 900, 0.34], [S1.hook, 680, 860, 0.42]]
  };
})();
