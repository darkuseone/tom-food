/* 018 — `hook` + `button`: «Письмо королевы о пицце висит в пиццерии Неаполя. А если оно — фальшивка? / Откусим историю!» Ночная пиццерия в Неаполе:
   стена в бело-зелёной майолике, полки с банками томатов, бутылями масла, мешками муки, фото в рамках; окно на Везувий под луной; гирлянда лампочек;
   слева — дровяная печь-купол в золотой мозаике (главный свет, тёплый), пиццайоло с лопатой; посетители за столиками. Над стойкой — золотая рамка
   с письмом «CASA REALE» и сургучной печатью (герой-предмет). Том в худи с фартуком за мраморной стойкой с горячей Маргаритой.
   По словам: «Письмо королевы» — камера у рамки, печать блестит; «висит в пиццерии» — отъезд на зал; «фальшивка?» — красный штамп «ФАЛЬШИВКА?» шлёпается
   на письмо, гости ахают; «Откусим историю!» — Том откусывает кусок, сыр тянется длинной нитью, хруст. `button`: тот же кадр, Том подмигивает → петля. */
(() => {
  EV.hk_letter = 0.1;
  EV.hk_hall = wtw('h1', 'висит');
  EV.hk_fake = wtw('h1', 'фальшивка?');
  EV.hk_grab = LS('h2') - 0.1;
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_fake + 0.05, 0.2, 10], [EV.hk_bite, 0.18, 8]);
  KEYW.push('фальшивка?');

  function sky(t) {                                                     // окно: ночной залив, Везувий с дымком, луна, огни берега
    vgrad(-300, 600, ['#0e1638', '#24305a', '#4a4a6a']); ell(330, -120, 40, 40, { wash: '#f8f0d0', washA: 1, w: 1.4, col: '#a89a70' }); glow(330, -120, 120, 'rgba(255,240,200,1)', 0.3);
    sil([[-200, 420], [60, 400], [200, 230], [260, 220], [330, 250], [480, 400], [700, 420], [700, 600], [-200, 600]], '#1a1a30', 1); for (let i = 0; i < 4; i++) { const k = (t * 0.2 + i / 4) % 1; ell(250 + k * 60, 200 - k * 160, 20 + k * 40, 12 + k * 20, { wash: '#6a6a8a', washA: 0.4 * (1 - k), line: false }); }
    rect(-200, 420, 900, 200, { wash: '#14204a', washA: 1, line: false }); const r = rng(18201); for (let i = 0; i < 26; i++) { const x = -180 + r() * 860; ell(x, 410 + r() * 14, 3, 3, { wash: '#ffd890', washA: 0.9, line: false }); pencil([[x, 424], [x, 440 + r() * 30]], { w: 2, col: '#ffd890', a: 0.4, pass2: false }); }
  }
  function wall(t) {                                                    // майолика, окно, полки, фото, гирлянда
    vgrad(-700, 1500, ['#2a1a14', '#4a2e1e', '#5a3a24']);
    for (let x = -500; x < 1700; x += 64) for (let y = 560; y < 1460; y += 64) { const g = ((x / 64) | 0) + ((y / 64) | 0); rect(x, y, 62, 62, { wash: g % 2 ? '#e8e2d0' : '#d8d2bc', washA: 1, w: 0.8, col: '#7a7060' }); if (g % 3 === 0) { ell(x + 31, y + 31, 16, 16, { wash: '#2a7a4a', washA: 0.8, w: 1, col: '#1a4a2a' }); ell(x + 31, y + 31, 6, 6, { wash: '#e8b040', washA: 1, line: false }); } }
    rect(-500, 540, 2200, 24, { wash: '#2a5a3a', washA: 1, w: 2, col: '#0a2a1a' });
    for (let x = -500; x < 1700; x += 120) { const b = rect(x, -700, 118, 1240, { wash: '#5a3420', washA: 1, w: 1.4, col: '#2a1408' }); hatch(b.path, b.bb, { gap: 11, a: 0.12, col: '#2a1408', ang: 1.5, key: 18210 + x }); }
    push(-60, 120, 1); const w = rect(-260, -320, 520, 560, { wash: '#24305a', washA: 1, w: 10, col: '#3a2010', key: 18220 }); ctx.save(); ctx.clip(w.path); push(-260, -200, 1); sky(t); pop(); ctx.restore(); pencil([[0, -320], [0, 240]], { w: 8, col: '#3a2010' }); pencil([[-260, -40], [260, -40]], { w: 8, col: '#3a2010' }); for (const sd of [-1, 1]) { const c = blob([[sd * 270, -340], [sd * 330, -100], [sd * 300, 260], [sd * 250, 260], [sd * 240, -340]], { wash: '#8a1a1a', washA: 1, w: 2, col: '#3a0808', key: 18221 + sd }); shadeG(c.path, sd * 330, 0, sd * 240, 0, '#3a0404', 0.5); } pop();
    for (const [sx, sy] of [[440, 160], [440, 380], [1180, 160], [1180, 380]]) { rect(sx - 170, sy, 340, 18, { wash: '#7a4a24', washA: 1, w: 1.8, col: '#2a1408' }); const r = rng(18230 + sx + sy); for (let i = 0; i < 7; i++) { const x = sx - 150 + i * 46, kind = (i + sy) % 3;
      if (kind === 0) { rect(x - 16, sy - 60, 34, 60, { wash: '#c8221a', washA: 1, w: 1.4, col: '#4a0a04' }); rect(x - 16, sy - 44, 34, 24, { wash: '#f4e8c8', washA: 1, w: 1 }); ell(x + 1, sy - 32, 8, 8, { wash: '#c8221a', washA: 1, line: false }); }
      else if (kind === 1) { blob([[x - 14, sy], [x - 16, sy - 60], [x - 6, sy - 76], [x - 6, sy - 100], [x + 6, sy - 100], [x + 6, sy - 76], [x + 16, sy - 60], [x + 14, sy]], { wash: '#8a9a3a', washA: 0.85, w: 1.4, col: '#3a4a10' }); ell(x - 6, sy - 50, 3, 14, { wash: '#ffffff', washA: 0.5, line: false }); }
      else { blob([[x - 20, sy], [x - 22, sy - 50], [x, sy - 62], [x + 22, sy - 50], [x + 20, sy]], { wash: '#efe6d0', washA: 1, w: 1.4, col: '#7a6a4a' }); txt('00', x, sy - 22, 14, { font: 'Osw', col: '#2a5aa8' }); } } }
    for (const [fx, fy, s] of [[1020, -180, 1], [1250, -120, 0.8], [-420, -160, 0.9]]) { push(fx, fy, s); rect(-70, -90, 140, 180, { wash: '#2a1a10', washA: 1, w: 3, col: '#c8a050' }); rect(-56, -76, 112, 152, { wash: '#c8b8a0', washA: 1, w: 1 }); human(0, 70, 0.4, t, { body: '#2a2a2a', hair: '#1a1a1a', face: 'smile', armL: 'hold', armR: 'hold', seed: 18240 + fx }); pop(); }
    for (let i = 0; i < 18; i++) { const x = -500 + i * 120, y = -560 + Math.sin(i * 0.9) * 26; pencil([[x, y], [x + 120, -560 + Math.sin((i + 1) * 0.9) * 26]], { w: 2, col: '#1a1008', pass2: false }); ell(x + 60, y + 30, 10, 14, { wash: i % 3 ? '#ffd890' : '#ffb060', washA: 1, w: 1, col: '#5a3a10' }); }
  }
  function letterFrame(t) {                                             // герой-предмет: золотая рамка с письмом королевы
    push(780, 470, 1); const f = rect(-210, -270, 420, 540, { wash: '#c89a3a', washA: 1, w: 3, col: '#4a2a08', key: 18250 }); shadeG(f.path, 210, 270, -210, -270, '#6a4a10', 0.5);
    for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; ell(Math.cos(a) * 200, Math.sin(a) * 260, 12, 12, { wash: '#e8c060', washA: 1, w: 1, col: '#6a4a10' }); }
    const fk = t > EV.hk_fake && t < S1.hook + 99 ? popK(t, EV.hk_fake, 0.35) : 0; royalLetter(0, 0, 1, 0, { key: 18251, fake: fk }); pencil([[-140, -250], [-60, -230]], { w: 6, col: '#ffffff', a: 0.4, pass2: false });
    txt('LA LETTERA DELLA REGINA · 1889', 0, 310, 22, { font: 'Osw', col: '#e8c060' }); lightPool(0, 0, 300, 360, 'rgba(255,220,150,1)', 0.18); pop();
  }
  function oven(t) {                                                    // печь-купол, пиццайоло, дрова, искры
    woodOven(-120, 1180, 0.95, t, { tile: '#c8902a', tile2: '#e8c058', txt: 'PIZZERIA', key: 18260 }); glow(-120, 1080, 300, 'rgba(255,140,50,1)', 0.35);
    for (let i = 0; i < 6; i++) rect(-420 + (i % 3) * 30, 1120 - Math.floor(i / 3) * 30, 120, 28, { wash: '#6a4424', washA: 1, w: 1.4, col: '#2a1408' });
    const sw = Math.sin(t * 2.4); human(250, 1240, 1.05, t, { body: '#f4f1ea', legs: '#2a2a34', hair: '#2a1a0a', face: t > EV.hk_fake ? 'shock' : 'grin', armL: 'hold', armR: 'up', look: -0.6, seed: 18261, flip: -1 }); hat20(250, 1240, 1.05, 'chef'); stache(250, 1240, 1.05, -1);
    peel(140 + sw * 20, 980, 0.6, -1.2 + sw * 0.06, 0.6, t, 18262);
    motes(14, [-300, 700, 100, 1100], '#ffb050', t, 18263, { sp: 40, sz: 3, a: 0.7, add: 1, wob: 6 });
  }
  function guests(t) {                                                  // гости за столиками: пара, старик с газетой, официант
    const sh = t > EV.hk_fake + 0.1 && t < LS('h2') + 0.6;
    for (const [x, sd, b, hr, fl] of [[460, 18270, '#7a2a3a', '#c88a3a', 1], [600, 18271, '#2a3a5a', '#1a1a1a', -1]]) human(x, 1320, 0.95, t, { body: b, legs: '#2a2a2a', hair: hr, face: sh ? 'shock' : 'smile', armL: 'hold', armR: sh ? 'point' : 'hold', look: sh ? 0.8 : -0.3 * fl, seed: sd, flip: fl, long: sd % 2 ? 0 : 1 });
    push(530, 1320, 0.95); ell(0, -130, 110, 22, { wash: '#f4f0e6', washA: 1, w: 1.6, col: '#5a5a5a' }); rect(-110, -130, 220, 130, { wash: '#c8221a', washA: 1, w: 1.6, col: '#4a0a04' }); for (let i = 0; i < 5; i++) pencil([[-110 + i * 55, -130], [-110 + i * 55, 0]], { w: 3, col: '#ffffff', a: 0.6, pass2: false }); ell(-40, -140, 34, 10, { wash: '#d8b070', washA: 1, w: 1 }); push(40, -150, 1); pencil([[0, 0], [0, -30]], { w: 3, col: '#5a6a3a' }); poly([[-12, -70], [12, -70], [6, -30], [-6, -30]], { wash: '#8a1a2a', washA: 0.7, w: 1.4 }); pop(); pop();
    human(1080, 1300, 1.0, t, { body: '#4a4a3a', legs: '#2a2a2a', hair: '#c8c8c8', face: sh ? 'shock' : 'calm', armL: 'hold', armR: 'hold', look: -0.5, seed: 18272, flip: -1, beard: 'short' }); newspaper(1010, 1100, 0.3, 0.1, 'IL MATTINO', { key: 18273 });
  }
  function counter(t) {                                                 // мраморная стойка: пицца, масло, базилик в горшке, перец, мука
    const c = rect(-400, 1440, 1900, 700, { wash: '#e8e4dc', washA: 1, w: 3, col: '#3a3a3a', key: 18280 }); shadeG(c.path, 0, 1440, 0, 1700, '#8a8a8a', 0.4); for (let i = 0; i < 8; i++) pencil(spline([[-300 + i * 230, 1450], [-260 + i * 230, 1560], [-320 + i * 230, 1700]], false, 5), { w: 1.6, col: '#a8a49a', a: 0.6, pass2: false });
    rect(-400, 1430, 1900, 22, { wash: '#2a5a3a', washA: 1, w: 2, col: '#0a2a1a' });
    const bitten = t > EV.hk_bite ? 1 : 0; margherita(860, 1500, 0.62, t, { tilt: 0.36, steam: 1, bite: 0, key: 18281 }); if (bitten) push(860, 1500, 0.62), ell(250, -10, 70, 26, { wash: '#e8e4dc', washA: 1, line: false }), pop();
    push(380, 1450, 1); blob([[-30, 0], [-36, -90], [-14, -110], [-14, -150], [14, -150], [14, -110], [36, -90], [30, 0]], { wash: '#6a8a2a', washA: 0.85, w: 2, col: '#2a3a08' }); rect(-24, -80, 48, 40, { wash: '#f4ecd0', washA: 1, w: 1 }); txt('OLIO', 0, -54, 14, { font: 'Osw', col: '#2a3a08' }); ell(-14, -60, 4, 22, { wash: '#ffffff', washA: 0.5, line: false }); pop();
    push(1180, 1450, 1); rect(-60, -80, 120, 80, { wash: '#b8542a', washA: 1, w: 2, col: '#4a1a08' }); for (let i = 0; i < 9; i++) basilLeaf(-50 + i * 13, -80, 0.7, -0.8 + i * 0.2, 18282 + i); pop();
    push(560, 1460, 1); rect(-20, -50, 40, 50, { wash: '#d8d8d8', washA: 1, w: 1.4 }); for (let i = 0; i < 4; i++) ell(-8 + i * 6, -54, 2, 2, { wash: '#1a1a1a', washA: 1, line: false }); pop();
    for (let i = 0; i < 12; i++) ell(180 + i * 40, 1520 + (i % 3) * 20, 8, 3, { wash: PZ.flour, washA: 0.7, line: false });
    castShadow(860, 1560, 300, 180, 0.7, 0.25); crumbs(720, 1240, t, EV.hk_bite, 10, 18289, PZ.crust);
  }
  function front(t) {                                                   // передний план: связка чеснока сверху, бутылка вина и край доски
    for (let i = 0; i < 5; i++) { const x = -60 + i * 40, y = -560 + i * 30 + Math.sin(t * 1.2 + i) * 4; pencil([[x, -800], [x, y]], { w: 2, col: '#8a6a3a', pass2: false }); blob([[x - 26, y], [x - 30, y + 30], [x, y + 50], [x + 30, y + 30], [x + 26, y]], { wash: '#f4ecdc', washA: 1, w: 1.6, col: '#8a7a5a' }); }
    push(1200, 2050, 1.5); blob([[-40, 0], [-44, -200], [-16, -260], [-16, -340], [16, -340], [16, -260], [44, -200], [40, 0]], { wash: '#2a1a2a', washA: 1, w: 2.4, col: '#0a0a0a' }); rect(-36, -160, 72, 80, { wash: '#f4e8c8', washA: 1, w: 1.4 }); txt('VINO', 0, -112, 18, { font: 'Osw', col: '#8a1a1a' }); pop();
    push(-80, 2000, 1.6, 0.1); rect(-200, -60, 400, 60, { wash: '#a8743a', washA: 1, w: 2.4, col: '#3a1a08' }); pop();
  }
  WORLD.hook = (t, u, cat) => {
    lay(14, () => { wall(t); haze('#ffb070', 0.04); });
    lay(4, () => { oven(t); guests(t); lightPool(-120, 1300, 700, 260, 'rgba(255,150,60,1)', 0.3); });
    lay(2.6, () => { letterFrame(t); });
    lay(1, () => { counter(t); cat(); });
    lay(0.6, () => { front(t); moodDark(500, 1100, 500, 1500, '#140818', 0.5); steamWisps(860, 1440, 1, t, 3, 18299, 0.3); });
  };
  const stPose = (b, t) => Object.assign(b, { x: 640, y: 1590, s: 1.18, flip: 1, look: [0.3, -0.2], hand: [200, -300], handF: [-70, -210], prop: 'sliceP', propAng: -0.2 });
  DIR.hook = {
    outfit: 'hoodiePZ', light: { side: -1, rim: '#ffb070' }, grade: ['#ff9a50', 0.08],
    act: () => [[0, 'suspicious'], [EV.hk_hall, 'talk'], [EV.hk_fake, 'shock'], [EV.hk_grab, 'smug'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { if (t < EV.hk_grab) return Object.assign(stPose(b, t), { look: t < EV.hk_hall ? [0.7, -0.8] : t < EV.hk_fake ? [-0.6, -0.2] : [0.8, -0.7], point: t > EV.hk_fake ? 1 : undefined, hand: t > EV.hk_fake ? [220, -400] : [200, -300], sweat: t > EV.hk_fake });
      const bite = t > EV.hk_bite; return Object.assign(b, { x: 640, y: 1590, s: 1.18, flip: 1, look: bite ? [-0.2, 0] : [0.4, 0.3], hand: bite ? [40, -360] : [160, -300], handF: [-70, -210], prop: 'sliceP', propAng: 0.4, tailUp: bite, squash: b.squash + (bite && t < EV.hk_bite + 0.12 ? 0.1 : 0) }); },
    afterCat: (t, u, P) => { if (t > EV.hk_bite && t < S1.hook) { const k = clamp((t - EV.hk_bite) / 0.6); cheeseString(P.x + 40 * P.s, P.y - 330 * P.s, P.x + (40 + 160 * k) * P.s, P.y - (330 - 120 * k) * P.s, 30 + 40 * k, 7); } },
    cam: () => [[0, 780, 560, 0.4], [EV.hk_hall, 600, 1050, 0.24, 'x'], [EV.hk_fake, 740, 760, 0.32], [EV.hk_grab, 640, 1150, 0.28], [EV.hk_bite, 640, 1180, 0.34], [S1.hook, 640, 1180, 0.36]]
  };
  EV.bt_wink = wtw('x1', 'секунд!');
  WORLD.button = (t, u, cat) => WORLD.hook(t, u, cat);
  DIR.button = { outfit: 'hoodiePZ', light: { side: -1, rim: '#ffb070' }, grade: ['#ff9a50', 0.08],
    act: () => [[S0.button, 'grin'], [EV.bt_wink - 0.3, 'laugh'], [EV.bt_wink, 'wink'], [DUR - 0.5, 'suspicious']],
    pose: (t, u, b) => { if (t > DUR - 0.7) return Object.assign(stPose(b, t), { look: [0.7, -0.8] }); return Object.assign(b, { x: 640, y: 1590, s: 1.18, flip: 1, look: [-0.4, -0.1], hand: [120, -330], handF: [-70, -210], prop: 'sliceP', propAng: 0.1, tailUp: true }); },
    cam: () => [[S0.button, 640, 1150, 0.28], [DUR - 0.8, 720, 900, 0.34], [DUR - 0.1, 780, 560, 0.4], [DUR, 780, 560, 0.4]] };
})();
