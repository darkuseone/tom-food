/* 015 — `today`: «Сегодня Испания делает около 47 миллионов окороков и лопаток в год. Хамон или прошутто?» Современная хамонерия вечером: стена-стеллаж
   с сотнями окороков с цветными бирками, неоновая вывеска JAMONERÍA, витрина с нарезкой в вакуумных упаковках, касса, полки с вином и оливковым маслом,
   окно на вечернюю улицу с огоньками, покупатели с пакетами, продавщица-кортадор. Том-официант в чёрном с фартуком. По словам: «Сегодня» — неон загорается;
   «47 миллионов» — табло-счётчик крутится до 47 000 000; «окороков и лопаток» — стена окороков качается, подсветка рядами; «Хамон или прошутто?» — две тарелки:
   слева хамон с флажком Испании, справа прошутто с флажком Италии, подсвечиваются по очереди, Том переводит взгляд. Переход В сцену: нож-хамонеро срезает кадр
   тонким ломтиком, который сворачивается и улетает. */
(() => {
  EV.td_now = LS('t1');
  EV.td_47 = wtw('t1', '47');
  EV.td_legs = wtw('t1', 'окороков');
  EV.td_jam = wtw('t1', 'Хамон');
  EV.td_pro = wtw('t1', 'прошутто?');
  KEYW.push('миллионов', 'прошутто?');

  function shopWall(t) {                                                // стена-стеллаж с окороками, неон, окно, полки с вином и маслом
    vgrad(-600, 1500, ['#1e1414', '#3a2420', '#4a3028']); const on = t > EV.td_now - 0.1;
    push(540, -120, 1); rect(-330, -70, 660, 140, { wash: '#1a0a0a', washA: 1, w: 4, col: '#4a2a2a' }); if (on) glow(0, 0, 420, 'rgba(255,90,90,1)', 0.45 + Math.sin(t * 20) * 0.03); txt('JAMONERÍA', 0, 30, 92, { font: 'Osw', col: on ? '#ff8a8a' : '#6a3a3a' }); pop();
    const lit = t > EV.td_legs ? clamp((t - EV.td_legs) / 0.8) : 0; for (let r = 0; r < 4; r++) { const y = 40 + r * 220; rect(-400, y, 2000, 14, { wash: '#6a4424', washA: 1, w: 1.6 }); if (lit > r / 4) glow(540, y + 120, 900, 'rgba(255,210,140,1)', 0.12);
      for (let i = 0; i < 13; i++) { const x = -340 + i * 140, sw = lit > 0 ? Math.sin(t * 3 + i + r) * 0.06 : Math.sin(t + i) * 0.02; push(x, y + 10, 1, sw); jamonLeg(-28, 200, 0.36, -0.55, { key: 15900 + r * 20 + i, tag: ['black', 'red', 'green', 'white'][(i * 3 + r) % 4] }); pop(); } }
    push(-240, 1080, 1); const w = rect(-130, -160, 260, 280, { wash: '#1a2a4a', washA: 1, w: 8, col: '#2a1a10' }); ctx.save(); ctx.clip(w.path); vgrad(-160, 120, ['#1a1a3a', '#4a3a6a']); for (let i = 0; i < 14; i++) ell(-120 + (i * 53) % 240, -120 + (i * 37) % 200, 6, 6, { wash: '#ffd890', washA: 0.9, line: false }); ctx.restore(); pop();
    for (const y of [980, 1150]) { rect(1000, y, 420, 14, { wash: '#6a4424', washA: 1, w: 1.6 }); for (let i = 0; i < 5; i++) { if (y === 980) oilBottle(1040 + i * 80, y, 0.36, { key: 15950 + i }); else { const x = 1040 + i * 80; shape(spline([[x - 14, y], [x - 16, y - 70], [x - 6, y - 100], [x - 6, y - 130], [x + 6, y - 130], [x + 6, y - 100], [x + 16, y - 70], [x + 14, y]], true, 6), { wash: ['#5a1a2a', '#2a3a1a'][i % 2], washA: 1, w: 1.4, col: '#0a0a04' }); } } }
  }
  function people(t) {                                                  // покупатели с пакетами, продавщица за витриной
    human(80, 1300, 1.0, t, { body: '#5a7a9a', legs: '#2a2a34', hair: '#3a2a1a', face: t > EV.td_47 ? 'shock' : 'smile', armL: 'hold', armR: 'hold', look: 0.4, seed: 15960 }); push(80 + 60, 1300 - 120, 1); rect(-34, -50, 68, 70, { wash: '#f4ecd8', washA: 1, w: 1.4, col: '#5a4a2a' }); txt('J', 0, -6, 30, { font: 'Osw', col: '#c8221a' }); pop();
    human(1030, 1300, 1.0, t, { body: '#f4f4ee', bodyD: '#b8b8b0', legs: '#2a2a34', hair: '#1a1410', face: 'smile', armL: 'hold', armR: t > EV.td_jam ? 'point' : 'hold', look: -0.5, seed: 15961, flip: -1, long: 1 });
  }
  function plates(t) {                                                  // стойка-витрина: две тарелки (хамон / прошутто), табло 47 млн, упаковки, касса
    const tb = rect(-400, 1440, 1900, 800, { wash: '#3a2418', washA: 1, w: 3, col: '#0a0404', key: 15970 }); shadeG(tb.path, 0, 1900, 0, 1440, '#0a0404', 0.4); pencil([[-400, 1446], [1500, 1446]], { w: 8, col: '#c89a5a', pass2: false });
    for (const [i, x, fl, lbl] of [[0, 300, [['#c8221a', 1], ['#f4c020', 2], ['#c8221a', 1]], 'ХАМОН'], [1, 770, [['#2a8a3a', 1], ['#f4f4f0', 1], ['#c8221a', 1]], 'ПРОШУТТО']]) { const on = i === 0 ? t > EV.td_jam - 0.1 : t > EV.td_pro - 0.1; if (on) glow(x, 1440, 240, 'rgba(255,220,150,1)', 0.45);
      push(x, 1490, 1); ell(0, 0, 150, 34, { wash: '#f8f6f0', washA: 1, w: 2, col: '#4a4a52' }); for (let k = 0; k < 5; k++) { if (i === 0) slice(-90 + k * 44, -12, 0.55, 0.3 * k - 0.6, { key: 15971 + k }); else { push(-90 + k * 44, -12, 0.55, 0.3 * k - 0.6); const s = shape(spline([[-90, 10], [-80, -26], [-40, -40], [60, -42], [92, -12], [80, 22], [-30, 34]], true, 8), { wash: '#f0989a', washA: 0.95, w: 1.6, col: '#a84a50' }); pencil(spline([[-90, 10], [-80, -26], [-40, -40], [60, -42]], false, 6), { w: 9, col: '#fbf0e2', pass2: false }); pop(); } }
        pencil([[110, -10], [110, -110]], { w: 3, col: '#8a6a3a', pass2: false }); let fy = -110; fl.forEach(([c, h], j) => { rect(110 + j * 0, fy, 60, i === 0 ? (h === 2 ? 20 : 10) : 0, { wash: c, washA: 1, line: false }); if (i === 0) fy += h === 2 ? 20 : 10; }); if (i === 1) fl.forEach(([c], j) => rect(110 + j * 20, -110, 20, 40, { wash: c, washA: 1, w: 0.8, col: '#3a3a3a' }));
      pop(); if (on) { push(x, 1650, popK(t, i === 0 ? EV.td_jam - 0.1 : EV.td_pro - 0.1, 0.35)); rect(-120, -30, 240, 60, { wash: i ? '#2a6a3a' : '#a8221a', washA: 1, w: 2.4, col: '#1a0a04' }); txt(lbl, 0, 12, 34, { font: 'Osw', col: '#fff4d0' }); pop(); } }
    if (t > EV.td_47 - 0.1) { const q = clamp((t - EV.td_47 + 0.1) / 0.9), v = Math.round(lerp(0, 47, sm(q))); push(540, 1150, popK(t, EV.td_47 - 0.1, 0.4)); rect(-240, -66, 480, 132, { wash: '#1a1a20', washA: 1, w: 5, col: '#c8a050' }); txt(v + ' 000 000', 0, 10, 64, { font: 'Osw', col: '#ffe070' }); txt('В ГОД', 0, 52, 24, { font: 'Osw', col: '#f4e6c8' }); pop(); }
  }
  function front(t) { push(-40, 1960, 1.6); for (let i = 0; i < 3; i++) { rect(-90 + i * 40, -80 + i * 10, 120, 70, { wash: '#e8d8d0', washA: 0.85, w: 1.6, col: '#8a7a70' }); slice(-30 + i * 40, -50 + i * 10, 0.4, 0.2, { key: 15990 + i }); } pop(); push(1180, 1980, 1.6); rect(-110, -120, 220, 120, { wash: '#2a2a2e', washA: 1, w: 2 }); rect(-90, -110, 180, 40, { wash: '#4ac8a0', washA: 0.8, w: 1 }); pop();
    motes(24, [0, 300, 1100, 1700], '#ffd8c0', t, 15995, { sp: 6, sz: 4, a: 0.4, wob: 2 }); }
  WORLD.today = (t, u, cat) => {
    lay(14, () => { shopWall(t); haze('#4a2a2a', 0.06); });
    lay(2.8, () => { people(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { plates(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.today = {
    outfit: 'waiterS', light: { side: 1, rim: '#ffb0a0' }, grade: ['#ff9a8a', 0.06],
    act: () => [[S0.today, 'grin'], [EV.td_47, 'shock'], [EV.td_legs, 'awe'], [EV.td_jam, 'sideeye'], [EV.td_pro, 'suspicious']],
    pose: (t, u, b) => { const q = t > EV.td_pro - 0.2; return Object.assign(b, { x: 550, y: 1700, s: 1.02, flip: q ? 1 : -1, look: q ? [0.8, 0.5] : t > EV.td_jam ? [-0.8, 0.5] : t > EV.td_legs ? [0, -0.8] : [0, 0], hand: [180, -300], handF: [-60, -220], prop: 'sliceP', propAng: 0.3, point: t > EV.td_jam ? 1 : undefined }); },
    cam: () => [[S0.today, 540, 900, 0.06], [EV.td_47, 540, 1150, 0.16, 'x'], [EV.td_legs, 540, 700, 0.1], [EV.td_jam, 540, 1350, 0.2], [S1.today, 560, 1350, 0.24]]
  };
  // ---------------------------------------------------------------- переход: нож срезает кадр тонким ломтиком, ломтик сворачивается и улетает
  TRANS_IN.today = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const e = sm(k); ctx.save(); ctx.setTransform(1 - e * 0.6, -e * 0.3, e * 0.2, 1 - e * 0.8, e * 900, -e * 400); ctx.globalAlpha = 1 - e * 0.5; ctx.drawImage(A, 0, 0); ctx.restore();
    scr(() => { ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.8)'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(0, H * (1 - e)); ctx.lineTo(W, H * (1 - e) - 200); ctx.stroke(); ctx.restore(); push(lerp(-100, 1200, e), lerp(1800, 600, e), 1.6, -0.3); hamKnife(0, 0, 1, 0); pop(); });
  } };
})();
