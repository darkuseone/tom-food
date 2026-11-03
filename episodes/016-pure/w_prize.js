/* 016 — `prize`: «Вернувшись, он выиграл конкурс академии: картошка спасёт Францию от голода!» Зал Безансонской академии, 1770-е: колонны, хрустальная
   люстра со свечами, портреты в золотых рамах, бархатные портьеры, академики в пудреных париках за длинным столом с бумагами и колокольчиком, публика на
   скамьях. Том в придворном камзоле читает мемуар с кафедры. По словам: «Вернувшись» — двери распахиваются, свет; «выиграл» — председатель звонит в колокольчик,
   на Тома опускается медаль на ленте, аплодисменты, ценник PRIX; «конкурс академии» — свиток с печатью ACADÉMIE DE BESANÇON; «Францию от голода» — карта Франции
   на мольберте покрывается значками-картофелинами, пустая хлебная корзина наполняется картошкой. Переход В сцену: портьеры театрально раздвигаются. */
(() => {
  EV.pz_back = LS('s5');
  EV.pz_win = wtw('s5', 'выиграл');
  EV.pz_acad = wtw('s5', 'академии:');
  EV.pz_fr = wtw('s5', 'Францию');
  KEYW.push('выиграл', 'голода!');

  function hall(t) {                                                    // стены, колонны, портреты, люстра, окна
    vgrad(-600, 1500, ['#3a2a3a', '#6a4a5a', '#8a6a6a']); for (let x = -400; x < 1600; x += 50) pencil([[x, -500], [x, 1300]], { w: 2, col: '#7a5a6a', a: 0.4, pass2: false });
    for (const x of [-120, 360, 720, 1200]) { rect(x - 50, -400, 100, 1500, { wash: '#e8e0d0', washA: 1, w: 2, col: '#8a8070' }); for (let i = 0; i < 4; i++) pencil([[x - 30 + i * 20, -380], [x - 30 + i * 20, 1080]], { w: 2, col: '#b8b0a0', pass2: false }); rect(x - 70, -420, 140, 40, { wash: '#d8d0c0', washA: 1, w: 2 }); }
    for (const [x, c] of [[120, '#6a3a2a'], [540, '#2a4a3a'], [960, '#3a3a6a']]) { push(x, 260, 1); const f = rect(-110, -150, 220, 280, { wash: '#c89a3a', washA: 1, w: 3, col: '#5a3a08' }); metalG(f.path, -40, -60, 200, '#ffe8a0', '#c89a3a', '#6a4a10'); rect(-92, -132, 184, 244, { wash: c, washA: 1, w: 1.4 }); ell(0, -40, 40, 50, { wash: '#e2b48e', washA: 1, w: 1.4 }); blob([[-50, -60], [-40, -110], [40, -110], [50, -60], [44, 0], [-44, 0]], { wash: '#f4f4f0', washA: 1, w: 1.2 }); ell(0, -40, 40, 50, { wash: '#e2b48e', washA: 1, w: 1.4 }); rect(-60, 20, 120, 90, { wash: '#2a2a3a', washA: 1, w: 1.2 }); pop(); }
    push(540, -120, 1); pencil([[0, -300], [0, 0]], { w: 4, col: '#c89a3a', pass2: false }); for (let r = 0; r < 2; r++) { ell(0, r * 60, 200 - r * 70, 30, { line: true, w: 6, col: '#c89a3a' }); for (let i = 0; i < 8 - r * 3; i++) { const a = i / (8 - r * 3) * 6.283, x = Math.cos(a) * (200 - r * 70), y = r * 60 + Math.sin(a) * 30; rect(x - 5, y - 30, 10, 30, { wash: '#f8f4ea', washA: 1, w: 1 }); const f = Math.sin(t * 9 + i) * 3; blob([[x - 5, y - 30], [x, y - 52 - f], [x + 5, y - 30]], { wash: '#ffd04a', washA: 1, line: false }); glow(x, y - 40, 50, 'rgba(255,220,130,1)', 0.5); } } for (let i = 0; i < 10; i++) ell(-160 + i * 36, 40 + (i % 2) * 20, 6, 10, { wash: '#e8f4ff', washA: 0.8, w: 1 }); pop();
    for (const sd of [-1, 1]) { push(sd < 0 ? -320 : 1400, 400, 1); shape(spline([[-80, -600], [80, -600], [60 + Math.sin(t + sd) * 6, 0], [100, 700], [-100, 700]], true, 6), { wash: '#8a1a2a', washA: 1, w: 2, col: '#3a0a10' }); pop(); }
  }
  function academy(t) {                                                 // академики в париках за столом, колокольчик, публика
    const clap = t > EV.pz_win; for (let i = 0; i < 5; i++) { const x = -100 + i * 160; if (i === 2) continue; human(x, 1250, 0.9, t, { body: ['#2a2a3a', '#5a2a3a', '#2a3a5a', '#3a3a2a', '#4a2a2a'][i], legs: '#2a2a2a', hair: '#f4f4f0', face: clap ? 'grin' : 'calm', armL: clap && Math.sin(t * 14 + i) > 0 ? 'up' : 'hold', armR: clap ? 'up' : 'hold', look: 0.2, seed: 16600 + i }); push(x, 1250 - 256, 0.9); for (const sd of [-1, 1]) for (let k = 0; k < 2; k++) ell(sd * 40, -10 + k * 26, 16, 14, { wash: '#f8f8f4', washA: 1, w: 1, col: '#a8a8a8' }); pop(); }
    rect(-260, 1180, 900, 70, { wash: '#2a4a3a', washA: 1, w: 2, col: '#0a1a10' }); for (let i = 0; i < 6; i++) rect(-220 + i * 140, 1170, 80, 14, { wash: '#f8f4ea', washA: 1, w: 1 }); push(220, 1160, 1); const rg = t > EV.pz_win && t < EV.pz_win + 0.5 ? Math.sin(t * 40) * 0.3 : 0; push(0, 0, 1, rg); shape([[-16, 0], [-12, -30], [12, -30], [16, 0]], { wash: '#c89a3a', washA: 1, w: 1.6 }); pencil([[0, -30], [0, -46]], { w: 4, col: '#3a2a1a', pass2: false }); pop(); pop();
    for (let i = 0; i < 4; i++) { const x = 900 + i * 110; human(x, 1300, 0.85, t, { body: ['#6a3a5a', '#3a5a6a', '#8a6a3a', '#5a3a2a'][i], legs: '#2a2a2a', hair: '#d8d0c0', face: clap ? 'grin' : 'smile', armL: clap ? 'up' : 'hold', armR: clap ? 'up' : 'hold', look: -0.5, seed: 16610 + i, flip: -1, long: i % 2 }); }
  }
  function lectern(t) {                                                 // кафедра, свиток с печатью, мольберт с картой Франции, корзина
    const tb = rect(-400, 1440, 1900, 800, { wash: '#6a3a2a', washA: 1, w: 3, col: '#1a0a04', key: 16620 }); for (let i = 0; i < 12; i++) for (let j = 0; j < 5; j++) rect(-400 + i * 160 + (j % 2) * 80, 1440 + j * 100, 160, 100, { wash: (i + j) % 2 ? '#5a2a1a' : '#7a4a2a', washA: 0.6, w: 1, col: '#2a1008' });
    if (t > EV.pz_acad - 0.1) { push(240, 1420, popK(t, EV.pz_acad - 0.1, 0.4), -0.05); rect(-130, -170, 260, 170, { wash: '#f4e6c0', washA: 1, w: 2, col: '#6a4a1a' }); for (const sd of [-1, 1]) ell(sd * 130, -85, 14, 90, { wash: '#c8a868', washA: 1, w: 2 }); txt('ACADÉMIE', 0, -130, 24, { font: 'Osw', col: '#3a1a08' }); txt('DE BESANÇON', 0, -100, 22, { font: 'Osw', col: '#3a1a08' }); for (let i = 0; i < 3; i++) pencil([[-90, -76 + i * 16], [90, -76 + i * 16]], { w: 2, col: '#8a6a3a', a: 0.6, pass2: false }); ell(70, -24, 26, 26, { wash: '#a8221a', washA: 1, w: 2 }); pencil([[60, 0], [56, 40]], { w: 6, col: '#2a4a9a', pass2: false }); pop(); }
    push(900, 1440, 1); for (const sd of [-1, 1]) pencil([[sd * 90, 0], [sd * 50, -420]], { w: 8, col: '#5a3a1a' }); const m = rect(-140, -440, 280, 240, { wash: '#f4ecd8', washA: 1, w: 3, col: '#5a3a1a' }); blob([[-80, -400], [10, -420], [90, -380], [100, -300], [60, -230], [-30, -220], [-100, -270], [-110, -350]], { wash: '#c8d8a8', washA: 1, w: 2, col: '#4a5a2a' }); txt('FRANCE', 0, -390, 22, { font: 'Osw', col: '#3a4a1a' });
      if (t > EV.pz_fr) { const n = Math.min(8, Math.floor((t - EV.pz_fr) * 10) + 1); const P = [[-60, -360], [0, -380], [50, -340], [-80, -300], [10, -310], [60, -270], [-40, -250], [20, -250]]; for (let i = 0; i < n; i++) potato(P[i][0], P[i][1], 0.18, i, { key: 16621 + i }); } pop();
    push(620, 1520, 1); const bk = blob([[-110, 0], [-120, -80], [120, -80], [110, 0]], { wash: '#c8a058', washA: 1, w: 2, col: '#5a3a10' }); hatch(bk.path, bk.bb, { gap: 10, a: 0.5, col: '#8a6020', ang: 0.8 }); hatch(bk.path, bk.bb, { gap: 10, a: 0.5, col: '#8a6020', ang: -0.8 }); if (t > EV.pz_fr + 0.2) { const n = Math.min(7, Math.floor((t - EV.pz_fr - 0.2) * 9) + 1); for (let i = 0; i < n; i++) potato(-70 + (i % 4) * 46, -86 - Math.floor(i / 4) * 28, 0.42, i, { key: 16630 + i }); } pop();
    if (t > EV.pz_win + 0.1) bubbleTag('PRIX!', 760, 1000, t, EV.pz_win + 0.1, '#c89a20', 50, 0.05);
    if (t > EV.pz_fr + 0.5) bubbleTag('ОТ ГОЛОДА', 900, 920, t, EV.pz_fr + 0.5, '#2a6a3a', 40, -0.04);
  }
  function front(t) { push(-40, 1970, 1.6); rect(-140, -200, 280, 200, { wash: '#6a3a1a', washA: 1, w: 2.4, col: '#1a0a04' }); rect(-150, -220, 300, 30, { wash: '#8a5a2a', washA: 1, w: 2 }); pop(); push(1180, 1990, 1.6); for (let i = 0; i < 3; i++) potato(-60 + i * 60, -30, 0.7, i, { key: 16640 + i }); pop();
    motes(26, [0, 0, 1100, 1700], '#ffe0a0', t, 16645, { sp: 6, sz: 4, a: 0.5, wob: 2 }); }
  WORLD.prize = (t, u, cat) => {
    lay(14, () => { hall(t); haze('#d8a080', 0.06); });
    lay(2.6, () => { academy(t); });
    lay(1, () => { cat(); });
    lay(0.95, () => { lectern(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.prize = {
    outfit: 'courtA', light: { side: -1, rim: '#ffe0a0' }, grade: ['#f0c090', 0.06],
    act: () => [[S0.prize, 'talk'], [EV.pz_win, 'shock'], [EV.pz_win + 0.4, 'proud'], [EV.pz_acad, 'smug'], [EV.pz_fr, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 520, y: 1700, s: 1.0, flip: 1, look: t > EV.pz_fr ? [0.8, -0.3] : t > EV.pz_win ? [0, -0.8] : [-0.3, 0.3], hand: [200, -300], handF: t > EV.pz_fr ? [180, -420] : [-90, -220], prop: 'scrollP', propAng: 0.1, tailUp: t > EV.pz_win, point: t > EV.pz_fr ? 1 : undefined }),
    afterCat: (t, u, P) => { if (t < EV.pz_win) return; const k = sm(clamp((t - EV.pz_win) / 0.5)); push(P.x, P.y - 230 * P.s - (1 - k) * 600, P.s); pencil(spline([[-60, -60], [0, 10], [60, -60]], false, 5), { w: 12, col: '#2a4a9a', pass2: false }); const m = ell(0, 30, 34, 34, { wash: '#e8b030', washA: 1, w: 2, col: '#6a4a10' }); metalG(m.path, -10, 20, 40, '#fff0b0', '#e8b030', '#8a5a10'); txt('★', 0, 42, 30, { col: '#8a5a10' }); pop(); },
    cam: () => [[S0.prize, 560, 900, 0.06], [EV.pz_win, 520, 1200, 0.2, 'x'], [EV.pz_acad, 360, 1300, 0.2], [EV.pz_fr, 760, 1200, 0.18], [S1.prize, 760, 1220, 0.22]]
  };
  // ---------------------------------------------------------------- переход: бархатные портьеры раздвигаются
  TRANS_IN.prize = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k); if (e < 0.5) { drawBuf(A, 1, 540, 960); const c = e * 2; scr(() => { for (const sd of [-1, 1]) { ctx.save(); ctx.fillStyle = '#8a1a2a'; const w = W / 2 * c; ctx.fillRect(sd < 0 ? 0 : W - w, 0, w, H); ctx.fillStyle = 'rgba(0,0,0,0.25)'; for (let i = 0; i < 6; i++) ctx.fillRect((sd < 0 ? 0 : W - w) + i * w / 6, 0, 8, H); ctx.restore(); } }); return; }
    drawBuf(B, 1, 540, 960); const c = (1 - e) * 2; scr(() => { for (const sd of [-1, 1]) { ctx.save(); ctx.fillStyle = '#8a1a2a'; const w = W / 2 * c; ctx.fillRect(sd < 0 ? 0 : W - w, 0, w, H); ctx.restore(); } });
  } };
})();
