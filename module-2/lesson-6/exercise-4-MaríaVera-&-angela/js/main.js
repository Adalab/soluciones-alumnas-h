'use strict';
const buttonElement = document.querySelector('.button');

function logEvent(event){
  console.log(event); // or console.log(ev);
  console.log(event.type, typeof event.type);
}

buttonElement.addEventListener('click', logEvent);
