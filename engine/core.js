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
/* Безопасная зона площадок (владелец, 23.10.2026): на длинных телефонах TikTok/Shorts обрезают ~60 px с боков, сверху — статус-бар, «чёлка» и кнопки
   площадки (поиск, «назад»), справа — колонка лайков/комментов, снизу — ник и описание. Выпуск включает раскладку флагом `const SAFE = true;` в scenes.js
   (с 009 — всегда; старые выпуски без флага рендерятся как раньше). Зона для текста: x 96–880 справа ниже y 900, x 96–984 выше; y 250–1640. */
const SAFEZ = () => (typeof SAFE !== 'undefined' && SAFE) ? { cardX: 96, cardY: 336, cardS: 0.9, cardN: 5, plateX: 110, plateY: 286, capX: 488, capW: 720, capY: 1580, hookX: 520, hookY: 520 } : null;
function logPos(yr) { const ago = Math.max(1, 2026 - yr); return 1 - Math.log10(ago) / Math.log10(4.6e8); }   // 0 = 450 млн лет назад … 1 = сейчас
function titleCard(t) {                                             // «ТОМ НА ВКУС»: карточка рецепта (листок на скрепке) — страна+год, ингредиенты дописываются/зачёркиваются
  if (typeof RECIPE === 'undefined') return; const i = sceneAt(t), s = SC[i]; if (!s[3]) return;
  const Z = SAFEZ(), u = t - s[1], roll = u < 0.45, k = popK(t, s[1], 0.32), items = RECIPE.filter(q => t >= q[1]).slice(Z ? -Z.cardN : -6);
  const x0 = Z ? Z.cardX : 34, y0 = Z ? Z.cardY : 120, w = 410, h = 132 + items.length * 40;
  push(x0 + w / 2 * (Z ? Z.cardS : 1), y0, (0.86 + 0.14 * k) * (Z ? Z.cardS : 1), -0.035 + Math.sin(t * 1.3) * 0.004); ctx.translate(-w / 2, 0);
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
  const Z = SAFEZ(), y = Z ? Z.capY : 1588, size = 82; ctx.save(); ctx.font = `600 ${size}px Osw`;
  const parts = c.words.map(w => ({ w, key: KEYW.includes(w), num: /\d/.test(w) })); const sp = ctx.measureText(' ').width, widths = parts.map(p => ctx.measureText(p.w).width);
  const tw = widths.reduce((a, b) => a + b, 0) + sp * (parts.length - 1); ctx.restore();
  const k = popK(t, c.t0, 0.18), fit = Z ? Math.min(1, Z.capW / (tw + 40)) : 1; push(Z ? Z.capX : 540, y, (0.92 + 0.08 * k) * fit);
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
function plate() { const Z = SAFEZ(); push(Z ? Z.plateX : 60, Z ? Z.plateY : 70, Z ? 0.9 : 1); ctx.save(); ctx.fillStyle = 'rgba(217,72,43,0.92)'; ctx.beginPath(); ctx.roundRect(-14, -28, 262, 56, 10); ctx.fill(); ctx.restore(); txt('ТОМ НА ВКУС', 0, 0, 38, { align: 'left', font: 'Osw', col: '#fff8ec' }); txt(typeof SUBTITLE !== 'undefined' ? SUBTITLE : '', 266, 2, 34, { align: 'left', col: '#f4e6c8', a: 0.8 }); pop(); }
function endcard(t) { const L = (typeof LOOP !== 'undefined' && LOOP) ? LOOP : 0, t0 = DUR - 2.2 - L; if (t < t0) return; const e = sm(clamp((t - t0) / 0.5)), k = (0.86 + 0.14 * e) * (L && t > DUR - L ? clamp((DUR - t) / L) : 1); if (k <= 0 || e <= 0) return; push(540, 1180 + (1 - e) * 60, k, -0.03); ctx.globalAlpha = e * (L && t > DUR - L ? clamp((DUR - t) / L) : 1);   // 14.11.2026: плашка плавно всплывает поверх последней реплики за ≈ 2 с до конца, в том же кадре (без склейки)   // с петлёй (LOOP): плашка до стыка, тает в последние LOOP с
  ctx.save(); ctx.fillStyle = '#d9482b'; ctx.beginPath(); ctx.roundRect(-330, -80, 660, 160, 16); ctx.fill(); ctx.restore(); pencil([[-330, -80], [330, -80], [330, 80], [-330, 80], [-330, -80]], { w: 3, col: '#2b2622', pass2: false });
  txt('ПОДПИШИСЬ', -50, 4, 104, { col: '#fff8ec', font: 'Osw' });
  push(282, -6, 1, Math.sin(t * 30) * 0.25); blob([[-26, 22], [-22, -16], [0, -30], [22, -16], [26, 22]], { wash: K.mustard, washA: 1, w: 3, col: '#2a1a0c' }); ell(0, 28, 8, 6, { wash: K.mustard, washA: 1, w: 2.4 }); pop(); pop(); ctx.globalAlpha = 1; }

/* ------------------------------------------------------------------ СВЕТ (владелец, 11.11.2026: «со светом ролик сразу богаче»)
   Рисовать внутри lay(), после объектов плана. Рецепт сцены: 1 главный источник (окно/лампа/костёр/солнце) → lightPool на земле под ним,
   shaft/rays от него, castShadow от Тома и крупных объектов в сторону ОТ источника, moodDark вокруг (всё, что далеко от света, темнее и холоднее),
   контровой свет Тома DIR.light.rim в цвет источника. Плюс BLOOM в scenes.js (мягкое свечение ярких мест на итоговом кадре). */
function lightPool(x, y, rx, ry, col, a = 0.5) { ctx.save(); ctx.translate(x, y); ctx.scale(1, ry / rx); const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rx); g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = a; ctx.fillStyle = g; ctx.fillRect(-rx, -rx, rx * 2, rx * 2); ctx.restore(); }   // пятно света на земле/стене
function shaft(x, y, w, len, ang, col, a = 0.3) { ctx.save(); ctx.translate(x, y); ctx.rotate(ang); const g = ctx.createLinearGradient(0, 0, 0, len); g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = a; ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(-w / 2, 0); ctx.lineTo(w / 2, 0); ctx.lineTo(w * 1.2, len); ctx.lineTo(-w * 1.2, len); ctx.closePath(); ctx.fill(); ctx.restore(); }   // столб света из окна/люка (ang 0 = вниз)
function castShadow(x, y, w, len, ang = 0.6, a = 0.32, col = '#0a0818') { ctx.save(); ctx.translate(x, y); ctx.transform(1, 0, Math.tan(ang), 0.3, 0, 0); const g = ctx.createLinearGradient(0, 0, 0, -len); g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.globalCompositeOperation = 'multiply'; ctx.globalAlpha = a; ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(0, -len / 2, w / 2, len / 2, 0, 0, 6.3); ctx.fill(); ctx.restore(); }   // длинная тень от ног (x,y) в сторону от света; ang > 0 — вправо
function moodDark(x, y, r0, r1, col = '#0a0818', a = 0.55) { ctx.save(); const g = ctx.createRadialGradient(x, y, r0, x, y, r1); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, col); ctx.globalCompositeOperation = 'multiply'; ctx.globalAlpha = a; ctx.fillStyle = g; ctx.fillRect(x - 5000, y - 5000, 10000, 10000); ctx.restore(); }   // затемнение вдали от источника (свет «вырезает» центр)
function depthFog(col, a) { screenFill(col, a); }                    // между планами: дальние — светлее и холоднее (воздушная перспектива)

