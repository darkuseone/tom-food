#!/usr/bin/env bash
# Проверка готового ролика одной командой: длина, громкость (mean/max; с 009 — LUFS −14, true peak ≤ −1), старт голоса, размер chat.mp4 (≤ 30 МиБ),
# лента из 8 кадров final.mp4 → build/<эп>/final_sheet.jpg (смотреть Read).   tools/final.sh <эп>
set -euo pipefail
cd "$(dirname "$0")/.."
EP=$1; B=build/$EP; F=episodes/$EP/final.mp4
D=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$F")
ffmpeg -i "$F" -af volumedetect -f null - 2>&1 | grep -oE "(mean|max)_volume: [-0-9.]+ dB" | tr '\n' ' '
python3 -c "import os;print(f'| длина {float(\"$D\"):.1f} с | chat {os.path.getsize(\"$B/chat.mp4\")/2**20:.1f} МиБ')"
# тест v1 (с 009): громкость по LUFS (цель −14, true peak ≤ −1), голос с первых 0.1 с, длина 54–62 с, без «ПОДПИШИСЬ», петля в хук
ffmpeg -nostats -i "$F" -af ebur128=peak=true -f null - 2>&1 | grep -E "^ +(I|Peak):" | tr -s ' ' | tr '\n' ' '; echo
python3 - "$EP" "$D" <<'PY'
import json, sys; ep, d = sys.argv[1], float(sys.argv[2]); s = open(f'episodes/{ep}/scenes.js').read(); v1 = 'const LOOP' in s
t0 = min(json.load(open(f'episodes/{ep}/times.json'))['start'].values())
w = [f'голос с {t0:.2f} с' + (' ← позже 0.1 с' if t0 > 0.1 else '')]
if v1: w += ['длина ' + ('ок' if 54 <= d <= 62 else f'{d:.1f} с ← тест v1: 54–62'), 'ПОДПИШИСЬ ' + ('выкл' if 'ENDCARD = false' in s else '← включён')]
print('| ' + ' | '.join(w))
PY
if grep -q "const LOOP" "episodes/$EP/scenes.js"; then              # стык петли: последний кадр | первый кадр — должны почти совпадать
  ffmpeg -v error -y -sseof -0.05 -i "$F" -frames:v 1 -vf scale=270:-1 "$B/fin/last.png"; ffmpeg -v error -y -i "$F" -frames:v 1 -vf scale=270:-1 "$B/fin/first.png"
  ffmpeg -v error -y -i "$B/fin/last.png" -i "$B/fin/first.png" -filter_complex hstack "$B/loop.jpg" && echo "→ $B/loop.jpg (конец | начало)"; fi
rm -rf "$B/fin" && mkdir -p "$B/fin"
for i in 0 1 2 3 4 5 6 7; do t=$(python3 -c "print(round(0.4 + ($D - 0.8) * $i / 7, 2))"); ffmpeg -v error -y -ss "$t" -i "$F" -frames:v 1 -vf scale=270:-1 "$B/fin/$i.png"; done
ffmpeg -v error -y -i "$B/fin/%d.png" -vf tile=8x1 "$B/final_sheet.jpg" && echo "→ $B/final_sheet.jpg"
