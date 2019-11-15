'use strict';

/*
Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Para no tener que escribir document.querySelector(...) tantas veces una compañera ha sugerido hacer una función llamada getEl.*/

function getEl (htmlElement) {
  return document.querySelector(htmlElement);
}

const elementLi = getEl('ul');

if (elementLi===0 || elementLi===undefined || elementLi===null) {
  console.log(`No existe ningún elemento con clase, id o tag llamado (arguments [0])`);
} else {
  console.log (elementLi);
}
