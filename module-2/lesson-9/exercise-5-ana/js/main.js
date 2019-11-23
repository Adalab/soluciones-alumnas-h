'use strict';


let triangule = '▲';
let piramide = '';
let start = '*'


function treeXmas1(height) {
    for (let i = 0; i < height; i++) {
        piramide = piramide + triangule;
        console.log(piramide);
    }
};

treeXmas1(5);