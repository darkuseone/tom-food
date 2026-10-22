"""Заготовка нового выпуска «ТОМ НА ВКУС» (экономит токены: ничего не читать и не копировать руками).
  python3 tools/new_episode.py 003-ketchup "Кетчуп" hook,s1scene,s2scene,...,today
Список сцен — через запятую, по одной реплике на сцену (hook → h1+h2, today → t1, button добавляется сам; остальные → s1, s2, …).
Создаёт episodes/<эп>/: общий код из последнего выпуска (direct, props, transitions, food, costumes*, nug и др. — всё *.js, кроме w_*, data, scenes),
scenes.js (YR, RECIPE, реестры), episode.json, lines.json, sound.py, w_cover.js, w_<сцена>.js из templates/w_scene.js, script.md; docs/sources/<эп>.md."""
import json, shutil, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
if len(sys.argv) < 4: sys.exit(__doc__)
ep, dish, names = sys.argv[1], sys.argv[2], [n.strip() for n in sys.argv[3].split(',') if n.strip()]
if names[0] != 'hook' or names[-1] != 'today': sys.exit('список сцен: hook,…,today (button добавится сам)')
d = ROOT / 'episodes' / ep
if d.exists(): sys.exit(f'{d} уже есть')
src = max((p for p in (ROOT / 'episodes').iterdir() if (p / 'scenes.js').exists() and (p / 'final.mp4').exists()), key=lambda p: p.name)
d.mkdir(parents=True); (d / 'voice').mkdir()
shared = sorted(p.name for p in src.glob('*.js') if not p.name.startswith('w_') and p.name not in ('data.js', 'scenes.js'))
for f in shared: shutil.copy(src / f, d / f)
keys, scenes, n = {}, [], 0
for s in names:
    if s == 'hook': k = ['h1', 'h2']
    elif s == 'today': k = ['t1']
    else: n += 1; k = [f's{n}']
    scenes.append([s, k])
scenes.append(['button', ['x1']])
base = [f for f in ('props.js', 'food.js', 'costumes.js') if f in shared]
extra = [f for f in shared if f not in base + ['direct.js', 'transitions.js']]
worlds = base + extra + [f'w_{s}.js' for s in names] + ['w_cover.js']
(d / 'episode.json').write_text(json.dumps({'num': ep[:3], 'city': dish, 'title': 'TODO', 'hook': 'TODO', 'timeline': {'scene_gap': 0.05, 'tail': 0.6, 'tunnel': 0.0},
    'worlds': worlds, 'scenes': scenes}, ensure_ascii=False, indent=1))
L = {'h1': '[shocked, loud] TODO шок-слово первым', 'h2': '[smug, playful] Отку́сим исто́рию!'}
for s, k in scenes[1:-1]:
    if s != 'today': L[k[0]] = '[dramatic] TODO ≤14 слов, панчлайн в конце'
L['t1'] = '[warm, proud] TODO сегодня + цифра, петля к хуку'; L['x1'] = '[playful, to the camera] Пиши́ блю́до — отку́сим!'
(d / 'lines.json').write_text(json.dumps(L, ensure_ascii=False, indent=1))
yr = ', '.join(f"{s}: ['TODO', 'TODO']" for s in names[1:])
(d / 'scenes.js').write_text(f"""/* Выпуск {ep[:3]} — {dish}. Сцены, годы/подписи карточки рецепта, реестры для миров. */
const SUBTITLE = 'история: {dish.lower()}';
const SAT = 1.1;
const HOOK_LINES = ['TODO', 'TODO?!'];                     // текст-хук первых ~2.5 с, ≤3 слов в строке
const YR = {{ hook: ['', ''], {yr}, button: ['', ''] }};
const SC = SCN.map(([n, a, b]) => [n, a, b, YR[n][0], YR[n][1]]);
const S0 = {{}}, S1 = {{}}; SC.forEach(s => {{ S0[s[0]] = s[1]; S1[s[0]] = Math.min(s[2], DUR); }});
const LS = k => VO[k], LE = k => VO[k] + VD[k], LF = (k, f) => VO[k] + VD[k] * f;
const EV = {{ h2: LS('h2'), hookEnd: Math.min(2.6, LE('h1') - 0.1) }};
const SHAKES = [];
const YEARS = {{}};
const KEYW = ['историю!', 'откусим!'];
const DIR = {{}}, WORLD = {{}}, TRANS_IN = {{}};
const WT = (k, w) => {{ const n = s => s.toLowerCase().replace(/[^а-яёa-z0-9-]/g, ''); const c = CAPS.find(c => c.key === k && c.words.some(x => n(x) === n(w))) || CAPS.find(c => c.key === k && c.words.some(x => n(x).startsWith(n(w)))); return c ? c.t0 : LS(k); }};
/* карточка рецепта: [строка, когда дописать, когда зачеркнуть, метка ('?' | 'new')]; видно последние 6 */
const RECIPE = [
  // ['ингредиент', WT('s1', 'слово'), null, 'new'],
];
""")
tpl = (ROOT / 'templates/w_scene.js').read_text()
for s, k in scenes[:-1]:
    (d / f'w_{s}.js').write_text(tpl.replace('SCENE', s).replace('__KEY__', k[-1]) + ("""
(() => {                                                          // кнопка: тот же мир, Том в камеру, подмигивает на «откусим»
  WORLD.button = (t, u, cat) => WORLD.today(t, u, cat);
  DIR.button = Object.assign({}, DIR.today, { act: () => [[S0.button, 'grin'], [LF('x1', 0.7), 'wink']], cam: () => [[S0.button, 660, 900, 0.3], [DUR, 660, 980, 0.36]] });
})();
""" if s == 'today' else ''))
(d / 'w_cover.js').write_text(f"/* Обложка {ep[:3]}: блюдо — герой кадра крупно, Том с реакцией; 2–3 слова; плашка с названием блюда. */\nconst COVER = {{ scene: 'hook', t: 2.0, cam: {{ x: 560, y: 1060, z: 0.4 }}, pose: {{ expr: 'shock', expr2: 'shock', ek: 1, tailUp: true }},\n  title: [['TODO', '#f4e6c8'], ['TODO?!', '#d9482b']], size: 150, ty: 300, badge: '{dish.upper()}', sub: 'история за минуту' }};\n")
(d / 'sound.py').write_text(f'''"""Звук {ep[:3]} — {dish}: SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец). Новые звуки — tools/sfxbatch.py."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        ('whip_whoosh', 0.0, -2),
        # TODO: по событию на каждое EV + переход на каждый S0[сцена]; укус — nugget_bite / crunch_crouton
        ('cat_meow', DUR - 0.9, -6),
    ]
    beds = [('restaurant_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus')
''')
(d / 'script.md').write_text(f'# {ep} — {dish} (сценарий)\n\nХук «…» · структура «…» · ≈… с · укус: … · Том-малыш: … · карта: …\n\n| сцена | реплика | картинка / Том | переход В сцену |\n|---|---|---|---|\n'
    + ''.join(f'| {s} | | | |\n' for s, _ in scenes) + '\nКарточка рецепта: …\nКостюмы: …\nПалитра: …\n')
(ROOT / 'docs/sources' / f'{ep}.md').write_text(f'# {ep} — {dish}: источники\n\n| факт | источники (2+) |\n|---|---|\n\nОтброшено: …\n')
print('создан', d.relative_to(ROOT), '← общий код из', src.name, ':', ', '.join(shared))
