'use strict';
/*Hemos preparado un HTML con tres tarjetas. Al pinchar en un elemento del listado tenemos que:
Añadir la clase .teacher--selected si no la tiene, o quitarla si la tiene.
Modificar el texto del span .favorite sustituyéndolo por 'Quitar' si en ese momento contiene 'Añadir', o por 'Añadir' si contiene 'Quitar'.
Nota: con querySelector buscamos un elemento dentro de otro. Hasta ahora lo habíamos usado para buscar dentro de document (todo nuestro documento HTML), con document.querySelector().
Si tuviéramos una constante llamada, por ejemplo, sectionAboutElement en la que hemos guardado un elemento de HTML, podríamos buscar dentro él otro elemento, tal que así sectionAboutElement.querySelector().*/

let li = document.querySelectorAll('.teacher');

function changeColor () {
  event.currentTarget.classList.toggle('teacher--selected');
  const chosenTeacher = event.currentTarget;

  if (chosenTeacher.classList.contains('teacher--selected')) {
    chosenTeacher.querySelector('.favorite').innerHTML = 'Quitar';
    
} else {
    chosenTeacher.classList.remove('teacher--selected');
    chosenTeacher.querySelector('.favorite').innerHTML = 'Añadir';
}
  }

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener('click', changeColor); }


