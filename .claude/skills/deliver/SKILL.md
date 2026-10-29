---
name: deliver
description: Финальный рендер и сдача выпуска «ТОМ НА ВКУС» — render.sh фоном, проверка final.sh, отправка chat.mp4 + cover.png, тексты выкладки publish.md, учёт (dishes, STATUS, костюмы), git-ветка, черновой PR. Вызывать, когда миры и звук готовы.
---
# Рендер и сдача

1. Рендер ФОНОМ (Bash `run_in_background`, ~15 мин на 60 с): `tools/render.sh <эп> > build/<эп>/render.log 2>&1; tail -4 build/<эп>/render.log`. Сам делает build_data, mkpage, dbg, cover, render, mix, final.mp4 (5 Мбит/с), chat.mp4 (H.265 ≤ 29,4 МиБ). Пока идёт — пункты 3–5.
2. `tools/final.sh <эп>` → громкость (с 009 — LUFS −14, true peak ≤ −1), длина, старт голоса, размер chat; Read `build/<эп>/final_sheet.jpg` (8 кадров) и с 009 — `build/<эп>/loop.jpg` (конец | начало — стык петли).
3. `episodes/<эп>/publish.md` (формат как 002): TikTok, потом YouTube Shorts; блок = название (1 предложение, блюдо в начале, эмодзи) / пусто / описание ≤ 3 предложений с поисковыми словами + призыв «Пиши — откусим!» / пусто / 3–5 хэштегов. В Shorts — строка «Кот Том рассказывает и про города — канал ТОМ-ТУР: (ссылка)».
4. Учёт (`python3 tools/libindex.py` — индекс lib): строка в `docs/dishes.md` «Сделано» (длина, тип хука, структура, финальная фраза, дата) + «Учёт вариаций <эп>» (укус, Том-малыш, переходы, палитра, костюмы); новые костюмы → `docs/ref-costumes.md`; `STATUS.md`; `python3 tools/libindex.py`; новые приёмы → `docs/episode-formula.md`.
5. Git: коммит в ветку `episode-<эп>` (final.mp4, voice/*.mp3, cover.png — в git; build/ — нет) с подписью из system-reminder → `git push -u origin episode-<эп>` → **сразу в main** (владелец, 29.10.2026): `git checkout main && git pull origin main && git merge --ff-only episode-<эп> && git push origin main` (не ff — `git merge episode-<эп>` без перезаписи истории). Стековых PR больше не делать; при желании — черновой PR в main для истории.
6. Владельцу: SendUserFile `build/<эп>/chat.mp4` + `episodes/<эп>/cover.png` (обложка = первый кадр) → 3–5 строк (сюжет, что нового, слабые места честно) + тексты выкладки колонкой без подписей (в code-блоках для копирования с телефона) + ссылка на PR.
