"""Звук 020 — Карбонара («перемотка» назад во времени). SFX: (файл, время, дБ). BEDS: (луп, начало, конец).
Новые (020): accordion_sting (подпись выпуска — аккордеон траттории: первый звук, вопросы, раскрытия), pepper_grind, pasta_twirl, coaster_rattle.
Сквозной звук приёма — rewind на каждом «мотаем назад» (cream «перемотаем», переходы mag–ration)."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: аккордеон, тарелка, ценник 80, фото бабушки выскакивает, «?», вилка накручивает, укус
        ('accordion_sting', 0.0, -6), ('steam_hiss', e('hk_carb', 0.2), -18), ('knife_tuk', e('hk_80'), -8), ('teleport_pop', e('hk_gran'), -10), ('crowd_ooh', e('hk_gran', 0.15), -16),
        ('quiz_ding', e('hk_who'), -12), ('pasta_twirl', e('hk_grab'), -4), ('crunch_crouton', e('hk_bite'), -1), ('fork_squish', e('hk_bite', 0.12), -6), ('pepper_grind', e('hk_bite', 0.4), -10),
        # сегодня → 80-е: перечная мельница-переход, канон выскакивает (гуанчале, яйцо, пекорино, перец), сливки, штамп «ересь», ◀◀ перемотка, сливки льются, флажок
        ('pepper_grind', S0['cream'] - 0.2, -2), ('knife_chop', e('cr_guan'), -10), ('egg_crack', e('cr_egg'), -8), ('wood_bonk', e('cr_pec'), -10), ('pepper_grind', e('cr_pep'), -6),
        ('jar_lid', e('cr_cream'), -10), ('stamp_thud', e('cr_heresy'), -4), ('record_scratch', e('cr_heresy', 0.25), -14), ('rewind', e('cr_rew', -0.1), -6), ('knife_tuk', e('cr_30'), -8), ('honey_pour', e('cr_pour'), -6), ('cloth_rip', e('cr_it'), -16), ('accordion_sting', e('cr_it', 0.1), -14),
        # 1954 Милан: сливки заливают кадр, перемотка, машинка, журнал, чеснок шлёпается, сыр + вспышка, дверь и бабушка со скалкой (пауза-гэг)
        ('honey_pour', S0['mag'] - 0.2, -6), ('rewind', S0['mag'] - 0.1, -12), ('typewriter', e('mg_rec', -0.3), -14), ('paper_whoosh', e('mg_year'), -10), ('drip_plop', e('mg_garlic'), -6), ('knife_tuk', e('mg_garlic', 0.1), -10),
        ('camera_flash', e('mg_gruy'), -8), ('wood_bonk', e('mg_gruy', 0.1), -10), ('door_swing', e('mg_gran'), -8), ('wood_bonk', e('mg_forgive', -0.3), -6), ('wood_bonk', e('mg_forgive'), -6), ('crowd_ooh', e('mg_forgive', 0.3), -14),
        # 1952 Чикаго: каретка машинки-переход, вопрос, табличка, путеводитель, надземка с грохотом
        ('typewriter', S0['chicago'] - 0.2, -4), ('rewind', S0['chicago'] - 0.05, -14), ('quiz_buzz', e('ch_first'), -14), ('knife_tuk', e('ch_early'), -8), ('paper_whoosh', e('ch_print'), -8), ('train_rush', e('ch_chi', -0.4), -4), ('neon_buzz', e('ch_chi', 0.3), -14),
        # 1950 Рим: поезд проносится-переход, лупа, газета, офицеры машут, голуби
        ('train_rush', S0['news'] - 0.25, -8), ('rewind', S0['news'] - 0.05, -14), ('shimmer', e('nw_word'), -14), ('paper_whoosh', e('nw_year'), -6), ('pencil_scribble', e('nw_year', 0.2), -10), ('crowd_cheer', e('nw_off'), -16), ('bird_flutter', e('nw_rome'), -8),
        # до войны: дым угля-переход, книга, листает, ✕ НЕТ, угольщики, костёр вспыхивает, штамп ЛЕГЕНДА
        ('fire_burn_through', S0['legend'] - 0.25, -10), ('rewind', S0['legend'] - 0.05, -14), ('accordion_sting', e('lg_war'), -14), ('paper_whoosh', e('lg_book'), -8), ('scroll_unroll', e('lg_book', 0.4), -14),
        ('quiz_buzz', e('lg_no'), -10), ('spoon_clink', e('lg_coal'), -10), ('fire_flare', e('lg_fire'), -8), ('stamp_thud', e('lg_leg', 0.1), -2),
        # 1944: крышка ящика-переход, Колизей из дымки, фонарь вспыхивает, котелки стучат, бекон шлёпается и шкворчит, банка — «пуф» порошка
        ('wood_bonk', S0['ration'] - 0.2, -6), ('rewind', S0['ration'] - 0.05, -14), ('wind_gust', e('rt_hint'), -14), ('electric_zap', e('rt_year'), -18), ('knife_tuk', e('rt_year', 0.1), -8), ('spoon_clink', e('rt_sold'), -8), ('spoon_clink', e('rt_sold', 0.2), -10),
        ('patty_slap_sizzle', e('rt_bacon'), -6), ('jar_lid', e('rt_egg', -0.15), -10), ('pillow_poof', e('rt_egg'), -4),
        # ★ Том-малыш: вилка-спираль-переход, вспышка разгадки, бекон падает, вагонетка срывается, разгон, мёртвая петля (пауза-гэг)
        ('pasta_twirl', S0['pasta'] - 0.2, -2), ('shimmer', e('ps_ans'), -8), ('accordion_sting', e('ps_ans', 0.1), -10), ('drip_plop', e('ps_cooks', 0.4), -8), ('pillow_poof', e('ps_cooks', 0.6), -10),
        ('coaster_rattle', e('ps_pasta', -0.2), -6), ('whip_whoosh', e('ps_brk'), -12), ('coaster_rattle', e('ps_loop', -0.2), -6), ('time_zoom', e('ps_loop', 0.1), -12), ('teleport_pop', e('ps_loop', 0.7), -10),
        # сегодня: пар-переход, гирлянда и конфетти, календарь, гуанчале (А), бекон (Б)
        ('steam_hiss', S0['today'] - 0.2, -6), ('crowd_cheer', e('td_fest'), -14), ('fireworks', e('td_fest', 0.1), -18), ('paper_whoosh', e('td_date'), -10), ('quiz_ding', e('td_guan'), -10), ('quiz_ding', e('td_bacon'), -10), ('accordion_sting', e('td_bacon', 0.4), -12),
        # кнопка: поднос-переход, подмигивание, плашка ПОДПИШИСЬ; без мяу — петля в хук (аккордеон хука звучит на повторе)
        ('whip_whoosh', S0['button'] - 0.15, -10), ('teleport_pop', e('bt_wink'), -12), ('teleport_pop', DUR - 1.6, -12),
    ]
    beds = [('restaurant_loop', 0, S1['hook']), ('kitchen_loop', S0['cream'], S1['cream']), ('city_loop', S0['mag'], S1['mag']), ('blizzard_loop', S0['chicago'], S1['chicago']),
            ('city_loop', S0['news'], S1['news']), ('forest_loop', S0['legend'], S1['legend']), ('campfire_loop', S0['legend'], S1['legend']), ('campfire_loop', S0['ration'], S1['ration']),
            ('sizzle_loop', S0['pasta'], S1['pasta']), ('kitchen_loop', S0['today'], S1['today']), ('restaurant_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # петля в хук; ПОДПИШИСЬ — ENDCARD = true
