'use strict';

const inputElement = document.querySelector('.input');

function keypressHandle(event) {

    const inputValue = event.currentTarget.value;
    const text = document.querySelector('.text');
    text.innerHTML = inputValue;

}

inputElement.addEventListener('keypress', keypressHandle);