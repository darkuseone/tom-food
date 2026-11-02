/* 014 — `trafalgar`: «Но сухарь почти вечен: галете с Трафальгарской битвы 1805 года — больше двухсот лет!» Морской музей: тёмно-зелёные стены, огромная
   картина морского боя (парусники в дыму), модель фрегата под стеклом, якорь, штурвал, канаты-ограждения, посетители. В центре — витрина на бархате:
   корабельная галета с табличкой «1805 · TRAFALGAR». Том-смотритель во фраке, фартуке и белых перчатках с лупой.
   По словам: «вечен» — над витриной включается луч прожектора; «Трафальгарской битвы» — картина оживает: пушки вспыхивают дымом; «1805» — табличка светится;
   «двухсот лет» — счётчик лет крутится до «200+». Переход В сцену: круг подзорной трубы — в нём проступает новый кадр. */
(() => {
  EV.tf_eter = wtw('s4', 'вечен:');
  EV.tf_bat = wtw('s4', 'Трафальгарской');
  EV.tf_year = wtw('s4', '1805');
  EV.tf_200 = wtw('s4', 'двухсот');
  KEYW.push('вечен:', 'двухсот');

  function hall(t) {                                                    // стены, картина боя, флаги, штурвал, якорь
    vgrad(-600, 1500, ['#0e2420', '#1a3a32', '#2a4a40']); for (let x = -400; x < 1600; x += 90) pencil([[x, -500], [x, 1300]], { w: 2, col: '#0a1a16', a: 0.4, pass2: false });
    push(540, 360, 1); const fr = rect(-360, -260, 720, 460, { wash: '#c8a050', washA: 1, w: 4, col: '#5a3a08', key: 14500 }); metalG(fr.path, -100, -100, 500, '#ffe8a0', '#c89a3a', '#6a4a10');
      const pc = rect(-330, -230, 660, 400, { wash: '#8a9aa0', washA: 1, w: 2, col: '#3a2a1a', key: 14501 }); ctx.save(); ctx.clip(pc.path); vgrad(-230, 170, ['#c8b898', '#7a8a90', '#3a5a6a']); const fire = t > EV.tf_bat;
      for (const [x, y, s] of [[-180, 60, 1], [120, 40, 1.1], [260, 90, 0.7]]) { push(x, y, s); blob([[-120, 30], [-100, 60], [100, 60], [130, 30]], { wash: '#3a2410', washA: 1, w: 1.6 }); for (let m = 0; m < 3; m++) { pencil([[-60 + m * 50, 30], [-60 + m * 50, -160 + m * 10]], { w: 4, col: '#2a1a0a', pass2: false }); for (let sl = 0; sl < 2; sl++) blob([[-90 + m * 50, -140 + sl * 60], [-30 + m * 50, -140 + sl * 60], [-26 + m * 50, -90 + sl * 60], [-94 + m * 50, -90 + sl * 60]], { wash: '#efe6d0', washA: 0.95, w: 1.2 }); }
        if (fire) for (let k = 0; k < 4; k++) { const q = ((t - EV.tf_bat) * 1.4 + k / 4 + x / 400) % 1; ell(-80 + k * 50 - q * 40, 40 - q * 60, 20 + q * 40, 14 + q * 30, { wash: '#e8e0d0', washA: 0.7 * (1 - q), line: false }); if (q < 0.15) glow(-80 + k * 50, 40, 40, 'rgba(255,180,80,1)', 0.8); } pop(); }
      for (let i = 0; i < 8; i++) pencil(Array.from({ length: 12 }, (_, j) => [-330 + j * 60, 140 + i * 6 + Math.sin(j + i) * 6]), { w: 2, col: '#cfe0e8', a: 0.5, pass2: false }); ctx.restore(); glow(0, -60, 400, 'rgba(255,230,180,1)', 0.12); pop();
    push(1120, 300, 1); ell(0, 0, 120, 120, { line: true, w: 14, col: '#8a5a2a' }); for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; pencil([[Math.cos(a) * 30, Math.sin(a) * 30], [Math.cos(a) * 150, Math.sin(a) * 150]], { w: 10, col: '#8a5a2a' }); ell(Math.cos(a) * 160, Math.sin(a) * 160, 14, 14, { wash: '#8a5a2a', washA: 1, w: 1.4 }); } ell(0, 0, 30, 30, { wash: '#c8a050', washA: 1, w: 2 }); pop();
    push(-60, 700, 1.2); pencil([[0, -260], [0, 160]], { w: 22, col: '#3a3a3a' }); pencil(spline([[-140, 60], [-120, 160], [0, 200], [120, 160], [140, 60]], false, 8), { w: 22, col: '#3a3a3a' }); ell(0, -280, 40, 40, { line: true, w: 14, col: '#3a3a3a' }); pencil([[-90, -180], [90, -180]], { w: 16, col: '#3a3a3a' }); pop();
    for (let i = 0; i < 3; i++) { const x = 260 + i * 280; pencil([[x, 1000], [x, 1100]], { w: 6, col: '#c8a050' }); } pencil(spline([[260, 1010], [400, 1040], [540, 1010], [680, 1040], [820, 1010]], false, 8), { w: 8, col: '#8a1a2a' });
  }
  function visitors(t) { const ah = t > EV.tf_200; for (const [x, sd, i] of [[100, 1, 0], [980, -1, 1], [860, -1, 2]]) { human(x, 1280, 1.05, t, { body: ['#5a3a6a', '#3a5a8a', '#c8a050'][i], legs: '#2a2a34', hair: ['#c8a060', '#3a2a1a', '#d8d0c0'][i], face: ah ? 'shock' : 'smile', armL: 'hold', armR: ah && i === 0 ? 'point' : 'hold', look: sd * 0.6, seed: 14510 + i, flip: sd, long: i === 0 }); if (i === 2) stache(x, 1280, 1.05); } }
  function vitrine(t) {                                                 // витрина: стекло, бархат, галета, табличка, луч прожектора, счётчик лет
    const on = t > EV.tf_eter; if (on) { rays(540, 200, 1.57, 0.18, 1400, 'rgba(255,248,220,1)', 0.22 * clamp((t - EV.tf_eter) / 0.3), 5, t); glow(540, 1260, 300, 'rgba(255,240,200,1)', 0.35); }
    push(540, 1440, 1); rect(-200, 0, 400, 260, { wash: '#2a1a10', washA: 1, w: 3, col: '#0a0400' }); const v = rect(-190, -40, 380, 50, { wash: '#7a1a2a', washA: 1, w: 2, col: '#2a0408' });
      hardtack(0, -70, 1.1, 0.08, { worm: 1, key: 14520 }); const g = rect(-200, -300, 400, 300, { wash: '#d8ecf4', washA: 0.18, w: 3, col: '#c8a050' }); pencil([[-170, -280], [-120, -200]], { w: 6, col: '#ffffff', a: 0.5, pass2: false });
      const yl = t > EV.tf_year; rect(-130, 20, 260, 70, { wash: '#f4ecd8', washA: 1, w: 2, col: '#5a3a08' }); txt("SHIP'S BISCUIT", 0, 46, 22, { font: 'Osw', col: '#3a1a08' }); txt('1805 · TRAFALGAR', 0, 76, 24, { font: 'Osw', col: yl ? '#a8221a' : '#5a3a1a' }); if (yl) glow(0, 60, 140, 'rgba(255,220,120,1)', 0.3); pop();
    if (t > EV.tf_200 - 0.1) { const q = clamp((t - EV.tf_200 + 0.1) / 0.4), yrs = Math.round(lerp(0, 213, sm(q))); push(540, 1040, popK(t, EV.tf_200 - 0.1, 0.4)); rect(-170, -60, 340, 120, { wash: '#1a1a20', washA: 1, w: 4, col: '#c8a050' }); txt(yrs >= 200 ? '200+ ЛЕТ' : yrs + ' ЛЕТ', 0, 24, 66, { font: 'Osw', col: '#ffe070' }); pop(); }
  }
  function front(t) { push(-60, 1800, 1.5); const m = shape([[-120, 0], [-120, -260], [120, -260], [120, 0]], { wash: '#d8ecf4', washA: 0.25, w: 3, col: '#c8a050' }); pencil([[-100, -40], [100, -40]], { w: 6, col: '#5a3a1a' }); pencil([[0, -40], [0, -220]], { w: 4, col: '#3a2a1a' }); for (let i = 0; i < 2; i++) blob([[-60, -200 + i * 70], [40, -200 + i * 70], [44, -150 + i * 70], [-64, -150 + i * 70]], { wash: '#efe6d0', washA: 1, w: 1.2 }); pop();
    push(1180, 1900, 1.5); for (let i = 0; i < 5; i++) ell(0, -i * 30, 80 - i * 4, 24, { line: true, w: 12, col: '#b8a070' }); pop(); motes(26, [100, 300, 1000, 1700], '#fff4d0', t, 14530, { sp: 6, sz: 4, a: 0.45, wob: 2 }); }
  WORLD.trafalgar = (t, u, cat) => {
    lay(12, () => { hall(t); haze('#1a3a32', 0.08); });
    lay(3, () => { visitors(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { vitrine(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.trafalgar = {
    outfit: 'tuxA', light: { side: -1, rim: '#fff0c8' }, grade: ['#a8c0b0', 0.06],
    act: () => [[S0.trafalgar, 'proud'], [EV.tf_eter, 'awe'], [EV.tf_bat, 'shock'], [EV.tf_year, 'proud'], [EV.tf_200, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 780, y: 1640, s: 1.0, flip: -1, look: t < EV.tf_bat ? [-0.7, 0.4] : t < EV.tf_year ? [-0.3, -0.8] : [-0.6, 0.3], hand: [240, -280], handF: [-90, -220], prop: 'magP', propAng: -0.3 }),
    afterCat: (t, u, P) => { for (const sd of [-1, 1]) ell(P.x + (sd > 0 ? -240 : 90) * P.s, P.y + (sd > 0 ? -280 : -220) * P.s, 18 * P.s, 18 * P.s, { wash: '#ffffff', washA: 1, w: 1.6, col: '#8a8a8a' }); },
    cam: () => [[S0.trafalgar, 540, 900, 0.08], [EV.tf_eter, 540, 1260, 0.2, 'x'], [EV.tf_bat, 540, 560, 0.16], [EV.tf_year, 600, 1300, 0.24], [EV.tf_200, 620, 1180, 0.2], [S1.trafalgar, 620, 1200, 0.22]]
  };
  // ---------------------------------------------------------------- переход: круг подзорной трубы — в нём проступает новый кадр
  TRANS_IN.trafalgar = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const e = sm(k), R = lerp(40, 1300, e * e); scr(() => { ctx.fillStyle = 'rgba(0,0,0,' + (0.7 * Math.sin(e * Math.PI)) + ')'; ctx.fillRect(0, 0, W, H); });
    inCircle(540, 960, R, () => drawBuf(B, 1, 540, 960)); scr(() => { ctx.save(); ctx.lineWidth = 40; ctx.strokeStyle = '#c8a050'; ctx.globalAlpha = 1 - e; ctx.beginPath(); ctx.arc(540, 960, R + 20, 0, 6.283); ctx.stroke(); ctx.lineWidth = 6; ctx.strokeStyle = '#000'; ctx.beginPath(); ctx.moveTo(540 - R, 960); ctx.lineTo(540 + R, 960); ctx.moveTo(540, 960 - R); ctx.lineTo(540, 960 + R); ctx.stroke(); ctx.restore(); });
  } };
})();
