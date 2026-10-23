/* 007 — `today` + `button`: «А на фото корейцы говорят не "чиз", а "кимчи"! Скажем вместе?» Весенний парк у дворца: черепичные ворота, цветущие вишни,
   фотограф со штативом снимает семью в ханбоках. На «не "чиз"» над ними — клинышек сыра перечёркнут; на «кимчи!» все хором улыбаются, вспышка, слово КИМЧИ!
   облачком. Передний план — хиро-шот: миска глянцевого кимчи с кунжутом. На «Скажем вместе?» Том поворачивается к зрителю с палочками. `button`: Том ест кимчи
   и подмигивает. Переход В сцену: полароид — новый кадр «проявляется» в белой рамке. */
(() => {
  EV.td_ch = wtw('t1', '«чиз»,');
  EV.td_km = wtw('t1', '«кимчи»!');
  EV.td_tog = wtw('t1', 'Скажем');
  EV.bt_wink = wtw('x1', 'откусим!');
  SHAKES.push([EV.td_km + 0.1, 0.18, 8]);
  KEYW.push('«кимчи»!');

  function park(t) { vgrad(-600, 1100, ['#8ac8f0', '#c8e6f8', '#fff4f0']); push(540, 760, 1); rect(-300, -120, 600, 240, { wash: '#c8282a', washA: 1, w: 3, col: '#4a0a0a' }); for (let i = 0; i < 4; i++) rect(-260 + i * 150, -100, 90, 220, { wash: '#2a6a5a', washA: 1, w: 2, col: '#0a2a1a' });
      shape(spline([[-380, -100], [-300, -60], [0, -100], [300, -60], [380, -100], [300, -170], [0, -210], [-300, -170]], true, 8), { wash: '#3a3a44', washA: 1, w: 3, col: '#14141a' }); for (let i = 0; i < 14; i++) pencil([[-300 + i * 46, -100], [-290 + i * 46, -170]], { w: 2, col: '#5a5a64', a: 0.6, pass2: false }); pop();
    for (const x of [60, 1020]) { pencil([[x, 1100], [x + 20, 700]], { w: 22, col: '#4a2a1a' }); for (let i = 0; i < 14; i++) { const r = rng(8800 + i + x); ell(x + (r() - 0.5) * 320, 620 + (r() - 0.5) * 260, 40 + r() * 30, 34 + r() * 20, { wash: i % 3 ? '#f8c8d8' : '#fbe0ea', washA: 0.95, line: false }); } }
    for (let i = 0; i < 14; i++) { const r = rng(8820 + i), y = ((t * 60 + r() * 2000) % 1600) - 200, x = r() * 1200 + Math.sin(t + i) * 40; ell(x, y, 7, 4, { wash: '#f8c8d8', washA: 0.9, line: false, rot: t + i }); } rect(-300, 1060, 1700, 500, { wash: '#a8c880', washA: 1, w: 2, col: '#4a6a2a' }); }
  function shoot(t) { const smile = t > EV.td_km - 0.1; for (let i = 0; i < 4; i++) { const x = 200 + i * 130, s = [0.82, 0.78, 0.55, 0.5][i]; human(x, 1240, s, t, { body: ['#2a6ab8', '#e86a8a', '#f2c838', '#3aa84a'][i], hair: '#1a1a1a', face: smile ? 'grin' : 'smile', armL: smile ? 'up' : 'hold', armR: smile && i % 2 ? 'point' : 'hold', seed: 920 + i, long: i % 2, look: 0.2 }); }
    push(820, 1250, 1); for (const a of [-0.3, 0, 0.3]) pencil([[0, -200], [Math.sin(a) * 120, 0]], { w: 5, col: '#3a3a3a' }); rect(-60, -260, 120, 80, { wash: '#2a2a2a', washA: 1, w: 2 }); ell(-60, -220, 30, 30, { wash: '#4a4a5a', washA: 1, w: 2 }); pop(); human(900, 1250, 0.78, t, { body: '#5a5a5a', hair: '#3a2a1a', face: 'grin', armL: 'hold', armR: 'up', seed: 930, flip: -1, look: -0.6 });
    if (t > EV.td_ch - 0.1 && t < EV.td_km - 0.05) { const p = popK(t, EV.td_ch - 0.1, 0.4); push(560, 980, p); poly([[-70, 40], [70, 40], [70, -20], [-70, -60]], { wash: '#f2c838', washA: 1, w: 3, col: '#8a6a0a' }); for (const [x, y] of [[-30, 0], [20, 10], [40, -20]]) ell(x, y, 10, 8, { wash: '#c8a020', washA: 1, line: false }); pencil([[-90, -80], [90, 70]], { w: 14, col: '#d9282b', pass2: false }); pencil([[90, -80], [-90, 70]], { w: 14, col: '#d9282b', pass2: false }); pop(); }
    if (smile) { if (t < EV.td_km + 0.25) whiteOut(0.6 * (1 - (t - EV.td_km + 0.1) / 0.35), '255,255,255'); bubbleTag('КИМЧИ!', 400, 880, t, EV.td_km + 0.1, '#d9282b', 60, -0.06); } }
  function hero(t) { kimchiBowl(460, 1520, 1.6, t); for (let q = 0; q < 4; q++) { const k = (t * 0.5 + q / 4) % 1; ell(400 + q * 40, 1380 - k * 60, 4, 4, { wash: '#ffffff', washA: 0.6 * (1 - k), line: false }); } }
  WORLD.today = (t, u, cat) => { lay(12, () => park(t)); lay(1.4, () => shoot(t)); lay(1, () => { rect(-300, 1460, 1700, 600, { wash: '#c8b890', washA: 1, w: 2, col: '#5a4a2a', key: 8810 }); cat(); hero(t); }); };
  DIR.today = {
    outfit: 'hanbokA', light: { side: -1, rim: '#fff0f4' }, grade: ['#f0a0b8', 0.05],
    act: () => [[S0.today, 'talk'], [EV.td_ch, 'sideeye'], [EV.td_km, 'laugh'], [EV.td_tog, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 860, y: 1800, s: 1.12, flip: t < EV.td_tog, look: t < EV.td_tog ? [-0.6, -0.4] : [0, 0], hand: t < EV.td_tog ? [150, -320] : [120, -340], handF: [-90, -230], prop: 'chopKimchiP', tailUp: t > EV.td_km }),
    cam: () => [[S0.today, 540, 1000, 0.12], [EV.td_ch, 460, 1050, 0.16], [EV.td_km, 500, 1100, 0.14, 'x'], [EV.td_tog, 680, 1250, 0.24, 'x'], [S1.today, 680, 1250, 0.26]]
  };
  // ---------------------------------------------------------------- переход: полароид — новый кадр проявляется в белой рамке
  TRANS_IN.today = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {
    const q = sm(k), fr = Math.sin(k * Math.PI); drawBuf(k < 0.3 ? A : B, 1, 540, 960); scr(() => { if (k >= 0.3) { ctx.fillStyle = `rgba(30,40,70,${0.85 * (1 - clamp((k - 0.3) / 0.6))})`; ctx.fillRect(0, 0, W, H); }
      const m = 60 * fr, mb = 260 * fr; ctx.fillStyle = '#fbfbf6'; ctx.fillRect(0, 0, W, m); ctx.fillRect(0, 0, m, H); ctx.fillRect(W - m, 0, m, H); ctx.fillRect(0, H - mb, W, mb); if (fr > 0.5) txt('2013 → СЕГОДНЯ', 540, H - mb / 2, 54, { font: 'Hand', col: '#3a3a4a', a: (fr - 0.5) * 2 }); });
  } };
})();

