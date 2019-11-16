'use strict';

const button = document.querySelector('.btn');

button.addEventListener('click', function showTextInput() {
    const textInput = document.querySelector('.input');
    console.log(`Hola ${textInput.value}`);
});