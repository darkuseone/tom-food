/* 011 — еда выпуска «Яблочный штрудель»: рулет штруделя (корочка-слои, пудра, срез-спираль с яблоками и изюмом), кусок на тарелке (ванильный соус / шарик мороженого),
   османская баклава на медном подносе, венская чашка меланжа на серебряном подносе, стул Тонета, газета на держателе. Реквизит Тома — PROPS ниже. */
const SD = { crust: '#c87a2e', crustD: '#7a3a10', crustL: '#f2bc66', apple: '#f0c25a', appleD: '#b8782a', raisin: '#5a2a1a', dough: '#f6e6c0', sugar: '#fffaf0', cin: '#8a4a1e', vanilla: '#f6e2a0' };

function strudelSpiral(cx, cy, rx, ry, o = {}) {                         // срез-спираль: начинка (яблоки, изюм, корица) + тонкие витки теста вихрем
  const k = o.key || 11000, f = ell(cx, cy, rx, ry, { wash: SD.apple, washA: 1, w: 2.4, col: '#6a3a10', key: k });
  shadeG(f.path, cx + rx, cy + ry, cx - rx * 0.4, cy - ry * 0.4, SD.appleD, 0.45);
  ctx.save(); ctx.clip(f.path); const r = rng(k + 1);
  for (let i = 0; i < 14; i++) { const a = r() * 6.283, d = 0.2 + Math.sqrt(r()) * 0.7; push(cx + Math.cos(a) * rx * d, cy + Math.sin(a) * ry * d, 1, r() * 3); rect(-rx * 0.13, -ry * 0.1, rx * 0.26, ry * 0.2, { wash: r() > 0.5 ? '#f4e0a0' : '#e6c068', washA: 1, w: 1, col: '#9a6a2a', a: 0.7 }); pop(); }
  for (let i = 0; i < 7; i++) { const a = r() * 6.283, d = Math.sqrt(r()) * 0.8; ell(cx + Math.cos(a) * rx * d, cy + Math.sin(a) * ry * d, rx * 0.05, ry * 0.045, { wash: SD.raisin, washA: 1, w: 1, col: '#1a0a04' }); }
  for (let i = 0; i < 26; i++) { const a = r() * 6.283, d = r() * 0.9; ell(cx + Math.cos(a) * rx * d, cy + Math.sin(a) * ry * d, 1.6, 1.6, { wash: SD.cin, washA: 0.8, line: false }); }
  const turns = o.turns || 2.4, P = []; for (let i = 0; i <= 90; i++) { const q = i / 90, a = q * turns * 6.283 + (o.spin || 0), R = 0.06 + q * 0.94; P.push([cx + Math.cos(a) * rx * R, cy + Math.sin(a) * ry * R]); }
  pencil(P, { w: Math.max(4, rx * 0.1), col: '#8a4a14', a: 0.8, pass2: false, gap: false }); pencil(P, { w: Math.max(2.5, rx * 0.06), col: SD.dough, a: 1, pass2: false, gap: false }); pencil(P, { w: 1.2, col: '#fffaf0', a: 0.8, pass2: false });
  ctx.restore();
  return f;
}
function strudel(x, y, s, t, o = {}) {                                  // рулет штруделя 3/4: румяная слоистая корочка, надрезы, пудра, срез справа, пар; o.len, o.cut, o.steam, o.sugar
  push(x, y, s); const L = o.len || 220, h = 70, k = o.key || 11020;
  ell(0, 50, L + 40, 26, { wash: '#000000', washA: 0.2, line: false });
  const b = blob([[-L, 30], [-L - 14, -20], [-L + 10, -62], [-L * 0.3, -h - 6], [L * 0.4, -h], [L - 6, -58], [L + 10, -12], [L, 32], [0, 46]], { wash: SD.crust, washA: 1, w: 2.8, col: '#4a2408', key: k });
  shadeG(b.path, 0, 46, 0, -h, SD.crustD, 0.55); shadeG(b.path, 0, -h, 0, 20, SD.crustL, 0.35);
  ctx.save(); ctx.clip(b.path); const r = rng(k + 1);
  for (let i = 0; i < 6; i++) { const yy = -h + 18 + i * 17; pencil(spline([[-L - 10, yy + 6], [-L * 0.5, yy - 4 + Math.sin(i) * 4], [0, yy + 2], [L * 0.5, yy - 3], [L + 10, yy + 5]], false, 8), { w: 3, col: SD.crustD, a: 0.45, pass2: false }); pencil(spline([[-L - 10, yy + 2], [-L * 0.5, yy - 8 + Math.sin(i) * 4], [0, yy - 2], [L * 0.5, yy - 7], [L + 10, yy + 1]], false, 8), { w: 2, col: SD.crustL, a: 0.7, pass2: false }); }
  for (let i = 0; i < 9; i++) { const xx = -L + 30 + i * (L * 2 - 60) / 8; pencil(spline([[xx - 10, -h], [xx + 6, -20], [xx - 4, 40]], false, 4), { w: 2.6, col: SD.crustD, a: 0.55, pass2: false }); }
  if (o.sugar !== 0) { const sb = blob([[-L - 4, -h + 26], [-L * 0.6, -h - 8], [0, -h - 10], [L * 0.6, -h - 6], [L - 4, -h + 24], [L * 0.4, -h + 16], [0, -h + 22], [-L * 0.5, -h + 14]], { wash: '#fffaf2', washA: 0.75, line: false }); }
  for (let i = 0; i < 26; i++) { const xx = -L + r() * L * 2, yy = -h + r() * 90; pencil([[xx, yy], [xx + 18 + r() * 20, yy - 2]], { w: 1.4, col: '#fff0c8', a: 0.5, pass2: false }); }
  for (let i = 0; i < 14; i++) { const xx = -L + r() * L * 2, yy = -h * 0.6 + r() * 50; ell(xx, yy, 6 + r() * 6, 4, { wash: SD.crustD, washA: 0.5, line: false }); }
  if (o.sugar !== 0) for (let i = 0; i < 90; i++) { const xx = -L + r() * L * 2, yy = -h - 4 + Math.pow(r(), 2) * 50; ell(xx, yy, 2.4 + r() * 2, 2, { wash: SD.sugar, washA: 0.95, line: false }); }
  ctx.restore();
  glow(-L * 0.3, -h + 10, 40, 'rgba(255,250,230,1)', 0.5);
  if (o.cut !== 0) strudelSpiral(L - 4, -14, 54, 58, { key: k + 5, spin: o.spin || 0 });
  if (o.steam) for (let i = 0; i < 4; i++) { const q = ((t || 0) * 0.5 + i / 4) % 1; pencil(spline([[L - 30 + i * 14, -60], [L - 40 + i * 14 + Math.sin(q * 6 + i) * 18, -60 - q * 90], [L - 30 + i * 14 + Math.sin(q * 9 + i) * 24, -60 - q * 180]], false, 5), { w: 6, col: '#ffffff', a: 0.35 * (1 - q), pass2: false }); }
  pop();
}
function strudelSlice(x, y, s, t, o = {}) {                              // кусок штруделя на боку: передний срез-спираль + корочка, пудра сверху
  push(x, y, s, o.rot || 0); const k = o.key || 11040;
  const c = blob([[-70, 40], [-80, -30], [-40, -76], [60, -80], [110, -40], [112, 30], [30, 52]], { wash: SD.crust, washA: 1, w: 2.6, col: '#4a2408', key: k });
  shadeG(c.path, 100, 0, -40, 0, SD.crustD, 0.45); const r = rng(k + 2); ctx.save(); ctx.clip(c.path); for (let i = 0; i < 70; i++) ell(-60 + r() * 170, -80 + Math.pow(r(), 2) * 50, 1.8, 1.4, { wash: SD.sugar, washA: 0.95, line: false }); ctx.restore();
  strudelSpiral(-30, -6, 58, 58, { key: k + 3, spin: o.spin || 0.4 });
  pop();
}
function strudelPlate(x, y, s, t, o = {}) {                              // тарелка: кусок + o.sauce (ванильный соус лужицей) / o.ice (шарик мороженого) + мята, пудра, пар
  push(x, y, s); const k = o.key || 11060;
  const p = ell(0, 0, 200, 56, { wash: '#f8f6f0', washA: 1, w: 2.6, col: '#5a5a62', key: k }); ell(0, 0, 150, 38, { wash: '#efece4', washA: 1, w: 1.4, col: '#a8a8b0' });
  pencil(ellPts(0, 0, 186, 50, 0, 1, 40).slice(2, 18), { w: 4, col: '#c8a050', a: 0.8, pass2: false }); glow(-120, -20, 30, 'rgba(255,255,255,1)', 0.7);
  if (o.sauce) { const sc = blob([[-150, 10], [-130, -20], [-40, -30], [40, -24], [140, -8], [150, 18], [60, 34], [-80, 32]], { wash: SD.vanilla, washA: 1, w: 1.6, col: '#c8a050', key: k + 1 }); shadeG(sc.path, 0, 30, 0, -30, '#f0c860', 0.4); glow(-60, -6, 40, 'rgba(255,255,240,1)', 0.6); for (let i = 0; i < 6; i++) ell(-100 + i * 40, 6 + (i % 2) * 8, 2, 2, { wash: '#2a1a0a', washA: 0.8, line: false }); }
  strudelSlice(-10, -14, 0.9, t, { key: k + 2 });
  if (o.ice) { push(110, -40, 1); ell(0, 30, 50, 14, { wash: '#f0e8d8', washA: 0.8, line: false }); const ic = blob([[-50, 28], [-56, -10], [-30, -46], [20, -50], [52, -16], [50, 26], [20, 36], [-20, 32]], { wash: '#fff8e6', washA: 1, w: 2, col: '#9a8a6a', key: k + 3 }); shadeG(ic.path, 50, 30, -30, -40, '#e8d8b0', 0.45); for (let i = 0; i < 8; i++) ell(-30 + i * 9, -10 + (i % 3) * 12, 1.6, 1.6, { wash: '#2a1a0a', washA: 0.7, line: false }); glow(-20, -30, 22, 'rgba(255,255,255,1)', 0.8); pop(); }
  push(-120, -40, 1, -0.4); blob([[0, 0], [-14, -20], [0, -40], [14, -20]], { wash: '#4a8a3a', washA: 1, w: 1.4, col: '#1a3a0a' }); blob([[6, 4], [26, -8], [40, 8], [24, 18]], { wash: '#5a9a44', washA: 1, w: 1.4, col: '#1a3a0a' }); pop();
  if (o.steam) for (let i = 0; i < 3; i++) { const q = ((t || 0) * 0.45 + i / 3) % 1; pencil(spline([[-30 + i * 24, -100], [-40 + i * 24 + Math.sin(q * 6 + i) * 16, -100 - q * 100], [-30 + i * 24 + Math.sin(q * 9) * 20, -100 - q * 190]], false, 5), { w: 7, col: '#ffffff', a: 0.4 * (1 - q), pass2: false }); }
  pop();
}
function baklavaTray(x, y, s, t, o = {}) {                               // медный поднос с баклавой ромбами: слои фило на срезе, фисташки, медовый блеск, капли мёда
  push(x, y, s); const k = o.key || 11080, R = 230, Ry = 90;
  ell(0, 26, R + 20, Ry + 14, { wash: '#000000', washA: 0.25, line: false });
  const tr = ell(0, 0, R + 18, Ry + 10, { wash: '#b86a2a', washA: 1, w: 3, col: '#3a1806', key: k }); metalG(tr.path, -80, -30, R + 40, '#f8c88a', '#b86a2a', '#5a2a0a');
  for (let i = 0; i < 28; i++) { const a = i / 28 * 6.283; ell(Math.cos(a) * (R + 8), Math.sin(a) * (Ry + 4), 4, 3, { wash: '#f0b070', washA: 1, w: 1, col: '#5a2a0a' }); }
  const fl = ell(0, -4, R - 14, Ry - 14, { wash: '#c88a3a', washA: 1, w: 2.4, col: '#4a2408', key: k + 1 });
  ctx.save(); ctx.clip(fl.path); const r = rng(k + 2), N = 7;
  for (let i = -N; i <= N; i++) for (let j = -4; j <= 4; j++) { const cx = i * 64 + (j % 2) * 32, cy = j * 30 - 4; if ((cx * cx) / ((R - 10) ** 2) + (cy * cy) / ((Ry - 10) ** 2) > 1) continue;
    const d = poly([[cx, cy - 26], [cx + 30, cy], [cx, cy + 26], [cx - 30, cy]], { wash: lerpC('#e8a848', '#c87a28', r() * 0.6), washA: 1, w: 1.8, col: '#5a2a08' });
    for (let q = 1; q < 4; q++) pencil([[cx - 30 + q * 4, cy + q * 2], [cx - q * 2, cy + 26 - q * 4]], { w: 1, col: '#f8dca0', a: 0.7, pass2: false });
    ell(cx, cy - 2, 7, 5, { wash: '#7aa83a', washA: 1, w: 1, col: '#2a4a0a' }); ell(cx - 2, cy - 4, 3, 2, { wash: '#b8e070', washA: 1, line: false });
    if (r() > 0.6) glow(cx - 8, cy - 10, 16, 'rgba(255,240,180,1)', 0.6); }
  ctx.restore();
  const tt = t || 0; for (let i = 0; i < 3; i++) { const q = (tt * 0.6 + i / 3) % 1; ell(-120 + i * 110, Ry - 4 + q * 40, 5, 7 + q * 4, { wash: '#f0a830', washA: 0.85 * (1 - q), w: 1, col: '#8a5a0a' }); }
  pop();
}
function melange(x, y, s, t, o = {}) {                                   // венский меланж: серебряный подносик, чашка с пенкой, стакан воды, ложечка, сахар
  push(x, y, s); const tr = ell(0, 10, 120, 34, { wash: '#c8ccd2', washA: 1, w: 2.2, col: '#3a3e44' }); metalG(tr.path, -40, 0, 140, '#ffffff', '#b8bcc4', '#5a5e66');
  ell(-30, 0, 46, 14, { wash: '#f6f4f0', washA: 1, w: 1.8, col: '#6a6a72' }); const c = shape([[-62, -6], [-56, -60], [-4, -60], [2, -6]], { wash: '#f8f6f2', washA: 1, w: 2, col: '#5a5a62' }); shadeG(c.path, 2, 0, -50, 0, '#c8c4bc', 0.4);
  ell(-30, -60, 30, 9, { wash: '#e8d2a8', washA: 1, w: 1.4, col: '#8a6a3a' }); ell(-36, -62, 12, 4, { wash: '#fff8ec', washA: 1, line: false }); pencil(spline([[2, -50], [22, -46], [20, -24], [0, -20]], false, 5), { w: 4, col: '#f8f6f2' });
  const g = rect(50, -90, 40, 88, { wash: '#d8ecf4', washA: 0.35, w: 1.8, col: '#6a8a9a' }); glow(60, -60, 14, 'rgba(255,255,255,1)', 0.6); pencil([[50, -70], [90, -70]], { w: 1, col: '#9ac0d0', a: 0.6, pass2: false });
  pencil([[20, 16], [-50, 22]], { w: 3, col: '#c8ccd2' }); rect(-110, -6, 20, 14, { wash: '#ffffff', washA: 1, w: 1.2, col: '#8a8a8a' });
  if (o.steam !== 0) for (let i = 0; i < 2; i++) { const q = ((t || 0) * 0.5 + i / 2) % 1; pencil(spline([[-30 + i * 14, -70], [-36 + i * 14 + Math.sin(q * 7) * 10, -70 - q * 60], [-30 + i * 14, -70 - q * 120]], false, 5), { w: 4, col: '#ffffff', a: 0.35 * (1 - q), pass2: false }); }
  pop();
}
function thonet(x, y, s, flip = 1) {                                     // стул Тонета № 14: гнутое дерево, кольцо под сиденьем, плетёное сиденье
  push(x, y, s, 0, flip); const W = '#4a2410', o = { w: 7, col: W, pass2: false };
  pencil([[-40, 0], [-36, -150]], o); pencil([[40, 0], [34, -150]], o); pencil([[-30, 0], [-26, -130]], { w: 5, col: '#3a1a08', pass2: false });
  pencil(spline([[-36, -150], [-40, -260], [-10, -330], [30, -310], [34, -150]], false, 8), o); pencil(spline([[-30, -170], [-26, -280], [0, -300], [24, -280], [28, -170]], false, 8), { w: 5, col: W, pass2: false });
  ell(0, -60, 38, 9, { line: true, w: 4, col: W }); const st = ell(0, -150, 52, 16, { wash: '#d8b878', washA: 1, w: 3, col: W }); hatch(st.path, st.bb, { gap: 5, a: 0.4, col: '#8a6a3a', ang: 0.8, w: 1 }); hatch(st.path, st.bb, { gap: 5, a: 0.4, col: '#8a6a3a', ang: -0.8, w: 1 });
  pop();
}
function newsHolder(x, y, s, title = 'WIENER ZEITUNG', rot = 0) {         // газета на деревянном держателе (венское кафе)
  push(x, y, s, rot); pencil([[-90, 0], [90, 0]], { w: 8, col: '#6a3a14' }); ell(96, 0, 8, 8, { wash: '#6a3a14', washA: 1, w: 1.6 });
  const p = poly([[-80, 2], [80, 2], [84, 200], [-84, 204]], { wash: '#efe6d0', washA: 1, w: 1.8, col: '#6a5a3a' }); shadeG(p.path, 0, 200, 0, 0, '#c8b890', 0.35);
  txt(title, 0, 26, 15, { font: 'Osw', col: '#2a2a2a' }); pencil([[-74, 36], [74, 36]], { w: 1.4, col: '#2a2a2a', a: 0.6, pass2: false });
  for (let c = 0; c < 3; c++) for (let i = 0; i < 12; i++) pencil([[-70 + c * 50, 50 + i * 12], [-32 + c * 50, 50 + i * 12]], { w: 1.4, col: '#5a5a5a', a: 0.45, pass2: false });
  pop();
}
function loveLetter(x, y, s, rot = 0, a = 1) {                          // любовное письмо: розоватый листок, строки рукописью, сердечко-печать
  push(x, y, s, rot); poly([[-70, -90], [70, -90], [74, 90], [-74, 92]], { wash: '#fbe6e0', washA: a, w: 1.8, col: '#8a4a4a' });
  txt('Mein Schatz,', -10, -60, 22, { font: 'Hand', col: '#7a1a2a', a }); for (let i = 0; i < 6; i++) pencil(spline([[-56, -30 + i * 18], [-10, -32 + i * 18], [50 - (i % 3) * 14, -30 + i * 18]], false, 4), { w: 1.6, col: '#7a2a3a', a: 0.6 * a, pass2: false });
  txt('♥', 40, 70, 34, { col: '#d9283a', a }); pop();
}
Object.assign(PROPS, {
  magP() { push(0, -40, 1, -0.3); pencil([[0, 40], [0, 120]], { w: 10, col: '#4a2410' }); const g = ell(0, 0, 44, 44, { wash: '#d8ecf4', washA: 0.3, w: 6, col: '#c8a050' }); glow(-14, -14, 16, 'rgba(255,255,255,1)', 0.7); pop(); },
  letterP() { loveLetter(0, -70, 0.7, 0.15); },
  forkP() { push(0, -40, 1, 0.2); pencil([[0, 60], [0, -40]], { w: 5, col: '#c8ccd2' }); for (let i = -1; i <= 1; i++) pencil([[i * 7, -40], [i * 7, -70]], { w: 2.4, col: '#c8ccd2', pass2: false }); strudelSlice(0, -90, 0.32, 0, { key: 11120, rot: 0.2 }); pop(); },
  strudelPlateP() { strudelPlate(0, -30, 0.55, 0, { sauce: 1, key: 11130 }); },
  trayP() { push(0, -20, 1); const tr = ell(0, 0, 130, 30, { wash: '#d8dce0', washA: 1, w: 2.4, col: '#3a3e44' }); metalG(tr.path, -40, -10, 150, '#ffffff', '#b8bcc4', '#5a5e66'); strudel(0, -10, 0.48, 0, { key: 11140, len: 180 }); pop(); },
  baklavaP() { push(0, -30, 1); poly([[0, -26], [32, 0], [0, 26], [-32, 0]], { wash: '#e0a040', washA: 1, w: 2, col: '#5a2a08' }); ell(0, -2, 8, 6, { wash: '#7aa83a', washA: 1, w: 1 }); glow(-6, -8, 14, 'rgba(255,240,180,1)', 0.6); pop(); },
  pinP() { push(0, -20, 1, 1.4); rect(-110, -16, 220, 32, { wash: '#d8b070', washA: 1, w: 2.4, col: '#4a2a08' }); for (const sd of [-1, 1]) rect(sd * 110 + (sd > 0 ? 0 : -50), -10, 50, 20, { wash: '#a87a3a', washA: 1, w: 2 }); pop(); },
});
function turban20(x, y, s, col = '#f4efe2', flip = 1, tall = 0) {          // тюрбан/поварской колпак османа поверх human(): x,y — ноги, s — масштаб; tall — высокий колпак повара
  const hy = y + (-238 - 46) * s; push(x, hy, s, 0, flip);
  if (tall) { const c = blob([[-34, -30], [-40, -150], [0, -176], [40, -150], [34, -30]], { wash: col, washA: 1, w: 2, col: '#5a5040' }); shadeG(c.path, 40, 0, -20, 0, '#b8b0a0', 0.4); rect(-40, -40, 80, 18, { wash: '#a8282a', washA: 1, w: 1.6 }); pop(); return; }
  const t = blob([[-50, -20], [-56, -60], [-30, -90], [30, -90], [56, -60], [50, -20], [0, -30]], { wash: col, washA: 1, w: 2, col: '#5a5040' }); shadeG(t.path, 50, 0, -30, 0, '#b8b0a0', 0.4);
  for (let i = 0; i < 4; i++) pencil(spline([[-50, -30 - i * 14], [0, -44 - i * 16], [50, -30 - i * 14]], false, 4), { w: 1.6, col: '#a89a7a', a: 0.7, pass2: false });
  ell(0, -80, 10, 12, { wash: '#d9482b', washA: 1, w: 1.4 }); pop();
}
function kerchief20(x, y, s, col = '#d9482b', flip = 1) {                  // косынка-платок кухарки поверх human() (узел сзади)
  const hy = y + (-238 - 46) * s; push(x, hy, s, 0, flip);
  const k = blob([[-46, -4], [-44, -40], [0, -60], [44, -40], [46, -4], [30, -26], [-30, -26]], { wash: col, washA: 1, w: 1.8, col: '#2a0a04' }); for (let i = 0; i < 6; i++) ell(-30 + i * 12, -36 - (i % 2) * 8, 3, 3, { wash: '#fff8ec', washA: 0.9, line: false });
  blob([[40, -20], [62, -10], [56, 8]], { wash: col, washA: 1, w: 1.6, col: '#2a0a04' }); pop();
}
