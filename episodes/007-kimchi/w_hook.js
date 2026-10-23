/* 007 — `hook`: «Кимчи отправили в космос — и вычистили из него все бактерии! Откусим историю!» Модуль орбитальной станции: панели с кнопками, поручни, кабели,
   липучки, ноутбук, иллюминатор с Землёй и восходом. Два члена экипажа парят в глубине. Том-космонавт (шлем откинут) парит с пакетом кимчи; на «космос» камера
   облетает иллюминатор; на «вычистили» пакет раскрывается, из него вылетают бактерии-мультяшки и тают в голубом луче стерилизации; на «Откусим» — Том кусает кимчи
   палочками, красные капли-шарики плывут в невесомости. */
(() => {
  EV.hk_space = wtw('h1', 'космос');
  EV.hk_bac = wtw('h1', 'вычистили');
  EV.hk_all = wtw('h1', 'бактерии!');
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_bac + 0.1, 0.2, 8], [EV.hk_bite, 0.2, 8]);
  KEYW.push('бактерии!');

  function module_(t) { vgrad(-600, 1600, ['#c8ccd4', '#dce0e6', '#b8bcc4']); for (let i = 0; i < 7; i++) { const x = -260 + i * 230; rect(x, -100, 210, 2400, { wash: i % 2 ? '#e4e6ea' : '#d4d8de', washA: 1, w: 2, col: '#6a6e78' }); for (let q = 0; q < 10; q++) { const r = rng(7700 + i * 10 + q); rect(x + 20, 40 + q * 220, 80 + r() * 80, 120, { wash: '#f2f2f4', washA: 1, w: 1.6, col: '#8a8e98' }); for (let k = 0; k < 4; k++) ell(x + 40 + k * 30, 80 + q * 220, 7, 7, { wash: ['#e8402a', '#3aa84a', '#f2c838', '#2a6ab8'][(k + q + i) % 4], washA: 0.6 + 0.4 * Math.sin(t * 4 + k + q), line: false }); } }
    for (const y of [300, 1220]) { pencil([[-300, y], [1400, y]], { w: 14, col: '#d8b030' }); pencil([[-300, y - 4], [1400, y - 4]], { w: 3, col: '#fff0a0', a: 0.7, pass2: false }); }
    for (let i = 0; i < 4; i++) { const pts = []; for (let q = 0; q <= 10; q++) pts.push([-200 + i * 380 + q * 40, 420 + Math.sin(q * 0.9 + i + t) * 30 + q * 6]); pencil(pts, { w: 5, col: ['#2a2a2a', '#c8282a', '#2a6ab8', '#3a3a3a'][i], pass2: false }); }
    // иллюминатор
    push(780, 640, 1); const w = ell(0, 0, 190, 190, { wash: '#05061a', washA: 1, w: 16, col: '#8a8e98' }); ctx.save(); ctx.clip(w.path); for (let i = 0; i < 30; i++) { const r = rng(7720 + i); ell(-190 + r() * 380, -190 + r() * 380, 1.6, 1.6, { wash: '#ffffff', washA: 0.8, line: false }); }
    const e = ell(60, 420, 420, 420, { wash: '#2a6ab8', washA: 1, line: false }); for (let i = 0; i < 7; i++) { const r = rng(7730 + i), cx = -180 + i * 70 + Math.sin(t * 0.1 + i) * 10; blob([[cx - 40, 40 + r() * 60], [cx, 20 + r() * 50], [cx + 50, 40 + r() * 60], [cx + 10, 70 + r() * 50]], { wash: '#ffffff', washA: 0.85, line: false }); } glow(60, 0, 200, 'rgba(120,190,255,1)', 0.6); for (let i = 0; i < 6; i++) { const r = rng(7740 + i), a = r() * 6.283 + t * 0.05; blob([[60 + Math.cos(a) * 300, 420 + Math.sin(a) * 300], [120 + Math.cos(a) * 300, 440 + Math.sin(a) * 300], [90 + Math.cos(a) * 300, 480 + Math.sin(a) * 300]], { wash: '#3a8a4a', washA: 0.9, line: false }); } glow(40, -80, 220, 'rgba(150,200,255,1)', 0.5); ctx.restore(); for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; ell(Math.cos(a) * 190, Math.sin(a) * 190, 8, 8, { wash: '#5a5e68', washA: 1, w: 1.4 }); } pop();
    // экипаж в глубине
    for (let i = 0; i < 2; i++) { push(150 + i * 300, 900 + Math.sin(t * 0.8 + i * 2) * 30, 1, Math.sin(t * 0.5 + i) * 0.3 + (i ? 0.5 : -0.4)); human(0, 200, 0.7, t, { body: i ? '#2a4a8a' : '#e8e6e0', hair: i ? '#1a1a1a' : '#8a5a2a', face: t > EV.hk_all ? 'grin' : 'smile', armL: 'up', armR: i ? 'wave' : 'hold', seed: 770 + i, long: 0 }); pop(); } }
  function pack(t) { const open = t > EV.hk_bac - 0.1; const px = 560 + Math.sin(t * 0.9) * 30, py = 1120 + Math.cos(t * 0.7) * 24; if (t < EV.hk_bite - 0.6) spacePack(px, py, 0.9, Math.sin(t) * 0.3);
    if (open) { const k = t - EV.hk_bac; ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = `rgba(120,200,255,${0.25 * Math.max(0, 1 - Math.abs(k - 0.6) * 1.2)})`; ctx.beginPath(); ctx.moveTo(px - 80, py - 400); ctx.lineTo(px + 80, py - 400); ctx.lineTo(px + 200, py + 200); ctx.lineTo(px - 200, py + 200); ctx.fill(); ctx.restore();
      for (let i = 0; i < 7; i++) { const r = rng(7760 + i), a = r() * 6.283, d = 60 + k * (180 + r() * 160), fade = clamp(1 - (t - EV.hk_all) / 0.6); if (fade <= 0) { if (t - EV.hk_all < 0.9) for (let q = 0; q < 5; q++) ell(px + Math.cos(a) * d + q * 8, py + Math.sin(a) * d - q * 6, 6 * (1 - (t - EV.hk_all - 0.6) * 3), 6 * (1 - (t - EV.hk_all - 0.6) * 3), { wash: '#e8ffff', washA: 0.6, line: false }); continue; }
        ctx.save(); ctx.globalAlpha = fade; bacterium(px + Math.cos(a) * d, py + Math.sin(a) * d * 0.7 - 80, 0.7 + r() * 0.3, t + i, { scared: true }); ctx.restore(); } }
    if (t > EV.hk_bite - 0.1 && t < EV.hk_bite + 1.4) { const k = t - EV.hk_bite + 0.1; for (let i = 0; i < 10; i++) { const r = rng(7780 + i), a = r() * 6.283; ell(620 + Math.cos(a) * k * (120 + r() * 140), 1020 + Math.sin(a) * k * (100 + r() * 120), 9 + r() * 6, 9 + r() * 6, { wash: KM.red, washA: clamp(1.4 - k), w: 1.2, col: KM.redD }); } } }
  WORLD.hook = (t, u, cat) => { lay(9, () => module_(t)); lay(1, () => { cat(); pack(t); }); };
  DIR.hook = {
    outfit: 'astroA', light: { side: 1, rim: '#bfe0ff' }, grade: ['#8ab8e8', 0.06],
    act: () => [[0, 'awe'], [EV.hk_space, 'proud'], [EV.hk_bac, 'shock'], [EV.hk_all, 'grin'], [EV.h2, 'smug'], [EV.hk_bite - 0.1, 'grin'], [EV.hk_bite + 0.2, 'laugh']],
    pose: (t, u, b) => { const bite = t > EV.hk_bite - 0.3; return Object.assign(b, { x: 760 + Math.sin(t * 0.8) * 30, y: 1760 + Math.sin(t * 1.1) * 30, s: 1.12, flip: true, rot: Math.sin(t * 0.6) * 0.12, noHat: true, look: t < EV.hk_bac ? [0.6, -0.6] : t < EV.h2 ? [-0.8, -0.2] : [0, 0.3],
      hand: bite ? [60, -360] : t > EV.h2 ? [160, -300] : [160, -340], handF: [-120, -240], prop: t > EV.h2 ? (bite && t > EV.hk_bite ? 'chopBiteP' : 'chopKimchiP') : null, tailUp: true }); },
    cam: () => [[0, 760, 700, 0.3], [EV.hk_space, 700, 820, 0.18, 'x'], [EV.hk_bac, 560, 1050, 0.16, 'x'], [EV.h2, 640, 1150, 0.24], [EV.hk_bite, 680, 1120, 0.3], [S1.hook, 680, 1110, 0.34]]
  };
})();
