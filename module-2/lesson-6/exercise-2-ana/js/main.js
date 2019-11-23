'use strict';

const adalaber = {};
adalaber.name = 'Susana';
adalaber.age = 34;
adalaber.job = 'periodista';


adalaber.run = function () {
    console.log(`Estoy corriendo`);
}


adalaber.run = phrase => `Estoy ${phrase}`;

console.log(adalaber.run('corriendo'));

adalaber.runAMarathon = distance => `Estoy corriendo un maratón de ${distance} kilómetros`;
console.log(adalaber.runAMarathon(50));



adalaber.runAMarathon = distance => {
    console.log(`Estoy corriendo un maratón de ${distance} kilómetros`);
}

adalaber.runAMarathon(50);