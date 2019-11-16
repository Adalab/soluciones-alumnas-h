'use strict';

const button = document.querySelector('.btn');
button.addEventListener('click', function clickButton() {
    const changeText = document.querySelector('.paragraph');
    changeText.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
});