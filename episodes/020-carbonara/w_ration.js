/* 020 — `ration`: «Подсказка: Рим, 1944-й. У американских солдат — бекон и яичный порошок.» — повторный хук перед развязкой.
   Рассвет над Римом, июнь 1944: силуэт Колизея и зонтичные пинии на розово-оранжевом небе (главный свет — низкое солнце за Колизеем), полевая кухня под хаки-тентом
   (второй свет — керосиновый фонарь на шесте), джип с белой звездой, штабель ящиков RATIONS, канистры, полевая плита с котлами и паром.
   Очередь солдат с котелками, итальянский повар в белом с усами мешает пасту в котле, мальчишки выглядывают из-за ящиков. Том — армейский повар в пилотке.
   По словам: «Подсказка:» — Колизей выплывает из дымки; «1944-й» — фонарь вспыхивает; «солдат» — очередь стучит котелками, «бекон» — пласт бекона шлёпается на противень
   и шкворчит, «порошок.» — Том открывает банку DRIED EGG, из неё облачко жёлтого порошка. Переход В сцену: крышка ящика пайков отъезжает, как шторка. */
(() => {
  EV.rt_hint = wtw('s9', 'Подсказка:');
  EV.rt_year = wtw('s9', '1944-й.');
  EV.rt_sold = wtw('s9', 'солдат');
  EV.rt_bacon = wtw('s9', 'бекон');
  EV.rt_egg = wtw('s9', 'порошок.');
  SHAKES.push([EV.rt_bacon + 0.1, 0.15, 7], [EV.rt_egg + 0.05, 0.2, 8]);
  KEYW.push('бекон', 'порошок.');

  function dawn(t) {                                                    // розово-оранжевое небо, солнце за Колизеем, пинии, купола
    vgrad(-400, 1000, ['#3a3a6a', '#c86a6a', '#f8b878']); glow(560, 620, 260, 'rgba(255,220,150,1)', 0.35); ell(560, 640, 70, 70, { wash: '#fff0c0', washA: 1, line: false });
    for (let i = 0; i < 5; i++) blob([[-300 + i * 340, 100 + (i % 2) * 80], [-200 + i * 340, 70], [-80 + i * 340, 110], [-160 + i * 340, 130]], { wash: '#f8a8a0', washA: 0.6, line: false });
    const hk = t > EV.rt_hint ? sm(clamp((t - EV.rt_hint) / 0.8)) : 0.3;
    push(560, 860, 1); const co = blob([[-360, 0], [-340, -300], [-200, -380], [0, -400], [200, -380], [340, -300], [360, 0]], { wash: '#8a5a4a', washA: 0.4 + 0.6 * hk, w: 2, col: '#3a1a14', key: 21400 });
    for (let rr = 0; rr < 3; rr++) for (let c = 0; c < 9; c++) { const x = -300 + c * 75, y = -60 - rr * 110; ell(x, y, 22, 36, { wash: '#f8c890', washA: (0.4 + 0.6 * hk) * 0.9, w: 1.2, col: '#3a1a14' }); }
    poly([[200, -380], [360, -300], [360, 0], [300, 0], [300, -200], [220, -300]], { wash: '#f8c890', washA: 0.5 * hk, line: false }); pop();
    for (const [x, h] of [[-120, 360], [140, 300], [960, 380], [1240, 320]]) { push(x, 900, 1); pencil(spline([[0, 0], [10, -h * 0.6], [-6, -h]], false, 6), { w: 10, col: '#2a1a14' }); blob([[-150, -h], [-100, -h - 70], [0, -h - 90], [110, -h - 70], [160, -h], [80, -h + 20], [-80, -h + 20]], { wash: '#2a3a24', washA: 1, w: 1.6, col: '#0a1a0a' }); pop(); }
    for (let i = 0; i < 6; i++) { const x = -360 + i * 300 + (i > 2 ? 200 : 0); rect(x, 820, 200, 140, { wash: '#a86a4a', washA: 1, w: 1, col: '#3a1a14' }); }
  }
  function camp(t) {                                                    // джип, ящики пайков, канистры, очередь солдат, мальчишки
    push(1130, 1300, 1); const jp = rect(-200, -130, 400, 110, { wash: '#5a6a3a', washA: 1, w: 2.4, col: '#1a2008', key: 21410 }); shadeG(jp.path, 0, -130, 0, -20, '#2a3010', 0.4); poly([[-140, -130], [-100, -220], [-80, -220], [-110, -130]], { wash: '#a8c0d0', washA: 0.5, w: 2, col: '#1a2008' });
    for (const x of [-130, 130]) { ell(x, -20, 50, 50, { wash: '#1a1a1a', washA: 1, w: 2 }); ell(x, -20, 20, 20, { wash: '#5a6a3a', washA: 1, w: 1 }); } poly([[0, -110], [10, -84], [38, -84], [16, -68], [24, -42], [0, -58], [-24, -42], [-16, -68], [-38, -84], [-10, -84]], { wash: '#f4f4ec', washA: 1, line: false }); rect(140, -150, 60, 40, { wash: '#4a5a2a', washA: 1, w: 1.6 }); pop();
    for (let rr = 0; rr < 3; rr++) for (let c = 0; c < 3 - rr; c++) rationCrate(-160 + c * 230 + rr * 115, 1340 - rr * 92, 1, ['RATIONS', 'C-RATION', 'BACON'][(rr + c) % 3], 21420 + rr * 3 + c);
    for (let i = 0; i < 3; i++) { push(330 + i * 60, 1340, 0.8); const jc = rect(-30, -110, 60, 110, { wash: '#4a5a2a', washA: 1, w: 2, col: '#1a2008' }); shadeG(jc.path, 30, 0, -30, 0, '#1a2008', 0.4); pencil([[-20, -110], [-10, -130], [10, -130], [20, -110]], { w: 5, col: '#1a2008' }); pencil([[-30, -50], [30, -50]], { w: 3, col: '#3a4a1a', pass2: false }); pop(); }
    const bang = t > EV.rt_sold && t < EV.rt_egg + 0.5;
    for (let i = 0; i < 4; i++) { const x = 760 + i * 110, bob = bang ? Math.abs(Math.sin(t * 12 + i)) * 10 : 0; human(x, 1360 - bob, 0.95, t, { body: '#8a8456', legs: '#6a6440', hair: ['#c89a5a', '#3a2a1a', '#1a1a1a', '#8a5a2a'][i], face: bang ? 'grin' : 'calm', armL: 'hold', armR: bang ? 'up' : 'hold', look: -0.6, seed: 21430 + i, flip: -1, hat: i % 2 ? 'helmet' : 'cap', hatCol: '#6a6440' });
      push(x - 30, 1360 - 0.95 * 200 - bob, 1); rect(-20, -10, 40, 20, { wash: '#a8acb4', washA: 1, w: 1.4, col: '#3a3e44' }); pop(); }
    for (let i = 0; i < 2; i++) { const pk = Math.sin(t * 1.5 + i * 2) > 0 ? 1 : 0.4; push(-40 + i * 190, 1080 - i * 90, 1); human(0, 60 * (1 - pk) + 20, 0.6, t, { body: ['#a8743a', '#4a6a8a'][i], legs: '#3a3a3a', hair: '#3a2a1a', face: 'grin', armL: 'up', armR: 'down', seed: 21440 + i }); pop(); }
  }
  function kitchen(t) {                                                 // полевая плита с котлами, итальянский повар мешает пасту, тент, фонарь
    push(620, 470, 1); const tn = poly([[-700, 140], [-500, -40], [500, -40], [700, 140], [500, 100], [0, 120], [-500, 100]], { wash: '#7a7448', washA: 1, w: 3, col: '#2a2a10', key: 21450 }); shadeG(tn.path, 0, -40, 0, 140, '#3a3a1a', 0.45); hatch(tn.path, tn.bb, { gap: 10, a: 0.15, col: '#2a2a10', ang: 0.2, key: 21451 });
    for (const x of [-600, 600]) pencil([[x, 120], [x, 1000]], { w: 12, col: '#4a3a1a' }); pencil(spline([[-500, 100], [-300, 140], [0, 128], [300, 140], [500, 100]], false, 6), { w: 3, col: '#2a2a10', pass2: false });
    const lit = t > EV.rt_year ? 1 : 0.6; pencil([[300, 120], [300, 200]], { w: 3, col: '#1a1a1a', pass2: false }); const ln = blob([[270, 200], [270, 280], [330, 280], [330, 200]], { wash: '#ffe8a0', washA: lit, w: 2, col: '#3a2a10' }); rect(264, 190, 72, 14, { wash: '#4a3a1a', washA: 1, w: 1.4 }); glow(300, 240, 140, 'rgba(255,200,110,1)', 0.35 * lit); pop();
    push(260, 1360, 1); const st = rect(-220, -200, 440, 200, { wash: '#4a4e48', washA: 1, w: 2.4, col: '#1a1a14', key: 21452 }); metalG(st.path, -80, -120, 300, '#8a8e88', '#4a4e48', '#1a1a14'); for (let i = 0; i < 3; i++) { ell(-150 + i * 150, -40, 40, 30, { wash: '#2a1a0a', washA: 1, w: 1.4 }); glow(-150 + i * 150, -40, 50, 'rgba(255,120,40,1)', 0.25); }
    for (const [x, w] of [[-110, 110], [120, 90]]) { const pt = rect(x - w / 2, -340, w, 140, { wash: '#8a8e96', washA: 1, w: 2, col: '#2a2e36', key: 21453 + x }); metalG(pt.path, x - 20, -280, 90, '#e8ecf0', '#8a8e96', '#2a2e36'); ell(x, -340, w / 2, 12, { wash: '#5a5e66', washA: 1, w: 1.4 }); for (let i = 0; i < 3; i++) { const q = (t * 0.6 + i / 3 + x) % 1; ell(x - 20 + i * 20, -360 - q * 160, 30 + q * 30, 16, { wash: '#ffffff', washA: 0.3 * (1 - q), line: false }); } }
    for (let i = 0; i < 6; i++) pastaStrand([[-150 + i * 14, -340], [-140 + i * 12, -380 - Math.sin(t * 4 + i) * 10], [-120 + i * 10, -350]], 5, 1, 21460 + i * 3); pop();
    human(140, 1370, 1.05, t, { body: '#f4f2ec', legs: '#3a3a3a', hair: '#1a1a1a', face: t > EV.rt_egg ? 'shock' : 'grin', armL: 'hold', armR: 'up', look: 0.5, seed: 21470, beard: 'short' });
    push(200, 1010, 1, Math.sin(t * 5) * 0.3); rect(-5, -140, 10, 160, { wash: '#a87a4a', washA: 1, w: 1.4 }); pop();
  }
  function counter(t) {                                                 // раздаточный стол из досок перед Томом: противень с беконом, банка DRIED EGG, котелки, буханка, кофе
    const c = rect(-500, 1440, 2100, 700, { wash: '#8a6a3a', washA: 1, w: 3, col: '#2a1a08', key: 21480 }); shadeG(c.path, 0, 1440, 0, 1800, '#2a1a08', 0.5); for (let i = 0; i < 14; i++) pencil([[-500 + i * 160, 1440], [-500 + i * 160, 2000]], { w: 3, col: '#4a3010', a: 0.6, pass2: false });
    txt('U.S. ARMY · MESS', 300, 1560, 40, { font: 'Osw', col: '#2a2a14', a: 0.6 });
    push(900, 1440, 1); const gr = rect(-200, -30, 400, 30, { wash: '#3a3a3e', washA: 1, w: 2.4, col: '#0a0a0a', key: 21481 }); metalG(gr.path, -60, -20, 200, '#8a8a9a', '#3a3a3e', '#0a0a0a');
    if (t > EV.rt_bacon) { const k = popK(t, EV.rt_bacon, 0.3); for (let i = 0; i < 4; i++) baconStrip(-130 + i * 86, -46 - (1 - k) * 120 * (1 + i * 0.2), 0.5, 1.4 + i * 0.1, 21482 + i); for (let i = 0; i < 6; i++) { const q = (t * 1.2 + i / 6) % 1; ell(-150 + i * 60, -50 - q * 100, 8 + q * 10, 6, { wash: '#ffffff', washA: 0.4 * (1 - q), line: false }); } motes(10, [-200, -120, 200, -40], '#ffe080', t, 21486, { sp: -60, sz: 2, a: 0.9 }); }
    pop();
    if (t > EV.rt_egg) { const k = clamp((t - EV.rt_egg) / 1.2); for (let i = 0; i < 8; i++) ell(760 + Math.sin(i * 2) * 80 * k, 1200 - k * 160 - i * 10, 50 + k * 90, 30 + k * 50, { wash: '#f8d860', washA: 0.4 * (1 - k), line: false }); }
    eggPowderCan(1180, 1450, 0.75, 21490); push(450, 1450, 1); for (let i = 0; i < 3; i++) { rect(-40 + i * 10, -30 - i * 14, 90, 30, { wash: '#a8acb4', washA: 1, w: 1.6, col: '#3a3e44' }); } pop();
    push(250, 1450, 1); const br = blob([[-90, 0], [-80, -50], [0, -64], [80, -50], [90, 0]], { wash: '#c88a4a', washA: 1, w: 2, col: '#5a3010' }); shadeG(br.path, 90, 0, -90, -60, '#5a3010', 0.35); pop();
    push(1340, 1450, 1); rect(-30, -60, 60, 60, { wash: '#6a7a4a', washA: 1, w: 1.6 }); ell(0, -60, 30, 8, { wash: '#2a1a0a', washA: 1, w: 1 }); steamWisps(0, -70, 0.3, t, 2, 21491, 0.4); pop();
    castShadow(900, 1450, 380, 160, 0.4, 0.28);
  }
  function front(t) {                                                   // передний план: край мешков с песком, каска на ящике, пар
    for (let i = 0; i < 4; i++) { push(-230 + (i % 2) * 70, 1900 - ((i / 2) | 0) * 80, 1.4); const sb = blob([[-80, 0], [-90, -50], [-60, -70], [60, -70], [90, -50], [80, 0]], { wash: '#a8946a', washA: 1, w: 2, col: '#3a2a10', key: 21500 + i }); hatch(sb.path, sb.bb, { gap: 6, a: 0.2, col: '#3a2a10', ang: 0.7, key: 21504 + i }); pop(); }
    push(1300, 1700, 1.5); const hm = blob([[-80, 0], [-76, -50], [-40, -86], [40, -86], [76, -50], [80, 0]], { wash: '#5a6a3a', washA: 1, w: 2.4, col: '#1a2008', key: 21510 }); metalG(hm.path, -20, -60, 90, '#8a9a6a', '#5a6a3a', '#1a2008'); rect(-90, -6, 180, 14, { wash: '#4a5a2a', washA: 1, w: 1.6 }); pop();
  }
  WORLD.ration = (t, u, cat) => {
    lay(20, () => { dawn(t); haze('#f8b878', 0.07); });
    lay(5, () => { camp(t); shaft(560, 640, 300, 1200, 0.1, 'rgba(255,220,160,0.6)', 0.1); });
    lay(3.4, () => { kitchen(t); lightPool(260, 1360, 420, 110, 'rgba(255,190,110,1)', 0.25); });
    lay(1, () => { cat(); counter(t); lightPool(860, 1450, 520, 90, 'rgba(255,210,150,1)', 0.25); });
    lay(0.6, () => { front(t); moodDark(700, 1150, 520, 1500, '#140a10', 0.45); motes(18, [-100, 400, 1300, 1500], '#ffd8a0', t, 21520, { sp: 6, sz: 3, a: 0.4 }); });
    if (t > EV.rt_year && t < S1.ration) bubbleTag('РИМ · ИЮНЬ 1944', 760, 760, t, EV.rt_year + 0.05, '#5a6a2a', 54, -0.04);
  };
  DIR.ration = {
    outfit: 'armyA', light: { side: -1, rim: '#ffc890' }, grade: ['#ff9a6a', 0.07],
    act: () => [[S0.ration, 'suspicious'], [EV.rt_year, 'talk'], [EV.rt_sold, 'grin'], [EV.rt_bacon, 'smug'], [EV.rt_egg, 'shock'], [EV.rt_egg + 0.6, 'laugh']],
    pose: (t, u, b) => { const eg = t > EV.rt_egg - 0.3; return Object.assign(b, { x: 560, y: 1590, s: 1.15, flip: 1, look: t > EV.rt_bacon ? [0.7, 0.5] : [0.5, 0], hand: eg ? [220, -330] : t > EV.rt_bacon ? [250, -240] : [160, -270], handF: [-70, -230], prop: eg ? 'eggCanP' : t > EV.rt_bacon - 0.2 ? 'baconP' : 'ladleP', propAng: eg ? -0.3 : -0.2, squash: b.squash + (t > EV.rt_egg && t < EV.rt_egg + 0.12 ? 0.08 : 0) }); },
    afterCat: (t, u, P) => { if (t > EV.rt_egg) { const k = clamp((t - EV.rt_egg) / 1.0), x = P.x + 220 * P.s, y = P.y - 400 * P.s; for (let i = 0; i < 6; i++) ell(x + Math.sin(i * 1.7) * 60 * k, y - k * 120 - i * 14, 30 + k * 50, 20 + k * 30, { wash: '#f8d860', washA: 0.55 * (1 - k), line: false }); } },
    cam: () => [[S0.ration, 600, 1000, 0.22], [EV.rt_hint, 600, 960, 0.22], [EV.rt_year, 620, 1100, 0.28, 'x'], [EV.rt_bacon, 660, 1200, 0.3, 'x'], [EV.rt_egg, 640, 1160, 0.3], [S1.ration, 640, 1160, 0.32]]
  };
  TRANS_IN.ration = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {        // крышка ящика пайков отъезжает вбок, как шторка — под ней новая сцена
    drawBuf(B, 1, 540, 960); const x = lerp(0, W * 1.05, sm(k));
    scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(x, 0, W, H); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.fillStyle = '#a8844a'; ctx.fillRect(x, 0, W, H); ctx.fillStyle = '#7a5a2a'; for (let i = 0; i < 6; i++) ctx.fillRect(x, i * 330, W, 14); ctx.fillStyle = '#2a2a14'; ctx.font = 'bold 150px Oswald'; ctx.textAlign = 'center'; ctx.fillText('RATIONS', x + 540, 1000); ctx.restore();
      ctx.fillStyle = '#5a3a14'; ctx.fillRect(x - 20, 0, 24, H); });
    rewTag(k, 0.8);
  } };
})();
