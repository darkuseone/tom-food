/* 010 — `bag`: «В 1920-х Лора Скаддер паковала чипсы в вощёную бумагу, склеенную утюгом.» ТОМ-МАЛЫШ внутри вощёного пакета: стены — полупрозрачная кремовая бумага,
   сквозь неё светит лампа и видны силуэты работниц за столом; внизу чипсы-валуны горой; Том-малыш в косынке работницы сидит на чипсе-«санках». На «Скаддер» снаружи
   проступает силуэт женщины с вывеской; на «вощёную» стены бликуют восковым глянцем; на «утюгом.» сверху по шву проезжает огромный утюг — пар, шов запечатывается.
   Пауза-гэг: Том-малыш съезжает с горки, чипсы хрустят. Переход В сцену: утюг проезжает по кадру и разглаживает его. */
(() => {
  EV.bg_sc = wtw('s4', 'Скаддер');
  EV.bg_wax = wtw('s4', 'вощёную');
  EV.bg_iron = wtw('s4', 'утюгом.');
  EV.bg_slide = LE('s4') - 0.05;
  SHAKES.push([EV.bg_iron + 0.2, 0.2, 7], [EV.bg_slide + 0.5, 0.15, 6]);
  KEYW.push('утюгом.');

  function outside(t) { vgrad(-600, 1500, ['#f6e8c8', '#f2dcb0', '#e8c890']); glow(540, 200, 700, 'rgba(255,240,200,1)', 0.6);
    for (let i = 0; i < 3; i++) human(150 + i * 380, 900, 1.6, t, { body: '#6a5a4a', hair: '#3a2a1a', face: 'calm', armL: 'hold', armR: (Math.floor(t * 2 + i) % 2) ? 'hold' : 'swing', seed: 1180 + i, long: 1, hat: 'scarf', hatCol: '#8a7a6a' });
    if (t > EV.bg_sc - 0.1) { const k = clamp((t - EV.bg_sc + 0.1) / 0.6); human(540, lerp(1200, 760, sm(k)), 2.0, t, { body: '#3a2a3a', hair: '#2a1a1a', face: 'smile', armL: 'hips', armR: 'up', seed: 1185, long: 1 }); bubbleTag('ЛОРА СКАДДЕР', 540, 300, t, EV.bg_sc + 0.2, '#6a4a1a', 40, -0.04); }
    const wax = clamp((t - EV.bg_wax) / 0.6); rect(-300, -600, 1700, 2600, { wash: CHP.wax, washA: 0.6, line: false });
    for (let i = 0; i < 9; i++) pencil(spline([[-200 + i * 170, -400], [-150 + i * 170, 600], [-210 + i * 170, 1800]], false, 6), { w: 3, col: CHP.waxD, a: 0.5, pass2: false });
    if (wax > 0) for (let i = 0; i < 6; i++) { const x = ((i * 220 + (t - EV.bg_wax) * 500) % 1700) - 300; ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.25 * wax; ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.moveTo(x, -400); ctx.lineTo(x + 80, -400); ctx.lineTo(x - 200, 2000); ctx.lineTo(x - 280, 2000); ctx.fill(); ctx.restore(); } }
  function seam(t) { const k = clamp((t - EV.bg_iron + 0.25) / 1.1), ix = lerp(-300, 1400, k); rect(-300, 260, 1700, 90, { wash: lerpC(CHP.wax, '#d8c898', 0.6), washA: 1, w: 2, col: CHP.waxD, key: 11800 });
    for (let x = -300; x < Math.min(ix, 1400); x += 30) pencil([[x, 270], [x + 16, 340]], { w: 3, col: '#b8a070', a: 0.7, pass2: false });
    if (k > 0 && k < 1) { push(ix, 220, 2.4); PROPS.ironP(); pop(); for (let q = 0; q < 5; q++) { const kk = (t * 2 + q / 5) % 1; ell(ix - 60 - kk * 120, 340 - kk * 60, 30 + kk * 30, 20 + kk * 20, { wash: '#ffffff', washA: 0.6 * (1 - kk), line: false }); } } }
  function pile(t) { for (let i = 0; i < 26; i++) { const r = rng(11810 + i), x = -200 + r() * 1400, y = 1400 + r() * 500 - (Math.abs(x - 560) < 300 ? 120 : 0); chip(x, y, 1.3 + r() * 0.8, r() * 6, { seed: i + 11 }); }
    for (let i = 0; i < 8; i++) { const r = rng(11840 + i), y = ((t * 40 + r() * 1400) % 1400) + 100; ell(r() * 1080, y, 3, 3, { wash: '#ffffff', washA: 0.5, line: false }); } }
  function sled(t, P) { push(P.x - 10, P.y + 6, 1, -0.15 + Math.sin(t * 2) * 0.03); chip(0, 0, 1.25, 0.05, { seed: 7 }); pop(); if (t > EV.bg_slide + 0.3 && t < EV.bg_slide + 1.2) { const q = clamp((t - EV.bg_slide - 0.3) / 0.9); for (let i = 0; i < 10; i++) { const a = -2.8 + i * 0.25; ell(P.x + Math.cos(a) * 160 * q, P.y + Math.sin(a) * 80 * q, 6, 4, { wash: CHP.gold, washA: 1 - q, line: false }); } bubbleTag('ХРУСТ!', P.x, P.y - 260, t, EV.bg_slide + 0.35, '#c88a1e', 36, 0.08); } }
  WORLD.bag = (t, u, cat) => { lay(16, () => outside(t)); lay(4, () => seam(t)); lay(1, () => { pile(t); cat(); }); };
  DIR.bag = {
    outfit: 'hostess', light: { side: -1, rim: '#fff4d0' }, grade: ['#e8c070', 0.05],
    act: () => [[S0.bag, 'awe'], [EV.bg_sc, 'talk'], [EV.bg_wax, 'awe'], [EV.bg_iron, 'scared'], [EV.bg_iron + 0.8, 'grin'], [EV.bg_slide, 'laugh']],
    pose: (t, u, b) => { const sl = sm(clamp((t - EV.bg_slide) / 0.8)); return Object.assign(b, { x: lerp(560, 380, sl), y: lerp(1340, 1520, sl), s: 0.55, flip: true, look: t > EV.bg_iron - 0.2 && t < EV.bg_iron + 0.9 ? [-0.2, -1] : [-0.3, -0.2], hand: sl > 0 ? [160, -380] : [140, -260], handF: sl > 0 ? [-140, -380] : [-100, -240], tailUp: true }); },
    afterCat: (t, u, P) => sled(t, P),
    cam: () => [[S0.bag, 540, 1000, 0.08], [EV.bg_sc, 540, 900, 0.12], [EV.bg_iron, 560, 800, 0.16, 'x'], [EV.bg_slide, 480, 1300, 0.3, 'x'], [S1.bag, 460, 1320, 0.32]]
  };
  TRANS_IN.bag = { a: 0.15, b: 0.55, runA: 1, fx(k, t, A, B) {                // утюг проезжает по кадру и разглаживает его: за утюгом — новая сцена
    const q = sm(k), y = lerp(-200, H + 300, q); drawBuf(B, 1, 540, 960); ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.rect(0, y, W, H); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
    scr(() => { push(540, y, 5, 1.57); PROPS.ironP(); pop(); for (let i = 0; i < 8; i++) { const kk = (t * 3 + i / 8) % 1; ell(200 + i * 100, y - 60 - kk * 200, 60 + kk * 40, 40 + kk * 30, { wash: '#ffffff', washA: 0.5 * (1 - kk), line: false }); } });
  } };
})();
