'use strict';


function parImpar(number) {
    const numberPar = !(number % 2);
    if (numberPar) {
        return true;
    } else {
        return false;
    }
}

const parImparResult = parImpar(document.querySelector('.btn'));

console.log(parImparResult);