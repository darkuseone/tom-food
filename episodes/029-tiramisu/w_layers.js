/* 029 — `layers` (ТОМ-МАЛЫШ, раз за ролик): «Собирают его слоями: печенье в кофе, крем, снова печенье — и облако какао.» Микромир внутри
   формы тирамису: внизу — кофейное озеро с пенкой-кремой, по нему плывут плоты-савоярди; по бокам — стеклянные стенки формы с бликами;
   сверху стекают кремовые водопады маскарпоне, кремовые холмы; над всем — «небо» из какао, с него сыплется какао-снег. Том-малыш —
   поварёнок. По словам: «печенье» — Том-малыш прыгает на плот-савоярди; «кофе,» — плот пропитывается и темнеет, Том гребёт ложкой; «крем,» —
   сверху шлёп — кремовая лавина накрывает плот, Том выныривает в усах из крема; «снова печенье» — сверху ложится новый плот-мост, Том
   залезает; «какао.» — какао-метель. Пауза-гэг — «АПЧХИ!»: Том-малыш чихает, облако какао разлетается. Переход В сцену: ложка
   зачерпывает кадр сверху овалом и открывает микромир. */
(() => {
  EV.ly_sav = wtw('s6', 'печенье');
  EV.ly_cof = wtw('s6', 'кофе,');
  EV.ly_cream = wtw('s6', 'крем,');
  EV.ly_again = wtw('s6', 'снова');
  EV.ly_cocoa = wtw('s6', 'какао.');
  EV.ly_sneeze = LE('s6') + 0.25;
  SHAKES.push([EV.ly_cream + 0.1, 0.18, 8], [EV.ly_sneeze, 0.16, 7]);
  KEYW.push('какао.');

  function sky(t) {                                                       // какао-«небо», кремовые холмы, стенки стекла
    vgrad(-400, 1600, ['#3a2010', '#6a4024', '#a8784a']); for (let i = 0; i < 5; i++) ell(-200 + i * 380, 200 + (i % 2) * 60, 260, 120, { wash: TI.cocoaL, washA: 0.5, line: false });
    for (let i = 0; i < 4; i++) { const x = -200 + i * 420; blob([[x - 220, 1100], [x - 180, 780], [x - 60, 660], [x + 80, 700], [x + 200, 820], [x + 240, 1100]], { wash: TI.cream, washA: 1, w: 3, col: TI.creamD, key: 29800 + i }); pencil(spline([[x - 150, 800], [x - 40, 700], [x + 80, 740]], false, 5), { w: 6, col: '#ffffff', a: 0.6, pass2: false }); }
    for (const sd of [-1, 1]) { const x = 540 + sd * 620; pencil([[x, -400], [x - sd * 40, 1900]], { w: 50, col: '#e8f4f8', a: 0.25, pass2: false }); pencil([[x - sd * 30, -300], [x - sd * 60, 1800]], { w: 8, col: '#ffffff', a: 0.5, pass2: false }); }
  }
  function lake(t) {                                                      // кофейное озеро с кремой и пузырями, плоты-савоярди
    const l = rect(-500, 1300, 2200, 700, { wash: TI.coffee, washA: 1, w: 3, col: '#1a0a04', key: 29810 }); shadeG(l.path, 0, 1300, 0, 1900, '#1a0a04', 0.4); for (let i = 0; i < 14; i++) ell(-400 + ((t * 20 + i * 160) % 2000), 1316 + (i % 3) * 10, 50, 8, { wash: '#c88a4a', washA: 0.6, line: false });
    for (let i = 0; i < 5; i++) { const ph = (t * 0.6 + i / 5) % 1; ell(-100 + i * 300, 1360 - ph * 30, 10 + ph * 6, 6, { wash: '#a86a3a', washA: 0.8 * (1 - ph), w: 1, col: '#3a1a08' }); }
    for (let i = 0; i < 3; i++) { const x = -200 + i * 500 + Math.sin(t * 0.8 + i) * 30; savoiardi(x, 1310 + Math.sin(t * 2 + i) * 6, 1.3, Math.sin(t + i) * 0.05, { wet: 1, key: 29811 + i }); }
  }
  function raft(t) {                                                      // плот Тома: печенье → пропитка → кремовая лавина → новый плот сверху
    const wet = t > EV.ly_cof, x = 560 + Math.sin(t * 1.2) * 20; savoiardi(x, 1330 + Math.sin(t * 2) * 6, 2.2, 0, { wet, key: 29820 });
    if (t > EV.ly_cream - 0.2) { const q = clamp((t - EV.ly_cream + 0.2) / 0.5); blob([[x - 220, 1300 - 200 * (1 - q) - 40], [x - 160, 1100 - 600 * (1 - q)], [x + 160, 1100 - 600 * (1 - q)], [x + 220, 1300 - 200 * (1 - q) - 40]], { wash: TI.cream, washA: 1, w: 2.4, col: TI.creamD, key: 29821 }); }
    if (t > EV.ly_again - 0.2) { const q = clamp((t - EV.ly_again + 0.2) / 0.5); savoiardi(x, lerp(400, 1180, sm(q)), 2.2, 0, { key: 29822 }); }
  }
  function snow(t) {                                                      // какао-метель на «какао», облако-чих
    if (t > EV.ly_cocoa - 0.2) { const r = rng(hsh(FRAME, 29830)); const n = 70; for (let i = 0; i < n; i++) ell(-200 + r() * 1500, -100 + ((t - EV.ly_cocoa) * 500 + r() * 1800) % 1800, 4 + r() * 4, 4 + r() * 4, { wash: TI.cocoaL, washA: 0.9, line: false }); }
    if (t > EV.ly_sneeze) { const q = clamp((t - EV.ly_sneeze) / 0.7); for (let i = 0; i < 10; i++) { const a = -2.6 + i * 0.3; ell(560 + Math.cos(a) * 300 * q, 980 + Math.sin(a) * 200 * q, 60 * q + 10, 40 * q + 8, { wash: TI.cocoa, washA: 0.6 * (1 - q), line: false }); } push(700, 820, popK(t, EV.ly_sneeze, 0.3)); txt('АПЧХИ!', 0, 0, 80, { font: 'Osw', col: '#ffe070', rot: 0.08 }); pop(); }
  }
  function detail(t) {                                                    // фактура микромира: кремовые пузыри, крошки печенья, капли кофе на стекле, штриховка теней
    const r = rng(29850); for (let i = 0; i < 16; i++) { const x = -150 + r() * 1400, y = 700 + r() * 500; ell(x, y, 10 + r() * 14, 8 + r() * 10, { wash: '#fffaf0', washA: 0.7, w: 1, col: TI.creamD }); }
    for (let i = 0; i < 18; i++) { const x = -150 + r() * 1400, y = 1250 + r() * 80; ell(x, y, 6, 4, { rot: r() * 3, wash: TI.sav, washA: 1, w: 1, col: TI.savD }); }
    for (let i = 0; i < 8; i++) { const x = (i % 2 ? 1120 : -40) + r() * 40, y = 300 + i * 160; blob([[x - 10, y], [x, y - 22], [x + 10, y], [x, y + 8]], { wash: TI.coffee, washA: 0.6, w: 1, col: '#2a1408' }); }
    hatch(pathOf([[-400, 1100], [1500, 1100], [1500, 1300], [-400, 1300]]), bbOf([[-400, 1100], [1500, 1300]]), { gap: 16, a: 0.12, col: TI.creamD, ang: 0.3, key: 29851 });
    shadeG(pathOf([[-400, 900], [1500, 900], [1500, 1300], [-400, 1300]]), 0, 900, 0, 1300, '#a88a5a', 0.2); haze('#fff0d8', 0.04);
    glow(560, -200, 400, 'rgba(255,220,160,1)', 0.18); motes(10, [-200, 0, 1300, 900], '#8a5a30', t, 29852, { sp: 10, sz: 3, a: 0.5, wob: 3 });
  }
  WORLD.layers = (t, u, cat) => {
    lay(6, () => { sky(t); detail(t); });
    lay(1.4, () => { lake(t); });
    lay(1, () => { lightPool(560, 1300, 500, 90, 'rgba(255,230,180,1)', 0.25); raft(t); cat(); castShadow(560, 1290, 160, 40, 0.4, 0.2); if (t > EV.ly_cream + 0.3 && t < EV.ly_again + 0.6) { push(560, 1020, 1); ell(-30, 0, 40, 14, { wash: TI.cream, washA: 1, w: 1.4 }); ell(30, 0, 40, 14, { wash: TI.cream, washA: 1, w: 1.4 }); pop(); } });
    lay(0.7, () => { snow(t); motes(14, [-200, 100, 1300, 1500], '#f8e8c8', t, 29890, { sp: -6, sz: 4, a: 0.35, wob: 5 }); moodDark(560, 960, 600, 1500, '#1a0a04', 0.38); });
  };
  DIR.layers = {
    outfit: 'chefB', light: { side: 1, rim: '#fff0d0' }, grade: ['#ffb070', 0.06],
    act: () => [[S0.layers, 'grin'], [EV.ly_sav, 'proud'], [EV.ly_cof, 'grin'], [EV.ly_cream, 'shock'], [EV.ly_again, 'laugh'], [EV.ly_cocoa, 'awe'], [EV.ly_sneeze - 0.3, 'annoyed'], [EV.ly_sneeze, 'shock'], [EV.ly_sneeze + 0.5, 'laugh']],
    pose: (t, u, b) => { let x = 300, y = 1300, walk; const rx = 560 + Math.sin(t * 1.2) * 20;
      if (t < EV.ly_sav) { x = lerp(200, 300, clamp((t - S0.layers) / (EV.ly_sav - S0.layers))); y = 1300; walk = t * 9; }
      else if (t < EV.ly_sav + 0.4) { const q = (t - EV.ly_sav) / 0.4; x = lerp(300, rx, q); y = lerp(1300, 1290, q) - Math.sin(q * 3.14) * 160; }
      else if (t < EV.ly_again) { x = rx; y = 1290 + Math.sin(t * 2) * 6 - (t > EV.ly_cream + 0.2 ? clamp((t - EV.ly_cream - 0.2) / 0.3) * 40 : 0); }
      else { const q = clamp((t - EV.ly_again) / 0.5); x = rx; y = lerp(1250, 1140, q) - Math.sin(q * 3.14) * 100; }
      return Object.assign(b, { x, y, s: 0.66, flip: false, walk, look: t > EV.ly_cocoa ? [0.2, -0.9] : [0.5, -0.2], hand: t > EV.ly_cof && t < EV.ly_cream ? [150, -200 + Math.sin(t * 10) * 30] : [140, -260], handF: [-100, -240], prop: t > EV.ly_cof && t < EV.ly_cream ? 'spoonTiraP' : undefined, squint: t > EV.ly_sneeze - 0.3 && t < EV.ly_sneeze, squash: b.squash + (t > EV.ly_sneeze && t < EV.ly_sneeze + 0.2 ? 0.12 : 0), tailUp: t > EV.ly_again }); },
    cam: () => [[S0.layers, 540, 1000, 0.2], [EV.ly_cof, 560, 1060, 0.24], [EV.ly_cream, 560, 1000, 0.22], [EV.ly_cocoa, 580, 1020, 0.23], [S1.layers, 600, 1040, 0.24]]
  };
  // ---------------------------------------------------------------- переход: ложка зачерпывает кадр сверху овалом и открывает микромир
  TRANS_IN.layers = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), cy = lerp(-400, 960, e), rx = lerp(200, 1300, e), ry = rx * 0.8; drawBuf(A, 1, 540, 960);
    scr(() => { ctx.save(); ctx.beginPath(); ctx.ellipse(540, cy, rx, ry, 0, 0, 6.283); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore(); pencil(ellPts(540, cy, rx, ry, 0, 0, 48), { w: 26 * (1 - e) + 6, col: '#c8ccd4', pass2: false }); pencil(ellPts(540, cy - 20, rx * 0.92, ry * 0.9, 0, 3.4, 20), { w: 8, col: '#ffffff', a: 0.6 * (1 - e), pass2: false }); });
  } };
})();
