'use strict';




function createTreePepi(height) {
    let trianguleP = '▲';
    let startP = '*'
    const lineLenght = height + 1;

    for (let i = 0; i < height; i++) {
        const half = (lineLenght - i) / 2;
        if (i === 0) {
            console.log(' '.repeat(half), startP, ' '.repeat(half));
            console.log(' '.repeat(half), trianguleP, ' '.repeat(half));
        } else {
            console.log(' '.repeat(half), trianguleP.repeat(i), ' '.repeat(half));
        }
    }

    console.log(' '.repeat(lineLenght / 2), '|', ' '.repeat(lineLenght / 2));
}

createTreePepi(10);