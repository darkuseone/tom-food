/* 018 — `palace`: «Легенда: королева Маргарита выбрала у пекаря Эспозито пиццу цветов флага. Отсюда имя.» 1889, дворец Каподимонте: стены в красном
   дамаске с золотыми пилястрами, высокие окна на залив и Везувий (главный свет — закатное окно справа, пучок света через зал), хрустальная люстра,
   портреты в золотых рамах, паркет-ёлочка, гвардейцы у дверей, придворные дамы с веерами. За столом с белой скатертью и серебром — королева в белом
   с жемчугом и диадемой, рядом король с пышными усами; пекарь Эспозито в белом колпаке с тремя пиццами на лопатах. Том-лакей в синей ливрее и
   двууголке подаёт серебряный поднос. По словам: «Легенда:» — золотые буквы LEGENDA на ленте; «Маргарита» — королева поднимает лорнет; «Эспозито» —
   пекарь кланяется, три пиццы выезжают на стол; «цветов флага» — над маргаритой разворачивается трёхцветная лента, базилик/моцарелла/томат подсвечены;
   «Отсюда имя.» — табличка «PIZZA MARGHERITA» выпрыгивает, дамы аплодируют. Переход В сцену: золотая рамка письма наезжает и становится рамой дворцового окна. */
(() => {
  EV.pl_leg = LS('s1') + 0.05;
  EV.pl_queen = wtw('s1', 'Маргарита');
  EV.pl_esp = wtw('s1', 'Эспозито');
  EV.pl_flag = wtw('s1', 'флага.');
  EV.pl_name = wtw('s1', 'имя.');
  SHAKES.push([EV.pl_name, 0.16, 6]);
  KEYW.push('флага.', 'имя.');

  function hall(t) {                                                    // дамаск, пилястры, окна на залив, портреты, карниз
    vgrad(-800, 1500, ['#3a0e10', '#6a1a1c', '#8a2a24']);
    for (let x = -600; x < 1800; x += 90) for (let y = -700; y < 1300; y += 120) { push(x + ((y / 120) % 2) * 45, y, 1); blob([[0, -40], [18, -14], [8, 0], [24, 26], [0, 40], [-24, 26], [-8, 0], [-18, -14]], { wash: '#a8322a', washA: 0.55, w: 0.8, col: '#5a1010' }); pop(); }
    for (let i = 0; i < 8; i++) { const x = -560 + i * 300, p = rect(x, -700, 70, 1900, { wash: '#d6a842', washA: 1, w: 2, col: '#5a3a08', key: 18300 + i }); shadeG(p.path, x + 70, 0, x, 0, '#7a5a10', 0.5); for (let k = 0; k < 6; k++) pencil([[x + 10, -600 + k * 300], [x + 60, -600 + k * 300]], { w: 4, col: '#fff0a0', a: 0.5, pass2: false }); }
    rect(-700, -760, 2600, 90, { wash: '#d6a842', washA: 1, w: 2.4, col: '#5a3a08' }); for (let i = 0; i < 40; i++) ell(-680 + i * 66, -716, 14, 20, { wash: '#f0c860', washA: 1, w: 1, col: '#6a4a10' });
    for (const wx of [920, 1380]) { push(wx, 160, 1); const w = rect(-150, -520, 300, 800, { wash: '#f4c890', washA: 1, w: 8, col: '#d6a842', key: 18310 + wx }); ctx.save(); ctx.clip(w.path); vgrad(-520, 280, ['#e8905a', '#f8c890', '#a8c8e0']); sil([[-200, 120], [-60, 60], [20, -60], [60, -70], [110, -40], [220, 80], [220, 300], [-200, 300]], '#7a6a9a', 0.9); ell(60, -110, 30, 20, { wash: '#b8a8c8', washA: 0.5, line: false }); rect(-200, 120, 420, 200, { wash: '#5a7aa8', washA: 1, line: false }); for (let i = 0; i < 4; i++) { const sx = ((t * 20 + i * 120) % 400) - 200; poly([[sx, 150], [sx + 30, 150], [sx + 14, 110]], { wash: '#f8f4ea', washA: 1, w: 1 }); } ctx.restore();
      pencil([[0, -520], [0, 280]], { w: 7, col: '#d6a842' }); for (let k = 1; k < 4; k++) pencil([[-150, -520 + k * 200], [150, -520 + k * 200]], { w: 5, col: '#d6a842' }); for (const sd of [-1, 1]) { const c = blob([[sd * 150, -560], [sd * 230, -300], [sd * 200, 300], [sd * 160, 300], [sd * 140, -560]], { wash: '#c8b070', washA: 1, w: 2, col: '#5a4a10', key: 18320 + wx + sd }); shadeG(c.path, sd * 230, 0, sd * 140, 0, '#6a5a20', 0.5); } pop(); }
    for (const [px, py, nm] of [[300, -250, 'RE'], [-200, -250, 'REGINA']]) { push(px, py, 1); rect(-120, -160, 240, 320, { wash: '#d6a842', washA: 1, w: 3, col: '#5a3a08' }); rect(-100, -140, 200, 280, { wash: '#4a3a2a', washA: 1, w: 1.4 }); human(0, 140, 0.62, t, { body: nm === 'RE' ? '#1a2a5a' : '#f4f0e6', hair: '#3a2a1a', face: 'calm', armL: 'hold', armR: 'hold', seed: 18330 + px, long: nm !== 'RE' ? 1 : 0, hat: 'crown' }); pop(); }
    shaft(1050, -300, 260, 2300, 0.5, 'rgba(255,214,150,1)', 0.16);
  }
  function chandelier(t) { push(380, -420, 1); pencil([[0, -400], [0, 0]], { w: 5, col: '#c8a050' }); for (let r = 0; r < 3; r++) { const n = 8 + r * 4, R = 60 + r * 55; for (let i = 0; i < n; i++) { const a = i / n * 6.283 + t * 0.08, x = Math.cos(a) * R, y = r * 46 + Math.sin(a) * R * 0.18;
      pencil([[x, y], [x, y + 46]], { w: 1.4, col: '#e8f0f6', a: 0.7, pass2: false }); ell(x, y + 52, 5, 9, { wash: '#f4fbff', washA: 0.9, w: 1, col: '#8aa0b0' }); } } glow(0, 90, 260, 'rgba(255,236,190,1)', 0.3); pop(); }
  function court(t) {                                                   // гвардейцы, дамы с веерами, король
    for (const [x, fl, sd] of [[-460, 1, 18340], [1180, -1, 18341]]) { human(x, 1120, 1.0, t, { body: '#1a2a5a', legs: '#f0ece0', hair: '#1a1a1a', face: 'calm', armL: 'down', armR: 'hold', prop: 'spear', seed: sd, flip: fl, trim: '#d6a842', belt: '#f4f0e6', hat: 'helmet', hatCol: '#c8c8d0' }); }
    const clap = t > EV.pl_name;
    for (const [x, b, hr, sd, fl] of [[-280, '#c88aa8', '#c88a3a', 18342, 1], [-150, '#8aa8c8', '#3a2a1a', 18343, 1], [960, '#a8c88a', '#6a4a2a', 18344, -1]]) { human(x, 1180, 0.95, t, { body: b, legs: b, hair: hr, face: clap ? 'grin' : t > EV.pl_flag ? 'shock' : 'smile', armL: clap ? 'up' : 'hold', armR: clap ? 'wave' : 'hold', look: 0.4 * fl, seed: sd, flip: fl, long: 1 });
      push(x + 40 * fl, 1180 - 230, 1, Math.sin(t * 6 + sd) * 0.3); poly([[0, 0], [-40, -50], [-14, -60], [14, -60], [40, -50]], { wash: '#f4e8d0', washA: 1, w: 1.2, col: '#8a6a4a' }); for (let i = -2; i <= 2; i++) pencil([[0, 0], [i * 14, -58]], { w: 1, col: '#8a6a4a', pass2: false }); pop(); }
  }
  function royals(t) {                                                  // стол, королева, король, Эспозито с тремя пиццами
    human(-20, 1300, 1.15, t, { body: '#1a2a5a', legs: '#1a1a2a', hair: '#e8e0d0', face: t > EV.pl_flag ? 'grin' : 'calm', armL: 'hips', armR: 'hold', look: 0.5, seed: 18350, trim: '#d6a842', belt: '#c8221a' }); push(-20, 1300, 1.15); blob([[0, -282], [-40, -278], [-70, -268], [-40, -270], [0, -276], [40, -270], [70, -268], [40, -278]], { wash: '#e8e0d0', washA: 1, w: 1.4, col: '#6a6a6a' }); for (let i = 0; i < 3; i++) ell(-20 + i * 14, -200 + i * 6, 8, 8, { wash: '#d6a842', washA: 1, w: 1 }); pop();
    const qx = 200, lor = t > EV.pl_queen; human(qx, 1300, 1.12, t, { body: '#f8f4ec', legs: '#f8f4ec', hair: '#c8a060', face: t > EV.pl_flag ? 'grin' : 'smile', armL: 'hold', armR: lor ? 'up' : 'hold', look: 0.6, seed: 18351, long: 1, hat: 'crown', hatCol: '#d6a842' });
    push(qx, 1300, 1.12); for (let i = 0; i < 9; i++) ell(-34 + i * 8.5, -226 + Math.sin(i / 8 * 3.14) * 16, 4, 4, { wash: '#ffffff', washA: 1, w: 0.8, col: '#a8a8a8' }); if (lor) { push(80, -360, 1, 0.3); pencil([[0, 0], [0, 50]], { w: 3, col: '#d6a842' }); ell(-12, -6, 12, 10, { wash: '#d8ecf4', washA: 0.4, w: 2, col: '#d6a842' }); ell(12, -6, 12, 10, { wash: '#d8ecf4', washA: 0.4, w: 2, col: '#d6a842' }); pop(); } pop();
    const tb = rect(-260, 1180, 780, 140, { wash: '#f8f6ee', washA: 1, w: 2.4, col: '#5a5a5a', key: 18352 }); shadeG(tb.path, 0, 1320, 0, 1180, '#c8c4b8', 0.4); for (let i = 0; i < 8; i++) pencil(spline([[-250 + i * 100, 1180], [-240 + i * 100, 1250], [-256 + i * 100, 1320]], false, 4), { w: 1.4, col: '#d8d4c8', pass2: false });
    for (const cx of [-200, 450]) candle(cx, 1180, 0.9, t, cx); for (const gx of [-120, 380]) { push(gx, 1180, 1); pencil([[0, 0], [0, -30]], { w: 3, col: '#c8d8e0' }); poly([[-14, -80], [14, -80], [6, -30], [-6, -30]], { wash: '#e8d070', washA: 0.5, w: 1.4, col: '#6a7a8a' }); pop(); }
    const k = sm(clamp((t - EV.pl_esp + 0.2) / 0.5)), ex = lerp(640, 430, k), bow = t > EV.pl_esp && t < EV.pl_esp + 0.9 ? Math.sin((t - EV.pl_esp) / 0.9 * 3.14) : 0;
    push(ex, 1320, 1, 0); human(0, 0, 1.08, t, { body: '#f4f1ea', legs: '#2a2a34', hair: '#2a1a0a', face: 'grin', armL: 'hold', armR: 'point', look: -0.8, seed: 18353, flip: -1, belt: '#c8221a' }); pop(); hat20(ex, 1320 + bow * 30, 1.08, 'chef', '#3a3028', -1); stache(ex, 1320 + bow * 30, 1.08, -1);
    for (const [i, kind] of [[0, 'mar'], [1, 'cheese'], [2, 'marg']].map((v, i) => [i, v[1]])) { const pk = sm(clamp((t - EV.pl_esp - i * 0.15) / 0.4)); if (pk <= 0) continue; const px = lerp(600, -150 + i * 210, pk);
      if (kind === 'marg') { margherita(px, 1172, 0.36, t, { tilt: 0.3, steam: 1, key: 18360 }); if (t > EV.pl_flag) { const fk = sm(clamp((t - EV.pl_flag) / 0.5)); push(px, 1040, 1); for (const [j, c] of ['#2c8a3a', '#f8f6ee', '#c8221a'].entries()) rect(-240 + j * 160 * fk, -60, 160 * fk, 90, { wash: c, washA: 1, w: 1.6, col: '#3a3a3a' }); pop(); } }
      else { push(px, 1172, 0.36); ell(0, 0, 300, 90, { wash: PZ.crust, washA: 1, w: 3, col: PZ.char }); ell(0, 0, 240, 70, { wash: kind === 'mar' ? PZ.sauce : '#f4ecd0', washA: 1, w: 2, col: '#5a2a1a' }); for (let j = 0; j < 8; j++) ell(-160 + j * 45, ((j * 37) % 60) - 30, 10, 6, { wash: kind === 'mar' ? '#f4ecdc' : '#c8a050', washA: 1, line: false }); pop(); } }
  }
  function banners(t) {                                                 // лента LEGENDA и табличка PIZZA MARGHERITA
    if (t > EV.pl_leg) { const k = popK(t, EV.pl_leg, 0.4); push(540, 820, k, -0.03); const b = poly([[-280, -40], [280, -40], [320, 0], [280, 40], [-280, 40], [-320, 0]], { wash: '#d6a842', washA: 1, w: 2.4, col: '#5a3a08' }); shadeG(b.path, 0, 40, 0, -40, '#8a6a10', 0.4); txt('LEGENDA · 1889', 0, 16, 44, { font: 'Osw', col: '#4a1a08' }); pop(); }
    if (t > EV.pl_name) { const k = popK(t, EV.pl_name, 0.4); push(600, 1000, k, 0.04); rect(-250, -70, 500, 130, { wash: '#f8f2dc', washA: 1, w: 4, col: '#8a1a0e' }); rect(-250, -70, 166, 16, { wash: '#2c8a3a', washA: 1, line: false }); rect(-84, -70, 168, 16, { wash: '#f8f6ee', washA: 1, line: false }); rect(84, -70, 166, 16, { wash: '#c8221a', washA: 1, line: false }); txt('PIZZA', 0, -8, 40, { font: 'Osw', col: '#8a1a0e' }); txt('MARGHERITA', 0, 44, 50, { font: 'Osw', col: '#8a1a0e' }); pop(); }
  }
  function floor(t) { const f = rect(-700, 1300, 2600, 900, { wash: '#8a5a2a', washA: 1, w: 2, col: '#3a1a08', key: 18370 }); for (let i = 0; i < 30; i++) for (let j = 0; j < 6; j++) { const x = -700 + i * 90, y = 1300 + j * 110; poly([[x, y], [x + 45, y + 55], [x, y + 110], [x - 45, y + 55]], { wash: (i + j) % 2 ? '#9a6a34' : '#7a4a22', washA: 0.7, w: 0.8, col: '#4a2a10' }); }
    lightPool(900, 1500, 520, 160, 'rgba(255,200,140,1)', 0.35); castShadow(200, 1300, 160, 220, -0.8, 0.28); castShadow(-20, 1300, 140, 220, -0.8, 0.28); }
  function front(t) { for (const sd of [-1, 1]) { const x = sd < 0 ? -260 : 1340; const c = blob([[x - 100, -900], [x + 120, -900], [x + 80 * -sd + 40, 600], [x + 140, 2300], [x - 140, 2300], [x - 60, 600]], { wash: '#7a1012', washA: 1, w: 2.4, col: '#2a0404', key: 18380 + sd }); shadeG(c.path, x + 140 * sd, 0, x - 140 * sd, 0, '#2a0404', 0.6); for (let i = 0; i < 4; i++) pencil(spline([[x - 60 + i * 40, -900], [x - 40 + i * 40, 700], [x - 70 + i * 40, 2300]], false, 6), { w: 2, col: '#c8343a', a: 0.4, pass2: false }); pencil([[x - 120, 600], [x + 120, 640]], { w: 10, col: '#d6a842' }); } }
  WORLD.palace = (t, u, cat) => {
    lay(12, () => { hall(t); haze('#ffd0a0', 0.05); });
    lay(6, () => { chandelier(t); court(t); });
    lay(1.7, () => { push(-80, 70, 1); royals(t); pop(); haze('#ffd8a0', 0.03); });
    lay(1, () => { floor(t); cat(); banners(t); });
    lay(0.6, () => { front(t); motes(18, [-200, 200, 1300, 1600], '#fff0c0', t, 18390, { sp: 5, sz: 3, a: 0.5, wob: 3 }); moodDark(900, 600, 600, 1500, '#1a0818', 0.45); });
  };
  DIR.palace = {
    outfit: 'liveryA', light: { side: 1, rim: '#ffd090' }, grade: ['#ffb070', 0.08],
    act: () => [[S0.palace, 'proud'], [EV.pl_queen, 'awe'], [EV.pl_esp, 'smug'], [EV.pl_flag, 'grin'], [EV.pl_name, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 720, y: 1600, s: 1.15, flip: 1, look: t < EV.pl_esp ? [-0.8, -0.3] : [-0.6, 0.1], hand: [150, -300], handF: t > EV.pl_name ? [-160, -420] : [-80, -220], prop: 'trayP', propAng: 0, point: t > EV.pl_flag && t < EV.pl_name ? 1 : undefined }),
    cam: () => [[S0.palace, 540, 1000, 0.26], [EV.pl_queen, 420, 1130, 0.3, 'x'], [EV.pl_esp, 500, 1150, 0.26], [EV.pl_flag, 440, 1130, 0.3], [EV.pl_name, 560, 1150, 0.26], [S1.palace, 580, 1160, 0.28]]
  };
  // ---------------------------------------------------------------- переход: золотая рама письма наезжает и становится окном дворца
  TRANS_IN.palace = { a: 0.3, b: 0.45, runA: 0.5, fx(k, t, A, B) {
    const e = sm(k); drawBuf(A, 1 + e * 2.2, 540, 960, 1 - e * 0.3); const w = lerp(300, 1500, e), h = lerp(390, 2400, e), P = new Path2D(); P.rect(540 - w / 2, 960 - h / 2, w, h);
    inPath(P, () => drawBuf(B, lerp(0.6, 1, e), 540, 960)); scr(() => { const x0 = 540 - w / 2, y0 = 960 - h / 2; pencil([[x0, y0], [x0 + w, y0], [x0 + w, y0 + h], [x0, y0 + h], [x0, y0]], { w: 26 * (1 - e) + 6, col: '#d6a842', pass2: false, gap: false }); pencil([[540 - w / 2 + 10, 960 - h / 2 + 10], [540 + w / 2 - 10, 960 - h / 2 + 10]], { w: 6, col: '#fff0a0', a: 0.6 * (1 - e), pass2: false }); });
  } };
})();
