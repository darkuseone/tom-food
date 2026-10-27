"""Звук 009 — Хачапури: SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец). Новые звуки — tools/sfxbatch.py."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        ('whip_whoosh', 0.0, -2),
        # TODO: по событию на каждое EV + переход на каждый S0[сцена]; укус — nugget_bite / crunch_crouton
        # финал: без мяу/заставки — ролик перетекает в хук (LOOP), начальный whip_whoosh звучит уже на повторе
    ]
    beds = [('restaurant_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # тест v1: музыка без затухания на стыке, мастер −14 LUFS
