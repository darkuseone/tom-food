/* 002 — `nikolai`: «Рецепт он не записал. А в справочнике шестьдесят восьмого — вообще Николай Оливье, управляющий.» Контора-архив 1868 года:
   стеллажи гроссбухов до потолка, газовый рожок, конторка, счёты, архивариус-старичок на лестнице. «не записал» — Том листает пустую тетрадь рецептов, листы пустые,
   с пера капает клякса. «справочнике» — гигантский адрес-календарь бухается на конторку; под лупой строка «Оливье Николай — управляющій гостиницы „Эрмитажъ“»
   загорается томатом, рядом «Люсьен?» с вопросом. Переход В сцену: скатерть сдёргивают — под ней архив. */
(() => {
  EV.nk_none = wtw('s7', 'записал.');
  EV.nk_book = wtw('s7', 'справочнике');
  EV.nk_nik = wtw('s7', 'Николай');
  EV.nk_mgr = wtw('s7', 'управляющий.');
  SHAKES.push([EV.nk_book + 0.2, 0.2, 10]);
  KEYW.push('справочнике', 'Николай');

  function archive(t) {                                                 // стеллажи гроссбухов, лестница, окно-полукруг
    vgrad(-600, 1500, ['#1e1610', '#3a2a1a', '#4a3420']);
    for (let c = 0; c < 6; c++) { const x = -260 + c * 300; rect(x, -100, 280, 1300, { wash: '#5a3a1e', washA: 1, w: 2.4, col: '#1a0a04' });
      for (let r = 0; r < 8; r++) { const y = -60 + r * 150; rect(x, y + 120, 280, 16, { wash: '#7a5028', washA: 1, w: 1.6, col: '#1a0a04' }); const rr = rng(9000 + c * 10 + r);
        for (let b = 0; b < 9; b++) { const h = 80 + rr() * 34; rect(x + 8 + b * 30, y + 120 - h, 26, h, { wash: ['#6a2a1a', '#2a3a4a', '#4a3a1a', '#3a4a2a', '#7a5a2a'][Math.floor(rr() * 5)], washA: 1, w: 1.2, col: '#140a04', a: 0.8 }); pencil([[x + 10 + b * 30, y + 100 - h * 0.5], [x + 30 + b * 30, y + 100 - h * 0.5]], { w: 2, col: '#c8a050', a: 0.6, pass2: false }); } } }
    if (0) { push(540, 200, 1); const w = shape(spline([[-140, 260], [-140, 40], [0, -80], [140, 40], [140, 260]], true, 6), { wash: '#8ab0d0', washA: 1, w: 4, col: '#2a1a0a' }); ctx.save(); ctx.clip(w.path); vgrad(-80, 260, ['#c8e0f0', '#f4ead0']); motes(20, [-140, -80, 140, 260], '#ffffff', t, 9001, { sp: 30, sz: 4, a: 0.8 }); ctx.restore(); pencil([[0, -80], [0, 260]], { w: 6, col: '#2a1a0a' }); rays(0, 0, 1.9, 0.5, 900, 'rgba(255,240,200,1)', 0.15, 6, t); pop(); }
  }
  function keeper(t) { push(1060, 1100, 1); pencil([[-80, -900], [-60, 160]], { w: 10, col: '#6a4a2a' }); pencil([[80, -900], [100, 160]], { w: 10, col: '#6a4a2a' }); for (let i = 0; i < 9; i++) pencil([[-76 + i * 2, -800 + i * 110], [84 + i * 2, -800 + i * 110]], { w: 7, col: '#6a4a2a' }); pop();
    human(1060, 800, 0.85, t, { body: '#2a2a3a', legs: '#2a2a2a', hair: '#d8d8d8', beard: 'long', face: t > EV.nk_nik ? 'shock' : 'calm', armL: 'hold', armR: t > EV.nk_nik ? 'point' : 'up', prop: 'scroll', look: -0.7, seed: 141, flip: -1 }); }
  function gasJet(x, y, t) { push(x, y, 1); pencil([[-60, 0], [0, 0], [0, -40]], { w: 8, col: '#a8843a' }); const f = flick(t, 3); blob([[-12, -40], [0, -90 * f], [12, -40]], { wash: '#8ac8ff', washA: 0.8, line: false }); blob([[-8, -50], [0, -110 * f], [8, -50]], { wash: '#fff0b0', washA: 0.9, line: false }); glow(0, -70, 260, 'rgba(255,220,140,1)', 0.45); pop(); }
  function desk(t) {                                                    // конторка: пустая тетрадь, перо, счёты, справочник
    const d = poly([[-300, 1470], [1500, 1440], [1600, 2300], [-400, 2300]], { wash: '#5a3418', washA: 1, w: 3, col: '#1a0a04', key: 9020 }); hatch(d.path, d.bb, { gap: 16, a: 0.18, col: '#2a1408', ang: 0.05, key: 9021 }); glow(500, 1600, 600, 'rgba(255,210,140,1)', 0.18);
    push(160, 1560, 1, -0.05); rect(-170, -110, 340, 220, { wash: '#f4ecd8', washA: 1, w: 2.4, col: '#4a3a2a' }); pencil([[0, -110], [0, 110]], { w: 3, col: '#a89a7a', pass2: false }); txt('Рецепты', -85, -70, 32, { font: 'Hand', col: '#3a2a1a' });
    for (let i = 0; i < 5; i++) dashL([[20, -70 + i * 36], [150, -70 + i * 36]], '#c8b898', 0.5); if (t > EV.nk_none) { txt('— пусто —', 85, 10, 30, { font: 'Hand', col: '#d9482b', a: clamp((t - EV.nk_none) * 3) }); ell(-60, 50, 22 * clamp((t - EV.nk_none) * 4), 14 * clamp((t - EV.nk_none) * 4), { wash: '#141018', washA: 0.9, line: false }); } pop();
    push(360, 1500, 1, 0.6); blob([[0, 0], [-16, -80], [-4, -180], [8, -184], [14, -80]], { wash: '#f4ecd8', washA: 1, w: 1.6, col: '#6a5a3a' }); pencil([[0, 0], [4, 60]], { w: 3, col: '#2a1a0a' }); pop();
    push(1180, 1560, 1); rect(-120, -90, 240, 180, { wash: '#6a3a1a', washA: 1, w: 2.4, col: '#1a0a04' }); for (let r = 0; r < 5; r++) { pencil([[-110, -70 + r * 36], [110, -70 + r * 36]], { w: 2, col: '#c8a050', pass2: false }); for (let b = 0; b < 6; b++) ell(-90 + b * 18 + (r % 2) * 50, -70 + r * 36, 9, 11, { wash: b % 2 ? '#2a1a0a' : '#e8d8b0', washA: 1, w: 1 }); } pop();
    const kb = t < EV.nk_book - 0.25 ? 0 : clamp((t - EV.nk_book + 0.25) / 0.25); if (kb > 0) book(t, kb);
  }
  function book(t, kb) {                                                // адрес-календарь 1868: строка под лупой
    const y = lerp(-500, 1500, kb * kb); push(640, y, 1, -0.04); ell(0, 70, 330, 40, { wash: '#000', washA: 0.25, line: false });
    rect(-320, -200, 640, 280, { wash: '#4a1e14', washA: 1, w: 3, col: '#1a0604' }); rect(-300, -190, 290, 260, { wash: '#f2e6c8', washA: 1, w: 2, col: '#6a5232' }); rect(10, -190, 290, 260, { wash: '#efe2c0', washA: 1, w: 2, col: '#6a5232' });
    txt('АДРЕСЪ-КАЛЕНДАРЬ', -155, -164, 24, { font: 'Osw', col: '#4a1e14' }); txt('МОСКВА · 1868', 155, -164, 24, { font: 'Osw', col: '#4a1e14' });
    for (let i = 0; i < 9; i++) { rect(-280, -130 + i * 22, 120 + (i * 37 % 90), 7, { wash: '#4a3a2a', washA: 0.5, line: false }); rect(30, -130 + i * 22, 140 + (i * 53 % 100), 7, { wash: '#4a3a2a', washA: 0.5, line: false }); }
    if (t > EV.nk_nik - 0.1) { const k = clamp((t - EV.nk_nik + 0.1) / 0.3); ctx.save(); ctx.globalAlpha = 0.85 * k; ctx.fillStyle = '#d9482b'; ctx.fillRect(24, -46, 270 * k, 30); ctx.restore(); txt('Оливье Николай', 160, -31, 26, { font: 'Hand', col: '#1a0a04' }); }
    if (t > EV.nk_mgr) txt('управляющій гост. «Эрмитажъ»', 160, 2, 20, { font: 'Hand', col: '#4a1e14', reveal: clamp((t - EV.nk_mgr) / 0.5) });
    pop();
    if (t > EV.nk_nik + 0.3) bubbleTag('ЛЮСЬЕН?', 330, 1220, t, EV.nk_nik + 0.4, '#b8733a', 46, -0.06);
    if (t > EV.nk_mgr + 0.2) bubbleTag('УПРАВЛЯЮЩИЙ', 820, 1260, t, EV.nk_mgr + 0.3, '#d9482b', 46, 0.05);
  }
  WORLD.nikolai = (t, u, cat) => {
    lay(12, () => { archive(t); haze('#ffcf90', 0.06); }); lay(3.6, () => { keeper(t); gasJet(260, 900, t); });
    lay(1, () => { cat(); });
    lay(0.9, () => { desk(t); });
    lay(0.55, () => motes(40, [-200, 300, 1300, 1900], '#ffe8c0', t, 9030, { sp: 10, sz: 4, a: 0.45, wob: 2 }));
  };
  DIR.nikolai = {
    outfit: 'clerkA', light: { side: -1, rim: '#ffd890' }, grade: ['#e8a860', 0.12],
    act: () => [[S0.nikolai, 'suspicious'], [EV.nk_none, 'annoyed'], [EV.nk_book, 'shock'], [EV.nk_nik, 'suspicious'], [EV.nk_mgr, 'sideeye']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1660, s: 1.15, look: t < EV.nk_book ? [-0.6, 0.7] : [0.3, 0.8], hand: t > EV.nk_book ? [80, -330] : [-250, -260], handF: [-110, -260], prop: t > EV.nk_book ? 'magnifier' : undefined, propAng: -0.3 }),
    cam: () => [[S0.nikolai, 540, 800, 0.22], [S0.nikolai + 1.0, 400, 1300, 0.14, 'x'], [EV.nk_book, 560, 1300, 0.14], [EV.nk_nik, 660, 1360, 0.28], [S1.nikolai, 680, 1360, 0.34]]
  };
  // ---------------------------------------------------------------- переход: скатерть сдёргивают — под ней архив
  TRANS_IN.nikolai = { a: 0.15, b: 0.45, runA: 0, fx(k, t, A, B) {
    drawBuf(B, 1.05 - 0.05 * k, 540, 960); const dx = -Math.pow(k, 1.6) * 1500, rot = -0.12 * k;
    for (let i = 4; i >= 0; i--) drawBuf(A, 1, 540, 960, i ? 0.18 : 1, null, dx + i * 70 * k, Math.sin(k * 3) * 60, rot);
    scr(() => { for (let i = 0; i < 6; i++) pencil([[1080 + dx + i * 4, 200 + i * 300], [1080 + dx + 120 * k, 260 + i * 300]], { w: 6, col: '#f4ead0', a: 0.7 * (1 - k), pass2: false }); });
  } };
})();
