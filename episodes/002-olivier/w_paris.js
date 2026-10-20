/* 002 — `paris`: «А „русский салат“ в Париже напечатали ещё в тысяча восемьсот пятьдесят шестом!» Кухня парижского дома 1856 года: стена медных
   кастрюль, плита с вытяжкой, окно на цинковые крыши с трубами и башнями Нотр-Дама (Эйфелевой башни ещё нет — честно). Два шефа в колпаках (Дюбуа и Бернар)
   выкладывают «salade russe» горкой с розовой свёклой; на пюпитре — толстая книга «LA CUISINE CLASSIQUE · 1856», страница «Salade russe» с гравюрой.
   Том-повар тычет в дату — ценник «1856 — РАНЬШЕ ОЛИВЬЕ?». Переход В сцену: скалка раскатывает новый кадр поверх старого. */
(() => {
  EV.pa_rus = wtw('s8', '«русский');
  EV.pa_paris = wtw('s8', 'Париже');
  EV.pa_year = wtw('s8', 'тысяча');
  KEYW.push('«русский', 'Париже', 'шестом!');

  function roofs(t) {                                                   // окно: цинковые крыши, трубы, башни Нотр-Дама, голуби
    vgrad(-200, 900, ['#9ab8d8', '#c8d8e8', '#f0e4c8']); glow(800, 200, 300, 'rgba(255,240,200,1)', 0.5);
    push(300, 760, 1); for (const x of [-60, 60]) { rect(x - 40, -380, 80, 380, { wash: '#b8ac98', washA: 1, w: 2, col: '#4a4030' }); for (let k = 0; k < 4; k++) rect(x - 24, -340 + k * 80, 16, 40, { wash: '#4a4030', washA: 0.7, line: false }); } rect(-110, -200, 220, 200, { wash: '#c8bca8', washA: 1, w: 2, col: '#4a4030' }); ell(0, -130, 40, 40, { wash: '#8a7a9a', washA: 1, w: 2 }); pop();
    for (let i = 0; i < 6; i++) { const x = -60 + i * 200, h = 120 + (i % 3) * 40; poly([[x, 900], [x + 30, 900 - h], [x + 170, 900 - h], [x + 200, 900]], { wash: '#7a8a9a', washA: 1, w: 2, col: '#2a3440' }); for (let k = 0; k < 3; k++) rect(x + 50 + k * 40, 900 - h - 50, 18, 50, { wash: '#b86a4a', washA: 1, w: 1.6, col: '#3a1a0a' }); rect(x + 70, 900 - h + 30, 40, 36, { wash: '#f4e6b0', washA: 0.9, w: 1.4 }); }
    for (let i = 0; i < 3; i++) { const x = ((t * 60 + i * 300) % 1200) - 100, y = 300 + i * 60 + Math.sin(t * 4 + i) * 10; pencil([[x - 14, y], [x, y + 6], [x + 14, y]], { w: 3, col: '#3a3a4a', pass2: false }); }
  }
  function wall(t) {                                                    // кирпич, окно, стена медных кастрюль, плита
    vgrad(-500, 1500, ['#c8a07a', '#b88a62', '#9a6a44']); for (let y = -100; y < 1300; y += 50) for (let x = -400; x < 1500; x += 110) rect(x + (y / 50 % 2) * 55, y, 110, 50, { wash: '#c88a62', washA: 0.5, w: 1, col: '#6a3a1a', a: 0.35 });
    const w = rect(80, 120, 420, 640, { wash: '#9ab8d8', washA: 1, w: 6, col: '#3a2410', key: 9500 }); ctx.save(); ctx.clip(w.path); roofs(t); ctx.restore(); pencil([[290, 120], [290, 760]], { w: 10, col: '#3a2410' }); pencil([[80, 440], [500, 440]], { w: 8, col: '#3a2410' });
    for (let r = 0; r < 3; r++) for (let i = 0; i < 4; i++) { const x = 620 + i * 130 + (r % 2) * 40, y = 220 + r * 170, R = 46 + ((i + r) % 3) * 10; pencil([[x, y - R - 30], [x, y - R]], { w: 3, col: '#3a2410', pass2: false });
      const p = ell(x, y, R, R, { wash: '#c87a3a', washA: 1, w: 2.4, col: '#4a2008', key: 9510 + r * 4 + i }); metalG(p.path, x - R * 0.3, y - R * 0.3, R * 1.3, '#ffe0a8', '#c87a3a', '#6a3008'); pencil([[x + R, y], [x + R + 50, y + 10]], { w: 8, col: '#6a3008' }); }
    rect(-300, 820, 1700, 26, { wash: '#6a4a2a', washA: 1, w: 2, col: '#2a1408' });
  }
  function chefs(t) {                                                   // Дюбуа и Бернар выкладывают salade russe
    for (const [x, f, sd] of [[260, 1, 1], [640, -1, 2]]) { human(x, 1300, 1.0, t, { body: '#f8f5ee', legs: '#3a3a4a', hair: sd % 2 ? '#3a2a1a' : '#8a6a3a', face: t > EV.pa_year ? 'grin' : 'calm', armL: 'hold', armR: sd % 2 ? 'hold' : 'point', look: 0.4 * f, seed: 160 + sd, flip: f }); hat20(x, 1300, 1.0, 'chef', '#fff', f); stache(x, 1300, 1.0, f); }
    push(450, 1180, 0.8); ell(0, 0, 220, 40, { wash: '#f6f4ee', washA: 1, w: 2.4, col: '#4a4a4a' }); const m = blob([[-180, -6], [-160, -110], [-80, -170], [80, -170], [160, -110], [180, -6]], { wash: OL.mayo, washA: 1, w: 2.4, col: '#8a7a4a', key: 9520 }); shadeG(m.path, 160, 0, -60, 0, '#c8b88a', 0.35);
    const r = rng(9521); for (let i = 0; i < 22; i++) { const xx = (r() - 0.5) * 300, yy = -30 - r() * 120; cube(xx, yy, 1.5, i % 3 === 0 ? '#c83a5a' : i % 3 === 1 ? OL.pot : OL.pick, i % 3 === 0 ? '#5a0a1a' : i % 3 === 1 ? OL.potD : OL.pickD, r(), 9530 + i); }
    for (let i = 0; i < 5; i++) { push(-140 + i * 70, -140 - Math.sin(i / 4 * 3.14) * 40, 0.6, 0); blob([[-20, 0], [0, -26], [20, 0], [0, 10]], { wash: '#c8c4bc', washA: 1, w: 1.4, col: '#4a4a4a' }); pop(); } pop();
  }
  function lectern(t) {                                                 // пюпитр с «La Cuisine Classique · 1856»
    push(330, 1500, 1, -0.04); pencil([[0, 0], [0, 260]], { w: 16, col: '#4a2a12' }); poly([[-260, -40], [260, -40], [230, 40], [-230, 40]], { wash: '#5a3418', washA: 1, w: 2.4, col: '#1a0a04' });
    rect(-250, -240, 500, 220, { wash: '#3a1a10', washA: 1, w: 3, col: '#140604' }); rect(-236, -232, 230, 204, { wash: '#f2e6c8', washA: 1, w: 1.6, col: '#6a5232' }); rect(6, -232, 230, 204, { wash: '#efe2c0', washA: 1, w: 1.6, col: '#6a5232' });
    txt('LA CUISINE', -121, -204, 24, { font: 'Osw', col: '#3a1a10' }); txt('CLASSIQUE', -121, -176, 24, { font: 'Osw', col: '#3a1a10' }); txt('Dubois & Bernard', -121, -140, 22, { font: 'Hand', col: '#4a3a2a' });
    const yk = popK(t, EV.pa_year, 0.35); push(-121, -80, 1 + 0.25 * yk); txt('1856', 0, 0, 52, { font: 'Osw', col: t > EV.pa_year ? '#d9482b' : '#3a1a10' }); pop();
    txt('Salade russe', 121, -200, 30, { font: 'Hand', col: '#5a1a08' }); push(121, -110, 0.4); blob([[-120, 0], [-100, -70], [0, -110], [100, -70], [120, 0]], { wash: '#e8dcc0', washA: 1, w: 2, col: '#3a2a1a', shade: { gap: 6, a: 0.4, col: '#3a2a1a', ang: 0.8 } }); pop();
    for (let i = 0; i < 3; i++) rect(30, -70 + i * 14, 180 - i * 30, 6, { wash: '#4a3a2a', washA: 0.5, line: false }); pop();
    if (t > EV.pa_year + 0.4) bubbleTag('РАНЬШЕ «ЭРМИТАЖА»?', 400, 1130, t, EV.pa_year + 0.5, '#d9482b', 44, -0.04);
  }
  WORLD.paris = (t, u, cat) => {
    lay(12, () => { wall(t); haze('#ffe0b0', 0.05); }); lay(3.4, () => { chefs(t); haze('#ffe0b0', 0.03); });
    lay(1, () => { cat(); });
    lay(0.88, () => { const tb = rect(-300, 1560, 1700, 700, { wash: '#a8784a', washA: 1, w: 3, col: '#3a1a08', key: 9540 }); hatch(tb.path, tb.bb, { gap: 14, a: 0.18, col: '#3a1a08', ang: 0.02, key: 9541 }); lectern(t); for (let i = 0; i < 3; i++) { push(130 + i * 90, 1640, 1); ell(0, 0, 30, 24, { wash: i === 1 ? '#8a1a3a' : '#e0c890', washA: 1, w: 2, col: '#3a1a0a' }); pop(); } });
  };
  DIR.paris = {
    outfit: 'chefO', light: { side: 1, rim: '#fff0d0' }, grade: ['#ffd090', 0.1],
    act: () => [[S0.paris, 'sideeye'], [EV.pa_rus, 'suspicious'], [EV.pa_paris, 'awe'], [EV.pa_year, 'shock'], [EV.pa_year + 0.8, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 820, y: 1680, s: 1.08, flip: -1, look: t < EV.pa_year ? [0.3, -0.4] : [0.8, 0.5], hand: t > EV.pa_year ? [230, -260] : [120, -200], handF: [-120, -330], point: t > EV.pa_year ? 1 : undefined }),
    cam: () => [[S0.paris, 460, 760, 0.2], [S0.paris + 0.9, 540, 1200, 0.12, 'x'], [EV.pa_year, 480, 1300, 0.2], [S1.paris, 480, 1320, 0.26]]
  };
  // ---------------------------------------------------------------- переход: скалка раскатывает новый кадр сверху вниз
  TRANS_IN.paris = { a: 0.2, b: 0.5, runA: 0.5, fx(k, t, A, B) {
    const y = lerp(-120, 2060, sm(k)); drawBuf(A, 1, 540, 960);
    const P = new Path2D(); P.rect(0, 0, W, Math.max(0, y)); inPath(P, () => drawBuf(B, 1, 540, 960, 1, null, 0, (1 - k) * -80));
    scr(() => { ctx.save(); ctx.globalAlpha = 0.5; ctx.fillStyle = '#f4ead0'; ctx.fillRect(0, y - 90, W, 60); ctx.restore(); const r = rect(-40, y - 70, 1160, 140, { wash: '#d8a868', washA: 1, w: 4, col: '#4a2a10' }); shadeG(r.path, 0, y + 70, 0, y - 70, '#6a3a10', 0.5); for (let i = 0; i < 10; i++) pencil([[i * 120 + (k * 900) % 120, y - 60], [i * 120 + 20 + (k * 900) % 120, y + 60]], { w: 2, col: '#8a5a20', a: 0.5, pass2: false });
      for (const sd of [-1, 1]) { push(sd < 0 ? -40 : 1120, y, 1); rect(sd < 0 ? -120 : 0, -30, 120, 60, { wash: '#a8743a', washA: 1, w: 3, col: '#3a1a08' }); pop(); } });
  } };
})();
