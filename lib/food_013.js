/* 013 — еда выпуска «Солянка»: тарелка/мельхиоровая миска солянки (оранжевый бульон с жирными «глазками», маслины, ломтик лимона, каперсы, колбаса, огурцы,
   сметана, укроп, пар; o.kind: 'meat' | 'fish' | 'mush'), маслина, ломтик лимона, солёный огурец, банка огурцов/каперсов, сковорода «селянки» (капуста + мясо),
   солонка-великан. Реквизит Тома — PROPS. */
const SL = { broth: '#d8642a', brothD: '#a8401a', brothL: '#f09a4a', oil: '#ffb040', olive: '#2a2228', lemon: '#f4e04a', lemonL: '#fff6b0', pickle: '#6a8a2a', pickleD: '#3a5a1a', sour: '#fbf6ea', dill: '#4a8a2a', saus: '#b8584a', ham: '#e89a8a' };

function oliveS(x, y, r, o = {}) {                                       // маслина: чёрная, глянец, дырочка (o.ring — колечко)
  if (o.ring) { ell(x, y, r, r * 0.8, { line: true, w: r * 0.6, col: SL.olive }); glow(x - r * 0.3, y - r * 0.3, r * 0.3, 'rgba(255,255,255,1)', 0.5); return; }
  const b = ell(x, y, r, r * 0.8, { wash: SL.olive, washA: 1, w: 1.6, col: '#0a0a0a' }); glow(x - r * 0.35, y - r * 0.3, r * 0.35, 'rgba(255,255,255,1)', 0.65); ell(x + r * 0.5, y, r * 0.18, r * 0.14, { wash: '#6a2a3a', washA: 1, line: false });
}
function lemonSlice(x, y, r, rot = 0, o = {}) {                           // ломтик лимона: корка, белая кайма, дольки
  push(x, y, 1, rot); ctx.save(); ctx.scale(1, o.flat || 1); ell(0, 0, r, r, { wash: '#e8c020', washA: 1, w: 2, col: '#8a6a08' }); ell(0, 0, r * 0.9, r * 0.9, { wash: '#fffbe0', washA: 1, line: false }); ell(0, 0, r * 0.82, r * 0.82, { wash: SL.lemon, washA: 1, line: false });
  for (let i = 0; i < 9; i++) { const a = i / 9 * 6.283; pencil([[0, 0], [Math.cos(a) * r * 0.82, Math.sin(a) * r * 0.82]], { w: 2, col: SL.lemonL, pass2: false }); } ell(0, 0, r * 0.1, r * 0.1, { wash: SL.lemonL, washA: 1, line: false }); glow(-r * 0.3, -r * 0.3, r * 0.3, 'rgba(255,255,255,1)', 0.5); ctx.restore(); pop();
}
function pickleS(x, y, s, rot = 0, o = {}) {                             // солёный огурец: пупырчатый, тёмно-зелёный; o.slice — кружок
  push(x, y, s, rot); if (o.slice) { ell(0, 0, 20, 20, { wash: SL.pickle, washA: 1, w: 1.6, col: SL.pickleD }); ell(0, 0, 15, 15, { wash: '#c8d888', washA: 1, line: false }); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; ell(Math.cos(a) * 7, Math.sin(a) * 7, 2, 3, { wash: '#f4f0d0', washA: 1, line: false }); } pop(); return; }
  const b = blob([[-60, 0], [-50, -18], [0, -22], [50, -18], [62, 0], [50, 18], [0, 22], [-50, 18]], { wash: SL.pickle, washA: 1, w: 2, col: SL.pickleD }); shadeG(b.path, 0, 22, 0, -22, SL.pickleD, 0.4);
  for (let i = 0; i < 12; i++) ell(-46 + (i % 6) * 18, -8 + Math.floor(i / 6) * 14, 2.4, 2.4, { wash: '#9ab84a', washA: 1, line: false }); glow(-20, -10, 16, 'rgba(255,255,255,1)', 0.4); pop();
}
function solyankaBowl(x, y, s, t, o = {}) {                              // миска солянки 3/4: o.metal — мельхиоровая; o.kind; o.lid — крышка поднята (0..1); o.steam
  push(x, y, s); const k = o.key || 13000, kind = o.kind || 'meat', R = 200, Ry = 70;
  ell(0, 90, R + 30, 26, { wash: '#000000', washA: 0.22, line: false });
  if (o.metal) { const st = shape([[-90, 60], [90, 60], [70, 100], [-70, 100]], { wash: '#c8ccd2', washA: 1, w: 2, col: '#3a3e44' }); metalG(st.path, -20, 80, 100, '#ffffff', '#b8bcc4', '#5a5e66'); }
  const body = shape(spline([[-R, 0], [-R * 0.9, 50], [-R * 0.5, 80], [R * 0.5, 80], [R * 0.9, 50], [R, 0]], false, 8).concat([[R, 0]]), { wash: o.metal ? '#c8ccd2' : '#f6f2ea', washA: 1, w: 2.6, col: '#3a3a3a', key: k });
  if (o.metal) metalG(body.path, -60, 30, R + 40, '#ffffff', '#b8bcc4', '#4a4e54'); else { shadeG(body.path, R, 0, -R * 0.4, 0, '#b8b0a0', 0.4); for (let i = 0; i < 12; i++) txt('✿', -R * 0.8 + i * R * 0.15, 40 + Math.sin(i) * 6, 18, { col: '#2a5ab8', a: 0.7 }); }
  ell(0, 0, R, Ry, { wash: o.metal ? '#d8dce0' : '#f8f4ec', washA: 1, w: 2.6, col: '#3a3a3a' });
  const soup = ell(0, 4, R * 0.9, Ry * 0.82, { wash: kind === 'mush' ? '#b8743a' : SL.broth, washA: 1, w: 1.6, col: SL.brothD, key: k + 1 }); shadeG(soup.path, 0, Ry, 0, -Ry, SL.brothD, 0.35);
  ctx.save(); ctx.clip(soup.path); const r = rng(k + 2);
  for (let i = 0; i < 18; i++) { const a = r() * 6.283, d = Math.sqrt(r()) * 0.85; ell(Math.cos(a) * R * 0.9 * d, 4 + Math.sin(a) * Ry * 0.8 * d, 6 + r() * 10, (6 + r() * 10) * 0.4, { wash: SL.oil, washA: 0.75, w: 1, col: '#c86a1a', a: 0.6 }); }
  for (let i = 0; i < 7; i++) { const a = r() * 6.283, d = 0.3 + r() * 0.6, px = Math.cos(a) * R * 0.85 * d, py = 4 + Math.sin(a) * Ry * 0.75 * d;
    if (kind === 'fish') { push(px, py, 1, r()); rect(-18, -8, 36, 16, { wash: i % 2 ? '#f0b090' : '#f4e8d8', washA: 1, w: 1.2, col: '#8a5a3a' }); pop(); }
    else if (kind === 'mush') { push(px, py, 1, r()); blob([[-14, 4], [-12, -8], [0, -12], [12, -8], [14, 4]], { wash: '#8a5a2a', washA: 1, w: 1.2, col: '#3a1a08' }); rect(-4, 4, 8, 10, { wash: '#efe2c8', washA: 1, w: 1 }); pop(); }
    else if (i % 2) { ell(px, py, 16, 8, { wash: SL.saus, washA: 1, w: 1.2, col: '#5a1a1a' }); for (let q = 0; q < 4; q++) ell(px - 8 + q * 5, py - 2 + (q % 2) * 4, 1.6, 1.6, { wash: '#f8e8d8', washA: 1, line: false }); }
    else { push(px, py, 1, r()); rect(-12, -7, 24, 14, { wash: SL.ham, washA: 1, w: 1.2, col: '#8a3a2a' }); pop(); } }
  for (let i = 0; i < 4; i++) pickleS(-R * 0.6 + i * R * 0.35, 18 + (i % 2) * 12, 0.5, 0, { slice: 1 });
  for (let i = 0; i < 5; i++) oliveS(-R * 0.5 + i * R * 0.25, -14 + (i % 2) * 22, 10, { ring: i % 2 });
  for (let i = 0; i < 8; i++) ell(-R * 0.3 + (i % 4) * 14, 30 + Math.floor(i / 4) * 10, 3, 3, { wash: '#4a6a2a', washA: 1, line: false });
  ctx.restore();
  lemonSlice(R * 0.35, -8, 34, 0.3, { flat: 0.45 }); blob([[-R * 0.1, -4], [0, -26], [R * 0.12, -10], [R * 0.06, 6], [-R * 0.06, 8]], { wash: SL.sour, washA: 1, w: 1.4, col: '#c8c0b0' }); glow(-R * 0.02, -16, 20, 'rgba(255,255,255,1)', 0.6);
  for (let i = 0; i < 6; i++) pencil([[-R * 0.25 + i * 8, -6], [-R * 0.25 + i * 8 + 10, -16]], { w: 2, col: SL.dill, pass2: false });
  glow(-R * 0.4, -Ry * 0.3, 40, 'rgba(255,255,255,1)', 0.35);
  if (o.lid !== undefined && o.lid < 1) { push(R * 0.3 * (1 - o.lid), -lerp(0, 160, o.lid), 1, -o.lid * 0.3); const ld = blob([[-R - 6, 0], [-R * 0.7, -60], [0, -80], [R * 0.7, -60], [R + 6, 0]], { wash: '#c8ccd2', washA: 1, w: 2.6, col: '#3a3e44' }); metalG(ld.path, -40, -50, R, '#ffffff', '#b8bcc4', '#4a4e54'); ell(0, -86, 20, 10, { wash: '#a8acb4', washA: 1, w: 2 }); pop(); }
  if (o.steam !== 0) for (let i = 0; i < 5; i++) { const q = ((t || 0) * 0.45 + i / 5) % 1; pencil(spline([[-80 + i * 40, -20], [-90 + i * 40 + Math.sin(q * 6 + i) * 22, -20 - q * 140], [-80 + i * 40 + Math.sin(q * 9 + i) * 30, -20 - q * 260]], false, 5), { w: 9, col: '#ffffff', a: 0.35 * (1 - q), pass2: false }); }
  pop();
}
function jarS(x, y, s, t, o = {}) {                                      // стеклянная банка: огурцы в рассоле (o.kind 'pickle'), маслины ('olive'), каперсы ('caper'); этикетка
  push(x, y, s); const g = shape(spline([[-60, 0], [-66, -40], [-66, -200], [-50, -220], [50, -220], [66, -200], [66, -40], [60, 0]], true, 6), { wash: '#d8ecd8', washA: 0.4, w: 2.4, col: '#4a6a5a' });
  ctx.save(); ctx.clip(g.path); vgrad(-200, 0, ['#c8d890', '#9ab060'], 0.7); const r = rng(o.key || 13050);
  if ((o.kind || 'pickle') === 'pickle') for (let i = 0; i < 5; i++) pickleS(-30 + (i % 2) * 50, -40 - i * 36, 0.55, 1.4 + r() * 0.4); else for (let i = 0; i < 22; i++) { if (o.kind === 'olive') oliveS(-40 + (i % 5) * 20, -20 - Math.floor(i / 5) * 34, 12); else ell(-40 + (i % 6) * 16, -16 - Math.floor(i / 6) * 22, 7, 7, { wash: '#6a7a2a', washA: 1, w: 1 }); }
  for (let i = 0; i < 3; i++) pencil([[-30 + i * 30, -60], [-34 + i * 30, -190]], { w: 3, col: '#4a6a2a', a: 0.6, pass2: false }); ctx.restore();
  rect(-56, -250, 112, 34, { wash: '#c8a050', washA: 1, w: 2, col: '#5a3a08' }); glow(-30, -150, 30, 'rgba(255,255,255,1)', 0.5);
  if (o.label) { rect(-50, -130, 100, 50, { wash: '#f4ecd8', washA: 1, w: 1.6, col: '#6a5a3a' }); txt(o.label, 0, -98, 20, { font: 'Hand', col: '#7a1a10' }); } pop();
}
function selyankaPan(x, y, s, t, o = {}) {                               // чугунная сковорода «селянки» XVIII в.: тушёная квашеная капуста, куски мяса и рыбы, лук, пар
  push(x, y, s); ell(0, 30, 240, 40, { wash: '#000000', washA: 0.2, line: false }); const p = ell(0, 0, 220, 76, { wash: '#2a2a2e', washA: 1, w: 3, col: '#0a0a0a' }); metalG(p.path, -60, -20, 240, '#5a5a62', '#2a2a2e', '#0a0a0a'); pencil([[210, 0], [400, -30]], { w: 22, col: '#2a2a2e' });
  const f = ell(0, 0, 196, 62, { wash: '#c8b070', washA: 1, w: 1.6, col: '#6a5a2a' }); ctx.save(); ctx.clip(f.path); const r = rng(o.key || 13060);
  for (let i = 0; i < 60; i++) { const a = r() * 6.283, d = Math.sqrt(r()); pencil([[Math.cos(a) * 190 * d, Math.sin(a) * 60 * d], [Math.cos(a) * 190 * d + 14, Math.sin(a) * 60 * d + (r() - 0.5) * 8]], { w: 3, col: r() > 0.5 ? '#e8d890' : '#a89a50', pass2: false }); }
  for (let i = 0; i < 5; i++) { const a = r() * 6.283, d = 0.3 + r() * 0.5; push(Math.cos(a) * 190 * d, Math.sin(a) * 60 * d, 1, r()); rect(-22, -12, 44, 24, { wash: i % 2 ? '#8a4a2a' : '#e8d8c0', washA: 1, w: 1.4, col: '#3a1a08' }); pop(); } ctx.restore();
  for (let i = 0; i < 4; i++) { const q = ((t || 0) * 0.45 + i / 4) % 1; pencil(spline([[-60 + i * 40, -30], [-70 + i * 40 + Math.sin(q * 6 + i) * 20, -30 - q * 120], [-60 + i * 40, -30 - q * 220]], false, 5), { w: 9, col: '#ffffff', a: 0.3 * (1 - q), pass2: false }); }
  pop();
}
function saltShaker(x, y, s, rot = 0, t = 0, pour = 0) {                  // солонка: стеклянная с металлической крышкой; pour — сыплет соль
  push(x, y, s, rot); const g = shape([[-50, 0], [-56, -150], [56, -150], [50, 0]], { wash: '#e8f0f4', washA: 0.45, w: 2.4, col: '#5a6a7a' }); rect(-48, -100, 96, 98, { wash: '#ffffff', washA: 0.9, line: false }); const c = rect(-60, -200, 120, 52, { wash: '#c8ccd2', washA: 1, w: 2.4, col: '#3a3e44' }); metalG(c.path, -20, -180, 80, '#ffffff', '#b8bcc4', '#5a5e66');
  for (let i = 0; i < 7; i++) ell(-36 + i * 12, -206, 3, 3, { wash: '#3a3e44', washA: 1, line: false }); txt('СОЛЬ', 0, -50, 26, { font: 'Osw', col: '#2a3a5a' }); pop();
  if (pour > 0) { const r = rng(13070); for (let i = 0; i < 40; i++) { const q = (t * 1.5 + r()) % 1; ell(x - Math.sin(rot) * 200 * s + (r() - 0.5) * 60 * s, y - Math.cos(rot) * 200 * s + q * 700, 3, 3, { wash: '#ffffff', washA: 0.95 * pour, line: false }); } }
}
Object.assign(PROPS, {
  ladleP() { push(0, -40, 1, 0.3); pencil([[0, 40], [0, -150]], { w: 8, col: '#b8bcc4' }); const b = ell(0, 70, 46, 30, { wash: '#c8ccd2', washA: 1, w: 2.4, col: '#3a3e44' }); metalG(b.path, -10, 60, 50, '#ffffff', '#b8bcc4', '#5a5e66'); ell(0, 60, 36, 10, { wash: SL.broth, washA: 1, line: false }); pop(); },
  spoonSP() { push(0, -40, 1, 0.2); pencil([[0, 50], [0, -60]], { w: 6, col: '#c8ccd2' }); const b = ell(0, -80, 22, 30, { wash: '#d8dce0', washA: 1, w: 2, col: '#3a3e44' }); ell(0, -82, 16, 22, { wash: SL.broth, washA: 1, line: false }); oliveS(0, -86, 7); pop(); },
  pickleP() { pickleS(0, -40, 0.7, 1.3); },
  oliveP() { oliveS(0, -40, 16); },
  bowlP() { solyankaBowl(0, -40, 0.4, 0, { key: 13080, steam: 0 }); },
});
