/* 028 — `siege` (байка, тона старинной гравюры-сепии): «Байка: в 1683-м турки осадили Вену, а пекари ночью услышали подкоп.» Ночная пекарня
   в подвале у городской стены Вены: сводчатый кирпичный потолок, печь с открытым огнём (главный свет), квашни с тестом, мешки муки, лопаты,
   связки дров, свеча; в маленьком окне — лунная ночь, городская стена, шпиль собора Святого Стефана, за стеной — шатры и костры османского
   лагеря (второй свет — холодная луна). Два пекаря месят тесто, мальчишка подкидывает дрова. Том — подмастерье в рубахе и картузе. По словам:
   «1683-м» — плашка года; «турки» — за окном вспыхивают костры, видны знамёна с полумесяцем; «Вену,» — шпиль собора в луче луны; «пекари» —
   пекари шлёпают тесто; «подкоп.» — стена дрожит, сыплется мука и пыль, из стены проклёвывается кирка, Том прикладывает ухо — шерсть дыбом.
   Переход В сцену: скалка прокатывается сверху вниз, раскатывая новый кадр. */
(() => {
  EV.sg_year = wtw('s1', '1683-м');
  EV.sg_turk = wtw('s1', 'турки');
  EV.sg_vienna = wtw('s1', 'Вену,');
  EV.sg_bakers = wtw('s1', 'пекари');
  EV.sg_dig = wtw('s1', 'подкоп.');
  SHAKES.push([EV.sg_dig, 0.4, 8]);
  KEYW.push('подкоп.');
  const quake = t => t > EV.sg_dig ? Math.sin(t * 50) * 6 * Math.exp(-(t - EV.sg_dig) * 2) : 0;

  function night(t) {                                                     // вид в окне: луна, стена, собор, османский лагерь
    vgrad(-300, 700, ['#0a1028', '#1a2448', '#2a2a48']); ell(220, 40, 50, 50, { wash: '#f8f0d0', washA: 1, line: false }); glow(220, 40, 160, 'rgba(220,230,255,1)', 0.3);
    push(520, 360, 1); pencil([[0, 0], [0, -380]], { w: 30, col: '#1a1a2a', pass2: false }); poly([[-20, -300], [0, -460], [20, -300]], { wash: '#1a1a2a', washA: 1, line: false }); rect(-60, -160, 120, 160, { wash: '#1a1a2a', washA: 1, line: false }); pop();
    rect(-300, 420, 1500, 120, { wash: '#2a2a3a', washA: 1, w: 2, col: '#0a0a18' }); for (let i = 0; i < 16; i++) rect(-290 + i * 90, 390, 50, 40, { wash: '#2a2a3a', washA: 1, w: 1.4, col: '#0a0a18' });
    for (let i = 0; i < 6; i++) { const x = -200 + i * 220, on = t > EV.sg_turk ? 1 : 0.3; poly([[x - 60, 640], [x, 560], [x + 60, 640]], { wash: '#6a4a3a', washA: 1, w: 1.4, col: '#1a0a08' }); pencil([[x, 560], [x, 520]], { w: 2, col: '#3a2a1a', pass2: false }); if (i % 2) { rect(x, 520, 30, 18, { wash: '#c8201a', washA: on, line: false }); ell(x + 12, 529, 5, 5, { wash: '#f8f4ec', washA: on, line: false }); } ell(x + 80, 640, 16 + Math.sin(t * 9 + i) * 4, 12, { wash: '#ffa040', washA: on, line: false }); glow(x + 80, 640, 60, 'rgba(255,150,60,1)', 0.3 * on); }
  }
  function cellar(t) {                                                    // свод, кирпич, печь с огнём, окно, полки с хлебами, кирка из стены
    const q = quake(t); push(q, 0, 1);
    vgrad(-500, 1500, ['#2a1a10', '#4a2e1a', '#5a3a22']); for (let r = 0; r < 20; r++) for (let i = 0; i < 12; i++) { const x = -500 + i * 190 + (r % 2) * 95, y = -500 + r * 90; rect(x, y, 186, 86, { wash: ['#7a4a2a', '#6a3e22', '#845232'][(i + r) % 3], washA: 1, w: 1, col: '#3a1e0e' }); }
    for (let i = 0; i < 3; i++) pencil(spline([[-500 + i * 700, 300], [-150 + i * 700, -400], [200 + i * 700, 300]], false, 10), { w: 26, col: '#3a2010', pass2: false });
    push(860, 500, 1); const w = rect(-180, -200, 360, 330, { wash: '#1a2448', washA: 1, w: 10, col: '#2a1408', key: 28300 }); ctx.save(); ctx.clip(w.path); push(-860, -500, 1); push(860, 500, 1); night(t); pop(); pop(); ctx.restore(); pencil([[0, -200], [0, 130]], { w: 6, col: '#2a1408', pass2: false }); pencil([[-180, -40], [180, -40]], { w: 6, col: '#2a1408', pass2: false }); pop();
    push(180, 1150, 1); const ov = blob([[-260, 0], [-260, -360], [-180, -480], [0, -520], [180, -480], [260, -360], [260, 0]], { wash: '#8a5a3a', washA: 1, w: 4, col: '#2a1408', key: 28301 }); shadeG(ov.path, -260, 0, 260, 0, '#4a2a14', 0.4); const m = blob([[-140, 0], [-140, -180], [-80, -260], [80, -260], [140, -180], [140, 0]], { wash: '#1a0a04', washA: 1, w: 3 });
    for (let i = 0; i < 7; i++) { const fh = 140 + Math.sin(t * 9 + i * 2) * 40; blob([[-110 + i * 32, 0], [-100 + i * 32, -fh], [-84 + i * 32, -fh * 0.6], [-70 + i * 32, 0]], { wash: i % 2 ? '#ffb040' : '#ff7a20', washA: 1, line: false }); } glow(0, -100, 280, 'rgba(255,150,60,1)', 0.35); for (let i = 0; i < 3; i++) kipferl(-80 + i * 80, -200, 0.4, t, { key: 28302 + i }); pop();
    push(560, 500, 1); rect(-200, 0, 400, 14, { wash: '#5a3418', washA: 1, w: 1.6 }); for (let i = 0; i < 6; i++) { ell(-160 + i * 64, -24, 30, 22, { wash: '#c8883a', washA: 1, w: 1.6, col: '#5a3010' }); } rect(-200, 200, 400, 14, { wash: '#5a3418', washA: 1, w: 1.6 }); for (let i = 0; i < 4; i++) blob([[-170 + i * 100, 200], [-176 + i * 100, 120], [-130 + i * 100, 110], [-120 + i * 100, 200]], { wash: '#e8dcc0', washA: 1, w: 1.6 }); pop();
    if (t > EV.sg_dig) { const k = clamp((t - EV.sg_dig) / 0.6); push(1080, 980, 1); for (let i = 0; i < 6; i++) pencil([[0, 0], [Math.cos(i) * 120 * k, Math.sin(i * 2) * 120 * k]], { w: 3, col: '#1a0a04', pass2: false }); push(-20 * k, 0, 1, -0.5); pencil([[0, 0], [-140 * k, 0]], { w: 12, col: '#6a4a24', pass2: false }); poly([[-140 * k, -40], [-180 * k, 0], [-140 * k, 40], [-150 * k, 0]], { wash: '#8a8a94', washA: 1, w: 2 }); pop(); pop(); }
    pop();
  }
  function bakers(t) {                                                    // пекари месят тесто, мальчик с дровами; на «подкоп» — замирают
    const dig = t > EV.sg_dig, sl = t > EV.sg_bakers && !dig ? Math.abs(Math.sin(t * 8)) : 0;
    human(500, 1300, 1.05, t, { body: '#e8dcc0', legs: '#3a2a1a', hair: '#6a3a1a', face: dig ? 'shock' : 'smile', armL: sl > 0.5 ? 'up' : 'hold', armR: dig ? 'up' : 'hold', look: dig ? 0.8 : 0.2, seed: 28310, beard: 'short', hat: 'scarf', hatCol: '#f4ecd8' });
    human(940, 1300, 1.0, t, { body: '#c8b890', legs: '#3a2a1a', hair: '#3a2010', face: dig ? 'shock' : 'calm', armL: 'hold', armR: sl > 0.5 ? 'up' : 'hold', look: -0.4, seed: 28311, flip: -1 });
    push(720, 1250, 1); blob([[-140, 0], [-160, -70], [160, -70], [140, 0]], { wash: '#6a4426', washA: 1, w: 2.4 }); blob([[-120, -70], [-100, -110 + sl * 10], [100, -110 + sl * 10], [120, -70]], { wash: '#f4e8c8', washA: 1, w: 2 }); pop();
    human(-60, 1320, 0.75, t, { body: '#8a6a3a', legs: '#3a2a1a', hair: '#c88a3a', face: dig ? 'shock' : 'smile', armL: 'hold', armR: 'hold', look: 0.5, seed: 28312 });
    if (dig) { const r = rng(hsh(FRAME, 28313)); for (let i = 0; i < 24; i++) ell(-200 + r() * 1500, -100 + ((t - EV.sg_dig) * 500 + r() * 900) % 1300, 4, 4, { wash: '#f4ecd8', washA: 0.8, line: false }); }
  }
  function table(t) {                                                     // стол Тома: доска, тесто, скалка, мука, свеча
    const q = quake(t); const tb = rect(-500, 1440, 2200, 600, { wash: '#6a4426', washA: 1, w: 3, col: '#2a1408', key: 28320 }); shadeG(tb.path, 0, 1440, 0, 1900, '#3a2010', 0.5); for (let i = 0; i < 5; i++) pencil([[-500, 1480 + i * 80], [1700, 1480 + i * 80]], { w: 2, col: '#4a2a14', a: 0.5, pass2: false });
    push(380 + q, 1450, 1); blob([[-140, 0], [-130, -50], [130, -50], [140, 0]], { wash: '#f4e8c8', washA: 1, w: 2, col: '#a89a70' }); pinP28(0, -70); for (let i = 0; i < 20; i++) { const r = rng(28321 + i); ell(-200 + r() * 400, -4 + r() * 10, 3, 2, { wash: '#ffffff', washA: 0.8, line: false }); } pop();
    push(1000, 1450, 1); rect(-14, -110, 28, 110, { wash: '#f8f0d8', washA: 1, w: 1.6 }); ell(0, -126, 8 + Math.sin(t * 12) * 2, 16, { wash: '#ffc060', washA: 1, line: false }); glow(0, -126, 90, 'rgba(255,190,100,1)', 0.3); pop();
    castShadow(640, 1450, 320, 90, 0.6, 0.28);
  }
  function pinP28(x, y) { push(x, y, 1); rect(-150, -14, 300, 28, { wash: '#d8a868', washA: 1, w: 2, col: '#6a4a24' }); ell(-160, 0, 16, 16, { wash: '#a87a4a', washA: 1, w: 2 }); ell(160, 0, 16, 16, { wash: '#a87a4a', washA: 1, w: 2 }); pop(); }
  WORLD.siege = (t, u, cat) => {
    lay(8, () => { cellar(t); haze('#ffb070', 0.05); });
    lay(2.6, () => { bakers(t); lightPool(180, 1300, 520, 110, 'rgba(255,160,80,1)', 0.35); });
    lay(1, () => { lightPool(580, 1460, 640, 120, 'rgba(255,190,120,1)', 0.32); cat(); table(t); });
    lay(0.65, () => { push(-160, 1950, 1.4); for (let i = 0; i < 2; i++) blob([[i * 200 - 90, 0], [i * 200 - 100, -200], [i * 200 - 60, -240], [i * 200 + 60, -240], [i * 200 + 100, -200], [i * 200 + 90, 0]], { wash: '#e8dcc0', washA: 1, w: 3, col: '#6a5a3a' }); txt('MEHL', 0, -100, 40, { font: 'Osw', col: '#6a5a3a' }); pop(); push(1230, 1950, 1.4); for (let i = 0; i < 5; i++) rect(-60 + (i % 3) * 30, -60 - Math.floor(i / 3) * 50, 120, 40, { wash: '#8a5a2a', washA: 1, w: 2 }); pop();
      motes(16, [0, 200, 1100, 1500], '#ffc070', t, 28390, { sp: -12, sz: 3, a: 0.5, wob: 6 }); moodDark(560, 1000, 520, 1500, '#0a0604', 0.5); screenFill('#704a20', 0.08, 'multiply'); });
  };
  DIR.siege = {
    outfit: 'uchenikA', light: { side: -1, rim: '#ffb070' }, grade: ['#c89060', 0.12],
    act: () => [[S0.siege, 'talk'], [EV.sg_turk, 'suspicious'], [EV.sg_bakers, 'grin'], [EV.sg_dig, 'scared'], [EV.sg_dig + 0.5, 'shock']],
    pose: (t, u, b) => { const dig = t > EV.sg_dig - 0.2; return Object.assign(b, { x: 700 + (dig ? 60 : 0), y: 1600, s: 1.15, flip: !dig, look: dig ? [0.9, -0.1] : t > EV.sg_turk && t < EV.sg_bakers ? [0.8, -0.6] : [-0.4, 0.3], hand: dig ? [160, -380] : [180, -220 + Math.abs(Math.sin(t * 8)) * 30], handF: [-90, -230], sweat: dig, tailUp: dig }); },
    cam: () => [[S0.siege, 560, 1040, 0.22], [EV.sg_turk, 640, 1000, 0.24], [EV.sg_bakers, 580, 1100, 0.27], [EV.sg_dig, 660, 1120, 0.29], [S1.siege, 670, 1120, 0.3]]
  };
  // ---------------------------------------------------------------- переход: скалка прокатывается сверху вниз, раскатывая новый кадр
  TRANS_IN.siege = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), Y = lerp(-200, 2200, e); drawBuf(A, 1, 540, 960);
    scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(-10, -10, 1100, Y + 10); ctx.clip(); drawBuf(B, 1, 540, 960 + (1 - e) * 40); ctx.restore(); rect(-10, Y - 30, 1100, 60, { wash: '#f4e8c8', washA: 0.8, line: false });
      push(540, Y, 1); rect(-640, -60, 1280, 120, { wash: '#d8a868', washA: 1, w: 4, col: '#6a4a24', key: 28399 }); for (let i = 0; i < 6; i++) pencil([[-600 + ((i * 220 + e * 900) % 1200), -56], [-600 + ((i * 220 + e * 900) % 1200), 56]], { w: 3, col: '#a87a4a', pass2: false }); pop(); });
  } };
})();
