/* 027 — `philly`: «А первый кетчуп с помидорами записали лишь в 1812-м, в Филадельфии.» Филадельфия 1812: улица красного кирпича в георгианском
   стиле (белые ставни, фонари, крылечки), вдали башня Индепенденс-холла с часами, крытые ряды рынка Хай-стрит, лотки с помидорами, торговки
   в чепцах, мальчишка-газетчик, повозка с бочками, флаг с 15 звёздами. Том — учёный джентльмен в сюртуке и цилиндре за конторкой на крыльце
   пишет рецепт гусиным пером. Главный свет — тёплое вечернее солнце справа, второй — фонарь. По словам: «первый» — Том макает перо;
   «помидорами» — помидоры скатываются в корзину; «записали» — перо выводит «TOMATO CATSUP» на странице; «1812-м,» — плашка «1812»;
   «Филадельфии.» — над башней звонит колокол, флаг взвивается. Переход В сцену: огромный помидор катится через кадр и открывает улицу. */
(() => {
  EV.ph_first = wtw('s6', 'первый');
  EV.ph_tom = wtw('s6', 'помидорами');
  EV.ph_write = wtw('s6', 'записали');
  EV.ph_year = wtw('s6', '1812-м,');
  EV.ph_city = wtw('s6', 'Филадельфии.');
  KEYW.push('1812-м,');

  function street(t) {                                                    // небо, башня с часами, кирпичные дома, рынок
    vgrad(-500, 1000, ['#7a9ac8', '#f0c8a0', '#f8d8a8']); for (let i = 0; i < 4; i++) ell(((t * 10 + i * 480) % 2000) - 400, -260 + i * 70, 220, 40, { wash: '#fbecd8', washA: 0.6, line: false });
    push(560, 520, 1); rect(-90, -500, 180, 500, { wash: '#a8482a', washA: 1, w: 2.4, col: '#4a1a08', key: 27600 }); rect(-70, -620, 140, 120, { wash: '#f4f0e8', washA: 1, w: 2 }); ell(0, -560, 44, 44, { wash: '#f8f4e8', washA: 1, w: 3, col: '#2a2a2a' }); pencil([[0, -560], [0, -590]], { w: 4, col: '#1a1a1a', pass2: false }); pencil([[0, -560], [24, -560]], { w: 4, col: '#1a1a1a', pass2: false });
    poly([[-60, -620], [0, -780], [60, -620]], { wash: '#f4f0e8', washA: 1, w: 2 }); const sw = t > EV.ph_city ? Math.sin((t - EV.ph_city) * 14) * 0.4 * Math.exp(-(t - EV.ph_city)) : 0; push(0, -680, 1, sw); blob([[-20, 0], [-16, -30], [16, -30], [20, 0]], { wash: '#c8a040', washA: 1, w: 1.6 }); pop();
    pencil([[0, -780], [0, -900]], { w: 3, col: '#3a3a3a', pass2: false }); const fw = Math.sin(t * 4) * 8, up = t > EV.ph_city ? 1 : 0.7; push(0, -900, 1); for (let i = 0; i < 7; i++) rect(0, i * 10, 110, 10, { wash: i % 2 ? '#f8f4e8' : '#c8201a', washA: 1, line: false }); rect(0, 0, 44, 40, { wash: '#2a3a7a', washA: 1, line: false }); pop(); pop();
    for (let i = 0; i < 6; i++) { const x = -500 + i * 400, h = 520 + (i % 2) * 80; if (Math.abs(x - 560) < 200) continue; push(x, 900, 1); const b = rect(-180, -h, 360, h, { wash: '#a8482a', washA: 1, w: 2.4, col: '#4a1a08', key: 27610 + i }); hatch(b.path, b.bb, { gap: 14, a: 0.15, col: '#5a1a08', ang: 0, key: 27620 + i });
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) { rect(-140 + c * 100, -h + 60 + r * 150, 60, 90, { wash: '#2a3a4a', washA: 1, w: 2, col: '#f4f0e8' }); rect(-160 + c * 100, -h + 60 + r * 150, 18, 90, { wash: '#2a4a2a', washA: 1, w: 1 }); rect(-62 + c * 100, -h + 60 + r * 150, 18, 90, { wash: '#2a4a2a', washA: 1, w: 1 }); }
      poly([[-200, -h], [0, -h - 70], [200, -h]], { wash: '#3a3a40', washA: 1, w: 2 }); pop(); }
    rect(-500, 900, 2200, 600, { wash: '#9a8a70', washA: 1, line: false }); for (let r = 0; r < 8; r++) for (let i = 0; i < 24; i++) ell(-480 + i * 90 + (r % 2) * 45, 920 + r * 60, 40, 20, { wash: ['#8a7a60', '#a8987a'][(i + r) % 2], washA: 1, w: 1, col: '#5a4a3a' });
  }
  function market(t) {                                                    // рынок: навес на столбах, лотки с помидорами, торговки, газетчик, повозка
    push(220, 1200, 1); poly([[-300, -360], [300, -360], [340, -300], [-340, -300]], { wash: '#6a4a2a', washA: 1, w: 2.4, col: '#2a1408' }); for (const x of [-300, 300]) rect(x - 10, -300, 20, 300, { wash: '#5a3a1e', washA: 1, w: 1.6 });
    for (let i = 0; i < 4; i++) { ell(-210 + i * 140, -40, 60, 18, { wash: '#a87a4a', washA: 1, w: 1.6 }); for (let j = 0; j < 4; j++) tomato(-240 + i * 140 + j * 20, -50 - (j % 2) * 12, 0.3, { key: 27630 + i * 4 + j, col: i === 2 ? '#e8a020' : undefined }); } pop();
    human(120, 1260, 0.95, t, { body: '#6a3a4a', legs: '#2a1a1a', hair: '#6a3a1a', face: 'smile', armL: 'hold', armR: t > EV.ph_tom && t < EV.ph_write + 0.4 ? 'up' : 'hold', look: 0.6, seed: 27640, long: 1, hat: 'scarf', hatCol: '#f8f4ec' });
    human(1000, 1270, 0.85, t, { body: '#4a5a6a', legs: '#2a2a2a', hair: '#8a5a2a', face: t > EV.ph_year ? 'shock' : 'grin', armL: 'hold', armR: 'wave', look: -0.6, seed: 27641, flip: -1, hat: 'cap', hatCol: '#3a3a3a', prop: 'scroll' });
    push(900 + Math.sin(t * 0.5) * 20, 1100, 0.7); rect(-160, -110, 320, 110, { wash: '#8a5a2a', washA: 1, w: 2 }); for (let i = 0; i < 3; i++) { ell(-100 + i * 100, -140, 46, 40, { wash: '#a87a4a', washA: 1, w: 2 }); } ell(-110, 10, 40, 40, { wash: '#4a3020', washA: 1, w: 2 }); ell(110, 10, 40, 40, { wash: '#4a3020', washA: 1, w: 2 }); pop();
  }
  function desk(t) {                                                      // конторка на крыльце: книга рецептов (герой), чернильница, корзина помидоров
    const tb = rect(-500, 1440, 2200, 600, { wash: '#8a6a4a', washA: 1, w: 3, col: '#3a2010', key: 27650 }); shadeG(tb.path, 0, 1440, 0, 1900, '#4a3018', 0.5); for (let i = 0; i < 6; i++) pencil([[-500, 1480 + i * 70], [1700, 1480 + i * 70]], { w: 2, col: '#5a3a20', a: 0.5, pass2: false });
    push(360, 1450, 1); const bk = poly([[-180, -10], [0, -30], [180, -10], [170, -150], [0, -170], [-170, -150]], { wash: '#f8f0d8', washA: 1, w: 3, col: '#5a4a2a', key: 27651 }); pencil([[0, -30], [0, -170]], { w: 3, col: '#8a7a5a', pass2: false });
    const wk = clamp((t - EV.ph_write) / 1.0); txt('TOMATO', -90, -120, 30, { font: 'Hand', col: '#2a1a0a', reveal: wk }); txt('CATSUP', -90, -86, 30, { font: 'Hand', col: '#2a1a0a', reveal: clamp(wk * 1.4 - 0.3) }); for (let i = 0; i < 4; i++) pencil([[20, -140 + i * 26], [150, -136 + i * 26]], { w: 1.6, col: '#5a4a3a', a: 0.6, pass2: false }); if (t > EV.ph_year) txt('1812', 80, -40, 30, { font: 'Hand', col: '#a8241e' }); pop();
    push(620, 1450, 1); ell(0, -16, 30, 20, { wash: '#1a1a2a', washA: 1, w: 2 }); pop();
    push(1000, 1450, 1); blob([[-90, 0], [-100, -80], [100, -80], [90, 0]], { wash: '#c89a5a', washA: 1, w: 2.4, col: '#4a2a10' }); for (let i = 0; i < 6; i++) pencil([[-96 + i * 38, -78], [-86 + i * 34, 0]], { w: 2, col: '#8a6a3a', pass2: false }); const n = t > EV.ph_tom ? 6 : 3; for (let i = 0; i < n; i++) tomato(-60 + (i % 3) * 60, -96 - Math.floor(i / 3) * 34, 0.55, { key: 27660 + i }); pop();
    if (t > EV.ph_tom && t < EV.ph_tom + 0.8) { const q = (t - EV.ph_tom) / 0.8; for (let i = 0; i < 3; i++) tomato(lerp(1250, 1000, q) + i * 30, 1300 - Math.abs(Math.sin(q * 6 + i)) * 60, 0.55, { key: 27670 + i, rot: q * 6 }); }
    castShadow(640, 1450, 320, 90, -0.5, 0.25);
  }
  function extra(t) {                                                     // мелочи улицы: фонарщик, собака, бочки, вывеска лавки, голуби, кадка с цветами
    human(-60, 1270, 0.8, t, { body: '#3a3a4a', legs: '#2a2a2a', hair: '#5a3a1a', face: 'calm', armL: 'up', armR: 'hold', look: 0.4, seed: 27680, hat: 'cap', hatCol: '#2a2a2a', prop: 'stick' });
    push(780, 1290, 0.6); blob([[-60, 0], [-50, -50], [40, -54], [70, -30], [60, 0]], { wash: '#c8a070', washA: 1, w: 2 }); ell(70, -60, 24, 20, { wash: '#c8a070', washA: 1, w: 2 }); poly([[70, -76], [84, -100], [90, -70]], { wash: '#8a6a40', washA: 1, w: 1.4 }); pencil([[-60, -30], [-90, -60 + Math.sin(t * 9) * 14]], { w: 6, col: '#c8a070', pass2: false }); for (const x of [-40, -10, 30, 50]) pencil([[x, 0], [x, 30]], { w: 6, col: '#c8a070', pass2: false }); pop();
    for (let i = 0; i < 3; i++) { push(520 + i * 70, 1290, 0.5); blob([[-50, 0], [-56, -60], [-50, -120], [50, -120], [56, -60], [50, 0]], { wash: '#8a5a2a', washA: 1, w: 2 }); for (const y of [-100, -20]) pencil([[-54, y], [54, y]], { w: 5, col: '#3a3a3a', pass2: false }); pop(); }
    push(1150, 760, 1); rect(-90, -40, 180, 80, { wash: '#2a3a2a', washA: 1, w: 2 }); txt('GROCER', 0, 12, 34, { font: 'Osw', col: '#e8c860' }); pop();
    for (let i = 0; i < 4; i++) { const x = 300 + i * 60 + Math.sin(t * 2 + i) * 6; ell(x, 1180, 14, 10, { wash: '#8a8a94', washA: 1, w: 1.4 }); ell(x + 10, 1170, 7, 6, { wash: '#6a6a74', washA: 1, w: 1 }); }
    push(980, 1300, 0.8); blob([[-40, 0], [-46, -50], [46, -50], [40, 0]], { wash: '#8a5a2a', washA: 1, w: 2 }); for (let i = 0; i < 5; i++) ell(-30 + i * 15, -60 - (i % 2) * 10, 10, 10, { wash: ['#e8402a', '#f0c030'][i % 2], washA: 1, w: 1 }); pop();
  }
  WORLD.philly = (t, u, cat) => {
    lay(12, () => { street(t); haze('#ffd8b0', 0.05); });
    lay(3, () => { extra(t); market(t); shaft(1200, 0, 380, 1500, 0.5, 'rgba(255,220,170,1)', 0.14); });
    lay(1, () => { lightPool(620, 1460, 680, 120, 'rgba(255,215,160,1)', 0.34); cat(); desk(t); });
    lay(0.65, () => { push(-140, 1900, 1.4); pencil([[0, 0], [0, -800]], { w: 14, col: '#1a1a1a', pass2: false }); rect(-40, -900, 80, 100, { wash: '#f8e8a0', washA: 0.8, w: 3, col: '#1a1a1a' }); glow(0, -850, 140, 'rgba(255,220,140,1)', 0.25); pop();
      push(1250, 160, 1.4); for (let i = 0; i < 6; i++) { const sw = Math.sin(t * 1.3 + i) * 10; pencil(spline([[i * 30, 0], [i * 28 + sw, 200], [i * 26 + sw * 2, 380]], false, 5), { w: 3, col: '#4a6a2a', pass2: false }); ell(i * 26 + sw * 2, 390, 22, 12, { wash: '#5a8a3a', washA: 1, line: false }); } pop();
      motes(12, [-200, 300, 1300, 1500], '#fff0d0', t, 27690, { sp: 3, sz: 3, a: 0.4, wob: 4 }); moodDark(600, 1000, 520, 1500, '#140a10', 0.4); });
  };
  DIR.philly = {
    outfit: 'victorian', light: { side: 1, rim: '#ffd8a0' }, grade: ['#ffb880', 0.06],
    act: () => [[S0.philly, 'awe'], [EV.ph_first, 'talk'], [EV.ph_tom, 'grin'], [EV.ph_write, 'proud'], [EV.ph_year, 'smug'], [EV.ph_city, 'grin']],
    pose: (t, u, b) => { const wr = t > EV.ph_first && t < EV.ph_year + 0.3;
      return Object.assign(b, { x: 700, y: 1600, s: 1.15, flip: true, look: wr ? [-0.8, 0.8] : [-0.3, 0.1], hand: wr ? [270, -190 + Math.sin(t * 14) * 8] : [150, -230], handF: [-90, -230], prop: wr ? 'quillP' : undefined, propAng: -0.6 }); },
    hud: t => infoPlate(t, EV.ph_year - 0.1, S1.philly - 0.15, { kind: 'num', title: 'ПЕРВЫЙ ТОМАТНЫЙ', big: '1812', sub: 'Филадельфия, США' }),
    cam: () => [[S0.philly, 540, 1020, 0.22], [EV.ph_write, 560, 1120, 0.28], [S1.philly, 600, 1130, 0.3]]
  };
  Object.assign(PROPS, { quillP() { push(0, -10, 0.7, 0.4); pencil(spline([[0, 0], [20, -80], [10, -170]], false, 5), { w: 3, col: '#6a5a4a', pass2: false }); blob([[10, -170], [40, -140], [30, -60], [14, -20], [8, -100]], { wash: '#f8f4ec', washA: 1, w: 1.6, col: '#8a8a8a' }); pop(); } });   // гусиное перо
  // ---------------------------------------------------------------- переход: огромный помидор катится через кадр, за ним — улица
  TRANS_IN.philly = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), cx = lerp(1700, -700, e); drawBuf(A, 1, 540, 960);
    scr(() => { ctx.save(); ctx.beginPath(); ctx.rect(cx, -50, 2400, 2100); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore(); tomato(cx, 1250, 12, { rot: -e * 6, key: 27699 }); });
  } };
})();
