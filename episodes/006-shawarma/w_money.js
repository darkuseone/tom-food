/* 006 — `money`: «Только в Германии дёнер приносит 2,3 миллиарда евро в год.» Современная дёнерная: светящееся меню-табло, плитка, очередь клиентов с телефонами,
   холодильник с напитками. Вертел вместо мяса постепенно «обрастает» монетами; на «2,3 миллиарда» старинная касса бьёт чек, цифры барабаном крутятся до
   2 300 000 000 €, монеты сыплются со стойки. На «в год» — календарь срывает листы. Том в костюме-тройке считает на счётах. Переход В сцену: гигантская
   монета подбрасывается и переворачивается, закрывая кадр. */
(() => {
  EV.mn_de = wtw('s8', 'Германии');
  EV.mn_sum = wtw('s8', '2,3');
  EV.mn_year = wtw('s8', 'год.');
  SHAKES.push([EV.mn_sum + 0.1, 0.25, 12]);
  KEYW.push('миллиарда');

  function shop(t) { vgrad(-600, 1300, ['#2a2a30', '#3a3a44', '#4a4a54']); for (let y = 0; y < 16; y++) for (let x = 0; x < 14; x++) rect(-300 + x * 120, -300 + y * 90, 120, 90, { line: true, w: 1, col: '#5a5a66', a: 0.5 });
    for (let i = 0; i < 3; i++) { const x = 160 + i * 300; rect(x, 360, 280, 200, { wash: '#14141a', washA: 1, w: 3, col: '#e8e8e8' }); glow(x + 140, 460, 200, 'rgba(255,220,160,1)', 0.25); txt(['DÖNER', 'DÜRÜM', 'BOX'][i], x + 140, 410, 40, { font: 'Osw', col: '#f2d040' }); [() => donerBun(x + 140, 500, 0.5, 0), () => shawarmaRoll(x + 140, 520, 0.35, 1.57), () => taco(x + 140, 510, 0.5, 0)][i](); }
    rect(980, 700, 200, 520, { wash: '#c8e8f0', washA: 0.6, w: 3, col: '#3a3a3a' }); for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) rect(990 + c * 60, 720 + r * 120, 40, 100, { wash: ['#c8282a', '#f2a020', '#2a8a4a'][(r + c) % 3], washA: 1, w: 1.2 });
    for (let i = 0; i < 4; i++) { human(-40 + i * 150, 1240, 0.72, t, { body: ['#2a6ab8', '#c8282a', '#3a8a5a', '#e8a040'][i], hair: ['#1a1a1a', '#c8a050', '#5a3a1a', '#2a1a0a'][i], face: t > EV.mn_sum ? 'shock' : 'smile', armL: 'hold', armR: i % 2 ? 'up' : 'hold', prop: i % 2 ? 'phone' : null, seed: 680 + i, look: 0.6, long: i === 1 ? 1 : 0 }); } }
  function counter(t) { const tb = rect(-300, 1260, 1700, 200, { wash: '#8a8a90', washA: 1, w: 3, col: '#2a2a30', key: 7100 }); shadeG(tb.path, 540, 1260, 540, 1460, '#2a2a30', 0.5);
    // вертел из монет
    donerCone(560, 1270, 0.55, t, { kind: 'lamb', heat: false }); const g = clamp((t - EV.mn_de) / (EV.mn_sum - EV.mn_de + 0.3)); for (let i = 0; i < 40 * g; i++) { const r = rng(7110 + i), a = r() * 6.283 + t * 1.6; if (Math.cos(a) < 0) continue; const x = 560 + Math.sin(a) * (40 + (r() * 0.6 + 0.2) * 34), y = 1250 - r() * 250; ell(x, y, 12, 8, { wash: '#f2c838', washA: 1, w: 1.4, col: '#8a6a0a' }); }
    // касса
    push(850, 1250, 1); rect(-120, -200, 240, 200, { wash: '#a87a3a', washA: 1, w: 3, col: '#3a1a04' }); rect(-100, -260, 200, 70, { wash: '#1a1a1a', washA: 1, w: 2 }); const k = clamp((t - EV.mn_sum) / 0.9); const val = Math.floor(lerp(0, 2.3, sm(k)) * 10) / 10;
    txt(t > EV.mn_sum ? val.toFixed(1).replace('.', ',') + ' млрд €' : '0 €', 0, -214, 34, { font: 'Osw', col: '#5ae08a' }); for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) ell(-80 + c * 52, -150 + r * 46, 16, 14, { wash: '#f2ead6', washA: 1, w: 1.6 }); pop();
    if (t > EV.mn_sum) { bubbleTag('2 300 000 000 €', 700, 940, t, EV.mn_sum + 0.3, '#2a8a4a', 44, -0.04); const q = t - EV.mn_sum; if (q < 2) for (let i = 0; i < 20; i++) { const r = rng(7130 + i); ell(400 + r() * 600, 1240 + ((q * (300 + r() * 300) + r() * 200) % 500), 13, 9, { wash: '#f2c838', washA: 1, w: 1.4, col: '#8a6a0a' }); } }
    if (t > EV.mn_year - 0.1) { push(230, 980, 1); rect(-80, -100, 160, 200, { wash: '#fbfbf6', washA: 1, w: 3, col: '#3a3a3a' }); rect(-80, -100, 160, 50, { wash: '#c8282a', washA: 1, w: 2 }); txt('365', 0, 40, 60, { font: 'Osw', col: '#2a2a2a' }); const f = clamp((t - EV.mn_year) / 0.4); if (f < 1) poly([[-80, -50], [80, -50], [80 - f * 40, 100 - f * 200], [-80 + f * 30, 100 - f * 160]], { wash: '#fbfbf6', washA: 1 - f, w: 2, col: '#8a8a8a' }); pop(); } }
  WORLD.money = (t, u, cat) => { lay(10, () => shop(t)); lay(1.25, () => counter(t)); lay(1, () => cat()); };
  DIR.money = {
    outfit: 'lawyer', light: { side: 1, rim: '#ffe8a0' }, grade: ['#c8a030', 0.08],
    act: () => [[S0.money, 'talk'], [EV.mn_de, 'smug'], [EV.mn_sum, 'shock'], [EV.mn_sum + 0.6, 'awe'], [EV.mn_year, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 880, y: 1810, s: 1.1, flip: true, apron: 1, look: t < EV.mn_sum ? [-0.6, -0.3] : [-0.3, -0.8], hand: [150, -320], handF: [-90, -230], point: t > EV.mn_sum ? 1 : 0, sweat: t > EV.mn_sum ? 1 : 0 }),
    cam: () => [[S0.money, 560, 960, 0.1], [EV.mn_de, 560, 1100, 0.16], [EV.mn_sum, 680, 1120, 0.2, 'x'], [EV.mn_year, 600, 1100, 0.16], [S1.money, 600, 1100, 0.18]]
  };
  // ---------------------------------------------------------------- переход: гигантская монета взлетает и переворачивается, закрывая кадр
  TRANS_IN.money = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    drawBuf(k < 0.5 ? A : B, 1, 540, 960); const sy = Math.abs(Math.cos(k * Math.PI * 2)), sc = Math.sin(k * Math.PI);
    scr(() => { if (sc < 0.05) return; push(540, 960, sc * 1.6); ctx.save(); ctx.scale(1, Math.max(0.03, sy)); ell(0, 0, 700, 700, { wash: '#f2c838', washA: 1, w: 10, col: '#8a6a0a' }); ell(0, 0, 600, 600, { line: true, w: 6, col: '#c89a18' }); txt('€', 0, 120, 420, { font: 'Osw', col: '#c89a18' }); ctx.restore(); pop(); });
  } };
})();
