/* 025 — `names`: «Но литовские языковеды морщатся: правильно — „большие клёцки“. Без всякой авиации! / А поляки зовут их ещё воинственнее —
   „kartacz“, картечь. Не обед, а арсенал!» Кабинет языковедов: шкафы со словарями до потолка, картотека, лампа с зелёным абажуром (главный свет),
   окно на старый Вильнюс (черепичные крыши, колокольня). Трое языковедов в очках морщатся над табличкой «CEPELINAI». Том-лингвист в твидовом
   пиджаке с указкой. По словам: «морщатся» — лица кислые, табличка CEPELINAI перечёркивается красным; «большие клёцки» — выезжает табличка
   DIDŽKUKULIAI = «большие клёцки»; «авиации» — бумажный самолётик падает в корзину; «поляки» — справа въезжает польский угол: пушка XIX века;
   «картечь» — пушка бахает клёцками, табличка KARTACZ; «арсенал!» — клёцки-ядра скатываются в пирамиду. Пауза-гэг: последняя клёцка-ядро
   прилетает и плюхается Тому в руки — он ловит. Переход В сцену: толстый словарь захлопывается на весь кадр. */
(() => {
  EV.nm_frown = wtw('s2', 'морщатся:');
  EV.nm_big = wtw('s2', '«большие');
  EV.nm_air = wtw('s2', 'авиации!');
  EV.nm_pl = wtw('s3', 'поляки');
  EV.nm_bang = wtw('s3', '«kartacz»,');
  EV.nm_ars = wtw('s3', 'арсенал!');
  EV.nm_gag = LE('s3') + 0.05;
  SHAKES.push([EV.nm_bang, 0.2, 10]);
  KEYW.push('клёцки».', 'арсенал!');

  function office(t) {                                                  // стены: шкафы со словарями, окно на Вильнюс, картотека, портрет, часы
    vgrad(-800, 1500, ['#2a2018', '#3a2c20', '#4a3828']);
    for (const sx of [-560, 1180]) for (let j = 0; j < 6; j++) { const y = -600 + j * 220; rect(sx - 230, y + 190, 460, 18, { wash: '#5a3a1e', washA: 1, w: 1.6 }); for (let i = 0; i < 12; i++) { const bx = sx - 220 + i * 37, h = 140 + ((i * 5 + j) % 4) * 12; rect(bx, y + 190 - h, 33, h, { wash: ['#7a2a1a', '#2a4a3a', '#8a6a2a', '#3a3a5a', '#6a4a2a'][(i + j) % 5], washA: 1, w: 1, col: '#1a0a04' }); rect(bx + 6, y + 210 - h, 21, 8, { wash: '#d6a842', washA: 1, line: false }); } }
    push(320, -100, 1); const w = rect(-200, -320, 400, 560, { wash: '#a8c8e0', washA: 1, w: 10, col: '#3a2412', key: 25300 }); ctx.save(); ctx.clip(w.path); vgrad(-320, 240, ['#8ab0d8', '#e8d8c0']); for (let i = 0; i < 7; i++) { const x = -200 + i * 70; poly([[x, 240], [x, 100 - (i % 3) * 30], [x + 35, 60 - (i % 3) * 30], [x + 70, 100 - (i % 3) * 30], [x + 70, 240]], { wash: ['#c86a3a', '#d8b890', '#b8542a'][i % 3], washA: 1, w: 1.2, col: '#5a3a1a' }); } rect(-30, -200, 60, 300, { wash: '#f4ecd8', washA: 1, w: 1.6 }); poly([[-40, -200], [0, -290], [40, -200]], { wash: '#5a8a6a', washA: 1, w: 1.6 }); ctx.restore(); pencil([[0, -320], [0, 240]], { w: 8, col: '#3a2412' }); pencil([[-200, -40], [200, -40]], { w: 8, col: '#3a2412' }); pop();
    push(760, -260, 1); rect(-90, -110, 180, 220, { wash: '#c89a3a', washA: 1, w: 3, col: '#4a2a08' }); rect(-74, -94, 148, 188, { wash: '#4a3a2a', washA: 1, w: 1 }); human(0, 94, 0.42, t, { body: '#2a2a3a', hair: '#c8c8c8', face: 'calm', beard: 'long', seed: 25301 }); pop();
    push(-60, -380, 1); ell(0, 0, 56, 56, { wash: '#f4ecd6', washA: 1, w: 3, col: '#5a3a1a' }); pencil([[0, 0], [Math.cos(t * 0.5) * 34, Math.sin(t * 0.5) * 34]], { w: 3, col: '#1a1a1a', pass2: false }); pencil([[0, 0], [Math.cos(t * 6) * 46, Math.sin(t * 6) * 46]], { w: 1.4, col: '#c8221a', pass2: false }); pop();
  }
  function scholars(t) {                                                // три языковеда в очках, табличка CEPELINAI
    const fr = t > EV.nm_frown && t < EV.nm_pl;
    for (const [i, x] of [[0, 40], [1, 190], [2, 340]].map(v => v)) { human(x, 1260, 1.0, t, { body: ['#3a3a4a', '#5a4a3a', '#4a5a4a'][i], legs: '#1a1a1a', hair: ['#c8c8c8', '#3a2a1a', '#8a6a4a'][i], face: fr ? 'angry' : t > EV.nm_big ? 'smile' : 'calm', armL: 'hold', armR: fr && i === 1 ? 'point' : 'hold', look: 0.3, seed: 25310 + i, beard: i === 0 ? 'short' : null, long: i === 2 ? 1 : 0 });
      push(x, 1260 - 290, 1); for (const sd of [-1, 1]) ell(sd * 12, 0, 10, 8, { wash: '#d8ecf4', washA: 0.3, w: 2, col: '#2a2a2a' }); pop(); }
    push(190, 1000, 0.9); const b = rect(-190, -50, 380, 100, { wash: '#f4ecd6', washA: 1, w: 3, col: '#3a2a1a' }); txt('CEPELINAI', 0, 18, 56, { font: 'Osw', col: '#3a2a1a' }); if (t > EV.nm_frown) { const k = clamp((t - EV.nm_frown) / 0.3); pencil([[-180, -40], [-180 + 360 * k, 40]], { w: 8, col: '#c8221a', pass2: false }); } pop();
    if (t > EV.nm_air && t < EV.nm_pl + 0.3) { const k = clamp((t - EV.nm_air) / 0.9); push(lerp(-300, 200, k), lerp(600, 1180, k * k), 1, 0.4 + k); poly([[-40, 0], [40, -6], [-40, 14], [-20, 4]], { wash: '#f8f4ea', washA: 1, w: 1.6 }); pop(); }
  }
  function poland(t) {                                                  // польский угол: пушка, ядра-клёцки, флажок, табличка KARTACZ
    if (t < EV.nm_pl - 0.3) return; const k = sm(clamp((t - EV.nm_pl + 0.3) / 0.6)), x = lerp(1500, 960, k);
    push(x, 1260, 1); rect(-150, -620, 300, 620, { wash: '#e8e0d0', washA: 0.95, w: 2.4, col: '#5a4a3a' }); rect(-150, -620, 300, 70, { wash: '#f4f4f4', washA: 1, line: false }); rect(-150, -550, 300, 70, { wash: '#c8221a', washA: 1, line: false }); txt('POLSKA', 0, -500, 30, { font: 'Osw', col: '#f8f4ea' });
    const kick = t > EV.nm_bang && t < EV.nm_bang + 0.3 ? (1 - (t - EV.nm_bang) / 0.3) * 30 : 0; push(-40 + kick, -60, 1, -0.35); rect(-20, -40, 240, 70, { wash: '#2a2a2a', washA: 1, w: 3, col: '#000' }); ell(220, -5, 20, 36, { wash: '#1a1a1a', washA: 1, w: 2 }); pop();
    for (const sd of [-1, 1]) { ell(-40 + sd * 50, -10, 44, 44, { wash: '#6a4a2a', washA: 1, w: 3, col: '#2a1408' }); for (let i = 0; i < 6; i++) pencil([[-40 + sd * 50, -10], [-40 + sd * 50 + Math.cos(i) * 40, -10 + Math.sin(i) * 40]], { w: 2, col: '#2a1408', pass2: false }); }
    if (t > EV.nm_bang) { const q = popK(t, EV.nm_bang, 0.35); push(0, -330, q, 0.06); rect(-130, -40, 260, 80, { wash: '#f4ecd6', washA: 1, w: 3, col: '#c8221a' }); txt('KARTACZ', 0, 18, 50, { font: 'Osw', col: '#c8221a' }); txt('= картечь', 0, 66, 28, { font: 'Hand', col: '#3a2a1a' }); pop(); }
    pop();
    if (t > EV.nm_bang) for (let i = 0; i < 6; i++) { const q = clamp((t - EV.nm_bang - i * 0.07) / 0.8); if (q <= 0) continue; const tx = t > EV.nm_ars ? lerp(x - 160 + (i % 3) * 70, x - 200 + (i % 3) * 80, 1) : lerp(x - 80, x - 900 + i * 60, q), ty = t > EV.nm_ars ? 1240 - Math.floor(i / 3) * 50 : 1150 - Math.sin(q * 3.14) * 300; cepelinas(tx, ty, 0.2, t, { key: 25330 + i, rot: q * 4 }); }
    if (t > EV.nm_bang && t < EV.nm_bang + 0.5) glow(x - 260, 1100, 160, 'rgba(255,200,120,1)', 0.6 * (1 - (t - EV.nm_bang) / 0.5));
  }
  function desk(t) {                                                    // стол перед Томом (после cat): словари, карточки, лампа, перо
    const d = rect(-500, 1440, 2100, 700, { wash: '#4a2e18', washA: 1, w: 3, col: '#1a0a04', key: 25340 }); shadeG(d.path, 0, 1440, 0, 1700, '#1a0a04', 0.4); rect(-300, 1440, 1100, 40, { wash: '#2a5a3a', washA: 1, w: 2 });
    for (let i = 0; i < 3; i++) { push(120 + i * 40, 1440 - i * 30, 1); rect(-90, -30, 180, 30, { wash: ['#7a2a1a', '#2a4a3a', '#3a3a5a'][i], washA: 1, w: 1.6, col: '#1a0a04' }); pop(); } txt('ŽODYNAS', 160, 1398, 18, { font: 'Osw', col: '#d6a842' });
    push(1000, 1440, 1); pencil([[0, 0], [0, -180]], { w: 8, col: '#c8a050' }); const sh = blob([[-110, -180], [-90, -230], [90, -230], [110, -180]], { wash: '#1a6a3a', washA: 1, w: 2.4, col: '#0a2a14' }); glow(0, -170, 140, 'rgba(255,240,180,1)', 0.45); pop(); lightPool(860, 1500, 400, 110, 'rgba(255,240,180,1)', 0.35);
    castShadow(560, 1600, 260, 200, -0.5, 0.3);
  }
  function front(t) { push(-200, 1980, 1.6); for (let i = 0; i < 4; i++) rect(-140, -50 - i * 34, 280, 32, { wash: ['#7a2a1a', '#2a4a3a', '#8a6a2a', '#3a3a5a'][i], washA: 1, w: 1.6, col: '#1a0a04' }); pop(); push(1260, 1900, 1.6); ell(0, -100, 90, 100, { wash: '#2a6a9a', washA: 1, w: 2.4, col: '#0a2a4a' }); pencil([[-90, -100], [90, -100]], { w: 3, col: '#c8a050', pass2: false }); pop(); }
  WORLD.names = (t, u, cat) => {
    lay(12, () => { office(t); haze('#6a5a4a', 0.05); });
    lay(2.6, () => { scholars(t); });
    lay(1.6, () => { poland(t); });
    lay(1, () => { cat(); desk(t); });
    lay(0.6, () => { front(t); motes(12, [-200, 300, 1300, 1400], '#ffe8b0', t, 25350, { sp: 3, sz: 3, a: 0.35, wob: 3 }); moodDark(700, 1100, 500, 1500, '#0a0810', 0.5); });
  };
  DIR.names = {
    outfit: 'econA', light: { side: 1, rim: '#ffe0a0' }, grade: ['#c8a070', 0.06],
    act: () => [[S0.names, 'talk'], [EV.nm_frown, 'sideeye'], [EV.nm_big, 'smug'], [EV.nm_air, 'laugh'], [EV.nm_pl, 'suspicious'], [EV.nm_bang, 'shock'], [EV.nm_ars, 'grin'], [EV.nm_gag + 0.2, 'proud']],
    pose: (t, u, b) => { const gag = t > EV.nm_gag; return Object.assign(b, { x: 580, y: 1600, s: 1.15, flip: 0, look: t < EV.nm_pl ? [-0.6, -0.2] : [0.8, -0.2], hand: gag ? [-40, -330] : [-180, -300], handF: gag ? [60, -330] : [120, -230], prop: gag ? 'cepP' : undefined, point: t > EV.nm_frown && t < EV.nm_big ? 1 : undefined, squash: b.squash + (gag && t < EV.nm_gag + 0.15 ? 0.1 : 0) }); },
    cam: () => [[S0.names, 380, 1050, 0.24], [EV.nm_big, 480, 1150, 0.28], [EV.nm_pl, 640, 1100, 0.24], [EV.nm_bang, 700, 1080, 0.26], [EV.nm_gag, 560, 1180, 0.3], [S1.names, 560, 1180, 0.3]],
    hud: t => { infoPlate(t, EV.nm_big, EV.nm_pl - 0.1, { kind: 'swap', tb: EV.nm_big + 0.4, title: 'ПО-ЛИТОВСКИ', a: 'ЦЕППЕЛИНЫ', b: 'БОЛЬШИЕ КЛЁЦКИ', ia: (s, t) => INGR_C.cep(s, t), ib: (s, t) => INGR_C.cep(s, t) }); infoPlate(t, EV.nm_bang + 0.2, S1.names, { kind: 'list', title: 'ОДНА КЛЁЦКА — ТРИ ИМЕНИ', rows: [['Литва', 'цеппелины / «большие клёцки»', '#2a6a3a'], ['Польша', 'kartacz — картечь', '#c8221a'], ['Германия', 'Klöße — клёцки', '#3a3a3a']] }); }
  };
  // ---------------------------------------------------------------- переход: толстый словарь захлопывается на весь кадр
  TRANS_IN.names = { a: 0.3, b: 0.4, runA: 0.4, fx(k, t, A, B) {
    const e = sm(k); if (e < 0.5) { const q = e / 0.5; drawBuf(A, 1, 540, 960); scr(() => { const xL = lerp(-1080, 0, q), xR = lerp(1080 * 2, 1080, q); for (const [x0, flip] of [[xL, 1], [xR - 1080, -1]]) { const p = rect(x0, 0, 1080, 1920, { wash: '#f4ecd6', washA: 1, w: 4, col: '#5a4a2a' }); for (let i = 0; i < 40; i++) pencil([[x0 + 80, 100 + i * 44], [x0 + 1000, 100 + i * 44]], { w: 2, col: '#8a7a5a', a: 0.5, pass2: false }); } }); }
    else { const q = (e - 0.5) / 0.5; drawBuf(B, 1, 540, 960); scr(() => { const y = lerp(0, 2000, sm(q)); rect(0, y - 1920, 1080, 1920, { wash: '#7a2a1a', washA: 1, w: 4, col: '#2a0a04' }); txt('ŽODYNAS', 540, y - 900, 120, { font: 'Osw', col: '#d6a842' }); }); }
  } };
})();
