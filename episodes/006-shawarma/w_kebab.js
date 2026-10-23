/* 006 — `kebab`: «Предок у всех один — турецкий кебаб. Сначала его жарили лёжа, как шашлык.» Двор караван-сарая XVII века: двухъярусные арки, купол и минарет
   вдали, фонтан, верблюд с тюками, купцы на коврах. На «один» над двором раскрывается свиток-«древо»: корень КЕБАБ и три ветки (тако, гирос, шаурма); на «кебаб»
   повар крутит горизонтальный вертел над углями; на «лёжа» Том-повар в халате и тюрбане сам ложится на подушки, как мясо на вертеле; на «шашлык» — шампур с кусками.
   Переход В сцену: лаваш сворачивает прошлый кадр в рулон. */
(() => {
  EV.kb_one = wtw('s1', 'один');
  EV.kb_keb = wtw('s1', 'кебаб.');
  EV.kb_lie = wtw('s1', 'лёжа,');
  EV.kb_sh = wtw('s1', 'шашлык.');
  SHAKES.push([EV.kb_lie + 0.3, 0.16, 6]);
  KEYW.push('лёжа,');

  function yard(t) { vgrad(-600, 1100, ['#f2b060', '#f8d898', '#f6e8c8']); ell(240, 260, 70, 70, { wash: '#fff0b0', washA: 1, line: false });
    push(820, 600, 1); ell(0, -120, 120, 110, { wash: '#c8b8a0', washA: 1, w: 2.4, col: '#5a4a3a' }); rect(-130, -120, 260, 240, { wash: '#d8c8a8', washA: 1, w: 2.4, col: '#5a4a3a' }); pencil([[0, -230], [0, -280]], { w: 4, col: '#d6a842' }); rect(170, -320, 40, 440, { wash: '#e8d8b8', washA: 1, w: 2, col: '#5a4a3a' }); poly([[160, -320], [190, -400], [220, -320]], { wash: '#5a7a8a', washA: 1, w: 2 }); pop();
    for (let lv = 0; lv < 2; lv++) for (let i = 0; i < 6; i++) { const x = -160 + i * 230, y = 820 + lv * 260; rect(x, y - 240, 230, 260, { wash: lv ? '#c89868' : '#d8a878', washA: 1, w: 2, col: '#5a3a1a' }); const a = blob([[x + 40, y + 20], [x + 40, y - 150], [x + 115, y - 210], [x + 190, y - 150], [x + 190, y + 20]], { wash: '#3a2414', washA: 1, w: 2, col: '#2a1408' }); for (let q = 0; q < 6; q++) pencil([[x + 10 + q * 40, y - 236], [x + 30 + q * 40, y - 236]], { w: 6, col: q % 2 ? '#a8382a' : '#f2ead6', pass2: false }); }
    // свиток-древо
    if (t > EV.kb_one - 0.1) { const k = sm(clamp((t - EV.kb_one + 0.1) / 0.5)); push(660, 420, 1); rect(-300 * k, -160, 600 * k, 340, { wash: '#f2e2b8', washA: 1, w: 3, col: '#6a4a14' }); for (const sd of [-1, 1]) ell(sd * 300 * k, 10, 20, 180, { wash: '#c8a060', washA: 1, w: 2.4, col: '#6a4a14' });
      if (k > 0.8) { pencil(spline([[0, 150], [0, 40], [-10, -20]], false, 6), { w: 10, col: '#6a4a14' }); for (const [ex, lb] of [[-200, 'ТАКО'], [0, 'ГИРОС'], [200, 'ШАУРМА']]) { pencil(spline([[0, 40], [ex * 0.5, -40], [ex, -90]], false, 6), { w: 6, col: '#6a4a14', pass2: false }); txt(lb, ex, -110, 30, { font: 'Hand', col: '#7a1a10' }); } txt('КЕБАБ', 0, 150, 40, { font: 'Osw', col: '#a8282a' }); } pop(); } }
  function people(t) { push(120, 1220, 0.9); blob([[-120, 0], [-130, -120], [-60, -200], [60, -200], [110, -150], [140, -60], [120, 0]], { wash: '#c8a060', washA: 1, w: 2.4, col: '#5a3a14' }); ell(140, -200, 40, 30, { wash: '#c8a060', washA: 1, w: 2.4, col: '#5a3a14' }); pencil([[160, -220], [200, -300], [220, -330]], { w: 22, col: '#c8a060' }); ell(230, -350, 40, 30, { wash: '#c8a060', washA: 1, w: 2.4, col: '#5a3a14' }); rect(-90, -260, 140, 80, { wash: '#7a2a5a', washA: 1, w: 2, col: '#2a0a1a' }); for (const x of [-100, 80]) pencil([[x, 0], [x, 90]], { w: 18, col: '#b8904a' }); pop();
    for (let i = 0; i < 2; i++) { const x = 380 + i * 160; rect(x - 80, 1220, 160, 30, { wash: i ? '#2a5a8a' : '#a8282a', washA: 1, w: 2, col: '#1a0a04' }); human(x, 1230, 0.7, t, { body: i ? '#3a6a4a' : '#c8a050', hair: '#2a1a0a', face: t > EV.kb_lie ? 'grin' : 'smile', armL: 'hold', armR: t > EV.kb_keb && !i ? 'point' : 'hold', seed: 610 + i, beard: true, hat: 'hood', hatCol: '#f2ead6' }); }
    human(860, 1250, 0.8, t, { body: '#5a2a1a', hair: '#1a1a1a', face: 'smile', armL: 'hold', armR: 'swing', seed: 615, beard: true, flip: -1, hat: 'hood', hatCol: '#f2ead6' }); }
  function grill(t) { hSpit(250, 1420, 0.72, t);
    if (t > EV.kb_sh - 0.1) { const k = popK(t, EV.kb_sh); push(860, 1300, k, -0.3); pencil([[-160, 0], [160, 0]], { w: 6, col: '#8a9098' }); for (let i = 0; i < 5; i++) blob([[-120 + i * 54, -24], [-96 + i * 54, -30], [-76 + i * 54, -14], [-80 + i * 54, 18], [-118 + i * 54, 22]], { wash: i % 2 ? SW.meat : '#e8c070', washA: 1, w: 2, col: '#3a1a08' }); pop(); bubbleTag('КАК ШАШЛЫК', 860, 1180, t, EV.kb_sh, '#a8282a', 34, 0.05); } }
  WORLD.kebab = (t, u, cat) => { lay(14, () => yard(t)); lay(2.6, () => people(t)); lay(1, () => { rect(-300, 1460, 1700, 600, { wash: '#c8a070', washA: 1, w: 2, col: '#5a3a14', key: 6400 }); for (let i = 0; i < 10; i++) for (let j = 0; j < 4; j++) rect(-300 + i * 180 + (j % 2) * 90, 1480 + j * 110, 180, 110, { line: true, w: 1.4, col: '#8a6a3a', a: 0.5 }); grill(t); cat(); }); };
  DIR.kebab = {
    outfit: 'ottomanA', light: { side: 1, rim: '#ffd8a0' }, grade: ['#e89040', 0.08],
    act: () => [[S0.kebab, 'talk'], [EV.kb_one, 'proud'], [EV.kb_lie, 'smug'], [EV.kb_sh, 'grin']],
    pose: (t, u, b) => { const lie = clamp((t - EV.kb_lie + 0.2) / 0.4); return Object.assign(b, { x: lerp(820, 960, lie), y: lerp(1790, 1720, lie), s: 1.1, flip: true, rot: lerp(0, -1.25, sm(lie)) * (t < EV.kb_sh + 0.6 ? 1 : 1 - clamp((t - EV.kb_sh - 0.6) / 0.3)), look: t < EV.kb_keb ? [-0.6, -0.8] : [-0.7, 0.3], hand: [140, -320], handF: [-90, -230], prop: 'knifeLongP', point: t < EV.kb_lie ? 1 : 0 }); },
    cam: () => [[S0.kebab, 560, 800, 0.12], [EV.kb_keb, 560, 1150, 0.16, 'x'], [EV.kb_lie, 700, 1350, 0.24], [S1.kebab, 700, 1330, 0.26]]
  };
  // ---------------------------------------------------------------- переход: лаваш сворачивает прошлый кадр в рулон справа налево
  TRANS_IN.kebab = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = sm(k), x = lerp(1200, -220, q); drawBuf(B, 1, 540, 960);
    scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(0, 0, Math.max(0, x), H); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
      const r = 60 + q * 120; rect(x - 10, 0, r * 2, H, { wash: SW.lav, washA: 1, w: 4, col: '#6a4a14' }); shadeG(pathOf([[x - 10, 0], [x + r * 2, 0], [x + r * 2, H], [x - 10, H]]), x + r * 2, 0, x, 0, SW.lavD, 0.6); for (let i = 0; i < 14; i++) ell(x + 20 + (i % 3) * r * 0.5, 60 + i * 140, 10, 6, { wash: '#b8803a', washA: 0.6, line: false }); });
  } };
})();
