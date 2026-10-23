/* 007 — еда выпуска «Кимчи»: пекинская капуста (целая), кимчи-четвертинка (красная / белая «пэк-кимчи»), миска кимчи, кубики редьки, кувшин онги,
   перец, корейская редька, мультяшная бактерия, космический пакет кимчи; реквизит Тома: палочки с кимчи (и откушенные), перец, капуста, кисть, пакет. */
const KM = { red: '#c8282a', redD: '#6a0a10', redL: '#f06a5a', rib: '#f6f2e0', ribD: '#c8c0a0', leaf: '#8ab84a', leafD: '#3a6a1a', onggi: '#6a3a1a', onggiL: '#9a5a2a', mu: '#f8f6ee', bac: '#8ad86a', bacD: '#2a6a1a' };
function napaCabbage(x, y, s, rot = 0) {                                // пекинская капуста: вытянутый кочан, белые черешки внизу, морщинистые зелёные листья вверху
  push(x, y, s, rot); const b = shape(spline([[-50, 120], [-64, 20], [-56, -80], [-30, -140], [30, -140], [56, -80], [64, 20], [50, 120]], true, 6), { wash: KM.rib, washA: 1, w: 2.6, col: '#5a5a3a', key: 9720 });
  const g = blob([[-60, -10], [-66, -90], [-34, -150], [0, -160], [34, -150], [66, -90], [60, -10], [30, -30], [0, -10], [-30, -30]], { wash: KM.leaf, washA: 1, w: 2.4, col: KM.leafD }); ctx.save(); ctx.clip(g.path); for (let i = 0; i < 9; i++) pencil(spline([[-70 + i * 18, -150], [-60 + i * 18 + 6, -90], [-66 + i * 18, -20]], false, 5), { w: 1.6, col: KM.leafD, a: 0.5, pass2: false }); ctx.restore();
  for (let i = -2; i <= 2; i++) pencil(spline([[i * 18, 116], [i * 20, 40], [i * 16, -30]], false, 5), { w: 2, col: KM.ribD, a: 0.7, pass2: false }); shadeG(b.path, 64, 0, -10, 0, '#a8a080', 0.4); pop();
}
function kimchiQuarter(x, y, s, rot = 0, o = {}) {                       // четвертинка кимчи лёжа: слои листьев, паста между ними, блеск; o.white — белое кимчи без перца
  const p = o.white ? '#f2ecd0' : KM.red, pD = o.white ? '#c8c0a0' : KM.redD; push(x, y, s, rot);
  const b = shape(spline([[-150, 30], [-120, -30], [-40, -60], [80, -56], [150, -20], [160, 24], [60, 44], [-80, 46]], true, 6), { wash: p, washA: 1, w: 2.6, col: pD, key: 9730 });
  ctx.save(); ctx.clip(b.path); for (let i = 0; i < 6; i++) pencil(spline([[-150, 34 - i * 14], [0, 20 - i * 16], [160, 10 - i * 10]], false, 6), { w: 6, col: o.white ? '#fbf8ea' : '#f6d0b0', a: 0.75, pass2: false });
  for (let i = 0; i < 4; i++) blob([[-110 + i * 70, -40], [-80 + i * 70, -60], [-50 + i * 70, -36]], { wash: o.white ? '#c8e0a0' : '#5a8a2a', washA: 0.85, line: false }); if (!o.white) for (let i = 0; i < 18; i++) { const r = rng(9735 + i); ell(-130 + r() * 270, -40 + r() * 70, 3, 2, { wash: '#7a0a0a', washA: 0.8, line: false }); }
  if (o.white) for (let i = 0; i < 6; i++) ell(-100 + i * 40, -10 + (i % 2) * 14, 6, 4, { wash: '#e8c040', washA: 0.8, line: false }); ctx.restore();
  ell(-30, -36, 50, 8, { wash: '#ffffff', washA: 0.5, line: false }); pop();
}
function kkakdugi(x, y, s, t, k = 0) { push(x, y, s); for (let i = 0; i < 5; i++) { const r = rng(9740 + i + k); push(-40 + (i % 3) * 40, -(i > 2 ? 30 : 0), 1, r() * 0.6 - 0.3); rect(-18, -18, 36, 36, { wash: '#e8603a', washA: 1, w: 1.8, col: KM.redD }); pencil([[-12, -12], [6, -14]], { w: 2, col: '#ffd0b0', a: 0.7, pass2: false }); pop(); } pop(); }
function kimchiBowl(x, y, s, t, o = {}) {                               // миска кимчи: керамика с синей полосой, горка кимчи, кунжут, блики
  push(x, y, s); const bw = shape(spline([[-130, -20], [-110, 50], [-50, 80], [50, 80], [110, 50], [130, -20]], false, 8), { wash: '#f6f2ea', washA: 1, w: 2.6, col: '#3a4a6a', key: 9745 }); pencil(spline([[-118, 20], [0, 44], [118, 20]], false, 6), { w: 8, col: '#2a5aa8', pass2: false });
  kimchiQuarter(-20, -40, 0.55, -0.2, o); kimchiQuarter(30, -30, 0.5, 0.25, o); if (!o.white) kkakdugi(70, -30, 0.6, t); for (let i = 0; i < 10; i++) { const r = rng(9750 + i); ell(-60 + r() * 120, -56 + r() * 30, 3, 2, { wash: '#f6eed0', washA: 1, line: false }); }
  ell(-90, -20, 30, 8, { wash: '#ffffff', washA: 0.4, line: false }); pop();
}
function onggi(x, y, s, t, o = {}) {                                    // кувшин онги: коричневая глазурь, широкое плечо, узор пальцем, крышка; o.buried 0..1 — в земле; o.snow — шапка снега
  push(x, y, s); const j = shape(spline([[-60, 0], [-110, -60], [-120, -150], [-90, -220], [-60, -240], [60, -240], [90, -220], [120, -150], [110, -60], [60, 0]], true, 8), { wash: KM.onggi, washA: 1, w: 3, col: '#1a0a04', key: 9755 + (o.key || 0) });
  shadeG(j.path, -120, -150, 40, -150, '#c8783a', 0.4); for (let i = 0; i < 3; i++) pencil(spline([[-100, -170 + i * 22], [-40, -160 + i * 22 + Math.sin(i) * 8], [40, -168 + i * 22], [100, -160 + i * 22]], false, 6), { w: 2, col: '#c89a5a', a: 0.6, pass2: false });
  if (o.lid !== false) { ell(0, -244, 70, 14, { wash: '#5a2a10', washA: 1, w: 2.4, col: '#1a0a04' }); ell(0, -256, 20, 8, { wash: '#7a4a24', washA: 1, w: 2 }); } else { ell(0, -240, 60, 12, { wash: KM.redD, washA: 1, w: 2 }); }
  if (o.snow) { blob([[-74, -246], [-50, -276], [0, -286], [50, -276], [74, -246], [40, -236], [-40, -236]], { wash: '#fbfdff', washA: 1, w: 1.6, col: '#a8b8c8' }); }
  if (o.buried) { const by = lerp(0, -170, o.buried); rect(-160, by, 320, 200 - by, { wash: o.snow ? '#e8f0f6' : '#6a4a2a', washA: 1, line: false }); pencil(spline([[-160, by], [0, by - 10], [160, by]], false, 6), { w: 3, col: o.snow ? '#a8b8c8' : '#3a2410', pass2: false }); }
  pop();
}
function chili(x, y, s, rot = 0, o = {}) { push(x, y, s, rot); const c = shape(spline([[-8, -50], [-16, 0], [-6, 60], [4, 70], [12, 10], [10, -50]], true, 6), { wash: o.green ? '#4a8a2a' : '#d8201a', washA: 1, w: 2, col: '#5a0404', key: 9760 }); pencil([[-4, -40], [-6, 30]], { w: 3, col: '#ffb0a0', a: 0.7, pass2: false }); blob([[-10, -52], [12, -52], [4, -70], [0, -84]], { wash: '#3a6a1a', washA: 1, w: 1.6, col: '#1a3a0a' }); pop(); }
function radish(x, y, s, rot = 0) { push(x, y, s, rot); const r = shape(spline([[-40, -80], [-50, 20], [-30, 100], [0, 130], [30, 100], [50, 20], [40, -80]], true, 6), { wash: KM.mu, washA: 1, w: 2.4, col: '#7a7a6a', key: 9765 }); shadeG(r.path, 0, -80, 0, 0, '#c8e0a0', 0.6); for (let i = 0; i < 5; i++) blob([[0, -80], [-40 + i * 20, -180 - (i % 2) * 30], [-28 + i * 20, -80]], { wash: '#5a9a3a', washA: 1, w: 1.6, col: '#1a3a0a' }); pop(); }
function bacterium(x, y, s, t, o = {}) {                                // бактерия-мультяшка: капсула с ресничками, глаза; o.horns — «мутант», o.scared
  push(x, y, s, Math.sin(t * 3 + x) * 0.2); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; pencil(spline([[Math.cos(a) * 44, Math.sin(a) * 26], [Math.cos(a) * 64 + Math.sin(t * 9 + i) * 8, Math.sin(a) * 40], [Math.cos(a) * 76, Math.sin(a) * 50 + Math.cos(t * 9 + i) * 8]], false, 4), { w: 2, col: KM.bacD, pass2: false }); }
  const b = ell(0, 0, 50, 30, { wash: o.horns ? '#a8d040' : KM.bac, washA: 1, w: 2.4, col: KM.bacD }); shadeG(b.path, 0, -30, 0, 30, '#e8ffd0', 0.4);
  for (const sd of [-1, 1]) { ell(sd * 14, -4, 9, o.scared ? 11 : 8, { wash: '#ffffff', washA: 1, w: 1.4 }); ell(sd * 14 + (o.scared ? 0 : 2), -2, 4, 4, { wash: '#1a1a1a', washA: 1, line: false }); }
  if (o.horns) { for (const sd of [-1, 1]) poly([[sd * 20, -26], [sd * 34, -60], [sd * 38, -22]], { wash: '#d8201a', washA: 1, w: 1.6, col: '#5a0404' }); pencil([[-14, 12], [-6, 8], [2, 14], [10, 8], [16, 12]], { w: 2, col: '#1a1a1a', pass2: false }); }
  else pencil(spline(o.scared ? [[-8, 16], [0, 10], [8, 16]] : [[-10, 10], [0, 16], [10, 10]], false, 4), { w: 2, col: '#1a1a1a', pass2: false }); pop();
}
function spacePack(x, y, s, rot = 0) { push(x, y, s, rot); const p = rect(-70, -100, 140, 200, { wash: '#c8ccd4', washA: 1, w: 2.4, col: '#4a4e58', key: 9770 }); shadeG(p.path, -70, 0, 70, 0, '#ffffff', 0.5); rect(-50, -50, 100, 80, { wash: '#1a1a20', washA: 0.4, w: 1.6, col: '#4a4e58' }); push(0, -10, 0.3); kimchiQuarter(0, 0, 1, 0); pop();
  txt('KIMCHI', 0, 70, 24, { font: 'Osw', col: '#2a4a8a' }); rect(-70, -100, 140, 16, { wash: '#a8acb4', washA: 1, w: 1.4 }); pop(); }
