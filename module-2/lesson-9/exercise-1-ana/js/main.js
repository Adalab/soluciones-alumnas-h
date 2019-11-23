'use strict';



function get100Numbers() {
    const array100Numbers = [];
    for (let i = 1; i <= 100; i++) {
        array100Numbers.push(i);
    }
    return array100Numbers;
};

console.log(get100Numbers());

/*la constante tiene que ir dentro para que 
solo añada 100 una vez porque sino fuera, va añadiendo 100 cada vez
que se ejecuta*/