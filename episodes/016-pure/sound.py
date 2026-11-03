"""Звук 016 — Пюре (правила v1): SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец).
Новые: snore_zzz, crickets_loop (очень высокий — только тихо), press_thunk, mash_squish."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: солдаты «на караул», вор из-за забора, пар над пюре, ложка
        ('drum_march', 0.0, -12), ('stamp_thud', e('hk_guard', 0.6), -10), ('bag_crinkle', e('hk_steal'), -6), ('quiz_buzz', e('hk_steal', 0.3), -18), ('steam_hiss', e('hk_pure'), -12), ('mash_squish', e('hk_grab'), 0), ('soup_slurp', e('hk_bite'), -4),
        # инки: иней, сморщивание, раскоп, счётчик
        ('wind_gust', S0['inca'] - 0.2, -8), ('freeze_crackle', e('in_frost'), -8), ('shimmer', e('in_chu'), -10), ('chisel_strike', e('in_found'), -10), ('clock_tick_heavy', e('in_500'), -10), ('quiz_ding', e('in_500', 0.6), -10),
        # рынок: кожура-переход, куст, табличка, сито, ценник
        ('knife_tuk', S0['name'] - 0.2, -8), ('teleport_pop', e('nm_earth'), -10), ('quiz_ding', e('nm_apple'), -10), ('grater_scrape', e('nm_pure'), -14), ('mash_squish', e('nm_pure', 0.4), -4), ('knife_tuk', e('nm_rub'), -6),
        # Ханна Гласс: страница, молоко, масло, пресс, штамп
        ('paper_whoosh', S0['glasse'] - 0.2, -6), ('pour_oil', e('gl_milk'), -6), ('drip_plop', e('gl_butter', 0.3), -4), ('press_thunk', e('gl_print'), -2), ('paper_whoosh', e('gl_print', 0.5), -8), ('stamp_thud', e('gl_year'), -4),
        # Пруссия: метель, табличка, решётка, флаг, картошка, «нюх»
        ('wind_gust', S0['prussia'] - 0.2, -6), ('knife_tuk', e('pr_name'), -8), ('rivets_steel', e('pr_cap'), -6), ('sail_flap', e('pr_prus'), -8), ('steam_hiss', e('pr_ate'), -10), ('jaw_chomp', e('pr_ate', 0.3), -6), ('dino_snort', e('pr_gag'), -16),
        # академия: портьеры, колокольчик, медаль, аплодисменты, свиток, карта
        ('cloth_rip', S0['prize'] - 0.2, -16), ('handbell', e('pz_win'), -8), ('medal_fanfare', e('pz_win', 0.2), -8), ('crowd_cheer', e('pz_win', 0.3), -12), ('scroll_unroll', e('pz_acad'), -8), ('pebbles_pour', e('pz_fr', 0.2), -10),
        # Том-малыш в кастрюле: воронка, лопатка, табло, кубы масла, таяние, «сноуборд»
        ('vortex_suck', S0['robuchon'] - 0.3, -10), ('fork_squish', e('rb_chef'), -6), ('quiz_ding', e('rb_kg'), -10), ('boulder_drop', e('rb_q', 0.3), -8), ('boulder_drop', e('rb_q', 0.55), -10), ('sizzle_loop', e('rb_melt'), -14), ('ice_slide', e('rb_gag'), -6),
        # ★ легенда: книга, рамка, солнце→ночь, храп, фонари и мешки
        ('paper_whoosh', S0['legend'] - 0.2, -6), ('shimmer', e('lg_leg'), -6), ('stamp_thud', e('lg_day'), -10), ('time_zoom', e('lg_night', -0.2), -12), ('snore_zzz', e('lg_night', 0.4), -6), ('crickets_loop', e('lg_night', 0.3), -22), ('bag_crinkle', e('lg_steal'), -6), ('bag_crinkle', e('lg_steal', 0.4), -8), ('medal_fanfare', e('lg_par', 0.5), -6),
        # сегодня: решётка-толкушка, лампа, табло, миски
        ('mash_squish', S0['today'] - 0.15, -4), ('electric_zap', e('td_now'), -18), ('cash_register', e('td_383', 0.9), -10), ('paper_whoosh', e('td_year'), -12), ('quiz_ding', e('td_lump'), -10), ('quiz_ding', e('td_smooth'), -10),
        # кнопка: толкушка, подмигивание — без мяу, петля в хук
        ('whip_whoosh', S0['button'] - 0.15, -8), ('mash_squish', e('bt_wink', -0.4), -2),
    ]
    beds = [('forest_loop', 0, S1['hook']), ('blizzard_loop', S0['inca'], S1['inca']), ('bazaar_loop', S0['name'], S1['name']), ('campfire_loop', S0['glasse'], S1['glasse']),
            ('blizzard_loop', S0['prussia'], S1['prussia']), ('restaurant_loop', S0['prize'], S1['prize']), ('pot_boil', S0['robuchon'], S1['robuchon']), ('forest_loop', S0['legend'], S1['legend']),
            ('kitchen_loop', S0['today'], S1['today']), ('forest_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # тест v1: музыка без затухания на стыке, мастер −14 LUFS
