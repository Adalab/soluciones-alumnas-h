'use strict';
const myDiv = document.querySelector('.myDiv');
let y = window.scrollY;

window.onscroll = function() {
  if (window.pageYOffset > 250) {
    myDiv.classList.add('redBackgound');
  } else {
    myDiv.classList.remove('redBackgound');
  }
}

console.log(y);