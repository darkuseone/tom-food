/* 029 — `verdict` (РАЗГАДКА ★): «Так кто автор? Рецепт старше во Фриули, а прославил его Тревизо. Ничья!» Пьяцца-«дерби»: старинное табло
   на ратуше «FRIULI ? : ? TREVISO», слева болельщики Фриули с сине-золотыми флагами с орлом, справа — Венето с красными флагами со львом,
   шарфы, барабан, голуби; в центре на постаменте — кубок-стаканчик тирамису. Том — судья в синем блейзере со свистком. Главный свет —
   тёплое вечернее солнце, второй — прожектор-фонарь. По словам: «автор?» — Том свистит, толпы замирают; «Фриули,» — на табло слева «1»,
   подпись «рецепт · 1950-е», левые ликуют; «Тревизо.» — справа «1», «слава · 1972/81», правые ликуют; «Ничья!» — «1 : 1», болельщики
   обнимаются, конфетти, Том поднимает кубок. Переход В сцену: судейская монета крутится в центре кадра, растёт и раскрывает пьяццу. */
(() => {
  EV.vd_who = wtw('s8', 'автор?');
  EV.vd_fr = wtw('s8', 'Фриули,');
  EV.vd_tv = wtw('s8', 'Тревизо.');
  EV.vd_draw = wtw('s8', 'Ничья!');
  SHAKES.push([EV.vd_draw, 0.18, 8]);
  KEYW.push('Ничья!');

  function piazza(t) {                                                    // небо, ратуша с табло, аркады, голуби
    vgrad(-500, 900, ['#5a7ac0', '#f0b890', '#f8d8a8']); glow(900, 200, 300, 'rgba(255,220,170,1)', 0.25);
    push(560, 900, 1); rect(-420, -760, 840, 760, { wash: '#d8a878', washA: 1, w: 3, col: '#6a4a2a', key: 30000 }); for (let i = 0; i < 7; i++) blob([[-380 + i * 112, 0], [-380 + i * 112, -180], [-330 + i * 112, -240], [-280 + i * 112, -180], [-280 + i * 112, 0]], { wash: '#5a3a24', washA: 1, w: 2 }); rect(-60, -1000, 120, 240, { wash: '#c89868', washA: 1, w: 2 }); poly([[-70, -1000], [0, -1100], [70, -1000]], { wash: '#8a5a3a', washA: 1, w: 2 });
    push(170, 120, 0.68); rect(-340, -680, 680, 300, { wash: '#1a1a1a', washA: 1, w: 6, col: '#c8a040' }); txt('FRIULI', -200, -620, 44, { font: 'Osw', col: '#f0c030' }); txt('TREVISO', 200, -620, 44, { font: 'Osw', col: '#f04040' });
    const l = t > EV.vd_fr ? '1' : '?', r = t > EV.vd_tv ? '1' : '?'; txt(l, -200, -480, 110, { font: 'Osw', col: '#ffffff' }); txt(':', 0, -490, 110, { font: 'Osw', col: '#ffffff' }); txt(r, 200, -480, 110, { font: 'Osw', col: '#ffffff' });
    if (t > EV.vd_fr) txt('рецепт · 1950-е', -200, -410, 24, { font: 'Hand', col: '#f0c030' }); if (t > EV.vd_tv) txt('слава · 1972/81', 200, -410, 24, { font: 'Hand', col: '#f04040' }); hudBox('табло дерби', -340, -680, 340, -380); pop();
    pop();
    for (let i = 0; i < 6; i++) { const x = ((t * 50 + i * 260) % 1700) - 300, y = 260 + i * 30 + Math.sin(t * 3 + i) * 10, f = Math.sin(t * 9 + i) * 12; pencil(spline([[x - 18, y + f], [x - 6, y], [x, y]], false, 3), { w: 3, col: '#4a4a5a', pass2: false }); pencil(spline([[x, y], [x + 6, y], [x + 18, y + f]], false, 3), { w: 3, col: '#4a4a5a', pass2: false }); }
  }
  function fans(t) {                                                      // две толпы болельщиков с флагами; замирают на свисток, ликуют по очереди, обнимаются
    const hush = t > EV.vd_who && t < EV.vd_fr, joyL = t > EV.vd_fr, joyR = t > EV.vd_tv, hug = t > EV.vd_draw;
    for (let i = 0; i < 3; i++) { const x = -40 + i * 120 + (hug ? 80 : 0); human(x, 1300 - (joyL && !hush ? Math.abs(Math.sin(t * 8 + i)) * 30 : 0), 0.9, t, { body: '#2a4a9a', legs: '#2a2a2a', hair: '#6a4a2a', face: hush ? 'shock' : joyL ? 'grin' : 'smile', armL: joyL ? 'up' : 'hold', armR: joyL ? 'wave' : 'hold', look: 0.5, seed: 30010 + i }); }
    for (let i = 0; i < 3; i++) { const x = 900 + i * 120 - (hug ? 80 : 0); human(x, 1300 - (joyR && !hush ? Math.abs(Math.sin(t * 8 + i)) * 30 : 0), 0.9, t, { body: '#a82a2a', legs: '#2a2a2a', hair: '#3a2010', face: hush ? 'shock' : joyR ? 'grin' : 'smile', armL: joyR ? 'up' : 'hold', armR: joyR ? 'wave' : 'hold', look: -0.5, seed: 30020 + i, flip: -1 }); }
    for (const [x, c, em] of [[60, '#2a4a9a', '#f0c030'], [1020, '#a82a2a', '#f0c030']]) { push(x, 1000, 1); pencil([[0, 200], [0, -300]], { w: 6, col: '#5a3a1a', pass2: false }); const fl = []; for (let i = 0; i <= 8; i++) fl.push([i * 30 * (x < 500 ? 1 : -1), -300 + Math.sin(t * 5 + i * 0.6) * 10 * i / 8]); shape(fl.concat(fl.slice().reverse().map(([a, b]) => [a, b + 160])), { wash: c, washA: 1, w: 2, col: '#1a1a1a', key: 30030 + x }); ell(120 * (x < 500 ? 1 : -1), -220, 34, 40, { wash: em, washA: 1, w: 1.6 }); pop(); }
    if (hug) { const r = rng(hsh(FRAME, 30040)); for (let i = 0; i < 24; i++) rect(-200 + r() * 1500, ((t - EV.vd_draw) * 400 + r() * 1200) % 1400, 14, 10, { wash: ['#2a4a9a', '#f0c030', '#a82a2a', '#f8f4ec'][i % 4], washA: 1, line: false }); }
  }
  function stand(t) {                                                     // мостовая, постамент с кубком-тирамису, барабан, шарфы
    const g = rect(-500, 1440, 2200, 600, { wash: '#a89878', washA: 1, w: 3, col: '#5a4a3a', key: 30050 }); ctx.save(); ctx.clip(g.path); for (let r = 0; r < 8; r++) for (let i = 0; i < 22; i++) ell(-480 + i * 100 + (r % 2) * 50, 1460 + r * 60, 46, 24, { wash: ['#9a8a6a', '#b4a484'][(i + r) % 2], washA: 1, w: 1, col: '#6a5a3a' }); ctx.restore();
    push(380, 1450, 1); rect(-90, -160, 180, 160, { wash: '#e8e0d0', washA: 1, w: 3, col: '#6a5a4a' }); rect(-110, -180, 220, 24, { wash: '#d8d0c0', washA: 1, w: 2 }); const up = t > EV.vd_draw ? popK(t, EV.vd_draw, 0.4) : 0; tiraCup(0, -180 - up * 40, 0.9 + up * 0.2, t, { spoon: false, key: 30051 }); if (up > 0) glow(0, -280, 160, 'rgba(255,230,160,1)', 0.25); pop();
    push(1060, 1450, 1); ell(0, -60, 80, 60, { wash: '#c8302a', washA: 1, w: 2 }); ell(0, -110, 80, 20, { wash: '#f4ecd8', washA: 1, w: 2 }); pop();
    castShadow(640, 1450, 320, 90, 0.5, 0.25);
  }
  function extra(t) {                                                     // мелочи пьяццы: кафе-столики под зонтом, мороженщик, велосипед, голуби на мостовой
    push(-120, 1240, 0.8); pencil([[0, 0], [0, -260]], { w: 5, col: '#3a3a3a', pass2: false }); blob([[-150, -260], [0, -340], [150, -260]], { wash: '#2a6a4a', washA: 1, w: 2 }); for (let i = 0; i < 6; i++) pencil([[0, -340], [-150 + i * 60, -260]], { w: 1.4, col: '#1a4a2a', pass2: false }); ell(0, 0, 80, 16, { wash: '#f4ecd8', washA: 1, w: 1.6 }); pop();
    push(1180, 1250, 0.8); rect(-80, -120, 160, 120, { wash: '#f8f4ec', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) rect(-70 + i * 36, -120, 30, 120, { wash: ['#f8a8c0', '#f8e0a0', '#a8d8c8', '#c8a0e8'][i], washA: 0.6, line: false }); ell(-40, 0, 26, 26, { wash: '#2a2a2a', washA: 0, w: 4, col: '#2a2a2a' }); ell(40, 0, 26, 26, { wash: '#2a2a2a', washA: 0, w: 4, col: '#2a2a2a' }); pop();
    for (let i = 0; i < 5; i++) { const x = 200 + i * 160 + Math.sin(t * 2 + i) * 10; push(x, 1430, 0.5); ell(0, 0, 26, 16, { wash: '#7a7a8a', washA: 1, w: 1.4 }); ell(20, -14, 12, 10, { wash: '#6a6a7a', washA: 1, w: 1 }); poly([[30, -14], [40, -12], [30, -10]], { wash: '#f0a020', washA: 1, w: 1 }); pop(); }
  }
  WORLD.verdict = (t, u, cat) => {
    lay(10, () => { piazza(t); hatch(pathOf([[-500, -500], [1700, -500], [1700, 900], [-500, 900]]), bbOf([[-500, -500], [1700, 900]]), { gap: 26, a: 0.05, col: '#3a2a1a', ang: 0.9, key: 29679 }); shadeG(pathOf([[-500, 600], [1700, 600], [1700, 1440], [-500, 1440]]), 0, 1440, 0, 600, '#2a1a10', 0.18); haze('#ffe0c0', 0.05); });
    lay(2.6, () => { extra(t); fans(t); shaft(1100, 0, 380, 1500, 0.45, 'rgba(255,230,180,1)', 0.14); });
    lay(1, () => { lightPool(560, 1460, 660, 120, 'rgba(255,225,170,1)', 0.34); cat(); stand(t); });
    lay(0.65, () => { push(-150, 1950, 1.4); for (let i = 0; i < 5; i++) rect(-40, -60 - i * 50, 200, 40, { wash: i % 2 ? '#2a4a9a' : '#f0c030', washA: 1, w: 2 }); pop(); push(1230, 1950, 1.4); for (let i = 0; i < 5; i++) rect(-160, -60 - i * 50, 200, 40, { wash: i % 2 ? '#a82a2a' : '#f0c030', washA: 1, w: 2 }); pop();
      motes(12, [-200, 300, 1300, 1500], '#fff0d0', t, 30090, { sp: 2, sz: 3, a: 0.35, wob: 4 }); moodDark(560, 1000, 520, 1500, '#140a10', 0.42); });
  };
  DIR.verdict = {
    outfit: 'olympA', light: { side: 1, rim: '#ffe0b0' }, grade: ['#ffc8a0', 0.05],
    act: () => [[S0.verdict, 'suspicious'], [EV.vd_who, 'smug'], [EV.vd_fr, 'proud'], [EV.vd_tv, 'grin'], [EV.vd_draw, 'laugh']],
    pose: (t, u, b) => { const wh = t > EV.vd_who - 0.2 && t < EV.vd_who + 0.5; return Object.assign(b, { x: 720, y: 1600, s: 1.15, flip: true, look: t > EV.vd_fr && t < EV.vd_tv ? [-0.9, -0.3] : t > EV.vd_tv && t < EV.vd_draw ? [0.9, -0.3] : [-0.2, -0.4], hand: wh ? [60, -330] : t > EV.vd_draw ? [140, -460] : t > EV.vd_fr && t < EV.vd_tv ? [260, -380] : [150, -240], handF: t > EV.vd_tv && t < EV.vd_draw ? [-260, -380] : t > EV.vd_draw ? [-140, -460] : [-90, -230], point: t > EV.vd_fr && t < EV.vd_draw ? 1 : undefined, tailUp: t > EV.vd_draw }); },
    hud: t => infoPlate(t, EV.vd_fr - 0.1, S1.verdict - 0.15, { kind: 'list', title: '★ КТО АВТОР?', rows: [['Фриули', 'рецепт старше · 1950-е', '#2a4a9a'], ['Тревизо', 'прославил · 1972/81', '#a82a2a']], x: 650, y: 880 }),
    cam: () => [[S0.verdict, 560, 1000, 0.2], [EV.vd_who, 560, 1060, 0.24], [EV.vd_fr, 560, 1100, 0.27], [EV.vd_draw, 600, 1120, 0.29], [S1.verdict, 610, 1130, 0.3]]
  };
  // ---------------------------------------------------------------- переход: судейская монета крутится в центре, растёт и раскрывает пьяццу
  TRANS_IN.verdict = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k), R = lerp(40, 1500, e * e), sx = Math.abs(Math.cos(e * 18)) * (1 - e) + e; drawBuf(A, 1, 540, 960);
    scr(() => { ctx.save(); ctx.beginPath(); ctx.ellipse(540, 960, Math.max(R * sx, 4), R, 0, 0, 6.283); ctx.clip(); drawBuf(B, 1, 540, 960); ctx.restore(); pencil(ellPts(540, 960, Math.max(R * sx, 4), R, 0, 0, 48), { w: 24 * (1 - e) + 6, col: '#d8b040', pass2: false }); pencil(ellPts(540, 960, Math.max(R * sx, 4) * 0.9, R * 0.9, 0, 0, 48), { w: 4, col: '#a8801a', a: 1 - e, pass2: false }); });
  } };
})();
