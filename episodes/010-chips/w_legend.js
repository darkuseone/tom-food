/* 010 — `legend`: «Легенда: американский повар нарезал картошку тонко-тонко — назло капризному миллионеру.» 1853, ресторан у озера (сепия, старая фотография с
   рамкой-виньеткой): деревянные стены, окно на озеро с лодкой, официант, за столиком богач в цилиндре с бакенбардами. На «повар» Том-повар у стола с картошкой;
   на «тонко-тонко» нож мелькает — ломтики на просвет летят веером; на «капризному» богач отталкивает тарелку с толстыми дольками и стучит тростью; на «миллионеру» —
   табличка ЛЕГЕНДА. Переход В сцену: хруст — чипс ломается, кадр трескается на осколки. */
(() => {
  EV.lg_cook = wtw('s1', 'повар');
  EV.lg_thin = wtw('s1', 'тонко-тонко');
  EV.lg_cap = wtw('s1', 'капризному');
  EV.lg_mil = wtw('s1', 'миллионеру.');
  SHAKES.push([EV.lg_cap + 0.1, 0.2, 8]);
  KEYW.push('тонко-тонко');

  const SEP = c => lerpC(c, '#b89a6a', 0.45);
  function room(t) { vgrad(-600, 1500, [SEP('#8a5a3a'), SEP('#a87a4a'), SEP('#c89a6a')]); for (let i = 0; i < 14; i++) pencil([[-300, -300 + i * 130], [1400, -300 + i * 130]], { w: 4, col: SEP('#5a3a1a'), a: 0.5, pass2: false });
    push(800, 420, 1); rect(-180, -200, 360, 360, { wash: SEP('#a8c8d8'), washA: 1, w: 12, col: SEP('#4a2a10'), key: 11500 }); rect(-180, 40, 360, 120, { wash: SEP('#5a8aa8'), washA: 1, line: false }); for (let i = 0; i < 6; i++) pencil([[-160 + i * 60, 80 + (i % 2) * 20], [-130 + i * 60, 80 + (i % 2) * 20]], { w: 2, col: '#f2ead8', pass2: false });
      push(60 + Math.sin(t * 0.6) * 20, 60, 1); poly([[-50, 0], [50, 0], [36, 18], [-36, 18]], { wash: SEP('#6a3a1a'), washA: 1, w: 2 }); pencil([[0, 0], [0, -70]], { w: 3, col: SEP('#3a2a1a') }); poly([[2, -66], [40, -10], [2, -10]], { wash: '#f6f0e0', washA: 1, w: 1.6 }); pop();
      for (let i = 0; i < 5; i++) shape([[-180 + i * 80, 40], [-140 + i * 80, -40 - (i % 2) * 30], [-100 + i * 80, 40]], { wash: SEP('#5a7a4a'), washA: 1, w: 1.4, col: SEP('#2a3a1a') }); pencil([[0, -200], [0, 160]], { w: 8, col: SEP('#4a2a10') }); pop();
    push(200, 360, 1); rect(-90, -110, 180, 220, { wash: SEP('#3a2a1a'), washA: 1, w: 8, col: SEP('#c8a040') }); ell(0, -10, 50, 64, { wash: SEP('#8a6a4a'), washA: 1, line: false }); pop(); }
  function diners(t) { const angry = t > EV.lg_cap - 0.1; const W1 = 300, Y = 1300;
    human(W1, Y, 1.12, t, { body: SEP('#2a2a2a'), hair: SEP('#5a3a1a'), face: angry ? 'angry' : 'calm', armL: 'hold', armR: angry ? (Math.floor(t * 6) % 2 ? 'up' : 'point') : 'hold', seed: 1150, beard: 'short', hat: 'merchant', hatCol: '#1a1a1a', look: 0.5, prop: 'stick' });
    rect(W1 + 30, Y - 120, 300, 26, { wash: SEP('#f6f0e0'), washA: 1, w: 2, col: SEP('#6a5a4a') }); push(W1 + 170 + (angry ? sm(clamp((t - EV.lg_cap) / 0.3)) * 80 : 0), Y - 130, 1); ell(0, 0, 70, 16, { wash: '#f6f0e0', washA: 1, w: 2, col: SEP('#6a6a6a') }); for (let i = 0; i < 6; i++) rect(-50 + i * 16, -24 - (i % 2) * 6, 14, 30, { wash: SEP('#e8b860'), washA: 1, w: 1.4, col: SEP('#8a5a1a') }); pop();
    if (angry && t < EV.lg_cap + 1.2) bubbleTag('ТОЛСТО!', W1 - 20, Y - 470, t, EV.lg_cap, '#7a1a1a', 36, -0.08);
    human(80, 1280, 1.0, t, { body: SEP('#f2ece0'), hair: SEP('#2a1a0a'), face: angry ? 'shock' : 'smile', armL: 'hold', armR: 'up', seed: 1151, look: 0.6, legs: SEP('#2a2a2a') }); }
  function station(t) { rect(-300, 1480, 1700, 60, { wash: SEP('#8a5a32'), washA: 1, w: 3, col: SEP('#2a1408'), key: 11510 }); rect(-300, 1540, 1700, 600, { wash: SEP('#6a4026'), washA: 1, w: 2, col: SEP('#2a1408') });
    rect(330, 1450, 280, 30, { wash: SEP('#d8b888'), washA: 1, w: 2, col: SEP('#5a3a1a') }); potato(400, 1430, 0.6, 0.2); potato(470, 1440, 0.5, -0.4);
    if (t > EV.lg_thin - 0.1) { const q = t - EV.lg_thin; for (let i = 0; i < 9; i++) { const k = clamp((q - i * 0.08) / 0.9); if (k <= 0) continue; const a = -2.6 + i * 0.2; push(520 + Math.cos(a) * 340 * k, 1420 + Math.sin(a) * 300 * k + k * k * 200, 0.42, k * 6 + i); ctx.globalAlpha = 0.85; chip(0, 0, 1, 0, { seed: i + 2, col: '#f8e8b8' }); ctx.globalAlpha = 1; pop(); } }
    if (t > EV.lg_mil - 0.05) bubbleTag('ЛЕГЕНДА', 470, 860, t, EV.lg_mil, '#6a4a1a', 46, 0.04); }
  function vignette() { scr(() => { ctx.save(); const g = ctx.createRadialGradient(540, 960, 500, 540, 960, 1150); g.addColorStop(0, 'rgba(60,40,20,0)'); g.addColorStop(1, 'rgba(60,40,20,0.55)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); ctx.restore(); }); }
  WORLD.legend = (t, u, cat) => { lay(12, () => room(t)); lay(2.4, () => diners(t)); lay(1, () => { station(t); cat(); }); vignette(); };
  DIR.legend = {
    outfit: 'chef', light: { side: -1, rim: '#f8e0b0' }, grade: ['#b88a50', 0.12],
    act: () => [[S0.legend, 'sideeye'], [EV.lg_cook, 'smug'], [EV.lg_thin, 'grin'], [EV.lg_cap, 'annoyed'], [EV.lg_mil, 'suspicious']],
    pose: (t, u, b) => { const chop = t > EV.lg_thin - 0.2 && t < EV.lg_cap; return Object.assign(b, { x: 720, y: 1820, s: 1.12, flip: true, look: t < EV.lg_cap ? [-0.6, 0.5] : [-0.9, -0.3], hand: chop ? [170, -280 + Math.abs(Math.sin(t * 22)) * 40] : [140, -300], handF: [-90, -240], prop: chop ? 'knifeLongP' : null }); },
    cam: () => [[S0.legend, 560, 1100, 0.14], [EV.lg_thin, 600, 1300, 0.28, 'x'], [EV.lg_cap, 420, 1120, 0.26], [EV.lg_mil, 520, 1080, 0.2], [S1.legend, 520, 1080, 0.22]]
  };
  TRANS_IN.legend = { a: 0.12, b: 0.45, runA: 1, fx(k, t, A, B) {             // хруст: кадр-чипс трескается на осколки, они разлетаются, под ними новая сцена
    drawBuf(B, 1, 540, 960); const q = sm(k); const cx = 540, cy = 960; for (let i = 0; i < 7; i++) { const a0 = i / 7 * 6.283, a1 = (i + 1) / 7 * 6.283, r = rng(11520 + i);
      ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(a0) * 2000, cy + Math.sin(a0) * 2000); ctx.lineTo(cx + Math.cos(a1) * 2000, cy + Math.sin(a1) * 2000); ctx.closePath(); ctx.clip();
      const am = (a0 + a1) / 2; ctx.translate(Math.cos(am) * q * 900, Math.sin(am) * q * 900 + q * q * 400); ctx.translate(cx, cy); ctx.rotate((r() - 0.5) * q * 1.2); ctx.translate(-cx, -cy); ctx.globalAlpha = 1 - q * 0.3; ctx.drawImage(A, 0, 0); ctx.restore(); }
    scr(() => { if (k < 0.3) for (let i = 0; i < 7; i++) { const a = i / 7 * 6.283; pencil([[540, 960], [540 + Math.cos(a) * 1200 * k / 0.3, 960 + Math.sin(a) * 1200 * k / 0.3]], { w: 5, col: '#2a1a0a', pass2: false }); } });
  } };
})();
