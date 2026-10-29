/* 002 — `recipe`: «Тысяча восемьсот девяносто четвёртый, первый печатный рецепт: рябчик, раки, каперсы… и оливки!» ТОМ-МАЛЫШ (раз за ролик):
   Том крошечный стоит на развороте журнала «Наша пища» 1894 года — строки текста под ногами как мостовая, за краем страницы — гигантский стол с чернильницей,
   пером и свечой. По словам сверху шлёпаются великаны: жареный рябчик (как дом), варёный рак (арка клешней), каперсы катятся валунами;
   на «и оливки!» из-за края выкатывается огромная оливка — Том обнимает её. Переход В сцену: кадр подбрасывают, как блин на сковороде. */
(() => {
  EV.rc_print = wtw('s5', 'печатный');
  EV.rc_grouse = wtw('s5', 'рябчик,');
  EV.rc_cray = wtw('s5', 'раки,');
  EV.rc_cap = wtw('s5', 'каперсы…');
  EV.rc_olive = wtw('s5', 'оливки!');
  SHAKES.push([EV.rc_grouse + 0.15, 0.2, 10], [EV.rc_cray + 0.15, 0.2, 10], [EV.rc_olive + 0.3, 0.25, 12]);
  KEYW.push('печатный', 'оливки!');

  const drop = (t, t0, y0, y1) => { const k = clamp((t - t0 + 0.25) / 0.25); return k < 1 ? lerp(y0, y1, k * k) : y1 - Math.abs(Math.sin((t - t0) * 14)) * 30 * Math.exp(-(t - t0) * 6); };
  function giantDesk(t) {                                               // за краем страницы: гигантский стол 1890-х, свеча, чернильница, перо, окно со светом
    vgrad(-800, 1400, ['#3a2414', '#6a4422', '#8a5a2e']); glow(900, 200, 700, 'rgba(255,220,150,1)', 0.35);
    push(820, 300, 3.2); candle(0, 0, 1, t, 7); pop(); glow(820, 120, 500, 'rgba(255,200,110,1)', 0.35);
    push(160, 640, 2.4); ell(0, 0, 90, 26, { wash: '#1a1a24', washA: 1, w: 2.4 }); rect(-70, -120, 140, 120, { wash: '#2a2a3a', washA: 1, w: 2.4, col: '#0a0a10' }); ell(0, -120, 70, 20, { wash: '#0a0a14', washA: 1, w: 2 }); glow(-30, -80, 20, 'rgba(255,255,255,1)', 0.5); pop();
    push(260, 330, 2.4, 0.5); blob([[0, 0], [-30, -120], [-10, -260], [10, -270], [20, -120]], { wash: '#f4ecd8', washA: 1, w: 2, col: '#6a5a3a' }); for (let i = 0; i < 12; i++) pencil([[0, -40 - i * 18], [-24, -60 - i * 18]], { w: 1.4, col: '#9a8a6a', pass2: false }); pencil([[0, 0], [10, 140]], { w: 4, col: '#3a2a1a' }); pop();
    const r = rng(7001); for (let i = 0; i < 10; i++) pencil(spline([[-300, 880 + i * 30], [500, 870 + i * 34 + r() * 10], [1400, 880 + i * 30]], false, 6), { w: 2, col: '#4a2a12', a: 0.4, pass2: false });
  }
  function page(t) {                                                    // разворот журнала — пол, по которому ходит Том-малыш
    const p = poly([[-500, 1000], [1600, 980], [1900, 2400], [-800, 2400]], { wash: '#f2e6c8', washA: 1, w: 3, col: '#6a5232', key: 7010 }); shadeG(p.path, 0, 2200, 0, 1000, '#c8a878', 0.4);
    ctx.save(); ctx.clip(p.path); for (let i = 0; i < 18; i++) { const y = 1080 + i * 60 + i * i * 2.2, sx = 1 + i * 0.07, r = rng(7020 + i);
      for (let w = 0; w < 7; w++) rect(540 + (w - 3.5) * 150 * sx + r() * 20, y, (60 + r() * 70) * sx, 10 * sx, { wash: '#4a3a2a', washA: 0.55, line: false }); }
    txt('НАША ПИЩА', 540, 1050, 70, { font: 'Osw', col: '#5a1a08', a: 0.85 }); txt('№ 6 · 1894', 540, 1110, 34, { font: 'Hand', col: '#5a3a1a' }); txt('соусъ провансаль', 300, 1300, 40, { font: 'Hand', col: '#3a2a1a', a: 0.75, rot: -0.03 });
    pencil([[540, 980], [540, 2400]], { w: 8, col: '#b89a6a', a: 0.6 }); ctx.restore();
    ctx.save(); ctx.globalAlpha = 0.18; ctx.fillStyle = '#8a5a2a'; ctx.beginPath(); ctx.ellipse(880, 1700, 160, 90, 0.3, 0, 6.3); ctx.fill(); ctx.restore();
  }
  function giants(t) {                                                  // великаны-ингредиенты падают по словам
    if (t > EV.rc_grouse - 0.25) roastBird(250, drop(t, EV.rc_grouse, -400, 1260), 2.6, t, { steam: 1 });
    if (t > EV.rc_cray - 0.25) crayfish(860, drop(t, EV.rc_cray, -500, 1180), 1.7, 0.15, t);
    if (t > EV.rc_cap - 0.1) { const r = rng(7030); for (let i = 0; i < 5; i++) { const k = clamp((t - EV.rc_cap - i * 0.08) / 0.9), x = lerp(-200, 120 + i * 90, sm(k)); push(x, 1460 + (i % 2) * 70, 1, k * 8); caper(0, 0, 7 + r() * 2); pop(); } }
    if (t > EV.rc_olive - 0.3) { const k = sm(clamp((t - EV.rc_olive + 0.3) / 0.6)); olive(lerp(1500, 760, k), 1430, 6.5, k * -6, { stuffed: 1, key: 7040 }); if (t > EV.rc_olive + 0.4) for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283 + t; txt('♥', 700 + Math.cos(a) * 240, 1250 + Math.sin(a) * 160, 40, { col: '#d9482b', a: 0.8 }); } }
    if (t > EV.rc_olive) bubbleTag('3–5 ОЛИВОК!', 760, 1080, t, EV.rc_olive + 0.15, '#6b7a2e', 54, -0.05);
  }
  WORLD.recipe = (t, u, cat) => {
    lay(9, () => { giantDesk(t); haze('#ffd8a0', 0.1); });
    lay(1.2, () => { page(t); });
    lay(1.05, () => { if (t < EV.rc_olive) giants(t); });
    lay(1, () => { cat(); });
    lay(0.98, () => { if (t >= EV.rc_olive) giants(t); });
    lay(0.6, () => { motes(30, [-200, 400, 1300, 2000], '#ffe8c0', t, 7050, { sp: 14, sz: 5, a: 0.5, wob: 2 }); });
  };
  DIR.recipe = {
    outfit: 'chefO', light: { side: -1, rim: '#ffd890' }, grade: ['#ffc070', 0.12],
    act: () => [[S0.recipe, 'awe'], [EV.rc_print, 'proud'], [EV.rc_grouse, 'shock'], [EV.rc_cray + 0.1, 'scared'], [EV.rc_cap, 'sideeye'], [EV.rc_olive, 'shock'], [EV.rc_olive + 0.5, 'laugh']],
    pose: (t, u, b) => { const ol = t > EV.rc_olive + 0.3, wk = t < EV.rc_grouse ? t * 8 : undefined;
      return Object.assign(b, { x: ol ? 600 : lerp(420, 560, clamp(u / 2.5)), y: 1560, s: 0.48, walk: wk, look: t < EV.rc_grouse ? [0, -0.8] : t < EV.rc_cap ? [-0.6, -0.6] : t < EV.rc_olive ? [-0.8, 0.2] : [0.8, 0], hand: ol ? [160, -280] : [80, -200], handF: ol ? [-20, -300] : [-80, -180], tailUp: ol }); },
    cam: () => [[S0.recipe, 560, 1300, 0.08], [S0.recipe + 1.0, 540, 1380, 0.16, 'x'], [EV.rc_grouse, 500, 1300, 0.1], [EV.rc_cray, 620, 1260, 0.06], [EV.rc_olive, 640, 1380, 0.2], [S1.recipe, 640, 1400, 0.3]]
  };
  // ---------------------------------------------------------------- переход: кадр подбрасывают, как блин на сковороде
  TRANS_IN.recipe = { a: 0.3, b: 0.4, runA: 0, fx(k, t, A, B) {
    scr(() => { ctx.fillStyle = '#1a1210'; ctx.fillRect(0, 0, W, H); const pan = ell(540, 1000, 700, 700, { wash: '#2a2624', washA: 1, w: 8, col: '#0a0806' }); metalG(pan.path, 300, 700, 900, '#6a6460', '#2a2624', '#0a0806'); pencil([[540, 1700], [560, 2100]], { w: 70, col: '#3a2a1a' }); });
    const ang = k * Math.PI, sy = Math.abs(Math.cos(ang)), lift = Math.sin(k * Math.PI) * 600;
    const s = 0.8 + 0.2 * Math.abs(k - 0.5) * 2, q = Math.max(0.02, sy); ctx.save(); ctx.setTransform(s, 0, 0, s * q, 540 * (1 - s), 960 - lift - 960 * s * q); ctx.drawImage(k < 0.5 ? A : B, 0, 0); ctx.restore();
  } };
})();
