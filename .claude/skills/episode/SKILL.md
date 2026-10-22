---
name: episode
description: Новый выпуск «ТОМ НА ВКУС» от блюда до готового ролика (факты → сценарий → озвучка → миры → звук → рендер → сдача). Вызывать, когда владелец просит «новое видео / выпуск про <блюдо>».
---
# /episode <блюдо> — выпуск «ТОМ НА ВКУС»

Один агент, по очереди. Каждый этап — свой скил, грузить по мере надобности (экономия контекста): `facts` → `scene` → `sound` → `deliver`. Правки после сдачи — `fix`, статистика — `stats`.
Перед стартом: `STATUS.md`, `docs/dishes.md` (что уже было: хук, структура, переходы, палитра, костюмы — НЕ повторять), `docs/decisions.md`. Движок не читать — `docs/ref-api.md` + скил `scene`.

## Порядок (≈ как в 002, ~2 ч работы)
1. **Факты и сценарий** — скил `facts`. Итог: `docs/sources/<эп>.md`, `episodes/<эп>/script.md`, `lines.json`, `est.py` 55–64 с.
   Сценарий → SendUserFile + 3 строки. Ждать «ок», если владелец не сказал «делай сам / начинай сразу после сценария».
2. **Заготовка:** `python3 tools/new_episode.py <NNN-блюдо> "<Блюдо>" hook,<сцены>,today` — копирует общий код (direct, props, transitions, food, costumes*, nug…) из последнего выпуска, создаёт scenes.js/episode.json/lines.json/sound.py/w_*.js/w_cover.js/script.md/sources. Сцена = одна реплика.
   (Если заготовку делать после сценария — перенести реплики в созданный lines.json.)
3. **Озвучка:** `python3 tools/tts.py lines <эп>` → `python3 tools/prep_voice.py <эп>` → `python3 tools/build_data.py <эп>` (печатает тайминги сцен). Голос и модель — `tools/config.json`; раз в выпуск сверить новые модели: `curl -s -H "xi-api-key: $ELEVENLABS_API_KEY" https://api.elevenlabs.io/v1/models | python3 -c "import json,sys;print([m['model_id'] for m in json.load(sys.stdin)][:6])"`.
4. **Миры** — скил `scene`: scenes.js (YR, HOOK_LINES, RECIPE), каждый `w_<сцена>.js` целиком одним Write, проверка `tools/check.sh <эп> t1 t2 …` пачками по 3–4 сцены, 1–2 круга правок.
5. **Обложка:** `w_cover.js` → `node tools/cover.cjs <эп>` → Read `build/<эп>/cover_small.jpg`. Блюдо — герой кадра (крупно, в лапе у Тома, glow), заголовок 2 строки, плашка не закрывает блюдо.
6. **Звук** — скил `sound` (evdump → sound.py → новые SFX через `tools/sfxbatch.py` → `tools/mix.py`).
7. **Рендер и сдача** — скил `deliver` (render.sh фоном → final.sh → SendUserFile → тексты → учёт → git + PR).
