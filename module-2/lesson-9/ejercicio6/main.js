'use strict';
let treeUnit = '▲';
let tree = '';
let star = '*';
let trunk = '|';

function xmasTree (height){
    console.log(star)
    for (let i=0; i<height; i++){
        tree = tree + treeUnit;
        console.log(tree);
    }
    console.log(trunk);
}

xmasTree(10);