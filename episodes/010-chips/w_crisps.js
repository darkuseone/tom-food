/* 010 — `crisps`: «Кстати, в Британии чипсы зовут "криспс", а "чипс" — это картошка фри.» Британский паб: тёмное дерево, латунные краны, бутылки, мишень дартса,
   флажки, гости с пинтами. Том-британец в жилете-аргайл и кепке. На «"криспс"» на стойку падает пачка CRISPS с флажком = ЧИПСЫ; на «картошка фри.» — газета-кулёк
   fish & chips с флажком CHIPS = ФРИ; гости чокаются. Переход В сцену: пивная пена стекает сверху вниз. */
(() => {
  EV.cr_crisps = wtw('s3', '«криспс»,');
  EV.cr_chips = wtw('s3', '«чипс»');
  EV.cr_fries = wtw('s3', 'фри.');
  SHAKES.push([EV.cr_fries + 0.1, 0.15, 6]);
  KEYW.push('«криспс»,');

  function pub(t) { vgrad(-600, 1500, ['#2a1a10', '#3a2414', '#4a2e18']); for (let i = 0; i < 12; i++) rect(-300 + i * 150, -400, 140, 1300, { wash: i % 2 ? '#4a2a14' : '#3e2410', washA: 0.6, line: false });
    for (let r = 0; r < 3; r++) { pencil([[-200, 160 + r * 150], [1300, 160 + r * 150]], { w: 8, col: '#2a1408', pass2: false }); for (let i = 0; i < 12; i++) { const x = -160 + i * 120 + (r % 2) * 40; rect(x, 160 + r * 150 - 100, 34, 100, { wash: ['#2a6a3a', '#7a3a1a', '#c8a040', '#3a3a6a'][(i + r) % 4], washA: 0.85, w: 1.4, col: '#0a0404' }); rect(x + 10, 160 + r * 150 - 130, 14, 32, { wash: '#2a2a2a', washA: 1, line: false }); } }
    push(930, 760, 1); ell(0, 0, 90, 90, { wash: '#1a1a1a', washA: 1, w: 3, col: '#000' }); for (let i = 0; i < 4; i++) ell(0, 0, 80 - i * 20, 80 - i * 20, { line: true, w: 10, col: i % 2 ? '#d9282b' : '#2a8a3a', a: 0.9 }); ell(0, 0, 8, 8, { wash: '#d9282b', washA: 1, line: false }); pop();
    for (let i = 0; i < 9; i++) { const x = -100 + i * 150; poly([[x, 40], [x + 60, 40], [x + 30, 100]], { wash: ['#c8282a', '#ffffff', '#2a4aa8'][i % 3], washA: 1, w: 1.4, col: '#2a2a2a' }); } pencil([[-150, 40], [1300, 40]], { w: 2, col: '#2a2a2a', pass2: false }); }
  function guests(t) { const cheers = t > EV.cr_fries; for (let i = 0; i < 3; i++) { const x = [120, 300, 1000][i]; human(x, 1260, 1.08, t, { body: ['#6a2a2a', '#2a4a6a', '#5a5a3a'][i], hair: ['#c8783a', '#2a1a0a', '#8a6a3a'][i], face: cheers ? 'grin' : 'smile', armL: 'hold', armR: cheers ? 'up' : 'hold', seed: 1170 + i, flip: i === 2 ? -1 : 1, look: i === 2 ? -0.5 : 0.5, beard: i === 1 ? 'short' : null, hat: i === 2 ? 'cap' : null, hatCol: '#3a3a3a' });
      const hx = x + (i === 2 ? -82 : 82), hy = 1260 - (cheers ? 238 + 104 : 238 - 84) * 1.08 + 0; push(hx, hy, 1); rect(-18, -50, 36, 56, { wash: '#e8a030', washA: 0.85, w: 2, col: '#5a3a10' }); rect(-18, -58, 36, 14, { wash: '#fbf6ea', washA: 1, line: false }); pop(); } }
  function bar(t) { rect(-300, 1200, 1700, 60, { wash: '#5a2e14', washA: 1, w: 3, col: '#1a0a04', key: 11700 }); rect(-300, 1260, 1700, 500, { wash: '#4a2410', washA: 1, w: 2, col: '#1a0a04' }); for (let i = 0; i < 8; i++) rect(-260 + i * 200, 1300, 160, 260, { line: true, w: 2, col: '#2a1408', a: 0.7 });
    push(560, 1200, 1); for (let i = 0; i < 3; i++) { rect(-80 + i * 60, -150, 20, 150, { wash: '#c8a040', washA: 1, w: 2, col: '#5a4010' }); rect(-86 + i * 60, -170, 32, 22, { wash: ['#2a6a3a', '#c8282a', '#2a2a6a'][i], washA: 1, w: 1.4 }); } pop();
    const k1 = popK(t, EV.cr_crisps, 0.4); if (k1 > 0) { chipBag(250, 1080, 0.62 * k1, t, { col: '#2a5aa8', label: 'CRISPS', size: 34, seasoned: true }); bubbleTag('= ЧИПСЫ', 250, 920, t, EV.cr_crisps + 0.2, '#2a5aa8', 34, -0.05); }
    const k2 = popK(t, EV.cr_fries - 0.15, 0.4); if (k2 > 0) { push(560, 1190, k2 * 1.35, 0.06); poly([[-90, 0], [90, 0], [120, -170], [-120, -170]], { wash: '#efe8d6', washA: 1, w: 2.4, col: '#5a5a5a', key: 11710 }); for (let i = 0; i < 5; i++) pencil([[-100, -150 + i * 30], [100, -150 + i * 30]], { w: 1.4, col: '#8a8a8a', a: 0.6, pass2: false });
      for (let i = 0; i < 9; i++) rect(-80 + i * 18, -230 + (i % 3) * 14, 14, 90, { wash: '#f2c24a', washA: 1, w: 1.4, col: '#a8641a' }); blob([[-110, -190], [-60, -240], [10, -230], [40, -190], [-40, -170]], { wash: '#e8a850', washA: 1, w: 2, col: '#7a4a14' }); pop(); bubbleTag('CHIPS = ФРИ', 600, 820, t, EV.cr_fries, '#c8282a', 34, 0.05); } }
  WORLD.crisps = (t, u, cat) => { lay(12, () => pub(t)); lay(2.6, () => guests(t)); lay(1.2, () => bar(t)); lay(1, () => { rect(-300, 1640, 1700, 500, { wash: '#3a1a0a', washA: 1, w: 2, col: '#0a0404', key: 11720 }); cat(); }); };
  DIR.crisps = {
    outfit: 'pubA', light: { side: -1, rim: '#ffc880' }, grade: ['#c88a40', 0.06],
    act: () => [[S0.crisps, 'smug'], [EV.cr_crisps, 'talk'], [EV.cr_chips, 'sideeye'], [EV.cr_fries, 'grin']],
    pose: (t, u, b) => Object.assign(b, { x: 720, y: 1820, s: 1.12, flip: true, look: t < EV.cr_chips ? [-0.8, -0.3] : [-0.5, -0.2], hand: t > EV.cr_crisps - 0.1 && t < EV.cr_chips ? [230, -330] : [140, -300], point: t > EV.cr_crisps - 0.1 && t < EV.cr_chips, handF: [-90, -240] }),
    cam: () => [[S0.crisps, 560, 1060, 0.14], [EV.cr_crisps, 420, 1100, 0.26, 'x'], [EV.cr_fries, 520, 1080, 0.24], [S1.crisps, 540, 1080, 0.22]]
  };
  TRANS_IN.crisps = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {              // пивная пена стекает сверху вниз и открывает паб
    const q = sm(k), y = q * (H + 300); drawBuf(A, 1, 540, 960); ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.beginPath(); ctx.moveTo(0, 0); for (let x = 0; x <= W; x += 40) ctx.lineTo(x, y - 160 + Math.sin(x / 70 + t * 5) * 40); ctx.lineTo(W, 0); ctx.closePath(); ctx.clip(); ctx.drawImage(B, 0, 0); ctx.restore();
    scr(() => { for (let x = 0; x <= W; x += 30) { const yy = y - 160 + Math.sin(x / 70 + t * 5) * 40; ell(x, yy, 34, 26, { wash: '#fbf6ea', washA: 0.95, line: false }); ell(x + 10, yy + 30, 20, 16, { wash: '#f2c860', washA: 0.6, line: false }); } });
  } };
})();
