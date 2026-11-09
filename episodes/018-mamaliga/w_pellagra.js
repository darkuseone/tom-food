/* 018 — `pellagra`: «Но кукуруза мстила: без индейской извести — пеллагра. Десятки тысяч больных крестьян в год!» Сельская больница-изба рубежа XIX–XX вв.
   в холодном зелёном свете: бревенчатые стены, керосиновая лампа, железные койки с серыми одеялами, умывальник, шкаф со склянками, плакат с таблицей,
   в окне серый дождливый двор и плетень; на скамье усталые крестьяне с красными шершавыми пятнами на руках, фельдшерица в косынке с журналом; в углу мешки
   кукурузы. Том-доктор в халате с трубкой. По словам: «мстила» — початок на столе щурит злые красные глаза, гром; «индейской извести» — открывается
   тёплое окно-воспоминание: женщина ацтеков варит кукурузу с известью CAL, растирает на метате; затем окно гаснет, на нём крест; «пеллагра» — штамп на
   доске ПЕЛЛАГРА; «Десятки тысяч» — на доске быстро заполняются ряды человечков; «в год!» — счётчик «× ДЕСЯТКИ ТЫСЯЧ / ГОД». Переход В сцену:
   лампа гаснет — кадр темнеет от краёв и снова светлеет. */
