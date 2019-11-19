'use strict';

let year = 2017
for (let i = 0; i < 15; i++) {
    year = year + 3;
    console.log(`próxima luna, año:
        ${year}`);
}

/*otra forma de hacerlo (peor porque hay constantes innecesarias)
let lastLuneYear = 2017;
let LuneYears = 15 * 3;
let maxLuneYears = lastLuneYear + LuneYears;


for (let lastLuneYear = 2017 + 3; lastLuneYear < maxLuneYears; lastLuneYear += 3) {
  const nextLuneYears = lastLuneYear
  console.log(`En ${nextLuneYears} habrá Luna del calzador`)
}*/

