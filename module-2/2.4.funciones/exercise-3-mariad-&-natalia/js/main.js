'use strict';

function taxPrice (a){
    return `Precio sin IVA: ${a}, IVA: ${a * 21 / 100} y Total: ${a + a * 21 / 100};`

}
const myPrice = taxPrice(10);
console.log(myPrice);