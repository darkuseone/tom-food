/* 021 — `masl`: «Тот же «сыр» — и в Масленице: её звали Сырной неделей, последней перед постом. / А потом… семь недель — ни молока, ни масла.»
   Масленичная ярмарка XVI в. в снегу: низкое зимнее солнце справа, берёзы в инее, белокаменная церковь с синими куполами и колокольней, качели-«глаголь»
   с девушками, ледяная горка с санками, соломенное чучело Масленицы в платке, лавки с блинами, самовар, скоморох с медведем. Над лавкой — растяжка
   «СЫРНАЯ НЕДЕЛЯ» (герой: слово «СЫР» вспыхивает). Том в тулупе с фартуком у прилавка с блинами, сметаной и маслом, держит блин. По словам: «Тот же «сыр»» —
   «СЫР» на растяжке загорается красным; «Сырной неделей» — Том макает блин в сметану; «перед постом» — колокол качается; «А потом…» — свет гаснет до синих
   сумерек, лавки закрываются ставнями, люди уходят, снег гуще; «семь недель» — над площадью «7 НЕДЕЛЬ»; «ни молока, ни масла» — кувшин молока и масло
   на прилавке перечёркиваются, Том грустно опускает блин. Главный свет — низкое солнце справа (тёплый), после «А потом» — холодная луна слева.
   Переход В сцену: тройка с бубенцами проносится слева направо и утягивает старый кадр. */
