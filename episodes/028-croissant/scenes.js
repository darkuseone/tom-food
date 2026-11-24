/* Выпуск 028 — Круассан. Сцены, годы/подписи карточки рецепта, реестры для миров. */
const SUBTITLE = 'история: круассан';
const SAT = 1.1;
const BLOOM = 0.12;                                         // свечение только самых ярких мест (ТОМ-ТУР 12.11.2026: больше — ореолы и мыло)
const JUICE = 0.2;                                          // «сочность» итогового кадра: +контраст и насыщенность
const SAFE = true;                                          // безопасная зона TikTok/Shorts (владелец, 23.10.2026): HUD ниже чёлки и дальше от краёв
const CAM_SMOOTH = true;                                    // 19.11.2026: плавная кинокамера — сплайн через ключи, без панч-зумов (lib/direct.js)
const ENDCARD = true;                                       // владелец 03.11.2026: плашка «ПОДПИШИСЬ» в конце обязательна (тает перед петлёй)
const LOOP = 0.4;                                           // тест v1: последние 0.4 с перетекают в первый кадр — ролик зацикливается
const HOOK_LINES = ['КРУАССАН —', 'АВСТРИЕЦ?!'];                     // текст-хук первых ~2.5 с, ≤3 слов в строке
const YR = { hook: ['', ''], siege: ['1683', 'ОСАДА ВЕНЫ · БАЙКА'], crescent: ['1683', 'БУЛКА-ПОЛУМЕСЯЦ?'], archive: ['XX в.', 'КОГДА ЗАПИСАЛИ БАЙКУ'], kipferl: ['XIII в.', 'АВСТРИЯ · КИПФЕРЛЬ'], versailles: ['1770–1793', 'МАРИЯ-АНТУАНЕТТА?'], zang: ['1839', 'ПАРИЖ · ВЕНСКАЯ ПЕКАРНЯ'], layers: ['≈ 1905', 'СЛОИ И МАСЛО'], vienna: ['ИТОГ', 'ВЕНА + ПАРИЖ'], today: ['СЕГОДНЯ', 'С ШОКОЛАДОМ ИЛИ БЕЗ?'], button: ['', ''] };
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
  ['1683: «назло туркам»', wtS('s2', 'булочку-полумесяц,'), wtS('s3', 'двадцатом'), '?'],
  ['байка — из XX века', wtS('s3', 'двадцатом'), null, null],
  ['кипферль: XIII век', wtS('s4', 'тринадцатом'), null, 'new'],
  ['Мария-Антуанетта?', wtS('s5', 'Мария-Антуанетта?'), wtS('s5', 'Мимо:'), '?'],
  ['1839: пекарня Цанга', wtS('s6', '1839-м'), null, 'new'],
  ['сдоба → слои с маслом', wtS('s7', 'Слоёным'), null, 'new'],
  ['★ форма — Вена, слои — Париж', wtS('s8', 'паспортом:'), null, 'new'],
];
const INGR = [
  [(s, t) => INGR_C28.flour(s, t), 'мука', wtS('s4', 'рогалик-кипферль'), null, 'XIII в.'],
  [(s, t) => INGR_C28.yeast(s, t), 'дрожжи', wtS('s4', 'пекли'), null, ''],
  [(s, t) => INGR_C28.sugar(s, t), 'сахар', wtS('s4', 'Австрии'), null, ''],
  [(s, t) => INGR_C28.kipferl(s, t), 'плотная сдоба', wtS('s6', 'пекарню.'), wtS('s7', 'Слоёным'), '1839'],
  [(s, t) => INGR_C28.butter(s, t), 'масло', wtS('s7', 'Слоёным'), null, '≈1905'],
  [(s, t) => INGR_C28.layers(s, t), 'слои', wtS('s7', 'круассан'), null, ''],
  [(s, t) => INGR_C28.croissant(s, t), 'круассан ★', wtS('s8', 'паспортом:'), null, ''],
];
const INGR_OPT = { from: S0.kipferl };
