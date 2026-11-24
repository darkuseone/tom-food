/* 027 — костюмы выпуска «Кетчуп»: Том-малыш-водолаз с фартуком (diverK — в бутылке кетчупа), китайский торговец Фуцзяни (yunK — бордовая куртка
   с каймой + конусная шляпа, вариант yunA). Остальное — готовое: diner, victorianA, pharmA, victorian, courtA, sailorA, homeB. */
(() => {
  if (OUTFIT.diver) OUTFIT.diverK = Object.assign({}, OUTFIT.diver, { apron: 1 });                                                    // водолаз с фартуком (Том-малыш в бутылке)
  if (OUTFIT.yunA) OUTFIT.yunK = Object.assign({}, OUTFIT.yunA, { top: '#7a2228', topD: '#3a0a10', topL: '#a8464a', shirt: '#7a2228' });   // торговец Фуцзяни: бордовая куртка + конусная шляпа
})();
