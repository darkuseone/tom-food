/* 020 — `mag`: «Мотаем дальше. Первый итальянский рецепт, 1954-й: чеснок и швейцарский грюйер! / Римская бабушка такое бы не простила.»
   Миланская редакция кулинарного журнала, август 1954: высокое окно на шпили Дуомо (главный свет — утреннее окно справа, холодно-голубое), второй — зелёная настольная лампа.
   Машинистка в очках-«кошках» стучит на машинке, редактор в подтяжках с телефоном, фотограф со вспышкой снимает тарелку на штативе; шкаф-картотека, стопки журналов,
   обложки в рамках, часы, вешалка со шляпами, фикус. Том (твид 50-х) держит раскрытый журнал. По словам: «рецепт» — разворот журнала крупно, «1954-й» — табличка года;
   «чеснок» — головка чеснока шлёпается на стол, строка подсвечивается; «грюйер!» — клин сыра с дырками + швейцарский флажок, вспышка фотографа.
   «Римская бабушка» — в дверях бабушка-римлянка в чёрном со скалкой, грозит (пауза-гэг): Том прячется за журнал. Переход В сцену: сливки заливают кадр сверху потёками. */
(() => {
  EV.mg_rec = wtw('s3', 'рецепт,');
  EV.mg_year = wtw('s3', '1954-й:');
  EV.mg_garlic = wtw('s3', 'чеснок');
  EV.mg_gruy = wtw('s3', 'грюйер!');
  EV.mg_gran = wtw('s4', 'Римская');
  EV.mg_forgive = wtw('s4', 'простила.');
  SHAKES.push([EV.mg_garlic + 0.1, 0.15, 7], [EV.mg_gran + 0.2, 0.25, 10]);
  KEYW.push('чеснок', 'грюйер!');
  const gran = t => t > EV.mg_gran - 0.1;

  function city(t) {                                                    // в окне: шпили Дуомо, крыши Милана, трамвай, голуби
    vgrad(-400, 700, ['#8ab8e0', '#c8dcec', '#f4ecd8']);
    for (let i = 0; i < 4; i++) blob([[-200 + i * 160, -260], [-140 + i * 160, -290], [-60 + i * 160, -260], [-110 + i * 160, -240]], { wash: '#ffffff', washA: 0.7, line: false });
    push(120, 400, 1); const d = rect(-220, -260, 440, 260, { wash: '#ece4d4', washA: 1, w: 1.6, col: '#7a6a5a', key: 21000 }); shadeG(d.path, 220, 0, -220, 0, '#a8988a', 0.4);
    for (let i = 0; i < 13; i++) { const x = -210 + i * 35, h = 80 + (i % 3) * 60 + (i === 6 ? 160 : 0); poly([[x - 6, -260], [x, -260 - h], [x + 6, -260]], { wash: '#f4ece0', washA: 1, w: 1.2, col: '#7a6a5a' }); ell(x, -264 - h, 3, 3, { wash: '#e8c860', washA: 1, line: false }); }
    for (let i = 0; i < 8; i++) poly([[-200 + i * 56, -100], [-180 + i * 56, -160], [-160 + i * 56, -100]], { wash: '#b8d0e8', washA: 0.8, w: 1, col: '#7a6a5a' }); for (let i = 0; i < 3; i++) rect(-150 + i * 120, -90, 50, 90, { wash: '#5a4a3a', washA: 1, w: 1 }); pop();
    for (let i = 0; i < 6; i++) { const x = -260 + i * 110; rect(x, 420, 100, 300, { wash: ['#d8a878', '#c89060', '#e8c098'][i % 3], washA: 1, w: 1, col: '#5a3a1a' }); windows(x + 10, 440, 80, 200, 2, 3, 21001 + i, 0.3, '#ffe8b0', '#6a7a8a', 0.8); }
    const tx = ((t * 80) % 900) - 300; push(tx, 640, 1); rect(-120, -80, 240, 80, { wash: '#e8b830', washA: 1, w: 1.6, col: '#3a2a08' }); for (let i = 0; i < 5; i++) rect(-110 + i * 46, -70, 36, 30, { wash: '#a8c8e0', washA: 1, w: 1 }); pencil([[0, -80], [20, -140]], { w: 2, col: '#1a1a1a', pass2: false }); pop();
    for (let i = 0; i < 4; i++) { const bx = ((t * 60 + i * 140) % 800) - 300, by = 100 + Math.sin(t * 3 + i) * 20 + i * 30; pencil([[bx - 10, by], [bx, by - 6], [bx + 10, by]], { w: 2, col: '#3a3a3a', pass2: false }); }
  }
  function office(t) {                                                  // стены редакции: панели, окно, обложки в рамках, часы, полки журналов, картотека, вешалка, фикус
    vgrad(-300, 2100, ['#4a5a5a', '#8a9a90', '#b8b8a0']);
    const wl = rect(-400, -300, 1900, 900, { wash: '#a8b8a8', washA: 1, line: false, key: 21010 }); hatch(wl.path, wl.bb, { gap: 14, a: 0.06, col: '#3a4a3a', ang: 1.57, key: 21011 });
    for (let x = -400; x < 1500; x += 140) { const p = rect(x, 600, 136, 840, { wash: '#7a5a3a', washA: 1, w: 1.6, col: '#2a1a0a', key: 21012 + x }); shadeG(p.path, x, 600, x + 136, 600, '#3a2a14', 0.35); rect(x + 14, 640, 108, 360, { wash: '#8a6a44', washA: 0.6, w: 1, col: '#3a2a14' }); }
    push(980, 330, 1); const w = rect(-200, -380, 400, 640, { wash: '#c8dcec', washA: 1, w: 12, col: '#e8e4dc', key: 21013 }); ctx.save(); ctx.clip(w.path); push(-90, -100, 0.8); city(t); pop(); ctx.restore();
    pencil([[0, -380], [0, 260]], { w: 8, col: '#e8e4dc' }); for (let i = 0; i < 3; i++) pencil([[-200, -220 + i * 160], [200, -220 + i * 160]], { w: 6, col: '#e8e4dc' }); pop();
    for (let i = 0; i < 4; i++) { push(140 + i * 170, 240 + (i % 2) * 30, 0.62, (i - 1.5) * 0.03); const fr = rect(-110, -150, 220, 300, { wash: '#2a2a2a', washA: 1, w: 3, col: '#1a1a1a' }); mag1954(0, 0, 0.92, 0, {}); rect(-110, -150, 220, 60, { wash: ['#c8321a', '#2a6ac8', '#2a8a3a', '#e8a020'][i], washA: 0.8, line: false }); txt(['MAGGIO', 'GIUGNO', 'LUGLIO', 'AGOSTO'][i], 0, -110, 22, { font: 'Osw', col: '#ffffff' }); pop(); }
    push(700, 40, 0.9); ell(0, 0, 70, 70, { wash: '#f4f0e4', washA: 1, w: 5, col: '#2a2a2a' }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; pencil([[Math.cos(a) * 56, Math.sin(a) * 56], [Math.cos(a) * 64, Math.sin(a) * 64]], { w: 3, col: '#2a2a2a', pass2: false }); } pencil([[0, 0], [Math.cos(t * 0.2 - 1.6) * 44, Math.sin(t * 0.2 - 1.6) * 44]], { w: 5, col: '#2a2a2a', pass2: false }); pencil([[0, 0], [30, 20]], { w: 6, col: '#2a2a2a', pass2: false }); pop();
    for (let s2 = 0; s2 < 3; s2++) { const y = 760 + s2 * 140; rect(-300, y, 420, 16, { wash: '#5a3a1a', washA: 1, w: 1.6 }); for (let i = 0; i < 9; i++) rect(-290 + i * 44, y - 100 + (i % 3) * 10, 38, 100 - (i % 3) * 10, { wash: ['#c8321a', '#f4ecd8', '#2a6ac8', '#e8a020', '#f4ecd8'][(i + s2) % 5], washA: 1, w: 1, col: '#3a2a1a' }); }
    push(1240, 1000, 1); pencil([[0, -440], [0, 220]], { w: 10, col: '#3a2a14' }); for (const a of [-0.8, 0.8]) pencil([[0, -400], [Math.sin(a) * 70, -380]], { w: 6, col: '#3a2a14' }); HAT6.fedora && (push(-60, -360, 0.5), HAT6.fedora(t, {}, 0, {}), pop()); blob([[-40, -380], [-70, -200], [-20, -60], [30, -200], [10, -380]], { wash: '#5a4a3a', washA: 1, w: 2, col: '#1a1a1a' }); pop();
  }
  function staff(t) {                                                   // машинистка, редактор с телефоном, фотограф со вспышкой и штативом
    const fl = t > EV.mg_gruy && t < EV.mg_gruy + 0.25;
    push(200, 1160, 1); rect(-170, 0, 340, 20, { wash: '#6a4424', washA: 1, w: 1.6 }); for (const x of [-150, 150]) pencil([[x, 20], [x, 260]], { w: 6, col: '#3a2010' });
    const tw = rect(-70, -60, 140, 60, { wash: '#2a2a2e', washA: 1, w: 2, col: '#0a0a0a', key: 21020 }); shadeG(tw.path, 0, -60, 0, 0, '#5a5a6a', 0.4); rect(-50, -110, 100, 60, { wash: '#f8f6f0', washA: 1, w: 1 }); for (let i = 0; i < 4; i++) rect(-40, -100 + i * 12, 70 - (i % 2) * 20, 4, { wash: '#3a3a3a', washA: 0.6, line: false });
    for (let i = 0; i < 10; i++) ell(-60 + i * 13, -30 + Math.abs(Math.sin(t * 20 + i)) * -4, 5, 5, { wash: '#e8e4dc', washA: 1, w: 0.8 }); pop();
    human(110, 1240, 1.0, t, { body: '#c8486a', legs: '#2a2a3a', hair: '#2a1a0a', face: gran(t) ? 'shock' : 'smile', armL: 'hold', armR: 'hold', look: 0.4, seed: 21021, long: 1 });
    push(110, 1240 - 300, 1); for (const sx of [-14, 14]) { poly([[sx - 12, -6], [sx + 12, -8], [sx + 10, 6], [sx - 10, 6]], { wash: '#ffffff', washA: 0.3, w: 2, col: '#1a1a1a' }); } pop();
    human(380, 1240, 1.0, t, { body: '#f4f0e8', legs: '#3a3a4a', hair: '#1a1a1a', face: gran(t) ? 'shock' : t > EV.mg_garlic ? 'grin' : 'calm', armL: 'hold', armR: gran(t) ? 'up' : 'hold', look: 0.3, seed: 21022, flip: -1, beard: 'short' });
    pencil([[340, 1000], [350, 1140]], { w: 4, col: '#3a5a8a', pass2: false }); pencil([[420, 1000], [410, 1140]], { w: 4, col: '#3a5a8a', pass2: false });
    push(400, 950, 1); blob([[-30, 0], [-30, -16], [30, -16], [30, 0]], { wash: '#1a1a1a', washA: 1, w: 1.4 }); pop();
    push(1050, 1180, 1); for (const a of [-0.3, 0, 0.3]) pencil([[0, -200], [Math.sin(a) * 120, 60]], { w: 4, col: '#3a3a3a' }); ell(0, -210, 90, 22, { wash: '#f8f8f4', washA: 1, w: 1.6 }); carbNest(0, -222, 0.32, t, { cream: 0, key: 21023 }); pop();
    human(880, 1250, 1.0, t, { body: '#6a6a5a', legs: '#3a3a3a', hair: '#5a3a1a', face: gran(t) ? 'shock' : 'grin', armL: 'hold', armR: 'hold', look: 0.7, seed: 21024, hat: 'cap', hatCol: '#3a3a3a' });
    push(940, 920, 1); rect(-30, -24, 60, 48, { wash: '#2a2a2a', washA: 1, w: 1.6 }); ell(0, 0, 14, 14, { wash: '#6a7a8a', washA: 1, w: 1.4 }); pencil([[20, -24], [30, -70]], { w: 3, col: '#6a6a6a' }); ell(34, -84, 22, 18, { wash: '#e8e8e8', washA: 1, w: 1.6, col: '#5a5a5a' }); if (fl) glow(34, -84, 220, 'rgba(255,255,255,1)', 0.6); pop();
    if (fl) screenFill('#ffffff', 0.2);
  }
  function granny(t) {                                                  // дверь: бабушка-римлянка в чёрном со скалкой (пауза-гэг)
    push(620, 1200, 1); const dr = rect(-130, -560, 260, 560, { wash: '#3a2a1a', washA: 1, w: 3, col: '#1a0a04', key: 21030 }); txt('REDAZIONE', 0, -500, 22, { font: 'Osw', col: '#e8d8a8' });
    const open = gran(t) ? sm(clamp((t - EV.mg_gran + 0.1) / 0.3)) : 0; rect(-120, -550, 240 * (1 - open * 0.75), 550, { wash: '#6a4a2a', washA: 1, w: 2, col: '#2a1a08' }); ell(-120 + 210 * (1 - open * 0.75), -280, 8, 8, { wash: '#d6a842', washA: 1, w: 1 });
    if (open > 0.2) { const sh = Math.sin(t * 18) * 0.4; human(0, 0, 1.05, t, { body: '#1a1a1e', legs: '#1a1a1e', hair: '#d8d4cc', face: 'angry', armL: 'hips', armR: 'up', look: 0.2, seed: 21031, long: 1, hat: 'scarf', hatCol: '#2a2a2e' });
      push(50, -380, 1, sh); rect(-10, -90, 20, 180, { wash: '#c8a070', washA: 1, w: 2, col: '#5a3a1a' }); rect(-14, -110, 28, 24, { wash: '#a87a4a', washA: 1, w: 1.4 }); rect(-14, 86, 28, 24, { wash: '#a87a4a', washA: 1, w: 1.4 }); pop();
      if (t > EV.mg_forgive - 0.2) for (let i = 0; i < 3; i++) txt('!', 90 + i * 30, -560 - i * 10, 60, { font: 'Osw', col: '#d8241e', a: popK(t, EV.mg_forgive - 0.2 + i * 0.08, 0.3) }); }
    pop();
  }
  function desk(t) {                                                    // стол перед Томом: разворот журнала-герой, лампа, чеснок, грюйер, гранки, мока, карандаши
    const c = rect(-500, 1440, 2100, 700, { wash: '#7a4a24', washA: 1, w: 3, col: '#2a1408', key: 21040 }); shadeG(c.path, 0, 1440, 0, 1800, '#2a1408', 0.55); for (let i = 0; i < 10; i++) pencil([[-500, 1460 + i * 26], [1600, 1466 + i * 26]], { w: 1.4, col: '#4a2a10', a: 0.4, pass2: false });
    rect(-500, 1430, 2100, 20, { wash: '#2a5a3a', washA: 1, w: 1.4, col: '#0a1a10' });
    mag1954(930, 1380, 0.8, -0.04, { open: 1, hl: t > EV.mg_garlic });
    push(1220, 1440, 1); rect(-40, -10, 80, 10, { wash: '#2a3a2a', washA: 1, w: 1.4 }); pencil([[0, -10], [-30, -200], [20, -260]], { w: 6, col: '#2a3a2a' }); const sh = poly([[-30, -250], [70, -300], [100, -220], [10, -190]], { wash: '#2a7a4a', washA: 1, w: 2, col: '#0a2a14' }); shadeG(sh.path, 100, -220, -30, -250, '#0a2a14', 0.4); glow(60, -200, 90, 'rgba(255,230,160,1)', 0.3); pop();
    for (let i = 0; i < 4; i++) { push(150 + i * 14, 1450 - i * 8, 1, 0.1 - i * 0.05); rect(-90, -16, 180, 16, { wash: '#f4f0e4', washA: 1, w: 1, col: '#8a8a7a' }); pop(); } txt('BOZZA', 160, 1408, 22, { font: 'Hand', col: '#c8321a', rot: 0.08 });
    push(360, 1450, 1); const mk = poly([[-30, 0], [-36, -60], [-20, -70], [20, -70], [36, -60], [30, 0]], { wash: '#a8acb4', washA: 1, w: 2, col: '#3a3e44', key: 21041 }); metalG(mk.path, -10, -40, 50, '#ffffff', '#a8acb4', '#3a3e44'); poly([[-24, -70], [-14, -120], [14, -120], [24, -70]], { wash: '#a8acb4', washA: 1, w: 2 }); pencil(spline([[30, -40], [50, -60], [40, -90]], false, 5), { w: 6, col: '#1a1a1a' }); steamWisps(0, -130, 0.4, t, 2, 21042, 0.4); pop();
    if (t > EV.mg_garlic) { const k = popK(t, EV.mg_garlic, 0.35); push(660, 1430 - (1 - k) * 160, 0.6 + 0.4 * k); const g = blob([[-50, 10], [-56, -30], [-30, -66], [0, -80], [30, -66], [56, -30], [50, 10], [0, 22]], { wash: '#f4ecdc', washA: 1, w: 2, col: '#8a7a5a', key: 21043 }); shadeG(g.path, 56, 10, -40, -40, '#c8b898', 0.5); for (const a of [-30, -10, 10, 30]) pencil([[a * 0.4, -76], [a, 10]], { w: 1.6, col: '#b8a888', pass2: false }); pencil([[0, -80], [4, -110]], { w: 5, col: '#a89878' }); pop(); bubbleTag('+ ЧЕСНОК', 640, 1180, t, EV.mg_garlic + 0.05, '#6a8a2a', 40, -0.05); }
    if (t > EV.mg_gruy) { const k = popK(t, EV.mg_gruy, 0.35); push(760, 1420 - (1 - k) * 160, 0.6 + 0.4 * k); const ch = poly([[-90, 0], [90, -20], [80, 30], [-90, 30]], { wash: '#f4d870', washA: 1, w: 2.2, col: '#8a6a1a', key: 21044 }); shadeG(ch.path, 90, 0, -40, 0, '#c8a030', 0.4); poly([[80, 30], [90, -20], [104, -14], [96, 36]], { wash: '#d8b040', washA: 1, w: 2 });
      for (const [hx, hy, hr] of [[-50, 10, 12], [-10, -2, 8], [30, 14, 10], [60, -4, 6], [-70, 22, 6]]) ell(hx, hy, hr, hr * 0.7, { wash: '#c8a030', washA: 1, w: 1.2, col: '#8a6a1a' });
      push(-60, -50, 1); pencil([[0, 30], [0, -40]], { w: 3, col: '#5a3a1a', pass2: false }); rect(0, -40, 50, 36, { wash: '#d8241e', washA: 1, w: 1.4 }); rect(20, -34, 10, 24, { wash: '#ffffff', washA: 1, line: false }); rect(13, -27, 24, 10, { wash: '#ffffff', washA: 1, line: false }); pop(); pop();
      bubbleTag('ГРЮЙЕР — ШВЕЙЦАРИЯ!', 860, 1110, t, EV.mg_gruy + 0.05, '#d8241e', 38, 0.04); }
    castShadow(900, 1450, 340, 120, 0.6, 0.25);
  }
  function front(t) {                                                   // передний план: каретка машинки с листом, край фикуса
    push(-60, 1820, 1.5); const tw = rect(-200, -120, 400, 140, { wash: '#2a2a2e', washA: 1, w: 3, col: '#0a0a0a', key: 21050 }); shadeG(tw.path, 0, -120, 0, 20, '#6a6a7a', 0.4); rect(-160, -260, 300, 150, { wash: '#f8f6f0', washA: 1, w: 1.4 }); txt('Spaghetti alla carbonara…', -10, -200, 26, { font: 'Hand', col: '#2a2a2a' }); rect(-220, -130, 440, 24, { wash: '#3a3a3e', washA: 1, w: 1.6 }); pop();
    push(1280, 1500, 1.6); for (let i = 0; i < 9; i++) { const a = -2.6 + i * 0.3; blob([[0, 0], [Math.cos(a) * 80 - 20, Math.sin(a) * 80], [Math.cos(a) * 160, Math.sin(a) * 160], [Math.cos(a) * 80 + 20, Math.sin(a) * 80]], { wash: i % 2 ? '#2a6a2a' : '#3a8a3a', washA: 1, w: 1.4, col: '#0a2a0a' }); } pop();
  }
  WORLD.mag = (t, u, cat) => {
    lay(14, () => { office(t); haze('#c8e0f0', 0.05); });
    lay(4.4, () => { granny(t); });
    lay(3.6, () => { staff(t); shaft(1000, 200, 300, 1500, 0.3, 'rgba(220,240,255,0.6)', 0.12); });
    lay(1, () => { cat(); desk(t); lightPool(1100, 1440, 420, 80, 'rgba(255,230,160,1)', 0.25); });
    lay(0.6, () => { front(t); moodDark(700, 1100, 560, 1500, '#0a1420', 0.45); motes(18, [600, 300, 1300, 1400], '#ffffff', t, 21060, { sp: 6, sz: 3, a: 0.35 }); });
  };
  DIR.mag = {
    outfit: 'econA', light: { side: 1, rim: '#d8ecff' }, grade: ['#a8c8e0', 0.06],
    act: () => [[S0.mag, 'talk'], [EV.mg_year, 'awe'], [EV.mg_garlic, 'shock'], [EV.mg_gruy, 'sideeye'], [EV.mg_gran, 'scared'], [EV.mg_forgive + 0.3, 'grin']],
    pose: (t, u, b) => { const hide = gran(t) && t < EV.mg_forgive + 0.2;
      return Object.assign(b, { x: 560, y: 1590, s: 1.15, flip: 1, look: gran(t) ? [-0.3, -0.3] : t > EV.mg_garlic ? [0.7, 0.6] : [0.5, 0.3], hand: hide ? [80, -380] : [170, -300], handF: hide ? [-60, -360] : [-70, -220], prop: 'mag54P', propAng: hide ? 0 : -0.25, sweat: hide, squash: b.squash + (hide ? 0.05 : 0) }); },
    cam: () => [[S0.mag, 660, 1180, 0.24], [EV.mg_rec, 720, 1220, 0.3, 'x'], [EV.mg_garlic, 700, 1220, 0.3], [EV.mg_gruy, 720, 1220, 0.3, 'x'], [EV.mg_gran - 0.1, 620, 1060, 0.24, 'x'], [S1.mag, 640, 1100, 0.28]]
  };
  TRANS_IN.mag = { a: 0.2, b: 0.5, runA: 1, fx(k, t, A, B) {             // сливки заливают кадр сверху потёками, стекают — под ними новая сцена
    drawBuf(k < 0.55 ? A : B, 1, 540, 960);
    scr(() => { const r = rng(21070); const cov = k < 0.55 ? sm(k / 0.55) : 1, off = k < 0.55 ? 0 : sm((k - 0.55) / 0.45) * 2300; ctx.save(); ctx.translate(0, off);
      ctx.fillStyle = '#fbf4e2'; ctx.beginPath(); ctx.moveTo(0, -20); for (let i = 0; i <= 24; i++) { const x = i * W / 24, d = (0.6 + r() * 0.6) * cov * H * 1.15; ctx.lineTo(x, d); ctx.lineTo(x + W / 48, d - 40 - r() * 60); } ctx.lineTo(W, -20); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.6)'; for (let i = 0; i < 12; i++) ctx.fillRect(r() * W, cov * H * r(), 10, 80); ctx.restore(); });
    rewTag(k, 0.8);
  } };
})();
