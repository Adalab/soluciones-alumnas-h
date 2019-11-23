'use strict';

const h1 = document.querySelector('.js-h1');

function handleElementInput() {
    console.dir(h1);
}

h1.addEventListener('click', handleElementInput);