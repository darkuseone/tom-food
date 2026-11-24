/* 029 — `hook`: «Тирамису моложе „Звёздных войн“! Я посчитал: в книгах он только с 1981-го. Кто автор? / Откусим историю!» ВАУ-КАДР:
   макро — ложка ныряет в форму тирамису, облако какао взрывается, слои крема и пропитанного печенья во весь кадр; отъезд — вечерняя
   гостиная, «киноночь»: телевизор с космической битвой (условные кораблики и лучи), диван с пледом, торшер, попкорн, полка с видеокассетами
   и дисками, постер с планетой, окно с ночным городом; друг в пижаме, сестра под пледом. Том — в зелёном худи «ТОМ», на коленях форма
   тирамису. По словам: «„Звёздных войн“!» — по экрану ТВ летят лучи, вспышка отражается на лицах; «посчитал» — над Томом счёты/калькулятор
   «1981 − 1977 = 4»; «1981-го.» — штамп «1981» на крышке формы; «автор?» — «?»; «Откусим» — Том зачерпывает ложку. Главный свет — экран ТВ
   (холодный, мигает), второй — тёплый торшер. Финал `button` — продолжение today. */
(() => {
  EV.hk_sw = wtw('h1', '«Звёздных');
  EV.hk_count = wtw('h1', 'посчитал:');
  EV.hk_81 = wtw('h1', '1981-го.');
  EV.hk_q = wtw('h1', 'автор?');
  EV.hk_bite = wtw('h2', 'Откусим');
  SHAKES.push([EV.hk_sw + 0.2, 0.15, 6], [EV.hk_bite + 0.05, 0.12, 5]);
  KEYW.push('«Звёздных', 'войн»!');
  const pk = t => sm(clamp((t - 0.6) / 0.9));

  function room(t) {                                                      // стены: обои в полоску, окно с городом, полка кассет, постер, торшер
    vgrad(-500, 1500, ['#2a2440', '#3a3050', '#4a3a58']); for (let i = 0; i < 20; i++) pencil([[-500 + i * 110, -500], [-500 + i * 110, 1500]], { w: 18, col: '#352c4a', a: 0.6, pass2: false });
    push(220, 420, 1); const w = rect(-200, -260, 400, 420, { wash: '#0e1430', washA: 1, w: 8, col: '#5a4a3a', key: 29200 }); ctx.save(); ctx.clip(w.path); vgrad(-260, 160, ['#0a0e2a', '#1a2050']); for (let i = 0; i < 5; i++) { rect(-200 + i * 90, -60 - (i % 3) * 50, 80, 300, { wash: '#1a1a30', washA: 1, w: 1 }); windows(-194 + i * 90, -50 - (i % 3) * 50, 68, 200, 2, 5, 29201 + i, 0.5, '#ffd890', '#90e0ff', 0.8); } ctx.restore(); pencil([[0, -260], [0, 160]], { w: 6, col: '#5a4a3a', pass2: false }); pop();
    push(700, 420, 1); rect(-240, 0, 480, 14, { wash: '#6a4a2a', washA: 1, w: 1.6 }); const r = rng(29205); for (let i = 0; i < 16; i++) rect(-230 + i * 29, -90, 24, 90, { wash: ['#1a1a1a', '#c8302a', '#2a4a8a', '#e8c040'][Math.floor(r() * 4)], washA: 1, w: 1, col: '#0a0a0a' }); rect(-240, 160, 480, 14, { wash: '#6a4a2a', washA: 1, w: 1.6 }); for (let i = 0; i < 5; i++) ell(-180 + i * 90, 120, 34, 34, { wash: '#c8ccd4', washA: 1, w: 1.4 }); pop();
    push(860, 560, 0.75); rect(-110, -160, 220, 320, { wash: '#0a0a1a', washA: 1, w: 3, col: '#c8a040' }); ell(0, -10, 70, 70, { wash: '#e8783a', washA: 1, w: 2 }); pencil(ellPts(0, -10, 110, 22, -0.3, 0, 30), { w: 5, col: '#f0c060', pass2: false }); for (let i = 0; i < 12; i++) { const rr = rng(29206 + i); ell(-100 + rr() * 200, -150 + rr() * 300, 2, 2, { wash: '#ffffff', washA: 1, line: false }); } pop();
  }
  function tv(t) {                                                        // телевизор-кинескоп: космическая битва, лучи, вспышки — главный свет
    push(560, 1130, 1); rect(-230, -330, 460, 330, { wash: '#2a2a2e', washA: 1, w: 4, col: '#0a0a0a', key: 29210 }); const scrn = rect(-200, -305, 400, 280, { wash: '#05050f', washA: 1, w: 2, col: '#1a1a1a' }); ctx.save(); ctx.clip(scrn.path);
    const r = rng(29211); for (let i = 0; i < 30; i++) ell(-200 + r() * 400, -305 + ((r() * 280 + t * 60) % 280), 2, 2, { wash: '#ffffff', washA: 0.8, line: false });
    for (let i = 0; i < 3; i++) { const x = -150 + ((t * 120 + i * 140) % 400), y = -220 + i * 60 + Math.sin(t * 3 + i) * 20; poly([[x - 30, y], [x + 20, y - 10], [x + 30, y], [x + 20, y + 10]], { wash: i % 2 ? '#c8ccd4' : '#8a8e96', washA: 1, w: 1.4 }); }
    if (t > EV.hk_sw) for (let i = 0; i < 4; i++) { const k = ((t - EV.hk_sw) * 3 + i * 0.25) % 1; pencil([[-200 + k * 400, -260 + i * 50], [-140 + k * 400, -260 + i * 50]], { w: 6, col: i % 2 ? '#ff4040' : '#40ff80', pass2: false }); }
    ctx.restore(); glow(0, -160, 360, t > EV.hk_sw ? 'rgba(140,200,255,1)' : 'rgba(120,160,220,1)', 0.3 + (t > EV.hk_sw ? 0.1 * Math.abs(Math.sin(t * 20)) : 0)); rect(-180, 0, 360, 40, { wash: '#4a3a2a', washA: 1, w: 2 }); for (const x of [-120, 120]) pencil([[x, -330], [x * 1.4, -470]], { w: 3, col: '#3a3a3a', pass2: false }); pop();
  }
  function folk(t) {                                                      // друг в пижаме с попкорном, сестра под пледом
    const sw = t > EV.hk_sw && t < EV.hk_81;
    human(140, 1310, 1.0, t, { body: '#3a6aa8', legs: '#3a6aa8', hair: '#3a2010', face: sw ? 'shock' : 'smile', armL: 'hold', armR: sw ? 'up' : 'hold', look: 0.5, seed: 29220 }); push(190, 1060, 1); blob([[-40, 0], [-46, -70], [46, -70], [40, 0]], { wash: '#c8302a', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) pencil([[-36 + i * 24, 0], [-40 + i * 26, -70]], { w: 8, col: '#f8f4ec', pass2: false }); for (let i = 0; i < 7; i++) ell(-36 + i * 12, -78 - (i % 2) * 10, 12, 10, { wash: '#fff4c0', washA: 1, w: 1 }); pop();
    human(1000, 1320, 0.9, t, { body: '#e87aa0', legs: '#e87aa0', hair: '#c88a3a', face: t > EV.hk_bite ? 'grin' : 'smile', armL: 'hold', armR: 'hold', look: -0.5, seed: 29221, flip: -1 }); blob([[900, 1320], [890, 1150], [1100, 1140], [1110, 1320]], { wash: '#8a6ac8', washA: 1, w: 2 });
  }
  function sofa(t) {                                                      // диван, плед, форма тирамису (герой), калькулятор, торшер
    const sb = rect(-500, 1440, 2200, 600, { wash: '#8a3a3a', washA: 1, w: 3, col: '#3a1010', key: 29230 }); shadeG(sb.path, 0, 1440, 0, 1900, '#4a1414', 0.5); for (let i = 0; i < 5; i++) pencil([[-500 + i * 450, 1440], [-500 + i * 450, 1900]], { w: 4, col: '#5a2020', pass2: false });
    tiramisuDish(380, 1460, 0.7, t, { key: 29231, scoop: t > EV.hk_bite });
    if (t > EV.hk_81) { push(380, 1290, popK(t, EV.hk_81, 0.3), -0.12); rect(-100, -34, 200, 68, { wash: '#c8201a', washA: 0.15, w: 6, col: '#c8201a' }); txt('1981', 0, 18, 50, { font: 'Osw', col: '#c8201a' }); pop(); }
    if (t > EV.hk_count && t < EV.hk_q) { push(560, 860, popK(t, EV.hk_count, 0.35)); rect(-200, -60, 400, 110, { wash: '#2a2a2e', washA: 1, w: 3, col: '#0a0a0a' }); rect(-180, -44, 360, 76, { wash: '#a8c8a0', washA: 1, w: 1.4 }); txt('1981 − 1977 = 4', 0, 10, 44, { font: 'Osw', col: '#1a2a1a' }); hudBox('калькулятор', -200, -60, 200, 50); pop(); }
    if (t > EV.hk_q && t < EV.hk_bite + 0.4) { push(380, 1100, popK(t, EV.hk_q, 0.35)); txt('?', 0, 0, 140, { font: 'Osw', col: '#ffe070' }); pop(); }
    castShadow(640, 1450, 320, 90, 0.5, 0.25);
  }
  function macro(t) {                                                     // ВАУ: ложка ныряет в тирамису, облако какао → отъезд
    const k = pk(t); if (k >= 1) return; const a = 1 - sm(clamp((k - 0.7) / 0.3));
    scr(() => { ctx.save(); ctx.globalAlpha = a; vgrad(0, 1920, ['#2a1408', '#4a2a14', '#2a1408']); tiramisuDish(540, 1500 - k * 300, 3.6 - k * 2.8, t, { key: 29240, scoop: t > 0.3 });
      const sp = clamp(t / 0.35); push(560, lerp(-200, 700, sp), 3 - k * 2, -0.3); pencil([[0, 0], [0, -500]], { w: 30, col: '#c8ccd4', pass2: false }); ell(0, 60, 70, 100, { wash: '#d8dce4', washA: 1, w: 3 }); pop();
      if (t > 0.3) { const q = clamp((t - 0.3) / 0.9), r = rng(29241); for (let i = 0; i < 40; i++) { const an = r() * 6.28, d = 60 + q * (200 + r() * 700); ell(540 + Math.cos(an) * d, 800 + Math.sin(an) * d * 0.6 - q * 200, 8, 8, { wash: TI.cocoaL, washA: 1 - q * 0.6, line: false }); } }
      ctx.restore(); });
  }
  WORLD.hook = (t, u, cat) => {
    lay(9, () => { room(t); haze('#4a3a6a', 0.05); });
    lay(2.6, () => { folk(t); tv(t); });
    lay(1, () => { lightPool(560, 1420, 680, 120, 'rgba(160,200,255,1)', 0.3); cat(); sofa(t); });
    lay(0.65, () => { push(-150, 1500, 1.4); pencil([[0, 400], [0, -500]], { w: 8, col: '#2a2a2a', pass2: false }); blob([[-90, -500], [-60, -620], [60, -620], [90, -500]], { wash: '#f8d890', washA: 0.95, w: 3, col: '#6a5a3a' }); glow(0, -540, 200, 'rgba(255,210,140,1)', 0.3); pop(); push(1230, 1950, 1.4); for (let i = 0; i < 4; i++) ell(i * 30, -40 - i * 20, 50, 16, { wash: ['#f0c040', '#e8f0f0'][i % 2], washA: 1, w: 2 }); pop();
      motes(10, [200, 600, 900, 1300], '#c8e0ff', t, 29290, { sp: 2, sz: 3, a: 0.3, wob: 3 }); moodDark(560, 1000, 520, 1500, '#060410', 0.45); });
    macro(t);
  };
  DIR.hook = {
    outfit: 'hoodiePZ', light: { side: 1, rim: '#a8d0ff' }, grade: ['#8aa0e0', 0.05],
    act: () => [[0, 'awe'], [EV.hk_sw, 'shock'], [EV.hk_count, 'suspicious'], [EV.hk_81, 'proud'], [EV.hk_q, 'sideeye'], [EV.hk_bite, 'smug'], [EV.hk_bite + 0.25, 'grin']],
    pose: (t, u, b) => { const cnt = t > EV.hk_count && t < EV.hk_q, bite = t > EV.hk_bite;
      return Object.assign(b, { x: 720, y: 1600, s: 1.16, flip: true, look: t > EV.hk_sw && t < EV.hk_count ? [-0.6, -0.3] : cnt ? [-0.3, -0.8] : [-0.4, 0.4], hand: cnt ? [80, -400] : bite ? [80, -320] : [190, -250], handF: cnt ? [-80, -400] : [-90, -230], point: cnt ? 1 : undefined,
        prop: 'spoonTiraP', propAng: 0, squint: bite && t < EV.hk_bite + 0.6, tailUp: bite }); },
    cam: () => [[0, 560, 1060, 0.24], [EV.hk_sw, 560, 1080, 0.26], [EV.hk_count, 600, 1100, 0.27], [EV.hk_bite, 620, 1160, 0.32], [S1.hook, 630, 1170, 0.34]]
  };
})();
