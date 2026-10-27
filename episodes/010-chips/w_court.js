/* 010 — `court`: «А потом Pringles судились, чтобы не платить налог: "Мы не чипсы, картошки всего 42%!"» Лондонский суд: дубовые панели, герб, высокий стол
   судьи в парике, присяжные-зрители, на столе улик — туба и чипс-«седло» под лупой. На «судились» судья поднимает молоток; на «налог:» над судьёй — свиток НДС;
   на «чипсы,» Том-барристер в парике поднимает чипс-седло и показывает «форма не из природы»; на «42%» — круговая диаграмма: 42 % картошка, 58 % «остальное».
   Пауза-гэг: судья бьёт молотком — штамп «2009: ЭТО ЧИПСЫ!», Том роняет чипс. Переход В сцену: удар молотка раскалывает кадр. */
(() => {
  EV.ct_sue = wtw('s6', 'судились,');
  EV.ct_tax = wtw('s6', 'налог:');
  EV.ct_not = wtw('s6', 'чипсы,');
  EV.ct_42 = wtw('s6', '42%!»');
  EV.ct_bang = LE('s6') + 0.05;
  SHAKES.push([EV.ct_bang, 0.25, 12]);
  KEYW.push('42%!»');

  function courtroom(t) { vgrad(-600, 1500, ['#4a2e1a', '#5a3a22', '#6a4428']); for (let i = 0; i < 10; i++) { rect(-300 + i * 180, 300, 170, 900, { line: true, w: 3, col: '#3a2010', a: 0.7 }); rect(-280 + i * 180, 330, 130, 380, { line: true, w: 2, col: '#7a5434', a: 0.5 }); }
    push(540, 180, 1); ell(0, 0, 110, 110, { wash: '#c8a040', washA: 1, w: 3, col: '#5a4010', key: 12000 }); ell(0, 0, 80, 80, { wash: '#8a1a2a', washA: 1, w: 2 }); poly([[-30, -40], [30, -40], [30, 20], [0, 50], [-30, 20]], { wash: '#2a4aa8', washA: 1, w: 2, col: '#c8a040' }); pop();
    push(540, 900, 1); rect(-300, -80, 600, 260, { wash: '#4a2a14', washA: 1, w: 4, col: '#1a0a04', key: 12001 }); const raise = t > EV.ct_sue && t < EV.ct_bang; const bang = t > EV.ct_bang && t < EV.ct_bang + 0.25;
      human(0, -60, 1.0, t, { body: '#1a1a1a', hair: '#f2f0e6', face: t > EV.ct_bang ? 'grin' : 'calm', armL: 'hold', armR: raise ? 'up' : bang ? 'point' : 'hold', seed: 1200, beard: 'short', look: 0.3 }); push(0, -60 - 330, 1); for (let r = 0; r < 3; r++) for (let i = 0; i < 6 - r; i++) ell(-62 + r * 10 + i * 24, -10 + r * 22, 13, 10, { wash: '#f8f6f0', washA: 1, w: 1.2, col: '#a8a294' }); for (const sd of [-1, 1]) for (let i = 0; i < 3; i++) ell(sd * 70, 30 + i * 22, 12, 10, { wash: '#f8f6f0', washA: 1, w: 1.2, col: '#a8a294' }); pop();
      push(90, raise ? -260 : -120, 1, raise ? -0.6 : 0.2); PROPS.gavelP(); pop(); rect(-300, 0, 600, 180, { wash: '#5a3418', washA: 1, w: 3, col: '#1a0a04' }); pop();
    if (t > EV.ct_tax) { const k = clamp((t - EV.ct_tax) / 0.4); push(800, 560, 1, -0.06); rect(-110, -20, 220, 200 * k, { wash: '#f6ecd4', washA: 1, w: 2.4, col: '#6a4a1a' }); ell(0, -20, 120, 16, { wash: '#e8d8b0', washA: 1, w: 2, col: '#6a4a1a' }); if (k > 0.6) { txt('НАЛОГ', 0, 60, 46, { font: 'Osw', col: '#7a1a1a' }); txt('НА ЧИПСЫ', 0, 120, 30, { font: 'Osw', col: '#3a2a1a' }); } pop(); } }
  function crowd(t) { const laugh = t > EV.ct_bang; for (let i = 0; i < 4; i++) { const x = [80, 230, 900, 1060][i]; human(x, 1180, 1.0, t, { body: ['#2a2a3a', '#4a2a2a', '#2a3a4a', '#3a3a2a'][i], hair: ['#3a2a1a', '#c8a070', '#1a1a1a', '#6a4a2a'][i], face: laugh ? 'grin' : t > EV.ct_42 ? 'shock' : 'calm', armL: 'hold', armR: laugh && i % 2 ? 'up' : 'hold', seed: 1205 + i, flip: x > 600 ? -1 : 1, look: x > 600 ? -0.5 : 0.5, long: i % 2 }); } }
  function evidence(t) { rect(-300, 1280, 1700, 50, { wash: '#4a2a14', washA: 1, w: 3, col: '#1a0a04', key: 12010 }); rect(-300, 1330, 1700, 500, { wash: '#3a2010', washA: 1, w: 2, col: '#1a0a04' });
    chipTube(180, 1290, 0.7, t, { col: '#c8282a', open: true }); push(380, 1270, 1); ell(0, 0, 80, 14, { wash: '#e8e8ea', washA: 1, w: 2, col: '#5a5a5a' }); saddleChip(0, -24, 0.9, 0.1); pop(); push(470, 1180, 1, -0.4); ell(0, 0, 54, 54, { line: true, w: 8, col: '#8a6a3a' }); pencil([[40, 40], [100, 100]], { w: 12, col: '#5a3a1a' }); pop();
    if (t > EV.ct_42) { const k = popK(t, EV.ct_42, 0.4), sweep = clamp((t - EV.ct_42) / 0.6); push(300, 980, k); ell(0, 0, 130, 130, { wash: '#bcb4a4', washA: 1, w: 3, col: '#2a2a2a' }); ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 128, -Math.PI / 2, -Math.PI / 2 + 6.283 * 0.42 * sweep); ctx.closePath(); ctx.fillStyle = '#e8b860'; ctx.fill();
      txt('42%', 40, 10, 50, { font: 'Osw', col: '#5a3a10' }); txt('картошка', 40, 50, 22, { font: 'Hand', col: '#5a3a10' }); txt('58%', -50, -10, 38, { font: 'Osw', col: '#3a3a3a' }); pop(); }
    if (t > EV.ct_bang) { quizStamp('2009: ЧИПСЫ!', 520, 760, t, EV.ct_bang, '#c8282a', -0.1, 0.8); } }
  WORLD.court = (t, u, cat) => { lay(10, () => courtroom(t)); lay(2.2, () => crowd(t)); lay(1, () => { evidence(t); cat(); }); };
  DIR.court = {
    outfit: 'barrister', light: { side: -1, rim: '#ffd8a0' }, grade: ['#b07a4a', 0.06],
    act: () => [[S0.court, 'smug'], [EV.ct_sue, 'talk'], [EV.ct_tax, 'sideeye'], [EV.ct_not, 'proud'], [EV.ct_42, 'smug'], [EV.ct_bang, 'shock'], [EV.ct_bang + 0.6, 'laugh']],
    pose: (t, u, b) => { const lift = t > EV.ct_not - 0.2 && t < EV.ct_bang; return Object.assign(b, { x: 720, y: 1820, s: 1.12, flip: true, look: t < EV.ct_not ? [-0.5, -0.8] : [-0.6, -0.4], hand: lift ? [180, -440] : [140, -300], handF: [-90, -240], prop: lift ? 'chipSaddleP' : null, squash: t > EV.ct_bang && t < EV.ct_bang + 0.3 ? 0.06 : 0 }); },
    cam: () => [[S0.court, 540, 1000, 0.12], [EV.ct_sue, 540, 960, 0.2], [EV.ct_tax, 480, 940, 0.2], [EV.ct_not, 600, 1200, 0.26, 'x'], [EV.ct_42, 460, 1060, 0.24], [EV.ct_bang, 520, 980, 0.26, 'x'], [S1.court, 520, 1000, 0.24]]
  };
  PROPS.chipSaddleP = () => saddleChip(0, -40, 0.6, 0.2);
  TRANS_IN.court = { a: 0.12, b: 0.45, runA: 1, fx(k, t, A, B) {             // удар молотка раскалывает кадр: трещина сверху вниз, половины падают
    const q = sm(clamp((k - 0.2) / 0.8)); drawBuf(B, 1, 540, 960); const pts = []; for (let i = 0; i <= 16; i++) { const r = rng(12020 + i); pts.push([540 + (r() - 0.5) * 160, -40 + i * (H + 80) / 16]); }
    for (const sd of [-1, 1]) { ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.moveTo(sd < 0 ? -50 : W + 50, -40); pts.forEach(([x, y]) => ctx.lineTo(x, y)); ctx.lineTo(sd < 0 ? -50 : W + 50, H + 40); ctx.closePath(); ctx.clip(); ctx.translate(sd * q * 300, q * q * 1600); ctx.rotate(sd * q * 0.3); ctx.drawImage(A, 0, 0); ctx.restore(); }
    scr(() => { if (k < 0.3) { push(540, lerp(-300, 200, k / 0.3), 4, -0.5); PROPS.gavelP(); pop(); } });
  } };
})();
