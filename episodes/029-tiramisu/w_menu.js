/* 029 — `menu`: «В 1972-м десерт вписали в меню, а в 1981-м журнал назвал Тревизо его родиной.» Зал ресторана 70-х: скатерти в красную
   клетку, бутылки в соломенной оплётке, лампы-абажуры, стены с фресками и фото, меловая доска меню, окно на портик с прохожими и Vespa;
   гости ужинают, пожилая пара, семья. Том — официант в чёрном с полотенцем на руке. Главный свет — тёплые абажуры, второй — вечернее окно.
   По словам: «1972-м» — Том мелом выводит «Tiramesù» на доске; «меню,» — гости тянут руки — заказ; «1981-м» — в кадр влетает журнал
   и раскрывается заголовком «TIRAMISÙ: NATO A TREVISO»; «родиной.» — гости аплодируют, повар кланяется. Переход В сцену: клетчатую
   скатерть сдёргивают «фокусом» через кадр — за ней зал. */
(() => {
  EV.mn_72 = wtw('s3', '1972-м');
  EV.mn_menu = wtw('s3', 'меню,');
  EV.mn_81 = wtw('s3', '1981-м');
  EV.mn_mag = wtw('s3', 'журнал');
  EV.mn_home = wtw('s3', 'родиной.');
  KEYW.push('1981-м');

  function hall(t) {                                                      // стены с фреской, фото, окно на портик, доска меню, абажуры
    vgrad(-500, 1500, ['#c89a6a', '#e0b888', '#d0a878']); rect(-500, 900, 2200, 600, { wash: '#7a3a24', washA: 1, w: 2, col: '#3a1a10' }); for (let i = 0; i < 12; i++) rect(-500 + i * 200, 920, 180, 520, { wash: '#8a4a2a', washA: 1, w: 1.6, col: '#3a1a10' });
    push(-60, 420, 1); rect(-240, -200, 480, 300, { wash: '#a8c8d8', washA: 1, w: 6, col: '#6a4a2a' }); sil([[-240, 40], [-120, -60], [0, 0], [140, -80], [240, 30], [240, 100], [-240, 100]], '#8aa870', 1); for (let i = 0; i < 4; i++) { pencil([[-200 + i * 120, 60], [-200 + i * 120, -40]], { w: 3, col: '#4a3a1a', pass2: false }); blob([[-216 + i * 120, -30], [-200 + i * 120, -90], [-184 + i * 120, -30]], { wash: '#2a5a2a', washA: 1, line: false }); } pop();
    push(520, 360, 1); const w = rect(-150, -220, 300, 440, { wash: '#2a3a5a', washA: 1, w: 8, col: '#5a3a1a', key: 29500 }); ctx.save(); ctx.clip(w.path); vgrad(-220, 220, ['#2a3a6a', '#e8986a']); for (let i = 0; i < 3; i++) blob([[-150 + i * 110, 220], [-150 + i * 110, 40], [-95 + i * 110, -20], [-40 + i * 110, 40], [-40 + i * 110, 220]], { wash: '#d8b080', washA: 1, w: 2 }); const vx = ((t * 120) % 600) - 300; push(vx, 180, 0.5); ell(-60, 0, 30, 30, { wash: '#1a1a1a', washA: 1, w: 2 }); ell(60, 0, 30, 30, { wash: '#1a1a1a', washA: 1, w: 2 }); blob([[-80, -10], [-40, -70], [60, -60], [80, -10]], { wash: '#6ac8b0', washA: 1, w: 2 }); pop(); ctx.restore(); pop();
    push(900, 460, 1); rect(-170, -230, 340, 420, { wash: '#2a3a34', washA: 1, w: 8, col: '#6a4a2a', key: 29501 }); txt('MENU', 0, -170, 44, { font: 'Hand', col: '#f8f4ec' }); const d = [['Risotto', '1500'], ['Radicchio', '1200'], ['Baccalà', '1800']]; d.forEach(([a, b], i) => { txt(a, -40, -110 + i * 54, 30, { font: 'Hand', col: '#f8f4ec' }); txt(b, 110, -110 + i * 54, 26, { font: 'Hand', col: '#f0c060' }); });
    if (t > EV.mn_72) { const k = clamp((t - EV.mn_72) / 0.9); txt('Tiramesù', -20, 70, 46, { font: 'Hand', col: '#f8e080', reveal: k }); txt('1972', 110, 130, 26, { font: 'Hand', col: '#f0c060', a: k }); } hudBox('доска меню', -170, -230, 170, 190); pop();
    for (const x of [120, 700]) { push(x, -60, 1); pencil([[0, -300], [0, 0]], { w: 3, col: '#2a2a2a', pass2: false }); blob([[-90, 0], [-60, -60], [60, -60], [90, 0]], { wash: '#c8302a', washA: 1, w: 2 }); glow(0, 30, 200, 'rgba(255,200,140,1)', 0.3); pop(); }
  }
  function guests(t) {                                                    // пожилая пара, семья; тянутся к меню, аплодируют журналу
    const want = t > EV.mn_menu && t < EV.mn_81, clap = t > EV.mn_home;
    for (const [x, sd, fl, body] of [[140, 29510, 1, '#3a4a6a'], [320, 29511, 1, '#8a3a4a'], [960, 29512, -1, '#4a6a3a']]) human(x, 1300, x === 320 ? 0.95 : 1.0, t, { body, legs: '#2a2a2a', hair: sd === 29510 ? '#c8c8c8' : '#3a2010', face: clap ? 'grin' : want ? 'smile' : 'calm', armL: clap ? 'up' : 'hold', armR: want || clap ? 'up' : 'hold', look: 0.4 * fl, seed: sd, flip: fl, long: sd === 29511 ? 1 : 0 });
    push(240, 1220, 1); rect(-160, -10, 320, 20, { wash: '#f4ecd8', washA: 1, w: 1.6 }); for (let i = 0; i < 8; i++) rect(-160 + i * 40, -10, 20, 20, { wash: '#c8302a', washA: 0.8, line: false }); blob([[-20, -10], [-26, -90], [-10, -110], [-8, -150], [8, -150], [10, -110], [26, -90], [20, -10]], { wash: '#3a6a2a', washA: 1, w: 1.6 }); blob([[-24, -10], [-26, -70], [26, -70], [24, -10]], { wash: '#c8a060', washA: 1, w: 1.4 }); pop();
  }
  function counter(t) {                                                   // стол Тома: скатерть в клетку, тирамису порциями, журнал 1981
    const tb = rect(-500, 1440, 2200, 600, { wash: '#f4ecd8', washA: 1, w: 3, col: '#8a7a5a', key: 29520 }); ctx.save(); ctx.clip(tb.path); for (let i = 0; i < 30; i++) { rect(-500 + i * 80, 1440, 40, 600, { wash: '#c8302a', washA: 0.3, line: false }); rect(-500, 1440 + i * 80, 2200, 40, { wash: '#c8302a', washA: 0.3, line: false }); } ctx.restore(); shadeG(tb.path, 0, 1440, 0, 1900, '#a89070', 0.35);
    for (let i = 0; i < 3; i++) tiraCup(260 + i * 120, 1450, 0.6, t, { key: 29521 + i, spoon: i === 1 });
    if (t > EV.mn_81 - 0.1) { const k = sm(clamp((t - EV.mn_81 + 0.1) / 0.5)); push(lerp(1300, 900, k), lerp(900, 1380, k), 1, lerp(1.2, -0.1, k)); rect(-150, -100, 300, 200, { wash: '#f8f4ec', washA: 1, w: 2.4, col: '#3a3a3a' }); rect(-150, -100, 300, 40, { wash: '#8a2a1a', washA: 1, line: false }); txt('VIN VENETO · 1981', 0, -72, 20, { font: 'Osw', col: '#f8f4ec' }); txt('TIRAMISÙ:', 0, -20, 34, { font: 'Osw', col: '#2a2a2a' }); txt('NATO A TREVISO', 0, 20, 28, { font: 'Osw', col: '#a8241e' }); tiraCup(0, 90, 0.28, t, { spoon: false, key: 29525 }); pop(); }
    castShadow(640, 1450, 320, 90, 0.5, 0.25);
  }
  WORLD.menu = (t, u, cat) => {
    lay(9, () => { hall(t); haze('#ffd8b0', 0.05); });
    lay(2.6, () => { guests(t); });
    lay(1, () => { lightPool(560, 1460, 660, 120, 'rgba(255,215,160,1)', 0.35); cat(); counter(t); });
    lay(0.65, () => { push(-150, 1950, 1.4); blob([[-30, 0], [-36, -150], [-14, -190], [-12, -260], [12, -260], [14, -190], [36, -150], [30, 0]], { wash: '#3a6a2a', washA: 1, w: 3 }); blob([[-34, 0], [-36, -110], [36, -110], [34, 0]], { wash: '#c8a060', washA: 1, w: 2 }); pop(); push(1230, 1950, 1.4); ell(0, -30, 120, 30, { wash: '#f8f4ec', washA: 1, w: 3 }); for (let i = 0; i < 3; i++) tiraCup(-60 + i * 60, -40, 0.5, t, { spoon: false, key: 29530 + i }); pop();
      motes(12, [-200, 300, 1300, 1500], '#fff0d8', t, 29590, { sp: 3, sz: 3, a: 0.35, wob: 4 }); moodDark(560, 1000, 520, 1500, '#140a06', 0.42); });
  };
  DIR.menu = {
    outfit: 'waiterS', light: { side: 1, rim: '#ffd8a8' }, grade: ['#ffb880', 0.06],
    act: () => [[S0.menu, 'proud'], [EV.mn_72, 'grin'], [EV.mn_menu, 'smug'], [EV.mn_81, 'awe'], [EV.mn_home, 'proud']],
    pose: (t, u, b) => { const wr = t > EV.mn_72 - 0.2 && t < EV.mn_menu + 0.3; return Object.assign(b, { x: 680, y: 1600, s: 1.15, flip: false, look: wr ? [0.8, -0.6] : t > EV.mn_81 ? [0.6, 0.5] : [-0.3, 0.2], hand: wr ? [260, -420] : [150, -240], handF: [-90, -230], prop: wr ? undefined : 'menuP', tailUp: t > EV.mn_home }); },
    hud: t => infoPlate(t, EV.mn_mag, S1.menu - 0.15, { kind: 'num', title: 'ПЕРВОЕ В ПЕЧАТИ', big: '1981', sub: '«родина — Тревизо»', y: 700 }),
    cam: () => [[S0.menu, 560, 1040, 0.22], [EV.mn_72, 640, 1060, 0.25], [EV.mn_81, 600, 1120, 0.28], [S1.menu, 610, 1130, 0.29]]
  };
  // ---------------------------------------------------------------- переход: клетчатую скатерть сдёргивают через кадр — за ней зал
  TRANS_IN.menu = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), x = lerp(0, -1700, e); drawBuf(B, 1, 540, 960);
    scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(x - 200, -10, 1300, 1940); ctx.clip(); drawBuf(A, 1, 540 + x * 0.3, 960); ctx.restore(); const p = rect(x + 1080, -40, 220, 2000, { wash: '#f4ecd8', washA: 1, w: 4, col: '#8a7a5a', key: 29598 }); for (let i = 0; i < 26; i++) { rect(x + 1080, -40 + i * 80, 220, 40, { wash: '#c8302a', washA: 0.5, line: false }); } for (let i = 0; i < 3; i++) rect(x + 1080 + i * 80, -40, 40, 2000, { wash: '#c8302a', washA: 0.4, line: false }); });
  } };
})();
