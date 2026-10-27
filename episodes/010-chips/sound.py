"""Звук 010 — Картофельные чипсы (тест v1): SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец). Новые: steam_hiss, bag_crinkle."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: музей, прожектор на тубе, зал ахает, свиток, хруст
        ('shimmer', 0.0, -8), ('camera_flash', e('hk_can', -0.05), -10), ('crowd_ooh', e('hk_can', 0.05), -8), ('scroll_unroll', e('hk_req'), -6), ('bag_crinkle', e('h2'), 0), ('crunch_crouton', e('hk_bite'), 0),
        # легенда: хруст-осколки, нож, ломтики, трость богача
        ('apple_crunch', S0['legend'] - 0.1, -2), ('knife_tuk', e('lg_thin'), -4), ('knife_tuk', e('lg_thin', 0.12), -6), ('knife_tuk', e('lg_thin', 0.24), -6), ('knife_tuk', e('lg_thin', 0.36), -6), ('wood_bonk', e('lg_cap'), -4), ('plate_spin', e('lg_cap', 0.1), -12), ('quiz_buzz', e('lg_mil'), -14),
        # разоблачение: страница, книга, штамп 1817, ножницы-коллаж
        ('paper_whoosh', S0['debunk'] - 0.1, -2), ('paper_whoosh', e('db_book'), -6), ('stamp_thud', e('db_year'), -2), ('quiz_ding', e('db_year', 0.05), -8), ('cloth_rip', e('db_mil'), -10), ('teleport_pop', e('db_mil', 0.45), -8), ('record_scratch', e('db_ad'), -14),
        # паб: пена, пачка CRISPS, кулёк фри, чоканье
        ('pour_oil', S0['crisps'] - 0.2, -12), ('bag_crinkle', e('cr_crisps'), 0), ('teleport_pop', e('cr_fries', -0.1), -8), ('goblet_clink', e('cr_fries', 0.1), -6), ('crowd_cheer', e('cr_fries', 0.15), -16),
        # пакет (Том-малыш): утюг-переход, Скаддер, воск, утюг по шву, съезд и хруст
        ('steam_hiss', S0['bag'] - 0.15, -6), ('shimmer', e('bg_sc'), -12), ('shimmer', e('bg_wax'), -10), ('steam_hiss', e('bg_iron', -0.2), -2), ('crunch_crouton', e('bg_slide', 0.35), 2), ('lettuce_crunch', e('bg_slide', 0.5), -2),
        # вкус: облако приправы, вывеска, сыр, лук, солонка, «вкус!»
        ('dust_whoosh', S0['flavour'] - 0.2, -6), ('neon_buzz', e('fl_tayto'), -10), ('wood_bonk', e('fl_cheese'), -6), ('wood_bonk', e('fl_onion'), -6), ('salt_shake', e('fl_cheese', 0.2), -8), ('salt_shake', e('fl_onion', 0.4), -8), ('shimmer', e('fl_taste'), -4), ('crowd_ooh', e('fl_taste', 0.1), -10),
        # суд: молоток, свиток налога, «не чипсы», диаграмма, удар → штамп
        ('gavel_bang', S0['court'] - 0.05, -4), ('scroll_unroll', e('ct_tax'), -8), ('quiz_ding', e('ct_42'), -8), ('gavel_bang', e('ct_bang'), 0), ('stamp_thud', e('ct_bang', 0.05), -2), ('crowd_cheer', e('ct_bang', 0.3), -14),
        # разгадка: вспышка, чертёж, щелчок крышки, тёплый вечер
        ('camera_flash', S0['baur'] - 0.05, -4), ('shimmer', e('br_ans'), -8), ('pencil_scribble', e('br_can'), -6), ('tiny_tuk', e('br_can', 1.0), 0), ('handbell', e('br_ash', 0.2), -18),
        # сегодня: тележка, ценник, пачки сыплются, выбор
        ('boulder_roll', S0['today'] - 0.2, -16), ('weight_slam', e('td_36', 0.25), -10), ('cash_register', e('td_36', 0.35), -6), ('bag_crinkle', e('td_36', 0.5), -4), ('teleport_pop', e('td_onion'), -8), ('teleport_pop', e('td_pap'), -8),
        # кнопка: хруст и подмигивание — без мяу, ролик перетекает в хук
        ('crunch_crouton', e('bt_wink', -0.3), 0),
    ]
    beds = [('city_loop', 0, S1['hook']), ('restaurant_loop', S0['legend'], S1['legend']), ('campfire_loop', S0['debunk'], S1['debunk']), ('restaurant_loop', S0['crisps'], S1['crisps']),
            ('factory_loop', S0['flavour'], S1['flavour']), ('kitchen_loop', S0['bag'], S1['bag']), ('city_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # тест v1: музыка без затухания на стыке, мастер −14 LUFS
