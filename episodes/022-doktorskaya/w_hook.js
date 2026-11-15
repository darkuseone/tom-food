/* 022 — `hook`: «Эту колбасу прописывали больным. От какой болезни? Спорим — не угадаешь! / Откусим историю!» Кабинет участкового врача поликлиники:
   низ стены — мятно-голубой кафель, верх — кремовая масляная краска; окно с весенним двором (тополя, пятиэтажки с окнами, голуби, облака), герань на
   подоконнике, таблица для проверки зрения, плакат «МОЙТЕ РУКИ», часы, раковина с зеркалом, вешалка с пальто; шкаф со склянками, ростомер, кушетка
   с клеёнкой, ширма; медсестра пишет в карточках, в дверях пациент с подвязанной щекой, за матовым стеклом двери — очередь. На столе врача (герой-предмет):
   рецептурный бланк «Rp.: Колбаса „Докторская“», батон в оболочке на бумаге, нож, тарелка с бутербродами, стакан чая в подстаканнике, лампа, стопка карт.
   Том — врач в белом халате, шапочке с крестом, стетоскоп, фартук. По словам: «прописывали» — Том ставит размашистую подпись на рецепте, штамп «ХЛОП»;
   «больным.» — пациент в дверях кашляет и изумлённо открывает рот; «болезни?» — над столом вопрос, Том щурится; «Спорим» — Том поднимает бутерброд;
   «историю!» — укус: хруст, крошки, рецепт слетает со стола. Главный свет — окно слева (холодный весенний), второй — тёплая настольная лампа. */
