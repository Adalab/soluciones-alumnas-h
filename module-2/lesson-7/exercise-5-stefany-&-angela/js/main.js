'use strict';

let sum = 0;
const numbers = [2, 5, 7, 8];
numbers[4] = 8;
let media = 0;

function average(numbers){
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
media = sum / numbers.length;
}

average(numbers);

console.log('La media es ' + media);


