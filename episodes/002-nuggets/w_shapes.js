/* 002 — `shapes`: ТОМ-МАЛЫШ внутри гигантской коробки наггетсов. «Восемьдесят третий — вся Америка.» — над открытой коробкой висит карта-салфетка США:
   точки-ресторанчики разбегаются с востока на запад. «Форм четыре: колокол, мяч, ботинок и кость.» — камера ныряет в коробку: картонные стены с гофрой,
   жирные пятна, крошки-валуны, соусники-бочки; четыре наггетса-скалы по очереди подпрыгивают, над ними — ярлык и контур предмета. Том-малыш ходит и тычет лапой.
   Переход В сцену: клапаны коробки захлопываются и раскрываются уже внутри. */
(() => {
  EV.sh_us = wtw('s8', 'вся');
  EV.sh_four = wtw('s8', 'четыре:');
  EV.sh_bell = wtw('s8', 'колокол,');
  EV.sh_ball = wtw('s8', 'мяч,');
  EV.sh_boot = wtw('s8', 'ботинок');
  EV.sh_bone = wtw('s8', 'кость.');
  SHAKES.push([EV.sh_bell + 0.1, 0.12, 6], [EV.sh_ball + 0.1, 0.12, 6], [EV.sh_boot + 0.1, 0.12, 6], [EV.sh_bone + 0.1, 0.18, 9]);
  KEYW.push('четыре:');

  const NUGS = [['bell', 230, 1290, 3.0, -0.05, 'КОЛОКОЛ'], ['ball', 560, 1250, 2.7, 0.1, 'МЯЧ'], ['boot', 880, 1300, 3.0, 0.05, 'БОТИНОК'], ['bone', 420, 1560, 3.3, -0.08, 'КОСТЬ']];
  function sky(t) {                                                    // над коробкой: кухня, лампа, карта-салфетка США с точками
    vgrad(-900, 600, ['#2a1a14', '#5a3a28', '#8a5a38']); glow(540, -300, 500, 'rgba(255,220,150,1)', 0.5);
  }
  function napkin(t) {                                                // карта-салфетка США над коробкой
    push(560, 420, 0.9, Math.sin(t * 1.4) * 0.02); pencil([[-300, -360], [-300, -230]], { w: 4, col: '#2a1a10', pass2: false }); pencil([[300, -360], [300, -230]], { w: 4, col: '#2a1a10', pass2: false });
    const n = rect(-420, -230, 840, 520, { wash: '#f6ecd6', washA: 1, w: 3, col: '#5a3a14', key: 2800 }); for (let i = 0; i < 14; i++) { ell(-420 + i * 60, -230, 30, 14, { wash: '#f6ecd6', washA: 1, w: 2, col: '#5a3a14' }); ell(-420 + i * 60, 290, 30, 14, { wash: '#f6ecd6', washA: 1, w: 2, col: '#5a3a14' }); }
    ctx.save(); ctx.globalAlpha = 0.25; ctx.fillStyle = '#b8733a'; ctx.beginPath(); ctx.ellipse(300, 200, 60, 40, 0.4, 0, 6.3); ctx.fill(); ctx.restore();
    const usa = [[-360, -100], [-250, -160], [-40, -150], [140, -170], [300, -150], [370, -90], [350, 20], [300, 120], [220, 200], [60, 180], [-80, 210], [-220, 160], [-330, 80]];
    blob(usa, { wash: '#e8d4a8', washA: 1, w: 2.6, col: '#8a5a2a', key: 2801 }); const k = clamp((t - EV.sh_us + 0.2) / 1.6), r = rng(2802);
    for (let i = 0; i < 70; i++) { const x = -330 + r() * 680, y = -130 + r() * 300, on = (330 - x) / 680 < k; if (!on) continue; ell(x, y, 8, 8, { wash: '#d9482b', washA: 1, w: 1.2, col: '#4a0a06' }); glow(x, y, 18, 'rgba(255,140,80,1)', 0.35); }
    dashL([[260, -60], [100, 0], [-120, 40], [-300, 0]], '#d9482b', 0.8 * k, 3); txt('1983', 0, 250, 50, { font: 'Osw', col: '#d9482b' }); pop();
  }
  function walls(t) {                                                  // внутренность коробки: стены томатного картона с гофрой и волной, клапаны наверху
    const back = poly([[-300, 300], [1380, 300], [1300, 1200], [-220, 1200]], { wash: '#c43c24', washA: 1, w: 3, col: '#3a0a04', key: 2810 }); shadeG(back.path, 540, 1200, 540, 300, '#5a1006', 0.5);
    ctx.save(); ctx.clip(back.path); for (let i = 0; i < 40; i++) pencil([[-300 + i * 44, 300], [-260 + i * 42, 1200]], { w: 3, col: '#8a2414', a: 0.3, pass2: false });
    ctx.fillStyle = '#f4e6c8'; ctx.globalAlpha = 0.95; ctx.beginPath(); ctx.moveTo(-300, 900); for (let i = 0; i <= 34; i++) ctx.lineTo(-300 + i * 50, 880 + Math.sin(i * 0.7) * 40); ctx.lineTo(1400, 1300); ctx.lineTo(-300, 1300); ctx.fill(); ctx.globalAlpha = 1;
    txt('ТОМ НА ВКУС', 540, 600, 150, { font: 'Osw', col: '#a8321e', a: 0.6 }); for (let i = 0; i < 4; i++) { const r = rng(2811 + i); ell(r() * 1000, 400 + r() * 700, 60 + r() * 60, 40 + r() * 40, { wash: '#7a1a0c', washA: 0.25, line: false, rot: r() }); } ctx.restore();
    for (const [x, sd] of [[-300, 1], [1380, -1]]) { const fl = poly([[x, 300], [x + sd * 300, 160], [x + sd * 400, -260], [x + sd * 80, 300]], { wash: '#d9482b', washA: 1, w: 3, col: '#3a0a04', key: 2812 + sd }); shadeG(fl.path, x, 300, x + sd * 300, 0, '#7a1a0c', 0.4); }
  }
  function floor(t) { const f = poly([[-220, 1200], [1300, 1200], [1700, 2200], [-620, 2200]], { wash: '#b8402a', washA: 1, w: 3, col: '#3a0a04', key: 2820 }); shadeG(f.path, 540, 1200, 540, 2000, '#e86a4a', 0.3);
    ctx.save(); ctx.clip(f.path); for (let i = 0; i < 6; i++) { const r = rng(2821 + i); ell(r() * 1300 - 100, 1300 + r() * 600, 120 + r() * 120, 30 + r() * 30, { wash: '#e8b060', washA: 0.25, line: false }); } ctx.restore();
    for (let i = 0; i < 14; i++) { const r = rng(2830 + i); push(r() * 1200 - 60, 1240 + r() * 500, 0.8 + r() * 1.6, r() * 3); poly([[-14, -8], [-2, -16], [14, -10], [12, 8], [-10, 10]], { wash: i % 3 ? FN.crumb : FN.crustL, washA: 1, w: 1.8, col: '#4a2408' }); pop(); }
    sauceCup(80, 1180, 3.2, FN.bbq, FN.bbqL, { drip: 1 }); sauceCup(1000, 1170, 3.0, FN.sour, FN.sourL);
  }
  function icon(kind, x, y, s, a) {                                    // контур предмета над наггетсом
    push(x, y, s); const o = { w: 6, col: '#fff8ec', a, pass2: false };
    if (kind === 'bell') { pencil(spline([[-50, 40], [-44, -10], [-26, -50], [0, -60], [26, -50], [44, -10], [50, 40], [-50, 40]], false, 6), o); ell(0, 52, 10, 10, { line: true, w: 5, col: '#fff8ec', a }); }
    if (kind === 'ball') { pencil(ellPts(0, 0, 54, 54, 0, 0, 30), o); pencil(spline([[-54, 0], [0, -14], [54, 0]], false, 6), o); pencil(spline([[0, -54], [16, 0], [0, 54]], false, 6), o); }
    if (kind === 'boot') pencil([[-30, -60], [10, -60], [10, 10], [60, 20], [60, 50], [-30, 50], [-30, -60]], o);
    if (kind === 'bone') { pencil([[-40, -10], [40, -10]], o); pencil([[-40, 10], [40, 10]], o); for (const sd of [-1, 1]) for (const v of [-1, 1]) pencil(ellPts(sd * 50, v * 14, 14, 14, 0, 0, 16), o); }
    pop();
  }
  function rocks(t, front) {                                                  // четыре наггетса-скалы: прыжок на своём слове, ярлык и контур
    const evs = [EV.sh_bell, EV.sh_ball, EV.sh_boot, EV.sh_bone];
    NUGS.forEach(([kind, x, y, s, rot, lab], i) => { if ((i === 3) !== front) return; const e = evs[i], hop = t > e && t < e + 0.45 ? Math.sin((t - e) / 0.45 * Math.PI) * 120 : 0, sq = t > e + 0.4 && t < e + 0.55 ? 0.1 : 0;
      ell(x, y + 110 * s / 3, 150 * s / 3, 26, { wash: '#000000', washA: 0.2, line: false }); push(x, y - hop, 1, 0); ctx.scale(1 + sq, 1 - sq); nugget(0, 0, s, rot, { kind, key: 2840 + i, face: t > e ? 'happy' : undefined }); pop();
      if (t > e) { const a = clamp((t - e) / 0.25); icon(kind, x, y - 260 * s / 3 - hop, 1.1, a); bubbleTag(lab, x, y - 400 * s / 3, t, e, '#d9482b', 46, -0.04 + i * 0.03); } });
  }
  WORLD.shapes = (t, u, cat) => {
    lay(6, () => { sky(t); }); lay(2.4, () => { walls(t); napkin(t); }); lay(1.3, () => { floor(t); });
    lay(1, () => { rocks(t, false); cat(); rocks(t, true); });
  };
  const trail = t => t < EV.sh_four ? 540 : t < EV.sh_ball ? 300 : t < EV.sh_boot ? 620 : t < EV.sh_bone ? 760 : 560;
  DIR.shapes = {
    outfit: 'chef', light: { side: -1, rim: '#ffd0a0' }, grade: ['#ff9060', 0.1],
    act: () => [[S0.shapes, 'awe'], [EV.sh_us, 'proud'], [EV.sh_four, 'grin'], [EV.sh_bell, 'laugh'], [EV.sh_ball, 'grin'], [EV.sh_boot, 'laugh'], [EV.sh_bone, 'proud']],
    pose: (t, u, b) => { const tx = trail(t), px = trail(t - 0.5), x = lerp(px, tx, sm(clamp((t - [EV.sh_four, EV.sh_ball, EV.sh_boot, EV.sh_bone].filter(e => t > e).pop() || 0) / 0.5))), mv = Math.abs(tx - px) > 1 && Math.abs(x - tx) > 4;
      const tgt = t < EV.sh_four ? null : t < EV.sh_ball ? NUGS[0] : t < EV.sh_boot ? NUGS[1] : t < EV.sh_bone ? NUGS[2] : NUGS[3], fl = tgt ? tgt[1] < x : false;
      return Object.assign(b, { x, y: 1480, s: 0.55, flip: fl, walk: mv ? t * 9 : undefined, look: t < EV.sh_four ? [0, -1] : [0.6, -0.4], hand: tgt ? [150, -330] : [90, -200], point: tgt ? 1 : 0, tailUp: true, apron: 1 }); },
    cam: () => [[S0.shapes, 560, 500, 0.1], [EV.sh_us, 560, 460, 0.16], [EV.sh_four - 0.2, 540, 1250, 0.2, 'x'], [EV.sh_bell, 380, 1180, 0.26], [EV.sh_ball, 560, 1150, 0.26], [EV.sh_boot, 760, 1180, 0.26], [EV.sh_bone, 520, 1300, 0.22], [S1.shapes, 520, 1260, 0.18]]
  };
  // ---------------------------------------------------------------- переход: клапаны коробки захлопываются и раскрываются
  TRANS_IN.shapes = { a: 0.25, b: 0.45, runA: 1, fx(k, t, A, B) {
    const c = k < 0.5 ? sm(k / 0.5) : 1 - sm((k - 0.5) / 0.5); drawBuf(k < 0.5 ? A : B, 1, 540, 960);
    scr(() => { const h = c * 980; for (const [y0, sd] of [[0, 1], [H, -1]]) { const P = [[0, y0], [W, y0], [W, y0 + sd * h], [0, y0 + sd * h]]; const f = poly(P, { wash: '#d9482b', washA: 1, w: 6, col: '#3a0a04' }); shadeG(f.path, 0, y0 + sd * h, 0, y0, '#7a1a0c', 0.5);
      ctx.save(); ctx.clip(f.path); for (let i = 0; i < 30; i++) pencil([[i * 40, y0], [i * 40 + 20, y0 + sd * h]], { w: 3, col: '#8a2414', a: 0.35, pass2: false }); ctx.restore(); }
      if (c > 0.85) txt('НАГГЕТСЫ', 540, 960, 120, { font: 'Osw', col: '#f4e6c8', a: (c - 0.85) / 0.15 }); });
  } };
})();
