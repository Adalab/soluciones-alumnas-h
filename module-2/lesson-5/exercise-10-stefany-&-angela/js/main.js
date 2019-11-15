'use strict';

/*Calculador de modelo de caja
Como hemos visto en las clases anteriores, en CSS tenemos dos tipos de cálculo para las dimensiones de un elemento: border-box y content-box. Vamos a realizar un calculador al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, y el ancho total de la caja en una cadena como esta: El ancho del contenido es: 30px y el ancho total de la caja es: 34px.
La función tendrá 4 parámetros:
el primero será un booleano para especificar si es border-box o no.
el segundo será un número con el width de la caja.
el tercero será un número con el padding.
el cuarto será un número con el border-size.
Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola.*/


const myDIV = document.querySelector('.myDiv');
const myBoxSizing = myDIV.style.boxSizing;
const myWidth = document.querySelector('.myDiv').style.width;
const myPadding = document.querySelector('.myDiv').style.padding;
const myBorder = document.querySelector('.myDiv').style.borderWidth;
function calcBoxSizing () {
  if (myBoxSizing === 'border-box') {
    return true;
  } else {
    return false;
  }
}

let divSize = 'hi';
  if (calcBoxSizing === true) {
    contentWidth = myWidth - (myPadding * 2) - (myBorder * 2);
    divSize = `El ancho del contenido es: ${myWidth} y el ancho total de la caja es: ${contentWidth}`;
    console.log(divSize);
  } else if (calcBoxSizing === false) {
    contentWidth = myWidth + (myPadding * 2) + (myBorder * 2);
    divSize = `El ancho del contenido es: ${myWidth} y el ancho total de la caja es: ${contentWidth}`;
    console.log(divSize);
  }
  
console.log(divSize);