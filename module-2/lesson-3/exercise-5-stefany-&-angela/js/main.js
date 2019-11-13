'use strict';

const container = document.querySelector('.container');
const title = document.querySelector('.title');
const paragraph = document.querySelector('.paragraph');

const warning = container.classList.contains(warning);
const error = container.classList.contains(error);
const sucess = container.classList.contains(sucess);

if (warning === true){
  title.innerHTML = 'AVISO';
  paragraph.innerHTML = 'Tenga cuidado';
} else if (error === true){
  title.innerHTML = 'ERROR';
  paragraph.innerHTML = 'Ha surgido un error';
} else if (sucess === true){
  title.innerHTML = 'CORRECTO';
  paragraph.innerHTML = 'Los datos son correctos';
}
