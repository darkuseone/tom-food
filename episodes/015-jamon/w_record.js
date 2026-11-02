/* 015 — `record`: «Рекорд Гиннесса: окорок продали в Японию почти за двенадцать тысяч евро!» Японская ТВ-студия 2020: яркая сцена, стена экранов,
   софиты и фермы, бумажные фонари, занавес-норэн, оператор с камерой, ведущая с микрофоном, зрители на трибуне. В центре — золотой подиум, на нём окорок
   под стеклянным колпаком. Том-ведущий во фраке с фартуком. По словам: «Рекорд» — на экране вспыхивает рамка РЕКОРД 2020; «окорок» — колпак поднимается,
   прожектор; «в Японию» — на экране карта: самолётик Испания → Япония; «двенадцать тысяч евро» — табло цены крутится до 11 881 €; немая пауза — конфетти,
   зрители вскакивают, у Тома отвисает челюсть. Переход В сцену: экраны студии вспыхивают белым по очереди и складываются в новый кадр. */
(() => {
  EV.rc_rec = wtw('s6', 'Рекорд');
  EV.rc_ham = wtw('s6', 'окорок');
  EV.rc_jp = wtw('s6', 'Японию');
  EV.rc_eur = wtw('s6', 'двенадцать');
  EV.rc_gag = LE('s6') + 0.05;
  SHAKES.push([EV.rc_gag, 0.2, 8]);
  KEYW.push('Рекорд', 'евро!');

  function studio(t) {                                                  // фермы с софитами, стена экранов, фонари, норэн
    vgrad(-600, 1500, ['#141428', '#2a2048', '#3a2a58']); for (let i = 0; i < 2; i++) { const y = -420 + i * 120; pencil([[-400, y], [1600, y]], { w: 10, col: '#5a5a6a' }); for (let x = -400; x < 1600; x += 60) pencil([[x, y], [x + 60, y + (i ? -120 : 120)]], { w: 3, col: '#5a5a6a', pass2: false }); }
    for (let i = 0; i < 7; i++) { const x = -200 + i * 230, a = Math.sin(t * 1.5 + i) * 0.3; push(x, -300, 1, a); rect(-30, 0, 60, 70, { wash: '#2a2a2a', washA: 1, w: 2 }); pop(); rays(x, -230, 1.57 + a, 0.12, 1800, ['rgba(255,240,200,1)', 'rgba(255,120,200,1)', 'rgba(120,200,255,1)'][i % 3], 0.1, 3, t); }
    push(540, 380, 1); rect(-470, -260, 940, 520, { wash: '#0a0a14', washA: 1, w: 6, col: '#3a3a4a' }); for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) { const x = -460 + i * 310, y = -250 + j * 255, sc = rect(x, y, 300, 245, { wash: '#1a2a4a', washA: 1, w: 3, col: '#000' }); ctx.save(); ctx.clip(sc.path); vgrad(y, y + 245, ['#2a4a8a', '#6a2a8a']); for (let k = 0; k < 6; k++) pencil([[x, y + k * 45 + (t * 40) % 45], [x + 300, y + k * 45 + (t * 40) % 45]], { w: 2, col: '#ffffff', a: 0.08, pass2: false }); ctx.restore(); }
      if (t > EV.rc_rec) { const k = popK(t, EV.rc_rec, 0.4); push(-310, -120, k); rect(-130, -80, 260, 160, { wash: '#c89a3a', washA: 1, w: 4, col: '#5a3a08' }); rect(-110, -62, 220, 124, { wash: '#1a1a1a', washA: 1, w: 1.4 }); txt('РЕКОРД', 0, -8, 40, { font: 'Osw', col: '#ffe070' }); txt('2020', 0, 40, 34, { font: 'Osw', col: '#ffffff' }); pop(); }
      if (t > EV.rc_jp - 0.1) { push(310, 0, 1); blob([[-130, -40], [-90, -70], [-60, -30], [-100, 20]], { wash: '#e8c890', washA: 1, w: 1.4 }); blob([[90, -90], [110, -40], [130, 40], [110, 60], [96, 0]], { wash: '#e8c890', washA: 1, w: 1.4 }); const k = sm(clamp((t - EV.rc_jp + 0.1) / 0.8)); pencil(spline([[-100, -40], [0, -140], [110, -20]], false, 8), { w: 3, col: '#ffffff', a: 0.6, pass2: false }); const px = lerp(-100, 110, k), py = -40 - Math.sin(k * Math.PI) * 100 + (k > 0.5 ? 20 * (k - 0.5) : 0); push(px, py, 1, lerp(-0.8, 0.8, k)); poly([[-20, 0], [20, 0], [0, -8]], { wash: '#ffffff', washA: 1, w: 1 }); poly([[-4, -2], [4, -2], [0, -24]], { wash: '#ffffff', washA: 1, w: 1 }); pop(); txt('ESPAÑA', -100, 50, 20, { font: 'Osw', col: '#ffe070' }); txt('日本', 110, 100, 28, { font: 'Osw', col: '#ffe070' }); pop(); } pop();
    for (const x of [-250, 1330]) { for (let i = 0; i < 3; i++) { const y = 200 + i * 190, sw = Math.sin(t * 1.5 + i + x) * 0.06; push(x, y, 1, sw); ell(0, 0, 60, 80, { wash: '#e8443a', washA: 1, w: 2, col: '#5a0a0a' }); for (let k = -2; k <= 2; k++) pencil([[k * 24, -76], [k * 24, 76]], { w: 1.4, col: '#8a1a1a', a: 0.6, pass2: false }); glow(0, 0, 90, 'rgba(255,170,90,1)', 0.4); pop(); } }
    for (let i = 0; i < 5; i++) { const x = 90 + i * 180, sw = Math.sin(t * 2 + i) * 6; rect(x - 80 + sw, 680, 160, 200, { wash: i % 2 ? '#2a3a6a' : '#c8443a', washA: 1, w: 1.6, col: '#0a0a14' }); } txt('ハモン', 540, 790, 56, { font: 'Osw', col: '#ffffff', a: 0.9 });
  }
  function crowd(t) {                                                   // трибуна со зрителями, оператор с камерой, ведущая с микрофоном
    const up = t > EV.rc_gag; for (let i = 0; i < 7; i++) { const x = -120 + i * 200; human(x, 1240 - (up ? 20 : 0), 0.8, t, { body: ['#3a5a8a', '#c8443a', '#e8c040', '#5a8a5a'][i % 4], legs: '#2a2a34', hair: ['#1a1410', '#3a2010', '#1a1a1a'][i % 3], face: t > EV.rc_eur ? 'shock' : 'smile', armL: up ? 'up' : 'hold', armR: up ? 'up' : 'hold', look: 0, seed: 15700 + i }); }
    rect(-400, 1240, 2000, 40, { wash: '#2a2a3a', washA: 1, w: 2 });
    human(80, 1340, 1.05, t, { body: '#e83a6a', legs: '#2a2a34', hair: '#1a1410', face: t > EV.rc_eur ? 'shock' : 'smile', armL: 'hold', armR: 'up', look: 0.5, seed: 15710, long: 1 }); push(80 + 70, 1340 - 300, 1); rect(-6, 0, 12, 50, { wash: '#2a2a2a', washA: 1, w: 1 }); ell(0, 0, 14, 16, { wash: '#4a4a4a', washA: 1, w: 1.4 }); pop();
    human(1060, 1340, 1.05, t, { body: '#2a2a34', legs: '#2a2a34', hair: '#3a2a1a', face: 'calm', armL: 'hold', armR: 'hold', look: -0.5, seed: 15711, flip: -1 }); push(980, 1080, 1); rect(-90, -60, 140, 100, { wash: '#2a2a2e', washA: 1, w: 2.4, col: '#000' }); ell(-100, -10, 30, 34, { wash: '#4a4a5a', washA: 1, w: 2 }); ell(-104, -10, 16, 18, { wash: '#6a8ac8', washA: 1, line: false }); if (Math.sin(t * 6) > 0) ell(30, -50, 8, 8, { wash: '#ff2a2a', washA: 1, line: false }); pencil([[0, 40], [-40, 260], [0, 40], [40, 260]], { w: 5, col: '#3a3a3a', pass2: false }); pop();
  }
  function podium(t) {                                                  // золотой подиум, окорок под колпаком, табло цены, конфетти
    const tb = rect(-400, 1460, 1900, 800, { wash: '#2a2a40', washA: 1, w: 3, col: '#0a0a14', key: 15720 }); shadeG(tb.path, 0, 1900, 0, 1460, '#0a0a14', 0.45); for (let i = 0; i < 8; i++) pencil([[-400 + i * 260, 1460], [-600 + i * 300, 2000]], { w: 2, col: '#5a5a7a', a: 0.4, pass2: false });
    push(360, 1470, 1); const p = rect(-170, -140, 340, 140, { wash: '#c89a3a', washA: 1, w: 3, col: '#5a3a08', key: 15721 }); metalG(p.path, -40, -100, 260, '#ffe8a0', '#c89a3a', '#6a4a10'); txt('JABUGO', 0, -56, 30, { font: 'Osw', col: '#5a3a08' });
      const on = t > EV.rc_ham; if (on) { rays(0, -900, 1.57, 0.14, 1000, 'rgba(255,248,210,1)', 0.3, 4, t); glow(0, -260, 260, 'rgba(255,230,150,1)', 0.5); } jamonLeg(-20, -250, 0.62, -0.25, { cut: 0.5, tag: 'black', key: 15722 });
      const lift = on ? sm(clamp((t - EV.rc_ham) / 0.5)) : 0; push(0, -260 - lift * 260, 1); const d = shape(spline([[-170, 110], [-170, -60], [-100, -170], [100, -170], [170, -60], [170, 110]], false, 8), { wash: '#d8ecf4', washA: 0.18, w: 3, col: '#c8d8e8' }); pencil([[-120, -100], [-80, -150]], { w: 8, col: '#ffffff', a: 0.6, pass2: false }); ell(0, -180, 16, 12, { wash: '#c89a3a', washA: 1, w: 1.6 }); pop(); pop();
    if (t > EV.rc_eur - 0.1) { const q = clamp((t - EV.rc_eur + 0.1) / 0.8), v = Math.round(lerp(0, 11881, sm(q))); push(400, 1060, popK(t, EV.rc_eur - 0.1, 0.4)); rect(-220, -66, 440, 132, { wash: '#1a1a20', washA: 1, w: 5, col: '#c8a050' }); txt(v.toLocaleString('ru-RU').replace(/ /g, ' ') + ' €', 0, 26, 76, { font: 'Osw', col: '#ffe070' }); pop(); }
    if (t > EV.rc_gag) { const r = rng(15730); for (let i = 0; i < 50; i++) { const q = (t - EV.rc_gag) * (0.5 + r() * 0.6) + r() * 0.2; push(r() * 1300 - 100, -100 + q * 1100 + Math.sin(t * 4 + i) * 20, 1, t * 5 + i); rect(-8, -4, 16, 8, { wash: ['#ffd040', '#ff4a8a', '#4ac8ff', '#ffffff'][i % 4], washA: 1, line: false }); pop(); } }
  }
  function front(t) { push(-40, 1960, 1.6); rect(-80, -200, 160, 200, { wash: '#1a1a1a', washA: 1, w: 2 }); ell(0, -120, 50, 50, { wash: '#2a2a2a', washA: 1, w: 2 }); ell(0, -120, 30, 30, { wash: '#3a3a3a', washA: 1, line: false }); pop();
    push(1180, 1990, 1.6); pencil(spline([[-200, 0], [-100, -60], [0, -20], [100, -80]], false, 6), { w: 10, col: '#1a1a1a' }); pop(); motes(30, [0, 0, 1100, 1700], '#ffffff', t, 15740, { sp: 8, sz: 3, a: 0.5, wob: 2 }); }
  WORLD.record = (t, u, cat) => {
    lay(14, () => { studio(t); haze('#4a2a6a', 0.06); });
    lay(2.8, () => { crowd(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { podium(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.record = {
    outfit: 'tuxA', light: { side: -1, rim: '#ffd8f0' }, grade: ['#c8a0ff', 0.06],
    act: () => [[S0.record, 'proud'], [EV.rc_rec, 'talk'], [EV.rc_ham, 'awe'], [EV.rc_jp, 'smug'], [EV.rc_eur, 'shock'], [EV.rc_gag + 0.3, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 730, y: 1700, s: 1.0, flip: -1, look: t > EV.rc_eur ? [-0.6, -0.4] : t > EV.rc_jp ? [-0.2, -0.9] : [-0.7, 0.2], hand: t > EV.rc_eur ? [220, -400] : [220, -300], handF: t > EV.rc_eur ? [-60, -420] : [-120, -300], squash: b.squash + (t > EV.rc_gag && t < EV.rc_gag + 0.15 ? 0.1 : 0), tailUp: t > EV.rc_gag, point: t > EV.rc_ham && t < EV.rc_jp ? 1 : undefined }),
    cam: () => [[S0.record, 540, 900, 0.06], [EV.rc_rec, 380, 600, 0.12, 'x'], [EV.rc_ham, 480, 1250, 0.2], [EV.rc_jp, 760, 700, 0.12], [EV.rc_eur, 560, 1180, 0.22], [EV.rc_gag, 600, 1180, 0.2], [S1.record, 620, 1200, 0.24]]
  };
  // ---------------------------------------------------------------- переход: экраны студии вспыхивают по очереди и складываются в новый кадр
  TRANS_IN.record = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(A, 1, 540, 960); const e = sm(k), cols = 3, rows = 4, cw = W / cols, ch = H / rows;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) { const d = clamp(e * 2 - (i + j * cols) / (cols * rows)); if (d <= 0) continue; const P = new Path2D(); P.rect(i * cw, j * ch, cw, ch); inPath(P, () => drawBuf(B, 1, 540, 960));
      scr(() => { ctx.fillStyle = 'rgba(255,255,255,' + Math.max(0, 0.9 - d * 1.5) + ')'; ctx.fillRect(i * cw, j * ch, cw, ch); ctx.strokeStyle = 'rgba(20,20,40,' + (1 - d) + ')'; ctx.lineWidth = 10; ctx.strokeRect(i * cw, j * ch, cw, ch); }); }
  } };
})();
