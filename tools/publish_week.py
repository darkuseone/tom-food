"""Общий файл выкладки на неделю (владелец, 03.11.2026: один файл после всей очереди, не после каждого ролика).
  python3 tools/publish_week.py <дата первого дня ДД.ММ.ГГГГ> <эп1> <эп2> ...   → docs/publish-all.md
По одному ролику в день, ~7:45–8:00, TikTok + YouTube Shorts; блоки берутся из episodes/<эп>/publish.md (без строки-заголовка)."""
import datetime as dt, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']


def main(start, eps):
    d0 = dt.datetime.strptime(start, '%d.%m.%Y').date()
    out = ["# Выкладка на неделю: TikTok + YouTube Shorts, ~7:45–8:00\n",
           "Порядок публикации — сверху вниз, по одному ролику в день. Ролик — `episodes/<эп>/final.mp4`, обложка — `episodes/<эп>/cover.png`. В каждом блоке сначала TikTok, потом YouTube Shorts.\n"]
    for i, ep in enumerate(eps):
        p = ROOT / 'episodes' / ep / 'publish.md'; head, body = p.read_text().split('\n', 1)
        name = re.sub(r'^#\s*\d+\s*—\s*', '', head).split(':')[0].strip(); day = d0 + dt.timedelta(days=i)
        out.append(f"\n---\n\n# {ep[:3]} — {name} · {DAYS[day.weekday()]} {day:%d.%m}\n\n{body.strip()}\n")
    (ROOT / 'docs/publish-all.md').write_text('\n'.join(out)); print('→ docs/publish-all.md:', ', '.join(eps))


if __name__ == '__main__':
    if len(sys.argv) < 3: sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2:])
