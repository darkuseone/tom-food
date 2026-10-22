"""Звук 003 — Селёдка под шубой: SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец). Новые звуки — tools/sfxbatch.py."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        ('whip_whoosh', 0.0, -2),
        # TODO: по событию на каждое EV + переход на каждый S0[сцена]; укус — nugget_bite / crunch_crouton
        ('cat_meow', DUR - 0.9, -6),
    ]
    beds = [('restaurant_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus')
