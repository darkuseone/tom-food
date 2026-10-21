/* 002 — `today` + `button`: сегодня. Антверпенский порт на закате: краны, штабели контейнеров «FRITES», судно у причала; посередине — бельгийская фритюрная будка «FRITUUR».
   ХИРО-ШОТ: камера начинает вплотную к гигантскому кульку фри — блестящий майонез, соль, пар — и отъезжает, открывая порт. HUD: карта-салфетка мира, пунктиры из Бельгии во все стороны «120+ стран».
   «Приговор?» — Том-судья (парик + фартук) поднимает молоток; «Суд удаляется… доедать» — разворачивается, уходит с кульком, хрустит.
   `button`: Том возвращается к камере, бьёт молотком по кафедре-ящику (петля к хуку) и подмигивает: «Пиши блюдо — откусим!»
   Переход В today: майонез выдавливается спиралью и заливает кадр, в спирали — новая сцена. */
(() => {
  EV.td_belgium = wtw('t1', 'Бельгия');
  EV.td_verdict = wtw('t1', 'Приговор?');
  EV.td_leave = wtw('t1', 'удаляется…');
  EV.td_eat = wtw('t1', 'доедать.');
  EV.bt_bang = wtw('x1', 'откусим!');
  SHAKES.push([EV.bt_bang, 0.2, 12]);
  KEYW.push('больше', 'доедать.');
  function sky(t) { vgrad(-600, 1200, ['#3a3a6a', '#c8607a', '#f8b060', '#ffe0a0']); glow(700, 900, 300, 'rgba(255,220,140,1)', 0.8); ell(700, 920, 110, 110, { wash: '#ffe8b0', washA: 0.9, line: false }); }
  function port(t) {                                                    // краны, контейнеры, судно
    rect(-600, 980, 2300, 200, { wash: '#4a5a7a', washA: 1, line: false }); for (let i = 0; i < 14; i++) { const r = rng(9400 + i), x = -400 + r() * 1800, y = 1000 + r() * 160; pencil([[x, y], [x + 80, y]], { w: 3, col: '#ffd8a0', a: 0.7, pass2: false }); }
    push(820, 1000, 1); const h = shape([[-420, -40], [380, -40], [440, -120], [460, 20], [-400, 30]], { wash: '#2a2a3a', washA: 1, w: 2.6, col: '#0a0a14', key: 9410 }); rect(-420, -60, 860, 24, { wash: '#c8282a', washA: 1, line: false });
    for (let r = 0; r < 3; r++) for (let i = 0; i < 10; i++) { const c = ['#d9482b', '#2a6aa8', '#e8b53a', '#3a7a3a', '#8a5a8a'][(i + r * 2) % 5]; rect(-380 + i * 72, -110 - r * 46, 68, 44, { wash: c, washA: 1, w: 1.6, col: '#1a1a1a' }); }
    rect(300, -260, 100, 140, { wash: '#e8e0d0', washA: 1, w: 2, col: '#1a1a1a' }); for (let i = 0; i < 3; i++) rect(310, -240 + i * 40, 80, 20, { wash: '#ffd890', washA: 0.9, line: false }); pop();
    for (let i = 0; i < 3; i++) { const x = 120 + i * 360, sw = Math.sin(t * 0.6 + i) * 0.05; pencil([[x, 1000], [x, 520]], { w: 16, col: '#3a3a4a' }); for (let k = 0; k < 8; k++) pencil([[x - 14, 980 - k * 58], [x + 14, 950 - k * 58]], { w: 3, col: '#3a3a4a', pass2: false });
      push(x, 540, 1, sw); pencil([[-120, 0], [360, 0]], { w: 14, col: '#e8b53a' }); pencil([[0, 0], [-60, -80], [200, 0]], { w: 4, col: '#3a3a4a', pass2: false }); pencil([[300, 0], [300, 160 + Math.sin(t + i) * 30]], { w: 2, col: '#1a1a1a', pass2: false }); rect(260, 160 + Math.sin(t + i) * 30, 80, 46, { wash: ['#d9482b', '#2a6aa8', '#e8b53a'][i], washA: 1, w: 1.6, col: '#1a1a1a' }); pop(); }
    haze('#f8b070', 0.12);
  }
  function stacks(t) {                                                  // штабели контейнеров «FRITES» на причале
    for (let r = 0; r < 4; r++) for (let i = 0; i < 6; i++) { if (i > 3 && r > 2) continue; const x = -380 + i * 260 + (r % 2) * 30, y = 1340 - r * 120; const c = rect(x, y - 116, 250, 116, { wash: ['#d9482b', '#e8b53a', '#2a6aa8', '#4a8a3a'][(i + r) % 4], washA: 1, w: 2.2, col: '#1a1a1a', key: 9420 + r * 6 + i });
      shadeG(c.path, x + 250, 0, x, 0, '#1a1a1a', 0.3); for (let k = 0; k < 8; k++) pencil([[x + 14 + k * 30, y - 106], [x + 14 + k * 30, y - 10]], { w: 2, col: '#1a1a1a', a: 0.35, pass2: false }); if ((i + r) % 2 === 0) txt('FRITES', x + 125, y - 58, 38, { font: 'Osw', col: '#fff8ec', a: 0.9 }); }
  }
  function kiosk(t) {                                                   // фритюрная будка «FRITUUR» с неоном и очередью
    push(560, 1460, 1); const b = rect(-300, -380, 600, 380, { wash: '#f4ead2', washA: 1, w: 3, col: '#2a1a0a', key: 9430 }); shadeG(b.path, 300, 0, -300, 0, '#a89070', 0.4); for (let i = 0; i < 8; i++) poly([[-320 + i * 80, -380], [-240 + i * 80, -380], [-260 + i * 80, -330], [-300 + i * 80, -330]], { wash: i % 2 ? '#f4ead2' : '#d9482b', washA: 1, w: 1.4, col: '#2a1a0a' });
    rect(-240, -300, 480, 200, { wash: '#3a2410', washA: 0.95, w: 2 }); glow(0, -200, 300, 'rgba(255,190,90,1)', 0.5); const on = Math.sin(t * 9) > -0.6; rect(-220, -470, 440, 90, { wash: '#1a1a1a', washA: 1, w: 2 }); txt('FRITUUR', 0, -424, 64, { font: 'Osw', col: on ? '#ffd040' : '#6a5a20' }); if (on) glow(0, -424, 300, 'rgba(255,200,60,1)', 0.5); pop();
  }
  function hero(t) {                                                    // хиро-кулёк: крупный, блестящий майонез, пар, крупинки соли
    const go = t > EV.td_leave + 0.1 ? 0 : 1; if (!go) return; push(330, 1560, 1.25); fryCone(0, 0, 1, t, { kind: 'stripe', mayo: 0.8, ket: 0.7, seed: 9440 }); for (let i = 0; i < 4; i++) { const ph = (t * 0.7 + i / 4) % 1; glow(-80 + i * 50, -330 + Math.sin(i) * 30, 30, 'rgba(255,255,255,1)', Math.sin(ph * 3.14) * 0.7); } pop();
  }
  function crunch(t) { if (t < EV.td_eat) return; for (const t0 of [EV.td_eat, EV.td_eat + 0.5, EV.td_eat + 1.0]) crumbs(PX + 60, PY - 360, t, t0, 10, 9 + Math.round(t0 * 10), FR.fry); }
  let PX = 700, PY = 1640;
  WORLD.today = (t, u, cat) => {
    lay(40, () => { sky(t); });
    lay(12, () => { port(t); });
    lay(3.2, () => { stacks(t); haze('#f8b070', 0.05); });
    lay(1.6, () => { kiosk(t); for (let i = 0; i < 3; i++) human(1020 + i * 140, 1520, 0.9, t, { body: ['#2a4a6a', '#6a2a4a', '#3a3a3a'][i], hat: i === 1 ? 'cap' : null, hatCol: '#d9482b', hair: '#3a2a1a', face: 'smile', armR: 'hold', seed: 180 + i, flip: -1, look: -0.5, prop: i === 0 ? 'phone' : undefined }); });
    lay(1, () => { cat(); crunch(t); });
    lay(0.8, () => { hero(t); });
  };
  DIR.today = {
    outfit: 'judge', light: { side: 1, rim: '#ffc080' }, grade: ['#ffa060', 0.12],
    act: () => [[S0.today, 'awe'], [EV.td_belgium, 'proud'], [EV.td_verdict, 'smug'], [EV.td_leave, 'wink'], [EV.td_eat, 'laugh']],
    pose: (t, u, b) => { const lv = clamp((t - EV.td_leave) / 1.6); PX = lerp(720, 980, lv); PY = 1640;
      return Object.assign(b, { x: PX, y: PY, s: 1.0, flip: lv > 0 ? -1 : 1, walk: lv > 0 && lv < 1 ? t * 8 : undefined, look: t < EV.td_verdict ? [-0.7, 0.4] : [0.2, 0],
        hand: t > EV.td_leave ? [90, -330] : t > EV.td_verdict - 0.2 ? [180, -420] : [150, -200], prop: t > EV.td_leave ? 'coneP' : 'mallet', propAng: t > EV.td_verdict - 0.2 && t < EV.td_leave ? -0.8 : 0.2, handF: [-110, -190] }); },
    cam: () => [[S0.today, 330, 1240, 0.62], [S0.today + 1.2, 420, 1200, 0.42], [EV.td_belgium + 0.3, 560, 1000, 0.08], [EV.td_verdict, 680, 1120, 0.24, 'x'], [EV.td_leave, 700, 1120, 0.24], [S1.today, 820, 1120, 0.28]],
    hud: t => {                                                          // карта-салфетка мира: пунктиры из Бельгии, «120+ стран»
      if (t > EV.td_verdict) return; const k = popK(t, EV.td_belgium, 0.3), dr = clamp((t - EV.td_belgium - 0.2) / 1.0); if (k <= 0) return; push(850, 330, k, 0.04);
      ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.35)'; ctx.shadowBlur = 12; ctx.shadowOffsetY = 6; ctx.fillStyle = '#fbf6ea'; ctx.beginPath(); for (let i = 0; i <= 24; i++) { const a = i / 24 * 6.283, rr = 170 + Math.sin(i * 7) * 6; ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr * 0.9); } ctx.fill(); ctx.restore();
      for (const [x, y, rx, ry] of [[-90, -40, 50, 60], [10, -60, 40, 30], [40, 30, 34, 54], [100, -40, 70, 40], [110, 70, 30, 20]]) ell(x, y, rx, ry, { wash: '#e8dcc0', washA: 1, w: 1.2, col: '#9a8a6a' });
      const B0 = [8, -66]; for (const [x, y] of [[-110, -30], [-80, 40], [50, 50], [130, -40], [120, 76], [60, -20], [-20, 20]]) { const pts = []; for (let i = 0; i <= 12; i++) { const q = i / 12 * dr; pts.push([lerp(B0[0], x, q), lerp(B0[1], y, q) - Math.sin(q * 3.14) * 30]); } if (pts.length > 1) dashL(pts, '#d9482b', 0.9, 3, 2); }
      ell(B0[0], B0[1], 9, 8, { wash: '#d9482b', washA: 1, line: false }); txt('120+ стран', 0, 128, 34, { font: 'Hand', col: '#2b2622' }); pop(); }
  };
  WORLD.button = (t, u, cat) => { WORLD.today(t, u, cat); };
  DIR.button = {
    outfit: 'judge', light: { side: 1, rim: '#ffc080' }, grade: ['#ffa060', 0.12],
    act: () => [[S0.button, 'grin'], [EV.bt_bang + 0.15, 'wink']],
    pose: (t, u, b) => { PX = 760; PY = 1640; const up = t < EV.bt_bang ? clamp((t - S0.button) / Math.max(0.1, EV.bt_bang - S0.button)) : 0;
      return Object.assign(b, { x: PX, y: PY, s: 1.0, look: [0, 0.1], hand: [190, -260 - up * 120], prop: 'mallet', propAng: -0.3 - up * 0.9, handF: [-120, -340], squash: b.squash + (t > EV.bt_bang && t < EV.bt_bang + 0.12 ? 0.1 : 0) }); },
    afterCat: (t) => { gavelHit(PX + 230, PY - 200, t, EV.bt_bang, 1); },
    cam: () => [[S0.button, 760, 1120, 0.3], [S0.button + 0.5, 760, 1100, 0.36], [DUR, 760, 1100, 0.4]]
  };
  // ---------------------------------------------------------------- переход: майонез выдавливается спиралью, в спирали — новая сцена
  TRANS_IN.today = { a: 0.3, b: 0.4, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1 + k * 0.05, 540, 960); const R = sm(k) * 1400, turns = 3.2, pts = []; for (let i = 0; i <= 160; i++) { const q = i / 160, a = q * turns * 6.283 + k * 4, r = q * R; pts.push([540 + Math.cos(a) * r, 960 + Math.sin(a) * r * 1.1]); }
    const P = new Path2D(); P.ellipse(540, 960, Math.max(1, R * 0.92), Math.max(1, R * 1.0), 0, 0, 6.3); inPath(P, () => drawBuf(B, 1.1 - 0.1 * k, 540, 960));
    scr(() => { if (pts.length > 2) { pencil(pts, { w: 70 * (1 - k * 0.5), col: FR.mayo, a: 0.98, pass2: false, gap: false }); pencil(pts, { w: 16, col: '#ffffff', a: 0.7, pass2: false, gap: false }); } });
  } };
})();
