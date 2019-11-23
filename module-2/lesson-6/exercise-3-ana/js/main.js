'use strict';

const adalaber = {};
adalaber.name = 'Susana';
adalaber.age = 34;
adalaber.job = 'periodista';
adalaber.showBio = function () {
    return 'Mi nombre es ' + this.name + ' tengo ' + this.age + ' años y soy ' + this.job;
}

console.log(adalaber.showBio());


const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = 25;
adalaber2.job = 'actriz';
adalaber2.showBio = function () {
    return 'Mi nombre es ' + this.name + ' tengo ' + this.age + ' años y soy ' + this.job;
}

console.log(adalaber2.showBio());