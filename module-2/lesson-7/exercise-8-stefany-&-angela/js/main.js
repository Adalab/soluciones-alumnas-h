'use strict';

const buttonElement = document.querySelectorAll('.button');
const bodyElement = document.querySelector('.body');

for(let i = 0; i < buttonElement.length; i++){
  buttonElement[i].addEventListener('click', function changeColor() {
    bodyElement.classList.toggle('red'); 
  });
}

console.log(buttonElement);
