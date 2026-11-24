/* 028 — `crescent` (продолжение байки, сепия-гравюра): «Подняли тревогу — и испекли булочку-полумесяц, как на турецком флаге!» Венская площадь
   на рассвете после снятия осады: колокольня бьёт в набат, гвардейцы в кирасах бегут к стене, горожане с факелами, потом — праздник:
   флажки, шапки в воздух, трофейное османское знамя с полумесяцем на древке. Пекарская лавка с вывеской-кренделем, из печи выезжает
   противень с золотыми полумесяцами. Том-подмастерье поднимает булочку рядом со знаменем — силуэты совпадают. Главный свет — розовый
   рассвет за собором, второй — факелы. По словам: «тревогу» — колокол качается, люди бегут; «испекли» — лопата вытаскивает противень;
   «булочку-полумесяц,» — Том поднимает рогалик; «турецком флаге!» — пунктир сравнивает: полумесяц флага = булочка, толпа ликует.
   Переход В сцену: полумесяц-«луна» растёт из точки и открывает площадь. */
(() => {
  EV.cs_alarm = wtw('s2', 'тревогу');
  EV.cs_bake = wtw('s2', 'испекли');
  EV.cs_bun = wtw('s2', 'булочку-полумесяц,');
  EV.cs_flag = wtw('s2', 'флаге!');
  SHAKES.push([EV.cs_alarm, 0.15, 5]);
  KEYW.push('булочку-полумесяц,');
  const party = t => t > EV.cs_bun;

  function square(t) {                                                    // небо рассвета, собор со шпилем, фахверк и барочные фасады, колокольня
    vgrad(-500, 900, ['#5a6a9a', '#e8a8a0', '#f8d8b0']); glow(560, 380, 360, 'rgba(255,210,170,1)', 0.25);
    push(560, 700, 1); rect(-120, -500, 240, 500, { wash: '#a8907a', washA: 1, w: 2.4, col: '#4a3a2a', key: 28400 }); poly([[-120, -500], [0, -980], [120, -500]], { wash: '#8a7a6a', washA: 1, w: 2.4, col: '#3a2a1a' }); for (let i = 0; i < 8; i++) pencil([[-100 + i * 8, -500 - i * 56], [100 - i * 8, -500 - i * 56]], { w: 2, col: '#5a4a3a', pass2: false }); for (let i = 0; i < 3; i++) { blob([[-40, -380 + i * 110], [-40, -440 + i * 110], [0, -470 + i * 110], [40, -440 + i * 110], [40, -380 + i * 110]], { wash: '#3a2a2a', washA: 1, w: 1.6 }); } pop();
    for (let i = 0; i < 6; i++) { const x = -450 + i * 330, h = 420 + (i % 3) * 60; if (Math.abs(x - 560) < 180) continue; push(x, 900, 1); const b = rect(-150, -h, 300, h, { wash: ['#e8d8b8', '#d8c8a0', '#f0dcc0'][i % 3], washA: 1, w: 2, col: '#5a4a3a', key: 28410 + i }); hatch(b.path, b.bb, { gap: 16, a: 0.1, col: '#6a5a3a', ang: 0.8, key: 28420 + i }); blob([[-150, -h], [-100, -h - 90], [0, -h - 130], [100, -h - 90], [150, -h]], { wash: '#a8582a', washA: 1, w: 2 }); for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) rect(-110 + c * 80, -h + 50 + r * 120, 40, 70, { wash: '#4a5a6a', washA: 1, w: 1.4, col: '#f4f0e8' }); pop(); }
    push(100, 520, 1); pencil([[0, 0], [0, -200]], { w: 6, col: '#3a2a1a', pass2: false }); const sw = t > EV.cs_alarm && t < EV.cs_bake + 0.5 ? Math.sin(t * 10) * 0.5 : 0; push(0, -200, 1, sw); blob([[-40, 0], [-34, -70], [0, -86], [34, -70], [40, 0]], { wash: '#c8a040', washA: 1, w: 2 }); pop(); pop();
    rect(-500, 900, 2200, 600, { wash: '#a89878', washA: 1, line: false }); for (let r = 0; r < 7; r++) for (let i = 0; i < 22; i++) ell(-480 + i * 100 + (r % 2) * 50, 920 + r * 70, 46, 24, { wash: ['#9a8a6a', '#b0a080'][(i + r) % 2], washA: 1, w: 1, col: '#6a5a3a' });
  }
  function crowd(t) {                                                     // гвардейцы бегут к стене (тревога), потом горожане ликуют, шапки летят
    const p = party(t);
    for (let i = 0; i < 4; i++) { const run = t > EV.cs_alarm && t < EV.cs_bun, x = p ? -60 + i * 340 : -100 + i * 320 + (run ? (t - EV.cs_alarm) * 260 : 0); human(x, 1260 + (i % 2) * 20, 0.95, t, { body: ['#3a4a6a', '#8a2a2a', '#4a5a3a', '#6a4a2a'][i], legs: '#2a2a2a', hair: '#4a2a14', face: p ? 'grin' : run ? 'shock' : 'calm', armL: p ? 'up' : 'swing', armR: p ? 'wave' : run ? 'swing' : 'hold', look: 0.4, seed: 28430 + i, hat: i % 2 ? 'helmet' : 'cap', hatCol: '#3a2a1a', prop: i === 1 && !p ? 'spear' : undefined }); }
    if (p) { const r = rng(hsh(FRAME, 28440)); for (let i = 0; i < 18; i++) { const x = -200 + r() * 1500, y = 600 + ((t - EV.cs_bun) * -400 + r() * 700) % 700; rect(x, y, 14, 10, { wash: ['#c8201a', '#f8f4ec', '#f0c030'][i % 3], washA: 1, line: false }); } }
    push(1000, 1300, 1); ottomanFlag(0, 0, 1.1, t, { key: 28441 }); pop();
    push(260, 1260, 1); rect(-180, -400, 360, 400, { wash: '#8a5a3a', washA: 1, w: 3, col: '#2a1408' }); rect(-150, -360, 300, 220, { wash: '#2a1a10', washA: 1, w: 2 }); glow(0, -250, 160, 'rgba(255,160,80,1)', 0.3); pencil([[0, -400], [0, -470]], { w: 4, col: '#3a2a1a', pass2: false }); pencil(spline([[-40, -500], [0, -470], [40, -500], [0, -530], [-40, -500]], true, 6), { w: 10, col: '#c8883a', pass2: false });
    const tr = t > EV.cs_bake ? clamp((t - EV.cs_bake) / 0.6) : 0; push(0, -250 + tr * 40, 1); pencil([[0, 0], [260 * tr, 0]], { w: 8, col: '#8a6a3a', pass2: false }); rect(260 * tr - 80, -14, 180, 14, { wash: '#4a4a4a', washA: 1, w: 1.4 }); for (let i = 0; i < 3; i++) kipferl(260 * tr - 50 + i * 55, -16, 0.26, t, { key: 28442 + i }); pop(); pop();
  }
  function compare(t) {                                                   // пунктир: полумесяц знамени = булочка в лапе
    if (t < EV.cs_flag - 0.1) return; const k = clamp((t - EV.cs_flag + 0.1) / 0.4);
    for (let i = 0; i < 10; i++) { const q = i / 10; if (q > k) break; ell(lerp(720, 1080, q), lerp(1000, 900, q), 8, 8, { wash: '#ffe070', washA: 1, line: false }); }
    push(900, 820, popK(t, EV.cs_flag, 0.35)); txt('=', 0, 0, 120, { font: 'Osw', col: '#ffe070' }); pop();
  }
  function stall(t) {                                                     // прилавок: противни рогаликов, корзина, мешок муки
    const tb = rect(-500, 1440, 2200, 600, { wash: '#7a5434', washA: 1, w: 3, col: '#2a1408', key: 28450 }); shadeG(tb.path, 0, 1440, 0, 1900, '#3a2010', 0.5);
    push(330, 1450, 1); rect(-150, -12, 300, 12, { wash: '#5a5a5a', washA: 1, w: 1.6 }); for (let i = 0; i < 4; i++) kipferl(-110 + i * 72, -20, 0.3, t, { key: 28451 + i }); pop();
    push(1000, 1450, 1); blob([[-90, 0], [-100, -70], [100, -70], [90, 0]], { wash: '#c89a5a', washA: 1, w: 2.4 }); for (let i = 0; i < 4; i++) kipferl(-60 + i * 40, -80 - (i % 2) * 10, 0.22, t, { key: 28456 + i }); pop();
    castShadow(640, 1450, 320, 90, 0.5, 0.28);
  }
  WORLD.crescent = (t, u, cat) => {
    lay(10, () => { square(t); haze('#ffd8c0', 0.06); });
    lay(2.6, () => { crowd(t); lightPool(260, 1260, 420, 100, 'rgba(255,170,90,1)', 0.3); });
    lay(1, () => { lightPool(600, 1460, 660, 120, 'rgba(255,210,170,1)', 0.32); cat(); stall(t); compare(t); });
    lay(0.65, () => { push(-150, 600, 1.4); for (let i = 0; i < 6; i++) { const y = i * 40 + Math.sin(t * 3 + i) * 6; poly([[i * 60, y], [i * 60 + 50, y], [i * 60 + 25, y + 50]], { wash: ['#c8201a', '#f8f4ec', '#f0c030'][i % 3], washA: 1, w: 1 }); } pencil(Array.from({ length: 7 }, (_, i) => [i * 60, i * 40 + Math.sin(t * 3 + i) * 6]), { w: 2, col: '#3a2a1a', pass2: false }); pop();
      push(1230, 1600, 1.4); pencil([[0, 0], [0, -400]], { w: 8, col: '#5a3a1a', pass2: false }); ell(0, -420, 20, 36, { wash: '#ff9030', washA: 1, line: false }); glow(0, -420, 120, 'rgba(255,150,60,1)', 0.3); pop();
      motes(14, [-200, 300, 1300, 1500], '#ffe0c0', t, 28490, { sp: 3, sz: 3, a: 0.35, wob: 4 }); moodDark(600, 1000, 520, 1500, '#140a10', 0.42); screenFill('#704a20', 0.08, 'multiply'); });
  };
  DIR.crescent = {
    outfit: 'uchenikA', light: { side: 1, rim: '#ffd0b0' }, grade: ['#c89060', 0.12],
    act: () => [[S0.crescent, 'shock'], [EV.cs_bake, 'grin'], [EV.cs_bun, 'proud'], [EV.cs_flag, 'laugh']],
    pose: (t, u, b) => { const up = t > EV.cs_bun - 0.1; return Object.assign(b, { x: 640, y: 1600, s: 1.15, flip: false, look: up ? [0.7, -0.4] : [-0.5, 0.2], hand: up ? [140, -440] : [150, -230], handF: [-90, -230], prop: up ? 'kipferlP' : undefined, tailUp: up }); },
    cam: () => [[S0.crescent, 580, 1040, 0.22], [EV.cs_bake, 560, 1100, 0.27], [EV.cs_flag, 700, 1080, 0.27], [S1.crescent, 710, 1090, 0.28]]
  };
  // ---------------------------------------------------------------- переход: полумесяц растёт из точки и открывает площадь
  TRANS_IN.crescent = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), R = lerp(10, 2000, e * e); drawBuf(A, 1, 540, 960);
    scr(() => { ctx.save(); ctx.beginPath(); ctx.arc(540, 960, R, 0, 6.283); if (e < 0.9) ctx.arc(540 + R * 0.45, 960 - R * 0.1, R * 0.85 * (1 - e), 0, 6.283, true); ctx.clip('evenodd'); drawBuf(B, 1, 540, 960); ctx.restore(); pencil(ellPts(540, 960, R, R, 0, 0, 60), { w: 10, col: '#f8e8a0', a: 1 - e, pass2: false }); });
  } };
})();
