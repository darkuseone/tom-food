/* 021 — `syrnik` (ТОМ-МАЛЫШ, раз за ролик): «Разгадка: «сыром» у славян и звали творог! / Твёрдый сыр пришёл позже и забрал имя. А сырники —
   со старым паспортом!» Микромир внутри гигантской чугунной сковороды: чёрный край сковороды — горная стена по горизонту, за ней размытая великанская
   кухня (кружка-башня, ложка, окно с солнцем — главный свет слева-сверху, пучок сквозь пар), по дну течёт сметанная река с рябью и бликами, сырники —
   золотые острова-плато с корочкой и порами на трёх планах, лужи топлёного масла пузырятся, ягоды варенья — рубиновые валуны с бликами, листья мяты —
   деревья, сверху сыплется сахарная пудра, столбы пара. Том-малыш в соломенной шляпе плывёт по сметанной реке на чайной ложке, гребёт листом мяты.
   По словам: «Разгадка» — Том-малыш прыгает с ложки на остров-сырник; «звали творог!» — втыкает табличку «СЫР = ТВОРОГ», из сырника брызжет творог;
   «Твёрдый сыр пришёл позже» — справа по маслу въезжает жёлтый брусок сыра с дырками, как айсберг; «забрал имя» — слово «СЫР» срывается с таблички и
   прилипает к бруску (на табличке остаётся «… = ТВОРОГ»); «со старым паспортом!» — с неба падает красная книжечка-паспорт «СЫРНИК · 1550-е» прямо
   на Тома-малыша (пауза-гэг: шляпа набок, он открывает паспорт и гордо показывает). Переход В сцену: капля сметаны падает и расплывается кругом. */
