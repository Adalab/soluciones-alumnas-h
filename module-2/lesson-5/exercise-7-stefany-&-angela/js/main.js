'use strict';

const button = document.querySelector('button');

button.addEventListener("click", changeColor)

function changeColor () {
  button.classList.toggle('red');
  }

