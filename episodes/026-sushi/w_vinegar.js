/* 026 — `vinegar` (РАЗГАДКА ★): «Так зачем уксус? Он заменил брожение: кислинка за минуту, а не за год! / Ведь „суши“ и значит… „кислый“. Кислый
   рис — и есть суши!» Уксусоварня Эдо (красный уксус из сакэ-касу): высокий тёмный амбар, огромные чаны-окэ с лестницами, рабочие мешают
   шестами, пар, штабеля бочек 酢, в высоком окне — золотой вечерний луч (главный свет), фонарь у двери (второй). На переднем плане спор двух
   способов: слева — кадка фунадзуси с календарём «365 дней», справа — кадка риса, Том-итамаэ льёт уксус черпаком. По словам: «уксус?» —
   Том поднимает черпак; «заменил» — уксус льётся в рис, рис блестит; «минуту,» — над рисом часики «1 мин», над старой кадкой календарь
   листается «365»; «год!» — календарь падает, кадка фунадзуси перечёркнута; ««кислый».» — с балки раскатывается огромное полотнище с
   иероглифом 酸 («кислый»); «Кислый рис — и есть суши!» — Том поднимает готовое нигири, прищур «кисло» → улыбка. Плашки «БРОЖЕНИЕ: ГОД →
   УКСУС: МИНУТА», «酸し = КИСЛЫЙ». Переход В сцену: капля уксуса падает сверху и расходится кругами, внутри кругов — амбар. */
