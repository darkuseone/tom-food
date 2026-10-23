/* Выпуск 004 — Холодец. Сцены, годы/подписи карточки рецепта, реестры для миров. */
const SUBTITLE = 'история: холодец';
const SAT = 1.1;
const HOOK_LINES = ['В СОТНЕ', 'ХУДШИХ?!'];                     // текст-хук первых ~2.5 с, ≤3 слов в строке
const YR = { hook: ['', ''], vote: ['2023', 'АНТИРЕЙТИНГ · 67-Е МЕСТО'], viandier: ['1375', 'ФРАНЦИЯ · ЖЕЛЕ КОРОЛЕЙ'], domostroi: ['XVI В.', '«ДОМОСТРОЙ»'], names: ['СТУДЕНЬ?', 'ХОЛОДЕЦ?'],
  peter: ['1700-Е', 'СТОЛ ПЕТРА I'], servants: ['1800-Е', 'ЕДА ПРИСЛУГИ'], bones: ['8 ЧАСОВ', 'СЕКРЕТ — КОСТИ'], zalivnoe: ['ВНИМАНИЕ', 'ЗАЛИВНОЕ ≠ ХОЛОДЕЦ'], relatives: ['ПО МИРУ', 'РОДНЯ'], today: ['СЕГОДНЯ', '8 ЧАСОВ → 8 МИНУТ'], button: ['', ''] };
const SC = SCN.map(([n, a, b]) => [n, a, b, YR[n][0], YR[n][1]]);
const S0 = {}, S1 = {}; SC.forEach(s => { S0[s[0]] = s[1]; S1[s[0]] = Math.min(s[2], DUR); });
const LS = k => VO[k], LE = k => VO[k] + VD[k], LF = (k, f) => VO[k] + VD[k] * f;
const EV = { h2: LS('h2'), hookEnd: Math.min(2.6, LE('h1') - 0.1) };
const SHAKES = [];
const YEARS = {};
const KEYW = ['историю!', 'откусим!'];
const DIR = {}, WORLD = {}, TRANS_IN = {};
const WT = (k, w) => { const n = s => s.toLowerCase().replace(/[^а-яёa-z0-9-]/g, ''); const c = CAPS.find(c => c.key === k && c.words.some(x => n(x) === n(w))) || CAPS.find(c => c.key === k && c.words.some(x => n(x).startsWith(n(w)))); return c ? c.t0 : LS(k); };
/* карточка рецепта: [строка, когда дописать, когда зачеркнуть, метка ('?' | 'new')]; видно последние 6 */
const RECIPE = [
  ['мясо в желе', WT('s2', 'желе')],
  ['говяжьи ноги', WT('s7', 'кости:')], ['хвосты, уши', WT('s7', 'хвосты,')], ['вода + 8 часов', WT('s7', 'восьми')],
  ['желатин', WT('s8', 'желатин.'), WT('s8', 'желатин.') + 0.6, '?'],
  ['хрен, горчица', LS('t1') + 0.3, null, 'new'],
];
