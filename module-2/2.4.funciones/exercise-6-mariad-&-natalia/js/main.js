'use strict';

const selectorTitle = '.title';

function getEl (a){
    return document.querySelector(a);
}

const titleEl = getEl(selectorTitle);

if (titleEl===null){
    console.error(`No existe ningún elemento con clase, id o tag llamado ${selectorTitle}`);
} else {
    console.log(titleEl);
}

/*const selectorImage = '.image';

function getEl (a){
    return document.querySelector(a);
}

const imageEl = getEl(selectorImage);

if (imageEl===null){
    console.error(`No existe ningún elemento con clase, id o tag llamado ${selectorImage}`);
} else {
    console.log(imageEl);
}*/