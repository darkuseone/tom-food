"""Звук 015 — Хамон (правила v1): SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец).
Новые: pig_grunt, ham_slice, flamenco_sting, snout_suck."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: оливка выскакивает и бежит, свинья в окне, «?», ломтик, укус
        ('flamenco_sting', 0.0, -10), ('teleport_pop', e('hk_olive'), -6), ('tiny_tuk', e('hk_olive', 0.5), -12), ('tiny_tuk', e('hk_olive', 0.8), -12), ('tiny_tuk', e('hk_olive', 1.1), -12), ('pig_grunt', e('hk_pig'), -4),
        ('quiz_buzz', e('hk_why'), -16), ('ham_slice', e('hk_grab'), -12), ('crunch_crouton', e('hk_bite'), -2),
        # Страбон: свиток, двери коптильни, монеты, мулы
        ('scroll_unroll', S0['strabo'] - 0.2, -6), ('quiz_ding', e('sb_name'), -12), ('door_swing', e('sb_hams', -0.1), -8), ('wind_gust', e('sb_pyr'), -14), ('coins_pouch', e('sb_cash'), -4), ('coin_ring', e('sb_cash', 0.3), -10),
        # Катон: стилус, соль, огонь, масло, моль, «не тронут»
        ('pencil_scribble', S0['cato'] - 0.2, -8), ('salt_shake', e('ct_salt'), -2), ('fire_flare', e('ct_smoke'), -8), ('pour_oil', e('ct_oil'), -4), ('bird_flutter', e('ct_moth'), -12), ('wood_bonk', e('ct_moth', 0.55), -10), ('stamp_thud', e('ct_gag', -0.6), -6),
        # имя: карта складывается, флажки, вывеска, схема, табличка падает
        ('paper_whoosh', S0['name'] - 0.2, -6), ('teleport_pop', e('nm_jam'), -10), ('whip_whoosh', e('nm_fr'), -12), ('electric_zap', e('nm_jb'), -16), ('quiz_ding', e('nm_jb', 0.1), -12), ('teleport_pop', e('nm_leg'), -10), ('plate_smash', e('nm_old', 0.2), -10),
        # Том-малыш в деэсе: удар жёлудя, свинья, гора желудей, табло, «в день», пылесос-рыло
        ('rock_knock', S0['dehesa'] - 0.15, -4), ('pig_grunt', e('dh_graze'), -2), ('pebbles_pour', e('dh_10'), -6), ('stamp_thud', e('dh_10', 0.1), -8), ('quiz_ding', e('dh_day'), -10), ('snout_suck', e('dh_gag', -0.1), -2), ('pig_grunt', e('dh_gag', 0.5), -6),
        # закон: пломба, указ, бирки щёлк ×4, копыто, «только чёрная»
        ('watch_click', S0['law'] - 0.1, -4), ('gavel_bang', e('lw_law'), -8), ('tiny_tuk', e('lw_tags'), -6), ('tiny_tuk', e('lw_tags', 0.15), -6), ('tiny_tuk', e('lw_tags', 0.3), -6), ('tiny_tuk', e('lw_tags', 0.45), -6), ('shimmer', e('lw_pata'), -8), ('quiz_ding', e('lw_only'), -8),
        # ТВ-студия: экраны, рекорд, колпак, самолётик, счётчик, конфетти
        ('electric_zap', S0['record'] - 0.1, -16), ('medal_fanfare', e('rc_rec'), -10), ('cloche_lift', e('rc_ham'), -4), ('whip_whoosh', e('rc_jp'), -10), ('cash_register', e('rc_eur', 0.6), -6), ('crowd_cheer', e('rc_gag'), -8), ('fireworks', e('rc_gag', 0.1), -14),
        # ★ разгадка: вспышка, жёлудь, капля жира, колба, капля масла, слияние
        ('drip_plop', S0['olive'] - 0.15, -6), ('shimmer', e('ol_rev'), -4), ('boulder_roll', e('ol_acorn'), -16), ('drip_plop', e('ol_fat'), -6), ('bubbles_burst', e('ol_half'), -10), ('drip_plop', e('ol_oil'), -6), ('medal_fanfare', e('ol_oil', 0.4), -6), ('pig_grunt', e('ol_oil', 0.6), -8),
        # сегодня: нож-переход, неон, счётчик, окорока, тарелки
        ('ham_slice', S0['today'] - 0.2, -10), ('electric_zap', e('td_now'), -14), ('clock_tick_heavy', e('td_47'), -10), ('cash_register', e('td_47', 0.9), -10), ('quiz_ding', e('td_jam'), -10), ('quiz_ding', e('td_pro'), -10),
        # кнопка: ломтик, подмигивание — без мяу, петля в хук
        ('whip_whoosh', S0['button'] - 0.15, -8), ('ham_slice', e('bt_wink', -0.5), -12),
    ]
    beds = [('restaurant_loop', 0, S1['hook']), ('forest_loop', S0['strabo'], S1['strabo']), ('campfire_loop', S0['cato'], S1['cato']), ('city_loop', S0['name'], S1['name']),
            ('forest_loop', S0['dehesa'], S1['dehesa']), ('cave_drip_loop', S0['law'], S1['law']), ('restaurant_loop', S0['record'], S1['record']), ('forest_loop', S0['olive'], S1['olive']),
            ('restaurant_loop', S0['today'], S1['today']), ('restaurant_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # тест v1: музыка без затухания на стыке, мастер −14 LUFS
