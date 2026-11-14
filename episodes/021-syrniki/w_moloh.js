/* 021 — `moloh`: «А сам сырник всё меняет форму: то блин с начинкой, то варёный, как пельмень!» Купеческая кухня XIX в.: медно-зелёная гамма,
   чугунная плита с конфорками и кольцами, кипящая кастрюля (главный свет — огонь плиты снизу + окно с геранью справа), медные кастрюли и сотейники
   на стене по росту, шкаф-буфет с фарфором, часы с кукушкой, ступка, сито, весы с гирями, мешок муки, кухарка в чепце месит тесто, мальчик-разносчик
   с корзиной в дверях, кошка на подоконнике. На столе — раскрытая книга «Подарокъ молодымъ хозяйкамъ» (герой) с картинками форм сырника.
   Том — кухарка в ситцевой кофте и косынке. По словам: «меняет форму» — на книге три формы сырника по очереди подсвечиваются, Том крутит сырник;
   «блин с начинкой» — Том поднимает блин-конверт, из него выглядывает творог; «варёный» — Том кидает сырник в кипящую кастрюлю: «ПЛЮХ!», брызги, пар;
   «как пельмень!» — из кастрюли на шумовке всплывают варёный сырник и пельмень рядом, Том изумлённо сравнивает. Переход В сцену: блин подбрасывают
   на сковороде — кадр переворачивается в воздухе, на обороте новая сцена. */
