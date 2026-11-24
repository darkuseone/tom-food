/* Выпуск 029 — Тирамису. Сцены, годы/подписи карточки рецепта, реестры для миров. */
const SUBTITLE = 'история: тирамису';
const SAT = 1.1;
const BLOOM = 0.12;                                         // свечение только самых ярких мест (ТОМ-ТУР 12.11.2026: больше — ореолы и мыло)
const JUICE = 0.2;                                          // «сочность» итогового кадра: +контраст и насыщенность
const SAFE = true;                                          // безопасная зона TikTok/Shorts (владелец, 23.10.2026): HUD ниже чёлки и дальше от краёв
const CAM_SMOOTH = true;                                    // 19.11.2026: плавная кинокамера — сплайн через ключи, без панч-зумов (lib/direct.js)
const ENDCARD = true;                                       // владелец 03.11.2026: плашка «ПОДПИШИСЬ» в конце обязательна (тает перед петлёй)
const LOOP = 0.4;                                           // тест v1: последние 0.4 с перетекают в первый кадр — ролик зацикливается
const HOOK_LINES = ['ТИРАМИСУ —', 'ВСЕГО 45?!'];                     // текст-хук первых ~2.5 с, ≤3 слов в строке
const YR = { hook: ['', ''], nonna: ['ДАВНО', 'СБАТУДИН · ЖЕЛТКИ С САХАРОМ'], treviso: ['≈ 1970', 'ВЕРСИЯ 1 · ТРЕВИЗО'], menu: ['1972 · 1981', 'МЕНЮ И ЖУРНАЛ'], tolmezzo: ['1950-е', 'ВЕРСИЯ 2 · ФРИУЛИ'], swap: ['1950-е', 'ТОЛЬМЕЦЦО · ЗАМЕНЫ'], layers: ['РЕЦЕПТ', 'СЛОИ'], name: ['ИМЯ', 'ТИРЕМЕ СУ'], verdict: ['ИТОГ', 'ФРИУЛИ : ТРЕВИЗО'], today: ['СЕГОДНЯ', 'КОФЕ ИЛИ ЛИКЁР?'], button: ['', ''] };
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
const RECIPE = [
  ['желтки + сахар', wtS('s1', 'желтки,'), null, 'new'],
  ['+ маскарпоне (Тревизо)', wtS('s2', 'маскарпоне'), null, 'new'],
  ['1972 меню · 1981 журнал', wtS('s3', '1972-м'), null, null],
  ['Фриули: 1950-е', wtS('s4', '1950-х!'), null, '?'],
  ['масло → маскарпоне', wtS('s5', 'маскарпоне,'), null, 'new'],
  ['ликёр → кофе', wtS('s5', 'кофе.'), null, 'new'],
  ['савоярди · крем · какао', wtS('s6', 'слоями:'), null, null],
  ['★ рецепт — Фриули, слава — Тревизо', wtS('s8', 'Фриули,'), null, 'new'],
];
const INGR = [
  [(s, t) => INGR_C29.yolk(s, t), 'желтки', wtS('s1', 'желтки,'), null, 'давно'],
  [(s, t) => INGR_C29.sugar(s, t), 'сахар', wtS('s1', 'сахаром.'), null, ''],
  [(s, t) => INGR_C29.butter(s, t), 'масло', wtS('s5', 'торт,'), wtS('s5', 'маскарпоне,'), '1950-е'],
  [(s, t) => INGR_C29.masc(s, t), 'маскарпоне', wtS('s2', 'маскарпоне'), null, ''],
  [(s, t) => INGR_C29.liqueur(s, t), 'ликёр', wtS('s5', 'красный'), wtS('s5', 'кофе.'), ''],
  [(s, t) => INGR_C29.coffee(s, t), 'кофе', wtS('s5', 'кофе.'), null, ''],
  [(s, t) => INGR_C29.sav(s, t), 'савоярди', wtS('s6', 'печенье'), null, ''],
  [(s, t) => INGR_C29.cocoa(s, t), 'какао', wtS('s6', 'какао.'), null, ''],
];
const INGR_OPT = { from: S0.nonna + 0.3 };
