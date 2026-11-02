/* 014 — `siberia`: «А в 1903-м в Сибири открыли военно-сухарный завод — сухари для целых армий.» Новониколаевск, зима 1903: кирпичный завод с трубами,
   вывеска «ВОЕННО-СУХАРНЫЙ ЗАВОДЪ», в распахнутых воротах — горящие печи и стеллажи с сухарями, железнодорожная ветка с вагонами, рабочие в тулупах грузят
   мешки «СУХАРИ», лошадь с санями, сугробы, ели, Обь подо льдом вдали. Том в тулупе и фартуке с мешком. По словам: «открыли» — над воротами загорается вывеска;
   «завод» — трубы дымят, печи вспыхивают; «целых армий» — поезд с мешками трогается, гудок паром. Переход В сцену: с неба сыплются сухари, засыпают кадр
   и осыпаются вниз. */
(() => {
  EV.sb_open = wtw('s6', 'открыли');
  EV.sb_fac = wtw('s6', 'военно-сухарный');
  EV.sb_army = wtw('s6', 'армий.');
  SHAKES.push([EV.sb_fac + 0.1, 0.12, 5]);
  KEYW.push('военно-сухарный', 'армий.');

  function winter(t) {                                                  // зимнее небо, Обь подо льдом, ели, дым
    vgrad(-600, 1000, ['#7a8aa8', '#b8c8d8', '#e8eef4']); shape(spline([[-400, 760], [300, 700], [800, 730], [1500, 690], [1500, 1000], [-400, 1000]], true, 8), { wash: '#f4f8fc', washA: 1, w: 1.6, col: '#a8b8c8' });
    rect(-400, 760, 2000, 40, { wash: '#c8d8e8', washA: 1, line: false }); for (let i = 0; i < 18; i++) spruce(-350 + i * 110, 760, 110 + (i % 3) * 40, '#2a4a3a', 1);
    motes(80, [-200, -200, 1300, 1000], '#ffffff', t, 14700, { sp: 40, vx: 14, sz: 3.5, a: 0.85, wob: 1 });
  }
  function factory(t) {                                                 // завод: кирпич, трубы с дымом, вывеска, ворота с печами и стеллажами
    push(540, 1120, 1); const b = rect(-480, -560, 960, 560, { wash: '#a8543a', washA: 1, w: 3, col: '#3a1408', key: 14710 }); for (let y = -540; y < 0; y += 30) for (let x = -470; x < 470; x += 60) rect(x + ((y / 30) % 2) * 30, y, 58, 28, { wash: '#b8644a', washA: 0.6, w: 1, col: '#4a1a08', a: 0.4 }); poly([[-500, -560], [0, -680], [500, -560]], { wash: '#5a5a62', washA: 1, w: 2.4, col: '#1a1a1a' }); blob([[-500, -560], [0, -690], [500, -560], [400, -580], [0, -660], [-400, -580]], { wash: '#f4f8fc', washA: 1, line: false });
      for (const x of [-360, 340]) { rect(x - 30, -900, 60, 360, { wash: '#8a4a32', washA: 1, w: 2, col: '#2a0a04' }); if (t > EV.sb_fac) for (let i = 0; i < 5; i++) { const q = ((t - EV.sb_fac) * 0.5 + i / 5) % 1; ell(x + q * 120, -920 - q * 300, 30 + q * 60, 24 + q * 40, { wash: '#8a8a92', washA: 0.6 * (1 - q), line: false }); } }
      for (let i = 0; i < 6; i++) if (i !== 2 && i !== 3) { rect(-420 + i * 150, -440, 90, 120, { wash: t > EV.sb_fac ? '#ffd890' : '#4a5a6a', washA: 1, w: 2, col: '#2a0a04' }); if (t > EV.sb_fac) glow(-375 + i * 150, -380, 70, 'rgba(255,200,110,1)', 0.4); }
      const g = rect(-150, -300, 300, 300, { wash: '#1a0a04', washA: 1, w: 3, col: '#2a0a04' }); ctx.save(); ctx.clip(g.path); vgrad(-300, 0, ['#3a1a0a', '#6a3014']); for (let i = 0; i < 2; i++) { const o = blob([[-140 + i * 150, 0], [-140 + i * 150, -150], [-70 + i * 150, -200], [0 + i * 150, -150], [0 + i * 150, 0]], { wash: '#5a3a2a', washA: 1, w: 2 }); glow(-70 + i * 150, -80, 100, 'rgba(255,140,50,1)', t > EV.sb_fac ? 0.7 : 0.3); }
      for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) rusk(-120 + c * 48, -260 + r * 30, 0.3, 0, { rye: 1, key: 14711 + r * 6 + c }); ctx.restore();
      const on = t > EV.sb_open; rect(-330, -540, 660, 70, { wash: '#1a2a3a', washA: 1, w: 3, col: '#c8a050' }); txt('ВОЕННО-СУХАРНЫЙ ЗАВОДЪ', 0, -494, 36, { font: 'Osw', col: on ? '#ffe070' : '#8a8a6a' }); if (on) glow(0, -505, 360, 'rgba(255,220,120,1)', 0.3 * clamp((t - EV.sb_open) / 0.3)); pop();
  }
  function rail(t) {                                                    // ж/д ветка: вагоны с мешками, паровоз трогается на «армий»
    const go = t > EV.sb_army - 0.3 ? (t - EV.sb_army + 0.3) * 160 : 0; for (let i = 0; i < 2; i++) pencil([[-400, 1230 + i * 20], [1600, 1230 + i * 20]], { w: 6, col: '#4a4a52' }); for (let i = 0; i < 28; i++) rect(-400 + i * 72, 1222, 14, 44, { wash: '#5a3a1a', washA: 1, line: false });
    for (let i = 0; i < 3; i++) { const x = -240 + i * 260 + go; push(x, 1230, 1); rect(-110, -150, 220, 140, { wash: '#6a3a1a', washA: 1, w: 2.4, col: '#1a0a04' }); for (const sd of [-1, 1]) ell(sd * 70, -6, 24, 24, { wash: '#2a2a2a', washA: 1, w: 2 }); for (let k = 0; k < 4; k++) { const sk = blob([[-90 + k * 46, -150], [-94 + k * 46, -200], [-70 + k * 46, -214], [-50 + k * 46, -200], [-54 + k * 46, -150]], { wash: '#d8c8a0', washA: 1, w: 1.6, col: '#5a4a2a' }); } txt('СУХАРИ', 0, -80, 26, { font: 'Osw', col: '#f4e6c8' }); pop(); }
    push(560 + go, 1230, 1); const lo = rect(-140, -200, 280, 190, { wash: '#1a1a1e', washA: 1, w: 2.4, col: '#0a0a0a' }); rect(60, -270, 70, 80, { wash: '#2a2a2e', washA: 1, w: 2 }); rect(-150, -100, 50, 40, { wash: '#c8221a', washA: 1, w: 1.6 }); for (let i = 0; i < 3; i++) ell(-90 + i * 80, -6, 34, 34, { wash: '#c8221a', washA: 1, w: 2.4, col: '#1a1a1a' }); rect(-130, -310, 50, 110, { wash: '#2a2a2e', washA: 1, w: 2 });
      if (t > EV.sb_army - 0.3) for (let i = 0; i < 6; i++) { const q = ((t - EV.sb_army) * 0.7 + i / 6) % 1; ell(-105 - q * 200, -330 - q * 220, 40 + q * 70, 30 + q * 50, { wash: '#f4f4f8', washA: 0.7 * (1 - q), line: false }); } pop();
  }
  function workers(t) { for (const [x, sd, i] of [[60, 1, 0], [1040, -1, 1]]) { human(x, 1360, 1.1, t, { body: '#6a4a2a', bodyD: '#3a2a14', legs: '#2a2a2a', hair: '#3a2a1a', beard: i ? 'long' : 'short', face: t > EV.sb_army ? 'grin' : 'calm', armL: 'up', armR: 'up', look: sd * 0.5, seed: 14720 + i, flip: sd, long: 1 }); hat20(x, 1360, 1.1, 'fedora', '#3a2a1a'); push(x, 1360 - 400 * 1.1, 1); blob([[-60, 0], [-56, -50], [-20, -70], [20, -70], [56, -50], [60, 0]], { wash: '#d8c8a0', washA: 1, w: 2, col: '#5a4a2a' }); txt('СУХАРИ', 0, -26, 18, { font: 'Osw', col: '#6a3a10' }); pop(); } }
  function snow(t) {                                                    // передний план: сугроб, сани с мешками, ель, снегопад
    const s = blob([[-400, 2000], [-200, 1700], [200, 1680], [700, 1710], [1100, 1660], [1500, 1700], [1500, 2000]], { wash: '#f4f8fc', washA: 1, w: 2, col: '#a8b8c8' }); shadeG(s.path, 0, 2000, 0, 1500, '#c8d4e0', 0.4);
    push(200, 1720, 1); rect(-140, -60, 280, 50, { wash: '#8a5a2a', washA: 1, w: 2.4, col: '#2a1408' }); pencil(spline([[-160, 0], [-140, 10], [160, 10], [200, -40]], false, 6), { w: 8, col: '#3a2a1a', pass2: false }); for (let k = 0; k < 3; k++) blob([[-110 + k * 80, -60], [-114 + k * 80, -120], [-80 + k * 80, -130], [-50 + k * 80, -120], [-54 + k * 80, -60]], { wash: '#d8c8a0', washA: 1, w: 1.6, col: '#5a4a2a' }); pop();
    spruce(1180, 2000, 520, '#1e3a2a', 1); blob([[1100, 1640], [1180, 1580], [1260, 1640]], { wash: '#f4f8fc', washA: 1, line: false }); motes(60, [-100, 300, 1200, 1900], '#ffffff', t, 14730, { sp: 70, vx: 16, sz: 5, a: 0.9, wob: 1 });
  }
  WORLD.siberia = (t, u, cat) => {
    lay(14, () => { winter(t); haze('#e8eef4', 0.1); });
    lay(4, () => { factory(t); });
    lay(2.2, () => { rail(t); workers(t); });
    lay(1, () => { cat(); });
    lay(0.7, () => { snow(t); });
  };
  DIR.siberia = {
    outfit: 'tulup', light: { side: 1, rim: '#e0ecff' }, grade: ['#a8c0e0', 0.1],
    act: () => [[S0.siberia, 'cold'], [EV.sb_open, 'awe'], [EV.sb_fac, 'proud'], [EV.sb_army, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1640, s: 1.05, flip: -1, apron: true, frost: 0.4, chatter: t < EV.sb_open, look: t < EV.sb_army ? [-0.3, -0.5] : [0.6, -0.2], hand: [140, -380], handF: [-140, -380] }),
    afterCat: (t, u, P) => { push(P.x, P.y - 470 * P.s, P.s); blob([[-70, 0], [-66, -60], [-24, -84], [24, -84], [66, -60], [70, 0]], { wash: '#d8c8a0', washA: 1, w: 2, col: '#5a4a2a' }); txt('СУХАРИ', 0, -36, 22, { font: 'Osw', col: '#6a3a10' }); pop(); },
    cam: () => [[S0.siberia, 560, 900, 0.06], [EV.sb_open, 540, 640, 0.14, 'x'], [EV.sb_fac, 540, 900, 0.08], [EV.sb_army, 600, 1180, 0.14], [S1.siberia, 620, 1200, 0.18]]
  };
  // ---------------------------------------------------------------- переход: с неба сыплются сухари, засыпают кадр и осыпаются
  TRANS_IN.siberia = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    drawBuf(k < 0.5 ? A : B, 1, 540, 960); const r = rng(14740); scr(() => { for (let i = 0; i < 90; i++) { const x = r() * W, d = r() * 0.5, q = k * 1.6 - d, y = q < 0.5 ? lerp(-200, H * (0.3 + r() * 0.8), clamp(q * 2)) : lerp(H * (0.3 + r() * 0.8), H + 300, clamp((q - 0.5) * 2)); if (q < 0 || q > 1) continue; rusk(x, y, 1.2 + r() * 0.8, r() * 6 + q * 3, { rye: r() > 0.5, key: 14741 + i }); } });
  } };
})();
