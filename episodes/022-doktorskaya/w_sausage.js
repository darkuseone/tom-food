/* 022 — `sausage` (ТОМ-МАЛЫШ, раз за ролик): «А ГОСТ 1979-го разрешает буйвола… и яка. / Яка в докторской не прописывал ни один врач.»
   Микромир на срезе гигантского кружка докторской: под ногами — розовый «мрамор» фарша до горизонта (жировые точки — белые блестящие валуны,
   влажные лужицы с бликами, зерно крахмала — белый гранёный кристалл), по горизонту — оболочка-стена (розово-бурая, перетянута канатом-шпагатом),
   за ней размытая великанская кухня (доска, окно — главный свет слева-сверху, банка горчицы-башня). Сверху висит нож-гильотина. Том-малыш —
   доктор в шапочке и со стетоскопом — делает «осмотр»: идёт по срезу, приседает и слушает фарш стетоскопом. По словам: «буйвола…» — из-за оболочки
   слева выглядывает голова буйвола; «яка.» — справа вылезает лохматый як и жуёт травинку; «врач.» — Том-малыш пожимает плечами, як моргает;
   пауза-гэг — нож-гильотина «ХРЯСЬ!» падает за спиной Тома-малыша, он подпрыгивает, шапочка съезжает. Переход В сцену: оболочка срывается с кадра
   спиралью. */
