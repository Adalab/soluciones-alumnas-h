'use strict';

const marks = [5, 4, 6, 7, 9];

const inflateMarks = mark => mark + 1;

const inflatedMarks = marks.map(inflateMarks);

console.log(inflatedMarks); 