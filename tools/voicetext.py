"""Текст реплики: что показать в субтитрах и что отдать в озвучку.
В lines.json: [теги эмоций] в начале, ударения U+0301 (только для голоса), {показать|сказать} — когда пишется одно, а произносится другое
(«{1845-м|ты́сяча восемьсо́т со́рок пя́том}», «{США|сэ-шэ-а́}»). Аббревиатуры из tools/say.json подставляются в озвучку сами.
  python3 tools/voicetext.py <эп>   # проверка lines.json до платной озвучки"""
import json, re, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
SAY = {k: v for k, v in json.load(open(ROOT / 'tools/say.json')).items() if k != '_'}
ALT = re.compile(r'\{([^|{}]*)\|([^|{}]*)\}')
VOW = 'аеёиоуыэюяАЕЁИОУЫЭЮЯ'


def shown(text):                                                        # субтитры: без тегов, ударений, с левой частью {a|b}
    return ALT.sub(r'\1', re.sub(r'\[.*?\]\s*', '', text)).replace('́', '').strip()


def spoken(text):                                                       # озвучка: теги остаются, {a|b} → b, словарь say.json
    t = ALT.sub(r'\2', text)
    for k, v in SAY.items(): t = re.sub(rf'(?<![\w-]){re.escape(k)}\u0301?(?![\w-])', v, t)
    return t


def check(key, text):                                                   # предупреждения до платной генерации
    w = []; body = re.sub(r'\[.*?\]', '', ALT.sub(r'\2', text))
    for wd in re.findall(r"[А-Яа-яЁё́\-]+", body):
        for part in wd.split('-'):
            n = sum(ch in VOW for ch in part)
            if n >= 2 and '́' not in part and 'ё' not in part.lower() and not part.isupper(): w.append(f'нет ударения: {part}')
    bare = ALT.sub('', text)
    for ab in re.findall(r'(?<![\w-])[А-ЯЁA-Z]{2,}(?![\w-])', bare.replace('́', '')):
        stressed = re.search('\u0301?'.join(map(re.escape, ab)), bare) and '́' in re.search('\u0301?'.join(map(re.escape, ab)), bare).group(0)
        if ab not in SAY and not stressed: w.append(f'аббревиатура без произношения: {ab} → добавь в tools/say.json или {{{ab}|…}}')
    if re.search(r'\d', ALT.sub('', re.sub(r'\[.*?\]', '', text))): w.append('цифры: пиши словами или {1845|ты́сяча восемьсо́т…}')
    if 'whisper' in text.lower() or 'шёпот' in text.lower(): w.append('шёпот запрещён')
    return [f'{key}: {x}' for x in w]


if __name__ == '__main__':
    if len(sys.argv) < 2: sys.exit(__doc__)
    L = json.load(open(ROOT / 'episodes' / sys.argv[1] / 'lines.json')); W = [x for k, v in L.items() for x in check(k, v)]
    print('\n'.join(W) if W else 'ок: ударения, аббревиатуры, цифры')
