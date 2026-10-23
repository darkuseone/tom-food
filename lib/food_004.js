/* 004 — еда выпуска «Холодец»: дрожащий холодец (янтарное желе, мясо, морковные звёздочки, зелень), кость, кастрюля с костями и паром, хрен и горчица,
   пакет желатина, солёный огурец, квашеная капуста, реквизит Тома (ложка с желе, половник, огурец). */
const KH = { jel: '#d8b46a', jelL: '#f6e2a8', jelD: '#9a7434', meat: '#a8644a', meatD: '#6a3420', bone: '#efe6d0', boneD: '#b8a888', carrot: '#e8742a', green: '#4a8a2a', cuc: '#4a7a2a', cucL: '#8ab84a' };
function jellySlab(x, y, w, h, t, o = {}) {                          // холодец: прозрачный янтарный брусок, мясо внутри, звёздочки моркови, блики; o.wob — сила дрожания
  const wb = (o.wob || 0.4) * Math.sin(t * 14) * 6, r = rng(o.key || 9400); push(x, y, 1);
  const P = [[-w / 2, 0], [-w / 2 + wb, -h], [w / 2 + wb, -h], [w / 2, 0]]; const s = poly(P, { wash: KH.jel, washA: 0.85, w: 2.4, col: '#6a4a1a', key: o.key || 9400 });
  ctx.save(); ctx.clip(s.path); const g = ctx.createLinearGradient(-w / 2, -h, w / 2, 0); g.addColorStop(0, 'rgba(255,240,190,0.6)'); g.addColorStop(1, 'rgba(150,100,40,0.4)'); ctx.fillStyle = g; ctx.fillRect(-w / 2 - 20, -h - 20, w + 40, h + 40);
  for (let i = 0; i < w * h / 900; i++) { const px = (r() - 0.5) * w * 0.9, py = -r() * h * 0.85 - 6; if (i % 3) blob([[px - 12, py], [px - 6, py - 9], [px + 10, py - 7], [px + 12, py + 3], [px, py + 8]], { wash: i % 2 ? KH.meat : '#c88a6a', washA: 0.85, w: 1, col: KH.meatD, a: 0.7 });
    else { push(px, py, 0.35, r() * 3); poly(Array.from({ length: 10 }, (_, k) => { const a = k / 10 * 6.283, R = k % 2 ? 9 : 18; return [Math.cos(a) * R, Math.sin(a) * R]; }), { wash: KH.carrot, washA: 1, w: 1.2, col: '#8a3a08' }); pop(); } }
  for (let i = 0; i < 4; i++) { const px = (r() - 0.5) * w * 0.8; blob([[px, -h + 6], [px - 10, -h + 16], [px + 2, -h + 22], [px + 12, -h + 12]], { wash: KH.green, washA: 1, w: 1, col: '#1a3a0a' }); }
  ctx.restore(); poly([[-w / 2 + wb, -h], [w / 2 + wb, -h], [w / 2 + wb + 14, -h - 10], [-w / 2 + wb + 14, -h - 10]], { wash: KH.jelL, washA: 0.9, w: 2, col: '#6a4a1a' });
  pencil([[-w / 2 + 14 + wb * 0.8, -h + 10], [-w / 2 + 18, -10]], { w: 6, col: '#ffffff', a: 0.5, pass2: false }); glow(-w / 4 + wb, -h + 20, 50, 'rgba(255,250,220,1)', 0.4); pop();
}
function jellyPlate(x, y, s, t, o = {}) { push(x, y, s); ell(0, 10, 220, 50, { wash: '#000000', washA: 0.2, line: false }); const p = ell(0, 0, 210, 52, { wash: '#f6f2ea', washA: 1, w: 2.6, col: '#4a4038', key: 9410 }); shadeG(p.path, 160, 40, -60, 0, '#b8b0a4', 0.5); pencil(ellPts(0, 0, 180, 40, 0, 0, 40), { w: 3, col: '#3a7ab8', a: 0.5, pass2: false });
  jellySlab(-60, 10, 150, 90, t, { wob: o.wob, key: 9411 }); jellySlab(90, 14, 120, 80, t + 0.3, { wob: o.wob, key: 9412 }); pop(); }
