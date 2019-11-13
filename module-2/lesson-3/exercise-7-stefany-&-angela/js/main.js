'use strict';

/*Vamos a escribir un pequeño programa que nos permita saber cuál será el siguiente año bisiesto. Para aportar un poco de información, sabemos que los años bisiestos se producen cada cuatro años a partir del año 0. El primer año bisiesto fue 4, el segundo 8 y así progresivamente. La idea de este ejercicio es que, si estuviésemos en el año 3, al ejecutarlo apareciese en la consola el texto "4", ya que el año 4 sería el siguiente año bisiesto.*/

const yearInCourse = 2019;

const moduleYear = yearInCourse % 4;

if (moduleYear === 0) {
  let nextLeapYear = yearInCourse + 4;
  console.log(`${yearInCourse} es un año bisiesto. ${nextLeapYear} será el próximo año bisiesto.`);
} else if (moduleYear === 1) {
  let nextLeapYear = yearInCourse + 3;
  console.log(`${yearInCourse} no es un año bisiesto. ${nextLeapYear} será el próximo año bisiesto`);
} else if (moduleYear === 2) {
  let nextLeapYear = yearInCourse + 2;
  console.log(`${yearInCourse} no es un año bisiesto. ${nextLeapYear} será el próximo año bisiesto.`);
} else if (moduleYear === 3) {
  let nextLeapYear = yearInCourse + 1;
  console.log(`${yearInCourse} no es un año bisiesto. ${nextLeapYear} será el próximo año bisiesto.`);
} else {
  console.log(`Por favor, introduce un año válido`);
}

