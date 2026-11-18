/* Выпуск 025 — Цеппелины. Сцены, годы/подписи карточки рецепта, реестры для миров. */
const SUBTITLE = 'история: цеппелины';
const SAT = 1.1;
const BLOOM = 0.12;                                         // свечение только самых ярких мест (ТОМ-ТУР 12.11.2026: больше — ореолы и мыло)
const JUICE = 0.2;                                          // «сочность» итогового кадра: +контраст и насыщенность
const SAFE = true;                                          // безопасная зона TikTok/Shorts (владелец, 23.10.2026): HUD ниже чёлки и дальше от краёв
const ENDCARD = true;                                       // владелец 03.11.2026: плашка «ПОДПИШИСЬ» в конце обязательна (тает перед петлёй)
const LOOP = 0.4;                                           // тест v1: последние 0.4 с перетекают в первый кадр — ролик зацикливается
const HOOK_LINES = ['БЛЮДО-', 'ДИРИЖАБЛЬ?!'];                     // текст-хук первых ~2.5 с, ≤3 слов в строке
const YR = { hook: ['', ''], airship: ['1900', 'ГРАФ ЦЕППЕЛИН'], names: ['ИМЯ', 'ЛИТВА · ПОЛЬША'], kitchen: ['ТЕСТО', 'ИНЖЕНЕРИЯ'], inside: ['НАЧИНКА', 'ВНУТРИ'], book: ['XIX в.', 'СТАРЫЕ КНИГИ'], canteen: ['1930–50-е', 'РЕЦЕПТЫ · СТОЛОВЫЕ'], prussia: ['XX в.', 'ОТКУДА ПРИЛЕТЕЛ'], today: ['2014+', 'ВСЕМИРНЫЙ ДЕНЬ'], button: ['', ''] };
const SC = SCN.map(([n, a, b]) => [n, a, b, YR[n][0], YR[n][1]]);
const S0 = {}, S1 = {}; SC.forEach(s => { S0[s[0]] = s[1]; S1[s[0]] = Math.min(s[2], DUR); });
const LS = k => VO[k], LE = k => VO[k] + VD[k], LF = (k, f) => VO[k] + VD[k] * f;
const EV = { h2: LS('h2'), hookEnd: Math.min(2.6, LE('h1') - 0.1) };
const SHAKES = [];
const YEARS = {};
const KEYW = ['историю!', 'откусим!'];
const DIR = {}, WORLD = {}, TRANS_IN = {};
const WT = (k, w) => { const n = s => s.toLowerCase().replace(/[^а-яёa-z0-9-]/g, ''); const c = CAPS.find(c => c.key === k && c.words.some(x => n(x) === n(w))) || CAPS.find(c => c.key === k && c.words.some(x => n(x).startsWith(n(w)))); return c ? c.t0 : LS(k); };
const wtS = (k, w) => { const n = s => s.toLowerCase().replace(/[^а-яёa-z0-9-]/g, ''); const c = CAPS.find(c => c.key === k && c.words.some(x => n(x) === n(w))) || CAPS.find(c => c.key === k && c.words.some(x => n(x).startsWith(n(w)))); if (!c) return LS(k);
  const i = c.words.findIndex(x => n(x).startsWith(n(w))), L = c.words.map(x => x.length + 1), tot = L.reduce((a, b) => a + b, 0), pre = L.slice(0, i).reduce((a, b) => a + b, 0); return c.t0 + (c.t1 - c.t0) * pre / tot; };
/* карточка рецепта: [строка, когда дописать, когда зачеркнуть, метка ('?' | 'new')]; видно последние 6 */
const RECIPE = [
  ['имя: «дирижабль»', wtS('s1', 'Цеппелины'), wtS('s2', '«большие'), '?'],
  ['по-литовски — «большие клёцки»', wtS('s2', '«большие'), null, 'new'],
  ['сырой тёртый + варёный картофель', wtS('s4', 'сырой'), null, 'new'],
  ['крахмал — обратно в тесто', wtS('s4', 'крахмал'), null, null],
  ['свинина · творог · грибы', wtS('s5', 'свинина,'), null, null],
  ['в старых книгах — нет', wtS('s6', 'нет'), null, '?'],
  ['★ рецепт из Пруссии, нач. XX в.', wtS('s7', 'Пруссии,'), null, 'new'],
];
/* шкала ингредиентов слева (engine/core.js ingrStrip) */
const INGR = [
  [(s, t) => INGR_C.cep(s, t), 'клёцка', wtS('s1', 'картофельные'), null, '1900'],
  [(s, t) => INGR_C.grated(s, t), 'тёртый картоф.', wtS('s4', 'сырой'), null, 'тесто'],
  ['potato', 'варёный картоф.', wtS('s4', 'трут,'), null, ''],
  [(s, t) => INGR_C.starch(s, t), 'крахмал', wtS('s4', 'крахмал'), null, ''],
  ['meat', 'свинина', wtS('s5', 'свинина,'), null, 'начинка'],
  [(s, t) => INGR_C.curd(s, t), 'творог', wtS('s5', 'творог'), null, ''],
  [(s, t) => INGR_C.mushroom(s, t), 'грибы', wtS('s5', 'грибы,'), null, ''],
  [(s, t) => INGR_C.spirg(s, t), 'шкварки', wtS('s5', 'шкварки.'), null, 'сверху'],
  ['smetana', 'сметана', wtS('s5', 'шкварки.') + 0.5, null, ''],
];
const INGR_OPT = { from: S0.airship + 0.3 };
/* шкала ингредиентов слева (17.11.2026, engine/core.js ingrStrip; docs/ref-api.md §Инфографика) — раскомментировать: [иконка, подпись, появилась, зачёркнута|null, эпоха]
const INGR = [
  ['beet', 'свёкла', WT('s2', 'свёкла'), null, 'XVIII'],
  ['kvas', 'квас', WT('s1', 'квас'), WT('s4', 'томат'), ''],
];
const INGR_OPT = { from: S0.<вторая сцена> };   // необязательно
   инфо-плашка «было → стало»: в DIR.<сцена> — hud: t => infoPlate(t, t0, t1, { kind: 'swap', title: 'КИСЛИНКА', a: 'КВАС', b: 'ТОМАТ', ia: 'kvas', ib: 'tomato', tb }) */