function bone(x, y, s, rot = 0, k = 0) { push(x, y, s, rot); const b = shape(spline([[-60, -8], [-70, -24], [-84, -16], [-80, 0], [-84, 16], [-70, 24], [-60, 8], [60, 8], [70, 24], [84, 16], [80, 0], [84, -16], [70, -24], [60, -8]], true, 4), { wash: KH.bone, washA: 1, w: 2.2, col: '#5a4a30', key: 9420 + k }); shadeG(b.path, 0, 20, 0, -10, KH.boneD, 0.5); pop(); }
function stockPot(x, y, s, t, o = {}) {                              // кастрюля: эмаль, кипит, кости торчат, пар
  push(x, y, s); const b = shape(spline([[-150, -200], [-150, 0], [-120, 30], [120, 30], [150, 0], [150, -200]], false, 6), { wash: o.col || '#e8e4d8', washA: 1, w: 3, col: '#3a3a3a', key: 9430 }); shadeG(b.path, 150, 0, -40, 0, '#a8a498', 0.5);
  if (o.dots !== false) for (let i = 0; i < 3; i++) ell(-60 + i * 60, -100, 18, 18, { wash: '#d9482b', washA: 1, w: 1.4, col: '#6a1a08' });
  ell(0, -200, 150, 30, { wash: '#c8a050', washA: 1, w: 3, col: '#3a3a3a' }); for (let i = 0; i < 10; i++) { const r = rng(9431 + i), k = (t * 2 + r()) % 1; ell((r() - 0.5) * 240, -200 + (r() - 0.5) * 30, 6 + k * 12, 3 + k * 6, { line: true, w: 2, col: '#fff0c0', a: 1 - k }); }
  bone(-40, -230, 0.8, -1.1, 1); bone(50, -225, 0.7, -1.6, 2); for (const sd of [-1, 1]) ell(sd * 160, -170, 20, 10, { wash: '#3a3a3a', washA: 1, w: 2 });
  for (let q = 0; q < 4; q++) { const k = (t * 0.5 + q / 4) % 1; ell(Math.sin(k * 6 + q) * 40, -260 - k * 300, 50 + k * 60, 30 + k * 40, { wash: '#ffffff', washA: 0.35 * (1 - k), line: false }); } pop();
}
function condJar(x, y, s, kind = 'hren') { push(x, y, s); const j = rect(-36, -90, 72, 90, { wash: kind === 'hren' ? '#f6f2e6' : '#e8b53a', washA: 1, w: 2.4, col: '#4a4038', key: 9440 }); rect(-40, -104, 80, 18, { wash: '#c8282a', washA: 1, w: 2 }); rect(-30, -66, 60, 34, { wash: '#f6f0d8', washA: 1, w: 1.4 }); txt(kind === 'hren' ? 'ХРЕН' : 'ГОРЧИЦА', 0, -49, kind === 'hren' ? 18 : 12, { font: 'Osw', col: '#3a2a10' }); glow(-18, -60, 20, 'rgba(255,255,255,1)', 0.5); pop(); }
function gelatinPack(x, y, s, rot = 0) { push(x, y, s, rot); rect(-50, -70, 100, 140, { wash: '#f6e8b8', washA: 1, w: 2.4, col: '#5a4a20' }); rect(-50, -70, 100, 34, { wash: '#2a6ab8', washA: 1, w: 2 }); txt('ЖЕЛАТИН', 0, -53, 18, { font: 'Osw', col: '#ffffff' }); txt('10 г', 0, 20, 26, { font: 'Hand', col: '#3a2a10' }); pop(); }
function cucumber(x, y, s, rot = 0) { push(x, y, s, rot); const c = shape(spline([[-50, 0], [-40, -16], [40, -18], [52, 0], [40, 16], [-40, 16]], true, 6), { wash: KH.cuc, washA: 1, w: 2, col: '#1a3a0a', key: 9450 }); shadeG(c.path, 0, 18, 0, -18, KH.cucL, 0.3); for (let i = 0; i < 8; i++) ell(-36 + i * 10, -4 + (i % 2) * 8, 2.4, 2.4, { wash: '#2a4a14', washA: 1, line: false }); pop(); }
function sauerkraut(x, y, s) { push(x, y, s); ell(0, 0, 70, 20, { wash: '#f2f0ea', washA: 1, w: 2, col: '#4a4038' }); for (let i = 0; i < 26; i++) { const r = rng(9460 + i); pencil([[(r() - 0.5) * 100, -10 - r() * 20], [(r() - 0.5) * 100 + 10, -14 - r() * 20]], { w: 3, col: i % 4 ? '#f2eab0' : KH.carrot, pass2: false }); } pop(); }
Object.assign(PROPS, {
  spoonJellyP() { pencil([[0, 10], [0, -90]], { w: 7, col: '#c8ccd0' }); ell(0, -110, 22, 30, { wash: '#c8ccd0', washA: 1, w: 2, col: '#4a5058' }); push(0, -120, 0.3); jellySlab(0, 20, 120, 70, 0, { wob: 0, key: 9470 }); pop(); },
  ladleP() { pencil([[0, 10], [0, -140]], { w: 8, col: '#8a9098' }); ell(0, -170, 40, 30, { wash: '#a8aeb4', washA: 1, w: 2.4, col: '#3a3e44' }); ell(0, -178, 34, 10, { wash: KH.jel, washA: 1, line: false }); },
  cucumberP() { cucumber(0, -40, 0.7, 1.2); },
  boneP() { bone(0, -50, 0.6, 1.3, 5); },
  gavelP2() { push(0, -40, 1, -0.6); pencil([[0, 30], [0, -80]], { w: 10, col: '#6a3a18' }); rect(-40, -110, 80, 34, { wash: '#7a4420', washA: 1, w: 2.4, col: '#2a1408' }); pop(); },
});