(() => {
  EV.vn_q = wtw('s9', 'уксус?');
  EV.vn_pour = wtw('s9', 'заменил');
  EV.vn_min = wtw('s9', 'минуту,');
  EV.vn_year = wtw('s9', 'год!');
  EV.vn_word = wtw('s10', '«кислый».');
  EV.vn_rice = wtw('s10', 'Кислый');
  SHAKES.push([EV.vn_word, 0.2, 8]);
  KEYW.push('«кислый».');
  const unroll = t => sm(clamp((t - EV.vn_word + 0.2) / 0.6));

  function brewery(t) {                                                   // амбар: доски, высокое окно с лучом, чаны с лестницами, рабочие, бочки
    vgrad(-500, 1500, ['#1a0e08', '#3a2010', '#4a2a16']); for (let i = 0; i < 14; i++) { const p = rect(-500 + i * 170, -500, 168, 2000, { wash: i % 2 ? '#4a2c18' : '#40261a', washA: 1, w: 1.4, col: '#140a04', key: 27500 + i }); hatch(p.path, p.bb, { gap: 12, a: 0.12, col: '#0a0402', ang: 1.52, key: 27520 + i }); }
    push(900, 60, 1); const w = rect(-110, -160, 220, 300, { wash: '#ffd890', washA: 1, w: 6, col: '#1a0a04', key: 27540 }); for (let i = 1; i < 3; i++) pencil([[-110 + i * 73, -160], [-110 + i * 73, 140]], { w: 5, col: '#1a0a04', pass2: false }); glow(0, 0, 220, 'rgba(255,210,130,1)', 0.3); pop();
    for (let i = 0; i < 3; i++) { const x = -120 + i * 330, y = 1000; push(x, y, 1); const v = blob([[-150, 0], [-160, -460], [160, -460], [150, 0]], { wash: '#8a5a2e', washA: 1, w: 3, col: '#2a1408', key: 27541 + i }); shadeG(v.path, -160, 0, 160, 0, '#3a1a08', 0.5); for (const yy of [-400, -230, -60]) pencil([[-158, yy], [158, yy]], { w: 10, col: '#b8a060', pass2: false }); ell(0, -460, 160, 26, { wash: '#6a1a0a', washA: 1, w: 2 });
      for (let j = 0; j < 3; j++) { const ph = (t * 0.4 + j / 3 + i * 0.2) % 1; ell(Math.sin(t + j) * 50, -480 - ph * 260, 50 + ph * 60, 30 + ph * 40, { wash: '#f4e8d8', washA: 0.25 * (1 - ph), line: false }); }
      pencil([[170, 0], [130, -520]], { w: 6, col: '#6a4a24', pass2: false }); pencil([[210, 0], [170, -520]], { w: 6, col: '#6a4a24', pass2: false }); for (let j = 0; j < 8; j++) pencil([[168 - j * 5, -j * 64], [208 - j * 5, -j * 64]], { w: 4, col: '#6a4a24', pass2: false }); pop();
      human(x + 40, y - 460, 0.75, t, { body: '#24336a', legs: '#1a1a2a', face: 'calm', armL: 'up', armR: 'up', seed: 27545 + i }); jpHat(x + 40, y - 460, 0.75, 'hachi', '#f4f0e8'); const sw = Math.sin(t * 3 + i) * 0.3; push(x + 40, y - 640, 1, sw); pencil([[0, -100], [0, 260]], { w: 6, col: '#c89a5a', pass2: false }); pop(); }
    for (let r = 0; r < 2; r++) for (let i = 0; i < 4; i++) vinegarCask(-300 + i * 140 + r * 70, 1240 - r * 170, 0.42, t, { key: 27550 + r * 4 + i, drip: false });
  }
  function banner(t) {                                                    // полотнище с иероглифом 酸 разворачивается с балки
    const k = unroll(t); if (k <= 0) return; pencil([[380, 420], [1100, 420]], { w: 18, col: '#2a1408', pass2: false });
    push(720, 430, 0.72); const h = 620 * k; const p = rect(-220, 0, 440, h, { wash: '#f4ecd8', washA: 1, w: 4, col: '#4a3a1a', key: 27560 }); shadeG(p.path, -220, 0, 220, 0, '#c8b890', 0.3);
    if (k > 0.6) { ctx.save(); ctx.globalAlpha = (k - 0.6) / 0.4; txt('酸', 0, 300, 300, { font: 'Osw', col: '#a8241e' }); txt('«КИСЛЫЙ»', 0, 520, 60, { font: 'Osw', col: '#2a1408' }); ctx.restore(); }
    ell(0, h, 230, 18, { wash: '#6a4a24', washA: 1, w: 2 }); hudBox('полотнище 酸', -220, 0, 220, h); pop();
  }
  function duel(t) {                                                      // передний стол: старая кадка с календарём против кадки риса с часиками
    const tb = rect(-500, 1440, 2200, 600, { wash: '#7a4a24', washA: 1, w: 3, col: '#2a1408', key: 27570 }); shadeG(tb.path, 0, 1440, 0, 1900, '#3a1a08', 0.5); for (let i = 0; i < 8; i++) pencil([[-500, 1470 + i * 50], [1700, 1476 + i * 50]], { w: 1.4, col: '#4a2a10', a: 0.5, pass2: false });
    funaTaru(310, 1450, 0.6, t, { key: 27571 });
    if (t > EV.vn_min - 0.2) { const k = popK(t, EV.vn_min - 0.2, 0.35), fall = t > EV.vn_year ? clamp((t - EV.vn_year) / 0.5) : 0; push(310, 1170 + fall * 200, k, fall * 1.2); rect(-70, -80, 140, 150, { wash: '#f8f4e8', washA: 1 - fall * 0.7, w: 2, col: '#4a3a2a' }); rect(-70, -80, 140, 34, { wash: '#c8241e', washA: 1, w: 1.4 }); const d = Math.min(365, Math.floor(clamp((t - EV.vn_min) / 0.8) * 365)); txt(String(d), 0, 30, 58, { font: 'Osw', col: '#2a1408' }); txt('дней', 0, 62, 22, { font: 'Hand', col: '#4a3a2a' }); pop(); }
    if (t > EV.vn_year) { const k = clamp((t - EV.vn_year) / 0.3); pencil([[200, 1250], [200 + 220 * k, 1250 + 200 * k]], { w: 12, col: '#d8201a', pass2: false }); pencil([[420, 1250], [420 - 220 * k, 1250 + 200 * k]], { w: 12, col: '#d8201a', pass2: false }); }
    hangiri(560, 1460, 0.55, t, { vin: t > EV.vn_pour ? clamp((t - EV.vn_pour) / 0.6) : 0, key: 27580 });
    if (t > EV.vn_pour && t < EV.vn_min + 0.6) { for (let i = 0; i < 10; i++) { const q = clamp((t - EV.vn_pour) * 3 - i * 0.05); ell(590 + Math.sin(i * 2 + t * 9) * 6, 1180 + i * 22 * q, 7, 13, { wash: '#c8501a', washA: 0.85, line: false }); } }
    if (t > EV.vn_pour + 0.2) { const r = rng(hsh(FRAME, 27585)); for (let i = 0; i < 8; i++) ell(470 + r() * 180, 1400 + r() * 20, 6, 3, { wash: '#ffffff', washA: 0.8, line: false }); }
    if (t > EV.vn_min - 0.2) { const k = popK(t, EV.vn_min - 0.2, 0.35); push(560, 1150, k); ell(0, 0, 60, 60, { wash: '#f8f4e8', washA: 1, w: 3, col: '#2a2a2a' }); pencil([[0, 0], [0, -46]], { w: 4, col: '#2a2a2a', pass2: false }); const a = (t - EV.vn_min) * 6; pencil([[0, 0], [Math.sin(a) * 40, -Math.cos(a) * 40]], { w: 3, col: '#c8241e', pass2: false }); txt('1 мин', 0, 100, 34, { font: 'Osw', col: '#ffe070' }); pop(); }
    vinegarCask(980, 1460, 0.5, t, { key: 27590 });
    castShadow(560, 1450, 320, 90, 0.5, 0.25);
  }
  WORLD.vinegar = (t, u, cat) => {
    lay(7, () => { brewery(t); haze('#ffc080', 0.05); });
    lay(3, () => { banner(t); });
    lay(1, () => { shaft(900, 60, 260, 1500, 0.35, 'rgba(255,215,140,1)', 0.16); lightPool(560, 1460, 640, 110, 'rgba(255,210,140,1)', 0.34); cat(); duel(t); });
    lay(0.65, () => { push(-160, 300, 1.4); chochin(0, 0, 1, t, { label: '酢', key: 27595 }); pop(); push(1220, 1960, 1.4); vinegarCask(0, 0, 0.9, t, { key: 27596, drip: false }); pop();
      motes(18, [200, 0, 1100, 1300], '#ffe8b0', t, 27597, { sp: 4, sz: 3, a: 0.45, wob: 4 }); moodDark(560, 1000, 520, 1500, '#0a0604', 0.5); });
  };
  DIR.vinegar = {
    outfit: 'itaA', light: { side: 1, rim: '#ffd890' }, grade: ['#ffb060', 0.07],
    act: () => [[S0.vinegar, 'suspicious'], [EV.vn_pour, 'proud'], [EV.vn_min, 'grin'], [EV.vn_year, 'smug'], [EV.vn_word - 0.4, 'awe'], [EV.vn_word, 'shock'], [EV.vn_rice, 'proud'], [EV.vn_rice + 0.9, 'laugh']],
    pose: (t, u, b) => { const pour = t > EV.vn_q && t < EV.vn_min + 0.6, hold = t > EV.vn_rice;
      return Object.assign(b, { x: 790, y: 1600, s: 1.15, flip: true, look: t > EV.vn_word - 0.3 && t < EV.vn_rice ? [-0.3, -0.9] : [-0.7, 0.3],
        hand: pour ? [220, -360] : hold ? [110, -440] : [150, -230], handF: [-90, -230], prop: pour ? 'ladleP' : hold ? 'nigiriP' : undefined, propAng: pour ? -0.6 : 0, squint: hold && t < EV.vn_rice + 0.8, tailUp: hold }); },
    hud: t => { infoPlate(t, EV.vn_pour, EV.vn_word - 0.5, { kind: 'swap', title: 'КИСЛИНКА', a: 'БРОЖЕНИЕ: ГОД', b: 'УКСУС: МИНУТА', ia: (s, tt) => INGR_C26.fish(s, tt), ib: (s, tt) => INGR_C26.vinegar(s, tt), tb: EV.vn_min });
    },
    cam: () => [[S0.vinegar, 560, 1060, 0.24], [EV.vn_min, 560, 1120, 0.28], [EV.vn_word - 0.3, 580, 1060, 0.25], [EV.vn_rice, 600, 1120, 0.28], [S1.vinegar, 610, 1140, 0.31]]
  };
  // ---------------------------------------------------------------- переход: капля уксуса падает и расходится кругами, внутри — амбар
  TRANS_IN.vinegar = { a: 0.3, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const dropK = clamp(k / 0.35), R = k < 0.35 ? 0 : lerp(0, 1500, sm((k - 0.35) / 0.65));
    scr(() => { if (k < 0.35) { const y = lerp(-80, 960, dropK * dropK); ell(540, y, 26, 40, { wash: '#c8501a', washA: 1, w: 2, col: '#4a1a08' }); ell(532, y - 12, 6, 12, { wash: '#ffffff', washA: 0.7, line: false }); }
      else { ctx.save(); ctx.beginPath(); ctx.ellipse(540, 960, R, R * 0.9, 0, 0, 6.283); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore(); for (let i = 0; i < 3; i++) { const r = R - i * 90; if (r > 10) pencil(ellPts(540, 960, r, r * 0.9, 0, 0, 48), { w: 10 - i * 3, col: '#c8501a', a: 0.7 - i * 0.2, pass2: false }); } } });
  } };
})();
