'use strict';

function changeColor(event) {

  let key = event.which || event.keyCode;

  const myDiv = document.querySelector('.myDiv');

  console.log("Presionada: " + key);
   
  if (key === 114) { //114 es el código que nos devuelve al pulsar la tecla "r"
    myDiv.classList.remove('purpleBackground');
    myDiv.classList.add('redBackgound');

  } else if (key === 109)  { //114 es el código que nos devuelve al pulsar la tecla "m"
    myDiv.classList.remove('redBackgound');
    myDiv.classList.add('purpleBackground');
  }
}


document.addEventListener("keypress", changeColor);
