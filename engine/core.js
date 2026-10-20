/* ТОМ-ТУР — ядро движка (общее для всех выпусков): 2.5D-камера с глубиной, свет и воздух, частицы, HUD, буферы для переходов. */
const K = {
  ink: '#1d140e', amber: '#e8a33c', ember: '#ff8a3a', teal: '#3f8f95', cyan: '#7fd8ff', neonP: '#ff4f9a', neonC: '#36d6ff', neonY: '#ffd34a',
  slate: '#3b3a48', slateD: '#24232e', slateL: '#6d6a7e', garnet: '#a8243a', mica: '#e8e3f2', ice: '#cfe6f6', iceM: '#8ebede', iceD: '#3a6e9e',
  snow: '#eef2f4', fern: '#4f6b2e', fernD: '#2e4119', olive: '#6e6a3a', mud: '#6b5236', water: '#3d6f8e', waterL: '#8fbcd0',
  brick: '#8e4a35', stone: '#b9ab94', stoneD: '#7a6e5e', copper: '#c06a32', patina: '#5aa391', steel: '#59636e', steelD: '#30363d', paper: '#efe3c6', red: '#b8322a',
  tomato: '#d9482b', tomatoD: '#8e2414', mustard: '#e8b53a', oliveB: '#6b7a2e', cream: '#f4e6c8', graphite: '#2b2622', copperK: '#b8733a'   // бренд «ТОМ НА ВКУС»
};
/* SC, S0/S1, LS/LE/LF, EV, SHAKES, YEARS, KEYW — объявляет выпуск в episodes/<NNN>/scenes.js */
const sceneAt = t => { let i = 0; while (i < SC.length - 1 && t >= SC[i + 1][1]) i++; return i; };
const talking = t => CAPS.some(c => t >= c.t0 && t < c.t1);
const GY = 1450;

