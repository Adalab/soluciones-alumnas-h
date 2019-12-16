'use strict';

class Square{
    perimeter(side){
        console.log(side * 4);
    }

    area(side){
        console.log(side * side);
    }
}

const mySquare = new Square();


mySquare.perimeter(9);
mySquare.area(9);