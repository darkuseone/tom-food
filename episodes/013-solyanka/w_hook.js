/* 013 — `hook` + `button`: «Селянка! Так раньше звали солянку. Кто же её „посолил“?» Кухня-бистро вечером: меловая доска-меню, стальные кастрюли на плите
   с паром, связки чеснока и колбас, банки огурцов, маслин, каперсов, лампы-абажуры, окно в зимний двор. Том-шеф с половником у мельхиоровой миски солянки.
   На доске написано «СЕЛЯНКА». По словам: «Селянка!» — Том тычет половником в доску; «солянку» — над доской появляется гигантская солонка; «посолил?» — солонка
   сыплет соль на доску, буква «Е» осыпается и превращается в «О». «Откусим историю!» — Том поднимает крышку миски, черпает ложку и хлебает (пар, капли).
   `button`: тот же кадр, Том подмигивает → петля в хук. */
(() => {
  EV.hk_sel = 0.05;
  EV.hk_sol = wtw('h1', 'солянку.');
  EV.hk_salt = wtw('h1', '«посолил»?');
  EV.hk_lid = LS('h2') - 0.1;
  EV.hk_sip = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_salt + 0.2, 0.2, 8], [EV.hk_sip, 0.2, 10]);
  KEYW.push('Селянка!', '«посолил»?');
  const salted = t => (t > EV.hk_salt + 0.3 && t < S1.hook + 0.3) || (t > S0.button && t < DUR - 0.6);

  function yard(t) {                                                    // окно: зимний двор, фонарь, снег, окна дома напротив
    vgrad(-200, 900, ['#141c34', '#2a3458', '#4a4a6a']); rect(-200, 300, 1500, 700, { wash: '#2a2a40', washA: 1, w: 2, col: '#0a0a18' }); windows(-140, 340, 1300, 500, 10, 5, 13101, 0.5, '#ffd890', '#3a3a5a', 0.9);
    pencil([[540, 900], [540, 520]], { w: 6, col: '#1a1a24' }); glow(540, 510, 90, 'rgba(255,220,140,1)', 0.6); motes(60, [0, 0, 1100, 900], '#ffffff', t, 13102, { sp: 50, vx: 10, sz: 3.5, a: 0.85, wob: 1 });
  }
  function wall(t) {                                                    // кафель «кабанчик», окно, меловая доска, полки с банками, связки, лампы
    vgrad(-500, 1500, ['#2a2622', '#4a403a', '#5a4e44']);
    for (let y = -400; y < 1300; y += 44) for (let x = -400; x < 1600; x += 110) rect(x + ((y / 44) % 2) * 55, y, 108, 42, { wash: '#efeae0', washA: 0.95, w: 1.2, col: '#8a8478', a: 0.5 });
    push(980, 300, 1); const w = rect(-150, -220, 300, 400, { wash: '#141c34', washA: 1, w: 8, col: '#2a2420', key: 13110 }); ctx.save(); ctx.clip(w.path); push(-540, -440, 1); yard(t); pop(); ctx.restore(); pencil([[0, -220], [0, 180]], { w: 8, col: '#2a2420' }); pop();
    push(470, 470, 1); const bd = rect(-300, -260, 600, 460, { wash: '#1e2a24', washA: 1, w: 10, col: '#6a4424', key: 13111 }); for (let i = 0; i < 30; i++) { const r = rng(13112 + i); pencil([[-280 + r() * 560, -240 + r() * 420], [-260 + r() * 560, -236 + r() * 420]], { w: 6, col: '#ffffff', a: 0.05, pass2: false }); }
      txt('МЕНЮ', 0, -200, 44, { font: 'Hand', col: '#f4f0e6' }); pencil([[-120, -180], [120, -180]], { w: 2, col: '#f4f0e6', a: 0.7, pass2: false });
      const sw = salted(t); txt(sw ? 'СОЛЯНКА' : 'СЕЛЯНКА', 0, -90, 74, { font: 'Hand', col: sw ? '#ffd890' : '#ffffff' }); if (t > EV.hk_salt && t < EV.hk_salt + 0.5) for (let i = 0; i < 16; i++) ell(-60 + (i % 4) * 14, -100 + Math.floor(i / 4) * 20 + (t - EV.hk_salt) * 300, 3, 3, { wash: '#ffffff', washA: 0.9, line: false });
      for (const [i, s] of ['щи суточные', 'борщ', 'рассольник', 'уха'].entries()) txt(s, -100, -20 + i * 44, 32, { font: 'Hand', col: '#d8e4dc' }); for (const [i, s] of ['250', '220', '200', '280'].entries()) txt('· · · ' + s, 150, -20 + i * 44, 28, { font: 'Hand', col: '#d8e4dc' });
      txt('★', -240, -200, 40, { col: '#ffd060' }); pop();
    for (const [x0, y] of [[-380, 380], [-380, 620], [1060, 760]]) { rect(x0, y, 420, 18, { wash: '#6a4424', washA: 1, w: 2, col: '#1a0a04' }); for (let i = 0; i < 3; i++) jarS(x0 + 70 + i * 140, y, 0.5, t, { key: 13113 + i + y, kind: ['pickle', 'olive', 'caper'][(i + y / 10) % 3 | 0], label: ['огурцы', 'маслины', 'каперсы'][(i + y / 10) % 3 | 0] }); }
    for (let i = 0; i < 5; i++) { const x = 760 + i * 36; pencil([[x, 640], [x + 4, 760]], { w: 2, col: '#6a5a3a', pass2: false }); blob([[x - 14, 780], [x - 16, 750], [x, 736], [x + 16, 750], [x + 14, 780]], { wash: i % 2 ? '#b8584a' : '#f4ecd8', washA: 1, w: 1.4, col: '#3a1a08' }); }
    for (const x of [200, 760]) { pencil([[x, -400], [x, -80]], { w: 3, col: '#1a1a1a', pass2: false }); poly([[x - 90, -20], [x + 90, -20], [x + 50, -90], [x - 50, -90]], { wash: '#2a5a4a', washA: 1, w: 2, col: '#0a1a14' }); glow(x, -10, 220, 'rgba(255,220,150,1)', 0.45); }
  }
  function stove(t) {                                                   // плита с кастрюлями и паром, помощник повара за ней
    push(900, 1250, 1); const s = rect(-240, -260, 480, 260, { wash: '#8a8e94', washA: 1, w: 2.4, col: '#1a1a1a', key: 13120 }); metalG(s.path, -80, -200, 300, '#d8dce0', '#8a8e94', '#2a2e34');
    for (const [x, h, c] of [[-140, 140, '#c8ccd2'], [40, 180, '#a8acb4'], [180, 110, '#c8743a']]) { const p = shape([[x - 70, -260], [x - 64, -260 - h], [x + 64, -260 - h], [x + 70, -260]], { wash: c, washA: 1, w: 2.4, col: '#2a2a2a' }); metalG(p.path, x - 20, -260 - h / 2, 90, '#ffffff', c, '#3a3e44'); ell(x, -260 - h, 66, 12, { wash: '#4a4e54', washA: 1, w: 2 });
      for (let i = 0; i < 3; i++) { const q = (t * 0.45 + i / 3 + x / 300) % 1; pencil(spline([[x, -270 - h], [x + Math.sin(q * 6 + i) * 30, -270 - h - q * 180], [x + Math.sin(q * 9 + i) * 40, -270 - h - q * 340]], false, 5), { w: 12, col: '#ffffff', a: 0.28 * (1 - q), pass2: false }); } } pop();
    human(1120, 1260, 1.05, t, { body: '#f8f6f0', legs: '#2a2a2a', hair: '#3a2a1a', face: t > EV.hk_salt + 0.3 ? 'grin' : 'calm', armL: 'hold', armR: t > EV.hk_salt + 0.3 ? 'point' : 'hold', look: -0.7, seed: 13121, flip: -1 }); hat20(1120, 1260, 1.05, 'chef');
  }
  function counter(t) {                                                 // стойка из нержавейки: миска солянки (герой), хлеб, сметана, лимон, банки, гигантская солонка над доской
    const tb = rect(-400, 1440, 1900, 800, { wash: '#a8acb4', washA: 1, w: 3, col: '#2a2e34', key: 13130 }); metalG(tb.path, 300, 1500, 1000, '#e8ecf0', '#a8acb4', '#4a4e54');
    for (let i = 0; i < 6; i++) pencil([[-400, 1480 + i * 60], [1500, 1484 + i * 60]], { w: 1.4, col: '#ffffff', a: 0.25, pass2: false });
    const lid = t < EV.hk_lid ? 0 : sm(clamp((t - EV.hk_lid) / 0.4));
    solyankaBowl(380, 1470, 1.25, t, { metal: 1, key: 13131, lid: (t < S1.hook + 0.1 || t > DUR - 0.6) ? lid : 1 });
    push(-20, 1520, 1); ell(0, 0, 110, 30, { wash: '#c88a3a', washA: 1, w: 2, col: '#4a2a08' }); for (let i = 0; i < 4; i++) { push(-60 + i * 40, -20, 1, -0.2); rect(-20, -40, 40, 60, { wash: '#4a2a14', washA: 1, w: 1.6, col: '#1a0a04' }); rect(-16, -36, 32, 52, { wash: '#8a5a3a', washA: 1, line: false }); pop(); } pop();
    push(760, 1510, 1); ell(0, 0, 50, 16, { wash: '#f8f4ec', washA: 1, w: 1.6, col: '#5a5a62' }); blob([[-40, -4], [-20, -40], [20, -44], [40, -4]], { wash: SL.sour, washA: 1, w: 1.4, col: '#c8c0b0' }); pop();
    lemonSlice(880, 1520, 40, 0.3, { flat: 0.5 }); lemonSlice(940, 1530, 36, -0.2, { flat: 0.5 });
    if (t > EV.hk_sol - 0.2 && t < S1.hook + 0.3) { const k = popK(t, EV.hk_sol - 0.2, 0.4), pour = t > EV.hk_salt && t < EV.hk_salt + 0.8 ? 1 : 0, rot = pour ? Math.PI * 0.85 + Math.sin(t * 20) * 0.1 : 0.2; push(0, 0, 1); saltShaker(720 + (1 - k) * 600, 560, 1.3 * k, rot, t, pour); pop(); }
    if (t > EV.hk_sip) { const r = rng(13132); for (let i = 0; i < 8; i++) { const q = t - EV.hk_sip - r() * 0.2; if (q < 0 || q > 0.6) continue; ell(560 + (r() - 0.5) * 120 + q * 100, 1150 - q * 200 + q * q * 900, 6, 8, { wash: SL.broth, washA: 1, w: 1, col: SL.brothD }); } }
  }
  function front(t) {                                                   // передний план: связка чеснока сверху слева, половник на крюке справа, пар
    for (let i = 0; i < 5; i++) { const y = -120 + i * 70; blob([[-30 + (i % 2) * 20, y], [-10 + (i % 2) * 20, y - 30], [20 + (i % 2) * 20, y - 30], [40 + (i % 2) * 20, y], [20 + (i % 2) * 20, y + 30], [-10 + (i % 2) * 20, y + 30]], { wash: '#f4ecd8', washA: 1, w: 1.6, col: '#8a7a5a' }); } pencil([[0, -400], [10, 300]], { w: 3, col: '#8a7a5a', pass2: false });
    push(1180, 400, 1.5); pencil([[0, -600], [0, 0]], { w: 4, col: '#3a3a3a', pass2: false }); const b = ell(0, 70, 60, 40, { wash: '#c8ccd2', washA: 1, w: 2.4, col: '#3a3e44' }); metalG(b.path, -20, 60, 60, '#ffffff', '#b8bcc4', '#5a5e66'); pencil([[0, 30], [0, -240]], { w: 10, col: '#b8bcc4' }); pop();
    motes(20, [-100, 900, 1200, 1900], '#fff4e0', t, 13140, { sp: 16, sz: 6, a: 0.25, wob: 2 });
  }
  WORLD.hook = (t, u, cat) => {
    lay(14, () => { wall(t); haze('#ffd8a0', 0.05); });
    lay(3.6, () => { stove(t); haze('#ffcf90', 0.05); });
    lay(1, () => { cat(); });
    lay(0.94, () => { counter(t); });
    lay(0.6, () => { front(t); });
  };
  const stPose = (b, t) => Object.assign(b, { x: 720, y: 1700, s: 1.15, flip: -1, look: [-0.6, -0.6], hand: [260, -420], handF: [-60, -200], prop: 'ladleP', propAng: -0.6, point: 1 });
  DIR.hook = {
    outfit: 'chef', light: { side: -1, rim: '#ffd890' }, grade: ['#ffb070', 0.08],
    act: () => [[0, 'shock'], [EV.hk_sol, 'suspicious'], [EV.hk_salt, 'awe'], [EV.hk_lid, 'smug'], [EV.hk_sip + 0.1, 'laugh']],
    pose: (t, u, b) => { if (t < EV.hk_lid) return stPose(b, t); const sip = t > EV.hk_sip, k = sm(clamp((t - EV.hk_lid) / 0.3));
      return Object.assign(b, { x: 720, y: 1700, s: 1.15, flip: -1, look: sip ? [0.2, -0.1] : [-0.6, 0.4], hand: sip ? [40, -350] : [lerp(260, 200, k), lerp(-200, -260, k)], handF: [-60, -200], prop: 'spoonSP', propAng: sip ? 0.6 : 0, tailUp: sip, squash: b.squash + (sip && t < EV.hk_sip + 0.12 ? 0.08 : 0) }); },
    cam: () => [[0, 470, 900, 0.3], [EV.hk_sol, 480, 860, 0.24, 'x'], [EV.hk_salt + 0.5, 560, 1100, 0.16], [EV.hk_lid, 560, 1180, 0.24], [EV.hk_sip, 620, 1060, 0.36], [S1.hook, 640, 1040, 0.4]]
  };
  EV.bt_wink = wtw('x1', 'сборную!');
  WORLD.button = (t, u, cat) => WORLD.hook(t, u, cat);
  DIR.button = { outfit: 'chef', light: { side: -1, rim: '#ffd890' }, grade: ['#ffb070', 0.08],
    act: () => [[S0.button, 'grin'], [EV.bt_wink - 0.3, 'laugh'], [EV.bt_wink, 'wink'], [DUR - 0.5, 'shock']],
    pose: (t, u, b) => { if (t > DUR - 0.7) return stPose(b, t); return Object.assign(b, { x: 720, y: 1700, s: 1.15, flip: -1, look: [0.4, -0.1], hand: [-120, -330], handF: [-60, -200], prop: 'spoonSP', propAng: 0.2, tailUp: true }); },
    cam: () => [[S0.button, 620, 1080, 0.24], [DUR - 0.9, 520, 960, 0.28], [DUR - 0.1, 470, 900, 0.3], [DUR, 470, 900, 0.3]] };
})();
