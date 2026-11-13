/* 019 — `liberty`: «Не спеши: в 1918-м, в войну с немцами, гамбургер стал „сэндвичем свободы“. Имя-то немецкое!» Американская улица 1918 года, сепия с красным:
   кирпичная стена в плакатах военного времени («BUY BONDS», «FOOD WILL WIN THE WAR», орёл), фонарный столб, вдали проходят солдаты в касках-тарелках, по
   мостовой катит «жестянка» Ford, флаги на балконах, газетчики. Главный свет — низкое солнце слева, скользящий луч по кирпичу (тёплый), второй — холодные тени
   переулка. Справа — фургон-закусочная LUNCH с доской меню: «HAMBURGER 10¢». Том-газетчик (newsA) с ведром клейстера. По словам: «Не спеши» — Том поднимает
   лапу «стоп»; «1918-м» — вдали марширует колонна, барабан; «в войну с немцами» — газета-молния «WAR!» на тумбе; «„сэндвичем свободы“» — Том кистью клеит поверх
   HAMBURGER полосу «LIBERTY SANDWICH» со звёздами; «Имя-то немецкое!» — уголок полосы отклеивается, из-под неё торчит HAMBURG…, Том хитро тычет в него.
   Переход В сцену: кадр заклеивают плакатом — кисть проходит зигзагом, за мазками клейстера новая сцена. */
