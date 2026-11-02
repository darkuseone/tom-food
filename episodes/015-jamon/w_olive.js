/* 015 — `olive` ★: «Разгадка: от желудей жир свиньи — больше половины олеиновая кислота, как в оливковом масле!» Андалузский закат: слева — деэса
   с каменным дубом и иберийской свиньёй, справа — оливковая роща ровными рядами, белая финка-усадьба, холмы. На переднем плане — деревянный стол «лаборатории»:
   колба, весы, жёлуди, тарелка хамона, бутылка оливкового масла, блокнот. Том в рабочей одежде ботаника с фартуком. По словам: «Разгадка» — золотая вспышка ★;
   «желудей» — жёлудь подпрыгивает, стрелка к свинье; «жир свиньи» — с ломтика скатывается золотая капля жира; «больше половины» — столбик в колбе заполняется
   выше отметки 50 %; «оливковом масле» — из бутылки капает капля, две капли сливаются в одну, свинья получает табличку OLIVA CON PATAS и оливковую ветку.
   Переход В сцену: капля масла падает и растекается золотым кругом. */
(() => {
  EV.ol_rev = wtw('s7', 'Разгадка:');
  EV.ol_acorn = wtw('s7', 'желудей');
  EV.ol_fat = wtw('s7', 'жир');
  EV.ol_half = wtw('s7', 'половины');
  EV.ol_oil = wtw('s7', 'оливковом');
  SHAKES.push([EV.ol_oil + 0.4, 0.15, 6]);
  KEYW.push('Разгадка:', 'масле!');

  function land(t) {                                                    // закатное небо, холмы, роща олив рядами, финка, дуб со свиньёй
    vgrad(-700, 1000, ['#4a3a7a', '#e87a5a', '#f8c070']); glow(560, 620, 700, 'rgba(255,190,110,1)', 0.6); ell(560, 640, 110, 110, { wash: '#ffe6a0', washA: 1, line: false });
    for (const [y, c] of [[700, '#b8885a'], [820, '#a07848'], [940, '#8a6a3a']]) shape(spline([[-400, y], [100, y - 70], [600, y - 20], [1100, y - 90], [1600, y - 30], [1600, 1400], [-400, 1400]], true, 8), { wash: c, washA: 1, w: 1.4, col: '#5a3a1a' });
    push(980, 760, 1); rect(-120, -90, 240, 90, { wash: '#f8f4ea', washA: 1, w: 1.6, col: '#8a8070' }); shape([[-130, -90], [0, -140], [130, -90]], { wash: '#c86a3a', washA: 1, w: 1.4 }); for (let i = 0; i < 3; i++) rect(-90 + i * 70, -60, 30, 40, { wash: '#3a5a8a', washA: 1, w: 1 }); pop();
    for (let r = 0; r < 3; r++) for (let i = 0; i < 6; i++) { const x = 640 + i * 150 - r * 60, y = 900 + r * 120, s = 0.6 + r * 0.25; push(x, y, s); pencil(spline([[0, 0], [-10, -60], [6, -110]], false, 5), { w: 14, col: '#5a4a3a' }); for (let k = 0; k < 5; k++) blob([[-80 + k * 30, -100], [-60 + k * 30, -170 - (k % 2) * 20], [-20 + k * 30, -150], [-40 + k * 30, -100]], { wash: k % 2 ? '#7a8a5a' : '#9aa878', washA: 1, w: 1.2, col: '#3a4a2a' }); pop(); }
    push(120, 960, 1); pencil(spline([[0, 0], [-20, -180], [10, -300]], false, 6), { w: 46, col: '#4a3a2a' }); for (let i = 0; i < 9; i++) blob([[-260 + i * 60, -280], [-230 + i * 60, -420 - (i % 3) * 30], [-170 + i * 60, -400], [-190 + i * 60, -280]], { wash: i % 2 ? '#3a5a2a' : '#4a6a30', washA: 1, w: 1.4, col: '#1a2a12' }); pop();
  }
  function pig(t) {                                                     // свинья под дубом: жуёт, потом табличка OLIVA CON PATAS и ветка оливы
    ibPig(160, 1180, 1.5, t, { eat: 0.4 + Math.sin(t * 3) * 0.2, chew: 1, key: 15800, flip: 1 }); if (t > EV.ol_acorn) { const q = clamp((t - EV.ol_acorn) / 0.5); acorn(lerp(560, 360, q), 1300 - Math.sin(q * Math.PI) * 200, 0.9, q * 8, { key: 15801 }); }
    if (t > EV.ol_oil + 0.3) { glow(160, 1000, 260, 'rgba(200,230,120,1)', 0.5); push(160, 820, popK(t, EV.ol_oil + 0.3, 0.4)); rect(-190, -46, 380, 92, { wash: '#3a5a1a', washA: 1, w: 4, col: '#c8d878' }); txt('OLIVA CON PATAS', 0, 16, 40, { font: 'Osw', col: '#f4f8d0' }); pop(); oliveBranch(250, 990, 0.8, -0.3); }
  }
  function lab(t) {                                                     // стол-лаборатория: колба-столбик, бутылка масла, тарелка хамона, жёлуди, капли
    const tb = rect(-400, 1440, 1900, 800, { wash: '#8a5a34', washA: 1, w: 3, col: '#2a1408', key: 15810 }); shadeG(tb.path, 0, 1900, 0, 1440, '#3a1a08', 0.45); for (let i = 0; i < 6; i++) pencil([[-400, 1480 + i * 70], [1500, 1484 + i * 70]], { w: 2, col: '#4a2410', a: 0.5, pass2: false });
    for (const [x, r] of [[460, 0.4], [520, -0.3], [580, 0.9]]) acorn(x, 1470, 0.8, r, { key: 15811 + x });
    push(300, 1500, 1); ell(0, 0, 120, 28, { wash: '#f8f6f0', washA: 1, w: 2, col: '#4a4a52' }); for (let i = 0; i < 3; i++) slice(-50 + i * 50, -14, 0.55, 0.3 * i - 0.3, { key: 15815 + i }); pop();
    if (t > EV.ol_fat) { const q = clamp((t - EV.ol_fat) / 0.6), mg = t > EV.ol_oil + 0.2 ? sm(clamp((t - EV.ol_oil - 0.2) / 0.4)) : 0; push(lerp(330, 560, Math.max(q, mg * 0)), lerp(1460, 1120, sm(q)) + mg * 0, 1); ell(lerp(0, 60, mg), 0, 22, 28, { wash: '#f4d040', washA: 0.95, w: 2, col: '#8a6a10' }); ell(lerp(0, 60, mg) - 6, -8, 6, 8, { wash: '#ffffff', washA: 0.8, line: false }); glow(lerp(0, 60, mg), 0, 70, 'rgba(255,220,90,1)', 0.5); pop(); txt('ЖИР', 560, 1060, 30, { font: 'Osw', col: '#fff4c0', a: clamp((t - EV.ol_fat - 0.3) / 0.3) * (1 - mg) }); }
    push(900, 1500, 1); oilBottle(0, 0, 0.95, { key: 15820 }); pop(); if (t > EV.ol_oil) { const q = clamp((t - EV.ol_oil) / 0.5), mg = sm(clamp((t - EV.ol_oil - 0.2) / 0.4)); push(lerp(880, 620, sm(q)), lerp(1230, 1120, sm(q)), 1); if (mg < 1) { ell(0, 0, 22, 28, { wash: '#c8c040', washA: 0.95, w: 2, col: '#6a6a10' }); } pop(); txt('МАСЛО', 820, 1060, 30, { font: 'Osw', col: '#f4f8c0', a: 1 - mg });
      if (mg >= 1) { push(620, 1120, 1 + Math.sin(t * 6) * 0.04); ell(0, 0, 40, 48, { wash: '#e4d040', washA: 1, w: 3, col: '#8a7a10' }); ell(-10, -14, 10, 12, { wash: '#ffffff', washA: 0.8, line: false }); glow(0, 0, 160, 'rgba(255,230,100,1)', 0.6); txt('=', -70, 16, 50, { font: 'Osw', col: '#ffffff' }); pop(); } }
    push(720, 1500, 1); rect(-34, -300, 68, 300, { wash: '#d8ecf4', washA: 0.35, w: 3, col: '#8aa0b0' }); const lv = t > EV.ol_half - 0.1 ? sm(clamp((t - EV.ol_half + 0.1) / 0.6)) * 0.58 : 0; rect(-30, -296 * lv, 60, 296 * lv, { wash: '#e8c840', washA: 0.9, line: false });
      pencil([[-46, -148], [46, -148]], { w: 3, col: '#c8221a', pass2: false }); txt('50%', -90, -140, 24, { font: 'Osw', col: '#c8221a' }); if (lv > 0.5) txt('55%+', 90, -170, 30, { font: 'Osw', col: '#ffe070' }); pop();
    if (t > EV.ol_half + 0.3) bubbleTag('ОЛЕИНОВАЯ', 720, 1080, t, EV.ol_half + 0.3, '#5a7a1a', 40, -0.04);
    if (t > EV.ol_rev && t < EV.ol_rev + 1.0) { const k = (t - EV.ol_rev) / 1.0; glow(540, 960, 900 * k, 'rgba(255,220,120,1)', 0.5 * (1 - k)); for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; txt('★', 540 + Math.cos(a) * 400 * k, 900 + Math.sin(a) * 400 * k, 50, { col: '#ffe070', a: 1 - k }); } }
  }
  function front(t) { push(-40, 1960, 1.6); oliveBranch(0, -60, 1.2, -0.2); pop(); push(1180, 1980, 1.6); for (let i = 0; i < 4; i++) acorn(-80 + i * 50, -40, 0.9, i, { key: 15830 + i }); pop(); motes(30, [0, 300, 1100, 1700], '#ffe8a0', t, 15840, { sp: 8, sz: 4, a: 0.55, wob: 2 }); rays(560, 640, 2.0, 0.5, 1700, 'rgba(255,220,150,1)', 0.12, 5, t); }
  WORLD.olive = (t, u, cat) => {
    lay(14, () => { land(t); haze('#f8b070', 0.08); });
    lay(2.4, () => { pig(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { lab(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.olive = {
    outfit: 'botanistA', light: { side: -1, rim: '#ffd890' }, grade: ['#ffb060', 0.08],
    act: () => [[S0.olive, 'suspicious'], [EV.ol_rev, 'shock'], [EV.ol_acorn, 'smug'], [EV.ol_fat, 'awe'], [EV.ol_half, 'proud'], [EV.ol_oil, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1700, s: 1.0, flip: 1, look: t > EV.ol_oil ? [0.2, -0.3] : t > EV.ol_half ? [0.7, 0.3] : t > EV.ol_fat ? [-0.5, 0.3] : t > EV.ol_acorn ? [-0.9, -0.2] : [0, -0.2], hand: [180, -300], handF: t > EV.ol_acorn && t < EV.ol_fat ? [-180, -380] : [-90, -220], prop: 'acornP', propAng: 0.2, tailUp: t > EV.ol_oil, point: t > EV.ol_acorn && t < EV.ol_fat ? 1 : undefined }),
    cam: () => [[S0.olive, 560, 900, 0.06], [EV.ol_rev, 540, 1100, 0.14, 'x'], [EV.ol_acorn, 320, 1150, 0.2], [EV.ol_fat, 480, 1260, 0.22], [EV.ol_half, 680, 1250, 0.22], [EV.ol_oil, 520, 1080, 0.18], [S1.olive, 460, 1060, 0.2]]
  };
  // ---------------------------------------------------------------- переход: капля масла падает и растекается золотым кругом
  TRANS_IN.olive = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const e = sm(k); if (e < 0.35) { const q = e / 0.35; scr(() => { push(540, lerp(-100, 960, q * q), 3); ell(0, 0, 22, 30, { wash: '#e8c840', washA: 1, w: 2, col: '#8a7a10' }); pop(); }); return; }
    const R = lerp(20, 1400, sm((e - 0.35) / 0.65)); inCircle(540, 960, R, () => drawBuf(B, 1, 540, 960)); scr(() => { ctx.save(); ctx.strokeStyle = 'rgba(232,200,64,0.9)'; ctx.lineWidth = 40 * (1 - e) + 4; ctx.beginPath(); ctx.arc(540, 960, R + 14, 0, 6.283); ctx.stroke(); ctx.restore(); });
  } };
})();
