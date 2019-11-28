'use strict';
let treeUnit = '▲';
let tree = '';

function xmasTree (height){
    for (let i=0; i<height; i++){
        tree = tree + treeUnit;
        console.log(tree);
    }
}

xmasTree(5);