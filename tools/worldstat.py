"""Планка детализации миров (владелец, 29.10.2026; эталон — 002-olivier, 002-fries, 002-nuggets).
  python3 tools/worldstat.py <эп>      # печатает по каждому w_*.js: КБ кода, слои переднего плана, приёмы света/фактуры, люди; ⚠ — ниже эталона
Эталон (медианы): ≈10 КБ/мир, 1–2 слоя переднего плана lay(0.5–0.9), 6–10 приёмов glow/rays/haze/motes/hatch/shadeG/crayon. Цифры — сторож, а не цель:
мир «добирают» деталями эпохи и атмосферой, а не пустым кодом."""
import re, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
MIN = dict(kb=8, fg=1, fx=5)
def stat(f):
    s = f.read_text(); return dict(kb=len(s.encode()) / 1024, fg=len(re.findall(r'lay\(0\.\d', s)), fx=len(re.findall(r'\b(?:hatch|shadeG|crayon|haze|motes|rays|glow)\(', s)), hu=len(re.findall(r'\bhuman\(', s)))
if __name__ == '__main__':
    if len(sys.argv) < 2: sys.exit(__doc__)
    bad = 0
    for f in sorted((ROOT / 'episodes' / sys.argv[1]).glob('w_*.js')):
        if f.stem == 'w_cover': continue
        d = stat(f); low = [k for k in MIN if d[k] < MIN[k]]; bad += bool(low)
        print(f"{'⚠' if low else '✓'} {f.stem:16s} {d['kb']:5.1f} КБ  передний {d['fg']}  свет/фактура {d['fx']:2d}  люди {d['hu']}" + (f"   ← ниже эталона: {', '.join(low)}" if low else ''))
    print(f"миров ниже эталона: {bad}" + ('  → доработать до check.sh' if bad else ''))
