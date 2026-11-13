/* Выпуск 020 — Карбонара. Сцены, годы/подписи карточки рецепта, реестры для миров. */
const SUBTITLE = 'история: карбонара';
const SAT = 1.1;
const BLOOM = 0.12;                                         // свечение только самых ярких мест (ТОМ-ТУР 12.11.2026: больше — ореолы и мыло)
const JUICE = 0.2;                                          // «сочность» итогового кадра: +контраст и насыщенность
const SAFE = true;                                          // безопасная зона TikTok/Shorts (владелец, 23.10.2026): HUD ниже чёлки и дальше от краёв
const ENDCARD = true;                                       // владелец 03.11.2026: плашка «ПОДПИШИСЬ» в конце обязательна (тает перед петлёй)
const LOOP = 0.4;                                           // тест v1: последние 0.4 с перетекают в первый кадр — ролик зацикливается
const HOOK_LINES = ['КАРБОНАРЕ', 'ВСЕГО 80?!'];                     // текст-хук первых ~2.5 с, ≤3 слов в строке
const YR = { hook: ['', ''], cream: ['СЕГОДНЯ', 'КАНОН · СЛИВКИ?'], mag: ['1954', 'ПЕРВЫЙ В ИТАЛИИ'], chicago: ['1952', 'ЧИКАГО · ПУТЕВОДИТЕЛЬ'], news: ['1950', 'РИМ · ГАЗЕТА'], legend: ['ДО 1940', 'ЛЕГЕНДА'], ration: ['1944', 'РИМ · ПАЙКИ'], pasta: ['1944', 'СОЛДАТСКИЙ ЗАВТРАК'], today: ['СЕГОДНЯ', '6 АПРЕЛЯ'], button: ['', ''] };
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
  ['гуанчале · яйцо', WT('s1', 'строгая:'), WT('s3', '1954-й:'), null],
  ['пекорино · перец', WT('s1', 'пекорино,'), null, null],
  ['сливки — ересь!', WT('s1', 'Сливки'), WT('s2', 'тридцать'), '?'],
  ['+ сливки (30 лет)', WT('s2', 'тридцать'), WT('s3', '1954-й:'), 'new'],
  ['панчетта · чеснок', WT('s3', '1954-й:'), WT('s5', 'напечатали…'), 'new'],
  ['грюйер (Швейцария!)', WT('s3', 'грюйер!'), WT('s5', 'напечатали…'), 'new'],
  ['бекон · пармезан', WT('s5', 'напечатали…'), null, 'new'],
  ['+ яичный порошок', WT('s9', 'бекон'), null, 'new'],
];
/* ◀◀ «перемотка» — сквозной приём выпуска: экранная плашка VHS и полосы трекинга поверх переходов (k 0→1) */
function rewTag(k, a = 1) {
  scr(() => { const al = a * Math.sin(Math.PI * clamp(k)); if (al <= 0.01) return; ctx.save(); ctx.globalAlpha = al;
    ctx.fillStyle = 'rgba(10,10,20,0.55)'; ctx.fillRect(560, 760, 380, 120); ctx.fillStyle = '#ffffff'; ctx.font = 'bold 72px Oswald'; ctx.textAlign = 'center'; ctx.fillText('◀◀ REW', 750, 848);
    for (let i = 0; i < 5; i++) { const y = (FRAME * 97 + i * 413) % H; ctx.fillStyle = 'rgba(255,255,255,0.18)'; ctx.fillRect(0, y, W, 6 + (i % 3) * 5); }
    ctx.restore(); });
}
