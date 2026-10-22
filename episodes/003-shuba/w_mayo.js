/* ВЫПУСК — `mayo`: «TODO реплика s8». Что видно: 3–4 плана (фон lay 14–30, середина 3–5 с людьми через human(), стол/пол lay 1.2–1.6, Том lay 1, передний план 0.5–0.9).
   По словам: TODO (событие на каждое ключевое слово). Переход В сцену: TODO (физический, кухонный, не повторять в ролике и не брать из прошлого выпуска — docs/dishes.md).
   Раскладка кадра: карточка рецепта занимает экран x<450, y<500 — туда ничего важного; субтитры y≈1590; Том ≈ x 560–860, y 1700–1780, s 1.15–1.25. */
(() => {
  EV.mayo_a = wtw('s8', 'TODO');                                  // время слова (wtw — точнее, WT — начало фрагмента субтитра)
  SHAKES.push([EV.mayo_a + 0.1, 0.2, 8]);
  KEYW.push('TODO');                                                // ровно как в субтитре, с пунктуацией: 'курицу!'

  function back(t) {                                                // дальний план: небо/стена, окна, вывески
    vgrad(-600, 1600, ['#2a1a10', '#6a4a30', '#8a6a48']);
  }
  function mid(t) {                                                 // люди с руками и мимикой: human(x, y, s, t, { body, hair, face: 'calm|smile|grin|shock|angry', armL, armR: 'down|up|point|hips|hold|wave|swing', prop, seed, flip: -1, look, beard, hat });
  }
  function table(t) {                                               // стол/пол перед Томом: еда эпохи (nug.js / food.js), утварь
    rect(-300, 1340, 1700, 700, { wash: '#6a4a2a', washA: 1, w: 3, col: '#1a0a04', key: 9000 });
  }
  WORLD.mayo = (t, u, cat) => {
    lay(16, () => { back(t); }); lay(3.6, () => { mid(t); });
    lay(1.3, () => { table(t); });
    lay(1, () => { cat(); });
  };
  DIR.mayo = {
    outfit: 'chef', light: { side: -1, rim: '#ffd0a0' }, grade: ['#ff9050', 0.1],
    act: () => [[S0.mayo, 'talk'], [EV.mayo_a, 'shock']],         // эмоции: neutral talk shock awe smug sideeye annoyed grin laugh scared cold proud suspicious wink
    pose: (t, u, b) => Object.assign(b, { x: 760, y: 1740, s: 1.2, flip: true, look: [0.5, 0], hand: [100, -260], handF: [-90, -220] }),
    // afterCat: (t, u, P) => { /* рисовать у лапы: x = P.x ∓ hand[0]*P.s (минус при flip), y = P.y + hand[1]*P.s */ },
    cam: () => [[S0.mayo, 560, 1100, 0.2], [EV.mayo_a, 600, 1000, 0.3, 'x'], [S1.mayo, 620, 1000, 0.34]]
  };
  TRANS_IN.mayo = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {    // A — прошлая сцена, B — эта; k 0→1
    drawBuf(A, 1, 540, 960); inCircle(540, 960, k * 1200, () => drawBuf(B, 1, 540, 960));
  } };
})();
