---
name: sound
description: Звук выпуска «ТОМ НА ВКУС» — SFX по событиям картинки (evdump → sound.py), новые звуки пакетом через sfxbatch.py, музыка канала, микс mix.py с проверкой громкости. Вызывать после готовых миров.
---
# Звук

1. `node tools/evdump.cjs <эп>` → `episodes/<эп>/ev.json`; список событий: `python3 -c "import json;d=json.load(open('episodes/<эп>/ev.json'));print({k:round(v,2) for k,v in d['EV'].items()})"`.
2. Имена звуков в библиотеке (не генерировать заново): `ls assets/sfx | sed 's/\.[a-z0-9]*$//' | tr '\n' ' '`; описания — `grep -n "ТОМ НА ВКУС" -A40 assets/sfx/CATALOG.md`.
   Кухня/еда: crunch_crouton, nugget_bite (укус), lettuce_crunch, apple_crunch, knife_tuk (ценник), egg_crack, pour_oil, deep_fry (+6), meat_grinder, salt_shake (−8), plate_spin, cloche_lift, door_swing, freezer_open (+4), chicken_cluck, cash_register, restaurant_loop, kitchen_loop. Общие: whip_whoosh, paper_whoosh, shimmer, stamp_thud, tiny_tuk, wood_bonk, boulder_drop, gavel_bang, thunder_crack, electric_zap, camera_flash, crowd_ooh, record_scratch, bubbles_burst, poof_cloth, ink_splat, coin_ring, cat_meow.
3. Недостающие — одной командой (≤ 5 параллельно, проверка, копия в assets, строки в CATALOG):
   `python3 tools/sfxbatch.py <эп> "имя|сек|English prompt, no voice|что по-русски" ...` (обычно 0,5–2,5 с; HARSH — только тихо).
4. `sound.py`: `sfx = [(имя, время, дБ)]` — звук на каждое EV + переход на каждый `S0[сцена]` (за 0.1–0.2 с до), «ценник» knife_tuk на ключевые слова, укус в хуке +3…+4 дБ; `beds` — лупы атмосферы по сценам; `music='music_tomnavkus'` (своя музыка канала; новую — `tools/tts.py music <out> 20 "<промпт>"` только по решению владельца).
5. `python3 tools/mix.py <эп>` → печатает mean/max: цель mean ≈ −20 дБ, пик ≤ −1 дБ. Если нет — править дБ в sound.py, не лимитер.
