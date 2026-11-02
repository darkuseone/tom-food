/* 014 — `hook` + `button`: «Зуболомы! Так солдаты звали сухари. Как же они стали закуской к фильму?» Вечер кино в квартире: телевизор светится (на экране —
   чёрно-белый фильм с солдатами у костра), диван с пледом, торшер, книжные полки, гирлянда, окно на ночной город, фикус. На журнальном столике — армейский
   сухарь на тарелке и пакетик сухариков, миска кубиков. Том в пижаме и фартуке. По словам: «Зуболомы!» — Том кусает каменный сухарь: «КРАК», звёздочки из
   глаз; «сухари» — на экране солдаты грызут галеты; «закуской» — выпрыгивает пакетик; «фильму?» — экран вспыхивает. «Откусим историю!» — Том хрустит
   кубиком из пакетика. `button`: тот же кадр, Том подмигивает → петля в хук. */
(() => {
  EV.hk_crack = 0.1;
  EV.hk_sold = wtw('h1', 'сухари.');
  EV.hk_snack = wtw('h1', 'закуской');
  EV.hk_film = wtw('h1', 'фильму?');
  EV.hk_grab = LS('h2') - 0.15;
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_crack + 0.05, 0.25, 12], [EV.hk_bite, 0.2, 10]);
  KEYW.push('Зуболомы!', 'фильму?');

  function city(t) { vgrad(-200, 900, ['#0e1028', '#2a2048', '#4a3058']); for (const [x, w, h] of [[-60, 200, 520], [180, 160, 380], [380, 220, 600], [640, 180, 440], [860, 200, 560]]) { rect(x, 900 - h, w, h + 20, { wash: '#1a1a34', washA: 1, w: 1.6, col: '#0a0a18' }); windows(x + 14, 920 - h, w - 28, h - 60, 4, 8, x + 3, 0.55, '#ffd890', '#2a2a48', 0.9); } ell(820, 160, 36, 36, { wash: '#f4f0d8', washA: 1, w: 1.4 }); glow(820, 160, 120, 'rgba(240,240,210,1)', 0.4); }
  function wall(t) {                                                    // обои, окно с городом, полки с книгами и банками, торшер, гирлянда, картина
    vgrad(-500, 1500, ['#2a2030', '#4a3448', '#5a4050']); for (let x = -400; x < 1600; x += 60) pencil([[x, -500], [x, 1300]], { w: 2, col: '#6a4a5a', a: 0.4, pass2: false });
    push(880, 340, 1); const w = rect(-170, -230, 340, 420, { wash: '#0e1028', washA: 1, w: 8, col: '#1a1018', key: 14100 }); ctx.save(); ctx.clip(w.path); push(-540, -450, 1); city(t); pop(); ctx.restore(); pencil([[0, -230], [0, 190]], { w: 8, col: '#1a1018' }); for (const sd of [-1, 1]) { const c = shape(spline([[sd * 190, -250], [sd * 150, -250], [sd * 140 + Math.sin(t + sd) * 4, 0], [sd * 170, 210], [sd * 210, 210]], true, 6), { wash: '#6a2a3a', washA: 1, w: 1.6, col: '#2a0a14' }); } pop();
    for (const y of [300, 520]) { rect(-380, y, 560, 18, { wash: '#5a3a24', washA: 1, w: 2, col: '#1a0a04' }); const r = rng(14101 + y); let x = -370; while (x < 160) { const bw = 20 + r() * 20, bh = 90 + r() * 40; rect(x, y - bh, bw, bh, { wash: ['#8a2a2a', '#2a4a6a', '#4a6a3a', '#c8a050', '#5a3a6a'][Math.floor(r() * 5)], washA: 1, w: 1.2, col: '#0a0404' }); x += bw + 3; } }
    push(300, 760, 1); rect(-120, -90, 240, 180, { wash: '#c8a050', washA: 1, w: 4, col: '#5a3a08' }); rect(-104, -74, 208, 148, { wash: '#4a6a8a', washA: 1, w: 1.6 }); poly([[-100, 70], [-40, -20], [20, 40], [60, 0], [100, 70]], { wash: '#2a4a3a', washA: 1, w: 1.2 }); pop();
    for (let i = 0; i < 22; i++) { const x = -260 + i * 70, y = 60 + Math.sin(i * 0.7) * 26, on = Math.sin(t * 3 + i * 1.7) > -0.3; ell(x, y + 18, 8, 12, { wash: ['#ffd890', '#ff9a8a', '#9ad8ff'][i % 3], washA: on ? 1 : 0.4, w: 1, col: '#3a2a1a' }); if (on) glow(x, y + 18, 30, 'rgba(255,210,130,1)', 0.4); }
  }
  function tv(t) {                                                      // телевизор на тумбе: чёрно-белый фильм — солдаты у костра грызут галеты
    push(260, 1180, 1); rect(-260, 0, 520, 140, { wash: '#4a2a14', washA: 1, w: 2.4, col: '#1a0a04' }); const sc = rect(-240, -320, 480, 300, { wash: '#1a1a1a', washA: 1, w: 8, col: '#0a0a0a', key: 14110 });
      ctx.save(); ctx.clip(sc.path); const br = t > EV.hk_film ? 1 : 0.7; vgrad(-320, -20, ['#5a5a5a', '#a8a8a8']); ell(0, -60, 50, 20, { wash: '#e8e8e8', washA: br, line: false }); glow(0, -70, 80, 'rgba(255,255,255,1)', 0.5 * br);
      for (const sd of [-1, 1]) { human(sd * 120, -20, 0.55, t, { body: '#4a4a4a', legs: '#2a2a2a', hair: '#1a1a1a', face: t > EV.hk_sold ? 'shock' : 'calm', armL: 'hold', armR: 'up', seed: 14111 + sd, flip: -sd }); hat20(sd * 120, -20, 0.55, 'cap' === 'cap' ? 'fedora' : 'fedora', '#3a3a3a'); }
      for (let i = 0; i < 30; i++) { const r = rng(hsh(FRAME, i)); pencil([[r() * 480 - 240, -320], [r() * 480 - 240, -20]], { w: 1, col: '#ffffff', a: 0.06, pass2: false }); } ctx.restore();
      glow(0, -170, 340, 'rgba(200,220,255,1)', 0.25 * br); pop();
  }
  function sofa(t) {                                                    // диван с пледом и подушками, торшер, фикус
    push(-80, 1340, 1); const s = blob([[-300, 0], [-310, -200], [-260, -240], [260, -240], [310, -200], [300, 0]], { wash: '#3a5a6a', washA: 1, w: 2.4, col: '#0a1a24' }); shadeG(s.path, 300, 0, -100, 0, '#1a2a34', 0.5); for (let i = 0; i < 2; i++) blob([[-240 + i * 220, -100], [-230 + i * 220, -190], [-60 + i * 220, -200], [-40 + i * 220, -100]], { wash: i ? '#d8642a' : '#e8b030', washA: 1, w: 2, col: '#3a1a08' }); const pl = shape(spline([[40, -180], [200, -170], [260, -60], [140, -20], [60, -60]], true, 6), { wash: '#a8282a', washA: 1, w: 1.6 }); hatch(pl.path, pl.bb, { gap: 14, a: 0.3, col: '#f4ecd8', ang: 0.8 }); pop();
    push(1120, 1330, 1); pencil([[0, 0], [0, -620]], { w: 6, col: '#2a2a2a' }); poly([[-80, -620], [80, -620], [56, -720], [-56, -720]], { wash: '#f4e0b0', washA: 1, w: 2, col: '#5a4a2a' }); glow(0, -640, 300, 'rgba(255,220,150,1)', 0.45); pop();
  }
  function table(t) {                                                   // журнальный столик: армейский сухарь (зуболом), пакетик, миска кубиков, кружка, пульт
    const tb = rect(-400, 1440, 1900, 800, { wash: '#6a4428', washA: 1, w: 3, col: '#1a0a04', key: 14120 }); shadeG(tb.path, 0, 1900, 0, 1440, '#2a1408', 0.45); for (let i = 0; i < 8; i++) pencil([[-400, 1470 + i * 60], [1500, 1474 + i * 60]], { w: 2, col: '#3a1a08', a: 0.5, pass2: false });
    push(260, 1500, 1); ell(0, 0, 120, 30, { wash: '#f8f6f0', washA: 1, w: 2, col: '#4a4a52' }); pop(); const broke = t > EV.hk_crack + 0.05 && t < S1.hook + 0.2;
    if (!(t > EV.hk_crack - 0.3 && t < EV.hk_crack + 0.05)) hardtack(260, 1470, 0.9, 0.15, { key: 14121 });
    if (broke) for (let i = 0; i < 6; i++) { const k = t - EV.hk_crack; poly([[300 + i * 20 + k * 200, 1400 - k * 300 + k * k * 900], [312 + i * 20 + k * 200, 1394 - k * 300 + k * k * 900], [308 + i * 20 + k * 200, 1410 - k * 300 + k * k * 900]], { wash: SK.tack, washA: 1, w: 1, col: '#5a4a2a' }); }
    const bk = t > EV.hk_snack - 0.15 ? popK(t, EV.hk_snack - 0.15, 0.4) : 0; if (bk > 0 || t > S0.button) { push(560, 1460, bk || 1); snackBag(0, 0, 0.75, t, { key: 14122 }); pop(); }
    push(820, 1500, 1); ell(0, 0, 100, 26, { wash: '#2a5ab8', washA: 1, w: 2, col: '#0a1a3a' }); for (let i = 0; i < 10; i++) cubeRusk(-60 + (i % 5) * 30, -12 - Math.floor(i / 5) * 18, 0.55, i, { key: 14123 + i, spice: i % 2 ? '#d8582a' : '#6aa83a' }); pop();
    push(-60, 1520, 1); rect(-40, -100, 80, 100, { wash: '#f4ecd8', washA: 1, w: 2, col: '#3a3a3a' }); pencil(spline([[40, -80], [70, -60], [40, -30]], false, 4), { w: 6, col: '#f4ecd8', pass2: false }); txt('♥', 0, -50, 30, { col: '#d9282a' }); pop();
    push(1000, 1560, 1, 0.3); rect(-60, -16, 120, 32, { wash: '#2a2a2a', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) ell(-36 + i * 24, 0, 6, 6, { wash: '#8a8a8a', washA: 1, line: false }); ell(-36, 0, 6, 6, { wash: '#d9282a', washA: 1, line: false }); pop();
    if (t > EV.hk_crack && t < EV.hk_crack + 0.9) { const k = (t - EV.hk_crack) / 0.9; push(560, 1060, 1 + k * 0.4); txt('КРАК!', 0, 0, 90, { font: 'Osw', col: '#d9282a', a: 1 - k }); pop(); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283 + t * 6; txt('✦', 620 + Math.cos(a) * 160 * (0.5 + k), 1140 + Math.sin(a) * 100 * (0.5 + k), 40, { col: '#ffe070', a: 1 - k }); } }
    crumbs(600, 1150, t, EV.hk_bite, 18, 14124, SK.ryeL);
  }
  function front(t) { push(-60, 1950, 1.6); const p = shape([[-80, 0], [-70, -120], [70, -120], [80, 0]], { wash: '#c8643a', washA: 1, w: 2.4 }); for (let i = 0; i < 9; i++) { const a = -2.8 + i * 0.32; blob([[0, -120], [Math.cos(a) * 80, -120 + Math.sin(a) * 160 - 60], [Math.cos(a) * 120, -120 + Math.sin(a) * 220]], { wash: '#3a7a3a', washA: 1, w: 1.6, col: '#1a3a1a' }); } pop(); motes(16, [-100, 900, 1200, 1900], '#fff4e0', t, 14130, { sp: 16, sz: 6, a: 0.25, wob: 2 }); glow(260, 1000, 400, 'rgba(180,200,255,1)', 0.12); }
  WORLD.hook = (t, u, cat) => {
    lay(14, () => { wall(t); haze('#8a6a9a', 0.05); });
    lay(3.4, () => { sofa(t); tv(t); });
    lay(1, () => { cat(); });
    lay(0.94, () => { table(t); });
    lay(0.6, () => { front(t); });
  };
  const stPose = (b, t) => Object.assign(b, { x: 720, y: 1700, s: 1.15, flip: -1, look: [-0.6, 0.4], hand: [40, -350], handF: [-60, -200], prop: 'tackP', propAng: 0.3 });
  DIR.hook = {
    outfit: 'pajama', light: { side: -1, rim: '#c8d8ff' }, grade: ['#8a7ab0', 0.08],
    act: () => [[0, 'shock'], [EV.hk_crack + 0.1, 'scared'], [EV.hk_sold, 'annoyed'], [EV.hk_snack, 'awe'], [EV.hk_grab, 'smug'], [EV.hk_bite + 0.1, 'laugh']],
    pose: (t, u, b) => { if (t < EV.hk_sold) return Object.assign(stPose(b, t), { squash: b.squash + (t > EV.hk_crack && t < EV.hk_crack + 0.15 ? 0.12 : 0), sweat: t > EV.hk_crack }); if (t < EV.hk_grab) return Object.assign(stPose(b, t), { prop: undefined, hand: [180, -260], look: [-0.3, 0.5] });
      const k = sm(clamp((t - EV.hk_grab) / 0.3)), bite = t > EV.hk_bite; return Object.assign(b, { x: 720, y: 1700, s: 1.15, flip: -1, look: bite ? [0.2, -0.1] : [-0.6, 0.4], hand: bite ? [40, -350] : [lerp(260, 140, k), lerp(-230, -320, k)], handF: [-60, -200], prop: 'cubeP', propAng: 0.2, tailUp: bite, squash: b.squash + (bite && t < EV.hk_bite + 0.12 ? 0.1 : 0) }); },
    cam: () => [[0, 620, 1080, 0.42], [0.8, 540, 1120, 0.16, 'x'], [EV.hk_sold, 470, 1050, 0.16], [EV.hk_snack, 560, 1200, 0.24], [EV.hk_bite, 640, 1060, 0.36], [S1.hook, 650, 1040, 0.42]]
  };
  EV.bt_wink = wtw('x1', 'крошки!');
  WORLD.button = (t, u, cat) => WORLD.hook(t, u, cat);
  DIR.button = { outfit: 'pajama', light: { side: -1, rim: '#c8d8ff' }, grade: ['#8a7ab0', 0.08],
    act: () => [[S0.button, 'grin'], [EV.bt_wink - 0.3, 'laugh'], [EV.bt_wink, 'wink'], [DUR - 0.5, 'shock']],
    pose: (t, u, b) => { if (t > DUR - 0.7) return stPose(b, t); return Object.assign(b, { x: 720, y: 1700, s: 1.15, flip: -1, look: [0.4, -0.1], hand: [-120, -330], handF: [-60, -200], prop: 'cubeP', propAng: 0.2, tailUp: true }); },
    cam: () => [[S0.button, 620, 1080, 0.24], [DUR - 0.9, 620, 1080, 0.32], [DUR - 0.1, 620, 1080, 0.42], [DUR, 620, 1080, 0.42]] };
})();
