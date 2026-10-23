/* 007 — `homes`: «А холодильник для кимчи стоит больше чем в восьмидесяти процентах домов.» Вечерний город: многоэтажка в разрезе, как кукольный домик,
   10 квартир (5 этажей × 2): в каждой люди ужинают, смотрят ТВ, у стены — холодильник для кимчи. На «восьмидесяти процентах» квартиры одна за другой
   «загораются» голубым светом холодильника: 8 из 10, счётчик бежит до 80 %+, две оставшиеся — с вопросом. Том в пижаме с миской. Переход В сцену:
   плитки-окна переворачиваются в случайном порядке. */
(() => {
  EV.hm_fr = wtw('s10', 'холодильник');
  EV.hm_80 = wtw('s10', 'восьмидесяти');
  SHAKES.push([EV.hm_80 + 0.9, 0.18, 8]);
  KEYW.push('восьмидесяти');

  const ON = [0, 3, 5, 1, 8, 6, 2, 9];                          // порядок, в котором квартиры «загораются» (8 из 10)
  function city(t) { vgrad(-600, 1500, ['#1a2040', '#3a3a6a', '#8a6a8a']); for (let i = 0; i < 8; i++) { const x = -280 + i * 200, h = 400 + (i * 97 % 300); rect(x, 1100 - h, 170, h, { wash: '#2a2a44', washA: 1, w: 2, col: '#0a0a1a' }); windows(x + 15, 1130 - h, 140, h - 60, 3, 6, 8700 + i, 0.5, '#ffd890', '#3a3a5a', 0.7); } }
  function block(t) { const X0 = 190, Y0 = 260, CW = 340, CH = 230; rect(X0 - 30, Y0 - 50, CW * 2 + 60, CH * 5 + 80, { wash: '#c8c0b0', washA: 1, w: 4, col: '#3a3430', key: 8710 }); poly([[X0 - 60, Y0 - 50], [X0 + CW, Y0 - 170], [X0 + CW * 2 + 60, Y0 - 50]], { wash: '#6a4a3a', washA: 1, w: 3, col: '#2a1a10' });
    for (let i = 0; i < 10; i++) { const c = i % 2, r = Math.floor(i / 2), x = X0 + c * CW, y = Y0 + r * CH, idx = ON.indexOf(i), on = idx >= 0 && t > EV.hm_80 + idx * 0.1;
      rect(x + 6, y + 6, CW - 12, CH - 12, { wash: on ? '#f2ead8' : '#5a5a6a', washA: 1, w: 2, col: '#3a3430' }); rect(x + 6, y + CH - 30, CW - 12, 24, { wash: on ? '#a8885a' : '#3a3a4a', washA: 1, line: false });
      human(x + 90, y + CH - 8, 0.36, t, { body: ['#e86a8a', '#2a6ab8', '#f2a040', '#3aa84a', '#8a3aa8'][i % 5], hair: '#1a1a1a', face: on ? 'grin' : 'calm', armL: 'hold', armR: on ? 'wave' : 'hold', seed: 900 + i, long: i % 2 });
      push(x + CW - 90, y + CH - 30, 0.42); rect(-120, -150, 240, 150, { wash: on ? '#f6f4ee' : '#8a8a98', washA: 1, w: 3, col: '#3a3a4a' }); rect(-124, -170, 248, 24, { wash: on ? '#dfe8f0' : '#7a7a88', washA: 1, w: 2 }); if (on) { glow(0, -100, 180, 'rgba(140,200,255,1)', 0.5); pencil([[-100, -40], [100, -40]], { w: 6, col: '#c8282a', pass2: false }); } pop();
      if (!on && t > EV.hm_80 + 0.9) txt('?', x + CW / 2, y + 120, 70, { font: 'Osw', col: '#c8c8d8', a: 0.8 }); }
    if (t > EV.hm_80) { const k = clamp((t - EV.hm_80) / 0.9), n = Math.round(lerp(0, 80, sm(k))); push(540, 1460, 1); rect(-170, -70, 340, 140, { wash: '#1a1a2a', washA: 1, w: 4, col: '#8ac8ff' }); txt(n + (k >= 1 ? ' %+' : ' %'), 0, 26, 84, { font: 'Osw', col: '#8ac8ff' }); pop(); } }
  WORLD.homes = (t, u, cat) => { lay(14, () => city(t)); lay(1.6, () => block(t)); lay(1, () => { rect(-300, 1500, 1700, 600, { wash: '#4a4a5a', washA: 1, w: 2, col: '#1a1a2a', key: 8720 }); cat(); }); };
  DIR.homes = {
    outfit: 'pajama', light: { side: -1, rim: '#8ac8ff' }, grade: ['#5a6aa8', 0.06],
    act: () => [[S0.homes, 'talk'], [EV.hm_fr, 'smug'], [EV.hm_80, 'awe'], [EV.hm_80 + 0.9, 'proud']],
    pose: (t, u, b) => Object.assign(b, { x: 900, y: 1830, s: 1.1, flip: true, look: [-0.6, -0.7], hand: [150, -300], handF: [-90, -230], prop: 'chopKimchiP', point: 0 }),
    cam: () => [[S0.homes, 540, 900, 0.06], [EV.hm_fr, 540, 900, 0.06], [EV.hm_80, 540, 1000, 0.08, 'x'], [S1.homes, 560, 1050, 0.12]]
  };
  // ---------------------------------------------------------------- переход: плитки-окна переворачиваются в случайном порядке
  TRANS_IN.homes = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const NX = 6, NY = 10, tw = W / NX, th = H / NY; scr(() => { for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) { const d = rng(8750 + i + j * NX)() * 0.6, q = clamp((k - d) / 0.4), sx = Math.abs(Math.cos(q * Math.PI)), src = q < 0.5 ? A : B, x0 = i * tw, y0 = j * th;
      ctx.save(); ctx.beginPath(); ctx.rect(x0, y0, tw + 1, th + 1); ctx.clip(); ctx.translate(x0 + tw / 2, 0); ctx.scale(Math.max(0.02, sx), 1); ctx.translate(-(x0 + tw / 2), 0); ctx.drawImage(src, 0, 0); ctx.restore(); if (q > 0 && q < 1) { ctx.fillStyle = `rgba(255,240,180,${0.4 * (1 - sx)})`; ctx.fillRect(x0, y0, tw, th); } } });
  } };
})();
