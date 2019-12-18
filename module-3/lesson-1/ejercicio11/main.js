'use strict';

const runners = [
    { name: 'Gregory Goyle', time: 56 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 },
  ];

runners.sort((a,b) => a.time - b.time);

console.log(runners);