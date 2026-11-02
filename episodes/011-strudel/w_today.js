/* 011 — `today`: «Сегодня в Хорватии штрудели выложили на три километра! Ванильный соус или мороженое?» Летний деревенский праздник штруделя: зелёные холмы
   с виноградниками, белая церковь с колокольней, бесконечный ряд столов со штруделями уходит к горизонту, флажки-гирлянды, толпа по обе стороны, шарики.
   Судья с планшетом и человек с мерным колесом. Том в льняной рубахе и соломенной шляпе с рулеткой.
   По словам: «Хорватии» — толпа машет; «три километра» — табло «3 136 м» + конфетти; «Ванильный соус» — слева выезжает тарелка с соусом; «мороженое» —
   справа тарелка с шариком; Том переводит взгляд — выбирай. Переход В сцену: лента штруделей проезжает через кадр и смывает прошлую сцену. */
(() => {
  EV.td_hr = wtw('t1', 'Хорватии');
  EV.td_km = wtw('t1', 'километра!');
  EV.td_sauce = wtw('t1', 'Ванильный');
  EV.td_ice = wtw('t1', 'мороженое?');
  SHAKES.push([EV.td_km + 0.05, 0.2, 9]);
  KEYW.push('километра!', 'мороженое?');
  const VP = [560, 860];

  function land(t) {                                                    // небо, облака, холмы с виноградниками, церковь, домики с черепицей
    vgrad(-600, 1000, ['#4a9ad8', '#8ac4ec', '#e0f0f6']); for (let i = 0; i < 6; i++) { const x = ((i * 300 + t * 14) % 1800) - 300, y = 80 + (i % 3) * 110; for (let k = 0; k < 4; k++) ell(x + k * 46, y - (k % 2) * 20, 56, 30, { wash: '#ffffff', washA: 0.9, line: false }); }
    shape(spline([[-400, 820], [0, 640], [400, 700], [800, 600], [1500, 760], [1500, 1000], [-400, 1000]], true, 8), { wash: '#7aa85a', washA: 1, w: 2, col: '#3a5a2a' });
    for (let r = 0; r < 6; r++) pencil(spline([[-300, 720 + r * 30], [400, 740 + r * 26], [1400, 690 + r * 30]], false, 6), { w: 4, col: '#4a7a3a', a: 0.5, pass2: false });
    push(860, 760, 1); rect(-70, -120, 140, 120, { wash: '#f4f0e6', washA: 1, w: 2, col: '#5a5a4a' }); poly([[-80, -120], [0, -170], [80, -120]], { wash: '#c8643a', washA: 1, w: 2 }); rect(60, -260, 60, 260, { wash: '#f4f0e6', washA: 1, w: 2, col: '#5a5a4a' }); poly([[54, -260], [90, -340], [126, -260]], { wash: '#6a8a9a', washA: 1, w: 2 }); ell(90, -200, 14, 18, { wash: '#3a3a3a', washA: 1, w: 1 }); pencil([[90, -340], [90, -370]], { w: 3, col: '#c8a050', pass2: false }); pencil([[80, -360], [100, -360]], { w: 3, col: '#c8a050', pass2: false }); pop();
    for (const [x, y] of [[120, 760], [300, 780], [1100, 770], [1260, 800]]) { rect(x - 50, y - 70, 100, 70, { wash: '#f0e6d0', washA: 1, w: 1.6, col: '#5a4a3a' }); poly([[x - 60, y - 70], [x, y - 110], [x + 60, y - 70]], { wash: '#c8543a', washA: 1, w: 1.6 }); rect(x - 14, y - 50, 24, 24, { wash: '#6a8aa8', washA: 1, w: 1 }); }
    for (let i = 0; i < 9; i++) { const x = -300 + i * 200; ell(x, 820, 50, 40, { wash: '#3a6a2a', washA: 1, w: 1.6, col: '#1a3a0a' }); }
  }
  function line(t) {                                                    // бесконечный ряд столов со штруделями к горизонту, люди по бокам, гирлянды
    const tb = poly([[VP[0] - 8, VP[1]], [VP[0] + 8, VP[1]], [1020, 1500], [100, 1500]], { wash: '#fbfaf4', washA: 1, w: 2, col: '#6a6a5a', key: 12000 }); shadeG(tb.path, 0, VP[1], 0, 1500, '#d8d4c8', 0.3);
    for (let i = 0; i < 40; i++) { const q = Math.pow(i / 40, 2.2), y = lerp(VP[1] + 4, 1470, q), hw = lerp(8, 460, q), sc = lerp(0.03, 0.7, q);
      if (sc > 0.08) strudel(VP[0] - hw * 0.35, y - 4, sc, t, { key: 12010 + i, len: 200, cut: sc > 0.25 ? 1 : 0, steam: 0 }); else ell(VP[0], y, hw * 0.6, 2 + sc * 30, { wash: SD.crust, washA: 1, line: false });
      if (i % 3 === 0 && sc > 0.1) for (const sd of [-1, 1]) human(VP[0] + sd * (hw + 40 * sc * 2), y + 30 * sc, sc * 1.25, t, { body: ['#d9282a', '#2a5ab8', '#f4f0e6', '#3a8a3a', '#e8b030'][(i + sd + 5) % 5], legs: '#2a2a3a', hair: ['#3a2a1a', '#d8b060', '#1a1a1a'][i % 3], face: t > EV.td_km ? 'grin' : 'smile', armL: t > EV.td_hr && (i % 2) ? 'wave' : 'hold', armR: t > EV.td_km ? 'up' : 'down', look: -sd * 0.6, seed: 1200 + i * 2 + sd, flip: -sd }); }
    for (let g = 0; g < 4; g++) { const q = Math.pow(g / 4 + 0.25, 1.6), y = lerp(VP[1] - 120, 600, q), hw = lerp(80, 900, q); const P = spline([[VP[0] - hw, y], [VP[0], y + 60 * q + 20], [VP[0] + hw, y]], false, 12); pencil(P, { w: 2, col: '#4a4a4a', pass2: false });
      for (let i = 1; i < P.length - 1; i += 1) { const [x, yy] = P[i], c = ['#d9282a', '#f4f6f8', '#2a5ab8'][i % 3], fs = 10 + q * 26; poly([[x - fs * 0.5, yy], [x + fs * 0.5, yy], [x, yy + fs * 1.4]], { wash: c, washA: 1, w: 1, col: '#3a3a3a' }); } }
  }
  function officials(t) {                                               // судья рекорда с планшетом и человек с мерным колесом
    human(150, 1460, 1.15, t, { body: '#1a2a4a', legs: '#1a1a2a', hair: '#3a2a1a', face: t > EV.td_km ? 'grin' : 'calm', armL: 'hold', armR: t > EV.td_km ? 'up' : 'hold', look: 0.5, seed: 1290 }); push(150 + 30, 1460 - 300, 1); rect(-34, -46, 68, 92, { wash: '#f4f0e6', washA: 1, w: 2, col: '#3a3a3a' }); rect(-34, -46, 68, 14, { wash: '#2a2a2a', washA: 1, line: false }); for (let i = 0; i < 4; i++) pencil([[-24, -20 + i * 14], [24, -20 + i * 14]], { w: 1.4, col: '#5a5a5a', pass2: false }); pop();
    const wx = 980 - Math.sin(t) * 10; human(wx, 1450, 1.12, t, { body: '#e8b030', legs: '#2a3a5a', hair: '#d8b060', face: 'smile', armL: 'hold', armR: 'hold', look: -0.6, seed: 1291, flip: -1 }); hat20(wx, 1450, 1.12, 'boater');
    pencil([[wx - 30, 1450 - 220], [wx - 140, 1440]], { w: 5, col: '#3a3a3a' }); push(wx - 150, 1420, 1, t * 3); ell(0, 0, 40, 40, { wash: '#e8e8e8', washA: 1, w: 3, col: '#3a3a3a' }); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; pencil([[0, 0], [Math.cos(a) * 36, Math.sin(a) * 36]], { w: 2, col: '#5a5a5a', pass2: false }); } pop();
  }
  function choice(t) {                                                  // табло 3 136 м + две тарелки на выбор
    if (t > EV.td_km - 0.1) { const k = popK(t, EV.td_km - 0.1, 0.4); push(560, 1050, k); rect(-230, -80, 460, 160, { wash: '#1a1a20', washA: 1, w: 4, col: '#d6a842' }); txt('3 136 м', 0, 22, 92, { font: 'Osw', col: '#ffe070' }); glow(0, 0, 260, 'rgba(255,220,100,1)', 0.25); txt('РЕКОРД · 2025', 0, -56, 26, { font: 'Osw', col: '#f4e6c8' }); pop();
      const r = rng(12030); for (let i = 0; i < 50; i++) { const q = t - EV.td_km - r() * 0.3; if (q < 0) continue; const x = 560 + (r() - 0.5) * 1100 + Math.sin(q * 4 + i) * 30, y = 700 + q * 500 + r() * 200; push(x, y, 1, q * 6 + i); rect(-8, -4, 16, 8, { wash: ['#d9282a', '#f4f6f8', '#2a5ab8', '#ffd04a'][i % 4], washA: 1, line: false }); pop(); } }
    if (t > EV.td_sauce - 0.1) { const k = sm(clamp((t - EV.td_sauce + 0.1) / 0.4)); strudelPlate(lerp(-300, 290, k), 1400, 0.95, t, { sauce: 1, steam: 1, key: 12040 }); bubbleTag('СОУС', 290, 1230, t, EV.td_sauce + 0.2, '#e8a830', 54, -0.06); }
    if (t > EV.td_ice - 0.15) { const k = sm(clamp((t - EV.td_ice + 0.15) / 0.4)); strudelPlate(lerp(1400, 800, k), 1400, 0.95, t, { ice: 1, key: 12041 }); bubbleTag('МОРОЖЕНОЕ', 760, 1230, t, EV.td_ice + 0.15, '#3a8ad8', 50, 0.05); }
  }
  function front(t) {                                                   // передний план: гирлянда флажков по верху, край стола со штруделями внизу, шарики
    const P = spline([[-200, 120], [540, 320], [1300, 120]], false, 16); pencil(P, { w: 4, col: '#3a3a3a', pass2: false }); for (let i = 1; i < P.length - 1; i++) { const [x, y] = P[i]; poly([[x - 30, y], [x + 30, y], [x + Math.sin(t * 3 + i) * 4, y + 80]], { wash: ['#d9282a', '#f4f6f8', '#2a5ab8'][i % 3], washA: 1, w: 1.6, col: '#3a3a3a' }); }
    for (const [x, c] of [[-40, '#d9282a'], [1140, '#2a5ab8'], [1080, '#ffd04a']]) { const y = 520 + Math.sin(t * 1.5 + x) * 20; ell(x, y, 60, 74, { wash: c, washA: 1, w: 2, col: '#2a2a2a' }); glow(x - 20, y - 26, 20, 'rgba(255,255,255,1)', 0.6); pencil(spline([[x, y + 74], [x + 20, y + 300], [x - 10, y + 700]], false, 6), { w: 2, col: '#5a5a5a', pass2: false }); }
    motes(24, [0, 400, 1080, 1700], '#fff8d0', t, 12050, { sp: 6, sz: 4, a: 0.4, wob: 2 });
  }
  WORLD.today = (t, u, cat) => {
    lay(16, () => { land(t); haze('#e0f0f8', 0.1); });
    lay(2.2, () => { line(t); });
    lay(1.6, () => { officials(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { choice(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.today = {
    outfit: 'dacha', light: { side: 1, rim: '#fff4d0' }, grade: ['#ffe8b0', 0.04],
    act: () => [[S0.today, 'grin'], [EV.td_km, 'shock'], [EV.td_km + 0.5, 'laugh'], [EV.td_sauce, 'sideeye'], [EV.td_ice, 'suspicious']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1700, s: 1.1, flip: t > EV.td_ice ? 1 : -1, look: t > EV.td_ice ? [0.8, 0.2] : t > EV.td_sauce ? [-0.8, 0.2] : [0, -0.3], tailUp: t > EV.td_km,
      hand: t < EV.td_sauce ? [200, -260] : [160, -300], handF: t < EV.td_sauce ? [-200, -260] : [-60, -360], point: t > EV.td_sauce ? 1 : undefined }),
    afterCat: (t, u, P) => { if (t > EV.td_sauce) return; const fl = -1, hx = P.x - fl * 200 * P.s, hx2 = P.x + fl * 200 * P.s, hy = P.y - 260 * P.s; pencil([[hx, hy], [hx2, hy]], { w: 8, col: '#e8c040', pass2: false }); for (let i = 0; i < 12; i++) pencil([[lerp(hx, hx2, i / 12), hy - 6], [lerp(hx, hx2, i / 12), hy + 6]], { w: 1.4, col: '#2a2a2a', pass2: false }); },
    cam: () => [[S0.today, 560, 900, 0.06], [EV.td_hr, 560, 1000, 0.1, 'x'], [EV.td_km, 560, 1120, 0.16], [EV.td_sauce, 560, 1250, 0.22], [S1.today, 560, 1260, 0.26]]
  };
  // ---------------------------------------------------------------- переход: лента штруделей проезжает и смывает прошлый кадр
  TRANS_IN.today = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), x = lerp(-1300, 1200, e); drawBuf(B, 1, 540, 960); ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.rect(x + 1100, 0, W, H); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
    scr(() => { rect(x - 200, -40, 1340, H + 80, { wash: '#fbfaf4', washA: 0.0, line: false }); for (let i = 0; i < 9; i++) { push(x + 900 + (i % 2) * 120, 100 + i * 220, 1, 1.57); strudel(0, 0, 0.8, t, { key: 12060 + i, len: 180, steam: 0 }); pop(); } });
  } };
})();
