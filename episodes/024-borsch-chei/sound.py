"""Звук 024 — «Чей борщ?»: SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец).
Подпись выпуска — цимбалы (cimbalom_sting, общий инструмент соседей): первый звук хука и последний под «ПОДПИШИСЬ» (петля).
Новые звуки фактуры (024): cimbalom_sting, beet_slice, smetana_plop, kvass_fizz."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # hook — спор над тарелкой
        ('cimbalom_sting', 0.0, -4), ('steam_hiss', 0.15, -14),
        ('spoon_clink', e('hk_sosedi', 0.1), -8), ('spoon_clink', e('hk_sosedi', 0.35), -9), ('whip_whoosh', e('hk_sosedi'), -10),
        ('tavern_brawl', e('hk_hrip'), -14), ('spoon_clink', e('hk_hrip', 0.2), -7), ('spoon_clink', e('hk_hrip', 0.5), -8),
        ('knife_tuk', e('hk_dno'), -6), ('drip_plop', e('hk_dno', 0.15), -8),
        ('soup_slurp', e('hk_bite'), 3),
        # нырок в тарелку → grass
        ('vortex_suck', S0['grass'] - 0.45, -4), ('dive_splash', S0['grass'] - 0.05, -2), ('bubbles_burst', S0['grass'] + 0.3, -6),
        ('kvass_fizz', e('gr_green'), -6), ('shimmer', e('gr_green', 0.05), -12), ('stamp_thud', e('gr_name'), -8), ('knife_tuk', e('gr_name', 0.1), -12),
        ('tiny_tuk', e('gr_rule'), -8), ('shiver_brr', e('gr_sour'), -6), ('kvass_fizz', e('gr_sour', 0.1), -10),
        # 1584 Киев
        ('dust_whoosh', S0['kyiv'] - 0.15, -6), ('paper_whoosh', S0['kyiv'] + 0.25, -8),
        ('fire_flare', e('ky_lamp'), -12), ('church_bells', e('ky_kyiv'), -14), ('pencil_scribble', e('ky_write', 0.1), -6),
        ('record_scratch', e('ky_no'), -9), ('pencil_scribble', e('ky_no', 0.15), -10),
        ('fire_flare', e('ky_each'), -12), ('fire_flare', e('ky_each', 0.36), -13), ('fire_flare', e('ky_each', 0.72), -14),
        ('soup_slurp', e('ky_gag', 0.1), -4),
        # XVIII в. — свёкла
        ('beet_slice', S0['beet'] - 0.12, -4), ('beet_slice', e('bt_beet'), -2), ('wood_bonk', e('bt_beet', 0.05), -8), ('knife_tuk', e('bt_beet', 0.1), -12),
        ('boulder_roll', e('bt_cab'), -12), ('wood_bonk', e('bt_cab', 0.55), -8), ('knife_tuk', e('bt_cab', 0.1), -12), ('pencil_scribble', e('bt_beet', 0.05), -14),
        ('pour_oil', e('bt_pour'), -6), ('tiny_tuk', e('bt_pour', 0.05), -10), ('shimmer', e('bt_red'), -6), ('kvass_fizz', e('bt_red', 0.1), -8),
        # XIX в. — кастрюля, Том-малыш
        ('lettuce_crunch', S0['pot'] - 0.15, -5), ('bag_crinkle', e('pt_sack'), -8),
        ('drip_plop', e('pt_sack', 0.7), -8), ('drip_plop', e('pt_sack', 0.95), -9), ('drip_plop', e('pt_sack', 1.2), -9), ('drip_plop', e('pt_sack', 1.4), -10),
        ('tiny_tuk', e('pt_hop', 0.45), -10), ('tiny_tuk', e('pt_hop', 0.9), -10), ('tiny_tuk', e('pt_hop', 1.35), -10), ('knife_tuk', e('pt_hop'), -12),
        ('boulder_roll', e('pt_push'), -12), ('crowd_ooh', e('pt_sad'), -14),
        ('wood_bonk', e('pt_kick'), -2), ('whip_whoosh', e('pt_kick', 0.08), -6), ('pencil_scribble', e('pt_kick', 0.05), -12), ('dust_whoosh', e('pt_gag', 0.1), -8),
        # ≈ 100 лет — томат
        ('ink_splat', S0['tomato'] - 0.1, -4), ('drip_plop', S0['tomato'] + 0.1, -8),
        ('boulder_roll', e('tm_in', -0.2), -8), ('oompah_horn', e('tm_in', 0.1), -10), ('knife_tuk', e('tm_in'), -12), ('paper_whoosh', e('tm_cal'), -8),
        ('wood_bonk', e('tm_push'), -6), ('tiny_tuk', e('tm_push', -0.15), -10), ('boulder_roll', e('tm_push', 0.1), -10), ('shimmer', e('tm_holy'), -8),
        ('door_swing', e('tm_out', -0.1), -6), ('wood_bonk', e('tm_out', 0.05), -2), ('pencil_scribble', e('tm_out', 0.05), -12),
        # соседи
        ('whip_whoosh', S0['neighbors'] - 0.15, -6), ('pour_oil', S0['neighbors'], -6),
        ('sleigh_bells', e('nb_pl'), -12), ('goblet_clink', e('nb_clear'), -8), ('drip_plop', e('nb_ush'), -7), ('drip_plop', e('nb_ush', 0.1), -8), ('drip_plop', e('nb_ush', 0.2), -8),
        ('crowd_cheer', e('nb_lt'), -14), ('fireworks', e('nb_pink'), -16), ('pour_oil', e('nb_kef'), -8),
        ('weight_slam', e('nb_ton'), -2), ('tiny_tuk', e('nb_ton', 0.05), -10),
        # Молдова и Румыния
        ('grain_pour', S0['moldova'] - 0.12, -4), ('cimbalom_sting', e('md_in'), -8),
        ('jar_lid', e('md_bors'), -6), ('grain_pour', e('md_bran'), -6), ('kvass_fizz', e('md_bran', 0.3), -8), ('tiny_tuk', e('md_bran', 0.3), -10),
        ('whip_whoosh', e('md_beet'), -8), ('wood_bonk', e('md_beet', 0.6), -6), ('shiver_brr', e('md_sour'), -6), ('stamp_thud', e('md_sour', 0.1), -8),
        # ★ разгадка
        ('smetana_plop', S0['answer'] - 0.05, 0), ('clock_tick_heavy', e('an_q'), -10),
        ('wood_bonk', e('an_beet'), -6), ('smetana_plop', e('an_beet', 0.35), -3), ('knife_tuk', e('an_beet', 0.6), -12),
        ('medal_fanfare', e('an_land'), -6), ('shimmer', e('an_land', 0.05), -8), ('stamp_thud', e('an_unesco'), -5),
        ('crowd_cheer', e('an_own'), -10), ('spoon_clink', e('an_own', 0.15), -8), ('tiny_tuk', e('an_own'), -10), ('paper_whoosh', e('an_merch'), -8),
        # сегодня + финал
        ('honey_pour', S0['today'] - 0.12, -4), ('steam_hiss', e('td_fresh'), -10), ('knife_tuk', e('td_fresh', 0.05), -12), ('freezer_open', e('td_old'), -4),
        ('soup_slurp', e('td_bite'), 0), ('cimbalom_sting', DUR - 2.6, -8),
    ]
    beds = [('feast_loop', 0.0, S1['hook']), ('forest_loop', S0['grass'], S1['grass']), ('bazaar_loop', S0['kyiv'], S1['kyiv']),
            ('campfire_loop', S0['beet'], S1['beet']), ('pot_boil', S0['pot'], S1['pot']), ('kitchen_loop', S0['tomato'], S1['tomato']),
            ('city_loop', S0['neighbors'], S1['neighbors']), ('forest_loop', S0['moldova'], S1['moldova']), ('feast_loop', S0['answer'], S1['answer']),
            ('kitchen_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # тест v1: музыка без затухания на стыке, мастер −14 LUFS
