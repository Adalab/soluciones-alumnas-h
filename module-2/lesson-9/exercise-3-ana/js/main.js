'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];


function bestLostNumberPar() {
    const parLostNumbers = new Array();
    for (let i = 0; i < lostNumbers.length; i++) {
        // console.log(lostNumbers[i]);
        // console.log('iterator', i);
        const isPar = (lostNumbers[i] % 2 === 0);
        if (isPar) {
            // console.log('Este es numero par', lostNumbers[i]);
            parLostNumbers.push(lostNumbers[i]);
            // console.log('Esta es la array que devuelvo', parLostNumbers);
        }
    };

    return parLostNumbers;
};


// console.log(bestLostNumberPar());
console.log(`Esto es lo que devuelve ${bestLostNumberPar()}`);


function bestLostNumber3() {
    const multiple3LostNumbers = [];
    for (let i = 0; i < lostNumbers.length; i++) {
        // console.log('iterator', i, ':', lostNumbers[i]);
        const multiple3 = (lostNumbers[i] % 3 === 0);
        if (multiple3) {
            // console.log('Este es numero multiplo de 3', lostNumbers[i]);
            multiple3LostNumbers.push(lostNumbers[i]);
        }

    }
    return multiple3LostNumbers;
};

console.log(`Esto es lo que devuelve ${bestLostNumber3()}`);

const resultParNumber = bestLostNumberPar();
const resultMultiple3Number = bestLostNumber3();


//Aqui concatenamos las dos arrays
const resultNewArray = resultParNumber.concat(resultMultiple3Number);

console.log(resultParNumber + ' ' + resultMultiple3Number);
console.log(resultNewArray);