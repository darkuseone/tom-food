/* Бренд-ассеты «ТОМ НА ВКУС / TOM OF TASTE»: BRAND.avatar() — Том в поварском колпаке на томатном фоне (квадрат 1200, платформы режут по кругу: всё важное в центральном круге).
   Запуск: node tools/brand.cjs avatar → assets/brand/avatar.png (800×800). */
const BRAND = {
  avatar() {
    const g = ctx.createRadialGradient(600, 560, 80, 600, 640, 900); g.addColorStop(0, '#f0643f'); g.addColorStop(0.55, '#d9482b'); g.addColorStop(1, '#a8301a'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 18; i++) { const a = i / 18 * 6.283; ctx.save(); ctx.globalAlpha = 0.07; ctx.fillStyle = '#fff2d0'; ctx.beginPath(); ctx.moveTo(600, 700); ctx.arc(600, 700, 1300, a, a + 0.1); ctx.closePath(); ctx.fill(); ctx.restore(); }   // лучи «вкуса»
    pencil(ellPts(600, 640, 560, 560, 0, 0.03, 90), { w: 10, col: '#f4e6c8', a: 0.85, pass2: false, gap: false });                                                                              // тонкий ободок-тарелка
    glow(600, 700, 520, 'rgba(255,200,120,1)', 0.28);
    tom({ x: 560, y: 1560, s: 2.15, outfit: 'chef', expr: 'talk', expr2: 'talk', ek: 1, look: [0.0, 0.1], hand: [140, -270], prop: 'croutonP', propAng: 0.2, handF: [-110, -130], tilt: 0.03, light: { side: -1, rim: '#ffe0b0' }, noBlink: true });
  },
  banner() {                                                            // 2560×1440; безопасная зона YouTube (видна везде) — центр 1546×423: x 507–2053, y 508–931
    const g = ctx.createRadialGradient(1280, 720, 200, 1280, 720, 1500); g.addColorStop(0, '#ec5c38'); g.addColorStop(0.6, '#d9482b'); g.addColorStop(1, '#9e2c18'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 28; i++) { const a = i / 28 * 6.283; ctx.save(); ctx.globalAlpha = 0.06; ctx.fillStyle = '#fff2d0'; ctx.beginPath(); ctx.moveTo(820, 760); ctx.arc(820, 760, 2600, a, a + 0.08); ctx.closePath(); ctx.fill(); ctx.restore(); }
    ctx.save(); ctx.globalAlpha = 0.08; ctx.fillStyle = '#fff2d0'; for (let y = 0; y < H; y += 120) for (let x = (y / 120 % 2) * 120; x < W; x += 240) ctx.fillRect(x, y, 120, 120); ctx.restore();   // клетка скатерти
    const r = rng(42), items = [];                                      // еда по всему полю (видна на ТВ/десктопе), вне центральной полосы
    for (let i = 0; i < 46; i++) { const x = r() * W, y = r() * H; if (x > 420 && x < 2140 && y > 440 && y < 1000) continue; items.push([x, y, r() * 6.28, Math.floor(r() * 7)]); }
    items.forEach(([x, y, a, k], i) => { if (k === 0) leaf(x, y + 80, 0.9, a, { key: 300 + i, shine: 1 }); else if (k === 1) crouton(x, y, 1.6, a, { key: 400 + i }); else if (k === 2) egg(x, y, 1.1, a, { key: 500 + i, cracked: i % 2 });
      else if (k === 3) lemon(x, y, 1.1, a, { half: i % 2 }); else if (k === 4) anchovy(x, y, 1.1, a, { wink: i % 3 === 0 }); else if (k === 5) parmWedge(x, y, 0.8, a * 0.2); else { push(x, y, 1.2, a); const t = ell(0, 0, 46, 40, { wash: '#c8302a', washA: 1, w: 2.4, col: '#4a0e06' }); shadeG(t.path, 40, 30, -10, -10, '#6a1008', 0.5); glow(-14, -12, 14, 'rgba(255,255,255,1)', 0.6); for (let q = 0; q < 5; q++) { const aa = q / 5 * 6.283; pencil([[0, -36], [Math.cos(aa) * 22, -36 + Math.sin(aa) * 10]], { w: 5, col: '#3a6a1a', pass2: false }); } pop(); } });
    wBottle(2330, 1300, 1.4, 0.15); push(260, 1180, 1, -0.1); plateCaesar(0, 0, 1.3, 0); pop();
    // центральная полоса: кремовая «бумага меню» с пятном соуса
    ctx.save(); ctx.shadowColor = 'rgba(40,10,4,0.45)'; ctx.shadowBlur = 40; ctx.shadowOffsetY = 14; ctx.fillStyle = '#f4e6c8'; ctx.beginPath(); ctx.roundRect(470, 470, 1620, 500, 26); ctx.fill(); ctx.restore();
    ctx.save(); ctx.globalAlpha = 0.14; ctx.fillStyle = '#b8733a'; ctx.beginPath(); ctx.ellipse(1960, 900, 90, 52, 0.3, 0, 6.3); ctx.fill(); ctx.restore();
    pencil([[470, 470], [2090, 470], [2090, 970], [470, 970], [470, 470]], { w: 4, col: '#2b2622', a: 0.85, pass2: false });
    pencil([[490, 948], [2070, 948]], { w: 10, col: '#d9482b', a: 0.9, pass2: false, gap: false });
    glow(820, 700, 380, 'rgba(255,200,120,1)', 0.3);
    ctx.save(); ctx.beginPath(); ctx.rect(470, 300, 1620, 670); ctx.clip();                                              // Том — по грудь, колпак может выйти за верх листа
    tom({ x: 820, y: 1190, s: 1.12, outfit: 'chef', expr: 'talk', expr2: 'talk', ek: 1, look: [0.35, 0.05], hand: [140, -270], prop: 'croutonP', propAng: 0.2, handF: [-110, -130], light: { side: -1, rim: '#ffe0b0' }, noBlink: true });
    ctx.restore();
    push(1530, 650, 1, -0.02); ctx.save(); ctx.font = '600 170px Osw'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round'; ctx.lineWidth = 26; ctx.strokeStyle = '#2b2622'; ctx.strokeText('TOM OF TASTE', 0, 0); ctx.fillStyle = '#d9482b'; ctx.fillText('TOM OF TASTE', 0, 0); ctx.restore(); pop();
    push(1530, 800, 1, -0.02); ctx.save(); ctx.fillStyle = '#2b2622'; ctx.beginPath(); ctx.roundRect(-430, -46, 860, 92, 12); ctx.fill(); ctx.restore(); txt('ИСТОРИЯ БЛЮДА ЗА МИНУТУ', 0, 2, 58, { font: 'Osw', col: '#f4e6c8' }); pop();
    txt('Откусим историю!', 1530, 900, 54, { font: 'Hand', col: '#6b7a2e' });
  }
};
