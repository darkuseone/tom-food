"""Звук 005 — Борщ: SFX от событий картинки (T.EV из ev.json). SFX: (файл, время, дБ). BEDS: (луп, начало, конец)."""


def sound(T):
    E, S0, S1, LS, LF, DUR = T.EV, T.S0, T.S1, T.LS, T.LF, T.DUR
    e = lambda k, d=0.0: E[k] + d
    sfx = [
        # хук: дача, борщевик, первая ложка
        ('whip_whoosh', 0.0, -2), ('lettuce_crunch', e('hk_weed', -0.1), -2), ('record_scratch', e('hk_weed', 0.1), -6), ('crowd_ooh', e('hk_weed', 0.2), -14),
        ('spoon_clink', e('hk_dip'), -10), ('soup_slurp', e('hk_bite', -0.1), -2), ('crunch_crouton', e('hk_bite'), -8),
        # луг: воронка супа, квасят листья, похлёбка
        ('vortex_suck', S0['meadow'] - 0.2, -6), ('lettuce_crunch', e('md_um', 0.2), -8), ('bubbles_burst', e('md_sour'), -8), ('fire_flare', e('md_soup', -0.1), -10), ('pot_boil', e('md_soup'), -2),
        # имя: лист смахивает, мел, книга
        ('paper_whoosh', S0['name'] - 0.1, -2), ('pencil_scribble', e('nn_word', -0.2), -6), ('tiny_tuk', e('nn_word', 0.2), -4), ('scroll_unroll', e('nn_dom', -0.2), -6), ('shimmer', e('nn_spring'), -10),
        # Том-малыш в кастрюле: капля, свёкла, краснеет
        ('dive_splash', S0['beet'] - 0.1, -6), ('weight_slam', e('bt_beet', 0.4), -8), ('dive_splash', e('bt_beet', 0.5), -4), ('shimmer', e('bt_red'), -6), ('bubbles_burst', e('bt_red', 0.2), -6),
        # погреб: крышка, нож, зарубки
        ('boulder_drop', S0['kvass'] - 0.1, -14), ('wood_bonk', S0['kvass'] + 0.05, -2), ('wood_bonk', e('kv_lid'), -4), ('bubbles_burst', e('kv_lid', 0.2), -10), ('knife_tuk', e('kv_cut'), -2), ('knife_tuk', e('kv_cut', 0.25), -4),
        ('chisel_strike', e('kv_days'), -10), ('chisel_strike', e('kv_days', 0.12), -10), ('chisel_strike', e('kv_days', 0.24), -10),
        # гавань: парус, картошка, помидоры, плюх в котёл
        ('sail_flap', S0['america'] - 0.2, -2), ('wood_bonk', e('am_pot', 0.4), -6), ('wood_bonk', e('am_pot', 0.55), -8), ('fork_squish', e('am_tom', 0.5), 4), ('ship_bell', e('am_far'), -12), ('dive_splash', e('am_drop', 0.35), -4), ('stamp_thud', e('am_xix'), -6),
        # Сочельник: свеча прожигает, точка на карте, ушки
        ('fire_burn_through', S0['poland'] - 0.2, -8), ('pencil_scribble', e('pl_map'), -8), ('teleport_pop', e('pl_pl'), -6), ('shimmer', e('pl_clear'), -8), ('dive_splash', e('pl_usz', 0.3), -12), ('dive_splash', e('pl_usz', 0.5), -14),
        # Литва: кефир, лёд
        ('pour_oil', S0['lithuania'] - 0.2, -4), ('ice_slide', e('lt_cold'), -8), ('shiver_brr', e('lt_cold', 0.1), -8), ('teleport_pop', e('lt_pink'), -6), ('pour_oil', e('lt_kef'), -4),
        # Кэтскилл: табло, пояс, аплодисменты
        ('clapperboard', S0['belt'] - 0.1, -6), ('whip_whoosh', e('bl_belt'), -4), ('medal_fanfare', e('bl_belt', 0.4), -10), ('crowd_cheer', e('bl_cook'), -14),
        # спор: вертушка, ложки, молоток
        ('plate_spin', S0['debate'] - 0.2, -6), ('record_scratch', e('db_who'), -8), ('spoon_clink', e('db_many', 0.3), -8), ('spoon_clink', e('db_many', 0.6), -10), ('gavel_bang', e('db_judge', -0.2), -6), ('whip_whoosh', e('db_judge'), -6), ('soup_slurp', e('db_eat'), -2),
        # сегодня: пар, 500, тарелки, борщевик за окном
        ('poof_cloth', S0['today'] - 0.1, -8), ('stamp_thud', e('td_500'), -6), ('teleport_pop', e('td_world'), -8), ('teleport_pop', e('td_world', 0.18), -9), ('teleport_pop', e('td_world', 0.36), -10), ('teleport_pop', e('td_world', 0.54), -11),
        ('lettuce_crunch', e('td_weed', 0.2), -6), ('record_scratch', e('td_weed', 0.6), -12),
        # кнопка
        ('spoon_clink', S0['button'], -10), ('soup_slurp', e('bt_wink', -0.2), -2), ('cat_meow', DUR - 0.9, -6),
    ]
    beds = [('forest_loop', 0, S1['meadow']), ('underwater_loop', S0['beet'], S1['beet']), ('cave_drip_loop', S0['kvass'], S1['kvass']), ('harbor_loop', S0['america'], S1['america']), ('kitchen_loop', S0['debate'], DUR)]
    return dict(sfx=sfx, beds=beds, music='music_tomnavkus')
