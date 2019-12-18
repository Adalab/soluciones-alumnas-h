'use strict';

const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];

const winner = runners
.filter(runner => runner.student === true)
.reduce((winner, runner) => runner.time < winner ? runner.time : winner, runners[0].time);

const winnerData = runners.find(runner => runner.time === winner);

//Esto es lo mismo que esto:

// const winner = runners.reduce(findWinner, runners[0].time);

// function findWinner(winner,runner){
//     if(runner.time < winner){
//         return runner.name;
//     } else {
//         return winner;
//     }
// }

console.log(winnerData);

///////////////// DUDA!! Si pongo runner.time sí me saca el número más bajo, pero si pongo runner.name no me saca el nombre que correspondería a ese número más bajo, y si hago indexOf me dice que undefined...