"""Звук 009 — Хачапури (тест v1): SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец). Новые: bread_tear, sheep_baa, seagulls, drip_plop."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: мел по доске, хачапури на графике, студенты ахают, бортик рвётся и хрустит
        ('pencil_scribble', 0.0, -6), ('pencil_scribble', e('hk_infl'), -6), ('teleport_pop', e('hk_kh'), -8), ('crowd_ooh', e('hk_kh', 0.05), -10), ('bread_tear', e('hk_tear'), 4), ('crunch_crouton', e('hk_bite'), -2), ('nugget_bite', e('hk_bite', 0.05), -4),
        # имя: сырные нити, вывески, хлопок муки
        ('fork_squish', S0['name'] - 0.15, 2), ('wood_bonk', e('nm_cheese'), -8), ('wood_bonk', e('nm_bread'), -8), ('pillow_poof', e('nm_join', 0.25), -4), ('shimmer', e('nm_join', 0.35), -12),
        # пастухи: пар, овцы, мешок муки, сыр из котла
        ('poof_cloth', S0['shepherd'] - 0.2, -8), ('sheep_baa', e('sh_herd', 0.2), -10), ('pillow_poof', e('sh_flour'), -6), ('pot_boil', e('sh_cheese', -0.3), -14), ('shimmer', e('sh_cheese', 0.2), -12),
        # формы: дверца печи, табличка, пирог, шлепок сыра
        ('fire_flare', S0['shapes'] - 0.15, -10), ('wood_bonk', e('sp_no'), -6), ('quiz_buzz', e('sp_no', 0.35), -12), ('teleport_pop', e('sp_im'), -8), ('teleport_pop', e('sp_meg'), -8), ('ink_splat', e('sp_top', 0.22), -2), ('fork_squish', e('sp_top', 0.24), 2),
        # лодка (Том-малыш): сырная волна, восход желтка, чайки, масло-айсберг
        ('dive_splash', S0['boat'] - 0.15, -6), ('shimmer', e('bt_yolk'), -6), ('medal_fanfare', e('bt_yolk', 0.2), -16), ('dive_splash', e('bt_butter', 1.2), -12),
        # едят: рвут бортик, мешают, капля
        ('cloth_rip', S0['eat'] - 0.1, -8), ('bread_tear', e('et_tear'), 4), ('fork_squish', e('et_mix'), 0), ('fork_squish', e('et_mix', 0.5), -2), ('drip_plop', e('et_drop', 0.3), 6), ('record_scratch', e('et_drop', 0.35), -16),
        # наследие: печать, аплодисменты, календарь, конфетти
        ('stamp_thud', S0['heritage'] - 0.05, -2), ('stamp_thud', e('hr_stamp'), 0), ('crowd_cheer', e('hr_stamp', 0.2), -12), ('paper_whoosh', e('hr_feb'), -6), ('fireworks', e('hr_party'), -12), ('crowd_cheer', e('hr_party', 0.1), -8),
        # индекс: монеты, мел, мука, сыр, яйца, вспышка
        ('coins_pouch', S0['index'] - 0.15, -4), ('pencil_scribble', e('ix_sum'), -6), ('pillow_poof', e('ix_flour'), -8), ('wood_bonk', e('ix_cheese'), -8), ('tiny_tuk', e('ix_eggs'), -4), ('tiny_tuk', e('ix_eggs', 0.1), -4), ('tiny_tuk', e('ix_eggs', 0.2), -4),
        ('shimmer', e('ix_pie'), -4), ('cash_register', e('ix_pie', 0.1), -6), ('coin_ring', e('ix_pie', 0.3), -10),
        # сегодня: воронка желтка, ценники, ×2, выбор
        ('vortex_suck', S0['today'] - 0.2, -10), ('knife_tuk', e('td_y'), -4), ('pencil_scribble', e('td_x2'), -8), ('cash_register', e('td_x2', 0.15), -6), ('quiz_ding', e('td_x2', 0.35), -8), ('teleport_pop', e('td_boat'), -8), ('teleport_pop', e('td_round'), -8),
        # кнопка: бортик и подмигивание — без мяу, ролик перетекает в хук
        ('bread_tear', e('bt_wink', -0.4), 2), ('crunch_crouton', e('bt_wink'), -6),
    ]
    beds = [('restaurant_loop', 0, S1['hook']), ('kitchen_loop', S0['name'], S1['name']), ('forest_loop', S0['shepherd'], S1['shepherd']), ('bazaar_loop', S0['shapes'], S1['shapes']),
            ('seagulls', S0['boat'], S1['boat']), ('harbor_loop', S0['eat'], S1['eat']), ('feast_loop', S0['heritage'], S1['heritage']), ('restaurant_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # тест v1: музыка без затухания на стыке, мастер −14 LUFS
