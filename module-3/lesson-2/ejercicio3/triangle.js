'use strict';

import Polygon from './polygon.js';

export default class Triangle extends Polygon{
    constructor(baseLength, heightLength){
        super(3, baseLength, heightLength);
    }

    area(){
        return super.area() / 2;
    }
}