'use strict';


function getEl(a) {
    const result = document.querySelector(a);
    return result;
}

const btnEl = getEl('.btn');

console.log(btnEl.innerHTML);