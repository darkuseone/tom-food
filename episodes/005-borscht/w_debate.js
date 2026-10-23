/* 005 — `debate`: «Чей борщ? Своим его зовут сразу несколько народов. Мы не судьи — мы едоки.» Большая тёплая столовая-трапезная: длинная лавка, рушники,
   над столом крутится круглая «вертушка» с пятью кастрюлями — у каждой своё полотенце-узор и своя крышка (никаких флагов). На «несколько народов» к кастрюлям
   тянутся руки с ложками со всех сторон, ложки звенят. Том в строгом костюме юриста с молотком; на «мы не судьи» отбрасывает молоток, на «едоки» берёт
   ложку и пробует из ближней кастрюли. Переход В сцену: круглый стол-вертушка проворачивается и выносит новую сцену. */
(() => {
  EV.db_who = LS('s9') + 0.05;
  EV.db_many = wtw('s9', 'несколько');
  EV.db_judge = wtw('s9', 'судьи');
  EV.db_eat = wtw('s9', 'едоки.');
  SHAKES.push([EV.db_judge + 0.2, 0.18, 8]);
  KEYW.push('Чей', 'едоки.');

  const PAT = [['#d9482b', '#2a2a2a'], ['#3a6ab8', '#f2d040'], ['#2a7a3a', '#d9482b'], ['#8a3aa8', '#f2ead6'], ['#d6a842', '#7a1a10']];
  function hall(t) { vgrad(-600, 1500, ['#5a3420', '#7a4a2a', '#8a5a34']); for (let i = 0; i < 8; i++) pencil([[-300 + i * 230, -600], [-300 + i * 230, 1300]], { w: 3, col: '#4a2a14', a: 0.6, pass2: false });
    for (let i = 0; i < 3; i++) { const x = 560 + i * 220; const w = rect(x, 200, 140, 260, { wash: '#f0c870', washA: 1, w: 6, col: '#3a2010' }); pencil([[x + 70, 200], [x + 70, 460]], { w: 5, col: '#3a2010' }); }
    for (let i = 0; i < 4; i++) { const x = 40 + i * 270; push(x, 560, 1); rect(-90, 0, 180, 40, { wash: '#f6f0e2', washA: 1, w: 2, col: '#8a7a5a' }); for (let q = 0; q < 6; q++) poly([[-80 + q * 30, 20], [-70 + q * 30, 8], [-60 + q * 30, 20], [-70 + q * 30, 32]], { wash: PAT[i][0], washA: 1, line: false }); pop(); }
    pencil([[540, -300], [540, 520]], { w: 4, col: '#2a1a0a', pass2: false }); ell(540, 540, 120, 30, { wash: '#d6a842', washA: 1, w: 3, col: '#5a3a10' }); glow(540, 580, 300, 'rgba(255,210,130,1)', 0.4); }
  function eaters(t) { const many = t > EV.db_many - 0.1; for (let i = 0; i < 5; i++) { const x = -40 + i * 260, f = i % 2 ? 1 : -1; human(x, 1240, 0.82, t, { body: PAT[i][0], hair: ['#2a1a0a', '#c8a050', '#5a3a1a', '#1a1a1a', '#8a5a3a'][i], face: many ? (i % 2 ? 'grin' : 'smile') : 'calm', armL: 'hold', armR: many ? 'up' : 'hold', seed: 420 + i, flip: f, look: -f * 0.4, beard: i === 3, long: i % 2 ? 0 : 1, hat: i === 2 ? 'cap' : i === 4 ? 'scarf' : null, hatCol: PAT[i][1] }); } }
  function table(t) { const tb = rect(-300, 1300, 1700, 700, { wash: '#6a4426', washA: 1, w: 3, col: '#1a0a04', key: 6100 }); shadeG(tb.path, 540, 1300, 540, 1800, '#2a1408', 0.4);
    rect(-300, 1300, 1700, 60, { wash: '#f6f0e2', washA: 1, w: 2, col: '#8a7a5a' }); for (let q = 0; q < 30; q++) poly([[-290 + q * 60, 1330], [-275 + q * 60, 1314], [-260 + q * 60, 1330], [-275 + q * 60, 1346]], { wash: '#d9482b', washA: 1, line: false });
    const cx = 480, cy = 1430, rot = t * 0.6 + (t > EV.db_many ? (t - EV.db_many) * 0.6 : 0); ell(cx, cy + 20, 420, 80, { wash: '#8a5a30', washA: 1, w: 3, col: '#2a1408' }); ell(cx, cy, 420, 80, { wash: '#a87040', washA: 1, w: 3, col: '#2a1408' });
    const pots = []; for (let i = 0; i < 5; i++) { const a = rot + i / 5 * 6.283; pots.push([Math.sin(a), Math.cos(a), i]); } pots.sort((a, b) => a[1] - b[1]);
    for (const [sx, cz, i] of pots) { const x = cx + sx * 320, y = cy - 30 + cz * 50, s = 0.42 + cz * 0.06; push(x, y, s); const p = shape(spline([[-110, -150], [-120, -40], [-90, 40], [90, 40], [120, -40], [110, -150]], false, 8), { wash: '#c8ccd0', washA: 1, w: 3, col: '#3a3e44' }); shadeG(p.path, 110, 0, -40, 0, '#6a6e74', 0.5);
      ell(0, -150, 110, 24, { wash: BR.red, washA: 1, w: 2.4, col: '#3a3e44' }); for (const sd of [-1, 1]) pencil([[sd * 110, -120], [sd * 150, -110]], { w: 10, col: '#3a3e44' }); rect(-110, -90, 220, 50, { wash: '#f6f0e2', washA: 1, w: 1.6, col: '#8a7a5a' }); for (let q = 0; q < 7; q++) poly([[-100 + q * 30, -66], [-88 + q * 30, -80], [-76 + q * 30, -66], [-88 + q * 30, -52]], { wash: PAT[i][q % 2], washA: 1, line: false });
      for (let q = 0; q < 3; q++) { const k = (t * 0.7 + q / 3 + i * 0.2) % 1; ell(-30 + q * 30, -170 - k * 140, 20 + k * 30, 14 + k * 18, { wash: '#ffffff', washA: 0.35 * (1 - k), line: false }); } pop(); }
    if (t > EV.db_many) for (let i = 0; i < 6; i++) { const k = clamp((t - EV.db_many - i * 0.08) / 0.4), a = i / 6 * 6.283, x = cx + Math.cos(a) * lerp(700, 340, k), y = cy - 160 + Math.sin(a) * lerp(260, 90, k); push(x, y, 1, a + Math.PI / 2); pencil([[0, 0], [0, -110]], { w: 7, col: '#c8ccd0' }); ell(0, -130, 20, 28, { wash: '#c8ccd0', washA: 1, w: 2, col: '#4a5058' }); pop(); }
    if (t > EV.db_who) bubbleTag('ЧЕЙ?', 480, 1080, t, EV.db_who, '#a8182a', 54, -0.06);
    if (t > EV.db_judge) { const k = t - EV.db_judge; if (k < 1.2) { push(860 + k * 600, 1100 - 700 * k + 900 * k * k, 1, k * 12); rect(-50, -24, 100, 48, { wash: '#6a3a1a', washA: 1, w: 2.4, col: '#1a0a04' }); pencil([[0, 24], [0, 120]], { w: 12, col: '#8a5a2a' }); pop(); } } }
  WORLD.debate = (t, u, cat) => { lay(12, () => hall(t)); lay(2.6, () => eaters(t)); lay(1, () => { table(t); cat(); }); };
  DIR.debate = {
    outfit: 'lawyer', light: { side: -1, rim: '#ffd890' }, grade: ['#c87040', 0.08],
    act: () => [[S0.debate, 'suspicious'], [EV.db_many, 'awe'], [EV.db_judge - 0.2, 'smug'], [EV.db_eat, 'laugh']],
    pose: (t, u, b) => { const thrown = t > EV.db_judge, eat = t > EV.db_eat - 0.2; return Object.assign(b, { x: 860, y: 1800, s: 1.12, flip: true, apron: 1, look: eat ? [-0.6, 0.5] : [-0.8, -0.2],
      hand: eat ? [80, -360] : thrown ? [200, -400] : [150, -280], handF: [-90, -220], prop: thrown ? (t > EV.db_eat - 0.5 ? 'spoonBorschP' : null) : 'gavelP', tailUp: eat }); },
    cam: () => [[S0.debate, 500, 1150, 0.16], [EV.db_many, 480, 1200, 0.2, 'x'], [EV.db_judge, 700, 1300, 0.26], [EV.db_eat, 760, 1350, 0.32, 'x'], [S1.debate, 760, 1350, 0.34]]
  };
  // ---------------------------------------------------------------- переход: стол-вертушка проворачивается и выносит новую сцену
  TRANS_IN.debate = { a: 0.15, b: 0.5, runA: 1, fx(k, t, A, B) {
    const q = sm(k), a = q * Math.PI; scr(() => { ctx.fillStyle = '#2a1408'; ctx.fillRect(0, 0, W, H);
      ctx.save(); ctx.translate(540, 2400); ctx.rotate(-a); ctx.translate(-540, -2400); ctx.drawImage(A, 0, 0); ctx.restore();
      ctx.save(); ctx.translate(540, 2400); ctx.rotate(Math.PI - a); ctx.translate(-540, -2400); ctx.drawImage(B, 0, 0); ctx.restore(); });
  } };
})();
