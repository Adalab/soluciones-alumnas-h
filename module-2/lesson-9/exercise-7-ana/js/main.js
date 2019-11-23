'use strict';




let triangule = "";
for (let iterator = 1; iterator <= 10; iterator++) {
    triangule = "";
    // console.log(triangule);
    for (let j = iterator; j < 10; j++) {
        triangule += " ";
        // console.log(triangule);
    }
    for (let k = 0; k < (iterator * 2) - 1; k++) {
        triangule += "▲";
    }
    console.log(triangule);
}