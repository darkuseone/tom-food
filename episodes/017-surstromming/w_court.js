/* 017 — `court` ★: «Разгадка: она полила подъезд рассолом. В суде открыли банку — и выселение одобрили!» Зал участкового суда, Германия, 1981:
   деревянные панели, высокие окна с решётками, часы, флаг-вымпел без гербов, скамья судей, место свидетелей, стенографистка с машинкой, публика на скамьях,
   домовладелец с юристом, квартирантка в шляпке. Том-судья в мантии и берете с фартуком. По словам: «Разгадка» — золотая вспышка ★; «полила подъезд рассолом» —
   над залом пузырь-воспоминание: лестница, лужа рассола, соседи с прищепками; «открыли банку» — юрист открывает банку на столе вещдоков, зелёное облако
   заливает зал, публика зажимает носы, стенографистка падает в обморок; «выселение одобрили!» — Том бьёт молотком, штамп KÜNDIGUNG ✓.
   Переход В сцену: двери зала распахиваются, свет. */
(() => {
  EV.ct_rev = wtw('s7', 'Разгадка:');
  EV.ct_stairs = wtw('s7', 'подъезд');
  EV.ct_open = wtw('s7', 'открыли');
  EV.ct_ok = wtw('s7', 'одобрили!');
  SHAKES.push([EV.ct_ok + 0.05, 0.22, 12]);
  KEYW.push('Разгадка:', 'одобрили!');
  const SM = t => t > EV.ct_open + 0.1 ? sm(clamp((t - EV.ct_open - 0.1) / 1.0)) * (1 - 0.7 * clamp((t - EV.ct_ok + 0.2) / 0.5)) : 0;

  function room(t) {                                                    // панели, окна с решётками, часы, вымпел, люстры
    vgrad(-600, 1500, ['#4a3020', '#6a4428', '#7a5232']); for (let x = -400; x < 1600; x += 160) { rect(x, 300, 150, 800, { wash: '#8a5a34', washA: 0.6, w: 2, col: '#3a2010' }); rect(x + 20, 340, 110, 300, { wash: '#7a4a28', washA: 0.6, w: 1.4, col: '#3a2010' }); }
    for (const x of [-120, 1200]) { push(x, 0, 1); rect(-110, -300, 220, 460, { wash: '#c8d8e8', washA: 1, w: 8, col: '#3a2010' }); for (let i = 1; i < 4; i++) pencil([[-110 + i * 55, -300], [-110 + i * 55, 160]], { w: 4, col: '#3a3a3a', pass2: false }); rays(0, -60, 1.9, 0.35, 1400, 'rgba(255,248,220,1)', 0.14, 4, t); pop(); }
    push(540, -120, 1); ell(0, 0, 80, 80, { wash: '#f8f4ea', washA: 1, w: 5, col: '#3a2010' }); pencil([[0, 0], [Math.cos(t) * 56, Math.sin(t) * 56]], { w: 4, col: '#1a1a1a', pass2: false }); pencil([[0, 0], [0, -40]], { w: 6, col: '#1a1a1a', pass2: false }); pop();
    for (const x of [200, 880]) { push(x, -300, 1); pencil([[0, -200], [0, 0]], { w: 3, col: '#c89a3a', pass2: false }); ell(0, 30, 60, 40, { wash: '#f4ecd0', washA: 0.95, w: 2 }); glow(0, 30, 220, 'rgba(255,230,170,1)', 0.4); pop(); }
  }
  function people(t) {                                                  // публика, стенографистка, домовладелец с юристом, квартирантка
    const s = SM(t); for (let i = 0; i < 5; i++) { const x = -260 + i * 150; human(x, 1180, 0.8, t, { body: ['#6a5a7a', '#3a5a6a', '#8a6a3a', '#5a3a2a', '#4a6a4a'][i], legs: '#2a2a2a', hair: ['#8a5a2a', '#1a1410', '#c8a060', '#3a2010', '#e8d0a0'][i], face: s > 0.3 ? 'shock' : 'calm', armL: 'hold', armR: s > 0.3 ? 'up' : 'hold', look: 0.4, seed: 17800 + i, long: i % 2 }); if (s > 0.3) nosePeg(x + 5, 1180 - 175, 0.8); }
    human(120, 1320, 1.0, t, { body: '#f4b0c0', legs: '#4a3a4a', hair: '#c8a060', face: t > EV.ct_ok ? 'shock' : 'smug', armL: 'hold', armR: 'hold', look: 0.5, seed: 17810, long: 1 }); hat20(120, 1320, 1.0, 'cloche', '#a8443a');
    human(980, 1320, 1.0, t, { body: '#3a4a3a', legs: '#2a2a2a', hair: '#8a8a8a', face: t > EV.ct_ok ? 'grin' : 'annoyed', armL: 'hold', armR: t > EV.ct_ok ? 'up' : 'hold', look: -0.5, seed: 17811, flip: -1 }); stache(980, 1320, 1.0, -1);
    human(1180, 1320, 1.0, t, { body: '#1a1a24', legs: '#1a1a24', hair: '#3a2a1a', face: s > 0 ? 'grin' : 'calm', armL: 'hold', armR: t > EV.ct_open - 0.2 ? 'point' : 'hold', look: -0.6, seed: 17812, flip: -1 });
    push(860, 1200, 1); rect(-80, -40, 160, 40, { wash: '#3a3a3a', washA: 1, w: 2 }); rect(-60, -70, 120, 30, { wash: '#5a5a5a', washA: 1, w: 1.4 }); rect(-40, -100, 80, 34, { wash: '#f8f4ea', washA: 1, w: 1 }); pop();
  }
  function bench(t) {                                                   // стол вещдоков с банкой, облако запаха, пузырь-воспоминание, штамп
    const tb = rect(-400, 1440, 1900, 800, { wash: '#6a3e22', washA: 1, w: 3, col: '#1a0a04', key: 17820 }); shadeG(tb.path, 0, 1900, 0, 1440, '#2a1408', 0.45); for (let i = 0; i < 6; i++) pencil([[-400, 1480 + i * 70], [1500, 1484 + i * 70]], { w: 2, col: '#3a1a08', a: 0.5, pass2: false }); rect(-400, 1440, 1900, 26, { wash: '#8a5a34', washA: 1, w: 1.6 });
    const op = t > EV.ct_open; push(880, 1500, 1); rect(-120, -10, 240, 20, { wash: '#f4ecd8', washA: 1, w: 1.2 }); txt('BEWEIS', 0, 6, 16, { font: 'Osw', col: '#5a3a1a' }); tinCan(0, -10, 0.85, 0, { bulge: op ? 0 : 0.8, open: op, key: 17821 }); pop();
    const s = SM(t); if (s > 0) { stink(880, 1360, 1.2, t, { n: 4 }); ctx.save(); ctx.globalAlpha = 0.5 * s; for (let i = 0; i < 8; i++) { const r = rng(17830 + i); ell(880 - s * (200 + r() * 900) + Math.sin(t + i) * 30, 1000 - r() * 600 * s, 200 * s + 60, 70 * s + 30, { wash: '#a8d870', washA: 0.4, line: false }); } ctx.restore(); }
    if (t > EV.ct_stairs - 0.2 && t < EV.ct_open + 0.2) { const k = popK(t, EV.ct_stairs - 0.2, 0.4) * (t > EV.ct_open - 0.1 ? 1 - clamp((t - EV.ct_open + 0.1) / 0.3) : 1); if (k > 0) { push(560, 760, k); for (const [x, y, r] of [[-170, 260, 16], [-130, 220, 24]]) ell(x, y, r, r, { wash: '#f8f4ea', washA: 1, w: 2, col: '#5a5a5a' }); const bb = ell(0, 0, 260, 180, { wash: '#f8f4ea', washA: 1, w: 3, col: '#5a5a5a' }); ctx.save(); ctx.clip(bb.path); vgrad(-180, 180, ['#c8b088', '#a89470']);
        for (let i = 0; i < 6; i++) { rect(-260 + i * 90, 60 - i * 40, 100, 200, { wash: '#7a5a3a', washA: 1, w: 1.4, col: '#3a2010' }); } ell(-20, 110, 110, 22, { wash: SR.brine, washA: 0.8, w: 1.2 }); human(140, 150, 0.5, t, { body: '#c8a8d8', legs: '#4a3a4a', hair: '#c8a060', face: 'shock', armL: 'hold', armR: 'up', look: -0.5, seed: 17840, long: 1, flip: -1 }); nosePeg(143, 150 - 115, 0.5); stink(-20, 90, 0.8, t, { n: 3 }); ctx.restore(); pop(); } }
    if (t > EV.ct_rev && t < EV.ct_rev + 1.0) { const k = (t - EV.ct_rev) / 1.0; glow(540, 960, 900 * k, 'rgba(255,220,120,1)', 0.5 * (1 - k)); for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; txt('★', 540 + Math.cos(a) * 400 * k, 900 + Math.sin(a) * 400 * k, 50, { col: '#ffe070', a: 1 - k }); } }
    if (t > EV.ct_ok) { push(690, 840, 0.75 * popK(t, EV.ct_ok, 0.35), -0.12); rect(-230, -56, 460, 112, { wash: '#c8221a', washA: 0.15, w: 8, col: '#c8221a' }); txt('KÜNDIGUNG ✓', 0, 22, 62, { font: 'Osw', col: '#c8221a' }); pop(); }
    if (t > EV.ct_ok - 0.05 && t < EV.ct_ok + 0.6) { const k = (t - EV.ct_ok + 0.05) / 0.65; push(820, 1060, 1 + k * 0.4); txt('БАХ!', 0, 0, 80, { font: 'Osw', col: '#ffe070', a: 1 - k }); pop(); }
  }
  function front(t) { push(-40, 1970, 1.6); rect(-140, -180, 280, 180, { wash: '#5a3420', washA: 1, w: 2.4, col: '#1a0a04' }); for (let i = 0; i < 3; i++) rect(-110 + i * 80, -220, 60, 40, { wash: '#f4ecd8', washA: 1, w: 1.2 }); pop(); push(1180, 1990, 1.6); rect(-100, -60, 200, 60, { wash: '#2a2a2a', washA: 1, w: 2 }); pop();
    motes(24, [0, 0, 1100, 1700], '#ffe8c0', t, 17850, { sp: 6, sz: 4, a: 0.4, wob: 2 }); if (SM(t) > 0) haze('#a8d870', 0.1 * SM(t)); }
  WORLD.court = (t, u, cat) => {
    lay(14, () => { room(t); haze('#d8a070', 0.05); });
    lay(2.6, () => { people(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { bench(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.court = {
    outfit: 'judgeA', light: { side: -1, rim: '#fff0c8' }, grade: ['#f0c090', 0.06],
    act: () => [[S0.court, 'suspicious'], [EV.ct_rev, 'smug'], [EV.ct_stairs, 'annoyed'], [EV.ct_open, 'shock'], [EV.ct_open + 0.6, 'scared'], [EV.ct_ok, 'proud']],
    pose: (t, u, b) => { const bang = t > EV.ct_ok - 0.2 && t < EV.ct_ok + 0.3; return Object.assign(b, { x: 560, y: 1580, s: 1.16, flip: 1, look: t > EV.ct_ok ? [0, 0] : t > EV.ct_open ? [0.8, 0.4] : t > EV.ct_stairs ? [0, -0.8] : [0.3, 0], hand: bang ? [220, -380 + (t > EV.ct_ok ? 140 : 0)] : [200, -290], handF: t > EV.ct_open && !bang ? [-20, -260] : [-90, -220], prop: 'gavelP', propAng: 0.2, squint: t > EV.ct_open + 0.3 && t < EV.ct_ok, sweat: t > EV.ct_open && t < EV.ct_ok }); },
    cam: () => [[S0.court, 560, 900, 0.12], [EV.ct_rev, 540, 1000, 0.22, 'x'], [EV.ct_stairs, 560, 950, 0.22], [EV.ct_open, 820, 1250, 0.22], [EV.ct_open + 0.8, 640, 1100, 0.22], [EV.ct_ok, 520, 1250, 0.22], [S1.court, 520, 1250, 0.26]]
  };
  // ---------------------------------------------------------------- переход: двери зала распахиваются, свет
  TRANS_IN.court = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k); drawBuf(B, 1, 540, 960); scr(() => { ctx.fillStyle = 'rgba(255,248,220,' + 0.8 * Math.sin(e * Math.PI) + ')'; ctx.fillRect(0, 0, W, H); });
    for (const sd of [-1, 1]) { ctx.save(); const x0 = sd < 0 ? 0 : W / 2; ctx.beginPath(); ctx.rect(x0, 0, W / 2, H); ctx.clip(); ctx.translate(sd < 0 ? 0 : W, 0); ctx.scale(Math.max(0.02, 1 - e), 1); ctx.translate(sd < 0 ? 0 : -W, 0); ctx.drawImage(A, 0, 0); ctx.restore(); }
  } };
})();