(() => {
  EV.hk_rx = wtw('h1', 'прописывали');
  EV.hk_ill = wtw('h1', 'больным.');
  EV.hk_q = wtw('h1', 'болезни?');
  EV.hk_bet = wtw('h1', 'Спорим');
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_rx + 0.35, 0.15, 6], [EV.hk_bite, 0.18, 8]);
  KEYW.push('прописывали', 'болезни?');
  function sky(t) {                                                      // весенний двор: небо, облака, тополя, пятиэтажки, голуби
    vgrad(-500, 700, ['#7ab0d8', '#b8d8ec', '#eef2e8']);
    for (let i = 0; i < 4; i++) { const x = ((-300 + i * 300 + t * 10) % 1300) - 300; blob([[x, -260 + i * 50], [x + 70, -300 + i * 50], [x + 180, -290 + i * 50], [x + 240, -250 + i * 50]], { wash: '#ffffff', washA: 0.75, line: false }); }
    for (const [bx, bw, bh, c] of [[-380, 300, 420, '#d8cfc0'], [-40, 340, 360, '#c8bca8'], [330, 360, 460, '#e0d6c4']]) { const b = rect(bx, 520 - bh, bw, bh, { wash: c, washA: 1, w: 1.6, col: '#6a6058' }); shadeG(b.path, bx + bw, 0, bx, 0, '#8a8070', 0.35); windows(bx + 16, 540 - bh, bw - 32, bh - 50, Math.round(bw / 46), Math.round(bh / 60), bx + 22400, 0.3, '#fff0c0', '#7aa0c8', 0.85); rect(bx - 6, 512 - bh, bw + 12, 14, { wash: '#8a7a6a', washA: 1, w: 1.2 }); }
    for (let i = 0; i < 3; i++) { const x = -200 + i * 360; pencil([[x, 600], [x + 10, 80]], { w: 14, col: '#5a4a3a' }); for (let q = 0; q < 6; q++) blob([[x - 70 + q * 6, 80 + q * 70], [x - 50, 20 + q * 70], [x + 10, -10 + q * 70], [x + 70 - q * 6, 30 + q * 70], [x + 60, 110 + q * 70], [x - 10, 130 + q * 70]], { wash: q % 2 ? '#8ab860' : '#a8cc78', washA: 0.95, w: 1.2, col: '#4a6a2a' }); }
    for (let i = 0; i < 3; i++) { const k = (t * 0.12 + i * 0.33) % 1, x = -300 + k * 1000, y = -120 + Math.sin(k * 8 + i) * 40; pencil([[x - 12, y], [x, y - 7], [x + 12, y]], { w: 2.6, col: '#4a4a5a', pass2: false }); }
  }
  function wall(t) {                                                     // кафель + краска, окно, таблица зрения, плакат, часы, раковина, вешалка
    vgrad(-800, 600, ['#e8e0c8', '#f2ead4', '#e4dcc4']);
    const tl = rect(-600, 600, 2400, 900, { wash: '#a8d4d0', washA: 1, line: false, key: 22401 }); shadeG(tl.path, 300, 600, 300, 1500, '#5a8a8a', 0.35);
    for (let y = 600; y < 1500; y += 50) pencil([[-600, y], [1800, y]], { w: 2, col: '#6a9a98', a: 0.6, pass2: false }); for (let x = -600; x < 1800; x += 50) pencil([[x, 600], [x, 1500]], { w: 2, col: '#6a9a98', a: 0.5, pass2: false });
    const r = rng(22402); for (let i = 0; i < 26; i++) { const x = -600 + Math.floor(r() * 48) * 50, y = 600 + Math.floor(r() * 18) * 50; rect(x + 4, y + 4, 42, 42, { wash: '#ffffff', washA: 0.18, line: false }); }
    rect(-600, 586, 2400, 20, { wash: '#5a8a8a', washA: 1, w: 1.6, col: '#2a4a4a' });
    push(160, 140, 1); const w = rect(-300, -420, 600, 720, { wash: '#7ab0d8', washA: 1, w: 14, col: '#f4f2ea', key: 22403 }); ctx.save(); ctx.clip(w.path); push(0, -40, 1); sky(t); pop(); ctx.restore();
    pencil([[0, -420], [0, 300]], { w: 12, col: '#f4f2ea' }); pencil([[-300, -120], [300, -120]], { w: 12, col: '#f4f2ea' }); rect(-330, 300, 660, 36, { wash: '#f4f2ea', washA: 1, w: 2, col: '#8a8a7a' });
    for (const [px, c] of [[-220, '#d8243a'], [-90, '#f06a8a'], [60, '#d8243a'], [200, '#f06a8a']]) { push(px, 300, 1); const pt = rect(-30, -56, 60, 56, { wash: '#b0643a', washA: 1, w: 1.6, col: '#4a2008' }); shadeG(pt.path, 30, 0, -30, 0, '#5a2008', 0.4); for (let i = 0; i < 6; i++) { pencil([[(i - 2.5) * 8, -56], [(i - 2.5) * 16, -110 - (i % 2) * 14]], { w: 3, col: '#3a7a3a', pass2: false }); ell((i - 2.5) * 16, -112 - (i % 2) * 14, 14, 11, { wash: '#5a9a4a', washA: 1, w: 1, col: '#2a4a1a' }); } for (let i = 0; i < 4; i++) ell(-16 + i * 11, -150 - (i % 2) * 10, 10, 10, { wash: c, washA: 1, w: 1, col: '#6a0a1a' }); pop(); }
    pop();
    push(930, 330, 0.8); const ch = rect(-110, -200, 220, 330, { wash: '#fbfaf4', washA: 1, w: 2, col: '#5a5a5a', key: 22404 }); shadeG(ch.path, 110, 130, -110, -200, '#c8c8b8', 0.3);
    [['Ш Б', 54], ['М Н К', 40], ['Ы М Б Ш', 30], ['Б Ы Н К М', 22], ['И Н Ш М К', 16], ['Н Ш Ы И К Б', 12]].forEach(([s, z], i) => txt(s, 0, -160 + i * 48, z, { font: 'Osw', col: '#1a1a1a' })); pop();
    push(1240, 330, 0.85); const ps = rect(-120, -170, 240, 300, { wash: '#f4ecd0', washA: 1, w: 2, col: '#6a5a3a', key: 22405 }); shadeG(ps.path, 120, 130, -120, -170, '#b8a880', 0.3);
    txt('МОЙТЕ', 0, -120, 40, { font: 'Osw', col: '#c8241e' }); txt('РУКИ', 0, -76, 40, { font: 'Osw', col: '#c8241e' }); txt('перед едой!', 0, -40, 20, { font: 'Hand', col: '#2a2a2a' });
    for (const sd of [-1, 1]) { blob([[sd * 70, 20], [sd * 30, -10], [sd * 10, 40], [sd * 40, 90], [sd * 80, 70]], { wash: '#f0c8a0', washA: 1, w: 1.6, col: '#6a3a1a' }); } for (let i = 0; i < 8; i++) ell(-60 + i * 17, 40 + Math.sin(t * 3 + i) * 6, 6, 6, { wash: '#bfe8f8', washA: 0.9, w: 1, col: '#4a8aa8' }); pop();
    push(560, 170, 0.8); const ck = ell(0, 0, 66, 66, { wash: '#fbf8ee', washA: 1, w: 3, col: '#3a3a3a', key: 22406 }); ell(0, 0, 74, 74, { wash: 'rgba(0,0,0,0)', washA: 0, w: 8, col: '#8a2a2a' }); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; pencil([[Math.cos(a) * 52, Math.sin(a) * 52], [Math.cos(a) * 60, Math.sin(a) * 60]], { w: i % 3 ? 2 : 4, col: '#2a2a2a', pass2: false }); }
    pencil([[0, 0], [Math.cos(t * 0.5 - 1.57) * 48, Math.sin(t * 0.5 - 1.57) * 48]], { w: 2, col: '#c8241e', pass2: false }); pencil([[0, 0], [30, -20]], { w: 5, col: '#1a1a1a', pass2: false }); pencil([[0, 0], [-6, -40]], { w: 3.4, col: '#1a1a1a', pass2: false }); pop();
    push(1380, 400, 1); const mr = rect(-90, -240, 180, 220, { wash: '#c8dce4', washA: 1, w: 4, col: '#8a8a8a', key: 22407 }); shadeG(mr.path, -90, -240, 90, -20, '#ffffff', 0.5); pencil([[-60, -220], [-10, -60]], { w: 6, col: '#ffffff', a: 0.5, pass2: false });
    const sk = blob([[-110, 60], [110, 60], [96, 150], [-96, 150]], { wash: '#f6f6f2', washA: 1, w: 2.4, col: '#6a6a6a' }); shadeG(sk.path, 110, 0, -110, 0, '#a8a8a8', 0.4); pencil([[0, 60], [0, 20], [30, 10]], { w: 8, col: '#a8a8b0', pass2: false }); rect(-30, 30, 22, 22, { wash: '#f4c840', washA: 1, w: 1.2, col: '#6a4a08' }); pencil([[-40, 190], [-40, 600]], { w: 8, col: '#8a8a8a', pass2: false }); rect(70, 40, 60, 20, { wash: '#ffffff', washA: 1, w: 1.2 }); pop();
    push(1660, 200, 1); rect(-100, -20, 200, 14, { wash: '#6a4a2a', washA: 1, w: 1.6, col: '#2a1a0a' }); for (const hx of [-60, 0, 60]) pencil([[hx, -10], [hx, 20], [hx + 10, 30]], { w: 4, col: '#3a3a3a', pass2: false });
    const ct = blob([[-90, 20], [-40, 0], [40, 0], [80, 20], [96, 480], [-96, 480]], { wash: '#5a4a5a', washA: 1, w: 2.4, col: '#1a1a24', key: 22408 }); shadeG(ct.path, 96, 0, -40, 0, '#1a1a24', 0.45); for (let k = 0; k < 4; k++) nb(0, 80 + k * 80, 7, '#2a2a2a'); ell(70, -40, 50, 34, { wash: '#7a3a2a', washA: 1, w: 2, col: '#2a0a04' }); pop();
  }
  function room(t) {                                                     // шкаф со склянками, ростомер, кушетка, ширма, медсестра, дверь с очередью и пациентом
    const sh = t > EV.hk_ill && t < EV.hk_ill + 1.8;
    push(60, 1300, 1); const cb = rect(-150, -560, 300, 560, { wash: '#f2f2ec', washA: 1, w: 3, col: '#5a5a5a', key: 22410 }); shadeG(cb.path, 150, 0, -150, 0, '#a8a8a0', 0.4);
    for (let s = 0; s < 3; s++) { const y = -520 + s * 150; rect(-130, y, 260, 130, { wash: '#d8e8ec', washA: 0.5, w: 1.6, col: '#7a8a8a' }); for (let i = 0; i < 5; i++) { const x = -110 + i * 52, hb = 50 + ((i + s) % 3) * 16, c = ['#8a4a2a', '#e8e8e0', '#4a7a3a', '#b8a060', '#2a4a7a'][(i + s * 2) % 5]; const bt = rect(x, y + 124 - hb, 32, hb, { wash: c, washA: 0.85, w: 1.4, col: '#2a2a2a' }); rect(x + 4, y + 120 - hb, 24, 10, { wash: '#f4f0e0', washA: 1, w: 1 }); rect(x + 6, y + 124 - hb * 0.6, 20, 16, { wash: '#f8f4e8', washA: 1, w: 0.8 }); ell(x + 8, y + 132 - hb, 3, hb * 0.3, { wash: '#ffffff', washA: 0.4, line: false }); } } rect(-30, -90, 60, 50, { wash: '#f2f2ec', washA: 1, w: 1.4 }); txt('✚', 0, -56, 30, { font: 'Osw', col: '#d8242a' }); pop();
    push(-140, 1300, 1); pencil([[0, 0], [0, -620]], { w: 12, col: '#c8b890' }); for (let i = 0; i < 12; i++) pencil([[0, -40 - i * 50], [i % 2 ? 14 : 24, -40 - i * 50]], { w: 2, col: '#2a2a2a', pass2: false }); txt('180', 30, -560, 14, { font: 'Osw', col: '#2a2a2a' }); rect(-50, -440, 100, 10, { wash: '#a8986a', washA: 1, w: 1.4 }); rect(-60, -10, 120, 16, { wash: '#a8986a', washA: 1, w: 1.4 }); pop();
    push(1110, 1300, 1); const dr = rect(-140, -620, 280, 620, { wash: '#e8e0c8', washA: 1, w: 3, col: '#5a5040', key: 22411 }); shadeG(dr.path, 140, 0, -140, 0, '#a89a7a', 0.4); const gl = rect(-110, -580, 220, 250, { wash: '#d8e0e0', washA: 0.85, w: 2, col: '#5a5040' });
    ctx.save(); ctx.clip(gl.path); for (let i = 0; i < 4; i++) sil([[-140 + i * 70, -330], [-150 + i * 70, -440], [-130 + i * 70, -480], [-100 + i * 70, -470], [-90 + i * 70, -330]], '#7a8a8a', 0.5); ctx.restore();
    rect(-60, -300, 120, 40, { wash: '#f4f0e0', washA: 1, w: 1.4 }); txt('ТЕРАПЕВТ', 0, -274, 16, { font: 'Osw', col: '#2a2a2a' }); ell(110, -300, 12, 8, { wash: '#c8a040', washA: 1, w: 1.2 }); pop();
    human(980, 1300, 1.12, t, { body: '#5a6a5a', legs: '#3a3a3a', hair: '#c8c8c8', face: sh ? 'shock' : 'calm', armL: sh ? 'up' : 'hold', armR: 'down', look: -0.8, seed: 22412, flip: -1, hat: 'scarf', hatCol: '#f4f0e8' });
    push(980, 1300 - 330 * 1.12, 1); pencil([[-30, 14], [0, 40], [30, 14]], { w: 4, col: '#f4f0e8', pass2: false }); pop();
    if (sh) { const k = (t - EV.hk_ill) / 1.8; for (let i = 0; i < 3; i++) ell(930 - k * 80 - i * 20, 900 - i * 14 - k * 30, 10 + i * 4, 8 + i * 3, { wash: '#ffffff', washA: 0.5 * (1 - k), line: false }); }
    push(-260, 1300, 1); const cu = rect(-180, -150, 360, 70, { wash: '#7a3a2a', washA: 1, w: 2.4, col: '#2a0a04', key: 22413 }); shadeG(cu.path, 0, -150, 0, -80, '#c86a4a', 0.4); rect(-180, -170, 70, 40, { wash: '#8a4a3a', washA: 1, w: 2 }); for (const lx of [-160, 160]) pencil([[lx, -80], [lx, 0]], { w: 8, col: '#3a3a3a', pass2: false }); rect(-120, -166, 220, 18, { wash: '#f6f6f2', washA: 1, w: 1.2 }); pop();
    for (let i = 0; i < 3; i++) { const x = 1290 + i * 90; const p = rect(x, 700, 86, 600, { wash: '#f2f2ec', washA: 0.95, w: 2, col: '#7a7a72' }); shadeG(p.path, x + 86, 0, x, 0, '#b8b8b0', 0.35); pencil([[x, 690], [x + 86, 690]], { w: 6, col: '#a8a8b0', pass2: false }); }
    human(300, 1300, 1.05, t, { body: '#f4f4f0', bodyD: '#a8b0b0', legs: '#3a3a44', hair: '#7a4a2a', face: sh ? 'shock' : 'calm', armL: 'hold', armR: 'hold', look: sh ? 0.8 : -0.3, seed: 22414, flip: 1, hat: 'scarf', hatCol: '#ffffff' });
    push(330, 1150, 1); const nd = rect(-90, -20, 180, 30, { wash: '#8a5a3a', washA: 1, w: 2, col: '#2a1408' }); for (let i = 0; i < 4; i++) rect(-80 + i * 14, -60 + i * 4, 60, 44, { wash: ['#f4ecd0', '#e8dcb4', '#d8e4ec'][i % 3], washA: 1, w: 1, col: '#7a6a4a' }); pop();
  }
  function desk(t) {                                                     // стол врача: бланк, батон на бумаге, нож, тарелка с бутербродами, чай, лампа, карточки
    const tb = rect(-500, 1440, 2200, 700, { wash: '#8a5a32', washA: 1, w: 3, col: '#2a1408', key: 22420 }); shadeG(tb.path, 0, 1440, 0, 1900, '#3a1a08', 0.45);
    for (let i = 0; i < 10; i++) pencil([[-500, 1470 + i * 40], [1700, 1480 + i * 40]], { w: 2, col: '#5a3418', a: 0.35, pass2: false });
    const gl = rect(-200, 1446, 1400, 260, { wash: '#2a5a3a', washA: 0.9, w: 1.6, col: '#0a2a14' }); shadeG(gl.path, 0, 1446, 0, 1706, '#0a2a14', 0.35);
    rect(-500, 1432, 2200, 16, { wash: '#6a3a1a', washA: 1, w: 2, col: '#2a1008' });
    push(1180, 1480, 1); pencil([[0, 0], [0, -260]], { w: 8, col: '#3a5a3a', pass2: false }); pencil([[0, -260], [-60, -330]], { w: 7, col: '#3a5a3a', pass2: false }); const ls = blob([[-140, -330], [-100, -380], [-20, -380], [20, -330]], { wash: '#2a6a4a', washA: 1, w: 2.2, col: '#0a2a14', key: 22421 }); shadeG(ls.path, 0, -380, 0, -330, '#0a3a1a', 0.4); ell(-60, -330, 70, 10, { wash: '#fff2c0', washA: 1, line: false }); glow(-60, -320, 160, 'rgba(255,220,150,1)', 0.3); ell(0, 0, 50, 12, { wash: '#2a3a2a', washA: 1, w: 1.6 }); pop();
    lightPool(1100, 1560, 360, 90, 'rgba(255,214,150,1)', 0.35);
    push(940, 1560, 1); const pp = rect(-170, -40, 340, 90, { wash: '#efe4c8', washA: 1, w: 1.6, col: '#8a7a5a' }); shadeG(pp.path, 0, 50, 0, -40, '#b8a880', 0.3); pop();
    doktorLoaf(920, 1540, 0.62, 0.04, { key: 22422, cut: 1 }); for (let i = 0; i < 3; i++) doktorSlice(1120 + i * 22, 1590 - i * 6, 0.5, 0.2 + i * 0.3, { flat: 0.4, key: 22425 + i });
    push(1050, 1610, 1, -0.2); pencil([[0, 0], [140, 0]], { w: 14, col: '#c8c8d0', pass2: false }); pencil([[0, -4], [140, -4]], { w: 3, col: '#ffffff', a: 0.7, pass2: false }); rect(-90, -12, 90, 24, { wash: '#4a2a1a', washA: 1, w: 1.6 }); pop();
    push(300, 1560, 1); const pl = ell(0, 0, 130, 34, { wash: '#f6f4ec', washA: 1, w: 2, col: '#7a7a7a' }); ell(0, 0, 100, 24, { wash: 'rgba(0,0,0,0)', washA: 0, w: 2, col: '#2a5aa8' }); sandwichD(-40, -20, 0.6, -0.2, { key: 22430 }); sandwichD(40, -26, 0.6, 0.15, { key: 22431 }); pop();
    push(80, 1520, 1); rect(-24, -80, 48, 80, { wash: '#c8701a', washA: 0.8, w: 1.4, col: '#6a3a10' }); const ph = rect(-30, -44, 60, 44, { wash: '#b8b8c0', washA: 1, w: 1.6, col: '#3a3a44' }); metalG(ph.path, -10, -30, 40, '#ffffff', '#b8b8c4', '#5a5a68', 0.7); pencil(spline([[30, -36], [52, -24], [30, -8]], false, 4), { w: 4, col: '#8a8a94', pass2: false }); pencil([[10, -80], [24, -120]], { w: 3, col: '#c8c8d0', pass2: false }); pop(); steamWisps(80, 1420, 0.5, t, 2, 22432, 0.35);
    for (let i = 0; i < 5; i++) rect(500 + i * 4, 1500 - i * 10, 150, 90, { wash: ['#f4ecd0', '#e8d8a8', '#dfe8ef'][i % 3], washA: 1, w: 1.2, col: '#7a6a4a' }); txt('Иванов И.', 580, 1470, 14, { font: 'Hand', col: '#2a2a3a' });
    push(1300, 1560, 1); rect(-40, -40, 80, 40, { wash: '#2a2a2a', washA: 1, w: 1.4 }); for (const dx of [-20, 0, 20]) pencil([[dx, -40], [dx + 10, -100]], { w: 4, col: ['#2a5aa8', '#c8241e', '#2a2a2a'][(dx + 20) / 20], pass2: false }); pop();
    castShadow(920, 1580, 260, 100, 0.6, 0.25); castShadow(300, 1580, 200, 80, 0.6, 0.2);
  }
  function rx(t, P) {                                                    // рецептурный бланк под левой лапой: подпись, штамп, слетает при укусе
    const fly = clamp((t - EV.hk_bite) / 0.9), sig = clamp((t - EV.hk_rx) / 0.5);
    rxPad(470 + fly * 300, 1500 - fly * 260, 0.7, -0.25 + fly * 1.6, { key: 22440, reveal: clamp(0.3 + (t - EV.hk_rx + 0.6) / 1.2) });
    if (t > EV.hk_rx + 0.35 && fly < 0.05) { const k = popK(t, EV.hk_rx + 0.35, 0.3); push(560, 1600, k); ell(0, 0, 36, 36, { wash: 'rgba(0,0,0,0)', washA: 0, w: 3, col: DK.stamp }); txt('ХЛОП', 0, 6, 16, { font: 'Osw', col: DK.stamp }); pop(); }
    if (sig > 0 && sig < 1) pencil([[540, 1630], [540 + sig * 80, 1612 - Math.sin(sig * 9) * 10]], { w: 3, col: DK.ink, pass2: false });
    if (t > EV.hk_q && t < S1.hook) { const k = popK(t, EV.hk_q, 0.4); push(860, 1000, k, Math.sin(t * 4) * 0.08); txt('?', 0, 0, 170, { font: 'Osw', col: '#c8241e' }); pop(); }
  }
  function front(t) {                                                    // передний план: фикус слева, край лампы и пузырёк йода справа, пар
    for (let i = 0; i < 7; i++) { const x = -330 + i * 30, y = 1500 - i * 140, sw = Math.sin(t * 0.7 + i) * 10; const lf = blob([[x, y], [x + 120 + sw, y - 60], [x + 220 + sw, y - 20], [x + 120 + sw, y + 30]], { wash: i % 2 ? '#3a6a3a' : '#4a7a3a', washA: 1, w: 1.8, col: '#1a3a1a', key: 22450 + i }); shadeG(lf.path, x, y, x + 200, y, '#1a3a1a', 0.4); pencil([[x, y], [x + 200 + sw, y - 20]], { w: 1.6, col: '#8ab86a', a: 0.6, pass2: false }); }
    push(1420, 2100, 1.3); const bt = rect(-50, -150, 100, 150, { wash: '#6a3a1a', washA: 0.85, w: 2, col: '#2a1408' }); shadeG(bt.path, 50, 0, -50, 0, '#2a1408', 0.4); rect(-36, -100, 72, 50, { wash: '#f4ecd0', washA: 1, w: 1 }); txt('ЙОД', 0, -70, 18, { font: 'Osw', col: '#6a3a1a' }); rect(-24, -190, 48, 40, { wash: '#2a2a2a', washA: 1, w: 1.4 }); pop();
  }
  WORLD.hook = (t, u, cat) => {
    lay(14, () => { wall(t); shaft(160, -200, 520, 2200, -0.4, 'rgba(230,245,255,1)', 0.14); haze('#eaf4f4', 0.05); });
    lay(4, () => { room(t); lightPool(400, 1290, 700, 160, 'rgba(235,245,255,1)', 0.22); castShadow(560, 1300, 120, 160, 0.6, 0.22); castShadow(980, 1300, 120, 160, 0.6, 0.2); });
    lay(1, () => { cat(); desk(t); rx(t); });
    lay(0.6, () => { front(t); motes(16, [-200, 200, 1200, 1500], '#ffffff', t, 22460, { sp: 5, sz: 3, a: 0.35, wob: 5 }); moodDark(600, 1150, 520, 1500, '#1a2a3a', 0.4); });
  };
  const stPose = (b) => Object.assign(b, { x: 640, y: 1590, s: 1.18, flip: 1, look: [0.2, -0.1], hand: [190, -260], handF: [-150, -260], prop: 'sandwichDP', propAng: -0.1 });
  DIR.hook = {
    outfit: 'docA', light: { side: -1, rim: '#d8ecff' }, grade: ['#a8d0d0', 0.06],
    act: () => [[0, 'smug'], [EV.hk_rx, 'proud'], [EV.hk_ill, 'sideeye'], [EV.hk_q, 'suspicious'], [EV.hk_bet, 'wink'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { const bite = t > EV.hk_bite, sign = t > EV.hk_rx && t < EV.hk_rx + 0.7, bet = t > EV.hk_bet && t < EV.hk_bite;
      Object.assign(stPose(b), { look: t < EV.hk_rx ? [0.4, -0.1] : t < EV.hk_ill ? [-0.3, 0.6] : t < EV.hk_q ? [0.8, -0.1] : [0, 0], hand: bite ? [70, -240] : bet ? [170, -330] : [190, -260], handF: sign ? [-120 + Math.sin(t * 30) * 20, -150] : [-150, -200], prop: bite ? 'sandwichDBiteP' : 'sandwichDP', squint: t > EV.hk_q && t < EV.hk_bet, tailUp: bite });
      if (bite && t < EV.hk_bite + 0.12) b.squash = (b.squash || 0) + 0.1; return b; },
    afterCat: (t, u, P) => {
      if (t > EV.hk_bite && t < EV.hk_bite + 1.4) { crumbs(P.x - 70 * P.s, P.y - 360 * P.s, t, EV.hk_bite, 12, 22470, DK.crust); for (let i = 0; i < 4; i++) { const k = clamp((t - EV.hk_bite) / 0.8); ell(P.x - 80 * P.s + i * 14 - k * 40, P.y - 360 * P.s + k * 120 + i * 8, 6, 6, { wash: DK.pink, washA: 1 - k, line: false }); } }
    },
    cam: () => [[0, 640, 1150, 0.34], [EV.hk_rx, 620, 1170, 0.3], [EV.hk_ill, 680, 1120, 0.27], [EV.hk_q, 660, 1110, 0.3], [EV.hk_bet, 640, 1120, 0.32], [EV.hk_bite, 640, 1140, 0.3], [S1.hook, 640, 1140, 0.32]]
  };
})();
