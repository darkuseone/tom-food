/* 028 — `versailles`: «Мария-Антуанетта? Мимо: в Париже круассан появился через сорок лет после неё.» Зеркальная галерея Версаля:
   люстры с хрусталём (главный свет), позолоченные пилястры, зеркала с отражениями, окна в сад с фонтанами и стрижеными кустами (второй свет),
   паркет-ёлочка, бархатные банкетки, канделябры; королева в пышном розовом платье и высоком напудренном парике держит на блюде круассан,
   фрейлины с веерами. Том — придворный кондитер в голубом камзоле с подносом. По словам: «Мария-Антуанетта?» — королева гордо поднимает
   блюдо; «Мимо:» — гонг, круассан с её блюда — «пуф!» — исчезает, остаётся пирожное; «появился» — табличка-лента «1793 → +40 лет →
   1830-е»; «неё.» — королева пожимает плечами и откусывает пирожное (пауза-гэг). Переход В сцену: зеркальная панель поворачивается вокруг
   оси — на обороте Версаль. */
(() => {
  EV.vs_queen = wtw('s5', 'Мария-Антуанетта?');
  EV.vs_miss = wtw('s5', 'Мимо:');
  EV.vs_appear = wtw('s5', 'появился');
  EV.vs_40 = wtw('s5', 'сорок');
  EV.vs_shrug = wtw('s5', 'неё.');
  SHAKES.push([EV.vs_miss, 0.14, 6]);
  KEYW.push('Мимо:');

  function gallery(t) {                                                   // зеркала, пилястры, окна в сад, лепнина, люстры
    vgrad(-500, 1500, ['#5a4020', '#8a6a3a', '#a8844a']); for (let i = 0; i < 9; i++) { const x = -400 + i * 250; push(x, 0, 1); const m = rect(-90, -300, 180, 1100, { wash: i % 2 ? '#c8d8e0' : '#8ab0c8', washA: i % 2 ? 0.8 : 1, w: 5, col: '#c8a040', key: 28700 + i });
      if (i % 2) { for (let j = 0; j < 4; j++) pencil([[-90, -300 + j * 275], [90, -300 + j * 275]], { w: 4, col: '#c8a040', pass2: false }); pencil([[-60, -260], [60, 700]], { w: 10, col: '#ffffff', a: 0.3, pass2: false }); } else { vgrad(-300, 800, ['#9ac0e0', '#c8e0c8']); ell(0, 600, 60, 40, { wash: '#3a7a3a', washA: 1, line: false }); pencil([[0, 560], [0, 400]], { w: 3, col: '#e8f4ff', a: 0.6, pass2: false }); }
      pop(); rect(x + 92, -320, 66, 1150, { wash: '#d8b040', washA: 1, w: 2, col: '#6a4a10' }); pencil([[x + 125, -300], [x + 125, 800]], { w: 4, col: '#f8e080', a: 0.6, pass2: false }); }
    for (let i = 0; i < 3; i++) pencil([[-500, -360 + i * 20], [1700, -360 + i * 20]], { w: 14, col: '#c8a040', pass2: false });
    for (const x of [140, 840]) { push(x, -120, 1); pencil([[0, -300], [0, 0]], { w: 3, col: '#c8a040', pass2: false }); for (let r = 0; r < 3; r++) for (let i = 0; i < 8; i++) { const a = i / 8 * 6.28, R = 120 - r * 30; ell(Math.cos(a) * R, r * 60 + Math.sin(a) * R * 0.2, 6, 10, { wash: '#f8f8ff', washA: 1, w: 1, col: '#a8b0c0' }); ell(Math.cos(a) * R, r * 60 - 20 + Math.sin(a) * R * 0.2, 4, 10, { wash: '#fff0c0', washA: 1, line: false }); } glow(0, 60, 260, 'rgba(255,230,170,1)', 0.3); pop(); }
  }
  function court(t) {                                                     // королева с блюдом, фрейлины с веерами
    const miss = t > EV.vs_miss, shrug = t > EV.vs_shrug;
    push(300, 1310, 1.15); const dress = blob([[-160, 0], [-130, -120], [-50, -170], [50, -170], [130, -120], [160, 0]], { wash: '#f4a8c0', washA: 1, w: 2.4, col: '#8a3a5a', key: 28710 }); for (let i = 0; i < 5; i++) pencil(spline([[-140 + i * 70, 0], [-100 + i * 50, -80], [-40 + i * 20, -170]], false, 4), { w: 2, col: '#f8d0e0', pass2: false }); pop();
    human(300, 1310 - 150, 1.0, t, { body: '#f4a8c0', legs: '#f4a8c0', hair: '#f8f4f0', face: shrug ? 'smile' : miss ? 'shock' : 'grin', armL: 'hold', armR: t > EV.vs_queen && !shrug ? 'up' : 'hold', look: 0.5, seed: 28711, long: 1 });
    push(300, 1310 - 150 - 330, 1); blob([[-46, 20], [-50, -80], [-30, -170], [0, -200], [30, -170], [50, -80], [46, 20]], { wash: '#f8f4f0', washA: 1, w: 2, col: '#a8a0a0' }); for (let i = 0; i < 4; i++) ell(-20 + i * 14, -120 + i * 20, 10, 10, { wash: '#ffffff', washA: 1, w: 1 }); ell(30, -150, 14, 10, { wash: '#f480a0', washA: 1, w: 1 }); pop();
    push(400, 880, 1); ell(0, 0, 70, 16, { wash: '#f8e8a0', washA: 1, w: 2, col: '#a8802a' }); if (!miss) croissant(0, -6, 0.3, t, { key: 28712 }); else { if (t < EV.vs_miss + 0.5) { const q = (t - EV.vs_miss) / 0.5; for (let i = 0; i < 6; i++) ell(Math.cos(i) * 60 * q, -30 + Math.sin(i) * 40 * q, 30 * (1 - q) + 6, 24 * (1 - q) + 5, { wash: '#ffffff', washA: 1 - q, line: false }); } blob([[-30, -6], [-30, -50], [30, -50], [30, -6]], { wash: '#f8c8d8', washA: 1, w: 2 }); ell(0, -56, 12, 10, { wash: '#c8201a', washA: 1, line: false }); } pop();
    if (shrug) { push(300, 820, popK(t, EV.vs_shrug + 0.1, 0.35)); txt('ням', 0, 0, 44, { font: 'Hand', col: '#8a3a5a' }); pop(); }
    for (const [x, sd, fl] of [[960, 28713, -1], [1100, 28714, -1]]) { human(x, 1310, 0.95, t, { body: ['#a8d8c8', '#f8e0a0'][sd % 2], legs: '#f4f0e8', hair: '#f8f4f0', face: miss ? 'shock' : 'smile', armL: 'hold', armR: 'up', look: -0.5, seed: sd, flip: fl, long: 1 }); push(x - 40, 1310 - 300, 1, Math.sin(t * 5 + sd) * 0.3); blob([[0, 0], [-40, -60], [0, -70], [40, -60]], { wash: '#f8f4ec', washA: 1, w: 1.4 }); for (let i = 0; i < 4; i++) pencil([[0, 0], [-30 + i * 20, -64]], { w: 1, col: '#a8a0a0', pass2: false }); pop(); }
  }
  function floor(t) {                                                     // паркет-ёлочка, банкетка, канделябр, лента времени
    const f = rect(-500, 1440, 2200, 600, { wash: '#a8743a', washA: 1, w: 3, col: '#4a2a10', key: 28720 }); ctx.save(); ctx.clip(f.path); for (let i = 0; i < 30; i++) for (let j = 0; j < 8; j++) pencil([[-500 + i * 80, 1440 + j * 70], [-460 + i * 80, 1480 + j * 70]], { w: 3, col: (i + j) % 2 ? '#7a4a1a' : '#c8904a', pass2: false }); ctx.restore(); shadeG(f.path, 0, 1440, 0, 1900, '#4a2a10', 0.4);
    ell(500, 1500, 500, 40, { wash: '#fff0c0', washA: 0.25, line: false });
    push(1050, 1450, 1); rect(-120, -60, 240, 60, { wash: '#8a2a3a', washA: 1, w: 2.4, col: '#3a0a10' }); for (const x of [-100, 100]) pencil([[x, 0], [x, 40]], { w: 8, col: '#c8a040', pass2: false }); pop();
    push(140, 1450, 1); pencil([[0, 0], [0, -260]], { w: 6, col: '#c8a040', pass2: false }); pencil([[-60, -260], [60, -260]], { w: 5, col: '#c8a040', pass2: false }); for (const x of [-60, 0, 60]) { rect(x - 6, -320, 12, 60, { wash: '#f8f0d8', washA: 1, w: 1 }); ell(x, -330, 6, 12, { wash: '#ffc060', washA: 1, line: false }); } glow(0, -330, 100, 'rgba(255,200,120,1)', 0.25); pop();
    castShadow(640, 1450, 320, 90, 0.5, 0.25);
  }
  WORLD.versailles = (t, u, cat) => {
    lay(9, () => { gallery(t); haze('#fff0d0', 0.05); });
    lay(2.6, () => { court(t); });
    lay(1, () => { lightPool(560, 1460, 660, 120, 'rgba(255,230,170,1)', 0.34); cat(); floor(t); });
    lay(0.65, () => { push(-150, 400, 1.4); for (let i = 0; i < 5; i++) pencil(spline([[i * 30, -400], [i * 30 + 20 + Math.sin(t + i) * 6, 200], [i * 30, 800]], false, 5), { w: 12, col: '#8a1a2a', pass2: false }); pencil([[-20, 300], [180, 300]], { w: 10, col: '#c8a040', pass2: false }); pop();
      push(1230, 1950, 1.4); blob([[-60, 0], [-70, -120], [-30, -160], [30, -160], [70, -120], [60, 0]], { wash: '#e8e0f0', washA: 1, w: 3, col: '#5a4a7a' }); for (let i = 0; i < 6; i++) ell(-30 + i * 12, -170 - (i % 2) * 20, 16, 16, { wash: ['#f480a0', '#f8e0a0', '#a8d8c8'][i % 3], washA: 1, w: 1 }); pop();
      motes(16, [-100, 0, 1200, 1400], '#fff4d0', t, 28790, { sp: 2, sz: 3, a: 0.5, wob: 5, tw: 1 }); moodDark(560, 1000, 520, 1500, '#140a04', 0.42); });
  };
  DIR.versailles = {
    outfit: 'courtA', light: { side: -1, rim: '#fff0c0' }, grade: ['#ffd8a0', 0.06],
    act: () => [[S0.versailles, 'proud'], [EV.vs_queen, 'grin'], [EV.vs_miss, 'smug'], [EV.vs_40, 'wink'], [EV.vs_shrug, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1600, s: 1.15, flip: true, look: t > EV.vs_queen && t < EV.vs_40 ? [-0.9, -0.2] : [-0.2, 0.2], hand: t < EV.vs_miss ? [190, -300] : [160, -240], handF: t > EV.vs_miss && t < EV.vs_appear ? [-150, -380] : [-90, -230], prop: 'trayCrP', point: t > EV.vs_miss && t < EV.vs_appear ? 1 : undefined }),
    hud: t => infoPlate(t, EV.vs_appear - 0.1, S1.versailles - 0.15, { kind: 'list', title: 'ЛЕНТА ВРЕМЕНИ', rows: [['1793', 'королевы не стало', '#6a3a5a'], ['+ 40 лет', 'круассана всё нет', '#a8241e'], ['1830-е', 'первый — в Париже', '#2a6a3a']] }),
    cam: () => [[S0.versailles, 540, 1040, 0.22], [EV.vs_miss, 520, 1080, 0.26], [EV.vs_40, 580, 1120, 0.28], [S1.versailles, 600, 1130, 0.29]]
  };
  Object.assign(PROPS, { trayCrP() { push(0, -10, 0.55); ell(0, 0, 110, 20, { wash: '#d8c8a0', washA: 1, w: 2 }); for (let i = 0; i < 3; i++) croissant(-60 + i * 60, -6, 0.22, 0, { key: 28795 + i }); pop(); } });   // поднос с круассанами
  // ---------------------------------------------------------------- переход: зеркальная панель поворачивается вокруг оси — на обороте Версаль
  TRANS_IN.versailles = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), sx = Math.abs(Math.cos(e * Math.PI)), useB = e > 0.5; drawBuf(B, 1, 540, 960);
    scr(() => { ctx.save(); ctx.translate(540, 960); ctx.scale(Math.max(sx, 0.02), 1); ctx.translate(-540, -960); drawBuf(useB ? B : A, 1, 540, 960); ctx.restore();
      push(540, 960, 1); rect(-560 * sx - 20, -980, 40, 1960, { wash: '#c8a040', washA: 1, w: 3 }); rect(560 * sx - 20, -980, 40, 1960, { wash: '#c8a040', washA: 1, w: 3 }); pop(); });
  } };
})();
