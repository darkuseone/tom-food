/* 010 — `today` + `button`: «Мир съедает чипсов на 36 миллиардов долларов в год. Сыр с луком или паприка?» Супермаркет: бесконечный ряд полок, стена пачек всех
   цветов, неоновые таблички, покупатели с тележками. На «36» над рядом падает гигантский ценник $36 000 000 000 В ГОД, пачки дождём сыплются в тележку Тома;
   на «луком» слева подсвечивается зелёная пачка СЫР И ЛУК, на «паприка?» справа — красная ПАПРИКА. Том в худи с тележкой. `button`: Том хрустит чипсом и подмигивает.
   Переход В сцену: тележка проезжает через кадр и «увозит» прошлую сцену. */
(() => {
  EV.td_36 = wtw('t1', '36');
  EV.td_onion = wtw('t1', 'луком');
  EV.td_pap = wtw('t1', 'паприка?');
  EV.bt_wink = LF('x1', 0.6);
  SHAKES.push([EV.td_36 + 0.2, 0.2, 9]);
  KEYW.push('36');

  const COLS = ['#2a8a3a', '#c8282a', '#2a5aa8', '#e8a020', '#7a2a8a', '#1a1a1a', '#e85a8a'];
  function aisle(t) { vgrad(-600, 1500, ['#e8eef2', '#dce4ea', '#c8d4dc']); for (let i = 0; i < 6; i++) { rect(-200 + i * 260, -300, 200, 40, { wash: '#fbfdff', washA: 1, w: 1.6, col: '#a8b0b8' }); glow(-100 + i * 260, -280, 120, 'rgba(255,255,240,1)', 0.3); }
    push(540, 200, 1); rect(-220, -50, 440, 100, { wash: '#d9282b', washA: 1, w: 3, col: '#5a0a0a', key: 12200 }); txt('ЧИПСЫ · СНЕКИ', 0, 18, 52, { font: 'Osw', col: '#fff8ec' }); pop();
    for (let r = 0; r < 4; r++) { const y = 420 + r * 230; rect(-300, y, 1700, 20, { wash: '#a8b0b8', washA: 1, w: 2, col: '#5a6068' }); for (let i = 0; i < 9; i++) { const x = -160 + i * 150 + (r % 2) * 60; chipBag(x, y - 80, 0.42, t, { col: COLS[(i + r * 3) % COLS.length], label: ['ЧИПСЫ', 'CRISPS', 'ВОЛНА', 'ХРУСТ'][(i + r) % 4], size: 34, rot: ((i + r) % 3 - 1) * 0.05 }); } } }
  function shoppers(t) { for (let i = 0; i < 2; i++) { const wk = ((t * 0.12) + i * 0.5) % 1, x = lerp(i ? 1300 : -200, i ? -200 : 1300, wk); human(x, 1330, 1.05, t, { body: ['#3a6a8a', '#e8486a'][i], hair: ['#2a1a0a', '#c8783a'][i], face: 'smile', armL: 'hold', armR: 'hold', seed: 1220 + i, flip: i ? -1 : 1, look: 0.2, long: i }); push(x + (i ? -110 : 110), 1330, 0.8); rect(-70, -120, 140, 90, { line: true, w: 3, col: '#8a8a90' }); for (const sd of [-1, 1]) ell(sd * 50, 0, 12, 12, { wash: '#3a3a3a', washA: 1, line: false }); pop(); } }
  function hero(t) { if (t > EV.td_36 - 0.1) { const k = clamp((t - EV.td_36 + 0.1) / 0.35), y = lerp(-200, 760, sm(k)); push(540, y, 1, -0.05 + (1 - k) * 0.3); rect(-330, -90, 660, 180, { wash: '#f2c838', washA: 1, w: 5, col: '#2a1a0a' }); txt('$36 000 000 000', 0, 0, 78, { font: 'Osw', col: '#2a1a0a' }); txt('В ГОД', 0, 64, 34, { font: 'Osw', col: '#7a1a1a' }); pop();
      for (let i = 0; i < 10; i++) { const q = clamp((t - EV.td_36 - 0.2 - i * 0.07) / 0.6); if (q <= 0 || q >= 1) continue; chipBag(lerp(200 + i * 70, 470, q), lerp(-100, 1380, q * q), 0.3, t, { col: COLS[i % COLS.length], label: 'ЧИПСЫ', size: 30, rot: q * 5 + i }); } }
    push(470, 1460, 1); rect(-170, -170, 340, 150, { line: true, w: 5, col: '#7a7a82' }); for (let i = 0; i < 6; i++) pencil([[-170 + i * 68, -170], [-160 + i * 68, -20]], { w: 2, col: '#9a9aa2', pass2: false }); for (let i = 0; i < 6; i++) if (t > EV.td_36 + 0.3 + i * 0.08) chipBag(-120 + i * 48, -150, 0.3, t, { col: COLS[i % COLS.length], label: 'ЧИПСЫ', size: 28, rot: (i - 3) * 0.15 });
      rect(-180, -20, 360, 20, { wash: '#7a7a82', washA: 1, line: false }); for (const sd of [-1, 1]) ell(sd * 140, 30, 22, 22, { wash: '#2a2a2a', washA: 1, w: 2 }); pencil([[170, -170], [230, -230]], { w: 8, col: '#7a7a82' }); pop();
    const o = t > EV.td_onion - 0.05 && t < EV.td_pap + 1.6, p = t > EV.td_pap - 0.05; if (o) glow(220, 1040, 200, 'rgba(120,255,140,1)', 0.45); if (p) glow(800, 1000, 200, 'rgba(255,120,100,1)', 0.45);
    chipBag(220, 1050 - (o ? 30 : 0), 0.62 * (o ? 1.1 : 1), t, { col: '#2a8a3a', label: 'СЫР', sub: 'И ЛУК', size: 44, seasoned: true, rot: -0.08 }); chipBag(800, 1010 - (p ? 30 : 0), 0.62 * (p ? 1.1 : 1), t, { col: '#c8282a', label: 'ПАПРИКА', size: 34, seasoned: '#a8341a', rot: 0.08 }); }
  WORLD.today = (t, u, cat) => { lay(10, () => aisle(t)); lay(2.4, () => shoppers(t)); lay(1, () => { rect(-300, 1540, 1700, 600, { wash: '#d8dee4', washA: 1, w: 2, col: '#8a9098', key: 12210 }); for (let i = 0; i < 12; i++) pencil([[-300 + i * 160, 1540], [-200 + i * 180, 2100]], { w: 2, col: '#a8b0b8', a: 0.6, pass2: false }); hero(t); cat(); }); };
  DIR.today = {
    outfit: 'hoodie70', light: { side: 1, rim: '#ffffff' }, grade: ['#a8c8e8', 0.04],
    act: () => [[S0.today, 'talk'], [EV.td_36, 'shock'], [EV.td_36 + 0.8, 'grin'], [EV.td_onion, 'smug'], [EV.td_pap, 'suspicious']],
    pose: (t, u, b) => Object.assign(b, { x: 720, y: 1820, s: 1.12, flip: true, look: t < EV.td_onion ? [-0.4, -0.8] : t < EV.td_pap ? [-0.9, -0.3] : [0.6, -0.3], hand: t > EV.td_onion - 0.1 && t < EV.td_pap ? [300, -360] : [140, -300], point: t > EV.td_onion - 0.1 && t < EV.td_pap, handF: t > EV.td_pap - 0.1 ? [-200, -380] : [-90, -240] }),
    cam: () => [[S0.today, 560, 1060, 0.12], [EV.td_36, 540, 900, 0.22, 'x'], [EV.td_onion, 420, 1100, 0.26], [EV.td_pap, 640, 1080, 0.26], [S1.today, 560, 1100, 0.2]]
  };
  TRANS_IN.today = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {                // тележка проезжает через кадр и «увозит» прошлую сцену
    const q = sm(k), x = lerp(-700, W + 700, q); drawBuf(B, 1, 540, 960); ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.rect(x, 0, W, H); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
    scr(() => { push(x, 1100, 3); rect(-170, -170, 340, 150, { line: true, w: 4, col: '#7a7a82' }); rect(-180, -20, 360, 20, { wash: '#7a7a82', washA: 1, line: false }); for (const sd of [-1, 1]) ell(sd * 140, 30, 22, 22, { wash: '#2a2a2a', washA: 1, w: 2 }); pop(); });
  } };
  WORLD.button = (t, u, cat) => WORLD.today(t, u, cat);
  DIR.button = { outfit: 'hoodie70', light: { side: 1, rim: '#ffffff' }, grade: ['#a8c8e8', 0.04], act: () => [[S0.button, 'grin'], [EV.bt_wink - 0.3, 'laugh'], [EV.bt_wink, 'wink']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1810, s: 1.15, flip: true, look: [0, 0.2], hand: t > EV.bt_wink - 0.5 ? [60, -360] : [150, -320], handF: [-90, -230], prop: 'chipP', tailUp: true }),
    cam: () => [[S0.button, 600, 1150, 0.2], [DUR - 0.5, 580, 1080, 0.16], [DUR, 580, 1080, 0.16]] };
})();
