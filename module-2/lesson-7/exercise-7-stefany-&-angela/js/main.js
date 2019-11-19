'use strict';

const adalabers = [
  {
    name: 'María',
    age: 29 ,
    profession: 'diseñadora',
  },
  {
    name: 'Lucía',
    age: 32,
    profession: 'dingeniera química',
  },
  {
    name: 'Rocío',
    age: 25,
    profession: 'actriz',
  },
  {
    name: 'Inmaculada',
    age: 21,
    profession: 'diseñadora',
  },
  {
    name: 'Sora',
    age: 25,
    profession: 'programadora',
  },
];

//Una función countAdalabers que devuelve el número de adalabers en el listado:
function countAdalabers(array) {
  return array.length;
}
console.log(countAdalabers(adalabers));


//Una función averageAge que devuelve la media de edad de listado:
let adalaberAgeSum = 0;
const ages = [adalabers[0].age, adalabers[1].age, adalabers[2].age, adalabers[3].age,];

for(let i = 0; i < ages.length; i++){
  adalaberAgeSum += ages[i];
}

let media = adalaberAgeSum / ages.length;

console.log('La media de edad es ' + media);

//Una función theYoungest que devuelve el nombre de la adalaber más joven.
ages.sort(function theYoungest(a, b) {
  return a - b;
});

console.log(ages);

//Una función countDesigners que devuelve el número de adalabers que son diseñadoras:

let professions = [adalabers[0].profession, adalabers[1].profession, adalabers[2].profession, adalabers[3].profession,]

let designersNumber = 0;
function countDesigners(professions){
  for(let i = 0; i < professions.length; i++){
    if(professions[i]==='diseñadora'){
      designersNumber = designersNumber +1;
    }
  }
  return console.log(designersNumber);
}

countDesigners(professions);

console.log(designersNumber);
