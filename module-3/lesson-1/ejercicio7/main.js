'use strict';

const times = [56, 9, 45, 28, 35];

const media = times.reduce((acc, number) => (acc + number)/times.length);

console.log(media);