/* Бренд-ассеты «ТОМ НА ВКУС / TOM OF TASTE»: BRAND.avatar() — Том в поварском колпаке на томатном фоне (квадрат 1200, платформы режут по кругу: всё важное в центральном круге).
   Запуск: node tools/brand.cjs avatar → assets/brand/avatar.png (800×800). */
const BRAND = {
  avatar() {
    const g = ctx.createRadialGradient(600, 560, 80, 600, 640, 900); g.addColorStop(0, '#f0643f'); g.addColorStop(0.55, '#d9482b'); g.addColorStop(1, '#a8301a'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 18; i++) { const a = i / 18 * 6.283; ctx.save(); ctx.globalAlpha = 0.07; ctx.fillStyle = '#fff2d0'; ctx.beginPath(); ctx.moveTo(600, 700); ctx.arc(600, 700, 1300, a, a + 0.1); ctx.closePath(); ctx.fill(); ctx.restore(); }   // лучи «вкуса»
    pencil(ellPts(600, 640, 560, 560, 0, 0.03, 90), { w: 10, col: '#f4e6c8', a: 0.85, pass2: false, gap: false });                                                                              // тонкий ободок-тарелка
    glow(600, 700, 520, 'rgba(255,200,120,1)', 0.28);
    tom({ x: 560, y: 1560, s: 2.15, outfit: 'chef', expr: 'talk', expr2: 'talk', ek: 1, look: [0.0, 0.1], hand: [140, -270], prop: 'croutonP', propAng: 0.2, handF: [-110, -130], tilt: 0.03, light: { side: -1, rim: '#ffe0b0' }, noBlink: true });
  }
};
