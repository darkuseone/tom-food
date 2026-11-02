/* 011 — `hook` + `button`: «Самозванец! Этот „венский“ штрудель скрывает, кто его настоящий прадед.» Венское кафе вечером: мрамор, стулья Тонета, газеты на держателях,
   зеркала в золочёных рамах, люстры, витрина тортов, окна на вечернюю улицу со шпилем собора и красным трамваем. Том-кельнер (чёрный жакет + фартук) с лупой
   «допрашивает» штрудель на мраморном столике; на «прадед» в зеркале проступает призрак османского повара. «Откусим историю!» — вилка, хруст, крошки.
   `button`: тот же кадр, Том подмигивает и снова берётся за лупу → петля в хук. */
(() => {
  EV.hk_imp = 0.08;
  EV.hk_vien = wtw('h1', '«венский»');
  EV.hk_ghost = wtw('h1', 'прадед.');
  EV.hk_grab = LS('h2') - 0.15;
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_imp + 0.05, 0.2, 9], [EV.hk_bite, 0.22, 12]);
  KEYW.push('Самозванец!', 'прадед.');

  function street(t) {                                                  // вид в окне: вечерняя Вена — шпиль собора, дома с окнами, фонари, красный трамвай, снег-пыль
    vgrad(-200, 900, ['#1a2448', '#3a3a68', '#8a5a6a']); glow(300, 700, 400, 'rgba(255,170,120,1)', 0.25);
    sil([[160, 900], [180, 420], [200, 380], [214, 120], [228, 380], [248, 420], [268, 900]], '#141a30', 1); for (let i = 0; i < 8; i++) pencil([[204, 420 + i * 50], [224, 420 + i * 50]], { w: 1.4, col: '#2a3458', pass2: false });
    for (const [x, w, h] of [[-80, 220, 420], [300, 240, 360], [560, 260, 470], [840, 260, 400]]) { rect(x, 900 - h, w, h + 20, { wash: '#2a2a48', washA: 1, w: 2, col: '#0a0a1a' }); poly([[x - 10, 900 - h], [x + w / 2, 860 - h], [x + w + 10, 900 - h]], { wash: '#3a2a3a', washA: 1, w: 1.6 }); windows(x + 18, 920 - h, w - 36, h - 120, 4, 5, x + 11, 0.55, '#ffd890', '#4a4a6a', 0.9); }
    for (const x of [120, 480, 860]) { pencil([[x, 900], [x, 760]], { w: 4, col: '#1a1a24' }); glow(x, 750, 60, 'rgba(255,220,140,1)', 0.6); ell(x, 752, 10, 12, { wash: '#ffe8a8', washA: 1, w: 1 }); }
    const tx = ((t * 90) % 1600) - 500; push(tx, 900, 1); rect(0, -130, 360, 110, { wash: '#c8282a', washA: 1, w: 2.4, col: '#2a0404' }); rect(0, -40, 360, 30, { wash: '#f0e6d0', washA: 1, w: 1.6 }); for (let i = 0; i < 5; i++) rect(16 + i * 68, -116, 50, 56, { wash: '#ffe8a0', washA: 0.9, w: 1.4 }); pencil([[180, -130], [200, -230]], { w: 2, col: '#2a2a2a', pass2: false }); pop();
    pencil([[-200, 668], [1300, 668]], { w: 1.4, col: '#2a2a3a', a: 0.7, pass2: false }); motes(30, [0, 100, 1080, 900], '#ffffff', t, 11201, { sp: 30, vx: 8, sz: 3, a: 0.5, wob: 1 });
  }
  function wall(t) {                                                    // стена кафе: кремовые обои с дамаском, тёмные панели, арочные окна, зеркало, люстры, стойка газет
    vgrad(-500, 1500, ['#5a3a24', '#c8a878', '#d8b888']);
    for (let y = -400; y < 1000; y += 90) for (let x = -300; x < 1500; x += 90) { const xx = x + (y / 90 % 2) * 45; txt('❦', xx, y, 40, { col: '#a8864e', a: 0.35 }); }
    const wp = rect(-300, 1000, 1800, 420, { wash: '#4a2814', washA: 1, w: 2.4, col: '#1a0a04', key: 11210 }); hatch(wp.path, wp.bb, { gap: 10, a: 0.18, col: '#1a0a04', ang: 1.57, key: 11211 });
    for (let i = 0; i < 8; i++) { const x = -260 + i * 220; rect(x, 1040, 180, 330, { wash: '#5a3420', washA: 1, w: 2, col: '#1a0a04' }); pencil([[x + 10, 1050], [x + 170, 1050]], { w: 2, col: '#8a5a32', a: 0.6, pass2: false }); }
    rect(-300, 990, 1800, 24, { wash: '#7a4a24', washA: 1, w: 2, col: '#1a0a04' });
    for (const x of [-160, 300]) { const fr = shape([[x, 980], ...Array.from({ length: 15 }, (_, i) => [x + 140 + Math.cos(Math.PI + i / 14 * Math.PI) * 140, 420 + Math.sin(Math.PI + i / 14 * Math.PI) * 150]), [x + 280, 980]], { wash: '#1a2448', washA: 1, w: 6, col: '#3a2410', key: 11212 + x });
      ctx.save(); ctx.clip(fr.path); street(t); ctx.restore(); pencil([[x + 140, 280], [x + 140, 980]], { w: 8, col: '#4a2a14' }); pencil([[x, 700], [x + 280, 700]], { w: 7, col: '#4a2a14' });
      for (const sd of [-1, 1]) { const c = shape(spline([[x + 140 + sd * 170, 250], [x + 140 + sd * 120, 260], [x + 140 + sd * 110 + Math.sin(t + x) * 4, 640], [x + 140 + sd * 150, 1000], [x + 140 + sd * 190, 1000]], true, 6), { wash: '#7a1e22', washA: 1, w: 2, col: '#2a0406', key: 11214 + x + sd }); shadeG(c.path, x + 140 + sd * 190, 0, x + 140 + sd * 110, 0, '#2a0406', 0.5); } }
    push(860, 640, 1); const mf = rect(-170, -260, 340, 470, { wash: '#d6a842', washA: 1, w: 3, col: '#4a2a08', key: 11220 }); metalG(mf.path, -60, -120, 400, '#ffe8a0', '#c89a3a', '#6a4a10');
    const mg = rect(-140, -230, 280, 410, { wash: '#8a9aa0', washA: 1, w: 2, col: '#4a3a1a', key: 11221 }); ctx.save(); ctx.clip(mg.path); vgrad(-230, 180, ['#6a7a80', '#a8b0a8', '#7a6a58']); for (let i = 0; i < 3; i++) glow(-80 + i * 80, -150, 40, 'rgba(255,240,200,1)', 0.4);
      const ga = clamp((t - EV.hk_ghost + 0.1) / 0.4) * (1 - clamp((t - EV.hk_bite) / 0.5)); if (ga > 0) { ctx.globalAlpha = 1; human(0, 180, 0.95, t, { body: '#a8282a', legs: '#5a0e10', hair: '#2a1a0a', beard: 'short', face: 'smug', armL: 'hips', armR: 'hold', seed: 77, long: 1 }); turban20(0, 180, 0.95); glow(0, -60, 200, 'rgba(255,220,160,1)', 0.35 * ga); }
      ctx.restore(); if (t > EV.hk_ghost && t < EV.hk_bite) { const g2 = clamp((t - EV.hk_ghost) / 0.3); ctx.save(); ctx.clip(mg.path); screenFill('#c8b8a0', 0.0); ctx.restore(); glow(0, -40, 260, 'rgba(255,200,120,1)', 0.25 * g2); }
      pencil([[-120, -200], [-60, -140]], { w: 4, col: '#ffffff', a: 0.4, pass2: false }); for (let i = 0; i < 4; i++) ell(-150 + i * 100, -270, 16, 16, { wash: '#f0c860', washA: 1, w: 1.6, col: '#5a3a08' }); pop();
    for (let i = 0; i < 4; i++) newsHolder(1110 + (i % 2) * 40, 460 + i * 120, 0.9, ['ZEITUNG', 'DIE PRESSE', 'KURIER', 'BLATT'][i], 0.02);
    pencil([[1060, 440], [1260, 440]], { w: 6, col: '#4a2a14' });
  }
  function chandelier(x, y, s, t) {                                     // латунная люстра с матовыми шарами
    push(x, y, s); pencil([[0, -400], [0, 0]], { w: 4, col: '#8a6a2a' }); const b = ell(0, 0, 36, 22, { wash: '#c89a3a', washA: 1, w: 2, col: '#4a2a08' }); metalG(b.path, -10, -6, 40, '#ffe8a0', '#c89a3a', '#5a3a08');
    for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283 + 0.3, ex = Math.cos(a) * 130, ey = Math.sin(a) * 30 + 30; pencil(spline([[0, 0], [ex * 0.5, ey + 20], [ex, ey]], false, 5), { w: 4, col: '#b8862a', pass2: false }); ell(ex, ey - 24, 22, 26, { wash: '#fff4d8', washA: 0.95, w: 1.6, col: '#8a7a5a' }); glow(ex, ey - 24, 90, 'rgba(255,220,150,1)', 0.45); }
    glow(0, 20, 320, 'rgba(255,210,140,1)', 0.25); pop();
  }
  function vitrine(t) {                                                 // витрина тортов: стекло, три полки, захер, торт со сливками, штрудели, ценники
    push(950, 1000, 1); const v = rect(-160, -380, 360, 380, { wash: '#4a2814', washA: 1, w: 2.4, col: '#1a0a04', key: 11230 });
    const g = rect(-140, -360, 320, 320, { wash: '#d8ecf0', washA: 0.25, w: 2, col: '#6a5a3a' }); glow(0, -260, 160, 'rgba(255,240,210,1)', 0.35);
    for (let r = 0; r < 3; r++) { const y = -270 + r * 100; pencil([[-140, y + 30], [180, y + 30]], { w: 3, col: '#c8b898', pass2: false });
      for (let i = 0; i < 3; i++) { const x = -100 + i * 100; if (r === 0) { const c = shape([[x - 34, y + 28], [x - 34, y - 6], [x + 34, y - 6], [x + 34, y + 28]], { wash: '#3a1a10', washA: 1, w: 1.6, col: '#0a0404' }); ell(x, y - 6, 34, 8, { wash: '#2a0a06', washA: 1, w: 1.4 }); txt('Sacher', x, y + 10, 14, { font: 'Hand', col: '#d6a842' }); }
        else if (r === 1) { shape([[x - 34, y + 28], [x - 34, y - 2], [x + 34, y - 2], [x + 34, y + 28]], { wash: '#fff4e0', washA: 1, w: 1.6, col: '#8a7a5a' }); for (let k = 0; k < 4; k++) ell(x - 24 + k * 16, y - 6, 6, 6, { wash: '#d9282a', washA: 1, w: 1 }); }
        else strudel(x, y + 18, 0.18, t, { key: 11231 + i, len: 160 }); } }
    rect(-170, -400, 380, 30, { wash: '#6a3a1a', washA: 1, w: 2, col: '#1a0a04' }); txt('KONDITOREI', 20, -384, 20, { font: 'Osw', col: '#e8c878' }); pop();
  }
  function guests(t) {                                                  // гости: дама в шляпке с газетой, усатый господин, кельнер с подносом, пара у окна
    const sh = t > EV.hk_imp && t < EV.hk_vien + 0.8, gh = t > EV.hk_ghost;
    for (const [x, sd] of [[60, 1], [460, -1]]) { push(x, 1160, 0.9); ell(0, 0, 90, 20, { wash: '#efeae0', washA: 1, w: 2, col: '#6a6a6a' }); pencil([[0, 0], [0, 200]], { w: 8, col: '#2a2a2a' }); ell(0, 200, 50, 10, { wash: '#2a2a2a', washA: 1 }); melange(-20, -10, 0.5, t, { steam: 1 }); pop(); }
    thonet(-30, 1360, 0.8, 1); human(-30, 1350, 1.05, t, { body: '#5a2a4a', legs: '#2a1a1a', hair: '#8a4a2a', face: sh ? 'shock' : 'calm', armL: 'hold', armR: sh ? 'point' : 'hold', look: 0.8, seed: 31 }); hat20(-30, 1350, 1.05, 'cloche', '#3a1a2a');
    if (!sh) newsHolder(10, 1060, 0.8, 'ZEITUNG', 0.1);
    thonet(560, 1360, 0.8, -1); human(560, 1350, 1.05, t, { body: '#2a2a34', legs: '#1a1a1a', hair: '#d8d0c0', face: gh ? 'shock' : sh ? 'grin' : 'calm', armL: 'hold', armR: 'up', look: gh ? 0.8 : -0.6, seed: 32, flip: -1 }); stache(560, 1350, 1.05); hat20(560, 1350, 1.05, 'tophat');
    const wx = 260 + Math.sin(t * 0.6) * 60; human(wx, 1300, 1.0, t, { body: '#16161c', legs: '#16161c', hair: '#2a1a0a', face: 'smile', armL: 'down', armR: 'up', seed: 33 }); push(wx + 84, 1300 - 330, 1); const tr = ell(0, 0, 70, 14, { wash: '#c8ccd2', washA: 1, w: 2, col: '#3a3e44' }); metalG(tr.path, -20, -4, 80, '#ffffff', '#b8bcc4', '#5a5e66'); melange(0, -6, 0.4, t, { steam: 0 }); pop();
  }
  function marble(t, y0) {                                              // мраморная столешница переднего плана: прожилки, латунный кант
    const tb = rect(-400, y0, 1900, 800, { wash: '#efeae2', washA: 1, w: 3, col: '#5a5048', key: 11240 }); shadeG(tb.path, 0, y0 + 500, 0, y0, '#b8b0a4', 0.45);
    const r = rng(11241); ctx.save(); ctx.clip(tb.path); for (let i = 0; i < 14; i++) { const x = -300 + r() * 1700; pencil(spline([[x, y0], [x + 60 + r() * 80, y0 + 120], [x + r() * 120, y0 + 300], [x + 140, y0 + 500]], false, 6), { w: 1.6, col: '#9a948a', a: 0.5, pass2: false }); } ctx.restore();
    pencil([[-400, y0], [1500, y0]], { w: 6, col: '#c89a3a' });
    push(760, y0 + 230, 1, -0.12); const np = poly([[-170, -100], [170, -110], [180, 100], [-160, 110]], { wash: '#efe4c8', washA: 1, w: 2, col: '#6a5a3a' }); shadeG(np.path, 0, 110, 0, -100, '#c8b890', 0.4); txt('WIENER BLATT', 0, -70, 26, { font: 'Osw', col: '#2a2a2a' }); pencil([[-150, -50], [150, -54]], { w: 2, col: '#2a2a2a', pass2: false });
      for (let c = 0; c < 3; c++) for (let i = 0; i < 9; i++) pencil([[-140 + c * 100, -30 + i * 14], [-60 + c * 100, -30 + i * 14]], { w: 1.6, col: '#5a5a5a', a: 0.5, pass2: false }); rect(-140, -34, 80, 60, { wash: '#8a8a7a', washA: 0.7, w: 1 }); txt('STRUDEL?', 40, 96, 24, { font: 'Osw', col: '#a82020', rot: -0.02 }); pop();
    push(240, y0 + 250, 1, 0.1); poly([[-90, -60], [80, -70], [96, 60], [-80, 70]], { wash: '#f8f4ec', washA: 1, w: 1.6, col: '#9a9a9a' }); pencil([[-60, -20], [60, 30]], { w: 6, col: '#c8ccd2' }); for (let i = -1; i <= 1; i++) pencil([[60 + i * 4, 30 + i * 4], [96 + i * 4, 44 + i * 4]], { w: 2, col: '#c8ccd2', pass2: false }); pop();
    for (let i = 0; i < 40; i++) { const rr = rng(11245 + i); ell(380 + (rr() - 0.5) * 600, y0 + 60 + rr() * 200, 2 + rr() * 2, 1.6, { wash: rr() > 0.5 ? '#ffffff' : SD.crust, washA: 0.9, line: false }); }
    ell(380, y0 + 40, 360, 30, { wash: '#000000', washA: 0.12, line: false });
  }
  function hero(t) {                                                    // штрудель-«подозреваемый»: доска-тарелка, отрезанный кусок, пудра, пар, меланж, сахарница
    push(380, 1470, 1); const pl = ell(0, 20, 330, 70, { wash: '#f8f6f0', washA: 1, w: 3, col: '#5a5a62', key: 11250 }); ell(0, 20, 290, 56, { wash: '#efece4', washA: 1, w: 1.4, col: '#a8a8b0' }); pencil(ellPts(0, 20, 316, 64, 0, 1, 40).slice(2, 18), { w: 5, col: '#c8a050', a: 0.8, pass2: false }); glow(-200, 0, 40, 'rgba(255,255,255,1)', 0.7); pop();
    const bit = t > EV.hk_bite && t < S1.hook + 0.1 || t > DUR;
    strudel(330, 1450, 1.15, t, { key: 11251, steam: 1, len: 210 });
    strudelSlice(600, 1500, 0.85, t, { key: 11252, rot: 0.08 });
    melange(40, 1500, 0.9, t, {});
    push(140, 1560, 1); const sg = rect(-20, -90, 40, 90, { wash: '#e8f0f4', washA: 0.4, w: 2, col: '#6a7a8a' }); ell(0, -96, 22, 10, { wash: '#c8ccd2', washA: 1, w: 2 }); rect(-18, -60, 36, 56, { wash: '#ffffff', washA: 0.9, line: false }); pop();
    if (t < EV.hk_ghost) bubbleTag('ВЕНСКИЙ?', 430, 1230, t, EV.hk_vien, '#d9482b', 54, -0.06);
    crumbs(470, 1180, t, EV.hk_bite, 22, 11253, SD.crust);
  }
  function front(t) {                                                   // передний план: спинка стула Тонета слева, газетный держатель справа, пар
    thonet(-40, 2080, 1.9, 1); push(1080, 1250, 1.4, 0.1); pencil([[0, -400], [-40, 700]], { w: 12, col: '#5a3014' }); pop();
    motes(16, [-100, 900, 1200, 1900], '#fff4e0', t, 11260, { sp: 16, sz: 6, a: 0.25, wob: 2 });
  }
  WORLD.hook = (t, u, cat) => {
    lay(14, () => { wall(t); chandelier(320, 160, 0.9, t); chandelier(980, 120, 0.8, t); haze('#ffd8a0', 0.08); });
    lay(5, () => { vitrine(t); haze('#ffcf90', 0.06); });
    lay(3.4, () => { guests(t); haze('#ffcf90', 0.05); });
    lay(1, () => { cat(); });
    lay(0.94, () => { marble(t, 1500); hero(t); });
    lay(0.6, () => { front(t); });
  };
  const magPose = (b, t) => Object.assign(b, { x: 760, y: 1720, s: 1.2, flip: -1, look: [-0.8, 0.5], hand: [250 + Math.sin(t * 3) * 14, -300 + Math.sin(t * 2) * 10], handF: [-60, -200], prop: 'magP', propAng: -0.4, noHat: true });
  DIR.hook = {
    outfit: 'waiterS', light: { side: -1, rim: '#ffd890' }, grade: ['#ffb070', 0.1],
    act: () => [[0, 'suspicious'], [EV.hk_imp + 0.05, 'shock'], [EV.hk_vien, 'sideeye'], [EV.hk_ghost, 'suspicious'], [EV.hk_grab, 'smug'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { if (t < EV.hk_grab) return magPose(b, t); const k = sm(clamp((t - EV.hk_grab) / 0.3)), bite = t > EV.hk_bite;
      return Object.assign(b, { x: 760, y: 1720, s: 1.2, flip: -1, look: bite ? [0.2, -0.1] : [-0.6, 0.4], hand: bite ? [40, -350] : [lerp(250, 120, k), lerp(-300, -330, k)], handF: [-60, -200], prop: 'forkP', propAng: 0.2, noHat: true, tailUp: bite, squash: b.squash + (bite && t < EV.hk_bite + 0.12 ? 0.1 : 0) }); },
    cam: () => [[0, 440, 1330, 0.42], [0.7, 540, 1160, 0.18, 'x'], [EV.hk_ghost - 0.3, 660, 1000, 0.22], [EV.hk_grab, 640, 1120, 0.26], [EV.hk_bite, 650, 1040, 0.36], [S1.hook, 660, 1020, 0.42]]
  };
  // ---------------------------------------------------------------- button: тот же кадр кафе → петля в хук
  EV.bt_wink = wtw('x1', 'как');
  WORLD.button = (t, u, cat) => WORLD.hook(t, u, cat);
  DIR.button = { outfit: 'waiterS', light: { side: -1, rim: '#ffd890' }, grade: ['#ffb070', 0.1],
    act: () => [[S0.button, 'grin'], [EV.bt_wink - 0.3, 'laugh'], [EV.bt_wink, 'wink'], [DUR - 0.5, 'suspicious']],
    pose: (t, u, b) => { if (t > DUR - 0.7) return magPose(b, t); return Object.assign(b, { x: 760, y: 1720, s: 1.2, flip: -1, look: [0.4, -0.1], hand: [-120, -330], handF: [-60, -200], prop: 'forkP', propAng: 0.2, noHat: true, tailUp: true }); },
    cam: () => [[S0.button, 620, 1100, 0.22], [DUR - 0.9, 560, 1200, 0.3], [DUR - 0.1, 440, 1330, 0.42], [DUR, 440, 1330, 0.42]] };
})();
