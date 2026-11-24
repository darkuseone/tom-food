/* 029 — `name`: «А имя по-венециански — „тиреме су“: „подними меня“. Бодрит же!» Венеция на закате: канал с золотыми отблесками, палаццо
   с готическими окнами и балкончиками, полосатые причальные столбы, горбатый мостик с прохожими, колокольня вдали, гондолы; гондольер
   в полосатой тельняшке поёт. Том — в канотье и полосатой рубашке сидит в гондоле со стаканчиком тирамису. Главный свет — закатное солнце
   над лагуной, второй — фонари на мосту. По словам: «по-венециански» — гондольер поднимает руку и поёт, ноты в воздухе; «„тиреме су“:» —
   над каналом всплывает надпись TIREMESÙ; «„подними меня“.» — Тома после ложки тирамису поднимает в воздух, как на пружине, искры;
   «Бодрит же!» — Том кувыркается и плюхается обратно в гондолу. Переход В сцену: отражение в воде колышется полосами и успокаивается. */
(() => {
  EV.nm_ven = wtw('s7', 'по-венециански');
  EV.nm_tir = wtw('s7', '«тиреме');
  EV.nm_up = wtw('s7', '«подними');
  EV.nm_boost = wtw('s7', 'Бодрит');
  KEYW.push('«подними', 'меня».');
  const lift = t => t > EV.nm_up ? Math.sin(clamp((t - EV.nm_up) / 1.6) * Math.PI) : 0;

  function venice(t) {                                                    // небо заката, колокольня, палаццо с окнами, мост, причальные столбы
    vgrad(-500, 900, ['#3a2a6a', '#c8587a', '#f8a860', '#ffd890']); glow(540, 520, 360, 'rgba(255,200,130,1)', 0.3); ell(540, 520, 80, 80, { wash: '#fff0c0', washA: 1, line: false });
    push(860, 640, 1); rect(-40, -460, 80, 460, { wash: '#a8583a', washA: 1, w: 2 }); poly([[-50, -460], [0, -580], [50, -460]], { wash: '#6a8a6a', washA: 1, w: 2 }); rect(-30, -420, 60, 60, { wash: '#2a1a1a', washA: 1, w: 1 }); pop();
    for (let i = 0; i < 6; i++) { const x = -450 + i * 340, h = 420 + (i % 3) * 60; if (i === 3) continue; push(x, 880, 1); rect(-160, -h, 320, h, { wash: ['#e8a878', '#d8886a', '#f0c098', '#c87868'][i % 4], washA: 1, w: 2, col: '#5a2a1a', key: 29900 + i }); for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) { blob([[-120 + c * 90, -h + 160 + r * 120], [-120 + c * 90, -h + 100 + r * 120], [-100 + c * 90, -h + 80 + r * 120], [-80 + c * 90, -h + 100 + r * 120], [-80 + c * 90, -h + 160 + r * 120]], { wash: (r + c + i) % 3 ? '#3a2a3a' : '#ffd890', washA: 1, w: 1.2, col: '#f8f4ec' }); } rect(-130, -h + 170, 260, 10, { wash: '#f8f4ec', washA: 1, w: 1 }); pop(); }
    push(560, 760, 1); pencil(spline([[-260, 60], [0, -70], [260, 60]], false, 10), { w: 26, col: '#e8dcc0', pass2: false }); for (let i = 0; i < 9; i++) pencil([[-200 + i * 50, 30 - 70 * Math.exp(-((i - 4) ** 2) / 8)], [-200 + i * 50, 60]], { w: 4, col: '#d8ccb0', pass2: false }); for (let i = 0; i < 3; i++) { const x = -150 + ((t * 40 + i * 120) % 300); sil([[x - 8, -40 - 60 * Math.exp(-(x * x) / 30000)], [x + 8, -40 - 60 * Math.exp(-(x * x) / 30000)], [x + 10, -60 * Math.exp(-(x * x) / 30000)], [x - 10, -60 * Math.exp(-(x * x) / 30000)]], '#2a1a2a', 1); } for (const x of [-230, 230]) { pencil([[x, -40], [x, -120]], { w: 4, col: '#2a2a2a', pass2: false }); ell(x, -130, 12, 16, { wash: '#ffd080', washA: 1, w: 1 }); glow(x, -130, 60, 'rgba(255,200,120,1)', 0.3); } pop();
    rect(-500, 880, 2200, 700, { wash: '#3a5a7a', washA: 1, line: false }); for (let i = 0; i < 18; i++) { const y = 900 + i * 30, x = ((t * 26 + i * 170) % 2000) - 400; pencil([[x, y], [x + 160, y]], { w: 4, col: '#ffc878', a: 0.45, pass2: false }); }
    for (let i = 0; i < 5; i++) { const x = -300 + i * 300; pencil([[x, 1100], [x, 780]], { w: 14, col: '#f8f4ec', pass2: false }); for (let j = 0; j < 4; j++) pencil([[x, 800 + j * 70], [x, 830 + j * 70]], { w: 14, col: '#2a4a9a', pass2: false }); }
  }
  function gondolier(t) {                                                 // гондола с гондольером; ноты песни
    push(1000, 1320, 1); blob([[-300, 0], [-260, 40], [260, 40], [320, -60], [300, 0]], { wash: '#1a1a1a', washA: 1, w: 2.4 }); pop();
    human(1080, 1310, 1.0, t, { body: '#f8f4ec', legs: '#1a1a1a', hair: '#3a2010', face: t > EV.nm_ven ? 'grin' : 'smile', armL: 'hold', armR: t > EV.nm_ven && t < EV.nm_up ? 'up' : 'hold', look: -0.5, seed: 29910, flip: -1 }); for (let i = 0; i < 4; i++) pencil([[1040, 1310 - 260 + i * 24], [1120, 1310 - 260 + i * 24]], { w: 6, col: '#c8201a', pass2: false }); push(1080, 1310 - 330, 1); ell(0, 0, 50, 10, { wash: '#e8d890', washA: 1, w: 1.4 }); rect(-34, -30, 68, 30, { wash: '#e8d890', washA: 1, w: 1.4 }); rect(-34, -12, 68, 8, { wash: '#c8201a', washA: 1, line: false }); pop(); pencil([[1020, 1150], [900, 1500]], { w: 6, col: '#6a4a2a', pass2: false });
    if (t > EV.nm_ven) for (let i = 0; i < 4; i++) { const ph = ((t - EV.nm_ven) * 0.8 + i * 0.25) % 1; const x = 1000 - ph * 300, y = 940 - ph * 200 + Math.sin(ph * 10) * 20; ell(x, y, 10, 8, { wash: '#2a1a2a', washA: 1 - ph, line: false }); pencil([[x + 9, y], [x + 9, y - 40]], { w: 3, col: '#2a1a2a', a: 1 - ph, pass2: false }); }
  }
  function boat(t) {                                                      // гондола Тома (передний борт), фонарик, подушки, надпись TIREMESÙ, искры
    push(560, 1460, 1); const g = blob([[-500, -60], [-440, 40], [440, 40], [560, -120], [520, -60]], { wash: '#1a1a1a', washA: 1, w: 3, col: '#000000', key: 29920 }); pencil([[-460, -40], [480, -50]], { w: 6, col: '#c8a040', pass2: false }); for (let i = 0; i < 3; i++) ell(-300 + i * 120, -60, 50, 20, { wash: ['#c8201a', '#e8a020', '#2a4a9a'][i], washA: 1, w: 1.6 }); pop();
    const L = lift(t); if (L > 0.05) { const r = rng(hsh(FRAME, 29921)); for (let i = 0; i < 10; i++) ell(560 + (r() - 0.5) * 300, 1300 - L * 300 + r() * 300, 5, 5, { wash: '#ffe070', washA: L, line: false }); }
    castShadow(560, 1440, 360, 80, 0.4, 0.22);
  }
  WORLD.name = (t, u, cat) => {
    lay(12, () => { venice(t); hatch(pathOf([[-500, -500], [1700, -500], [1700, 900], [-500, 900]]), bbOf([[-500, -500], [1700, 900]]), { gap: 26, a: 0.05, col: '#3a2a1a', ang: 0.9, key: 29777 }); shadeG(pathOf([[-500, 600], [1700, 600], [1700, 1440], [-500, 1440]]), 0, 1440, 0, 600, '#2a1a10', 0.18); haze('#ffc8a0', 0.05); });
    lay(2.6, () => { gondolier(t); });
    lay(1, () => { lightPool(560, 1400, 640, 100, 'rgba(255,200,140,1)', 0.3); cat(); boat(t); });
    lay(0.65, () => { push(-150, 1700, 1.4); pencil([[0, 300], [0, -500]], { w: 18, col: '#f8f4ec', pass2: false }); for (let j = 0; j < 6; j++) pencil([[0, -460 + j * 120], [0, -410 + j * 120]], { w: 18, col: '#c8201a', pass2: false }); pop(); push(1240, 200, 1.4); for (let i = 0; i < 4; i++) { const sw = Math.sin(t * 1.4 + i) * 8; pencil(spline([[i * 40, 0], [i * 36 + sw, 200], [i * 30 + sw * 2, 360]], false, 5), { w: 3, col: '#4a7a3a', pass2: false }); for (let j = 0; j < 3; j++) ell(i * 30 + sw * 1.5, 160 + j * 80, 20, 16, { wash: '#e85a8a', washA: 1, w: 1 }); } pop();
      motes(12, [-200, 300, 1300, 1500], '#ffe0b0', t, 29990, { sp: 2, sz: 3, a: 0.4, wob: 4 }); moodDark(560, 1000, 560, 1500, '#140a20', 0.38); });
  };
  DIR.name = {
    outfit: 'parisA', light: { side: 1, rim: '#ffc890' }, grade: ['#ff9a80', 0.06],
    act: () => [[S0.name, 'smug'], [EV.nm_ven, 'grin'], [EV.nm_tir, 'proud'], [EV.nm_up, 'awe'], [EV.nm_boost, 'laugh']],
    pose: (t, u, b) => { const L = lift(t); return Object.assign(b, { x: 640, y: 1560 - L * 320, s: 1.12, flip: true, rot: L > 0.3 && t > EV.nm_boost ? (t - EV.nm_boost) * 6 : 0, look: t > EV.nm_up ? [0, -0.8] : [-0.4, 0.3], hand: L > 0.1 ? [120, -460] : [180, -280], handF: L > 0.1 ? [-120, -460] : [-90, -230], prop: L > 0.1 ? undefined : 'cupTiraP', tailUp: L > 0.1 }); },
    hud: t => infoPlate(t, EV.nm_tir - 0.1, S1.name - 0.15, { kind: 'swap', title: 'ИМЯ', a: 'TIRAMI SU', b: '«ПОДНИМИ МЕНЯ»', ia: (s, tt) => INGR_C29.cocoa(s, tt), ib: (s, tt) => INGR_C29.coffee(s, tt), tb: EV.nm_up + 0.4, y: 700 }),
    cam: () => [[S0.name, 560, 1020, 0.22], [EV.nm_tir, 560, 1040, 0.24], [EV.nm_up, 580, 960, 0.22], [S1.name, 600, 1060, 0.25]]
  };
  // ---------------------------------------------------------------- переход: отражение в воде колышется полосами и успокаивается
  TRANS_IN.name = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k); drawBuf(A, 1, 540, 960, 1 - e);
    scr(() => { for (let i = 0; i < 48; i++) { const y0 = i * 40, dx = Math.sin(i * 0.7 + t * 14) * 120 * (1 - e) ** 1.5; ctx.save(); ctx.globalAlpha = e; ctx.beginPath(); ctx.rect(0, y0, 1080, 41); ctx.clip(); ctx.drawImage(B, dx, 0); ctx.restore(); } });
  } };
})();
