'use strict';

const IVA = 2.1
const number = 10

function numberIVA(a) {
    const result = a + IVA;
    return result;
}

const numberResult = numberIVA(number)

console.log(`Precio sin IVA: ${number}, IVA: ${IVA} y Total: ${numberResult}`);