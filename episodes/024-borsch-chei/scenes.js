/* Выпуск 024 — Борщ. Сцены, годы/подписи карточки рецепта, реестры для миров. */
const SUBTITLE = 'история: борщ';
const SAT = 1.1;
const BLOOM = 0.12;                                         // свечение только самых ярких мест (ТОМ-ТУР 12.11.2026: больше — ореолы и мыло)
const JUICE = 0.2;                                          // «сочность» итогового кадра: +контраст и насыщенность
const SAFE = true;                                          // безопасная зона TikTok/Shorts (владелец, 23.10.2026): HUD ниже чёлки и дальше от краёв
const ENDCARD = true;                                       // владелец 03.11.2026: плашка «ПОДПИШИСЬ» в конце обязательна (тает перед петлёй)
const LOOP = 0.4;                                           // тест v1: последние 0.4 с перетекают в первый кадр — ролик зацикливается
const HOOK_LINES = ['ЧЕЙ', 'БОРЩ?!'];                     // текст-хук первых ~2.5 с, ≤3 слов в строке
const YR = { hook: ['', ''], grass: ['1000 лет назад', 'СЛОЙ 1 · БОРЩЕВИК'], kyiv: ['1584', 'КИЕВ · ДНЕВНИК КУПЦА'], beet: ['XVIII в.', 'СЛОЙ 2 · СВЁКЛА'], pot: ['XIX в.', 'СЛОЙ 3 · КАРТОШКА'], tomato: ['≈ 100 лет', 'СЛОЙ 4 · ТОМАТ'], neighbors: ['сегодня', 'ПОЛЬША · ЛИТВА'], moldova: ['сегодня', 'МОЛДОВА · РУМЫНИЯ'], answer: ['★', 'ЧЕЙ БОРЩ?'], today: ['сегодня', 'А ТВОЙ?'], button: ['', ''] };
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
  const i = c.words.findIndex(x => n(x).startsWith(n(w))), L = c.words.map(x => x.length + 1), tot = L.reduce((a, b) => a + b, 0), pre = L.slice(0, i).reduce((a, b) => a + b, 0); return c.t0 + (c.t1 - c.t0) * pre / tot; };   // = wtw из props.js (он грузится позже scenes.js)
/* карточка рецепта: [строка, когда дописать, когда зачеркнуть, метка ('?' | 'new')]; видно последние 5 (SAFE) */
const RECIPE = [
  ['чей? — спорят', wtS('s1', 'Ныряем'), wtS('s10', 'земель.'), '?'],
  ['цвет: зелёный', wtS('s1', 'зелёный'), wtS('s4', 'краснеет!'), null],
  ['кислинка — квас', wtS('s2', 'кисло!'), wtS('s6', 'квас!'), null],
  ['варит каждый сам', wtS('s3', 'каждый'), null, 'new'],
  ['цвет: красный ✓', wtS('s4', 'краснеет!'), null, 'new'],
  ['кислинка — томат', wtS('s6', 'квас!') + 0.1, null, 'new'],
  ['у соседей — свой', wtS('s7', 'соседи'), null, null],
  ['борш = закваска', wtS('s9', 'борш'), null, 'new'],
  ['красный — укр. земли', wtS('s10', 'земель.'), null, 'new'],
  ['ЮНЕСКО · 2022', wtS('s11', 'ЮНЕСКО'), null, 'new'],
];
/* шкала ингредиентов слева (17.11.2026, engine/core.js ingrStrip): [иконка, подпись, появилась, зачёркнута, эпоха] */
const INGR = [
  ['borshchevik', 'борщевик', wtS('s1', 'борщевика.'), wtS('s4', 'свёкла'), '1000 л.'],
  ['kvas', 'квас', wtS('s2', 'кисло!'), wtS('s6', 'квас!'), ''],
  ['beet', 'свёкла', wtS('s4', 'свёкла'), null, 'XVIII'],
  ['cabbage', 'капуста', wtS('s4', 'капустой'), null, ''],
  ['turnip', 'репа', wtS('s4', 'капустой') + 0.45, wtS('s5', 'уволена!'), ''],
  ['potato', 'картошка', wtS('s5', 'картошка'), null, 'XIX'],
  ['tomato', 'томат', wtS('s6', 'помидор:'), null, 'XX'],
  ['smetana', 'сметана', wtS('s10', 'земель.') + 0.3, null, 'сейчас'],
];
const INGR_OPT = { from: S0.grass + 0.2 };
