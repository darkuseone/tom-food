"""Звук 013 — Солянка (правила v1): SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец). Новые: trabant_pass."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: мел по доске, солонка, «посолил», крышка, хлебок
        ('pencil_scribble', 0.0, -6), ('knife_tuk', e('hk_sel', 0.1), -6), ('teleport_pop', e('hk_sol'), -10), ('salt_shake', e('hk_salt'), -2), ('shimmer', e('hk_salt', 0.3), -8), ('cloche_lift', e('hk_lid'), -4), ('soup_slurp', e('hk_sip'), 2),
        # изба: капуста-полоски, «не суп», сковорода, кочаны, рыба, уксус
        ('knife_chop', S0['stew'] - 0.2, -6), ('quiz_buzz', e('st_not'), -14), ('weight_slam', e('st_sec', 0.2), -12), ('sizzle_loop', e('st_sec', 0.2), -14), ('boulder_roll', e('st_cab'), -16), ('fish_swoosh', e('st_fish'), -8), ('drip_plop', e('st_vin', 0.2), -8),
        # похмелка: пар-переход, книга, храп, кислое, соль, бодрость
        ('steam_hiss', S0['hangover'] - 0.2, -8), ('scroll_unroll', e('hg_book'), -8), ('goblet_clink', e('hg_feast'), -10), ('record_scratch', e('hg_sour'), -16), ('salt_shake', e('hg_salt'), -4), ('quiz_ding', e('hg_name'), -8), ('crowd_ooh', e('hg_name', 0.1), -14),
        # суп: бульонная волна, книга, ведро, тарелки, пар
        ('bubbles_burst', S0['soup'] - 0.2, -8), ('scroll_unroll', e('sp_year'), -10), ('pour_oil', e('sp_pour'), -4), ('spoon_clink', e('sp_plates'), -6), ('spoon_clink', e('sp_plates', 0.22), -8), ('spoon_clink', e('sp_plates', 0.44), -8), ('spoon_clink', e('sp_plates', 0.66), -8), ('steam_hiss', e('sp_soup'), -6),
        # трактир: маслина-кольцо, маслины, каперсы, лимон, блик, лимон-монетка
        ('boulder_roll', S0['tavern'] - 0.2, -14), ('drip_plop', e('tv_ol'), -6), ('drip_plop', e('tv_ol', 0.1), -8), ('salt_shake', e('tv_cap'), -8), ('drip_plop', e('tv_lem'), -2), ('shimmer', e('tv_metal'), -4), ('coin_ring', e('tv_gag'), -6),
        # Том-малыш в миске: лимонные дольки, мясо 1-2-3, рыбы, маслина-гигант
        ('whip_whoosh', S0['three'] - 0.2, -8), ('dive_splash', e('th_meat', 0.15), -8), ('dive_splash', e('th_meat', 0.5), -8), ('dive_splash', e('th_meat', 0.85), -8), ('fish_swoosh', e('th_fish', 0.15), -8), ('fish_swoosh', e('th_fish', 0.45), -10), ('dive_splash', e('th_gag'), -2),
        # ГДР: трабант, вывеска, миски, официантка
        ('trabant_pass', S0['gdr'] - 0.3, -2), ('electric_zap', e('gd_gdr'), -16), ('trabant_pass', e('gd_gdr', 0.1), -10), ('tiny_tuk', e('gd_each'), -6), ('tiny_tuk', e('gd_each', 0.25), -6), ('tiny_tuk', e('gd_each', 0.5), -6), ('spoon_clink', e('gd_rest'), -6),
        # ★ имя: губка, карточка, стрелка, буквы облетают, соль, «Е→О»
        ('poof_cloth', S0['name'] - 0.2, -6), ('paper_whoosh', e('nm_ling'), -6), ('pencil_scribble', e('nm_sel'), -8), ('dust_whoosh', e('nm_forgot'), -6), ('salt_shake', e('nm_salt'), 0), ('medal_fanfare', e('nm_salt', 0.3), -6),
        # сегодня: крышка, три лампы, вопрос
        ('jar_lid', S0['today'] - 0.1, -6), ('electric_zap', e('tdy_meat'), -18), ('quiz_ding', e('tdy_meat'), -10), ('quiz_ding', e('tdy_fish'), -10), ('quiz_ding', e('tdy_mush'), -10), ('teleport_pop', e('tdy_q', 0.8), -10),
        # кнопка: хлебок, подмигивание — без мяу
        ('whip_whoosh', S0['button'] - 0.15, -8), ('soup_slurp', e('bt_wink', -0.3), -4),
    ]
    beds = [('kitchen_loop', 0, S1['hook']), ('campfire_loop', S0['stew'], S1['stew']), ('feast_loop', S0['hangover'], S1['hangover']), ('pot_boil', S0['soup'], S1['soup']),
            ('restaurant_loop', S0['tavern'], S1['tavern']), ('pot_boil', S0['three'], S1['three']), ('restaurant_loop', S0['gdr'], S1['gdr']), ('forest_loop', S0['name'], S1['name']),
            ('kitchen_loop', S0['today'], S1['today']), ('kitchen_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # тест v1: музыка без затухания на стыке, мастер −14 LUFS
