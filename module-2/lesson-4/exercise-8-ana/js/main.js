'use strict';

// modificamos una variable de ámbito global
let secretLetter = 'y';

function mySecretLetter() {
    secretLetter = 'x';
    return secretLetter;
}

//PORQUE LA CONSTANTE QUE ESTÁ DENTRO DE LA FUNCIÓN AL NO ESTAR DECLARADA PASA DIRECTAMENTE A SER GLOBAL 
// Y PISA EL VALOR QUE ESTÁ MÁS ARRIBA, QUE TAMBIÉN ES GLOBAL.

// console.log(mySecretLetter()); // devuelve "x"
// console.log(secretLetter); // devuelve "x"


//EN ESTE CASO COGE EL VALOR DE LA CONSTANTE GLOBAL DE ARRIBA Y LA CONSTANTE DE DENTRO NO EMPIEZA A FUNCIONAR
//HASTA QUE INVOCAMOS LA FUNCIÓN.

console.log(secretLetter); // devuelve "y"
console.log(mySecretLetter()); // devuelve "x"