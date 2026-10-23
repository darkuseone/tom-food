/* Выпуск 005 — Борщ. Сцены, годы/подписи карточки рецепта, реестры для миров. */
const SUBTITLE = 'история: борщ';
const SAT = 1.1;
const HOOK_LINES = ['БОРЩ ИЗ', 'СОРНЯКА?!'];                     // текст-хук первых ~2.5 с, ≤3 слов в строке
const YR = { hook: ['', ''], meadow: ['ДРЕВНОСТЬ', 'ЛУГ · БОРЩЕВИК'], name: ['XVI В.', 'БОРЩ ← БОРЩЕВИК'], beet: ['1700–1800', 'БОРЩ КРАСНЕЕТ'], kvass: ['ДО 5 ДНЕЙ', 'СВЕКОЛЬНЫЙ КВАС'],
  america: ['1800-Е', 'ИЗ АМЕРИКИ'], poland: ['ПОЛЬША', 'БАРЩ С «УШКАМИ»'], lithuania: ['ЛИТВА', 'ХОЛОДНЫЙ · РОЗОВЫЙ'], belt: ['1930-Е', 'США · «БОРЩОВЫЙ ПОЯС»'], debate: ['ЧЕЙ?', 'ВЕРСИЙ МНОГО'], today: ['СЕГОДНЯ', '500 ЛЕТ СПУСТЯ'], button: ['', ''] };
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
  ['борщевик', WT('s1', 'Борщевик'), WT('s3', 'сорняк'), ''],
  ['квас из листьев', WT('s1', 'квасили')],
  ['+ свёкла', WT('s3', 'Свёкла'), null, 'new'], ['+ свекольный квас', WT('s4', 'свекольный'), null, 'new'],
  ['+ картошка', WT('s5', 'Картошка'), null, 'new'], ['+ помидоры', WT('s5', 'помидоры'), null, 'new'],
  ['+ сметана, укроп', LS('t1') + 0.3, null, 'new'],
];
