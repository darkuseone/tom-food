"""Звук 011 — Яблочный штрудель (правила v1): SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец). Новые: film_projector, dough_stretch, honey_pour."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: кафе, «Самозванец!» — удар, «венский?» — ценник, призрак в зеркале, вилка, хруст корочки
        ('whip_whoosh', 0.0, -4), ('record_scratch', e('hk_imp'), -12), ('knife_tuk', e('hk_vien'), -6), ('spoon_clink', e('hk_vien', 0.4), -12), ('shimmer', e('hk_ghost'), -6), ('fork_squish', e('hk_grab', 0.3), -8), ('crunch_crouton', e('hk_bite'), 3), ('apple_crunch', e('hk_bite', 0.08), -2),
        # 1965: плёнка-переход, прожекторы, указатель, корзина, аплодисменты
        ('film_projector', S0['film'] - 0.25, -10), ('electric_zap', e('fm_on'), -16), ('shimmer', e('fm_on', 0.05), -10), ('wood_bonk', e('fm_aut'), -6), ('crunch_crouton', e('fm_crisp'), -4), ('crowd_cheer', e('fm_clap'), -12),
        # двор: сито с пудрой, портрет сияет, реверанс, яблоки катятся
        ('dust_whoosh', S0['court'] - 0.2, -6), ('shimmer', e('ct_emp'), -6), ('handbell', e('ct_mt'), -16), ('boulder_roll', e('ct_app', -0.1), -14), ('wood_bonk', e('ct_app', 0.2), -10), ('wood_bonk', e('ct_app', 0.4), -12), ('knife_tuk', e('ct_app', 0.25), -6),
        # архив: клякса, книга раскрывается, дата, штамп «БЕЗ ЯБЛОК», молоко
        ('ink_splat', S0['archive'] - 0.15, -4), ('scroll_unroll', e('ar_rec', -0.2), -8), ('pencil_scribble', e('ar_year'), -8), ('stamp_thud', e('ar_no', 0.05), 0), ('record_scratch', e('ar_no', 0.1), -10), ('pour_oil', e('ar_milk', 0.4), -10),
        # тесто: растяжение, письмо, сердечки, хихиканье на паузе
        ('poof_cloth', S0['dough'] - 0.2, -4), ('dough_stretch', e('dg_cloth'), 10), ('dough_stretch', e('dg_thin'), 8), ('paper_whoosh', e('dg_thru'), -8), ('shimmer', e('dg_love'), -6), ('quiz_ding', e('dg_gag'), -12), ('pillow_poof', e('dg_gag', 0.2), -10),
        # Том-малыш в срезе: вихрь, нож, коричная метель, вилка сверху
        ('vortex_suck', S0['whirl'] - 0.25, -6), ('boulder_roll', S0['whirl'] + 0.3, -12), ('time_zoom', e('wh_whirl'), -10), ('whip_whoosh', e('wh_cut'), -4), ('knife_chop', e('wh_cut', 0.25), -4), ('dust_whoosh', e('wh_vortex'), -6), ('fork_squish', e('wh_fork', 0.3), -4),
        # Буда: полотенце, тесто, янычар, лента лет
        ('cloth_rip', S0['buda'] - 0.2, -10), ('knife_tuk', e('bd_hun'), -6), ('door_swing', e('bd_ott', -0.3), -6), ('crowd_ooh', e('bd_ott', 0.1), -12), ('clock_tick_heavy', e('bd_cent'), -10), ('quiz_ding', e('bd_cent', 0.8), -10),
        # Стамбул ★: изразец, лучи, «баклава!», слои, орехи, мёд
        ('whip_whoosh', S0['istanbul'] - 0.15, -6), ('medal_fanfare', e('is_gg'), -8), ('shimmer', e('is_gg', 0.1), -6), ('knife_tuk', e('is_bk'), -2), ('crowd_cheer', e('is_bk', 0.1), -14), ('paper_whoosh', e('is_lay'), -10), ('salt_shake', e('is_nut'), -6), ('honey_pour', e('is_hon', 0.2), -2),
        # сегодня: лента штруделей, толпа, рулетка, табло-рекорд, тарелки
        ('whip_whoosh', S0['today'] - 0.2, -6), ('crowd_cheer', e('td_hr'), -14), ('tape_measure', e('td_km', -0.4), -6), ('fireworks', e('td_km', 0.05), -12), ('quiz_ding', e('td_km'), -8), ('plate_spin', e('td_sauce'), -12), ('teleport_pop', e('td_sauce', 0.1), -10), ('plate_spin', e('td_ice'), -12), ('teleport_pop', e('td_ice', 0.1), -10),
        # кнопка: вилка, подмигивание — без мяу, ролик перетекает в хук
        ('whip_whoosh', S0['button'] - 0.15, -8), ('fork_squish', e('bt_wink', -0.2), -8), ('tiny_tuk', e('bt_wink'), -6),
    ]
    beds = [('restaurant_loop', 0, S1['hook']), ('crowd_cheer', S0['film'] + 4.3, S1['film']), ('feast_loop', S0['court'], S1['court']), ('cave_drip_loop', S0['archive'], S1['archive']),
            ('kitchen_loop', S0['dough'], S1['dough']), ('sizzle_loop', S0['whirl'], S1['whirl']), ('campfire_loop', S0['buda'], S1['buda']), ('bazaar_loop', S0['istanbul'], S1['istanbul']),
            ('feast_loop', S0['today'], S1['today']), ('restaurant_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # тест v1: музыка без затухания на стыке, мастер −14 LUFS
