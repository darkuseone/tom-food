/* 008 — `origin`: «Придумали на Урале? Это версия. Другая — пришли из Китая, через монголов.» Огромная старинная карта-пергамент во всю стену шатра:
   слева Уральские горы с ёлками и пельменем-флажком, справа Китай с пагодой и цзяоцзы, посередине степь. На «Это версия» — штамп ВЕРСИЯ над Уралом;
   на «из Китая» — второй штамп над Китаем; на «через монголов» по степи скачет всадник с мешком, за ним бежит пунктир-маршрут к Уралу.
   Том-кочевник в халате и меховой шапке с указкой. Переход В сцену: старая карта разворачивается из сложенного квадрата (сгибы раскрываются). */
(() => {
  EV.or_ural = wtw('s2', 'Урале?');
  EV.or_v1 = wtw('s2', 'версия.');
  EV.or_cn = wtw('s2', 'Китая,');
  EV.or_mg = wtw('s2', 'монголов.');
  KEYW.push('версия.');

  function tent(t) { vgrad(-600, 1500, ['#5a3a24', '#7a5034', '#8a6040']); for (let i = 0; i < 9; i++) pencil([[540, -400], [-300 + i * 220, 1400]], { w: 6, col: '#4a2a14', a: 0.5, pass2: false }); for (let i = 0; i < 18; i++) poly([[-300 + i * 100, 1300], [-250 + i * 100, 1260], [-200 + i * 100, 1300], [-250 + i * 100, 1340]], { wash: i % 2 ? '#c8282a' : '#d6a842', washA: 0.8, line: false }); }
  function map(t) { push(540, 820, 1); const m = rect(-470, -380, 940, 760, { wash: '#efe0b8', washA: 1, w: 6, col: '#6a4a1a', key: 9990 }); shadeG(m.path, 0, -380, 0, 380, '#c8a878', 0.3); pencil([[0, -380], [0, 380]], { w: 2, col: '#b8986a', a: 0.6, pass2: false }); pencil([[-470, 0], [470, 0]], { w: 2, col: '#b8986a', a: 0.6, pass2: false });
    blob([[-440, -300], [-200, -330], [100, -300], [440, -250], [450, 300], [100, 340], [-300, 320], [-450, 200]], { wash: '#d8c898', washA: 0.8, w: 2, col: '#8a7a4a' });
    for (let i = 0; i < 6; i++) poly([[-330 + (i % 2) * 30, -220 + i * 70], [-300 + (i % 2) * 30, -290 + i * 70], [-270 + (i % 2) * 30, -220 + i * 70]], { wash: '#8a7a6a', washA: 1, w: 2, col: '#3a2a1a' }); txt('УРАЛ', -300, 260, 40, { font: 'Hand', col: '#5a3a1a' }); for (let i = 0; i < 6; i++) spruce(-400 + (i % 3) * 30, -120 + i * 50, 50, '#3a5a3a', 1);
    push(330, -40, 1); for (let q = 0; q < 3; q++) { rect(-50 + q * 10, -40 - q * 50, 100 - q * 20, 40, { wash: '#c8282a', washA: 1, w: 2, col: '#4a0a0a' }); poly([[-70 + q * 10, -40 - q * 50], [70 - q * 10, -40 - q * 50], [40 - q * 10, -64 - q * 50], [-40 + q * 10, -64 - q * 50]], { wash: '#3a3a44', washA: 1, w: 2 }); } pop(); txt('КИТАЙ', 330, 120, 40, { font: 'Hand', col: '#5a3a1a' }); txt('степь', 40, 40, 32, { font: 'Hand', col: '#8a6a3a' });
    if (t > EV.or_ural - 0.1) { push(-300, -40, popK(t, EV.or_ural - 0.1, 0.4)); pencil([[0, 0], [0, -80]], { w: 4, col: '#3a2a1a' }); pelmen(0, -100, 0.8, 0, { cook: true }); pop(); }
    if (t > EV.or_cn - 0.2) { push(330, 180, popK(t, EV.or_cn - 0.2, 0.4)); pencil([[0, 0], [0, -60]], { w: 4, col: '#3a2a1a' }); jiaozi(0, -80, 0.8, 0); pop(); }
    if (t > EV.or_mg - 0.2) { const k = clamp((t - EV.or_mg + 0.2) / 1.2); const pts = []; for (let i = 0; i <= 30 * k; i++) { const q = i / 30; pts.push([lerp(300, -280, q), lerp(140, 20, q) + Math.sin(q * 6) * 30]); } if (pts.length > 1) dashL(pts, '#c8282a', 1, 5, 2);
      const [hx, hy] = pts[pts.length - 1]; push(hx, hy - 40, 1.1, 0); ell(0, 0, 50, 24, { wash: '#6a4a2a', washA: 1, w: 2 }); for (const sd of [-1, 1]) pencil([[sd * 30, 10], [sd * 36 + Math.sin(t * 12) * 10, 50]], { w: 6, col: '#6a4a2a', pass2: false }); ell(-56, -20, 18, 14, { wash: '#6a4a2a', washA: 1, w: 2 }); human(0, -10, 0.35, t, { body: '#2a6a5a', hair: '#1a1a1a', face: 'grin', armL: 'hold', armR: 'up', seed: 1010, hat: 'fur' }); pop(); }
    pop(); quizStamp('ВЕРСИЯ', 260, 640, t, EV.or_v1, '#d6a842', -0.1, 0.8); quizStamp('ВЕРСИЯ', 850, 640, t, EV.or_cn + 0.2, '#d6a842', 0.1, 0.8); }
  WORLD.origin = (t, u, cat) => { lay(10, () => tent(t)); lay(1.6, () => map(t)); lay(1, () => { rect(-300, 1440, 1700, 600, { wash: '#6a4a2a', washA: 1, w: 2, col: '#2a1408', key: 9995 }); cat(); }); };
  DIR.origin = {
    outfit: 'chapanA', light: { side: -1, rim: '#ffd8a0' }, grade: ['#c88a4a', 0.06],
    act: () => [[S0.origin, 'suspicious'], [EV.or_v1, 'smug'], [EV.or_cn, 'awe'], [EV.or_mg, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 900, y: 1800, s: 1.08, flip: true, look: t < EV.or_cn ? [-0.8, -0.6] : [-0.4, -0.6], hand: [180, -360], handF: [-90, -230], prop: 'stick', propAng: -0.6, point: 1 }),
    cam: () => [[S0.origin, 540, 900, 0.1], [EV.or_ural, 340, 860, 0.18, 'x'], [EV.or_cn, 760, 880, 0.18, 'x'], [EV.or_mg, 560, 900, 0.14], [S1.origin, 560, 900, 0.16]]
  };
  // ---------------------------------------------------------------- переход: сложенная карта разворачивается — сгибы раскрываются по горизонтали и вертикали
  TRANS_IN.origin = { a: 0.15, b: 0.45, runA: 1, fx(k, t, A, B) {
    const q = sm(k); drawBuf(A, 1, 540, 960); const wv = lerp(0.25, 1, sm(clamp(q * 2))), hv = lerp(0.25, 1, sm(clamp(q * 2 - 1))); scr(() => { ctx.save(); ctx.translate(540, 960); ctx.scale(wv, hv); ctx.translate(-540, -960); ctx.drawImage(B, 0, 0); ctx.restore();
      const w2 = W * wv, h2 = H * hv; rect(540 - w2 / 2, 960 - h2 / 2, w2, h2, { line: true, w: 8, col: '#6a4a1a' }); pencil([[540, 960 - h2 / 2], [540, 960 + h2 / 2]], { w: 3, col: '#6a4a1a', a: 0.6 * (1 - q), pass2: false }); pencil([[540 - w2 / 2, 960], [540 + w2 / 2, 960]], { w: 3, col: '#6a4a1a', a: 0.6 * (1 - q), pass2: false }); });
  } };
})();