(() => {
  EV.pg_rev = wtw('s6', 'мстила:');
  EV.pg_lime = wtw('s6', 'индейской');
  EV.pg_name = wtw('s6', 'пеллагра.');
  EV.pg_tens = wtw('s6', 'Десятки');
  EV.pg_year = wtw('s6', 'год!');
  SHAKES.push([EV.pg_rev + 0.05, 0.2, 8], [EV.pg_name, 0.15, 6]);
  KEYW.push('мстила:', 'пеллагра.');
  function room(t) {                                                      // брёвна, окно в дождливый двор, лампа, шкаф со склянками, плакат, койки
    vgrad(-600, 1500, ['#2a3a34', '#3a4a40', '#4a5a4a']); for (let i = 0; i < 18; i++) { const y = -600 + i * 120, l = rect(-400, y, 2000, 116, { wash: i % 2 ? '#5a4a34' : '#4e402c', washA: 1, w: 2, col: '#1a140a', key: 18900 + i }); shadeG(l.path, 0, y + 116, 0, y, '#1a140a', 0.35); for (let k = 0; k < 4; k++) ell(-300 + k * 520 + (i % 3) * 60, y + 58, 14, 10, { line: true, w: 1.4, col: '#2a2010', a: 0.6 }); }
    push(160, 200, 1); const wn = rect(-170, -200, 340, 360, { wash: '#7a8a8a', washA: 1, w: 10, col: '#3a2a1a', key: 18920 }); ctx.save(); ctx.clip(wn.path); vgrad(0, 160, ['#8a9a9a', '#a8b0a8']); for (let i = 0; i < 12; i++) pencil([[-170 + i * 30, 60], [-170 + i * 30, 160]], { w: 4, col: '#5a4a34', pass2: false }); pencil(spline([[-170, 90], [0, 80], [170, 96]], false, 5), { w: 3, col: '#5a4a34', pass2: false });
    for (let i = 0; i < 30; i++) { const r = rng(18921 + i), q = (t * 2 + r()) % 1; pencil([[-170 + r() * 340, -200 + q * 360], [-174 + r() * 340, -180 + q * 360]], { w: 1.2, col: '#d8e0e0', a: 0.6, pass2: false }); } ctx.restore(); pencil([[0, -200], [0, 160]], { w: 6, col: '#3a2a1a' }); pencil([[-170, -20], [170, -20]], { w: 6, col: '#3a2a1a' }); pop();
    push(1100, 300, 1); const cb = rect(-150, -320, 300, 560, { wash: '#6a7a6a', washA: 1, w: 3, col: '#1a2a1a', key: 18930 }); for (let j = 0; j < 4; j++) { pencil([[-140, -200 + j * 120], [140, -200 + j * 120]], { w: 4, col: '#2a3a2a' }); for (let i = 0; i < 5; i++) { const c = ['#8a3a2a', '#3a6a8a', '#c8a040', '#5a8a5a', '#f4f0e4'][(i + j) % 5]; push(-110 + i * 54, -200 + j * 120, 1); rect(-14, -60, 28, 60, { wash: c, washA: 0.8, w: 1.4, col: '#1a1a1a' }); rect(-8, -72, 16, 12, { wash: '#3a3a3a', washA: 1, w: 1 }); rect(-12, -40, 24, 16, { wash: '#f4ecd8', washA: 1, w: 0.8 }); pop(); } } pop();
    for (const x of [420, 760]) { push(x, 1100, 1); rect(-150, -110, 300, 30, { wash: '#8a8a8a', washA: 1, w: 2, col: '#2a2a2a' }); for (const sd of [-1, 1]) { pencil([[sd * 150, -200], [sd * 150, 100]], { w: 6, col: '#5a5a5a' }); ell(sd * 150, -200, 10, 10, { wash: '#8a8a8a', washA: 1, w: 1.4 }); } const bl = rect(-150, -150, 300, 50, { wash: '#7a7a6a', washA: 1, w: 2, col: '#2a2a2a' }); hatch(bl.path, bl.bb, { gap: 8, a: 0.3, col: '#3a3a3a', ang: 0.8 }); ell(-100, -160, 50, 20, { wash: '#f4f0e4', washA: 1, w: 1.4 }); pop(); }
    push(540, -320, 1); pencil([[0, -300], [0, 0]], { w: 2, col: '#1a1a1a', pass2: false }); const on = t > S0.pellagra + 0.3 ? 1 : 0.3; blob([[-40, 0], [40, 0], [30, 60], [-30, 60]], { wash: '#2a4a3a', washA: 1, w: 1.6 }); ell(0, 80, 26, 34, { wash: '#f4f0d0', washA: 0.6, w: 1.4, col: '#5a5a4a' }); ell(0, 86, 6, 12, { wash: '#ffe080', washA: on, line: false }); glow(0, 90, 500, 'rgba(255,220,140,1)', 0.35 * on + Math.sin(t * 9) * 0.02); pop();
  }
  function board(t) {                                                     // доска-плакат: ПЕЛЛАГРА, человечки-ряды, счётчик
    push(780, 640, 1); const b = rect(-240, -260, 480, 420, { wash: '#2a3a2a', washA: 1, w: 4, col: '#5a3a1a', key: 18940 }); rect(-256, -276, 512, 452, { line: true, w: 10, col: '#6a4424' });
    if (t > EV.pg_name) { const q = popK(t, EV.pg_name, 0.35); push(0, -200, q, -0.04); rect(-200, -40, 400, 80, { wash: '#a82a1a', washA: 0.9, w: 3, col: '#5a0a04' }); txt('ПЕЛЛАГРА', 0, 20, 56, { font: 'Osw', col: '#f4ecd8' }); pop(); }
    if (t > EV.pg_tens) { const n = Math.floor(clamp((t - EV.pg_tens) / 1.4) * 48); for (let i = 0; i < n; i++) { const x = -200 + (i % 12) * 36, y = -100 + Math.floor(i / 12) * 60; ell(x, y - 18, 8, 8, { wash: '#f4ecd8', washA: 1, w: 1, col: '#c8c0a8' }); poly([[x - 10, y + 16], [x - 7, y - 8], [x + 7, y - 8], [x + 10, y + 16]], { wash: '#f4ecd8', washA: 1, w: 1, col: '#c8c0a8' }); ell(x + 6, y + 4, 3, 3, { wash: '#e86a4a', washA: 1, line: false }); } }
    if (t > EV.pg_year) { push(0, 130, popK(t, EV.pg_year, 0.35)); txt('ДЕСЯТКИ ТЫСЯЧ / ГОД', 0, 0, 34, { font: 'Osw', col: '#ffd860' }); pop(); } pop();
  }
  function people(t) {                                                    // скамья с больными крестьянами (красные пятна на руках), фельдшерица, мешки кукурузы
    push(160, 1310, 1); rect(-300, -130, 600, 30, { wash: '#6a4a2a', washA: 1, w: 2, col: '#2a1408' }); for (const x of [-260, 260]) pencil([[x, -100], [x, 0]], { w: 8, col: '#4a3018' }); pop();
    for (const [x, sd, f] of [[-60, 18950, 1], [130, 18951, 1], [320, 18952, -1]]) { human(x, 1300, 1.0, t, { body: ['#8a8a7a', '#6a5a4a', '#7a7a8a'][sd % 3], legs: '#3a3a2a', hair: ['#5a4a3a', '#8a8a8a', '#3a2a1a'][sd % 3], face: t > EV.pg_rev ? 'calm' : 'calm', armL: 'hold', armR: 'hold', look: 0.3 * f, seed: sd, flip: f, beard: sd === 18951 ? 'short' : null, long: sd === 18952 ? 1 : 0 });
      if (sd === 18952) kerchief20(x, 1300, 1.0, '#5a5a6a', f); for (const hx of [-30, 30]) { const r = rng(sd + hx); for (let k = 0; k < 4; k++) ell(x + hx + (r() - 0.5) * 14, 1300 - 210 + (r() - 0.5) * 12, 5, 4, { wash: '#c8442a', washA: 0.85, line: false }); }
      push(x, 1300 - 246, 1); for (let k = 0; k < 5; k++) ell(-20 + k * 10, 0, 4, 3, { wash: '#c8442a', washA: 0.7, line: false }); pop(); }
    human(1040, 1300, 1.08, t, { body: '#f4f0e4', legs: '#3a3a3a', hair: '#3a2a1a', face: t > EV.pg_tens ? 'shock' : 'calm', armL: 'hold', armR: 'hold', look: -0.5, seed: 18955, flip: -1, long: 1 }); kerchief20(1040, 1300, 1.08, '#f4f0e4', -1); push(1010, 1080, 1, 0.1); rect(-40, -50, 80, 100, { wash: '#4a3a2a', washA: 1, w: 1.6 }); rect(-34, -44, 68, 88, { wash: '#efe6cc', washA: 1, w: 1 }); pop();
    for (let i = 0; i < 3; i++) grainSack(-260 + i * 110, 1330, 0.75, { key: 18956 + i, grain: 'c', label: i === 1 ? 'PORUMB' : null, lcol: '#3a5a1a', col: '#c8b080' });
  }
  function memory(t) {                                                    // тёплое окно-воспоминание: женщина ацтеков, известь CAL, метате; затем гаснет и перечёркивается
    if (t < EV.pg_lime - 0.2 || t > EV.pg_name + 0.6) return; const op = sm(clamp((t - EV.pg_lime + 0.2) / 0.4)), off = sm(clamp((t - EV.pg_name) / 0.5));
    push(350, 870, op * (1 - off * 0.3)); const fr = ell(0, 0, 230, 200, { wash: '#f4c890', washA: 1, w: 6, col: '#a85a2a', key: 18960 }); ctx.save(); ctx.clip(fr.path);
    vgrad(-200, 200, ['#f8a860', '#f8d8a0']); for (let i = 0; i < 3; i++) poly([[-260 + i * 160, 60], [-180 + i * 160, -120 + i * 20], [-100 + i * 160, 60]], { wash: '#c8783a', washA: 1, w: 1.4, col: '#6a3a1a' });
    human(-60, 200, 0.75, t, { body: '#f4f0e4', legs: '#c8442a', hair: '#1a1a1a', face: 'smile', armL: 'hold', armR: 'hold', look: 0.5, seed: 18961, long: 1, skin: '#c8885a' }); push(60, 160, 1); poly([[-70, 0], [70, -20], [80, 20], [-60, 30]], { wash: '#6a6a6a', washA: 1, w: 2, col: '#2a2a2a' }); ell(10 + Math.sin(t * 6) * 20, -14, 40, 14, { wash: '#8a8a8a', washA: 1, w: 1.6 }); for (let k = 0; k < 6; k++) ell(-40 + k * 14, -6, 5, 4, { wash: '#f4e0a0', washA: 1, line: false }); pop();
    push(150, 60, 1); const pt = blob([[-50, 40], [-60, -20], [-40, -50], [40, -50], [60, -20], [50, 40]], { wash: '#b8642a', washA: 1, w: 2, col: '#3a1a08' }); ell(0, -50, 40, 10, { wash: '#f4f4ec', washA: 1, w: 1.2 }); txt('CAL', 0, 0, 28, { font: 'Osw', col: '#f4ecd8' }); for (let i = 0; i < 3; i++) { const q = (t * 0.6 + i / 3) % 1; ell(-20 + i * 20, -60 - q * 60, 10 + q * 10, 8, { wash: '#ffffff', washA: 0.5 * (1 - q), line: false }); } pop();
    ctx.restore(); txt('ИЗВЕСТЬ', 0, 250, 40, { font: 'Osw', col: '#f4c890' });
    if (off > 0) { screenFill('#000', 0); pencil([[-180 * off, -160 * off], [180 * off, 160 * off]], { w: 16, col: '#c8221a', pass2: false }); pencil([[180 * off, -160 * off], [-180 * off, 160 * off]], { w: 16, col: '#c8221a', pass2: false }); } pop();
  }
  function table(t) {                                                     // стол доктора: злой початок, миска мамалыги, склянки, стетоскоп-трубка, журнал, весы, лупа
    const tb = rect(-400, 1440, 1900, 700, { wash: '#6a5a40', washA: 1, w: 3, col: '#1a140a', key: 18970 }); hatch(tb.path, tb.bb, { gap: 10, a: 0.14, col: '#1a140a', ang: 0.03, key: 18971 }); shadeG(tb.path, 540, 2000, 540, 1440, '#1a140a', 0.4);
    const ev = t > EV.pg_rev; push(380, 1460, 1, ev ? -0.15 + Math.sin(t * 20) * (t < EV.pg_rev + 0.4 ? 0.06 : 0) : -0.4); cornCob(0, -60, 0.8, 0, { key: 18972, husk: 0.4 });
    if (ev) { for (const sd of [-1, 1]) { poly([[sd * 26, -110], [sd * 6, -96], [sd * 26, -88]], { wash: '#1a0a04', washA: 1, w: 1 }); ell(sd * 14, -96, 7, 5, { wash: '#ff2a1a', washA: 1, line: false }); glow(sd * 14, -96, 30, 'rgba(255,60,30,1)', 0.7); } pencil(spline([[-16, -60], [0, -68], [16, -60]], false, 4), { w: 3, col: '#1a0a04', pass2: false }); } pop();
    push(120, 1540, 1); ell(0, 0, 110, 28, { wash: '#d8d8d0', washA: 1, w: 2, col: '#4a4a4a' }); mamaliga(0, -4, 70, 60, t, { key: 18973 }); pop();
    for (let i = 0; i < 4; i++) { push(820 + i * 60, 1500, 1); rect(-16, -70, 32, 70, { wash: ['#8a3a2a', '#3a6a8a', '#c8a040', '#5a8a5a'][i], washA: 0.8, w: 1.4, col: '#1a1a1a' }); rect(-10, -82, 20, 12, { wash: '#3a3a3a', washA: 1, w: 1 }); pop(); }
    push(620, 1560, 1, -0.1); rect(-100, -40, 200, 80, { wash: '#2a3a2a', washA: 1, w: 2, col: '#0a1a0a' }); rect(-90, -32, 180, 64, { wash: '#efe6cc', washA: 1, w: 1 }); for (let i = 0; i < 4; i++) pencil([[-80, -20 + i * 14], [80 - i * 20, -20 + i * 14]], { w: 1.4, col: '#3a3a5a', pass2: false }); pop();
    push(1080, 1560, 1); ell(0, 0, 40, 40, { line: true, w: 6, col: '#2a2a2a' }); pencil([[30, 30], [90, 80]], { w: 10, col: '#6a4424' }); pop();
  }
  function front(t) { push(-40, 1960, 1.6); const ls = blob([[-60, 0], [-50, -140], [-20, -220], [20, -220], [50, -140], [60, 0]], { wash: '#c8c8c0', washA: 0.6, w: 2, col: '#5a5a5a' }); rect(-20, -260, 40, 50, { wash: '#3a3a3a', washA: 1, w: 1.4 }); pop();
    push(1180, 1980, 1.6); for (let i = 0; i < 3; i++) cornCob(-60 + i * 50, -80, 0.6, -0.3 + i * 0.3, { key: 18980 + i, husk: 0.8, silk: false }); pop(); motes(20, [-100, 200, 1200, 1500], '#d8e8d0', t, 18985, { sp: 5, sz: 3, a: 0.3, wob: 2 }); haze('#2a3a30', 0.08); }
  WORLD.pellagra = (t, u, cat) => {
    lay(14, () => { room(t); haze('#3a4a40', 0.06); }); lay(5, () => { board(t); }); lay(3.2, () => { people(t); });
    lay(1, () => { cat(); }); lay(0.94, () => { table(t); }); lay(0.9, () => { memory(t); }); lay(0.6, () => { front(t); });
    if (t > EV.pg_rev && t < EV.pg_rev + 0.25) screenFill('rgba(200,230,255,1)', 0.3 * (1 - (t - EV.pg_rev) / 0.25));
  };
  DIR.pellagra = {
    outfit: 'labA', light: { side: -1, rim: '#d8f0d0' }, grade: ['#6a9a80', 0.14],
    act: () => [[S0.pellagra, 'suspicious'], [EV.pg_rev, 'scared'], [EV.pg_lime, 'talk'], [EV.pg_name, 'annoyed'], [EV.pg_tens, 'shock'], [EV.pg_year, 'awe']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1600, s: 1.18, flip: 1, look: t > EV.pg_tens ? [0.5, -0.6] : t > EV.pg_lime ? [-0.7, -0.2] : t > EV.pg_rev ? [-0.6, 0.6] : [0, 0], hand: t > EV.pg_tens ? [-160, -340] : [180, -260], handF: [-80, -220], point: t > EV.pg_tens ? 1 : undefined, sweat: t > EV.pg_rev && t < EV.pg_lime }),
    cam: () => [[S0.pellagra, 620, 1000, 0.16], [S0.pellagra + 0.4, 560, 1200, 0.26, 'x'], [EV.pg_lime, 480, 1080, 0.24], [EV.pg_name, 680, 960, 0.24], [EV.pg_tens, 700, 980, 0.26], [S1.pellagra, 680, 1060, 0.28]]
  };
  // ---------------------------------------------------------------- переход: лампа гаснет — кадр темнеет от краёв и снова светлеет
  TRANS_IN.pellagra = { a: 0.12, b: 0.45, runA: 0.12, fx(k, t, A, B) {
    const close = clamp(k / 0.5), open = clamp((k - 0.5) / 0.5); if (k < 0.5) drawBuf(A, 1, 540, 960); else drawBuf(B, 1, 540, 960);
    const R = k < 0.5 ? lerp(1300, 0, sm(close)) : lerp(0, 1300, sm(open)); scr(() => { ctx.save(); ctx.fillStyle = '#05080a'; ctx.beginPath(); ctx.rect(0, 0, W, H); ctx.arc(540, 960, Math.max(1, R), 0, 6.283, true); ctx.fill(); ctx.restore(); if (R < 200) glow(540, 960, 120, 'rgba(255,200,120,1)', 0.6 * (1 - R / 200)); });
  } };
})();
