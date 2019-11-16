'use strict';

const background = document.querySelector('body');

window.addEventListener('keypress', function keyElement() {
    let x = event.key;
    if (x === "r") {
        background.style.backgroundColor = 'red';
    } else if (x === "m") {
        background.style.backgroundColor = 'purple';
    }
});


/*leer README.md*/

window.addEventListener('keypress', function keyElement() {
    console.log('me pulsan, en general');
});

document.querySelector('.left').addEventListener('keypress', function keyElement() {
    console.log('izquierda: me pulsan');
});

document.querySelector('.right').addEventListener('keypress', function keyElement() {
    console.log('derecha: me pulsan');
});