Object.assign(PROPS, {
  chopKimchiP() { for (const dx of [-5, 5]) pencil([[dx, 10], [dx * 0.4, -170]], { w: 5, col: '#c8a060' }); push(0, -170, 0.32, 0.4); kimchiQuarter(0, 0, 1, 0); pop(); },
  chopBiteP() { for (const dx of [-5, 5]) pencil([[dx, 10], [dx * 0.4, -170]], { w: 5, col: '#c8a060' }); push(-14, -170, 0.24, 0.4); kimchiQuarter(0, 0, 1, 0); pop(); },
  chiliP() { chili(0, -60, 0.8, 0.3); },
  napaP() { napaCabbage(0, -80, 0.6, 0.1); },
  brushP() { pencil([[0, 20], [0, -150]], { w: 9, col: '#8a5a2a' }); blob([[-10, -150], [10, -150], [6, -200], [0, -220], [-6, -200]], { wash: '#1a1a1a', washA: 1, w: 1.4 }); },
  packP() { spacePack(0, -90, 0.5, 0.15); },
});
function gat20(x, y, s, flip = 1) {                                     // шляпа-кат поверх human(): широкие полупрозрачные поля, тулья-цилиндр, бусы
  const hy = y + (-238 - 46) * s; push(x, hy + 6 * s, s, 0, flip); ell(0, -24, 96, 14, { wash: '#1a1a20', washA: 0.65, w: 1.8, col: '#0a0a0e' }); rect(-30, -84, 60, 60, { wash: '#1a1a20', washA: 0.7, w: 1.8, col: '#0a0a0e' }); ell(0, -84, 30, 6, { wash: '#2a2a32', washA: 0.9, w: 1.4 });
  for (const sd of [-1, 1]) for (let i = 0; i < 4; i++) ell(sd * (34 - i * 3), -10 + i * 16, 3, 3, { wash: i % 2 ? '#d6a842' : '#3a2a1a', washA: 1, line: false }); pop();
}
