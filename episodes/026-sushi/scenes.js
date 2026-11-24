/* Выпуск 026 — Суши. Сцены, годы/подписи карточки рецепта, реестры для миров. */
const SUBTITLE = 'история: суши';
const SAT = 1.1;
const BLOOM = 0.12;                                         // свечение только самых ярких мест (ТОМ-ТУР 12.11.2026: больше — ореолы и мыло)
const JUICE = 0.2;                                          // «сочность» итогового кадра: +контраст и насыщенность
const SAFE = true;                                          // безопасная зона TikTok/Shorts (владелец, 23.10.2026): HUD ниже чёлки и дальше от краёв
const CAM_SMOOTH = true;                                    // 19.11.2026: плавная кинокамера — сплайн через ключи, без панч-зумов (lib/direct.js)
const ENDCARD = true;                                       // владелец 03.11.2026: плашка «ПОДПИШИСЬ» в конце обязательна (тает перед петлёй)
const LOOP = 0.4;                                           // тест v1: последние 0.4 с перетекают в первый кадр — ролик зацикливается
const HOOK_LINES = ['КИСЛЫЙ', 'РИС?!'];                     // текст-хук первых ~2.5 с, ≤3 слов в строке
const YR = { hook: ['', ''], paddy: ['ДРЕВНОСТЬ', 'АЗИЯ · РИСОВЫЕ ПОЛЯ'], biwa: ['ДО СИХ ПОР', 'ЯПОНИЯ · ФУНАДЗУСИ'], wait: ['XV–XVI в.', 'ЕДЯТ И РИС'], edo: ['1824', 'ЭДО (ТОКИО) · НИГИРИ'], inside: ['1824', 'ВНУТРИ НИГИРИ'], toro: ['1800-е → 2019', 'ЖИРНЫЙ ТУНЕЦ'], norway: ['1985', 'НОРВЕГИЯ · ЛОСОСЬ'], vinegar: ['XVII–XVIII в.', 'УКСУС ВМЕСТО БРОЖЕНИЯ'], today: ['СЕГОДНЯ', 'НИГИРИ ИЛИ РОЛЛЫ?'], button: ['', ''] };
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
  ['рыба + соль + рис', wtS('s1', 'рыбу'), null, 'new'],
  ['рис — выбросить', wtS('s1', 'выбрасывали!'), wtS('s3', 'рис'), '?'],
  ['бродит до 3 лет', wtS('s2', 'бродят'), wtS('s3', 'надоело'), null],
  ['рис — съесть!', wtS('s3', 'есть'), null, 'new'],
  ['рис рукой, рыба сверху', wtS('s4', 'слепил'), null, 'new'],
  ['жирный тунец — кошке', wtS('s6', 'выкидывали:'), wtS('s7', 'продали'), '?'],
  ['лосось — из Норвегии', wtS('s8', 'норвежцев,'), null, 'new'],
  ['★ уксус = брожение за минуту', wtS('s9', 'заменил'), null, 'new'],
];
/* шкала ингредиентов слева (engine/core.js ingrStrip) */
const INGR = [
  [(s, t) => INGR_C26.fish(s, t), 'рыба', wtS('s1', 'рыбу'), null, 'древность'],
  ['salt', 'соль', wtS('s1', 'соль'), null, ''],
  [(s, t) => INGR_C26.rice(s, t), 'рис', wtS('s1', 'рис'), wtS('s1', 'выбрасывали!'), ''],
  [(s, t) => INGR_C26.rice(s, t), 'рис — едят', wtS('s3', 'рис'), null, 'XV в.'],
  [(s, t) => INGR_C26.tuna(s, t), 'жирный тунец', wtS('s6', 'тунца'), wtS('s6', 'выкидывали:'), '1800-е'],
  [(s, t) => INGR_C26.tuna(s, t), 'торо: $3 млн', wtS('s7', 'миллиона'), null, '2019'],
  [(s, t) => INGR_C26.salmon(s, t), 'лосось', wtS('s8', 'лосось'), null, '1985'],
  [(s, t) => INGR_C26.vinegar(s, t), 'уксус ★', wtS('s9', 'уксус?'), null, ''],
];
const INGR_OPT = { from: S0.paddy + 0.3 };
