'use strict';

// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(secretLetter); // devuelve "y" si se coloca antes del siguiente console.log y "x" si se coloca al revés.
console.log(mySecretLetter()); // devuelve "x"
