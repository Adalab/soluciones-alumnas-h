'use strict';

class Square{
    constructor(side) {
        this.side = side;
    }

    perimeter(){
        console.log(this.side * 4);
    }

    area(){
        console.log(this.side * this.side);
    }
}

const mySquare1 = new Square(1);
const mySquare2 = new Square(3);
const mySquare3 = new Square(7);


mySquare1.perimeter();
mySquare1.area();
mySquare2.perimeter();
mySquare2.area();
mySquare3.perimeter();
mySquare3.area();
