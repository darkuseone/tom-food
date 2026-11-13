/* 020 — `news`: «Поэтому ищем само слово. 1950-й: газета пишет — её ищут американские офицеры в Риме.»
   Трастевере, летнее утро 1950: площадь с фонтаном, колокольня Санта-Мария-ин-Трастевере с мозаикой (главный свет — низкое солнце слева, длинные тени вправо),
   охристые дома с зелёными ставнями и цветами, газетный киоск-эдикола с журналами и газетами на прищепках, мотороллер, столики траттории под навесом;
   два американских офицера в хаки и фуражках разглядывают меню и показывают официанту «карбонару?», официант пожимает плечами; голуби, монахиня, мальчишка на велосипеде.
   Том-газетчик (кепка, жилет) читает газету. По словам: «слово» — лупа на газете, «1950-й» — газета разворачивается крупно, заголовок «CARBONARA?» обведён;
   «американские офицеры» — офицеры поворачиваются, машут; «в Риме.» — голуби вспархивают. Переход В сцену: вагоны надземки проносятся через кадр — в окнах уже Рим. */
(() => {
  EV.nw_word = wtw('s6', 'слово.');
  EV.nw_year = wtw('s6', '1950-й:');
  EV.nw_off = wtw('s6', 'американские');
  EV.nw_rome = wtw('s6', 'Риме.');
  SHAKES.push([EV.nw_year + 0.1, 0.15, 6]);
  KEYW.push('слово.', 'американские');

  function sky(t) {                                                     // небо, колокольня с мозаикой, крыши, купол вдали
    vgrad(-400, 900, ['#7ab0e0', '#b8d8ec', '#f8e8c8']);
    for (let i = 0; i < 5; i++) blob([[-300 + i * 300, -200 + (i % 2) * 60], [-220 + i * 300, -240], [-120 + i * 300, -210], [-180 + i * 300, -180]], { wash: '#ffffff', washA: 0.8, line: false });
    push(1000, 900, 1); ell(0, -220, 160, 120, { wash: '#c8b898', washA: 1, w: 1.4, col: '#6a5a3a' }); rect(-160, -220, 320, 220, { wash: '#c8b898', washA: 1, line: false }); pencil([[0, -340], [0, -400]], { w: 6, col: '#6a5a3a' }); pop();
    push(260, 900, 1); const tw = rect(-90, -760, 180, 760, { wash: '#c8784a', washA: 1, w: 2.4, col: '#4a2010', key: 21200 }); shadeG(tw.path, 90, 0, -90, 0, '#6a2a10', 0.45);
    for (let k = 0; k < 4; k++) { for (let q = 0; q < 2; q++) { const ar = ell(-40 + q * 80, -660 + k * 150, 26, 40, { wash: '#2a1a14', washA: 1, w: 1.6 }); } rect(-96, -600 + k * 150, 192, 10, { wash: '#e8c8a0', washA: 1, w: 1 }); }
    poly([[-100, -760], [0, -860], [100, -760]], { wash: '#a85a3a', washA: 1, w: 2 }); pencil([[0, -860], [0, -920]], { w: 4, col: '#3a2a1a' }); pencil([[-20, -900], [20, -900]], { w: 4, col: '#3a2a1a' });
    const mz = rect(-70, -160, 140, 80, { wash: '#e8b830', washA: 1, w: 1.4, col: '#6a4a08' }); for (let i = 0; i < 5; i++) human(-50 + i * 25, -86, 0.18, 0, { body: ['#2a4a8a', '#c8241e', '#f4ecdc'][i % 3], legs: '#2a2a2a', hair: '#3a2a1a', face: 'calm', armL: 'down', armR: 'down', seed: 21201 + i, long: 1 }); pop();
    for (let i = 0; i < 6; i++) { const x = -360 + i * 150 + (i > 2 ? 400 : 0), h = 300 + (i * 61) % 140; rect(x, 900 - h, 140, h, { wash: ['#e8a868', '#d8904a', '#f0c088'][i % 3], washA: 1, w: 1.2, col: '#5a3010' }); poly([[x - 6, 900 - h], [x + 70, 860 - h], [x + 146, 900 - h]], { wash: '#a84a2a', washA: 1, w: 1.2 }); }
  }
  function piazza(t) {                                                  // дома с зелёными ставнями, цветы, киоск, фонтан, брусчатка
    for (let i = 0; i < 4; i++) { const x = -400 + i * 520, w = 500; const b = rect(x, 300, w, 1140, { wash: ['#e8a860', '#d89050', '#f0b878', '#e09858'][i], washA: 1, w: 2, col: '#5a3010', key: 21210 + i }); shadeG(b.path, x + w, 300, x, 300, '#8a4a20', 0.35);
      const r = rng(21215 + i); for (let k = 0; k < 8; k++) blob([[x + r() * w, 320 + r() * 900], [x + r() * w + 40, 330 + r() * 900], [x + r() * w + 20, 360 + r() * 900]], { wash: '#f8d0a0', washA: 0.35, line: false });
      for (let rr = 0; rr < 3; rr++) for (let c = 0; c < 3; c++) { const wx = x + 50 + c * 150, wy = 360 + rr * 200; rect(wx, wy, 70, 110, { wash: '#2a1a14', washA: 1, w: 1.2 }); for (const sd of [-1, 1]) { const sh = rect(wx + (sd < 0 ? -34 : 70), wy, 34, 110, { wash: '#3a7a4a', washA: 1, w: 1.2, col: '#1a3a1a' }); for (let q = 0; q < 6; q++) pencil([[wx + (sd < 0 ? -32 : 72), wy + 10 + q * 16], [wx + (sd < 0 ? -2 : 102), wy + 10 + q * 16]], { w: 1.2, col: '#1a3a1a', a: 0.6, pass2: false }); }
        rect(wx - 10, wy + 110, 90, 14, { wash: '#8a5a3a', washA: 1, w: 1 }); for (let q = 0; q < 4; q++) ell(wx + q * 22, wy + 104, 9, 8, { wash: ['#e83a5a', '#ffffff', '#e8c830'][q % 3], washA: 1, line: false }); } }
    for (let y = 1200; y < 1460; y += 26) for (let x = -400 + ((y / 26) % 2) * 22; x < 1600; x += 44) ell(x, y, 20, 10, { wash: '#8a8478', washA: 1, w: 0.6, col: '#4a4438' });
    push(560, 1300, 1); const f = ell(0, 0, 220, 50, { wash: '#d8ccb8', washA: 1, w: 2.4, col: '#5a5040', key: 21220 }); shadeG(f.path, 0, 50, 0, -50, '#8a8070', 0.4); ell(0, -6, 190, 36, { wash: '#6aa8c8', washA: 1, w: 1.2 });
    rect(-30, -160, 60, 160, { wash: '#d8ccb8', washA: 1, w: 2 }); ell(0, -170, 70, 18, { wash: '#d8ccb8', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) { const q = (t * 1.4 + i / 4) % 1; pencil(spline([[0, -180], [(i - 1.5) * 40 * q, -220 - 40 * Math.sin(q * 3)], [(i - 1.5) * 70 * q, -170 + q * 160]], false, 6), { w: 4, col: '#d8f0ff', a: 0.7 * (1 - q), pass2: false }); } pop();
  }
  function kiosk(t) {                                                   // газетный киоск: прищепки с газетами, журналы, вывеска GIORNALI
    push(150, 1420, 1); const k = rect(-170, -420, 340, 420, { wash: '#2a5a3a', washA: 1, w: 3, col: '#0a1a10', key: 21230 }); shadeG(k.path, 170, 0, -170, 0, '#0a2a14', 0.45); poly([[-200, -420], [0, -480], [200, -420]], { wash: '#1a4a2a', washA: 1, w: 2.4 });
    rect(-120, -470, 240, 40, { wash: '#f4ecd4', washA: 1, w: 1.6 }); txt('GIORNALI', 0, -440, 30, { font: 'Osw', col: '#1a3a2a' });
    for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) { const x = -130 + c * 66, y = -390 + r * 110; rect(x, y, 56, 80, { wash: ['#f4f0e4', '#c8321a', '#e8b830', '#2a6ac8'][(r + c) % 4], washA: 1, w: 1, col: '#3a3a3a' }); rect(x + 6, y + 8, 44, 10, { wash: '#2a2a2a', washA: 0.6, line: false }); pencil([[x + 28, y - 6], [x + 28, y + 4]], { w: 3, col: '#c8a060', pass2: false }); }
    pop();
    human(350, 1430, 1.0, t, { body: '#5a4a3a', legs: '#3a3a3a', hair: '#c8c4bc', face: 'smile', armL: 'hold', armR: t > EV.nw_year ? 'point' : 'hold', look: 0.5, seed: 21231, beard: 'short', hat: 'cap', hatCol: '#3a3a3a' });
  }
  function trattoria(t) {                                               // столики траттории под навесом справа: офицеры в хаки, официант
    const wv = t > EV.nw_off;
    push(980, 1100, 1); for (let i = 0; i < 8; i++) poly([[-300 + i * 80, -300], [-220 + i * 80, -300], [-230 + i * 80, -240], [-290 + i * 80, -240]], { wash: i % 2 ? '#c8241e' : '#f4ecdc', washA: 1, w: 1.2, col: '#3a0a08' }); rect(-300, -320, 640, 24, { wash: '#8a2a1a', washA: 1, w: 1.4 });
    rect(-280, -200, 220, 140, { wash: '#2a1a14', washA: 1, w: 3, col: '#5a3a1a' }); txt('TRATTORIA', -170, -220, 26, { font: 'Osw', col: '#f4ecd4' }); pop();
    for (const [x, sd] of [[860, 1], [1100, -1]]) { push(x, 1340, 1); rect(-80, -90, 160, 14, { wash: '#f4ecdc', washA: 1, w: 1.2 }); for (let q = 0; q < 4; q++) rect(-80 + q * 40, -90, 20, 14, { wash: '#c8241e', washA: 0.7, line: false }); pencil([[0, -76], [0, 0]], { w: 5, col: '#3a2a1a' }); pop(); }
    human(820, 1440, 1.05, t, { body: '#8a8456', legs: '#6a6440', hair: '#c89a5a', face: wv ? 'grin' : 'calm', armL: 'hold', armR: wv ? 'wave' : 'hold', look: wv ? -0.6 : 0.6, seed: 21240, hat: 'cap', hatCol: '#6a6440' });
    human(940, 1440, 1.05, t, { body: '#8a8456', legs: '#6a6440', hair: '#3a2a1a', face: wv ? 'grin' : 'shock', armL: wv ? 'up' : 'hold', armR: 'point', look: 0.6, seed: 21241, flip: -1, hat: 'cap', hatCol: '#6a6440' });
    push(880, 1150, 1); rect(-40, -30, 80, 60, { wash: '#f4ecd4', washA: 1, w: 1.2, col: '#3a2a1a' }); txt('MENÙ', 0, -10, 16, { font: 'Osw', col: '#3a2a1a' }); txt('carbonara?', 0, 14, 14, { font: 'Hand', col: '#c8321a' }); pop();
    human(1160, 1440, 1.0, t, { body: '#f4f0e8', legs: '#2a2a2a', hair: '#1a1a1a', face: wv ? 'grin' : 'calm', armL: 'hips', armR: wv ? 'up' : 'hold', look: -0.6, seed: 21242, flip: -1, beard: 'short' });
    push(1300, 1350, 0.9); const vb = blob([[-80, -20], [-70, -70], [-10, -90], [40, -60], [80, -40], [80, -10]], { wash: '#c8a868', washA: 1, w: 2, col: '#3a2a10', key: 21243 }); shadeG(vb.path, 80, 0, -80, -80, '#6a4a1a', 0.4); ell(-60, 0, 22, 22, { wash: '#1a1a1a', washA: 1, w: 1.4 }); ell(60, 0, 22, 22, { wash: '#1a1a1a', washA: 1, w: 1.4 }); pencil([[30, -90], [40, -130], [60, -134]], { w: 4, col: '#1a1a1a' }); pop();
    for (let i = 0; i < 7; i++) { const fly = t > EV.nw_rome ? (t - EV.nw_rome) * (200 + i * 40) : 0; const x = 400 + i * 60 + fly * 0.8, y = 1400 - fly * 1.2 - (i % 2) * 10; ell(x, y, 14, 9, { wash: '#8a8a96', washA: 1, w: 1.2, col: '#2a2a2a' }); ell(x + 12, y - 8, 6, 6, { wash: '#6a6a7a', washA: 1, w: 1 }); if (fly) { pencil([[x - 14, y], [x, y - 20 - Math.abs(Math.sin(t * 20)) * 10], [x + 14, y]], { w: 3, col: '#6a6a7a', pass2: false }); } }
  }
  function front(t) {                                                   // передний план: столик кафе с газетами, чашкой эспрессо, ветка олеандра сверху
    const c = rect(-500, 1440, 2100, 700, { wash: '#8a8478', washA: 1, w: 3, col: '#3a3428', key: 21250 }); for (let y = 1460; y < 2000; y += 40) for (let x = -500 + ((y / 40) % 2) * 30; x < 1600; x += 60) ell(x, y, 28, 14, { wash: '#a8a094', washA: 1, w: 0.7, col: '#4a4438' });
    push(860, 1460, 1); const tb = ell(0, -20, 240, 50, { wash: '#e8e4dc', washA: 1, w: 2.4, col: '#5a5a5a', key: 21251 }); shadeG(tb.path, 0, 30, 0, -70, '#a8a49c', 0.4);
    newspaper(-60, -50, 0.5, -0.08, 'LA STAMPA', {}); push(-60, -80, 0.5, -0.08); if (t > EV.nw_year) { const k = popK(t, EV.nw_year, 0.3); ell(-40, -10, 120 * k, 40 * k, { wash: '#ff3a2a', washA: 0, w: 4, col: '#e8241e' }); txt('CARBONARA?', -40, 0, 36, { font: 'Osw', col: '#c8241e', a: k }); } pop();
    push(120, -40, 1); ell(0, 0, 40, 10, { wash: '#f4f4f0', washA: 1, w: 1.4 }); rect(-22, -40, 44, 40, { wash: '#f4f4f0', washA: 1, w: 1.6 }); ell(0, -40, 22, 6, { wash: '#3a1a0a', washA: 1, w: 1 }); steamWisps(0, -50, 0.3, t, 2, 21252, 0.4); pop();
    if (t > EV.nw_word) magnifier(40, -70, 0.7, -0.4, 0.25); pop();
    castShadow(860, 1460, 300, 160, 0.7, 0.3);
    push(1200, 80, 1.5); pencil(spline([[300, -100], [100, 40], [-120, 120]], false, 6), { w: 10, col: '#4a3a1a' }); for (let i = 0; i < 12; i++) { const x = 260 - i * 34, y = -80 + i * 18; blob([[x, y], [x - 30, y + 30], [x - 10, y + 50], [x + 10, y + 20]], { wash: '#3a7a3a', washA: 1, w: 1.2, col: '#1a3a1a' }); if (i % 3 === 0) ell(x - 10, y + 50, 14, 12, { wash: '#f06a8a', washA: 1, w: 1 }); } pop();
  }
  WORLD.news = (t, u, cat) => {
    lay(20, () => { sky(t); haze('#fff0d0', 0.06); });
    lay(6, () => { piazza(t); shaft(-200, 200, 400, 1600, -0.6, 'rgba(255,240,200,0.6)', 0.12); });
    lay(3.4, () => { kiosk(t); trattoria(t); lightPool(500, 1380, 700, 120, 'rgba(255,230,170,1)', 0.25); castShadow(880, 1440, 120, 300, 0.9, 0.3); });
    lay(1, () => { cat(); front(t); });
    lay(0.6, () => { moodDark(700, 1100, 560, 1500, '#1a1030', 0.35); motes(16, [-100, 400, 1300, 1500], '#fff4d0', t, 21260, { sp: 6, sz: 3, a: 0.4 }); });
  };
  DIR.news = {
    outfit: 'newsA', light: { side: -1, rim: '#ffe0a0' }, grade: ['#ffc070', 0.07],
    act: () => [[S0.news, 'suspicious'], [EV.nw_word, 'talk'], [EV.nw_year, 'awe'], [EV.nw_off, 'grin'], [EV.nw_rome, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1590, s: 1.15, flip: 1, look: t > EV.nw_off ? [0.9, 0] : [0.5, 0.5], hand: t > EV.nw_year ? [200, -330] : [160, -280], handF: [-70, -230], prop: 'newsP20', propAng: t > EV.nw_year ? -0.05 : -0.3, point: t > EV.nw_off && t < EV.nw_rome ? 1 : undefined }),
    cam: () => [[S0.news, 620, 1120, 0.24], [EV.nw_word, 660, 1200, 0.3, 'x'], [EV.nw_year, 650, 1180, 0.3], [EV.nw_off, 680, 1100, 0.24, 'x'], [S1.news, 660, 1080, 0.26]]
  };
  TRANS_IN.news = { a: 0.2, b: 0.6, runA: 1, fx(k, t, A, B) {           // вагоны надземки проносятся через кадр, в окнах — Рим; за последним вагоном — новая сцена
    const x = lerp(W + 200, -W * 2.4, k); drawBuf(k < 0.6 ? A : B, 1, 540, 960);
    scr(() => { for (let c = 0; c < 3; c++) { const cx = x + c * 820; if (cx > W || cx + 800 < 0) continue; ctx.fillStyle = '#5a6a2a'; ctx.fillRect(cx, 380, 800, 1160); ctx.fillStyle = '#c8a040'; ctx.fillRect(cx, 1500, 800, 26);
      for (let w = 0; w < 3; w++) { ctx.save(); ctx.beginPath(); ctx.rect(cx + 40 + w * 250, 520, 220, 360); ctx.clip(); ctx.drawImage(B, cx + 40 + w * 250 - 300, 300); ctx.restore(); ctx.strokeStyle = '#1a2008'; ctx.lineWidth = 8; ctx.strokeRect(cx + 40 + w * 250, 520, 220, 360); } } });
    rewTag(k, 0.8);
  } };
})();
