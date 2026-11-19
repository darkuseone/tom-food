"""Звук 025 — Цеппелины. SFX: (файл, время, дБ). BEDS: (луп, начало, конец).
Новые (025): kankles_sting (подпись выпуска — литовские канклес: первый звук, вопрос, разгадка), airship_drone, dumpling_plop, potato_grate."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: канклес, гул дирижабля над крыльцом, штамп, пике, облако, шмяк в тарелку, вилка, сыр-пар
        ('kankles_sting', 0.0, -6), ('airship_drone', 0.2, -10), ('airship_drone', 2.4, -12), ('stamp_thud', e('hk_ger'), -6), ('whip_whoosh', e('hk_land'), -8), ('pillow_poof', e('hk_land', 0.2), -8), ('dumpling_plop', e('hk_land', 0.55), -2), ('crowd_ooh', e('hk_land', 0.8), -16), ('quiz_ding', e('hk_q'), -14), ('fork_squish', e('hk_bite'), -2), ('steam_hiss', e('hk_bite', 0.2), -18),
        # Боденское озеро: винт-переход, клёцка на подносе, рулетка, граф, дирижабль выходит
        ('whip_whoosh', S0['airship'] - 0.25, -8), ('seagulls', S0['airship'] + 0.3, -18), ('dumpling_plop', e('as_cep'), -8), ('tape_measure', e('as_30'), -6), ('knife_tuk', e('as_30', 0.5), -8), ('crowd_cheer', e('as_count', 0.1), -18), ('airship_drone', e('as_ships', -0.3), -10), ('crowd_ooh', e('as_ships', 0.2), -14),
        # языковеды и Польша: страница словаря перелистывается (19.11.2026), перечёркивание, самолётик, пушка-клёцки, пирамида, ловит
        ('paper_whoosh', S0['names'] - 0.25, -6), ('pencil_scribble', e('nm_frown'), -8), ('quiz_ding', e('nm_big'), -12), ('paper_whoosh', e('nm_air'), -12), ('whip_whoosh', e('nm_pl'), -12), ('cannon_boom', e('nm_bang'), -6), ('dumpling_plop', e('nm_bang', 0.5), -10), ('wood_bonk', e('nm_ars'), -10), ('dumpling_plop', e('nm_gag'), -4), ('record_scratch', e('nm_gag', 0.25), -16),
        # кухня: тёрка-переход, схема, тёрка, марля, крахмал, «обратно»
        ('grater_scrape', S0['kitchen'] - 0.2, -8), ('typewriter', e('kt_eng'), -16), ('potato_grate', e('kt_grate'), 8), ('potato_grate', e('kt_grate', 1.2), 8), ('drip_plop', e('kt_squeeze'), -8), ('pour_oil', e('kt_squeeze', 0.3), -14), ('quiz_ding', e('kt_starch'), -14), ('shimmer', e('kt_back'), -14),
        # Том-малыш внутри: нож-переход, мясо, творог-батут, грибы, шкварки-метеориты, сметанный водопад, «бум»
        ('knife_chop', S0['inside'] - 0.2, -6), ('fork_squish', e('in_meat'), -10), ('jelly_wobble', e('in_curd'), -8), ('wood_bonk', e('in_mush'), -16), ('fry_crunch', e('in_spirg'), -6), ('boulder_drop', e('in_spirg', 0.4), -14), ('honey_pour', e('in_light'), -8), ('boulder_drop', e('in_gag', 0.3), -8), ('teleport_pop', e('in_gag', 0.6), -12),
        # библиотека: страница-переход, книга, листание, «НЕТ!», моль
        ('paper_whoosh', S0['book'] - 0.2, -6), ('wood_bonk', e('bk_trap'), -12), ('paper_whoosh', e('bk_flip'), -10), ('paper_whoosh', e('bk_flip', 0.35), -12), ('stamp_thud', e('bk_none'), -4), ('bird_flutter', e('bk_none', 0.3), -16),
        # столовая: двери-переход, книжка 30-х, очередь, черпак, счётчик
        ('door_swing', S0['canteen'] - 0.2, -8), ('scroll_unroll', e('cn_first'), -12), ('quiz_ding', e('cn_30'), -14), ('crowd_cheer', e('cn_ppl'), -20), ('spoon_clink', e('cn_cant'), -10), ('cash_register', e('cn_cant', 0.4), -14),
        # ★ разгадка: карта-переход, вспышка, канклес, Пруссия, Klöße, перелёт, «1900-е»
        ('scroll_unroll', S0['prussia'] - 0.2, -8), ('shimmer', e('pr_key'), -6), ('kankles_sting', e('pr_key', 0.1), -10), ('quiz_ding', e('pr_prus'), -12), ('airship_drone', e('pr_prus', 0.2), -16), ('plate_spin', e('pr_ger'), -12), ('medal_fanfare', e('pr_cent', 0.3), -12),
        # сегодня: дирижабль-переход, баннер, хлопушки, плашка, вилка в мясо и творог, выбор
        ('airship_drone', S0['today'] - 0.3, -10), ('cloth_rip', e('td_day'), -14), ('fireworks', e('td_day', 0.1), -14), ('crowd_cheer', e('td_day', 0.2), -18), ('quiz_ding', e('td_2014'), -12), ('fork_squish', e('td_meat'), -8), ('fork_squish', e('td_curd'), -8), ('quiz_ding', e('td_curd', 0.3), -12),
        # кнопка: подмигивание, плашка ПОДПИШИСЬ поверх — без склейки, петля в хук (канклес хука звучит на повторе)
        ('teleport_pop', e('bt_wink'), -12), ('teleport_pop', DUR - 2.4, -14),
    ]
    beds = [('city_loop', 0, S1['hook']), ('harbor_loop', S0['airship'], S1['airship']), ('cabin_loop', S0['names'], S1['names']), ('campfire_loop', S0['kitchen'], S1['kitchen']),
            ('sizzle_loop', S0['inside'], S1['inside']), ('cabin_loop', S0['book'], S1['book']), ('factory_loop', S0['canteen'], S1['canteen']), ('kitchen_loop', S0['prussia'], S1['prussia']),
            ('feast_loop', S0['today'], S1['today']), ('feast_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)