(() => {
  EV.sn_jump = wtw('s12', 'Разгадка:');
  EV.sn_sign = wtw('s12', 'звали');
  EV.sn_cheese = wtw('s13', 'Твёрдый');
  EV.sn_take = wtw('s13', 'забрал');
  EV.sn_pass = wtw('s13', 'паспортом!');
  EV.sn_land = EV.sn_pass + 0.35;
  EV.sn_gag = LE('s13') + 0.05;
  SHAKES.push([EV.sn_sign + 0.1, 0.15, 6], [EV.sn_land, 0.2, 9]);
  KEYW.push('творог!', 'паспортом!');
  const TX = 560, TY = 1330;                                            // вершина острова-сырника, где стоит табличка

  function giant(t) {                                                   // великанская кухня за краем сковороды: окно-солнце, кружка-башня, ложка
    vgrad(-900, 700, ['#e8c890', '#f4dcb0', '#e8c8a0']); const w = rect(-500, -800, 700, 900, { wash: '#fff4d8', washA: 0.8, w: 0, line: false }); glow(-150, -350, 520, 'rgba(255,240,200,1)', 0.35);
    pencil([[-150, -800], [-150, 100]], { w: 30, col: '#c8a878', a: 0.6, pass2: false }); pencil([[-500, -350], [200, -350]], { w: 30, col: '#c8a878', a: 0.6, pass2: false });
    push(1080, 300, 1); const m = rect(-200, -700, 400, 700, { wash: '#2a6aa8', washA: 0.75, w: 3, col: '#1a3a5a', key: 22201 }); shadeG(m.path, 200, 0, -200, 0, '#0a2a4a', 0.5); for (let i = 0; i < 8; i++) ell(-140 + (i % 4) * 90, -560 + Math.floor(i / 4) * 200, 26, 26, { wash: '#ffffff', washA: 0.6, line: false }); pencil(spline([[200, -600], [360, -500], [360, -200], [200, -120]], false, 6), { w: 50, col: '#2a6aa8', a: 0.75, pass2: false }); pop();
    push(560, 200, 1, -0.5); pencil([[0, 0], [0, -900]], { w: 60, col: '#c8c8d0', a: 0.7, pass2: false }); ell(0, 60, 120, 180, { wash: '#d8d8e0', washA: 0.7, w: 2, col: '#8a8a98' }); pop();
    rect(-900, 300, 3000, 400, { wash: '#c89a6a', washA: 0.7, line: false }); for (let i = 0; i < 12; i++) pencil([[-900, 320 + i * 30], [2100, 330 + i * 30]], { w: 4, col: '#a87a4a', a: 0.4, pass2: false });
  }
  function rim(t) {                                                     // чёрный край сковороды — горная стена по горизонту, блик металла
    const pts = [[-900, 760]]; for (let i = 0; i <= 30; i++) { const x = -900 + i * 100; pts.push([x, 460 + Math.pow((x - 560) / 1500, 2) * 400]); } pts.push([2100, 760]);
    const r = shape(pts, { wash: SY.iron, washA: 1, w: 3, col: '#0a0808', key: 22210 }); shadeG(r.path, 0, 440, 0, 760, '#5a5450', 0.4); pencil(pts.slice(1, -1).map(([x, y]) => [x, y + 16]), { w: 10, col: '#8a8278', a: 0.5, pass2: false });
    for (let i = 0; i < 6; i++) { const x = -600 + i * 380; pencil([[x, 520], [x + 40, 700]], { w: 6, col: '#3a3430', a: 0.6, pass2: false }); }
  }
  function floor(t) {                                                   // дно: топлёное масло, пузыри, сырники-острова дальнего и среднего плана, мята-деревья
    const f = rect(-900, 700, 3000, 1500, { wash: '#d89a3a', washA: 1, line: false, key: 22220 }); shadeG(f.path, 0, 700, 0, 1300, '#f8d070', 0.5); shadeG(f.path, 0, 2100, 0, 1300, '#8a4a10', 0.4);
    const r = rng(22221); for (let i = 0; i < 40; i++) { const x = -880 + r() * 2700, y = 720 + r() * 1100, ph = (t * (1 + r()) + r()) % 1; ell(x, y, 6 + ph * 16, 4 + ph * 10, { wash: '#fff0b0', washA: 0.7 * (1 - ph), w: 1, col: '#c88a2a' }); }
    for (let i = 0; i < 6; i++) pencil(ellPts(560, 1500, 400 + i * 260, 200 + i * 110, 0, 0, 40), { w: 6, col: '#a8601a', a: 0.25, pass2: false });
    for (let i = 0; i < 50; i++) { const x = -880 + r() * 2700, y = 760 + r() * 1200; ell(x, y, 4 + r() * 6, 3 + r() * 4, { wash: i % 2 ? '#7a3a08' : '#f4c870', washA: 0.6, line: false }); }
    for (const [x, y, s] of [[-300, 820, 1.6], [1300, 840, 1.8], [100, 760, 1.0], [900, 770, 1.1]]) { syrnik(x, y, s, 0, { key: 22222 + x }); for (let q = 0; q < 8; q++) ell(x - 40 * s + q * 10 * s, y - 14 * s - (q % 2) * 4 * s, 6 * s, 3 * s, { wash: '#ffffff', washA: 0.85, line: false }); }
    for (const [x, y, s, rot] of [[-480, 900, 3.2, -0.2], [1460, 980, 3.6, 0.25], [1060, 800, 2.2, 0.1]]) { pencil([[x, y], [x, y - 60 * s]], { w: 10, col: '#2a6a2a', pass2: false }); mintLeaf(x, y - 50 * s, s, rot + Math.sin(t * 1.4 + x) * 0.05, 22230 + x); mintLeaf(x + 10 * s, y - 40 * s, s * 0.8, rot + 0.8, 22231 + x); }
    for (let i = 0; i < 3; i++) steamWisps(-300 + i * 700, 900, 2.2, t, 3, 22240 + i * 7, 0.35);
  }
  function river(t) {                                                   // сметанная река: из глубины к переднему плану, рябь, блики, кружочки
    const L = [[900, 760], [760, 900], [520, 1060], [300, 1240], [140, 1460], [40, 1800], [0, 2200]], R = [[1000, 760], [900, 900], [720, 1080], [540, 1280], [420, 1500], [400, 1800], [440, 2200]];
    const p = shape(L.concat(R.slice().reverse()), { wash: SY.smet, washA: 1, w: 3, col: SY.smetD, key: 22250 }); shadeG(p.path, 0, 760, 0, 2200, '#e8dcc4', 0.35);
    for (let i = 0; i < 14; i++) { const k = ((t * 0.18 + i / 14) % 1), j = k * 6, a = Math.floor(j), f = j - a, l = L[a], r2 = R[a], l2 = L[a + 1], r3 = R[a + 1]; const lx = lerp(l[0], l2[0], f), rx = lerp(r2[0], r3[0], f), y = lerp(l[1], l2[1], f); pencil(spline([[lx + 20, y], [lerp(lx, rx, 0.5), y + 10 + k * 10], [rx - 20, y]], false, 5), { w: 3 + k * 6, col: '#ffffff', a: 0.8, pass2: false }); pencil([[lerp(lx, rx, 0.3), y + 20], [lerp(lx, rx, 0.45), y + 22]], { w: 2 + k * 3, col: '#d8cdb8', a: 0.6, pass2: false }); }
    for (const [x, y, s] of [[180, 1700, 1.4], [700, 1150, 0.7]]) jamDrop(x, y, s, 22251 + x);
  }
  function islands(t) {                                                 // главный остров-сырник (с табличкой), ягоды-валуны, бруствер творога
    syrnik(TX, TY + 70, 4.6, 0, { key: 22260 }); const r = rng(22261);
    push(TX, TY + 33, 1); ctx.save(); ctx.beginPath(); ctx.ellipse(0, 0, 280, 108, 0, 0, 6.3); ctx.clip();
    for (let i = 0; i < 26; i++) { const x = -260 + r() * 520, y = -96 + r() * 192; pencil(spline([[x, y], [x + 20 + r() * 30, y - 6 + r() * 12], [x + 50 + r() * 40, y + r() * 10]], false, 4), { w: 4 + r() * 6, col: i % 3 ? '#a85a14' : '#7a3a08', a: 0.5, pass2: false }); }
    for (let i = 0; i < 40; i++) ell(-260 + r() * 520, -96 + r() * 192, 3 + r() * 6, 2 + r() * 3, { wash: '#5a2a04', washA: 0.55, line: false });
    for (let i = 0; i < 7; i++) ell(-200 + r() * 360, -80 + r() * 70, 30 + r() * 30, 6 + r() * 6, { wash: '#ffe8a0', washA: 0.55, line: false });
    shadeG(pathOf(ellPts(0, 0, 280, 108, 0, 0, 30)), 280, 108, -280, -108, '#6a2a04', 0.25); ctx.restore();
    for (let i = 0; i < 6; i++) { const a = 0.3 + i * 0.45, x = Math.cos(a) * 280, y = Math.sin(a) * 108, dk = ((t * 0.5 + i * 0.3) % 1); pencil([[x, y], [x, y + 40 + dk * 90]], { w: 8, col: '#f8d070', a: 0.8, pass2: false }); ell(x, y + 40 + dk * 90, 7, 9, { wash: '#f8d070', washA: 1 - dk, line: false }); } pop(); for (let i = 0; i < 10; i++) ell(TX - 220 + r() * 440, TY + 20 + r() * 60, 8, 5, { wash: '#ffffff', washA: 0.85, line: false });
    if (t > EV.sn_sign) { const q = clamp((t - EV.sn_sign) / 0.6); for (let i = 0; i < 10; i++) { const a = -3.14 * (0.15 + i / 12); ell(TX + 40 + Math.cos(a) * 140 * q, TY + 10 + Math.sin(a) * 140 * q + q * q * 120, 10, 8, { wash: SY.tvorog, washA: 1 - q, w: 1, col: SY.tvorogD }); } }
    for (const [x, y, s] of [[TX + 330, TY + 160, 2.8], [TX - 380, TY + 180, 2.4], [TX + 520, TY + 260, 3.4]]) { jamDrop(x, y, s, 22262 + x); ell(x + 6 * s, y - 6 * s, 9 * s, 8 * s, { wash: '#a80e2a', washA: 1, w: 2, col: SY.jamD }); ell(x + 3 * s, y - 10 * s, 3 * s, 2 * s, { wash: SY.jamL, washA: 0.9, line: false }); }
    smetanaDollop(TX - 200, TY + 30, 2.4, 22265);
  }
  function sign(t) {                                                    // табличка «СЫР = ТВОРОГ»: «СЫР» срывается и летит к бруску
    if (t < EV.sn_sign) return; const k = popK(t, EV.sn_sign, 0.35); push(TX + 230, TY - 10, 1, Math.sin(t * 2) * 0.02); pencil([[0, 0], [0, -230 * k]], { w: 8, col: '#8a5a2a', pass2: false });
    push(0, -230 * k, k); rect(-170, -60, 340, 80, { wash: '#f4ecd0', washA: 1, w: 3, col: '#5a3a14' }); txt('= ТВОРОГ', 60, -6, 40, { font: 'Osw', col: '#2a1a0a' });
    const fl = t > EV.sn_take ? sm(clamp((t - EV.sn_take) / 0.7)) : 0; if (fl < 1) { const fx = lerp(-100, 220, fl), fy = lerp(-6, -60 - Math.sin(fl * 3.14) * 160, fl); txt('СЫР', fx, fy, 40, { font: 'Osw', col: '#c8241e', rot: fl * 0.6 }); } pop(); pop();
  }
  function cheeseBerg(t) {                                              // брусок сыра въезжает по маслу, как айсберг; получает бирку «СЫР»
    if (t < EV.sn_cheese) return; const k = sm(clamp((t - EV.sn_cheese) / 0.9)); const x = lerp(1500, 1030, k), y = 1330 + Math.sin(t * 1.6) * 6;
    cheeseWedge(x, y, 2.4, -0.05, { key: 22270 }); pencil(spline([[x - 300, y + 140], [x - 100, y + 160], [x + 200, y + 140]], false, 5), { w: 8, col: '#fff0b0', a: 0.6, pass2: false });
    if (t > EV.sn_take + 0.6) { const q = popK(t, EV.sn_take + 0.6, 0.35); push(x + 40, y - 190, q, 0.08); rect(-80, -40, 160, 70, { wash: '#f4ecd0', washA: 1, w: 3, col: '#5a3a14' }); txt('СЫР', 0, 8, 46, { font: 'Osw', col: '#c8241e' }); pop(); }
  }
  function passport(t, P) {                                             // паспорт падает на Тома-малыша; в паузе он его раскрывает
    if (t < EV.sn_pass - 0.2) return; const fall = clamp((t - EV.sn_pass + 0.2) / 0.55), open = t > EV.sn_gag ? sm(clamp((t - EV.sn_gag) / 0.4)) : 0;
    const land = t > EV.sn_land + 0.25 ? sm(clamp((t - EV.sn_land - 0.25) / 0.3)) : 0, x = fall < 1 ? P.x + 20 : lerp(P.x + 20, P.x + 230 * P.s, land), y = fall < 1 ? lerp(P.y - 1200, P.y - 420 * P.s, fall * fall) : lerp(P.y - 420 * P.s, P.y - 300 * P.s, land);
    push(x, y, 1, fall < 1 ? fall * 6 : 0); const w = 70 + 70 * open; rect(-w, -50, w * 2 * (open > 0 ? 1 : 0.5), 100, { wash: '#8a1a1e', washA: 1, w: 2.4, col: '#3a0608' });
    if (open > 0.3) { rect(-w + 8, -42, w - 12, 84, { wash: '#f4ecd8', washA: 1, w: 1.2 }); rect(6, -42, w - 12, 84, { wash: '#f4ecd8', washA: 1, w: 1.2 }); syrnik(-w / 2 + 2, -6, 0.42, 0, { key: 22280 }); txt('СЫРНИК', w / 2 + 2, -18, 20, { font: 'Osw', col: '#3a1a08' }); txt('1550-е', w / 2 + 2, 6, 18, { font: 'Hand', col: '#8a1a0e' }); txt('сыр = творог', w / 2 + 2, 30, 15, { font: 'Hand', col: '#3a1a08' }); }
    else { txt('ПАСПОРТ', 0, -4, 18, { font: 'Osw', col: '#e8c060' }); ell(0, 22, 12, 12, { wash: '#e8c060', washA: 1, line: false }); } pop();
    if (t > EV.sn_land && t < EV.sn_land + 0.5) { const q = (t - EV.sn_land) / 0.5; push(P.x, P.y - 640 * P.s, 0.8 + q * 0.5); txt('ТУК!', 0, 0, 56, { font: 'Osw', col: '#fff4d0', a: 1 - q }); pop(); }
  }
  function front(t) {                                                   // передний план: край ягоды и лист мяты сверху, сахарная пудра, капля сметаны
    mintLeaf(-260, -300, 7, 2.6, 22290); push(1400, 2080, 1); jamDrop(0, 0, 6, 22291); pop(); push(-200, 2060, 1); smetanaDollop(0, 0, 5, 22292); pop();
    motes(36, [-300, -400, 1400, 1700], '#ffffff', t, 22293, { sp: 40, sz: 4, a: 0.75, wob: 10 }); motes(20, [-300, -400, 1400, 1700], '#ffffff', t, 22294, { sp: 20, sz: 2, a: 0.6, wob: 6 });
  }
  WORLD.syrnik = (t, u, cat) => {
    lay(18, () => { giant(t); }); lay(8, () => { rim(t); haze('#ffe8c0', 0.06); });
    lay(3, () => { floor(t); shaft(-200, -300, 360, 2600, -0.3, 'rgba(255,240,200,1)', 0.14); });
    lay(1.6, () => { river(t); cheeseBerg(t); });
    lay(1, () => { islands(t); sign(t); cat(); lightPool(TX, TY + 40, 300, 70, 'rgba(255,240,200,1)', 0.3); castShadow(TX - 40, TY + 30, 120, 120, 0.6, 0.3); });
    lay(0.6, () => { front(t); moodDark(560, 1200, 520, 1500, '#3a1a08', 0.35); });
  };
  DIR.syrnik = {
    outfit: 'dacha', light: { side: -1, rim: '#fff0c8' }, grade: ['#ffb060', 0.06],
    act: () => [[S0.syrnik, 'grin'], [EV.sn_jump, 'proud'], [EV.sn_sign, 'laugh'], [EV.sn_cheese, 'suspicious'], [EV.sn_take, 'shock'], [EV.sn_pass, 'sideeye'], [EV.sn_land, 'shock'], [EV.sn_gag + 0.2, 'proud'], [EV.sn_gag + 0.6, 'wink']],
    pose: (t, u, b) => { const raft = t < EV.sn_jump, jk = clamp((t - EV.sn_jump) / 0.6), rk = clamp((t - S0.syrnik) / Math.max(0.1, EV.sn_jump - S0.syrnik));
      const x = raft ? lerp(260, 400, rk) : lerp(400, TX - 40, jk), y = raft ? lerp(1700, 1560, rk) + Math.sin(t * 3) * 6 : lerp(1560, TY + 30, jk) - Math.sin(jk * 3.14) * 220;
      const hit = t > EV.sn_land && t < EV.sn_land + 0.35, plant = t > EV.sn_sign - 0.1 && t < EV.sn_sign + 0.5;
      return Object.assign(b, { x, y, s: 0.7, flip: 0, walk: !raft && jk < 1 ? t * 8 : undefined, rot: raft ? Math.sin(t * 2.4) * 0.04 : 0, look: t < EV.sn_cheese ? [0.5, -0.3] : t < EV.sn_pass ? [0.9, -0.2] : [0.1, -0.9],
        hand: plant ? [150, -200] : raft ? [120, -180 + Math.sin(t * 5) * 40] : [130, -260], handF: [-110, -240], tailUp: !raft, squash: hit ? 0.14 : (b.squash || 0), tilt: hit ? 0.1 : 0 }); },
    afterCat: (t, u, P) => {
      if (t < EV.sn_jump + 0.2) { push(P.x - 10, P.y + 30, 1, Math.sin(t * 2.4) * 0.04); const sp = ell(0, 0, 150, 36, { wash: '#c8c8d0', washA: 1, w: 2.4, col: '#4a4a58' }); shadeG(sp.path, 0, -30, 0, 36, '#6a6a78', 0.45); pencil([[140, -6], [320, -40]], { w: 16, col: '#b8b8c4', pass2: false }); ell(-60, -10, 40, 8, { wash: '#ffffff', washA: 0.6, line: false }); pop(); mintLeaf(P.x + 120 * P.s, P.y - 160 * P.s + Math.sin(t * 5) * 30, 1.4, 2.4 + Math.sin(t * 5) * 0.4, 22299); }
      passport(t, P);
    },
    cam: () => [[S0.syrnik, 560, 1100, 0.2], [EV.sn_jump, 460, 1300, 0.28], [EV.sn_sign, 560, 1180, 0.3], [EV.sn_cheese, 720, 1150, 0.24], [EV.sn_take, 760, 1100, 0.26], [EV.sn_pass, 560, 1180, 0.3], [EV.sn_gag, 540, 1150, 0.34], [S1.syrnik, 540, 1150, 0.36]]
  };
  TRANS_IN.syrnik = { a: 0.25, b: 0.5, runA: 0.5, fx(k, t, A, B) {         // капля сметаны падает и расплывается кругом
    drawBuf(A, 1, 540, 960); const fallK = clamp(k / 0.4), y = lerp(-100, 960, fallK * fallK), R = k > 0.4 ? lerp(60, 1400, sm((k - 0.4) / 0.6)) : 60;
    if (k > 0.4) { const pts = []; for (let i = 0; i < 40; i++) { const a = i / 40 * 6.283; pts.push([540 + Math.cos(a) * R * (1 + Math.sin(a * 5 + t * 6) * 0.05), 960 + Math.sin(a) * R * (1 + Math.cos(a * 4) * 0.05)]); } const pth = pathOf(spline(pts, true, 4)); inPath(pth, () => drawBuf(B, 1, 540, 960)); scr(() => pencil(spline(pts, true, 4), { w: 24, col: SY.smet, pass2: false, gap: false })); }
    else scr(() => { blob([[540, y - 90], [570, y - 20], [580, y + 30], [540, y + 60], [500, y + 30], [510, y - 20]], { wash: SY.smet, washA: 1, w: 2, col: SY.smetD }); ell(525, y + 10, 10, 18, { wash: '#ffffff', washA: 0.9, line: false }); });
  } };
})();
