'use strict';

function getEl (a){
    return document.querySelector(a);
}
const titleEl = getEl('.title');
console.log(titleEl);

const imageEl = getEl('.image');
console.log(imageEl);

const textEl = getEl('.text');
console.log(textEl);