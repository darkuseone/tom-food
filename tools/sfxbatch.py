"""Пакет новых SFX за один вызов: генерация (≤5 параллельно — лимит ElevenLabs) → проверка sfxcheck → assets/sfx + строки в CATALOG.md.
  python3 tools/sfxbatch.py <эп> "имя|сек|промпт (англ.)|что (рус.)" ...
Существующие имена пропускает (сначала смотреть CATALOG: grep -o '^| [a-z_0-9]* |' assets/sfx/CATALOG.md)."""
import subprocess, sys, datetime
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
if len(sys.argv) < 3: sys.exit(__doc__)
ep, items = sys.argv[1], [a.split('|') for a in sys.argv[2:]]
out = ROOT / 'build' / ep / 'sfxnew'; out.mkdir(parents=True, exist_ok=True)
todo = [it for it in items if not (ROOT / 'assets/sfx' / f'{it[0]}.mp3').exists()]
for it in items:
    if it not in todo: print('есть:', it[0])
def gen(it):
    r = subprocess.run(['python3', str(ROOT / 'tools/tts.py'), 'sfx', str(out / f'{it[0]}.mp3'), it[1], it[2]], capture_output=True, text=True)
    return it[0], r.returncode, (r.stdout + r.stderr).strip().splitlines()[-1:]
with ThreadPoolExecutor(5) as ex: res = list(ex.map(gen, todo))
ok = [n for n, rc, _ in res if rc == 0]
for n, rc, msg in res:
    if rc: print('ОШИБКА', n, msg)
if not ok: sys.exit()
chk = subprocess.run(['python3', str(ROOT / 'tools/sfxcheck.py')] + [str(out / f'{n}.mp3') for n in ok], capture_output=True, text=True).stdout
print(chk.strip())
cat = ROOT / 'assets/sfx/CATALOG.md'; rows = []
for it in todo:
    n = it[0]
    if n not in ok: continue
    harsh = any(l.startswith(n + '.mp3') and 'HARSH' in l for l in chk.splitlines())
    (out / f'{n}.mp3').rename(ROOT / 'assets/sfx' / f'{n}.mp3')
    rows.append(f'| {n} | {it[1]} | {it[3] if len(it) > 3 else it[2]}{" — HARSH, только тихо" if harsh else ""} |')
head = f'\n## ТОМ НА ВКУС — выпуск {ep} ({datetime.date.today():%d.%m.%Y})\n| файл | с | что |\n|---|---|---|\n'
text = cat.read_text()
cat.write_text(text + ('' if f'выпуск {ep}' in text else head) + '\n'.join(rows) + '\n')
print('в библиотеку:', ', '.join(ok))
