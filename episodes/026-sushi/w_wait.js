/* 026 — `wait`: «Но ждать надоело — и лет пятьсот назад рис стали есть вместе с рыбой.» Дом эпохи Муромати: татами, раздвинутые сёдзи
   в сад (цветущая сакура, каменный фонарь торо, пруд с карпами, бамбуковый водосток), ниша-токонома со свитком и икебаной, низкие столики-дзэн,
   гости в кимоно скучают: один зевает, другой барабанит пальцами, монах дремлет; курильница с палочкой-«часами» сгорает на глазах, тени
   ползут по татами (таймлапс). Том в оливковом кимоно с оби за столиком. По словам: «ждать» — палочка сгорает, тени бегут, гости зевают;
   «надоело» — Том хлопает по столу, плошки подпрыгивают; «рис» — Том подхватывает палочками рис вместе с рыбой из кувшина; «рыбой.» —
   жуёт, гости аплодируют, лепестки сакуры влетают в комнату. Плашка «РИС: ВЫБРОСИТЬ → СЪЕСТЬ». Главный свет — тёплое солнце сквозь сёдзи слева,
   второй — прохладный сад. Переход В сцену: две створки сёдзи разъезжаются от центра. */
(() => {
  EV.wt_wait = wtw('s3', 'ждать');
  EV.wt_slap = wtw('s3', 'надоело');
  EV.wt_rice = wtw('s3', 'рис');
  EV.wt_eat = wtw('s3', 'рыбой.');
  SHAKES.push([EV.wt_slap + 0.05, 0.15, 7]);
  KEYW.push('надоело');
  const lapse = t => clamp((t - EV.wt_wait) / (EV.wt_slap - EV.wt_wait + 0.2));

  function garden(t) {                                                    // сад за сёдзи: сакура, каменный фонарь, пруд с карпами, горы
    vgrad(-300, 1100, ['#a8c8e0', '#d8e8e8', '#e8f0e0']);
    sil([[-400, 520], [0, 380], [400, 460], [800, 360], [1300, 480], [1600, 520], [1600, 700], [-400, 700]], '#8aa8a0', 0.7);
    rect(-500, 620, 2200, 500, { wash: '#7a9a5a', washA: 1, line: false }); const pd = ell(300, 820, 360, 80, { wash: '#5a8aa8', washA: 1, w: 2, col: '#2a4a5a' }); for (let i = 0; i < 3; i++) { const a = t * 0.6 + i * 2.1; push(300 + Math.cos(a) * 240, 820 + Math.sin(a) * 40, 0.5, a + 1.57); blob([[-40, 0], [-20, -14], [30, -10], [44, 0], [30, 10], [-20, 14]], { wash: i % 2 ? '#f08a3a' : '#f8f0e8', washA: 1, w: 1.4 }); pop(); }
    push(700, 760, 1); rect(-16, -40, 32, 40, { wash: '#a8a8a0', washA: 1, w: 1.6 }); rect(-50, -110, 100, 70, { wash: '#b8b8b0', washA: 1, w: 1.6 }); rect(-30, -96, 60, 40, { wash: '#ffd890', washA: 0.8, w: 1 }); poly([[-80, -110], [0, -170], [80, -110]], { wash: '#8a8a84', washA: 1, w: 1.6 }); pop();
    push(980, 760, 1.1); pencil(spline([[0, 0], [-30, -200], [20, -380]], false, 6), { w: 18, col: '#4a3428', pass2: false }); pencil(spline([[-20, -200], [-160, -320]], false, 4), { w: 9, col: '#4a3428', pass2: false }); pencil(spline([[10, -300], [160, -400]], false, 4), { w: 9, col: '#4a3428', pass2: false });
    const r = rng(26900); for (let i = 0; i < 26; i++) ell(-240 + r() * 480, -520 + r() * 300, 50 + r() * 40, 34 + r() * 24, { wash: ['#f8c8d8', '#f4b0c8', '#fbe0e8'][i % 3], washA: 0.9, line: false }); pop();
  }
  function room(t) {                                                      // стены, сёдзи, токонома со свитком, икебана, балки, тени-таймлапс
    vgrad(-500, 1500, ['#4a3420', '#6a4a2c', '#7a5a3a']);
    const g = rect(240, -60, 760, 1060, { wash: '#a8c8e0', washA: 1, w: 8, col: '#2a1a0a', key: 26910 }); ctx.save(); ctx.clip(g.path); garden(t); ctx.restore();
    for (const x of [1000]) { push(x, -60, 1); const p = rect(0, 0, 300, 1060, { wash: '#f4ecd4', washA: 1, w: 6, col: '#3a2410', key: 26911 + x }); shadeG(p.path, 0, 0, 300, 0, '#d8c8a0', 0.3); for (let i = 1; i < 3; i++) pencil([[i * 100, 0], [i * 100, 1060]], { w: 3, col: '#3a2410', pass2: false }); for (let j = 1; j < 8; j++) pencil([[0, j * 132], [300, j * 132]], { w: 3, col: '#3a2410', pass2: false }); pop(); }
    push(60, 0, 1); rect(-180, -60, 360, 1060, { wash: '#5a4028', washA: 1, w: 4, col: '#1a0e06', key: 26915 }); rect(-90, 40, 180, 520, { wash: '#f0e8d0', washA: 1, w: 2, col: '#5a4a2a' }); for (let i = 0; i < 4; i++) pencil(spline([[-60 + i * 8, 120 + i * 60], [0, 150 + i * 70], [50 - i * 10, 180 + i * 80]], false, 5), { w: 4, col: '#2a2a2a', a: 0.7, pass2: false }); txt('待', 0, 500, 60, { font: 'Osw', col: '#1a1a1a' }); rect(-100, 20, 200, 20, { wash: '#6a4a2a', washA: 1, w: 1.4 }); rect(-100, 560, 200, 20, { wash: '#6a4a2a', washA: 1, w: 1.4 });
    push(0, 920, 1); blob([[-50, 0], [-40, -60], [40, -60], [50, 0]], { wash: '#3a5a6a', washA: 1, w: 2 }); for (let i = 0; i < 5; i++) pencil(spline([[0, -60], [-60 + i * 30, -160], [-80 + i * 40, -240 - i * 10]], false, 5), { w: 3, col: '#3a6a2a', pass2: false }); ell(-50, -240, 22, 18, { wash: '#f4a8c0', washA: 1, w: 1.4 }); ell(40, -260, 18, 16, { wash: '#f8f0e8', washA: 1, w: 1.4 }); pop(); pop();
    for (let i = 0; i < 2; i++) pencil([[-700, -80 + i * 10], [1800, -80 + i * 10]], { w: 34, col: '#2a1a0a', pass2: false });
    const L = lapse(t), sw = L * 900; for (let i = 0; i < 4; i++) poly([[-200 + i * 220 + sw, 1000], [-120 + i * 220 + sw, 1000], [60 + i * 260 + sw * 1.3, 1460], [-60 + i * 260 + sw * 1.3, 1460]], { wash: '#fff0c0', washA: 0.14, line: false });
  }
  function guests(t) {                                                    // гости скучают → аплодируют
    const bored = t < EV.wt_eat, cheer = t > EV.wt_eat;
    human(380, 1310, 1.0, t, { body: '#6a2a3a', legs: '#2a1a1a', hair: '#1a1410', face: cheer ? 'grin' : bored ? 'calm' : 'smile', armL: cheer ? 'wave' : 'hold', armR: cheer ? 'up' : 'hold', look: 0.6, seed: 26920, long: 1 }); jpHat(380, 1310, 1.0, 'mage'); obi(380, 1310, 1.0, '#c8a040');
    if (bored && t > EV.wt_wait) { push(380, 1310 - 284 * 1.0 + 20, 1); ell(0, 0, 14, 18 + Math.sin(t * 4) * 4, { wash: '#3a0a0a', washA: 1, w: 1.4 }); pop(); txt('zzz', 450, 880 - Math.sin(t * 2) * 10, 40, { font: 'Hand', col: '#3a2a1a' }); }
    human(960, 1320, 1.0, t, { body: '#2a4a6a', legs: '#1a1a2a', hair: '#1a1410', face: cheer ? 'grin' : 'calm', armL: 'hold', armR: cheer ? 'up' : 'hold', look: -0.6, seed: 26921, flip: -1, long: 1 }); obi(960, 1320, 1.0, '#e8e0d0', -1);
    if (bored && t > EV.wt_wait) for (let i = 0; i < 4; i++) { const ph = (t * 6 + i * 0.25) % 1; pencil([[930 + i * 10, 1180 - ph * 10], [934 + i * 10, 1196 - ph * 10]], { w: 3, col: '#3a2a1a', pass2: false }); }
    human(-120, 1330, 0.95, t, { body: '#c88a3a', legs: '#3a2a1a', hair: '#1a1410', face: cheer ? 'shock' : 'calm', armL: 'hold', armR: 'hold', look: 0.4, seed: 26922, long: 1 }); jpHat(-120, 1330, 0.95, 'kerchief', '#3a3a3a');
  }
  function table(t) {                                                     // низкий столик: плошки, кувшин с полубродившими суши, курильница-часы, палочки
    const jump = t > EV.wt_slap && t < EV.wt_slap + 0.3 ? Math.sin((t - EV.wt_slap) * 20) * 14 : 0;
    const tb = rect(80, 1400, 700, 50, { wash: '#2a1a14', washA: 1, w: 3, col: '#0a0604', key: 26930 }); shadeG(tb.path, 0, 1400, 0, 1450, '#6a3a2a', 0.5); pencil([[90, 1404], [770, 1404]], { w: 4, col: '#c8503a', a: 0.6, pass2: false }); rect(120, 1450, 40, 60, { wash: '#1a0a04', washA: 1, w: 2 }); rect(700, 1450, 40, 60, { wash: '#1a0a04', washA: 1, w: 2 });
    push(240, 1400 - Math.abs(jump), 0.7); narezushiJar(0, 0, 1, t, { cut: 1, open: 1, key: 26935 }); pop();
    push(470, 1396 - Math.abs(jump) * 0.6, 1); ell(0, 0, 70, 16, { wash: '#1a1a1a', washA: 1, w: 2 }); ell(0, -4, 56, 10, { wash: '#c8343a', washA: 1, line: false }); if (t < EV.wt_eat) { push(0, -16, 0.6); blob([[-60, 0], [-50, -30], [50, -30], [60, 0]], { wash: SU.rice, washA: 1, w: 1.6, col: '#8a8070' }); fish(0, -30, 0.5, 0, { key: 26936 }); pop(); } pop();
    push(660, 1400, 1); ell(0, 0, 40, 12, { wash: '#6a5a3a', washA: 1, w: 1.6 }); blob([[-34, 0], [-30, -40], [30, -40], [34, 0]], { wash: '#8a7a4a', washA: 1, w: 1.6 }); const h = lerp(200, 30, lapse(t)); pencil([[0, -40], [0, -40 - h]], { w: 3, col: '#6a3a1a', pass2: false }); ell(0, -40 - h, 4, 4, { wash: '#ff7a30', washA: 1, line: false }); glow(0, -40 - h, 30, 'rgba(255,140,60,1)', 0.3);
    for (let i = 0; i < 3; i++) { const ph = (t * 0.5 + i * 0.33) % 1; pencil(spline([[0, -40 - h], [Math.sin(t * 2 + i) * 20, -80 - h - ph * 120], [Math.sin(t * 3 + i) * 30, -120 - h - ph * 200]], false, 5), { w: 2, col: '#d8d0c8', a: 0.5 * (1 - ph), pass2: false }); } pop();
    chopsticks(380, 1420, 0.6, 0.05);
    if (t > EV.wt_eat) { const r = rng(hsh(FRAME, 26940)); for (let i = 0; i < 12; i++) { const x = -200 + ((t - EV.wt_eat) * 300 + i * 120) % 1200, y = 900 + ((t - EV.wt_eat) * 200 + i * 70) % 600; ell(x, y, 10, 6, { rot: t * 3 + i, wash: '#f8c0d0', washA: 0.9, line: false }); } }
    castShadow(430, 1410, 400, 90, 0.5, 0.25);
  }
  function floor(t) { const f = rect(-600, 1440, 2400, 600, { wash: '#c8b878', washA: 1, w: 2, col: '#5a4a1a', key: 26950 }); for (let i = 0; i < 6; i++) pencil([[-600, 1460 + i * 80], [1800, 1460 + i * 80]], { w: 6, col: '#2a3a1a', a: 0.6, pass2: false }); for (let i = 0; i < 40; i++) pencil([[-600 + i * 60, 1440], [-600 + i * 60, 1900]], { w: 1, col: '#9a8a4a', a: 0.4, pass2: false }); shadeG(f.path, 0, 1440, 0, 1900, '#8a7a3a', 0.3); }
  function front(t) {                                                     // передний план: край сёдзи справа, ветка сакуры сверху слева, ширма
    push(1220, 960, 1.4); rect(-60, -1000, 160, 2000, { wash: '#f4ecd4', washA: 1, w: 6, col: '#3a2410' }); for (let j = 1; j < 12; j++) pencil([[-60, -1000 + j * 170], [100, -1000 + j * 170]], { w: 4, col: '#3a2410', pass2: false }); pop();
    push(-140, 140, 1.4); pencil(spline([[0, 0], [160, 60], [320, 40]], false, 5), { w: 12, col: '#4a3428', pass2: false }); const r = rng(26960); for (let i = 0; i < 14; i++) ell(40 + r() * 300, 20 + r() * 90, 22, 18, { wash: ['#f8c8d8', '#fbe0e8'][i % 2], washA: 1, w: 1, col: '#c87a8a' }); pop();
  }
  WORLD.wait = (t, u, cat) => {
    lay(9, () => { room(t); haze('#ffe0b0', 0.05); });
    lay(2.7, () => { guests(t); });
    lay(1, () => { floor(t); shaft(-300, 0, 420, 1600, -0.45, 'rgba(255,230,170,1)', 0.15); lightPool(500, 1440, 600, 110, 'rgba(255,220,160,1)', 0.32); cat(); table(t); });
    lay(0.65, () => { front(t); motes(14, [-200, 300, 1300, 1500], '#fff4e0', t, 26970, { sp: 3, sz: 3, a: 0.4, wob: 4 }); moodDark(560, 1000, 520, 1500, '#140a10', 0.42); });
  };
  DIR.wait = {
    outfit: 'kimA', light: { side: -1, rim: '#ffe0a0' }, grade: ['#ffc890', 0.06],
    act: () => [[S0.wait, 'annoyed'], [EV.wt_wait, 'annoyed'], [EV.wt_slap, 'shock'], [EV.wt_rice, 'smug'], [EV.wt_eat, 'grin']],
    pose: (t, u, b) => { const slap = t > EV.wt_slap - 0.1 && t < EV.wt_slap + 0.25;
      return Object.assign(b, { x: 700, y: 1600, s: 1.15, flip: true, look: t < EV.wt_slap ? [0.3, -0.6] : [-0.7, 0.5],
        hand: slap ? [200, -170] : t > EV.wt_rice ? (t > EV.wt_eat ? [60, -320] : [200, -260]) : [140, -200], handF: [-80, -210], prop: t > EV.wt_rice ? 'riceP' : undefined, propAng: 0,
        squint: t > EV.wt_eat, sweat: t > EV.wt_wait && t < EV.wt_slap + 0.3, squash: b.squash + (slap ? 0.06 : 0) }); },
    hud: t => infoPlate(t, EV.wt_rice - 0.2, S1.wait - 0.15, { kind: 'swap', title: 'РИС', a: 'ВЫБРОСИТЬ', b: 'СЪЕСТЬ', ia: (s, t) => INGR_C26.rice(s, t), ib: (s, t) => INGR_C26.rice(s, t), tb: EV.wt_eat - 0.2 }),
    cam: () => [[S0.wait, 540, 1020, 0.22], [EV.wt_slap, 560, 1100, 0.27], [EV.wt_eat, 580, 1140, 0.31], [S1.wait, 580, 1150, 0.32]]
  };
  // ---------------------------------------------------------------- переход: две створки сёдзи разъезжаются от центра
  TRANS_IN.wait = { a: 0.2, b: 0.5, runA: 0.3, fx(k, t, A, B) {
    const off = k < 0.4 ? (1 - sm(k / 0.4)) * 640 : sm((k - 0.4) / 0.6) * 640; drawBuf(k < 0.4 ? A : B, 1, 540, 960);
    scr(() => {
      for (const sd of [-1, 1]) { const x0 = sd < 0 ? -80 - off : 540 + off; push(x0, 0, 1); const p = rect(0, -20, 620, 1960, { wash: '#f4ecd4', washA: 1, w: 8, col: '#3a2410', key: 26990 + sd }); for (let i = 1; i < 4; i++) pencil([[i * 155, -20], [i * 155, 1940]], { w: 5, col: '#3a2410', pass2: false }); for (let j = 1; j < 12; j++) pencil([[0, j * 165], [620, j * 165]], { w: 5, col: '#3a2410', pass2: false }); pop(); } });
  } };
})();
