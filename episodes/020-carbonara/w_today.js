/* 020 — `today`: «Сегодня у неё свой праздник — 6 апреля. Ты за гуанчале или за бекон?»
   Дневная кухня римской траттории: окно на крыши и купола (главный свет — солнце из окна слева), сушилка со свежими спагетти, медные кастрюли на стене, полки с пекорино,
   корзина яиц, связки перца; двое поваров подбрасывают сковороды, официантка несёт тарелки. Календарь отрывной — листок «6 APRILE» и наклейка «CARBONARA DAY».
   Герой — большая чугунная сковорода: гуанчале шкворчит, спагетти в золотом соусе, пар и блики. По словам: «праздник» — флажки-гирлянда и конфетти, календарь вспыхивает;
   «гуанчале» — Том поднимает кусок гуанчале правой лапой, табличка «А»; «бекон?» — левой лапой полоску бекона, табличка «Б», переводит взгляд в камеру.
   Переход В сцену: сковорода шкворчит — облака пара заливают кадр и расходятся. */
(() => {
  EV.td_fest = wtw('t1', 'праздник');
  EV.td_date = wtw('t1', '6');
  EV.td_guan = wtw('t1', 'гуанчале');
  EV.td_bacon = wtw('t1', 'бекон?');
  SHAKES.push([EV.td_fest + 0.05, 0.15, 6]);
  KEYW.push('праздник', 'бекон?');

  function view(t) {                                                    // в окне: крыши Рима, купола, пинии, ласточки
    vgrad(-300, 600, ['#7ab8e8', '#b8dcf0', '#f8ecd0']); for (let i = 0; i < 3; i++) blob([[-200 + i * 180, -200], [-130 + i * 180, -230], [-60 + i * 180, -200]], { wash: '#ffffff', washA: 0.85, line: false });
    ell(120, 120, 120, 90, { wash: '#e0d0a8', washA: 1, w: 1.6, col: '#6a5a3a' }); rect(0, 120, 240, 200, { wash: '#e0d0a8', washA: 1, line: false }); pencil([[120, 30], [120, -10]], { w: 6, col: '#6a5a3a' });
    for (let i = 0; i < 8; i++) { const x = -260 + i * 80, h = 80 + (i * 41) % 90; rect(x, 320 - h, 76, h + 200, { wash: ['#e8a868', '#d8904a', '#f0c088'][i % 3], washA: 1, w: 1, col: '#5a3010' }); poly([[x - 4, 320 - h], [x + 38, 290 - h], [x + 80, 320 - h]], { wash: '#b0502a', washA: 1, w: 1 }); }
    push(-150, 200, 1); pencil([[0, 0], [6, -120]], { w: 8, col: '#3a2a1a' }); blob([[-90, -120], [0, -180], [90, -120], [40, -100], [-40, -100]], { wash: '#3a6a3a', washA: 1, w: 1.4 }); pop();
    for (let i = 0; i < 3; i++) { const bx = ((t * 120 + i * 200) % 700) - 300, by = -60 + Math.sin(t * 4 + i) * 20 + i * 40; pencil([[bx - 14, by], [bx, by - 8], [bx + 14, by]], { w: 3, col: '#1a1a2a', pass2: false }); }
  }
  function wall(t) {                                                    // кремовая стена с кафелем, окно, медь, полки, сушилка пасты, календарь, гирлянда
    vgrad(-300, 2100, ['#c89a6a', '#e8c89a', '#f4e0c0']);
    for (let y = 800; y < 1440; y += 50) for (let x = -400; x < 1500; x += 50) rect(x, y, 48, 48, { wash: (x / 50 + y / 50) % 2 ? '#f4f0e4' : '#3a7a8a', washA: 0.9, w: 0.6, col: '#8a8a7a' });
    const r = rng(22000); for (let i = 0; i < 10; i++) { const x = -300 + r() * 1700, y = r() * 700; blob([[x, y], [x + 70, y - 10], [x + 90, y + 30], [x + 10, y + 50]], { wash: '#f8e8c8', washA: 0.35, line: false }); }
    push(160, 380, 1); const w = rect(-200, -320, 400, 520, { wash: '#a8d0f0', washA: 1, w: 12, col: '#6a4424', key: 22001 }); ctx.save(); ctx.clip(w.path); push(0, -60, 0.9); view(t); pop(); ctx.restore(); pencil([[0, -320], [0, 200]], { w: 8, col: '#6a4424' }); pencil([[-200, -60], [200, -60]], { w: 8, col: '#6a4424' });
    rect(-220, 196, 440, 26, { wash: '#6a4424', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) { push(-150 + i * 100, 196, 0.55); blob([[-24, 0], [-28, -40], [28, -40], [24, 0]], { wash: '#c8603a', washA: 1, w: 1.4 }); for (let k = 0; k < 7; k++) basilLeaf(-20 + (k % 3) * 20, -56 - ((k / 3) | 0) * 22, 0.4, k, 22002 + i * 10 + k); pop(); } pop();
    for (let i = 0; i < 5; i++) { push(560 + i * 120, 140 + (i % 2) * 40, 1); pencil([[0, -60], [0, -30]], { w: 4, col: '#3a2a1a' }); const pn = ell(0, 20, 50 - (i % 3) * 6, 50 - (i % 3) * 6, { wash: '#c8743a', washA: 1, w: 2, col: '#5a2a0a', key: 22010 + i }); metalG(pn.path, -16, 4, 60, '#ffd8a0', '#c8743a', '#5a2a0a'); pencil([[0, -30], [0, -10]], { w: 8, col: '#5a2a0a' }); pop(); }
    push(1180, 400, 1); for (const y of [-120, 0]) { pencil([[-160, y], [160, y]], { w: 8, col: '#a8743a' }); for (let i = 0; i < 16; i++) pastaStrand([[-150 + i * 20, y], [-148 + i * 20, y + 90 + (i % 3) * 14], [-146 + i * 20 + 4, y + 170 + (i % 4) * 10]], 4, 1, 22020 + i + (y ? 40 : 0)); } pencil([[-160, -200], [-160, 260]], { w: 8, col: '#6a4424' }); pencil([[160, -200], [160, 260]], { w: 8, col: '#6a4424' }); pop();
    push(830, 520, 1); const cal = rect(-90, -110, 180, 220, { wash: '#f8f4ea', washA: 1, w: 2, col: '#4a3a2a', key: 22030 }); rect(-90, -110, 180, 50, { wash: '#c8241e', washA: 1, line: false }); txt('APRILE', 0, -76, 26, { font: 'Osw', col: '#ffffff' });
    const ck = t > EV.td_date ? popK(t, EV.td_date, 0.35) : 0; txt('6', 0, 50, 110 * (0.8 + 0.2 * ck), { font: 'Osw', col: '#2a2a2a' }); if (ck > 0) { push(50, 70, ck, 0.2); ell(0, 0, 50, 26, { wash: '#f2b41e', washA: 1, w: 2, col: '#8a5a08' }); txt('CARBONARA DAY', 0, 6, 11, { font: 'Osw', col: '#5a2a08' }); pop(); } pop();
    if (t > EV.td_fest) { const k = sm(clamp((t - EV.td_fest) / 0.5)); for (let i = 0; i < 14; i++) { const x = -100 + i * 100, y = -120 + Math.sin(i * 0.7) * 30 + (1 - k) * -200; poly([[x, y], [x + 60, y], [x + 30, y + 60]], { wash: ['#2a8a3a', '#f4f0e8', '#c8241e'][i % 3], washA: 1, w: 1.2, col: '#3a2a1a' }); } pencil(spline([[-100, -120 + (1 - k) * -200], [600, -90 + (1 - k) * -200], [1400, -120 + (1 - k) * -200]], false, 6), { w: 3, col: '#3a2a1a', pass2: false }); }
  }
  function staff(t) {                                                   // два повара со сковородами, официантка с тарелками, полка пекорино и яиц
    for (let i = 0; i < 2; i++) { const x = 600 + i * 300, toss = Math.max(0, Math.sin(t * 5 + i * 2)); human(x, 1250, 1.0, t, { body: '#f8f6f0', legs: '#2a2a2a', hair: ['#2a1a0a', '#8a5a2a'][i], face: t > EV.td_fest ? 'grin' : 'smile', armL: 'hold', armR: 'up', look: i ? -0.5 : 0.5, seed: 22040 + i, flip: i ? -1 : 1, beard: i ? 'short' : undefined, hat: 'cap', hatCol: '#f8f6f0' });
      push(x + (i ? -80 : 80), 960, 1); ell(0, 0, 60, 16, { wash: '#2a2a2e', washA: 1, w: 2 }); pencil([[i ? 60 : -60, 0], [i ? 140 : -140, 10]], { w: 8, col: '#1a1a1a' }); for (let k = 0; k < 5; k++) pastaStrand([[-40 + k * 16, -10 - toss * 70], [-30 + k * 16, -40 - toss * 110], [-20 + k * 16, -14 - toss * 60]], 5, 1, 22050 + i * 10 + k); pop(); }
    human(1220, 1260, 1.0, t, { body: '#2a2a2e', legs: '#2a2a2e', hair: '#c84a2a', face: 'grin', armL: 'hold', armR: 'hold', look: -0.4, seed: 22060, flip: -1, long: 1, trim: '#ffffff' }); for (const dx of [-60, 40]) { push(1220 + dx, 1000, 1); ell(0, 0, 50, 14, { wash: '#ffffff', washA: 1, w: 1.4 }); carbNest(0, -8, 0.2, t, { key: 22061 + dx }); pop(); }
    push(260, 1000, 1); rect(-200, 0, 400, 20, { wash: '#6a4424', washA: 1, w: 2 }); for (let i = 0; i < 3; i++) pecorino(-130 + i * 130, -6, 0.45, 22070 + i); pop();
    push(250, 1180, 1); const bs = blob([[-120, 0], [-130, -60], [130, -60], [120, 0]], { wash: '#c8a060', washA: 1, w: 2, col: '#5a3a14', key: 22080 }); hatch(bs.path, bs.bb, { gap: 6, a: 0.3, col: '#5a3a14', ang: 0.8, key: 22081 }); for (let i = 0; i < 7; i++) egg(-100 + i * 34, -70 - (i % 2) * 14, 0.42, (i - 3) * 0.1, { key: 22082 + i }); pop();
  }
  function stove(t) {                                                   // плита-стол перед Томом: сковорода-герой с гуанчале и спагетти, пар, блики; яйца, пекорино, тёрка, перец
    const c = rect(-500, 1440, 2100, 700, { wash: '#4a4e54', washA: 1, w: 3, col: '#1a1a1e', key: 22090 }); metalG(c.path, 800, 1500, 1000, '#9aa0a8', '#4a4e54', '#1a1a1e'); pencil([[-500, 1450], [1600, 1450]], { w: 6, col: '#c8ccd4', pass2: false });
    for (const x of [500, 1180]) { ell(x, 1470, 90, 14, { wash: '#1a1a1e', washA: 1, w: 1.4 }); }
    for (let i = 0; i < 7; i++) { ell(-100 + i * 220, 1560, 26, 26, { wash: '#1a1a1e', washA: 1, w: 2, col: '#000' }); pencil([[-100 + i * 220, 1540], [-100 + i * 220, 1580]], { w: 5, col: '#c8ccd4', pass2: false }); }
    const od = rect(-200, 1620, 1500, 380, { wash: '#2a2a2e', washA: 1, w: 3, col: '#000', key: 22096 }); metalG(od.path, 600, 1700, 700, '#5a5e66', '#2a2a2e', '#000'); rect(0, 1640, 1100, 22, { wash: '#c8ccd4', washA: 1, w: 1.4 }); rect(200, 1700, 700, 200, { wash: '#3a1a0a', washA: 0.85, w: 2, col: '#000' }); glow(550, 1800, 200, 'rgba(255,120,40,1)', 0.18);
    txt('CUCINA', 550, 1960, 36, { font: 'Osw', col: '#8a8e96' }); glow(900, 1460, 140, 'rgba(90,140,255,1)', 0.2);
    push(900, 1420, 1); const pan = ell(0, 0, 250, 66, { wash: '#2a2a2e', washA: 1, w: 3, col: '#000', key: 22091 }); metalG(pan.path, -80, -20, 260, '#6a6a7a', '#2a2a2e', '#000'); pencil([[240, 10], [440, 40]], { w: 22, col: '#1a1a1e' }); ell(0, -6, 220, 52, { wash: '#1a1a1e', washA: 1, w: 1.4 }); pop();
    carbNest(900, 1400, 1.15, t, { steam: 1, key: 22092 }); for (let i = 0; i < 6; i++) { const q = (t * 3 + i / 6) % 1; ell(780 + i * 46, 1380 - q * 50, 3, 3, { wash: '#fff4c8', washA: 1 - q, line: false }); }
    push(380, 1450, 1); const gr = poly([[-30, 0], [-40, -160], [40, -160], [30, 0]], { wash: '#c8ccd4', washA: 1, w: 2, col: '#3a3e44', key: 22093 }); metalG(gr.path, -10, -80, 100, '#ffffff', '#c8ccd4', '#3a3e44'); for (let r2 = 0; r2 < 6; r2++) for (let c2 = 0; c2 < 3; c2++) ell(-18 + c2 * 18, -140 + r2 * 22, 4, 3, { wash: '#3a3e44', washA: 1, line: false }); pop();
    egg(1230, 1420, 0.6, 0.2, { key: 22094, cracked: 1 }); pecorino(1360, 1450, 0.45, 22095);
    castShadow(900, 1440, 420, 160, 0.6, 0.3);
  }
  function choice(t) {                                                  // таблички выбора А / Б над лапами
    if (t > EV.td_guan) bubbleTag('А · ГУАНЧАЛЕ', 360, 900, t, EV.td_guan + 0.05, '#c8603a', 46, -0.06);
    if (t > EV.td_bacon) bubbleTag('Б · БЕКОН', 840, 820, t, EV.td_bacon + 0.05, '#2a6ac8', 46, 0.05);
  }
  function front(t) {                                                   // передний план: свисающие спагетти с сушилки сверху, перечная мельница, пар
    push(1240, -120, 1.5); pencil([[-200, 0], [200, 0]], { w: 10, col: '#a8743a' }); for (let i = 0; i < 12; i++) pastaStrand([[-180 + i * 30, 0], [-176 + i * 30 + Math.sin(t + i) * 4, 160 + (i % 3) * 20], [-172 + i * 30 + Math.sin(t * 1.2 + i) * 6, 300 + (i % 4) * 20]], 7, 1, 22100 + i * 3); pop();
    push(-140, 1900, 1.6); const pm = rect(-40, -300, 80, 300, { wash: '#4a2a14', washA: 1, w: 2, col: '#1a0a04', key: 22140 }); shadeG(pm.path, 40, 0, -40, 0, '#1a0a04', 0.45); ell(0, -310, 46, 16, { wash: '#c8ccd4', washA: 1, w: 1.6 }); for (let i = 0; i < 4; i++) pencil([[-40, -260 + i * 60], [40, -260 + i * 60]], { w: 2, col: '#6a4a2a', pass2: false }); pop();
    steamWisps(900, 1280, 1.4, t, 5, 22150, 0.35);
  }
  WORLD.today = (t, u, cat) => {
    lay(14, () => { wall(t); haze('#fff4e0', 0.05); });
    lay(4, () => { staff(t); shaft(160, 300, 300, 1500, -0.4, 'rgba(255,248,220,0.6)', 0.12); });
    lay(1, () => { cat(); stove(t); lightPool(900, 1440, 560, 90, 'rgba(255,230,170,1)', 0.25); });
    lay(0.6, () => { front(t); moodDark(700, 1100, 560, 1500, '#140c18', 0.4); motes(16, [200, 400, 1300, 1400], '#fff8e0', t, 22160, { sp: 6, sz: 3, a: 0.4 }); if (t > EV.td_fest) motes(40, [0, -100, 1100, 1500], '#ffd040', t, 22161, { sp: 160, vx: 20, sz: 6, a: 0.85, wob: 10 }); });
    choice(t);
  };
  DIR.today = {
    outfit: 'chef', light: { side: -1, rim: '#fff0d0' }, grade: ['#ffd8a0', 0.05],
    act: () => [[S0.today, 'grin'], [EV.td_fest, 'laugh'], [EV.td_date, 'proud'], [EV.td_guan, 'smug'], [EV.td_bacon, 'sideeye'], [EV.td_bacon + 0.6, 'wink']],
    pose: (t, u, b) => { const g = t > EV.td_guan - 0.1, bc = t > EV.td_bacon - 0.1;
      return Object.assign(b, { x: 560, y: 1590, s: 1.15, flip: 1, look: bc ? [0, 0] : g ? [-0.6, -0.3] : [0.6, 0.4], hand: g ? [200, -420] : [160, -280], handF: bc ? [-200, -420] : [-70, -230], prop: g ? 'guanP' : 'forkCarbP', propAng: g ? 0.1 : -0.3 }); },
    afterCat: (t, u, P) => { if (t > EV.td_bacon - 0.1) { const x = P.x + 200 * P.s, y = P.y - 420 * P.s; baconStrip(x + 10, y - 20, 0.6, 1.2, 22170); } },
    cam: () => [[S0.today, 660, 1160, 0.26], [EV.td_fest, 640, 1080, 0.22, 'x'], [EV.td_date, 720, 1000, 0.28], [EV.td_guan, 620, 1140, 0.3, 'x'], [EV.td_bacon, 600, 1140, 0.34], [S1.today, 600, 1140, 0.34]]
  };
  TRANS_IN.today = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {         // сковорода шкворчит — облака пара заливают кадр и расходятся
    drawBuf(k < 0.5 ? A : B, 1, 540, 960);
    scr(() => { const r = rng(22180), cov = Math.sin(Math.PI * k); for (let i = 0; i < 40; i++) { const x = r() * W, y = H - (r() * 0.4 + k) * H * 1.2, rr = 180 + r() * 260; const g = ctx.createRadialGradient(x, y, 0, x, y, rr); g.addColorStop(0, `rgba(255,252,244,${0.95 * cov})`); g.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = g; ctx.fillRect(x - rr, y - rr, rr * 2, rr * 2); } });
  } };
})();
