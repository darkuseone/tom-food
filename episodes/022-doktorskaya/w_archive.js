/* 022 — `archive` ★: «Так от чего лечили? Документ 1936-го: / «Подорванное здоровье — в результате Гражданской войны… и царского деспотизма». /
   Царя нет девятнадцать лет — а от него всё ещё лечат. Колбасой!» Архив наркомата ночью: стеллажи до потолка с папками-корешками и ярлыками,
   картотечные ящики, лестница-стремянка, сейф с колесом-замком, окно с ночным снегом и луной, часы; за столом при зелёной лампе (главный свет)
   — машинистка в вязаной кофте за «Ундервудом», вахтёр с фонарём в дверях. На столе (герой-предмет) — папка «ИСТОРИЯ БОЛЕЗНИ»: Том-архивариус
   в жилете, нарукавниках и зелёном козырьке на «Документ» развязывает тесёмки и раскрывает её. По словам: «лечили?» — Том сдувает пыль, облако;
   «Документ» — папка раскрывается; s12 — строки цитаты проступают слово за словом, «деспотизма»» — красный штамп «ДИАГНОЗ» хлопает, лампа мигает,
   машинистка роняет очки; «Царя нет» — по столу укатывается маленькая игрушечная корона, Том её провожает взглядом; «Колбасой!» — Том с каменным
   лицом кладёт на папку батон докторской, как рецепт (пауза-гэг: поправляет козырёк, кивает). Переход В сцену: обложка истории болезни открывается. */
