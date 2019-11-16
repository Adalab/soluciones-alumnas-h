'use strict';

let container = document.querySelector('.container');
const title = document.querySelector('.title');
const paragraph = document.querySelector('.paragraph');



if (container.classList.contains('warning')) {
    title.innerHTML = 'AVISO';
    paragraph.innerHTML = 'Tenga cuidado';

}

if (container.classList.contains('error')) {
    title.innerHTML = 'ERROR';
    paragraph.innerHTML = 'Ha surgido un error';

}

if (container.classList.contains('success')) {
    title.innerHTML = 'CORRECTO';
    paragraph.innerHTML = 'Los datos son correctos';

}

console.log(title.innerHTML);
console.log(paragraph.innerHTML);