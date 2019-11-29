'use strict';
let treeUnit = '▲';
let tree = '';
let star = '*';
let trunk = '|';

function xmasTree (height){
    console.log(star)
    for (let i=0; i<height; i++){
        for (let k=0; k<height; k++){
            console.log(' ');
        }
        for (let j=0; j<height; j++){
            //tree = tree + treeUnit;
            console.log(treeUnit);
        }
        console.log(' ');
    }
    console.log(trunk);
}

xmasTree(10);