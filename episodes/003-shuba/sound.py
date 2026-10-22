"""Звук 003 — Селёдка под шубой: SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец)."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: новогодний стол, буквы-лозунг, вилка в шубу
        ('sleigh_bells', 0.0, -2), ('whip_whoosh', 0.05, -4), ('stamp_thud', 0.1, -6), ('stamp_thud', 0.2, -8), ('stamp_thud', 0.3, -8), ('stamp_thud', 0.4, -8), ('record_scratch', e('hk_slogan'), -6),
        ('fork_squish', e('hk_dig'), 14), ('fork_squish', e('hk_bite'), 16), ('crunch_crouton', e('hk_bite', 0.05), -6),
        # трактир 1918
        ('fork_squish', S0['tavern'] - 0.1, 10), ('whip_whoosh', S0['tavern'], -6), ('knife_tuk', e('tv_leg', 0.1), 0), ('tavern_brawl', e('tv_argue'), -16), ('tavern_brawl', e('tv_fight', -0.1), -12), ('table_crash', e('tv_fight', 0.5), -6), ('poof_cloth', e('tv_fight', 0.3), -10),
        # ШУБА-транспарант
        ('pour_oil', S0['acronym'] - 0.15, -4), ('door_swing', e('ac_boss'), -6), ('goblet_clink', e('ac_serve'), -4), ('cloth_rip', e('ac_serve', 0.1), -10), ('scroll_unroll', e('ac_serve', 0.15), -4),
        ('stamp_thud', E['ac_serve'] + 0.9, -6), ('knife_tuk', e('ac_serve', 1.0), 0),
        # агитка
        ('scroll_unroll', S0['symbols'] - 0.15, -2), ('drum_march', e('sy_fish'), -12), ('whip_whoosh', e('sy_pot'), -6), ('cloth_rip', e('sy_beet'), -12), ('wind_gust', e('sy_beet', 0.1), -12), ('record_scratch', e('sy_q'), -8),
        # архив
        ('rock_knock', S0['debunk'] - 0.1, -6), ('wood_bonk', e('db_no', 0.1), -2), ('poof_cloth', e('db_no', 0.2), -8), ('stamp_thud', e('db_trak'), 0), ('stamp_thud', e('db_bog'), 0), ('cloth_rip', e('db_tear'), 0), ('paper_whoosh', e('db_tear', 0.2), -4),
        # Англия 1845
        ('paper_whoosh', S0['norway'] - 0.1, -2), ('shimmer', S0['norway'] + 0.4, -10), ('pencil_scribble', e('nw_eng'), -8), ('ship_bell', e('nw_nor'), -10), ('fish_swoosh', e('nw_f'), -4), ('tiny_tuk', e('nw_b'), -2), ('tiny_tuk', e('nw_p'), -2), ('knife_tuk', e('nw_p', 0.1), 0),
        # спальня
        ('pillow_poof', S0['names'] - 0.05, 4), ('poof_cloth', S0['names'] + 0.1, -6), ('shimmer', e('nm_pl'), -10), ('knife_tuk', e('nm_per'), -2), ('pillow_poof', e('nm_lt'), -2), ('knife_tuk', e('nm_bed'), -2), ('cat_meow', e('nm_bed', 0.5), -14),
        # кухня 60-х
        ('freeze_crackle', S0['ussr'] - 0.2, -8), ('grater_scrape', S0['ussr'] + 0.6, -6), ('grater_scrape', e('us_60', 0.4), -6), ('knife_tuk', e('us_born'), 0), ('poof_cloth', e('us_dress'), -6), ('shimmer', e('us_dress', 0.3), -6), ('knife_tuk', e('us_vin'), 0),
        # Том-малыш в майонезе
        ('pour_oil', S0['mayo'] - 0.1, -4), ('vortex_suck', e('my_sec'), -12), ('pour_oil', e('my_mayo', 0.1), 2), ('dive_splash', e('my_mayo', 0.5), -10), ('record_scratch', e('my_wo'), -8), ('boulder_drop', e('my_vin', -0.2), -10), ('knife_tuk', e('my_vin'), 0),
        # сегодня
        ('shimmer', S0['today'] - 0.1, -4), ('sleigh_bells', S0['today'] + 0.1, -6), ('crowd_cheer', e('td_100'), -14), ('coin_ring', e('td_ton'), -6), ('weight_slam', e('td_ton', 0.05), -8), ('poof_cloth', e('td_50'), -8), ('stamp_thud', e('td_50', 0.15), 0),
        # кнопка
        ('whip_whoosh', S0['button'] - 0.1, -4), ('fork_squish', e('bt_wink', -0.2), 12), ('cat_meow', DUR - 0.9, -6),
    ]
    beds = [('feast_loop', 0, S0['tavern']), ('feast_loop', S0['tavern'], S1['acronym']), ('kitchen_loop', S0['norway'], S1['norway']), ('kitchen_loop', S0['ussr'], S1['ussr']), ('restaurant_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus')
