'use strict';

import Square from './square.js';
import Triangle from './triangle.js';

const mySquare = new Square(4);
const myTriangle = new Triangle(4,3);

const mySquarePerimeter = mySquare.perimeter();
const mySquareArea = mySquare.area();
const myTrianglePerimeter = myTriangle.perimeter();
const myTriangleArea = myTriangle.area();

export {mySquarePerimeter, mySquareArea, myTrianglePerimeter, myTriangleArea};