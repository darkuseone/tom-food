"""Звук 026 — Суши. SFX: (файл, время, дБ). BEDS: (луп, начало, конец).
Новые (026): shamisen_sting (подпись выпуска — сямисэн: первый звук, вопросы, разгадка), rice_press, vinegar_pour, soy_plop, ferment_bubble."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: сямисэн, макро-нигири, отъезд, повар с черпаком, уксус льётся, «?», укус
        ('shamisen_sting', 0.0, -6), ('shimmer', 0.3, -16), ('whip_whoosh', e('hk_pull', -0.2), -12), ('spoon_clink', e('hk_cook'), -14), ('vinegar_pour', e('hk_vin', -0.1), 6), ('steam_hiss', e('hk_vin', 0.3), -18), ('quiz_ding', e('hk_q'), -14), ('rice_press', e('hk_bite'), 8), ('jaw_chomp', e('hk_bite', 0.08), -2),
        # рисовые поля: нырок в рисинку, рыба, соль, рис в кувшин, луны-таймлапс, кувшин опрокинут, рис сыплется, утки
        ('vortex_suck', S0['paddy'] - 0.25, -10), ('grain_pour', S0['paddy'] + 0.05, -12), ('fish_swoosh', e('pd_fish'), -10), ('salt_shake', e('pd_salt'), -8), ('rice_press', e('pd_rice'), 8), ('time_zoom', e('pd_moon'), -14), ('ferment_bubble', e('pd_moon', 0.5), -12), ('wood_bonk', e('pd_dump'), -8), ('grain_pour', e('pd_dump', 0.15), -6), ('chicken_cluck', e('pd_dump', 0.5), -14),
        # озеро Бива: крышка кадки, брожение, бирки лет, крышка снята — «фу», шерсть дыбом, бегство (пауза-гэг)
        ('wood_bonk', S0['biwa'] - 0.15, -10), ('paper_whoosh', S0['biwa'] - 0.1, -14), ('ferment_bubble', e('bw_ferm'), -6), ('knife_tuk', e('bw_years'), -10), ('knife_tuk', e('bw_years', 0.2), -11), ('knife_tuk', e('bw_years', 0.4), -12), ('jar_lid', e('bw_smell'), -6), ('cough_gag', e('bw_smell', 0.35), -10), ('shiver_brr', e('bw_cat'), -12), ('dust_whoosh', e('bw_run'), -10), ('shamisen_sting', e('bw_run', 0.5), -14),
        # Муромати: сёдзи, курильница-таймлапс, зевота, хлопок по столу, рис палочками, жуёт, аплодисменты
        ('door_swing', S0['wait'] - 0.15, -10), ('clock_tick_heavy', e('wt_wait'), -14), ('snore_zzz', e('wt_wait', 0.1), -18), ('table_crash', e('wt_slap'), -10), ('spoon_clink', e('wt_slap', 0.1), -14), ('rice_press', e('wt_rice'), 6), ('quiz_ding', e('wt_eat', -0.3), -14), ('jaw_chomp', e('wt_eat'), -8), ('crowd_cheer', e('wt_eat', 0.2), -18),
        # Эдо: норэн, плашка 1824, лепка нигири, фейерверк, «втрое больше»
        ('cloth_rip', S0['edo'] - 0.2, -16), ('poof_cloth', S0['edo'] - 0.05, -12), ('knife_tuk', e('ed_tokyo'), -10), ('rice_press', e('ed_press'), 6), ('dough_slap', e('ed_press', 0.4), -14), ('fireworks', e('ed_fast'), -10), ('crowd_ooh', e('ed_fast', 0.3), -16), ('teleport_pop', e('ed_big'), -10), ('knife_tuk', e('ed_big', 0.3), -10),
        # Том-малыш в нигири: ладонь-переход, лезет по рисинкам, вершина, горка, ПЛЮХ (пауза-гэг)
        ('press_thunk', S0['inside'] - 0.15, -10), ('rock_knock', e('in_climb'), -14), ('rock_knock', e('in_climb', 0.3), -14), ('quiz_ding', e('in_top'), -14), ('ice_slide', e('in_slide'), -8), ('soy_plop', e('in_plop'), 0), ('dive_splash', e('in_plop', 0.05), -12), ('record_scratch', e('in_plop', 0.5), -18),
        # торо: соевая волна, тунец, торо летит в бадью, кошка, «фи», Том ест; кран-смена эпохи, колокол аукциона, «миллиона»
        ('heavy_water_loop', S0['toro'] - 0.25, -12), ('soy_plop', S0['toro'] - 0.1, -6), ('fish_swoosh', e('tr_fat'), -12), ('drip_plop', e('tr_throw', 0.45), -8), ('cat_meow', e('tr_step'), -10), ('jaw_chomp', e('tr_me', 0.3), -6), ('whip_whoosh', e('tr_2019'), -8), ('handbell', e('tr_2019', 0.5), -12), ('handbell', e('tr_sold'), -10), ('cash_register', e('tr_mil'), -6), ('crowd_ooh', e('tr_mil', 0.2), -12),
        # Норвегия 1985: волна фьорда, проектор щёлкает слайды, флажки, «うまい!»
        ('sail_flap', S0['norway'] - 0.25, -12), ('fish_swoosh', S0['norway'] - 0.05, -10), ('film_projector', S0['norway'] + 0.1, -16), ('camera_flash', e('nw_salmon'), -12), ('cloth_rip', e('nw_nor'), -16), ('crowd_cheer', e('nw_nor', 0.1), -18), ('camera_flash', e('nw_80'), -12), ('jaw_chomp', e('nw_80', 0.3), -10), ('quiz_ding', e('nw_80', 0.5), -12),
        # ★ уксусоварня: капля, черпак, уксус в рис, часики, календарь падает, полотнище 酸, вспышка, нигири
        ('drip_plop', S0['vinegar'] - 0.2, -6), ('shamisen_sting', e('vn_q'), -12), ('vinegar_pour', e('vn_pour'), 8), ('watch_click', e('vn_min'), -8), ('clock_tick_heavy', e('vn_min', 0.2), -16), ('paper_whoosh', e('vn_year'), -10), ('stamp_thud', e('vn_year', 0.3), -8), ('scroll_unroll', e('vn_word', -0.2), -6), ('shimmer', e('vn_word'), -6), ('shamisen_sting', e('vn_word', 0.15), -8), ('medal_fanfare', e('vn_rice', 0.5), -14),
        # сегодня: лента-переход, телефон, БУЛЬ в соус, нигири, ролл
        ('escalator_rise', S0['today'] - 0.25, -14), ('plate_spin', S0['today'] - 0.05, -12), ('radio_chime', e('td_send'), -14), ('soy_plop', e('td_dunk', 0.5), -2), ('quiz_ding', e('td_nig'), -12), ('teleport_pop', e('td_roll'), -10),
        # кнопка: подмигивание, плашка ПОДПИШИСЬ поверх — без склейки, петля в хук (сямисэн хука звучит на повторе)
        ('teleport_pop', e('td_x', 0.4), -12), ('teleport_pop', DUR - 2.4, -14),
    ]
    beds = [('restaurant_loop', 0, S1['hook']), ('forest_loop', S0['paddy'], S1['paddy']), ('harbor_loop', S0['biwa'], S1['biwa']), ('cabin_loop', S0['wait'], S1['wait']),
            ('city_loop', S0['edo'], S1['edo']), ('cave_drip_loop', S0['inside'], S1['inside']), ('bazaar_loop', S0['toro'], E['tr_2019']), ('factory_loop', E['tr_2019'], S1['toro']),
            ('restaurant_loop', S0['norway'], S1['norway']), ('kitchen_loop', S0['vinegar'], S1['vinegar']), ('feast_loop', S0['today'], S1['today']), ('feast_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)
