/* 008 — еда выпуска «Пельмени»: пельмень-«ушко» (варёный / замороженный / откушенный / с мордочкой), тарелка пельменей со сметаной, мешок мороженых,
   пельменница-соты, цзяоцзы, горошины чёрного перца, штамп викторины «правда / миф / версия»; реквизит: вилка с пельменем, скалка, штамп, мешок. */
const PL = { dough: '#f6ecd4', doughD: '#c8b088', doughL: '#fffaf0', meat: '#9a5a3a', smet: '#fbf8f0', dill: '#4a8a2a', alu: '#c8ccd0', aluD: '#7a7e86' };
function pelmen(x, y, s, rot = 0, o = {}) {                             // пельмень-ушко: полукруг, концы сведены, защип по краю; o.frozen, o.bite, o.face, o.shine
  push(x, y, s, rot); const c = o.col || (o.frozen ? '#eef2f6' : o.cook ? '#f4e2b8' : PL.dough);
  const p = shape(spline([[-44, 10], [-40, -20], [-18, -40], [18, -40], [40, -20], [44, 10], [26, 22], [10, 30], [-10, 30], [-26, 22]], true, 6), { wash: c, washA: 1, w: 2.6, col: '#6a5434', key: 9800 + (o.key || 0) });
  shadeG(p.path, 0, -40, 0, 30, o.frozen ? '#b8c8d8' : PL.doughD, 0.45); for (let i = 0; i < 6; i++) pencil([[-36 + i * 14, -26 - Math.sin(i / 5 * Math.PI) * 10], [-34 + i * 14, -20 - Math.sin(i / 5 * Math.PI) * 10]], { w: 1.4, col: '#a8906a', a: 0.7, pass2: false });
  if (o.cook || o.shine) ell(-12, -22, 14, 5, { wash: '#ffffff', washA: 0.6, line: false }); if (o.frozen) for (let i = 0; i < 5; i++) ell(-30 + i * 15, -10 + (i % 2) * 12, 2.4, 2.4, { wash: '#ffffff', washA: 0.9, line: false });
  if (o.bite) { blob([[10, -40], [22, -30], [30, -38], [40, -24], [44, 8], [30, 6]], { wash: PL.meat, washA: 1, w: 1.6, col: '#4a2010' }); for (let i = 0; i < 4; i++) ell(24 + i * 4, -14 + i * 6, 3, 2, { wash: '#c8806a', washA: 1, line: false }); }
  if (o.face) { for (const sd of [-1, 1]) { ell(sd * 12, -10, 4, 5, { wash: '#2a1a0a', washA: 1, line: false }); } pencil(spline([[-8, 4], [0, 9], [8, 4]], false, 4), { w: 1.8, col: '#2a1a0a', pass2: false }); ell(-20, 2, 5, 3, { wash: '#f0a0a0', washA: 0.7, line: false }); ell(20, 2, 5, 3, { wash: '#f0a0a0', washA: 0.7, line: false }); }
  pop();
}
function pelmenPlate(x, y, s, t, o = {}) {                               // тарелка пельменей: горка блестящих ушек, ложка сметаны, укроп, чёрный перец, пар
  push(x, y, s); ell(0, 20, 190, 46, { wash: '#f6f4ee', washA: 1, w: 2.6, col: '#5a5a6a', key: 9810 }); ell(0, 10, 150, 30, { line: true, w: 2, col: '#2a5aa8', a: 0.6 });
  for (let i = 0; i < 11; i++) { const r = rng(9815 + i), a = r() * 6.283, d = r() * 90; pelmen(Math.cos(a) * d * 1.2, Math.sin(a) * d * 0.25 - (i > 6 ? 30 : 0), 0.62, r() * 1.2 - 0.6, { cook: true, key: i }); }
  if (o.smet !== false) { blob([[-30, -60], [-10, -84], [20, -80], [36, -58], [6, -48]], { wash: PL.smet, washA: 1, w: 1.6, col: '#c8c0a8' }); ell(0, -70, 14, 6, { wash: '#ffffff', washA: 0.8, line: false }); }
  for (let i = 0; i < 7; i++) { const r = rng(9830 + i); poly([[-80 + r() * 160, -40 - r() * 30], [-74 + r() * 160, -46 - r() * 30], [-70 + r() * 160, -38 - r() * 30]], { wash: PL.dill, washA: 1, line: false }); ell(-150 + r() * 300, 30 + r() * 10, 1.6, 1.6, { wash: '#1a1a1a', washA: 0.8, line: false }); }
  if (o.steam !== false) for (let q = 0; q < 4; q++) { const k = (t * 0.6 + q / 4) % 1; ell(-60 + q * 40, -90 - k * 180, 22 + k * 30, 14 + k * 20, { wash: '#ffffff', washA: 0.35 * (1 - k), line: false }); } pop();
}
function pelmenSack(x, y, s, t, o = {}) { push(x, y, s); const b = shape(spline([[-90, 0], [-110, -120], [-80, -230], [-30, -260], [30, -260], [80, -230], [110, -120], [90, 0]], true, 6), { wash: '#c8a868', washA: 1, w: 3, col: '#5a3a14', key: 9840 }); for (let i = 0; i < 5; i++) pencil([[-90 + i * 40, -10], [-80 + i * 40, -230]], { w: 1.4, col: '#8a6a3a', a: 0.5, pass2: false });
  pencil([[-34, -250], [34, -250]], { w: 6, col: '#6a4a1a' }); for (let i = 0; i < 4; i++) pelmen(-36 + i * 24, -270 - (i % 2) * 10, 0.4, i * 0.3, { frozen: true, key: i }); if (o.frost) frost(-110, -260, 220, 30, t, 0.7); pop(); }
