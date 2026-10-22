/* 002 — еда выпуска «Наггетсы»: наггетс 4 форм (колокол, мяч, ботинок, кость) + «палочка» Бейкера, сырой фарш, соусы, коробка канала (без чужих логотипов),
   реквизит Тома. Общие детали еды 001 — food.js (crumbs, bubbleTag, hat20, stache). */
const FN = { crust: '#d8963a', crustD: '#8a4a12', crustL: '#f8d27a', crumb: '#b8701e', meat: '#f6ecd8', meatD: '#d8c6a4', raw: '#e8a4a0', rawD: '#b4645e',
  bbq: '#6a1e0c', bbqL: '#b04a24', sour: '#e8642a', sourL: '#ffb070', must: '#e8b53a', mustL: '#fff0a0', gold: '#e8b53a', goldD: '#8a5a10', goldL: '#fff4b8' };
const NUG_SHAPE = {                                                     // контуры ~ ширина 120 (центр 0,0)
  bell: [[-52, 34], [-58, 6], [-44, -24], [-20, -46], [0, -52], [20, -46], [44, -24], [58, 6], [52, 34], [24, 42], [-24, 42]],
  ball: [[-50, 0], [-40, -32], [-8, -48], [28, -42], [50, -14], [48, 22], [24, 44], [-14, 46], [-42, 28]],
  boot: [[-46, 44], [-50, 10], [-40, -30], [-34, -56], [-6, -60], [2, -30], [10, -6], [44, 0], [62, 18], [56, 42], [10, 48]],
  bone: [[-60, -18], [-48, -40], [-26, -30], [-10, -20], [10, -20], [26, -30], [48, -40], [60, -18], [50, 0], [60, 18], [48, 40], [26, 30], [10, 20], [-10, 20], [-26, 30], [-48, 40], [-60, 18], [-50, 0]],
  stick: [[-76, -20], [-62, -30], [62, -30], [76, -20], [78, 20], [62, 30], [-62, 30], [-78, 20]],
  among: [[-34, 52], [-40, 0], [-34, -36], [-10, -54], [16, -52], [36, -36], [42, 0], [52, -4], [58, 30], [40, 34], [36, 52], [14, 54], [8, 34], [-4, 34], [-8, 54]],
};
function nugget(x, y, s, rot = 0, o = {}) {                            // панированный наггетс: рыхлая корочка, поры, блики масла; o.kind, o.bite (откушено), o.gold, o.raw, o.face
  const kind = o.kind || 'bell', key = o.key || 7600, r = rng(key);
  push(x, y, s, rot);
  const cols = o.gold ? [FN.gold, FN.goldD, FN.goldL] : o.raw ? [FN.raw, FN.rawD, '#f8d0c8'] : [FN.crust, FN.crustD, FN.crustL];
  ell(4, 40, 58, 12, { wash: '#000000', washA: 0.16, line: false });
  const P = wobP(spline(NUG_SHAPE[kind], true, 8), 3, key);
  const p = shape(P, { wash: cols[0], washA: 1, w: 2.6, col: o.gold ? '#5a3a06' : '#4a2408', key });
  ctx.save(); ctx.clip(p.path);
  const g = ctx.createRadialGradient(-20, -26, 6, 0, 0, 80); g.addColorStop(0, cols[2]); g.addColorStop(0.45, cols[0]); g.addColorStop(1, cols[1]); ctx.fillStyle = g; ctx.globalAlpha = 0.9; ctx.fillRect(-90, -90, 180, 180); ctx.globalAlpha = 1;
  if (!o.gold) for (let i = 0; i < (o.raw ? 26 : 46); i++) { const a = r() * 6.283, d = r() * 52, cx = Math.cos(a) * d, cy = Math.sin(a) * d * 0.8;
    if (o.raw) { pencil([[cx - 5, cy], [cx + 5, cy + 2]], { w: 2, col: '#f8dcd8', a: 0.7, pass2: false }); continue; }
    ell(cx, cy, 2 + r() * 4, 1.6 + r() * 3, { wash: i % 3 ? FN.crumb : FN.crustL, washA: 0.75, line: false, rot: r() * 3 }); }
  else { glow(-18, -20, 40, 'rgba(255,255,230,1)', 0.8); for (let i = 0; i < 6; i++) { const a = r() * 6.283; pencil([[Math.cos(a) * 20, Math.sin(a) * 16], [Math.cos(a) * 36, Math.sin(a) * 30]], { w: 2, col: FN.goldD, a: 0.4, pass2: false }); } }
  ctx.restore();
  if (!o.raw) { ell(-22, -22, 13, 6, { wash: '#fffbe6', washA: 0.75, line: false, rot: -0.5 }); ell(-4, -34, 5, 3, { wash: '#ffffff', washA: 0.8, line: false }); }
  if (o.bite) { const b = shape(spline([[30, -60], [64, -40], [70, 10], [54, 30], [40, 10], [48, -6], [30, -16], [36, -34]], true, 6), { wash: FN.meat, washA: 1, w: 2.2, col: '#6a4a24', key: key + 1 });
    shadeG(b.path, 70, 0, 30, 0, FN.meatD, 0.6); for (let i = 0; i < 6; i++) pencil([[40 + i * 4, -30 + i * 8], [48 + i * 4, -26 + i * 8]], { w: 1.4, col: '#c8a878', a: 0.6, pass2: false });
    if (o.steam) for (let i = 0; i < 3; i++) { const k = (o.steam * 0.8 + i / 3) % 1; pencil(spline([[50 + i * 6, -40 - k * 80], [40 + i * 8 + Math.sin(k * 6) * 10, -80 - k * 100], [54 + i * 4, -120 - k * 110]], false, 5), { w: 4, col: '#ffffff', a: 0.5 * (1 - k), pass2: false }); } }
  if (o.face) { for (const sd of [-1, 1]) { ell(sd * 16, -6, 7, 9, { wash: '#ffffff', washA: 1, w: 1.6, col: '#2a1408' }); ell(sd * 16 + 2, -4, 3.5, 4.5, { wash: '#1a0a04', washA: 1, line: false }); }
    if (o.face === 'monster') { pencil([[-24, 22], [-8, 16], [8, 22], [24, 16]], { w: 3, col: '#2a1408', pass2: false }); for (const sd of [-1, 1]) { rect(sd * 58 - 8, -4, 16, 14, { wash: '#8a9098', washA: 1, w: 1.8, col: '#2a2e34' }); } pencil([[-30, -30], [-10, -36], [10, -30], [30, -36]], { w: 2.4, col: '#2a1408', a: 0.8, pass2: false }); }
    else pencil(spline([[-14, 18], [0, 26], [14, 18]], false, 5), { w: 2.6, col: '#2a1408', pass2: false }); }
  if (kind === 'among') { const v = rect(-4, -34, 34, 22, { wash: '#9ad8f0', washA: 1, w: 2, col: '#2a1408' }); glow(6, -28, 16, 'rgba(255,255,255,1)', 0.6); }
  pop();
}
function mince(x, y, s, t, o = {}) {                                     // горка фарша: розовые волокна-«червячки», o.crumble 0..1 — разваливается
  push(x, y, s); const r = rng(o.key || 7650), cr = o.crumble || 0;
  for (let i = 0; i < 70; i++) { const a = r() * 6.283, d = r() * 60, cx = Math.cos(a) * d * (1 + cr * 2.2) + cr * (r() - 0.5) * 80, cy = -Math.abs(Math.sin(a)) * d * 0.7 + cr * (r() * 140) * (r() > 0.5 ? 1 : 0.3);
    pencil(spline([[cx - 8, cy], [cx, cy - 4 + Math.sin(i) * 3], [cx + 8, cy + 1]], false, 4), { w: 6, col: i % 3 ? FN.raw : '#f2c0b8', a: 0.95, pass2: false }); if (i % 4 === 0) pencil([[cx - 6, cy + 1], [cx + 6, cy + 2]], { w: 1.4, col: FN.rawD, a: 0.6, pass2: false }); }
  pop();
}
function sauceCup(x, y, s, col, colL, o = {}) {                          // соусник: пластиковая чашечка, глянцевый соус, капля по краю
  push(x, y, s, o.rot || 0);
  const c = poly([[-46, -26], [46, -26], [36, 26], [-36, 26]], { wash: '#f2ece2', washA: 1, w: 2.4, col: '#3a3028', key: 7660 }); shadeG(c.path, 46, 0, -20, 0, '#b8b0a0', 0.5);
  ell(0, -26, 46, 12, { wash: col, washA: 1, w: 2.2, col: '#3a1a08' }); ell(-14, -29, 16, 4, { wash: colL, washA: 0.9, line: false }); ell(10, -24, 4, 2, { wash: '#ffffff', washA: 0.9, line: false });
  if (o.drip) blob([[30, -26], [40, -20], [38, 4], [32, 8], [28, -16]], { wash: col, washA: 1, w: 1.4, col: '#3a1a08' });
  pop();
}
function nugBox(x, y, s, t, o = {}) {                                    // коробка канала: томатный картон, сливочная волна, надпись, клапан-крышка; рисовать back/front
  push(x, y, s); const L = '#2b1a10', lid = o.lid ?? 1;
  if (o.part !== 'front') { const bk = poly([[-150, -150], [150, -150], [130, 0], [-130, 0]], { wash: '#a8321e', washA: 1, w: 2.6, col: L, key: 7670 }); shadeG(bk.path, 0, -150, 0, 0, '#5a1006', 0.5);
    push(0, -150, 1); const lp = poly([[-150, 0], [150, 0], [130 * (1 - lid) + 150 * lid, -150 * lid], [-130 * (1 - lid) - 150 * lid, -150 * lid]], { wash: '#c43c24', washA: 1, w: 2.6, col: L, key: 7671 }); shadeG(lp.path, 0, 0, 0, -150, '#7a1a0c', 0.4); pop(); }
  if (o.part !== 'back') { const f = poly([[-160, -110], [160, -110], [140, 120], [-140, 120]], { wash: '#d9482b', washA: 1, w: 3, col: L, key: 7672 }); shadeG(f.path, 160, 0, -40, 0, '#7a1a0c', 0.45);
    ctx.save(); ctx.clip(f.path); ctx.fillStyle = '#f4e6c8'; ctx.beginPath(); ctx.moveTo(-200, 40); for (let i = 0; i <= 20; i++) ctx.lineTo(-200 + i * 20, 30 + Math.sin(i * 0.9) * 12); ctx.lineTo(200, 200); ctx.lineTo(-200, 200); ctx.fill(); ctx.restore();
    txt(o.label || 'НАГГЕТСЫ', 0, -40, 58, { font: 'Osw', col: '#fff8ec' }); txt('ТОМ НА ВКУС', 0, 76, 30, { font: 'Osw', col: '#a8321e' }); }
  pop();
}
function frost(x, y, w, h, t, a = 1) {                                  // иней: голубые иглы-кристаллы по краю
  const r = rng(7680); for (let i = 0; i < 40; i++) { const px = x + r() * w, py = y + r() * h, l = 6 + r() * 16; for (let k = 0; k < 3; k++) { const an = k * 1.047 + r(); pencil([[px - Math.cos(an) * l, py - Math.sin(an) * l], [px + Math.cos(an) * l, py + Math.sin(an) * l]], { w: 1.6, col: '#e8f6ff', a: 0.7 * a, pass2: false }); } }
}
function envelope(x, y, s, rot = 0, o = {}) {                            // конверт с маркой и сургучом
  push(x, y, s, rot); const e = rect(-70, -44, 140, 88, { wash: '#f2e6c8', washA: 1, w: 2.2, col: '#3a2a14', key: 7690 + (o.k || 0) }); shadeG(e.path, 70, 44, -20, 0, '#c8b48a', 0.4);
  pencil([[-70, -44], [0, 8], [70, -44]], { w: 2, col: '#8a7450', a: 0.8, pass2: false }); rect(36, -36, 26, 30, { wash: o.stamp || '#d9482b', washA: 1, w: 1.4, col: '#3a2a14' }); ell(0, 8, 12, 12, { wash: '#a8241e', washA: 1, w: 1.4, col: '#4a0a06' });
  if (o.txt) txt(o.txt, -20, 26, 18, { font: 'Hand', col: '#3a2a14', a: 0.85 }); pop();
}
function onionRing(x, y, s, rot = 0, k = 0) {                            // луковое кольцо в кляре
  push(x, y, s, rot); const R = ell(0, 0, 60, 52, { wash: FN.crust, washA: 1, w: 2.6, col: '#4a2408', key: 7695 + k }); ctx.save(); ctx.clip(R.path); const g = ctx.createRadialGradient(-20, -20, 4, 0, 0, 64); g.addColorStop(0, FN.crustL); g.addColorStop(1, FN.crustD); ctx.globalAlpha = 0.8; ctx.fillStyle = g; ctx.fillRect(-70, -70, 140, 140); ctx.restore();
  ell(0, 0, 30, 24, { wash: '#2a1a0c', washA: 1, w: 2.2, col: '#4a2408' }); ell(0, 0, 34, 28, { line: false, wash: '#f6ecd8', washA: 0.0 }); pencil(ellPts(0, 0, 31, 25, 0, 0.1, 24), { w: 3, col: '#f2ead0', a: 0.9, pass2: false }); pop();
}
/* --- реквизит Тома: pose.prop = 'nugP' | 'nugBiteP' | 'stickP' | 'goldP' | 'panP' | 'letterP' | 'gavelP' | 'flaskP' | 'sauceP' */
Object.assign(PROPS, {
  nugP() { nugget(0, -40, 0.62, 0.2, { kind: 'bell', key: 7700 }); },
  nugBiteP() { nugget(0, -40, 0.62, 0.2, { kind: 'bell', key: 7700, bite: 1 }); },
  stickP() { nugget(0, -60, 0.6, 1.5, { kind: 'stick', key: 7701 }); },
  rawStickP() { nugget(0, -60, 0.6, 1.5, { kind: 'stick', key: 7702, raw: 1 }); },
  goldP() { nugget(0, -40, 0.7, 0.2, { kind: 'ball', key: 7703, gold: 1 }); glow(0, -40, 80, 'rgba(255,230,120,1)', 0.6); },
  panP() { push(0, -30, 1, -0.2); ell(0, 0, 110, 26, { wash: '#5a5048', washA: 1, w: 2.6, col: '#1a1410' }); ell(0, -4, 86, 16, { wash: '#8a7a64', washA: 1, w: 1.6, col: '#2a2018' }); for (let i = 0; i < 6; i++) ell(-40 + i * 14, -4, 4, 2.4, { wash: '#f6d050', washA: 1, line: false }); pop(); },
  letterP() { envelope(0, -40, 0.7, -0.3, { k: 3 }); },
  sackP() { push(0, -20, 1); blob([[-50, 0], [-60, -90], [-30, -120], [30, -120], [60, -90], [50, 0]], { wash: '#a88a5a', washA: 1, w: 2.4, col: '#3a2a14', key: 7705 }); envelope(-10, -126, 0.5, 0.3, { k: 4 }); envelope(20, -130, 0.45, -0.4, { k: 5, stamp: '#3a6a9a' }); txt('U.S. MAIL', 0, -50, 22, { font: 'Osw', col: '#3a2a14' }); pop(); },
  gavelP() { push(0, -40, 1, -0.6); pencil([[0, 30], [0, -80]], { w: 10, col: '#6a3a18' }); rect(-40, -110, 80, 34, { wash: '#7a4420', washA: 1, w: 2.4, col: '#2a1408' }); pop(); },
  flaskP() { push(0, -40, 1); poly([[-10, -70], [10, -70], [10, -40], [40, 20], [-40, 20], [-10, -40]], { wash: '#d8eef4', washA: 0.85, w: 2.4, col: '#2a3a40' }); poly([[-26, -6], [26, -6], [40, 20], [-40, 20]], { wash: '#f2a81e', washA: 0.9, line: false }); glow(-10, -10, 20, 'rgba(255,255,255,1)', 0.6); pop(); },
  sauceP() { nugget(0, -40, 0.62, 0.2, { kind: 'boot', key: 7704 }); blob([[-20, -66], [24, -70], [30, -50], [-10, -48]], { wash: FN.bbq, washA: 1, w: 1.6, col: '#2a0804' }); ell(-2, -64, 10, 3, { wash: FN.bbqL, washA: 0.8, line: false }); },
  folderP() { push(0, -40, 1, 0.1); rect(-50, -70, 100, 130, { wash: '#c8a868', washA: 1, w: 2.2, col: '#3a2a14' }); rect(-40, -60, 80, 110, { wash: '#f6f0e2', washA: 1, w: 1.4, col: '#6a5a44' }); for (let i = 0; i < 6; i++) pencil([[-30, -46 + i * 16], [30, -46 + i * 16]], { w: 1.4, col: '#6a6a6a', a: 0.7, pass2: false }); pop(); },
});
Object.assign(PROPS, {
  amongP() { nugget(0, -44, 0.6, 0, { kind: 'among', key: 7710 }); },
  amongBiteP() { nugget(0, -44, 0.6, 0, { kind: 'among', key: 7710, bite: 1 }); },
});
const money = v => '$' + (v < 1 ? v.toFixed(2) : Math.round(v).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
