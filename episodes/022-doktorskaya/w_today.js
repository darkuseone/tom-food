/* 022 — `today` (+ `button` — тот же кадр): «Недавно у нас проверили 40 марок «Докторской». Бумаги — ни в одной! / Знак качества — только у девяти.
   Ты её жаришь — или на бутерброд?» / «Подпишись — выпишу рецепт на следующую!» Утренняя кухня сегодня: окно с солнцем и двором (берёзы, качели,
   машины), белый кафель-«кабанчик», открытые полки (банки, кружки, специи), холодильник в магнитах с листом «ПРОВЕРКА: 40 МАРОК», чайник, тостер,
   радио, часы, цветок; соседка-бабушка в окне напротив машет, кот на подоконнике. На плите (герой-предмет) — сковорода: жареные кружки докторской
   «чашечками» с румяным краем, глазунья, масло пузырится, пар; на доске — батон, нарезка, хлеб, бутерброд на тарелке, кружка чая.
   Том в клетчатой рубашке и фартуке: в одной лапе вилка с жареным кружком, другой держит бутерброд. По словам: «40 марок» — на холодильнике
   проступает «40»; «Бумаги» — в облачке рулон бумаги перечёркивается «0»; «девяти.» — крупная плашка «9 из 40» со звёздочкой-знаком;
   «жаришь» — Том поднимает вилку, сковорода шкворчит, брызги; «бутерброд?» — поднимает бутерброд; финал (button) — Том откусывает бутерброд, подмигивает,
   «ПОДПИШИСЬ» всплывает поверх. Переход В сцену: ломтик колбасы шлёпается на сковороду — брызги масла открывают кадр. Главный свет — окно (утреннее
   солнце слева), второй — голубое пламя плиты. */
