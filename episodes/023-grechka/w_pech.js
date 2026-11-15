/* 023 — `pech`: «А у нас её томят в печи: «Гречневая каша — матушка наша!» / И коричневой её делает огонь: без обжарки гречка — зелёная!»
   Изба зимним вечером: огромная белёная русская печь с огнём в устье и заслонкой, на лежанке спит рыжий кот, ухваты и кочерга у шестка, рушник,
   полка с крынками и туесками, связки сушёных трав и лука под потолком, бревенчатые стены с паклей, окно с морозными узорами и синим снегом,
   прялка, лавка, кадка, лапти на гвозде. Бабушка-хозяйка в платке у печи помешивает, внучка на лавке с ложкой. На столе перед Томом: чугунок
   (выезжает из печи на ухвате), сковорода на шестке, где зелёные зёрна темнеют до коричневых, деревянные ложки, хлеб, солонка, глиняная кружка.
   Том — в рубахе (+ фартук). По словам: «томят» — Том ухватом вынимает чугунок, клубы пара; «матушка» — бабушка поднимает ложку, табличка с пословицей;
   «огонь:» — пламя в устье вспыхивает (свет усиливается); «обжарки» — зёрна на сковороде темнеют; «зелёная!» — Том показывает горсть зелёных зёрен,
   бирка «БЕЗ ОГНЯ = ЗЕЛЁНАЯ». Главный свет — огонь печи слева, второй — холодное окно справа. Переход В сцену: тёмное устье печи раскрывается
   кругом (заслонка отъезжает). */
