'use strict';

const runners = [
    { name: 'Gregory Goyle', time: 56 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 },
  ];

//const winner = runners.reduce((best, runner) => runner.time < best.time ? runner.time : best);

//Esto es lo mismo que esto:

// const winner = runners.reduce(findWinner, runners[0].time);

// function findWinner(winner,runner){
//     if(runner.time < winner){
//       console.log('if');
//         return runner.time;
//     } else {
//       console.log('else');
//         return winner;
//     }
// }

// function findIndex(myArray){
//   for (var i=0; i < myArray.length; i++) {
//       if (myArray[i].time === winner) {
//           return myArray.indexOf(myArray[i]);
//       }
//   }
// }

// const i = findIndex(runners);

// const winnerName = runners[i].name;

//console.log(winner);


///////////////// DUDA!! Si pongo runner.time sí me saca el número más bajo, pero si pongo runner.name no me saca el nombre que correspondería a ese número más bajo, y si hago indexOf me dice que undefined...

// const chooseWinner = (acc, runner) => {
//   let bestTime = acc.time;
//   let candidateTime = runner.time;
//   if (candidateTime < bestTime) {
//       acc = runner;
//   }
//   return acc;
// }

const chooseWinner = (acc, runner) => runner.time < acc.time ? acc = runner : acc;

const winner = runners.reduce(chooseWinner);
console.log(winner.name);
