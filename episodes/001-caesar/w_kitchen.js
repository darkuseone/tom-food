/* 001 — `kitchen`: кухня Caesar's вечером 4 июля 1924. Белый кафель, чугунная плита, медные сковороды, пустые полки, чеки заказов растут на шпильке,
   в иллюминаторах дверей давят лица толпы, за окном — салют и звёздно-полосатые флажки. «пустая» — Том заглядывает в пустую кастрюлю (кольца эха),
   повар-итальянец хватается за голову. «Так рассказывала его дочь» — въезжает фото девочки в рамке + штамп «ВЕРСИЯ».
   Переход В сцену: кухонные двери-распашонки захлопываются и распахиваются уже на кухне. */
(() => {
  EV.kt_crowd = wtw('s3', 'толпа,');
  EV.kt_empty = wtw('s3', 'пустая!');
  EV.kt_daughter = wtw('s3', 'рассказывала');
  EV.kt_stamp = wtw('s3', 'дочь.') + 0.1;
  SHAKES.push([EV.kt_stamp, 0.18, 8]);
  KEYW.push('пустая!', 'дочь.');

  function walls(t) {
    const w = rect(-400, 0, 2000, 1300, { wash: '#f2efe6', washA: 1, w: 2, col: '#3a3a3a', key: 4000 }); ctx.save(); ctx.clip(w.path);
    ctx.strokeStyle = 'rgba(150,146,136,0.55)'; ctx.lineWidth = 1.2; ctx.beginPath(); for (let j = 0; j < 30; j++) { const y = j * 44; ctx.moveTo(-400, y); ctx.lineTo(1600, y); for (let i = 0; i < 40; i++) { const x = -400 + i * 52 + (j % 2) * 26; ctx.moveTo(x, y); ctx.lineTo(x, y + 44); } } ctx.stroke();
    for (let i = 0; i < 40; i++) rect(-400 + i * 52, 820, 52, 26, { wash: i % 2 ? '#2e6a8a' : '#f2efe6', washA: 0.9, line: false }); ctx.restore();
    shadeG(w.path, 540, 1300, 540, 0, '#8a8478', 0.35);
    const win = rect(820, 220, 300, 380, { wash: '#1a2a5a', washA: 1, w: 4, col: '#2a2a2a', key: 4001 }); ctx.save(); ctx.clip(win.path); vgrad(220, 600, ['#0e1a4a', '#3a3a7a']);
    for (let i = 0; i < 3; i++) { const ph = (t * 0.7 + i * 0.37) % 1, cx = 880 + i * 90, cy = 380 - i * 30; if (ph < 0.7) for (let k = 0; k < 14; k++) { const a = k / 14 * 6.283, d = ph * 120; glow(cx + Math.cos(a) * d, cy + Math.sin(a) * d + ph * ph * 60, 14, ['rgba(255,80,60,1)', 'rgba(255,255,255,1)', 'rgba(80,140,255,1)'][i], 1 - ph); } }
    ctx.restore(); pencil([[970, 220], [970, 600]], { w: 5, col: '#2a2a2a' }); pencil([[820, 410], [1120, 410]], { w: 5, col: '#2a2a2a' });
    pencil(spline([[780, 200], [880, 250], [970, 200], [1060, 250], [1160, 200]], false, 8), { w: 3, col: '#3a3a3a', pass2: false }); for (let i = 0; i < 8; i++) { const x = 800 + i * 46, y = 214 + Math.abs(Math.sin(i * 1.57)) * 30; poly([[x - 16, y], [x + 16, y], [x, y + 34]], { wash: ['#c8302a', '#f6f2e8', '#2a4a9a'][i % 3], washA: 1, w: 1.4, col: '#2a2a2a' }); }
    push(700, 300, 1, 0.03); rect(-70, -90, 140, 170, { wash: '#f8f4ea', washA: 1, w: 2.2, col: '#3a3a3a' }); rect(-70, -90, 140, 40, { wash: '#c8302a', washA: 1, w: 2, col: '#3a3a3a' }); txt('JULY', 0, -70, 28, { font: 'Osw', col: '#fff' }); txt('4', 0, 20, 96, { font: 'Osw', col: '#2a2a2a' }); pop();
  }
  function stove(t) {                                                  // чугунная плита: конфорки, пар, медные сковороды над ней
    const s = rect(-200, 900, 640, 330, { wash: '#2a2a2e', washA: 1, w: 3, col: '#000', key: 4010 }); metalG(s.path, 100, 920, 500, '#5a5a62', '#2a2a2e', '#0a0a0c'); for (const x of [-120, 60, 240]) { rect(x - 60, 1040, 120, 120, { wash: '#1a1a1e', washA: 1, w: 2.2, col: '#000' }); pencil([[x - 40, 1100], [x + 40, 1100]], { w: 6, col: '#c99636' }); }
    rect(-220, 880, 680, 30, { wash: '#3a3a40', washA: 1, w: 2.4, col: '#000' }); for (const [x, c] of [[-90, '#b8692e'], [120, '#8a8e96'], [320, '#b8692e']]) { push(x, 880, 1); const p = rect(-70, -120, 140, 120, { wash: c, washA: 1, w: 2.4, col: '#2a1408' }); metalG(p.path, -30, -80, 120, '#ffd0a0', c, '#3a1a08'); rect(-80, -130, 160, 16, { wash: c, washA: 1, w: 2, col: '#2a1408' }); pop();
      for (let i = 0; i < 3; i++) { const k = ((t * 0.5 + i * 0.33 + x * 0.001) % 1); ell(x + Math.sin(t * 2 + i) * 20, 740 - k * 260, 40 + k * 50, 30 + k * 30, { wash: '#ffffff', washA: 0.35 * (1 - k), line: false }); } }
    pencil([[-240, 380], [460, 380]], { w: 8, col: '#4a4a4a' }); for (let i = 0; i < 6; i++) { const x = -200 + i * 120, sw = Math.sin(t * 1.5 + i) * 0.05; push(x, 380, 1, sw); pencil([[0, 0], [0, 40]], { w: 3, col: '#4a4a4a', pass2: false }); const p = ell(0, 110, 50, 50, { wash: '#b8692e', washA: 1, w: 2.2, col: '#3a1408' }); metalG(p.path, -16, 90, 60, '#ffd0a0', '#b8692e', '#3a1a08'); pencil([[0, 60], [0, 40]], { w: 10, col: '#3a1408' }); pop(); }
  }
  function shelves(t) { for (const y of [560, 720]) { rect(-260, y, 520, 18, { wash: '#8a5a2a', washA: 1, w: 2, col: '#2a1408' }); } push(-160, 560, 1); egg(0, -40, 0.7, 0.2); pop(); push(120, 720, 1); poly([[-30, 0], [30, 0], [24, -70], [-24, -70]], { wash: '#e8e0c8', washA: 1, w: 2 }); txt('SAL', 0, -32, 20, { font: 'Osw', col: '#5a3a1a' }); pop();
    if (t > EV.kt_empty) for (let i = 0; i < 3; i++) { const k = clamp((t - EV.kt_empty - i * 0.1) / 0.5); if (k > 0 && k < 1) { txt('?', -100 + i * 90, 520 - k * 60, 70, { col: '#d9482b', a: 1 - k, font: 'Osw' }); } } }
  function doors(t) {                                                  // распашные двери в зал: давят лица толпы
    const pr = t > EV.kt_crowd ? Math.abs(Math.sin(t * 9)) * 10 : 0;
    for (const sd of [-1, 1]) { push(1000 + sd * 110, 1240, 1); const d = rect(-110 + sd * pr * 0.5, -620, 220, 620, { wash: '#6a3a1a', washA: 1, w: 3, col: '#1a0a04', key: 4020 + sd }); shadeG(d.path, 0, -620, 0, 0, '#2a1006', 0.3);
      ell(0, -430, 64, 64, { wash: '#f6d090', washA: 1, w: 4, col: '#1a0a04' }); if (t > EV.kt_crowd - 0.2) { const r = rng(4030 + sd); for (let i = 0; i < 2; i++) { const fx = (i - 0.5) * 50, fy = -430 + (r() - 0.5) * 20; ell(fx, fy, 26, 30, { wash: '#e2b48e', washA: 1, w: 1.6, col: '#3a1a08' }); ell(fx - 8, fy - 6, 4, 5, { wash: '#1a1a1a', washA: 1, line: false }); ell(fx + 8, fy - 6, 4, 5, { wash: '#1a1a1a', washA: 1, line: false }); ell(fx, fy + 14, 8, 6, { wash: '#5a1a10', washA: 1, line: false }); } } pop(); }
    if (t > EV.kt_crowd) for (let i = 0; i < 3; i++) bubbleTag(['ДВА ЦЕЗАРЯ!', 'ЕСТЬ ХОЧУ!', 'ГДЕ ЕДА?!'][i], 940 + (i % 2) * 100, 520 - i * 90, t, EV.kt_crowd + i * 0.25, ['#2b2622', '#6b7a2e', '#b8733a'][i], 32, (i - 1) * 0.08);
  }
  function chef(t) { const panic = t > EV.kt_empty - 0.1; human(140, 1330, 1.05, t, { body: '#f6f2e8', legs: '#2a2a2a', hair: '#1a1a1a', face: panic ? 'shock' : 'calm', armL: panic ? 'up' : 'hold', armR: panic ? 'up' : 'hold', seed: 90 }); stache(140, 1330, 1.05); hat20(140, 1330, 1.05, 'chef');
    if (panic) { for (const sd of [-1, 1]) for (let i = 0; i < 3; i++) pencil([[140 + sd * (110 + i * 14), 960 - i * 30], [140 + sd * (140 + i * 18), 940 - i * 34]], { w: 3, col: '#2b2622', a: 0.7, pass2: false }); } }
  function pot(t) { push(840, 1420, 0.8); const p = shape(spline([[-170, -170], [-160, 0], [-110, 40], [110, 40], [160, 0], [170, -170]], false, 6).concat([[170, -170]]), { wash: '#8a8e96', washA: 1, w: 3, col: '#2a2a2a', key: 4040 }); metalG(p.path, -60, -100, 200, '#e8ecf0', '#8a8e96', '#2a2e34');
    ell(0, -170, 170, 36, { wash: '#1a1c20', washA: 1, w: 3, col: '#2a2a2a' }); for (const sd of [-1, 1]) pencil([[sd * 170, -150], [sd * 210, -150], [sd * 210, -110], [sd * 168, -110]], { w: 10, col: '#4a4e56' }); pop();
    if (t > EV.kt_empty) for (let i = 0; i < 4; i++) { const k = ((t - EV.kt_empty) * 1.2 + i * 0.25) % 1; pencil(ellPts(840, 1284, 60 + k * 300, 14 + k * 70, 0, 0.05, 40), { w: 3, col: '#e8b53a', a: (1 - k) * 0.8, pass2: false, gap: false }); } }
  function photo(t) { if (t < EV.kt_daughter - 0.1) return; const k = sm(clamp((t - EV.kt_daughter + 0.1) / 0.35)); push(lerp(1400, 300, k), 520, 1, -0.08 + (1 - k) * 0.4);
    rect(-150, -190, 300, 380, { wash: '#c99636', washA: 1, w: 3, col: '#4a2a08' }); rect(-120, -160, 240, 320, { wash: '#d8ccb0', washA: 1, w: 2, col: '#4a2a08' }); ctx.save(); ctx.filter = 'sepia(0.8)'; human(0, 160, 0.82, t, { body: '#e8a0a8', long: 1, hair: '#3a2a1a', face: 'smile', armL: 'hold', armR: 'hold', seed: 95 }); const hy = 160 - 284 * 0.82; blob([[-40, hy - 10], [-50, hy + 70], [-30, hy + 90], [-36, hy + 10]], { wash: '#3a2a1a', washA: 1, w: 1.4 }); blob([[40, hy - 10], [50, hy + 70], [30, hy + 90], [36, hy + 10]], { wash: '#3a2a1a', washA: 1, w: 1.4 }); for (const sd of [-1, 1]) poly([[0, hy - 44], [sd * 30, hy - 60], [sd * 30, hy - 28]], { wash: '#f6f2e8', washA: 1, w: 1.4 }); ctx.restore();
    txt('Роза Кардини', 0, 200, 32, { font: 'Hand', col: '#2b2622' });
    if (t > EV.kt_stamp) { const kk = popK(t, EV.kt_stamp, 0.25); push(40, 40, 1.6 - 0.6 * kk, -0.25); ctx.save(); ctx.globalAlpha = 0.9; ctx.strokeStyle = '#d9482b'; ctx.lineWidth = 8; ctx.strokeRect(-150, -46, 300, 92); ctx.restore(); txt('ВЕРСИЯ', 0, 4, 64, { font: 'Osw', col: '#d9482b', a: 0.92 }); pop(); }
    pop(); }
  WORLD.kitchen = (t, u, cat) => {
    lay(12, () => walls(t)); lay(6, () => { stove(t); shelves(t); haze('#fff0d0', 0.05); });
    lay(2.6, () => { doors(t); chef(t); });
    lay(1.3, () => { const f = poly([[-500, 1300], [1700, 1300], [1700, 2400], [-500, 2400]], { wash: '#d8d0c0', washA: 1, w: 2, col: '#3a3a3a', key: 4050 }); ctx.save(); ctx.clip(f.path); for (let i = -20; i < 30; i++) pencil([[540 + i * 80, 1300], [540 + i * 160, 2400]], { w: 1.4, col: '#8a8478', a: 0.5, pass2: false, gap: false }); ctx.restore(); });
    lay(1, () => { cat(); pot(t); });
    lay(0.7, () => photo(t));
  };
  DIR.kitchen = {
    outfit: 'waiter', light: { side: 1, rim: '#fff4dc' }, grade: ['#ffd0a0', 0.08],
    act: () => [[S0.kitchen, 'talk'], [EV.kt_crowd, 'scared'], [EV.kt_empty, 'shock'], [EV.kt_daughter, 'suspicious'], [EV.kt_stamp, 'wink']],
    pose: (t, u, b) => { const peek = t > EV.kt_empty - 0.2 && t < EV.kt_daughter; return Object.assign(b, { x: 560, y: 1600, s: 1.12, tilt: peek ? 0.22 : 0, look: peek ? [0.6, 0.9] : t > EV.kt_daughter ? [-0.7, -0.5] : [0.8, -0.2], hand: peek ? [130, -180] : [90, -160], handF: [-90, -150], sweat: t > EV.kt_crowd && t < EV.kt_daughter }); },
    cam: () => [[S0.kitchen, 640, 900, 0.18], [EV.kt_crowd, 760, 880, 0.16], [EV.kt_empty, 700, 1000, 0.24], [EV.kt_daughter, 520, 880, 0.14], [S1.kitchen, 480, 860, 0.2]]
  };
  // ---------------------------------------------------------------- переход: двери-распашонки хлопают и распахиваются
  TRANS_IN.kitchen = { a: 0.25, b: 0.4, runA: 1, fx(k, t, A, B) {
    const c = k < 0.4 ? sm(k / 0.4) : 1 - sm((k - 0.4) / 0.6); drawBuf(k < 0.4 ? A : B, 1, 540, 960);
    scr(() => { for (const sd of [-1, 1]) { const w = 540 * c, x0 = sd < 0 ? 0 : 1080 - w; if (w < 2) continue; const d = rect(x0, 0, w, 1920, { wash: '#6a3a1a', washA: 1, w: 4, col: '#1a0a04' }); shadeG(d.path, sd < 0 ? x0 + w : x0, 0, sd < 0 ? x0 : x0 + w, 0, '#2a1006', 0.5);
      ell(sd < 0 ? x0 + w * 0.5 : x0 + w * 0.5, 700, Math.max(4, 120 * c), 120, { wash: '#f6d090', washA: 1, w: 6, col: '#1a0a04' }); pencil([[sd < 0 ? x0 + w - 10 : x0 + 10, 0], [sd < 0 ? x0 + w - 10 : x0 + 10, 1920]], { w: 6, col: '#c99636' }); } });
  } };
})();
