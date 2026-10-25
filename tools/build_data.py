"""Таймлайн выпуска из реплик: episodes/<эп>/episode.json + durs.json + lips/ -> data.js (DUR, VO, VD, SCN, CAPS, VIS) и times.json.
  python3 tools/build_data.py <эпизод>
Сцена без реплик (портал/туннель) длится timeline.tunnel секунд. timeline.beats = {сцена: сек} — немая пауза-гэг после реплики (с 009). Субтитры: по 1–3 слова, ударения U+0301 вырезаются."""
import sys; sys.path.insert(0, str(__import__('pathlib').Path(__file__).resolve().parent)); from voicetext import shown
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
T0 = json.load(open(ROOT / 'tools/config.json'))['timeline']   # выпуск может переопределить в episode.json → "timeline"


def main(ep):
    global T
    d = ROOT / 'episodes' / ep
    E = json.load(open(d / 'episode.json')); T = {**T0, **E.get('timeline', {})}; L = json.load(open(d / 'lines.json')); D = json.load(open(d / 'durs.json'))
    VO, SCN, t, prev_end = {}, [], 0.05, None
    for name, keys in E['scenes']:
        t0 = 0 if prev_end is None else prev_end + T['scene_gap']
        SCN.append([name, round(t0, 3)])
        if not keys:
            prev_end = t0 + T['tunnel']; continue
        if prev_end is not None: t = t0 + T['scene_gap']
        for i, k in enumerate(keys):
            if i: t += T['line_gap']
            VO[k] = round(t, 3); t += D[k]
        prev_end = t + T.get('beats', {}).get(name, 0)            # тест v1: немая пауза-гэг после реплики сцены (реакция Тома + SFX), сек
    DUR = round(prev_end + T['tail'], 2)
    for i, s in enumerate(SCN): s.append(SCN[i + 1][1] if i + 1 < len(SCN) else 99)
    CAPS = []
    for k, t0 in VO.items():
        txt = shown(L[k]); chunks, cur = [], []
        for wd in txt.split():
            cur.append(wd)
            if len(cur) == 3 or wd[-1] in '.,!?—»' or (len(cur) == 2 and len(''.join(cur)) > 13): chunks.append(cur); cur = []
        if cur: chunks.append(cur)
        chunks = [c for c in chunks if not (len(c) == 1 and c[0] == '—')]
        tot = sum(len(''.join(c)) + 2 for c in chunks); tt = t0
        for c in chunks:
            dd = D[k] * (len(''.join(c)) + 2) / tot
            CAPS.append({'t0': round(tt, 3), 't1': round(tt + dd, 3), 'words': [x for x in c if x != '—'], 'key': k}); tt += dd
    VIS = []
    for k, t0 in VO.items():
        lp = d / 'lips' / f'{k}.json'
        if lp.exists():
            for m in json.load(open(lp))['mouthCues']: VIS.append([round(t0 + m['start'], 3), m['value']])
    VIS.sort()
    (d / 'data.js').write_text(f'const DUR={DUR};\nconst VO={json.dumps(VO)};\nconst VD={json.dumps({k: round(v, 3) for k, v in D.items()})};\n'
                               f'const SCN={json.dumps(SCN)};\nconst CAPS={json.dumps(CAPS, ensure_ascii=False)};\nconst VIS={json.dumps(VIS)};\n')
    json.dump({'start': VO, 'dur': D, 'DUR': DUR, 'SCN': SCN}, open(d / 'times.json', 'w'))
    print(ep, 'DUR', DUR); [print(f'  {n:8s} {a:6.2f}–{min(b, DUR):6.2f}') for n, a, b in SCN]


if __name__ == '__main__':
    if len(sys.argv) < 2: sys.exit(__doc__)
    main(sys.argv[1])
