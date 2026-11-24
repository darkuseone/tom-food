/* 029 — `swap`: «Хозяйка взяла старый торт, заменила масло на маскарпоне, а красный ликёр — на кофе.» Кухня горной гостиницы 1950-х:
   деревянные панели, изразцовая печь, полки с банками варенья и сыра, часы-ходики, окно с синими ставнями на снежные горы, на стене —
   вышитое полотенце и старая открытка; хозяйка в фартуке и косынке над старым тортом «Дольче Торино» (слои печенья с маслом и красным
   ликёром). Том — помощница-повар в ситцевой рубахе и косынке. Главный свет — снежное окно, второй — огонь печи. По словам: «старый
   торт,» — хозяйка поднимает тетрадь рецептов, торт крупно; «масло» — брусок масла выпрыгивает из миски и улетает (✗); «маскарпоне,» —
   в миску плюхается маскарпоне; «красный ликёр» — бутылка алкермеса уезжает со стола; «кофе.» — кофеварка мока свистит, кофе льётся
   на печенье. Переход В сцену: деревянные ставни с вырезанными сердечками распахиваются наружу. */
(() => {
  EV.sw_cake = wtw('s5', 'торт,');
  EV.sw_butter = wtw('s5', 'масло');
  EV.sw_masc = wtw('s5', 'маскарпоне,');
  EV.sw_liq = wtw('s5', 'красный');
  EV.sw_cof = wtw('s5', 'кофе.');
  KEYW.push('маскарпоне,', 'кофе.');

  function room(t) {                                                      // панели, окно со ставнями на горы, изразцовая печь, полки, ходики
    vgrad(-500, 1500, ['#7a5434', '#9a6e48', '#8a623e']); for (let i = 0; i < 14; i++) { const p = rect(-500 + i * 160, -500, 158, 2000, { wash: i % 2 ? '#9a6e48' : '#8e6440', washA: 1, w: 1.2, col: '#4a2e18', key: 29700 + i }); hatch(p.path, p.bb, { gap: 14, a: 0.12, col: '#4a2e18', ang: 1.5, key: 29720 + i }); }
    push(300, 380, 1); const w = rect(-180, -200, 360, 360, { wash: '#c8dcf0', washA: 1, w: 8, col: '#4a2e18', key: 29740 }); ctx.save(); ctx.clip(w.path); vgrad(-200, 160, ['#8ab0e0', '#e8f0f8']); sil([[-180, 60], [-80, -100], [20, 0], [120, -120], [180, 40], [180, 160], [-180, 160]], '#a8b8d0', 1); for (const [x, y] of [[-80, -100], [120, -120]]) poly([[x - 40, y + 50], [x, y], [x + 40, y + 50]], { wash: '#ffffff', washA: 1, line: false }); ctx.restore(); pencil([[0, -200], [0, 160]], { w: 5, col: '#4a2e18', pass2: false });
    for (const sd of [-1, 1]) { push(sd * 180, -200, 1); rect(sd > 0 ? 0 : -110, 0, 110, 360, { wash: '#3a5a9a', washA: 1, w: 2.4, col: '#1a2a4a' }); for (let j = 0; j < 6; j++) pencil([[sd > 0 ? 6 : -104, 20 + j * 56], [sd > 0 ? 104 : -6, 20 + j * 56]], { w: 3, col: '#1a2a4a', pass2: false }); pop(); } pop();
    push(980, 1100, 1); rect(-160, -520, 320, 520, { wash: '#e8e0d0', washA: 1, w: 3, col: '#6a5a4a', key: 29741 }); for (let r = 0; r < 6; r++) for (let c = 0; c < 4; c++) { rect(-150 + c * 76, -510 + r * 84, 72, 80, { wash: '#f4ecdc', washA: 1, w: 1.2, col: '#8a7a6a' }); ell(-114 + c * 76, -470 + r * 84, 16, 16, { wash: '#3a6aa8', washA: 0.8, line: false }); } rect(-70, -140, 140, 90, { wash: '#1a0a04', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) { const fh = 40 + Math.sin(t * 9 + i) * 14; blob([[-56 + i * 30, -50], [-48 + i * 30, -50 - fh], [-36 + i * 30, -50]], { wash: '#ff9030', washA: 1, line: false }); } glow(0, -90, 140, 'rgba(255,150,60,1)', 0.3); pop();
    push(640, 380, 1); rect(-180, 0, 360, 14, { wash: '#5a3a1e', washA: 1, w: 1.6 }); for (let i = 0; i < 6; i++) { blob([[-160 + i * 60, 0], [-164 + i * 60, -60], [-140 + i * 60, -70], [-118 + i * 60, -60], [-120 + i * 60, 0]], { wash: ['#a8243a', '#e8a020', '#6a2a6a'][i % 3], washA: 0.9, w: 1.4 }); rect(-158 + i * 60, -76, 36, 10, { wash: '#f4ecd8', washA: 1, w: 1 }); } rect(-180, 200, 360, 14, { wash: '#5a3a1e', washA: 1, w: 1.6 }); for (let i = 0; i < 3; i++) ell(-120 + i * 120, 170, 50, 28, { wash: '#f0d890', washA: 1, w: 1.6, col: '#8a7a3a' }); pop();
    push(640, -40, 1); rect(-40, -60, 80, 100, { wash: '#6a3a1a', washA: 1, w: 2 }); ell(0, -10, 28, 28, { wash: '#f8f4ec', washA: 1, w: 1.4 }); pencil([[0, -10], [Math.cos(t) * 20, -10 + Math.sin(t) * 20]], { w: 2, col: '#1a1a1a', pass2: false }); pencil([[0, 40], [Math.sin(t * 3) * 20, 160]], { w: 2, col: '#3a3a3a', pass2: false }); ell(Math.sin(t * 3) * 20, 170, 10, 10, { wash: '#c8a040', washA: 1, w: 1 }); pop();
  }
  function hostess(t) {                                                   // хозяйка с тетрадью рецептов, пробует; соседка у двери
    human(300, 1300, 1.05, t, { body: '#3a5a8a', legs: '#2a2a2a', hair: '#6a3a1a', face: t > EV.sw_cof ? 'grin' : t > EV.sw_butter ? 'smile' : 'calm', armL: t > EV.sw_cake && t < EV.sw_butter ? 'up' : 'hold', armR: 'hold', look: 0.5, seed: 29750, long: 1, hat: 'scarf', hatCol: '#c84a3a' }); rect(250, 1300 - 220, 100, 170, { wash: '#f4ecd8', washA: 1, w: 1.4 });
    if (t > EV.sw_cake && t < EV.sw_butter + 0.3) { push(220, 900, 1, -0.1); rect(-60, -80, 120, 140, { wash: '#8a2a1a', washA: 1, w: 2 }); rect(-52, -72, 104, 124, { wash: '#f4ecd8', washA: 1, w: 1 }); txt('Dolce', 0, -30, 22, { font: 'Hand', col: '#2a1a0a' }); txt('Torino', 0, 0, 22, { font: 'Hand', col: '#2a1a0a' }); pop(); }
    human(1060, 1310, 0.9, t, { body: '#6a4a6a', legs: '#2a2a2a', hair: '#c8c8c8', face: t > EV.sw_cof ? 'grin' : 'calm', armL: 'hold', armR: t > EV.sw_cof ? 'wave' : 'hold', look: -0.5, seed: 29751, flip: -1, long: 1, hat: 'scarf', hatCol: '#3a3a3a' });
  }
  function table(t) {                                                     // стол: старый торт (герой), миска, масло улетает, маскарпоне, ликёр уезжает, мока льёт
    const tb = rect(-500, 1440, 2200, 600, { wash: '#a87a4a', washA: 1, w: 3, col: '#4a2e18', key: 29760 }); shadeG(tb.path, 0, 1440, 0, 1900, '#5a3a1e', 0.45); for (let i = 0; i < 6; i++) pencil([[-500, 1470 + i * 70], [1700, 1476 + i * 70]], { w: 2, col: '#7a5434', a: 0.5, pass2: false });
    push(400, 1450, 1); rect(-150, -150, 300, 150, { wash: '#f4ecd8', washA: 0.25, w: 2, col: '#8a8a8a' }); for (let i = 0; i < 4; i++) { const y = -24 - i * 34; rect(-140, y - 20, 280, 22, { wash: i % 2 ? (t > EV.sw_masc ? TI.cream : '#f8e070') : (t > EV.sw_cof ? '#8a5a2a' : '#c84a5a'), washA: 1, line: false }); if (i % 2 === 0) for (let j = 0; j < 5; j++) savoiardi(-112 + j * 56, y - 9, 0.26, 0, { wet: t > EV.sw_cof, key: 29761 + i * 5 + j }); } pop();
    if (t > EV.sw_butter && t < EV.sw_butter + 0.8) { const q = (t - EV.sw_butter) / 0.8; push(lerp(560, 1100, q), 1300 - Math.sin(q * 3.14) * 300, 0.6, q * 6); rect(-60, -24, 120, 48, { wash: '#f8e070', washA: 1, w: 2, col: '#a88a20' }); pop(); }
    if (t > EV.sw_masc - 0.2) { const q = clamp((t - EV.sw_masc + 0.2) / 0.5); push(640, lerp(1100, 1450, q * q), 0.7); mascarponeTub(0, 0, 1); pop(); }
    if (t < EV.sw_liq + 0.8) { const q = clamp((t - EV.sw_liq) / 0.8); alchermes(820 + q * 500, 1450, 0.8); }
    if (t > EV.sw_cof - 0.4) { const q = clamp((t - EV.sw_cof + 0.4) / 0.4); mokaPot(lerp(1300, 860, q), 1450, 0.9, t); if (t > EV.sw_cof) for (let i = 0; i < 8; i++) ell(560 + Math.sin(i * 2 + t * 9) * 6, 1300 + i * 20, 6, 10, { wash: TI.coffee, washA: 0.85, line: false }); }
    castShadow(640, 1450, 320, 90, 0.5, 0.25);
  }
  WORLD.swap = (t, u, cat) => {
    lay(9, () => { room(t); haze('#fff0d8', 0.05); });
    lay(2.6, () => { hostess(t); shaft(300, 380, 300, 1300, -0.4, 'rgba(235,245,255,1)', 0.15); });
    lay(1, () => { lightPool(560, 1460, 660, 120, 'rgba(245,240,230,1)', 0.32); cat(); table(t); });
    lay(0.65, () => { push(-150, 1950, 1.4); for (let i = 0; i < 3; i++) blob([[i * 60 - 80, 0], [i * 60 - 84, -90], [i * 60 - 60, -110], [i * 60 - 36, -90], [i * 60 - 40, 0]], { wash: ['#a8243a', '#e8a020', '#6a2a6a'][i], washA: 0.9, w: 2 }); pop(); push(1230, 200, 1.4); rect(-60, -200, 120, 320, { wash: '#f4ecd8', washA: 1, w: 2 }); for (let i = 0; i < 6; i++) pencil([[-50, -180 + i * 50], [50, -180 + i * 50]], { w: 4, col: '#c8302a', pass2: false }); pop();
      motes(14, [-200, 300, 1300, 1500], '#ffffff', t, 29790, { sp: 2, sz: 3, a: 0.35, wob: 4 }); moodDark(560, 1000, 520, 1500, '#140a06', 0.4); });
  };
  DIR.swap = {
    outfit: 'kuhA', light: { side: -1, rim: '#e8f0ff' }, grade: ['#ffd0a0', 0.05],
    act: () => [[S0.swap, 'talk'], [EV.sw_cake, 'awe'], [EV.sw_butter, 'smug'], [EV.sw_masc, 'grin'], [EV.sw_liq, 'sideeye'], [EV.sw_cof, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 760, y: 1600, s: 1.15, flip: true, look: [-0.7, 0.6], hand: t > EV.sw_butter && t < EV.sw_butter + 0.4 ? [300, -260] : t > EV.sw_liq && t < EV.sw_liq + 0.5 ? [160, -200] : [200, -260], handF: [-90, -230], prop: t > EV.sw_cof ? 'spoonTiraP' : undefined, tailUp: t > EV.sw_cof }),
    hud: t => { infoPlate(t, EV.sw_masc - 0.1, EV.sw_liq - 0.2, { kind: 'swap', title: 'ЗАМЕНА 1', a: 'МАСЛО', b: 'МАСКАРПОНЕ', ia: (s, tt) => INGR_C29.butter(s, tt), ib: (s, tt) => INGR_C29.masc(s, tt), tb: EV.sw_masc + 0.3 }); infoPlate(t, EV.sw_liq, S1.swap - 0.15, { kind: 'swap', title: 'ЗАМЕНА 2', a: 'ЛИКЁР', b: 'КОФЕ', ia: (s, tt) => INGR_C29.liqueur(s, tt), ib: (s, tt) => INGR_C29.coffee(s, tt), tb: EV.sw_cof }); },
    cam: () => [[S0.swap, 560, 1060, 0.23], [EV.sw_butter, 580, 1120, 0.28], [S1.swap, 600, 1130, 0.3]]
  };
  // ---------------------------------------------------------------- переход: ставни с сердечками распахиваются наружу
  TRANS_IN.swap = { a: 0.2, b: 0.5, runA: 0.3, fx(k, t, A, B) {
    const c = k < 0.4 ? sm(k / 0.4) : 1 - sm((k - 0.4) / 0.6); drawBuf(k < 0.4 ? A : B, 1, 540, 960);
    scr(() => { for (const sd of [-1, 1]) { const w = 470 * c; if (w < 4) continue; const x0 = sd < 0 ? 0 : 1080 - w; rect(x0, -20, w, 1960, { wash: '#3a5a9a', washA: 1, w: 4, col: '#1a2a4a', key: 29798 + sd }); for (let j = 0; j < 14; j++) pencil([[x0 + 6, 40 + j * 136], [x0 + w - 6, 40 + j * 136]], { w: 4, col: '#1a2a4a', pass2: false }); if (w > 200) { const hx = sd < 0 ? x0 + w - 140 : x0 + 140; const hp = []; for (let i = 0; i <= 30; i++) { const a = i / 30 * 6.283; hp.push([hx + 16 * Math.sin(a) ** 3 * 3, 960 - (13 * Math.cos(a) - 5 * Math.cos(2 * a) - 2 * Math.cos(3 * a) - Math.cos(4 * a)) * 3]); } poly(hp, { wash: '#f8e8c0', washA: 1, w: 2 }); } } });
  } };
})();
