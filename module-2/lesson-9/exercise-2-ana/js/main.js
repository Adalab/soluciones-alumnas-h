'use strict';


function get100Numbers() {
    const array100Numbers = [];
    for (let i = 1; i <= 100; i++) {
        array100Numbers.push(i);
    }
    array100Numbers.reverse();
    return array100Numbers;
};

console.log(get100Numbers());