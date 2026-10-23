"""Звук 006 — Шаурма: SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец)."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: неон трёх ларьков, вертелы сливаются, укус
        ('neon_buzz', 0.0, -10), ('teleport_pop', e('hk_taco', 0.05), -8), ('teleport_pop', e('hk_gyros'), -8), ('teleport_pop', e('hk_sh'), -8),
        ('whip_whoosh', e('hk_one', 0.1), -4), ('boulder_drop', e('hk_one', 0.4), -12), ('doner_shave', e('hk_one', 0.6), -6), ('crunch_crouton', e('hk_bite'), -4), ('nugget_bite', e('hk_bite', 0.05), -4),
        # кебаб: лаваш, угли, Том ложится
        ('paper_whoosh', S0['kebab'] - 0.1, -2), ('fire_flare', S0['kebab'] + 0.1, -12), ('scroll_unroll', e('kb_one', -0.1), -4), ('camel_grunt', e('kb_keb', 0.3), -12), ('pillow_poof', e('kb_lie', 0.3), -4), ('knife_tuk', e('kb_sh'), -2),
        # Бурса: вертел встаёт, вывески, спор
        ('dust_whoosh', S0['bursa'] - 0.1, -6), ('wood_bonk', e('br_up', 0.45), -2), ('fire_flare', e('br_up', 0.5), -8), ('stamp_thud', e('br_b'), -8), ('stamp_thud', e('br_k'), -8), ('crowd_boo', e('br_who'), -14),
        # имена: стружка, барабан вывески
        ('doner_shave', S0['name'] - 0.1, -4), ('rewind', e('nm_rot'), -14), ('wood_bonk', e('nm_cev', -0.1), -6), ('wood_bonk', e('nm_pov', -0.1), -6), ('wood_bonk', e('nm_sh', -0.1), -4), ('shimmer', e('nm_sh'), -8),
        # гирос: тарелка, бьётся на счастье
        ('plate_smash', S0['gyros'] - 0.1, -2), ('paper_whoosh', e('gy_tr'), -8), ('pencil_scribble', e('gy_lang'), -8), ('plate_smash', e('gy_g', 0.2), -4), ('crowd_cheer', e('gy_g', 0.3), -14),
        # Мексика: папель-пикадо, ценник, поросёнок
        ('paper_whoosh', S0['mexico'] - 0.1, -4), ('ship_bell', e('mx_mex'), -12), ('door_swing', e('mx_kids', -0.1), -10), ('plate_spin', e('mx_pork', -0.1), -8), ('record_scratch', e('mx_pork', 0.1), -10),
        # пастор: ананас летит, тако
        ('shimmer', S0['pastor'] - 0.1, -8), ('knife_tuk', e('ps_pine', 0.05), 0), ('whip_whoosh', e('ps_pine', 0.2), -6), ('fork_squish', e('ps_pine', 0.8), 4), ('mariachi_sting', e('ps_taco'), -6),
        # Берлин: поезд, булка
        ('train_rush', S0['berlin'] - 0.2, -6), ('doner_shave', e('bn_bun', -0.5), -8), ('crunch_crouton', e('bn_bun', 0.1), -6), ('typewriter', e('bn_who'), -14), ('crowd_ooh', e('bn_still'), -16),
        # деньги: монета, касса
        ('coin_ring', S0['money'] - 0.1, -4), ('coins_pouch', e('mn_de', 0.3), -8), ('cash_register', e('mn_sum'), -4), ('coins_pouch', e('mn_sum', 0.4), -6), ('paper_whoosh', e('mn_year'), -8),
        # ЕС: штамп-переход, папка, циркуль, ПРОТИВ
        ('stamp_thud', S0['eu'], -4), ('paper_whoosh', e('eu_ask'), -6), ('pencil_scribble', e('eu_ask', 0.4), -10), ('tiny_tuk', e('eu_mm'), -4), ('tiny_tuk', e('eu_mm', 0.25), -6), ('gavel_bang', e('eu_no'), -2), ('stamp_thud', e('eu_no', 0.05), 0),
        # рекорд: рулетка, счётчик, медаль
        ('tape_measure', S0['record'] - 0.2, -2), ('typewriter', e('rc_line'), -14), ('medal_fanfare', e('rc_num', 0.4), -8), ('crowd_cheer', e('rc_num', 0.5), -12),
        # финал: соус, вывески
        ('pour_oil', S0['today'] - 0.1, -6), ('neon_buzz', e('td_a'), -10), ('neon_buzz', e('td_b'), -10), ('teleport_pop', e('td_b', 0.3), -8),
        # кнопка
        ('crunch_crouton', e('bt_wink', -0.2), -4), ('nugget_bite', e('bt_wink', -0.15), -4), ('cat_meow', DUR - 0.9, -6),
    ]
    beds = [('city_loop', 0, S1['hook']), ('bazaar_loop', S0['kebab'], S1['name']), ('sizzle_loop', S0['pastor'], S1['pastor']), ('city_loop', S0['berlin'], S1['berlin']), ('restaurant_loop', S0['money'], S1['money']), ('city_loop', S0['record'], S1['record']), ('sizzle_loop', S0['today'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus')
