"""Звук 001 — Салат Цезарь: SFX и атмосферы от событий картинки (T.EV из ev.json) и реплик. SFX: (файл, время, поправка дБ). BEDS: (луп, начало, конец).
Новые кухонные звуки канала — в assets/sfx/CATALOG.md (раздел «ТОМ НА ВКУС»)."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: римский пир, вилка, тарелку выдёргивают, гренка-хрум → трещина
        ('whip_whoosh', 0.0, -2), ('goblet_clink', 0.35, -6), ('record_scratch', e('hk_yank'), 0), ('whip_whoosh', e('hk_yank', 0.05), -2), ('wood_bonk', e('hk_stab'), 0),
        ('crunch_crouton', e('hk_bite'), 3), ('crunch_crouton', e('hk_bite', 0.12), -2), ('bell_crack', S0['tijuana'] - 0.1, -6), ('dust_whoosh', S0['tijuana'], -4),
        # Тихуана 1924
        ('biplane_pass', S0['tijuana'] + 0.6, -14), ('typewriter', e('tj_year', 0.1), -12), ('stamp_thud', e('tj_dry'), -2), ('knife_tuk', e('tj_dry', 0.25), 2), ('cloth_rip', e('tj_dry', 0.5), -8),
        # переход: машина и пыль → зал Caesar's
        ('heli_sputter', S0['cardini'] - 0.4, -10), ('dust_whoosh', S0['cardini'] - 0.3, 0),
        ('goblet_clink', e('cd_drink'), 0), ('goblet_clink', e('cd_drink', 0.12), -4), ('shimmer', e('cd_name'), -4), ('knife_tuk', e('cd_name', 0.15), 2),
        # кухня 4 июля
        ('door_swing', S0['kitchen'] - 0.2, 0), ('crowd_cheer', e('kt_crowd'), -10), ('fireworks', e('kt_crowd', 0.3), -14), ('tiny_tuk', e('kt_empty'), -2), ('rock_knock', e('kt_empty', 0.1), -8),
        ('paper_whoosh', e('kt_daughter'), -4), ('stamp_thud', e('kt_stamp'), 2),
        # миска: Том-малыш
        ('vortex_suck', S0['bowl'] - 0.25, -6), ('dive_splash', S0['bowl'] + 0.05, -12), ('whip_whoosh', e('bw_leaf'), -4), ('weight_slam', e('bw_leaf', 0.25), -4),
        ('boulder_roll', e('bw_egg'), -10), ('egg_crack', e('bw_crout', 0.1), 0), ('shimmer', e('bw_parm'), -6), ('boulder_drop', e('bw_crout', 0.2), -4), ('boulder_drop', e('bw_crout', 0.35), -6),
        ('whip_whoosh', e('bw_mix', -0.3), -2), ('wood_bonk', e('bw_mix', 0.1), -4), ('pour_oil', e('bw_oil'), 0),
        # руками, хрусть
        ('whip_whoosh', S0['hands'] - 0.15, -4), ('lettuce_crunch', e('hd_crunch'), 4), ('lettuce_crunch', e('hd_crunch', 0.18), -2), ('knife_tuk', e('hd_crunch', 0.05), 0),
        # нуар: соус
        ('ink_splat', S0['sauce'] - 0.15, -2), ('ink_splat', S0['sauce'] + 0.05, -4), ('stamp_thud', e('sc_no'), -2), ('clock_tick_heavy', e('sc_though'), -6), ('glacier_groan', e('sc_though', 0.1), -18),
        ('shimmer', e('sc_hide'), -4), ('bubbles_burst', e('sc_hide', 0.3), -8), ('knife_tuk', e('sc_worc', 0.2), 2),
        # лётчики
        ('heavy_water_loop', S0['pilots'] - 0.3, -10), ('biplane_pass', S0['pilots'] + 0.2, -4), ('shimmer', e('pl_swear'), -8), ('knife_tuk', e('pl_pilots', 0.1), 2), ('coins_pouch', e('pl_add'), -8), ('fish_swoosh', e('pl_anch'), -2),
        # Голливуд
        ('biplane_pass', S0['hollywood'] - 0.3, -8), ('clapperboard', S0['hollywood'] + 0.1, 0), ('paper_whoosh', S0['hollywood'] + 0.4, -6), ('typewriter', e('hw_words'), -10),
        # Париж
        ('clapperboard', S0['paris'] - 0.05, 2), ('goblet_clink', e('pr_gourm'), -6), ('crowd_ooh', e('pr_best'), -2), ('medal_fanfare', e('pr_best', 0.2), -6), ('knife_tuk', e('pr_half', 0.1), 2),
        # курица
        ('plate_spin', S0['chicken'] - 0.25, -2), ('chicken_cluck', e('ck_in'), 0), ('table_crash', e('ck_land'), -8), ('chicken_cluck', e('ck_land', 0.4), -6), ('stamp_thud', e('ck_fight'), -6), ('stamp_thud', e('ck_fight', 0.2), -6),
        # сегодня
        ('cloche_lift', S0['today'] - 0.15, 0), ('shimmer', S0['today'] + 0.3, -6), ('tiny_tuk', e('td_third'), -4), ('tiny_tuk', e('td_third', 0.1), -4), ('tiny_tuk', e('td_third', 0.2), -4), ('knife_tuk', e('td_third', 0.55), 2), ('poof_cloth', e('td_julius', 0.2), -8),
        # кнопка
        ('whip_whoosh', e('bt_wreath'), -4), ('shimmer', e('bt_wreath', 0.3), -4), ('crunch_crouton', e('bt_wink'), 0), ('cat_meow', DUR - 0.9, -6),
    ]
    beds = [('feast_loop', 0, S0['tijuana']), ('city_loop', S0['tijuana'], S1['tijuana']), ('restaurant_loop', S0['cardini'], S1['cardini']), ('kitchen_loop', S0['kitchen'], S1['kitchen']),
            ('restaurant_loop', S0['hands'], S1['hands']), ('wind_gust', S0['pilots'], S1['pilots']), ('restaurant_loop', S0['paris'], S1['paris']),
            ('kitchen_loop', S0['chicken'], S1['chicken']), ('restaurant_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus')
