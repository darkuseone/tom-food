/* 003 — еда выпуска «Селёдка под шубой»: селёдка (целая/кусочки, с лицом и шапками для агиток), свёкла, картошка, морковь, луковица, шуба в разрезе (пласты),
   шуба на блюде 3/4, банка майонеза, самовар, реквизит Тома. Общие детали — food.js (egg, crumbs, bubbleTag, hat20, stache), nug.js (sauceCup, envelope, frost). */
const SH = { fish: '#8a9cb0', fishD: '#3a4a5e', fishL: '#e2ecf4', fishB: '#4a5a72', beet: '#8a1a4a', beetD: '#4a0a26', beetL: '#d04a86', pot: '#ead8a0', potD: '#b8a060', carrot: '#e8742a', carrotD: '#a84a10',
  onion: '#f2ead0', mayo: '#fbf6e6', mayoD: '#d8ccb0', egg: '#f6d23a', dill: '#4a8a2a' };
function herring(x, y, s, rot = 0, o = {}) {                         // сельдь: сине-серая спинка, серебро бока, глаз, плавники, хвост; o.face, o.cap ('kepka'|'night'), o.blink
  push(x, y, s, rot); const k = o.key || 8100;
  const b = shape(spline([[-120, 0], [-90, -26], [-20, -40], [60, -30], [110, -8], [124, 0], [110, 10], [60, 30], [-20, 36], [-90, 22]], true, 8), { wash: SH.fish, washA: 1, w: 2.6, col: '#1a2430', key: k });
  ctx.save(); ctx.clip(b.path); const g = ctx.createLinearGradient(0, -40, 0, 40); g.addColorStop(0, SH.fishB); g.addColorStop(0.45, SH.fish); g.addColorStop(0.6, SH.fishL); g.addColorStop(1, '#c8d4de'); ctx.fillStyle = g; ctx.fillRect(-130, -50, 260, 100);
  for (let i = 0; i < 14; i++) for (let j = 0; j < 3; j++) pencil(spline([[-80 + i * 13, -14 + j * 12], [-74 + i * 13, -8 + j * 12], [-80 + i * 13, -2 + j * 12]], false, 3), { w: 1.2, col: '#ffffff', a: 0.35, pass2: false });
  pencil([[-110, -2], [100, -6]], { w: 2, col: '#e8f2fa', a: 0.8, pass2: false }); ctx.restore();
  poly([[110, 0], [160, -36], [150, 0], [160, 36]], { wash: SH.fishB, washA: 1, w: 2.2, col: '#1a2430' }); poly([[-10, -38], [20, -62], [40, -32]], { wash: SH.fishB, washA: 1, w: 2, col: '#1a2430' });
  poly([[0, 30], [24, 50], [36, 28]], { wash: SH.fish, washA: 1, w: 1.8, col: '#1a2430' }); pencil(spline([[-78, -22], [-70, 0], [-78, 20]], false, 4), { w: 2.4, col: '#1a2430', pass2: false });
  const blink = o.blink && Math.sin((o.t || 0) * 3) > 0.9; ell(-96, -6, 9, blink ? 1.5 : 9, { wash: '#f6f2e8', washA: 1, w: 1.6, col: '#1a2430' }); if (!blink) ell(-97, -5, 4, 4, { wash: '#0a0a10', washA: 1, line: false });
  if (o.face) { pencil(spline([[-118, 10], [-108, 16], [-98, 12]], false, 4), { w: 2.4, col: '#1a2430', pass2: false }); if (o.face === 'sleep') { ell(-96, -6, 9, 2, { wash: SH.fishB, washA: 1, w: 1.6, col: '#1a2430' }); } }
  if (o.cap === 'kepka') { push(-80, -30, 1, -0.2); blob([[-40, 4], [-34, -26], [24, -30], [40, -6], [30, 4]], { wash: '#3a3a44', washA: 1, w: 2, col: '#0a0a10' }); ell(-36, 4, 30, 6, { wash: '#2a2a30', washA: 1, w: 1.6 }); pop(); }
  if (o.cap === 'night') { push(-80, -30, 1, -0.3); poly([[-36, 6], [36, 6], [70, -60], [40, -40]], { wash: '#d9482b', washA: 1, w: 2, col: '#3a0a04' }); for (let i = 0; i < 3; i++) pencil([[-30 + i * 24, 4], [-10 + i * 30, -20]], { w: 3, col: '#f6f0e0', a: 0.8, pass2: false }); ell(72, -62, 12, 12, { wash: '#f6f0e0', washA: 1, w: 1.6 }); rect(-38, -2, 76, 12, { wash: '#f6f0e0', washA: 1, w: 1.4 }); pop(); }
  pop();
}
function herringBit(x, y, s, rot = 0, k = 0) { push(x, y, s, rot); const p = poly([[-16, -10], [14, -12], [18, 8], [-14, 12]], { wash: '#c8d4de', washA: 1, w: 1.6, col: '#2a3440', key: 8110 + k }); shadeG(p.path, 0, -12, 0, 0, SH.fishB, 0.7); pencil([[-12, 2], [12, 0]], { w: 1.2, col: '#ffffff', a: 0.6, pass2: false }); pop(); }
function beet(x, y, s, rot = 0, o = {}) {                            // свёкла: тёмный бочок, кольца, ботва
  push(x, y, s, rot); const b = shape(spline([[0, -50], [40, -36], [52, 0], [36, 38], [0, 56], [-36, 38], [-52, 0], [-40, -36]], true, 6), { wash: SH.beet, washA: 1, w: 2.6, col: '#2a0414', key: o.key || 8120 });
  shadeG(b.path, 40, 30, -20, -20, SH.beetD, 0.6); ell(-18, -20, 12, 7, { wash: SH.beetL, washA: 0.6, line: false, rot: -0.5 }); pencil([[0, 56], [4, 80]], { w: 2.4, col: '#2a0414', pass2: false });
  if (o.half) { ell(0, 0, 46, 46, { wash: SH.beetL, washA: 1, w: 2, col: '#2a0414' }); for (let r = 10; r < 46; r += 10) pencil(ellPts(0, 0, r, r, 0, 0, 20), { w: 1.6, col: SH.beet, a: 0.7, pass2: false }); }
  if (!o.noLeaf) for (const [a, l] of [[-0.4, 70], [0.1, 90], [0.5, 66]]) { push(0, -48, 1, a); pencil([[0, 0], [0, -l]], { w: 4, col: '#a8244a', pass2: false }); blob([[0, -l * 0.4], [-22, -l * 0.7], [0, -l - 20], [22, -l * 0.7]], { wash: '#3a7a2a', washA: 1, w: 1.8, col: '#14300a' }); pop(); }
  if (o.face) { for (const sd of [-1, 1]) { ell(sd * 14, -6, 6, 7, { wash: '#ffffff', washA: 1, w: 1.4, col: '#2a0414' }); ell(sd * 14, -5, 3, 3.5, { wash: '#000', washA: 1, line: false }); } pencil(spline([[-12, 14], [0, 22], [12, 14]], false, 4), { w: 2.4, col: '#2a0414', pass2: false }); }
  pop();
}
function potato(x, y, s, rot = 0, o = {}) {                          // картошка: бугристая, глазки; o.face, o.lapti
  push(x, y, s, rot); const p = shape(wobP(spline([[-50, 0], [-40, -30], [0, -40], [44, -28], [54, 6], [30, 34], [-20, 36], [-46, 22]], true, 6), 4, o.key || 8130), { wash: SH.pot, washA: 1, w: 2.4, col: '#5a4420', key: o.key || 8130 });
  shadeG(p.path, 40, 30, -20, -20, SH.potD, 0.6); const r = rng(o.key || 8130); for (let i = 0; i < 5; i++) { const a = r() * 6.28, d = r() * 30; pencil([[Math.cos(a) * d - 3, Math.sin(a) * d * 0.7], [Math.cos(a) * d + 3, Math.sin(a) * d * 0.7 + 1]], { w: 2, col: '#7a5a28', pass2: false }); }
  if (o.face) { for (const sd of [-1, 1]) { ell(sd * 14, -6, 6, 7, { wash: '#ffffff', washA: 1, w: 1.4, col: '#3a2a10' }); ell(sd * 14, -5, 3, 3.5, { wash: '#000', washA: 1, line: false }); } pencil(spline([[-12, 14], [0, 20], [12, 14]], false, 4), { w: 2.4, col: '#3a2a10', pass2: false }); }
  if (o.lapti) for (const sd of [-1, 1]) { pencil([[sd * 16, 34], [sd * 18, 56]], { w: 4, col: '#5a4420', pass2: false }); ell(sd * 22, 60, 16, 8, { wash: '#c8a868', washA: 1, w: 1.6, col: '#5a4420' }); for (let q = 0; q < 3; q++) pencil([[sd * 22 - 12 + q * 8, 54], [sd * 22 - 8 + q * 8, 66]], { w: 1.2, col: '#7a5a28', pass2: false }); }
  pop();
}
function carrot(x, y, s, rot = 0) { push(x, y, s, rot); const c = poly([[-14, -60], [14, -60], [4, 60], [-4, 60]], { wash: SH.carrot, washA: 1, w: 2.2, col: '#5a2a08', key: 8140 }); shadeG(c.path, 14, 0, -4, 0, SH.carrotD, 0.5); for (let i = 0; i < 5; i++) pencil([[-10 + i * 0.5, -40 + i * 20], [-2, -38 + i * 20]], { w: 1.4, col: '#7a3a08', pass2: false });
  for (const a of [-0.4, 0, 0.4]) { push(0, -60, 1, a); blob([[0, 0], [-10, -30], [0, -60], [10, -30]], { wash: '#4a8a2a', washA: 1, w: 1.4, col: '#14300a' }); pop(); } pop(); }
