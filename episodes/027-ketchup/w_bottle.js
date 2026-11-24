/* 027 — `bottle` (ТОМ-МАЛЫШ, раз за ролик): «Правда, из бутылки он ползёт как улитка — сорок пять метров в час!» Внутри перевёрнутой стеклянной
   бутылки: густое рубиновое «море» кетчупа с пузырями-воздушными шарами и семечками-валунами, стенки стекла изгибаются с бликами, изнутри
   читается перевёрнутая этикетка, внизу — горлышко-туннель и свет кухни за ним (главный свет — тёплое окно кухни сквозь стекло, второй —
   красное свечение толщи). Снаружи по стеклу ползёт улитка. Том-малыш — водолаз в медном шлеме с фартуком — бредёт к горлышку, еле
   переставляя ноги. По словам: «бутылки» — Том-малыш тянется к горлышку; «улитка» — снаружи улитка обгоняет его; «сорок пять метров» —
   спидометр-табличка «45 м/ч»; «час!» — Том-малыш машет руками; пауза-гэг — улитка машет «ПОКА!», а Тома-малыша с «БЛОП!» выплёвывает
   из горлышка. Переход В сцену: восьмигранное горлышко бутылки надвигается и всасывает кадр. */
(() => {
  EV.bt_in = wtw('s3', 'бутылки');
  EV.bt_snail = wtw('s3', 'улитка');
  EV.bt_45 = wtw('s3', 'сорок');
  EV.bt_hour = wtw('s3', 'час!');
  EV.bt_blop = LE('s3') + 0.35;
  SHAKES.push([EV.bt_blop, 0.2, 9]);
  KEYW.push('улитка');

  function outside(t) {                                                   // мир снаружи стекла (размыто): кухня, окно, лампа
    vgrad(-500, 1600, ['#f4d8b0', '#e8b888', '#c8885a']); push(780, 320, 1); rect(-220, -200, 440, 400, { wash: '#bfe0f0', washA: 0.8, w: 6, col: '#8a6a4a' }); pencil([[0, -200], [0, 200]], { w: 5, col: '#8a6a4a', pass2: false }); glow(0, 0, 360, 'rgba(255,245,210,1)', 0.3); pop();
    for (let i = 0; i < 5; i++) ell(-100 + i * 300, 1200, 120, 60, { wash: ['#f8f4ec', '#4a7a3a', '#e8c070'][i % 3], washA: 0.5, line: false });
  }
  function ketchupSea(t) {                                                // толща кетчупа: градиент, пузыри, семечки, слои-волны, перевёрнутая этикетка
    vgrad(200, 2000, ['#e83a24', '#b8180e', '#7a0806']);
    for (let i = 0; i < 9; i++) { const y = 360 + i * 160, x = ((t * 6 + i * 190) % 1600) - 300; pencil(spline([[x - 300, y], [x, y - 30], [x + 300, y]], false, 8), { w: 10, col: '#f05a3a', a: 0.25, pass2: false }); }
    const r = rng(27400); for (let i = 0; i < 18; i++) { const x = -200 + r() * 1500, y0 = 300 + r() * 1300, ph = (t * 0.06 + r()) % 1, y = y0 - ph * 200; const b = ell(x, y, 26 + r() * 30, 26 + r() * 30, { wash: '#ff8a6a', washA: 0.35, w: 2, col: '#ffb8a0' }); ell(x - 8, y - 10, 8, 5, { wash: '#ffffff', washA: 0.7, line: false }); }
    for (let i = 0; i < 12; i++) { const x = -150 + r() * 1400, y = 900 + r() * 700; ell(x, y, 14, 9, { rot: r() * 3, wash: '#f8e8a0', washA: 0.9, w: 1.4, col: '#a87a2a' }); }
    push(540, 700, 1, 3.14); ell(0, 0, 300, 200, { wash: '#f8f0dc', washA: 0.25, w: 3, col: '#f8f0dc' }); txt('KETCHUP', 0, 20, 110, { font: 'Osw', col: '#f8f0dc', a: 0.35 }); pop();
  }
  function glass(t) {                                                     // стенки бутылки с бликами и горлышко-туннель внизу справа
    for (const sd of [-1, 1]) { const x = 540 + sd * 640; pencil(spline([[x, -400], [x - sd * 60, 600], [x - sd * 120, 1500], [x - sd * 380, 1900]], false, 10), { w: 60, col: '#f8fcff', a: 0.25, pass2: false }); pencil(spline([[x - sd * 40, -300], [x - sd * 90, 600], [x - sd * 150, 1400]], false, 10), { w: 10, col: '#ffffff', a: 0.55, pass2: false }); }
    push(960, 1560, 1); const n = ell(0, 0, 170, 120, { wash: '#ffe8c0', washA: 0.85, w: 10, col: '#f8fcff' }); glow(0, 0, 220, 'rgba(255,240,200,1)', 0.3); for (let i = 0; i < 3; i++) pencil(ellPts(0, 0, 150 - i * 30, 100 - i * 20, 0, 0, 30), { w: 3, col: '#ffffff', a: 0.4, pass2: false }); pop();
  }
  function snail(t) {                                                     // улитка снаружи по стеклу — обгоняет, машет «ПОКА!»
    const k = clamp((t - EV.bt_snail + 0.4) / (EV.bt_blop - EV.bt_snail + 0.6)), x = lerp(-120, 860, k), y = lerp(1200, 1300, k);
    push(x, y, 1.1); const b = blob([[-90, 0], [-60, -20], [40, -16], [90, -30], [100, -10], [80, 6], [-80, 8]], { wash: '#d8c8a0', washA: 0.9, w: 2.4, col: '#5a4a2a', key: 27410 });
    const sh = ell(-10, -60, 60, 56, { wash: '#c8823a', washA: 1, w: 2.4, col: '#4a2a10' }); pencil(spline([[-10, -60], [20, -70], [10, -100], [-30, -90], [-40, -50], [0, -30], [40, -60]], false, 6), { w: 3, col: '#6a3a10', pass2: false });
    pencil([[84, -26], [96, -70]], { w: 3, col: '#5a4a2a', pass2: false }); pencil([[92, -24], [114, -64]], { w: 3, col: '#5a4a2a', pass2: false }); ell(96, -72, 5, 5, { wash: '#1a1a1a', washA: 1, line: false }); ell(114, -66, 5, 5, { wash: '#1a1a1a', washA: 1, line: false });
    pencil(spline([[60, 4], [80, 14], [96, 4]], false, 3), { w: 2, col: '#3a2a1a', pass2: false });
    if (t > EV.bt_hour + 0.2) { push(60, -170, popK(t, EV.bt_hour + 0.2, 0.3)); rect(-70, -34, 140, 60, { wash: '#fbf4e4', washA: 1, w: 2, col: '#2a2a2a' }); txt('ПОКА!', 0, 10, 36, { font: 'Osw', col: '#c8201a' }); pop(); }
    pencil([[-90, 4], [-300, 10]], { w: 6, col: '#e8f0f8', a: 0.5, pass2: false });
    pop();
  }
  function speed(t) {                                                     // спидометр-табличка 45 м/ч (на стекле)
    if (t < EV.bt_45 - 0.1) return; const k = popK(t, EV.bt_45 - 0.1, 0.35); push(640, 1000, k, 0.05); ell(0, 0, 120, 120, { wash: '#f8f4ec', washA: 1, w: 5, col: '#2a2a2a' }); for (let i = 0; i <= 8; i++) { const a = 3.6 + i * 0.27; pencil([[Math.cos(a) * 100, Math.sin(a) * 100], [Math.cos(a) * 84, Math.sin(a) * 84]], { w: 3, col: '#2a2a2a', pass2: false }); }
    const na = 3.65 + Math.sin(t * 2) * 0.02; pencil([[0, 0], [Math.cos(na) * 90, Math.sin(na) * 90]], { w: 6, col: '#c8201a', pass2: false }); ell(0, 0, 12, 12, { wash: '#2a2a2a', washA: 1, line: false }); txt('45 м/ч', 0, 70, 36, { font: 'Osw', col: '#c8201a' }); hudBox('спидометр', -120, -120, 120, 120); pop();
  }
  WORLD.bottle = (t, u, cat) => {
    lay(8, () => { outside(t); });
    lay(1.6, () => { ketchupSea(t); });
    lay(1, () => { lightPool(560, 1300, 600, 120, 'rgba(255,200,170,1)', 0.25); cat(); castShadow(500, 1300, 200, 60, 0.4, 0.2); speed(t);
      if (t > EV.bt_blop) { push(960, 1480, popK(t, EV.bt_blop, 0.3)); txt('БЛОП!', 0, -200, 90, { font: 'Osw', col: '#ffe070', rot: -0.1 }); pop(); } });
    lay(0.7, () => { glass(t); snail(t); motes(16, [-200, 200, 1300, 1700], '#ffd0c0', t, 27490, { sp: -4, sz: 5, a: 0.3, wob: 5 }); moodDark(540, 960, 600, 1500, '#2a0404', 0.4); });
  };
  DIR.bottle = {
    outfit: 'diverK', light: { side: 1, rim: '#ffe0c0' }, grade: ['#ff8060', 0.06],
    act: () => [[S0.bottle, 'annoyed'], [EV.bt_snail, 'shock'], [EV.bt_45, 'annoyed'], [EV.bt_hour, 'scared'], [EV.bt_blop, 'shock'], [EV.bt_blop + 0.3, 'laugh']],
    pose: (t, u, b) => { const slow = clamp((t - S0.bottle) / (EV.bt_blop - S0.bottle)), out = t > EV.bt_blop; const x = out ? lerp(900, 1000, clamp((t - EV.bt_blop) / 0.4)) : lerp(380, 620, slow), y = out ? lerp(1480, 1300, clamp((t - EV.bt_blop) / 0.3)) : 1420;
      return Object.assign(b, { x, y, s: 0.72, flip: false, rot: out ? 0.6 : 0, walk: !out ? t * 2 : undefined, look: t > EV.bt_snail && t < EV.bt_blop ? [0.9, 0.3] : [0.6, 0.2], hand: t > EV.bt_hour && !out ? [100, -460] : [160, -250], handF: t > EV.bt_hour && !out ? [-100, -460] : [-80, -230], sweat: t > EV.bt_45, squash: b.squash + (out ? 0.12 : 0) }); },
    cam: () => [[S0.bottle, 540, 1040, 0.2], [EV.bt_snail, 560, 1100, 0.24], [EV.bt_hour, 600, 1120, 0.26], [EV.bt_blop, 720, 1200, 0.26], [S1.bottle, 740, 1210, 0.27]]
  };
  // ---------------------------------------------------------------- переход: восьмигранное горлышко надвигается и всасывает кадр
  TRANS_IN.bottle = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), R = lerp(0, 1500, e * e), oct = n => { const p = []; for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283 + 0.39; p.push([540 + Math.cos(a) * n, 960 + Math.sin(a) * n]); } return p; };
    drawBuf(A, 1 + e * 0.8, 540, 960, 1, null, 0, 0, e * 0.6);
    scr(() => { const p = oct(R); ctx.save(); ctx.clip(pathOf(p)); drawBuf(B, lerp(1.4, 1, e), 540, 960); ctx.restore(); pencil(p.concat([p[0]]), { w: 30 * (1 - e) + 8, col: '#f8fcff', a: 0.8, pass2: false }); pencil(oct(R + 30).concat([oct(R + 30)[0]]), { w: 8, col: '#c8e8f0', a: 0.5, pass2: false }); });
  } };
})();
