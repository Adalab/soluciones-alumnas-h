'use strict';

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const greetNames = name => `Bienvenida, ${name}.`;

const greetings = names.map(greetNames);

console.log(greetings);