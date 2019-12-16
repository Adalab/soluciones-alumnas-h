'use strict';

import Polygon from './polygon.js';

export default class Square extends Polygon{
    constructor(sideLength){
        super(4, sideLength, sideLength);
        this.side = sideLength;
    }
}