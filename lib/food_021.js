/* 021 — еда выпуска «Сырники»: сырник (золотая корочка, бледный бок, поры, мука; откус с паром), горка сырников на тарелке со сметаной, вареньем и мятой,
   чугунная сковорода с шипящими сырниками, горшок сметаны, банка варенья, брусок/клин и круг твёрдого сыра с дырками, творог в марле-узелке,
   берестяная грамота с процарапанными буквами, рукопись «Домострой» с буквицей, книга Молоховец, «Книга о вкусной и здоровой пище», блин-стопка. Реквизит — PROPS. */
const SY = { crust: '#d88a2a', crustD: '#8a4a10', crustL: '#f6c25a', side: '#f4e2b4', sideD: '#c8a670', tvorog: '#f8f4ea', tvorogD: '#cfc4ae', smet: '#fbf8f0', smetD: '#d8cdb8', jam: '#b81e3a', jamD: '#5a0614', jamL: '#ff7a8a', cheese: '#f4c64a', cheeseD: '#b8861a', cheeseL: '#fff0a8', iron: '#2a2624', ironL: '#5a5450', bark: '#efe2c4', barkD: '#9a7a4e', blin: '#e8b462', blinD: '#9a5a1a' };
function syrnik(x, y, s = 1, rot = 0, o = {}) {                            // сырник 3/4: золотая корочка сверху, бледный бок, поры, мука; o.bite 0..1, o.raw (белый, сырой), o.key
  const k = o.key || 21000, r = rng(k); push(x, y, s, rot);
  const side = blob([[-62, -8], [-60, 14], [-40, 26], [0, 30], [40, 26], [60, 14], [62, -8]], { wash: o.raw ? SY.tvorog : SY.side, washA: 1, w: 2, col: o.raw ? SY.tvorogD : '#7a4a14', key: k });
  shadeG(side.path, 0, -8, 0, 30, o.raw ? SY.tvorogD : SY.sideD, 0.55); for (let i = 0; i < 6; i++) pencil([[-50 + i * 20, 4], [-48 + i * 20, 20]], { w: 1.2, col: '#b8945a', a: 0.4, pass2: false });
  const top = ell(0, -8, 62, 24, { wash: o.raw ? '#fbf8f0' : SY.crust, washA: 1, w: 2, col: o.raw ? SY.tvorogD : SY.crustD, key: k + 1 });
  if (!o.raw) { shadeG(top.path, -40, -26, 50, 14, SY.crustL, 0.6); shadeG(top.path, 50, 14, -20, -20, '#7a3a08', 0.35); for (let i = 0; i < 14; i++) ell(-46 + r() * 92, -20 + r() * 22, 2 + r() * 3, 1.2 + r() * 1.6, { wash: '#6a3008', washA: 0.5, line: false }); ell(-18, -18, 22, 5, { wash: '#fff2c0', washA: 0.7, line: false }); }
  for (let i = 0; i < 8; i++) ell(-44 + r() * 88, -16 + r() * 18, 3, 2, { wash: '#ffffff', washA: o.raw ? 0.2 : 0.35, line: false });
  if (o.bite) { ctx.save(); ctx.globalCompositeOperation = 'destination-out'; for (let i = 0; i < 3; i++) ell(48 + i * 4, -14 + (i - 1) * 16, 26 * o.bite, 20 * o.bite, { wash: '#000', washA: 1, line: false }); ctx.restore();
    blob([[34, -30], [24, -8], [30, 16], [40, 4], [42, -16]], { wash: SY.tvorog, washA: 1, w: 1.4, col: SY.tvorogD }); for (let i = 0; i < 5; i++) ell(30 + r() * 10, -20 + r() * 30, 2, 2, { wash: SY.tvorogD, washA: 0.8, line: false }); }
  pop();
}
function smetanaDollop(x, y, s = 1, key = 21010) {                        // ложка сметаны: завиток, блик
  push(x, y, s); const d = blob([[-34, 6], [-30, -10], [-10, -22], [6, -34], [10, -18], [30, -12], [36, 4], [0, 12]], { wash: SY.smet, washA: 1, w: 1.6, col: SY.smetD, key }); shadeG(d.path, 30, 10, -20, -20, SY.smetD, 0.4);
  pencil(spline([[-14, -6], [0, -16], [10, -10]], false, 5), { w: 2, col: '#e8dcc4', pass2: false }); ell(-8, -14, 7, 3, { wash: '#ffffff', washA: 0.9, line: false }); pop();
}
function jamDrop(x, y, s = 1, key = 21015) {                              // капля варенья с ягодкой и бликом
  push(x, y, s); const j = blob([[-26, 4], [-20, -12], [0, -18], [22, -10], [28, 6], [6, 14]], { wash: SY.jam, washA: 0.95, w: 1.4, col: SY.jamD, key }); shadeG(j.path, 20, 10, -20, -14, SY.jamD, 0.45);
  ell(4, -6, 9, 8, { wash: '#8a0a24', washA: 1, w: 1.2, col: SY.jamD }); ell(1, -9, 3, 2, { wash: SY.jamL, washA: 0.9, line: false }); ell(-12, -8, 6, 2.4, { wash: '#ffd0d8', washA: 0.8, line: false }); pop();
}
function mintLeaf(x, y, s = 1, rot = 0, key = 21018) {                    // листик мяты
  push(x, y, s, rot); const m = blob([[0, 0], [-14, -12], [-8, -30], [0, -38], [8, -30], [14, -12]], { wash: '#4aa84a', washA: 1, w: 1.2, col: '#1a5a1a', key }); shadeG(m.path, 12, 0, -12, -30, '#1a5a1a', 0.35); pencil([[0, -2], [0, -34]], { w: 1.2, col: '#2a7a2a', pass2: false }); pop();
}
function syrnikPlate(x, y, s, t, o = {}) {                               // хиро: тарелка с горкой сырников, сметана, варенье, мята, сахарная пудра, пар; o.n (3..5), o.steam, o.bite, o.key
  const k = o.key || 21020, n = o.n || 5; push(x, y, s);
  ell(4, 30, 210, 46, { wash: '#000000', washA: 0.22, line: false });
  const p = ell(0, 0, 220, 56, { wash: '#f6f2ea', washA: 1, w: 2.4, col: '#7a7468', key: k }); shadeG(p.path, 0, 56, 0, -40, '#c8c0b0', 0.4); ell(0, -6, 168, 40, { wash: '#efe8da', washA: 1, w: 1.2, col: '#a8a090' });
  for (let i = 0; i < 18; i++) { const a = i / 18 * 6.283; ell(Math.cos(a) * 196, Math.sin(a) * 47, 5, 3, { wash: '#2a5a9a', washA: 0.8, line: false }); }
  const pos = [[-80, 0, 0.92], [70, 4, 0.92], [-6, 16, 0.95], [-40, -34, 0.9], [44, -32, 0.9]].slice(0, n);
  pos.forEach(([px, py, ps], i) => syrnik(px, py - (i > 2 ? 16 : 0), ps, (i - 2) * 0.05, { key: k + 10 + i * 3, bite: i === 2 ? (o.bite || 0) : 0 }));
  smetanaDollop(-18, -58, 1.25, k + 40); jamDrop(60, -46, 1.1, k + 41); jamDrop(-120, 14, 0.7, k + 42); mintLeaf(30, -64, 1, 0.5, k + 43); mintLeaf(42, -66, 0.8, -0.3, k + 44);
  const r = rng(k + 45); for (let i = 0; i < 26; i++) ell(-120 + r() * 240, -60 + r() * 70, 1.6, 1.6, { wash: '#ffffff', washA: 0.8, line: false });
  pop(); if (o.steam !== 0) steamWisps(x, y - 60 * s, s * 1.1, t, 4, k + 50, o.steam || 0.45);
}
function castIron(x, y, s, t, o = {}) {                                  // чугунная сковорода 3/4: ручка, масло пузырится, сырники шипят; o.n, o.raw (0..1 — бледные), o.flip (время переворота), o.key
  const k = o.key || 21060, r = rng(k); push(x, y, s);
  pencil([[150, -6], [330, -40]], { w: 30, col: SY.iron, pass2: false }); pencil([[160, -14], [320, -44]], { w: 6, col: SY.ironL, a: 0.6, pass2: false }); ell(330, -40, 14, 14, { wash: '#1a1614', washA: 1, w: 1.4 });
  const pan = ell(0, 0, 200, 64, { wash: SY.iron, washA: 1, w: 3, col: '#0a0808', key: k }); ell(0, -6, 176, 52, { wash: '#3a2a18', washA: 1, w: 1.6, col: '#0a0808' }); shadeG(pan.path, -150, -40, 150, 40, '#8a8278', 0.3);
  ell(0, -6, 170, 48, { wash: '#c8902a', washA: 0.35, line: false });
  const pos = [[-90, -6], [0, -24], [90, -4], [-30, 18], [60, 20]].slice(0, o.n || 5);
  pos.forEach(([px, py], i) => { const fl = o.flip && t > o.flip + i * 0.12 && t < o.flip + i * 0.12 + 0.35 ? Math.sin((t - o.flip - i * 0.12) / 0.35 * 3.14) : 0; syrnik(px, py - fl * 60, 0.62, fl * 2.4, { key: k + 10 + i * 3, raw: (o.raw || 0) > 0.5 }); });
  for (let i = 0; i < 16; i++) { const a = r() * 6.283, d = 0.5 + r() * 0.5, ph = (t * 3 + r()) % 1; ell(Math.cos(a) * 160 * d, -6 + Math.sin(a) * 44 * d, 3 + ph * 4, 2 + ph * 3, { wash: '#fff0b0', washA: 0.6 * (1 - ph), line: false }); }
  pop(); steamWisps(x, y - 40 * s, s, t, 3, k + 30, 0.35);
}
function smetanaPot(x, y, s = 1, o = {}) {                               // глиняный горшок/крынка сметаны, ложка торчит; o.key, o.spoon
  const k = o.key || 21080; push(x, y, s);
  const b = blob([[-56, 0], [-66, -60], [-50, -110], [-58, -128], [58, -128], [50, -110], [66, -60], [56, 0]], { wash: '#b0642e', washA: 1, w: 2, col: '#4a2008', key: k }); shadeG(b.path, 60, 0, -30, 0, '#5a2a08', 0.5);
  pencil(spline([[-62, -62], [0, -52], [62, -62]], false, 6), { w: 4, col: '#e8c8a0', a: 0.5, pass2: false }); ell(0, -128, 58, 14, { wash: SY.smet, washA: 1, w: 1.6, col: SY.smetD }); ell(-14, -132, 22, 5, { wash: '#ffffff', washA: 0.8, line: false });
  if (o.spoon !== 0) { pencil([[10, -132], [56, -220]], { w: 9, col: '#a8743a', pass2: false }); pencil([[12, -134], [54, -216]], { w: 2, col: '#e8c088', pass2: false }); }
  ell(-30, -80, 8, 22, { wash: '#ffffff', washA: 0.25, line: false }); pop();
}
function jamJar(x, y, s = 1, o = {}) {                                   // банка варенья: стекло, ягоды, тряпичная крышка с бечёвкой, этикетка; o.label
  const k = o.key || 21090; push(x, y, s);
  const j = rect(-46, -120, 92, 120, { wash: SY.jam, washA: 0.85, w: 2, col: SY.jamD, key: k }); shadeG(j.path, 46, 0, -46, 0, SY.jamD, 0.5); const r = rng(k + 1); for (let i = 0; i < 9; i++) ell(-34 + r() * 68, -100 + r() * 90, 8, 8, { wash: '#7a0a1e', washA: 0.8, w: 1, col: SY.jamD });
  ell(-30, -70, 6, 34, { wash: '#ffffff', washA: 0.35, line: false }); const c = blob([[-60, -116], [-56, -140], [0, -150], [56, -140], [60, -116], [30, -104], [-30, -104]], { wash: '#f2ead6', washA: 1, w: 1.6, col: '#7a6a4a' });
  ctx.save(); ctx.clip(c.path); for (let i = -4; i < 5; i++) { pencil([[i * 16, -152], [i * 16, -100]], { w: 3, col: '#c8241e', a: 0.6, pass2: false }); pencil([[-60, -140 + (i + 4) * 6], [60, -140 + (i + 4) * 6]], { w: 2, col: '#c8241e', a: 0.3, pass2: false }); } ctx.restore();
  pencil([[-50, -116], [50, -116]], { w: 3, col: '#8a6a3a', pass2: false }); if (o.label) { rect(-34, -70, 68, 30, { wash: '#f8f0d8', washA: 1, w: 1 }); txt(o.label, 0, -48, 15, { font: 'Hand', col: '#5a0614' }); } pop();
}
function cheeseWedge(x, y, s = 1, rot = 0, o = {}) {                      // брусок/клин твёрдого сыра с дырками; o.key, o.tag — табличка
  const k = o.key || 21100; push(x, y, s, rot);
  const top = poly([[-90, -50], [80, -70], [110, -40], [-60, -20]], { wash: SY.cheeseL, washA: 1, w: 2, col: SY.cheeseD, key: k });
  const fr = poly([[-60, -20], [110, -40], [110, 30], [-60, 50]], { wash: SY.cheese, washA: 1, w: 2, col: SY.cheeseD, key: k + 1 }); shadeG(fr.path, 110, 0, -60, 0, '#c8901a', 0.35);
  const sd = poly([[-90, -50], [-60, -20], [-60, 50], [-90, 20]], { wash: '#d8a030', washA: 1, w: 2, col: SY.cheeseD }); shadeG(sd.path, -90, 0, -60, 0, '#8a5a08', 0.4);
  for (const [hx, hy, hr] of [[-20, 10, 14], [40, -6, 18], [76, 20, 10], [8, 34, 8], [-40, -10, 7]]) { ell(hx, hy, hr, hr * 0.8, { wash: '#c8901a', washA: 1, w: 1.2, col: SY.cheeseD }); ell(hx + hr * 0.2, hy + hr * 0.2, hr * 0.7, hr * 0.5, { wash: '#a8701a', washA: 0.5, line: false }); }
  for (const [hx, hy] of [[0, -46], [50, -56]]) ell(hx, hy, 12, 4, { wash: '#d8a030', washA: 1, w: 1 }); pencil([[-80, -48], [70, -66]], { w: 3, col: '#ffffff', a: 0.5, pass2: false });
  if (o.tag) { pencil([[60, -60], [80, -110]], { w: 2, col: '#5a3a1a', pass2: false }); push(80, -130, 1, 0.1); rect(-50, -24, 100, 48, { wash: '#f4ecd0', washA: 1, w: 1.6, col: '#5a3a1a' }); txt(o.tag, 0, 12, 28, { font: 'Osw', col: '#8a1a0e' }); pop(); }
  pop();
}
function cheeseWheel(x, y, s = 1, o = {}) {                              // круг сыра 3/4: корка, клеймо, вырезанный сектор (o.cut)
  const k = o.key || 21110; push(x, y, s);
  const sd = rect(-120, -40, 240, 70, { wash: '#e0a030', washA: 1, w: 2.2, col: '#7a4a08', key: k }); shadeG(sd.path, 120, 0, -120, 0, '#8a5008', 0.45); ell(0, 30, 120, 30, { wash: '#d89828', washA: 1, w: 2.2, col: '#7a4a08' });
  const tp = ell(0, -40, 120, 30, { wash: SY.cheeseL, washA: 1, w: 2.2, col: '#7a4a08', key: k + 1 }); shadeG(tp.path, -80, -60, 80, -20, '#e0b040', 0.4); ell(-30, -48, 30, 8, { wash: '#ffffff', washA: 0.5, line: false });
  ell(30, -40, 26, 9, { wash: 'rgba(0,0,0,0)', washA: 0, w: 1.6, col: '#a8701a' }); txt(o.mark || 'СЫРЪ', 30, -34, 14, { font: 'Osw', col: '#8a5a08' });
  if (o.cut) { poly([[0, -40], [100, -58], [120, -40], [120, 30], [0, 30]], { wash: SY.cheese, washA: 1, w: 2, col: '#7a4a08' }); for (const [hx, hy] of [[40, -10], [80, 6], [60, -30]]) ell(hx, hy, 8, 6, { wash: '#c8901a', washA: 1, line: false }); }
  pop();
}
function tvorogBag(x, y, s = 1, t = 0, o = {}) {                         // творог в марле-узелке, капает сыворотка
  const k = o.key || 21120; push(x, y, s);
  const b = blob([[-60, 0], [-70, -50], [-50, -90], [-14, -100], [-10, -130], [10, -130], [14, -100], [50, -90], [70, -50], [60, 0], [0, 12]], { wash: SY.tvorog, washA: 1, w: 2, col: SY.tvorogD, key: k }); shadeG(b.path, 60, 0, -40, -80, SY.tvorogD, 0.45);
  for (let i = 0; i < 9; i++) pencil([[-60 + i * 15, -80], [-56 + i * 14, 4]], { w: 1, col: '#c8bca4', a: 0.5, pass2: false }); for (let i = 0; i < 5; i++) pencil([[-66, -70 + i * 16], [66, -70 + i * 16]], { w: 1, col: '#c8bca4', a: 0.4, pass2: false });
  pencil([[-12, -116], [12, -112]], { w: 4, col: '#8a6a3a', pass2: false }); const q = (t * 1.2) % 1; ell(0, 16 + q * 60, 4, 6, { wash: '#eef0d8', washA: 0.8 * (1 - q), line: false }); pop();
}
function birchBark(x, y, s = 1, rot = 0, o = {}) {                       // берестяная грамота: свиток с закрученными краями, чечевички, процарапанные буквы; o.reveal 0..1, o.lines
  const k = o.key || 21130; push(x, y, s, rot);
  const b = blob([[-160, -60], [150, -70], [170, 60], [-150, 70]], { wash: SY.bark, washA: 1, w: 2.2, col: SY.barkD, key: k }); shadeG(b.path, 0, 70, 0, -70, '#d8c49a', 0.4);
  const r = rng(k + 1); for (let i = 0; i < 22; i++) { const x = -150 + r() * 290, y = -60 + r() * 120; pencil([[x, y], [x + 8 + r() * 14, y]], { w: 2, col: '#8a6a4a', a: 0.55, pass2: false }); }
  for (const sd of [-1, 1]) blob([[sd * 150, -70], [sd * 186, -40], [sd * 190, 20], [sd * 160, 64], [sd * 140, 30], [sd * 146, -40]], { wash: '#d8c49a', washA: 1, w: 2, col: SY.barkD });
  const L = o.lines || ['ОТЪ ОНДРЕѢ', 'РЫБА · МАСЛО', 'И СЫРЫ'], rv = o.reveal === undefined ? 1 : o.reveal;
  L.forEach((s0, i) => txt(s0, -10, -24 + i * 36, 30, { font: 'Hand', col: '#4a2a14', reveal: clamp(rv * L.length - i) })); pop();
}
function domoBook(x, y, s = 1, t = 0, o = {}) {                          // рукопись XVI в. разворот: буквица киноварью, полуустав, деревянные крышки в коже
  const k = o.key || 21140; push(x, y, s);
  rect(-330, -210, 660, 420, { wash: '#5a2a14', washA: 1, w: 3, col: '#1a0804', key: k }); for (const sd of [-1, 1]) { const p = rect(sd > 0 ? 6 : -312, -196, 306, 392, { wash: '#efe0b8', washA: 1, w: 1.6, col: '#7a5a2a', key: k + sd }); shadeG(p.path, 0, 0, sd * 312, 0, '#c8a868', 0.45); }
  pencil([[0, -200], [0, 200]], { w: 4, col: '#5a3a14', pass2: false }); push(-250, -140, 1); rect(-30, -34, 60, 66, { wash: '#c8241e', washA: 0.9, w: 1.4, col: '#5a0a04' }); txt('С', 0, 22, 56, { font: 'Osw', col: '#f4d878' }); pop();
  const r = rng(k + 3); for (let i = 0; i < 9; i++) pencil([[-200, -150 + i * 34], [-20 - r() * 40, -150 + i * 34]], { w: 4, col: '#3a2410', a: 0.55, pass2: false }); for (let i = 0; i < 6; i++) pencil([[30, -150 + i * 34], [280 - r() * 60, -150 + i * 34]], { w: 4, col: '#3a2410', a: 0.55, pass2: false });
  txt(o.title || 'ДОМОСТРОИ', 150, 90, 30, { font: 'Osw', col: '#8a1a0e' }); txt(o.line || 'сырники с яицы и с сыромъ', 150, 140, 26, { font: 'Hand', col: '#3a1a08' });
  for (let i = 0; i < 4; i++) ell(-326 + (i % 2) * 652, -180 + (i > 1 ? 360 : 0), 14, 14, { wash: '#c8a040', washA: 1, w: 1.4, col: '#5a3a08' }); pop();
}
function oldBook(x, y, s = 1, rot = 0, o = {}) {                         // закрытая/раскрытая книга XIX–XX в.: o.title, o.sub, o.col (переплёт), o.open
  const k = o.key || 21150; push(x, y, s, rot);
  if (o.open) { for (const sd of [-1, 1]) { const p = blob([[0, -150], [sd * 220, -160], [sd * 226, 150], [0, 160]], { wash: '#f6eedc', washA: 1, w: 2, col: '#6a5a3a', key: k + sd }); shadeG(p.path, 0, 0, sd * 220, 0, '#d8c8a0', 0.45); for (let i = 0; i < 7; i++) pencil([[sd * 30, -110 + i * 30], [sd * 190, -114 + i * 30]], { w: 3, col: '#5a4a3a', a: 0.4, pass2: false }); }
    txt(o.title || '', -110, -120, 22, { font: 'Osw', col: '#3a2a1a' }); if (o.sub) txt(o.sub, 110, -120, 22, { font: 'Hand', col: '#8a1a0e' }); pop(); return; }
  const c = rect(-110, -150, 220, 300, { wash: o.col || '#8a2a1a', washA: 1, w: 2.4, col: '#2a0a04', key: k }); shadeG(c.path, 110, 0, -110, 0, '#2a0a04', 0.45); rect(-110, -150, 20, 300, { wash: '#3a1408', washA: 0.6, line: false });
  rect(-80, -110, 160, 120, { wash: '#f4e8c8', washA: 0.95, w: 1.4, col: '#5a3a14' }); txt(o.title || 'КНИГА', 0, -60, 22, { font: 'Osw', col: o.col || '#8a2a1a' }); if (o.sub) txt(o.sub, 0, -24, 18, { font: 'Hand', col: '#3a2a1a' });
  if (o.pic) { syrnik(0, 80, 0.7, 0, { key: k + 5 }); } pop();
}
function blinStack(x, y, s = 1, t = 0, o = {}) {                         // стопка блинов: кружевные края, масло тает
  const k = o.key || 21160; push(x, y, s); for (let i = 0; i < (o.n || 7); i++) { const b = ell(0, -i * 8, 120, 30, { wash: i % 2 ? SY.blin : '#f0c070', washA: 1, w: 1.6, col: SY.blinD, key: k + i }); }
  const top = ell(0, -(o.n || 7) * 8, 120, 30, { wash: '#f4c878', washA: 1, w: 1.6, col: SY.blinD }); shadeG(top.path, -80, -30, 80, 20, '#c8701a', 0.3); const r = rng(k + 20); for (let i = 0; i < 16; i++) ell(-90 + r() * 180, -(o.n || 7) * 8 - 20 + r() * 40, 5, 3, { wash: '#a85a12', washA: 0.5, line: false });
  rect(-20, -(o.n || 7) * 8 - 24, 40, 18, { wash: '#fff0a0', washA: 1, w: 1.2, col: '#b8901a' }); pop();
}
function bliniFold(x, y, s = 1, rot = 0, o = {}) {                       // блин-конвертик с творожной начинкой (старый «сырник»)
  const k = o.key || 21170; push(x, y, s, rot);
  const b = poly([[-90, 20], [0, -50], [90, 20], [0, 50]], { wash: SY.blin, washA: 1, w: 2, col: SY.blinD, key: k }); shadeG(b.path, 0, -50, 0, 50, '#c8701a', 0.35);
  poly([[-90, 20], [0, 0], [0, 50]], { wash: '#f0c070', washA: 1, w: 1.6, col: SY.blinD }); poly([[90, 20], [0, 0], [0, 50]], { wash: '#e0a858', washA: 1, w: 1.6, col: SY.blinD });
  ell(0, -6, 30, 10, { wash: SY.tvorog, washA: 1, w: 1, col: SY.tvorogD }); const r = rng(k + 3); for (let i = 0; i < 10; i++) ell(-70 + r() * 140, -20 + r() * 50, 4, 3, { wash: '#a85a12', washA: 0.45, line: false }); pop();
}
function boiledSyrnik(x, y, s = 1, rot = 0, o = {}) {                    // варёный сырник-«клёцка»: бледная полоска теста, блестит, сухари сверху
  const k = o.key || 21180; push(x, y, s, rot);
  const b = blob([[-60, 0], [-50, -22], [0, -28], [52, -20], [62, 2], [30, 18], [-30, 18]], { wash: '#f6eedc', washA: 1, w: 1.8, col: '#a89878', key: k }); shadeG(b.path, 0, -28, 0, 18, '#d8c8a8', 0.5);
  ell(-20, -14, 18, 4, { wash: '#ffffff', washA: 0.8, line: false }); const r = rng(k + 1); for (let i = 0; i < 9; i++) ell(-40 + r() * 80, -16 + r() * 10, 3, 2, { wash: '#c88a3a', washA: 0.8, line: false }); pop();
}
function kvzpBook(x, y, s = 1, rot = 0) { oldBook(x, y, s, rot, { title: 'КНИГА О ВКУСНОЙ', sub: 'и здоровой пище', col: '#2a6a5a', pic: 1, key: 21190 }); }   // «Книга о вкусной и здоровой пище» (зелёная, сырник на обложке)
function moloBook(x, y, s = 1, rot = 0) { oldBook(x, y, s, rot, { title: 'ПОДАРОКЪ', sub: 'молодымъ хозяйкамъ', col: '#6a2a3a', key: 21195 }); }   // книга Молоховец «Подарокъ молодымъ хозяйкамъ»
Object.assign(PROPS, {
  syrnikP() { syrnik(0, 0, 0.78, -0.15, { key: 21200 }); },
  syrnikBiteP() { syrnik(0, 0, 0.78, -0.15, { key: 21200, bite: 1 }); },
  cheeseP() { cheeseWedge(0, 0, 0.55, -0.15, { key: 21210 }); },
  barkP() { birchBark(0, -10, 0.55, -0.2, { key: 21220 }); },
  stylusP() { push(0, 0, 1, -0.6); pencil([[0, 20], [0, -110]], { w: 9, col: '#8a8a90', pass2: false }); pencil([[0, -110], [0, -130]], { w: 4, col: '#5a5a60', pass2: false }); ell(0, 30, 12, 12, { wash: '#a8a8b0', washA: 1, w: 1.4 }); pop(); },
  blinP() { blinStack(0, 30, 0.5, 0, { n: 4, key: 21230 }); },
  bliniFoldP() { bliniFold(0, 0, 0.7, -0.2, { key: 21235 }); },
  ladleP() { push(0, 0, 1, 0.5); pencil([[0, 0], [0, -140]], { w: 8, col: '#a8743a', pass2: false }); const b = ell(0, 20, 34, 22, { wash: '#b8b8c0', washA: 1, w: 2, col: '#4a4a50' }); boiledSyrnik(0, 14, 0.4, 0, { key: 21240 }); pop(); },
  spatulaP() { push(0, 0, 1, -0.3); pencil([[0, 20], [0, -110]], { w: 10, col: '#6a3a1a', pass2: false }); rect(-30, -190, 60, 80, { wash: '#b8b8c0', washA: 1, w: 2, col: '#3a3a40' }); pencil([[-20, -180], [20, -180]], { w: 2, col: '#ffffff', a: 0.6, pass2: false }); pop(); },
  wheelP() { cheeseWheel(0, 30, 0.42, { key: 21250 }); },
  kvzpP() { push(0, 0, 1, 0, -1); kvzpBook(0, -30, 0.5, 0.1); pop(); },
  domoP() { push(0, 0, 1, 0, -1); oldBook(0, -30, 0.5, 0.1, { title: 'ДОМОСТРОИ', col: '#5a2a14', key: 21260 }); pop(); },
  plateSyrP() { syrnikPlate(0, 20, 0.4, 0, { n: 3, steam: 0, key: 21270 }); },
});
