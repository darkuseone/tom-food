/* 015 — `name`: «Само слово „хамон“ — французское: „жамбон“, от „жамб“ — нога. Раньше был „перниль“.» Парижская шаркютри XVII в.: витрина с колбасами
   и паштетами, вывеска JAMBON, окорока на крюках, мраморный прилавок, мясник в колпаке, покупательница в чепце, за окном — мансарды и Сена; на стене — карта
   «Франция → Испания» со стрелкой через Пиренеи. Том в парижском костюме с фартуком. По словам: «хамон» — над Томом надпись JAMÓN; «французское» — флажки, стрелка
   на карте едет из Франции в Испанию; «жамбон» — вывеска JAMBON загорается; «нога» — схема ноги свиньи: окорок подсвечен, буквы JAMBE; «перниль» — старая
   испанская табличка PERNIL падает и трескается. Переход В сцену: кадр складывается, как карта, и разворачивается новой сценой. */
(() => {
  EV.nm_jam = wtw('s3', '«хамон»');
  EV.nm_fr = wtw('s3', 'французское:');
  EV.nm_jb = wtw('s3', '«жамбон»,');
  EV.nm_leg = wtw('s3', 'нога.');
  EV.nm_old = wtw('s3', '«перниль».');
  KEYW.push('французское:', '«перниль».');

  function paris(t) { vgrad(-200, 700, ['#9ab0c8', '#e0e4e8']); for (const [x, w, h] of [[-60, 260, 360], [220, 220, 420], [460, 260, 340]]) { rect(x, 700 - h, w, h, { wash: '#e8dcc0', washA: 1, w: 1.6, col: '#6a604a' }); shape([[x - 10, 700 - h], [x + 20, 640 - h], [x + w - 20, 640 - h], [x + w + 10, 700 - h]], { wash: '#4a5a6a', washA: 1, w: 1.4 }); for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) rect(x + 24 + i * (w - 48) / 3, 740 - h + j * 90, 36, 56, { wash: '#4a6a8a', washA: 1, w: 1 }); } }
  function shop(t) {                                                    // стены, окно, вывеска, карта, крюки с окороками, полки
    vgrad(-600, 1500, ['#3a3a2a', '#6a5a3a', '#8a7a54']); for (let x = -400; x < 1600; x += 100) pencil([[x, -500], [x, 1300]], { w: 4, col: '#4a3a24', a: 0.5, pass2: false });
    push(160, 420, 1); const w = rect(-200, -240, 400, 420, { wash: '#9ab0c8', washA: 1, w: 10, col: '#2a2010', key: 15400 }); ctx.save(); ctx.clip(w.path); push(-400, -500, 1); paris(t); pop(); ctx.restore(); pencil([[0, -240], [0, 180]], { w: 8, col: '#2a2010' }); for (let i = 1; i < 3; i++) pencil([[-200, -240 + i * 140], [200, -240 + i * 140]], { w: 6, col: '#2a2010' }); pop();
    const on = t > EV.nm_jb; push(560, 170, 1); rect(-300, -70, 600, 140, { wash: '#2a1a10', washA: 1, w: 4, col: '#c8a050' }); if (on) glow(0, 0, 360, 'rgba(255,220,140,1)', 0.45); txt('JAMBON', 0, 30, 96, { font: 'Osw', col: on ? '#ffe070' : '#a8884a' }); pop();
    push(930, 520, 1); const m = rect(-210, -170, 420, 340, { wash: '#efe2c0', washA: 1, w: 4, col: '#5a3a1a', key: 15401 }); blob([[-160, -130], [-20, -150], [60, -90], [20, -10], [-120, 0], [-170, -60]], { wash: '#c8d8a8', washA: 1, w: 1.6, col: '#5a6a3a' }); blob([[-150, 30], [40, 20], [140, 60], [150, 140], [-40, 150], [-160, 110]], { wash: '#e8c890', washA: 1, w: 1.6, col: '#8a6a2a' });
      txt('FRANCE', -80, -60, 26, { font: 'Osw', col: '#3a4a2a' }); txt('ESPAÑA', 0, 100, 26, { font: 'Osw', col: '#6a3a1a' }); for (let i = 0; i < 7; i++) poly([[-120 + i * 34, 16], [-104 + i * 34, -12], [-88 + i * 34, 16]], { wash: '#8a8a7a', washA: 1, w: 1 });
      if (t > EV.nm_fr) { const k = sm(clamp((t - EV.nm_fr) / 0.7)); const ax = lerp(-60, 20, k), ay = lerp(-80, 80, k); pencil(spline([[-60, -80], [-20, 0], [ax, ay]], false, 6), { w: 6, col: '#c8221a', pass2: false }); poly([[ax - 14, ay - 14], [ax + 6, ay + 16], [ax + 16, ay - 10]], { wash: '#c8221a', washA: 1, line: false }); } pop();
    rect(-400, 230, 2000, 24, { wash: '#4a3a24', washA: 1, w: 2 }); for (let i = 0; i < 7; i++) { const x = -260 + i * 120 + (i > 2 ? 640 : 0); if (x > 1500) continue; pencil([[x, 250], [x, 300]], { w: 3, col: '#5a5a5a', pass2: false }); if (i % 2) { for (let k = 0; k < 3; k++) ell(x + (k - 1) * 18, 340, 12, 40, { wash: '#8a3a2a', washA: 1, w: 1.4 }); } else jamonLeg(x - 20, 420, 0.42, -0.55, { key: 15402 + i }); }
  }
  function staff(t) {                                                   // мясник в колпаке, покупательница в чепце
    human(160, 1300, 1.05, t, { body: '#f4f0e6', bodyD: '#b8b0a0', legs: '#3a3a4a', hair: '#5a3a20', face: t > EV.nm_old ? 'shock' : 'smile', armL: 'hold', armR: t > EV.nm_jb ? 'point' : 'hold', look: 0.5, seed: 15410 }); hat20(160, 1300, 1.05, 'chef'); stache(160, 1300, 1.05);
    human(1010, 1300, 1.05, t, { body: '#4a6a8a', legs: '#2a2a34', hair: '#c8a060', face: t > EV.nm_leg ? 'smile' : 'calm', armL: 'hold', armR: 'hold', look: -0.5, seed: 15411, flip: -1, long: 1 }); kerchief20(1010, 1300, 1.05, '#f4f0e6', -1);
    push(1060, 1100, 1); pencil(spline([[-40, 0], [0, 60], [40, 0]], false, 5), { w: 4, col: '#8a6a3a', pass2: false }); blob([[-50, 0], [50, 0], [40, 60], [-40, 60]], { wash: '#c8a868', washA: 1, w: 1.6, col: '#5a3a1a' }); pop();
  }
  function counter(t) {                                                 // мраморный прилавок: паштеты, колбасы, схема ноги, табличка PERNIL
    const tb = rect(-400, 1440, 1900, 800, { wash: '#e8e4dc', washA: 1, w: 3, col: '#3a3a3a', key: 15420 }); shadeG(tb.path, 0, 1900, 0, 1440, '#8a8478', 0.4); for (let i = 0; i < 6; i++) pencil(spline([[-400 + i * 300, 1460], [-300 + i * 300, 1600], [-350 + i * 300, 1800]], false, 6), { w: 2, col: '#a8a49c', a: 0.6, pass2: false });
    for (let i = 0; i < 3; i++) { push(-60 + i * 120, 1480, 1); rect(-50, -50, 100, 50, { wash: '#c8784a', washA: 1, w: 2, col: '#3a1a08' }); ell(0, -50, 50, 12, { wash: '#a8542a', washA: 1, w: 1.4 }); pop(); }
    const lg = t > EV.nm_leg - 0.1; push(560, 1400, lg ? popK(t, EV.nm_leg - 0.1, 0.4) : 0.0001); rect(-170, -150, 340, 220, { wash: '#f8f2e0', washA: 1, w: 3, col: '#5a3a1a' }); push(-20, -30, 0.55); ibPig(0, 60, 1, t, { key: 15421 }); pop();
      glow(36, -40, 70, 'rgba(255,90,60,1)', 0.6); pencil([[70, -30], [120, -110]], { w: 3, col: '#c8221a', pass2: false }); txt('JAMBE', 110, -116, 26, { font: 'Osw', col: '#c8221a' }); txt('= НОГА', 0, 56, 30, { font: 'Osw', col: '#3a1a08' }); pop();
    if (t > EV.nm_jam) bubbleTag('JAMÓN', 760, 900, t, EV.nm_jam, '#c8221a', 54, -0.04);
    if (t > EV.nm_fr) { push(400, 1000, popK(t, EV.nm_fr, 0.4)); for (const [i, c] of ['#2a4a9a', '#f4f4f0', '#c8221a'].entries()) rect(-60 + i * 40, -30, 40, 60, { wash: c, washA: 1, w: 1.4, col: '#1a1a1a' }); pop(); }
    if (t > EV.nm_old - 0.2) { const q = t - EV.nm_old + 0.2, fall = Math.min(1, q / 0.4), y = lerp(1000, 1420, fall * fall); push(960, y, 1, fall * 0.5); rect(-120, -40, 240, 80, { wash: '#8a6a3a', washA: 1, w: 3, col: '#2a1a08' }); txt('PERNIL', 0, 18, 44, { font: 'Osw', col: '#f4e6c8' }); if (fall >= 1) { pencil([[-40, -40], [-10, 0], [-30, 40]], { w: 3, col: '#1a0a04', pass2: false }); pencil([[-120, -40], [120, 40]], { w: 8, col: '#c8221a', pass2: false }); } pop(); }
  }
  function front(t) { push(-40, 1960, 1.6); for (let i = 0; i < 3; i++) ell(-60 + i * 50, -30, 22, 60, { wash: '#8a3a2a', washA: 1, w: 1.6, col: '#3a1408' }); pop(); push(1180, 1960, 1.5); rect(-100, -80, 200, 80, { wash: '#c8784a', washA: 1, w: 2, col: '#3a1a08' }); pop(); motes(22, [100, 300, 1000, 1700], '#fff4d0', t, 15430, { sp: 6, sz: 4, a: 0.4, wob: 2 }); rays(160, 420, 1.0, 0.35, 1400, 'rgba(240,245,255,1)', 0.14, 5, t); }
  WORLD.name = (t, u, cat) => {
    lay(14, () => { shop(t); haze('#e8d8b0', 0.06); });
    lay(2.8, () => { staff(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { counter(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.name = {
    outfit: 'parisA', light: { side: -1, rim: '#f0f4ff' }, grade: ['#d8c8a0', 0.06],
    act: () => [[S0.name, 'talk'], [EV.nm_fr, 'smug'], [EV.nm_jb, 'proud'], [EV.nm_leg, 'grin'], [EV.nm_old, 'shock']],
    pose: (t, u, b) => Object.assign(b, { x: 620, y: 1680, s: 1.02, flip: 1, look: t > EV.nm_old ? [0.8, -0.2] : t > EV.nm_leg ? [-0.3, 0.6] : t > EV.nm_jb ? [0, -0.9] : t > EV.nm_fr ? [0.8, -0.6] : [0.2, -0.3], hand: [180, -300], handF: t > EV.nm_fr && t < EV.nm_leg ? [-160, -400] : [-90, -220], prop: 'jamonP', propAng: 0.2, point: t > EV.nm_fr && t < EV.nm_leg ? 1 : undefined }),
    cam: () => [[S0.name, 560, 900, 0.06], [EV.nm_jam, 620, 1200, 0.2, 'x'], [EV.nm_fr, 760, 800, 0.16], [EV.nm_jb, 560, 900, 0.1], [EV.nm_leg, 560, 1300, 0.22], [EV.nm_old, 760, 1260, 0.2], [S1.name, 760, 1260, 0.24]]
  };
  // ---------------------------------------------------------------- переход: кадр складывается гармошкой, как карта, и раскрывается новой сценой
  TRANS_IN.name = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), src = e < 0.5 ? A : B, f = e < 0.5 ? 1 - e * 2 : (e - 0.5) * 2, N = 4, sw = W / N; scr(() => { ctx.fillStyle = '#2a2018'; ctx.fillRect(0, 0, W, H); });
    for (let i = 0; i < N; i++) { const w = sw * Math.max(0.02, f), x = W / 2 - (W * Math.max(0.02, f)) / 2 + i * w; ctx.save(); ctx.beginPath(); ctx.rect(x, 0, w + 1, H); ctx.clip(); ctx.setTransform(Math.max(0.02, f), 0, 0, 1, W / 2 - W * Math.max(0.02, f) / 2, 0); ctx.drawImage(src, 0, 0); ctx.restore();
      scr(() => { ctx.fillStyle = 'rgba(0,0,0,' + ((i % 2 ? 0.35 : 0.1) * (1 - f)) + ')'; ctx.fillRect(x, 0, w, H); }); }
  } };
})();