(() => {                                                          // кнопка: Том с палочками и миской кимчи, ест и подмигивает на «откусим»
  WORLD.button = (t, u, cat) => { lay(12, () => { vgrad(-600, 1500, ['#8ac8f0', '#c8e6f8', '#fff4f0']); for (let i = 0; i < 14; i++) { const r = rng(8830 + i), y = ((t * 60 + r() * 2000) % 1600) - 200; ell(r() * 1200, y, 7, 4, { wash: '#f8c8d8', washA: 0.9, line: false, rot: t + i }); } });
    lay(1.15, () => { rect(-300, 1340, 1700, 700, { wash: '#c8b890', washA: 1, w: 3, col: '#5a4a2a', key: 8840 }); kimchiBowl(300, 1460, 1.2, t); }); lay(1, () => cat()); };
  DIR.button = { outfit: 'hanbokA', light: { side: -1, rim: '#fff0f4' }, grade: ['#f0a0b8', 0.06], act: () => [[S0.button, 'grin'], [EV.bt_wink, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 720, y: 1820, s: 1.3, look: [0, 0], hand: t > EV.bt_wink - 0.3 ? [60, -360] : [110, -320], handF: [-110, -260], prop: t > EV.bt_wink ? 'chopBiteP' : 'chopKimchiP', tailUp: true }), cam: () => [[S0.button, 700, 1180, 0.24], [DUR, 680, 1200, 0.28]] };
  TRANS_IN.button = { a: 0.1, b: 0.3, runA: 1, fx(k, t, A, B) { drawBuf(k < 0.5 ? A : B, 1 + Math.sin(k * Math.PI) * 0.08, 540, 960); scr(() => whiteOut(Math.sin(k * Math.PI) * 0.8, '255,244,220')); } };
})();
