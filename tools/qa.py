"""Ворота качества выпуска «ТОМ НА ВКУС» (владелец, 03.11.2026): ролик не хуже эталона 002-olivier / 003-shuba / 002-nuggets.
  python3 tools/qa.py <эп>          — печатает ✓/⚠ по пунктам; код выхода 1, если есть ⚠ (рендерить нельзя, пока не исправлено).
Проверяет то, что в 013–016 просело незаметно: объём и плотность рисовки, крупный Том (по пояс, не голова за стойкой), близкая камера,
насыщенный звук, плашка ПОДПИШИСЬ, ровно один Том-малыш, свой переход в каждую сцену, источники фактов."""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MIN = dict(worlds=9, world_kb=8.5, total_kb=100, calls=1350, tom_s=1.05, cam_z=0.2, sfx_per_ev=1.0, new_sfx=2, src_rows=6, beds=6)
CALL = re.compile(r'\b[a-zA-Z_][a-zA-Z0-9_]*\(')


def main(ep):
    d = ROOT / 'episodes' / ep; num = ep[:3]; out = []; bad = 0
    def chk(ok, msg):
        nonlocal bad
        out.append(('✓ ' if ok else '⚠ ') + msg); bad += 0 if ok else 1
    W = [p for p in sorted(d.glob('w_*.js')) if p.name != 'w_cover.js']; txt = {p.name: p.read_text() for p in W}
    tot = sum(len(t.encode()) for t in txt.values()) / 1024; calls = sum(len(CALL.findall(t)) for t in txt.values())
    chk(len(W) >= MIN['worlds'], f"миров {len(W)} (≥ {MIN['worlds']})")
    small = [f"{n} {len(t.encode()) / 1024:.1f}" for n, t in txt.items() if len(t.encode()) / 1024 < MIN['world_kb']]
    chk(not small, f"каждый мир ≥ {MIN['world_kb']} КБ" + (f" — мало: {', '.join(small)}" if small else ''))
    chk(tot >= MIN['total_kb'], f"код миров {tot:.0f} КБ (минимум {MIN['total_kb']} = уровень оливье, цель ≥ 110; наггетсы 123, фри 117)")
    chk(calls >= MIN['calls'], f"вызовов рисования {calls} (минимум {MIN['calls']} = оливье, цель ≥ 1500; наггетсы 1726)")
    mini = [n for n, t in txt.items() if 'ТОМ-МАЛЫШ' in t[:600]]
    chk(len(mini) == 1, f"Том-малыш — ровно один мир: {', '.join(mini) or 'нет'}")
    low_s, far = [], []
    for n, t in txt.items():
        if n in mini: continue
        ss = [float(x) for x in re.findall(r'pose:.*?\bs: (\d+(?:\.\d+)?)', t, re.S)[:1]] + [float(x) for x in re.findall(r'stPose = .*?\bs: (\d+(?:\.\d+)?)', t)]
        if ss and max(ss) < MIN['tom_s']: low_s.append(f"{n} s={max(ss)}")
        for m in re.finditer(r"cam: \(\) => \[(.*?)\]\s*[}\n]", t, re.S):
            zs = [float(z) for z in re.findall(r"\[[^\[\]]*?,\s*-?\d+,\s*-?\d+,\s*(\d*\.?\d+)(?:,\s*'x')?\]", m.group(1))]
            n_far = sum(1 for z in zs[1:] if z < MIN['cam_z'])
            if zs[1:] and n_far * 2 > len(zs[1:]): far.append(f"{n} ({n_far} из {len(zs) - 1} ключей z<{MIN['cam_z']})")
    chk(not low_s, f"Том крупный, по пояс (s ≥ {MIN['tom_s']}, y ≈ 1580 при столе 1440)" + (f" — мелко: {', '.join(low_s)}" if low_s else ''))
    chk(not far, f"камера близко (после первого ключа большинство z ≥ {MIN['cam_z']}; общий план — коротко)" + (f" — далеко: {'; '.join(far)}" if far else ''))
    no_tr = [n for n, t in txt.items() if n not in ('w_hook.js',) and 'TRANS_IN.' not in t]
    chk(not no_tr, "свой переход TRANS_IN в каждую сцену" + (f" — нет: {', '.join(no_tr)}" if no_tr else ''))
    no_light = [n for n, t in txt.items() if not re.search(r'\b(lightPool|shaft|castShadow|moodDark)\(', t)]
    chk(not no_light, "свет по рецепту в каждой сцене (lightPool/shaft/castShadow/moodDark — скил scene §«Свет»)" + (f" — нет: {', '.join(no_light)}" if no_light else ''))
    no_act = [n for n, t in txt.items() if not re.search(r'\b(prop:|afterCat|handF?:)', t)]
    chk(not no_act, "Том взаимодействует с предметом в каждой сцене (prop/hand/afterCat)" + (f" — нет: {', '.join(no_act)}" if no_act else ''))
    halo = [f"{n} ({len(re.findall(r'glow\(', t))})" for n, t in txt.items() if len(re.findall(r'\bglow\(', t)) > 8]
    chk(not halo, "glow только у источников света (≤ 8 вызовов на мир, без ореолов вокруг объектов)" + (f" — много: {', '.join(halo)}" if halo else ''))
    sc = (d / 'scenes.js').read_text() if (d / 'scenes.js').exists() else ''
    chk(re.search(r'const ENDCARD = true', sc) is not None, "плашка «ПОДПИШИСЬ» (ENDCARD = true, владелец 03.11.2026)")
    snd = (d / 'sound.py').read_text() if (d / 'sound.py').exists() else ''; ev = d / 'ev.json'
    n_sfx = len(re.findall(r"\('\w+', [^()]*?(?:\([^()]*\))?[^()]*?, -?\d+\)", snd)); n_ev = len(json.loads(ev.read_text())['EV']) if ev.exists() else 0
    chk(n_ev and n_sfx >= n_ev * MIN['sfx_per_ev'], f"звук: SFX {n_sfx} на {n_ev} событий картинки (≥ 1 на событие + переходы)")
    mb = re.search(r"beds = \[(.*?)\]\n", snd, re.S); beds = len(re.findall(r"\('\w+',", mb.group(1))) if mb else 0
    chk(beds >= MIN['beds'], f"звук: атмосферы-лупы по сценам {beds} (≥ {MIN['beds']})")
    cat = (ROOT / 'assets/sfx/CATALOG.md').read_text(); new = len(re.findall(rf'\({num}\)', cat))
    chk(new >= MIN['new_sfx'], f"звук: новых SFX под выпуск {new} (≥ {MIN['new_sfx']}, пометка ({num}) в CATALOG)")
    chk('lufs=-14' in snd and 'loop=True' in snd, "звук: мастер −14 LUFS, петля (loop=True)")
    src = ROOT / 'docs/sources' / f'{ep}.md'; rows = len(re.findall(r'^\| [^-|]', src.read_text(), re.M)) - 1 if src.exists() else 0
    chk(rows >= MIN['src_rows'], f"источники: {rows} строк фактов в docs/sources/{ep}.md (≥ {MIN['src_rows']}, по 2+ источника)")
    print('\n'.join(out)); print(f"→ {'ГОТОВО к рендеру' if not bad else f'исправить {bad} пункт(а) до рендера'}")
    return 1 if bad else 0


if __name__ == '__main__':
    if len(sys.argv) < 2: sys.exit(__doc__)
    sys.exit(main(sys.argv[1]))
