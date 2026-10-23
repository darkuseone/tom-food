/* 005 — `today` + `button`: «Пятьсот лет спустя его варят по всему миру. А начинал он сорняком у забора.» Тёплая кухня вечером: кафель, полка с банками, окно на
   дачный огород (тот же забор, что в хуке). Хиро-шот: огромная тарелка борща — рубиновый глянец, облако сметаны, укроп, пар; рядом пампушки с чесноком и чёрный
   хлеб. На «500 лет» — на кафеле проступает «500»; на «по всему миру» над тарелкой в пару всплывают тарелки-силуэты разных борщей (прозрачный с ушками, розовый,
   зелёный, красный); на «сорняком у забора» за окном из-за забора вырастает борщевик и машет листом. `button`: Том с ложкой в камеру.
   Переход В сцену: пар от тарелки заволакивает кадр и рассеивается. */
(() => {
  EV.td_500 = LS('t1') + 0.05;
  EV.td_world = wtw('t1', 'всему');
  EV.td_weed = wtw('t1', 'сорняком');
  EV.bt_wink = wtw('x1', 'откусим!');
  SHAKES.push([EV.td_weed + 0.3, 0.16, 6]);
  KEYW.push('миру.');

  function kitchen(t) { vgrad(-600, 1500, ['#e8d8b8', '#f0e0c0', '#e8cca0']); for (let y = 0; y < 14; y++) for (let x = 0; x < 12; x++) rect(-300 + x * 140, -200 + y * 110, 140, 110, { line: true, w: 1, col: '#c8b088', a: 0.5 });
    const w = rect(620, 160, 400, 440, { wash: '#f8c890', washA: 1, w: 10, col: '#f6f0e2', key: 6200 }); ctx.save(); ctx.clip(w.path); vgrad(160, 600, ['#f08a50', '#f8c890', '#fff0c0']);
    for (let i = 0; i < 8; i++) { push(640 + i * 50, 600, 0.5, (i % 3 - 1) * 0.06); rect(-24, -180, 48, 180, { wash: '#8a6a44', washA: 1, w: 2, col: '#2a1a0a' }); pop(); }
    const k = clamp((t - EV.td_weed) / 0.6); if (k > 0) { push(900, 620 + (1 - sm(k)) * 400, 1.7, Math.sin(t * 3) * 0.08 * k); hogweed(0, 0, 1, t); pop(); } ctx.restore(); pencil([[820, 160], [820, 600]], { w: 8, col: '#f6f0e2' }); pencil([[620, 380], [1020, 380]], { w: 8, col: '#f6f0e2' });
    rect(40, 560, 480, 20, { wash: '#8a5a3a', washA: 1, w: 2 }); for (let i = 0; i < 5; i++) { const x = 70 + i * 90; rect(x, 470, 60, 90, { wash: ['#c8283a', '#e8a040', '#6aa04a', '#f2e8c8', '#a8182a'][i], washA: 0.9, w: 2, col: '#3a2a1a' }); rect(x - 4, 460, 68, 16, { wash: '#d6a842', washA: 1, w: 1.6 }); }
    if (t > EV.td_500) { const p = popK(t, EV.td_500, 0.5); txt('500', 300, 860, 220 * p, { font: 'Osw', col: '#a8182a', a: 0.85 }); txt('лет', 300, 960, 70 * p, { font: 'Hand', col: '#7a1a10' }); } }
  function table(t) { const tb = rect(-300, 1320, 1700, 700, { wash: '#f6f0e2', washA: 1, w: 3, col: '#8a7a5a', key: 6210 }); for (let i = 0; i < 14; i++) pencil([[-300 + i * 120, 1320], [-300 + i * 120, 2000]], { w: 14, col: '#d9482b', a: 0.25, pass2: false }); for (let i = 0; i < 6; i++) pencil([[-300, 1360 + i * 120], [1400, 1360 + i * 120]], { w: 14, col: '#d9482b', a: 0.25, pass2: false });
    rect(40, 1330, 200, 90, { wash: '#3a2414', washA: 1, w: 2.4, col: '#140a04' }); for (let i = 0; i < 3; i++) pencil([[60 + i * 60, 1340], [70 + i * 60, 1410]], { w: 2, col: '#5a3a24', pass2: false });
    for (let i = 0; i < 3; i++) pampushka(130 + i * 70, 1460 + (i % 2) * 20, 0.9); ell(320, 1440, 18, 22, { wash: '#f6f0e2', washA: 1, w: 2, col: '#8a7a5a' });
    borschBowl(560, 1420, 1.45, t, { steam: true });
    if (t > EV.td_world) { const vs = [[BR.red, 'plain'], ['#c8182a', 'clear'], [BR.pink, 'pink'], ['#6a9a2a', 'green']]; for (let i = 0; i < vs.length; i++) { const k = clamp((t - EV.td_world - i * 0.18) / 0.5), a = -Math.PI * (0.15 + i * 0.23); const x = 430 + i * 160, y = 1170 - (i % 2) * 70;
      if (k > 0) { push(x, y - 20 * Math.sin(t * 2 + i), 0.85 * popK(t, EV.td_world + i * 0.18)); ell(0, 0, 110, 30, { wash: '#ffffff', washA: 0.95, w: 2.4, col: '#8a8a9a' }); ell(0, -6, 90, 20, { wash: vs[i][0], washA: vs[i][1] === 'clear' ? 0.7 : 1, line: false }); if (vs[i][1] === 'clear') for (let q = 0; q < 3; q++) uszko(-40 + q * 40, -8, 0.6, q); if (vs[i][1] !== 'clear') ell(10, -10, 30, 10, { wash: BR.smet, washA: 1, line: false }); pop(); } } } }
  WORLD.today = (t, u, cat) => { lay(10, () => kitchen(t)); lay(1, () => { table(t); cat(); }); };
  DIR.today = {
    outfit: 'chef', light: { side: -1, rim: '#ffd0a0' }, grade: ['#e86a40', 0.08],
    act: () => [[S0.today, 'talk'], [EV.td_500, 'proud'], [EV.td_world, 'awe'], [EV.td_weed, 'sideeye'], [EV.td_weed + 0.8, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 880, y: 1800, s: 1.14, flip: true, look: t < EV.td_weed ? [-0.6, 0.3] : [-0.2, -0.9], hand: t < EV.td_weed ? [140, -260] : [120, -400], handF: [-90, -230], prop: 'ladleRedP', point: t > EV.td_weed ? 1 : 0 }),
    cam: () => [[S0.today, 560, 1300, 0.3], [EV.td_500, 420, 1000, 0.18], [EV.td_world, 600, 1220, 0.12, 'x'], [EV.td_weed, 760, 980, 0.16, 'x'], [S1.today, 760, 980, 0.18]]
  };
  // ---------------------------------------------------------------- переход: пар от тарелки заволакивает кадр
  TRANS_IN.today = { a: 0.2, b: 0.5, runA: 1, fx(k, t, A, B) {
    const fog = Math.sin(k * Math.PI); drawBuf(k < 0.5 ? A : B, 1 + fog * 0.05, 540, 960);
    scr(() => { for (let i = 0; i < 14; i++) { const r = rng(6250 + i), x = r() * 1200 - 60, y = 1900 - k * (900 + r() * 900), R = 200 + r() * 260; ell(x, y, R * (0.6 + fog), R * 0.7 * (0.6 + fog), { wash: '#fff8f0', washA: 0.75 * fog, line: false }); } whiteOut(fog * 0.6, '255,248,240'); });
  } };
})();

