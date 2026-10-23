/* 008 — `hook`: «Ты ешь хлебные уши! Так переводится слово "пельмени". Откусим историю!» Студия телевикторины «ПРАВДА ИЛИ МИФ?»: прожекторы, светодиодные
   панели, лучи по залу, зрители-силуэты с табличками, огромный экран, два подиума с кнопками. Том-ведущий в пиджаке с блёстками держит вилку с пельменем;
   на «хлебные уши!» рядом с пельменем проступает контур уха, зал ахает; на «переводится» на экране: ПЕЛЬМЕНЬ = ХЛЕБНОЕ УХО; на «Откусим» Том кусает пельмень. */
(() => {
  EV.hk_ears = wtw('h1', 'уши!');
  EV.hk_tr = wtw('h1', 'переводится');
  EV.hk_bite = wtw('h2', 'историю!');
  SHAKES.push([EV.hk_ears + 0.1, 0.2, 10], [EV.hk_bite, 0.2, 8]);
  KEYW.push('уши!');

  function studio(t) { vgrad(-600, 1500, ['#0a0420', '#1a0a3a', '#2a1050']); for (let i = 0; i < 6; i++) { const a = -0.7 + i * 0.28 + Math.sin(t * 0.8 + i) * 0.12; ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = ['rgba(255,80,200,0.08)', 'rgba(80,200,255,0.08)', 'rgba(255,220,80,0.08)'][i % 3]; ctx.beginPath(); ctx.moveTo(100 + i * 180, -200); ctx.lineTo(100 + i * 180 + Math.sin(a) * 1600 - 120, 1500); ctx.lineTo(100 + i * 180 + Math.sin(a) * 1600 + 120, 1500); ctx.fill(); ctx.restore(); }
    for (let i = 0; i < 12; i++) { const on = (Math.floor(t * 6) + i) % 3 === 0; ell(-200 + i * 130, 120, 26, 26, { wash: on ? '#fff6c0' : '#6a5a8a', washA: 1, w: 2, col: '#1a0a2a' }); if (on) glow(-200 + i * 130, 120, 70, 'rgba(255,240,180,1)', 0.5); }
    push(540, 720, 0.9); rect(-400, -230, 800, 400, { wash: '#14082a', washA: 1, w: 10, col: '#d6a842' }); const k = clamp((t - EV.hk_tr + 0.1) / 0.4);
      if (k <= 0) { txt('ПРАВДА', -160, -40, 84, { font: 'Osw', col: '#5ae08a' }); txt('ИЛИ', 0, 40, 50, { font: 'Osw', col: '#ffffff' }); txt('МИФ?', 180, 120, 84, { font: 'Osw', col: '#ff5a5a' }); }
      else { txt('ПЕЛЬМЕНЬ =', 0, -60, 70 * k, { font: 'Osw', col: '#fff4c0' }); txt('«ХЛЕБНОЕ УХО»', 0, 70, 86 * k, { font: 'Osw', col: '#f2c838' }); } for (let i = 0; i < 24; i++) { const a = i / 24 * 6.283; ell(Math.cos(a) * 420, Math.sin(a) * 216 - 30, 6, 6, { wash: (Math.floor(t * 8) + i) % 2 ? '#fff0a0' : '#8a6a20', washA: 1, line: false }); } pop();
    for (let r = 0; r < 2; r++) for (let i = 0; i < 9; i++) { const x = -240 + i * 180 + r * 90, y = 1120 + r * 90, gasp = t > EV.hk_ears && t < EV.hk_ears + 1.5; push(x, y + (gasp ? -10 : Math.sin(t * 3 + i) * 3), 1); ell(0, -60, 40, 44, { wash: '#2a1a4a', washA: 1, line: false }); blob([[-60, 40], [-50, -20], [50, -20], [60, 40]], { wash: '#2a1a4a', washA: 1, line: false }); if (gasp) { for (const sd of [-1, 1]) pencil([[sd * 50, -30], [sd * 70, -90]], { w: 14, col: '#2a1a4a', pass2: false }); ell(0, -50, 8, 10, { wash: '#fff0e0', washA: 0.7, line: false }); } pop(); } }
  function podium(t) { for (const [x, c] of [[180, '#5ae08a'], [900, '#ff5a5a']]) { push(x, 1430, 1); poly([[-120, 0], [120, 0], [100, -260], [-100, -260]], { wash: '#2a1a4a', washA: 1, w: 3, col: c }); rect(-110, -280, 220, 30, { wash: c, washA: 1, w: 2 }); ell(0, -290, 40, 14, { wash: c, washA: 1, w: 2, col: '#0a0a0a' }); txt(x < 500 ? 'ПРАВДА' : 'МИФ', 0, -140, 40, { font: 'Osw', col: c }); pop(); } }
  function earGhost(t, P) { if (t < EV.hk_ears - 0.1 || t > EV.h2) return; const k = clamp((t - EV.hk_ears + 0.1) / 0.4); const hx = P.x - 150 * P.s, hy = P.y - 330 * P.s - 180 * P.s * 0.55; push(hx - 70, hy - 40, 1.1 * k);
    pencil(spline([[0, -80], [50, -70], [70, -10], [50, 60], [20, 90], [0, 60], [10, 20], [30, -10], [10, -40], [-10, -20]], false, 8), { w: 7, col: '#f2c838', a: k, pass2: false }); glow(0, 0, 120, 'rgba(255,220,120,1)', 0.4 * k); pop(); bubbleTag('УХО?!', hx - 70, hy - 180, t, EV.hk_ears + 0.1, '#d9282b', 40, 0.06); }
  WORLD.hook = (t, u, cat) => { lay(10, () => studio(t)); lay(1.3, () => podium(t)); lay(1, () => { rect(-300, 1440, 1700, 600, { wash: '#1a0a2a', washA: 1, w: 2, col: '#0a0414', key: 9950 }); for (let i = 0; i < 9; i++) pencil([[-300 + i * 200, 1440], [-200 + i * 220, 2000]], { w: 3, col: '#d6a842', a: 0.4, pass2: false }); cat(); }); };
  DIR.hook = {
    outfit: 'hostA', light: { side: -1, rim: '#ff9ae0' }, grade: ['#8a3ae0', 0.06],
    act: () => [[0, 'talk'], [EV.hk_ears, 'shock'], [EV.hk_tr, 'awe'], [EV.h2, 'smug'], [EV.hk_bite - 0.1, 'grin'], [EV.hk_bite + 0.2, 'laugh']],
    pose: (t, u, b) => { const bite = t > EV.hk_bite - 0.3; return Object.assign(b, { x: 640, y: 1790, s: 1.18, flip: true, look: t < EV.hk_tr ? [-0.6, -0.6] : t < EV.h2 ? [-0.2, -0.9] : [0, 0.3], hand: bite ? [60, -360] : [150, -330], handF: [-90, -230], prop: bite && t > EV.hk_bite ? 'forkBiteP' : 'forkPelmenP', tailUp: t > EV.hk_bite }); },
    afterCat: (t, u, P) => earGhost(t, P),
    cam: () => [[0, 600, 1200, 0.26], [EV.hk_ears, 560, 1200, 0.2, 'x'], [EV.hk_tr, 540, 860, 0.1, 'x'], [EV.h2, 620, 1180, 0.24], [EV.hk_bite, 640, 1150, 0.32], [S1.hook, 640, 1140, 0.36]]
  };
})();
