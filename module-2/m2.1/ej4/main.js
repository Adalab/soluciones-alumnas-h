'use strict';

// document.querySelector('h1').innerHTML = '¡Hola mundo!';

const titlePrimary = document.querySelector('h1');
const liPrimary = document.querySelector ('.first-li')
const liSecondary = document.querySelector ('.second-li')
titlePrimary.innerHTML = titlePrimary.innerHTML + ' '+ liPrimary.innerHTML;