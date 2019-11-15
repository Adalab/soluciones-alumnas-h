'use strict';

function calcPrice (price) {
  const IVA = price * 0.21;
  const priceWithIVA = price + IVA;
  return 'Precio sin IVA: ' + price + '$. IVA: ' + IVA + '$. Total: ' + priceWithIVA +'$.';
}

const avocadoPrice = calcPrice (3);

console.log(avocadoPrice);
