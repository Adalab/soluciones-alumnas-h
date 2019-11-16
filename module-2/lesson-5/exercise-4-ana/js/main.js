'use strict';

const background = document.querySelector('.background');

window.addEventListener('scroll', function changeElement() {
    let y = window.scrollY;
    if (y > 250) {
        background.style.backgroundColor = '#ffffff';
    } else if (y < 250) {
        background.style.backgroundColor = 'red';

    }


});