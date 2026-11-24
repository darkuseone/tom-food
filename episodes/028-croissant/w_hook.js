/* 028 — `hook`: «Круассан испекли назло туркам? Я проверил эту байку — она треснула. Кто автор? / Откусим историю!» ВАУ-КАДР: макро —
   золотой круассан во весь кадр, по нему бежит блик, он с хрустом ломается — хлопья-лепестки разлетаются в замедленной съёмке, внутри соты;
   отъезд — утренняя терраса парижского кафе: полосатая маркиза, круглые столики, плетёные стулья, цинковые крыши и труба, Эйфелева башня
   в дымке, велосипед с багетами, официант с подносом, газетный киоск. Том — парижанин в канотье с круассаном и кофе. По словам: «туркам?» —
   в чашке кофе проступает отражение полумесяца-флага; «проверил» — Том с лупой разглядывает круассан; «треснула.» — круассан хрустит и
   ломается в лапах; «Кто автор?» — «?» над половинками; «Откусим» — Том кусает, крошки летят. Главный свет — низкое утреннее солнце, второй —
   тёплое окно кафе. Финал `button` — продолжение today. */
(() => {
  EV.hk_turk = wtw('h1', 'туркам?');
  EV.hk_check = wtw('h1', 'проверил');
  EV.hk_crack = wtw('h1', 'треснула.');
  EV.hk_q = wtw('h1', 'автор?');
  EV.hk_bite = wtw('h2', 'Откусим');
  SHAKES.push([EV.hk_crack, 0.15, 7], [EV.hk_bite + 0.05, 0.14, 6]);
  KEYW.push('треснула.');
  const pk = t => sm(clamp((t - 0.9) / 1.0));

  function city(t) {                                                      // утреннее небо, цинковые крыши с трубами, Эйфелева башня в дымке, голуби
    vgrad(-500, 900, ['#9ab8d8', '#f8d8b8', '#fbe8c8']); glow(200, 200, 300, 'rgba(255,230,180,1)', 0.3);
    push(860, 520, 0.9); pencil([[-120, 0], [0, -560], [120, 0]], { w: 10, col: '#7a6a6a', pass2: false }); for (let i = 1; i < 6; i++) pencil([[-120 + i * 20, -i * 90], [120 - i * 20, -i * 90]], { w: 5, col: '#7a6a6a', pass2: false }); pencil(spline([[-80, -10], [0, -120], [80, -10]], false, 6), { w: 6, col: '#7a6a6a', pass2: false }); pencil([[0, -560], [0, -640]], { w: 4, col: '#7a6a6a', pass2: false }); pop();
    for (let i = 0; i < 6; i++) { const x = -450 + i * 330, h = 300 + (i % 3) * 60; push(x, 900, 1); rect(-150, -h, 300, h, { wash: ['#e8dcc8', '#f0e4d0', '#dccfb8'][i % 3], washA: 1, w: 2, col: '#6a5a4a', key: 28200 + i }); poly([[-160, -h], [-120, -h - 80], [120, -h - 80], [160, -h]], { wash: '#7a8490', washA: 1, w: 2, col: '#3a4450' }); for (let c = 0; c < 3; c++) { rect(-110 + c * 80, -h - 60, 34, 40, { wash: '#a8b4c0', washA: 1, w: 1.4 }); rect(-110 + c * 80, -h + 40, 44, 70, { wash: '#4a5a6a', washA: 1, w: 1.4, col: '#f8f4ec' }); rect(-114 + c * 80, -h + 100, 52, 8, { wash: '#2a2a2a', washA: 1, line: false }); } rect(80, -h - 120, 30, 50, { wash: '#a85a3a', washA: 1, w: 1.4 }); pop(); }
    for (let i = 0; i < 4; i++) { const x = ((t * 40 + i * 330) % 1600) - 200, y = 160 + i * 40 + Math.sin(t * 3 + i) * 8; ell(x, y, 10, 6, { wash: '#6a6a74', washA: 1, line: false }); pencil([[x - 14, y - 2 + Math.sin(t * 12 + i) * 6], [x, y]], { w: 3, col: '#6a6a74', pass2: false }); }
  }
  function cafe(t) {                                                      // фасад кафе: маркиза в полоску, окно, вывеска, киоск, велосипед с багетами, официант
    push(540, 0, 1); rect(-700, 900, 1400, 600, { wash: '#2a4a3a', washA: 1, w: 3, col: '#0a1a10' }); rect(-640, 940, 600, 380, { wash: '#f8d890', washA: 0.85, w: 6, col: '#1a2a20' }); glow(-340, 1130, 300, 'rgba(255,215,140,1)', 0.25); for (let i = 0; i < 5; i++) { croissant(-560 + i * 120, 1300, 0.28, t, { key: 28210 + i }); }
    txt('CAFÉ · BOULANGERIE', 300, 990, 40, { font: 'Osw', col: '#f4e8c8' });
    for (let i = 0; i < 14; i++) { const x = -700 + i * 100; poly([[x, 820], [x + 100, 820], [x + 110, 900], [x - 10, 900]], { wash: i % 2 ? '#c8302a' : '#f8f4ec', washA: 1, w: 1.6, col: '#4a1a10' }); } pencil(spline(Array.from({ length: 15 }, (_, i) => [-700 + i * 100, 900 + (i % 2) * 20]), false, 4), { w: 4, col: '#4a1a10', pass2: false }); pop();
    human(960, 1300, 1.0, t, { body: '#1a1a1a', legs: '#1a1a1a', hair: '#2a1a10', face: t > EV.hk_crack ? 'shock' : 'smile', armL: 'hold', armR: 'up', look: -0.5, seed: 28220, flip: -1 }); rect(920, 1300 - 230, 80, 140, { wash: '#f8f4ec', washA: 1, w: 1.4 }); push(1060, 960, 1); ell(0, 0, 70, 14, { wash: '#c8ccd4', washA: 1, w: 2 }); coffeeCup(-20, -10, 0.4, t); pop();
    push(-60, 1300, 0.9); ell(-70, 0, 60, 60, { wash: '#000000', washA: 0, w: 5, col: '#2a2a2a' }); ell(90, 0, 60, 60, { wash: '#000000', washA: 0, w: 5, col: '#2a2a2a' }); pencil([[-70, 0], [0, -90], [90, 0]], { w: 6, col: '#3a7a8a', pass2: false }); pencil([[0, -90], [70, -90]], { w: 6, col: '#3a7a8a', pass2: false }); rect(60, -150, 80, 60, { wash: '#a87a4a', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) baguette(100 + i * 6, -170 - i * 8, 0.35, -1.2 + i * 0.1); pop();
  }
  function table(t) {                                                     // столик: мраморная столешница, чашка (отражение полумесяца), газета, сахарница
    const tb = rect(-500, 1440, 2200, 600, { wash: '#e8e4dc', washA: 1, w: 3, col: '#6a6460', key: 28230 }); shadeG(tb.path, 0, 1440, 0, 1900, '#a8a49c', 0.4); for (let i = 0; i < 6; i++) pencil(spline([[-500 + i * 400, 1460], [-300 + i * 400, 1600], [-450 + i * 400, 1800]], false, 5), { w: 2, col: '#b8b0a8', a: 0.6, pass2: false });
    coffeeCup(330, 1460, 1.2, t); if (t > EV.hk_turk && t < EV.hk_crack) { push(330, 1360, 0.9); ell(-6, 0, 22, 22, { wash: '#f8f4ec', washA: 0.6, line: false }); ell(2, 0, 18, 18, { wash: '#5a3014', washA: 1, line: false }); pop(); push(330, 1180, popK(t, EV.hk_turk, 0.35)); ottomanFlag(-120, 160, 0.35, t, { key: 28231 }); pop(); }
    push(1000, 1450, 1, -0.08); rect(-130, -10, 260, 14, { wash: '#f0ecdf', washA: 1, w: 1.6 }); txt('LE MATIN', 0, -14, 30, { font: 'Osw', col: '#2a2a2a' }); pop();
    push(150, 1450, 1); blob([[-40, 0], [-46, -60], [46, -60], [40, 0]], { wash: '#f8f4ec', washA: 1, w: 2 }); ell(0, -64, 30, 10, { wash: '#c8a040', washA: 1, w: 1.4 }); pop();
    if (t > EV.hk_crack) { const q = clamp((t - EV.hk_crack) / 0.8); const r = rng(28240); for (let i = 0; i < 16; i++) { const a = -2.8 + r() * 2.6, d = 60 + r() * 260 * q; ell(560 + Math.cos(a) * d, 1150 + Math.sin(a) * d + q * q * 300, 8, 4, { rot: r() * 3, wash: CR.crustL, washA: 1 - q * 0.6, w: 1, col: CR.crustD }); } }
    if (t > EV.hk_q && t < EV.hk_bite + 0.4) { push(560, 980, popK(t, EV.hk_q, 0.35)); txt('?', 0, 0, 140, { font: 'Osw', col: '#ffe070' }); pop(); }
    castShadow(640, 1450, 320, 90, -0.5, 0.25);
  }
  function macro(t) {                                                     // ВАУ: круассан во весь кадр, блик, хруст-разлом с хлопьями → отъезд
    const k = pk(t); if (k >= 1) return; const a = 1 - sm(clamp((k - 0.7) / 0.3));
    scr(() => { ctx.save(); ctx.globalAlpha = a; vgrad(0, 1920, ['#3a2010', '#6a3a18', '#3a2010']); croissant(540, 1150 - k * 200, 3.4 - k * 2.6, t, { key: 28250, cut: t > 0.5 });
      if (t > 0.45) { const q = clamp((t - 0.45) / 0.8), r = rng(28251); for (let i = 0; i < 30; i++) { const an = r() * 6.28, d = 80 + q * (300 + r() * 600); ell(540 + Math.cos(an) * d, 1000 + Math.sin(an) * d * 0.7, 26 * (1 - q * 0.5), 10, { rot: an, wash: i % 3 ? CR.crustL : CR.crumb, washA: 1, w: 1.4, col: CR.crustD }); } }
      const g = (t * 0.8) % 1; ell(lerp(140, 940, g), 920, 80, 14, { wash: '#ffffff', washA: 0.3, line: false }); ctx.restore(); });
  }
  WORLD.hook = (t, u, cat) => {
    lay(14, () => { city(t); haze('#fff0d8', 0.06); });
    lay(2.8, () => { cafe(t); shaft(-100, 0, 380, 1600, -0.5, 'rgba(255,235,190,1)', 0.14); });
    lay(1, () => { lightPool(580, 1460, 680, 120, 'rgba(255,230,180,1)', 0.34); cat(); table(t); });
    lay(0.65, () => { push(-150, 1950, 1.4); for (let i = 0; i < 2; i++) { ell(i * 220, -40, 100, 30, { wash: '#c8a060', washA: 1, w: 3, col: '#5a3a14' }); for (let j = 0; j < 6; j++) pencil([[i * 220 - 90 + j * 30, -30], [i * 220 - 80 + j * 30, 300]], { w: 4, col: '#8a6a3a', pass2: false }); } pop(); push(1230, 180, 1.4); for (let i = 0; i < 5; i++) { const sw = Math.sin(t * 1.2 + i) * 10; pencil(spline([[i * 30, 0], [i * 26 + sw, 200], [i * 22 + sw * 2, 360]], false, 5), { w: 3, col: '#4a7a3a', pass2: false }); for (let j = 0; j < 4; j++) ell(i * 24 + sw * 1.5, 100 + j * 80, 18, 12, { wash: ['#e84a6a', '#f8a0b0'][j % 2], washA: 1, w: 1 }); } pop();
      motes(12, [-200, 300, 1300, 1500], '#fff4e0', t, 28290, { sp: 3, sz: 3, a: 0.35, wob: 3 }); moodDark(560, 1000, 520, 1500, '#140a10', 0.38); });
    macro(t);
  };
  DIR.hook = {
    outfit: 'parisA', light: { side: -1, rim: '#ffe0b0' }, grade: ['#ffc890', 0.06],
    act: () => [[0, 'awe'], [EV.hk_turk, 'suspicious'], [EV.hk_check, 'sideeye'], [EV.hk_crack, 'shock'], [EV.hk_q, 'suspicious'], [EV.hk_bite, 'smug'], [EV.hk_bite + 0.25, 'grin']],
    pose: (t, u, b) => { const chk = t > EV.hk_check && t < EV.hk_crack, bite = t > EV.hk_bite;
      return Object.assign(b, { x: 680, y: 1600, s: 1.16, flip: true, look: chk ? [-0.6, 0.6] : [-0.2, 0.2], hand: chk ? [200, -260] : bite ? [80, -320] : [160, -260], handF: chk ? [-80, -230] : [-120, -260],
        prop: chk ? 'magP' : 'croissantP', propAng: 0, squint: chk || (bite && t < EV.hk_bite + 0.5), tailUp: bite }); },
    cam: () => [[0, 560, 1060, 0.24], [EV.hk_turk, 520, 1100, 0.27], [EV.hk_crack, 560, 1120, 0.29], [EV.hk_bite, 600, 1160, 0.32], [S1.hook, 620, 1170, 0.34]]
  };
})();
