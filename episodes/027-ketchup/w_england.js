/* 027 — `england`: «А до того англичане варили кетчуп из грибов, орехов и устриц. Помидоры — не входят!» Английская кухня XVIII века:
   огромный очаг с огнём и вертелом, медные кастрюли на стене, буфет с бело-синими тарелками, связки трав и лука под балками, окно с дождём
   и плющом, кухарка в чепце, поварёнок крутит вертел, дворецкий пробует из ложки. Том — придворный кондитер в голубом камзоле мешает
   чёрный грибной кетчуп в медном котле. Главный свет — огонь очага, второй — холодное окно. По словам: «англичане» — дворецкий
   кланяется; «грибов,» — корзина грибов сыплется в котёл; «орехов» — грецкие орехи трескаются; «устриц.» — устрицы плюхаются; «Помидоры»
   — в дверь вкатывается помидор; «не входят!» — Том выпроваживает его поварёшкой, помидор отскакивает за порог. Переход В сцену: две
   половинки скорлупы грецкого ореха смыкаются над кадром и раскалываются. */
(() => {
  EV.en_eng = wtw('s7', 'англичане');
  EV.en_mush = wtw('s7', 'грибов,');
  EV.en_nut = wtw('s7', 'орехов');
  EV.en_oys = wtw('s7', 'устриц.');
  EV.en_tom = wtw('s7', 'Помидоры');
  EV.en_out = wtw('s7', 'входят!');
  SHAKES.push([EV.en_out, 0.14, 6]);
  KEYW.push('входят!');

  function kitchen(t) {                                                   // стены: камень и балки, очаг, медь, буфет с тарелками, окно с дождём
    vgrad(-500, 1500, ['#3a2a20', '#5a4030', '#6a4a36']); for (let r = 0; r < 14; r++) for (let i = 0; i < 9; i++) { const x = -500 + i * 260 + (r % 2) * 130, y = -500 + r * 140; rect(x, y, 256, 136, { wash: ['#7a6a5a', '#6a5a4a', '#857565'][(i + r) % 3], washA: 1, w: 1.2, col: '#3a2a1a' }); }
    for (let i = 0; i < 3; i++) pencil([[-500, -360 + i * 6], [1700, -360 + i * 6]], { w: 40, col: '#2a1a0e', pass2: false });
    push(240, 1180, 1); const h = rect(-260, -560, 520, 560, { wash: '#2a1a10', washA: 1, w: 4, col: '#1a0e06', key: 27700 }); rect(-300, -620, 600, 70, { wash: '#5a4030', washA: 1, w: 3 }); for (let i = 0; i < 7; i++) { const fh = 120 + Math.sin(t * 9 + i * 2) * 40; blob([[-150 + i * 50, 0], [-140 + i * 50, -fh], [-120 + i * 50, -fh * 0.6], [-100 + i * 50, 0]], { wash: i % 2 ? '#ffb040' : '#ff7a20', washA: 1, line: false }); } glow(0, -80, 260, 'rgba(255,150,60,1)', 0.35);
    pencil([[-240, -260], [240, -260]], { w: 6, col: '#4a4a4a', pass2: false }); push(0, -260, 1, t * 2); ell(0, 0, 60, 36, { wash: '#a85a2a', washA: 1, w: 2 }); pop(); pop();
    for (let i = 0; i < 6; i++) { push(620 + i * 90, -240, 1); pencil([[0, 0], [0, 60]], { w: 2, col: '#3a3a3a', pass2: false }); const p = ell(0, 110, 40 + (i % 3) * 8, 46, { wash: '#c8783a', washA: 1, w: 2, col: '#4a2008', key: 27710 + i }); shadeG(p.path, -40, 0, 40, 0, '#6a3010', 0.4); pencil([[40, 100], [80, 100]], { w: 6, col: '#a85a2a', pass2: false }); pop(); }
    push(900, 620, 1); rect(-220, -300, 440, 600, { wash: '#5a3a24', washA: 1, w: 3, col: '#2a1408' }); for (let r = 0; r < 3; r++) { rect(-210, -270 + r * 170, 420, 12, { wash: '#3a2414', washA: 1, line: false }); for (let i = 0; i < 4; i++) { ell(-150 + i * 100, -320 + r * 170 + 120, 44, 44, { wash: '#f4f4f8', washA: 1, w: 2, col: '#2a3a7a' }); pencil(ellPts(-150 + i * 100, -200 + r * 170, 30, 30, 0, 0, 16), { w: 3, col: '#3a5aa8', pass2: false }); ell(-150 + i * 100, -200 + r * 170, 10, 10, { wash: '#3a5aa8', washA: 1, line: false }); } } pop();
    push(600, 200, 1); rect(-120, -140, 240, 280, { wash: '#8a98a8', washA: 1, w: 6, col: '#3a2414' }); for (let i = 1; i < 3; i++) pencil([[-120 + i * 80, -140], [-120 + i * 80, 140]], { w: 3, col: '#3a2414', pass2: false }); pencil([[-120, 0], [120, 0]], { w: 3, col: '#3a2414', pass2: false }); const r = rng(hsh(FRAME, 27720)); for (let i = 0; i < 14; i++) { const x = -110 + r() * 220, y = -130 + r() * 260; pencil([[x, y], [x - 3, y + 16]], { w: 1.2, col: '#e8f0f8', a: 0.6, pass2: false }); } for (let i = 0; i < 8; i++) ell(-130 + (i % 4) * 20, -150 + i * 30, 16, 10, { wash: '#3a6a2a', washA: 1, line: false }); pop();
    for (let i = 0; i < 5; i++) { push(-100 + i * 130, -330, 1); pencil([[0, 0], [0, 120]], { w: 2, col: '#6a5a3a', pass2: false }); for (let j = 0; j < 6; j++) ell(Math.sin(j) * 14, 130 + j * 14, 14, 10, { wash: i % 2 ? '#c8a060' : '#5a7a3a', washA: 1, w: 1 }); pop(); }
  }
  function staff(t) {                                                     // кухарка в чепце, поварёнок у вертела, дворецкий
    human(80, 1300, 1.0, t, { body: '#6a4a5a', legs: '#2a1a1a', hair: '#8a5a2a', face: t > EV.en_out ? 'grin' : 'smile', armL: 'hold', armR: t > EV.en_mush && t < EV.en_oys ? 'up' : 'hold', look: 0.5, seed: 27730, long: 1, hat: 'scarf', hatCol: '#f8f4ec' });
    human(1000, 1300, 1.05, t, { body: '#1a1a2a', legs: '#1a1a1a', hair: '#e8e8e8', face: t > EV.en_tom && t < EV.en_out ? 'shock' : 'calm', armL: 'hold', armR: t > EV.en_eng && t < EV.en_mush ? 'wave' : 'hold', look: -0.5, seed: 27731, flip: -1 }); rect(985, 1300 - 230, 30, 40, { wash: '#f8f4ec', washA: 1, w: 1 });
    human(340, 1320, 0.75, t, { body: '#8a6a3a', legs: '#3a2a1a', hair: '#c88a3a', face: 'smile', armL: 'swing', armR: 'hold', look: -0.4, seed: 27732 });
  }
  function hearthTable(t) {                                               // стол: медный котёл с чёрным кетчупом (герой), корзина грибов, орехи, устрицы, помидор у двери
    const tb = rect(-500, 1440, 2200, 600, { wash: '#7a5a3a', washA: 1, w: 3, col: '#2a1408', key: 27740 }); shadeG(tb.path, 0, 1440, 0, 1900, '#3a2414', 0.5); for (let i = 0; i < 5; i++) pencil([[-500, 1480 + i * 80], [1700, 1480 + i * 80]], { w: 2, col: '#4a3018', a: 0.5, pass2: false });
    push(400, 1450, 1); const p = blob([[-170, 0], [-180, -150], [180, -150], [170, 0]], { wash: '#c8783a', washA: 1, w: 3, col: '#4a2008', key: 27741 }); shadeG(p.path, -180, 0, 180, 0, '#6a3010', 0.45); ell(0, -150, 178, 28, { wash: '#1a0e0a', washA: 1, w: 2.4 }); ell(-40, -154, 70, 8, { wash: '#6a4a3a', washA: 0.6, line: false });
    for (let i = 0; i < 4; i++) { const ph = (t * 0.6 + i * 0.25) % 1; ell(-60 + i * 40, -180 - ph * 140, 30 + ph * 40, 18 + ph * 20, { wash: '#e8e0d8', washA: 0.25 * (1 - ph), line: false }); } pop();
    const inK = (t0) => t > t0 ? clamp((t - t0) / 0.5) : -1;
    const m = inK(EV.en_mush); if (m >= 0 && m < 1) for (let i = 0; i < 4; i++) shroom(lerp(140, 380 + i * 20, m), lerp(1200, 1300, m) - Math.sin(m * 3.14) * 160, 0.9, ['#8a5a2a', '#c8a060', '#6a4a2a'][i % 3]);
    const n = inK(EV.en_nut); if (n >= 0 && n < 1) for (let i = 0; i < 4; i++) walnut(lerp(700, 420 + i * 20, n), lerp(1250, 1300, n) - Math.sin(n * 3.14) * 140, 1);
    const o = inK(EV.en_oys); if (o >= 0 && o < 1) for (let i = 0; i < 3; i++) oyster(lerp(820, 400 + i * 30, o), lerp(1260, 1300, o) - Math.sin(o * 3.14) * 150, 0.9, 1);
    push(160, 1450, 1); blob([[-90, 0], [-100, -70], [100, -70], [90, 0]], { wash: '#c89a5a', washA: 1, w: 2.4 }); for (let i = 0; i < 6; i++) shroom(-70 + i * 28, -76 - (i % 2) * 10, 0.7, ['#8a5a2a', '#c8a060'][i % 2]); pop();
    for (let i = 0; i < 5; i++) walnut(880 + i * 34, 1440 - (i % 2) * 14, 0.8); for (let i = 0; i < 3; i++) oyster(1080 + i * 50, 1440, 0.7, i === 1);
    if (t > EV.en_tom - 0.2) { const q = clamp((t - EV.en_tom + 0.2) / 0.7), out = t > EV.en_out ? clamp((t - EV.en_out) / 0.6) : 0; const x = lerp(1300, 900, q) + out * 600, y = 1430 - Math.abs(Math.sin(q * 9)) * 30 * (1 - q) - Math.sin(out * 3.14) * 260; tomato(x, y, 0.8, { rot: (q - out) * 6, key: 27750 });
      if (out > 0) { push(900, 1200, popK(t, EV.en_out, 0.3)); txt('ВОН!', 0, 0, 70, { font: 'Osw', col: '#c8201a', rot: 0.1 }); pop(); } }
    castShadow(640, 1450, 320, 90, 0.5, 0.25);
  }
  WORLD.england = (t, u, cat) => {
    lay(9, () => { kitchen(t); haze('#ffc890', 0.05); });
    lay(2.6, () => { staff(t); lightPool(240, 1300, 520, 110, 'rgba(255,170,90,1)', 0.35); });
    lay(1, () => { lightPool(560, 1460, 660, 120, 'rgba(255,190,120,1)', 0.34); cat(); hearthTable(t); });
    lay(0.65, () => { push(1230, 200, 1.4); for (let i = 0; i < 4; i++) { pencil([[i * 40, -300], [i * 40, 120 + i * 30]], { w: 2, col: '#6a5a3a', pass2: false }); for (let j = 0; j < 5; j++) ell(i * 40 + Math.sin(j) * 10, 130 + i * 30 + j * 16, 14, 10, { wash: '#c8a060', washA: 1, w: 1 }); } pop();
      push(-160, 1950, 1.4); const c = ell(0, -60, 160, 60, { wash: '#a85a2a', washA: 1, w: 3 }); pop(); motes(16, [0, 300, 900, 1500], '#ffb060', t, 27790, { sp: -14, sz: 3, a: 0.6, wob: 6 }); moodDark(560, 1000, 520, 1500, '#0a0604', 0.5); });
  };
  DIR.england = {
    outfit: 'courtA', light: { side: -1, rim: '#ffb070' }, grade: ['#ff9050', 0.07],
    act: () => [[S0.england, 'talk'], [EV.en_mush, 'grin'], [EV.en_oys, 'proud'], [EV.en_tom, 'suspicious'], [EV.en_out, 'annoyed'], [EV.en_out + 0.4, 'smug']],
    pose: (t, u, b) => { const shoo = t > EV.en_tom && t < EV.en_out + 0.6;
      return Object.assign(b, { x: 680, y: 1600, s: 1.15, flip: !shoo, look: shoo ? [0.8, 0.5] : [-0.7, 0.5], hand: shoo ? [240, -200 + Math.sin(t * 16) * 20] : [220, -230 + Math.sin(t * 5) * 20], handF: [-90, -230], prop: 'ladleP', propAng: shoo ? 0.8 : -0.4, tailUp: t > EV.en_out }); },
    cam: () => [[S0.england, 540, 1040, 0.22], [EV.en_mush, 540, 1110, 0.28], [EV.en_tom, 640, 1110, 0.28], [S1.england, 660, 1120, 0.29]]
  };
  // ---------------------------------------------------------------- переход: скорлупки грецкого ореха смыкаются над кадром и раскалываются
  TRANS_IN.england = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const c = k < 0.45 ? sm(k / 0.45) : 1 - sm((k - 0.45) / 0.55); drawBuf(k < 0.45 ? A : B, 1, 540, 960);
    scr(() => { for (const sd of [-1, 1]) { const x = 540 + sd * lerp(1300, 520, c); push(x, 960, 1); const sh = ell(0, 0, 560, 1100, { wash: '#a8784a', washA: 1, w: 8, col: '#4a2a10', key: 27798 + sd }); hatch(sh.path, sh.bb, { gap: 18, a: 0.25, col: '#6a4a24', ang: 1.2, key: 27796 + sd }); for (let i = 0; i < 8; i++) pencil(spline([[-sd * 400, -800 + i * 200], [-sd * 200, -760 + i * 200], [-sd * 60, -820 + i * 200]], false, 4), { w: 5, col: '#6a4a24', pass2: false }); pop(); } });
  } };
})();
