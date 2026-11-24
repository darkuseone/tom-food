/* 027 — `hook`: «Кетчуп — вовсе не про помидоры! Я проверил его имя. Угадаешь, про что? / Откусим историю!» ВАУ-КАДР: замедленная капля
   кетчупа падает на золотую картошку фри — корона брызг на весь кадр, затем отъезд: ночная придорожная закусочная (неоновая вывеска DINER,
   хромированная стойка, табуреты, музыкальный автомат, окно-витрина с машиной и дождём), Том-повар закусочной в пилотке с кульком фри.
   По словам: «помидоры!» — помидор на стойке получает красный штамп ✗; «проверил его имя» — Том подносит лупу к этикетке бутылки, буквы
   KETCHUP дрожат и съезжают; «Угадаешь» — «?» над бутылкой; «Откусим» — Том макает фри и кусает. Главный свет — тёплая лампа над стойкой,
   второй — розово-голубой неон за окном. Финал `button` — продолжение today. */
(() => {
  EV.hk_tom = wtw('h1', 'помидоры!');
  EV.hk_check = wtw('h1', 'проверил');
  EV.hk_name = wtw('h1', 'имя.');
  EV.hk_q = wtw('h1', 'Угадаешь,');
  EV.hk_bite = wtw('h2', 'Откусим');
  SHAKES.push([EV.hk_tom + 0.1, 0.15, 7], [EV.hk_bite + 0.05, 0.14, 6]);
  KEYW.push('помидоры!');
  const pk = t => sm(clamp((t - 0.7) / 1.0));

  function street(t) {                                                    // за витриной: ночная дорога, дождь, машина, бензоколонка, неон
    vgrad(-500, 900, ['#0e0e2a', '#2a1e4a', '#3a2a5a']); rect(-500, 520, 2200, 400, { wash: '#1a1a24', washA: 1, line: false }); for (let i = 0; i < 8; i++) pencil([[-400 + i * 260, 640], [-300 + i * 260, 640]], { w: 6, col: '#e8d040', a: 0.6, pass2: false });
    const cx = ((t * 120) % 2400) - 900; push(cx, 600, 1); blob([[-160, 0], [-150, -50], [-80, -60], [-50, -110], [60, -110], [100, -60], [170, -50], [180, 0]], { wash: '#3a8ab8', washA: 1, w: 2.4, col: '#0a1a2a' }); ell(-90, 6, 30, 30, { wash: '#1a1a1a', washA: 1, w: 2 }); ell(110, 6, 30, 30, { wash: '#1a1a1a', washA: 1, w: 2 }); glow(180, -30, 80, 'rgba(255,240,180,1)', 0.3); pop();
    push(900, 520, 1); rect(-60, -200, 120, 200, { wash: '#c8302a', washA: 1, w: 2 }); rect(-40, -170, 80, 50, { wash: '#f8f4e8', washA: 1, w: 1 }); txt('GAS', 0, -134, 30, { font: 'Osw', col: '#c8302a' }); pop();
    const r = rng(hsh(FRAME, 27200)); for (let i = 0; i < 40; i++) { const x = -400 + r() * 1800, y = -400 + r() * 1300; pencil([[x, y], [x - 6, y + 36]], { w: 1.4, col: '#a8c0ff', a: 0.35, pass2: false }); }
  }
  function diner(t) {                                                     // стены закусочной: плитка шахматкой, витрина, неон, меню, автомат
    vgrad(-500, 1500, ['#e8e0c8', '#f4ecd8', '#e0d4b8']); for (let i = 0; i < 14; i++) for (let j = 0; j < 5; j++) rect(-500 + i * 160, 1000 + j * 80, 80, 80, { wash: (i + j) % 2 ? '#1a1a1a' : '#f8f4ec', washA: 1, line: false });
    rect(-500, 960, 2200, 40, { wash: '#c8302a', washA: 1, w: 2, col: '#4a0a08' }); pencil([[-500, 980], [1700, 980]], { w: 3, col: '#e8e8f0', pass2: false });
    push(260, 520, 1); const w = rect(-320, -360, 640, 620, { wash: '#2a1e4a', washA: 1, w: 10, col: '#a8b0b8', key: 27210 }); ctx.save(); ctx.clip(w.path); push(-260, -520, 1); street(t); pop(); ctx.restore(); pencil([[0, -360], [0, 260]], { w: 8, col: '#a8b0b8', pass2: false }); pop();
    push(780, 360, 0.8); rect(-230, -70, 460, 140, { wash: '#1a1028', washA: 1, w: 3, col: '#a8b0b8' }); txt('DINER', 0, 34, 104, { font: 'Osw', col: '#ff5a8a' }); glow(0, 0, 260, 'rgba(255,90,150,1)', 0.2); hudBox('неон DINER', -230, -70, 230, 70); pop();
    push(820, 680, 0.9); rect(-180, -140, 360, 280, { wash: '#f8f4e8', washA: 1, w: 2.4, col: '#3a3a3a' }); txt('MENU', 0, -98, 34, { font: 'Osw', col: '#c8302a' }); const it = [['BURGER', '25¢'], ['FRIES', '10¢'], ['HOT DOG', '15¢'], ['SODA', '5¢']]; it.forEach(([a, b], i) => { txt(a, -60, -52 + i * 46, 26, { font: 'Hand', col: '#2a2a2a' }); txt(b, 120, -52 + i * 46, 26, { font: 'Hand', col: '#c8302a' }); }); pop();
    push(1180, 880, 1); const jb = blob([[-110, 0], [-110, -240], [-60, -320], [60, -320], [110, -240], [110, 0]], { wash: '#c8402a', washA: 1, w: 3, col: '#3a0a08', key: 27211 }); rect(-70, -220, 140, 120, { wash: '#f8d060', washA: 1, w: 2 }); for (let i = 0; i < 5; i++) pencil([[-60, -200 + i * 20], [60, -200 + i * 20]], { w: 2, col: '#c8802a', pass2: false }); glow(0, -260, 140, 'rgba(255,200,100,1)', 0.22); pop();
    for (let i = 0; i < 3; i++) { push(-80 + i * 480, 120, 1); pencil([[0, -400], [0, -80]], { w: 3, col: '#3a3a3a', pass2: false }); blob([[-70, -80], [-46, -130], [46, -130], [70, -80]], { wash: '#2a7a5a', washA: 1, w: 2 }); glow(0, -70, 120, 'rgba(255,230,170,1)', 0.25); pop(); }
  }
  function folk(t) {                                                      // посетители: дальнобойщик в кепке, девушка с молочным коктейлем
    human(80, 1300, 1.05, t, { body: '#3a5a8a', legs: '#2a2a3a', hair: '#3a2a1a', face: t > EV.hk_tom && t < EV.hk_q ? 'shock' : 'smile', armL: 'hold', armR: 'hold', look: 0.6, seed: 27220, hat: 'cap', hatCol: '#c8302a' });
    human(1070, 1300, 1.0, t, { body: '#f07aa0', legs: '#2a2a3a', hair: '#f0c060', face: t > EV.hk_bite ? 'grin' : 'smile', armL: 'hold', armR: 'hold', look: -0.6, seed: 27221, flip: -1 });
    push(1010, 1120, 1); blob([[-20, 0], [-26, -80], [26, -80], [20, 0]], { wash: '#f8e8f0', washA: 0.8, w: 2 }); ell(0, -84, 30, 16, { wash: '#ffffff', washA: 1, w: 1.4 }); pencil([[6, -90], [18, -150]], { w: 4, col: '#e8302a', pass2: false }); pop();
  }
  function counter(t) {                                                   // хромированная стойка, бутылка (герой), помидор со штампом, салфетки, кофейник
    const tb = rect(-500, 1440, 2200, 600, { wash: '#d8dce4', washA: 1, w: 3, col: '#5a6470', key: 27230 }); shadeG(tb.path, 0, 1440, 0, 1900, '#8a94a0', 0.45); pencil([[-500, 1446], [1700, 1446]], { w: 8, col: '#ffffff', a: 0.6, pass2: false }); rect(-500, 1470, 2200, 40, { wash: '#c8302a', washA: 1, line: false });
    ketchupBottle(380, 1450, 0.95, t, { key: 27231, rot: t > EV.hk_check && t < EV.hk_bite ? Math.sin(t * 20) * 0.02 : 0 });
    if (t > EV.hk_name) { const k = clamp((t - EV.hk_name) / 0.6); for (let i = 0; i < 7; i++) { const c = 'KETCHUP'[i]; push(330 + i * 16, 1336 - Math.sin(k * 3 + i) * 30 * k, 1, Math.sin(t * 4 + i) * 0.3 * k); txt(c, 0, 0, 22, { font: 'Osw', col: KC.red }); pop(); } }
    if (t > EV.hk_q && t < EV.hk_bite + 0.4) { push(380, 1020, popK(t, EV.hk_q, 0.35)); txt('?', 0, 0, 140, { font: 'Osw', col: '#ffe070' }); pop(); }
    tomato(140, 1450, 1.1, { key: 27232 }); if (t > EV.hk_tom) { const k = popK(t, EV.hk_tom, 0.3); push(140, 1400, k, -0.15); pencil([[-60, -60], [60, 60]], { w: 16, col: '#c8201a', pass2: false }); pencil([[60, -60], [-60, 60]], { w: 16, col: '#c8201a', pass2: false }); pop(); }
    push(1000, 1450, 1); rect(-50, -90, 100, 90, { wash: '#c8ccd4', washA: 1, w: 2 }); for (let i = 0; i < 6; i++) pencil([[-40, -80 + i * 12], [40, -80 + i * 12]], { w: 1.4, col: '#f8f8f8', pass2: false }); pop();
    push(1150, 1450, 1); blob([[-40, 0], [-50, -80], [-20, -120], [20, -120], [50, -80], [40, 0]], { wash: '#a8b0b8', washA: 1, w: 2 }); pencil(spline([[40, -80], [80, -100], [90, -130]], false, 4), { w: 6, col: '#8a949e', pass2: false }); for (let i = 0; i < 2; i++) { const ph = (t * 0.6 + i * 0.5) % 1; ell(0, -140 - ph * 80, 14 + ph * 10, 10, { wash: '#ffffff', washA: 0.3 * (1 - ph), line: false }); } pop();
    castShadow(640, 1450, 320, 90, 0.5, 0.25);
  }
  function macro(t) {                                                     // ВАУ: замедленная капля кетчупа на фри, корона брызг → отъезд
    const k = pk(t); if (k >= 1) return; const a = 1 - sm(clamp((k - 0.7) / 0.3));
    scr(() => { ctx.save(); ctx.globalAlpha = a; vgrad(0, 1920, ['#2a1008', '#5a2a10', '#2a1008']);
      for (let i = 0; i < 7; i++) { push(540 + (i - 3) * 150 * (1 - k * 0.7), 1500 - k * 200, 3.2 - k * 2.4, -0.5 + i * 0.16); rect(-30, -280, 60, 360, { wash: '#f4c040', washA: 1, w: 4, col: '#8a5a08' }); pencil([[-18, -260], [-18, 60]], { w: 6, col: '#ffe8a0', a: 0.6, pass2: false }); pop(); }
      const dy = Math.min(1, t / 0.55); if (dy < 1) { ell(540, lerp(200, 1100, dy * dy), 60, 90, { wash: KC.red, washA: 1, w: 3, col: KC.redD }); ell(520, lerp(200, 1100, dy * dy) - 30, 16, 26, { wash: '#ffffff', washA: 0.6, line: false }); }
      else { const q = clamp((t - 0.55) / 0.6); for (let i = 0; i < 14; i++) { const an = -3.0 + i * 0.22; ell(540 + Math.cos(an) * 360 * q, 1100 + Math.sin(an) * 420 * q + q * q * 260, 30 * (1 - q * 0.5), 44 * (1 - q * 0.5), { wash: KC.red, washA: 1, w: 2, col: KC.redD }); } blob([[340, 1110], [420, 1040], [540, 1020], [660, 1040], [740, 1110], [540, 1160]], { wash: KC.red, washA: 1, w: 3, col: KC.redD }); }
      ctx.restore(); });
  }
  WORLD.hook = (t, u, cat) => {
    lay(10, () => { diner(t); haze('#ffd8c0', 0.04); });
    lay(2.6, () => { folk(t); });
    lay(1, () => { lightPool(560, 1460, 700, 130, 'rgba(255,220,170,1)', 0.36); cat(); counter(t); });
    lay(0.65, () => { push(-150, 1900, 1.4); for (let i = 0; i < 2; i++) { pencil([[i * 200, 0], [i * 200, -300]], { w: 14, col: '#a8b0b8', pass2: false }); ell(i * 200, -310, 90, 26, { wash: '#c8302a', washA: 1, w: 3, col: '#4a0a08' }); } pop();
      motes(10, [-200, 300, 1300, 1500], '#fff0e0', t, 27240, { sp: -6, sz: 3, a: 0.3, wob: 3 }); moodDark(560, 1000, 520, 1500, '#0a0818', 0.42); });
    macro(t);
  };
  DIR.hook = {
    outfit: 'diner', light: { side: -1, rim: '#ffd0e0' }, grade: ['#ffa080', 0.06],
    act: () => [[0, 'awe'], [EV.hk_tom, 'shock'], [EV.hk_check, 'suspicious'], [EV.hk_q, 'sideeye'], [EV.hk_bite, 'smug'], [EV.hk_bite + 0.25, 'grin']],
    pose: (t, u, b) => { const chk = t > EV.hk_check && t < EV.hk_q + 0.3, bite = t > EV.hk_bite;
      return Object.assign(b, { x: 680, y: 1600, s: 1.16, flip: true, look: chk ? [-0.9, 0.4] : [-0.2, 0.2], hand: chk ? [230, -230] : bite ? [80, -320] : [150, -240], handF: [-90, -230],
        prop: chk ? 'magP' : 'fryP', propAng: chk ? -0.3 : 0, squint: chk, tailUp: bite }); },
    cam: () => [[0, 560, 1060, 0.24], [EV.hk_tom, 540, 1100, 0.27], [EV.hk_check, 500, 1120, 0.29], [EV.hk_bite, 600, 1160, 0.32], [S1.hook, 620, 1170, 0.34]]
  };
})();
