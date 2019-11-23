'use strict';




function createTree(height) {
    let trianguleP = '▲';
    let piramideP = '';
    let startP = '*'

    for (let i = 0; i <= height; i++) {
        if (i === 0) console.log(startP);
        else {
            console.log(trianguleP);
            trianguleP += '▲';
        }
    }
}

createTree(10);