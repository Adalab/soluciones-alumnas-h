'use strict';

const button = document.querySelector('.js-btn');

function handleElementClick(event) {
    console.log(event);
    //even.type :es una propiedad del evento


};

button.addEventListener('click', handleElementClick);