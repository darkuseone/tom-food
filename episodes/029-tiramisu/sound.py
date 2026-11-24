"""Звук 029 — Тирамису. SFX: (файл, время, дБ). BEDS: (луп, начало, конец).
Новые (029): organetto_sting (подпись выпуска — органетто: первый звук, вопросы, разгадка), masc_plop, whisk_beat, moka_gurgle."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: органетто, ложка ныряет в тирамису, облако какао, лазеры с ТВ, калькулятор, штамп 1981, «?», ложка
        ('organetto_sting', 0.0, -6), ('masc_plop', 0.3, -4), ('pillow_poof', 0.45, -14), ('electric_zap', e('hk_sw'), -14), ('electric_zap', e('hk_sw', 0.3), -16), ('typewriter', e('hk_count'), -14), ('stamp_thud', e('hk_81'), -6), ('quiz_ding', e('hk_q'), -14), ('masc_plop', e('hk_bite'), -4), ('jaw_chomp', e('hk_bite', 0.1), -8),
        # бабушка: скорлупа трескается, яйцо, сахар, венчик, внуки прыгают
        ('egg_crack', S0['nonna'] - 0.2, -6), ('egg_crack', e('nn_yolk'), -6), ('drip_plop', e('nn_yolk', 0.3), -10), ('grain_pour', e('nn_sug'), -12), ('whisk_beat', e('nn_nonna'), 6), ('whisk_beat', e('nn_nonna', 1.2), 4), ('spoon_clink', e('nn_kids'), -12), ('teleport_pop', e('nn_boost'), -10), ('crowd_cheer', e('nn_boost', 0.2), -20), ('chicken_cluck', e('nn_boost', 0.4), -18),
        # Тревизо: табло щёлкает, указатель, венчик, банка качается, ПЛЮХ, «ммм»
        ('typewriter', S0['treviso'] - 0.2, -10), ('knife_tuk', e('tv_city'), -10), ('whisk_beat', e('tv_rest'), 2), ('wood_bonk', e('tv_masc'), -12), ('whip_whoosh', e('tv_fall'), -12), ('masc_plop', e('tv_fall', 0.3), 0), ('crowd_ooh', e('tv_yolk'), -16),
        # меню 1972 / журнал 1981: скатерть, мел, гости, журнал, аплодисменты
        ('cloth_rip', S0['menu'] - 0.2, -10), ('pencil_scribble', e('mn_72'), -8), ('spoon_clink', e('mn_menu'), -12), ('paper_whoosh', e('mn_81'), -8), ('knife_tuk', e('mn_mag'), -10), ('crowd_cheer', e('mn_home'), -14),
        # Тольмеццо: хребет, флаг, «НО!», вывеска, десерт в окне, квитанция 1952, эхо (пауза-гэг)
        ('wind_gust', S0['tolmezzo'] - 0.2, -10), ('sail_flap', e('tz_fr'), -12), ('crowd_boo', e('tz_no'), -8), ('electric_zap', e('tz_town'), -16), ('teleport_pop', e('tz_dish'), -12), ('stamp_thud', e('tz_50'), -6), ('organetto_sting', e('tz_50', 0.3), -14), ('crowd_boo', LS('s4') + VD_END(T, 's4'), -20),
        # замены: ставни, тетрадь, масло улетает, маскарпоне плюх, ликёр уезжает, мока булькает, кофе льётся
        ('door_swing', S0['swap'] - 0.2, -10), ('paper_whoosh', e('sw_cake'), -12), ('whip_whoosh', e('sw_butter'), -10), ('masc_plop', e('sw_masc'), -2), ('glacier_groan', e('sw_liq'), -24), ('moka_gurgle', e('sw_cof', -0.4), 6), ('pour_oil', e('sw_cof'), -8),
        # Том-малыш в тирамису: ложка-переход, прыжок на плот, гребёт, кремовая лавина, мост, какао-метель, АПЧХИ (пауза-гэг)
        ('masc_plop', S0['layers'] - 0.2, -6), ('dive_splash', e('ly_sav', 0.3), -12), ('pasta_twirl', e('ly_cof'), -12), ('mudflow_roar', e('ly_cream'), -14), ('masc_plop', e('ly_cream', 0.3), 0), ('wood_bonk', e('ly_again', 0.4), -10), ('salt_shake', e('ly_cocoa'), -6), ('cough_gag', e('ly_sneeze'), -4), ('pillow_poof', e('ly_sneeze', 0.1), -10),
        # Венеция: рябь, ноты гондольера, надпись, взлёт «подними меня», кувырок
        ('heavy_water_loop', S0['name'] - 0.2, -14), ('mandolin_sting', e('nm_ven'), -12), ('knife_tuk', e('nm_tir'), -10), ('shimmer', e('nm_up'), -8), ('teleport_pop', e('nm_boost'), -8), ('dive_splash', e('nm_boost', 0.6), -14),
        # ★ дерби: монета, свисток, табло 1:?, 1:1, ничья — конфетти, органетто-разгадка
        ('coin_ring', S0['verdict'] - 0.2, -8), ('quiz_buzz', e('vd_who'), -10), ('quiz_ding', e('vd_fr'), -8), ('crowd_cheer', e('vd_fr', 0.1), -14), ('quiz_ding', e('vd_tv'), -8), ('crowd_cheer', e('vd_tv', 0.1), -14), ('organetto_sting', e('vd_draw'), -8), ('fireworks', e('vd_draw', 0.1), -14), ('shimmer', e('vd_draw', 0.2), -10),
        # сегодня: какао-ситечко, телефон, «ам!», вздох, кофе, ликёр
        ('salt_shake', S0['today'] - 0.2, -8), ('radio_chime', e('td_send'), -14), ('jaw_chomp', e('td_eat', 0.2), -8), ('snore_zzz', e('td_form'), -20), ('spoon_clink', e('td_cof'), -10), ('goblet_clink', e('td_liq'), -10),
        # кнопка: подмигивание, ПОДПИШИСЬ поверх, петля в хук (органетто хука звучит на повторе)
        ('teleport_pop', e('td_x', 0.4), -12), ('teleport_pop', DUR - 2.4, -14),
    ]
    beds = [('restaurant_loop', 0, S1['hook']), ('kitchen_loop', S0['nonna'], S1['nonna']), ('kitchen_loop', S0['treviso'], S1['treviso']), ('restaurant_loop', S0['menu'], S1['menu']),
            ('forest_loop', S0['tolmezzo'], S1['tolmezzo']), ('campfire_loop', S0['swap'], S1['swap']), ('heavy_water_loop', S0['layers'], S1['layers']), ('harbor_loop', S0['name'], S1['name']),
            ('bazaar_loop', S0['verdict'], S1['verdict']), ('city_loop', S0['today'], S1['today']), ('city_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)


def VD_END(T, k):
    return T.LE(k) - T.LS(k) + 0.1 if hasattr(T, 'LE') else 2.0
