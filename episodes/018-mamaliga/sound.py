"""Звук 018 — Мамалыга (правила v1 + плашка ПОДПИШИСЬ). SFX: (файл, время, дБ). BEDS: (луп, начало, конец). Новые (018): mamaliga_plop, thread_slice, porridge_blup, corn_husk."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: свиток НАЛОГ шлёпается, дыра-лазейка, початок, каша булькает, «?», отломить кусок, укус
        ('scroll_unroll', e('hk_tax', -0.1), -8), ('stamp_thud', e('hk_tax', 0.2), -6), ('cloth_rip', e('hk_hole'), -8), ('corn_husk', e('hk_hole', 0.15), -6), ('porridge_blup', e('hk_cook'), -6), ('steam_hiss', e('hk_cook', 0.1), -14),
        ('quiz_buzz', e('hk_q'), -18), ('bread_tear', e('hk_grab'), -8), ('fork_squish', e('hk_grab', 0.3), -10), ('crunch_crouton', e('hk_bite'), -7), ('jaw_chomp', e('hk_bite', 0.05), -5),
        # Рим: водоворот каши, купол сереет, крест, мешок рвётся, зёрна, ценник
        ('vortex_suck', S0['millet'] - 0.25, -10), ('dust_whoosh', e('ml_grey'), -10), ('pencil_scribble', e('ml_grey', 0.3), -6), ('cloth_rip', e('ml_millet'), -8), ('pebbles_pour', e('ml_millet', 0.1), -8), ('knife_tuk', e('ml_pul'), -8), ('goblet_clink', e('ml_pul', 0.2), -10), ('crowd_cheer', e('ml_pul', 0.2), -18),
        # Колумб: парус, вымпел, корабельный колокол, карта, сундук, сияние
        ('sail_flap', S0['columbus'] - 0.2, -6), ('whip_whoosh', e('cl_year'), -12), ('ship_bell', e('cl_col'), -10), ('scroll_unroll', e('cl_am'), -10), ('wood_bonk', e('cl_corn'), -6), ('shimmer', e('cl_corn', 0.05), -8), ('corn_husk', e('cl_corn', 0.2), -8),
        # Молдавия: стебли-шторы, табличка, кукуруза растёт, аисты, господарь, труба
        ('corn_husk', S0['moldavia'] - 0.2, -6), ('wood_bonk', e('md_year'), -10), ('time_zoom', e('md_grow'), -14), ('corn_husk', e('md_grow', 0.4), -8), ('bird_flutter', e('md_mold'), -12), ('drum_march', e('md_gosp'), -14), ('oompah_horn', e('md_duka'), -10), ('crowd_ooh', e('md_duka', 0.2), -16),
        # Том-малыш на мамалыге: чугунок переворачивается, купол шлёпается, доска, нитка, нож, липнет, «вжух» в шаге от Тома
        ('whip_whoosh', S0['thread'] - 0.25, -10), ('mamaliga_plop', e('th_drop', 0.2), -5), ('jelly_wobble', e('th_drop', 0.4), -10), ('wood_bonk', e('th_board'), -10), ('whip_whoosh', e('th_thread'), -14), ('knife_chop', e('th_knife', 0.1), -8), ('dough_stretch', e('th_stick'), -6), ('fork_squish', e('th_stick', 0.3), -8),
        ('thread_slice', e('th_gag', 0.05), -5), ('mamaliga_plop', e('th_gag', 0.3), -12), ('quiz_ding', e('th_gag', 0.45), -14),
        # «Дракула»: молния, книга, мамалыга на вилке, кукушка, гром, коляска, летучая мышь
        ('thunder_crack', S0['dracula'] - 0.1, -10), ('paper_whoosh', e('dr_book'), -10), ('fork_squish', e('dr_mm'), -10), ('handbell', e('dr_bf'), -16), ('thunder_crack', e('dr_hero'), -6), ('crowd_ooh', e('dr_hero', 0.2), -16), ('whip_whoosh', e('dr_count'), -14), ('bird_flutter', e('dr_gag'), -7), ('record_scratch', e('dr_gag', 0.3), -14),
        # пеллагра: лампа гаснет, злой початок, воспоминание, крест, штамп, человечки
        ('fire_flare', S0['pellagra'] - 0.1, -14), ('electric_zap', e('pg_rev'), -12), ('earthquake_rumble', e('pg_rev'), -16), ('shimmer', e('pg_lime'), -12), ('pot_boil', e('pg_lime', 0.2), -14), ('pencil_scribble', e('pg_name', -0.1), -8), ('stamp_thud', e('pg_name'), -7), ('typewriter', e('pg_tens'), -12), ('quiz_buzz', e('pg_year'), -14),
        # ★ разгадка: монеты, вспышка, тугра, мешок на весы, початок, «0», обоз, «кашу — себе!»
        ('coins_pouch', S0['sultan'] - 0.25, -8), ('shimmer', e('su_ans'), -5), ('medal_fanfare', e('su_ans', 0.1), -12), ('stamp_thud', e('su_sultan'), -6), ('weight_slam', e('su_wheat', 0.1), -9), ('coin_ring', e('su_wheat', 0.3), -10), ('corn_husk', e('su_corn', 0.2), -8),
        ('quiz_buzz', e('su_zero'), -12), ('camel_grunt', e('su_go'), -10), ('porridge_blup', e('su_self'), -8), ('crowd_cheer', e('su_self', 0.1), -16),
        # сегодня: нитка режет кадр, гирлянда, счётчик, гора початков, мамалыга режется, брынза, шкварки шкварчат
        ('thread_slice', S0['today'] - 0.15, -6), ('electric_zap', e('td_now'), -18), ('cash_register', e('td_bil'), -10), ('pebbles_pour', e('td_ton'), -8), ('thread_slice', e('td_mm', 0.1), -6), ('knife_tuk', e('td_br'), -8), ('deep_fry', e('td_sh'), -6),
        # кнопка: нитка режет купол, подмигивание, плашка ПОДПИШИСЬ — без мяу, петля в хук
        ('whip_whoosh', S0['button'] - 0.15, -10), ('thread_slice', e('bt_cut', 0.1), -7), ('teleport_pop', DUR - 1.6, -10),
    ]
    beds = [('campfire_loop', 0, S1['hook']), ('campfire_loop', S0['millet'], S1['millet']), ('ship_creak_loop', S0['columbus'], S1['columbus']), ('forest_loop', S0['moldavia'], S1['moldavia']),
            ('kitchen_loop', S0['thread'], S1['thread']), ('restaurant_loop', S0['dracula'], S1['dracula']), ('cave_drip_loop', S0['pellagra'], S1['pellagra']), ('bazaar_loop', S0['sultan'], S1['sultan']),
            ('crickets_loop', S0['today'], S1['today']), ('campfire_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # петля в хук; ПОДПИШИСЬ — ENDCARD = true
