'use strict';

let acc = 0;
const myArray = [];

function geta100Numbers(){
    
    const myArrayLength = 100;

    for (let i=0; i<myArrayLength; i++){
        acc++
        myArray.push(acc);
    }

    return myArray;
};

//const myArray = geta100Numbers();

function getReversed100Numbers(array){

    return array.reverse();
}
console.log(geta100Numbers());
console.log(getReversed100Numbers(myArray));