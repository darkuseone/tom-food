"""Звук 028 — Круассан. SFX: (файл, время, дБ). BEDS: (луп, начало, конец).
Новые (028): zither_sting (подпись выпуска — венская цитра: первый звук, вопросы, разгадка), croissant_crack, dough_fold, mehter_drum."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: цитра, круассан ломается в макро, флаг в чашке, лупа, хруст «треснула», «?», укус
        ('zither_sting', 0.0, -6), ('croissant_crack', 0.45, -4), ('whip_whoosh', 1.0, -14), ('mehter_drum', e('hk_turk'), 6), ('watch_click', e('hk_check'), -12), ('croissant_crack', e('hk_crack'), -2), ('quiz_ding', e('hk_q'), -14), ('croissant_crack', e('hk_bite'), -4), ('jaw_chomp', e('hk_bite', 0.1), -8),
        # осада (байка): скалка-переход, год, барабаны турок, собор, пекари шлёпают тесто, подкоп — грохот
        ('dough_fold', S0['siege'] - 0.2, 10), ('stamp_thud', e('sg_year'), -10), ('mehter_drum', e('sg_turk'), 8), ('church_bells', e('sg_vienna'), -18), ('dough_slap', e('sg_bakers'), -8), ('dough_slap', e('sg_bakers', 0.4), -10), ('earthquake_rumble', e('sg_dig', -0.1), -8), ('chisel_strike', e('sg_dig', 0.4), -8), ('pebbles_pour', e('sg_dig', 0.6), -12),
        # полумесяц: набат, лопата с противнем, булочка, ликование, «=»
        ('whip_whoosh', S0['crescent'] - 0.2, -10), ('church_bells', e('cs_alarm'), -8), ('crowd_ooh', e('cs_alarm', 0.2), -18), ('oven_roar', e('cs_bake'), -14), ('teleport_pop', e('cs_bun'), -10), ('crowd_cheer', e('cs_bun', 0.4), -14), ('quiz_ding', e('cs_flag'), -10),
        # архив: бумага трескается, листает, пыль, штамп XX век
        ('paper_whoosh', S0['archive'] - 0.25, -6), ('cloth_rip', S0['archive'] - 0.1, -16), ('paper_whoosh', e('ar_wrote'), -12), ('dust_whoosh', e('ar_tale'), -12), ('stamp_thud', e('ar_20'), -4), ('zither_sting', e('ar_20', 0.3), -14),
        # кипферль: облако муки, скалка, лопата из печи, плашка 400 лет, сахарная пудра
        ('pillow_poof', S0['kipferl'] - 0.2, -10), ('dough_fold', e('kp_roll'), 10), ('oven_roar', e('kp_bake'), -14), ('knife_tuk', e('kp_13'), -10), ('quiz_ding', e('kp_400'), -10), ('salt_shake', e('kp_sug'), -8),
        # Версаль: зеркальная панель, гонг «мимо», пуф, лента времени, «ням» (пауза-гэг)
        ('shimmer', S0['versailles'] - 0.2, -10), ('quiz_buzz', e('vs_miss'), -6), ('poof_cloth', e('vs_miss', 0.05), -8), ('scroll_unroll', e('vs_appear'), -12), ('knife_tuk', e('vs_40'), -10), ('jaw_chomp', e('vs_shrug', 0.2), -8),
        # Цанг 1839: ставни, честь, табличка, покрывало слетает, толпа, колокольчик
        ('door_swing', S0['zang'] - 0.2, -10), ('drum_march', e('zg_hero'), -16), ('coin_ring', e('zg_name'), -12), ('knife_tuk', e('zg_year'), -10), ('cloth_rip', e('zg_open'), -10), ('crowd_ooh', e('zg_paris'), -12), ('handbell', e('zg_shop'), -10),
        # Том-малыш в слоях: складка теста, БУМ, скалка, прыжки по слоям, флажок, провал (пауза-гэг)
        ('dough_fold', S0['layers'] - 0.2, 12), ('wood_bonk', e('ly_dense', 0.25), -4), ('boulder_roll', e('ly_flaky'), -10), ('tiny_tuk', e('ly_cr'), -8), ('tiny_tuk', e('ly_cr', 0.25), -8), ('tiny_tuk', e('ly_cr', 0.5), -8), ('tiny_tuk', e('ly_cr', 0.75), -8), ('cloth_rip', e('ly_fr'), -16), ('knife_tuk', e('ly_1905'), -10), ('croissant_crack', e('ly_fall'), -4), ('teleport_pop', e('ly_fall', 0.4), -12),
        # ★ граница: шлагбаум, Вена, паспорт, штампы, шлагбаум вверх, конфетти, цитра-разгадка
        ('whip_whoosh', S0['vienna'] - 0.2, -10), ('gavel_bang', S0['vienna'] - 0.02, -12), ('zither_sting', e('vn_at'), -10), ('paper_whoosh', e('vn_pass'), -10), ('stamp_thud', e('vn_wien'), -2), ('stamp_thud', e('vn_paris'), -2), ('shimmer', e('vn_paris', 0.1), -8), ('crowd_cheer', e('vn_paris', 0.3), -14),
        # сегодня: латте-сердечко, телефон, круассан в кофе, пэн-о-шоколя, круассан
        ('pour_oil', S0['today'] - 0.2, -10), ('radio_chime', e('td_send'), -14), ('soup_slurp', e('td_dunk', 0.3), -8), ('drip_plop', e('td_dunk', 0.5), -10), ('croissant_crack', e('td_choc'), -10), ('teleport_pop', e('td_plain'), -10),
        # кнопка: подмигивание, ПОДПИШИСЬ поверх, петля в хук (цитра хука звучит на повторе)
        ('teleport_pop', e('td_x', 0.4), -12), ('teleport_pop', DUR - 2.4, -14),
    ]
    beds = [('restaurant_loop', 0, S1['hook']), ('campfire_loop', S0['siege'], S1['siege']), ('city_fire_loop', S0['crescent'], S1['crescent']), ('cabin_loop', S0['archive'], S1['archive']),
            ('kitchen_loop', S0['kipferl'], S1['kipferl']), ('feast_loop', S0['versailles'], S1['versailles']), ('city_loop', S0['zang'], S1['zang']), ('sizzle_loop', S0['layers'], S1['layers']),
            ('bazaar_loop', S0['vienna'], S1['vienna']), ('restaurant_loop', S0['today'], S1['today']), ('restaurant_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)