(() => {
  EV.td_check = wtw('t1', '40');
  EV.td_paper = wtw('t1', 'Бумаги');
  EV.td_nine = wtw('t2', 'девяти.');
  EV.td_fry = wtw('t2', 'жаришь');
  EV.td_sand = wtw('t2', 'бутерброд?');
  EV.bt_bite = wtw('x1', 'выпишу');
  SHAKES.push([EV.td_nine + 0.1, 0.12, 6], [EV.td_fry + 0.1, 0.1, 4]);
  KEYW.push('одной!', 'девяти.', 'жаришь');
  function yard(t) {                                                     // за окном: утро, берёзы, качели, дом напротив с бабушкой, машины
    vgrad(-500, 700, ['#7ab8e8', '#b8dcf0', '#f0f4e8']); ell(-160, -260, 70, 70, { wash: '#fff8d8', washA: 1, line: false }); glow(-160, -260, 240, 'rgba(255,248,210,1)', 0.35);
    for (let i = 0; i < 3; i++) { const x = ((-200 + i * 330 + t * 10) % 1200) - 300; blob([[x, -200 + i * 40], [x + 70, -240 + i * 40], [x + 180, -230 + i * 40], [x + 230, -190 + i * 40]], { wash: '#ffffff', washA: 0.8, line: false }); }
    const b = rect(80, -120, 420, 640, { wash: '#e8d8c0', washA: 1, w: 1.6, col: '#6a5a48' }); shadeG(b.path, 500, 0, 80, 0, '#a89078', 0.35); windows(100, -100, 380, 560, 5, 6, 23201, 0.2, '#fff0c0', '#8ab0d0', 0.85);
    push(260, 196, 1); rect(-44, -54, 88, 88, { wash: '#fff4d8', washA: 1, w: 1.4 }); human(0, 34, 0.24, t, { body: '#7a3a5a', hair: '#d8d8d8', face: 'smile', armR: 'wave', seed: 23202, hat: 'scarf', hatCol: '#c8341e' }); pop();
    for (const bx of [-300, -80]) { pencil([[bx, 600], [bx + 6, -100]], { w: 14, col: '#f4f0e8' }); for (let q = 0; q < 6; q++) pencil([[bx - 4, 520 - q * 100], [bx + 8, 520 - q * 100]], { w: 4, col: '#2a2a2a', pass2: false }); for (let q = 0; q < 5; q++) blob([[bx - 80 + q * 6, -60 + q * 80], [bx - 30, -100 + q * 80], [bx + 60, -80 + q * 80], [bx + 80, -20 + q * 80], [bx, 10 + q * 80]], { wash: q % 2 ? '#8ac860' : '#a8d878', washA: 0.95, w: 1, col: '#4a7a2a' }); }
    push(-200, 520, 1); pencil([[-60, 0], [-40, -160], [40, -160], [60, 0]], { w: 6, col: '#c8341e', pass2: false }); const sw = Math.sin(t * 2) * 20; pencil([[-20, -160], [-20 + sw, -60]], { w: 2, col: '#3a3a3a', pass2: false }); pencil([[20, -160], [20 + sw, -60]], { w: 2, col: '#3a3a3a', pass2: false }); rect(-30 + sw, -62, 60, 10, { wash: '#2a6aa8', washA: 1, w: 1 }); pop();
    rect(-500, 540, 1200, 200, { wash: '#8a8a8a', washA: 1, line: false }); const cx = ((t * 120) % 1400) - 500; push(cx, 560, 1); rect(-80, -50, 160, 40, { wash: '#e8b030', washA: 1, w: 1.6, col: '#3a2a08' }); rect(-40, -80, 80, 34, { wash: '#e8b030', washA: 1, w: 1.6 }); for (const wx of [-50, 50]) ell(wx, -8, 14, 14, { wash: '#1a1a1a', washA: 1, w: 1 }); pop();
  }
  function wall(t) {                                                     // кафель-кабанчик, окно, полки, холодильник, часы, радио
    vgrad(-800, 1500, ['#f0ece2', '#f8f4ea', '#e4dcc8']);
    for (let y = 400; y < 1500; y += 46) for (let x = -600 + ((y / 46) % 2) * 50; x < 1800; x += 100) rect(x, y, 96, 42, { wash: '#ffffff', washA: 0.5, w: 1.2, col: '#c8c4b8' });
    push(160, 20, 1); const w = rect(-300, -400, 600, 680, { wash: '#7ab8e8', washA: 1, w: 14, col: '#f8f8f4', key: 23210 }); ctx.save(); ctx.clip(w.path); push(0, -40, 1); yard(t); pop(); ctx.restore(); pencil([[0, -400], [0, 280]], { w: 10, col: '#f8f8f4' }); rect(-330, 280, 660, 34, { wash: '#f8f8f4', washA: 1, w: 2, col: '#8a8a7a' });
    push(220, 280, 1); const ct = blob([[-60, 0], [-50, -50], [-10, -60], [30, -50], [50, 0]], { wash: '#c88a3a', washA: 1, w: 1.8, col: '#3a1a08' }); ell(30, -60, 24, 20, { wash: '#c88a3a', washA: 1, w: 1.6 }); for (const sd of [-1, 1]) poly([[30 + sd * 12, -72], [30 + sd * 18, -90], [30 + sd * 4, -76]], { wash: '#c88a3a', washA: 1, w: 1.2 }); pencil(spline([[-60, 0], [-90, -20 + Math.sin(t * 3) * 10], [-80, -60]], false, 5), { w: 7, col: '#c88a3a', pass2: false }); pop();
    for (const [px, c] of [[-200, '#d8243a'], [-110, '#f0a020']]) { push(px, 280, 1); rect(-24, -44, 48, 44, { wash: '#b0643a', washA: 1, w: 1.4 }); for (let i = 0; i < 4; i++) { pencil([[(i - 1.5) * 8, -44], [(i - 1.5) * 14, -90]], { w: 3, col: '#3a7a3a', pass2: false }); ell((i - 1.5) * 14, -94, 10, 8, { wash: c, washA: 1, w: 1 }); } pop(); } pop();
    for (const sy of [470, 690]) { rect(-20, sy, 600, 16, { wash: '#a87a4a', washA: 1, w: 1.6, col: '#3a2010' }); for (let i = 0; i < 8; i++) { const x = 10 + i * 72, k = (i + sy) % 3; if (k === 0) { const j = rect(x - 22, sy - 80, 44, 80, { wash: '#e8e4dc', washA: 0.8, w: 1.4, col: '#6a6a6a' }); rect(x - 20, sy - 50, 40, 46, { wash: ['#f4d040', '#c8701a', '#8a5a2a'][i % 3], washA: 0.85, line: false }); rect(x - 24, sy - 90, 48, 12, { wash: '#c8241e', washA: 1, w: 1 }); } else if (k === 1) { const m = rect(x - 22, sy - 54, 44, 54, { wash: ['#2a6aa8', '#f4f0e6', '#c8341e'][i % 3], washA: 1, w: 1.4, col: '#2a2a2a' }); pencil(spline([[x + 22, sy - 44], [x + 36, sy - 30], [x + 22, sy - 16]], false, 4), { w: 4, col: '#8a8a8a', pass2: false }); } else { rect(x - 12, sy - 70, 24, 70, { wash: '#f4ecd8', washA: 1, w: 1.2, col: '#6a6a6a' }); rect(x - 12, sy - 80, 24, 12, { wash: '#2a2a2a', washA: 1, w: 1 }); } } }
    push(1100, 900, 1); const fr = rect(-200, -900, 400, 1500, { wash: '#f4f6f4', washA: 1, w: 3, col: '#6a6a6a', key: 23211 }); shadeG(fr.path, 200, 0, -200, 0, '#b8bcb8', 0.45); pencil([[-200, -300], [200, -300]], { w: 3, col: '#8a8a8a', pass2: false }); rect(160, -700, 18, 260, { wash: '#c8c8d0', washA: 1, w: 1.4 }); rect(160, -200, 18, 340, { wash: '#c8c8d0', washA: 1, w: 1.4 });
    const ch = t > EV.td_check; rect(-160, -640, 230, 300, { wash: '#ffffff', washA: 1, w: 1.6, col: '#5a5a5a' }); txt('ПРОВЕРКА', -45, -600, 24, { font: 'Osw', col: '#2a2a2a' }); txt('«Докторская»', -45, -570, 18, { font: 'Hand', col: '#2a2a2a' });
    if (ch) { txt('марок: 40', -45, -520, 24, { font: 'Hand', col: '#2a2a3a', reveal: clamp((t - EV.td_check) / 0.4) }); } if (t > EV.td_paper) txt('бумага: 0', -45, -476, 24, { font: 'Hand', col: '#2a6a2a', reveal: clamp((t - EV.td_paper) / 0.4) }); if (t > EV.td_nine) txt('знак: 9 ★', -45, -432, 24, { font: 'Hand', col: '#c8241e', reveal: clamp((t - EV.td_nine) / 0.4) });
    ell(-46, -650, 14, 14, { wash: '#c8241e', washA: 1, w: 1.2 }); for (const [mx, my, c] of [[100, -560, '#f4d040'], [40, -200, '#2a8a4a'], [-120, -150, '#c8341e'], [120, -100, '#2a6aa8']]) { ell(mx, my, 22, 22, { wash: c, washA: 1, w: 1.4 }); ell(mx - 6, my - 6, 6, 4, { wash: '#ffffff', washA: 0.7, line: false }); } rect(-120, -60, 120, 150, { wash: '#f4ecd0', washA: 1, w: 1.2, col: '#6a5a3a' }); txt('купить:', -60, -30, 16, { font: 'Hand', col: '#2a2a2a' }); txt('колбаса', -60, 0, 16, { font: 'Hand', col: '#2a2a2a' }); txt('хлеб', -60, 26, 16, { font: 'Hand', col: '#2a2a2a' }); pop();
    push(720, 230, 1); ell(0, 0, 54, 54, { wash: '#ffffff', washA: 1, w: 3, col: '#2a2a2a' }); pencil([[0, 0], [24, -26]], { w: 4, col: '#1a1a1a', pass2: false }); pencil([[0, 0], [0, -40]], { w: 3, col: '#1a1a1a', pass2: false }); pencil([[0, 0], [Math.cos(t * 0.6) * 40, Math.sin(t * 0.6) * 40]], { w: 1.6, col: '#c8241e', pass2: false }); pop();
    push(720, 440, 1); const rd = rect(-70, -50, 140, 100, { wash: '#c8341e', washA: 1, w: 2, col: '#4a0a04' }); for (let i = 0; i < 5; i++) pencil([[-60, -36 + i * 16], [10, -36 + i * 16]], { w: 3, col: '#5a0a04', pass2: false }); ell(40, 0, 18, 18, { wash: '#f4f0e6', washA: 1, w: 1.4 }); pencil([[50, -50], [80, -110]], { w: 3, col: '#5a5a5a', pass2: false }); pop();
  }
  function stove(t) {                                                    // плита, сковорода с докторской (герой), чайник, тостер
    push(120, 1300, 1); const s = rect(-260, -300, 520, 300, { wash: '#2a2a2e', washA: 1, w: 3, col: '#000000', key: 23220 }); metalG(s.path, -40, -200, 300, '#6a6a70', '#2a2a2e', '#000000', 0.5); rect(-240, -320, 480, 24, { wash: '#3a3a40', washA: 1, w: 1.6 }); for (let i = 0; i < 4; i++) ell(-180 + i * 120, -120, 14, 14, { wash: '#c8c8d0', washA: 1, w: 1.4 }); pop();
    for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283; push(60, 990, 1); pencil([[Math.cos(a) * 40, Math.sin(a) * 10], [Math.cos(a) * 52, Math.sin(a) * 12 - 18 - Math.sin(t * 20 + i) * 4]], { w: 5, col: '#5ab0ff', a: 0.85, pass2: false }); pop(); } glow(60, 990, 100, 'rgba(90,170,255,1)', 0.28);
    push(60, 960, 1); const pot = rect(-90, -110, 180, 110, { wash: '#e8e8ea', washA: 1, w: 2.4, col: '#3a3a40' }); metalG(pot.path, -30, -60, 120, '#ffffff', '#c8c8d0', '#5a5a64', 0.6); ell(0, -110, 90, 16, { wash: '#b8b8c0', washA: 1, w: 1.6 }); for (let i = 0; i < 4; i++) ell(-60 + i * 40, -60, 8, 8, { wash: '#c8341e', washA: 0.9, line: false }); pop(); steamWisps(60, 820, 0.6, t, 3, 23229, 0.3);
    if (false) { const k = (t - EV.td_fry); const r = rng(23222); for (let i = 0; i < 14; i++) ell(80 + (r() - 0.5) * 300 * (k + 0.2), 900 - r() * 200 * k + 300 * k * k, 4, 4, { wash: '#ffe8a0', washA: 1 - k, w: 0.8, col: '#a8701a' }); }
    push(380, 1000, 1); const kt = blob([[-60, 0], [-64, -70], [-30, -110], [30, -110], [64, -70], [60, 0]], { wash: '#e8e8ea', washA: 1, w: 2.4, col: '#3a3a40', key: 23223 }); metalG(kt.path, -20, -70, 90, '#ffffff', '#c8c8d0', '#5a5a64', 0.7); pencil([[60, -60], [110, -90]], { w: 10, col: '#c8c8d0', pass2: false }); pencil(spline([[-40, -110], [0, -150], [40, -110]], false, 6), { w: 6, col: '#2a2a2a', pass2: false }); pop();
    push(1000, 1300, 1); const cb = rect(-120, -100, 240, 100, { wash: '#b8844a', washA: 1, w: 2, col: '#3a1a08' }); rect(-110, -96, 220, 20, { wash: '#c8945a', washA: 1, line: false }); pop();
    human(-200, 1310, 1.0, t, { body: '#5a7aa8', legs: '#2a2a3a', hair: '#2a1a0a', face: t > EV.td_nine ? 'grin' : 'calm', armL: 'hold', armR: t > EV.td_sand ? 'wave' : 'hold', look: 0.6, seed: 23224, flip: 1, prop: t < EV.td_sand ? 'phone' : undefined });
  }
  function table(t) {                                                    // стол: доска, батон, нарезка, хлеб, тарелка с бутербродами, кружка, солонка
    const tb = rect(-500, 1440, 2200, 700, { wash: '#d8b888', washA: 1, w: 3, col: '#5a3a18', key: 23230 }); shadeG(tb.path, 0, 1440, 0, 1900, '#8a6a3a', 0.35); for (let i = 0; i < 9; i++) pencil([[-500, 1470 + i * 44], [1700, 1476 + i * 44]], { w: 2, col: '#a8844a', a: 0.4, pass2: false });
    rect(-500, 1430, 2200, 16, { wash: '#a87a4a', washA: 1, w: 2, col: '#3a2010' });
    push(980, 1570, 1); const bd = rect(-220, -40, 440, 90, { wash: '#c8945a', washA: 1, w: 2, col: '#4a2a10' }); shadeG(bd.path, 0, 50, 0, -40, '#8a5a2a', 0.3); pop();
    doktorLoaf(930, 1540, 0.62, 0.03, { key: 23231, cut: 1, label: 'ДОКТОРСКАЯ', sub: 'ГОСТ' }); for (let i = 0; i < 4; i++) doktorSlice(1130 + i * 26, 1590 - i * 4, 0.55, 0.2 + i * 0.25, { flat: 0.42, key: 23232 + i });
    push(-200, 1600, 1); ell(0, 0, 150, 38, { wash: '#f8f8f4', washA: 1, w: 2, col: '#6a6a6a' }); ell(0, 0, 118, 28, { wash: 'rgba(0,0,0,0)', washA: 0, w: 2, col: '#c8241e' }); sandwichD(-50, -24, 0.62, -0.15, { key: 23236 }); sandwichD(50, -30, 0.62, 0.12, { key: 23237 }); pop();
    push(-60, 1560, 1); const mg = rect(-40, -90, 80, 90, { wash: '#2a6aa8', washA: 1, w: 2, col: '#0a2a4a' }); shadeG(mg.path, 40, 0, -40, 0, '#0a2a4a', 0.4); ell(0, -90, 40, 10, { wash: '#8a4a1a', washA: 1, w: 1.2 }); pencil(spline([[40, -70], [64, -50], [40, -24]], false, 4), { w: 6, col: '#2a6aa8', pass2: false }); txt('ТОМ', 0, -40, 18, { font: 'Osw', col: '#ffffff' }); pop(); steamWisps(-60, 1440, 0.5, t, 2, 23238, 0.3);
    friedPan(450, 1510, 1.1, t, { key: 23221, steam: 0.5 + (t > EV.td_fry && t < EV.td_fry + 1.2 ? 0.4 : 0) });
    if (t > EV.td_fry && t < EV.td_fry + 1) { const k = (t - EV.td_fry); const r = rng(23222); for (let i = 0; i < 14; i++) ell(450 + (r() - 0.5) * 340 * (k + 0.2), 1450 - r() * 220 * k + 300 * k * k, 4, 4, { wash: '#ffe8a0', washA: 1 - k, w: 0.8, col: '#a8701a' }); }
    castShadow(930, 1580, 260, 100, 0.6, 0.2); castShadow(450, 1560, 300, 90, 0.6, 0.22); lightPool(600, 1560, 700, 130, 'rgba(255,248,215,1)', 0.3);
  }
  function badge(t) {                                                    // облачко «бумага 0» и плашка «9 из 40»
    if (t > EV.td_paper && t < EV.td_nine) { const k = popK(t, EV.td_paper, 0.35); push(740, 950, k); blob([[-120, 0], [-100, -80], [0, -110], [100, -80], [120, 0], [40, 40], [-60, 40]], { wash: '#ffffff', washA: 0.95, w: 2.4, col: '#3a3a3a' }); rect(-70, -80, 60, 60, { wash: '#f4f2ec', washA: 1, w: 1.6, col: '#6a6a6a' }); ell(-70, -50, 10, 30, { wash: '#e8e4dc', washA: 1, w: 1.2 }); pencil([[-90, -90], [-10, -10]], { w: 7, col: '#c8241e', pass2: false }); pencil([[-10, -90], [-90, -10]], { w: 7, col: '#c8241e', pass2: false }); txt('0', 50, -20, 70, { font: 'Osw', col: '#2a6a2a' }); pop(); }
    if (t > EV.td_nine && t < EV.td_fry + 0.4) { const k = popK(t, EV.td_nine, 0.4); push(740, 950, k, -0.05); const p = rect(-190, -80, 380, 160, { wash: '#c8241e', washA: 1, w: 3, col: '#5a0a04' }); shadeG(p.path, 0, -80, 0, 80, '#7a0a04', 0.3); txt('9 из 40', 0, 34, 96, { font: 'Osw', col: '#fff4d8' }); ell(160, -70, 34, 34, { wash: '#f4d040', washA: 1, w: 2, col: '#6a4a08' }); txt('★', 160, -58, 34, { font: 'Osw', col: '#a8241e' }); pop(); }
  }
  function front(t) {                                                    // передний план: край кастрюли с крышкой справа, свисающее полотенце слева, пар
    push(1440, 2080, 1.5); const pt = rect(-140, -140, 280, 160, { wash: '#c8341e', washA: 1, w: 3, col: '#4a0a04', key: 23240 }); shadeG(pt.path, 140, 0, -140, 0, '#4a0a04', 0.45); for (let i = 0; i < 5; i++) ell(-90 + i * 45, -80, 9, 9, { wash: '#ffffff', washA: 0.9, line: false }); ell(0, -140, 140, 20, { wash: '#a8a8b0', washA: 1, w: 2 }); ell(0, -160, 20, 10, { wash: '#2a2a2a', washA: 1, w: 1.4 }); pop();
    const sw = Math.sin(t * 0.8) * 10; const tw = blob([[-420, 400], [-200, 400], [-210 + sw, 1100], [-230 + sw, 1280], [-420, 1280]], { wash: '#f4f0e6', washA: 1, w: 2, col: '#8a8270', key: 23241 }); ctx.save(); ctx.clip(tw.path); for (let y = 420; y < 1300; y += 60) pencil([[-420, y], [-190, y]], { w: 12, col: '#c8341e', a: 0.6, pass2: false }); ctx.restore(); shadeG(tw.path, -200, 0, -420, 0, '#a89a80', 0.4);
  }
  WORLD.today = (t, u, cat) => {
    lay(14, () => { wall(t); shaft(160, -360, 520, 2400, -0.4, 'rgba(255,248,215,1)', 0.15); haze('#fff8e8', 0.05); });
    lay(4, () => { stove(t); lightPool(300, 1300, 700, 150, 'rgba(255,248,215,1)', 0.22); castShadow(-200, 1310, 120, 150, 0.6, 0.2); });
    lay(1, () => { cat(); table(t); badge(t); });
    lay(0.6, () => { front(t); motes(16, [-100, 300, 1200, 1500], '#fffbe8', t, 23250, { sp: 5, sz: 3, a: 0.35, wob: 6 }); moodDark(640, 1150, 520, 1500, '#3a2a3a', 0.32); });
  };
  const stPose = (b) => Object.assign(b, { x: 640, y: 1590, s: 1.18, flip: 1, look: [0.2, -0.1], hand: [190, -300], handF: [-150, -260], prop: 'forkFryP', propAng: -0.1 });
  DIR.today = {
    outfit: 'homeA', light: { side: -1, rim: '#fff0c8' }, grade: ['#ffd890', 0.06],
    act: () => [[S0.today, 'grin'], [EV.td_paper, 'laugh'], [EV.td_nine, 'proud'], [EV.td_fry, 'smug'], [EV.td_sand, 'wink']],
    pose: (t, u, b) => { const fry = t > EV.td_fry - 0.1 && t < EV.td_sand, sand = t > EV.td_sand - 0.1;
      return Object.assign(stPose(b), { look: fry ? [0.6, -0.3] : sand ? [-0.5, -0.3] : [0, 0], hand: fry ? [180, -400] : [190, -300], handF: sand ? [-150, -400] : [-150, -260] }); },
    afterCat: (t, u, P) => { const bite = t > EV.bt_bite, hf = P.handF || [-150, -260]; const hx = P.x - hf[0] * P.s, hy = P.y + hf[1] * P.s; sandwichD(hx + 10, hy - 30, 0.62 * P.s, 0.15, { key: 23260, bite: bite ? 1 : 0 });
      if (bite && t < EV.bt_bite + 1.2) crumbs(hx, hy - 60, t, EV.bt_bite, 12, 23261, DK.crust); },
    cam: () => [[S0.today, 620, 1120, 0.28], [EV.td_paper, 580, 1100, 0.28], [EV.td_nine, 600, 1100, 0.3], [EV.td_fry, 560, 1120, 0.3], [EV.td_sand, 660, 1130, 0.3], [S1.today, 640, 1140, 0.32]]
  };
  WORLD.button = (t, u, cat) => WORLD.today(t, u, cat);
  DIR.button = Object.assign({}, DIR.today, { act: () => [[S0.button, 'grin'], [EV.bt_bite, 'laugh'], [LF('x1', 0.7), 'wink']], pose: (t, u, b) => Object.assign(stPose(b), { handF: t > EV.bt_bite - 0.15 && t < EV.bt_bite + 0.5 ? [-10, -340] : [-150, -300], squash: t > EV.bt_bite && t < EV.bt_bite + 0.12 ? 0.08 : 0 }),
    cam: () => { const L = DIR.today.cam().slice(-1)[0]; return [[S0.button, L[1], L[2], L[3]], [DUR, L[1], L[2] + 10, L[3] + 0.02]]; } });   // 14.11.2026: продолжение кадра today без скачка; ПОДПИШИСЬ всплывает поверх
  TRANS_IN.today = { a: 0.2, b: 0.5, runA: 1, fx(k, t, A, B) {          // ломтик шлёпается на сковороду — брызги масла открывают кадр
    drawBuf(A, 1, 540, 960); const fallK = clamp(k / 0.4), y = lerp(-200, 960, fallK * fallK);
    if (k < 0.4) scr(() => doktorSlice(540, y, 2.2, k * 6, { key: 23270 }));
    else { const e = sm((k - 0.4) / 0.6), R = lerp(140, 1500, e); inCircle(540, 960, R, () => drawBuf(B, 1, 540, 960)); scr(() => { pencil(spline(ellPts(540, 960, R, R, 0, 0, 40), true, 3), { w: 22, col: '#f8d070', a: 1 - e, pass2: false }); const r = rng(23271); for (let i = 0; i < 18; i++) { const a = r() * 6.283, d = R * (0.9 + r() * 0.5); ell(540 + Math.cos(a) * d, 960 + Math.sin(a) * d, 10 + r() * 14, 8 + r() * 10, { wash: '#ffe8a0', washA: 1 - e, w: 1, col: '#a8701a' }); } }); }
  } };
})();