// ------------------------------------------------------------------ camera with depth (мультиплан)
let CAM = { x: 540, y: 960, z: 0, r: 0 };
function lay(z, fn) {                                              // слой на глубине z (1 = плоскость героя)
  const d = z - CAM.z; if (d <= 0.04) return; const k = z / d;
  push(540 + (540 - CAM.x) / d, 960 + (960 - CAM.y) / d, k); ctx.translate(-540, -960); fn(); pop();
}
function screenFill(col, a, op) { ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = a; if (op) ctx.globalCompositeOperation = op; ctx.fillStyle = col; ctx.fillRect(0, 0, W, H); ctx.restore(); }
function haze(col, a) { screenFill(col, a); }                      // воздушная перспектива между слоями
function vgrad(y0, y1, stops, a = 1) { const g = ctx.createLinearGradient(0, y0, 0, y1); stops.forEach((c, i) => g.addColorStop(i / (stops.length - 1), c)); ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = g; ctx.fillRect(-1500, y0, W + 3000, y1 - y0); ctx.restore(); }
function glow(x, y, r, col, a = 1, op = 'lighter') { const g = ctx.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.save(); ctx.globalCompositeOperation = op; ctx.globalAlpha = a; ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2); ctx.restore(); }
function rays(x, y, ang, spread, len, col, a, n = 6, t = 0) {     // объёмные лучи
  ctx.save(); ctx.globalCompositeOperation = 'lighter';
  for (let i = 0; i < n; i++) { const r = rng(i * 7 + 3), aa = ang + (i / (n - 1) - 0.5) * spread, w = 0.03 + r() * 0.05, fl = 0.6 + 0.4 * Math.sin(t * (0.8 + r()) + i * 2);
    const g = ctx.createLinearGradient(x, y, x + Math.cos(aa) * len, y + Math.sin(aa) * len); g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.globalAlpha = a * fl; ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(aa - w) * len, y + Math.sin(aa - w) * len); ctx.lineTo(x + Math.cos(aa + w) * len, y + Math.sin(aa + w) * len); ctx.closePath(); ctx.fill(); }
  ctx.restore();
}
function motes(n, box, col, t, seed, o = {}) {                     // частицы воздуха: пыль, снег, пепел, светлячки
  const [x0, y0, x1, y1] = box; ctx.save(); if (o.add) ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = col;
  for (let i = 0; i < n; i++) { const r = rng(seed * 1000 + i), sp = (o.sp || 30) * (0.5 + r()), ph = r() * 6.28, sz = (o.sz || 3) * (0.4 + r());
    const x = x0 + ((r() * (x1 - x0) + t * (o.vx || 0) * (0.5 + r()) + Math.sin(t * 0.7 + ph) * (o.wob ?? 18)) % (x1 - x0) + (x1 - x0)) % (x1 - x0);
    const y = y0 + ((r() * (y1 - y0) + t * sp) % (y1 - y0) + (y1 - y0)) % (y1 - y0);
    ctx.globalAlpha = (o.a || 0.8) * (o.tw ? 0.4 + 0.6 * Math.abs(Math.sin(t * 2 + ph)) : 1); ctx.beginPath(); ctx.ellipse(x, y, sz, sz * (o.stretch || 1), o.rot || 0, 0, 6.3); ctx.fill(); }
  ctx.restore();
}
function poly(pts, o) { return shape(pts.concat([pts[0]]), o); }
function sil(pts, col, a = 1) { const p = pathOf(pts); wash(p, col, a); return p; }  // силуэт без линии (дальние планы)
function windows(x, y, w, h, cols, rows, seed, on = 0.55, cA = '#ffd98a', cB = '#9fd8ff', a = 0.9) {
  const r = rng(seed); const cw = w / cols, rh = h / rows; ctx.save();
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) { if (r() > on) continue; ctx.globalAlpha = a * (0.55 + 0.45 * r()); ctx.fillStyle = r() < 0.75 ? cA : cB; ctx.fillRect(x + i * cw + cw * 0.22, y + j * rh + rh * 0.2, cw * 0.56, rh * 0.55); }
  ctx.restore();
}
function note(s, x, y, t, t0, t1, col = '#f3e6c8', size = 50, rot = -0.04, arr) {   // полевая заметка от руки
  if (t < t0 || t > t1) return; const rv = clamp((t - t0) / 0.45), fade = clamp((t1 - t) / 0.3);
  txt(s, x, y, size, { col, rot, reveal: rv, a: 0.95 * fade });
  if (arr && rv > 0.7) { line(arr, { w: 3.2, col, a: 0.9 * fade }); const n = arr.length, [x1, y1] = arr[n - 1], [x0, y0] = arr[n - 2], a = Math.atan2(y1 - y0, x1 - x0); line([[x1 - Math.cos(a - 0.5) * 22, y1 - Math.sin(a - 0.5) * 22], [x1, y1], [x1 - Math.cos(a + 0.5) * 22, y1 - Math.sin(a + 0.5) * 22]], { w: 3.2, col, a: 0.9 * fade, smooth: false }); }
}
function shakeAmt(t) { let s = 0; for (const [t0, d, a] of SHAKES) if (t >= t0 && t < t0 + d) s = Math.max(s, a * (1 - (t - t0) / d)); return s; }

// ------------------------------------------------------------------ buffers (для переходов)
const BUF = [0, 1].map(() => { const c = document.createElement('canvas'); c.width = W; c.height = H; return c; });
function renderTo(c, fn) { const prev = ctx, pS = S, pSS = SS.splice(0); ctx = c.getContext('2d'); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, W, H); S = 1; fn(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx = prev; S = pS; SS.push(...pSS); }

