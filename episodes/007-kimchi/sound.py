"""Звук 007 — Кимчи: SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец)."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: станция, бактерии тают, укус в невесомости
        ('time_zoom', 0.0, -8), ('shimmer', e('hk_space'), -10), ('paper_whoosh', e('hk_bac', -0.1), -6), ('electric_zap', e('hk_bac', 0.3), -10), ('bubbles_burst', e('hk_all'), -6), ('teleport_pop', e('hk_all', 0.3), -8),
        ('lettuce_crunch', e('hk_bite'), -2), ('crunch_crouton', e('hk_bite', 0.05), -8), ('bubbles_burst', e('hk_bite', 0.2), -12),
        # лаборатория: лучи, мутант, кнопка перемотки
        ('portal_open', S0['space'] - 0.2, -10), ('electric_zap', e('sp_rays'), -8), ('electric_zap', e('sp_rays', 0.5), -10), ('bear_growl', e('sp_mut', 0.2), -8), ('wood_bonk', e('sp_back', 0.1), -2), ('rewind', e('sp_back', 0.3), -6),
        # 1995: холодильник
        ('rewind', S0['fridge'] - 0.2, -4), ('door_swing', e('fr_sep', 0.2), -10), ('shimmer', e('fr_sep', 0.5), -10), ('freezer_open', e('fr_only'), -4), ('stamp_thud', e('fr_only', 0.4), -12),
        # рынок Чосона: лист, повозка, звезда
        ('lettuce_crunch', S0['cabbage'] - 0.1, -4), ('boulder_roll', e('cb_come'), -16), ('camera_flash', e('cb_star'), -6), ('camera_flash', e('cb_star', 0.3), -8), ('medal_fanfare', e('cb_star', 0.1), -10),
        # острое: перечное облако, «пожар во рту»
        ('dust_whoosh', S0['spicy'] - 0.2, -4), ('fire_flare', e('ht_hot', 0.3), -6), ('shiver_brr', e('ht_hot', 0.5), -10), ('teleport_pop', e('ht_no'), -6), ('record_scratch', e('ht_no', 0.2), -12),
        # 1614: тушь, череп
        ('brush_whitewash', S0['poison'] - 0.1, -4), ('pencil_scribble', e('pz_y', -0.2), -8), ('stamp_thud', e('pz_y'), -8), ('crowd_ooh', e('pz_pois'), -12), ('wood_bonk', e('pz_pois', 0.5), -8),
        # XIII век: ширма, муза
        ('paper_whoosh', S0['poem'] - 0.1, -4), ('shimmer', e('pm_rad'), -6),
        # Том-малыш в рассоле
        ('dive_splash', S0['name'] - 0.1, -4), ('bubbles_burst', e('nm_ch'), -6), ('bubbles_burst', e('nm_sub', 0.2), -10),
        # зима: двери, лопаты
        ('door_swing', S0['jars'] - 0.1, -8), ('shovel_snow', e('jr_bury'), -4), ('shovel_snow', e('jr_bury', 0.6), -6), ('pillow_poof', e('jr_bury', 1.0), -8), ('freeze_crackle', e('jr_frz'), -10),
        # кимджан: перчатка, семья, свиток
        ('fork_squish', S0['kimjang'] - 0.1, 6), ('crowd_cheer', e('kj_fam'), -14), ('scroll_unroll', e('kj_un', -0.1), -4), ('medal_fanfare', e('kj_un', 0.3), -10),
        # дома: окна-плитки, свет холодильников
        ('plate_spin', S0['homes'] - 0.1, -10), ('tiny_tuk', e('hm_80'), -6), ('tiny_tuk', e('hm_80', 0.1), -6), ('tiny_tuk', e('hm_80', 0.2), -6), ('tiny_tuk', e('hm_80', 0.3), -6), ('tiny_tuk', e('hm_80', 0.4), -6), ('tiny_tuk', e('hm_80', 0.5), -6), ('tiny_tuk', e('hm_80', 0.6), -6), ('tiny_tuk', e('hm_80', 0.7), -6), ('cash_register', e('hm_80', 0.9), -10),
        # сегодня: полароид, «кимчи!», вспышка
        ('camera_flash', S0['today'] - 0.1, -8), ('record_scratch', e('td_ch'), -12), ('camera_flash', e('td_km'), -2), ('crowd_cheer', e('td_km', 0.1), -12),
        # кнопка
        ('lettuce_crunch', e('bt_wink', -0.2), -2), ('cat_meow', DUR - 0.9, -6),
    ]
    beds = [('space_station_loop', 0, S1['space']), ('kitchen_loop', S0['fridge'], S1['fridge']), ('bazaar_loop', S0['cabbage'], S1['cabbage']), ('underwater_loop', S0['name'], S1['name']), ('blizzard_loop', S0['jars'], S1['jars']), ('city_loop', S0['kimjang'], S1['kimjang']), ('forest_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus')
