/* 028 — `vienna` (РАЗГАДКА ★): «Круассан — австриец с французским паспортом: форма венская, слои парижские!» Граница-шутка двух городов
   в одном кадре: слева Вена (шпиль Святого Стефана с черепичной крышей-ромбами, жёлтый дворец, красно-бело-красный флаг, кофейня), справа
   Париж (Эйфелева башня, мост через Сену, синие крыши, триколор), посередине — полосатая будка таможни со шлагбаумом и столом. Том —
   пограничник-тиролец. На столе огромный паспорт: на фото — круассан, «место рождения: WIEN · гражданство: FRANCE». По словам: «австриец» —
   загорается венская половина; «французским паспортом:» — Том раскрывает паспорт; «венская,» — штамп «WIEN» на страницу; «парижские!» —
   штамп «PARIS», шлагбаум поднимается, вспышка-конфетти. Главный свет — тёплая лампа будки, второй — закат над обоими городами.
   Переход В сцену: шлагбаум опускается через кадр поворотом и сметает старую картинку. */
(() => {
  EV.vn_cr = wtw('s8', 'Круассан');
  EV.vn_at = wtw('s8', 'австриец');
  EV.vn_pass = wtw('s8', 'паспортом:');
  EV.vn_wien = wtw('s8', 'венская,');
  EV.vn_paris = wtw('s8', 'парижские!');
  SHAKES.push([EV.vn_wien, 0.12, 6], [EV.vn_paris, 0.16, 8]);
  KEYW.push('паспортом:', 'парижские!');

  function cities(t) {                                                    // закатное небо; Вена слева, Париж справа
    vgrad(-500, 900, ['#4a5a9a', '#e8988a', '#f8c890']); glow(540, 420, 360, 'rgba(255,210,160,1)', 0.25);
    const wl = t > EV.vn_at ? 1 : 0.6, pl = t > EV.vn_paris ? 1 : 0.6;
    push(140, 760, 1); rect(-90, -460, 180, 460, { wash: lerpC('#6a5a4a', '#a8907a', wl), washA: 1, w: 2.4, col: '#3a2a1a', key: 29000 }); poly([[-90, -460], [0, -900], [90, -460]], { wash: lerpC('#5a4a3a', '#8a7a6a', wl), washA: 1, w: 2.4 }); for (let r = 0; r < 4; r++) for (let i = 0; i < 4; i++) poly([[-70 + i * 40, -440 - r * 90], [-50 + i * 40, -460 - r * 90], [-30 + i * 40, -440 - r * 90], [-50 + i * 40, -420 - r * 90]], { wash: ['#c8a040', '#2a6a4a'][(i + r) % 2], washA: wl, line: false }); pop();
    push(-260, 840, 1); rect(-260, -260, 520, 260, { wash: lerpC('#a8984a', '#f0d070', wl), washA: 1, w: 2, col: '#5a4a1a' }); for (let i = 0; i < 8; i++) rect(-240 + i * 62, -220, 36, 70, { wash: '#f8f4ec', washA: 1, w: 1.4 }); pop();
    push(-60, 600, 1); pencil([[0, 0], [0, -200]], { w: 5, col: '#3a3a3a', pass2: false }); for (let i = 0; i < 3; i++) rect(0, -200 + i * 40, 150, 40, { wash: i === 1 ? '#f8f4ec' : '#c8201a', washA: 1, line: false }); pop();
    push(900, 820, 0.9); pencil([[-140, 0], [0, -620], [140, 0]], { w: 12, col: lerpC('#5a4a4a', '#8a7a6a', pl), pass2: false }); for (let i = 1; i < 7; i++) pencil([[-140 + i * 20, -i * 90], [140 - i * 20, -i * 90]], { w: 5, col: lerpC('#5a4a4a', '#8a7a6a', pl), pass2: false }); pencil(spline([[-90, -10], [0, -130], [90, -10]], false, 6), { w: 7, col: lerpC('#5a4a4a', '#8a7a6a', pl), pass2: false }); if (pl > 0.9) glow(0, -620, 90, 'rgba(255,240,200,1)', 0.25); pop();
    push(1150, 600, 1); pencil([[0, 0], [0, -200]], { w: 5, col: '#3a3a3a', pass2: false }); for (let i = 0; i < 3; i++) rect(i * 50, -200, 50, 120, { wash: ['#2a3a8a', '#f8f4ec', '#c8201a'][i], washA: 1, line: false }); pop();
    rect(-500, 860, 2200, 200, { wash: '#4a6a8a', washA: 1, line: false }); push(1000, 900, 1); pencil(spline([[-300, 0], [0, -60], [300, 0]], false, 8), { w: 20, col: '#a89880', pass2: false }); for (let i = 0; i < 4; i++) pencil(ellPts(-180 + i * 120, 0, 50, 40, 0, 0, 14).slice(0, 8), { w: 6, col: '#a89880', pass2: false }); pop();
  }
  function border(t) {                                                    // будка таможни, шлагбаум, столбы, жители с обеих сторон
    push(560, 1300, 1); rect(-110, -420, 220, 420, { wash: '#f8f4ec', washA: 1, w: 3, col: '#3a3a3a', key: 29010 }); for (let i = 0; i < 6; i++) rect(-110, -420 + i * 70, 220, 35, { wash: '#2a2a2a', washA: 1, line: false }); poly([[-140, -420], [0, -500], [140, -420]], { wash: '#c8201a', washA: 1, w: 2 }); rect(-70, -360, 140, 100, { wash: '#ffe0a0', washA: 1, w: 3 }); glow(0, -310, 160, 'rgba(255,220,150,1)', 0.3); pop();
    const up = t > EV.vn_paris ? sm(clamp((t - EV.vn_paris) / 0.6)) : 0; push(660, 1160, 1, -up * 1.3); for (let i = 0; i < 8; i++) rect(i * 70, -12, 70, 24, { wash: i % 2 ? '#f8f4ec' : '#c8201a', washA: 1, w: 1.6, col: '#3a3a3a' }); pop();
    human(80, 1300, 0.95, t, { body: '#c8201a', legs: '#2a2a2a', hair: '#c88a3a', face: t > EV.vn_at ? 'grin' : 'smile', armL: 'hold', armR: t > EV.vn_at ? 'wave' : 'hold', look: 0.5, seed: 29020, hat: 'cap', hatCol: '#3a5a2a' });
    human(1040, 1300, 0.95, t, { body: '#2a3a8a', legs: '#2a2a2a', hair: '#1a1410', face: t > EV.vn_paris ? 'grin' : 'smile', armL: 'hold', armR: t > EV.vn_paris ? 'up' : 'hold', look: -0.5, seed: 29021, flip: -1, hat: 'cap', hatCol: '#1a1a1a' });
    if (t > EV.vn_paris) { const r = rng(hsh(FRAME, 29022)); for (let i = 0; i < 20; i++) rect(-200 + r() * 1500, ((t - EV.vn_paris) * 300 + r() * 900) % 1300, 14, 10, { wash: ['#c8201a', '#f8f4ec', '#2a3a8a', '#f0c030'][i % 4], washA: 1, line: false }); }
  }
  function desk(t) {                                                      // стол пограничника: паспорт (герой), штемпельная подушка, круассан, чернильница
    const tb = rect(-500, 1440, 2200, 600, { wash: '#6a5a44', washA: 1, w: 3, col: '#2a2010', key: 29030 }); shadeG(tb.path, 0, 1440, 0, 1900, '#3a3020', 0.5);
    const op = t > EV.vn_pass ? sm(clamp((t - EV.vn_pass) / 0.4)) : 0; push(360, 1450, 1); rect(-30 - 200 * op, -200, 200 * op + 30, 190, { wash: '#2a3a6a', washA: 1, w: 2.4, col: '#0a1438' }); rect(0, -200, 230, 190, { wash: op > 0.5 ? '#f4ecd8' : '#2a3a6a', washA: 1, w: 2.4, col: '#0a1438' });
    if (op > 0.5) { rect(-200, -190, 180, 170, { wash: '#f4ecd8', washA: 1, w: 1.4 }); rect(-180, -170, 80, 90, { wash: '#e8dcc0', washA: 1, w: 1.4 }); croissant(-140, -110, 0.16, t, { key: 29031 }); txt('PASS', -60, -150, 22, { font: 'Osw', col: '#2a3a6a' }); txt('CROISSANT', -110, -50, 20, { font: 'Osw', col: '#2a2a2a' });
      txt('родом: WIEN', 110, -160, 22, { font: 'Hand', col: '#2a2a2a' }); txt('паспорт: FRANCE', 110, -130, 22, { font: 'Hand', col: '#2a2a2a' });
      if (t > EV.vn_wien) { push(80, -70, popK(t, EV.vn_wien, 0.25), -0.2); pencil(ellPts(0, 0, 48, 30, 0, 0, 24), { w: 4, col: '#c8201a', pass2: false }); txt('WIEN', 0, 10, 28, { font: 'Osw', col: '#c8201a' }); pop(); }
      if (t > EV.vn_paris) { push(170, -50, popK(t, EV.vn_paris, 0.25), 0.15); pencil(ellPts(0, 0, 52, 30, 0, 0, 24), { w: 4, col: '#2a3a8a', pass2: false }); txt('PARIS', 0, 10, 28, { font: 'Osw', col: '#2a3a8a' }); pop(); } } else { txt('PASS', 115, -100, 40, { font: 'Osw', col: '#c8a040' }); } pop();
    push(900, 1450, 1); rect(-60, -24, 120, 24, { wash: '#2a2a2a', washA: 1, w: 2 }); rect(-50, -30, 100, 10, { wash: '#8a2a2a', washA: 1, line: false }); pop(); croissant(1080, 1450, 0.3, t, { key: 29032 });
    castShadow(640, 1450, 320, 90, -0.5, 0.25);
  }
  WORLD.vienna = (t, u, cat) => {
    lay(12, () => { cities(t); haze('#ffd8c0', 0.05); });
    lay(2.6, () => { border(t); });
    lay(1, () => { lightPool(560, 1460, 660, 120, 'rgba(255,225,165,1)', 0.35); cat(); desk(t); });
    lay(0.65, () => { push(-150, 1950, 1.4); coffeeCup(0, -10, 1.2, t); pop(); push(1230, 1900, 1.4); baguette(0, -60, 0.8, -0.6); baguette(40, -20, 0.8, -0.4); pop();
      motes(12, [-200, 300, 1300, 1500], '#fff0d8', t, 29090, { sp: 2, sz: 3, a: 0.35, wob: 4 }); moodDark(560, 1000, 520, 1500, '#140a10', 0.42); });
  };
  DIR.vienna = {
    outfit: 'tyrolA', light: { side: 1, rim: '#ffe0b0' }, grade: ['#ffc8a0', 0.05],
    act: () => [[S0.vienna, 'proud'], [EV.vn_at, 'grin'], [EV.vn_pass, 'smug'], [EV.vn_wien, 'proud'], [EV.vn_paris, 'laugh']],
    pose: (t, u, b) => { const st = (t > EV.vn_wien - 0.15 && t < EV.vn_wien + 0.25) || (t > EV.vn_paris - 0.15 && t < EV.vn_paris + 0.25);
      return Object.assign(b, { x: 720, y: 1600, s: 1.15, flip: true, look: [-0.7, 0.6], hand: st ? [300, -200] : t > EV.vn_pass ? [300, -300] : [160, -240], handF: [-90, -230], prop: t > EV.vn_pass ? 'stampP' : 'croissantP', propAng: 0, squash: b.squash + (st ? 0.05 : 0), tailUp: t > EV.vn_paris }); },
    hud: t => infoPlate(t, EV.vn_wien - 0.2, S1.vienna - 0.15, { kind: 'list', title: '★ КРУАССАН', rows: [['форма', 'Вена · кипферль', '#c8201a'], ['слои', 'Париж · ≈ 1905', '#2a3a8a']], y: 760 }),
    cam: () => [[S0.vienna, 560, 1020, 0.2], [EV.vn_pass, 560, 1120, 0.28], [S1.vienna, 580, 1130, 0.3]]
  };
  // ---------------------------------------------------------------- переход: шлагбаум опускается поворотом и сметает старую картинку
  TRANS_IN.vienna = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), ang = lerp(-1.57, 0.25, e); drawBuf(B, 1, 540, 960);
    scr(() => { ctx.save(); ctx.translate(40, 1700); ctx.rotate(ang); ctx.beginPath(); ctx.rect(-40, -2400, 2600, 2400); ctx.restore(); ctx.save(); ctx.beginPath(); ctx.translate(40, 1700); ctx.rotate(ang); ctx.rect(0, -2400, 2600, 2400); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clip(); drawBuf(A, 1, 540, 960); ctx.restore();
      push(40, 1700, 1, ang); for (let i = 0; i < 20; i++) rect(i * 110, -20, 110, 40, { wash: i % 2 ? '#f8f4ec' : '#c8201a', washA: 1, w: 2, col: '#3a3a3a' }); pop(); });
  } };
})();
