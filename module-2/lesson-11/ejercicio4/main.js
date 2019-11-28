'use strict';

const inputName = document.querySelector('#name');
const printedName = document.querySelector('#printed-name');

function printName(){
    localStorage.setItem('name', inputName.value);
    printedName.innerHTML = `Beautiful name, ${ localStorage.getItem('name')}.`;
}

function getName(){
    inputName.value = localStorage.getItem('name');
    printedName.innerHTML = `Beautiful name, ${ localStorage.getItem('name')}.`;
}

inputName.addEventListener('keyup', printName);
window.addEventListener('load', getName);