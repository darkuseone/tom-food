/* Выпуск 006 — Шаурма. Сцены, годы/подписи карточки рецепта, реестры для миров. */
const SUBTITLE = 'история: шаурма';
const SAT = 1.1;
const HOOK_LINES = ['ТАКО = ГИРОС', '= ШАУРМА?!'];                     // текст-хук первых ~2.5 с, ≤3 слов в строке
const YR = { hook: ['', ''], kebab: ['XVII В.', 'КЕБАБ ЛЁЖА'], bursa: ['XIX В.', 'ВЕРТЕЛ СТОЙМЯ'], name: ['ИМЕНА', '«ПОВОРОТ»'], gyros: ['ГРЕЦИЯ', 'ГИРОС'], mexico: ['1930-Е', 'ПУЭБЛА'],
  pastor: ['1960-Е', 'ТАКО АЛЬ ПАСТОР'], berlin: ['1970-Е', 'БЕРЛИН · В БУЛКЕ'], money: ['В ГОД', 'ГЕРМАНИЯ'], eu: ['2024', 'СПОР О РЕЦЕПТЕ'], record: ['ИЮНЬ 2026', 'ОТТАВА · РЕКОРД'], today: ['А У НАС?', 'ДВА ИМЕНИ'], button: ['', ''] };
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
  ['баранина', WT('s1', 'кебаб.')], ['вертел лёжа', WT('s1', 'лёжа'), WT('s2', 'стоймя')],
  ['+ вертел стоймя', WT('s2', 'стоймя'), null, 'new'], ['+ лепёшка, соус', WT('s3', 'шаурма.'), null, 'new'],
  ['+ свинина', WT('s5', 'свининой.'), null, 'new'], ['+ ананас', WT('s6', 'ананас'), null, 'new'], ['+ булка', WT('s7', 'булку.'), null, 'new'],
  ['ломтик 3–5 мм', WT('s9', 'ломтики'), null, '?'],
];
