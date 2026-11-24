/* 026 — `inside` (ТОМ-МАЛЫШ, раз за ролик): «Целый обед — в одной руке!» Микромир на гигантском эдоском нигири: внизу — склон из рисинок-валунов
   (каждая — белый «батон» с блеском), сверху склоном лежит ломоть тунца-«скала» с жирными прожилками и бликом, справа внизу — озеро соевого
   соуса с янтарным бликом и пузырями, вдали — холм васаби и паруса-лепестки маринованного имбиря, по краям кадра — гигантские пальцы
   Ханаи (это всё помещается «в одной руке»), сверху — тёплый свет фонаря и пар. Том-малыш — итамаэ-поварёнок. По словам: «Целый» —
   карабкается по рисинкам; «обед» — забирается на тунцовую скалу, гордо машет; «руке!» — пальцы-великаны чуть сжимаются, Том-малыш
   съезжает по ломтю, как с горки; пауза-гэг — «ПЛЮХ!» в соевое озеро, выныривает в соусе. Переход В сцену: гигантская ладонь смыкается
   пальцами по краям кадра и раскрывается — внутри нигири. */
(() => {
  EV.in_climb = wtw('s5', 'Целый');
  EV.in_top = wtw('s5', 'обед');
  EV.in_slide = wtw('s5', 'руке!');
  EV.in_plop = LE('s5') + 0.25;
  SHAKES.push([EV.in_plop, 0.2, 9]);
  KEYW.push('руке!');
  const slab = [[-200, 760], [80, 700], [400, 820], [700, 1060], [900, 1300], [960, 1360]];   // верх ломтя-горки (мировые координаты)
  const onSlab = q => { const p = spline(slab, false, 40); const i = clamp(q) * (p.length - 1), a = Math.floor(i), b = Math.min(a + 1, p.length - 1), f = i - a; return [lerp(p[a][0], p[b][0], f), lerp(p[a][1], p[b][1], f)]; };

  function far(t) {                                                       // фон: тёплая дымка кухни, пар, холм васаби, паруса имбиря, палочки-колонны
    vgrad(-400, 1500, ['#3a2214', '#7a4a2a', '#c8905a']); glow(560, -100, 700, 'rgba(255,200,130,1)', 0.25);
    for (let i = 0; i < 6; i++) { const ph = (t * 0.2 + i / 6) % 1; ell(-100 + i * 260 + Math.sin(t + i) * 40, 900 - ph * 900, 220, 120, { wash: '#fff4e0', washA: 0.12 * (1 - ph), line: false }); }
    push(1050, 1100, 1.6); const w = blob([[-260, 0], [-200, -160], [-60, -260], [80, -240], [220, -120], [280, 0]], { wash: '#7ab84a', washA: 1, w: 3, col: '#2a5a1a', key: 27100 }); hatch(w.path, w.bb, { gap: 9, a: 0.25, col: '#3a7a2a', ang: 0.7, key: 27101 }); pop();
    for (let i = 0; i < 4; i++) { push(-150 + i * 120, 1060 - i * 30, 1, -0.3 + i * 0.2); blob([[-80, 0], [-40, -140], [40, -150], [80, 0]], { wash: '#f8c0b0', washA: 0.95, w: 2, col: '#c87a6a', key: 27102 + i }); pencil(spline([[-40, -10], [0, -120]], false, 3), { w: 2, col: '#e8a090', pass2: false }); pop(); }
    for (const [x, r] of [[180, -0.1], [930, 0.12]]) { push(x, -300, 1, r); rect(-40, -600, 80, 1100, { wash: '#a8643a', washA: 1, w: 3, col: '#4a2010' }); shadeG(pathOf([[-40, -600], [40, -600], [40, 500], [-40, 500]]), -40, 0, 40, 0, '#4a2010', 0.4); pop(); }
  }
  function fingers(t, k) {                                                // гигантские пальцы Ханаи по краям кадра (k — сжатие)
    for (const [sd, x] of [[-1, -250], [1, 1330]]) for (let i = 0; i < 2; i++) { push(x - sd * k * 60, 500 + i * 520, 1, sd * 0.1); const f = blob([[-150, -260], [-90, -300], [90, -290], [150, -240], [160, 240], [100, 290], [-100, 290], [-160, 240]], { wash: '#e8b88e', washA: 1, w: 4, col: '#6a3a1a', key: 27110 + i + sd }); shadeG(f.path, sd * 160, 0, -sd * 40, 0, '#a8764e', 0.45); pencil(spline([[-100, -40], [0, -20], [100, -40]], false, 5), { w: 3, col: '#a8764e', pass2: false }); ell(sd * -60, -200, 50, 40, { wash: '#f4d0b8', washA: 0.8, w: 1.6, col: '#a8764e' }); pop(); }
  }
  function riceSlope(t) {                                                 // склон рисинок-валунов внизу
    const r = rng(27120); for (let i = 0; i < 70; i++) { const x = -250 + r() * 1500, y = 1180 + r() * 700 + Math.max(0, (x - 700) * 0.2); const rot = r() * 3; const g = ell(x, y, 70 + r() * 20, 30 + r() * 8, { rot, wash: SU.rice, washA: 1, w: 2.2, col: '#8a8070', key: 27121 + i }); shadeG(g.path, x, y - 30, x, y + 30, '#c8c0b0', 0.45); ell(x - 20, y - 12, 20, 6, { rot, wash: '#ffffff', washA: 0.8, line: false }); }
  }
  function tunaRock(t) {                                                  // ломоть тунца-горка с прожилками и бегущим бликом
    const top = spline(slab, false, 40), body = top.concat([[1000, 1430], [900, 1440], [600, 1200], [300, 1020], [0, 940], [-260, 940]]);
    const p = shape(body, { wash: SU.tuna, washA: 1, w: 3.4, col: SU.tunaD, key: 27200 }); shadeG(p.path, 0, 700, 0, 1100, SU.tunaD, 0.4);
    ctx.save(); ctx.clip(p.path); for (let i = 0; i < 9; i++) pencil(spline([[-200 + i * 140, 700], [-140 + i * 140, 900], [-200 + i * 150, 1200]], false, 6), { w: 10, col: '#e8607a', a: 0.4, pass2: false }); const g = (t * 0.4) % 1; pencil(top.map(([x, y]) => [x, y + 26]), { w: 14, col: '#ffffff', a: 0.25, pass2: false }); ell(lerp(-100, 900, g), lerp(780, 1320, g) + 30, 60, 14, { rot: 0.6, wash: '#ffffff', washA: 0.4, line: false }); ctx.restore();
  }
  function soyLake(t) {                                                   // озеро соевого соуса справа внизу: блик, пузыри, всплеск
    const s = ell(1000, 1560, 420, 110, { wash: SU.soy, washA: 1, w: 3, col: '#1a0a04', key: 27210 }); shadeG(s.path, 1000, 1450, 1000, 1670, '#2a0a04', 0.4); ell(940, 1510, 180, 20, { wash: '#c88a4a', washA: 0.5, line: false });
    for (let i = 0; i < 4; i++) { const ph = (t * 0.7 + i * 0.25) % 1; ell(820 + i * 80, 1560 - ph * 20, 8 + ph * 6, 6, { wash: '#a86a3a', washA: 0.7 * (1 - ph), w: 1, col: '#3a1a08' }); }
    if (t > EV.in_plop) { const q = clamp((t - EV.in_plop) / 0.7); for (let i = 0; i < 10; i++) { const a = -2.9 + i * 0.3; ell(960 + Math.cos(a) * 160 * q, 1500 + Math.sin(a) * 260 * q + q * q * 200, 16 * (1 - q) + 4, 22 * (1 - q) + 4, { wash: SU.soy, washA: 1 - q * 0.5, line: false }); } pencil(ellPts(960, 1520, 60 + q * 200, 14 + q * 40, 0, 0, 30), { w: 4, col: '#c88a4a', a: 1 - q, pass2: false });
      push(940, 1180, popK(t, EV.in_plop, 0.35)); txt('ПЛЮХ!', 0, 0, 90, { font: 'Osw', col: '#ffe070', rot: 0.1 }); pop(); }
  }
  WORLD.inside = (t, u, cat) => {
    const k = t > EV.in_slide ? sm(clamp((t - EV.in_slide) / 0.4)) * (1 - sm(clamp((t - EV.in_plop) / 0.6))) : 0;
    lay(7, () => { far(t); });
    lay(1.4, () => { riceSlope(t); soyLake(t); });
    lay(1, () => { tunaRock(t); lightPool(400, 900, 600, 120, 'rgba(255,220,170,1)', 0.25); cat(); castShadow(500, 1200, 300, 80, 0.5, 0.2); });
    lay(0.7, () => { fingers(t, k); motes(18, [-200, 0, 1300, 1600], '#fff0d0', t, 27290, { sp: -6, sz: 4, a: 0.4, wob: 4 }); moodDark(540, 960, 600, 1500, '#1a0a04', 0.4); });
  };
  DIR.inside = {
    outfit: 'itaB', light: { side: 1, rim: '#ffe8c0' }, grade: ['#ffb070', 0.06],
    act: () => [[S0.inside, 'awe'], [EV.in_climb, 'grin'], [EV.in_top, 'proud'], [EV.in_slide, 'laugh'], [EV.in_plop, 'shock'], [EV.in_plop + 0.5, 'grin']],
    pose: (t, u, b) => { let x, y, rot = 0, walk, lie = false;
      if (t < EV.in_top) { const q = clamp((t - S0.inside) / (EV.in_top - S0.inside)); x = lerp(60, 120, q); y = lerp(1300, 740, sm(q)) + Math.abs(Math.sin(q * 12)) * -20; walk = t * 9; }
      else if (t < EV.in_slide) { [x, y] = onSlab(0.12); }
      else if (t < EV.in_plop) { const q = sm(clamp((t - EV.in_slide) / (EV.in_plop - EV.in_slide))); [x, y] = onSlab(lerp(0.12, 1, q)); rot = 0.45; }
      else { const q = clamp((t - EV.in_plop) / 0.6); x = 960; y = lerp(1380, 1560, Math.min(q * 2, 1)) - (q > 0.5 ? Math.sin((q - 0.5) * 6.28) * 80 : 0); lie = q > 0.4; }
      return Object.assign(b, { x, y, s: 0.6, flip: false, rot, walk, look: t > EV.in_slide ? [0.5, 0.3] : [0.4, -0.4], hand: t > EV.in_top && t < EV.in_slide ? [80, -470] : t > EV.in_slide ? [140, -380] : [130, -280], handF: t > EV.in_slide ? [-140, -380] : [-90, -230], tailUp: t > EV.in_top, sweat: t > EV.in_plop }); },
    afterCat: (t, u, P) => { if (t > EV.in_plop + 0.3) { push(P.x, P.y - 150, 1); ell(0, 0, 130, 26, { wash: SU.soy, washA: 0.9, line: false }); pop(); } },
    cam: () => [[S0.inside, 520, 1000, 0.18], [EV.in_top, 380, 960, 0.24], [EV.in_slide, 520, 1060, 0.22], [EV.in_plop, 720, 1200, 0.26], [S1.inside, 740, 1220, 0.27]]
  };
  // ---------------------------------------------------------------- переход: ладонь смыкается пальцами по краям кадра и раскрывается
  TRANS_IN.inside = { a: 0.25, b: 0.4, runA: 0.3, fx(k, t, A, B) {
    const c = k < 0.45 ? sm(k / 0.45) : 1 - sm((k - 0.45) / 0.55); drawBuf(k < 0.45 ? A : B, 1, 540, 960);
    scr(() => { for (const sd of [-1, 1]) for (let i = 0; i < 4; i++) { const x = sd < 0 ? lerp(-380, 220, c) : lerp(1460, 860, c), y = 260 + i * 470; push(x, y, 1, sd * 0.08); const f = blob([[-330, -220], [-260, -250], [260, -250], [330, -200], [340, 200], [260, 240], [-260, 240], [-340, 200]], { wash: '#e8b88e', washA: 1, w: 5, col: '#6a3a1a', key: 27298 + i + sd }); shadeG(f.path, sd * 340, 0, -sd * 100, 0, '#a8764e', 0.45); ell(-sd * 220, -150, 80, 60, { wash: '#f4d0b8', washA: 0.8, w: 2, col: '#a8764e' }); pop(); } });
  } };
})();
