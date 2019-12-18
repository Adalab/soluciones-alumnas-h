'use strict';

class Polygon{
    constructor(sides, base, height ){
        this.numberOfSides = sides;
        this.base = base;
        this.height = height;
    }

    perimeter(){
        console.log(this.base * this.numberOfSides);
    }

    area(){
        return this.base * this.height;
    }
}

class Square extends Polygon{
    constructor(sideLength){
        super(4, sideLength, sideLength);
        this.side = sideLength;
    }
}

class Triangle extends Polygon{
    constructor(baseLength, heightLength){
        super(3, baseLength, heightLength);
    }

    area(){
        console.log (super.area() / 2);
    }
}

const mySquare = new Square(4);
const myTriangle = new Triangle(4,3);

mySquare.perimeter();
console.log(mySquare.area());
myTriangle.perimeter();
myTriangle.area();