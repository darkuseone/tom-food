"""Звук 008 — Пельмени: SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец)."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: студия викторины, «ухо», укус
        ('crowd_cheer', 0.0, -16), ('crowd_ooh', e('hk_ears', 0.05), -8), ('shimmer', e('hk_ears', 0.1), -10), ('quiz_ding', e('hk_tr'), -6), ('nugget_bite', e('hk_bite'), -2), ('fork_squish', e('hk_bite', 0.05), 4),
        # ушки: скалка, штамп ПРАВДА, доска
        ('wood_bonk', S0['ears'] - 0.1, -6), ('stamp_thud', e('er_pr'), -2), ('quiz_ding', e('er_pr', 0.05), -8), ('pencil_scribble', e('er_pel', -0.1), -8), ('pencil_scribble', e('er_nyan', -0.1), -8), ('teleport_pop', e('er_nyan', 0.9), -6),
        # версии: карта, два штампа, всадник
        ('paper_whoosh', S0['origin'] - 0.1, -4), ('teleport_pop', e('or_ural'), -8), ('stamp_thud', e('or_v1'), -4), ('teleport_pop', e('or_cn'), -8), ('stamp_thud', e('or_cn', 0.2), -4), ('camel_grunt', e('or_mg'), -16),
        # улика: нить, лупа, «не растёт»
        ('whip_whoosh', S0['pepper'] - 0.1, -6), ('shimmer', e('pp_pep'), -10), ('shiver_brr', e('pp_ural', 0.3), -10), ('quiz_buzz', e('pp_no'), -8), ('stamp_thud', e('pp_no', 0.2), -6),
        # книги: страница, МИФ, листание
        ('paper_whoosh', S0['books'] - 0.1, -2), ('quiz_buzz', e('bk_myth'), -4), ('stamp_thud', e('bk_myth', 0.02), -2), ('paper_whoosh', e('bk_books'), -8), ('paper_whoosh', e('bk_books', 0.6), -8), ('paper_whoosh', e('bk_books', 1.2), -8), ('shimmer', e('bk_19'), -8),
        # мороз: позёмка, иней, сани
        ('wind_gust', S0['frozen'] - 0.2, -6), ('freeze_crackle', e('fz_out', 0.6), -8), ('pillow_poof', e('fz_sack'), -8), ('sleigh_bells', e('fz_taiga'), -10), ('quiz_ding', e('fz_true'), -6), ('stamp_thud', e('fz_true', 0.02), -4),
        # начинка: Том-малыш, три мяса
        ('knife_tuk', S0['meat'] - 0.15, 0), ('fork_squish', e('mt_beef'), 2), ('teleport_pop', e('mt_beef', 0.1), -8), ('fork_squish', e('mt_pork'), 2), ('teleport_pop', e('mt_pork', 0.1), -8), ('fork_squish', e('mt_lamb'), 2), ('teleport_pop', e('mt_lamb', 0.1), -8), ('medal_fanfare', e('mt_three', 0.3), -10),
        # Новый год: салют, сюрприз
        ('fireworks', S0['lucky'] - 0.2, -8), ('shimmer', e('lk_hide'), -8), ('plate_spin', e('lk_luck', -0.4), -12), ('coin_ring', e('lk_luck'), -6),
        # памятник: затвор, вилка
        ('camera_flash', S0['monument'] - 0.05, -4), ('boulder_drop', e('mn_mon'), -14), ('weight_slam', e('mn_big', 0.3), -8), ('camera_flash', e('mn_fork'), -8), ('quiz_ding', e('mn_fork', 0.1), -6), ('stamp_thud', e('mn_fork', 0.12), -6),
        # машины: конвейер, весы, счётчик
        ('cash_register', e('mc_15', 0.3), -10), ('typewriter', e('mc_mach'), -14), ('quiz_ding', e('mc_it', 0.4), -8), ('stamp_thud', e('mc_it', 0.42), -6),
        # финал: сметана, счётчик, вопрос
        ('fork_squish', S0['today'] - 0.1, 6), ('tiny_tuk', e('td_how'), -6), ('tiny_tuk', e('td_how', 0.17), -6), ('tiny_tuk', e('td_how', 0.34), -6), ('tiny_tuk', e('td_how', 0.5), -6), ('quiz_buzz', e('td_ears'), -12),
        # кнопка
        ('nugget_bite', e('bt_wink', -0.2), -2), ('cat_meow', DUR - 0.9, -6),
    ]
    beds = [('restaurant_loop', 0, S1['hook']), ('forest_loop', S0['ears'], S1['ears']), ('blizzard_loop', S0['frozen'], S1['frozen']), ('kitchen_loop', S0['lucky'], S1['lucky']), ('factory_loop', S0['machines'], S1['machines']), ('kitchen_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus')
