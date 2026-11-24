"""Звук 027 — Кетчуп. SFX: (файл, время, дБ). BEDS: (луп, начало, конец).
Новые (027): honkytonk_sting (подпись выпуска — хонки-тонк пианино: первый звук, вопросы, разгадка), ketchup_blop, ketchup_squirt, pill_rattle."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: пианино, капля на фри (замедленно), корона брызг, штамп по помидору, лупа, буквы съезжают, «?», укус фри
        ('honkytonk_sting', 0.0, -6), ('drip_plop', 0.5, -4), ('ketchup_blop', 0.56, -2), ('whip_whoosh', 1.0, -14), ('stamp_thud', e('hk_tom'), -6), ('watch_click', e('hk_check'), -12), ('paper_whoosh', e('hk_name'), -14), ('quiz_ding', e('hk_q'), -14), ('fry_crunch', e('hk_bite'), -2),
        # фабрика: капли-занавес, помидоры в котёл, уксус, сахар, конвейер, краска, тёмные бутылки, прозрачная — блеск
        ('ketchup_squirt', S0['heinz'] - 0.2, -8), ('steam_hiss', S0['heinz'] + 0.2, -18), ('dumpling_plop', e('hz_tom', 0.4), -8), ('pour_oil', e('hz_vin'), -10), ('grain_pour', e('hz_sug'), -10), ('rivets_steel', e('hz_heinz'), -16), ('spoon_clink', e('hz_heinz', 0.3), -12), ('quiz_ding', e('hz_heinz', 0.2), -14), ('pebbles_pour', e('hz_coal'), -12), ('jar_lid', e('hz_dark'), -12), ('shimmer', e('hz_clear'), -8),
        # Том-малыш в бутылке: горлышко всасывает, вязкое бульканье, улитка, спидометр, «ПОКА!», БЛОП (пауза-гэг)
        ('vortex_suck', S0['bottle'] - 0.25, -10), ('underwater_loop', S0['bottle'], -14), ('honey_pour', e('bt_in'), -10), ('snout_suck', e('bt_snail'), -14), ('watch_click', e('bt_45'), -10), ('teleport_pop', e('bt_hour', 0.2), -12), ('ketchup_blop', e('bt_blop'), 2), ('record_scratch', e('bt_blop', 0.4), -18),
        # аптека: перемотка, часы назад, колокольчик, живот, пилюли гремят, раскол пилюли, «0 томатов», бегство
        ('rewind', S0['pills'] - 0.2, -8), ('clock_tick_heavy', e('pl_back'), -12), ('handbell', e('pl_apt'), -10), ('cough_gag', e('pl_belly'), -14), ('pill_rattle', e('pl_grab'), 0), ('cash_register', e('pl_grab', 0.4), -12), ('chisel_strike', e('pl_zero'), -10), ('stamp_thud', e('pl_zero', 0.2), -8), ('door_swing', e('pl_lax', 0.4), -8), ('dust_whoosh', e('pl_lax', 0.5), -10), ('honkytonk_sting', e('pl_lax', 0.8), -14),
        # Филадельфия: помидор катится, перо, помидоры в корзину, пишет, плашка 1812, колокол
        ('boulder_roll', S0['philly'] - 0.2, -12), ('pencil_scribble', e('ph_first'), -12), ('wood_bonk', e('ph_tom'), -14), ('wood_bonk', e('ph_tom', 0.2), -16), ('pencil_scribble', e('ph_write'), -8), ('knife_tuk', e('ph_year'), -10), ('church_bells', e('ph_city'), -14),
        # Англия: скорлупа ореха, огонь, грибы, орехи трескаются, устрицы, помидор катится, «ВОН!»
        ('rock_knock', S0['england'] - 0.2, -8), ('fire_flare', S0['england'] + 0.1, -16), ('mash_squish', e('en_mush'), -8), ('hardtack_crack', e('en_nut'), -8), ('drip_plop', e('en_oys'), -6), ('boulder_roll', e('en_tom'), -14), ('wood_bonk', e('en_out'), -6), ('whip_whoosh', e('en_out', 0.1), -12),
        # корабль: парус хлопает, ящик, парус джонки, кувшин, нюхает
        ('sail_flap', S0['ship'] - 0.25, -8), ('seagulls', S0['ship'] + 0.2, -18), ('wood_bonk', e('sh_bring', 0.6), -10), ('sail_flap', e('sh_asia'), -14), ('jar_lid', e('sh_cn'), -12), ('snout_suck', e('sh_trade', 0.2), -12),
        # ★ Фуцзянь: крышка кувшина, свиток, рыба выпрыгивает, плашка, проба, пианино-разгадка
        ('jar_lid', S0['canton'] - 0.2, -8), ('scroll_unroll', e('cn_word'), -8), ('fish_swoosh', e('cn_brine'), -8), ('dive_splash', e('cn_brine', 0.1), -14), ('shimmer', e('cn_brine', 0.3), -8), ('honkytonk_sting', e('cn_ket'), -8), ('soup_slurp', e('cn_sauce'), -8),
        # сегодня: зигзаг кетчупа, телефон, кетчуп на всё, фри, макароны
        ('ketchup_squirt', S0['today'] - 0.2, -6), ('radio_chime', e('td_send'), -14), ('ketchup_squirt', e('td_all', 0.3), -6), ('ketchup_squirt', e('td_all', 0.7), -8), ('crowd_ooh', e('td_all', 0.9), -16), ('fry_crunch', e('td_fry'), -10), ('pasta_twirl', e('td_pasta'), -10),
        # кнопка: подмигивание, ПОДПИШИСЬ поверх, петля в хук (пианино хука звучит на повторе)
        ('teleport_pop', e('td_x', 0.4), -12), ('teleport_pop', DUR - 2.4, -14),
    ]
    beds = [('restaurant_loop', 0, S1['hook']), ('factory_loop', S0['heinz'], S1['heinz']), ('heavy_water_loop', S0['bottle'], S1['bottle']), ('city_loop', S0['pills'], S1['pills']),
            ('bazaar_loop', S0['philly'], S1['philly']), ('campfire_loop', S0['england'], S1['england']), ('ship_creak_loop', S0['ship'], S1['ship']), ('harbor_loop', S0['canton'], S1['canton']),
            ('kitchen_loop', S0['today'], S1['today']), ('kitchen_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)
