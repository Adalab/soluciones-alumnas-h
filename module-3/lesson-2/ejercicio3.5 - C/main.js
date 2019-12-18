'use strict';

class Polygon{
    constructor(sides, base, height ){
        this.numberOfSides = sides;
        this.base = base;
        this.height = height;
    }

    perimeter(){
        return this.base * this.numberOfSides;
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

    get side(){
        return super.base;
    }

    set side(newSide){
        super.base = newSide;
        super.height = newSide;
    }
}

const mySquare = new Square(7);

const mySqArea = mySquare.area();

console.log(mySqArea);

mySquare.side = 47;

const mySq2Area = mySquare.area();

console.log(mySq2Area);
