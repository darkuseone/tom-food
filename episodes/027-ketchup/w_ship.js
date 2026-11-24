/* 027 — `ship`: «Привезли его из Азии — от китайских торговцев.» Палуба английского торгового корабля в азиатской гавани на закате: мачты,
   ванты, свёрнутые паруса, пушка, бочки и ящики с иероглифами, рядом — китайская джонка с рыжими перепончатыми парусами, лодка-сампан с
   торговцем, вдали — пагода на холме и горы, чайки. Матросы грузят ящики, китайский торговец протягивает глиняный кувшин соуса. Том — матрос
   с фартуком. Главный свет — низкое закатное солнце, второй — фонарь на корме. По словам: «Привезли» — матросы опускают ящик на палубу;
   «Азии» — над джонкой разворачивается парус; «китайских» — торговец поднимает кувшин; «торговцев.» — Том принимает кувшин, нюхает и
   морщится. Переход В сцену: огромный парус проносится через кадр, хлопая на ветру. */
(() => {
  EV.sh_bring = wtw('s8', 'Привезли');
  EV.sh_asia = wtw('s8', 'Азии');
  EV.sh_cn = wtw('s8', 'китайских');
  EV.sh_trade = wtw('s8', 'торговцев.');
  KEYW.push('Азии');

  function sea(t) {                                                       // закатное небо, горы с пагодой, море, джонка
    vgrad(-500, 900, ['#3a2a5a', '#c8586a', '#f8a858', '#ffd890']); glow(700, 420, 300, 'rgba(255,210,140,1)', 0.35); ell(700, 420, 70, 70, { wash: '#fff0c0', washA: 1, line: false });
    sil([[-500, 560], [-200, 380], [100, 440], [300, 330], [500, 420], [800, 360], [1100, 450], [1700, 560]], '#5a3a5a', 0.85);
    push(300, 340, 1); for (let i = 0; i < 4; i++) { rect(-30 + i * 4, -i * 40, 60 - i * 8, 34, { wash: '#4a2a3a', washA: 1, line: false }); poly([[-50 + i * 6, -i * 40], [0, -i * 40 - 16], [50 - i * 6, -i * 40]], { wash: '#3a1a2a', washA: 1, line: false }); } pop();
    rect(-500, 560, 2200, 600, { wash: '#4a5a8a', washA: 1, line: false }); for (let i = 0; i < 16; i++) { const y = 580 + i * 28, x = ((t * 18 + i * 160) % 1800) - 400; pencil([[x, y], [x + 120, y]], { w: 3, col: '#f8c890', a: 0.4, pass2: false }); }
    push(1000 + Math.sin(t * 0.4) * 20, 760 + Math.sin(t * 1.4) * 6, 0.9); blob([[-260, 0], [-220, 60], [220, 60], [280, -20]], { wash: '#6a3a1a', washA: 1, w: 2.4, col: '#2a1408' }); for (const [x, h] of [[-80, 420], [100, 340]]) { pencil([[x, 0], [x, -h]], { w: 6, col: '#3a2010', pass2: false }); const un = t > EV.sh_asia ? clamp((t - EV.sh_asia) / 0.5) : 0.4; const sh = poly([[x, -h], [x + 170, -h + 20], [x + 150, -h + 20 + (h - 60) * un], [x, -h + (h - 60) * un]], { wash: '#d8703a', washA: 1, w: 2, col: '#4a2010' }); for (let j = 1; j < 6; j++) pencil([[x, -h + j * (h - 60) * un / 6], [x + 160, -h + 20 + j * (h - 60) * un / 6]], { w: 2, col: '#4a2010', pass2: false }); } pop();
    for (let i = 0; i < 4; i++) { const x = ((t * 50 + i * 300) % 1600) - 200, y = 120 + i * 50 + Math.sin(t * 2 + i) * 10, f = Math.sin(t * 7 + i) * 12; pencil(spline([[x - 22, y + f], [x - 8, y], [x, y]], false, 3), { w: 3, col: '#f8f4ec', pass2: false }); pencil(spline([[x, y], [x + 8, y], [x + 22, y + f]], false, 3), { w: 3, col: '#f8f4ec', pass2: false }); }
  }
  function rigging(t) {                                                   // мачта, ванты, свёрнутый парус, сампан с торговцем, матросы
    push(820, 0, 1); pencil([[0, 1300], [0, -400]], { w: 26, col: '#4a2a14', pass2: false }); pencil([[-300, -100], [300, -100]], { w: 14, col: '#4a2a14', pass2: false }); ell(0, -100, 300, 40, { wash: '#e8dcc0', washA: 1, w: 2, col: '#6a5a3a' }); for (let i = 0; i < 8; i++) pencil([[-300 + i * 80, -60], [-500 + i * 120, 1300]], { w: 2, col: '#3a2a1a', a: 0.7, pass2: false }); pop();
    push(120, 1280, 0.95); blob([[-260, 0], [-230, 50], [230, 50], [260, 0]], { wash: '#8a5a2a', washA: 1, w: 2.4 }); poly([[-200, 0], [0, -120], [200, 0]], { wash: '#c8a060', washA: 0.9, w: 2 });
    human(0, 0, 0.95, t, { body: '#3a3a5a', legs: '#2a2a2a', hair: '#1a1410', face: t > EV.sh_cn ? 'grin' : 'smile', armL: 'hold', armR: t > EV.sh_cn ? 'up' : 'hold', look: 0.6, seed: 27800 }); jpHat(0, 0, 0.95, 'conical');
    if (t > EV.sh_cn && t < EV.sh_trade) { push(70, -380, 1); blob([[-40, 0], [-50, -80], [-24, -110], [24, -110], [50, -80], [40, 0]], { wash: '#8a5a3a', washA: 1, w: 2 }); rect(-24, -80, 48, 50, { wash: '#e8302a', washA: 1, w: 1 }); txt('鮭汁', 0, -46, 22, { font: 'Osw', col: '#f8e8a0' }); pop(); } pop();
    for (const [x, sd] of [[1050, 27801], [560, 27802]]) { const lift = t > EV.sh_bring && t < EV.sh_bring + 1 ? Math.sin((t - EV.sh_bring) * 3.14) * 60 : 0; human(x, 1300, 1.0, t, { body: sd === 27801 ? '#f4f0e8' : '#2a3a6a', legs: '#2a2a3a', hair: '#6a3a1a', face: 'grin', armL: 'up', armR: 'up', look: -0.4, seed: sd, flip: -1, hat: 'cap', hatCol: '#2a2a3a' }); rect(x - 70, 1300 - 450 - lift, 140, 90, { wash: '#a87a4a', washA: 1, w: 2, col: '#3a2010' }); txt('茶', x, 1300 - 395 - lift, 40, { font: 'Osw', col: '#3a2010' }); }
  }
  function deck(t) {                                                      // палуба: доски, бочки, ящики, пушка, бухты канатов, кувшин
    const d = rect(-500, 1440, 2200, 600, { wash: '#a87a4a', washA: 1, w: 3, col: '#3a2010', key: 27810 }); shadeG(d.path, 0, 1440, 0, 1900, '#5a3a1a', 0.5); for (let i = 0; i < 12; i++) pencil([[-500 + i * 200, 1440], [-700 + i * 260, 1900]], { w: 2, col: '#6a4a24', pass2: false });
    rect(-500, 1360, 2200, 80, { wash: '#6a4424', washA: 1, w: 2, col: '#2a1408' });
    push(220, 1450, 1); for (let i = 0; i < 2; i++) { const b = blob([[-60 + i * 130, 0], [-70 + i * 130, -70], [-60 + i * 130, -140], [60 + i * 130, -140], [70 + i * 130, -70], [60 + i * 130, 0]], { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#3a2010', key: 27811 + i }); for (const y of [-120, -20]) pencil([[-66 + i * 130, y], [66 + i * 130, y]], { w: 5, col: '#3a3a3a', pass2: false }); } txt('KE-TSIAP', 60, -60, 22, { font: 'Osw', col: '#f8e8c0' }); pop();
    push(1050, 1450, 1); rect(-140, -60, 280, 60, { wash: '#3a3a3a', washA: 1, w: 2 }); pencil([[-120, -50], [160, -100]], { w: 34, col: '#2a2a2a', pass2: false }); ell(-80, 0, 34, 34, { wash: '#5a3a1a', washA: 1, w: 2 }); ell(80, 0, 34, 34, { wash: '#5a3a1a', washA: 1, w: 2 }); pop();
    push(450, 1460, 1); for (let i = 0; i < 4; i++) pencil(ellPts(0, -10 - i * 6, 70 - i * 6, 18 - i, 0, 0, 24), { w: 6, col: '#c8a060', pass2: false }); pop();
    castShadow(640, 1450, 340, 100, -0.6, 0.28);
  }
  WORLD.ship = (t, u, cat) => {
    lay(16, () => { sea(t); haze('#ffb890', 0.05); });
    lay(2.8, () => { rigging(t); });
    lay(1, () => { lightPool(620, 1460, 700, 120, 'rgba(255,190,130,1)', 0.34); cat(); deck(t); });
    lay(0.65, () => { push(-150, -200, 1.4); for (let i = 0; i < 4; i++) pencil([[i * 40, 0], [200 + i * 60, 1600]], { w: 4, col: '#3a2a1a', pass2: false }); pop(); push(1240, 300, 1.4); pencil([[0, -400], [0, 0]], { w: 3, col: '#2a1a10', pass2: false }); blob([[-40, 0], [-40, 80], [40, 80], [40, 0]], { wash: '#f8d890', washA: 0.8, w: 3, col: '#2a1a10' }); glow(0, 40, 120, 'rgba(255,200,120,1)', 0.25); pop();
      motes(12, [-200, 200, 1300, 1400], '#ffe8c8', t, 27890, { sp: 2, vx: 14, sz: 3, a: 0.35, wob: 4 }); moodDark(600, 1000, 520, 1500, '#1a0a20', 0.42); });
  };
  DIR.ship = {
    outfit: 'sailorA', light: { side: 1, rim: '#ffc080' }, grade: ['#ff9a70', 0.07],
    act: () => [[S0.ship, 'talk'], [EV.sh_asia, 'awe'], [EV.sh_cn, 'grin'], [EV.sh_trade, 'suspicious'], [EV.sh_trade + 0.5, 'shock']],
    pose: (t, u, b) => { const jar = t > EV.sh_trade; return Object.assign(b, { x: 700, y: 1600, s: 1.15, flip: true, look: t > EV.sh_cn ? [-0.9, 0.2] : [0.4, -0.5], hand: jar ? [130, -330] : t > EV.sh_cn ? [260, -300] : [150, -230], handF: [-90, -230], prop: jar ? 'jarP' : undefined, squint: jar }); },
    cam: () => [[S0.ship, 560, 1040, 0.24], [EV.sh_cn, 560, 1100, 0.28], [S1.ship, 600, 1120, 0.3]]
  };
  Object.assign(PROPS, { jarP() { push(0, -10, 0.6); blob([[-40, 0], [-50, -80], [-24, -110], [24, -110], [50, -80], [40, 0]], { wash: '#8a5a3a', washA: 1, w: 2 }); rect(-24, -80, 48, 50, { wash: '#e8302a', washA: 1, w: 1 }); txt('鮭汁', 0, -46, 22, { font: 'Osw', col: '#f8e8a0' }); pop(); } });   // кувшин рыбного соуса
  // ---------------------------------------------------------------- переход: огромный парус проносится через кадр, хлопая на ветру
  TRANS_IN.ship = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), x = lerp(-1400, 1500, e); drawBuf(e < 0.5 ? A : B, 1, 540, 960);
    scr(() => { if (e >= 0.5) { ctx.save(); ctx.beginPath(); ctx.rect(-100, -100, x + 100, 2200); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore(); } else { ctx.save(); ctx.beginPath(); ctx.rect(-100, -100, x + 300, 2200); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore(); }
      const bul = Math.sin(t * 12) * 60; const p = blob([[x - 20, -100], [x + 560, -60], [x + 640 + bul, 960], [x + 560, 2020], [x - 20, 2020], [x + 80 + bul * 0.5, 960]], { wash: '#f0e4c8', washA: 1, w: 6, col: '#6a5a3a', key: 27899 }); shadeG(p.path, x, 0, x + 600, 0, '#a89870', 0.4); for (let i = 1; i < 6; i++) pencil([[x, i * 350], [x + 600 + bul * 0.6, i * 350 + 20]], { w: 4, col: '#a89870', pass2: false }); });
  } };
})();
