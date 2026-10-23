/* 006 — `name`: «"Дёнер" значит "вращающийся". Арабы взяли слово "чевирме" — "поворот" — и вышла шаурма.» Вечерняя улочка Леванта: каменные арки, кованые
   фонари, медные лампы, ставни, торговец с подносом. Над лавкой — вращающаяся вывеска-барабан (4 грани): DÖNER → ÇEVİRME → «ПОВОРОТ» → ШАУРМА, на каждом слове
   барабан проворачивается. На «вращающийся» сам Том-сыщик крутится на табурете. Переход В сцену: длинный нож срезает с кадра стружку, она падает. */
(() => {
  EV.nm_rot = wtw('s3', '«вращающийся».');
  EV.nm_ar = wtw('s3', 'Арабы');
  EV.nm_cev = wtw('s3', '«чевирме»');
  EV.nm_pov = wtw('s3', '«поворот»');
  EV.nm_sh = wtw('s3', 'шаурма.');
  SHAKES.push([EV.nm_sh + 0.1, 0.2, 8]);
  KEYW.push('шаурма.');

  const FACES = [['DÖNER', '#f2d040'], ['ÇEVİRME', '#8ae0ff'], ['«ПОВОРОТ»', '#ffb0a0'], ['ШАУРМА', '#fff4d0']];
  function street(t) { vgrad(-600, 1300, ['#1a2a5a', '#5a4a7a', '#e8986a']); for (let i = 0; i < 3; i++) { const x = -260 + i * 520; rect(x, 200, 480, 1000, { wash: ['#c8a880', '#b89870', '#d8b890'][i], washA: 1, w: 3, col: '#4a3a2a' }); for (let r = 0; r < 12; r++) pencil([[x, 220 + r * 80], [x + 480, 220 + r * 80]], { w: 1.6, col: '#8a6a4a', a: 0.4, pass2: false });
      blob([[x + 120, 1200], [x + 120, 760], [x + 240, 640], [x + 360, 760], [x + 360, 1200]], { wash: '#2a1a14', washA: 1, w: 3, col: '#1a0a04' }); rect(x + 60, 330, 140, 180, { wash: '#3a5a7a', washA: 1, w: 4, col: '#5a3a1a' }); rect(x + 280, 330, 140, 180, { wash: '#fff0b0', washA: 0.7, w: 4, col: '#5a3a1a' }); }
    for (let i = 0; i < 4; i++) { const x = 100 + i * 300, sw = Math.sin(t * 1.6 + i) * 0.08; push(x, 580, 1, sw); pencil([[0, -120], [0, 0]], { w: 2, col: '#3a2a1a', pass2: false }); poly([[-30, 0], [30, 0], [20, 60], [-20, 60]], { wash: '#c8862a', washA: 1, w: 2, col: '#3a1a04' }); glow(0, 40, 90, 'rgba(255,200,100,1)', 0.6); pop(); } }
  function stall(t) { rect(260, 900, 560, 340, { wash: '#5a3a24', washA: 1, w: 3, col: '#1a0a04', key: 6600 }); donerCone(540, 1220, 0.55, t, { kind: 'chicken', shave: true }); rect(260, 1180, 560, 60, { wash: '#8a6a44', washA: 1, w: 2, col: '#2a1a0a' });
    human(380, 1240, 0.78, t, { body: '#f2ead6', hair: '#2a1a0a', face: t > EV.nm_sh ? 'grin' : 'smile', armL: 'hold', armR: 'swing', seed: 630, beard: true, prop: null });
    // вывеска-барабан
    let idx = 0; for (const [i, e] of [[1, 'nm_cev'], [2, 'nm_pov'], [3, 'nm_sh']]) if (t > EV[e] - 0.2) idx = i; const lastT = [S0.name, EV.nm_cev - 0.2, EV.nm_pov - 0.2, EV.nm_sh - 0.2][idx], k = sm(clamp((t - lastT) / 0.35));
    push(540, 790, 1); pencil([[-300, -100], [300, -100]], { w: 6, col: '#3a2a1a' }); for (const sd of [-1, 1]) pencil([[sd * 300, -100], [sd * 300, 0]], { w: 4, col: '#3a2a1a', pass2: false });
    const prev = FACES[Math.max(0, idx - 1)], cur = FACES[idx]; const h1 = idx > 0 ? Math.cos(k * Math.PI / 2) : 0, h2 = idx > 0 ? Math.sin(k * Math.PI / 2) : 1;
    if (h1 > 0.02) { rect(-280, -60 - 60 * h1 + 60 * (1 - h1), 560, 120 * h1, { wash: '#2a1a0a', washA: 1, w: 4, col: '#d6a842' }); txt(prev[0], 0, 14 - 60 * (1 - h1), 66 * h1, { font: 'Osw', col: prev[1] }); }
    rect(-280, 60 - 120 * h2 + (idx > 0 ? 0 : 0), 560, 120 * h2, { wash: '#2a1a0a', washA: 1, w: 4, col: '#d6a842' }); txt(cur[0], 0, 60 - 60 * h2 + 14, 66 * h2, { font: 'Osw', col: cur[1] }); if (idx === 3) glow(0, 0, 300, 'rgba(255,220,150,1)', 0.4 * k); pop(); }
  WORLD.name = (t, u, cat) => { lay(12, () => street(t)); lay(1.5, () => stall(t)); lay(1, () => { rect(-300, 1460, 1700, 600, { wash: '#a89070', washA: 1, w: 2, col: '#3a2a14', key: 6610 }); for (let i = 0; i < 12; i++) for (let j = 0; j < 4; j++) ell(-260 + i * 140 + (j % 2) * 70, 1500 + j * 110, 60, 40, { line: true, w: 1.4, col: '#6a5a3a', a: 0.5 }); cat(); }); };
  DIR.name = {
    outfit: 'sleuth', light: { side: 1, rim: '#ffd8a0' }, grade: ['#e8986a', 0.06],
    act: () => [[S0.name, 'talk'], [EV.nm_rot, 'grin'], [EV.nm_ar, 'suspicious'], [EV.nm_pov, 'awe'], [EV.nm_sh, 'laugh']],
    pose: (t, u, b) => { const spin = clamp((t - EV.nm_rot) / 0.9); return Object.assign(b, { x: 800, y: 1800, s: 1.1, flip: spin > 0 && spin < 1 ? Math.sin(spin * Math.PI * 4) > 0 : true, look: [-0.6, -0.7], hand: [140, -330], handF: [-90, -230], prop: 'magnifier', point: t > EV.nm_ar ? 1 : 0 }); },
    cam: () => [[S0.name, 540, 1000, 0.14], [EV.nm_rot, 700, 1300, 0.2, 'x'], [EV.nm_ar, 560, 1060, 0.12], [EV.nm_sh, 560, 1060, 0.16, 'x'], [S1.name, 560, 1060, 0.18]]
  };
  // ---------------------------------------------------------------- переход: нож срезает с кадра стружку по диагонали, она падает
  TRANS_IN.name = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const q = sm(k); scr(() => { ctx.save(); ctx.translate(q * 300, q * q * 2400); ctx.rotate(q * 0.5); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(W, 0); ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
      const kx = lerp(-200, 1300, clamp(k * 2)); push(kx, 300 + kx * 0.8, 3, 0.9); PROPS.knifeLongP(); pop(); });
  } };
})();
