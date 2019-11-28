'use strict';

function bestLostNumber(){

    const lostNumbers = [4, 8, 15, 16, 23, 42];
    const evenLostNumbers = [];
    const multiplesOfThreeLostNumbers = [];

        for (let i=0; i<lostNumbers.length; i++){

            if(lostNumbers[i] % 2 === 0){
                evenLostNumbers.push(lostNumbers[i]);
            }

            if(lostNumbers[i] % 3 === 0){
                multiplesOfThreeLostNumbers.push(lostNumbers[i]);
            }
        }

    const evenAndMultiplesOfThreeLostNumbers = evenLostNumbers.concat(multiplesOfThreeLostNumbers);

    return [evenLostNumbers, multiplesOfThreeLostNumbers, evenAndMultiplesOfThreeLostNumbers];
}

const bestLostNumbers = bestLostNumber();

console.log(bestLostNumbers[0]);
console.log(bestLostNumbers[1]);
console.log(bestLostNumbers[2]);