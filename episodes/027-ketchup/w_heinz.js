/* 027 — `heinz`: «Сегодня кетчуп — томат, уксус и сахар. Так его варит Хайнц с 1876-го. / Конкуренты красили кетчуп угольной краской в тёмном
   стекле. А Хайнц — в прозрачном!» Фабрика соусов рубежа веков: кирпичные стены, высокие арочные окна (главный свет — утренние лучи),
   медные котлы с паром и мешалками, ящики помидоров, мешок сахара, бутыль уксуса, конвейер с прозрачными бутылками, работницы в белых
   чепцах и фартуках, мастер с часами, плакат PURE FOOD. Слева — тёмный угол конкурента: тип в котелке сыплет чёрную краску в котёл и
   разливает в коричневые бутылки (второй свет — коптящая лампа). Том — фабрикант в сюртуке с фартуком. По словам: «томат,» — помидоры
   плюхаются в котёл; «уксус» — бутыль льёт; «сахар.» — мешок сыплет; «Хайнц» — по конвейеру едут бутылки, плашка 1876; «угольной» —
   конкурент сыплет чёрное, котёл темнеет; «тёмном стекле.» — разливает в коричневые бутылки; «прозрачном!» — Том поднимает прозрачную
   бутылку к окну, кетчуп светится рубином. Переход В сцену: капли кетчупа стекают сверху занавесом и открывают фабрику. */
