/* 028 — `zang`: «Герой — австриец Август Цанг: в 1839-м он открыл в Париже венскую пекарню.» Париж 1839, улица Ришелье, вечер: фасады
   с балкончиками и газовыми фонарями (главный свет — тёплая витрина пекарни, второй — голубые сумерки), вывеска «BOULANGERIE VIENNOISE»
   с чёрно-жёлтым австрийским флажком, витрина полна рогаликов, очередь парижан в цилиндрах и капорах, фиакр с лошадью, мальчишка с
   газетами, кот на карнизе. Том — австрийский офицер Цанг в доломане с фартуком. По словам: «Герой» — Том отдаёт честь; «Цанг:» —
   латунная табличка с именем; «1839-м» — плашка «1839 · ул. Ришелье, 92»; «открыл» — с вывески слетает покрывало; «Париже» — толпа
   ахает и рвётся внутрь; «пекарню.» — звенит колокольчик, Том протягивает рогалик даме. Переход В сцену: деревянные ставни-жалюзи
   поднимаются снизу вверх. */
(() => {
  EV.zg_hero = wtw('s6', 'Герой');
  EV.zg_name = wtw('s6', 'Цанг:');
  EV.zg_year = wtw('s6', '1839-м');
  EV.zg_open = wtw('s6', 'открыл');
  EV.zg_paris = wtw('s6', 'Париже');
  EV.zg_shop = wtw('s6', 'пекарню.');
  KEYW.push('Цанг:');
  const unveil = t => sm(clamp((t - EV.zg_open) / 0.5));

  function street(t) {                                                    // сумеречное небо, фасады с балконами, газовые фонари, фиакр
    vgrad(-500, 900, ['#2a3a6a', '#7a6a9a', '#e8a898']); for (let i = 0; i < 30; i++) { const r = rng(28800 + i); ell(-400 + r() * 1800, -400 + r() * 300, 2, 2, { wash: '#f8f4e0', washA: 0.6, line: false }); }
    for (let i = 0; i < 6; i++) { const x = -450 + i * 330, h = 560; push(x, 900, 1); rect(-160, -h, 320, h, { wash: ['#e8dcc4', '#dccfb4', '#f0e4cc'][i % 3], washA: 1, w: 2, col: '#5a4a3a', key: 28810 + i }); poly([[-170, -h], [-130, -h - 90], [130, -h - 90], [170, -h]], { wash: '#5a6a7a', washA: 1, w: 2 }); for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) { rect(-120 + c * 90, -h + 50 + r * 140, 50, 90, { wash: (r + c + i) % 3 ? '#ffd890' : '#3a4a5a', washA: 1, w: 1.4, col: '#f4f0e8' }); pencil([[-128 + c * 90, -h + 140 + r * 140], [-62 + c * 90, -h + 140 + r * 140]], { w: 4, col: '#2a2a2a', pass2: false }); for (let b = 0; b < 4; b++) pencil([[-124 + c * 90 + b * 18, -h + 140 + r * 140], [-124 + c * 90 + b * 18, -h + 160 + r * 140]], { w: 2, col: '#2a2a2a', pass2: false }); } pop(); }
    for (const x of [-100, 1200]) { push(x, 1300, 1); pencil([[0, 0], [0, -500]], { w: 10, col: '#1a1a1a', pass2: false }); blob([[-34, -500], [-26, -580], [26, -580], [34, -500]], { wash: '#ffe0a0', washA: 0.9, w: 3, col: '#1a1a1a' }); glow(0, -540, 160, 'rgba(255,210,140,1)', 0.3); pop(); }
    push(1050 + Math.sin(t * 0.4) * 10, 1150, 0.8); rect(-160, -140, 260, 130, { wash: '#2a2a3a', washA: 1, w: 2.4 }); ell(-110, 0, 50, 50, { wash: '#000000', washA: 0, w: 5, col: '#4a3a2a' }); ell(60, 0, 50, 50, { wash: '#000000', washA: 0, w: 5, col: '#4a3a2a' }); blob([[120, -60], [160, -150], [240, -160], [260, -100], [220, -40]], { wash: '#6a4a2a', washA: 1, w: 2 }); for (const x of [150, 230]) pencil([[x, -60], [x + Math.sin(t * 4 + x) * 10, 20]], { w: 10, col: '#6a4a2a', pass2: false }); pop();
  }
  function shop(t) {                                                      // фасад пекарни: вывеска с покрывалом, витрина рогаликов, дверь, флажок, табличка
    push(500, 0, 1); rect(-380, 700, 760, 700, { wash: '#3a2a4a', washA: 1, w: 3, col: '#140a1a' }); const win = rect(-340, 900, 420, 360, { wash: '#ffe0a0', washA: 1, w: 6, col: '#c8a040', key: 28820 }); glow(-130, 1080, 320, 'rgba(255,210,140,1)', 0.32); for (let r = 0; r < 3; r++) for (let i = 0; i < 5; i++) kipferl(-300 + i * 80, 990 + r * 100, 0.24, t, { key: 28821 + r * 5 + i }); pencil([[-130, 900], [-130, 1260]], { w: 5, col: '#c8a040', pass2: false });
    rect(120, 920, 220, 480, { wash: '#5a2a1a', washA: 1, w: 3, col: '#1a0a04' }); for (let i = 0; i < 2; i++) rect(140, 940 + i * 220, 180, 200, { wash: '#6a3a24', washA: 1, w: 2 }); ell(300, 1180, 10, 10, { wash: '#c8a040', washA: 1, w: 1.4 });
    const sw = t > EV.zg_shop && t < EV.zg_shop + 0.8 ? Math.sin(t * 20) * 0.3 : 0; push(230, 900, 1, sw); ell(0, 20, 18, 22, { wash: '#d8b040', washA: 1, w: 2 }); pop();
    rect(-380, 720, 760, 140, { wash: '#1a1a1a', washA: 1, w: 3, col: '#c8a040' }); const u = unveil(t); txt('BOULANGERIE VIENNOISE', 0, 810, 54, { font: 'Osw', col: '#e8c860', a: u }); if (u < 1) { push(0, 720 - u * 400, 1, u * 0.4); blob([[-390, 0], [390, 0], [380, 150], [0, 170], [-380, 150]], { wash: '#8a2a2a', washA: 1, w: 2.4 }); for (let i = 0; i < 6; i++) pencil([[-360 + i * 140, 0], [-350 + i * 140, 150]], { w: 3, col: '#5a1a1a', pass2: false }); pop(); }
    push(380, 700, 1); pencil([[0, 0], [100, -60]], { w: 4, col: '#3a2a1a', pass2: false }); for (let i = 0; i < 2; i++) rect(100, -60 + i * 30, 120, 30, { wash: i ? '#f0c020' : '#1a1a1a', washA: 1, line: false }); pop();
    if (t > EV.zg_name) { push(-30, 1300, popK(t, EV.zg_name, 0.35)); rect(-90, -30, 180, 60, { wash: '#c8a040', washA: 1, w: 2, col: '#6a4a10' }); txt('A. ZANG', 0, 12, 34, { font: 'Osw', col: '#2a1a0a' }); pop(); }
    pop();
  }
  function queue(t) {                                                     // очередь парижан: цилиндры, капоры, мальчишка с газетами; на «Париже» — рвутся внутрь
    const rush = t > EV.zg_paris ? clamp((t - EV.zg_paris) / 1.2) : 0;
    for (let i = 0; i < 4; i++) { const x = 1100 - i * 150 - rush * 120 * (i + 1) * 0.5; human(x, 1300 + (i % 2) * 14, 0.95, t, { body: ['#2a2a3a', '#8a3a5a', '#3a4a2a', '#5a3a2a'][i], legs: '#1a1a1a', hair: ['#3a2010', '#c88a3a', '#1a1410', '#8a5a2a'][i], face: t > EV.zg_open ? (rush > 0 ? 'grin' : 'shock') : 'calm', armL: 'hold', armR: rush > 0 ? 'up' : 'hold', look: -0.6, seed: 28830 + i, flip: -1, long: i % 2, hat: i % 2 ? 'scarf' : 'cap', hatCol: ['#1a1a1a', '#f4c0d0', '#1a1a1a', '#e8e0d0'][i] }); if (i % 2 === 0) { push(x, 1300 - 330 * 0.95, 0.95); rect(-30, -70, 60, 64, { wash: '#1a1a1a', washA: 1, w: 1.4 }); rect(-44, -10, 88, 10, { wash: '#1a1a1a', washA: 1, w: 1.4 }); pop(); } }
    human(-40, 1320, 0.75, t, { body: '#6a5a3a', legs: '#3a2a1a', hair: '#c88a3a', face: 'grin', armL: 'up', armR: 'hold', look: 0.5, seed: 28835, hat: 'cap', hatCol: '#3a3a3a', prop: 'scroll' });
  }
  function pavement(t) {                                                  // мостовая, лужи с отражениями фонарей, корзина рогаликов, ящик
    const p = rect(-500, 1440, 2200, 600, { wash: '#6a6a74', washA: 1, w: 3, col: '#2a2a34', key: 28840 }); ctx.save(); ctx.clip(p.path); for (let r = 0; r < 8; r++) for (let i = 0; i < 22; i++) ell(-480 + i * 100 + (r % 2) * 50, 1460 + r * 60, 46, 24, { wash: ['#5a5a64', '#74747e'][(i + r) % 2], washA: 1, w: 1, col: '#3a3a44' }); ctx.restore(); for (const x of [-100, 1200]) ell(x, 1560, 90, 18, { wash: '#ffd890', washA: 0.4, line: false });
    push(1000, 1450, 1); blob([[-90, 0], [-100, -70], [100, -70], [90, 0]], { wash: '#c89a5a', washA: 1, w: 2.4 }); for (let i = 0; i < 4; i++) kipferl(-60 + i * 40, -80 - (i % 2) * 10, 0.22, t, { key: 28841 + i }); pop();
    castShadow(640, 1450, 340, 100, -0.6, 0.28);
  }
  WORLD.zang = (t, u, cat) => {
    lay(12, () => { street(t); haze('#a898c8', 0.06); });
    lay(3, () => { shop(t); });
    lay(2.4, () => { queue(t); lightPool(400, 1300, 520, 110, 'rgba(255,210,140,1)', 0.32); });
    lay(1, () => { lightPool(560, 1460, 660, 120, 'rgba(255,215,150,1)', 0.34); cat(); pavement(t); });
    lay(0.65, () => { push(-150, 200, 1.4); pencil([[0, -300], [0, 300]], { w: 8, col: '#1a1a1a', pass2: false }); pencil(spline([[0, 0], [60, -30], [120, 0]], false, 4), { w: 6, col: '#1a1a1a', pass2: false }); for (let i = 0; i < 5; i++) ell(20 + i * 24, 30 + (i % 2) * 10, 14, 10, { wash: '#5a8a3a', washA: 1, line: false }); pop();
      push(1230, 1950, 1.4); rect(-80, -140, 160, 140, { wash: '#8a5a2a', washA: 1, w: 3 }); txt('WIEN', 0, -60, 40, { font: 'Osw', col: '#2a1a0a' }); pop();
      motes(12, [-200, 300, 1300, 1500], '#ffe8c0', t, 28890, { sp: 2, sz: 3, a: 0.35, wob: 4 }); moodDark(560, 1000, 520, 1500, '#0a0818', 0.45); });
  };
  DIR.zang = {
    outfit: 'hussarA', light: { side: -1, rim: '#ffd8a0' }, grade: ['#c8a0c8', 0.05],
    act: () => [[S0.zang, 'proud'], [EV.zg_name, 'smug'], [EV.zg_open, 'grin'], [EV.zg_paris, 'laugh'], [EV.zg_shop, 'proud']],
    pose: (t, u, b) => { const salute = t > EV.zg_hero && t < EV.zg_name + 0.3, give = t > EV.zg_shop;
      return Object.assign(b, { x: 720, y: 1600, s: 1.15, flip: false, look: t > EV.zg_open && t < EV.zg_shop ? [-0.6, -0.6] : [0.5, 0.2], hand: salute ? [60, -400] : give ? [250, -300] : [150, -230], handF: [-90, -230], prop: give ? 'kipferlP' : undefined, tailUp: t > EV.zg_paris }); },
    hud: t => infoPlate(t, EV.zg_year - 0.1, S1.zang - 0.15, { kind: 'num', title: 'ВЕНСКАЯ ПЕКАРНЯ ЦАНГА', big: '1839', sub: 'Париж, ул. Ришелье, 92' }),
    cam: () => [[S0.zang, 540, 1020, 0.22], [EV.zg_open, 520, 1020, 0.24], [EV.zg_shop, 620, 1120, 0.29], [S1.zang, 630, 1130, 0.3]]
  };
  // ---------------------------------------------------------------- переход: деревянные ставни-жалюзи поднимаются снизу вверх
  TRANS_IN.zang = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), Y = lerp(1960, -200, e); drawBuf(A, 1, 540, 960);
    scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(-10, Y, 1100, 2200); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore();
      for (let i = 0; i < 7; i++) { const y = Y - 30 - i * 26 * (1 - e * 0.5); rect(-10, y, 1100, 24, { wash: ['#6a4426', '#7a5434'][i % 2], washA: 1, w: 2, col: '#2a1408' }); } ell(540, Y - 60, 30, 14, { wash: '#c8a040', washA: 1, w: 2 }); });
  } };
})();
