"""Звук 017 — Сюрстрёмминг (правила v1 + плашка ПОДПИШИСЬ). SFX: (файл, время, дБ). BEDS: (луп, начало, конец). Новые: can_hiss (очень высокий — тихо), cabin_loop, cough_gag."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: молоток, штамп, банка «пшш», кашель, «?», лепёшка
        ('gavel_bang', e('hk_court'), -4), ('stamp_thud', e('hk_court', 0.15), -6), ('can_hiss', e('hk_can'), -12), ('cough_gag', e('hk_can', 0.3), -6), ('quiz_buzz', e('hk_what'), -18), ('bread_tear', e('hk_grab'), -8), ('crunch_crouton', e('hk_bite'), -4),
        # Швеция XVI в.: волна, чайки, таблички, рыба, грамота
        ('dive_splash', S0['salaka'] - 0.2, -8), ('seagulls', S0['salaka'] + 0.2, -14), ('knife_tuk', e('sl_name'), -8), ('whip_whoosh', e('sl_sour'), -12), ('fish_swoosh', e('sl_fish'), -6), ('scroll_unroll', e('sl_16'), -8),
        # легенда: карта, мешок, крупинка, бочка бродит, штамп
        ('scroll_unroll', S0['salt'] - 0.2, -8), ('shimmer', e('st_leg'), -10), ('bag_crinkle', e('st_salt'), -6), ('tiny_tuk', e('st_salt', 0.8), -8), ('bubbles_burst', e('st_ferm'), -6), ('wood_bonk', e('st_ferm', 0.3), -8), ('stamp_thud', e('st_ver'), -4),
        # засол весной: пар, лёд, ковш, бочка, календарь
        ('steam_hiss', S0['brine'] - 0.2, -10), ('ice_shatter', e('br_spring'), -12), ('salt_shake', e('br_weak'), -8), ('bubbles_burst', e('br_ferm'), -8), ('paper_whoosh', e('br_mon', 0.3), -8),
        # Том-малыш в банке: консервный нож, бактерии, газ, вздутие, пузырь
        ('rivets_steel', S0['can'] - 0.25, -10), ('teleport_pop', e('cn_bac'), -10), ('teleport_pop', e('cn_bac', 0.2), -12), ('bubbles_burst', e('cn_gas'), -6), ('bell_crack', e('cn_bulge', 0.1), -10), ('earthquake_rumble', e('cn_bulge'), -14), ('bubbles_burst', e('cn_gag'), -4),
        # закон: календарь-табло, указ, лента STOP, банки, обвод
        ('paper_whoosh', S0['law'] - 0.2, -8), ('quiz_ding', e('lw_98'), -10), ('scroll_unroll', e('lw_law'), -8), ('tape_measure', e('lw_ban'), -6), ('quiz_buzz', e('lw_ban', 0.4), -14), ('pencil_scribble', e('lw_day'), -6),
        # самолёт: иллюминатор, табло, рентген, вздутие, «ПУФ», маски
        ('whip_whoosh', S0['plane'] - 0.2, -8), ('quiz_ding', e('pl_year'), -12), ('typewriter', e('pl_air'), -12), ('quiz_buzz', e('pl_ban'), -8), ('clock_tick_heavy', e('pl_pop', -0.2), -10), ('can_hiss', e('pl_gag'), -10), ('teleport_pop', e('pl_gag'), -6), ('cough_gag', e('pl_gag', 0.3), -8),
        # ★ суд: двери, вспышка, воспоминание, банка, кашель, молоток, штамп
        ('door_swing', S0['court'] - 0.2, -8), ('shimmer', e('ct_rev'), -4), ('time_zoom', e('ct_stairs', -0.1), -14), ('can_hiss', e('ct_open'), -10), ('cough_gag', e('ct_open', 0.5), -4), ('gavel_bang', e('ct_ok'), -2), ('stamp_thud', e('ct_ok', 0.15), -4), ('medal_fanfare', e('ct_ok', 0.5), -8),
        # праздник: хлопушка-переход, фонарики, календарь, хлопушка, кнопки
        ('fireworks', S0['today'] - 0.2, -14), ('electric_zap', e('td_now'), -18), ('pencil_scribble', e('td_thu', 0.1), -8), ('crowd_cheer', e('td_party'), -8), ('teleport_pop', e('td_party', 0.05), -8), ('quiz_ding', e('td_open'), -10), ('quiz_ding', e('td_no'), -10),
        # кнопка: банка, подмигивание, плашка ПОДПИШИСЬ — без мяу, петля в хук
        ('whip_whoosh', S0['button'] - 0.15, -8), ('teleport_pop', DUR - 1.6, -10),
    ]
    beds = [('city_loop', 0, S1['hook']), ('harbor_loop', S0['salaka'], S1['salaka']), ('harbor_loop', S0['salt'], S1['salt']), ('harbor_loop', S0['brine'], S1['brine']),
            ('heavy_water_loop', S0['can'], S1['can']), ('city_loop', S0['law'], S1['law']), ('cabin_loop', S0['plane'], S1['plane']), ('restaurant_loop', S0['court'], S1['court']),
            ('forest_loop', S0['today'], S1['today']), ('city_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # петля в хук; ПОДПИШИСЬ — ENDCARD = true