/* ------------------------------------------------------------------ ИНФОГРАФИКА РЕЦЕПТА (владелец, 17.11.2026; с 024)
   1) ШКАЛА ИНГРЕДИЕНТОВ СЛЕВА — лента-стикер через весь ролик: сверху вниз = время, иконка продукта выскакивает на своём слове и зачёркивается, когда его выкинули.
      Рисуется ТОЛЬКО если в scenes.js задан INGR (старые выпуски не меняются; вызов — lib/direct.js hudFrame).
      const INGR = [[иконка, 'подпись', tAdd, tStrike | null, 'эпоха' | ''], ...];   // tAdd/tStrike — WT('s4','свёкла') и т.п.
      иконка — ключ INGR_ICONS (см. ниже) или своя функция (s, t) => {...} (рисует в квадрате ±30 вокруг 0,0).
      const INGR_OPT = { x: 96, y0: 724, title: 'СОСТАВ', from: <время появления ленты>, n: 8 };   // необязательно; по умолчанию — после хука
      Раскладка (SAFE): x 96–208, y 724–1474 — под карточкой рецепта (y ≤ 640), над субтитрами (y ≥ 1530), левее Тома. Видно последние n строк.
   2) ИНФО-ПЛАШКА — крупно справа от карточки (x 470–970, y ≈ 420–640), вызывать из DIR.<сцена>.hud(t):
      infoPlate(t, t0, t1, { kind: 'swap', a: 'КВАС', b: 'ТОМАТ', ia: 'kvas', ib: 'tomato', title: 'КИСЛИНКА' })   // было → стало
      infoPlate(t, t0, t1, { kind: 'num', big: '3 ТОННЫ', sub: 'кефира за праздник', icon: 'kefir' })            // число-сувенир
      infoPlate(t, t0, t1, { kind: 'list', title: 'БОРЩ У СОСЕДЕЙ', rows: [['Польша', 'прозрачный, с ушками', '#c8243a'], ...] })   // мини-карта/список */
