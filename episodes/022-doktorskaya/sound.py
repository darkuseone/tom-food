"""Звук 022 — Докторская колбаса («история болезни»: от назначения 1936 к диагнозу). SFX: (файл, время, дБ). BEDS: (луп, начало, конец).
Новые (022): radio_chime (подпись выпуска — позывные радио на вибрафоне: первый звук, вопросы, раскрытия), sausage_slice (нож режет варёную колбасу),
sausage_fry (жарится докторская), cleaver_thwack (нож-гильотина), train_interior_loop (вагон электрички)."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: позывные, подпись на рецепте + штамп, кашель пациента, «?», «спорим» — вжух, укус — хруст колбасы с хлебом
        ('radio_chime', 0.0, -7), ('pencil_scribble', e('hk_rx'), -10), ('stamp_thud', e('hk_rx', 0.35), -6), ('cough_gag', e('hk_ill', 0.1), -12), ('quiz_buzz', e('hk_q'), -14),
        ('whip_whoosh', e('hk_bet'), -14), ('crunch_crouton', e('hk_bite'), -1), ('sausage_slice', e('hk_bite', 0.08), -2), ('paper_whoosh', e('hk_bite', 0.3), -14),
        # 1936 лаборатория: страница медкарты, листок календаря, учёные, гирька, свинина/говядина шлёп, соль/сахар, кардамон — «дзынь», штамп ДОКТОР, «???» мелом
        ('paper_whoosh', S0['lab'] - 0.2, -4), ('paper_whoosh', e('lb_year', 0.1), -14), ('typewriter', e('lb_sci'), -18), ('tiny_tuk', e('lb_apt'), -8), ('knife_tuk', e('lb_apt', 0.1), -12),
        ('dough_slap', e('lb_pork'), -6), ('dough_slap', e('lb_beef'), -6), ('salt_shake', e('lb_salt'), -10), ('salt_shake', e('lb_sugar'), -12), ('goblet_clink', e('lb_card'), -8), ('shimmer', e('lb_card', 0.1), -16),
        ('stamp_thud', e('lb_name'), -4), ('radio_chime', e('lb_name', 0.4), -14), ('pencil_scribble', e('lb_who'), -10), ('quiz_buzz', e('lb_who', 0.4), -16),
        # мясокомбинат: батон на крюке утягивает кадр, конвейер звякает, пар камеры, счётчик лет щёлкает
        ('steam_hiss', S0['plant'] - 0.2, -8), ('rivets_steel', S0['plant'] - 0.1, -14), ('ship_bell', e('pl_loaf'), -18), ('meat_grinder', e('pl_loaf', 0.2), -18), ('steam_hiss', e('pl_steam'), -6),
        ('door_swing', e('pl_steam', 0.1), -14), ('watch_click', e('pl_count'), -8), ('watch_click', e('pl_count', 0.35), -10), ('watch_click', e('pl_count', 0.7), -10), ('watch_click', e('pl_count', 1.05), -10), ('quiz_ding', e('pl_count', 1.8), -12),
        # 70-е: рольставня вниз-вверх, лампа мигает, пустые крюки звякают, крахмал — «пуф»
        ('weight_slam', S0['deficit'] - 0.2, -8), ('escalator_rise', S0['deficit'] + 0.05, -14), ('neon_buzz', e('df_lack'), -10), ('electric_zap', e('df_lack', 0.3), -16), ('spoon_clink', e('df_lack', 0.2), -14),
        ('pillow_poof', e('df_starch'), -4), ('dust_whoosh', e('df_starch', 0.1), -10), ('neon_buzz', e('df_starch', 0.3), -16),
        # Том-малыш на срезе: оболочка срывается спиралью, шаги, буйвол мычит, як жуёт, стетоскоп слушает, «врач.» — плечи, нож-гильотина «ХРЯСЬ» (пауза-гэг)
        ('cloth_rip', S0['sausage'] - 0.2, -6), ('time_zoom', S0['sausage'] - 0.05, -14), ('fork_squish', e('sx_walk', 0.5), -14), ('cow_moo', e('sx_buf'), -10), ('pig_grunt', e('sx_yak'), -12), ('jaw_chomp', e('sx_yak', 0.4), -12),
        ('tiny_tuk', e('sx_listen', 0.3), -10), ('drip_plop', e('sx_listen', 0.9), -14), ('radio_chime', e('sx_doc'), -14), ('whip_whoosh', e('sx_gag'), -10), ('cleaver_thwack', e('sx_gag', 0.18), -2), ('crowd_ooh', e('sx_gag', 0.4), -16),
        # гастроном: дверь с колокольчиком, шёпот очереди, бумага — рулон «поп», ценник 2-20, касса, весы — ноль, «КОЛБАСЫ НЕТ»
        ('handbell', S0['gastro'] - 0.2, -8), ('door_swing', S0['gastro'] - 0.1, -12), ('crowd_ooh', e('gs_rumor'), -14), ('teleport_pop', e('gs_paper'), -8), ('record_scratch', e('gs_paper', 0.3), -14),
        ('knife_tuk', e('gs_price'), -8), ('cash_register', e('gs_220'), -8), ('coin_ring', e('gs_220', 0.3), -14), ('stamp_thud', e('gs_find'), -6), ('quiz_buzz', e('gs_find', 0.2), -12),
        # электричка: вагон проносится сквозь кадр, подсказки «тук», запах — пуф, «Электричка!» — гудок, вагон дёргается
        ('train_rush', S0['train'] - 0.3, -6), ('tiny_tuk', e('tr_long'), -10), ('tiny_tuk', e('tr_green'), -10), ('tiny_tuk', e('tr_smell'), -10), ('poof_cloth', e('tr_smell', 0.2), -14),
        ('steamer_horn', e('tr_ans'), -10), ('rivets_steel', e('tr_ans', 0.1), -12), ('crowd_cheer', e('tr_ans', 0.3), -18),
        # ★ архив: обложка истории болезни, пыль, тесёмки и папка, машинопись строк, «деспотизма» — штамп ДИАГНОЗ + вспышка, лампа мигает, корона катится, батон на папку (пауза-гэг)
        ('paper_whoosh', S0['archive'] - 0.2, -4), ('clock_tick_heavy', S0['archive'] + 0.3, -16), ('dust_whoosh', e('ar_dust'), -10), ('scroll_unroll', e('ar_open'), -8), ('typewriter', e('ar_q0'), -16),
        ('typewriter', e('ar_q0', 1.6), -16), ('stamp_thud', e('ar_diag', 0.3), -2), ('shimmer', e('ar_diag', 0.3), -8), ('radio_chime', e('ar_diag', 0.6), -10), ('electric_zap', e('ar_diag', 0.35), -16),
        ('coin_ring', e('ar_tsar', 0.2), -12), ('boulder_roll', e('ar_tsar', 0.3), -18), ('wood_bonk', e('ar_sausage', 0.55), -6), ('sausage_slice', e('ar_sausage', 0.6), -10), ('tiny_tuk', e('ar_gag', 0.2), -10),
        # сегодня: ломтик шлёпается на сковороду, шкворчание, «40» — карандаш, бумага 0 — поп, «9 из 40» — динь, «жаришь» — шкворчание, «бутерброд» — вжух
        ('drip_plop', S0['today'] - 0.2, -4), ('sausage_fry', S0['today'] - 0.05, -8), ('pencil_scribble', e('td_check'), -12), ('teleport_pop', e('td_paper'), -10), ('quiz_buzz', e('td_paper', 0.3), -14),
        ('quiz_ding', e('td_nine'), -8), ('medal_fanfare', e('td_nine', 0.1), -16), ('sausage_fry', e('td_fry'), -8), ('whip_whoosh', e('td_sand'), -12), ('radio_chime', e('td_sand', 0.5), -14),
        # кнопка (тот же кадр): укус бутерброда, ПОДПИШИСЬ всплывает; без мяу — петля в хук (позывные хука звучат на повторе)
        ('crunch_crouton', e('bt_bite'), -6), ('sausage_slice', e('bt_bite', 0.08), -8), ('teleport_pop', DUR - 1.9, -12),
    ]
    beds = [('city_loop', 0, S1['hook']), ('moscow_loop', S0['lab'], S1['lab']), ('factory_loop', S0['plant'], S1['plant']), ('factory_loop', S0['deficit'], S1['deficit']),
            ('kitchen_loop', S0['sausage'], S1['sausage']), ('restaurant_loop', S0['gastro'], S1['gastro']), ('train_interior_loop', S0['train'], S1['train']),
            ('blizzard_loop', S0['archive'], S1['archive']), ('sizzle_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # петля в хук; ПОДПИШИСЬ — ENDCARD = true
