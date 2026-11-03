/* 017 — `law`: «До 1998-го закон даже запрещал продавать новый улов раньше назначенного дня.» Шведская продуктовая лавка 1990-х в августе: полки
   с банками, весы, касса, корзины с картофелем и укропом, окно с летней улицей и велосипедом, гирлянда флажков, очередь покупателей у прилавка нетерпеливо
   смотрит на часы. Том-чиновник в твидовом пиджаке с фартуком и указом. По словам: «До 1998-го» — табло 1998; «закон» — свиток с короной и печатью;
   «запрещал продавать» — поперёк полки с банками натягивается лента STOP, ценник ЗАПРЕТ; «новый улов» — свежие вздутые банки за лентой; «назначенного дня» —
   календарь АВГУСТ: третий четверг обводится красным. Переход В сцену: календарные дни-клетки переворачиваются, как табло, и складываются в новый кадр. */
(() => {
  EV.lw_98 = wtw('s5', '1998-го');
  EV.lw_law = wtw('s5', 'закон');
  EV.lw_ban = wtw('s5', 'запрещал');
  EV.lw_new = wtw('s5', 'улов');
  EV.lw_day = wtw('s5', 'дня.');
  KEYW.push('закон', 'дня.');

  function shop(t) {                                                    // стены, окно на улицу, гирлянда, полки с банками, часы
    vgrad(-600, 1500, ['#e8dcc0', '#f0e4c8', '#d8c8a8']); for (let x = -400; x < 1600; x += 40) pencil([[x, -500], [x, 1300]], { w: 2, col: '#c8b898', a: 0.4, pass2: false });
    push(160, 300, 1); const w = rect(-180, -220, 360, 380, { wash: '#9ac8e8', washA: 1, w: 8, col: '#3a5a8a', key: 17600 }); ctx.save(); ctx.clip(w.path); vgrad(-220, 160, ['#8ac0e8', '#e0f0f8']); for (const [x, h, c] of [[-170, 200, '#c83a2a'], [-30, 240, '#f4d870'], [110, 180, '#c83a2a']]) rect(x, 160 - h, 130, h, { wash: c, washA: 1, w: 1.4 }); push(0, 140, 1); for (const sd of [-1, 1]) ell(sd * 50, 0, 30, 30, { line: true, w: 4, col: '#1a1a1a' }); pencil([[-50, 0], [0, -40], [50, 0], [0, -40], [10, -60]], { w: 4, col: '#2a5ab0', pass2: false }); pop(); ctx.restore(); pencil([[0, -220], [0, 160]], { w: 6, col: '#3a5a8a' }); pop();
    for (let i = 0; i < 18; i++) { const x = -360 + i * 110, y = -40 + Math.sin(i * 0.8) * 20; poly([[x, y], [x + 50, y], [x + 25, y + 50]], { wash: i % 2 ? '#2a5ab0' : '#f4d020', washA: 1, w: 1 }); } pencil(Array.from({ length: 18 }, (_, i) => [-360 + i * 110, -40 + Math.sin(i * 0.8) * 20]), { w: 2, col: '#3a3a3a', pass2: false });
    for (const y of [420, 640, 860]) { rect(500, y, 980, 16, { wash: '#8a6a4a', washA: 1, w: 1.6 }); for (let i = 0; i < 11; i++) { const x = 540 + i * 86; tinCan(x, y, 0.45, 0, { bulge: 0.3 + (i % 3) * 0.1, key: 17601 + i + y }); } }
    push(1180, 160, 1); ell(0, 0, 70, 70, { wash: '#f8f4ea', washA: 1, w: 4, col: '#3a3a3a' }); pencil([[0, 0], [Math.cos(t * 2) * 50, Math.sin(t * 2) * 50]], { w: 4, col: '#1a1a1a', pass2: false }); pencil([[0, 0], [30, -30]], { w: 6, col: '#1a1a1a', pass2: false }); pop();
  }
  function queue(t) {                                                   // очередь покупателей с корзинками, нетерпение
    for (let i = 0; i < 4; i++) { const x = -160 + i * 150, bob = Math.sin(t * 5 + i) * 4; human(x, 1300 + bob, 0.95, t, { body: ['#4a7ab0', '#c8443a', '#5a8a5a', '#e8c040'][i], legs: '#2a2a3a', hair: ['#e8d0a0', '#3a2010', '#c8a060', '#8a5a2a'][i], face: t > EV.lw_ban ? 'annoyed' : 'smile', armL: 'hold', armR: i === 1 && t > EV.lw_ban ? 'point' : 'hold', look: 0.6, seed: 17620 + i, long: i % 2 }); push(x + 60, 1300 + bob - 120, 1); blob([[-30, 0], [-34, -40], [34, -40], [30, 0]], { wash: '#c8a058', washA: 1, w: 1.4 }); pop(); }
  }
  function counter(t) {                                                 // прилавок: касса, весы, указ с короной, табло 1998, лента STOP, календарь
    const tb = rect(-400, 1440, 1900, 800, { wash: '#a87a4a', washA: 1, w: 3, col: '#3a2410', key: 17630 }); shadeG(tb.path, 0, 1900, 0, 1440, '#5a3a1a', 0.4); pencil([[-400, 1446], [1500, 1446]], { w: 8, col: '#c89a5a', pass2: false });
    push(-60, 1480, 1); rect(-100, -110, 200, 110, { wash: '#3a3a3a', washA: 1, w: 2 }); rect(-80, -150, 160, 40, { wash: '#2a2a2a', washA: 1, w: 1.6 }); txt('0,00', 0, -122, 22, { font: 'Osw', col: '#6ae070' }); for (let i = 0; i < 6; i++) rect(-80 + (i % 3) * 56, -90 + Math.floor(i / 3) * 34, 46, 26, { wash: '#8a8a8a', washA: 1, w: 1 }); pop();
    if (t > EV.lw_98 - 0.1) { push(380, 1060, popK(t, EV.lw_98 - 0.1, 0.4)); rect(-140, -56, 280, 112, { wash: '#1a1a20', washA: 1, w: 4, col: '#c8a050' }); txt('ДО 1998', 0, 22, 56, { font: 'Osw', col: '#ffe070' }); pop(); }
    if (t > EV.lw_law - 0.1) { push(260, 1430, popK(t, EV.lw_law - 0.1, 0.4), -0.06); rect(-120, -150, 240, 150, { wash: '#f4e6c0', washA: 1, w: 2, col: '#6a4a1a' }); for (const sd of [-1, 1]) ell(sd * 120, -75, 12, 80, { wash: '#c8a868', washA: 1, w: 2 }); push(0, -110, 1); poly([[-30, 10], [-30, -14], [-16, 0], [0, -20], [16, 0], [30, -14], [30, 10]], { wash: '#e8b030', washA: 1, w: 1.6, col: '#8a5a10' }); pop(); for (let i = 0; i < 3; i++) pencil([[-80, -70 + i * 16], [80, -70 + i * 16]], { w: 2, col: '#8a6a3a', a: 0.7, pass2: false }); ell(70, -20, 20, 20, { wash: '#2a5ab0', washA: 1, w: 1.6 }); pop(); }
    if (t > EV.lw_ban - 0.1) { const k = sm(clamp((t - EV.lw_ban + 0.1) / 0.4)); for (const y of [560, 780]) { pencil([[500, y], [lerp(500, 1480, k), y + 10]], { w: 22, col: '#f4d020', pass2: false }); for (let i = 0; i < 8 * k; i++) txt('STOP', 560 + i * 120, y + 18, 18, { font: 'Osw', col: '#1a1a1a' }); } if (k >= 1) bubbleTag('ЗАПРЕТ', 980, 1000, t, EV.lw_ban + 0.4, '#c8221a', 46, 0.04); }
    if (t > EV.lw_new) { glow(1000, 700, 260, 'rgba(255,240,150,1)', 0.35); stink(1000, 560, 1.0, t, { n: 3, a: 0.6 }); }
    if (t > EV.lw_day - 0.15) { push(760, 1180, popK(t, EV.lw_day - 0.15, 0.4)); rect(-170, -140, 340, 280, { wash: '#f8f4ea', washA: 1, w: 3, col: '#3a3a3a' }); rect(-170, -140, 340, 56, { wash: '#2a5ab0', washA: 1, w: 2 }); txt('АВГУСТ', 0, -100, 32, { font: 'Osw', col: '#ffffff' });
      for (let r = 0; r < 4; r++) for (let c = 0; c < 7; c++) { const n = r * 7 + c + 1; txt(String(n), -140 + c * 46, -46 + r * 46, 22, { font: 'Osw', col: c > 4 ? '#c8221a' : '#2a2a2a' }); } const q = clamp((t - EV.lw_day) / 0.5); pencil(Array.from({ length: 20 }, (_, i) => [-140 + 3 * 46 + Math.cos(i / 19 * 6.283 * q) * 26, -46 + 2 * 46 - 8 + Math.sin(i / 19 * 6.283 * q) * 22]), { w: 5, col: '#c8221a', pass2: false }); pop(); }
  }
  function front(t) { push(-40, 1960, 1.6); const b = blob([[-110, 0], [-120, -80], [120, -80], [110, 0]], { wash: '#c8a058', washA: 1, w: 2, col: '#5a3a10' }); for (let i = 0; i < 5; i++) potato(-70 + i * 35, -86, 0.4, i, { key: 17640 + i }); pop(); push(1180, 1990, 1.6); for (let i = 0; i < 7; i++) pencil([[-40 + i * 12, 0], [-50 + i * 14, -160]], { w: 4, col: '#4a8a2a' }); pop();
    motes(20, [0, 300, 1100, 1700], '#fffbe0', t, 17645, { sp: 6, sz: 4, a: 0.35, wob: 2 }); rays(160, 300, 1.0, 0.4, 1400, 'rgba(255,250,220,1)', 0.14, 5, t); }
  WORLD.law = (t, u, cat) => {
    lay(14, () => { shop(t); haze('#f4e8c8', 0.05); });
    lay(2.6, () => { queue(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { counter(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.law = {
    outfit: 'econA', light: { side: -1, rim: '#fff4d8' }, grade: ['#f4e0b0', 0.05],
    act: () => [[S0.law, 'proud'], [EV.lw_law, 'smug'], [EV.lw_ban, 'annoyed'], [EV.lw_new, 'sideeye'], [EV.lw_day, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1580, s: 1.16, flip: t > EV.lw_ban ? 1 : -1, look: t > EV.lw_day ? [0.6, 0.3] : t > EV.lw_ban ? [0.7, -0.6] : [-0.6, 0.3], hand: [200, -290], handF: t > EV.lw_ban && t < EV.lw_day ? [180, -440] : [-90, -220], prop: 'letterP', propAng: 0.1, point: t > EV.lw_ban && t < EV.lw_day ? 1 : undefined }),
    cam: () => [[S0.law, 560, 900, 0.12], [EV.lw_98, 400, 1150, 0.22, 'x'], [EV.lw_law, 340, 1250, 0.22], [EV.lw_ban, 900, 950, 0.22], [EV.lw_day, 720, 1200, 0.22], [S1.law, 720, 1220, 0.24]]
  };
  // ---------------------------------------------------------------- переход: клетки-дни переворачиваются, как табло
  TRANS_IN.law = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), cols = 6, rows = 10, cw = W / cols, ch = H / rows; drawBuf(A, 1, 540, 960);
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) { const d = clamp(e * 2 - (i + j) / (cols + rows)); if (d <= 0) continue; const f = Math.abs(Math.cos(d * Math.PI)); ctx.save(); ctx.beginPath(); ctx.rect(i * cw, j * ch, cw, ch); ctx.clip(); ctx.translate(0, j * ch + ch / 2); ctx.scale(1, Math.max(0.02, f)); ctx.translate(0, -(j * ch + ch / 2)); if (d < 0.5) { ctx.fillStyle = '#f8f4ea'; ctx.fillRect(i * cw, j * ch, cw, ch); } else ctx.drawImage(B, 0, 0); ctx.restore(); }
  } };
})();
