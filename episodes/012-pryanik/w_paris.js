/* 012 — `paris`: «1889: купец Гречихин везёт в Париж пряник в два пуда. Гран-при!» Всемирная выставка 1889: железные арки и стеклянная крыша галереи,
   за стеклом — новенькая рыжая Эйфелева башня, флаги стран, публика в цилиндрах и платьях с турнюрами, стенды. Русский стенд «ТУЛА · ГРЕЧИХИНЪ»: купец с бородой
   и в цилиндре, тележка с гигантским пряником. Том в сюртуке и фартуке катит тележку; весы с гирей «2 ПУДА»; жюри с лентами.
   По словам: «Гречихин» — купец выходит вперёд и снимает цилиндр; «Париж» — вспыхивает вывеска EXPOSITION 1889; «два пуда» — пряник на весы, стрелка «2 ПУДА»;
   «Гран-при» — председатель жюри вешает ленту GRAND PRIX, публика аплодирует, конфетти. Переход В сцену: пряничная доска падает на кадр и отпечатывает новый. */
(() => {
  EV.pr_gre = wtw('s3', 'Гречихин');
  EV.pr_par = wtw('s3', 'Париж');
  EV.pr_pud = wtw('s3', 'пуда.');
  EV.pr_gp = wtw('s3', 'Гран-при!');
  SHAKES.push([EV.pr_pud + 0.05, 0.2, 10], [EV.pr_gp + 0.1, 0.2, 8]);
  KEYW.push('Гречихин', 'Гран-при!');

  function hall(t) {                                                    // галерея: стеклянная крыша, железные арки, Эйфелева башня, флаги
    vgrad(-900, 1300, ['#9ac0dc', '#c8dcea', '#efe8d8']);
    push(620, 1000, 0.75); const tw = (y, w) => [[-w, y], [w, y]]; const legs = [[-260, 0], [-120, -400], [-60, -900], [-20, -1500], [0, -1700], [20, -1500], [60, -900], [120, -400], [260, 0]];
      pencil(spline(legs, false, 10), { w: 14, col: '#8a4a2a' }); for (const [y, w] of [[-400, 120], [-900, 60], [-1300, 30]]) pencil(tw(y, w), { w: 10, col: '#8a4a2a' }); for (let i = 0; i < 18; i++) { const y = -60 - i * 90, w = lerp(240, 10, i / 18); pencil([[-w, y], [w * 0.6, y - 90]], { w: 3, col: '#8a4a2a', a: 0.7, pass2: false }); pencil([[w, y], [-w * 0.6, y - 90]], { w: 3, col: '#8a4a2a', a: 0.7, pass2: false }); }
      pencil(spline([[-200, 0], [-100, -160], [0, -200], [100, -160], [200, 0]], false, 8), { w: 10, col: '#8a4a2a' }); pop();
    for (let i = 0; i < 7; i++) { const x = -300 + i * 260; pencil(spline([[x, 1100], [x + 30, 200], [x + 130, -300], [x + 230, 200], [x + 260, 1100]], false, 12), { w: 16, col: '#4a5a6a' }); for (let k = 0; k < 10; k++) pencil([[x + 20 + k * 22, 1000 - k * 60], [x + 40 + k * 22, 960 - k * 60]], { w: 2, col: '#4a5a6a', a: 0.6, pass2: false }); }
    for (let j = 0; j < 8; j++) pencil([[-400, -300 + j * 100], [1600, -300 + j * 100]], { w: 2, col: '#6a7a8a', a: 0.4, pass2: false });
    for (let i = 0; i < 9; i++) { const x = -200 + i * 170, y = 300; pencil([[x, y], [x, y + 160]], { w: 3, col: '#3a3a3a', pass2: false }); const c = [['#2a5ab8', '#ffffff', '#c8221a'], ['#ffffff', '#2a5ab8', '#c8221a'], ['#000000', '#e8c020', '#c8221a'], ['#c8221a', '#ffffff', '#c8221a']][i % 4]; for (let k = 0; k < 3; k++) rect(x, y + k * 22, 90 + Math.sin(t * 3 + i + k) * 6, 22, { wash: c[k], washA: 1, w: 1, col: '#3a3a3a' }); }
    push(540, 700, 1); rect(-300, -50, 600, 100, { wash: '#1a2a4a', washA: 1, w: 3, col: '#c8a050' }); const on = t > EV.pr_par; txt('EXPOSITION · 1889', 0, 18, 52, { font: 'Osw', col: on ? '#ffe070' : '#8a8a6a' }); if (on) glow(0, 0, 320, 'rgba(255,220,120,1)', 0.3 * clamp((t - EV.pr_par) / 0.3)); pop();
    rays(200, -200, 1.3, 0.3, 2000, 'rgba(255,250,230,1)', 0.12, 6, t);
  }
  function crowd(t) {                                                   // публика 1889: цилиндры, турнюры, зонтики; аплодируют на Гран-при
    const cl = t > EV.pr_gp, r = rng(12500);
    for (let i = 0; i < 9; i++) { const x = -260 + i * 180 + (i % 2) * 40, sd = 12501 + i, lady = i % 3 === 1; human(x, 1240 + (i % 2) * 30, 1.0, t, { body: lady ? ['#8a3a5a', '#3a5a8a', '#6a2a2a'][i % 3] : '#1a1a20', legs: '#1a1a1a', hair: ['#3a2a1a', '#c8a060', '#1a1a1a'][i % 3], face: cl ? 'grin' : t > EV.pr_pud ? 'shock' : 'smile', armL: cl ? 'wave' : 'hold', armR: cl ? 'up' : lady ? 'hold' : 'down', look: (540 - x) / 900, seed: sd, long: lady ? 1 : 0, flip: x > 540 ? -1 : 1 });
      if (lady) { hat20(x, 1240 + (i % 2) * 30, 1.0, 'boater'); } else hat20(x, 1240 + (i % 2) * 30, 1.0, 'tophat'); }
  }
  function stand(t) {                                                   // русский стенд: вывеска, купец Гречихин, гигантский пряник на весах, жюри
    push(220, 1400, 1); rect(-260, -480, 520, 60, { wash: '#c8221a', washA: 1, w: 3, col: '#3a0a04' }); txt('ТУЛА · ГРЕЧИХИНЪ', 0, -440, 38, { font: 'Osw', col: '#fff4d0' }); for (const sd of [-1, 1]) pencil([[sd * 240, -420], [sd * 240, 0]], { w: 12, col: '#6a4424' }); pop();
    const gx = lerp(-40, 120, sm(clamp((t - EV.pr_gre + 0.2) / 0.5)));
    human(gx, 1420, 1.2, t, { body: '#1a1a24', legs: '#1a1a1a', hair: '#5a3a1a', beard: 'long', face: t > EV.pr_gp ? 'grin' : 'smile', armL: t > EV.pr_gre && t < EV.pr_par ? 'up' : 'hold', armR: t > EV.pr_gp ? 'wave' : 'point', look: 0.6, seed: 12510, long: 1 });
    if (!(t > EV.pr_gre && t < EV.pr_par)) hat20(gx, 1420, 1.2, 'tophat'); else { push(gx - 90, 1420 - 450, 1.2, -0.4); rect(-34, -80, 68, 80, { wash: '#121214', washA: 1, w: 2 }); ell(0, 0, 56, 10, { wash: '#121214', washA: 1, w: 2 }); pop(); }
    push(520, 1440, 1); rect(-260, -40, 520, 40, { wash: '#5a5a62', washA: 1, w: 2.4, col: '#1a1a1a' }); for (const x of [-200, 200]) ell(x, 10, 34, 34, { wash: '#2a2a2a', washA: 1, w: 2 }); const lift = t > EV.pr_pud - 0.4 ? 0 : 0;
      pryanik(0, -60 - lift, 1.5, t, { key: 12511, text: 'ТУЛА' }); pop();
    push(830, 1440, 1); rect(-60, -40, 120, 40, { wash: '#6a4a2a', washA: 1, w: 2 }); pencil([[0, -40], [0, -300]], { w: 10, col: '#c8a050' }); const dial = ell(0, -340, 80, 80, { wash: '#f8f4ea', washA: 1, w: 4, col: '#c8a050' }); for (let i = 0; i < 10; i++) { const a = -2.4 + i / 9 * 4.8; pencil([[Math.cos(a - 1.57) * 66, -340 + Math.sin(a - 1.57) * 66], [Math.cos(a - 1.57) * 74, -340 + Math.sin(a - 1.57) * 74]], { w: 2, col: '#3a3a3a', pass2: false }); }
      const na = lerp(-2.2, 1.2, sm(clamp((t - EV.pr_pud + 0.5) / 0.6))) + (t > EV.pr_pud ? Math.sin((t - EV.pr_pud) * 14) * 0.1 * Math.exp(-(t - EV.pr_pud) * 3) : 0); pencil([[0, -340], [Math.cos(na - 1.57) * 60, -340 + Math.sin(na - 1.57) * 60]], { w: 4, col: '#c8221a', pass2: false }); txt('ПУДЫ', 0, -300, 16, { font: 'Osw', col: '#3a3a3a' }); pop();
    if (t > EV.pr_pud) bubbleTag('2 ПУДА ≈ 33 КГ', 540, 1080, t, EV.pr_pud, '#c8221a', 50, -0.05);
    for (let i = 0; i < 3; i++) { const x = 960 + i * 110; human(x, 1380, 1.0, t, { body: '#1a1a24', trim: '#c8221a', legs: '#1a1a1a', hair: ['#d8d0c0', '#3a2a1a', '#8a6a4a'][i], beard: i === 0 ? 'short' : null, face: t > EV.pr_gp ? 'grin' : 'calm', armL: 'hold', armR: i === 0 && t > EV.pr_gp - 0.3 ? 'point' : 'hold', look: -0.7, seed: 12520 + i, flip: -1 }); }
    if (t > EV.pr_gp - 0.1) { const k = popK(t, EV.pr_gp - 0.1, 0.5); push(560, 1260, k, -0.08); const rb = poly([[-40, 0], [40, 0], [50, 160], [0, 130], [-50, 160]], { wash: '#c8221a', washA: 1, w: 2, col: '#3a0a04' }); const m = ell(0, 0, 90, 90, { wash: '#d6a842', washA: 1, w: 4, col: '#6a4a08' }); metalG(m.path, -30, -30, 100, '#fff0a0', '#d6a842', '#7a5010'); txt('GRAND', 0, -8, 30, { font: 'Osw', col: '#5a2a08' }); txt('PRIX', 0, 26, 30, { font: 'Osw', col: '#5a2a08' }); pop(); glow(560, 1260, 260, 'rgba(255,230,140,1)', 0.35 * k); }
  }
  function front(t) {                                                   // передний план: край стенда с бархатом и бахромой, пальма в кадке, конфетти
    const v = rect(-400, 1720, 2000, 400, { wash: '#7a1a2a', washA: 1, w: 3, col: '#2a0408' }); shadeG(v.path, 0, 1720, 0, 2000, '#2a0408', 0.5); for (let i = 0; i < 40; i++) ell(-380 + i * 50, 1730, 10, 16, { wash: '#d6a842', washA: 1, w: 1 });
    push(1180, 1700, 1.4); const pot = shape([[-70, 0], [-60, -110], [60, -110], [70, 0]], { wash: '#c88a3a', washA: 1, w: 2.4, col: '#3a1a08' }); for (let i = 0; i < 7; i++) { const a = -2.6 + i * 0.4; pencil(spline([[0, -110], [Math.cos(a) * 140, -260 + Math.sin(a) * 60], [Math.cos(a) * 240, -200 + Math.sin(a) * 120]], false, 6), { w: 10, col: '#3a7a3a', pass2: false }); } pop();
    if (t > EV.pr_gp) { const r = rng(12530); for (let i = 0; i < 60; i++) { const q = t - EV.pr_gp - r() * 0.3; if (q < 0) continue; const x = r() * 1200 - 60 + Math.sin(q * 4 + i) * 40, y = 200 + q * 600 + r() * 300; push(x, y, 1, q * 7 + i); rect(-8, -4, 16, 8, { wash: ['#2a5ab8', '#ffffff', '#c8221a', '#ffd04a'][i % 4], washA: 1, line: false }); pop(); } }
    motes(24, [0, 300, 1080, 1700], '#fffaf0', t, 12531, { sp: 8, sz: 4, a: 0.4, wob: 2 });
  }
  WORLD.paris = (t, u, cat) => {
    lay(14, () => { hall(t); haze('#e8eef4', 0.08); });
    lay(3.6, () => { crowd(t); haze('#e8eef4', 0.05); });
    lay(1.3, () => { stand(t); });
    lay(1, () => { cat(); });
    lay(0.6, () => { front(t); });
  };
  DIR.paris = {
    outfit: 'victorianA', light: { side: -1, rim: '#fff4d8' }, grade: ['#c8d8e8', 0.05],
    act: () => [[S0.paris, 'proud'], [EV.pr_par, 'awe'], [EV.pr_pud, 'shock'], [EV.pr_gp, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 720, y: 1740, s: 1.1, flip: -1, look: t < EV.pr_gp ? [-0.7, 0.2] : [0, -0.3], hand: t > EV.pr_gp ? [100, -400] : [200, -220], handF: t > EV.pr_gp ? [-100, -400] : [-60, -200], tailUp: t > EV.pr_gp, noHat: true }),
    cam: () => [[S0.paris, 600, 700, 0.06], [EV.pr_gre - 0.1, 400, 1180, 0.18, 'x'], [EV.pr_par, 560, 900, 0.1], [EV.pr_pud - 0.3, 600, 1260, 0.2], [EV.pr_gp, 600, 1220, 0.22], [S1.paris, 610, 1220, 0.26]]
  };
  // ---------------------------------------------------------------- переход: пряничная доска падает на кадр и отпечатывает новый
  TRANS_IN.paris = { a: 0.3, b: 0.4, runA: 0.3, fx(k, t, A, B) {
    const down = clamp(k / 0.45), up = clamp((k - 0.55) / 0.45); drawBuf(up > 0 ? B : A, 1, 540, 960);
    if (up < 1) scr(() => { const y = up > 0 ? lerp(960, -1400, sm(up)) : lerp(-1400, 960, sm(down) * sm(down)); push(540, y, 3.2); pryanikBoard(0, 0, 1, t, { key: 12540 }); pop(); if (down >= 1 && up < 0.15) { ctx.fillStyle = 'rgba(40,20,0,0.3)'; ctx.fillRect(0, 0, W, H); } });
  } };
})();
