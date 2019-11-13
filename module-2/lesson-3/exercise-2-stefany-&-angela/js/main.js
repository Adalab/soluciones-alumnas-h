'use strict';

//let name = 'Stefany';

let name = '';

let userName = 'Bienvenida, ' + name + '.';

const otherName = 'Lo siento pero el usuario que has introducido no está registrado.'

if (name === 'Stefany' || name === 'Ángela') {
  console.log(userName);
} else {
  console.log(otherName);
}
