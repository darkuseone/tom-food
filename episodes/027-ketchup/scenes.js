/* Выпуск 027 — Кетчуп. Сцены, годы/подписи карточки рецепта, реестры для миров. */
const SUBTITLE = 'история: кетчуп';
const SAT = 1.1;
const BLOOM = 0.12;                                         // свечение только самых ярких мест (ТОМ-ТУР 12.11.2026: больше — ореолы и мыло)
const JUICE = 0.2;                                          // «сочность» итогового кадра: +контраст и насыщенность
const SAFE = true;                                          // безопасная зона TikTok/Shorts (владелец, 23.10.2026): HUD ниже чёлки и дальше от краёв
const CAM_SMOOTH = true;                                    // 19.11.2026: плавная кинокамера — сплайн через ключи, без панч-зумов (lib/direct.js)
const ENDCARD = true;                                       // владелец 03.11.2026: плашка «ПОДПИШИСЬ» в конце обязательна (тает перед петлёй)
const LOOP = 0.4;                                           // тест v1: последние 0.4 с перетекают в первый кадр — ролик зацикливается
const HOOK_LINES = ['КЕТЧУП БЕЗ', 'ПОМИДОРОВ?!'];                     // текст-хук первых ~2.5 с, ≤3 слов в строке
const YR = { hook: ['', ''], heinz: ['1876 → 1906', 'ФАБРИКА · ПРОЗРАЧНОЕ СТЕКЛО'], bottle: ['СЕГОДНЯ', 'ВНУТРИ БУТЫЛКИ'], pills: ['1830-е', 'АПТЕКА · ТОМАТ-ЛЕКАРСТВО'], philly: ['1812', 'ФИЛАДЕЛЬФИЯ'], england: ['XVIII в.', 'АНГЛИЯ · БЕЗ ТОМАТОВ'], ship: ['XVII–XVIII в.', 'ИЗ АЗИИ'], canton: ['ИСТОКИ', 'ЮЖНЫЙ КИТАЙ · КЭ-ЦАП'], today: ['СЕГОДНЯ', 'КАРТОШКА ИЛИ МАКАРОНЫ?'], button: ['', ''] };
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
/* карточка рецепта (перемотка назад): [строка, когда дописать, когда зачеркнуть, метка] */
const RECIPE = [
  ['томат + уксус + сахар', wtS('s1', 'томат,'), null, 'new'],
  ['краска из угля', wtS('s2', 'угольной'), wtS('s2', 'прозрачном!'), '?'],
  ['ползёт 45 м/ч', wtS('s3', 'сорок'), null, null],
  ['томат — лекарство?!', wtS('s4', 'аптеке'), wtS('s5', 'ноль,'), '?'],
  ['1812: первый томатный', wtS('s6', '1812-м,'), null, 'new'],
  ['грибы · орехи · устрицы', wtS('s7', 'грибов,'), null, null],
  ['томатов — нет!', wtS('s7', 'Помидоры'), null, '?'],
  ['★ рыбный рассол', wtS('s9', 'рыбный'), null, 'new'],
];
/* шкала ингредиентов слева — перемотка: сверху сегодня, вниз — в прошлое */
const INGR = [
  ['tomato', 'томат', wtS('s1', 'томат,'), wtS('s7', 'Помидоры'), 'сегодня'],
  [(s, t) => INGR_C27.vinegar(s, t), 'уксус', wtS('s1', 'уксус'), null, ''],
  [(s, t) => INGR_C27.sugar(s, t), 'сахар', wtS('s1', 'сахар.'), null, ''],
  [(s, t) => INGR_C27.coal(s, t), 'угольная краска', wtS('s2', 'угольной'), wtS('s2', 'прозрачном!'), '1900'],
  [(s, t) => INGR_C27.pill(s, t), 'пилюли', wtS('s5', 'Пилюли'), wtS('s5', 'ноль,'), '1830-е'],
  [(s, t) => INGR_C27.shroom(s, t), 'грибы', wtS('s7', 'грибов,'), null, 'XVIII в.'],
  [(s, t) => INGR_C27.walnut(s, t), 'орехи', wtS('s7', 'орехов'), null, ''],
  [(s, t) => INGR_C27.oyster(s, t), 'устрицы', wtS('s7', 'устриц.'), null, ''],
  [(s, t) => INGR_C27.fish(s, t), 'рыба ★', wtS('s9', 'рыбный'), null, 'истоки'],
];
const INGR_OPT = { from: S0.heinz + 0.3, n: 9, rh: 84 };
