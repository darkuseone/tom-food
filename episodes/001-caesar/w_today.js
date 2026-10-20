/* 001 — `today` + `button`: сегодня. Вечерний ресторан, неон CAESAR, мраморный стол. ХИРО-ШОТ: настоящая 3D-тарелка Цезаря медленно разворачивается (caesar3D),
   Том-шеф трёт пармезан сверху — стружка падает и блестит. «каждого третьего ресторана» — 9 фасадов-иконок, каждый третий загорается с тарелкой.
   «Юлий отдыхает» — мраморный бюст Юлия Цезаря на полке грустно отворачивается, венок съезжает.
   `button`: Том снимает с бюста венок и надевает себе (петля к хуку), подмигивает: «Пиши блюдо — откусим!». Переход В `today`: клош поднимается, пар. */
(() => {
  EV.td_third = wtw('t1', 'каждого');
  EV.td_julius = wtw('t1', 'Юлий');
  EV.bt_wreath = LS('x1') + 0.2;
  EV.bt_wink = LF('x1', 0.75);
  KEYW.push('третьего', 'отдыхает.', 'откусим!');

  function room(t) { vgrad(-400, 1500, ['#141018', '#2a1a22', '#3a2420']); const r = rng(9200); for (let i = 0; i < 30; i++) glow(r() * 1300 - 100, 200 + r() * 900, 40 + r() * 60, ['rgba(255,180,90,1)', 'rgba(255,120,80,1)', 'rgba(255,230,180,1)'][i % 3], 0.25);
    const n = 'CAESAR'; push(540, 330, 1, -0.03); for (let i = 0; i < n.length; i++) { const on = Math.sin(t * 7 + i * 3) > -0.9; ctx.save(); ctx.font = '600 150px Osw'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.shadowColor = on ? 'rgba(255,90,60,1)' : 'rgba(0,0,0,0)'; ctx.shadowBlur = 40; ctx.lineWidth = 8; ctx.strokeStyle = on ? '#ffb0a0' : '#5a2a2a'; ctx.strokeText(n[i], -300 + i * 120, 0); ctx.restore(); }
    glow(0, 0, 500, 'rgba(255,80,60,1)', 0.25); pop();
    rect(-400, 860, 2000, 26, { wash: '#4a2e1a', washA: 1, w: 2, col: '#000' }); }
  function bust(t, slip) { push(900, 860, 1); rect(-70, -40, 140, 40, { wash: '#d8d0c4', washA: 1, w: 2.4, col: '#4a4a4a' }); const sad = t > EV.td_julius;
    blob([[-80, -40], [-70, -110], [0, -130], [70, -110], [80, -40]], { wash: '#e8e2d8', washA: 1, w: 2.4, col: '#5a5a5a' }); pencil([[-60, -100], [-20, -60]], { w: 2, col: '#9a9a9a', a: 0.7, pass2: false });
    push(sad ? -10 : 0, -200, 1, sad ? -0.25 : 0); const h = ell(0, 0, 62, 76, { wash: '#efe9e0', washA: 1, w: 2.4, col: '#5a5a5a', key: 9210 }); shadeG(h.path, 60, 40, -20, -20, '#a8a29a', 0.5); ell(-62, 0, 10, 16, { wash: '#efe9e0', washA: 1, w: 2 });
    for (const sd of [-1, 1]) pencil(sad ? [[sd * 30 - 10, -6], [sd * 30 + 10, 0]] : [[sd * 30 - 10, -4], [sd * 30 + 10, -4]], { w: 3, col: '#5a5a5a', pass2: false }); pencil(sad ? [[-16, 40], [0, 32], [16, 40]] : [[-16, 36], [16, 36]], { w: 3, col: '#5a5a5a', pass2: false }); pencil([[0, -4], [-6, 18], [4, 20]], { w: 2, col: '#7a7a7a', pass2: false });
    if (sad) { ell(40, 10, 6, 9, { wash: '#9ad0f0', washA: 0.9, w: 1 }); }
    if (!slip) { push(sad ? 30 : 0, -50 + (sad ? 20 : 0), 0.62, sad ? 0.4 : 0); for (let i = 0; i < 14; i++) { const a = Math.PI + i / 13 * Math.PI; push(Math.cos(a) * 104, Math.sin(a) * 26, 1, a + Math.PI / 2 + (i % 2 ? 0.5 : -0.5)); blob([[0, 0], [-9, -14], [0, -30], [9, -14]], { wash: '#6b8a2e', washA: 1, w: 1.6, col: '#24340a' }); pop(); } pop(); }
    pop(); pop(); txt('IVLIVS', 900, 840, 26, { font: 'Osw', col: '#5a5a5a' }); }
  function marble(t) { const tb = poly([[-500, 1340], [1600, 1340], [1700, 2400], [-600, 2400]], { wash: '#efe8e0', washA: 1, w: 3, col: '#3a3a3a', key: 9220 }); ctx.save(); ctx.clip(tb.path); const r = rng(9221); for (let i = 0; i < 14; i++) { const x = r() * 1600 - 300; pencil(spline([[x, 1340], [x + 60, 1600], [x - 40, 1900], [x + 80, 2400]], false, 6), { w: 1.6 + r() * 2, col: '#a8a098', a: 0.5, pass2: false }); } glow(540, 1600, 500, 'rgba(255,200,140,1)', 0.25); ctx.restore(); }
  function parmRain(t) { const r = rng(9230); for (let i = 0; i < 22; i++) { const kk = ((t * 0.9 + r()) % 1), x = 600 + (r() - 0.5) * 180 + kk * 30; parmShard(x, 1000 + kk * 420, 0.9, t * 4 + i, 9231 + (i % 5)); if (kk > 0.92) glow(x, 1420, 20, 'rgba(255,250,220,1)', 0.6); } }
  function icons(t) { if (t < EV.td_third - 0.2) return; for (let i = 0; i < 9; i++) { const k = popK(t, EV.td_third - 0.2 + i * 0.05, 0.3), lit = i % 3 === 2 && t > EV.td_third + 0.4;
      push(lerp(140, 940, i / 8), 700 + (i % 2) * 16, k * 0.8); poly([[-50, 0], [50, 0], [50, -70], [0, -110], [-50, -70]], { wash: lit ? '#e8b53a' : '#3a3440', washA: 1, w: 2.4, col: '#141018' }); rect(-18, -40, 36, 40, { wash: lit ? '#fff2c0' : '#24202a', washA: 1, w: 1.6 }); if (lit) { glow(0, -50, 90, 'rgba(255,220,120,1)', 0.6); ell(0, -140, 30, 10, { wash: '#ffffff', washA: 1, w: 1.6 }); for (let q = 0; q < 3; q++) ell(-12 + q * 12, -146, 7, 5, { wash: '#7aa834', washA: 1, w: 1 }); } pop(); }
    if (t > EV.td_third + 0.5) bubbleTag('1 ИЗ 3', 760, 560, t, EV.td_third + 0.5, '#d9482b', 60, -0.04); }
  WORLD.today = (t, u, cat) => {
    lay(10, () => { room(t); }); lay(3.2, () => { bust(t, false); icons(t); });
    lay(1.25, () => { marble(t); });
    lay(1.08, () => { caesar3D(470, 1440, 330, t * 0.55 + 0.4, t, { tilt: 0.55 }); });
    lay(1, () => { cat(); });
    lay(0.95, () => parmRain(t));
  };
  DIR.today = {
    outfit: 'chef', light: { side: -1, rim: '#ffd0a0' }, grade: ['#ff8060', 0.08],
    act: () => [[S0.today, 'proud'], [EV.td_third, 'awe'], [EV.td_third + 0.8, 'grin'], [EV.td_julius, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 820, y: 1780, s: 1.2, flip: -1, look: t > EV.td_julius ? [0.3, -0.8] : [-0.6, 0.5], hand: [110, -330 + Math.sin(t * 14) * 10], handF: [-80, -170] }),
    afterCat: (t, u, P) => { const hx = P.x - (110 + 10) * P.s, hy = P.y + (-330 - 40) * P.s; push(hx, hy, 1, 0.5); rect(-30, -90, 60, 140, { wash: '#c8ccd0', washA: 1, w: 2, col: '#3a3e44' }); for (let i = 0; i < 6; i++) pencil([[-20, -70 + i * 20], [20, -70 + i * 20]], { w: 1.4, col: '#4a5058', a: 0.7, pass2: false }); pop(); parmWedge(hx - 90, hy + 40, 0.45, -0.4); },
    cam: () => [[S0.today, 560, 1500, 0.42], [S0.today + 1.2, 600, 1180, 0.14, 'x'], [EV.td_third, 600, 1080, 0.12], [EV.td_julius, 760, 1000, 0.22], [S1.today, 780, 980, 0.26]]
  };
  WORLD.button = (t, u, cat) => {
    lay(10, () => room(t)); lay(3.2, () => bust(t, t > EV.bt_wreath)); lay(1.25, () => marble(t)); lay(1.08, () => caesar3D(380, 1460, 300, t * 0.55 + 0.4, t, { tilt: 0.55 })); lay(1, () => cat());
  };
  DIR.button = {
    outfit: 'chef', light: { side: -1, rim: '#ffd0a0' }, grade: ['#ff8060', 0.08],
    act: () => [[S0.button, 'grin'], [EV.bt_wink, 'wink']],
    pose: (t, u, b) => { const k = clamp((t - EV.bt_wreath) / 0.35); return Object.assign(b, { x: 700, y: 1820, s: 1.3, look: [0, 0], hand: k > 0 && k < 1 ? [lerp(160, 40, k), lerp(-500, -560, k)] : [90, -200], handF: [-110, -260], point: 1, outfit: k > 0.6 ? 'chefL' : 'chef' }); },
    cam: () => [[S0.button, 760, 900, 0.3], [S0.button + 0.5, 680, 1060, 0.36], [DUR, 680, 1080, 0.4]]
  };
  OUTFIT.chefL = Object.assign({}, OUTFIT.chef, { hat: 'laurel' });
  // ---------------------------------------------------------------- переход: клош поднимается, пар
  TRANS_IN.today = { a: 0.2, b: 0.5, runA: 1, fx(k, t, A, B) {
    if (k < 0.35) { drawBuf(A, 1, 540, 960); } else drawBuf(B, 1.1 - 0.1 * k, 540, 960);
    scr(() => { const down = k < 0.35 ? sm(k / 0.35) : 1, up = k < 0.35 ? 0 : sm((k - 0.35) / 0.65), y = lerp(-1400, 1100, down) - up * 2600;
      const c = shape(spline([[-200, y + 300], [-100, y - 500], [540, y - 900], [1180, y - 500], [1280, y + 300]], false, 10).concat([[1280, y + 300]]), { wash: '#c8ccd0', washA: 1, w: 5, col: '#2a2e34' }); metalG(c.path, 300, y - 500, 1200, '#ffffff', '#b8bcc4', '#3a3e44'); rect(-220, y + 280, 1520, 60, { wash: '#9aa0a8', washA: 1, w: 4, col: '#2a2e34' }); ell(540, y - 920, 80, 40, { wash: '#b8bcc4', washA: 1, w: 4, col: '#2a2e34' });
      if (up > 0) for (let i = 0; i < 14; i++) { const r = rng(9240 + i); ell(r() * 1080, 1700 - up * 1400 * (0.5 + r()), 160 + r() * 140, 100 + r() * 80, { wash: '#ffffff', washA: 0.5 * (1 - up), line: false }); } });
  } };
})();