(() => {                                                          // кнопка: та же кухня, Том с ложкой борща в камеру, подмигивает на «откусим»
  WORLD.button = (t, u, cat) => { lay(10, () => { vgrad(-600, 1500, ['#e8d8b8', '#f0e0c0', '#e8cca0']); for (let y = 0; y < 14; y++) for (let x = 0; x < 12; x++) rect(-300 + x * 140, -200 + y * 110, 140, 110, { line: true, w: 1, col: '#c8b088', a: 0.5 }); });
    lay(1.15, () => { rect(-300, 1340, 1700, 700, { wash: '#f6f0e2', washA: 1, w: 3, col: '#8a7a5a', key: 6260 }); borschBowl(300, 1460, 1.1, t, { steam: true }); pampushka(80, 1480, 0.9); }); lay(1, () => cat()); };
  DIR.button = { outfit: 'chef', light: { side: -1, rim: '#ffc890' }, grade: ['#e86a40', 0.1], act: () => [[S0.button, 'grin'], [EV.bt_wink, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 720, y: 1820, s: 1.3, look: [0, 0], hand: [110, -320], handF: [-110, -260], prop: 'spoonBorschP', tailUp: true }), cam: () => [[S0.button, 700, 1000, 0.26], [DUR, 680, 1040, 0.3]] };
  TRANS_IN.button = { a: 0.1, b: 0.3, runA: 1, fx(k, t, A, B) { drawBuf(k < 0.5 ? A : B, 1 + Math.sin(k * Math.PI) * 0.08, 540, 960); scr(() => whiteOut(Math.sin(k * Math.PI) * 0.8, '255,244,220')); } };
})();
