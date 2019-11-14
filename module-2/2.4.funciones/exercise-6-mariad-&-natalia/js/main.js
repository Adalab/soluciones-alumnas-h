'use strict';

const selectorTitle = '.image';

function getEl (a){
    return document.querySelector(a);
}

const titleEl = getEl(selectorTitle);

if (titleEl===null){
    console.error(`No existe ningún elemento con clase, id o tag llamado ${selectorTitle}`);
} else {
    console.log(titleEl);
}
