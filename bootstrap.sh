#!/usr/bin/env bash
# Перенос переиспользуемого из клона tom-tur в текущий репозиторий (запускать из корня нового репо).
#   bash bootstrap.sh /path/to/tom-tur
set -euo pipefail
SRC=${1:?путь к клону tom-tur}
mkdir -p engine tools assets docs .claude/skills
cp -r "$SRC/engine/." engine/
for f in $(cd "$SRC" && git ls-files tools); do mkdir -p "$(dirname "$f")"; cp "$SRC/$f" "$f"; done
cp -r "$SRC/assets/tom" "$SRC/assets/fonts" "$SRC/assets/sfx" assets/
cp "$SRC/package.json" "$SRC/package-lock.json" . 2>/dev/null || true
cp "$SRC/.gitignore" . 2>/dev/null || true
for d in api character costumes sound pipeline library style; do cp "$SRC/docs/$d.md" docs/ref-$d.md; done
cp -r "$SRC/.claude/skills/episode" "$SRC/.claude/skills/fix" "$SRC/.claude/skills/stats" .claude/skills/
mkdir -p templates && cp -r "$SRC/episodes/004-almaty" templates/frame-004 && rm -rf templates/frame-004/voice templates/frame-004/lips templates/frame-004/final.mp4 templates/frame-004/__pycache__
echo "готово: engine, tools, assets (tom/fonts/sfx), справочники docs/ref-*.md, skills, каркас templates/frame-004"
echo "дальше: bash tools/setup.sh; переписать skills и HUD под блюда (HANDOFF.md, п.4)"
