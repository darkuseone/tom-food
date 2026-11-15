/* 022 — еда выпуска «Докторская колбаса»: кружок докторской (розовый «мрамор», оболочка, блик; жареный — «чашечка» с румяным краем), батон в оболочке
   со шпагатом, клипсами и бумажной лентой «ДОКТОРСКАЯ», бутерброд, рецептурный бланк «Rp.:», папка «ИСТОРИЯ БОЛЕЗНИ» (раскрывается), мешок крахмала,
   авоська с батонами, весы гастронома со стрелкой, голова яка, сковорода с жареной докторской и яичницей. Реквизит — PROPS. */
const DK = { pink: '#f2a6a4', pinkD: '#c66e74', pinkL: '#ffd6d0', fat: '#fff2ea', casing: '#d48e86', casingD: '#8a4a4a', twine: '#efe4c8', bread: '#e6b872', breadD: '#9a5a1e', crust: '#8a4a18', fry: '#b0602a', fryD: '#5a2a0a', egg: '#fffaf0', yolk: '#ffb21e', paper: '#f4efe2', ink: '#2a2a3a', stamp: '#5a3a9a' };
function doktorSlice(x, y, s = 1, rot = 0, o = {}) {                        // кружок докторской: оболочка-ободок, розовый фарш с жировыми точками, блик; o.fried, o.bite, o.flat (0.3..1 — наклон), o.key
  const k = o.key || 22000, r = rng(k), fl = o.flat || 1; push(x, y, s, rot);
  if (o.flat && o.flat < 0.9) { const sd = blob([[-62, 0], [-60, 14 * (1.2 - fl)], [0, 22 * (1.2 - fl)], [60, 14 * (1.2 - fl)], [62, 0]], { wash: o.fried ? DK.fryD : DK.pinkD, washA: 1, w: 1.6, col: '#5a2a2a', key: k + 9 }); }
  ell(0, 0, 62, 62 * fl, { wash: o.fried ? DK.fryD : DK.casing, washA: 1, w: 2, col: '#5a2a2a', key: k });
  const f = ell(0, 0, 55, 55 * fl, { wash: o.fried ? '#d88a5a' : DK.pink, washA: 1, line: false, key: k + 1 });
  shadeG(f.path, -30, -30 * fl, 50, 50 * fl, o.fried ? DK.fry : DK.pinkD, 0.45);
  for (let i = 0; i < 26; i++) { const a = r() * 6.283, d = Math.sqrt(r()) * 48; ell(Math.cos(a) * d, Math.sin(a) * d * fl, 1.6 + r() * 2.2, (1.4 + r() * 1.6) * fl, { wash: o.fried ? '#f0c090' : DK.fat, washA: 0.85, line: false }); }
  for (let i = 0; i < 9; i++) { const a = r() * 6.283, d = Math.sqrt(r()) * 44; ell(Math.cos(a) * d, Math.sin(a) * d * fl, 3, 2 * fl, { wash: o.fried ? '#8a3a10' : '#e88a8a', washA: 0.5, line: false }); }
  if (o.fried) { pencil(spline(ellPts(0, 0, 50, 50 * fl, 0, 0, 24), true, 3), { w: 6, col: '#7a3a10', a: 0.6, pass2: false }); for (let i = 0; i < 6; i++) { const a = r() * 6.283; ell(Math.cos(a) * 30, Math.sin(a) * 30 * fl, 7, 5 * fl, { wash: '#f8c890', washA: 0.7, w: 1, col: '#8a4a1a' }); } }
  ell(-22, -24 * fl, 18, 6 * fl, { wash: '#ffffff', washA: o.fried ? 0.55 : 0.5, line: false, rot: -0.5 });
  if (o.bite) { ctx.save(); ctx.globalCompositeOperation = 'destination-out'; for (let i = 0; i < 3; i++) ell(52, (i - 1) * 22 * fl, 20 * o.bite, 18 * o.bite * fl, { wash: '#000', washA: 1, line: false }); ctx.restore(); }
  pop();
}
function doktorLoaf(x, y, s = 1, rot = 0, o = {}) {                         // батон в оболочке: шпагат, клипсы, лента «ДОКТОРСКАЯ», торец-срез (o.cut), o.len, o.key
  const k = o.key || 22020, L = o.len || 300, R = 58; push(x, y, s, rot);
  const b = blob([[-L / 2, -R + 6], [-L / 2 + 30, -R], [L / 2 - 30, -R], [L / 2, -R + 8], [L / 2 + 12, 0], [L / 2, R - 8], [L / 2 - 30, R], [-L / 2 + 30, R], [-L / 2, R - 6], [-L / 2 - 12, 0]], { wash: DK.casing, washA: 1, w: 2.4, col: DK.casingD, key: k });
  shadeG(b.path, 0, -R, 0, R, '#f6c8c0', 0.5); shadeG(b.path, 0, R, 0, -R * 0.2, '#7a3a40', 0.45);
  for (let i = 1; i < 7; i++) { const xx = -L / 2 + i * L / 7; pencil(spline([[xx - 4, -R + 2], [xx + 4, 0], [xx - 2, R - 2]], false, 5), { w: 2.4, col: DK.twine, a: 0.9, pass2: false }); }
  pencil([[-L / 2 + 10, -R + 14], [L / 2 - 20, -R + 14]], { w: 7, col: '#ffffff', a: 0.35, pass2: false });
  for (const sd of [-1, 1]) { if (o.cut && sd > 0) continue; push(sd * (L / 2 + 14), 0, 1); rect(-8, -12, 16, 24, { wash: '#b8b8c0', washA: 1, w: 1.4, col: '#3a3a44' }); pencil([[sd * 6, 0], [sd * 26, sd * 10 + 8]], { w: 2, col: DK.twine, pass2: false }); pop(); }
  if (o.label !== 0) { const lb = rect(-62, -R + 4, 124, R * 2 - 8, { wash: '#f4ecd6', washA: 0.95, w: 1.4, col: '#8a7a5a', key: k + 2 }); shadeG(lb.path, 0, R, 0, -R, '#b8a888', 0.35); txt(o.label || 'ДОКТОРСКАЯ', 0, -6, 17, { font: 'Osw', col: '#a8241e' }); txt(o.sub || 'варёная · в/с', 0, 18, 12, { font: 'Osw', col: '#3a3a3a' }); }
  if (o.cut) { doktorSlice(L / 2 + 4, 0, 1, 0, { flat: 0.95, key: k + 3 }); push(L / 2 + 4, 0, 1); ctx.save(); ctx.scale(0.36, 1); ell(0, 0, 60, 60, { wash: DK.pink, washA: 1, w: 2, col: DK.casingD }); ctx.restore(); for (let i = 0; i < 8; i++) ell(-8 + (i % 3) * 7, -40 + i * 11, 2, 2, { wash: DK.fat, washA: 0.9, line: false }); pop(); }
  pop();
}
function sandwichD(x, y, s = 1, rot = 0, o = {}) {                          // бутерброд: ломоть хлеба, масло, толстый кружок докторской; o.bite
  const k = o.key || 22040; push(x, y, s, rot);
  const br = blob([[-70, -50], [-40, -66], [40, -66], [72, -48], [74, 40], [60, 58], [-60, 58], [-74, 40]], { wash: DK.bread, washA: 1, w: 2.2, col: DK.crust, key: k });
  pencil(spline([[-70, -46], [-40, -62], [40, -62], [70, -44], [70, 40], [56, 54], [-56, 54], [-70, 40]], true, 4), { w: 7, col: DK.crust, a: 0.75, pass2: false }); shadeG(br.path, 70, 50, -20, -20, DK.breadD, 0.4);
  const r = rng(k + 1); for (let i = 0; i < 18; i++) ell(-50 + r() * 100, -40 + r() * 80, 2, 1.4, { wash: '#a86a2a', washA: 0.5, line: false });
  blob([[-50, -30], [40, -40], [56, 20], [-40, 30]], { wash: '#fff2b0', washA: 0.85, line: false });
  doktorSlice(6, -4, 0.98, 0.1, { key: k + 2, flat: 0.92 });
  if (o.bite) { ctx.save(); ctx.globalCompositeOperation = 'destination-out'; for (let i = 0; i < 3; i++) ell(66, -30 + i * 26, 26 * o.bite, 22 * o.bite, { wash: '#000', washA: 1, line: false }); ctx.restore(); }
  pop();
}
function rxPad(x, y, s = 1, rot = 0, o = {}) {                              // рецептурный бланк: шапка, «Rp.:», строки от руки, печать, подпись; o.text, o.reveal 0..1
  const k = o.key || 22060; push(x, y, s, rot);
  const p = rect(-120, -160, 240, 320, { wash: DK.paper, washA: 1, w: 1.8, col: '#8a8270', key: k }); shadeG(p.path, 120, 160, -120, -160, '#c8bea4', 0.3);
  rect(-120, -160, 240, 46, { wash: '#dfe8ef', washA: 1, w: 1.2, col: '#8a8270' }); txt('РЕЦЕПТ', 0, -132, 22, { font: 'Osw', col: '#2a4a7a' }); txt('поликлиника № 2', 0, -110, 11, { font: 'Osw', col: '#5a6a7a' });
  for (let i = 0; i < 6; i++) pencil([[-100, -70 + i * 34], [100, -70 + i * 34]], { w: 1, col: '#9ab0c8', a: 0.7, pass2: false });
  txt('Rp.:', -76, -82, 30, { font: 'Hand', col: DK.ink, reveal: o.reveal ?? 1 });
  const lines = o.text || ['Колбаса', '«Докторская»', '300,0', 'по 1 бут. 3 р/д'];
  lines.forEach((l, i) => txt(l, 10, -46 + i * 34, 24, { font: 'Hand', col: DK.ink, reveal: clamp((o.reveal ?? 1) * lines.length - i) }));
  ell(-60, 120, 30, 30, { wash: 'rgba(0,0,0,0)', washA: 0, w: 2.4, col: DK.stamp }); txt('★', -60, 128, 20, { font: 'Osw', col: DK.stamp });
  pencil(spline([[10, 120], [30, 104], [44, 126], [62, 106], [90, 118]], false, 5), { w: 2, col: DK.ink, pass2: false });
  pop();
}
function medFolder(x, y, s = 1, rot = 0, o = {}) {                          // папка «ИСТОРИЯ БОЛЕЗНИ»: картон, завязки, штамп; o.open 0..1 — разворот с машинописью, o.quote (строки), o.reveal
  const k = o.key || 22080, op = o.open || 0; push(x, y, s, rot);
  const back = rect(-200, -270, 400, 540, { wash: '#d8c08a', washA: 1, w: 2, col: '#6a5428', key: k }); shadeG(back.path, 200, 270, -200, -270, '#8a7040', 0.35);
  if (op > 0.02) { const pg = rect(-180, -250, 360, 500, { wash: '#f6f0e0', washA: 1, w: 1.4, col: '#9a9078', key: k + 1 }); shadeG(pg.path, 180, 250, -180, -250, '#c8bea4', 0.25);
    txt('НАРКОМАТ ПИЩЕВОЙ ПРОМЫШЛЕННОСТИ', 0, -218, 15, { font: 'Osw', col: '#2a2a2a' }); txt('1936', 0, -194, 16, { font: 'Osw', col: '#2a2a2a' }); pencil([[-150, -180], [150, -180]], { w: 1.4, col: '#2a2a2a', pass2: false });
    for (let i = 0; i < 4; i++) pencil([[-150, -150 + i * 22], [150 - (i % 2) * 40, -150 + i * 22]], { w: 3, col: '#5a5a5a', a: 0.45, pass2: false, gap: true });
    const q = o.quote || ['«…больным, имеющим', 'подорванное здоровье', 'в результате', 'Гражданской войны', 'и царского', 'деспотизма»'];
    q.forEach((l, i) => txt(l, 0, -40 + i * 34, 26, { font: 'Osw', col: i >= q.length - 2 ? '#a8241e' : '#1a1a1a', reveal: clamp((o.reveal ?? 1) * q.length - i) }));
    for (let i = 0; i < 3; i++) pencil([[-150, 180 + i * 18], [110, 180 + i * 18]], { w: 3, col: '#5a5a5a', a: 0.4, pass2: false, gap: true });
    ell(110, 210, 46, 46, { wash: 'rgba(0,0,0,0)', washA: 0, w: 3, col: DK.stamp }); ell(110, 210, 34, 34, { wash: 'rgba(0,0,0,0)', washA: 0, w: 1.4, col: DK.stamp }); txt('ВНИИМП', 110, 216, 13, { font: 'Osw', col: DK.stamp }); }
  if (op < 0.98) { push(-200, 0, 1); ctx.scale(Math.max(0.02, 1 - op * 2) * (op > 0.5 ? -1 : 1), 1); const c = rect(0, -270, 400, 540, { wash: '#e6d29a', washA: 1, w: 2.2, col: '#6a5428', key: k + 2 }); shadeG(c.path, 400, 270, 0, -270, '#9a8048', 0.4);
    if (op < 0.5) { rect(60, -200, 280, 120, { wash: '#f4ecd2', washA: 1, w: 1.4, col: '#6a5428' }); txt('ИСТОРИЯ', 200, -160, 34, { font: 'Osw', col: '#2a2a2a' }); txt('БОЛЕЗНИ', 200, -116, 34, { font: 'Osw', col: '#2a2a2a' }); txt(o.title || '№ 1936 · «Докторская»', 200, -40, 20, { font: 'Hand', col: DK.ink }); txt('ДЕЛО', 200, 60, 46, { font: 'Osw', col: '#6a5428' }); pencil([[380, -10], [430, -20]], { w: 3, col: '#efe4c8', pass2: false }); } pop(); }
  pop();
}
function starchSack(x, y, s = 1, o = {}) {                                  // мешок крахмала: мешковина, печать «КРАХМАЛ», завязка, мука на боку
  const k = o.key || 22100; push(x, y, s, o.rot || 0);
  const b = blob([[-80, 0], [-92, -90], [-70, -170], [-40, -186], [40, -186], [70, -170], [92, -90], [80, 0]], { wash: '#d8c8a0', washA: 1, w: 2.2, col: '#6a5a3a', key: k });
  hatch(b.path, b.bb, { gap: 6, a: 0.18, col: '#8a7a5a', ang: 1.57, key: k + 1, w: 1 }); hatch(b.path, b.bb, { gap: 6, a: 0.12, col: '#8a7a5a', ang: 0, key: k + 2, w: 1 }); shadeG(b.path, 92, 0, -40, 0, '#6a5a3a', 0.4);
  blob([[-40, -186], [-30, -220], [0, -230], [30, -220], [40, -186]], { wash: '#d8c8a0', washA: 1, w: 2, col: '#6a5a3a' }); pencil([[-44, -190], [44, -190]], { w: 5, col: '#8a6a3a', pass2: false });
  txt(o.label || 'КРАХМАЛ', 0, -100, 30, { font: 'Osw', col: '#2a3a7a', rot: -0.03 }); txt(o.sub || 'картофельный · 50 кг', 0, -66, 13, { font: 'Osw', col: '#2a3a7a' });
  for (let i = 0; i < 8; i++) ell(-60 + i * 16, -6 + (i % 3) * 4, 10, 4, { wash: '#ffffff', washA: 0.6, line: false });
  pop();
}
function stringBag(x, y, s = 1, t = 0, o = {}) {                            // авоська: ручки, сетка-ромбы, внутри батоны колбасы / кефир / хлеб
  const k = o.key || 22120; push(x, y, s, Math.sin(t * 2 + k) * 0.04);
  pencil(spline([[-30, -180], [-10, -230], [10, -230], [30, -180]], false, 5), { w: 4, col: '#2a4a2a', pass2: false });
  doktorLoaf(-8, -60, 0.42, 1.35, { key: k + 1, label: 0 }); if (o.more !== 0) { rect(16, -140, 34, 90, { wash: '#f4f4f0', washA: 1, w: 1.4, col: '#6a6a6a' }); rect(16, -150, 34, 12, { wash: '#2a6aa8', washA: 1, w: 1 }); }
  for (let i = -4; i <= 4; i++) { pencil([[i * 14, -180], [i * 14 + 40, 20]], { w: 1.6, col: '#2a4a2a', a: 0.85, pass2: false }); pencil([[i * 14, -180], [i * 14 - 40, 20]], { w: 1.6, col: '#2a4a2a', a: 0.85, pass2: false }); }
  pencil(spline([[-60, -10], [0, 26], [60, -10]], false, 5), { w: 2.4, col: '#2a4a2a', pass2: false });
  pop();
}
function shopScale(x, y, s = 1, t = 0, o = {}) {                            // весы гастронома: кремовый корпус, циферблат «кг», стрелка (o.k 0..1), чаша с товаром
  const k = o.key || 22140; push(x, y, s);
  const bd = blob([[-110, 0], [-120, -40], [-100, -60], [100, -60], [120, -40], [110, 0]], { wash: '#efe6d0', washA: 1, w: 2.2, col: '#5a5040', key: k }); shadeG(bd.path, 110, 0, -60, 0, '#a89a7a', 0.4);
  rect(-24, -170, 48, 110, { wash: '#e6dcc0', washA: 1, w: 2, col: '#5a5040' });
  const d = ell(0, -230, 86, 86, { wash: '#fbf8ee', washA: 1, w: 3, col: '#3a3428', key: k + 1 }); ell(0, -230, 94, 94, { wash: 'rgba(0,0,0,0)', washA: 0, w: 8, col: '#c8b890' });
  for (let i = 0; i <= 10; i++) { const a = -2.6 + i / 10 * 2.0; pencil([[Math.cos(a) * 70, -230 + Math.sin(a) * 70], [Math.cos(a) * 80, -230 + Math.sin(a) * 80]], { w: i % 5 ? 1.4 : 3, col: '#2a2a2a', pass2: false }); }
  txt('кг', 0, -196, 16, { font: 'Osw', col: '#5a5040' }); txt('ВЕСЫ', 0, -258, 12, { font: 'Osw', col: '#a8241e' });
  const a = -2.6 + (o.k ?? 0) * 2.0 + Math.sin(t * 9) * 0.02 * (o.k ? 1 : 0); pencil([[0, -230], [Math.cos(a) * 74, -230 + Math.sin(a) * 74]], { w: 3, col: '#c8241e', pass2: false }); ell(0, -230, 6, 6, { wash: '#2a2a2a', washA: 1, line: false });
  ell(-30, -260, 22, 8, { wash: '#ffffff', washA: 0.5, line: false, rot: -0.4 });
  const pan = ell(70, -70, 80, 16, { wash: '#c8c8d0', washA: 1, w: 2, col: '#4a4a54' }); metalG(pan.path, 50, -76, 80, '#ffffff', '#b8b8c4', '#6a6a78', 0.7);
  if (o.item) doktorLoaf(70, -92, 0.42, 0.04, { key: k + 2, label: 0, cut: 1, len: 260 });
  pop();
}
function yakHead(x, y, s = 1, t = 0, o = {}) {                              // голова яка: лохматая шерсть, загнутые рога, глаза, жуёт (o.chew)
  const k = o.key || 22160, r = rng(k), ch = o.chew ? Math.sin(t * 9) * 6 : 0; push(x, y, s, o.rot || 0, o.flip || 1);
  for (const sd of [-1, 1]) { const h = pencil(spline([[sd * 60, -70], [sd * 130, -90], [sd * 150, -150], [sd * 120, -190]], false, 6), { w: 22, col: '#efe6d0', pass2: false }); pencil(spline([[sd * 60, -70], [sd * 130, -90], [sd * 150, -150], [sd * 120, -190]], false, 6), { w: 3, col: '#6a5a40', a: 0.5, pass2: false }); }
  const hd = blob([[-80, -80], [-40, -110], [40, -110], [80, -80], [70, 20], [40, 80 + ch], [-40, 80 + ch], [-70, 20]], { wash: '#4a3020', washA: 1, w: 2.4, col: '#1a0e06', key: k });
  shadeG(hd.path, 60, 0, -60, 0, '#1a0e06', 0.45); for (let i = 0; i < 40; i++) { const xx = -80 + r() * 160, yy = -110 + r() * 200; pencil([[xx, yy], [xx + (r() - 0.5) * 10, yy + 24 + r() * 20]], { w: 3, col: r() > 0.5 ? '#6a4a30' : '#2a1a0e', a: 0.8, pass2: false }); }
  for (let i = 0; i < 9; i++) { const xx = -60 + i * 15; pencil(spline([[xx, -100], [xx - 8, -70], [xx + 4, -50]], false, 4), { w: 6, col: '#2a1a0e', pass2: false }); }
  for (const ex of [-34, 34]) { ell(ex, -36, 11, 9, { wash: '#f8f0e0', washA: 1, w: 1.6, col: '#1a0e06' }); ell(ex + 2, -35, 6, 6, { wash: '#1a1008', washA: 1, line: false }); ell(ex, -38, 2, 2, { wash: '#ffffff', washA: 1, line: false }); }
  const m = blob([[-40, 40 + ch], [-30, 20], [30, 20], [40, 40 + ch], [20, 66 + ch], [-20, 66 + ch]], { wash: '#6a4a3a', washA: 1, w: 2, col: '#1a0e06' }); ell(-14, 40 + ch, 5, 4, { wash: '#1a0e06', washA: 1, line: false }); ell(14, 40 + ch, 5, 4, { wash: '#1a0e06', washA: 1, line: false });
  if (o.grass) { for (let i = 0; i < 5; i++) pencil([[-10 + i * 6, 64 + ch], [-30 + i * 14, 100 + ch + (i % 2) * 10]], { w: 3, col: '#6a9a3a', pass2: false }); }
  pop();
}
function friedPan(x, y, s = 1, t = 0, o = {}) {                             // сковорода: три жареных кружка-«чашечки», яичница-глазунья, масло пузырится, пар
  const k = o.key || 22180, r = rng(hsh(FRAME, k)); push(x, y, s);
  pencil([[200, -10], [420, -40]], { w: 26, col: '#2a2420', pass2: false }); pencil([[210, -16], [410, -44]], { w: 4, col: '#6a605a', a: 0.6, pass2: false });
  const p = ell(0, 0, 230, 92, { wash: '#2a2624', washA: 1, w: 3, col: '#0a0806', key: k }); ell(0, 6, 206, 78, { wash: '#4a3a2a', washA: 1, line: false }); lightPool(-30, 0, 200, 70, 'rgba(255,200,120,1)', 0.25);
  ell(-60, -40, 150, 14, { wash: '#8a7a6a', washA: 0.4, line: false });
  const eg = blob([[40, -20], [120, -40], [170, 0], [150, 50], [70, 56], [20, 30]], { wash: DK.egg, washA: 1, w: 1.8, col: '#c8b898' }); shadeG(eg.path, 170, 50, 60, -20, '#d8c8a8', 0.35);
  const yk = ell(100, 6, 30, 22, { wash: DK.yolk, washA: 1, w: 1.6, col: '#a8600a' }); shadeG(yk.path, 120, 20, 90, -10, '#d8780a', 0.4); ell(92, -2, 9, 5, { wash: '#ffffff', washA: 0.8, line: false });
  for (const [sx, sy, sr] of [[-130, 10, 0.1], [-40, -24, -0.2], [-60, 42, 0.3]]) { doktorSlice(sx, sy, 0.95, sr, { fried: 1, flat: 0.55, key: k + Math.round(sx) }); }
  for (let i = 0; i < 10; i++) { const a = r() * 6.283, d = 120 + r() * 70; ell(Math.cos(a) * d, Math.sin(a) * d * 0.38, 3 + r() * 4, 2 + r() * 3, { wash: '#ffe8b0', washA: 0.7, w: 0.8, col: '#a8701a' }); }
  if (o.steam !== 0) steamWisps(-40, -40, 0.9, t, 4, k + 7, o.steam || 0.45);
  pop();
}
Object.assign(PROPS, {
  sandwichDP() { sandwichD(0, 0, 0.72, -0.12, { key: 22200 }); },                       // бутерброд с докторской в лапе
  sandwichDBiteP() { sandwichD(0, 0, 0.72, -0.12, { key: 22200, bite: 1 }); },          // бутерброд надкушенный
  loafP() { doktorLoaf(0, -10, 0.5, -0.25, { key: 22210, cut: 1 }); },                   // батон докторской в лапе
  scoopP() { push(0, 0, 1, 0.3); pencil([[0, 10], [0, -90]], { w: 9, col: '#8a6a3a', pass2: false }); const sc = blob([[-40, -90], [40, -90], [34, -150], [-34, -150]], { wash: '#b8b8c4', washA: 1, w: 2, col: '#3a3a44' }); metalG(sc.path, -10, -120, 60, '#ffffff', '#b8b8c4', '#5a5a68', 0.7); ell(0, -150, 34, 10, { wash: '#ffffff', washA: 1, w: 1, col: '#c8c8c8' }); pop(); },   // совок крахмала
  stethP() { push(0, 0, 1, 0.2); pencil(spline([[0, 0], [-20, -40], [0, -80]], false, 5), { w: 5, col: '#2a2a2a', pass2: false }); const c = ell(0, -96, 20, 20, { wash: '#c8c8d0', washA: 1, w: 2, col: '#3a3a44' }); metalG(c.path, -6, -102, 20, '#ffffff', '#b8b8c4', '#5a5a68', 0.8); pop(); },   // стетоскоп-головка в лапе
  forkFryP() { push(0, 0, 1, -0.3); pencil([[0, 20], [0, -110]], { w: 7, col: '#b8b8c4', pass2: false }); for (let i = -1; i <= 1; i++) pencil([[i * 8, -110], [i * 8, -150]], { w: 3, col: '#b8b8c4', pass2: false }); doktorSlice(0, -150, 0.6, 0.3, { fried: 1, flat: 0.8, key: 22220 }); pop(); },   // вилка с жареным кружком
  rxP() { rxPad(0, -40, 0.5, -0.1, { key: 22230 }); },                                  // рецептурный бланк в лапе
  bagP() { stringBag(0, 160, 0.8, 0, { key: 22240 }); },                                // авоська с батоном в лапе
});
