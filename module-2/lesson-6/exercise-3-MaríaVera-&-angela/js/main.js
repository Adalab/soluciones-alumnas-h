'use strict';
/*Crea un nuevo objeto en JavaScript adalaber1 que nos sirva para representar (modelar) a una Adalaber. Tenemos estos datos:
Susana, 34 años, periodista
Luego muestra en la web una frase como esta, accediendo a los datos del objeto:
'Mi nombre es Susana, tengo 34 años y soy periodista'
Ahora hacemos lo mismo (crear el objeto adalaber2 y mostrar una frase descriptiva) con una nueva Adalaber con estos datos:
Rocío, 25 años, actriz*/
const adalaber1 = {};
adalaber1.name = 'Susana',
adalaber1.age = 34,
adalaber1.profession = 'periodista',
adalaber1.showBio = function() {
  return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profession}.`;
}

console.log(adalaber1.showBio());

const adalaber2 = {};
adalaber2.name = 'Rocío',
adalaber2.age = 25,
adalaber2.profession = 'actriz',
adalaber2.showBio = function() {
  return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profession}.`;
}

console.log(adalaber2.showBio());
