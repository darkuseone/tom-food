/* 006 — `bursa`: «В девятнадцатом веке вертел встал стоймя — Бурса и Кастамону спорят, кто первый.» Крытый рынок Бурсы XIX века: зелёные изразцы, своды,
   ряды шёлка, медная посуда, покупатели в фесках. Посреди — мангал: на «стоймя» горизонтальный вертел со скрипом поднимается вертикально, жар встаёт стеной.
   На «Бурса» слева загорается вывеска БУРСА и повар-усач бьёт себя в грудь, на «Кастамону» справа — вывеска КАСТАМОНУ и второй повар; на «кто первый?» оба
   тянут вертел к себе. Том в феске-рефери разводит лапами. Переход В сцену: прошлый кадр «встаёт» — поворачивается на 90° вокруг угла. */
(() => {
  EV.br_up = wtw('s2', 'стоймя');
  EV.br_b = wtw('s2', 'Бурса');
  EV.br_k = wtw('s2', 'Кастамону');
  EV.br_who = wtw('s2', 'первый.');
  SHAKES.push([EV.br_up + 0.45, 0.25, 12]);
  KEYW.push('стоймя');

  function bazaar(t) { vgrad(-600, 1300, ['#2a4a3a', '#3a6050', '#4a7058']); for (let i = 0; i < 5; i++) { const x = -260 + i * 330; blob([[x, 700], [x, 300], [x + 165, 160], [x + 330, 300], [x + 330, 700]], { wash: '#d8c8a0', washA: 1, w: 3, col: '#3a2a14' }); blob([[x + 40, 700], [x + 40, 340], [x + 165, 230], [x + 290, 340], [x + 290, 700]], { wash: '#1a3a30', washA: 1, w: 2, col: '#0a1a14' }); }
    for (let y = 0; y < 3; y++) for (let x = 0; x < 16; x++) { const xx = -300 + x * 110, yy = 700 + y * 60; rect(xx, yy, 110, 60, { wash: (x + y) % 2 ? '#2a7a6a' : '#3a9a8a', washA: 1, w: 1.4, col: '#0a2a24' }); ell(xx + 55, yy + 30, 14, 14, { wash: '#f2ead6', washA: 0.8, line: false }); }
    for (let i = 0; i < 7; i++) { const x = -200 + i * 200, sw = Math.sin(t * 1.5 + i) * 8; blob([[x, 880], [x + 120, 880], [x + 110 + sw, 1060], [x + 10 + sw, 1070]], { wash: ['#c8282a', '#d6a842', '#2a6ab8', '#8a3aa8', '#2a8a5a'][i % 5], washA: 1, w: 1.8, col: '#2a1a0a' }); }
    for (let i = 0; i < 5; i++) ell(80 + i * 240, 1140, 40, 30, { wash: '#c87a3a', washA: 1, w: 2.4, col: '#5a2a0a' }); }
  function signs(t) { for (const [x, name, ev, sd] of [[180, 'БУРСА', 'br_b', 1], [900, 'КАСТАМОНУ', 'br_k', -1]]) { const on = t > EV[ev] - 0.05, p = on ? popK(t, EV[ev]) : 0;
      if (on) { push(x, 520, p, sd * -0.05); rect(-170, -50, 340, 100, { wash: '#2a1a0a', washA: 1, w: 4, col: '#d6a842' }); txt(name, 0, 14, name.length > 6 ? 40 : 56, { font: 'Osw', col: '#f2d040' }); pop(); }
      const who = t > EV.br_who; human(x, 1280, 0.82, t, { body: sd > 0 ? '#a8282a' : '#2a5a8a', hair: '#1a1a1a', face: !on ? 'calm' : who ? 'angry' : 'grin', armL: 'hold', armR: on ? (who ? 'point' : 'up') : 'hold', seed: 620 + (sd > 0 ? 0 : 1), flip: sd, look: -sd * 0.6, beard: true });
      hat20(x, 1280, 0.82, 'cloche', '#b8182a', sd); stache(x, 1280, 0.82, sd); if (on && t > EV.br_who) bubbleTag('Я ПЕРВЫЙ!', x, 960, t, EV.br_who + (sd > 0 ? 0 : 0.2), sd > 0 ? '#a8282a' : '#2a5a8a', 30, sd * 0.06); } }
  function spit(t) { const up = sm(clamp((t - EV.br_up) / 0.5)); push(540, 1400, 1); rect(-240, 0, 480, 80, { wash: '#4a4a50', washA: 1, w: 3, col: '#1a1a1a' }); for (let i = 0; i < 10; i++) ell(-200 + i * 44, 6, 20, 10, { wash: '#ff7a20', washA: 0.9, line: false }); glow(0, 0, 220, 'rgba(255,130,50,1)', 0.45);
      push(0, -20, 1, lerp(-Math.PI / 2, 0, up)); donerCone(0, 0, 0.8, t, { kind: 'lamb', heat: up > 0.9 }); pop(); pop();
    if (t > EV.br_up + 0.4) bubbleTag('СТОЙМЯ!', 540, 820, t, EV.br_up + 0.4, '#d6a842', 40, -0.05); }
  WORLD.bursa = (t, u, cat) => { lay(12, () => bazaar(t)); lay(2.4, () => signs(t)); lay(1.3, () => spit(t)); lay(1, () => { rect(-300, 1470, 1700, 600, { wash: '#8a7a5a', washA: 1, w: 2, col: '#2a2010', key: 6500 }); cat(); }); };
  DIR.bursa = {
    outfit: 'bursaA', light: { side: -1, rim: '#ffe0a0' }, grade: ['#3a9a7a', 0.06],
    act: () => [[S0.bursa, 'talk'], [EV.br_up, 'shock'], [EV.br_up + 0.5, 'awe'], [EV.br_b, 'sideeye'], [EV.br_who, 'annoyed']],
    pose: (t, u, b) => Object.assign(b, { x: 800, y: 1790, s: 1.08, flip: true, look: t < EV.br_b ? [-0.5, -0.6] : t < EV.br_k ? [-0.9, -0.3] : [0.6, -0.3], hand: t > EV.br_who ? [170, -300] : [140, -320], handF: t > EV.br_who ? [-170, -300] : [-90, -230], point: t < EV.br_b ? 1 : 0 }),
    cam: () => [[S0.bursa, 540, 1100, 0.14], [EV.br_up, 540, 1050, 0.2, 'x'], [EV.br_b, 400, 960, 0.12], [EV.br_k, 640, 960, 0.12], [EV.br_who, 560, 1100, 0.14, 'x'], [S1.bursa, 560, 1100, 0.18]]
  };
  // ---------------------------------------------------------------- переход: прошлый кадр «встаёт» — поворачивается на 90° вокруг нижнего левого угла
  TRANS_IN.bursa = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = sm(k); drawBuf(B, 1, 540, 960); scr(() => { ctx.save(); ctx.translate(0, H); ctx.rotate(-q * Math.PI / 2); ctx.translate(0, -H); ctx.drawImage(A, 0, 0); ctx.fillStyle = `rgba(255,150,60,${0.3 * q})`; ctx.fillRect(0, 0, W, H); ctx.restore(); });
  } };
})();
