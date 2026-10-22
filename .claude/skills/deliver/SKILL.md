---
name: deliver
description: Финальный рендер и сдача выпуска «ТОМ НА ВКУС» — render.sh фоном, проверка final.sh, отправка chat.mp4 + cover.png, тексты выкладки publish.md, учёт (dishes, STATUS, костюмы), git-ветка, черновой PR. Вызывать, когда миры и звук готовы.
---
# Рендер и сдача

1. Рендер ФОНОМ (Bash `run_in_background`, ~15 мин на 60 с): `tools/render.sh <эп> > build/<эп>/render.log 2>&1; tail -4 build/<эп>/render.log`. Сам делает build_data, mkpage, dbg, cover, render, mix, final.mp4 (5 Мбит/с), chat.mp4 (H.265 ≤ 29,4 МиБ). Пока идёт — пункты 3–5.
2. `tools/final.sh <эп>` → громкость, длина, размер chat; Read `build/<эп>/final_sheet.jpg` (8 кадров).
3. `episodes/<эп>/publish.md` (формат как 002): TikTok, потом YouTube Shorts; блок = название (1 предложение, блюдо в начале, эмодзи) / пусто / описание ≤ 3 предложений с поисковыми словами + призыв «Пиши — откусим!» / пусто / 3–5 хэштегов. В Shorts — строка «Кот Том рассказывает и про города — канал ТОМ-ТУР: (ссылка)».
4. Учёт: строка в `docs/dishes.md` «Сделано» (длина, тип хука, структура, финальная фраза, дата) + «Учёт вариаций <эп>» (укус, Том-малыш, переходы, палитра, костюмы); новые костюмы → `docs/ref-costumes.md`; `STATUS.md`; `python3 tools/libindex.py`; новые приёмы → `docs/episode-formula.md`.
5. Git: на main не коммитить — `git checkout -b episode-<эп>`; коммит (final.mp4, voice/*.mp3, cover.png — в git; build/ — нет) с подписью из system-reminder; `git push -u origin episode-<эп>`; черновой PR `mcp__github__create_pull_request` (owner darkuseone, repo tom-food, base main, draft) → `subscribe_pr_activity`.
6. Владельцу: SendUserFile `build/<эп>/chat.mp4` + `episodes/<эп>/cover.png` (обложка = первый кадр) → 3–5 строк (сюжет, что нового, слабые места честно) + тексты выкладки колонкой без подписей (в code-блоках для копирования с телефона) + ссылка на PR.
