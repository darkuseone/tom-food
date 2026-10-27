/* Выпуск 010 — Картофельные чипсы. Сцены, годы/подписи карточки рецепта, реестры для миров. */
const SUBTITLE = 'история: картофельные чипсы';
const SAT = 1.1;
const SAFE = true;                                          // безопасная зона TikTok/Shorts (владелец, 23.10.2026): HUD ниже чёлки и дальше от краёв
const ENDCARD = false;                                      // тест v1 (25.10.2026): без плашки «ПОДПИШИСЬ» — финал = панчлайн
const LOOP = 0.4;                                           // тест v1: последние 0.4 с перетекают в первый кадр — ролик зацикливается
const HOOK_LINES = ['ПОХОРОНЕН', 'В ЧИПСАХ?!'];                     // текст-хук первых ~2.5 с, ≤3 слов в строке
const YR = { hook: ['', ''], legend: ['1853', 'ЛЕГЕНДА · САРАТОГА'], debunk: ['1817', 'ЛОНДОН · РЕЦЕПТ'], crisps: ['ИМЯ', 'CRISPS ≠ CHIPS'], bag: ['1920-е', 'ПАКЕТ СКАДДЕР'],
  flavour: ['1954', 'ДУБЛИН · TAYTO'], court: ['2008–09', 'СУД: ЧИПСЫ ЛИ?'], baur: ['2008', 'ФРЕД БАУР'], today: ['СЕГОДНЯ', '$36 МЛРД В ГОД'], button: ['', ''] };
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
  ['картошка', WT('s1', 'картошку'), null], ['нарезать тонко-тонко', WT('s1', 'тонко-тонко'), null, 'new'], ['жарить, солить', WT('s2', 'рецепт'), null, 'new'],
  ['вощёный пакет', WT('s4', 'бумагу,'), null, 'new'], ['+ сыр и лук', WT('s5', 'сыр'), null, 'new'], ['картошки 42%?', WT('s6', '42%!»'), null, '?'],
];