(() => {
  EV.hz_tom = wtw('s1', 'томат,');
  EV.hz_vin = wtw('s1', 'уксус');
  EV.hz_sug = wtw('s1', 'сахар.');
  EV.hz_heinz = wtw('s1', 'Хайнц');
  EV.hz_coal = wtw('s2', 'угольной');
  EV.hz_dark = wtw('s2', 'тёмном');
  EV.hz_clear = wtw('s2', 'прозрачном!');
  SHAKES.push([EV.hz_tom + 0.2, 0.12, 5], [EV.hz_clear, 0.12, 5]);
  KEYW.push('прозрачном!');

  function hall(t) {                                                      // кирпичный цех, арочные окна с лучами, плакаты, трубы
    vgrad(-500, 1500, ['#5a3020', '#7a4a30', '#8a5a3a']); for (let r = 0; r < 26; r++) for (let i = 0; i < 16; i++) { const x = -500 + i * 140 + (r % 2) * 70, y = -500 + r * 70; rect(x, y, 136, 66, { wash: ['#9a4a30', '#8a4028', '#a8583a'][(i + r) % 3], washA: 1, w: 1, col: '#4a2010' }); }
    for (const x of [380, 820]) { push(x, 300, 1); const w = blob([[-130, 300], [-130, -100], [-90, -200], [0, -240], [90, -200], [130, -100], [130, 300]], { wash: '#f8ecc8', washA: 1, w: 6, col: '#2a1a10', key: 27300 + x }); for (let i = 1; i < 3; i++) pencil([[-130 + i * 87, -220], [-130 + i * 87, 300]], { w: 4, col: '#2a1a10', pass2: false }); for (let j = 0; j < 4; j++) pencil([[-130, -100 + j * 100], [130, -100 + j * 100]], { w: 4, col: '#2a1a10', pass2: false }); glow(0, 0, 220, 'rgba(255,235,190,1)', 0.25); pop(); }
    push(600, 720, 1); rect(-150, -60, 300, 120, { wash: '#f4ecd0', washA: 1, w: 2.4, col: '#3a2a1a' }); txt('PURE FOOD', 0, -6, 46, { font: 'Osw', col: '#a8241e' }); txt('no preservatives', 0, 38, 22, { font: 'Hand', col: '#2a2a2a' }); hudBox('плакат PURE FOOD', -150, -60, 150, 60); pop();
    for (let i = 0; i < 3; i++) pencil([[-500, -300 + i * 30], [1700, -280 + i * 30]], { w: 18, col: '#3a3a3a', pass2: false });
    for (let i = 0; i < 5; i++) { push(-200 + i * 380, -200, 1); pencil([[0, 0], [0, 200]], { w: 3, col: '#2a2a2a', pass2: false }); blob([[-50, 200], [-30, 160], [30, 160], [50, 200]], { wash: '#3a4a3a', washA: 1, w: 2 }); pop(); }
  }
  function works(t) {                                                     // котлы с паром, конвейер с бутылками, работницы, мастер
    for (let i = 0; i < 2; i++) { push(260 + i * 480, 1150, 1); const k = blob([[-160, 0], [-170, -200], [170, -200], [160, 0]], { wash: '#c87a3a', washA: 1, w: 3, col: '#4a2008', key: 27310 + i }); shadeG(k.path, -170, 0, 170, 0, '#6a3010', 0.45); for (const y of [-160, -60]) pencil([[-168, y], [168, y]], { w: 6, col: '#e8a060', a: 0.6, pass2: false });
      ell(0, -200, 168, 30, { wash: i === 0 && t > EV.hz_coal ? lerpC(KC.red, '#2a0a08', clamp((t - EV.hz_coal) / 0.8)) : KC.red, washA: 1, w: 2.4, col: '#4a2008' }); pencil([[40, -200], [80 + Math.sin(t * 3 + i) * 20, -420]], { w: 8, col: '#6a4a2a', pass2: false });
      for (let j = 0; j < 4; j++) { const ph = (t * 0.4 + j / 4 + i * 0.3) % 1; ell(Math.sin(t + j) * 60, -230 - ph * 300, 60 + ph * 70, 34 + ph * 40, { wash: '#f8f0e8', washA: 0.25 * (1 - ph), line: false }); } pop(); }
    rect(-200, 1250, 1600, 30, { wash: '#6a6a70', washA: 1, w: 2, col: '#2a2a30' }); for (let i = 0; i < 9; i++) { const x = ((t * 80 + i * 170) % 1600) - 200; ketchupBottle(x, 1250, 0.35, t, { key: 27320 + i, fill: x > 500 ? 0.85 : 0.1 }); }
    for (const [x, sd, fl] of [[960, 27331, -1]]) { human(x, 1300, 1.0, t, { body: '#3a4a6a', legs: '#2a2a2a', hair: '#6a3a1a', face: t > EV.hz_clear ? 'grin' : 'smile', armL: 'hold', armR: 'hold', look: 0.4 * fl, seed: sd, flip: fl, long: 1, hat: 'scarf', hatCol: '#f8f4ec' }); rect(x - 40, 1300 - 220, 80, 130, { wash: '#f8f4ec', washA: 1, w: 1.4 }); }
  }
  function rival(t) {                                                     // тёмный угол конкурента: тип в котелке, ведро угольной краски, коричневые бутылки, коптилка
    push(320, 0, 1); rect(-300, 700, 520, 800, { wash: '#2a1a14', washA: 0.6, line: false }); glow(60, 900, 120, 'rgba(255,170,90,1)', 0.25); ell(60, 920, 14, 20, { wash: '#ffb040', washA: 1, line: false });
    human(-40, 1300, 1.0, t, { body: '#2a2a2a', legs: '#1a1a1a', hair: '#1a1a1a', face: t > EV.hz_clear ? 'shock' : 'grin', armL: 'hold', armR: t > EV.hz_coal && t < EV.hz_clear ? 'up' : 'hold', look: 0.5, seed: 27340, beard: 'short' }); push(-40, 1300 - 330, 1); rect(-44, -20, 88, 14, { wash: '#1a1a1a', washA: 1, w: 1.4 }); blob([[-30, -18], [-28, -60], [28, -60], [30, -18]], { wash: '#1a1a1a', washA: 1, w: 1.4 }); pop();
    if (t > EV.hz_coal && t < EV.hz_clear + 0.5) { for (let i = 0; i < 8; i++) { const q = ((t - EV.hz_coal) * 2 + i * 0.12) % 1; ell(40 + Math.sin(i) * 10, 900 + q * 200, 7, 9, { wash: '#0a0a0a', washA: 1, line: false }); } }
    push(120, 1300, 1); blob([[-40, 0], [-46, -70], [46, -70], [40, 0]], { wash: '#4a4a4a', washA: 1, w: 2 }); ell(0, -70, 46, 10, { wash: '#0a0a0a', washA: 1, w: 1.4 }); txt('COAL TAR', 0, -30, 16, { font: 'Osw', col: '#e8e8e8' }); pop();
    for (let i = 0; i < 4; i++) ketchupBottle(-160 + i * 60, 1440, 0.4, t, { dark: 1, label: 'CATSUP', sub: '???', key: 27350 + i, cap: t > EV.hz_dark });
    pop();
  }
  function counter(t) {                                                   // стол Тома: ящик помидоров, бутыль уксуса, мешок сахара, прозрачные бутылки
    const tb = rect(-500, 1440, 2200, 600, { wash: '#8a5a34', washA: 1, w: 3, col: '#2a1408', key: 27360 }); shadeG(tb.path, 0, 1440, 0, 1900, '#4a2a10', 0.5); for (let i = 0; i < 8; i++) pencil([[-500, 1470 + i * 50], [1700, 1476 + i * 50]], { w: 1.4, col: '#5a3418', a: 0.5, pass2: false });
    push(300, 1450, 1); rect(-110, -90, 220, 90, { wash: '#c8a060', washA: 1, w: 2.4, col: '#4a3010' }); for (let i = 0; i < 3; i++) pencil([[-110, -70 + i * 26], [110, -70 + i * 26]], { w: 2, col: '#8a6a30', pass2: false }); for (let i = 0; i < 5; i++) tomato(-80 + i * 40, -96 - (i % 2) * 10, 0.5, { key: 27361 + i }); pop();
    if (t > EV.hz_tom && t < EV.hz_tom + 0.7) { const q = (t - EV.hz_tom) / 0.7; tomato(lerp(300, 260, q), lerp(1340, 1000, q) - Math.sin(q * 3.14) * 160, 0.5, { key: 27367 }); }
    push(100, 1450, 1); blob([[-34, 0], [-40, -90], [-16, -110], [-16, -150], [16, -150], [16, -110], [40, -90], [34, 0]], { wash: '#e8e0b8', washA: 0.85, w: 2, col: '#4a4a2a' }); rect(-24, -80, 48, 40, { wash: '#f8f4e8', washA: 1, w: 1 }); txt('VINEGAR', 0, -54, 12, { font: 'Osw', col: '#3a3a1a' }); pop();
    if (t > EV.hz_vin && t < EV.hz_vin + 0.8) for (let i = 0; i < 6; i++) ell(130 + i * 6, 1300 - i * 30, 5, 9, { wash: '#e8d890', washA: 0.8, line: false });
    push(1020, 1450, 1); blob([[-70, 0], [-80, -120], [-50, -160], [50, -160], [80, -120], [70, 0]], { wash: '#e8dcc0', washA: 1, w: 2.4, col: '#6a5a3a' }); txt('SUGAR', 0, -70, 30, { font: 'Osw', col: '#5a4a2a' }); pencil([[-50, -160], [50, -160]], { w: 5, col: '#8a7a5a', pass2: false }); pop();
    if (t > EV.hz_sug && t < EV.hz_sug + 0.8) { const r = rng(hsh(FRAME, 27368)); for (let i = 0; i < 14; i++) ell(1000 + r() * 40, 1280 + r() * 160, 4, 4, { wash: '#ffffff', washA: 1, line: false }); }
    for (let i = 0; i < 3; i++) ketchupBottle(860 + i * 60, 1450, 0.42, t, { key: 27370 + i });
    castShadow(640, 1450, 320, 90, -0.5, 0.25);
  }
  WORLD.heinz = (t, u, cat) => {
    lay(9, () => { hall(t); haze('#ffe0b8', 0.05); });
    lay(3, () => { works(t); rival(t); shaft(820, 300, 280, 1300, 0.3, 'rgba(255,235,190,1)', 0.16); });
    lay(1, () => { lightPool(640, 1460, 700, 120, 'rgba(255,225,180,1)', 0.34); cat(); counter(t); });
    lay(0.65, () => { push(1220, 1900, 1.4); for (let i = 0; i < 3; i++) tomato(i * 70, -30 - (i % 2) * 30, 1.1, { key: 27380 + i }); pop(); push(-160, 200, 1.4); for (let i = 0; i < 3; i++) pencil([[i * 50, -400], [i * 50, 200 + i * 40]], { w: 6, col: '#3a3a3a', pass2: false }); pop();
      motes(16, [-200, 300, 1300, 1500], '#fff4d8', t, 27390, { sp: 3, sz: 3, a: 0.4, wob: 4 }); moodDark(600, 1000, 520, 1500, '#140a08', 0.45); });
  };
  DIR.heinz = {
    outfit: 'victorianA', light: { side: 1, rim: '#ffe8c0' }, grade: ['#ffb880', 0.06],
    act: () => [[S0.heinz, 'proud'], [EV.hz_tom, 'grin'], [EV.hz_heinz, 'proud'], [EV.hz_coal, 'suspicious'], [EV.hz_dark, 'annoyed'], [EV.hz_clear, 'grin']],
    pose: (t, u, b) => { const up = t > EV.hz_clear - 0.2;
      return Object.assign(b, { x: 680, y: 1600, s: 1.15, flip: true, look: t > EV.hz_coal && t < EV.hz_clear ? [-0.9, 0.2] : up ? [0.3, -0.8] : [-0.4, 0.3], hand: up ? [120, -480] : t > EV.hz_heinz ? [170, -300] : [150, -230], handF: [-90, -230], prop: t > EV.hz_heinz ? 'bottleP' : 'tomatoP', propAng: 0, tailUp: up }); },
    hud: t => { infoPlate(t, EV.hz_heinz, EV.hz_coal - 0.3, { kind: 'num', title: 'КЕТЧУП ХАЙНЦА', big: '1876', sub: 'томат · уксус · сахар' }); infoPlate(t, EV.hz_dark, S1.heinz - 0.15, { kind: 'swap', title: 'СТЕКЛО', a: 'ТЁМНОЕ', b: 'ПРОЗРАЧНОЕ', ia: (s, tt) => INGR_C27.coal(s, tt), ib: 'tomato', tb: EV.hz_clear }); },
    cam: () => [[S0.heinz, 540, 1020, 0.22], [EV.hz_tom, 560, 1100, 0.27], [EV.hz_heinz, 600, 1080, 0.26], [EV.hz_coal, 480, 1100, 0.27], [EV.hz_clear, 600, 1120, 0.3], [S1.heinz, 610, 1130, 0.31]]
  };
  // ---------------------------------------------------------------- переход: капли кетчупа стекают сверху занавесом, за ними фабрика
  TRANS_IN.heinz = { a: 0.25, b: 0.5, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), Y = lerp(-200, 2200, e); drawBuf(A, 1, 540, 960);
    scr(() => { const edge = []; for (let i = 0; i <= 27; i++) { const x = i * 40, d = (Math.sin(i * 2.3) * 0.5 + 0.5) * 260 + (i % 3) * 40; edge.push([x, Y + d - 260]); }
      ctx.save(); ctx.beginPath(); ctx.moveTo(-10, -10); edge.forEach(([x, y]) => ctx.lineTo(x, y)); ctx.lineTo(1090, -10); ctx.closePath(); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore();
      for (let i = 0; i < 27; i++) { const [x, y] = edge[i]; blob([[x - 4, y - 30], [x + 44, y - 30], [x + 40, y + 10], [x + 20, y + 46], [x, y + 10]], { wash: KC.red, washA: 1, w: 2, col: KC.redD }); }
      pencil(edge.map(([x, y]) => [x, y - 22]), { w: 26, col: KC.red, pass2: false }); pencil(edge.map(([x, y]) => [x, y - 30]), { w: 5, col: KC.redL, a: 0.6, pass2: false }); });
  } };
})();
