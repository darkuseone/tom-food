"""Звук 021 — Сырники («ищем сыр»: прямая хронология, следствие по одному слову). SFX: (файл, время, дБ). BEDS: (луп, начало, конец).
Новые (021): balalaika_sting (подпись выпуска — балалайка: первый звук, вопросы, раскрытия), syrnik_sizzle (шкворчание сырников), tvorog_squish (чвак творога),
spatula_flip (лопатка переворачивает сырник), bark_scratch (писало по бересте)."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: балалайка, сковорода шкворчит, бабушка переворачивает, сыр с биркой, «?», укус — хруст и пар
        ('balalaika_sting', 0.0, -7), ('syrnik_sizzle', 0.05, -14), ('spatula_flip', e('hk_flip'), -12), ('teleport_pop', e('hk_cheese'), -10), ('knife_tuk', e('hk_cheese', 0.15), -10),
        ('quiz_buzz', e('hk_why'), -14), ('crowd_ooh', e('hk_why', 0.1), -18), ('whip_whoosh', e('hk_grab'), -14), ('crunch_crouton', e('hk_bite'), -1), ('tvorog_squish', e('hk_bite', 0.1), -4), ('steam_hiss', e('hk_bite', 0.25), -16),
        # 1380 Новгород: кадр сворачивается в свиток бересты, чайки, писало, бочка рыбы, горшок масла, «сыры» шлёп, призрачный сыр и крест, тычок в творог
        ('scroll_unroll', S0['bark'] - 0.2, -4), ('seagulls', e('bk_city', 0.2), -16), ('bark_scratch', e('bk_bark'), -12), ('bark_scratch', e('bk_bark', 1.3), -14), ('fish_swoosh', e('bk_fish'), -10), ('wood_bonk', e('bk_fish', 0.1), -8),
        ('jar_lid', e('bk_butter'), -10), ('tvorog_squish', e('bk_cheese'), -2), ('knife_tuk', e('bk_cheese', 0.15), -10), ('shimmer', e('bk_hard'), -16), ('quiz_buzz', e('bk_no'), -12), ('tvorog_squish', e('bk_poke'), -2), ('balalaika_sting', e('bk_poke', 0.3), -14),
        # Масленица: тройка с бубенцами, растяжка «СЫР», блин в сметану, колокол, свет гаснет, «7 недель», крест на молоке и масле
        ('sleigh_bells', S0['masl'] - 0.25, -4), ('whip_whoosh', S0['masl'] - 0.1, -12), ('knife_tuk', e('ms_syr'), -8), ('crowd_cheer', e('ms_syr', 0.2), -18), ('tvorog_squish', e('ms_week'), -6),
        ('church_bells', e('ms_bell'), -10), ('wind_gust', e('ms_dark'), -8), ('shiver_brr', e('ms_seven', 0.2), -12), ('stamp_thud', e('ms_seven'), -6), ('quiz_buzz', e('ms_milk'), -14), ('quiz_buzz', e('ms_butter'), -14),
        # «Домострой»: страница переворачивается, огонь печи, книга распахивается, свеча, корзина яиц, лупа, счётчик, штамп «НИ РАЗУ», кошка «кис-кис» (пауза-гэг)
        ('paper_whoosh', S0['domo'] - 0.2, -4), ('fire_flare', S0['domo'] + 0.2, -16), ('scroll_unroll', e('dm_book'), -10), ('shimmer', e('dm_tsar'), -14), ('knife_tuk', e('dm_tsar', 0.1), -10),
        ('egg_crack', e('dm_eggs'), -10), ('wood_bonk', e('dm_eggs', 0.15), -12), ('balalaika_sting', e('dm_trick'), -14), ('pencil_scribble', e('dm_word'), -12), ('clock_tick_heavy', e('dm_word', 0.3), -16), ('stamp_thud', e('dm_zero'), -2),
        ('cat_meow', e('dm_call', 0.4), -14), ('record_scratch', e('dm_gag'), -14), ('tiny_tuk', e('dm_gag', 0.3), -10),
        # XIX в.: блин подбросили — переворот, «форма» — тук-тук-тук, блин с начинкой, плюх в кипяток, шумовка, пельмень
        ('spatula_flip', S0['moloh'] - 0.2, -4), ('pot_boil', S0['moloh'] + 0.1, -16), ('tiny_tuk', e('mo_form'), -10), ('tiny_tuk', e('mo_form', 0.5), -10), ('tiny_tuk', e('mo_form', 1.0), -10),
        ('dough_slap', e('mo_blin'), -8), ('dive_splash', e('mo_plop'), -6), ('steam_hiss', e('mo_plop', 0.2), -14), ('spoon_clink', e('mo_pelm'), -8), ('teleport_pop', e('mo_pelm', 0.1), -12),
        # 1866 сыроварня: круг сыра выкатывается, ставни, телега, Верещагин, «Вот он, сыр!» — фанфара, «РАЗГАДКА?» — ✕, лента 300 лет
        ('boulder_roll', S0['cheese'] - 0.25, -8), ('wood_bonk', S0['cheese'] + 0.05, -10), ('door_swing', e('ch_hard'), -10), ('cow_moo', e('ch_hard', 0.6), -18), ('boulder_roll', e('ch_folk'), -16), ('knife_tuk', e('ch_ver'), -8),
        ('medal_fanfare', e('ch_here'), -12), ('shimmer', e('ch_here', 0.1), -14), ('quiz_ding', e('ch_riddle'), -10), ('quiz_buzz', e('ch_no'), -6), ('weight_slam', e('ch_no', 0.1), -14), ('pencil_scribble', e('ch_300', -0.3), -12), ('knife_tuk', e('ch_300', 0.3), -8),
        # 1950-е столовая: штамп-переход, книга, вычёркивание мелом, штамп «ТВОРОЖНИКИ», буквы осыпаются, смех очереди
        ('stamp_thud', S0['soviet'] - 0.1, -4), ('spoon_clink', S0['soviet'] + 0.3, -16), ('paper_whoosh', e('sv_books'), -10), ('pencil_scribble', e('sv_ren'), -10), ('stamp_thud', e('sv_stamp'), -4),
        ('pebbles_pour', e('sv_fail'), -10), ('crowd_cheer', e('sv_fail', 0.2), -16), ('balalaika_sting', e('sv_fail', 0.5), -14),
        # ★ Том-малыш: капля сметаны плюх-переход, сковорода шкворчит, прыжок, разгадка — вспышка, табличка, сыр-айсберг, «СЫР» улетает, паспорт «тук» (пауза-гэг)
        ('drip_plop', S0['syrnik'] - 0.2, -2), ('syrnik_sizzle', S0['syrnik'] + 0.1, -16), ('whip_whoosh', e('sn_jump'), -12), ('tvorog_squish', e('sn_jump', 0.6), -6), ('shimmer', e('sn_sign', -0.2), -8), ('balalaika_sting', e('sn_sign'), -10),
        ('wood_bonk', e('sn_sign', 0.15), -8), ('ice_slide', e('sn_cheese'), -10), ('whip_whoosh', e('sn_take'), -10), ('teleport_pop', e('sn_take', 0.6), -10), ('paper_whoosh', e('sn_pass'), -10), ('wood_bonk', e('sn_land'), -4),
        ('crowd_ooh', e('sn_land', 0.15), -16), ('syrnik_sizzle', e('sn_gag', -0.4), -16), ('paper_whoosh', e('sn_gag'), -12), ('medal_fanfare', e('sn_gag', 0.2), -16),
        # сегодня: занавеска-переход, лопатка, свечи «470» вспыхивают, флажки А / Б
        ('poof_cloth', S0['today'] - 0.2, -6), ('bird_flutter', S0['today'] + 0.2, -14), ('spatula_flip', e('td_day', 0.6), -12), ('syrnik_sizzle', e('td_day', 0.7), -16), ('fire_flare', e('td_470'), -12), ('knife_tuk', e('td_470', 0.1), -8),
        ('quiz_ding', e('td_a'), -10), ('quiz_ding', e('td_b'), -10), ('balalaika_sting', e('td_b', 0.5), -14),
        # кнопка (тот же кадр): укус со сметаной, ПОДПИШИСЬ всплывает; без мяу — петля в хук (балалайка хука звучит на повторе)
        ('crunch_crouton', e('bt_bite'), -6), ('tvorog_squish', e('bt_bite', 0.1), -8), ('teleport_pop', DUR - 1.9, -12),
    ]
    beds = [('kitchen_loop', 0, S1['hook']), ('harbor_loop', S0['bark'], S1['bark']), ('feast_loop', S0['masl'], E['ms_dark']), ('blizzard_loop', E['ms_dark'], S1['masl']),
            ('campfire_loop', S0['domo'], S1['domo']), ('kitchen_loop', S0['moloh'], S1['moloh']), ('forest_loop', S0['cheese'], S1['cheese']),
            ('restaurant_loop', S0['soviet'], S1['soviet']), ('kitchen_loop', S0['syrnik'], S1['syrnik']), ('kitchen_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # петля в хук; ПОДПИШИСЬ — ENDCARD = true
