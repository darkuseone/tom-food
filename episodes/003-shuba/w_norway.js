/* 003 — `norway`: «А в 1845-м англичане описывают норвежский салат: сельдь, свёкла, картошка.» Викторианская кухня: кирпичный очаг с огнём, медные кастрюли,
   окно с лондонским туманом и трубами, кухарка в чепце читает огромную книгу «1845» — в развороте гравюра фьорда с рыбацкой лодкой. Флажок Норвегии на гравюре
   (только «норвежский»). По словам на блюдо прыгают сельдь, свёкла, картошка. Том в сюртуке + фартук. Переход В сцену: гравюра — кадр сепией, цвет проступает. */
(() => {
  EV.nw_eng = wtw('s5', 'англичане');
  EV.nw_nor = wtw('s5', 'норвежский');
  EV.nw_f = wtw('s5', 'сельдь,');
  EV.nw_b = wtw('s5', 'свёкла,');
  EV.nw_p = wtw('s5', 'картошка.');
  SHAKES.push([EV.nw_p + 0.1, 0.12, 6]);
  KEYW.push('норвежский');

  function kitchen(t) {                                                // кирпич, очаг, медь, окно с туманом
    vgrad(-600, 1600, ['#3a2018', '#5a3426', '#7a4a32']); for (let r = 0; r < 30; r++) for (let i = 0; i < 14; i++) { const x = -300 + i * 120 + (r % 2) * 60, y = r * 50; if (y > 1400) continue; rect(x, y, 116, 46, { wash: (r * 7 + i) % 5 ? '#8a4a32' : '#7a3e2a', washA: 1, w: 1, col: '#3a1a10', a: 0.6 }); }
    const w = rect(640, 180, 340, 380, { wash: '#8a96a0', washA: 1, w: 8, col: '#2a2018', key: 3600 }); ctx.save(); ctx.clip(w.path); vgrad(180, 560, ['#a8b0b4', '#7a868e']); for (let i = 0; i < 6; i++) { rect(650 + i * 56, 380 - (i * 41 % 90), 46, 200, { wash: '#4a525a', washA: 0.8, line: false }); rect(660 + i * 56, 350 - (i * 41 % 90), 14, 40, { wash: '#3a4248', washA: 0.8, line: false }); }
    for (let i = 0; i < 8; i++) { const r = rng(3601 + i); ell(640 + ((r() * 340 + t * 20) % 340), 220 + r() * 300, 90, 30, { wash: '#d8dcde', washA: 0.4, line: false }); } ctx.restore(); pencil([[810, 180], [810, 560]], { w: 6, col: '#2a2018', pass2: false }); pencil([[640, 370], [980, 370]], { w: 6, col: '#2a2018', pass2: false });
    const h = rect(40, 600, 440, 520, { wash: '#2a1410', washA: 1, w: 4, col: '#0a0404', key: 3602 }); rect(0, 560, 520, 60, { wash: '#6a4a3a', washA: 1, w: 3, col: '#1a0a04' }); for (let i = 0; i < 6; i++) { const f = flick(t, i); blob([[120 + i * 50, 1110], [130 + i * 50, 1110 - 140 * f], [150 + i * 50, 1050 - 60 * f], [160 + i * 50, 1110]], { wash: i % 2 ? '#ffb040' : '#ff7a20', washA: 0.95, line: false }); }
    glow(260, 1040, 300, 'rgba(255,150,60,1)', 0.6); pencil([[260, 620], [260, 860]], { w: 4, col: '#2a2a2a', pass2: false }); const pot = ell(260, 900, 100, 70, { wash: '#2a2a2a', washA: 1, w: 3, col: '#000' }); for (let q = 0; q < 3; q++) { const k = (t * 0.6 + q / 3) % 1; ell(260 + Math.sin(k * 6) * 20, 820 - k * 200, 30 + k * 30, 20 + k * 20, { wash: '#ffffff', washA: 0.3 * (1 - k), line: false }); }
    for (let i = 0; i < 5; i++) { const x = 600 + i * 90; pencil([[x, 600], [x, 640]], { w: 3, col: '#2a2018', pass2: false }); const p = ell(x, 680, 38, 38, { wash: '#b8692e', washA: 1, w: 2.4, col: '#3a1a08', key: 3610 + i }); metalG(p.path, x - 14, 666, 50, '#f2b06a', '#b8692e', '#4e220a'); pencil([[x + 30, 690], [x + 70, 700]], { w: 6, col: '#6a3a1a', pass2: false }); }
  }
  function cook(t) { const x = 160, y = 1280; human(x, y, 1.2, t, { body: '#4a5a7a', hair: '#8a5a3a', face: t > EV.nw_nor ? 'smile' : 'calm', armL: 'hold', armR: 'hold', seed: 180, look: 0.3, long: 1 });   // кухарка в чепце
    const hy = y + (-238 - 46) * 1.2; blob([[x - 56, hy + 10], [x - 50, hy - 50], [x, hy - 66], [x + 50, hy - 50], [x + 56, hy + 10]], { wash: '#f6f2ea', washA: 1, w: 2, col: '#3a3a3a' }); for (let i = 0; i < 8; i++) ell(x - 52 + i * 15, hy - 50 + Math.abs(i - 3.5) * 4, 8, 6, { wash: '#f6f2ea', washA: 1, w: 1.2, col: '#8a8a8a' });
    blob([[x - 40, y - 100], [x - 46, y - 220], [x + 46, y - 220], [x + 40, y - 100]], { wash: '#f6f2ea', washA: 1, w: 1.8, col: '#3a3a3a' }); }
  function book(t) {                                                   // огромная книга 1845: гравюра фьорда, текст
    const x = 470, y = 1330, op = sm(clamp((t - S0.norway) / 0.6)); push(x, y, 1, -0.02); poly([[-330, 0], [330, 0], [300, -40], [-300, -40]], { wash: '#5a2a14', washA: 1, w: 2.4, col: '#1a0a04' });
    for (const sd of [-1, 1]) { const pg = poly([[0, -40], [sd * 300, -40], [sd * 290, -420], [0, -400]], { wash: '#f2e6c8', washA: 1, w: 2.4, col: '#5a4020', key: 3620 + sd }); shadeG(pg.path, 0, -200, sd * 120, -200, '#c8b48a', 0.5); }
    txt('NORWEGIAN', -150, -370, 30, { font: 'Osw', col: '#2b2622' }); txt('HERRING SALAD', -150, -334, 26, { font: 'Osw', col: '#2b2622' }); for (let i = 0; i < 9; i++) pencil([[-270, -290 + i * 26], [-30, -290 + i * 26]], { w: 3, col: '#6a5a44', a: 0.6, pass2: false }); txt('1845', -150, -60, 40, { font: 'Hand', col: '#7a1a10' });
    push(150, -230, 1); const fr = rect(-120, -150, 240, 260, { wash: '#e8dcb8', washA: 1, w: 2, col: '#2a2010' }); ctx.save(); ctx.clip(fr.path); poly([[-130, 40], [-60, -110], [0, 0], [60, -130], [130, 40]], { wash: '#6a7a8a', washA: 1, w: 2, col: '#1a1a1a' }); rect(-130, 40, 260, 80, { wash: '#4a6a8a', washA: 1, line: false });
    for (let i = 0; i < 10; i++) pencil([[-120, 50 + i * 7], [120, 50 + i * 7]], { w: 1.2, col: '#1a2a3a', a: 0.6, pass2: false }); const bx = Math.sin(t * 1.5) * 20; poly([[-40 + bx, 60], [40 + bx, 60], [30 + bx, 76], [-30 + bx, 76]], { wash: '#6a3a1a', washA: 1, w: 1.6 }); pencil([[bx, 60], [bx, 10]], { w: 3, col: '#2a1a10', pass2: false }); poly([[bx, 14], [bx + 30, 50], [bx, 50]], { wash: '#efe6d0', washA: 1, w: 1.4 });
    if (t > EV.nw_nor) { const k = popK(t, EV.nw_nor, 0.3); push(80, -110, k); pencil([[0, 0], [0, 60]], { w: 3, col: '#2a1a10', pass2: false }); rect(0, 0, 60, 40, { wash: '#b8281e', washA: 1, w: 1.4, col: '#2a0a04' }); rect(16, 0, 10, 40, { wash: '#f6f6f6', washA: 1, line: false }); rect(0, 15, 60, 10, { wash: '#f6f6f6', washA: 1, line: false }); rect(19, 0, 4, 40, { wash: '#1a3a7a', washA: 1, line: false }); rect(0, 18, 60, 4, { wash: '#1a3a7a', washA: 1, line: false }); pop(); }
    ctx.restore(); pop(); pop();
  }
  function platter(t) { const x = 700, y = 1470; ell(x, y, 170, 40, { wash: '#f2f0ea', washA: 1, w: 2.6, col: '#3a3a3a', key: 3630 }); pencil(ellPts(x, y, 140, 30, 0, 0, 30), { w: 2, col: '#3a6ab8', a: 0.6, pass2: false });
    const hop = (t0) => t < t0 ? null : -Math.max(0, Math.sin(clamp((t - t0) / 0.4) * Math.PI)) * 140; let h = hop(EV.nw_f); if (h !== null) herring(x - 40, y - 40 + h, 0.8, -0.1, { key: 3631 }); h = hop(EV.nw_b); if (h !== null) beet(x + 90, y - 60 + h, 0.8, 0.1, { key: 3632 }); h = hop(EV.nw_p); if (h !== null) potato(x - 120, y - 40 + h, 0.8, 0, { key: 3633 }); }
  WORLD.norway = (t, u, cat) => {
    lay(14, () => { kitchen(t); haze('#ffb070', 0.05); }); lay(3.6, () => { cook(t); });
    lay(1.3, () => { const tb = rect(-300, 1330, 1700, 700, { wash: '#8a6a44', washA: 1, w: 3, col: '#1a0a04', key: 3640 }); shadeG(tb.path, 540, 1330, 540, 1800, '#3a2010', 0.5); for (let i = 0; i < 8; i++) pencil([[-300, 1350 + i * 60], [1400, 1354 + i * 60]], { w: 1.6, col: '#5a3a1a', a: 0.5, pass2: false }); book(t); });
    lay(1, () => { platter(t); cat(); });
  };
  OUTFIT.victorianA = Object.assign({}, OUTFIT.victorian, { apron: 1 });
  DIR.norway = {
    outfit: 'victorianA', light: { side: -1, rim: '#ffb070' }, grade: ['#ff9050', 0.1],
    act: () => [[S0.norway, 'awe'], [EV.nw_eng, 'talk'], [EV.nw_nor, 'proud'], [EV.nw_f, 'grin'], [EV.nw_p, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 900, y: 1760, s: 1.12, flip: true, look: t < EV.nw_f ? [0.8, 0.5] : [0.4, 0.7], hand: [140, -260], handF: [-90, -220], tailUp: t > EV.nw_p }),
    cam: () => [[S0.norway, 560, 1100, 0.12], [EV.nw_eng, 540, 1060, 0.12], [EV.nw_nor, 700, 1060, 0.28, 'x'], [EV.nw_f, 760, 1180, 0.2], [S1.norway, 760, 1180, 0.24]]
  };
  // ---------------------------------------------------------------- переход: гравюра — кадр сепией, цвет проступает
  TRANS_IN.norway = { a: 0.12, b: 0.6, runA: 1, fx(k, t, A, B) {
    const g = 1 - sm(clamp((k - 0.15) / 0.85)); scr(() => { ctx.save(); ctx.filter = `grayscale(${g}) sepia(${g * 0.8}) contrast(${1 + g * 0.3})`; ctx.drawImage(B, 0, 0); ctx.restore(); });
    if (k < 0.25) drawBuf(A, 1, 540, 960, 1 - k / 0.25); if (g > 0.05) scr(() => { const r = rng(3650); for (let i = 0; i < 80; i++) { const y = r() * H; pencil([[0, y], [W, y + (r() - 0.5) * 20]], { w: 1.2, col: '#3a2a14', a: 0.25 * g, pass2: false }); } pencil([[30, 30], [W - 30, 30], [W - 30, H - 30], [30, H - 30], [30, 30]], { w: 6, col: '#3a2a14', a: g, pass2: false }); });
  } };
})();