function onionBulb(x, y, s, rot = 0) { push(x, y, s, rot); const o = blob([[0, -50], [30, -20], [40, 10], [20, 40], [-20, 40], [-40, 10], [-30, -20]], { wash: '#e8c890', washA: 1, w: 2.2, col: '#6a4a20', key: 8150 }); shadeG(o.path, 30, 20, -20, -20, '#a8784a', 0.5); for (const f of [-0.5, 0, 0.5]) pencil(spline([[f * 20, -48], [f * 50, 0], [f * 26, 40]], false, 5), { w: 1.4, col: '#a8784a', pass2: false }); pencil([[0, -50], [0, -70]], { w: 3, col: '#6a8a2a', pass2: false }); pop(); }
function layers(x, y, w, t, o = {}) {                               // пласты шубы снизу вверх (разрез): возвращает высоты; o.scale — толщина
  const L = [['сельдь', '#a8b4c0', 'fish'], ['картошка', SH.pot, 'pot'], ['лук', SH.onion, 'onion'], ['морковь', SH.carrot, 'carrot'], ['свёкла', SH.beet, 'beet']], th = (o.th || 70), r = rng(o.key || 8160);
  let yy = y; const out = [];
  L.forEach(([name, col, kind], i) => { const top = yy - th; const p = rect(x - w / 2, top, w, th, { wash: col, washA: 1, w: 1.6, col: '#3a2a20', key: (o.key || 8160) + i }); out.push([name, top, yy]);
    ctx.save(); ctx.clip(p.path); for (let q = 0; q < w * th / 260; q++) { const px = x - w / 2 + r() * w, py = top + r() * th;
      if (kind === 'fish') herringBit(px, py, 0.7, r() * 3, q % 4); else if (kind === 'pot') ell(px, py, 8, 6, { wash: '#f6e8b8', washA: 0.8, w: 1, col: SH.potD, a: 0.5 }); else if (kind === 'onion') ell(px, py, 4, 3, { wash: '#ffffff', washA: 0.9, line: false });
      else if (kind === 'carrot') pencil([[px - 6, py], [px + 6, py + 2]], { w: 3, col: '#f8a050', pass2: false }); else ell(px, py, 4, 3, { wash: SH.beetL, washA: 0.7, line: false }); } ctx.restore();
    if (kind !== 'fish') { const m = rect(x - w / 2, top - 2, w, Math.max(6, th * 0.12), { wash: SH.mayo, washA: 1, w: 1, col: SH.mayoD, a: 0.6 }); }
    yy = top; });
  pencil(spline(Array.from({ length: 14 }, (_, i) => [x - w / 2 + i * w / 13, yy + Math.sin(i * 1.7 + t) * 4]), false, 4), { w: 8, col: SH.mayo, pass2: false });
  return out;
}
function shubaPlate(x, y, s, t, o = {}) {                            // шуба на блюде 3/4: бок с пластами, верх — свёкла с майонезной сеткой, желток, укроп, блики
  push(x, y, s); ell(0, 40, 260, 70, { wash: '#000000', washA: 0.2, line: false }); const pl = ell(0, 20, 250, 70, { wash: '#f6f2ea', washA: 1, w: 3, col: '#4a4038', key: 8170 }); shadeG(pl.path, 200, 60, -60, 0, '#b8b0a4', 0.5); pencil(ellPts(0, 20, 220, 56, 0, 0, 40), { w: 3, col: '#3a7ab8', a: 0.6, pass2: false });
  const w = 340, H = 120; ctx.save(); const side = new Path2D(); side.rect(-w / 2, -H + 10, w, H); ctx.clip(side); const cols = ['#a8b4c0', SH.pot, SH.onion, SH.carrot, SH.beet]; cols.forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect(-w / 2, 10 - (i + 1) * H / 5, w, H / 5 + 1); ctx.fillStyle = SH.mayo; if (i) ctx.fillRect(-w / 2, 10 - i * H / 5 - 3, w, 5); }); ctx.restore();
  pencil([[-w / 2, 10], [-w / 2, -H + 10]], { w: 2.4, col: '#3a2a20', pass2: false }); pencil([[w / 2, 10], [w / 2, -H + 10]], { w: 2.4, col: '#3a2a20', pass2: false }); ell(0, 10, w / 2, 26, { line: true, w: 2.4, col: '#3a2a20' });
  const tp = ell(0, -H + 10, w / 2, 30, { wash: SH.beet, washA: 1, w: 2.4, col: '#2a0414', key: 8171 }); ctx.save(); ctx.clip(tp.path); for (let i = -6; i < 7; i++) { pencil([[i * 30 - 40, -H - 20], [i * 30 + 40, -H + 40]], { w: 5, col: SH.mayo, a: 0.9, pass2: false }); pencil([[i * 30 + 40, -H - 20], [i * 30 - 40, -H + 40]], { w: 5, col: SH.mayo, a: 0.9, pass2: false }); } ctx.restore();
  const r = rng(8172); for (let i = 0; i < 30; i++) ell((r() - 0.5) * 280, -H + 10 + (r() - 0.5) * 40, 4, 3, { wash: i % 3 ? SH.egg : '#ffffff', washA: 1, line: false }); for (let i = 0; i < 6; i++) { const px = (r() - 0.5) * 240, py = -H + 10 + (r() - 0.5) * 30; for (let q = 0; q < 5; q++) pencil([[px, py], [px + Math.cos(q) * 14, py + Math.sin(q) * 8]], { w: 1.6, col: SH.dill, pass2: false }); }
  ell(-80, -H + 2, 50, 8, { wash: '#ffffff', washA: 0.45, line: false, rot: -0.1 }); glow(-60, -H, 60, 'rgba(255,255,255,1)', 0.3);
  if (o.cut) { const c = rect(40, -H + 10 - 30, 90, H + 30, { wash: '#f6f2ea', washA: 1, line: false }); } pop();
}
function mayoJar(x, y, s, rot = 0) { push(x, y, s, rot); const j = rect(-50, -120, 100, 120, { wash: '#f6f6f2', washA: 0.95, w: 2.6, col: '#5a5a5a', key: 8180 }); shadeG(j.path, 50, 0, -10, 0, '#c8c8c0', 0.5); rect(-54, -140, 108, 24, { wash: '#c8b048', washA: 1, w: 2, col: '#5a4a10' });
  rect(-46, -86, 92, 50, { wash: '#2a7ab8', washA: 1, w: 1.6, col: '#1a3a5a' }); txt('МАЙОНЕЗ', 0, -62, 16, { font: 'Osw', col: '#ffffff' }); glow(-26, -80, 30, 'rgba(255,255,255,1)', 0.5); pop(); }
