/* 018 — костюмы выпуска «Мамалыга»: молдавский крестьянин XIX–XX в. `moldA` — белая льняная рубаха-ие с красно-чёрной вышивкой (ромбы/крестики) по вороту, планке и плечам,
   безрукавка-кептар из рыжей овчины с цветными розетками и светлой меховой опушкой по бортам и проймам, красный тканый пояс-брыу, тёмные штаны + шапка `cushma` — высокая чёрная
   каракулевая кушма (кудрявые колечки, чуть сплющенная наклонённая вершина). Трофей №18 на фартуке — ломтик мамалыги с крошками и белая крошка брынзы. */
(() => {
  Object.assign(OUTFIT, {
    moldA: { top: '#f4efe2', topD: '#b8ae94', topL: '#ffffff', pants: '#23201f', shirt: '#f4efe2', detail: 'mold', hat: 'cushma', boots: 'soft', cuff: '#f4efe2', apron: 1 },
  });
  const emb = (x0, y0, n, dx, dy, k) => {                                  // ряд вышитых ромбов: красный ромб, чёрный крестик (геометрия ie)
    for (let i = 0; i < n; i++) { const x = x0 + i * dx, y = y0 + i * dy;
      poly([[x, y - 5], [x + 5, y], [x, y + 5], [x - 5, y]], { wash: '#c8201e', washA: 1, w: 0.9, col: '#5a0a0a', key: 18300 + k + i });
      pencil([[x - 2.2, y], [x + 2.2, y]], { w: 1.2, col: '#16110e', pass2: false }); pencil([[x, y - 2.2], [x, y + 2.2]], { w: 1.2, col: '#16110e', pass2: false }); }
  };
  const rosette = (cx, cy, col, k) => {                                    // розетка на кептаре: 6 лепестков + жёлтая серединка
    for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; ell(cx + Math.cos(a) * 5.4, cy + Math.sin(a) * 5.4, 3.6, 3.6, { wash: col, washA: 1, w: 0.8, col: '#2a0a0a', key: 18320 + k * 8 + i }); }
    ell(cx, cy, 2.6, 2.6, { wash: '#f0c030', washA: 1, line: false });
  };
  COST6.mold = (OF, b, t, bp, L) => {
    hatch(bp.path, bp.bb, { gap: 7, a: 0.1, col: OF.topD, ang: 0.8, key: 18200, w: 1.1 });              // льняная фактура рубахи
    shadeG(bp.path, -L.side * 104, 0, L.side * 40, 0, OF.topD, 0.3);
    for (const sd of [-1, 1]) {                                            // вышивка на плечах (альтица): полоса ромбов вдоль плеча
      pencil([[sd * 52, -244 + b], [sd * 88, -214 + b]], { w: 12, col: '#e9e2d0', pass2: false });
      emb(sd * 56, -241 + b, 4, sd * 9, 7.2, sd > 0 ? 0 : 10);
      pencil([[sd * 50, -250 + b], [sd * 90, -218 + b]], { w: 1.2, col: '#16110e', a: 0.7, pass2: false }); }
    // ворот-планка: красно-чёрная вышивка вокруг шеи и вниз по груди
    const cl = shape(spline([[-40, -252 + b], [0, -240 + b], [40, -252 + b], [34, -234 + b], [0, -224 + b], [-34, -234 + b]], true, 5), { wash: '#efe8d6', washA: 1, w: 1.8, col: L, key: 18210 });
    emb(-30, -244 + b, 7, 10, 1.6, 20);
    pencil([[-34, -230 + b], [0, -221 + b], [34, -230 + b]], { w: 2.4, col: '#c8201e', a: 0.95, pass2: false });
    pencil([[-34, -227 + b], [0, -218 + b], [34, -227 + b]], { w: 1.2, col: '#16110e', a: 0.9, pass2: false });
    for (let k = 0; k < 3; k++) emb(0, -214 + k * 12 + b, 1, 0, 0, 40 + k);
    // кептар из овчины: две полы с проймами, мех по краям, розетки
    for (const sd of [-1, 1]) {
      const v = poly([[sd * 12, -246 + b], [sd * 58, -240 + b], [sd * 64, -178 + b], [sd * 60, -112 + b], [sd * 10, -112 + b], [sd * 14, -176 + b]], { wash: '#a9622a', washA: 1, w: 2.2, col: L, key: 18230 + sd });
      shadeG(v.path, sd * 64, 0, sd * 12, 0, '#4a240c', 0.5);
      ctx.save(); ctx.clip(v.path);
      for (let k = 0; k < 8; k++) pencil([[sd * 18 + k * sd * 6, -240 + b], [sd * 16 + k * sd * 6, -112 + b]], { w: 1, col: '#6a3410', a: 0.3, pass2: false });   // кожаные швы
      ctx.restore();
      pencil([[sd * 52, -236 + b], [sd * 56, -176 + b]], { w: 5, col: '#d49a5a', a: 0.35, pass2: false });                                            // блик кожи
      rosette(sd * 36, -210 + b, '#d9282a', sd > 0 ? 0 : 1); rosette(sd * 34, -170 + b, '#2f8a3a', sd > 0 ? 2 : 3); rosette(sd * 36, -134 + b, '#d9282a', sd > 0 ? 4 : 5);
      for (let k = 0; k < 4; k++) blob([[sd * 28, -190 + k * 20 + b], [sd * 40, -196 + k * 20 + b], [sd * 46, -186 + k * 20 + b]], { wash: '#3a8a3a', washA: 0.9, w: 0.7, col: '#0a2a0a', key: 18260 + k + (sd > 0 ? 0 : 4) });   // зелёные листики
      // мех: опушка по внутреннему борту, проймам (вверху у плеча) и подолу
      const fur = (pts, k) => { for (let i = 0; i < pts.length; i++) { const [x, y] = pts[i], r = rng(18270 + k * 40 + i); ell(x, y, 5.6 + r() * 1.6, 4.4, { wash: '#f7f0df', washA: 1, w: 0.9, col: '#b4a888', rot: r() * 3, key: 18280 + k * 40 + i }); } };
      const edge = []; for (let i = 0; i <= 11; i++) edge.push([sd * (12 + 0 * i) + sd * (i % 2) * 3, -244 + i * 11.8 + b]); fur(edge, sd > 0 ? 0 : 1);   // борт
      const arm = []; for (let i = 0; i <= 6; i++) arm.push([sd * (58 + i * 1.2), -238 + i * 10.5 + b]); fur(arm, sd > 0 ? 2 : 3);                       // пройма
      const hem = []; for (let i = 0; i <= 5; i++) hem.push([sd * (12 + i * 9.6), -112 + b + (i % 2) * 2]); fur(hem, sd > 0 ? 4 : 5);                    // подол
    }
    // красный тканый пояс-брыу с полосами и бахромой
    const br = rect(-92, -130 + b, 184, 22, { wash: '#c8201e', washA: 1, w: 2.2, col: L, key: 18290 });
    shadeG(br.path, -L.side * 92, 0, L.side * 92, 0, '#4a0808', 0.45);
    ctx.save(); ctx.clip(br.path);
    pencil([[-92, -125 + b], [92, -125 + b]], { w: 2.4, col: '#16110e', a: 0.85, pass2: false }); pencil([[-92, -113 + b], [92, -113 + b]], { w: 2.4, col: '#16110e', a: 0.85, pass2: false });
    pencil([[-92, -119 + b], [92, -119 + b]], { w: 1.6, col: '#f0c030', a: 0.9, pass2: false });
    for (let i = 0; i < 18; i++) pencil([[-86 + i * 10, -128 + b], [-80 + i * 10, -110 + b]], { w: 1.2, col: '#ffb0a0', a: 0.35, pass2: false });
    ctx.restore();
    for (let i = 0; i < 6; i++) pencil([[L.side * (84 + i * 2), -108 + b], [L.side * (86 + i * 2.6), -82 + b + (i % 2) * 6]], { w: 2.2, col: i % 2 ? '#c8201e' : '#16110e', pass2: false });   // концы пояса с кистями
  };
  HAT6.cushma = (t, o, fx, L) => {                                          // кушма: высокий усечённый конус чёрного каракуля, вершина сплющена и наклонена
    push(fx * 0.3, -96, 0.82);
    const lean = 16;                                                        // наклон вершины в сторону взгляда
    const c = blob([[-100, 18], [-98, -14], [-86, -70], [-70, -130], [-52 + lean, -186], [-30 + lean, -208], [10 + lean, -214], [44 + lean, -206], [60 + lean, -180], [72 + lean * 0.5, -126], [90, -70], [100, -14], [100, 18], [0, 24]], { wash: '#1c1a1a', washA: 1, w: 2.8, col: TM.line, key: 18400 });
    shadeG(c.path, 112, 0, -50, 0, '#000', 0.55);
    ctx.save(); ctx.clip(c.path);                                           // кудрявая фактура: ряды мелких колечек-завитков (мельче к вершине)
    for (let row = 0; row < 16; row++) {
      const y = 12 - row * 14, k = clamp(1 - Math.max(0, -y) / 330, 0.45, 1), half = 98 * k, lx = clamp((-y - 60) / 150, 0, 1) * lean, n = Math.round(11 * k + 2);
      for (let i = 0; i < n; i++) { const r = rng(18420 + row * 20 + i), x = -half + (i + 0.5 + (row % 2) * 0.5) * (2 * half / n) + lx;
        pencil(ellPts(x, y + r() * 3, 4.6 + r() * 1.6, 3.6, r() * 1.2, 0.35, 9), { w: 1.3, col: (i + row) % 3 ? '#4e4a4a' : '#847e7e', a: 0.75, pass2: false }); } }
    ctx.restore();
    pencil(spline([[-70, -80], [-54, -140], [-34 + lean, -196]], false, 5), { w: 5, col: '#9a9494', a: 0.3, pass2: false });   // блик на завитках
    ell(10 + lean, -208, 36, 8, { wash: '#262424', washA: 1, w: 2, col: TM.line, rot: -0.1, key: 18401 });   // сплющенная вершина
    for (let i = 0; i < 6; i++) pencil(ellPts(-14 + lean + i * 8.5, -208 + (i % 2) * 2, 3.8, 2.8, 0, 0.35, 8), { w: 1.2, col: '#847e7e', a: 0.8, pass2: false });
    rect(-102, 2, 204, 20, { wash: '#161414', washA: 1, w: 2, col: TM.line, key: 18402 });   // завёрнутый околыш
    for (let i = 0; i < 15; i++) pencil(ellPts(-96 + i * 13.6, 12, 4.8, 3.6, 0, 0.35, 8), { w: 1.2, col: '#6a6464', a: 0.8, pass2: false });
    pop();
  };
  const _c18e = costume5;
  costume5 = function (OF, bob, t, bp, L, o) {
    _c18e(OF, bob, t, bp, L, o); if (!(OF.apron || (o && o.apron))) return; const b = bob;
    const x = 4, y = -168 + b;                                              // пятно-трофей №18: ломтик мамалыги + крошка брынзы
    const sl = blob([[x - 16, y - 8], [x - 12, y - 12], [x + 12, y - 12], [x + 16, y - 8], [x + 17, y + 6], [x + 12, y + 11], [x - 12, y + 11], [x - 17, y + 6]], { wash: '#f0c830', washA: 1, w: 1.4, col: '#9a6c0c', key: 18500 });
    shadeG(sl.path, x + 17, y + 11, x - 17, y - 12, '#b88410', 0.45);
    pencil([[x - 12, y - 8], [x + 8, y - 9]], { w: 2.4, col: '#fff2a0', a: 0.7, pass2: false });                          // блик
    for (let i = 0; i < 6; i++) { const r = rng(18510 + i); ell(x - 14 + r() * 28, y - 8 + r() * 16, 1.2, 1.2, { wash: '#b88410', washA: 0.8, line: false }); }
    for (let i = 0; i < 5; i++) { const r = rng(18520 + i); ell(x + 20 + r() * 12, y + 8 + r() * 8, 1.7, 1.4, { wash: '#f0c830', washA: 1, w: 0.7, col: '#9a6c0c' }); }   // крошки мамалыги
    blob([[x - 26, y + 14], [x - 20, y + 10], [x - 14, y + 14], [x - 18, y + 20], [x - 25, y + 19]], { wash: '#fffaf0', washA: 1, w: 1.2, col: '#a8a090', key: 18530 });   // крошка брынзы
    pencil([[x - 23, y + 14], [x - 19, y + 13]], { w: 1, col: '#c8c0b0', a: 0.8, pass2: false });
  };
})();
