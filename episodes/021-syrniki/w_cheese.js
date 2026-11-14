/* 021 — `cheese`: «А твёрдый сыр? В народ его понесёт Николай Верещагин — в XIX веке. / Вот он, сыр! Разгадка? Нет: сырникам тогда уже лет триста.»
   Артельная сыроварня 1866 г. под Тверью: белёные стены и балки, большое окно с видом на луг, реку, коров и сельскую церковь (главный свет —
   белый дневной из окна слева, пучок сквозь пар), медный котёл-чан с молоком на огне, сыровары в белых фартуках мешают «арфой», деревянный пресс
   с гирями, стеллажи до потолка с кругами сыра (герой), вывеска «АРТЕЛЬНАЯ СЫРОВАРНЯ 1866», бидоны, маслобойка. Н. В. Верещагин в сюртуке с бородой
   показывает на полки. Том — сыровар в жилете и картузе. По словам: «твёрдый сыр?» — Том оглядывает полки; «Верещагин» — Верещагин входит,
   распахивает ставни, свет заливает стеллажи; «в народ» — в окне проезжает телега с кругами сыра; «Вот он, сыр!» — Том поднимает круг сыра над головой,
   полки сияют; «Разгадка?» — табличка «РАЗГАДКА?» выскакивает; «Нет:» — её перечёркивает красный крест, Том опускает круг; «лет триста» — лента
   «1550-е → 1866 = 300 ЛЕТ». Переход В сцену: круг сыра выкатывается из глубины и раскрывает сцену в своём круге. */