(() => {
  EV.lb_stop = wtw('s6', 'спеши:');
  EV.lb_year = wtw('s6', '1918-м,');
  EV.lb_war = wtw('s6', 'войну');
  EV.lb_paste = wtw('s6', '«сэндвичем');
  EV.lb_peel = wtw('s6', 'немецкое!');
  SHAKES.push([EV.lb_war + 0.05, 0.15, 6]);
  KEYW.push('свободы».', 'немецкое!');

  function street(t) {                                                  // (lay 16 ≈ экран) небо, дома с флагами, колонна солдат, форд, газетная тумба
    vgrad(-200, 1100, ['#8a8478', '#c8b898', '#e8d4a8']); glow(80, 260, 260, 'rgba(255,230,170,1)', 0.3);
    for (let i = 0; i < 6; i++) { const x = 400 + i * 150, h = 380 + (i % 3) * 90; rect(x, 860 - h, 140, h, { wash: i % 2 ? '#8a6a5a' : '#7a5a4a', washA: 1, w: 1.6, col: '#3a2a20' }); for (let r = 0; r < 5; r++) for (let q = 0; q < 2; q++) rect(x + 20 + q * 60, 880 - h + 40 + r * 70, 40, 46, { wash: '#4a3a3a', washA: 1, w: 1, col: '#2a1a14' }); if (i % 2 === 0) { push(x + 70, 900 - h + 120, 1); pencil([[0, 0], [60, -40]], { w: 3, col: '#3a2a20', pass2: false }); const f = poly([[60, -40], [150 + Math.sin(t * 3 + i) * 6, -30], [150 + Math.sin(t * 3 + i + 1) * 6, 30], [60, 20]], { wash: '#f4ece0', washA: 1, w: 1.2, col: '#3a2a20' }); ctx.save(); ctx.clip(f.path); for (let k = 0; k < 4; k++) rect(60, -40 + k * 16, 100, 8, { wash: '#b81e1e', washA: 1, line: false }); rect(60, -40, 40, 30, { wash: '#2a3a7a', washA: 1, line: false }); ctx.restore(); pop(); } }
    rect(-200, 860, 1500, 260, { wash: '#7a7064', washA: 1, line: false }); for (let r = 0; r < 6; r++) for (let i = 0; i < 26; i++) ell(-180 + i * 56 + (r % 2) * 28, 880 + r * 30, 24, 10, { wash: '#8a8070', washA: 0.8, w: 0.6, col: '#4a4038' });
    const march = t > EV.lb_year - 0.3 ? (t - EV.lb_year + 0.3) * 60 : 0; for (let i = 0; i < 8; i++) { const x = 1150 - march + i * 70, ph = Math.sin(t * 8 + i) * 4; if (x < 380 || x > 1300) continue; human(x, 900, 0.5, t, { body: '#6a6a3a', legs: '#5a5a30', hair: '#3a2a1a', face: 'calm', armL: 'swing', armR: 'hold', prop: 'spear', seed: 20100 + i, flip: -1 }); ell(x, 900 - 300 * 0.5 + ph * 0.1 - 20, 34, 8, { wash: '#5a5a30', washA: 1, w: 1.2 }); }
    const cx = ((t * 90) % 1600) - 300; push(cx, 980, 0.8); rect(-120, -90, 170, 70, { wash: '#1a1a1a', washA: 1, w: 1.6 }); rect(-140, -20, 260, 40, { wash: '#1a1a1a', washA: 1, w: 1.6 }); for (const wx of [-90, 80]) { ell(wx, 24, 34, 34, { wash: '#2a2a2a', washA: 1, w: 1.6 }); for (let k = 0; k < 6; k++) { const a = k + t * 6; pencil([[wx, 24], [wx + Math.cos(a) * 30, 24 + Math.sin(a) * 30]], { w: 1.4, col: '#8a8a8a', pass2: false }); } } pop();
    haze('#e8d0a0', 0.08);
  }
  function wall(t) {                                                    // (lay 2.6) кирпичная стена с плакатами, фонарь, тумба, фургон LUNCH
    push(-120, 0, 1); const w = rect(-200, 200, 760, 1250, { wash: '#9a4a34', washA: 1, w: 2, col: '#3a1408', key: 20110 }); for (let r = 0; r < 40; r++) for (let i = 0; i < 12; i++) rect(-200 + i * 66 + (r % 2) * 33, 200 + r * 32, 64, 30, { wash: (i + r) % 4 ? '#a8543a' : '#8a3e2a', washA: 1, w: 0.6, col: '#5a2414' }); shadeG(w.path, 560, 0, -200, 0, '#2a0a04', 0.45);
    for (const [x, y, rt, c1, c2, l1, l2] of [[60, 640, -0.04, '#f4ece0', '#b81e1e', 'FOOD', 'WILL WIN THE WAR'], [380, 560, 0.05, '#2a3a7a', '#f4ece0', 'BUY', 'BONDS'], [180, 1020, 0.02, '#f4e8c8', '#2a3a7a', 'EAT MORE', 'CORN']]) { push(x, y, 1, rt); const p = rect(-130, -170, 260, 340, { wash: c1, washA: 1, w: 2, col: '#3a2a1a' }); shadeG(p.path, 130, 170, -130, -170, '#7a6a4a', 0.25); txt(l1, 0, -90, 50, { font: 'Osw', col: c2 }); txt(l2, 0, 120, l2.length > 8 ? 26 : 50, { font: 'Osw', col: c2 }); for (let k = 0; k < 5; k++) { const a = -1.2 + k * 0.6; pencil([[0, 20], [Math.cos(a) * 90, 20 + Math.sin(a) * 60]], { w: 3, col: c2, a: 0.6, pass2: false }); } poly([[-50, 30], [0, -30], [50, 30], [0, 10]], { wash: c2, washA: 0.9, line: false }); pop(); }
    pop();
    push(620, 1360, 1); rect(-10, -900, 20, 900, { wash: '#2a2a2a', washA: 1, w: 1.6 }); poly([[-40, -900], [40, -900], [30, -980], [-30, -980]], { wash: '#f4e8c0', washA: 0.8, w: 2, col: '#2a2a2a' }); poly([[-50, -980], [50, -980], [0, -1030]], { wash: '#2a2a2a', washA: 1, line: false }); pop();
    push(840, 1380, 1); const van = rect(-260, -520, 520, 460, { wash: '#2a4a3a', washA: 1, w: 3, col: '#0a1a10', key: 20111 }); shadeG(van.path, 260, 0, -260, 0, '#0a1a10', 0.4); poly([[-280, -520], [280, -520], [240, -580], [-240, -580]], { wash: '#c8a050', washA: 1, w: 2 }); txt('LUNCH', 0, -536, 50, { font: 'Osw', col: '#2a1a0a' });
    for (const wx of [-170, 170]) { ell(wx, -40, 60, 60, { wash: '#2a2a2a', washA: 1, w: 2 }); for (let k = 0; k < 8; k++) { const a = k * 0.785; pencil([[wx, -40], [wx + Math.cos(a) * 54, -40 + Math.sin(a) * 54]], { w: 3, col: '#c8a050', pass2: false }); } }
    rect(-220, -480, 440, 200, { wash: '#f4d890', washA: 0.85, w: 2, col: '#0a1a10' }); glow(0, -380, 200, 'rgba(255,210,120,1)', 0.25); human(-80, -280, 0.7, t, { body: '#f4f0e8', legs: '#2a2a2a', hair: '#3a2a1a', face: t > EV.lb_paste ? 'shock' : 'smile', armL: 'hold', armR: 'hold', look: -0.5, seed: 20112, flip: -1 }); hat20(-80, -280, 0.7, 'chef', '#f4f0e8', -1);
    const mb = rect(-250, -270, 500, 200, { wash: '#1a1a1a', washA: 1, w: 3, col: '#c8a050', key: 20113 }); txt('— MENU —', 0, -236, 26, { font: 'Osw', col: '#f4efe0' }); txt('HAMBURGER ... 10¢', 0, -186, 40, { font: 'Hand', col: '#f4efe0' }); txt('PIE ...... 5¢', 0, -146, 30, { font: 'Hand', col: '#f4efe0' }); txt('COFFEE ...... 5¢', 0, -106, 30, { font: 'Hand', col: '#f4efe0' });
    if (t > EV.lb_paste) { const k = clamp((t - EV.lb_paste) / 0.5), peel = t > EV.lb_peel ? clamp((t - EV.lb_peel) / 0.4) : 0; push(-240, -206, 1); const st = poly([[0, -26], [480 * k - peel * 60, -26], [480 * k, -26 + peel * 40], [480 * k, 22], [0, 22]], { wash: '#f4ece0', washA: 1, w: 1.6, col: '#b81e1e' }); ctx.save(); ctx.clip(st.path); for (let i = 0; i < 4; i++) rect(0, -26 + i * 12, 480, 6, { wash: '#b81e1e', washA: 0.25, line: false }); txt('LIBERTY SANDWICH', 240, 12, 38, { font: 'Osw', col: '#2a3a7a' }); for (let i = 0; i < 3; i++) txt('★', 20 + i * 450 / 2, 10, 22, { font: 'Osw', col: '#b81e1e' }); ctx.restore(); if (peel > 0) poly([[480 - peel * 60, -26], [480, -26 + peel * 40], [480 - peel * 50, -26 + peel * 50]], { wash: '#d8d0c0', washA: 1, w: 1.4, col: '#7a6a5a' }); pop(); }
    pop();
    push(260, 1400, 1); rect(-70, -260, 140, 260, { wash: '#3a4a3a', washA: 1, w: 2, col: '#0a1a0a' }); ell(0, -260, 80, 20, { wash: '#2a3a2a', washA: 1, w: 2 }); if (t > EV.lb_war) { const q = popK(t, EV.lb_war, 0.3); push(0, -150, q, -0.06); rect(-60, -80, 120, 160, { wash: '#efe8d4', washA: 1, w: 1.4 }); txt('WAR!', 0, -36, 40, { font: 'Osw', col: '#b81e1e' }); for (let i = 0; i < 6; i++) pencil([[-50, 0 + i * 12], [50, 0 + i * 12]], { w: 1.4, col: '#7a7a6a', pass2: false }); pop(); } pop();
  }
  function walk(t) {                                                    // (lay 1.8) прохожие: дама в шляпе, газетчик-мальчишка, солдат с девушкой
    const wow = t > EV.lb_paste && t < S1.liberty;
    human(90, 1360, 1.05, t, { body: '#5a3a5a', legs: '#3a2a3a', hair: '#8a4a2a', face: wow ? 'shock' : 'smile', armL: 'hold', armR: wow ? 'point' : 'hold', look: 0.7, seed: 20120, long: 1 }); hat20(90, 1360, 1.05, 'cloche', '#3a2a3a');
    human(1000, 1370, 0.75, t, { body: '#6a5a4a', legs: '#4a3a2a', hair: '#c88a3a', face: t > EV.lb_war ? 'grin' : 'smile', armL: 'hold', armR: t > EV.lb_war && t < EV.lb_paste ? 'up' : 'hold', look: -0.4, seed: 20121, flip: -1, hat: 'cap', hatCol: '#4a4a4a' }); push(1040, 1150, 0.7); PROPS.newsRollP(); pop();
    if (t > EV.lb_war && t < EV.lb_paste + 0.5) txt('ЭКСТРА!', 1000, 1000, 40, { font: 'Osw', col: '#b81e1e', a: 0.9 });
  }
  function front(t) {                                                   // перед Томом: тумба-ящик, ведро клейстера, рулоны плакатов, пачка газет, передний план — флаг
    const c = rect(-300, 1440, 1700, 600, { wash: '#6a5a44', washA: 1, w: 3, col: '#2a1a0a', key: 20130 }); shadeG(c.path, 0, 1440, 0, 1700, '#2a1408', 0.55); for (let i = 0; i < 9; i++) pencil([[-280, 1470 + i * 34], [1380, 1470 + i * 34]], { w: 1.4, col: '#3a2a14', a: 0.45, pass2: false });
    push(330, 1450, 1); const b = blob([[-60, 0], [-70, -110], [70, -110], [60, 0]], { wash: '#8a8a8e', washA: 1, w: 2, col: '#2a2a2e' }); shadeG(b.path, 70, 0, -70, 0, '#3a3a40', 0.4); ell(0, -110, 70, 16, { wash: '#efe8d0', washA: 1, w: 1.6 }); pencil(spline([[-70, -110], [0, -190], [70, -110]], false, 6), { w: 3, col: '#3a3a3a', pass2: false }); txt('PASTE', 0, -50, 18, { font: 'Osw', col: '#2a2a2e' }); pop();
    push(900, 1450, 1); for (let i = 0; i < 3; i++) { push(-60 + i * 60, -20 - (i % 2) * 20, 1, 0.3 - i * 0.2); rect(-20, -60, 40, 120, { wash: ['#f4ece0', '#2a3a7a', '#b81e1e'][i], washA: 1, w: 1.4, col: '#3a2a1a' }); ell(0, -60, 20, 6, { wash: '#e8dcc8', washA: 1, w: 1 }); pop(); } pop();
    push(1180, 1450, 1); for (let i = 0; i < 5; i++) rect(-80 + i * 3, -14 - i * 14, 160, 14, { wash: '#efe8d4', washA: 1, w: 1, col: '#7a7a6a' }); txt('EXTRA', 0, -60, 22, { font: 'Osw', col: '#b81e1e' }); pop();
    castShadow(620, 1450, 260, 160, 0.6, 0.28); lightPool(400, 1450, 600, 90, 'rgba(255,220,150,1)', 0.28);
  }
  function flag(t) {                                                    // передний план: край флага на флагштоке, листовки летят
    push(1240, -200, 1.6); pencil([[0, 0], [0, 900]], { w: 6, col: '#3a2a1a', pass2: false }); const f = blob([[0, 40], [-260, 60 + Math.sin(t * 3) * 20], [-280, 300 + Math.sin(t * 3 + 1) * 20], [0, 280]], { wash: '#f4ece0', washA: 1, w: 2, col: '#3a2a1a' }); ctx.save(); ctx.clip(f.path); for (let k = 0; k < 7; k++) rect(-300, 40 + k * 36, 320, 18, { wash: '#b81e1e', washA: 1, line: false }); rect(-140, 30, 160, 130, { wash: '#2a3a7a', washA: 1, line: false }); ctx.restore(); pop();
    for (let i = 0; i < 5; i++) { const q = (t * 0.25 + i / 5) % 1, r = rng(20140 + i); push(-100 + q * 1300, 300 + r() * 600 + Math.sin(t * 2 + i) * 60, 1, t * 2 + i); rect(-30, -40, 60, 80, { wash: '#efe8d4', washA: 0.9, w: 1, col: '#7a7a6a' }); pop(); }
  }
  WORLD.liberty = (t, u, cat) => {
    lay(16, () => { street(t); });
    lay(2.6, () => { wall(t); haze('#e8c890', 0.04); });
    lay(1.8, () => { walk(t); });
    lay(1, () => { cat(); front(t); });
    lay(0.6, () => { flag(t); shaft(-100, 0, 300, 2000, -0.45, 'rgba(255,225,160,1)', 0.14); motes(20, [-200, 300, 1300, 1700], '#fff0d0', t, 20150, { sp: 6, sz: 3, a: 0.5, wob: 6 }); moodDark(560, 1000, 450, 1450, '#1a1008', 0.45); });
  };
  DIR.liberty = {
    outfit: 'newsA', light: { side: -1, rim: '#ffd8a0' }, grade: ['#c8a878', 0.14],
    act: () => [[S0.liberty, 'suspicious'], [EV.lb_stop, 'smug'], [EV.lb_year, 'talk'], [EV.lb_war, 'shock'], [EV.lb_paste, 'grin'], [EV.lb_peel, 'wink']],
    pose: (t, u, b) => { const stop = t > EV.lb_stop - 0.1 && t < EV.lb_year, paste = t > EV.lb_paste - 0.3 && t < EV.lb_peel, peel = t > EV.lb_peel, sw = paste ? Math.sin((t - EV.lb_paste) * 10) * 60 : 0;
      return Object.assign(b, { x: 520, y: 1590, s: 1.18, flip: 1, look: t < EV.lb_war ? [-0.2, -0.1] : t < EV.lb_paste ? [-0.6, -0.4] : [0.8, -0.5],
        hand: stop ? [80, -460] : paste ? [260 + sw, -460] : peel ? [280, -450] : [120, -260], point: peel ? 1 : undefined, prop: paste ? 'brushP' : peel ? undefined : 'newsRollP', propAng: paste ? -0.4 : 0.2, handF: [-100, -230], tailUp: peel }); },
    cam: () => [[S0.liberty, 700, 900, 0.18], [S0.liberty + 0.5, 620, 1040, 0.26, 'x'], [EV.lb_year, 720, 960, 0.22], [EV.lb_war, 520, 1040, 0.24], [EV.lb_paste, 680, 1000, 0.26, 'x'], [EV.lb_peel, 680, 1010, 0.3], [S1.liberty, 660, 1040, 0.3]]
  };
  // ---------------------------------------------------------------- переход: кисть с клейстером проходит зигзагом, за мазками новая сцена
  TRANS_IN.liberty = { a: 0.2, b: 0.55, runA: 1, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const e = sm(k), rows = 7, done = e * rows; const P = new Path2D(); for (let i = 0; i < rows; i++) { const q = clamp(done - i); if (q <= 0) break; const y = i * 1920 / rows - 20, h = 1920 / rows + 40, L = i % 2 ? 1080 - q * 1120 : -40, R = i % 2 ? 1080 + 40 : q * 1120; P.rect(Math.min(L, R), y, Math.abs(R - L), h); }
    inPath(P, () => drawBuf(B, 1, 540, 960)); scr(() => { const i = Math.min(rows - 1, Math.floor(done)), q = clamp(done - i), x = i % 2 ? 1080 - q * 1120 : q * 1120, y = i * 1920 / rows + 1920 / rows / 2; push(x, y, 2.4, 1.57); PROPS.brushP(); pop(); for (let s = 0; s < 6; s++) pencil([[x - 120, y - 80 + s * 30], [x + 20, y - 76 + s * 30]], { w: 4, col: '#f4f0e0', a: 0.5, pass2: false }); });
  } };
})();
