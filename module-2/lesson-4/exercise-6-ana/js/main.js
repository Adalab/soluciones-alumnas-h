'use strict';


function getEl(selector) {
    const element = document.querySelector(selector);
    if (element === null) {
        console.log(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
        return null;
    } else {
        return element;
    }
}

const btnEl = getEl('.btn');

console.log(btnEl.innerHTML);

const hEl = getEl('.h3');

console.log(hEl.innerHTML);

const ulEl = getEl('.ul'); // este es el que nos da error porque no aparece