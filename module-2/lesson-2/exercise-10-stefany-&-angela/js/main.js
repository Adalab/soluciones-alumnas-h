'use strict';

const dayHours = 24;
const yearHours = 365 * dayHours;
const age = document.querySelector('.stefanyAge');
const numberAge = parseInt(age.innerHTML);
const hoursLived = yearHours * numberAge;
console.log(hoursLived + ' hours lived');