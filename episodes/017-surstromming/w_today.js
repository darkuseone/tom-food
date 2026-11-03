/* 017 — `today`: «Теперь третий четверг августа — праздник премьеры. Открыл бы банку или ни за что?» Августовский вечер у озера в Швеции: красный
   домик с белыми окнами, берёзы, мостки, лодка, гирлянда бумажных фонариков, длинный стол на улице в клетчатой скатерти: лепёшки, варёная картошка, лук,
   сметана, укроп, кувшин молока, ведро с водой, где вскрывают банку; гости в бумажных колпаках. Том в летней рубашке с фартуком. По словам: «Теперь» —
   фонарики загораются; «третий четверг августа» — календарь, четверг обведён; «праздник премьеры» — гости поднимают лепёшки, хлопушка-конфетти; «Открыл бы
   банку» — над столом кнопка ОТКРЫТЬ подсвечивается; «ни за что?» — кнопка НИ ЗА ЧТО, Том переводит взгляд. Переход В сцену: банка-хлопушка — кадр разлетается
   бумажным конфетти и собирается в новую сцену. */
(() => {
  EV.td_now = LS('t1');
  EV.td_thu = wtw('t1', 'четверг');
  EV.td_party = wtw('t1', 'праздник');
  EV.td_open = wtw('t1', 'Открыл');
  EV.td_no = wtw('t1', 'что?');
  KEYW.push('премьеры.', 'что?');

  function lake(t) {                                                    // закатное небо, озеро, берёзы, красный домик, мостки, лодка, фонарики
    vgrad(-700, 900, ['#5a6aa8', '#e8a088', '#f8d8a0']); glow(820, 640, 500, 'rgba(255,200,140,1)', 0.5); const s = rect(-400, 640, 2000, 500, { wash: '#6a8ab0', washA: 1, line: false }); for (let i = 0; i < 8; i++) pencil(Array.from({ length: 30 }, (_, j) => [-400 + j * 70, 670 + i * 40 + Math.sin(t * 1.2 + j * 0.5 + i) * 5]), { w: 2, col: '#f8d8b0', a: 0.4, pass2: false });
    for (let i = 0; i < 14; i++) spruce(-380 + i * 140, 640, 120 + (i % 3) * 40, '#2a4a3a', 1);
    push(160, 900, 1); rect(-180, -200, 360, 200, { wash: '#a8302a', washA: 1, w: 2, col: '#3a0a08' }); for (const sd of [-1, 1]) rect(sd * 180 - 8, -200, 16, 200, { wash: '#f4f4f0', washA: 1, line: false }); shape([[-210, -200], [0, -320], [210, -200]], { wash: '#3a3a3a', washA: 1, w: 2 }); for (const x of [-100, 80]) { rect(x - 30, -150, 60, 60, { wash: '#ffd890', washA: 1, w: 4, col: '#f4f4f0' }); glow(x, -120, 80, 'rgba(255,210,130,1)', 0.5); } rect(-20, -100, 50, 100, { wash: '#2a1a10', washA: 1, w: 1.4 }); pop();
    for (const x of [440, 1240]) { pencil(spline([[x, 1000], [x - 6, 700], [x + 6, 400]], false, 6), { w: 24, col: '#f4f4f0' }); for (let k = 0; k < 6; k++) pencil([[x - 10, 900 - k * 90], [x + 6, 900 - k * 90]], { w: 4, col: '#1a1a1a', pass2: false }); for (let k = 0; k < 6; k++) blob([[x - 120 + k * 40, 420], [x - 100 + k * 40, 340 - (k % 2) * 30], [x - 60 + k * 40, 360], [x - 80 + k * 40, 430]], { wash: k % 2 ? '#8ab040' : '#a8c050', washA: 1, w: 1.2, col: '#3a5a1a' }); }
    rect(800, 760, 360, 20, { wash: '#7a5a3a', washA: 1, w: 1.6 }); push(1000, 820 + Math.sin(t * 1.4) * 4, 0.8); shape(spline([[-130, -30], [-110, 20], [110, 20], [140, -40]], true, 6), { wash: '#f4f0e6', washA: 1, w: 2 }); pop();
    const on = t > EV.td_now - 0.1; pencil(spline([[-300, 200], [200, 300], [700, 220], [1400, 320]], false, 8), { w: 2, col: '#3a3a3a', pass2: false }); for (let i = 0; i < 12; i++) { const x = -260 + i * 140, y = 230 + Math.sin(i * 0.9) * 40 + 20; ell(x, y + 30, 24, 30, { wash: ['#f4d020', '#2a5ab0', '#e83a3a'][i % 3], washA: on ? 1 : 0.5, w: 1.4, col: '#3a3a3a' }); if (on) glow(x, y + 30, 60, 'rgba(255,220,150,1)', 0.5); }
  }
  function guests(t) {                                                  // гости в бумажных колпаках поднимают лепёшки
    const up = t > EV.td_party; for (let i = 0; i < 4; i++) { const x = -160 + i * 140 + (i > 1 ? 640 : 0), fl = i > 1 ? -1 : 1; human(x, 1290, 0.95, t, { body: ['#f4d020', '#2a5ab0', '#e8e0d0', '#5a8a5a'][i], legs: '#2a2a34', hair: ['#e8d0a0', '#c8a060', '#3a2010', '#e8c890'][i], face: up ? 'grin' : 'smile', armL: 'hold', armR: up ? 'up' : 'hold', look: fl * 0.4, seed: 17900 + i, flip: fl, long: i % 2 });
      push(x, 1290 - 286, 0.95); poly([[-30, 0], [0, -80], [30, 0]], { wash: ['#e83a3a', '#f4d020', '#2a5ab0', '#e83a3a'][i], washA: 1, w: 1.4 }); ell(0, -80, 8, 8, { wash: '#ffffff', washA: 1, line: false }); pop(); if (up) { push(x + fl * 60, 1290 - 330, 1); klamma(0, 0, 0.3, fl * 0.4, { key: 17905 + i }); pop(); } }
  }
  function table(t) {                                                   // стол в клетку: лепёшки, картошка, лук, сметана, укроп, ведро с банкой, календарь, кнопки-выбор
    const tb = rect(-400, 1440, 1900, 800, { wash: '#f4f0e6', washA: 1, w: 3, col: '#5a5a5a', key: 17910 }); ctx.save(); ctx.clip(tb.path); for (let i = 0; i < 30; i++) { rect(-400 + i * 80, 1440, 40, 800, { wash: '#2a5ab0', washA: 0.35, line: false }); } for (let j = 0; j < 12; j++) rect(-400, 1440 + j * 80, 1900, 40, { wash: '#2a5ab0', washA: 0.35, line: false }); ctx.restore();
    push(80, 1500, 1); ell(0, 0, 110, 26, { wash: '#e8d8b0', washA: 1, w: 2 }); for (let i = 0; i < 6; i++) potato(-60 + (i % 3) * 60, -14 - Math.floor(i / 3) * 22, 0.4, i, { key: 17911 + i }); pop();
    push(320, 1500, 1); ell(0, 0, 70, 20, { wash: '#f8f8f4', washA: 1, w: 2 }); ell(0, -10, 50, 14, { wash: SR.cream, washA: 1, w: 1.4 }); pop(); push(470, 1500, 1); for (let i = 0; i < 5; i++) ell(-30 + i * 16, -8, 12, 6, { wash: SR.onion, washA: 1, w: 1 }); pop(); klamma(600, 1520, 0.6, -0.1, { key: 17920 });
    push(880, 1520, 1); const bk = shape([[-90, 0], [-100, -150], [100, -150], [90, 0]], { wash: '#b8bcc4', washA: 1, w: 2.4, col: '#3a3e44' }); metalG(bk.path, -30, -80, 120, '#ffffff', '#b8bcc4', '#6a6e74'); ell(0, -150, 100, 20, { wash: '#7ab0d8', washA: 1, w: 2 }); tinCan(0, -150, 0.5, 0.2, { open: t > EV.td_party, key: 17921 }); if (t > EV.td_party) for (let i = 0; i < 5; i++) { const q = (t * 1.5 + i / 5) % 1; ell(-40 + i * 20, -160 - q * 40, 6, 6, { wash: '#d8f0ff', washA: 0.8 * (1 - q), w: 1 }); } pop();
    if (t > EV.td_thu - 0.1) { push(1080, 1140, popK(t, EV.td_thu - 0.1, 0.4)); rect(-110, -110, 220, 220, { wash: '#f8f4ea', washA: 1, w: 3, col: '#3a3a3a' }); rect(-110, -110, 220, 50, { wash: '#e83a3a', washA: 1, w: 2 }); txt('АВГУСТ', 0, -76, 26, { font: 'Osw', col: '#ffffff' }); txt('3-й', 0, -4, 40, { font: 'Osw', col: '#2a2a2a' }); txt('ЧЕТВЕРГ', 0, 46, 32, { font: 'Osw', col: '#2a2a2a' }); const q = clamp((t - EV.td_thu) / 0.5); pencil(Array.from({ length: 20 }, (_, i) => [Math.cos(i / 19 * 6.283 * q) * 90, 20 + Math.sin(i / 19 * 6.283 * q) * 60]), { w: 5, col: '#e83a3a', pass2: false }); pop(); }
    if (t > EV.td_party && t < EV.td_party + 1.0) { const k = (t - EV.td_party); const r = rng(17930); for (let i = 0; i < 40; i++) { push(560 + (r() - 0.5) * 900 * k, 900 - 400 * k + 600 * k * k + r() * 200, 1, t * 5 + i); rect(-8, -4, 16, 8, { wash: ['#ffd040', '#e83a3a', '#2a5ab0', '#ffffff'][i % 4], washA: 1, line: false }); pop(); } }
    for (const [i, x, lbl, c] of [[0, 300, 'ОТКРЫТЬ', '#2a8a3a'], [1, 820, 'НИ ЗА ЧТО', '#c8221a']]) { const t0 = i ? EV.td_no - 0.2 : EV.td_open - 0.1; if (t < t0) continue; push(x, 1650, popK(t, t0, 0.35)); glow(0, 0, 160, 'rgba(255,230,150,1)', 0.35); rect(-140, -36, 280, 72, { wash: c, washA: 1, w: 3, col: '#1a0a04' }); txt(lbl, 0, 14, 36, { font: 'Osw', col: '#fff4d0' }); pop(); }
  }
  function front(t) { push(-40, 1960, 1.6); for (let i = 0; i < 9; i++) pencil([[-40 + i * 10, 0], [-50 + i * 12 + Math.sin(t + i) * 6, -160 - (i % 3) * 30]], { w: 4, col: '#5a8a2a' }); pop(); push(1180, 1990, 1.6); milkJug(0, 0, 0.8); pop(); motes(24, [0, 300, 1100, 1700], '#fff4d0', t, 17940, { sp: 6, sz: 4, a: 0.45, wob: 2 }); rays(820, 640, 2.0, 0.5, 1700, 'rgba(255,220,160,1)', 0.12, 5, t); }
  WORLD.today = (t, u, cat) => {
    lay(14, () => { lake(t); haze('#f8c8a0', 0.06); });
    lay(2.6, () => { guests(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { table(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.today = {
    outfit: 'beachA', light: { side: 1, rim: '#ffd8a0' }, grade: ['#ffc8a0', 0.06],
    act: () => [[S0.today, 'grin'], [EV.td_thu, 'smug'], [EV.td_party, 'laugh'], [EV.td_open, 'sideeye'], [EV.td_no, 'suspicious']],
    pose: (t, u, b) => { const q = t > EV.td_no - 0.2; return Object.assign(b, { x: 560, y: 1580, s: 1.16, flip: q ? 1 : -1, look: q ? [0.8, 0.5] : t > EV.td_open ? [-0.8, 0.5] : t > EV.td_thu ? [0.7, -0.4] : [0, 0], hand: [180, -300], handF: [-60, -220], prop: 'klammaP', propAng: 0.2, point: t > EV.td_open ? 1 : undefined, tailUp: t > EV.td_party && t < EV.td_open }); },
    cam: () => [[S0.today, 560, 900, 0.12], [EV.td_thu, 820, 1150, 0.22, 'x'], [EV.td_party, 560, 1050, 0.22], [EV.td_open, 560, 1250, 0.22], [S1.today, 560, 1250, 0.24]]
  };
  // ---------------------------------------------------------------- переход: хлопушка — кадр разлетается конфетти и собирается новым
  TRANS_IN.today = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k); drawBuf(B, 1, 540, 960); const cols = 8, rows = 14, cw = W / cols, ch = H / rows;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) { const r = rng(17950 + i * 31 + j), d = clamp(e * 1.4 - r() * 0.4); if (d >= 1) continue; const cx = i * cw + cw / 2, cy = j * ch + ch / 2, dx = (cx - 540) * d * 1.5, dy = (cy - 960) * d * 1.5 + d * d * 600;
      ctx.save(); ctx.translate(cx + dx, cy + dy); ctx.rotate(d * (r() - 0.5) * 8); ctx.scale(1 - d, 1 - d); ctx.beginPath(); ctx.rect(-cw / 2, -ch / 2, cw, ch); ctx.clip(); ctx.translate(-cx, -cy); ctx.drawImage(A, 0, 0); ctx.restore(); }
  } };
})();