// ------------------------------------------------------------------ HUD: титр эпохи, таймлайн, субтитры, плашка
function logPos(yr) { const ago = Math.max(1, 2026 - yr); return 1 - Math.log10(ago) / Math.log10(4.6e8); }   // 0 = 450 млн лет назад … 1 = сейчас
function titleCard(t) {                                             // «ТОМ НА ВКУС»: карточка рецепта (листок на скрепке) — страна+год, ингредиенты дописываются/зачёркиваются
  if (typeof RECIPE === 'undefined') return; const i = sceneAt(t), s = SC[i]; if (!s[3]) return;
  const u = t - s[1], roll = u < 0.45, k = popK(t, s[1], 0.32), items = RECIPE.filter(q => t >= q[1]).slice(-6);
  const x0 = 34, y0 = 120, w = 410, h = 132 + items.length * 40;
  push(x0 + w / 2, y0, 0.86 + 0.14 * k, -0.035 + Math.sin(t * 1.3) * 0.004); ctx.translate(-w / 2, 0);
  ctx.save(); ctx.shadowColor = 'rgba(20,10,4,0.45)'; ctx.shadowBlur = 18; ctx.shadowOffsetY = 8; ctx.fillStyle = '#f4e6c8'; ctx.fillRect(0, 0, w, h); ctx.restore();
  const g = ctx.createLinearGradient(0, 0, w, h); g.addColorStop(0, 'rgba(255,250,235,0.5)'); g.addColorStop(1, 'rgba(184,115,58,0.22)'); ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  ctx.save(); ctx.globalAlpha = 0.16; ctx.fillStyle = '#b8733a'; ctx.beginPath(); ctx.ellipse(w - 70, h - 40, 46, 30, 0.4, 0, 6.3); ctx.fill(); ctx.globalAlpha = 0.1; ctx.beginPath(); ctx.ellipse(w - 50, h - 60, 22, 14, 0, 0, 6.3); ctx.fill(); ctx.restore();   // пятно соуса
  for (let y = 112; y < h - 10; y += 40) pencil([[16, y + 22], [w - 16, y + 22]], { w: 1.2, col: '#9ab8c8', a: 0.5, pass2: false, gap: false });
  pencil([[56, 100], [56, h - 6]], { w: 1.6, col: '#d9482b', a: 0.55, pass2: false, gap: false });
  pencil([[0, 0], [w, 0], [w, h], [0, h], [0, 0]], { w: 2.4, col: '#2b2622', a: 0.85, pass2: false });
  pencil(spline([[w - 64, -18], [w - 50, -26], [w - 40, -10], [w - 44, 60], [w - 56, 64], [w - 62, 10]], false, 5), { w: 4, col: '#8a8e96', pass2: false, gap: false });   // скрепка
  let year = s[3]; if (roll) { const r = rng(hsh(FRAME, 5)); year = year.replace(/[0-9]/g, () => String(Math.floor(r() * 10))); }
  txt(year, 24, 46, 64, { col: '#d9482b', font: 'Osw', align: 'left' }); txt(s[4], 24, 92, 30, { col: '#2b2622', font: 'Osw', align: 'left', a: 0.9 });
  items.forEach((q, j) => { const [name, ta, ts, mark] = q, y = 140 + j * 40, rv = clamp((t - ta) / 0.4), add = t - ta < 0.6;
    if (add) glow(240, y, 160, 'rgba(232,181,58,1)', 0.35 * (1 - (t - ta) / 0.6), 'multiply');
    txt('•', 36, y, 34, { col: '#6b7a2e', font: 'Hand' }); txt(name, 70, y, 38, { col: mark === 'new' ? '#4a5a14' : '#2b2622', font: 'Hand', align: 'left', reveal: rv });
    if (mark === '?' || (typeof mark === 'number' && t < mark)) txt('?', w - 34, y, 44, { col: '#d9482b', font: 'Hand' });
    if (ts !== undefined && ts !== null && t >= ts) { ctx.save(); ctx.font = '38px Hand'; const tw = ctx.measureText(name).width; ctx.restore(); const kk = clamp((t - ts) / 0.25); pencil([[64, y + 2], [64 + (tw + 14) * kk, y - 4]], { w: 5, col: '#d9482b', a: 0.95, pass2: false, gap: false }); } });
  pop();
}
function captions(t) {
  const c = CAPS.find(c => t >= c.t0 && t < c.t1 + 0.08); if (!c) return;
  const y = 1588, size = 82; ctx.save(); ctx.font = `600 ${size}px Osw`;
  const parts = c.words.map(w => ({ w, key: KEYW.includes(w), num: /\d/.test(w) })); const sp = ctx.measureText(' ').width, widths = parts.map(p => ctx.measureText(p.w).width);
  const tw = widths.reduce((a, b) => a + b, 0) + sp * (parts.length - 1); ctx.restore();
  const k = popK(t, c.t0, 0.18); push(540, y, 0.92 + 0.08 * k);
  const rv = clamp(0.3 + (t - c.t0) / 0.16); let x = -tw / 2;
  parts.forEach((p, i) => { const wr = clamp(rv * parts.length - i); if (wr <= 0) { x += widths[i] + sp; return; }
    if (p.key) { const kk = popK(t, c.t0 + i / parts.length * 0.16, 0.22); ctx.save(); ctx.translate(x + widths[i] / 2, 0); ctx.rotate(-0.05); ctx.scale(0.7 + 0.3 * kk, 0.7 + 0.3 * kk);
      ctx.shadowColor = 'rgba(20,8,4,0.5)'; ctx.shadowBlur = 10; ctx.shadowOffsetY = 6; ctx.fillStyle = '#d9482b'; ctx.beginPath(); ctx.roundRect(-widths[i] / 2 - 16, -50, widths[i] + 32, 98, 12); ctx.fill(); ctx.restore();
      pencil([[x - 14, -46], [x + widths[i] + 16, -50], [x + widths[i] + 18, 46], [x - 16, 50], [x - 14, -46]], { w: 2.6, col: '#2b2622', a: 0.8, pass2: false, gap: false }); }
    ctx.save(); ctx.font = `600 ${size}px Osw`; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round';
    ctx.globalAlpha = wr; if (!p.key) { ctx.lineWidth = 14; ctx.strokeStyle = 'rgba(43,38,34,0.95)'; ctx.strokeText(p.w, x, 0); }
    ctx.fillStyle = p.key ? '#fff8ec' : p.num ? '#e8b53a' : '#f4e6c8'; if (p.key) { ctx.translate(x + widths[i] / 2, 0); ctx.rotate(-0.05); ctx.fillText(p.w, -widths[i] / 2, 0); } else ctx.fillText(p.w, x, 0); ctx.restore();
    x += widths[i] + sp; });
  pop();
}
function plate() { push(60, 70, 1); ctx.save(); ctx.fillStyle = 'rgba(217,72,43,0.92)'; ctx.beginPath(); ctx.roundRect(-14, -28, 262, 56, 10); ctx.fill(); ctx.restore(); txt('ТОМ НА ВКУС', 0, 0, 38, { align: 'left', font: 'Osw', col: '#fff8ec' }); txt(typeof SUBTITLE !== 'undefined' ? SUBTITLE : '', 266, 2, 34, { align: 'left', col: '#f4e6c8', a: 0.8 }); pop(); }
function endcard(t) { if (t < DUR - 1.0) return; const k = popK(t, DUR - 1.0, 0.3); push(540, 1180, k, -0.03);
  ctx.save(); ctx.fillStyle = '#d9482b'; ctx.beginPath(); ctx.roundRect(-330, -80, 660, 160, 16); ctx.fill(); ctx.restore(); pencil([[-330, -80], [330, -80], [330, 80], [-330, 80], [-330, -80]], { w: 3, col: '#2b2622', pass2: false });
  txt('ПОДПИШИСЬ', -50, 4, 104, { col: '#fff8ec', font: 'Osw' });
  push(282, -6, 1, Math.sin(t * 30) * 0.25); blob([[-26, 22], [-22, -16], [0, -30], [22, -16], [26, 22]], { wash: K.mustard, washA: 1, w: 3, col: '#2a1a0c' }); ell(0, 28, 8, 6, { wash: K.mustard, washA: 1, w: 2.4 }); pop(); pop(); }
