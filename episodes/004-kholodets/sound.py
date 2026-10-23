"""Звук 004 — Холодец: SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец)."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: студия антирейтинга
        ('whip_whoosh', 0.0, -2), ('typewriter', 0.3, -12), ('record_scratch', e('hk_rank'), -4), ('crowd_boo', e('hk_rank', 0.1), -8), ('jelly_wobble', e('hk_rank', 0.2), 0), ('gavel_bang', e('hk_rank', 0.5), -6),
        ('jelly_wobble', e('hk_dip'), -2), ('fork_squish', e('hk_bite'), 12), ('jelly_wobble', e('hk_bite', 0.1), -4),
        # голосование
        ('jelly_wobble', S0['vote'] - 0.1, 0), ('tiny_tuk', LS('s1'), -6), ('tiny_tuk', LS('s1') + 0.25, -6), ('tiny_tuk', LS('s1') + 0.5, -6), ('crowd_boo', e('vt_for'), -14), ('stamp_thud', e('vt_no'), -2), ('knife_tuk', e('vt_no', 0.1), 0),
        # Франция 1375
        ('whip_whoosh', S0['viandier'] - 0.1, -4), ('fire_flare', S0['viandier'] + 0.2, -12), ('medal_fanfare', e('vn_king'), -10), ('pencil_scribble', e('vn_write'), -4), ('knife_tuk', e('vn_king', 0.1), 0),
        # Домострой
        ('scroll_unroll', S0['domostroi'] - 0.1, -2), ('pencil_scribble', e('dm_book'), -6), ('knife_tuk', e('dm_book', 0.1), 0), ('stamp_thud', e('dm_age'), -6),
        # север/юг
        ('paper_whoosh', S0['names'] - 0.1, -2), ('wind_gust', e('nm_north'), -10), ('knife_tuk', e('nm_north'), -2), ('shimmer', e('nm_south'), -8), ('knife_tuk', e('nm_south'), -2), ('record_scratch', e('nm_fight'), -10), ('jelly_wobble', e('nm_fight', 0.2), -2),
        # Пётр
        ('cloth_rip', S0['peter'] - 0.1, -6), ('ship_bell', e('pt_tsar'), -12), ('jelly_wobble', e('pt_jel'), -2), ('apple_crunch', e('pt_cuc', 0.2), -6), ('lettuce_crunch', e('pt_kraut', 0.2), -6),
        # прислуга
        ('handbell', S0['servants'] - 0.1, -2), ('whip_whoosh', e('sv_pr', -0.4), -6), ('plate_spin', e('sv_pr'), -6), ('knife_tuk', e('sv_pr'), 0),
        # Том-малыш в кастрюле
        ('bubbles_burst', S0['bones'] - 0.1, -2), ('dive_splash', S0['bones'] + 0.1, -6), ('weight_slam', e('bn_bone', 0.3), -8), ('dive_splash', e('bn_tail', 0.3), -8), ('dive_splash', e('bn_ear', 0.3), -8),
        ('clock_tick_heavy', e('bn_hours'), -6), ('clock_tick_heavy', e('bn_hours', 0.5), -6), ('freeze_crackle', e('bn_set'), -6), ('jelly_wobble', e('bn_set', 0.3), 0),
        # заливное
        ('door_swing', S0['zalivnoe'] - 0.1, -4), ('knife_tuk', e('zl_gel'), 0), ('paper_whoosh', e('zl_gel', 0.1), -8), ('stamp_thud', e('zl_gel', 0.5), -6), ('wood_bonk', e('zl_gran', 0.2), -2), ('wood_bonk', e('zl_gran', 0.45), -4),
        # родня
        ('shimmer', S0['relatives'] - 0.1, -6), ('tiny_tuk', e('rl_ge'), -2), ('knife_tuk', e('rl_ge'), -2), ('tiny_tuk', e('rl_ro'), -2), ('knife_tuk', e('rl_ro'), -2), ('tiny_tuk', e('rl_ko'), -2), ('knife_tuk', e('rl_ko'), -2),
        # сегодня
        ('boulder_drop', S0['today'] - 0.1, -12), ('poof_cloth', S0['today'], -6), ('crowd_boo', e('td_frown'), -16), ('clock_tick_heavy', e('td_8h'), -6), ('fork_squish', e('td_8m'), 10), ('fork_squish', e('td_8m', 0.3), 10), ('crunch_crouton', e('td_8m', 0.6), -8),
        # кнопка
        ('jelly_wobble', S0['button'], -4), ('fork_squish', e('bt_wink', -0.2), 10), ('cat_meow', DUR - 0.9, -6),
    ]
    beds = [('restaurant_loop', 0, S0['viandier']), ('feast_loop', S0['viandier'], S1['viandier']), ('kitchen_loop', S0['zalivnoe'], S1['zalivnoe']), ('campfire_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus')
