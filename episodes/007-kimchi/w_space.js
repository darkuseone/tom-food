/* 007 — `space`: «Боялись, что от космических лучей бактерии мутируют. Отмотаем назад!» Тёмный отсек-лаборатория станции: стойка с приборами, большой монитор
   «микроскопа» с сеткой, за окном звёзды. На «космических» сквозь стену бьют фиолетовые лучи-зигзаги, на «мутируют» бактерия на экране раздувается, отращивает рога
   и рычит; Том-космонавт в ужасе. На «Отмотаем назад!» он лупит по большой кнопке ⏪ — экран и весь отсек начинают «перематываться» полосами. Переход В сцену:
   камера ныряет в иллюминатор прошлого кадра — круглое окно растёт. */
(() => {
  EV.sp_rays = wtw('s1', 'космических');
  EV.sp_mut = wtw('s1', 'мутируют.');
  EV.sp_back = wtw('s1', 'Отмотаем');
  SHAKES.push([EV.sp_mut + 0.2, 0.25, 12], [EV.sp_back + 0.3, 0.2, 10]);
  KEYW.push('мутируют.', 'назад!');

  const rew = (x, y, sz, col, a = 1) => { for (const dx of [-sz * 0.5, sz * 0.4]) poly([[x + dx + sz * 0.45, y - sz * 0.4], [x + dx + sz * 0.45, y + sz * 0.4], [x + dx - sz * 0.4, y]], { wash: col, washA: a, line: false }); };
  function bay(t) { vgrad(-600, 1600, ['#0a0e1a', '#141a2a', '#1a2234']); for (let i = 0; i < 60; i++) { const r = rng(7800 + i); ell(r() * 1400 - 160, r() * 700 - 100, 1.6, 1.6, { wash: '#ffffff', washA: 0.5 + 0.5 * Math.sin(t * 3 + i), line: false }); }
    rect(-300, 520, 1700, 1100, { wash: '#2a3040', washA: 1, w: 3, col: '#0a0e14', key: 7810 }); for (let i = 0; i < 8; i++) rect(-260 + i * 210, 560, 190, 160, { wash: '#1a2030', washA: 1, w: 2, col: '#3a4458' });
    for (let i = 0; i < 24; i++) ell(-240 + (i % 12) * 140, 600 + Math.floor(i / 12) * 60, 7, 7, { wash: ['#3ae06a', '#e8402a', '#f2c838'][i % 3], washA: 0.5 + 0.5 * Math.sin(t * 5 + i), line: false });
    // монитор-микроскоп
    push(540, 1000, 1); rect(-330, -220, 660, 440, { wash: '#0a1a14', washA: 1, w: 10, col: '#5a6478' }); ctx.save(); ctx.beginPath(); ctx.rect(-320, -210, 640, 420); ctx.clip(); for (let i = -6; i <= 6; i++) { pencil([[i * 54, -210], [i * 54, 210]], { w: 1, col: '#2a6a4a', a: 0.6, pass2: false }); pencil([[-320, i * 40], [320, i * 40]], { w: 1, col: '#2a6a4a', a: 0.6, pass2: false }); }
      const m = clamp((t - EV.sp_mut + 0.3) / 0.6); push(0, 0, 1 + m * 1.4); bacterium(0, 0, 2.2, t, { horns: m > 0.3, scared: m <= 0 && t > EV.sp_rays }); pop(); if (m > 0.3) for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283 + t; pencil([[Math.cos(a) * 200, Math.sin(a) * 120], [Math.cos(a) * 250, Math.sin(a) * 150]], { w: 4, col: '#ff5a3a', a: 0.7, pass2: false }); }
      if (t > EV.sp_mut + 0.2) txt('МУТАЦИЯ!', 0, -160, 54, { font: 'Osw', col: '#ff5a3a', a: 0.6 + 0.4 * Math.sin(t * 12) });
      const rw = clamp((t - EV.sp_back - 0.3) / 0.8); if (rw > 0) { for (let i = 0; i < 12; i++) { const y = ((i * 37 + t * 900) % 420) - 210; ctx.fillStyle = `rgba(255,255,255,${0.25 * rw})`; ctx.fillRect(-320, y, 640, 8 + (i % 3) * 6); } rew(240, -170, 50, '#ffffff', rw); }
      ctx.restore(); pop();
    if (t > EV.sp_rays - 0.1 && t < EV.sp_mut + 0.8) for (let i = 0; i < 5; i++) { const r = rng(7820 + i), x0 = -100 + r() * 1200, k = ((t - EV.sp_rays) * 2 + r()) % 1; const pts = []; for (let q = 0; q < 8; q++) pts.push([x0 - q * 60 + (q % 2) * 40, -100 + q * 140 * k * 1.6]); pencil(pts, { w: 6, col: '#c86aff', a: 0.9, pass2: false }); glow(pts[pts.length - 1][0], pts[pts.length - 1][1], 60, 'rgba(200,110,255,1)', 0.5); } }
  function console_(t) { const d = rect(-300, 1330, 1700, 700, { wash: '#3a4252', washA: 1, w: 3, col: '#0a0e14', key: 7830 }); for (let i = 0; i < 10; i++) rect(-260 + i * 160, 1360, 120, 40, { wash: '#1a2030', washA: 1, w: 1.6, col: '#5a6478' });
    const press = t > EV.sp_back + 0.1 && t < EV.sp_back + 0.5; push(300, 1420, 1); ell(0, 20, 120, 34, { wash: '#1a1a1a', washA: 1, w: 3 }); ell(0, press ? 10 : 0, 100, 30, { wash: '#d9282b', washA: 1, w: 3, col: '#5a0408' }); rect(-100, press ? -20 : -40, 200, press ? 30 : 40, { wash: '#d9282b', washA: 1, line: false }); ell(0, press ? -20 : -40, 100, 30, { wash: '#f04a3a', washA: 1, w: 3, col: '#5a0408' });
      rew(0, press ? -24 : -44, 44, '#fff4e0'); pop(); if (t > EV.sp_back) bubbleTag('ОТМОТАТЬ', 300, 1240, t, EV.sp_back, '#d9282b', 34, -0.05); }
  WORLD.space = (t, u, cat) => { lay(8, () => bay(t)); lay(1, () => { console_(t); cat(); }); };
  DIR.space = {
    outfit: 'astroA', light: { side: -1, rim: '#c88aff' }, grade: ['#5a3a9a', 0.08],
    act: () => [[S0.space, 'suspicious'], [EV.sp_rays, 'awe'], [EV.sp_mut, 'scared'], [EV.sp_back, 'smug'], [EV.sp_back + 0.4, 'grin']],
    pose: (t, u, b) => { const hit = t > EV.sp_back - 0.2; return Object.assign(b, { x: lerp(800, 660, clamp((t - EV.sp_back + 0.6) / 0.4)), y: 1800, s: 1.1, flip: true, noHat: true, look: t < EV.sp_back ? [-0.6, -0.6] : [0, 0.2], hand: hit ? [330, -330 + (t < EV.sp_back + 0.4 ? 40 : 0)] : [140, -320], handF: [-90, -230], sweat: t > EV.sp_mut && t < EV.sp_back ? 1 : 0, squash: hit && t < EV.sp_back + 0.4 ? 0.1 : 0 }); },
    cam: () => [[S0.space, 540, 1000, 0.12], [EV.sp_rays, 540, 960, 0.12], [EV.sp_mut, 540, 1000, 0.22, 'x'], [EV.sp_back, 560, 1300, 0.18, 'x'], [S1.space, 560, 1300, 0.2]]
  };
  // ---------------------------------------------------------------- переход: камера ныряет в иллюминатор прошлого кадра
  TRANS_IN.space = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = sm(k), z = 1 + q * 5; drawBuf(A, z, 720 + q * 0, 640, 1); const R = lerp(150, 1700, q); inCircle(540, 960, R, () => drawBuf(B, 1, 540, 960)); scr(() => pencil(ellPts(540, 960, R, R, 0, 0, 60), { w: 26 * (1 - q) + 4, col: '#8a8e98', pass2: false }));
  } };
})();
