/* 016 — `robuchon` (ТОМ-МАЛЫШ, раз за ролик): «Шеф Жоэль Робюшон клал на кило картошки четверть кило сливочного масла!» Внутри медной кастрюли
   ресторана 1980-х: Том-малыш в поварском колпаке стоит на вершине горы пюре — склоны в завитках, ложбины, пар клубится как облака; стены кастрюли —
   медные скалы с отражениями; сверху — край кастрюли, кухня в дымке, лампы, великанская рука шефа в белом рукаве с лопаткой. По словам: «Робюшон» —
   великанская лопатка проходит по склону волной; «на кило картошки» — над горой табло 1 КГ; «четверть кило» — с неба падают кубы масла размером с дом,
   табло 250 Г; «сливочного масла» — кубы тают, по склонам текут золотые реки; немая пауза — Том на куске масла съезжает со склона, как на сноуборде.
   Переход В сцену: кадр проваливается в воронку пюре, как в водоворот. */
(() => {
  EV.rb_chef = wtw('s6', 'Робюшон');
  EV.rb_kg = wtw('s6', 'кило');
  EV.rb_q = wtw('s6', 'четверть');
  EV.rb_melt = wtw('s6', 'сливочного');
  EV.rb_gag = LE('s6') + 0.05;
  SHAKES.push([EV.rb_q + 0.25, 0.2, 10]);
  KEYW.push('Робюшон', 'масла!');

  function kitchen(t) {                                                 // кухня в дымке над кастрюлей: лампы, полки, огромная рука с лопаткой
    vgrad(-700, 600, ['#2a2a30', '#5a5048', '#8a7a68']); for (let i = 0; i < 3; i++) { const x = 100 + i * 440; pencil([[x, -700], [x, -460]], { w: 3, col: '#1a1a1a', pass2: false }); shape([[x - 90, -400], [x - 40, -470], [x + 40, -470], [x + 90, -400]], { wash: '#c8c8c0', washA: 1, w: 2 }); glow(x, -380, 300, 'rgba(255,230,180,1)', 0.45); }
    for (let i = 0; i < 6; i++) { const c = ell(-300 + i * 340, -150, 60, 60, { wash: '#c87a3a', washA: 0.5, w: 1.4, col: '#6a3010' }); }
    const sw = t > EV.rb_chef - 0.3 ? sm(clamp((t - EV.rb_chef + 0.3) / 1.2)) : 0; if (sw > 0 && sw < 1) { push(lerp(1600, -500, sw), lerp(-300, 200, Math.sin(sw * Math.PI)), 3, -0.5); rect(-30, -500, 60, 420, { wash: '#2a2a2a', washA: 1, w: 2 }); const sp = shape([[-90, -80], [90, -80], [80, 60], [-80, 60]], { wash: '#b8bcc4', washA: 1, w: 2, col: '#3a3e44' }); metalG(sp.path, -30, -20, 120, '#ffffff', '#b8bcc4', '#6a6e74'); pop();
      push(lerp(1700, -400, sw), lerp(-1100, -600, Math.sin(sw * Math.PI)), 3, -0.5); rect(-80, -300, 160, 300, { wash: '#f8f8f4', washA: 1, w: 2, col: '#8a8a8a' }); ell(0, 0, 70, 50, { wash: '#e2b48e', washA: 1, w: 2 }); pop(); }
  }
  function pot(t) {                                                     // медные стенки кастрюли, гора пюре с завитками, пар-облака
    for (const sd of [-1, 1]) { const w = shape([[sd * 760 + 540, -400], [sd * 470 + 540, -400], [sd * 520 + 540, 1500], [sd * 900 + 540, 1500]], { wash: '#b8642a', washA: 1, w: 3, col: '#4a1a08' }); metalG(w.path, sd * 520 + 540, 400, 700, '#ffc890', '#b8642a', '#5a2408'); for (let i = 0; i < 4; i++) pencil([[sd * (490 + i * 20) + 540, -380], [sd * (540 + i * 20) + 540, 1400]], { w: 6, col: '#ffd8b0', a: 0.3, pass2: false }); }
    ell(540, -400, 620, 60, { line: true, w: 26, col: '#c87a3a' });
    const m = shape(spline([[-400, 1600], [-200, 1100], [100, 800], [400, 700], [540, 690], [700, 720], [1000, 850], [1300, 1150], [1500, 1600]], true, 10), { wash: PU.mash, washA: 1, w: 3, col: '#a8946a', key: 16700 }); shadeG(m.path, 1100, 1400, 300, 700, PU.mashD, 0.45);
    for (let i = 0; i < 14; i++) { const r = rng(16701 + i), x = -200 + r() * 1500, y = 760 + r() * 700; pencil(spline([[x - 60, y], [x - 20, y - 26], [x + 20, y - 6], [x + 60, y - 30]], false, 6), { w: 4, col: '#c8b488', pass2: false }); pencil([[x - 40, y - 20], [x, y - 30]], { w: 5, col: '#ffffff', a: 0.5, pass2: false }); }
    for (const [x, y, s2] of [[250, 900, 1.2], [860, 880, 1.0], [1050, 1100, 1.4], [120, 1150, 1.5], [700, 1250, 1.3]]) { push(x, y, s2); for (let k = 0; k < 3; k++) pencil([[k * 10 - 10, 0], [k * 14 - 14, -110 - k * 20]], { w: 8, col: '#4a8a2a' }); pop(); }
    for (const [x, y, r] of [[380, 980, 18], [640, 1050, 14], [940, 1000, 20], [200, 1300, 22], [1000, 1350, 16]]) { ell(x, y, r, r * 0.8, { wash: '#2a2420', washA: 1, w: 1.4, col: '#0a0808' }); ell(x - r * 0.3, y - r * 0.3, r * 0.3, r * 0.25, { wash: '#6a5a50', washA: 1, line: false }); }
    for (const [x, y] of [[500, 1180], [820, 1150], [300, 1050]]) ell(x, y, 60, 14, { wash: PU.butter, washA: 0.7, w: 1, col: PU.butterD });
    for (let i = 0; i < 6; i++) { const q = (t * 0.12 + i / 6) % 1, x = -100 + i * 260 + Math.sin(t + i) * 40; ell(x, 600 - q * 900, 150 + q * 100, 60 + q * 30, { wash: '#ffffff', washA: 0.35 * (1 - q), line: false }); }
  }
  function butter(t) {                                                  // кубы масла падают, тают, золотые реки; табло 1 КГ и 250 Г
    const C = [[160, 860, 1.6], [880, 820, 1.9], [420, 760, 1.2], [1180, 1000, 1.4]]; C.forEach(([x, y, s], i) => { const t0 = EV.rb_q + i * 0.12; if (t < t0) return; const q = clamp((t - t0) / 0.35), mt = t > EV.rb_melt ? clamp((t - EV.rb_melt - i * 0.1) / 1.2) : 0;
      push(x, lerp(-500, y, q * q), s * (1 - mt * 0.5)); if (q >= 1) ell(0, 10, 90 + mt * 120, 22 + mt * 20, { wash: PU.butter, washA: 0.85, line: false }); const b = shape([[-60, 0], [60, 0], [76, -20], [76, -90], [-44, -90], [-60, -70]], { wash: PU.butter, washA: 1, w: 2.4, col: PU.butterD }); shadeG(b.path, 76, -20, -60, -90, PU.butterD, 0.3); pencil([[-40, -80], [50, -80]], { w: 5, col: '#fff8c0', pass2: false }); pop();
      if (mt > 0) pencil(spline([[x, y + 10], [x + 30 * (i % 2 ? 1 : -1), y + 120 * mt], [x + 60 * (i % 2 ? 1 : -1), y + 300 * mt]], false, 6), { w: 18, col: PU.butter, a: 0.85, pass2: false }); });
    if (t > EV.rb_kg) { push(250, 380, popK(t, EV.rb_kg, 0.4)); rect(-140, -56, 280, 112, { wash: '#1a1a20', washA: 1, w: 4, col: '#c8a050' }); txt('1 КГ', 0, 24, 66, { font: 'Osw', col: '#f4e6c8' }); pop(); }
    if (t > EV.rb_q + 0.2) { push(840, 380, popK(t, EV.rb_q + 0.2, 0.4)); rect(-150, -56, 300, 112, { wash: '#1a1a20', washA: 1, w: 4, col: '#c8a050' }); txt('250 Г', 0, 24, 66, { font: 'Osw', col: '#ffe070' }); pop(); }
  }
  function board(t) {                                                   // кусок масла-сноуборд под Томом на паузе, брызги пюре
    if (t < EV.rb_gag - 0.1) return; const q = clamp((t - EV.rb_gag + 0.1) / 0.9), x = lerp(560, 230, sm(q)), y = lerp(720, 1180, sm(q)); push(x, y, 1.1, 0.5); rect(-70, -14, 140, 28, { wash: PU.butter, washA: 1, w: 2, col: PU.butterD }); pop();
    for (let i = 0; i < 6; i++) ell(x + 60 + i * 14, y - 10 - Math.sin(t * 20 + i) * 16, 8, 8, { wash: PU.mash, washA: 0.9, w: 1, col: '#a8946a' });
  }
  function front(t) { push(-60, 1950, 1.8); mashMound(0, 0, 200, 120, t, { butter: false, key: 16710 }); pop(); push(1180, 1980, 1.8); const b = rect(-80, -80, 160, 80, { wash: PU.butter, washA: 1, w: 2, col: PU.butterD }); pop(); motes(30, [0, 300, 1100, 1700], '#fff8e0', t, 16715, { sp: 10, sz: 4, a: 0.5, wob: 3 }); haze('#fff0d0', 0.05); }
  WORLD.robuchon = (t, u, cat) => {
    lay(14, () => { kitchen(t); haze('#8a7a68', 0.15); });
    lay(1.8, () => { pot(t); });
    lay(1.3, () => { butter(t); });
    lay(1.02, () => { board(t); });
    lay(1, () => { cat(); });
    lay(0.6, () => { front(t); });
  };
  DIR.robuchon = {
    outfit: 'chef', light: { side: -1, rim: '#ffe8b0' }, grade: ['#ffd890', 0.06],
    act: () => [[S0.robuchon, 'proud'], [EV.rb_chef, 'awe'], [EV.rb_kg, 'talk'], [EV.rb_q, 'shock'], [EV.rb_melt, 'laugh'], [EV.rb_gag, 'scared'], [EV.rb_gag + 0.5, 'laugh']],
    pose: (t, u, b) => { const sl = t > EV.rb_gag - 0.1 ? sm(clamp((t - EV.rb_gag + 0.1) / 0.9)) : 0; return Object.assign(b, { x: lerp(560, 230, sl), y: lerp(700, 1160, sl), s: 0.5, flip: sl > 0 ? -1 : 1, rot: sl > 0 && sl < 1 ? 0.4 : 0, walk: t < EV.rb_chef ? t * 8 : undefined,
      look: t > EV.rb_q ? [0.2, -0.9] : t > EV.rb_chef ? [0.8, -0.6] : [0.4, 0.2], hand: sl > 0 ? [180, -380] : [160, -300], handF: sl > 0 ? [-180, -380] : [-90, -220], tailUp: true, sweat: t > EV.rb_q && sl === 0 }); },
    cam: () => [[S0.robuchon, 540, 800, 0.04], [S0.robuchon + 0.7, 560, 560, 0.24, 'x'], [EV.rb_chef, 540, 480, 0.1], [EV.rb_kg, 460, 520, 0.14], [EV.rb_q, 540, 560, 0.08], [EV.rb_melt, 600, 700, 0.12], [EV.rb_gag, 400, 860, 0.2], [S1.robuchon, 280, 960, 0.24]]
  };
  // ---------------------------------------------------------------- переход: кадр проваливается в воронку пюре
  TRANS_IN.robuchon = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(B, 1, 540, 960); const e = sm(k); if (e >= 1) return; ctx.save(); ctx.translate(540, 960); ctx.rotate(e * 4); ctx.scale(1 - e, 1 - e); ctx.translate(-540, -960); ctx.beginPath(); ctx.arc(540, 960, 1300 * (1 - e) + 10, 0, 6.283); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
    scr(() => { ctx.save(); ctx.strokeStyle = 'rgba(251,242,214,' + (1 - e) + ')'; ctx.lineWidth = 30; for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.arc(540, 960, 1300 * (1 - e) + i * 60, e * 6 + i, e * 6 + i + 3); ctx.stroke(); } ctx.restore(); });
  } };
})();