(() => {
  EV.ar_dust = wtw('s11', 'лечили?');
  EV.ar_open = wtw('s11', 'Документ');
  EV.ar_q0 = LS('s12');
  EV.ar_diag = wtw('s12', 'деспотизма».');
  EV.ar_tsar = LS('s13');
  EV.ar_sausage = wtw('s13', 'Колбасой!');
  EV.ar_gag = LE('s13') + 0.05;
  SHAKES.push([EV.ar_diag + 0.3, 0.2, 10], [EV.ar_sausage + 0.1, 0.15, 6]);
  KEYW.push('деспотизма».', 'Колбасой!');
  const FX = 520, FY = 1530;                                             // папка на столе
  const lampOn = t => t > EV.ar_diag + 0.25 && t < EV.ar_diag + 0.6 ? (Math.sin(t * 50) > 0 ? 0.3 : 1) : 1;
  function room(t) {                                                     // стеллажи с папками, картотека, стремянка, сейф, окно со снегом, часы
    vgrad(-800, 1500, ['#1a2420', '#2a3430', '#1a201c']);
    for (let sx = -600; sx < 1800; sx += 360) { if (sx > 1000 && sx < 1300) continue; push(sx, 0, 1); rect(-170, -760, 340, 1600, { wash: '#4a3420', washA: 1, w: 3, col: '#1a0e06', key: 23101 + sx });
      for (let s = 0; s < 8; s++) { const y = -720 + s * 200; rect(-160, y + 170, 320, 16, { wash: '#6a4a2a', washA: 1, w: 1.4, col: '#1a0e06' }); const r = rng(23110 + sx + s);
        for (let i = 0; i < 9; i++) { const x = -150 + i * 34, h = 130 + r() * 36, c = ['#c8b080', '#a89060', '#d8c8a0', '#8a7050', '#b8a070'][Math.floor(r() * 5)]; const f = rect(x, y + 170 - h, 30, h, { wash: c, washA: 1, w: 1.2, col: '#2a1a0a' }); rect(x + 4, y + 190 - h, 22, 26, { wash: '#f4ecd8', washA: 1, w: 0.8 }); pencil([[x + 15, y + 170 - h * 0.4], [x + 15, y + 150]], { w: 2, col: '#e8dcc0', a: 0.6, pass2: false }); } } pop(); }
    push(1150, -200, 1); const w = rect(-150, -260, 300, 440, { wash: '#1a2a4a', washA: 1, w: 12, col: '#3a2a1a', key: 23120 }); ctx.save(); ctx.clip(w.path); ell(60, -160, 40, 40, { wash: '#f4f0d8', washA: 1, line: false }); glow(60, -160, 120, 'rgba(240,240,210,1)', 0.25); sil([[-150, 180], [-150, 60], [-60, 40], [-40, -20], [20, -20], [40, 50], [150, 30], [150, 180]], '#0a1220', 1); windows(-130, 0, 260, 160, 6, 3, 23121, 0.3, '#ffd890', '#2a3a5a', 0.7); motes(30, [-150, -260, 150, 180], '#ffffff', t, 23122, { sp: 20, sz: 3, a: 0.8, wob: 8 }); ctx.restore(); pencil([[0, -260], [0, 180]], { w: 8, col: '#3a2a1a' }); pencil([[-150, -40], [150, -40]], { w: 8, col: '#3a2a1a' }); pop();
    push(1150, 420, 1); const sf = rect(-150, -200, 300, 400, { wash: '#3a4a3a', washA: 1, w: 3, col: '#0a140a', key: 23123 }); metalG(sf.path, -40, -60, 300, '#6a7a6a', '#3a4a3a', '#0a140a', 0.6); ell(0, -20, 60, 60, { wash: '#8a8a7a', washA: 1, w: 3, col: '#2a2a1a' }); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283 + t * 0.2; pencil([[0, -20], [Math.cos(a) * 54, -20 + Math.sin(a) * 54]], { w: 4, col: '#2a2a1a', pass2: false }); } rect(-110, 120, 220, 50, { wash: '#c8a040', washA: 1, w: 1.6 }); txt('СЕКРЕТНО', 0, 154, 22, { font: 'Osw', col: '#2a1a0a' }); pop();
    push(640, -460, 1); ell(0, 0, 56, 56, { wash: '#e8dcc0', washA: 1, w: 3, col: '#2a1a0a' }); ell(0, 0, 64, 64, { wash: 'rgba(0,0,0,0)', washA: 0, w: 8, col: '#4a3420' }); pencil([[0, 0], [24, -30]], { w: 4, col: '#1a1a1a', pass2: false }); pencil([[0, 0], [Math.cos(t * 0.3) * 40, Math.sin(t * 0.3) * 40]], { w: 2, col: '#1a1a1a', pass2: false }); txt('III', 0, -32, 12, { font: 'Osw', col: '#2a1a0a' }); pop();
    push(260, 1300, 1); for (const sd of [-1, 1]) pencil([[sd * 60, 0], [sd * 20, -700]], { w: 10, col: '#6a4a2a' }); for (let i = 0; i < 7; i++) pencil([[-56 + i * 5, -90 - i * 90], [56 - i * 5, -90 - i * 90]], { w: 8, col: '#6a4a2a' }); pop();
    push(-40, 1300, 1); const cab = rect(-170, -480, 340, 480, { wash: '#5a3a1a', washA: 1, w: 3, col: '#1a0e06', key: 23124 }); shadeG(cab.path, 170, 0, -170, 0, '#1a0e06', 0.45); for (let r2 = 0; r2 < 4; r2++) for (let c = 0; c < 3; c++) { rect(-150 + c * 102, -460 + r2 * 116, 94, 104, { wash: '#6a4a2a', washA: 1, w: 1.6 }); rect(-128 + c * 102, -440 + r2 * 116, 50, 22, { wash: '#f4ecd8', washA: 1, w: 1 }); pencil([[-112 + c * 102, -396 + r2 * 116], [-90 + c * 102, -396 + r2 * 116]], { w: 6, col: '#c8a040', pass2: false }); } pop();
  }
  function staff(t) {                                                    // машинистка за машинкой, вахтёр с фонарём в дверях
    const sh = t > EV.ar_diag + 0.2 && t < EV.ar_diag + 2.2;
    human(960, 1310, 1.02, t, { body: '#6a4a5a', legs: '#2a2a32', hair: '#8a5a3a', face: sh ? 'shock' : 'calm', armL: 'hold', armR: 'hold', look: sh ? -0.9 : -0.2, seed: 23130, flip: -1, long: 1 });
    push(960 - 4, 1310 - 330 * 1.02 + 20, 1); if (!sh) for (const sd of [-1, 1]) ell(sd * 15, -66, 12, 10, { wash: 'rgba(0,0,0,0)', washA: 0, w: 2, col: '#2a2a2a' }); blob([[-46, -100], [-40, -150], [0, -164], [40, -150], [46, -100], [30, -130], [-30, -130]], { wash: '#8a5a3a', washA: 1, w: 1.6, col: '#2a1408' }); ell(0, -168, 22, 18, { wash: '#8a5a3a', washA: 1, w: 1.4 }); pop();
    if (sh) { const k = clamp((t - EV.ar_diag - 0.2) / 0.6); push(920, 960 + k * 240, 1, k * 4); for (const sd of [-1, 1]) ell(sd * 15, 0, 12, 10, { wash: '#d8ecf0', washA: 0.5, w: 2, col: '#2a2a2a' }); pop(); }
    push(900, 1170, 1); const tw = blob([[-120, 0], [-110, -60], [-80, -90], [80, -90], [110, -60], [120, 0]], { wash: '#1a1a1a', washA: 1, w: 2.4, col: '#000000', key: 23131 }); metalG(tw.path, -30, -60, 140, '#5a5a5a', '#1a1a1a', '#000000', 0.6); for (let r = 0; r < 3; r++) for (let c = 0; c < 8; c++) ell(-84 + c * 24 + r * 6, -22 - r * 20, 7, 6, { wash: '#e8e4dc', washA: 1, w: 0.8 }); rect(-110, -110, 220, 22, { wash: '#2a2a2a', washA: 1, w: 1.6 }); rect(-60, -200, 120, 100, { wash: '#f4f0e0', washA: 1, w: 1.2 }); txt('UNDERWOOD', 0, -66, 12, { font: 'Osw', col: '#c8a040' }); pop();
    push(1460, 1300, 1); const dr = rect(-140, -680, 280, 680, { wash: '#2a1a0e', washA: 1, w: 3, col: '#0a0604', key: 23132 }); rect(-100, -640, 200, 280, { wash: '#3a5a6a', washA: 0.5, w: 2 }); pop();
    human(1420, 1310, 1.05, t, { body: '#3a4a3a', legs: '#2a2a2a', hair: '#7a7a7a', beard: 'short', face: t > EV.ar_sausage ? 'grin' : 'calm', armL: 'down', armR: 'hold', prop: 'candle', look: -0.7, seed: 23133, flip: -1, hat: 'cap', hatCol: '#2a3a2a' });
  }
  function desk(t) {                                                     // стол: зелёное сукно, папка, лампа, чернильница, штамп, стопки папок, батон, корона
    const tb = rect(-500, 1440, 2200, 700, { wash: '#4a2a14', washA: 1, w: 3, col: '#1a0a04', key: 23140 }); shadeG(tb.path, 0, 1440, 0, 1900, '#1a0a04', 0.45); const cl = rect(-300, 1446, 1600, 300, { wash: '#2a5a3a', washA: 1, w: 1.6, col: '#0a2a14' }); hatch(cl.path, cl.bb, { gap: 5, a: 0.12, col: '#0a2a14', ang: 0.6, key: 23141, w: 1 });
    rect(-500, 1430, 2200, 18, { wash: '#3a1a08', washA: 1, w: 2, col: '#1a0804' });
    const on = lampOn(t); push(1220, 1480, 1); pencil([[0, 0], [0, -230]], { w: 10, col: '#c8a040', pass2: false }); pencil([[0, -230], [-70, -280]], { w: 8, col: '#c8a040', pass2: false }); const sh = blob([[-200, -270], [-160, -320], [20, -320], [60, -270]], { wash: '#1a6a3a', washA: 1, w: 2.4, col: '#0a2a14', key: 23142 }); shadeG(sh.path, 0, -320, 0, -270, '#0a3a1a', 0.4); ell(-70, -270, 128, 12, { wash: on > 0.5 ? '#fff4c8' : '#6a6a4a', washA: 1, line: false }); if (on > 0.5) glow(-70, -260, 200, 'rgba(255,230,160,1)', 0.35); ell(0, 0, 60, 14, { wash: '#c8a040', washA: 1, w: 1.6 }); pop();
    lightPool(700, 1540, 520, 110, 'rgba(255,230,160,1)', 0.42 * on);
    for (let i = 0; i < 4; i++) rect(1160 - i * 6, 1500 - i * 26, 240, 30, { wash: ['#c8b080', '#a89060', '#d8c8a0', '#8a7050'][i], washA: 1, w: 1.4, col: '#2a1a0a' });
    push(160, 1560, 1); const ink = rect(-40, -40, 80, 40, { wash: '#1a1a2a', washA: 1, w: 2, col: '#000000' }); ell(0, -40, 26, 8, { wash: '#2a2a4a', washA: 1, w: 1 }); pencil([[10, -40], [50, -150]], { w: 4, col: '#e8e0c8', pass2: false }); pop();
    push(300, 1600, 1); const st = rect(-36, -80, 72, 50, { wash: '#6a3a1a', washA: 1, w: 2, col: '#2a1408' }); ell(0, -96, 26, 18, { wash: '#4a2a14', washA: 1, w: 1.6 }); rect(-44, -30, 88, 20, { wash: '#a8241e', washA: 1, w: 1.4 }); pop();
    const op = sm(clamp((t - EV.ar_open) / 0.7)), rv = clamp((t - EV.ar_q0) / Math.max(0.5, EV.ar_diag + 0.4 - EV.ar_q0));
    medFolder(FX, FY - 120, 0.62, -0.04, { key: 23143, open: op, reveal: rv, title: '№ 1936 · «Докторская»' });
    quote(t);
    if (t > EV.ar_diag + 0.3) { const k = popK(t, EV.ar_diag + 0.3, 0.3); push(560, 1340, k * 1.1, -0.2); rect(-120, -40, 240, 80, { wash: 'rgba(0,0,0,0)', washA: 0, w: 6, col: '#c8241e' }); txt('ДИАГНОЗ', 0, 18, 46, { font: 'Osw', col: '#c8241e' }); pop(); }
    if (t > EV.ar_tsar) { const k = clamp((t - EV.ar_tsar) / 1.6), x = lerp(FX + 260, -200, sm(k)), y = FY - 30 - Math.abs(Math.sin(k * 9)) * 60 * (1 - k); push(x, y, 0.9, -k * 8); rect(-40, -10, 80, 26, { wash: '#d8a830', washA: 1, w: 1.6, col: '#6a4a08' }); for (let q = 0; q < 5; q++) poly([[-40 + q * 20, -10], [-30 + q * 20, -46], [-20 + q * 20, -10]], { wash: '#d8a830', washA: 1, w: 1.2, col: '#6a4a08' }); ell(0, 4, 8, 8, { wash: '#c8241e', washA: 1, w: 1 }); pop(); }
    if (t > EV.ar_sausage + 0.2) { const k = sm(clamp((t - EV.ar_sausage - 0.2) / 0.4)); doktorLoaf(FX + 20, lerp(FY - 600, FY - 140, k), 0.6, -0.06, { key: 23144, sub: 'принимать по 300 г' }); }
    castShadow(FX, FY - 40, 280, 120, -0.6, 0.3);
  }
  function quote(t) {                                                    // крупный лист цитаты поднимается из папки: строки проступают по словам
    const up = sm(clamp((t - EV.ar_q0 + 0.25) / 0.5)) * (1 - sm(clamp((t - EV.ar_tsar - 0.4) / 0.5))); if (up <= 0.01) return;
    push(400, lerp(1500, 1240, up), lerp(0.3, 1.12, up), -0.03); const p = rect(-220, -200, 440, 400, { wash: '#f6f0e0', washA: 1, w: 2, col: '#8a8270', key: 23146 }); shadeG(p.path, 220, 200, -220, -200, '#c8bea4', 0.3);
    txt('ИЗ ДОКУМЕНТА · 1936', 0, -168, 18, { font: 'Osw', col: '#5a5a5a' }); pencil([[-190, -152], [190, -152]], { w: 1.4, col: '#5a5a5a', pass2: false });
    const L = [['«Подорванное', 'Подорванное'], ['здоровье —', 'здоровье'], ['в результате', 'результате'], ['Гражданской войны…', 'войны…'], ['и царского', 'царского'], ['деспотизма»', 'деспотизма».']];
    L.forEach(([l, w], i) => { const tw = wtw('s12', w), a = clamp((t - tw + 0.15) / 0.25); if (a > 0) txt(l, 0, -104 + i * 52, 44, { font: 'Osw', col: i >= 4 ? '#b8241e' : '#1a1a1a', reveal: a }); });
    pop();
  }
  function front(t) {                                                    // передний план: стопка папок слева, край абажура сверху, пыль в луче
    for (let i = 0; i < 6; i++) { const f = rect(-360 + i * 4, 2100 - i * 46, 360, 44, { wash: ['#c8b080', '#a89060', '#d8c8a0'][i % 3], washA: 1, w: 2, col: '#2a1a0a', key: 23150 + i }); shadeG(f.path, 0, 2100 - i * 46, 0, 2144 - i * 46, '#2a1a0a', 0.3); pencil([[-340 + i * 4, 2122 - i * 46], [-60 + i * 4, 2122 - i * 46]], { w: 3, col: '#e8dcc0', a: 0.6, pass2: false }); }
    if (t > EV.ar_dust && t < EV.ar_dust + 1.6) { const k = (t - EV.ar_dust) / 1.6; for (let i = 0; i < 10; i++) ell(FX - 100 + i * 24 + k * 80, FY - 200 - k * 220 - (i % 3) * 30, 30 + k * 40, 20 + k * 30, { wash: '#d8ccb0', washA: 0.4 * (1 - k), line: false }); }
  }
  WORLD.archive = (t, u, cat) => {
    lay(14, () => { room(t); haze('#1a2a24', 0.06); });
    lay(4, () => { staff(t); shaft(1150, 900, 300, 900, 0.1, 'rgba(255,230,160,1)', 0.1 * lampOn(t)); castShadow(960, 1310, 120, 150, -0.9, 0.24); castShadow(1420, 1310, 120, 150, -0.9, 0.2); });
    lay(1, () => { cat(); desk(t); });
    lay(0.6, () => { front(t); motes(22, [200, 900, 1100, 1500], '#ffe8b0', t, 23160, { sp: 3, sz: 3, a: 0.4, wob: 6 }); moodDark(700, 1350, 380, 1300, '#050a08', 0.6); });
  };
  DIR.archive = {
    outfit: 'archA', light: { side: 1, rim: '#ffd890' }, grade: ['#6a8a5a', 0.1],
    act: () => [[S0.archive, 'suspicious'], [EV.ar_dust, 'annoyed'], [EV.ar_open, 'awe'], [EV.ar_q0, 'neutral'], [EV.ar_diag, 'shock'], [EV.ar_tsar, 'sideeye'], [EV.ar_sausage, 'proud'], [EV.ar_gag, 'neutral'], [EV.ar_gag + 0.4, 'wink']],
    pose: (t, u, b) => { const open = t > EV.ar_open - 0.3 && t < EV.ar_open + 0.6, put = t > EV.ar_sausage - 0.1 && t < EV.ar_sausage + 0.6, gag = t > EV.ar_gag && t < EV.ar_gag + 0.5;
      return Object.assign(b, { x: 800, y: 1590, s: 1.16, flip: 1, look: t < EV.ar_open ? [0, -0.1] : t < EV.ar_tsar ? [0.5, 0.8] : t < EV.ar_sausage ? [0.9, 0.4] : [0, 0], hand: open ? [260, -160] : put ? [240, -360] : gag ? [40, -440] : [180, -240], handF: [-110, -220], nod: gag ? Math.sin((t - EV.ar_gag) * 12) * 0.05 : 0, squint: t > EV.ar_q0 && t < EV.ar_diag, sweat: t > EV.ar_diag && t < EV.ar_tsar }); },
    afterCat: (t, u, P) => { if (t > EV.ar_dust - 0.2 && t < EV.ar_dust + 0.5) for (let i = 0; i < 4; i++) pencil([[P.x - 40 * P.s - i * 20, P.y - 300 * P.s + i * 6], [P.x - 120 * P.s - i * 30, P.y - 290 * P.s + i * 10]], { w: 2, col: '#c8bca0', a: 0.6, pass2: false }); },
    cam: () => [[S0.archive, 700, 1100, 0.24], [EV.ar_dust, 660, 1140, 0.28], [EV.ar_open, 620, 1200, 0.3], [EV.ar_q0, 600, 1240, 0.36], [EV.ar_diag, 620, 1220, 0.4], [EV.ar_tsar, 520, 1220, 0.3], [EV.ar_sausage, 620, 1180, 0.32], [S1.archive, 640, 1170, 0.34]]
  };
  TRANS_IN.archive = { a: 0.15, b: 0.55, runA: 1, fx(k, t, A, B) {      // обложка истории болезни открывается (поворот вокруг левого края)
    const e = sm(k), w = 1080 * Math.cos(e * 1.5708); drawBuf(B, 1, 540, 960);
    if (w > 4) { const rp = new Path2D(); rp.rect(0, 0, w, 1920); inPath(rp, () => drawBuf(A, 1, 540, 960, 1, null, -(1080 - w) * 0.5));
      scr(() => { const c = rect(0, 0, w, 1920, { wash: '#e6d29a', washA: 0.85, w: 4, col: '#6a5428' }); shadeG(c.path, w, 0, 0, 0, '#9a8048', 0.4); if (w > 320) { rect(w * 0.15, 360, w * 0.7, 420, { wash: '#f4ecd2', washA: 1, w: 2, col: '#6a5428' }); txt('ИСТОРИЯ', w * 0.5, 520, 110 * w / 1080, { font: 'Osw', col: '#2a2a2a' }); txt('БОЛЕЗНИ', w * 0.5, 660, 110 * w / 1080, { font: 'Osw', col: '#2a2a2a' }); } pencil([[w, 900], [w + 80, 880]], { w: 6, col: '#efe4c8', pass2: false }); }); }
  } };
})();
