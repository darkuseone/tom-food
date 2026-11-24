/* 028 — `archive`: «Красиво! Но записали эту байку только в двадцатом веке.» Цвет возвращается: читальный зал архива — стеллажи до потолка
   с корешками, лестница на колёсиках, шкаф-картотека с латунными ручками, зелёная лампа (главный свет), высокое окно с дождём (второй),
   глобус, стопки папок, библиотекарша в очках поправляет книги, студент дремлет над фолиантом. Том — архивариус в нарукавниках и
   козырьке листает книгу: на развороте — та самая сепия-гравюра с пекарями. По словам: «Красиво!» — Том любуется картинкой; «записали» —
   переворачивает к выходным данным, лупа; «байку» — пыль с книги облачком; «двадцатом веке.» — на странице штамп «XX ВЕК», рядом
   календарь-листок «1683 → XX в.: 250+ лет тишины». Переход В сцену: сепия-кадр байки трескается, как старая бумага, и осыпается кусками. */
(() => {
  EV.ar_nice = wtw('s3', 'Красиво!');
  EV.ar_wrote = wtw('s3', 'записали');
  EV.ar_tale = wtw('s3', 'байку');
  EV.ar_20 = wtw('s3', 'двадцатом');
  SHAKES.push([EV.ar_20 + 0.1, 0.14, 6]);
  KEYW.push('двадцатом');

  function hall(t) {                                                      // стеллажи, лестница, окно с дождём, картотека, глобус
    vgrad(-500, 1500, ['#1a2a24', '#2a3a30', '#3a4a3a']);
    for (let c = 0; c < 4; c++) { push(-360 + c * 460, 0, 1); rect(-210, -500, 420, 1500, { wash: '#4a2e1a', washA: 1, w: 3, col: '#1a0e06' }); for (let r = 0; r < 9; r++) { rect(-200, -480 + r * 160, 400, 12, { wash: '#2a1a0e', washA: 1, line: false }); const rr = rng(28500 + c * 10 + r); let x = -194; while (x < 180) { const w = 14 + rr() * 22, h = 90 + rr() * 50; rect(x, -480 + r * 160 - h, w, h, { wash: ['#8a2a1a', '#2a4a6a', '#4a6a2a', '#a8803a', '#5a3a6a', '#e8dcc0'][Math.floor(rr() * 6)], washA: 1, w: 1, col: '#1a0e06' }); x += w + 2; } } pop(); }
    push(780, 300, 1); const w = rect(-130, -300, 260, 600, { wash: '#7a8a9a', washA: 1, w: 8, col: '#1a0e06', key: 28510 }); const r = rng(hsh(FRAME, 28511)); for (let i = 0; i < 16; i++) { const x = -120 + r() * 240, y = -290 + r() * 580; pencil([[x, y], [x - 3, y + 20]], { w: 1.2, col: '#e8f0f8', a: 0.5, pass2: false }); } pencil([[0, -300], [0, 300]], { w: 5, col: '#1a0e06', pass2: false }); glow(0, 0, 220, 'rgba(200,220,240,1)', 0.2); pop();
    push(260, 600, 1); pencil([[-60, 600], [40, -500]], { w: 10, col: '#6a4a2a', pass2: false }); pencil([[60, 600], [160, -500]], { w: 10, col: '#6a4a2a', pass2: false }); for (let i = 0; i < 9; i++) pencil([[-50 + i * 11, 540 - i * 120], [70 + i * 11, 540 - i * 120]], { w: 6, col: '#6a4a2a', pass2: false }); pop();
  }
  function people(t) {                                                    // библиотекарша на лестнице, студент дремлет, картотека
    human(300, 900, 0.85, t, { body: '#6a4a6a', legs: '#2a2a2a', hair: '#8a8a8a', face: t > EV.ar_20 ? 'shock' : 'calm', armL: 'up', armR: 'hold', look: 0.6, seed: 28520, long: 1, prop: 'scroll' });
    human(1020, 1300, 1.0, t, { body: '#3a4a6a', legs: '#2a2a2a', hair: '#3a2010', face: t > EV.ar_20 ? 'shock' : 'calm', armL: 'hold', armR: 'hold', look: -0.4, seed: 28521, flip: -1 }); if (t < EV.ar_20) txt('zzz', 1060, 900 - Math.sin(t * 2) * 10, 40, { font: 'Hand', col: '#e8e0c0' });
    push(1000, 1300, 1); rect(-150, -40, 300, 40, { wash: '#5a3a1e', washA: 1, w: 2 }); rect(-120, -60, 120, 20, { wash: '#8a2a1a', washA: 1, w: 1.4 }); pop();
    push(80, 1300, 1); rect(-150, -360, 300, 360, { wash: '#6a4426', washA: 1, w: 3, col: '#2a1408', key: 28522 }); for (let r = 0; r < 5; r++) for (let c = 0; c < 3; c++) { rect(-136 + c * 96, -346 + r * 70, 86, 60, { wash: '#7a5434', washA: 1, w: 1.4, col: '#2a1408' }); rect(-110 + c * 96, -324 + r * 70, 34, 10, { wash: '#c8a040', washA: 1, w: 1 }); rect(-104 + c * 96, -340 + r * 70, 22, 12, { wash: '#f4ecd8', washA: 1, w: 0.8 }); } pop();
  }
  function desk(t) {                                                      // стол: раскрытая книга с сепия-гравюрой, штамп XX ВЕК, лампа, глобус, папки
    const tb = rect(-500, 1440, 2200, 600, { wash: '#3a5a3a', washA: 1, w: 3, col: '#1a2a1a', key: 28530 }); shadeG(tb.path, 0, 1440, 0, 1900, '#1a2a1a', 0.5); rect(-500, 1440, 2200, 30, { wash: '#6a4426', washA: 1, line: false });
    push(380, 1450, 1); const bk = poly([[-220, -10], [0, -30], [220, -10], [210, -200], [0, -220], [-210, -200]], { wash: '#f4ecd6', washA: 1, w: 3, col: '#6a5a3a', key: 28531 }); pencil([[0, -30], [0, -220]], { w: 3, col: '#a89a7a', pass2: false });
    rect(-190, -190, 170, 150, { wash: '#c8a070', washA: 1, w: 2, col: '#5a3a1a' }); for (let i = 0; i < 3; i++) kipferl(-150 + i * 50, -70, 0.18, t, { key: 28532 + i }); ottomanFlag(-90, -40, 0.22, t, { key: 28535 }); for (let i = 0; i < 6; i++) pencil([[20, -190 + i * 24], [190, -186 + i * 24]], { w: 1.6, col: '#5a4a3a', a: 0.6, pass2: false });
    if (t > EV.ar_20) { const k = popK(t, EV.ar_20, 0.3); push(110, -110, k * 1.2, -0.15); rect(-90, -40, 180, 80, { wash: '#c8201a', washA: 0.12, w: 6, col: '#c8201a' }); txt('XX ВЕК', 0, 16, 44, { font: 'Osw', col: '#c8201a' }); pop(); } pop();
    if (t > EV.ar_tale && t < EV.ar_tale + 1) { const q = (t - EV.ar_tale); for (let i = 0; i < 6; i++) ell(380 + Math.cos(i) * 80 * q, 1250 - q * 120 + Math.sin(i * 2) * 30, 40 * q + 10, 26 * q + 6, { wash: '#d8d0c0', washA: 0.4 * (1 - q), line: false }); }
    push(820, 1450, 1); pencil([[0, 0], [0, -200]], { w: 6, col: '#c8a040', pass2: false }); blob([[-80, -200], [-60, -260], [60, -260], [80, -200]], { wash: '#2a6a3a', washA: 1, w: 2.4, col: '#0a2a10' }); glow(0, -190, 160, 'rgba(255,230,160,1)', 0.35); pop();
    push(1060, 1450, 1); pencil([[0, 0], [0, -40]], { w: 6, col: '#6a4a2a', pass2: false }); const g = ell(0, -110, 70, 70, { wash: '#3a7ab0', washA: 1, w: 2.4, col: '#1a2a4a' }); blob([[-40, -150], [-10, -170], [20, -120], [-20, -90]], { wash: '#6aa84a', washA: 1, line: false }); blob([[20, -80], [50, -100], [50, -60]], { wash: '#6aa84a', washA: 1, line: false }); pop();
    castShadow(560, 1450, 320, 90, -0.5, 0.25);
  }
  WORLD.archive = (t, u, cat) => {
    lay(9, () => { hall(t); haze('#a8c0a0', 0.05); });
    lay(2.6, () => { people(t); });
    lay(1, () => { lightPool(700, 1460, 600, 120, 'rgba(255,230,160,1)', 0.36); cat(); desk(t); });
    lay(0.65, () => { push(-140, 1950, 1.4); for (let i = 0; i < 5; i++) rect(-80, -60 - i * 40, 200 - (i % 2) * 20, 36, { wash: ['#8a2a1a', '#2a4a6a', '#e8dcc0', '#4a6a2a', '#a8803a'][i], washA: 1, w: 2 }); pop(); push(1230, 1900, 1.4); for (let i = 0; i < 3; i++) rect(-60, -80 - i * 60, 180, 50, { wash: '#c8b890', washA: 1, w: 2 }); pop();
      motes(20, [200, 600, 1100, 1450], '#fff0c0', t, 28590, { sp: 2, sz: 3, a: 0.5, wob: 6 }); moodDark(600, 1000, 520, 1500, '#060c08', 0.5); });
  };
  DIR.archive = {
    outfit: 'archA', light: { side: 1, rim: '#ffe8a0' }, grade: ['#c8d890', 0.04],
    act: () => [[S0.archive, 'awe'], [EV.ar_nice, 'grin'], [EV.ar_wrote, 'suspicious'], [EV.ar_20, 'shock'], [EV.ar_20 + 0.5, 'smug']],
    pose: (t, u, b) => { const chk = t > EV.ar_wrote && t < EV.ar_20 + 0.3; return Object.assign(b, { x: 700, y: 1600, s: 1.15, flip: true, look: [-0.7, 0.7], hand: chk ? [200, -240] : [260, -190], handF: [-90, -220], prop: chk ? 'magP' : undefined, propAng: -0.3, squint: chk }); },
    cam: () => [[S0.archive, 560, 1060, 0.24], [EV.ar_wrote, 560, 1130, 0.3], [S1.archive, 580, 1140, 0.31]]
  };
  // ---------------------------------------------------------------- переход: сепия-кадр байки трескается, как старая бумага, и осыпается
  TRANS_IN.archive = { a: 0.25, b: 0.5, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k); drawBuf(B, 1, 540, 960);
    scr(() => { const r = rng(28599); for (let i = 0; i < 4; i++) for (let j = 0; j < 6; j++) { const x0 = i * 270, y0 = j * 320, d = clamp(e * 1.6 - r() * 0.6); if (d >= 1) continue; const dy = d * d * 1400, rot = (r() - 0.5) * d * 1.5;
      ctx.save(); ctx.translate(x0 + 135, y0 + 160 + dy); ctx.rotate(rot); ctx.beginPath(); ctx.moveTo(-135 + r() * 20, -160); ctx.lineTo(135, -160 + r() * 20); ctx.lineTo(135 - r() * 20, 160); ctx.lineTo(-135, 160 - r() * 20); ctx.closePath(); ctx.clip(); ctx.translate(-x0 - 135, -y0 - 160); drawBuf(A, 1, 540, 960); ctx.restore();
      pencil([[x0, y0 + dy], [x0 + 270, y0 + dy + 10]], { w: 2, col: '#3a2a1a', a: 0.6 * (1 - d), pass2: false }); } });
  } };
})();
