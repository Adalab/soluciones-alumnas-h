'use strict';

/*
Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Para no tener que escribir document.querySelector(...) tantas veces una compañera ha sugerido hacer una función llamada getEl.*/



function getEl(htmlElement) {
  return document.querySelector(htmlElement);
}

const btnEl = getEl('.btn')

console.log(btnEl.innerHTML);