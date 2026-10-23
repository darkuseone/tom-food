/* 005 — `name`: «Отсюда и имя: борщ — от борщевика. "Домострой" советует сажать его к весне.» Кабинет ботаника-лингвиста XIX века: гербарий в рамках, глобус,
   стеллаж словарей, большая доска, где слово БОРЩЕВИК мелом «теряет» буквы и остаётся БОРЩ. На «Домострой» на столе раскрывается старинная книга, из неё вырастает
   росток. Том-ботаник с лупой. Переход В сцену: огромный лист борщевика смахивает кадр. */
(() => {
  EV.nn_word = wtw('s2', 'борщевика.');
  EV.nn_dom = wtw('s2', '«Домострой»');
  EV.nn_spring = wtw('s2', 'весне.');
  KEYW.push('борщевика.');

  function study(t) { vgrad(-600, 1600, ['#3a4a3a', '#4a5a44', '#5a6a50']); for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) { const x = 680 + i * 120, y = 220 + j * 170; rect(x, y, 100, 140, { wash: '#efe6c8', washA: 1, w: 3, col: '#5a3a1a' }); push(x + 50, y + 90, 0.35, (i - j) * 0.2); hogweed(0, 60, 0.5, 0); pop(); }
    const b = rect(60, 540, 540, 340, { wash: '#2a3a30', washA: 1, w: 8, col: '#6a4a2a', key: 5400 }); const word = 'БОРЩЕВИК', keep = 4; const k = clamp((t - EV.nn_word + 0.2) / 0.6);
    for (let i = 0; i < word.length; i++) { const gone = i >= keep && k > 0; const x = 120 + i * 58; txt(word[i], x, 700 + (gone ? k * 200 : 0), 74, { font: 'Hand', col: gone ? '#f2f6ea' : '#fff2a0', a: gone ? 1 - k : 1 }); }
    if (k > 0.6) pencil([[110, 740], [330, 740]], { w: 6, col: '#ff8a7a', a: (k - 0.6) / 0.4, pass2: false });
    for (let r = 0; r < 4; r++) { rect(700, 620 + r * 150, 340, 14, { wash: '#6a4a2a', washA: 1, w: 2 }); for (let q = 0; q < 7; q++) rect(708 + q * 46, 520 + r * 150, 40, 100, { wash: ['#7a2a1a', '#2a4a7a', '#4a6a2a', '#8a6a2a'][(r + q) % 4], washA: 1, w: 1.6, col: '#1a0a04' }); }
    push(1000, 1200, 1); ell(0, 0, 90, 90, { wash: '#6a9ab8', washA: 1, w: 3, col: '#2a3a4a' }); blob([[-40, -40], [20, -50], [40, 0], [-10, 30], [-50, 10]], { wash: '#8ab04a', washA: 1, line: false }); pencil([[0, 90], [0, 140]], { w: 8, col: '#6a4a2a', pass2: false }); pop(); }
  function desk(t) { const tb = rect(-300, 1360, 1700, 700, { wash: '#6a4426', washA: 1, w: 3, col: '#1a0a04', key: 5410 }); shadeG(tb.path, 540, 1360, 540, 1800, '#2a1408', 0.5);
    if (t > EV.nn_dom - 0.2) { const k = sm(clamp((t - EV.nn_dom + 0.2) / 0.5)); push(380, 1340, 1); poly([[-200 * k, 0], [0, -10], [0, -160], [-180 * k, -150]], { wash: '#efe2c0', washA: 1, w: 2.4, col: '#3a2a14' }); poly([[0, -10], [200 * k, 0], [180 * k, -150], [0, -160]], { wash: '#f2e6c8', washA: 1, w: 2.4, col: '#3a2a14' });
      if (k > 0.8) { txt('ДОМОСТРОЙ', -100, -130, 22, { font: 'Osw', col: '#7a1a10' }); for (let i = 0; i < 5; i++) pencil([[-170, -100 + i * 16], [-30, -100 + i * 16]], { w: 2, col: '#4a3a2a', a: 0.7, pass2: false }); const g = clamp((t - EV.nn_spring) / 0.8); if (g > 0) { push(100, -100, g); hogweed(0, 0, 0.35, t); pop(); } } pop();
      bubbleTag('XVI ВЕК', 380, 1100, t, EV.nn_dom + 0.2, '#d6a842', 34, -0.04); } }
  WORLD.name = (t, u, cat) => { lay(12, () => study(t)); lay(1.3, () => desk(t)); lay(1, () => cat()); };
  DIR.name = {
    outfit: 'botanistA', light: { side: 1, rim: '#fff0c8' }, grade: ['#8ab06a', 0.06],
    act: () => [[S0.name, 'talk'], [EV.nn_word, 'awe'], [EV.nn_dom, 'proud'], [EV.nn_spring, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 860, y: 1780, s: 1.12, flip: true, look: t < EV.nn_dom ? [0.8, -0.5] : [0.7, 0.4], hand: [180, -330], handF: [-80, -220], prop: 'magnifier', point: t < EV.nn_dom ? 1 : 0 }),
    cam: () => [[S0.name, 520, 1050, 0.08], [EV.nn_word, 460, 980, 0.12], [EV.nn_dom, 520, 1200, 0.2, 'x'], [S1.name, 540, 1200, 0.24]]
  };
  // ---------------------------------------------------------------- переход: огромный лист борщевика смахивает кадр
  TRANS_IN.name = { a: 0.15, b: 0.4, runA: 1, fx(k, t, A, B) {
    const x = lerp(1600, -900, sm(k)); drawBuf(B, 1, 540, 960); scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(x + 300, 0, W, H); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
      push(x, 960, 4.2, -0.3 + k * 0.4); const l = blob([[0, 0], [60, -70], [140, -50], [200, -140], [260, -40], [180, 30], [80, 60]], { wash: '#4a7a2a', washA: 1, w: 3, col: '#14300a' }); pencil([[0, 0], [240, -60]], { w: 3, col: '#8ab84a', pass2: false }); pop(); });
  } };
})();
