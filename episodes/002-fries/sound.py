"""Звук 002 — Картошка фри: SFX и атмосферы от событий картинки (T.EV из ev.json) и реплик. SFX: (файл, время, поправка дБ). BEDS: (луп, начало, конец).
Новые звуки 002 (молоток, хруст фри, фритюр, касса, «умпа», нож, «му») — в assets/sfx/CATALOG.md."""


def sound(T):
    E, S0, S1, DUR = T.EV, T.S0, T.S1, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: суд, удар молотка, свип-паны к сторонам, укус фри → излом кадра
        ('gavel_bang', e('hk_bang') - 0.04, 6), ('crowd_ooh', e('hk_bang', 0.15), -10), ('whip_whoosh', e('hk_be'), -4), ('whip_whoosh', e('hk_fr'), -4), ('knife_tuk', e('hk_whose', 0.6), 0),
        ('fry_crunch', e('hk_bite'), 4), ('fry_crunch', e('hk_bite', 0.14), -2), ('bell_crack', S0['meuse'] - 0.1, -10), ('dust_whoosh', S0['meuse'], -6),
        # Маас: лёд, рыбак без рыбы, «пуф» → картошка-рыбка, сковорода
        ('freeze_crackle', e('ms_frozen'), -4), ('shiver_brr', e('ms_frozen', 0.4), -6), ('teleport_pop', e('ms_swap'), -2), ('fryer_dunk', e('ms_potato'), 2), ('knife_tuk', e('ms_potato', 0.3), 0),
        # переход: сковорода в камеру → протест
        ('whip_whoosh', S0['objection'] - 0.3, -2), ('wood_bonk', S0['objection'] - 0.02, -6),
        ('gavel_bang', e('ob_bang') - 0.04, 6), ('stamp_thud', e('ob_bang', 0.05), -8), ('shimmer', e('ob_seen'), -10), ('tiny_tuk', e('ob_potato'), -4), ('tiny_tuk', e('ob_potato', 0.18), -4), ('crowd_ooh', e('ob_potato', 0.6), -6),
        # Париж: нож режет кадр, жаровня, подброс
        ('knife_chop', S0['paris'] - 0.3, 0), ('paper_whoosh', S0['paris'] + 0.1, -6), ('fryer_dunk', e('pa_fry', -0.2), 0), ('whip_whoosh', e('pa_fry', 0.1), -4), ('knife_tuk', e('pa_street'), 0),
        # ярмарка: кулёк-воронка, «умпа» Кригера, вывеска вспыхивает
        ('vortex_suck', S0['fritz'] - 0.3, -6), ('paper_whoosh', S0['fritz'] - 0.1, -4), ('oompah_horn', e('fz_bav'), -4), ('shimmer', e('fz_paris'), -4), ('crowd_ooh', e('fz_paris', 0.2), -8),
        # фритюр (Том-малыш): ныряние ×2, брикет жира, майонезная лавина
        ('fryer_dunk', S0['frietkot'] - 0.25, 2), ('fryer_dunk', e('fk_twice', 0.15), 4), ('fryer_dunk', e('fk_twice', 0.75), 4), ('tiny_tuk', e('fk_twice', 0.2), -2), ('knife_tuk', e('fk_twice', 0.8), 0),
        ('boulder_roll', e('fk_fat', -0.3), -10), ('dive_splash', e('fk_fat', 0.25), -10), ('whip_whoosh', e('fk_mayo', -0.45), -4), ('ink_splat', e('fk_mayo', 0.1), 0), ('dive_splash', e('fk_mayo', 0.15), -8),
        # окоп: пар → дым, артиллерия вдали, штамп «ЛЕГЕНДА», флажки меняются
        ('wind_gust', S0['trench'] - 0.3, -6), ('explosion_big', S0['trench'] + 0.8, -22), ('paper_whoosh', e('tr_name'), -8), ('stamp_thud', e('tr_legend'), 0), ('whip_whoosh', e('tr_mix'), -4), ('record_scratch', e('tr_mix', 0.25), -6),
        # книга: блин-переворот, перо обводит, календарь листается
        ('whip_whoosh', S0['book'] - 0.2, -2), ('pencil_scribble', e('bk_book'), -4), ('paper_whoosh', e('bk_sixty'), -6), ('typewriter', e('bk_sixty', 0.1), -12), ('knife_tuk', e('bk_sixty', 0.9), 0),
        # Айдахо: дверь морозилки, заморозка, грузовик
        ('door_swing', S0['idaho'] - 0.2, -2), ('freeze_crackle', e('id_freeze'), -2), ('shiver_brr', e('id_freeze', 0.4), -6), ('heli_sputter', e('id_67'), -14), ('shimmer', e('id_mc'), -10),
        # фастфуд: лавина фри, брусок жира, календарь, масло, «му»
        ('fry_crunch', S0['tallow'] - 0.3, -4), ('boulder_drop', S0['tallow'] - 0.1, -10), ('weight_slam', e('tw_tallow', 0.1), -8), ('fryer_dunk', e('tw_tallow', 0.15), 0), ('stamp_thud', e('tw_then'), -4),
        ('pour_oil', e('tw_oil'), 0), ('bubbles_burst', e('tw_aroma', -0.3), -10), ('cow_moo', e('tw_aroma', 0.4), -8),
        # суд вегетарианцев: касса-чек, молоток, чек шлёпается, деньги
        ('cash_register', S0['lawsuit'] - 0.3, 0), ('gavel_bang', e('lw_court', 0.06), 6), ('crowd_cheer', e('lw_court', 0.2), -14), ('paper_whoosh', e('lw_minus'), -2), ('stamp_thud', e('lw_minus', 0.42), 0),
        ('coins_pouch', e('lw_usd'), -6), ('crowd_ooh', e('lw_usd', 0.2), -8),
        # сегодня: майонезная спираль, хиро-кулёк, приговор, хруст
        ('pour_oil', S0['today'] - 0.3, -2), ('shimmer', S0['today'] + 0.2, -6), ('ship_bell', e('td_belgium', 0.4), -14), ('whip_whoosh', e('td_verdict'), -6),
        ('fry_crunch', e('td_eat'), 0), ('fry_crunch', e('td_eat', 0.5), -2), ('fry_crunch', e('td_eat', 1.0), -4),
        # кнопка: молоток (петля к хуку), мяу
        ('gavel_bang', e('bt_bang') - 0.04, 6), ('cat_meow', DUR - 0.9, -6),
    ]
    beds = [('restaurant_loop', 0, S0['meuse']), ('blizzard_loop', S0['meuse'], S1['meuse']), ('restaurant_loop', S0['objection'], S1['objection']), ('bazaar_loop', S0['paris'], S1['paris']),
            ('bazaar_loop', S0['fritz'], S1['fritz']), ('kitchen_loop', S0['frietkot'], S1['frietkot']), ('wind_gust', S0['trench'], S1['trench']), ('kitchen_loop', S0['book'], S1['book']),
            ('wind_gust', S0['idaho'], S1['idaho']), ('kitchen_loop', S0['tallow'], S1['tallow']), ('restaurant_loop', S0['lawsuit'], S1['lawsuit']), ('heavy_water_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus')
