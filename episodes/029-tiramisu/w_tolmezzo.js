/* 029 — `tolmezzo`: «Но горы Фриули возражают: в Тольмеццо похожий десерт подавали ещё в 1950-х!» Горный городок Карнийских Альп:
   снежные пики в утреннем солнце, сосновый лес, колокольня с луковкой, фасады с деревянными балконами и геранью, старая гостиница
   «ALBERGO ROMA» с вывеской, фонтан на площади, флаг Фриули (золотой орёл на синем); горожане в шляпах с пером, старушка в шали,
   мальчишка на велосипеде. Том — горец в фетровой шляпе и жилете, со стаканчиком тирамису. Главный свет — холодное горное солнце,
   второй — тёплое окно гостиницы. По словам: «Фриули» — взлетает флаг с орлом; «возражают:» — горожане скрещивают руки, хором «НО!»;
   «Тольмеццо» — вывеска гостиницы загорается; «похожий» — в окне хозяйка выставляет десерт; «1950-х!» — штамп-квитанция «1952» (пауза-гэг:
   эхо «НО-О-О» с гор, Том оглядывается). Переход В сцену: горный хребет поднимается снизу волной и опускается, открывая городок. */
(() => {
  EV.tz_fr = wtw('s4', 'Фриули');
  EV.tz_no = wtw('s4', 'возражают:');
  EV.tz_town = wtw('s4', 'Тольмеццо');
  EV.tz_dish = wtw('s4', 'похожий');
  EV.tz_50 = wtw('s4', '1950-х!');
  SHAKES.push([EV.tz_no + 0.2, 0.14, 6]);
  KEYW.push('возражают:');

  function peaks(t) {                                                     // небо, снежные пики, лес, колокольня
    vgrad(-500, 900, ['#5a8ad0', '#a8c8f0', '#e8f0f8']); for (let i = 0; i < 3; i++) ell(((t * 10 + i * 500) % 1800) - 300, -200 + i * 60, 200, 36, { wash: '#ffffff', washA: 0.7, line: false });
    const P = [[-500, 560], [-300, 120], [-160, 260], [60, -20], [240, 200], [420, 40], [620, 240], [820, 0], [1000, 220], [1200, 80], [1600, 560]]; sil(P, '#7a8aa8', 1); for (let i = 1; i < P.length - 1; i += 2) { const [x, y] = P[i]; poly([[x - 70, y + 90], [x, y], [x + 70, y + 90], [x + 30, y + 70], [x, y + 100], [x - 30, y + 70]], { wash: '#f8fbff', washA: 1, line: false }); }
    sil([[-500, 600], [-300, 420], [0, 480], [300, 400], [600, 480], [900, 420], [1200, 480], [1600, 600], [1600, 800], [-500, 800]], '#3a5a3a', 1); for (let i = 0; i < 26; i++) { const x = -480 + i * 80, y = 520 + (i % 3) * 20; poly([[x - 26, y + 60], [x, y - 20], [x + 26, y + 60]], { wash: '#2a4a2a', washA: 1, line: false }); }
    push(880, 560, 1); rect(-40, -260, 80, 260, { wash: '#e8dcc0', washA: 1, w: 2 }); ell(0, -290, 50, 40, { wash: '#6a8a6a', washA: 1, w: 2 }); pencil([[0, -330], [0, -380]], { w: 3, col: '#3a3a3a', pass2: false }); rect(-20, -220, 40, 50, { wash: '#3a3a3a', washA: 1, w: 1 }); pop();
  }
  function town(t) {                                                      // фасады с балконами и геранью, гостиница с вывеской, флаг Фриули, фонтан
    for (let i = 0; i < 4; i++) { const x = -350 + i * 440, h = 560; push(x, 1000, 1); rect(-200, -h, 400, h, { wash: ['#f0dcb8', '#e8c898', '#f4e4c8', '#e0c8a8'][i], washA: 1, w: 2.4, col: '#6a4a2a', key: 29600 + i }); poly([[-230, -h], [0, -h - 140], [230, -h]], { wash: '#6a4a3a', washA: 1, w: 2 });
      for (let r = 0; r < 2; r++) { rect(-180, -h + 160 + r * 200, 360, 16, { wash: '#7a4a24', washA: 1, w: 1.4 }); for (let j = 0; j < 9; j++) pencil([[-176 + j * 44, -h + 160 + r * 200], [-176 + j * 44, -h + 200 + r * 200]], { w: 4, col: '#7a4a24', pass2: false }); for (let j = 0; j < 6; j++) ell(-160 + j * 64, -h + 150 + r * 200, 16, 12, { wash: '#e83a3a', washA: 1, w: 1 }); for (let c = 0; c < 3; c++) rect(-140 + c * 110, -h + 60 + r * 200, 60, 80, { wash: '#4a5a6a', washA: 1, w: 1.4, col: '#f8f4ec' }); }
      if (i === 1) { rect(-170, -h - 40, 340, 70, { wash: '#2a2a2a', washA: 1, w: 2, col: '#c8a040' }); txt('ALBERGO ROMA', 0, -h + 10, 40, { font: 'Osw', col: t > EV.tz_town ? '#ffe070' : '#a89060' }); if (t > EV.tz_town) glow(0, -h - 5, 180, 'rgba(255,220,120,1)', 0.22); hudBox('вывеска ALBERGO ROMA', -170, -h - 40, 170, -h + 30);
        if (t > EV.tz_dish) { push(30, -h + 300, popK(t, EV.tz_dish, 0.35)); tiraCup(0, 0, 0.4, t, { spoon: false, key: 29610 }); pop(); } }
      pop(); }
    const up = t > EV.tz_fr ? sm(clamp((t - EV.tz_fr) / 0.6)) : 0; push(1000, 1160, 1); pencil([[0, 0], [0, -520]], { w: 6, col: '#5a4a3a', pass2: false }); push(0, -520 + (1 - up) * 300, 1); const fl = []; for (let i = 0; i <= 8; i++) fl.push([i * 28, Math.sin(t * 4 + i * 0.6) * 8 * i / 8]); shape(fl.concat(fl.slice().reverse().map(([a, b]) => [a, b + 150])), { wash: '#2a4a9a', washA: 1, w: 2, col: '#0a1a4a', key: 29620 }); blob([[90, 50], [110, 30], [130, 50], [150, 40], [140, 80], [112, 110], [84, 80], [74, 40]], { wash: '#f0c030', washA: 1, w: 1.4, col: '#8a6a10' }); pop(); pop();
  }
  function folk(t) {                                                      // горожане в шляпах с пером скрещивают руки — «НО!»
    const no = t > EV.tz_no;
    for (const [x, sd, fl] of [[120, 29630, 1], [300, 29631, 1], [900, 29632, -1]]) { human(x, 1300, x === 300 ? 0.8 : 1.0, t, { body: ['#3a5a3a', '#8a3a2a', '#4a4a6a'][sd % 3], legs: '#2a2a2a', hair: '#6a4a2a', face: no ? 'angry' : 'calm', armL: no ? 'hips' : 'hold', armR: no ? 'point' : 'hold', look: 0.4 * fl, seed: sd, flip: fl, hat: 'cap', hatCol: '#3a3a2a', beard: sd === 29630 ? 'short' : undefined }); push(x + 30 * fl, 1300 - 340 * (x === 300 ? 0.8 : 1), 1, fl * 0.4); pencil(spline([[0, 0], [10, -40], [30, -70]], false, 4), { w: 4, col: '#2a2a2a', pass2: false }); pop(); }
    if (no) { push(560, 780, popK(t, EV.tz_no + 0.1, 0.3)); txt('НО!', 0, 0, 110, { font: 'Osw', col: '#c8201a', rot: -0.05 }); pop(); }
    if (t > LE('s4')) { const q = clamp((t - LE('s4')) / 0.6); for (let i = 0; i < 3; i++) { push(200 + i * 300, 400 - i * 40, 0.6 + q * 0.4); txt('но-о…', 0, 0, 40, { font: 'Hand', col: '#4a5a8a', a: 1 - q * 0.7 }); pop(); } }
    push(560, 1290, 1); ell(0, 0, 160, 30, { wash: '#a8a8a0', washA: 1, w: 2 }); rect(-14, -120, 28, 120, { wash: '#a8a8a0', washA: 1, w: 2 }); for (let i = 0; i < 4; i++) pencil(spline([[0, -120], [-30 + i * 20, -150], [-50 + i * 34, -40]], false, 4), { w: 3, col: '#8ac8e8', a: 0.8, pass2: false }); pop();
  }
  function ground(t) {                                                    // мощёная площадь, лавка-скамейка, ящик с геранью, документ-квитанция 1952
    const g = rect(-500, 1440, 2200, 600, { wash: '#8a8a84', washA: 1, w: 3, col: '#3a3a34', key: 29640 }); ctx.save(); ctx.clip(g.path); for (let r = 0; r < 8; r++) for (let i = 0; i < 22; i++) ell(-480 + i * 100 + (r % 2) * 50, 1460 + r * 60, 46, 24, { wash: ['#7a7a74', '#9a9a92'][(i + r) % 2], washA: 1, w: 1, col: '#4a4a44' }); ctx.restore();
    push(1050, 1450, 1); rect(-120, -40, 240, 40, { wash: '#8a5a2a', washA: 1, w: 2 }); for (let i = 0; i < 6; i++) ell(-100 + i * 40, -50, 18, 14, { wash: '#e83a3a', washA: 1, w: 1 }); pop();
    if (t > EV.tz_50) { push(380, 1380, popK(t, EV.tz_50, 0.3), -0.1); rect(-120, -90, 240, 160, { wash: '#f4ecd0', washA: 1, w: 2, col: '#8a7a5a' }); txt('RICEVUTA', 0, -50, 26, { font: 'Osw', col: '#3a2a1a' }); txt('Tolmezzo', 0, -10, 26, { font: 'Hand', col: '#3a2a1a' }); txt('1952', 0, 40, 44, { font: 'Osw', col: '#c8201a' }); pop(); }
    castShadow(640, 1450, 340, 100, 0.6, 0.28);
  }
  WORLD.tolmezzo = (t, u, cat) => {
    lay(18, () => { peaks(t); haze('#e8f0ff', 0.06); });
    lay(4, () => { town(t); });
    lay(2.6, () => { folk(t); shaft(1200, -200, 400, 1600, 0.4, 'rgba(240,248,255,1)', 0.14); });
    lay(1, () => { lightPool(560, 1460, 660, 120, 'rgba(240,245,255,1)', 0.3); cat(); ground(t); });
    lay(0.65, () => { push(-150, 1800, 1.4); for (let i = 0; i < 3; i++) poly([[i * 60 - 80, 0], [i * 60, -400 - i * 40], [i * 60 + 80, 0]], { wash: '#2a4a2a', washA: 1, w: 2 }); pop(); push(1230, 1950, 1.4); rect(-80, -120, 160, 120, { wash: '#8a5a2a', washA: 1, w: 3 }); for (let i = 0; i < 5; i++) ell(-60 + i * 30, -130, 18, 16, { wash: '#e83a3a', washA: 1, w: 1 }); pop();
      motes(14, [-200, 0, 1300, 1400], '#ffffff', t, 29690, { sp: 2, sz: 3, a: 0.5, wob: 5 }); moodDark(560, 1000, 560, 1500, '#0a1020', 0.38); });
  };
  DIR.tolmezzo = {
    outfit: 'carbA', light: { side: 1, rim: '#e8f0ff' }, grade: ['#c8d8f0', 0.05],
    act: () => [[S0.tolmezzo, 'suspicious'], [EV.tz_no, 'shock'], [EV.tz_town, 'awe'], [EV.tz_50, 'proud'], [LE('s4'), 'sideeye']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1600, s: 1.15, flip: true, look: t > LE('s4') ? [0.8, -0.6] : t > EV.tz_town && t < EV.tz_50 ? [-0.3, -0.8] : [-0.6, 0.3], hand: [180, -300], handF: [-90, -230], prop: 'cupTiraP', tailUp: t > EV.tz_50 }),
    hud: t => infoPlate(t, EV.tz_50 - 0.1, S1.tolmezzo - 0.15, { kind: 'num', title: 'ВЕРСИЯ 2 · ФРИУЛИ', big: '1950-е', sub: 'Тольмеццо, Альберго «Рома»', y: 720 }),
    cam: () => [[S0.tolmezzo, 560, 1020, 0.2], [EV.tz_no, 560, 1080, 0.25], [EV.tz_50, 600, 1120, 0.28], [S1.tolmezzo, 620, 1110, 0.27]]
  };
  // ---------------------------------------------------------------- переход: горный хребет поднимается снизу волной и опускается, открывая городок
  TRANS_IN.tolmezzo = { a: 0.25, b: 0.45, runA: 0.4, fx(k, t, A, B) {
    const up = k < 0.45 ? sm(k / 0.45) : 1 - sm((k - 0.45) / 0.55), base = lerp(2100, 160, up); drawBuf(k < 0.45 ? A : B, 1, 540, 960);
    scr(() => { const P = [[-20, 2100]]; for (let i = 0; i <= 12; i++) P.push([i * 92, base + (i % 2 ? 0 : 260) + Math.sin(i * 2.3) * 60]); P.push([1100, 2100]); poly(P, { wash: '#4a5a7a', washA: 1, w: 4, col: '#2a3a5a', key: 29698 }); for (let i = 1; i < 12; i += 2) { const x = i * 92, y = base + Math.sin(i * 2.3) * 60; poly([[x - 60, y + 100], [x, y], [x + 60, y + 100]], { wash: '#f8fbff', washA: 1, line: false }); } });
  } };
})();
