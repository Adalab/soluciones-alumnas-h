'use strict';

/*El primer año de un perro equivale a 15 años de humano
El segundo año de un perro equivale a nueve años de humano
A partir del tercero, cada año de perro equivale a 5 años de humano.*/

const dogAge = 4;

const firstYear = 15;

const secondYear = firstYear + 9;

const thirdOrMoreYears = ((dogAge - 2) * 5) + secondYear;


if (dogAge === 1) {
  console.log(`El perrito tiene ${firstYear} años humanos. Trátalo bien, la adolescencia es una edad difícil.`);
} else if (dogAge > 1 && dogAge < 3) {
  console.log(`El perrito tiene ${secondYear} años humanos. Dale chuches.`);
} else if (dogAge >= 3){
  console.log(`El perrito tiene ${thirdOrMoreYears} años humanos. Quiérele mucho.`);
} else {
  console.log(`Dime los años de tu perro`);
}

