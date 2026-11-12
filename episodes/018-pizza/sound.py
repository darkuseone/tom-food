"""Звук 018 — Пицца Маргарита (детектив-разоблачение). SFX: (файл, время, дБ). BEDS: (луп, начало, конец).
Новые (018): mandolin_sting (подпись выпуска — неаполитанская мандолина: первый звук, вопросы, раскрытия), oven_roar, dough_slap, cheese_pull."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: мандолина, письмо, зал, штамп «фальшивка», хватает кусок, укус + сыр тянется
        ('mandolin_sting', 0.0, -8), ('paper_whoosh', e('hk_letter', 0.3), -14), ('crowd_ooh', e('hk_fake', 0.15), -14), ('stamp_thud', e('hk_fake'), -4), ('cheese_pull', e('hk_grab'), -10), ('crunch_crouton', e('hk_bite'), -1), ('cheese_pull', e('hk_bite', 0.15), -6),
        # дворец 1889: рама-окно, лента LEGENDA, лорнет, поклон и пиццы, флаг, табличка, аплодисменты
        ('shimmer', S0['palace'] - 0.2, -10), ('whip_whoosh', e('pl_leg'), -12), ('goblet_clink', e('pl_queen'), -12), ('plate_spin', e('pl_esp'), -10), ('cloth_rip', e('pl_flag'), -14), ('medal_fanfare', e('pl_flag', 0.1), -14), ('knife_tuk', e('pl_name'), -8), ('crowd_cheer', e('pl_name', 0.2), -16),
        # Гаэта 997: свиток, чайки, пергамент, стопка лепёшек, епископ, счёт I–XII, печать, курица
        ('scroll_unroll', S0['rent'] - 0.2, -8), ('seagulls', S0['rent'] + 0.3, -16), ('quiz_buzz', e('rn_old'), -18), ('scroll_unroll', e('rn_year'), -10), ('dough_slap', e('rn_pay'), 6), ('coins_pouch', e('rn_bishop'), -12), ('tiny_tuk', e('rn_rent'), -10), ('tiny_tuk', e('rn_rent', 0.4), -10), ('tiny_tuk', e('rn_rent', 0.8), -10), ('stamp_thud', e('rn_rent', 0.25), -8), ('chicken_cluck', e('rn_rent', 0.1), -10),
        # улица 1831: простыня, монеты, лоток, Морзе (мандолина-вопрос), точки-тире, «фу», пауза-гэг
        ('poof_cloth', S0['street'] - 0.2, -8), ('coin_ring', e('st_poor'), -12), ('wood_bonk', e('st_tray'), -8), ('mandolin_sting', e('st_morse'), -14), ('typewriter', e('st_abc'), -12), ('cough_gag', e('st_yuck'), -8), ('jaw_chomp', e('st_gag'), -6), ('record_scratch', e('st_gag', 0.4), -12),
        # газеты 1889: газета-волчок, мысль, бирка, газеты веером, сверчки
        ('paper_whoosh', S0['news'] - 0.2, -6), ('quiz_ding', e('nw_q'), -12), ('knife_tuk', e('nw_clue'), -8), ('paper_whoosh', e('nw_papers'), -8), ('paper_whoosh', e('nw_papers', 0.15), -10),
        # архив: лупа, письмо, выделение «Бранди», вывеска на цепях, календарь листается, штамп +40
        ('whip_whoosh', S0['letter'] - 0.2, -10), ('paper_whoosh', e('lt_in'), -12), ('pencil_scribble', e('lt_brandi'), -8), ('shimmer', e('lt_brandi', 0.1), -14), ('door_swing', e('lt_sign'), -12), ('rewind', e('lt_forty', -0.3), -14), ('stamp_thud', e('lt_forty', 0.5), -6),
        # Том-малыш на пицце: тесто подбросили, бирка, шлёп по соусу, батут моцареллы, лист базилика, лента лет, пузырь-«ПУФ»
        ('dough_slap', S0['pizza'] - 0.2, 6), ('knife_tuk', e('pz_clue'), -8), ('drip_plop', e('pz_tom'), -8), ('jelly_wobble', e('pz_mozz'), -8), ('lettuce_crunch', e('pz_basil'), -10), ('quiz_ding', e('pz_years', 0.6), -12), ('bubbles_burst', e('pz_gag'), -10), ('pillow_poof', e('pz_pop'), -4), ('cheese_pull', e('pz_pop', 0.3), -10),
        # ★ разгадка 1930-х: печатный вал, прожектор, историки, перо, календарь, вспышка, плакат, штамп ЛЕГЕНДА
        ('press_thunk', S0['verdict'] - 0.15, -6), ('mandolin_sting', e('vd_key'), -10), ('shimmer', e('vd_key', 0.1), -12), ('paper_whoosh', e('vd_hist'), -14), ('pencil_scribble', e('vd_write'), -10), ('quiz_ding', e('vd_30', 0.6), -14), ('camera_flash', e('vd_flash'), -6), ('paper_whoosh', e('vd_flash', 0.2), -10), ('stamp_thud', e('vd_stamp'), -2),
        # сегодня: пламя-переход, печь вспыхивает, таймер, пицца из печи, вопрос А/Б
        ('fire_flare', S0['today'] - 0.25, -10), ('oven_roar', e('td_bake'), -10), ('clock_tick_heavy', e('td_90'), -14), ('cheese_pull', e('td_out'), -10), ('steam_hiss', e('td_out', 0.2), -16), ('quiz_ding', e('td_ab'), -10), ('quiz_ding', e('td_ab', 0.35), -10),
        # кнопка: подмигивание, плашка ПОДПИШИСЬ; финал без мяу — петля в хук (мандолина хука звучит на повторе)
        ('whip_whoosh', S0['button'] - 0.15, -10), ('teleport_pop', e('bt_wink'), -12), ('teleport_pop', DUR - 1.6, -12),
    ]
    beds = [('restaurant_loop', 0, S1['hook']), ('feast_loop', S0['palace'], S1['palace']), ('harbor_loop', S0['rent'], S1['rent']), ('bazaar_loop', S0['street'], S1['street']),
            ('city_loop', S0['news'], S1['news']), ('crickets_loop', E['nw_silent'], S1['news']), ('cabin_loop', S0['letter'], S1['letter']), ('sizzle_loop', S0['pizza'], S1['pizza']),
            ('factory_loop', S0['verdict'], S1['verdict']), ('kitchen_loop', S0['today'], S1['today']), ('restaurant_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # петля в хук; ПОДПИШИСЬ — ENDCARD = true