(() => {
  EV.ms_syr = wtw('s3', '«сыр»');
  EV.ms_week = wtw('s3', 'Сырной');
  EV.ms_bell = wtw('s3', 'постом.');
  EV.ms_dark = LS('s4') + 0.1;
  EV.ms_seven = wtw('s4', 'семь');
  EV.ms_milk = wtw('s4', 'молока,');
  EV.ms_butter = wtw('s4', 'масла.');
  SHAKES.push([EV.ms_dark + 0.1, 0.25, 6]);
  KEYW.push('Сырной', 'недель');
  const dk = t => sm(clamp((t - EV.ms_dark) / 1.0));

  function sky(t) {                                                     // зимнее небо: закат → сумерки, солнце/луна, церковь, берёзы
    const d = dk(t); vgrad(-900, 800, [lerpC('#f0b080', '#1a2a5a', d), lerpC('#f8d8b0', '#3a4a7a', d), lerpC('#e8e8f0', '#6a7aa0', d)]);
    if (d < 1) { ell(1100, 200 - d * 300, 70, 70, { wash: '#ffd890', washA: 1 - d, line: false }); glow(1100, 200, 260, 'rgba(255,200,130,1)', 0.35 * (1 - d)); }
    if (d > 0) { ell(-100, -500, 44, 44, { wash: '#f4f4e8', washA: d, line: false }); glow(-100, -500, 160, 'rgba(200,220,255,1)', 0.3 * d); for (let i = 0; i < 30; i++) { const r = rng(21700 + i); ell(-800 + r() * 2400, -880 + r() * 600, 2, 2, { wash: '#ffffff', washA: d * (0.5 + 0.5 * Math.sin(t * 3 + i)), line: false }); } }
    push(420, 300, 1); const c = rect(-180, -300, 360, 300, { wash: '#f4f0e8', washA: 1, w: 2, col: '#6a6a7a', key: 21701 }); shadeG(c.path, -180, 0, 180, 0, '#8a8aa0', 0.4); for (let i = 0; i < 3; i++) { rect(-120 + i * 100, -230, 40, 80, { wash: d > 0.5 ? '#ffd070' : '#4a4a5a', washA: 0.9, w: 1 }); }
    for (const [dx, dy, r] of [[0, -420, 80], [-120, -340, 50], [120, -340, 50]]) { rect(dx - r * 0.55, dy, r * 1.1, 100, { wash: '#f4f0e8', washA: 1, w: 1.4, col: '#6a6a7a' }); const dm = blob([[dx - r * 0.7, dy + 10], [dx - r * 0.8, dy - r * 0.4], [dx, dy - r * 1.3], [dx + r * 0.8, dy - r * 0.4], [dx + r * 0.7, dy + 10]], { wash: '#2a5aa8', washA: 1, w: 2, col: '#0a1a4a', key: 21702 + dx }); for (let s = 0; s < 6; s++) ell(dx - r * 0.5 + (s % 3) * r * 0.5, dy - r * 0.6 + Math.floor(s / 3) * r * 0.4, 5, 5, { wash: '#f4d060', washA: 1, line: false }); pencil([[dx, dy - r * 1.3], [dx, dy - r * 1.9]], { w: 4, col: '#e8b840', pass2: false }); pencil([[dx - 14, dy - r * 1.7], [dx + 14, dy - r * 1.7]], { w: 4, col: '#e8b840', pass2: false }); }
    push(260, -300, 1); rect(-60, -220, 120, 520, { wash: '#f4f0e8', washA: 1, w: 2, col: '#6a6a7a' }); rect(-40, -180, 80, 100, { wash: '#2a2a3a', washA: 1, w: 1.4 }); const sw = t > EV.ms_bell ? Math.sin((t - EV.ms_bell) * 5) * 0.5 * Math.exp(-(t - EV.ms_bell) * 0.4) : 0; push(0, -170, 1, sw); const bl = blob([[-30, 60], [-26, 10], [0, -6], [26, 10], [30, 60]], { wash: '#c8902a', washA: 1, w: 2, col: '#5a3a08' }); shadeG(bl.path, 30, 0, -30, 0, '#5a3a08', 0.5); pop(); poly([[-70, -220], [0, -340], [70, -220]], { wash: '#2a5aa8', washA: 1, w: 1.6 }); pop(); pop();
    for (const [x, h] of [[-460, 900], [-300, 760], [1300, 820], [1480, 960]]) { pencil([[x, 600], [x + 10, 600 - h]], { w: 18, col: '#f0ece4', pass2: false }); for (let i = 0; i < 8; i++) pencil([[x + 4, 560 - i * h / 9], [x + 4 + 40, 548 - i * h / 9]], { w: 5, col: '#2a2a2a', pass2: false }); for (let i = 0; i < 6; i++) pencil(spline([[x + 6, 500 - i * 120], [x + (i % 2 ? 140 : -140), 420 - i * 120], [x + (i % 2 ? 200 : -200), 480 - i * 120]], false, 5), { w: 3, col: '#6a5a4a', a: 0.8, pass2: false }); motes(10, [x - 200, 600 - h, x + 200, 600], '#ffffff', t, 21705 + x, { sp: 0, sz: 4, a: 0.7 }); }
    const snow = rect(-900, 600, 3000, 600, { wash: lerpC('#f4f0ec', '#8a98c0', d), washA: 1, line: false }); shadeG(snow.path, 0, 600, 0, 900, lerpC('#d8c8c0', '#4a5a8a', d), 0.4);
  }
  function fair(t) {                                                    // качели, горка с санками, чучело, скоморох с медведем, самовар, толпа
    const d = dk(t), gone = clamp((t - EV.ms_dark) / 1.6);
    push(-200, 1080, 1); for (const sd of [-1, 1]) pencil([[sd * 160, 0], [sd * 120, -460]], { w: 14, col: '#7a5a3a', pass2: false }); pencil([[-140, -460], [140, -460]], { w: 14, col: '#7a5a3a', pass2: false }); const sw = Math.sin(t * 2) * 0.5 * (1 - gone);
    push(0, -460, 1, sw); pencil([[-40, 0], [-40, 300]], { w: 3, col: '#4a3a2a', pass2: false }); pencil([[40, 0], [40, 300]], { w: 3, col: '#4a3a2a', pass2: false }); rect(-60, 300, 120, 14, { wash: '#7a5a3a', washA: 1, w: 1.4 }); if (gone < 1) human(0, 300, 0.55, t, { body: '#c8241e', hair: '#c88a3a', hat: 'scarf', hatCol: '#f4d060', face: 'grin', armL: 'up', armR: 'up', seed: 21710, long: 1 }); pop(); pop();
    push(1180, 1100, 1); poly([[-240, 0], [-200, -260], [-140, -260], [200, 0]], { wash: '#e8f0f8', washA: 1, w: 2, col: '#7a8aa0' }); pencil([[-200, -260], [200, 0]], { w: 4, col: '#a8c0d8', pass2: false }); const sk = ((t * 0.4) % 1); if (gone < 1) { push(-200 + sk * 400, -260 + sk * 260, 1, 0.58); rect(-50, -20, 100, 20, { wash: '#8a3a1a', washA: 1, w: 1.4 }); human(0, -20, 0.45, t, { body: '#2a5aa8', hair: '#3a2a1a', face: 'grin', armL: 'up', armR: 'up', seed: 21711 }); pop(); } pop();
    push(80, 1180, 1); pencil([[0, 0], [0, -380]], { w: 10, col: '#8a6a3a', pass2: false }); pencil([[-120, -300], [120, -300]], { w: 8, col: '#8a6a3a', pass2: false }); for (let i = 0; i < 12; i++) pencil([[-110 + i * 20, -300], [-130 + i * 24, -150]], { w: 6, col: '#e8c860', pass2: false }); const hd = ell(0, -360, 44, 50, { wash: '#e8c860', washA: 1, w: 2, col: '#8a6a1a' }); blob([[-56, -360], [-50, -410], [0, -430], [50, -410], [56, -360], [40, -320], [-40, -320]], { wash: '#c8241e', washA: 1, w: 2, col: '#5a0a04' }); ell(-14, -360, 5, 5, { wash: '#2a2a2a', washA: 1, line: false }); ell(14, -360, 5, 5, { wash: '#2a2a2a', washA: 1, line: false }); pencil(spline([[-14, -340], [0, -332], [14, -340]], false, 4), { w: 2, col: '#c8241e', pass2: false });
    const sk2 = blob([[-110, -150], [-140, 0], [140, 0], [110, -150]], { wash: '#2a6aa8', washA: 1, w: 2, col: '#0a2a5a' }); for (let i = 0; i < 6; i++) ell(-90 + i * 36, -60, 10, 10, { wash: '#f4d060', washA: 1, line: false }); pop();
    for (const [x, b, f] of [[400, '#5a3a2a', 1], [520, '#8a2a3a', -1], [880, '#3a5a3a', -1]]) { const a = (1 - gone); if (a <= 0) continue; ctx.save(); ctx.globalAlpha = a; human(x + (x < 700 ? -1 : 1) * gone * 300, 1240, 0.95, t, { body: b, legs: '#3a3030', hair: '#3a2a1a', hat: 'fur', face: t > EV.ms_week ? 'grin' : 'smile', armL: 'hold', armR: 'wave', look: f * 0.4, seed: 21712 + x, flip: f, beard: x === 880 ? 'long' : null }); ctx.restore(); }
    push(980, 1240, 1); human(0, 0, 0.9, t, { body: '#c8a030', bodyD: '#8a1a1a', trim: '#c8241e', legs: '#2a5a3a', hair: '#c88a3a', face: 'grin', armL: 'up', armR: 'hold', seed: 21716, hat: 'cap', hatCol: '#c8241e' }); const bx = 90 + Math.sin(t * 3) * 10; const br = blob([[bx - 50, 0], [bx - 60, -120], [bx - 30, -200], [bx + 20, -210], [bx + 50, -150], [bx + 50, 0]], { wash: '#6a4a2a', washA: 1, w: 2, col: '#2a1a0a' }); hatch(br.path, br.bb, { gap: 5, a: 0.3, col: '#2a1a0a', ang: 1.3, key: 21717 }); ell(bx - 10, -200, 40, 34, { wash: '#6a4a2a', washA: 1, w: 2, col: '#2a1a0a' }); ell(bx - 30, -230, 10, 10, { wash: '#6a4a2a', washA: 1, w: 1.4 }); ell(bx + 10, -230, 10, 10, { wash: '#6a4a2a', washA: 1, w: 1.4 }); ell(bx - 18, -196, 10, 6, { wash: '#2a1a0a', washA: 1, line: false }); pop();
    for (let i = 0; i < 10; i++) { const x = -500 + i * 230; sil([[x - 30, 1100], [x - 26, 960], [x, 930], [x + 26, 960], [x + 30, 1100]], lerpC('#5a4a5a', '#1a2a4a', d), 0.6 * (1 - gone * 0.8)); }
  }
  function stall(t) {                                                   // лавка: навес, растяжка «СЫРНАЯ НЕДЕЛЯ», ставни закрываются
    const d = dk(t), sh = clamp((t - EV.ms_dark - 0.3) / 0.8);
    push(620, 1440, 1); for (const sd of [-1, 1]) pencil([[sd * 420, 0], [sd * 420, -760]], { w: 16, col: '#6a4a2a', pass2: false }); const a = poly([[-470, -760], [470, -760], [500, -660], [-500, -660]], { wash: '#c8241e', washA: 1, w: 2.4, col: '#4a0a04', key: 21720 }); for (let i = 0; i < 10; i++) poly([[-470 + i * 94, -660], [-423 + i * 94, -620], [-376 + i * 94, -660]], { wash: i % 2 ? '#f4e8c8' : '#c8241e', washA: 1, w: 1.2, col: '#4a0a04' });
    const bn = rect(-360, -900, 720, 110, { wash: '#f4e8c8', washA: 1, w: 3, col: '#5a3a14', key: 21721 }); shadeG(bn.path, 0, -790, 0, -900, '#c8b080', 0.3); pencil([[-360, -900], [-420, -760]], { w: 3, col: '#5a3a14', pass2: false }); pencil([[360, -900], [420, -760]], { w: 3, col: '#5a3a14', pass2: false });
    const hl = t > EV.ms_syr ? sm(clamp((t - EV.ms_syr) / 0.3)) : 0; txt('НЕДЕЛЯ', 110, -822, 60, { font: 'Osw', col: '#2a4a8a' }); if (hl) rect(-280, -886, 116 * hl, 80, { wash: '#c8241e', washA: 0.9, line: false }); txt('СЫР', -222, -822, 60, { font: 'Osw', col: hl > 0.5 ? '#fff4d0' : '#c8241e' }); txt('НАЯ', -112, -822, 60, { font: 'Osw', col: '#c8241e' });
    for (let i = 0; i < 8; i++) { const x = -380 + i * 108; pencil([[x, -660], [x, -620 + Math.sin(t * 2 + i) * 6]], { w: 1.4, col: '#5a3a14', pass2: false }); ell(x, -606 + Math.sin(t * 2 + i) * 6, 20, 14, { wash: SY.blin, washA: 1, w: 1.4, col: SY.blinD }); }
    if (sh > 0) for (const sd of [-1, 1]) { const w = 420 * sh; const s = rect(sd > 0 ? 420 - w : -420, -660, w, 360, { wash: '#6a4a2a', washA: 1, w: 2.4, col: '#2a1408' }); for (let i = 0; i < 6; i++) pencil([[sd > 0 ? 420 - w : -420, -640 + i * 60], [sd > 0 ? 420 : -420 + w, -640 + i * 60]], { w: 3, col: '#3a2010', a: 0.6, pass2: false }); } pop();
    rect(-900, 1100, 3000, 400, { wash: lerpC('#8a5a3a', '#2a2a3a', d), washA: 0.0, line: false });
  }
  function counter(t) {                                                 // прилавок: стопка блинов, сметана, масло, кувшин молока, самовар
    const d = dk(t); const c = rect(-300, 1440, 1700, 600, { wash: '#8a5a32', washA: 1, w: 3, col: '#2a1408', key: 21730 }); for (let i = 0; i < 7; i++) pencil([[-300, 1470 + i * 80], [1400, 1474 + i * 80]], { w: 3, col: '#4a2a10', a: 0.5, pass2: false }); shadeG(c.path, 0, 1440, 0, 1800, '#2a1408', 0.45);
    rect(-300, 1430, 1700, 20, { wash: '#f4f0ec', washA: 1, w: 1.4, col: '#a8b0c0' });
    blinStack(380, 1500, 1.0, t, { n: 9, key: 21731 }); smetanaPot(150, 1500, 0.85, { key: 21732 });
    push(940, 1500, 1); const j = blob([[-50, 0], [-56, -100], [-40, -150], [-50, -180], [40, -180], [30, -150], [56, -100], [50, 0]], { wash: '#f4f0e8', washA: 1, w: 2, col: '#6a6a7a', key: 21733 }); shadeG(j.path, 56, 0, -40, 0, '#a8a8b8', 0.45); for (let i = 0; i < 6; i++) ell(-30 + i * 12, -90, 4, 4, { wash: '#2a5aa8', washA: 0.8, line: false }); pencil(spline([[40, -160], [80, -130], [50, -60]], false, 5), { w: 6, col: '#f4f0e8', pass2: false }); ell(0, -180, 44, 8, { wash: '#ffffff', washA: 1, w: 1 }); pop();
    push(1140, 1500, 1); const bu = poly([[-70, 0], [-60, -60], [60, -66], [70, 0]], { wash: '#f8e070', washA: 1, w: 2, col: '#a8801a', key: 21734 }); shadeG(bu.path, 70, 0, -70, 0, '#c8a030', 0.4); ell(-20, -54, 26, 5, { wash: '#ffffff', washA: 0.6, line: false }); pop();
    for (const [x, t0] of [[940, EV.ms_milk], [1140, EV.ms_butter]]) if (t > t0) { const q = sm(clamp((t - t0) / 0.25)); pencil([[x - 90, 1300], [x - 90 + 180 * q, 1300 + 200 * q]], { w: 14, col: '#c8241e', pass2: false }); pencil([[x + 90, 1300], [x + 90 - 180 * q, 1300 + 200 * q]], { w: 14, col: '#c8241e', pass2: false }); }
    push(-160, 1500, 1); const sv = blob([[-60, 0], [-80, -120], [-70, -200], [70, -200], [80, -120], [60, 0]], { wash: '#c8902a', washA: 1, w: 2.4, col: '#5a3a08', key: 21735 }); shadeG(sv.path, 80, 0, -60, 0, '#5a3a08', 0.45); ell(-30, -140, 10, 40, { wash: '#fff0b0', washA: 0.5, line: false }); rect(-30, -260, 60, 60, { wash: '#a87a20', washA: 1, w: 1.6 }); pencil([[60, -80], [110, -60]], { w: 6, col: '#5a3a08', pass2: false }); pop(); steamWisps(-160, 1240, 0.7, t, 2, 21736, 0.35 * (1 - d));
    castShadow(380, 1520, 260, 140, -0.6 + d * 1.2, 0.24); lightPool(560, 1540, 650, 130, d > 0.5 ? 'rgba(170,200,255,1)' : 'rgba(255,210,150,1)', 0.25);
  }
  function seven(t) {                                                   // «7 НЕДЕЛЬ» над площадью
    if (t < EV.ms_seven) return; const k = popK(t, EV.ms_seven, 0.45); push(820, 860, k * 0.85, -0.03); const b = rect(-260, -90, 520, 170, { wash: '#1a2a4a', washA: 0.9, w: 3, col: '#c8d8f0' }); txt('7 НЕДЕЛЬ', 0, 40, 96, { font: 'Osw', col: '#e8f0ff' }); txt('без молока и масла', 0, 110, 34, { font: 'Hand', col: '#c8d8f0' }); pop();
  }
  function front(t) {                                                   // передний план: заснеженная ветка, сосульки, хлопья
    const d = dk(t); push(1300, -400, 1.5); pencil(spline([[0, 0], [-200, 140], [-460, 180], [-640, 300]], false, 8), { w: 12, col: '#4a3a2a', pass2: false }); pencil(spline([[0, -8], [-200, 126], [-460, 166], [-640, 286]], false, 8), { w: 8, col: '#ffffff', pass2: false }); for (let i = 0; i < 6; i++) poly([[-80 - i * 90, 150 + i * 20], [-70 - i * 90, 220 + i * 26], [-60 - i * 90, 150 + i * 20]], { wash: '#d8ecff', washA: 0.85, w: 1, col: '#8ab0d8' }); pop();
    motes(30 + Math.round(d * 30), [-300, -300, 1400, 2000], '#ffffff', t, 21740, { sp: 70 + d * 60, vx: -10, sz: 6, a: 0.8, wob: 14 }); motes(20, [-300, -300, 1400, 2000], '#ffffff', t, 21741, { sp: 30, sz: 3, a: 0.6, wob: 8 });
  }
  WORLD.masl = (t, u, cat) => {
    const d = dk(t);
    lay(22, () => { sky(t); }); lay(6, () => { fair(t); haze(lerpC('#ffe0c0', '#2a3a6a', d), 0.07); });
    lay(2.2, () => { stall(t); shaft(1100, -300, 380, 2400, 0.4, 'rgba(255,220,170,1)', 0.14 * (1 - d)); });
    lay(1, () => { cat(); counter(t); seven(t); });
    lay(0.6, () => { front(t); moodDark(600, 1100, 400, 1500, '#0a1a3a', 0.35 + 0.35 * d); if (d > 0) screenFill('#2a3a7a', 0.18 * d, 'multiply'); });
  };
  DIR.masl = {
    outfit: 'tulupA', light: { side: 1, rim: '#ffd0a0' }, grade: ['#ff9a60', 0.06],
    act: () => [[S0.masl, 'talk'], [EV.ms_syr, 'smug'], [EV.ms_week, 'grin'], [EV.ms_bell, 'talk'], [EV.ms_dark, 'scared'], [EV.ms_seven, 'cold'], [EV.ms_butter, 'annoyed']],
    pose: (t, u, b) => { const dip = t > EV.ms_week && t < EV.ms_week + 0.8, sad = t > EV.ms_dark;
      return Object.assign(b, { x: 640, y: 1590, s: 1.18, flip: 1, look: t < EV.ms_syr ? [0.2, 0] : t < EV.ms_week ? [0.2, -0.9] : sad ? [0.2, -0.5] : [0, 0.2], hand: dip ? [300, -200] : sad ? [140, -200] : [170, -320], handF: [-100, -230], prop: 'blinP', propAng: sad ? 0.8 : 0.1, chatter: t > EV.ms_seven, frost: t > EV.ms_seven, tilt: sad ? 0.04 : 0 }); },
    cam: () => [[S0.masl, 640, 1000, 0.2], [EV.ms_syr, 600, 980, 0.24], [EV.ms_week, 640, 1150, 0.28], [EV.ms_bell, 620, 1100, 0.26], [EV.ms_dark, 640, 1120, 0.28], [EV.ms_seven, 660, 1050, 0.26], [EV.ms_milk, 700, 1180, 0.3], [S1.masl, 660, 1150, 0.32]]
  };
  TRANS_IN.masl = { a: 0.2, b: 0.5, runA: 0.6, fx(k, t, A, B) {           // тройка с бубенцами проносится и утягивает кадр
    const e = sm(k), sx = lerp(-500, 1600, e); drawBuf(A, 1, 540, 960);
    scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(0, 0, Math.max(0, sx - 160), 1920); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore();
      push(sx, 1300, 1.3); for (let i = 0; i < 3; i++) { push(140 + i * 30, -60 - i * 10, 1); const h = blob([[-90, 0], [-80, -80], [40, -100], [100, -150], [130, -130], [100, -60], [90, 0]], { wash: ['#3a2a1a', '#6a4a2a', '#f4f0e8'][i], washA: 1, w: 2.4, col: '#1a0a04' }); for (const lx of [-70, 70]) pencil([[lx, 0], [lx + Math.sin(t * 30 + i) * 20, 70]], { w: 10, col: '#1a0a04', pass2: false }); ell(30, -110, 14, 14, { wash: '#e8b840', washA: 1, w: 1.4 }); pop(); }
      push(0, 0, 1); poly([[-200, 0], [-180, -90], [80, -90], [120, 0]], { wash: '#c8241e', washA: 1, w: 3, col: '#4a0a04' }); pencil(spline([[-220, 20], [-260, -40], [-230, -110]], false, 5), { w: 8, col: '#c8a040', pass2: false }); pencil([[-200, 30], [140, 30]], { w: 6, col: '#c8a040', pass2: false }); pop(); pop();
      motes(40, [Math.max(0, sx - 600), 1100, sx, 1700], '#ffffff', t, 21745, { sp: 200, vx: -300, sz: 7, a: 0.8, wob: 20 }); });
  } };
})();
