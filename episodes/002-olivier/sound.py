"""Звук 002 — Оливье: SFX и атмосферы от событий картинки (T.EV из ev.json) и реплик. SFX: (файл, время, поправка дБ). BEDS: (луп, начало, конец).
Новые звуки выпуска (pickle_crunch, jar_lid, knife_chop, steam_hiss, bird_flutter) — в assets/sfx/CATALOG.md, раздел «ТОМ НА ВКУС»."""


def sound(T):
    E, S0, S1, DUR = T.EV, T.S0, T.S1, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: ночь перед Новым годом, ложка роет, кубики летят, ценник, огурчик-хрум → брызги рассола
        ('fireworks', 0.0, -14), ('whip_whoosh', 0.05, -4), ('knife_tuk', e('hk_dig'), -6), ('tiny_tuk', e('hk_dig', 0.3), -6), ('tiny_tuk', e('hk_dig', 0.6), -6), ('tiny_tuk', e('hk_dig', 1.0), -6),
        ('record_scratch', e('hk_name', -0.05), -2), ('knife_tuk', e('hk_name', 0.05), 2), ('jar_lid', e('hk_grab', -0.2), -4),
        ('pickle_crunch', e('hk_bite'), 4), ('pickle_crunch', e('hk_bite', 0.14), -2), ('dive_splash', S0['deficit'] - 0.1, -10), ('bubbles_burst', S0['deficit'], -8),
        # 1970-е: кухня, нож, банка горошка, майонез, календарь
        ('knife_chop', S0['deficit'] + 0.1, -6), ('weight_slam', e('df_saus', 0.05), -10), ('knife_tuk', e('df_saus', 0.15), 0), ('jar_lid', e('df_peas', 0.1), -4), ('egg_crack', e('df_peas', 0.2), -10),
        ('pour_oil', e('df_mayo'), -4), ('knife_chop', e('df_ny', -0.4), -8), ('stamp_thud', e('df_70'), -2), ('knife_tuk', e('df_70', 0.1), 2),
        # банка «Провансаль»: крышка накрывает и улетает, гастроном
        ('jar_lid', S0['jar'] - 0.25, 0), ('whip_whoosh', S0['jar'] + 0.1, -4), ('shimmer', e('jr_prov'), -6), ('knife_tuk', e('jr_prov', 0.1), 2), ('scroll_unroll', e('jr_old', -0.2), -8), ('shimmer', e('jr_old'), -8),
        # нож шинкует кадр → ресторан 1939
        ('knife_chop', S0['moskva'] - 0.35, 0), ('boulder_drop', S0['moskva'] + 0.25, -14), ('typewriter', e('mo_year', 0.1), -14), ('goblet_clink', e('mo_hotel'), -6),
        ('cloche_lift', e('mo_chef', -0.2), -8), ('crowd_ooh', e('mo_dish'), -8), ('knife_tuk', e('mo_dish', 0.1), 2),
        # ложка-водоворот → кухня: весы, курица, каперсы → горошек, рябчик в лес
        ('vortex_suck', S0['swap'] - 0.3, -6), ('whip_whoosh', S0['swap'], -6), ('weight_slam', e('sw_chick'), -4), ('chicken_cluck', e('sw_chick', 0.1), -6), ('wood_bonk', e('sw_chick', 0.2), -6),
        ('whip_whoosh', e('sw_cap'), -8), ('rock_knock', e('sw_pea'), -6), ('door_swing', e('sw_forest', -0.3), -2), ('wind_gust', e('sw_forest'), -14), ('bird_flutter', e('sw_forest', 0.3), 6),
        # переворот сковороды → Том-малыш на странице 1894
        ('whip_whoosh', S0['recipe'] - 0.3, 0), ('plate_spin', S0['recipe'] - 0.1, -8), ('paper_whoosh', S0['recipe'] + 0.3, -6),
        ('boulder_drop', e('rc_grouse', -0.02), -2), ('earthquake_rumble', e('rc_grouse', 0.05), -16), ('boulder_drop', e('rc_cray', -0.02), -4), ('boulder_roll', e('rc_cap'), -8),
        ('boulder_roll', e('rc_olive', -0.3), -6), ('crowd_ooh', e('rc_olive', 0.2), -10), ('shimmer', e('rc_olive', 0.3), -6), ('knife_tuk', e('rc_olive', 0.15), 2),
        # пар из котла → «Эрмитаж» 1860-х
        ('steam_hiss_ol', S0['hermitage'] - 0.35, -2), ('goblet_clink', S0['hermitage'] + 0.4, -8), ('cloche_lift', e('he_mayo', -0.3), -2), ('shimmer', e('he_owner', -0.2), -6), ('stamp_thud', e('he_ol', 0.1), -4), ('knife_tuk', e('he_ol', 0.15), 2),
        # скатерть → архив 1868
        ('cloth_rip', S0['nikolai'] - 0.15, -6), ('whip_whoosh', S0['nikolai'] - 0.1, -4), ('paper_whoosh', e('nk_none', -0.4), -6), ('ink_splat', e('nk_none', 0.05), -4),
        ('table_crash', e('nk_book'), -10), ('weight_slam', e('nk_book', 0.05), -6), ('pencil_scribble', e('nk_nik'), -6), ('knife_tuk', e('nk_mgr', 0.3), 2),
        # скалка → Париж 1856
        ('scroll_unroll', S0['paris'] - 0.2, -4), ('ship_bell', S0['paris'] + 0.4, -16), ('stamp_thud', e('pa_year'), -2), ('knife_tuk', e('pa_year', 0.5), 2),
        # скорлупа → сегодня: карта, рекорд, оливка сверху
        ('egg_crack', S0['today'] - 0.15, 2), ('whip_whoosh', S0['today'] + 0.1, -6), ('tiny_tuk', e('td_spain'), -2), ('tiny_tuk', e('td_spain', 0.35), -2), ('tiny_tuk', e('td_greece'), -2), ('tiny_tuk', e('td_greece', 0.3), -2), ('tiny_tuk', e('td_greece', 0.6), -2),
        ('weight_slam', e('td_rec', -0.1), -8), ('crowd_cheer', e('td_tons'), -10), ('steam_hiss_ol', e('td_ol', -0.2), -8), ('shimmer', e('td_put', 0.4), -4), ('knife_tuk', e('td_fam'), 2),
        # кнопка: ложка-зеркало, хрум
        ('shimmer', S0['button'] - 0.1, -6), ('pickle_crunch', e('bt_bite'), 2), ('cat_meow', DUR - 0.8, -8),
    ]
    beds = [('kitchen_loop', 0, S0['deficit']), ('kitchen_loop', S0['deficit'], S1['deficit']), ('restaurant_loop', S0['jar'], S1['jar']), ('restaurant_loop', S0['moskva'], S1['moskva']),
            ('kitchen_loop', S0['swap'], S1['swap']), ('restaurant_loop', S0['hermitage'], S1['hermitage']), ('kitchen_loop', S0['paris'], S1['paris']), ('restaurant_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus')
