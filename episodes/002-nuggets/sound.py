"""Звук 002 — Наггетсы: SFX и атмосферы от событий картинки (T.EV из ev.json). SFX: (файл, время, поправка дБ). BEDS: (луп, начало, конец).
Новые звуки выпуска — в assets/sfx/CATALOG.md (раздел «выпуск 002»)."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: аукцион, ставки крутятся, молоток, колпак, укус
        ('whip_whoosh', 0.0, -2), ('typewriter', 0.2, -12), ('coins_pouch', 0.6, -10), ('crowd_ooh', 1.2, -12), ('gavel_bang', e('hk_sold', -0.1), 0), ('cash_register', e('hk_sold', 0.05), -4),
        ('goblet_clink', e('hk_lift'), -4), ('whip_whoosh', e('hk_lift', 0.1), -6), ('nugget_bite', e('hk_bite'), 4), ('crunch_crouton', e('hk_bite', 0.1), -4), ('crowd_ooh', e('hk_bite', 0.15), -6),
        # переход-укус → лаборатория
        ('jaw_chomp', S0['lab'] - 0.12, -2), ('nugget_bite', S0['lab'] + 0.15, -2),
        ('meat_grinder', e('lb_baker'), -8), ('bubbles_burst', e('lb_magic'), -4), ('poof_cloth', e('lb_magic', 0.05), -4), ('chicken_cluck', e('lb_magic', 0.1), -4), ('knife_tuk', e('lb_magic', 1.3), 2),
        # фарш
        ('meat_grinder', S0['mince'] - 0.15, -2), ('shimmer', e('mc_skin'), -10), ('knife_tuk', e('mc_skin', 0.1), 0), ('ink_splat', e('mc_fall', 0.1), -6), ('record_scratch', e('mc_fall', 0.05), -8),
        ('salt_shake', e('mc_salt'), -8), ('pour_oil', e('mc_vin', 0.1), -2), ('poof_cloth', e('mc_milk', 0.2), -4), ('shimmer', e('mc_ok'), -6), ('knife_tuk', e('mc_ok', 0.1), 2),
        # панировка: желток, хлопья, морозилка
        ('egg_crack', S0['batter'] - 0.15, 0), ('pour_oil', S0['batter'], -8), ('apple_crunch', e('bt_fall'), -10), ('egg_crack', e('bt_egg'), -4), ('lettuce_crunch', e('bt_flake', 0.1), -4),
        ('freezer_open', e('bt_frz', -0.1), 6), ('freeze_crackle', e('bt_frz', 0.1), -6), ('shiver_brr', e('bt_frz', 0.4), -10), ('wood_bonk', e('bt_ok'), 0), ('knife_tuk', e('bt_ok', 0.15), 2),
        # почта: патент в корзину, конверты
        ('freezer_open', S0['gift'] - 0.15, 4), ('paper_whoosh', e('gf_pat'), -4), ('paper_whoosh', e('gf_toss'), -2), ('wood_bonk', e('gf_toss', 0.5), -8),
        ('paper_whoosh', e('gf_free'), 0), ('paper_whoosh', e('gf_free', 0.4), -4), ('stamp_thud', e('gf_free', 0.8), -6), ('coin_ring', e('gf_500', 0.3), -6), ('knife_tuk', e('gf_500', 0.4), 2),
        # бургерная 1977
        ('paper_whoosh', S0['diet'] - 0.12, -2), ('stamp_thud', S0['diet'] + 0.2, -6), ('deep_fry', S0['diet'] + 0.1, 0), ('weight_slam', e('dt_paper', 0.15), -6), ('crowd_ooh', e('dt_meat', 0.2), -10),
        ('tiny_tuk', e('dt_menu'), -4), ('tiny_tuk', e('dt_menu', 0.12), -4), ('tiny_tuk', e('dt_menu', 0.24), -4), ('record_scratch', e('dt_only'), -6), ('knife_tuk', e('dt_only', 0.15), 2),
        # тест-кухня
        ('deep_fry', S0['arend'] - 0.2, 6), ('bubbles_burst', S0['arend'], -6), ('shimmer', e('ar_queen'), -4), ('knife_tuk', e('ar_queen', 0.1), 2), ('lettuce_crunch', e('ar_onion'), -6),
        ('door_swing', e('ar_boss'), 2), ('chicken_cluck', e('ar_boss', 0.2), 0), ('chicken_cluck', e('ar_chick', 0.1), -2), ('stamp_thud', e('ar_chick', 0.1), -4),
        # самородок
        ('teleport_pop', S0['name'] - 0.1, -6), ('dive_splash', S0['name'] + 0.2, -16), ('paper_whoosh', e('nm_word'), -6), ('shimmer', e('nm_rock'), 0), ('coin_ring', e('nm_rock', 0.1), -4),
        ('nugget_bite', e('nm_gold'), -6), ('shimmer', e('nm_gold', 0.1), -4), ('chicken_cluck', e('nm_chick'), -4),
        # коробка: Том-малыш
        ('wood_bonk', S0['shapes'] - 0.15, -4), ('wood_bonk', S0['shapes'] + 0.1, -6), ('tiny_tuk', e('sh_us', 0.2), -6), ('tiny_tuk', e('sh_us', 0.5), -6), ('tiny_tuk', e('sh_us', 0.8), -6),
        ('vortex_suck', e('sh_four', -0.3), -8), ('boulder_drop', e('sh_bell', 0.3), -10), ('boulder_drop', e('sh_ball', 0.3), -10), ('boulder_drop', e('sh_boot', 0.3), -10), ('boulder_drop', e('sh_bone', 0.3), -6),
        ('knife_tuk', e('sh_bell'), -2), ('knife_tuk', e('sh_ball'), -2), ('knife_tuk', e('sh_boot'), -2), ('knife_tuk', e('sh_bone'), 0),
        # суд
        ('gavel_bang', S0['judge'] - 0.1, 2), ('gavel_bang', e('jd_judge'), -4), ('thunder_crack', e('jd_frank', -0.05), 0), ('electric_zap', e('jd_frank'), -4), ('crowd_ooh', e('jd_frank', 0.3), -10),
        ('scroll_unroll', e('jd_list'), -2), ('pencil_scribble', e('jd_chick'), -6), ('chicken_cluck', e('jd_chick', 0.1), -10), ('thunder_crack', e('jd_list', 1.2), -14),
        # сегодня: хиро-шот
        ('camera_flash', S0['today'] - 0.1, 0), ('shimmer', S0['today'] + 0.2, -6), ('deep_fry', S0['today'] + 0.3, -2), ('nugget_bite', S0['today'] + 1.8, -6), ('cash_register', e('td_sold'), -4),
        ('nugget_bite', S0['today'] + 4.0, -6), ('paper_whoosh', e('td_free', -0.1), -2), ('stamp_thud', e('td_free', 0.3), 0),
        # кнопка
        ('ink_splat', S0['button'] - 0.1, -4), ('nugget_bite', e('bt_wink', -0.2), 0), ('cat_meow', DUR - 0.9, -6),
    ]
    beds = [('restaurant_loop', 0, S0['lab']), ('kitchen_loop', S0['batter'], S1['batter']), ('restaurant_loop', S0['diet'], S1['diet']), ('kitchen_loop', S0['arend'], S1['arend']),
            ('wind_gust', S0['name'], S1['name']), ('restaurant_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus')
