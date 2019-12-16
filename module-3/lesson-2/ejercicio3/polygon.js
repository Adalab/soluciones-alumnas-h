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
};

export default Polygon;