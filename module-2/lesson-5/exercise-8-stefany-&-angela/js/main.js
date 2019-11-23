'use strict';

const firstButton = document.querySelector('.firstButton');
const secondButton = document.querySelector('.secondButton');

firstButton.addEventListener("click", changeColor);
secondButton.addEventListener("click", changeColor);

function changeColor () {
  event.currentTarget.classList.toggle('red');
  }

