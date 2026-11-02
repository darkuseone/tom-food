/* 014 — `snack` ★: «Разгадка: в конце девяностых сухарь стал снеком — кубики со вкусом холодца с хреном!» Ночной ларёк конца 1990-х: стеклянная витрина
   битком — пакетики, жвачки, газировка, кассеты; неоновая вывеска «24 ЧАСА», фонари, слякоть, парни в спортивных костюмах, магнитофон. Том в «олимпийке» с
   фартуком. По словам: «девяностых» — неон мигает и загорается; «стал снеком» — нож шинкует каменный сухарь в кубики, кубики сыплются в пакет; «кубики» —
   пакет раздувается, выпрыгивает крупно; «холодца с хреном» — рядом появляются тарелка холодца и баночка хрена, стрелка в пакет, ценник; золотое сияние ★.
   Переход В сцену: неоновая вспышка — кадр моргает розовым и переключается. */
(() => {
  EV.sn_90 = wtw('s7', 'девяностых');
  EV.sn_snack = wtw('s7', 'снеком');
  EV.sn_cube = wtw('s7', 'кубики');
  EV.sn_hol = wtw('s7', 'холодца');
  SHAKES.push([EV.sn_cube + 0.1, 0.18, 8]);
  KEYW.push('снеком', 'хреном!');
  const neon = t => t > EV.sn_90 ? (Math.sin(t * 20) > -0.7 || t > EV.sn_90 + 0.6 ? 1 : 0.2) : 0.15;

  function street(t) {                                                  // ночной двор: панельки с окнами, фонари, слякоть, снег
    vgrad(-600, 1000, ['#0a0c1c', '#1a1a34', '#2a2448']); for (const [x, w, h] of [[-200, 360, 700], [220, 300, 560], [580, 380, 760], [1000, 320, 620]]) { rect(x, 900 - h, w, h + 40, { wash: '#2a2a40', washA: 1, w: 1.6, col: '#0a0a18' }); windows(x + 16, 920 - h, w - 32, h - 80, 6, 10, x + 5, 0.45, '#ffd890', '#2a2a48', 0.9); }
    for (const x of [100, 1000]) { pencil([[x, 1000], [x, 600]], { w: 6, col: '#1a1a24' }); pencil([[x, 600], [x + 60, 590]], { w: 4, col: '#1a1a24' }); glow(x + 60, 600, 120, 'rgba(255,200,120,1)', 0.5); rays(x + 60, 600, 1.57, 0.3, 400, 'rgba(255,210,140,1)', 0.12, 3, t); }
    motes(50, [-200, 0, 1300, 1000], '#ffffff', t, 14800, { sp: 40, vx: 8, sz: 3, a: 0.7, wob: 1 });
  }
  function kiosk(t) {                                                   // ларёк: металлический корпус, витрина с пакетиками и бутылками, неон «24 ЧАСА», окошко
    push(540, 1260, 1); const k = rect(-420, -700, 840, 700, { wash: '#4a5a6a', washA: 1, w: 3, col: '#1a1a24', key: 14810 }); metalG(k.path, -100, -400, 700, '#8a9aa8', '#4a5a6a', '#1a2a34');
      const g = rect(-390, -620, 780, 420, { wash: '#1a2a34', washA: 1, w: 3, col: '#c8ccd2' }); ctx.save(); ctx.clip(g.path); vgrad(-620, -200, ['#2a3a44', '#3a4a54']); glow(0, -420, 300, 'rgba(255,240,200,1)', 0.35);
      for (let r = 0; r < 3; r++) { pencil([[-390, -480 + r * 130], [390, -480 + r * 130]], { w: 4, col: '#8a8a92', pass2: false }); for (let i = 0; i < 8; i++) { const x = -350 + i * 96, y = -490 + r * 130, c = ['#c8221a', '#2a5ab8', '#e8b030', '#3a8a3a', '#8a2a8a'][(i + r) % 5];
        if (r === 1 && i % 3 === 0) { rect(x - 14, y - 90, 28, 90, { wash: '#2a8a4a', washA: 0.8, w: 1.4 }); ell(x, y - 94, 10, 6, { wash: '#c8221a', washA: 1, w: 1 }); } else { push(x, y - 40, 0.32); snackBag(0, 0, 1, t, { col: c, taste: ['БЕКОН', 'СЫР', 'ГРИБЫ', 'ЧЕСНОК', 'ХОЛОДЕЦ С ХРЕНОМ'][(i + r * 2) % 5], key: 14811 + r * 8 + i }); pop(); } } }
      for (let i = 0; i < 4; i++) { rect(-360 + i * 60, -246, 50, 32, { wash: '#1a1a1a', washA: 1, w: 1.4 }); ell(-345 + i * 60, -230, 6, 6, { wash: '#c8c8c8', washA: 1, line: false }); ell(-325 + i * 60, -230, 6, 6, { wash: '#c8c8c8', washA: 1, line: false }); } ctx.restore();
      rect(-110, -200, 220, 120, { wash: '#1a2a34', washA: 1, w: 3, col: '#c8ccd2' }); glow(0, -140, 100, 'rgba(255,240,200,1)', 0.4);
      const n = neon(t); rect(-260, -790, 520, 90, { wash: '#1a1a24', washA: 1, w: 3, col: '#5a5a62' }); txt('24 ЧАСА', 0, -728, 64, { font: 'Osw', col: n > 0.5 ? '#ff4aa8' : '#5a2a4a' }); if (n > 0.5) glow(0, -745, 300, 'rgba(255,70,170,1)', 0.45); pop();
  }
  function guys(t) { for (const [x, sd, i] of [[60, 1, 0], [1060, -1, 1]]) { human(x, 1330, 1.1, t, { body: i ? '#1a1a1a' : '#2a4a8a', legs: '#1a1a24', hair: '#2a1a0a', face: t > EV.sn_hol ? 'grin' : 'calm', armL: 'hold', armR: t > EV.sn_cube ? 'up' : 'hold', look: sd * 0.5, seed: 14820 + i, flip: sd }); if (!i) for (const s2 of [-1, 1]) pencil([[x + s2 * 50, 1330 - 230], [x + s2 * 54, 1330 - 120]], { w: 5, col: '#ffffff', pass2: false }); } push(1060 - 120, 1330 - 120, 1); rect(-70, -40, 140, 70, { wash: '#2a2a2e', washA: 1, w: 2 }); for (const sd of [-1, 1]) ell(sd * 36, -6, 22, 22, { wash: '#4a4a52', washA: 1, w: 1.6 }); const q = (t * 0.8) % 1; txt('♫', 40 + q * 40, -60 - q * 80, 34, { col: '#ff8ac8', a: 1 - q }); pop(); }
  function counter(t) {                                                 // прилавок: каменный сухарь → нож-кубики → пакет; холодец и хрен → стрелка → ценник; сияние
    const tb = rect(-400, 1440, 1900, 800, { wash: '#5a5a62', washA: 1, w: 3, col: '#1a1a24', key: 14830 }); metalG(tb.path, 200, 1500, 900, '#a8acb4', '#5a5a62', '#1a1a24');
    const chop = clamp((t - EV.sn_snack) / 0.6); if (chop < 1) rusk(260, 1460, 1.5, 0.1, { rye: 1, key: 14831 }); if (t > EV.sn_snack && chop < 1) { const kx = 180 + Math.floor(chop * 5) * 40; push(kx, 1360 - Math.abs(Math.sin(chop * 30)) * 60, 1.4, -0.2); poly([[-10, -100], [14, -100], [10, 40], [-6, 50]], { wash: '#d8dce0', washA: 1, w: 2 }); rect(-14, -180, 30, 80, { wash: '#2a1a10', washA: 1, w: 2 }); pop(); }
    if (chop >= 1 || t < EV.sn_snack) { if (t > EV.sn_snack) for (let i = 0; i < 9; i++) { const q = clamp((t - EV.sn_snack - 0.6 - i * 0.04) / 0.5); cubeRusk(lerp(200 + (i % 3) * 40, 560, q), lerp(1460 - Math.floor(i / 3) * 30, 1320, q) - Math.sin(q * Math.PI) * 120, 1.2 * (1 - q * 0.6), i + q * 5, { key: 14832 + i, spice: '#d8582a' }); } }
    const bk = t > EV.sn_cube - 0.2 ? popK(t, EV.sn_cube - 0.2, 0.45) : 0; if (bk > 0) { push(560, 1380, bk * 1.3); snackBag(0, 0, 1, t, { col: '#c8221a', key: 14841 }); pop(); }
    if (t > EV.sn_hol - 0.1) { const k = popK(t, EV.sn_hol - 0.1, 0.4); push(860, 1480, k); ell(0, 0, 90, 24, { wash: '#f8f6f0', washA: 1, w: 2, col: '#5a5a62' }); const j = rect(-60, -70, 120, 60, { wash: '#e8d8a0', washA: 0.75, w: 2, col: '#a8945a' }); for (let i = 0; i < 4; i++) ell(-40 + i * 26, -40, 8, 6, { wash: '#c88a5a', washA: 1, line: false }); glow(-30, -50, 20, 'rgba(255,255,255,1)', 0.6); txt('холодец', 0, 46, 24, { font: 'Hand', col: '#fff4d0' }); pop();
      push(1010, 1470, k); rect(-30, -70, 60, 70, { wash: '#f4f0e6', washA: 1, w: 2, col: '#5a5a5a' }); rect(-32, -84, 64, 18, { wash: '#c8221a', washA: 1, w: 1.6 }); txt('ХРЕН', 0, -30, 18, { font: 'Osw', col: '#3a3a3a' }); pop();
      pencil(spline([[820, 1360], [740, 1300], [680, 1320]], false, 6), { w: 8, col: '#ffe070', pass2: false }); poly([[690, 1300], [660, 1326], [696, 1340]], { wash: '#ffe070', washA: 1, line: false });
      rays(560, 1300, -1.57, 3, 900, 'rgba(255,220,120,1)', 0.2 * k, 12, t); glow(560, 1300, 420, 'rgba(255,220,120,1)', 0.3 * k); bubbleTag('★ СНЕК!', 560, 1080, t, EV.sn_hol + 0.2, '#d8582a', 60, -0.05); }
  }
  function front(t) { push(-60, 1900, 1.4); for (let i = 0; i < 4; i++) ell(0, -i * 40, 80 - i * 8, 26, { wash: '#4a4a52', washA: 1, w: 2, col: '#1a1a24' }); pop(); const sl = blob([[-400, 2000], [-200, 1780], [400, 1760], [900, 1790], [1500, 1760], [1500, 2000]], { wash: '#5a5a62', washA: 0.6, line: false }); motes(30, [0, 300, 1080, 1700], '#ffffff', t, 14850, { sp: 40, vx: 10, sz: 3, a: 0.6, wob: 1 }); haze('#ff4aa8', 0.03 * neon(t)); }
  WORLD.snack = (t, u, cat) => {
    lay(14, () => { street(t); haze('#2a2448', 0.08); });
    lay(2.8, () => { kiosk(t); guys(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { counter(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.snack = {
    outfit: 'olympA', light: { side: -1, rim: '#ff8ac8' }, grade: ['#a86ab8', 0.08],
    act: () => [[S0.snack, 'suspicious'], [EV.sn_90, 'awe'], [EV.sn_snack, 'proud'], [EV.sn_cube, 'laugh'], [EV.sn_hol, 'shock'], [EV.sn_hol + 0.5, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1620, s: 1.05, flip: -1, look: t > EV.sn_hol ? [0.5, 0.5] : t > EV.sn_snack ? [-0.6, 0.5] : [-0.2, -0.6], hand: [160, -300], handF: t > EV.sn_cube ? [-120, -420] : [-90, -220], tailUp: t > EV.sn_cube }),
    cam: () => [[S0.snack, 540, 800, 0.08], [EV.sn_90, 540, 700, 0.12, 'x'], [EV.sn_snack, 400, 1260, 0.22], [EV.sn_cube, 560, 1200, 0.2], [EV.sn_hol, 680, 1220, 0.2], [S1.snack, 640, 1220, 0.24]]
  };
  // ---------------------------------------------------------------- переход: неоновая вспышка — кадр моргает розовым и переключается
  TRANS_IN.snack = { a: 0.3, b: 0.4, runA: 0.3, fx(k, t, A, B) {
    const flick = [0.1, 0.25, 0.4, 0.55, 0.7].some(x => Math.abs(k - x) < 0.05); drawBuf(k < 0.5 ? A : B, 1, 540, 960);
    scr(() => { if (flick) { ctx.fillStyle = 'rgba(255,70,170,0.7)'; ctx.fillRect(0, 0, W, H); } ctx.fillStyle = 'rgba(10,8,20,' + (0.6 * Math.sin(k * Math.PI)) + ')'; ctx.fillRect(0, 0, W, H); });
  } };
})();