(() => {
  EV.sx_walk = LS('s6');
  EV.sx_buf = wtw('s6', 'буйвола…');
  EV.sx_yak = wtw('s6', 'яка.');
  EV.sx_listen = LS('s7');
  EV.sx_doc = wtw('s7', 'врач.');
  EV.sx_gag = LE('s7') + 0.05;
  SHAKES.push([EV.sx_yak + 0.1, 0.12, 5], [EV.sx_gag + 0.18, 0.25, 12]);
  KEYW.push('яка.', 'врач.');
  const knifeY = t => t < EV.sx_gag ? lerp(420, 560, clamp((t - S0.sausage) / 6)) + Math.sin(t * 1.4) * 12 : lerp(560, 1180, Math.min(1, ((t - EV.sx_gag) / 0.18) ** 2));
  function giant(t) {                                                    // великанская кухня за оболочкой: стена, окно со светом, банка-башня, доска
    vgrad(-900, 1300, ['#e8d8c0', '#f4e6d0', '#d8c0a0']);
    for (let y = -900; y < 1300; y += 160) pencil([[-800, y], [2000, y]], { w: 4, col: '#c8b090', a: 0.5, pass2: false }); for (let x = -800; x < 2000; x += 220) pencil([[x, -900], [x, 1300]], { w: 4, col: '#c8b090', a: 0.4, pass2: false });
    push(-160, -360, 1); const w = rect(-300, -300, 600, 560, { wash: '#fff8e0', washA: 1, w: 18, col: '#c8b8a0', key: 22801 }); pencil([[0, -300], [0, 260]], { w: 14, col: '#c8b8a0' }); pencil([[-300, -20], [300, -20]], { w: 14, col: '#c8b8a0' }); glow(0, -40, 380, 'rgba(255,248,220,1)', 0.35); pop();
    push(1240, 100, 1); const j = rect(-170, -520, 340, 520, { wash: '#e8b830', washA: 0.85, w: 4, col: '#8a6a10', key: 22802 }); shadeG(j.path, 170, 0, -170, 0, '#8a6a10', 0.45); rect(-180, -600, 360, 90, { wash: '#c8241e', washA: 1, w: 3 }); rect(-120, -360, 240, 160, { wash: '#f4ecd0', washA: 1, w: 2 }); txt('ГОРЧИЦА', 0, -270, 40, { font: 'Osw', col: '#a8241e' }); pencil([[-130, -480], [-110, -60]], { w: 18, col: '#fff4c0', a: 0.4, pass2: false }); pop();
    push(500, 300, 1); const bd = rect(-900, -60, 1800, 140, { wash: '#b8844a', washA: 1, w: 3, col: '#4a2a10', key: 22803 }); for (let i = 0; i < 8; i++) pencil([[-880, -40 + i * 18], [880, -36 + i * 18]], { w: 3, col: '#8a5a2a', a: 0.4, pass2: false }); pop();
  }
  function casing(t) {                                                   // оболочка-стена по горизонту + канат-шпагат + буйвол и як
    push(0, 300, 1);
    const b = blob([[-800, 900], [-800, 560], [-400, 470], [200, 440], [800, 460], [1400, 520], [1900, 600], [1900, 900]], { wash: DK.casing, washA: 1, w: 3, col: DK.casingD, key: 22810 });
    shadeG(b.path, 0, 440, 0, 900, '#7a3a40', 0.5); shadeG(b.path, 0, 440, 0, 560, '#f8d0c8', 0.4);
    for (let i = 0; i < 14; i++) { const x = -700 + i * 190; pencil(spline([[x, 900], [x + 30, 700], [x + 10, 480 + Math.abs(x - 500) * 0.06]], false, 6), { w: 18, col: DK.twine }); pencil(spline([[x + 6, 900], [x + 36, 700], [x + 16, 480 + Math.abs(x - 500) * 0.06]], false, 6), { w: 3, col: '#a89a78', a: 0.6, pass2: false }); }
    pencil(spline([[-800, 520], [-400, 440], [200, 412], [800, 430], [1400, 490], [1900, 570]], false, 8), { w: 12, col: '#ffe8e0', a: 0.45, pass2: false });
    if (t > EV.sx_buf - 0.1) { const k = sm(clamp((t - EV.sx_buf + 0.1) / 0.5)); push(300, 560 - k * 240, 1.3); for (const sd of [-1, 1]) pencil(spline([[sd * 60, -70], [sd * 160, -60], [sd * 190, -110], [sd * 170, -160]], false, 6), { w: 22, col: '#3a3a3a', pass2: false });
      const hd = blob([[-80, -90], [80, -90], [90, 20], [50, 90], [-50, 90], [-90, 20]], { wash: '#3a3430', washA: 1, w: 2.4, col: '#0a0806' }); shadeG(hd.path, 60, 0, -60, 0, '#0a0806', 0.4); for (const ex of [-34, 34]) { ell(ex, -30, 10, 8, { wash: '#f8f0e0', washA: 1, w: 1.4 }); ell(ex, -29, 5, 5, { wash: '#1a1008', washA: 1, line: false }); } ell(0, 54, 40, 26, { wash: '#5a4a44', washA: 1, w: 1.6 }); for (const sd of [-1, 1]) ell(sd * 14, 54, 5, 4, { wash: '#0a0806', washA: 1, line: false }); pop();
      push(300, 560 - k * 240 - 260, 1); if (k > 0.9 && t < EV.sx_yak + 0.3) { rect(-60, -30, 120, 40, { wash: '#f4f0e0', washA: 1, w: 1.4 }); txt('БУЙВОЛ', 0, -2, 20, { font: 'Osw', col: '#2a2a2a' }); } pop(); }
    if (t > EV.sx_yak - 0.1) { const k = sm(clamp((t - EV.sx_yak + 0.1) / 0.45)), bl = t > EV.sx_doc && t < EV.sx_doc + 0.15; yakHead(840, 560 - k * 260, 1.5, t, { key: 22811, chew: 1, grass: 1, rot: Math.sin(t * 2) * 0.05 }); if (bl) for (const ex of [-34, 34]) pencil([[840 + ex * 1.5 - 14, 560 - 260 - 36 * 1.5], [840 + ex * 1.5 + 14, 560 - 260 - 36 * 1.5]], { w: 4, col: '#1a0e06', pass2: false });
      if (k > 0.9) { push(840, 560 - 260 - 330, popK(t, EV.sx_yak + 0.3, 0.3)); rect(-50, -30, 100, 40, { wash: '#f4f0e0', washA: 1, w: 1.4 }); txt('ЯК', 0, -2, 24, { font: 'Osw', col: '#a8241e' }); pop(); } }
    pop();
  }
  function marble(t, near) {                                             // розовый «мрамор» среза: точки жира в перспективе, лужицы, блики
    const y0 = near ? 1300 : 860, y1 = near ? 2200 : 1320, r = rng(near ? 22821 : 22820);
    const g = rect(-900, y0, 2900, y1 - y0, { wash: DK.pink, washA: 1, line: false, key: 22822 + (near ? 1 : 0) }); shadeG(g.path, 0, y0, 0, y1, near ? '#ffd0c8' : '#d88080', 0.35);
    for (let i = 0; i < (near ? 44 : 70); i++) { const yy = y0 + r() * (y1 - y0), sc = near ? 1 : 0.3 + (yy - y0) / (y1 - y0) * 0.7, x = -800 + r() * 2700; const rr = (near ? 20 : 8) * sc * (0.6 + r());
      ell(x, yy, rr * 1.6, rr * 0.6, { wash: DK.fat, washA: 1, w: 1.2, col: '#d8a8a0' }); ell(x - rr * 0.4, yy - rr * 0.2, rr * 0.5, rr * 0.15, { wash: '#ffffff', washA: 0.8, line: false }); }
    for (let i = 0; i < (near ? 10 : 20); i++) { const yy = y0 + r() * (y1 - y0), x = -800 + r() * 2700; ell(x, yy, 30 + r() * 30, 6 + r() * 6, { wash: '#e07a80', washA: 0.4, line: false }); }
    if (!near) for (let i = 0; i < 6; i++) { const yy = y0 + 40 + i * 70, x = -600 + ((i * 523) % 2400); ell(x, yy, 60 + i * 12, 10 + i * 2, { wash: '#ffe4e0', washA: 0.5, w: 1, col: '#e8a8a8' }); }
  }
  function surface(t) {                                                  // ближний срез: валуны жира, зерно крахмала, капли сока, разрез от ножа
    marble(t, true);
    for (const [x, y, s] of [[120, 1620, 1.6], [980, 1700, 1.3], [1300, 1560, 1.1], [-160, 1760, 1.8]]) { const b = ell(x, y, 60 * s, 26 * s, { wash: DK.fat, washA: 1, w: 2, col: '#c8a098' }); shadeG(b.path, x, y - 26 * s, x, y + 26 * s, '#e8c0b8', 0.5); ell(x - 20 * s, y - 10 * s, 22 * s, 6 * s, { wash: '#ffffff', washA: 0.9, line: false }); }
    push(740, 1500, 1.3); const cr = poly([[-40, 0], [-30, -70], [0, -100], [36, -70], [44, 0], [0, 20]], { wash: '#f8fbff', washA: 0.9, w: 2, col: '#8a9aa8', key: 22830 }); shadeG(cr.path, 44, 0, -40, -60, '#a8b8c8', 0.45); pencil([[0, -100], [0, 20]], { w: 1.6, col: '#a8b8c8', pass2: false }); pencil([[-30, -70], [36, -70]], { w: 1.4, col: '#c8d4e0', pass2: false }); ell(-10, -60, 8, 14, { wash: '#ffffff', washA: 1, line: false });
    if (t > EV.sx_listen - 0.5) { rect(-60, -170, 120, 40, { wash: '#f4f0e0', washA: 1, w: 1.4 }); txt('КРАХМАЛ', 0, -142, 18, { font: 'Osw', col: '#2a6aa8' }); } pop();
    for (let i = 0; i < 4; i++) { const x = 300 + i * 260, k = (t * 0.6 + i * 0.3) % 1; ell(x, 1460 + i * 20, 24 * (1 - k), 8 * (1 - k), { wash: '#ffd8d8', washA: 0.6, w: 1, col: '#e8a0a0' }); }
    if (t > EV.sx_gag + 0.18) { pencil([[-900, 1180], [2000, 1180]], { w: 10, col: '#8a3a40', pass2: false }); pencil([[-900, 1188], [2000, 1188]], { w: 4, col: '#ffe0d8', a: 0.7, pass2: false }); const k = clamp((t - EV.sx_gag - 0.18) / 0.5); for (let i = 0; i < 10; i++) ell(260 + (i - 5) * 50 * k * 2, 1170 - Math.sin(i) * 80 * k, 10, 8, { wash: DK.pink, washA: 1 - k, line: false }); if (k < 0.9) { push(560, 1000, popK(t, EV.sx_gag + 0.18, 0.3), -0.1); txt('ХРЯСЬ!', 0, 0, 80, { font: 'Osw', col: '#c8241e' }); pop(); } }
  }
  function knife(t) {                                                    // нож-гильотина сверху: широкое лезвие, блик, деревянная рукоять
    const y = knifeY(t); push(300, y, 1); const bl = poly([[-260, -520], [260, -520], [260, 0], [-260, -60]], { wash: '#c8ccd4', washA: 1, w: 3, col: '#2a3038', key: 22840 }); metalG(bl.path, -60, -300, 500, '#ffffff', '#c8ccd4', '#5a6068', 0.7);
    pencil([[-250, -40], [250, 10]], { w: 6, col: '#ffffff', a: 0.8, pass2: false }); pencil([[-200, -440], [-120, -80]], { w: 14, col: '#ffffff', a: 0.35, pass2: false }); rect(-60, -760, 120, 250, { wash: '#6a3a1a', washA: 1, w: 3, col: '#2a1408' }); for (let i = 0; i < 3; i++) nb(0, -700 + i * 70, 8, '#c8c8d0'); pop();
    if (t < EV.sx_gag) castShadow(300, 1180, 520, 60, 0, 0.12 + clamp((t - S0.sausage) / 6) * 0.1);
  }
  function front(t) {                                                    // передний план: край оболочки снизу, валун жира, капли сока у края
    const b = blob([[-600, 2200], [-600, 2000], [0, 1940], [700, 1960], [1700, 2040], [1700, 2200]], { wash: DK.casing, washA: 1, w: 3, col: DK.casingD, key: 22850 }); shadeG(b.path, 0, 1940, 0, 2200, '#6a2a30', 0.5);
    const fb = ell(1360, 1960, 160, 70, { wash: DK.fat, washA: 1, w: 2.4, col: '#c8a098' }); shadeG(fb.path, 1360, 1890, 1360, 2030, '#e8c0b8', 0.5); ell(1300, 1930, 50, 14, { wash: '#ffffff', washA: 0.9, line: false });
    for (let i = 0; i < 3; i++) { const k = (t * 0.5 + i * 0.33) % 1; ell(-200 + i * 50, 1500 + k * 400, 14, 20, { wash: '#ffd0d0', washA: 0.6 * (1 - k), w: 1, col: '#e8a0a0' }); }
  }
  WORLD.sausage = (t, u, cat) => {
    lay(18, () => { giant(t); haze('#ffeede', 0.08); });
    lay(8, () => { casing(t); shaft(-160, -300, 520, 2600, -0.4, 'rgba(255,246,220,1)', 0.14); });
    lay(3, () => { marble(t, false); haze('#ffe8e0', 0.05); });
    lay(1, () => { knife(t); surface(t); cat(); lightPool(520, 1540, 420, 80, 'rgba(255,240,220,1)', 0.3); });
    lay(0.6, () => { front(t); motes(14, [-100, 300, 1200, 1500], '#fff4ee', t, 22860, { sp: 4, sz: 3, a: 0.3, wob: 6 }); moodDark(560, 1150, 520, 1500, '#4a1a28', 0.32); });
  };
  DIR.sausage = {
    outfit: 'docA', light: { side: -1, rim: '#fff0e0' }, grade: ['#ffb0a8', 0.06],
    act: () => [[S0.sausage, 'grin'], [EV.sx_buf, 'awe'], [EV.sx_yak, 'shock'], [EV.sx_listen, 'suspicious'], [EV.sx_doc, 'sideeye'], [EV.sx_gag + 0.15, 'scared'], [EV.sx_gag + 0.6, 'laugh']],
    pose: (t, u, b) => { const wk = clamp((t - S0.sausage) / Math.max(0.1, EV.sx_yak - S0.sausage)), lis = t > EV.sx_listen && t < EV.sx_doc, jump = t > EV.sx_gag + 0.18 && t < EV.sx_gag + 0.7, jk = clamp((t - EV.sx_gag - 0.18) / 0.5);
      return Object.assign(b, { x: lerp(380, 560, sm(wk)), y: 1560 - (jump ? Math.sin(jk * 3.14) * 160 : 0), s: 0.7, flip: 0, walk: wk < 1 ? t * 8 : undefined, rot: lis ? 0.18 : 0, look: t < EV.sx_yak ? [-0.6, -0.5] : t < EV.sx_listen ? [0.8, -0.5] : lis ? [0.2, 0.8] : [0, 0],
        hand: lis ? [120, 40] : t > EV.sx_doc && t < EV.sx_gag ? [150, -340] : [130, -220], handF: t > EV.sx_doc && t < EV.sx_gag ? [-150, -340] : [-110, -200], prop: 'stethP', propAng: lis ? 2.6 : 0.2, squash: lis ? 0.12 : jump && jk < 0.2 ? 0.2 : 0, tailUp: jump, sweat: t > EV.sx_gag + 0.2 }); },
    cam: () => [[S0.sausage, 560, 1120, 0.22], [EV.sx_buf, 480, 1060, 0.24], [EV.sx_yak, 700, 1060, 0.24], [EV.sx_listen, 560, 1200, 0.3], [EV.sx_doc, 600, 1140, 0.28], [EV.sx_gag, 500, 1180, 0.3], [S1.sausage, 520, 1180, 0.32]]
  };
  TRANS_IN.sausage = { a: 0.2, b: 0.55, runA: 1, fx(k, t, A, B) {        // оболочка срывается с кадра спиралью
    const e = sm(k); drawBuf(B, 1, 540, 960);
    const s = 1 - e * 0.85, rot = e * 4.4, dx = e * 520, dy = -e * 820; drawBuf(A, s, 540, 960, 1, null, dx, dy, rot);
    scr(() => { push(540 + dx, 960 + dy, s, rot); pencil([[-540, -960], [540, -960], [540, 960], [-540, 960], [-540, -960]], { w: 40 / Math.max(0.2, s), col: DK.casing, pass2: false }); for (let i = 0; i < 8; i++) pencil([[-540 + i * 150, -960], [-540 + i * 150 + 20, 960]], { w: 8 / Math.max(0.2, s), col: DK.twine, a: 0.0, pass2: false }); pop(); });
  } };
})();
