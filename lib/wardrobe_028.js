/* 028 — костюмы выпуска «Круассан»: австрийский офицер Цанг — гусарский доломан с фартуком (hussarA). Остальное — готовое: parisA, uchenikA,
   medcook, archA, courtA, chefB (Том-малыш), tyrolA. */
(() => {
  if (OUTFIT.hussar) OUTFIT.hussarA = Object.assign({}, OUTFIT.hussar, { apron: 1 });                     // австрийский офицер (Цанг) с фартуком
})();
