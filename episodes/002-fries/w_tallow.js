/* 002 — `tallow`: «До девяностого там жарили в говяжьем жиру. Потом — в масле… с говяжьим ароматом.» Кухня фастфуда конца 1980-х:
   нержавейка, фритюрницы с таймерами, кафель, лампы подогрева, кассы за окном выдачи. Тома в бумажной пилотке.
   «говяжьем» — в фритюр бухается белый брусок «BEEF TALLOW»; календарь на стене «1989» → «1990»; «Потом» — брусок зачёркнут, льётся золотое масло из канистры «VEGETABLE OIL»;
   «ароматом» — из пипетки «BEEF FLAVOR» капает в фри, пар над ними складывается в силуэт коровы, Том принюхивается с подозрением.
   Переход В сцену: на кадр высыпается лавина фри из корзины и съезжает вниз. */
(() => {
  EV.tw_tallow = wtw('s9', 'говяжьем');
  EV.tw_then = wtw('s9', 'Потом');
  EV.tw_oil = wtw('s9', 'масле…');
  EV.tw_aroma = wtw('s9', 'ароматом.');
  KEYW.push('ароматом.');
  function wall(t) {                                                    // кафель, полки, лампы подогрева, календарь
    vgrad(-500, 2000, ['#d8d4c8', '#e8e4d8', '#b8b4a8']); for (let i = 0; i < 16; i++) for (let j = 0; j < 22; j++) pencil([[-400 + i * 120, -200 + j * 100], [-280 + i * 120, -200 + j * 100]], { w: 1.4, col: '#a8a498', a: 0.6, pass2: false, gap: false });
    for (let i = 0; i < 16; i++) pencil([[-400 + i * 120, -200], [-400 + i * 120, 2000]], { w: 1.4, col: '#a8a498', a: 0.6, pass2: false, gap: false }); rect(-400, 900, 2000, 30, { wash: '#d9482b', washA: 1, line: false });
    for (const x of [280, 800]) { rect(x - 150, 300, 300, 40, { wash: '#8a8e94', washA: 1, w: 2, col: '#3a3e44' }); glow(x, 360, 220, 'rgba(255,160,80,1)', 0.5); for (let k = 0; k < 4; k++) { const tr = rect(x - 130 + k * 66, 520, 56, 80, { wash: '#c8282a', washA: 1, w: 1.6, col: '#3a0a08' }); friesPile(x - 102 + k * 66, 520, 0.3, 5, 9200 + k + x, { spread: 0.5 }); } rect(x - 160, 600, 320, 18, { wash: '#a8acb2', washA: 1, w: 1.6, col: '#3a3e44' }); }
    push(-80, 520, 1, -0.04); rect(-110, -140, 220, 280, { wash: '#fbf6ea', washA: 1, w: 2.4, col: '#2b2622' }); rect(-110, -140, 220, 60, { wash: '#2a4a8a', washA: 1, w: 2.4, col: '#2b2622' }); const yr = t < EV.tw_then - 0.2 ? '1989' : '1990'; const fl = clamp((t - EV.tw_then + 0.2) / 0.25);
    txt(yr, 0, 30 - (fl > 0 && fl < 1 ? Math.sin(fl * Math.PI) * 40 : 0), 80, { font: 'Osw', col: yr === '1990' ? '#d9482b' : '#2b2622' }); for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) rect(-90 + c * 30, 80 + r * 16, 22, 10, { wash: '#d8d0c0', washA: 1, line: false }); pop();
  }
  function fryer(x, t, k) {                                             // фритюрница из нержавейки: ванна с жиром, таймер, корзина висит
    push(x, 1380, 1); const b = rect(-200, -60, 400, 520, { wash: '#b8bcc2', washA: 1, w: 3, col: '#3a3e44', key: 9210 + k }); metalG(b.path, -60, 100, 500, '#ffffff', '#b8bcc2', '#6a6e74', 0.8); for (let i = 0; i < 5; i++) pencil([[-180 + i * 90, -40], [-180 + i * 90, 440]], { w: 1.4, col: '#ffffff', a: 0.4, pass2: false });
    const tub = rect(-180, -80, 360, 40, { wash: t > EV.tw_oil ? FR.oil : '#efe2b8', washA: 1, w: 2, col: '#5a4a20' }); const r = rng(hsh(FRAME, 9215 + k)); for (let i = 0; i < 10; i++) ell(-160 + r() * 320, -64 + r() * 20, 6, 4, { wash: '#fff6d0', washA: 0.7, w: 1, col: '#8a6a20', a: 0.5 });
    rect(-60, 60, 120, 60, { wash: '#1a1a1a', washA: 1, w: 2 }); txt(String(Math.max(0, 180 - Math.floor((t * 7 + k * 40) % 180))).padStart(3, '0'), 0, 92, 40, { font: 'Osw', col: '#ff4a2a' }); pop();
  }
  function tallow(t) {                                                  // брусок говяжьего жира: падает в фритюр, на «Потом» перечёркнут
    if (t < EV.tw_tallow - 0.4) return; const k = clamp((t - EV.tw_tallow + 0.4) / 0.5), y = lerp(600, 1220, k * k);
    push(700, y, 1, 0.1 * (1 - k)); const b = rect(-140, -100, 280, 180, { wash: FR.fat, washA: 1, w: 3, col: '#6a5a40', key: 9220 }); shadeG(b.path, 140, 80, -100, -100, '#c8b890', 0.5); rect(-120, -60, 240, 70, { wash: '#8a2a1a', washA: 1, w: 2, col: '#3a0a08' }); txt('BEEF TALLOW', 0, -24, 34, { font: 'Osw', col: '#fff8ec' });
    const x1 = clamp((t - EV.tw_then) / 0.3); if (x1 > 0) { pencil([[-150, -110], [-150 + 300 * x1, 90]], { w: 14, col: '#d9482b', pass2: false }); pencil([[150, -110], [150 - 300 * x1, 90 * x1 - 110 * (1 - x1) + 0]], { w: 14, col: '#d9482b', pass2: false }); } pop();
    if (k >= 1 && t < EV.tw_tallow + 0.6) { const q = (t - EV.tw_tallow - 0.1) / 0.5; for (let i = 0; i < 10; i++) { const a = 3.14 + i / 9 * 3.14; ell(700 + Math.cos(a) * 200 * q, 1300 + Math.sin(a) * 160 * q, 10, 12, { wash: '#efe2b8', washA: 1 - q, w: 1, col: '#8a6a20', a: 1 - q }); } }
  }
  function oilJug(t) {                                                  // канистра «VEGETABLE OIL» льёт струю
    if (t < EV.tw_oil - 0.4) return; const k = clamp((t - EV.tw_oil + 0.4) / 0.4); push(lerp(1300, 420, sm(k)), 1000, 1, -0.6 * k); const j = rect(-90, -150, 180, 220, { wash: '#f2c81e', washA: 0.95, w: 3, col: '#5a4a08', key: 9230 }); metalG(j.path, -40, -80, 200, '#fff6b0', '#f2c81e', '#a87a08', 0.5);
    rect(-70, -90, 140, 80, { wash: '#3a7a2a', washA: 1, w: 2, col: '#1a3a0a' }); txt('VEGETABLE', 0, -64, 22, { font: 'Osw', col: '#fff8ec' }); txt('OIL', 0, -34, 30, { font: 'Osw', col: '#fff8ec' }); rect(60, -190, 40, 50, { wash: '#2a2a2a', washA: 1, w: 2 }); pop();
    if (k >= 1) pencil(spline([[500, 920], [470, 1040], [420, 1180], [400, 1300]], false, 8), { w: 26, col: FR.oil, a: 0.9 });
  }
  function aroma(t) {                                                   // пипетка «BEEF FLAVOR», пар-корова над фри
    if (t < EV.tw_aroma - 0.5) return; const k = popK(t, EV.tw_aroma - 0.5, 0.3);
    push(860, 980, k, 0.2); rect(-30, -160, 60, 160, { wash: '#a8d0e8', washA: 0.7, w: 2.4, col: '#2a3a4a' }); rect(-34, -220, 68, 70, { wash: '#2a2a2a', washA: 1, w: 2 }); rect(-60, -100, 120, 50, { wash: '#8a2a1a', washA: 1, w: 1.6 }); txt('BEEF FLAVOR', 0, -74, 20, { font: 'Osw', col: '#fff8ec' }); pop();
    const ph = (t * 1.6) % 1; ell(860, 1000 + ph * 200, 8, 12, { wash: '#8a5a2a', washA: 1 - ph, w: 1, col: '#3a1a08', a: 1 - ph });
    const q = clamp((t - EV.tw_aroma) / 0.8); if (q > 0) { push(600, 820 - q * 60, 0.9); ctx.save(); ctx.globalAlpha = 0.8 * q; const C = { wash: '#ffffff', washA: 0.9, w: 3, col: '#a8a090' };   // пар-корова: туловище, ноги, голова с рогами, пятна
      for (const lx of [-110, -60, 70, 120]) rect(lx - 14, 40, 28, 90, C); const bd = ell(0, 0, 170, 80, C); ell(-60, -20, 46, 30, { wash: '#6a5a4a', washA: 0.5, line: false }); ell(60, 30, 34, 22, { wash: '#6a5a4a', washA: 0.5, line: false });
      ell(200, -60, 64, 52, C); ell(236, -40, 34, 24, { wash: '#f0c0c0', washA: 0.9, w: 2, col: '#a8a090' }); ell(190, -78, 7, 7, { wash: '#2a1a0a', washA: 1, line: false }); for (const sd of [-1, 1]) { poly([[180 + sd * 30, -104], [176 + sd * 50, -150], [194 + sd * 34, -110]], { wash: '#f4ead2', washA: 1, w: 2, col: '#a8a090' }); ell(156 + sd * 4, -98 + sd * 4, 22, 10, C); }
      pencil(spline([[-170, -10], [-210, 20], [-200, 70]], false, 6), { w: 6, col: '#ffffff', a: 0.9, pass2: false }); ctx.restore(); pop(); bubbleTag('МУ?', 900, 760, t, EV.tw_aroma + 0.5, '#d9482b', 50, 0.08); }
  }
  WORLD.tallow = (t, u, cat) => {
    lay(12, () => { wall(t); haze('#fff4e0', 0.05); });
    lay(1.6, () => { fryer(220, t, 0); fryer(820, t, 1); });
    lay(1, () => { cat(); });
    lay(0.88, () => { tallow(t); oilJug(t); aroma(t); steam2(820, 1250, t, 5, 0.4, 96, 400); const tb = rect(-300, 1520, 1700, 600, { wash: '#a8acb2', washA: 1, w: 3, col: '#3a3e44', key: 9240 }); metalG(tb.path, 300, 1560, 900, '#ffffff', '#a8acb2', '#5a5e64', 0.7); for (let i = 0; i < 3; i++) fryCone(160 + i * 100, 1540, 0.28, t, { kind: 'stripe', seed: 9250 + i, steam: false }); });
  };
  DIR.tallow = {
    outfit: 'cook50', light: { side: 1, rim: '#ffe8b0' }, grade: ['#ffd090', 0.06],
    act: () => [[S0.tallow, 'talk'], [EV.tw_tallow, 'proud'], [EV.tw_then, 'sideeye'], [EV.tw_oil, 'grin'], [EV.tw_aroma - 0.2, 'suspicious'], [EV.tw_aroma + 0.6, 'shock']],
    pose: (t, u, b) => Object.assign(b, { x: 560, y: 1620, s: 1.0, look: t < EV.tw_then ? [0.7, 0.4] : t < EV.tw_aroma ? [-0.6, -0.2] : [0.6, -0.5], hand: [120, -260], prop: 'basketP', propAng: 0.2, handF: [-110, -190], tilt: t > EV.tw_aroma ? 0.08 : 0 }),
    cam: () => [[S0.tallow, 640, 1150, 0.22], [EV.tw_tallow, 720, 1200, 0.3], [EV.tw_then - 0.1, 400, 980, 0.2, 'x'], [EV.tw_oil, 520, 1120, 0.22], [EV.tw_aroma, 700, 1000, 0.3, 'x'], [S1.tallow, 680, 980, 0.34]]
  };
  // ---------------------------------------------------------------- переход: лавина фри высыпается на кадр и съезжает вниз
  TRANS_IN.tallow = { a: 0.3, b: 0.4, runA: 1, fx(k, t, A, B) {
    drawBuf(k < 0.5 ? A : B, 1, 540, 960); const fill = k < 0.5 ? sm(k / 0.5) : 1, slide = k < 0.5 ? 0 : sm((k - 0.5) / 0.5) * 2600;
    scr(() => { for (let i = 0; i < 90; i++) { const r = rng(2800 + i), x = r() * 1180 - 50, yEnd = 1920 - (i / 90) * 2100 * fill, y = Math.min(yEnd, -200 + fill * 2600 * (0.6 + r() * 0.4)) + slide; if (y > 2200 || y < -260) continue;
      fry(x, y, 220 + r() * 120, (r() - 0.5) * 2.4, { w: 34, key: 2810 + i }); } });
  } };
})();
