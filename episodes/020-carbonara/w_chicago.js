/* 020 — `chicago`: «Но и он не первый: двумя годами раньше рецепт напечатали… в Чикаго!» — ПОВОРОТ (~41 %).
   Чикаго, зима 1952, вечер: улица под надземкой «L» — стальные фермы над головой, кирпичные дома с пожарными лестницами, витрина итальянского ресторана с тёплым светом
   (главный свет — красно-жёлтая неоновая вывеска ARMANDO'S, второй — холодный уличный фонарь), внутри едят спагетти; машина 50-х в снегу, прохожие в пальто и шляпах,
   газетчик. Том в коричневом костюме и федоре раскрывает путеводитель VITTLES & VICE. По словам: «первый» — Том морщит лоб, «раньше» — табличка 1952 качается,
   «напечатали…» — путеводитель раскрывается, «Чикаго!» — с грохотом проносится поезд надземки, снег сыплется с ферм, вывеска вспыхивает. Переход В сцену: каретка пишущей машинки —
   кадр сдвигается рывками влево с «дзынь», строка за строкой. */
(() => {
  EV.ch_no = wtw('s5', 'Но');
  EV.ch_first = wtw('s5', 'первый:');
  EV.ch_early = wtw('s5', 'раньше');
  EV.ch_print = wtw('s5', 'напечатали…');
  EV.ch_chi = wtw('s5', 'Чикаго!');
  SHAKES.push([EV.ch_chi, 0.5, 10]);
  KEYW.push('Чикаго!');

  function skyline(t) {                                                 // дальний план: небоскрёбы 50-х в снегу, окна, прожектор
    vgrad(-400, 900, ['#0a1028', '#1a2448', '#3a4068']);
    for (let i = 0; i < 9; i++) { const x = -360 + i * 190, h = 500 + (i * 137) % 400; const b = rect(x, 700 - h, 170, h, { wash: '#1a2038', washA: 1, w: 1.2, col: '#0a0a18', key: 21100 + i }); windows(x + 12, 720 - h, 146, h - 60, 4, 10, 21110 + i, 0.45, '#ffd890', '#2a3050', 0.85);
      if (i === 4) { poly([[x + 40, 700 - h], [x + 85, 560 - h], [x + 130, 700 - h]], { wash: '#2a3050', washA: 1, w: 1.2 }); pencil([[x + 85, 560 - h], [x + 85, 480 - h]], { w: 3, col: '#5a6a8a' }); glow(x + 85, 480 - h, 20, 'rgba(255,80,80,1)', 0.4 * (Math.sin(t * 4) > 0 ? 1 : 0.2)); } }
    rays(800, 300, -1.9 + Math.sin(t * 0.4) * 0.3, 0.06, 900, 'rgba(200,220,255,1)', 0.08, 2, t);
  }
  function street(t) {                                                  // кирпичные дома с пожарными лестницами, витрина ресторана, вывеска ARMANDO'S
    for (let i = 0; i < 3; i++) { const x = -400 + i * 640, w = 620; const b = rect(x, 100, w, 1340, { wash: ['#7a3a2a', '#6a3428', '#8a4a32'][i], washA: 1, w: 2, col: '#2a0a04', key: 21120 + i });
      ctx.save(); ctx.clip(b.path); for (let y = 100; y < 1440; y += 24) for (let xx = x + ((y / 24) % 2) * 30; xx < x + w; xx += 60) rect(xx, y, 58, 22, { wash: '#8a4a36', washA: 0.25, w: 0.5, col: '#3a1a10' }); ctx.restore();
      shadeG(b.path, x, 100, x + w, 100, '#1a0a14', 0.4); windows(x + 40, 160, w - 80, 420, 4, 3, 21130 + i, 0.5, '#ffd890', '#2a2030', 0.9);
      for (let k = 0; k < 3; k++) { const fy = 200 + k * 150; rect(x + 60, fy + 100, 200, 8, { wash: '#1a1a1a', washA: 1, line: false }); for (let q = 0; q < 6; q++) pencil([[x + 60 + q * 40, fy + 100], [x + 60 + q * 40, fy + 60]], { w: 2, col: '#1a1a1a', pass2: false }); pencil([[x + 60, fy + 60], [x + 260, fy + 60]], { w: 2, col: '#1a1a1a', pass2: false }); pencil([[x + 230, fy + 100], [x + 170, fy + 250]], { w: 3, col: '#1a1a1a', pass2: false }); rect(x + 60, fy + 92, 200, 8, { wash: '#f4f4fc', washA: 0.8, line: false }); } }
    push(820, 1100, 1); const sw = rect(-300, -260, 600, 300, { wash: '#ffd890', washA: 1, w: 8, col: '#2a1a0a', key: 21140 }); ctx.save(); ctx.clip(sw.path); vgrad(-260, 40, ['#c8743a', '#ffd890']);
    for (let i = 0; i < 3; i++) { human(-200 + i * 200, 40, 0.75, t + i, { body: ['#3a3a5a', '#8a2a2a', '#5a4a3a'][i], legs: '#2a2a2a', hair: ['#1a1a1a', '#e8c060', '#5a3a1a'][i], face: t > EV.ch_chi ? 'shock' : 'grin', armL: 'hold', armR: 'hold', look: 0.2, seed: 21141 + i, long: i === 1 ? 1 : 0 }); rect(-260 + i * 200, -40, 120, 40, { wash: '#f4ecdc', washA: 1, w: 1 }); for (let q = 0; q < 6; q++) rect(-260 + i * 200 + q * 20, -40, 10, 40, { wash: '#c8241e', washA: 0.6, line: false }); carbNest(-200 + i * 200, -50, 0.18, t, { key: 21145 + i }); }
    ctx.restore(); for (let i = 0; i < 6; i++) pencil([[-300 + i * 120, -260], [-300 + i * 120, 40]], { w: 3, col: '#2a1a0a', pass2: false }); txt('Spaghetti · Steaks · Cocktails', 0, -200, 22, { font: 'Hand', col: '#7a2a0a' });
    const on = t > EV.ch_chi ? 1 : 0.55 + 0.2 * Math.sin(t * 9); push(0, -360, 1); rect(-260, -60, 520, 110, { wash: '#1a0a0a', washA: 1, w: 3, col: '#3a3a3a' }); txt("ARMANDO'S", 0, 26, 76, { font: 'Osw', col: lerpC('#5a1a1a', '#ff4a3a', on) }); pencil([[-230, 40], [230, 40]], { w: 5, col: lerpC('#5a4a1a', '#ffd040', on), pass2: false }); glow(0, 0, 300, 'rgba(255,90,60,1)', 0.28 * on); pop();
    for (let i = 0; i < 7; i++) poly([[-300 + i * 86, 60], [-214 + i * 86, 60], [-224 + i * 86, 120], [-290 + i * 86, 120]], { wash: i % 2 ? '#2a6a3a' : '#f4ecdc', washA: 1, w: 1.2, col: '#1a1a1a' }); pop();
    rect(-400, 1360, 2000, 90, { wash: '#c8ccd8', washA: 1, line: false }); for (let i = 0; i < 20; i++) ell(-400 + i * 110, 1370, 60, 14, { wash: '#f4f6fc', washA: 1, line: false });
  }
  function elTrack(t) {                                                 // надземка: стальные фермы, клёпки, снег на балках; поезд проносится на «Чикаго!»
    const beam = rect(-500, 60, 2200, 90, { wash: '#3a4250', washA: 1, w: 3, col: '#0a0e18', key: 21150 }); shadeG(beam.path, 0, 60, 0, 150, '#0a0e18', 0.5);
    for (let i = 0; i < 22; i++) { const x = -500 + i * 100; pencil([[x, 150], [x + 50, 60]], { w: 5, col: '#2a303c', pass2: false }); pencil([[x + 50, 60], [x + 100, 150]], { w: 5, col: '#2a303c', pass2: false }); ell(x + 10, 105, 3, 3, { wash: '#8a92a0', washA: 1, line: false }); }
    rect(-500, 46, 2200, 16, { wash: '#f4f6fc', washA: 1, line: false });
    const tk = t > EV.ch_chi - 0.4 ? (t - EV.ch_chi + 0.4) / 1.3 : -1; if (tk >= 0 && tk < 1.6) { const x = lerp(-1900, 1900, tk); for (let c = 0; c < 3; c++) { const cx = x + c * 520; const car = rect(cx - 250, -170, 500, 220, { wash: '#6a7a3a', washA: 1, w: 3, col: '#1a2008', key: 21151 + c }); shadeG(car.path, 0, -170, 0, 50, '#2a3010', 0.4);
      for (let w = 0; w < 6; w++) rect(cx - 230 + w * 78, -140, 60, 70, { wash: '#ffe0a0', washA: 1, w: 1.4, col: '#1a2008' }); rect(cx - 250, 20, 500, 16, { wash: '#c8a040', washA: 1, line: false }); }
      for (let i = 0; i < 6; i++) { const sx = x - 300 + i * 30; ell(sx, 60, 8, 4, { wash: '#ffd040', washA: 0.9, line: false }); } }
    for (const px of [-150, 1250]) { const p = rect(px - 30, 150, 60, 1300, { wash: '#2a303c', washA: 1, w: 2.4, col: '#0a0e18', key: 21160 + px }); shadeG(p.path, px - 30, 0, px + 30, 0, '#5a6478', 0.35); for (let y = 200; y < 1400; y += 60) { ell(px - 20, y, 3, 3, { wash: '#8a92a0', washA: 1, line: false }); ell(px + 20, y, 3, 3, { wash: '#8a92a0', washA: 1, line: false }); } }
  }
  function people(t) {                                                  // прохожие в пальто и шляпах, газетчик, машина в снегу, фонарь
    const sh = t > EV.ch_chi;
    push(300, 1300, 1); const car = blob([[-230, 0], [-240, -60], [-150, -80], [-90, -150], [90, -150], [150, -80], [240, -60], [240, 0]], { wash: '#2a4a6a', washA: 1, w: 2.4, col: '#0a1a2a', key: 21170 }); shadeG(car.path, 0, -150, 0, 0, '#8ab0d0', 0.35);
    poly([[-80, -140], [80, -140], [130, -80], [-130, -80]], { wash: '#a8c8e0', washA: 0.7, w: 1.6 }); blob([[-100, -150], [0, -170], [100, -150]], { wash: '#f4f6fc', washA: 1, line: false }); ell(-150, 0, 40, 40, { wash: '#1a1a1a', washA: 1, w: 1.6 }); ell(150, 0, 40, 40, { wash: '#1a1a1a', washA: 1, w: 1.6 }); rect(-240, -40, 480, 14, { wash: '#c8ccd4', washA: 1, w: 1 }); ell(236, -50, 12, 10, { wash: '#ffe8a0', washA: 1, w: 1 }); glow(236, -50, 50, 'rgba(255,230,160,1)', 0.3); pop();
    human(-60, 1340, 1.05, t, { body: '#3a3a4a', legs: '#2a2a2a', hair: '#1a1a1a', face: sh ? 'shock' : 'calm', armL: sh ? 'up' : 'hold', armR: 'swing', look: 0.4, seed: 21171, hat: 'merchant', hatCol: '#2a2a2a', long: 1 });
    human(1120, 1340, 1.0, t, { body: '#8a6a4a', legs: '#2a2a2a', hair: '#c84a2a', face: sh ? 'grin' : 'smile', armL: 'hold', armR: sh ? 'up' : 'hold', look: -0.4, seed: 21172, flip: -1, long: 1, hat: 'scarf', hatCol: '#c8241e' });
    human(560, 1330, 0.92, t, { body: '#5a5a4a', legs: '#3a3a3a', hair: '#5a3a1a', face: 'grin', armL: 'hold', armR: 'wave', look: 0.2, seed: 21173, hat: 'cap', hatCol: '#5a5a5a' }); push(560, 1150, 1); for (let i = 0; i < 4; i++) rect(-50 + i * 4, -20 - i * 6, 90, 14, { wash: '#f4f0e4', washA: 1, w: 1 }); txt('EXTRA', 0, -30, 16, { font: 'Osw', col: '#2a2a2a' }); pop();
    push(1000, 1360, 1); pencil([[0, 0], [0, -620]], { w: 10, col: '#1a1a1a' }); poly([[-36, -620], [36, -620], [24, -680], [-24, -680]], { wash: '#f0f4ff', washA: 1, w: 2, col: '#1a1a1a' }); glow(0, -650, 110, 'rgba(210,225,255,1)', 0.3); pop();
  }
  function rail(t) {                                                    // передний бортик: заснеженная ограда у витрины, урна, гидрант
    const r = rect(-500, 1440, 2100, 40, { wash: '#2a2a2e', washA: 1, w: 2, col: '#0a0a0a', key: 21180 }); for (let i = 0; i < 26; i++) pencil([[-500 + i * 84, 1480], [-500 + i * 84, 1700]], { w: 7, col: '#2a2a2e', pass2: false });
    const sn = blob([[-500, 1444], [-300, 1420], [0, 1426], [300, 1418], [700, 1424], [1100, 1416], [1600, 1428], [1600, 1450], [-500, 1452]], { wash: '#f4f6fc', washA: 1, w: 1.4, col: '#8a9ab8' }); shadeG(sn.path, 0, 1416, 0, 1452, '#c8d4ec', 0.4);
    rect(-500, 1480, 2100, 500, { wash: '#3a3e4a', washA: 1, line: false }); for (let i = 0; i < 9; i++) ell(-400 + i * 240, 1700, 110, 30, { wash: '#e8ecf4', washA: 0.7, line: false });
    push(1180, 1450, 1); const h = blob([[-30, 0], [-34, -90], [-20, -110], [20, -110], [34, -90], [30, 0]], { wash: '#c8241e', washA: 1, w: 2, col: '#3a0a08' }); shadeG(h.path, 34, 0, -30, 0, '#5a0808', 0.4); ell(0, -112, 28, 10, { wash: '#f4f6fc', washA: 1, line: false }); pop();
    castShadow(560, 1450, 200, 160, -0.6, 0.25);
  }
  function snow(t, n, sz, seed) { motes(n, [-300, -200, 1400, 2000], '#ffffff', t, seed, { sp: 90, vx: -30, sz, a: 0.85, wob: 6 }); }
  WORLD.chicago = (t, u, cat) => {
    lay(24, () => { skyline(t); snow(t, 30, 2, 21190); });
    lay(6, () => { street(t); haze('#2a3058', 0.06); });
    lay(3.4, () => { people(t); snow(t, 30, 3, 21191); lightPool(820, 1300, 520, 120, 'rgba(255,200,120,1)', 0.25); });
    lay(2.2, () => { elTrack(t); if (t > EV.ch_chi) motes(60, [-300, 160, 1400, 1200], '#ffffff', t, 21192, { sp: 320, vx: 40, sz: 4, a: 0.8 }); });
    lay(1, () => { cat(); rail(t); });
    lay(0.6, () => { snow(t, 26, 7, 21193); moodDark(700, 1100, 520, 1500, '#060818', 0.5); push(1320, 900, 1.6); const p = rect(-60, -900, 120, 1900, { wash: '#1e232e', washA: 1, w: 3, col: '#05070c', key: 21194 }); shadeG(p.path, -60, 0, 60, 0, '#4a5468', 0.35); for (let y = -860; y < 1000; y += 70) ell(-30, y, 4, 4, { wash: '#6a7488', washA: 1, line: false }); pop(); });
    if (t > EV.ch_early && t < S1.chicago) bubbleTag('1952 · ЧИКАГО', 520, 820, t, EV.ch_early + 0.05, '#2a4a8a', 54, -0.05);
  };
  DIR.chicago = {
    outfit: 'fedA', light: { side: 1, rim: '#ff8a6a' }, grade: ['#6a7ab8', 0.08],
    act: () => [[S0.chicago, 'suspicious'], [EV.ch_first, 'annoyed'], [EV.ch_print, 'awe'], [EV.ch_chi, 'shock'], [EV.ch_chi + 0.8, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1590, s: 1.15, flip: 1, look: t > EV.ch_chi ? [0.2, -0.9] : [0.6, 0.4], hand: t > EV.ch_print ? [190, -330] : [150, -280], handF: [-70, -230], prop: 'guideP', propAng: t > EV.ch_print ? -0.05 : -0.4, tailUp: t > EV.ch_chi, frost: t > EV.ch_chi }),
    cam: () => [[S0.chicago, 620, 1100, 0.24], [EV.ch_first, 600, 1140, 0.3, 'x'], [EV.ch_print, 620, 1160, 0.32], [EV.ch_chi, 640, 960, 0.22, 'x'], [S1.chicago, 640, 1000, 0.24]]
  };
  TRANS_IN.chicago = { a: 0.15, b: 0.55, runA: 1, fx(k, t, A, B) {      // каретка пишущей машинки: кадр едет рывками влево, «дзынь» — и строка новой сцены
    const steps = 6, q = Math.floor(k * steps) / steps + sm((k * steps) % 1) / steps * 0.6, dx = -q * W;
    drawBuf(A, 1, 540 + dx, 960); drawBuf(B, 1, 540 + dx + W, 960);
    scr(() => { ctx.fillStyle = '#2a2a2e'; ctx.fillRect(W + dx - 14, 0, 28, H); ctx.fillStyle = '#c8ccd4'; for (let y = 40; y < H; y += 120) ctx.fillRect(W + dx - 10, y, 20, 40); });
    rewTag(k, 0.8);
  } };
})();