(() => {
  EV.mo_form = wtw('s8', 'форму:');
  EV.mo_blin = wtw('s8', 'блин');
  EV.mo_boil = wtw('s8', 'варёный,');
  EV.mo_plop = EV.mo_boil + 0.25;
  EV.mo_pelm = wtw('s8', 'пельмень!');
  SHAKES.push([EV.mo_plop, 0.18, 7]);
  KEYW.push('варёный,', 'пельмень!');

  function wall(t) {                                                    // зелёная крашеная стена, кафель, окно с геранью, медь по росту, буфет, часы
    vgrad(-900, 1500, ['#1e3a32', '#2e5a4a', '#3e6a56']);
    for (let x = -600; x < 1800; x += 56) for (let y = 820; y < 1460; y += 56) { rect(x, y, 54, 54, { wash: ((x + y) / 56) % 2 ? '#e8ece4' : '#d8e0d4', washA: 1, w: 0.8, col: '#7a8a80' }); }
    rect(-600, 800, 2400, 22, { wash: '#6a3a1a', washA: 1, w: 1.6 });
    push(1150, 200, 1); const w = rect(-170, -260, 340, 420, { wash: '#a8c8d8', washA: 1, w: 10, col: '#e8e0d0', key: 21901 }); ctx.save(); ctx.clip(w.path); vgrad(-260, 160, ['#c8dce8', '#e8f0f4']); for (let i = 0; i < 5; i++) rect(-160 + i * 70, 40 - i * 20, 60, 200, { wash: '#8a7a6a', washA: 0.4, line: false }); ctx.restore(); pencil([[0, -260], [0, 160]], { w: 8, col: '#e8e0d0' }); pencil([[-170, -50], [170, -50]], { w: 8, col: '#e8e0d0' });
    for (const px of [-100, 80]) { rect(px - 30, 160, 60, 50, { wash: '#b0643a', washA: 1, w: 1.4 }); for (let i = 0; i < 6; i++) { pencil([[px, 160], [px - 40 + i * 16, 100]], { w: 3, col: '#3a7a3a', pass2: false }); ell(px - 40 + i * 16, 96, 12, 12, { wash: '#d82a3a', washA: 1, w: 1 }); } }
    const cb = blob([[-60, 160], [-50, 110], [-20, 90], [-30, 60], [-10, 50], [0, 70], [10, 50], [24, 64], [16, 90], [40, 110], [50, 160]], { wash: '#e8a050', washA: 1, w: 1.6, col: '#5a3a10' }); hatch(cb.path, cb.bb, { gap: 6, a: 0.3, col: '#8a4a10', ang: 1.2, key: 21902 }); pop();
    glow(1150, 100, 260, 'rgba(230,245,255,1)', 0.22);
    for (let i = 0; i < 7; i++) { const x = 320 + i * 90, r = 26 + i * 8, y = 300 + r; pencil([[x, 240], [x, y - r]], { w: 2, col: '#3a3a3a', pass2: false }); const p = ell(x, y, r, r, { wash: '#c8743a', washA: 1, w: 2, col: '#5a2a08', key: 21903 + i }); shadeG(p.path, x + r, y, x - r, y, '#6a2a08', 0.5); ell(x - r * 0.4, y - r * 0.4, r * 0.25, r * 0.15, { wash: '#ffd8a0', washA: 0.8, line: false }); pencil([[x + r, y], [x + r + 40, y - 10]], { w: 6, col: '#5a2a08', pass2: false }); }
    push(-260, 700, 1); const bf = rect(-200, -700, 400, 700, { wash: '#6a3a1a', washA: 1, w: 3, col: '#1a0a04', key: 21910 }); shadeG(bf.path, 200, 0, -200, 0, '#2a1408', 0.4); for (let sh = 0; sh < 3; sh++) { rect(-170, -660 + sh * 180, 340, 150, { wash: '#2a1a10', washA: 0.6, w: 1.4 }); for (let i = 0; i < 5; i++) { ell(-130 + i * 65, -560 + sh * 180, 26, 26, { wash: '#f4f4f0', washA: 1, w: 1.4, col: '#6a6a7a' }); ell(-130 + i * 65, -560 + sh * 180, 14, 14, { wash: '#2a5aa8', washA: 0.7, line: false }); } } pop();
    push(500, -240, 1); poly([[-90, 0], [0, -80], [90, 0]], { wash: '#5a2a14', washA: 1, w: 2 }); const ck = rect(-80, 0, 160, 170, { wash: '#7a4a24', washA: 1, w: 2, col: '#2a1408' }); ell(0, 80, 54, 54, { wash: '#f4ecd8', washA: 1, w: 1.6 }); pencil([[0, 80], [Math.cos(t) * 40, 80 + Math.sin(t) * 40]], { w: 3, col: '#1a1a1a', pass2: false }); pencil([[0, 80], [0, 40]], { w: 4, col: '#1a1a1a', pass2: false }); for (const dx of [-30, 30]) { pencil([[dx, 170], [dx, 300 + (dx > 0 ? Math.sin(t) * 20 : 0)]], { w: 1.4, col: '#3a2a1a', pass2: false }); poly([[dx - 10, 300], [dx + 10, 300], [dx, 340]], { wash: '#5a3a1a', washA: 1, w: 1 }); } pop();
  }
  function stove(t) {                                                   // чугунная плита: конфорки, огонь в дверце, кипящая кастрюля
    push(240, 1300, 1); const s = rect(-260, -320, 520, 320, { wash: '#2a2a2e', washA: 1, w: 3, col: '#0a0a0a', key: 21920 }); shadeG(s.path, 260, 0, -260, 0, '#5a5a60', 0.3); rect(-280, -340, 560, 30, { wash: '#3a3a40', washA: 1, w: 2 }); for (let i = 0; i < 3; i++) ell(-170 + i * 170, -326, 60, 12, { wash: '#1a1a1a', washA: 1, w: 1.6, col: '#5a5a5a' });
    const dr = rect(-120, -240, 140, 120, { wash: '#1a0a04', washA: 1, w: 2.4, col: '#5a5a5a' }); for (let i = 0; i < 5; i++) { const fh = 40 + Math.sin(t * 9 + i) * 16; blob([[-110 + i * 26, -122], [-100 + i * 26, -122 - fh], [-88 + i * 26, -122]], { wash: i % 2 ? '#ff9a2a' : '#ffd050', washA: 1, line: false }); } glow(-50, -180, 160, 'rgba(255,140,50,1)', 0.35); ell(120, -180, 40, 40, { wash: '#4a4a50', washA: 1, w: 2 }); pop();
    stockPot(330, 970, 0.85, t, { key: 21921 }); const sp = t > EV.mo_plop ? clamp((t - EV.mo_plop) / 0.6) : 0;
    if (sp > 0 && sp < 1) { for (let i = 0; i < 12; i++) { const a = -3.14 * (0.1 + i / 14); ell(330 + Math.cos(a) * 160 * sp, 880 + Math.sin(a) * 200 * sp + sp * sp * 160, 9, 12, { wash: '#e8f4ff', washA: 1 - sp, w: 1, col: '#8ab0d8' }); } push(330, 760 - sp * 60, 0.8 + sp); txt('ПЛЮХ!', 0, 0, 80, { font: 'Osw', col: '#ffffff', a: 1 - sp }); pop(); }
    steamWisps(330, 860, 1.1, t, 4, 21922, 0.45);
    if (t > EV.mo_pelm) { const k = popK(t, EV.mo_pelm, 0.45); push(330, 820 - k * 120, 1, -0.1); pencil([[150, -160], [30, 0]], { w: 8, col: '#a8743a', pass2: false }); ell(0, 6, 110, 34, { wash: '#b8b8c0', washA: 1, w: 2, col: '#3a3a40' }); for (let i = 0; i < 9; i++) ell(-80 + (i % 5) * 40, -4 + Math.floor(i / 5) * 18, 5, 5, { wash: '#3a3a40', washA: 1, line: false }); boiledSyrnik(-40, -10, 0.85, 0, { key: 21923 }); pelmen(55, -16, 0.7, 0.2, { key: 21924 }); txt('=', 8, -60, 50, { font: 'Osw', col: '#fff4d0' }); pop(); }
  }
  function people(t) {                                                  // кухарка в чепце месит тесто, мальчик с корзиной, кошка на подоконнике
    human(820, 1300, 1.05, t, { body: '#8a6aa8', bodyD: '#3a2a5a', legs: '#3a2a3a', hair: '#8a5a2a', hat: 'scarf', hatCol: '#ffffff', face: t > EV.mo_plop && t < EV.mo_plop + 1.4 ? 'shock' : 'smile', armL: 'hold', armR: t > EV.mo_pelm ? 'point' : 'hold', look: -0.6, seed: 21930, flip: -1, long: 1 });
    push(820, 1050, 1); const d = ell(0, 0, 70, 30, { wash: '#f0e4c8', washA: 1, w: 1.6, col: '#a8946a' }); shadeG(d.path, 70, 0, -70, 0, '#c8b48a', 0.4); ell(Math.sin(t * 6) * 10, -10, 30, 14, { wash: '#f8f0dc', washA: 1, w: 1 }); pop();
    human(1320, 1300, 0.85, t, { body: '#5a4a3a', legs: '#3a3a3a', hair: '#e8c870', hat: 'cap', hatCol: '#3a3a5a', face: 'grin', armL: 'hold', armR: 'wave', look: -0.8, seed: 21931, flip: -1 }); push(1260, 1100, 1); const bk = blob([[-50, 0], [-60, -50], [60, -50], [50, 0]], { wash: '#b8884a', washA: 1, w: 1.6, col: '#4a2a08' }); for (let i = 0; i < 4; i++) ell(-36 + i * 24, -54, 14, 10, { wash: SY.blin, washA: 1, w: 1 }); pop();
    push(1240, 410, 1); const ct = blob([[-40, 0], [-44, -40], [-30, -70], [-34, -96], [-20, -86], [-6, -96], [-4, -70], [20, -50], [40, 0]], { wash: '#e8a050', washA: 1, w: 1.6, col: '#5a3a10' }); pencil(spline([[40, -4], [80, -10], [90, 30]], false, 5), { w: 8, col: '#e8a050', pass2: false }); ell(-26, -70, 3, 2, { wash: '#2a2a1a', washA: 1, line: false }); pop();
  }
  function table(t) {                                                   // стол: книга Молоховец (герой), доска с сырниками, сито, ступка, весы, мешок муки
    const c = rect(-300, 1440, 1700, 600, { wash: '#c8a070', washA: 1, w: 3, col: '#3a2010', key: 21940 }); for (let i = 0; i < 7; i++) pencil([[-300, 1470 + i * 80], [1400, 1474 + i * 80]], { w: 3, col: '#8a6a3a', a: 0.5, pass2: false }); shadeG(c.path, 0, 1440, 0, 1800, '#5a3a1a', 0.4);
    const fm = t > EV.mo_form ? Math.floor((t - EV.mo_form) / 0.5) % 3 : -1;
    push(980, 1470, 0.62, 0.05); oldBook(0, 0, 0.9, 0, { open: 1, title: 'ПОДАРОКЪ', sub: 'сырники', key: 21941 }); for (let i = 0; i < 3; i++) { const y = -60 + i * 90, on = fm === i || (i === 1 && t > EV.mo_blin && t < EV.mo_boil) || (i === 2 && t > EV.mo_boil); if (on) rect(30, y - 40, 180, 80, { wash: '#f4d040', washA: 0.45, line: false }); if (i === 0) syrnik(120, y, 0.5, 0, { key: 21942 }); else if (i === 1) bliniFold(120, y, 0.6, 0, { key: 21943 }); else boiledSyrnik(120, y, 0.75, 0, { key: 21944 }); } pop();
    push(360, 1500, 1); rect(-120, -20, 240, 30, { wash: '#a8743a', washA: 1, w: 2, col: '#3a1a08' }); for (let i = 0; i < 3; i++) syrnik(-70 + i * 70, -26, 0.5, 0, { key: 21945 + i, raw: 1 }); pop();
    push(130, 1500, 1); const sv = ell(0, -20, 70, 20, { wash: '#c8a070', washA: 1, w: 2, col: '#5a3a1a' }); for (let i = 0; i < 8; i++) pencil([[-60 + i * 17, -36], [-60 + i * 17, -4]], { w: 1, col: '#5a4a3a', pass2: false }); pop();
    push(1250, 1490, 1); rect(-80, -10, 160, 20, { wash: '#3a3a40', washA: 1, w: 1.6 }); pencil([[0, -10], [0, -110]], { w: 6, col: '#3a3a40', pass2: false }); pencil([[-90, -110 + Math.sin(t) * 6], [90, -110 - Math.sin(t) * 6]], { w: 5, col: '#c8902a', pass2: false }); for (const sd of [-1, 1]) { ell(sd * 90, -96 - sd * Math.sin(t) * 6, 40, 10, { wash: '#c8902a', washA: 1, w: 1.4 }); } rect(56, -124, 22, 20, { wash: '#2a2a2a', washA: 1, w: 1 }); pop();
    push(-60, 1460, 0.8); const m = blob([[-80, 0], [-90, -120], [-60, -180], [60, -180], [90, -120], [80, 0]], { wash: '#efe6d0', washA: 1, w: 2, col: '#7a6a4a', key: 21946 }); shadeG(m.path, 80, 0, -60, 0, '#b8a888', 0.45); txt('МУКА', 0, -80, 26, { font: 'Osw', col: '#5a3a1a' }); pop();
    castShadow(900, 1500, 300, 140, -0.6, 0.22); lightPool(700, 1520, 600, 140, 'rgba(255,200,140,1)', 0.22);
  }
  function front(t) {                                                   // передний план: связка баранок сверху, край медного таза, мука в воздухе
    push(-200, -620, 1.4); pencil([[0, -300], [0, 0]], { w: 3, col: '#8a6a3a', pass2: false }); for (let i = 0; i < 9; i++) { const a = i / 9 * 3.14 - 1.57; ell(Math.sin(a) * 70, 40 + Math.cos(a) * 60 + i * 16, 30, 22, { wash: '#d8903a', washA: 1, w: 1.6, col: '#6a3a10' }); ell(Math.sin(a) * 70, 40 + Math.cos(a) * 60 + i * 16, 10, 7, { wash: '#2e5a4a', washA: 1, line: false }); } pop();
    push(1400, 2060, 1.6); const b = ell(0, -120, 180, 50, { wash: '#c8743a', washA: 1, w: 3, col: '#5a2a08' }); shadeG(b.path, -180, 0, 180, 0, '#5a2a08', 0.5); ell(0, -130, 150, 36, { wash: '#e8b070', washA: 0.6, line: false }); pop();
    motes(18, [-200, 600, 1200, 1600], '#fff8e8', t, 21950, { sp: 10, sz: 3, a: 0.45, wob: 8 });
  }
  WORLD.moloh = (t, u, cat) => {
    lay(16, () => { wall(t); shaft(1150, 0, 300, 2000, 0.45, 'rgba(230,245,255,1)', 0.12); }); lay(4, () => { people(t); haze('#d8e8e0', 0.04); });
    lay(2.2, () => { stove(t); lightPool(240, 1300, 400, 120, 'rgba(255,150,70,1)', 0.3); });
    lay(1, () => { cat(); table(t); });
    lay(0.6, () => { front(t); moodDark(640, 1100, 450, 1500, '#0a1a14', 0.5); });
  };
  DIR.moloh = {
    outfit: 'kuhA', light: { side: -1, rim: '#ffb070' }, grade: ['#70c0a0', 0.05],
    act: () => [[S0.moloh, 'talk'], [EV.mo_form, 'smug'], [EV.mo_blin, 'grin'], [EV.mo_boil, 'suspicious'], [EV.mo_plop, 'shock'], [EV.mo_pelm, 'awe'], [EV.mo_pelm + 0.6, 'laugh']],
    pose: (t, u, b) => { const blin = t > EV.mo_blin - 0.1 && t < EV.mo_boil, thr = t > EV.mo_boil && t < EV.mo_plop + 0.3;
      return Object.assign(b, { x: 660, y: 1590, s: 1.18, flip: 1, look: thr ? [-0.8, -0.3] : t > EV.mo_pelm ? [-0.7, -0.5] : [0.3, -0.1], hand: thr ? [120, -380] : blin ? [160, -340] : [150, -290], handF: [-100, -230],
        prop: blin ? 'bliniFoldP' : t < EV.mo_boil ? 'syrnikP' : undefined, propAng: t < EV.mo_blin ? Math.sin(t * 6) * 0.4 : 0, squash: t > EV.mo_plop && t < EV.mo_plop + 0.15 ? 0.08 : 0 }); },
    cam: () => [[S0.moloh, 620, 1120, 0.26], [EV.mo_blin, 660, 1150, 0.3], [EV.mo_boil, 560, 1080, 0.28], [EV.mo_pelm, 520, 1040, 0.3], [S1.moloh, 540, 1080, 0.32]]
  };
  TRANS_IN.moloh = { a: 0.2, b: 0.5, runA: 0.6, fx(k, t, A, B) {          // блин подбросили: кадр переворачивается в воздухе, на обороте — новая сцена
    const e = sm(k), ang = e * 3.14, sy = Math.cos(ang), up = Math.sin(ang) * 260;
    scr(() => { ctx.fillStyle = '#1a2a24'; ctx.fillRect(0, 0, 1080, 1920); ctx.save(); ctx.translate(540, 960 - up); ctx.scale(1 - Math.sin(ang) * 0.25, Math.max(0.02, Math.abs(sy)) * (1 - Math.sin(ang) * 0.25)); ctx.translate(-540, -960);
      ctx.drawImage(sy > 0 ? A : B, 0, 0); ctx.restore();
      if (Math.abs(sy) < 0.5) { push(540, 960 - up, 1); ell(0, 0, 520, 40 + 60 * Math.abs(sy), { wash: SY.blin, washA: 1, w: 4, col: SY.blinD }); const r = rng(21960); for (let i = 0; i < 20; i++) ell(-460 + r() * 920, -20 + r() * 40, 10, 6, { wash: '#a85a12', washA: 0.5, line: false }); pop(); } });
  } };
})();
