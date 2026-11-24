/* 029 — `treviso`: «Версия первая — Тревизо. По рассказам, в ресторане маскарпоне случайно упал в миску с желтками!» Кухня ресторана
   ≈ 1970 в Тревизо: оранжево-коричневый кафель 70-х, радиоприёмник, вытяжка, ряды кастрюль, полка с банками маскарпоне, окно на канал
   с арками-портиками и мостиком, ивы; шеф в высоком колпаке с бакенбардами, официантка с подносом. Том — повар траттории. Главный свет —
   тёплая лампа под абажуром, второй — дневное окно. По словам: «Тревизо.» — табличка-стрелка «TREVISO»; «ресторане» — шеф взбивает
   желтки; «маскарпоне» — Том локтем задевает полку, банка качается; «упал» — банка опрокидывается — «ПЛЮХ!» прямо в миску; «желтками!» —
   шеф пробует, глаза-звёзды «ммм!». Переход В сцену: перекидное табло (как на вокзале) щёлкает створками и складывает новый кадр. */
(() => {
  EV.tv_city = wtw('s2', 'Тревизо.');
  EV.tv_rest = wtw('s2', 'ресторане');
  EV.tv_masc = wtw('s2', 'маскарпоне');
  EV.tv_fall = wtw('s2', 'упал');
  EV.tv_yolk = wtw('s2', 'желтками!');
  SHAKES.push([EV.tv_fall + 0.3, 0.16, 7]);
  KEYW.push('случайно');
  const fall = t => clamp((t - EV.tv_fall + 0.2) / 0.5);

  function canal(t) {                                                     // окно: канал, портики, мостик, ивы, лодка
    vgrad(-300, 700, ['#a8c8e0', '#e8e0c8']); for (let i = 0; i < 5; i++) { push(-260 + i * 140, 360, 1); rect(-60, -260, 120, 260, { wash: ['#e8b888', '#d8a878', '#f0c898'][i % 3], washA: 1, w: 1.6 }); for (let a = 0; a < 2; a++) blob([[-50 + a * 56, 0], [-50 + a * 56, -60], [-26 + a * 56, -80], [-2 + a * 56, -60], [-2 + a * 56, 0]], { wash: '#5a3a2a', washA: 1, w: 1.2 }); rect(-50, -220, 30, 40, { wash: '#3a5a6a', washA: 1, w: 1 }); rect(10, -220, 30, 40, { wash: '#3a5a6a', washA: 1, w: 1 }); pop(); }
    rect(-300, 360, 1000, 300, { wash: '#4a7a7a', washA: 1, line: false }); for (let i = 0; i < 8; i++) pencil([[-280 + ((t * 20 + i * 130) % 900), 380 + i * 22], [-220 + ((t * 20 + i * 130) % 900), 380 + i * 22]], { w: 2, col: '#e8f4f0', a: 0.5, pass2: false });
    pencil(spline([[-80, 380], [60, 320], [200, 380]], false, 8), { w: 14, col: '#c8b890', pass2: false }); for (const x of [-220, 460]) { pencil([[x, 360], [x, 200]], { w: 6, col: '#5a4a2a', pass2: false }); for (let j = 0; j < 8; j++) pencil(spline([[x, 200], [x - 40 + j * 10, 260], [x - 50 + j * 12, 340 + Math.sin(t + j) * 6]], false, 4), { w: 2, col: '#6a9a3a', pass2: false }); }
  }
  function kitchen(t) {                                                   // кафель 70-х, окно, вытяжка, кастрюли, полка с маскарпоне, радио
    vgrad(-500, 1500, ['#a8582a', '#c8783a', '#b86a32']); for (let r = 0; r < 14; r++) for (let i = 0; i < 14; i++) rect(-500 + i * 160, -500 + r * 140, 156, 136, { wash: (i + r) % 2 ? '#d8883a' : '#c87030', washA: 1, w: 1, col: '#7a3a14' });
    push(260, 380, 1); const w = rect(-220, -220, 440, 400, { wash: '#a8c8e0', washA: 1, w: 10, col: '#4a2a14', key: 29400 }); ctx.save(); ctx.clip(w.path); canal(t); ctx.restore(); pencil([[0, -220], [0, 180]], { w: 6, col: '#4a2a14', pass2: false }); pop();
    push(900, 200, 1); poly([[-200, 0], [200, 0], [140, -200], [-140, -200]], { wash: '#a8acb4', washA: 1, w: 3, col: '#3a3a40' }); rect(-40, -460, 80, 260, { wash: '#a8acb4', washA: 1, w: 2 }); pop();
    for (let i = 0; i < 5; i++) { push(720 + i * 80, 320, 1); pencil([[0, 0], [0, 40]], { w: 2, col: '#3a3a3a', pass2: false }); ell(0, 80, 32, 36, { wash: '#a8acb4', washA: 1, w: 2, col: '#3a3a40' }); pop(); }
    push(620, 640, 1); rect(-150, 0, 300, 14, { wash: '#6a4a2a', washA: 1, w: 1.6 }); for (let i = 0; i < 3; i++) mascarponeTub(-100 + i * 100, 0, 0.6); rect(-150, 200, 300, 14, { wash: '#6a4a2a', washA: 1, w: 1.6 }); push(-70, 200, 1); rect(-60, -70, 120, 70, { wash: '#6a3a1a', washA: 1, w: 2 }); ell(30, -36, 18, 18, { wash: '#c8a040', washA: 1, w: 1.4 }); rect(-50, -60, 50, 30, { wash: '#f0e0a0', washA: 1, w: 1 }); pop(); pop();
    push(1060, 820, 1); rect(-90, -130, 180, 260, { wash: '#f4ecd8', washA: 1, w: 3, col: '#6a4a2a' }); txt('TREVISO', 0, -70, 30, { font: 'Osw', col: '#a8241e' }); txt('1970', 0, -20, 40, { font: 'Osw', col: '#2a2a2a' }); pop();
    if (t > EV.tv_city) { push(560, 560, popK(t, EV.tv_city, 0.35)); poly([[-130, -36], [100, -36], [140, 0], [100, 36], [-130, 36]], { wash: '#2a5a3a', washA: 1, w: 2.4, col: '#f8f4ec' }); txt('TREVISO', -10, 14, 40, { font: 'Osw', col: '#f8f4ec' }); hudBox('указатель TREVISO', -130, -36, 140, 36); pop(); }
  }
  function staff(t) {                                                     // шеф с бакенбардами взбивает; официантка с подносом
    const taste = t > EV.tv_yolk;
    human(300, 1300, 1.1, t, { body: '#f8f4ec', legs: '#2a2a2a', hair: '#3a2010', face: taste ? 'grin' : 'calm', armL: 'hold', armR: t > EV.tv_rest && !taste ? (Math.sin(t * 16) > 0 ? 'up' : 'hold') : taste ? 'up' : 'hold', look: 0.4, seed: 29410, beard: 'short' }); push(300, 1300 - 330 * 1.1, 1.1); blob([[-40, 0], [-50, -80], [-30, -110], [30, -110], [50, -80], [40, 0]], { wash: '#ffffff', washA: 1, w: 1.6, col: '#a8a8a8' }); pop();
    if (taste) { push(300, 820, popK(t, EV.tv_yolk + 0.1, 0.35)); txt('ммм!', 0, 0, 56, { font: 'Hand', col: '#a8241e' }); pop(); }
    human(1000, 1300, 1.0, t, { body: '#2a2a2a', legs: '#2a2a2a', hair: '#c88a3a', face: t > EV.tv_fall ? 'shock' : 'smile', armL: 'up', armR: 'hold', look: -0.5, seed: 29411, flip: -1, long: 1 }); push(1050, 960, 1); ell(0, 0, 70, 14, { wash: '#c8ccd4', washA: 1, w: 2 }); for (let i = 0; i < 2; i++) tiraCup(-30 + i * 60, -6, 0.3, t, { key: 29412 + i, spoon: false }); pop();
  }
  function table(t) {                                                     // стол: миска желтков (герой), банка маскарпоне падает, яйца, сахарница
    const tb = rect(-500, 1440, 2200, 600, { wash: '#c8ccd4', washA: 1, w: 3, col: '#5a5e66', key: 29420 }); shadeG(tb.path, 0, 1440, 0, 1900, '#8a8e96', 0.4); pencil([[-500, 1446], [1700, 1446]], { w: 6, col: '#ffffff', a: 0.5, pass2: false });
    yolkBowl(420, 1450, 1.1, t, { key: 29421, whisk: t > EV.tv_rest && t < EV.tv_fall, cream: t > EV.tv_fall + 0.3 });
    const f = fall(t); if (t > EV.tv_masc - 0.1) { const x = lerp(560, 430, f), y = lerp(1180, 1380, f * f), r = f * 2.4 + (t < EV.tv_fall ? Math.sin(t * 20) * 0.15 : 0); push(x, y, 1, r); mascarponeTub(0, 0, 0.7); pop(); }
    if (t > EV.tv_fall + 0.3) { const q = clamp((t - EV.tv_fall - 0.3) / 0.6); for (let i = 0; i < 9; i++) { const a = -2.9 + i * 0.35; ell(420 + Math.cos(a) * 140 * q, 1380 + Math.sin(a) * 120 * q + q * q * 80, 12, 10, { wash: TI.cream, washA: 1 - q, line: false }); } push(420, 1180, popK(t, EV.tv_fall + 0.3, 0.3)); txt('ПЛЮХ!', 0, 0, 80, { font: 'Osw', col: '#ffe070', rot: -0.1 }); pop(); }
    push(150, 1450, 1); for (let i = 0; i < 4; i++) ell(-40 + i * 28, -24, 18, 24, { wash: '#f8ecd8', washA: 1, w: 1.4, col: '#a89a7a' }); pop(); push(1050, 1450, 1); blob([[-40, 0], [-46, -70], [-20, -90], [20, -90], [46, -70], [40, 0]], { wash: '#f4f0e8', washA: 1, w: 2, col: '#2a4a8a' }); pop();
    castShadow(640, 1450, 320, 90, -0.5, 0.25);
  }
  WORLD.treviso = (t, u, cat) => {
    lay(9, () => { kitchen(t); haze('#ffd8a8', 0.05); });
    lay(2.6, () => { staff(t); shaft(260, 380, 300, 1400, -0.4, 'rgba(255,240,210,1)', 0.14); });
    lay(1, () => { lightPool(560, 1460, 660, 120, 'rgba(255,215,160,1)', 0.35); cat(); table(t); });
    lay(0.65, () => { push(-150, 300, 1.4); pencil([[0, -400], [0, -60]], { w: 4, col: '#2a2a2a', pass2: false }); blob([[-80, -60], [-60, -120], [60, -120], [80, -60]], { wash: '#e8783a', washA: 1, w: 2 }); glow(0, -40, 160, 'rgba(255,190,110,1)', 0.3); pop(); push(1230, 1950, 1.4); for (let i = 0; i < 3; i++) mascarponeTub(i * 60 - 60, -i * 30, 0.9); pop();
      motes(12, [-200, 300, 1300, 1500], '#fff0d0', t, 29490, { sp: 3, sz: 3, a: 0.35, wob: 4 }); moodDark(560, 1000, 520, 1500, '#140a06', 0.4); });
  };
  DIR.treviso = {
    outfit: 'trattA', light: { side: -1, rim: '#ffe0b0' }, grade: ['#ffb070', 0.06],
    act: () => [[S0.treviso, 'talk'], [EV.tv_city, 'proud'], [EV.tv_masc, 'sideeye'], [EV.tv_fall, 'shock'], [EV.tv_yolk, 'grin']],
    pose: (t, u, b) => { const oops = t > EV.tv_masc - 0.3 && t < EV.tv_fall + 0.2; return Object.assign(b, { x: 720, y: 1600, s: 1.15, flip: true, look: oops ? [-0.5, -0.4] : t > EV.tv_fall ? [-0.7, 0.6] : [-0.3, 0.2], hand: oops ? [180, -380] : t > EV.tv_yolk ? [80, -320] : [150, -230], handF: [-90, -230], prop: t > EV.tv_yolk ? 'spoonTiraP' : undefined, sweat: oops, tailUp: t > EV.tv_yolk }); },
    cam: () => [[S0.treviso, 560, 1040, 0.22], [EV.tv_masc, 560, 1120, 0.28], [EV.tv_yolk, 580, 1140, 0.3], [S1.treviso, 590, 1150, 0.31]]
  };
  // ---------------------------------------------------------------- переход: перекидное табло щёлкает створками и складывает новый кадр
  TRANS_IN.treviso = { a: 0.25, b: 0.5, runA: 0.3, fx(k, t, A, B) {
    const e = clamp(k * 1.2); drawBuf(A, 1, 540, 960);
    scr(() => { for (let r = 0; r < 12; r++) { const q = clamp(e * 1.6 - r * 0.05), y0 = r * 160; if (q <= 0) continue; const sy = Math.abs(Math.cos(q * Math.PI)), useB = q > 0.5;
      ctx.save(); ctx.beginPath(); ctx.rect(0, y0, 1080, 160); ctx.clip(); if (useB) drawBuf(B, 1, 540, 960); ctx.translate(0, y0 + 80); ctx.scale(1, Math.max(sy, 0.02)); ctx.translate(0, -y0 - 80); if (!useB) ctx.drawImage(A, 0, 0); else ctx.drawImage(B, 0, 0); ctx.restore(); pencil([[0, y0 + 80], [1080, y0 + 80]], { w: 3, col: '#1a1a1a', a: 0.6 * (1 - q), pass2: false }); } });
  } };
})();
