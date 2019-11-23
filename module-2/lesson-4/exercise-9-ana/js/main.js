'use strict';

//FUNCION NORMAL

//ejemplo 1

function multiplication(a, b) {
    const result = a * b;
    return result;
}
const multiplicationResult = multiplication(3, 4);

console.log(multiplicationResult);

//ejemplo 2

function getWaitingTime(minutes) {
    return `Please, wait ${minutes} minutes`
}

console.log(getWaitingTime(4));


//ARROW FUNCTIONS

//ejemplo 1

const multiplication2 = (a, b) => {
    return a * b
};

console.log(multiplication2(3, 2)); //devuelve 6

//ejemplo 2

const getWaitingTime2 = (minutes) => `Please, wait ${minutes} minutes`;

console.log(getWaitingTime2(60));