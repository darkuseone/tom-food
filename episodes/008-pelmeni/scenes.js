/* Выпуск 008 — Пельмени. Сцены, годы/подписи карточки рецепта, реестры для миров. */
const SUBTITLE = 'история: пельмени';
const SAT = 1.1;
const HOOK_LINES = ['ХЛЕБНЫЕ', 'УШИ?!'];                     // текст-хук первых ~2.5 с, ≤3 слов в строке
const YR = { hook: ['', ''], ears: ['ПРАВДА', '«ПЕЛЬ» + «НЯНЬ»'], origin: ['ВЕРСИИ', 'УРАЛ · КИТАЙ'], pepper: ['УЛИКА', 'ЧЁРНЫЙ ПЕРЕЦ'], books: ['МИФ', 'ПОВАРЕННЫЕ КНИГИ'],
  frozen: ['ПРАВДА', 'СИБИРЬ · МОРОЗ'], meat: ['НАЧИНКА', 'ТРИ МЯСА'], lucky: ['НОВЫЙ ГОД', 'НА УДАЧУ'], monument: ['ИЖЕВСК', 'ПАМЯТНИК'], machines: ['СЕГОДНЯ', '15 Г · МАШИНЫ'], today: ['ВОПРОС', 'СКОЛЬКО?'], button: ['', ''] };
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
  ['тесто: мука, вода', WT('s1', 'хлеб.'), null], ['+ мясной фарш', WT('s2', 'Урале?'), null, 'new'], ['+ чёрный перец', WT('s3', 'чёрный'), null, '?'], ['+ лук', WT('s4', 'книгах'), null, 'new'],
  ['говядина', WT('s6', 'говядина,'), null, 'new'], ['свинина', WT('s6', 'свинина'), null, 'new'], ['баранина', WT('s6', 'баранина.'), null, 'new'], ['+ сюрприз', WT('s7', 'сюрприз'), null, '?'],
];
