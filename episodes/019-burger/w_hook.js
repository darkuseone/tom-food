/* 019 — `hook` + `button`: «Гамбургер — значит, из Гамбурга? Тогда почему за его родину спорят шесть городов? / Откусим историю!» Ночной американский дайнер:
   окно на мокрую улицу с неоном «BURGERS» (главный свет — красно-бирюзовый неон в окне, второй — тёплая лампа над стойкой), стена в кафеле с хромом, меню-доска с ценами,
   витрина с пирогами, музыкальный автомат, кабинки с гостями (пара с молочным коктейлем, дальнобойщик в кепке, официантка с кофейником), шахматный пол.
   Над стойкой — карта США в раме, на «шесть городов» на ней один за другим втыкаются 6 флажков (и красный флажок Гамбурга на вставке «Европа»). Герой-предмет — высокий
   бургер на тарелке. По словам: «Гамбургер» — камера на бургер, пар; «Гамбурга?» — флажок Гамбурга выскакивает; «шесть городов» — 6 флажков на карте, гости спорят и
   тычут пальцами; «Откусим историю!» — Том откусывает бургер, сок и крошки, хруст. `button`: тот же дайнер, Том с бургером подмигивает → петля в хук. */
(() => {
  EV.hk_ham = wtw('h1', 'Гамбурга?');
  EV.hk_why = wtw('h1', 'почему');
  EV.hk_six = wtw('h1', 'шесть');
  EV.hk_grab = LS('h2') - 0.1;
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_six + 0.05, 0.18, 8], [EV.hk_bite, 0.18, 9]);
  KEYW.push('Гамбурга?', 'шесть');
  const SIX = [[-150, -40, '#c81e10', 'ВИСКОНСИН'], [140, -60, '#2a6aa8', 'НЬЮ-ЙОРК'], [-40, 40, '#3a8a3a', 'ОКЛАХОМА'], [210, -10, '#e8b820', 'КОННЕКТИКУТ'], [-90, 90, '#8a3a8a', 'ТЕХАС']];

  function street(t) {                                                  // за окном: мокрая улица, неон, фары, дождь
    vgrad(-500, 700, ['#0a0e22', '#1a2040', '#2a2a48']);
    for (let i = 0; i < 6; i++) { const x = -360 + i * 170, h = 260 + (i * 97) % 200; rect(x, 420 - h, 150, h, { wash: '#14182c', washA: 1, w: 1.2, col: '#0a0a14' }); windows(x + 14, 440 - h, 122, h - 40, 3, 5, 19600 + i, 0.5, '#ffd890', '#2a2a40', 0.8); }
    rect(-400, 420, 1300, 200, { wash: '#1a1c2a', washA: 1, line: false }); for (let i = 0; i < 9; i++) pencil([[-380 + i * 140, 470], [-330 + i * 140, 470]], { w: 4, col: '#e8d080', a: 0.5, pass2: false });
    const cx = ((t * 160) % 1400) - 500; push(cx, 470, 1); rect(-110, -50, 220, 50, { wash: '#8a1a1a', washA: 1, w: 1.6, col: '#1a0a0a' }); poly([[-70, -50], [-40, -90], [50, -90], [80, -50]], { wash: '#6a1414', washA: 1, w: 1.4 }); ell(-70, 0, 20, 20, { wash: '#111', washA: 1, line: false }); ell(70, 0, 20, 20, { wash: '#111', washA: 1, line: false }); glow(110, -30, 60, 'rgba(255,240,180,1)', 0.3); pop();
    for (let i = 0; i < 4; i++) pencil([[-380 + i * 300, 500], [-300 + i * 300, 600]], { w: 14, col: i % 2 ? '#ff4a6a' : '#3ae0d0', a: 0.18, pass2: false });
    motes(40, [-400, -500, 900, 600], '#a8c0ff', t, 19601, { sp: 520, vx: -60, sz: 2, a: 0.5, stretch: 6 });
  }
  function neonSign(t) {                                                // неон «BURGERS» в окне — главный свет; мигает буква
    const on = Math.sin(t * 7) > -0.8, flick = Math.sin(t * 13) > -0.3;
    push(0, -120, 1); rect(-240, -70, 480, 140, { wash: '#1a0a14', washA: 0.6, w: 2, col: '#2a2a2a' });
    txt('BURGER', -20, 30, 92, { font: 'Osw', col: on ? '#ff4a6a' : '#5a1a2a' }); txt('S', 196, 30, 92, { font: 'Osw', col: on && flick ? '#ff4a6a' : '#4a1420' });
    pencil(spline([[-210, 52], [-120, 64], [80, 64], [210, 52]], false, 6), { w: 6, col: '#3ae0d0', a: 0.9, pass2: false }); txt('OPEN 24 H', 0, 104, 30, { font: 'Osw', col: '#3ae0d0' });
    if (on) glow(0, 0, 260, 'rgba(255,70,110,1)', 0.3); pop();
  }
  function wall(t) {                                                    // (lay 14 ≈ экран) красные панели, гирлянда, окно с неоном слева, меню-доска справа, кафель-шахматка внизу
    vgrad(-200, 2100, ['#1a1420', '#3a2a2a', '#5a3a30']);
    for (let x = -200; x < 1300; x += 120) { const p = rect(x, -200, 118, 1240, { wash: '#7a2a24', washA: 1, w: 1.4, col: '#2a0a08' }); hatch(p.path, p.bb, { gap: 10, a: 0.12, col: '#2a0a08', ang: 1.5, key: 19610 + x }); shadeG(p.path, x, 0, x + 118, 0, '#3a0a08', 0.3); }
    for (let x = -200; x < 1300; x += 50) for (let y = 1040; y < 2000; y += 50) { const g = ((x / 50) | 0) + ((y / 50) | 0); rect(x, y, 48, 48, { wash: g % 2 ? '#e8e2d4' : '#2a2a30', washA: 1, w: 0.6, col: '#5a5a5a' }); }
    rect(-200, 1016, 1500, 26, { wash: '#c8ccd4', washA: 1, w: 2, col: '#4a4e58' }); pencil([[-200, 1022], [1300, 1022]], { w: 4, col: '#ffffff', a: 0.6, pass2: false });
    push(250, 640, 1); const w = rect(-250, -300, 500, 600, { wash: '#0a0e22', washA: 1, w: 10, col: '#c8ccd4', key: 19620 }); ctx.save(); ctx.clip(w.path); push(0, 60, 0.8); street(t); neonSign(t); pop(); ctx.restore();
    pencil([[0, -300], [0, 300]], { w: 6, col: '#c8ccd4' }); for (let i = 0; i < 6; i++) pencil([[-240 + i * 90, -290], [-232 + i * 90, -260 + Math.sin(t + i) * 4]], { w: 3, col: '#8ac0ff', a: 0.4, pass2: false });
    for (let i = 0; i < 6; i++) poly([[-260 + i * 87, -320], [-173 + i * 87, -320], [-188 + i * 87, -262], [-245 + i * 87, -262]], { wash: i % 2 ? '#f4efe0' : '#c81e10', washA: 1, w: 1.2, col: '#3a0a08' }); pop();
    push(940, 1240, 0.62); const mb = rect(-230, -260, 460, 430, { wash: '#1a1a1a', washA: 1, w: 4, col: '#c8ccd4', key: 19630 }); txt('MENU', 0, -200, 54, { font: 'Osw', col: '#ffd040' });
    [['HAMBURGER', '15¢'], ['CHEESEBURGER', '20¢'], ['FRIES', '10¢'], ['MALT SHAKE', '15¢'], ['APPLE PIE', '10¢'], ['COFFEE', '5¢']].forEach(([a, b], i) => { txt(a, -60, -130 + i * 50, 30, { font: 'Hand', col: '#f4efe0' }); txt(b, 170, -130 + i * 50, 30, { font: 'Hand', col: '#ffd040' }); }); pop();
    push(940, 190, 0.8); ell(0, 0, 70, 70, { wash: '#f4efe0', washA: 1, w: 4, col: '#c8ccd4' }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; pencil([[Math.cos(a) * 56, Math.sin(a) * 56], [Math.cos(a) * 64, Math.sin(a) * 64]], { w: 3, col: '#2a2a2a', pass2: false }); } pencil([[0, 0], [Math.cos(t * 0.2) * 40, Math.sin(t * 0.2) * 40]], { w: 5, col: '#2a2a2a', pass2: false }); pencil([[0, 0], [30, -40]], { w: 4, col: '#c81e10', pass2: false }); pop();
    for (let i = 0; i < 12; i++) { const x = -180 + i * 130, y = 260 + Math.sin(i * 0.9) * 20; pencil([[x, y], [x + 130, 260 + Math.sin((i + 1) * 0.9) * 20]], { w: 2, col: '#1a1008', pass2: false }); ell(x + 65, y + 24, 9, 13, { wash: i % 2 ? '#ff6a8a' : '#6af0e0', washA: 1, w: 1, col: '#2a2a2a' }); }
    push(1040, 760, 0.7); rect(-70, -100, 140, 200, { wash: '#f4efe0', washA: 1, w: 3, col: '#c8a050' }); human(0, 80, 0.45, t, { body: '#c81e10', legs: '#2a2a2a', hair: '#e8c060', face: 'grin', armL: 'hold', armR: 'wave', seed: 19625, long: 1 }); txt('1955', 0, -70, 20, { font: 'Osw', col: '#2a2a2a' }); pop();
  }
  function mapFrame(t) {                                                // карта США в раме: 6 городов-претендентов, вставка «Европа» с Гамбургом
    push(740, 640, 0.7); const f = rect(-330, -200, 660, 400, { wash: '#6a4424', washA: 1, w: 3, col: '#2a1408', key: 19640 }); shadeG(f.path, 330, 200, -330, -200, '#2a1408', 0.4);
    rect(-310, -180, 620, 360, { wash: '#a8c8d8', washA: 1, w: 1.4, col: '#3a4a5a' }); for (let i = 0; i < 8; i++) pencil([[-300, -160 + i * 44], [300, -150 + i * 44]], { w: 1.4, col: '#ffffff', a: 0.3, pass2: false });
    usMap(40, 20, 0.8, t, { key: 19641, pins: SIX.map(([x, y, c, l], i) => [x, y, c, i < 2 ? l : '', EV.hk_six + i * 0.12]) });
    push(-240, -110, 1); rect(-60, -50, 120, 100, { wash: '#efe6c8', washA: 1, w: 1.6, col: '#5a4a2a' }); blob([[-40, 30], [-30, -20], [10, -36], [40, -10], [30, 30]], { wash: '#d8c890', washA: 1, w: 1.2 }); txt('EUROPA', 0, 46, 16, { font: 'Osw', col: '#5a4a2a' });
    if (t > EV.hk_ham) flagHH(0, 0, 0.45 * popK(t, EV.hk_ham, 0.35), t); pop();
    txt('WHO MADE THE FIRST?', 40, 228, 24, { font: 'Osw', col: '#ffd040' }); lightPool(0, 0, 360, 260, 'rgba(255,220,160,1)', 0.12); pop();
  }
  function booths(t) {                                                  // кабинки: гости спорят на «шесть», официантка с кофейником, автомат
    const arg = t > EV.hk_six && t < LS('h2') + 0.5;
    for (const bx of [160, 1000]) { const s1 = rect(bx - 140, 960, 280, 240, { wash: '#b81e1e', washA: 1, w: 2, col: '#3a0606', key: 19650 + bx }); shadeG(s1.path, bx, 1200, bx, 960, '#ff6a5a', 0.35); for (let i = 0; i < 4; i++) pencil([[bx - 130 + i * 86, 970], [bx - 130 + i * 86, 1190]], { w: 2, col: '#5a0808', a: 0.5, pass2: false }); rect(bx - 150, 1080, 300, 18, { wash: '#c8ccd4', washA: 1, w: 1.4, col: '#4a4e58' }); }
    human(90, 1200, 1.0, t, { body: '#e8b0c8', legs: '#2a2a3a', hair: '#e8c060', face: arg ? 'shock' : 'smile', armL: 'hold', armR: arg ? 'point' : 'hold', look: 0.6, seed: 19660, long: 1 });
    human(240, 1200, 1.0, t, { body: '#2a3a6a', legs: '#2a2a2a', hair: '#2a1a0a', face: arg ? 'angry' : 'grin', armL: 'hold', armR: arg ? 'up' : 'hold', look: -0.5, seed: 19661, flip: -1, hat: 'cap', hatCol: '#c81e10' });
    push(165, 1080, 1); for (const [dx, c] of [[-30, '#f4c8d8'], [30, '#f4e8c8']]) { poly([[dx - 18, 0], [dx + 18, 0], [dx + 24, -80], [dx - 24, -80]], { wash: c, washA: 0.9, w: 1.4, col: '#5a4a4a' }); ell(dx, -84, 26, 12, { wash: '#ffffff', washA: 1, w: 1 }); pencil([[dx + 6, -84], [dx + 16, -130]], { w: 4, col: '#c81e10', pass2: false }); ell(dx + 2, -96, 6, 6, { wash: '#c81e10', washA: 1, line: false }); } pop();
    human(1050, 1200, 1.05, t, { body: '#4a5a3a', legs: '#2a2a2a', hair: '#5a3a1a', face: arg ? 'angry' : 'calm', armL: 'hold', armR: arg ? 'point' : 'hold', look: -0.7, seed: 19662, flip: -1, beard: 'short', hat: 'cap', hatCol: '#2a4a8a' });
    human(870, 1210, 1.05, t, { body: '#8ac8c0', legs: '#f4efe0', hair: '#c84a2a', face: arg ? 'grin' : 'smile', armL: 'hold', armR: 'hold', look: 0.4, seed: 19663, long: 1, trim: '#ffffff' });
    push(930, 1030, 1); blob([[-20, 0], [-24, -50], [-8, -64], [20, -60], [26, -20], [20, 0]], { wash: '#2a2a2a', washA: 1, w: 1.4 }); pencil([[22, -40], [44, -50]], { w: 4, col: '#2a2a2a', pass2: false }); for (let i = 0; i < 2; i++) { const q = (t * 0.6 + i / 2) % 1; ell(0, -70 - q * 60, 8 + q * 10, 6, { wash: '#ffffff', washA: 0.4 * (1 - q), line: false }); } pop();
    push(-60, 1240, 1); const jb = blob([[-110, 0], [-110, -260], [-70, -330], [70, -330], [110, -260], [110, 0]], { wash: '#c8862a', washA: 1, w: 2.4, col: '#3a1a08', key: 19664 }); shadeG(jb.path, 110, 0, -110, 0, '#4a1a08', 0.4);
    for (let i = 0; i < 5; i++) pencil(spline([[-90 + i * 4, -40], [-80, -200 + i * 10], [0, -300 + i * 8], [80, -200 + i * 10], [90 - i * 4, -40]], false, 8), { w: 6, col: ['#ff4a6a', '#ffd040', '#3ae0d0', '#ff4a6a', '#ffd040'][i], a: 0.8, pass2: false }); glow(0, -200, 120, 'rgba(255,190,90,1)', 0.25); pop();
  }
  function pies(t) {                                                    // витрина с пирогами и стопка тарелок на дальнем конце стойки
    push(420, 1250, 0.8); rect(-150, -180, 300, 180, { wash: '#c8e8f0', washA: 0.35, w: 2, col: '#8a9aa8' }); for (let r = 0; r < 2; r++) for (let i = 0; i < 3; i++) { const x = -100 + i * 100, y = -30 - r * 84; ell(x, y, 40, 14, { wash: '#f4efe0', washA: 1, w: 1 }); blob([[x - 36, y - 2], [x - 34, y - 26], [x, y - 34], [x + 34, y - 26], [x + 36, y - 2]], { wash: ['#e8a040', '#8a1a3a', '#f4d890'][i], washA: 1, w: 1.2, col: '#5a3a1a' }); for (let k = 0; k < 3; k++) pencil([[x - 26 + k * 20, y - 30], [x - 18 + k * 20, y - 6]], { w: 2, col: '#fff0c8', a: 0.6, pass2: false }); } pop();
  }
  function counter(t) {                                                 // стойка из хрома и красного пластика: бургер-герой, бутылки, салфетница, кофе
    const c = rect(-500, 1440, 2100, 700, { wash: '#b81e1e', washA: 1, w: 3, col: '#3a0606', key: 19670 }); shadeG(c.path, 0, 1440, 0, 1800, '#3a0404', 0.55); for (let i = 0; i < 12; i++) pencil([[-480 + i * 180, 1470], [-480 + i * 180, 1900]], { w: 3, col: '#ff6a5a', a: 0.3, pass2: false });
    const top = rect(-500, 1410, 2100, 44, { wash: '#e8ecf0', washA: 1, w: 2.4, col: '#4a4e58', key: 19671 }); shadeG(top.path, 0, 1410, 0, 1454, '#8a9098', 0.4); pencil([[-500, 1416], [1600, 1416]], { w: 4, col: '#ffffff', a: 0.8, pass2: false });
    const bitten = t > EV.hk_grab && t < S1.hook; if (!bitten) { ell(840, 1430, 140, 26, { wash: '#f4f4f0', washA: 1, w: 2, col: '#6a6e78' }); burger(840, 1420, 0.72, t, { key: 19672, steam: 1, tall: 1 }); }
    else { ell(840, 1430, 140, 26, { wash: '#f4f4f0', washA: 1, w: 2, col: '#6a6e78' }); for (let i = 0; i < 6; i++) ell(800 + i * 22, 1420, 6, 4, { wash: BG.bunL, washA: 1, line: false }); }
    sauceBottle(330, 1420, 0.8, -0.05, 'ketchup', 19673); sauceBottle(410, 1420, 0.8, 0.05, 'mustard', 19674);
    push(1180, 1420, 1); rect(-50, -90, 100, 90, { wash: '#c8ccd4', washA: 1, w: 2, col: '#4a4e58' }); for (let i = 0; i < 6; i++) pencil([[-40 + i * 16, -86], [-40 + i * 16, -110 - (i % 2) * 6]], { w: 5, col: '#ffffff', pass2: false }); pop();
    push(1340, 1420, 1); ell(0, 0, 50, 10, { wash: '#f4f4f0', washA: 1, w: 1.4 }); rect(-34, -70, 68, 70, { wash: '#f4f4f0', washA: 1, w: 1.6, col: '#5a5a5a' }); ell(0, -70, 34, 8, { wash: '#3a1a0a', washA: 1, w: 1 }); pencil(spline([[34, -56], [56, -46], [34, -20]], false, 5), { w: 6, col: '#f4f4f0', pass2: false }); pop();
    push(170, 1420, 1); rect(-24, -60, 48, 60, { wash: '#e8e8e8', washA: 0.6, w: 1.4 }); rect(-26, -76, 52, 18, { wash: '#c8ccd4', washA: 1, w: 1.4 }); for (let i = 0; i < 9; i++) ell(-12 + (i % 3) * 12, -46 + ((i / 3) | 0) * 14, 3, 3, { wash: '#ffffff', washA: 1, line: false }); pop();
    castShadow(840, 1440, 300, 160, 0.6, 0.28); rect(-500, 1520, 2100, 16, { wash: '#e8ecf0', washA: 1, w: 1.4, col: '#4a4e58' }); rect(-500, 1640, 2100, 10, { wash: '#e8ecf0', washA: 0.8, line: false }); for (let i = 0; i < 9; i++) { push(-300 + i * 240, 1590, 1, (i % 2 - 0.5) * 0.1); ell(0, 0, 44, 30, { wash: ['#ffd040', '#3ae0d0', '#f4efe0'][i % 3], washA: 0.9, w: 1.6, col: '#3a0606' }); txt(['EAT', 'JOE\'S', '24H'][i % 3], 0, 10, 22, { font: 'Osw', col: '#3a0606' }); pop(); } crumbs(700, 1180, t, EV.hk_bite, 12, 19675, BG.bunL);
  }
  function stools(t) {                                                  // передний план: хромированные табуреты, край стойки, свисающая лампа
    for (const x of [-200, 1280]) { push(x, 2120, 1.5); ell(0, -120, 120, 34, { wash: '#c81e10', washA: 1, w: 2.4, col: '#3a0606' }); shadeG(ell(0, -120, 120, 34, { wash: '#c81e10', washA: 1, w: 2, col: '#3a0606' }).path, 0, -150, 0, -90, '#ff8a6a', 0.4); rect(-16, -100, 32, 200, { wash: '#c8ccd4', washA: 1, w: 2 }); pop(); }
    push(1180, -420, 1.4); pencil([[0, -400], [0, 0]], { w: 3, col: '#1a1a1a', pass2: false }); poly([[-80, 60], [-30, 0], [30, 0], [80, 60]], { wash: '#2a5a4a', washA: 1, w: 2, col: '#0a1a14' }); ell(0, 62, 40, 10, { wash: '#fff0c0', washA: 1, line: false }); glow(0, 80, 140, 'rgba(255,220,150,1)', 0.3); pop();
  }
  WORLD.hook = (t, u, cat) => {
    lay(14, () => { wall(t); haze('#ff6a8a', 0.04); });
    lay(4, () => { booths(t); pies(t); lightPool(160, 1200, 500, 160, 'rgba(255,80,120,1)', 0.2); });
    lay(2.6, () => { mapFrame(t); });
    lay(1, () => { cat(); counter(t); lightPool(760, 1420, 520, 70, 'rgba(255,220,160,1)', 0.25); });
    lay(0.6, () => { stools(t); moodDark(640, 1100, 500, 1500, '#100818', 0.5); steamWisps(840, 1230, 1, t, 3, 19680, 0.25); });
  };
  const stPose = (b, t) => Object.assign(b, { x: 620, y: 1590, s: 1.18, flip: 1, look: [0.3, -0.2], hand: [180, -310], handF: [-70, -210] });
  DIR.hook = {
    outfit: 'diner', light: { side: -1, rim: '#ff6a8a' }, grade: ['#ff7a8a', 0.06],
    act: () => [[0, 'suspicious'], [EV.hk_ham, 'shock'], [EV.hk_why, 'sideeye'], [EV.hk_six, 'annoyed'], [EV.hk_grab, 'smug'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { if (t < EV.hk_grab) return Object.assign(stPose(b, t), { look: t < EV.hk_ham ? [0.6, 0.4] : t < EV.hk_six ? [0.2, -0.9] : [0.3, -0.8], point: t > EV.hk_six ? 1 : undefined, hand: t > EV.hk_six ? [200, -420] : [180, -310], sweat: t > EV.hk_six });
      const bite = t > EV.hk_bite; return Object.assign(b, { x: 620, y: 1590, s: 1.18, flip: 1, look: bite ? [-0.2, 0] : [0.4, 0.3], hand: bite ? [70, -300] : [150, -300], handF: [-70, -210], prop: bite ? 'burgerBiteP' : 'burgerP', propAng: 0.2, tailUp: bite, squash: b.squash + (bite && t < EV.hk_bite + 0.12 ? 0.1 : 0) }); },
    afterCat: (t, u, P) => { if (t > EV.hk_bite && t < S1.hook) { const k = clamp((t - EV.hk_bite) / 0.7); for (let i = 0; i < 4; i++) { const q = (k + i / 4) % 1; ell(P.x + (60 + i * 8) * P.s, P.y - (300 - q * 160) * P.s, 5, 7, { wash: i % 2 ? BG.ketchup : '#7a3a14', washA: 1 - q, line: false }); } } },
    cam: () => [[0, 680, 1060, 0.3], [EV.hk_ham, 660, 960, 0.24, 'x'], [EV.hk_six, 660, 920, 0.24], [EV.hk_grab, 640, 1040, 0.28, 'x'], [EV.hk_bite, 640, 1060, 0.32], [S1.hook, 640, 1060, 0.34]]
  };
  EV.bt_wink = wtw('x1', 'булку!');
  WORLD.button = (t, u, cat) => WORLD.hook(t, u, cat);
  DIR.button = { outfit: 'diner', light: { side: -1, rim: '#ff6a8a' }, grade: ['#ff7a8a', 0.06],
    act: () => [[S0.button, 'grin'], [EV.bt_wink - 0.3, 'laugh'], [EV.bt_wink, 'wink'], [DUR - 0.5, 'suspicious']],
    pose: (t, u, b) => { if (t > DUR - 0.7) return Object.assign(stPose(b, t), { look: [0.6, 0.4] }); return Object.assign(b, { x: 620, y: 1590, s: 1.18, flip: 1, look: [-0.4, -0.1], hand: [130, -330], handF: [-70, -210], prop: 'burgerP', propAng: 0.1, tailUp: true }); },
    cam: () => [[S0.button, 640, 1060, 0.28], [DUR - 0.8, 670, 1060, 0.32], [DUR - 0.1, 680, 1060, 0.3], [DUR, 680, 1060, 0.3]] };
})();
