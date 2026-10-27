/* 010 — `flavour`: «Ирландская Tayto добавила сыр с луком — и чипсы наконец обрели вкус!» Дублин, 1954: маленький цех с кирпичными стенами, окно на мокрую улицу
   с зелёными трамваями, конвейер с чипсами, работницы в косынках, ящики «TAYTO 1954». На «Tayto» над цехом загорается вывеска; на «сыр» с потолка в бункер падает
   головка сыра, на «луком» — луковица; Том в сеточке трясёт огромную солонку — зелёная пыль летит на конвейер; на «вкус!» чипсы на ленте вспыхивают, работницы
   пробуют и ахают, вылетают зелёные пачки «СЫР И ЛУК». Переход В сцену: облако приправы заволакивает кадр. */
(() => {
  EV.fl_tayto = wtw('s5', 'Tayto');
  EV.fl_cheese = wtw('s5', 'сыр');
  EV.fl_onion = wtw('s5', 'луком');
  EV.fl_taste = wtw('s5', 'вкус!');
  SHAKES.push([EV.fl_taste + 0.05, 0.2, 9]);
  KEYW.push('вкус!');

  function shop(t) { vgrad(-600, 1500, ['#7a4a3a', '#8a5640', '#9a6448']); for (let r = 0; r < 24; r++) for (let c = 0; c < 9; c++) rect(-260 + c * 180 + (r % 2) * 90, -300 + r * 64, 170, 56, { wash: (r + c) % 3 ? '#9a5a40' : '#8a4e36', washA: 0.5, w: 1, col: '#5a3020', a: 0.5 });
    push(860, 640, 0.9); rect(-170, -180, 340, 300, { wash: '#8aa0a8', washA: 1, w: 10, col: '#2a2a2a', key: 11900 }); for (let i = 0; i < 10; i++) { const r = rng(11901 + i), y = ((t * 300 + r() * 300) % 300) - 180; pencil([[-160 + r() * 320, y], [-162 + r() * 320, y + 20]], { w: 1.4, col: '#e8f0f2', a: 0.7, pass2: false }); }
      const tx = ((t * 60) % 600) - 300; push(tx, 70, 0.8); rect(-100, -60, 200, 70, { wash: '#2a6a3a', washA: 1, w: 2, col: '#0a2a1a' }); rect(-100, -70, 200, 14, { wash: '#f2d870', washA: 1, line: false }); for (let i = 0; i < 4; i++) rect(-84 + i * 44, -46, 30, 26, { wash: '#f6e8a0', washA: 1, w: 1.2 }); pop(); pencil([[0, -180], [0, 120]], { w: 6, col: '#2a2a2a' }); pop();
    const on = t > EV.fl_tayto - 0.05; push(690, 330, 0.72); rect(-220, -60, 440, 120, { wash: '#1a1a1a', washA: 1, w: 4, col: '#0a0a0a', key: 11905 }); txt('TAYTO · 1954', 0, 22, 70, { font: 'Osw', col: on ? '#fff0a0' : '#4a4a3a' }); if (on) glow(0, 0, 300, 'rgba(255,240,150,1)', 0.35 * (0.8 + Math.sin(t * 9) * 0.2)); pop();
    push(380, 560, 1); rect(-90, -120, 180, 160, { wash: '#a8a8b0', washA: 1, w: 3, col: '#2a2a2a', key: 11906 }); poly([[-90, 40], [90, 40], [20, 140], [-20, 140]], { wash: '#8a8a90', washA: 1, w: 3, col: '#2a2a2a' }); txt('ПРИПРАВА', 0, -40, 26, { font: 'Osw', col: '#2a2a2a' }); pop();
    const ck = clamp((t - EV.fl_cheese + 0.3) / 0.5); if (ck > 0 && ck < 1) { push(380, lerp(-200, 440, ck * ck), 1, ck * 3); ell(0, 0, 60, 40, { wash: '#f2c838', washA: 1, w: 2.4, col: '#8a6a10' }); for (let i = 0; i < 4; i++) ell(-30 + i * 20, -10 + (i % 2) * 14, 6, 5, { wash: '#d8a820', washA: 1, line: false }); pop(); }
    const ok = clamp((t - EV.fl_onion + 0.3) / 0.5); if (ok > 0 && ok < 1) { push(400, lerp(-200, 440, ok * ok), 1, -ok * 3); blob([[-40, 20], [-44, -20], [0, -50], [44, -20], [40, 20], [0, 36]], { wash: '#c8784a', washA: 1, w: 2.4, col: '#6a2a10' }); pencil([[0, -50], [6, -80]], { w: 4, col: '#4a8a3a', pass2: false }); pop(); }
    if (t > EV.fl_cheese) bubbleTag('СЫР', 210, 470, t, EV.fl_cheese + 0.2, '#d6a842', 34, -0.08); if (t > EV.fl_onion) bubbleTag('ЛУК', 560, 470, t, EV.fl_onion + 0.2, '#5aa83a', 34, 0.08); }
  function workers(t) { const wow = t > EV.fl_taste; for (let i = 0; i < 3; i++) { const x = [100, 980, 260][i]; human(x, 1250, 1.05, t, { body: ['#3a6a8a', '#6a3a5a', '#5a6a3a'][i], hair: ['#c8783a', '#2a1a0a', '#5a3a1a'][i], face: wow ? 'shock' : 'smile', armL: 'hold', armR: wow ? 'up' : 'hold', seed: 1190 + i, long: 1, hat: 'scarf', hatCol: ['#f2f0e6', '#e8d0d0', '#d8e8d8'][i], flip: i === 1 ? -1 : 1, look: i === 1 ? -0.4 : 0.4 }); } }
  function belt(t) { rect(-300, 1240, 1700, 50, { wash: '#3a3a40', washA: 1, w: 3, col: '#0a0a0a', key: 11910 }); for (let i = 0; i < 18; i++) ell(-300 + i * 100 + ((t * 120) % 100), 1265, 14, 14, { wash: '#6a6a70', washA: 1, w: 1.6, col: '#1a1a1a' });
    const sea = clamp((t - EV.fl_cheese) / 2.0); for (let i = 0; i < 12; i++) { const x = ((i * 130 + t * 120) % 1600) - 300; chip(x, 1220, 0.5, i, { seed: i + 21, seasoned: x > 380 && sea > 0 ? true : null }); if (t > EV.fl_taste && t < EV.fl_taste + 0.8) glow(x, 1210, 60, 'rgba(255,240,150,1)', 0.5 * (1 - (t - EV.fl_taste) / 0.8)); }
    if (t > EV.fl_cheese) for (let i = 0; i < 24; i++) { const r = rng(11920 + i), k = (t * 1.4 + r()) % 1; ell(340 + r() * 100 + k * 40, 600 + k * 600, 3, 3, { wash: CHP.green, washA: 0.9 * (1 - k * 0.5), line: false }); }
    if (t > EV.fl_taste) for (let i = 0; i < 3; i++) { const k = popK(t, EV.fl_taste + 0.2 + i * 0.12, 0.4); chipBag(200 + i * 220, 1110 - i * 20, 0.42 * k, t, { col: '#2a8a3a', label: 'TAYTO', sub: 'СЫР И ЛУК', size: 36, seasoned: true, rot: (i - 1) * 0.12 }); } }
  WORLD.flavour = (t, u, cat) => { lay(12, () => shop(t)); lay(2.4, () => workers(t)); lay(1.3, () => belt(t)); lay(1, () => { rect(-300, 1560, 1700, 600, { wash: '#4a3a30', washA: 1, w: 2, col: '#1a0a04', key: 11930 }); cat(); }); };
  DIR.flavour = {
    outfit: 'fabA', light: { side: 1, rim: '#ffe8c0' }, grade: ['#a0c070', 0.04],
    act: () => [[S0.flavour, 'talk'], [EV.fl_tayto, 'proud'], [EV.fl_cheese, 'grin'], [EV.fl_onion, 'smug'], [EV.fl_taste, 'awe'], [EV.fl_taste + 0.6, 'laugh']],
    pose: (t, u, b) => { const shake = t > EV.fl_cheese - 0.2 && t < EV.fl_taste; return Object.assign(b, { x: 720, y: 1820, s: 1.12, flip: true, look: [-0.7, -0.4], hand: shake ? [180, -360 + Math.sin(t * 24) * 30] : [140, -300], handF: [-90, -240], prop: shake ? 'shakerP' : t > EV.fl_taste ? 'chipP' : null, propAng: shake ? Math.PI + Math.sin(t * 24) * 0.2 : 0 }); },
    cam: () => [[S0.flavour, 560, 1000, 0.12], [EV.fl_tayto, 480, 700, 0.2, 'x'], [EV.fl_cheese, 440, 820, 0.24], [EV.fl_taste, 520, 1180, 0.26, 'x'], [S1.flavour, 540, 1160, 0.24]]
  };
  TRANS_IN.flavour = { a: 0.2, b: 0.5, runA: 1, fx(k, t, A, B) {             // облако зелёной приправы заволакивает кадр
    const q = Math.sin(k * Math.PI); drawBuf(k < 0.5 ? A : B, 1, 540, 960); scr(() => { for (let i = 0; i < 300; i++) { const r = rng(11940 + i), x = r() * W + (k - 0.5) * 300 * (r() - 0.5), y = r() * H; ell(x, y, 6 + r() * 10, 6 + r() * 10, { wash: i % 4 ? '#7ab84a' : '#f2c838', washA: 0.9 * q, line: false }); } screenFill('#9ac860', 0.35 * q); });
  } };
})();