function pelmennitsa(x, y, s, t, k = 1) {                               // алюминиевая пельменница-соты: шестигранные ячейки, k — сколько ячеек заполнено
  push(x, y, s); const b = shape(spline([[-160, -120], [160, -120], [180, 0], [160, 120], [-160, 120], [-180, 0]], true, 4), { wash: PL.alu, washA: 1, w: 3, col: PL.aluD, key: 9850 }); shadeG(b.path, -180, 0, 180, 0, '#ffffff', 0.35);
  let n = 0; for (let r = -2; r <= 2; r++) for (let c = -3; c <= 3; c++) { const cx = c * 46 + (r % 2 ? 23 : 0), cy = r * 42; if (Math.abs(cx) > 150) continue; const hex = []; for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283 + Math.PI / 6; hex.push([cx + Math.cos(a) * 22, cy + Math.sin(a) * 22]); } poly(hex, { wash: n / 30 < k ? PL.meat : '#a8acb4', washA: 1, w: 1.6, col: PL.aluD }); n++; } pop();
}
function jiaozi(x, y, s, rot = 0) { push(x, y, s, rot); const p = shape(spline([[-50, 10], [-30, -24], [0, -36], [30, -24], [50, 10], [0, 20]], true, 6), { wash: '#f8f2e2', washA: 1, w: 2, col: '#8a7a5a', key: 9860 }); for (let i = 0; i < 7; i++) pencil(spline([[-36 + i * 12, -20 - Math.sin(i / 6 * Math.PI) * 12], [-30 + i * 12, -4], [-34 + i * 12, 6]], false, 4), { w: 1.4, col: '#b8a888', pass2: false }); pop(); }
function peppercorns(x, y, s, n = 12, seed = 9870) { push(x, y, s); for (let i = 0; i < n; i++) { const r = rng(seed + i); ell(r() * 80 - 40, r() * 40 - 20, 7, 7, { wash: '#2a2420', washA: 1, w: 1.2, col: '#0a0806' }); ell(r() * 80 - 42, r() * 40 - 22, 2, 2, { wash: '#6a5a4a', washA: 1, line: false }); } pop(); }
function quizStamp(txtS, x, y, t, t0, col = '#c8282a', rot = -0.12, size = 1) {   // штамп викторины: прямоугольная рамка с текстом, удар с отскоком и брызги чернил
  if (t < t0) return; const k = clamp((t - t0) / 0.18), sc = lerp(2.4, 1, sm(k)) * size, a = k; push(x, y, sc, rot); ctx.globalAlpha = a;
  const w = 60 + txtS.length * 34; rect(-w / 2, -54, w, 108, { wash: col, washA: 0.08, w: 9, col }); rect(-w / 2 + 12, -42, w - 24, 84, { line: true, w: 3, col, a: 0.8 }); txt(txtS, 0, 22, 66, { font: 'Osw', col });
  for (let i = 0; i < 10; i++) { const r = rng(9880 + i + Math.floor(t0 * 10)); ell((r() - 0.5) * w * 1.2, (r() - 0.5) * 140, 2 + r() * 4, 2 + r() * 4, { wash: col, washA: 0.6, line: false }); } ctx.globalAlpha = 1; pop();
}
Object.assign(PROPS, {
  forkPelmenP() { pencil([[0, 20], [0, -120]], { w: 7, col: '#a8acb4' }); for (const dx of [-12, -4, 4, 12]) pencil([[dx, -120], [dx, -160]], { w: 3, col: '#a8acb4', pass2: false }); pelmen(0, -186, 0.8, 0, { cook: true }); },
  forkBiteP() { pencil([[0, 20], [0, -120]], { w: 7, col: '#a8acb4' }); for (const dx of [-12, -4, 4, 12]) pencil([[dx, -120], [dx, -160]], { w: 3, col: '#a8acb4', pass2: false }); pelmen(0, -186, 0.8, 0, { cook: true, bite: true }); },
  rollingPinP() { push(0, -60, 1, 1.4); rect(-90, -16, 180, 32, { wash: '#d8a868', washA: 1, w: 2, col: '#6a4a1a' }); for (const sd of [-1, 1]) rect(sd * 90 - (sd > 0 ? 0 : 40), -8, 40, 16, { wash: '#b8884a', washA: 1, w: 1.6 }); pop(); },
  stampP() { rect(-14, -110, 28, 90, { wash: '#6a3a1a', washA: 1, w: 2, col: '#2a1408' }); ell(0, -116, 26, 18, { wash: '#8a5a2a', washA: 1, w: 2 }); rect(-40, -24, 80, 24, { wash: '#2a2a2a', washA: 1, w: 2 }); rect(-40, 0, 80, 10, { wash: '#c8282a', washA: 1, line: false }); },
  sackP() { pelmenSack(0, 60, 0.45, 0); },
  pelmenP() { pelmen(0, -40, 0.9, 0.2, { cook: true, face: true }); },
});
