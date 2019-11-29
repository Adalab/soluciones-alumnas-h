'use strict'

const numbers = [1, 2, 3]
const list = document.querySelector('.list');

function createElements() {
    for (let i = 0; i < numbers.length; i++) {
        const newElement = document.createElement('li')
        const newContent = document.createTextNode(`nuevo item ${numbers[i]}`);
        newElement.appendChild(newContent)
        list.appendChild(newElement);
    }
}


createElements()
/*list.remove();*/