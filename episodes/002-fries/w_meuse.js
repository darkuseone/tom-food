/* 002 — `meuse`: «Версия Бельгии: семнадцатый век, Маас замёрз — рыбу заменили картошкой-рыбками.» Зимняя долина Мааса под Намюром в духе Аверкампа:
   цитадель на скале, каменные дома под снегом, дым из труб, конькобежцы на льду, рыбак у пустой лунки. Том (голландский камзол + фартук) у костра со сковородой.
   «замёрз» — по льду бежит иней, рыбак тянет пустую леску; «заменили» — рыбка в лапе Тома «пуф» → картошка-рыбка; на сковороде шкворчат картофельные рыбки.
   Переход В сцену: фри ломается — кадр суда разламывается пополам по неровному излому, половинки падают в стороны. */
(() => {
  EV.ms_frozen = wtw('s1', 'замёрз');
  EV.ms_swap = wtw('s1', 'заменили');
  EV.ms_potato = wtw('s1', 'картошкой');
  KEYW.push('замёрз', 'картошкой-рыбками.');
  function sky(t) { vgrad(-600, 1300, ['#9ab0c4', '#d8dcd8', '#f0e2c8']); glow(820, 380, 320, 'rgba(255,236,200,1)', 0.45); motes(26, [-300, -200, 1400, 1200], '#ffffff', t, 3, { sp: 40, vx: 12, sz: 5, a: 0.6 }); }
  function citadel(t) {                                                 // скала и цитадель Намюра
    const rk = shape([[-400, 1100], [-300, 620], [-120, 520], [80, 470], [260, 520], [380, 640], [460, 1100]], { wash: '#7a786e', washA: 1, w: 2.4, col: '#2a2a26', key: 8400 });
    shadeG(rk.path, 400, 0, -200, 0, '#3a3a36', 0.5); hatch(rk.path, rk.bb, { gap: 7, a: 0.2, col: '#2a2a26', ang: 1.1, key: 8401 });
    for (let i = 0; i < 6; i++) blob([[-260 + i * 110, 560 - (i % 2) * 30], [-210 + i * 110, 540], [-160 + i * 110, 568]], { wash: '#f4f6f8', washA: 0.95, line: false });
    rect(-180, 360, 420, 150, { wash: '#8a8478', washA: 1, w: 2.2, col: '#2a2a26', shade: { gap: 6, a: 0.18, col: '#2a2a26', ang: 0 } }); for (let i = 0; i < 12; i++) rect(-180 + i * 36, 340, 20, 24, { wash: '#8a8478', washA: 1, w: 1.6, col: '#2a2a26' });
    for (const x of [-140, 180]) { rect(x - 40, 250, 80, 260, { wash: '#7e786c', washA: 1, w: 2.2, col: '#2a2a26' }); poly([[x - 50, 252], [x, 170], [x + 50, 252]], { wash: '#4a5a6a', washA: 1, w: 2, col: '#1a2228' }); blob([[x - 46, 250], [x, 200], [x + 46, 250]], { wash: '#f4f6f8', washA: 0.85, line: false }); }
    for (let i = 0; i < 6; i++) rect(-150 + i * 64, 410, 14, 22, { wash: '#2a2a26', washA: 0.8, line: false }); haze('#dfe4e6', 0.22);
  }
  function house(x, base, w, h, col, seed, t) {                         // каменный дом с крутой крышей под снегом, трубой и дымом
    const r = rng(seed); const wl = rect(x, base - h, w, h, { wash: col, washA: 1, w: 2.2, col: '#2a2016', key: seed }); shadeG(wl.path, x + w, 0, x, 0, '#4a3a2a', 0.4);
    const roof = poly([[x - 14, base - h], [x + w / 2, base - h - w * 0.7], [x + w + 14, base - h]], { wash: '#5a3a2a', washA: 1, w: 2.2, col: '#1e120a' });
    blob([[x - 16, base - h + 4], [x + w / 2, base - h - w * 0.7 - 6], [x + w + 16, base - h + 4], [x + w * 0.7, base - h - 10], [x + w * 0.3, base - h - 6]], { wash: '#f8fafc', washA: 1, w: 1.6, col: '#8a9aa8' });
    for (let k = 0; k < 2; k++) { const wx = x + w * (0.22 + k * 0.44), wy = base - h * 0.62; rect(wx, wy, w * 0.16, h * 0.26, { wash: '#f2c060', washA: 1, w: 1.8, col: '#2a1a0a' }); glow(wx + w * 0.08, wy + h * 0.13, 40, 'rgba(255,190,90,1)', 0.35); }
    rect(x + w * 0.42, base - h * 0.34, w * 0.16, h * 0.34, { wash: '#4a2a14', washA: 1, w: 1.8, col: '#1e120a' });
    const cx = x + w * 0.72, cy = base - h - w * 0.36; rect(cx, cy - 50, 22, 60, { wash: '#6a5a4a', washA: 1, w: 1.6, col: '#1e120a' });
    for (let i = 0; i < 5; i++) { const ph = (t * 0.3 + i / 5) % 1; ell(cx + 11 + ph * 60 + Math.sin(t + i) * 10, cy - 60 - ph * 220, 16 + ph * 40, 12 + ph * 26, { wash: '#e8eaec', washA: 0.5 * (1 - ph), line: false }); }
  }
  function skater(x, y, s, t, k) {                                      // конькобежец в широкополой шляпе, скользит
    const sx = x + ((t * (60 + k * 20) + k * 300) % 1500) - 300; push(sx, y, s, 0.12);
    human(0, 0, 1, t, { body: ['#3a2a3a', '#6a2a2a', '#2a3a5a', '#4a4a2a'][k % 4], legs: '#2a2420', hat: k % 2 ? 'fur' : 'cap', hatCol: '#1a1a1a', armL: 'swing', armR: 'swing', face: 'smile', seed: 60 + k, skin: '#e8c4a0' });
    pencil([[-34, 4], [30, 4]], { w: 4, col: '#8a9096', pass2: false }); pop();
  }
  function fisher(t) {                                                  // рыбак у лунки: пустая леска
    const pull = clamp((t - EV.ms_frozen) / 0.6); ell(170, 1520, 90, 22, { wash: '#2a3a48', washA: 1, w: 2, col: '#1a2228' });
    human(110, 1500, 0.95, t, { body: '#5a4a3a', legs: '#3a3028', hat: 'fur', hatCol: '#4a3a2a', armL: 'hold', armR: pull > 0 ? 'up' : 'hold', face: pull > 0.5 ? 'angry' : 'calm', seed: 70, beard: 'short', look: 0.4 });
    const tip = [150 + pull * 30, 1240 - pull * 80]; pencil([[130, 1300], tip], { w: 4, col: '#6a4424', pass2: false }); pencil([tip, [180, 1520 - pull * 120]], { w: 1.2, col: '#2a2a2a', a: 0.7, pass2: false });
    if (pull > 0.6) bubbleTag('0 рыб', 260, 1250, t, EV.ms_frozen + 0.4, '#3a5a7a', 40, 0.05);
  }
  function fire(t) {                                                    // костёр и сковорода с картофельными рыбками
    for (let i = 0; i < 5; i++) pencil([[260 + i * 30, 1540], [300 + i * 10, 1500]], { w: 12, col: '#4a2a14' });
    for (let i = 0; i < 4; i++) { const f = flick(t, i); blob([[250 + i * 30, 1540], [260 + i * 30, 1500 - 40 * f], [276 + i * 30, 1460 - 60 * f], [292 + i * 30, 1504 - 30 * f], [300 + i * 30, 1540]], { wash: i % 2 ? '#ffb030' : '#ff7a20', washA: 0.95, line: false }); }
    glow(320, 1500, 260, 'rgba(255,150,60,1)', 0.45);
    pan(330, 1460, 0.85, t, { R: 140, items: () => { if (t > EV.ms_potato - 0.2) for (let k = 0; k < 4; k++) potatoFish(-70 + k * 46, -6 + (k % 2) * 10, 0.42, 0.3 * (k - 1.5) + Math.sin(t * 8 + k) * 0.05, { key: 8420 + k }); } });
    if (t > EV.ms_potato) steam2(330, 1380, t, 4, 0.5, 42);
  }
  function ice(t) {                                                     // лёд Мааса: блики, трещины, иней ползёт от «замёрз»
    rect(-600, 1120, 2300, 900, { wash: '#c8d8e2', washA: 1, w: 2, col: '#5a6a78', key: 8430 }); vgrad(1120, 2000, ['rgba(160,190,210,0.6)', 'rgba(230,240,246,0.2)']);
    for (let i = 0; i < 14; i++) { const r = rng(8431 + i), x = -300 + r() * 1700, y = 1180 + r() * 600; pencil([[x, y], [x + 80 + r() * 160, y + (r() - 0.5) * 30]], { w: 2.4, col: '#ffffff', a: 0.7, pass2: false }); }
    const fr = clamp((t - EV.ms_frozen) / 0.8); if (fr > 0) for (let i = 0; i < 18; i++) { const r = rng(8440 + i), a = r() * 3.14 + 3.14, L = fr * (120 + r() * 300); pencil([[540, 1500], [540 + Math.cos(a) * L, 1500 + Math.sin(a) * L * 0.3 + 60]], { w: 2, col: '#ffffff', a: 0.8, pass2: false }); }
  }
  WORLD.meuse = (t, u, cat) => {
    lay(34, () => { sky(t); citadel(t); });
    lay(14, () => { for (let i = 0; i < 6; i++) house(-260 + i * 270, 1120, 190 + (i % 3) * 30, 220 + (i % 2) * 60, ['#b8a888', '#9a8a70', '#c8b898'][i % 3], 8450 + i, t); for (let i = 0; i < 9; i++) { const x = -360 + i * 210; pencil([[x, 1120], [x + 6, 940]], { w: 8, col: '#3a2a1e' }); for (let k = 0; k < 6; k++) pencil([[x + 4, 960 + k * 26], [x + (k % 2 ? 50 : -46), 930 + k * 26]], { w: 3, col: '#3a2a1e', pass2: false }); } haze('#e4e8ea', 0.12); });
    lay(5, () => { ice(t); for (let k = 0; k < 4; k++) skater(0, 1260 + k * 30, 0.8, t, k); haze('#e8ecee', 0.06); });
    lay(1.6, () => { fisher(t); human(980, 1480, 0.9, t, { body: '#7a2a2a', legs: '#3a2420', long: 1, hat: 'hood', hatCol: '#d8d0c0', armL: 'hold', armR: t > EV.ms_potato ? 'point' : 'hold', face: t > EV.ms_potato ? 'grin' : 'calm', seed: 72, flip: -1, look: -0.6, skin: '#f0c8a8' }); });
    lay(1, () => { cat(); });
    lay(0.9, () => { fire(t); if (t > EV.ms_swap - 0.05 && t < EV.ms_swap + 0.5) puffAt(t); });
    lay(0.6, () => { motes(14, [-200, -200, 1300, 2000], '#ffffff', t, 5, { sp: 120, vx: 30, sz: 9, a: 0.7 }); });
  };
  function puffAt(t) { const k = (t - EV.ms_swap) / 0.5; for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; ell(780 + Math.cos(a) * 60 * k, 1060 + Math.sin(a) * 60 * k, 30 * (1 - k) + 10, 26 * (1 - k) + 8, { wash: '#ffffff', washA: 0.8 * (1 - k), line: false }); } }
  PROPS.realFishP = () => { push(0, -50, 0.9, -0.4); const p = blob([[-70, 0], [-40, -24], [10, -28], [44, -10], [64, -30], [70, 0], [64, 30], [44, 10], [10, 28], [-40, 24]], { wash: '#9aa8b0', washA: 1, w: 2.2, col: '#2a3238', key: 7360 }); shadeG(p.path, 0, 28, 0, -20, '#4a5a64', 0.5); ell(-44, -6, 6, 6, { wash: '#ffffff', washA: 1, w: 1.2 }); ell(-43, -5, 3, 3, { wash: '#000', washA: 1, line: false }); for (let k = 0; k < 4; k++) pencil([[-20 + k * 14, -16], [-12 + k * 14, 0], [-20 + k * 14, 16]], { w: 1.4, col: '#5a6a74', a: 0.6, pass2: false }); pop(); };
  DIR.meuse = {
    outfit: 'dutchA', light: { side: 1, rim: '#ffd8a0' }, grade: ['#a8c8e0', 0.1],
    act: () => [[S0.meuse, 'talk'], [EV.ms_frozen, 'cold'], [EV.ms_swap - 0.3, 'suspicious'], [EV.ms_swap + 0.2, 'awe'], [EV.ms_potato + 0.3, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 680, y: 1600, s: 1.05, look: t < EV.ms_frozen ? [-0.4, 0] : t < EV.ms_swap ? [-0.8, 0.2] : [-0.6, 0.4],
      hand: t > EV.ms_frozen - 0.2 ? [110, -330] : [80, -180], prop: t > EV.ms_frozen - 0.2 ? (t < EV.ms_swap ? 'realFishP' : 'fishP') : undefined, propAng: -0.2, handF: [-100, -170], frost: t > EV.ms_frozen && t < EV.ms_swap ? 0.6 : 0, chatter: t > EV.ms_frozen && t < EV.ms_swap }),
    cam: () => [[S0.meuse, 540, 760, 0.05], [S0.meuse + 1.4, 560, 1000, 0.12], [EV.ms_frozen, 500, 1120, 0.18, 'x'], [EV.ms_swap - 0.1, 620, 1080, 0.3], [EV.ms_potato + 0.2, 480, 1080, 0.28], [S1.meuse, 470, 1090, 0.32]]
  };
  // ---------------------------------------------------------------- переход: фри ломается — кадр суда разламывается по неровному излому
  TRANS_IN.meuse = { a: 0.08, b: 0.5, runA: 0, fx(k, t, A, B) {
    drawBuf(B, 1.12 - 0.12 * k, 540, 960); const ke = Math.pow(k, 1.6), crack = [];
    for (let i = 0; i <= 14; i++) { const r = rng(2500 + i); crack.push([520 + (r() - 0.5) * 70 + (i % 2 ? 20 : -20), -40 + i * 2000 / 14]); }
    for (const sd of [-1, 1]) { const P = new Path2D(); P.moveTo(sd < 0 ? -200 : 1280, -100); crack.forEach(([x, y]) => P.lineTo(x, y)); P.lineTo(sd < 0 ? -200 : 1280, 2100); P.closePath();
      const dx = sd * ke * 700, dy = ke * ke * 900, rot = sd * ke * 0.35;
      if (k < 0.98) { ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.translate(540 + dx, 960 + dy); ctx.rotate(rot); ctx.translate(-540, -960); ctx.clip(P); ctx.drawImage(A, 0, 0); ctx.restore(); } }
    scr(() => { if (k < 0.5) for (let i = 0; i < 30; i++) { const rr = rng(2520 + i), y = rr() * 1920, d = k * (200 + rr() * 500) * (rr() > 0.5 ? 1 : -1); ell(540 + d, y + k * k * 600, 6 + rr() * 6, 5, { wash: rr() > 0.5 ? FR.fry : FR.fryL, washA: 1 - k * 2, w: 1, col: '#5a2e08', a: 1 - k * 2 }); }
      if (k > 0.1 && k < 0.25) whiteOut((0.25 - k) * 3, '255,236,190'); });
  } };
})();
