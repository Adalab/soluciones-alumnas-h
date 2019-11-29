'use strict';

let acc = 0;

function geta100Numbers(){

    const myArray = [];
    
    const myArrayLength = 100;

    for (let i=0; i<myArrayLength; i++){
        acc++
        myArray.push(acc);
    }

    return myArray;
};

console.log(geta100Numbers());