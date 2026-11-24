/* 026 — `norway`: «А лосось в суши — вообще идея норвежцев, из восьмидесятых!» Токио, 1985: презентация норвежских рыбаков в зале посольства.
   Тёмный зал с деревянными панелями, баннер «PROJECT JAPAN · 1985», флажки Норвегии и Японии, слайд-проектор на столе бьёт лучом на экран
   (главный свет — холодный луч проектора, второй — тёплые торшеры), на экране слайды меняются по словам: фьорд с садками → прыгающий
   лосось → нигири с лососем. Японские повара-итамаэ в белом сидят рядами и недоверчиво щурятся, норвежцы в пиджаках с причёсками 80-х,
   кассетный магнитофон, телефон с диском, стол со льдом и рыбой. Том — норвежец в синем свитере-«селбу» с подносом лосося. По словам:
   «лосось» — слайд «лосось», Том поднимает поднос; «норвежцев,» — взлетают флажки, норвежцы машут; «восьмидесятых!» — слайд «1985»,
   повар пробует — «うまい!». Плашка «ЛОСОСЬ В СУШИ · 1985». Переход В сцену: диагональная волна фьорда с прыгающим лососем. */
(() => {
  EV.nw_salmon = wtw('s8', 'лосось');
  EV.nw_nor = wtw('s8', 'норвежцев,');
  EV.nw_80 = wtw('s8', 'восьмидесятых!');
  SHAKES.push([EV.nw_80 + 0.2, 0.14, 5]);
  KEYW.push('норвежцев,');
  const slide = t => t < EV.nw_salmon ? 0 : t < EV.nw_80 ? 1 : 2;

  function fjord(t, w, h) {                                               // слайд «фьорд с садками» (рисуется внутри экрана)
    vgrad(-h / 2, h / 2, ['#8ab8e0', '#c8e0f0', '#5a8aa8']); sil([[-w / 2, 40], [-w / 2 + 60, -h / 2 + 40], [-60, -20], [-w / 2 + 140, 60]], '#2a4a3a', 1); sil([[w / 2, 60], [w / 2 - 40, -h / 2 + 60], [100, -10], [w / 2 - 160, 70]], '#3a5a3a', 1);
    rect(-w / 2, 40, w, h / 2 - 40, { wash: '#2a6a8a', washA: 1, line: false }); for (let i = 0; i < 4; i++) pencil(ellPts(-160 + i * 100, 90 + (i % 2) * 20, 40, 12, 0, 0, 20), { w: 3, col: '#e8e8e8', pass2: false });
    for (const x of [-120, 140]) { rect(x - 20, -10, 40, 30, { wash: '#c8302a', washA: 1, w: 1.2 }); poly([[x - 26, -10], [x, -30], [x + 26, -10]], { wash: '#4a2a1a', washA: 1, w: 1 }); }
  }
  function slideImg(t, n) {                                               // содержимое слайда
    const w = 520, h = 340;
    if (n === 0) fjord(t, w, h);
    else if (n === 1) { vgrad(-h / 2, h / 2, ['#5a9ac8', '#2a5a8a']); salmonFish(0, 20, 1.1, -0.25 + Math.sin(t * 3) * 0.05, { key: 27400 }); for (let i = 0; i < 8; i++) ell(-200 + i * 60, 120 + Math.sin(i) * 20, 10, 6, { wash: '#e8f4ff', washA: 0.8, line: false }); txt('LAKS', 160, -110, 50, { font: 'Osw', col: '#ffffff' }); }
    else { vgrad(-h / 2, h / 2, ['#f4ecd8', '#e8d8b8']); nigiri(-60, 90, 0.9, t, { kind: 'salmon', key: 27401 }); txt('1985', 150, -60, 90, { font: 'Osw', col: '#c8302a' }); txt('サーモン寿司', 150, 30, 30, { font: 'Osw', col: '#2a2a2a' }); }
  }
  function hall(t) {                                                      // зал: панели, экран со слайдом, баннер, флаги, торшеры
    vgrad(-500, 1500, ['#1a1410', '#2a1e16', '#3a2a1e']); for (let i = 0; i < 12; i++) { const p = rect(-500 + i * 200, -300, 198, 1700, { wash: i % 2 ? '#4a3220' : '#42301e', washA: 1, w: 1.4, col: '#1a0e06', key: 27410 + i }); rect(-480 + i * 200, -200, 158, 400, { wash: '#523a26', washA: 0.6, w: 1, col: '#1a0e06' }); }
    push(560, 380, 1); rect(-300, -210, 600, 420, { wash: '#f4f4f0', washA: 1, w: 4, col: '#2a2a2a', key: 27430 }); ctx.save(); ctx.clip(pathOf([[-270, -180], [270, -180], [270, 180], [-270, 180]])); slideImg(t, slide(t)); ctx.restore(); pencil([[0, -210], [0, -260]], { w: 4, col: '#2a2a2a', pass2: false }); hudBox('слайд-экран', -300, -210, 300, 210); pop();
    push(560, 80, 1); rect(-360, -40, 720, 80, { wash: '#c8302a', washA: 1, w: 2.4, col: '#4a0a08' }); txt('PROJECT JAPAN · 1985', 0, 16, 46, { font: 'Osw', col: '#fbf4e4' }); hudBox('баннер', -360, -40, 360, 40); pop();
    for (const [x, sd] of [[60, 1], [1060, -1]]) { push(x, 880, 1); pencil([[0, 0], [0, -500]], { w: 5, col: '#c8a860', pass2: false }); const k = t > EV.nw_nor ? popK(t, EV.nw_nor, 0.4) : 1; push(0, -500, 1, Math.sin(t * 2) * 0.03); rect(0, 0, 180 * sd, 120 * k, { wash: '#c8102e', washA: 1, w: 1.6 }); rect(50 * sd, 0, 30 * sd, 120 * k, { wash: '#ffffff', washA: 1, line: false }); rect(0, 45 * k, 180 * sd, 30 * k, { wash: '#ffffff', washA: 1, line: false }); rect(58 * sd, 0, 14 * sd, 120 * k, { wash: '#00205b', washA: 1, line: false }); rect(0, 53 * k, 180 * sd, 14 * k, { wash: '#00205b', washA: 1, line: false }); pop(); pop(); }
    for (const x of [-140, 1240]) { push(x, 1300, 1); pencil([[0, 0], [0, -460]], { w: 5, col: '#c8a860', pass2: false }); blob([[-70, -460], [-50, -560], [50, -560], [70, -460]], { wash: '#f4d890', washA: 1, w: 2 }); glow(0, -500, 220, 'rgba(255,200,120,1)', 0.28); pop(); }
  }
  function crowd(t) {                                                     // японские повара в белом (скептики → «うまい!»), норвежцы в пиджаках
    const won = t > EV.nw_80 + 0.3;
    for (let i = 0; i < 3; i++) { const x = 150 + i * 160; human(x, 1300, 0.95, t, { body: '#f6f2ea', legs: '#2a2a3a', hair: '#1a1410', face: won ? (i === 1 ? 'grin' : 'smile') : 'calm', armL: 'hold', armR: won && i === 1 ? 'up' : 'hold', look: 0.4, seed: 27440 + i }); jpHat(x, 1300, 0.95, 'hachi', '#f4f0e8'); if (!won) { pencil([[x - 20, 1300 - 284 * 0.95 - 6], [x - 6, 1300 - 284 * 0.95 - 2]], { w: 3, col: '#1a1a1a', pass2: false }); } }
    if (won) { push(320, 920, popK(t, EV.nw_80 + 0.3, 0.35)); rect(-90, -40, 180, 70, { wash: '#fbf4e4', washA: 1, w: 2, col: '#2a2a2a' }); txt('うまい!', 0, 12, 40, { font: 'Osw', col: '#c8302a' }); pop(); }
    for (let i = 0; i < 2; i++) { const x = 930 + i * 140; human(x, 1300, 1.0, t, { body: ['#3a4a6a', '#6a5a4a'][i], legs: '#2a2a3a', hair: ['#e8c870', '#c89a5a'][i], face: t > EV.nw_nor ? 'grin' : 'smile', armL: 'hold', armR: t > EV.nw_nor ? 'wave' : 'hold', look: -0.5, seed: 27450 + i, flip: -1 }); }
    push(980, 1180, 1); rect(-60, -40, 120, 50, { wash: '#2a2a2a', washA: 1, w: 2 }); ell(-30, -14, 16, 16, { wash: '#4a4a4a', washA: 1, w: 1.4 }); ell(30, -14, 16, 16, { wash: '#4a4a4a', washA: 1, w: 1.4 }); rect(-20, -36, 40, 14, { wash: '#c8302a', washA: 1, w: 1 }); pop();
  }
  function table(t) {                                                     // стол: лёд с рыбой, проектор с лучом, телефон с диском
    const tb = rect(-500, 1440, 2200, 600, { wash: '#f4f0e8', washA: 1, w: 3, col: '#6a6a60', key: 27460 }); shadeG(tb.path, 0, 1440, 0, 1900, '#b8b0a0', 0.4); for (let i = 0; i < 6; i++) pencil([[-500, 1500 + i * 60], [1700, 1500 + i * 60]], { w: 1.6, col: '#d8d0c0', a: 0.5, pass2: false });
    push(200, 1460, 1); ell(0, 0, 170, 36, { wash: '#a8b8c8', washA: 1, w: 2 }); for (let i = 0; i < 16; i++) { const r = rng(27461 + i); ell(-140 + r() * 280, -14 + r() * 20, 14, 9, { wash: '#f0faff', washA: 1, w: 1, col: '#a8c0d0' }); } salmonFish(0, -36, 0.7, 0.05, { key: 27470 }); pop();
    push(470, 1450, 1); rect(-70, -70, 140, 70, { wash: '#4a4a52', washA: 1, w: 2, col: '#1a1a1a' }); ell(60, -36, 22, 22, { wash: '#2a2a2a', washA: 1, w: 2 }); ell(-30, -80, 34, 12, { wash: '#2a2a2a', washA: 1, w: 1.4 }); pop();
    push(1050, 1460, 1); rect(-50, -40, 100, 40, { wash: '#c8302a', washA: 1, w: 2 }); ell(0, -24, 22, 12, { wash: '#f4f0e8', washA: 1, w: 1.4 }); pencil(spline([[-40, -40], [0, -70], [40, -40]], false, 4), { w: 8, col: '#a8241e', pass2: false }); pop();
    castShadow(700, 1450, 300, 90, 0.5, 0.25);
  }
  WORLD.norway = (t, u, cat) => {
    lay(8, () => { hall(t); haze('#2a3a5a', 0.05); });
    lay(2.6, () => { crowd(t); });
    lay(1, () => { shaft(470, 1380, 360, 1100, 3.3, 'rgba(210,230,255,1)', 0.16); lightPool(560, 1460, 640, 110, 'rgba(220,235,255,1)', 0.3); cat(); table(t); });
    lay(0.65, () => { push(-150, 400, 1.4); rect(-40, -600, 120, 1600, { wash: '#6a1a1a', washA: 1, w: 3, col: '#2a0a0a' }); for (let i = 0; i < 6; i++) pencil([[-20 + i * 18, -600], [-24 + i * 18 + Math.sin(t + i) * 4, 1000]], { w: 3, col: '#4a0a0a', pass2: false }); pop();
      motes(14, [200, 400, 900, 1400], '#e8f0ff', t, 27490, { sp: 2, sz: 3, a: 0.4, wob: 3 }); moodDark(560, 1000, 520, 1500, '#060a18', 0.5); });
  };
  DIR.norway = {
    outfit: 'norA', light: { side: -1, rim: '#d8e8ff' }, grade: ['#a8c0e0', 0.06],
    act: () => [[S0.norway, 'suspicious'], [EV.nw_salmon, 'proud'], [EV.nw_nor, 'grin'], [EV.nw_80, 'wink'], [EV.nw_80 + 0.4, 'laugh']],
    pose: (t, u, b) => Object.assign(b, { x: 700, y: 1600, s: 1.15, flip: true, look: t < EV.nw_nor ? [-0.5, -0.4] : [-0.6, 0.2], hand: t > EV.nw_salmon ? [180, -330] : [150, -230], handF: [-90, -230], prop: 'salmonP', propAng: 0.05, tailUp: t > EV.nw_80 }),
    hud: t => infoPlate(t, EV.nw_nor - 0.1, S1.norway - 0.1, { kind: 'num', title: 'ЛОСОСЬ В СУШИ', big: '1985', sub: 'идею привезли норвежцы', y: 700 }),
    cam: () => [[S0.norway, 560, 1040, 0.23], [EV.nw_nor, 580, 1100, 0.27], [S1.norway, 600, 1130, 0.3]]
  };
  // ---------------------------------------------------------------- переход: диагональная волна фьорда, по гребню прыгает лосось
  TRANS_IN.norway = { a: 0.25, b: 0.45, runA: 0.3, fx(k, t, A, B) {
    const e = sm(k), d = lerp(-900, 2600, e); drawBuf(B, 1, 540, 960);
    scr(() => { const crest = []; for (let i = 0; i <= 20; i++) { const s = -600 + i * 120; crest.push([s + d * 0.5 + Math.sin(i + t * 8) * 30, 2000 - s - d * 0.5]); }
      ctx.save(); ctx.beginPath(); ctx.moveTo(-100, -100); crest.forEach(([x, y]) => ctx.lineTo(x, y)); ctx.lineTo(2200, 2200); ctx.lineTo(2200, -100); ctx.closePath(); ctx.clip(); drawBuf(A, 1, 540, 960); ctx.restore();
      pencil(crest, { w: 60, col: '#2a6a8a', pass2: false }); pencil(crest.map(([x, y]) => [x - 20, y - 20]), { w: 16, col: '#e8f4ff', pass2: false });
      const m = crest[10]; salmonFish(m[0] - 80, m[1] - 120 - Math.sin(e * 3.14) * 140, 1.3, -0.7, { key: 27499 }); });
  } };
})();