(() => {
  EV.pc_pull = wtw('s8', 'томят');
  EV.pc_say = wtw('s8', 'матушка');
  EV.pc_fire = wtw('s9', 'огонь:');
  EV.pc_roast = wtw('s9', 'обжарки');
  EV.pc_green = wtw('s9', 'зелёная!');
  SHAKES.push([EV.pc_fire + 0.05, 0.12, 5]);
  KEYW.push('«Гречневая', 'зелёная!');
  const flare = t => 1 + clamp((t - EV.pc_fire) / 0.3) * (1 - clamp((t - EV.pc_fire - 1.6) / 1.5)) * 0.8;
  const pull = t => sm(clamp((t - EV.pc_pull) / 0.8));
  function walls(t) {                                                    // бревенчатые стены, окно с морозом и снегом, полка, травы, прялка, лапти
    vgrad(-800, 1500, ['#3a2416', '#5a3a22', '#4a2e1a']);
    for (let i = 0; i < 16; i++) { const y = -760 + i * 110; const lg = rect(-800, y, 2700, 104, { wash: i % 2 ? '#7a5030' : '#6a4428', washA: 1, w: 2, col: '#2a1408', key: 24200 + i }); shadeG(lg.path, 0, y, 0, y + 104, '#2a1408', 0.4); pencil([[-800, y + 104], [1900, y + 104]], { w: 5, col: '#c8a868', a: 0.5, pass2: false }); for (let q = 0; q < 6; q++) ell(-600 + q * 470 + (i % 3) * 60, y + 50, 10, 6, { wash: '#4a2a14', washA: 0.6, line: false }); }
    push(1060, 300, 1); const wf = rect(-200, -260, 400, 440, { wash: '#2a4a7a', washA: 1, w: 16, col: '#e8dcc0', key: 24220 }); ctx.save(); ctx.clip(wf.path); vgrad(-260, 180, ['#1a2a5a', '#3a5a8a', '#8aa8d0']); for (let i = 0; i < 5; i++) blob([[-260 + i * 120, 100], [-200 + i * 120, 40], [-140 + i * 120, 100]], { wash: '#e8f0fc', washA: 1, line: false }); motes(12, [-200, -260, 200, 180], '#ffffff', t, 24221, { sp: 30, sz: 4, a: 0.8 }); for (let i = 0; i < 9; i++) { const a = i * 0.7; pencil(spline([[-200, 180 - i * 30], [-150 + Math.sin(a) * 30, 120 - i * 40], [-100, 140 - i * 50]], false, 5), { w: 2, col: '#e8f4ff', a: 0.6, pass2: false }); pencil(spline([[200, -260 + i * 30], [140, -200 + i * 40], [100, -230 + i * 50]], false, 5), { w: 2, col: '#e8f4ff', a: 0.6, pass2: false }); } ctx.restore();
    pencil([[0, -260], [0, 180]], { w: 12, col: '#e8dcc0' }); pencil([[-200, -40], [200, -40]], { w: 12, col: '#e8dcc0' }); for (const sd of [-1, 1]) { const sh = poly([[sd * 200, -270], [sd * 280, -270], [sd * 280, 190], [sd * 200, 190]], { wash: '#c8343a', washA: 1, w: 2, col: '#4a0a10' }); for (let i = 0; i < 6; i++) poly([[sd * 240, -230 + i * 70], [sd * 256, -210 + i * 70], [sd * 240, -190 + i * 70], [sd * 224, -210 + i * 70]], { wash: '#f4e8c8', washA: 1, line: false }); } rect(-230, 180, 460, 30, { wash: '#e8dcc0', washA: 1, w: 2, col: '#6a5a3a' }); pop();
    glow(1060, 300, 300, 'rgba(140,180,255,1)', 0.12);
    push(580, -120, 1); rect(-300, 0, 600, 20, { wash: '#8a5a32', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 7; i++) { const x = -260 + i * 86, c = ['#a8583a', '#c8a060', '#6a5a4a', '#c8784a'][i % 4]; const k = blob([[x - 26, 0], [x - 30, -50], [x - 18, -80], [x + 18, -80], [x + 30, -50], [x + 26, 0]], { wash: c, washA: 1, w: 1.6, col: '#2a1408' }); shadeG(k.path, x + 30, 0, x - 30, 0, '#2a1408', 0.4); if (i % 2) rect(x - 22, -96, 44, 18, { wash: '#f4ecd0', washA: 1, w: 1 }); } pop();
    for (let i = 0; i < 6; i++) { const x = -200 + i * 200, sw = Math.sin(t * 0.8 + i) * 4; pencil([[x, -620], [x + sw, -440]], { w: 2, col: '#8a6a3a', pass2: false }); for (let q = 0; q < 7; q++) pencil([[x + sw, -440], [x + sw + (q - 3) * 14, -340 - Math.abs(q - 3) * 10]], { w: 4, col: i % 2 ? '#8a9a4a' : '#a88a4a', pass2: false }); if (i % 3 === 2) for (let q = 0; q < 4; q++) ell(x + sw, -420 + q * 34, 18, 20, { wash: '#d8a050', washA: 1, w: 1.2, col: '#6a3a10' }); }
    push(1380, 1300, 1); pencil([[0, 0], [0, -420]], { w: 10, col: '#8a5a2a', pass2: false }); const pl = blob([[-60, -420], [60, -420], [70, -620], [-70, -620]], { wash: '#c8843a', washA: 1, w: 2, col: '#3a1a08' }); for (let i = 0; i < 5; i++) poly([[-40 + i * 20, -560], [-30 + i * 20, -580], [-20 + i * 20, -560], [-30 + i * 20, -540]], { wash: ['#c8343a', '#2a6a3a', '#e8c040'][i % 3], washA: 1, line: false }); ell(0, -650, 50, 40, { wash: '#e8e0c8', washA: 0.9, w: 1.4 }); rect(-120, -20, 240, 20, { wash: '#8a5a2a', washA: 1, w: 2 }); pop();
    push(1250, 700, 1); pencil([[0, -20], [0, 0]], { w: 4, col: '#2a2a2a', pass2: false }); for (const sd of [-1, 1]) { const l = blob([[sd * 6, 0], [sd * 40, 10], [sd * 50, 120], [sd * 10, 130]], { wash: '#c8a868', washA: 1, w: 1.6, col: '#5a3a10' }); for (let q = 0; q < 6; q++) pencil([[sd * 10, 20 + q * 18], [sd * 46, 26 + q * 18]], { w: 1.2, col: '#8a6a30', pass2: false }); } pop();
  }
  function oven(t) {                                                     // русская печь: белёный массив, устье с огнём, заслонка, шесток, лежанка с котом, ухваты
    const f = flare(t), pk = pull(t);
    const ov = rect(-500, -100, 960, 1400, { wash: '#f0ece0', washA: 1, w: 3, col: '#6a6050', key: 24230 }); shadeG(ov.path, 460, 0, -500, 0, '#a89a80', 0.45); hatch(ov.path, ov.bb, { gap: 11, a: 0.08, col: '#8a8070', ang: 0.3, key: 24231, w: 1 });
    for (let i = 0; i < 12; i++) ell(-460 + (i * 137) % 900, -40 + (i * 211) % 1300, 30, 14, { wash: '#d8d0c0', washA: 0.5, line: false });
    rect(-520, -140, 1000, 50, { wash: '#e8e2d4', washA: 1, w: 2.4, col: '#6a6050' }); rect(-500, 700, 960, 40, { wash: '#e0d8c8', washA: 1, w: 2.4, col: '#6a6050' });
    const mouth = blob([[-90, 700], [-90, 520], [-40, 460], [100, 460], [150, 520], [150, 700]], { wash: '#1a0a04', washA: 1, w: 4, col: '#3a2a1a', key: 24232 });
    ctx.save(); ctx.clip(mouth.path); for (let i = 0; i < 6; i++) { const fl = flick(t, i) * f; blob([[-80 + i * 40, 700], [-70 + i * 40, 640 - 60 * fl], [-50 + i * 40, 560 - 80 * fl], [-30 + i * 40, 630 - 50 * fl], [-20 + i * 40, 700]], { wash: i % 2 ? '#ffb030' : '#ff6a20', washA: 0.95, line: false }); } for (let i = 0; i < 4; i++) pencil([[-60 + i * 50, 690], [-20 + i * 50, 670]], { w: 14, col: '#3a1a0a', pass2: false }); ctx.restore();
    glow(30, 620, 180 * f, 'rgba(255,150,60,1)', 0.35 * f); motes(10, [-80, 420, 140, 700], '#ffc060', t, 24233, { sp: 60, sz: 3, a: 0.8, add: 1 });
    push(330, 600, 1); const zs = rect(-70, -120, 140, 200, { wash: '#3a3640', washA: 1, w: 2.4, col: '#0a0a10' }); metalG(zs.path, -20, -40, 120, '#8a8690', '#3a3640', '#0a0a10', 0.7); ell(0, -30, 20, 12, { wash: '#2a2630', washA: 1, w: 1.6 }); pop();
    for (let i = 0; i < 3; i++) { push(-380 + i * 50, 1300, 1, -0.12 + i * 0.04); pencil([[0, 0], [20, -620]], { w: 9, col: '#8a5a2a', pass2: false }); if (i < 2) pencil(spline([[20, -620], [-30, -680], [0, -720]], false, 4), { w: 8, col: '#3a3640', pass2: false }); pop(); }
    const ct = blob([[-300, -150], [-280, -200], [-200, -230], [-100, -220], [-60, -170], [-40, -150]], { wash: '#d8843a', washA: 1, w: 2, col: '#5a2a08', key: 24234 }); shadeG(ct.path, -160, -230, -160, -150, '#8a4a10', 0.4); for (let i = 0; i < 5; i++) pencil([[-260 + i * 40, -190], [-250 + i * 40, -160]], { w: 3, col: '#8a4a10', pass2: false }); ell(-70, -190, 30, 26, { wash: '#d8843a', washA: 1, w: 2, col: '#5a2a08' }); for (const sd of [-1, 1]) poly([[-70 + sd * 20, -210], [-70 + sd * 30, -244], [-70 + sd * 6, -214]], { wash: '#d8843a', washA: 1, w: 1.6, col: '#5a2a08' }); pencil(spline([[-80, -186], [-70, -182], [-60, -186]], false, 3), { w: 2, col: '#3a1a04', pass2: false }); const zz = (t * 0.6) % 1; txt('z', -30 + zz * 30, -240 - zz * 60, 26 + zz * 10, { font: 'Hand', col: '#f4e8d0' });
    const rs = blob([[200, -100], [420, -100], [420, 300], [380, 320], [200, 300]], { wash: '#f8f4e8', washA: 1, w: 2, col: '#8a8070' }); for (let i = 0; i < 4; i++) { pencil([[200, 240 + i * 14], [420, 240 + i * 14]], { w: 5, col: '#c8343a', pass2: false }); } for (let i = 0; i < 6; i++) poly([[220 + i * 36, 200], [236 + i * 36, 180], [252 + i * 36, 200], [236 + i * 36, 220]], { wash: '#c8343a', washA: 1, line: false });
  }
  function folk(t) {                                                     // бабушка у печи с ложкой, внучка на лавке, лавка, кадка
    const say = t > EV.pc_say - 0.1 && t < EV.pc_fire;
    human(860, 1300, 1.04, t, { body: '#8a2a3a', legs: '#3a2a2a', long: 1, hat: 'scarf', hatCol: '#e8c040', hair: '#d8d8d8', armL: 'hold', armR: say ? 'up' : 'hold', face: say ? 'grin' : 'smile', seed: 24240, flip: -1, look: -0.6, trim: '#e8c040', skin: '#f0c8a8' });
    if (say) { push(860 - 70, 1300 - 330 * 1.04 - 40, 1, -0.4); pencil([[0, 40], [0, -60]], { w: 7, col: '#c8343a', pass2: false }); ell(0, -76, 18, 24, { wash: '#e8b860', washA: 1, w: 1.6, col: '#5a2a08' }); pop(); }
    rect(1000, 1180, 400, 30, { wash: '#8a5a32', washA: 1, w: 2, col: '#2a1408' }); for (const lx of [1020, 1380]) pencil([[lx, 1210], [lx, 1300]], { w: 10, col: '#6a4428', pass2: false });
    human(1150, 1190, 0.68, t, { body: '#e8dcc0', legs: '#3a4a6a', hair: '#e8c060', face: t > EV.pc_green ? 'shock' : 'grin', armL: 'hold', armR: t > EV.pc_pull + 0.5 ? 'up' : 'hold', seed: 24241, look: -0.5 });
    push(-60, 1300, 1); const kd = blob([[-70, 0], [-80, -150], [80, -150], [70, 0]], { wash: '#8a5a2a', washA: 1, w: 2, col: '#2a1408' }); for (const yy of [-30, -120]) pencil([[-80, yy], [80, yy]], { w: 6, col: '#4a4a4a', pass2: false }); ell(0, -150, 80, 16, { wash: '#2a3a5a', washA: 1, w: 1.6 }); pop();
    if (t > EV.pc_say) { const k = popK(t, EV.pc_say, 0.4); push(820, 820, k, 0.03); const b = rect(-230, -60, 460, 120, { wash: '#f8f0dc', washA: 1, w: 3, col: '#8a2a2a', key: 24245 }); for (let i = 0; i < 12; i++) poly([[-220 + i * 40, -50], [-210 + i * 40, -60], [-200 + i * 40, -50], [-210 + i * 40, -40]], { wash: '#c8343a', washA: 1, line: false }); txt('«Гречневая каша —', 0, 4, 34, { font: 'Hand', col: '#3a1a0a' }); txt('матушка наша!»', 0, 44, 34, { font: 'Hand', col: '#a8241e' }); pop(); }
  }
  function table(t) {                                                    // стол: доски, сковорода с зёрнами (зелёные → коричневые), ложки, хлеб, солонка, кружка; чугунок на ухвате
    const tb = rect(-400, 1440, 2000, 600, { wash: '#7a4a28', washA: 1, w: 3, col: '#2a1408', key: 24250 }); shadeG(tb.path, 0, 1440, 0, 1850, '#2a1008', 0.5); for (let i = 0; i < 7; i++) pencil([[-400, 1470 + i * 50], [1600, 1474 + i * 50]], { w: 3, col: '#3a1a08', a: 0.45, pass2: false }); rect(-400, 1430, 2000, 16, { wash: '#9a6a3a', washA: 1, w: 2, col: '#3a1a08' });
    lightPool(300, 1500, 560, 120, 'rgba(255,170,80,1)', 0.35 * flare(t)); lightPool(1000, 1500, 300, 80, 'rgba(160,190,255,1)', 0.15);
    const rk = clamp((t - EV.pc_roast + 0.2) / 1.2);
    push(800, 1530, 1); const pn = ell(0, 0, 130, 34, { wash: '#2a2830', washA: 1, w: 2.4, col: '#0a0a10', key: 24251 }); metalG(pn.path, -40, -10, 120, '#6a6670', '#2a2830', '#0a0a10', 0.7); pencil([[120, -6], [260, -30]], { w: 14, col: '#2a2830', pass2: false }); ell(0, -4, 112, 26, { wash: '#3a3640', washA: 1, line: false });
    const r = rng(24252); for (let i = 0; i < 26; i++) { const x = (r() - 0.5) * 200, y = (r() - 0.5) * 36 - 4; const g = r(); push(x, y, 0.36, r() * 6); const c = lerpC(GR.green, GR.kern, clamp(rk * 1.4 - g * 0.4)); poly([[0, -30], [-22, 14], [22, 14]], { wash: c, washA: 1, w: 1, col: '#3a2a10' }); pop(); } pop();
    if (rk > 0 && rk < 1) steamWisps(800, 1490, 0.5, t, 3, 24253, 0.4);
    for (let i = 0; i < 3; i++) { push(140 + i * 40, 1600, 1, -0.4 + i * 0.1); pencil([[0, 0], [110, -20]], { w: 8, col: '#c8343a', pass2: false }); ell(130, -22, 26, 16, { wash: '#e8b860', washA: 1, w: 1.4, col: '#5a2a08', rot: -0.2 }); pop(); }
    push(1100, 1600, 0.8); const br = blob([[-90, 0], [-80, -50], [-20, -74], [60, -66], [96, -30], [96, 0]], { wash: '#5a3018', washA: 1, w: 2, col: '#1a0a04' }); shadeG(br.path, 0, -74, 0, 0, '#1a0a04', 0.4); ell(-90, -20, 16, 22, { wash: '#a8784a', washA: 1, w: 1.2 }); pop();
    push(1040, 1500, 0.8); const sl = blob([[-30, 0], [-34, -40], [-14, -60], [14, -60], [34, -40], [30, 0]], { wash: '#e8b860', washA: 1, w: 1.6, col: '#5a2a08' }); for (let i = 0; i < 3; i++) pencil([[-28, -16 - i * 12], [28, -16 - i * 12]], { w: 2, col: '#c8343a', pass2: false }); pop();
    castShadow(800, 1530, 240, 100, 0.8, 0.22); castShadow(1100, 1600, 120, 80, 0.8, 0.2);
  }
  function front(t) {                                                    // передний план: край кадки с водой и ковшом слева, пар, рушник свисает справа сверху
    push(400, 1880, 1); const kd = blob([[-120, 0], [-130, -260], [130, -260], [120, 0]], { wash: '#6a4428', washA: 1, w: 2.4, col: '#1a0a04' }); shadeG(kd.path, 130, 0, -130, 0, '#1a0a04', 0.45); for (const yy of [-50, -200]) pencil([[-130, yy], [130, yy]], { w: 8, col: '#3a3a3a', pass2: false }); ell(0, -260, 130, 22, { wash: '#2a3a5a', washA: 1, w: 2 }); pencil(spline([[-40, -270], [-10, -330], [40, -360]], false, 4), { w: 8, col: '#c8a060', pass2: false }); pop();
    push(1180, 300, 1); pencil([[0, 0], [0, 200]], { w: 3, col: '#8a6a3a', pass2: false }); for (let i = 0; i < 6; i++) ell((i % 2 ? 14 : -14), 230 + i * 40, 24, 26, { wash: '#c8843a', washA: 1, w: 1.4, col: '#5a2a08' }); pop();
  }
  WORLD.pech = (t, u, cat) => {
    lay(12, () => { walls(t); });
    lay(2.4, () => { push(400, 140, 1); oven(t); pop(); folk(t); castShadow(860, 1300, 120, 160, 0.6, 0.25); });
    lay(1, () => { cat(); table(t); });
    lay(0.72, () => { front(t); motes(12, [300, 700, 900, 1500], '#ffd8a0', t, 24260, { sp: 8, sz: 3, a: 0.35, wob: 6 }); moodDark(420, 1100, 480, 1400, '#1a0a14', 0.42); });
    if (t > EV.pc_fire && t < EV.pc_fire + 0.4) screenFill('#ff9040', 0.12 * (1 - (t - EV.pc_fire) / 0.4), 'lighter');
  };
  DIR.pech = {
    outfit: 'rubA', light: { side: -1, rim: '#ffa860' }, grade: ['#ff9a5a', 0.08],
    act: () => [[S0.pech, 'talk'], [EV.pc_pull, 'proud'], [EV.pc_say, 'grin'], [EV.pc_fire, 'awe'], [EV.pc_roast, 'talk'], [EV.pc_green, 'shock']],
    pose: (t, u, b) => { const pk = t > EV.pc_pull - 0.2 && t < EV.pc_fire, gr = t > EV.pc_green - 0.3;
      return Object.assign(b, { x: 640, y: 1590, s: 1.16, flip: false, look: pk ? [-0.6, 0.2] : t < EV.pc_roast ? [-0.4, -0.2] : t < EV.pc_green ? [0.6, 0.5] : [0, 0],
        hand: gr ? [150, -340] : [160, -220], handF: pk ? [-250, -230] : [-140, -200], tailUp: gr }); },
    afterCat: (t, u, P) => {
      const pk = pull(t); if (t > EV.pc_pull - 0.2) { const hx = P.x - 250 * P.s, hy = P.y - 230 * P.s, cx = lerp(250, 380, pk), cy = lerp(1300, 1470, pk);
        pencil([[hx, hy], [cx + 40, cy - 60]], { w: 12, col: '#8a5a2a', pass2: false }); pencil(spline([[cx - 60, cy - 70], [cx, cy - 50], [cx + 60, cy - 70]], false, 4), { w: 10, col: '#3a3640', pass2: false });
        chugunok(cx, cy, 0.62, t, { key: 24270, kasha: 1, steam: t > EV.pc_pull ? 0.6 : 0 }); }
      if (t > EV.pc_green - 0.3) { const hx = P.x + 150 * P.s, hy = P.y - 340 * P.s; for (let i = 0; i < 9; i++) grainB(hx - 30 + (i % 3) * 22, hy - 20 - Math.floor(i / 3) * 16, 0.42, i, { key: 24275 + i, green: 1 }); if (t > EV.pc_green) bubbleTag('БЕЗ ОГНЯ = ЗЕЛЁНАЯ', hx - 60, hy - 150, t, EV.pc_green + 0.1, '#5a8a3a', 32, -0.05); }
    },
    cam: () => [[S0.pech, 560, 1080, 0.24], [EV.pc_pull, 520, 1130, 0.28], [EV.pc_say, 640, 1060, 0.25], [EV.pc_fire, 560, 1110, 0.27], [EV.pc_roast, 680, 1160, 0.3], [EV.pc_green, 640, 1120, 0.32], [S1.pech, 640, 1120, 0.33]]
  };
  TRANS_IN.pech = { a: 0.12, b: 0.5, runA: 1, fx(k, t, A, B) {          // устье печи: тёмная арка растёт и раскрывает избу, по краю — огненный ободок
    const e = sm(k); drawBuf(A, 1 + e * 0.15, 540, 960); const R = e * e * 1700;
    scr(() => { const P = new Path2D(); P.moveTo(540 - R, 1300); P.lineTo(540 - R, 1300 - R * 0.6); P.quadraticCurveTo(540, 1300 - R * 1.6, 540 + R, 1300 - R * 0.6); P.lineTo(540 + R, 1300 + R); P.lineTo(540 - R, 1300 + R); P.closePath();
      ctx.save(); ctx.clip(P); ctx.drawImage(B, 0, 0); ctx.restore(); ctx.save(); ctx.lineWidth = 30 * (1 - e) + 6; ctx.strokeStyle = 'rgba(255,140,40,' + (1 - e) + ')'; ctx.stroke(P); ctx.restore(); });
  } };
})();