function samovar(x, y, s, t) { push(x, y, s); const b = shape(spline([[-70, 0], [-90, -80], [-80, -170], [-50, -200], [50, -200], [80, -170], [90, -80], [70, 0]], true, 8), { wash: '#d6a842', washA: 1, w: 2.6, col: '#4a2a06', key: 8190 }); metalG(b.path, -30, -130, 160, '#fff0b0', '#d6a842', '#6a4208');
  rect(-30, -240, 60, 40, { wash: '#c99636', washA: 1, w: 2.2, col: '#4a2a06' }); ell(0, -250, 34, 10, { wash: '#d6a842', washA: 1, w: 2 }); pencil([[60, -60], [110, -50], [120, -30]], { w: 8, col: '#a88430', pass2: false }); poly([[-60, 0], [60, 0], [80, 30], [-80, 30]], { wash: '#a88430', washA: 1, w: 2.2, col: '#4a2a06' });
  for (let q = 0; q < 3; q++) { const k = (t * 0.6 + q / 3) % 1; ell(Math.sin(k * 6) * 14, -270 - k * 160, 20 + k * 26, 14 + k * 20, { wash: '#ffffff', washA: 0.4 * (1 - k), line: false }); } pop(); }
/* --- реквизит Тома */
Object.assign(PROPS, {
  forkShubaP() { pencil([[0, 10], [0, -100]], { w: 7, col: '#c8ccd0' }); for (const x of [-12, -4, 4, 12]) pencil([[x, -100], [x, -150]], { w: 3, col: '#c8ccd0', pass2: false }); push(0, -150, 0.5); const cols = ['#a8b4c0', SH.pot, SH.carrot, SH.beet]; cols.forEach((c, i) => rect(-40, -i * 22, 80, 22, { wash: c, washA: 1, w: 1.4, col: '#3a2a20' })); pencil([[-40, -88], [40, -88]], { w: 6, col: SH.mayo, pass2: false }); pop(); },
  herringP() { herring(0, -40, 0.5, -1.2, { key: 8200 }); },
  beetP() { beet(0, -50, 0.7, 0, { key: 8201 }); },
  graterP() { push(0, -60, 1, 0.1); poly([[-30, 60], [30, 60], [20, -80], [-20, -80]], { wash: '#c8ccd0', washA: 1, w: 2.4, col: '#3a3e44' }); for (let i = 0; i < 5; i++) for (let j = 0; j < 3; j++) ell(-14 + j * 14, -50 + i * 24, 4, 3, { wash: '#4a5058', washA: 1, line: false }); rect(-14, -110, 28, 30, { wash: '#2a2a2a', washA: 1, w: 2 }); pop(); },
  mayoP() { mayoJar(0, -10, 0.6, -0.3); },
  posterP() { push(0, -70, 1, 0.1); rect(-60, -80, 120, 160, { wash: '#efe2c4', washA: 1, w: 2.2, col: '#3a2a14' }); txt('ШУБА!', 0, -40, 30, { font: 'Osw', col: '#a8241e' }); beet(0, 30, 0.45, 0, { noLeaf: 1, key: 8202 }); pop(); },
});
