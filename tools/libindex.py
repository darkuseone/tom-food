"""Индекс готовых деталей миров прошлых выпусков → docs/library.md (что переиспользовать как основу, не читая файлы целиком).
  python3 tools/libindex.py
Берёт функции/константы-функции с комментарием на той же строке из episodes/*/w_*.js, worlds_*.js, details.js, props.js."""
import re
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
rx = re.compile(r'^\s*(?:function\s+([A-Za-z_]\w*)\s*\(([^)]*)\)|const\s+([A-Za-z_]\w*)\s*=\s*\(([^)]*)\)\s*=>)[^\n]*?//\s*(.+)$')
out = ['# Библиотека (автоиндекс, `python3 tools/libindex.py`) — читать ВМЕСТО файлов', '',
       '## lib/ — общий код канала (подключён в каждом выпуске: функции и костюмы вызываются напрямую)', '']
for f in sorted((ROOT / 'lib').glob('*.js')):
    T = f.read_text(); L = T.splitlines(); rows = []
    for i, l in enumerate(L, 1):
        m = rx.match(l)
        if m: rows.append(f'`{m.group(1) or m.group(3)}({(m.group(2) or m.group(4) or "").strip()[:50]})` — {m.group(5).strip()[:100]}')
    props = re.findall(r'^\s{2}([A-Za-z]\w*)\(\)\s*\{', T, re.M) if 'PROPS' in T else []
    outf = re.findall(r'^\s{4}([A-Za-z]\w*):\s*(?:\{|Object\.assign)', T, re.M) if 'OUTFIT' in T else []
    head = L[0][2:].strip()[:220] if L and L[0].startswith('/*') else ''
    if rows or props or outf:
        out += [f'### {f.name}', head, ''] + [f'- {r}' for r in rows]
        if props: out.append('- PROPS (pose.prop): ' + ', '.join(props))
        if outf: out.append('- OUTFIT (костюмы): ' + ', '.join(outf))
        out.append('')
out += ['## Детали миров прошлых выпусков', '', 'Функции внутри IIFE не видны снаружи: чтобы взять деталь, скопируй функцию в свой файл (grep -n имя, затем sed -n диапазон).', '']
for ep in sorted((ROOT / 'episodes').iterdir()):
    files = sorted([*ep.glob('w_*.js'), *ep.glob('worlds_*.js'), *ep.glob('details.js'), *ep.glob('props.js')])
    rows = []
    for f in files:
        for i, l in enumerate(f.read_text().splitlines(), 1):
            m = rx.match(l)
            if m: rows.append(f'| `{m.group(1) or m.group(3)}({(m.group(2) or m.group(4) or "").strip()[:40]})` | {f.name}:{i} | {m.group(5).strip()[:110]} |')
    if rows: out += [f'## {ep.name}', '', '| функция | где | что |', '|---|---|---|', *rows, '']
(ROOT / 'docs/library.md').write_text('\n'.join(out) + '\n'); print('docs/library.md:', sum(1 for l in out if l.startswith(('| `', '- `'))), 'деталей')
