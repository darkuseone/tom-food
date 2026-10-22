#!/usr/bin/env bash
# Проверка готового ролика одной командой: длина, громкость (mean ≈ −20, пик ≤ −1 дБ), размер chat.mp4 (≤ 30 МиБ),
# лента из 8 кадров final.mp4 → build/<эп>/final_sheet.jpg (смотреть Read).   tools/final.sh <эп>
set -euo pipefail
cd "$(dirname "$0")/.."
EP=$1; B=build/$EP; F=episodes/$EP/final.mp4
D=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$F")
ffmpeg -i "$F" -af volumedetect -f null - 2>&1 | grep -oE "(mean|max)_volume: [-0-9.]+ dB" | tr '\n' ' '
python3 -c "import os;print(f'| длина {float(\"$D\"):.1f} с | chat {os.path.getsize(\"$B/chat.mp4\")/2**20:.1f} МиБ')"
rm -rf "$B/fin" && mkdir -p "$B/fin"
for i in 0 1 2 3 4 5 6 7; do t=$(python3 -c "print(round(0.4 + ($D - 0.8) * $i / 7, 2))"); ffmpeg -v error -y -ss "$t" -i "$F" -frames:v 1 -vf scale=270:-1 "$B/fin/$i.png"; done
ffmpeg -v error -y -i "$B/fin/%d.png" -vf tile=8x1 "$B/final_sheet.jpg" && echo "→ $B/final_sheet.jpg"
