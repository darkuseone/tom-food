"""Звук 023 — Гречка («путь зерна»: от поля к Гималаям, Византии, рынкам Европы, печи — и к ботанику). SFX: (файл, время, дБ). BEDS: (луп, начало, конец).
Новые (023): gusli_sting (подпись выпуска — гусли: первый звук, вопросы, раскрытия), grain_pour (гречка сыплется), kasha_puff (каша пыхтит в чугунке),
bee_buzz (пчела пролетает)."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: гусли, ложка в чугунок (каша пыхтит), колосок перечёркнут, ревень качается, «?» над грядкой, пчела, укус — хруст и рассыпанные зёрна
        ('gusli_sting', 0.0, -7), ('kasha_puff', e('hk_scoop', 0.05), -8), ('spoon_clink', e('hk_scoop', 0.2), -14), ('pencil_scribble', e('hk_not'), -10), ('stamp_thud', e('hk_not', 0.1), -8),
        ('wind_gust', e('hk_kin'), -16), ('bee_buzz', e('hk_bed'), -10), ('quiz_buzz', e('hk_q'), -14), ('whip_whoosh', e('hk_bite', -0.15), -14),
        ('crunch_crouton', e('hk_bite'), -1), ('grain_pour', e('hk_bite', 0.08), 4), ('bee_buzz', e('hk_bite', 0.4), -14),
        # Юньнань: зерно летит в камеру, туман расходится, пики — гусли, стебель срывается, зёрна в чашу, «тесно» — корзина трещит, караван яков, дорожка зёрен, указатель
        ('time_zoom', S0['yunnan'] - 0.2, -8), ('wind_gust', S0['yunnan'] + 0.05, -10), ('wind_gust', e('yn_name'), -14), ('gusli_sting', e('yn_peaks'), -12), ('shimmer', e('yn_peaks', 0.1), -18),
        ('lettuce_crunch', e('yn_tame'), -8), ('grain_pour', e('yn_ago'), 0), ('bark_scratch', e('yn_tight'), -10), ('wood_bonk', e('yn_tight', 0.15), -12), ('cow_moo', e('yn_tibet'), -14), ('handbell', e('yn_tibet', 0.3), -16),
        ('pebbles_pour', e('yn_west'), -10), ('knife_tuk', e('yn_west', 0.3), -10),
        # Византия: парус с ветром, чайки, купола — колокол, зерно сыплется в ладони, табличка «ГРЕЧКА»
        ('sail_flap', S0['byzant'] - 0.2, -4), ('seagulls', S0['byzant'] + 0.1, -16), ('sail_flap', e('bz_greek'), -10), ('church_bells', e('bz_byz'), -18), ('shimmer', e('bz_byz', 0.1), -16),
        ('grain_pour', e('bz_pour'), 0), ('wood_bonk', e('bz_name'), -6), ('gusli_sting', e('bz_name', 0.2), -14),
        # рынок: свиток раскатывается, француз «сарацинская» — тук, немец «языческая» — тук, «никто!» — смешок/бу, доска качается, орешек падает, «бук!» — стук по лбу
        ('scroll_unroll', S0['names'] - 0.2, -4), ('knife_tuk', e('nm_fr'), -8), ('coin_ring', e('nm_fr', 0.3), -16), ('knife_tuk', e('nm_de'), -8), ('crowd_boo', e('nm_none', 0.2), -16), ('record_scratch', e('nm_none', 0.4), -14),
        ('door_swing', e('nm_en'), -14), ('tiny_tuk', e('nm_beech'), -6), ('wood_bonk', e('nm_beech', 0.4), -10), ('quiz_ding', e('nm_rem'), -10), ('wood_bonk', e('nm_rem', 0.1), -14),
        # изба: устье печи раскрывается (огонь), ухват тянет чугунок, пар и бульк, бабушка — пословица (гусли), огонь вспыхивает, зёрна шкворчат и темнеют, «зелёная!» — поп
        ('fire_flare', S0['pech'] - 0.2, -6), ('rock_knock', e('pc_pull'), -8), ('steam_hiss', e('pc_pull', 0.5), -10), ('kasha_puff', e('pc_pull', 0.6), -4), ('gusli_sting', e('pc_say'), -14),
        ('fire_flare', e('pc_fire'), -4), ('oven_roar', e('pc_fire', 0.1), -12), ('sizzle_loop', e('pc_roast'), -12), ('spatula_flip', e('pc_roast', 0.4), -10), ('teleport_pop', e('pc_green'), -8),
        # Том-малыш в чугунке: пар, шаги-скрип по зерну, «1-2-3» — тук-тук-тук, флажок, пшеница проплывает, кивок; пауза-гэг: съезжает по грани — свист и «ПЛЮХ» в масло
        ('steam_hiss', S0['grain'] - 0.2, -6), ('kasha_puff', S0['grain'] + 0.1, -6), ('fork_squish', e('gr_look', 0.4), -14), ('tiny_tuk', e('gr_faces'), -8), ('tiny_tuk', e('gr_faces', 0.22), -8), ('tiny_tuk', e('gr_faces', 0.44), -8),
        ('wood_bonk', e('gr_top'), -8), ('crowd_cheer', e('gr_top', 0.1), -20), ('bubbles_burst', e('gr_wheat'), -12), ('quiz_buzz', e('gr_no'), -14),
        ('ice_slide', e('gr_gag'), -6), ('whip_whoosh', e('gr_gag', 0.2), -12), ('drip_plop', e('gr_splash'), -2), ('honey_pour', e('gr_splash', 0.1), -6), ('crowd_ooh', e('gr_splash', 0.3), -18),
        # магазин: двери разъезжаются, «долго» — пачка шуршит, «панику» — лампы мигают, топот, тележки; полка пустеет, «чёрной» — жесть-вывеска, «чёрный день» — гром
        ('door_swing', S0['panic'] - 0.2, -8), ('escalator_rise', S0['panic'] - 0.05, -16), ('bag_crinkle', e('pn_long'), -8), ('neon_buzz', e('pn_panic'), -10), ('electric_zap', e('pn_panic', 0.1), -16),
        ('crowd_ooh', e('pn_panic', 0.2), -14), ('coaster_rattle', e('pn_panic', 0.4), -14), ('bag_crinkle', e('pn_first'), -6), ('cash_register', e('pn_first', 0.3), -12),
        ('weight_slam', e('pn_black'), -10), ('thunder_crack', e('pn_day'), -6), ('wind_gust', e('pn_day', 0.2), -12),
        # ★ кабинет ботаника: страница гербария, «злак?» — мел зачёркивает, «гречишных» — мел рисует древо, щавель шуршит, «ревень!» — вспышка + гусли, лупа, «правы» — динь; гэг: кислый лист
        ('paper_whoosh', S0['botany'] - 0.2, -4), ('clock_tick_heavy', S0['botany'] + 0.3, -18), ('pencil_scribble', e('bt_q'), -8), ('pencil_scribble', e('bt_fam'), -8), ('pencil_scribble', e('bt_fam', 0.6), -12),
        ('lettuce_crunch', e('bt_sorrel'), -12), ('shimmer', e('bt_rhub', -0.4), -6), ('gusli_sting', e('bt_rhub', -0.35), -8), ('medal_fanfare', e('bt_rhub', -0.2), -16),
        ('camera_flash', e('bt_nut'), -14), ('teleport_pop', e('bt_nut', 0.1), -10), ('quiz_ding', e('bt_right'), -8), ('lettuce_crunch', e('bt_gag'), -6), ('shiver_brr', e('bt_gag', 0.25), -10),
        # сегодня: ложка каши плюхается, зёрна разлетаются, «2 миллиона» — счётчик, «половину» — поп, «А» и «Б» — тук-тук
        ('grain_pour', S0['today'] - 0.15, 2), ('drip_plop', S0['today'] - 0.05, -6), ('watch_click', e('td_num', 0.3), -10), ('watch_click', e('td_num', 0.6), -10), ('quiz_ding', e('td_num', 1.1), -10),
        ('teleport_pop', e('td_half'), -10), ('knife_tuk', e('td_milk'), -8), ('knife_tuk', e('td_cut'), -8), ('gusli_sting', e('td_cut', 0.4), -14),
        # кнопка (тот же кадр): ложка каши — жуёт, ПОДПИШИСЬ всплывает; без мяу — петля в хук (гусли хука звучат на повторе)
        ('spoon_clink', e('td_eat'), -10), ('jaw_chomp', e('td_eat', 0.15), -8), ('teleport_pop', DUR - 1.9, -12),
    ]
    beds = [('forest_loop', 0, S1['hook']), ('forest_loop', S0['yunnan'], S1['yunnan']), ('harbor_loop', S0['byzant'], S1['byzant']), ('bazaar_loop', S0['names'], S1['names']),
            ('campfire_loop', S0['pech'], S1['pech']), ('kitchen_loop', S0['grain'], S1['grain']), ('city_loop', S0['panic'], S1['panic']),
            ('crickets_loop', S0['botany'], S1['botany']), ('kitchen_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # петля в хук; ПОДПИШИСЬ — ENDCARD = true
