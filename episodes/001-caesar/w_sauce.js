/* 001 — `sauce`: нуар-расследование. Ночная кладовая под одной качающейся лампой, на стене — плакат «РАЗЫСКИВАЕТСЯ» с анчоусом, перечёркнутым «НЕТ».
   «Хотя…» — лампа качнулась; Том-детектив (официант с лупой) наводит лупу на бутылку вустерского соуса — в линзе видно, как внутри плавают анчоусы, один подмигивает.
   Переход В сцену: капли соуса шлёпаются на объектив и стекают. */
(() => {
  EV.sc_no = LS('s6') + 0.15;
  EV.sc_though = wtw('s6', 'Хотя…');
  EV.sc_hide = wtw('s6', 'прятались');
  EV.sc_worc = wtw('s6', 'вустерском');
  KEYW.push('Анчоусов', 'вустерском');

  const lampA = t => t > EV.sc_though ? Math.sin((t - EV.sc_though) * 3) * 0.35 * Math.exp(-(t - EV.sc_though) * 0.6) : Math.sin(t * 1.2) * 0.04;
  function room(t) { vgrad(-400, 1700, ['#141016', '#22181a', '#120c0c']); const w = rect(-400, 100, 2000, 1200, { wash: '#2a2022', washA: 1, w: 2, col: '#000', key: 6100 }); hatch(w.path, w.bb, { gap: 14, a: 0.12, col: '#000', ang: 1.57, key: 6101 });
    for (const y of [420, 700]) { rect(-300, y, 1700, 18, { wash: '#3a2418', washA: 1, w: 2, col: '#000' }); const r = rng(6102 + y); for (let i = 0; i < 16; i++) { const x = -260 + i * 100, h = 60 + r() * 60; if (i % 3 === 0) rect(x - 30, y - h, 60, h, { wash: '#4a3a2a', washA: 1, w: 1.6, col: '#000' }); else rect(x - 14, y - h, 28, h, { wash: ['#3a4a2a', '#5a2a1a', '#6a5a2a'][i % 3], washA: 0.9, w: 1.4, col: '#000' }); } }
    push(900, 900, 1, 0.05); rect(-150, -200, 300, 400, { wash: '#d8c8a0', washA: 1, w: 2.4, col: '#2a1a0a', key: 6103 }); txt('WANTED', 0, -150, 52, { font: 'Osw', col: '#2a1a0a' }); anchovy(0, -20, 1.6, 0, { smirk: true }); txt('АНЧОУС', 0, 120, 44, { font: 'Osw', col: '#7a1a0a' });
    if (t > EV.sc_no) { const k = popK(t, EV.sc_no, 0.25); push(0, -20, k, -0.2); ctx.save(); ctx.globalAlpha = 0.9; ctx.strokeStyle = '#d9482b'; ctx.lineWidth = 10; ctx.strokeRect(-110, -50, 220, 100); ctx.restore(); txt('НЕТ', 0, 4, 80, { font: 'Osw', col: '#d9482b' }); pop(); } pop(); }
  function lamp(t) { const a = lampA(t); push(540, -60, 1, a); pencil([[0, 0], [0, 420]], { w: 3, col: '#1a1a1a' }); const sh = poly([[-90, 500], [90, 500], [40, 420], [-40, 420]], { wash: '#2e3a2e', washA: 1, w: 2.4, col: '#000' }); ell(0, 504, 40, 12, { wash: '#fff6d0', washA: 1, w: 1.4 }); pop();
    const lx = 540 + Math.sin(a) * 504, ly = -60 + Math.cos(a) * 504; ctx.save(); ctx.globalCompositeOperation = 'lighter'; const g = ctx.createRadialGradient(lx, ly + 700, 40, lx, ly + 700, 900); g.addColorStop(0, 'rgba(255,220,150,0.55)'); g.addColorStop(1, 'rgba(255,220,150,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(lx - 40, ly); ctx.lineTo(lx + 40, ly); ctx.lineTo(lx + 700 + a * 900, 1900); ctx.lineTo(lx - 700 + a * 900, 1900); ctx.closePath(); ctx.fill(); ctx.restore(); return lx; }
  function tableT(t) { const tb = poly([[-400, 1420], [1500, 1420], [1700, 2300], [-600, 2300]], { wash: '#4a2e1a', washA: 1, w: 2.4, col: '#000', key: 6110 }); hatch(tb.path, tb.bb, { gap: 9, a: 0.2, col: '#1a0a04', ang: 0.05, key: 6111 }); for (let i = 0; i < 5; i++) pencil([[-400, 1440 + i * 30], [1500, 1440 + i * 30]], { w: 1.4, col: '#6a4a2a', a: 0.4, pass2: false }); }
  function bottle(t) { wBottle(360, 1520, 2.1, -0.02); glow(300, 1100, 200, 'rgba(255,200,140,1)', 0.15); }
  function lens(t, P) {                                                 // линза лупы: «рентген» бутылки — анчоусы внутри
    if (t < EV.sc_hide - 0.3) return; const k = sm(clamp((t - EV.sc_hide + 0.3) / 0.4)); const cx = lerp(560, 360, k), cy = lerp(900, 1180, k), R = 150;
    inCircle(cx, cy, R, () => { vgrad(cy - R, cy + R, ['#5a2a10', '#2a0e04']); for (let i = 0; i < 5; i++) { const ph = t * 1.4 + i * 1.3, x = cx + Math.sin(ph) * 90, y = cy - 80 + i * 40 + Math.cos(ph * 0.7) * 10; anchovy(x, y, 0.75, Math.cos(ph) > 0 ? 0 : Math.PI, { wink: i === 2 && t > EV.sc_worc && Math.sin(t * 6) > 0 }); } for (let i = 0; i < 12; i++) { const r = rng(6120 + i), kk = ((t * 0.6 + r()) % 1); ell(cx + (r() - 0.5) * 240, cy + R - kk * 2 * R, 5, 5, { wash: '#f6e0b0', washA: 0.5 * (1 - kk), line: false }); } });
    pencil(ellPts(cx, cy, R, R, 0, 0, 60), { w: 16, col: '#c99636', pass2: false }); pencil(ellPts(cx, cy, R - 10, R - 10, 0, 0, 60).slice(36, 50), { w: 6, col: '#fff6e0', a: 0.7, pass2: false });
    if (t > EV.sc_worc + 0.2) bubbleTag('АНЧОУСЫ ВНУТРИ!', cx + 60, cy - R - 70, t, EV.sc_worc + 0.2, '#d9482b', 46, 0.04);
  }
  WORLD.sauce = (t, u, cat) => {
    lay(8, () => { room(t); }); lay(1.6, () => { lamp(t); });
    lay(1, () => { cat(); });
    lay(0.85, () => { tableT(t); bottle(t); lens(t); });
    lay(0.55, () => { ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); const g = ctx.createRadialGradient(540, 960, 400, 540, 960, 1200); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,0.65)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); ctx.restore(); });
  };
  DIR.sauce = {
    outfit: 'waiter', light: { side: -1, rim: '#ffe0a0' }, grade: ['#3a4a6a', 0.18],
    act: () => [[S0.sauce, 'suspicious'], [EV.sc_no + 0.3, 'annoyed'], [EV.sc_though, 'sideeye'], [EV.sc_hide, 'suspicious'], [EV.sc_worc + 0.3, 'shock'], [EV.sc_worc + 0.9, 'smug']],
    pose: (t, u, b) => Object.assign(b, { x: 760, y: 1700, s: 1.25, squint: t > EV.sc_though && t < EV.sc_worc + 0.3, look: t > EV.sc_hide ? [-0.8, 0.4] : [0.6, -0.3], hand: t > EV.sc_hide - 0.3 ? [-60, -330] : [90, -210], prop: t > EV.sc_hide - 0.3 ? undefined : 'magnifier', handF: [-100, -200] }),
    cam: () => [[S0.sauce, 620, 960, 0.2], [EV.sc_though, 600, 1040, 0.26], [EV.sc_hide, 480, 1160, 0.34], [S1.sauce, 460, 1140, 0.38]]
  };
  // ---------------------------------------------------------------- переход: капли соуса на объективе
  TRANS_IN.sauce = { a: 0.2, b: 0.4, runA: 1, fx(k, t, A, B) {
    drawBuf(k < 0.45 ? A : B, 1, 540, 960); scr(() => { const r = rng(6130), cover = k < 0.45 ? sm(k / 0.45) : 1 - sm((k - 0.45) / 0.55);
      for (let i = 0; i < 14; i++) { const x = r() * 1080, y = r() * 1920, R = (120 + r() * 260) * cover; if (R < 2) continue; blob(ellPts(x, y + (1 - cover) * 300 * r(), R, R * (1.1 + r() * 0.4), r(), 0.18, 14), { wash: i % 2 ? '#5a2a10' : '#7a3a14', washA: 0.95, w: 3, col: '#2a0e04' }); glow(x - R * 0.3, y - R * 0.3, R * 0.3, 'rgba(255,230,200,1)', 0.35 * cover); } });
  } };
})();
