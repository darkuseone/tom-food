/* 002 — `book`: «Но это имя есть в книге рецептов за шестьдесят лет до войны!» Викторианская кухня 1856: чугунная плита, медные кастрюли, окно в лондонский смог.
   На столе раскрытая книга «COOKERY FOR MAIDS OF ALL WORK · 1856», заголовок «French Fried Potatoes» Том обводит красным; лента-календарь 1856 → 1917 мелькает «+61».
   Том — кухарка в чепце и фартуке, указывает лапой, торжествует. Переход В сцену: кадр окопа переворачивается, как блин на сковороде. */
(() => {
  EV.bk_book = wtw('s7', 'книге');
  EV.bk_sixty = wtw('s7', 'шестьдесят');
  KEYW.push('шестьдесят');
  function wall(t) {                                                    // кирпичная стена, полки с медью, окно в смог
    vgrad(-500, 2000, ['#5a3a2a', '#7a5038', '#4a2e20']);
    for (let r = 0; r < 26; r++) for (let i = 0; i < 12; i++) { const x = -400 + i * 170 + (r % 2) * 85, y = -200 + r * 60; rect(x, y, 160, 52, { wash: ['#8a4a32', '#7a4028', '#9a5a3a'][(i + r) % 3], washA: 0.9, line: false }); }
    const wn = rect(620, 300, 360, 460, { wash: '#b8b0a0', washA: 1, w: 4, col: '#2a1a10', key: 9000 }); ctx.save(); ctx.clip(wn.path); vgrad(300, 760, ['#c8c0a8', '#a89c84']); for (let i = 0; i < 6; i++) { rect(640 + i * 60, 520 - (i % 3) * 60, 50, 260, { wash: '#6a6258', washA: 0.6, line: false }); rect(650 + i * 60, 480 - (i % 3) * 60, 14, 50, { wash: '#5a524a', washA: 0.6, line: false }); }
    for (let i = 0; i < 4; i++) { const ph = (t * 0.15 + i / 4) % 1; ell(680 + i * 80 + ph * 60, 470 - ph * 200, 50, 30, { wash: '#8a8478', washA: 0.4 * (1 - ph), line: false }); } ctx.restore();
    pencil([[800, 300], [800, 760]], { w: 8, col: '#2a1a10' }); pencil([[620, 530], [980, 530]], { w: 8, col: '#2a1a10' });
    for (const y of [420, 640]) { rect(-200, y, 760, 22, { wash: '#6a4424', washA: 1, w: 2, col: '#2a1408' }); for (let k = 0; k < 5; k++) { const x = -120 + k * 150, p = ell(x, y - 40, 50 - k * 4, 40 - k * 3, { wash: '#b8733a', washA: 1, w: 2.2, col: '#3a1a08', key: 9010 + k }); metalG(p.path, x - 15, y - 54, 60, '#f0b880', '#b8733a', '#4a2008'); } }
    haze('#d8c8a8', 0.08);
  }
  function range(t) {                                                   // чугунная плита: дверцы, конфорки, чайник с паром, огонь
    push(-60, 1420, 1); const b = rect(-260, -340, 520, 340, { wash: '#2a2624', washA: 1, w: 3, col: '#000', key: 9020 }); metalG(b.path, -100, -260, 400, '#5a544e', '#2a2624', '#0a0806');
    for (const x of [-200, 20]) { rect(x, -260, 180, 140, { wash: '#1a1614', washA: 1, w: 2.4, col: '#000' }); ell(x + 90, -190, 14, 14, { wash: '#c8a040', washA: 1, w: 1.4 }); }
    rect(-180, -100, 360, 80, { wash: '#ff8a30', washA: 0.9, w: 2, col: '#000' }); for (let i = 0; i < 12; i++) pencil([[-170 + i * 30, -100], [-170 + i * 30, -20]], { w: 6, col: '#1a1614', pass2: false }); glow(0, -60, 200 * flick(t), 'rgba(255,140,50,1)', 0.5);
    const k = ell(120, -380, 70, 50, { wash: '#8a8e94', washA: 1, w: 2.4, col: '#1a1a1a' }); metalG(k.path, 100, -400, 80, '#e8ecf0', '#8a8e94', '#3a3e44'); pencil([[180, -390], [240, -440]], { w: 10, col: '#6a6e74' }); steam2(250, -460, t, 4, 0.5, 91, 200); pop();
  }
  function book(t) {                                                    // раскрытая книга рецептов, красный кружок вокруг заголовка
    push(790, 1420, 0.72, -0.04); const sh = blob([[-330, 40], [-320, -260], [0, -230], [320, -260], [330, 40], [0, 70]], { wash: '#5a2a1a', washA: 1, w: 3, col: '#1a0a04' });
    for (const sd of [-1, 1]) { const pg = blob([[0, -226], [sd * 300, -250], [sd * 310, 26], [0, 50]], { wash: '#f4ead2', washA: 1, w: 2.2, col: '#5a4a3a', key: 9030 + sd }); shadeG(pg.path, 0, 0, sd * 160, 0, '#c8b890', 0.45); }
    txt('COOKERY', -150, -196, 34, { font: 'Osw', col: '#2b2622' }); txt('for Maids of All Work', -150, -160, 26, { font: 'Hand', col: '#2b2622' }); txt('1856', -150, -116, 40, { font: 'Osw', col: '#d9482b' });
    for (let i = 0; i < 6; i++) pencil([[-270, -70 + i * 20], [-40, -70 + i * 20]], { w: 1.6, col: '#5a4a3a', a: 0.5, pass2: false });
    txt('French Fried', 150, -190, 38, { font: 'Hand', col: '#2b2622', bold: 1 }); txt('Potatoes', 150, -150, 38, { font: 'Hand', col: '#2b2622', bold: 1 }); for (let i = 0; i < 7; i++) pencil([[40, -100 + i * 20], [270, -100 + i * 20]], { w: 1.6, col: '#5a4a3a', a: 0.5, pass2: false });
    const ck = clamp((t - EV.bk_book) / 0.5); if (ck > 0) { const P = ellPts(150, -170, 140, 58, -0.05, 0.12, 50); pencil(P.slice(0, Math.max(2, Math.floor(P.length * ck))), { w: 6, col: '#d9482b', pass2: false }); }
    for (let k = 0; k < 3; k++) fry(-200 + k * 26, 0, 70, 0.3 * k - 0.3, { w: 12, key: 9040 + k }); pop();
  }
  function calendar(t) {                                                // лента-календарь 1856 → 1917
    if (t < EV.bk_sixty - 0.2) return; const k = clamp((t - EV.bk_sixty + 0.2) / 1.0), yr = Math.round(lerp(1856, 1917, sm(k)));
    push(560, 760, popK(t, EV.bk_sixty - 0.2, 0.3), 0.04); const p = rect(-200, -90, 400, 180, { wash: '#fbf6ea', washA: 1, w: 3, col: '#2b2622' }); rect(-200, -90, 400, 46, { wash: '#d9482b', washA: 1, w: 3, col: '#2b2622' });
    for (const x of [-120, 120]) { ell(x, -96, 12, 12, { wash: '#8a8e96', washA: 1, w: 2 }); } txt(String(yr), 0, 30, 96, { font: 'Osw', col: '#2b2622' }); pop();
    if (k >= 1) bubbleTag('+61 ГОД', 820, 640, t, EV.bk_sixty + 0.85, '#e8b53a', 54, 0.06);
  }
  WORLD.book = (t, u, cat) => {
    lay(18, () => { wall(t); });
    lay(2, () => { range(t); human(1180, 1500, 1.0, t, { body: '#3a3a4a', long: 1, hat: 'scarf', hatCol: '#f4ead2', hair: '#5a3a1a', face: t > EV.bk_book ? 'shock' : 'calm', armL: 'hold', armR: 'hold', seed: 150, flip: -1, look: -0.7 }); });
    lay(1, () => { cat(); });
    lay(0.9, () => { const tb = rect(-300, 1420, 1700, 600, { wash: '#8a5a34', washA: 1, w: 3, col: '#2a1408', key: 9050 }); shadeG(tb.path, 0, 1700, 0, 1420, '#3a1a08', 0.5); pencil([[-300, 1428], [1400, 1428]], { w: 3, col: '#d8a868', a: 0.6, pass2: false }); book(t); for (let i = 0; i < 4; i++) potato(80 + i * 70, 1430 - (i % 2) * 20, 0.5, i, { key: 9060 + i }); calendar(t); });
  };
  DIR.book = {
    outfit: 'cookV', light: { side: 1, rim: '#ffd090' }, grade: ['#c89a60', 0.12],
    act: () => [[S0.book, 'smug'], [EV.bk_book, 'proud'], [EV.bk_sixty, 'grin'], [EV.bk_sixty + 0.8, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 330, y: 1560, s: 1.0, look: t < EV.bk_sixty ? [0.8, 0.7] : [0.3, -0.5], hand: t > EV.bk_book - 0.2 ? [210, -200] : [110, -200], point: t > EV.bk_book - 0.2 ? 1 : undefined, handF: [-110, -190] }),
    cam: () => [[S0.book, 560, 1180, 0.28], [EV.bk_book, 640, 1240, 0.32], [EV.bk_sixty, 540, 1050, 0.2, 'x'], [S1.book, 540, 1040, 0.22]]
  };
  // ---------------------------------------------------------------- переход: кадр переворачивается, как блин
  TRANS_IN.book = { a: 0.25, b: 0.3, runA: 1, fx(k, t, A, B) {
    screenFill('#1a1008', 1); const c = Math.cos(k * Math.PI), up = Math.sin(k * Math.PI) * 260, src = k < 0.5 ? A : B;
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.translate(540, 960 - up); ctx.scale(1 - Math.sin(k * Math.PI) * 0.15, Math.max(0.02, Math.abs(c))); ctx.rotate(Math.sin(k * Math.PI) * 0.06); ctx.translate(-540, -960); ctx.drawImage(src, 0, 0); ctx.restore();
    scr(() => { if (Math.abs(c) < 0.4) glow(540, 960 - up, 600, 'rgba(255,220,160,1)', (0.4 - Math.abs(c)) * 1.2); });
  } };
})();
