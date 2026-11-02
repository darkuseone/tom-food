"""Звук 014 — Сухарики (правила v1): SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец).
Новые: cannon_boom, harmonica_sting, ship_creak_loop, hardtack_crack."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: КРАК каменного сухаря, звёзды, солдаты на экране, пакетик, вспышка экрана, хруст кубика
        ('hardtack_crack', e('hk_crack'), 0), ('shimmer', e('hk_crack', 0.2), -10), ('film_projector', e('hk_sold', -0.2), -12), ('bag_crinkle', e('hk_snack'), -4), ('camera_flash', e('hk_film'), -8),
        ('bag_crinkle', e('hk_grab'), -8), ('crunch_crouton', e('hk_bite'), 0),
        # Рим: гладиус, марш, печь, «ДЗЫНЬ» о щит
        ('whip_whoosh', S0['rome'] - 0.2, -6), ('drum_march', e('rm_march', -0.3), -10), ('cloche_lift', e('rm_buc'), -10), ('rock_knock', e('rm_stone'), -2), ('bell_crack', e('rm_stone', 0.05), -14),
        # монастырь: мука-переход, торт, пергамент, лопата дважды, шлёп сухаря
        ('poof_cloth', S0['biscuit'] - 0.2, -6), ('shimmer', e('bs_word'), -10), ('scroll_unroll', e('bs_lat'), -8), ('wood_bonk', e('bs_twice'), -8), ('wood_bonk', e('bs_twice', 0.4), -8), ('stamp_thud', e('bs_rusk'), -4), ('quiz_buzz', e('bs_rusk', 0.3), -16),
        # флот: дырокол-переход, мел, весы, стук сухарём, жучки, «привет»
        ('tiny_tuk', S0['navy'] - 0.15, -6), ('tiny_tuk', S0['navy'] - 0.05, -6), ('weight_slam', e('nv_lb'), -10), ('pencil_scribble', e('nv_day'), -10), ('wood_bonk', e('nv_tap', 0.1), -6), ('wood_bonk', e('nv_tap', 0.35), -6),
        ('pebbles_pour', e('nv_bugs'), -10), ('teleport_pop', e('nv_gag'), -10),
        # музей: подзорная труба, прожектор, пушки на картине, табличка, счётчик лет
        ('whip_whoosh', S0['trafalgar'] - 0.2, -8), ('electric_zap', e('tf_eter'), -18), ('shimmer', e('tf_eter', 0.1), -8), ('cannon_boom', e('tf_bat'), -4), ('cannon_boom', e('tf_bat', 0.5), -8),
        ('quiz_ding', e('tf_year'), -10), ('clock_tick_heavy', e('tf_200', -0.1), -10), ('medal_fanfare', e('tf_200', 0.35), -10),
        # Том-малыш на галете: куски-переход, флаг, КРАК стены, зуб, червяки, тук-тук
        ('rock_knock', S0['civilwar'] - 0.15, -6), ('harmonica_sting', S0['civilwar'] + 0.2, -10), ('sail_flap', e('cw_usa'), -10), ('hardtack_crack', e('cw_tooth'), 0), ('tiny_tuk', e('cw_tooth', 0.5), -6),
        ('teleport_pop', e('cw_worm', 0.05), -10), ('teleport_pop', e('cw_worm', 0.3), -12), ('teleport_pop', e('cw_worm', 0.55), -12), ('tiny_tuk', e('cw_gag', 0.35), -4), ('tiny_tuk', e('cw_gag', 0.55), -4),
        # Сибирь: дождь сухарей, вывеска, печи, гудок поезда
        ('pebbles_pour', S0['siberia'] - 0.3, -6), ('electric_zap', e('sb_open'), -16), ('fire_flare', e('sb_fac'), -8), ('steam_hiss', e('sb_army'), -6), ('train_rush', e('sb_army', 0.2), -10),
        # ★ ларёк: неон, нож шинкует, пакет, холодец, сияние
        ('electric_zap', S0['snack'] - 0.1, -14), ('electric_zap', e('sn_90'), -12), ('knife_chop', e('sn_snack'), -6), ('bag_crinkle', e('sn_cube'), -2), ('jelly_wobble', e('sn_hol'), -6), ('medal_fanfare', e('sn_hol', 0.6), -6),
        # сегодня: календарь, песочные часы, листки, табло, миски
        ('paper_whoosh', S0['today'] - 0.2, -6), ('wood_bonk', e('td_keep', 0.3), -10), ('paper_whoosh', e('td_2y'), -4), ('stamp_thud', e('td_2y', 0.1), -8), ('quiz_ding', e('td_rye'), -10), ('quiz_ding', e('td_q', -0.2), -10),
        # кнопка: хруст кубика, подмигивание — без мяу, петля в хук
        ('whip_whoosh', S0['button'] - 0.15, -8), ('crunch_crouton', e('bt_wink', -0.4), -4),
    ]
    beds = [('kitchen_loop', 0, S1['hook']), ('campfire_loop', S0['rome'], S1['rome']), ('masons_loop', S0['biscuit'], S1['biscuit']), ('ship_creak_loop', S0['navy'], S1['navy']),
            ('restaurant_loop', S0['trafalgar'], S1['trafalgar']), ('campfire_loop', S0['civilwar'], S1['civilwar']), ('factory_loop', S0['siberia'], S1['siberia']), ('city_loop', S0['snack'], S1['snack']),
            ('kitchen_loop', S0['today'], S1['today']), ('kitchen_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # тест v1: музыка без затухания на стыке, мастер −14 LUFS
