'use strict';

/* */
function getEl(element) {
    return document.querySelector(element);
}

const getElArrow = element => document.querySelector(element);
/* */


const btnEl = getEl('.btn');

console.log(btnEl.innerHTML);

const textToNumber = parseInt(btnEl.innerHTML)



function parImpar(number) {
    return !(number % 2);
}

const parImparArrow = number => !(number % 2);


const parImparResult = parImpar(textToNumber);

console.log(parImparResult);

console.log(parImpar(textToNumber));