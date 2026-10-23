/* 004 — `relatives`: «Родня по миру: грузинский мужужи, румынская пифтие, корейский чокпхён.» Большой глобус-карта на стене, Том-путешественник с указкой.
   По словам выезжают тарелки-родственники с ярлыками: мужужи (свинина в уксусном желе, Грузия), пифтие (чесночное желе, Румыния), чокпхён (корейские кубики желе).
   Пунктир путешествия от тарелки к тарелке. Переход В сцену: ложка-зеркало — кадр отражается в выпуклой ложке и расправляется. */
(() => {
  EV.rl_ge = wtw('s9', 'мужужи,');
  EV.rl_ro = wtw('s9', 'пифтие,');
  EV.rl_ko = wtw('s9', 'чокпхён.');
  KEYW.push('мужужи,', 'пифтие,', 'чокпхён.');

  function map(t) {                                                    // карта мира на стене
    vgrad(-600, 1600, ['#2a3a4a', '#3a4a5a', '#4a5a6a']); const m = rect(40, 300, 1000, 640, { wash: '#e8dcb8', washA: 1, w: 5, col: '#5a4020', key: 5000 }); ctx.save(); ctx.clip(m.path);
    for (let i = 0; i < 14; i++) pencil([[40 + i * 75, 300], [40 + i * 75, 940]], { w: 1, col: '#a89870', a: 0.5, pass2: false }); for (let i = 0; i < 9; i++) pencil([[40, 300 + i * 75], [1040, 300 + i * 75]], { w: 1, col: '#a89870', a: 0.5, pass2: false });
    blob([[140, 400], [320, 360], [400, 480], [340, 620], [200, 600], [120, 500]], { wash: '#c8b07a', washA: 1, w: 2, col: '#6a5030' }); blob([[440, 360], [880, 340], [980, 460], [920, 620], [700, 600], [520, 560], [460, 460]], { wash: '#c8b07a', washA: 1, w: 2, col: '#6a5030' });
    blob([[480, 620], [600, 640], [620, 820], [520, 860], [460, 740]], { wash: '#c8b07a', washA: 1, w: 2, col: '#6a5030' }); blob([[820, 700], [920, 700], [940, 800], [840, 820]], { wash: '#c8b07a', washA: 1, w: 2, col: '#6a5030' }); ctx.restore();
    const pts = [[600, 470, EV.rl_ge], [540, 430, EV.rl_ro], [880, 480, EV.rl_ko]]; let prev = [560, 420]; pts.forEach(([x, y, e]) => { if (t < e) return; dashL([prev, [(prev[0] + x) / 2, Math.min(prev[1], y) - 60], [x, y]], '#d9482b', 0.9, 3); ell(x, y, 12, 12, { wash: '#d9482b', washA: 1, w: 2, col: '#4a0a06' }); prev = [x, y]; });
  }
  function plates(t) { const P = [[300, EV.rl_ge, 'МУЖУЖИ', 'ГРУЗИЯ', '#c8a06a'], [560, EV.rl_ro, 'ПИФТИЕ', 'РУМЫНИЯ', '#e8d8a0'], [820, EV.rl_ko, 'ЧОКПХЁН', 'КОРЕЯ', '#a8784a']];
    P.forEach(([x, e, n, c, col], i) => { if (t < e - 0.1) return; const k = popK(t, e - 0.1, 0.35); push(x, 1220, k); ell(0, 20, 150, 36, { wash: '#f6f2ea', washA: 1, w: 2.4, col: '#4a4038' });
      if (i === 2) { for (let q = 0; q < 6; q++) { push(-70 + (q % 3) * 70, -10 - Math.floor(q / 3) * 40, 1); const c2 = rect(-28, -30, 56, 44, { wash: col, washA: 0.9, w: 1.6, col: '#4a2a10' }); glow(-10, -18, 10, 'rgba(255,255,255,1)', 0.6); pop(); } }
      else { push(0, 10, 0.6); jellySlab(0, 0, 260, 110, t, { key: 5010 + i, wob: 0.3 }); pop(); if (i === 0) for (let q = 0; q < 4; q++) pencil([[-60 + q * 40, -50], [-50 + q * 40, -64]], { w: 3, col: '#d9482b', pass2: false }); }
      pop(); bubbleTag(n, x, 1060, t, e + 0.1, '#d9482b', 36, (i - 1) * 0.05); txt(c, x, 1320, 26, { font: 'Osw', col: '#f6f0e0', a: k }); });
  }
  WORLD.relatives = (t, u, cat) => { lay(10, () => map(t)); lay(1.3, () => { rect(-300, 1290, 1700, 800, { wash: '#5a3a24', washA: 1, w: 3, col: '#1a0a04', key: 5020 }); plates(t); }); lay(1, () => cat()); };
  OUTFIT.botanistA = OUTFIT.botanistA || Object.assign({}, OUTFIT.botanist, { apron: 1 });
  DIR.relatives = {
    outfit: 'botanistA', light: { side: 1, rim: '#fff0d0' }, grade: ['#c89a5a', 0.08],
    act: () => [[S0.relatives, 'talk'], [EV.rl_ge, 'grin'], [EV.rl_ro, 'awe'], [EV.rl_ko, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 900, y: 1800, s: 1.05, flip: true, look: [0.6, -0.6], hand: [180, -360], handF: [-80, -220], point: 1 }),
    cam: () => [[S0.relatives, 540, 900, 0.06], [EV.rl_ge, 480, 1000, 0.1], [EV.rl_ro, 560, 1000, 0.1], [EV.rl_ko, 660, 1000, 0.12], [S1.relatives, 660, 1020, 0.14]]
  };
  // ---------------------------------------------------------------- переход: ложка-зеркало — кадр в выпуклой ложке расправляется
  TRANS_IN.relatives = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const rx = 120 + Math.pow(k, 1.5) * 1100, ry = rx * 1.4; scr(() => { ctx.save(); ctx.beginPath(); ctx.ellipse(540, 960, rx, ry, 0, 0, 6.3); ctx.clip(); ctx.translate(540, 960); ctx.scale(-(0.5 + 0.5 * k), 0.5 + 0.5 * k); ctx.drawImage(B, -540, -960); ctx.restore();
      pencil(ellPts(540, 960, rx, ry, 0, 0, 60), { w: 14, col: '#c8ccd0', a: 1 - k * 0.8, pass2: false }); glow(540 - rx * 0.4, 960 - ry * 0.4, rx * 0.3, 'rgba(255,255,255,1)', 0.6 * (1 - k)); pencil([[540, 960 + ry], [540, 960 + ry + 600]], { w: 40, col: '#c8ccd0', a: 1 - k, pass2: false }); });
  } };
})();
