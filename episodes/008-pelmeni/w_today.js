/* 008 — `today` + `button`: «Ну что, сколько хлебных ушей съешь за раз?» Тёплая кухня вечером: окно с огнями, клетчатая скатерть. Хиро-шот — большая тарелка
   дымящихся пельменей со сметаной, укропом и перцем, рядом уксус и чёрный хлеб. На «сколько» над тарелкой выскакивает счётчик-табло, который щёлкает 1…2…3…,
   на «ушей» вместо цифры — знак вопроса и стрелка к зрителю. `button`: Том откусывает пельмень с вилки и подмигивает.
   Переход В сцену: ложка сметаны шлёпается на кадр и растекается. */
(() => {
  EV.td_how = wtw('t1', 'сколько');
  EV.td_ears = wtw('t1', 'ушей');
  EV.bt_wink = wtw('x1', 'откусим!');
  KEYW.push('раз?');

  function kitchen(t) { vgrad(-600, 1500, ['#3a2a3a', '#5a3a3a', '#7a4a3a']); const w = rect(560, 220, 440, 480, { wash: '#14183a', washA: 1, w: 12, col: '#f2e8d8', key: 10700 }); ctx.save(); ctx.clip(w.path); windows(580, 260, 400, 420, 6, 6, 10701, 0.5, '#ffd890', '#24284a', 1); ctx.restore(); pencil([[780, 220], [780, 700]], { w: 8, col: '#f2e8d8' });
    for (let i = 0; i < 4; i++) { push(120 + i * 110, 520, 1); rect(-40, -60, 80, 120, { wash: ['#c8282a', '#e8a040', '#3aa84a', '#f2e8c8'][i], washA: 0.85, w: 2, col: '#2a1a0a' }); pop(); } rect(40, 590, 480, 16, { wash: '#6a4a2a', washA: 1, w: 2 }); glow(300, 300, 400, 'rgba(255,220,150,1)', 0.3); }
  function table(t) { const tb = rect(-300, 1300, 1700, 700, { wash: '#f6f0e2', washA: 1, w: 3, col: '#8a7a5a', key: 10710 }); for (let i = 0; i < 14; i++) pencil([[-300 + i * 120, 1300], [-300 + i * 120, 2000]], { w: 18, col: '#2a6ab8', a: 0.2, pass2: false }); for (let i = 0; i < 6; i++) pencil([[-300, 1340 + i * 120], [1400, 1340 + i * 120]], { w: 18, col: '#2a6ab8', a: 0.2, pass2: false });
    pelmenPlate(460, 1450, 1.6, t); push(120, 1400, 1); rect(-30, -140, 60, 140, { wash: '#e8eef2', washA: 0.7, w: 2, col: '#6a7a8a' }); rect(-20, -80, 40, 70, { wash: '#f2e8a0', washA: 0.5, line: false }); txt('УКСУС', 0, -40, 14, { font: 'Osw', col: '#2a2a2a' }); pop(); rect(760, 1360, 160, 80, { wash: '#3a2414', washA: 1, w: 2, col: '#140a04' });
    if (t > EV.td_how - 0.1) { push(460, 1060, popK(t, EV.td_how - 0.1, 0.4)); rect(-130, -70, 260, 140, { wash: '#1a1a1a', washA: 1, w: 5, col: '#d6a842' }); const n = t < EV.td_ears ? 1 + Math.floor((t - EV.td_how) * 6) : -1; txt(n > 0 ? String(n) : '?', 0, 30, 96, { font: 'Osw', col: n > 0 ? '#5ae08a' : '#f2c838' }); pop(); if (t > EV.td_ears) bubbleTag('А ТЫ?', 700, 980, t, EV.td_ears + 0.1, '#d9282b', 40, 0.06); } }
  WORLD.today = (t, u, cat) => { lay(10, () => kitchen(t)); lay(1, () => { table(t); cat(); }); };
  DIR.today = {
    outfit: 'chef', light: { side: -1, rim: '#ffd8a0' }, grade: ['#e88a5a', 0.08],
    act: () => [[S0.today, 'sideeye'], [EV.td_how, 'grin'], [EV.td_ears, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 860, y: 1800, s: 1.14, flip: t < EV.td_ears, look: t < EV.td_ears ? [-0.6, 0.3] : [0, 0], hand: [150, -330], handF: [-90, -230], prop: 'forkPelmenP' }),
    cam: () => [[S0.today, 560, 1250, 0.2], [EV.td_how, 520, 1200, 0.18], [EV.td_ears, 660, 1250, 0.24, 'x'], [S1.today, 660, 1250, 0.26]]
  };
  // ---------------------------------------------------------------- переход: ложка сметаны шлёпается на кадр и растекается, открывая новую сцену
  TRANS_IN.today = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const drop = clamp(k / 0.3), sp = sm(clamp((k - 0.3) / 0.7)); drawBuf(sp > 0.6 ? B : A, 1, 540, 960); scr(() => { if (k < 0.3) { const y = lerp(-200, 960, drop * drop); blob([[540, y - 90], [600, y - 20], [560, y + 50], [500, y + 40], [480, y - 20]], { wash: PL.smet, washA: 1, w: 2, col: '#c8c0a8' }); }
      else { const R = sp * 1700, pts = []; for (let i = 0; i < 30; i++) { const a = i / 30 * 6.283; pts.push([540 + Math.cos(a) * R * (1 + 0.12 * Math.sin(a * 5)), 960 + Math.sin(a) * R * (1 + 0.12 * Math.cos(a * 4))]); } const p = spline(pts, true, 3); if (sp <= 0.6) shape(p, { wash: PL.smet, washA: 1, w: 3, col: '#c8c0a8' }); else { ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, H); ctx.clip(); ctx.globalAlpha = 1 - (sp - 0.6) / 0.4; ctx.fillStyle = PL.smet; ctx.fillRect(0, 0, W, H); ctx.restore(); } } });
  } };
})();

(() => {                                                          // кнопка: Том откусывает пельмень с вилки и подмигивает на «откусим»
  WORLD.button = (t, u, cat) => { lay(10, () => { vgrad(-600, 1500, ['#3a2a3a', '#5a3a3a', '#7a4a3a']); glow(300, 300, 400, 'rgba(255,220,150,1)', 0.3); });
    lay(1.15, () => { rect(-300, 1340, 1700, 700, { wash: '#f6f0e2', washA: 1, w: 3, col: '#8a7a5a', key: 10720 }); pelmenPlate(300, 1470, 1.2, t); }); lay(1, () => cat()); };
  DIR.button = { outfit: 'chef', light: { side: -1, rim: '#ffd8a0' }, grade: ['#e88a5a', 0.08], act: () => [[S0.button, 'grin'], [EV.bt_wink, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 720, y: 1820, s: 1.3, look: [0, 0], hand: t > EV.bt_wink - 0.3 ? [60, -360] : [110, -320], handF: [-110, -260], prop: t > EV.bt_wink ? 'forkBiteP' : 'forkPelmenP', tailUp: true }), cam: () => [[S0.button, 700, 1180, 0.24], [DUR, 680, 1200, 0.28]] };
  TRANS_IN.button = { a: 0.1, b: 0.3, runA: 1, fx(k, t, A, B) { drawBuf(k < 0.5 ? A : B, 1 + Math.sin(k * Math.PI) * 0.08, 540, 960); scr(() => whiteOut(Math.sin(k * Math.PI) * 0.8, '255,244,220')); } };
})();