(() => {
  EV.ch_hard = wtw('s9', 'твёрдый');
  EV.ch_ver = wtw('s9', 'Верещагин');
  EV.ch_folk = wtw('s9', 'народ');
  EV.ch_here = wtw('s10', 'сыр!');
  EV.ch_riddle = wtw('s10', 'Разгадка?');
  EV.ch_no = wtw('s10', 'Нет:');
  EV.ch_300 = wtw('s10', 'триста.');
  SHAKES.push([EV.ch_here, 0.15, 6], [EV.ch_no, 0.18, 8]);
  KEYW.push('Верещагин', 'триста.');
  const op = t => t > EV.ch_hard ? sm(clamp((t - EV.ch_hard) / 0.6)) : 0;

  function room(t) {                                                    // белёные стены, балки, окно с лугом/рекой/коровами/церковью, вывеска
    vgrad(-900, 1500, ['#c8c0b0', '#e8e2d4', '#d8d0bc']); const r = rng(22000); for (let i = 0; i < 40; i++) ell(-600 + r() * 2400, -700 + r() * 2000, 30 + r() * 60, 10 + r() * 20, { wash: '#b8ae98', washA: 0.25, line: false });
    for (let i = 0; i < 6; i++) { const b = rect(-700, -700 + i * 4, 2600, 60, { wash: '#6a4a2a', washA: 1, w: 2, col: '#2a1408' }); if (i) break; } for (let x = -600; x < 1800; x += 300) { const p = rect(x, -700, 50, 2200, { wash: '#7a5432', washA: 1, w: 2, col: '#2a1408', key: 22001 + x }); shadeG(p.path, x + 50, 0, x, 0, '#3a2010', 0.4); }
    push(80, 120, 1); const w = rect(-260, -340, 520, 600, { wash: '#a8d0e8', washA: 1, w: 12, col: '#6a4a2a', key: 22002 }); ctx.save(); ctx.clip(w.path);
    vgrad(-340, 260, ['#8ac0e8', '#c8e4f0']); for (let i = 0; i < 3; i++) blob([[-240 + i * 180, -250], [-180 + i * 180, -290], [-100 + i * 180, -260], [-120 + i * 180, -230]], { wash: '#ffffff', washA: 0.85, line: false });
    sil([[-300, 20], [-100, -20], [100, 0], [300, -30], [300, 280], [-300, 280]], '#7aa85a', 1); rect(-300, 60, 600, 40, { wash: '#5a8ab8', washA: 1, line: false }); push(160, -10, 1); rect(-24, -60, 48, 60, { wash: '#f4f0e8', washA: 1, w: 1.2 }); ell(0, -70, 20, 20, { wash: '#2a7a4a', washA: 1, w: 1 }); pencil([[0, -90], [0, -110]], { w: 2, col: '#d8a830', pass2: false }); pop();
    for (const [cx, cy] of [[-160, 170], [-40, 190], [60, 160]]) { push(cx, cy, 0.5); const c = ell(0, -40, 60, 30, { wash: '#f4f0e8', washA: 1, w: 1.4, col: '#3a3a3a' }); ell(-20, -44, 20, 14, { wash: '#3a2a1a', washA: 1, line: false }); ell(56, -56, 18, 14, { wash: '#f4f0e8', washA: 1, w: 1.2 }); for (const lx of [-40, -14, 20, 44]) pencil([[lx, -14], [lx, 20]], { w: 4, col: '#3a3a3a', pass2: false }); pop(); }
    const cx = lerp(-400, 400, clamp((t - EV.ch_folk + 0.3) / 2.2)); if (t > EV.ch_folk - 0.3) { push(cx, 120, 0.7); rect(-90, -60, 180, 50, { wash: '#8a5a2a', washA: 1, w: 1.6 }); for (const wx of [-60, 60]) { ell(wx, -6, 26, 26, { wash: '#5a3a1a', washA: 1, w: 1.6 }); } for (let i = 0; i < 4; i++) ell(-60 + i * 40, -80, 22, 12, { wash: SY.cheese, washA: 1, w: 1.2, col: SY.cheeseD }); human(140, 0, 0.6, t, { body: '#7a3a2a', hair: '#3a2a1a', beard: 'short', face: 'grin', armL: 'hold', armR: 'hold', seed: 22003 }); pop(); }
    ctx.restore(); const sh = 1 - op(t);
    for (const sd of [-1, 1]) { const sw = sh * 260; const s = rect(sd > 0 ? 260 - sw : -260, -340, sw, 600, { wash: '#5a7a4a', washA: 1, w: 2, col: '#2a3a1a' }); for (let i = 0; i < 5; i++) pencil([[sd > 0 ? 260 - sw : -260, -320 + i * 120], [sd > 0 ? 260 : -260 + sw, -320 + i * 120]], { w: 3, col: '#2a3a1a', a: 0.6, pass2: false }); }
    pencil([[0, -340], [0, 260]], { w: 10, col: '#6a4a2a' }); pencil([[-260, -40], [260, -40]], { w: 10, col: '#6a4a2a' }); pop(); glow(80, 0, 300, 'rgba(240,250,255,1)', 0.18 + 0.15 * op(t));
    push(760, -420, 1); const sg = rect(-330, -60, 660, 120, { wash: '#2a4a3a', washA: 1, w: 4, col: '#c8a050', key: 22004 }); txt('АРТЕЛЬНАЯ СЫРОВАРНЯ', 0, -6, 40, { font: 'Osw', col: '#f4e4b0' }); txt('1866', 0, 42, 32, { font: 'Osw', col: '#e8c060' }); pop();
  }
  function racks(t) {                                                   // стеллажи с кругами сыра до потолка (герой), бирки, сияние на «Вот он, сыр!»
    const hl = t > EV.ch_here ? sm(clamp((t - EV.ch_here) / 0.4)) * (t > EV.ch_no ? 1 - clamp((t - EV.ch_no) / 0.4) : 1) : 0;
    for (const rx of [620, 1120]) { push(rx, 1300, 1); for (const sd of [-1, 1]) pencil([[sd * 230, 0], [sd * 230, -1300]], { w: 14, col: '#6a4424', pass2: false });
      for (let sh = 0; sh < 6; sh++) { const y = -60 - sh * 200; rect(-240, y, 480, 18, { wash: '#8a5a32', washA: 1, w: 1.6, col: '#2a1408' }); for (let i = 0; i < 4; i++) { const wx = -170 + i * 115; const k = 22010 + rx + sh * 10 + i; const sd = rect(wx - 50, y - 50, 100, 50, { wash: '#e0a030', washA: 1, w: 1.6, col: '#7a4a08', key: k }); shadeG(sd.path, wx + 50, 0, wx - 50, 0, '#8a5008', 0.45); ell(wx, y, 50, 12, { wash: '#d89828', washA: 1, w: 1.2, col: '#7a4a08' }); ell(wx, y - 50, 50, 12, { wash: SY.cheeseL, washA: 1, w: 1.4, col: '#7a4a08' }); if ((i + sh) % 3 === 0) { rect(wx - 18, y - 36, 36, 22, { wash: '#f4ecd0', washA: 1, w: 1 }); txt(String(60 + sh + i), wx, y - 20, 14, { font: 'Hand', col: '#3a2a1a' }); } } }
      if (hl > 0) lightPool(0, -600, 300, 600, 'rgba(255,220,120,1)', 0.25 * hl); pop(); }
  }
  function works(t) {                                                   // медный чан на огне, сыровары с «арфой», пресс с гирями, бидоны, Верещагин
    push(-120, 1300, 1); const fire = rect(-200, -80, 400, 80, { wash: '#4a3a2a', washA: 1, w: 2, col: '#1a0a04' }); for (let i = 0; i < 6; i++) { const fh = 40 + Math.sin(t * 9 + i) * 14; blob([[-150 + i * 60, -80], [-140 + i * 60, -80 - fh], [-120 + i * 60, -80]], { wash: i % 2 ? '#ff9a2a' : '#ffd050', washA: 1, line: false }); } glow(0, -90, 160, 'rgba(255,140,50,1)', 0.3);
    const vat = blob([[-220, -80], [-240, -260], [-220, -320], [220, -320], [240, -260], [220, -80]], { wash: '#c8743a', washA: 1, w: 3, col: '#5a2a08', key: 22030 }); shadeG(vat.path, 240, 0, -100, 0, '#5a2a08', 0.5); ell(-120, -260, 30, 60, { wash: '#ffd8a0', washA: 0.4, line: false });
    ell(0, -320, 220, 40, { wash: '#f8f4e8', washA: 1, w: 2, col: '#5a2a08' }); const r = rng(22031); for (let i = 0; i < 18; i++) ell(-180 + r() * 360, -326 + r() * 14 + Math.sin(t * 2 + i) * 3, 14, 6, { wash: '#efe6c8', washA: 1, line: false }); pop(); steamWisps(-120, 960, 1.2, t, 3, 22032, 0.3);
    const st = Math.sin(t * 2.4); human(80, 1300, 1.05, t, { body: '#f4f0e8', bodyD: '#a8a090', legs: '#3a3a3a', hair: '#8a5a2a', beard: 'short', hat: 'cap', hatCol: '#3a3a4a', face: t > EV.ch_no && t < EV.ch_no + 1.2 ? 'shock' : 'calm', armL: 'hold', armR: 'up', look: -0.6, seed: 22033, flip: -1 });
    push(-20 + st * 30, 960, 1, -0.4 + st * 0.15); pencil([[0, 0], [0, -200]], { w: 8, col: '#a8743a', pass2: false }); rect(-30, 0, 60, 70, { wash: 'rgba(0,0,0,0)', washA: 0, w: 2, col: '#5a5a5a' }); for (let i = 0; i < 4; i++) pencil([[-30 + i * 20, 0], [-30 + i * 20, 70]], { w: 2, col: '#5a5a5a', pass2: false }); pop();
    push(-460, 1300, 1); for (const sd of [-1, 1]) pencil([[sd * 90, 0], [sd * 90, -380]], { w: 14, col: '#6a4424', pass2: false }); pencil([[-100, -380], [100, -380]], { w: 16, col: '#6a4424', pass2: false }); pencil([[0, -380], [0, -200]], { w: 10, col: '#4a4a4a', pass2: false }); rect(-80, -200, 160, 40, { wash: '#8a5a32', washA: 1, w: 2 }); rect(-70, -160, 140, 90, { wash: SY.cheese, washA: 1, w: 2, col: SY.cheeseD }); for (let i = 0; i < 2; i++) rect(-30 + i * 30, -440 - i * 30, 40, 30, { wash: '#2a2a2a', washA: 1, w: 1.4 }); txt('2 П.', 0, -414, 14, { font: 'Osw', col: '#e8e8e8' }); pop();
    for (const bx of [1380, 1460]) { push(bx, 1300, 1); const b = blob([[-36, 0], [-40, -110], [-26, -130], [-20, -170], [20, -170], [26, -130], [40, -110], [36, 0]], { wash: '#c8ccd4', washA: 1, w: 2, col: '#4a4e58' }); shadeG(b.path, 40, 0, -36, 0, '#6a6e78', 0.45); pop(); }
    const vx = t > EV.ch_ver ? lerp(1250, 960, sm(clamp((t - EV.ch_ver + 0.3) / 0.6))) : 1250;
    human(vx, 1300, 1.1, t, { body: '#2a2a34', bodyD: '#0a0a14', legs: '#2a2a2a', hair: '#5a3a1a', beard: 'long', face: t > EV.ch_no ? 'calm' : 'grin', armL: 'hold', armR: t > EV.ch_ver && t < EV.ch_here ? 'point' : 'hold', look: -0.8, seed: 22034, flip: -1, long: 1 });
    if (t > EV.ch_ver) { const k = popK(t, EV.ch_ver, 0.4); push(vx, 1340, k); rect(-130, -24, 260, 48, { wash: '#f4ecd0', washA: 1, w: 2, col: '#5a3a14' }); txt('Н. В. ВЕРЕЩАГИН', 0, 10, 26, { font: 'Osw', col: '#3a2a1a' }); pop(); }
  }
  function counter(t) {                                                 // стол сыровара: нож-струна, клин сыра, творог в марле (контраст), ведро молока
    const c = rect(-300, 1440, 1700, 600, { wash: '#b08a5a', washA: 1, w: 3, col: '#3a2010', key: 22040 }); for (let i = 0; i < 7; i++) pencil([[-300, 1470 + i * 80], [1400, 1474 + i * 80]], { w: 3, col: '#6a4a2a', a: 0.5, pass2: false }); shadeG(c.path, 0, 1440, 0, 1800, '#4a2a10', 0.4);
    cheeseWheel(950, 1500, 0.9, { cut: 1, key: 22041 }); cheeseWedge(1230, 1500, 0.6, -0.1, { key: 22042 }); tvorogBag(300, 1500, 0.7, t, { key: 22043 });
    push(120, 1500, 1); const bu = blob([[-50, 0], [-56, -110], [56, -110], [50, 0]], { wash: '#8a8e98', washA: 1, w: 2, col: '#3a3e48' }); shadeG(bu.path, 56, 0, -50, 0, '#3a3e48', 0.4); ell(0, -110, 56, 12, { wash: '#f8f6f0', washA: 1, w: 1.4 }); pencil(spline([[-56, -100], [0, -170], [56, -100]], false, 6), { w: 4, col: '#3a3e48', pass2: false }); pop();
    castShadow(950, 1530, 300, 160, 0.6, 0.24); lightPool(700, 1520, 640, 140, 'rgba(240,250,255,1)', 0.22 + 0.12 * op(t));
  }
  function hud(t) {                                                     // «РАЗГАДКА?» → крест; лента «1550-е → 1866 = 300 ЛЕТ»
    if (t > EV.ch_riddle) { const k = popK(t, EV.ch_riddle, 0.4); push(820, 820, k, 0.04); rect(-200, -54, 400, 108, { wash: '#f4e8c8', washA: 1, w: 3, col: '#5a3a14' }); txt('РАЗГАДКА?', 0, 18, 64, { font: 'Osw', col: '#2a1a0a' });
      if (t > EV.ch_no) { const q = sm(clamp((t - EV.ch_no) / 0.25)); pencil([[-210, -60], [-210 + 420 * q, -60 + 120 * q]], { w: 16, col: '#c8241e', pass2: false }); pencil([[210, -60], [210 - 420 * q, -60 + 120 * q]], { w: 16, col: '#c8241e', pass2: false }); } pop(); }
    if (t > EV.ch_300 - 0.3) { const k = sm(clamp((t - EV.ch_300 + 0.3) / 0.5)); push(560, 640, 1); pencil([[-230, 0], [-230 + 460 * k, 0]], { w: 10, col: '#3a2a1a', pass2: false }); ell(-230, 0, 18, 18, { wash: '#3a2a1a', washA: 1, line: false }); txt('1550-е', -230, -40, 40, { font: 'Osw', col: '#3a2a1a' }); if (k > 0.9) { ell(230, 0, 18, 18, { wash: '#c8241e', washA: 1, line: false }); txt('1866', 230, -40, 40, { font: 'Osw', col: '#c8241e' }); push(0, 70, popK(t, EV.ch_300 + 0.2, 0.4)); rect(-170, -40, 340, 80, { wash: '#c8241e', washA: 1, w: 2, col: '#5a0a04' }); txt('300 ЛЕТ', 0, 18, 56, { font: 'Osw', col: '#ffffff' }); pop(); } pop(); }
  }
  function front(t) {                                                   // передний план: край бидона, висящая марля, пар
    push(-330, 2050, 1.6); const b = blob([[-90, 0], [-100, -240], [-70, -280], [70, -280], [100, -240], [90, 0]], { wash: '#9a9ea8', washA: 1, w: 3, col: '#2a2e38' }); shadeG(b.path, -100, 0, 100, 0, '#2a2e38', 0.5); pop();
    for (let i = 0; i < 2; i++) { const x = 1300 + i * 90, sw = Math.sin(t * 1.2 + i) * 10; blob([[x, -900], [x + 70, -900], [x + 60 + sw, -300], [x + 30 + sw, -240], [x + sw, -300]], { wash: '#f8f4e8', washA: 0.85, w: 1.4, col: '#c8bca4' }); }
    motes(14, [-200, 200, 900, 1300], '#ffffff', t, 22050, { sp: 6, sz: 3, a: 0.4, wob: 6 });
  }
  WORLD.cheese = (t, u, cat) => {
    lay(16, () => { room(t); shaft(80, 0, 420, 2200, -0.35, 'rgba(240,250,255,1)', 0.1 + 0.08 * op(t)); });
    lay(4, () => { racks(t); works(t); haze('#f4f0e4', 0.05); });
    lay(1, () => { cat(); counter(t); hud(t); });
    lay(0.6, () => { front(t); moodDark(620, 1100, 500, 1500, '#2a2418', 0.4); });
  };
  DIR.cheese = {
    outfit: 'syrA', light: { side: -1, rim: '#f0f8ff' }, grade: ['#f0d070', 0.05],
    act: () => [[S0.cheese, 'talk'], [EV.ch_hard, 'suspicious'], [EV.ch_ver, 'awe'], [EV.ch_here, 'proud'], [EV.ch_riddle, 'grin'], [EV.ch_no, 'shock'], [EV.ch_no + 0.4, 'annoyed'], [EV.ch_300, 'smug']],
    pose: (t, u, b) => { const up = t > EV.ch_here - 0.15 && t < EV.ch_no + 0.2, dn = t > EV.ch_no;
      return Object.assign(b, { x: 640, y: 1590, s: 1.18, flip: 1, look: t < EV.ch_ver ? [-0.8, -0.6] : t < EV.ch_here ? [0.8, -0.2] : up ? [0, -0.8] : [0.2, 0.1], hand: up ? [60, -560] : dn ? [140, -220] : [150, -300], handF: up ? [-60, -560] : [-100, -230],
        prop: t > EV.ch_here - 0.15 ? 'wheelP' : undefined, propAng: dn ? 0.4 : 0, tailUp: up, squash: dn && t < EV.ch_no + 0.2 ? 0.06 : 0 }); },
    cam: () => [[S0.cheese, 700, 1000, 0.22], [EV.ch_hard, 760, 950, 0.26], [EV.ch_folk, 640, 1000, 0.26], [EV.ch_ver, 760, 1060, 0.25], [EV.ch_here, 640, 1020, 0.28], [EV.ch_no, 680, 1080, 0.3], [EV.ch_300, 600, 1000, 0.28], [S1.cheese, 620, 1050, 0.3]]
  };
  TRANS_IN.cheese = { a: 0.2, b: 0.5, runA: 0.6, fx(k, t, A, B) {         // круг сыра выкатывается из глубины и раскрывает сцену в своём круге
    const e = sm(k), cx = lerp(-200, 540, sm(clamp(k * 1.6))), R = lerp(60, 1300, e * e); drawBuf(A, 1, 540, 960);
    inCircle(cx, 1100, R * 0.92, () => drawBuf(B, 1, 540, 960));
    scr(() => { pencil(ellPts(cx, 1100, R, R, 0, 0, 48), { w: 22 + R * 0.04, col: '#e0a030', pass2: false, gap: false }); pencil(ellPts(cx, 1100, R * 0.95, R * 0.95, 0, 0, 48), { w: 6, col: '#7a4a08', pass2: false, gap: false }); if (R < 500) txt('СЫРЪ', cx, 1100 - R * 0.6, 20 + R * 0.08, { font: 'Osw', col: '#7a4a08', rot: t * 8 }); });
  } };
})();
