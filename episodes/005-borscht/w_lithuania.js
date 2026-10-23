/* 005 — `lithuania`: «В Литве холодный и розовый, на кефире.» Жаркий летний двор: черепичные крыши, липа, бельё на верёвке, солнце-блин. Столик в тени:
   ярко-розовая миска, рядом горячая картошка с паром (контраст), огурцы, яйца, укроп. На «холодный» над миской — иней и кубики льда, Том-официант прикладывает
   миску к щеке; на «розовый» суп вспыхивает розовым; на «кефире» сверху льётся кефир. Переход В сцену: густой кефир стекает по кадру сверху, капли. */
(() => {
  EV.lt_cold = wtw('s7', 'холодный');
  EV.lt_pink = wtw('s7', 'розовый,');
  EV.lt_kef = wtw('s7', 'кефире.');
  KEYW.push('розовый,');

  function yard(t) { vgrad(-600, 1200, ['#58b0f0', '#a8dcf8', '#fff0d0']); ell(860, 220, 90, 90, { wash: '#fff2a0', washA: 1, line: false }); glow(860, 220, 300, 'rgba(255,240,150,1)', 0.6);
    for (let i = 0; i < 4; i++) { const x = -200 + i * 360, h = 260 + (i % 2) * 60; rect(x, 900 - h, 300, h, { wash: ['#f2e2c0', '#e8c8a0', '#f6ead6', '#d8b890'][i], washA: 1, w: 2.4, col: '#5a3a1a' }); poly([[x - 20, 900 - h], [x + 150, 900 - h - 120], [x + 320, 900 - h]], { wash: '#c8583a', washA: 1, w: 2.4, col: '#5a1a0a' }); for (let q = 0; q < 2; q++) rect(x + 50 + q * 120, 900 - h + 60, 70, 80, { wash: '#6a9ab8', washA: 1, w: 2, col: '#3a2a1a' }); }
    pencil([[-100, 760], [1200, 720]], { w: 2, col: '#6a5a4a', pass2: false }); for (let i = 0; i < 6; i++) { const x = 40 + i * 180, sw = Math.sin(t * 2 + i) * 6; blob([[x, 755 - i * 3], [x + 90, 752 - i * 3], [x + 86 + sw, 860], [x + 4 + sw, 864]], { wash: ['#ffffff', '#f08ab0', '#8ac0e8', '#fff2a0'][i % 4], washA: 1, w: 1.8, col: '#6a5a4a' }); }
    ell(140, 900, 260, 200, { wash: '#4a8a3a', washA: 1, w: 2.4, col: '#1a3a0a' }); pencil([[140, 1100], [140, 960]], { w: 24, col: '#5a3a1a' }); rect(-300, 1060, 1700, 400, { wash: '#a8c870', washA: 1, w: 2, col: '#3a5a1a' }); }
  function table(t) { const tb = rect(-200, 1340, 1500, 600, { wash: '#f2f2f8', washA: 1, w: 3, col: '#6a6a8a', key: 5900 }); for (let i = 0; i < 12; i++) { pencil([[-200 + i * 130, 1340], [-200 + i * 130, 1940]], { w: 20, col: '#8ac0e8', a: 0.4, pass2: false }); }
    for (let i = 0; i < 3; i++) potato(140 + i * 50, 1380 - (i % 2) * 20, 0.42, i); for (let i = 0; i < 4; i++) { const k = (t * 0.6 + i / 4) % 1; ell(160 + i * 20, 1320 - k * 160, 16 + k * 20, 10 + k * 14, { wash: '#ffffff', washA: 0.4 * (1 - k), line: false }); }
    cucumber(860, 1400, 0.6, 0.2); for (const x of [960, 1020]) { ell(x, 1420, 30, 22, { wash: '#ffffff', washA: 1, w: 2, col: '#8a8a7a' }); ell(x, 1420, 14, 12, { wash: '#f8c030', washA: 1, line: false }); }
    const cx = 540, cy = 1470, pk = clamp((t - EV.lt_pink + 0.1) / 0.4); push(cx, cy, 1.15); const bw = shape(spline([[-150, -40], [-130, 40], [-60, 80], [60, 80], [130, 40], [150, -40]], false, 8), { wash: '#ffffff', washA: 1, w: 3, col: '#4a5a8a' }); for (let i = 0; i < 5; i++) ell(-100 + i * 50, 30, 10, 8, { wash: '#4a6ab8', washA: 1, line: false });
    ell(0, -40, 150, 34, { wash: lerpC('#d8a8b8', BR.pink, pk), washA: 1, w: 2.4, col: '#8a3a5a' }); if (pk > 0) { glow(0, -40, 120, 'rgba(255,140,190,1)', 0.35 * pk * (1 - clamp(t - EV.lt_pink - 0.6))); }
    for (let i = 0; i < 6; i++) poly([[-80 + i * 30, -44], [-70 + i * 30, -52], [-60 + i * 30, -44], [-70 + i * 30, -38]], { wash: '#6aa04a', washA: 1, line: false }); for (let i = 0; i < 3; i++) rect(-60 + i * 50, -50, 14, 14, { wash: '#f2f6e0', washA: 1, w: 1 });
    if (t > EV.lt_cold - 0.1) { const c = popK(t, EV.lt_cold); for (let i = 0; i < 3; i++) { push(-90 + i * 80, -60 - 10 * Math.sin(t * 2 + i), c, 0.3 * i); rect(-18, -18, 36, 36, { wash: '#e8f8ff', washA: 0.85, w: 2, col: '#6aa0c8' }); pencil([[-10, -10], [6, -12]], { w: 2, col: '#ffffff', pass2: false }); pop(); } frost(-150, -80, 300, 40, t, c * 0.8); }
    pop();
    const kk = t - EV.lt_kef; if (kk > -0.2) { const w = 30 * clamp((kk + 0.2) / 0.3) * (1 - clamp(kk - 1.2)); if (w > 1) { const bx = cx + 30, top = 900; rect(bx - 80, top - 220, 120, 220, { wash: '#ffffff', washA: 1, w: 2.4, col: '#6a7a9a' }); txt('КЕФИР', bx - 20, top - 120, 26, { font: 'Osw', col: '#2a5aa8' });
      shape(spline([[bx - w / 2, top], [bx - w / 2 + Math.sin(t * 9) * 4, top + 280], [bx - w / 3, cy - 40], [bx + w / 3, cy - 40], [bx + w / 2 + Math.sin(t * 9) * 4, top + 280], [bx + w / 2, top]], false, 8), { wash: '#fbfbf6', washA: 1, w: 1.6, col: '#c8c8c0' }); ell(bx, cy - 36, 60, 12, { wash: '#ffffff', washA: 0.9, line: false }); } }
  }
  WORLD.lithuania = (t, u, cat) => { lay(12, () => yard(t)); lay(1, () => { table(t); cat(); }); };
  DIR.lithuania = {
    outfit: 'waiter', light: { side: 1, rim: '#fff8d0' }, grade: ['#f08ab0', 0.05],
    act: () => [[S0.lithuania, 'talk'], [EV.lt_cold, 'cold'], [EV.lt_pink, 'awe'], [EV.lt_kef, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 860, y: 1800, s: 1.12, flip: true, apron: 1, look: [-0.7, 0.4], hand: t < EV.lt_pink ? [70, -330] : [130, -250], handF: [-90, -230], frost: t > EV.lt_cold && t < EV.lt_pink + 0.4 ? 0.6 : 0, chatter: t > EV.lt_cold && t < EV.lt_pink ? 1 : 0 }),
    cam: () => [[S0.lithuania, 560, 1100, 0.2], [EV.lt_cold, 580, 1360, 0.3, 'x'], [EV.lt_kef, 580, 1250, 0.3], [S1.lithuania, 580, 1250, 0.32]]
  };
  // ---------------------------------------------------------------- переход: густой кефир стекает сверху, краснеет до розового
  TRANS_IN.lithuania = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = sm(clamp(k / 0.55)), off = sm(clamp((k - 0.55) / 0.45)); drawBuf(off > 0 ? B : A, 1, 540, 960);
    scr(() => { const pts = [[-50, -50 - off * 2200]]; for (let i = 0; i <= 16; i++) { const x = -50 + i * 74, d = rng(5950 + i)(); pts.push([x, q * (1500 + d * 700) - off * 2200]); } pts.push([1130, -50 - off * 2200]);
      const s = shape(spline(pts, true, 4), { wash: lerpC('#fbfbf6', BR.pinkL, q), washA: 1, w: 4, col: '#d8c8d0' }); for (let i = 0; i < 6; i++) ell(100 + i * 180, q * 1400 - off * 2200 - 200, 40, 18, { wash: '#ffffff', washA: 0.5, line: false }); });
  } };
})();
