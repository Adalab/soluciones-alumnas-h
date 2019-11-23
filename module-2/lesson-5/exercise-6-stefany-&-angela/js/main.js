'use strict';

const text = document.querySelector('.text');
const input = document.querySelector('.input');
function AddText() {
  document.querySelector('.text').innerHTML = event.currentTarget.value;
}

input.addEventListener('keypress', AddText);
