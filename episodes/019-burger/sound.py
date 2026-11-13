"""Звук 019 — Бургер (блюдо-путешественник, загадка имени). SFX: (файл, время, дБ). BEDS: (луп, начало, конец).
Новые (019): banjo_sting (подпись выпуска — американское банджо: первый звук, вопросы, раскрытия), burger_bite, patty_slap_sizzle, steamer_horn."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: банджо, флажок Гамбурга, вопрос, 6 флажков, гости спорят, хватает бургер, укус
        ('banjo_sting', 0.0, -8), ('teleport_pop', e('hk_ham'), -12), ('quiz_ding', e('hk_why'), -16),
        ('tiny_tuk', e('hk_six'), -8), ('tiny_tuk', e('hk_six', 0.12), -8), ('tiny_tuk', e('hk_six', 0.24), -8), ('tiny_tuk', e('hk_six', 0.36), -8), ('tiny_tuk', e('hk_six', 0.48), -8), ('crowd_ooh', e('hk_six', 0.2), -16),
        ('bread_tear', e('hk_grab'), -10), ('burger_bite', e('hk_bite'), 3), ('crunch_crouton', e('hk_bite', 0.05), -6),
        # порт Гамбурга: туман-пар, чайки, флажок, топорик, шлёп на сковороду, мел, булка зачёркнута
        ('steam_hiss', S0['port'] - 0.25, -8), ('seagulls', S0['port'] + 0.2, -16), ('sail_flap', e('pt_city'), -12),
        ('knife_chop', e('pt_chop'), -6), ('knife_chop', e('pt_chop', 0.22), -8), ('knife_chop', e('pt_chop', 0.44), -8),
        ('patty_slap_sizzle', e('pt_slap', 0.1), -2), ('pencil_scribble', e('pt_name'), -10), ('knife_tuk', e('pt_name', 0.1), -10), ('record_scratch', e('pt_nobun'), -14), ('teleport_pop', e('pt_nobun', 0.05), -12),
        # пароход: пунктир маршрута, жестянка, гудок 1847, карта, эмигранты машут, флажок Нью-Йорка
        ('paper_whoosh', S0['ship'] - 0.2, -8), ('ship_bell', S0['ship'] + 0.3, -14), ('jar_lid', e('sh_sail', 0.5), -10), ('steamer_horn', e('sh_year'), -6),
        ('pencil_scribble', e('sh_ships'), -12), ('crowd_cheer', e('sh_people'), -16), ('banjo_sting', e('sh_ny'), -12), ('tiny_tuk', e('sh_ny'), -8),
        # ярмарка 1885: полог шатра, вилка, толкучка, вилка летит и «дзынь», хлоп в булку, пауза-гэг — укус
        ('poof_cloth', S0['fair'] - 0.2, -8), ('spoon_clink', e('fr_fork'), -10), ('crowd_ooh', e('fr_fair'), -16), ('whip_whoosh', e('fr_nofork'), -10), ('bell_crack', e('fr_nofork', 0.6), -14),
        ('bread_tear', e('fr_bun', -0.1), -8), ('dough_slap', e('fr_bun'), -4), ('crowd_ooh', e('fr_bun', 0.2), -14), ('burger_bite', e('fr_gag', 0.25), -2), ('jaw_chomp', e('fr_gag', 0.5), -10),
        # штаб «кто первый»: стопка булки, три флажка, претенденты, «№1» и перетягивание
        ('boulder_drop', S0['claim'] - 0.15, -12), ('fork_squish', S0['claim'] - 0.05, -10), ('tiny_tuk', e('cl_teen', 0.2), -6), ('tiny_tuk', e('cl_farm', 0.2), -6), ('tiny_tuk', e('cl_cook', 0.2), -6),
        ('quiz_ding', e('cl_teen'), -16), ('quiz_ding', e('cl_farm'), -16), ('quiz_ding', e('cl_cook'), -16), ('crowd_boo', e('cl_all'), -12), ('stamp_thud', e('cl_all'), -8), ('cloth_rip', e('cl_all', 0.4), -16),
        # Менчес: указатель переворачивается, оркестрик, жаровня, указатель вспыхивает, конфетти, «?»
        ('wood_bonk', S0['menches'] - 0.15, -8), ('oompah_horn', S0['menches'] + 0.2, -16), ('steam_hiss', e('mn_bros'), -14), ('drum_march', e('mn_town'), -16),
        ('shimmer', e('mn_ham'), -8), ('fireworks', e('mn_ham', 0.1), -14), ('banjo_sting', e('mn_ham', 0.2), -12), ('quiz_buzz', e('mn_q'), -14),
        # 1918: кисть клейстера, «стоп», марш, газета WAR, наклейка, отклеивается уголок
        ('brush_whitewash', S0['liberty'] - 0.2, -8), ('tiny_tuk', e('lb_stop'), -10), ('drum_march', e('lb_year'), -12), ('paper_whoosh', e('lb_war'), -8), ('stamp_thud', e('lb_war', 0.1), -10),
        ('brush_whitewash', e('lb_paste'), -8), ('paper_whoosh', e('lb_paste', 0.3), -12), ('cloth_rip', e('lb_peel'), -10), ('quiz_ding', e('lb_peel', 0.2), -14),
        # ★ Том-малыш в бургере: кетчуп-переход, карабкается, флажок Гамбурга, баннер, пароходик, флажок «Америка», гэг «ПЛЮХ»
        ('drip_plop', S0['burger'] - 0.2, -6), ('shimmer', e('bg_ans'), -10), ('rock_knock', e('bg_patty', 0.2), -10), ('rock_knock', e('bg_patty', 0.6), -10), ('sail_flap', e('bg_patty', 0.5), -12),
        ('cloth_rip', e('bg_name'), -14), ('steamer_horn', e('bg_sail'), -16), ('pebbles_pour', e('bg_bun'), -16), ('banjo_sting', e('bg_us'), -10), ('medal_fanfare', e('bg_us', 0.1), -14),
        ('whip_whoosh', e('bg_gag'), -12), ('drip_plop', e('bg_plop'), 0), ('jelly_wobble', e('bg_plop', 0.1), -8),
        # сегодня: лопатка-переворот, табло, счётчик, переворот котлеты, секундная стрелка, А/Б
        ('patty_slap_sizzle', S0['today'] - 0.25, -6), ('neon_buzz', e('td_now'), -14), ('cash_register', e('td_num'), -12), ('typewriter', e('td_num', 0.2), -16),
        ('whip_whoosh', e('td_flip'), -12), ('patty_slap_sizzle', e('td_flip', 0.3), -8), ('clock_tick_heavy', e('td_sec'), -14), ('quiz_ding', e('td_ab'), -10), ('quiz_ding', e('td_ab', 0.35), -10),
        # кнопка: подмигивание, ПОДПИШИСЬ; финал без мяу — петля в хук (банджо хука звучит на повторе)
        ('whip_whoosh', S0['button'] - 0.15, -10), ('teleport_pop', e('bt_wink'), -12), ('teleport_pop', DUR - 1.6, -12),
    ]
    beds = [('restaurant_loop', 0, S1['hook']), ('harbor_loop', S0['port'], S1['port']), ('sizzle_loop', E['pt_slap'], S1['port']), ('ship_creak_loop', S0['ship'], S1['ship']),
            ('feast_loop', S0['fair'], S1['fair']), ('cabin_loop', S0['claim'], S1['claim']), ('crickets_loop', S0['menches'], S1['menches']), ('city_loop', S0['liberty'], S1['liberty']),
            ('kitchen_loop', S0['burger'], S1['burger']), ('sizzle_loop', S0['today'], S1['today']), ('restaurant_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # петля в хук; ПОДПИШИСЬ — ENDCARD = true
