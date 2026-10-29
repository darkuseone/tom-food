/* 002 — `hook`: «Суд! Бельгия против Франции — чья картошка фри?» Зал суда-кухни: дубовые панели, медные кастрюли, весы правосудия с фри на чашах.
   0,0 с — Том-судья в парике бьёт молотком (удар + кольца), камера на «Бельгия» — к бельгийскому столу (адвокат с кульком и майонезом), на «Франции» — к французскому (адвокат с газетным кульком).
   «чья картошка фри?» — Том поднимает одну фри, щурится. «Откусим историю!» — хрусть: кадр ломается пополам, как фри (переход в w_meuse.js).
   courtroom(t, o) — общий зал для objection / lawsuit (o.modern — 2002: лампы, плакаты VEG, ответчик-коробка фри). */
function courtroom(t, o = {}) {
  lay(30, () => {                                                       // стена: дубовые панели, окно-розетка, весы правосудия
    vgrad(-400, 2200, o.modern ? ['#4a3a30', '#6a5444', '#3a2c22'] : ['#3a2416', '#5a3a22', '#2a1a10']);
    for (let i = -3; i < 9; i++) { const x = -260 + i * 210; const p = rect(x + 14, 420, 182, 720, { wash: o.modern ? '#7a5c44' : '#6e4a2c', washA: 1, w: 2.2, col: '#1e1008', key: 8300 + i }); shadeG(p.path, x + 196, 0, x + 14, 0, '#2a160a', 0.5);
      rect(x + 34, 450, 142, 300, { line: false, wash: '#8a603a', washA: 0.4 }); pencil([[x + 38, 456], [x + 172, 456], [x + 172, 744], [x + 38, 744], [x + 38, 456]], { w: 1.6, col: '#c99636', a: 0.5, pass2: false }); }
    rect(-400, 380, 1900, 50, { wash: '#2a160a', washA: 1, w: 2, col: '#000' }); rect(-400, 1130, 1900, 40, { wash: '#2a160a', washA: 1, w: 2, col: '#000' });
    const wd = ell(540, 250, 210, 150, { wash: o.modern ? '#c8dce8' : '#f0c878', washA: 1, w: 3, col: '#1e1008', key: 8320 }); ctx.save(); ctx.clip(wd.path); glow(540, 250, 260, 'rgba(255,240,200,1)', 0.6);
    for (let k = 0; k < 8; k++) { const a = k / 8 * 6.283; pencil([[540, 250], [540 + Math.cos(a) * 220, 250 + Math.sin(a) * 160]], { w: 5, col: '#3a2010', pass2: false }); } ctx.restore(); ell(540, 250, 50, 36, { wash: '#3a2010', washA: 1, w: 2 });
    push(540, 560, 1); pencil([[0, -90], [0, 160]], { w: 8, col: '#c99636' }); pencil([[-170, -40], [170, -40]], { w: 7, col: '#c99636' }); ell(0, -96, 16, 16, { wash: '#e8b53a', washA: 1, w: 1.6 });
    const tl = Math.sin(t * 1.1) * 14;
    for (const [sd, fl] of [[-1, 'be'], [1, 'fr']]) { const yy = 60 + sd * tl; pencil([[sd * 170, -40], [sd * 210, yy]], { w: 2, col: '#c99636', pass2: false }); pencil([[sd * 170, -40], [sd * 130, yy]], { w: 2, col: '#c99636', pass2: false });
      blob([[sd * 120, yy], [sd * 220, yy], [sd * 200, yy + 30], [sd * 140, yy + 30]], { wash: '#d6a842', washA: 1, w: 2, col: '#5a3a08' }); for (let k = 0; k < 4; k++) fry(sd * 170 + (k - 1.5) * 14, yy - 22, 60, (k - 1.5) * 0.3, { w: 10, key: 8330 + k + (sd + 1) * 5, lw: 1.2 });
      rect(sd * 170 - 22, yy + 36, 44, 26, { line: false, wash: fl === 'be' ? '#f2c81e' : '#1e3a8a', washA: 0.9 }); } pop();
    for (const x of [-20, 1100]) { for (let k = 0; k < 3; k++) { const yy = 520 + k * 150, pc = ell(x, yy, 70 - k * 8, 46 - k * 6, { wash: '#b8733a', washA: 1, w: 2.4, col: '#3a1a08', key: 8340 + k }); metalG(pc.path, x - 20, yy - 16, 80, '#f0b880', '#b8733a', '#4a2008'); pencil([[x, yy - 46 + k * 6], [x, yy - 90]], { w: 3, col: '#3a2a1a', pass2: false }); } }
    if (o.modern) { for (const x of [200, 880]) { rect(x - 120, 120, 240, 24, { wash: '#e8eef2', washA: 1, w: 2, col: '#3a3a3a' }); glow(x, 150, 200, 'rgba(230,245,255,1)', 0.25); } }
    haze(o.modern ? '#d8e0e0' : '#ffb070', 0.06);
  });
  lay(6, () => {                                                        // галерея: перила и публика
    rect(-500, 1060, 2100, 400, { wash: '#4a2c18', washA: 1, w: 2, col: '#1e1008' });
    const crowd = o.modern ? [['#5a7a3a', 'cap', '#4a8a2a'], ['#d8d0c0', null, null], ['#2a4a8a', 'scarf', '#e8b53a'], ['#8a2a2a', null, null], ['#e8c0a0', 'hood', '#6a8a4a'], ['#3a3a3a', 'cap', '#2a2a2a']] : [['#2a2a3a', null, null], ['#6a2a2a', 'fur', '#3a2a1a'], ['#3a4a2a', 'cap', '#2a3a1a'], ['#5a4a6a', 'hood', '#5a4a6a'], ['#8a6a3a', null, null], ['#2a3a5a', 'merchant', '#1a1a1a']];
    for (let i = 0; i < 9; i++) { const c = crowd[i % crowd.length], x = -260 + i * 200, sh = Math.sin(t * 6 + i) * (t < 0.6 ? 0 : 4);
      human(x, 1250 + sh, 0.9, t, { body: c[0], hat: c[1], hatCol: c[2], hair: i % 3 ? '#3a2a1a' : '#8a6a3a', face: o.react ? o.react(i) : (i % 2 ? 'shock' : 'calm'), armL: i % 3 === 0 ? 'up' : 'down', armR: i % 4 === 1 ? 'point' : 'down', seed: 40 + i, flip: i < 4 ? 1 : -1, look: i < 4 ? 0.5 : -0.5, skin: i % 4 === 2 ? '#a8744a' : '#e2b48e' }); }
    for (let i = 0; i < 26; i++) { const x = -420 + i * 80; pencil([[x, 1060], [x, 1180]], { w: 10, col: '#3a2010' }); } rect(-500, 1040, 2100, 30, { wash: '#7a4e2c', washA: 1, w: 2.4, col: '#1e1008' });
    haze(o.modern ? '#d8e0e0' : '#ffb070', 0.05);
  });
}
function lawyer(x, y, s, t, side, o = {}) {                           // адвокат стороны: стол, флаг, человек с кульком фри
  flag2(x + side * 150, y - 820, 150, 100, side < 0 ? 'be' : 'fr', t, { key: 8360 + side, pole: 640 });
  const up = o.up || 0;
  human(x, y, 1.05 * s, t, { body: side < 0 ? '#2a2a2e' : '#1e2a4a', trim: side < 0 ? '#f2c81e' : '#f6f2ea', hair: side < 0 ? '#c89a5a' : '#1a1a1a', face: o.face || 'calm', armL: 'hips', armR: up > 0.5 ? 'up' : 'hold', seed: side < 0 ? 51 : 52, flip: -side, look: -side * 0.6, beard: side < 0 ? 'short' : null });
  if (side > 0) stache(x, y, 1.05 * s, side);
  const hx = x + side * -82 * s, hy = y + lerp(-190, -420, up) * s; fryCone(hx, hy, 0.42 * s, t, { kind: side < 0 ? 'stripe' : 'news', mayo: side < 0 ? 1 : 0, seed: 8370 + side, title: 'LE PETIT PARIS', steam: true });
  push(x, y + 40, 1); const tb = rect(-210, -160, 420, 40, { wash: '#7a4e2c', washA: 1, w: 2.6, col: '#1e1008', key: 8380 + side }); shadeG(tb.path, 0, -120, 0, -160, '#2a160a', 0.4);
  for (const lx of [-190, 190]) rect(lx - 12, -120, 24, 200, { wash: '#5a3a20', washA: 1, w: 2, col: '#1e1008' }); rect(-170, -196, 120, 40, { wash: '#f4ead2', washA: 1, w: 1.8, col: '#3a2410' }); for (let k = 0; k < 3; k++) pencil([[-160, -186 + k * 10], [-70, -186 + k * 10]], { w: 1.2, col: '#5a4a3a', a: 0.6, pass2: false }); pop();
}
function bench(t, o = {}) {                                            // судейская кафедра: дуб, резьба, медная табличка, подставка молотка, кулёк фри
  const B = rect(150, 1360, 780, 700, { wash: '#6e4428', washA: 1, w: 3, col: '#1e1008', key: 8390 }); shadeG(B.path, 0, 1700, 0, 1360, '#2a140a', 0.55); hatch(B.path, B.bb, { gap: 8, a: 0.12, col: '#2a140a', ang: 1.5, key: 8391, w: 1.2 });
  rect(130, 1330, 820, 46, { wash: '#8a5a34', washA: 1, w: 2.6, col: '#1e1008' }); pencil([[140, 1340], [940, 1340]], { w: 3, col: '#d8a868', a: 0.6, pass2: false });
  for (const x of [230, 850]) { const p = rect(x - 60, 1420, 120, 220, { wash: '#7a4e2c', washA: 1, w: 2, col: '#1e1008' }); pencil([[x - 44, 1436], [x + 44, 1436], [x + 44, 1624], [x - 44, 1624], [x - 44, 1436]], { w: 1.6, col: '#c99636', a: 0.6, pass2: false }); }
  const pl = rect(390, 1450, 300, 90, { wash: '#c8883a', washA: 1, w: 2.4, col: '#3a1a08' }); metalG(pl.path, 480, 1470, 200, '#ffd8a0', '#c8883a', '#5a2a08'); txt(o.plate || 'СУД НА ВКУС', 540, 1496, 40, { font: 'Osw', col: '#3a1a08' });
  ell(800, 1326, 60, 14, { wash: '#4a2a14', washA: 1, w: 2, col: '#1e1008' }); rect(750, 1300, 100, 26, { wash: '#5a3a20', washA: 1, w: 2, col: '#1e1008' });
  if (o.cone !== false) fryCone(300, 1330, 0.5, t, { kind: 'kraft', seed: 8395, mayo: o.mayo || 0 });
}
(() => {
  EV.hk_bang = 0.12;
  EV.hk_be = wtw('h1', 'Бельгия');
  EV.hk_fr = wtw('h1', 'Франции');
  EV.hk_whose = wtw('h1', 'чья');
  EV.hk_bite = wtw('h2', 'историю!') - 0.05;
  SHAKES.push([EV.hk_bang, 0.22, 14], [EV.hk_bite, 0.2, 10]);
  KEYW.push('суд!', 'фри?');
  WORLD.hook = (t, u, cat) => {
    courtroom(t, { react: i => t < EV.hk_bang + 0.3 ? 'shock' : i % 3 ? 'calm' : 'smile' });
    lay(1.25, () => { lawyer(80, 1500, 1, t, -1, { up: sm(clamp((t - EV.hk_be) / 0.3)) * (1 - sm(clamp((t - EV.hk_fr) / 0.4))), face: t > EV.hk_be && t < EV.hk_fr + 0.5 ? 'grin' : 'calm' });
      lawyer(1000, 1500, 1, t, 1, { up: sm(clamp((t - EV.hk_fr) / 0.3)) * (1 - sm(clamp((t - EV.hk_whose) / 0.4))), face: t > EV.hk_fr ? 'grin' : 'calm' }); });
    lay(1, () => { cat(); });
    lay(0.92, () => { bench(t); gavelHit(800, 1290, t, EV.hk_bang, 1.2); crumbs(570, 1110, t, EV.hk_bite, 22, 3, FR.fry); });
    lay(0.7, () => { glow(540, 700, 800, 'rgba(255,190,110,1)', 0.1); });
  };
  DIR.hook = {
    outfit: 'judge', light: { side: -1, rim: '#ffcf8a' }, grade: ['#ff9a50', 0.1],
    act: () => [[0, 'annoyed'], [EV.hk_bang + 0.3, 'talk'], [EV.hk_be, 'sideeye'], [EV.hk_fr, 'suspicious'], [EV.hk_whose, 'awe'], [LS('h2'), 'smug'], [EV.hk_bite + 0.08, 'laugh']],
    pose: (t, u, b) => { const bang = t < EV.hk_bang + 0.25, lift = t > EV.hk_whose - 0.1, bite = t > EV.hk_bite - 0.25;
      const up = bang ? (t < EV.hk_bang ? 1 - t / EV.hk_bang : 0) : 0;
      return Object.assign(b, { x: 540, y: 1500, s: 1.05, look: t < EV.hk_be ? [0, 0.3] : t < EV.hk_fr ? [-0.9, 0] : t < EV.hk_whose ? [0.9, 0] : bite ? [0.1, -0.3] : [0.3, -0.6],
        hand: bang ? [200, -250 - up * 120] : lift ? (bite ? [40, -330] : [120, -430]) : [170, -200], prop: bang || !lift ? 'mallet' : 'fryP', propAng: bang ? -0.3 - up * 0.9 : lift ? -0.2 : 0.4,
        handF: [-120, -190], squash: b.squash + (t > EV.hk_bang && t < EV.hk_bang + 0.12 ? 0.1 : 0) + (t > EV.hk_bite && t < EV.hk_bite + 0.12 ? 0.08 : 0), tailUp: t > EV.hk_whose }); },
    cam: () => [[0, 640, 1150, 0.3], [EV.hk_bang + 0.2, 560, 1120, 0.18], [EV.hk_be - 0.05, 560, 1120, 0.16], [EV.hk_be + 0.25, 180, 1180, 0.26, 'x'], [EV.hk_fr - 0.05, 200, 1180, 0.28], [EV.hk_fr + 0.25, 900, 1180, 0.26, 'x'],
      [EV.hk_whose - 0.05, 880, 1180, 0.28], [EV.hk_whose + 0.3, 580, 1080, 0.3, 'x'], [EV.hk_bite - 0.2, 580, 1020, 0.36], [S1.hook, 580, 1000, 0.46]]
  };
})();
