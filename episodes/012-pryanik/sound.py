"""Звук 012 — Тульский пряник (правила v1): SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец). Новые: pebbles_pour, church_bells."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: камешки сыплются на весы, «рецепт?», «но как?», хруст пряника
        ('pebbles_pour', 0.0, -2), ('rock_knock', e('hk_drop', 0.2), -6), ('knife_tuk', e('hk_save'), -6), ('record_scratch', e('hk_how'), -14), ('crunch_crouton', e('hk_bite'), 0), ('jaw_chomp', e('hk_bite', 0.1), -6),
        # 1685: трещина глазури, книга, вывески, орехи
        ('ice_shatter', S0['pistsy'] - 0.15, -10), ('scroll_unroll', e('ps_book'), -8), ('pencil_scribble', e('ps_book', 0.5), -10), ('wood_bonk', e('ps_shops'), -8), ('wood_bonk', e('ps_shops', 0.15), -10), ('coins_pouch', e('ps_nuts'), -6),
        # доска (Том-малыш): стружка, пресс теста, зеркало, лист и груша, стамеска
        ('grater_scrape', S0['boards'] - 0.2, -10), ('weight_slam', e('bd_print', 0.3), -9), ('shimmer', e('bd_mirror'), -6), ('bird_flutter', e('bd_lipa'), -16), ('wood_bonk', e('bd_lipa', 0.6), -6), ('chisel_strike', e('bd_gag'), -4), ('chisel_strike', e('bd_gag', 0.3), -8),
        # Париж 1889: доска-штамп, вывеска, весы, медаль, аплодисменты
        ('stamp_thud', S0['paris'] - 0.05, -2), ('shimmer', e('pr_par'), -10), ('boulder_drop', e('pr_pud'), -10), ('medal_fanfare', e('pr_gp'), -6), ('crowd_cheer', e('pr_gp', 0.1), -10),
        # 1900: глазурь, башня, павильон собирается, хруст стены
        ('pour_oil', S0['pavilion'] - 0.2, -12), ('whip_whoosh', e('pv_tow'), -8), ('tiny_tuk', e('pv_pav'), -6), ('tiny_tuk', e('pv_pav', 0.2), -6), ('tiny_tuk', e('pv_pav', 0.4), -6), ('crunch_crouton', e('pv_pr', 0.4), -2), ('crowd_ooh', e('pv_pr', 0.5), -12),
        # тайна: свеча гаснет, гири перечёркнуты, камешки на чашу, замок
        ('fire_flare', S0['secret'] - 0.1, -12), ('quiz_buzz', e('sc_gir', 0.1), -14), ('pebbles_pour', e('sc_peb'), -2), ('jar_lid', e('sc_hide', 0.4), -6), ('watch_click', e('sc_hide', 0.6), -4),
        # пропали: метель, листы улетают, календарь, печь вспыхивает
        ('wind_gust', S0['lost'] - 0.2, -6), ('shiver_brr', e('ls_gone'), -12), ('paper_whoosh', e('ls_rec'), -6), ('paper_whoosh', e('ls_back'), -8), ('fire_flare', e('ls_back', 0.1), -4), ('quiz_ding', e('ls_year'), -10),
        # ★ легенда: колокол, крадётся, весы, цифры, рецепт спасён, подмигивание
        ('church_bells', S0['legend'] - 0.2, -6), ('door_swing', e('lg_sneak'), -10), ('pebbles_pour', e('lg_weigh', -0.4), -6), ('pencil_scribble', e('lg_peb'), -6), ('medal_fanfare', e('lg_save'), -6), ('shimmer', e('lg_save', 0.1), -6), ('tiny_tuk', e('lg_gag', 0.15), -6),
        # сегодня: весы-переход, покрывало, табло 117, конфетти, разломы
        ('weight_slam', S0['today'] - 0.1, -10), ('poof_cloth', e('td_rec'), -4), ('quiz_ding', e('td_kg'), -6), ('fireworks', e('td_kg', 0.05), -12), ('crowd_cheer', e('td_kg', 0.1), -12), ('bread_tear', e('td_jam'), -4), ('bread_tear', e('td_milk'), -4),
        # кнопка: хруст, подмигивание — без мяу, ролик перетекает в хук
        ('whip_whoosh', S0['button'] - 0.15, -8), ('crunch_crouton', e('bt_wink', -0.3), -2),
    ]
    beds = [('restaurant_loop', 0, S1['hook']), ('bazaar_loop', S0['pistsy'], S1['pistsy']), ('kitchen_loop', S0['boards'], S1['boards']), ('feast_loop', S0['paris'], S1['pavilion']),
            ('campfire_loop', S0['secret'], S1['secret']), ('blizzard_loop', S0['lost'], E['ls_back']), ('kitchen_loop', E['ls_back'], S1['legend']), ('feast_loop', S0['today'], S1['today']), ('restaurant_loop', S0['button'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus', loop=True, lufs=-14)   # тест v1: музыка без затухания на стыке, мастер −14 LUFS
