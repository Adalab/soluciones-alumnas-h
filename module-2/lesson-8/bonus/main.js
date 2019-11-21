'use strict';

// const potato = 'patata';

// const ten = () =>  { 
//     for (let i = 0; i < 10 ; i++) {
//         console.log(potato)
//     }
// }


// const ten = (word) =>  { 
//     for (let i = 0; i < 10 ; i++) {
//         console.log(word)
//     }
// }


// const ten = (word, num) =>  { 
//     for (let i = 0; i < num ; i++) {
//         console.log(word)
//     }
// }



// const ten = (word, num) =>  { 
//     for (let i = 0; i < num ; i++) {
//         console.log(word)
//     }
// }


// const maxNumber = 10; 

// function getRandomNumber(max) {
//     return Math.ceil(Math.random() * max);
// }

// const writeThis = (word, randomNumber ) => {
//     for (let i = 0; i < randomNumber; i++){
//         console.log(word);
//     }
// }

// const randomNumber = getRandomNumber(maxNumber);
// console.log(randomNumber);

// writeThis('patata', randomNumber);
// writeThis('aguacate', randomNumber);
// writeThis('pizza', randomNumber);

const myWordList = [
    {
        text:'Pencil',
        total: 6,
    },
    {
        text:'Thermo',
        total: 2,
    },
    {
        text:'TV',
        total: 8,
    },
    {
        text:'Phone',
        total: 4,
    },
];

const writeThis = (word, number ) => {
        for (let i = 0; i < number; i++){
            console.log(word);
        }
    }

const writeMyArray = (arr) => {
    for (let i =0; i < arr.length ; i++) {
        writeThis(arr[i].text,arr[i].total);
    }
}

writeMyArray(myWordList);
58