const INGR_ICONS = {
  borshchevik(s, t) { pencil([[0, 28], [2, -6]], { w: 4, col: '#4a7a2a', pass2: false }); blob([[2, 14], [-22, 4], [-28, 18], [-10, 22]], { wash: '#6a9a3a', washA: 1, w: 1.6, col: '#2a4a14' }); for (let i = 0; i < 7; i++) { const a = -2.6 + i * 0.35, x = Math.cos(a) * 24, y = -6 + Math.sin(a) * 18; pencil([[2, -6], [x, y]], { w: 1.6, col: '#4a7a2a', pass2: false }); ell(x, y - 2, 5, 4, { wash: '#fbf6e8', washA: 1, w: 1, col: '#6a7a5a' }); } },
  kvas(s, t) { const b = blob([[-20, 26], [-24, -10], [-18, -20], [18, -20], [24, -10], [20, 26]], { wash: '#a8743e', washA: 1, w: 2, col: '#3a1a08' }); for (const y of [-8, 14]) pencil([[-23, y], [23, y]], { w: 3, col: '#4a4048', pass2: false }); ell(0, -20, 18, 6, { wash: '#c8a040', washA: 1, w: 1.4, col: '#5a3a08' }); for (let i = 0; i < 3; i++) ell(-8 + i * 8, -22 - ((t * 20 + i * 7) % 12), 2.5, 2.5, { wash: '#fff4c0', washA: 0.9, line: false }); },
  beet(s, t) { for (const a of [-0.4, 0, 0.4]) { pencil([[0, -14], [Math.sin(a) * 26, -32]], { w: 3, col: '#a8243a', pass2: false }); blob([[Math.sin(a) * 26, -32], [Math.sin(a) * 26 - 8, -24], [Math.sin(a) * 18, -18], [Math.sin(a) * 30, -26]], { wash: '#5a9a3a', washA: 1, w: 1.2, col: '#2a4a14' }); } const b = ell(0, 4, 20, 20, { wash: '#8a1438', washA: 1, w: 2, col: '#3a0414' }); ell(-7, -4, 6, 4, { wash: '#e86a8a', washA: 0.6, line: false }); pencil([[0, 24], [3, 34]], { w: 2, col: '#5a0a20', pass2: false }); },
  cabbage(s, t) { ell(0, 2, 26, 24, { wash: '#a8cc78', washA: 1, w: 2, col: '#3a5a1a' }); for (const k of [-1, 1]) pencil(spline([[0, 22], [k * 12, 4], [k * 22, -12]], false, 4), { w: 1.6, col: '#5a8a3a', pass2: false }); pencil(spline([[-20, -8], [0, -18], [20, -8]], false, 4), { w: 2, col: '#3a5a1a', pass2: false }); pencil([[0, 24], [0, -18]], { w: 1.6, col: '#e8f4d0', pass2: false }); },
  turnip(s, t) { for (const a of [-0.3, 0.3]) blob([[0, -14], [Math.sin(a) * 30, -34], [Math.sin(a) * 18, -36]], { wash: '#6a9a3a', washA: 1, w: 1.2, col: '#2a4a14' }); const b = blob([[0, 30], [-22, 6], [-18, -12], [18, -12], [22, 6]], { wash: '#f4ecd8', washA: 1, w: 2, col: '#4a3a3a' }); shadeG(b.path, 0, -12, 0, 6, '#9a5ab8', 0.85); },
  potato(s, t) { const b = blob([[-26, 4], [-18, -16], [6, -20], [24, -8], [24, 12], [4, 20], [-18, 18]], { wash: '#c89a5a', washA: 1, w: 2, col: '#4a2a10' }); for (const [x, y] of [[-10, -6], [8, 4], [-2, 12], [14, -10]]) ell(x, y, 2.4, 1.6, { wash: '#6a4a20', washA: 1, line: false }); },
  tomato(s, t) { ell(0, 4, 24, 21, { wash: '#e0302a', washA: 1, w: 2, col: '#5a0a08' }); ell(-8, -4, 6, 4, { wash: '#ffb0a0', washA: 0.7, line: false }); for (let i = 0; i < 5; i++) { const a = i * 1.256; pencil([[0, -16], [Math.cos(a) * 12, -16 + Math.sin(a) * 6]], { w: 3, col: '#3a7a2a', pass2: false }); } },
  smetana(s, t) { const b = blob([[-26, -4], [26, -4], [20, 22], [-20, 22]], { wash: '#c86a3a', washA: 1, w: 2, col: '#3a1a08' }); blob([[-22, -4], [-12, -18], [0, -14], [4, -26], [14, -12], [22, -4]], { wash: '#fffaf0', washA: 1, w: 1.6, col: '#8a7a6a' }); pencil(spline([[-6, -10], [4, -16], [8, -8]], false, 4), { w: 1.4, col: '#c8b8a8', pass2: false }); },
  meat(s, t) { blob([[-24, 6], [-18, -14], [10, -18], [26, -2], [16, 18], [-12, 18]], { wash: '#c8505a', washA: 1, w: 2, col: '#4a0a14' }); pencil(spline([[-14, -4], [0, 4], [14, -6]], false, 4), { w: 3, col: '#f4e0d8', pass2: false }); ell(16, 6, 6, 6, { wash: '#f4ecd8', washA: 1, w: 1.4 }); },
  onion(s, t) { blob([[0, -30], [-6, -14], [-22, 4], [-14, 22], [14, 22], [22, 4], [6, -14]], { wash: '#d8a050', washA: 1, w: 2, col: '#5a3a08' }); for (const k of [-1, 1]) pencil(spline([[0, -24], [k * 12, 0], [k * 6, 20]], false, 4), { w: 1.4, col: '#8a5a18', pass2: false }); },
  carrot(s, t) { blob([[-6, -18], [6, -18], [2, 30], [-2, 30]], { wash: '#f0802a', washA: 1, w: 2, col: '#6a2a04' }); for (const a of [-0.5, 0, 0.5]) pencil([[0, -18], [Math.sin(a) * 16, -34]], { w: 3, col: '#4a8a2a', pass2: false }); },
  garlic(s, t) { blob([[0, -28], [-6, -14], [-22, 2], [-16, 22], [16, 22], [22, 2], [6, -14]], { wash: '#f8f2e4', washA: 1, w: 2, col: '#6a5a4a' }); for (const k of [-1, 0, 1]) pencil([[k * 9, -12], [k * 12, 20]], { w: 1.2, col: '#b8a8c0', pass2: false }); },
  dill(s, t) { pencil([[0, 30], [0, -24]], { w: 2.4, col: '#4a7a2a', pass2: false }); for (let i = 0; i < 6; i++) for (const k of [-1, 1]) pencil([[0, -18 + i * 7], [k * (18 - i), -26 + i * 7]], { w: 1.4, col: '#5a9a3a', pass2: false }); },
  bread(s, t) { blob([[-26, 12], [-24, -6], [-8, -16], [14, -14], [26, 0], [24, 14]], { wash: '#c88a3a', washA: 1, w: 2, col: '#4a2a08' }); for (let i = 0; i < 3; i++) pencil([[-12 + i * 10, -10], [-6 + i * 10, 4]], { w: 2, col: '#7a4a18', pass2: false }); },
  kefir(s, t) { blob([[-14, 28], [-14, -6], [-6, -16], [-6, -26], [6, -26], [6, -16], [14, -6], [14, 28]], { wash: '#f4f4f8', washA: 1, w: 2, col: '#4a5a6a' }); rect(-14, 2, 28, 14, { wash: '#e8689a', washA: 1, line: false }); rect(-7, -30, 14, 6, { wash: '#2a7ac8', washA: 1, line: false }); },
  bran(s, t) { for (let i = 0; i < 14; i++) { const r = rng(9100 + i); ell(-20 + r() * 40, -4 + r() * 26, 5, 3, { wash: i % 2 ? '#c89a5a' : '#a87a3a', washA: 1, w: 1, col: '#5a3a10', rot: r() * 3 }); } blob([[-24, 22], [0, -14], [24, 22]], { wash: '#d8b070', washA: 0.5, line: false }); },
  egg(s, t) { ell(0, 2, 18, 24, { wash: '#f8f0e0', washA: 1, w: 2, col: '#6a5a4a' }); },
  salt(s, t) { rect(-12, -20, 24, 44, { wash: '#f4f4f8', washA: 1, w: 2, col: '#4a5a6a' }); ell(0, -20, 12, 4, { wash: '#b8b8c0', washA: 1, w: 1.2 }); }
};
function ingrIcon(id, x, y, s, t) { push(x, y, s); const f = typeof id === 'function' ? id : INGR_ICONS[id]; if (f) f(s, t); else { ell(0, 0, 24, 24, { wash: '#e8b53a', washA: 1, w: 2 }); txt(String(id).slice(0, 1).toUpperCase(), 0, 10, 30, { font: 'Osw', col: '#2b2622' }); } pop(); }
function ingrStrip(t) {
  if (typeof INGR === 'undefined' || !INGR.length) return;
  const O = Object.assign({ x: 96, y0: 724, title: 'СОСТАВ', from: (typeof EV !== 'undefined' && EV.hookEnd) || 2.6, n: 8, rh: 88, w: 112 }, typeof INGR_OPT !== 'undefined' ? INGR_OPT : {});
  if (t < O.from) return; const all = INGR.filter(q => t >= q[2]), items = all.slice(-O.n), e = sm(clamp((t - O.from) / 0.45));
  const h = 54 + Math.max(1, items.length) * O.rh + 16, x0 = O.x - (1 - e) * 160;
  push(x0, O.y0, 1, -0.012 + Math.sin(t * 1.1) * 0.003); ctx.globalAlpha = e;
  ctx.save(); ctx.shadowColor = 'rgba(20,10,4,0.45)'; ctx.shadowBlur = 16; ctx.shadowOffsetY = 7; ctx.fillStyle = '#f4e6c8'; ctx.beginPath(); ctx.roundRect(0, 0, O.w, h, 8); ctx.fill(); ctx.restore();
  const g = ctx.createLinearGradient(0, 0, O.w, h); g.addColorStop(0, 'rgba(255,250,235,0.5)'); g.addColorStop(1, 'rgba(184,115,58,0.2)'); ctx.fillStyle = g; ctx.fillRect(0, 0, O.w, h);
  pencil([[0, 0], [O.w, 0], [O.w, h], [0, h], [0, 0]], { w: 2.2, col: '#2b2622', a: 0.8, pass2: false });
  ctx.save(); ctx.globalAlpha = 0.55 * e; ctx.fillStyle = '#e8d890'; ctx.translate(O.w / 2, -4); ctx.rotate(0.06); ctx.fillRect(-36, -12, 72, 24); ctx.restore();   // малярный скотч
  txt(O.title, O.w / 2, 34, 26, { font: 'Osw', col: '#d9482b' }); pencil([[12, 50], [O.w - 12, 50]], { w: 1.6, col: '#d9482b', a: 0.6, pass2: false, gap: false });
  pencil([[O.w - 9, 58], [O.w - 9, h - 14]], { w: 2, col: '#8a7a6a', a: 0.6, pass2: false, gap: false }); pencil([[O.w - 15, h - 22], [O.w - 9, h - 12], [O.w - 3, h - 22]], { w: 2, col: '#8a7a6a', a: 0.6, pass2: false, gap: false });   // стрелка времени вниз
  items.forEach((q, j) => { const [id, name, ta, ts, era] = q, y = 54 + j * O.rh, k = popK(t, ta, 0.4), fresh = t - ta < 0.7, gone = ts !== null && ts !== undefined && t >= ts;
    if (fresh) glow(O.w / 2 - 6, y + 36, 70, 'rgba(232,181,58,1)', 0.45 * (1 - (t - ta) / 0.7), 'multiply');
    if (era) txt(era, 8, y + 10, 17, { font: 'Osw', col: '#d9482b', align: 'left', a: 0.85 });
    push(O.w / 2 - 6, y + 36, 0.35 + 0.65 * k); ell(0, 0, 32, 32, { wash: '#fffaf0', washA: 0.9, w: 1.4, col: '#b8a890' }); ingrIcon(id, 0, 0, 0.92, t); if (gone) { ctx.save(); ctx.fillStyle = 'rgba(244,230,200,0.62)'; ctx.beginPath(); ctx.arc(0, 0, 33, 0, 6.3); ctx.fill(); ctx.restore(); } pop();
    txt(name, O.w / 2 - 6, y + 80, 22, { font: 'Hand', col: gone ? '#8a7a6a' : '#2b2622', a: k });
    if (gone) { const kk = clamp((t - ts) / 0.3); pencil([[O.w / 2 - 40, y + 8], [O.w / 2 - 40 + 70 * kk, y + 8 + 74 * kk]], { w: 6, col: '#d9482b', a: 0.95, pass2: false, gap: false }); pencil([[O.w / 2 + 28, y + 8], [O.w / 2 + 28 - 70 * kk, y + 8 + 74 * kk]], { w: 6, col: '#d9482b', a: 0.95, pass2: false, gap: false }); }
    if (j === items.length - 1 && !gone) { const b = Math.sin(t * 6) * 3; poly([[-14 + b, y + 26], [-2 + b, y + 36], [-14 + b, y + 46]], { wash: '#d9482b', washA: 1, w: 1.4, col: '#2b2622' }); } });
  ctx.globalAlpha = 1; pop();
}
function infoPlate(t, t0, t1, o = {}) {
  if (t < t0 || t > t1 + 0.35) return; const k = popK(t, t0, 0.4), out = clamp((t - t1) / 0.35), a = 1 - out, x = o.x || 720, y = o.y || 520, w = o.w || 500;
  const h = o.kind === 'list' ? 86 + (o.rows || []).length * 52 : o.kind === 'num' ? 200 : 210;
  push(x, y + out * 40, (0.6 + 0.4 * k) * (1 - out * 0.2), o.rot !== undefined ? o.rot : 0.03); ctx.globalAlpha = a;
  ctx.save(); ctx.shadowColor = 'rgba(20,8,4,0.5)'; ctx.shadowBlur = 20; ctx.shadowOffsetY = 9; ctx.fillStyle = o.bg || '#f4e6c8'; ctx.beginPath(); ctx.roundRect(-w / 2, -h / 2, w, h, 14); ctx.fill(); ctx.restore();
  pencil([[-w / 2, -h / 2], [w / 2, -h / 2], [w / 2, h / 2], [-w / 2, h / 2], [-w / 2, -h / 2]], { w: 3, col: '#2b2622', a: 0.85, pass2: false });
  ctx.save(); ctx.fillStyle = '#d9482b'; ctx.beginPath(); ctx.roundRect(-w / 2, -h / 2, w, 46, 14); ctx.fill(); ctx.fillRect(-w / 2, -h / 2 + 24, w, 22); ctx.restore();
  txt(o.title || '', 0, -h / 2 + 32, 30, { font: 'Osw', col: '#fff8ec' });
  if (o.kind === 'swap') { const s2 = clamp((t - t0 - 0.35) / 0.35), cy = 30;
    ingrIcon(o.ia, -w / 2 + 70, cy - 8, 1.25, t); txt(o.a, -w / 2 + 70, cy + 62, 34, { font: 'Osw', col: '#2b2622' });
    if (s2 > 0) { pencil([[-w / 2 + 30, cy - 40], [-w / 2 + 30 + 84 * s2, cy + 60 * s2]], { w: 7, col: '#d9482b', pass2: false, gap: false }); pencil([[-w / 2 + 114, cy - 40], [-w / 2 + 114 - 84 * s2, cy + 60 * s2]], { w: 7, col: '#d9482b', pass2: false, gap: false }); }
    const ax = lerp(-60, 60, s2); pencil([[-70, cy], [ax, cy]], { w: 7, col: '#2b2622', pass2: false, gap: false }); if (s2 > 0.3) poly([[ax - 6, cy - 20], [ax + 20, cy], [ax - 6, cy + 20]], { wash: '#2b2622', washA: 1, line: false });
    const kb = popK(t, t0 + 0.6, 0.35); if (t > t0 + 0.6) { push(w / 2 - 80, cy - 8, kb); ingrIcon(o.ib, 0, 0, 1.25, t); pop(); txt(o.b, w / 2 - 80, cy + 62, 34, { font: 'Osw', col: '#4a5a14', a: kb }); } }
  else if (o.kind === 'num') { if (o.icon) ingrIcon(o.icon, -w / 2 + 70, 20, 1.4, t); const kb = popK(t, t0 + 0.15, 0.4); push(o.icon ? 50 : 0, 26, 0.7 + 0.3 * kb); txt(o.big || '', 0, 22, 96, { font: 'Osw', col: '#d9482b' }); pop(); txt(o.sub || '', o.icon ? 50 : 0, h / 2 - 22, 30, { font: 'Hand', col: '#2b2622' }); }
  else if (o.kind === 'list') (o.rows || []).forEach((r, j) => { const kr = popK(t, t0 + 0.15 + j * 0.25, 0.3), yy = -h / 2 + 80 + j * 52; if (t < t0 + 0.15 + j * 0.25) return;
    ell(-w / 2 + 34, yy, 16 * kr, 16 * kr, { wash: r[2] || '#c8243a', washA: 1, w: 2, col: '#2b2622' }); txt(r[0], -w / 2 + 62, yy + 2, 30, { font: 'Osw', col: '#2b2622', align: 'left', a: kr }); txt(r[1], w / 2 - 16, yy + 4, 28, { font: 'Hand', col: '#5a4a3a', align: 'right', a: kr }); });
  ctx.globalAlpha = 1; pop();
}
