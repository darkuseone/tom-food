/* 013 — `gdr`: «А потом солянка уехала в ГДР — там её варили почти в каждом ресторане.» Гаштетте 1970-х в Восточном Берлине: стены с оранжево-коричневыми
   обоями-«кругами», деревянные панели, шаровые светильники, меню-доска SPEISEKARTE со строкой «Soljanka», официантка в фартуке, посетители, в окне —
   телебашня и проезжающий «трабант». Том в синей «олимпийке» за столиком с миской. По словам: «уехала» — чемоданчик с наклейкой «Soljanka» скользит по столу;
   «ГДР» — вывеска GASTSTÄTTE загорается, в окне едет «трабант»; «почти в каждом» — на всех столах по очереди появляются миски; «ресторане» — официантка
   несёт три миски. Переход В сцену: «трабант» проезжает через кадр и утягивает за собой прошлую сцену. */
(() => {
  EV.gd_go = wtw('s6', 'уехала');
  EV.gd_gdr = wtw('s6', 'ГДР');
  EV.gd_each = wtw('s6', 'почти');
  EV.gd_rest = wtw('s6', 'ресторане.');
  SHAKES.push([EV.gd_gdr + 0.1, 0.12, 5]);
  KEYW.push('ГДР', 'ресторане.');

  function trabant(x, y, s, col = '#9ab8c8') {                           // «трабант»: угловатый кузов, белая крыша, круглые фары
    push(x, y, s); const b = shape([[-150, 0], [-150, -50], [-110, -70], [-60, -120], [70, -120], [110, -70], [150, -60], [150, 0]], { wash: col, washA: 1, w: 2.4, col: '#2a3a4a' }); shadeG(b.path, 0, 0, 0, -120, '#5a7a8a', 0.3);
    rect(-50, -114, 116, 6, { wash: '#f4f0e6', washA: 1, line: false }); for (const x0 of [-50, 20]) rect(x0, -106, 56, 40, { wash: '#cfe0ec', washA: 1, w: 1.6, col: '#2a3a4a' }); for (const x0 of [-95, 95]) { ell(x0, 0, 30, 30, { wash: '#1a1a1a', washA: 1, w: 2 }); ell(x0, 0, 12, 12, { wash: '#a8a8a8', washA: 1, line: false }); } ell(146, -40, 10, 12, { wash: '#fff4c8', washA: 1, w: 1.4 }); pop();
  }
  function room(t) {                                                    // обои 70-х, панели, окно с телебашней и «трабантом», меню-доска, вывеска
    vgrad(-600, 1500, ['#5a3418', '#8a5a2a', '#a8743a']);
    for (let y = -500; y < 700; y += 110) for (let x = -400; x < 1600; x += 110) { const xx = x + ((y / 110) % 2) * 55; ell(xx, y, 46, 46, { wash: '#c86a2a', washA: 0.85, w: 1, col: '#5a2a0a', a: 0.4 }); ell(xx, y, 28, 28, { wash: '#e8a040', washA: 0.85, line: false }); ell(xx, y, 12, 12, { wash: '#6a3a14', washA: 0.85, line: false }); }
    for (let i = 0; i < 24; i++) rect(-400 + i * 84, 700, 80, 640, { wash: i % 2 ? '#6a4020' : '#7a4a24', washA: 1, w: 1.6, col: '#2a1408' });
    push(900, 360, 1); const w = rect(-180, -220, 360, 380, { wash: '#a8c8e0', washA: 1, w: 8, col: '#3a2a1a', key: 13700 }); ctx.save(); ctx.clip(w.path); vgrad(-220, 160, ['#8ab0d8', '#dceaf4']);
      push(40, 160, 1); pencil([[0, 0], [0, -300]], { w: 18, col: '#d8d8d8' }); ell(0, -300, 40, 40, { wash: '#c8ccd2', washA: 1, w: 2, col: '#5a5e66' }); for (let k = 0; k < 6; k++) rect(-34 + k * 12, -306, 8, 10, { wash: '#2a3a5a', washA: 1, line: false }); pencil([[0, -340], [0, -400]], { w: 6, col: '#d8d8d8' }); pencil([[0, -400], [0, -440]], { w: 3, col: '#d9282a' }); pop();
      for (let i = 0; i < 4; i++) { rect(-180 + i * 100, 40 - (i % 2) * 40, 90, 140, { wash: '#c8c4bc', washA: 1, w: 1.4 }); windows(-172 + i * 100, 48 - (i % 2) * 40, 74, 100, 3, 4, 13701 + i, 0.5, '#ffe8a0', '#7a8a9a', 0.9); }
      const tx = t > EV.gd_gdr - 0.2 ? lerp(-320, 320, clamp((t - EV.gd_gdr + 0.2) / 1.6)) : -400; trabant(tx, 150, 0.5); ctx.restore(); pencil([[0, -220], [0, 160]], { w: 8, col: '#3a2a1a' }); pop();
    push(320, 420, 1); rect(-200, -220, 400, 400, { wash: '#1e2a24', washA: 1, w: 8, col: '#6a4424' }); txt('SPEISEKARTE', 0, -170, 34, { font: 'Osw', col: '#f4f0e6' }); for (const [i, s] of ['Soljanka', 'Würzfleisch', 'Ketwurst', 'Letscho'].entries()) txt(s, -30, -100 + i * 60, 34, { font: 'Hand', col: i === 0 ? '#ffd890' : '#d8e4dc' }); if (t > EV.gd_gdr) glow(-30, -100, 120, 'rgba(255,220,120,1)', 0.3); pop();
    push(540, 80, 1); const on = t > EV.gd_gdr; rect(-260, -40, 520, 80, { wash: '#2a2a2a', washA: 1, w: 3, col: '#c8a050' }); txt('GASTSTÄTTE', 0, 22, 54, { font: 'Osw', col: on ? '#ff8a3a' : '#5a3a2a' }); if (on) glow(0, 0, 300, 'rgba(255,140,60,1)', 0.35); pop();
    for (const x of [200, 640, 1060]) { pencil([[x, -500], [x, -100]], { w: 3, col: '#2a2a2a', pass2: false }); ell(x, -70, 50, 50, { wash: '#f8e8c8', washA: 0.95, w: 2, col: '#8a7a5a' }); glow(x, -70, 200, 'rgba(255,220,150,1)', 0.45); }
  }
  function tables(t) {                                                  // столики с клетчатыми скатертями, гости, миски появляются по очереди, официантка
    const each = [[80, 1180], [520, 1160], [960, 1180]];
    for (const [i, [x, y]] of each.entries()) { push(x, y, 0.95); ell(0, 0, 150, 34, { wash: '#f4f0e6', washA: 1, w: 2, col: '#6a6a5a' }); for (let k = 0; k < 6; k++) pencil([[-140 + k * 50, -10], [-130 + k * 50, 24]], { w: 10, col: '#c8221a', a: 0.35, pass2: false }); pencil([[0, 0], [0, 180]], { w: 10, col: '#3a2410' });
      if (t > EV.gd_each - 0.1 + i * 0.25) { const k = popK(t, EV.gd_each - 0.1 + i * 0.25, 0.4); push(0, -10, k); solyankaBowl(0, 0, 0.32, t, { key: 13710 + i }); pop(); } pop();
      human(x - 160, y + 40, 1.0, t, { body: ['#3a5a8a', '#8a3a2a', '#4a6a3a'][i], legs: '#2a2a34', hair: ['#c8a060', '#3a2a1a', '#d8d0c0'][i], face: t > EV.gd_each + i * 0.25 ? 'grin' : 'smile', armL: 'hold', armR: t > EV.gd_each + i * 0.25 ? 'up' : 'hold', look: 0.6, seed: 13720 + i, long: i === 1 }); }
    const wx = lerp(1300, 760, sm(clamp((t - EV.gd_rest + 0.6) / 0.8))); human(wx, 1300, 1.12, t, { body: '#2a2a3a', legs: '#2a2a2a', hair: '#e8c060', face: 'smile', armL: 'hold', armR: 'hold', look: -0.6, seed: 13725, flip: -1, long: 1 }); push(wx, 1300 - 70, 1.12); rect(-46, -150, 92, 150, { wash: '#ffffff', washA: 1, w: 1.6, col: '#8a8a8a' }); pop();
    push(wx - 80, 1300 - 280, 1); const tr = ell(0, 0, 110, 20, { wash: '#c8ccd2', washA: 1, w: 2 }); metalG(tr.path, -30, -6, 120, '#ffffff', '#b8bcc4', '#5a5e66'); for (let i = 0; i < 3; i++) solyankaBowl(-70 + i * 70, -14 - (i % 2) * 20, 0.2, t, { key: 13726 + i, steam: 0 }); pop();
  }
  function table(t) {                                                   // стол Тома: миска солянки, чемоданчик-«путешественник», хлеб, горчица
    const tb = rect(-400, 1460, 1900, 800, { wash: '#f4f0e6', washA: 1, w: 2.4, col: '#6a6a5a', key: 13730 }); for (let i = 0; i < 30; i++) pencil([[-400 + i * 70, 1460], [-400 + i * 70, 2000]], { w: 22, col: '#c8221a', a: 0.22, pass2: false }); for (let j = 0; j < 8; j++) pencil([[-400, 1480 + j * 70], [1500, 1480 + j * 70]], { w: 22, col: '#c8221a', a: 0.22, pass2: false });
    solyankaBowl(360, 1500, 1.0, t, { key: 13731 });
    const sk = clamp((t - EV.gd_go + 0.2) / 0.8); if (sk > 0 && sk < 1 || t < EV.gd_gdr + 0.6) { const x = lerp(-200, 760, sm(sk)); push(x, 1560, 1, -0.05); const c = rect(-110, -80, 220, 140, { wash: '#8a4a2a', washA: 1, w: 2.6, col: '#2a1408' }); pencil(spline([[-40, -80], [-40, -110], [40, -110], [40, -80]], false, 4), { w: 8, col: '#2a1408', pass2: false }); rect(-70, -40, 140, 50, { wash: '#f4ecd8', washA: 1, w: 1.6, col: '#5a3a1a', rot: 0.05 }); txt('SOLJANKA', 0, -6, 26, { font: 'Osw', col: '#a8221a' }); pop(); }
    push(780, 1520, 1); rect(-24, -80, 48, 80, { wash: '#e8c040', washA: 1, w: 2, col: '#5a4a08' }); rect(-24, -96, 48, 18, { wash: '#c8221a', washA: 1, w: 1.6 }); txt('Senf', 0, -34, 18, { font: 'Osw', col: '#5a3a08' }); pop();
  }
  function front(t) {                                                   // передний план: спинка стула 70-х, вешалка с курткой, пар
    push(-60, 1900, 1.6); const ch = shape(spline([[-80, 0], [-90, -300], [-40, -360], [60, -360], [90, -300], [80, 0]], true, 6), { wash: '#c86a2a', washA: 1, w: 3, col: '#3a1a08' }); for (let i = 0; i < 4; i++) pencil([[-70 + i * 46, -320], [-70 + i * 46, -40]], { w: 2, col: '#8a3a14', pass2: false }); pop();
    push(1180, 900, 1.4); pencil([[0, -200], [0, 1000]], { w: 10, col: '#3a2a1a' }); const j = shape([[-60, -150], [60, -150], [80, 200], [-80, 200]], { wash: '#4a6a3a', washA: 1, w: 2.4, col: '#1a2a1a' }); pop();
    motes(24, [100, 400, 1000, 1700], '#fff0d0', t, 13740, { sp: 6, sz: 4, a: 0.45, wob: 2 });
  }
  WORLD.gdr = (t, u, cat) => {
    lay(12, () => { room(t); haze('#ffd8a0', 0.06); });
    lay(3, () => { tables(t); haze('#ffcf90', 0.04); });
    lay(1, () => { cat(); });
    lay(0.95, () => { table(t); });
    lay(0.6, () => { front(t); });
  };
  DIR.gdr = {
    outfit: 'olympA', light: { side: 1, rim: '#ffd890' }, grade: ['#ffa060', 0.1],
    act: () => [[S0.gdr, 'talk'], [EV.gd_go, 'grin'], [EV.gd_gdr, 'awe'], [EV.gd_each, 'proud'], [EV.gd_rest, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 720, y: 1700, s: 1.1, flip: -1, look: t < EV.gd_gdr ? [-0.5, 0.5] : t < EV.gd_rest ? [0.5, -0.3] : [0.7, 0], hand: [200, -260], handF: t > EV.gd_each ? [-120, -400] : [-60, -200], prop: 'spoonSP', propAng: 0.4, tailUp: t > EV.gd_rest }),
    cam: () => [[S0.gdr, 560, 900, 0.1], [EV.gd_go - 0.2, 420, 1340, 0.24, 'x'], [EV.gd_gdr, 760, 760, 0.2], [EV.gd_each, 560, 1100, 0.1], [EV.gd_rest, 640, 1180, 0.18], [S1.gdr, 640, 1200, 0.22]]
  };
  // ---------------------------------------------------------------- переход: «трабант» проезжает и утягивает прошлую сцену
  TRANS_IN.gdr = { a: 0.3, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), x = lerp(-300, W + 300, e); drawBuf(B, 1, 540, 960); ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.rect(Math.max(0, x), 0, W, H); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
    scr(() => { trabant(x - 40, 1300, 2.4); for (let i = 0; i < 6; i++) ell(x - 420 - i * 60, 1280 - i * 10, 40 + i * 20, 30 + i * 12, { wash: '#c8c8c8', washA: 0.4 * (1 - i / 6), line: false }); });
  } };
})();
