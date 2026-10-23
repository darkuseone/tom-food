/* 004 — `today` + `button`: «Иностранцы морщатся. А мы варим его восемь часов — и съедаем за восемь минут.» Зимняя кухня-дача ночью: окно с сугробами и фонарём,
   дровяная печь, на столе ХИРО-ШОТ — холодец на блюде блестит, хрен и горчица, рюмка компота, кусок хлеба. Иностранец в окне-телефоне морщится. «восемь часов» —
   песочные часы большие; «восемь минут» — тарелка пустеет за секунды, Том-повар довольный. `button`: Том с ложкой в камеру. Переход В today: снег с крыши обрушивается. */
(() => {
  EV.td_frown = LS('t1') + 0.1;
  EV.td_8h = wtw('t1', 'часов');
  EV.td_8m = wtw('t1', 'минут.');
  EV.bt_wink = LF('x1', 0.7);
  KEYW.push('минут.');

  function kitchen(t) {                                                // ночная дача: брёвна, окно со снегом и фонарём, печь
    vgrad(-600, 1600, ['#2a1a10', '#4a3020', '#5a3a26']); for (let i = 0; i < 18; i++) { const y = 60 + i * 74; rect(-300, y, 1700, 70, { wash: i % 2 ? '#6a4626' : '#5a3a20', washA: 1, w: 2, col: '#2a1408' }); }
    const w = rect(600, 200, 380, 420, { wash: '#14204a', washA: 1, w: 8, col: '#e8dcc0', key: 5100 }); ctx.save(); ctx.clip(w.path); vgrad(200, 620, ['#0a1430', '#2a3a6a']); poly([[600, 620], [600, 520], [700, 480], [820, 520], [980, 500], [980, 620]], { wash: '#f6f8fc', washA: 1, line: false });
    pencil([[900, 620], [900, 360]], { w: 6, col: '#2a2a2a', pass2: false }); ell(900, 350, 20, 14, { wash: '#ffe08a', washA: 1, w: 2 }); glow(900, 360, 120, 'rgba(255,220,140,1)', 0.6); motes(40, [600, 200, 980, 620], '#ffffff', t, 5101, { sp: 50, vx: 10, sz: 4, a: 0.9 }); ctx.restore(); frost(600, 540, 380, 80, t, 0.9);
    const st = rect(60, 700, 300, 640, { wash: '#efe6d0', washA: 1, w: 3, col: '#3a2a14', key: 5102 }); rect(120, 1000, 180, 120, { wash: '#2a1408', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) { const f = flick(t, i); blob([[140 + i * 40, 1120], [150 + i * 40, 1120 - 70 * f], [170 + i * 40, 1120]], { wash: '#ff9030', washA: 0.95, line: false }); } glow(210, 1080, 160, 'rgba(255,140,60,1)', 0.6);
  }
  function foreigner(t) { push(820, 860, 1, 0.06); rect(-90, -150, 180, 300, { wash: '#1a1a20', washA: 1, w: 3, col: '#000', key: 5110 }); const sc = rect(-78, -134, 156, 260, { wash: '#8ab0d8', washA: 1, w: 1 }); ctx.save(); ctx.clip(sc.path); human(0, 200, 0.7, t, { body: '#3a5a8a', hair: '#e8c070', face: 'angry', armL: 'hold', armR: 'up', seed: 350 }); ctx.restore(); pop();
    if (t > EV.td_frown) bubbleTag('ФУ!', 820, 680, t, EV.td_frown, '#2b2622', 40, 0.06); }
  function hourglass(t) { if (t < EV.td_8h - 0.2) return; const k = popK(t, EV.td_8h - 0.2, 0.3), s = clamp((t - EV.td_8h) / 2); push(450, 900, k); poly([[-60, -120], [60, -120], [8, 0], [60, 120], [-60, 120], [-8, 0]], { wash: '#e8f4fa', washA: 0.5, w: 3, col: '#6a5030' });
    poly([[-60 + 52 * s, -120 + 110 * s], [60 - 52 * s, -120 + 110 * s], [8, 0], [-8, 0]], { wash: '#e8c070', washA: 1, line: false }); poly([[-60, 120], [60, 120], [60 - 50 * (1 - s), 120 - 100 * s], [-60 + 50 * (1 - s), 120 - 100 * s]], { wash: '#e8c070', washA: 1, line: false }); rect(-70, -136, 140, 16, { wash: '#7a4a24', washA: 1, w: 2 }); rect(-70, 120, 140, 16, { wash: '#7a4a24', washA: 1, w: 2 }); pop();
    bubbleTag('8 ЧАСОВ', 450, 720, t, EV.td_8h, '#e8b53a', 40, -0.04); }
  function table(t) { const tb = rect(-300, 1340, 1700, 700, { wash: '#f2ead8', washA: 1, w: 3, col: '#3a2a14', key: 5120 }); shadeG(tb.path, 540, 1340, 540, 1800, '#b8a888', 0.4); for (let i = 0; i < 24; i++) pencil([[-300 + i * 70, 1350], [-300 + i * 70, 1420]], { w: 3, col: '#d9482b', a: 0.5, pass2: false });
    const eat = t > EV.td_8m ? clamp((t - EV.td_8m) / 0.8) : 0; if (eat < 1) { ctx.save(); ctx.globalAlpha = 1 - eat * 0.9; jellyPlate(430, 1440, 1.15, t, { wob: 0.5 }); ctx.restore(); } else { ell(430, 1440, 240, 60, { wash: '#f6f2ea', washA: 1, w: 2.6, col: '#4a4038' }); for (let i = 0; i < 6; i++) ell(380 + i * 20, 1430, 6, 4, { wash: KH.jel, washA: 0.8, line: false }); }
    condJar(120, 1420, 1.0, 'hren'); condJar(760, 1420, 0.9, 'mustard'); if (eat > 0.5) bubbleTag('8 МИНУТ!', 430, 1240, t, EV.td_8m + 0.4, '#d9482b', 46, 0.05); }
  WORLD.today = (t, u, cat) => { lay(14, () => kitchen(t)); lay(3, () => { foreigner(t); hourglass(t); }); lay(1.15, () => table(t)); lay(1, () => cat()); };
  DIR.today = {
    outfit: 'chef', light: { side: -1, rim: '#ffc890' }, grade: ['#e88a4a', 0.1],
    act: () => [[S0.today, 'sideeye'], [EV.td_frown, 'annoyed'], [EV.td_8h, 'proud'], [EV.td_8m, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 860, y: 1790, s: 1.18, flip: true, look: t < EV.td_8h ? [-0.2, -0.6] : [0.7, 0.4], hand: t > EV.td_8m ? [80, -360] : [150, -250], handF: [-90, -220], prop: 'spoonJellyP', tailUp: t > EV.td_8m }),
    cam: () => [[S0.today, 560, 1300, 0.36], [S0.today + 0.9, 620, 1050, 0.1, 'x'], [EV.td_8h, 560, 1080, 0.14], [EV.td_8m, 520, 1250, 0.28], [S1.today, 520, 1260, 0.32]]
  };
  WORLD.button = (t, u, cat) => { lay(14, () => kitchen(t)); lay(1.15, () => { rect(-300, 1340, 1700, 700, { wash: '#f2ead8', washA: 1, w: 3, col: '#3a2a14', key: 5120 }); jellyPlate(330, 1450, 1.0, t, { wob: 0.4 }); condJar(80, 1420, 0.9, 'hren'); }); lay(1, () => cat()); };
  DIR.button = { outfit: 'chef', light: { side: -1, rim: '#ffc890' }, grade: ['#e88a4a', 0.1], act: () => [[S0.button, 'grin'], [EV.bt_wink, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 720, y: 1820, s: 1.3, look: [0, 0], hand: [110, -320], handF: [-110, -260], prop: 'spoonJellyP', tailUp: true }), cam: () => [[S0.button, 700, 1000, 0.26], [DUR, 680, 1040, 0.3]] };
  // ---------------------------------------------------------------- переход В today: снег сползает с крыши и засыпает кадр
  TRANS_IN.today = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const y = Math.pow(k, 1.4) * (H + 600) - 300; drawBuf(k < 0.55 ? A : B, 1, 540, 960); scr(() => { const pts = [[-50, -400]]; for (let x = -50; x <= W + 50; x += 60) pts.push([x, y + Math.sin(x * 0.03) * 60]); pts.push([W + 50, -400]); const s = poly(pts, { wash: '#f6faff', washA: k < 0.55 ? 1 : 1 - (k - 0.55) / 0.45, w: 4, col: '#a8b8c8' }); });
  } };
  TRANS_IN.button = { a: 0.1, b: 0.3, runA: 1, fx(k, t, A, B) { drawBuf(k < 0.5 ? A : B, 1 + Math.sin(k * Math.PI) * 0.08, 540, 960); scr(() => whiteOut(Math.sin(k * Math.PI) * 0.8, '255,244,220')); } };
})();
